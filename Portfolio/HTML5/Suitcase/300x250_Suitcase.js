(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_Suitcase_atlas_P_", frames: [[222,357,215,69],[0,0,300,250],[222,252,225,103],[0,252,220,200],[0,629,222,37],[323,506,93,66],[323,428,99,76],[222,428,99,148],[302,0,208,85],[0,524,208,65],[302,196,208,48],[0,591,208,30],[0,668,208,10],[224,664,215,18],[224,629,221,33],[210,578,225,49],[0,454,199,68],[302,87,160,107]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Растровоеизображение1 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250_txt = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.band = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.band_open = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bnd_torec = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.kreslo_l = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.kreslo_r = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.palma = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.scr1 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.scr2 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.scr3 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.scr4 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.scr5 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.scr6 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.scr7 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.scr8 = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Trava = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.zont = function() {
	this.spriteSheet = ss["300x250_Suitcase_atlas_P_"];
	this.gotoAndStop(17);
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


(lib.zont_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zont();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zont_1, new cjs.Rectangle(0,0,160,107), null);


(lib.txt0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBFIAAgeIAaAAIAAAegAgMAZIgChdIAdAAIgCBdg");
	this.shape.setTransform(55.4,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBFIAAhxIgqAAIAAgYIBxAAIAAAYIgrAAIAABxg");
	this.shape_1.setTransform(46.7,-13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbBFIAAg6Ig2AAIAAA6IgdAAIAAiJIAdAAIAAA1IA2AAIAAg1IAeAAIAACJg");
	this.shape_2.setTransform(33.7,-13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXBEQgMgGgIgJQgIgKgFgNQgEgOAAgQQAAgQAFgOQAEgNAJgKQAIgJAMgFQALgFAOAAQANAAAKAEQAKACAGAHQAHAFAFAIQADAIACAIIgdAEIgCgJQgCgEgEgCQgDgEgEgBQgFgBgHgBQgQAAgIANQgJANAAAWQAAAXAJAMQAIANASABQAJAAAIgCQAGgDAGgDIAAgYIgaAAIAAgWIA1AAIAAA5QgKAKgPAGQgPAFgQAAQgQAAgMgFg");
	this.shape_3.setTransform(19.5,-13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOBFIAAiJIAcAAIAACJg");
	this.shape_4.setTransform(9.7,-13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguBFIAAiJIAdAAIAABwIBAAAIgDAZg");
	this.shape_5.setTransform(1.6,-13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgtBFIAAiJIBaAAIAAAYIg9AAIAAAhIA6AAIAAAYIg6AAIAAA4g");
	this.shape_6.setTransform(-9.8,-13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwBFIAAiJIBdAAIAAAYIhAAAIAAAfIA8AAIAAAYIg8AAIAAAiIBEAAIgDAYg");
	this.shape_7.setTransform(-25.5,-13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAcBFIAAg6Ig2AAIAAA6IgeAAIAAiJIAeAAIAAA1IA2AAIAAg1IAcAAIAACJg");
	this.shape_8.setTransform(-38.9,-13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOBFIAAhxIgpAAIAAgYIBvAAIAAAYIgpAAIAABxg");
	this.shape_9.setTransform(-52,-13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAaBFIgmhDIgRARIAAAyIgdAAIAAiJIAdAAIAAA3IAyg3IAhAAIguA0IAyBVg");
	this.shape_10.setTransform(22.3,-34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBEQgNgFgIgJQgJgKgEgOQgFgNAAgRQAAgQAFgOQAEgNAJgJQAIgKANgFQAMgFAOAAQAQAAAMAFQANAFAIAKQAIAJAFANQAEAOAAAQQAAARgEANQgEAOgJAKQgIAJgNAFQgMAFgQAAQgOAAgMgFgAgagiQgJAMAAAWQAAAXAJANQAJAMARAAQASAAAJgMQAJgNAAgXQAAgWgJgMQgJgNgSAAQgRAAgJANg");
	this.shape_11.setTransform(7.3,-34.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaBEQgNgFgIgJQgJgKgEgOQgFgNAAgRQAAgQAFgOQAEgNAJgJQAIgKANgFQAMgFAOAAQAQAAAMAFQANAFAIAKQAIAJAFANQAEAOAAAQQAAARgEANQgEAOgJAKQgIAJgNAFQgMAFgQAAQgOAAgMgFgAgagiQgJAMAAAWQAAAXAJANQAJAMARAAQASAAAJgMQAJgNAAgXQAAgWgJgMQgJgNgSAAQgRAAgJANg");
	this.shape_12.setTransform(-7.9,-34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag0BFIAAiJIAzAAQAOAAAJACQALADAFAFQAHAFABAHQADAHAAAIQAAAIgDAIQgEAGgKAFIALAHQADADACAFQADADABAFIABAJQAAAIgDAIQgDAIgGAFQgGAGgKADQgKAEgOgBgAgYAvIAYAAIALgBQAFgCADgDIAEgFIACgIQgBgKgFgFQgEgEgNAAIgaAAgAgYgOIAZAAQALAAAFgEQADgEAAgIQAAgIgFgEQgFgEgNAAIgVAAg");
	this.shape_13.setTransform(-21.3,-34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt0, new cjs.Rectangle(-62.1,-50.5,124.3,52.6), null);


(lib.trava = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Trava();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.trava, new cjs.Rectangle(0,0,199,68), null);


(lib.shadow_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_2, new cjs.Rectangle(0,0,215,69), null);


(lib.palma_dv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.palma_dv, new cjs.Rectangle(0,0,99,148), null);


(lib.logo_auto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339900").s().p("AOUBeIgDAAIgCgDIgOgYIhDAAIgPAYIgBADIgEAAIggAAIgFgBIgCgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAIBHiBIADgCIADgBIAfAAIADABIADACIBJCBIAAAEIgBAEIgFABgANRAbIAdAAIgPgagAJxBeQgWAAgJgIIAAAAQgIgJgBgVIAAhhQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAiAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAABeIBCAAIAAheQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAiAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAABhQAAAVgKAJQgIAIgVAAgAH7BeQgIAAgDgFQgEgEAAgIIAAgUQAAgKAFgDQACgFAMAAIAWAAQAIAAADAFQADAFAAAIIAAAUQAAAJgDADQgDAFgNAAgAGxBeIgEAAIgCgDIgNgYIhEAAIgOAYIgCADIgDAAIghAAIgDgBIgDgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIBIiBIADgCIADgBIAfAAIADABIACACIBJCBIABAEIgCAEIgEABgAFuAbIAdAAIgPgagADeBeQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAiBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIAjAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIAACBQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAgACDBeIgFgBIgwguIgPAAIAAApQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIghAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAiBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAABAAIBtAAQARAAAKAIQAKAIAAARIAAAcQAAASgLAHIABAAQgIAIgPAAIAsAkIACAEIAAADIgDADIgEABgAA/AIIA5AAIAEAAIAAgBIAAgPIgEAAIg5AAgAg8BeQgIAAgEgFQgDgEAAgIIAAgUQAAgKAEgDQADgFAMAAIAVAAQAIAAAEAFQACAFAAAIIAAAUQAAAJgCADQgDAFgNAAgAiWBeIgEAAIgCgDIgSgiIhgAAIgSAiIgCADIgDAAIgsAAIgFgBIgCgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIBhivIACgCQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIApAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAIADACIBjCvIAAAEIgBAEIgFABgAj1AIIAuAAIgWgpgAmyBeQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAiuQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAgBQABAAAAAAQABAAAAAAIAuAAQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAACuQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABIgFABgApcBeIgCAAIgCgDIhjivQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIADgDQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIAzAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAIADACIA8BvIA7huQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAtAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAIABADIAAAEIhfCvIgDADIgCAAgAr9BeIgDAAIgCgDIgTgiIhgAAIgSAiIgCADIgDAAIgtAAIgEgBIgBgEIABgEIBhivIACgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAqAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIBjCvIABAEIgCAEIgEABgAtcAIIAvAAIgXgpg");
	this.shape.setTransform(-0.1,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_auto, new cjs.Rectangle(-96,-24,191.9,18.8), null);


(lib.Kreslo_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kreslo_r();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Kreslo_r, new cjs.Rectangle(0,0,99,76), null);


(lib.kreslo_l_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kreslo_l();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kreslo_l_1, new cjs.Rectangle(0,0,93,66), null);


(lib.улетаешь = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnByQgVgJgOgQQgOgQgHgXQgGgXAAgbQAAgcAHgWQAIgXAOgQQAOgQAUgIQATgJAYAAQAWAAARAGQAQAFALAKQAMAKAGANQAHANADAPIgxAGQgBgIgDgHQgDgHgFgFQgGgEgHgDQgIgCgMAAQgcAAgOAVQgOAVAAAmQAAAnAPAVQAOAVAfAAQAPAAAMgDQALgDAKgHIAAgnIgsAAIAAgnIBZAAIAABiQgRAQgZAKQgZAJgbAAQgbAAgUgJg");
	this.shape.setTransform(208.1,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyB1IhfiXIAACXIgwAAIAAjpIAsAAIBfCYIAAiYIAwAAIAADpg");
	this.shape_1.setTransform(184.4,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_2.setTransform(168,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_3.setTransform(150.4,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnByQgVgJgOgQQgOgQgHgXQgGgXAAgbQAAgcAHgWQAIgXAOgQQAOgQAUgIQATgJAYAAQAWAAARAGQAQAFALAKQAMAKAGANQAHANADAPIgxAGQgBgIgDgHQgDgHgFgFQgGgEgHgDQgIgCgMAAQgcAAgOAVQgOAVAAAmQAAAnAPAVQAOAVAfAAQAPAAAMgDQALgDAKgHIAAgnIgsAAIAAgnIBZAAIAABiQgRAQgZAKQgZAJgbAAQgbAAgUgJg");
	this.shape_4.setTransform(125.8,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnByQgRgGgMgMQgMgNgHgTQgGgTAAgbIAAiJIAwAAIAACKQAAAeALAOQALAPAXAAQAZAAAKgPQAKgOAAgeIAAiKIAxAAIAACKQAAAbgHATQgGATgMAMQgMAMgSAGQgSAGgVAAQgVAAgSgGg");
	this.shape_5.setTransform(95.3,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_6.setTransform(71.2,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWB1IAAhfIhRiKIA2AAIAyBfIA0hfIAzAAIhOCKIAABfg");
	this.shape_7.setTransform(50,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhSB1IAAjpICfAAIAAAqIhuAAIAAAzIBmAAIAAApIhmAAIAAA5IB0AAIgFAqg");
	this.shape_8.setTransform(23.8,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAoB1IgnhYIgtAAIAABYIgwAAIAAjpIBTAAQAaAAASAHQASAGAKAKQAKALAEAMQAEANAAAMQAAAWgIAQQgIAOgTALIAvBjgAgsgLIAmAAQAKAAAIgCQAIgDAEgEQAEgEACgHQACgGgBgHQAAgHgCgFQgCgGgEgEQgFgFgIgCQgIgDgMAAIgiAAg");
	this.shape_9.setTransform(3.4,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7B1IgTg2IhQAAIgTA2IgzAAIBYjpIAtAAIBYDpgAAbAWIgbhSIgdBSIA4AAg");
	this.shape_10.setTransform(-19.9,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgnByQgVgJgOgQQgOgQgHgXQgGgXAAgbQAAgcAHgWQAIgXAOgQQAOgQAUgIQATgJAYAAQAWAAARAGQAQAFALAKQAMAKAGANQAHANADAPIgxAGQgBgIgDgHQgDgHgFgFQgGgEgHgDQgIgCgMAAQgcAAgOAVQgOAVAAAmQAAAnAPAVQAOAVAfAAQAPAAAMgDQALgDAKgHIAAgnIgsAAIAAgnIBZAAIAABiQgRAQgZAKQgZAJgbAAQgbAAgUgJg");
	this.shape_11.setTransform(209,35.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330000").s().p("AAyB1IhfiXIAACXIgwAAIAAjpIAsAAIBfCYIAAiYIAwAAIAADpg");
	this.shape_12.setTransform(185.3,35.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_13.setTransform(168.9,35.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_14.setTransform(151.3,35.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("AgnByQgVgJgOgQQgOgQgHgXQgGgXAAgbQAAgcAHgWQAIgXAOgQQAOgQAUgIQATgJAYAAQAWAAARAGQAQAFALAKQAMAKAGANQAHANADAPIgxAGQgBgIgDgHQgDgHgFgFQgGgEgHgDQgIgCgMAAQgcAAgOAVQgOAVAAAmQAAAnAPAVQAOAVAfAAQAPAAAMgDQALgDAKgHIAAgnIgsAAIAAgnIBZAAIAABiQgRAQgZAKQgZAJgbAAQgbAAgUgJg");
	this.shape_15.setTransform(126.7,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AgnByQgRgGgMgMQgMgNgHgTQgGgTAAgbIAAiJIAwAAIAACKQAAAeALAOQALAPAXAAQAZAAAKgPQAKgOAAgeIAAiKIAxAAIAACKQAAAbgHATQgGATgMAMQgMAMgSAGQgSAGgVAAQgVAAgSgGg");
	this.shape_16.setTransform(96.2,36);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_17.setTransform(72.1,35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330000").s().p("AgWB1IAAhfIhRiKIA2AAIAyBfIA0hfIAzAAIhOCKIAABfg");
	this.shape_18.setTransform(50.9,35.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AhSB1IAAjpICfAAIAAAqIhuAAIAAAzIBmAAIAAApIhmAAIAAA5IB0AAIgFAqg");
	this.shape_19.setTransform(24.7,35.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330000").s().p("AAoB1IgnhYIgtAAIAABYIgwAAIAAjpIBTAAQAaAAASAHQASAGAKAKQAKALAEAMQAEANAAAMQAAAWgIAQQgIAOgTALIAvBjgAgsgLIAmAAQAKAAAIgCQAIgDAEgEQAEgEACgHQACgGgBgHQAAgHgCgFQgCgGgEgEQgFgFgIgCQgIgDgMAAIgiAAg");
	this.shape_20.setTransform(4.3,35.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AA7B1IgTg2IhQAAIgTA2IgzAAIBYjpIAtAAIBYDpgAAbAWIgbhSIgdBSIA4AAg");
	this.shape_21.setTransform(-19,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.улетаешь, new cjs.Rectangle(-38,8,265.7,53.3), null);


(lib.button_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBGIAAggIAaAAIAAAggAgMAaIgChfIAdAAIgCBfg");
	this.shape.setTransform(54,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBGIgahnIgYBnIgbAAIgoiLIAgAAIAXBgIAXhfIAdAAIAYBfIAVhgIAfAAIglCLg");
	this.shape_1.setTransform(41.9,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBEQgNgFgIgJQgJgKgEgOQgFgNAAgRQAAgQAFgNQAEgOAJgKQAIgJANgFQAMgFAOAAQAQAAAMAFQANAFAIAJQAIAKAFAOQAEANAAAQQAAARgEANQgEAOgJAKQgIAJgNAFQgMAFgQAAQgOAAgMgFgAgagjQgJANAAAWQAAAXAJANQAJAMARAAQASAAAJgMQAJgNAAgXQAAgWgJgNQgJgMgSAAQgRAAgJAMg");
	this.shape_2.setTransform(25.2,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBGIg5haIAABaIgcAAIAAiLIAaAAIA4BaIAAhaIAdAAIAACLg");
	this.shape_3.setTransform(10.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaBGIgmhFIgRASIAAAzIgcAAIAAiLIAcAAIAAA4IAzg4IAfAAIguA0IA0BXg");
	this.shape_4.setTransform(-6.5,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBEQgNgFgIgJQgJgKgEgOQgFgNAAgRQAAgQAFgNQAEgOAJgKQAIgJANgFQAMgFAOAAQAQAAAMAFQANAFAIAJQAIAKAFAOQAEANAAAQQAAARgEANQgEAOgJAKQgIAJgNAFQgMAFgQAAQgOAAgMgFgAgagjQgJANAAAWQAAAXAJANQAJAMARAAQASAAAJgMQAJgNAAgXQAAgWgJgNQgJgMgSAAQgRAAgJAMg");
	this.shape_5.setTransform(-21.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBEQgNgFgIgJQgJgKgEgOQgFgNAAgRQAAgQAFgNQAEgOAJgKQAIgJANgFQAMgFAOAAQAQAAAMAFQANAFAIAJQAIAKAFAOQAEANAAAQQAAARgEANQgEAOgJAKQgIAJgNAFQgMAFgQAAQgOAAgMgFgAgagjQgJANAAAWQAAAXAJANQAJAMARAAQASAAAJgMQAJgNAAgXQAAgWgJgNQgJgMgSAAQgRAAgJAMg");
	this.shape_6.setTransform(-36.6,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBGIAAiLIAxAAQAOAAALAEQAKADAGAEQAFAGADAGQACAHAAAIQAAAIgEAHQgDAIgKAEIAKAGQAEAEADAEQACAEAAAFIABAIQABAJgDAIQgCAHgHAGQgGAGgKADQgKAEgPAAgAgYAuIAYAAIAMgBQAEgBAEgCIADgGIABgJQAAgJgEgFQgFgEgMAAIgbAAgAgYgOIAYAAQAMABAEgFQAFgEAAgIQAAgJgGgDQgGgEgMAAIgVAAg");
	this.shape_7.setTransform(-50,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AqECeQgwABAAgsIAAjlQAAgsAwABIUIAAQAxgBAAAsIAADlQAAAsgxgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:0,y:0}).wait(22).to({graphics:null,x:0,y:0}).wait(22));

	// Слой 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.008,0.353,0.706,1],43.2,-0.6,-43.1,0.7).s().p("AkomxINdgNIkLNwIteANg");
	this.shape_8.setTransform(-122.7,-8.2);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.008,0.353,0.706,1],43.2,-0.6,-43.1,0.7).s().p("AkomxINegNIkMNwIteANg");
	this.shape_9.setTransform(-110.5,-8.2);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.008,0.353,0.706,1],43.2,-0.6,-43.1,0.7).s().p("AkpmxINegNIkMNwItdANg");
	this.shape_10.setTransform(-98.2,-8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.008,0.353,0.706,1],43.2,-0.6,-43.1,0.7).s().p("AkpmxINegNIkLNwIteANg");
	this.shape_11.setTransform(-85.9,-8.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.008,0.353,0.706,1],43.2,-0.6,-43.1,0.7).s().p("AkomxINegNIkMNwItfANg");
	this.shape_12.setTransform(-49.2,-8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.008,0.353,0.706,1],43.2,-0.6,-43.1,0.7).s().p("AkomxINegNIkNNwIteANg");
	this.shape_13.setTransform(110.2,-8.2);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},16).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:-85.9}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:-49.2}}]},1).to({state:[{t:this.shape_11,p:{x:-36.9}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:-0.1}}]},1).to({state:[{t:this.shape_11,p:{x:12.2}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:48.9}}]},1).to({state:[{t:this.shape_11,p:{x:61.2}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:98}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(16).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-73.7},0).to({_off:true},1).wait(3).to({_off:false,x:-24.6},0).to({_off:true},1).wait(3).to({_off:false,x:24.4},0).to({_off:true},1).wait(3).to({_off:false,x:73.5},0).to({_off:true},1).wait(3).to({_off:false,x:122.5},0).wait(1).to({x:134.8},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(17).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-61.4},0).to({_off:true},1).wait(3).to({_off:false,x:-12.4},0).to({_off:true},1).wait(3).to({_off:false,x:36.7},0).to({_off:true},1).wait(3).to({_off:false,x:85.7},0).to({_off:true},1).wait(26));

	// Слой 5
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#339900").s().p("AqbC4QgyAAAAgzIAAkJQAAgzAyAAIU3AAQAyAAAAAzIAAEJQAAAzgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.8,-18.3,143.6,36.7);


(lib.btn_torrec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bnd_torec();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_torrec, new cjs.Rectangle(0,0,222,37), null);


(lib.bnd_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.band_open();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bnd_open, new cjs.Rectangle(0,0,220,200), null);


(lib.bg_blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bFeIAAq7MAu3AAAIAAK7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72AC31").s().p("A3bF8IAAgeMAu3AAAIAAAegA3bldIAAgeMAu3AAAIAAAeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_blank, new cjs.Rectangle(-150,-38,300,76), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.band();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,225,103), null);


(lib.baterfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bater
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdASIAAgBIgDgEIgCgDIAAAAIgCgDIAAAAIgBAAIgBgCIgBgBIgBAAIgCgBQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBACIgBABIgDAFIAAABIgEADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBABIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgBgBIAAgCIAAgKQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQgBACgDAAIgBAAIgFgBIgCAAIgGAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCABIgEABIgFAAIAAgBIgBgBIABgBIABgCIAAAAQADgDAEgCIAKgGIAHgDIACAAIABgBIABgBIAIgBIABgCQAAAAABAAQAAgBAAAAQABAAAAAAQABgBABAAIACABIAAACIAAADIAAAAIAAAAIAEABIAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAgBIABABIACABIACACIAGAHIAAABIABABIAAADIAAABIABAAIAAABQAAABgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgBIgCAAIgBAAIACADIABABIAAAEIAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABgBAAIAAABIAAADIAAACIgCgDg");
	this.shape.setTransform(-23.3,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXAWIgBgDIAAgBIAAgDIAAgDIAAgCIAAgBIgBACIgCADIgBABIgBABIgEADQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBAAIgDAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBAAIgBAAIgCACIAAgDIAAAAIAAAAIgBgEIAAgBIAAgEIgCgCIAAAAIgCgBIgBgBIAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAABIgDAAIAAgBQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAIAAAAIgBgBIgBAAIAAgBIAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAAAIgFAAIABgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAgBIABgDIABgDIABgBIACgCIADgCIAJgDIAEAAIABgBIABgBIAFgBIABAAIAEgBIADAAIADABIAAAAIABAAIAAgBIADgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAAAAIgBADIACgBIAAABIADAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIADADQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIAAABIABABIgBAEIAAACIgBAAIAAABIAAACIAAAAIAAAIIAAAGIAAAAIgBADIAAABIgCAGIgCABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBgAAVAHIABAAIgBgCgAATgGQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAAACIAAAAIAAgCIAAgCIgBgBIgBgCgAATgIIAAABIAAgBIAAAAg");
	this.shape_1.setTransform(-23.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAaIgIgFIAAgDIAAgBIgBABIABAAIgEAFQgDADgFAAQgBAAgJgIQgJgIAAgEQAAgCAEgDIAFgBIAAgBIAAAAQgGgBgFgDQgFgDAAgEIAAgDIACgCIgEgFIgDgHIADAAIAEACIANgBIAKACQAKACAGAKIACgBIABABIABACQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAAgBQAKgFAFgCQAIgCALAAIAIABIAIABIAAABIAAAAQgCABgBADIgEAFQgEAFgFgBIAAABIACAAIgIAJQgHAFgHgBIAFADIAAAEQAAAEgEAGQgFAGgEAAQgCAAgGgEg");
	this.shape_2.setTransform(-21.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAXQgBgDAAgEIABgGIADgHIgCAAIgBAAIgBgHIgDgIIAAgRIABAAIAHAMQAFAIABAFIAGgBIABABIALgHIARgHIgRAcQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgCgDIACAFIgGAJIgIAJIgEAAIACgEIgFAFg");
	this.shape_3.setTransform(-19.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAUIgBgCIgBACQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgFgIQgFgHAAgCQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABgBIADgBQgGABgEgGIgEgNIAAgFIABAAIAQAJIALAHQAEgJABAKIAQgCIAQgDIgEADIgFAEIAAAAIABABQgCADgGACIgIAEIABADQAAADgIAFIgJAHQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_4.setTransform(-17.9,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAOQgGgEAAgDIgBAAIgBAAQgDAHgHAAQgFAAgCgDIgGgGIABgBIABgDIAAAAIgDABQgCAAgMgQIAogDIAGAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABQACADAIAFIAAABIgCgBIAEAGQADAGADABIgFAGQgCADgDAAQgEAAgFgEg");
	this.shape_5.setTransform(-17.8,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAUIgBgFIACgHIAAAAIgBgCIgBABIgEgDIgJgEIAAAAIABgEQABgDACgBQACgCAGgDIAHgEIABAAQAEgFACgBQADgBAAAGIgBACIABADQABAGABAAQAAAIgEAGIgLARIgCgEg");
	this.shape_6.setTransform(-16.2,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAhIgHAAQgCAAgCgDIgCgGIACgHIgBgBQgDALgFAAQgEAAgGgFQgGgGAAgFQAAgEACgFIAAAAQACgCACgCIgHADIgEgHIgCgFIABgCIACgCIgBgBIAAAAIgBABIgDAAQgBAAgDgFIgCgIIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAIABQANAAAIAFQAGADAFAKIACABQACgCAEAAIAAAAIABACIgBAEIACAAIADAAIAWAAIgDAHIgDAGQgEAIgHACQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBgBIgCgDIAAAAIACAIIABABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCAEIgBAJg");
	this.shape_7.setTransform(-14.8,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAiQgFgBgBABIgBgJIgCgEIgFAFIgDAAIABgFIgBgIIgBgHQAAgEABgCIAFgEIgDgEIgBgEQAAgGABgGQACgGADgDIAAgBIAFATIACAGIACAAIAEAAIABABIAAACIACgBIAHgCIALgCQADAAAMADQAMACACACIgNALQgJAJgFAAIgCAAIgEgDIAAABIABAGQAAADgFAGQgHAGgDAAgAgSAAIABAAIgBAAIAAAAg");
	this.shape_8.setTransform(-11.6,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAVIgCACIgFADIgEAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIAAAAIACgFIACgGIAFgEIACgEIAAgEIgBgEIACgRIADgRQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQABACAAADQAAAFgCAIQgCAHAAAFQACgBAFAAIABAAIALgGQAPgIAFAAIABABIgKANIgKAOIgHgCIACAEIACADQAAAEgWANQACgEAAgJg");
	this.shape_9.setTransform(-11.2,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAVIgCACQgDADgCAAIgEAAIgDACIACgFIADgGIAEgEQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgEIgBgEIADgRIADgRQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADQAAAGgCAHQgDAHAAAFIAAAAQADgBAGAAIAAABIALgHQAPgIAFAAIABABIgKAOIgKANIgHgCIACAEIACADQAAAFgWAMQABgEABgJg");
	this.shape_10.setTransform(-10,-1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAXIABgBIgBgBIgBgEIAAgBIAAgBIgDgGIgCgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAIAAAAIABgDIADgIIABgBQAEgFABgGIABgFIABgCIABgCQADACgBAFIAAAJIAAABIABAEQABgDAEgCIAAgBIACgBIAHgGQACgDAFgCQACADgCAEIgBACIgBAFIgBABQAAAEgCACQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgCACIgDADQgCADgBAGIAAABIAAAAIgBADQgDAGgDACQgCAEgEABIgFAAIAAABQgCgCAAgFg");
	this.shape_11.setTransform(-9.2,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIATIgBAAIgBgBIgBAAIAAABIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIAAgBIAAABIgBgBIgGAAQgDAAgCgDIgBgCIgBgCIAAgBIgCgCIgBAAIgBgBIgCgCIgBgBIgLgFIANAEIACAAIABAAIABABIABAAIABABIAEgBIAAABIAAgBQAAgCAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIABAAQAEgBADgCIAIgGQACgDADgBIABAAIAEgCIADgDIAEgBIABAAIAAACIAAABIgFAHIgBABIgBACIAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIABAAIAAADIAAACIAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAABIABAEIAAABIgBACIgBABQgCADgGABIgHAAIgDgBgAgDAHIABABIABABIABAFIAAABIAAgGQgCgDgDAAIACABgAgLgEQgPgIgDgFIABgCQAEABAGAFQAGAFADADIgBABg");
	this.shape_12.setTransform(-8.8,-3.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcASIAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgBgCIgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIgBAAIAAAAIgCgCIgBAAIAAgBIgCgBIAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgBACIgBAAIAAABIgDAFIgBABIgCADQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgCABQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIgBgCIAAgIIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgCABgDABIgEAAIgEAAIAAAAIgEAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgDAAIgDABIgBAAIgCAAIgCAAIgBAAIAAgBIAAgCIACgCIABAAQACgDADgBIAKgHIAHgDIACAAIACgBIABgBIACgBIAGAAIABgCQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIAAABIAAADIgBAAIABAAIAEABIABAAIACABIADACIACABIAGAHIAAABIAAABIABADIABACIAAABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAIAAgBIgCAAIgBAAIACADIABABIAAAEIAAABIABADIAAABIgBAEIAAACIgCgEg");
	this.shape_13.setTransform(-4,-4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkAjQABgDgBgCIgBgBIABgGIAAgEIAAgDIgBgCIgBADIgEAEQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAABIgBABIgGAGQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgCAAQgDgBgCABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgBAAIgBAAIgCABIgDACIAAgFIAAABIgBAAIgBgHIAAgCQABgCgCgDIgCgEIAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBAAIAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBABIgDABIAAgDQgCgCgEABIgBABQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAgBIgBgCIgBAAQgBABAAAAQgBAAgBAAQAAgBAAAAQgBgBAAgBIAAAAIgGAAIABgCQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBAAQgDgBgCgCIAAgCIAAgDIADgGIAAgBQACgCADgCIAFgCIAPgFIAEgBIADgBIACgBIAGgCIACAAIAIgBIADAAIAFAAIACABIAAAAIABgCIAAAAIABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAFgBAAAEIAAABIAAAFQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIABAAIAFABQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAFAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIABADIAAABIAAAGIgBADIgBABIAAABIAAADIAAABIAAABIgBAMIAAAIIAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABIAAABIgDAKIgCACQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBgAAiAKIAAABIAAgCgAAegNIABACIAAABQAAADACADIAAADIAAAAIAAgDIAAgBIAAgDIgBgBIgBgEIgBgBg");
	this.shape_14.setTransform(-9.9,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBAcIgIgFIAAgEIAAgBIgBAAIABABIgEAFQgDADgFAAQgCAAgJgIQgLgJAAgEQAAgCAFgDIAGgCIgBAAIAAgBQgHAAgEgDQgGgEAAgFIABgDIACgCIgFgFIgEgHIADAAIAFABIAOAAQAHAAAFABQAJADAIALIABgBIABAAIABADIAEgCIAAgBQALgFAHgCQAGgCANAAIAJAAIAIACIAAABIABAAIgEAEIgEAFQgEAFgGAAIABABIABAAIgJAJQgHAHgIgBIAFACIAAAFQAAAEgEAGQgEAHgGAAQgBAAgIgEg");
	this.shape_15.setTransform(-4,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAZQgCgCABgFIABgIIADgHQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIAAgBQAAgDgBgEIgCgJIAAgSIAAAAIAIAMQAFAKABAEIAHAAIAAAAIAAAAIANgHIARgIIgSAfQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgEIABAGIgGAJIgJAKIgEAAIABgEIgFAFg");
	this.shape_16.setTransform(-2.6,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJAWIgBgCIgBACQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgCAAgEgIQgFgIgBgCQAAgDADgBIADgCQgGACgEgHIgFgOIAAgGIABAAIARAKIAMAHQAFgJAAALIASgDIASgDIgEADIgGAFIABABIgJAFIgJAFIABABIABACQAAADgJAFIgKAIIgBgEg");
	this.shape_17.setTransform(-1.9,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPAPQgGgEgBgEIAAABIgBgBQgEAIgHAAQgFAAgDgCIgGgIIABgBIABgCIAAgCIgCACIgCAAQgCAAgNgRIAygDQABABAAAEQADAEAIAFIgBABIgCgBIAFAHQADAFAEADIgFAFQgDADgEAAQgEAAgFgEg");
	this.shape_18.setTransform(-1.8,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAWIgCgFIADgJIAAAAIgBgBIgCABIgDgDIgKgFIAAAAIACgEQAAgEACgBQACgDAGgCIAIgEIACgBQADgFADgBQADgBAAAHIgBABIABAEIADAHQgBAIgEAGIgMATIgCgEg");
	this.shape_19.setTransform(-0.7,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCAAgDgDQgCgEAAgCIACgIIgBgBQgDAMgGAAQgEAAgHgGQgGgGAAgFQAAgFACgFIABAAQACgDADgCIgJAEIgEgHIgDgGIACgDIACgCIgBAAIAAAAIgCABIgDAAQgBAAgDgGIgCgIIAAgDQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAIACQAPAAAIAEQAHAEAFAKIACACQADgCAEAAIAAAAIABACIgBAEIACAAIAEABIAXAAIgDAHIgEAHQgEAIgHACIgDgEIgDgEIAAAAIACAFIABAEIAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCACgBACIgBAKg");
	this.shape_20.setTransform(0.1,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAlQgEgBgCABIgBgKIgBgEIgHAFIgDAAIABgGIgBgIIgBgIQAAgEABgCIAFgEIgDgEIgBgEQAAgIABgGQACgHADgDIABgBIAFAVIACAGIAHAAIABABIABACIAJgDIALgCIARADIAPAEIgPANQgJAJgFAAIgDAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIAAABIACAHQgBAEgGAGQgHAGgEAAgAgUAAIABAAIgBAAIAAAAg");
	this.shape_21.setTransform(3.5,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAWIgCADQgCADgDAAIgEAAIgEACIAAAAIACgFQACgGACgBIAEgEIADgEIgBgFIgBgEIADgTIADgSQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQACADAAADQAAAGgDAIQgCAIAAAFQADgBAGAAIAMgHQAQgIAGAAIACABIgLAOIgMAPIgHgCIACAEIACADQAAAFgXAOQABgFAAgKg");
	this.shape_22.setTransform(0.7,4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAWIgCADQgDADgCAAIgEAAIgDACIgBAAIADgGIACgGIAFgEQABgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIgBgEIgBgFIADgTIADgSQADgBACADQABADAAADQAAAGgCAIQgCAIAAAFQACgCAGABIABAAIALgHQARgIAFAAIACABIgLAOIgMAPIgHgCIADAEIABADQAAAFgYAOQACgFAAgKg");
	this.shape_23.setTransform(-0.7,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAZIAAgCIAAgBIgBgEIgBgBIAAgBIgDgGIgDgFQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIABgEIAEgHIABgCQAFgFAAgGQAAgEACgCIABgDIAAgBQADACgBAFIAAAKIABABIAAAEQACgDAEgCIABgBIABgBQAFgEADgDIAHgGQACAEgCAEIAAACIgCAGIAAABQgBAEgDACIgDAEIgBABIgEAEQgCAEgBAFIAAACIgBAEQgDAFgEACQgCAFgEABIgFAAIgBABQgCgCABgFg");
	this.shape_24.setTransform(-2,6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAMAWIgEgBIgCAAIgBgBIAAABIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIAAgBQAAgBAAAAQgBAAAAAAQAAAAAAABQABAAAAABIgBgCIgGAAQgFAAgCgDIAAgCIgBgCIAAgBIgCgCIgBAAIgCgBIgDgDIgMgGIAOAEIADAAIABABIABAAIACAAIAAABIAFAAIgBgBQAAgCAFAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABIABgBIAIgDIAIgHIAGgEIAFgCIADgDIAEgBIABgBIAAABIABACIgBABIgFAHIgBABIgBAEIABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAAIABADIgBACIAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABIABAEIAAABIAAACIgBACQgEADgFABgAgDAIIAAABIACABIABAGIAAAAIAAgGQgCgDgEAAIAAAAIADABgAgggSIACgCIAKAGQAHAFACAEIAAABIgBAAQgQgJgEgFg");
	this.shape_25.setTransform(-4.3,5.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAfATIAAgBQgBgCgCgCIgBgDIgBAAIgCgCIAAgBIgBAAIgCgCIgBgBIgBgBIgBgBQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAABIgBABIAAACIgEAFIgBABIgDADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAgBIgBABIgBAAQgBAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIgBgDIAAgKQAAAAAAgBQAAAAAAgBQABAAgBAAQAAAAAAgBQgBACgEABIgBAAIgEAAIgDAAIgBAAIgEgBIgBAAIgCAAIgCABIgEACIgFAAIgBgBIAAgCQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAgBIACgBIAAAAQADgDAEgCIAAgBIALgFIAIgEIABgBIACgBIABAAIAJgBIABgCQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAACIgBACIAAABIAEAAIABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABgBIAAABIADABIACADIAHAIIABABIAAADIABABIAAACQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAIgBABIACAEIABAFIAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABIAAABIAAACIgBADIgCgEg");
	this.shape_26.setTransform(-3,4.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAZAYIgBgDIAAgBIAAgEIAAgDIAAgCIAAgBIgBACIgDADIgBABIgBABIgEAEQAAAAgBAAQAAABAAAAQAAAAgBgBQAAAAAAAAIgBgBIgEABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBgBAAAAIgCAAIgDACIAAgDIAAAAIgBABIgBgFIABgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgBgDIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgBAAIAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAIAAAAIAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBgBIAAAAIgFAAIACgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBgBIgDgCIAAgBIAAgCIABgEIABgBIADgDIAOgFIADAAIACgBIABAAIAEgCIABAAIAGgBIACAAIAEABIABAAIAAAAIABgBIAAAAIACgCQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAADQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABAAIADABIADABIAEADIABADIAAABIAAABIAAAEIAAACIgBABIAAABIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAJIAAAFIAAABIgCADIAAABIgDAHIgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAAXAHIAAABIAAgCgAAVgIIAAABIAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIAAgBIAAgCIgBgBIgBgCIAAgBg");
	this.shape_27.setTransform(-1.8,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAAcIgJgFIAAgEIgFAGQgDADgEAAQgDAAgJgIQgKgJAAgEQAAgDAFgCIAFgCIgBgBIAAAAQgFgBgFgDQgGgEAAgEIABgEIACgCIgFgFIgDgHIACAAIAFABIAOAAQAGAAAFACQAKACAHALIABgBIADABIABACQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIgBgBIASgIQAHgBAMAAIAKAAQAEAAADACIAAAAIABAAIgDAFIgEAEQgEAGgGgBIAAABIABABIgIAJQgGAGgJgBIAEADIABAEQAAAFgEAGQgFAGgEAAQgDAAgGgEg");
	this.shape_28.setTransform(1.4,4.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAYQgCgCABgFQAAgDABgFIADgGIgDABIAAAAIAAgBIgBgHIgCgIIAAgTIABAAIAHAMIAGAPIAHgCIAAABIANgHIARgIIgSAfQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgBgDIABAGIgGAJIgJAKIgEAAIABgEIgEAFg");
	this.shape_29.setTransform(2.8,4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIAWIgBgCIgCABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgEgIQgFgHAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAEgCQgHACgEgIIgFgOIAAgFIACAAIAQAKQAJADADAEQAFgKABAMQAFgCAMgBQANgCAFgCIgFAEIgFAEIABABIAAAAQgDAEgFACIgJAEIABACIAAACQAAADgJAGQgJAGAAABIgBgEg");
	this.shape_30.setTransform(2.8,6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAOAPQgFgEAAgEIgCAAIgBAAQgDAIgIAAQgEAAgDgDIgHgGIACgCIABgDIAAAAIgEABQgCAAgMgRIAqgDIAAAAIAHAAIABAFQADADAIAGIAAABIgDgBIAFAGQAEAGADACIgGAGQgCADgEAAQgDAAgHgEg");
	this.shape_31.setTransform(4.3,7.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgBAWIgBgFIACgJIAAAAIgBgBIgBABIgFgDIgJgFIgBAAIACgEIADgFIAIgFIAJgEIABgBQADgFADgBQADgBAAAHIgBABIABAEQACAGABABQgBAIgEAGIgMATIgCgEg");
	this.shape_32.setTransform(4,9.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCABgCgEQgDgEAAgCIACgIIAAgBQgEANgGAAQgEAAgGgHQgHgGAAgEQAAgGADgEQACgEAEgCIgKADIgEgGIgDgGIACgCIACgDIgBAAIgCAAIgCACQgCAAgDgHIgCgIIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAIACQAOAAAIAEQAHAEAFALIACABQADgCAEAAIABAAIAAACIgBAEIADAAIADABIAYgBIgEAIIgEAHQgDAIgIACQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgCgFIgBAAIADAJIAAABQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDAEIgBAKg");
	this.shape_33.setTransform(3.4,9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAZIAAgBIAAgCIgBgEIAAgCIgEgGIgCgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAAAAAQABABAAAAIABAAIABgEIAEgIIAAgBQAFgFABgGIABgGIABgDIABgBQACACAAAFQgBAFABAEIAAACIABAEQABgDAEgCIABgCIABgBIAIgGQADgDAEgCQADADgCAEIgBACIgBAGIgBACQAAADgDACQgCABgBADIgCABIgDAEQgDAEgBAFIAAABIAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgDAFgDADQgCAEgFABIgFAAIAAABQgDgCABgFg");
	this.shape_34.setTransform(2.1,12.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAIAVIgBAAIgBAAIAAgBIgBABIgBAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIgBgCQAAAAAAAAQAAAAAAAAQgBAAABABQAAAAAAABIgBgCIgGAAQgEAAgDgDIAAgBIgBgDIAAgCIgCgBIgBgBIgCgBIgBgBIgCgBIgMgGIAPAEIACABIABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACAAIAAACIAFgBIAAgBQAAgCAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIACgBQAEgBADgDIAIgGQADgDADAAIAFgDIAEgDIADgCIABAAIAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAIgBAAIgFAIIAAABIgBACIAAACIAAAAQABAAAAAAQAAABAAAAQAAAAABABQAAAAAAABIAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAABIAAABIgBABQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAIAAAFIABABIgBAAIAAACIgBACQgEADgFABIgIAAIgEgBgAgDAIIABAAIABACIABAFIAAABIAAgGQgCgDgEgBIADACgAgMgEQgQgJgDgFIABgDIAKAHQAIAGACADIgBABg");
	this.shape_35.setTransform(0.4,13);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAfATIAAgBIgCgFIgCgCIgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCgBIgBgBIAAABIgCABIgBACIAAABIgEAFIgBABIgDAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgBAAQgBAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIgBgDIAAgJQAAgBAAAAQAAgBAAAAQABAAgBgBQAAAAAAAAQgBACgEABIgBAAIgEAAIgDAAIgBAAIgEAAIgBgBIgCABIgCAAIgEABIgBAAIgDAAIgBAAIgBAAIAAgBQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIACgBIAAgBQADgDAEgBIALgHIAIgDIABgBIACgBIABgBIAJgBIABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAABIgBADIAAABIAEABIABAAIADABIAAAAIADABIACADIAHAHIABABIAAAEIABABIAAABQgBABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABIgBAAIACADIABAGIAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIAAADIgBACIgCgEg");
	this.shape_36.setTransform(0.4,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAZAYQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgBIAAgEIAAgDIAAgCIAAgBIgBACIgDADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgBABIgEAEQAAAAAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAIgBgBIgDABQAAAAgBAAQAAAAAAAAQgBABAAAAQgBgBAAAAIgDAAIgCACIAAgDIAAAAIgBABIgBgFIABgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgDIAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIAAAAIgBgBIgBAAIgDAAIAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAAAIgFAAIACgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIAAgBIAAgCIABgEIABgBIADgDIANgFIAEAAIACgBIABAAIAEgCIABAAIAGgBIACAAIADABIABAAIABAAIAAgBIAAAAIABAAIACgCQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAAAIgBADQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABAAIADABIADABIAEADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIABABIAAABIAAAEIgBACIAAABIAAABIAAACIAAAAIgBAJIAAAGIgBADIAAABIgDAHIgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAAVgHQAAABAAABQAAAAAAABQAAAAABABQAAAAABABIgBgBIAAgCIAAgBIgBgCg");
	this.shape_37.setTransform(-0.4,16.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAAcIgJgFIAAgEIAAAAIAAAAIAAAAIgEAFQgDAEgFAAQgCAAgJgJQgLgJAAgEQAAgCAFgCIAGgDIgBAAIAAgBQgGAAgFgDQgGgEAAgEIABgEIACgCIgFgFIgEgHIAEAAIAFABIANAAIALABQAKADAIALIABgBIACAAIABADIADgCIAAgBQALgFAGgCQAHgBANAAIAJAAQAEAAAEACIABAAIgEAEIgEAFQgEAGgGgBIAAABIABAAQgFAIgDACQgGAGgIgBIAEACIAAAFQAAAEgEAGQgEAHgFAAQgCAAgHgEg");
	this.shape_38.setTransform(0.7,17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWAZQgBgDgBgFQAAgDACgEIAEgHIgDABIgBAAIAAAAIgBgIIgCgIIAAgTIABAAIAHAMQAFAJABAGIAGgBIABABQAEgCAKgGQAKgGAHgCIgTAfQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgBgDIABAGIgGAJIgJALIgEAAIABgFIgEAFg");
	this.shape_39.setTransform(0.8,19.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAWIgBgCIgBACQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgCAAgFgIIgEgKQAAgDACgCIAEgBQgHACgEgHIgFgOIAAgGIABAAIARAKIAMAHQAFgJABALIARgDQAMgBAGgCIgFADIgFAFIABAAIAAAAQgDAEgFACIgJAFIABABIAAACQAAADgJAFIgKAIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBg");
	this.shape_40.setTransform(-1.2,19.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAOAPQgFgEAAgEIgCABIgBgBQgDAIgIAAQgEAAgDgDIgHgHIACgBIABgCIAAgBIgDABIgCAAQgBAAgMgRIAxgDIABAFQACAEAJAEIgBABIgCgBIAFAHQADAGAEADIgGAFQgCADgEAAQgEAAgGgEg");
	this.shape_41.setTransform(-3.8,21.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAWQgCgDAAgDIACgIIAAAAIgBgBIgBABIgFgDQgFgEgEgBIgBAAIACgEIADgFIAJgFIAIgEIABAAQADgGADgBQADgBAAAHIAAACIABADIABAHQAAAIgDAGIgNATIgBgEg");
	this.shape_42.setTransform(-4.8,21.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCAAgDgDQgCgEAAgCIACgIIAAgBQgEAMgGAAQgEAAgGgGQgHgGAAgEQAAgGADgFQACgDAEgCIgKADIgEgHIgDgFIACgDIACgCIgBAAIAAgBIgCABIgCABQgCAAgDgGIgCgIIAAgEQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAABAAIAIABQAOAAAIAFQAHAEAFAKIACACQADgDAEAAIABAAIAAADIgBAEIADgBIADABIAYAAIgEAIIgEAHQgEAIgHACQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgCgEIgBAAIADAIIAAACQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCABgBADIgBAJIAAABg");
	this.shape_43.setTransform(-3.4,19.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAkQgEAAgCABIgBgKIgBgFIgHAGIgDAAIABgGIgBgIIgBgIQAAgFABgBIAFgEIgDgEIgBgFIABgNQACgHADgDIABgBIAFAUIACAHIAIAAIAAABIABACIAJgDIALgCQAFAAAMADIAPAEIgOANQgKAJgFAAIgDAAQgCgBgBgCIAAABIACAHQgBADgGAHQgHAGgEAAgAgUAAIABAAIgBgBIAAABg");
	this.shape_44.setTransform(-1.9,20);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAWIgCADQgDADgCAAIgEAAIgDACIgBAAIADgFQABgGACgBIAEgEIADgEIgBgFIgBgEIADgTIADgSQABAAAAAAQABAAABAAQAAABABAAQAAABABAAIABAGQAAAGgCAIQgCAIAAAFQACgBAGAAIAMgHQAQgIAHAAIABABIgLAOIgMAPIgHgCIADAEIABADQAAAFgXAOQABgFAAgKg");
	this.shape_45.setTransform(-3.5,20);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIABgBIgBgBIgBgFIAAgBIAAgBIgEgGQgCgDAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIABAAIABgEIAEgIIABgBQAEgFABgGIABgGIABgCIABgCQADACgBAFIAAAKIAAABIABAEQABgDAEgCIABgBIABgCQAGgCACgEQADgDAEgCQADADgCAEIgBADIgBAFIgBACQAAADgDACIgDAEIgBACIgEADQgDAEgBAFIAAABIAAABIAAAAIgBADQgCAGgEADQgCAEgFABIgEAAIgBABQgDgCABgFg");
	this.shape_46.setTransform(-4,21);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAIAVIgBgBIgCAAIgBABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBIAAAAQgBgCAAACIgBgBIgGAAQgEAAgCgDIAAgCIgBgDIgBgBIgBgBIgBgBIgCgBIgCgCIgBgBIgMgFIAOAEIADAAIABAAIABABIABAAIABABIAEAAIAAgBQAAgCAFAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIABAAIAIgEIAHgGIAHgEIABAAIADgDIAEgCIAEgCIABAAIAAACIAAABQgCAEgDAEIgBABIgBACIAAABIABAAIACADIAAABQAAABAAAAQAAABABAAQAAAAAAAAQAAAAgBABIAAACIAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIABAEIAAACIAAAAIAAACIgBACQgEADgFAAIgIAAIgCABIgCgBgAgDAIIAAAAIACACIABAFIAAABIgBgGQgBgDgEgBIADACgAgggSIACgDIAJAGQAIAGACADIAAABIgBABQgQgJgEgFg");
	this.shape_47.setTransform(-7.6,19.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAfAUIgBgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgDIAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBAAIAAgBIgCgCIgBAAIgBgBIgCgBIAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgBACIAAAAIgBABQgCADgBADIgEAFQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgBAAIgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIgBgBIAAgCIgBgJIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgCACgDAAIgBABIgFgBIgDAAIgEAAIgBAAQgBgBAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgCAAIgEABIgBAAIgDABIgCgBIAAAAIgBgBIABgCIACgCIAAgBQADgDADgBIALgHIAIgDIACgBIACAAIADgCIAGgBIABgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIAAAEIAAABIAAAAIAEABIABAAIADABIADABIACADIAGAHIABABIAAABIABADIABACIAAABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgBIgCAAIAAAAIACADIAAACIABAEIAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgBABIAAADIAAACIgCgDg");
	this.shape_48.setTransform(-8.4,18);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAZAZQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAgBIAAgEIAAgDIAAgCIAAgBIgBACIgCACIgBABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAABIgFAEQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAIAAgBIgEABQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAIgCAAIgBABIgCABIAAgDIAAAAIgBABIgBgFIAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAIgBgEIAAAAIgCgBIgBAAIAAgBIgCAAIgDABIAAgBIAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBgBIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIAAgBIgEAAIABgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgBIABgBIAAgCIABgEIABgBIADgCIANgFIAEgBIACgBIABAAIAEgBIABgBIAGAAIACAAIAEAAIABAAIAAgBIAAAAIADgCQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAABIgBADQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABAAIADABIAEABIACADQABAAAAAAQAAAAAAABQABAAAAABQAAAAgBABIABABIAAABIAAAFIgBABIAAABIAAABIAAACIAAAAIgBABIAAAIIAAAGIAAAAIgBADIAAABIgCAHIgCABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAgAAWAAIABAAIAAAAIAAgCIgBACgAAVgIIAAAAIAAABIABAEIAAgCIAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgBg");
	this.shape_49.setTransform(-10.6,17.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgBAcIgIgFIAAgEIAAAAIgBAAIABAAIgEAFQgDAEgFAAQgCAAgKgJQgKgJAAgEQAAgCAFgCIAFgDIgBAAIAAgBQgFAAgFgDQgGgEAAgEIABgEIACgCIgFgFIgEgHIAEAAQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIAOAAIALABQAKADAHALIACgBIABAAIACADIADgCIAAgBQALgFAGgCQAHgBANAAIAJAAQAEAAAEACIABAAIgEAEIgEAFQgEAGgGgBIAAABIABAAIgIAKQgHAGgIgBIAEACIABAFQAAAEgEAGQgFAHgFAAQgCAAgHgEg");
	this.shape_50.setTransform(-11.5,14.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWAYQgCgCAAgFQAAgDACgEIAEgHQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAIAAAAIgBgIIgDgIIAAgTIABAAIAIAMQAFAJABAGIAGgCIABABIAAABIANgIQALgFAHgDIgSAfQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgCIACAFIgHAJIgJAKIgEAAIABgEIgEAFg");
	this.shape_51.setTransform(-13.4,12.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJAWIgBgCIgBABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgCAAgFgIQgEgIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIADgCQgGACgFgIIgEgNIAAgGIACAAIAQAJQAJAFADADQAFgKABAMQAFgCAMgBQANgBAFgCIgFADIgFAFIAAAAIABAAQgDAEgFACIgJAFIABABIAAACQAAADgJAFIgJAIIgCgEg");
	this.shape_52.setTransform(-14.7,10.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAPAPQgGgEgBgEIAAAAIgBAAQgEAIgIAAQgEAAgDgDIgGgHIABgBIABgDIAAAAIgCABIgCAAQgCAAgNgRIArgDIAAAAIAEAAIAAAAIADAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQADAEAIAFIgBAAIgBgBIAEAHQAEAGACACIgEAGQgDADgDAAQgFAAgFgEg");
	this.shape_53.setTransform(-17.4,10.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgBAWIgCgFQAAgCADgHIAAAAIgBgBIgCABIgEgDIgJgFIgBAAIACgEIADgFQACgDAGgCIAIgEIACgBQADgFADgBQADgBAAAHIgBABIABAEQACAGABABQgBAIgEAGIgMATIgCgEg");
	this.shape_54.setTransform(-18.3,12.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCAAgDgDQgCgEAAgCIACgIIgBgBQgDAMgGAAQgEAAgHgGQgHgGAAgFQAAgFAEgFIAAAAQACgDADgDIgJAFIgEgHIgDgGIACgDIACgCIgBAAIAAgBIgCABIgCABQgCAAgDgGIgDgIIAAgEQABAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAIABQAOAAAIAFQAHAEAGAKIACACQACgCAEAAIABAAIAAACIAAAEIACAAIADAAIAYAAIgFAIIgDAGQgDAJgIACQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIgDgEIAAAAIADAIIAAACIgBAEIgDAEIgBAKg");
	this.shape_55.setTransform(-19.5,13.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTAlQgEgBgCABIgBgKIgBgFIgGAGIgEAAIABgGIgBgIIgBgIQAAgFABgBIAFgEIgDgEIgBgFIABgNQACgGADgEIABgBIAFAUIACAHIAHAAIABABIABACIABAAIAIgCIALgDQAFAAAMADIAPAEIgOANQgJAKgGAAIgDgBIgDgDIAAABIACAHQAAADgHAHQgIAGgDAAgAgTAAIAAAAIAAAAIAAAAg");
	this.shape_56.setTransform(-16.4,15.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQAWIgCADQgDADgCAAIgEAAIgDACIgBAAIACgGQACgEACgCIAEgEQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIgBgEIgBgFIADgTIADgSQADgBACADQABADAAADQAAAGgCAIQgDAIAAAFQADgBAGAAIAMgHQAQgIAHAAIABABIgLAOIgMAPIgHgCIADAEIABADQAAAFgYAOQACgFAAgKg");
	this.shape_57.setTransform(-20.3,15.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQAZIAAgBIAAgBIgBgFIAAgBIAAgBIgEgGIgCgFQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAIABAAIABgEIAEgHIABgCQAEgFABgGIABgGIABgCIABgCQADACgBAFIAAAKIAAABIABAEQABgDAEgCIABgCIABgBQAGgCACgEIAHgFQADADgCAEIgBADIgBAFIgBACQAAADgDACQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABIgBABIgEAEQgDAEgBAGIAAABIAAAAIgBAEQgCAFgEADQgCAEgFABIgEAAIgBABQgDgCABgFg");
	this.shape_58.setTransform(-21.6,17.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAIAVIgBAAIgBgBIgBAAIAAABIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAgCQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABABIgBgCIgBAAIgFAAQgFAAgCgDIAAgBIgBgDIAAgCIgCgBIgBgBIgCgBIgDgCIgMgGIAOAEIADABIABAAIABAAIABAAIABACIAEgBIAAgBQAAgCAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABgBQAEgBAEgDIAIgGQACgDAEAAIABgBIADgCIAEgDIAEgCIABAAIAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAAABAAAAIgBAAIgFAIIgBABIgBADIABABQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAABIABAEIgBABIAAABIgCAEIABAFIAAABIAAACIgBABQgEAEgGABIgHAAIgEgBgAgDAIIAAAAIACACIABAFIAAABIgBgGQgBgDgEgBIADACgAgMgEQgQgJgEgFIACgDIAKAHQAHAGACADIAAABg");
	this.shape_59.setTransform(-24.6,18.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAfAUIAAgBQgBgDgCgCIgBgDIgBAAIgCgCIAAgBIgBAAIgCgDIgBAAIgBgBIgBgBQgBABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBACIAAACIgEAFIgBABIgDAEQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIgBgDIAAgKQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAgBAAQgBABgEABIgBAAIgEAAIgDAAIgBAAIgEgBIgBAAIgCAAIgCABIgEABIgFAAIgBAAIgBgCIABgBIACgCIAAAAQADgDAEgCIAAgBIALgGIAHgDIACgBIACgBIABAAIAJgCIABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAEABIAAABIgBADIAAABIAEABIABAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABgBIAAABIADABIACADIAHAHIAAABIABABIAAADIABABIAAABQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBABIACADIABACIAAAEIAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIAAABIgBACIAAADIgCgDg");
	this.shape_60.setTransform(-25.3,20);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAZAYIAAgDIgBgBIABgEIAAgDIAAgCIgBgBIgBACIgDADIgBABIgFAFQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIgDAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAIgBABIgCABIAAgDIAAABIAAAAIgBgFIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgCgDIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAIgBAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCABIAAgBIgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAABIgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAAAIgBgBIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAAAIgEAAIABgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgBIABgCIABgEIAAgBIADgDIARgFIACgBIABAAIAFgBIABgBIAFAAIACAAIAEAAIABAAIAAABIABgCIAAAAIACgCQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAABIgBADIACgBIABAAIADABIADABIAEADQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIABACIAAAFIgBABIAAABIAAABIAAACIAAAAIAAABIgBAIIAAAGIAAAAIgBAEIAAAAIgCAHIgBABIgBgDgAAXAHIABABIgBgCgAAVgIIAAABIAAABIACAEIAAgDIgBgBIgBgBIAAgBIAAgBg");
	this.shape_61.setTransform(-26.8,20.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAAAcIgJgFIAAgDIAAgBIAAAAIAAABIgEAEQgDAEgFAAQgCAAgJgIQgLgKAAgEQAAgCAFgCIAGgDIgBAAIAAgBQgGgBgFgCQgGgEAAgEIABgEIACgCIgFgFIgEgHIAEAAIAFABIANAAIALABQAKADAIALIABgBIACABIABACQAAAAABgBQAAAAAAAAQAAAAABAAQABAAAAAAIAAgBQALgGAGgBQAHgCANAAIAJAAQAEAAAEACIABABIgEADIgEAGQgEAFgGgBIAAABIABABQgFAHgDACQgHAHgHgCIAEADIAAAEQAAAFgEAFQgEAHgFAAIgJgEg");
	this.shape_62.setTransform(-27.7,22.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgWAZQgCgDAAgFQABgDACgEIACgIIgCACIAAAAIgBAAIgBgIIgDgIIAAgTIABAAIAIAMQAFAKACAFIAGgCIAAABIAAABIANgHQALgHAGgBIgSAdQAAABgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIgCgCIACAGIgHAIIgJAKIgDAAIABgEIgFAFg");
	this.shape_63.setTransform(-27.6,22.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgJAWIgBgCIgBACQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgFgHQgEgIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAEgDQgHADgEgIIgFgOIAAgFIABAAIARAKIAMAHQAFgKABAMQAFgCAMgBQAMgBAGgCIgFADIgFAFIABAAIAAAAQgDADgFADIgJAFIABABIAAACQAAACgJAHIgKAHQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAgAAkgMIAAAAIAAAAg");
	this.shape_64.setTransform(-29.6,22.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAPAPQgHgEAAgEIAAABIgBgBQgEAIgIAAQgFAAgCgDIgGgHIABgBIAAgCIAAgBIgBABIgCAAQgCAAgNgRIAygDQABABAAAEQADAEAIAEIgBABIgCgBQACABADAGQADAGADADIgFAFQgDADgDAAQgEAAgFgEg");
	this.shape_65.setTransform(-32.2,24);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgBAWIgCgFQABgCACgHIAAAAIgCgBIgBABIgDgDIgKgFIAAAAIABgEIACgFIAJgFIAIgEIACgBQADgFADgBQADgBAAAHIgBABIABAEIACAHQAAAIgEAGIgMATIgCgEg");
	this.shape_66.setTransform(-33.2,22.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCAAgDgDQgCgEAAgCIACgIIgBgBQgDAMgFAAQgEAAgHgGQgHgGAAgEQAAgGACgFQADgDAEgCIgJADIgFgHIgDgFIACgDIACgCIgBAAIAAgBIgCABIgCABQgCAAgDgGIgDgIIAAgEQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAJABQAOAAAIAFQAHAEAFAKIADACQACgDAEAAIAAAAIABADIgBAEIADgBIADABIAYAAIgFAIIgCAHQgFAIgHACIgDgEIgCgEIgBAAIADAKQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABAAADIgCAJIAAABg");
	this.shape_67.setTransform(-33.8,19.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgSAkQgFAAgBABIgCgKIgBgFIgGAGIgDAAIAAgGIgBgIIgBgIQAAgEACgCIAEgFIgCgEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHACgGQABgGADgEIABAAIAFATIACAHIABAAIAGABIABAAIAAACIABgBIAIgBIAMgDIARADIAPAEIgPANQgJAKgFgBIgDAAIgEgDIAAABIACAGQAAAEgHAHQgGAFgFAAg");
	this.shape_68.setTransform(-33,18);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgQAXIgBACQgDADgDAAIgEABIgEABIAAAAQACgBABgEQABgGABgBIAGgEIACgEIgBgFIgBgEIADgTIADgSQADgBACADIABAGQAAAGgCAIQgDAIAAAFQADgBAGAAIAAAAIANgHQAQgIAFAAIACABIgLAOIgMAPIgHgCIADAEIACADQAAAFgYAOQABgFAAgJg");
	this.shape_69.setTransform(-34.6,17.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQAZIAAgCIAAAAIgBgFIAAgBIAAgBIgEgGIgCgFQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAABIABgBIABgEIADgIIABgBQAFgFABgGIABgGIABgDIABgBQACACAAAFIAAAKIAAACIABADQABgDAEgCIABgBIABgCQAFgDADgDIAHgFQADADgCAEIgBACIgBAGIgBACQAAADgEACIgDAEIgBACIgDADQgDADgBAHIAAAAIAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgDAHgDACQgCAEgFABIgFABIAAAAQgDgCABgFg");
	this.shape_70.setTransform(-36.5,17);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAIAVIgBAAIgBgBIgBAAIAAABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBIAAAAIAAAAIgBAAIgBgBIgFAAQgFAAgCgDIAAgBIgBgDIAAgBIgCgCIgBgBIgCAAIgDgDIgMgGIAOAEIADAAIABAAIABABIABAAIABACIAEgBIAAgBQAAgCAFAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIABAAQAEgBAEgCIAHgHQADgCAEgBIABgBIADgDIAEgCIAEgBIAAgBIABABQAAAAAAAAQAAAAABAAQAAABAAAAQAAABgBAAIAAAAIgFAIIgBABIgBADIABABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAABIAAAAQAAAAAAABQAAAAABABQAAAAAAAAQAAABgBAAIAAACIAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIABAFIAAABIAAABIAAABIgBACQgEADgGABIgHAAIgEgBgAgDAIIAAAAIACACIABAFIgBgFQgBgDgEgBIADACgAgMgEQgQgIgEgGIACgDIAJAHQAIAFACAEIAAABg");
	this.shape_71.setTransform(-38.1,15.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAfAUIAAgBIgDgFIgCgDIgCgCIgBgBIgCgDIgCAAIAAgBIgCgBQAAABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBADIAAAAIAAABIgFAFIAAABIgDAEQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgBAAIgCAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBgBAAIAAgBIAAgDIgBgKQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIgFACIgBAAIgEAAIgDAAIgBAAIgFgBIgCAAIgDABIgEABIAAAAIgDABIgCgBIgBAAIAAgCIABgBIACgCIAAAAQACgDAEgCIABgBIAKgGIAIgDIACgBIACgBIABAAIAIgBIABgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAEABIAAABIgBADIAAABIAAAAIAEABIAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAAAABgBIAAABIADABIACADIAHAHIAAACIABAEIAAABIAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBIAAgBQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIACADIABAGIAAABIABAEIgBABIAAACIAAADIgCgDg");
	this.shape_72.setTransform(-37.4,14.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAZAYQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAAgBIAAgEIAAgDIAAgCIgBgCIAAADIgDACIgBAAIgBACIAAABIgEAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgDAAIgCAAIgBABIgCABIAAgDIAAABIgBgFIAAgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgDIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgBIgCAAIgCABIAAgBIgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAABIgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIgBgBIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAAAIgEAAIABgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIAAAAIAAgBIABgCIABgEIABgBIACgDIARgFIACgBIABAAIAFgBIABgBIAFAAIACAAIAEAAIABAAIAAAAIABgBIAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAABIgBADIACgBIABAAIAEABIADABIADADQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAABIAAAGIAAABIgBABIAAABIAAACIAAAAIAAABIAAAIIAAAFIAAABIgCADIAAABIgCAHIgBABIgBgDgAAXAAIAAAAIAAAAIAAgCIAAACgAAVgIIAAABIAAAAIACAEIAAgCIgBgBIgBgCIAAgBg");
	this.shape_73.setTransform(-36.3,13.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAAAcIgJgFIAAgDIAAgBIAAAAIAAABIgEAEQgDAEgFAAQgCgBgKgHQgKgJAAgFQAAgCAFgCIAFgDIgBAAIAAgBQgFAAgFgDQgGgEAAgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACgDIgFgFIgDgHIADAAIAEABIAOAAIALABQAKADAHALIABgBIACABQABAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAIAAgBQALgGAGgCQAHgBANAAIAJAAQAEAAAEACIAAAAIgDAFIgEAEQgEAGgGgBIAAABIABABIgIAJQgGAHgJgCIAEADIABAEQAAAEgEAGQgFAHgEAAQgDAAgGgEg");
	this.shape_74.setTransform(-35.1,12.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWAZQgCgDAAgFIACgIIADgGQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAQAAgEgCgEIgCgJIAAgSIABAAIAIAMQAFAJABAGIAHgBIAAAAIAAABQAFgCAIgGIARgIIgSAfQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgCgDIACAGIgHAJIgJALIgEAAIACgFIgGAFg");
	this.shape_75.setTransform(-33,11.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIAWIgCgCIgBACQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAQgBAAgFgIQgGgIAAgCQABgCACgCIAEgCQgHACgFgIIgEgNIAAgGIABAAIARAKIAMAHQAFgJAAALIASgDQAMgBAGgCIgFADIgFAFIABABQgDADgGACIgJAFIABABIABACQAAADgJAGIgKAHIAAgEgAAkgMIAAAAIAAAAg");
	this.shape_76.setTransform(-32.3,10);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAPAPQgGgEgBgEIAAABIgCgBQgDAIgHAAQgFAAgDgCIgGgHIABgCIABgDIAAAAIgEABQgCAAgNgRIArgDIAAAAIAHAAIABAGQADADAIAFIgBABIgCgBIAFAGQADAHADABIgEAGQgDADgEAAQgEAAgFgEg");
	this.shape_77.setTransform(-32.9,11.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgBAWIgBgFIACgJIAAABIgCgCIAAABIgFgDQgFgEgEgBIgBAAIADgEIACgFIAJgFIAIgEIABAAQAEgGACgBQADgBAAAHIAAACIAAADIACAHQAAAIgDAGIgNATIgCgEg");
	this.shape_78.setTransform(-32.5,13.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCAAgDgDQgCgEAAgCIACgIIAAgBQgEAMgGAAQgEAAgHgGQgGgGAAgFQAAgFADgFIAAAAQACgDAEgCIgKAEIgEgHIgDgGIACgDIACgCIgBAAIAAgBIgCABIgCABQgCAAgDgGIgCgIIAAgEQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAIABQAOAAAIAFQAHAEAFAKIACACQADgCAEAAIAAAAIABACIgBAEIADAAIADAAIAXAAIgDAIIgEAGQgEAJgHACQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBIgCgEIgBAAIADAIIAAACQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgDAEIgBAKg");
	this.shape_79.setTransform(-33.1,13.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgSAkQgFAAgCABIgBgKIgBgFIgGAGIgDAAIABgGIgCgIIgBgIQAAgFACgBIAEgEIgDgEIAAgFIAAgNQACgHAEgDIAAgBIAFAUIACAHIAHAAIABABIABACIAAAAIAJgDIAMgCIAQADIAPAEIgOANQgKAJgFAAIgCAAQgDgBgCgCIAAABIADAHQAAADgHAHQgHAGgEAAgAgTAAIAAAAIAAAAIAAAAg");
	this.shape_80.setTransform(-32.3,14.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgPAWIgDADQgCADgDAAIgEAAIgDACIgBAAQACgBABgFIADgGIAEgEQADgDAAgBIgBgEIgBgFIADgTIADgSQADgBACADQABADAAADQAAAGgCAIQgCAIAAAFQACgBAGAAIABAAIALgHQARgIAGAAIABABIgLAOIgLAPIgIgCIADAEIABADQAAAFgXAOQABgFABgKg");
	this.shape_81.setTransform(-33.9,15.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPAZIAAgBIgBgBIAAgFIgBgCIAAAAIgDgGQgDgDAAgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQAAgBAAAAQABABAAAAQAAAAABAAQAAABABABIAAgBIABgEIAEgIIABgBQAFgFAAgGIABgGIABgDIABgBQADACgBAFIAAAKIAAACIABADQACgDAEgBIABgCIABgCQAFgCACgDQADgDAFgDQACADgCAEIAAACIgCAGIAAABQgBADgDADIgDAEIgBABIgEAEIgDAKIAAAAIAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQgCAGgEADQgCADgFACIgEABIgBAAQgCgCABgFg");
	this.shape_82.setTransform(-35.2,18.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAIAVIgBgBIgCAAIgBABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBIAAAAIAAAAIgBAAIgBgBIgFAAQgFAAgCgDIAAgCIgBgDIAAgBIgCgBIgBgBIgCgBIgDgDIgMgFIAOAEIADAAIABAAIABABIABAAIABABIAEAAIAAgBQAAgCAFAAQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAIABAAIAIgEIAHgGIAHgEIABAAIADgDIAEgCIAEgCIABAAIAAACIAAABIgFAIIgBABIgBADIABAAIACADIAAABQAAABAAAAQAAABABAAQAAAAAAAAQAAAAgBABIAAACIAAABIgCAEIABAEIAAACIAAACIgBACQgEADgGAAIgHAAIgCABIgCgBgAgDAIIAAAAIACACIABAFIAAABIgBgGQgBgDgEgBIADACgAgggSIACgDIAJAGQAIAGACADIAAABIgBABQgQgJgEgFg");
	this.shape_83.setTransform(-37.4,19.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAfATIAAgBQgBgCgCgDIgBgCIgBAAIgCgDIgBgBIgCgCIgCgBIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgBACIAAAAIgBABIgDAFIgBABIgDAEIgDACIgBAAIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIgBgDIAAgJQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgBACgEABIgBAAIgEAAIgDAAIgBAAIgEAAIgBgBIgCABIgCAAIgEABIgBAAIgDAAIgBAAIgBAAIgBgBIABgDIACgBIAAgBQADgDAEgBIALgHIAHgDIACgBIACgBIABgBIAIgBIACgCQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABABIgBADIAAABIAEAAIABABIADABIAAAAIADABQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAHAIIABABIAAAEIAAABIABABIAAAAQgBABAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAABIgBAAIACADIABACIAAAEIAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgBADIAAACIgCgEg");
	this.shape_84.setTransform(-38.2,20.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAZAYQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAAgDIAAgDIAAgCIgBgBIAAACIgEADIgBABIgBABIgDAEQgBAAAAAAQAAABAAAAQgBAAAAgBQAAAAgBAAIgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgDAAIgDAAIgCACIAAgDIAAAAIAAABIgBgFIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIgBgDIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBIgBgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAIAAAAIgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAgBIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBAAIgFAAIACgBIgDAAIAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgBIABAAIABgCIABgEIABgBIACgDIAOgFIADAAIACgBIABAAIAFgCIABAAIAFgBIACAAIADABIABAAIABAAIAAgBIAAAAIAEgCQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAAAIAAADQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIABAAIAEABIACABIADADQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAABIABABIgBAEIAAACIgBABIAAABIAAACIAAAAIgBABIAAAIIAAAFIAAABIgBADIgBABIgCAHIAAABQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAAXAAIAAAAIAAgCIAAACgAAUgJIAAABIABABIAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAAgCIgBgBIgBgDIAAAAg");
	this.shape_85.setTransform(-39,22);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAAAcIgJgFIAAgEIAAAAIAAAAIAAAAIgEAGQgDADgFAAQgCAAgKgIQgJgJgBgEQABgDAEgCIAFgCIgBgBIAAAAQgFgBgFgDQgGgEAAgEIABgEIADgCIgGgFIgDgHIADAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAIANAAQAHAAAEACQALACAGALIABgBIADABQAAAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIADgCIAAgBIARgHQAHgBANAAIAJAAIAIACIAAAAIgDAFIgDAEQgFAGgGgBIAAABIACABIgIAJQgHAGgJgBIAEADIABAEQAAAFgEAGQgFAGgFAAIgIgEg");
	this.shape_86.setTransform(-39.9,22.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgWAZQgCgDAAgFQAAgDACgFIADgHQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgBAAIAAgBIgBgHIgDgJIAAgSIABAAIAIAMQAFAJABAGQADgCAEAAIAAABIANgHQALgGAHgBIgTAdQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgCgCIACAFIgHAJIgJAKIgEAAIABgEIgEAFg");
	this.shape_87.setTransform(-39.8,22.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgIAWIgCgCIgBACQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgGgHQgEgIAAgCQAAgDACgBIAEgDQgHADgEgIIgFgOIAAgFIABAAIARAKIAMAHQAFgKABAMQAFgCAMgBIASgDIgFADIgFAFIABAAIAAAAQgCADgGADIgKAFIACABIAAACQAAACgIAHIgLAHIAAgEg");
	this.shape_88.setTransform(-41.8,22.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAPAPQgGgEAAgEIgBABIgCAAQgCAHgJAAQgEAAgDgDIgGgGIACgCIAAgDIAAAAIgBABIgDAAQgCAAgMgRIArgCIAAgBIAGAAQACABAAAEQADAEAHAFIAAABIgDgBQACABADAFQADAHAEABIgFAHQgDACgEAAQgEAAgFgEg");
	this.shape_89.setTransform(-43.8,22);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgBAWQgCgDAAgDIADgIIgCgBIAAABIgFgDIgJgFIgBAAIACgEIADgFQACgCAGgDIAIgEIACAAQADgGADgBQADgBAAAHIgBACIABADQACAGABABQgBAIgEAGIgMATIgCgEg");
	this.shape_90.setTransform(-45.4,21.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAPAkIgIgBQgBABgDgEQgDgEAAgCIACgIIgBgBQgDAMgFAAQgEAAgHgGQgHgGAAgEQAAgGADgEIAAgBQACgDAEgCIgKAEIgDgHIgDgGIABgCIACgDIAAAAIgBgBIgBABIgDABQgBAAgDgGIgDgIIAAgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAIACQAOgBAIAFQAHAEAGALIABABQADgCAFAAIAAAAIABACIgBAEIABAAIAEAAIAXAAIgDAIIgDAGQgEAJgIACIgDgDIgCgFIgBAAIADAFIABADIAAACQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgCACgBACIgBAKg");
	this.shape_91.setTransform(-46,19.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgTAkQgEAAgBABQAAgEgCgGIgBgFIgGAGIgEAAIABgGIgBgIIgBgIQAAgFACgBIAEgEIgCgEQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgHACgGQABgHADgDIABgBIAFAUIACAHIAHAAIABABIABACIAAAAIAJgDIALgCIARADIAPAEIgOANQgKAJgFAAIgDAAIgEgDIAAABIACAHQAAADgGAHQgIAGgDAAgAgUAAIABAAIgBAAIAAAAg");
	this.shape_92.setTransform(-45.2,17.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgQAXIgCACQgCADgDAAIgEABQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABIgBAAIADgGIADgHIAEgEQABgBABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIgBgEIgBgFIADgSIADgTQADAAACADQABACAAADQAAAGgCAIQgCAIAAAFQACgBAGAAIAMgGQAQgJAHAAIABABIgLAOIgMAPQgEgCgDAAIADAEIABAEQAAAEgXAOQABgFAAgJg");
	this.shape_93.setTransform(-46.8,16.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgPAZIAAgBIgBgBIAAgFIgBgBIAAgBIgDgGQgDgDAAgCQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQAAABABAAIAAAAIABgDIAEgIIABgCQAFgFAAgGIABgGIABgCIABgCQADACgBAFIAAAKIAAABIABAEQABgDAFgCIABgCIABgBQAFgDACgDIAIgFQACADgCAEIAAACIgCAGIAAACQgBADgDACQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgBACIgEADQgCAEgBAGIAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABQgCAFgEADQgCAEgFABIgEAAIgBABQgCgCABgFg");
	this.shape_94.setTransform(-48,17);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAMAWIgEgBIgCgBIgBAAIAAABIgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQAAgBgBAAIAAgBQgBgCABACIgBAAIAAgBIgGAAQgFAAgCgDIAAgCIgBgCIAAgBIAAgBIgCgBIgBAAIgCgCIgCgCIgBAAQgBgCgLgEIAOAEIADAAIABAAIABABIACAAIAAABIAEAAIABAAIgBgBQAAgCAFAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABIABgBIAIgDIAIgHIAGgEIAFgDIADgCIAEgCIABAAIAAABIABACIgBAAIgFAIIgBABIAAACIAAABIAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBACIAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABIABAEIAAABIAAACIgBACQgEADgFABgAgDAIIABABIABABIABAFIAAABIAAgGQgCgDgEgBIAAAAIADACgAgMgEQgQgJgDgFIABgDIAKAHQAHAFACAEIAAABg");
	this.shape_95.setTransform(-50.9,15.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAeAUIAAgBIgBgFIgDgDIgCgCIgCgBIgCgDIAAAAIgBgBIgBgBQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBADIgBAAIAAABIgDAFIgBABIgDAEQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAIgBAAQgBAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgBIAAgDIgBgKQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIgFACIAAAAIgGAAIgDAAIAAAAIgGgBIgBAAIgCABIgFABIgBAAIgCABIgBgBIgBAAIAAgCIAAgBIABgCIABAAQACgDAFgCIABgBIAJgGIAJgDIABgBIACgBIABAAIAIgBIABgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABIAAABIAAADIgBABIABAAIAEABIABAAQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAgBIABABIADABIADADIAFAHIABABIAAABIABAEIABABIAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIACADIABAGIAAABIAAAEIAAABIAAACIgBADIgCgDg");
	this.shape_96.setTransform(-49.6,14.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAZAYQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAAgBIAAgEIAAgDIABgBIgBgBIAAgCIgBADIgCACIgBAAIgBACIAAABIgFAEQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCAAIgBABIgCABIAAgDIAAAAIAAABIgBgFIAAgCIgBgDIgBgDIAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgBAAIgBgBIgBAAIgCABIAAgBIgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABIAAAAIgCgCIAAgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAAAIgEAAIABgBIgDgBIgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgBIAAgCIACgEIAAgBIADgDIARgFIACgBIABAAIAEgBIACgBIAFAAIACAAIAEAAIABAAIAAAAIAAgBIABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAABIgBADIACgBIABAAIADABIADABIAEADIABADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAAGIAAABIgBABIAAABIAAACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAJIAAAFIAAABIgBADIAAABIgDAHIgBABQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBgAAXAIIABAAIgBgCgAAVgHIAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAAgCIAAgBIgBgBIAAgBIAAgBg");
	this.shape_97.setTransform(-48.5,13.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgBAcIgIgFIAAgEIgBAAIABABIgEAFQgDADgFAAQgCAAgJgIQgLgJAAgEQAAgDAFgCIAGgCIgBgBIAAAAQgGgBgFgDQgGgEABgEIAAgDIACgDIgFgFIgEgHIAEAAIAFABIANAAQAHAAAFACQAJACAIALIABgBIACABIAAACIAFgBIgBgBIARgIQAIgBAMAAIAJAAQAEAAAEACIAAAAIABAAIgEAFIgDAEQgFAGgFgBIAAABIABABIgIAJQgIAGgIgBIAFADIAAAEQAAAFgEAGQgFAGgEAAIgKgEg");
	this.shape_98.setTransform(-46,11.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgWAYQgBgCAAgFQAAgDABgEIADgHIgCABIgBAAIAAAAIgBgIIgCgIIAAgTIABAAIAHAMQAGAJAAAGIAHgCIAAABIAAABIAOgIQAKgFAHgDIgTAfQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgBgCIAAgBIAAAAIAAABIABAFIgGAJIgJAKIgEAAIABgEIgEAFg");
	this.shape_99.setTransform(-45.2,9.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgIAWIgBgCIgCACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgGgIIgEgKQAAgDACgCIAEgBQgHACgEgIIgFgOIAAgFIABAAIARAKIAMAHQAFgKABAMQAFgCAMgBIASgDIgFADIgFAFIABAAIAAAAQgCAEgGACIgJAFIABABIAAACQAAADgIAFIgLAIIAAgEg");
	this.shape_100.setTransform(-44.5,8.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAOAPQgFgEgBgEIgBAAIgBAAQgDAIgHAAQgFAAgDgDIgHgHIACgBIABgDIAAAAIgCABIgCAAQgDAAgLgRIAqgDIAAAAIAEAAIAAAAIADAAIABAFQADAEAIAFIgBAAIgCgBIAGAHQACAGADACIgEAGQgDADgEAAQgEAAgGgEg");
	this.shape_101.setTransform(-44.4,7.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgBAWIgCgFIADgJIAAAAIgBgBIgCABIgEgDQgFgEgEgBIgBAAIACgEQABgEACgBQACgCAGgDIAIgEIACAAQADgFADgBQADgCAAAHIgBACIABAEIADAGQgBAIgEAGIgMATIgCgEg");
	this.shape_102.setTransform(-44,7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAHAjQgCABgDgEQgCgEAAgCIACgIIgBgBQgDAMgFAAQgFAAgGgGQgHgGAAgEQAAgFADgGQACgDAEgCIgKADIgEgGIgCgGIABgCIACgDIgBAAIAAgBIgCABIgCABQgCAAgDgGIgCgIIAAgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAIACQAOgBAIAFQAHAEAGALIACABQACgCAEAAIAAAAIABACIgBAEIADgBIADABIAXAAIgDAIIgDAGQgEAJgIACQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAIgCgFIgBAAIADAIIAAACQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgCAJIAAABg");
	this.shape_103.setTransform(-41.9,5.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAlQgFgCgCACIgBgKIgBgFIgHAGIgCAAIAAgGIgBgIIgBgIQAAgFACgBIAEgEIgDgEIgBgFQAAgHABgGQADgHACgDIABgBIAFAUIACAHIAHAAIABABIAAACIABAAIAJgDIALgCIARACQANADACACIgOANQgKAJgFAAIgCgBIgFgCIAAABIACAGQAAAEgGAGQgIAHgDAAgAgTAAIAAAAIAAAAIAAAAg");
	this.shape_104.setTransform(-37.7,5.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgQAXIgCACIgFADIgEABQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABIgBAAIADgGIADgHIAEgEQADgDAAgBIgBgEIgBgFIADgSIADgTQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIABAGQAAAGgCAIQgCAIAAAFIAAAAQACgBAGAAIAMgHQAQgIAHAAIABABIgLAOIgMAPQgEgCgDAAIADAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgXAOQABgFAAgJg");
	this.shape_105.setTransform(-37.9,5.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgQAZIAAgCIAAgBIgBgEIAAgBIAAgBIgEgGIgCgFQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIABAAIABgEIADgHIABgCQAFgFABgGIABgGIABgDIABgBQACACAAAFIAAAKIAAABIABAEQABgDAEgCIABgBIABgBQAFgEADgDIAHgGQADAEgCAEIgBACIgBAGIgBABQAAAEgEACIgDAEIgBABIgDAEQgDAEgBAFIAAABIAAABQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgDAFgDACQgCAFgFABIgFAAIAAABQgDgCABgFg");
	this.shape_106.setTransform(-36.5,6.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAMAWIgDgBIgDgBIAAAAIgBABIgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgBgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAABABAAIgBgBIgGAAQgEAAgCgDIgBgCIAAgCIgBgBIAAgBIgBgBIgCAAIgCgCIgBgCIgCAAQAAgCgMgEIAPAEIACAAIABAAIACABIABAAIAAABIAFAAIAAAAIAAgBQAAgCAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIACgBIAHgDIAIgHIAGgEIAFgDIAEgCIADgCIABAAIABABIAAACIAAAAIgGAIIAAABIgBACIAAACQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAAIABADIAAACIgBABIgBAFIAAAEIABABIgBAAIAAACIgBACQgDADgGABgAgDAIIABABIABABIABAFIAAgFQgBgDgEgBIgBAAIADACgAgMgEQgQgJgDgFIABgDIAKAHQAIAFACAEIgBABg");
	this.shape_107.setTransform(-36.1,6.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAfATIgBAAQAAgDgCgCIgCgDIAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIgBAAIgCgCIgBgBIgBAAIgCgBQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBACIAAABIgBABIgDAFIgBABIgDADIgDACIgBAAIgCAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgBIAAgCIgBgJIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgCADgDABIgBAAIgFgBIgDAAIgFAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIgCABIgEAAIgBABIgFAAIAAgBIgBgBIABgDIACgBIAAAAIAGgFIABAAIAKgHIAIgDIACgBIACgBIABAAIACgBIAGgBIABgBQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIADABIAAACIAAACIAAABIAAAAIAEAAIABABIACABIABAAIADABIACADIAGAHIABACIABADIAAABIAAABIABABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIACAEIAAABIABAEIAAABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABIgBABIAAADIAAACIgCgEg");
	this.shape_108.setTransform(-34.1,6.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAZAZIAAgEIgBgBIABgDIAAgEIAAgCIgBgBIgBACIgDADIgBABIAAABIgFAEQAAAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAIgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDAAIgCABIAAgCIAAAAIAAAAIgBgFIAAgBIAAgDIgCgDIAAgBQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCABIAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBABIAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIAAgBIgEAAIAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBgBQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAgCIABgCIABgEIABgBIADgCIANgFIAEgBIACAAIABgBIAFgBIABgBIAEAAIADAAIADAAIABABIABAAIAAgBIAAgBIABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAEQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAEABIADABIADADIABADIABABIAAABIAAAFIgBABIgBABIAAABIABACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAJIAAAGIAAAAIgBAEIgBAAIgBAHIgBABQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAgAAXAIIAAABIAAgDgAAUgIIABABIAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIgBgBIAAgCIgBAAIAAgDIgBgBg");
	this.shape_109.setTransform(-32.9,5.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgBAcIgIgFIAAgEIgEAFQgDAEgFAAQgCgBgKgHQgKgKAAgEQAAgCAFgCIAFgDIAAAAIgBgBQgFAAgFgDQgGgEAAgFIABgDIACgCIgFgFIgEgHIAEAAIAEABIAOAAIALABQAKADAHALIACgBIACABIABACIADgCIAAgBQALgFAGgCQAHgBANAAIAJAAIAIABIAAABIABAAIgEAFIgEAEQgEAFgGAAIAAABIABAAIgIAKQgHAGgIgBIAFACIAAAFQAAAEgEAGQgFAHgFAAQgCAAgHgEg");
	this.shape_110.setTransform(-29.7,5.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgWAYQgBgCgBgFIACgIIADgGQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIAAAAIAAgBIgCgHIgCgIIAAgTIABAAIAIAMQAFAJABAGIAGgCIABABIANgHIASgIIgTAfQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgDIABAGIgGAJIgJAKIgEAAIABgEIgEAFg");
	this.shape_111.setTransform(-28.3,4.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgJAWIgBgDIgBADQgBAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgCAAgFgIIgEgKQAAgDACgCIADgBQgGACgEgIIgFgOIAAgFIABAAIARAJIAMAIQAFgKABALIARgCQAMgBAGgCIgFADIgFAFIABAAIAAAAQgDAEgFACIgJAFIABABIAAACQAAADgJAFIgKAIIgBgEgAAkgMIAAAAIAAAAg");
	this.shape_112.setTransform(-26.9,4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAPAPQgGgEgBgEIAAABIgCgBQgDAIgHAAQgFAAgDgDIgHgGIACgCIABgDIAAgBIgCABIgCABQgCAAgNgSIAygCQACABgBAEQADAEAIAFIgBABIgCgBIAFAGQADAGADACIgEAGQgDADgEAAQgDAAgGgEg");
	this.shape_113.setTransform(-26.2,3.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgBAWIgCgFIADgJIAAABIgCgCIgBABIgEgDIgJgFIgBAAIACgEIADgFQACgCAGgDIAIgEIACAAQADgGADgBQADgBAAAHIgBACIABADQACAGABABQgBAIgEAGIgMATIgCgEg");
	this.shape_114.setTransform(-25.1,3.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAOAkIgHgBQgCAAgDgDQgCgEAAgCIACgIIgBgBQgDAMgFAAQgFAAgGgGQgHgGAAgEQAAgGACgFIABAAQACgDAEgCIgKADIgEgGIgCgGIABgCIACgDIgBAAIAAgBIgCABIgCABQgCAAgDgGIgCgIIAAgEQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAIABQAOAAAIAFQAHAEAGALIACABQACgCAEAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgBAEIADgBIADABIAXAAIgDAIIgDAGQgEAJgIACIgDgDIgCgFIgBAAIADAIIAAACQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgCAJIAAABg");
	this.shape_115.setTransform(-23,1.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgTAkQgEAAgBABIgCgKIgCgFIgFAGIgEAAIABgGIgBgIIgBgIQAAgFABgBIAFgFIgCgEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgHACgGQABgHADgDIABgBIAFAUIACAHIAHAAIABABIABACIAAAAIAJgDIALgCIARACIAPAFIgPAMQgJAKgFAAIgDgBIgEgCIAAABIACAGQAAAEgHAGQgGAHgFAAg");
	this.shape_116.setTransform(-20.1,0.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgPAXIgCACQgEADgCAAIgEABIgEACIAAAAQABgCABgEIAEgHIAEgEIADgEIgBgEIgBgEIADgTIADgTQADAAACADIABAFQAAAGgCAIQgCAIgBAFQADgBAGAAIAAABIANgHQAQgJAFAAIACABIgLAPIgLAPQgFgDgDAAIADAEIABAEQABAEgYAOQACgFAAgJg");
	this.shape_117.setTransform(-21.7,-1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgQAZIAAgBIAAgCIgBgEIAAgBIAAgBIgEgGIgCgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAABAAAAIABAAIABgEIADgIIABgBQAFgFABgGIABgGIABgDIABgBQACACAAAFQgBAFABAEIAAACIABAEQABgDAEgCIABgCIABgBQAFgDADgDIAHgFQADADgCAEIgBACIgBAGIgBACQAAADgEACIgCAEIgCABIgDAEQgDAEgBAFIAAABIAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgDAFgDADQgCAEgFABIgFAAIAAABQgDgCABgFg");
	this.shape_118.setTransform(-23.6,-0.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAIAVIgBgBIgBAAIAAABIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBgBIAAAAIAAAAIgBAAIAAgBIgGAAQgFAAgBgDIgBgCIgBgCIAAgBIgCgCIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgCgBIgBgBIgNgGIAPAEIACAAIAAABIACAAIABAAIABABIAEAAIAAAAIAAgBQAAgCAEAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAABIABgBIAHgDIAJgHIAGgEIABAAIADgCIAFgDIADgCIABAAIAAADIAAABQgCAEgDADIgBABIgBADIABABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABIAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAACIgBABIgCAFIABAEIAAADIgBACQgEADgGAAIgHABIgEgBgAgDAIIABABIABABIABAFIgBgFQAAgDgFgBIADACgAgfgSIABgDQAEACAGAFQAHAFADADIgBACIgBAAQgQgJgDgFg");
	this.shape_119.setTransform(-23.6,2.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAfATIAAgBQgBgCgCgCIgBgDIgBAAIgCgCIgBgBIgCgCIgBgBIgBgBIgBgBQgBABAAAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBACIgBABIgDAFIgBABIgDADQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBgBIgBABIgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIgBgDIAAgKQAAAAAAgBQABAAAAgBQAAAAAAAAQgBAAAAgBQgBACgEABIgBAAIgFAAIgCAAIgBAAIgEgBIgBAAIgCAAIgCABIgEACIgFAAIgBgBIgBgCIABgCIACgBIAAAAQADgDAEgCIAAgBIALgFIAHgEIACgBIACgBIABAAIAIgBIACgCQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABACIgBACIAAABIAEAAIABABQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABgBIAAABIADABIACADIAHAIIAAABIABAAIAAADIAAABIABABIAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIACAEIABACIAAADIAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIAAABIgBACIAAADIgCgEg");
	this.shape_120.setTransform(-26,1.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAZAYQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgBIAAgEIAAgDIAAgCIgBgBIgBACIgDADIgBABIAAABIgFAEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBAAIgDAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCAAIgBABIgCABIAAgDIAAABIAAAAIgBgFIAAgBIAAgEIgCgCIAAgBIgDgBIAAAAIgBAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCABIAAgBIgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAgBABIAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIgBgBIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBIAAAAIgEAAIABgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBAAIABgBIAAgCIABgEIACgBIADgCIACgCIAKgDIAEgBIACAAIABgBIAFgBIABgBIAFAAIACAAIADAAIABAAIABABIAAgCIAAAAIAEgCQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABIAAABIAAADIABgBIABAAIAEABIADABIADADQAAAAAAABQABAAAAAAQAAAAAAABQAAAAgBABIABABIAAABIAAAFIgBABIAAABIAAADIAAAAIgBAJIAAAGIAAAAIgBAEIgBAAIgBAHIgBABQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBgAAXAAIAAAAIAAgCIAAACgAAUgIIABABIAAABIABADIAAgCIAAgBIgBgCIAAgBg");
	this.shape_121.setTransform(-26.1,3.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgBAcIgIgFIAAgEIAAgBIgBABIABAAIgEAFQgDADgFAAQgDAAgIgHQgLgJAAgFQAAgCAFgDIAGgCIgBAAQgHgBgEgDQgFgEgBgFIABgDIACgCIgFgFIgEgHIAEAAIAEABIAOAAIALABQAKADAIALIABgBIACABIAAACIAFgCIgBgBQALgFAGgCQAIgCAMAAIAJABIAIABIAAABIABAAIgFAFIgDAEQgEAGgGgBIAAABIABAAIgIAKQgHAGgHgBIAEACIAAAFQAAAFgEAGQgFAGgEAAQgCAAgIgEg");
	this.shape_122.setTransform(-23.6,3.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgWAZQgCgCAAgFQAAgEACgEIAEgHIgEABIAAgBIAAAAIgBgHIgDgJIAAgSIABAAIAIAMQAFAKABAEIAGAAIABAAIAAAAIANgHQALgGAHgCIgTAfQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCgEIACAGIgHAJIgJAKIgEAAIABgEIgEAFg");
	this.shape_123.setTransform(-21.5,3.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgIAWIgBgCIgCACQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgCAAgFgIIgFgKQAAgDADgCIAEgBQgHACgEgHIgFgOIAAgGIABAAIARAKIAMAHQAFgJABALIARgDIASgDIgFADIgFAFIAAAAIABABIgIAFIgJAFIABADQAAADgJAFIgKAIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_124.setTransform(-20.2,4.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAPAPQgGgEgBgEIAAABIgBgBQgEAIgIAAQgEAAgDgDIgGgHIABgBIABgDIAAAAIgCABIgCAAQgCAAgNgRIArgDIAAAAIAHAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQADAEAIAFIgBAAIgBgBIAEAHQAEAGACACIgEAGQgDADgDAAQgFAAgFgEg");
	this.shape_125.setTransform(-20.1,5.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgBAWQgCgDAAgDIADgIIAAAAIgBgBIgCABIgEgDIgJgFIgBAAIACgEIADgFQACgCAGgDIAIgEIACAAQADgGADgBQADgBAAAHIgBACIABADQACAGABABQgBAIgEAGIgMATIgCgEg");
	this.shape_126.setTransform(-18.3,5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAHAjQgCAAgDgDQgCgEAAgCIACgIIgBgBQgCAMgHAAQgEAAgGgGQgHgGAAgFQAAgFADgFQACgDAEgCIAAAAIAAAAIgKAEIgEgHIgDgGIACgDIACgCIgBAAIgBABIgDAAQgCAAgCgGQgDgGgBgCIAAgDQABgBAAAAQAAAAAAAAQABgBAAAAQABAAABAAIAIACQAOAAAIAEQAHAEAGAKIACACQACgCAEAAIABAAIAAACIAAAEIACAAIADABIAYAAQgCACgCAFIgEAHQgEAIgGACQgCgBgCgDIgCgEIgBAAIAEAKQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgCACgBACIgBAKg");
	this.shape_127.setTransform(-16.8,3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgTAkQgEAAgBABIgCgKIgCgFIgFAGIgEAAIABgGIgBgIIgBgIQAAgFACgBIAEgEIgCgFQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgHACgGQABgHADgDIABgBIAFAUIACAHIACgBIAGABIAAAAIABADIAAgBIAJgCIALgCQAEAAANACIAPAFIgPAMQgJALgEgBIgEgBIgEgCIAAABIACAHQAAADgHAHQgGAFgFAAgAgUAAIABAAIgBgBIAAABg");
	this.shape_128.setTransform(-13.4,2.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgQAXIgCACQgCADgDAAIgEABIgDABIgBAAQABgBACgEQABgGABgBIAGgEIACgEIgBgFIgBgEIADgTIADgSQADgBACADQACADgBADQABAGgDAIQgCAIAAAFQACgBAGAAIABAAIALgHQAQgIAGAAIACABIgLAOIgMAPIgHgCIADAEIACADQAAAFgZAOQACgFAAgJg");
	this.shape_129.setTransform(-12.9,1.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgQAWIgCADQgDADgCAAIgEAAIgEACIACgGQACgEACgCIAEgEQABgBAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIgBgEIgBgFIADgTIADgSQADgBACADIABAGQAAAGgCAIQgDAIAAAFIAAAAQADgBAGAAIAMgHQAQgIAGAAIACABIgLAOIgMAPIgHgCIADAEIABADQAAAFgYAOQACgFAAgKg");
	this.shape_130.setTransform(-11.6,1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgQAZIAAgBIAAgBIgBgEIAAgCIAAgBIgEgGIgCgFQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAAIABgDIADgIIABgCQAFgFABgHIABgEIABgDIABgCQACACAAAFIAAAKIAAABIABAFQABgEAEgCIABgCIABAAIAIgHQADgDAEgCQADADgCAEIgBADIgBAFIgBABQAAAEgDACIgDAEIgCACIgDADQgDAEgBAFIAAABIAAABIAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgDAFgDADQgCAEgFABIgFAAIAAABQgDgBABgGg");
	this.shape_131.setTransform(-10.8,0.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAIAVIgCgBIAAAAIgBABIgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBgBQgBgCABADIgBgCIgGAAQgEAAgDgDIAAgBIgBgDIAAgBIgCgCIgBgBIgCgBIgBgBIgCgBIgMgGIAPAEIACABIABAAIABAAIABAAIABACIAEgBIABAAIAAgBQAAgCAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIACgBQAEgBADgDIAIgGQADgDADAAIABgBIADgCIAFgDIADgCIABAAIAAAAIABADIgBAAIgFAIIAAABIgBADIAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAABIABAEIAAABIgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIAAABIAAACIgBACQgEADgFABIgIAAIgEgBgAgDAIIAAAAIACACIABAEIgBgEQgBgDgEgBIADACgAgMgEQgQgJgEgFIACgDIAKAHQAIAGACADIgBABg");
	this.shape_132.setTransform(-10.4,-0.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAfATIgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgDIAAAAIgCgDIgBgBIgCgBIgBAAIgBgBIgCgBIAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIgBABIAAAAIgBABQgCADgBADIgEAEQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBIgBABIgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIgBgBIAAgCIgBgJIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgCACgDACIgGAAIgDAAIAAgBIgEAAIgBAAQgBgBAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgEABIgBAAIgDAAIgCAAIAAAAIgBgCIABgDIACgBIAAAAQADgEADgBIALgGQAEgDAEgBIACgBIACgBIABgBIAIgBIABgBQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAAADIAAABIAAAAIAEAAIABABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIADACIACACIAGAIIABABIAAAAIABADIABACIAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIgBgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAAABIACADIAAABIABAEIAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgBABIAAADIAAACIgCgEg");
	this.shape_133.setTransform(-8.4,-0.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAZAYIgBgDIAAgBIAAgEIAAgDIAAgCIAAgBIgBACIgDADQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgBABIgEAEQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgBIgEABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCAAIgBABIgCABIAAgDIAAAAIgBABIAAgFIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgBgDIgDgBIgBAAIAAgBIgCAAIgCABIAAgCQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIAAABQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAAAIAAgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAAAIgEAAIAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgBIgDgCIAAgDIACgEIAAgBIADgCIADgCIALgEIADAAIACgBIABAAIAEgCIACAAIAEgBIADAAIADABIABAAIABAAIAAgBIABAAIACgCQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAAAEIABgBIABAAIAEABIADABIADADIABADIABABIAAABIAAAEIgBACIAAABIgBABIABACIAAAAIgBABIAAAIIAAAGIAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBABIgCAHIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBgAAXAHIAAABIAAgCgAAUgIIABABIAAAAQAAABAAAAQAAABAAAAQAAABABABQAAAAABABIgBgBIAAgCIgBgBIAAgCIgBgBg");
	this.shape_134.setTransform(-7.2,-1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAfATIAAgBIgCgFIgCgCIgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIgBgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCgBIgBgBIAAABIgCABIgBACIAAABIgEAFIgBABIgDAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgBAAQgBAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIgBgDIAAgJQAAgBAAAAQAAgBAAAAQABAAgBgBQAAAAAAAAQgBACgEABIgBAAIgEAAIgDAAIgFAAIgBgBIgCABIgCAAIgEABIgBAAIgDAAIgBAAIgBAAIAAgBQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIACgBIAAgBQADgDAEgBIALgHIAIgDIABgBIACgBIABgBIAJgBIABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAABIgBADIAAABIAEABIABAAIADABIAAAAIADABIACADIAHAHIABABIAAAEIABABIAAABQgBABAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAABIgBAAIACADIABAGIAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIAAADIgBACIgCgEg");
	this.shape_135.setTransform(0.4,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-3.4,6.6,4.3);


(lib.в_отпуск = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUB3IAAg0IAsAAIAAA0gAgUAtIAAgIQAAgJACgHQADgIAEgGIAKgLIALgLIAIgIIAGgIQADgFABgFQACgFAAgHQAAgMgHgHQgIgIgMAAQgPAAgKAIQgIAHgEAUIgrgGQADgOAFgMQAGgMAKgJQAKgJAOgGQAOgFASAAQAjAAAUAQQAUAQAAAcQAAAKgCAIQgCAIgEAGQgDAGgFAFIgJAKIgLAKQgGAFgDAGQgEAFgDAGQgCAFAAAHIAAAGg");
	this.shape.setTransform(201.1,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyB1IhfiXIAACXIgwAAIAAjpIAsAAIBfCYIAAiYIAwAAIAADpg");
	this.shape_1.setTransform(181.2,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_2.setTransform(156.7,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_3.setTransform(139.3,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXB1IAAi/IhHAAIAAgqIC9AAIAAAqIhHAAIAAC/g");
	this.shape_4.setTransform(124.3,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA6B1IgSg2IhQAAIgTA2IgzAAIBYjpIAtAAIBYDpgAAcAWIgchSIgdBSIA5AAg");
	this.shape_5.setTransform(105.8,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqByQgUgJgOgQQgNgQgHgXQgGgXgBgbQAAgcAIgWQAHgXAOgQQAOgQAUgIQAVgJAXAAQAXAAARAGQAQAFAMALQAKAKAIAPQAHAPADASIgxAGQgDgUgLgMQgKgMgXAAQgbAAgOAVQgOAVAAAmQAAAnAPAVQAPAVAZAAQAYAAAKgMQALgMACgVIA0AAQgBATgHAPQgIAQgMAMQgMAMgRAGQgTAHgXAAQgaAAgUgJg");
	this.shape_6.setTransform(83.5,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA7B1IgTg2IhRAAIgTA2IgyAAIBYjpIAuAAIBXDpgAAbAWIgbhSIgcBSIA3AAg");
	this.shape_7.setTransform(61.3,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWB1IhYjpIA2AAIA5CkIA5ikIA1AAIhYDpg");
	this.shape_8.setTransform(41.6,26.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_9.setTransform(10.9,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXB1IAAi/IhHAAIAAgqIC9AAIAAAqIhHAAIAAC/g");
	this.shape_10.setTransform(-10.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgUB3IAAg0IAsAAIAAA0gAgUAtIAAgIQAAgJACgHQADgIAEgGIAKgLIAKgLIAJgIIAGgIQADgFABgFQACgFAAgHQAAgMgHgHQgIgIgMAAQgPAAgKAIQgIAHgFAUIgqgGQADgOAFgMQAGgMAKgJQAKgJAOgGQAOgFASAAQAjAAAUAQQAUAQAAAcQAAAKgCAIQgCAIgEAGQgDAGgFAFIgJAKIgLAKQgGAFgDAGQgEAFgDAGQgCAFAAAHIAAAGg");
	this.shape_11.setTransform(202,27.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330000").s().p("AAyB1IhfiXIAACXIgwAAIAAjpIAsAAIBfCYIAAiYIAwAAIAADpg");
	this.shape_12.setTransform(182.1,27.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330000").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_13.setTransform(157.6,27.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("AgXB1IAAjpIAvAAIAADpg");
	this.shape_14.setTransform(140.2,27.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("AgXB1IAAi/IhHAAIAAgqIC9AAIAAAqIhHAAIAAC/g");
	this.shape_15.setTransform(125.2,27.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330000").s().p("AA6B1IgSg2IhQAAIgTA2IgzAAIBYjpIAtAAIBYDpgAAcAWIgchSIgdBSIA5AAg");
	this.shape_16.setTransform(106.7,27.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AgqByQgUgJgOgQQgNgQgHgXQgGgXgBgbQAAgcAIgWQAHgXAOgQQAOgQAUgIQAVgJAXAAQAXAAARAGQAQAFAMALQAKAKAIAPQAHAPADASIgxAGQgDgUgLgMQgKgMgXAAQgbAAgOAVQgOAVAAAmQAAAnAPAVQAPAVAZAAQAYAAAKgMQALgMACgVIA0AAQgBATgHAPQgIAQgMAMQgMAMgRAGQgTAHgXAAQgaAAgUgJg");
	this.shape_17.setTransform(84.4,27.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330000").s().p("AA7B1IgTg2IhRAAIgTA2IgyAAIBYjpIAuAAIBXDpgAAbAWIgbhSIgcBSIA3AAg");
	this.shape_18.setTransform(62.2,27.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330000").s().p("AgWB1IhYjpIA2AAIA5CkIA5ikIA1AAIhYDpg");
	this.shape_19.setTransform(42.5,27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330000").s().p("AguByQgUgIgPgQQgOgQgIgXQgHgXAAgcQAAgcAHgWQAIgXAPgQQAOgQAVgIQAUgJAZAAQAaAAAVAJQAVAIAOAQQAOAQAIAXQAHAWAAAcQAAAcgHAXQgIAXgOAQQgOAQgVAIQgUAJgbAAQgZAAgVgJgAgtg7QgPAVAAAmQAAAnAPAVQAPAVAeAAQAfAAAPgVQAPgVAAgnQAAgmgPgVQgPgVgfAAQgeAAgPAVg");
	this.shape_20.setTransform(11.8,27.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AgXB1IAAi/IhHAAIAAgqIC9AAIAAAqIhHAAIAAC/g");
	this.shape_21.setTransform(-10,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.в_отпуск, new cjs.Rectangle(-27.7,0.1,245.4,53.3), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palma();
	this.instance.parent = this;
	this.instance.setTransform(-49.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-74,99,148);


(lib.Palma_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palma_dv();
	this.instance.parent = this;
	this.instance.setTransform(89.5,137.8,1,1,0,0,0,89.5,137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:137.7,rotation:-3,y:137.7},35).to({regY:137.8,rotation:0,y:137.8},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,148);


(lib.left_palma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(89.5,141,1,1,0,0,0,40,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_palma, new cjs.Rectangle(0,0,99,148), null);


(lib.flip_bnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// band.png
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(2.5,-126.6,1,1,15,0,0,112.5,51.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:51.5,rotation:0,y:43.5,alpha:1},9,cjs.Ease.get(-1)).to({regX:112.4,regY:51.6,rotation:-3.2,x:2.4,y:34.6},2,cjs.Ease.get(1)).to({regX:112.5,regY:51.5,rotation:0,x:2.5,y:43.5},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-205.3,244,157.8);


(lib.Palma_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.left_palma();
	this.instance.parent = this;
	this.instance.setTransform(94,141.8,1,1,0,0,0,94,141.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:141.7,rotation:5,x:94.1,y:141.7},24).to({regY:141.8,rotation:0,x:94,y:141.8},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,148);


// stage content:
(lib._300x250_Suitcase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button_s
	this.instance = new lib.button_s();
	this.instance.parent = this;
	this.instance.setTransform(150,285,0.999,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(188).to({_off:false},0).to({y:197},6,cjs.Ease.get(1)).to({y:194.4},3).wait(98).to({y:285},9,cjs.Ease.get(1)).wait(1));

	// logo_auto
	this.instance_1 = new lib.logo_auto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,-4.3,1.267,1.267);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(185).to({_off:false},0).to({y:155.7,alpha:1},9,cjs.Ease.get(1)).to({y:147.7},3).wait(98).to({y:99.7,alpha:0},7).to({_off:true},1).wait(2));

	// txt0
	this.instance_2 = new lib.txt0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.9,-56.8,1.267,1.267);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(187).to({_off:false},0).to({y:103.2,alpha:1},9,cjs.Ease.get(1)).to({x:149.8,y:100.5},1).to({x:149.9,y:95.2},2).wait(96).to({y:47.2,alpha:0},7).to({_off:true},1).wait(2));

	// bg
	this.instance_3 = new lib.bg_blank();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,-18.5,1,0.382);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(187).to({_off:false},0).to({scaleY:3.48,y:124.7},9).wait(99).to({scaleY:0.38,y:-18.5},8,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Слой 32
	this.instance_4 = new lib.baterfly();
	this.instance_4.parent = this;
	this.instance_4.setTransform(240.3,139.9,0.818,0.818,0,180,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},0).to({alpha:1},6).to({_off:true},76).wait(104));

	// Слой 9
	this.instance_5 = new lib.baterfly();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.2,109.9,0.818,0.818,0,0,180);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(113).to({_off:false},0).to({alpha:1},6).to({_off:true},82).wait(104));

	// kreslo_r.png
	this.instance_6 = new lib.Kreslo_r();
	this.instance_6.parent = this;
	this.instance_6.setTransform(193.1,146.2,0.139,0.139,0,0,0,43,51.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(101).to({_off:false},0).wait(1).to({regX:49.5,regY:38,scaleX:0.3,scaleY:0.3,x:195,y:142.2},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:196.2,y:139.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:197.5,y:137.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:198.6,y:134.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:199.2,y:133.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:199.5,y:133},0).wait(2).to({scaleX:0.97,scaleY:0.97,x:199.3,y:133.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:133.5},0).wait(1).to({x:199.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:199.3,y:133.3},0).wait(1).to({regX:43.1,regY:51.2,scaleX:1,scaleY:1,x:193.1,y:146.2},0).to({_off:true},88).wait(104));

	// zont.png
	this.instance_7 = new lib.zont_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(148.2,138.7,0.178,0.178,-45,0,0,72.5,97.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(83).to({_off:false},0).wait(1).to({regX:80,regY:53.5,scaleX:0.48,scaleY:0.48,rotation:-28.4,x:141.4,y:118.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-19.9,x:143.3,y:110.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-13.2,x:146.2,y:105.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-7.9,x:149.4,y:100.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-3.8,x:152.5,y:97.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-1,x:154.8,y:95.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:155.7,y:95.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-1.2,x:154.6,y:95.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-2.6,x:153.4,y:96.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-2.8,x:153.2,y:97},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-1.8,x:154.1,y:96.3},0).wait(1).to({regX:72.2,regY:97,scaleX:1,scaleY:1,rotation:0,x:148.2,y:138.6},0).to({_off:true},106).wait(104));

	// kreslo_l.png
	this.instance_8 = new lib.kreslo_l_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(122,150,0.117,0.117,0,0,0,52.4,50.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).wait(1).to({regX:46.5,regY:33,scaleX:0.46,scaleY:0.46,x:119.3,y:142},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:118.3,y:139},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:117.6,y:136.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:117,y:135.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:116.6,y:133.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:116.3,y:132.9},0).wait(1).to({scaleX:1,scaleY:1,x:116.1,y:132.5},0).wait(2).to({scaleX:0.96,scaleY:0.96,x:116.3,y:133.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:116.5,y:133.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:116.3,y:133.1},0).wait(1).to({regX:52.4,regY:50.6,scaleX:1,scaleY:1,x:122,y:150},0).to({_off:true},100).wait(104));

	// Trava.png
	this.instance_9 = new lib.trava();
	this.instance_9.parent = this;
	this.instance_9.setTransform(153.1,129,1,0.061,0,0,0,99.5,43.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(71).to({_off:false},0).wait(1).to({regY:34,scaleY:0.48,y:125.2},0).wait(1).to({scaleY:0.67,y:123.8},0).wait(1).to({scaleY:0.79,y:122.8},0).wait(1).to({scaleY:0.88,y:122.1},0).wait(1).to({scaleY:0.95,y:121.6},0).wait(1).to({scaleY:0.99,y:121.3},0).wait(1).to({scaleY:1,y:121.2},0).wait(1).to({scaleY:0.96,y:121.5},0).wait(1).to({scaleY:0.94,y:121.7},0).wait(1).to({scaleY:0.94,y:121.6},0).wait(1).to({scaleY:0.96,y:121.5},0).wait(1).to({regY:43.8,scaleY:1,y:131},0).to({_off:true},118).wait(104));

	// palma.png
	this.instance_10 = new lib.Palma_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(219,128.7,0.111,0.111,0,-68.2,111.8,85.4,134.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(107).to({_off:false},0).wait(1).to({regX:46.2,regY:76.2,scaleX:0.36,scaleY:0.36,skewX:-43.6,skewY:136.4,x:214.6,y:103.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,skewX:-30.2,skewY:149.8,x:221.2,y:94},0).wait(1).to({scaleX:0.6,scaleY:0.6,skewX:-19.5,skewY:160.5,x:229.4,y:87.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,skewX:-11,skewY:169,x:237.7,y:84.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,skewX:-4.6,skewY:175.4,x:244.7,y:82.5},0).wait(1).to({regX:85.4,regY:134.7,scaleX:0.79,scaleY:0.79,skewX:-0.8,skewY:179.2,x:218.9,y:128.8},0).wait(1).to({regX:46.2,regY:76.2,scaleX:0.8,scaleY:0.8,skewX:0,skewY:180,x:250.3,y:81.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-0.2,skewY:179.8,x:250},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-0.3,skewY:179.7,x:249.8,y:82},0).wait(1).to({x:249.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,skewX:-0.2,skewY:179.8,x:250,y:81.9},0).wait(1).to({regX:85.3,regY:134.8,scaleX:0.8,scaleY:0.8,skewX:0,skewY:180,x:218.9,y:128.7},0).to({_off:true},82).wait(104));

	// Palma_1
	this.instance_11 = new lib.Palma_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(207.5,120,0.062,0.062,-90,0,0,90.3,144.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({_off:false},0).wait(1).to({regX:55.6,regY:70.4,scaleX:0.2,scaleY:0.2,rotation:-44.6,x:192.1,y:114.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-19.5,x:191.5,y:103.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-0.1,x:195.7,y:95.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:14.5,x:201.8,y:89.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:24.6,x:207.2,y:86.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:29.6,x:210.2,y:85},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:28.8,x:209.7,y:85.2},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:25.4,x:207.6,y:86},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:23.2,x:206.4,y:86.6},0).wait(1).to({rotation:23.3,x:206.5,y:86.5},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:25.6,x:207.8,y:86},0).wait(1).to({regX:90.1,regY:144.8,scaleX:0.43,scaleY:0.43,rotation:30,x:207.5,y:120},0).to({_off:true},112).wait(104));

	// Palma_1
	this.instance_12 = new lib.Palma_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(92,128,0.094,0.094,30,0,0,83.7,121.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95).to({_off:false},0).wait(1).to({regX:55.6,regY:70.4,scaleX:0.45,scaleY:0.45,rotation:18.3,x:87.2,y:102.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:12.1,x:81.3,y:92.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:7.5,x:75.5,y:86},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:4,x:70.4,y:81.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:1.6,x:66.5,y:78.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.3,x:64.3,y:77.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,x:64,y:77},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:0.9,x:65.4,y:77.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:1.7,x:66.7,y:78.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:66.6,y:78.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:1,x:65.6,y:78},0).wait(1).to({regX:84,regY:122.1,scaleX:1,scaleY:1,rotation:0,x:92,y:128.1},0).to({_off:true},94).wait(104));

	// Слой 17
	this.instance_13 = new lib.scr8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(40,117);

	this.instance_14 = new lib.scr7();
	this.instance_14.parent = this;
	this.instance_14.setTransform(42,117);

	this.instance_15 = new lib.scr6();
	this.instance_15.parent = this;
	this.instance_15.setTransform(45,117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},61).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).wait(241));

	// торец
	this.instance_16 = new lib.btn_torrec();
	this.instance_16.parent = this;
	this.instance_16.setTransform(152.1,183.5,1,1,0,0,0,111,18.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(61).to({_off:false},0).to({regY:18.4,scaleX:0.92,scaleY:0.5,x:153.8,y:62.4},7).to({regX:111.2,regY:18.5,scaleX:0.9,scaleY:0.36,x:154.3,y:27.8,alpha:0.5},2).to({_off:true},1).wait(234));

	// Слой 19
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],2.1,-21.9,2.1,-11.5).s().p("AuCA1IhahwIe5APIgfBog");
	this.shape.setTransform(152.3,120.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],1,-7.3,1,20.3).s().p("AuDCLIhUkbIevAMIgfEVg");
	this.shape_1.setTransform(152.6,112.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-0.2,7.2,-0.2,52).s().p("AuDDgIhPnFIelAKIgfHBg");
	this.shape_2.setTransform(152.9,103.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-1.3,21.8,-1.3,83.8).s().p("AuEE2IhJpwIebAHIgfJtg");
	this.shape_3.setTransform(153.2,95.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-2.5,36.4,-2.5,115.6).s().p("AuEGLIhEsZIeRADIgfMbg");
	this.shape_4.setTransform(153.6,86.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-3.6,51,-3.6,147.4).s().p("AuEHhIg/vFIeHABIgfPHg");
	this.shape_5.setTransform(153.9,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},65).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(234));

	// Слой 20
	this.instance_17 = new lib.scr5();
	this.instance_17.parent = this;
	this.instance_17.setTransform(52,117);

	this.instance_18 = new lib.scr4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(52,97);

	this.instance_19 = new lib.scr3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(52,79);

	this.instance_20 = new lib.scr2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(52,62);

	this.instance_21 = new lib.scr1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(52,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},65).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(235));

	// Слой 21
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-2.2,39.8,-2.2,-5.6).s().p("At2jqIb6AJIByHEI/rAJg");
	this.shape_6.setTransform(153,151.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-1.5,34.1,-1.5,-11.3).s().p("AtyjqIbzAJIBxHEI/jAJg");
	this.shape_7.setTransform(153.2,151.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-0.7,28.4,-0.7,-17).s().p("AtvjqIbsAJIBxHEI/bAJg");
	this.shape_8.setTransform(153.4,151.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,22.7,0,-22.7).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_9.setTransform(153.6,151.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0.8,13.9,0.8,-31.5).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_10.setTransform(153.6,151.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],1.6,5.2,1.6,-40.2).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_11.setTransform(153.6,151.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],2.4,-3.6,2.4,-49).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_12.setTransform(153.6,151.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],3.1,-12.4,3.1,-57.8).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_13.setTransform(153.6,151.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],3.9,-21.2,3.9,-66.6).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_14.setTransform(153.6,151.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],4.7,-30,4.7,-75.4).s().p("AtsjqIbmAJIBwHEI/TAJg");
	this.shape_15.setTransform(153.6,151.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},61).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},131).wait(104));

	// Слой 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_61 = new cjs.Graphics().p("AuzOkIAAgTMAjyAAAIAAATg");
	var mask_graphics_62 = new cjs.Graphics().p("AuzO7IAAj4MAjyAAAIAAD4g");
	var mask_graphics_63 = new cjs.Graphics().p("AuzPSIAAncMAjyAAAIAAHcg");
	var mask_graphics_64 = new cjs.Graphics().p("AuzPpIAArBMAjyAAAIAALBg");
	var mask_graphics_65 = new cjs.Graphics().p("AuzQAIAAumMAjyAAAIAAOmg");
	var mask_graphics_66 = new cjs.Graphics().p("AuzQXIAAyJMAjyAAAIAASJg");
	var mask_graphics_67 = new cjs.Graphics().p("AuzQtIAA1tMAjyAAAIAAVtg");
	var mask_graphics_68 = new cjs.Graphics().p("AuzREIAA5SMAjyAAAIAAZSg");
	var mask_graphics_69 = new cjs.Graphics().p("AuzRbIAA83MAjyAAAIAAc3g");
	var mask_graphics_70 = new cjs.Graphics().p("AuzRyMAAAggbMAjyAAAMAAAAgbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_graphics_61,x:134.3,y:93.2}).wait(1).to({graphics:mask_graphics_62,x:134.3,y:95.5}).wait(1).to({graphics:mask_graphics_63,x:134.3,y:97.8}).wait(1).to({graphics:mask_graphics_64,x:134.3,y:100.1}).wait(1).to({graphics:mask_graphics_65,x:134.3,y:102.4}).wait(1).to({graphics:mask_graphics_66,x:134.3,y:104.7}).wait(1).to({graphics:mask_graphics_67,x:134.3,y:106.9}).wait(1).to({graphics:mask_graphics_68,x:134.3,y:109.2}).wait(1).to({graphics:mask_graphics_69,x:134.3,y:111.5}).wait(1).to({graphics:mask_graphics_70,x:134.3,y:113.8}).wait(131).to({graphics:null,x:0,y:0}).wait(104));

	// Слой 23
	this.instance_22 = new lib.bnd_open();
	this.instance_22.parent = this;
	this.instance_22.setTransform(150,120,1,1,0,0,0,110,100);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(61).to({_off:false},0).to({_off:true},140).wait(104));

	// Слой 24
	this.instance_23 = new lib.в_отпуск();
	this.instance_23.parent = this;
	this.instance_23.setTransform(189.1,79.6,1,1,0,0,0,94,29.1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(16).to({_off:false},0).to({x:151.7,alpha:1},10,cjs.Ease.get(1)).wait(35).to({x:189.1,alpha:0},9).to({_off:true},1).wait(234));

	// Слой 25
	this.instance_24 = new lib.улетаешь();
	this.instance_24.parent = this;
	this.instance_24.setTransform(109.6,37.6,1,1,0,0,0,94.4,29.1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(16).to({_off:false},0).to({x:151.7,alpha:1},10,cjs.Ease.get(1)).wait(35).to({x:109.6,alpha:0},9).to({_off:true},1).wait(234));

	// Слой 26 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_61 = new cjs.Graphics().p("AkhFHIrdgGQgQALgRgfQggg9gDjQQAAg3AOgzQAKgkAmhmQAdhMAQggIAKgRIelAAIAeB2QAhCFAGBRQADBPASBtQAJA2AIAnItaA+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_1_graphics_61,x:154,y:188.4}).wait(140).to({graphics:null,x:0,y:0}).wait(104));

	// band.png
	this.instance_25 = new lib.bg();
	this.instance_25.parent = this;
	this.instance_25.setTransform(152.5,-1.5,1,1,15,0,0,112.5,51.5);

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({rotation:0,y:168.5},9,cjs.Ease.get(-1)).to({regX:112.4,regY:51.6,rotation:-3.2,x:152.4,y:159.6},2,cjs.Ease.get(1)).to({regX:112.5,regY:51.5,rotation:0,x:152.5,y:168.5},5,cjs.Ease.get(-1)).to({_off:true},185).wait(104));

	// Слой 33
	this.instance_26 = new lib.shadow_2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(153.8,175.5,1.243,1.726,0,0,0,107.5,34.6);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({regY:34.5,scaleX:1,scaleY:1,x:154.5,y:185.5,alpha:0.91},9,cjs.Ease.get(-1)).to({scaleX:1.04,x:159.8,alpha:0.531},2,cjs.Ease.get(1)).to({scaleX:1,x:153.8,y:186.2,alpha:0.91},5,cjs.Ease.get(-1)).to({_off:true},185).wait(104));

	// Слой 30
	this.instance_27 = new lib.flip_bnd();
	this.instance_27.parent = this;
	this.instance_27.setTransform(152.4,243.9,1,0.675,0,180,0,2.5,53.5);
	this.instance_27.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},201).wait(104));

	// bg
	this.instance_28 = new lib._300x250_txt();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,44.7,300,498.9);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_Suitcase_atlas_P_.png", id:"300x250_Suitcase_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;