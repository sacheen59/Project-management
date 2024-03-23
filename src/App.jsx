import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // function to cancel to add project

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  //function to save project

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel ={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          projects={projectState.project}
          onStartAddProject={handleStartProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
