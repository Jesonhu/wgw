<template>
    <div class="pic-list-wrap">
        <v-header :titleName="'楼盘展示'"></v-header>

        <banner></banner>

        <ul class="list">
            <li class="item"
             v-for="(item,index) in 2">
                <router-link class="link"
                 :to="{name: 'fullPic', query: {id: index}}" >
                    <div class="img-wrap">
                        <img class="img" src="http://kzcdn.itc.cn/res/post/images/bgimage/1.png?v=4.7" alt="">
                    </div>
                    <div class="con-bd">
                        <p class="name">最新楼盘{{index}}</p>
                        <p class="time">2017-6-6</p>
                        <p class="view"><i class="fa fa-eye"></i>5</p>
                        <i class="arrow fa fa-chevron-right"></i>
                    </div>
                </router-link>
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
    import vHeader from 'components/header/header1'
    import banner from 'components/banner/staticBanner1'

    export default {
      data () {
        return {
        }
      },
      components: {
        vHeader,
        banner
      }
    }
</script>

<style lang="scss" scoped>
    .list{
        padding: 10px;
    }
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
                    font-size:21px;
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
</style>
