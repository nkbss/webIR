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
  { key: '4', value: 'Coach', text: 'Coach' }
]

const SearchCard = () => {
  return (
    <div>
      <Grid>
        <Grid.Row textAlign="center">
          <Grid.Column>
            <Input
              className="search"
              type="text"
              size="huge"
              icon={<Icon name="futbol" size="large" />}
            />
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row textAlign="center">
          <Grid.Column>
            <Button basic color="black" size="big">
              Goal!
            </Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </div>
  )
}
export { SearchCard }
