<template>
  <span class="mod-switch"
   @click="toggle"
   :class="{'mod-switch-checked': currentValue}">
      <span class="mod-switch-inner">
        <slot name="open" v-if="currentValue"></slot>
        <slot name="close" v-if="!currentValue"></slot>
      </span>
  </span>
</template>

<script>
  export default{
    data () {
      return {
        currentValue: false
      }
    },
    methods: {
      toggle () {
        this.currentValue = !this.currentValue
        this.$emit('selectVal', this.currentValue)
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  $switchThemCol: #c53c43;

  .mod-switch{
    display: inline-block;
    width: 48px;
    height: 24px;
    line-height: 22px;
    border-radius: 24px;
    vertical-align: middle;
    border: 1px solid #ccc;
    background-color: #ccc;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color:#fff;
    transition: all .2s cubic-bezier(0.45, 0.05, 0.55, 0.95);

    // bar
    &:after{
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: #fff;
      position: absolute;
      left: 1px;
      top: 1px;
      cursor: pointer;
      transition: transform .2s cubic-bezier(0.45, 0.05, 0.55, 0.95),
                  width .2s cubic-bezier(0.45, 0.05, 0.55, 0.95);

      transform:translateX(0);
    }

    &.mod-switch-checked{
      border-color: $switchThemCol;
      background-color: $switchThemCol;
      &:after{
        /*left:25px;*/
        transform:translateX(23px);
      }
      .mod-switch-inner{
        left:8px;
      }
    }
  }
  .mod-switch-inner{
    color: #fff;
    font-size: 12px;
    position: absolute;
    left: 25px;
    & > *{
      color:#fff;
    }
  }
</style>
