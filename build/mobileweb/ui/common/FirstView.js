//FirstView Component Constructor

var queViewArray = [];

function FirstView() {
  var QueDetailWindow = require('ui/common/QueDetailWindow');
  
  var mainBackgroundColor = "gray";
  var queWholeValue = [];
  
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
	  backgroundColor: mainBackgroundColor
	});
	
  var queHeight = Ti.Platform.displayCaps.platformHeight / 6;
  
  var pushButtonView = Ti.UI.createImageView({
    image: "/images/push_button_250_250.png",
    zIndex: 999
  });
  self.add(pushButtonView);
  
  var resetButtonView = Ti.UI.createImageView({
   image: "/images/reset.jpg",
   top: 10,
   right: 10,
   width: 50,
   height: 50,
   zIndex: 999
  });
  self.add(resetButtonView);
  
  var queIndex = 0;
  pushButtonView.addEventListener("click", function(e) {
    if (queIndex < 6) {
      var queValue = Math.random() >= 0.5 ? 1 : 0;
      console.log(queValue);
      queWholeValue.push(queValue);
      
      var options = {
        queIndex: queIndex,
        queHeight: queHeight,
        backgroundColor: mainBackgroundColor
      }
      var queView = createQueView(queValue, options);
      self.add(queView);
    } else if (queIndex == 6) { // if que == 6, xin hao dong
      // xin hao dong
      var haoDong = Math.floor(Math.random() * 6);
      highlightHao(haoDong);
      
      // reverse que lai, doc tu duoi len
      queWholeValue.reverse();
      // add hao dong vao queWholeValue
      queWholeValue.push(haoDong);
      console.log(queWholeValue.toString());
      
      // xin xong, chuyen sang window khac
      self.hide();
      var queWindow = new QueDetailWindow({
        data: queWholeValue
      });
      queWindow.open();
    }
    queIndex++;
  });
  
  resetButtonView.addEventListener("click", function(e) {
    queWholeValue = [];
    queIndex = 0;
    removeAllQueViews(self);
    queViewArray = [];  
  });
  
	return self;
}

function createQueView(queValue, options) {
  var queIndex = options["queIndex"];
  var queHeight = options["queHeight"] * 90 / 100;
  var backgroundColor = options["backgroundColor"];
  
  var _queView = Ti.UI.createView({
    top: queHeight * queIndex,
    height: queHeight,
    width: "100%",
    borderColor: backgroundColor,
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: queValue == 1 ? "black" : "white"
  });
  
  queViewArray.push(_queView);
  
  return _queView;
}

function removeAllQueViews(window) {
  for( var i = 0; i < queViewArray.length; i++) {
    var _queView = queViewArray[i];
    window.remove(_queView);
  }
}

function highlightHao(index) {
  var _queView = queViewArray[index];
  _queView.backgroundColor = "#900";
}

module.exports = FirstView;
