
suggested_places = Place.explore

suggested_places.each do |bar|

  Place.create({
    name: bar["venue"]["name"],
    address: bar["venue"]["location"]["address"],
    fsq_visitors: bar["venue"]["stats"]["usersCount"],
    fsq_checkins: bar["venue"]["stats"]["checkinsCount"],
    latitude: bar["venue"]["location"]["lat"].to_s,
    longitude: bar["venue"]["location"]["lng"].to_s
  })

end