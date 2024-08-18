import { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import PreLoader from "../components/PreLoader";
import style from "./BlogsPage.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect } from "react";
import BlogsCard from "../components/BlogsCard";
import Spinner from "../components/Spinner"
export default function BlogsPage() {
  const [posts, setPost] = useState(new Array(3).fill(false));
  const postRef = useRef(collection(db, "blogs"));
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPost(
        data.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }))
      );
    }
    getPosts();
  }, []);
  return (
    <>
      <PreLoader />
      <NavBar />
      <div className={style.blogList}>
        {posts[0]==false?<Spinner/>:posts.map(post=><BlogsCard key={post.id} post={post}/>)}
      </div>
    </>
  );
}
