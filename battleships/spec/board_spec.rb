require 'board'

describe Board do

  before(:each) do
    @tug = double(Ship, :ship_length => 2)
    @battleship = double(Ship, :ship_length => 5)
  end

  describe '#initialize' do
    it 'initializes with an 8x8 board' do
      expect(subject.board.size).to eq (8)
      expect(subject.board[0].size).to eq (8)
    end
  end

  describe '#place_ship' do
    it 'allows you to place a ship object of length 2 on given coordinates' do
      subject.place_ship(@tug, [3,3], [3,4])
      expect(subject.board[3][3]).to eq(@tug)
      expect(subject.board[3][4]).to eq(@tug)
    end

    it 'allows you to place a ship object of any length on given coords - horizontal' do
      subject.place_ship(@battleship, [1,1], [1,5])
      expect(subject.board[1][1]).to eq(@battleship)
      expect(subject.board[1][2]).to eq(@battleship)
      expect(subject.board[1][3]).to eq(@battleship)
      expect(subject.board[1][4]).to eq(@battleship)
      expect(subject.board[1][5]).to eq(@battleship)
    end

    it 'allows you to place a ship object of any length on given coords - diagonal' do
      subject.place_ship(@battleship, [1,1], [5,5])
      expect(subject.board[1][1]).to eq(@battleship)
      expect(subject.board[2][2]).to eq(@battleship)
      expect(subject.board[3][3]).to eq(@battleship)
      expect(subject.board[4][4]).to eq(@battleship)
      expect(subject.board[5][5]).to eq(@battleship)
    end



    it 'does not allow you to place outside board constraints' do
      expect{subject.place_ship(@tug, [6,6], [7,7])}.not_to raise_error()
      expect{subject.place_ship(@tug, [8,8], [9,9])}.to raise_error("coordinates not valid")
    end

    it 'does not allow ships to overlap' do
      subject.place_ship(@tug, [2,2], [2,3])
      p subject.board[2][2]
      expect{ subject.place_ship(@battleship, [2,2], [6,2]) }.to raise_error("cannot place 2 ships in one place")
    end
  end
end