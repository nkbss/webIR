import React from 'react'
import { Card, Image } from '../../../node_modules/semantic-ui-react'

const ImageCard = (props) => {
  return (
          <div>
            <a href={props.url}>
              <Card raised id="imagecard-card" onClick={()=>props.handleUrl(props.url)}>
              <Image
                src={props.image}
                size="large"
                id="imagecard-image"
                centered
              />
              <Card.Content extra textAlign="center" id="image-content">
                <Card.Header>{props.title}</Card.Header>
                <Card.Description >
                  {props.url}
                </Card.Description>
              </Card.Content>
            </Card>
            </a>
             
          </div>
           
      
  )
}
export { ImageCard }
