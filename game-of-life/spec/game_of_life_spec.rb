require 'game_of_life'

describe GameOfLife do
  describe '#tick' do
    it 'responds to the method tick' do
      expect(subject).to respond_to('tick')
    end

    it 'returns an array' do
      expect(subject.tick).to be_kind_of Array
    end
  end
end