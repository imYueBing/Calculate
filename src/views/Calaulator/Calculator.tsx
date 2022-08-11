import React, { useState } from 'react'

import { CalculatorWapper, CalculatorDisplayer, CalculatorHandleArea, CalculatorBtn } from './calculatorStyle'

import type { ICounter } from './types'

const Calculator:React.FC<{name:string }> = ({ name }) => {
  const [counter, setCounter] = useState<ICounter>({ value: '0' })
  const [isOperation, setOperation] = useState(true)
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
  const OperationSymbolList = ['+', '-', '*', '/', '%']

  const handleChangeDisplayValueClick = (e: React.SyntheticEvent<EventTarget>) => {
    if(!isOperation) {
      setCounter({value: ''})
      setOperation(!isOperation)
    }

    if(counter.value == '0') {
      setCounter({ value: '' })
    }

    setCounter((counter) => ({ value: counter.value + (e.target as HTMLDivElement).innerText }))
  }

  const handleOperationClick  = (e: React.SyntheticEvent<EventTarget>) => {
    setCounter({value: eval(counter.value) + ''})
    setOperation(!isOperation)
  }

  const handleOperationSymbolClick = (e: React.SyntheticEvent<EventTarget>) => {
    const lastStr = counter.value.substring(counter.value.length - 1)
    if(lastStr === '+' || lastStr === '-' || lastStr === '*' || lastStr === '/' || lastStr === '%') return

    setCounter({value: counter.value + (e.target as HTMLDivElement).innerText})
  }

  const handleClearCounterClick = () => {
    setCounter({value: '0'})
  }

  const handleDeleteOneDisplayValueClick = () => {
    if(counter.value.length === 1 && counter.value === '0' ) return
    setCounter({ value: counter.value.substring(counter.value.length - 1, 0) })
  }

  return (
    <CalculatorWapper>
      <CalculatorDisplayer value={ counter.value } readOnly></CalculatorDisplayer>
      <CalculatorHandleArea>
        { numList.map(item => 
          <CalculatorBtn onClick={ handleChangeDisplayValueClick } key={item}>
            <span>{item}</span>
          </CalculatorBtn>
        )}
        {
          OperationSymbolList.map(item => 
            <CalculatorBtn onClick={ handleOperationSymbolClick } key={item}>
               <span>{item}</span>
            </CalculatorBtn>
          )
        }
        <CalculatorBtn onClick={ handleDeleteOneDisplayValueClick }>
          <span>退格</span>
        </CalculatorBtn>
        {/* <CalculatorBtn onClick={ handleChangeDisplayValueClick }>1</CalculatorBtn> */}
        <CalculatorBtn onClick={ handleClearCounterClick }>
          <span>C</span>
        </CalculatorBtn>
        <CalculatorBtn onClick={ handleOperationClick }>
          <span>=</span>
        </CalculatorBtn>
      </CalculatorHandleArea>
    </CalculatorWapper>
  )
}

export default Calculator