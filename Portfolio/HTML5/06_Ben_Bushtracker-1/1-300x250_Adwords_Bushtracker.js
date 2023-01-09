(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1_300x250_Adwords_Bushtracker_atlas_P_", frames: [[906,502,310,73],[0,502,404,130],[406,502,498,98],[602,0,600,500],[0,0,600,500]]},
		{name:"1_300x250_Adwords_Bushtracker_atlas_NP_", frames: [[0,0,600,500]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["1_300x250_Adwords_Bushtracker_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bushtrackerlogo = function() {
	this.initialize(ss["1_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dust = function() {
	this.initialize(ss["1_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.initialize(ss["1_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.track = function() {
	this.initialize(ss["1_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wheels = function() {
	this.initialize(ss["1_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(4);
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


(lib.wheels_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.wheels();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheels_1, new cjs.Rectangle(0,0,600,500), null);


(lib.track_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.track();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.track_1, new cjs.Rectangle(0,0,600,500), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBHIgpg1IgKALIAAAqIgoAAIAAiOIAoAAIAAAzIAvgzIAyAAIg9A+IA9BQg");
	this.shape.setTransform(235.05,15.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBAQgQgJgKgRQgKgRgBgVQABgUAKgRQAKgRAQgKQASgKAUAAQAOAAAMAFQANAFAKAIQAKAJAHANIgjAUQgEgKgIgFQgJgFgKAAQgIAAgIAEQgIAFgFAIQgEAIAAAJQAAAKAEAIQAFAIAIAEQAIAFAIAAQAKAAAJgFQAIgGAEgJIAjAUQgHAMgKAJQgKAJgNAFQgMAFgOAAQgUgBgSgKg");
	this.shape_1.setTransform(219.75,15.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_2.setTransform(204.025,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BHIAAiOIBFAAQAOABALAFQAKAFAGAJQAHAKAAAMQAAAKgEAHQgEAIgHAEQAIAEAEAHQAFAIAAAKQAAANgGAKQgHAJgKAFQgLAFgOAAgAgVAlIAdAAQAGAAAEgDQADgEAAgFQAAgEgDgEQgEgDgGAAIgdAAgAgVgNIAcAAQAGAAADgEQADgDAAgFQAAgEgDgEQgDgDgGgBIgcAAg");
	this.shape_3.setTransform(189.775,15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBHIAAhoIgkAAIAAgmIBxAAIAAAmIglAAIAABog");
	this.shape_4.setTransform(176.6,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBBQgOgJgJgOQgHgPgBgUIAAhPIAoAAIAABOQAAAOAGAHQAGAIAKAAQALAAAGgIQAHgHAAgOIAAhOIAmAAIAABPQAAAUgIAPQgHAOgOAJQgOAIgTAAQgRAAgOgIg");
	this.shape_5.setTransform(163.25,15.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBAQgRgJgJgRQgKgRgBgVQABgUAKgRQAJgRARgKQARgKAUAAQAVAAARAKQARAKAKARQAKARAAAUQAAAVgKARQgKARgRAJQgRAKgVABQgUgBgRgKgAgQgeQgIAFgEAIQgEAIAAAJQAAAKAEAIQAEAIAIAEQAIAFAIAAQAKAAAHgFQAIgEAEgIQAEgIABgKQgBgJgEgIQgEgIgIgFQgHgEgKAAQgIAAgIAEg");
	this.shape_6.setTransform(147.875,15.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBHIg4hJIAABJIgmAAIAAiOIAgAAIA5BLIAAhLIAmAAIAACOg");
	this.shape_7.setTransform(127,15.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_8.setTransform(111.775,15.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUBHIAAiOIApAAIAACOg");
	this.shape_9.setTransform(100.825,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxBHIAAiOIAoAAIAABqIA7AAIAAAkg");
	this.shape_10.setTransform(92.175,15.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_11.setTransform(78.325,15.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUBHIgbgxIgRAAIAAAxIglAAIAAiOIBEAAQAOABALAGQALAGAGALQAHAKAAANQAAAOgHAKQgHALgLAGIAgA2gAgYgKIAaAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgDgEgIAAIgaAAg");
	this.shape_12.setTransform(64.2,15.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBHIAAhoIgkAAIAAgmIBxAAIAAAmIgkAAIAABog");
	this.shape_13.setTransform(50.75,15.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBFQgNgFgIgIQgIgJgCgKIAigNQABAEAEAEQAEADAGADQAGACAIAAQAIAAAFgCQAFgCAAgFQAAgEgDgCQgEgCgGgCIgLgDQgPgDgLgGQgMgGgGgIQgHgJAAgOQAAgPAIgKQAIgLANgFQANgFAOAAQAPAAANAFQAMAFAIAJQAHAIADALIgiANQgCgHgHgFQgHgFgKAAQgGAAgEACQgFADAAAEQABAFAFACQAGADAJADIAUAGQAJADAIAFQAIAEAFAIQAFAIAAAMQAAAOgIALQgHAKgOAGQgNAGgSAAQgQgBgOgFg");
	this.shape_14.setTransform(37.975,15.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBBQgNgJgIgOQgIgPgBgUIAAhPIAnAAIAABOQAAAOAHAHQAGAIAKAAQALAAAGgIQAHgHAAgOIAAhOIAmAAIAABPQABAUgJAPQgHAOgOAJQgOAIgTAAQgSAAgOgIg");
	this.shape_15.setTransform(24.8,15.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_16.setTransform(9.875,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,243.8,29.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAWIApAAIAAAeIgpAAIAAAUIA/AAIAAAjg");
	this.shape.setTransform(218.025,15.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBHIAAg0IgvAAIAAA0IgoAAIAAiOIAoAAIAAA1IAvAAIAAg1IAoAAIAACOg");
	this.shape_1.setTransform(204.425,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBHIAAhoIgkAAIAAgmIBvAAIAAAmIgkAAIAABog");
	this.shape_2.setTransform(190.85,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBHIgcgxIgPAAIAAAxIgnAAIAAiOIBEAAQAPABALAGQALAGAHALQAGAKAAANQAAAOgHAKQgGALgMAGIAfA2gAgXgKIAaAAQAGAAAEgDQAEgEAAgFQAAgGgEgEQgEgEgGAAIgaAAg");
	this.shape_3.setTransform(173.15,15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBAQgRgJgJgRQgKgRgBgVQABgUAKgRQAJgRARgKQARgKAUAAQAVAAARAKQARAKAKARQAKARAAAUQAAAVgKARQgKARgRAJQgRAKgVABQgUgBgRgKgAgQgeQgIAFgEAIQgEAIAAAJQAAAKAEAIQAEAIAIAEQAIAFAIAAQAKAAAHgFQAIgEAEgIQAEgIABgKQgBgJgEgIQgEgIgIgFQgHgEgKAAQgIAAgIAEg");
	this.shape_4.setTransform(157.625,15.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAYIApAAIAAAfIgpAAIAAA0g");
	this.shape_5.setTransform(143.825,15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBFQgNgFgIgIQgIgJgCgKIAigNQABAEAEAEQAEADAGADQAGACAIAAQAIAAAFgCQAFgCAAgFQAAgEgDgCQgEgCgGgCIgLgDQgPgDgLgGQgMgGgGgIQgHgJAAgOQAAgPAIgKQAIgLANgFQANgFAOAAQAPAAANAFQAMAFAIAJQAHAIADALIgiANQgCgHgHgFQgHgFgKAAQgGAAgEACQgFADAAAEQABAFAFACQAGADAJADIAUAGQAJADAIAFQAIAEAFAIQAFAIAAAMQAAAOgIALQgHAKgOAGQgNAGgSAAQgQgBgOgFg");
	this.shape_6.setTransform(125.775,15.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBHIg4hJIAABJIgmAAIAAiOIAgAAIA5BLIAAhLIAmAAIAACOg");
	this.shape_7.setTransform(112.35,15.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_8.setTransform(97.125,15.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBHIg3iOIApAAIAhBYIAhhYIAqAAIg4COg");
	this.shape_9.setTransform(81.875,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_10.setTransform(66.625,15.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUBHIgbgxIgRAAIAAAxIglAAIAAiOIBEAAQAOABALAGQALAGAGALQAHAKAAANQAAAOgHAKQgHALgLAGIAgA2gAgYgKIAaAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgDgEgIAAIgaAAg");
	this.shape_11.setTransform(52.5,15.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_12.setTransform(37.425,15.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghBAQgQgJgKgRQgKgRAAgVQAAgUAKgRQAKgRAQgKQASgKATAAQAOAAANAFQANAFAKAIQAKAJAHANIgiAUQgFgKgJgFQgIgFgKAAQgIAAgJAEQgHAFgFAIQgEAIAAAJQAAAKAEAIQAFAIAHAEQAJAFAIAAQAKAAAIgFQAJgGAFgJIAiAUQgHAMgKAJQgLAJgMAFQgNAFgOAAQgTgBgSgKg");
	this.shape_13.setTransform(22.25,15.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxBHIAAiOIAoAAIAABqIA7AAIAAAkg");
	this.shape_14.setTransform(3.575,15.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_15.setTransform(-10.275,15.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAWIApAAIAAAeIgpAAIAAAUIA/AAIAAAjg");
	this.shape_16.setTransform(-23.875,15.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUBHIgbgxIgQAAIAAAxIgmAAIAAiOIBDAAQAOABAMAGQALAGAGALQAHAKAAANQAAAOgHAKQgHALgLAGIAgA2gAgXgKIAaAAQAGAAAEgDQAEgEAAgFQAAgGgEgEQgEgEgGAAIgaAAg");
	this.shape_17.setTransform(-36.35,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-45.7,0,271.6,29.2), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(30,309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(30,309,498,98), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Bushtrackerlogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,310,73), null);


(lib.dust_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dust();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dust_1, new cjs.Rectangle(0,0,404,130), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIAtAAIAAAOIgeAAIAAAMIAUAAIAAAMIgUAAIAAANIAeAAIAAAOg");
	this.shape.setTransform(205.05,40.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAhIgNgYIgKAAIAAAYIgOAAIAAhBIAcAAQAGAAAFACQAGADADAFQADAEAAAGQAAAHgEAFQgDAEgGACIAPAbgAgMgEIAOAAQADAAADgCQADgCgBgDQABgDgDgCQgDgDgDAAIgOAAg");
	this.shape_1.setTransform(196.15,40.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAeQgJgFgEgHQgFgIAAgKQAAgJAFgIQAEgIAJgEQAHgFAJAAQAKAAAIAFQAHAEAFAIQAFAIAAAJQAAAKgFAIQgFAHgHAFQgIAFgKAAQgJAAgHgFgAgJgRQgFADgCAEQgDAFAAAFQAAAGADAEQACAFAFADQAFACAEAAQAGAAAFgCQAEgDADgFQACgEAAgGQAAgFgCgFQgDgEgEgDQgFgCgGgBQgEABgFACg");
	this.shape_2.setTransform(185.95,40.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAhIAAgrIgRArIgOAAIgQgqIAAAqIgOAAIAAhBIAUAAIARAtIASgtIAUAAIAABBg");
	this.shape_3.setTransform(174.65,40.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAhIgegoIAAAoIgPAAIAAhBIAMAAIAfAoIAAgoIAOAAIAABBg");
	this.shape_4.setTransform(158.3,40.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAhIgNgYIgKAAIAAAYIgPAAIAAhBIAdAAQAHAAAFACQAFADADAFQADAEAAAGQAAAHgDAFQgEAEgFACIAOAbgAgMgEIAOAAQADAAADgCQADgCAAgDQAAgDgDgCQgDgDgDAAIgOAAg");
	this.shape_5.setTransform(148.85,40.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAhIgFgNIgbAAIgGANIgPAAIAbhBIAOAAIAcBBgAAIAHIgIgUIgIAUIAQAAg");
	this.shape_6.setTransform(138.85,40.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIAtAAIAAAOIgfAAIAAAMIAVAAIAAAMIgVAAIAAANIAfAAIAAAOg");
	this.shape_7.setTransform(129.65,40.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIAPAAIAAAzIAeAAIAAAOg");
	this.shape_8.setTransform(121.25,40.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#253A81").s().p("AoxCYQg/AAgsgtQgsgsAAg/QAAg+AsgtQAsgrA/gBIRjAAQA/ABAsArQAsAtAAA+QAAA/gsAsQgsAtg/AAg");
	this.shape_9.setTransform(162.9935,40.6291,0.8168,0.8168);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,-38.6,0,81).s().p("A5YGCIAAsDMAyxAAAIAAMDg");
	this.shape_10.setTransform(163,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0.5,0,325,77.2), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,600,500), null);


// stage content:
(lib._1300x250_Adwords_Bushtracker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_801 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(801).call(this.frame_801).wait(66));

	// Слой_27
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],3,125,3,375).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],2.3,53.5,2.3,303.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],1.6,-18.1,1.6,231.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],0.9,-89.7,0.9,160.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],0.2,-161.2,0.2,88.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-0.5,-232.8,-0.5,17.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.3,-304.4,-1.3,-54.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-2,-375.9,-2,-125.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.9,-373.4,-1.9,-123.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.9,-365.7,-1.9,-115.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.7,-352.9,-1.7,-102.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.6,-335,-1.6,-85).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.3,-312,-1.3,-62).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-1.1,-283.9,-1.1,-33.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-0.7,-250.7,-0.7,-0.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],-0.3,-212.4,-0.3,37.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],0.1,-168.9,0.1,81.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],0.6,-120.3,0.6,129.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],1.1,-66.7,1.1,183.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],1.7,-7.9,1.7,242.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#253A81","rgba(37,58,129,0.008)"],[0,1],2.3,56,2.3,306).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},266).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},266).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},266).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(287).to({_off:false},0).wait(1).to({_off:true},1).wait(287).to({_off:false},0).wait(1).to({_off:true},1).wait(287).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(266).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(266).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(266).to({_off:false},0).to({_off:true},1).wait(14));

	// Слой_29
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-200.2,-53.4,-70,-2).s().p("AoxCLQg5AAgpgpQgpgoAAg6IAAAAQAAg5ApgpQApgoA5AAIRjAAQA5AAApAoQApApAAA5IAAAAQAAA6gpAoQgpApg5AAg");
	this.shape_21.setTransform(150.4929,225.9284,0.8168,0.8168);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-159.7,-42.9,-53.3,-0.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_22.setTransform(150.5,225.925);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-155.8,-42.2,-49.5,-0.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_23.setTransform(150.5,225.925);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-151.9,-41.4,-45.6,0.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_24.setTransform(150.5,225.925);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-148,-40.7,-41.7,1.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_25.setTransform(150.5,225.925);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-144.2,-39.9,-37.8,2.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_26.setTransform(150.5,225.925);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-140.3,-39.2,-33.9,2.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_27.setTransform(150.5,225.925);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-136.4,-38.5,-30,3.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_28.setTransform(150.5,225.925);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-132.5,-37.7,-26.2,4.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_29.setTransform(150.5,225.925);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-128.6,-37,-22.3,5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_30.setTransform(150.5,225.925);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-124.7,-36.3,-18.4,5.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_31.setTransform(150.5,225.925);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-120.9,-35.5,-14.5,6.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_32.setTransform(150.5,225.925);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-117,-34.8,-10.6,7.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_33.setTransform(150.5,225.925);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-113.1,-34,-6.7,8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_34.setTransform(150.5,225.925);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-109.2,-33.3,-2.9,8.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_35.setTransform(150.5,225.925);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-105.3,-32.6,1,9.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_36.setTransform(150.5,225.925);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-101.5,-31.8,4.9,10.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_37.setTransform(150.5,225.925);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-97.6,-31.1,8.8,10.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_38.setTransform(150.5,225.925);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-93.7,-30.4,12.7,11.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_39.setTransform(150.5,225.925);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-89.8,-29.6,16.5,12.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_40.setTransform(150.5,225.925);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-85.9,-28.9,20.4,13.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_41.setTransform(150.5,225.925);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-82,-28.1,24.3,13.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_42.setTransform(150.5,225.925);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-78.2,-27.4,28.2,14.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_43.setTransform(150.5,225.925);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-74.3,-26.7,32.1,15.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_44.setTransform(150.5,225.925);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-70.4,-25.9,36,16.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_45.setTransform(150.5,225.925);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-66.5,-25.2,39.8,16.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_46.setTransform(150.5,225.925);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-62.6,-24.5,43.7,17.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_47.setTransform(150.5,225.925);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-58.7,-23.7,47.6,18.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_48.setTransform(150.5,225.925);
	this.shape_48._off = true;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-54.9,-23,51.5,19).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_49.setTransform(150.5,225.925);
	this.shape_49._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-51,-22.2,55.4,19.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_50.setTransform(150.5,225.925);
	this.shape_50._off = true;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-47.1,-21.5,59.3,20.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_51.setTransform(150.5,225.925);
	this.shape_51._off = true;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-43.2,-20.8,63.1,21.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_52.setTransform(150.5,225.925);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-39.3,-20.1,67,21.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_53.setTransform(150.5,225.925);
	this.shape_53._off = true;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-35.4,-19.4,70.9,22.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_54.setTransform(150.5,225.925);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-31.6,-18.6,74.8,23.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_55.setTransform(150.5,225.925);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-27.7,-17.9,78.7,24.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_56.setTransform(150.5,225.925);
	this.shape_56._off = true;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-23.8,-17.1,82.6,24.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_57.setTransform(150.5,225.925);
	this.shape_57._off = true;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-19.9,-16.4,86.4,25.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_58.setTransform(150.5,225.925);
	this.shape_58._off = true;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-16,-15.7,90.3,26.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_59.setTransform(150.5,225.925);
	this.shape_59._off = true;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-12.1,-14.9,94.2,27.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_60.setTransform(150.5,225.925);
	this.shape_60._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-8.3,-14.2,98.1,27.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_61.setTransform(150.5,225.925);
	this.shape_61._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-4.4,-13.5,102,28.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_62.setTransform(150.5,225.925);
	this.shape_62._off = true;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-0.5,-12.7,105.9,29.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_63.setTransform(150.5,225.925);
	this.shape_63._off = true;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],3.4,-12,109.7,30).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_64.setTransform(150.5,225.925);
	this.shape_64._off = true;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],7.3,-11.2,113.6,30.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_65.setTransform(150.5,225.925);
	this.shape_65._off = true;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],11.1,-10.5,117.5,31.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_66.setTransform(150.5,225.925);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],15,-9.8,121.4,32.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_67.setTransform(150.5,225.925);
	this.shape_67._off = true;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],18.9,-9,125.3,33).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_68.setTransform(150.5,225.925);
	this.shape_68._off = true;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],22.8,-8.3,129.1,33.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_69.setTransform(150.5,225.925);
	this.shape_69._off = true;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],26.7,-7.6,133,34.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_70.setTransform(150.5,225.925);
	this.shape_70._off = true;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],30.6,-6.8,136.9,35.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_71.setTransform(150.5,225.925);
	this.shape_71._off = true;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],34.4,-6.1,140.8,35.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_72.setTransform(150.5,225.925);
	this.shape_72._off = true;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],38.3,-5.3,144.7,36.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_73.setTransform(150.5,225.925);
	this.shape_73._off = true;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],42.2,-4.6,148.6,37.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_74.setTransform(150.5,225.925);
	this.shape_74._off = true;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],46.1,-3.9,152.4,38.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_75.setTransform(150.5,225.925);
	this.shape_75._off = true;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],50,-3.1,156.3,38.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_76.setTransform(150.5,225.925);
	this.shape_76._off = true;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],53.9,-2.4,160.2,39.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_77.setTransform(150.5,225.925);
	this.shape_77._off = true;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],57.7,-1.7,164.1,40.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_78.setTransform(150.5,225.925);
	this.shape_78._off = true;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],75.4,-1.1,205.6,50.3).s().p("AoxCLQg5AAgpgpQgpgoAAg6IAAAAQAAg5ApgpQApgoA5AAIRjAAQA5AAApAoQApApAAA5IAAAAQAAA6gpAoQgpApg5AAg");
	this.shape_79.setTransform(150.4929,225.9284,0.8168,0.8168);
	this.shape_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(106).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(107).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(108).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(109).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(110).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(111).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(112).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(113).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(114).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(115).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(116).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(117).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(118).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(119).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(120).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(121).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(122).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(123).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(124).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(125).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(126).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(127).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(128).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(129).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(130).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(131).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(132).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(133).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(134).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(135).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(136).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(137).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(138).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(139).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(140).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(141).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(142).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(143).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(144).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(145).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(146).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(147).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(148).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(149).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(150).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(151).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(152).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(153).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(154).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(155).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(156).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(157).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(158).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(159).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(160).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(161).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(162).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(163).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(164).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(6));

	// Слой_30 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_52 = new cjs.Graphics().p("AETDHQgbhdglgWIhig7IAAg5ICngRIAEACQAFADACAPQACAPACCYIABCWQgHgqgOgvgAAgCpQgZgDgbgeQgagbgtgtIgognICCAFIAzAxQA5A0AUASQAOAPgFADQgFACgnAAIgnACIgVgCgAJSCjQgSgCgIgEQgGgEgYgUIhBg0QgnghANABIDVALIA1AmQA4AsAQARQADADgHgBQgPgBgKAAIhQADIg2ABIgcgBgAtCAyIFJgdIixAwIk9AegAOIBIQgZgWgIgGIgVgRIgJgJIAYgCQAagCAKAEQAKAEAoAeQAiAZAPAMIg+ADIgBAAQgLAAgWgUgAozjxIDHguIgeA5QgnAEg0AVQhmAsg5Bag");
	var mask_graphics_169 = new cjs.Graphics().p("AETDHQgbhdglgWIhig7IAAg5ICngRIAEACQAFADACAPQACAPACCYIABCWQgHgqgOgvgAAgCpQgZgDgbgeQgagbgtgtIgognICCAFIAzAxQA5A0AUASQAOAPgFADQgFACgnAAIgnACIgVgCgAJSCjQgSgCgIgEQgGgEgYgUIhBg0QgnghANABIDVALIA1AmQA4AsAQARQADADgHgBQgPgBgKAAIhQADIg2ABIgcgBgAtCAyIFJgdIixAwIk9AegAOIBIQgZgWgIgGIgVgRIgJgJIAYgCQAagCAKAEQAKAEAoAeQAiAZAPAMIg+ADIgBAAQgLAAgWgUgAozjxIDHguIgeA5QgnAEg0AVQhmAsg5Bag");
	var mask_graphics_341 = new cjs.Graphics().p("AETDHQgbhdglgWIhig7IAAg5ICngRIAEACQAFADACAPQACAPACCYIABCWQgHgqgOgvgAAgCpQgZgDgbgeQgagbgtgtIgognICCAFIAzAxQA5A0AUASQAOAPgFADQgFACgnAAIgnACIgVgCgAJSCjQgSgCgIgEQgGgEgYgUIhBg0QgnghANABIDVALIA1AmQA4AsAQARQADADgHgBQgPgBgKAAIhQADIg2ABIgcgBgAtCAyIFJgdIixAwIk9AegAOIBIQgZgWgIgGIgVgRIgJgJIAYgCQAagCAKAEQAKAEAoAeQAiAZAPAMIg+ADIgBAAQgLAAgWgUgAozjxIDHguIgeA5QgnAEg0AVQhmAsg5Bag");
	var mask_graphics_458 = new cjs.Graphics().p("AETDHQgbhdglgWIhig7IAAg5ICngRIAEACQAFADACAPQACAPACCYIABCWQgHgqgOgvgAAgCpQgZgDgbgeQgagbgtgtIgognICCAFIAzAxQA5A0AUASQAOAPgFADQgFACgnAAIgnACIgVgCgAJSCjQgSgCgIgEQgGgEgYgUIhBg0QgnghANABIDVALIA1AmQA4AsAQARQADADgHgBQgPgBgKAAIhQADIg2ABIgcgBgAtCAyIFJgdIixAwIk9AegAOIBIQgZgWgIgGIgVgRIgJgJIAYgCQAagCAKAEQAKAEAoAeQAiAZAPAMIg+ADIgBAAQgLAAgWgUgAozjxIDHguIgeA5QgnAEg0AVQhmAsg5Bag");
	var mask_graphics_630 = new cjs.Graphics().p("AETDHQgbhdglgWIhig7IAAg5ICngRIAEACQAFADACAPQACAPACCYIABCWQgHgqgOgvgAAgCpQgZgDgbgeQgagbgtgtIgognICCAFIAzAxQA5A0AUASQAOAPgFADQgFACgnAAIgnACIgVgCgAJSCjQgSgCgIgEQgGgEgYgUIhBg0QgnghANABIDVALIA1AmQA4AsAQARQADADgHgBQgPgBgKAAIhQADIg2ABIgcgBgAtCAyIFJgdIixAwIk9AegAOIBIQgZgWgIgGIgVgRIgJgJIAYgCQAagCAKAEQAKAEAoAeQAiAZAPAMIg+ADIgBAAQgLAAgWgUgAozjxIDHguIgeA5QgnAEg0AVQhmAsg5Bag");
	var mask_graphics_747 = new cjs.Graphics().p("AETDHQgbhdglgWIhig7IAAg5ICngRIAEACQAFADACAPQACAPACCYIABCWQgHgqgOgvgAAgCpQgZgDgbgeQgagbgtgtIgognICCAFIAzAxQA5A0AUASQAOAPgFADQgFACgnAAIgnACIgVgCgAJSCjQgSgCgIgEQgGgEgYgUIhBg0QgnghANABIDVALIA1AmQA4AsAQARQADADgHgBQgPgBgKAAIhQADIg2ABIgcgBgAtCAyIFJgdIixAwIk9AegAOIBIQgZgWgIgGIgVgRIgJgJIAYgCQAagCAKAEQAKAEAoAeQAiAZAPAMIg+ADIgBAAQgLAAgWgUgAozjxIDHguIgeA5QgnAEg0AVQhmAsg5Bag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_graphics_52,x:165.725,y:111.85}).wait(51).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_graphics_169,x:165.725,y:111.85}).wait(51).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_graphics_341,x:165.725,y:111.85}).wait(51).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_graphics_458,x:165.725,y:111.85}).wait(51).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_graphics_630,x:165.725,y:111.85}).wait(51).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_graphics_747,x:165.725,y:111.85}).wait(51).to({graphics:null,x:0,y:0}).wait(69));

	// Слой_31
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-200.2,-53.4,-70,-2).s().p("Aq8CLIAAkVIV5AAIAAEVg");
	this.shape_80.setTransform(166.7284,107.2548,1.5259,4.8358);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-297.1,-253.3,-98.4,-4.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_81.setTransform(166.725,107.25);
	this.shape_81._off = true;

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-288.7,-248.2,-90,0.4).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_82.setTransform(166.725,107.25);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-280.3,-243.1,-81.6,5.5).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_83.setTransform(166.725,107.25);
	this.shape_83._off = true;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-271.9,-238.1,-73.2,10.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_84.setTransform(166.725,107.25);
	this.shape_84._off = true;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-263.5,-233,-64.8,15.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_85.setTransform(166.725,107.25);
	this.shape_85._off = true;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-255.1,-228,-56.4,20.7).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_86.setTransform(166.725,107.25);
	this.shape_86._off = true;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-246.6,-222.9,-47.9,25.8).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_87.setTransform(166.725,107.25);
	this.shape_87._off = true;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-238.2,-217.8,-39.5,30.8).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_88.setTransform(166.725,107.25);
	this.shape_88._off = true;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-229.8,-212.8,-31.1,35.9).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_89.setTransform(166.725,107.25);
	this.shape_89._off = true;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-221.4,-207.7,-22.7,40.9).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_90.setTransform(166.725,107.25);
	this.shape_90._off = true;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-213,-202.6,-14.3,46).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_91.setTransform(166.725,107.25);
	this.shape_91._off = true;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-204.6,-197.6,-5.9,51.1).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_92.setTransform(166.725,107.25);
	this.shape_92._off = true;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-196.2,-192.5,2.5,56.1).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_93.setTransform(166.725,107.25);
	this.shape_93._off = true;

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-187.8,-187.5,10.9,61.2).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_94.setTransform(166.725,107.25);
	this.shape_94._off = true;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-179.3,-182.4,19.4,66.3).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_95.setTransform(166.725,107.25);
	this.shape_95._off = true;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-170.9,-177.3,27.8,71.3).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_96.setTransform(166.725,107.25);
	this.shape_96._off = true;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-162.5,-172.3,36.2,76.4).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_97.setTransform(166.725,107.25);
	this.shape_97._off = true;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-154.1,-167.2,44.6,81.4).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_98.setTransform(166.725,107.25);
	this.shape_98._off = true;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-145.7,-162.1,53,86.5).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_99.setTransform(166.725,107.25);
	this.shape_99._off = true;

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-137.3,-157.1,61.4,91.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_100.setTransform(166.725,107.25);
	this.shape_100._off = true;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-128.9,-152,69.8,96.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_101.setTransform(166.725,107.25);
	this.shape_101._off = true;

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-120.5,-147,78.2,101.7).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_102.setTransform(166.725,107.25);
	this.shape_102._off = true;

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-112,-141.9,86.7,106.8).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_103.setTransform(166.725,107.25);
	this.shape_103._off = true;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-103.6,-136.8,95.1,111.8).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_104.setTransform(166.725,107.25);
	this.shape_104._off = true;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-95.3,-131.8,103.4,116.9).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_105.setTransform(166.725,107.25);
	this.shape_105._off = true;

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-86.9,-126.7,111.8,121.9).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_106.setTransform(166.725,107.25);
	this.shape_106._off = true;

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-78.5,-121.7,120.2,127).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_107.setTransform(166.725,107.25);
	this.shape_107._off = true;

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-70,-116.6,128.7,132.1).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_108.setTransform(166.725,107.25);
	this.shape_108._off = true;

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-61.6,-111.5,137.1,137.1).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_109.setTransform(166.725,107.25);
	this.shape_109._off = true;

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-53.2,-106.5,145.5,142.2).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_110.setTransform(166.725,107.25);
	this.shape_110._off = true;

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-44.8,-101.4,153.9,147.2).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_111.setTransform(166.725,107.25);
	this.shape_111._off = true;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-36.4,-96.3,162.3,152.3).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_112.setTransform(166.725,107.25);
	this.shape_112._off = true;

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-28,-91.3,170.7,157.4).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_113.setTransform(166.725,107.25);
	this.shape_113._off = true;

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-19.6,-86.2,179.1,162.4).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_114.setTransform(166.725,107.25);
	this.shape_114._off = true;

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-11.2,-81.2,187.5,167.5).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_115.setTransform(166.725,107.25);
	this.shape_115._off = true;

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-2.7,-76.1,196,172.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_116.setTransform(166.725,107.25);
	this.shape_116._off = true;

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],5.7,-71,204.4,177.6).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_117.setTransform(166.725,107.25);
	this.shape_117._off = true;

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],14.1,-66,212.8,182.7).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_118.setTransform(166.725,107.25);
	this.shape_118._off = true;

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],22.5,-60.9,221.2,187.7).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_119.setTransform(166.725,107.25);
	this.shape_119._off = true;

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],30.9,-55.8,229.6,192.8).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_120.setTransform(166.725,107.25);
	this.shape_120._off = true;

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],39.3,-50.8,238,197.9).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_121.setTransform(166.725,107.25);
	this.shape_121._off = true;

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],47.7,-45.7,246.4,202.9).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_122.setTransform(166.725,107.25);
	this.shape_122._off = true;

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],56.1,-40.7,254.8,208).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_123.setTransform(166.725,107.25);
	this.shape_123._off = true;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],64.6,-35.6,263.3,213.1).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_124.setTransform(166.725,107.25);
	this.shape_124._off = true;

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],73,-30.5,271.7,218.1).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_125.setTransform(166.725,107.25);
	this.shape_125._off = true;

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],81.4,-25.5,280.1,223.2).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_126.setTransform(166.725,107.25);
	this.shape_126._off = true;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],89.8,-20.4,288.5,228.2).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_127.setTransform(166.725,107.25);
	this.shape_127._off = true;

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],98.2,-15.3,296.9,233.3).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_128.setTransform(166.725,107.25);
	this.shape_128._off = true;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],106.6,-10.3,305.3,238.4).s().p("AwtKhIAA1CMAhbAAAIAAVCg");
	this.shape_129.setTransform(166.725,107.25);
	this.shape_129._off = true;

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],75.4,-1.1,205.6,50.3).s().p("Aq8CLIAAkVIV5AAIAAEVg");
	this.shape_130.setTransform(166.7284,107.2548,1.5259,4.8358);
	this.shape_130._off = true;

	var maskedShapeInstanceList = [this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(52).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(53).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(54).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(55).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(56).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(57).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(58).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(59).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(60).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(61).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.shape_90).wait(62).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(63).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(64).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(65).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(66).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(67).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(68).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(69).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(70).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(71).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(72).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(73).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(74).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(75).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(76).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.shape_105).wait(77).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.shape_106).wait(78).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(79).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(80).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(81).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(82).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(83).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(84).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(85).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(86).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(87).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(88).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(89).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(90).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(91).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(92).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(93).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(94).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(95).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(96).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(97).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(98).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.shape_127).wait(99).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(100).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(101).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_130).wait(102).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(116).to({_off:false},0).to({_off:true},1).wait(69));

	// t3
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150,18.2,0.3204,0.32,0,0,0,155,36.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({regY:37.8,scaleX:0.32,y:26.7,alpha:1},13,cjs.Ease.get(1)).to({_off:true},224).wait(52).to({_off:false,regY:36.4,scaleX:0.3204,y:18.2,alpha:0},0).to({regY:37.8,scaleX:0.32,y:26.7,alpha:1},13,cjs.Ease.get(1)).to({_off:true},224).wait(52).to({_off:false,regY:36.4,scaleX:0.3204,y:18.2,alpha:0},0).to({regY:37.8,scaleX:0.32,y:26.7,alpha:1},13,cjs.Ease.get(1)).wait(224));

	// t2
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,61.3,1.0102,1.0102,0,0,0,122,14.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({y:77.45,alpha:1},13,cjs.Ease.get(1)).to({_off:true},237).wait(39).to({_off:false,y:61.3,alpha:0},0).to({y:77.45,alpha:1},13,cjs.Ease.get(1)).to({_off:true},237).wait(39).to({_off:false,y:61.3,alpha:0},0).to({y:77.45,alpha:1},13,cjs.Ease.get(1)).wait(237));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.3,41.3,1.0102,1.0102,0,0,0,90.5,14.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({y:57.4,alpha:1},13,cjs.Ease.get(1)).to({_off:true},237).wait(39).to({_off:false,y:41.3,alpha:0},0).to({y:57.4,alpha:1},13,cjs.Ease.get(1)).to({_off:true},237).wait(39).to({_off:false,y:41.3,alpha:0},0).to({y:57.4,alpha:1},13,cjs.Ease.get(1)).wait(237));

	// Слой_22
	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,289.4,1,1,0,0,0,162.5,38.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).to({y:223.9},13,cjs.Ease.get(1)).to({_off:true},224).wait(52).to({_off:false,y:289.4},0).to({y:223.9},13,cjs.Ease.get(1)).to({_off:true},224).wait(52).to({_off:false,y:289.4},0).to({y:223.9},13,cjs.Ease.get(1)).wait(224));

	// Слой_20
	this.instance_4 = new lib.dust_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(169.25,204.5,0.2624,0.2624,0,-5.3124,174.6873,162.2,93);
	this.instance_4.alpha = 0.4805;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({regY:92.9,scaleX:0.2957,scaleY:0.2957,skewX:0,skewY:180,x:160.95,y:205.6,alpha:0.9609},4).to({regX:162.1,regY:92.7,scaleX:0.6309,scaleY:0.631,skewX:5.6903,skewY:185.6892,x:161,y:213.3,alpha:0},102).to({_off:true},159).wait(24).to({_off:false,regX:162.2,regY:93,scaleX:0.2624,scaleY:0.2624,skewX:-5.3124,skewY:174.6873,x:169.25,y:204.5,alpha:0.4805},0).to({regY:92.9,scaleX:0.2957,scaleY:0.2957,skewX:0,skewY:180,x:160.95,y:205.6,alpha:0.9609},4).to({regX:162.1,regY:92.7,scaleX:0.6309,scaleY:0.631,skewX:5.6903,skewY:185.6892,x:161,y:213.3,alpha:0},102).to({_off:true},159).wait(24).to({_off:false,regX:162.2,regY:93,scaleX:0.2624,scaleY:0.2624,skewX:-5.3124,skewY:174.6873,x:169.25,y:204.5,alpha:0.4805},0).to({regY:92.9,scaleX:0.2957,scaleY:0.2957,skewX:0,skewY:180,x:160.95,y:205.6,alpha:0.9609},4).to({regX:162.1,regY:92.7,scaleX:0.6309,scaleY:0.631,skewX:5.6903,skewY:185.6892,x:161,y:213.3,alpha:0},102).wait(159));

	// Слой_17
	this.instance_5 = new lib.dust_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(209.3,201.7,0.2526,0.2556,4.5257,0,0,114.9,98.4);
	this.instance_5.alpha = 0.4805;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({regX:114.8,regY:98.2,scaleX:0.2932,scaleY:0.2994,rotation:0,x:208.8,y:201.6,alpha:0.9609},4).to({regX:114.9,regY:98.3,scaleX:0.5669,scaleY:0.7228,rotation:-9.7248,x:186.35,y:201.8,alpha:0},102).to({_off:true},159).wait(24).to({_off:false,regY:98.4,scaleX:0.2526,scaleY:0.2556,rotation:4.5257,x:209.3,y:201.7,alpha:0.4805},0).to({regX:114.8,regY:98.2,scaleX:0.2932,scaleY:0.2994,rotation:0,x:208.8,y:201.6,alpha:0.9609},4).to({regX:114.9,regY:98.3,scaleX:0.5669,scaleY:0.7228,rotation:-9.7248,x:186.35,y:201.8,alpha:0},102).to({_off:true},159).wait(24).to({_off:false,regY:98.4,scaleX:0.2526,scaleY:0.2556,rotation:4.5257,x:209.3,y:201.7,alpha:0.4805},0).to({regX:114.8,regY:98.2,scaleX:0.2932,scaleY:0.2994,rotation:0,x:208.8,y:201.6,alpha:0.9609},4).to({regX:114.9,regY:98.3,scaleX:0.5669,scaleY:0.7228,rotation:-9.7248,x:186.35,y:201.8,alpha:0},102).wait(159));

	// track.png
	this.instance_6 = new lib.track_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,-70,0.5,0.5,0,0,0,300,250);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({y:140},18,cjs.Ease.get(-1)).to({y:142.4},4,cjs.Ease.get(1)).to({y:139.6},3,cjs.Ease.get(-1)).to({_off:true},258).wait(6).to({_off:false,y:-70},0).to({y:140},18,cjs.Ease.get(-1)).to({y:142.4},4,cjs.Ease.get(1)).to({y:139.6},3,cjs.Ease.get(-1)).to({_off:true},258).wait(6).to({_off:false,y:-70},0).to({y:140},18,cjs.Ease.get(-1)).to({y:142.4},4,cjs.Ease.get(1)).to({y:139.6},3,cjs.Ease.get(-1)).wait(258));

	// wheels.png
	this.instance_7 = new lib.wheels_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,-70,0.5,0.5,0,0,0,300,250);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({y:140},18,cjs.Ease.get(-1)).to({_off:true},265).wait(6).to({_off:false,y:-70},0).to({y:140},18,cjs.Ease.get(-1)).to({_off:true},265).wait(6).to({_off:false,y:-70},0).to({y:140},18,cjs.Ease.get(-1)).wait(265));

	// Слой_19
	this.instance_8 = new lib.dust_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(78.7,191.5,0.2852,0.2852,0,0,180,188.2,110);
	this.instance_8.alpha = 0.4805;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({regX:188.1,regY:109.9,scaleX:0.2885,scaleY:0.2885,x:79,y:191.05,alpha:0.9609},4).to({regX:202.3,regY:65.4,scaleX:0.448,scaleY:0.448,skewX:12.4918,skewY:192.4922,x:93.8,y:168.5,alpha:0},102).to({_off:true},159).wait(24).to({_off:false,regX:188.2,regY:110,scaleX:0.2852,scaleY:0.2852,skewX:0,skewY:180,x:78.7,y:191.5,alpha:0.4805},0).to({regX:188.1,regY:109.9,scaleX:0.2885,scaleY:0.2885,x:79,y:191.05,alpha:0.9609},4).to({regX:202.3,regY:65.4,scaleX:0.448,scaleY:0.448,skewX:12.4918,skewY:192.4922,x:93.8,y:168.5,alpha:0},102).to({_off:true},159).wait(24).to({_off:false,regX:188.2,regY:110,scaleX:0.2852,scaleY:0.2852,skewX:0,skewY:180,x:78.7,y:191.5,alpha:0.4805},0).to({regX:188.1,regY:109.9,scaleX:0.2885,scaleY:0.2885,x:79,y:191.05,alpha:0.9609},4).to({regX:202.3,regY:65.4,scaleX:0.448,scaleY:0.448,skewX:12.4918,skewY:192.4922,x:93.8,y:168.5,alpha:0},102).wait(159));

	// Слой_1
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-268.2,-90,-125.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_131.setTransform(150,125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-247.2,-90,-111.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_132.setTransform(150,125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-226.3,-90,-97).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_133.setTransform(150,125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-205.4,-90,-82.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_134.setTransform(150,125);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-184.5,-90,-68.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_135.setTransform(150,125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-163.5,-90,-54.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_136.setTransform(150,125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-142.6,-90,-39.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_137.setTransform(150,125);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-121.7,-90,-25.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_138.setTransform(150,125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-100.8,-90,-11.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_139.setTransform(150,125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-79.8,-90,3.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_140.setTransform(150,125);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-58.9,-90,17.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_141.setTransform(150,125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-38,-90,31.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_142.setTransform(150,125);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,-17.1,-90,46).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_143.setTransform(150,125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["rgba(15,40,47,0.6)","rgba(15,40,47,0)"],[0,1],-90,3.8,-90,60.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_144.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_131}]},39).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},237).to({state:[{t:this.shape_131}]},39).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},237).to({state:[{t:this.shape_131}]},39).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).wait(237));

	// shadow
	this.instance_9 = new lib.shadow_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(162.6,193,0.3522,0.3522,0,0,0,325.3,356.1);
	this.instance_9.alpha = 0.2188;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({regX:325.1,regY:355.9,scaleX:0.5,scaleY:0.5,x:162.55,y:192.95,alpha:1},18,cjs.Ease.get(-1)).wait(265).to({regX:325.3,regY:356.1,scaleX:0.3522,scaleY:0.3522,x:162.6,y:193,alpha:0.2188},0).wait(6).to({regX:325.1,regY:355.9,scaleX:0.5,scaleY:0.5,x:162.55,y:192.95,alpha:1},18,cjs.Ease.get(-1)).wait(265).to({regX:325.3,regY:356.1,scaleX:0.3522,scaleY:0.3522,x:162.6,y:193,alpha:0.2188},0).wait(6).to({regX:325.1,regY:355.9,scaleX:0.5,scaleY:0.5,x:162.55,y:192.95,alpha:1},18,cjs.Ease.get(-1)).wait(265));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(867));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138,-70,213.8,398);
// library properties:
lib.properties = {
	id: 'DF16529FCF63B84299E99FB3096E7273',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/1_300x250_Adwords_Bushtracker_atlas_P_.png", id:"1_300x250_Adwords_Bushtracker_atlas_P_"},
		{src:"images/1_300x250_Adwords_Bushtracker_atlas_NP_.jpg", id:"1_300x250_Adwords_Bushtracker_atlas_NP_"}
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
an.compositions['DF16529FCF63B84299E99FB3096E7273'] = {
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