# Gilded Rose README

The purpose of this exercise was to take some legacy code and refactor it, using a coherent TDD process and making sure it's easier to read and edit/update.

I decided to focus on a test-first approach, making sure first that the current code was working. Once I had written tests covering all scenarios for the legacy code, I decided to start refactoring, regularly checking that legacy code worked.

Once I was happy with some initial refactoring, to make the code readable and following SRPs, I continued with TDD-ing the 'Conjure' feature. This uncovered some further opportunities for refactoring, which meant that the code ended up more more readable, with only a single public method being required to update the stock of the famous Gilded Rose!

## Running Gilded Rose

1) Clone this repo to your local dir.
2) Make sure you have RSpec installed  `gem install rspec`
3) Run RSpec, making sure you're in the project root directory, make sure all tests pass.
4) You can test-drive the Gilded Rose yourself! Use IRB (if you haven't got it installed use `gem install irb`)

```
$ irb

2.x.x :001 > require './lib/item.rb'
true

2.x.x :002 > require './lib/gilded_rose.rb'
true

2.x.x :003 > sulfaras = [Item.new('Sulfuras, Hand of Ragnaros', 10, 15)]
 => [#<Item:0x00007f82e92241b0 @name="Sulfuras, Hand of Ragnaros", @sell_in=10, @quality=15>] 

2.x.x :004 > @gilded_rose = GildedRose.new(sulfaras)
 => #<GildedRose:0x00007f82e920ef68 @items=[#<Item:0x00007f82e92241b0 @name="Sulfuras, Hand of Ragnaro
s", @sell_in=10, @quality=15>]> 

 2.x.x :005 > @gilded_rose.stock_update
 @gilded_rose.stock_update
 => [#<Item:0x00007f82e92241b0 @name="Sulfuras, Hand of Ragnaros", @sell_in=10, @quality=15>] 

```

You can use any params you like to instantiate items, and create a gilded_rose instance with multiple items.

## Testing

Simply type `rspec` in your cmd line from the project root directory. If you want to add any of your own tests, these can be added to the respective class_spec.rb files in the ./spec folder.