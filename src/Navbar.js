import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The GoodTimes</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/company-location">Lithium</Link>
        <Link className="create-blog-nav" to="/create">Create Blog</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;