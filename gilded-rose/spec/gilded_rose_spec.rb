# frozen_string_literal: true

require_relative '../gilded_rose'

describe GildedRose do
  describe '#update_quality' do
    describe 'Non-Exceptional Items' do
      before(:each) do
        @items = [Item.new('Elixir of the Mongoose', 5, 50)]
        @gilded_rose = GildedRose.new(@items)
      end
      it 'does not change the name on update quality' do
        @gilded_rose.update_quality
        expect(@items[0].name).to eq 'Elixir of the Mongoose'
      end

      it 'Normal item quality decreases by 1 each day' do
        @gilded_rose.update_quality
        expect(@items[0].quality).to eq 49
      end

      it 'Normal items SellIn decreases by 1 each day' do
        @gilded_rose.update_quality
        expect(@items[0].sell_in).to eq 4
      end

      it 'Normal items quality decreases 3 times after 3 updates' do
        @gilded_rose.update_quality
        @gilded_rose.update_quality
        @gilded_rose.update_quality
        expect(@items[0].quality).to eq 47
      end
    end
  end
end
