require 'test_helper'

class SpellCheckerTest < Test::Unit::TestCase

  def setup
    @checker = BoggleHelper::Helper.new
    @valid_word = "valid";
    @valid_prefix = "congra";
    @invalid_prefix = "jahdfa";
    @invalid_word = "invalid_word";
  end

  test "given valid word when check then return true" do
    assert_true @checker.is_word(@valid_word)
  end

  test "given invalid word when check then return false" do
    assert_false @checker.is_prefix_word(@invalid_prefix)
  end

  test "given valid word prefix when check then return true" do
    assert_true @checker.is_prefix_word(@valid_prefix)
  end


  test "given invalid word prefix when check then return false" do
    assert_false @checker.is_word(@invalid_prefix)
  end

end