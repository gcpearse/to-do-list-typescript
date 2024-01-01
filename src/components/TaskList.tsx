import { Task } from '../model'
import SingleTask from './SingleTask'
import './styles.css'

interface Props {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className='tasks'>
      {tasks.map((task) => {
        return <SingleTask key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      })}
    </div>
  )
}

export default TaskList
