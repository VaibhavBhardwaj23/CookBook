import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, imageDb } from "../firebase/config";
import styles from "./CreatePost.module.css";
import { useAuthProvider } from "../Context/AuthContext";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Spinner from "../components/Spinner";

export const CreatePost = () => {
  const { userDetail } = useAuthProvider();
  const [steps, setNumberOfSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");
  const [url, setUrl] = useState();
  const reference = "recipe";
  const navigate = useNavigate();
  const postsRef = collection(db, `${reference}`);
  const handleSubmit = (e) => {
    e.preventDefault();
    const document = {
      caloriesPerServing: e.target.calories.value,
      cuisine: e.target.cuisine.value,
      difficulty: e.target.difficulty.value,
      id: 1,
      image: `${url}`,
      ingredients: ingredients,
      instructions: steps,
      mealType: [`${e.target.type.value}`],
      name: e.target.title.value,
      prepTimeMinutes: e.target.prepTime.value,
      rating: 0,
      reviewCount: 0,
      servings: e.target.servSize.value,
      tags: [],
      userId: userDetail.userName,
    };
    addDoc(postsRef, document);
    navigate("/");
  };
  // Add Steps
  function handleAddSteps(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      setNumberOfSteps([...steps, e.target.value]);
      e.target.value = "";
    }
  }
  // Add Ingredient
  function handleAddIngredient(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      setIngredients([...ingredients, e.target.value]);
      e.target.value = "";
    }
  }

  // Add Image
  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (img !== null) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        getDownloadURL(value.ref).then((url) => {
          setUrl(url);
          setIsLoading(false);
          setImg("");
        });
      });
    }
  };
  return (
    <>
      <div className={!isLoading ? `${styles.hide}` : `${styles.preloader}`}>
        <Spinner />
      </div>
    
      <section className={styles.create}>
        <div className={styles.heading}>
          <h1>Whip Up Your Culinary Masterpiece</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.createPost}>
          <input
            type="text"
            className={styles.title}
            name="title"
            placeholder="Title"
            maxLength="50"
          />
          <div className={styles.miscellaneous}>
            <input
              type="text"
              className={styles.prep}
              name="prepTime"
              placeholder="Prep Time (in mins)"
              maxLength="50"
            />
            <input
              type="text"
              className={styles.cuisine}
              name="cuisine"
              placeholder="Cuisine"
              maxLength="50"
            />
            <input
              type="text"
              className={styles.mealType}
              name="type"
              placeholder="Meal Type"
              maxLength="50"
            />
            <input
              type="text"
              className={styles.servingSize}
              name="servSize"
              placeholder="Serving Size"
              maxLength="50"
            />
            <input
              type="text"
              className={styles.difficulty}
              name="difficulty"
              placeholder="Difficulty"
              maxLength="50"
            />
            <input
              type="text"
              className={styles.calories}
              name="calories"
              placeholder="Calories Per Serving"
              maxLength="50"
            />
          </div>
          <input
            type="text"
            className={styles.steps}
            name="ingrdients"
            placeholder="Ingredients *Hit Enter to add New Ingredient to the list"
            maxLength="50"
            onKeyDown={handleAddIngredient}
          />

          <div className={styles.ingredientsContainer}>
            {ingredients.map((ingredient, idx) => {
              return (
                <p className={styles.stepsList} key={idx}>
                  {ingredient}
                </p>
              );
            })}
          </div>
          <input
            type="text"
            className={styles.steps}
            name="steps"
            placeholder="Steps *Hit Enter to add New Step"
            maxLength="50"
            onKeyDown={handleAddSteps}
          />
          {steps.map((step, idx) => {
            return (
              <p className={styles.stepsList} key={idx}>
                {step}
              </p>
            );
          })}

          <h3>Upload Image</h3>
          <p>*Preferred dimensions 1000x1000 for best results</p>
          <div className={styles.files}>
            <label htmlFor="fileUpload" className={styles.filesInput}>
              Choose a File
            </label>
            <input
              id="fileUpload"
              type="file"
              onChange={(e) => setImg(e.target.files[0])}
            />
            {img && <p className={styles.fileName}>{img.name}</p>}

            <button className={styles.upload} onClick={handleClick}>
              Upload
            </button>
          </div>
          {url && <img className={styles.preview} src={url} />}
          <button type="submit" className={styles.submit}>
            Create
          </button>
        </form>
      </section>
    </>
  );
};
