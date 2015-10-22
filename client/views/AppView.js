// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    // this.playerView = new PlayerView({el: ".player", model: this.model.get('currentSong')});
    this.mediaAreaView = new MediaAreaView({el: ".player", model: this.model.get('currentSong') });
    this.libraryView = new LibraryView({el: ".lib", collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({el: ".queue", collection: this.model.get('songQueue')});
    // not sure what to instantiate with
    // this.songQueueView = new SongQueueView();


    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function() {

    return function() {

      // this.playerView.$el.render();
      this.mediaAreaView.$el.render();
      this.songQueueView.$el.render();
      this.libraryView.$el.render();

    }();

    // return this.$el.html([
    //   this.playerView.$el,
    //   this.libraryView.$el,
    //   this.songQueueView.$el
    // ]);
  

  }

});
