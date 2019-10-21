require_relative '../gilded_rose'

describe GildedRose do

  
  describe "#update_quality" do
    it "does not change the name on quality update" do
      items = [Item.new("foo", 0, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].name).to eq "foo"
    end

    it "Normal item quality decreases by 1 each day" do
      items = [Item.new("Elixir of the Mongoose", 2, 50)]
      GildedRose.new(items).update_quality()
      expect(items[0].quality).to eq 49
    end

    it "Normal items SellIn decreases by 1 each day" do
      items = [Item.new("Elixir of the Mongoose", 2, 50)]
      GildedRose.new(items).update_quality()
      expect(items[0].sell_in).to eq 1
    end
  end

end
