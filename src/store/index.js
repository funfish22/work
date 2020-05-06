import Vue from 'vue';
import Vuex from 'vuex';
import a from './a';
import select from './select';

Vue.use(Vuex);

export default new Vuex.Store({
    // 資料存放區
    state: {
        root: '跟',
    },
    // vuex 裡的 computed
    getters: {
        /**
         *
         * @param {*} state   此 store 的 state 數據
         * @param {*} getters 此 getters 的 getter 數據
         */
        hello(state, getters) {
            return state.root + '哈囉' + getters.cat;
        },
        cat() {
            return '貓';
        },
    },
    // vuex 裡操作同步的方法，注意該方法沒有回傳值
    mutations: {
        /**
         *
         * @param {*} state    此 store 的 state 數據
         * @param {*} paramter 傳遞進來的資料，只能傳一個參
         */
        say(state, paramter) {
            console.log('我說話');
        },
    },
    // vuex 裡操作異步的方法，注意該方法只回傳 Promise
    actions: {
        delaySay2(state) {
            return new Promise((reslove, reject) => {
                setTimeout(() => {
                    console.log('我說話2.');
                    /**
                     * this 回傳 vuex 給你，可以像使用 this.$store 那樣的方式去調用 vuex 裡的方法
                     */
                    console.log(state, this);
                    reslove();
                }, 1000);
            });
        },
    },
    modules: {
        // key 名稱為 store 的 namespaced 的位置
        a,
        select,
    },
});
