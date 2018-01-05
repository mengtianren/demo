// // Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
// const mongoose = require('mongoose');
// // 连接数据库 如果不自己创建 默认test数据库会自动生成
// mongoose.connect('mongodb://localhost:27017/admin');
//
// // 为这次连接绑定事件
// const db = mongoose.connection;
// db.once('error',() => console.log('Mongo connection error'));
// db.once('open',() => console.log('Mongo connection successed'));
// /************** 定义模式loginSchema **************/
// const loginSchema = mongoose.Schema({
//   account : String,
//   password : String,
//   date:String
// });
//
// /************** 定义模型Model **************/
// const Models = {
//   User : mongoose.model('User',loginSchema)
// }
//
// module.exports = Models;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/admin')

var user = new Schema({
  phone : String,
  password : String,
})
const db = mongoose.connection;
db.once('open',()=>{console.log('数据库打开成功')});
db.once('error',()=>{console.log('数据库打开失败')});
const Models = {
  User:mongoose.model('User',user)
}

module.exports = Models;
