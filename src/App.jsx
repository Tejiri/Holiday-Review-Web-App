import "./App.css";
import { createUser } from "./controller";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeValue(e) {
    switch (e.target.name) {
      case "username":
        // console.log(e.target.value);
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "firstname":
        setFirstName(e.target.value);
        break;
      case "lastname":
        setLastName(e.target.value);
        break;
      case "email":
        console.log(e.target.value);
        setEmail(e.target.value);
        break;

      default:
        break;
    }
  }

  return (
    <div id="page-div">
      <form
        onSubmit={(event) => {
          createUser(email, password, firstName, lastName, username);
          event.preventDefault();
        }}
      >
        <label htmlFor="">Username</label>
        <input type="text" name="username" id="" onChange={changeValue} />

        <label htmlFor="">Firstname</label>
        <input type="text" name="firstname" id="" onChange={changeValue} />
        <label htmlFor="">Lastname</label>
        <input type="text" name="lastname" id="" onChange={changeValue} />
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="" onChange={changeValue} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="" onChange={changeValue} />

        {/* <label htmlFor="">Name</label> */}
        <input type="submit" name="submit" id="" />
      </form>
    </div>
  );
}

export default App;
