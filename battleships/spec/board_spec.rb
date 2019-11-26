require 'board'

describe Board do
  before(:each) do
    @dbl = double("ship", :ship_length => 2)
  end
  describe '#initialize' do
    it 'initializes with an 8x8 board' do
      expect(subject.board.size).to eq (8)
      expect(subject.board[0].size).to eq (8)
    end
  end

  describe '#place_ship' do
    it 'allows you to place a ship object of length 2 on given coordinates' do
      subject.place_ship(@dbl, [3,3], [3,4])
      expect(subject.board[3][3]).to eq(@dbl)
      expect(subject.board[3][4]).to eq(@dbl)
    end

    it 'does not allow you to place outside board constraints' do
      expect{subject.place_ship(@dbl, [8,8],[9,9])}.to raise_error("coordinates not valid")
    end
  end
end