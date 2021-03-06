import React from 'react'
import {
  Menu,
  Image,
  Input,
  Icon,
  Grid,
  Dropdown
} from '../../../node_modules/semantic-ui-react'

const image = '../../../static/images/football.png'

  const option = [
    {key:1,text:'Relevant',value:'Relevant'},
    {key:2,text:'Time',value:'Time'}
  ]

const HeaderSearchCard = props => {
  return (
    <div>
      <Menu fixed="top" borderless pointing>
        <Grid verticalAlign="middle" style={{ width: '100%' }}>
          <Grid.Row columns={3} id="headersearch-gridrow-search">
            <Grid.Column width={1}>
              <Menu.Item id="headersearch-image">
                <Image src={image} size="small" href="/" />
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={4}>
              <Menu.Item>
                <label
                  style={{
                    fontSize: '30px',
                    fontWeight: 'bold'
                  }}
                >
                  Football Update
                </label>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item className="searchHeader">
                <Input
                  fluid
                  type="text"
                  size="huge"
                  icon={<Icon name="futbol" size="large" />}
                  onKeyPress={event => props.search(event)}
                  onChange={props.handleSearch}
                />
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={7} id="headersearch-gridrow-option">
            <Grid.Column width={2} />
            <Grid.Column width={2}>
              <Menu.Item onClick={() => props.handlePage('news')} id="headersearch-item">
                <label className="headersearch-label">NEWS</label>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={2}>
              <Menu.Item onClick={() => props.handlePage('image')} id="headersearch-item">
                <label className="headersearch-label">IMAGE</label>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={2}>
              <Menu.Item onClick={() => props.handlePage('video')} id="headersearch-item">
                <label className="headersearch-label">VIDEO</label>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={4} />
            <Grid.Column width={2} textAlign="center">
              <Menu.Item onClick={props.openFilterby} id="headersearch-item">
                <label className="headersearch-label"> Filter by</label>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={2}>
              <Dropdown text="Sort by" pointing className="headersearch-label" onChange={props.handleSort} options={option}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu>
    </div>
  )
}

export { HeaderSearchCard }
