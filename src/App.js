import React, { Component } from 'react'
import './App.css'
import ChoosePlayer from './components/ChoosePlayer'
import Status from './components/Status'
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       board : Array(9).fill(null),
       player : "X",
       winner : null,
       play : false,
       setSelect : true
    }
  }

  checkWin(){
    const WinLines = [
      ["0" , "1" , "2"],
      ["3" , "4" , "5"],
      ["6" , "7" , "8"],
      ["0" , "3" , "6"],
      ["1" , "4" , "7"],
      ["3" , "5" , "8"],
      ["0" , "4" , "8"],
      ["2" , "4" , "6"]
    ]
    for (let index = 0; index<WinLines.length;index++){
      let [a,b,c] = WinLines[index]
      let A = this.state.board[a]
      let B = this.state.board[b]
      let C = this.state.board[c]
      if (A===B && A===C && A!= null){
        this.setState({
          winner : A
        })
        if (A === "X"){
          alert(" X won ")
        }
        else if (A === "O"){
          alert(" O won ")
        }
      }
    }

  }

  checkDraw(){
    let notnullCount = 9
    for(let i = 0; i < this.state.board.length; i++){
      if( this.state.board[i] != null){
        notnullCount -= 1
      }
    }
    if(notnullCount < 1){
      this.setState({
        play : false
      })
      alert("darw")
    }
  }

  handeClick(index){
    if (this.state.player && !this.state.winner){
      let tempBoard = this.state.board
      let newpPlayer = this.state.player
      
      if(this.state.board[index] === null && !this.state.winner && this.state.play ){
        if(!this.state.setSelect){
          newpPlayer = this.state.player === "X" ? "O" : "X"
        }else{
          this.setState({
            setSelect: false
          })
        }
        
        tempBoard[index] = newpPlayer
        this.setState({
          board : tempBoard,
          player : newpPlayer
        })
        this.checkWin()
        this.checkDraw()
      }
    }
  }

  setPlayer = (player) => {
    this.setState({
      player:player,
      play:true
    })
  }

  

  render() {
    const Box = this.state.board.map((box,index) => <div className="box" key={index} onClick={() => this.handeClick(index)}>{box}</div>)
    return (
      <div className="Container">
        <h1 className="title">Tac Toe</h1>
        <Status player={this.state.player} setPlayer={this.setPlayer} setSelect={this.state.setSelect} play={this.state.play}/>
        <div className="board">
          {Box}

        </div>
      </div>
      
    )
  }
}

export default App
