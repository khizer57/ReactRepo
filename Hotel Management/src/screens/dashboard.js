import { useNavigate } from "react-router";
import Button from "../components/button";
import Input from "../components/input";
import { useState } from "react";
import { set,ref, getDatabase } from "firebase/database";
import MenuAppBar from "../components/appbar";

function Dash (){
    const navigate = useNavigate();
    const [hotelName, sethotelName] = useState("");
    const [noOfRooms, setnoOfRooms] = useState("");

    let dashform = (e) => {
        e.preventDefault();
        let dashobj = {
          hotelName,
          noOfRooms,
        };
        navigate("/hotelform");

      function writeDashData(dashobj) {
          const db = getDatabase();
          set(ref(db, 'Dash/' + dashobj.hotelName), dashobj);
        }
      writeDashData({...dashobj});
    };
  
    return (
        <>
        <MenuAppBar/>
        <><div className="dsh">

            <div>
                <h1>Welcome User</h1>
            </div>
        </div>
        </><>
                <div className="main">
                    <table>
                        <thead>
                        <tr>
                            <th>Hotels</th>
                            <th>No. of Rooms</th>
                            <th>Per Day Price</th>
                        </tr>
                        </thead>
                        <tbody>

                     <tr >
                            <td>Hotel Dubai</td>
                            <td>50</td>
                            <td>20 Dollars</td>
                        </tr>
                        <tr>
                            <td>Hotel America</td>
                            <td>45</td>
                            <td>80 Dollars</td>
                        </tr>
                        <tr>
                            <td>Hotel Pakistan</td>
                            <td>90</td>
                            <td>30 Dollars</td>
                        </tr>
                        <tr>
                            <td>Hotel Ireland</td>
                            <td>20</td>
                            <td>40 Dollars</td>
                        </tr>
                        <tr>
                            <td>Hotel UK</td>
                            <td>44</td>
                            <td>100 Dollars</td>
                        </tr>
                        <tr>
                            <td>Hotel Scotland</td>
                            <td>10</td>
                            <td>30 Dollars</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
            <>
            <div className="head">
          <h1>Enter Details</h1>
        </div>
        <div className="signborder">
          <form onSubmit={(e) => dashform(e)}>
            <div>
              <Input
                onChange={(e) => sethotelName(e.target.value)}
                placeholder="Hotel Name"
                type="text"
              />
            </div>
            <div>
              <Input
                onChange={(e) => setnoOfRooms(e.target.value)}
                placeholder="No of Rooms"
                type="text"
              />
            </div>
            <div>
              <Button>Next</Button>
            </div>
          </form>
        </div>
            </>
            </>
    );
}
export default Dash;