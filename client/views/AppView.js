// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function() {

    var library = $('<div class="library col-md-4"></div>').append($('<h4>Library</h4>'), this.libraryView.$el);
    var player = $('<div class="player col-md-8"></div>').append($(this.playerView.$el));
    var queue = $('<div class="queue col-md-8"></div>').append($('<h4>Playlist</h4>'), this.songQueueView.$el);


    var row = $('<div class="row"></div').append(library, player, queue);

    return this.$el.html(row);

    // return this.$el.html([
    //   this.playerView.$el,
    //   this.libraryView.$el,
    //   this.songQueueView.$el
    // ]);
  

  }

});
