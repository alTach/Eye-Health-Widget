<script>
  export let element;

  let activeElementStyle;

  $: {
    if (element) {
      selectActiveElement(element)
    }
  }

  const selectActiveElement = (el) => {
    activeElementStyle = `
    width: ${el.offsetWidth}px;
    height: ${el.offsetHeight}px;
    left: ${el.offsetLeft}px;
    `
  };

</script>


<div class="lang-border" style="{activeElementStyle}"></div>


<style lang="scss">
    @import "body-languages";
    .lang-border {
        border: $land-btn-border-width solid var(--primary);
        border-radius: $land-btn-border-radius;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        transition: left .3s ease, width .5s ease;
    }
</style>
