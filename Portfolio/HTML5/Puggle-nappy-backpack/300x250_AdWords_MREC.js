(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_AdWords_MREC_atlas_P_", frames: [[0,0,341,487],[343,0,135,156]]}
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



(lib._4pc1 = function() {
	this.spriteSheet = ss["300x250_AdWords_MREC_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x250_AdWords_MREC_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pc2 = function() {
	this.initialize(img.pc2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,368);// helper functions:

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


(lib.txt23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAaIgNgtIgMAtIgHAAIgOg0IAGAAIAMAuIAMguIAHAAIANAuIAMguIAGAAIgPA0g");
	this.shape.setTransform(251,122.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAbQgLAAgEgEQgEgEgBgKIAAgRQABgKAEgEQAEgEALAAIAFAAQALAAAFAEQADAEAAAKIAAARQAAAKgDAEQgFAEgLAAgAgIgUIgFACIgCAEIAAAIIAAANIAAAIIACAEIAFACIAIABIACAAIAIgBIADgCQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIABgIIAAgNIgBgIIgDgEIgDgCIgIgBIgCAAIgIABg");
	this.shape_1.setTransform(244.6,122.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAaIgcguIAAAuIgGAAIAAg0IAJAAIAcAvIAAgvIAGAAIAAA0g");
	this.shape_2.setTransform(239,122.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAaIAAg0IAkAAIAAAGIgfAAIAAASIAeAAIAAAEIgeAAIAAATIAfAAIAAAFg");
	this.shape_3.setTransform(231.6,122.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAaIAAg0IAGAAIAAAvIAdAAIAAAFg");
	this.shape_4.setTransform(227.2,122.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAaIAAg0IAYAAQAIAAADADQADACAAAJQAAAGgCADQgBACgEABQAFAAABADQACACAAAHQAAAIgDADQgEADgKAAgAgNAVIASAAQAGAAABgBQACgDAAgGQAAgGgCgBQgCgCgJAAIgOAAgAgNgCIASAAQAEgBACgBQACgCAAgGQAAgFgCgCQgBgBgIAAIgPAAg");
	this.shape_5.setTransform(222.4,122.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_6.setTransform(217.2,122.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAaIAAg0IAGAAIAAAvIAdAAIAAAFg");
	this.shape_7.setTransform(212.7,122.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAaIAAg0IAFAAIAAA0g");
	this.shape_8.setTransform(209.4,122.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_9.setTransform(205.9,122.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAaIgTg0IAGAAIAQAvIARgvIAGAAIgTA0g");
	this.shape_10.setTransform(201,122.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_11.setTransform(196.1,122.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAaIgXgYIgFAAIAAAYIgFAAIAAg0IAFAAIAAAXIAFAAIAUgXIAIAAIgXAaIAaAag");
	this.shape_12.setTransform(189,122.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAbQgKAAgEgEQgEgEAAgKIAAgRQAAgKAEgEQAEgEAKAAIAFAAQAKAAAEAEQAEADAAAIIAAACIgGAAIAAgBQAAgGgDgDQgCgCgHAAIgDAAIgHABIgEACIgCAEIAAAIIAAANIAAAIIACAEIAEACIAHABIADAAQAHAAADgCQACgDAAgGIAAgCIAAgBIAGAAIAAAEQAAAIgEADQgEAEgKAAg");
	this.shape_13.setTransform(183.8,122.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_14.setTransform(178.8,122.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAaIAAg0IAVAAQAJAAADADQAEADAAAHIAAAIQAAAGgEADQgDACgJAAIgPAAIAAAUgAgMAAIAPAAQAGAAACAAQABgBABgEIAAgIQgBgEgBgCQgCgBgGAAIgPAAg");
	this.shape_15.setTransform(174.1,122.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANAaIgXgYIgFAAIAAAYIgFAAIAAg0IAFAAIAAAXIAFAAIAUgXIAIAAIgXAaIAaAag");
	this.shape_16.setTransform(169.4,122.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAbQgKAAgEgEQgEgEAAgKIAAgRQAAgKAEgEQAEgEAKAAIAFAAQAKAAAEAEQAEADAAAIIAAACIgGAAIAAgBQAAgGgDgDQgCgCgHAAIgDAAIgHABIgEACIgCAEIAAAIIAAANIAAAIIACAEIAEACIAHABIADAAQAHAAADgCQACgDAAgGIAAgCIAAgBIAGAAIAAAEQAAAIgEADQgEAEgKAAg");
	this.shape_17.setTransform(164.1,122.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_18.setTransform(159.1,122.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAaIAAg0IAXAAQAJAAADADQADACAAAJQAAAGgBADQgCACgEABQAFAAACADQABACAAAHQAAAIgDADQgEADgKAAgAgNAVIASAAQAFAAACgBQACgDAAgGQAAgGgCgBQgCgCgIAAIgPAAgAgNgCIASAAQAEgBACgBQACgCAAgGQAAgFgCgCQgBgBgIAAIgPAAg");
	this.shape_19.setTransform(154.1,122.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAaIAAgXIgWgdIAHAAIARAZIASgZIAHAAIgWAdIAAAXg");
	this.shape_20.setTransform(146.8,122.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAaIAAg0IAVAAQAJAAAEADQADADAAAHIAAAIQAAAGgDADQgEACgJAAIgPAAIAAAUgAgMAAIAPAAQAGAAACAAQACgBAAgEIAAgIQAAgEgCgCQgCgBgGAAIgPAAg");
	this.shape_21.setTransform(142.5,122.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAaIAAg0IAVAAQAJAAADADQAEADAAAHIAAAIQAAAGgEADQgDACgJAAIgQAAIAAAUgAgNAAIAQAAQAGAAACAAQABgBABgEIAAgIQgBgEgBgCQgCgBgGAAIgQAAg");
	this.shape_22.setTransform(137.7,122.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_23.setTransform(132.6,122.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANAaIgcguIAAAuIgGAAIAAg0IAJAAIAcAvIAAgvIAGAAIAAA0g");
	this.shape_24.setTransform(127.3,122.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAaIAAg0IAkAAIAAAGIgeAAIAAASIAdAAIAAAEIgdAAIAAATIAeAAIAAAFg");
	this.shape_25.setTransform(119.9,122.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAOAaIAAgLQAAgFgCgCQgCgCgFAAIgSAAIAAAUIgGAAIAAg0IAXAAQAJAAADADQAEADAAAHIAAAIQAAAEgCABQgCACgDABQAEABABACQACACAAAGIAAAMgAgNAAIAQAAQAGAAADgBQACgBAAgEIAAgGQAAgEgCgCQgCgCgHAAIgQAAg");
	this.shape_26.setTransform(114.9,122.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAbQgKAAgEgEQgEgEAAgKIAAgjIAGAAIAAAiIAAAHIACADIADACIAHABIAFAAIAHgBIADgCIACgDIAAgHIAAgiIAGAAIAAAjQAAAKgEAEQgEAEgKAAg");
	this.shape_27.setTransform(109.5,122.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCAaIAAguIgRAAIAAgGIAnAAIAAAGIgRAAIAAAug");
	this.shape_28.setTransform(105,122.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANAaIgcguIAAAuIgGAAIAAg0IAJAAIAcAvIAAgvIAGAAIAAA0g");
	this.shape_29.setTransform(100.2,122.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAaIAAg0IAkAAIAAAGIgfAAIAAASIAeAAIAAAEIgeAAIAAATIAfAAIAAAFg");
	this.shape_30.setTransform(95.3,122.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAaIgTg0IAGAAIAQAvIARgvIAGAAIgTA0g");
	this.shape_31.setTransform(90.3,122.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVAaIAAg0IAZAAQAKABAEAEQAEAEAAAJIAAAQQAAALgEAEQgEADgKAAgAgPAWIASAAQAHAAADgEQADgCAAgHIAAgRQAAgHgDgDQgDgCgHAAIgSAAg");
	this.shape_32.setTransform(85.4,122.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASAaIgFgNIgZAAIgFANIgGAAIATg0IAJAAIATA0gAgKAHIAVAAIgKgbIgBAAg");
	this.shape_33.setTransform(80,122.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt23, new cjs.Rectangle(76.3,117,179.7,11.3), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB3AAIAAAkIhMAAIAAAcIBKAAIAAAdIhKAAIAAAeIBOAAIAAAkg");
	this.shape.setTransform(138.1,-23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBQIgsifIAtAAIAfB8IAgh8IAtAAIgtCfg");
	this.shape_1.setTransform(122.2,-23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_2.setTransform(110.2,-23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBQIAAh7IgpAAIAAgkIB9AAIAAAkIgpAAIAAB7g");
	this.shape_3.setTransform(99.3,-23.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFBSQgiAAgNgPQgOgOAAglIAAgfQAAglAOgPQANgOAiAAIALAAQAiAAANANQANAMAAAhIAAACIgqAAIAAgCQAAgMgFgEQgGgFgMABQgNgBgFAGQgEAFAAAVIAAAZQAAAUAEAGQAFAGANgBQANAAAFgEQAFgFAAgNIAAgDIArAAIAAAEQAAAggNANQgOAOgfAAg");
	this.shape_4.setTransform(84.7,-23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBQIgGgcIgyAAIgIAcIgtAAIAtifIBBAAIAtCfgAgQAUIAiAAIgQhCIgCAAg");
	this.shape_5.setTransform(68.6,-23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVBQIAAgdQAAgKgEgEQgEgDgLgBIgXAAIAAAvIgqAAIAAifIA/AAQAlAAAOAKQANAJAAAZIAAANQAAAQgHAIQgIAKgQABQARADAHAIQAHAIAAAPIAAAhgAgVgCIAXAAQALAAAEgDQAEgEAAgLIAAgFQAAgLgEgEQgEgDgLAAIgXAAg");
	this.shape_6.setTransform(44.9,-23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBSQgjAAgNgPQgOgOAAglIAAgfQAAglAOgPQANgOAjAAIAUAAQAhAAAOAOQAOAPAAAlIAAAfQAAAlgOAOQgOAPghAAgAgXgmQgEAFAAAVIAAAZQAAAVAEAFQAFAGAPgBIAHAAQAOABAFgGQAFgGAAgUIAAgZQAAgVgFgFQgFgGgOABIgHAAQgPgBgFAGg");
	this.shape_7.setTransform(28.6,-23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BQIAAifIBrAAIAAAkIhAAAIAAAfIA8AAIAAAiIg8AAIAAA6g");
	this.shape_8.setTransform(13.8,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(4.8,-39.1,142.9,30.5), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5257A3").s().p("AASBQIgqhAIgDAAIAABAIgrAAIAAifIArAAIAAA8IADAAIAmg8IAzAAIg1BOIA7BRg");
	this.shape.setTransform(127.3,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5257A3").s().p("AgFBSQgiAAgNgOQgOgPAAgkIAAghQAAgkAOgOQANgPAiAAIALAAQAiAAANANQANANAAAfIAAAEIgqAAIAAgEQAAgKgFgFQgGgEgMgBQgNABgFAFQgEAGAAAUIAAAaQAAATAEAGQAFAFANABQANAAAFgGQAFgEAAgNIAAgEIArAAIAAAFQAAAfgNAOQgOAOgfAAg");
	this.shape_1.setTransform(110.9,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5257A3").s().p("AAgBQIgGgcIgyAAIgIAcIguAAIAuifIBCAAIAtCfgAgQATIAiAAIgQhBIgCAAg");
	this.shape_2.setTransform(94.8,60.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5257A3").s().p("AhCBQIAAifIBKAAQAfAAAOANQAOAMAAAcIAAALQAAAbgOANQgOAMgfAAIgfAAIAAArgAgXABIAdAAQAKABAEgDQADgEAAgLIAAgKQAAgJgFgEQgEgEgKAAIgbAAg");
	this.shape_3.setTransform(79.1,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5257A3").s().p("AARBQIgohAIgEAAIAABAIgrAAIAAifIArAAIAAA8IAEAAIAlg8IAzAAIg0BOIA5BRg");
	this.shape_4.setTransform(63.7,60.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5257A3").s().p("AgFBSQgiAAgNgOQgOgPAAgkIAAghQAAgkAOgOQANgPAiAAIALAAQAiAAANANQANANAAAfIAAAEIgqAAIAAgEQAAgKgFgFQgGgEgMgBQgNABgFAFQgEAGAAAUIAAAaQAAATAEAGQAFAFANABQANAAAFgGQAFgEAAgNIAAgEIArAAIAAAFQAAAfgNAOQgOAOgfAAg");
	this.shape_5.setTransform(47.3,60.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5257A3").s().p("AAhBQIgHgcIgyAAIgHAcIgvAAIAvifIBBAAIAtCfgAgQATIAiAAIgQhBIgCAAg");
	this.shape_6.setTransform(31.2,60.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5257A3").s().p("AhBBQIAAifIBKAAQAeAAAMAIQAMAJAAAUIAAAKQAAAOgHAIQgGAGgOADQAOABAIAIQAIAJAAAMIAAAKQAAAXgMAJQgNAJghAAgAgWAtIAfAAQAHAAADgDQADgDAAgGIAAgHQAAgGgDgDQgDgCgHAAIgfAAgAgWgPIAdAAQAHAAADgCQADgDAAgGIAAgHQAAgFgDgDQgDgCgHgBIgdAAg");
	this.shape_7.setTransform(15.2,60.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBQIAAg4Ig3hnIAwAAIAcA+IAcg+IAvAAIg2BnIAAA4g");
	this.shape_8.setTransform(135.4,36.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBQIAAifIBKAAQAgAAANAMQAOANAAAdIAAAKQAAAcgOAMQgNANgggBIgfAAIAAArgAgXACIAdAAQAKgBADgCQAEgEAAgLIAAgJQAAgKgFgEQgDgEgLAAIgbAAg");
	this.shape_9.setTransform(120.4,36.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBQIAAifIBKAAQAfAAAOAMQAOANAAAdIAAAKQAAAcgOAMQgOANgfgBIgfAAIAAArgAgXACIAcAAQALgBAEgCQADgEAAgLIAAgJQAAgKgEgEQgFgEgKAAIgbAAg");
	this.shape_10.setTransform(104.6,36.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhBQIgIgcIgxAAIgHAcIguAAIAuifIBAAAIAtCfgAgQAUIAiAAIgQhCIgCAAg");
	this.shape_11.setTransform(88,36.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANBQIgwh3IAAB3IgpAAIAAifIA/AAIAyB2IAAh2IAoAAIAACfg");
	this.shape_12.setTransform(70.4,36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB3AAIAAAkIhMAAIAAAbIBKAAIAAAeIhKAAIAAAfIBOAAIAAAjg");
	this.shape_13.setTransform(46,36.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcBQIAAg+Ig3AAIAAA+IgrAAIAAifIArAAIAAA8IA3AAIAAg8IArAAIAACfg");
	this.shape_14.setTransform(29.6,36.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVBQIAAh7IgpAAIAAgkIB9AAIAAAkIgpAAIAAB7g");
	this.shape_15.setTransform(13.9,36.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A+vB5IAAjxMA9fAAAIAADxg");
	this.shape_16.setTransform(52.1,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-144.7,21,393.7,55), null);


(lib.t24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9CCFF").s().p("AgOBGIAAgiIAdAAIAAAigAgOAOIAAhTIAdAAIAABTg");
	this.shape.setTransform(263.6,139.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9CCFF").s().p("Ag0BGIAAiLIBoAAIAAAfIhDAAIAAAZIBBAAIAAAZIhBAAIAAAbIBEAAIAAAfg");
	this.shape_1.setTransform(253.8,139.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9CCFF").s().p("AASBGIAAgZQAAgJgDgEQgEgDgJAAIgUAAIAAApIglAAIAAiLIA3AAQAgAAAMAJQAMAIAAAWIAAALQAAAOgHAHQgGAIgOACQAOACAHAHQAGAHAAANIAAAdgAgSgBIAUAAQAKAAADgEQADgDAAgJIAAgFQAAgJgDgDQgEgEgJAAIgUAAg");
	this.shape_2.setTransform(240.3,139.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9CCFF").s().p("AgIBGQgRAAgJgDQgKgDgHgHQgFgHgDgJQgCgJAAgSIAAhTIAlAAIAABQQAAARAEAFQAFAFANAAIAGAAQANAAAEgFQAEgFAAgRIAAhQIAlAAIAABTQAAATgCAIQgCAJgGAHQgGAHgKADQgKADgRAAg");
	this.shape_3.setTransform(225.9,139.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A9CCFF").s().p("AgSBGIAAhsIgkAAIAAgfIBtAAIAAAfIgkAAIAABsg");
	this.shape_4.setTransform(212.4,139.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A9CCFF").s().p("AAMBGIgqhoIAABoIgkAAIAAiLIA3AAIArBnIAAhnIAjAAIAACLg");
	this.shape_5.setTransform(198.2,139.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A9CCFF").s().p("Ag0BGIAAiLIBoAAIAAAfIhDAAIAAAZIBBAAIAAAZIhBAAIAAAbIBEAAIAAAfg");
	this.shape_6.setTransform(183.7,139.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A9CCFF").s().p("AgcBGIgmiLIAnAAIAbBsIAchsIAoAAIgpCLg");
	this.shape_7.setTransform(169.9,139.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9CCFF").s().p("Ag9BGIAAiLIBGAAQAdAAAMANQAMAMAAAfIAAAbQAAAfgMAMQgMANgdAAgAgYAnIAbAAQANAAAEgFQAEgFAAgRIAAgWQAAgSgEgFQgEgFgNAAIgbAAg");
	this.shape_8.setTransform(155.6,139.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A9CCFF").s().p("AAcBGIgGgZIgrAAIgGAZIgpAAIApiLIA4AAIAoCLgAgOARIAeAAIgPg5IgBAAg");
	this.shape_9.setTransform(140.8,139.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9CCFF").s().p("AASBGIAAgZQAAgJgDgEQgEgDgJAAIgUAAIAAApIglAAIAAiLIA3AAQAgAAAMAJQAMAIAAAWIAAALQAAAOgHAHQgGAIgOACQAOACAHAHQAGAHAAANIAAAdgAgSgBIAUAAQAKAAADgEQADgDAAgJIAAgFQAAgJgDgDQgEgEgJAAIgUAAg");
	this.shape_10.setTransform(120.1,139.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A9CCFF").s().p("AgIBHQgeAAgMgMQgMgNAAgfIAAgcQAAggAMgNQAMgMAeAAIARAAQAeAAAMAMQAMANAAAgIAAAcQAAAfgMANQgMAMgeAAgAgTghQgEAFAAASIAAAWQAAARAEAFQAEAFANAAIAFAAQANAAAEgFQAEgFAAgRIAAgWQAAgSgEgFQgEgFgNAAIgFAAQgNAAgEAFg");
	this.shape_11.setTransform(105.9,139.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A9CCFF").s().p("AguBGIAAiLIBdAAIAAAfIg3AAIAAAcIA0AAIAAAdIg0AAIAAAzg");
	this.shape_12.setTransform(93,139.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A9CCFF").s().p("Ag0BGIAAiLIBoAAIAAAfIhDAAIAAAZIBBAAIAAAZIhBAAIAAAbIBEAAIAAAfg");
	this.shape_13.setTransform(259.6,121.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A9CCFF").s().p("AAvBGIAAhmIgcBmIgkAAIgdhnIAABnIgkAAIAAiLIA3AAIAbBkIAdhkIA2AAIAACLg");
	this.shape_14.setTransform(243.1,121.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A9CCFF").s().p("AgSBGIAAiLIAlAAIAACLg");
	this.shape_15.setTransform(230,121.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A9CCFF").s().p("AgSBGIAAhsIgkAAIAAgfIBtAAIAAAfIgkAAIAABsg");
	this.shape_16.setTransform(220.5,121.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A9CCFF").s().p("AgLBHQgZAAgKgIQgMgIAAgTIAAgJIAkAAIAAABQABAIAEADQAEADAJAAIAJAAQAJAAADgDQAEgCgBgGIAAgGQAAgFgCgCQgDgCgJgBIgegEQgRgBgIgJQgHgIAAgRIAAgJQAAgKADgHQACgIAHgFQAEgEAIgCQAHgBAPAAIAUAAQAWAAALAIQAKAJABAPIAAAKIgkAAIAAgCQAAgGgDgCQgDgDgIAAIgIAAQgIAAgEADQgDACAAAFIAAAGQAAAHAPACIAbADQASACAIAIQAJAIAAAPIAAANQAAASgLAKQgLAKgSAAg");
	this.shape_17.setTransform(201.1,121.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A9CCFF").s().p("AgSBGIAAiLIAlAAIAACLg");
	this.shape_18.setTransform(191,121.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A9CCFF").s().p("AASBGIAAgZQAAgJgDgEQgEgDgJAAIgUAAIAAApIglAAIAAiLIA3AAQAgAAAMAJQAMAIAAAWIAAALQAAAOgHAHQgGAIgOACQAOACAHAHQAGAHAAANIAAAdgAgSgBIAUAAQAKAAADgEQADgDAAgJIAAgFQAAgJgDgDQgEgEgJAAIgUAAg");
	this.shape_19.setTransform(174.2,121.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A9CCFF").s().p("Ag0BGIAAiLIBoAAIAAAfIhDAAIAAAZIBBAAIAAAZIhBAAIAAAbIBEAAIAAAfg");
	this.shape_20.setTransform(160.7,121.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A9CCFF").s().p("AAvBGIAAhmIgcBmIgkAAIgdhnIAABnIgkAAIAAiLIA3AAIAbBkIAdhkIA2AAIAACLg");
	this.shape_21.setTransform(144.2,121.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A9CCFF").s().p("AAvBGIAAhmIgcBmIgkAAIgdhnIAABnIgkAAIAAiLIA3AAIAbBkIAdhkIA2AAIAACLg");
	this.shape_22.setTransform(124.8,121.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A9CCFF").s().p("AgIBGQgRAAgJgCQgKgEgHgHQgFgHgDgJQgCgJAAgSIAAhUIAlAAIAABRQAAARAEAFQAFAFANAAIAGAAQANAAAEgFQAEgFAAgRIAAhRIAlAAIAABUQAAATgCAJQgCAIgGAHQgGAHgKAEQgKACgRAAg");
	this.shape_23.setTransform(107.6,121.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A9CCFF").s().p("AgLBHQgZAAgKgIQgMgIAAgTIAAgJIAkAAIAAABQABAIAEADQAEADAJAAIAJAAQAJAAADgDQAEgCgBgGIAAgGQAAgFgCgCQgDgCgJgBIgegEQgRgBgIgJQgHgIAAgRIAAgJQAAgKADgHQACgIAHgFQAEgEAIgCQAHgBAPAAIAUAAQAWAAALAIQAKAJABAPIAAAKIgkAAIAAgCQAAgGgDgCQgDgDgIAAIgIAAQgIAAgEADQgDACAAAFIAAAGQAAAHAPACIAbADQASACAIAIQAJAIAAAPIAAANQAAASgLAKQgLAKgRAAg");
	this.shape_24.setTransform(93.6,121.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t24, new cjs.Rectangle(85.2,107.9,183.7,44.4), null);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3bAAMAu3AAA");
	this.shape.setTransform(150,-62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79AFFF").s().p("A3bImIAAxLMAu3AAAIAARLg");
	this.shape_1.setTransform(150,-6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate, new cjs.Rectangle(-1,-63,302,111.6), null);


(lib.pc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2_1, new cjs.Rectangle(0,0,600,368), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(3,-35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(3,-35,67.5,78), null);


(lib.girlfront2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4pc1();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girlfront2, new cjs.Rectangle(-15,-17,170.5,243.5), null);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBSQgdAAgMgKQgNgJAAgWIAAgKIApAAIAAABQABAJAEADQAFAEAMAAIAJAAQAKAAAEgDQAEgCAAgIIAAgGQAAgGgEgCQgCgDgLgBIgigEQgUgCgIgKQgKgJABgUIAAgKQgBgLAEgIQADgKAHgFQAGgFAIgCQAJgCAQAAIAYAAQAZAAANAKQAMAKAAARIAAAMIgpAAIAAgCQAAgHgEgDQgDgDgJAAIgIAAQgLAAgDACQgEADAAAGIAAAGQAAAKARABIAfAEQAUACAKAKQAKAIAAASIAAAPQAAAUgMAMQgMAMgWAAg");
	this.shape.setTransform(121.1,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BQIAAifIB3AAIAAAjIhMAAIAAAdIBKAAIAAAdIhKAAIAAAeIBOAAIAAAkg");
	this.shape_1.setTransform(106.2,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_2.setTransform(94.5,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BQIAAifIArAAIAAB6IBGAAIAAAlg");
	this.shape_3.setTransform(84.5,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_4.setTransform(73.2,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA2BQIAAh1IggB1IgqAAIghh2IAAB2IgpAAIAAifIA+AAIAgByIAhhyIA+AAIAACfg");
	this.shape_5.setTransform(58.1,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBQIgHgcIgyAAIgIAcIguAAIAuifIBCAAIAtCfgAgQAUIAiAAIgQhCIgCAAg");
	this.shape_6.setTransform(38.7,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BQIAAifIBrAAIAAAjIhAAAIAAAgIA8AAIAAAiIg8AAIAAA6g");
	this.shape_7.setTransform(23.9,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.about, new cjs.Rectangle(14.9,13.4,116,30.5), null);


// stage content:
(lib._300x250_AdWords_MREC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_758 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(758).call(this.frame_758).wait(11));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(79,248,1,1,0,0,0,66,31);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:223,alpha:1},10).wait(104).to({y:318},6,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,regY:30.9,scaleX:0.57,scaleY:0.57,x:45.6,y:292.1},0).to({y:232.1},6,cjs.Ease.get(1)).wait(128).to({y:292.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(23).to({_off:false,regY:31,scaleX:1,scaleY:1,x:79,y:248,alpha:0},0).to({y:223,alpha:1},10).wait(104).to({y:318},6,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,regY:30.9,scaleX:0.57,scaleY:0.57,x:45.6,y:292.1},0).to({y:232.1},6,cjs.Ease.get(1)).wait(128).to({y:292.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(23).to({_off:false,regY:31,scaleX:1,scaleY:1,x:79,y:248,alpha:0},0).to({y:223,alpha:1},10).wait(104).to({y:318},6,cjs.Ease.get(1)).to({_off:true},1).wait(6).to({_off:false,regY:30.9,scaleX:0.57,scaleY:0.57,x:45.6,y:292.1},0).to({y:232.1},6,cjs.Ease.get(1)).wait(31));

	// Pc-1-1.png
	this.instance_1 = new lib.txt23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.2,156.9,1,1,0,0,0,62.1,43.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156).to({_off:false},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(103).to({y:170.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(168).to({_off:false,x:43.2,y:156.9},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(103).to({y:170.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(168).to({_off:false,x:43.2,y:156.9},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(21));

	// ABOUT
	this.instance_2 = new lib.t24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.6,101.9,1,1,0,0,0,48.6,20.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(115).to({y:115.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(156).to({_off:false,x:19.6,y:101.9},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(115).to({y:115.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(156).to({_off:false,x:19.6,y:101.9},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(27));

	// Pc-1-2.png
	this.instance_3 = new lib.girlfront2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,137.5,1,1,0,0,0,72,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:219,y:136.5},10,cjs.Ease.get(1)).wait(119).to({x:379},8).to({_off:true},1).wait(153).to({_off:false,x:384,y:137.5},0).to({x:219,y:136.5},10,cjs.Ease.get(1)).wait(119).to({x:379},8).to({_off:true},1).wait(153).to({_off:false,x:384,y:137.5},0).to({x:219,y:136.5},10,cjs.Ease.get(1)).wait(119).to({x:379},8).to({_off:true},1).wait(49));

	// FREAKING OUT
	this.instance_4 = new lib.txt1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(229.2,46.9,1,1,0,0,0,80.1,43.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(115).to({x:71.2,alpha:0},8).to({_off:true},1).wait(157).to({_off:false,x:229.2},0).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(115).to({x:71.2,alpha:0},8).to({_off:true},1).wait(157).to({_off:false,x:229.2},0).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(115).to({x:71.2,alpha:0},8).to({_off:true},1).wait(53));

	// Слой 5
	this.instance_5 = new lib.txt2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43.2,156.9,1,1,0,0,0,62.1,43.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:53.2,alpha:0},8).to({_off:true},1).wait(159).to({_off:false,x:43.2},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:53.2,alpha:0},8).to({_off:true},1).wait(159).to({_off:false,x:43.2},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:53.2,alpha:0},8).to({_off:true},1).wait(49));

	// ABOUT
	this.instance_6 = new lib.about();
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.6,101.9,1,1,0,0,0,48.6,20.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:29.6,alpha:0},9).to({_off:true},1).wait(158).to({_off:false,x:19.6},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:29.6,alpha:0},9).to({_off:true},1).wait(158).to({_off:false,x:19.6},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:29.6,alpha:0},9).to({_off:true},1).wait(42));

	// Слой 2
	this.instance_7 = new lib.pc2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,92,0.5,0.5,0,0,0,300,184);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(0.98)).wait(138).to({alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(140).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(0.98)).wait(138).to({alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(140).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(0.98)).wait(41));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],56.5,25.3,-187.3,136.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150.5,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.125)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],46.8,40,-194.2,134.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150.5,124.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.098)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],37.2,54.8,-201.1,132.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150.5,124.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.075)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],27.5,69.6,-208,130.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150.5,124.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.051)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],17.9,84.3,-214.9,128).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150.5,124.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.024)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],8.3,99.1,-221.8,125.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150.5,124);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],-1.4,113.9,-228.7,123.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150.5,123.8);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0.004)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],0.3,111.4,-227.5,124.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150.5,123.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0.016)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],5,104,-224.1,125.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150.5,124);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.039)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],13.1,91.7,-218.3,126.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150.5,124.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0.067)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],24.3,74.5,-210.3,129.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150.5,124.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0.102)","rgba(255,255,255,0)","rgba(255,255,255,0.078)"],[0,0.4,0.408],38.8,52.3,-199.9,132.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150.5,124.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},140).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},138).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},140).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},138).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},140).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(140).to({_off:true},1).wait(149).to({_off:false},0).wait(141).to({_off:true},1).wait(149).to({_off:false},0).wait(141).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(146).to({_off:false},0).wait(138).to({_off:true},1).wait(152).to({_off:false},0).wait(138).to({_off:true},1).wait(152).to({_off:false},0).wait(41));

	// Слой 6
	this.instance_8 = new lib.plate();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,274,1,1,0,0,0,150,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({y:229},10,cjs.Ease.get(1)).wait(111).to({y:337},7).to({_off:true},1).wait(162).to({_off:false,y:274},0).to({y:229},10,cjs.Ease.get(1)).wait(111).to({y:337},7).to({_off:true},1).wait(162).to({_off:false,y:274},0).to({y:229},10,cjs.Ease.get(1)).wait(111).to({y:337},7).to({_off:true},1).wait(39));

	// Слой 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#193774").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#193774").s().p("A3bTjMAAAgnFMAu3AAAMAAAAnFg");
	this.shape_13.setTransform(150,125.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#193774").s().p("A3bTkMAAAgnHMAu3AAAMAAAAnHg");
	this.shape_14.setTransform(150,125.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#193774").s().p("A3bTlMAAAgnJMAu3AAAMAAAAnJg");
	this.shape_15.setTransform(150,125.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#193774").s().p("A3bTmMAAAgnLMAu3AAAMAAAAnLg");
	this.shape_16.setTransform(150,125.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#193774").s().p("A3bTnMAAAgnNMAu3AAAMAAAAnNg");
	this.shape_17.setTransform(150,125.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#193774").s().p("A3bToMAAAgnPMAu3AAAMAAAAnPg");
	this.shape_18.setTransform(150,125.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#193774").s().p("A3bTpMAAAgnRMAu3AAAMAAAAnRg");
	this.shape_19.setTransform(150,125.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_12}]},140).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_12}]},144).to({state:[{t:this.shape_12}]},140).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_12}]},144).to({state:[{t:this.shape_12}]},140).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(140).to({_off:true},1).wait(150).to({_off:false},0).wait(140).to({_off:true},1).wait(150).to({_off:false},0).wait(140).to({_off:true},1).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,467.5,251.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pc2.jpg", id:"pc2"},
		{src:"images/300x250_AdWords_MREC_atlas_P_.png", id:"300x250_AdWords_MREC_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;