require 'game_of_life'

describe GameOfLife do

  before(:each) do
    @game = GameOfLife.new
    @game1 = GameOfLife.new(initial_board_config1)
    @game2 = GameOfLife.new(initial_board_config2)
  end

  describe '#tick' do
    it 'responds to the method tick' do
      expect(@game).to respond_to('tick')
    end

    it 'returns an array' do
      expect(@game.tick(@game.board_array)).to be_kind_of Array
    end

    describe 'survivors' do
      it 'Any live cell with 2 or 3 live neighbours survives until next tick' do
        expect(@game1.tick(@game1.board_array)).to eq(@game1.board_array)
      end

      it 'Any live cell with 2 or 3 live neighbours survives until next tick' do
        expect(@game2.tick(@game2.board_array)).to eq(@game2.board_array)
      end
    end
  end

  describe '#live_neighbour_total' do
    it 'counts the number of live neighbours to current index (test config 1)' do
      expect(@game1.live_neighbour_total(@game1.board_array, 62)).to eq 2
      expect(@game1.live_neighbour_total(@game1.board_array, 75)).to eq 6
    end

    it 'counts the number of live neighbours to current index (test config 2)' do
      expect(@game2.live_neighbour_total(@game.board_array, 88)).to eq 3
      expect(@game2.live_neighbour_total(@game.board_array, 75)).to eq 2
      expect(@game2.live_neighbour_total(@game.board_array, 61)).to eq 3
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
      expect(@game1.board_array.sum).to be > 0
      expect(@game1.board_array.sum).to be < 100
    end
  end
end