var CuriousDrinker = CuriousDrinker || { Models: {}, Collections: {}, Views: {} };

CuriousDrinker.Models.Place = Backbone.Model.extend({
  initialize: function() {
    console.log("Place created");
  },
  defaults:{
    name: null,
    address: null,
    fsq_visitors: null,
    fsq_checkins: null,
    latitude: null,
    longitude: null,
    males: null,
    females: null
  }
});

