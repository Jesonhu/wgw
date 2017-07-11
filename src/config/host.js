/***********************************************
 * Function Explain 数据api接口
 * Author Jesonhu
 * Time 20170711
 ***********************************************/
import config from './index'
const domain = config.BASE_URL

const host = {
  domain: domain,
  index: { // 首页
    banner: `${domain}index/banner`,
    option: `${domain}index/xxx`
  },
  hx: { // 户型
    list: domain,
    detail: `${domain}/weixin/public/index.php/index/building/detail/id`
  },
  user: { // 用户相关 login:登录 reg:注册 reset:重置密码
    login: `${domain}/weixin/public/index.php/index/Auth/login`,
    reg: ``,
    reset: ''
  },
  order: { // 预约看房
    order: `${domain}/weixin/public/index.php/index/booking/book`
  }
}
export default host
