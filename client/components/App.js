class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0]
    }

    // this.currentVideo = window.exampleVideoData[0]
  }

  onVideoListEntryClick(i) {
    //update current video
    this.setState({currentVideo: window.exampleVideoData[i]});
  }

  render() {
    return (
      <div> 
        <Nav currentState={this.state.done}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList whenClicked={this.onVideoListEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));