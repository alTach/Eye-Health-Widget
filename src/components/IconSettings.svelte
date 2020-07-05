<script>
    import {createEventDispatcher} from "svelte";
    const dispatcher = createEventDispatcher();

    function onClick() {
        dispatcher('click')
    }
</script>

<button on:click={onClick}>
    <span></span>
    <span class="second"></span>
    <span></span>
</button>

<style lang="scss">
    @import '../styles/variable.scss';

    button {
        $py: 5px;
        $px: 10px;
        padding: $py $px;
        margin-top: -$py;
        margin-left: -$px;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span:not(:last-child) {
        margin-bottom: 2px;
    }
    span:before, span:after {
        content: '';
        display: block;
    }
    span:before {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        border: 2px solid var(--black);
        margin-right: 3px;
    }
    span:after {
        width: 8px;
        border-radius: 10px;
        border-top: 2px solid var(--black);
    }
    .second {
        transform: rotate(180deg);
    }

</style>
