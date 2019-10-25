require 'game_of_life'

describe GameOfLife do
  before(:each) do
      @game = GameOfLife.new
    end
  describe '#tick' do
    
    it 'responds to the method tick' do
      expect(@game).to respond_to('tick')
    end

    it 'returns an array' do
      expect(@game.tick).to be_kind_of Array
    end

    it 'initializes with an array that reads continuously' do
      @game.board_array[1] = "read me"
      expect(@game.get_element_at(@game.board_array, (99 + 2))).to eq("read me")
    end

    it 'initializes with an array that reads continuously' do
      @game.board_array[4] = "read me"
      expect(@game.get_element_at(@game.board_array, (99 + 5))).to eq("read me")
    end
  end
end