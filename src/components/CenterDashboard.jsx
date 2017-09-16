import React, { Component } from 'react';
import Accordion from './Accordion';
import Survey from './Survey'

class CenterDashboard extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Survey />
                <Accordion />
                <div className="centerdashboard-bottom">
                    <h2>Questions? Concerns? Contact Helen</h2>
                    <h4>helen(at)txresearch.com</h4>
                </div>
            </div>
        )
    }
}

export default CenterDashboard;
