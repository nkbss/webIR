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
  { key: '1', value: 'Football Club', text: 'Football Club' },
  { key: '2', value: 'Team', text: 'Team' },
  { key: '3', value: 'Player', text: 'Player' },
  { key: '4', value: 'News', text: 'News' }
]

const SearchCard = props => {
  return (
    <div>
      <Grid textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Dropdown
              style={{ fontSize: '18px' }}
              placeholder="Search By"
              clearable
              options={type}
              selection
              size="large"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              className="search"
              type="text"
              size="huge"
              icon={<Icon name="futbol" size="large" />}
              onKeyPress={props.search}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export { SearchCard }
