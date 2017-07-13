class Api::GuestsController < ApplicationController
  def index
    @guests = Guest.all.select do |guest|
      guest.age.between?(40, 50)
    end

    render :index
  end

  def show
    @guest = Guest.find(params[:id])
    render :show
  end
end
