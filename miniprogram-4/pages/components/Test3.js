// pages/components/Test3.js
Component({
   // 生命周期函数
   lifetimes:{
    created(){
    console.log('created')
    },
    attached(){
      console.log('attached')
    }


   },
   // 组件所在页面的生命周期
   pageLifetimes:{
    show(){
      console.log('show')
      this._randomColor()
    },
    hide(){
      console.log('hide')
    },
    resize(){
      console.log('resize')
    }
   },

  /**
   * 组件的属性列表
   */
  properties: {

  },
  options:{
    pureDataPattern:/^_/
  },

  /**
   * 组件的初始数据
   */
  data: {
  _rgb:{
    r:0,
    g:0,
    b:0
  },
  fullcolor:'0,0,0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
 

  changeR(){
  this.setData({
    '_rgb.r':this.data._rgb.r+5 > 255 ? 255:this.data._rgb.r + 5
  })


  },
   changeG(){
     this.setData({
      '_rgb.g':this.data._rgb.g+5 > 255 ? 255:this.data._rgb.g + 5
     })
   },
   changeB(){
    this.setData({
      '_rgb.b':this.data._rgb.b+5 > 255 ? 255:this.data._rgb.b + 5
     })
   },
   _randomColor(){
     this.setData({
     _rgb:{
       r: Math.floor(Math.random()*256),
       g: Math.floor(Math.random()*256),
       b: Math.floor(Math.random()*256)
     }
     })
   }

  },
  observers:{
    // 'rgb.r,rgb.g,rgb.b':function(r,g,b){
    //    this.setData({
    //      fullcolor: `${r},${g},${b}`
    //    })
    // }
    '_rgb.**':function(obj){
        this.setData({
          fullcolor:`${obj.r},${obj.g},${obj.b}`
        })
    }
  }

})
