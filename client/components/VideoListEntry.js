var VideoListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src="//i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt=""  />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.entry.snippet.title}</div>
      <div className="video-list-entry-detail">{props.entry.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
