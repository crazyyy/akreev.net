(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_GA_GoldBand_atlas_P_", frames: [[0,0,224,133]]},
		{name:"300x600_GA_GoldBand_atlas_NP_", frames: [[0,0,300,218]]}
];


// symbols:



(lib.goldbandvan = function() {
	this.initialize(ss["300x600_GA_GoldBand_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tree2 = function() {
	this.initialize(ss["300x600_GA_GoldBand_atlas_P_"]);
	this.gotoAndStop(0);
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


(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.227,0.471,0.757],-9.4,1.1,8.4,1.1).s().p("Ag+B6QgagyAAhIQAAhGAag0QAagyAkAAQAlAAAaAyQAaA0AABGQAABIgaAyQgaAzglAAQgkAAgagzg");
	this.shape.setTransform(189.45,141.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.227,0.471,0.757],-4.2,8.4,4.6,-7).s().p("Ag+B6QgagyAAhIQAAhGAag0QAagyAkAAQAlAAAaAyQAaA0AABGQAABIgaAyQgaAzglAAQgkAAgagzg");
	this.shape_1.setTransform(189.45,141.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.227,0.471,0.757],4.7,7.9,-4.1,-7.3).s().p("Ag+B6QgagyAAhIQAAhGAag0QAagyAkAAQAlAAAaAyQAaA0AABGQAABIgaAyQgaAzglAAQgkAAgagzg");
	this.shape_2.setTransform(189.45,141.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.227,0.471,0.757],-8.8,3.3,8.3,-1.3).s().p("Ag+B6QgagyAAhIQAAhGAag0QAagyAkAAQAlAAAaAyQAaA0AABGQAABIgaAyQgaAzglAAQgkAAgagzg");
	this.shape_3.setTransform(189.45,141.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.392)","rgba(255,255,255,0)"],[0.227,0.471,0.757],0.3,9.3,0.3,-8.4).s().p("Ag+B6QgagyAAhIQAAhGAag0QAagyAkAAQAlAAAaAyQAaA0AABGQAABIgaAyQgaAzglAAQgkAAgagzg");
	this.shape_4.setTransform(189.45,141.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.227,0.471,0.757],7.9,4.7,-7.3,-4.1).s().p("Ag+B6QgagyAAhIQAAhGAag0QAagyAkAAQAlAAAaAyQAaA0AABGQAABIgaAyQgaAzglAAQgkAAgagzg");
	this.shape_5.setTransform(189.45,141.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180.6,124.3,17.80000000000001,34.60000000000001);


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,133);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQApQgIgDgEgGQgEgGgBgJIARAAIABAGQACADADACQAEADAHAAIAIgBQADgBACgDIADgDIABgFQAAgDgDgDIgFgEIgKgCIgPgEQgHgCgEgFQgFgEAAgIQAAgIAEgFQAEgGAIgDQAHgDAIAAIALABIALAEQAFADACAFIACAGIAAAGIgPAAQAAgGgDgEQgDgCgDgBIgHgBIgDABIgFABQgDAAgDADQgBADAAAEQAAAEABABQACADADABIAFABIAQAEIAKAEIAGACQADADABAEIABAJQAAAGgDAGQgDAFgFADQgFADgGACIgLABQgJAAgHgCg");
	this.shape.setTransform(59.15,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMA7QgHgCgIgEQgHgEgGgHIgDgHIgDgJIgBgPIAAhGIAQAAIAABIQABAJABAFIAEAHQADAFAFADQAFACAFAAIAIABQALAAAHgDQAGgFADgFQADgGAAgFIABgJIAAhHIAQAAIAABIIgBAIIgCALQgCAGgFAGQgGAHgHADQgHAEgGABIgLABIgNgBg");
	this.shape_1.setTransform(48.8,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA7IAAgxIAAgHQAAgDgCgDQgBgEgEgCQgEgDgGAAQgFAAgEACIgGAEIgDAFQgCADgBAFIAAAJIAAArIgPAAIAAh0IAPAAIAAAvQAEgHAHgDQAHgEAIAAIAJABIAJAFQAFACADAGIABADIABAGIAAAJIAAAzg");
	this.shape_2.setTransform(33,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAxQgFgEAAgKIAAg1IgPAAIAAgMIAPAAIAAgRIAOgEIAAAVIASAAIAAAMIgSAAIAAAwIAAAEQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQACACAFAAIAFAAIADAAIAAALIgGABIgHAAIgCAAQgJAAgDgDg");
	this.shape_3.setTransform(25.225,12.0278);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA7IAAhRIAPAAIAABRgAgIgpIAAgQIARAAIAAAQg");
	this.shape_4.setTransform(20.3,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbA7IgbhjIgcBjIgSAAIghh1IARAAIAaBgIAchgIATAAIAaBhIAbhhIAQAAIgjB1g");
	this.shape_5.setTransform(10.025,11.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(0,0,65.2,23.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBrQgSgFgLgJQgMgJgGgOQgHgOgBgTIAAAAIA+AAIAAADIAAADIAAABIAAABIAAACIABABQABAEACADIAGAHQADADAGABQAFACAIAAQAHAAAGgCQAGgBAEgDQAFgEACgDQACgEAAgEIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBQgBgDgCgDIgHgHIgKgFIgOgEIAAAAIgBAAIgBAAIAAAAQgXgGgRgGQgQgGgIgFQgKgHgEgKQgFgLAAgNIAAgBIAAgBIAAgBIAAAAIAAgBQgBgPAGgMQAIgMANgJQANgIAQgEQARgEARAAQAbABARAFQARAFAIAKQAJAJAFAMQADAMAAAOIg8gBQAAgFgCgEQgBgEgEgDQgDgEgGgBQgGgCgFAAQgGAAgFACQgFABgDADIgFAGQgBADAAAEIAAAAIAAABIAAABIACAGIAEAGIAIAFIALACIAFABIAIACIAHABIAIACQAMADALAEQAMAFALAHQAKAFAGALQAEALAAAPQABATgIAOQgGAOgOAIQgOAIgQAEQgQAFgUAAQgWAAgSgFg");
	this.shape.setTransform(181.9,52.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBrIAAjVICjAAIAAAsIhmAAIAAAqIBfAAIAAArIhfAAIAAAqIBmAAIAAAqg");
	this.shape_1.setTransform(161.575,52.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBpQgVgHgNgPQgNgOgGgTQgHgTgBgYIAAgBIAAgCIAAgCIAAgBQAAgeAHgWQAIgVAPgNQAPgNATgHQATgGAYAAQAbAAATAFQATAFAMALQALAKAGANQAGANAAAPIg/AAQAAgGgDgFQgCgFgFgFQgFgEgHgCQgHgDgIAAQgNAAgIAFQgJAFgEAKQgDAKgCALQgCAMAAAMIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAABQABAPACAMQADALAEAJQAEAJAIAFQAIAEALAAQAJAAAHgCQAHgDAFgFQAEgFACgGQADgFAAgHIA/AAIAAAFIgBAFIgBAEIgBAFQgDALgHAJQgGAKgLAJQgLAIgQAEQgRAFgWAAQgcAAgWgHg");
	this.shape_2.setTransform(140.2234,52.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2BrIgOgnIhTAAIgOAnIg/AAIBWjVIBHAAIBUDVgAgdAXIA0AAIgYhVg");
	this.shape_3.setTransform(115.875,52.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNBrIAAjVIA9AAIAACpIBeAAIAAAsg");
	this.shape_4.setTransform(95.325,52.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhcBrIAAjVIBnAAQAXAAAPAFQAQAEAJAIQAKAJAFANQAEAMAAARQAAARgEAMQgFAMgKAIQgJAHgLAFQgKAFgLABIgFABIgFABIgFAAIgEAAIgugBIAABNgAgggLIAcAAQAIABAGgCQAHgCAEgEQAEgEADgFQACgFAAgGQAAgHgDgFQgDgFgFgDQgGgDgHgBQgGgCgJAAIgXgBg");
	this.shape_5.setTransform(75.65,52.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBoQgVgHgQgPQgQgOgIgUQgIgUAAgaIAAgFIABgFIAAgDIAAgEIABgDIABgDQACgRAIgPQAIgPANgPQANgOAWgHQAVgHAdAAQATAAAQADQAQAEAOAGQAOAHAIAOQAIAOADAWIg9gBQgCgGgDgFQgDgFgFgDQgEgDgFgCQgFgCgGAAIgBAAIgBgBIAAAAIgBAAIgBAAIgBAAIgBAAIgBAAQgNAAgKAGQgKAFgFALQgGALgDANQgDAMAAAMIAAACIAAABIAAACIAAABQAAAOAEAMQAEALAIAIQAIAJALAFQAKAEAOAAIAHAAIAIgBIAIgCIAIgCIAAgjIgqAAIAAgsIBnAAIAAByIgNADIgQADIgQACIgRACIgLABIgKAAIgKAAIgKABQgYAAgVgIg");
	this.shape_6.setTransform(220.025,22.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVBrIhHigIAACgIg2AAIAAjVIBUAAIBHCdIAAidIA2AAIAADVg");
	this.shape_7.setTransform(195.875,22.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBrIAAjVIA7AAIAADVg");
	this.shape_8.setTransform(178.6,22.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBoQgXgIgLgQQgMgQgGgSQgHgSgBgTIAAgBIAAgBIgBAAIAAgBIAAgCIAAgCIAAAAQABgVAGgTQAFgUALgSQALgRAWgJQAYgJAiAAIABAAIABAAIAAAAIABAAIAAAAIABAAIABAAIABAAQAUABARAGQARAGARALQAQALAIAWQAIAWAAAgIAAAJIgBAJIAAAFIgBAFIgBAFIgBAEQgDAPgIAMQgIANgLAMQgLALgSAGQgTAGgZAAQghAAgWgIgAgVg/QgJAFgGALQgFALgDAMQgDAMgBAMIAAAAQAAANADAMQADAMAGALQAHALAKAGQAKAFAMAAQAKAAAKgEQAIgFAGgJQAGgIADgNQADgNABgSQAAgNgEgMQgCgNgHgKQgFgKgJgGQgKgFgNAAQgMAAgJAGg");
	this.shape_9.setTransform(161.35,22.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBoQgVgHgQgPQgQgOgIgUQgIgUAAgaIAAgFIABgFIAAgDIAAgEIABgDIABgDQACgRAIgPQAIgPANgPQANgOAWgHQAVgHAdAAQATAAAQADQAQAEAOAGQAOAHAIAOQAIAOADAWIg9gBQgCgGgDgFQgDgFgFgDQgEgDgFgCQgFgCgGAAIgBAAIgBgBIAAAAIgBAAIgBAAIgBAAIgBAAIgBAAQgNAAgKAGQgKAFgFALQgGALgDANQgDAMAAAMIAAACIAAABIAAACIAAABQAAAOAEAMQAEALAIAIQAIAJALAFQAKAEAOAAIAHAAIAIgBIAIgCIAIgCIAAgjIgqAAIAAgsIBnAAIAAByIgNADIgQADIgQACIgRACIgLABIgKAAIgKAAIgKABQgYAAgVgIg");
	this.shape_10.setTransform(136.025,22.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRBrIAAjVICjAAIAAAsIhmAAIAAAqIBfAAIAAArIhfAAIAAAqIBmAAIAAAqg");
	this.shape_11.setTransform(104.725,22.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBrIgCgFIgBgHIgBgIIAAgJIAAAAIAAgBIgBgBIAAgBIAAgBIAAgCIgCgRIgEgPQgCgHgGgDQgFgEgIAAIgcgBIAABSIg8AAIAAjVIBeAAIACAAIABAAIABAAIACAAQAPABAOADQAOACAMAGQANAFAGAMQAGALAAAQQAAANgDAKQgEAKgIAGQgHAGgJADQgJADgLACQAQABAKAFQAKAFADAKQAEAKADALQACALABAMIAAABIAAAAIAAABIABAAIABAKIABAKIACAJIACAIgAgggPIAYAAIABAAIABAAIACAAIABAAIAKgBIAJgEQAFgCACgFQADgEAAgHQAAgGgDgEQgCgFgFgDQgEgDgGgBIgMgBIgagBg");
	this.shape_12.setTransform(84.225,22.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAoIAShPIA5AAIgjBPg");
	this.shape_13.setTransform(68.7,15.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhRBrIAAjVICjAAIAAAsIhmAAIAAAqIBfAAIAAArIhfAAIAAAqIBmAAIAAAqg");
	this.shape_14.setTransform(53.725,22.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnBrIglibIgmCbIhIAAIgmjVIA/AAIATCYIAjiYIBHAAIAfCYIAUiYIA2AAIgjDVg");
	this.shape_15.setTransform(28.75,22.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDD001").s().p("AgugWIBSAAIAKAug");
	this.shape_16.setTransform(4.65,19.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,236.3,72.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECB00").s().p("AggB/IAAg3IBBAAIAAA3gAgaA0IgMiyIBNAAIgLCyg");
	this.shape.setTransform(181.775,63.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FECB00").s().p("AguB/QgVgGgOgKQgOgMgHgQQgIgRgBgVIAAgBIBIAAIAAADIABAEIAAABIAAACIABACIAAABQABAFACAEIAHAHQAFAEAGACQAHABAJAAQAIAAAIgBQAGgCAFgEQAFgDADgFQADgEAAgFIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAgBQgBgEgDgDIgIgIQgFgEgIgCQgHgDgIgCIAAAAIgCAAIAAAAIgBAAQgcgGgTgIQgTgHgKgHQgLgIgGgMQgFgMgBgQIAAgCIAAAAIAAgBIAAAAIAAgBIAAAAQAAgTAHgOQAJgOAPgKQAQgJATgFQATgFAVAAQAgABAVAGQAUAGAKALQAKALAFAOQAFAOAAARIhIgBQAAgGgCgFQgCgEgEgEQgFgEgGgCQgGgCgHAAQgHAAgHACQgFABgEAEQgEADgBAEQgCAEAAAEIAAABIAAABIAAAAIAAABIADAHQACAEADADQAEADAGACQAFACAHABIAHACIAIABIAJACIAJACQAOADAOAGQANAFANAIQANAHAGANQAGANAAARQAAAXgIARQgIAQgQAKQgQAKgUAFQgTAEgYAAQgaAAgVgFg");
	this.shape_1.setTransform(161.15,63.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FECB00").s().p("AgzB8QgWgHgQgPQgQgOgJgTQgIgSAAgWIAAifIBIAAIAACUQAAAOADALQADALAFAIQAGAJAJAEQAKAEAOAAQAOAAALgEQAKgEAFgJQAFgJADgLQADgMAAgOIAAiSIBIAAIAACcQAAAXgHATQgIATgOAPQgPAPgYAHQgXAHggAAQgcAAgXgHg");
	this.shape_2.setTransform(134.05,63.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FECB00").s().p("AArB/IAAhmIhVAAIAABmIhIAAIAAj9IBIAAIAABmIBVAAIAAhmIBIAAIAAD9g");
	this.shape_3.setTransform(93.925,63.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FECB00").s().p("AghB/IAAjJIhRAAIAAg0IDlAAIAAA0IhQAAIAADJg");
	this.shape_4.setTransform(68.425,63.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FECB00").s().p("AgjB/IAAj9IBHAAIAAD9g");
	this.shape_5.setTransform(50.85,63.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FECB00").s().p("AAvB/Igsi4IguC4IhWAAIgsj9IBKAAIAXC1IApi1IBVAAIAkC1IAYi1IBAAAIgpD9g");
	this.shape_6.setTransform(27.375,63.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhgB/IAAj9IDBAAIAAA0Ih5AAIAAAyIBxAAIAAA0IhxAAIAAAxIB5AAIAAAyg");
	this.shape_7.setTransform(184.925,25.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhB/IgCgHIgBgIIgBgJIgBgKIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCQgBgKgCgJQgBgKgDgIQgDgJgHgEQgGgEgJAAIgigBIAABhIhIAAIAAj9IBxAAIABABIACAAIABAAIADAAQARAAAQADQARAEAPAGQAPAHAHANQAIAOAAATQAAAQgEALQgFALgJAHQgJAIgLADQgLAFgMACQASAAANAHQALAGAFAMQAEAMADANQADANACAOIAAABIAAAAIAAABIAAABIABALIABALIACAMIAEAJgAgmgTIAcAAIABACIACAAIACAAIABAAIAMgDIAMgDQAFgEADgFQADgFAAgJQAAgHgDgFQgDgFgGgEIgNgEQgGgCgHAAIgfgBg");
	this.shape_8.setTransform(160.65,25.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhgB/IAAj9IDBAAIAAA0Ih5AAIAAAyIBxAAIAAA0IhxAAIAAAxIB5AAIAAAyg");
	this.shape_9.setTransform(135.975,25.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArB/IAAhmIhVAAIAABmIhIAAIAAj9IBIAAIAABmIBVAAIAAhmIBIAAIAAD9g");
	this.shape_10.setTransform(110.425,25.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghB/IAAjJIhRAAIAAg0IDlAAIAAA0IhQAAIAADJg");
	this.shape_11.setTransform(84.925,25.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8B7QgbgJgNgTQgOgTgIgVQgHgVgCgXIAAgBIAAgBIgBgBIAAgBIAAgCIAAgCIAAgBQABgYAHgXQAHgYANgVQAMgUAbgLQAcgKAoAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAQAXABAUAHQAWAHATANQATANAJAbQAKAaAAAlIAAALIgBALIgBAFIgBAGIgBAGIgBAGQgEAQgJAQQgJAPgNANQgOAOgVAHQgWAGgeAAQgnAAgbgJgAgZhLQgLAGgGAOQgHANgDAOQgEAOgBAOIAAAAQAAAQAEAOQAEAOAHANQAHANAMAHQALAGAPAAQANAAALgFQAKgFAHgLQAHgKAEgPQADgQAAgVQAAgPgDgPQgDgOgHgNQgHgMgLgGQgLgHgQAAQgOAAgLAHg");
	this.shape_12.setTransform(46.825,25.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAHCEQgdAAgYgIQgZgJgTgRQgTgSgJgXQgKgYABgeIAAgGIAAgHIAAgDIAAgEIABgEIABgDQADgUAKgTQAIgSAQgRQAPgQAagJQAZgIAjAAQAWAAATAEQAUADAQAIQAQAIAKARQAJAQADAbIhHgBQgCgIgDgGQgEgGgGgDQgFgEgGgCIgNgDIgBAAIgBAAIgBAAIgBAAIgBAAIgBgBIgBAAIgCAAQgPAAgMAHQgMAGgGAOQgGANgEAOQgEAPAAAPIAAACIAAABIAAACIAAABQAAARAEAOQAFANAKAKQAKALAMAFQANAFAQAAIAJAAIAIgBIAKgCIAKgCIAAgqIgyAAIAAg0IB5AAIAACGIgOAEIgTAEIgTACIgVACIgMABIgMABIgNAAIgLAAg");
	this.shape_13.setTransform(16.8,25.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,199.5,86.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("AADB+IgBAAIgCAAIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgIAAIgJgBIgEAAIgFgBIgFAAIgEgBQgKgDgJgEQgKgFgIgGQgJgGgEgKQgEgKAAgNIBDAAQAAAEABADQABAEADADIAIAFQAEACAIABQAMAAAIgFQAIgEACgIIADgTIABgVIAAgBIAAgCIAAgBIAAgCIAAgBQgDAHgFAFQgFAEgGAEIgOAFIgMADIgDAAIgDAAIgDAAIgDAAQgRAAgPgGQgOgGgLgNQgMgNgFgPQgGgPAAgTQAAgTAGgPQAFgQAMgNQALgNAOgGQAPgHARAAQAMAAAJACQAIACAHADQAHAEAFAGQAFAGAEAIIAAgFIABgFIAAgEIABgEIAAgCIABgDIAAgBIAAgBIBDgBIAACdQAAAVgGAQQgGAPgMAKQgMAKgMAGQgNAGgOADIgDAAIgDAAIgDABIgDAAIgGAAIgGABIgCAAgAgEhVIgDABIgEACQgEACgDAEQgEADgDAGQgDAFgBAIQgCAIAAAKQAAALADAJQACAJAFAGQAEAFAGADQAGADAGAAQAKAAAGgDQAHgEADgFQAEgHACgJQABgJAAgMIAAgBIAAAAIAAgCIAAgBIAAgBIAAAAIAAgBQgBgIgCgHQgCgHgEgGQgFgGgFgDQgGgEgIAAIgCAAIgDABg");
	this.shape.setTransform(139.475,107.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AAeBbIAAhrQAAgIgCgGQgCgGgEgFQgEgEgFgCQgEgCgGAAIAAAAIgBAAQgEAAgFACQgEACgEAEQgEAFgDAFQgCAGAAAHIAABtIhFAAIAAiMIAAgDIAAgEIAAgDIAAgDIgBgHIgBgGIAAgFIgBgEIAAgCIAAgBIAAgBIBGAAIAAACIAAABIABACIAAADIAAADIAAADIABAFIAAADIAAAAIAAABIAJgKQAGgEAHgEQAFgEAHgBQAIgCAJAAIAHABIAHAAIAHACIAIABQAIADAHAEQAHAEAGAGQAGAGADAIQAEAJAAAMIAAB9g");
	this.shape_1.setTransform(116.05,104.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AghB/IAAizIBEAAIAACzgAghhSIAAgsIBEAAIAAAsg");
	this.shape_2.setTransform(98.75,100.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("AAABeQgXAAgSgHQgTgGgOgNQgOgOgHgRQgIgRAAgVIAAgBQABgRAGgQQAGgPALgOQAKgPAUgHQAUgHAdAAQAWAAATAGQASAFAPALQAPALAHAQQAIARAAAXQAAAWgGARQgGAQgMAMQgMALgMAHQgNAHgOACIgIACIgIABIgHABIgGAAgAgPgyQgGADgEAHQgEAGgCAJQgCAKAAALQAAAOACALQADAKAEAIQAFAHAGAEQAGADAHAAQAHAAAFgDQAGgDADgFIAGgNIADgNIABgFIABgFIAAgCIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCQAAgIgCgIQgCgIgEgHQgDgHgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_3.setTransform(81.025,104.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AADB+IgBAAIgCAAIAAAAIgBAAIAAgBIgBAAIgBAAIAAAAIgIAAIgJgBIgEAAIgFgBIgFAAIgEgBQgKgDgJgEQgKgFgIgGQgJgGgEgKQgEgKAAgNIBDAAQAAAEABADQABAEADADIAIAFQAEACAIABQAMAAAIgFQAIgEACgIIADgTIABgVIAAgBIAAgCIAAgBIAAgCIAAgBQgDAHgFAFQgFAEgGAEIgOAFIgMADIgDAAIgDAAIgDAAIgDAAQgRAAgPgGQgOgGgLgNQgMgNgFgPQgGgPAAgTQAAgTAGgPQAFgQAMgNQALgNAOgGQAPgHARAAQAMAAAJACQAIACAHADQAHAEAFAGQAFAGAEAIIAAgFIABgFIAAgEIABgEIAAgCIABgDIAAgBIAAgBIBDgBIAACdQAAAVgGAQQgGAPgMAKQgMAKgMAGQgNAGgOADIgDAAIgDAAIgDABIgDAAIgGAAIgGABIgCAAgAgEhVIgDABIgEACQgEACgDAEQgEADgDAGQgDAFgBAIQgCAIAAAKQAAALADAJQACAJAFAGQAEAFAGADQAGADAGAAQAKAAAGgDQAHgEADgFQAEgHACgJQABgJAAgMIAAgBIAAAAIAAgCIAAgBIAAgBIAAAAIAAgBQgBgIgCgHQgCgHgEgGQgFgGgFgDQgGgEgIAAIgCAAIgDABg");
	this.shape_4.setTransform(57.225,107.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("AguBZQgQgEgHgJQgJgJgDgLQgEgMAAgNIAAgBIBAAAIAAADIAAABIAAACIAAABIAEAHIAEAGQADADADABQADACAEAAIAHgBIAHgEIAFgFIABgGIAAgBIAAAAIAAgBIAAAAIAAgBQgBgCgBgCIgFgFIgIgEIgJgEQgPgDgNgFIgagKQgMgFgHgKQgHgKgBgOIAAgDIAAgDIABgDIABgDQACgIAGgIQAGgHAKgHQAJgHAPgDQAOgEATAAQATAAANADQAOADAJAFQAJAGAFAGQAGAGADAGIACAHIABAGIABAGIABAFIhBgBIgBgHIgEgGQgDgDgEgBQgCgCgEAAQgDAAgDACIgGACIgEAEIgBAFIAAAAIAAABIAAAAIAAABIACAEIADADIAGADIAIADIAEABIADABIADAAIACABIABAAIACABQAPADAMAFIAXAJQAKAFAGAKQAFALAAAPQAAAQgGALQgGALgMAHQgMAHgRADQgQADgVAAQgZAAgRgFg");
	this.shape_5.setTransform(24.4,104.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("AghB/IAAizIBEAAIAACzgAghhSIAAgsIBEAAIAAAsg");
	this.shape_6.setTransform(8.75,100.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AgtBZQgRgEgIgJQgHgJgEgLQgEgMAAgNIAAgBIBAAAIAAADIAAABIAAACIABABIADAHIAEAGQACADAEABQADACAEAAIAIgBIAGgEIAEgFIACgGIAAgBIAAAAIAAgBIAAAAIAAgBQAAgCgCgCIgFgFIgIgEIgKgEQgOgDgOgFIgZgKQgNgFgGgKQgHgKgBgOIAAgDIABgDIAAgDIABgDQACgIAGgIQAGgHAJgHQAKgHAOgDQAPgEAUAAQARAAAOADQAOADAJAFQAIAGAHAGQAGAGACAGIACAHIACAGIAAAGIAAAFIg/gBIgBgHIgFgGQgCgDgEgBQgEgCgCAAQgEAAgDACIgGACIgEAEIgBAFIAAAAIAAABIAAAAIAAABIACAEIADADIAGADIAIADIADABIAFABIABAAIACABIADAAIACABQAOADAMAFIAWAJQAMAFAEAKQAGALAAAPQAAAQgGALQgGALgMAHQgMAHgRADQgQADgWAAQgYAAgQgFg");
	this.shape_7.setTransform(251.6,67.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AgtBZQgRgEgHgJQgJgJgDgLQgEgMAAgNIAAgBIBAAAIAAADIAAABIAAACIAAABIAEAHIAEAGQADADADABQAEACADAAIAIgBIAGgEIAFgFIABgGIAAgBIAAAAIAAgBIAAAAIAAgBQgBgCgBgCIgFgFIgIgEIgKgEQgOgDgOgFIgZgKQgNgFgGgKQgHgKgBgOIAAgDIAAgDIABgDIABgDQACgIAGgIQAGgHAJgHQAKgHAPgDQAOgEATAAQATAAANADQAOADAJAFQAJAGAFAGQAGAGADAGIACAHIACAGIAAAGIABAFIhAgBIgCgHIgEgGQgCgDgFgBQgCgCgEAAQgDAAgDACIgGACIgEAEIgBAFIAAAAIAAABIAAAAIAAABIACAEIADADIAGADIAIADIADABIAFABIACAAIABABIACAAIACABQAPADAMAFIAXAJQAKAFAGAKQAFALAAAPQAAAQgGALQgGALgMAHQgMAHgRADQgQADgWAAQgZAAgPgFg");
	this.shape_8.setTransform(231.95,67.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1E1E").s().p("AgpBYQgTgFgLgMQgMgLgGgSQgGgSAAgYQABgUAFgRQAHgSAMgMQANgNASgGQAQgHAXAAQAbAAASAIQAUAJAKAQQAKAQAFAUQAFATABAWIh/gBIAAAFIAAAEIABAEIABAFIADAIIAFAHQADAEAGABQAEACAIAAIAAAAIABAAIABAAIAAAAIABAAIABAAIAJgDIAIgFQAEgDACgEQACgEAAgGIAAgBIA/AAQgBAQgIAMQgGAMgNAIQgMAIgPAEQgQAEgUAAQgYAAgSgGgAgMg2QgGADgEAGQgEAFgCAGQgDAGAAAHIA8AAQAAgIgDgHQgCgGgEgFQgFgEgFgDQgGgCgEAAQgHAAgFACg");
	this.shape_9.setTransform(211.1,67.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1E1E").s().p("AAeBbIAAhrQAAgIgCgGQgCgGgEgEQgEgFgFgCQgEgBgGAAIAAAAIgBAAQgEAAgFABQgEACgEAFQgEAEgDAGQgCAFAAAHIAABtIhFAAIAAiMIAAgEIAAgDIAAgDIAAgEIgBgGIgBgGIAAgFIgBgEIAAgCIAAgBIAAgBIBGAAIAAACIAAABIAAACIABADIAAADIAAADIABAFIAAADIAAAAIAAABIAJgKQAGgEAHgEQAFgDAHgCQAJgCAJAAIAGAAIAHABIAHACIAIACQAIACAHAEQAHAEAGAGQAGAGADAIQAEAJAAALIAAB+g");
	this.shape_10.setTransform(188.5,66.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1E1E").s().p("AghB/IAAizIBEAAIAACzgAghhSIAAgsIBEAAIAAAsg");
	this.shape_11.setTransform(171.2,63.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1E1E").s().p("AgtBZQgRgEgIgJQgIgJgDgLQgEgMAAgNIAAgBIBAAAIAAADIAAABIAAACIAAABIAEAHIAEAGQACADAEABQAEACADAAIAIgBIAGgEIAFgFIABgGIAAgBIAAAAIAAgBIAAAAIAAgBQAAgCgCgCIgFgFIgIgEIgKgEQgOgDgOgFIgZgKQgNgFgGgKQgHgKgBgOIAAgDIAAgDIABgDIABgDQACgIAGgIQAGgHAJgHQAKgHAPgDQAOgEAUAAQARAAAOADQAPADAIAFQAJAGAFAGQAHAGACAGIACAHIACAGIAAAGIABAFIhAgBIgBgHIgFgGQgDgDgEgBQgCgCgDAAQgEAAgDACIgGACIgEAEIgBAFIAAAAIAAABIAAAAIAAABIACAEIADADIAGADIAIADIADABIAFABIACAAIABABIACAAIADABQAOADAMAFIAWAJQALAFAGAKQAFALAAAPQAAAQgGALQgGALgMAHQgMAHgRADQgQADgWAAQgZAAgPgFg");
	this.shape_12.setTransform(155.55,67.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1E1E").s().p("Ag5BXQgNgFgIgKQgIgKgEgLQgEgMAAgNIAAh0IBFAAIAABlIAAACIAAABIAAACIAAABIACALIAEAKQADAFAEACQAEADAFAAQAIAAAGgDQAGgDADgGQADgHACgHQABgHAAgJIAAhgIBDAAIAACGIAAAFIAAAEIAAACIAAACIAAADIAAACIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIABAGIAAAFIAAACIAAABIAAABIhCAAIAAAAIAAgBIgBgCIAAgCIgBgDIAAgDIgBgEIAAgEIgJAKIgLAIQgFADgIACQgIABgKAAQgTAAgNgEg");
	this.shape_13.setTransform(133.825,67.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1E1E").s().p("AACCAQgHgCgGgEIgLgJIgIgJIgBAAIAAgBIAAAAIAAAAIAAABIAAABIAAACIAAADIgBAHIgBAHIAAAAIgBAAIhCAAIAAj9IBFAAIAABeIANgKQAGgEAHgDQAGgCAIgBQAIgCAJAAIAEABIAFAAIAEABIAEAAQALADAKAHQAKAGAJALQAJAKAEAPQAFAOAAAUQAAAbgGATQgGATgNAMQgMALgOAFQgOAGgPAAQgKAAgJgCgAgQgLQgGAEgDAHQgDAHgBAJIgCARIAAABIAAAEIAAAEIABAFIAAAFQABAHACAGIAFANQADAFAGADQAFADAIAAQAIAAAGgEQAGgEADgIIAEgSQACgKAAgLIgBgTIgEgPQgDgIgGgEQgGgDgJAAQgKAAgGAEg");
	this.shape_14.setTransform(110.575,63.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E1E1E").s().p("Ag/BbIAAiHIAAgHIAAgGIAAgCIAAgBIAAgCIAAgCIAAgCIgBgEIgBgFIAAgJIAAgBIBEAAIAAABIAAACIABAEIAAADIABAEIAAAFIAAADIAAAEIAAACIAAADQADgKAGgHQAFgHAIgEQAIgEAKgCQAKgCALAAIAAA6IgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIgCAAIgCAAQgKAAgIACQgIADgHAFQgHAFgDAIQgEAIAAAKIAABSg");
	this.shape_15.setTransform(79.975,66.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E1E1E").s().p("Ag5BXQgNgFgIgKQgIgKgEgLQgEgMAAgNIAAh0IBFAAIAABlIAAACIAAABIAAACIAAABIACALIAEAKQADAFAEACQAEADAFAAQAIAAAGgDQAGgDADgGQADgHACgHQABgHAAgJIAAhgIBDAAIAACGIAAAFIAAAEIAAACIAAACIAAADIAAACIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIABAGIAAAFIAAACIAAABIAAABIhCAAIAAAAIAAgBIgBgCIAAgCIgBgDIAAgDIgBgEIAAgEIgJAKIgLAIQgFADgIACQgIABgKAAQgTAAgNgEg");
	this.shape_16.setTransform(59.575,67.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E1E1E").s().p("AAABeQgXAAgSgHQgTgGgOgNQgOgOgHgRQgIgRAAgVIAAgBQABgRAGgQQAGgPALgOQAKgPAUgHQAUgHAdAAQAWAAATAGQASAFAPALQAPALAHAQQAIARAAAXQAAAWgGARQgGAQgMAMQgMALgMAHQgNAHgOACIgIACIgIABIgHABIgGAAgAgPgyQgGADgEAHQgEAGgCAJQgCAKAAALQAAAOACALQADAKAEAIQAFAHAGAEQAGADAHAAQAHAAAFgDQAGgDADgFIAGgNIADgNIABgFIABgFIAAgCIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCQAAgIgCgIQgCgIgEgHQgDgHgGgEQgHgEgIAAQgIAAgHAEg");
	this.shape_17.setTransform(36.075,67.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E1E1E").s().p("Ag2B6IAZhAIhLizIBLAAIAgB3IAnh3IA/AAIhhDzg");
	this.shape_18.setTransform(13.3,70.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E1E1E").s().p("Ag/BbIAAiGIAAgIIAAgGIAAgCIAAgBIAAgCIAAgCIAAgCIgBgEIgBgGIAAgIIAAgBIBEAAIAAABIAAACIABAEIAAACIABAFIAAAFIAAADIAAAEIAAACIAAAEQADgLAGgHQAFgHAIgEQAIgEAKgCQAKgCALAAIAAA6IgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIgCAAIgCAAQgKgBgIADQgIACgHAGQgHAFgDAIQgEAJAAAJIAABSg");
	this.shape_19.setTransform(171.725,29.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E1E1E").s().p("AgpBYQgSgFgMgMQgMgLgGgSQgGgSABgYQAAgUAFgRQAHgSAMgMQANgNASgGQAQgHAWAAQAcAAASAIQAUAJAKAQQAKAQAFAUQAGATAAAWIh/gBIAAAFIAAAEIABAEIABAFIADAIIAFAHQADAEAGABQAEACAHAAIABAAIABAAIABAAIAAAAIACAAIAAAAIAJgDIAIgFQAEgDACgEQACgEAAgGIAAgBIA/AAQgBAQgIAMQgGAMgNAIQgMAIgPAEQgQAEgUAAQgYAAgSgGgAgMg2QgGADgEAGQgEAFgCAGQgDAGAAAHIA8AAQAAgIgDgHQgCgGgEgFQgEgEgGgDQgGgCgFAAQgGAAgFACg");
	this.shape_20.setTransform(152.25,29.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1E1E").s().p("AghBYIhGivIBLAAIAgB4IAkh4IBAAAIhDCvg");
	this.shape_21.setTransform(130.675,29.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E1E1E").s().p("AgpBYQgSgFgMgMQgMgLgGgSQgGgSABgYQAAgUAFgRQAHgSAMgMQAOgNARgGQAQgHAWAAQAcAAASAIQAUAJAKAQQAKAQAFAUQAGATAAAWIh/gBIAAAFIAAAEIABAEIABAFIADAIIAFAHQAEAEAFABQAFACAGAAIABAAIABAAIABAAIABAAIABAAIAAAAIAJgDIAIgFQAEgDACgEQACgEAAgGIAAgBIBAAAQgDAQgGAMQgIAMgMAIQgLAIgQAEQgQAEgUAAQgXAAgTgGgAgMg2QgFADgFAGQgEAFgDAGQgCAGAAAHIA8AAQAAgIgDgHQgCgGgEgFQgFgEgFgDQgGgCgFAAQgGAAgFACg");
	this.shape_22.setTransform(109.15,29.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E1E1E").s().p("Ag/BbIAAiGIAAgIIAAgGIAAgCIAAgBIAAgCIAAgCIAAgCIgBgEIgBgGIAAgIIAAgBIBEAAIAAABIAAACIABAEIAAACIABAFIAAAFIAAADIAAAEIAAACIAAAEQADgLAGgHQAFgHAIgEQAIgEAKgCQAKgCALAAIAAA6IgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIgCAAIgCAAQgKgBgIADQgIACgHAGQgHAFgDAIQgEAJAAAJIAABSg");
	this.shape_23.setTransform(91.575,29.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E1E1E").s().p("AgpBYQgTgFgLgMQgMgLgGgSQgGgSAAgYQABgUAFgRQAHgSAMgMQANgNASgGQAQgHAXAAQAbAAASAIQAUAJAKAQQAKAQAFAUQAFATABAWIh/gBIAAAFIAAAEIABAEIABAFIADAIIAFAHQADAEAGABQAEACAIAAIAAAAIABAAIABAAIAAAAIABAAIABAAIAJgDIAIgFQAEgDACgEQACgEAAgGIAAgBIA/AAQgBAQgIAMQgGAMgNAIQgMAIgPAEQgQAEgUAAQgYAAgSgGgAgMg2QgGADgEAGQgEAFgCAGQgDAGAAAHIA8AAQAAgIgDgHQgCgGgEgFQgFgEgFgDQgGgCgEAAQgHAAgFACg");
	this.shape_24.setTransform(72.05,29.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E1E1E").s().p("AAaB/IAAhvQAAgGgCgGQgBgEgDgFQgEgEgFgCQgFgCgGAAQgHAAgFADQgFAEgDAEIgEAMQgBAGAAAHIAABoIhFAAIAAj9IBFAAIAABeQAEgGAGgEQAGgFAHgDQAHgDAIgCQAIgBAIgBQAQAAAMAFQAMAEAJAIQAJAIAEAOQAEANAAARIAABzg");
	this.shape_25.setTransform(49.625,25.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E1E1E").s().p("AAvB/Igsi5IguC5IhWAAIgsj9IBKAAIAXC1IApi1IBVAAIAkC1IAYi1IBAAAIgpD9g");
	this.shape_26.setTransform(20.225,25.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.4,123.9);


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBhIAAjBIBLAAIAADBg");
	this.shape.setTransform(63.175,33.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACKBhIgcg7IgeA7IiaAAIgHggIg4AAIgHAgIhKAAIA+jBIBjAAIA9DAIA+hhIg6hfIBQAAIAZA3IAbg3IBMAAIg7BfIA+BigAiBAeIBHgMIgjAAIgPhHIAAAAg");
	this.shape_1.setTransform(36.675,33.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBgIgHgfIg3AAIgHAfIhJAAIA9i/IBiAAIA+C/gAgVAfIBFgNIgjAAIgOhHIAAAAg");
	this.shape_2.setTransform(116.325,10.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBhIAAiMIgwAAIAAg1ICqAAIAAA1IgvAAIAACMg");
	this.shape_3.setTransform(8.55,33.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaAlIBJAAQAAAJAEAGQAFAFAJAAQAIABAGgFQAEgFAAgGQAAgKgNgDIg1gQQgngMAAgmQgBgfAXgQQAYgQApAAQBUAAAAA7IhEAAQAAgQgRAAQgRAAAAAMQAAAIANAEIAcAIQAUAEAMAGQAjAPAAAjQAAAhgaARQgYARgqgBQhZAAAAhAg");
	this.shape_4.setTransform(77.8,33.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGBgIgoh0IgBAAIAAB0Ig+AAIAAi/IBcAAIAoBzIAAAAIAAhzIA/AAIAAC/g");
	this.shape_5.setTransform(137.9,10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhaBgIAAi/IByAAQA+AAAAAyQAAAhglAIIAAABQAVADALANQAKALAAARQAAAagTAOQgUAPgjAAgAgSA3IALAAQANAAAGgFQAGgEAAgLQAAgRgaAAIgKAAgAgSgSIAKAAQAWAAAAgTQAAgRgWAAIgKAAg");
	this.shape_6.setTransform(96.375,10.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIBgIAAi/IBLAAIAACMIBGAAIAAAzg");
	this.shape_7.setTransform(51.025,10.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhfBgIAAi/IBaAAQBlAAAABhQAAAsgaAZQgaAZgsAAgAgUA1IAHAAQAQAAAHgNQAHgKAAgeQAAgdgHgKQgHgNgQAAIgHAAg");
	this.shape_8.setTransform(69.475,10.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJBJQgagbAAguQAAgtAagbQAcgcAzAAQBaAAABBAIhIAAQAAgIgFgEQgFgEgIAAQgPAAgHAOQgEAKAAAgQAAAdAFAIQAGAMAOAAQANAAAIgEIAAgOIAzgKIhDAAIAAABIgKAAIAAglIBjAAIAABkQgyAMguAAQgyAAgbgcg");
	this.shape_9.setTransform(10.525,10.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBJQgZgaAAgvQAAgtAZgbQAZgcAwAAQAxAAAZAcQAaAbAAAtQAAAvgaAaQgZAcgxAAQgwAAgZgcgAgOgpQgFAMAAAdQAAAfAFALQAFAJAJAAQALAAAEgJQAFgLAAgfQAAgdgFgMQgEgJgLAAQgJAAgFAJg");
	this.shape_10.setTransform(31.95,10.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhfBgIAAi/IBaAAQBlAAAABhQAAAsgaAZQgaAZgsAAgAgUA1IAHAAQAQAAAHgNQAHgKAAgeQAAgdgHgKQgHgNgQAAIgHAAg");
	this.shape_11.setTransform(159.825,10.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDD001").s().p("AlcgHIgSguILfAAIrhBrg");
	this.shape_12.setTransform(128.45,28.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(0,0,169.5,43.2), null);


(lib.ic6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AhMDbIg4gYQgFgCgCgFQgCgEACgFIBWjjQgVgeAAgjQAAgsAgggQAggfArAAQAtAAAgAfQAfAgAAAsQAAApgbAeQgaAfgoAFQgEAOgwBhIg4BtQgDAHgIAAIgFgCgAhgC3IATAIQBQieARglIgHgDQgMgCgLgFgAhvCxIAEABQBOixAHgTIgNgHQgUAvg4CbgAgwhxQAAApAgAZIASAJIABAAIAQAGIAOACQAYAAAUgNQAUgMAKgVIgEAAQgoAAglgQQgogSgcghQgGAPAAAPgAgmiWQAcAhAnASQAmAQArgBIADgIIgMABQgkgBghgPQgogRgagigAgdikQAZAhAnARQAfAOAjABIANgBIABgNQAAghgYgZQgYgYgiAAQglAAgZAfg");
	this.shape.setTransform(14.125,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAbQgugUgbgjQADgHAGgHQAaAlAsASQArAUAtgHQAAAGgEALIgQAAQglAAglgQg");
	this.shape_1.setTransform(17.95,9.684);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/C3IArh1QAsh0ACAEIAPAJQgSgNgJgUQgLgTAAgYQAAgmAcgcQAcgcAmAAQAoAAAbAcQAcAcAAAmQAAAogcAcQgbAbgoABIgRgCQANAFAIACQAHgDhzDfg");
	this.shape_2.setTransform(14.125,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BoIAohtQAmhtABADQAIAGAUAJQAEgDhcDTg");
	this.shape_3.setTransform(7.1832,29.521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic6, new cjs.Rectangle(0,0,28.3,44.2), null);


(lib.ic5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12100B").s().p("AjdBRQgOAAgJgJQgKgKAAgNQAAgNAIgJQAJgKANgBQgYgPAAgcQAAgWAQgQQAQgPAWAAQAVAAAPAOQAPANACAVIFgAAQATACANANQAMANAAAQIAABFgAjmAxQAAAIAJAAIHEAAIAAgtQAAgJgHgEQgGgFgJgCIlGAAIAAAwIhoAAQgJAAAAAJgAijAQIAWAAIAAgkQgCAWgUAOgAjXgvQgIAIAAAMQAAAMAIAJQAJAHAMAAQAMAAAJgHQAIgJAAgMQAAgMgIgIQgJgJgMAAQgMAAgJAJg");
	this.shape.setTransform(33.175,11.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#12100B").s().p("ADfCvIAAhGIm9AAIAABGIhGAAIAAk6QAAgOAKgLQAKgKAPAAQAOAAAKAKQALALAAAOIAACwIIDAAIAACKgAD3BQIAABHIAWAAIAAhaIoEAAIAAjIQAAgFgDgDQgDgDgEAAQgFAAgDAEQgDADAAAEIAAEiIAVAAIAAhHg");
	this.shape_1.setTransform(29.325,17.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjeAtQgIAAgGgGQgGgGAAgIQAAgJAGgGQAGgGAIAAIBdAAIAAgwIFSAAQAPACAJAJQAJAJABANIAAA4g");
	this.shape_2.setTransform(33.2,14.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAeQgNgNABgRQgBgQANgNQAMgMAQABQARgBANAMQAMANgBAQQABARgMANQgNAMgRgBQgQABgMgMg");
	this.shape_3.setTransform(13.65,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADrCjIAAhHInVAAIAABHIguAAIAAkuQAAgKAGgGQAHgHAKAAQAJAAAHAHQAHAHAAAJIAAC8IIDAAIAAByg");
	this.shape_4.setTransform(29.325,17.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic5, new cjs.Rectangle(0,0,58.7,35.1), null);


(lib.ic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgDBAIgCgBQgJgIgEgGQgGgJAAgMQAAgMAGgJQAEgFAJgHIAJgKQADgEAAgHQAAgGgDgFQgDgDgGgHIgCgCQgDgCgBgEQABgEACgCQACgDAEAAQADgBADADIACACQAJAIADAFQAHAJAAAMQAAAMgHAJQgDAFgJAIIgIAJQgEAFAAAGQAAAHAEAEIAIAKIABABQAHAGgGAHQgDADgEAAQgCAAgCgCg");
	this.shape.setTransform(16.35,6.5458);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgEBAIgBgBQgJgIgEgGQgGgJAAgMQAAgMAGgJQAEgGAJgGIAJgKQADgFAAgGQAAgGgDgFIgJgKIgCgCQgDgCAAgEQAAgEACgCQACgDAEgBQADAAADADIACACQATAQAAASQAAASgTAPIgJAKQgDAFAAAGQAAAGADAFIAJAKIABABQAHAGgGAHQgCADgFAAQgDAAgCgCg");
	this.shape_1.setTransform(18.075,14.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AiOCWQg2gQAAgdQAAgcA0gRQAFgBAGACQgagcgOgkQgOgnAAgrQAAgTACgOQAAgmB4gIIABAAQAGAAAEAEQAEAFAAAFQABAGgEAFQgFAFgFAAQg+ADgaANQANAGAcAEQAkAGAuAAQAsAAAlgGQAbgEAOgGQgegNg9gDQgFAAgEgFQgEgFAAgGQAAgGAFgEQAEgEAFAAIABAAQBbAFAXAXQAHAEAAAGIACAIIAAACIACAYIABAAQAbAAATAUQAUATAAAbQAAAbgUATQgTATgbAAQgRAAgQgIQgHAMgNAQQAEgBADABQA3ARAAAdQAAAdg2AQQgvAPhCAAQhEAAgvgPgAh+BRQgDAGgGABQgPAFgJAGQgHAEAAACQABAIAgAKQAqAMBAAAQA/AAAqgMQAfgKACgIQgBgCgHgEQgJgGgRgFQgGgCgDgFQgDgFABgFQgqAng0AAQg2AAgrgoQABAHgCAEgAiehVQAABFAmAwQAmAxA2AAQA0AAAmgxQAmgwAAhFIAAgFQgMAGgTADQgrAJg2AAQg3AAgrgJQgTgDgNgGgABwAEQAJAGAKAAQAPAAALgKQAKgLAAgPQAAgPgKgKQgLgLgPAAIgCAAQgEAlgNAdg");
	this.shape_2.setTransform(19.675,32.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjCaQhJAAgogRQgggNABgSQAAgMAcgQQAOgHANgGIgHgKQBFBQhBhQQgogzgFhAIADg4QBUgyBoARQA0AJAkASIAIAxIAIABQAXABAKAIQAGAFAOAWQALASgSAVQgPAUgVAGQgOAEgQgGIgMgHIgTAtIATALQAUAPAKAPQALAUgsAOQgtAOhJAAIgFAAg");
	this.shape_3.setTransform(19.8108,32.8757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic4, new cjs.Rectangle(0,0,39.4,49.5), null);


(lib.ic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhbB7QgtgGgEgUIgBgEIAAh3IhcgsQgFgCgDgFQgCgFABgGQABgMAOgCIETgbIAJACICsBRQALAGgCAMQgCANgNABIgCAAIAABgIAVAaQACADgBACQgBADgEAAIgqAAQgEAAgBgDQgBgDACgCIAPgTQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIgBgDIAAhhIhKAHIAABjIgBAEQgFAUgsAGQgnAHgyAAQgyAAgngHgADkBqIgMgOIgBADIgJALIAWAAgAhrBVQAdALBMAAQBLAAAegLIAAhXIicAOIgBAAIgIgCIgtgUgAijhKIBwA1ICvgRIhngNQgEACgKAAQgVAAAAgJQAAgIAVAAQATAAACAGIB8APIhpgyg");
	this.shape.setTransform(24.3679,12.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoBrIgGiBIhig3IEIgfICZBUIhCAOIgHB3g");
	this.shape_1.setTransform(23.175,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic3, new cjs.Rectangle(0,0,48.7,26), null);


(lib.ic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ABEDGQgEgEAEgDIABgCQADgCAEACQADAEgDAEIgCABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgABUC1QgDgDADgDIAFgFQADgDADADQAEAEgEADIgEAEQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgABiCnQgDgDADgDIARgRQADgEADAEQAEAEgEADIgQAQQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAgAgeCWIgogoQgJADgGAAQgMAAgHgIQgJgJAAgOQAAgFACgIIgmgmQgEgFAAgFQAAgGAEgEIAWgWQAGgGAJACIAqAOQAPgVAQgRIgWgWIhNg/QgFgEAAgHQgBgGAFgEIAqgqQAHgGAIADICJA1QAegaARgLQAkgYAXAAQARAAALAKQAKAKAAARQAAAYgYAkQgMARgZAeIA1CJQADAIgHAHIgpAqQgEAEgHAAQgFAAgFgGIg/hMIgXgXIglAeIANAsQADAJgGAFIgWAXQgEAFgGgBQgGAAgEgEgAgiAvQAEAEgEADIgbAbIAEACIAlAlIAHgGIgOgvQgEgKAJgFQAagUAYgUQAcgWAYgZIACgCIAgghIAAgBQAWgXAQgXQAUgegBgOQAAgEgCgDQgDgCgFAAQgOgBgdAUQgYAQgaAZQgHAGgIgDIiJg1IgYAYIBCA2IAgAgQAEAEAAAGQAAAFgEAFQgbAegRAWQgGAJgJgEIgsgNIgGAHIAiAiQAGAGgDAJIgDAMQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAEAAADgDIAigiIADgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAgABZgeIgCACQgPAPgZAVIADACIAgAgIABABIA2BBIAYgYIg0iHgAjFhCQgDgEADgDIACgCQADgDADADQAEADgEAEIgBACQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAgAi1hTQgDgEADgDIAFgFQADgDAEADQADAEgDADIgFAFIgDACQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAgAimhiQgEgDAEgDIAQgQQADgEAEAEQADADgDADIgRAQQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgACeiKQgDgBgBgEIAAgBQAAgEgDgDQgCgCgFAAQgFAAAAgFQAAgEAFAAIAAAAQAIAAAGAFQAFAFAAAIQAAAEgEACg");
	this.shape.setTransform(19.9625,19.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVB4IgqAAIgBghIgfgxIARgMIArAMIAsgyIhbhmIAjgjICQAxIBDgxIAmgKIAWAOIgWA8IgnAzIAyCUIgpAlIhZhoIg8ArIAOA6IgXAMg");
	this.shape_1.setTransform(22.625,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic2, new cjs.Rectangle(0,0,39.9,39.9), null);


(lib.ic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ABbCnQgOgOAAgUIABgJIheAAIABAJQAAAUgOAOQgOAOgUAAQgUAAgOgOQgOgOAAgUIABgLQgHgEgBgIIgWjhIgdghIgYAAQgGAAgFgEQgEgFAAgHQAAgGAEgFQAFgFAGAAIAfAAQAHAAAFAGIAgAkIE3AAQAHAAAFAFQAFAGgBAHIgLBvIAAACIgBACIgEAoQgBALgLADIgBAAIgBAAIkNAZIACASQALgHAOAAQAOAAALAHICKAAQALgHAOAAQAOAAALAHIAUAAQAHAAAFAFQAEAFAAAGQAAAGgEAFQgEAEgGABIABAJQAAAUgOAOQgOAOgUAAQgUAAgOgOgAByB6QgFAEAAAHQAAAHAFAEQAFAFAGAAQAHAAAFgFQAEgEAAgHQAAgHgEgEQgFgFgHAAQgGAAgFAFgAhKB6QgFAEAAAHQAAAHAFAEQAFAFAGAAQAHAAAFgFQAEgEAAgHQAAgHgEgEQgFgFgHAAQgGAAgFAFgAhdAqIAvgEIgCgoIgxAAgAgjAlIA/gGIAAghIhCAAgAAnAeIBBgGIACgaIhDAAgABzAXIAwgEIACgVIgxAAgAB1gNIAxAAIAFguIgzAAgAAngNIBDAAIADguIhGAAgAgmgNIBCAAIAAguIhFAAgAgxgNIgDguIgzAAIAFAuIAxAAgAB7hfIgCAaIAzAAIADglIkaAAIADAlIAzAAIgCgaIALAAIACAaIBGAAIAAgaIALAAIAAAaIBHAAIACgag");
	this.shape.setTransform(20.9083,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AichdIE5ADIgRCXIkVAhg");
	this.shape_1.setTransform(24.15,14.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ic1, new cjs.Rectangle(0,0,41.8,36.2), null);


(lib.fari2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnsAmQgPgPAAgXQAAgVAPgQQAQgPAWAAQAWAAAQAPQAPAQAAAVQAAAXgPAPQgQAQgWAAQgWAAgQgQgAnfgaQgKAKAAAOQAAANAKAKQAJAKAOAAQAOAAAKgKQALgKgBgNQABgOgLgKQgKgKgOAAQgOAAgJAKgAHUAUQgHgNAAgRQAAgSAHgMQAHgNAKAAQAJAAAIANQAGAMABASQgBARgGANQgIAMgJAAQgKAAgHgMgAHaggQgFAIAAAMQAAAKAFAIQAEAIAGAAQAGAAAFgIQAEgIAAgKQAAgMgEgIQgFgIgGAAQgGAAgEAIg");
	this.shape.setTransform(120.2,66.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8E9FF").s().p("AmTBfQg4gChagOQgUgDABg3QACg8Afg3IBJALQBOAOAZATQAbAUAAAfQAAAMgLAvQgGAcgJAFQgGACgVAAIgSAAgAnLgYQgPAQAAAVQAAAWAPAPQAQAQAWAAQAWAAAQgQQAQgPAAgWQAAgVgQgQQgQgQgWAAQgWAAgQAQgAHXBPQgBgtABgVQACgaAHgTQARgrA0AAQAYAAgGAwIgDAxQgCAdgFADQgOAIgSAHQgcALgRAAIgJgBgAH1gcQgGANAAAQQAAASAGANQAHAMAKAAQAKAAAHgMQAHgNAAgSQAAgQgHgNQgHgNgKAAQgKAAgHANgAm+AhQgKgKAAgOQAAgNAKgKQAKgKAOAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgOAAgKgKgAH7ASQgFgIAAgKQAAgMAFgIQAEgIAGAAQAHAAAEAIQAEAIAAAMQAAAKgEAIQgEAIgHAAQgGAAgEgIg");
	this.shape_1.setTransform(116.8548,65.7455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(184,233,255,0.247)","rgba(184,233,255,0)"],[0.039,0.647],0,0,0,0,0,24.3).s().p("AilCnQhFhFgBhiQABhgBFhFQBFhFBggBQBiABBFBFQBEBFAABgQAABihEBFQhFBEhiAAQhgAAhFhEg");
	this.shape_2.setTransform(73.85,67.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(184,233,255,0.247)","rgba(184,233,255,0)"],[0.039,0.647],0,0,0,0,0,24.3).s().p("AimCmQhFhEAAhiQAAhhBFhFQBGhEBgAAQBhAABFBEQBGBFAABhQAABihGBEQhFBFhhAAQhgAAhGhFg");
	this.shape_3.setTransform(170.1,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fari2_1, new cjs.Rectangle(50.3,42.5,143.39999999999998,48.900000000000006), null);


(lib.crop_car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizNaQgIgGgIgEQgggPhngCIicgFQgcgCgEgIIhWgHIgEADIjqgUIgBgKIjggcQgKAHgOgCQgLgBgPgSQgQgUgFgXIgYh2QgQhUgNhSQgDgVAHgRQAIgVAUgGIgIgqQgGghABgjQgCiHABglQABguAkhAQALgUAFgOIADgLQgIgGgJgNQgSgaABghQAAgcALgOQAKgNAVgDQAXgDAJADQALAEAAAMIABAYQA2hnA0hOQAmg6AYgfQAYgfAbgZQBbhZBDgaQA7gYCMgiIAHgTIAJgCQABgZAJgZQASgzApgEQALgBAVALIAmATQA3AZANAKQAKAHAAAMQAAAGgBAEIB/gaQCGgbAngGQApgHEXghQEDgfA4gFID2gLQAmgCAfAkQAYAbAZA5IApBdQAtB2AUCBQAGAaALB4QAKBfAGBRQAHAEADAOQACAMgBAeQAAAegEAMQgEAOgRARIg6A5QgBgjgKglQgVhIgtgFQgQgBgMAEIgJAEIgKB6IgFBLQgCAggGAOQgBAFADAYQAAAXgMAKQiaCGg2AnQgeAVgyAoQgyAogLAIQgYAQgTAHQgWAIgCgLQAAhBgCg7QgDh0gWgZQgigngQgJQgcgRgiANQgUAIgRAiQgOAagLAmQgJAggKBKQgKBMgBAoQgBAbAEAxQgEApgvAYQgcAPg7AmQgtAdgmAOQgyAThHAMQhDALhCACQgNAAgJgGg");
	mask.setTransform(146.0076,85.372);

	// Слой_2
	this.instance = new lib.goldbandvan();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.9604);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.crop_car, new cjs.Rectangle(26.8,0,238.5,171.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("AgXA3QgJgEgGgIQgHgHABgOIAVAAQAAAFACAEQACAFAFADQAFADAKAAQAGAAAEgBQAFgCAEgEIACgEIACgGQgBgGgDgDQgCgCgGgCIgMgEQgMgCgJgDQgKgDgFgGQgGgHgBgKQABgLAFgHQAGgIAJgEQAKgEAMAAIAPABQAIACAGAEQAHADADAHIADAJIABAHIgWAAQAAgIgDgEQgEgEgFgBIgJgBIgEAAIgHACQgFABgCADQgDAEgBAGQABAFADACQACADADACIAHACIAXAGIAMAEQAFACADADQAFAEACAFQABAGABAFQgBAJgEAIQgEAHgHAEQgHAEgIACIgQABQgMAAgKgDg");
	this.shape.setTransform(218.2,25.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AgXA3QgKgEgGgIQgFgHAAgOIAVAAQAAAFACAEQACAFAFADQAFADAKAAQAGAAAEgBQAFgCAEgEIACgEIABgGQAAgGgCgDQgDgCgGgCIgMgEQgMgCgJgDQgKgDgFgGQgGgHAAgKQAAgLAFgHQAFgIAKgEQAKgEAMAAIAPABQAHACAHAEQAHADADAHIADAJIAAAHIgVAAQAAgIgDgEQgEgEgFgBIgJgBIgEAAIgIACQgDABgDADQgEAEAAAGQAAAFAEACQACADADACIAHACIAXAGIAMAEQAFACADADQAEAEADAFQACAGAAAFQgBAJgEAIQgFAHgGAEQgHAEgJACIgQABQgLAAgKgDg");
	this.shape_1.setTransform(207.2,25.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AgkArQgNgPAAgaQAAgPAFgOQAEgNANgJQAFgEAGgCIAKgCIAIAAQAPAAAJAEQAJAFAFAHQAFAIACAIQACAJAAAHIABANIhOAAQgBALAEAJQACAJAHAFQAIAFAKAAQAKAAAIgFQAHgGABgLIAUAAIgBAKQgCAGgGAGIgHAHQgEAEgIACQgIACgLABQgZgBgMgPgAgMgnQgGACgFAIQgEAHAAAMIA3AAIAAgKQgBgFgCgFQgDgFgFgEQgGgEgJAAQgHABgHADg");
	this.shape_2.setTransform(195.6,25.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("AAbA4IAAhFIgBgKQgBgFgEgEQgEgEgFgBQgFgCgFAAQgHAAgHADQgGAEgEAHQgEAIAAALIAAA+IgVAAIAAhgIAAgNIAVAAIAAASIAEgIQAEgEAHgEQAIgEALAAQAEgBAHACQAGABAHAEQAGADAFAIQAFAIAAAMIAABKg");
	this.shape_3.setTransform(182.8,25.3188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AgJBPIAAhtIAUAAIAABtgAgLg4IAAgWIAXAAIAAAWg");
	this.shape_4.setTransform(172.875,23.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("AgWA3QgLgEgFgIQgHgHAAgOIAXAAQgBAFACAEQACAFAFADQAFADAJAAQAHAAAEgBQAGgCADgEIADgEIABgGQAAgGgEgDQgCgCgFgCIgNgEQgLgCgKgDQgKgDgGgGQgFgHgBgKQAAgLAGgHQAFgIAKgEQAKgEAMAAIAPABQAIACAGAEQAHADAEAHIACAJIABAHIgVAAQgBgIgEgEQgDgEgFgBIgJgBIgEAAIgHACQgFABgDADQgCAEAAAGQAAAFACACQADADAEACIAGACIAXAGIAMAEQAFACADADQAEAEADAFQABAGAAAFQAAAJgEAIQgEAHgGAEQgIAEgIACIgQABQgMAAgJgDg");
	this.shape_5.setTransform(164.4,25.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("AgeAzQgJgFgEgIQgFgJAAgLIAAhJIAWAAIAABGQgBAGACAFQACAGAFAEQAFAEAKAAQAHAAAHgDQAHgDAEgHQADgFABgFIABgKIAAg+IAVAAIAABZIAAAFIAAAIIABAIIgWAAIAAgTIgGAIQgEAFgHADQgHAEgKAAQgOAAgJgFg");
	this.shape_6.setTransform(152.025,25.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("Ag3BQIAAifIA3AAQAPABAJACQAJACAHAIQAGAEADAIQADAGAAAKQAAAJgDAHQgDAGgFAFQgEADgFACIgHAEIAJACQAFACAFAEQAFAEAEAIQADAHAAALQAAALgDAHQgEAIgEAEIgIAGQgIAGgJABIgTABgAgiA+IAlAAQAIAAAHgDQAHgEAFgFQAEgHAAgJQAAgMgIgHQgIgIgPAAIglAAgAgigLIAfAAIAHAAQAFgBAGgDQAGgCAEgFQAEgFAAgJQAAgMgGgFQgFgGgIgBIgMgBIggAAg");
	this.shape_7.setTransform(138.525,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AgdA4IAAhXIAAgMIgBgLIAVAAIAAAWQADgIAEgFQADgEAGgCIAJgDIAJgBIAGAAIAAAVIgCgBIgCAAIgCAAIgEAAQgMAAgHAEQgFAEgDAIQgCAHAAAKIAAA6g");
	this.shape_8.setTransform(121.2,25.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1E1E").s().p("AgeAzQgJgFgEgIQgFgJAAgLIAAhJIAWAAIAABGQgBAGACAFQACAGAFAEQAFAEAKAAQAHAAAHgDQAHgDAEgHQADgFABgFIABgKIAAg+IAVAAIAABZIAAAFIAAAIIABAIIgWAAIAAgTIgGAIQgEAFgHADQgHAEgKAAQgOAAgJgFg");
	this.shape_9.setTransform(109.275,25.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1E1E").s().p("AgeAzQgMgIgGgNQgGgNAAgQQAAgJADgLQACgKAHgJQAGgJALgFQALgFAPgBQARABAKAFQALAGAGAJQAGAJACAKQACAJAAAJQAAAQgGANQgGANgMAIQgNAIgSABQgSgBgMgHgAgJgpQgGACgFAFQgGAFgDAIQgDAJAAAMQgBALAEAKQADAKAIAGQAHAGALAAQAIAAAHgEQAIgEAFgKQAFgKAAgPQAAgVgJgLQgIgKgPAAIgBAAIgJABg");
	this.shape_10.setTransform(95.875,25.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1E1E").s().p("AgKBQIAAg/Ig+hgIAbAAIAuBPIAvhPIAZAAIg+BhIAAA+g");
	this.shape_11.setTransform(84.175,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1E1E").s().p("AglArQgMgPAAgaQAAgPAEgOQAFgNAMgJQAGgEAGgCIALgCIAHAAQAOAAAKAEQAJAFAFAHQAFAIADAIQACAJAAAHIAAANIhPAAQAAALADAJQAEAJAGAFQAIAFAKAAQALAAAGgFQAIgGABgLIAVAAQAAAEgDAGQgBAGgFAGIgIAHQgEAEgIACQgIACgLABQgZgBgNgPgAgLgnQgHACgEAIQgGAHAAAMIA4AAIAAgKQgBgFgDgFQgCgFgGgEQgFgEgKAAQgGABgGADg");
	this.shape_12.setTransform(62.35,25.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1E1E").s().p("AATBQIgsg7IAAA7IgUAAIAAifIAUAAIAABdIApgsIAbAAIguAuIAxBAg");
	this.shape_13.setTransform(51.175,22.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1E1E").s().p("AgcA2QgJgEgFgHQgEgIAAgJIABgKQACgGAEgGQAFgEAHgFQAHgDAHgCQAHgCAGAAIALAAIAHAAIAIAAIAAgPQgBgGgDgDQgDgEgGgCQgFgCgGABQgIAAgFADQgFAEgCAEIAAAHIgVAAIACgKQABgFAFgGQAEgEAGgDQAGgCAGgBIAMgCQAJAAAHACQAIACAGAEQAHADADAGQACAFAAAEIABAIIgBA0IAAAFIABAKIABAMIgTAAIgCgIIAAgIQgFAJgGAEQgGAEgGACIgKABQgMAAgJgFgAAEABIgMADQgHACgFAEQgEAFgBAIQAAAEACAEQACAFAFADQAFADAJAAQAHAAAGgDQAFgDAEgFIAEgIIACgJIAAgMIgGgBIgGAAIgKAAg");
	this.shape_14.setTransform(38.4,25.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E1E1E").s().p("AgKBQIAAiMIg1AAIAAgTIB/AAIAAATIg1AAIAACMg");
	this.shape_15.setTransform(28.525,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDD001").s().p("AyEDoQhGABAAhHIAAlEQAAhFBGAAMAkJAAAQBGAAAABFIAAFEQAABHhGgBg");
	this.shape_16.setTransform(122.725,23.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,0,245.5,46.5), null);


// stage content:
(lib._300x600_GA_GoldBand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_890 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(890).call(this.frame_890).wait(3));

	// Слой_29
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("A3bRcMAAAgi3MAu3AAAMAAAAi3g");
	this.shape.setTransform(150,345.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("A3bNYIAA6uMAu3AAAIAAaug");
	this.shape_1.setTransform(150,319.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("A3bJ2IAAzrMAu3AAAIAATrg");
	this.shape_2.setTransform(150,296.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("A3bG3IAAttMAu3AAAIAANtg");
	this.shape_3.setTransform(150,277.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("A3bEbIAAo1MAu3AAAIAAI1g");
	this.shape_4.setTransform(150,262.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("A3bChIAAlBMAu3AAAIAAFBg");
	this.shape_5.setTransform(150,249.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("A3bBKIAAiTMAu3AAAIAACTg");
	this.shape_6.setTransform(150,241.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("A3bAWIAAgrMAu3AAAIAAArg");
	this.shape_7.setTransform(150,236.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("A3bAFIAAgJMAu3AAAIAAAJg");
	this.shape_8.setTransform(150,234.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},182).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape}]},305).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape}]},305).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(74));

	// line
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDD001").s().p("A3bAPIAAgdMAu3AAAIAAAdg");
	this.shape_9.setTransform(150,238.1);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDD001").s().p("A3bFbIAAq1MAu3AAAIAAK1g");
	this.shape_10.setTransform(150,244.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDD001").s().p("A3bKmIAA1MMAu3AAAIAAVMg");
	this.shape_11.setTransform(150,251.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDD001").s().p("A3bPyIAA/jMAu3AAAIAAfjg");
	this.shape_12.setTransform(150,258.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDD001").s().p("A3bU+MAAAgp7MAu3AAAMAAAAp7g");
	this.shape_13.setTransform(150,265.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDD001").s().p("A3baJMAAAg0RMAu3AAAMAAAA0Rg");
	this.shape_14.setTransform(150,272.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDD001").s().p("A3bfVMAAAg+pMAu3AAAMAAAA+pg");
	this.shape_15.setTransform(150,279.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDD001").s().p("EgXbAkhMAAAhJBMAu3AAAMAAABJBg");
	this.shape_16.setTransform(150,286.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDD001").s().p("EgXbApsMAAAhTXMAu3AAAMAAABTXg");
	this.shape_17.setTransform(150,293.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDD001").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_18.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},182).to({state:[{t:this.shape_9}]},122).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},182).to({state:[{t:this.shape_9}]},122).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},182).wait(83));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(182).to({_off:false},0).wait(122).to({_off:true},1).wait(191).to({_off:false},0).wait(122).to({_off:true},1).wait(191).to({_off:false},0).wait(83));

	// t4
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(149.95,661.8,1,1,0,0,0,32.5,11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).to({y:559.8},7,cjs.Ease.get(1)).to({_off:true},112).wait(195).to({_off:false,y:661.8},0).to({y:559.8},7,cjs.Ease.get(1)).to({_off:true},112).wait(195).to({_off:false,y:661.8},0).to({y:559.8},7,cjs.Ease.get(1)).wait(63));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,622.4,0.9022,0.9022,0,0,0,122.8,23.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).to({y:520.4},7,cjs.Ease.get(1)).to({_off:true},119).wait(188).to({_off:false,y:622.4},0).to({y:520.4},7,cjs.Ease.get(1)).to({_off:true},119).wait(188).to({_off:false,y:622.4},0).to({y:520.4},7,cjs.Ease.get(1)).wait(70));

	// Слой_26
	this.instance_2 = new lib.fari2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(202.4,297.45,1,1,0,0,180,0,13.8);
	this.instance_2.alpha = 0;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_2.cache(48,41,147,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(197).to({_off:false},0).to({y:298.7,alpha:0.8711},4,cjs.Ease.get(1)).to({_off:true},113).wait(197).to({_off:false,y:297.45,alpha:0},0).to({y:298.7,alpha:0.8711},4,cjs.Ease.get(1)).to({_off:true},113).wait(197).to({_off:false,y:297.45,alpha:0},0).to({y:298.7,alpha:0.8711},4,cjs.Ease.get(1)).wait(64));

	// Слой_27
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-244,-153.7,-116.1,-187.9).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAAKCjQgTgDgNgaQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATQgVAGgIAAIgCAAg");
	this.shape_19.setTransform(208.1535,279.1318);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-219.9,-160.1,-92,-194.3).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_20.setTransform(208.1535,279.1318);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-195.8,-166.4,-67.9,-200.6).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_21.setTransform(208.1535,279.1318);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-171.7,-172.7,-43.8,-206.9).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_22.setTransform(208.1535,279.1318);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-147.6,-179,-19.7,-213.2).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_23.setTransform(208.1535,279.1318);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-123.5,-185.3,4.4,-219.5).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_24.setTransform(208.1535,279.1318);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-99.5,-191.7,28.4,-225.9).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_25.setTransform(208.1535,279.1318);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-75.4,-198,52.5,-232.2).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_26.setTransform(208.1535,279.1318);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-51.3,-204.3,76.6,-238.5).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_27.setTransform(208.1535,279.1318);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-27.3,-210.6,100.6,-244.8).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAgWCGQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATIgLAAQgoAAgMgXg");
	this.shape_28.setTransform(208.1535,279.1318);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.173,0.4,0.553,0.753,0.91,1],-3.2,-217,124.7,-251.2).s().p("AnjCiQADgSAQguQAQgvAPghQAQgiAMgMQAMgMAjgQQAwgWBJgbIAkDrIg8ArQhTA5h2BDQgYhvADgYgAAKCjQgTgDgNgaQgNgYgyhxIhQi1QAIgFBwgWIC7gmQDtgzANAEQAJADAMAhIAaBEQAOAkAQA1QAPA3AAAPQgCAKiCA1QkCBsg1ATQgVAGgIAAIgCAAg");
	this.shape_29.setTransform(208.1535,279.1318);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(182).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(183).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(184).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(185).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(186).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(187).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(188).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(189).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(190).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(191).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(6));

	// Слой_28
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#615C51").s().p("AgaAeQgBgCADgTQADgTgCgHIAKgKIAPgEQANgEgBAFIgIASQgCAJADgBQAHgCAFADQAUAKgeARQgNAIgKACIgDAAQgGAAgDgEg");
	this.shape_30.setTransform(225.671,327.04);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#615C51").s().p("AgcAjIgBgBQgBgCACgMIABgJIABgLQADgLAAgGIAIgGIAEgFIAQgFIAHgCQAGgBgDAEIgEAIIgDAGIAAAFIAAADQABABAAABQAAAAAAABQABAAAAAAQABAAAAAAQAGgBAEABIAEACQAIAFgFAJQgGAJgOAHIgHADIgSAHIgBAAIgGABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBg");
	this.shape_31.setTransform(225.9512,326.6275);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#615C51").s().p("AgfAnIgBgBQgBgCACgNIABgJIABgNQAFgKACgHIAIgHIAFgFQAGgEALgEIAIgDQAFAAgEAFIgGAIIgCAHQgCADACACIACACQACADADAAQAHgCAEABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAGAGgHAJQgIAKgNAHIgIADQgKADgJAEIgCABQgFADgCAAIgDgBg");
	this.shape_32.setTransform(226.2592,326.2208);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#615C51").s().p("AgiAqIgBAAQgBgCACgPIACgKIAAgNIALgSIAJgIIAFgFQAHgFAKgFIAJgDQAFgBgFAGIgHAJIgDAHQgBAEACACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQADACADAAQAIgCAEACQADABAAADQAEAHgJAKQgJALgOAHIgIACQgLACgKAGIgBABQgHAFgDAAIgBgBg");
	this.shape_33.setTransform(226.5949,325.8578);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#615C51").s().p("AgmAuIAAAAQgCgDADgQIABgKQABgJgBgFIAPgSIAKgKIAGgFQAHgHAKgEIAKgEQAEgBgGAHIgJAJIgDAHQgBAFAEACIAFABIAIAAQAJgCAEACQADACAAADQACAHgLAMQgMANgNAFIgJADQgLAAgLAJIgCABQgIAHgCAAIgBgBg");
	this.shape_34.setTransform(226.9379,325.4878);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#615C51").s().p("AgqAyQgCgDADgRIABgKQABgLgBgFIASgTIALgKIAHgGQAJgIAJgFIALgFQADAAgIAIIgJAJQgCACgBAGQgCAFAFACQADABAEgBIAJgBQALgBADACQAEABgBAEQAAAIgNANQgOAOgNAFQgEACgFAAQgMAAgMAKIgCACQgIAIgDAAIAAAAg");
	this.shape_35.setTransform(227.3361,325.0902);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#615C51").s().p("AgvA1QgBgCADgTQADgUgCgHIAhgfQAYgWAOgEQAEgBgVASQgCADgCAGQgCAJAQgCQAUgEAFADQAKAFgYAXQgYAYgPgCQgNgBgOAOQgJAKgCAAIgBAAg");
	this.shape_36.setTransform(227.7617,324.7307);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#615C51").s().p("AgwAyQgCgDADgSQAEgUgDgIIAdgbQAUgTANgEQAFgBgRARQgCADAEAIQAAAIAQgEQAUgGAFADQAKAFgaAWQgaAXgOgCQgOgCgNAOQgKALgCAAIAAAAg");
	this.shape_37.setTransform(227.9289,325.0556);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#615C51").s().p("AgyAuQgBgCADgTQADgUgCgGIAYgZQARgQAMgEQAFgBgMARQgBACAIAJQABAIARgHQAUgIAFAEQAKAFgbAVQgcAVgPgCQgNgBgOAOQgKALgCAAIAAgBg");
	this.shape_38.setTransform(228.0986,325.4055);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#615C51").s().p("Ag0ArQgBgCADgTQADgUgCgGQANgNAHgJQANgMAMgEQAEgBgHAPQgBACANALQADAHARgIQAUgKAGADQAJAGgdATQgdAUgPgCQgNgBgOAOQgJAKgCAAIgBAAg");
	this.shape_39.setTransform(228.2672,325.7303);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#615C51").s().p("Ag1AoQgCgDADgSQAEgTgDgIQALgKAFgIQAIgJANgEQAEgBgDAOQAAACARANQAFAGASgLQAUgLAFADQAKAFgfATQgeATgPgCQgOgCgNAOQgKALgCAAIAAAAg");
	this.shape_40.setTransform(228.4128,326.0551);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#615C51").s().p("Ag3AkQgBgCADgTQADgTgCgHQAIgIADgHQAEgGANgEQAEgBABAOIAXAPQAGAFATgMQATgOAGAEQAKAFggASQggARgQgCQgNgBgOAOQgKALgBAAIgBgBg");
	this.shape_41.setTransform(228.5837,326.4049);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#615C51").s().p("Ag5AhQgBgCADgTQADgTgCgHQAGgGABgGQAAgDAMgDQAEgBAFAMIAdARQAIAEATgOQAUgPAGADQAJAGgiAQQghAQgQgCQgNgBgOAOQgJAKgCAAIgBAAg");
	this.shape_42.setTransform(228.7537,326.7296);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#615C51").s().p("Ag3AlQgBgCADgTQADgTgCgHQAJgJADgHQAFgHAMgDQAFgBAAANQAAACAWAOQAFAFATgMQAUgNAGADQAJAGggASQgfARgQgCQgNgBgOAOQgJAKgCAAIgBAAg");
	this.shape_43.setTransform(228.5587,326.3299);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#615C51").s().p("Ag1ApQgBgCADgTQADgUgCgGQALgLAGgJQAKgLANgDQAEgBgFAPQAAACAPALQAEAHASgKQAUgLAGADQAJAGgeASQgeAUgPgCQgNgBgOAOQgJAKgCAAIgBAAg");
	this.shape_44.setTransform(228.3642,325.9302);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#615C51").s().p("AgyAtQgCgCADgTQAEgUgDgGIAXgYQAPgOAMgEQAFgBgKAQQgBACAKAKQABAHARgHQAVgJAFAEQAJAFgbAUQgdAVgOgCQgOgBgNAOQgKAKgCAAIAAAAg");
	this.shape_45.setTransform(228.147,325.5304);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#615C51").s().p("AgxAxQgBgCADgTQADgUgCgHIAcgbQATgSANgEQAFgBgRARQgBACAFAJQAAAIAQgFQAUgGAFADQAKAFgaAWQgaAWgPgCQgNgBgOAOQgJAKgCAAIgBAAg");
	this.shape_46.setTransform(227.9539,325.1306);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#615C51").s().p("Ag2AmQgCgCADgTQAEgTgDgHQAKgJAEgIQAGgIANgDQAEgBgCAOQABACAUANQAFAFATgLQATgNAGAEQAKAFggATQgfARgPgCQgOgBgNAOQgKAKgCAAIAAAAg");
	this.shape_47.setTransform(228.5101,326.23);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#615C51").s().p("AgxAwQgCgCADgTQAEgUgDgHIAbgaQATgRAMgEQAFgBgPARQgBACAGAJQAAAIAQgGQAVgHAFADQAJAGgaAVQgbAWgOgCQgOgBgNAOQgKAKgCAAIAAAAg");
	this.shape_48.setTransform(228.0021,325.2306);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#615C51").s().p("AgbAjIgBgBQgBgCABgMIABgJIACgLQADgLgBgGIAIgGIAEgEQAEgCAMgEIAHgCQAFgBgCAEIgEAIIgDAGIgBAFIABADQAAABAAABQABABAAAAQAAAAABABQAAAAABAAQAGgCADABQABAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAJAGgGAIQgEAJgPAHIgHADIgRAHIgCAAIgFABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_49.setTransform(225.9093,326.6844);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#615C51").s().p("AgeAmIgBgBQgBgCACgNIABgJIABgMQAFgLABgGIAIgHIAFgFQAFgDALgEIAIgDQAFAAgDAEIgGAJIgCAGQAAABgBABQAAAAAAABQAAABAAAAQABABAAAAIABADQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAQAHgBAEABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAHAGgGAJQgHAKgOAHIgIADIgTAHIgBABQgEACgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_50.setTransform(226.1648,326.3368);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#615C51").s().p("AghApIAAgBQgBgCACgOIABgJIABgNIAIgSIAJgIIAGgFQAGgEAKgEIAJgEQAFAAgFAFIgGAJIgDAHQgBADACACIADACQACACADAAQAIgCAEACQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAFAHgIAKQgJALgOAGIgHADQgLACgKAGIgBABQgGAEgDAAIgCgBg");
	this.shape_51.setTransform(226.4414,326.012);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#615C51").s().p("AgkAsIAAAAQgCgDADgPIABgKQABgIgBgFIANgSIAJgJIAGgGQAHgFAKgFIAKgDQAEgBgGAGIgIAJIgCAHQgCAFADABQACACADAAQADABAEAAQAIgCAEACQADABAAADQADAHgJALQgLAMgNAGIgJADQgLABgKAHIgCABQgHAGgDAAIgBgBg");
	this.shape_52.setTransform(226.7329,325.6906);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#615C51").s().p("AgnAvIgBAAQgBgDACgQIACgKQABgKgBgFIAPgSIALgKIAGgGQAIgHAKgEIAKgEQADgBgHAHIgIAJIgDAIQgCAFAEABQADABAEAAQAEABAEgBQAJgBAEABQADACAAADQABAIgLAMQgNANgNAGQgFACgEAAQgLAAgLAJIgCABQgIAHgCAAIgBAAg");
	this.shape_53.setTransform(227.0555,325.3804);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#615C51").s().p("AgrAyQgCgCADgSIACgKQABgLgCgFIATgTIALgKIAGgGQAKgIAJgFIALgFQADgBgIAIIgKAJQgCADgBAGQgBAFAFABQADABAEAAIAJgBQALgCAEACQADACgBAEQAAAIgNANQgPAOgMAFQgFACgFAAQgMAAgMAKIgBACQgJAIgCAAIgBAAg");
	this.shape_54.setTransform(227.4036,325.0395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},182).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_30}]},182).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_30}]},182).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(182).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(183).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(184).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(185).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(186).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(187).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(188).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(189).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(190).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(191).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(193).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(192).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(193).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(194).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(195).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(196).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(197).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(198).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(221).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(20));

	// wheels
	this.instance_3 = new lib.wheel("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(251.75,333.05,0.4237,0.735,0,-4.0549,0,189.6,141.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({_off:true},132).wait(182).to({_off:false},0).to({_off:true},132).wait(182).to({_off:false},0).to({_off:true},77).wait(6));

	// wheels
	this.instance_4 = new lib.wheel("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(189.2,374.55,0.927,1.0004,0,-1.5427,0,189.5,141.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(182).to({_off:false},0).to({_off:true},132).wait(182).to({_off:false},0).to({_off:true},132).wait(182).to({_off:false},0).to({_off:true},77).wait(6));

	// Слой_32 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_182 = new cjs.Graphics().p("A3bRcMAAAgi3MAu3AAAMAAAAi3g");
	var mask_graphics_496 = new cjs.Graphics().p("A3bRcMAAAgi3MAu3AAAMAAAAi3g");
	var mask_graphics_810 = new cjs.Graphics().p("A3bRcMAAAgi3MAu3AAAMAAAAi3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_graphics_182,x:150,y:336.3}).wait(132).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_graphics_496,x:150,y:336.3}).wait(132).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_graphics_810,x:150,y:336.3}).wait(77).to({graphics:null,x:0,y:0}).wait(6));

	// Слой_31
	this.instance_5 = new lib.tree();
	this.instance_5.parent = this;
	this.instance_5.setTransform(50.5,459.25);
	this.instance_5.alpha = 0.2109;
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_5.cache(-2,-2,228,137);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({_off:false},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.0586},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.1992},8,cjs.Ease.get(1)).to({_off:true},1).wait(9).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.0586},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.1992},8,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(199).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.0586},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.1992},8,cjs.Ease.get(1)).to({_off:true},1).wait(9).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.0586},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.1992},8,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(199).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.0586},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.1992},8,cjs.Ease.get(1)).to({_off:true},1).wait(9).to({_off:false,scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},0).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:50.5,y:459.25,alpha:0.2109},1,cjs.Ease.get(1)).to({scaleX:0.3634,scaleY:0.3634,x:306.6,y:329.75,alpha:0.3984},8,cjs.Ease.get(1)).to({_off:true},1).wait(8));

	// Слой_34
	this.instance_6 = new lib.crop_car();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.65,347.35,1,1,0,0,0,150,108.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(182).to({_off:false},0).to({y:346.75},10).to({y:347.35},12).to({y:346.75},11).to({y:347.35},12).to({y:346.75},11).to({y:347.35},12).to({y:346.75},11).to({y:347.35},11).to({y:346.75},11).to({y:347.35},11).to({y:346.75},11).to({y:347.35},8).to({_off:true},1).wait(182).to({_off:false},0).to({y:346.75},10).to({y:347.35},12).to({y:346.75},11).to({y:347.35},12).to({y:346.75},11).to({y:347.35},12).to({y:346.75},11).to({y:347.35},11).to({y:346.75},11).to({y:347.35},11).to({y:346.75},11).to({y:347.35},8).to({_off:true},1).wait(182).to({_off:false},0).to({y:346.75},10).to({y:347.35},12).to({y:346.75},11).to({y:347.35},12).to({y:346.75},11).to({y:347.35},12).to({y:346.75},8).to({_off:true},1).wait(6));

	// Слой_35
	this.instance_7 = new lib.goldbandvan();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,239,1,0.9604);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(182).to({_off:false},0).to({_off:true},132).wait(182).to({_off:false},0).to({_off:true},132).wait(182).to({_off:false},0).wait(83));

	// Слой_18
	this.instance_8 = new lib.t3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149.45,195.6,1,1,0,0,0,118.1,36.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(182).to({_off:false},0).to({y:165.6,alpha:1},8,cjs.Ease.get(1)).to({_off:true},124).wait(182).to({_off:false,y:195.6,alpha:0},0).to({y:165.6,alpha:1},8,cjs.Ease.get(1)).to({_off:true},124).wait(182).to({_off:false,y:195.6,alpha:0},0).to({y:165.6,alpha:1},8,cjs.Ease.get(1)).wait(75));

	// Слой_3
	this.instance_9 = new lib.logo1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.1,573.55,1.1841,1.1841,0,0,0,84.8,21.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(104).to({_off:false},0).to({y:543.55,alpha:1},8).wait(58).to({y:515.55,alpha:0},5).to({_off:true},1).wait(1).to({_off:false,y:109.55},0).to({scaleX:1.0056,scaleY:1.0056,x:150.05,y:49.4,alpha:1},5).to({_off:true},132).wait(104).to({_off:false,scaleX:1.1841,scaleY:1.1841,x:150.1,y:573.55,alpha:0},0).to({y:543.55,alpha:1},8).wait(58).to({y:515.55,alpha:0},5).to({_off:true},1).wait(1).to({_off:false,y:109.55},0).to({scaleX:1.0056,scaleY:1.0056,x:150.05,y:49.4,alpha:1},5).to({_off:true},132).wait(104).to({_off:false,scaleX:1.1841,scaleY:1.1841,x:150.1,y:573.55,alpha:0},0).to({y:543.55,alpha:1},8).wait(58).to({y:515.55,alpha:0},5).to({_off:true},1).wait(1).to({_off:false,y:109.55},0).to({scaleX:1.0056,scaleY:1.0056,x:150.05,y:49.4,alpha:1},5).wait(83));

	// Слой_6
	this.instance_10 = new lib.t2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.05,293.3,1,1,0,0,0,99.8,43.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({y:243.3,alpha:1},8).wait(62).to({y:184.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(236).to({_off:false,y:293.3},0).to({y:243.3,alpha:1},8).wait(62).to({y:184.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(236).to({_off:false,y:293.3},0).to({y:243.3,alpha:1},8).wait(62).to({y:184.8,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(87));

	// ic6
	this.instance_11 = new lib.ic6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(266.65,534.7,0.5,0.5,0,0,0,14.2,22.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({_off:false},0).to({scaleX:0.8931,scaleY:0.8931,x:266.7,y:534.75},5).wait(56).to({regX:14.3,regY:22.3,scaleX:0.4,scaleY:0.4,x:266.65,y:551.7,alpha:0},5).to({_off:true},1).wait(247).to({_off:false,regX:14.2,regY:22.2,scaleX:0.5,scaleY:0.5,y:534.7,alpha:1},0).to({scaleX:0.8931,scaleY:0.8931,x:266.7,y:534.75},5).wait(56).to({regX:14.3,regY:22.3,scaleX:0.4,scaleY:0.4,x:266.65,y:551.7,alpha:0},5).to({_off:true},1).wait(247).to({_off:false,regX:14.2,regY:22.2,scaleX:0.5,scaleY:0.5,y:534.7,alpha:1},0).to({scaleX:0.8931,scaleY:0.8931,x:266.7,y:534.75},5).wait(56).to({regX:14.3,regY:22.3,scaleX:0.4,scaleY:0.4,x:266.65,y:551.7,alpha:0},5).to({_off:true},1).wait(165));

	// ic5
	this.instance_12 = new lib.ic5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(138.4,465.5,0.5,0.5,0,0,0,29.5,17.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(28).to({_off:false},0).to({regX:29.4,scaleX:0.8931,scaleY:0.8931},5).wait(57).to({regX:29.5,regY:17.7,scaleX:0.4,scaleY:0.4,y:482.55,alpha:0},5).to({_off:true},1).wait(246).to({_off:false,regY:17.6,scaleX:0.5,scaleY:0.5,y:465.5,alpha:1},0).to({regX:29.4,scaleX:0.8931,scaleY:0.8931},5).wait(57).to({regX:29.5,regY:17.7,scaleX:0.4,scaleY:0.4,y:482.55,alpha:0},5).to({_off:true},1).wait(246).to({_off:false,regY:17.6,scaleX:0.5,scaleY:0.5,y:465.5,alpha:1},0).to({regX:29.4,scaleX:0.8931,scaleY:0.8931},5).wait(57).to({regX:29.5,regY:17.7,scaleX:0.4,scaleY:0.4,y:482.55,alpha:0},5).to({_off:true},1).wait(169));

	// ic4
	this.instance_13 = new lib.ic4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(35.75,323.75,0.5,0.5,0,0,0,19.7,24.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({_off:false},0).to({scaleX:0.8931,scaleY:0.8931,x:35.8},5).wait(59).to({regY:24.9,scaleX:0.4,scaleY:0.4,y:340.75,alpha:0},5).to({_off:true},1).wait(244).to({_off:false,regY:24.8,scaleX:0.5,scaleY:0.5,x:35.75,y:323.75,alpha:1},0).to({scaleX:0.8931,scaleY:0.8931,x:35.8},5).wait(59).to({regY:24.9,scaleX:0.4,scaleY:0.4,y:340.75,alpha:0},5).to({_off:true},1).wait(244).to({_off:false,regY:24.8,scaleX:0.5,scaleY:0.5,x:35.75,y:323.75,alpha:1},0).to({scaleX:0.8931,scaleY:0.8931,x:35.8},5).wait(59).to({regY:24.9,scaleX:0.4,scaleY:0.4,y:340.75,alpha:0},5).to({_off:true},1).wait(172));

	// ic3
	this.instance_14 = new lib.ic3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(197.8,273.15,0.5,0.5,0,0,0,24.4,13.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({_off:false},0).to({scaleX:0.8931,scaleY:0.8931,x:197.85,y:273.2},5).wait(61).to({regY:13.2,scaleX:0.4,scaleY:0.4,x:197.8,y:290.2,alpha:0},5).to({_off:true},1).wait(242).to({_off:false,regY:13.1,scaleX:0.5,scaleY:0.5,y:273.15,alpha:1},0).to({scaleX:0.8931,scaleY:0.8931,x:197.85,y:273.2},5).wait(61).to({regY:13.2,scaleX:0.4,scaleY:0.4,x:197.8,y:290.2,alpha:0},5).to({_off:true},1).wait(242).to({_off:false,regY:13.1,scaleX:0.5,scaleY:0.5,y:273.15,alpha:1},0).to({scaleX:0.8931,scaleY:0.8931,x:197.85,y:273.2},5).wait(61).to({regY:13.2,scaleX:0.4,scaleY:0.4,x:197.8,y:290.2,alpha:0},5).to({_off:true},1).wait(175));

	// ic2
	this.instance_15 = new lib.ic2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(134,232.8,0.5,0.5,0,0,0,20,20.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(13).to({_off:false},0).to({regY:20,scaleX:0.8931,scaleY:0.8931},5).wait(63).to({regY:20.2,scaleX:0.4,scaleY:0.4,y:249.85,alpha:0},5).to({_off:true},1).wait(240).to({_off:false,regY:20.1,scaleX:0.5,scaleY:0.5,y:232.8,alpha:1},0).to({regY:20,scaleX:0.8931,scaleY:0.8931},5).wait(63).to({regY:20.2,scaleX:0.4,scaleY:0.4,y:249.85,alpha:0},5).to({_off:true},1).wait(240).to({_off:false,regY:20.1,scaleX:0.5,scaleY:0.5,y:232.8,alpha:1},0).to({regY:20,scaleX:0.8931,scaleY:0.8931},5).wait(63).to({regY:20.2,scaleX:0.4,scaleY:0.4,y:249.85,alpha:0},5).to({_off:true},1).wait(178));

	// ic1
	this.instance_16 = new lib.ic1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(263.1,170,0.5,0.5,0,0,0,21,18.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).to({_off:false},0).to({regX:20.9,scaleX:0.8931,scaleY:0.8931,x:263.05,y:170.05},5).wait(65).to({regX:21,regY:18.3,scaleX:0.4,scaleY:0.4,x:263.1,y:187,alpha:0},5).to({_off:true},1).wait(238).to({_off:false,regY:18.2,scaleX:0.5,scaleY:0.5,y:170,alpha:1},0).to({regX:20.9,scaleX:0.8931,scaleY:0.8931,x:263.05,y:170.05},5).wait(65).to({regX:21,regY:18.3,scaleX:0.4,scaleY:0.4,x:263.1,y:187,alpha:0},5).to({_off:true},1).wait(238).to({_off:false,regY:18.2,scaleX:0.5,scaleY:0.5,y:170,alpha:1},0).to({regX:20.9,scaleX:0.8931,scaleY:0.8931,x:263.05,y:170.05},5).wait(65).to({regX:21,regY:18.3,scaleX:0.4,scaleY:0.4,x:263.1,y:187,alpha:0},5).to({_off:true},1).wait(181));

	// scheme
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0,0.059],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_55.setTransform(187.9,372.1556);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.067,0.129],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_56.setTransform(187.9,372.1556);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.133,0.204],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_57.setTransform(187.9,372.1556);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.2,0.275],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_58.setTransform(187.9,372.1556);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.271,0.349],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_59.setTransform(187.9,372.1556);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.337,0.42],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_60.setTransform(187.9,372.1556);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.404,0.494],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_61.setTransform(187.9,372.1556);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.471,0.565],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_62.setTransform(187.9,372.1556);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.537,0.639],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_63.setTransform(187.9,372.1556);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.604,0.71],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_64.setTransform(187.9,372.1556);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.675,0.784],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_65.setTransform(187.9,372.1556);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.741,0.855],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_66.setTransform(187.9,372.1556);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.808,0.929],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_67.setTransform(187.9,372.1556);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#1E1E1E","rgba(30,30,30,0)"],[0.875,1],77.2,39.3,0,77.2,39.3,341.4).s().p("AG6a5QgKgIAAgXIAAgUI9SAAQhhAAhFhFQhEhEAAhhIAAuzQAAhWA4hBQA4hBBUgOIAAgDIY5AAQgigggSgqQgSgsgBgwIAAkpQAAhFgvgxQgxgyhGAAIvQAAIAAAVQABAXgLAIQgLAIgPgLIhIg3QgPgMAAgPQAAgRAPgLIBIg3QAPgMALAJQALAHgBAXIAAAXIJdAAQghghgSgqQgTgsAAgwIAAl5IgWAAQgXAAgIgLQgIgKAMgPIA2hIQAMgPAQAAQAQAAALAPIA3BIQAMAPgIAKQgJALgWAAIgVAAIAAF5QAABFAwAxQAyAxBEAAIDQAAQBhAABEBEQBEBFAABhIAAEpQAABFAxAxQAxAwBFAAIFiAAQAwAAAsATQArASAgAiIAAxXQgChEgxguQgwgwhEAAIhWAAIAAAWQAAAXgKAIQgLAIgPgMIhHg3QgPgLgBgQQABgQAPgLIBHg3QAPgMALAIQAKAIAAAXIAAAWIBWAAQAwAAAsATQAqASAhAhIAAqUIgVAAQgXAAgIgKQgIgLALgPIA4hIQALgOAQAAQAQAAAMAOIA3BIQALAPgJALQgHAKgXAAIgWAAMAAAAmrQAABFAxAxQAxAxBFAAIKGAAIAABDIqGAAQhhAAhFhFQhEhEAAhhIAAmFQgChDgxgvQgwgvhEAAIg4AAQhFAAgwAxQgxAxAABEIAAEGQAABhhFBFQhEBEhgAAIiJAAIAAAWQAAAXgLAIQgLAIgOgLIhHg4QgPgLAAgQQAAgQAPgMIBHg3QAOgLALAJQALAHAAAXIAAAVICJAAQBEAAAygxQAwgxAAhFIAAkGQABgwASgrQATgqAhghI8+AAQhGAAgwAxQgyAxAABEIAAOzQAABFAyAxQAwAxBGAAIAiAAIAAAAIcwAAIAAgWQAAgXAKgIQAMgIAOALIBIA3QAOAMABAQQgBAPgOAMIhIA3QgIAHgIAAQgFAAgFgEg");
	this.shape_68.setTransform(187.9,372.1556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[]},87).to({state:[{t:this.shape_55}]},214).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[]},87).to({state:[{t:this.shape_55}]},214).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[]},87).wait(165));

	// Слой_14
	this.instance_17 = new lib.t1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(151,165.05,1,1,0,0,0,132.2,62);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:87.05,alpha:1},8).wait(306).to({y:165.05,alpha:0},0).to({y:87.05,alpha:1},8).wait(306).to({y:165.05,alpha:0},0).to({y:87.05,alpha:1},8).wait(257));

	// Слой_19
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_69.setTransform(150,487.05);
	this.shape_69._off = true;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AjkAFIAAgJIHJAAIAAAJg");
	this.shape_70.setTransform(150,487.05);
	this.shape_70._off = true;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("Am6AFIAAgJIN1AAIAAAJg");
	this.shape_71.setTransform(150,487.05);
	this.shape_71._off = true;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AqRAFIAAgJIUiAAIAAAJg");
	this.shape_72.setTransform(150,487.05);
	this.shape_72._off = true;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AtnAFIAAgJIbOAAIAAAJg");
	this.shape_73.setTransform(150,487.05);
	this.shape_73._off = true;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("Aw9AFIAAgJMAh7AAAIAAAJg");
	this.shape_74.setTransform(150,487.05);
	this.shape_74._off = true;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("A0TAFIAAgJMAonAAAIAAAJg");
	this.shape_75.setTransform(150,487.05);
	this.shape_75._off = true;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgJAFIAAgJIATAAIAAAJg");
	this.shape_76.setTransform(150,97.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AjgAFIAAgJIHBAAIAAAJg");
	this.shape_77.setTransform(150,97.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("Am3AFIAAgJINvAAIAAAJg");
	this.shape_78.setTransform(150,97.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AqOAFIAAgJIUdAAIAAAJg");
	this.shape_79.setTransform(150,97.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AtlAFIAAgJIbLAAIAAAJg");
	this.shape_80.setTransform(150,97.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("Aw8AFIAAgJMAh5AAAIAAAJg");
	this.shape_81.setTransform(150,97.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69}]},103).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},58).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[]},1).to({state:[{t:this.shape_76}]},10).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_75}]},1).to({state:[]},124).to({state:[{t:this.shape_69}]},103).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},58).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[]},1).to({state:[{t:this.shape_76}]},10).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_75}]},1).to({state:[]},124).to({state:[{t:this.shape_69}]},103).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},58).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[]},1).to({state:[{t:this.shape_76}]},10).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_75}]},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(103).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(243).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(243).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(104).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(245).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(245).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(105).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(247).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(247).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(93));
	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(106).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(249).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(249).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(107).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(251).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(251).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(108).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(253).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(253).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(109).to({_off:false},0).wait(58).to({_off:true},1).wait(22).to({_off:false,y:97.05},0).to({_off:true},124).wait(109).to({_off:false,y:487.05},0).wait(58).to({_off:true},1).wait(22).to({_off:false,y:97.05},0).to({_off:true},124).wait(109).to({_off:false,y:487.05},0).wait(58).to({_off:true},1).wait(22).to({_off:false,y:97.05},0).wait(75));

	// bg
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FECB00").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_82.setTransform(150,300);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DEB204").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_83.setTransform(150,300);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BE9A09").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_84.setTransform(150,300);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9E810D").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_85.setTransform(150,300);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7E6811").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_86.setTransform(150,300);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5E4F15").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_87.setTransform(150,300);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3E371A").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_88.setTransform(150,300);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1E1E1E").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_89.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82}]}).to({state:[{t:this.shape_82}]},92).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_82}]},215).to({state:[{t:this.shape_82}]},92).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_82}]},215).to({state:[{t:this.shape_82}]},92).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(92).to({_off:true},1).wait(221).to({_off:false},0).wait(92).to({_off:true},1).wait(221).to({_off:false},0).wait(92).to({_off:true},1).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.7,300,205.90000000000003,373.4);
// library properties:
lib.properties = {
	id: 'DF16529FCF63B84299E99FB3096E7273',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_GA_GoldBand_atlas_P_.png", id:"300x600_GA_GoldBand_atlas_P_"},
		{src:"images/300x600_GA_GoldBand_atlas_NP_.jpg", id:"300x600_GA_GoldBand_atlas_NP_"}
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