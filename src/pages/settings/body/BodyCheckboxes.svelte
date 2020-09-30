<script>
  import Checkbox from "../../../components/Checkbox.svelte";
  import {local} from "../../../store/localozation";

  function updateNotificationSound(e) {
    enableSoundNotification = e.detail;
  }
</script>


<div class="checkboxes">
    <label class="checkbox">
        <Checkbox isChecked="{true}" on:change="{updateNotificationSound}"/>
        <span class="checkbox__title">{$local.page.settings.body.soundTitle}</span>
    </label>
    <!--            <label class="body__checkbox body-checkbox body-checkbox_disabled">-->
    <!--                <Checkbox isChecked="{true}" on:change="{colorTileValue}"/>-->
    <!--                <span class="body-checkbox__title">{lang.page.settings.body.colorTitle}</span>-->
    <!--            </label>-->
</div>


<style lang="scss">
    .checkboxes {
        margin-bottom: 30px;
    }
    .checkbox {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    .checkbox__title {
        margin-left: 25px;
    }
</style>
