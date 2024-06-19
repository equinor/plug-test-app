import {EDSProvider} from '@equinor/mad-components'
import { ComponentProps } from 'react';

type Density = ComponentProps<(typeof EDSProvider)>["density"]

export const getEDSDensity = (): Density => {
    //TODO calculate which density to use
    return "phone";
}