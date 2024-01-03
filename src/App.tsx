import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { Task } from './model'
import TaskList from './components/TaskList'

const App: React.FC = () => {

  const [input, setInput] = useState<string>('')
  const [id, setId] = useState<number>(0)
  const [tasks, setTasks] = useState<Task[]>([])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (input) {
      setId(id + 1)
      setTasks([...tasks, {
        id: id,
        task: input,
        isComplete: false
      }])
      setInput('')
    }
  }

  return (
    <>
      <h1>Taskyard</h1>
      <Input input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
