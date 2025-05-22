function Category(props) {
  return (
    <>
      <div className="box">
        <div className="img-box">
          <img src={props.image} alt="" />
        </div>
        <div className="detail-box">
          <h5>{props.name}</h5>
        </div>
      </div>
    </>
  );
}

export default Category;
