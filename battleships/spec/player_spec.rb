require 'player'

describe Player do
  before(:each) do
    @player1 = Player.new("Dan")
  end
  describe '#initialize' do
    it 'initializes with an array of 5 ship objects to place' do
      expect(@player1.ships.size).to eq(5)
    end
  end
end