import { useParams } from 'react-router'
import CreateTaskButton from '@/components/CreateTaskButton' 


export default function DisplayProject() {
    let { pid } = useParams();
    return (
      <>
        <CreateTaskButton />
        <div>{pid}</div>
      </>
    )
}

