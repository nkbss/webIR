import React, { Component } from 'react'
import { HeaderSearchCard, HeaderOptionCard } from '../cards'
import { FilterByCard } from '../cards/FilterByCard'
import Router from 'next/router'
class HeaderSearchLayout extends Component {

  state = {
    filterby: false,
    search:null
  }


  search = e => {
    if (this.state.search != null) {
      if (e.key === 'Enter') {
        Router.push({
          pathname:'/search',
          query:{type:this.props.query.type,q:this.state.search,filter_t:'',filter_p:'',sort:'',page:0}
        }).then(location.reload())
      }
    }
  }

  handleSearch = e => {
    console.log(e.target.value)
    this.setState({ search: e.target.value })
  }

  handleSort = (e,{value}) => {
    Router.push({
      pathname:'/search',
      query:{
        type:this.props.query.type,
        q:this.props.query.q,
        filter_t:this.props.query.filter_t,
        filter_p:this.props.query.filter_p,
        sort:value,
        page:0
      }
    }).then(location.reload())
  }

  openFilterby = () => {
    this.setState({ filterby: true })
  }

  closeFilterby = () => {
    this.setState({ filterby: false })
  }

  render() {
    const { filterby } = this.state
    console.log(this.props.query)
    return (
      <div className="topHeader">
        <HeaderSearchCard
          openFilterby={this.openFilterby}
          // handleRoute={this.handleRoute}
          handlePage={this.props.handlePage}
          handleSearch={this.handleSearch}
          search={this.search}
          handleSort={this.handleSort}
        />
        <FilterByCard filterby={filterby} closeFilterby={this.closeFilterby} />
      </div>
    )
  }
}

export { HeaderSearchLayout }
