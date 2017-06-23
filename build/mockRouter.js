const express = require('express')
const apiRoutes = express.Router()

const newList0 = require('../src/mock/list0.json')
const newDetail = require('../src/mock/newDetail.json')

// 获取list0数据
apiRoutes.get('/active', (req, res) => {
  res.send(newList0)
})

// 获取新闻详情内容
apiRoutes.get('/detail', (req, res) => {
  // console.log(req.query)
  // console.log(req.query.id)
  //res.send(newList0)
  const id = req.query.id - 1
  const data = newDetail.data[id]
  res.json({
    state: 1,
    data: data
  })
})

module.exports = apiRoutes

// export default apiRoutes
