import { io } from "socket.io-client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const SOCKET_URL =
  process.env.REACT_APP_SOCKET_URL ||
  (typeof window !== "undefined" ? window.location.origin : "http://localhost:3001");

let socketSingleton = null;
let activeRoom = null;
let activeRoomUsers = 0;

const ensureSocket = () => {
  if (!socketSingleton) {
    socketSingleton = io(SOCKET_URL, {
      transports: ["websocket"],
      autoConnect: true,
      reconnection: true,
    });
  }
  return socketSingleton;
};

const retainRoom = (socket, room) => {
  if (!room) return;
  if (activeRoom !== room) {
    if (activeRoom) {
      socket.emit("leave-room", { room: activeRoom });
    }
    activeRoom = room;
    activeRoomUsers = 0;
    socket.emit("join-room", { room });
  }
  activeRoomUsers += 1;
};

const releaseRoom = (socket, room) => {
  if (!room || activeRoom !== room) return;
  activeRoomUsers = Math.max(0, activeRoomUsers - 1);
  if (activeRoomUsers === 0) {
    socket.emit("leave-room", { room });
    activeRoom = null;
  }
};

const rejoinActiveRoom = (socket) => {
  if (!activeRoom) return;
  socket.emit("join-room", { room: activeRoom });
};

export const getSocket = () => ensureSocket();

export const useSocketRoom = () => {
  const location = useLocation();
  const [connected, setConnected] = useState(false);
  const role = useMemo(
    () => new URLSearchParams(location.search).get("role"),
    [location.search]
  );

  const socketRef = useRef(null);
  if (!socketRef.current) {
    socketRef.current = ensureSocket();
  }

  useEffect(() => {
    const socket = socketRef.current;

    const handleConnect = () => {
      setConnected(true);
      rejoinActiveRoom(socket);
    };
    const handleDisconnect = () => setConnected(false);

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    setConnected(socket.connected);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
    };
  }, []);

  useEffect(() => {
    const socket = socketRef.current;
    retainRoom(socket, role);

    return () => {
      releaseRoom(socket, role);
    };
  }, [role]);

  const emitToRoom = (event, payload = {}) => {
    const socket = socketRef.current;
    if (!role) return false;
    socket.emit(event, { room: role, ...payload });
    return true;
  };

  return { socket: socketRef.current, role, connected, emitToRoom };
};
