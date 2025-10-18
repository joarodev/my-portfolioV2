import React, { useEffect, useState } from "react";
import ProjectCard from "../CardProject";
import SkeletonCardProjects from "../CardProject/Skeleton";
import { projectsFirebase } from "../../../../data/firebase";

export default function ListProjects({ category }) {
  const [proyects, setProyects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
        if (!category) {
            projectsFirebase().then((resp)=>{
                setProyects(resp)
            })
            .catch((error) => alert(error))
            .finally(()=> setIsLoading(false))
        } else {
            proyectsCategory(category).then((resp) => {
                setProyects(resp);
                setIsLoading(false);
            })
            .finally(()=> setIsLoading(false))
        } 
    },[category]);

  return isLoading
    ? Array.from({ length: 6 }).map((_, index) => (
        <SkeletonCardProjects key={index} />
      ))
    : proyects.map((project) => <ProjectCard key={project.id} {...project} />);
}
