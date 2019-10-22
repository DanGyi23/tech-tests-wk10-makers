# frozen_string_literal: true

class GildedRose
  QUALITY_MIN = 0

  def initialize(items)
    @items = items
  end

  def stock_update
    update_sell_in
    update_quality_backstage_pass
    update_quality_brie
    update_quality_normal
  end

  private

  def update_sell_in
    @items.each do |item|
      unless item.name == 'Sulfuras, Hand of Ragnaros'
        item.sell_in -= 1
      end
    end
  end

  def update_quality_normal
    @items.each do |item|
      if (item.name != 'Aged Brie') && (item.name != 'Backstage passes to a TAFKAL80ETC concert') && (item.name != 'Sulfuras, Hand of Ragnaros') && item.quality > QUALITY_MIN
        if item.sell_in >= 0
          item.quality -= 1
        else
          item.quality -= 2
        end
      end
    end
  end

  def update_quality_brie
    @items.each do |item|
      if item.name == 'Aged Brie' && item.quality < 50
        if item.sell_in >= 0
          item.quality += 1
        else
          item.quality += 2
        end
      end
    end
  end

  def update_quality_backstage_pass
    @items.each do |item|
      if item.name == 'Backstage passes to a TAFKAL80ETC concert' && item.quality < 50
        if item.sell_in >= 10
          item.quality += 1
        elsif item.sell_in < 10 && item.sell_in >= 5
          item.quality += 2
        elsif item.sell_in < 5 && item.sell_in >= 0
          item.quality += 3
        else
          item.quality = QUALITY_MIN
        end
      end
    end
  end

end
