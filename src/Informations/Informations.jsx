function Informations() {
  return (
    <>
      <section className="info_section">
        <div className="info_container layout_padding-top">
          <div className="container">
            <div className="info_top">
              <div className="info_logo">
                <img src="images/logo.png" alt="" />
                <span> Info </span>
              </div>
              <div className="social_box">
                <a href="#">
                  <img src="" alt="youtube" />
                </a>
                <a href="#">
                  <img src="" alt="instagram" />
                </a>
                <a href="#">
                  <img src="" alt="linkedin" />
                </a>
                <a href="#">
                  <img src="" alt="facebook" />
                </a>
                <a href="#">
                  <img src="" alt="discord" />
                </a>
              </div>
            </div>

            <div className="info_main">
              <div className="row">
                <div className="col-md-3 col-lg-2">
                  <div className="info_link-box">
                    <h5>Menu</h5>
                    <ul>
                      <li className="active">
                        <a className="" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="about.html">
                          About us
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="work.html">
                          Sites
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="category.html">
                          Games
                        </a>
                      </li>
                      <li className="">
                        <a className="" href="category.html">
                          Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Info</h5>
                  <p>
                    Readable content of a page when looking at its
                    layoutreadable content of a page when looking at its layout
                  </p>
                </div>
                <div className="col-md-3 offset-lg-1">
                  <div className="info_form">
                    <h5>Newsletter</h5>
                    <form action="">
                      <input type="email" placeholder="Email" />
                      <button>Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Informations;
