import { useToken } from "@equinor/mad-components"
import Svg, { SvgProps, Path } from "react-native-svg"
export const MinusSvg = (props: SvgProps) => {
    const token = useToken()
    const color = token.colors.text.primaryInverted;
    return <Svg
    width={20}
    height={4}
    fill="none"
    {...props}
    >
    <Path fill={color} d="M0 0h20v4H0z" />
    </Svg>
}