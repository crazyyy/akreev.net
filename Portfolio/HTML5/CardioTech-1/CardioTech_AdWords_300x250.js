(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"CardioTech_AdWords_300x250_atlas_", frames: [[0,0,300,250],[0,252,300,250],[302,459,134,35],[302,496,162,26],[302,0,167,250],[302,252,159,205]]}
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



(lib.bg1 = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gift = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.santa = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.speakers = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_atlas_"];
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


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtCBIAAkBIAnAAIAADiIA0AAIAAAfg");
	this.shape.setTransform(122.4,83.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtCBIAAkBIAnAAIAADiIA0AAIAAAfg");
	this.shape_1.setTransform(110.7,83.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTCBIAAkBIAnAAIAAEBg");
	this.shape_2.setTransform(99.7,83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyCBIAAhVIABgmIABggIABgbIACgTIgEAAIgmCoIgYAAIgnioIgEAAIACATIACAbIABAgIAAAmIAABVIglAAIAAkBIAzAAIAZBkIAHAfIADAcIABAAIAEgcQACgPAFgQIAZhkIAyAAIAAEBg");
	this.shape_3.setTransform(84.6,83.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+CBIAAkBIApAAIATAAQAJABAKADQAJACAJAGQAIAGAGAKQAHAKADAQQAEAPAAAWIAABLQAAAWgEAQQgDAPgHAKQgGAKgIAGQgJAGgJACQgKADgJABIgTAAgAgWBmIAKAAQAKAAAGgDQAHgDAEgGQAEgHABgMQACgMAAgSIAAhPQAAgTgCgLQgBgMgEgHQgEgHgHgDQgGgDgKAAIgKAAg");
	this.shape_4.setTransform(66.2,83.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfCBIgIguIguAAIgHAuIgnAAIAvkBIAsAAIAwEBgAgSA1IAlAAIgSh/IgBAAg");
	this.shape_5.setTransform(50.4,83.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwCBIAAkBIBfAAIAAAfIg3AAIAABNIAqAAIAAAeIgqAAIAABYIA5AAIAAAfg");
	this.shape_6.setTransform(37.6,83.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXCBIgihgIgOAAIAABgIgnAAIAAkBIArAAIAQAAQAIABAJACQAIADAJAEQAIAFAFAIQAHAIADANQAFAMAAASIAAAGQAAAegJASQgIASgRAIIAqBngAgZAEIAGAAQAKAAAHgCQAHgCAEgFQAEgFACgJQACgJAAgNIAAgUQAAgKgCgHQgBgIgFgEQgEgFgGgCQgIgDgKAAIgGAAg");
	this.shape_7.setTransform(23.3,83.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTCBIAAjiIgpAAIAAgfIB5AAIAAAfIgpAAIAADig");
	this.shape_8.setTransform(8.1,83.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwCBIAAkBIBfAAIAAAfIg3AAIAABNIAqAAIAAAeIgqAAIAABYIA5AAIAAAfg");
	this.shape_9.setTransform(123.6,51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwCBIAAkBIBfAAIAAAfIg3AAIAABNIAqAAIAAAeIgqAAIAABYIA5AAIAAAfg");
	this.shape_10.setTransform(111.1,51.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXCBIghhgIgPAAIAABgIgmAAIAAkBIAqAAIAQAAQAIABAIACQAJADAIAEQAIAFAHAIQAGAIAEANQADAMAAASIAAAGQABAegJASQgJASgQAIIApBngAgZAEIAGAAQAKAAAIgCQAFgCAFgFQAEgFACgJQACgJAAgNIAAgUQAAgKgBgHQgDgIgEgEQgEgFgGgCQgHgDgLAAIgGAAg");
	this.shape_11.setTransform(96.8,51.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxCBIAAkBIBjAAIAAAfIg7AAIAABNIAuAAIAAAeIguAAIAAB3g");
	this.shape_12.setTransform(82.8,51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAXCBIgvh7IgBAAIAAB7IgnAAIAAkBIAnAAIAABxIABAAIAshxIAnAAIgxB5IA3CIg");
	this.shape_13.setTransform(69.2,51.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAfCBIgIguIguAAIgHAuIgnAAIAvkBIAsAAIAwEBgAgSA1IAlAAIgSh/IgBAAg");
	this.shape_14.setTransform(53.1,51.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwCBIAAkBIBfAAIAAAfIg3AAIAABNIAqAAIAAAeIgqAAIAABYIA5AAIAAAfg");
	this.shape_15.setTransform(40.3,51.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXCBIghhgIgPAAIAABgIgmAAIAAkBIAqAAIAQAAQAIABAIACQAJADAIAEQAIAFAHAIQAGAIAEANQADAMAAASIAAAGQAAAegIASQgJASgQAIIApBngAgZAEIAGAAQAKAAAIgCQAFgCAFgFQAEgFACgJQACgJAAgNIAAgUQAAgKgBgHQgCgIgFgEQgEgFgGgCQgHgDgLAAIgGAAg");
	this.shape_16.setTransform(26.1,51.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9CBIAAkBIAnAAIATAAQAIABAJACQAJACAIAEQAIAEAGAGQAGAHAEAJQADAKAAANIAAANQAAAKgDAJQgDAIgFAHQgFAHgGAEQgGAEgGACIAAABQATADAKAOQAJAPAAAXIAAANQAAAOgDALQgDAKgGAHQgFAIgIAEQgIAFgJADQgJACgLABIgUABgAgXBmIALAAQAIAAAGgCQAGgCAFgEQAEgFADgGQACgHAAgJIAAgUQAAgJgBgHQgCgHgEgFQgFgFgGgCQgGgDgKAAIgLAAgAgXgSIAIAAQAIAAAGgBQAGgCAEgEQAFgEADgHQACgGAAgJIAAgLQAAgJgCgHQgCgHgEgFQgEgFgHgCQgFgDgKAAIgIAAg");
	this.shape_17.setTransform(10,51.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgwCBIAAkBIBfAAIAAAfIg3AAIAABNIAqAAIAAAeIgqAAIAABYIA5AAIAAAfg");
	this.shape_18.setTransform(86.8,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXCBIAAh3IgtAAIAAB3IgnAAIAAkBIAnAAIAABsIAtAAIAAhsIAoAAIAAEBg");
	this.shape_19.setTransform(71.2,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSCBIAAjiIgqAAIAAgfIB5AAIAAAfIgqAAIAADig");
	this.shape_20.setTransform(56.2,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSCBIAAjiIgqAAIAAgfIB5AAIAAAfIgqAAIAADig");
	this.shape_21.setTransform(36.5,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgwCBIAAkBIBfAAIAAAfIg3AAIAABNIAqAAIAAAeIgqAAIAABYIA5AAIAAAfg");
	this.shape_22.setTransform(24.5,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQCDQgGgBgGgDQgHgEgGgFQgGgGgFgKQgFgKgDgNQgDgPAAgTIAAhaQAAgUADgOQADgOAFgJQAGgKAHgFQAHgGAHgDQAHgDAIgBIAMgBQAQAAALAFQALAEAGAIQAHAHADAKQADAKAAALIgBAQIgDAPIgfAAIAAgMQAAgrgXAAQgFAAgFACQgEADgDAFQgDAFgBAIQgCAIAAANIAAB0QAAAMACAIQABAIADAFQADAFAEACQAEACAGAAQAGAAAFgDQAFgEADgGQADgGACgIIAAgRIAAgiIgTAAIAAgZIA6AAIAACCIgaAAIgEgYQgIAOgJAGQgKAHgMAAIgLgBg");
	this.shape_23.setTransform(9.6,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,130.9,106), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3690AD").s().p("AgWCrQgIgKAAgSQAAgVAIgJQAIgJAOAAQAOAAAIAKQAIAJAAAUQAAARgIAKQgIAKgOAAQgOAAgIgJgAgYBEIAAgnIABgOIABgLIAEgJIAHgNIAWgkQAHgMAFgNQAEgNAAgLQAAgIgCgGQgCgHgEgFQgEgEgGgDQgGgDgGAAQgPAAgIAOQgHAOAAAbIAAAQIgoAAIgEgUQgBgJAAgLQAAgPAEgNQAFgNAJgJQAKgKAOgFQAPgGAUAAQATAAAQAGQAPAFAKAKQAKAKAFAOQAFAOAAARQAAAKgCAJQgBAJgEAJQgEAJgFAJIgNATIgQAVIgJAMQgDAGgBAFIgCALIgBAOIAAAcg");
	this.shape.setTransform(126.3,148.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3690AD").s().p("AgYCnIAAklIg2AAIAAgoICdAAIAAAoIg1AAIAAElg");
	this.shape_1.setTransform(107.7,149.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3690AD").s().p("AAeCnIAAiaIg7AAIAACaIgyAAIAAlNIAyAAIAACMIA7AAIAAiMIAzAAIAAFNg");
	this.shape_2.setTransform(88.3,149.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3690AD").s().p("AgVCpQgIgCgIgEQgIgEgIgHQgIgIgHgMQgGgNgEgSQgEgSABgZIAAh1QAAgZADgSQAEgSAHgMQAHgMAJgIQAJgHAJgEQAKgDAJgCIARgBQAUAAAOAGQAOAFAJAKQAJAKAEANQADAMAAAPIgBAUIgDAUIgpAAIAAgQQAAg3gdAAQgIAAgGADQgGADgDAGQgEAHgCAKQgCALAAAQIAACWQAAAQACAKQACALAEAGQADAGAGADQAGACAHAAQAIAAAHgEQAFgEAFgIQADgIACgKQACgKAAgMIAAgsIgaAAIAAggIBLAAIAACoIgiAAIgEggQgLATgMAIQgMAIgQAAIgOgBg");
	this.shape_3.setTransform(67.4,149.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3690AD").s().p("AgYCnIAAlNIAxAAIAAFNg");
	this.shape_4.setTransform(51.6,149.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3690AD").s().p("AAeCnIgsh9IgTAAIAAB9IgxAAIAAlNIA3AAIAUABQAKABAMADQALADAKAGQALAGAIAKQAIALAFAQQAFAQAAAWIAAAJQAAAmgLAYQgLAXgVAKIA1CGgAghAFIAIAAQANAAAJgDQAJgCAFgGQAGgHADgMQACgLAAgRIAAgaQAAgNgCgKQgDgJgFgGQgGgGgIgDQgJgDgOAAIgIAAg");
	this.shape_5.setTransform(36.9,149.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8274D").s().p("AgTCoQgKgBgKgEQgKgDgIgGQgIgHgGgJQgGgJgDgNQgEgNAAgRIAAgVQAAgOADgMQADgLAGgJQAFgIAIgGQAIgFAIgFIAAgBQgGgEgGgFQgHgGgGgHQgFgIgDgKQgDgLgBgNIAAgYQAAgQAFgMQAEgMAGgIQAGgJAIgFQAJgFAJgDQAJgDAIgBIAQgBIARABQAIABAJADQAJADAJAFQAHAFAHAJQAGAIAFAMQADAMAAAQIAAAXQAAAOgDAKQgDALgFAIQgGAHgGAGIgNAIIAAACQAJAEAIAGQAGAGAGAIQAGAJADALQADAMAAAOIAAAVQAAARgEANQgDANgGAJQgGAJgJAGQgHAHgKADQgKAEgKABIgUACQgJAAgKgCgAgYAWQgJAKAAAVIAAAlQAAANAEAIQACAIAEAFQAFAEAHACQAFACAGAAQAGAAAGgCQAHgCAEgFQAFgEADgIQACgJABgMIAAglQAAgLgCgHQgDgIgEgFQgEgFgGgCQgFgDgIAAIgDAAQgPAAgIAKgAgVh5QgIALABAVIAAAbQAAALABAIQADAHADAFQADAEAGACQAEACAHAAIADAAQAGAAAFgCQAFgCADgEQAFgFABgHQACgIAAgLIAAgcQABgVgHgKQgHgLgQAAQgPAAgGALg");
	this.shape_6.setTransform(126.1,108.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8274D").s().p("AgzCnIAAgmIAnAAIAAjjIgpAlIgWgaIBLhPIAmAAIAAABIAAEmIAmAAIAAAmg");
	this.shape_7.setTransform(107.8,108.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8274D").s().p("AgQCoQgJgBgJgEQgJgEgIgHQgJgGgGgLQgHgMgEgQQgEgQAAgWIAAiMQAAgVAEgQQAEgQAHgLQAGgLAJgHQAJgGAJgEQAJgDAJgCIAPgBIARABQAIABAKAEQAJADAIAHQAJAGAGALQAHALAEAQQAEAQAAAWIAACMQAAAWgEAQQgEAQgHALQgHALgIAHQgJAHgJAEQgJAEgIABIgRACIgQgCgAgVh5QgIAKAAAWIAAC0QAAAUAIAKQAHAJAOAAQAQAAAHgJQAHgKAAgUIAAi0QAAgWgHgKQgHgKgQAAQgOAAgHAKg");
	this.shape_8.setTransform(89.4,108.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8274D").s().p("AhPCoIAAgdIBKiNIAPgiQAHgOADgLIAFgTIACgPQAAgKgCgHQgCgHgEgEQgDgEgGgCQgFgCgGAAQgRAAgIAPQgIAOAAAaIAAATIgnAAIgDgUQgCgJAAgLQAAgMAEgNQAFgMAJgLQAJgKAPgGQAPgGAUAAQAVAAAPAFQAQAFAKAKQAKAJAEAOQAFAPAAARIgCAUQgCAKgEAMQgEALgHANIgRAdIhBB9IBhAAIAAAog");
	this.shape_9.setTransform(69.8,108);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8274D").s().p("AgYCnIAAklIg2AAIAAgoICdAAIAAAoIg1AAIAAElg");
	this.shape_10.setTransform(127.8,66.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D8274D").s().p("AAeCnIgsh9IgTAAIAAB9IgxAAIAAlNIA3AAIAUABQAKABAMADQALADAKAGQALAGAIAKQAIALAFAQQAFAQAAAWIAAAJQAAAmgLAYQgLAXgVAKIA1CGgAghAFIAIAAQANAAAJgDQAJgCAFgGQAGgHADgMQACgLAAgRIAAgaQAAgNgCgKQgDgJgFgGQgGgGgIgDQgJgDgOAAIgIAAg");
	this.shape_11.setTransform(110,66.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D8274D").s().p("AAoCnIgJg8Ig8AAIgJA8Ig0AAIA+lNIA5AAIA+FNgAgYBFIAxAAIgYilIgBAAg");
	this.shape_12.setTransform(89.4,66.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8274D").s().p("AgYCnIAAklIg2AAIAAgoICdAAIAAAoIg1AAIAAElg");
	this.shape_13.setTransform(71.5,66.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D8274D").s().p("AglCkQgPgGgJgKQgJgKgEgNQgDgNAAgNQAAgLABgJIADgTIAoAAIAAAQQAAANACALQACAKADAHQAEAHAGAEQAHAEAJAAQANAAAIgIQAIgIgBgPIgBgPIgDgNIgIgNIgLgQIg0g+QgOgSgHgSQgIgSAAgVQAAgRAFgOQAGgOAJgJQAKgLAPgFQANgGASAAQAWAAAOAGQAQAHAIAKQAJAKADANQAEAMAAANQAAALgBAJIgFAUIgmAAIAAgQQAAgbgIgOQgHgOgRAAQgOAAgHAIQgHAIAAANIABANIADAKIAFAKIAHAJIA5BGQARAVAIATQAIATAAAWQAAASgFAOQgGAOgKAKQgKAKgPAGQgPAFgRAAQgXAAgOgGg");
	this.shape_14.setTransform(53.8,66.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3690AD").s().p("AAoCnIhQjZIgBAAIABAUIACAYIACAfIABAsIAABiIgtAAIAAlNIAoAAIBQDeIABAAIgBgRIgCgWIgBgaIAAgjIAAh6IAtAAIAAFNg");
	this.shape_15.setTransform(125.2,25.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3690AD").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_16.setTransform(107.1,25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3690AD").s().p("AAeCnIAAiaIg7AAIAACaIgyAAIAAlNIAyAAIAACMIA7AAIAAiMIAzAAIAAFNg");
	this.shape_17.setTransform(87.1,25.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3690AD").s().p("AgYCnIAAklIg2AAIAAgoICdAAIAAAoIg1AAIAAElg");
	this.shape_18.setTransform(67.7,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(23.6,0,114.7,178), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3690AD").s().p("AgWCrQgIgKAAgSQAAgVAIgJQAIgJAOAAQAOAAAIAKQAIAJAAAUQAAARgIAKQgIAKgOAAQgOAAgIgJgAgYBEIAAgnIABgOIABgLIAEgJIAHgNIAWgkQAHgMAFgNQAEgNAAgLQAAgIgCgGQgCgHgEgFQgEgEgGgDQgGgDgGAAQgPAAgIAOQgHAOAAAbIAAAQIgoAAIgEgUQgBgJAAgLQAAgPAEgNQAFgNAJgJQAKgKAOgFQAPgGAUAAQATAAAQAGQAPAFAKAKQAKAKAFAOQAFAOAAARQAAAKgCAJQgBAJgEAJQgEAJgFAJIgNATIgQAVIgJAMQgDAGgBAFIgCALIgBAOIAAAcg");
	this.shape.setTransform(126.3,148.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3690AD").s().p("AAoCnIgJg8Ig8AAIgJA8Ig0AAIA+lNIA5AAIA+FNgAgYBFIAxAAIgYilIgBAAg");
	this.shape_1.setTransform(106.7,149.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3690AD").s().p("AgYCnIAAklIg2AAIAAgoICdAAIAAAoIg2AAIAAElg");
	this.shape_2.setTransform(88.8,149.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3690AD").s().p("AAoCnIhPjZIgCAAIACAUIACAYIABAfIAAAsIAABiIgsAAIAAlNIApAAIBQDeIABAAIgCgRIgCgWIgBgaIgBgjIAAh6IAtAAIAAFNg");
	this.shape_3.setTransform(69.4,149.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3690AD").s().p("AAoCnIgJg8Ig8AAIgJA8Ig0AAIA+lNIA5AAIA+FNgAgYBFIAxAAIgYilIgBAAg");
	this.shape_4.setTransform(48.9,149.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3690AD").s().p("AglCkQgQgGgIgKQgJgKgDgNQgFgNAAgNQAAgLACgJIAEgTIAnAAIAAAQQAAANABALQADAKADAHQAEAHAGAEQAHAEAJAAQANAAAIgIQAHgIAAgPIgBgPIgDgNIgHgNIgMgQIgzg+QgPgSgIgSQgHgSAAgVQAAgRAFgOQAGgOAJgJQAKgLAOgFQAOgGASAAQAWAAAOAGQAQAHAIAKQAJAKADANQAEAMAAANQAAALgCAJIgDAUIgnAAIAAgQQAAgbgIgOQgHgOgRAAQgOAAgHAIQgHAIAAANIABANIADAKIAFAKIAHAJIA5BGQARAVAIATQAJATAAAWQgBASgFAOQgGAOgKAKQgKAKgPAGQgOAFgSAAQgWAAgPgGg");
	this.shape_5.setTransform(30.2,149.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8274D").s().p("AAoCnIhQjZIgBAAIABAUIACAYIACAfIABAsIAABiIgtAAIAAlNIAoAAIBQDeIABAAIgBgRIgCgWIgBgaIAAgjIAAh6IAtAAIAAFNg");
	this.shape_6.setTransform(125.2,108.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8274D").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_7.setTransform(107.1,108.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8274D").s().p("AgYCnIAAklIg2AAIAAgoICdAAIAAAoIg2AAIAAElg");
	this.shape_8.setTransform(89.6,108.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8274D").s().p("AAoCnIgJg8Ig8AAIgJA8Ig0AAIA+lNIA5AAIA+FNgAgYBFIAxAAIgYilIgBAAg");
	this.shape_9.setTransform(71.6,108.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8274D").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_10.setTransform(55.1,108.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3690AD").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_11.setTransform(129.1,66.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3690AD").s().p("AgcCnIg9lNIA0AAIAlEHIABAAIAlkHIA0AAIg9FNg");
	this.shape_12.setTransform(110.7,66.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3690AD").s().p("AgSBEIgGiHIAxAAIgFCHg");
	this.shape_13.setTransform(94.9,53.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3690AD").s().p("AgQCnQgIgBgJgDQgJgEgIgHQgIgHgGgLQgHgMgDgRQgFgSAAgYIAAjmIA0AAIAADzQgBAQACAKQACALADAGQAEAGAFADQAFACAHAAQAHAAAFgCQAGgDADgGQAEgGACgLQACgKAAgQIAAjzIAzAAIAADmQAAAYgFASQgEARgGAMQgHALgHAHQgJAHgJAEQgJADgIABIgQABIgQgBg");
	this.shape_14.setTransform(77.8,67.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3690AD").s().p("AgQCpQgKgCgIgEQgKgEgIgHQgJgIgGgMQgHgNgEgSQgDgSAAgZIAAh1QAAgZADgSQAEgSAHgMQAHgMAIgIQAJgHAJgEQAJgDAKgCIAQgBIAQABQAJABAJAEQAJAEAJAHQAIAHAHAMQAGAMAEASQAFASAAAaIAAB1QAAAZgFASQgDASgIAMQgGANgIAHQgKAIgIAEQgKAEgIABIgQACIgRgBgAgMh+QgFADgFAGQgDAHgCAKQgCALAAAQIAACXQAAAQACAKQACAKADAGQAFAHAFACQAFADAIAAQAHAAAFgDQAGgCADgHQAEgGACgKQACgKAAgQIAAiXQAAgQgCgLQgCgKgEgHQgDgGgGgDQgFgDgHAAQgIAAgFADg");
	this.shape_15.setTransform(56.9,66.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3690AD").s().p("AgZCnIAAhvIhDjeIAzAAIApCgIABAAIApigIAzAAIhEDeIAABvg");
	this.shape_16.setTransform(37.3,66.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3690AD").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_17.setTransform(129.1,25.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3690AD").s().p("AAeCnIg9ifIgBAAIAACfIgzAAIAAlNIAzAAIAACSIABAAIA5iSIAzAAIhBCdIBICwg");
	this.shape_18.setTransform(111.6,25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3690AD").s().p("AgYCnIAAlNIAxAAIAAFNg");
	this.shape_19.setTransform(95,25.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3690AD").s().p("Ag7CnIAAlNIAzAAIAAElIBEAAIAAAog");
	this.shape_20.setTransform(83.3,25.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8274D").s().p("Ag7CnIAAlNIAzAAIAAElIBEAAIAAAog");
	this.shape_21.setTransform(59.6,25.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8274D").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_22.setTransform(43.7,25.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D8274D").s().p("Ag+CnIAAlNIB7AAIAAAoIhIAAIAABkIA3AAIAAAnIg3AAIAAByIBKAAIAAAog");
	this.shape_23.setTransform(27.5,25.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8274D").s().p("Ag/CnIAAlNIB/AAIAAAoIhMAAIAABkIA7AAIAAAnIg7AAIAACag");
	this.shape_24.setTransform(11.4,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,138.2,178), null);


(lib.TC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E57795").s().p("AgTAwIAAgIIAGgBQADAAACgDIADgEIABgHIgShJIAOAAIAIApIABANIABAAIABgNIAGgpIAOAAIgQBLIgCAKIgEAGQgCADgDACQgDABgEAAIgIgBg");
	this.shape.setTransform(50.5,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E57795").s().p("AgGAxIAAhhIANAAIAABhg");
	this.shape_1.setTransform(46.7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E57795").s().p("AgTAxIAAhhIAKAAIABAIIACgDIAEgCIACgDIAFgBIADABIADABQABAAAAAAQAAABABAAQAAAAABABQAAAAABABIADAEIABAHIABALIAAAWIgBAKIgBAIIgDAEIgEADIgDABIgEABQgEAAgBgCIgGgFIABAJIAAAUgAgDglIgDADIAAAsIABACIABACIADACIABAAIACAAIADgDIACgEIAAgHIAAgbIAAgHIgCgEIgDgCIgCgBQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_2.setTransform(42.7,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E57795").s().p("AgUAxIAAhhIALAAIACAIIACgDIACgCIAEgDIAEgBIADABIADABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIADAEIADAHIABALIAAAWIgBAKIgDAIIgDAEIgDADIgEABIgDABQgEAAgCgCIgEgFIAAAJIAAAUgAgDglIgDADIAAAsIABACIABACIACACIACAAIADAAIACgDIABgEIABgHIAAgbIgBgHIgBgEIgCgCIgDgBQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_3.setTransform(37.4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E57795").s().p("AALAuIgDgRIgQAAIgCARIgOAAIARhbIAPAAIARBbgAgGATIANAAIgHgtIAAAAg");
	this.shape_4.setTransform(32,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E57795").s().p("AgGAlIgGgCQgDgCgBgEQgBgDAAgFIAAgEIABgEIAKAAIAAAHIABAFIACACIAEAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIgBgCIgCgCIgBgDIgJgMIgEgDIgDgGIgCgFIgBgGQAAgEACgDQAAgDADgDIAGgDIAGgBIAHABIAGADIADAFIACAHIgBAEIgBAFIgJAAIgBgHIgBgFIgCgCIgDgBIgCABIgCABIgBACIAAADIABAEIADAFIALALIACAFIADAEIADAGIABAFQAAAFgCACQgBAEgDACQgCACgEABQgDACgEAAIgGgBg");
	this.shape_5.setTransform(24.9,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E57795").s().p("AgCAuIgFgBIgGgDIgEgGIgCgIIgBgMIAAggIABgMQABgFACgDQACgDACgCIAFgDIAFgCIADAAQAGAAADACQAEABACADQACACABAEIABAIIAAAFIgBAFIgLAAIAAgEQAAgIgCgEQgCgDgDAAIgCAAIgDADIgBAFIgBAHIAAApIABAHIABAFIADACIACABIACgBIADgCIACgDIAAgFIAAgJIANAAIAAAJQAAALgFAFQgGAGgJAAIgDgBg");
	this.shape_6.setTransform(20.2,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E57795").s().p("AgOAwQgEgCgEgDQgCgDgCgEQgCgEAAgGQAAgEACgEIADgIIAFgGIAEgEIABgBIgCgEIgCgFIgCgGIgCgGIgBgGQAAgEACgEQACgEACgDIAHgEIAIgBQAEAAAEACQADABACADIAEAFIAAAFQAAAFgCAFIgDAIIgFAGIgFAFIAAABIANAYIACgGIABgHIAAgDIgBgDIAMAAIAAADIAAADQAAAHgCAGQgCAGgEAFIAJAPIgPAAIgDgFQgDADgFABQgDACgFAAQgEAAgFgBgAgNAPIgBAJIAAAFIADAFIAEADQACACAEAAIADgCIAFgDIgOgbQgEAEgCAEgAgEglIgDACIgBADIgBAEIABAEIABAEIABAEIACAFIABgBIADgDIABgEIACgFIABgFIAAgEIgCgCIgCgCIgBAAIgDAAg");
	this.shape_7.setTransform(14.3,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E57795").s().p("AgGAuIAAhQIgPAAIAAgLIArAAIAAALIgPAAIAABQg");
	this.shape_8.setTransform(8.7,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E57795").s().p("AAAAHIgIAQIgKgIIAMgMIgRgDIAEgNIAQAJIgDgTIANAAIgDATIAQgJIAEANIgSADIANANIgLAIg");
	this.shape_9.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC, new cjs.Rectangle(0,0,53.7,15.4), null);


(lib.speakers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.speakers();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speakers_1, new cjs.Rectangle(0,0,159,205), null);


(lib.santa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.santa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.santa_1, new cjs.Rectangle(0,0,167,250), null);


(lib.moove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],17.9,-65.9,55.4,-205.9).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape.setTransform(54.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],8.2,-36.5,45.7,-176.5).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_1.setTransform(54.8,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-1.6,-7,35.9,-147).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_2.setTransform(54.8,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-11.3,22.5,26.2,-117.5).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_3.setTransform(54.8,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-20.9,51.9,16.6,-88.1).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_4.setTransform(54.8,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-30.7,81.4,6.8,-58.6).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_5.setTransform(54.8,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-40.4,110.8,-2.9,-29.2).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_6.setTransform(54.8,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-50.1,140.3,-12.6,0.3).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_7.setTransform(54.8,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-59.8,169.8,-22.3,29.8).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_8.setTransform(54.8,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-69.5,199.2,-32,59.2).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_9.setTransform(54.8,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-69.9,140.5,166.6);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,162,26), null);


(lib.gift_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_1, new cjs.Rectangle(0,0,134,35), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#731338").s().p("AgMA5IAAgWIAZAAIAAAWgAgMAQIAAhIIAZAAIAABIg");
	this.shape.setTransform(118.3,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#731338").s().p("AgNA5IAAgqIglhHIAcAAIAWAyIAAAAIAXgyIAcAAIgmBJIAAAog");
	this.shape_1.setTransform(111,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#731338").s().p("AAZA5IgHgWIgjAAIgHAWIgaAAIAkhxIAcAAIAlBxgAgLAOIAXAAIgMgnIAAAAg");
	this.shape_2.setTransform(100.9,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#731338").s().p("AgrA5IAAhxIApAAQATAAAOANQANANAAAVIAAATQAAAVgNANQgOANgTAAgAgRAkIANAAQAKAAAFgHQAHgHgBgMIAAgTQABgMgHgHQgFgIgKAAIgNAAg");
	this.shape_3.setTransform(90.6,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#731338").s().p("AgiAtQgNgOAAgVIAAgTQAAgVANgOQANgNAVAAQAVAAAOANQANAOAAAVIAAATQAAAVgNAOQgOANgVAAQgVAAgNgNgAgPgdQgGAHAAANIAAATQAAAMAGAIQAFAIAKAAQAKAAAGgIQAGgIAAgMIAAgTQAAgNgGgHQgGgIgKAAQgKAAgFAIg");
	this.shape_4.setTransform(79.9,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#731338").s().p("AgMA5IAAhdIgeAAIAAgUIBVAAIAAAUIgeAAIAABdg");
	this.shape_5.setTransform(69.9,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#731338").s().p("AAUA5QgDgDgBgGIgBgLIAAgHQAAgIgFgEQgEgFgHAAIgSAAIAAAsIgbAAIAAhxIAsAAQATAAALAJQAMAJAAAQQAAAJgFAGQgFAHgJADQALADAEAHQAFAGAAALIAAAHIABAKQACAGADACIAAACgAgTgGIARAAQAHAAAEgEQAEgDAAgHQAAgHgEgEQgEgFgHAAIgRAAg");
	this.shape_6.setTransform(56.4,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#731338").s().p("AgnA5IAAhxIBOAAIAAAUIgzAAIAAAZIArAAIAAATIgrAAIAAAcIAzAAIAAAVg");
	this.shape_7.setTransform(46.7,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#731338").s().p("AgrA5IAAhxIApAAQATAAANANQAOANAAAVIAAATQAAAVgOANQgNANgTAAgAgQAkIAMAAQAJAAAGgHQAGgHABgMIAAgTQgBgMgGgHQgGgIgJAAIgMAAg");
	this.shape_8.setTransform(36.7,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#731338").s().p("AAUA5QgDgDgBgGIgBgLIAAgHQAAgIgFgEQgEgFgHAAIgSAAIAAAsIgbAAIAAhxIAsAAQATAAALAJQAMAJAAAQQAAAJgFAGQgFAHgJADQALADAEAHQAFAGAAALIAAAHIABAKQACAGADACIAAACgAgTgGIARAAQAHAAAEgEQAEgDAAgHQAAgHgEgEQgEgFgHAAIgRAAg");
	this.shape_9.setTransform(26.4,17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#731338").s().p("AgiAtQgNgOAAgVIAAgTQAAgVANgOQANgNAVAAQAVAAAOANQANAOAAAVIAAATQAAAVgNAOQgOANgVAAQgVAAgNgNgAgPgdQgGAHAAANIAAATQAAAMAGAIQAFAIAKAAQAKAAAGgIQAGgIAAgMIAAgTQAAgNgGgHQgGgIgKAAQgKAAgFAIg");
	this.shape_10.setTransform(15.4,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#731338").ss(1,1,1).p("ApJinISTAAQAyAAAAAyIAADrQAAAygyAAIyTAAQgyAAAAgyIAAjrQAAgyAyAAg");
	this.shape_11.setTransform(63.6,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ApJCoQgyAAAAgyIAAjrQAAgyAyAAISTAAQAyAAAAAyIAADrQAAAygyAAg");
	this.shape_12.setTransform(63.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-1,-1,129.2,35.6), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,300,250), null);


(lib._10k = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAANIgPAeIgTgOIAXgZIgggFIAHgXIAdAQIgEgjIAXAAIgFAjIAdgQIAIAYIghAEIAXAZIgUAPg");
	this.shape.setTransform(96.3,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXCBIgvh7IgBAAIAAB7IgnAAIAAkBIAnAAIAABxIABAAIAshxIAoAAIgzB5IA4CIg");
	this.shape_1.setTransform(84.7,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeCBIgVh8IgHg1IgCAAIgGA1IgXB8IgnAAIglkBIAlAAIASCbIACAkIAEAAIADgpIAciWIAeAAIAbCWIADApIAEAAIACgkIAQibIAlAAIgkEBg");
	this.shape_2.setTransform(64.7,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnCnIAulNIAhAAIguFNg");
	this.shape_3.setTransform(49.3,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMCCIgOgDQgHgEgHgFQgGgFgFgJQgFgIgDgNQgDgMAAgRIAAhsQAAgRADgNQADgMAFgIQAFgJAHgFQAGgFAHgDQAHgDAHgBIAMgBIANABIAOAEQAHACAGAGQAHAFAFAIQAFAJADAMQADAMAAASIAABsQAAARgDAMQgDANgFAIQgFAJgHAFIgNAJIgOADIgNACIgMgCgAgQhdQgGAHAAARIAACLQAAAQAGAIQAFAHALAAQAMAAAGgHQAGgIAAgQIAAiLQAAgRgGgHQgGgIgMAAQgLAAgFAIg");
	this.shape_4.setTransform(37.2,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnCBIAAgdIAeAAIAAiwIggAdIgRgUIA6g9IAdAAIAAAAIAAAAIAADkIAeAAIAAAdg");
	this.shape_5.setTransform(23,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKCmIAAgkQgPgCgKgFQgJgFgFgIQgHgHgCgJQgDgJAAgKIABgPIAEgPIAeAAIAAAMQAAAVAHALQAFALAOAAQAKAAAGgFQAFgGAAgLIgBgJIgDgKIgFgLIgJgMIgngzQgKgNgHgOQgFgOAAgRQAAgMADgJQADgKAGgIQAGgHAJgFQAJgFALgCIAAgiIAcAAIAAAiQALACAJAGQAIAFAGAIQAFAHACAJQACAIAAAJIgBAPIgDAQIgeAAIAAgNQAAgUgHgLQgGgLgNAAQgKAAgFAGQgGAGAAAKQAAAJAEAHIAJAPIArA5QAHAIAEAIIAJAPQADAHACAIQACAIAAAJQAAALgDAKQgEAJgFAHQgHAIgIAEQgIAFgKACIAAAmg");
	this.shape_6.setTransform(9.2,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEC8E8").s().p("AgOBhIAAiqIgfAAIAAgXIBbAAIAAAXIgfAAIAACqg");
	this.shape_7.setTransform(77.5,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC8E8").s().p("AgVBfQgJgDgFgGQgFgGgDgHQgCgIAAgIIABgLIACgLIAXAAIAAAJIABAOIADAKQACAEAEACQAEACAFAAQAIAAAEgEQAEgFAAgJIAAgIIgCgIIgFgHIgGgKIgegjQgIgLgEgKQgFgLAAgMQAAgKADgIQADgIAGgFQAFgGAJgEQAIgDAKAAQANAAAIAEQAJADAFAGQAFAGACAIQACAHAAAHIgBAMIgCALIgXAAIAAgJQAAgPgEgIQgFgJgJAAQgIAAgEAFQgEAFAAAHIABAIIABAGIADAFIAEAGIAhAoQAKAMAFALQAFALAAANQAAAKgEAIQgDAJgGAGQgGAFgIAEQgJADgKAAQgNAAgIgEg");
	this.shape_8.setTransform(67.2,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC8E8").s().p("AgJBhIgKgCQgFgCgFgEQgEgEgEgHQgEgHgCgKQgCgKAAgOIAAiGIAdAAIAACNIABAQQABAGACADQACAEADABQADACAEAAQAEAAADgCQADgBADgEQACgDABgGIABgQIAAiNIAdAAIAACGQAAAOgCAKQgDAKgDAHQgEAHgFAEQgFAEgFACQgFACgFAAIgJABIgJgBg");
	this.shape_9.setTransform(55.5,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEC8E8").s().p("AgSBeQgIgDgEgGQgFgGgBgHQgCgJAAgIIAAgOIACgPIAYAAIAAAXIABANIACAIIADAFIAGAAIADAAIAEgEQACgCAAgFIABgLIAAiWIAdAAIAACSQAAAPgDAKQgDAJgGAGQgFAFgIACQgHACgHAAQgLAAgHgEg");
	this.shape_10.setTransform(43.7,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC8E8").s().p("AARBhIgYhJIgMAAIAABJIgdAAIAAjBIAhAAIALABIAMACQAHACAGADQAGADAFAHQAFAGADAJQACAKAAAMIAAAGQAAAVgGAOQgGANgNAHIAgBNgAgTADIAFAAQAHAAAGgBQAEgCADgDQAEgEACgHIABgRIAAgPIgBgMQgCgGgDgEQgDgDgFgCQgFgCgIAAIgFAAg");
	this.shape_11.setTransform(29.3,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEC8E8").s().p("AgJBiIgLgDQgFgDgFgEQgFgEgEgIQgDgHgDgKQgCgLAAgOIAAhEQAAgOACgKQADgLADgHQAEgIAFgDQAFgFAGgCIAKgDIAJAAIAKAAQAFAAAFADQAGACAFAEQAFAEADAIQAEAHADAKQACAKAAAPIAABEQAAAOgCAKQgDALgEAHQgDAIgFAEIgLAGIgKAEIgKABIgJgBgAgGhJQgEACgCADQgCAFgBAFIgBAQIAABYIABAOQABAHACADQACADAEACQADACADgBQAFABADgCQADgCACgDQACgDABgHIABgOIAAhYIgBgQQgBgFgCgFQgCgDgDgCQgDgBgFgBQgDABgDABg");
	this.shape_12.setTransform(16.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEC8E8").s().p("AgkBhIAAjBIBJAAIAAAXIgsAAIAAA7IAiAAIAAAVIgiAAIAABag");
	this.shape_13.setTransform(6.9,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._10k, new cjs.Rectangle(0,0,103.2,74), null);


// stage content:
(lib.CardioTech_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_879 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(879).call(this.frame_879).wait(21));

	// Слой 21
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(75.5,280.9,1,1,0,0,0,63.6,16.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).to({y:220.9},15,cjs.Ease.get(1)).wait(45).to({y:270.9},15,cjs.Ease.get(-1)).to({_off:true},1).wait(239).to({_off:false,y:280.9},0).to({y:220.9},15,cjs.Ease.get(1)).wait(46).to({y:270.9},15,cjs.Ease.get(-1)).to({_off:true},1).wait(219).to({_off:false,y:280.9},0).to({y:220.9},15,cjs.Ease.get(1)).wait(35));

	// Слой 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_174 = new cjs.Graphics().p("AotDsIAjgdIgGgNILKpdIAVgNQAagMAeAGQAhAHBrAkQBgAhAjAOQAaALgCAQQgBAMgQANQgRANqzLEg");
	var mask_graphics_489 = new cjs.Graphics().p("AotDsIAjgdIgGgNILKpdIAVgNQAagMAeAGQAhAHBrAkQBgAhAjAOQAaALgCAQQgBAMgQANQgRANqzLEg");
	var mask_graphics_785 = new cjs.Graphics().p("AotDsIAjgdIgGgNILKpdIAVgNQAagMAeAGQAhAHBrAkQBgAhAjAOQAaALgCAQQgBAMgQANQgRANqzLEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(174).to({graphics:mask_graphics_174,x:198.9,y:156.2}).wait(125).to({graphics:null,x:0,y:0}).wait(190).to({graphics:mask_graphics_489,x:198.9,y:156.2}).wait(126).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_graphics_785,x:198.9,y:156.2}).wait(80).to({graphics:null,x:0,y:0}).wait(35));

	// Слой 25
	this.instance_1 = new lib.moove();
	this.instance_1.parent = this;
	this.instance_1.setTransform(210.7,147,1,1,17,0,0,54.8,13.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(174).to({_off:false},0).to({_off:true},126).wait(189).to({_off:false},0).to({_off:true},127).wait(169).to({_off:false},0).to({_off:true},80).wait(35));

	// speakers
	this.instance_2 = new lib.speakers_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380.2,111.7,1,1,0,0,0,79.5,102.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({x:209.2},15,cjs.Ease.get(1)).wait(125).to({x:379.2},15,cjs.Ease.get(-1)).to({_off:true},1).wait(159).to({_off:false,x:380.2},0).to({x:209.2},15,cjs.Ease.get(1)).wait(126).to({x:379.2},15,cjs.Ease.get(-1)).to({_off:true},1).wait(139).to({_off:false,x:380.2},0).to({x:209.2},15,cjs.Ease.get(1)).wait(115));

	// Слой 19
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.8,-16,1,1,0,0,0,81,13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239).to({_off:false},0).to({y:29.5},15,cjs.Ease.get(1)).wait(35).to({y:-16.7},15,cjs.Ease.get(-1)).to({_off:true},11).wait(239).to({_off:false,y:-16},0).to({y:29.5},15,cjs.Ease.get(1)).wait(36).to({y:-16.7},15,cjs.Ease.get(-1)).to({_off:true},11).wait(219).to({_off:false,y:-16},0).to({y:29.5},15,cjs.Ease.get(1)).wait(35));

	// Слой 20
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(115,19,56,0)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape.setTransform(150.5,21.5);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(115,19,56,0.129)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_1.setTransform(150.5,21.5);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(115,19,56,0.247)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_2.setTransform(150.5,21.5);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(115,19,56,0.361)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_3.setTransform(150.5,21.5);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(115,19,56,0.463)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_4.setTransform(150.5,21.5);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(115,19,56,0.557)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_5.setTransform(150.5,21.5);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(115,19,56,0.639)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_6.setTransform(150.5,21.5);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(115,19,56,0.714)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_7.setTransform(150.5,21.5);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(115,19,56,0.78)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_8.setTransform(150.5,21.5);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(115,19,56,0.839)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_9.setTransform(150.5,21.5);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(115,19,56,0.89)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_10.setTransform(150.5,21.5);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(115,19,56,0.929)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_11.setTransform(150.5,21.5);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(115,19,56,0.961)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_12.setTransform(150.5,21.5);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(115,19,56,0.98)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_13.setTransform(150.5,21.5);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(115,19,56,0.996)").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_14.setTransform(150.5,21.5);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#731338").s().p("A3gFsIAArXMAvBAAAIAALXg");
	this.shape_15.setTransform(150.5,21.5);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(239).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},6).wait(239).to({_off:false},0).to({_off:true},1).wait(70).to({_off:false},0).to({_off:true},6).wait(219).to({_off:false},0).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(240).to({_off:false},0).to({_off:true},1).wait(67).to({_off:false},0).to({_off:true},1).wait(246).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(226).to({_off:false},0).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(241).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(248).to({_off:false},0).to({_off:true},1).wait(66).to({_off:false},0).to({_off:true},1).wait(228).to({_off:false},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(242).to({_off:false},0).to({_off:true},1).wait(63).to({_off:false},0).to({_off:true},1).wait(250).to({_off:false},0).to({_off:true},1).wait(64).to({_off:false},0).to({_off:true},1).wait(230).to({_off:false},0).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(243).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(252).to({_off:false},0).to({_off:true},1).wait(62).to({_off:false},0).to({_off:true},1).wait(232).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(244).to({_off:false},0).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(254).to({_off:false},0).to({_off:true},1).wait(60).to({_off:false},0).to({_off:true},1).wait(234).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(245).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(256).to({_off:false},0).to({_off:true},1).wait(58).to({_off:false},0).to({_off:true},1).wait(236).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(246).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(258).to({_off:false},0).to({_off:true},1).wait(56).to({_off:false},0).to({_off:true},1).wait(238).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(247).to({_off:false},0).to({_off:true},1).wait(53).to({_off:false},0).to({_off:true},1).wait(260).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false},0).to({_off:true},1).wait(240).to({_off:false},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(248).to({_off:false},0).to({_off:true},1).wait(51).to({_off:false},0).to({_off:true},1).wait(262).to({_off:false},0).to({_off:true},1).wait(52).to({_off:false},0).to({_off:true},1).wait(242).to({_off:false},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(249).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},1).wait(264).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(244).to({_off:false},0).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(250).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(266).to({_off:false},0).to({_off:true},1).wait(48).to({_off:false},0).to({_off:true},1).wait(246).to({_off:false},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(251).to({_off:false},0).to({_off:true},1).wait(45).to({_off:false},0).to({_off:true},1).wait(268).to({_off:false},0).to({_off:true},1).wait(46).to({_off:false},0).to({_off:true},1).wait(248).to({_off:false},0).to({_off:true},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(252).to({_off:false},0).to({_off:true},1).wait(43).to({_off:false},0).to({_off:true},1).wait(270).to({_off:false},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(250).to({_off:false},0).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(253).to({_off:false},0).to({_off:true},1).wait(41).to({_off:false},0).to({_off:true},1).wait(272).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(252).to({_off:false},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(254).to({_off:false},0).wait(40).to({_off:true},1).wait(274).to({_off:false},0).wait(41).to({_off:true},1).wait(254).to({_off:false},0).wait(35));

	// txt-3
	this.instance_4 = new lib.txt3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(44.1,59.3,1,1,0,0,0,65.4,53);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({_off:false},0).to({x:74.1,alpha:1},15,cjs.Ease.get(1)).wait(55).to({x:44.1,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false},0).to({x:74.1,alpha:1},15,cjs.Ease.get(1)).wait(55).to({x:44.1,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(210).to({_off:false},0).to({x:74.1,alpha:1},15,cjs.Ease.get(1)).wait(55).to({x:44.1,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(44));

	// T&C
	this.instance_5 = new lib.TC();
	this.instance_5.parent = this;
	this.instance_5.setTransform(287.3,178.7,1,1,0,0,0,26.9,7.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(169).to({_off:false},0).to({x:267.3,alpha:1},15,cjs.Ease.get(1)).wait(115).to({x:317.3,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(169).to({_off:false,x:287.3},0).to({x:267.3,alpha:1},15,cjs.Ease.get(1)).wait(116).to({x:317.3,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(149).to({_off:false,x:287.3},0).to({x:267.3,alpha:1},15,cjs.Ease.get(1)).wait(105));

	// 10k
	this.instance_6 = new lib._10k();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.3,152.1,1,1,0,0,0,51.6,37);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(164).to({_off:false},0).to({x:60.3,alpha:1},15,cjs.Ease.get(1)).wait(115).to({x:90.3,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},6).wait(164).to({_off:false},0).to({x:60.3,alpha:1},15,cjs.Ease.get(1)).wait(116).to({x:90.3,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},6).wait(144).to({_off:false},0).to({x:60.3,alpha:1},15,cjs.Ease.get(1)).wait(110));

	// gift
	this.instance_7 = new lib.gift_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(47,90.1,1,1,0,0,0,67,17.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(244).to({_off:false},0).to({x:77,alpha:1},15,cjs.Ease.get(1)).wait(40).to({x:47,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(244).to({_off:false},0).to({x:77,alpha:1},15,cjs.Ease.get(1)).wait(41).to({x:47,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(224).to({_off:false},0).to({x:77,alpha:1},15,cjs.Ease.get(1)).wait(30));

	// gift
	this.instance_8 = new lib.gift_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(77,221.1,1,1,0,0,0,67,17.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164).to({_off:false},0).wait(55).to({x:47,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(244).to({_off:false,x:77,alpha:1},0).wait(55).to({x:47,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(225).to({_off:false,x:77,alpha:1},0).wait(55).to({x:47,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// Слой 17
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(115,19,56,0)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_16.setTransform(150.5,153.5);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(115,19,56,0.129)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_17.setTransform(150.5,153.5);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(115,19,56,0.247)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_18.setTransform(150.5,153.5);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(115,19,56,0.361)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_19.setTransform(150.5,153.5);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(115,19,56,0.463)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_20.setTransform(150.5,153.5);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(115,19,56,0.557)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_21.setTransform(150.5,153.5);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(115,19,56,0.639)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_22.setTransform(150.5,153.5);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(115,19,56,0.714)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_23.setTransform(150.5,153.5);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(115,19,56,0.78)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_24.setTransform(150.5,153.5);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(115,19,56,0.839)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_25.setTransform(150.5,153.5);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(115,19,56,0.89)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_26.setTransform(150.5,153.5);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(115,19,56,0.929)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_27.setTransform(150.5,153.5);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(115,19,56,0.961)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_28.setTransform(150.5,153.5);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(115,19,56,0.98)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_29.setTransform(150.5,153.5);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(115,19,56,0.996)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_30.setTransform(150.5,153.5);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#731338").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_31.setTransform(150.5,153.5);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(159).to({_off:false},0).to({_off:true},1).wait(149).to({_off:false},0).to({_off:true},6).wait(159).to({_off:false},0).to({_off:true},1).wait(150).to({_off:false},0).to({_off:true},6).wait(139).to({_off:false},0).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(160).to({_off:false},0).to({_off:true},1).wait(147).to({_off:false},0).to({_off:true},1).wait(166).to({_off:false},0).to({_off:true},1).wait(148).to({_off:false},0).to({_off:true},1).wait(146).to({_off:false},0).to({_off:true},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(161).to({_off:false},0).to({_off:true},1).wait(145).to({_off:false},0).to({_off:true},1).wait(168).to({_off:false},0).to({_off:true},1).wait(146).to({_off:false},0).to({_off:true},1).wait(148).to({_off:false},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(162).to({_off:false},0).to({_off:true},1).wait(143).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(144).to({_off:false},0).to({_off:true},1).wait(150).to({_off:false},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(163).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(172).to({_off:false},0).to({_off:true},1).wait(142).to({_off:false},0).to({_off:true},1).wait(152).to({_off:false},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(164).to({_off:false},0).to({_off:true},1).wait(139).to({_off:false},0).to({_off:true},1).wait(174).to({_off:false},0).to({_off:true},1).wait(140).to({_off:false},0).to({_off:true},1).wait(154).to({_off:false},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(165).to({_off:false},0).to({_off:true},1).wait(137).to({_off:false},0).to({_off:true},1).wait(176).to({_off:false},0).to({_off:true},1).wait(138).to({_off:false},0).to({_off:true},1).wait(156).to({_off:false},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(166).to({_off:false},0).to({_off:true},1).wait(135).to({_off:false},0).to({_off:true},1).wait(178).to({_off:false},0).to({_off:true},1).wait(136).to({_off:false},0).to({_off:true},1).wait(158).to({_off:false},0).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(167).to({_off:false},0).to({_off:true},1).wait(133).to({_off:false},0).to({_off:true},1).wait(180).to({_off:false},0).to({_off:true},1).wait(134).to({_off:false},0).to({_off:true},1).wait(160).to({_off:false},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(168).to({_off:false},0).to({_off:true},1).wait(131).to({_off:false},0).to({_off:true},1).wait(182).to({_off:false},0).to({_off:true},1).wait(132).to({_off:false},0).to({_off:true},1).wait(162).to({_off:false},0).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(169).to({_off:false},0).to({_off:true},1).wait(129).to({_off:false},0).to({_off:true},1).wait(184).to({_off:false},0).to({_off:true},1).wait(130).to({_off:false},0).to({_off:true},1).wait(164).to({_off:false},0).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(170).to({_off:false},0).to({_off:true},1).wait(127).to({_off:false},0).to({_off:true},1).wait(186).to({_off:false},0).to({_off:true},1).wait(128).to({_off:false},0).to({_off:true},1).wait(166).to({_off:false},0).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(171).to({_off:false},0).to({_off:true},1).wait(125).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(126).to({_off:false},0).to({_off:true},1).wait(168).to({_off:false},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(172).to({_off:false},0).to({_off:true},1).wait(123).to({_off:false},0).to({_off:true},1).wait(190).to({_off:false},0).to({_off:true},1).wait(124).to({_off:false},0).to({_off:true},1).wait(170).to({_off:false},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(173).to({_off:false},0).to({_off:true},1).wait(121).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(172).to({_off:false},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(174).to({_off:false},0).wait(120).to({_off:true},1).wait(194).to({_off:false},0).wait(121).to({_off:true},1).wait(174).to({_off:false},0).wait(115));

	// bg-2.jpg
	this.instance_9 = new lib.bg2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(154).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(130).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(154).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(131).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(134).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(120));

	// Слой 8
	this.instance_10 = new lib.txt2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(253,162.1,1,1,0,0,0,69.1,89);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({x:223,alpha:1},15,cjs.Ease.get(1)).wait(45).to({x:253,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(239).to({_off:false},0).to({x:223,alpha:1},15,cjs.Ease.get(1)).wait(45).to({x:253,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(230).to({_off:false},0).to({x:223,alpha:1},15,cjs.Ease.get(1)).wait(35).to({x:253,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(134));

	// Слой 7
	this.instance_11 = new lib.txt1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(253,162.1,1,1,0,0,0,69.1,89);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({x:223,alpha:1},14,cjs.Ease.get(1)).wait(50).to({x:253,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(235).to({_off:false},0).to({x:223,alpha:1},14,cjs.Ease.get(1)).wait(50).to({x:253,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(236).to({_off:false},0).to({x:223,alpha:1},14,cjs.Ease.get(1)).wait(40).to({x:253,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(195));

	// santa.png
	this.instance_12 = new lib.santa_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-86.5,125,1,1,0,0,0,83.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:83.5},14,cjs.Ease.get(1)).wait(130).to({x:-80.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(155).to({_off:false,x:-86.5},0).to({x:83.5},14,cjs.Ease.get(1)).wait(130).to({x:-80.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(156).to({_off:false,x:-86.5},0).to({x:83.5},14,cjs.Ease.get(1)).wait(110).to({x:-80.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(129));

	// bg-1.jpg
	this.instance_13 = new lib.bg1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(900));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,125,470,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CardioTech_AdWords_300x250_atlas_.png", id:"CardioTech_AdWords_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;