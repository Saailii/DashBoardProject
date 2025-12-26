import type { Task } from '../types/Task'

type Project = {
  id: string | number,
  name: string,
  createdAt: Date,
  modifiedAt: Date,
  Task: Task[] | null,
  status: "active" | "pause" | "stopped"
}

export type { Project } 

