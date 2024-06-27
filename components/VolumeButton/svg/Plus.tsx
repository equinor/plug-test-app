import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const PlusSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M0 8h20v4H0z" />
    <Path fill="#fff" d="M8 20V0h4v20z" />
  </Svg>
)