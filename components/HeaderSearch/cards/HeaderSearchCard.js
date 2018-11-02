import React from 'react'
import {
  Menu,
  Image,
  Input,
  Icon
} from '../../../node_modules/semantic-ui-react'

const image = '../../../static/images/football.png'

const HeaderSearchCard = props => {
  return (
    <div>
      <Menu fixed="top" borderless pointing>
        <Menu.Item>
          <Image src={image} size="tiny" href="/" onClick={props.removeType} />
        </Menu.Item>
        <Menu.Item>
          <label
            style={{
              fontSize: '70px',
              fontWeight: 'bold',
              paddingBottom: '15px'
            }}
          >
            {props.type}
          </label>
        </Menu.Item>
        <Menu.Item className="searchHeader">
          <Input
            fluid
            type="text"
            size="huge"
            icon={<Icon name="futbol" size="large" />}
          />
        </Menu.Item>
      </Menu>
    </div>
  )
}

export { HeaderSearchCard }
