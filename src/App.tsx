import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  

  return (
    <>
    <h1>Let's get started!</h1>
    <Input label="Name" id="name" type="text"></Input>
    <Input label="Age" id="age" type="number"></Input>
    <Button href="https://google.com">Google Link</Button>
    <Button type="button">Button to Click</Button>
    </>
  )
}

export default App
