import React, { useEffect, useState } from "react";
import ProjectCard from "../CardProject";
import SkeletonCardProjects from "../CardProject/Skeleton";
import { useProjects } from "../../../../context/ProjectsContext";

export default function ListProjects({ filters }) {
  const { projects, isLoading } = useProjects();

  const filteredProjects = projects.filter((project) => {
    if (!filters) return true;

    const { searchTerm, technology, type } = filters;

    if (
      searchTerm &&
      !project.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    if (technology && !project.technologies.includes(technology)) {
      return false;
    }

    if (type === "deploy" && !project.deploy) {
      return false;
    }

    if (type === "github" && !project.github) {
      return false;
    }

    return true;
  });

  return isLoading
    ? Array.from({ length: 6 }).map((_, i) => <SkeletonCardProjects key={i} />)
    : filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ));
}
