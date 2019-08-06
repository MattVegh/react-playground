import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        activeSectionIndex: null,
        sections: [
            {
              title: 'Section 1',
              content: 'Stuff for Section 1',
            },
            {
              title: 'Section 2',
              content: 'Section 2 stuff',
            },
            {
              title: 'Section 3',
              content: '3rd section stuff',
            },
          ]
    };

    
    handleButtonClick = (title) => {
        this.setState({ activeSectionIndex: this.state.sections.title })
    }

    render() {
        return (
            <div>
                <ul>
                   {this.state.sections.map( sections => {
                       const isActive = this.state.activeSectionIndex === this.state.sections.title;

                    return <li>
                        <button onClick={() => this.handleButtonClick(sections.title)}>{sections.title}</button>
                        {isActive && <p>{this.state.sections.find(sections => sections.title === this.state.sections).conent}</p>}
                    </li>
                   })}

                </ul>
            </div>
        )
    }
}

export default Accordion;