require 'game_of_life'

describe GameOfLife do

  before(:each) do
    @game = GameOfLife.new
    @game1 = GameOfLife.new(initial_board_config1)
    @game2 = GameOfLife.new(initial_board_config2)
    @game3 = GameOfLife.new(initial_board_config3)
    @game4 = GameOfLife.new(initial_board_config4)
  end

  describe '#tick' do
    it 'responds to the method tick' do
      expect(@game).to respond_to('tick')
    end

    it 'returns an array' do
      expect(@game.tick).to be_kind_of Array
    end

    describe 'survivors' do
      it 'Any live cell with 2 or 3 live neighbours survives until next tick' do
        @game1.tick
        expect(@game1.board_array[62]).to eq(1)
        expect(@game1.board_array[44]).to eq(1)
      end

      it 'Any live cell with 2 or 3 live neighbours survives until next tick' do
        @game2.tick
        expect(@game2.board_array[75]).to eq(1)
        expect(@game2.board_array[63]).to eq(1)
      end
    end

    describe 'non-survivors (underpopulation)' do
      it 'Any live cell with less than 2 neighbours dies (underpopulation)' do
        expect(@game3.board_array[77]).to eq(1)
        @game3.tick
        expect(@game3.board_array[77]).to eq(0)
      end

      it 'Any live cell with less than 2 neighbours dies (underpopulation)' do
        expect(@game3.board_array[49]).to eq(1)
        @game3.tick
        expect(@game3.board_array[49]).to eq(0)
      end
    end

     describe 'non-survivors (overpopulation)' do
      it 'Any live cell with more than 3 live neighbours dies (overpopulation)' do
        expect(@game4.board_array[77]).to eq(1)
        @game4.tick
        expect(@game4.board_array[77]).to eq(0)
      end

      it 'Any live cell with more than 3 live neighbours dies (overpopulation)' do
        expect(@game4.board_array[33]).to eq(1)
        @game4.tick
        expect(@game4.board_array[33]).to eq(0)
      end
    end

    describe 'reproducers' do
      it 'Any dead cell with exactly 3 neighbours becomes a live cell (reproduction)' do
        expect(@game2.board_array[61]).to eq(0)
        @game2.tick
        expect(@game2.board_array[61]).to eq(1)
      end

      it 'Any dead cell with exactly 3 neighbours becomes a live cell (reproduction)' do
        expect(@game2.board_array[55]).to eq(0)
        @game2.tick
        expect(@game2.board_array[55]).to eq(1)
      end
    end
  end

  describe '#live_neighbour_total' do
    it 'counts the number of live neighbours to current index (test config 1)' do
      expect(@game1.live_neighbour_total(62)).to eq 2
      expect(@game1.live_neighbour_total(75)).to eq 6
    end

    it 'counts the number of live neighbours to current index (test config 2)' do
      expect(@game2.live_neighbour_total(88)).to eq 3
      expect(@game2.live_neighbour_total(75)).to eq 2
      expect(@game2.live_neighbour_total(61)).to eq 3
    end
  end

  describe '#initialize' do
    it 'initializes with an array that reads continuously' do
      @game.board_array[1] = "read me"
      expect(@game.get_element_at((999 + 2))).to eq("read me")
    end

    it 'initializes with an array that reads continuously' do
      @game.board_array[4] = "read me"
      expect(@game.get_element_at((999 + 5))).to eq("read me")
    end

    it 'initializes with an initial configuration of 1(live) and 0(dead) values' do
      expect(@game1.board_array.sum).to be > 0
      expect(@game1.board_array.sum).to be < 1000
    end
  end
end