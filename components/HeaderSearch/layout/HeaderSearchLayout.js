import React, { Component } from 'react'
import { HeaderSearchCard, HeaderOptionCard } from '../cards'
import { FilterByCard } from '../cards/FilterByCard'

class HeaderSearchLayout extends Component {
  state = {
    filterby: false
  }

  openFilterby = () => {
    this.setState({ filterby: true })
  }

  closeFilterby = () => {
    this.setState({ filterby: false })
  }

  render() {
    const { filterby } = this.state

    return (
      <div className="topHeader">
        <HeaderSearchCard openFilterby={this.openFilterby} />
        <FilterByCard filterby={filterby} closeFilterby={this.closeFilterby} />
      </div>
    )
  }
}

export { HeaderSearchLayout }
