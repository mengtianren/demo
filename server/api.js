// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  //查看数据库中这个用户名是否存在
  models.User.findOne({phone:req.body.params.phone},function(err,data){
    if(err){
      res.end(err)
    }else{
      if(data){
        res.json({
          error:1,
          date:new Date(),
          data:'该用户名已存在'
        })
      } else{
        let newAccount = new models.User({
          phone : req.body.params.phone,
          password : req.body.params.password,
          date:new Date()
        });
        // 保存数据newAccount数据进mongoDB
        newAccount.save((err,data) => {
          if (err) {
            res.send(err);
          } else {
            res.json({
              error:0,
              date:new Date(),
              data:'注册成功'
            });
          }
        });
      }
    }
  })
});
// 获取已有账号接口
router.post('/api/login/getAccount',(req,res) => {
  // 通过模型去查找数据库
  models.User.findOne({phone:req.body.params.phone,password : req.body.params.password},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      if(data){
        res.json({
          error:0,
          data:'登录成功',
          phone:data.phone
        })
      }else{
        res.json({
          error:1,
          data:'用户不存在或密码错误'
        })
      }
    }
  });
});

module.exports = router;
