(function() {
    $.ajax({
      url: "https://unsplash.com/",
      type: "GET",
      success: function(data) {
        // Get the HTML
        var $data = $(data.responseText);

        // Grab all photos
        var photos = $data.find('.photo').find('img');

        // Pick a random photo
        var photo = photos[Math.floor(Math.random()*photos.length)];

        // Get the src link
        var source = $(photo).attr("src");

        // Insert it into the DOM
        $(".CoverImage").css("background-image", "url(" + source + ")");
      }
    });
})();
