import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const MinusSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={4}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M0 0h20v4H0z" />
  </Svg>
)