// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    expect(pokemons('jigglypuff')).toThrow(error);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    expect(getCharacter('Charmander')).toEqual({
        name: 'Charmander',
        type: 'Fire',
        ability: 'Ember',
      });
  });
});