require 'test_helper'

class SpellCheckerTest < Test::Unit::TestCase

  def setup
    @checker = BoggleHelper.new
    @valid_word = "valid";
    @invalid_word = "invalid_word";
  end

  test "given valid word when check then return true" do
    assert_true @checker.check_spell(@valid_word)
  end

  test "given invalid word when check then return false" do
    assert_false @checker.check_spell(@invalid_word)
  end

end