const express = require('express')
const apiRoutes = express.Router()

const newList0 = require('../src/mock/list0.json')
const newDetail = require('../src/mock/newDetail.json')
const picDetail = require('../src/mock/picList.json')

// 获取list0数据
apiRoutes.get('/active', (req, res) => {
  res.send(newList0)
})

// 获取新闻详情内容
apiRoutes.get('/detail', (req, res) => {
  // console.log(req.query)
  console.log(req.query.id)
  //res.send(newList0)
  const id = req.query.id - 1
  const data = newDetail.data[id]
  res.json({
    state: 1,
    data: data
  })
})

// 楼盘鉴赏列表
apiRoutes.get('/lpshow', (req, res) => {
  // 返回内容给列表
})
// 楼盘鉴赏详情(全是图片)
apiRoutes.get('/lpshow/detail', (req, res) => {
  const queryId = req.query.id
  const resultData = picDetail.data[queryId]
  res.json({
    state: 1,
    data: resultData
  })
})

module.exports = apiRoutes

// export default apiRoutes
