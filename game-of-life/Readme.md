# Game of Life

[Conways Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)  
[Planning Document](https://github.com/DanGyi23/tech-tests-wk10-makers/blob/master/game-of-life/Ruby/planning.md)  

![](https://github.com/DanGyi23/tech-tests-wk10-makers/blob/master/game-of-life/Docs/game_of_life.gif)

### To Run

- Clone this repo
- Open Javascript/index.html in your internet browser
- Click anywhere on the page to prompt the next generation/tick
- You are god

### Project considerations

- I worked in basic JQuery to visualise the playing area. This could be taken further to have a start/stop button that loops with a delay.
- I decided to build the logic in Ruby first then transpose to JS. This was both to understand the problem and practise both languages. Currently the Ruby logic has no front-end output, though something like HTTP-party would suffice.

- For a more sparse/populous initial configuration, the multiplier on logic.js line 5 can be changed, as per the comment there.

- To make referencing neighbours continuous, and ensure that there were no edge cases in referencing at the start and end of the array, I created a toroidal array (continuously reads from last element to first element, for example (last-index + 10) == 9th index). This just used basic logic to refer to the desired index:

```
index = index % board_array.length;
index = index + board_array.length;
index = index % board_array.length;
return index
```

