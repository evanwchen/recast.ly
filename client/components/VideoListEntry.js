var VideoListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.entry.snippet.thumbnails.default.url} alt=""  />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={props.whenClicked.bind(this, props.index)}>{props.entry.snippet.title}</div>
      <div className="video-list-entry-detail">{props.entry.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
