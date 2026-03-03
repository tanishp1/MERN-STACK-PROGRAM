import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailsCard = ({ CardTitle , CardDescription , test }) => {
  return (
    <div>
        <Card className=''>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61qbMx4oXJL.jpg" />
              <Card.Body>
                <Card.Title>{CardTitle}</Card.Title>
                <Card.Text>
                  {CardDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <h3>{test}</h3>
              </Card.Body>
            </Card>
    </div>
  )
}

export default DetailsCard
