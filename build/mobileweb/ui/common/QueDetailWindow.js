/**
 * @author Minh T. Reigen
 */
function QueDetailWindow(data) {
  var self = Ti.UI.createWindow({
    backgroundColor: "blue"
  });
  
  var que = dictionary["can_can"]["1"];
  var title = que["title"];
  var name = que["name"];
  var loi_ban = que["loi_ban"];
  
  var lblTitle = Ti.UI.createLabel({
    text: title
  });
  var lblName = Ti.UI.createLabel({
    text: name
  });
  var lblLoiBan = Ti.UI.createLabel({
    text: loi_ban
  });
  
  self.add(lblTitle);
  self.add(lblName);
  self.add(lblLoiBan);
  
  return self;
}

function getContent(queWholeValue) {
  
}

var dictionary = {
  "can_can": {
    "1": {
      name: "QUẺ SỐ 001 - THƯỢNG THƯỢNG",
      title: "Bát Thuần Càn",
      tho_tau: "Thiên môn nhất quải bảng, Dự định đoạt tiêu nhân. Mã tô phường thảo địa, Thu cao thính lọc minh.",
      tho_viet: "Cửa trời treo bảng đề danh, Càng treo giá ngọc, càng dành phẩm tiên. Âm vang ngựa thét băng miền, Cuối thu ồ ạt vẫn truyền tiếng nai.",
      loi_ban: "Quẻ này chủ: Con Rồng hiện trên ruộng, rất lợi khi gặp người đại nhân quân tử. Được thì suốt ngày nơm nớp, chiều tới thì lo lắng giữ gìn. Bởi thế nên lấy đó mà tự cường ở trên thì không kêu, ở dưới thì không lo. Thật là Đại cát vậy. Quẻ này cầu bất cứ việc gì cũng đều được may mắn, vì câu thứ ba tả rằng 'Nay người xin cầu như con ngựa hí ngoài đồng cỏ xanh tươi' và câu thứ tư còn thêm rằng 'Cuối thu được nghe tiếng nay'. Cảnh thanh thản an nhàn biết bao, vậy còn gì hơn nữa. Ý quẻ muốn nói rằng: cầu xin việc gì đều toại nguyện. Buổi phú quý, vinh hoa ắt đến, và hoá rủi thành may, đó là một quẻ đại cát, cầu danh cầu việc đắt thành vậy. Hơn nữa, câu thứ nhất đã nói rất rõ rồi 'Cửa trời treo bảng đề danh', cầu danh, cầu mưu, cầu lợi đều đạt. Còn lo gì nữa. Số hên: 10, 11, 21, 31, 1. Nếu muốn đánh số hên, đều đạt thành mỹ mãn 1 quẻ tốt cho việc cầu lợi."
    },
   "2": {
      name: "QUẺ SỐ 001 - THƯỢNG THƯỢNG",
      title: "Bát Thuần Càn",
      tho_tau: "Thiên môn nhất quải bảng, Dự định đoạt tiêu nhân. Mã tô phường thảo địa, Thu cao thính lọc minh.",
      tho_viet: "Cửa trời treo bảng đề danh, Càng treo giá ngọc, càng dành phẩm tiên. Âm vang ngựa thét băng miền, Cuối thu ồ ạt vẫn truyền tiếng nai.",
      loi_ban: "Quẻ này chủ: Con Rồng hiện trên ruộng, rất lợi khi gặp người đại nhân quân tử. Được thì suốt ngày nơm nớp, chiều tới thì lo lắng giữ gìn. Bởi thế nên lấy đó mà tự cường ở trên thì không kêu, ở dưới thì không lo. Thật là Đại cát vậy. Quẻ này cầu bất cứ việc gì cũng đều được may mắn, vì câu thứ ba tả rằng 'Nay người xin cầu như con ngựa hí ngoài đồng cỏ xanh tươi' và câu thứ tư còn thêm rằng 'Cuối thu được nghe tiếng nay'. Cảnh thanh thản an nhàn biết bao, vậy còn gì hơn nữa. Ý quẻ muốn nói rằng: cầu xin việc gì đều toại nguyện. Buổi phú quý, vinh hoa ắt đến, và hoá rủi thành may, đó là một quẻ đại cát, cầu danh cầu việc đắt thành vậy. Hơn nữa, câu thứ nhất đã nói rất rõ rồi 'Cửa trời treo bảng đề danh', cầu danh, cầu mưu, cầu lợi đều đạt. Còn lo gì nữa. Số hên: 10, 11, 21, 31, 1. Nếu muốn đánh số hên, đều đạt thành mỹ mãn 1 quẻ tốt cho việc cầu lợi."
    }
  }
}
module.exports = QueDetailWindow;
