"use client";

import { EditOutlined } from "@ant-design/icons";
import { PreviewTextBarContainer } from "./styles";

type PreviewTextBarProps = {
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PreviewTextBar({
  value,
  placeholder,
  handleChange,
}: PreviewTextBarProps) {
  return (
    <PreviewTextBarContainer
      value={value}
      placeholder={placeholder}
      suffix={<EditOutlined />}
      allowClear
      onChange={handleChange}
    />
  );
}
