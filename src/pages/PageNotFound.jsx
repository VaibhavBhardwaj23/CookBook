import { Link } from "react-router-dom"
import "./PageNotFound.css"
export default function PageNotFound() {
  return (
    <div className="canvas">
    <h1>404:(</h1>
    <div className="burger">
      <div className="shadow"></div>
      <div className="bun top">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="tomatoes"></div>
      <div className="patty"></div>
      <div className="bun bottom"></div>
      <div className="lettuce"></div>
      <div className="cheese"></div>
      <div className="cheese_drip"></div>
    </div>
    <p>Lost in the Bun-dles: Our Apologies, but it seems this page took a detour through the pickles. Lettuce find you a better path! 😉</p>
    <Link className="backHome" to={'/'}>See What&apos;s Cookin</Link>
  </div>
  )
}
