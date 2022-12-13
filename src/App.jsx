import { useState } from 'react'

import Input from './components/Input'
import Button from './components/Button'

import {
  Container,
  Content,
  Row,
} from './styles'

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${num}`)
    console.log(num)
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  }

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber('0')
      setOperation('')
    }

  }

  const handleMinNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const min = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(min))
      setFirstNumber('0')
      setOperation('')
    }

  }

  const handleMultNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setFirstNumber('0')
      setOperation('')
    }

  }

  const handleDivNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setFirstNumber('0')
      setOperation('')
    }

  }

  const handleResult = () => {

    if (firstNumber != '0' && operation != '' && currentNumber != '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break
        case '-':
          handleMinNumbers();
          break
        case '*':
          handleMultNumbers();
          break
        case '/':
          handleDivNumbers();
          break
        default:
          break;
      }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={() => { handleMultNumbers(); }} />
          <Button label="/" onClick={() => { handleDivNumbers(); }} />
          <Button label="C" onClick={() => { handleClear(); }} />
          <Button label="." onClick={() => { handleAddNumber(''); }} />
        </Row>
        <Row>
          <Button label="7" onClick={() => { handleAddNumber('7'); }} />
          <Button label="8" onClick={() => { handleAddNumber('8'); }} />
          <Button label="9" onClick={() => { handleAddNumber('9'); }} />
          <Button label="-" onClick={() => { handleMinNumbers() }} />
        </Row>
        <Row>
          <Button label="4" onClick={() => { handleAddNumber('4'); }} />
          <Button label="5" onClick={() => { handleAddNumber('5'); }} />
          <Button label="6" onClick={() => { handleAddNumber('6'); }} />
          <Button label="+" onClick={() => { handleSumNumbers(); }} />
        </Row>
        <Row>
          <Button label="1" onClick={() => { handleAddNumber('1'); }} />
          <Button label="2" onClick={() => { handleAddNumber('2'); }} />
          <Button label="3" onClick={() => { handleAddNumber('3'); }} />
          <Button label="=" onClick={() => { handleResult(); }} />
        </Row>
      </Content>
    </Container>
  )
}

export default App
