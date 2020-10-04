import {tweened} from "svelte/motion";
import {trainTimeSec} from "../constant";
import {get} from "svelte/store";

function getMoonStore() {

  const  {subscribe, set, update} = tweened(faceMoonRotateStart, { duration: trainTimeSec })

  function getPosition(){
    return get({subscribe})
  }
  function play(){
    const getTimeToEnd = (position) => {
      const pathToEnd = faceMoonRotateEnd - position;
      const remainingTime = () => (pathToEnd * trainTimeSec) / faceMoonRotateEnd
      const isPositionStart = _ => position === faceMoonRotateStart
      return isPositionStart ? trainTimeSec : remainingTime();
    }
    set(faceMoonRotateEnd, {duration: getTimeToEnd(getPosition())});
  }
  function pause(){
    set(getPosition());
  }
  function restart(autoPlay = true){
    set(faceMoonRotateStart, {duration: 0});
    if (autoPlay) {
      set(faceMoonRotateEnd, {duration: trainTimeSec});
    }
  }

  return {
    subscribe,
    set,
    update,
    restart,
    pause,
    play,
  }
}
export const faceMoonRotateStart = 45;
export const faceMoonRotateEnd = 405;
export const faceMoonRotate = getMoonStore();
