<template>
  <div class="mobil-menu">
    <ul class="list">
        <li class="item"
         v-for="(item,index) in list">
            <router-link class="link"
             :to="item.link"
             v-if="index%2===0">
                <div class="img-wrap">
                    <img alt="item.name" class="img"
                     :src="item.pic">
                </div>
                <div class="name-wrap">
                    {{item.name}}
                </div>
            </router-link>

            <router-link class="link"
             :to="item.link"
             v-if="index%2!==0">
                <div class="name-wrap">
                    {{item.name}}
                </div>
                <div class="img-wrap">
                    <img alt="item.name" class="img"
                     :src="item.pic">
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          list: [
            {
              link: '/lpshow',
              pic: 'http://vcl-pictures.qiniucdn.com/FlA2wYHJxzRKxF8pc_uliWOR9niL',
              name: '楼盘鉴赏'
            },
            {
              link: '/hxtype',
              pic: 'http://vcl-pictures.qiniucdn.com/FlA2wYHJxzRKxF8pc_uliWOR9niL',
              name: '户型图鉴赏'
            },
            {
              link: '/fullview',
              pic: 'http://vcl-pictures.qiniucdn.com/FrheFlBKoW-HUNqzQeNFA30ohrOc',
              name: '360°全景看房'
            },
            {
              link: '/map',
              pic: 'http://vcl-pictures.qiniucdn.com/FsxoJfdoFGn05jBXdnpfRBn_3Eni',
              name: '项目地址'
            },
            {
              link: '/about',
              pic: 'http://vcl-pictures.qiniucdn.com/Fs413Dv8vrkdvFte7Or6W8kz_emZ',
              name: '公司简介'
            }
          ]
        }
      }
    }
</script>

<style scoped lang="scss">
    .mobil-menu{
        .item {
           &:nth-child(6n+1) {
               background:#48cfae;
           }
           &:nth-child(6n+2) {
               background:#4fc0e8;
           }
           &:nth-child(6n+3) {
               background:#ac92ed;
           }
           &:nth-child(6n+4) {
               background:#ff8273;
           }
           &:nth-child(6n+5) {
               background:#ec87bf;
           }
           &:nth-child(6n+6) {
               background:#ffce55;
           }  
        }
        .link {
            display:flex;
            height:4.6rem;
            line-height:4.6rem;
            margin-top:8px;
            .img-wrap{
                flex: 0 0 70%;
                .img{
                  display: block;
                  width: 100%;
                  height: 100%;
                }
            }
            .name-wrap{
               flex: 0 0 30%;
               text-align:center;
               color:#fff;
               font-size:14px;
            }
        }
    }
</style>
