require 'player'

describe Player do
  describe '#initialize' do
    it 'initializes with an array of 5 ship objects to place' do
      expect(subject.ships.size).to eq(5)
    end
  end
end