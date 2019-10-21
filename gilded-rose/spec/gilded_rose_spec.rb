# frozen_string_literal: true

require_relative '../gilded_rose'

describe GildedRose do
  describe '#update_quality' do
    describe 'Non-Exceptional Items' do
      before(:each) do
        @items = [Item.new('Elixir of the Mongoose', 2, 50)]
      end
      it 'does not change the name on update quality' do
        GildedRose.new(@items).update_quality
        expect(@items[0].name).to eq 'Elixir of the Mongoose'
      end

      it 'Normal item quality decreases by 1 each day' do
        GildedRose.new(@items).update_quality
        expect(@items[0].quality).to eq 49
      end

      it 'Normal items SellIn decreases by 1 each day' do
        GildedRose.new(@items).update_quality
        expect(@items[0].sell_in).to eq 1
      end
    end
  end
end
