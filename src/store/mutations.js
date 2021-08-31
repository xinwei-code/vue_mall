const mutations = {
    ADDCOUNTER(state, value) {
        value.count ++
    },
    ADDCART(state, value) {
        state.cartList.push(value)
    }
}

//mutations唯一的目的就是修改state中的状态(可跟踪)
//mutations中的每个方法尽可能完成的事件比较单一一点


export default mutations