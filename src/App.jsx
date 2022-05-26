import React from "react";
import "./App.scss";
import AddPost from "./components/AddPost";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <div className="w-full h-screen">
      <header className="w-full h-16 bg-gray-700 p-5">
        <h3 className="text-white text-center">
          Firebase Firestore with ReactJs
        </h3>
      </header>
      <main className="flex flex-col content-center p-5">
        <ListPosts />
        <hr className="my-5" />
        <AddPost />
      </main>
    </div>
  );
}

export default App;
