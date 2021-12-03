import { useLocation} from "react-router";

function About() {
  const location = useLocation();
  console.log(location.state);


  return (
    <>
      <h1>WEATHER APP</h1>
      
    </>
  );
}
export default About;