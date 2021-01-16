import React, { Component } from 'react'
import ChoosePlayer from './ChoosePlayer'

class Status extends Component {
    nextPlayer(){
        if(!this.props.setSelect){
          if(this.props.player === "X"){
            return "O"
          }else if(this.props.player === "O"){
            return "X"
          }
        }else{
          return this.props.player
        }
      }
    
    handleSetPlayer(e){
    
        this.props.setPlayer(e)
    }

    render() {
        return (
            this.props.play ? 
            <h2>{this.nextPlayer()}'s Turn</h2> : 
            <ChoosePlayer player={(player) => this.handleSetPlayer(player)} />
            
        )
    }
}

export default Status
