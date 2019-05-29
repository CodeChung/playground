import React from 'react';
import { statement } from '@babel/template';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: "world"
        }
    }
    friend = () => {
        this.setState({who: "friend!"})
    }
    react = () => {
        this.setState({who: "React!"})
    }
    world = () => {
        this.setState({who: "World!"})
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.friend}>Friend</button>
                <button onClick={this.react}>React</button>
                <button onClick={this.world}>World</button>
            </div>
        )
    }
}

export default HelloWorld;