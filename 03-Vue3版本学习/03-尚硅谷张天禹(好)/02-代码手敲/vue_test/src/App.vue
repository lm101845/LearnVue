<template>
  <div id="app">
    <div class="ShoppingCart">
      <div class="selectAll" @click="allFun()">
        <div :class="{'selectActv':SelectId.length==CartList.length}"></div>
        <span>全选</span>
      </div>
      <div class="contentBox">
        <div class="CartItem" v-for="(item,index) in CartList" :key="index">
          <div class="select"  @click="selectFun(item.id)">
            <div :class="{'selectActv':SelectId.includes(item.id)}"></div>
          </div>
          <div class="title">{{item.text}}</div>
          <div class="Price">单价：{{item.Price}}</div>
          <div class="inputNum">
            <div class="reduceBtn" @click="()=>{item.num>1?item.num--:''}">-</div>
            <input type="number" v-model.number="item.num" />
            <div class="addBtn" @click="item.num++">+</div>
          </div>
          <div class="delete" @click="DeleteFun(index)">删除</div>
        </div>
      </div>
      <div class="TotalPrice">总价：{{TotalPrice}}元</div>
    </div>
    <p>已选项:</p>
    <p v-for="(item,index) in SelectList" :key="index">{{item}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SelectId:[], // 已选列表
      CartList: [
        {id: 1,num: 1,Price: 10,text: "菠萝"},
        {id: 2,num: 1,Price: 20,text: "西瓜"},
        {id: 3,num: 1,Price: 30,text: "芒果"},
        {id: 4,num: 1,Price: 40,text: "雪梨"},
        {id: 5,num: 1,Price: 50,text: "柚子"},
        {id: 6,num: 1,Price: 60,text: "香蕉"},
      ],
    };
  },
  computed:{
    SelectList(){ // 已选列表
      return this.CartList.filter((item) => {
        if (this.SelectId.includes(item.id)) {
          return item
        }
      })
    },
    // 计算总价
    TotalPrice(){
      let Price = 0
      this.SelectList.forEach((item) => {
        Price+=item.Price*item.num
      })
      return Price
    }
  },
  methods: {
    // 全选、反选
    allFun(){
      if(this.SelectId.length==this.CartList.length){
        this.SelectId=[]  // 判断是否已全部选中，是则清空已选列表
      }else{
        this.CartList.forEach((item)=>{
          if(!this.SelectId.includes(item.id)){
            this.SelectId.push(item.id) // 否则将未选中的全部加入已选列表中
          }
        })
      }
    },
    // 单选、多选
    selectFun(id){
      if(!this.SelectId.includes(id)){
        this.SelectId.push(id) // 判断已选列表中是否存在该id，不是则追加进去
      }else{
        let index = this.SelectId.indexOf(id) // 求出当前id的所在位置
        this.SelectId.splice(index,1) // 否则则删除
      }
    },
    // 删除当前项
    DeleteFun(index){
      // idIndex是指求出被删除项的id在this.SelectId中的所处位置
      let idIndex = this.SelectId.indexOf(this.CartList[index].id)
      this.SelectId.splice(idIndex,1) // 删除当前项的购物车记录
      this.CartList.splice(index,1) // 删除当前项
    },
  }
};
</script>

<style>
* {
  color: #333;
  box-sizing: border-box;
  user-select: none;
}
.ShoppingCart {
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
  margin: 100px auto 0px;
}
.selectAll {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid #ccc;
}
.selectAll div {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  /* align-items: center; */
}
.selectAll span {
  font-size: 16px;
  font-weight: 500;
}
.selectActv::before {
  display: block;
  content: "";
  width: 5px;
  height: 12px;
  border-bottom: 2px solid #aaa;
  border-right: 2px solid #aaa;
  transform: rotate(45deg);
}
.CartItem {
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.select {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
}
.title{
  flex: 1;
  text-align: left;
}
.Price{
  width: 100px;
}
.inputNum{
  display: flex;
  width: 100px;
  border-radius: 3px;
  border: 1px solid #ccc;
  height: 30px;
  margin-left: 10px;
}
.addBtn,.reduceBtn{
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #f7f7f7;
}
.delete{
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #f7f7f7;
  border: 1px solid #ccc;
  color: #666;
  user-select: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 12px;
}
.delete:active{
  opacity: 0.8;
}
.TotalPrice{
  width: 100%;
  padding: 12px 20px;
  display: flex;
  justify-content: flex-end;
}
input{
  width:40px;
  height: 30px;
  background:none;
  outline:none;
  border:none;
  text-align: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
p{
  text-align: center;
}
</style>

<style lang="less"></style>
