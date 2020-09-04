var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      currentVideo: null,
    };
  },
});

var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      id: '',
      thumbnail: '',
    };
  },
});

var VideosCollection = Backbone.Collection.extend({
  //need a URL attribute that can be updated  // url: 'https://beer-review-api.herokuapp.com/beers',

  url: '',
  model: VideoModel,

  searchVideo: function () {
    console.log('searching videos!');
    //plan: use search terms to update collection's url
    //send to a fetch function
    //parse results
  },

  // addVideo: function (title, description, id, thumbnail) {
  //   this.create({
  //     title: title,
  //     description: description,
  //     id: id,
  //     thumbnail: thumbnail
  //   }, { wait: true });
  // }

  // parse: function (response) {
  //   return response.map(function (b) {
  //     var reviews = this.get('reviews') || new ReviewsCollection();

  //     reviews.set(b.reviews);

  //     b.reviews = reviews;

  //     return Object.assign({'id': b._id}, b);
  //   }, this);
  // }
});

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter', //create collection of videos
    // 'click .view-video': 'viewVideo', //click event on thumbnail
  },

  initialize: function () {
    // this.listenTo(this.model.get('videos'), 'add', this.renderVideos); //render both Main and Thumbnail views when collection changes
    // this.listenTo(this.model, 'change:main_video', this.renderMainView); //and re-render the thumbnail view
    // this.renderVideos();
  },

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function
    //in VideosCollection
    if (event.which === 13) {
      // console.log('confirmed enter key');
      // console.log($('#search-input').val());
      this.model.get('videos').searchVideo(); //send search parameters here
    }
  },

  viewVideo: function (e) {
    // var clickedVideoId = $(e.currentTarget).data().id;

    // this.model.showReviews(clickedBeerId);
  },

  renderVideo: function (video) {
    // var videoView = new Video({ model: beer }); //Video MainView or Thumbnail view?
    // this.$videoList.append(videoView.render().el);
  },

  renderVideos: function () {
    // this.model.get('videos').each(function (m) {
    //   this.renderVideo(m); //render video Main or Thumbnail?
    // }, this);
  },
});

// var VideoMainView = Backbone.View.extend({});

// var VideoThumbnailView = Backbone.View.extend({});

var appModel = new AppModel();
var appView = new AppView({ model: appModel });