<template>
    <div class="c-content">
        <div class="c-designItems">
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
        name: "Menu"
    }
</script>

<style scoped>
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
    /*ホバーメニュー*/
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