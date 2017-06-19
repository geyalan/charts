// 散点图表组件对象
var H5ComponentPoint = function(name,cfg){
	var component = new H5ComponentBase(name,cfg)
	var base = cfg.data[0][1]  //以第一个数据的比例大小作为100%

	$.each(cfg.data,function(idx,item){
		var point = $('<div class="point point_'+idx+'">')
		//测试
		// point.text(item[0]+'-'+item[1])
		
		// 设置文本和数据
		var name = $('<div class="name">'+item[0]+'</div>')
		var rate = $('<div class="per">'+(item[1]*100)+'%</div>')
		name.append(rate)
		point.append(name)

		var per = (item[1]/base*100)+'%'
		point.width(per).height(per)

		// 定义颜色
		if(item[2]){
			point.css('backgroundColor',item[2])
		}

		//定义位置
		if(item[3]!==undefined && item[4]){
			point.css('left',item[3]).css('top',item[4])
		}

		component.append(point)
	})
	return component
}

