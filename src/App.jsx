import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    tasks: [],
  });

  // function to add the task

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // function to delete the task

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  //function to handle the selected project

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

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

  //function to delete the project
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter(
          (pr) => pr.id !== projectState.selectedProjectId
        ),
      };
    });
  }

  // to find the selected project from our state
  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          projects={projectState.project}
          onStartAddProject={handleStartProject}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
