import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Dash, Farum, Payment, UserData} from "./approuters";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dash />}/>
          <Route path="/hotelform" element={<Farum/>}/>
          <Route path="/paymentd" element={<Payment/>}/>
          <Route path="/conclusion" element={<UserData/>}/>
          </Routes>
      </Router>
    </>
  );
}
