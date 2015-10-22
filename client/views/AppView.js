// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.visualizerView = new VisualizerView({model: this.model.get('currentSong')});
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function() {

    var library = $('<div class="library"></div>').append($(), this.libraryView.$el);
    var player = $('<div class="player"></div>').append($(this.playerView.$el));
    var visualizer = $('<div class="visualizer"></div>').append($(this.visualizerView.$el));
    var queue = $('<div class="queue"></div>').append($('<h4>Playlist</h4>'), this.songQueueView.$el);


    var left = $('<div class="left col-md-4"></div').append(library);
    var main = $('<div class="main col-md-8"></div').append(visualizer, player, queue);

    var row = $('<div class="row"></div>').append(left, main);


    return this.$el.html(row);

    // return this.$el.html([
    //   this.playerView.$el,
    //   this.libraryView.$el,
    //   this.songQueueView.$el
    // ]);
  

  }

});
