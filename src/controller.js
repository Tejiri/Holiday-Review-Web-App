import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "./firebase-config";

function createUser(
  userEmail,
  userPassword,
  userFirstName,
  userLastName,
  userUsername
) {
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(async (userCredential) => {
      const user = userCredential.user;
      try {
        // const docRef = await addDoc(collection(db, "USERS",user.uid), {
        //   accountStatus: "active",
        //   appVersion: "1.0",
        //   createdAt: serverTimestamp(),
        //   deviceToken: "",
        //   email: userEmail,
        //   firstName: userFirstName,
        //   surname: userLastName,
        //   gender: "",
        //   middleName: "",
        //   onlineStatus: false,
        //   phoneNumber: "",
        //   profilePhoto: "",
        //   role: "moderator",
        //   userId: user.uid,
        //   username: userUsername,
        // }).then(() => {
        //   alert("User created successfully");
        // });
        const docRef = await setDoc(doc(db, "USERS", user.uid), {
          accountStatus: "active",
          appVersion: "1.0",
          createdAt: serverTimestamp(),
          deviceToken: "",
          email: userEmail,
          firstName: userFirstName,
          surname: userLastName,
          gender: "",
          middleName: "",
          onlineStatus: false,
          phoneNumber: "",
          profilePhoto: "",
          role: "moderator",
          userId: user.uid,
          username: userUsername,
        }).then(() => {
          alert("User created successfully");
        });
        console.log("Document written");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //   console.log(error);
      //   alert(errorMessage);
      alert(errorCode);
      // ..
    });
}
// async function addUser() {}

export { createUser };
