<template>
  <div>
    <el-button type="primary" @click="toPrint">打 印二维码</el-button>
    <el-button type="primary" @click="()=>{$print($refs.printTableList)}">打印多个二维码表</el-button>
    <el-button type="primary" @click="dialogVisible=true">查看二维码</el-button>
    <el-dialog
      title="二维码"
      :visible.sync="dialogVisible"
      append-to-body
      width="30%"
    >
      <qr-code-table ref="showTable" :qr-code="qrCode1" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <print-container ref="printTable">
      <qr-code-table v-for="item in qrCodeList" :key="item.id" :qr-code="item" />
    </print-container>
    <div ref="printTableList">
      <qr-code-table v-for="item in qrCodeList" :key="item.id" :qr-code="item" />
    </div>
    <!-- <qr-code-table-list ref="printTableList" :visible="false" :qrCodeList="qrCodeList"></qr-code-table-list> -->
  </div>
</template>
<script>
import qrCodeTable from './components/qrCodeTable'
import qrCodeTableList from './components/qrCodeList'
import printContainer from './components/printContainer'
const qrCode = {
  id: '12',
  orderId: 'xj1245324254251',
  name: '2542货架',
  size: '20*50*80',
  textureColor: '褐色',
  materialColor: 158452,
  packetNum: 5000,
  unit: '箱'
}
const qrCode1 = {
  id: '88',
  orderId: 'xj1245324254251',
  name: '2542货架',
  size: '20*50*80',
  textureColor: '褐色',
  materialColor: 158452,
  packetNum: 5000,
  unit: '箱'
}
export default {
  components: {
    qrCodeTable,
    qrCodeTableList,
    printContainer
  },
  data() {
    return {
      dialogVisible: false,
      qrCodeList: [qrCode1, qrCode],
      qrCode: qrCode,
      qrCode1: qrCode1
    }
  },

  methods: {
    toPrint() {
      // let body=document.getElementsByTagName('body')[0]
      // console.log(this.$refs.printTable)
      // console.log(body)
      // body.appendChild(this.$refs.printTable.$el)
      this.$print(this.$refs.printTable)
      // body.removeChild(this.$refs.printTable.$el)
    },
    toWatch() {
      this.dialogVisible = true
    }

  }
}
</script>
