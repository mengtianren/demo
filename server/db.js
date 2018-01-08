
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
