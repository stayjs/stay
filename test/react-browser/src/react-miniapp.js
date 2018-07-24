class A extends React.Component{
  constructor(){
    this.state = {
      motto: 'Hello World',
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  }
  componentWillMount(){

  }
  componentDidUpdate(){

  }
  shouldComponentUpdate(){

  }
  componentDidMount(){
    onload()
  }
  render(){
    return(
      <div>
        
      </div>
    )
  }
}

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 
   onload()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
