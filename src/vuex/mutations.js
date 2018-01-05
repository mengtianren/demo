
export default {
  redux(state,num){
    console.log(state)
    state.number+=num;
   console.log('这是等number++之后才会执行')
  },
  setSection(state,local){
    state.user_session= local;
  },
  setTitle(state,title){
      console.log(title)
    state.title = title;
  }
}
