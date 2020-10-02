import {readable, writable} from "svelte/store";

const colorList = [
  {
    name: 'blue',
    className: 'color_blue'
  },
  {
    name: 'blue-light',
    className: 'color_blue-light'
  },
  {
    name: 'purple',
    className: 'color_purple'
  },
  {
    name: 'pink',
    className: 'color_pink'
  },
  {
    name: 'red',
    className: 'color_red'
  },
  {
    name: 'light-ping',
    className: 'color_light-pink'
  },
];

function createPrimaryColor(color) {
  const {subscribe, set} = writable(color);
  return {subscribe, set}
}

export const colors = readable(colorList);
export const primaryColor = createPrimaryColor(colorList[0]);
