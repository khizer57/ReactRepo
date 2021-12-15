import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/button";
import Input from "../components/input";
import { useNavigate } from "react-router";
import { getDatabase } from "@firebase/database";
import { ref,set } from "@firebase/database";
import MenuAppBar from "../components/appbar";

function Payment (){
    const [bankName, setBankName] = useState("");
    const [cardcode, setCardCode] = useState("");
    const [creditNumber, setCreditNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    let paymentform = (e) => {
        e.preventDefault();
        let paymentobj = {
          bankName,
          cardcode,
          creditNumber,
          expiryDate
        };
        dispatch({
          type: "PAYMENTDATA",
          payload: {paymentobj},
        }, navigate);

      navigate("/conclusion");

      function writePaymentData(hotelobj) {
          const db = getDatabase();
          set(ref(db, 'Payment/' + paymentobj.bankName), paymentobj);
        }
      writePaymentData({...paymentobj});
      };


    return(
        <>
        <MenuAppBar/>
        <div className="head">
          <h1>Enter Details</h1>
        </div>
        <div className="signborder">
          <form onSubmit={(e) => paymentform(e)}>
            <div>
              <Input
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Bank Name"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setCardCode(e.target.value)}
                placeholder="Card Code"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setCreditNumber(e.target.value)}
                placeholder="Credit Card Number"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="Expiry Date"
                type="text"
              />
            </div>
            <div>
              <Button>Next</Button>
            </div>
          </form>
        </div>
      </>
    )
}
export default Payment;