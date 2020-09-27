<script>
    import {timer} from "../../store/store-timer";
</script>

<div class="timer">
    <button class="timer__decrement timer__action" on:click={timer.decrement}></button>
    <input class="timer__time" type="number" min="0" max="999" bind:value={$timer.native.minutes}>
    <button class="timer__increment timer__action" on:click={timer.increment}></button>
</div>

<style lang="scss">
    @import "../../styles/variable";

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    .timer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 34px;
        background: var(--gray);
        border-radius: 5px;
    }

    .timer__time {
        width: 42px;
        text-align: center;
        padding: 0;
        margin: 0;
        border: none;
        background: inherit;
        color: inherit;
    }

    .timer__action {
        width: 16px;
        height: 16px;
        background-position: center;
        background-size: 65%;
        background-repeat: no-repeat;
    }

    .timer__decrement {
        margin-right: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -192 426.66667 426'%3E%3Cg%3E%3Cpath d='m405.332031 43h-384c-11.773437 0-21.332031-9.558594-21.332031-21.332031 0-11.777344 9.558594-21.335938 21.332031-21.335938h384c11.777344 0 21.335938 9.558594 21.335938 21.335938 0 11.773437-9.558594 21.332031-21.335938 21.332031zm0 0' fill='%23555D73'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }

    .timer__increment {
        margin-left: 2px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 426.7 426.7'%3E%3Cpath d='M405 192H235V21a21 21 0 00-43 0v171H21a21 21 0 000 43h171v170a21 21 0 0043 0V235h170a21 21 0 000-43zm0 0' fill='%23555D73'%3E%3C/path%3E%3C/svg%3E");
    }

</style>
