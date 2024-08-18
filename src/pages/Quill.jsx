import  { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore"; 
import "./Quill.css"
import { useAuthProvider } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [title,setTitle] = useState("")
  const navigate = useNavigate();
  const { userDetail } = useAuthProvider();
  console.log(userDetail)
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "blogs"), {
        content: editorHtml,
        createdAt: new Date(),
        title:title,
        author: userDetail.userName,
        img:null,

      });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
    navigate("/");
  };

  return (
    <div className="textEditor">
    <h1>Got a tasty idea simmering? Start writing and serve up your blog to the world!</h1>
    <div className="titleBox">
    <input placeholder="Enter the Blog Title"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>

    </div>
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        theme="snow"
      />
      <div className="blogPostBtn" onClick={handleSubmit}>Post</div>
    </div>
  );
};

export default TextEditor;
