let lyrics = `Nụ cười của Super Idol
Cũng không ngọt như cậu
Cái nắng chói chang giữa tháng 8
Cũng không tỏa nắng bằng cậu
Nhiệt tâm 105°C của cậu 
Như từng giọt nước cất thuần khiết
Cậu nào biết cậu đáng yêu nhường nào
Sau khi cậu té cậu lại đứng lên cười ngây ngô
Trước giờ cậu chưa từng dễ dàng chịu thất bại
Cậu luôn kiên quyết theo đuổi giấc mơ mà chưa từng thay đổi
Rất yên tâm khi cậu nói với tớ
Chớ sợ có tớ đây
Cứ giao hết cho tớ
Dũng cảm theo đuổi giấc mơ
Dáng vẻ kiên định ấy
Nụ cười của Super Idol cũng không ngọt như cậu
Cái nắng chói chang giữa tháng 8
Cũng không tỏa nắng bằng cậu
Nhiệt tâm 105°C của cậu
Như từng giọt nước cất thuần khiết
Nơi đây độc nhất vô nhị
Thời đại thuộc về tớ
Chẳng sợ thất bại cứ thử một lần
Sảng khoái nhiệt tình yêu thương
Nhiệt tâm 105°C của cậu
Như từng giọt nước cất thuần khiết
Nơi đây độc nhất vô nhị
Thời đại thuộc về tớ
Chẳng sợ thất bại cứ thử một lần
Sảng khoái nhiệt tình yêu thương
Nhiệt tâm 105°C của cậu
Như từng giọt nước cất thuần khiết
Uống một hớp lại một hớp, sức sống căng tràn
Lần nữa trở về trạng thái tốt nhất
Cậu nào biết cậu đáng yêu nhường nào
Sau khi cậu té cậu lại đứng lên cười ngây ngô
Trước giờ cậu chưa từng dễ dàng chịu thất bại
Cậu luôn kiên quyết theo đuổi giấc mơ mà chưa từng thay đổi
Rất yên tâm khi cậu nói với tớ
Chớ sợ có tớ đây
Cứ giao hết cho tớ
 Dũng cảm theo đuổi giấc mơ
Dáng vẻ kiên định ấy
Nụ cười của Super Idol cũng không ngọt như cậu
Cái nắng chói chang giữa tháng 8
Cũng không tỏa nắng bằng cậu
Nhiệt tâm 105°C của cậu
Như từng giọt nước cất thuần khiết
Nơi đây độc nhất vô nhị
Thời đại thuộc về tớ
Chẳng sợ thất bại cứ thử một lần
Sảng khoái nhiệt tình yêu thương
Nhiệt tâm 105°C của cậu
Như từng giọt nước cất thuần khiết
Nơi đây độc nhất vô nhị
Thời đại thuộc về tớ
Chẳng sợ thất bại cứ thử một lần
Sảng khoái nhiệt tình yêu thương
Như từng giọt nước cất thuần khiết
Uống một hớp lại một hớp, sức sống căng tràn
Lần nữa trở về trạng thái tốt nhất
Uống một hớp lại một hớp, sức sống căng tràn.`;
let newly = lyrics.split("\n");
var c = document.getElementById("nhac").innerHTML =""
for (let i = 1000,a = 0; i < newly.length*1000,a<newly.length; i += 1000,a++) {
  function run() { 
    document.getElementById("nhac").innerHTML += newly[a] + "<br>";  ;
  }
  setTimeout(run, i)
  console.log(i);
  console.log(a);
}
alert("bắt đầu");