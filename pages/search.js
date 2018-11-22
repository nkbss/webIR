import React, { Component } from 'react'
import { SearchLayout } from '../components/Search/layout'
import { NewsLayout } from '../components/News/Layout'
import '../style.css'
import { HeaderSearchLayout } from '../components/HeaderSearch/layout'
import { ImageLayout } from '../components/Image/layout/ImageLayout';
import { VideoLayout } from '../components/Video/layout/VideoLayout'
import Router from 'next/router'

class search extends Component {


state = {
        q:this.props.url.query.q,
        type:this.props.url.query.type,
        filter_t:this.props.url.query.filter_t,
        filter_p:this.props.url.query.filter_p,
        sort:this.props.url.query.sort,
        page:this.props.url.query.page
    }

    handlePage = (type) => {
        const state = this.state;
        state.type = type;
        Router.push({
          pathname:'/search',
          query: state
        })
    } 

  render() {

    

    return (
      <div>
      
        {this.state.type === 'news'? 
          <div>
            <NewsLayout query={this.state} handlePage={this.handlePage} />
          </div>
        : null}
        {this.state.type === 'image' ? 
          <div>
            <ImageLayout query={this.state} handlePage={this.handlePage}/>
          </div>
        :null}
        {this.state.type === 'video' ? 
          <div>
            <VideoLayout query={this.state} handlePage={this.handlePage} />
          </div>
        :null}
    
      </div>
    )
  }
}

export default search
