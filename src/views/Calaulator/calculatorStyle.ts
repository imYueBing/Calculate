import styled from 'styled-components'

const CalculatorWapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 370px;
  height: 500px;
  padding: 5px;
  transform: translate(-50%, -50%);
  background-color: #f3f3f3;
  border-radius: 5%;
`

const CalculatorDisplayer = styled.input`
  width: 100%;
  height: 70px;
  font-size: 30px;
  color: transparent;
  text-shadow: 0 0 0 #000;
  background-color: #f3f3f3;
  border: none;
  outline: none;
`

const CalculatorHandleArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CalculatorBtn = styled.div`
  height: 44px;
  margin: 4px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #fcfcfc;
  transition: border-color 0.25s;
  cursor: pointer;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  span {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
`

export {
  CalculatorWapper,
  CalculatorDisplayer,
  CalculatorHandleArea,
  CalculatorBtn
}
