// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {

    this.listenTo(this.collection, "add", this.render);
    
    this.listenTo(this.collection, "remove", this.render);

  },

  render: function() {

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
