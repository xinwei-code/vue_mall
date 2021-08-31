const actions = {
    addcart(context, payLoad) {

        //1.查看是否添加过
        const oldInfo = context.state.cartList.find(item => {
           return item.id === payLoad.id
        })
        //2. +1或者新添加
        if (oldInfo) {
            context.commit('ADDCOUNTER', oldInfo)
        } else {
            payLoad.count = 1
            payLoad.checked = true
            context.commit('ADDCART', payLoad)
        }
    }


}

export default actions