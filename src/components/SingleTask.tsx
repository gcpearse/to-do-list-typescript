import { Task } from '../model'
import { MdModeEdit, MdDelete, MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
  task: Task
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
  return (
    <form className='task-form'>
      <span className='task-text'>{task.task}</span>
      <div>
        <span className='task-icon'>
          <MdModeEdit />
        </span>
        <span className='task-icon'>
          <MdDelete />
        </span>
        <span className='task-icon'>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTask
