"use client";

import { Spin } from "antd";
import { SpinnerContainer } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

export function Spinner() {
  return (
    <SpinnerContainer>
      <Spin size="large" indicator={<LoadingOutlined />} />
    </SpinnerContainer>
  );
}
