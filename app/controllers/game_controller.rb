class GameController < ApplicationController
  def index
    @card_values = ([*1..4] * 2).shuffle
  end
end
