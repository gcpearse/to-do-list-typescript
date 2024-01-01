import './styles.css'

interface Props {
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<Props> = ({ task, setTask }) => {
  return (
    <form className='input-form'>
      <input
        type='text'
        className='input-field'
        placeholder='Enter a task'
        value={task}
        onChange={(event) => setTask(event.target.value)} />
      <button
        type='submit'
        className='input-btn'>
        ✔
      </button>
    </form>
  )
}

export default Input
