import React from 'react';

export default class Roulette extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    spinChamber = () => {
        this.setState({spinningTheChamber:true})
        this.timeout = setTimeout(() => {
            this.setState({chamber: Math.ceil(Math.random() * 8), spinningTheChamber: false})
            console.log(this.state.chamber, this.props.bulletInChamber)
        },2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    displayStatement = () => {
        if (this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!'
        } else {
            if (this.state.chamber === this.props.bulletInChamber) {
                return 'BANG!!!!'
            } else {
                return "you're safe!"
            }
        }
    }
    render() {
        return (
            <div>
                <p>{this.displayStatement()}</p>
                <button onClick={this.spinChamber}>Pull the trigger!</button>
            </div>
        )
    }
}