class Api::V1::GameController < ApplicationController

  @@boggle_helper = BoggleHelper::Helper.new
  @@boggle_search = BoggleSearch::Search.new

  def new_game

    @board = @@boggle_helper.generate_random_boggle_tray(params[:horizontal], params[:vertical])
    @@boggle_search.boggle_tray = @board

    @tray_map = Hash.new

    @board.each do |k, v|
      @tray_map["[#{k.join(',')}]"] = v.upcase
    end

    render json: {tray: @tray_map}
  end

  def check_word
    found = @@boggle_search.search_word params[:word]
    render json: {valid: found}
  end
end
