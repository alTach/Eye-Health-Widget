import {writable} from "svelte/store";

export const pages = {
  home: 'home',
  settings: 'settings',
  scene: 'scene',
}

function createRouterStore() {

  const data = {
    path: pages.home,
    prev: '',
  }
  const {subscribe, update} = writable(data);

  return {
    subscribe,
    navigate: (path) => {
      update(route => {
        route.prev = route.path;
        route.path = path;
        return route;
      })
    },
    back: () => {
      update(router => {
        // swap object property;
        [router.path, router.prev] = [router.prev, router.path];
        return router
      })
    }
  }
}

export const router = createRouterStore()
