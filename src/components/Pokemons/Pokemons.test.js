import React from "react";
import { shallow } from "enzyme";
import Pokemons from "./Pokemons";

describe("Pokemons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokemons />);
    expect(wrapper).toMatchSnapshot();
  });
});
