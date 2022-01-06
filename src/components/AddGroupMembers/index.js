import React from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const options = [
  { value: "one", label: "9893003382" },
  { value: "two", label: "9893003300" },
  { value: "therr", label: "9893003322" },
  { value: "four", label: "9893003082" },
];

class Widget extends React.Component {
  state = {
    selected: [],
  };

  onChange = (selected) => {
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <DualListBox
        options={options}
        selected={selected}
        onChange={this.onChange}
      />
    );
  }
}

export default Widget;
