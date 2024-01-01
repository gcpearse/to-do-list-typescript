import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import { Task } from './model'

const App: React.FC = () => {

  const [input, setInput] = useState<string>("")
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
      setInput("")
    }
  }

  return (
    <>
      <h1>Sortmin</h1>
      <Input input={input} setInput={setInput} handleSubmit={handleSubmit} />
    </>
  )
}

export default App
