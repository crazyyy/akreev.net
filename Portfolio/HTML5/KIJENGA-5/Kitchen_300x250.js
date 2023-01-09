(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Kitchen_300x250_atlas_P_", frames: [[223,0,146,250],[0,0,221,224],[0,226,191,81]]},
		{name:"Kitchen_300x250_atlas_NP_", frames: [[302,0,300,192],[0,0,300,250]]}
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
	this.spriteSheet = ss["Kitchen_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc1_1 = function() {
	this.spriteSheet = ss["Kitchen_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc33 = function() {
	this.spriteSheet = ss["Kitchen_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo = function() {
	this.spriteSheet = ss["Kitchen_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quotepngкопия = function() {
	this.spriteSheet = ss["Kitchen_300x250_atlas_P_"];
	this.gotoAndStop(2);
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


(lib.t31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBDQAAgKAHAAQAJAAAAAKQAAAKgJAAQgHAAAAgKgAgCAkIgDhwIALAAIgDBwg");
	this.shape.setTransform(-3.8,70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBMIhZiGIgBAAIABAlIAABhIgKAAIAAiXIALAAIBYCGIABAAIgBgkIAAhiIAKAAIAACXg");
	this.shape_1.setTransform(-14.1,69.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA5QgSgVAAgkQAAgkASgUQASgVAfAAQAgAAASAVQASAVAAAjQAAAkgTAVQgSAVgfAAQgfAAgSgVgAgpgxQgOASAAAfQAAAhAOARQAPASAaAAQAbAAAPgSQAOgRAAghQAAgfgOgSQgPgSgbAAQgaAAgPASg");
	this.shape_2.setTransform(-29.8,69.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA5QgSgVAAgkQAAgkASgUQASgVAfAAQAgAAASAVQASAVAAAjQAAAkgTAVQgSAVgfAAQgfAAgSgVgAgpgxQgOASAAAfQAAAhAOARQAPASAaAAQAbAAAPgSQAOgRAAghQAAgfgOgSQgPgSgbAAQgaAAgPASg");
	this.shape_3.setTransform(-46,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBMIAAiNIgyAAIAAgKIBsAAIAAAKIgwAAIAACNg");
	this.shape_4.setTransform(-59.7,69.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0BMIgVg2Ig9AAIgVA2IgMAAIA9iXIAGAAIA8CXgAgFgpIgVA2IA1AAIgVg2IgGgRIgFARg");
	this.shape_5.setTransform(-71.6,69.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBMIg6hPIgUARIAAA+IgKAAIAAiXIAKAAIAABOIARgQIA7g+IANAAIg9BAIA/BXg");
	this.shape_6.setTransform(-83,69.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBIIAAgLQARAHAZAAQASAAALgIQALgJAAgOQAAgIgEgGQgEgGgIgEQgIgFgPgFQgXgHgJgKQgJgJAAgPQAAgRANgLQAOgLAUAAQAVAAATAIIgEAJQgTgIgRAAQgQAAgKAIQgKAIAAANQAAAJADAFQADAGAHAEQAHAEAQAGQASAFAJAGQAJAGAEAHQAEAHAAALQAAATgOALQgOALgWAAQgcAAgPgGg");
	this.shape_7.setTransform(-96,69.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA0BMIgVg2Ig9AAIgVA2IgMAAIA9iXIAGAAIA8CXgAgFgpIgVA2IA1AAIgVg2IgGgRIgFARg");
	this.shape_8.setTransform(-108.2,69.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBIIAAgLQARAHAZAAQASAAALgIQALgJAAgOQAAgIgEgGQgEgGgIgEQgIgFgPgFQgXgHgJgKQgJgJAAgPQAAgRANgLQAOgLAUAAQAVAAATAIIgEAJQgTgIgRAAQgQAAgKAIQgKAIAAANQAAAJADAFQADAGAHAEQAHAEAQAGQASAFAJAGQAJAGAEAHQAEAHAAALQAAATgOALQgOALgWAAQgcAAgPgGg");
	this.shape_9.setTransform(-120.3,69.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsBMIhZiGIAAAAIABAlIAABhIgKAAIAAiXIALAAIBYCGIABAAIgBgkIAAhiIAKAAIAACXg");
	this.shape_10.setTransform(-11.7,46.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBMIAAiXIAJAAIAACXg");
	this.shape_11.setTransform(-22,46.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBUQgMgCgMgHIAAgoQANAHAOAEQAOADAMAAQAJAAAFgDQAFgEAAgFQAAgEgCgCQgCgDgEgCIgWgLQgQgIgJgHQgIgGgEgJQgEgJAAgMQAAgXARgNQARgOAdAAQAaAAAbANIgOAjQgYgMgRAAQgIAAgEAEQgEADAAAFQAAAEAGAFQAFADAVAKQAWALAJAJQAIAMAAARQAAAPgIANQgIAMgPAHQgPAGgTABQgRAAgLgDg");
	this.shape_12.setTransform(-36.9,45.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBUIAAinIBjAAIAAAkIg2AAIAAAbIAyAAIAAAjIgyAAIAAAgIA2AAIAAAlg");
	this.shape_13.setTransform(-50,45.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWBUIAAiCIgpAAIAAglIB/AAIAAAlIgpAAIAACCg");
	this.shape_14.setTransform(-63.7,45.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag8BAQgVgWAAgqQAAgpAVgWQAVgXAnAAQAoAAAVAWQAVAWAAAqQAAAqgVAWQgVAXgoAAQgnAAgVgXgAghAAQAAAxAhAAQARAAAJgMQAIgMAAgZQAAgYgIgMQgJgMgRAAQghAAAAAwg");
	this.shape_15.setTransform(-80.1,45.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BEQgTgSAAghIAAhlIAuAAIAABiQAAASAGAHQAHAIAMAAQAOAAAGgIQAHgHAAgSIAAhiIAtAAIAABkQAAAhgTASQgSASgjABQgiAAgSgSg");
	this.shape_16.setTransform(-98.3,45.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbBpIgcglQgoAAgVgWQgVgXAAgpQAAgqAVgWQAVgXAoABQAnAAAVAVQAUAXAAAqQAAA4gkAUIApAvgAgjgSQAAAwAiAAQAQAAAIgMQAJgMAAgYQAAgZgJgMQgIgMgQAAQgiAAAAAxg");
	this.shape_17.setTransform(-116.5,47.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxBUIAAinIBjAAIAAAkIg2AAIAAAbIAyAAIAAAjIgyAAIAAAgIA2AAIAAAlg");
	this.shape_18.setTransform(-34,19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxBUIAAinIBjAAIAAAkIg2AAIAAAbIAyAAIAAAjIgyAAIAAAgIA2AAIAAAlg");
	this.shape_19.setTransform(-46.9,19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVBUIgjg9IgMAAIAAA9IgtAAIAAinIA3AAQBEAAAAAyQAAAdgdAPIAxBJgAgagKIAJAAQAXAAAAgVQAAgSgXAAIgJAAg");
	this.shape_20.setTransform(-60.7,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxBUIAAinIBjAAIAAAkIg2AAIAAAhIAyAAIAAAjIgyAAIAAA/g");
	this.shape_21.setTransform(-75.7,19.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFBMIAAiNIgwAAIAAgKIBsAAIAAAKIgyAAIAACNg");
	this.shape_22.setTransform(-93.5,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIBRAAIAAAKIhHAAIAAA5IBDAAIAAAJIhDAAIAABBIBHAAIAAAKg");
	this.shape_23.setTransform(-104.5,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqA6QgTgVAAgkQAAgXAKgSQAJgSASgJQARgKAWAAQAZAAAUAKIgFAJQgTgJgVAAQgdgBgSATQgRATAAAeQAAAjAQAQQARASAfgBQAVABAPgGIAAg1IgtAAIAAgKIA4AAIAABEQgWAKgcAAQgjAAgTgUg");
	this.shape_24.setTransform(-118.6,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(-128.4,0,135.3,86.1), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBZQgMgDgNgGIAAgrQAOAHAOAEQAPAEAMAAQAKAAAFgDQAFgEAAgGQAAgEgCgCIgGgGQgEgDgTgIQgRgIgJgIQgJgGgDgKQgFgJAAgNQAAgZASgNQASgOAeAAQAbAAAdANIgPAlQgZgMgRAAQgJAAgEADQgFAEABAFQgBAFAGAEQAGAEAWALQAXAKAKALQAIAMAAASQAAAQgIANQgIANgRAHQgPAHgVAAQgRAAgMgCg");
	this.shape.setTransform(176.5,-10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BEQgWgYAAgsQAAgsAWgXQAWgXApAAQArAAAWAXQAVAXAAAsQAAAtgWAXQgWAXgqAAQgpAAgWgXgAgjAAQAAAzAjAAQASAAAJgMQAJgNAAgaQAAgagJgMQgJgNgSAAQgjAAAAAzg");
	this.shape_1.setTransform(159.2,-10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBZIglhBIgMAAIAABBIgwAAIAAixIA7AAQBGAAABA1QAAAfgeAPIAzBOgAgbgLIAJAAQAYAAAAgWQAAgSgXAAIgKAAg");
	this.shape_2.setTransform(142.1,-10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BZIAAixIA9AAQAhAAAQAPQASAPgBAbQAAAegRAPQgSAQgfAAIgOAAIAAA7gAgQgIIAJAAQAKAAAGgGQAHgGAAgLQAAgSgTAAIgNAAg");
	this.shape_3.setTransform(125.2,-10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKBZIAAixIA9AAQAqAAAXAWQAXAWAAApQAAAsgYAYQgYAYgsAAgAgaAxIALAAQAUAAALgMQAKgNAAgZQAAgYgKgMQgKgMgSAAIgOAAg");
	this.shape_4.setTransform(101.5,-10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BZIAAixIBpAAIAAAnIg5AAIAAAcIA0AAIAAAlIg0AAIAAAiIA5AAIAAAng");
	this.shape_5.setTransform(85.6,-10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBZIAAiJIgrAAIAAgoICFAAIAAAoIgrAAIAACJg");
	this.shape_6.setTransform(71.2,-10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBZQgMgDgNgGIAAgrQAOAHAPAEQAOAEANAAQAKAAAEgDQAFgEAAgGQAAgEgCgCIgGgGQgFgDgSgIQgRgIgJgIQgIgGgFgKQgEgJAAgNQAAgZASgNQASgOAeAAQAcAAAcANIgOAlQgagMgSAAQgIAAgEADQgEAEgBAFQABAFAFAEQAGAEAXALQAXAKAJALQAIAMAAASQAAAQgIANQgJANgPAHQgQAHgUAAQgSAAgMgCg");
	this.shape_7.setTransform(56.8,-10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3BIQgUgTAAgjIAAhrIAwAAIAABnQAAATAIAJQAGAIANAAQAPAAAGgIQAHgJAAgTIAAhnIAwAAIAABqQAAAjgUATQgTATglAAQgkAAgTgSg");
	this.shape_8.setTransform(40.1,-10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWBZIglhBIgMAAIAABBIgwAAIAAixIA7AAQBGAAAAA1QAAAfgdAPIAzBOgAgbgLIAJAAQAYAAAAgWQAAgSgXAAIgKAAg");
	this.shape_9.setTransform(23.4,-10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXBZIAAiJIgrAAIAAgoICFAAIAAAoIgrAAIAACJg");
	this.shape_10.setTransform(6.6,-10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhABUQgPgGgIgMQgIgMAAgPQAAgfAhgQQgHgJgEgJQgEgKAAgMQAAgUAPgLQAPgLAaAAQAYAAAPALQAOALAAAUQAAAOgIALQgIAMgQAKIAYAVQAJgOAEgQIAxAAQgEAPgIARQgHASgKAMIAnAlIg+AAIgMgNQgLAHgHACQgGAEgIABQgJABgLAAQgTAAgPgHgAguAkQAAAIAGAEQAFAFAJAAQAHAAAFgBIAIgFIgegeQgKAHAAAMgAgfg4QgEADAAAHQAAAIALALQAHgEAEgGQADgFAAgGQAAgGgDgDQgEgCgFAAQgFAAgEADg");
	this.shape_11.setTransform(-16.7,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-42.8,-30.7,228.8,38.9), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BLIAAiVIApAAQAjAAASATQATASAAAkQAAAlgUATQgTAUgmAAgAgtBCIAYAAQBCAAABhCQAAgggRgQQgQgRgfAAIgbAAg");
	this.shape.setTransform(192.4,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIBRAAIAAAKIhGAAIAAA4IBCAAIAAAJIhCAAIAABAIBGAAIAAAKg");
	this.shape_1.setTransform(179.2,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBLIAAiVIAJAAIAACVg");
	this.shape_2.setTransform(170.3,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIBRAAIAAAKIhHAAIAAA/IBDAAIAAAJIhDAAIAABDg");
	this.shape_3.setTransform(163.4,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBLIAAiVIAJAAIAACVg");
	this.shape_4.setTransform(154.5,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBLIAAiLIgxAAIAAgKIBrAAIAAAKIgxAAIAACLg");
	this.shape_5.setTransform(146.4,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBLIglhBIgmAAIAABBIgKAAIAAiVIAkAAQAaAAANAKQAOALAAAUQAAAPgIALQgIAJgQAFIApBEgAgmAAIAdAAQARAAALgHQAKgIAAgRQAAgRgKgIQgKgIgWAAIgZAAg");
	this.shape_6.setTransform(135.5,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIBRAAIAAAKIhHAAIAAA4IBDAAIAAAJIhDAAIAABAIBHAAIAAAKg");
	this.shape_7.setTransform(123.1,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA5QgSgVAAgkQAAgWAJgRQAIgSARgJQAQgKAUAAQAWAAARAJIgEAJQgQgJgSABQgbAAgQASQgRASAAAeQAAAgAQASQAPARAbABQATAAAQgGIAAAKQgPAFgWAAQgfAAgSgUg");
	this.shape_8.setTransform(110.6,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4BLIAAiVIAoAAQAkAAASATQATASAAAkQAAAlgUATQgUAUglAAgAgtBCIAZAAQBCAAgBhCQABgggRgQQgQgRgfAAIgbAAg");
	this.shape_9.setTransform(91.3,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsBLIhXiEIgBAAIABAkIAABgIgKAAIAAiVIAKAAIBYCEIABAAIgBgjIAAhhIAKAAIAACVg");
	this.shape_10.setTransform(75.9,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBLIAAiVIAJAAIAACVg");
	this.shape_11.setTransform(65.7,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoBLIAAiVIBRAAIAAAKIhGAAIAAA/IBCAAIAAAJIhCAAIAABDg");
	this.shape_12.setTransform(58.8,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(44.6,-0.7,157.1,33.3), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBVIg+h3IgBAAQADAcAAAOIAABNIgpAAIAAipIA8AAIA9B1IABAAIgCgoIAAhNIApAAIAACpg");
	this.shape.setTransform(171.2,44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBVIAAipIBkAAIAAAlIg2AAIAAAaIAxAAIAAAkIgxAAIAAAhIA2AAIAAAlg");
	this.shape_1.setTransform(155,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBVIAAhFIg0AAIAABFIgvAAIAAipIAvAAIAAA/IA0AAIAAg/IAuAAIAACpg");
	this.shape_2.setTransform(138.9,44.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBBQgVgWAAgrQAAgZAKgUQAKgUATgLQATgLAYAAQAcAAAZAMIgOAlIgTgIQgKgDgKAAQgQAAgJAOQgJANAAAXQAAAxAkAAQAMAAAKgDIAVgIIAAAnQgVAKgbAAQglAAgVgXg");
	this.shape_3.setTransform(122.2,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBVIAAiEIgqAAIAAglICAAAIAAAlIgpAAIAACEg");
	this.shape_4.setTransform(107.3,44.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBVIAAipIAtAAIAACpg");
	this.shape_5.setTransform(96.1,44.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBVIgghBIgOAIIAAA5IguAAIAAipIAuAAIAABKQAEgHAKgPIAjg0IAyAAIg1BMIA0Bdg");
	this.shape_6.setTransform(84.6,44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVBVIgjg+IgMAAIAAA+IguAAIAAipIA4AAQBEAAAAAyQAAAegdAPIAyBKgAgagKIAJAAQAXAAAAgWQAAgRgXAAIgJAAg");
	this.shape_7.setTransform(62.2,44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BEQgTgSAAghIAAhmIAuAAIAABiQAAASAHAJQAHAIAMAAQAOAAAHgIQAGgJAAgSIAAhiIAuAAIAABlQAAAhgTATQgTASgjAAQgiAAgTgSg");
	this.shape_8.setTransform(44,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8BBQgWgWAAgrQAAgqAWgWQAUgXApAAQAoAAAVAXQAVAWAAAqQAAArgVAWQgVAXgpAAQgnAAgVgXgAghAAQAAAxAhAAQASAAAIgMQAJgMAAgZQAAgZgJgLQgJgNgQAAQgjAAABAxg");
	this.shape_9.setTransform(25.4,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBVIAAhBIg4hoIAyAAIAcA/IAdg/IAyAAIg4BnIAABCg");
	this.shape_10.setTransform(7.9,44.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxBVIAAipIBjAAIAAAlIg1AAIAAAaIAyAAIAAAkIgyAAIAAAhIA1AAIAAAlg");
	this.shape_11.setTransform(123.2,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWBVIAAiEIgqAAIAAglICBAAIAAAlIgqAAIAACEg");
	this.shape_12.setTransform(109.4,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkBWIgIggIg2AAIgJAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgYIgFgVIgDATg");
	this.shape_13.setTransform(93.6,19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBVIg3ipIA0AAIAXBVQAHAdAAALIADgUIAFgTIAXhWIA0AAIg4Cpg");
	this.shape_14.setTransform(76.7,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag9BCQgVgXAAgrQAAgqAVgWQAWgXAoAAQAoAAAVAWQAVAXAAAqQAAArgVAXQgVAWgpAAQgnAAgWgWgAgiAAQABAyAhgBQASABAIgMQAJgMAAgaQAAgZgJgMQgIgMgRAAQgjAAAAAxg");
	this.shape_15.setTransform(58.8,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBVIg+h3IgBAAQADAcAAAOIAABNIgpAAIAAipIA8AAIA9B1IABAAIgCgoIAAhNIApAAIAACpg");
	this.shape_16.setTransform(39.3,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBVIAAipIBkAAIAAAlIg2AAIAAAaIAxAAIAAAkIgxAAIAAAhIA2AAIAAAlg");
	this.shape_17.setTransform(23.1,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVBVIgkg+IgLAAIAAA+IguAAIAAipIA4AAQBEAAAAAyQAAAegcAPIAxBKgAgagKIAIAAQAYAAAAgWQAAgRgXAAIgJAAg");
	this.shape_18.setTransform(9.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(-2.4,-0.4,186.2,62.8), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyA7QgTgWAAglQAAglATgVQATgVAfAAQAhAAASAVQATAWAAAkQAAAlgTAWQgTAVggAAQggAAgSgVgAgqgzQgPASAAAhQAAAhAPATQAPASAbAAQAcAAAPgSQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape.setTransform(113.9,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIgzAAIAAgKIBvAAIAAAKIgyAAIAACRg");
	this.shape_1.setTransform(99.8,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAAA7IBGAAIAAAJIhGAAIAABDIBKAAIAAAKg");
	this.shape_2.setTransform(82.8,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA+BOIAAh2IABgZIgBAAIg7CPIgGAAIg6iPIgBAAIABAbIAAB0IgKAAIAAibIARAAIA2CIIABAAIA3iIIARAAIAACbg");
	this.shape_3.setTransform(66.8,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBOIAAibIAKAAIAACbg");
	this.shape_4.setTransform(54.6,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIgzAAIAAgKIBvAAIAAAKIgyAAIAACRg");
	this.shape_5.setTransform(46.1,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBKIAAgLQAQAHAbAAQASAAALgIQALgJAAgPQAAgIgDgGQgEgGgIgFQgJgFgPgFQgYgIgJgJQgJgKAAgQQAAgRANgLQAOgLAVAAQAWAAATAIIgEAKQgTgJgSAAQgRAAgKAIQgKAIAAAOQAAAJADAFQADAGAHAEQAIAFAQAGQASAFAJAGQAKAGAEAIQAEAHAAALQAAAUgOALQgPALgWAAQgdAAgPgGg");
	this.shape_6.setTransform(28.8,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAcIgDg3IANAAIgDA3g");
	this.shape_7.setTransform(20.7,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIgzAAIAAgKIBvAAIAAAKIgyAAIAACRg");
	this.shape_8.setTransform(12.9,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEBOIAAibIAJAAIAACbg");
	this.shape_9.setTransform(4.4,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(-0.8,-1.7,125.7,34.7), null);


(lib.quote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quotepngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-105,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.quote, new cjs.Rectangle(-105,0,191,81), null);


(lib.pc32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.photo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc32, new cjs.Rectangle(0,0,300,250), null);


(lib.pc31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc33();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc31, new cjs.Rectangle(-1,-1,198.6,201.3), null);


(lib.pc12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc12, new cjs.Rectangle(0,0,300,192), null);


(lib.pc11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc11, new cjs.Rectangle(0,0,146,250), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAJQgJgHACgHIAFgGQAJgBAFAGQABACgBAFQgCAJgCABIgCABQgCAAgEgDg");
	this.shape.setTransform(97.5,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAoQgDgMAAgKIABgEIgCgXQACgFAAgDIgDgLIgBgDIgOAqQgBACABAFIgBAHQgBAFgEADIgFAAQgDgBAAgDQgDgGgGgdQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgDgRIgBgBIgHARIgHAVIABAAIgCACIACAGIgDAEQgCAFgBAKIgLAFQgCgCgCgJQgCgLgCgzIACAAIgDgSIAJgEQAGANAAAOIAAAWIADAAIAEgOIgBgCQAFgHAIgQIAFgLQAHAAAEAKQACAIADAeQAEgFAEgMIAJgdQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAFABQADgBAEAGQACAFADAQIAEAqIgBADIADADIgCAEIADANIgCAAIADAMIgHAFIgFAAQgDgEgCgLg");
	this.shape_1.setTransform(120.8,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAyQgEgEgBgEQAAgaAHgTQAJgYAQgTIAGgGIAIgEQAKAEACAGQgUANgLATQgMAUgCAbQAAABAFAJQAKAAAMgHQAIgEAXgQIgBALIgLAJQgSANgJAFQgLADgEAAQgHgBgFgGg");
	this.shape_2.setTransform(103.6,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA0QgMgDgGgHQgBgDgBgGIAAgJIAEgRQALgcAbgeIAHABQAFAFgDAIQADACABAJIgBAbQgCAdgRAPIgIAFQgCACgEAAIgBAAgAALgcIgKARQgNAZAAARIAFAGQABAAAFgDQALgJAFgNIACgZIACgDQgDgCgCgLIgDABg");
	this.shape_3.setTransform(111.4,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BuIg3gBIhJAAQgHAAgBgDIABgaIADhHIgDhzQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFAAIBNABIA7gBQAFAAACADQACACAAAFIAEAlIAAAFIgDACIgDAAQgqgFgiABQgIAAgBAEIAAAPQAAALAGACIAJABIAJgBIA8gDIACACIAAACQgEAgAAAQQAAAFgHgBQgOgCgVgBIghAAQgIAAABAFQAAATABADQABAEAHACQAGACAZAAIAagBIAagBQAEgBAAAGIgDAZIgEAWQgBADgEABg");
	this.shape_4.setTransform(16.1,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHB+IgkgkQgDgCABgDIAGgFQALgKACgEQAHgLACgOQACgQAAgqQgBhDgFgpQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAZAAQAMABAYgBQAEAAAAAFIgBCKQgBAmgIAUQgKAggXAUIgFAEIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBg");
	this.shape_5.setTransform(0.3,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBvIgOgBQgFAAAAgEQAEhngBgUIgChTIABgIQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAiABIAYgBQAFAAgBAEIgCA2IgCA1IACBmIgBAGQgKACgTAAIgQAAg");
	this.shape_6.setTransform(-9.4,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBuQgEgCgCgCIgFgKIghg8QgDgHgEgFQgHACgHAEIgDACIACBJQAAAFgFAAQgKABgUAAQgRAAgJgBQgFAAAAgFIADhaQABgWgCgmIgCg+QAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAjABIAYgBQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAVgDAqQAAAMABAEQADAFADAAQASAAAKgKQAFgFAGgMIAVg3QACgFAGAAIAdABIAWgBQACABAAAFIgDAMQgJAcgIASQgLAXgOAMQgIAFgDAEIAeAxQARAcAHAPQAEAJgBAFQgBAFgGABQgFABgSAAQgUAAgKgBg");
	this.shape_7.setTransform(-24.4,-4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/BvIgNAAQgCAAgDgEIhThtIgDgEIgCADIACBsIgBAFQAAABgFAAIgzAAQgFAAgBgCIAAgIIADhJQABgZgCgoIgChCQAAgDAFAAQAWgBALgCIAQgCIAIAJIBOBpQAEAGAEABQABgEAAgOQgDg+AAgfQAAgEABgBIAHgBIA0gBQAEAAgBAFQAAAggDBAIAABzQABADgFAAIgVABIgOgBg");
	this.shape_8.setTransform(37,-4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBvQgFAAgCgFIgGgWQgBgFgDABIgmgBIgcABIgDACIgEAMIgEAMQgCAFgEABIgkABQgRgBgEgCQgCAAACgHQAJgdAbhJIAnhnQACgIACgCIAUABQAKABAVgBQADgBADAGIBODGIAEAPQABAEgGABIgcABQgTAAgJgCgAgOACIgGAWIAGACIAUAAIAIAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgNQgHgagHgSIgOAkg");
	this.shape_9.setTransform(83.4,-4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBnQgogVgNgsQgHgVADgaQABgbAMgWQASggAegOQAXgLAdABQAsACAbAeQAHAJAAACQAAADgFAIQgJANgIAIQgGAHgEABIgJgIQgRgRgWABQgTgBgMAMQgTAQAAAcQgBAZAOAQQALANATADQAUACAYgKQgFghAAgQQAAgGADgBQAHAAAQACQAMABAZgCQADgBAAAGIgBAnQgBAWADApIAAAIQgCACgGgBQgOgDgRgFQgcALgcACIgGAAQgdAAgXgMg");
	this.shape_10.setTransform(60.7,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(-34.1,-16.2,160,26.4), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgdAAIAAgOIBJAAIAAAOIgdAAIAABVg");
	this.shape.setTransform(49.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAmQgMgNAAgZQAAgPAGgLQAFgMALgGQALgGAOgBQAPABANAGIgGANIgLgDQgFgCgHAAQgNAAgIAKQgIAKAAAQQAAATAIAJQAIAJANABQAHgBAGgBIAMgDIAAAOQgMAFgPAAQgUAAgMgOg");
	this.shape_1.setTransform(41.4,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAAMIglAAIAAAgIAnAAIAAAOg");
	this.shape_2.setTransform(33.1,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTA+IAAgNIAKABQAMAAAAgRIAAhgIARAAIAABfQAAAPgHAJQgIAIgNAAQgGAAgFgCg");
	this.shape_3.setTransform(25.7,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAmQgMgNAAgZQAAgYAMgNQAMgNAWgBQAWAAANAOQAMAOAAAXQAAAZgMANQgNAOgWAAQgWAAgMgOgAgVgbQgIAKAAARQAAATAIAJQAHAJAOABQAOgBAIgJQAHgJAAgTQAAgRgHgKQgHgJgPAAQgOAAgHAJg");
	this.shape_4.setTransform(19.3,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAyIgXgoIgQAAIAAAoIgQAAIAAhjIAcAAQASAAAJAHQAKAIAAAOQAAATgTAHIAbAsgAgUgDIAMAAQAKAAAFgEQAFgEAAgIQAAgIgFgFQgGgDgKAAIgLAAg");
	this.shape_5.setTransform(9.9,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAdAAQARAAAKAHQAJAJAAAPQAAAPgKAHQgKAJgSgBIgLAAIAAAmgAgQAAIAJAAQAMAAAFgFQAGgEAAgJQAAgJgFgEQgFgFgKABIgMAAg");
	this.shape_6.setTransform(0.8,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAyIgXgoIgQAAIAAAoIgRAAIAAhjIAdAAQASAAAKAHQAJAIAAAOQAAATgUAHIAdAsgAgUgDIALAAQALAAAFgEQAFgEAAgIQAAgIgGgFQgFgDgKAAIgLAAg");
	this.shape_7.setTransform(-11.3,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdApQgKgKAAgRIAAhAIARAAIAAA/QgBAMAHAGQAFAGALAAQAXAAAAgZIAAg+IARAAIAABAQgBALgEAIQgFAJgJAEQgJAFgMAAQgSAAgLgKg");
	this.shape_8.setTransform(-21.6,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAmQgMgNAAgZQAAgYAMgNQAMgNAWgBQAWAAANAOQAMAOAAAXQAAAZgMANQgNAOgWAAQgWAAgMgOgAgVgbQgIAKAAARQAAATAIAJQAHAJAOABQAOgBAIgJQAHgJAAgTQAAgRgHgKQgHgJgPAAQgOAAgHAJg");
	this.shape_9.setTransform(-32.3,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAyIAAgmIggg9IASAAIAWAtIAXgtIASAAIghA8IAAAng");
	this.shape_10.setTransform(-41.9,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgdAAIAAgOIBJAAIAAAOIgdAAIAABVg");
	this.shape_11.setTransform(-53.7,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAuIAAgQQAGAEAJACQAHABAGABQAKgBAEgDQAFgEgBgGQAAgFgEgFQgEgEgMgFQgOgFgFgHQgGgHAAgKQAAgMAJgHQAJgHAOgBQAOABAOAGIgFANQgNgGgKABQgIgBgDAEQgFADAAAGQAAAEACADIAFAFIANAGQALAFAFADQAFAEACAFQADAFAAAHQAAANgKAIQgKAIgQAAQgRAAgKgGg");
	this.shape_12.setTransform(-61.4,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAmQgMgNAAgZQAAgYAMgNQAMgNAWgBQAWAAANAOQAMAOAAAXQAAAZgMANQgNAOgWAAQgWAAgMgOgAgVgbQgIAKAAARQAAATAIAJQAHAJAOABQAOgBAIgJQAHgJAAgTQAAgRgHgKQgHgJgPAAQgOAAgHAJg");
	this.shape_13.setTransform(-70.8,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAyIAAhjIAdAAQARAAAKAHQAJAJAAAPQAAAPgKAHQgKAJgSgBIgLAAIAAAmgAgQAAIAJAAQAMAAAFgFQAGgEAAgJQAAgJgFgEQgFgFgKABIgMAAg");
	this.shape_14.setTransform(-80.3,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Слой 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ar6iQIAMAAIXpAAIAAEhI3pAAIgMAAg");
	this.shape_15.setTransform(-15.5,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#073562").s().p("ArzCRIAAkgIXoAAIAAEgg");
	this.shape_16.setTransform(-14.9,-1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1,1).p("AruiQIXpAAIAAEhI3pAAIgMAAIAAkhg");
	this.shape_17.setTransform(-15.5,-1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FAA430").s().p("ArzCRIAAkgIXoAAIAAEgg");
	this.shape_18.setTransform(-14.9,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-16.6,154.5,30.9);


// stage content:
(lib.Kitchen_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_869 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(869).call(this.frame_869).wait(13));

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(219.5,273.1,1.09,1.09,0,0,0,0.1,0.1);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA2IAAhcIggAAIAAgPIBRAAIAAAPIggAAIAABcg");
	this.shape.setTransform(273.3,221.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAqQgNgPAAgbQAAgQAGgMQAGgOAMgGQAMgHAPAAQAQAAAOAHIgGAPIgMgEQgGgCgHgBQgOAAgJALQgIALAAASQAAAUAIAKQAIALAPAAQAHAAAHgCIANgDIAAAPQgMAFgRAAQgXAAgMgOg");
	this.shape_1.setTransform(264.4,221.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA2IAAhrIA9AAIAAAPIgrAAIAAAeIAoAAIAAANIgoAAIAAAiIArAAIAAAPg");
	this.shape_2.setTransform(255.4,221.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBEIAAgPIAKABQAOAAAAgSIAAhpIASAAIAABoQAAARgIAJQgIAJgPAAQgGAAgFgCg");
	this.shape_3.setTransform(247.3,223.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAqQgNgQAAgaQAAgaANgPQANgOAZAAQAXAAAOAOQANAPAAAaQAAAagNAPQgNAPgZAAQgYAAgNgOgAgXgdQgIAKAAATQAAAUAIAKQAIALAPAAQAQAAAIgLQAIgKAAgUQAAgTgIgKQgIgLgPAAQgQAAgIALg");
	this.shape_4.setTransform(240.3,221.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA2IgZgrIgSAAIAAArIgSAAIAAhrIAfAAQAUgBAKAJQAKAHAAAQQAAAVgVAIIAfAvgAgWgCIAMAAQAMgBAFgFQAGgEAAgJQAAgKgGgEQgGgDgLAAIgMAAg");
	this.shape_5.setTransform(230.1,221.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAfAAQATAAALAIQAKAIAAARQAAARgLAHQgLAKgUAAIgLAAIAAAogAgRAAIAJAAQANAAAGgFQAHgFAAgKQAAgKgGgEQgGgFgLABIgMAAg");
	this.shape_6.setTransform(220.3,221.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA2IgZgrIgSAAIAAArIgSAAIAAhrIAfAAQAUgBAKAJQAKAHAAAQQAAAVgVAIIAfAvgAgWgCIAMAAQAMgBAFgFQAGgEAAgJQAAgKgGgEQgGgDgLAAIgMAAg");
	this.shape_7.setTransform(207,221.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAtQgLgLAAgTIAAhFIASAAIAABEQAAANAGAHQAHAGALAAQAaAAAAgaIAAhEIARAAIAABFQAAAMgFAJQgFAJgKAFQgKAFgNAAQgTAAgMgKg");
	this.shape_8.setTransform(195.8,221.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglAqQgNgQAAgaQAAgaANgPQANgOAZAAQAXAAAOAOQANAPAAAaQAAAagNAPQgOAPgYAAQgYAAgNgOgAgXgdQgIAKAAATQAAAUAIAKQAIALAPAAQAQAAAIgLQAIgKAAgUQAAgTgIgKQgIgLgPAAQgQAAgIALg");
	this.shape_9.setTransform(184.2,221.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA2IAAgpIgkhCIATAAIAZAxIAagxIATAAIgkBBIAAAqg");
	this.shape_10.setTransform(173.6,221.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA2IAAhcIggAAIAAgPIBRAAIAAAPIggAAIAABcg");
	this.shape_11.setTransform(160.8,221.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAzIAAgRQAIADAIACQAIACAIAAQAJAAAFgEQAFgEAAgHQAAgGgEgEQgFgEgNgGQgPgGgGgHQgHgIAAgLQAAgNAKgIQAKgIAPAAQAQAAAPAHIgFAOQgPgFgLgBQgIAAgEAEQgFAEAAAGQAAAFACADQACADAEACIAOAHQAMAFAFADQAGAFACAFQADAGAAAHQAAAPgLAHQgKAJgSAAQgSAAgMgFg");
	this.shape_12.setTransform(152.3,221.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAqQgOgQAAgaQAAgaAOgPQANgOAXAAQAZAAANAOQANAPAAAaQAAAagNAPQgNAPgZAAQgXAAgNgOgAgXgdQgIAKAAATQAAAUAIAKQAIALAPAAQAQAAAIgLQAIgKAAgUQAAgTgIgKQgIgLgQAAQgPAAgIALg");
	this.shape_13.setTransform(142.2,221.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA2IAAhrIAfAAQAUAAAKAIQAKAIAAARQAAARgLAHQgMAKgTAAIgLAAIAAAogAgRAAIAJAAQANAAAGgFQAGgFABgKQgBgKgFgEQgGgFgLABIgMAAg");
	this.shape_14.setTransform(131.8,221.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("As+idIANAAIZwAAIAAE7I5wAAIgNAAg");
	this.shape_15.setTransform(202.5,221.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#073562").s().p("As3CeIAAk6IZvAAIAAE6g");
	this.shape_16.setTransform(203.1,221.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},210).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},66).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance}]},230).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},66).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance}]},230).to({state:[{t:this.instance}]},11).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},12).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210).to({_off:false},0).to({y:223.1},11,cjs.Ease.get(1)).wait(66).to({y:273.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(230).to({_off:false},0).to({y:223.1},11,cjs.Ease.get(1)).wait(66).to({y:273.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(230).to({_off:false},0).to({y:223.1},11,cjs.Ease.get(1)).to({_off:true},12).wait(13));

	// t3-1
	this.instance_1 = new lib.t31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241,41.3,0.999,0.999,0,0,0,75.8,34.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).to({x:211.1,alpha:1},11,cjs.Ease.get(1)).wait(87).to({x:191,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(199).to({_off:false,x:241},0).to({x:211.1,alpha:1},11,cjs.Ease.get(1)).wait(87).to({x:191,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(199).to({_off:false,x:241},0).to({x:211.1,alpha:1},11,cjs.Ease.get(1)).wait(36));

	// Logo
	this.instance_2 = new lib.Logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-44.2,176.8,0.806,0.806,0,0,0,80.2,13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({x:105.6,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:35.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(11).to({_off:false,regX:80,regY:13.6,scaleX:0.58,scaleY:0.58,x:8.9,y:229.7},0).to({regX:80.4,regY:13.8,x:77.1,y:230.7,alpha:1},11).wait(97).to({regX:80.2,regY:13.6},0).to({regX:80.1,x:107,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(99).to({_off:false,regX:80.2,regY:13.5,scaleX:0.81,scaleY:0.81,x:-44.2,y:176.8},0).to({x:105.6,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:35.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(11).to({_off:false,regX:80,regY:13.6,scaleX:0.58,scaleY:0.58,x:8.9,y:229.7},0).to({regX:80.4,regY:13.8,x:77.1,y:230.7,alpha:1},11).wait(97).to({regX:80.2,regY:13.6},0).to({regX:80.1,x:107,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(99).to({_off:false,regX:80.2,regY:13.5,scaleX:0.81,scaleY:0.81,x:-44.2,y:176.8},0).to({x:105.6,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:35.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(11).to({_off:false,regX:80,regY:13.6,scaleX:0.58,scaleY:0.58,x:8.9,y:229.7},0).to({regX:80.4,regY:13.8,x:77.1,y:230.7,alpha:1},11).wait(36));

	// FIND
	this.instance_3 = new lib.t22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(244.5,273.7,0.999,0.999,0,0,0,93,32.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({x:194.5,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:244.5},0).to({x:194.5,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:244.5},0).to({x:194.5,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(47));

	// FIND
	this.instance_4 = new lib.t21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(217,221.7,0.999,0.999,0,0,0,100.4,32.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({x:187,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:217},0).to({x:187,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:217},0).to({x:187,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(58));

	// pc1-1
	this.instance_5 = new lib.pc11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(227.7,125.4,0.999,0.999,0,0,0,73.1,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({x:376.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(207).to({_off:false,x:226.8,alpha:0},0).to({x:227.7,alpha:1},10).wait(90).to({x:376.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(207).to({_off:false,x:226.8,alpha:0},0).to({x:227.7,alpha:1},10).wait(90).to({x:376.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(146));

	// t1-2
	this.instance_6 = new lib.t12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(37.1,216.8,0.999,0.999,0,0,0,84.2,30.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({regX:84.3,x:96.1,alpha:1},10,cjs.Ease.get(1)).wait(69).to({regX:84.4,x:166.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,regX:84.2,x:37.1},0).to({regX:84.3,x:96.1,alpha:1},10,cjs.Ease.get(1)).wait(69).to({regX:84.4,x:166.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,regX:84.2,x:37.1},0).to({regX:84.3,x:96.1,alpha:1},10,cjs.Ease.get(1)).wait(69).to({regX:84.4,x:166.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(146));

	// t1-1
	this.instance_7 = new lib.t11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(46.7,181.5,0.999,0.999,0,0,0,94.8,17);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:94.9,x:106.7,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:176.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,regX:94.8,x:46.7},0).to({regX:94.9,x:106.7,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:176.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,regX:94.8,x:46.7},0).to({regX:94.9,x:106.7,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:176.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// plate-blue
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0695D0").s().p("A3fHLIAAuWMAu/AAAIAAOWg");
	this.shape_17.setTransform(150.3,204.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0695D0").s().p("A3fHLIAAuVMAu/AAAIAAOVg");
	this.shape_18.setTransform(150.3,204.3);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0695D0").s().p("A3fFdIAAq5MAu/AAAIAAK5g");
	this.shape_19.setTransform(150.3,204.3,1,1.313);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0695D0").s().p("A3Hm/MAuPAAAIAAN/MguPAAAg");
	this.shape_20.setTransform(152.6,205.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0695D0").s().p("A2vm1MAtfAABIAANoMgteAABg");
	this.shape_21.setTransform(155,206.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0695D0").s().p("A2WmqMAsuAABIAANSMgsuAACg");
	this.shape_22.setTransform(157.4,207.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0695D0").s().p("A1+mfMAr9AABIAAM8Mgr8AACg");
	this.shape_23.setTransform(159.7,208.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0695D0").s().p("A1mmUMArNAABIAAMmMgrMAACg");
	this.shape_24.setTransform(162.1,209.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0695D0").s().p("A1OmKMAqdAACIAAMQMgqcAACg");
	this.shape_25.setTransform(164.4,210.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0695D0").s().p("A02l/MAptAACIAAL5MgprAAEg");
	this.shape_26.setTransform(166.8,211.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0695D0").s().p("A0el0MAo9AACIAALjMgo7AAEg");
	this.shape_27.setTransform(169.1,212.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0695D0").s().p("A0GlqMAoNAADIAALNMgoKAAFg");
	this.shape_28.setTransform(171.5,214);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0695D0").s().p("AztlfMAnbAADIAAK2MgnZAAGg");
	this.shape_29.setTransform(173.9,215.1);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0695D0").s().p("A0DlfMAoHAADIAAK2MgoEAAGg");
	this.shape_30.setTransform(171.7,216.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0695D0").s().p("A0YlfMAoxAADIAAK2MgovAAGg");
	this.shape_31.setTransform(169.6,217.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0695D0").s().p("A0ulfMApdAADIAAK2MgpaAAGg");
	this.shape_32.setTransform(167.4,218.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0695D0").s().p("A1DlfMAqHAADIAAK2MgqEAAGg");
	this.shape_33.setTransform(165.3,219.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0695D0").s().p("A1ZlfMAqyAADIAAK2MgqvAAGg");
	this.shape_34.setTransform(163.2,220.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0695D0").s().p("A1ulfMArdAADIAAK2MgraAAGg");
	this.shape_35.setTransform(161,221.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0695D0").s().p("A2ElfMAsIAADIAAK2MgsFAAGg");
	this.shape_36.setTransform(158.9,222.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0695D0").s().p("A2ZlfMAszAADIAAK2MgswAAGg");
	this.shape_37.setTransform(156.8,223.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0695D0").s().p("A2ulfMAtdAADIAAK2MgtaAAGg");
	this.shape_38.setTransform(154.6,224.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0695D0").s().p("A3ElfMAuJAADIAAK2MguGAAGg");
	this.shape_39.setTransform(152.5,225.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0695D0").s().p("A3ZlfMAuzAADIAAK2MguwAAGg");
	this.shape_40.setTransform(150.3,227);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0695D0").s().p("A3alpMAu1AACIAALNMguyAAEg");
	this.shape_41.setTransform(150.3,224.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0695D0").s().p("A3al0MAu1AACIAALjMguzAAFg");
	this.shape_42.setTransform(150.3,222.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0695D0").s().p("A3bl/MAu3AACIAAL5Mgu1AAEg");
	this.shape_43.setTransform(150.3,220.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0695D0").s().p("A3bmKMAu3AACIAAMQMgu2AADg");
	this.shape_44.setTransform(150.3,217.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0695D0").s().p("A3cmVMAu5AACIAAMmMgu3AADg");
	this.shape_45.setTransform(150.3,215.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0695D0").s().p("A3dmgMAu7AACIAAM8Mgu5AADg");
	this.shape_46.setTransform(150.3,213.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0695D0").s().p("A3dmqMAu7AABIAANTMgu6AABg");
	this.shape_47.setTransform(150.3,211.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0695D0").s().p("A3em1MAu9AABIAANpMgu8AABg");
	this.shape_48.setTransform(150.3,208.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0695D0").s().p("A3enAMAu+AAAIAAOAMgu+AABg");
	this.shape_49.setTransform(150.3,206.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(14).to({_off:true},1).wait(302).to({_off:false},0).wait(15).to({_off:true},1).wait(302).to({_off:false},0).wait(15).to({_off:true},1).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(15).to({_off:false},0).wait(73).to({_off:true},1).wait(244).to({_off:false},0).wait(73).to({_off:true},1).wait(244).to({_off:false},0).wait(73).to({_off:true},1).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(99).to({_off:false},0).wait(88).to({_off:true},1).wait(229).to({_off:false},0).wait(88).to({_off:true},1).wait(229).to({_off:false},0).wait(88).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(198).to({_off:false},0).wait(109).to({_off:true},1).wait(208).to({_off:false},0).wait(109).to({_off:true},1).wait(208).to({_off:false},0).wait(48));

	// quote
	this.instance_8 = new lib.quote();
	this.instance_8.parent = this;
	this.instance_8.setTransform(203.2,234.9,0.999,0.999,0,0,0,95.5,40.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(198).to({_off:false},0).to({y:154.9},12).wait(87).to({y:244.9},10).to({_off:true},1).wait(208).to({_off:false,y:234.9},0).to({y:154.9},12).wait(87).to({y:244.9},10).to({_off:true},1).wait(208).to({_off:false,y:234.9},0).to({y:154.9},12).wait(36));

	// pc3-1
	this.instance_9 = new lib.pc31();
	this.instance_9.parent = this;
	this.instance_9.setTransform(218.8,106.4,0.999,0.999,0,0,0,82.1,101.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).to({alpha:1},10).wait(218).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},10).wait(218).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},10).wait(157));

	// plate-orange
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,52,102,0.898)").s().p("A3fImIAAxKMAu/AAAIAARKg");
	this.shape_50.setTransform(149.8,215.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIkIAAxHMAu/AAAIAARHg");
	this.shape_51.setTransform(149.8,213.4);
	this.shape_51._off = true;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIjIAAxFMAu/AAAIAARFg");
	this.shape_52.setTransform(149.8,211.6);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIhIAAxBMAu/AAAIAARBg");
	this.shape_53.setTransform(149.8,209.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIgIAAw/MAu/AAAIAAQ/g");
	this.shape_54.setTransform(149.8,207.9);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIfIAAw8MAu/gABIgBQ9g");
	this.shape_55.setTransform(149.8,206);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIdIAAw5MAu/gABIgBQ6g");
	this.shape_56.setTransform(149.8,204.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIcIAAw2MAu/gABIgBQ3g");
	this.shape_57.setTransform(149.8,202.3);
	this.shape_57._off = true;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIbIAAw0MAu/gABIgBQ1g");
	this.shape_58.setTransform(149.8,200.4);
	this.shape_58._off = true;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIZIAAwxMAu/AAAIgBQxg");
	this.shape_59.setTransform(149.8,198.5);
	this.shape_59._off = true;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIYIAAwuMAu/gABIgBQvg");
	this.shape_60.setTransform(149.8,196.7);
	this.shape_60._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIeIAAw5MAu/gACIgBQ7g");
	this.shape_61.setTransform(149.8,111.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,52,102,0.898)").s().p("A3fIiIAAxCMAu/AAAIAARCg");
	this.shape_62.setTransform(149.8,163.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(99).to({_off:true},1).wait(217).to({_off:false},0).wait(100).to({_off:true},1).wait(217).to({_off:false},0).wait(100).to({_off:true},1).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(100).to({_off:false},0).to({_off:true},1).wait(215).to({_off:false,y:198},0).to({_off:true},1).wait(101).to({_off:false,y:213.4},0).to({_off:true},1).wait(215).to({_off:false,y:198},0).to({_off:true},1).wait(101).to({_off:false,y:213.4},0).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(101).to({_off:false},0).to({_off:true},1).wait(213).to({_off:false,y:180.8},0).to({_off:true},1).wait(103).to({_off:false,y:211.6},0).to({_off:true},1).wait(213).to({_off:false,y:180.8},0).to({_off:true},1).wait(103).to({_off:false,y:211.6},0).to({_off:true},1).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(103).to({_off:false},0).to({_off:true},1).wait(209).to({_off:false,y:146.3},0).to({_off:true},1).wait(107).to({_off:false,y:207.9},0).to({_off:true},1).wait(209).to({_off:false,y:146.3},0).to({_off:true},1).wait(107).to({_off:false,y:207.9},0).to({_off:true},1).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(104).to({_off:false},0).to({_off:true},1).wait(207).to({_off:false,y:129},0).to({_off:true},1).wait(109).to({_off:false,y:206},0).to({_off:true},1).wait(207).to({_off:false,y:129},0).to({_off:true},1).wait(109).to({_off:false,y:206},0).to({_off:true},1).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(106).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false,y:94.5},0).to({_off:true},1).wait(113).to({_off:false,y:202.3},0).to({_off:true},1).wait(203).to({_off:false,y:94.5},0).to({_off:true},1).wait(113).to({_off:false,y:202.3},0).to({_off:true},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(107).to({_off:false},0).to({_off:true},1).wait(201).to({_off:false,y:77.2},0).to({_off:true},1).wait(115).to({_off:false,y:200.4},0).to({_off:true},1).wait(201).to({_off:false,y:77.2},0).to({_off:true},1).wait(115).to({_off:false,y:200.4},0).to({_off:true},1).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(108).to({_off:false},0).to({_off:true},1).wait(199).to({_off:false,y:59.9},0).to({_off:true},1).wait(117).to({_off:false,y:198.5},0).to({_off:true},1).wait(199).to({_off:false,y:59.9},0).to({_off:true},1).wait(117).to({_off:false,y:198.5},0).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(109).to({_off:false},0).wait(90).to({y:183.8},0).wait(1).to({y:171},0).wait(1).to({y:158.2},0).wait(1).to({y:145.3},0).wait(1).to({y:132.5},0).wait(1).to({y:119.7},0).wait(1).to({y:106.8},0).wait(1).to({y:94},0).wait(1).to({y:81.2},0).wait(1).to({y:68.3},0).wait(1).to({y:55.5},0).wait(1).to({y:42.7},0).wait(97).to({_off:true},1).wait(119).to({_off:false,y:196.7},0).wait(90).to({y:183.8},0).wait(1).to({y:171},0).wait(1).to({y:158.2},0).wait(1).to({y:145.3},0).wait(1).to({y:132.5},0).wait(1).to({y:119.7},0).wait(1).to({y:106.8},0).wait(1).to({y:94},0).wait(1).to({y:81.2},0).wait(1).to({y:68.3},0).wait(1).to({y:55.5},0).wait(1).to({y:42.7},0).wait(97).to({_off:true},1).wait(119).to({_off:false,y:196.7},0).wait(90).to({y:183.8},0).wait(1).to({y:171},0).wait(1).to({y:158.2},0).wait(1).to({y:145.3},0).wait(1).to({y:132.5},0).wait(1).to({y:119.7},0).wait(1).to({y:106.8},0).wait(1).to({y:94},0).wait(1).to({y:81.2},0).wait(1).to({y:68.3},0).wait(1).to({y:55.5},0).wait(1).to({y:42.7},0).wait(36));

	// pc1-2
	this.instance_10 = new lib.pc12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149.8,96.3,0.999,0.999,0,0,0,150.1,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({x:450.6},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:149.8},0).wait(79).to({x:450.6},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:149.8},0).wait(79).to({x:450.6},10,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// pc3-2
	this.instance_11 = new lib.pc32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.8,125.4,0.999,0.999,0,0,0,150.1,125.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},0).wait(228).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false,alpha:1},0).wait(228).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false,alpha:1},0).wait(167));

	// pc1-2
	this.instance_12 = new lib.pc12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(149.8,96.3,0.999,0.999,0,0,0,150.1,96);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(307).to({_off:false},0).to({_off:true},11).wait(307).to({_off:false},0).to({_off:true},11).wait(246));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.2,125.3,349.5,270);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Kitchen_300x250_atlas_P_.png", id:"Kitchen_300x250_atlas_P_"},
		{src:"images/Kitchen_300x250_atlas_NP_.jpg", id:"Kitchen_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;