module BoggleSearch
  class Search

    attr_accessor :boggle_tray

    @@checker = BoggleHelper::Helper.new

    def recursive_search(word, current_word, neighbours, visited)
      neighbours.each do |neighbour|
        neighbour_char = @boggle_tray[neighbour]
        if (word.start_with? (current_word + neighbour_char))
          current_word << neighbour_char
          if current_word == word
            break
          else
            new_neighbours = get_neighbours_indices(neighbour, visited)
            visited.push neighbour
            recursive_search(word, current_word, new_neighbours, visited)
          end
        end
      end
    end

    def search_word(word)
      if @@checker.is_word word

        first_char = word[0]

        @boggle_tray.each do |key, value|
          if (value == first_char)

            current_word = value.dup
            visited = Array[key]
            neighbours = get_neighbours_indices(key, visited)
            recursive_search(word, current_word, neighbours, visited)

            if word == current_word
              return true
            end
          end
        end
      end

      return false
    end

    def get_neighbours_indices(index, visited)
      neighbour_indices = Array.new
      neighbours = [[-1, -1], [0, -1], [1, -1],
                    [-1, 0], [1, 0],
                    [-1, 1], [0, 1], [1, 1]]

      neighbours.each do |neighbour|
        x = index[0] + neighbour[0]
        y = index[1] + neighbour[1]
        if (x > -1 && y > -1 and @boggle_tray[[x, y]] and !visited.include?([x, y]))
          neighbour_indices.push [x, y]
        end
      end
      return neighbour_indices
    end
  end
end