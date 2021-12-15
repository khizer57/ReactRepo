import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import Input from "../components/input";
import { userLogin } from "../config/firebasefunc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    dispatch(userLogin(obj, navigate));
  };

  return (
    <>
      <div className="head">
        <h1>Login</h1>
      </div>
      <div className="signborder">
        <form onSubmit={(e) => login(e)}>
          <div>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
