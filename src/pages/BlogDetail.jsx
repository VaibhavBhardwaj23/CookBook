import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore"; 
import styled from "./BlogDetail.module.css"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import NavBar from "../components/NavBar";
const BlogDetail = () => {
  const [posts, setPosts] = useState([]);
  const {slug} = useParams();
  useEffect(() => {
    
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const postsData = querySnapshot.docs.map(doc => doc.data());
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

const result= posts.filter(post=>
{
  return post.title==slug
}
)

  return (
    <div>
    <NavBar/>
      {result.map((post, index) => (
        <div className={styled.review} key={index} >
        <h1>{post.title}</h1>
        <p className={styled.author}>by : {post.author}</p>
        <img src={post.img || `https://firebasestorage.googleapis.com/v0/b/cook-book-54a84.appspot.com/o/Blog%20Images%2Fhow-to-maintain-sustainable-eating-habits.jpg?alt=media&token=8bc6768a-ac3f-424b-81eb-9637ba106362`}/>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        </div>

      ))}
    </div>
  );
};

export default BlogDetail;
