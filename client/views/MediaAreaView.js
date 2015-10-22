var MediaAreaView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.playerView = new PlayerView({el: ".player", model: this.model.get('currentSong')});
    this.render();
  },

  render: function() {
    return this.$el.html().append(this.playerView).render();
  }

});