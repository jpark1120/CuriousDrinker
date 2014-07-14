var Popcheckapp = Popcheckapp || { Models: {}, Collections: {}, Views: {} };

Popcheckapp.Views.PlaceView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },
  // not specifying tagName defaults to div
  template: _.template( $('#place-template').html() ),
  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));

    return this;
  }
});