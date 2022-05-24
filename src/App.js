import "./App.scss";
import { signInWithGoogle } from "./services/firebase/conn-auth";

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>sign-in with google</button>
    </div>
  );
}

export default App;
