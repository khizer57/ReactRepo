import { ref,onChildAdded } from "firebase/database";
import { database } from "../config/firebasefunc";
import { useState } from "react";
import { useEffect } from "react";

function UserData (){
    const [userList, setUserList] = useState([]);
      
    const getData = () => {
        let refrence = ref(database, "users/");
        let arr = [];
        onChildAdded(refrence, (snapshot) => {
          if (snapshot.exists()) {
            arr.push(snapshot.val());
            setUserList([...arr]);
          }
        });
        console.log(arr);
        setUserList([...arr]);
      };
      useEffect(() =>{getData();}, [])  
    return(
        <>
          <div>
                {userList.map((e, i) => {
                  return (
                    <><h1 key={i}>Thank You {e.name} for your Booking.</h1>
                    </>
                  );
                })}
          </div>
      </>
    );
};

export default UserData;