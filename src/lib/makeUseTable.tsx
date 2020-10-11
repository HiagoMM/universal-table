import * as React from "react";
import { FieldTypes, TableConfig, RowsData, useTable } from "./interfaces";

export const makeUseTable = ({ fieldTypes }: TableConfig) => {
  //makeUseTable - Configs
  return ({ data, fieldTypes: extraTypes }: useTable) => {
    const [state, setState] = React.useState<RowsData[]>(data);

    const handleChange = (rowI: number, colI: number) => (value: string) => {
      const newState = [...state];
      newState[rowI].elements[colI].value = value;
      setState(newState);
    };

    const table = makeTable(state, handleChange, {
      ...fieldTypes,
      ...extraTypes,
    });

    return { Table: table, utils: { handleChange, state } };
  };
};

const makeTable = (
  data: RowsData[],
  handleChange: (rowI: number, colI: number) => (value: string) => void,
  fieldTypes: FieldTypes
) => {
  console.log(data);
  return (
    <table>
      <tbody>
        {data?.map((row, rowIndex) => {
          const { elements, rowConfig } = row;
          return (
            <tr key={rowIndex} {...rowConfig?.containerProps}>
              {elements.map((colum, columIndex) => {
                const elementCreator = fieldTypes[colum.type];

                const element = elementCreator({
                  handleChange: handleChange(rowIndex, columIndex),
                  value: colum.value,
                });
                console.log(rowIndex, columIndex, colum.value);
                return (
                  <td key={colum.id} {...colum.containerProps}>
                    {element}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
