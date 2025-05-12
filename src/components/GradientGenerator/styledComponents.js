import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 10px;
  background-image: linear-gradient(to ${props => props.direction},${props =>
    props.firstColor}, ${props => props.secondColor});
`
export const MainContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 900;
  color: #ffffff;
`
export const Text = styled.p`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ededed;
  margin-top: 40px;
`
export const UnorderList = styled.ul`
  display: flex;
  flex-direction:row;
  justify-content: center;
  padding: 0px;
  flex-wrap: wrap;
  width: 50%;
`
export const Container = styled.div`
  width: ${props => props.width};
  display: ${props => (props.flex ? 'flex' : 'block')};
  flex-direction: ${props => {
    if (props.row) {
      return 'row'
    }
    if (props.column) {
      return 'column'
    }
  }};
  justify-content: ${props => {
    if (props.justifyStart) {
      return 'flex-start'
    }
    if (props.justifyEnd) {
      return 'flex-end'
    }
    if (props.justifyCenter) {
      return 'center'
    }
    if (props.justifySpaceBetween) {
      return 'space-between'
    }
  }};
  align-items: ${props => {
    if (props.alignStart) {
      return 'flex-start'
    }
    if (props.alignEnd) {
      return 'flex-end'
    }
    if (props.alignCenter) {
      return 'center'
    }
  }};
`

export const Input = styled.input`
  width: 180px;
  height: 60px;
  border: 0px solid #1e293b;
  background-color: transparent;
`
export const Button = styled.button`
  padding: 20px 50px;
  margin: 50px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 900;
  background-color: #00c9b7;
`
