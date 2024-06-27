import { useToken } from "@equinor/mad-components";
import Svg, { SvgProps, Path } from "react-native-svg"
export const PlusSvg = (props: SvgProps) => {
    const token = useToken()
    const color = token.colors.text.primaryInverted;
    return (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path fill={color} d="M0 8h20v4H0z" />
    <Path fill={color} d="M8 20V0h4v20z" />
  </Svg>
)}