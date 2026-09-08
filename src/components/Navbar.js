import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">THE TRAVEL SPOT</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Destinations</a>
        <a href="/">Hotels</a>
        <a href="/">Food</a>
        <a href="/">Transport</a>
        <a href="/">Emergency</a>
      </div>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;