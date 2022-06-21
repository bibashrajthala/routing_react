import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <h2>Home</h2>
      <p onClick={() => navigate("/list")}>Go to userlist page</p>
    </>
  );
};

export default Home;
