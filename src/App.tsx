import './App.css'
import Button from './components/Button'
import Container from './components/Container'

function App() {
  

  return (
    <>
    <h1>Let's get started!</h1>
    <Container as={Button} onClick={() => console.log("button has been clicked")}>Click Me </Container>
    </>
  )
}

export default App
