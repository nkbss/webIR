import React from 'react'
import {
  Grid,
  Input,
  Dropdown,
  GridColumn,
  Button
} from '../../../node_modules/semantic-ui-react'

const type = [
  { key: '1', value: 'Football Club', text: 'Football Club' },
  { key: '2', value: 'Team', text: 'Team' },
  { key: '3', value: 'Player', text: 'Player' },
  { key: '4', value: 'Coach', text: 'Coach' }
]

const SearchCard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row columns="3">
          <Grid.Column textAlign="right" width="8">
            <Input className="search" icon="search" placeholder="Search" />
          </Grid.Column>
          <Grid.Column textAlign="left" width="3">
            <Dropdown
              className="searchType"
              placeholder="Search By"
              search
              selection
              options={type}
            />
          </Grid.Column>
          <Grid.Column width="2">
            <Button basic color="black">
              Search
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export { SearchCard }
