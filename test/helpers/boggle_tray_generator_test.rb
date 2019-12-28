require 'test_helper'

class BoggleTrayGeneratorTest < Test::Unit::TestCase

  HORIZONTAL = 4
  VERTICAL = 4

  def setup
    @checker = BoggleHelper::Helper.new
  end

  test "generate random #{HORIZONTAL} X #{VERTICAL} boggle tray and check the alphabet letters" do

    boggle_tray = @checker.generate_random_boggle_tray HORIZONTAL, VERTICAL

    assert_true(boggle_tray.size == HORIZONTAL * VERTICAL)

    boggle_tray.each do |key, value|

      assert_equal(0, value =~ /[a-z]/)

    end
  end
end