class Api::V1::GameController < ApplicationController

  @@boggle_helper = BoggleHelper::Helper.new

  def new_game

    @board = @@boggle_helper.generate_random_boggle_tray(params[:horizontal], params[:vertical])

    @words = @@boggle_helper.get_words(@board)

    @tray = @board.map { |key, value| value }

    render json: {tray: @tray, words: @words}
  end
end