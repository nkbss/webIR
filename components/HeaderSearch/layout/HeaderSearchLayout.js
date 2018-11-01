import React, { Component } from 'react'
import { HeaderSearchCard } from '../cards'

class HeaderSearchLayout extends Component {
  render() {
    return (
      <div className="topHeader">
        <HeaderSearchCard />
      </div>
    )
  }
}

export { HeaderSearchLayout }
