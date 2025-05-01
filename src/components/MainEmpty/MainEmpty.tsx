"use client";

import { EmptyProps } from "antd";
import { MainEmptyContainer } from "./styles";

export function MainEmpty({ ...restProps }: EmptyProps) {
  return <MainEmptyContainer {...restProps} />;
}
