import { useState } from "react";
import { TeamSidebar } from "../../lib/data";
import PersonalSideBar from "./personalSideBar";

function SideBar() {
  const [projectSelected, setProjectSelected] = useState([]);
  const [selected, setSelected] = useState(0);

  function updateProjectSelected(project) {
    // Vérifier si le projet est déjà sélectionné
    const isSelected = projectSelected.includes(project);

    if (isSelected) {
      // Si déjà sélectionné, le retirer du tableau
      const updatedProjects = projectSelected.filter(
        (item) => item !== project
      );
      setProjectSelected(updatedProjects);
    } else {
      // Sinon, l'ajouter au tableau
      setProjectSelected((prevSelected) => [...prevSelected, project]);
    }
  }

  return (
    <div className=" h-screen flex">
      <PersonalSideBar updateToggleSelected={setSelected} selected={selected} />
      <div className="w-80 h-full bg-white py-8 px-7 border-r border-[#1C1D22] rounded-r-sm">
        <div
          id="dashboard"
          className={`${selected !== 0 ? "hidden" : "block"}`}
        >
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold text-[#1C1D22]">Projects</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <circle
                cx="14"
                cy="14"
                r="14"
                fill="#1C1D22"
                fillOpacity="0.08"
              />
              <g opacity="0.4">
                <path
                  d="M18 14L10 14"
                  stroke="#1C1D22"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 18L14 10"
                  stroke="#1C1D22"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
          <div className="mt-8 flex flex-col gap-7">
            <div className="">
              <div className="flex items-center w-full justify-between">
                <h3
                  className={`text-lg font-bold /50  transition-all  ease-in-out duration-300 ${
                    projectSelected.includes("team")
                      ? "text-[#1C1D22]"
                      : "text-[#1C1D22]/50"
                  }`}
                >
                  Team
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  className={`cursor-pointer transition ease-in-out duration-300 ${
                    projectSelected.includes("team") ? "rotate-90" : ""
                  }`}
                  onClick={() => updateProjectSelected("team")}
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#1C1D22"
                    strokeOpacity={`${
                      projectSelected.includes("team") ? "1" : "0.5"
                    }`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`transition-all duration-700 ease-out ${
                  projectSelected.includes("team") ? "block" : "hidden"
                }`}
              >
                <ul>
                  {TeamSidebar.map((team) => (
                    <li key={TeamSidebar.id}>{team.title}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="flex items-center w-full justify-between">
                <h3
                  className={`text-lg font-bold /50  transition-all  ease-in-out duration-300 ${
                    projectSelected.includes("projects")
                      ? "text-[#1C1D22]"
                      : "text-[#1C1D22]/50"
                  }`}
                >
                  Projects
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  className={`cursor-pointer transition ease-in-out duration-300 ${
                    projectSelected.includes("projects") ? "rotate-90" : ""
                  }`}
                  onClick={() => updateProjectSelected("projects")}
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#1C1D22"
                    strokeOpacity={`${
                      projectSelected.includes("projects") ? "1" : "0.5"
                    }`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`transition-all duration-700 ease-out ${
                  projectSelected.includes("projects") ? "block" : "hidden"
                }`}
              >
                <ul>
                  {TeamSidebar.map((team) => (
                    <li key={team.id} className="cursor-pointer">{team.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="profile" className={`${selected !== 1 ? "hidden" : "block"}`}>
          <h1 className="text-3xl font-bold text-[#1C1D22]">Profile</h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
