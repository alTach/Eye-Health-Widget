<script>
  import Eye from "./Eye.svelte";

</script>

<div class="face">
    <div class="face__eyes">
        <Eye />
        <Eye />
    </div>
    <div class="face__moon" style="transform: rotate(360deg)"></div>
</div>


<style lang="scss">
    @import "../../../styles/variable";
    $face-w: 150px;
    .face {
        width: $face-w;
        height: $face-w;
        background-color: var(--primary);
        border-radius: 50%;
        position: relative;
        &__eyes {
            display: flex;
            justify-content: space-between;
            width: 75%;
            margin: 0 auto;
            position: relative;
            top: 34px;
        }
        &__moon {
            width: 10px;
            height: 10px;
            background: red;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: 10px;
            transform-origin: 65px 65px;
            /*animation: moving .4s infinite linear*/

        }
    }
    @keyframes moving {
        100% {transform: rotate(-360deg);}
    }


</style>
