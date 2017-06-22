const express = require('express')
const apiRoutes = express.Router()

const newList0 = require('../src/mock/list0.json')

// 获取list0数据
apiRoutes.get('/new/0', (req, res) => {
  res.send(newList0)
})

module.exports = apiRoutes

// export default apiRoutes
