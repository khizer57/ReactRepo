import { useNavigate } from "react-router";



function Home() {
  const navigate = useNavigate();
  const move = () => {
    navigate("about");
  };

  return (
    <>
      
      <h1>Home</h1>

      <button onClick={move}>Go to Covid Data</button>
    </>
  );
}
export default Home;