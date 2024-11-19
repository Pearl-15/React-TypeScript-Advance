import './App.css'
import Button from './components/Button'
import Form from './components/Form'
import Input from './components/Input'

function App() {
  
  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: number};
    console.log("extractedData : ", extractedData);
  }

  return (
    <>
    <h1>Let's get started!</h1>
    <Form onSave={handleSave}>
      <Input label="Name" id="name" type="text"></Input>
      <Input label="Age" id="age" type="number"></Input>
      <Button>Save</Button>
    </Form>
    </>
  )
}

export default App
