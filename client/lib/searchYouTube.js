var searchYouTube = (options, callback) => {

  $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search'
      type: 'GET',
      q: JSON.stringify(options.query),
      pageInfo.totalResults: options.max || 5,
      videoEmbeddable: 'true',
      // api key?
      contentType: 'application/json',
      success: function (data) {
        function(){};
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message');
      }
    });
};

window.searchYouTube = searchYouTube;
