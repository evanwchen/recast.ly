class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      currentVideo: null
    }
  }

  onVideoListEntryClick(i) {
    this.setState({currentVideo: this.state.videoList[i]});
  }

  componentDidMount() {
    var options = {
      query: 'puppies',
      max: 5
    }
    console.log("options :", options);


    searchYouTube(options, (videos) =>
      //?why do we have to use 'this'?
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      })
    )
  }

  render() {
    return (
      <div>
        <Nav currentState={this.state.done}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            whenClicked={this.onVideoListEntryClick.bind(this)}
            videoList={this.state.videoList}
          />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("app"));
