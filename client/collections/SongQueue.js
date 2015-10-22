// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function() {
    
  },

  playFirst: function() {
    // console.log(this.models[0]);
    this.models[0].play();
    //play the first thing in the queue
  }


});