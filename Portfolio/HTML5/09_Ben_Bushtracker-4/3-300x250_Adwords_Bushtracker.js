(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3_300x250_Adwords_Bushtracker_atlas_P_", frames: [[0,248,310,73],[311,198,50,31],[0,146,309,100],[0,323,441,31],[0,0,420,144],[311,146,108,50]]},
		{name:"3_300x250_Adwords_Bushtracker_atlas_NP_", frames: [[0,0,600,500]]}
];


// symbols:



(lib.bg = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bushtrackerlogo = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cover = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dust = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.track = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wheels = function() {
	this.initialize(ss["3_300x250_Adwords_Bushtracker_atlas_P_"]);
	this.gotoAndStop(5);
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
	this.instance.setTransform(195,351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheels_1, new cjs.Rectangle(195,351,108,50), null);


(lib.trackcover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cover();
	this.instance.parent = this;
	this.instance.setTransform(258,331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trackcover, new cjs.Rectangle(258,331,50,31), null);


(lib.track_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.track();
	this.instance.parent = this;
	this.instance.setTransform(14,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.track_1, new cjs.Rectangle(14,232,420,144), null);


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATA9IgigtIgJAJIAAAkIgiAAIAAh5IAiAAIAAArIApgrIAqAAIg0A1IA0BEg");
	this.shape.setTransform(206.15,-6.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcA3QgOgIgJgOQgIgPAAgSQAAgRAIgPQAJgOAOgIQAPgJARAAQAMAAALAEQAKAEAJAIQAJAHAFALIgdARQgEgIgHgFQgHgEgJAAQgHAAgHADQgGAFgEAGQgEAIAAAHQAAAIAEAHQAEAHAGAEQAHAEAHAAQAJAAAHgEQAHgGAEgIIAdASQgFALgJAHQgJAHgKAFQgLAEgMAAQgRgBgPgIg");
	this.shape_1.setTransform(193.075,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA9IgJgVIgwAAIgIAVIgiAAIAzh5IAfAAIAzB5gAAMALIgMgdIgLAdIAXAAg");
	this.shape_2.setTransform(179.6,-6.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyA9IAAh5IA6AAQAMAAAKAEQAJAFAFAIQAFAIABAKQAAAIgEAHQgDAGgHAEQAHADAEAHQAEAGAAAJQAAALgFAIQgFAIgKAFQgJAEgLAAgAgSAgIAZAAQAFAAADgDQADgDAAgEQAAgEgDgDQgDgDgFAAIgZAAgAgSgLIAYAAQAFAAADgDQADgDAAgEQAAgEgDgDQgDgDgFAAIgYAAg");
	this.shape_3.setTransform(167.375,-6.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRA9IAAhZIgfAAIAAggIBhAAIAAAgIggAAIAABZg");
	this.shape_4.setTransform(156.075,-6.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbA3QgMgHgHgMQgGgNAAgRIAAhEIAgAAIAABDQAAAMAGAGQAGAHAIAAQAKAAAEgHQAGgGAAgMIAAhDIAiAAIAABEQgBARgGANQgHAMgMAHQgMAIgQAAQgPAAgMgIg");
	this.shape_5.setTransform(144.65,-6.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgIgOQgJgPAAgSQAAgRAJgPQAIgOAPgIQAOgJARAAQASAAAOAJQAPAIAIAOQAJAPAAARQAAASgJAPQgIAOgPAIQgOAIgSABQgRgBgOgIgAgOgaQgGAFgEAGQgEAHAAAIQAAAIAEAIQAEAGAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgGQADgIABgIQgBgIgDgHQgEgGgGgFQgHgDgIAAQgHAAgHADg");
	this.shape_6.setTransform(131.475,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAbA9Igwg/IAAA/IghAAIAAh5IAbAAIAxBAIAAhAIAhAAIAAB5g");
	this.shape_7.setTransform(113.55,-6.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhA9IgJgVIgwAAIgIAVIgiAAIAzh5IAfAAIAzB5gAAMALIgMgdIgLAdIAXAAg");
	this.shape_8.setTransform(100.5,-6.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA9IAAh5IAjAAIAAB5g");
	this.shape_9.setTransform(91.125,-6.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqA9IAAh5IAjAAIAABaIAyAAIAAAfg");
	this.shape_10.setTransform(83.7,-6.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhA9IgJgVIgwAAIgIAVIgiAAIAzh5IAfAAIAzB5gAAMALIgMgdIgMAdIAYAAg");
	this.shape_11.setTransform(71.85,-6.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARA9IgXgqIgOAAIAAAqIghAAIAAh5IA6AAQANAAAJAFQAKAFAFAJQAGAJAAAMQAAALgGAJQgGAJgKAFIAcAvgAgUgIIAWAAQAGAAADgDQADgEABgEQgBgFgDgDQgDgEgGAAIgWAAg");
	this.shape_12.setTransform(59.775,-6.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRA9IAAhZIgfAAIAAggIBhAAIAAAgIggAAIAABZg");
	this.shape_13.setTransform(48.225,-6.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYA8QgMgFgGgIQgIgGgBgKIAegLQAAAEADADQAEADAFADQAFACAHAAQAGAAAFgCQAFgDgBgDQAAgEgDgCIgIgDIgJgCQgNgEgKgEQgKgGgFgGQgGgIAAgMQAAgNAHgIQAHgKALgEQALgEAMAAQANAAAKAEQALAEAHAIQAGAHACAJIgcAMQgCgHgGgEQgGgEgJgBQgFABgEACQgDACAAAEQAAADAFADQAFACAHACIARAGQAIADAIAEQAGADAFAHQADAHAAAKQAAAMgGAJQgGAJgMAFQgMAFgPAAQgNAAgMgEg");
	this.shape_14.setTransform(37.25,-6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbA3QgMgHgHgMQgHgNAAgRIAAhEIAhAAIAABDQABAMAFAGQAGAHAIAAQAKAAAEgHQAGgGAAgMIAAhDIAhAAIAABEQAAARgGANQgHAMgMAHQgMAIgQAAQgPAAgMgIg");
	this.shape_15.setTransform(26,-6.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhA9IgJgVIgwAAIgIAVIgiAAIAzh5IAfAAIAzB5gAAMALIgMgdIgLAdIAXAAg");
	this.shape_16.setTransform(13.2,-6.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAeIg2AAIAAASIAjAAIAAAZIgjAAIAAASIA2AAIAAAeg");
	this.shape_17.setTransform(-2.925,-6.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVA9IAAgtIgpAAIAAAtIgiAAIAAh5IAiAAIAAAtIApAAIAAgtIAiAAIAAB5g");
	this.shape_18.setTransform(-14.575,-6.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRA9IAAhZIgfAAIAAggIBhAAIAAAgIggAAIAABZg");
	this.shape_19.setTransform(-26.225,-6.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6, new cjs.Rectangle(-33.6,-20.3,247.6,25.6), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAeIg2AAIAAASIAjAAIAAAZIgjAAIAAASIA2AAIAAAeg");
	this.shape.setTransform(218.675,-6.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARA9IgXgqIgOAAIAAAqIghAAIAAh5IA6AAQANAAAJAFQAKAFAFAJQAGAJAAAMQAAALgGAJQgGAJgKAFIAcAvgAgUgIIAWAAQAGAAADgDQADgEABgEQgBgFgDgDQgDgEgGAAIgWAAg");
	this.shape_1.setTransform(208.025,-6.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgIgOQgJgPAAgSQAAgRAJgPQAIgOAPgIQAOgJARAAQASAAAOAJQAPAIAIAOQAJAPAAARQAAASgJAPQgIAOgPAIQgOAIgSABQgRgBgOgIgAgOgaQgGAFgEAGQgEAHAAAIQAAAIAEAIQAEAGAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgGQADgIABgIQgBgIgDgHQgEgGgGgFQgHgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(194.725,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA9IAAh5IAjAAIAABaIAyAAIAAAfg");
	this.shape_3.setTransform(183,-6.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyA9IAAh5IA7AAQAMAAAJAFQAKAGAFAJQAGAJAAAMQAAALgGAIQgFAKgKAFQgJAGgMAAIgaAAIAAAogAgRgIIAWAAQAGAAADgDQAEgEAAgEQAAgFgEgDQgDgEgGAAIgWAAg");
	this.shape_4.setTransform(172.325,-6.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYA9IgYgkIgXAkIgpAAIAqg9Igpg8IApAAIAWAkIAYgkIApAAIgpA8IApA9g");
	this.shape_5.setTransform(159.825,-6.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAeIg2AAIAAASIAjAAIAAAZIgjAAIAAASIA2AAIAAAeg");
	this.shape_6.setTransform(148.425,-6.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgIgOQgJgPAAgSQAAgRAJgPQAIgOAPgIQAOgJARAAQASAAAOAJQAPAIAIAOQAJAPAAARQAAASgJAPQgIAOgPAIQgOAIgSABQgRgBgOgIgAgOgaQgGAFgEAGQgEAHAAAIQAAAIAEAIQAEAGAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgGQADgIABgIQgBgIgDgHQgEgGgGgFQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(131.625,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA9IAAhZIgfAAIAAggIBhAAIAAAgIggAAIAABZg");
	this.shape_8.setTransform(119.325,-6.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAeIg2AAIAAASIAjAAIAAAZIgjAAIAAASIA2AAIAAAeg");
	this.shape_9.setTransform(104.625,-6.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcA3QgOgIgJgOQgIgPAAgSQAAgRAIgPQAJgOAOgIQAPgJARAAQAMAAALAEQAKAEAJAIQAJAHAFALIgdARQgEgIgHgFQgHgEgJAAQgHAAgHADQgGAFgEAGQgEAIAAAHQAAAIAEAHQAEAHAGAEQAHAEAHAAQAJAAAHgEQAHgGAEgIIAdASQgFALgJAHQgJAHgKAFQgLAEgMAAQgRgBgPgIg");
	this.shape_10.setTransform(93.075,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbA9Igxg/IAAA/IggAAIAAh5IAcAAIAwBAIAAhAIAhAAIAAB5g");
	this.shape_11.setTransform(79.85,-6.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAeIg2AAIAAASIAjAAIAAAZIgjAAIAAASIA2AAIAAAeg");
	this.shape_12.setTransform(68.525,-6.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4A9IAAh5IAxAAQASAAAPAIQAOAIAJAOQAJANAAARQAAASgJAOQgJANgOAIQgPAIgSAAgAgXAdIAOAAQAKAAAHgDQAHgEAEgGQAFgHAAgJQAAgIgFgGQgEgHgHgEQgHgDgKAAIgOAAg");
	this.shape_13.setTransform(56.85,-6.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRA9IAAh5IAjAAIAAB5g");
	this.shape_14.setTransform(47.525,-6.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAdIg2AAIAAAVIAjAAIAAAbIgjAAIAAAsg");
	this.shape_15.setTransform(39.975,-6.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAbA9Igxg/IAAA/IggAAIAAh5IAcAAIAwBAIAAhAIAhAAIAAB5g");
	this.shape_16.setTransform(28.3,-6.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgIgOQgJgPAAgSQAAgRAJgPQAIgOAPgIQAOgJARAAQASAAAOAJQAPAIAIAOQAJAPAAARQAAASgJAPQgIAOgPAIQgOAIgSABQgRgBgOgIgAgOgaQgGAFgEAGQgEAHAAAIQAAAIAEAIQAEAGAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgGQADgIABgIQgBgIgDgHQgEgGgGgFQgHgDgIAAQgHAAgHADg");
	this.shape_17.setTransform(14.875,-6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcA3QgOgIgJgOQgIgPAAgSQAAgRAIgPQAJgOAOgIQAPgJARAAQAMAAALAEQAKAEAJAIQAJAHAFALIgdARQgEgIgHgFQgHgEgJAAQgHAAgHADQgGAFgEAGQgEAIAAAHQAAAIAEAHQAEAHAGAEQAHAEAHAAQAJAAAHgEQAHgGAEgIIAdASQgFALgJAHQgJAHgKAFQgLAEgMAAQgRgBgPgIg");
	this.shape_18.setTransform(1.575,-6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IBXAAIAAAeIg2AAIAAASIAjAAIAAAZIgjAAIAAASIA2AAIAAAeg");
	this.shape_19.setTransform(-14.675,-6.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVA9IAAgtIgpAAIAAAtIgiAAIAAh5IAiAAIAAAtIApAAIAAgtIAiAAIAAB5g");
	this.shape_20.setTransform(-26.325,-6.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRA9IAAhZIgfAAIAAggIBhAAIAAAgIggAAIAABZg");
	this.shape_21.setTransform(-37.975,-6.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(-45.3,-20.3,271,25.6), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbA3QgMgHgHgMQgGgNAAgRIAAhEIAgAAIAABDQAAAMAGAGQAGAHAIAAQAKAAAEgHQAGgGAAgMIAAhDIAiAAIAABEQgBARgGANQgHAMgMAHQgMAIgQAAQgPAAgMgIg");
	this.shape.setTransform(169.4,-28.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA3QgPgIgIgOQgJgPAAgSQAAgRAJgPQAIgOAPgIQAOgJARAAQASAAAOAJQAPAIAIAOQAJAPAAARQAAASgJAPQgIAOgPAIQgOAJgSAAQgRAAgOgJgAgOgaQgGAFgEAGQgEAHAAAIQAAAIAEAIQAEAGAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgGQADgIABgIQgBgIgDgHQgEgGgGgFQgHgDgIAAQgHAAgHADg");
	this.shape_1.setTransform(156.225,-28.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQA9IAAgyIgwhHIAmAAIAaApIAbgpIAmAAIgwBHIAAAyg");
	this.shape_2.setTransform(142.8,-28.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA3QgOgIgJgOQgIgPgBgSQABgRAIgPQAJgOAOgIQAOgJARAAQAMAAAKADQAKAEAJAHQAIAGAFAKIgcARQgEgIgGgDQgIgFgIAAQgJAAgGAFQgHAEgEAHQgEAIAAAIQAAAJAEAIQAEAGAHAEQAHAEAIABQAKgBAGgEQAHgEACgFIghAAIAAgaIBEAAIAAAJQgBATgHAOQgIAOgNAIQgOAIgRAAQgRAAgOgJg");
	this.shape_3.setTransform(125.05,-28.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbA9Igwg/IAAA/IghAAIAAh5IAbAAIAxBAIAAhAIAhAAIAAB5g");
	this.shape_4.setTransform(111.85,-28.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA9IAAh5IAjAAIAAB5g");
	this.shape_5.setTransform(102.775,-28.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQA9Igvh5IAjAAIAcBKIAchKIAkAAIgwB5g");
	this.shape_6.setTransform(93.65,-28.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRA9IAAh5IAjAAIAAB5g");
	this.shape_7.setTransform(84.575,-28.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeA3QgOgIgIgOQgIgPgBgSQABgRAIgPQAIgOAOgIQAPgJARAAQALAAALADQAKAEAJAHQAIAGAFAKIgcARQgEgIgGgDQgIgFgIAAQgJAAgGAFQgHAEgEAHQgEAIAAAIQAAAJAEAIQAEAGAHAEQAHAEAIABQAKgBAGgEQAHgEACgFIghAAIAAgaIBEAAIAAAJQAAATgIAOQgIAOgNAIQgOAIgRAAQgRAAgPgJg");
	this.shape_8.setTransform(75,-28.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(66.2,-42.4,111.49999999999999,25.599999999999998), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBEQgGgFAAgJQAAgJAGgFQAGgFAIAAQAGAAAFACQAFADADAEQADAEAAAGQAAAGgDAEQgDAEgFADQgFACgGAAQgIAAgGgFgAgPAZIgIhhIAvAAIgHBhg");
	this.shape.setTransform(176.075,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBHIAAg0IgvAAIAAA0IgoAAIAAiOIAoAAIAAA1IAvAAIAAg1IAoAAIAACOg");
	this.shape_1.setTransform(164.825,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBHIAAhoIgkAAIAAgmIBvAAIAAAmIgkAAIAABog");
	this.shape_2.setTransform(151.25,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBBQgRgKgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQARgKAUAAQANAAAMAEQAMAFAKAIQAKAIAGALIggATQgFgIgIgFQgJgFgKAAQgJAAgIAFQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAEQAIAFAKAAQALAAAHgFQAHgEADgIIglAAIAAgdIBOAAIAAAKQAAAWgJARQgJAQgQAJQgPAKgUAAQgUgBgRgJg");
	this.shape_3.setTransform(137.075,15.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBHIg4hJIAABJIgmAAIAAiOIAgAAIA5BLIAAhLIAmAAIAACOg");
	this.shape_4.setTransform(121.7,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAWIApAAIAAAeIgpAAIAAAUIA/AAIAAAjg");
	this.shape_5.setTransform(108.475,15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBHIgcgxIgQAAIAAAxIgmAAIAAiOIBFAAQANABAMAGQALAGAHALQAGAKAAANQAAAOgHAKQgGALgMAGIAfA2gAgYgKIAaAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgDgEgIAAIgaAAg");
	this.shape_6.setTransform(96,15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUBHIAAhoIgkAAIAAgmIBwAAIAAAmIgkAAIAABog");
	this.shape_7.setTransform(82.55,15.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBFQgNgFgIgIQgIgJgCgKIAigNQABAEAEAEQAEADAGADQAGACAIAAQAIAAAFgCQAFgCAAgFQAAgEgDgCQgEgCgGgCIgLgDQgPgDgLgGQgMgGgGgIQgHgJAAgOQAAgPAIgKQAIgLANgFQANgFAOAAQAPAAANAFQAMAFAIAJQAHAIADALIgiANQgCgHgHgFQgHgFgKAAQgGAAgEACQgFADAAAEQABAFAFACQAGADAJADIAUAGQAJADAIAFQAIAEAFAIQAFAIAAAMQAAAOgIALQgHAKgOAGQgNAGgSAAQgQgBgOgFg");
	this.shape_8.setTransform(69.775,15.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(61.8,0,120.3,29.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBEQgGgFAAgJQAAgJAGgFQAGgFAIAAQAGAAAFACQAFADADAEQADAEAAAGQAAAGgDAEQgDAEgFADQgFACgGAAQgIAAgGgFgAgPAZIgIhhIAvAAIgHBhg");
	this.shape.setTransform(217.275,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAWIApAAIAAAeIgpAAIAAAUIA/AAIAAAjg");
	this.shape_1.setTransform(207.675,15.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBAQgRgJgKgRQgKgRAAgVQAAgUAKgRQAKgRARgKQARgKATAAQAOAAANAFQANAFAKAIQAKAJAHANIgiAUQgFgKgJgFQgIgFgKAAQgIAAgJAEQgHAFgFAIQgEAIAAAJQAAAKAEAIQAFAIAHAEQAJAFAIAAQAKAAAIgFQAJgGAFgJIAiAUQgHAMgKAJQgLAJgMAFQgNAFgOAAQgTgBgRgKg");
	this.shape_2.setTransform(194.15,15.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfBHIg4hJIAABJIgmAAIAAiOIAgAAIA5BLIAAhLIAmAAIAACOg");
	this.shape_3.setTransform(178.75,15.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBHIgKgYIg4AAIgJAYIgoAAIA7iOIAkAAIA8COgAAOANIgOgiIgOAiIAcAAg");
	this.shape_4.setTransform(163.525,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBHIAAhTIghBTIggAAIgghTIAABTIgkAAIAAiOIAyAAIAiBbIAjhbIAyAAIAACOg");
	this.shape_5.setTransform(146.15,15.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBHIgcgxIgPAAIAAAxIgnAAIAAiOIBEAAQAOABAMAGQALAGAHALQAGAKAAANQAAAOgHAKQgGALgMAGIAfA2gAgXgKIAaAAQAGAAAEgDQAEgEAAgFQAAgGgEgEQgEgEgGAAIgaAAg");
	this.shape_6.setTransform(130.3,15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBAQgRgJgJgRQgKgRgBgVQABgUAKgRQAJgRARgKQARgKAUAAQAVAAARAKQARAKAKARQAKARAAAUQAAAVgKARQgKARgRAJQgRAKgVABQgUgBgRgKgAgQgeQgIAFgEAIQgEAIAAAJQAAAKAEAIQAEAIAIAEQAIAFAIAAQAKAAAHgFQAIgEAEgIQAEgIABgKQgBgJgEgIQgEgIgIgFQgHgEgKAAQgIAAgIAEg");
	this.shape_7.setTransform(114.775,15.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAYIApAAIAAAfIgpAAIAAA0g");
	this.shape_8.setTransform(100.975,15.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUBHIgbgxIgRAAIAAAxIglAAIAAiOIBEAAQAOABALAGQALAGAGALQAHAKAAANQAAAOgHAKQgHALgLAGIAgA2gAgYgKIAaAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgDgEgIAAIgaAAg");
	this.shape_9.setTransform(88.5,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBHIAAiOIBlAAIAAAjIg/AAIAAAWIApAAIAAAeIgpAAIAAAUIA/AAIAAAjg");
	this.shape_10.setTransform(75.425,15.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BHIAAiOIBFAAQAOABALAGQAMAHAGAKQAGAKABAOQgBAOgGAJQgGALgMAHQgLAGgOAAIgeAAIAAAvgAgUgKIAaAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgEgEgHAAIgaAAg");
	this.shape_11.setTransform(62.875,15.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBEQgGgFAAgJQAAgJAGgFQAGgFAIAAQAGAAAFACQAFADADAEQADAEAAAGQAAAGgDAEQgDAEgFADQgFACgGAAQgIAAgGgFgAgPAZIgIhhIAvAAIgHBhg");
	this.shape_12.setTransform(46.725,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTBHIAAg6Ig4hUIAtAAIAeAxIAfgxIAtAAIg4BUIAAA6g");
	this.shape_13.setTransform(35.425,15.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUBHIgcgxIgQAAIAAAxIgmAAIAAiOIBFAAQANABAMAGQALAGAHALQAGAKAAANQAAAOgHAKQgGALgMAGIAfA2gAgYgKIAaAAQAHAAAEgDQAEgEAAgFQAAgGgEgEQgDgEgIAAIgaAAg");
	this.shape_14.setTransform(21.65,15.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBBQgOgJgHgOQgIgPgBgUIAAhPIAnAAIAABOQAAAOAHAHQAHAIAJAAQALAAAHgIQAGgHAAgOIAAhOIAnAAIAABPQAAAUgJAPQgHAOgOAJQgOAIgTAAQgSAAgOgIg");
	this.shape_15.setTransform(7.15,15.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAcBHIgcgqIgbAqIgwAAIAxhHIgwhHIAwAAIAaArIAcgrIAwAAIgwBHIAwBHg");
	this.shape_16.setTransform(-7.55,15.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggBBQgOgJgHgOQgIgPAAgUIAAhPIAmAAIAABOQABAOAGAHQAGAIAKAAQALAAAHgIQAGgHAAgOIAAhOIAnAAIAABPQgBAUgHAPQgIAOgOAJQgOAIgTAAQgRAAgPgIg");
	this.shape_17.setTransform(-22.3,15.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxBHIAAiOIAoAAIAABqIA7AAIAAAkg");
	this.shape_18.setTransform(-34.925,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-43,0,266.3,29.2), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-4,376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-4,376,441,31), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Bushtrackerlogo();
	this.instance.parent = this;
	this.instance.setTransform(-155,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-155,-37,310,73), null);


(lib.dust_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dust();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dust_1, new cjs.Rectangle(0,0,309,100), null);


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
(lib._3300x250_Adwords_Bushtracker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_816 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(816).call(this.frame_816).wait(69));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},272).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},272).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},272).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(293).to({_off:false},0).wait(1).to({_off:true},1).wait(293).to({_off:false},0).wait(1).to({_off:true},1).wait(293).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(272).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(272).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(272).to({_off:false},0).to({_off:true},1).wait(14));

	// Слой_29
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-200.2,-53.4,-70,-2).s().p("AoxCLQg5AAgpgpQgpgoAAg6IAAAAQAAg5ApgpQApgoA5AAIRjAAQA5AAApAoQApApAAA5IAAAAQAAA6gpAoQgpApg5AAg");
	this.shape_21.setTransform(150.4929,222.9284,0.8168,0.8168);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-159.7,-42.9,-53.3,-0.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_22.setTransform(150.5,222.925);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-155.8,-42.2,-49.5,-0.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_23.setTransform(150.5,222.925);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-151.9,-41.4,-45.6,0.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_24.setTransform(150.5,222.925);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-148,-40.7,-41.7,1.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_25.setTransform(150.5,222.925);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-144.2,-39.9,-37.8,2.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_26.setTransform(150.5,222.925);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-140.3,-39.2,-33.9,2.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_27.setTransform(150.5,222.925);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-136.4,-38.5,-30,3.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_28.setTransform(150.5,222.925);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-132.5,-37.7,-26.2,4.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_29.setTransform(150.5,222.925);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-128.6,-37,-22.3,5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_30.setTransform(150.5,222.925);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-124.7,-36.3,-18.4,5.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_31.setTransform(150.5,222.925);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-120.9,-35.5,-14.5,6.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_32.setTransform(150.5,222.925);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-117,-34.8,-10.6,7.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_33.setTransform(150.5,222.925);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-113.1,-34,-6.7,8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_34.setTransform(150.5,222.925);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-109.2,-33.3,-2.9,8.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_35.setTransform(150.5,222.925);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-105.3,-32.6,1,9.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_36.setTransform(150.5,222.925);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-101.5,-31.8,4.9,10.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_37.setTransform(150.5,222.925);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-97.6,-31.1,8.8,10.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_38.setTransform(150.5,222.925);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-93.7,-30.4,12.7,11.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_39.setTransform(150.5,222.925);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-89.8,-29.6,16.5,12.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_40.setTransform(150.5,222.925);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-85.9,-28.9,20.4,13.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_41.setTransform(150.5,222.925);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-82,-28.1,24.3,13.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_42.setTransform(150.5,222.925);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-78.2,-27.4,28.2,14.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_43.setTransform(150.5,222.925);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-74.3,-26.7,32.1,15.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_44.setTransform(150.5,222.925);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-70.4,-25.9,36,16.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_45.setTransform(150.5,222.925);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-66.5,-25.2,39.8,16.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_46.setTransform(150.5,222.925);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-62.6,-24.5,43.7,17.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_47.setTransform(150.5,222.925);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-58.7,-23.7,47.6,18.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_48.setTransform(150.5,222.925);
	this.shape_48._off = true;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-54.9,-23,51.5,19).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_49.setTransform(150.5,222.925);
	this.shape_49._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-51,-22.2,55.4,19.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_50.setTransform(150.5,222.925);
	this.shape_50._off = true;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-47.1,-21.5,59.3,20.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_51.setTransform(150.5,222.925);
	this.shape_51._off = true;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-43.2,-20.8,63.1,21.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_52.setTransform(150.5,222.925);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-39.3,-20.1,67,21.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_53.setTransform(150.5,222.925);
	this.shape_53._off = true;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-35.4,-19.4,70.9,22.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_54.setTransform(150.5,222.925);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-31.6,-18.6,74.8,23.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_55.setTransform(150.5,222.925);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-27.7,-17.9,78.7,24.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_56.setTransform(150.5,222.925);
	this.shape_56._off = true;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-23.8,-17.1,82.6,24.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_57.setTransform(150.5,222.925);
	this.shape_57._off = true;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-19.9,-16.4,86.4,25.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_58.setTransform(150.5,222.925);
	this.shape_58._off = true;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-16,-15.7,90.3,26.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_59.setTransform(150.5,222.925);
	this.shape_59._off = true;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-12.1,-14.9,94.2,27.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_60.setTransform(150.5,222.925);
	this.shape_60._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-8.3,-14.2,98.1,27.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_61.setTransform(150.5,222.925);
	this.shape_61._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-4.4,-13.5,102,28.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_62.setTransform(150.5,222.925);
	this.shape_62._off = true;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-0.5,-12.7,105.9,29.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_63.setTransform(150.5,222.925);
	this.shape_63._off = true;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],3.4,-12,109.7,30).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_64.setTransform(150.5,222.925);
	this.shape_64._off = true;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],7.3,-11.2,113.6,30.8).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_65.setTransform(150.5,222.925);
	this.shape_65._off = true;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],11.1,-10.5,117.5,31.5).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_66.setTransform(150.5,222.925);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],15,-9.8,121.4,32.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_67.setTransform(150.5,222.925);
	this.shape_67._off = true;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],18.9,-9,125.3,33).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_68.setTransform(150.5,222.925);
	this.shape_68._off = true;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],22.8,-8.3,129.1,33.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_69.setTransform(150.5,222.925);
	this.shape_69._off = true;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],26.7,-7.6,133,34.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_70.setTransform(150.5,222.925);
	this.shape_70._off = true;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],30.6,-6.8,136.9,35.2).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_71.setTransform(150.5,222.925);
	this.shape_71._off = true;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],34.4,-6.1,140.8,35.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_72.setTransform(150.5,222.925);
	this.shape_72._off = true;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],38.3,-5.3,144.7,36.7).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_73.setTransform(150.5,222.925);
	this.shape_73._off = true;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],42.2,-4.6,148.6,37.4).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_74.setTransform(150.5,222.925);
	this.shape_74._off = true;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],46.1,-3.9,152.4,38.1).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_75.setTransform(150.5,222.925);
	this.shape_75._off = true;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],50,-3.1,156.3,38.9).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_76.setTransform(150.5,222.925);
	this.shape_76._off = true;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],53.9,-2.4,160.2,39.6).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_77.setTransform(150.5,222.925);
	this.shape_77._off = true;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],57.7,-1.7,164.1,40.3).s().p("AnKByQgvAAghgiQgighAAgvIAAAAQAAguAigiQAhghAvAAIOVAAQAvAAAhAhQAiAigBAuIAAAAQABAvgiAhQghAigvAAg");
	this.shape_78.setTransform(150.5,222.925);
	this.shape_78._off = true;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],75.4,-1.1,205.6,50.3).s().p("AoxCLQg5AAgpgpQgpgoAAg6IAAAAQAAg5ApgpQApgoA5AAIRjAAQA5AAApAoQApApAAA5IAAAAQAAA6gpAoQgpApg5AAg");
	this.shape_79.setTransform(150.4929,222.9284,0.8168,0.8168);
	this.shape_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(112).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(113).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(114).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(115).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(116).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(117).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(118).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(119).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(120).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(121).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(122).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(123).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(124).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(125).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(126).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(127).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(128).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(129).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(130).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(131).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(132).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(133).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(134).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(135).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(136).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(137).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(138).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(139).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(140).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(141).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(142).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(143).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(144).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(145).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(146).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(147).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(148).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(149).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(150).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(151).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(152).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(153).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(154).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(155).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(156).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(157).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(158).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(159).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(160).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(161).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(162).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(163).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(164).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(165).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(166).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(167).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(168).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(169).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(170).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(6));

	// Слой_30 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_52 = new cjs.Graphics().p("AFchhICdgDIACDZIiZABgAoSgiICDABIgECUIiDACgArSB1IAIiTIB+gDIgBCWgAjfgtIGhgIIABCWImlADgAIyh1ICbABIAGB8IieABg");
	var mask_graphics_175 = new cjs.Graphics().p("AFchhICdgDIACDZIiZABgAoSgiICDABIgECUIiDACgArSB1IAIiTIB+gDIgBCWgAjfgtIGhgIIABCWImlADgAIyh1ICbABIAGB8IieABg");
	var mask_graphics_347 = new cjs.Graphics().p("AFchhICdgDIACDZIiZABgAoSgiICDABIgECUIiDACgArSB1IAIiTIB+gDIgBCWgAjfgtIGhgIIABCWImlADgAIyh1ICbABIAGB8IieABg");
	var mask_graphics_470 = new cjs.Graphics().p("AFchhICdgDIACDZIiZABgAoSgiICDABIgECUIiDACgArSB1IAIiTIB+gDIgBCWgAjfgtIGhgIIABCWImlADgAIyh1ICbABIAGB8IieABg");
	var mask_graphics_642 = new cjs.Graphics().p("AFchhICdgDIACDZIiZABgAoSgiICDABIgECUIiDACgArSB1IAIiTIB+gDIgBCWgAjfgtIGhgIIABCWImlADgAIyh1ICbABIAGB8IieABg");
	var mask_graphics_765 = new cjs.Graphics().p("AFchhICdgDIACDZIiZABgAoSgiICDABIgECUIiDACgArSB1IAIiTIB+gDIgBCWgAjfgtIGhgIIABCWImlADgAIyh1ICbABIAGB8IieABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_graphics_52,x:152.35,y:137.525}).wait(51).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_graphics_175,x:152.35,y:137.525}).wait(51).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_graphics_347,x:152.35,y:137.525}).wait(51).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_graphics_470,x:152.35,y:137.525}).wait(51).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_graphics_642,x:152.35,y:137.525}).wait(51).to({graphics:null,x:0,y:0}).wait(72).to({graphics:mask_graphics_765,x:152.35,y:137.525}).wait(51).to({graphics:null,x:0,y:0}).wait(69));

	// Слой_31
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-238.7,-26.5,-74.1,-26.5).s().p("Aq8CLIAAkVIV5AAIAAEVg");
	this.shape_80.setTransform(157.7284,136.2548,1.5259,4.8358);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-354.8,-128.4,-103.6,-128.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_81.setTransform(157.725,136.25);
	this.shape_81._off = true;

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-345.4,-128.4,-94.2,-128.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_82.setTransform(157.725,136.25);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-336,-128.3,-84.8,-128.3).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_83.setTransform(157.725,136.25);
	this.shape_83._off = true;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-326.6,-128.2,-75.4,-128.2).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_84.setTransform(157.725,136.25);
	this.shape_84._off = true;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-317.2,-128.1,-66,-128.1).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_85.setTransform(157.725,136.25);
	this.shape_85._off = true;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-307.8,-128,-56.6,-128).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_86.setTransform(157.725,136.25);
	this.shape_86._off = true;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-298.4,-127.9,-47.2,-127.9).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_87.setTransform(157.725,136.25);
	this.shape_87._off = true;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-289,-127.9,-37.8,-127.9).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_88.setTransform(157.725,136.25);
	this.shape_88._off = true;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-279.6,-127.8,-28.4,-127.8).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_89.setTransform(157.725,136.25);
	this.shape_89._off = true;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-270.2,-127.7,-19,-127.7).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_90.setTransform(157.725,136.25);
	this.shape_90._off = true;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-260.8,-127.6,-9.6,-127.6).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_91.setTransform(157.725,136.25);
	this.shape_91._off = true;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-251.4,-127.5,-0.2,-127.5).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_92.setTransform(157.725,136.25);
	this.shape_92._off = true;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-242,-127.4,9.2,-127.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_93.setTransform(157.725,136.25);
	this.shape_93._off = true;

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-232.6,-127.4,18.6,-127.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_94.setTransform(157.725,136.25);
	this.shape_94._off = true;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-223.2,-127.3,28,-127.3).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_95.setTransform(157.725,136.25);
	this.shape_95._off = true;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-213.8,-127.2,37.4,-127.2).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_96.setTransform(157.725,136.25);
	this.shape_96._off = true;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-204.4,-127.1,46.8,-127.1).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_97.setTransform(157.725,136.25);
	this.shape_97._off = true;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-195,-127,56.2,-127).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_98.setTransform(157.725,136.25);
	this.shape_98._off = true;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-185.6,-126.9,65.6,-126.9).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_99.setTransform(157.725,136.25);
	this.shape_99._off = true;

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-176.2,-126.9,75,-126.9).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_100.setTransform(157.725,136.25);
	this.shape_100._off = true;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-166.8,-126.8,84.4,-126.8).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_101.setTransform(157.725,136.25);
	this.shape_101._off = true;

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-157.4,-126.7,93.8,-126.7).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_102.setTransform(157.725,136.25);
	this.shape_102._off = true;

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-148,-126.6,103.2,-126.6).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_103.setTransform(157.725,136.25);
	this.shape_103._off = true;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-138.6,-126.5,112.6,-126.5).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_104.setTransform(157.725,136.25);
	this.shape_104._off = true;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-129.2,-126.4,122,-126.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_105.setTransform(157.725,136.25);
	this.shape_105._off = true;

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-119.9,-126.4,131.3,-126.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_106.setTransform(157.725,136.25);
	this.shape_106._off = true;

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-110.5,-126.3,140.7,-126.3).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_107.setTransform(157.725,136.25);
	this.shape_107._off = true;

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-101.1,-126.2,150.1,-126.2).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_108.setTransform(157.725,136.25);
	this.shape_108._off = true;

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-91.7,-126.1,159.5,-126.1).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_109.setTransform(157.725,136.25);
	this.shape_109._off = true;

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-82.3,-126,168.9,-126).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_110.setTransform(157.725,136.25);
	this.shape_110._off = true;

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-72.9,-126,178.3,-126).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_111.setTransform(157.725,136.25);
	this.shape_111._off = true;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-63.5,-125.9,187.7,-125.9).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_112.setTransform(157.725,136.25);
	this.shape_112._off = true;

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-54.1,-125.8,197.1,-125.8).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_113.setTransform(157.725,136.25);
	this.shape_113._off = true;

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-44.7,-125.7,206.5,-125.7).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_114.setTransform(157.725,136.25);
	this.shape_114._off = true;

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-35.3,-125.6,215.9,-125.6).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_115.setTransform(157.725,136.25);
	this.shape_115._off = true;

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-25.9,-125.5,225.3,-125.5).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_116.setTransform(157.725,136.25);
	this.shape_116._off = true;

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-16.5,-125.5,234.7,-125.5).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_117.setTransform(157.725,136.25);
	this.shape_117._off = true;

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],-7.1,-125.4,244.1,-125.4).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_118.setTransform(157.725,136.25);
	this.shape_118._off = true;

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],2.3,-125.3,253.5,-125.3).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_119.setTransform(157.725,136.25);
	this.shape_119._off = true;

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],11.7,-125.2,262.9,-125.2).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_120.setTransform(157.725,136.25);
	this.shape_120._off = true;

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],21.1,-125.1,272.3,-125.1).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_121.setTransform(157.725,136.25);
	this.shape_121._off = true;

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],30.4,-125,281.6,-125).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_122.setTransform(157.725,136.25);
	this.shape_122._off = true;

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],39.8,-125,291,-125).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_123.setTransform(157.725,136.25);
	this.shape_123._off = true;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],49.2,-124.9,300.4,-124.9).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_124.setTransform(157.725,136.25);
	this.shape_124._off = true;

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],58.6,-124.8,309.8,-124.8).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_125.setTransform(157.725,136.25);
	this.shape_125._off = true;

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],68,-124.7,319.2,-124.7).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_126.setTransform(157.725,136.25);
	this.shape_126._off = true;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],77.4,-124.6,328.6,-124.6).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_127.setTransform(157.725,136.25);
	this.shape_127._off = true;

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],86.8,-124.5,338,-124.5).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_128.setTransform(157.725,136.25);
	this.shape_128._off = true;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],96.2,-124.5,347.4,-124.5).s().p("AwtKhIAA1BMAhbAAAIAAVBg");
	this.shape_129.setTransform(157.725,136.25);
	this.shape_129._off = true;

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.388)","rgba(255,255,255,0)"],[0,0.545,1],69.3,-25.7,233.9,-25.7).s().p("Aq8CLIAAkVIV5AAIAAEVg");
	this.shape_130.setTransform(157.7284,136.2548,1.5259,4.8358);
	this.shape_130._off = true;

	var maskedShapeInstanceList = [this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(52).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(53).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(54).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(55).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(56).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(57).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.shape_86).wait(58).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(59).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.shape_88).wait(60).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.shape_89).wait(61).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.shape_90).wait(62).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.shape_91).wait(63).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(64).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(65).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(66).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(67).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(68).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(69).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(70).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(71).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(72).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(73).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(74).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(75).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_104).wait(76).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.shape_105).wait(77).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.shape_106).wait(78).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(79).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(80).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(81).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(82).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(83).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(84).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(85).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(86).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(87).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(88).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(89).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(90).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(91).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(92).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(93).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(94).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(95).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(96).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(97).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(98).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.shape_127).wait(99).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(100).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(101).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_130).wait(102).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(171).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(69));

	// Слой_20
	this.instance = new lib.dust_1();
	this.instance.parent = this;
	this.instance.setTransform(103.05,198.6,0.15,0.15,0,0,180,161.7,93);
	this.instance.alpha = 0.0703;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:161.6,regY:93.1,scaleX:0.1568,scaleY:0.1568,skewX:0.0111,x:101.8,alpha:1},4).wait(1).to({regX:154.5,regY:50,scaleX:0.1569,scaleY:0.1569,skewX:0.012,x:102.85,y:191.8,alpha:0.9994},0).wait(1).to({scaleX:0.1572,scaleY:0.1572,skewX:0.0142,x:102.8,alpha:0.9976},0).wait(1).to({scaleX:0.1577,scaleY:0.1577,skewX:0.0177,x:102.75,alpha:0.9949},0).wait(1).to({scaleX:0.1583,scaleY:0.1583,skewX:0.0223,x:102.65,y:191.7,alpha:0.9914},0).wait(1).to({scaleX:0.1591,scaleY:0.1591,skewX:0.0278,x:102.45,alpha:0.9871},0).wait(1).to({scaleX:0.1599,scaleY:0.1599,skewX:0.034,x:102.35,y:191.65,alpha:0.9823},0).wait(1).to({scaleX:0.1609,scaleY:0.1609,skewX:0.041,x:102.15,y:191.6,alpha:0.9769},0).wait(1).to({scaleX:0.1619,scaleY:0.1619,skewX:0.0487,x:101.95,y:191.55,alpha:0.9709},0).wait(1).to({scaleX:0.163,scaleY:0.163,skewX:0.0569,x:101.75,y:191.5,alpha:0.9646},0).wait(1).to({scaleX:0.1642,scaleY:0.1642,skewX:0.0656,x:101.55,y:191.45,alpha:0.9578},0).wait(1).to({scaleX:0.1655,scaleY:0.1655,skewX:0.0749,x:101.3,y:191.35,alpha:0.9507},0).wait(1).to({scaleX:0.1668,scaleY:0.1668,skewX:0.0845,x:101.1,alpha:0.9432},0).wait(1).to({scaleX:0.1681,scaleY:0.1681,skewX:0.0946,x:100.8,y:191.25,alpha:0.9354},0).wait(1).to({scaleX:0.1696,scaleY:0.1696,skewX:0.105,x:100.55,y:191.2,alpha:0.9274},0).wait(1).to({scaleX:0.171,scaleY:0.171,skewX:0.1157,x:100.3,y:191.1,alpha:0.9191},0).wait(1).to({scaleX:0.1725,scaleY:0.1725,skewX:0.1268,x:100,y:191.05,alpha:0.9105},0).wait(1).to({scaleX:0.1741,scaleY:0.1741,skewX:0.1381,x:99.7,y:190.95,alpha:0.9017},0).wait(1).to({scaleX:0.1756,scaleY:0.1756,skewX:0.1498,x:99.4,y:190.9,alpha:0.8927},0).wait(1).to({scaleX:0.1773,scaleY:0.1773,skewX:0.1616,x:99.15,y:190.8,alpha:0.8835},0).wait(1).to({scaleX:0.1789,scaleY:0.1789,skewX:0.1738,x:98.8,y:190.75,alpha:0.8741},0).wait(1).to({scaleX:0.1806,scaleY:0.1806,skewX:0.1861,x:98.5,y:190.65,alpha:0.8646},0).wait(1).to({scaleX:0.1823,scaleY:0.1823,skewX:0.1986,x:98.2,y:190.55,alpha:0.8549},0).wait(1).to({scaleX:0.184,scaleY:0.184,skewX:0.2114,x:97.85,y:190.45,alpha:0.845},0).wait(1).to({scaleX:0.1858,scaleY:0.1858,skewX:0.2243,x:97.55,y:190.4,alpha:0.835},0).wait(1).to({scaleX:0.1875,scaleY:0.1875,skewX:0.2373,x:97.25,y:190.3,alpha:0.8249},0).wait(1).to({scaleX:0.1893,scaleY:0.1893,skewX:0.2506,x:96.9,y:190.2,alpha:0.8147},0).wait(1).to({scaleX:0.1911,scaleY:0.1911,skewX:0.264,x:96.5,y:190.1,alpha:0.8043},0).wait(1).to({scaleX:0.193,scaleY:0.193,skewX:0.2775,x:96.2,y:190.05,alpha:0.7938},0).wait(1).to({scaleX:0.1948,scaleY:0.1948,skewX:0.2911,x:95.85,y:189.95,alpha:0.7833},0).wait(1).to({scaleX:0.1967,scaleY:0.1967,skewX:0.3049,x:95.5,y:189.85,alpha:0.7726},0).wait(1).to({scaleX:0.1986,scaleY:0.1986,skewX:0.3188,x:95.15,y:189.8,alpha:0.7619},0).wait(1).to({scaleX:0.2005,scaleY:0.2005,skewX:0.3328,x:94.85,y:189.65,alpha:0.751},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,skewX:0.3469,x:94.5,y:189.55,alpha:0.7401},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,skewX:0.3611,x:94.15,y:189.45,alpha:0.7291},0).wait(1).to({scaleX:0.2063,scaleY:0.2063,skewX:0.3754,x:93.8,y:189.35,alpha:0.7181},0).wait(1).to({scaleX:0.2082,scaleY:0.2082,skewX:0.3898,x:93.45,y:189.25,alpha:0.7069},0).wait(1).to({scaleX:0.2102,scaleY:0.2102,skewX:0.4042,x:93.1,y:189.15,alpha:0.6957},0).wait(1).to({scaleX:0.2121,scaleY:0.2121,skewX:0.4188,x:92.65,y:189.1,alpha:0.6845},0).wait(1).to({scaleX:0.2141,scaleY:0.2141,skewX:0.4333,x:92.25,y:189,alpha:0.6732},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,skewX:0.448,x:91.9,y:188.9,alpha:0.6619},0).wait(1).to({scaleX:0.2181,scaleY:0.2181,skewX:0.4627,x:91.55,y:188.8,alpha:0.6505},0).wait(1).to({scaleX:0.2201,scaleY:0.2201,skewX:0.4775,x:91.2,y:188.7,alpha:0.6391},0).wait(1).to({scaleX:0.2221,scaleY:0.2221,skewX:0.4923,x:90.85,y:188.6,alpha:0.6276},0).wait(1).to({scaleX:0.2241,scaleY:0.2241,skewX:0.5071,x:90.45,y:188.5,alpha:0.6161},0).wait(1).to({scaleX:0.2262,scaleY:0.2262,skewX:0.522,x:90.1,y:188.4,alpha:0.6046},0).wait(1).to({scaleX:0.2282,scaleY:0.2282,skewX:0.5369,x:89.75,y:188.3,alpha:0.593},0).wait(1).to({scaleX:0.2302,scaleY:0.2302,skewX:0.5519,x:89.35,y:188.2,alpha:0.5815},0).wait(1).to({scaleX:0.2323,scaleY:0.2322,skewX:0.5669,x:88.95,y:188.1,alpha:0.5699},0).wait(1).to({scaleX:0.2343,scaleY:0.2343,skewX:0.5819,x:88.6,y:188,alpha:0.5582},0).wait(1).to({scaleX:0.2363,scaleY:0.2363,skewX:0.5969,x:88.25,y:187.9,alpha:0.5466},0).wait(1).to({scaleX:0.2384,scaleY:0.2384,skewX:0.6119,x:87.8,y:187.75,alpha:0.535},0).wait(1).to({scaleX:0.2404,scaleY:0.2404,skewX:0.627,x:87.45,y:187.65,alpha:0.5233},0).wait(1).to({scaleX:0.2425,scaleY:0.2424,skewX:0.6421,x:87.1,y:187.55,alpha:0.5117},0).wait(1).to({scaleX:0.2445,scaleY:0.2445,skewX:0.6571,x:86.75,y:187.45,alpha:0.5},0).wait(1).to({scaleX:0.2465,scaleY:0.2465,skewX:0.6722,x:86.3,y:187.4,alpha:0.4883},0).wait(1).to({scaleX:0.2486,scaleY:0.2486,skewX:0.6872,x:85.95,y:187.3,alpha:0.4767},0).wait(1).to({scaleX:0.2506,scaleY:0.2506,skewX:0.7023,x:85.6,y:187.2,alpha:0.465},0).wait(1).to({scaleX:0.2527,scaleY:0.2527,skewX:0.7173,x:85.2,y:187.1,alpha:0.4534},0).wait(1).to({scaleX:0.2547,scaleY:0.2547,skewX:0.7324,x:84.85,y:187,alpha:0.4418},0).wait(1).to({scaleX:0.2567,scaleY:0.2567,skewX:0.7474,x:84.5,y:186.9,alpha:0.4301},0).wait(1).to({scaleX:0.2588,scaleY:0.2588,skewX:0.7624,x:84.1,y:186.8,alpha:0.4185},0).wait(1).to({scaleX:0.2608,scaleY:0.2608,skewX:0.7773,x:83.7,y:186.7,alpha:0.407},0).wait(1).to({scaleX:0.2628,scaleY:0.2628,skewX:0.7922,x:83.35,y:186.6,alpha:0.3954},0).wait(1).to({scaleX:0.2649,scaleY:0.2648,skewX:0.8071,x:82.95,y:186.5,alpha:0.3839},0).wait(1).to({scaleX:0.2669,scaleY:0.2669,skewX:0.822,x:82.55,y:186.4,alpha:0.3724},0).wait(1).to({scaleX:0.2689,scaleY:0.2689,skewX:0.8368,x:82.2,y:186.3,alpha:0.3609},0).wait(1).to({scaleX:0.2709,scaleY:0.2709,skewX:0.8515,x:81.85,y:186.2,alpha:0.3495},0).wait(1).to({scaleX:0.2729,scaleY:0.2729,skewX:0.8662,x:81.5,y:186.1,alpha:0.3381},0).wait(1).to({scaleX:0.2749,scaleY:0.2748,skewX:0.8809,x:81.15,y:186,alpha:0.3268},0).wait(1).to({scaleX:0.2768,scaleY:0.2768,skewX:0.8955,x:80.8,y:185.9,alpha:0.3155},0).wait(1).to({scaleX:0.2788,scaleY:0.2788,skewX:0.91,x:80.4,y:185.8,alpha:0.3043},0).wait(1).to({scaleX:0.2808,scaleY:0.2808,skewX:0.9245,x:80,y:185.7,alpha:0.2931},0).wait(1).to({scaleX:0.2827,scaleY:0.2827,skewX:0.9388,x:79.65,y:185.6,alpha:0.2819},0).wait(1).to({scaleX:0.2847,scaleY:0.2846,skewX:0.9531,x:79.3,y:185.5,alpha:0.2709},0).wait(1).to({scaleX:0.2866,scaleY:0.2866,skewX:0.9673,x:78.95,y:185.45,alpha:0.2599},0).wait(1).to({scaleX:0.2885,scaleY:0.2885,skewX:0.9814,x:78.65,y:185.3,alpha:0.249},0).wait(1).to({scaleX:0.2904,scaleY:0.2904,skewX:0.9954,x:78.3,y:185.2,alpha:0.2381},0).wait(1).to({scaleX:0.2923,scaleY:0.2923,skewX:1.0093,x:77.95,y:185.1,alpha:0.2274},0).wait(1).to({scaleX:0.2942,scaleY:0.2941,skewX:1.0231,x:77.6,y:185.05,alpha:0.2167},0).wait(1).to({scaleX:0.296,scaleY:0.296,skewX:1.0367,x:77.25,y:184.95,alpha:0.2062},0).wait(1).to({scaleX:0.2979,scaleY:0.2978,skewX:1.0503,x:76.95,y:184.85,alpha:0.1957},0).wait(1).to({scaleX:0.2997,scaleY:0.2997,skewX:1.0637,x:76.55,y:184.8,alpha:0.1853},0).wait(1).to({scaleX:0.3015,scaleY:0.3014,skewX:1.0769,x:76.2,y:184.65,alpha:0.1751},0).wait(1).to({scaleX:0.3032,scaleY:0.3032,skewX:1.09,x:75.9,y:184.6,alpha:0.165},0).wait(1).to({scaleX:0.305,scaleY:0.305,skewX:1.1029,x:75.6,y:184.5,alpha:0.155},0).wait(1).to({scaleX:0.3067,scaleY:0.3067,skewX:1.1156,x:75.25,y:184.45,alpha:0.1451},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,skewX:1.1281,x:74.95,y:184.3,alpha:0.1354},0).wait(1).to({scaleX:0.3101,scaleY:0.3101,skewX:1.1405,x:74.7,y:184.25,alpha:0.1259},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,skewX:1.1526,x:74.4,y:184.2,alpha:0.1165},0).wait(1).to({scaleX:0.3134,scaleY:0.3133,skewX:1.1645,x:74.1,y:184.1,alpha:0.1073},0).wait(1).to({scaleX:0.3149,scaleY:0.3149,skewX:1.1761,x:73.8,y:184,alpha:0.0983},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,skewX:1.1875,x:73.45,y:183.9,alpha:0.0895},0).wait(1).to({scaleX:0.318,scaleY:0.318,skewX:1.1985,x:73.15,y:183.85,alpha:0.0809},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,skewX:1.2093,x:72.95,y:183.75,alpha:0.0726},0).wait(1).to({scaleX:0.3208,scaleY:0.3208,skewX:1.2197,x:72.7,alpha:0.0646},0).wait(1).to({scaleX:0.3222,scaleY:0.3222,skewX:1.2297,x:72.4,y:183.65,alpha:0.0568},0).wait(1).to({scaleX:0.3235,scaleY:0.3235,skewX:1.2394,x:72.2,y:183.55,alpha:0.0493},0).wait(1).to({scaleX:0.3248,scaleY:0.3248,skewX:1.2486,x:71.95,alpha:0.0422},0).wait(1).to({scaleX:0.326,scaleY:0.3259,skewX:1.2573,x:71.75,y:183.45,alpha:0.0354},0).wait(1).to({scaleX:0.3271,scaleY:0.327,skewX:1.2656,x:71.55,y:183.4,alpha:0.0291},0).wait(1).to({scaleX:0.3281,scaleY:0.3281,skewX:1.2732,x:71.35,y:183.35,alpha:0.0231},0).wait(1).to({scaleX:0.3291,scaleY:0.329,skewX:1.2802,x:71.2,y:183.3,alpha:0.0177},0).wait(1).to({scaleX:0.3299,scaleY:0.3299,skewX:1.2865,x:71.05,alpha:0.0129},0).wait(1).to({scaleX:0.3307,scaleY:0.3306,skewX:1.2919,x:70.9,y:183.25,alpha:0.0086},0).wait(1).to({scaleX:0.3313,scaleY:0.3312,skewX:1.2965,x:70.8,y:183.2,alpha:0.0051},0).wait(1).to({scaleX:0.3317,scaleY:0.3317,skewX:1.3,x:70.65,alpha:0.0024},0).wait(1).to({scaleX:0.3321,scaleY:0.332,skewX:1.3023,x:70.6,y:183.15,alpha:0.0006},0).wait(1).to({regX:162.1,regY:92.9,scaleX:0.3322,scaleY:0.3321,skewX:1.3031,x:67.95,y:197.5,alpha:0},0).to({_off:true},1).wait(182).to({_off:false,regX:161.7,regY:93,scaleX:0.15,scaleY:0.15,skewX:0,x:103.05,y:198.6,alpha:0.0703},0).to({regX:161.6,regY:93.1,scaleX:0.1568,scaleY:0.1568,skewX:0.0111,x:101.8,alpha:1},4).wait(1).to({regX:154.5,regY:50,scaleX:0.1569,scaleY:0.1569,skewX:0.012,x:102.85,y:191.8,alpha:0.9994},0).wait(1).to({scaleX:0.1572,scaleY:0.1572,skewX:0.0142,x:102.8,alpha:0.9976},0).wait(1).to({scaleX:0.1577,scaleY:0.1577,skewX:0.0177,x:102.75,alpha:0.9949},0).wait(1).to({scaleX:0.1583,scaleY:0.1583,skewX:0.0223,x:102.65,y:191.7,alpha:0.9914},0).wait(1).to({scaleX:0.1591,scaleY:0.1591,skewX:0.0278,x:102.45,alpha:0.9871},0).wait(1).to({scaleX:0.1599,scaleY:0.1599,skewX:0.034,x:102.35,y:191.65,alpha:0.9823},0).wait(1).to({scaleX:0.1609,scaleY:0.1609,skewX:0.041,x:102.15,y:191.6,alpha:0.9769},0).wait(1).to({scaleX:0.1619,scaleY:0.1619,skewX:0.0487,x:101.95,y:191.55,alpha:0.9709},0).wait(1).to({scaleX:0.163,scaleY:0.163,skewX:0.0569,x:101.75,y:191.5,alpha:0.9646},0).wait(1).to({scaleX:0.1642,scaleY:0.1642,skewX:0.0656,x:101.55,y:191.45,alpha:0.9578},0).wait(1).to({scaleX:0.1655,scaleY:0.1655,skewX:0.0749,x:101.3,y:191.35,alpha:0.9507},0).wait(1).to({scaleX:0.1668,scaleY:0.1668,skewX:0.0845,x:101.1,alpha:0.9432},0).wait(1).to({scaleX:0.1681,scaleY:0.1681,skewX:0.0946,x:100.8,y:191.25,alpha:0.9354},0).wait(1).to({scaleX:0.1696,scaleY:0.1696,skewX:0.105,x:100.55,y:191.2,alpha:0.9274},0).wait(1).to({scaleX:0.171,scaleY:0.171,skewX:0.1157,x:100.3,y:191.1,alpha:0.9191},0).wait(1).to({scaleX:0.1725,scaleY:0.1725,skewX:0.1268,x:100,y:191.05,alpha:0.9105},0).wait(1).to({scaleX:0.1741,scaleY:0.1741,skewX:0.1381,x:99.7,y:190.95,alpha:0.9017},0).wait(1).to({scaleX:0.1756,scaleY:0.1756,skewX:0.1498,x:99.4,y:190.9,alpha:0.8927},0).wait(1).to({scaleX:0.1773,scaleY:0.1773,skewX:0.1616,x:99.15,y:190.8,alpha:0.8835},0).wait(1).to({scaleX:0.1789,scaleY:0.1789,skewX:0.1738,x:98.8,y:190.75,alpha:0.8741},0).wait(1).to({scaleX:0.1806,scaleY:0.1806,skewX:0.1861,x:98.5,y:190.65,alpha:0.8646},0).wait(1).to({scaleX:0.1823,scaleY:0.1823,skewX:0.1986,x:98.2,y:190.55,alpha:0.8549},0).wait(1).to({scaleX:0.184,scaleY:0.184,skewX:0.2114,x:97.85,y:190.45,alpha:0.845},0).wait(1).to({scaleX:0.1858,scaleY:0.1858,skewX:0.2243,x:97.55,y:190.4,alpha:0.835},0).wait(1).to({scaleX:0.1875,scaleY:0.1875,skewX:0.2373,x:97.25,y:190.3,alpha:0.8249},0).wait(1).to({scaleX:0.1893,scaleY:0.1893,skewX:0.2506,x:96.9,y:190.2,alpha:0.8147},0).wait(1).to({scaleX:0.1911,scaleY:0.1911,skewX:0.264,x:96.5,y:190.1,alpha:0.8043},0).wait(1).to({scaleX:0.193,scaleY:0.193,skewX:0.2775,x:96.2,y:190.05,alpha:0.7938},0).wait(1).to({scaleX:0.1948,scaleY:0.1948,skewX:0.2911,x:95.85,y:189.95,alpha:0.7833},0).wait(1).to({scaleX:0.1967,scaleY:0.1967,skewX:0.3049,x:95.5,y:189.85,alpha:0.7726},0).wait(1).to({scaleX:0.1986,scaleY:0.1986,skewX:0.3188,x:95.15,y:189.8,alpha:0.7619},0).wait(1).to({scaleX:0.2005,scaleY:0.2005,skewX:0.3328,x:94.85,y:189.65,alpha:0.751},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,skewX:0.3469,x:94.5,y:189.55,alpha:0.7401},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,skewX:0.3611,x:94.15,y:189.45,alpha:0.7291},0).wait(1).to({scaleX:0.2063,scaleY:0.2063,skewX:0.3754,x:93.8,y:189.35,alpha:0.7181},0).wait(1).to({scaleX:0.2082,scaleY:0.2082,skewX:0.3898,x:93.45,y:189.25,alpha:0.7069},0).wait(1).to({scaleX:0.2102,scaleY:0.2102,skewX:0.4042,x:93.1,y:189.15,alpha:0.6957},0).wait(1).to({scaleX:0.2121,scaleY:0.2121,skewX:0.4188,x:92.65,y:189.1,alpha:0.6845},0).wait(1).to({scaleX:0.2141,scaleY:0.2141,skewX:0.4333,x:92.25,y:189,alpha:0.6732},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,skewX:0.448,x:91.9,y:188.9,alpha:0.6619},0).wait(1).to({scaleX:0.2181,scaleY:0.2181,skewX:0.4627,x:91.55,y:188.8,alpha:0.6505},0).wait(1).to({scaleX:0.2201,scaleY:0.2201,skewX:0.4775,x:91.2,y:188.7,alpha:0.6391},0).wait(1).to({scaleX:0.2221,scaleY:0.2221,skewX:0.4923,x:90.85,y:188.6,alpha:0.6276},0).wait(1).to({scaleX:0.2241,scaleY:0.2241,skewX:0.5071,x:90.45,y:188.5,alpha:0.6161},0).wait(1).to({scaleX:0.2262,scaleY:0.2262,skewX:0.522,x:90.1,y:188.4,alpha:0.6046},0).wait(1).to({scaleX:0.2282,scaleY:0.2282,skewX:0.5369,x:89.75,y:188.3,alpha:0.593},0).wait(1).to({scaleX:0.2302,scaleY:0.2302,skewX:0.5519,x:89.35,y:188.2,alpha:0.5815},0).wait(1).to({scaleX:0.2323,scaleY:0.2322,skewX:0.5669,x:88.95,y:188.1,alpha:0.5699},0).wait(1).to({scaleX:0.2343,scaleY:0.2343,skewX:0.5819,x:88.6,y:188,alpha:0.5582},0).wait(1).to({scaleX:0.2363,scaleY:0.2363,skewX:0.5969,x:88.25,y:187.9,alpha:0.5466},0).wait(1).to({scaleX:0.2384,scaleY:0.2384,skewX:0.6119,x:87.8,y:187.75,alpha:0.535},0).wait(1).to({scaleX:0.2404,scaleY:0.2404,skewX:0.627,x:87.45,y:187.65,alpha:0.5233},0).wait(1).to({scaleX:0.2425,scaleY:0.2424,skewX:0.6421,x:87.1,y:187.55,alpha:0.5117},0).wait(1).to({scaleX:0.2445,scaleY:0.2445,skewX:0.6571,x:86.75,y:187.45,alpha:0.5},0).wait(1).to({scaleX:0.2465,scaleY:0.2465,skewX:0.6722,x:86.3,y:187.4,alpha:0.4883},0).wait(1).to({scaleX:0.2486,scaleY:0.2486,skewX:0.6872,x:85.95,y:187.3,alpha:0.4767},0).wait(1).to({scaleX:0.2506,scaleY:0.2506,skewX:0.7023,x:85.6,y:187.2,alpha:0.465},0).wait(1).to({scaleX:0.2527,scaleY:0.2527,skewX:0.7173,x:85.2,y:187.1,alpha:0.4534},0).wait(1).to({scaleX:0.2547,scaleY:0.2547,skewX:0.7324,x:84.85,y:187,alpha:0.4418},0).wait(1).to({scaleX:0.2567,scaleY:0.2567,skewX:0.7474,x:84.5,y:186.9,alpha:0.4301},0).wait(1).to({scaleX:0.2588,scaleY:0.2588,skewX:0.7624,x:84.1,y:186.8,alpha:0.4185},0).wait(1).to({scaleX:0.2608,scaleY:0.2608,skewX:0.7773,x:83.7,y:186.7,alpha:0.407},0).wait(1).to({scaleX:0.2628,scaleY:0.2628,skewX:0.7922,x:83.35,y:186.6,alpha:0.3954},0).wait(1).to({scaleX:0.2649,scaleY:0.2648,skewX:0.8071,x:82.95,y:186.5,alpha:0.3839},0).wait(1).to({scaleX:0.2669,scaleY:0.2669,skewX:0.822,x:82.55,y:186.4,alpha:0.3724},0).wait(1).to({scaleX:0.2689,scaleY:0.2689,skewX:0.8368,x:82.2,y:186.3,alpha:0.3609},0).wait(1).to({scaleX:0.2709,scaleY:0.2709,skewX:0.8515,x:81.85,y:186.2,alpha:0.3495},0).wait(1).to({scaleX:0.2729,scaleY:0.2729,skewX:0.8662,x:81.5,y:186.1,alpha:0.3381},0).wait(1).to({scaleX:0.2749,scaleY:0.2748,skewX:0.8809,x:81.15,y:186,alpha:0.3268},0).wait(1).to({scaleX:0.2768,scaleY:0.2768,skewX:0.8955,x:80.8,y:185.9,alpha:0.3155},0).wait(1).to({scaleX:0.2788,scaleY:0.2788,skewX:0.91,x:80.4,y:185.8,alpha:0.3043},0).wait(1).to({scaleX:0.2808,scaleY:0.2808,skewX:0.9245,x:80,y:185.7,alpha:0.2931},0).wait(1).to({scaleX:0.2827,scaleY:0.2827,skewX:0.9388,x:79.65,y:185.6,alpha:0.2819},0).wait(1).to({scaleX:0.2847,scaleY:0.2846,skewX:0.9531,x:79.3,y:185.5,alpha:0.2709},0).wait(1).to({scaleX:0.2866,scaleY:0.2866,skewX:0.9673,x:78.95,y:185.45,alpha:0.2599},0).wait(1).to({scaleX:0.2885,scaleY:0.2885,skewX:0.9814,x:78.65,y:185.3,alpha:0.249},0).wait(1).to({scaleX:0.2904,scaleY:0.2904,skewX:0.9954,x:78.3,y:185.2,alpha:0.2381},0).wait(1).to({scaleX:0.2923,scaleY:0.2923,skewX:1.0093,x:77.95,y:185.1,alpha:0.2274},0).wait(1).to({scaleX:0.2942,scaleY:0.2941,skewX:1.0231,x:77.6,y:185.05,alpha:0.2167},0).wait(1).to({scaleX:0.296,scaleY:0.296,skewX:1.0367,x:77.25,y:184.95,alpha:0.2062},0).wait(1).to({scaleX:0.2979,scaleY:0.2978,skewX:1.0503,x:76.95,y:184.85,alpha:0.1957},0).wait(1).to({scaleX:0.2997,scaleY:0.2997,skewX:1.0637,x:76.55,y:184.8,alpha:0.1853},0).wait(1).to({scaleX:0.3015,scaleY:0.3014,skewX:1.0769,x:76.2,y:184.65,alpha:0.1751},0).wait(1).to({scaleX:0.3032,scaleY:0.3032,skewX:1.09,x:75.9,y:184.6,alpha:0.165},0).wait(1).to({scaleX:0.305,scaleY:0.305,skewX:1.1029,x:75.6,y:184.5,alpha:0.155},0).wait(1).to({scaleX:0.3067,scaleY:0.3067,skewX:1.1156,x:75.25,y:184.45,alpha:0.1451},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,skewX:1.1281,x:74.95,y:184.3,alpha:0.1354},0).wait(1).to({scaleX:0.3101,scaleY:0.3101,skewX:1.1405,x:74.7,y:184.25,alpha:0.1259},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,skewX:1.1526,x:74.4,y:184.2,alpha:0.1165},0).wait(1).to({scaleX:0.3134,scaleY:0.3133,skewX:1.1645,x:74.1,y:184.1,alpha:0.1073},0).wait(1).to({scaleX:0.3149,scaleY:0.3149,skewX:1.1761,x:73.8,y:184,alpha:0.0983},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,skewX:1.1875,x:73.45,y:183.9,alpha:0.0895},0).wait(1).to({scaleX:0.318,scaleY:0.318,skewX:1.1985,x:73.15,y:183.85,alpha:0.0809},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,skewX:1.2093,x:72.95,y:183.75,alpha:0.0726},0).wait(1).to({scaleX:0.3208,scaleY:0.3208,skewX:1.2197,x:72.7,alpha:0.0646},0).wait(1).to({scaleX:0.3222,scaleY:0.3222,skewX:1.2297,x:72.4,y:183.65,alpha:0.0568},0).wait(1).to({scaleX:0.3235,scaleY:0.3235,skewX:1.2394,x:72.2,y:183.55,alpha:0.0493},0).wait(1).to({scaleX:0.3248,scaleY:0.3248,skewX:1.2486,x:71.95,alpha:0.0422},0).wait(1).to({scaleX:0.326,scaleY:0.3259,skewX:1.2573,x:71.75,y:183.45,alpha:0.0354},0).wait(1).to({scaleX:0.3271,scaleY:0.327,skewX:1.2656,x:71.55,y:183.4,alpha:0.0291},0).wait(1).to({scaleX:0.3281,scaleY:0.3281,skewX:1.2732,x:71.35,y:183.35,alpha:0.0231},0).wait(1).to({scaleX:0.3291,scaleY:0.329,skewX:1.2802,x:71.2,y:183.3,alpha:0.0177},0).wait(1).to({scaleX:0.3299,scaleY:0.3299,skewX:1.2865,x:71.05,alpha:0.0129},0).wait(1).to({scaleX:0.3307,scaleY:0.3306,skewX:1.2919,x:70.9,y:183.25,alpha:0.0086},0).wait(1).to({scaleX:0.3313,scaleY:0.3312,skewX:1.2965,x:70.8,y:183.2,alpha:0.0051},0).wait(1).to({scaleX:0.3317,scaleY:0.3317,skewX:1.3,x:70.65,alpha:0.0024},0).wait(1).to({scaleX:0.3321,scaleY:0.332,skewX:1.3023,x:70.6,y:183.15,alpha:0.0006},0).wait(1).to({regX:162.1,regY:92.9,scaleX:0.3322,scaleY:0.3321,skewX:1.3031,x:67.95,y:197.5,alpha:0},0).to({_off:true},1).wait(182).to({_off:false,regX:161.7,regY:93,scaleX:0.15,scaleY:0.15,skewX:0,x:103.05,y:198.6,alpha:0.0703},0).to({regX:161.6,regY:93.1,scaleX:0.1568,scaleY:0.1568,skewX:0.0111,x:101.8,alpha:1},4).wait(1).to({regX:154.5,regY:50,scaleX:0.1569,scaleY:0.1569,skewX:0.012,x:102.85,y:191.8,alpha:0.9994},0).wait(1).to({scaleX:0.1572,scaleY:0.1572,skewX:0.0142,x:102.8,alpha:0.9976},0).wait(1).to({scaleX:0.1577,scaleY:0.1577,skewX:0.0177,x:102.75,alpha:0.9949},0).wait(1).to({scaleX:0.1583,scaleY:0.1583,skewX:0.0223,x:102.65,y:191.7,alpha:0.9914},0).wait(1).to({scaleX:0.1591,scaleY:0.1591,skewX:0.0278,x:102.45,alpha:0.9871},0).wait(1).to({scaleX:0.1599,scaleY:0.1599,skewX:0.034,x:102.35,y:191.65,alpha:0.9823},0).wait(1).to({scaleX:0.1609,scaleY:0.1609,skewX:0.041,x:102.15,y:191.6,alpha:0.9769},0).wait(1).to({scaleX:0.1619,scaleY:0.1619,skewX:0.0487,x:101.95,y:191.55,alpha:0.9709},0).wait(1).to({scaleX:0.163,scaleY:0.163,skewX:0.0569,x:101.75,y:191.5,alpha:0.9646},0).wait(1).to({scaleX:0.1642,scaleY:0.1642,skewX:0.0656,x:101.55,y:191.45,alpha:0.9578},0).wait(1).to({scaleX:0.1655,scaleY:0.1655,skewX:0.0749,x:101.3,y:191.35,alpha:0.9507},0).wait(1).to({scaleX:0.1668,scaleY:0.1668,skewX:0.0845,x:101.1,alpha:0.9432},0).wait(1).to({scaleX:0.1681,scaleY:0.1681,skewX:0.0946,x:100.8,y:191.25,alpha:0.9354},0).wait(1).to({scaleX:0.1696,scaleY:0.1696,skewX:0.105,x:100.55,y:191.2,alpha:0.9274},0).wait(1).to({scaleX:0.171,scaleY:0.171,skewX:0.1157,x:100.3,y:191.1,alpha:0.9191},0).wait(1).to({scaleX:0.1725,scaleY:0.1725,skewX:0.1268,x:100,y:191.05,alpha:0.9105},0).wait(1).to({scaleX:0.1741,scaleY:0.1741,skewX:0.1381,x:99.7,y:190.95,alpha:0.9017},0).wait(1).to({scaleX:0.1756,scaleY:0.1756,skewX:0.1498,x:99.4,y:190.9,alpha:0.8927},0).wait(1).to({scaleX:0.1773,scaleY:0.1773,skewX:0.1616,x:99.15,y:190.8,alpha:0.8835},0).wait(1).to({scaleX:0.1789,scaleY:0.1789,skewX:0.1738,x:98.8,y:190.75,alpha:0.8741},0).wait(1).to({scaleX:0.1806,scaleY:0.1806,skewX:0.1861,x:98.5,y:190.65,alpha:0.8646},0).wait(1).to({scaleX:0.1823,scaleY:0.1823,skewX:0.1986,x:98.2,y:190.55,alpha:0.8549},0).wait(1).to({scaleX:0.184,scaleY:0.184,skewX:0.2114,x:97.85,y:190.45,alpha:0.845},0).wait(1).to({scaleX:0.1858,scaleY:0.1858,skewX:0.2243,x:97.55,y:190.4,alpha:0.835},0).wait(1).to({scaleX:0.1875,scaleY:0.1875,skewX:0.2373,x:97.25,y:190.3,alpha:0.8249},0).wait(1).to({scaleX:0.1893,scaleY:0.1893,skewX:0.2506,x:96.9,y:190.2,alpha:0.8147},0).wait(1).to({scaleX:0.1911,scaleY:0.1911,skewX:0.264,x:96.5,y:190.1,alpha:0.8043},0).wait(1).to({scaleX:0.193,scaleY:0.193,skewX:0.2775,x:96.2,y:190.05,alpha:0.7938},0).wait(1).to({scaleX:0.1948,scaleY:0.1948,skewX:0.2911,x:95.85,y:189.95,alpha:0.7833},0).wait(1).to({scaleX:0.1967,scaleY:0.1967,skewX:0.3049,x:95.5,y:189.85,alpha:0.7726},0).wait(1).to({scaleX:0.1986,scaleY:0.1986,skewX:0.3188,x:95.15,y:189.8,alpha:0.7619},0).wait(1).to({scaleX:0.2005,scaleY:0.2005,skewX:0.3328,x:94.85,y:189.65,alpha:0.751},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,skewX:0.3469,x:94.5,y:189.55,alpha:0.7401},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,skewX:0.3611,x:94.15,y:189.45,alpha:0.7291},0).wait(1).to({scaleX:0.2063,scaleY:0.2063,skewX:0.3754,x:93.8,y:189.35,alpha:0.7181},0).wait(1).to({scaleX:0.2082,scaleY:0.2082,skewX:0.3898,x:93.45,y:189.25,alpha:0.7069},0).wait(1).to({scaleX:0.2102,scaleY:0.2102,skewX:0.4042,x:93.1,y:189.15,alpha:0.6957},0).wait(1).to({scaleX:0.2121,scaleY:0.2121,skewX:0.4188,x:92.65,y:189.1,alpha:0.6845},0).wait(1).to({scaleX:0.2141,scaleY:0.2141,skewX:0.4333,x:92.25,y:189,alpha:0.6732},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,skewX:0.448,x:91.9,y:188.9,alpha:0.6619},0).wait(1).to({scaleX:0.2181,scaleY:0.2181,skewX:0.4627,x:91.55,y:188.8,alpha:0.6505},0).wait(1).to({scaleX:0.2201,scaleY:0.2201,skewX:0.4775,x:91.2,y:188.7,alpha:0.6391},0).wait(1).to({scaleX:0.2221,scaleY:0.2221,skewX:0.4923,x:90.85,y:188.6,alpha:0.6276},0).wait(1).to({scaleX:0.2241,scaleY:0.2241,skewX:0.5071,x:90.45,y:188.5,alpha:0.6161},0).wait(1).to({scaleX:0.2262,scaleY:0.2262,skewX:0.522,x:90.1,y:188.4,alpha:0.6046},0).wait(1).to({scaleX:0.2282,scaleY:0.2282,skewX:0.5369,x:89.75,y:188.3,alpha:0.593},0).wait(1).to({scaleX:0.2302,scaleY:0.2302,skewX:0.5519,x:89.35,y:188.2,alpha:0.5815},0).wait(1).to({scaleX:0.2323,scaleY:0.2322,skewX:0.5669,x:88.95,y:188.1,alpha:0.5699},0).wait(1).to({scaleX:0.2343,scaleY:0.2343,skewX:0.5819,x:88.6,y:188,alpha:0.5582},0).wait(1).to({scaleX:0.2363,scaleY:0.2363,skewX:0.5969,x:88.25,y:187.9,alpha:0.5466},0).wait(1).to({scaleX:0.2384,scaleY:0.2384,skewX:0.6119,x:87.8,y:187.75,alpha:0.535},0).wait(1).to({scaleX:0.2404,scaleY:0.2404,skewX:0.627,x:87.45,y:187.65,alpha:0.5233},0).wait(1).to({scaleX:0.2425,scaleY:0.2424,skewX:0.6421,x:87.1,y:187.55,alpha:0.5117},0).wait(1).to({scaleX:0.2445,scaleY:0.2445,skewX:0.6571,x:86.75,y:187.45,alpha:0.5},0).wait(1).to({scaleX:0.2465,scaleY:0.2465,skewX:0.6722,x:86.3,y:187.4,alpha:0.4883},0).wait(1).to({scaleX:0.2486,scaleY:0.2486,skewX:0.6872,x:85.95,y:187.3,alpha:0.4767},0).wait(1).to({scaleX:0.2506,scaleY:0.2506,skewX:0.7023,x:85.6,y:187.2,alpha:0.465},0).wait(1).to({scaleX:0.2527,scaleY:0.2527,skewX:0.7173,x:85.2,y:187.1,alpha:0.4534},0).wait(1).to({scaleX:0.2547,scaleY:0.2547,skewX:0.7324,x:84.85,y:187,alpha:0.4418},0).wait(1).to({scaleX:0.2567,scaleY:0.2567,skewX:0.7474,x:84.5,y:186.9,alpha:0.4301},0).wait(1).to({scaleX:0.2588,scaleY:0.2588,skewX:0.7624,x:84.1,y:186.8,alpha:0.4185},0).wait(1).to({scaleX:0.2608,scaleY:0.2608,skewX:0.7773,x:83.7,y:186.7,alpha:0.407},0).wait(1).to({scaleX:0.2628,scaleY:0.2628,skewX:0.7922,x:83.35,y:186.6,alpha:0.3954},0).wait(1).to({scaleX:0.2649,scaleY:0.2648,skewX:0.8071,x:82.95,y:186.5,alpha:0.3839},0).wait(1).to({scaleX:0.2669,scaleY:0.2669,skewX:0.822,x:82.55,y:186.4,alpha:0.3724},0).wait(1).to({scaleX:0.2689,scaleY:0.2689,skewX:0.8368,x:82.2,y:186.3,alpha:0.3609},0).wait(1).to({scaleX:0.2709,scaleY:0.2709,skewX:0.8515,x:81.85,y:186.2,alpha:0.3495},0).wait(1).to({scaleX:0.2729,scaleY:0.2729,skewX:0.8662,x:81.5,y:186.1,alpha:0.3381},0).wait(1).to({scaleX:0.2749,scaleY:0.2748,skewX:0.8809,x:81.15,y:186,alpha:0.3268},0).wait(1).to({scaleX:0.2768,scaleY:0.2768,skewX:0.8955,x:80.8,y:185.9,alpha:0.3155},0).wait(1).to({scaleX:0.2788,scaleY:0.2788,skewX:0.91,x:80.4,y:185.8,alpha:0.3043},0).wait(1).to({scaleX:0.2808,scaleY:0.2808,skewX:0.9245,x:80,y:185.7,alpha:0.2931},0).wait(1).to({scaleX:0.2827,scaleY:0.2827,skewX:0.9388,x:79.65,y:185.6,alpha:0.2819},0).wait(1).to({scaleX:0.2847,scaleY:0.2846,skewX:0.9531,x:79.3,y:185.5,alpha:0.2709},0).wait(1).to({scaleX:0.2866,scaleY:0.2866,skewX:0.9673,x:78.95,y:185.45,alpha:0.2599},0).wait(1).to({scaleX:0.2885,scaleY:0.2885,skewX:0.9814,x:78.65,y:185.3,alpha:0.249},0).wait(1).to({scaleX:0.2904,scaleY:0.2904,skewX:0.9954,x:78.3,y:185.2,alpha:0.2381},0).wait(1).to({scaleX:0.2923,scaleY:0.2923,skewX:1.0093,x:77.95,y:185.1,alpha:0.2274},0).wait(1).to({scaleX:0.2942,scaleY:0.2941,skewX:1.0231,x:77.6,y:185.05,alpha:0.2167},0).wait(1).to({scaleX:0.296,scaleY:0.296,skewX:1.0367,x:77.25,y:184.95,alpha:0.2062},0).wait(1).to({scaleX:0.2979,scaleY:0.2978,skewX:1.0503,x:76.95,y:184.85,alpha:0.1957},0).wait(1).to({scaleX:0.2997,scaleY:0.2997,skewX:1.0637,x:76.55,y:184.8,alpha:0.1853},0).wait(1).to({scaleX:0.3015,scaleY:0.3014,skewX:1.0769,x:76.2,y:184.65,alpha:0.1751},0).wait(1).to({scaleX:0.3032,scaleY:0.3032,skewX:1.09,x:75.9,y:184.6,alpha:0.165},0).wait(1).to({scaleX:0.305,scaleY:0.305,skewX:1.1029,x:75.6,y:184.5,alpha:0.155},0).wait(1).to({scaleX:0.3067,scaleY:0.3067,skewX:1.1156,x:75.25,y:184.45,alpha:0.1451},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,skewX:1.1281,x:74.95,y:184.3,alpha:0.1354},0).wait(1).to({scaleX:0.3101,scaleY:0.3101,skewX:1.1405,x:74.7,y:184.25,alpha:0.1259},0).wait(1).to({scaleX:0.3117,scaleY:0.3117,skewX:1.1526,x:74.4,y:184.2,alpha:0.1165},0).wait(1).to({scaleX:0.3134,scaleY:0.3133,skewX:1.1645,x:74.1,y:184.1,alpha:0.1073},0).wait(1).to({scaleX:0.3149,scaleY:0.3149,skewX:1.1761,x:73.8,y:184,alpha:0.0983},0).wait(1).to({scaleX:0.3165,scaleY:0.3165,skewX:1.1875,x:73.45,y:183.9,alpha:0.0895},0).wait(1).to({scaleX:0.318,scaleY:0.318,skewX:1.1985,x:73.15,y:183.85,alpha:0.0809},0).wait(1).to({scaleX:0.3194,scaleY:0.3194,skewX:1.2093,x:72.95,y:183.75,alpha:0.0726},0).wait(1).to({scaleX:0.3208,scaleY:0.3208,skewX:1.2197,x:72.7,alpha:0.0646},0).wait(1).to({scaleX:0.3222,scaleY:0.3222,skewX:1.2297,x:72.4,y:183.65,alpha:0.0568},0).wait(1).to({scaleX:0.3235,scaleY:0.3235,skewX:1.2394,x:72.2,y:183.55,alpha:0.0493},0).wait(1).to({scaleX:0.3248,scaleY:0.3248,skewX:1.2486,x:71.95,alpha:0.0422},0).wait(1).to({scaleX:0.326,scaleY:0.3259,skewX:1.2573,x:71.75,y:183.45,alpha:0.0354},0).wait(1).to({scaleX:0.3271,scaleY:0.327,skewX:1.2656,x:71.55,y:183.4,alpha:0.0291},0).wait(1).to({scaleX:0.3281,scaleY:0.3281,skewX:1.2732,x:71.35,y:183.35,alpha:0.0231},0).wait(1).to({scaleX:0.3291,scaleY:0.329,skewX:1.2802,x:71.2,y:183.3,alpha:0.0177},0).wait(1).to({scaleX:0.3299,scaleY:0.3299,skewX:1.2865,x:71.05,alpha:0.0129},0).wait(1).to({scaleX:0.3307,scaleY:0.3306,skewX:1.2919,x:70.9,y:183.25,alpha:0.0086},0).wait(1).to({scaleX:0.3313,scaleY:0.3312,skewX:1.2965,x:70.8,y:183.2,alpha:0.0051},0).wait(1).to({scaleX:0.3317,scaleY:0.3317,skewX:1.3,x:70.65,alpha:0.0024},0).wait(1).to({scaleX:0.3321,scaleY:0.332,skewX:1.3023,x:70.6,y:183.15,alpha:0.0006},0).wait(1).to({regX:162.1,regY:92.9,scaleX:0.3322,scaleY:0.3321,skewX:1.3031,x:67.95,y:197.5,alpha:0},0).to({_off:true},1).wait(158));

	// Слой_17
	this.instance_1 = new lib.dust_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193.4,201.6,0.15,0.1531,0,0,0,115,98.6);
	this.instance_1.alpha = 0.0703;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({regX:115.3,regY:98.7,scaleX:0.1575,scaleY:0.1621,x:194.15,y:201.7,alpha:1},4).wait(1).to({regX:154.5,regY:50,scaleX:0.1576,scaleY:0.1623,x:200.3,y:193.75,alpha:0.9994},0).wait(1).to({scaleX:0.158,scaleY:0.1627,x:200.35,alpha:0.9976},0).wait(1).to({scaleX:0.1585,scaleY:0.1633,x:200.45,y:193.7,alpha:0.9949},0).wait(1).to({scaleX:0.1592,scaleY:0.1641,x:200.55,alpha:0.9914},0).wait(1).to({scaleX:0.16,scaleY:0.1651,x:200.6,y:193.65,alpha:0.9871},0).wait(1).to({scaleX:0.1609,scaleY:0.1662,x:200.75,y:193.6,alpha:0.9823},0).wait(1).to({scaleX:0.162,scaleY:0.1674,x:200.85,y:193.5,alpha:0.9769},0).wait(1).to({scaleX:0.1631,scaleY:0.1688,x:201.05,alpha:0.9709},0).wait(1).to({scaleX:0.1643,scaleY:0.1703,x:201.2,y:193.4,alpha:0.9646},0).wait(1).to({scaleX:0.1656,scaleY:0.1718,x:201.4,y:193.35,alpha:0.9578},0).wait(1).to({scaleX:0.167,scaleY:0.1734,x:201.55,y:193.25,alpha:0.9507},0).wait(1).to({scaleX:0.1685,scaleY:0.1752,x:201.75,y:193.2,alpha:0.9432},0).wait(1).to({scaleX:0.17,scaleY:0.1769,x:201.95,y:193.15,alpha:0.9354},0).wait(1).to({scaleX:0.1715,scaleY:0.1788,x:202.15,y:193.05,alpha:0.9274},0).wait(1).to({scaleX:0.1731,scaleY:0.1807,x:202.35,y:193,alpha:0.9191},0).wait(1).to({scaleX:0.1748,scaleY:0.1827,x:202.55,y:192.9,alpha:0.9105},0).wait(1).to({scaleX:0.1765,scaleY:0.1847,x:202.8,y:192.8,alpha:0.9017},0).wait(1).to({scaleX:0.1782,scaleY:0.1868,x:203.05,y:192.7,alpha:0.8927},0).wait(1).to({scaleX:0.18,scaleY:0.1889,x:203.25,y:192.6,alpha:0.8835},0).wait(1).to({scaleX:0.1818,scaleY:0.191,x:203.5,y:192.5,alpha:0.8741},0).wait(1).to({scaleX:0.1836,scaleY:0.1932,x:203.7,y:192.4,alpha:0.8646},0).wait(1).to({scaleX:0.1855,scaleY:0.1954,x:203.95,y:192.3,alpha:0.8549},0).wait(1).to({scaleX:0.1874,scaleY:0.1977,x:204.2,y:192.25,alpha:0.845},0).wait(1).to({scaleX:0.1893,scaleY:0.2,x:204.45,y:192.1,alpha:0.835},0).wait(1).to({scaleX:0.1913,scaleY:0.2023,x:204.75,y:192,alpha:0.8249},0).wait(1).to({scaleX:0.1932,scaleY:0.2047,x:205,y:191.9,alpha:0.8147},0).wait(1).to({scaleX:0.1952,scaleY:0.2071,x:205.25,y:191.8,alpha:0.8043},0).wait(1).to({scaleX:0.1972,scaleY:0.2095,x:205.5,y:191.65,alpha:0.7938},0).wait(1).to({scaleX:0.1993,scaleY:0.2119,x:205.8,y:191.6,alpha:0.7833},0).wait(1).to({scaleX:0.2013,scaleY:0.2143,x:206.05,y:191.45,alpha:0.7726},0).wait(1).to({scaleX:0.2034,scaleY:0.2168,x:206.35,y:191.4,alpha:0.7619},0).wait(1).to({scaleX:0.2055,scaleY:0.2193,x:206.6,y:191.25,alpha:0.751},0).wait(1).to({scaleX:0.2076,scaleY:0.2218,x:206.85,y:191.15,alpha:0.7401},0).wait(1).to({scaleX:0.2097,scaleY:0.2243,x:207.15,y:191,alpha:0.7291},0).wait(1).to({scaleX:0.2118,scaleY:0.2269,x:207.45,y:190.95,alpha:0.7181},0).wait(1).to({scaleX:0.214,scaleY:0.2294,x:207.7,y:190.8,alpha:0.7069},0).wait(1).to({scaleX:0.2161,scaleY:0.232,x:208,y:190.7,alpha:0.6957},0).wait(1).to({scaleX:0.2183,scaleY:0.2346,x:208.3,y:190.6,alpha:0.6845},0).wait(1).to({scaleX:0.2205,scaleY:0.2372,x:208.55,y:190.45,alpha:0.6732},0).wait(1).to({scaleX:0.2227,scaleY:0.2398,x:208.85,y:190.35,alpha:0.6619},0).wait(1).to({scaleX:0.2249,scaleY:0.2424,x:209.15,y:190.2,alpha:0.6505},0).wait(1).to({scaleX:0.2271,scaleY:0.245,x:209.45,y:190.15,alpha:0.6391},0).wait(1).to({scaleX:0.2293,scaleY:0.2476,x:209.7,y:190.05,alpha:0.6276},0).wait(1).to({scaleX:0.2315,scaleY:0.2503,x:210,y:189.9,alpha:0.6161},0).wait(1).to({scaleX:0.2337,scaleY:0.2529,x:210.25,y:189.8,alpha:0.6046},0).wait(1).to({scaleX:0.2359,scaleY:0.2556,x:210.55,y:189.7,alpha:0.593},0).wait(1).to({scaleX:0.2382,scaleY:0.2582,x:210.85,y:189.55,alpha:0.5815},0).wait(1).to({scaleX:0.2404,scaleY:0.2609,x:211.15,y:189.45,alpha:0.5699},0).wait(1).to({scaleX:0.2426,scaleY:0.2636,x:211.45,y:189.35,alpha:0.5582},0).wait(1).to({scaleX:0.2449,scaleY:0.2662,x:211.75,y:189.2,alpha:0.5466},0).wait(1).to({scaleX:0.2471,scaleY:0.2689,x:212.05,y:189.1,alpha:0.535},0).wait(1).to({scaleX:0.2494,scaleY:0.2716,x:212.35,y:189,alpha:0.5233},0).wait(1).to({scaleX:0.2516,scaleY:0.2743,x:212.6,y:188.8,alpha:0.5117},0).wait(1).to({scaleX:0.2539,scaleY:0.2769,x:212.9,y:188.7,alpha:0.5},0).wait(1).to({scaleX:0.2561,scaleY:0.2796,x:213.2,y:188.6,alpha:0.4883},0).wait(1).to({scaleX:0.2584,scaleY:0.2823,x:213.5,y:188.45,alpha:0.4767},0).wait(1).to({scaleX:0.2606,scaleY:0.285,x:213.8,y:188.35,alpha:0.465},0).wait(1).to({scaleX:0.2628,scaleY:0.2876,x:214.1,y:188.25,alpha:0.4534},0).wait(1).to({scaleX:0.2651,scaleY:0.2903,x:214.4,y:188.1,alpha:0.4418},0).wait(1).to({scaleX:0.2673,scaleY:0.293,x:214.7,y:188,alpha:0.4301},0).wait(1).to({scaleX:0.2696,scaleY:0.2956,x:214.95,y:187.9,alpha:0.4185},0).wait(1).to({scaleX:0.2718,scaleY:0.2983,x:215.25,y:187.75,alpha:0.407},0).wait(1).to({scaleX:0.274,scaleY:0.301,x:215.55,y:187.65,alpha:0.3954},0).wait(1).to({scaleX:0.2762,scaleY:0.3036,x:215.85,y:187.55,alpha:0.3839},0).wait(1).to({scaleX:0.2785,scaleY:0.3062,x:216.1,y:187.4,alpha:0.3724},0).wait(1).to({scaleX:0.2807,scaleY:0.3089,x:216.4,y:187.3,alpha:0.3609},0).wait(1).to({scaleX:0.2829,scaleY:0.3115,x:216.7,y:187.15,alpha:0.3495},0).wait(1).to({scaleX:0.2851,scaleY:0.3141,x:217,y:187.05,alpha:0.3381},0).wait(1).to({scaleX:0.2872,scaleY:0.3167,x:217.3,y:187,alpha:0.3268},0).wait(1).to({scaleX:0.2894,scaleY:0.3193,x:217.55,y:186.85,alpha:0.3155},0).wait(1).to({scaleX:0.2916,scaleY:0.3219,x:217.85,y:186.75,alpha:0.3043},0).wait(1).to({scaleX:0.2937,scaleY:0.3245,x:218.15,y:186.6,alpha:0.2931},0).wait(1).to({scaleX:0.2959,scaleY:0.327,x:218.4,y:186.5,alpha:0.2819},0).wait(1).to({scaleX:0.298,scaleY:0.3295,x:218.7,y:186.4,alpha:0.2709},0).wait(1).to({scaleX:0.3001,scaleY:0.3321,x:218.95,y:186.3,alpha:0.2599},0).wait(1).to({scaleX:0.3022,scaleY:0.3346,x:219.25,y:186.2,alpha:0.249},0).wait(1).to({scaleX:0.3043,scaleY:0.3371,x:219.5,y:186.05,alpha:0.2381},0).wait(1).to({scaleX:0.3064,scaleY:0.3395,x:219.8,y:186,alpha:0.2274},0).wait(1).to({scaleX:0.3085,scaleY:0.342,x:220.05,y:185.85,alpha:0.2167},0).wait(1).to({scaleX:0.3105,scaleY:0.3444,x:220.3,y:185.7,alpha:0.2062},0).wait(1).to({scaleX:0.3125,scaleY:0.3468,x:220.6,y:185.65,alpha:0.1957},0).wait(1).to({scaleX:0.3145,scaleY:0.3492,x:220.85,y:185.5,alpha:0.1853},0).wait(1).to({scaleX:0.3165,scaleY:0.3516,x:221.1,y:185.45,alpha:0.1751},0).wait(1).to({scaleX:0.3184,scaleY:0.3539,x:221.35,y:185.35,alpha:0.165},0).wait(1).to({scaleX:0.3204,scaleY:0.3562,x:221.6,y:185.2,alpha:0.155},0).wait(1).to({scaleX:0.3223,scaleY:0.3584,x:221.9,y:185.1,alpha:0.1451},0).wait(1).to({scaleX:0.3241,scaleY:0.3607,x:222.15,y:185.05,alpha:0.1354},0).wait(1).to({scaleX:0.326,scaleY:0.3629,x:222.35,y:184.95,alpha:0.1259},0).wait(1).to({scaleX:0.3278,scaleY:0.365,x:222.6,y:184.85,alpha:0.1165},0).wait(1).to({scaleX:0.3295,scaleY:0.3671,x:222.8,y:184.75,alpha:0.1073},0).wait(1).to({scaleX:0.3313,scaleY:0.3692,x:223.05,y:184.65,alpha:0.0983},0).wait(1).to({scaleX:0.333,scaleY:0.3712,x:223.3,y:184.55,alpha:0.0895},0).wait(1).to({scaleX:0.3346,scaleY:0.3732,x:223.5,y:184.45,alpha:0.0809},0).wait(1).to({scaleX:0.3362,scaleY:0.3751,x:223.7,y:184.4,alpha:0.0726},0).wait(1).to({scaleX:0.3378,scaleY:0.3769,x:223.9,y:184.3,alpha:0.0646},0).wait(1).to({scaleX:0.3393,scaleY:0.3787,x:224.1,y:184.25,alpha:0.0568},0).wait(1).to({scaleX:0.3407,scaleY:0.3804,x:224.3,y:184.15,alpha:0.0493},0).wait(1).to({scaleX:0.3421,scaleY:0.3821,x:224.45,y:184.1,alpha:0.0422},0).wait(1).to({scaleX:0.3434,scaleY:0.3836,x:224.65,y:184.05,alpha:0.0354},0).wait(1).to({scaleX:0.3446,scaleY:0.3851,x:224.8,y:183.95,alpha:0.0291},0).wait(1).to({scaleX:0.3458,scaleY:0.3864,x:224.9,y:183.85,alpha:0.0231},0).wait(1).to({scaleX:0.3468,scaleY:0.3877,x:225.1,alpha:0.0177},0).wait(1).to({scaleX:0.3477,scaleY:0.3888,x:225.2,y:183.8,alpha:0.0129},0).wait(1).to({scaleX:0.3486,scaleY:0.3898,x:225.3,y:183.75,alpha:0.0086},0).wait(1).to({scaleX:0.3492,scaleY:0.3906,x:225.4,alpha:0.0051},0).wait(1).to({scaleX:0.3498,scaleY:0.3912,x:225.5,y:183.65,alpha:0.0024},0).wait(1).to({scaleX:0.3501,scaleY:0.3916,y:183.7,alpha:0.0006},0).wait(1).to({regX:114.8,regY:98.3,scaleX:0.3502,scaleY:0.3918,x:211.8,y:202.75,alpha:0},0).to({_off:true},1).wait(182).to({_off:false,regX:115,regY:98.6,scaleX:0.15,scaleY:0.1531,x:193.4,y:201.6,alpha:0.0703},0).to({regX:115.3,regY:98.7,scaleX:0.1575,scaleY:0.1621,x:194.15,y:201.7,alpha:1},4).wait(1).to({regX:154.5,regY:50,scaleX:0.1576,scaleY:0.1623,x:200.3,y:193.75,alpha:0.9994},0).wait(1).to({scaleX:0.158,scaleY:0.1627,x:200.35,alpha:0.9976},0).wait(1).to({scaleX:0.1585,scaleY:0.1633,x:200.45,y:193.7,alpha:0.9949},0).wait(1).to({scaleX:0.1592,scaleY:0.1641,x:200.55,alpha:0.9914},0).wait(1).to({scaleX:0.16,scaleY:0.1651,x:200.6,y:193.65,alpha:0.9871},0).wait(1).to({scaleX:0.1609,scaleY:0.1662,x:200.75,y:193.6,alpha:0.9823},0).wait(1).to({scaleX:0.162,scaleY:0.1674,x:200.85,y:193.5,alpha:0.9769},0).wait(1).to({scaleX:0.1631,scaleY:0.1688,x:201.05,alpha:0.9709},0).wait(1).to({scaleX:0.1643,scaleY:0.1703,x:201.2,y:193.4,alpha:0.9646},0).wait(1).to({scaleX:0.1656,scaleY:0.1718,x:201.4,y:193.35,alpha:0.9578},0).wait(1).to({scaleX:0.167,scaleY:0.1734,x:201.55,y:193.25,alpha:0.9507},0).wait(1).to({scaleX:0.1685,scaleY:0.1752,x:201.75,y:193.2,alpha:0.9432},0).wait(1).to({scaleX:0.17,scaleY:0.1769,x:201.95,y:193.15,alpha:0.9354},0).wait(1).to({scaleX:0.1715,scaleY:0.1788,x:202.15,y:193.05,alpha:0.9274},0).wait(1).to({scaleX:0.1731,scaleY:0.1807,x:202.35,y:193,alpha:0.9191},0).wait(1).to({scaleX:0.1748,scaleY:0.1827,x:202.55,y:192.9,alpha:0.9105},0).wait(1).to({scaleX:0.1765,scaleY:0.1847,x:202.8,y:192.8,alpha:0.9017},0).wait(1).to({scaleX:0.1782,scaleY:0.1868,x:203.05,y:192.7,alpha:0.8927},0).wait(1).to({scaleX:0.18,scaleY:0.1889,x:203.25,y:192.6,alpha:0.8835},0).wait(1).to({scaleX:0.1818,scaleY:0.191,x:203.5,y:192.5,alpha:0.8741},0).wait(1).to({scaleX:0.1836,scaleY:0.1932,x:203.7,y:192.4,alpha:0.8646},0).wait(1).to({scaleX:0.1855,scaleY:0.1954,x:203.95,y:192.3,alpha:0.8549},0).wait(1).to({scaleX:0.1874,scaleY:0.1977,x:204.2,y:192.25,alpha:0.845},0).wait(1).to({scaleX:0.1893,scaleY:0.2,x:204.45,y:192.1,alpha:0.835},0).wait(1).to({scaleX:0.1913,scaleY:0.2023,x:204.75,y:192,alpha:0.8249},0).wait(1).to({scaleX:0.1932,scaleY:0.2047,x:205,y:191.9,alpha:0.8147},0).wait(1).to({scaleX:0.1952,scaleY:0.2071,x:205.25,y:191.8,alpha:0.8043},0).wait(1).to({scaleX:0.1972,scaleY:0.2095,x:205.5,y:191.65,alpha:0.7938},0).wait(1).to({scaleX:0.1993,scaleY:0.2119,x:205.8,y:191.6,alpha:0.7833},0).wait(1).to({scaleX:0.2013,scaleY:0.2143,x:206.05,y:191.45,alpha:0.7726},0).wait(1).to({scaleX:0.2034,scaleY:0.2168,x:206.35,y:191.4,alpha:0.7619},0).wait(1).to({scaleX:0.2055,scaleY:0.2193,x:206.6,y:191.25,alpha:0.751},0).wait(1).to({scaleX:0.2076,scaleY:0.2218,x:206.85,y:191.15,alpha:0.7401},0).wait(1).to({scaleX:0.2097,scaleY:0.2243,x:207.15,y:191,alpha:0.7291},0).wait(1).to({scaleX:0.2118,scaleY:0.2269,x:207.45,y:190.95,alpha:0.7181},0).wait(1).to({scaleX:0.214,scaleY:0.2294,x:207.7,y:190.8,alpha:0.7069},0).wait(1).to({scaleX:0.2161,scaleY:0.232,x:208,y:190.7,alpha:0.6957},0).wait(1).to({scaleX:0.2183,scaleY:0.2346,x:208.3,y:190.6,alpha:0.6845},0).wait(1).to({scaleX:0.2205,scaleY:0.2372,x:208.55,y:190.45,alpha:0.6732},0).wait(1).to({scaleX:0.2227,scaleY:0.2398,x:208.85,y:190.35,alpha:0.6619},0).wait(1).to({scaleX:0.2249,scaleY:0.2424,x:209.15,y:190.2,alpha:0.6505},0).wait(1).to({scaleX:0.2271,scaleY:0.245,x:209.45,y:190.15,alpha:0.6391},0).wait(1).to({scaleX:0.2293,scaleY:0.2476,x:209.7,y:190.05,alpha:0.6276},0).wait(1).to({scaleX:0.2315,scaleY:0.2503,x:210,y:189.9,alpha:0.6161},0).wait(1).to({scaleX:0.2337,scaleY:0.2529,x:210.25,y:189.8,alpha:0.6046},0).wait(1).to({scaleX:0.2359,scaleY:0.2556,x:210.55,y:189.7,alpha:0.593},0).wait(1).to({scaleX:0.2382,scaleY:0.2582,x:210.85,y:189.55,alpha:0.5815},0).wait(1).to({scaleX:0.2404,scaleY:0.2609,x:211.15,y:189.45,alpha:0.5699},0).wait(1).to({scaleX:0.2426,scaleY:0.2636,x:211.45,y:189.35,alpha:0.5582},0).wait(1).to({scaleX:0.2449,scaleY:0.2662,x:211.75,y:189.2,alpha:0.5466},0).wait(1).to({scaleX:0.2471,scaleY:0.2689,x:212.05,y:189.1,alpha:0.535},0).wait(1).to({scaleX:0.2494,scaleY:0.2716,x:212.35,y:189,alpha:0.5233},0).wait(1).to({scaleX:0.2516,scaleY:0.2743,x:212.6,y:188.8,alpha:0.5117},0).wait(1).to({scaleX:0.2539,scaleY:0.2769,x:212.9,y:188.7,alpha:0.5},0).wait(1).to({scaleX:0.2561,scaleY:0.2796,x:213.2,y:188.6,alpha:0.4883},0).wait(1).to({scaleX:0.2584,scaleY:0.2823,x:213.5,y:188.45,alpha:0.4767},0).wait(1).to({scaleX:0.2606,scaleY:0.285,x:213.8,y:188.35,alpha:0.465},0).wait(1).to({scaleX:0.2628,scaleY:0.2876,x:214.1,y:188.25,alpha:0.4534},0).wait(1).to({scaleX:0.2651,scaleY:0.2903,x:214.4,y:188.1,alpha:0.4418},0).wait(1).to({scaleX:0.2673,scaleY:0.293,x:214.7,y:188,alpha:0.4301},0).wait(1).to({scaleX:0.2696,scaleY:0.2956,x:214.95,y:187.9,alpha:0.4185},0).wait(1).to({scaleX:0.2718,scaleY:0.2983,x:215.25,y:187.75,alpha:0.407},0).wait(1).to({scaleX:0.274,scaleY:0.301,x:215.55,y:187.65,alpha:0.3954},0).wait(1).to({scaleX:0.2762,scaleY:0.3036,x:215.85,y:187.55,alpha:0.3839},0).wait(1).to({scaleX:0.2785,scaleY:0.3062,x:216.1,y:187.4,alpha:0.3724},0).wait(1).to({scaleX:0.2807,scaleY:0.3089,x:216.4,y:187.3,alpha:0.3609},0).wait(1).to({scaleX:0.2829,scaleY:0.3115,x:216.7,y:187.15,alpha:0.3495},0).wait(1).to({scaleX:0.2851,scaleY:0.3141,x:217,y:187.05,alpha:0.3381},0).wait(1).to({scaleX:0.2872,scaleY:0.3167,x:217.3,y:187,alpha:0.3268},0).wait(1).to({scaleX:0.2894,scaleY:0.3193,x:217.55,y:186.85,alpha:0.3155},0).wait(1).to({scaleX:0.2916,scaleY:0.3219,x:217.85,y:186.75,alpha:0.3043},0).wait(1).to({scaleX:0.2937,scaleY:0.3245,x:218.15,y:186.6,alpha:0.2931},0).wait(1).to({scaleX:0.2959,scaleY:0.327,x:218.4,y:186.5,alpha:0.2819},0).wait(1).to({scaleX:0.298,scaleY:0.3295,x:218.7,y:186.4,alpha:0.2709},0).wait(1).to({scaleX:0.3001,scaleY:0.3321,x:218.95,y:186.3,alpha:0.2599},0).wait(1).to({scaleX:0.3022,scaleY:0.3346,x:219.25,y:186.2,alpha:0.249},0).wait(1).to({scaleX:0.3043,scaleY:0.3371,x:219.5,y:186.05,alpha:0.2381},0).wait(1).to({scaleX:0.3064,scaleY:0.3395,x:219.8,y:186,alpha:0.2274},0).wait(1).to({scaleX:0.3085,scaleY:0.342,x:220.05,y:185.85,alpha:0.2167},0).wait(1).to({scaleX:0.3105,scaleY:0.3444,x:220.3,y:185.7,alpha:0.2062},0).wait(1).to({scaleX:0.3125,scaleY:0.3468,x:220.6,y:185.65,alpha:0.1957},0).wait(1).to({scaleX:0.3145,scaleY:0.3492,x:220.85,y:185.5,alpha:0.1853},0).wait(1).to({scaleX:0.3165,scaleY:0.3516,x:221.1,y:185.45,alpha:0.1751},0).wait(1).to({scaleX:0.3184,scaleY:0.3539,x:221.35,y:185.35,alpha:0.165},0).wait(1).to({scaleX:0.3204,scaleY:0.3562,x:221.6,y:185.2,alpha:0.155},0).wait(1).to({scaleX:0.3223,scaleY:0.3584,x:221.9,y:185.1,alpha:0.1451},0).wait(1).to({scaleX:0.3241,scaleY:0.3607,x:222.15,y:185.05,alpha:0.1354},0).wait(1).to({scaleX:0.326,scaleY:0.3629,x:222.35,y:184.95,alpha:0.1259},0).wait(1).to({scaleX:0.3278,scaleY:0.365,x:222.6,y:184.85,alpha:0.1165},0).wait(1).to({scaleX:0.3295,scaleY:0.3671,x:222.8,y:184.75,alpha:0.1073},0).wait(1).to({scaleX:0.3313,scaleY:0.3692,x:223.05,y:184.65,alpha:0.0983},0).wait(1).to({scaleX:0.333,scaleY:0.3712,x:223.3,y:184.55,alpha:0.0895},0).wait(1).to({scaleX:0.3346,scaleY:0.3732,x:223.5,y:184.45,alpha:0.0809},0).wait(1).to({scaleX:0.3362,scaleY:0.3751,x:223.7,y:184.4,alpha:0.0726},0).wait(1).to({scaleX:0.3378,scaleY:0.3769,x:223.9,y:184.3,alpha:0.0646},0).wait(1).to({scaleX:0.3393,scaleY:0.3787,x:224.1,y:184.25,alpha:0.0568},0).wait(1).to({scaleX:0.3407,scaleY:0.3804,x:224.3,y:184.15,alpha:0.0493},0).wait(1).to({scaleX:0.3421,scaleY:0.3821,x:224.45,y:184.1,alpha:0.0422},0).wait(1).to({scaleX:0.3434,scaleY:0.3836,x:224.65,y:184.05,alpha:0.0354},0).wait(1).to({scaleX:0.3446,scaleY:0.3851,x:224.8,y:183.95,alpha:0.0291},0).wait(1).to({scaleX:0.3458,scaleY:0.3864,x:224.9,y:183.85,alpha:0.0231},0).wait(1).to({scaleX:0.3468,scaleY:0.3877,x:225.1,alpha:0.0177},0).wait(1).to({scaleX:0.3477,scaleY:0.3888,x:225.2,y:183.8,alpha:0.0129},0).wait(1).to({scaleX:0.3486,scaleY:0.3898,x:225.3,y:183.75,alpha:0.0086},0).wait(1).to({scaleX:0.3492,scaleY:0.3906,x:225.4,alpha:0.0051},0).wait(1).to({scaleX:0.3498,scaleY:0.3912,x:225.5,y:183.65,alpha:0.0024},0).wait(1).to({scaleX:0.3501,scaleY:0.3916,y:183.7,alpha:0.0006},0).wait(1).to({regX:114.8,regY:98.3,scaleX:0.3502,scaleY:0.3918,x:211.8,y:202.75,alpha:0},0).to({_off:true},1).wait(182).to({_off:false,regX:115,regY:98.6,scaleX:0.15,scaleY:0.1531,x:193.4,y:201.6,alpha:0.0703},0).to({regX:115.3,regY:98.7,scaleX:0.1575,scaleY:0.1621,x:194.15,y:201.7,alpha:1},4).wait(1).to({regX:154.5,regY:50,scaleX:0.1576,scaleY:0.1623,x:200.3,y:193.75,alpha:0.9994},0).wait(1).to({scaleX:0.158,scaleY:0.1627,x:200.35,alpha:0.9976},0).wait(1).to({scaleX:0.1585,scaleY:0.1633,x:200.45,y:193.7,alpha:0.9949},0).wait(1).to({scaleX:0.1592,scaleY:0.1641,x:200.55,alpha:0.9914},0).wait(1).to({scaleX:0.16,scaleY:0.1651,x:200.6,y:193.65,alpha:0.9871},0).wait(1).to({scaleX:0.1609,scaleY:0.1662,x:200.75,y:193.6,alpha:0.9823},0).wait(1).to({scaleX:0.162,scaleY:0.1674,x:200.85,y:193.5,alpha:0.9769},0).wait(1).to({scaleX:0.1631,scaleY:0.1688,x:201.05,alpha:0.9709},0).wait(1).to({scaleX:0.1643,scaleY:0.1703,x:201.2,y:193.4,alpha:0.9646},0).wait(1).to({scaleX:0.1656,scaleY:0.1718,x:201.4,y:193.35,alpha:0.9578},0).wait(1).to({scaleX:0.167,scaleY:0.1734,x:201.55,y:193.25,alpha:0.9507},0).wait(1).to({scaleX:0.1685,scaleY:0.1752,x:201.75,y:193.2,alpha:0.9432},0).wait(1).to({scaleX:0.17,scaleY:0.1769,x:201.95,y:193.15,alpha:0.9354},0).wait(1).to({scaleX:0.1715,scaleY:0.1788,x:202.15,y:193.05,alpha:0.9274},0).wait(1).to({scaleX:0.1731,scaleY:0.1807,x:202.35,y:193,alpha:0.9191},0).wait(1).to({scaleX:0.1748,scaleY:0.1827,x:202.55,y:192.9,alpha:0.9105},0).wait(1).to({scaleX:0.1765,scaleY:0.1847,x:202.8,y:192.8,alpha:0.9017},0).wait(1).to({scaleX:0.1782,scaleY:0.1868,x:203.05,y:192.7,alpha:0.8927},0).wait(1).to({scaleX:0.18,scaleY:0.1889,x:203.25,y:192.6,alpha:0.8835},0).wait(1).to({scaleX:0.1818,scaleY:0.191,x:203.5,y:192.5,alpha:0.8741},0).wait(1).to({scaleX:0.1836,scaleY:0.1932,x:203.7,y:192.4,alpha:0.8646},0).wait(1).to({scaleX:0.1855,scaleY:0.1954,x:203.95,y:192.3,alpha:0.8549},0).wait(1).to({scaleX:0.1874,scaleY:0.1977,x:204.2,y:192.25,alpha:0.845},0).wait(1).to({scaleX:0.1893,scaleY:0.2,x:204.45,y:192.1,alpha:0.835},0).wait(1).to({scaleX:0.1913,scaleY:0.2023,x:204.75,y:192,alpha:0.8249},0).wait(1).to({scaleX:0.1932,scaleY:0.2047,x:205,y:191.9,alpha:0.8147},0).wait(1).to({scaleX:0.1952,scaleY:0.2071,x:205.25,y:191.8,alpha:0.8043},0).wait(1).to({scaleX:0.1972,scaleY:0.2095,x:205.5,y:191.65,alpha:0.7938},0).wait(1).to({scaleX:0.1993,scaleY:0.2119,x:205.8,y:191.6,alpha:0.7833},0).wait(1).to({scaleX:0.2013,scaleY:0.2143,x:206.05,y:191.45,alpha:0.7726},0).wait(1).to({scaleX:0.2034,scaleY:0.2168,x:206.35,y:191.4,alpha:0.7619},0).wait(1).to({scaleX:0.2055,scaleY:0.2193,x:206.6,y:191.25,alpha:0.751},0).wait(1).to({scaleX:0.2076,scaleY:0.2218,x:206.85,y:191.15,alpha:0.7401},0).wait(1).to({scaleX:0.2097,scaleY:0.2243,x:207.15,y:191,alpha:0.7291},0).wait(1).to({scaleX:0.2118,scaleY:0.2269,x:207.45,y:190.95,alpha:0.7181},0).wait(1).to({scaleX:0.214,scaleY:0.2294,x:207.7,y:190.8,alpha:0.7069},0).wait(1).to({scaleX:0.2161,scaleY:0.232,x:208,y:190.7,alpha:0.6957},0).wait(1).to({scaleX:0.2183,scaleY:0.2346,x:208.3,y:190.6,alpha:0.6845},0).wait(1).to({scaleX:0.2205,scaleY:0.2372,x:208.55,y:190.45,alpha:0.6732},0).wait(1).to({scaleX:0.2227,scaleY:0.2398,x:208.85,y:190.35,alpha:0.6619},0).wait(1).to({scaleX:0.2249,scaleY:0.2424,x:209.15,y:190.2,alpha:0.6505},0).wait(1).to({scaleX:0.2271,scaleY:0.245,x:209.45,y:190.15,alpha:0.6391},0).wait(1).to({scaleX:0.2293,scaleY:0.2476,x:209.7,y:190.05,alpha:0.6276},0).wait(1).to({scaleX:0.2315,scaleY:0.2503,x:210,y:189.9,alpha:0.6161},0).wait(1).to({scaleX:0.2337,scaleY:0.2529,x:210.25,y:189.8,alpha:0.6046},0).wait(1).to({scaleX:0.2359,scaleY:0.2556,x:210.55,y:189.7,alpha:0.593},0).wait(1).to({scaleX:0.2382,scaleY:0.2582,x:210.85,y:189.55,alpha:0.5815},0).wait(1).to({scaleX:0.2404,scaleY:0.2609,x:211.15,y:189.45,alpha:0.5699},0).wait(1).to({scaleX:0.2426,scaleY:0.2636,x:211.45,y:189.35,alpha:0.5582},0).wait(1).to({scaleX:0.2449,scaleY:0.2662,x:211.75,y:189.2,alpha:0.5466},0).wait(1).to({scaleX:0.2471,scaleY:0.2689,x:212.05,y:189.1,alpha:0.535},0).wait(1).to({scaleX:0.2494,scaleY:0.2716,x:212.35,y:189,alpha:0.5233},0).wait(1).to({scaleX:0.2516,scaleY:0.2743,x:212.6,y:188.8,alpha:0.5117},0).wait(1).to({scaleX:0.2539,scaleY:0.2769,x:212.9,y:188.7,alpha:0.5},0).wait(1).to({scaleX:0.2561,scaleY:0.2796,x:213.2,y:188.6,alpha:0.4883},0).wait(1).to({scaleX:0.2584,scaleY:0.2823,x:213.5,y:188.45,alpha:0.4767},0).wait(1).to({scaleX:0.2606,scaleY:0.285,x:213.8,y:188.35,alpha:0.465},0).wait(1).to({scaleX:0.2628,scaleY:0.2876,x:214.1,y:188.25,alpha:0.4534},0).wait(1).to({scaleX:0.2651,scaleY:0.2903,x:214.4,y:188.1,alpha:0.4418},0).wait(1).to({scaleX:0.2673,scaleY:0.293,x:214.7,y:188,alpha:0.4301},0).wait(1).to({scaleX:0.2696,scaleY:0.2956,x:214.95,y:187.9,alpha:0.4185},0).wait(1).to({scaleX:0.2718,scaleY:0.2983,x:215.25,y:187.75,alpha:0.407},0).wait(1).to({scaleX:0.274,scaleY:0.301,x:215.55,y:187.65,alpha:0.3954},0).wait(1).to({scaleX:0.2762,scaleY:0.3036,x:215.85,y:187.55,alpha:0.3839},0).wait(1).to({scaleX:0.2785,scaleY:0.3062,x:216.1,y:187.4,alpha:0.3724},0).wait(1).to({scaleX:0.2807,scaleY:0.3089,x:216.4,y:187.3,alpha:0.3609},0).wait(1).to({scaleX:0.2829,scaleY:0.3115,x:216.7,y:187.15,alpha:0.3495},0).wait(1).to({scaleX:0.2851,scaleY:0.3141,x:217,y:187.05,alpha:0.3381},0).wait(1).to({scaleX:0.2872,scaleY:0.3167,x:217.3,y:187,alpha:0.3268},0).wait(1).to({scaleX:0.2894,scaleY:0.3193,x:217.55,y:186.85,alpha:0.3155},0).wait(1).to({scaleX:0.2916,scaleY:0.3219,x:217.85,y:186.75,alpha:0.3043},0).wait(1).to({scaleX:0.2937,scaleY:0.3245,x:218.15,y:186.6,alpha:0.2931},0).wait(1).to({scaleX:0.2959,scaleY:0.327,x:218.4,y:186.5,alpha:0.2819},0).wait(1).to({scaleX:0.298,scaleY:0.3295,x:218.7,y:186.4,alpha:0.2709},0).wait(1).to({scaleX:0.3001,scaleY:0.3321,x:218.95,y:186.3,alpha:0.2599},0).wait(1).to({scaleX:0.3022,scaleY:0.3346,x:219.25,y:186.2,alpha:0.249},0).wait(1).to({scaleX:0.3043,scaleY:0.3371,x:219.5,y:186.05,alpha:0.2381},0).wait(1).to({scaleX:0.3064,scaleY:0.3395,x:219.8,y:186,alpha:0.2274},0).wait(1).to({scaleX:0.3085,scaleY:0.342,x:220.05,y:185.85,alpha:0.2167},0).wait(1).to({scaleX:0.3105,scaleY:0.3444,x:220.3,y:185.7,alpha:0.2062},0).wait(1).to({scaleX:0.3125,scaleY:0.3468,x:220.6,y:185.65,alpha:0.1957},0).wait(1).to({scaleX:0.3145,scaleY:0.3492,x:220.85,y:185.5,alpha:0.1853},0).wait(1).to({scaleX:0.3165,scaleY:0.3516,x:221.1,y:185.45,alpha:0.1751},0).wait(1).to({scaleX:0.3184,scaleY:0.3539,x:221.35,y:185.35,alpha:0.165},0).wait(1).to({scaleX:0.3204,scaleY:0.3562,x:221.6,y:185.2,alpha:0.155},0).wait(1).to({scaleX:0.3223,scaleY:0.3584,x:221.9,y:185.1,alpha:0.1451},0).wait(1).to({scaleX:0.3241,scaleY:0.3607,x:222.15,y:185.05,alpha:0.1354},0).wait(1).to({scaleX:0.326,scaleY:0.3629,x:222.35,y:184.95,alpha:0.1259},0).wait(1).to({scaleX:0.3278,scaleY:0.365,x:222.6,y:184.85,alpha:0.1165},0).wait(1).to({scaleX:0.3295,scaleY:0.3671,x:222.8,y:184.75,alpha:0.1073},0).wait(1).to({scaleX:0.3313,scaleY:0.3692,x:223.05,y:184.65,alpha:0.0983},0).wait(1).to({scaleX:0.333,scaleY:0.3712,x:223.3,y:184.55,alpha:0.0895},0).wait(1).to({scaleX:0.3346,scaleY:0.3732,x:223.5,y:184.45,alpha:0.0809},0).wait(1).to({scaleX:0.3362,scaleY:0.3751,x:223.7,y:184.4,alpha:0.0726},0).wait(1).to({scaleX:0.3378,scaleY:0.3769,x:223.9,y:184.3,alpha:0.0646},0).wait(1).to({scaleX:0.3393,scaleY:0.3787,x:224.1,y:184.25,alpha:0.0568},0).wait(1).to({scaleX:0.3407,scaleY:0.3804,x:224.3,y:184.15,alpha:0.0493},0).wait(1).to({scaleX:0.3421,scaleY:0.3821,x:224.45,y:184.1,alpha:0.0422},0).wait(1).to({scaleX:0.3434,scaleY:0.3836,x:224.65,y:184.05,alpha:0.0354},0).wait(1).to({scaleX:0.3446,scaleY:0.3851,x:224.8,y:183.95,alpha:0.0291},0).wait(1).to({scaleX:0.3458,scaleY:0.3864,x:224.9,y:183.85,alpha:0.0231},0).wait(1).to({scaleX:0.3468,scaleY:0.3877,x:225.1,alpha:0.0177},0).wait(1).to({scaleX:0.3477,scaleY:0.3888,x:225.2,y:183.8,alpha:0.0129},0).wait(1).to({scaleX:0.3486,scaleY:0.3898,x:225.3,y:183.75,alpha:0.0086},0).wait(1).to({scaleX:0.3492,scaleY:0.3906,x:225.4,alpha:0.0051},0).wait(1).to({scaleX:0.3498,scaleY:0.3912,x:225.5,y:183.65,alpha:0.0024},0).wait(1).to({scaleX:0.3501,scaleY:0.3916,y:183.7,alpha:0.0006},0).wait(1).to({regX:114.8,regY:98.3,scaleX:0.3502,scaleY:0.3918,x:211.8,y:202.75,alpha:0},0).to({_off:true},1).wait(158));

	// track.png
	this.instance_2 = new lib.trackcover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(177,-85,0.5,0.5,0,0,0,300,250);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:125},18,cjs.Ease.get(-1)).to({y:126.2},4,cjs.Ease.get(1)).to({y:124.6},3,cjs.Ease.get(-1)).to({_off:true},264).wait(6).to({_off:false,y:-85},0).to({y:125},18,cjs.Ease.get(-1)).to({y:126.2},4,cjs.Ease.get(1)).to({y:124.6},3,cjs.Ease.get(-1)).to({_off:true},264).wait(6).to({_off:false,y:-85},0).to({y:125},18,cjs.Ease.get(-1)).to({y:126.2},4,cjs.Ease.get(1)).to({y:124.6},3,cjs.Ease.get(-1)).wait(264));

	// wheels.png
	this.instance_3 = new lib.wheels_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(177,-85,0.5,0.5,0,0,0,300,250);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({y:125},18,cjs.Ease.get(-1)).to({_off:true},271).wait(6).to({_off:false,y:-85},0).to({y:125},18,cjs.Ease.get(-1)).to({_off:true},271).wait(6).to({_off:false,y:-85},0).to({y:125},18,cjs.Ease.get(-1)).wait(271));

	// track.png
	this.instance_4 = new lib.track_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(177,-85,0.5,0.5,0,0,0,300,250);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({y:125},18,cjs.Ease.get(-1)).to({y:126.2},4,cjs.Ease.get(1)).to({y:124.6},3,cjs.Ease.get(-1)).to({_off:true},264).wait(6).to({_off:false,y:-85},0).to({y:125},18,cjs.Ease.get(-1)).to({y:126.2},4,cjs.Ease.get(1)).to({y:124.6},3,cjs.Ease.get(-1)).to({_off:true},264).wait(6).to({_off:false,y:-85},0).to({y:125},18,cjs.Ease.get(-1)).to({y:126.2},4,cjs.Ease.get(1)).to({y:124.6},3,cjs.Ease.get(-1)).wait(264));

	// Слой_1
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,91.6,0.3504,0.35,0,0,0,0.3,0.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({y:31.6,alpha:0.9805},13,cjs.Ease.get(1)).wait(90).to({y:11.6,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(178).to({_off:false,y:91.6},0).to({y:31.6,alpha:0.9805},13,cjs.Ease.get(1)).wait(90).to({y:11.6,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(178).to({_off:false,y:91.6},0).to({y:31.6,alpha:0.9805},13,cjs.Ease.get(1)).wait(90).to({y:11.6,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// t1
	this.instance_6 = new lib.t1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.15,128.25,1.0317,1.0317,0,0,0,90.3,14.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).to({y:68.25,alpha:1},13,cjs.Ease.get(1)).wait(90).to({y:51.75,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(178).to({_off:false,y:128.25},0).to({y:68.25,alpha:1},13,cjs.Ease.get(1)).wait(90).to({y:51.75,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(178).to({_off:false,y:128.25},0).to({y:68.25,alpha:1},13,cjs.Ease.get(1)).wait(90).to({y:51.75,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(142));

	// t3
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,150.85,1.0317,1.0317,0,0,0,121.9,14.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41).to({_off:false},0).to({y:90.85,alpha:1},13,cjs.Ease.get(1)).wait(90).to({y:74.35,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(178).to({_off:false,y:150.85},0).to({y:90.85,alpha:1},13,cjs.Ease.get(1)).wait(90).to({y:74.35,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(178).to({_off:false,y:150.85},0).to({y:90.85,alpha:1},13,cjs.Ease.get(1)).wait(90).to({y:74.35,alpha:0},13,cjs.Ease.get(-1)).to({_off:true},1).wait(137));

	// t3
	this.instance_8 = new lib.t4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,141.85,1.0317,1.0317,0,0,0,121.9,14.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(154).to({_off:false},0).to({y:81.85,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:61.85},12,cjs.Ease.get(-1)).to({_off:true},1).wait(164).to({_off:false,y:141.85,alpha:0},0).to({y:81.85,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:61.85},12,cjs.Ease.get(-1)).to({_off:true},1).wait(164).to({_off:false,y:141.85,alpha:0},0).to({y:81.85,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:61.85},12,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// t1
	this.instance_9 = new lib.t5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.15,139.25,1.0317,1.0317,0,0,0,90.3,14.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(159).to({_off:false},0).to({y:79.25,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:59.25},12,cjs.Ease.get(-1)).to({_off:true},1).wait(164).to({_off:false,y:139.25,alpha:0},0).to({y:79.25,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:59.25},12,cjs.Ease.get(-1)).to({_off:true},1).wait(164).to({_off:false,y:139.25,alpha:0},0).to({y:79.25,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:59.25},12,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// t1
	this.instance_10 = new lib.t6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.15,159.25,1.0317,1.0317,0,0,0,90.3,14.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(164).to({_off:false},0).to({y:99.25,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:79.25},12,cjs.Ease.get(-1)).to({_off:true},1).wait(164).to({_off:false,y:159.25,alpha:0},0).to({y:99.25,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:79.25},12,cjs.Ease.get(-1)).to({_off:true},1).wait(164).to({_off:false,y:159.25,alpha:0},0).to({y:99.25,alpha:1},13,cjs.Ease.get(1)).wait(105).to({y:79.25},12,cjs.Ease.get(-1)).wait(1));

	// Слой_22
	this.instance_11 = new lib.btn();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,286.4,1,1,0,0,0,162.5,38.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(49).to({_off:false},0).to({y:220.9},13,cjs.Ease.get(1)).to({_off:true},233).wait(49).to({_off:false,y:286.4},0).to({y:220.9},13,cjs.Ease.get(1)).to({_off:true},233).wait(49).to({_off:false,y:286.4},0).to({y:220.9},13,cjs.Ease.get(1)).wait(233));

	// Слой_2
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-91,-183.2,-91,-126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_131.setTransform(150,125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90.8,-170.7,-90.8,-111.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_132.setTransform(150,125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90.7,-158.2,-90.7,-97).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_133.setTransform(150,125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90.6,-145.8,-90.6,-82.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_134.setTransform(150,125);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90.4,-133.3,-90.4,-67.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_135.setTransform(150,125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90.3,-120.8,-90.3,-52.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_136.setTransform(150,125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90.2,-108.3,-90.2,-37.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_137.setTransform(150,125);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-90,-95.9,-90,-23).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_138.setTransform(150,125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-89.9,-83.4,-89.9,-8.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_139.setTransform(150,125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-89.8,-70.9,-89.8,6.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_140.setTransform(150,125);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-89.6,-58.4,-89.6,21.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_141.setTransform(150,125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-89.5,-46,-89.5,36.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_142.setTransform(150,125);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-89.4,-33.5,-89.4,51).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_143.setTransform(150,125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["rgba(55,2,77,0.4)","rgba(55,2,77,0)"],[0,1],-89.2,-21.1,-89.2,65.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_144.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_131}]},39).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},243).to({state:[{t:this.shape_131}]},39).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},243).to({state:[{t:this.shape_131}]},39).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).wait(243));

	// shadow
	this.instance_12 = new lib.shadow_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(189.6,178,0.3522,0.3522,0,0,0,325.3,356.1);
	this.instance_12.alpha = 0.2188;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({regX:325.1,regY:355.9,scaleX:0.5,scaleY:0.5,x:189.55,y:177.95,alpha:1},18,cjs.Ease.get(-1)).wait(271).to({regX:325.3,regY:356.1,scaleX:0.3522,scaleY:0.3522,x:189.6,y:178,alpha:0.2188},0).wait(6).to({regX:325.1,regY:355.9,scaleX:0.5,scaleY:0.5,x:189.55,y:177.95,alpha:1},18,cjs.Ease.get(-1)).wait(271).to({regX:325.3,regY:356.1,scaleX:0.3522,scaleY:0.3522,x:189.6,y:178,alpha:0.2188},0).wait(6).to({regX:325.1,regY:355.9,scaleX:0.5,scaleY:0.5,x:189.55,y:177.95,alpha:1},18,cjs.Ease.get(-1)).wait(271));

	// bg
	this.instance_13 = new lib.bg_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(885));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138,31,175,294);
// library properties:
lib.properties = {
	id: 'DF16529FCF63B84299E99FB3096E7273',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/3_300x250_Adwords_Bushtracker_atlas_P_.png?1608033285116", id:"3_300x250_Adwords_Bushtracker_atlas_P_"},
		{src:"images/3_300x250_Adwords_Bushtracker_atlas_NP_.jpg?1608033285117", id:"3_300x250_Adwords_Bushtracker_atlas_NP_"}
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