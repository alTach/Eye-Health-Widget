import {derived, writable} from "svelte/store";
import {activeLanguage, local} from "./localozation";

function getSceneStore(scenes) {
  let timerId;
  const data = {
    _position: 0,
    set position(index) {
      this._position = index;
      this.activeScenes = this.scenes[index];
    },
    get position() {
      return this._position;
    },
    _scenes: scenes,
    set scenes(sceneList) {
      this._scenes = sceneList;
      this.activeScenes = sceneList[this.position]
    },
    get scenes() {
      return this._scenes;
    },
    activeScenes: scenes[0],
  };


  const {subscribe, set, update} = writable(data);

  function startTimer() {
    stopTimer();
    timerId = setInterval(() =>
      update(scene => (stopTimer(), scene))
    , 1000);
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
    }
  }

  function restartScene() {
    update(scene => {
      scene.position = 0;
      return scene;
    });
    startTimer();
  }

  function nextScene(index) {
    update(scene => {
      scene.position = index ?? scene.position + 1;
      return scene;
    })
  }

  function updateScenesText(sceneList) {
    update(scene => {
      scene.scenes = sceneList;
      return scene;
    })
  }

  return {
    subscribe,
    set,
    start: () => startTimer(),
    restart: () => restartScene(),
    pause: () => stopTimer(),
    skip: () => {},
    next: (index) => nextScene(index),
    updateScenesText: (sceneList) => updateScenesText(sceneList)
  };
}
export let sceneStore = getSceneStore([]);
export const sceneStoreChangeLang = derived(local, lang => {
  const sceneList = Object.values(lang.page.scenes.eyes);
  sceneStore.updateScenesText(sceneList);
});
sceneStoreChangeLang.subscribe(() => {});

