// index.js
// 获取应用实例
import {createStoreBindings}from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

const app = getApp()

Page({
  data: {
    count:10,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  syncCount(e){
   console.log('syncCount')
   console.log(e.detail.value)
   this.setData({
     count: e.detail.value
   })
  },
  getChild(){
   const child = this.selectComponent('#ca')
   console.log(child)
  //  child.setData({
  //    count:child.properties.count+1
  //  })
   child.addCount()
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  btnHander1(e){
    console.log(e)
     this.updateNum1(e.target.dataset.step)
  },
  btnHander2(e){
    console.log(e)
    this.updateNum1(e.target.dataset.step)
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.storeBindings =createStoreBindings(this,{
      store,
      fields:['numaA','numB','sum'],
      actions:['updateNum1']
    })

  },
  onUnload(){
    this.storeBindings.destoryStoreBindings()
  },
  async getInfo(){
    const {data:res} = await wx.p.request({
       method:'GET',
       url: 'https://www.escook.cn/api/get',
       data:{
         name : 'zs',
         age: 20
       }
       
     })
     console.log(res)
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
