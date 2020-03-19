import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)

        //define the tictacBoard that the user start with
          this.state = {
              tictacBoard: ["", "", "", "", "", "", "", "", ""],
              userTurn: "player1",
              userWon: "",
              turnCount:0,
              player1wins: 0,
              player2wins: 0
          }
    }

    winnerInfo = () => {
        let {tictacBoard,player1wins,player2wins} = this.state
        if(tictacBoard[0] === tictacBoard[1] && tictacBoard[1] === tictacBoard[2]){
            if(tictacBoard[0]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            } else if(tictacBoard[0]==="⭕️"){
                this.setState({
                    userWon:"Player 2 wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[3] === tictacBoard[4] && tictacBoard[4] === tictacBoard[5]){
            if(tictacBoard[3]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            } else if(tictacBoard[3]==="⭕️"){
                this.setState({
                    userWon:"Player 2 wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[6] === tictacBoard[7] && tictacBoard[7] === tictacBoard[8]){
            if(tictacBoard[6]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            } else if(tictacBoard[6]==="⭕️"){
                this.setState({
                    userWon:"Player 2 wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[0] === tictacBoard[3] && tictacBoard[3] === tictacBoard[6]){
            if(tictacBoard[0]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            } else if(tictacBoard[0]==="⭕️"){
                this.setState({
                    userWon:"Player 2 wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[1] === tictacBoard[4] && tictacBoard[4] === tictacBoard[7]){
            if(tictacBoard[1]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            } else if(tictacBoard[1]==="⭕️"){
                this.setState({
                    userWon:"Player 2 wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[2] === tictacBoard[5] && tictacBoard[5] === tictacBoard[8]){
            if(tictacBoard[2]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            }
            else if(tictacBoard[2]==="⭕️"){
                this.setState({
                    userWon:"Player 2 wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[0] === tictacBoard[4] && tictacBoard[4] === tictacBoard[8]){
            if(tictacBoard[0]==="❌"){
                this.setState({
                    userWon:"Player 1 wins!",
                    player1wins:++player1wins
                })
            } else if(tictacBoard[0]==="⭕️"){
                this.setState({
                    userWon:"Player 2 Wins!",
                    player2wins:++player2wins 
                })
            }
        } else if(tictacBoard[2] === tictacBoard[4] && tictacBoard[4] === tictacBoard[6]){
            if(tictacBoard[2]==="❌"){
                this.setState({
                    userWon:"Player 1 Wins!",
                    player1wins:++player1wins
                })
            }
            else if(tictacBoard[2]==="⭕️"){
                this.setState({
                    userWon:"Player 2 Wins!",
                    player2wins:++player2wins 
                })
            }
        }
    }
    handleLocation = (index) => {
         let {tictacBoard, userTurn,turnCount} = this.state
         if(userTurn === "player1" && tictacBoard[index]===""){
             tictacBoard[index] = "❌"
             this.setState({
                 tictacBoard:tictacBoard,
                 userTurn:"player2",
                 turnCount:++turnCount
            })
         } else if (userTurn ==="player2" && tictacBoard[index]==="") {
             tictacBoard[index] = "⭕️"
             this.setState({
                 tictacBoard:tictacBoard,
                userTurn:"player1",
                turnCount:++turnCount
            })
         }
         if(turnCount > 8){
            this.setState({userWon: "It's a tie!"})
        }
         this.winnerInfo()
    }

//Resetting the Game
    resetGame = () => {
        let {tictacBoard,userTurn,userWon,turnCount} = this.state
        tictacBoard = tictacBoard.map(value => value = "")
        this.setState({
            tictacBoard: tictacBoard,
            userTurn: "player1",
            userWon:"",
            turnCount:0
        })
    }

  render() {
    let { tictacBoard,userWon, userTurn} = this.state
    let square = tictacBoard.map((value, index) => {
        return (
        <Square
        handleLocation = {this.handleLocation}
        index = { index }
        value = { value }
        userTurn = {userTurn}
        userWon = {userWon}
        /> )})
    return (
    <>
            <h1 style={{textAlign:"center"}}>Tic-Tac-Toe</h1>
            <p style={{textAlign:"center"}}>It's your turn {this.state.userTurn}</p>
            <p className="win-stat" style={{textAlign:"center"}}>{this.state.userWon}</p>
            <br/>
            <div className="all">
                <div className = "board">
                    {square}
                    <button onClick = {this.resetGame}> Reset Game</button>
                    <br/>
                </div>
            </div>
                <div>
                    <p>It's your turn {this.state.userTurn}</p>
                    <p className="win-stat">{this.state.userWon}</p>
                </div>
      </>
    );
  }
}

export default Board
