import React, { Component } from 'react'
import { SearchCard } from '../cards'
import Router from 'next/router'
class SearchLayout extends Component {
  state = {
    search: null
  }

  search = e => {
    if (this.state.search != null) {
      if (e.key === 'Enter') {
        Router.push('/search')
      }
    }
  }

  handleSearch = e => {
    console.log(e.target.value)
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <div className="Section-Search">
        <SearchCard search={this.search} handleSearch={this.handleSearch} />
      </div>
    )
  }
}

export { SearchLayout }
