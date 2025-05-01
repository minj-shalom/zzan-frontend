"use client";

import { setBackgroundColor } from "@/styles";
import { Slider } from "antd";
import styled from "styled-components";

export const MainSliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SliderKey = styled.div`
  width: 55px !important;
  white-space: nowrap;
`;

export const SliderValue = styled.div`
  width: 35px !important;
  white-space: nowrap;
`;

export const StyledSlider = styled(Slider)`
  flex: 1;
  .ant-slider-rail {
    background-color: ${setBackgroundColor("semiWeak")} !important;
  }
`;
