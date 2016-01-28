var App = () => (
  <div> 
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={window.exampleVideoData[0].id.videoId}/>
    </div>
    <div className="col-md-5">
      <VideoList/>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));