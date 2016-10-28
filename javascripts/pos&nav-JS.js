window.onload = function () {
	window.onscroll = function () {
		var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
		// 若写作top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
		// 则FireFox、IE下正常，Chrome下，top始终为0；
		var navLi = document.getElementById('nav').getElementsByTagName('li');
		var floor = document.getElementById('container').getElementsByTagName('ul');
		var floorId = '';
		console.log(document.documentElement.scrollTop);
		console.log(document.body.scrollTop);
		for (var i = 0; i < floor.length; i++) {
			if (top > floor[i].offsetTop-200) {
				floorId = floor[i].id;
			} else {
				break;
			}
		}
		if (floorId) {
			for (var j = 0; j < navLi.length; j++) {
				var aHref = navLi[j].querySelector('a').href.split('#');
				if (aHref[aHref.length-1] != floorId) {
					navLi[j].className = '';
				} else {
					navLi[j].className = 'current';
				}
			}
		}
	}
}