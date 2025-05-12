import {Component} from 'react'
import {
  AppContainer,
  MainContainer,
  Heading,
  Text,
  Input,
  Button,
  UnorderList,
  Container,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GredientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: 'top',
    firstColorValue: '#8ae323',
    secondColorvalue: '#014f7b',
  }

  onChangeFirstColor = event => {
    this.setState({firstColorValue: event.target.value})
  }
  onChangeSecondColor = event => {
    this.setState({secondColorvalue: event.target.value})
  }

  generateBackgroundColor = () => {
    const {firstColorValue, secondColorvalue, activeDirectionId} = this.state
    this.setState({
      firstColor: firstColorValue,
      secondColor: secondColorvalue,
      direction: activeDirectionId,
    })
  }

  onChangeDirection = directionId => {
    this.setState({
      activeDirectionId: directionId.toLocaleLowerCase(),
    })
  }

  render() {
    const {
      activeDirectionId,
      firstColorValue,
      secondColorvalue,
      firstColor,
      direction,
      secondColor,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        direction={direction}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <MainContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Text>Choose Direction</Text>
          <UnorderList>
            {gradientDirectionsList.map(item => {
              return (
                <GradientDirectionItem
                  key={item.directionId}
                  activeDirectionId={activeDirectionId}
                  onChangeDirection={this.onChangeDirection}
                  item={item}
                />
              )
            })}
          </UnorderList>
          <Text>Pick The Colors</Text>
          <Container width="500px" flex row justifySpaceBetween>
            <Container flex column alignCenter>
              <Text>{firstColor}</Text>
              <Input
                value={firstColorValue}
                type="color"
                onChange={this.onChangeFirstColor}
              />
            </Container>
            <Container flex column alignCenter>
              <Text>{secondColor}</Text>
              <Input
                value={secondColorvalue}
                type="color"
                onChange={this.onChangeSecondColor}
              />
            </Container>
          </Container>
          <Button type="button" onClick={this.generateBackgroundColor}>
            Generate
          </Button>
        </MainContainer>
      </AppContainer>
    )
  }
}
export default GredientGenerator
