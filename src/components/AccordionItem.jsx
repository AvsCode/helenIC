import React, { Component } from 'react';
import TextArea from './TextArea'
class AccordionItem extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            content: ""
        }
        this.toggle = this.toggle.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.childClick = this.childClick.bind(this);
    }
    toggle() {
        this.setState({
            active: !this.state.active,
            class: "active"
        });
    }
    childClick(e) {
        e.stopPropagation();
    }
    handleCommentsChange(e) {
        this.setState({ content: e.target.value })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const formPayload = {
            content: this.state.content,
        }
        alert(formPayload.content)
        this.handleClearForm(e);
    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            content: ""
        })
    }
    render() {
        const activeClass = this.state.active ? "active" : "inactive";
        const activeButton = this.state.active ? "-" : "+";
        const accordionData = this.props.details;
        const textareaClass = activeClass + " accordion-formarea"
        return (
            <div className={activeClass}>
                <div className='accordionItemToggler' onClick={this.toggle}>
                    <button className="accordion-button">{activeButton}</button>
                    <span className="summary">{accordionData.date}</span>
                </div>
                <span className="folding-panel answer">{accordionData.post}</span>
                <form
                    onSubmit={this.handleFormSubmit}
                    className={textareaClass}
                >
                    <TextArea
                        className="accordion-textarea"
                        rows={5}
                        cols={100}
                        resize={false}
                        content={this.state.content}
                        name={'comments'}
                        controlFunc={this.handleCommentsChange}
                        placeholder={'comments'}
                    />
                    <input
                        className="accordion-submitComment"
                        type="submit"
                        value="submit" />
                </form>
            </div>
        )
    }
}


export default AccordionItem;
