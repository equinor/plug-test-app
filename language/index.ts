import * as no from "./no.json"
/** This is not technically a hook yet. However, when adding language support, it will be a hook.
 * Use it as a hook please
 */
export const useDictionary = () => {
    return no;
}

/**
 * Only use this in places where hooks cannot be used or where hooks does not make sense to use
 */
export const getDictionary = () => {
    return no
}

export type DictionaryKey = keyof typeof no;