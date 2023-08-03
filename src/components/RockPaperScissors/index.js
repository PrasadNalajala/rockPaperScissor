import {Component} from 'react'
import {Container, Card, Heading, Img, Button} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    selectedChoice: '',
    randomChoice: '',
    totalScore: 0,
    matchInProgress: false,
    matchResult: '',
  }

  generateRandomChoice = () => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const randomChoice = choicesList[randomNumber].id

    this.setState({randomChoice}, this.result)
  }

  onSelectChoice = itemId => {
    this.setState({selectedChoice: itemId})
    this.generateRandomChoice()
  }

  result = () => {
    const {selectedChoice, randomChoice} = this.state
    switch (selectedChoice) {
      case 'PAPER':
        if (randomChoice === 'ROCK') {
          this.setState({matchResult: 'WON'})
        } else if (randomChoice === 'SCISSORS') {
          this.setState({matchResult: 'LOST'})
        } else {
          this.setState({matchResult: 'DRAW'})
        }
        break

      case 'ROCK':
        if (randomChoice === 'SCISSORS') {
          this.setState({matchResult: 'WON'})
        } else if (randomChoice === 'PAPER') {
          this.setState({matchResult: 'LOST'})
        } else {
          this.setState({matchResult: 'DRAW'})
        }
        break

      case 'SCISSORS':
        if (randomChoice === 'PAPER') {
          this.setState({matchResult: 'WON'})
        } else if (randomChoice === 'ROCK') {
          this.setState({matchResult: 'LOST'})
        } else {
          this.setState({matchResult: 'DRAW'})
        }
        break

      default:
        // Handle other cases if needed
        break
    }
    this.setState({matchInProgress: true}, this.updateScore)
  }

  updateScore = () => {
    const {matchResult, totalScore} = this.state

    if (matchResult === 'WON') {
      this.setState({totalScore: totalScore + 1})
    } else if (matchResult === 'LOST' && totalScore > 0) {
      this.setState({totalScore: totalScore - 1})
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      selectedChoice: '',
      randomChoice: '',
      matchInProgress: false,
      matchResult: '',
    })
  }

  render() {
    const {choicesList} = this.props
    const {
      totalScore,
      matchResult,
      selectedChoice,
      randomChoice,
      matchInProgress,
    } = this.state
    const selectedChoiceUrl = choicesList.find(
      each => each.id === selectedChoice,
    )
    const opponentsChoiceUrl = choicesList.find(
      each => each.id === randomChoice,
    )
    const resultMsg =
      matchResult === 'DRAW' ? 'IT IS DRAWN' : `YOU ${matchResult}`
    //  console.log(selectedChoiceUrl)
    return (
      <Container>
        <Card
          justifyContent="space-between"
          align="flex-start"
          padding="20px"
          borderStyle="solid"
          borderColor="#ffffff"
          borderWidth="2px"
          borderRadius="10px"
          margin="20px"
          width="80%"
        >
          <Card direction="column">
            <Heading color="#ffffff" fontSize="25px">
              ROCK
            </Heading>
            <Heading color="#ffffff" fontSize="25px">
              PAPER
            </Heading>
            <Heading color="#ffffff" fontSize="25px">
              SCISSORS
            </Heading>
          </Card>
          <Card
            direction="column"
            bgColor="#ffffff"
            padding="1%"
            width="10%"
            borderRadius="5px"
            align="space-around"
          >
            <Heading fontSize="25px" color="#223a5f">
              Score
            </Heading>
            <Heading fontSize="40px" color="#223a5f">
              {totalScore}
            </Heading>
          </Card>
        </Card>

        {!matchInProgress ? (
          <Card width="300px" padding="50px">
            {choicesList.map(each => (
              <Img
                src={each.imageUrl}
                key={each.id}
                onClick={() => this.onSelectChoice(each.id)}
              />
            ))}
          </Card>
        ) : (
          <Card padding="20px" direction="column">
            <Card>
              <Card direction="column" align="center">
                <Heading color="#ffffff" fontSize="25px">
                  YOU
                </Heading>
                <Img src={selectedChoiceUrl.imageUrl} />
              </Card>
              <Card direction="column" align="center">
                <Heading color="#fff" fontSize="25px">
                  OPPONENT
                </Heading>
                <Img src={opponentsChoiceUrl.imageUrl} />
              </Card>
            </Card>
            <Heading color="#ffffff" fontSize="30px" textalign="center">
              {resultMsg}
            </Heading>
            <Button onClick={this.onClickPlayAgain} padding="5px">
              PLAY AGAIN
            </Button>
          </Card>
        )}
      </Container>
    )
  }
}

export default RockPaperScissors
