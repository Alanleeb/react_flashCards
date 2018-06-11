import React from 'react';

class cardForm extends React.Component {
  state = { question: '', answer: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.question)
    this.setState({ question: '' })
  }

  handleChange = (e) => {
    this.setState({ question: e.target.value })
    this.setState({ answer: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.question}
          value={this.state.answer}
          onChange={this.handleChange}
          required 
          placeholder="Add An Item" 
        />
      </form>
    )
  }
}

export default cardForm;