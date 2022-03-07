import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import DisplayTable from "../DisplayTable";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("Display Table", () => {
  it("renders the DisplayTable", () => {
    const props = {
      data: [
        {
          Player: "Joe Banyard",
          Team: "JAX",
          Pos: "RB",
          Att: 2,
          "Att/G": 2,
          Yds: 7,
          Avg: 3.5,
          "Yds/G": 7,
          TD: 0,
          Lng: "7",
          "1st": 0,
          "1st%": 0,
          "20+": 0,
          "40+": 0,
          FUM: 0
        }
      ]
    };
    const wrapper = shallow(<DisplayTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
