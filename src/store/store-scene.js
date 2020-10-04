import {derived, writable} from "svelte/store";
import {activeLanguage, local} from "./localozation";
import {faceMoonRotate} from "./sore-moon";

function getSceneStore(scenes) {
  const data = {
    _position: 0,
    get position() {
      return this._position;
    },
    _list: scenes,
    get list() {
      return this._list;
    },
    _active: scenes[0],
    get active() {
      return this._active;
    }
  };


  const {subscribe, set, update} = writable(data);

  function next(index) {
    update(scene => {
      scene._position = index ?? scene.position + 1;
      scene._active = scene.list[scene.position];
      faceMoonRotate.restart();
      return scene;
    })
  }

  function reset(autoPlay = true) {
    update(scene => {
      scene._position = 0;
      scene._active = scene._list[scene.position];
      faceMoonRotate.restart(autoPlay)
      return scene;
    })
  }

  function changeSceneTextLang(sceneList) {
    update(scene => {
      scene._list = sceneList;
      scene._active = sceneList[scene.position]
      return scene;
    })
  }


  return {
    subscribe,
    set,
    next,
    play: () => faceMoonRotate.play(),
    stop: () => faceMoonRotate.pause(),
    reset,
    changeSceneTextLang
  };
}
export let sceneStore = getSceneStore([]);
export const sceneStoreChangeLang = derived(local, lang => {
  const sceneList = Object.values(lang.page.scenes.eyes);
  sceneStore.changeSceneTextLang(sceneList);
});
sceneStoreChangeLang.subscribe(() => {});

