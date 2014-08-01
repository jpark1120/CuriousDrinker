var CuriousDrinker = CuriousDrinker || { Models: {}, Collections: {}, Views: {} };

CuriousDrinker.Collections.PlaceCollection = Backbone.Collection.extend({
  model: CuriousDrinker.Models.Place,
  url: '/places'
});
