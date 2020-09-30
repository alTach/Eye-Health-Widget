import * as en from '../i18n/en.json'
import * as ru from '../i18n/ru.json'
import {derived, readable, writable} from "svelte/store";

const localList = [
  {code: 'en', title: 'English', val: en},
  {code: 'ru', title: 'Русский', val: ru}
];


export const languages = readable(localList);
export const activeLanguage = writable(localList[0]);
activeLanguage.subscribe(data => console.log(data, 123));
export const local = derived(activeLanguage, (activeLang) => activeLang.val);
