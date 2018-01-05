
export default {
  add(context){
    context.state.number++;
    console.log(context)
    context.commit('redux',11)
  }
}
