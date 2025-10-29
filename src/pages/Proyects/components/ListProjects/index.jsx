import React, { useEffect, useState } from "react";
import ProjectCard from "../CardProject";
import SkeletonCardProjects from "../CardProject/Skeleton";
import { useProjects } from "../../../../context/ProjectsContext";

export default function ListProjects({ category }) {
  const { projects, isLoading } = useProjects();
  
  // Filtrar por categoría si aplica
  const filteredProjects = category
    ? projects.filter((p) => p.category === category)
    : projects;

  return isLoading
    ? Array.from({ length: 6 }).map((_, i) => <SkeletonCardProjects key={i} />)
    : filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ));
}
