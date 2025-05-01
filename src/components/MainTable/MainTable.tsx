"use client";

import { Table, TableProps } from "antd";
import { MainTableCss } from "./styles";

export function MainTable<T extends object>({ ...restProps }: TableProps<T>) {
  return (
    <Table<T> style={MainTableCss} scroll={{ x: "100%" }} {...restProps} />
  );
}
