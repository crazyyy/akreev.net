(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_Garage_atlas_P_", frames: [[0,0,222,37]]},
		{name:"300x250_Garage_atlas_NP_", frames: [[0,396,336,100],[0,132,336,130],[0,0,336,130],[0,264,336,130]]}
];


// symbols:



(lib.agev = function() {
	this.initialize(ss["300x250_Garage_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgtexture = function() {
	this.initialize(ss["300x250_Garage_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.garage1 = function() {
	this.initialize(ss["300x250_Garage_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.garage2 = function() {
	this.initialize(ss["300x250_Garage_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.garage3 = function() {
	this.initialize(ss["300x250_Garage_atlas_NP_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.garage3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc3, new cjs.Rectangle(0,0,336,130), null);


(lib.pc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.garage2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(0,0,336,130), null);


(lib.pc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.garage1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(0,0,336,130), null);


(lib.NAPlogosvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjNFZIAAqxIGbAAIAABEIlTAAIAADYIFPAAIAABDIlPAAIAAEOIFPAAIAABEg");
	this.shape.setTransform(26.7202,0.3837,0.1359,0.1359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkXDdQgpgtgWg5QgXg6ABg9QAAhdAxhQQAxhSBVgsQBcgvBkACQBWgBBOAfQBTAhBDBAIABABIgBAAIg2AxIAAAAQg3g1hGgeQhAgbhFgBQhQAAhIAmQhHAjgpBDQgoA+AABKQAABKApBBQAqBDBIAlQBLAnBUgBQBqAABIg5QAjgaAXgmQAWglAHgrIjcAAIAAhDIEqAAIAAABQgBCZheBaQhcBaieAAQi9AAhvh8g");
	this.shape_1.setTransform(16.8496,0.3899,0.1359,0.1359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADVFZIjUoJIjUIJIgSAAIjJqyIBLAAICRHxIDMnxIARAAIDKHxICPnxIBLAAIjIKyg");
	this.shape_2.setTransform(-6.9074,0.3871,0.1359,0.1359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjNFZIAAqxIGbAAIAABEIlTAAIAADYIFQAAIAABDIlQAAIAAEOIFQAAIAABEg");
	this.shape_3.setTransform(-16.8866,0.3837,0.1359,0.1359);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AELFZIndoJIAAIJIhIAAIAAqxIAPAAIHeIKIAAoKIBIAAIAAKxg");
	this.shape_4.setTransform(-25.7003,0.3837,0.1359,0.1359);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACkJfInTu7IAAkCIJfS9g");
	this.shape_5.setTransform(8.865,-0.0071,0.1359,0.1359);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AHSJfInSu7InSO7IiLAAIJdy9IJeS9g");
	this.shape_6.setTransform(4.7571,-0.0071,0.1359,0.1359);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AHTJfInTu7InSO7IiLAAIJdy9IJeS9g");
	this.shape_7.setTransform(4.7537,-0.0071,0.1359,0.1359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-8.2,59,16.5);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E59C43","#FBF761","#D7950F","#FBF761","#E29C18","#FBF761"],[0,0.086,0.243,0.478,0.718,1],-91.4,-15.1,100.5,15.1).s().p("AzvCeIAAk7MAnfAAAIAAABIgDAAIAAE6g");
	this.shape.setTransform(126.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(0,0,252.8,31.5), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAlIgPgyIgPAyIgSAAIgXhJIARAAIAPAzIAQgzIARAAIAPAzIAPgzIARAAIgVBJg");
	this.shape.setTransform(25.85,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAiQgIgGgGgIQgFgJAAgLQAAgKAFgJQAGgJAIgFQAJgFAKAAQALAAAJAFQAIAFAGAJQAFAJAAAKQAAALgFAJQgGAIgIAGQgJAFgLAAQgKAAgJgFgAgKgTQgGADgCAFQgDAFAAAGQAAAGADAGQACAFAGADQAEADAGAAQAGAAAFgDQAGgDACgFQADgGABgGQgBgGgDgFQgCgFgGgDQgFgDgGAAQgGAAgEADg");
	this.shape_1.setTransform(15.35,-0.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAlIgigtIAAAtIgRAAIAAhJIAOAAIAiAtIAAgtIARAAIAABJg");
	this.shape_2.setTransform(6.675,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAlIAAhJIAfAAQAIAAAGADQAGADADAFQADAGAAAGQAAAIgDAFQgDAEgGAEQgGACgIAAIgPAAIAAAbgAgMgEIAPAAQAFAAACgDQADgBAAgFQAAgDgDgCQgCgCgFgBIgPAAg");
	this.shape_3.setTransform(-3.75,-0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAiQgIgGgGgIQgFgJAAgLQAAgKAFgJQAGgJAIgFQAJgFAKAAQALAAAJAFQAIAFAGAJQAFAJAAAKQAAALgFAJQgGAIgIAGQgJAFgLAAQgKAAgJgFgAgKgTQgGADgCAFQgDAFAAAGQAAAGADAGQACAFAGADQAEADAGAAQAGAAAFgDQAGgDACgFQADgGABgGQgBgGgDgFQgCgFgGgDQgFgDgGAAQgGAAgEADg");
	this.shape_4.setTransform(-12.1,-0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAlIAAgdIgfAAIAAAdIgQAAIAAhJIAQAAIAAAdIAfAAIAAgdIAQAAIAABJg");
	this.shape_5.setTransform(-20.725,-0.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAkQgHgCgEgFQgEgEgBgGIAQgFQAAACACACIAGAEQADABAEAAQAFAAAEgCQADgCAAgDQAAgDgCgBIgGgDIgHgCQgIgCgGgDQgFgCgDgEQgDgEAAgHQAAgHAEgGQADgFAHgDQAGgCAGAAQAIAAAGACQAGADAEAEQAEAFACAFIgQAGQgBgEgEgDQgDgDgGAAQgEAAgDACQgDACAAADQAAADADABIAFADIAFABQAKADAGADQAGACADAEQACAFAAAGQAAAHgDAGQgEAFgHADQgGADgJAAQgIAAgGgDg");
	this.shape_6.setTransform(-28.425,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0001").s().p("AoqDDQhkAAAAhkIAAi9QAAhkBkAAIRVAAQBkAAAABkIAAC9QAABkhkAAg");
	this.shape_7.setTransform(-0.0109,0.0271,0.6342,0.6342);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-41.5,-12.3,83.1,24.700000000000003), null);


(lib.UPTO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtB1IAAi1IAuAAIAAAOQAGgIAJgFIAAAAQAKgFANAAIAAAAQARABANAIIAAAAQANAJAIAQIAAAAQAIAPAAATIAAAAQgBAUgIAQIAAAAQgIAPgNAJIAAAAQgNAJgRAAIAAAAQgMAAgJgFIAAAAQgKgEgGgIIAAAAIAABBgAq4gRQgHAHAAAKIAAAAQAAALAHAIIAAAAQAHAHALAAIAAAAQAKAAAHgHIAAAAQAHgIAAgLIAAAAQAAgKgHgHIAAAAQgGgIgLAAIAAAAQgLAAgHAIgAC6AzIBvinIAdATIhuCogAHtA5QgVgMgMgVIAAAAQgMgVAAgZIAAAAQAAgaAMgVIAAAAQAMgVAVgMIAAAAQAVgMAagBIAAAAQAaABAVAMIAAAAQAVAMAMAVIAAAAQAMAVABAaIAAAAQgBAZgMAVIAAAAQgMAVgVAMIAAAAQgVAMgaAAIAAAAQgaAAgVgMgAIHg8QgJAGgGAJIAAAAQgFAKAAANIAAAAQAAAMAFAKIAAAAQAGAJAJAGIAAAAQAKAFALABIAAAAQAMgBAJgFIAAAAQAKgGAFgJIAAAAQAFgKAAgMIAAAAQAAgNgFgKIAAAAQgFgJgKgGIAAAAQgJgGgMAAIAAAAQgLAAgKAGgAEoA/QgLgGgGgLIAAAAQgGgKgBgOIAAAAQABgNAGgJIAAAAQAGgLALgGIAAAAQALgGAMAAIAAAAQANAAALAGIAAAAQAKAGAHALIAAAAQAGAJAAANIAAAAQAAAOgGAKIAAAAQgHALgKAGIAAAAQgLAGgNAAIAAAAQgMAAgLgGgAEzAKQgFAFgBAHIAAAAQABAIAFAFIAAAAQAFAFAHAAIAAAAQAIAAAFgFIAAAAQAFgFAAgIIAAAAQAAgHgFgFIAAAAQgFgFgIAAIAAAAQgHAAgFAFgAASA6QgQgMgJgVIAAAAQgKgVAAgaIAAAAQAAgcAKgUIAAAAQAJgVAQgMIAAAAQARgMAWAAIAAAAQAWAAARAMIAAAAQAQAMAKAVIAAAAQAKAUAAAcIAAAAQAAAagKAVIAAAAQgKAVgQAMIAAAAQgRALgWAAIAAAAQgWAAgRgLgAAmg4QgHANAAAVIAAAAQAAAVAHAMIAAAAQAHAMAMAAIAAAAQAMAAAHgNIAAAAQAHgLAAgVIAAAAQAAgVgHgNIAAAAQgHgMgMgBIAAAAQgMABgHAMgAh/A/QgOgHgKgLIAAAAQgJgMgDgRIAAAAIArgNQgBAKAHAGIAAAAQAHAHALAAIAAAAQAJAAAGgFIAAAAQAGgEAAgIIAAAAQAAgGgGgEIAAAAQgGgEgJAAIAAAAIgUAAIAAgmIAUAAQAIAAAFgEIAAAAQAFgEAAgGIAAAAQAAgGgGgEIAAAAQgFgEgIAAIAAAAQgKAAgFAFIAAAAQgGAGAAAIIAAAAIgrgLQADgQAJgMIAAAAQAKgLANgHIAAAAQAOgGARAAIAAAAQARAAAPAHIAAAAQAOAGAJAMIAAAAQAJAMAAAQIAAAAQAAAMgGAKIAAAAQgGAKgLAGIAAAAQANAGAHALIAAAAQAHAJAAAOIAAAAQAAAQgKAMIAAAAQgJAMgPAHIAAAAQgPAGgTAAIAAAAQgRAAgPgGgAlUA8QgQgJgJgQIAAAAQgKgPAAgUIAAAAQAAgSAKgQIAAAAQAJgPAQgJIAAAAQAQgJAUgBIAAAAQATABAQAJIAAAAQAQAJAJAPIAAAAQAJAQABASIAAAAQgBAUgJAPIAAAAQgJAQgQAJIAAAAQgQAJgTAAIAAAAQgUAAgQgJgAlCgRQgHAHAAAKIAAAAQAAAMAHAHIAAAAQAHAHALAAIAAAAQAKAAAHgHIAAAAQAHgHAAgMIAAAAQAAgKgHgHIAAAAQgHgIgKAAIAAAAQgLAAgHAIgAt6A7QgRgKgKgTIAAAAQgJgSAAgYIAAAAIAAhjIAwAAIAABjQAAAPAIAKIAAAAQAIAJANAAIAAAAQAOAAAHgJIAAAAQAIgKAAgPIAAAAIAAhjIAwAAIAABjQAAAYgJASIAAAAQgKATgRAKIAAAAQgSAKgXAAIAAAAQgXAAgSgKgAMhBBIAAiwIB+AAIAAArIhOAAIAAAeIA0AAIAAAnIg0AAIAABAgAKPBBIAAiwIB+AAIAAArIhOAAIAAAeIA0AAIAAAnIg0AAIAABAgAnjBBIAAiBIgtAAIAAgvICMAAIAAAvIgtAAIAACBgACrgbQgLgHgGgKIAAAAQgHgLAAgNIAAAAQAAgNAHgLIAAAAQAGgKALgGIAAAAQAKgHANAAIAAAAQANAAAKAHIAAAAQALAGAGAKIAAAAQAGALABANIAAAAQgBANgGALIAAAAQgGAKgLAHIAAAAQgKAGgNAAIAAAAQgNAAgKgGgAC2hQQgGAEAAAIIAAAAQAAAIAGAFIAAAAQAFAFAHAAIAAAAQAHAAAFgFIAAAAQAFgFAAgIIAAAAQAAgIgFgEIAAAAQgFgFgHgBIAAAAQgHABgFAFg");
	mask.setTransform(98.5248,19.125);

	// Слой_1
	this.instance = new lib.gradient();
	this.instance.parent = this;
	this.instance.setTransform(244.4,16.6,0.7306,1,180,0,0,126.4,15.8);

	this.instance_1 = new lib.gradient();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.25,16.7,0.7306,1,0,0,0,126.4,15.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UPTO, new cjs.Rectangle(2.6,0.9,191.4,31.5), null);


// stage content:
(lib._300x250_Garage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_821 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(821).call(this.frame_821).wait(1));

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape.setTransform(149.9993,124.9994,0.8929,0.8929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.875)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_1.setTransform(150,125);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.749)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_2.setTransform(150,125);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.624)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_3.setTransform(150,125);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.502)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_4.setTransform(150,125);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,51,51,0.376)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_5.setTransform(150,125);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,51,51,0.251)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_6.setTransform(150,125);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,51,51,0.125)").s().p("A30UZMAAAgoxMAvpAAAMAAAAoxg");
	this.shape_7.setTransform(150,125);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,51,51,0)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_8.setTransform(149.9993,124.9994,0.8929,0.8929);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(207).to({_off:false},0).wait(1).to({_off:true},1).wait(207).to({_off:false},0).wait(1).to({_off:true},1).wait(207).to({_off:false},0).wait(1).to({_off:true},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(192));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(187));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).to({_off:true},1).wait(191).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(191).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(191).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(186));

	// Слой_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.498,1],56.6,2.6,197.9,102.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_9.setTransform(149.9993,223.2132,0.8929,0.8929);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.498,1],44.7,0.9,170.6,89.8).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_10.setTransform(150,223.225);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],38.8,-0.6,164.5,88.2).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_11.setTransform(150,223.225);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],32.9,-1.9,158.5,86.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_12.setTransform(150,223.225);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],27,-3.3,152.3,85.2).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_13.setTransform(150,223.225);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],21.1,-4.7,146.2,83.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_14.setTransform(150,223.225);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],15.2,-6.1,140.2,82.1).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_15.setTransform(150,223.225);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],9.3,-7.5,134.1,80.6).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_16.setTransform(150,223.225);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],3.4,-8.9,128,79.1).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_17.setTransform(150,223.225);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-2.5,-10.3,121.9,77.5).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_18.setTransform(150,223.225);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-8.3,-11.7,115.8,76).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_19.setTransform(150,223.225);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-14.3,-13.1,109.7,74.4).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_20.setTransform(150,223.225);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-20.2,-14.5,103.6,72.9).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_21.setTransform(150,223.225);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-26,-15.9,97.5,71.4).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_22.setTransform(150,223.225);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-31.9,-17.3,91.4,69.8).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_23.setTransform(150,223.225);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-37.8,-18.6,85.4,68.3).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_24.setTransform(150,223.225);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-43.7,-20.1,79.3,66.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_25.setTransform(150,223.225);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-49.6,-21.5,73.2,65.2).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_26.setTransform(150,223.225);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-55.5,-22.8,67.1,63.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_27.setTransform(150,223.225);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-61.4,-24.2,61,62.2).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_28.setTransform(150,223.225);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-67.3,-25.6,54.9,60.6).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_29.setTransform(150,223.225);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-73.2,-27,48.8,59.1).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_30.setTransform(150,223.225);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-79.1,-28.4,42.7,57.6).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_31.setTransform(150,223.225);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-85,-29.8,36.6,56.1).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_32.setTransform(150,223.225);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-90.9,-31.2,30.5,54.5).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_33.setTransform(150,223.225);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-96.7,-32.6,24.5,53).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_34.setTransform(150,223.225);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-102.6,-34,18.4,51.4).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_35.setTransform(150,223.225);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-108.5,-35.4,12.3,49.9).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_36.setTransform(150,223.225);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-114.4,-36.8,6.2,48.4).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_37.setTransform(150,223.225);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-120.3,-38.2,0.1,46.8).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_38.setTransform(150,223.225);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-126.2,-39.6,-6,45.3).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_39.setTransform(150,223.225);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-132.1,-41,-12.1,43.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_40.setTransform(150,223.225);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-138,-42.3,-18.2,42.3).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_41.setTransform(150,223.225);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-143.9,-43.7,-24.3,40.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_42.setTransform(150,223.225);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-149.8,-45.1,-30.4,39.2).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_43.setTransform(150,223.225);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-155.7,-46.5,-36.5,37.7).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_44.setTransform(150,223.225);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-161.6,-47.9,-42.6,36.1).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_45.setTransform(150,223.225);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-167.4,-49.2,-48.6,34.6).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_46.setTransform(150,223.225);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-173.3,-50.7,-54.7,33).s().p("AlFBiQgKAAgLgMQgMgNgBgMIAAh8QABgMAMgLQALgLAKAAIKKAAQALAAAMALQAMALgBAMIAAB3QAAAMgLAPQgMAPgJAAg");
	this.shape_47.setTransform(150,223.225);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-200.7,-58.3,-68.1,35.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_48.setTransform(149.9993,223.2132,0.8929,0.8929);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(14).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(15).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(16).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(17).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(18).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(19).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(20).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(21).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(22).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(23).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(24).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(25).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(26).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(27).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(28).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(29).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(30).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(31).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(32).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(33).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(34).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(35).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(36).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(37).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(38).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(39).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(40).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(41).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(42).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(43).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(44).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(45).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(46).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(47).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(48).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(49).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(50).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(51).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(52).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(53).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(4));

	// logo
	this.instance = new lib.NAPlogosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.95,13.2,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({startPosition:0},0).wait(209).to({startPosition:0},0).wait(209).to({startPosition:0},0).wait(195));

	// t11
	this.instance_1 = new lib.UPTO();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.05,178.9,0.8929,0.8929,0,0,0,98.4,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(822));

	// t12
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgRAgQgIgFgCgJIANgEQABAFAEACQAEAEAFAAIAHgBIAFgEQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgDgEgDIgKgDIgKgFQgFgCgEgDQgDgFAAgHQAAgGADgFQADgFAGgDQAGgCAGAAQALAAAHAFQAGAFACAJIgMADQgBgEgEgDQgDgDgGAAQgEAAgDADQgDACAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIAEADIAGACIAIADIAIADQAEACACAEQADAEAAAFQAAAHgEAFQgDAFgHADQgGACgIAAQgKAAgHgFg");
	this.shape_49.setTransform(226.375,202.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAMAvQgLAAgEgFQgFgGAAgKIAAgkIgNAAIAAgNIANAAIAAgTIANgEIAAAXIARAAIAAANIgRAAIAAAjQAAAEACADQACACAEAAIAJAAIAAANg");
	this.shape_50.setTransform(220.25,200.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAgQgIgFgEgIQgEgJgBgKQABgJAEgJQAEgIAIgFQAHgFAKAAQAIAAAHADQAHADAEAHQAFAHACALIAAAFIAAAHIg0AAQACAIAFAEQAFAFAHAAQAGAAAFgDQAGgDACgFIAMAHQgEAIgJAFQgIAEgKAAQgKAAgHgFgAATgFQAAgGgDgEQgDgEgEgCQgEgCgFAAQgHABgEAEQgFAFgCAIIAlAAIAAAAg");
	this.shape_51.setTransform(213.525,202.075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AASAkIAAglQgBgLgEgFQgFgFgHAAQgFAAgEADQgFADgCAFQgCAGAAAFIAAAkIgOAAIAAhGIAOAAIAAALQAEgGAFgDQAHgDAGAAQAIAAAGADQAGAFADAHQAEAGAAAKIAAAog");
	this.shape_52.setTransform(205.25,202);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGAzIAAhGIANAAIAABGgAgFgiQgDgDgBgEQABgEADgDQACgCADAAQAEAAACACQADADABAEQgBAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_53.setTransform(198.9,200.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAvQgGgDgDgGIAAALIgOAAIAAhjIAOAAIAAAnQADgFAGgDQAFgDAHgBQAJABAHAEQAIAFAEAIQAEAIAAALQAAALgEAIQgEAIgIAFQgHAFgJAAQgHAAgFgEgAgKgGQgEADgDAEQgDAGABAHQgBAGADAGQADAFAEADQAFADAFAAQAGAAAEgDQAFgDACgFQADgGAAgGQAAgHgDgGQgCgEgFgDQgEgDgGAAQgFAAgFADg");
	this.shape_54.setTransform(192.75,200.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAjQgFgDgDgFQgDgFAAgGQAAgHADgFQADgEAFgCIAMgEIAVgEQAAgGgEgDQgDgEgHAAQgEAAgFADQgFACgCAFIgMgIQAFgHAHgEQAIgEAHAAQAJAAAHADQAHAEADAHQAEAGAAAJIAAArIgOAAIAAgKQgEAFgFADQgGADgHAAQgGAAgGgCgAgDAFQgFABgDACQgEADAAAEQAAAEADADQAEACAFAAQAFAAAEgCQAEgCADgEQADgEAAgGIAAgFg");
	this.shape_55.setTransform(184.175,202.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVAsQgLgHgHgMQgHgKAAgPQAAgOAHgLQAHgLALgHQAMgHANAAQAOAAALAHQALAFAHAMIgNAHQgFgIgHgEQgIgFgKABQgJAAgIAEQgIAFgFAJQgFAHAAAKQAAAKAFAJQAFAHAIAFQAIAFAJABQAKAAAIgFQAHgFAFgHIANAIQgHAKgLAHQgLAGgOAAQgNgBgMgGg");
	this.shape_56.setTransform(175.325,200.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQAgQgIgFgEgIQgEgJgBgKQABgJAEgJQAEgIAIgFQAHgFAKAAQAIAAAHADQAHADAEAHQAFAHACALIAAAFIAAAHIg0AAQACAIAFAEQAFAFAHAAQAGAAAFgDQAGgDACgFIAMAHQgEAIgJAFQgIAEgKAAQgKAAgHgFgAATgFQAAgGgDgEQgDgEgEgCQgEgCgFAAQgHABgEAEQgFAFgCAIIAlAAIAAAAg");
	this.shape_57.setTransform(161.575,202.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgRAwQgIgDgGgGIALgKQAEAEAFADQAFACAFAAQAJAAAGgGQAGgFAAgLIAAgGQgDAGgFADQgGAEgHAAQgJAAgIgFQgHgFgEgIQgEgHAAgLQAAgLAEgJQAEgIAIgFQAHgEAJgBQAHABAFADQAGADADAFIAAgKIAOAAIAABCQAAAKgFAIQgEAIgIAFQgIAEgKAAQgIAAgIgEgAgJgiQgFADgCAFQgDAGAAAHQAAAGADAGQACAEAFADQAEADAFAAQAHAAAEgDQAFgDACgEQADgGAAgGQAAgHgDgGQgCgFgFgDQgEgDgHAAQgFAAgEADg");
	this.shape_58.setTransform(153.075,203.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAjQgFgDgDgFQgDgFAAgGQAAgHADgFQADgEAFgCIAMgEIAVgEQAAgGgEgDQgDgEgHAAQgEAAgFADQgFACgCAFIgMgIQAFgHAHgEQAIgEAHAAQAJAAAHADQAHAEADAHQAEAGAAAJIAAArIgOAAIAAgKQgEAFgFADQgGADgHAAQgGAAgGgCgAgDAFQgFABgDACQgEADAAAEQAAAEADADQAEACAFAAQAFAAAEgCQAEgCADgEQADgEAAgGIAAgFg");
	this.shape_59.setTransform(144.925,202.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgSAkIAAhGIANAAIAAAKQAEgFAFgDQAGgDAJAAIAAAOQgJAAgFADQgFADgCAFQgCAEgBAGIAAAkg");
	this.shape_60.setTransform(138.9,202);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgSAjQgFgDgDgFQgDgFAAgGQAAgHADgFQADgEAFgCIAMgEIAVgEQAAgGgEgDQgDgEgHAAQgEAAgFADQgFACgCAFIgMgIQAFgHAHgEQAIgEAHAAQAJAAAHADQAHAEADAHQAEAGAAAJIAAArIgOAAIAAgKQgEAFgFADQgGADgHAAQgGAAgGgCgAgDAFQgFABgDACQgEADAAAEQAAAEADADQAEACAFAAQAFAAAEgCQAEgCADgEQADgEAAgGIAAgFg");
	this.shape_61.setTransform(131.875,202.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgHgMQgHgKAAgPQAAgOAHgLQAHgLALgHQAMgHANAAQAOAAALAHQALAFAHAMIgNAHQgFgIgIgEQgHgFgKABQgJAAgIAEQgIAFgFAJQgFAHAAAKQAAAKAFAJQAEAHAIAFQAIAFAKABQAJAAAHgEQAHgDAEgGQAEgGABgGIgiAAIAAgOIAxAAIAAAGQAAAOgGALQgHAKgKAGQgLAGgNAAQgOgBgLgGg");
	this.shape_62.setTransform(122.325,200.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAMAvQgKAAgFgFQgFgGgBgKIAAgkIgMAAIAAgNIAMAAIAAgTIAOgEIAAAXIARAAIAAANIgRAAIAAAjQAAAEACADQACACAEAAIAJAAIAAANg");
	this.shape_63.setTransform(109.6,200.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPAgQgJgFgEgIQgFgJABgKQgBgKAFgIQAEgIAJgFQAHgFAKAAQAKAAAIAEQAJAFAEAIIgLAHQgEgFgFgDQgFgDgFAAQgGAAgFADQgFAEgCAFQgEAFAAAGQAAAHAEAFQACAFAFADQAFAEAGAAQAFAAAFgDQAFgDAEgFIALAHQgEAIgJAFQgIAEgKAAQgKAAgHgFg");
	this.shape_64.setTransform(103.05,202.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgQAgQgIgFgEgIQgEgJgBgKQABgJAEgJQAEgIAIgFQAHgFAKAAQAIAAAHADQAHADAEAHQAFAHACALIAAAFIAAAHIg0AAQACAIAFAEQAFAFAHAAQAGAAAFgDQAGgDACgFIAMAHQgEAIgJAFQgIAEgKAAQgKAAgHgFgAATgFQAAgGgDgEQgDgEgEgCQgEgCgFAAQgHABgEAEQgFAFgCAIIAlAAIAAAAg");
	this.shape_65.setTransform(95.075,202.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_66.setTransform(89.15,200.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgQAgQgIgFgEgIQgEgJgBgKQABgJAEgJQAEgIAIgFQAHgFAKAAQAIAAAHADQAHADAEAHQAFAHACALIAAAFIAAAHIg0AAQACAIAFAEQAFAFAHAAQAGAAAFgDQAGgDACgFIAMAHQgEAIgJAFQgIAEgKAAQgKAAgHgFgAATgFQAAgGgDgEQgDgEgEgCQgEgCgFAAQgHABgEAEQgFAFgCAIIAlAAIAAAAg");
	this.shape_67.setTransform(83.175,202.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgRAwQgIgEgGgFQgFgGgCgIIAPgFQACAHAHAFQAHAFAJAAQAKAAAGgFQAFgEABgHQgBgEgDgDQgDgDgGgBIgMgEIgMgDQgFgBgFgDQgFgDgCgEQgDgGAAgHQAAgIAEgHQAFgGAIgFQAHgDAKAAQAKAAAHADQAIADAFAGQAFAGACAIIgPAFQgBgHgGgFQgGgFgKABQgEAAgFABQgEACgDADQgCADAAAEQAAAFADADIAIAEIAKAEIANACQAGACAFACQAFADADAFQADAFABAIQgBAJgEAGQgFAHgIAEQgJAEgLAAQgKAAgIgDg");
	this.shape_68.setTransform(74.525,200.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},209).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},209).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},209).wait(195));

	// btn
	this.instance_2 = new lib.agev();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,24,0.8035,0.8035);

	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.95,223.15,0.8928,0.8928);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},209).to({state:[{t:this.instance_3},{t:this.instance_2}]},209).to({state:[{t:this.instance_3},{t:this.instance_2}]},209).wait(195));

	// plate
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgJADgHQADgHAGgEQAFgEAHAAQAHAAAGAEQAFAEADAHQAEAHAAAJQAAAJgEAIQgDAHgFAEQgGAEgHAAQgHAAgFgEgAgIgNQgDAFAAAIQAAAJADAFQADAFAFAAQAFAAADgFQADgFAAgJQAAgIgDgFQgDgFgFAAQgFAAgDAFg");
	this.shape_69.setTransform(202.525,241.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgTAfIAAgKIAXgZIACgEIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQgCgCgDAAQgDAAgDADQgCADAAAEIgNgCQABgGADgEQADgFAEgCQAEgDAGAAQAFAAAFADQAFACADAEQACAEAAAGIgCAJIgGAHIgMANIAVAAIAAANg");
	this.shape_70.setTransform(196.95,241.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMAcQgGgEgDgHQgDgIAAgJQAAgJADgHQADgHAGgEQAFgEAHAAQAHAAAGAEQAFAEADAHQAEAHAAAJQAAAJgEAIQgDAHgFAEQgGAEgHAAQgHAAgFgEgAgIgNQgDAFAAAIQAAAJADAFQADAFAFAAQAFAAADgFQADgFAAgJQAAgIgDgFQgDgFgFAAQgFAAgDAFg");
	this.shape_71.setTransform(191.375,241.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgUAfIAAgKIAYgZIACgEIABgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQgDgCgCAAQgDAAgCADQgDADAAAEIgNgCQAAgGADgEQADgFAFgCQAEgDAGAAQAFAAAFADQAEACADAEQADAEABAGIgDAJIgFAHIgNANIAWAAIAAANg");
	this.shape_72.setTransform(185.85,241.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgJANIAHgZIAMAAIgLAZg");
	this.shape_73.setTransform(179.425,244.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAIAfIAAgXQAAgFgBgCQgDgCgEAAQgCAAgDACQgCACgBAFIAAAXIgMAAIAAg9IAMAAIAAAWIAGgEQACgCAFAAQAEAAAFADQADADACAEQACAEAAAFIAAAag");
	this.shape_74.setTransform(175.55,241.225);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAIAeQgIAAgDgEQgEgEAAgHIAAgRIgIAAIAAgMIAIAAIAAgLIAMgEIAAAPIALAAIAAAMIgLAAIAAAOIABAEQABABAAAAQAAAAABAAQAAABABAAQABAAAAAAIAGAAIAAAMg");
	this.shape_75.setTransform(170.825,241.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgNAdQgFgCgEgEIAJgIIAFADIAFABQAEAAAEgDQADgEACgGIgGADIgFABQgGAAgFgDQgFgCgCgFQgDgEAAgGQAAgFADgFQADgFAFgDQAFgDAGAAQAHAAAFAEQAFAEADAHQADAHAAAJQAAAJgDAHQgEAHgGAEQgGAFgHAAQgFAAgFgDgAgGgQQgDADAAAEQAAAEADACQACADAEAAQADAAADgDQACgCABgEQgBgEgCgDQgDgCgDAAQgEAAgCACg");
	this.shape_76.setTransform(166.225,241.325);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgTAfIAAgKIAXgZIACgEIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgDgCgCAAQgDAAgDADQgCADAAAEIgMgCQAAgGACgEQADgFAFgCQAFgDAFAAQAFAAAFADQAEACADAEQADAEAAAGIgCAJIgFAHIgNANIAWAAIAAANg");
	this.shape_77.setTransform(160.8,241.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgGAWIgQgrIANAAIAJAbIAKgbIANAAIgQArg");
	this.shape_78.setTransform(153.325,242.125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgLAUQgFgDgDgFQgDgFgBgHQABgGADgFQADgFAFgEQAGgDAFAAQAHAAAFADQAFAEAEAFQADAFAAAGQAAAHgDAFQgEAFgFADQgFAEgHAAQgFAAgGgEgAgGgHQgDADAAAEQAAAFADADQADADADAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_79.setTransform(148.075,242.125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAPAeIgcgkIAAAkIgMAAIAAg7IAKAAIAcAkIAAgkIAOAAIAAA7g");
	this.shape_80.setTransform(141.95,241.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgLAUQgFgEgCgGIAKgDQABADADABQACACACAAIAFgBQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgGgCIgEgBIgGgCQgCgCgBgCQgDgCAAgEQAAgFADgDQACgDAEgCQAFgCADAAQAIAAAEAEQAFAEABAGIgKADIgCgEIgGgCIgCABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAEACIAFABIAGADIAEADQACADAAAEQAAAEgDAEQgDADgEACQgEACgFAAQgHAAgEgEg");
	this.shape_81.setTransform(133.9,242.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgMAdQgEgDgEgFQgCgGAAgHQAAgGADgFQACgGAFgDQAFgCAFAAQADgBAEACQADABACAEIAAgXIANAAIAAA9IgNAAIAAgFQgCAEgDABQgEACgDAAQgFAAgFgDgAgEgBIgDAEIgBAGIABAFIADAEIAEACIAFgCIAEgEIABgGIgBgGQgBgCgDgBQgCgBgDAAIgEABg");
	this.shape_82.setTransform(128.8,241.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAJAXIAAgXQAAgEgDgDQgCgCgDAAQgEAAgCACQgDADABAEIAAAXIgOAAIAAgrIAOAAIAAAEIAFgEQACgCAEAAQAGAAADADQAFADACAEQABAEAAAGIAAAZg");
	this.shape_83.setTransform(123.5,242.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUAeIAAg7IApAAIAAAMIgcAAIAAAMIASAAIAAALIgSAAIAAAMIAcAAIAAAMg");
	this.shape_84.setTransform(118.2,241.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgKAUQgFgDgDgFQgCgFgBgHQABgGACgFQADgGAFgDQAFgDAGAAQAFAAAFADQAFACACAEQADAFABAGIAAADIAAAFIgeAAQABADACACQADACADAAQAEAAACgCIAEgEIAKAGIgGAGIgGAEIgIACQgGAAgFgEgAAJgEQgBgDgCgCQgCgCgEAAQgCAAgDACQgCACgBADIARAAIAAAAg");
	this.shape_85.setTransform(110.35,242.125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGAfIAAg9IANAAIAAA9g");
	this.shape_86.setTransform(106.425,241.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgMAWQgEgCgCgDIgCgHQAAgGAFgEQAEgCAHgCIALgCIgCgEQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgCAAgCACIgGAEIgJgHQAEgEAFgDQAGgDAFAAQAFAAAFADQAEACACAEQAEAFAAAFIAAAaIgNAAIAAgEIgGAEIgHACQgEAAgDgCgAgCAEIgDACIgCADQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFgBIADgEIACgFIAAgBg");
	this.shape_87.setTransform(102.5,242.125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKAeQgGgDgDgDQgEgEgBgEIANgFIACAEIAFADIAFABQAFAAADgCQACgBABgDIgCgEIgFgCIgGgBIgLgEQgEgCgDgDQgCgDAAgGQAAgGADgEQADgFAFgCQAFgCAFAAQAGAAAFACQAFACAEAEQADADABAFIgMAFQgBgEgDgCQgDgCgFAAQgDAAgCABQgBABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABIAFACIAEABIAMAFQAFABACAEQADADAAAFQAAAGgDAEQgDAFgGACQgFADgHAAQgGAAgFgCg");
	this.shape_88.setTransform(97.225,241.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},209).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},209).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},209).wait(195));

	// bg
	this.instance_4 = new lib.bgtexture();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-29,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(822));

	// bg
	this.instance_5 = new lib.bgtexture();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,163,0.8929,0.8929);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(822));

	// garage-1.jpg
	this.instance_6 = new lib.pc1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,124.1,0.8929,0.8929,0,0,0,168,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({alpha:0},7).to({_off:true},1).wait(138).to({_off:false,alpha:1},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(138).to({_off:false,alpha:1},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(138).to({_off:false,alpha:1},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(124));

	// garage-2.jpg
	this.instance_7 = new lib.pc2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,127.7,0.8929,0.8929,0,0,0,168,80.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({_off:false},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(55));

	// garage-3.jpg
	this.instance_8 = new lib.pc3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,120.55,0.8929,0.8929,0,0,0,168,80);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(132).to({_off:false},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.5,96,215.39999999999998,159.5);
// library properties:
lib.properties = {
	id: '2D2EAD1C98E8D94DBC02B1E32F878629',
	width: 300,
	height: 250,
	fps: 30,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_Garage_atlas_P_.png", id:"300x250_Garage_atlas_P_"},
		{src:"images/300x250_Garage_atlas_NP_.jpg", id:"300x250_Garage_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2D2EAD1C98E8D94DBC02B1E32F878629'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;