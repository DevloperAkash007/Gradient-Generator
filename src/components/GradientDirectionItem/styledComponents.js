import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: ${props =>
    props.active === 'white' ? '#ffffff' : '#ffffff79'};
  border-radius: 10px;
  margin: 20px;
  list-style-type: none;
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 15px;
  color: #1e293b;
  padding: 20px 40px;
  opacity: ${props => (props.active === 'white' ? 1 : 0.5)};
  font-family: 'Roboto';
  cursor: pointer;
`
