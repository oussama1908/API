import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserList() {
  // State to store the list of users from the API
  const [listOfUsers, setListOfUsers] = useState([]);

  // Array of background colors for the cards
  const cardBackgroundColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    axios.get(apiUrl)
      .then((response) => {
        // Set the fetched data in the state
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Render the component
  return (
    <Container>
      {/* Row to contain the cards */}
      <Row>
        {listOfUsers.map((user, index) => (
          // Column to contain each individual card
          <Col key={user.id} md={3}>
            {/* Card component with dynamic background and text color */}
            <Card
              bg={cardBackgroundColors[index % cardBackgroundColors.length]}
              text={cardBackgroundColors[index % cardBackgroundColors.length].toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem', margin: '10px' }}
              className="mb-2"
            >
              {/* Card Header containing the user's name */}
              <Card.Header>{user.name}</Card.Header>
              {/* Card Body containing user information */}
              <Card.Body>
                <Card.Title>User Information</Card.Title>
                <Card.Text>
                  {/* User email and phone */}
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// Export the component for use in other parts of the application
export default UserList;
