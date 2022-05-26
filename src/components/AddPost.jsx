import React from "react";
import { addDoc } from "firebase/firestore";
import { postsCollectionRef } from "../lib/firebase.collection";

function AddPost() {
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "") {
      return;
    }
    await addDoc(postsCollectionRef, { message, create_date: new Date() })
      .then((resp) => setMessage(""))
      .catch((err) => console.error(err.message));
  };
  return (
    <div className="container ">
      <h4 className="p-3">AddPost</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message" className="mb-2">
          message:
        </label>
        <input
          name="message"
          className="block border-2 rounded-md"
          placeholder="input your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white border rounded-lg p-1 m-2 shadow-2xl hover:shadow-sm hover:border-2 hover:bg-blue-600 transition-all duration-100"
          type="submit"
        >
          POST
        </button>
      </form>
    </div>
  );
}

export default AddPost;
