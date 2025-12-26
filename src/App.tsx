import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import type { Project } from '../types/Project'
import Nav from '@/components/Nav'
import CreateProjectButton from '@/components/CreateProjectButton'
import { Link } from 'react-router'





function App() { 
  const [count, setCount] = useState(0)
  const [projects, setProjects] = useState<Project[]>([{id: 1, name : "Yo", "createdAt": new Date(), modifiedAt: new Date(), status: "active"}])

  
  const createProjects = () => {
    setProjects([...projects, { id: 1, name : "Test", "createdAt": new Date(), modifiedAt: new Date(), status: "active" }])
  }

  return (
    <>
     <div className="flex flex-col gap-2 p-10">
       <div className="flex w-full justify-end items-center"> 
        <CreateProjectButton /> 
       </div>
       <div className="">
          {projects.map((project: Project) => (  
            <Link to={`project/${project.id}`} key={project.name} className="flex gap-2 rounded-xl w-full border-2 border-slate-900 p-2 ">
              <h1>{project.name}</h1>
              <span>{project.status}</span>
              <span>{project.createdAt.getDate()}-{project.createdAt.getMonth()}-{project.createdAt.getFullYear()}</span>
            </Link>
            ))
          }
       </div>
     </div>
    </>

  )
}


export default App
