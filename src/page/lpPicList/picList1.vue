<template>
    <div class="pic-list-wrap">
        <v-header :titleName="'楼盘展示'"></v-header>

        <banner></banner>

        <ul class="common-list"
         :class="isShowList ? 'list' : 'block'">
            <li class="item"
             v-for="(item,index) in 10">
                <router-link class="link"
                 :to="{name: 'fullPic', query: {id: index}}" >
                    <div class="img-wrap">
                        <img class="img" src="http://kzcdn.itc.cn/res/post/images/bgimage/1.png?v=4.7" alt="">
                    </div>
                    <!-- list显示 -->
                    <div class="con-bd "
                     v-show="isShowList">
                        <p class="name">最新楼盘{{index}}</p>
                        <p class="time">2017-6-6</p>
                        <p class="view"><i class="fa fa-eye"></i>5</p>
                        <i class="arrow fa fa-chevron-right"></i>
                    </div>
                    <!-- block -->
                    <div class="con-bd"
                         v-show="!isShowList">
                      <p class="name">block最新楼盘{{index}}</p>
                    </div>
                    <div class="inof-wrap"
                     v-show="!isShowList">
                      <p class="time"><i class="fa fa-calendar-minus-o"></i>2017-6-6</p>
                      <p class="view"><i class="fa fa-eye"></i>5</p>
                    </div>
                </router-link>
            </li>
        </ul>

        <div class="toggle-style-bar" @click="changeStyle">
          <i class="fa fa-th-large"
           :class="isShowList ? 'fa-th-list' : 'fa-th-large' "></i>
        </div>

        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    import vHeader from 'components/header/header1'
    import banner from 'components/banner/staticBanner1'

    export default {
      data () {
        return {
          isShowList: true
        }
      },
      methods: {
        changeStyle () {
          if (this.isShowList) {
            // 显示 large
          } else {
            // 显示 list
          }
          this.isShowList = !this.isShowList
        }
      },
      components: {
        vHeader,
        banner
      }
    }
</script>

<style lang="scss" scoped>
    .common-list{
        padding: 10px;
    }
    .list{
      .item{
        $wrapHei: 70px;

        margin-top:8px;
        box-shadow:rgb(165, 165, 165) 0 0 8px;
        height: $wrapHei;
        background:#fff;
        &:first-child{
            margin-top:0;
        }
        .link {
            display:flex;
            flex-wrap:nowrap;
            height:inherit;
            .img-wrap{
                flex:0 0 30%;
                padding:3px;
                height:inherit;
                .img{
                   display:block;
                   width:100%;
                   height:100%;
                }
            }
            .con-bd{
                flex:1;
                position:relative;
                margin-left:5px;
                font-size:12px;
                color:#666;
                .name{
                    margin-top:10px;
                    font-size:.6rem;
                }
                .view{
                  .fa{
                    margin-right:5px;
                  }
                }
                .fa.arrow{
                   position:absolute;
                   right: 18px;
                   top: 50%;
                   margin-top:-5px;
                }
            }
        }
    }
    }
    .block{
      margin-right:-8px;
      .item{
        float:left;
        width:50%;
        padding-right:8px;
        margin-bottom:10px;
        overflow: hidden;
        .link{
          display: block;
          position: relative;
          .img{
            display: block;
            width:100%;
            min-height:100px;
          }
        }
        .inof-wrap{
          position:absolute;
          bottom:35px;
          left:0;
          width:100%;
          padding: 0 5px;
          display: flex;
          justify-content: space-between;
          font-size:13px;
          & > * {
            color:#fff;
            .fa{
              color:#fff;
            }
          }
          i.fa{
            margin-right:5px;
          }
        }
        .con-bd{
          height:30px;
          line-height: 30px;
          text-indent:5px;
          background:#fff;
        }
      }
    }

    /* 样式切换 */
    .toggle-style-bar{
      position: fixed;
      bottom: 10px;
      left:5px;
      display:flex;
      justify-content: center;
      align-items: center;
      width:30px;
      height:30px;
      color:#fff;
      background:rgba(0,0,0,.5);
      border-radius:50%;
      & > * {
        font-size:17px;
        color:#c53c43;
      }
    }
</style>
