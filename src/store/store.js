import {writable} from "svelte/store";
import {colors} from "../constant";


function createPrimaryColor(color) {
  const {subscribe, set} = writable(color);
  return {subscribe, set}
}

function toggleSettingPage(state) {
  const {subscribe, set, update} = writable(state);
  return {
    subscribe,
    set,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update(val => !val)
  }
}

export const enableSoundNotification = true

export const primaryColor = createPrimaryColor(colors[0]);
export const settingPage = toggleSettingPage(false);
