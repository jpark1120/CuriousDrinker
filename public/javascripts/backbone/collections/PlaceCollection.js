var Popcheckapp = Popcheckapp || { Models: {}, Collections: {}, Views: {} };

Popcheckapp.Collections.PlaceCollection = Backbone.Collection.extend({
  model: Popcheckapp.Models.Place,
  url: '/places'
});
