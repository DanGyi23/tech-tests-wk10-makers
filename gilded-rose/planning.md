# Test Planning

- Each quality_update lowers normal item quality and sell in by 1
- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert


## Tests

### Normal Items

For quality > 3 and sell_in > 3:  
1) Normal item quality decreases by 1 each day => item.quality == 2  
2) Normal item sellin decreases by 1 each day => item.sell_in == 2  
3) Normal item quality decreases by 3 after 3 updates => item.quality == 0
4) Normal item sellin decreases by 3 after 3 updates => item.sell_in == 0  

For quality == 2 and sell_in == 10:  
5) Normal item quality decreases from 2 to 0 ONLY after 3 updates => item.quality == 0  

For quality == 50 and sell_in == 2:  
6) Normal item quality decreases by 2 after 2 days => item.quality == 48  
7) Normal item quality decreases by 4 after 3 days =>
item.quality == 46  
8) Normal item quality decreases by 18 after 10 days => 
item.quality == 32   

### Exceptional items

##### Brie
For quality == 30 and sell_in == 12  
9) Item.name == "Aged Brie", quality increases by 1 after 1 day => item.quality == 31  
10) Item.name == "Aged Brie", quality increases by 5 after 5 days => item.quality == 35  
11) Item.name == "Aged Brie", quality increases by 20 after 30 days => item.quality == 50
12) Item.name == "Aged Brie", sell_in decreases as normal (3x) => item.quality == 9

#### Sulfuras
For quality == 5 and sell_in == 8  
13) Item.name == 'Sulfuras', quality doesn't change after multiple updates => item.quality == 5  
14) Item.name == 'Sulfuras', sell_in doesn't change after multiple updates => item.sell_in == 8  

#### Backstage Passes
For quality == 12 and sell_in == 12  
15) Decreases in quality after 1 day if sell_in > 10 => 
item.quality == 11

For quality == 10 and sell_in == 10
16) Increases in quality by 2 if 11 > sell_in > 5 => item.quality == 12  

For quality == 10 and sell_in == 5  
17) Increases in quality by 3 if 5 > sell_in > 0 => item.quality == 13  

For quality == 10 and sell_in == 0
18) Quality drops to zero when sell_in date is negative => item.quality = 0

#### Conjured items

For quality == 10 and sell_in == 13  
19) Normal, conjured item. Drops in quality by 2 each day => item.quality == 8  

20) Normal, conjured item. Drops in sell_in by 1 each day =>  item.sell_in == 12  

21) Normal, conjured item. Quality cannot drop past 0 (6x)
=> item.quality == 0  

22) Brie, conjured item. Quality increases by 2 after 1 day
=> item.quality == 12  

23) Brie, conjured item. Sell_in decreases by 1 after each day => item.sell_in == 12  

24) Sulfuras, conjured. Quality stays same => item.quality == 10  

25) Backstage Pass, conjured. Quality degrades by 2 if sell_in > 10. => item.quality == 8  

For quality == 10 and sell_in == 9  
26) Backstage Pass, conjured. Quality improves by 4 if sell_in < 10 but > 5 => item.quality == 14  

For quality == 10 and sell_in == 4  
27) Backstage Pass, conjured. Quality improves by 6 if sell_in < 5 but > 0 => item.quality == 16  

For quality == 10 and sell_in == 0  
28) Backstage Pass, conjured. Quality reduces to 0 if sell_in < 0 => item.quality == 0  