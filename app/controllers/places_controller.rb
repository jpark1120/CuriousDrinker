class PlacesController < ApplicationController

  respond_to :json

  def index
    all_places = Place.all
    respond_with all_places
  end


end