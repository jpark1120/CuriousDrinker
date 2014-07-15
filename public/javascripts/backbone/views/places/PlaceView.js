var Popcheckapp = Popcheckapp || { Models: {}, Collections: {}, Views: {} };

Popcheckapp.Views.PlaceView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },
  // not specifying tagName defaults to div
  template: _.template( $('#place-template').html() ),
  events: {
    'click' : 'renderBarGraph'
  },
  render: function(){
    // this initial empty isn't necessary but here for consistency and future feature implementation
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));

    return this;
  },
  renderBarGraph: function(){
    console.log(this.model.attributes.name);

    $('.info_container').empty();

    var data = [
      { name: "visitors", checkins: this.model.attributes.fsq_visitors, color: "#78DBE2" },
      { name: "checkins", checkins: this.model.attributes.fsq_checkins, color: "#FFA474" }
    ];

    var lat = parseFloat(this.model.attributes.latitude);
    var lng = parseFloat(this.model.attributes.longitude);
    var info = this.model.attributes.name;

    addMarker(lat, lng, info, data);

  }

});
