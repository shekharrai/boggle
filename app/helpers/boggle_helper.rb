class BoggleHelper

  def check_spell(word)
    speller = FFI::Aspell::Speller.open('en_US')
    check = speller.correct?(word)
    speller.close
    check
  end

end
