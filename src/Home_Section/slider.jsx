function Slider() {
  return (
    <>
      <section className="slider_section">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box">
                    <h1>Skyrop</h1>
                    <p>lil description</p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        {" "}
                        About Us{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="offset-md-1 col-md-4 img-container">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
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

export default Slider;
