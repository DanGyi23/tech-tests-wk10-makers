#### The Brief

The rules are as follows:

- The game evolves in turns, commonly known as 'ticks'.
- All changes occur at the same time.
- Any live cell with 2 or 3 live neighbours survives until next tick.
- Any live cell with less than 2 live neighbours dies (underpopulation).
- Any live cell with more than 3 live neighbours dies (overpopulation).
- Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).

#### Ideation

- Ideally I'd create a toroid style array, with a fixed 2D column/row height (10x10), so that a given element can reference those immediately adjacent using 8 fixed transformation values (e.g. element[index + 1], element[index + 11])
- This can be achieved using stepwise modulus division to return an index within the constraints of 0 < index < array.length:

```
def get_element_at(arr, index) 
  index = index % arr.length;
  index = index + arr.length;
  index = index % arr.length;
  return arr[index]
end
```

- For the purpose of testing, I could start with a 1D array and test those index - 1 and index + 1, but this seems like it would run in to lots of refactoring very quickly, so ideally I'd design the play-area before actually testing a single 'tick'

- Because the changes happen concurrently for each tick, I'd store the result of the current tick and next tick as different variables, so that a cascade of array transformations does not affect those cells iterated over after earlier iterations in the same tick.

- Front end, deploy using JQuery and really simple grid format. Have a few buttons:
1) Run indefinitely (Start)
2) Stop (Interrupt)
3) Advance (x) iterations, you can give the user a change to enter a number. This will work like START but stop after x iterations.

#### Tests

- Program responds to a tick
- Tick iterates through array and returns NEW OBJECT
- Test array construction
    - For array length 100, arr[99 + 1] is equivalent to arr[0]
- On tick
    - Any live cell with 2 or 3 live neighbours survives until next tick
        [permutation generator](https://repl.it/repls/SwelteringTediousSolaris)
    - Any live cell with less than 2 live neighbours dies (underpopulation)
        - possible permutations to test: [-11,-10,-9,-1,+1,+9,+10,+11]
    - Any live cell with more than 3 live neighbours dies (overpopulation)
        - Too many permutations to list [find here](https://repl.it/repls/SwelteringTediousSolaris)
    - Any dead cell with exactly 3 neighbours becomes a live cell (reproduction)
- Test state of multiple adjacent cells as part of test to make sure it's all happening concurrently