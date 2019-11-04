<template>
    <div>
        <div class="c-designItems">
            <div class="c-item">
                <a href="#" class="btn-square-shadow">
                    BUTTON
                </a>
            </div>
            <div class="c-item">
                <div class="c-toggleSwitch">
                    <input id="toggle" type="checkbox" class="c-toggleSwitch__input">
                    <label for="toggle" class="c-toggleSwitch__label"></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixins.scss";
    /*影付きボタン*/
    .c-designItems {
        @include content()
    }
    .c-item {
        @include item()
    }
    .btn-square-shadow {
        display: inline-block;
        padding: .5rem 1rem;
        text-decoration: none;
        background: #668ad8;
        color: #fff;
        border-bottom: solid 4px #627295;
        border-radius: 3px;
    }
    .btn-square-shadow:active {
        transform: translateY(4px);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        border-bottom: none;
    }

    /* toggle-switch */
    .c-toggleSwitch__input {
        display: none;
    }
    .c-toggleSwitch__label {
        width: 75px;
        height: 42px;
        background: #ccc;
        position: relative;
        display: inline-block;
        border-radius: 46px;
        transition: .4s;
        box-sizing: border-box;
    }
    .c-toggleSwitch__label::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #fff;
        transition: .4s
    }
    .c-toggleSwitch__input:checked ~ .c-toggleSwitch__label {
        background: #4BD865;
    }
    .c-toggleSwitch__input:checked ~ .c-toggleSwitch__label::after {
        left: 40px;
    }


</style>