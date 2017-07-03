<template>
  <div class="single-page">
    <v-header :hasBg="true" :titleName="`公司简介`"></v-header>
    <div class="bd">
      <h2 class="title">公司简介</h2>
      <div class="synopsis">
        <img src="http://zhdc.qlcount.com/zhonghaiweixin/images/glogo.png" alt="" class="login-img">
        <div class="detail"
         :class="{'is-active': conToggleMark || false}"
         v-html="content"></div>
        <div class="arrow"
         :class="{'is-active': conToggleMark || false}"
         @click="toggleContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from 'components/header/header3'

  export default{
    data () {
      return {
        content: `中海地产是中国海外集团（隶属于中国建筑工程总公司）的房地产业务平台，1979年创立于香港，1992年在香港联交所上市（股票代码：00688.HK，简称“中国海外发展”，“公司”），公司于2007年入选恒生指数成份股。中海地产专注于主流城市打造主流精品物业，拥有38年房地产开发与商业物业运营管理经验，业务遍布英国伦敦、港澳及内地近60个城市，累计开发项目超过450个，持有并已投入运营的中海系写字楼、环宇城购物中心、星级酒店等商业物业达250万平方米。2016年底，公司总资产达5713亿港元，净资产达2223亿港元。中海系公司土地储备7451万平方米。2016年，实现销售合约额2106亿港元，净利润370.2亿港元。<br><br>

        中海地产持续稳健的业绩增长、高效的企业管治，获得社会各界的高度认同。2005年，中国海外发展成为由穆迪和标准普尔同期给予“投资”级评级的中资房企，十余年来，评级获多次提升。2016年，三大国际信用评级机构对公司信用评级分别为：穆迪Baa1、标准普尔BBB+、惠誉A-。中海地产连续13年入选“中国蓝筹地产”企业，并荣获“中国价值地产总评榜·年度企业公民”、“亚洲企业管治大奖”等荣誉。2016年，中海地产品牌价值达519.06亿元。<br><br>


      中海地产秉承“精品 生活 创造”的品牌定位，以预见性地满足客户的现实与潜在需求的设计理念，研发五代住宅精品，坚守“过程精品 楼楼精品”的精益开发理念，为客户提供精品物业。住宅精品代表有：牛津道1号（香港）、天钻（澳门）、紫御公馆（北京）、寰宇天下（上海）、香蜜湖1号（深圳）、暻晖华庭（广州）、八里台（天津）、千灯湖1号（佛山）、银海湾（珠海）、锦城国际（厦门）、凤凰熙岸（南京）、独墅岛（苏州）、西溪华府（杭州）、寰宇天下（宁波）、华山珑城（济南）、临安府（青岛）、琴台华府（武汉）、中海国际社区(长沙)、城南1号（成都）、中海国际社区（长春）、中海城（沈阳）、紫御江山（重庆）、百贤府（西安）、凤凰熙岸（大连）、原山（合肥）、御湖熙岸（南宁）等。并打造了“中海国际社区”、“中海寰宇天下”、“中海城”、“中海九号公馆”、“中海锦城”、“1号”系列、“紫御”系列、“华庭”系列等精品系列项目品牌。截至目前，中海地产荣获“詹天佑大奖—优秀住宅小区奖”累计达57项（金奖34项、单项奖23项），中国建筑工程“鲁班奖”7项，CNBC/Bloomberg国际地产奖12项。<br><br>
      中海地产拥有“中海系”写字楼、“环宇城”购物中心、星级酒店三大产品线，遵循“统一业权、持有运营”的经营原则实施品牌化管理，为城市、公众、合作伙伴等创造长远价值，已投入运营的持有型商业物业面积达250万平方米，项目遍布伦敦、澳门、北京、上海、广州、深圳、成都、南京等国际及国内经济重镇。<br><br>

      2010年，中国海外发展在香港资本市场完成对一家同业上市公司（股票代码：00081.HK）的并购，并更名为「中国海外宏洋集团有限公司」。2015年11月，中国海外发展将物业管理业务（中海物业）分拆并独立上市（股票代码：02669.HK）。中海物业创立于1986年，截至2016年底，中海物业在港澳及内地管理服务的住宅、商用物业、政务公务楼宇的总面积约9500万平方米。<br><br>

      中国海外发展全资子公司——华艺设计，1986年创立于香港，具有建筑工程设计、规划设计双甲级资质，系“国家级高新技术企业”，汇聚了1000多名专业设计人才，在北京、上海、广州、南京等十个城市设有分支机构。30年来，华艺设计在加拿大、日本、港澳及中国内地数十个城市，累计完成设计项目2000多项，先后共有170多个项目获得420余次国家级、省部级及深圳市优秀设计奖。<br><br>

      中海地产坚持以人为本，倡导“将个人的发展融入企业长远发展中去”的价值观，致力于员工价值与企业经营的可持续发展，以绩效为导向，构建了“公平、简单、透明、阳光”的企业文化。公司创立“海之子”和“海纳”两个人力资源管理品牌，为高校优才与社会精英提供绿色通道。公司构建了系统、完善的内部培训机制，持续提升员工专业技能和职业操守。中海地产的人才素质在中国房地产行业享有盛誉，荣获中国人力资源管理大奖“十佳企业”等荣誉。<br><br>

      中海地产持续践行企业社会责任，受到社会各界的高度认可，荣获“中国企业社会责任榜优秀实践奖”、“中国房地产年度社会责任感企业”等荣誉。截至2016年，公司在港澳和内地赈灾、捐资助学、襄助公益的款项总额超过1.56亿港元。公司持续在内地捐建中国海外系列希望小学，在陕西、四川、重庆、吉林、辽宁等地已捐建了11所希望学校，承袭中海地产的精工筑造理念，公司捐建的希望学校均是高规格、高品质的，每所希望学校的投入都达数百万元以上，为贫困地区的学生创造优越的学习环境。<br><br>

      中海地产作为中国绿色建筑与节能委员会绿色房地产学组组长单位，长期以来积极致力于融汇现代科技的绿色建筑实践与推广，于2016年荣获“全国绿色建筑先锋奖”。此外，公司亦持续推进旗下住宅项目、商业项目的绿色建筑认证工作，截至2016年底，已获得中国绿色建筑设计标识星级认证、美国能源与环境设计先锋奖（LEED）、英国建筑研究院环境评估方法认证（BREEAM）合计达47项，持续推动绿色地产的实践与发展。<br><br>

      展望未来，中海地产坚持规模化、专业化、品牌化的可持续发展战略，与时俱进，开拓创新，为社会贡献更多优质的精品物业，持续与广大客户、股东、城市、社区共谋发展、共赢未来，打造百年长青基业！`,
        conToggleMark: false
      }
    },
    methods: {
      toggleContent () {
        if (!this.conToggleMark) {
          this.conToggleMark = true
        } else {
          this.conToggleMark = false
        }
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss" scoped>
  .single-page {
    .bd{
      $themBgColor: rgb(243,243,247);
      margin-top:2.0rem;
      min-height: calc(100vh - 2rem);
      background:$themBgColor;

      .title{
        width:100%; height: 2.73rem;
        background:#fff;
        line-height: 2.73rem;
        text-align: center;
        font-size: 16px; font-family: "Microsoft Yahei", sans-serif;
        font-weight: bold; color: #30395f;
        letter-spacing: 3px;
      }
      .synopsis{
        position:relative;
        padding:1.1rem 1rem;
        font-size:14px; font-family: "宋体";
        .login-img{
          display:block;
          width:5.75rem; height:1.95rem;
        }
        .detail {
          margin:1.352rem 0;
          height:13.967rem;
          overflow: hidden;
          transition: .3s height linear;
          &.is-active{
            height: auto;
          }
        }
        .arrow{
          position: absolute;
          bottom:17px; left: 50%;
          display:block;
          width: 1.16rem; height: 0.819rem;
          margin-left:-0.58rem;
          background:url(http://zhdc.qlcount.com/zhonghaiweixin/images/jiantou.png) no-repeat center / contain;
          &.is-active {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
</style>
