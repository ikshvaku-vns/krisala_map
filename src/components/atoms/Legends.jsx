import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Legends({ className }) {
  const location = useLocation();
  let route = location.pathname;
  const istenkm = route === "/tenkm";
  const isHome = route === "/thirtyfive";
  return (
    <Style className={`${className} overlay-can-hide `}>
      <h2 class="title svelte-1igsnns">Legend</h2>{" "}
      <div class="button-group body">
        {istenkm && (
          <>
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#105b30"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">Mumbai Highway</div>
            </div>{" "}
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#95bb21"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">
                Solapur Mumbai Highway
              </div>
            </div>{" "}
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#76b82a"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">
                {" "}
                Nashik Pune Road
              </div>
            </div>{" "}
          </>
        )}
        {isHome && (
          <>
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#575756"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">Mumbai Highway</div>
            </div>{" "}
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#007F7F"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">
                Solapur Mumbai Highway
              </div>
            </div>{" "}
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#95bb21"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">
                {" "}
                Nashik Pune Road
              </div>
            </div>{" "}
            <div class="metro__item svelte-1igsnns">
              <div class="metro__item--icon svelte-1igsnns">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                    fill="#cca05b"
                  ></path>
                </svg>
              </div>{" "}
              <div class="metro__item--text svelte-1igsnns">
                {" "}
                Telegaion Chakan Road
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </Style>
  );
}

export default Legends;

const Style = styled.div`
  position: absolute;
  top: 12rem;
  right: 1rem;
  width: 11.5% !important;
  margin-top: 10px;
  padding: 8px 15px 15px 15px;
  /* margin-bottom: 10px; */
  border-radius: var(--radius);
  background: var(--panel_background);
  transition: var(--transition);

  width: 100%;
  overflow: hidden;
  /* transform: translateX(-1rem); */

  .title.svelte-1igsnns {
    font-size: 9px;
    text-transform: uppercase;
    text-align: center;
    color: var(--color_text);
  }

  .button-group {
    margin-top: 11px;
  }

  .metro__item.svelte-1igsnns.svelte-1igsnns:not(:last-child) {
    margin-bottom: 11px;
  }

  .metro__item.svelte-1igsnns.svelte-1igsnns {
    display: flex;
    align-items: center;
  }

  .metro__item--icon.svelte-1igsnns.svelte-1igsnns {
    width: 17px;
    height: 17px;
  }

  .metro__item--text.svelte-1igsnns.svelte-1igsnns {
    -webkit-margin-start: 10px;
    margin-inline-start: 10px;
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    color: var(--color_text);
  }
`;
