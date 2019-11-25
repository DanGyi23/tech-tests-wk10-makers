require_relative 'board'

describe Board do
  describe '#initialize' do
    it 'initializes with an 8x8 board' do
      expect(subject.board.size).to eq (8)
      expect(subject.board[0].size).to eq (8)
    end
  end
end