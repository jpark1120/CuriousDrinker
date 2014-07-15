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
    this.$el.addClass('unclicked');
    this.$el.html(this.template(this.model.attributes));

    return this;
  },
  renderBarGraph: function(){
    console.log(this.model.attributes.name);
    // uncomment if putting graph in the top right box again
    // $('.info_container').empty();

    var data = [
      { name: "visitors", checkins: this.model.attributes.fsq_visitors, color: "#78DBE2" },
      { name: "checkins", checkins: this.model.attributes.fsq_checkins, color: "#FFA474" }
    ];

    var placeObject = this.model.attributes
    console.log(this.$el.attr('class'))
    if (this.$el.attr('class') === 'unclicked'){
      this.$el.removeClass('unclicked').addClass('clicked');
      addMarker(placeObject, data);
    } else {
      this.$el.removeClass('clicked').addClass('unclicked');
      console.log("removed!")
      removeMarker(placeObject.id);
    }
  }

});

// $( "#foo" ).toggleClass( className, addOrRemove );

    // if (counter !== 1){
    //   counter = 1
    //   console.log(counter)
    //   return counter
    // } else {
    //   removeMarker();
    //   counter = 0
    //   console.log(counter)
    //   return counter
    // }



    // var lat = parseFloat(this.model.attributes.latitude);
    // var lng = parseFloat(this.model.attributes.longitude);
    // var info = this.model.attributes.name;
    // var place_id = this.model.attributes.id;

    // addMarker(lat, lng, info, data, place_id);

