<template>
    <div>
        <div class="c-designItems">
            <div class="c-item">
                <button type="submit" @click="openModal">
                    open
                </button>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
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
    /* モーダル */
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
    .backdrop {
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1001;
    }
</style>