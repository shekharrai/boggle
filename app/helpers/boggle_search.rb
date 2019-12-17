module BoggleSearch
  class Search

    attr_accessor :boggle_tray

    @@checker = BoggleHelper::Helper.new

    def search(word)
      visited = Hash.new

      current_word = ''

      size = Math.sqrt(@boggle_tray.size)

      (0..(size - 1)).each do |x_index|
        (0..(size - 1)).each do |y_index|
          find_word(visited, x_index, y_index, size, current_word)
          false
        end
      end
    end


    def find_word(visited, x_index, y_index, size, current_word)

      visited[[x_index, y_index]] = true

      current_word << @boggle_tray[[x_index, y_index]]

      puts "#{current_word} <= #{x_index} : #{y_index}"

      if @@checker.is_word current_word then
        #puts current_word
      end

      row = x_index - 1
      while x_index + 1 >= row and row < size
        column = y_index - 1
        while y_index + 1 >= column and column < size
          if row >= 0 and column >= 0 and !visited[[row, column]]
            find_word(visited, row, column, size, current_word)
          end
          column = column + 1
        end
        row = row + 1
      end
      current_word[1..-1] = ''
      visited[[x_index, y_index]] = false
    end
  end
end