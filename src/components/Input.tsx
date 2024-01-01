import './styles.css'

interface Props {
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (event: React.FormEvent) => void
}

const Input: React.FC<Props> = ({ input, setInput, handleSubmit }) => {
  return (
    <form
      className='input-form'
      onSubmit={handleSubmit}>
      <input
        type='text'
        className='input-field'
        placeholder='Enter a input'
        value={input}
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
