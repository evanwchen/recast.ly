
var VideoList = (props) => (

  <div className="video-list media">
    {window.exampleVideoData.map((item,i) =>
      <VideoListEntry whenClicked={props.whenClicked} entry={item} index={i} />
    )}
  </div>
);

window.VideoList = VideoList;
