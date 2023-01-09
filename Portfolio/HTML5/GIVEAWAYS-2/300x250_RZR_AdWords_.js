(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_RZR_AdWords__atlas_.png", id:"300x250_RZR_AdWords__atlas_"}
	]
};



lib.ssMetadata = [
		{name:"300x250_RZR_AdWords__atlas_", frames: [[0,0,724,360],[726,235,266,56],[726,0,286,233]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bgpic = function() {
	this.spriteSheet = ss["300x250_RZR_AdWords__atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.RZRlogo = function() {
	this.spriteSheet = ss["300x250_RZR_AdWords__atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rzr = function() {
	this.spriteSheet = ss["300x250_RZR_AdWords__atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.xpturbo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(61.3,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC932A").s().p("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");
	this.shape_1.setTransform(65.9,-74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E42320").s().p("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");
	this.shape_2.setTransform(66.7,-75.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjGLiIh2AAIgjCgIhLAAIBamnIEAAAQAbAAAYAGQAQAEANAHQAQAMAKARQAMASgBAcQABAQgFAVQgLA0gfAeQggAdgvAJIgcAFIBkCWIhQAigAkyKyICwAAQAPAAAMgEQAKgFAIgGQAMgKAIgQQAIgRAEgWIAAgBQAFgSAAgOQAAgNgEgJQgCgJgGgFQgHgJgNgEQgJgDgNAAIipAAgAK0OEQgbgEgUgLQgcgOgOgaQgPgaAAguQgBgmALgyQAPhEAYgrQARggAYgVQAhgfAzgNQAvgNBJAAQA1AAAiAHQAdAFATAJQAcANAOAZQAQAbAAAqQAAAkgLAxQgPBFgYAuQgRAggYAXQghAggzAPQgwANhIAAQg0AAgkgHgAMZITQgYAEgPAJQgOAJgIAMQgNASgKAcQgJAbgJAoQgMA9AAAfQAAAXAGAPQAIANAMAIQAHAFAMAEQANAEAVABQARACAaAAQAxgBATgEQAXgEAQgKQANgIAKgNQANgTAJgdQAHgXAKgwQANg4ABgeQgBgXgHgPQgHgNgMgHQgIgFgMgDQgNgEgUgBIgrgBQgvAAgVADgAsuOEQgYgEgUgJQgbgOgNgTQgNgUABgcQAAgPADgTIA/kpIBMAAIg9EcQgDATAAAJQAAAJACAGQACAPALAJQAIAHAJAEQAPAFAVADQAWACAcAAQAiAAAYgDQATgDAOgGQAMgEAHgGQANgKAHgQQAHgNAEgTIA+kkIBMAAIg9EhIAAAAQgIAkgTAbQgcAng1AVQg1AUhOAAQguAAghgHgAR4OJQgGAAgDgCIgDAAIAAgCIAAgEQAAgJADgRQAEgPADgIIAFgHIADgCQAHgDAHgBIAbgBIAYABIAKABIADACIAAACQAAAHgEAQQgEAUgDAHIgFAJIgDACQgGADgJABIgbABIgXgBgABHOCIBamnID6AAQAhAAAZAGQAQADANAGQAPAHAJANQAHANAAARQAAAKgCAOQgFAWgKAOQgOAZgcAOQgdAOgrAEIgBABIgDAAIABALQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABQgCACAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQACACACAAIAAALQAaACAVAFQAOAEAJAGQANAIAHANQAGAMAAASQAAAOgCAOQgHAdgQAWQgWAcgpAQQglANgzAAgACeNRICvAAQAPAAAKgCQAKgDAHgEQANgIAHgPQAHgMAGgWQAEgWAAgNQAAgMgDgIQgFgIgGgGQgEgDgGgCQgIgDgIgBIgRgBIinAAgADHKQICsAAQANAAAKgDQAIgCAIgFQALgIAHgNQAFgKAFgWQAEgPgBgKQAAgMgDgIQgEgHgFgGQgIgGgLgDIgTgBIikAAgAztOCIBMlpIiuAAIANg+IGqAAIgOA+IivAAIhNFpgASXLwIA2kgIBMAAIhEEggAxICoQgxgegWgPIIQnVIlEnQIDBhkIEnGpIHfmrICGBaIoHHQIFMHWIgjATIidBOIkvmuInkGvgAC0C6IDlwuIKJAAQBGAAA4AOQAsAMAeASQAxAbAYAsQAdAwAABGQAAApgNA0QgSBcgrA/Qg8BehrAvQhmAtiKAAImlAAIhYGTgAHllUIG8AAQAmAAAegLQAbgKAVgSQAegaAVgqQAUgpAMg4QAKgvABgpQAAgdgJgYQgLgYgLgMQgVgUgdgJQgZgGgfAAImsAAg");
	this.shape_3.setTransform(64.1,-72.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#211F1F").s().p("ALFC2IAPhHICIAAIAPABIAFABIABAEIibAAIgMBBgANwBxIAAAAIABAAgALvgJIAFgZIgFAZgAtqivQAAgCADgCIADgCIgCADQgEAEgBAFIgFAYg");
	this.shape_4.setTransform(13.5,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(33,31,31,0.8)").s().p("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");
	this.shape_5.setTransform(67.8,-74.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-173.8,287.6,198.9);


(lib.wina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AA4BcIgGgqIhUAAIgZAqQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgmgIQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIBpiuQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAIA/AAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAfCtQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgqAIIgCAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBgAgOAQIA6AAIgMhTg");
	this.shape.setTransform(31.5,0.2,0.908,0.908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AARBcQgDAAgCgCIgyh9IgbB9QAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgoAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIAnizQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIA1AAQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAIAyB+IAbh+QAAAAAAgBQAAAAABgBQAAAAABAAQABAAABAAIAnAAQAEAAgBACIgnCzQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_1.setTransform(5.9,0,0.908,0.908);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgmBcQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAnizQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAAAAAIAnAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIgnCzQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_2.setTransform(-9.7,0,0.908,0.908);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAABeQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgEiKIhACKQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIhBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgGiuIAAgBIACgCIAtgIIAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIABCTIBCiPQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIA6AAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIADCPIBBiTQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAAAAIApAIIACACIhSCvQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_3.setTransform(-27.3,-0.2,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-8.7,82,17.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RZRlogo();
	this.instance.setTransform(-102.9,-21.6,0.774,0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,-21.6,205.8,43.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RZRlogo();
	this.instance.setTransform(-102.9,-21.6,0.774,0.774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,-21.6,205.8,43.3);


(lib.RZR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rzr();
	this.instance.setTransform(-143,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143,-116.5,286,233);


(lib.polarislogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E42320").s().p("Ag6BeQghgDgPgMQgTgPgBggIAAghQgBg4AOgRQAPgSA3gBIBUAAQAyAAARAQQAUARgBAyIAAAIQAAA4gMARQgQAVg8ACgAAABIIAMg0IAZANIgLgWIBQgLIhQgJIALgWIgZANIgMgzIgKAzIgagNIAKAWIhOAJIBOALIgKAWIAagNg");
	this.shape.setTransform(-24.9,-1.8,1.341,1.341);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E42320").s().p("AhwBdIAAi5ICVAAQArAAAPANQASAPAAApQAAAlgMAPQgOARgpAAIhlAAIAAAvgAg3ABIBRAAQAQAAAGgCQAHgGAAgOQAAgQgHgFQgGgFgRAAIhQAAg");
	this.shape_1.setTransform(-60.1,-1.8,1.341,1.341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E42320").s().p("ABABdIAAgvIh/AAIAAAvIg5AAIAAh+QAAgeAXgQQASgNAVAAIB1AAQAVAAASANQAXAQAAAeIAAB+gAgzgmQgMAIAAAMIAAASIB/AAIAAgSQAAgMgLgIQgKgHgKAAIhBAAQgKAAgJAHg");
	this.shape_2.setTransform(37,-1.8,1.341,1.341);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E42320").s().p("AA6BdIAAgSQAAgRgDgFQgFgIgRAAIhdAAIAAAwIg5AAIAAi5ICsAAQAiAAAOANQAPANAAAhQAAAagIALQgFAHgJAEIgSAGQATADAJAHQAKAIAAASIAAAkgAg8AAIBcAAQATAAAFgEQAFgEAAgQQgBgKgBgDQgDgGgHgCQgGgCgKAAIhdAAg");
	this.shape_3.setTransform(71.8,-1.8,1.341,1.341);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E42320").s().p("AAEAJIgEgJIgEAAIAAAJIgCAAIAAgRIAGAAQAHAAAAAFQAAADgGAAIAGAJgAgEAAIAEAAQAFAAAAgDQAAgEgFAAIgEAAg");
	this.shape_4.setTransform(134.1,-13,1.341,1.341);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E42320").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFgAgJgJQgEAEAAAFQAAAGAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgGQAAgFgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_5.setTransform(133.9,-13,1.341,1.341);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E42320").s().p("AhwBcIAAguICdAAQAGABADgEQAEgDAAgGQAAgFgEgEQgDgDgGAAIhzAAQgXAAgNgRQgLgOAAgaQAAgZALgPQANgRAXAAIC0AAIAAAvIiaAAQgFAAgDACQgDADAAAFQAAAFADADQADAEAFAAIBzAAQAXAAANARQALAOAAAaQAAAagLAQQgNARgXAAg");
	this.shape_6.setTransform(115.9,-1.7,1.341,1.341);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E42320").s().p("AgbBdIAAi5IA3AAIAAC5g");
	this.shape_7.setTransform(94.4,-1.8,1.341,1.341);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E42320").s().p("AhVBdIAAi5IA5AAIAACKIByAAIAAAvg");
	this.shape_8.setTransform(6.8,-1.8,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-15.3,211.6,26.3);


(lib.Lights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(51,210,255,0.612)","rgba(51,203,255,0)"],[0,1],0.1,0,0,0.1,0,4.7).s().p("AAFAtQgWgDgRgQQgSgPgCgQQgCgUAPgLQAPgLAXADQAVADASAPQARAQACAQQACATgPAMQgLAJgRAAIgJgBg");
	this.shape.setTransform(-22.9,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(130,216,255,0.71)","rgba(153,214,255,0)"],[0.004,1],0.1,0,0,0.1,0,13.7).s().p("AhaClQg2gqgLhOQgKhNAmhEQAmhFBBgTQA/gSA1ApQA1AqAKBPQALBMgmBFQgmBFhBASQgUAGgRAAQgqAAgkgdg");
	this.shape_1.setTransform(-21.3,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(208,222,255,0.808)","rgba(255,224,255,0)"],[0.004,1],0,0,0,0,0,28.3).s().p("AiTExQhZhFgTiKQgTiIA9h+QA+h+BrgpQBogpBZBFQBYBEATCKQAUCIg+B+Qg+B/hqAoQgpAPgjAAQg+AAg3gqg");
	this.shape_2.setTransform(-19.8,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,16.9,11.1,9.2);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E42320").s().p("AgIAwIAAgTIARAAIAAATgAgDAXIgGgvIAAgXIASAAIAAAXIgEAvg");
	this.shape.setTransform(30.5,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E42320").s().p("AATAwIgThGIgSBGIgVAAIgXhfIAUAAIAPBBIARhBIAVAAIARBCIAPhCIAUAAIgYBfg");
	this.shape_1.setTransform(21.9,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E42320").s().p("AggAkQgNgNAAgXQAAgNAEgJQADgIAGgGQAGgGAGgCQAKgEAKAAQAUAAANANQANANAAAWQAAAXgNANQgMANgVAAQgUAAgMgNgAgSgXQgHAIAAAPQAAAQAHAIQAIAJAKAAQALAAAIgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgKAAgIAJg");
	this.shape_2.setTransform(10.3,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E42320").s().p("AASAwIglg9IAAA9IgSAAIAAhfIATAAIAmA/IAAg/IASAAIAABfg");
	this.shape_3.setTransform(0.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E42320").s().p("AATAwIgOgVIgIgOQgDgDgDgBIgKgBIgDAAIAAAoIgUAAIAAhfIApAAQANAAAHADQAHADAFAGQAEAHAAAIQAAALgHAHQgGAFgNACQAHAEAEAEIALAQIAMATgAgWgGIAOAAQAMAAADgBQAEgBACgDQACgDAAgEQAAgFgDgDQgCgDgFgBIgMAAIgPAAg");
	this.shape_4.setTransform(-12.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E42320").s().p("AgjAwIAAhfIBFAAIAAARIgyAAIAAAVIAvAAIAAAOIgvAAIAAAbIA0AAIAAAQg");
	this.shape_5.setTransform(-22.4,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E42320").s().p("AgIAwIAAhOIgdAAIAAgRIBLAAIAAARIgdAAIAABOg");
	this.shape_6.setTransform(-31.1,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E42320").s().p("AASAwIglg9IAAA9IgSAAIAAhfIATAAIAmA/IAAg/IASAAIAABfg");
	this.shape_7.setTransform(-40.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E42320").s().p("AgjAwIAAhfIBFAAIAAARIgyAAIAAAVIAuAAIAAAOIguAAIAAAbIA0AAIAAAQg");
	this.shape_8.setTransform(-49.2,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E42320").s().p("AgHAwIAAgTIAQAAIAAATgAgEAXIgEgvIAAgXIASAAIAAAXIgFAvg");
	this.shape_9.setTransform(32.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E42320").s().p("AghAkQgMgNAAgXQAAgNAEgJQADgIAGgGQAGgGAHgCQAIgEALAAQAVAAANANQAMANAAAWQAAAXgMANQgNANgVAAQgUAAgNgNgAgSgXQgHAIAAAPQAAAQAIAIQAHAJAKAAQALAAAHgJQAIgIAAgQQAAgPgHgIQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(12.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:-49.2,y:0.7}},{t:this.shape_7,p:{x:-40.1,y:0.7}},{t:this.shape_6,p:{x:-31.1,y:0.7}},{t:this.shape_5,p:{x:-22.4,y:0.7}},{t:this.shape_4,p:{x:-12.8,y:0.7}},{t:this.shape_3,p:{x:0.2,y:0.7}},{t:this.shape_2},{t:this.shape_1,p:{x:21.9,y:0.7}},{t:this.shape}]}).to({state:[{t:this.shape_8,p:{x:-46.9,y:2}},{t:this.shape_7,p:{x:-37.8,y:2}},{t:this.shape_6,p:{x:-28.8,y:2}},{t:this.shape_5,p:{x:-20,y:2}},{t:this.shape_4,p:{x:-10.4,y:2}},{t:this.shape_3,p:{x:2.5,y:2}},{t:this.shape_10},{t:this.shape_1,p:{x:24.2,y:2}},{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E42320").ss(1,1,1).p("AoPh1IQfAAIAADrIwfAAg");
	this.shape_11.setTransform(-10.3,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AoPB2IAAjrIQfAAIAADrg");
	this.shape_12.setTransform(-10.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{x:-10.3,y:0.3}},{t:this.shape_11}]}).to({state:[{t:this.shape_12,p:{x:-9.1,y:1.5}}]},1).wait(1));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,51,51,0.8)").s().p("AoPB2IAAjrIQfAAIAADrg");
	this.shape_13.setTransform(-5.5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1).to({x:-8.5,y:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-12.5,111.4,29.4);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgpic();
	this.instance.setTransform(-362,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362,-180,724,360);


(lib._5000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC932A").s().p("AAnCHQgEgBABgDIAXhuIh+AAIgXBuQgBADgEABIg6AAIgDgBQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIA4kGQABgCAEAAIA6AAQAFAAgBACIgUBgIB+AAIAUhgQABgCADAAIA7AAQAEAAgBACIg4EGQgBADgDABg");
	this.shape.setTransform(31.3,13.6,0.233,0.233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC932A").s().p("AiICFQgFgBADgEIATgzQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIADAAQAnAJA0AAQAjAAAMgGQALgFAEgSQADgPgKgFQgLgGgsgEQg0gEgTgSQgVgQAIglQALgyAlgUQAjgUBIAAQAqAAAwAIQAEACgDAEIgTAyQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgDAAQglgJgxAAQgjAAgLAFQgKAFgEARQgDAQAJAEQAJAEArAFQA3AFAUASQAUASgIAmQgLAwgmAVQgkAThIAAQg1ABgogIg");
	this.shape_1.setTransform(23.8,13.6,0.233,0.233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC932A").s().p("ABRCGIgJg9Ih7AAIgkA9QgCAEgEgBIg3gMQgEAAABgEICZj+QACgDAEAAIBdAAQAFAAAAADIAuD+QABADgFABIg9AMIgCAAQgDAAgBgDgAgWAXIBWAAIgRh5g");
	this.shape_2.setTransform(16.3,13.7,0.233,0.233);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC932A").s().p("Ah3BvQgcggARhPQARhSAqgeQAmgcBRAAQAxAAAnAIIABABIAAADIgUA1QgCAEgDgBQgkgJgpAAQgvAAgOAMQgRAOgLA3QgMA4AKAOQAJAMAvAAQAnAAApgIIADAAQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCA1QABAEgFABQgqAHgugBQhSAAgbgdg");
	this.shape_3.setTransform(10.5,13.6,0.233,0.233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjsDiQgxhEAjijQAiihBMhAQBFg5CCAAQCFAAAsA5QAyBAgiChQgkCjhNBEQhGA+iCAAQiDAAgsg+gAg/iMQgXAZgXBuQgZBwAMAcQAMAdBMAAQBKAAAZgdQAYgcAZhwQAXhugMgZQgNgahNAAQhKAAgYAag");
	this.shape_4.setTransform(31.6,0.8,0.233,0.233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjsDiQgxhEAjijQAiihBNhAQBEg5CCAAQCFAAAsA5QAyBAgiChQgjCjhOBEQhGA+iCAAQiDAAgsg+gAg/iMQgYAZgXBuQgYBwAMAcQANAdBMAAQBKAAAZgdQAXgcAZhwQAXhugMgZQgNgahNAAQhLAAgXAag");
	this.shape_5.setTransform(17.6,0.8,0.233,0.233);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjtDiQgwhEAjijQAiihBMhAQBFg5CCAAQCFAAAsA5QAyBAgiChQgjCjhOBEQhGA+iCAAQiDAAgtg+gAg/iMQgYAZgXBuQgYBwAMAcQAMAdBMAAQBLAAAZgdQAXgcAZhwQAXhugMgZQgNgahNAAQhLAAgXAag");
	this.shape_6.setTransform(3.5,0.8,0.233,0.233);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWBiQgJAAAEgIIA6ixQAGgKAJAAIBlANQAHAAACAEQACAEgDAEIhbCiQgFAIgHAAg");
	this.shape_7.setTransform(-8.3,7.7,0.233,0.233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AizEXQg4gFgogGQgHgBAFgKIAjhkQADgGAIABQAbAIA7AEQA0AEAxAAQBDAAAVgNQATgLAJgrQAKgsgPgLQgQgMhBAAIi5AAQgKAAABgIIA/kpQADgKAKAAIGVAAQAJABgCAGIgVBgQgBAHgJAAIkZAAIgWBqIA7AAQCOAAAyAkQAyAigTBbQgXBqhIApQhDAmiSAAQgxAAgygCg");
	this.shape_8.setTransform(-17.2,1,0.233,0.233);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhoFrQgJAAABgHIAPhHQhVAAhegQQgDAAgBgEQgBgDADgEIAlhjQABgDAEgBQAEgCACABQBFARBZABIAbiAQhngKgoghQgsghAQhKQAShUA5gqQA5goBrgJIAPhKQACgHAHAAIBFAAQADAAACACQACACAAADIgPBIQBLAABeAQQAGAAgEALIgkBjQgDAGgJgBQhDgRhQgCIgaB7QBnALAqAjQArAjgPBIQgTBXg6AqQg5AohsAJIgQBJQgBAHgIAAgAALCsQApgEARgNQAQgNAGgcQAGgegIgMQgLgOgqgFgAg5iZQgPAMgFAcQgGAdAJALQAKAMAoAFIAYhxQgoADgRANg");
	this.shape_9.setTransform(-31.2,0.8,0.233,0.233);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC932A").s().p("AheDJQgDAAgCgCQgCgCAAgDIAfiPIixAAQgDAAgCgCQgCgDAAgDIAThWQACgHAJAAICwAAIAeiPQACgHAJAAIBmAAQAEAAACACQACACgBADIgeCPICvAAQAJAAgCAHIgTBWQAAADgDADQgDACgEAAIivAAIgfCPQgCAHgIAAg");
	this.shape_10.setTransform(-4,-12.2,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-16.8,75.6,33.8);


// stage content:
(lib._300x250_RZR_AdWords_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 20
	this.instance = new lib.btn();
	this.instance.setTransform(245.6,261.4);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({y:225.4},4).wait(321));

	// win
	this.instance_1 = new lib.wina();
	this.instance_1.setTransform(-74.3,21.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:55.7},9).wait(338));

	// Layer 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsHCaIClkzIVqAAIikEzg");
	this.shape.setTransform(-85.3,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsHCaICkkzIVqAAIikEzg");
	this.shape_1.setTransform(-70.9,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsGCaICkkzIVpAAIijEzg");
	this.shape_2.setTransform(-56.4,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsHCaICkkzIVrAAIilEzg");
	this.shape_3.setTransform(-42,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AsGCaICjkzIVqAAIikEzg");
	this.shape_4.setTransform(15.8,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-85.3}}]},30).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:-56.4}}]},1).to({state:[{t:this.shape_3,p:{x:-42}}]},1).to({state:[{t:this.shape_2,p:{x:-27.5}}]},1).to({state:[{t:this.shape_2,p:{x:-13.1}}]},1).to({state:[{t:this.shape_3,p:{x:1.3}}]},1).to({state:[{t:this.shape_4,p:{x:15.8}}]},1).to({state:[{t:this.shape,p:{x:30.2}}]},1).to({state:[{t:this.shape_4,p:{x:44.7}}]},1).wait(338));

	// Ñëîé 1
	this.instance_2 = new lib._5000();
	this.instance_2.setTransform(340.3,180.6,0.913,0.913);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({x:250.3},4).wait(325));

	// Layer 9
	this.instance_3 = new lib.Lights();
	this.instance_3.setTransform(69.5,112,1.843,1.273,0,20.8,-159.2);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({_off:true},6).wait(44).to({_off:false},0).to({_off:true},6).wait(47).to({_off:false},0).to({_off:true},6).wait(61).to({_off:false},0).to({_off:true},6).wait(47).to({_off:false},0).to({_off:true},6).wait(58));

	// Layer 8
	this.instance_4 = new lib.Lights();
	this.instance_4.setTransform(39.6,147.5,1,1,0,0,0,-28,21.8);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).to({_off:true},6).wait(44).to({_off:false},0).to({_off:true},6).wait(47).to({_off:false},0).to({_off:true},6).wait(61).to({_off:false},0).to({_off:true},6).wait(47).to({_off:false},0).to({_off:true},6).wait(58));

	// Layer 7
	this.instance_5 = new lib.Lights();
	this.instance_5.setTransform(154.9,111.5,1.843,1.273,0,20.8,-159.2);
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({_off:true},6).wait(347));

	// Layer 5
	this.instance_6 = new lib.Lights();
	this.instance_6.setTransform(122.4,145.9,1,1,0,0,0,-28,21.8);
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({_off:true},6).wait(347));

	// RZR
	this.instance_7 = new lib.RZR();
	this.instance_7.setTransform(356.9,184.2,0.144,0.144,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:195,y:166.5},24,cjs.Ease.get(1)).wait(6).to({regX:0.3,regY:0.1,scaleX:0.69,scaleY:0.69,x:108.6,y:166.2},9,cjs.Ease.get(1)).wait(338));

	// Layer 12
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(237.9,-20.3);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(191.9,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},39).to({state:[{t:this.instance_9}]},5).wait(333));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({_off:true,x:191.9,y:59.7},5).wait(333));

	// Layer 1
	this.instance_10 = new lib.polarislogo();
	this.instance_10.setTransform(209.4,-54.2,0.556,0.556,0,0,0,0,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).to({x:163.4,y:25.8},4).wait(329));

	// Ñëîé 2
	this.instance_11 = new lib.xpturbo();
	this.instance_11.setTransform(324.5,146.6,0.31,0.31,0,0,0,0,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({x:224.5},4).wait(329));

	// Layer 14
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(228,35,32,0)","#E42320"],[0,1],-167.5,0,167.5,0).s().p("A6KAsIAAhXMA0VAAAIAABXg");
	this.shape_5.setTransform(467.5,122.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(228,35,32,0)","#E42320"],[0,1],-167.5,0,167.5,0).s().p("A6KCfIAAk9MA0VAAAIAAE9g");
	this.shape_6.setTransform(355.9,122.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(228,35,32,0)","#E42320"],[0,1],-167.5,0,167.5,0).s().p("A6JD5IAAnxMA0TAAAIAAHxg");
	this.shape_7.setTransform(269.1,122.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(228,35,32,0)","#E42320"],[0,1],-167.5,0,167.5,0).s().p("A6KE5IAApxMA0UAAAIAAJxg");
	this.shape_8.setTransform(207.1,122.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(228,35,32,0)","#E42320"],[0,1],-167.5,0,167.5,0).s().p("A6JFfIAAq9MA0UAAAIAAK9g");
	this.shape_9.setTransform(169.9,122.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(228,35,32,0)","#E42320"],[0,1],-167.5,0,167.5,0).s().p("A6JFsIAArXMA0TAAAIAALXg");
	this.shape_10.setTransform(157.5,122.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},39).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(333));

	// Layer 17
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(51,51,51,0)","#333333"],[0,1],-158.1,0,158.1,0).s().p("A4sDbIAAm1MAxZAAAIAAG1g");
	this.shape_11.setTransform(374.4,181.1,0.469,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(51,51,51,0)","#333333"],[0,1],-95.1,0,95.1,0).s().p("Au1DbIAAm1IdrAAIAAG1g");
	this.shape_12.setTransform(316.9,181.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(51,51,51,0)","#333333"],[0,1],-116.1,0,116.1,0).s().p("AyHDbIAAm1MAkQAAAIAAG1g");
	this.shape_13.setTransform(259.4,181.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(51,51,51,0)","#333333"],[0,1],-137.1,0,137.1,0).s().p("A1aDbIAAm1MAq0AAAIAAG1g");
	this.shape_14.setTransform(201.9,181.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11,p:{scaleX:0.469,x:374.4}}]},44).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_11,p:{scaleX:1,x:144.4}}]},1).wait(329));

	// BG
	this.instance_12 = new lib.BG();
	this.instance_12.setTransform(360,179.1,1,1,0,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0.3,regY:0.2,scaleX:0.9,scaleY:0.9,x:325,y:128.4},24,cjs.Ease.get(1)).wait(6).to({regY:0.4,scaleX:0.84,scaleY:0.84,x:230.4,y:130.5},9,cjs.Ease.get(1)).wait(338));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.5,123.5,724,360);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;