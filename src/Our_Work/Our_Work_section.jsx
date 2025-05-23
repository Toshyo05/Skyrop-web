import Work from "./Work.jsx";

function Our_Work_section() {
  return (
    <>
      <section className="our_work_section">
        <div id="accordion">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 offset-md-1">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>our work</h2>
                  </div>
                  <div className="tab_container">
                    <Work
                      image={null}
                      subtitle="Web developement"
                      title="Kopehub"
                    />
                    <Work image={null} subtitle="Game design" title="???" />
                    <Work
                      image={null}
                      subtitle="2 million views"
                      title="per sites"
                    />
                    <Work image={null} subtitle="100% " title="satisfaction" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src="" alt="image1" />
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src="" alt="image2" />
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src="" alt="image3" />
                  </div>
                </div>
                <div
                  className="collapse"
                  id="collapseFour"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="img-box">
                    <img src="" alt="image4" />
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

export default Our_Work_section;
