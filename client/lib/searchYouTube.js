var searchYouTube = (options, callback) => {

  $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='puppies'&key=${YOUTUBE_API_KEY}`,
      type: 'GET',
      success: function (data) {
        console.log("successful AJAX call");
        console.log(data);
        window.exampleVideoData = data.items;
      },
      error: function (data) {
        console.log(data);
        console.error('chatterbox: Failed to send message');
      }
    });
};

window.searchYouTube = searchYouTube;
