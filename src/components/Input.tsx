import './styles.css'

const Input = () => {
  return (
    <form className='input-form'>
      <input
        type='text'
        className='input-field'
        placeholder='Enter a task' />
      <button
        type='submit'
        className='input-btn'>
        ✔
      </button>
    </form>
  )
}

export default Input
