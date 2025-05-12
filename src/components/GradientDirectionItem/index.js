import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, activeDirectionId, onChangeDirection} = props
  const {value, directionId} = item
  const active = activeDirectionId === value ? 'white' : 'light'

  const changeDirection = () => {
    onChangeDirection(directionId)
  }

  return (
    <ListItem value={item.value} active={active}>
      <Button
        type="button"
        onClick={changeDirection}
        active={active}
        id={item.directionId}
      >
        {item.displayText}
      </Button>
    </ListItem>
  )
}
export default GradientDirectionItem
