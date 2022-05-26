import React from "react";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { dbStore } from "../lib/firebase.init";

const btn =
  "text-white border rounded-lg p-1 m-2 shadow-xl hover:shadow-sm hover:border-2  transition-all duration-100";
const styled = {
  edit: "bg-yellow-300 hover:bg-yellow-500 " + btn,
  primary: "bg-blue-300 hover:bg-blue-500 " + btn,
  delete: "bg-red-300 hover:bg-red-500 " + btn,
};

function Post(props) {
  const [message, setMessage] = React.useState(props?.message ?? "");
  const [isEdit, setIsEdit] = React.useState(true);
  const handleUpdate = (docId) => async (_e) => {
    const docRef = doc(dbStore, "posts", docId);
    await updateDoc(docRef, { message })
      .then((resp) => {
        setIsEdit(true);
        props?.fnGetPost();
      })
      .catch((err) => console.error(err.message));
  };

  const handleDelete = (docId) => async (_e) => {
    const docRef = doc(dbStore, "posts", docId);
    await deleteDoc(docRef)
      .then((resp) => props?.fnGetPost())
      .catch((err) => console.error(err.message));
  };
  return (
    <div className="container border-2 rounded-sm p-4 mb-1">
      <form className="flex justify-between content-center">
        <div className="form-control">
          <label htmlFor="message" className="mr-2">
            message:
          </label>
          <input
            disabled={isEdit}
            name="message"
            className={`${isEdit ? "" : "border-2"} rounded-md`}
            placeholder="input your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form-control">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className={styled.edit}
              type="button"
            >
              EDIT
            </button>
          ) : (
            <button
              onClick={handleUpdate(props?.docId)}
              className={styled.primary}
              type="button"
            >
              UPDATE
            </button>
          )}

          <button
            className={styled.delete}
            type="button"
            onClick={handleDelete(props?.docId)}
          >
            DELETE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post;
