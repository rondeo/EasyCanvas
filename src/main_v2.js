import Container from './drawable/container';
import Line from './drawable/line';
import Text from './drawable/text';
import Rect from './drawable/rect';
import Point from './drawable/point';

if (!window.XT) window.XT = {};

Object.assign(window.XT, {
	version: '0.0.2',
	test: function(dom){
		const container = new Container({
			el: dom
		})

		let l1 = new Line({
			points: [{x: 0, y: 0}, {x: 100, y: 100}],
			strokeStyle: '#000'
		});
		container.add(l1);

		let time = 1000;

		let t1 = new Text({
			text: 'test words test words test words test words',
			x: 100,
			y: 100,
			w: 300,
			h: 100,
			strokeStyle: '#000'
		});
		setTimeout(() => {
			l1.add(t1)
		}, time);

		let p1 = new Point({
			x: 200,
			y: 200,
			r: 5,
			fillStyle: 'red'
		});
		setTimeout(() => {
			l1.add(p1);
			p1.set('x', 0, 1000);
		}, time * 2);

		let r1 = new Rect({
			x: 200,
			y: 200,
			w: 200,
			h: 200,
			strokeStyle: '#000'
		})
		setTimeout(() => {
			l1.add(r1);
			r1.set('x', 0, 1000);
		}, time * 3);

		setTimeout(() => {
			r1.rotate(50);
		}, time * 4)


		console.log(l1)
		window.renderCanvas = function renderCanvas(d){
			document.body.appendChild(d._cacheCanvas)
			if(d._children){
				d._children.forEach(c => renderCanvas(c))
			}
		}
	}
})