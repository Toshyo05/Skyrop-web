function Work(props) {
  return (
    <>
      <div
        className="t-link-box"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <div className="img-box">
          <img src={props.image} alt="" />
        </div>
        <div className="detail-box">
          <h5>{props.subtitle}</h5>
          <h3>{props.title}</h3>
        </div>
      </div>
    </>
  );
}

export default Work;
