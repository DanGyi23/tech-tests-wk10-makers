require 'ship'

describe Ship do
  describe '#initialize' do
    it 'initializes with a ship_length' do
      expect(subject.ship_length).to be_a_kind_of(Integer)
    end
  end
end