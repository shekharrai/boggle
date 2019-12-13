class BoggleHelper

  ALPHABETS = [('a'..'z')].map(&:to_a).flatten

  def check_spell(word)
    speller = FFI::Aspell::Speller.open('en_US')
    check = speller.correct?(word)
    speller.close
    check
  end

  def generate_random_boggle_tray(size)

    random_chars = (0...(size * size)).map { ALPHABETS[rand(ALPHABETS.length)] }

    to_boggle_tray random_chars, size

  end

  private

  def to_boggle_tray(chars, size)

    boggle_tray = Hash.new

    (0..(size - 1)).each do |x_index|
      (0..(size - 1)).each do |y_index|

        char_index = y_index + (x_index * size)
        boggle_tray[[x_index, y_index]] = chars[char_index]

      end
    end

    boggle_tray
  end
end
