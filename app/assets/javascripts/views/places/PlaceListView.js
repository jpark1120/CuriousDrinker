var CuriousDrinker = CuriousDrinker || { Models: {}, Collections: {}, Views: {} };

CuriousDrinker.Views.PlaceListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    var self = this;
    this.$el.empty();
    _.each(this.collection.models, function(place){
      var placeView = new CuriousDrinker.Views.PlaceView({model: place})
      self.$el.append(placeView.render().el);
    });
  }
})

