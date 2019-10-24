#### The Brief

The rules are as follows:

- The game evolves in turns, commonly known as 'ticks'.
- All changes occur at the same time.
- Any live cell with 2 or 3 live neighbours survives until next tick.
- Any live cell with less than 2 live neighbours dies (underpopulation).
- Any live cell with more than 3 live neighbours dies (overpopulation).
- Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).

#### Ideation

- Ideally I'd create a mobius strip style array, with a fixed 2D column/row height, so that a given element can reference those immediately adjacent using 8 fixed transformation values (e.g. element[index + 1])

- For the purpose of testing, I could start with a 1D array and test those index - 1 and index + 1, but this seems like it would run in to lots of refactoring very quickly, so ideally I'd design the play-area before actually testing a single 'tick'

- Because the changes happen concurrently for each tick, I'd store the result of the current tick and next tick as different variables, so that a cascade of array transformations does not affect those cells iterated over after earlier iterations in the same tick.

- 
#### Tests