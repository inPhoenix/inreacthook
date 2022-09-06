import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const onSubmit = () => {
    console.log('==> onSubmit')
  }
  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur'
  })

  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">React Hook Form (provoke the error: Required: true, maxLength: 2)</label>
          <input name="firstName" placeholder="Insert a long name or click and leave empty" ref={register({ required: true, maxLength: 2 })} />
          {errors.firstName && <p>"This is required"</p>}
        </div>
        <div className="checkbox-wrapper">
          <label htmlFor="checkBox">Click on the CheckBox to trigger the OnBlur validation:</label>
            <input name='checkBox' type="checkbox" checked={checked} onChange={handleChange} />
        </div>
      </form>
    </div>
  )
}

export default App
