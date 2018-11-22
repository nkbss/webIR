import React, { Component } from 'react'
import { HeaderSearchCard, HeaderOptionCard } from '../cards'
import { FilterByCard } from '../cards/FilterByCard'
import Router from 'next/router'
class HeaderSearchLayout extends Component {

  state = {
    filterby: false,
    search:null,
    filter_t:[],
    filter_p:[],
    filterbyt:null,
    filterbyp:null
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

  handleFilterbyt = (e,{value}) =>{
 
    this.setState({filterbyt:value})
  }

  handleFilterbyp = (e,{value}) =>{
  
    this.setState({filterbyp:value })
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


  getOption = () => {
      for(let i=0;i<this.props.filter_t.length;i++){
        this.state.filter_t.push({'key':i,'value':this.props.filter_t[i],'text':this.props.filter_t[i]})
      }
      for(let i=0;i<this.props.filter_p.length;i++){
        this.state.filter_p.push({'key':i,'value':this.props.filter_p[i],'text':this.props.filter_p[i]})
      }
  
  }

  filterBy = () => {
    this.setState({filterby:false})
    Router.push({
      pathname:'/search',
      query:{
        type:this.props.query.type,
        q:this.props.query.q,
        filter_t:this.state.filterbyt,
        filter_p:this.state.filterbyp,
        sort:this.props.query.sort,
        page:0
      }
    }).then(location.reload())
  }


  openFilterby = () => {
    this.getOption()
    // console.log(this.state.filter_t)
    this.setState({ filterby: true })
  }

  closeFilterby = () => {
    this.setState({ filterby: false })
  }

  render() {
    // console.log(this.props.filter_t)
    const { filterby } = this.state
    console.log(this.props.query)
    // console.log(this.props.filter_t)
    // console.log(this.props.filter_p)
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
        <FilterByCard filterby={filterby} closeFilterby={this.closeFilterby} filter_t={this.state.filter_t} filter_p={this.state.filter_p}
          handleFilterbyt={this.handleFilterbyt} handleFilterbyp={this.handleFilterbyp} filterBy={this.filterBy}
        />
      </div>
    )
  }
}

export { HeaderSearchLayout }
