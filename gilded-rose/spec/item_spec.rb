# frozen_string_literal: true

require_relative '../lib/item'

describe Item do
  before(:each) do
    @item = Item.new('Cool Item', 5, 8)
  end
  it 'is instantiated with name' do
    expect(@item.name).to eq 'Cool Item'
  end
  it 'is instantiated with sell_in' do
    expect(@item.sell_in).to eq 5
  end
  it 'is instantiated with quality' do
    expect(@item.quality).to eq 8
  end

  describe '#to_s' do
    it 'returns the item properties as a string' do
      expect(@item.to_s).to eq 'Cool Item, 5, 8'
    end
  end
end
