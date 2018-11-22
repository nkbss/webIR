import React, { Component } from 'react'
import { HeaderSearchCard, HeaderOptionCard } from '../cards'
import { FilterByCard } from '../cards/FilterByCard'
import Router from 'next/router'
class HeaderSearchLayout extends Component {
  state = {
    filterby: false
  }

  // handleRoute = id => {
  //   console.log('clicked')
  //   if (id === 'news') {
  //     Router.push('/search')
  //   } else if (id === 'image') {
  //     Router.push('/image')
  //   } else if (id === 'video') {
  //     Router.push('/video')
  //   }
  // }

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
        <HeaderSearchCard
          openFilterby={this.openFilterby}
          // handleRoute={this.handleRoute}
          handlePage={this.props.handlePage}
          handleSearch={this.handleSearch}
          search={this.search}
        />
        <FilterByCard filterby={filterby} closeFilterby={this.closeFilterby} />
      </div>
    )
  }
}

export { HeaderSearchLayout }
