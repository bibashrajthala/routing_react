import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import Img from "../user.jpg";

const Detail = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState({});
  const { id } = useParams(); //yhis id is the parameter used to navigate this page ie from '/detail/:id'

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      });
  }, []);

  console.log(todo);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title>{todo.name}</Card.Title>
          <Card.Text>
            <p>{todo.email}</p>
            {todo.phone}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Go back
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Detail;
