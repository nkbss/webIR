import React, { Component } from 'react'
import { SearchCard } from '../cards'
import { Router } from '../../../routes'

class SearchLayout extends Component {
  state = {
    searchby: null
  }

  search = e => {
    if (this.state.searchby != null) {
      if (e.key === 'Enter') {
        Router.pushRoute('news')
        localStorage.setItem('Type', this.state.searchby)
        console.log('Route')
      }
    }
  }

  handleSearchBy = (e, data) => {
    console.log(data.value)
    this.setState({ searchby: data.value })
    this.forceUpdate()
  }

  render() {
    console.log(this.state.searchby)
    return (
      <div className="Section-Search">
        <SearchCard search={this.search} handleSearchBy={this.handleSearchBy} />
      </div>
    )
  }
}

export { SearchLayout }
