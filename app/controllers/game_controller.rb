class GameController < ApplicationController
  def index
    @card_values = ([*1..6] * 2).shuffle
  end
end
