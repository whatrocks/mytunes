// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {


    // // WE MAY NEED TO USE THIS FOR ENQUEUING


    // // initialize: function() {
    // // },


    this.$el.html('<th>Song Queue</th>');

  }


});
