<script>

</script>

<div class="eye">
    <div class="shut"></div>
    <div class="ball"></div>
</div>


<style lang="scss">
    $eye-w: 40px;
    .eye {
        width: $eye-w;
        height: $eye-w;
        background: white;
        transform: rotate(45deg);
        border-radius: 75% 0;
        overflow: hidden;
    }
    .ball {
        width: 15%;
        height: 15%;
        background: #222f3e;
        border-radius: 50%;
        border: 6px solid #576574;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .shut {
        width: 150%;
        height: 33px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 2;

        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 15%;
            background: #ff6b6b;
            border-radius: 0 0 60% 60%;
            transition: .4s height ease;
        }
    }

    .eye:hover > .shut:before {
        height: 100%
    }
</style>
