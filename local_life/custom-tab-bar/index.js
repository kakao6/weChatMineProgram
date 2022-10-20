// custom-tab-bar/index.js
Component({
  // vant 组件库要求
  options:{
    styleIsolation:'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "首页",
        
        "iconPath": "../images/tab_transaction_normal@3x.png",
        "selectedIconPath": "../images/tab_transaction_selected@3x.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "../images/tabbarActivityNormal@3x.png",
        "selectedIconPath": "../images/tabbarActivitySelected@3x.png",
        "info":2
      },
      {
        "pagePath": "pages/contact/contact",
        "text": "联系我们",
        "iconPath": "../images/tabbarVipNormal@3x.png",
        "selectedIconPath": "../images/tabbarVipSelected@3x.png"
      }
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
    },
  }

  
  
})
