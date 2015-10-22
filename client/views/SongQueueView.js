// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "remove", this.render);


    //this.collection.on('add', this.render, this);

    // this.collection.on('add', this.render, this);
    // this.collection.bind('add', this.add, this);
    // this.collection.listffenTo(this, 'add', this.render);
    //this.listenTo(this.collection, 'add', this.render);

  },

  render: function() {
    // // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // // see http://api.jquery.com/detach/
    // this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
