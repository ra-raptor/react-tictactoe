import React, { Component } from 'react'

class ChoosePlayer extends Component {
    handleSubmit(event){
        event.preventDefault()
        this.props.player(event.target.choose.value)

    }

    render() {
        let style = {
            fontSize : "120%"
        }
        return (
            <div style={style}>
                <h3>Choose Player</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor = "chooseX">X</label>
                    <input type="radio" name="choose" id = "chooseX"value="X" defaultChecked="checked"/>
                    <label htmlFor = "chooseO">O</label>
                    <input type="radio" name="choose" id = "chooseO" value="O" />
                    <br />
                    <input type="submit" value="Choose" />
                </form>
            </div>
        )
    }
}

export default ChoosePlayer
