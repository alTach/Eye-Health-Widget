<script>
    import {createEventDispatcher} from "svelte";
    let dispatch = createEventDispatcher();
    export let isChecked
    let checkboxAvatar;
    let checkbox;
    function checkboxChange() {
        dispatch('change', checkbox.checked)
    }
</script>


<div class="check">
    <input type="checkbox" bind:this={checkbox} checked="{isChecked}" on:change={checkboxChange}>
    <div class="check__box" bind:this={checkboxAvatar}></div>
</div>


<style lang="scss">
    @import "../styles/variable/index";
    .check {
        cursor: pointer;
    }
    input {
        opacity: 0;
        position: absolute;

        &:checked + .check__box {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M506 76c-7-8-20-8-28 0L159 395 34 269a20 20 0 10-28 28l139 139c8 8 20 8 28 0l333-333c8-7 8-20 0-27z' fill='%23fff'%3E%3C/path%3E%3C/svg%3E");
        }
        &:focus + .check__box {
            outline: auto 2px blue;
        }
    }
    .check__box {
        width: 29.87px;
        height: 29.87px;
        background-color: var(--black);
        border-radius: 8px;
        background-size: 55%;
        background-position: center;
        background-repeat: no-repeat;
        pointer-events: none;
    }

</style>
