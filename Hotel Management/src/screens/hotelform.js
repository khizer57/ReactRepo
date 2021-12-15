import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/button";
import Input from "../components/input";
import { useNavigate } from "react-router";
import { getDatabase } from "@firebase/database";
import { ref,set } from "@firebase/database";
import MenuAppBar from "../components/appbar";

function Farum (){
    const [contactNo, setContactNo] = useState("");
    const [cnic, setCnic] = useState("");
    const [address, setAddress] = useState("");
    const [noofperson, setNoOfPerson] = useState("");
    const [noofdts, setNoOfDts] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    let hotelform = (e) => {
        e.preventDefault();
        let hotelobj = {
          name,
          contactNo,
          cnic,
          address,
          noofdts,
          noofperson
        };
        dispatch({
            type: "HOTELFORMDATA",
            payload: {hotelobj},
          }, navigate);

        navigate("/paymentd");

        function writeHotelFormData(hotelobj) {
            const db = getDatabase();
            set(ref(db, 'hotel/' + hotelobj.name), hotelobj);
          }
        writeHotelFormData({...hotelobj});
      };

    return(
        <>
        <MenuAppBar/>
        <div className="head">
          <h1>Enter Details</h1>
        </div>
        <div className="signborder">
          <form onSubmit={(e) => hotelform(e)}>
            <div>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setContactNo(e.target.value)}
                placeholder="Contact No"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setCnic(e.target.value)}
                placeholder="CNIC"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setNoOfPerson(e.target.value)}
                placeholder="No. Of Person"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setNoOfDts(e.target.value)}
                placeholder="No. Of Days To Stay"
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
export default Farum;