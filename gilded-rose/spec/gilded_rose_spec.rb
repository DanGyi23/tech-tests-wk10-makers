# frozen_string_literal: true

require_relative '../gilded_rose'

describe GildedRose do
  describe '#update_quality' do
    describe 'Non-Exceptional, non-conjured Items' do
      describe 'Standard Behaviour' do
        before(:each) do
          @items = [Item.new('Elixir of the Mongoose', 5, 5)]
          @gilded_rose = GildedRose.new(@items)
        end

        it 'Does not change the name on update quality' do
          @gilded_rose.update_quality
          expect(@items[0].name).to eq 'Elixir of the Mongoose'
        end

        it 'Normal item quality decreases by 1 each day' do
          @gilded_rose.update_quality
          expect(@items[0].quality).to eq 4
        end

        it 'Normal items SellIn decreases by 1 each day' do
          @gilded_rose.update_quality
          expect(@items[0].sell_in).to eq 4
        end

        it 'Normal items quality decreases 3 times after 3 updates' do
          3.times do
            @gilded_rose.update_quality
          end
          expect(@items[0].quality).to eq 2
        end

        it 'Normal items SellIn decreases 3 times after 3 updates' do
          3.times do
            @gilded_rose.update_quality
          end
          expect(@items[0].sell_in).to eq 2
        end

        it 'Normal item quality decreases from 4 to 0 ONLY, cannot be negative' do
          6.times do
            @gilded_rose.update_quality
          end
          expect(@items[0].quality).to eq 0
        end
      end

      describe 'Non-Standard Behaviour' do
        before(:each) do
          @items = [Item.new('Elixir of the Mongoose', 1, 10)]
          @gilded_rose = GildedRose.new(@items)
        end
        it 'Normal item quality decreases by 2 after sell_in past' do
          2.times do
            @gilded_rose.update_quality
          end
          expect(@items[0].quality).to eq 7
        end

        it 'Normal item quality decreases by 2 for each day past the sell_in' do
          5.times do
            @gilded_rose.update_quality
          end
          expect(@items[0].quality).to eq 1
        end
      end

    end
  end
end
