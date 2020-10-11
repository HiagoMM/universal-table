export interface FieldConfig {
  value: string;
  handleChange(value: string): void;
  containerStyle?: React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
}

export interface FieldTypes {
  [key: string]: (fieldConfig: FieldConfig) => JSX.Element;
}
export interface TableConfig {
  fieldTypes?: FieldTypes;
}

export interface useTable extends TableConfig {
  data: RowsData[];
}

export interface RowsData {
  rowConfig?: {
    containerProps?: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableRowElement>,
      HTMLTableRowElement
    >;
  };
  elements: Element[];
}

export interface Element {
  id: any;
  value: string;
  type: keyof FieldTypes;
  containerProps?: React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
}
