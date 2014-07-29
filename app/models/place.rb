require 'date'

class Place < ActiveRecord::Base

  def self.explore
    url = "https://api.foursquare.com/v2/venues/explore?ll=40.7160085,-73.9830292&client_id=#{Rails.application.secrets.four_api_id}&client_secret=#{Rails.application.secrets.four_api_secret}&v=#{Time.now.strftime("%Y%m%d")}&query=drinks&limit=50"

    jsonresponse = JSON.parse(HTTParty.get(url).body)

    return jsonresponse["response"]["groups"][0]["items"]
  end


  def self.venue_crowd(venue)
    url = "https://api.foursquare.com/v2/venues/#{venue}/tips?sort=recent&client_id=#{Rails.application.secrets.four_api_id}&client_secret=#{Rails.application.secrets.four_api_secret}&v=#{Time.now.strftime("%Y%m%d")}&limit=500"

    jsonresponse = JSON.parse(HTTParty.get(url).body)

    return jsonresponse["response"]["tips"]["items"]
  end

end
