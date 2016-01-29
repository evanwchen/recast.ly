var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      {props.currentState}
      <Search />

    </div>
  </nav>
);

window.Nav = Nav;
