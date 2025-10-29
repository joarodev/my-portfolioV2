import React, { createContext, useContext, useEffect, useState } from "react";
import { projectsFirebase } from "../data/firebase.js";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // cargar proyectos solo una vez al inicio
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsFirebase();
        setProjects(data);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, isLoading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Hook para acceder al contexto fácilmente
export const useProjects = () => useContext(ProjectsContext);