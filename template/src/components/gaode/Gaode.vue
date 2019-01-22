<template>
  <div id="gaode_map" :style="{height:height,width:width}"></div>
</template>

<script>
  export default {
    props:{
      width: {
        type: String,
        default: '100vw'
      },
      height: {
        type: String,
        default: '100vh'
      },
    },
    methods: {
      init() {
        let map = new AMap.Map('gaode_map', {
          center: [117.000923, 36.675807],
          zoom: 11,
          mapStyle: 'amap://styles/c2187c793c4955a3f66d8c480ca1b32d', //设置地图的显示样式
          resizeEnable: true,
          viewMode: '3D',
          pinch: 45
        });
        AMap.plugin([
          'AMap.ControlBar',
        ], function(){

          // 添加 3D 罗盘控制
          map.addControl(new AMap.ControlBar());
        });
      }
    },
    mounted(){
      this.init()
    }
  }
</script>

<style scoped>

</style>
