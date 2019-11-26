require 'ship'

describe Ship do
    before(:each) do
    @tug = Ship.new(2)
  end
  describe '#initialize' do
    it 'initializes with a ship_length' do
      expect(@tug.ship_length).to be_a_kind_of(Integer)
    end
  end
end