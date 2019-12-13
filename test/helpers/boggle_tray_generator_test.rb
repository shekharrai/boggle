require 'test_helper'

class BoggleTrayGeneratorTest < Test::Unit::TestCase

  LENGTH = 4


  def setup
    @checker = BoggleHelper.new
  end

  test "generate random #{LENGTH} X #{LENGTH} boggle tray" do

    boggle_tray = @checker.generate_random_boggle_tray LENGTH

    assert_true(boggle_tray.size == LENGTH * LENGTH)

    boggle_tray.each do |key, value|

      assert_equal(0, value =~ /[a-z]/)

    end
  end
end