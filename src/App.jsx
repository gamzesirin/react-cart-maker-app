import './App.css'

import { Button, Container, Input, Textarea } from '@mantine/core'

import Card from './components/Card'
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')
  const [paragraf, setParagraf] = useState('')

  const handleCreateCard = () => {
    if (title.trim() !== '' && paragraf.trim() !== '') {
      setList([...list, { title, paragraf }])
      setTitle('')
      setParagraf('')
    }
  }

  return (
    <Container className="App">
      <h1>Create Card</h1>
      <label style={{ fontWeight: 'bold' }}>Card Title</label>

      <Input
        variant="light"
        placeholder="Enter Card Title"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <br />
      <label style={{ fontWeight: 'bold' }}>Card Text</label>
      <br />
      <br />
      <Textarea
        placeholder="Enter Card Text"
        variant="default"
        size="md"
        value={paragraf}
        onChange={(e) => {
          setParagraf(e.target.value)
        }}
      />
      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={handleCreateCard}
      >
        Create Card Now
      </Button>
      {list.map((card, index) => (
        <Card key={index} title={card.title} par={card.paragraf} />
      ))}
    </Container>
  )
}

export default App