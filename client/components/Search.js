var Search = (props) => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e) => props.submit(e.target.value)} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );

}
window.Search = Search;
