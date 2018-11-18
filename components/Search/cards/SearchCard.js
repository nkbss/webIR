import React from 'react'
import {
  Grid,
  Input,
  Dropdown,
  GridColumn,
  Button,
  Icon
} from '../../../node_modules/semantic-ui-react'

const type = [
  { key: '1', value: 'Clubs', text: 'Clubs' },
  { key: '2', value: 'Players', text: 'Players' },
  { key: '3', value: 'News', text: 'News' }
]

const SearchCard = props => {
  return (
    <div>
      <Grid textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Input
              className="search"
              placeholder="What are you interested?"
              type="text"
              size="huge"
              icon={<Icon name="futbol" size="large" />}
              onKeyPress={event => props.search(event)}
              onChange={props.handleSearch}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export { SearchCard }
