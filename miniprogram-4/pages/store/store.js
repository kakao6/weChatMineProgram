// 在这个文件中，专门来创建Store 的实例对象
import {action, observable} from 'mobx-miniprogram'
export const store = observable({
   numaA:1,
   numB:2,
   // 计算属性
   get sum(){
    return this.numaA + this.numB
   },
   updateNum1:action(function(step){
      this.numaA = this.numaA + step
   }),
   updateNum2:action(function(step){
      this.numB = this.numB + step
  }),


})