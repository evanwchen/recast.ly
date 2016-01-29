var searchYouTube = (options, callback) => {

  // $.ajax({
  //     url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='puppies'&key=${YOUTUBE_API_KEY}`,
  //     type: 'GET',
  //     success: function (data) {
  //       console.log("successful AJAX call");
  //       console.log(data);
  //       window.exampleVideoData = data.items;
  //     },
  //     error: function (data) {
  //       console.log(data);
  //       console.error('chatterbox: Failed to send message');
  //     }
  //   });

    $.get('https://www.googleapis.com/youtube/v3/search', {
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video',
      part: 'snippet',
      key: YOUTUBE_API_KEY
    })
    .done(function(data) {
      console.log("successful AJAX call");
      if (callback) {
        callback(data.items);
      }
    })
    .fail(function(data) {
      console.error('chatterbox: Failed to send message');
    })
};

window.searchYouTube = searchYouTube;
