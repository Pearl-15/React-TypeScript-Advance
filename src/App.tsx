import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import { useRef } from 'react';

function App() {
  
  const input = useRef<HTMLInputElement>(null);

  return (
    <>
    <h1>Let's get started!</h1>
    <Input label="Name" id="name" type="text" ref={input}></Input>
    <Input label="Age" id="age" type="number"></Input>
    <Button href="https://google.com">Google Link</Button>
    <Button type="button">Button to Click</Button>
    </>
  )
}

export default App
