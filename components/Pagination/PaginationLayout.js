import React, { Component } from 'react'
import { PaginationCard } from './PaginationCard'
import Router from 'next/router'
class PaginationLayout extends Component {

  handlePageChange = (e,{activePage}) => {
    console.log(activePage)
    Router.push({
      pathname:'/search',
      query:{
        type:this.props.query.type,
        q:this.props.query.q,
        filter_t:this.props.query.filter_t,
        filter_p:this.props.query.filter_p,
        sort:this.props.query.sort,
        page:activePage
      }
    }).then(location.reload())
  }

  render() {
    console.log(this.props.query)
    return <PaginationCard maxpage={this.props.maxpage} handlePageChange={this.handlePageChange} firstPage={this.props.query.page} />
  }
}
export { PaginationLayout }
