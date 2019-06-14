import canvas from './base/canvas.js'
import drawable from './base/drawableExt.js'
import tool from './base/tool'
import heartBeat from './heartbeat'

if (!window.XT) window.XT = {};

Object.assign(window.XT, {
	version: '0.0.2',
	canvas: canvas,
	drawable: drawable,
	heartBeat: heartBeat,
	test: function(dom){

		let layout = new canvas({
			container: dom
		})

		let container = new drawable({
			x: 0,
			y: 0,
			w: layout.width,
			h: layout.height
		})

		layout.add(container)


		let a = new drawable({
			name: 'a',
			x: 0,
			y: 0,
			w: 100,
			h: 100,
			stroke: '#000',
			line: [{x: 0, y: 0}, {x: 100, y: 100}]
		})

		let b = new drawable({
			name: 'b',
			x: 50,
			y: 50,
			w: 50,
			h: 10,
			text: {
				text: 'test words test words test words test words',
			}
		})

		container.add(a)
		a.add(b)
	},
	loop(callback, timeout){
		callback()
		setTimeout(() => this.loop.apply(this, arguments), timeout)
	},
	randomTest(){
		let l = 100000000
		let rst = {}
		let max = 100	
		while(l--){
			let r = tool.random(max)
			if(!rst[r]) rst[r] = 0
			rst[r]++
		}

		console.log(rst)
	},
	randomTest2(){
		let l = 10000
		let ratio = 1
		let max = 100
		let middle = (max - 1) / 2 - max / 8.4
		while(l--){
			ratio = ratio * (tool.random(max) + 1) / middle
		}
		console.log(ratio, middle)
	}
})