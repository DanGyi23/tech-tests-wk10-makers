require 'game_of_life'

describe GameOfLife do
  describe '#tick' do
    it 'responds to the method tick' do
      expect(subject).to respond_to('tick')
    end

    it 'returns an array' do
      expect(subject.tick).to be_kind_of Array
    end

    it 'initializes with an array that reads continuously' do
      @game = GameOfLife.new
      @game.board_array[0] = "read me"
      expect(@game.board_array[99 + 1]).to eq("read me")
    end
  end
end