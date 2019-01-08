<template>
  <l-map
    v-if="mapOption"
    ref="map"
    :style="{height:height,width:width}"
    :zoom="zoom"
    :crs="mapOption.crs"
    :options="{zoomControl:false}"
  >
    <l-tile-layer
      v-for="(layer,key) in mapOption.layers"
      :key="key"
      :url="layer"
      :attribution="attribution"
      :options="mapOption.options"
    />
  </l-map>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import proj4 from 'proj4'
import { LMap, LMarker, LPopup, LRectangle, LTileLayer, LTooltip } from 'vue2-leaflet'
import VMarkerCluster from 'vue2-leaflet-markercluster'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LRectangle,
    VMarkerCluster
  },
  props: {
    width: {
      type: String,
      default: '100vw'
    },
    height: {
      type: String,
      default: '100vh'
    },
    mapOption: {
      type: Object,
      default: function () {
        window.proj4 = proj4
        require('../../../public/js/proj4/proj4leaflet.js')
        function initStyle () {
          let a = []
          a[1] = 't:land|e:g|v:on|c:#17032b'
          a[2] = 't:water|e:g|v:off|c:#4682B4'
          a[3] = 't:green|e:g|v:on|c:#008B8B'
          a[4] = 't:building|e:g|v:on'
          a[5] = 't:building|e:g.f|c:#6A5ACD|v:on'
          a[6] = 't:building|e:g.s|c:#dadada|v:on'
          a[7] = 't:subwaystation|e:g|v:off|c:#b15454'
          a[8] = 't:education|e:g|v:off|c:#e4f1f1'
          a[9] = 't:medical|e:g|v:on|c:#f0dede'
          a[10] = 't:scenicspots|e:g|v:off|c:#e2efe5'
          a[11] = 't:highway|e:g|v:on|w:4'
          a[12] = 't:highway|e:g.f|c:#f7c54d'
          a[13] = 't:highway|e:g.s|c:#fed669'
          a[14] = 't:highway|e:l|v:on'
          a[15] = 't:highway|e:l.t.f|c:#8f5a33'
          a[16] = 't:highway|e:l.t.s|c:#348aba'
          a[17] = 't:highway|e:l.i|v:on'
          a[18] = 't:arterial|e:g|v:on|w:2'
          a[19] = 't:arterial|e:g.f|c:#d8d8d8|v:on'
          a[20] = 't:arterial|e:g.s|c:#ffeebb|v:on'
          a[21] = 't:arterial|e:l|v:on'
          a[22] = 't:arterial|e:l.t.f|c:#525355|v:on'
          a[23] = 't:arterial|e:l.t.s|c:#348aba|v:on'
          a[24] = 't:local|e:g|v:on|w:1'
          a[25] = 't:local|e:g.f|c:#000000|v:on'
          a[26] = 't:local|e:g.s|c:#348aba|v:on'
          a[27] = 't:local|e:l|v:on'
          a[28] = 't:local|e:l.t.f|c:#979c9a|v:on'
          a[29] = 't:local|e:l.t.s|c:#348aba|v:on'
          a[30] = 't:railway|e:g|v:on|w:1'
          a[31] = 't:railway|e:g.f|c:#123c52'
          a[32] = 't:railway|e:g.s|c:#12223d'
          a[33] = 't:subway|e:g|v:on|w:1'
          a[34] = 't:subway|e:g.f|c:#000000'
          a[35] = 't:subway|e:g.s|c:#000000'
          a[36] = 't:subway|e:l|v:on'
          a[37] = ':subway|e:l.t.f|c:#000000'
          a[38] = 't:subway|e:l.t.s|c:#348aba'
          a[39] = 't:continent|e:l|v:on'
          a[40] = 't:continent|e:l.i|v:on'
          a[41] = 't:continent|e:l.t.f|c:#333333|v:on'
          a[42] = 't:continent|e:l.t.s|c:#348aba|v:on'
          a[43] = 't:city|e:l.i|v:on'
          a[44] = 't:city|e:l|v:on'
          a[45] = 't:city|e:l.t.f|c:#000000|v:on'
          a[46] = 't:city|e:l.t.s|c:#348aba|v:on'
          a[47] = 't:town|e:l.i|v:on'
          a[48] = 't:town|e:l|v:on'
          a[49] = 't:town|e:l.t.f|c:#454d50|v:on'
          a[50] = 't:town|e:l.t.s|c:#348aba|v:on'
          a[51] = 't:road|e:g.f|c:#1c2b45|v:on'
          a[52] = 't:poi|e:l|v:off'
          a[53] = 't:label|e:l|v:off'
          a[54] = 't:road|e:g|v:on|w:1'
          a[55] = 't:road|e:l|v:on'
          a[56] = 't:road|e:g.s|c:#121f47|v:on'
          a[57] = 't:district|e:l|v:on'
          a[58] = 't:poi|e:l.i|v:off'
          a[59] = 't:poi|e:l.t.f|c:#a2a8a7|v:off'
          a[60] = 't:poi|e:l.t.s|c:#000000|v:off'
          a[61] = 't:manmade|e:g|c:#13163c|v:on'
          a[62] = 't:label|e:l.t.s|c:#13163c|v:on'
          a[63] = 't:entertainment|e:g|c:#348aba|v:off'
          a[64] = 't:shopping|e:g|c:#12223dff|v:off'
          let style = ''
          for (let i = 1; i <= a.length; i++) {
            style += ',' + a[i]
          }
          style = style.substring(1)
          style = encodeURIComponent(style)
          return style
        }
        function resolutions () {
          let level = 19; let res = []
          for (let i = 0; i <= level; i++) {
            res[i] = Math.pow(2, 18 - i)
          }
          return res
        }
        function initBaiDuLayer () {
          let layers = ['https://api.map.baidu.com/customimage/tile?&x={x}&y={y}&z={z}&udt=20180913&scale=2&ak=E4805d16520de693a3fe707cdc962045&styles=' + initStyle()]
          let crs = new L.Proj.CRS('EPSG:900913', '+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs', {
            resolutions: resolutions(),
            origin: [0, 0],
            bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
          })
          return {
            layers: layers,
            options: {
              subdomains: '012',
              tms: true,
              minZoom: 5,
              maxZoom: 19
            },
            crs: crs
          }
        }

        return initBaiDuLayer()
      }
    }
  },
  data () {
    return {
      zoom: 15,
      attribution: '',
      makerLayer: null
    }
  },
  mounted () {
    let that = this
    this.$refs.map.mapObject.on('click', function (e) {
      that.$emit('onMapClick', e)
    })
    this.panToCenter([30.824387, 120.930234])
  },
  methods: {
    makeIcon (type) {
      // 确定的图标
      return L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [22, 30], // size of the icon
        shadowSize: [30, 30], // size of the shadow
        iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
        shadowAnchor: [10, 30], // the same for the shadow
        popupAnchor: [0, -26] // point from which the popup should open relative to the iconAnchor
      })
    },
    panToCenter: function (pos) {
      this.$refs.map.mapObject.panTo(pos)
    },
    flyToCenter: function (pos) {
      this.$refs.map.mapObject.flyTo(pos)
    },
    cleanMarker () {
      if (this.makerLayer != null) {
        this.makerLayer.clearLayers()
      }
    },
    refresh () {
      this.$refs.map.mapObject.invalidateSize(true)
    },
    addMarker (list) {
      let that = this
      let layer = []
      for (let item of list) {
        if (item.pos == null) {
          continue
        }
        let marker = L.marker(item.pos, { icon: this.makeIcon(item.type) })
        marker.on('click', function (e) {
          that.$emit('onPointClick', item, e)
        })
        layer.push(marker)
      }
      this.makerLayer = L.layerGroup(layer)
      this.$refs.map.mapObject.addLayer(this.makerLayer)
    }
  }
}
</script>
