(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"v3_300x250_Adwords_Bushtracker_1upd_atlas_P_", frames: [[0,312,310,73],[0,0,338,310]]},
		{name:"v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_", frames: [[0,0,300,250],[302,0,300,250],[0,252,300,250],[302,252,300,250]]},
		{name:"v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2", frames: [[302,0,300,250],[302,252,300,250],[0,0,300,250],[0,252,300,250]]}
];


// symbols:



(lib.bg1 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg3 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg4 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg5 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg6 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg7 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg8 = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bushtrackerlogo = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carshadow = function() {
	this.initialize(ss["v3_300x250_Adwords_Bushtracker_1upd_atlas_P_"]);
	this.gotoAndStop(1);
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


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Bushtrackerlogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,310,73), null);


(lib.car2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.carshadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car2, new cjs.Rectangle(0,0,338,310), null);


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


(lib.bg8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg8_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg7_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg6_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg5_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg4_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.v3300x250_Adwords_Bushtracker1upd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_690 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(690).call(this.frame_690).wait(21));

	// Слой_29
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-200.2,-53.4,-70,-2).s().p("AoxCLQg5AAgpgpQgpgoAAg6IAAAAQAAg5ApgpQApgoA5AAIRjAAQA5AAApAoQApApAAA5IAAAAQAAA6gpAoQgpApg5AAg");
	this.shape.setTransform(150.4929,225.9284,0.8168,0.8168);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-161,-43.1,-54.7,-1.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_1.setTransform(150.5,225.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-158.5,-42.7,-52.1,-0.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_2.setTransform(150.5,225.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-155.9,-42.2,-49.5,-0.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_3.setTransform(150.5,225.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-153.3,-41.7,-47,0.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_4.setTransform(150.5,225.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-150.8,-41.2,-44.4,0.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_5.setTransform(150.5,225.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-148.2,-40.7,-41.9,1.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_6.setTransform(150.5,225.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-145.7,-40.2,-39.3,1.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_7.setTransform(150.5,225.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-143.1,-39.7,-36.8,2.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_8.setTransform(150.5,225.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-140.5,-39.3,-34.2,2.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_9.setTransform(150.5,225.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-138,-38.8,-31.6,3.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_10.setTransform(150.5,225.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-135.4,-38.3,-29.1,3.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_11.setTransform(150.5,225.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-132.9,-37.8,-26.5,4.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_12.setTransform(150.5,225.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-130.3,-37.3,-24,4.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_13.setTransform(150.5,225.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-127.7,-36.8,-21.4,5.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_14.setTransform(150.5,225.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-125.2,-36.3,-18.8,5.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_15.setTransform(150.5,225.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-122.6,-35.9,-16.3,6.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_16.setTransform(150.5,225.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-120.1,-35.4,-13.7,6.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_17.setTransform(150.5,225.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-117.5,-34.9,-11.2,7.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_18.setTransform(150.5,225.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-115,-34.4,-8.6,7.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_19.setTransform(150.5,225.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-112.4,-33.9,-6,8.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_20.setTransform(150.5,225.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-109.8,-33.4,-3.5,8.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_21.setTransform(150.5,225.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-107.3,-32.9,-0.9,9.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_22.setTransform(150.5,225.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-104.7,-32.5,1.6,9.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_23.setTransform(150.5,225.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-102.2,-32,4.2,10).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_24.setTransform(150.5,225.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-99.6,-31.5,6.8,10.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_25.setTransform(150.5,225.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-97,-31,9.3,11).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_26.setTransform(150.5,225.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-94.5,-30.5,11.9,11.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_27.setTransform(150.5,225.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-91.9,-30,14.4,12).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_28.setTransform(150.5,225.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-89.4,-29.5,17,12.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_29.setTransform(150.5,225.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-86.8,-29.1,19.5,12.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_30.setTransform(150.5,225.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-84.2,-28.6,22.1,13.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_31.setTransform(150.5,225.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-81.7,-28.1,24.7,13.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_32.setTransform(150.5,225.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-79.1,-27.6,27.2,14.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_33.setTransform(150.5,225.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-76.6,-27.1,29.8,14.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_34.setTransform(150.5,225.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-74,-26.6,32.3,15.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_35.setTransform(150.5,225.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-71.4,-26.1,34.9,15.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_36.setTransform(150.5,225.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-68.9,-25.7,37.5,16.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_37.setTransform(150.5,225.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-66.3,-25.2,40,16.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_38.setTransform(150.5,225.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-63.8,-24.7,42.6,17.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_39.setTransform(150.5,225.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-61.2,-24.2,45.1,17.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_40.setTransform(150.5,225.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-58.7,-23.7,47.7,18.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_41.setTransform(150.5,225.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-56.1,-23.2,50.3,18.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_42.setTransform(150.5,225.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-53.5,-22.7,52.8,19.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_43.setTransform(150.5,225.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-51,-22.2,55.4,19.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_44.setTransform(150.5,225.925);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-48.4,-21.8,57.9,20.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_45.setTransform(150.5,225.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-45.9,-21.3,60.5,20.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_46.setTransform(150.5,225.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-43.3,-20.8,63.1,21.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_47.setTransform(150.5,225.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-40.7,-20.4,65.6,21.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_48.setTransform(150.5,225.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-38.2,-19.9,68.2,22.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_49.setTransform(150.5,225.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-35.6,-19.4,70.7,22.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_50.setTransform(150.5,225.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-33.1,-18.9,73.3,23.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_51.setTransform(150.5,225.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-30.5,-18.4,75.8,23.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_52.setTransform(150.5,225.925);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-27.9,-17.9,78.4,24.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_53.setTransform(150.5,225.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-25.4,-17.4,81,24.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_54.setTransform(150.5,225.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-22.8,-17,83.5,25).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_55.setTransform(150.5,225.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-20.3,-16.5,86.1,25.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_56.setTransform(150.5,225.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-17.7,-16,88.6,26).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_57.setTransform(150.5,225.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-15.1,-15.5,91.2,26.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_58.setTransform(150.5,225.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-12.6,-15,93.8,27).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_59.setTransform(150.5,225.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-10,-14.5,96.3,27.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_60.setTransform(150.5,225.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-7.5,-14,98.9,28).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_61.setTransform(150.5,225.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-4.9,-13.6,101.4,28.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_62.setTransform(150.5,225.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-2.4,-13.1,104,28.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_63.setTransform(150.5,225.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],0.2,-12.6,106.6,29.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_64.setTransform(150.5,225.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],2.8,-12.1,109.1,29.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_65.setTransform(150.5,225.925);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],5.3,-11.6,111.7,30.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_66.setTransform(150.5,225.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],7.9,-11.1,114.2,30.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_67.setTransform(150.5,225.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],10.4,-10.6,116.8,31.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_68.setTransform(150.5,225.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],13,-10.2,119.4,31.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_69.setTransform(150.5,225.925);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],15.6,-9.7,121.9,32.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_70.setTransform(150.5,225.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],18.1,-9.2,124.5,32.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_71.setTransform(150.5,225.925);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],20.7,-8.7,127,33.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_72.setTransform(150.5,225.925);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],23.2,-8.2,129.6,33.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_73.setTransform(150.5,225.925);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],25.8,-7.7,132.1,34.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_74.setTransform(150.5,225.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],28.4,-7.2,134.7,34.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_75.setTransform(150.5,225.925);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],30.9,-6.8,137.3,35.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_76.setTransform(150.5,225.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],33.5,-6.3,139.8,35.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_77.setTransform(150.5,225.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],36,-5.8,142.4,36.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_78.setTransform(150.5,225.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],38.6,-5.3,144.9,36.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_79.setTransform(150.5,225.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],41.2,-4.8,147.5,37.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_80.setTransform(150.5,225.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],43.7,-4.3,150.1,37.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_81.setTransform(150.5,225.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],46.3,-3.8,152.6,38.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_82.setTransform(150.5,225.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],48.8,-3.4,155.2,38.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_83.setTransform(150.5,225.925);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],51.4,-2.9,157.7,39.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_84.setTransform(150.5,225.925);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],53.9,-2.4,160.3,39.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_85.setTransform(150.5,225.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],56.5,-1.9,162.9,40.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_86.setTransform(150.5,225.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],59.1,-1.4,165.4,40.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_87.setTransform(150.5,225.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],75.4,-1.1,205.6,50.3).s().p("AoxCLQg5AAgpgpQgpgoAAg6IAAAAQAAg5ApgpQApgoA5AAIRjAAQA5AAApAoQApApAAA5IAAAAQAAA6gpAoQgpApg5AAg");
	this.shape_88.setTransform(150.4929,225.9284,0.8168,0.8168);
	this.shape_88._off = true;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-159.7,-42.9,-53.3,-0.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_89.setTransform(150.5,225.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-155.8,-42.2,-49.5,-0.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_90.setTransform(150.5,225.925);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-151.9,-41.4,-45.6,0.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_91.setTransform(150.5,225.925);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-148,-40.7,-41.7,1.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_92.setTransform(150.5,225.925);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-144.2,-39.9,-37.8,2.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_93.setTransform(150.5,225.925);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-140.3,-39.2,-33.9,2.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_94.setTransform(150.5,225.925);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-136.4,-38.5,-30,3.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_95.setTransform(150.5,225.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-132.5,-37.7,-26.2,4.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_96.setTransform(150.5,225.925);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-128.6,-37,-22.3,5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_97.setTransform(150.5,225.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-124.7,-36.3,-18.4,5.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_98.setTransform(150.5,225.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-120.9,-35.5,-14.5,6.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_99.setTransform(150.5,225.925);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-117,-34.8,-10.6,7.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_100.setTransform(150.5,225.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-113.1,-34,-6.7,8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_101.setTransform(150.5,225.925);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-109.2,-33.3,-2.9,8.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_102.setTransform(150.5,225.925);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-105.3,-32.6,1,9.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_103.setTransform(150.5,225.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-101.5,-31.8,4.9,10.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_104.setTransform(150.5,225.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-97.6,-31.1,8.8,10.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_105.setTransform(150.5,225.925);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-93.7,-30.4,12.7,11.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_106.setTransform(150.5,225.925);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-89.8,-29.6,16.5,12.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_107.setTransform(150.5,225.925);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-85.9,-28.9,20.4,13.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_108.setTransform(150.5,225.925);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-82,-28.1,24.3,13.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_109.setTransform(150.5,225.925);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-78.2,-27.4,28.2,14.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_110.setTransform(150.5,225.925);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-74.3,-26.7,32.1,15.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_111.setTransform(150.5,225.925);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-70.4,-25.9,36,16.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_112.setTransform(150.5,225.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-66.5,-25.2,39.8,16.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_113.setTransform(150.5,225.925);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-62.6,-24.5,43.7,17.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_114.setTransform(150.5,225.925);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-58.7,-23.7,47.6,18.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_115.setTransform(150.5,225.925);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-54.9,-23,51.5,19).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_116.setTransform(150.5,225.925);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-47.1,-21.5,59.3,20.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_117.setTransform(150.5,225.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-43.2,-20.8,63.1,21.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_118.setTransform(150.5,225.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-39.3,-20.1,67,21.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_119.setTransform(150.5,225.925);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-35.4,-19.4,70.9,22.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_120.setTransform(150.5,225.925);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-31.6,-18.6,74.8,23.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_121.setTransform(150.5,225.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-27.7,-17.9,78.7,24.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_122.setTransform(150.5,225.925);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-23.8,-17.1,82.6,24.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_123.setTransform(150.5,225.925);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-19.9,-16.4,86.4,25.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_124.setTransform(150.5,225.925);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-16,-15.7,90.3,26.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_125.setTransform(150.5,225.925);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-12.1,-14.9,94.2,27.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_126.setTransform(150.5,225.925);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-8.3,-14.2,98.1,27.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_127.setTransform(150.5,225.925);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-4.4,-13.5,102,28.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_128.setTransform(150.5,225.925);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-0.5,-12.7,105.9,29.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_129.setTransform(150.5,225.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],3.4,-12,109.7,30).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_130.setTransform(150.5,225.925);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],7.3,-11.2,113.6,30.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_131.setTransform(150.5,225.925);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],11.1,-10.5,117.5,31.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_132.setTransform(150.5,225.925);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],15,-9.8,121.4,32.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_133.setTransform(150.5,225.925);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],18.9,-9,125.3,33).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_134.setTransform(150.5,225.925);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],22.8,-8.3,129.1,33.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_135.setTransform(150.5,225.925);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],26.7,-7.6,133,34.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_136.setTransform(150.5,225.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],30.6,-6.8,136.9,35.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_137.setTransform(150.5,225.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],34.4,-6.1,140.8,35.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_138.setTransform(150.5,225.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],38.3,-5.3,144.7,36.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_139.setTransform(150.5,225.925);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],42.2,-4.6,148.6,37.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_140.setTransform(150.5,225.925);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],46.1,-3.9,152.4,38.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_141.setTransform(150.5,225.925);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],50,-3.1,156.3,38.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_142.setTransform(150.5,225.925);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],53.9,-2.4,160.2,39.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_143.setTransform(150.5,225.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],57.7,-1.7,164.1,40.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_144.setTransform(150.5,225.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},34).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[{t:this.shape}]},23).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[{t:this.shape}]},66).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[{t:this.shape}]},23).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[{t:this.shape}]},66).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[{t:this.shape}]},23).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).to({_off:true},1).wait(111).to({_off:false},0).to({_off:true},1).wait(124).to({_off:false},0).to({_off:true},1).wait(111).to({_off:false},0).to({_off:true},1).wait(124).to({_off:false},0).to({_off:true},1).wait(111).to({_off:false},0).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(78).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(139).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(139).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(122).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(154).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(154).to({_off:false},0).to({_off:true},1).wait(81).to({_off:false},0).to({_off:true},1).wait(32));

	// Слой_22
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(150,223.9,1,1,0,0,0,162.5,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(711));

	// Слой_11
	this.instance_1 = new lib.car2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.1,181.35,0.5,0.5,0,0,0,199.2,172.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(711));

	// t1
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgXA5QgLgFgHgHQgGgGgCgJIAcgLQABAEADADQADADAFACQAFACAGAAQAHAAAEgCQAFgCAAgEQAAgDgDgCIgIgDIgJgCQgMgDgKgFQgJgFgGgGQgFgHAAgMQAAgMAHgJQAGgIALgEQAKgEAMAAQAMAAALAEQAKAEAGAHQAGAHACAJIgbAKQgCgGgGgEQgGgEgIAAQgFAAgDACQgEACAAAEQABAEAEACIAMAEIAQAFQAIADAHAEQAGADAEAHQAEAGAAAKQAAAMgGAIQgGAJgLAEQgLAFgPAAQgNAAgLgEg");
	this.shape_145.setTransform(273.675,80.075);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAaA6Igvg8IAAA8IgeAAIAAh0IAaAAIAvA9IAAg9IAeAAIAAB0g");
	this.shape_146.setTransform(262.7,80.05);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgeA1QgOgIgIgOQgIgOAAgRQAAgQAIgOQAIgOAOgIQAOgIAQAAQARAAAOAIQAOAIAIAOQAIAOAAAQQAAARgIAOQgIAOgOAIQgOAIgRAAQgQAAgOgIgAgNgYQgGADgEAHQgEAGAAAIQAAAIAEAHQAEAGAGAEQAGAEAHAAQAIAAAGgEQAGgEAEgGQADgHAAgIQAAgIgDgGQgEgHgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_147.setTransform(249.925,80.075);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgQA6IAAh0IAhAAIAAB0g");
	this.shape_148.setTransform(240.65,80.05);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgQA6IAAhUIgeAAIAAggIBdAAIAAAgIgfAAIAABUg");
	this.shape_149.setTransform(233,80.05);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgQA6IAAh0IAhAAIAAB0g");
	this.shape_150.setTransform(225.4,80.05);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("Ag2A6IAAh0IAwAAQARABAOAHQAOAIAIANQAIANAAAQQAAARgIANQgIANgOAIQgOAIgRgBgAgWAcIAOAAQAIAAAHgDQAIgEADgGQAFgGAAgJQAAgIgFgGQgDgGgIgEQgHgDgIAAIgOAAg");
	this.shape_151.setTransform(216.7,80.05);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAaA6Igug8IAAA8IggAAIAAh0IAbAAIAuA9IAAg9IAgAAIAAB0g");
	this.shape_152.setTransform(204.25,80.05);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgeA1QgOgIgIgOQgIgOAAgRQAAgQAIgOQAIgOAOgIQAOgIAQAAQARAAAOAIQAOAIAIAOQAIAOAAAQQAAARgIAOQgIAOgOAIQgOAIgRAAQgQAAgOgIgAgNgYQgGADgEAHQgEAGAAAIQAAAIAEAHQAEAGAGAEQAGAEAHAAQAIAAAGgEQAGgEAEgGQADgHAAgIQAAgIgDgGQgEgHgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_153.setTransform(191.425,80.075);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgaA1QgOgIgIgOQgJgOAAgRQAAgQAJgOQAIgOAOgIQANgIARAAQALAAAKADQALAEAIAIQAIAHAGAKIgcAQQgEgHgHgFQgHgEgIAAQgHAAgGAEQgHAEgDAGQgEAHAAAHQAAAIAEAGQADAHAHAEQAGAEAHAAQAIAAAHgFQAHgEAEgIIAcARQgGAKgIAHQgIAHgLAEQgKAEgLAAQgRAAgNgIg");
	this.shape_154.setTransform(178.725,80.075);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAaA6Igug8IAAA8IggAAIAAh0IAbAAIAvA9IAAg9IAeAAIAAB0g");
	this.shape_155.setTransform(161.8,80.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAgA6IgJgUIgtAAIgIAUIghAAIAxh0IAcAAIAyB0gAAMAKIgMgbIgLAbIAXAAg");
	this.shape_156.setTransform(149.3,80.05);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgQA6IAAh0IAhAAIAAB0g");
	this.shape_157.setTransform(140.35,80.05);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgoA6IAAh0IAhAAIAABWIAwAAIAAAeg");
	this.shape_158.setTransform(133.225,80.05);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAfA6IgIgUIguAAIgIAUIggAAIAwh0IAeAAIAxB0gAALAKIgLgbIgLAbIAWAAg");
	this.shape_159.setTransform(121.9,80.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAQA6IgWgoIgNAAIAAAoIgfAAIAAh0IA3AAQAMABAJAEQAJAFAFAJQAGAJAAALQAAALgGAIQgFAJgKAEIAaAtgAgTgIIAVAAQAGAAADgDQADgDAAgEQAAgFgDgDQgDgDgGAAIgVAAg");
	this.shape_160.setTransform(110.325,80.05);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgQA6IAAhUIgeAAIAAggIBdAAIAAAgIgfAAIAABUg");
	this.shape_161.setTransform(99.35,80.05);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgXA5QgLgFgHgHQgGgGgCgJIAcgLQABAEADADQADADAFACQAFACAGAAQAHAAAEgCQAFgCAAgEQAAgDgDgCIgIgDIgJgCQgMgDgKgFQgJgFgGgGQgFgHAAgMQAAgMAHgJQAGgIALgEQAKgEAMAAQAMAAALAEQAKAEAGAHQAGAHACAJIgbAKQgCgGgGgEQgGgEgIAAQgFAAgDACQgEACAAAEQABAEAEACIAMAEIAQAFQAIADAHAEQAGADAEAHQAEAGAAAKQAAAMgGAIQgGAJgLAEQgLAFgPAAQgNAAgLgEg");
	this.shape_162.setTransform(88.825,80.075);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgaA1QgLgHgHgMQgGgNAAgQIAAhAIAfAAIAABAQABALAFAGQAFAGAIABQAJgBAFgGQAFgGAAgLIAAhAIAgAAIAABAQAAAQgGANQgHAMgLAHQgMAGgPABQgOgBgMgGg");
	this.shape_163.setTransform(78.075,80.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAgA6IgJgUIgtAAIgIAUIghAAIAwh0IAeAAIAxB0gAALAKIgLgbIgLAbIAWAAg");
	this.shape_164.setTransform(65.85,80.05);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAQA6IgWgoIgNAAIAAAoIgfAAIAAh0IA3AAQAMABAJAEQAJAFAFAJQAGAJAAALQAAALgGAIQgFAJgKAEIAaAtgAgTgIIAVAAQAGAAADgDQADgDAAgEQAAgFgDgDQgDgDgGAAIgVAAg");
	this.shape_165.setTransform(49.975,80.05);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgeA1QgOgIgIgOQgIgOAAgRQAAgQAIgOQAIgOAOgIQAOgIAQAAQARAAAOAIQAOAIAIAOQAIAOAAAQQAAARgIAOQgIAOgOAIQgOAIgRAAQgQAAgOgIgAgNgYQgGADgEAHQgEAGAAAIQAAAIAEAHQAEAGAGAEQAGAEAHAAQAIAAAGgEQAGgEAEgGQADgHAAgIQAAgIgDgGQgEgHgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_166.setTransform(37.275,80.075);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgpA6IAAh0IBTAAIAAAdIgzAAIAAAUIAhAAIAAAZIghAAIAAAqg");
	this.shape_167.setTransform(25.95,80.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgpA7IAAh0IBTAAIAAAcIgzAAIAAASIAhAAIAAAXIghAAIAAASIAzAAIAAAdg");
	this.shape_168.setTransform(227,60.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("Ag2A7IAAh0IAwAAQARAAAOAHQAOAIAIANQAIANAAAQQAAARgIANQgIANgOAIQgOAIgRAAgAgWAcIAOAAQAIAAAIgDQAHgEAEgGQADgGAAgJQAAgIgDgGQgEgGgHgEQgIgDgIAAIgOAAg");
	this.shape_169.setTransform(215.85,60.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAgA7IgJgVIgtAAIgIAVIghAAIAwh0IAeAAIAxB0gAALAKIgLgbIgLAbIAWAAg");
	this.shape_170.setTransform(203.1,60.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAoA7IAAhFIgaBFIgbAAIgahEIAABEIgeAAIAAh0IApAAIAcBKIAdhKIApAAIAAB0g");
	this.shape_171.setTransform(188.875,60.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAaA7Igvg9IAAA9IgeAAIAAh0IAaAAIAvA8IAAg8IAeAAIAAB0g");
	this.shape_172.setTransform(170.65,60.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAfA7IgIgVIguAAIgIAVIggAAIAwh0IAdAAIAyB0gAAMAKIgMgbIgLAbIAXAAg");
	this.shape_173.setTransform(158.15,60.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgQA7IAAh0IAhAAIAAB0g");
	this.shape_174.setTransform(149.2,60.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IAhAAIAABVIAwAAIAAAfg");
	this.shape_175.setTransform(142.125,60.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AAgA7IgJgVIgtAAIgIAVIghAAIAxh0IAdAAIAxB0gAAMAKIgMgbIgLAbIAXAAg");
	this.shape_176.setTransform(130.75,60.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAQA7IgWgpIgNAAIAAApIgfAAIAAh0IA3AAQAMAAAJAEQAJAFAFAJQAGAJAAALQAAALgGAIQgFAIgKAGIAaAtgAgTgIIAVAAQAGAAADgDQADgDAAgEQAAgFgDgDQgDgDgGAAIgVAAg");
	this.shape_177.setTransform(119.175,60.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgQA7IAAhWIgdAAIAAgeIBcAAIAAAeIgeAAIAABWg");
	this.shape_178.setTransform(108.2,60.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgXA5QgLgFgHgHQgGgGgCgJIAcgLQABAEADADQADADAFACQAFACAGAAQAHAAAEgCQAFgCAAgEQAAgDgDgCIgIgDIgJgCQgMgDgKgFQgJgFgGgGQgFgHAAgMQAAgMAHgJQAGgIALgEQAKgEAMAAQAMAAALAEQAKAEAGAHQAGAHACAJIgbAKQgCgGgGgEQgGgEgIAAQgFAAgDACQgEACAAAEQABAEAEACIAMAEIAQAFQAIADAHAEQAGADAEAHQAEAGAAAKQAAAMgGAIQgGAJgLAEQgLAFgPAAQgNAAgLgEg");
	this.shape_179.setTransform(97.675,60.825);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgaA1QgLgHgHgMQgGgMAAgRIAAhAIAfAAIAABAQABALAFAGQAFAGAIABQAJgBAFgGQAFgGAAgLIAAhAIAgAAIAABAQAAARgGAMQgHAMgLAHQgMAHgPAAQgOAAgMgHg");
	this.shape_180.setTransform(86.925,60.95);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAfA7IgIgVIgtAAIgJAVIggAAIAxh0IAcAAIAyB0gAAMAKIgMgbIgLAbIAXAAg");
	this.shape_181.setTransform(74.7,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},174).to({state:[]},63).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},174).to({state:[]},63).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},174).wait(63));

	// t1
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgIALgBQAIABAGAEQAHADAEAGQAEAHAAAHQAAAIgEAGQgEAHgHADQgGAFgIAAQgLAAgIgJg");
	this.shape_182.setTransform(287.125,75.25);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgYBbIAAhLIhIhqIA5AAIAnA9IAog9IA5AAIhHBqIAABLg");
	this.shape_183.setTransform(273.675,68.575);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgZBbIAAiFIgvAAIAAgwICRAAIAAAwIgvAAIAACFg");
	this.shape_184.setTransform(256.225,68.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgZBbIAAi1IAzAAIAAC1g");
	this.shape_185.setTransform(244.35,68.575);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("Ag/BbIAAi1IA0AAIAACGIBLAAIAAAvg");
	this.shape_186.setTransform(233.275,68.575);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgZBbIAAi1IA0AAIAAC1g");
	this.shape_187.setTransform(221.5,68.575);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AhMBbIAAi1IBYAAQATAAANAGQAOAHAIAMQAIALAAAQQAAANgFAJQgFAKgKAGQALAFAGAKQAGAJgBAOQAAAQgHAMQgIAMgOAGQgOAHgRAAgAgbAvIAlAAQAJAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgJAAIglAAgAgbgRIAkAAQAHAAAEgFQAFgEAAgGQAAgGgFgEQgEgFgHAAIgkAAg");
	this.shape_188.setTransform(209.2,68.575);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAxBbIgNgfIhHAAIgNAfIgzAAIBMi1IAuAAIBNC1gAASAQIgSgsIgRAsIAjAAg");
	this.shape_189.setTransform(190.225,68.575);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgaBbIAAi1IA0AAIAAC1g");
	this.shape_190.setTransform(176.2,68.575);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("Ag/BbIAAi1IA0AAIAACGIBLAAIAAAvg");
	this.shape_191.setTransform(165.175,68.575);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AhBBbIAAi1ICDAAIAAAsIhRAAIAAAbIA1AAIAAAmIg1AAIAAAcIBRAAIAAAsg");
	this.shape_192.setTransform(149.95,68.575);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAZBbIgjg/IgUAAIAAA/IgxAAIAAi1IBXAAQATAAAOAHQAOAIAIANQAJAOgBARQABASgJANQgJANgOAIIAoBGgAgegNIAhAAQAJAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgJgBIghAAg");
	this.shape_193.setTransform(134,68.575);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAoBbIhJhfIAABfIgwAAIAAi1IApAAIBKBfIAAhfIAwAAIAAC1g");
	this.shape_194.setTransform(108.4,68.575);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AhABbIAAi1ICBAAIAAAsIhQAAIAAAbIA0AAIAAAmIg0AAIAAAcIBQAAIAAAsg");
	this.shape_195.setTransform(91.4,68.575);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgYBbIhHi1IA1AAIAqBvIArhvIA1AAIhIC1g");
	this.shape_196.setTransform(73.975,68.575);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgvBTQgWgNgNgWQgMgVgBgbQABgaAMgWQANgVAWgNQAVgMAagBQAbABAWAMQAVANANAVQANAWAAAaQAAAbgNAVQgNAWgVANQgWAMgbABQgagBgVgMgAgVgmQgKAGgFAKQgGAKAAAMQAAANAGAKQAFAKAKAGQAKAGALAAQAMAAAKgGQAKgGAFgKQAGgKAAgNQAAgMgGgKQgFgKgKgGQgKgGgMAAQgLAAgKAGg");
	this.shape_197.setTransform(53.975,68.575);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAZBbIgjg/IgUAAIAAA/IgxAAIAAi1IBXAAQATAAAOAHQAOAIAIANQAJAOgBARQABASgJANQgJANgOAIIAoBGgAgegNIAhAAQAJAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgJgBIghAAg");
	this.shape_198.setTransform(35.45,68.575);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AhLBbIAAi1IBYAAQASAAAOAIQAPAIAIANQAIAOAAARQAAASgIAMQgIAOgOAJQgPAIgSAAIgnAAIAAA8gAgagNIAiAAQAJAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgJgBIgiAAg");
	this.shape_199.setTransform(17.925,68.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]},116).to({state:[]},58).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]},179).to({state:[]},58).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]},179).to({state:[]},58).wait(63));

	// t1
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgIALgBQAIABAGAEQAHADAEAGQAEAHAAAHQAAAIgEAGQgEAHgHADQgGAFgIAAQgLAAgIgJg");
	this.shape_200.setTransform(251.125,75.25);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AhBBbIAAi1ICDAAIAAAsIhRAAIAAAbIA1AAIAAAmIg1AAIAAAcIBRAAIAAAsg");
	this.shape_201.setTransform(239.85,68.575);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAZBbIgjg/IgUAAIAAA/IgxAAIAAi1IBXAAQATAAAOAHQAOAIAIANQAIAOAAARQAAASgIANQgJANgOAIIAoBGgAgegNIAhAAQAJAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgJgBIghAAg");
	this.shape_202.setTransform(223.9,68.575);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AhBBbIAAi1ICDAAIAAAsIhRAAIAAAbIA1AAIAAAmIg1AAIAAAcIBRAAIAAAsg");
	this.shape_203.setTransform(207.1,68.575);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAfBbIAAhDIg9AAIAABDIgzAAIAAi1IAzAAIAABDIA9AAIAAhDIAzAAIAAC1g");
	this.shape_204.setTransform(189.675,68.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAgBbIgghrIggBrIg3AAIg2i1IAyAAIAgBzIAjhzIAxAAIAjByIAhhyIAxAAIg2C1g");
	this.shape_205.setTransform(165.7,68.575);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgYBbIAAhLIhIhqIA5AAIAnA9IAog9IA5AAIhHBqIAABLg");
	this.shape_206.setTransform(141.625,68.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAoBbIhJhfIAABfIgwAAIAAi1IAqAAIBJBfIAAhfIAwAAIAAC1g");
	this.shape_207.setTransform(122.55,68.575);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAxBbIgNgfIhHAAIgNAfIgzAAIBMi1IAuAAIBNC1gAASAQIgSgsIgRAsIAjAAg");
	this.shape_208.setTransform(102.975,68.575);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgvBTQgWgNgNgWQgMgVgBgbQABgaAMgWQANgVAWgNQAVgMAagBQAbABAWAMQAVANANAVQANAWAAAaQAAAbgNAVQgNAWgVANQgWAMgbABQgagBgVgMgAgVgmQgKAGgFAKQgGAKAAAMQAAANAGAKQAFAKAKAGQAKAGALAAQAMAAAKgGQAKgGAFgKQAGgKAAgNQAAgMgGgKQgFgKgKgGQgKgGgMAAQgLAAgKAGg");
	this.shape_209.setTransform(75.775,68.575);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgsBTQgWgNgNgVQgMgWAAgbQAAgaAMgVQANgWAWgNQAVgMAbgBQARAAAOAGQAQAFAMAKQANALAJAOIgqAZQgHgLgKgGQgKgGgNAAQgNAAgKAGQgKAHgGAKQgGALAAANQAAAOAGALQAGAKAKAHQALAGANAAQAOgBAJgGQAJgGAEgJIgxAAIAAgmIBlAAIAAAOQAAAcgMAVQgLAVgUAMQgUALgZABQgbgBgVgMg");
	this.shape_210.setTransform(55.05,68.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},58).to({state:[]},58).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},179).to({state:[]},58).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},179).to({state:[]},58).wait(121));

	// t1
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgIALgBQAIABAGAEQAHADAEAGQAEAHAAAHQAAAIgEAGQgEAHgHADQgGAFgIAAQgLAAgIgJg");
	this.shape_211.setTransform(205.675,75.25);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AhVBbIAAi1IBKAAQAbAAAXAMQAWALAMAVQANAUAAAaQAAAagNAVQgMAUgWAMQgXAMgbAAgAgjAsIAWAAQAOAAALgGQALgFAGgKQAGgKAAgNQAAgMgGgKQgGgKgLgFQgLgGgOAAIgWAAg");
	this.shape_212.setTransform(192.25,68.575);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AhABbIAAi1ICCAAIAAAsIhRAAIAAAbIA0AAIAAAmIg0AAIAAAcIBRAAIAAAsg");
	this.shape_213.setTransform(174.85,68.575);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgsBTQgVgNgNgVQgNgWgBgbQABgaANgVQANgWAVgNQAWgMAagBQAQAAAQAGQAPAFANAKQAMALAJAOIgqAZQgHgLgKgGQgKgGgNAAQgNAAgKAGQgLAHgFAKQgGALAAANQAAAOAGALQAFAKALAHQALAGANAAQAOgBAKgGQAIgGADgJIgvAAIAAgmIBlAAIAAAOQgBAcgLAVQgMAVgUAMQgUALgZABQgagBgWgMg");
	this.shape_214.setTransform(156.7,68.575);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgsBTQgVgNgOgVQgMgWAAgbQAAgaAMgVQAOgWAVgNQAVgMAagBQASAAAPAGQAPAFAMAKQANALAJAOIgqAZQgGgLgLgGQgKgGgNAAQgNAAgKAGQgKAHgGAKQgGALAAANQAAAOAGALQAGAKAKAHQAKAGANAAQAPgBAKgGQAJgGACgJIgvAAIAAgmIBkAAIAAAOQAAAcgLAVQgMAVgUAMQgUALgaABQgagBgVgMg");
	this.shape_215.setTransform(136.3,68.575);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgpBSQgSgKgKgTQgKgTAAgZIAAhlIAxAAIAABkQAAARAIAKQAJAKANAAQAOAAAIgKQAIgKAAgRIAAhkIAyAAIAABlQAAAZgLATQgKATgRAKQgSALgYAAQgXAAgSgLg");
	this.shape_216.setTransform(117,68.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AAaBbIgjg/IgWAAIAAA/IgwAAIAAi1IBYAAQARAAAOAHQAPAIAIANQAJAOAAARQAAASgJANQgIANgQAIIApBGgAgfgNIAiAAQAJAAAFgFQAFgFAAgGQAAgIgFgEQgFgFgJgBIgiAAg");
	this.shape_217.setTransform(99.75,68.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211}]}).to({state:[]},58).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211}]},179).to({state:[]},58).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211}]},179).to({state:[]},58).wait(179));

	// t3
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,26.7,0.32,0.32,0,0,0,155,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(711));

	// Слой_12
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["rgba(75,88,130,0)","#4B5882"],[0,1],-5,71.2,-5,-74.8).s().p("A3bLLIAA2VMAu3AAAIAAWVg");
	this.shape_218.setTransform(150,71.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_218).wait(711));

	// bg-1
	this.instance_3 = new lib.bg1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207));

	// bg-2
	this.instance_4 = new lib.bg2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(178));

	// bg-3
	this.instance_5 = new lib.bg3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(149));

	// bg-4
	this.instance_6 = new lib.bg4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(300,250,1,1,0,0,0,300,250);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(87).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(120));

	// bg-7
	this.instance_7 = new lib.bg7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(116).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(91));

	// bg-6
	this.instance_8 = new lib.bg6_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(145).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(62));

	// bg-5
	this.instance_9 = new lib.bg5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(174).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(207).to({_off:false},0).wait(29).to({_off:true},1).wait(33));

	// bg-8
	this.instance_10 = new lib.bg8_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(203).to({_off:false},0).to({_off:true},34).wait(203).to({_off:false},0).to({_off:true},34).wait(203).to({_off:false},0).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138,125,175,137.5);
// library properties:
lib.properties = {
	id: 'DF16529FCF63B84299E99FB3096E7273',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/v3_300x250_Adwords_Bushtracker_1upd_atlas_P_.png", id:"v3_300x250_Adwords_Bushtracker_1upd_atlas_P_"},
		{src:"images/v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_.jpg", id:"v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_"},
		{src:"images/v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2.jpg", id:"v3_300x250_Adwords_Bushtracker_1upd_atlas_NP_2"}
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