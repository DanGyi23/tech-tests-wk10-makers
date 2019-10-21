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
    describe 'Aged Brie, non-conjured' do
      before(:each) do
        @items = [Item.new('Aged Brie', 5, 5)]
        @gilded_rose = GildedRose.new(@items)
      end

      it 'Brie quality increases by 1 after 1 day' do
        @gilded_rose.update_quality
        expect(@items[0].quality).to eq 6
      end

      it 'Brie quality increases doubly after sell_in date passed' do
        6.times do
          @gilded_rose.update_quality
        end
        expect(@items[0].quality).to eq 12
      end

      it 'Brie sell_in decreases as normal' do
        @gilded_rose.update_quality
        expect(@items[0].sell_in).to eq 4
      end
    end

    describe 'Sulfuras, non-conjured' do
      before(:each) do
        @items = [Item.new('Sulfuras, Hand of Ragnaros', 5, 5)]
        @gilded_rose = GildedRose.new(@items)
      end
      it 'Does not change in quality or sell_in' do
        6.times do
          @gilded_rose.update_quality
        end
        expect(@items[0].sell_in).to eq 5
        expect(@items[0].quality).to eq 5
      end
    end

    describe 'Backstage Passes, non-conjured' do
      before(:each) do
        @items = [Item.new('Backstage passes to a TAFKAL80ETC concert', 12, 5)]
        @gilded_rose = GildedRose.new(@items)
      end

      it 'Increases in quality by 1 after 1 day if sell_in > 10' do
        @gilded_rose.update_quality
        expect(@items[0].quality).to eq 6
      end

      it 'Increases in quality by 2 if 11 > sell_in > 5' do
        3.times do
          @gilded_rose.update_quality
        end
        expect(@items[0].quality).to eq 9
      end

      it 'Increases in quality by 3 if 5 > sell_in > 0' do
        7.times do
          @gilded_rose.update_quality
        end
        expect(@items[0].quality).to eq 17
        @gilded_rose.update_quality
        expect(@items[0].quality).to eq 20
      end

      it 'Quality drops to zero when sell_in date is negative' do
        12.times do
          @gilded_rose.update_quality
        end
        expect(@items[0].quality).to eq 32
        @gilded_rose.update_quality
        expect(@items[0].quality).to eq 0
      end
    end
  end
end
