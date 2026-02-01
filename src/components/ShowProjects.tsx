import { useEffect, useState } from 'react'
import type { Project } from '../../types/Project'
import CreateProjectButton from './CreateProjectButton'

export default function ShowProjects() {
  const [projects, setProjects] = useState<Project[]>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/project")
      const data = await response.json()
      console.log(data);

      setProjects(data)
    }
    fetchData();
  }, [])

  return (
    <div className='flex flex-col gap-3'>
      {projects && projects.map((project: Project) => (
        <div key={project.name} className='border-2 '>
          <h1>{project.name}</h1>
        </div>
      ))}
      <CreateProjectButton />
    </div>
  )
}

