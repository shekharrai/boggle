class Api::V1::GameController < ApplicationController

  @@boggle_helper = BoggleHelper::Helper.new

  def new_game

    @board = @@boggle_helper.generate_random_boggle_tray(params[:horizontal], params[:vertical])

    @words = @@boggle_helper.get_words(@board)

    @tray_map = Hash.new

    @board.each do |k, v|
      @tray_map["[#{k.join(',')}]"] = v.upcase
    end

    render json: {tray: @tray_map, words: @words}
  end
end
