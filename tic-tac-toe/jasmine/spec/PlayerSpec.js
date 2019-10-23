describe("Player", function () {
  player = new Player("X");
  it("Has a name set by argument", function () {
    expect(player._name).toEqual("X")
  });
});