import React from "react";
import { RichText } from "prismic-reactjs";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Switch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
<script
  async
  defer
  src="https://static.cdn.prismic.io/prismic.js?new=true&repo=aztest"
></script>;

const CallToAction = ({ slice }) => (
  <section style={{ padding: "20px" }}>
    <Flex>
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
    </Flex>
    <RichText render={slice.primary.title} />
    <RichText render={slice.primary.body} />
    <RichText field={slice.primary.buttonText} />
    <img
      src={slice.primary.backgroundImage.url}
      alt={slice.primary.backgroundImage.alt}
    />
  </section>
);

export default CallToAction;
