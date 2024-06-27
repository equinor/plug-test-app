import { MinusSvg } from "./svg/Minus"
import { PlusSvg } from "./svg/Plus"
import { Variant } from "./types"

export type VolumeSymbolProps = {variant: Variant}
export const VolumeSymbol = ({variant}: VolumeSymbolProps) => variant === "+" ? <PlusSvg/> : <MinusSvg/>