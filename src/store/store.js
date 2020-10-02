import {writable} from "svelte/store";
import {colors} from "../constant";


function createPrimaryColor(color) {
  const {subscribe, set} = writable(color);
  return {subscribe, set}
}

export const enableSoundNotification = true

export const primaryColor = createPrimaryColor(colors[0]);
