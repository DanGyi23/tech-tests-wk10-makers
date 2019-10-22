# frozen_string_literal: true

class GildedRose
  QUALITY_MIN = 0
  QUALITY_MAX = 50

  def initialize(items)
    @items = items
  end
  

  def stock_update
    @items.each do |item|
      update_sell_in(item)
      if conjured?(item)
        2.times do 
          update_quality_all_item_types(item)
        end
      else
        update_quality_all_item_types(item)
      end
    end
  end

  private

  def update_quality_all_item_types(item)
    update_quality_backstage_pass(item)
    update_quality_brie(item)
    update_quality_normal(item)
  end

  def conjured?(item)
    item.name.include?("Conjured") || item.name.include?("conjured")
  end

  def update_sell_in(item)
      unless item.name == 'Sulfuras, Hand of Ragnaros'
        item.sell_in -= 1
    end
  end

  def update_quality_normal(item)
    if (item.name != 'Aged Brie') && (item.name != 'Backstage passes to a TAFKAL80ETC concert') && (item.name != 'Sulfuras, Hand of Ragnaros') && item.quality > QUALITY_MIN
      if item.sell_in >= 0
        item.quality -= 1
      else
        item.quality -= 2
      end
    end
  end

  def update_quality_brie(item)
    if item.name == 'Aged Brie' && item.quality < QUALITY_MAX
      if item.sell_in >= 0
        item.quality += 1
      else
        item.quality += 2
      end
    end
  end

  def update_quality_backstage_pass(item)
    if item.name == 'Backstage passes to a TAFKAL80ETC concert' && item.quality < QUALITY_MAX
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
