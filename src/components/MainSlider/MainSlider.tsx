"use client";

import {
  MainSliderContainer,
  SliderKey,
  SliderValue,
  StyledSlider,
} from "./styles";

type MainSliderProps = {
  min: number;
  max: number;
  value?: number;
  sliderKey?: string;
  sliderValue?: string;
  handleChange: (value: number) => void;
};

export function MainSlider({
  min,
  max,
  value,
  sliderKey,
  sliderValue,
  handleChange,
}: MainSliderProps) {
  return (
    <MainSliderContainer>
      {sliderKey && <SliderKey>{sliderKey}</SliderKey>}
      <StyledSlider value={value} min={min} max={max} onChange={handleChange} />
      {sliderValue && <SliderValue>{sliderValue}</SliderValue>}
    </MainSliderContainer>
  );
}
