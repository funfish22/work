export default {
    namespaced: true,
    state: {
        allName: [
            {
                id: '01',
                name: '阿嘎',
            },
            {
                id: '02',
                name: 'frank',
            },
            {
                id: '03',
                name: 'bob',
            },
            {
                id: '04',
                name: 'evanna',
            },
            {
                id: '05',
                name: 'a-pon',
            },
            {
                id: '06',
                name: '小明',
            },
            {
                id: '07',
                name: '小華',
            },
            {
                id: '08',
                name: '志明',
            },
            {
                id: '09',
                name: '春嬌',
            },
            {
                id: '10',
                name: '小美',
            },
        ],
        selectName: '',
    },
    getters: {
        searchAllName: (state) => {
            if (state.selectName === '') {
                return state.allName;
            } else {
                return state.allName.filter((row) => row.name.indexOf(state.selectName) !== -1);
            }
        },
    },
    mutations: {
        // openSelect(state, payload) {
        //     state.isSelect = payload.isSelect;
        // },
        // handleTarget(state, payload) {
        //     if (payload) {
        //         state.allName.forEach((row) => {
        //             if (row.id === payload.id) {
        //                 row.select = !row.select;
        //             }
        //         });
        //     }
        //     state.selectAllName = [];
        //     state.allName.forEach((row) => {
        //         if (row.select === true) {
        //             state.selectAllName.push(row.name);
        //         }
        //     });
        //     state.newSelectAllName = '';
        //     state.selectAllName.forEach((row) => {
        //         state.newSelectAllName += row + ',';
        //     });
        //     state.newSelectAllName = state.newSelectAllName.slice(0, state.newSelectAllName.length - 1);
        // },
        // handleSelect(state, payload) {
        //     state.selectName = payload.searchName;
        // },
        // handleDeleteAll(state) {
        //     state.newSelectAllName = '';
        //     state.selectAllName = [];
        //     state.allName.forEach((row) => {
        //         row.select = false;
        //     });
        // },
    },
    actions: {},
};
