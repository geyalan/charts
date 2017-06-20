/* 基本图文组件对象 */
var H5ComponentBase = function(name,cxt){
	var cxt = cxt || {}
	// 设置唯一ID
	var id = ('h5_c_'+ Math.random()).replace('.','_')
	var cls = name + ' h5_component_' + cxt.type

	var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'"></div>')
	cxt.text && component.text(cxt.text)
	cxt.width && component.width(cxt.width/2)
	cxt.height && component.height(cxt.height/2)
	cxt.css && component.css(cxt.css)
	cxt.bg && component.css('backgroundImage','url('+cxt.bg+')')

	if(cxt.center === true){
		component.css({
			'left':'50%',
			'marginLeft':(cxt.width/4*-1)+'px', 
		})
	}

	component.on('onLoad',function(){
		component.addClass(cls+'_load').removeClass(cls+'_leave')
		cxt.animateIn && component.animate(cxt.animateIn)
		return false
	})

	component.on('onLeave',function(){
		component.addClass(cls+'_leave').removeClass(cls+'_load')
		cxt.animateOut && component.animate(cxt.animateOut)
		return false
	})

	return component
}