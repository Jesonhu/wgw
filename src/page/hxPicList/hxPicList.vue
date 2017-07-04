<template>
  <div class="hxpic-list">
    <v-header></v-header>

    <div class="header">
      <img src="http://vcl-pictures.qiniucdn.com/FuQF9yMlATjxAaqcOXhYnkVLHlXv" alt="" class="img">
    </div>
    <div class="bd">
      <ul class="list">
        <li class="item"
         v-for="(item,itemIndex) in listData">
          <h3 class="title">{{item.title}}</h3>
          <ul class="house-list">
            <li class="house-item b-1px-t"
             v-for="(house,houseIndex) in item.houseList"
             @click="toggle(house)">
                <p class="name">
                  <strong class="type">{{house.name}}</strong>
                  <span class="text">{{house.subname}}</span>
                </p>
                <p class="desc">{{house.desc}}</p>
                <router-link  class="link" ref="sub-menu" v-show="house.mark || false"
                 :to="{name: 'hxDetail', query: {id: itemIndex, pid: houseIndex}}">
                  <span class="img"></span>
                  <span class="text">户型图</span>
                </router-link>
                <span class="arrow"
                 :class="{'is-active':house.mark}"></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vHeader from 'components/header/header1'

  export default {
    data () {
      return {
        mark: false,
        listData: [
          {
            'title': '企业高管公寓',
            'houseList': [
              {
                'name': 'css-001',
                'subname': '企业高管公寓',
                'desc': '一室一厅一卫 约43.64平米'
              },
              {
                'name': 'css-001',
                'subname': '企业高管公寓',
                'desc': '一室一厅一卫 约43.64平米'
              }
            ]
          },
          {
            'title': '企业高管公寓',
            'houseList': [
              {
                'name': 'css-001',
                'subname': '企业高管公寓',
                'desc': '一室一厅一卫 约43.64平米'
              },
              {
                'name': 'css-001',
                'subname': '企业高管公寓',
                'desc': '一室一厅一卫 约43.64平米'
              }
            ]
          },
          {
            'title': '企业高管公寓',
            'houseList': [
              {
                'name': 'css-001',
                'subname': '企业高管公寓',
                'desc': '一室一厅一卫 约43.64平米'
              }
            ]
          }
        ]
      }
    },
    methods: {
      toggle (item) {
        if (typeof item.mark === 'undefined') {
          Vue.set(item, 'mark', true)
        } else {
          item.mark = !item.mark
        }
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="scss" scoped>
  .hxpic-list{
    .header{
      min-width: 320px;
      max-width: 720px;
      .img{
        display:block;
        width:100%;
        height:100%;
      }
    }

    .bd{
      .list{
        background-color:rgb(242,241,240);
        padding:15px 10px;
        .item {
          border:1px solid #ededed;
          border-radius:5px;
          background:#fff;
          box-shadow: 0 2px 1px rgba(0,0,0,0.1);
          margin-bottom:10px;
        }
      }
      .title{
        height:34px;
        line-height: 34px;
        font-size:15px;
        text-indent: 10px;
        color:#252e32;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        background-color:#fbfbfb;
      }
      .house-list {
        .house-item{
          z-index: 1;
          border-bottom:1px solid #e2e1e0;
          position: relative;
          display:block;
          padding-bottom:0;
          /*height:62px;*/
          font-size: 13px;
          .name{
            padding:10px;
            padding-bottom:0;
            line-height: 23px;
            .type{
              color:#252e32;
            }
            .text {
              marin-left:10px;
              color:#74a3a5;
            }
          }
          .desc {
            z-index: 2;
            position: relative;
            padding:10px;
            padding-bottom:11px;
          }
          &:last-child{
            border-bottom:0;
          }
          .arrow{
            z-index: 999;
            content:"";
            position: absolute;
            top:10px;
            right:15px;
            display:block;
            width:13px;
            height:10px;
            box-sizing: content-box;
            border:20px solid #fff;
            background:url(http://m.vcooline.com/stylesheets/app/imgs/sprite.png) no-repeat -100px 0 / 160px auto;
            cursor: pointer;
            transition:.3s roate linear;
            &.is-active{
               transform:rotate(180deg);
            }
          }
          .link{
            display:flex;
            align-items: center;
            justify-content: center;
            height:52px;
            margin-top:5px;
            overflow: hidden;
            background:rgb(242,241,240);
            &:before{
              z-index: 99999;
              position: absolute;
              content: "";
              width: 16px;
              height: 16px;
              overflow: hidden;
              border: 1px solid #fff;
              border-right:0;
              border-bottom: 0;
              background:rgb(242,241,240);
              left: 50%;
              margin-left: -10px;
              top: 70px;
              transform: rotate(45deg);
            }
            .img{
              content: '';
              display:inline-block;
              width:22px;
              height:18px;
              margin-right:10px;
              background:url(http://m.vcooline.com/stylesheets/app/imgs/sprite.png) no-repeat 0 -25px/160px auto;
            }
          }
        }
      }
    }
  }
</style>
