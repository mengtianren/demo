
export default {
  setTitle(state,title){
    state.title = title;
  },
  ShowTab(state){
    state.TabShow = !state.TabShow;
    console.log(state.TabShow)
  }
}
