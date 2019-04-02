import http from 'utils/HttpUtils'
import DateUtils from 'utils/DateUtils'

const mutations = {
  showLeftMenu (state, status) {
    state.showLeftMenu = status
  },
  showLoading  (state, status) {
    state.showLoading = status
  },
  addRemind (state, obj) {
    if (state.remind[obj.key] == null) {
      state.remind[obj.key] = []
    }
    state.remind[obj.key].push(obj.id)
  },
  removeRemind (state, key) {
    state.remind[key] = null
  },
  queryBacklogData (state, callback) {
  },
  showBtnList(state,obj){
    state.currentBtnSaveBox= obj
  },
  menuState(state){
    state.menuState = !state.menuState;
  }
}

export default mutations
