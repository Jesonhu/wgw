<template>
    <div class="header-banner">
        <div class="hd">
            <div class="img-wrap">
                <img class="img" src="http://kzcdn.itc.cn/res/post/images/bgimage/1.png?v=4.7" alt="">
            </div>
            <div class="hd-txt">
                <div style="display:flex">
                    <span class="desc">
                    样板房欣赏
                    </span>
                    <span class="time">2017-6-26</span>
                </div>
                <i class="arrow fa fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
  .hd{
    $wrapHei: 6.5rem;  
    $itemHei: 30px;
    $textColor: rgba(80,77,77,.6);
    
    position: relative;
    // width:100%;
    height:$wrapHei;
    margin:10px;
    margin-bottom:0;
    .img-wrap{
    //   height: $wrapHei - 10px;
      background-color:#000;
      .img{
        display:block;
        width:100%;
        height: 100%;
        opacity: .8;
      }
    }
    .hd-txt{
      position: absolute;
      bottom:0;
      left:0;
      display:flex;
      justify-content:space-between;
      height:$itemHei;
      width:100%;
      padding: 0 3.5%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      color:$textColor;
      background:rgba(0,0,0,.3);
      .desc{
        display:inline-block;
        position: relative;
        padding-right:15px;
        font-size: 16px;
        height:inherit;
        line-height: $itemHei;
        color:$textColor;
        font-weight:600;
        font-family:'Microsoft Yahei';
        // &:after{
        //   content: '';
        //   position: absolute;
        //   right: 5px;
        //   top: 2px;
        //   display: block;
        //   width: 2px;
        //   height: 82%;
        //   background: #fff;
        // }
      }
      .time,
      .count{
        font-size: 12px;
        color:$textColor;
        line-height: $itemHei;
      }
      .arrow{
        float:right;
        line-height:$itemHei;
        text-align:center;
      }
    }
  }
</style>
