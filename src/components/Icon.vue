<template>
    <div class="c-content">
        <header class="c-heading">
            <h1 class="c-heading__main">css-design</h1>
            <h2 class="c-heading__sub">this is design</h2>
        </header>
        <div class="c-designItems">
            <div class="c-item">
                <div class="icon">
                </div>
            </div>
            <div class="c-item">
                <div class="c-drawer">
                    <input id="c-drawer__input" type="checkbox" class="c-drawer__unshown">
                    <label id="c-drawer__open" for="c-drawer__input"><span></span></label>
                    <label id="c-drawer__close" class="c-drawer__unshown" for="c-drawer__input"></label>
                    <div id="c-drawer__inner">
                        hello, world
                    </div>
                </div>
            </div>
            <div class="c-item">
                <input id="acd-check1" class="acd-check" type="checkbox">
                <label class="acd-label" for="acd-check1">クリックで開く1</label>
                <div class="acd-content">
                    <p>hello.world!</p>
                </div>
                <input id="acd-check2" class="acd-check" type="checkbox">
                <label class="acd-label" for="acd-check2">クリックで開く2</label>
                <div class="acd-content">
                    <p>hello.world2!</p>
                </div>
                <input id="acd-check3" class="acd-check" type="checkbox">
                <label class="acd-label" for="acd-check3">クリックで開く3</label>
                <div class="acd-content">
                    <p>hello.world3!</p>
                </div>
                <input id="acd-check4" class="acd-check" type="checkbox">
                <label class="acd-label" for="acd-check4">クリックで開く4</label>
                <div class="acd-content">
                    <p>hello.world4!</p>
                </div>
            </div>
            <div class="c-item">
                <button type="submit" @click="openModal">open</button>
                <div class="c-modal" v-if="modal">
                    <div class="c-modal-overlay">
                        <div class="c-modal-dialog">
                            <div class="c-modal-header">
                                <div class="c-modal-title">
                                    <h1>ホゲホゲ</h1>
                                </div>
                                <span class="c-close-modal" @click="closeModal">x</span>
                            </div>
                            <div class="c-modal-body">
                                <div class="c-modal-main">
                                    <div>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</div>
                                </div>
                                <div class="c-modal-footer">
                                    <div class="c-modal-buttons">
                                        <button type="submit" @click="modalAlert">
                                            決定
                                        </button>
                                        <button type="submit" @click="closeModal">
                                            キャンセル
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="backdrop"></div>
                </div>
            </div>
            <div class="c-item">
                <div class="c-toggleSwitch">
                    <input id="toggle" type="checkbox" class="c-toggleSwitch__input">
                    <label for="toggle" class="c-toggleSwitch__label"></label>
                </div>
            </div>
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
            <div class="c-item">
                <a href="#" class="btn-square-shadow">
                    BUTTON
                </a>
            </div>
            <div class="c-item">
                <ul class="menu">
                    <li class="menu__single">
                        <a href="#" class="init-bottom">menu</a>
                        <ul class="menu__second-level">
                            <li><a href="#">child</a></li>
                            <li><a href="#">child</a></li>
                            <li><a href="#">child</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Icon",
        data() {
            return {
                modal: false
            }
        },
        methods: {
            openModal() {
                this.modal = true
            },
            closeModal() {
                this.modal = false
            },
            modalAlert() {
                alert("thank you")
                this.modal = false
            }
        }
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

    /*ハンバーガーメニュー*/
    .c-drawer__unshown {
        display: none;
    }
    #c-drawer__open {
        display: inline-block;
        width: 30px;
        height: 22px;
        vertical-align: middle;
    }

    /* ハンバーガーアイコン*/
    #c-drawer__open span, #c-drawer__open span::before, #c-drawer__open span::after {
        position: absolute;
        height: 3px;
        width: 25px;
        border-radius: 3px;
        background: #555;
        display: inline-block;
        content: '';
        cursor: pointer;
    }
    #c-drawer__open span::before {
        bottom: -8px;
    }
    #c-drawer__open span::after {
        bottom: -16px;
    }
    #c-drawer__close {
        display: none;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #555555;
        opacity: 0;
        transition: .3s ease-in-out;
    }
    #c-drawer__inner {
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 90%;
        max-width: 330px;
        height: 100%;
        background: #fff;
        transition: .3s ease-in-out;
        transform: translateX(-105%);
    }
    #c-drawer__input:checked ~ #c-drawer__close {
        display: block;
        opacity: .5;
    }
    #c-drawer__input:checked ~ #c-drawer__inner {
        transform: translateX(0%);
        box-shadow: 6px 0 25px rgba(0, 0, 0, .15);
    }

    /* アコーディオン */
    .acd-check{
        display: none;
    }
    .acd-label{
        background: #555555;
        color: #fff;
        display: block;
        margin-bottom: .1rem;
        padding: 1rem;
    }
    .acd-content{
        border: 1px solid #333;
        display: block;
        height: 0;
        opacity: 0;
        padding: 0 1rem;
        transition: .5s;
    }
    .acd-check:checked + .acd-label + .acd-content{
        height: 1.5rem;
        opacity: 1;
        padding: 1rem;
    }

    /* モーダル */
    #modal {
        display: none;
    }
    .c-modal-overlay {
        overflow: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
    }
    .c-modal-dialog {
        position: relative;
        background: #fff;
        width: 98%;
        max-width: 80rem;
        max-height: 50rem;
        margin: 10rem auto auto auto;
        padding: 1.5rem 1rem;
        overflow: initial;
        border-radius: 8px;
        z-index: 1000;
    }
    .c-modal-header {
        padding: 0 0 2rem;
        border-bottom: none;
    }
    .c-close-modal {
        position: absolute;
        top: 1.5rem;
        right: 1rem;
        cursor: pointer;
    }
    .c-modal-title {
        font-size: 2.8rem;
    }
    .c-modal-body {
        overflow-y: auto;
        padding: 0;
        margin: 0 auto;
        width: 80%;
    }
    .c-modal-main {
        margin-bottom: 1rem;
    }
    .c-modal-buttons {
        text-align: center;

    }
    .c-modal-footer {
        border-top: none;
        padding: 0;
    }
    #backdrop {
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1001;
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

    /*影付きボタン*/

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

    .menu {
        display: flex;
        position: relative;
        height: 5rem;
        width: 200px;
        margin: auto;
    }
    ul.menu,
    ul.menu__second-level{
        list-style: none;
    }
    ul.menu__second-level {
        visibility: hidden;
        opacity: 0;
        z-index: 1;
    }
    .menu__single,
    .menu__second-level > li {
        padding: 0;
    }
    .menu > li {
        height: 5rem;
        line-height: 5rem;
        background: rgba(85, 85, 85, 1)
    }
    .menu > list:hover {
        background: #555555;
        opacity: .7;
        transition: all .5s;
    }
    .menu > li a {
        font-size: 1.6rem;
        text-decoration: none;
        display: block;
        color: #fff;
    }
    .menu > li a:hover {
        display: block;
        color: #fff;
    }
    .menu__second-level li {
        border-top: 1px solid #555555;
    }
    .menu__second-level li a:hover {
        background: #555555;
    }
    .init-bottom:after {
        content: '';
        display: inline-block;
        width: .6rem;
        height: .6rem;
        margin: 0 0 0 1.5rem;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(45deg)
    }
    .menu > li.menu__single {
        position: relative;
    }
    li.menu__single ul.menu__second-level {
        position: absolute;
        top: 40px;
        width: 100%;
        background: #555555;
        transition: all .2s ease;
    }
    li.menu__single:hover ul.menu__second-level {
        top: 50px;
        visibility: visible;
        opacity: 1;
    }
</style>