import React, { Fragment } from "react";

const Home = (props) => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h4>{props.house.title}</h4>
          <p class="card-text">{props.home.description}</p>
          <footer className="blockquote-footer">
            <a
              target="null"
              href={`https://ghibliapi.herokuapp.com/${props.house.id}`}
            ></a>
          </footer>
        </div>
      </div>
    </>
  );
  };
  
  let Card = () => {
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>;
  };


export default Home;
