/***********************************************
 * Function Explain 数据api接口
 * Author Jesonhu
 * Time 20170711
 ***********************************************/
import config from './index'
const domain = config.BASE_URL

const host = {
  domain: domain,
  captcha: `${domain}/weixin/public/index.php/captcha.html`, // 验证码
  index: { // 首页
    banner: `${domain}/weixin/public/index.php/index/banner/index`,
    option: `${domain}index/xxx`
  },
  lp: { // 楼盘展示
    list: `${domain}/weixin/public/index.php/index/building/index`,
    detail: `${domain}/weixin/public/index.php/index/building/detail/id/`
  },
  hx: { // 户型
    list: domain,
    detail: `${domain}/weixin/public/index.php/index/building/detail/id`
  },
  user: { // 用户相关 login:登录 reg:注册 reset:重置密码
    login: `${domain}/weixin/public/index.php/index/Auth/login`,
    reg: `${domain}/weixin/public/index.php/index/auth/register`,
    reset: `${domain}/weixin/public/index.php/index/auth/resetPwd`
  },
  news: { // 新闻
    list: `${domain}/weixin/public/index.php/index/news/index`,
    detail: `${domain}/weixin/public/index.php/index/news/detail/id/`
  },
  order: { // 预约看房
    order: `${domain}/weixin/public/index.php/index/booking/book`
  },
  sigePage: {
    about: `${domain}/weixin/public/index.php/index/about/index`
  }
}
export default host
