import Category from "./Category.jsx";

function Category_container() {
  return (
    <>
      <section className="category_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>what do we do</h2>
          </div>
          <div className="category_container">
            <Category name="Web developement" image={null} />
            <Category name="Game developement" image={null} />
            <Category name="App design" image={null} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Category_container;
