import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }
    state = {
        active: null
    }
    renderParagraph = (index) => {
        this.setState({active: index})
    }
    renderList = () => {
        const sections = this.props.sections;
        const { active } = this.state;
        return sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.renderParagraph(index)}>{section.title}</button>
                <p>{(active === index) && section.content}</p>
            </li>
        ))
    }
    render() {
        return (
            <ul className='Accordion'>
                {this.renderList()}
            </ul>
        )
    }
}

export default Accordion