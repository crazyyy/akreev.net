(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_DebtMend_atlas_", frames: [[602,0,318,316],[0,0,600,244]]}
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



(lib.pc1 = function() {
	this.spriteSheet = ss["300x250_DebtMend_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc2 = function() {
	this.spriteSheet = ss["300x250_DebtMend_atlas_"];
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


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBsIAAgbIAXAAIAAAbgAgWAxIAAgQQAAgNAGgIQAGgIAVgIIACgBQAVgJAEgGQADgEABgIIABgTQAAgTgGgIQgHgHgVAAIgeABQgJACgEACQgEAEgCAHQgCAHAAANIAAAGIAAAFIgXAAIAAgVQAAgaAPgLQAPgLAlAAQAmAAANANQANAMAAAgQAAAagFANQgGALgOAHIgMAFQgcAMAAAPIAAAKg");
	this.shape.setTransform(201.2,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKBrIAAjUICVAAIAAAXIh9AAIAABFIB5AAIAAAVIh5AAIAABMIB9AAIAAAXg");
	this.shape_1.setTransform(184.8,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBtQgoAAgQgQQgQgQAAgpIAAhHQAAgpAQgQQAQgQAoAAIAYAAQAnAAAQAOQAQAOAAAgIAAAKIgZAAIAAgGQAAgYgKgJQgJgJgeAAIgPAAQgTAAgJACQgJADgFAFQgGAGgDAJQgCAIAAAYIAAA7QAAAXACAKQADAIAGAFQAFAGAIACQAJADAUAAIAPAAQAeAAAKgKQAKgIAAgbIAAgGIgBgEIAZAAIAAAOQgBAkgPANQgPAOgoAAg");
	this.shape_2.setTransform(165,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBrIhyi9IAAC9IgYAAIAAjUIAlAAIByC8IAAi8IAYAAIAADUg");
	this.shape_3.setTransform(143.4,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABKBrIgVg3IhqAAIgUA3IgYAAIBPjUIAlAAIBPDUgAgtAfIBbAAIgrhxIgGAAg");
	this.shape_4.setTransform(122,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBrIAAi9IhEAAIAAgXICfAAIAAAXIhEAAIAAC9g");
	this.shape_5.setTransform(104.2,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBtQgdAAgMgDQgNgDgHgHQgIgHgFgMQgDgMAAgSIAAgKIAXAAIAAAEQABATADAJQADAJAGAEQAFADALABQAKABAhAAQASAAAKgCQAKgDAFgFQACgDACgHIABgSQAAgYgFgGQgFgGgOgBIhAgGQgdgCgMgLQgLgNAAgdQAAgTAEgLQADgLAJgIQAGgFAMgDQALgCAdAAIAHAAQAhAAANADQANADAKAIQAFAFAEAKQACAJAAAOIAAAHIAAADIgXAAIAAgFQAAgMgCgGQgBgGgDgDQgEgEgMgCQgMgCgeAAQghAAgIAHQgJAIAAAWQAAASAFAHQAGAHAQACIBCAFQAaACAKAMQALAMAAAdQAAAUgDALQgCAKgHAHQgHAJgNAEQgNADgjAAg");
	this.shape_6.setTransform(86.1,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBrIAAjUIAXAAIAADUg");
	this.shape_7.setTransform(72,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBtQgeAAgMgDQgMgDgJgHQgIgHgDgMQgEgMAAgSIAAgKIAYAAIAAAEQAAATACAJQADAJAHAEQAFADALABQALABAgAAQASAAAKgCQAKgDAFgFQACgDACgHIABgSQAAgYgEgGQgGgGgNgBIhBgGQgdgCgMgLQgLgNAAgdQAAgTAEgLQAEgLAHgIQAHgFALgDQAMgCAeAAIAGAAQAhAAANADQAOADAIAIQAHAFACAKQAEAJAAAOIAAAHIgBADIgXAAIAAgFQgBgMgBgGQgBgGgDgDQgEgEgMgCQgLgCgfAAQghAAgJAHQgIAIAAAWQAAASAGAHQAFAHAQACIBCAFQAaACALAMQAKAMAAAdQAAAUgCALQgDAKgGAHQgIAJgNAEQgOADgiAAg");
	this.shape_8.setTransform(57.7,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBtQgdAAgMgDQgMgDgJgHQgHgHgEgMQgEgMAAgSIAAgKIAXAAIAAAEQAAATADAJQAEAJAGAEQAFADAKABQALABAhAAQASAAAKgCQAKgDAFgFQADgDABgHIABgSQAAgYgFgGQgEgGgOgBIhBgGQgegCgLgLQgLgNAAgdQAAgTADgLQAFgLAIgIQAGgFAMgDQALgCAdAAIAHAAQAhAAANADQAOADAJAIQAFAFAEAKQADAJAAAOIAAAHIgBADIgYAAIAAgFQABgMgCgGQgBgGgDgDQgEgEgMgCQgMgCgeAAQghAAgJAHQgIAIAAAWQAAASAFAHQAGAHAQACIBCAFQAaACAKAMQALAMAAAdQAAAUgCALQgDAKgGAHQgIAJgNAEQgOADgiAAg");
	this.shape_9.setTransform(36.8,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKBrIgUg3IhrAAIgUA3IgYAAIBOjUIAmAAIBPDUgAgtAfIBbAAIgrhxIgGAAg");
	this.shape_10.setTransform(16.3,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,214.9,47.6), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBrIAAi9IhEAAIAAgXICfAAIAAAXIhEAAIAAC9g");
	this.shape.setTransform(172.7,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBrIAAjUIBiAAQAjgBALALQALAKAAAhQAAAZgFAKQgGAKgOADQARAEAHAKQAGALAAAaQAAAjgOAMQgOANgpAAgAg4BUIBMAAQAVAAAHgGQAIgHAAgbQAAgXgJgHQgHgHgiABIg+AAgAg4gOIBLAAQATAAAGgGQAHgHAAgXQAAgVgHgGQgHgGgcABIhBAAg");
	this.shape_1.setTransform(155.3,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhKBrIAAjUICVAAIAAAXIh9AAIAABFIB5AAIAAAVIh5AAIAABMIB9AAIAAAXg");
	this.shape_2.setTransform(135.9,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXBrIAAjUIBmAAQAoAAAQAQQARAQAAAnIAABFQAAAogRAQQgQAQgoAAgAg/BVIBKAAQAfAAALgKQAKgKAAgdIAAhFQAAgfgKgJQgLgLgfAAIhKAAg");
	this.shape_3.setTransform(115.3,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBrIAAjUIBrAAQAuAAARASQATAUAAAuIAAAqQAAAwgTATQgRATguAAgAglA7IApAAQAVAAAFgHQAHgHAAgbIAAgiQAAgbgHgIQgGgHgUAAIgpAAg");
	this.shape_4.setTransform(82.7,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQBrIAAjUICfAAIAAAvIhmAAIAAAlIBjAAIAAAoIhjAAIAAAoIBoAAIAAAwg");
	this.shape_5.setTransform(61.2,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhQBrIAAjUICfAAIAAAvIhmAAIAAAlIBjAAIAAAoIhjAAIAAAoIBoAAIAAAwg");
	this.shape_6.setTransform(41.2,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASBrIhBifIAACfIg3AAIAAjUIBVAAIBBCdIAAidIA3AAIAADUg");
	this.shape_7.setTransform(18.4,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,186.5,47.6), null);


(lib.pc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2_1, new cjs.Rectangle(0,0,318,316), null);


(lib.pc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1_1, new cjs.Rectangle(0,0,600,244), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADnBjQgOgOAAgiIAAgmQAAghAOgOQAOgOAigBQAUAAALAHQALAFAHAOIAAhZIAYAAIAADfIgXAAIAAgZQgGAOgMAHQgLAGgVAAQgiAAgOgOgAD5gTQgIAIAAAeIAAAbQAAAdAIAJQAHAIAYAAQAZAAAMgLQALgLAAgZIAAgaQAAgYgLgLQgLgLgaAAQgYAAgHAIgAgnBxQgkAAgOgNQgOgOAAgkIAAglQAAgiAOgNQAOgOAjgBIALAAQAkABAOAOQANANAAAiIAAAYIhwABIgBAMQAAAZAIAJQAIAIAXAAIALAAQAWAAAHgGQAJgHABgOIAYAAQgBAZgPAMQgPALggAAgAhHgTQgHAIAAAWIAAAFIBYAAIAAgFQAAgWgIgIQgHgIgYAAIgLAAQgWAAgJAIgACoBvIAAhiQABgYgIgJQgIgHgVAAQgZAAgLALQgLAMAAAXIAABcIgYAAIAAieIAXAAIAAAXQAGgNAMgFQANgHAVAAQAeAAANANQANANAAAeIAABogAiXBvIAAhhQgBgZgGgIQgHgIgUAAQgWAAgLALQgJALgBAYIAABcIgWAAIAAhrQAAgRgHgIQgGgGgUAAQgXAAgLAMQgKALAAAXIAABcIgXAAIAAieIAWAAIAAAXQAFgNAMgFQAMgHATAAQAUAAAMAHQAKAGAHAOQAGgOAMgGQAMgHARAAQAgAAAMANQAMAMAAAfIAABog");
	this.shape.setTransform(117.1,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADjBlQgLgMAAggIAAhTIgTAAIAAgUIATAAIAAgkIAXAAIAAAkIBOAAIAAAUIhOAAIAABWQABATAFAGQAGAHASAAQARAAAGgHQAFgGABgTIAAgFIAXAAIAAACQAAAhgLAMQgLALgjAAQgbAAgKgMgABbBrQgMgHgFgNIAAAYIgXAAIAAjfIAXAAIAABYQAHgNALgGQANgGATAAQAhAAAPAOQANAOAAAiIAAAmQAAAigNAOQgPAOghAAQgTAAgOgGgABWgQQgMALAAAYIAAAaQAAAZAMALQALALAaAAQAXAAAIgIQAHgIAAgfIAAgbQAAgdgHgIQgIgIgXAAQgaAAgLALgAgyBxQgjAAgOgOQgOgNAAgjIAAgmQAAgiAOgOQAPgOAiAAIALAAQAjAAAOAOQAOAPAAAhIAAAYIhxAAIAAAOQAAAYAIAJQAHAIAYAAIALAAQAVAAAJgGQAHgGACgQIAXAAQgBAbgPALQgPALgfAAgAhRgTQgIAJAAAUIAAAGIBZAAIAAgGQAAgVgHgIQgIgIgYAAIgLAAQgXAAgIAIgAlBBvIAAjfIBtAAQApAAATARQARARAAApIAABJQgBApgRARQgQARgrAAgAknBZIBPAAQAhAAAKgLQAMgLAAgfIAAhHQAAghgMgLQgKgLghAAIhPAAg");
	this.shape_1.setTransform(113.6,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51B9C2").s().p("AAFBLQgPgfgfgpQAegqATgrQAOggAOgtQAGBVAABKQAABFgGBbQgNgxgSgkg");
	this.shape_2.setTransform(66.5,38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A9B2").s().p("AAHBGQgZgdgxgmQAwgnAggoQAXgeAXgoQAKBNAABFQgBBAgJBTQgVgtgfggg");
	this.shape_3.setTransform(63.9,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5D2D5").s().p("Ag4ACQBCg3AphFQAMCPgLBmQgrhEhBg1g");
	this.shape_4.setTransform(62,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4E4E6").s().p("AgsD3IA7g7QAejOgeirIg3g6IAAgCIAQALIA3AuQAdC9geDCIhBA1IgKAGg");
	this.shape_5.setTransform(63.2,39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBEC0").s().p("AA5DxIiBhpQAjgfgDgwQgDgpgcgaQAZgbgDgoQgDgjgTgZIBIg4QAzgnAQgOIAEgDIABAAQgPATgiAnQghAlgQAVQAZAbAEAgQAFAjgSAeQAZAhgFAtQgFAvgjAcIBiBqg");
	this.shape_6.setTransform(51.5,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBDCDE").s().p("AhAgLQAvgsANhAQAKg1gLhKIA3A5QAfCrgfDOIg7A8QAtiehkhlg");
	this.shape_7.setTransform(59.6,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1D2D4").s().p("AgkDIIhRhAQAkgggDgvQgDgpgcgaQAYgbgDgoQgCgjgUgZIBQg+QA1gpAMgMIBKA9QAdC9geDCIhMA9QgKgKg0grg");
	this.shape_8.setTransform(56,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51B9C2").s().p("AgpAAQAAhKAGhVQANAtAPAgQATAqAeArQgfApgPAfQgSAkgNAxQgGhbAAhFg");
	this.shape_9.setTransform(4.3,38.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A9B2").s().p("AhDAAQgBhFALhNQAWApAYAdQAfAoAxAnQgyAmgZAdQgfAggUAtQgKhUAAg/g");
	this.shape_10.setTransform(7,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5D2D5").s().p("Agyh6QApBFBCA3QhAAzgtBGQgKhsAMiJg");
	this.shape_11.setTransform(8.9,38.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4E4E6").s().p("AAkD0IhCg1QgejAAei/IA3guIAQgLIAAACIg3A6QgfCoAfDRIA7A7IABADg");
	this.shape_12.setTransform(7.7,39.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BCBEC0").s().p("AhDD7IBihrQgkgbgEgvQgFguAZghQgSgdAFgjQAEggAZgcQgPgTghgmQgjgmgPgUIgCgCIAAAAIAIAFQAbAYBvBVQgUAZgBAjQgDAoAYAbQgcAagDApQgDAvAjAgIiBBpIgMAJg");
	this.shape_13.setTransform(19.2,39.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DBDCDE").s().p("AgxC8QgfjQAfipIA3g5QgLBKAKA1QANBAAvAsQhjBmAsCdg");
	this.shape_14.setTransform(11.2,39.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0096A0").s().p("AgfgKQAEgHAIgKQAXASAcAZQgGAHgCAFQgigcgVgKg");
	this.shape_15.setTransform(32.1,28.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7A75B4").s().p("Ag0ABQATgbAhgSQAhAYAUAVIg1AtQgYgagcgTg");
	this.shape_16.setTransform(35.3,25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0096A0").s().p("AgigPIAQgNIAZAXIAcAVIgRANQgigagSgSg");
	this.shape_17.setTransform(31.8,56);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#746BA4").s().p("AgfgLQAFgHAKgKIAwAuIgKALQgbgRgagXg");
	this.shape_18.setTransform(32.1,41.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7A75B4").s().p("ABfCcIi3iYQgigZgPgYQgPgXACgaQADggAiglIAZAYQAQAPAIAJQgQASgBAJQgBAMAlAbIABABIC3CXQALAJABAOQACAPgJALQgJALgPABIgEAAQgMAAgJgIg");
	this.shape_19.setTransform(41.7,55.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#22B1BA").s().p("AjUEfQABgOALgJIC5iZIABgBQAkgbgBgMQgBgMgkgjQgdgYgOgVQgPgXAAgYQgBgZAPgXQAPgWAfgZICyiNQAMgJAOACQAOABAJALQjVCCgpA+QgXAiALAeQAKAcArAfQAsAigJAeQgGAWgvAjQhZBAgHAHQg8AxgeA3QgJgLABgOg");
	this.shape_20.setTransform(34.9,39.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A9B2").s().p("Ai4E+QgPgBgJgLQgJgLACgOQABgOALgJIC4iZIACgBQAjgbgBgMQgBgMgkgjQgdgYgOgVQgOgXgBgYQAAgZAPgXQAOgWAfgZICziNQALgJAOACQAOABAJALQAJAMgCAOQgCAOgLAJIizCNQghAcAAAMQAAAOAiAdIABABIAAAAQAdAbANASQAQAXACAXQACAZgPAYQgOAYgjAZIi3CZQgKAHgLAAIgEAAg");
	this.shape_21.setTransform(35.3,39.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7A75B4").s().p("AAnB6IAEgDIAAAAIABgBQAjgdAAgOQAAgMgigcIiyiMQgLgJgCgOQgCgOAJgMQAJgLAOgBQAOgCALAJICzCNQAfAYAOAWQAPAXAAAZQgBAsg4Awg");
	this.shape_22.setTransform(28.4,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DBDCDE").s().p("AgpATQgKgOgUgQQgVgBgQgCIAAgBIAmgHIAnAZIBAgBIAjgWIApAGQgQACgVABQgUARgJANQgWAEgVAAQgUAAgVgEg");
	this.shape_23.setTransform(35.3,74.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BDBFC1").s().p("AhtA8QgMgRABgHIAAgDIB2hcIB7BdQgBAMgKANIgCgTIhuhDIAAAAIhoBDIgCAUg");
	this.shape_24.setTransform(35.4,67.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D2D3D5").s().p("AhHAcIgmAHIACgUIBphEIAAAAIBuBEIABATIgBACIgpgGIgiAXIhBABg");
	this.shape_25.setTransform(35.4,69.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DBDCDE").s().p("AhsAQIAAgBQAVgDAQAAQAUgQAKgOQApgJArAJQAJANAUARQAQAAAVADIgpAGIgjgWIhAgBIgnAZg");
	this.shape_26.setTransform(35.3,4.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BDBFC1").s().p("Ah4ggIAAgDQgBgHAMgSIABAAIACAVIBoBDIAAABIBuhEIACgUQAKAOABAMIh7Bdg");
	this.shape_27.setTransform(35.4,12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D2D3D5").s().p("AgCA1IhphCIgCgVIAmAHIAngaIBBAAIAiAYIApgGIABACIgBAUIhuBDg");
	this.shape_28.setTransform(35.4,9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D1D2D4").s().p("AhlDAQgejBAdi+IBKg9QAUATB9BgQgUAZgCAjQgDAoAZAbQgcAagDApQgDAvAjAgIhRBAQg0ArgKAKg");
	this.shape_29.setTransform(14.8,39.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6E6E7").s().p("AgyGJIgBAAIAAAAIgFgHQgMgQgLgJIgmgEIgBAAIgEgFQgOgMgFgLQgVAPgUABQgVABgRgMQgOgJgHgQQgHgPADgNIgNgLQg3gvgRgSIgBgBIAAgBQgpjIAljRIAAgBIABgBIAkgdQAmggARgLQgDgPAHgPQAHgOANgKQAQgLATABQATAAATALIAFgFIAQgQIABgBIABAAIAPgCIAYgCQARgPALgRIAAAAIABgBQAfgFAYAAQAZAAAfAFIABABIAAAAQALARARAPIAYACIAPACIABAAIABABIAQAQIAFAFQATgLATAAQATgBAQALQANAKAHAOQAHAPgDAPQARALAmAgIAkAdIABABIAAABQAlDRgpDIIAAABIgBABQgRASgzAsIgPAMQACAOgJAPQgKAQgQAKQgRALgTgBQgTgBgSgNQgFAKgOAMIgEAFIgBAAIgmAEQgKAJgNAQIgFAHIAAAAIgBAAQgRAFgiAAQghAAgRgFgAiKFFQAEAJAPAPIADADIAmAEIABAAIABAAQAJAIAPATIAEAGQASAEAeAAQAfAAASgEIAEgGQAPgTAJgIIABAAIAAAAIAngEIADgDQAPgPAEgJIACgDIACACQAQANATACQASABARgKQAPgKAJgOQAIgPgCgMIgBgBIACgBIAQgOQAzgsAQgRQAojHgjjQIgkgcQgjgegVgOIgBgBIAAgCQADgNgGgOQgGgOgNgJQgPgKgSABQgSAAgSAMIgBABIgJgJQgFgGgKgJIgPgCIgYgCIgBAAIgBgBQgRgPgLgRQgagFgcAAQgbAAgaAFQgLARgRAPIgBABIgBAAIgYACIgPACQgKAJgFAGIgJAJIgBgBQgSgMgSAAQgSgBgPAKQgNAJgGAOQgGAOADANIAAACIgBABQgTAMglAgIgkAcQgjDQAoDHQATAUA0AsIAOAMIABABIAAACQgEALAHAPQAHAOANAJQAQAMAUgCQATgCAUgOIACgCg");
	this.shape_30.setTransform(35.3,39.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDFDFD").s().p("AgxGHQgTgYgKgJIgngEQgSgSgFgKQgrAfgjgZQghgWAJgeQhDg5gTgUQgpjIAkjRIAuglQAegZARgLQgHggAegVQAhgWAmAZIAXgYIAUgCIAUgCQASgQALgQQAegGAYAAQAZAAAeAGQALAQASAQQAPAAAZAEIAXAYQAmgZAhAWQAeAVgGAgQARALAeAZIAtAlQAkDRgoDIQgPAQgaAXIgsAkQAHAdgkAXQglAZglgdQgHAMgRAQIgnAEQgKAJgTAYQgSAFggAAQgeAAgTgFg");
	this.shape_31.setTransform(35.6,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,152.3,79.7), null);


// stage content:
(lib._300x250_DebtMend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_620 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(620).call(this.frame_620).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.973)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.89)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.749)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.557)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.306)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.169)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.333)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.502)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.831)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},210).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},211).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(222).to({_off:false},0).wait(1).to({_off:true},1).wait(223).to({_off:false},0).wait(1).to({_off:true},1).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).to({_off:true},1).wait(210).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(211).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(165));

	// Слой 1
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(350.1,125.3,0.655,0.655,0,0,0,76,39.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({x:233.1},12,cjs.Ease.get(1)).to({_off:true},86).wait(127).to({_off:false,x:350.1},0).to({x:233.1},12,cjs.Ease.get(1)).to({_off:true},86).wait(122).to({_off:false,x:350.1},0).to({x:233.1},12,cjs.Ease.get(1)).wait(38));

	// pc2
	this.instance_1 = new lib.pc2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74.6,126,0.5,0.5,15,0,0,158.9,158);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({regX:159,rotation:0,x:79.5,y:104},17,cjs.Ease.get(1)).to({_off:true},93).wait(115).to({_off:false,regX:158.9,rotation:15,x:-74.6,y:126},0).to({regX:159,rotation:0,x:79.5,y:104},17,cjs.Ease.get(1)).to({_off:true},93).wait(110).to({_off:false,regX:158.9,rotation:15,x:-74.6,y:126},0).to({regX:159,rotation:0,x:79.5,y:104},17,cjs.Ease.get(1)).wait(45));

	// Слой 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmAMIAAgXIBNAAIAAAXg");
	this.shape_12.setTransform(73.8,66.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAhIAAhBIBNAAIAABBg");
	this.shape_13.setTransform(65.9,67);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIBNAAIAABpg");
	this.shape_14.setTransform(58.7,67.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmBGIAAiLIBNAAIAACLg");
	this.shape_15.setTransform(52.3,67.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmBWIAAirIBNAAIAACrg");
	this.shape_16.setTransform(46.4,67.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmBkIAAjHIBNAAIAADHg");
	this.shape_17.setTransform(41.3,67.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmBwIAAjfIBNAAIAADfg");
	this.shape_18.setTransform(36.9,67.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmB6IAAjzIBNAAIAADzg");
	this.shape_19.setTransform(33.1,68);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmCCIAAkDIBNAAIAAEDg");
	this.shape_20.setTransform(30,68);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmCJIAAkRIBNAAIAAERg");
	this.shape_21.setTransform(27.7,68.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmCNIAAkZIBNAAIAAEZg");
	this.shape_22.setTransform(25.9,68.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmCQIAAkfIBNAAIAAEfg");
	this.shape_23.setTransform(24.9,68.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmCRIAAkhIBNAAIAAEhg");
	this.shape_24.setTransform(24.6,68.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgmCeIAAk7IBNAAIAAE7g");
	this.shape_25.setTransform(24.5,69.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmCrIAAlUIBNAAIAAFUg");
	this.shape_26.setTransform(24.5,70.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmC3IAAltIBNAAIAAFtg");
	this.shape_27.setTransform(24.4,72);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmDEIAAmHIBNAAIAAGHg");
	this.shape_28.setTransform(24.3,73.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmDRIAAmhIBNAAIAAGhg");
	this.shape_29.setTransform(24.3,74.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmDeIAAm7IBNAAIAAG7g");
	this.shape_30.setTransform(24.2,75.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmDrIAAnVIBNAAIAAHVg");
	this.shape_31.setTransform(24.1,77.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmD3IAAnuIBNAAIAAHug");
	this.shape_32.setTransform(24.1,78.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmEEIAAoHIBNAAIAAIHg");
	this.shape_33.setTransform(24,79.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgmERIAAohIBNAAIAAIhg");
	this.shape_34.setTransform(24,81);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgmEeIAAo7IBNAAIAAI7g");
	this.shape_35.setTransform(23.9,82.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgmErIAApVIBNAAIAAJVg");
	this.shape_36.setTransform(23.8,83.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgmE3IAApuIBNAAIAAJug");
	this.shape_37.setTransform(23.8,84.8);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgmE1IAApqIBNAAIAAJqg");
	this.shape_38.setTransform(23.8,84.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglEvIAApeIBLAAIAAJeg");
	this.shape_39.setTransform(23.8,83);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglElIAApJIBLAAIAAJJg");
	this.shape_40.setTransform(23.8,80.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AglEXIAAotIBLAAIAAItg");
	this.shape_41.setTransform(23.8,77.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AglEFIAAoJIBLAAIAAIJg");
	this.shape_42.setTransform(23.9,73.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgkDvIAAndIBJAAIAAHdg");
	this.shape_43.setTransform(23.9,68.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjDVIAAmpIBHAAIAAGpg");
	this.shape_44.setTransform(23.9,62.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiC3IAAltIBGAAIAAFtg");
	this.shape_45.setTransform(24,55.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgiCUIAAknIBFAAIAAEng");
	this.shape_46.setTransform(24,48.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AghBuIAAjbIBDAAIAADbg");
	this.shape_47.setTransform(24.1,39.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AggBEIAAiHIBBAAIAACHg");
	this.shape_48.setTransform(24.1,30);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgeAWIAAgqIA+AAIAAAqg");
	this.shape_49.setTransform(24.2,19.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgfA7IAAh2IA+AAIAAB2g");
	this.shape_50.setTransform(32.5,23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeBfIAAi8IA+AAIAAC8g");
	this.shape_51.setTransform(40.1,27.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgeB+IAAj7IA+AAIAAD7g");
	this.shape_52.setTransform(47,30.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeCaIAAkzIA9AAIAAEzg");
	this.shape_53.setTransform(53.1,33.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgfCzIAAllIA+AAIAAFlg");
	this.shape_54.setTransform(58.5,36.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgfDIIAAmPIA+AAIAAGPg");
	this.shape_55.setTransform(63.2,38.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgfDbIAAm1IA+AAIAAG1g");
	this.shape_56.setTransform(67.2,40.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgfDpIAAnRIA+AAIAAHRg");
	this.shape_57.setTransform(70.4,41.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgeD1IAAnpIA+AAIAAHpg");
	this.shape_58.setTransform(73,43.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgeD9IAAn5IA+AAIAAH5g");
	this.shape_59.setTransform(74.8,44);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgeECIAAoDIA+AAIAAIDg");
	this.shape_60.setTransform(75.9,44.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeEEIAAoHIA+AAIAAIHg");
	this.shape_61.setTransform(76.2,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},53).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},116).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},54).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},116).to({state:[{t:this.shape_12}]},7).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},48).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(31).to({_off:false},0).wait(53).to({_off:true},1).wait(170).to({_off:false},0).wait(54).to({_off:true},1).wait(171).to({_off:false},0).wait(48).to({_off:true},1).wait(91));

	// txt1
	this.instance_2 = new lib.txt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(194.1,66.3,1.232,1.232,0,0,0,93.3,23.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:144.1,alpha:1},12,cjs.Ease.get(0.99)).wait(66).to({regX:93.2,scaleX:1,scaleY:1,x:173.7,y:28.8},12,cjs.Ease.get(-1)).to({_off:true},128).wait(6).to({_off:false,regX:93.3,scaleX:1.23,scaleY:1.23,x:194.1,y:66.3,alpha:0},0).to({x:144.1,alpha:1},12,cjs.Ease.get(0.99)).wait(67).to({regX:93.2,scaleX:1,scaleY:1,x:173.7,y:28.8},12,cjs.Ease.get(-1)).to({_off:true},128).wait(7).to({_off:false,regX:93.3,scaleX:1.23,scaleY:1.23,x:194.1,y:66.3,alpha:0},0).to({x:144.1,alpha:1},12,cjs.Ease.get(0.99)).wait(61).to({regX:93.2,scaleX:1,scaleY:1,x:173.7,y:28.8},12,cjs.Ease.get(-1)).wait(80));

	// txt2
	this.instance_3 = new lib.txt2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210.1,101.2,1.232,1.232,0,0,0,107.5,23.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:160.1,alpha:1},13,cjs.Ease.get(1)).wait(65).to({regX:107.4,scaleX:1,scaleY:1,x:186.7,y:58.7},12,cjs.Ease.get(1)).to({_off:true},116).wait(18).to({_off:false,regX:107.5,scaleX:1.23,scaleY:1.23,x:210.1,y:101.2,alpha:0},0).to({x:160.1,alpha:1},13,cjs.Ease.get(1)).wait(66).to({regX:107.4,scaleX:1,scaleY:1,x:186.7,y:58.7},12,cjs.Ease.get(1)).to({_off:true},116).wait(19).to({_off:false,regX:107.5,scaleX:1.23,scaleY:1.23,x:210.1,y:101.2,alpha:0},0).to({x:160.1,alpha:1},13,cjs.Ease.get(1)).wait(60).to({regX:107.4,scaleX:1,scaleY:1,x:186.7,y:58.7},12,cjs.Ease.get(1)).wait(68));

	// pc1
	this.instance_4 = new lib.pc1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,189.1,0.5,0.5,0,0,0,300,122.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:229.1},114).to({y:219.1},17,cjs.Ease.get(1)).wait(93).to({y:189.1},0).to({y:229.1},115).to({y:219.1},17,cjs.Ease.get(1)).wait(93).to({y:189.1},0).to({y:229.1},110).to({y:219.1},17,cjs.Ease.get(1)).wait(45));

	// Слой 11
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_62.setTransform(209.2,125.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.027)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_63.setTransform(204.2,125.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.059)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_64.setTransform(199.2,125.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.086)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_65.setTransform(194.2,125.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.118)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_66.setTransform(189.2,125.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.145)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_67.setTransform(184.2,125.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.176)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_68.setTransform(179.2,125.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.204)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_69.setTransform(174.2,125.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.231)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_70.setTransform(169.2,125.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.263)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_71.setTransform(164.2,125.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.29)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_72.setTransform(159.2,125.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.322)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_73.setTransform(154.2,125.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(102,204,255,0)","rgba(102,204,255,0.349)"],[0.208,1],-150.7,0,150.8,0).s().p("A3jFrIAArVMAvHAAAIAALVg");
	this.shape_74.setTransform(149.2,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62}]},126).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},86).to({state:[{t:this.shape_62}]},127).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},86).to({state:[{t:this.shape_62}]},122).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(38));

	// bg
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#75B3E1","#002137"],[0,1],0,0,0,0,0,212.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_75.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(621));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.1,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_DebtMend_atlas_.png", id:"300x250_DebtMend_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;