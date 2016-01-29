var Search = (props) => (
  <form className="search-bar form-inline">
    <input className="form-control" type="text" onSubmit={props.submit.bind(this)}/>
    <button className="btn hidden-sm-down" type="submit">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

window.Search = Search;
