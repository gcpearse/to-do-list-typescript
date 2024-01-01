import { useState } from 'react'
import './App.css'
import Input from './components/Input'

const App: React.FC = () => {

  const [task, setTask] = useState<string>("")

  return (
    <>
      <h1>Sortmin</h1>
      <Input task={task} setTask={setTask} />
    </>
  )
}

export default App
