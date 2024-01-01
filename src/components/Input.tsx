import { useRef } from 'react'
import './styles.css'

interface Props {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (event: React.FormEvent) => void
}

const Input: React.FC<Props> = ({ input, setInput, handleSubmit }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className='input-form'
      onSubmit={(event) => {
        handleSubmit(event)
        inputRef.current?.blur()
      }}>
      <input
        type='text'
        className='input-field'
        placeholder='Enter a task...'
        value={input}
        ref={inputRef}
        onChange={(event) => setInput(event.target.value)} />
      <button
        type='submit'
        className='input-btn'>
        ✔
      </button>
    </form>
  )
}

export default Input
