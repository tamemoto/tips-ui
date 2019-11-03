<template>
    <div class="c-content">
        <div class="c-designItems">
            <div class="c-item">
                <div class="icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Icon",
    }
</script>

<style scoped>
    .icon {
        position: relative;
        /* 1em = 10pxにする */
        font-size: 1rem;
        width: 3.4em;
        height: 3.4em;
        background: #555555;
        border-radius: 50%;
        display: inline-block;
    }

    .icon::before, .icon::after {
        position: absolute;
        content: '';
        /* 左上の角を真ん中に持ってきて、 */
        top: 50%;
        left: 50%;
        /* 50%ずつ左、上に戻す */
        transform: translate(-50%, -50%);
        background: #fff;
    }
    .icon::before {
        height: .1em;
        width: 1.7em;
    }
    .icon::after {
        height: 1.7em;
        width: .1em;
    }
</style>