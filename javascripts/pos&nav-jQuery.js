// 页面加载完成后执行函数
$(document).ready(function(){
	// 监听页面滚动事件，页面发生滚动时执行函数
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var nav = $('#nav');
		var floors = $('#container').find('ul');
		var navId='';
		floors.each(function () {
			var f = $(this);
			var floorTop = f.offset().top;
			if (top > floorTop-200) {
				navId = '#' + f.attr('id');
				var navLi = nav.find("[href="+ navId +"]").parent();
				// 写作"[href='+navId+']"错误，因为它们是分开的字符串
				var current = nav.find('.current');
				if (current.attr('href') != navId) {
					current.removeClass('current');
					navLi.addClass('current');
				}
			} else {
				return false;
			}
		});
	});
});
