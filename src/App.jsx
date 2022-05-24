import React from "react";
import "./App.scss";
import { auth, signInWithGoogle } from "./services/firebase/firebase-config";

function App() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>sign-in with google</button>
    </div>
  );
}

export default App;
