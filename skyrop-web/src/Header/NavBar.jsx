function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom_nav-container">
        <a className="navbar-brand" href="index.html">
          <img src="" alt="Logo" />
          <span> Skyrop </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="work.html">
                Sites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="category.html">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="category.html">
                Projects
              </a>
            </li>
          </ul>
          <div className="user_option">
            <a href="">
              <span> Login (cassé) </span>
            </a>
          </div>
        </div>
        <div>
          <div className="custom_menu-btn">
            <button>
              <span className="s-1"></span>
              <span className="s-2"></span>
              <span className="s-3"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
