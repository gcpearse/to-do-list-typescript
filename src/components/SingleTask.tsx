import { Task } from '../model'
import { MdModeEdit, MdDelete, MdDone } from 'react-icons/md'
import './styles.css'
import { useEffect, useRef, useState } from 'react'

interface Props {
  task: Task
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {

  const [canEdit, setCanEdit] = useState<boolean>(false)
  const [edit, setEdit] = useState<string>(task.task)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [canEdit])

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault()
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, task: edit }
      } else {
        return task
      }
    }))
    setCanEdit(false)
  }

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  const handleDone = (id: number) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete }
      } else {
        return task
      }
    }))
  }

  return (
    <form
      className='task-form'
      onSubmit={(event) => handleEdit(event, task.id)}
      onBlur={(event) => handleEdit(event, task.id)}>
      {canEdit ? (
        <input
          type='text'
          className='task-text'
          value={edit}
          ref={inputRef}
          onChange={(event) => setEdit(event.target.value)} />
      ) : !task.isComplete ? (
        <span className='task-text'>{task.task}</span>
      ) : (
        <s className='task-text'>{task.task}</s>
      )}
      <div>
        <span
          className='task-icon'
          onClick={() => {
            if (!canEdit && !task.isComplete) {
              setCanEdit(!canEdit)
            }
          }}>
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
