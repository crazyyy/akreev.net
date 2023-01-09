(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"336x280_Garage_atlas_P_", frames: [[0,0,222,37]]},
		{name:"336x280_Garage_atlas_NP_", frames: [[0,396,336,100],[0,132,336,130],[0,0,336,130],[0,264,336,130]]}
];


// symbols:



(lib.agev = function() {
	this.initialize(ss["336x280_Garage_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgtexture = function() {
	this.initialize(ss["336x280_Garage_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.garage1 = function() {
	this.initialize(ss["336x280_Garage_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.garage2 = function() {
	this.initialize(ss["336x280_Garage_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.garage3 = function() {
	this.initialize(ss["336x280_Garage_atlas_NP_"]);
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
(lib._336x280_Garage = function(mode,startPosition,loop) {
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
	this.shape.setTransform(168,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.875)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_1.setTransform(168,140);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.749)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_2.setTransform(168,140);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.624)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_3.setTransform(168,140);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.502)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_4.setTransform(168,140);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,51,51,0.376)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_5.setTransform(168,140);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,51,51,0.251)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_6.setTransform(168,140);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,51,51,0.125)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_7.setTransform(168,140);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,51,51,0)").s().p("A6rW1MAAAgtpMA1XAAAMAAAAtpg");
	this.shape_8.setTransform(168,140);
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
	this.shape_9.setTransform(168,250);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.498,1],50,1,191.1,100.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_10.setTransform(168,250);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],43.5,-0.5,184.3,98.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_11.setTransform(168,250);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],36.8,-2.1,177.4,97.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_12.setTransform(168,250);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],30.2,-3.6,170.6,95.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_13.setTransform(168,250);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],23.6,-5.2,163.8,93.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_14.setTransform(168,250);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],17,-6.8,157,92).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_15.setTransform(168,250);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],10.5,-8.3,150.2,90.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_16.setTransform(168,250);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],3.8,-9.9,143.3,88.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_17.setTransform(168,250);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-2.8,-11.4,136.5,86.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_18.setTransform(168,250);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-9.4,-13,129.7,85.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_19.setTransform(168,250);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-15.9,-14.6,122.9,83.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_20.setTransform(168,250);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-22.5,-16.2,116.1,81.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_21.setTransform(168,250);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-29.2,-17.7,109.2,80).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_22.setTransform(168,250);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-35.8,-19.3,102.4,78.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_23.setTransform(168,250);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-42.4,-20.8,95.6,76.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_24.setTransform(168,250);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-48.9,-22.4,88.8,74.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_25.setTransform(168,250);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-55.5,-24,82,73.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_26.setTransform(168,250);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-62.2,-25.5,75.1,71.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_27.setTransform(168,250);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-68.7,-27.1,68.3,69.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_28.setTransform(168,250);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-75.3,-28.6,61.5,68).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_29.setTransform(168,250);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-81.9,-30.2,54.7,66.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_30.setTransform(168,250);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-88.6,-31.7,47.8,64.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_31.setTransform(168,250);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-95.2,-33.3,41,62.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_32.setTransform(168,250);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-101.8,-34.9,34.2,61.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_33.setTransform(168,250);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-108.3,-36.4,27.4,59.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_34.setTransform(168,250);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-114.9,-38,20.6,57.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_35.setTransform(168,250);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-121.6,-39.5,13.7,56).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_36.setTransform(168,250);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-128.2,-41.1,6.9,54.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_37.setTransform(168,250);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-134.8,-42.7,0.1,52.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_38.setTransform(168,250);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-141.3,-44.3,-6.7,50.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_39.setTransform(168,250);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-147.9,-45.8,-13.5,49.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_40.setTransform(168,250);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-154.6,-47.3,-20.4,47.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_41.setTransform(168,250);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-161.2,-48.9,-27.2,45.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_42.setTransform(168,250);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-167.7,-50.5,-34,43.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_43.setTransform(168,250);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-174.3,-52.1,-40.8,42.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_44.setTransform(168,250);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-180.9,-53.6,-47.6,40.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_45.setTransform(168,250);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-187.6,-55.1,-54.5,38.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_46.setTransform(168,250);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-194.2,-56.7,-61.3,37.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_47.setTransform(168,250);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-200.7,-58.3,-68.1,35.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_48.setTransform(168,250);
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
	this.instance.setTransform(168,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({startPosition:0},0).wait(209).to({startPosition:0},0).wait(209).to({startPosition:0},0).wait(195));

	// t11
	this.instance_1 = new lib.UPTO();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,200.35,1,1,0,0,0,98.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(822));

	// t12
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUAkQgIgFgCgKIAOgFQACAFAEADQAEADAGABIAHgCQAEgBACgCQACgBAAgDQAAgFgFgCIgLgFIgMgEQgGgDgDgEQgEgEAAgIQAAgHADgGQAEgGAHgDQAGgDAHAAQAMABAIAFQAHAGACAKIgOAEQgBgFgEgDQgEgDgGgBQgEABgEADQgDACAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAIAFAEIAGADIAJACIAJAEQAEADADADQADAFAAAGQAAAIgEAGQgEAFgHADQgHADgJAAQgMAAgIgGg");
	this.shape_49.setTransform(253.575,226.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAOA1QgMAAgFgGQgGgHAAgLIAAgpIgPAAIAAgOIAPAAIAAgVIAPgFIAAAaIATAAIAAAOIgTAAIAAAoQAAAFACACQACADAEAAIALAAIAAAPg");
	this.shape_50.setTransform(246.725,225.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAkQgJgFgFgKQgFgJAAgMQAAgLAFgJQAFgKAJgFQAIgFALAAQAJAAAHADQAIADAGAIQAFAIABAMIABAGIgBAHIg5AAQACAKAFAFQAGAEAIAAQAHAAAGgDQAGgDADgGIANAIQgFAKgKAFQgJAEgLAAQgLAAgIgFgAAVgGQAAgHgDgEQgDgEgFgCQgFgCgFAAQgIgBgFAGQgGAFgBAJIApAAIAAAAg");
	this.shape_51.setTransform(239.175,226.35);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAUApIAAgqQAAgMgFgGQgGgGgIAAQgFAAgFAEQgFAEgDAFQgCAFAAAHIAAApIgQAAIAAhPIAQAAIAAAMQAEgGAHgEQAGgDAIgBQAIAAAHAEQAIAFADAIQAEAIAAALIAAAtg");
	this.shape_52.setTransform(229.9,226.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHA5IAAhPIAPAAIAABPgAgHgmQgCgDAAgFQAAgEACgDQADgDAEAAQAFAAADADQACADAAAEQAAAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_53.setTransform(222.8,224.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMA1QgGgEgDgGIAAAMIgRAAIAAhvIARAAIAAAsQADgGAGgEQAGgDAIAAQAKAAAJAFQAHAFAFAKQAFAIABAMQgBANgFAJQgEAJgIAGQgJAFgJAAQgJAAgGgEgAgMgHQgEAEgEAFQgCAGAAAHQAAAIACAGQAEAGAEADQAFAEAHAAQAGAAAGgEQAEgDAEgGQADgGAAgIQAAgHgDgGQgEgFgEgEQgGgDgGAAQgHAAgFADg");
	this.shape_54.setTransform(215.9,224.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTAnQgGgDgEgFQgEgGAAgHQAAgIAEgFQAEgFAGgCQAGgDAHgCIAYgFQgBgFgEgFQgEgEgHAAQgFAAgGADQgFADgDAFIgNgJQAGgHAIgFQAIgEAJgBQAKABAHAEQAIAEAEAHQAEAIAAAJIAAAwIgQAAIAAgLQgEAGgGADQgHAEgHAAQgIAAgFgDgAgDAGQgGABgEADQgEACAAAFQAAAFAEACQAEADAGAAQAFAAAFgCQAFgDADgEQADgFAAgGIAAgGg");
	this.shape_55.setTransform(206.275,226.325);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAyQgNgIgIgNQgHgNAAgQQAAgPAHgNQAIgMANgIQANgHAPgBQAPABAMAGQANAHAHAMIgOAJQgFgJgJgFQgIgEgLAAQgLAAgJAFQgJAFgFAJQgFAKgBAKQABAMAFAJQAFAJAJAFQAJAGALAAQALAAAIgFQAJgFAFgIIAOAIQgHAMgNAHQgMAHgPAAQgPAAgNgHg");
	this.shape_56.setTransform(196.375,224.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSAkQgJgFgFgKQgFgJAAgMQAAgLAFgJQAFgKAJgFQAIgFALAAQAJAAAHADQAIADAGAIQAFAIABAMIABAGIgBAHIg5AAQACAKAFAFQAGAEAIAAQAHAAAGgDQAGgDADgGIANAIQgFAKgKAFQgJAEgLAAQgLAAgIgFgAAVgGQAAgHgDgEQgDgEgFgCQgFgCgFAAQgIgBgFAGQgGAFgBAJIApAAIAAAAg");
	this.shape_57.setTransform(181.025,226.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgTA2QgJgEgHgHIAMgLQAFAFAFADQAGADAGAAQAKAAAHgHQAGgGAAgMIAAgHQgDAGgGAEQgGAEgIAAQgLAAgIgFQgIgGgFgJQgEgIAAgNQAAgMAEgJQAFgKAIgFQAIgFALAAQAHAAAHAEQAGAEADAFIAAgLIAQAAIAABKQAAAMgFAIQgFAJgJAFQgJAFgLAAQgJAAgJgEgAgLgnQgFAEgDAGQgCAGAAAHQAAAIACAGQADAFAFAEQAFADAGAAQAHAAAFgDQAFgEADgFQADgGAAgIQAAgHgDgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_58.setTransform(171.475,228);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAnQgGgDgEgFQgEgGAAgHQAAgIAEgFQAEgFAGgCQAGgDAHgCIAYgFQgBgFgEgFQgEgEgHAAQgFAAgGADQgFADgDAFIgNgJQAGgHAIgFQAIgEAJgBQAKABAHAEQAIAEAEAHQAEAIAAAJIAAAwIgQAAIAAgLQgEAGgGADQgHAEgHAAQgIAAgFgDgAgDAGQgGABgEADQgEACAAAFQAAAFAEACQAEADAGAAQAFAAAFgCQAFgDADgEQADgFAAgGIAAgGg");
	this.shape_59.setTransform(162.325,226.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVApIAAhPIAQAAIAAALQADgFAHgEQAHgDAKgBIAAAQQgKABgHACQgFAEgCAFQgDAFAAAHIAAApg");
	this.shape_60.setTransform(155.6,226.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgTAnQgGgDgEgFQgEgGAAgHQAAgIAEgFQAEgFAGgCQAGgDAHgCIAYgFQgBgFgEgFQgEgEgHAAQgFAAgGADQgFADgDAFIgNgJQAGgHAIgFQAIgEAJgBQAKABAHAEQAIAEAEAHQAEAIAAAJIAAAwIgQAAIAAgLQgEAGgGADQgHAEgHAAQgIAAgFgDgAgDAGQgGABgEADQgEACAAAFQAAAFAEACQAEADAGAAQAFAAAFgCQAFgDADgEQADgFAAgGIAAgGg");
	this.shape_61.setTransform(147.675,226.325);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAyQgNgIgHgNQgIgNAAgQQAAgPAIgNQAIgNAMgHQANgHAPgBQAPABANAGQAMAHAIAMIgOAJQgGgJgIgFQgJgEgLAAQgKAAgJAEQgJAGgGAJQgFAKAAAKQAAAMAFAJQAFAJAJAFQAJAGALAAQAKAAAIgEQAIgEAFgGQAEgGABgIIgmAAIAAgPIA3AAIAAAHQgBAPgGAMQgHAMgMAGQgMAHgPAAQgPAAgNgHg");
	this.shape_62.setTransform(137.075,224.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAOA1QgMAAgFgGQgGgHAAgLIAAgpIgPAAIAAgOIAPAAIAAgVIAPgFIAAAaIATAAIAAAOIgTAAIAAAoQAAAFACACQACADAEAAIALAAIAAAPg");
	this.shape_63.setTransform(122.775,225.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgRAkQgJgFgGgKQgEgJAAgMQAAgLAEgJQAGgJAJgGQAJgGALAAQALAAAIAGQAKAFAGAIIgOAIQgEgFgFgDQgGgDgGAAQgGAAgGADQgFAEgDAGQgEAGAAAGQAAAIAEAGQADAGAFADQAGAEAGAAQAGAAAGgDQAFgDAEgGIAOAIQgGAJgKAFQgIAFgLAAQgLAAgJgGg");
	this.shape_64.setTransform(115.4,226.325);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgSAkQgJgFgFgKQgFgJAAgMQAAgLAFgJQAFgKAJgFQAIgFALAAQAJAAAHADQAIADAGAIQAFAIABAMIABAGIgBAHIg5AAQACAKAFAFQAGAEAIAAQAHAAAGgDQAGgDADgGIANAIQgFAKgKAFQgJAEgLAAQgLAAgIgFgAAVgGQAAgHgDgEQgDgEgFgCQgFgCgFAAQgIgBgFAGQgGAFgBAJIApAAIAAAAg");
	this.shape_65.setTransform(106.525,226.35);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgHA4IAAhvIAPAAIAABvg");
	this.shape_66.setTransform(99.9,224.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSAkQgJgFgFgKQgFgJAAgMQAAgLAFgJQAFgKAJgFQAIgFALAAQAJAAAHADQAIADAGAIQAFAIABAMIABAGIgBAHIg5AAQACAKAFAFQAGAEAIAAQAHAAAGgDQAGgDADgGIANAIQgFAKgKAFQgJAEgLAAQgLAAgIgFgAAVgGQAAgHgDgEQgDgEgFgCQgFgCgFAAQgIgBgFAGQgGAFgBAJIApAAIAAAAg");
	this.shape_67.setTransform(93.225,226.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgTA1QgJgDgGgHQgHgGgBgIIAQgGQACAIAIAFQAHAFALAAQALAAAHgFQAGgEAAgIQAAgFgEgDQgDgEgHgBIgOgEQgGAAgGgDQgHgCgFgDQgFgDgDgGQgDgFgBgIQABgKAEgHQAFgIAJgEQAJgEALAAQALAAAIADQAJAEAGAHQAFAGACAJIgQAGQgCgIgHgGQgGgEgLAAQgFgBgFACQgFACgDAEQgDADAAAFQAAAFAEADQADADAGACIAMAEIANADQAHACAGACQAGAEADAFQAEAGAAAIQAAAKgFAIQgGAIgJADQgKAFgMAAQgLAAgJgEg");
	this.shape_68.setTransform(83.525,224.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},209).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},209).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},209).wait(195));

	// btn
	this.instance_2 = new lib.agev();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68,27,0.9,0.9);

	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(168,249.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},209).to({state:[{t:this.instance_3},{t:this.instance_2}]},209).to({state:[{t:this.instance_3},{t:this.instance_2}]},209).wait(195));

	// plate
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgOAfQgGgEgDgJQgEgHAAgLQAAgJAEgJQADgHAGgFQAHgFAHAAQAIAAAGAFQAHAFADAHQAEAJAAAJQAAALgEAHQgDAJgHAEQgGAFgIgBQgHABgHgFgAgJgOQgDAFAAAJQAAAKADAFQAEAGAFABQAGgBADgGQAEgFAAgKQAAgJgEgFQgDgGgGgBQgFABgEAGg");
	this.shape_69.setTransform(226.825,270.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIAagdIADgDIABgEQAAgDgDgCQgCgCgDgBQgEABgCADQgDACAAAFIgOgCQAAgHADgFQAEgFAFgDQAFgDAGAAQAGAAAFADQAGADADAFQADAEAAAGQAAAFgCAFQgCAEgFAEIgOAQIAYAAIAAAOg");
	this.shape_70.setTransform(220.6,270.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAfQgGgEgDgJQgEgHAAgLQAAgJAEgJQADgHAGgFQAHgFAHAAQAIAAAGAFQAHAFADAHQAEAJAAAJQAAALgEAHQgDAJgHAEQgGAFgIgBQgHABgHgFgAgJgOQgDAFAAAJQAAAKADAFQAEAGAFABQAGgBADgGQAEgFAAgKQAAgJgEgFQgDgGgGgBQgFABgEAGg");
	this.shape_71.setTransform(214.375,270.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIAbgdIACgDIABgEQAAgDgCgCQgDgCgDgBQgDABgEADQgCACAAAFIgOgCQABgHACgFQADgFAGgDQAFgDAGAAQAGAAAFADQAFADADAFQAEAEAAAGQAAAFgCAFQgDAEgEAEIgOAQIAYAAIAAAOg");
	this.shape_72.setTransform(208.15,270.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAPIAHgdIAOAAIgMAdg");
	this.shape_73.setTransform(201,273.675);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAKAjIAAgaQgBgFgCgEQgDgCgEAAQgDAAgDACQgCAEgBAFIAAAaIgOAAIAAhFIAOAAIAAAZIAGgFQADgCAFAAQAFABAFADQAEACADAGQACAEAAAGIAAAdg");
	this.shape_74.setTransform(196.65,270.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAJAhQgJAAgEgEQgDgEAAgJIAAgTIgJAAIAAgNIAJAAIAAgMIANgEIAAAQIAMAAIAAANIgMAAIAAARIABAEQAAABABAAQAAAAABAAQAAABABAAQABAAABAAIAGAAIAAANg");
	this.shape_75.setTransform(191.35,270.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgPAhQgGgDgEgFIALgJIAFAFIAGABQAEAAAEgFQAEgEACgGIgGAEIgGABQgHAAgFgEQgFgDgEgFQgDgEAAgHQAAgGADgFQAEgGAFgDQAGgDAHgBQAHAAAGAFQAHAEACAHQAEAIAAAKQAAAKgEAJQgEAIgHAFQgGAFgIgBQgHAAgFgCgAgHgSQgDAEAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgEQgDgDgEAAQgEAAgDADg");
	this.shape_76.setTransform(186.15,270.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIAagdIADgDIABgEQAAgDgDgCQgCgCgDgBQgEABgCADQgDACAAAFIgOgCQAAgHADgFQAEgFAFgDQAFgDAGAAQAGAAAFADQAGADADAFQADAEAAAGQAAAFgCAFQgCAEgFAEIgOAQIAYAAIAAAOg");
	this.shape_77.setTransform(180.1,270.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgHAZIgSgxIAPAAIAKAeIALgeIAPAAIgSAxg");
	this.shape_78.setTransform(171.725,271.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgMAXQgGgEgDgFQgEgHgBgHQABgHAEgFQADgGAGgEQAGgEAGAAQAHAAAHAEQAFAEAEAGQAEAFgBAHQABAHgEAHQgEAFgFAEQgHAEgHgBQgGABgGgEgAgHgIQgDADgBAFQABAFADAEQADADAEABQAGgBACgDQAEgEAAgFQAAgFgEgDQgCgDgGgBQgEABgDADg");
	this.shape_79.setTransform(165.85,271.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AARAiIgfgpIAAApIgOAAIAAhDIALAAIAgApIAAgpIAOAAIAABDg");
	this.shape_80.setTransform(159,270.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNAXQgFgEgCgHIAMgEQABADACACQADABADAAIAFAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIgGgCIgFgBIgGgDIgEgEQgCgDAAgEQAAgGADgDQACgDAFgCQAEgDAFAAQAIABAFAEQAFAEACAGIgMAEQAAgDgDgCQgCgBgEAAIgDABIgCACQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAFADIAGABIAGACQADACACACQACADAAAEQAAAGgDAEQgDADgEACQgFACgGAAQgHAAgGgDg");
	this.shape_81.setTransform(149.925,271.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgOAgQgFgDgDgGQgDgGAAgIQAAgHADgFQADgGAFgEQAGgDAGAAQAEAAADACQAEABACADIAAgZIAPAAIAABFIgPAAIAAgFQgCADgEACQgDACgEAAQgHAAgFgEgAgEgBQgDABgCADIgBAGIABAHQACADACABQADACACAAIAGgCQACgBACgDQABgDAAgEQAAgEgBgDIgEgDQgDgBgDAAQgCAAgCABg");
	this.shape_82.setTransform(144.275,270.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAKAaIAAgaQgBgEgCgEQgCgDgFAAQgDAAgDADQgDAEAAAEIAAAaIgOAAIAAgxIAOAAIAAAFIAGgFQADgCAFAAQAGAAAEADQAEADACAFQADAFAAAHIAAAcg");
	this.shape_83.setTransform(138.35,271.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIAtAAIAAAOIgfAAIAAAOIAVAAIAAALIgVAAIAAAOIAfAAIAAAOg");
	this.shape_84.setTransform(132.375,270.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgMAXQgFgEgDgFQgDgHgBgHQABgHADgFQADgGAFgEQAGgEAHAAQAGAAAFADQAFADADAFQADAFACAHIAAADIgBAFIghAAQABAFADACQADACADAAQAEgBADgBQADgCABgDIALAGQgCAEgDAEIgIAEIgJABQgHABgGgEgAAKgEQgBgEgCgDQgDgBgEAAQgDAAgDABQgCADgBAEIATAAIAAAAg");
	this.shape_85.setTransform(123.6,271.25);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGAjIAAhFIANAAIAABFg");
	this.shape_86.setTransform(119.25,270.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgOAYQgDgBgCgDQgDgEAAgEQAAgHAFgFQAEgCAIgCIANgDQAAgDgDgCQgCgBgDAAQgCAAgDACQgDABgCAEIgLgIQAEgFAGgDQAGgDAGgBQAGAAAFADQAFADADAFQADAFAAAGIAAAdIgOAAIAAgFQgDADgEABQgDACgFAAQgEAAgEgCgAgCAFQgBAAAAAAQgBAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIACADIAEABIAFgCIAEgEQACgCAAgDIAAgBg");
	this.shape_87.setTransform(114.825,271.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgEQgEgEgBgGIAPgEIACAEQACACADABQADABADABQAGAAADgCQADgCAAgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgGgDIgGgCQgHgBgFgCQgFgDgDgDQgDgEAAgGQAAgHAEgFQADgFAGgCQAFgDAGAAQAHABAGACQAFACAEAEQAEAEABAFIgOAGQgBgEgEgDQgDgCgFgBQgEABgCABQgDACAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAFADIAFACQAIACAGACQAFACADAEQADAEAAAGQgBAGgDAFQgDAFgGADQgGACgIAAQgHAAgGgCg");
	this.shape_88.setTransform(108.925,270.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},209).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},209).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},209).wait(195));

	// bg
	this.instance_4 = new lib.bgtexture();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(822));

	// bg
	this.instance_5 = new lib.bgtexture();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(822));

	// garage-1.jpg
	this.instance_6 = new lib.pc1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168,139,1,1,0,0,0,168,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({alpha:0},7).to({_off:true},1).wait(138).to({_off:false,alpha:1},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(138).to({_off:false,alpha:1},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(138).to({_off:false,alpha:1},0).wait(63).to({alpha:0},7).to({_off:true},1).wait(124));

	// garage-2.jpg
	this.instance_7 = new lib.pc2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(168,143,1,1,0,0,0,168,80);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({_off:false},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(55));

	// garage-3.jpg
	this.instance_8 = new lib.pc3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(168,135,1,1,0,0,0,168,80);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(132).to({_off:false},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(132).to({_off:false,alpha:1},0).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(165.2,107,241.3,179.2);
// library properties:
lib.properties = {
	id: '2D2EAD1C98E8D94DBC02B1E32F878629',
	width: 336,
	height: 280,
	fps: 30,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/336x280_Garage_atlas_P_.png", id:"336x280_Garage_atlas_P_"},
		{src:"images/336x280_Garage_atlas_NP_.jpg", id:"336x280_Garage_atlas_NP_"}
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