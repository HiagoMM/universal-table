import React from "react";
import { makeUseTable } from "./lib/makeUseTable";

function App() {
  const useTable = makeUseTable({
    fieldTypes: {
      text: ({ value }) => <h1>{value}</h1>,
      input: ({ value, handleChange }) => (
        <input onChange={(ev) => handleChange(ev.target.value)} value={value} />
      ),
    },
  });

  const { Table } = useTable({
    data: [
      {
        elements: [
          { id: 2, type: "input", value: "1" },
          {
            id: 1,
            type: "text",
            value: "0",
            containerProps: { style: { color: "blue" } },
          },
          { id: 3, type: "input", value: "0" },
          { id: 4, type: "input", value: "0" },
        ],
        rowConfig: { containerProps: { style: { background: "red" } } },
      },
      {
        elements: [
          { id: 1, type: "text", value: "0" },
          { id: 2, type: "input", value: "0" },
          { id: 3, type: "input", value: "0" },
          { id: 4, type: "input", value: "0" },
        ],
      },
    ],
  });

  return Table;
}

export default App;
