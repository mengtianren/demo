//引入mockjs
const Mock = require('mockjs')
// 消息列表
Mock.mock('/api/list', (req, res) => {
    return {
        data: [
        		{
			"id": "1",
			"img": "./static/img/icon/tou.jpg",
      "name":'逗留',
      "content":"你好~~",
       "date":'上午3:00',
       "Unread":'99+'
		},
		{
			"id": "2",
			"img": "./static/img/icon/tou1.jpg",
      "name":'指引',
      "content":"我在吃饭呢 你嘞",
      "date":'上午3:00',
      "Unread":'1'
    },
		{
			"id": "3",
			"img": "./static/img/icon/tou2.jpg",
      "name":"启明星的指引",
      "content":"你好~~在干嘛呢",
      "date":'上午3:00',
      "Unread":'50'
    },
    {
      "id": "4",
      "img": "./static/img/icon/tou3.jpg",
      "name":"启明星的指引",
      "content":"你好~~在干嘛呢",
      "date":'上午3:00',
      "Unread":'50'
          }
			]}
});
Mock.mock('/api/msg/:id', (req, res) => {
  console.log(req,res)
  return {
    data:[
      {
        id:1
      }
    ]}

})
