import { Task } from '../model'
import { MdModeEdit, MdDelete, MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
  task: Task
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {

  const handleDelete = (id: number) => {
    setTasks(() => {
      return tasks.filter((task) => {
        return task.id !== id
      })
    })
  }

  const handleDone = (id: number) => {
    setTasks(() => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete }
        } else {
          return task
        }
      })
    })
  }

  return (
    <form className='task-form'>
      {!task.isComplete ? (
        <span className='task-text'>{task.task}</span>
      ) : (
        <s className='task-text'>{task.task}</s>
      )}
      <div>
        <span className='task-icon'>
          <MdModeEdit />
        </span>
        <span
          className='task-icon'
          onClick={() => handleDelete(task.id)}>
          <MdDelete />
        </span>
        <span
          className='task-icon'
          onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTask
