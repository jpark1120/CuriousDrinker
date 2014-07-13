class Place < ActiveRecord::Base

  def self.explore
    url = "https://api.foursquare.com/v2/venues/explore?ll=40.7160085,-73.9830292&client_id=#{Rails.application.secrets.four_api_id}&client_secret=#{Rails.application.secrets.four_api_secret}&v=20140712&query=drinks"

    jsonresponse = JSON.parse(HTTParty.get(url).body)

    venues = jsonresponse["response"]["groups"][0]["items"]
  end


end
