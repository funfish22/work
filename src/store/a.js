export default {
    namespaced: true,
    // modules: {}
    state: {
        user: 'frank',
    },
    getters: {
        fullName() {
            return 'frank wu';
        },
    },
    mutations: {
        say() {
            console.log('a say');
        },
    },
    actions: {
        delaySay2(state) {
            return new Promise((reslove, reject) => {
                setTimeout(() => {
                    console.log('a說話2.');
                    /**
                     * this 回傳 vuex 給你，可以像使用 this.$store 那樣的方式去調用 vuex 裡的方法
                     */
                    reslove();
                }, 1000);
            });
        },
    },
};
