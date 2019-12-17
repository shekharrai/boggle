require 'test_helper'

class BoggleTest < Test::Unit::TestCase

  CHARS = Array['a', 's', 'u', 'n',
                'i', 's', 'a', 'e',
                'm', 't', 'c', 'o',
                'a', 'k', 'e', 'i']

  def setup

    @boggle_search = BoggleSearch::Search.new

    init_boggle_tray

    @boggle_search.boggle_tray = @boggle_tray

  end

  test "check static boggle tray" do

    assert_true(@boggle_tray.size == 16)
    @boggle_tray.each do |key, value|

      assert_equal(0, value =~ /[a-z]/)

    end
  end

  test "given valid horizontal words when search then return true" do
    diagonal_words = Array['is', 'sun']
    diagonal_words.each do |word|
      #assert_true @boggle_search.search word
    end
  end

  test "given invalid horizontal words when search then return true" do

  end

  private

  def init_boggle_tray
    @boggle_tray = Hash.new

    (0..(3)).each do |x_index|
      (0..(3)).each do |y_index|

        char_index = y_index + (x_index * 4)
        @boggle_tray[[x_index, y_index]] = CHARS[char_index]

      end
    end
  end
end