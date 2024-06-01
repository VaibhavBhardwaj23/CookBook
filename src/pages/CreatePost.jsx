import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import styles from "./CreatePost.module.css"
import { useAuthProvider } from "../Context/AuthContext";
export const CreatePost = () => {
  const {userDetail} = useAuthProvider()
  const ref = userDetail?userDetail.userId:"post"
  console.log(ref)
  console.log(userDetail)
  const navigate = useNavigate();
  const postsRef = collection(db, `${ref}`);
  const handleSubmit = (e) => {
    e.preventDefault();
    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
      },
    };
    addDoc(postsRef, document);
    navigate("/");
  };
  return (
    <section className={styles.create}>
      <div className={styles.heading}>
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.createPost}>
        <input
          type="text"
          className={styles.title}
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          className={styles.description}
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className={styles.submit}>
          Create
        </button>
      </form>
    </section>
  );
};
