module BoggleHelper
  class Helper

    ALPHABETS = [('a'..'z')].map(&:to_a).flatten

    def is_word(word)
      speller = FFI::Aspell::Speller.open('en_US')
      check = speller.correct?(word)
      speller.close
      check
    end

    def generate_random_boggle_tray(horizontal, vertical)
      if nil == horizontal
        horizontal = 4
      else
        horizontal = horizontal.to_i
      end
      if nil == vertical
        vertical = 4
      else
        vertical = vertical.to_i
      end

      random_chars = (0...(horizontal * vertical)).map { ALPHABETS[rand(ALPHABETS.length)] }

      return boggle_tray(random_chars, horizontal, vertical)
    end

    private

    def boggle_tray(chars, horizontal, vertical)
      boggle_tray = Hash.new
      char_index = 0
      (0..(horizontal - 1)).each do |x_index|
        (0..(vertical - 1)).each do |y_index|
          boggle_tray[[x_index, y_index]] = chars[char_index]
          char_index = char_index + 1
        end
      end
      return boggle_tray
    end
  end
end
