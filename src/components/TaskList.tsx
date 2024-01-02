import { useState } from 'react'
import { Task } from '../model'
import SingleTask from './SingleTask'
import './styles.css'

interface Props {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {

  const [confirm, setConfirm] = useState<boolean>(false)

  return (
    <div className='tasks'>
      {tasks.map((task) => {
        return <SingleTask key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      })}
      {tasks.length ? (
        <button
          className='clear-btn'
          onClick={() => setConfirm(true)}>
          Clear list
        </button>
      ) : (
        null
      )}
      {confirm ? (
        <div className='confirm-section'>
          <p>Are you sure you want to clear the list?</p>
          <div className='confirm-btns'>
            <button
              className='clear-btn'
              onClick={() => {
                setTasks([])
                setConfirm(false)
              }}>
              Yes
            </button>
            <button
              className='clear-btn'
              onClick={() => setConfirm(false)}>
              No
            </button>
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  )
}

export default TaskList
