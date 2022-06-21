import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      });
  }, []);

  console.log(todos);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  let displayData = todos.map((todo) => {
    console.log(todo);
    return (
      <tr onClick={() => handleClick(todo.id)}>
        <td>{todo.id}</td>
        <td id="title">{todo.name}</td>
        <td>{todo.email}</td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover size>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </Table>
    </>
  );
};

export default UserList;
