<template>
  <div>
    <table class="printTable">
      <tr>
        <th class="title">采购订单号</th>
        <td class="col2" colspan="3">{{ qrCode.orderId }}</td>
      </tr>
      <tr>
        <th>名称</th>
        <td class="col2" colspan="3">{{ qrCode.name }}</td>
      </tr>
      <tr>
        <th>规格</th>
        <td colspan="3">{{ qrCode.size }}</td>
      </tr>
      <tr>
        <th>颜色</th>
        <td>{{ qrCode.textureColor }}</td>
        <td>{{ qrCode.materialColor }}</td>
        <td rowspan="2">
          <div id="qrcode" ref="qrcode" />
        </td>
      </tr>
      <tr>
        <th>单位及包装数</th>
        <td>{{ qrCode.packetNum }}</td>
        <td>{{ qrCode.unit }}</td>
      </tr>
    </table>
    <div class="pagebreak" />
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  props: {
    qrCode: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      qrcode: ''
    }
  },
  watch: {
    qrCode(val) {
      console.log(val.id)
      this.qrcode.makeCode(val.id)
    }
  },
  created() {
    console.log(this.qrCode)
    this.$nextTick(() => {
      this.getQRcode()
    })
  },
  methods: {
    getQRcode() {
      this.qrcode = new QRCode(this.$refs.qrcode, {
        width: 100, // 设置宽度，单位像素
        height: 100, // 设置高度，单位像素
        text: this.qrCode.id // 设置二维码内容或跳转地址
      })
    }
  }
}
</script>
<style lang="scss" scoped>

    table,th,td{
        border: 1px solid #666;
    }
    th,td{
        text-align: center;
        width: 100px;
        height: 50px;
        padding: 2px 5px;
    }
    .printTable{
        //position: absolute;
        display: table;
        border-collapse: collapse;
        page-break-after:always;
    }
    @media print {
      .pagebreak{
          page-break-after:always;
      }
    }
</style>
<style >
  @media print {
      #app .main-container{
          margin-left: 0 !important;
      }
    }
</style>
