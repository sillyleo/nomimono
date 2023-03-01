import { Text, Box, BrandButton, Display, Checkbox } from "nomimono";

export default function Demo() {
  return (
    <Display>
      <BrandButton>Brand</BrandButton>
      <BrandButton
        size={{
          "@initial": "xs",
          "@sm": "s",
          "@md": "s",
          "@lg": "m",
          "@xl": "l",
          "@2xl": "l",
        }}
      >
        Responsive Brand Brand
      </BrandButton>

      <Checkbox defaultChecked>Checkbox defaultChecked</Checkbox>
      <Checkbox defaultChecked tone="sky">
        Checkbox defaultChecked
      </Checkbox>
      <Checkbox checked={true} tone="lime">
        Checkbox checked=true
      </Checkbox>
      <Checkbox tone="tomato"> normal Checkbox</Checkbox>
      <Checkbox> Checkbox</Checkbox>
    </Display>
  );
}
