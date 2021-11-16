import { useLocation} from "react-router";

function About() {
  const location = useLocation();
  console.log(location.state);


  return (
    <>
      <h1>COVID DATA</h1>
      
    </>
  );
}
export default About;