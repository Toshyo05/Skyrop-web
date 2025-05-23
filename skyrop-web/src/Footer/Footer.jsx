function Footer() {
  return (
    <>
      <footer className="container-fluid footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayDate"></span> indpired by
            <a target="_blank" href="https://html.design/">
              {" "}
              Html designs{" "}
            </a>
            Spering
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
