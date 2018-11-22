import React from 'react'
import { Card, Image } from '../../../node_modules/semantic-ui-react'

const ImageCard = (props) => {
  return (
  
            <Card raised id="imagecard-card">
              <img
                src={props.image}
                size="large"
                id="imagecard-image"
                centered
              />
              <Card.Content extra textAlign="center">
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>
                  {props.url}
                </Card.Description>
              </Card.Content>
            </Card>
      
  )
}
export { ImageCard }
