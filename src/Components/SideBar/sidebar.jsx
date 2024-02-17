import { useState } from "react";
import iconSidebar from "../../lib/data";

function SideBar() {
  const [selected, setSelected] = useState(0);

  function updateToggleSelected(selected) {
    setSelected(selected);
  }

  return (
    <div className=" h-screen flex">
      <div className="flex flex-col h-full items-center justify-between bg-[#1C1D22] px-6 py-7 w-20">
        <div className="flex flex-col items-center">
          <div className="w-fit h-fit p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 26"
              fill="none"
              className="w-10 h-10"
            >
              <path
                d="M24 8.88887L14 4V5.46663L22.5 9.62219L14 13.7777V26L24 21.1111V8.88887Z"
                fill="white"
              />
              <path
                d="M0 17.1111L10 22V20.5334L1.49996 16.3778L10 12.2222V-7.62939e-06L0 4.88887V17.1111Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="py-5">
            <ul className="flex flex-col gap-2">
              {iconSidebar.map((icon, index) => (
                <li
                  key={index}
                  className={`p-2 hover:bg-white/10 cursor-pointer rounded-full ${
                    selected === index ? "bg-white/10" : ""
                  }`}
                  onClick={() => updateToggleSelected(index)}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path d={icon.path} fill="white" />
                    </g>
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-2 hover:bg-white/10 cursor-pointer rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g opacity="0.5">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0833 18.3333C10.0833 17.8271 9.67293 17.4167 9.16667 17.4167H4.58333V4.58333H9.16667C9.67293 4.58333 10.0833 4.17293 10.0833 3.66667C10.0833 3.1604 9.67293 2.75 9.16667 2.75H4.58333C3.57081 2.75 2.75 3.57081 2.75 4.58333V17.4167C2.75 18.4292 3.57081 19.25 4.58333 19.25H9.16667C9.67293 19.25 10.0833 18.8396 10.0833 18.3333Z"
                fill="white"
              />
              <path
                d="M19.9041 11.6422C19.9891 11.5557 20.0534 11.4565 20.0971 11.3509C20.1416 11.2436 20.1663 11.126 20.1667 11.0027L20.1667 11L20.1667 10.9973C20.166 10.7636 20.0765 10.5301 19.8982 10.3518L16.2315 6.68515C15.8735 6.32717 15.2931 6.32717 14.9352 6.68515C14.5772 7.04313 14.5772 7.62353 14.9352 7.98151L17.037 10.0833H8.25C7.74374 10.0833 7.33333 10.4937 7.33333 11C7.33333 11.5063 7.74374 11.9167 8.25 11.9167H17.037L14.9352 14.0185C14.5772 14.3765 14.5772 14.9569 14.9352 15.3148C15.2931 15.6728 15.8735 15.6728 16.2315 15.3148L19.8975 11.6488L19.9041 11.6422Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="w-80 h-full bg-white py-8 px-7 border-r border-[#1C1D22] rounded-r-sm">
        <div className="flex gap-32 items-center w-fit">
          <h1 className="text-3xl font-bold text-[#1C1D22]">Projects️</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <circle cx="14" cy="14" r="14" fill="#1C1D22" fill-opacity="0.08" />
            <g opacity="0.4">
              <path
                d="M18 14L10 14"
                stroke="#1C1D22"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M14 18L14 10"
                stroke="#1C1D22"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
