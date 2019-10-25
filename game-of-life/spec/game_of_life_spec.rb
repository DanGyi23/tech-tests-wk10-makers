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
      expect(@game.tick(@game.board_array)).to be_kind_of Array
    end    
  end

  describe '#initialize' do
    it 'initializes with an array that reads continuously' do
      @game.board_array[1] = "read me"
      expect(@game.get_element_at(@game.board_array, (99 + 2))).to eq("read me")
    end

    it 'initializes with an array that reads continuously' do
      @game.board_array[4] = "read me"
      expect(@game.get_element_at(@game.board_array, (99 + 5))).to eq("read me")
    end

    it 'initializes with an initial configuration of 1(live) and 0(dead) values' do
      expect(@game.board_array.sum).to be > 0
      expect(@game.board_array.sum).to be < 100
    end
  end

  describe '#survivors' do
    it 'Any live cell with 2 or 3 live neighbours survives until next tick' do
      expect(@game.tick(@game.board_array)).to eq(@game.board_array)
    end
  end
end