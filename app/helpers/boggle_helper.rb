module BoggleHelper
  class Helper

    ALPHABETS = [('a'..'z')].map(&:to_a).flatten

    def is_word(word)
      speller = FFI::Aspell::Speller.open('en_US')
      check = speller.correct?(word)
      speller.close
      check
    end

    def is_prefix_word(word)
      speller = FFI::Aspell::Speller.open('en_US')
      suggestions = speller.suggestions word
      speller.close
      suggestions.each do |suggestion|
        if suggestion.include? word
          return true
        end
      end
      return false
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
      random_chars = (0...(vertical * vertical)).map { ALPHABETS[rand(ALPHABETS.length)] }
      to_boggle_tray random_chars, horizontal, vertical
    end

    def get_words(boggle_tray)
      # TODO : search words from the boggle_tray
      words = Array['as', 'this', 'man', 'true', 'sun', 'validate']
      return words
    end

    private

    def to_boggle_tray(chars, horizontal, vertical)
      boggle_tray = Hash.new
      (0..(horizontal - 1)).each do |x_index|
        (0..(vertical - 1)).each do |y_index|
          char_index = y_index + (x_index * horizontal)
          boggle_tray[[x_index, y_index]] = chars[char_index]
        end
      end
      return boggle_tray
    end
  end
end
