import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils"

export const searchResultAtom = atom(null);

export const cartItemsAtom = atom(null);

export const isAuthenticatedAtom = atom(false);

export const sessionIdAtom = atomWithStorage('sessionId', null);