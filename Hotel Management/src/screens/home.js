import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebasefunc";

function Home() {
  const navigate = useNavigate();
  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);

  let goToLogin = () => {
    navigate("/login");
  };
  let goToSignUp = () => {
    navigate("/signup");
  };
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     if (user) {
        const uid = user.uid;
        console.log(uid)
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    });  
  }, []);
  
  return (
    <>
    <div className="head">
      <h1 className="fnt">Welcome to Hotel Booking App</h1>
      <h2>Please Sign Up or Login to Continue</h2>
    </div>
      <div>
        <Button onClick={goToLogin}>Login</Button>
        <Button onClick={goToSignUp}>Sign Up</Button>
      </div>
    </>
  );
}
export default Home;
