import React, { Component } from 'react'
import { HeaderSearchCard } from '../cards'

class HeaderSearchLayout extends Component {
  componentDidMount = () => {
    this.setState({ type: localStorage.getItem('Type') })
  }

  removeType = () => {
    localStorage.removeItem('Type')
  }

  state = {
    type: null
  }
  render() {
    return (
      <div className="topHeader">
        <HeaderSearchCard type={this.state.type} removeType={this.removeType} />
      </div>
    )
  }
}

export { HeaderSearchLayout }
