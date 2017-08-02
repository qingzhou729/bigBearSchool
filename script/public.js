var IP = 'http://121.40.130.50:8088/BearDriving';
//var IP = 'http://192.168.0.101:8080/BearDriving';
var imgUrl = 'http://121.40.130.50';
//弹窗
function Toast(msg, duration) {
	duration = isNaN(duration) ? 3000 : duration;
	var html = "<div class='toast'  id='bb' >" + msg + "</div>"
	$("body").append(html)
	setTimeout(function() {
		var d = 0.5;
		$("#bb").addClass('toastT');
		setTimeout(function() {
			$("#bb").remove();
		}, d * 1000);
	}, duration);
}

//年龄
function ages(str) {
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if (r == null)
		return false;
	var d = new Date(r[1], r[3] - 1, r[4]);
	if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
		var Y = new Date().getFullYear();
		return ((Y - r[1]));
	}
	return ("输入的日期格式错误！");
}