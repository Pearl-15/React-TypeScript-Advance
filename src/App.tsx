import './App.css'
import Button from './components/Button'
import Form, { type FormHandle } from './components/Form'
import Input from './components/Input'
import { useRef } from 'react';

function App() {

  // calling ForHandle from another component
  const customForm = useRef<FormHandle>(null);
  
  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: number};
    console.log("extractedData : ", extractedData);

    // clear the form by callling another component method
    customForm.current?.clear();
  }

  return (
    <>
    <h1>Let's get started!</h1>
    <Form onSave={handleSave} ref={customForm}>
      <Input label="Name" id="name" type="text"></Input>
      <Input label="Age" id="age" type="number"></Input>
      <Button>Save</Button>
    </Form>
    </>
  )
}

export default App
