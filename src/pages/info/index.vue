<template>
    <div>
        <div class="c-designItems">
            <div class="c-item">
                <ol class="c-stepBar">
                    <li class="visited">
                        <span>1<br>入力</span>
                    </li>
                    <li>
                        <span>2<br>確認</span>
                    </li>
                    <li>
                        <span>3<br>完了</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style scoped>
    /* ステップバー */
    .c-stepBar {
        display: flex;
        max-width: 400px;
        width: 100%;
        position: relative;
        text-align: center;
    }
    .c-stepBar li {
        font-size: 12px;
        list-style: none;
        position: relative;
        width: 33.333%
    }
    .c-stepBar li::after {
        background: #D0E1F9;
        content: "";
        width: calc(100% - 24px);
        height: 4px;
        position: absolute;
        left: calc(-50% + 12px);
        top: 10px;
    }
    .c-stepBar li:first-child::after {
        display: none;
    }
    .c-stepBar li span {
        background: #D0E1F9;
        color: #ffffff;
        display: inline-block;
        height: 24px;
        width: 24px;
        margin-bottom: 5px;
        line-height: 24px;
        border-radius: 50%;
    }
    .c-stepBar li.visited::after {
        background: #4D648D;
    }
    .c-stepBar .visited span {
        background: #4D648D;
    }

</style>