
var VideoList = () => (

  <div className="video-list media">
    {window.exampleVideoData.map(item =>
      <VideoListEntry entry={item} name={"evan"} />
    )}
  </div>
);

window.VideoList = VideoList;
