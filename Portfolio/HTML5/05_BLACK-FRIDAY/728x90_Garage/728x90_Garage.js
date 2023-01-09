(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_Garage_atlas_P_", frames: [[0,0,222,37]]},
		{name:"728x90_Garage_atlas_NP_", frames: [[0,396,336,100],[0,132,336,130],[0,0,336,130],[0,264,336,130]]}
];


// symbols:



(lib.agev = function() {
	this.initialize(ss["728x90_Garage_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgtexture = function() {
	this.initialize(ss["728x90_Garage_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.garage1 = function() {
	this.initialize(ss["728x90_Garage_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.garage2 = function() {
	this.initialize(ss["728x90_Garage_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.garage3 = function() {
	this.initialize(ss["728x90_Garage_atlas_NP_"]);
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
p.nominalBounds = new cjs.Rectangle(-29.5,-8.2,59.1,16.5);


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
	mask.graphics.p("ArQBxIAAiuIAsAAIAAANQAGgIAJgEIAAAAQAJgFANAAIAAAAQAQAAANAJIAAAAQANAIAHAPIAAAAQAHAPAAASIAAAAQAAATgIAPIAAAAQgHAPgNAJIAAAAQgNAIgQABIAAAAQgMgBgJgEIAAAAQgJgEgGgIIAAAAIAAA/gAqdgQQgHAHAAAJIAAAAQAAALAHAHIAAAAQAHAHAKAAIAAAAQAKAAAHgHIAAAAQAGgHABgLIAAAAQgBgJgGgHIAAAAQgGgIgLAAIAAAAQgKAAgHAIgACzAxIBqihIAdATIhrChgAHaA3QgUgMgMgUIAAAAQgLgUgBgYIAAAAQABgZALgUIAAAAQAMgUAUgMIAAAAQAUgMAaAAIAAAAQAYAAAUAMIAAAAQAUAMAMAUIAAAAQAMAUAAAZIAAAAQAAAYgMAUIAAAAQgMAUgUAMIAAAAQgUAMgYAAIAAAAQgaAAgUgMgAHzg6QgJAGgFAJIAAAAQgGAKAAAMIAAAAQAAAMAGAJIAAAAQAFAJAJAFIAAAAQAJAGAMAAIAAAAQALAAAJgGIAAAAQAJgFAFgJIAAAAQAFgJAAgMIAAAAQAAgMgFgKIAAAAQgFgJgJgGIAAAAQgJgFgLAAIAAAAQgMAAgJAFgAEdA9QgLgGgGgKIAAAAQgGgLAAgNIAAAAQAAgMAGgJIAAAAQAGgKALgGIAAAAQAKgGAMAAIAAAAQAMAAAKAGIAAAAQAKAGAHAKIAAAAQAGAJAAAMIAAAAQAAANgGALIAAAAQgHAKgKAGIAAAAQgKAGgMAAIAAAAQgMAAgKgGgAEnAKQgFAEAAAHIAAAAQAAAIAFAFIAAAAQAFAFAHAAIAAAAQAHAAAFgFIAAAAQAFgFAAgIIAAAAQAAgHgFgEIAAAAQgFgFgHAAIAAAAQgHAAgFAFgAASA3QgQgLgJgUIAAAAQgJgUAAgZIAAAAQAAgbAJgUIAAAAQAJgUAQgLIAAAAQAQgLAVAAIAAAAQAVAAAQALIAAAAQAQALAJAUIAAAAQAKAUAAAbIAAAAQAAAZgKAUIAAAAQgJAUgQALIAAAAQgQAMgVAAIAAAAQgVAAgQgMgAAkg2QgGAMgBAVIAAAAQABAUAGALIAAAAQAHAMAMAAIAAAAQALAAAHgMIAAAAQAHgLAAgUIAAAAQAAgVgHgMIAAAAQgHgMgLAAIAAAAQgMAAgHAMgAh6A9QgNgHgKgLIAAAAQgJgLgDgQIAAAAIAqgNQgBAJAHAGIAAAAQAGAHALAAIAAAAQAJAAAGgFIAAAAQAFgEAAgHIAAAAQAAgHgGgDIAAAAQgFgEgKAAIAAAAIgSAAIAAgkIASAAQAIAAAFgEIAAAAQAFgEAAgGIAAAAQAAgGgFgEIAAAAQgFgEgIAAIAAAAQgJAAgGAGIAAAAQgFAFAAAIIAAAAIgqgKQAEgQAIgLIAAAAQAJgLANgGIAAAAQANgGARAAIAAAAQARAAAOAGIAAAAQAOAGAIALIAAAAQAIAMABAPIAAAAQAAAMgGAJIAAAAQgGAKgKAGIAAAAQAMAGAHAKIAAAAQAGAJAAANIAAAAQAAAQgJALIAAAAQgJAMgOAGIAAAAQgPAHgSAAIAAAAQgRAAgOgGgAlHA6QgPgJgJgPIAAAAQgJgPAAgTIAAAAQAAgRAJgPIAAAAQAJgPAPgJIAAAAQAQgJATAAIAAAAQATAAAPAJIAAAAQAPAJAJAPIAAAAQAJAPAAARIAAAAQAAATgJAPIAAAAQgJAPgPAJIAAAAQgPAIgTABIAAAAQgTgBgQgIgAk1gRQgHAHAAAKIAAAAQAAALAHAHIAAAAQAGAHALAAIAAAAQAKAAAGgHIAAAAQAHgHAAgLIAAAAQAAgKgHgHIAAAAQgGgHgKAAIAAAAQgLAAgGAHgAtXA5QgRgKgJgSIAAAAQgKgSAAgWIAAAAIAAhfIAuAAIAABeQAAAPAIAJIAAAAQAIAJAMAAIAAAAQAOAAAHgJIAAAAQAIgJAAgPIAAAAIAAheIAuAAIAABfQAAAWgJASIAAAAQgKASgQAKIAAAAQgRAKgXAAIAAAAQgWAAgQgKgAMCA/IAAipIB6AAIAAAoIhMAAIAAAdIAyAAIAAAmIgyAAIAAA+gAJ1A/IAAipIB6AAIAAAoIhMAAIAAAdIAyAAIAAAmIgyAAIAAA+gAnQA/IAAh8IgsAAIAAgtICHAAIAAAtIgrAAIAAB8gACkgaQgKgGgGgKIAAAAQgHgLAAgNIAAAAQAAgMAHgKIAAAAQAGgKAKgGIAAAAQAKgGAMAAIAAAAQANAAAKAGIAAAAQAKAGAGAKIAAAAQAGAKAAAMIAAAAQAAANgGALIAAAAQgGAKgKAGIAAAAQgKAGgNAAIAAAAQgMAAgKgGgACuhNQgEAEgBAHIAAAAQABAIAEAFIAAAAQAFAFAHAAIAAAAQAHAAAFgFIAAAAQAFgFAAgIIAAAAQAAgHgFgEIAAAAQgFgFgHAAIAAAAQgHAAgFAFg");
	mask.setTransform(99.1251,18.0752);

	// Слой_1
	this.instance = new lib.gradient();
	this.instance.parent = this;
	this.instance.setTransform(244.4,15.4,0.7306,1,180,0,0,126.4,15.8);

	this.instance_1 = new lib.gradient();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.25,15.5,0.7306,1,0,0,0,126.4,15.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UPTO, new cjs.Rectangle(6.8,-0.3,184.2,31.5), null);


// stage content:
(lib._728x90_Garage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_857 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(857).call(this.frame_857).wait(1));

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.875)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.749)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_2.setTransform(364,45);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.624)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_3.setTransform(364,45);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,51,51,0.502)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_4.setTransform(364,45);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,51,51,0.376)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_5.setTransform(364,45);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,51,51,0.251)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_6.setTransform(364,45);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,51,51,0.125)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_7.setTransform(364,45);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,51,51,0)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_8.setTransform(364,45);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(209).to({_off:false},0).wait(1).to({_off:true},1).wait(209).to({_off:false},0).wait(1).to({_off:true},1).wait(209).to({_off:false},0).wait(1).to({_off:true},1).wait(209).to({_off:false},0).wait(1).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(207).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(207).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(207).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(207).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(205).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(197).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(195).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5));

	// Слой_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.498,1],56.6,2.6,197.9,102.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_9.setTransform(168,259);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.498,1],49.8,1,190.9,100.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_10.setTransform(168,259);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],43.1,-0.6,184,98.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_11.setTransform(168,259);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],36.3,-2.2,176.9,97.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_12.setTransform(168,259);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],29.5,-3.8,169.9,95.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_13.setTransform(168,259);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],22.8,-5.4,162.9,93.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_14.setTransform(168,259);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],16,-7,155.9,91.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_15.setTransform(168,259);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],9.2,-8.6,148.9,90).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_16.setTransform(168,259);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],2.5,-10.2,141.9,88.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_17.setTransform(168,259);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-4.3,-11.8,134.9,86.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_18.setTransform(168,259);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-11.1,-13.5,127.9,84.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_19.setTransform(168,259);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-17.9,-15,120.9,83).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_20.setTransform(168,259);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-24.7,-16.6,113.9,81.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_21.setTransform(168,259);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-31.4,-18.3,106.9,79.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_22.setTransform(168,259);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-38.2,-19.8,99.9,77.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_23.setTransform(168,259);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-45,-21.4,92.9,75.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_24.setTransform(168,259);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-51.7,-23.1,85.9,74.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_25.setTransform(168,259);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-58.5,-24.6,78.9,72.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_26.setTransform(168,259);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-65.3,-26.3,71.9,70.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_27.setTransform(168,259);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-72,-27.8,64.9,68.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_28.setTransform(168,259);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-78.8,-29.4,57.9,67.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_29.setTransform(168,259);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-85.6,-31.1,50.9,65.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_30.setTransform(168,259);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-92.4,-32.6,43.9,63.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_31.setTransform(168,259);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-99.2,-34.2,36.9,61.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_32.setTransform(168,259);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-105.9,-35.9,29.9,60).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_33.setTransform(168,259);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-112.7,-37.4,22.9,58.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_34.setTransform(168,259);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-119.5,-39.1,15.9,56.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_35.setTransform(168,259);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-126.2,-40.7,8.9,54.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_36.setTransform(168,259);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-133,-42.2,1.9,53).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_37.setTransform(168,259);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-139.8,-43.9,-5.1,51.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_38.setTransform(168,259);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-146.5,-45.5,-12.1,49.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_39.setTransform(168,259);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-153.3,-47,-19.1,47.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_40.setTransform(168,259);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-160.1,-48.7,-26.1,45.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_41.setTransform(168,259);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-166.9,-50.3,-33.1,44.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_42.setTransform(168,259);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-173.6,-51.9,-40.1,42.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_43.setTransform(168,259);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-180.4,-53.5,-47.1,40.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_44.setTransform(168,259);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-187.2,-55.1,-54.1,38.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_45.setTransform(168,259);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-194,-56.7,-61.1,37.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_46.setTransform(168,259);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-200.7,-58.3,-68.1,35.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_47.setTransform(168,259);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.498,1],50,1,191.1,100.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_48.setTransform(168,259);
	this.shape_48._off = true;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],43.5,-0.5,184.3,98.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_49.setTransform(168,259);
	this.shape_49._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.494,1],36.8,-2.1,177.4,97.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_50.setTransform(168,259);
	this.shape_50._off = true;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],30.2,-3.6,170.6,95.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_51.setTransform(168,259);
	this.shape_51._off = true;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],23.6,-5.2,163.8,93.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_52.setTransform(168,259);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.49,1],17,-6.8,157,92).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_53.setTransform(168,259);
	this.shape_53._off = true;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],10.5,-8.3,150.2,90.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_54.setTransform(168,259);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.486,1],3.8,-9.9,143.3,88.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_55.setTransform(168,259);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-2.8,-11.4,136.5,86.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_56.setTransform(168,259);
	this.shape_56._off = true;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.482,1],-9.4,-13,129.7,85.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_57.setTransform(168,259);
	this.shape_57._off = true;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-15.9,-14.6,122.9,83.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_58.setTransform(168,259);
	this.shape_58._off = true;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-22.5,-16.2,116.1,81.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_59.setTransform(168,259);
	this.shape_59._off = true;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.478,1],-29.2,-17.7,109.2,80).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_60.setTransform(168,259);
	this.shape_60._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-35.8,-19.3,102.4,78.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_61.setTransform(168,259);
	this.shape_61._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.475,1],-42.4,-20.8,95.6,76.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_62.setTransform(168,259);
	this.shape_62._off = true;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-48.9,-22.4,88.8,74.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_63.setTransform(168,259);
	this.shape_63._off = true;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-55.5,-24,82,73.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_64.setTransform(168,259);
	this.shape_64._off = true;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.471,1],-62.2,-25.5,75.1,71.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_65.setTransform(168,259);
	this.shape_65._off = true;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-68.7,-27.1,68.3,69.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_66.setTransform(168,259);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.467,1],-75.3,-28.6,61.5,68).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_67.setTransform(168,259);
	this.shape_67._off = true;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-81.9,-30.2,54.7,66.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_68.setTransform(168,259);
	this.shape_68._off = true;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-88.6,-31.7,47.8,64.6).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_69.setTransform(168,259);
	this.shape_69._off = true;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.463,1],-95.2,-33.3,41,62.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_70.setTransform(168,259);
	this.shape_70._off = true;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-101.8,-34.9,34.2,61.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_71.setTransform(168,259);
	this.shape_71._off = true;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.459,1],-108.3,-36.4,27.4,59.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_72.setTransform(168,259);
	this.shape_72._off = true;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-114.9,-38,20.6,57.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_73.setTransform(168,259);
	this.shape_73._off = true;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-121.6,-39.5,13.7,56).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_74.setTransform(168,259);
	this.shape_74._off = true;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.455,1],-128.2,-41.1,6.9,54.3).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_75.setTransform(168,259);
	this.shape_75._off = true;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-134.8,-42.7,0.1,52.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_76.setTransform(168,259);
	this.shape_76._off = true;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.451,1],-141.3,-44.3,-6.7,50.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_77.setTransform(168,259);
	this.shape_77._off = true;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-147.9,-45.8,-13.5,49.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_78.setTransform(168,259);
	this.shape_78._off = true;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.447,1],-154.6,-47.3,-20.4,47.4).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_79.setTransform(168,259);
	this.shape_79._off = true;

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-161.2,-48.9,-27.2,45.7).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_80.setTransform(168,259);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-167.7,-50.5,-34,43.9).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_81.setTransform(168,259);
	this.shape_81._off = true;

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.443,1],-174.3,-52.1,-40.8,42.2).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_82.setTransform(168,259);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-180.9,-53.6,-47.6,40.5).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_83.setTransform(168,259);
	this.shape_83._off = true;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.439,1],-187.6,-55.1,-54.5,38.8).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_84.setTransform(168,259);
	this.shape_84._off = true;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)","rgba(255,255,255,0)"],[0,0.435,1],-194.2,-56.7,-61.3,37.1).s().p("AlsBtQgMAAgMgNQgOgOAAgNIAAiMQAAgNAOgNQAMgLAMgBILYAAQAMABANALQAOANAAANIAACGQAAAOgNAQQgNAQgLAAg");
	this.shape_85.setTransform(168,259);
	this.shape_85._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},15).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},30).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},29).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},33).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},30).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},29).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},33).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},30).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},29).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},33).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},30).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},29).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(15).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(53).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(85).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(86).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(87).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(88).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(89).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(90).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(91).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(92).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(93).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(94).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(95).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(96).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(97).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(98).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(99).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(100).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(101).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(102).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(103).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(104).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(105).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(106).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(107).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(108).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(109).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(110).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(111).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(112).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(113).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(114).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(115).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(116).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(117).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(118).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(119).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(120).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(121).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(122).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(33));

	// logo
	this.instance = new lib.NAPlogosvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.2,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211).to({startPosition:0},0).wait(211).to({startPosition:0},0).wait(211).to({startPosition:0},0).wait(211).to({startPosition:0},0).wait(14));

	// t11
	this.instance_1 = new lib.UPTO();
	this.instance_1.parent = this;
	this.instance_1.setTransform(611.35,15.15,1,1,0,0,0,98.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(858));

	// t12
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgSAiQgIgGgCgJIANgEQACAFAEADQADADAGAAIAHgBIAFgDQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgFgCQgEgDgGgBIgLgEQgGgDgDgDQgDgFgBgHQABgHADgGQADgFAHgCQAFgDAHAAQALAAAHAFQAIAGABAJIgMAEQgCgFgEgDQgDgDgGAAQgEAAgEADQgDACAAAEIACAEIAFADIAGADIAIACIAIAEQAEACADAEQADAEAAAGQAAAHgEAFQgDAFgHADQgHADgIAAQgLAAgHgFg");
	this.shape_86.setTransform(692.15,37.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AANAxQgLAAgFgFQgGgGAAgLIAAgmIgNAAIAAgNIANAAIAAgUIAOgFIAAAZIASAAIAAANIgSAAIAAAmQAAAEACACQADACAEAAIAJAAIAAAOg");
	this.shape_87.setTransform(685.775,36.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgRAiQgJgGgEgJQgFgIABgLQgBgKAFgIQAEgJAJgGQAHgFALAAQAIAAAHADQAHADAGAIQAEAHACALIABAGIgBAHIg2AAQACAIAFAFQAFAEAIABQAGAAAGgEQAFgCADgFIAMAHQgEAJgJAEQgJAFgKAAQgLAAgHgFgAAUgGQAAgGgEgEQgCgEgEgCIgJgCQgJAAgFAFQgEAFgCAIIAnAAIAAAAg");
	this.shape_88.setTransform(678.7,37.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AATAmIAAgnQgBgLgEgGQgFgFgIAAQgFAAgFADQgEADgCAGQgDAFAAAGIAAAmIgPAAIAAhKIAPAAIAAAMQAEgGAGgEQAGgDAHAAQAIAAAHAEQAGAEAEAHQAEAIAAAKIAAAqg");
	this.shape_89.setTransform(670.025,37.775);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgHA1IAAhJIAPAAIAABJgAgGgkQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_90.setTransform(663.35,36.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLAxQgGgDgDgGIAAAMIgPAAIAAhoIAPAAIAAApQADgGAGgDQAGgEAHAAQAKAAAHAFQAIAFAEAJQAFAIAAALQAAAMgFAJQgEAIgIAFQgHAFgKAAQgHAAgGgEgAgLgGQgEADgDAFQgDAFAAAHQAAAHADAGQADAFAEAEQAFADAGAAQAGAAAFgDQAFgEACgFQADgGAAgHQAAgHgDgFQgCgFgFgDQgFgDgGAAQgGAAgFADg");
	this.shape_91.setTransform(656.875,36.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgSAkQgGgCgDgGQgEgFAAgGQAAgIAEgEQADgFAGgCIAMgFIAXgEQgBgFgEgEQgDgFgHAAQgFAAgFAEQgFADgDAEIgMgJQAFgGAIgFQAIgEAHAAQAKAAAHADQAHAEAEAHQAEAHAAAJIAAAtIgPAAIAAgKQgEAFgGADQgGAEgHAAQgHAAgFgDgAgDAGQgFAAgEADQgDACgBAFQAAAEAEADQAEACAGAAQAEAAAFgCQAEgDADgDQADgFAAgFIAAgGg");
	this.shape_92.setTransform(647.875,37.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgWAuQgMgHgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgHQAMgHAPgBQAOABALAGQAMAGAHAMIgOAIQgEgIgIgFQgJgEgJAAQgKAAgJAFQgJAFgEAJQgFAIgBAKQABALAFAIQAEAJAJAFQAJAGAKgBQAJAAAJgEQAIgFAEgIIAOAIQgHALgMAGQgLAIgOgBQgPAAgMgHg");
	this.shape_93.setTransform(638.6,36.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgSAiQgIgGgEgJQgEgIgBgLQABgKAEgIQAEgJAIgGQAJgFAJAAQAJAAAHADQAIADAEAIQAGAHABALIAAAGIAAAHIg1AAQABAIAFAFQAFAEAHABQAIAAAFgEQAFgCADgFIANAHQgGAJgIAEQgJAFgLAAQgJAAgJgFgAAUgGQgBgGgCgEQgDgEgFgCIgJgCQgIAAgEAFQgGAFgBAIIAnAAIAAAAg");
	this.shape_94.setTransform(624.2,37.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgSAzQgIgEgGgGIALgKQAEAEAFADQAFACAGAAQAKAAAGgGQAGgGAAgLIAAgGQgDAFgGAEQgGAEgHAAQgKAAgHgFQgIgFgEgJQgFgIAAgLQAAgMAFgIQAEgJAIgFQAHgFAKAAQAHAAAGADQAGAEADAFIAAgLIAPAAIAABFQAAAMgFAIQgFAIgIAFQgJAEgKAAQgJAAgIgDgAgKgkQgFAEgCAFQgDAGAAAHQAAAHADAFQACAFAFADQAFADAFABQAHgBAFgDQAFgDACgFQADgFAAgHQAAgHgDgGQgCgFgFgEQgFgDgHAAQgFAAgFADg");
	this.shape_95.setTransform(615.225,39.375);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSAkQgGgCgDgGQgEgFAAgGQAAgIAEgEQADgFAGgCIAMgFIAXgEQgBgFgEgEQgDgFgHAAQgFAAgFAEQgFADgDAEIgMgJQAFgGAIgFQAIgEAHAAQAKAAAHADQAHAEAEAHQAEAHAAAJIAAAtIgPAAIAAgKQgEAFgGADQgGAEgHAAQgHAAgFgDgAgDAGQgFAAgEADQgDACgBAFQAAAEAEADQAEACAGAAQAEAAAFgCQAEgDADgDQADgFAAgFIAAgGg");
	this.shape_96.setTransform(606.675,37.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIAPAAIAAALQAEgFAFgEQAHgDAKAAIAAAPQgKAAgGADQgFADgCAFQgCAFgBAGIAAAmg");
	this.shape_97.setTransform(600.4,37.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgSAkQgGgCgDgGQgEgFAAgGQAAgIAEgEQADgFAGgCIAMgFIAXgEQgBgFgEgEQgDgFgHAAQgFAAgFAEQgFADgDAEIgMgJQAFgGAIgFQAIgEAHAAQAKAAAHADQAHAEAEAHQAEAHAAAJIAAAtIgPAAIAAgKQgEAFgGADQgGAEgHAAQgHAAgFgDgAgDAGQgFAAgEADQgDACgBAFQAAAEAEADQAEACAGAAQAEAAAFgCQAEgDADgDQADgFAAgFIAAgGg");
	this.shape_98.setTransform(592.975,37.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgYAuQgMgHgHgMQgHgMAAgPQAAgOAHgMQAHgMAMgHQAMgHAOgBQAOABAMAGQAMAGAHAMIgOAIQgFgIgIgFQgIgEgKAAQgKAAgIAFQgJAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAJAFAKAAQAKAAAHgDQAHgEAFgFQAEgHAAgHIgjAAIAAgOIAzAAIAAAGQAAAPgGALQgHALgLAGQgLAGgOAAQgOAAgMgHg");
	this.shape_99.setTransform(583.025,36.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AANAxQgLAAgFgFQgGgGAAgLIAAgmIgNAAIAAgNIANAAIAAgUIAOgFIAAAZIASAAIAAANIgSAAIAAAmQAAAEACACQADACAEAAIAJAAIAAAOg");
	this.shape_100.setTransform(569.675,36.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgQAiQgIgFgFgJQgFgJAAgLQAAgKAFgJQAFgJAIgFQAIgFAKAAQALAAAIAFQAJAFAFAIIgMAHQgEgFgFgDQgFgDgGAAQgGAAgFAEQgFADgDAFQgDAGAAAGQAAAHADAGQADAFAFAEQAFADAGAAQAGAAAFgDQAFgDAEgFIAMAHQgFAJgJAEQgIAFgLAAQgKAAgIgFg");
	this.shape_101.setTransform(562.775,37.825);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgSAiQgIgGgEgJQgEgIgBgLQABgKAEgIQAEgJAIgGQAJgFAJAAQAJAAAHADQAIADAEAIQAGAHABALIAAAGIAAAHIg1AAQABAIAFAFQAFAEAHABQAIAAAFgEQAFgCADgFIANAHQgGAJgIAEQgJAFgLAAQgJAAgJgFgAAUgGQgBgGgCgEQgDgEgFgCIgJgCQgIAAgEAFQgGAFgBAIIAnAAIAAAAg");
	this.shape_102.setTransform(554.45,37.85);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_103.setTransform(548.2,36.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAiQgHgGgFgJQgEgIgBgLQABgKAEgIQAFgJAHgGQAJgFAJAAQAJAAAHADQAIADAEAIQAFAHACALIAAAGIAAAHIg2AAQACAIAFAFQAFAEAHABQAIAAAFgEQAFgCADgFIANAHQgGAJgIAEQgJAFgLAAQgJAAgJgFgAAUgGQgBgGgDgEQgCgEgFgCIgJgCQgHAAgFAFQgFAFgCAIIAnAAIAAAAg");
	this.shape_104.setTransform(541.95,37.85);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgSAyQgJgDgFgGQgGgGgBgJIAOgFQADAIAHAFQAHAEAKAAQALABAFgFQAHgFAAgGQgBgGgDgCQgDgDgHgCIgMgDIgNgDQgFgCgFgCQgFgDgDgGQgDgFAAgHQAAgKAFgHQAEgGAJgEQAIgFAKAAQAKABAIADQAIADAGAGQAEAGACAIIgOAGQgDgHgFgGQgHgEgKAAIgJABQgFACgDAEQgCADAAAEQgBAFAEADQADADAFACIALADIAOAEQAGABAFACQAFAEAEAEQAEAFAAAIQgBAKgFAHQgEAHgKAFQgIAEgMgBQgKAAgJgDg");
	this.shape_105.setTransform(532.85,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},211).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},211).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},211).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},211).wait(14));

	// btn
	this.instance_2 = new lib.agev();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,41,0.9,0.9);

	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(611.95,60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},211).to({state:[{t:this.instance_3},{t:this.instance_2}]},211).to({state:[{t:this.instance_3},{t:this.instance_2}]},211).to({state:[{t:this.instance_3},{t:this.instance_2}]},211).wait(14));

	// plate
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOAfQgGgFgDgHQgEgJAAgKQAAgJAEgIQADgJAGgEQAHgEAHAAQAIAAAGAEQAHAEADAJQAEAIAAAJQAAAKgEAJQgDAHgHAFQgGAEgIABQgHgBgHgEgAgJgPQgDAGAAAJQAAAKADAGQAEAFAFAAQAGAAADgFQAEgGAAgKQAAgJgEgGQgDgFgGgBQgFABgEAFg");
	this.shape_106.setTransform(671.025,80.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIAbgdIACgDIABgEQAAgDgCgCQgDgCgDgBQgDABgEADQgCACAAAFIgOgCQABgHADgFQADgFAFgDQAFgDAGAAQAGAAAFADQAFADADAFQAEAEAAAGQAAAFgDAFQgBAEgFAEIgOAQIAYAAIAAAOg");
	this.shape_107.setTransform(664.8,80.775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgOAfQgGgFgDgHQgEgJAAgKQAAgJAEgIQADgJAGgEQAHgEAHAAQAIAAAGAEQAHAEADAJQAEAIAAAJQAAAKgEAJQgDAHgHAFQgGAEgIABQgHgBgHgEgAgJgPQgDAGAAAJQAAAKADAGQAEAFAFAAQAGAAADgFQAEgGAAgKQAAgJgEgGQgDgFgGgBQgFABgEAFg");
	this.shape_108.setTransform(658.575,80.85);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIAagdIADgDIABgEQAAgDgDgCQgCgCgDgBQgEABgDADQgCACAAAFIgOgCQAAgHAEgFQADgFAFgDQAFgDAGAAQAGAAAFADQAGADACAFQADAEABAGQAAAFgDAFQgCAEgEAEIgOAQIAYAAIAAAOg");
	this.shape_109.setTransform(652.35,80.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgLAPIAIgdIAPAAIgOAdg");
	this.shape_110.setTransform(645.2,84.175);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAJAjIAAgaQAAgFgCgDQgDgCgEgBQgDABgDACQgDADAAAFIAAAaIgOAAIAAhFIAOAAIAAAaIAHgGQADgCAEABQAGAAAEACQAEADACAFQADAFAAAGIAAAdg");
	this.shape_111.setTransform(640.85,80.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAIAhQgIAAgDgEQgFgEAAgJIAAgTIgJAAIAAgNIAJAAIAAgMIAOgEIAAAQIALAAIAAANIgLAAIAAARIABAEQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAGAAIAAANg");
	this.shape_112.setTransform(635.55,80.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgPAhQgFgDgEgEIAKgJIAFADIAGABQAFAAADgDQAEgFACgGIgGAEIgGAAQgHAAgFgCQgGgDgCgGQgEgEAAgGQAAgHAEgGQADgFAGgEQAFgCAHAAQAHAAAHAEQAFAEAEAIQADAHAAALQAAAJgEAJQgEAIgGAFQgHAEgIABQgHgBgFgCgAgHgRQgDADAAAEQAAAEADADQADADAEAAQAEAAACgDQADgDAAgEQAAgEgDgDQgCgDgEgBQgEABgDADg");
	this.shape_113.setTransform(630.35,80.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgWAjIAAgLIAbgdIACgDIABgEQAAgDgCgCQgDgCgDgBQgDABgEADQgCACAAAFIgOgCQABgHADgFQADgFAFgDQAFgDAGAAQAGAAAFADQAFADADAFQAEAEAAAGQAAAFgDAFQgBAEgFAEIgOAQIAYAAIAAAOg");
	this.shape_114.setTransform(624.3,80.775);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgHAZIgSgxIAPAAIAKAfIALgfIAPAAIgSAxg");
	this.shape_115.setTransform(615.925,81.75);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgMAXQgGgDgEgHQgDgFAAgIQAAgGADgHQAEgFAGgEQAGgDAHAAQAGAAAGADQAHAEADAFQADAHABAGQgBAIgDAFQgDAHgHADQgGADgGABQgHgBgGgDgAgHgIQgDAEAAAEQAAAGADADQADAEAFgBQAFABADgEQADgDAAgGQAAgEgDgEQgDgEgFAAQgFAAgDAEg");
	this.shape_116.setTransform(610.05,81.75);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AASAiIgggpIAAApIgPAAIAAhDIANAAIAfAqIAAgqIAOAAIAABDg");
	this.shape_117.setTransform(603.2,80.85);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgNAWQgFgDgCgIIAMgDQABADACABQADACADAAIAFgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAIgGgDIgFgCIgGgCIgEgDQgCgDAAgFQAAgGADgDQACgEAFgCQAEgBAFAAQAIAAAFADQAFAFACAHIgMADQAAgCgDgDQgCgCgEAAIgDABIgCADQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABIAFABIAGACIAGADQADABACACQACADAAAFQAAAFgDAEQgDADgEADQgFACgGAAQgHAAgGgFg");
	this.shape_118.setTransform(594.125,81.75);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgOAgQgFgDgDgGQgDgGAAgIQAAgHADgFQADgGAFgEQAGgDAGAAQAEAAADACQAEABACADIAAgZIAPAAIAABFIgPAAIAAgFQgCADgEACQgDACgEAAQgHAAgFgEgAgEgBQgDABgCADIgBAGIABAHQACADACABQADACACAAIAGgCQACgBACgDQABgDAAgEQAAgEgBgDIgEgDQgDgBgDAAQgCAAgCABg");
	this.shape_119.setTransform(588.475,80.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAJAaIAAgaQAAgEgCgEQgDgDgEAAQgDAAgDADQgCAEgBAEIAAAaIgOAAIAAgxIAOAAIAAAFIAHgFQACgCAFAAQAGAAAEADQAEADADAFQACAFAAAHIAAAcg");
	this.shape_120.setTransform(582.55,81.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgWAiIAAhDIAtAAIAAAOIgfAAIAAANIAVAAIAAANIgVAAIAAANIAfAAIAAAOg");
	this.shape_121.setTransform(576.575,80.85);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgMAXQgFgDgDgHQgEgFABgIQgBgGAEgHQADgFAFgEQAGgDAGAAQAHgBAFADQAFADAEAFQADAFAAAHIAAADIAAAFIghAAQABAFADABQACACAEAAQAEAAADgBQADgCACgDIAKAGQgBAEgFADIgIAFIgJACQgGgBgGgDgAAKgEQAAgEgDgCQgDgDgEAAQgDAAgCADQgDACgBAEIATAAIAAAAg");
	this.shape_122.setTransform(567.8,81.75);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgHAjIAAhFIAPAAIAABFg");
	this.shape_123.setTransform(563.45,80.75);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgOAZQgDgCgCgEQgDgDAAgFQAAgGAFgEQAEgDAIgDIANgCQAAgDgDgCQgCgBgDAAQgCAAgDACQgDACgCACIgLgHQAEgGAGgDQAGgCAGAAQAGgBAFADQAFADADAEQADAFAAAHIAAAdIgOAAIAAgFQgDADgEACQgDACgFAAQgEAAgEgCgAgCAFQgBAAAAAAQgBABgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIACADIAEACIAFgCIAEgDQACgDAAgDIAAgCg");
	this.shape_124.setTransform(559.025,81.75);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgEQgEgEgBgFIAPgGIACAFQACACADABQADACADgBQAGAAADgCQADgBAAgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgGgCIgGgCQgHgCgFgDQgFgCgDgDQgDgEAAgGQAAgHAEgFQADgEAGgDQAFgDAGABQAHAAAGABQAFADAEAEQAEAEABAGIgOAEQgBgEgEgCQgDgDgFAAQgEAAgCACQgDACAAACQAAABAAABQAAAAABABQAAAAAAABQABAAAAABIAFACIAFABQAIACAGAEQAFABADAEQADAEAAAFQgBAHgDAGQgDAEgGADQgGACgIABQgHgBgGgCg");
	this.shape_125.setTransform(553.125,80.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},211).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},211).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},211).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},211).wait(14));

	// bg
	this.instance_4 = new lib.bgtexture();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-99,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(858));

	// bg
	this.instance_5 = new lib.bgtexture();
	this.instance_5.parent = this;
	this.instance_5.setTransform(498,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(858));

	// garage-1.jpg
	this.instance_6 = new lib.pc1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(368.25,57.05,0.7926,0.7926,0,0,0,168.2,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({alpha:0},7).to({_off:true},1).wait(139).to({_off:false,alpha:1},0).wait(64).to({alpha:0},7).to({_off:true},1).wait(139).to({_off:false,alpha:1},0).wait(64).to({alpha:0},7).to({_off:true},1).wait(139).to({_off:false,alpha:1},0).wait(64).to({alpha:0},7).to({_off:true},1).wait(139).to({_off:false,alpha:1},0).wait(14));

	// garage-2.jpg
	this.instance_7 = new lib.pc2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(368.25,57.05,0.7926,0.7926,0,0,0,168.2,80.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).wait(70).to({alpha:0},7).to({_off:true},1).wait(133).to({_off:false,alpha:1},0).wait(70).to({alpha:0},7).to({_off:true},1).wait(133).to({_off:false,alpha:1},0).wait(70).to({alpha:0},7).to({_off:true},1).wait(133).to({_off:false,alpha:1},0).wait(70).to({alpha:0},7).to({_off:true},1).wait(83));

	// garage-3.jpg
	this.instance_8 = new lib.pc3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(368.25,52.05,0.7926,0.7926,0,0,0,168.2,80.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(134).to({_off:false},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(134).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(134).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(134).to({_off:false,alpha:1},0).wait(69).to({alpha:0},7).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265,33.5,584.8,236.5);
// library properties:
lib.properties = {
	id: '2D2EAD1C98E8D94DBC02B1E32F878629',
	width: 728,
	height: 90,
	fps: 30,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_Garage_atlas_P_.png", id:"728x90_Garage_atlas_P_"},
		{src:"images/728x90_Garage_atlas_NP_.jpg", id:"728x90_Garage_atlas_NP_"}
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