
var VideoList = (props) => {
  if (props.videoList.length === 0){
    return <div>Loading...</div>
  }

  return (
    <div className="video-list media">
      {props.videoList.map((item,i) =>
        <VideoListEntry whenClicked={props.whenClicked} entry={item} index={i} />
      )}
    </div>
  )
};

window.VideoList = VideoList;
