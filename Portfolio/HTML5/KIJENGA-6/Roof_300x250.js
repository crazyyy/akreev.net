(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Roof_300x250_atlas_P_", frames: [[0,168,190,135],[0,305,191,81],[0,0,204,166]]},
		{name:"Roof_300x250_atlas_NP_", frames: [[0,0,300,250],[0,252,300,250]]}
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



(lib.bgpc1 = function() {
	this.spriteSheet = ss["Roof_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["Roof_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.men2 = function() {
	this.spriteSheet = ss["Roof_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.quotepngкопия = function() {
	this.spriteSheet = ss["Roof_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.roofer1 = function() {
	this.spriteSheet = ss["Roof_300x250_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgHBAQAAgKAHAAQAIAAAAAKQAAAKgIAAQgHAAAAgKgAgCAiIgDhrIALAAIgDBrg");
	this.shape.setTransform(17.4,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBJIhViBIgBAAIABAjIAABeIgKAAIAAiRIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACRg");
	this.shape_1.setTransform(7.6,65.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_2.setTransform(-7.5,65.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_3.setTransform(-23.1,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBJIAAiHIgvAAIAAgKIBnAAIAAAKIgvAAIAACHg");
	this.shape_4.setTransform(-36.2,65.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBJIgTg0Ig7AAIgUA0IgLAAIA6iRIAGAAIA5CRgAgFgmIgUAyIAzAAIgUgyIgFgSIgGASg");
	this.shape_5.setTransform(-47.6,65.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBJIg3hMIgUAQIAAA8IgKAAIAAiRIAKAAIAABLIARgPIA3g8IANAAIg6A9IA8BUg");
	this.shape_6.setTransform(-58.6,65.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_7.setTransform(-71,65.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxBJIgTg0Ig7AAIgUA0IgLAAIA6iRIAGAAIA5CRgAgFgmIgUAyIAzAAIgUgyIgFgSIgGASg");
	this.shape_8.setTransform(-82.7,65.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_9.setTransform(-94.3,65.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBJIhViBIgBAAIABAjIAABeIgKAAIAAiRIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACRg");
	this.shape_10.setTransform(-112.5,65.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_11.setTransform(-122.4,65.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBRQgLgDgLgFIAAgnQAMAGAOAEQANAEALAAQAJAAAEgEQAFgDAAgGQAAgDgCgCIgGgFIgVgLQgPgHgIgHQgIgFgEgJQgEgJAAgMQAAgWARgMQAQgNAcAAQAZAAAZAMIgNAhQgWgKgRAAQgHAAgFADQgDADAAAEQAAAFAFAEQAFAEAUAKQAVAJAJAKQAHAKAAARQABAPgIALQgIAMgOAHQgPAGgSAAQgQAAgLgCg");
	this.shape_12.setTransform(-39.4,40.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_13.setTransform(-52,40.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgnAAIAAgkIB5AAIAAAkIgnAAIAAB9g");
	this.shape_14.setTransform(-65.1,40.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5A+QgUgWgBgoQAAgoAVgUQAUgWAlAAQAnAAAUAVQATAWABAnQgBApgTAVQgUAVgnAAQglAAgUgVgAgfAAQgBAvAgAAQAQAAAJgMQAHgLABgYQgBgXgHgLQgJgMgQAAQggAAABAug");
	this.shape_15.setTransform(-80.8,40.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBBQgSgRAAgfIAAhiIAsAAIAABeQAAARAGAIQAHAIALAAQAOAAAFgIQAHgIgBgRIAAheIAsAAIAABhQAAAfgSASQgRARgiAAQggAAgSgRg");
	this.shape_16.setTransform(-98.4,40.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBlIgbgkIAAAAQgmAAgUgVQgVgWAAgnQAAgpAUgVQAVgVAmAAQAlAAAUAVQAUAVAAApQAAA2gjATIAoAtgAgigRQAAAuAhAAQAPAAAIgMQAIgLAAgXQAAgYgIgMQgIgLgPAAQghAAAAAvg");
	this.shape_17.setTransform(-115.8,42.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_18.setTransform(-36.6,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_19.setTransform(-49.1,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUBRIgig7IgLAAIAAA7IgrAAIAAihIA1AAQBAAAAAAwQAAAcgbAOIAvBHgAgZgKIAJAAQAWAAgBgUQAAgRgVAAIgJAAg");
	this.shape_20.setTransform(-62.2,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIg0AAIAAAfIAvAAIAAAiIgvAAIAAA9g");
	this.shape_21.setTransform(-76.6,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEBIIAAiGIgvAAIAAgKIBnAAIAAAKIgvAAIAACGg");
	this.shape_22.setTransform(-93.7,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBIIAAiQIBPAAIAAAJIhFAAIAAA3IBBAAIAAAJIhBAAIAAA+IBFAAIAAAJg");
	this.shape_23.setTransform(-104.3,16.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA3QgSgTAAgkQAAgVAJgRQAJgRARgJQARgKAVAAQAYAAASAJIgDAJQgUgJgUAAQgcAAgRASQgQASAAAdQAAAhAQAQQAQARAeAAQAUAAAOgGIAAgzIgsAAIAAgJIA2AAIAABCQgVAJgaAAQghAAgTgUg");
	this.shape_24.setTransform(-117.8,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(-127.2,-2.9,149.5,83.6), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGAMADQALADAKAAQAIAAAEgDQAEgDAAgEQAAgEgBgCQgCgCgEgCIgSgKQgOgFgGgHQgIgEgDgIQgDgIAAgKQAAgVAOgLQAPgLAXABQAWAAAYAKIgMAdQgUgIgPgBQgGAAgEADQgDADAAADQAAAFAEADQAEADATAKQATAHAHAJQAHAKAAAOQAAAOgHAKQgGAKgOAGQgMAGgQgBQgOAAgKgCg");
	this.shape.setTransform(-0.1,-58.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA2QgTgSABgkQgBgjATgTQASgSAgAAQAiAAASASQARATAAAjQAAAkgRASQgSAUgigBQghABgRgUgAgcAAQABAqAbAAQAPgBAHgJQAHgLAAgVQAAgVgHgJQgIgLgOAAQgcAAAAApg");
	this.shape_1.setTransform(-14,-58.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUAAAAgSQAAgOgTAAIgIAAg");
	this.shape_2.setTransform(-27.9,-58.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBHIAAiOIAyAAQAaABANALQAOAMAAAWQAAAYgOAMQgOANgZAAIgLAAIAAAvgAgMgHIAHAAQAHABAGgFQAFgFAAgJQAAgOgPAAIgKAAg");
	this.shape_3.setTransform(-41.5,-58.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BHIAAiOIAxAAQAhABATARQASASAAAhQAAAjgTATQgTAUgjgBgAgVAoIAJAAQAQAAAJgLQAHgJABgUQAAgUgIgJQgIgKgPAAIgLAAg");
	this.shape_4.setTransform(55.4,-78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_5.setTransform(42.5,-78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgjAAIAABtg");
	this.shape_6.setTransform(30.9,-78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQAMADALAAQAHAAAEgDQAEgDAAgEQAAgEgBgCQgCgCgEgCIgRgKQgPgFgGgHQgIgEgDgIQgDgIAAgKQAAgVAOgLQAOgLAYABQAXAAAXAKIgMAdQgUgIgOgBQgHAAgDADQgEADAAADQAAAFAFADQADADATAKQATAHAGAJQAIAKAAAOQAAAOgHAKQgHAKgNAGQgMAGgQgBQgPAAgJgCg");
	this.shape_7.setTransform(19.4,-78.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA6QgQgQAAgbIAAhXIAnAAIAABTQAAAQAFAHQAGAGAKABQAMgBAFgGQAFgHAAgQIAAhTIAnAAIAABWQAAAcgQAPQgQAPgdAAQgdABgPgPg");
	this.shape_8.setTransform(5.9,-78.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUAAAAgSQAAgOgTAAIgIAAg");
	this.shape_9.setTransform(-7.6,-78.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgjAAIAABtg");
	this.shape_10.setTransform(-21.1,-78.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BEQgLgFgHgKQgGgJAAgMQAAgaAbgNQgHgGgDgIQgDgIAAgJQAAgQAMgJQAMgJAVAAQATAAAMAJQALAJAAAQQABAKgHAKQgGAJgNAIIATARQAHgLAEgNIAnAAQgDANgGANQgGAOgJAJIAgAeIgyAAIgJgKIgOAIIgMADIgQABQgQAAgMgFgAglAdQABAGAEAEQAEAEAIAAQAFAAAEgCIAHgDIgZgZQgIAGAAAKgAgZgtQgDADAAAFQAAAHAJAIQAGgDACgEQADgFAAgEQAAgFgDgCQgCgCgFAAQgDAAgEACg");
	this.shape_11.setTransform(-39.8,-78.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-50.2,-94.9,126.2,51.5), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAeAAAQAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAWAAQA4AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape.setTransform(88.1,-47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_1.setTransform(76.7,-47.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_2.setTransform(69.1,-47.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_3.setTransform(63.2,-47.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBAIAAh/IAIAAIAAB/g");
	this.shape_4.setTransform(55.6,-47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_5.setTransform(48.6,-47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBAIggg4IgfAAIAAA4IgJAAIAAh/IAeAAQAXAAALAJQAMAIAAASQAAANgGAJQgIAIgOAEIAjA6gAggABIAYAAQAQAAAIgHQAJgHAAgOQAAgPgJgGQgIgHgTAAIgVAAg");
	this.shape_6.setTransform(39.3,-47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_7.setTransform(28.6,-47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAxQgPgSAAgfQAAgTAHgPQAHgPAOgIQAOgIASAAQATAAAOAHIgDAIQgOgHgQAAQgXAAgOAPQgOAQAAAaQAAAbANAQQAOAPAXAAQAQAAAOgEIAAAIQgNAEgTAAQgaAAgQgRg");
	this.shape_8.setTransform(17.9,-47.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAdAAARAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAVAAQA5AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape_9.setTransform(1.4,-47.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBAIhLhxIgBAAIABAfIAABSIgJAAIAAh/IAJAAIBLBxIABAAIgBgeIAAhTIAJAAIAAB/g");
	this.shape_10.setTransform(-11.9,-47.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_11.setTransform(-20.6,-47.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_12.setTransform(-26.6,-47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(-33.9,-61.9,134.9,28.5), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBIIAAiPIBTAAIAAAfIgtAAIAAAcIApAAIAAAeIgpAAIAAA2g");
	this.shape.setTransform(123.3,-18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzA2QgSgSAAgkQAAgjASgSQATgUAgABQAjAAARASQASATAAAjQAAAkgSASQgSATgiAAQggAAgTgTgAgbAAQAAAqAbAAQAPAAAHgLQAHgKAAgVQAAgUgHgLQgHgKgPAAQgbAAAAApg");
	this.shape_1.setTransform(109.5,-18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA2QgRgSgBgkQABgjARgSQATgUAgABQAjAAARASQASATAAAjQAAAkgSASQgSATgiAAQggAAgTgTgAgbAAQgBAqAcAAQAPAAAHgLQAHgKAAgVQAAgUgHgLQgIgKgOAAQgbAAAAApg");
	this.shape_2.setTransform(93.6,-18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiPIAuAAQA6AAAAArQAAAZgZAMIAqA/gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_3.setTransform(79.7,-18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiPIAuAAQA6AAAAArQAAAZgZAMIAqA/gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_4.setTransform(61,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA5QgQgPAAgbIAAhXIAnAAIAABTQAAAPAFAIQAGAGAKABQAMgBAFgGQAFgHAAgQIAAhTIAnAAIAABWQAAAcgQAPQgQAPgdAAQgdABgPgQg");
	this.shape_5.setTransform(45.7,-18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyA2QgTgSABgkQgBgjATgSQARgUAiABQAhAAASASQARATAAAjQAAAkgRASQgSATgiAAQggAAgSgTgAgcAAQAAAqAcAAQAPAAAHgLQAHgKAAgVQAAgUgHgLQgHgKgOAAQgdAAAAApg");
	this.shape_6.setTransform(30.2,-18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBIIAAg3IguhYIAqAAIAXA2IAYg2IArAAIgwBXIAAA4g");
	this.shape_7.setTransform(15.6,-18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_8.setTransform(112,-39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBIIAAhvIgjAAIAAgfIBrAAIAAAfIgjAAIAABvg");
	this.shape_9.setTransform(100.4,-39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBIIgGgbIguAAIgHAbIgqAAIAuiPIAzAAIAvCPgAgCgfIgMAsIAeAAIgHgWIgFgUIgEgSIgCAQg");
	this.shape_10.setTransform(87.3,-39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBIIgviOIAsAAIATBHQAGAYAAAKIACgRIAFgRIAThHIAsAAIgvCOg");
	this.shape_11.setTransform(73.1,-39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzA3QgSgTAAgkQAAgjASgSQATgUAgABQAjAAARASQASATAAAjQAAAkgSATQgSASgiAAQggAAgTgSgAgbAAQgBApAcAAQAOAAAIgKQAHgKAAgVQAAgUgHgLQgIgKgOAAQgbAAAAApg");
	this.shape_12.setTransform(58.1,-39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASBIIg0hkIAAAAIABAjIAABBIgiAAIAAiOIAyAAIA0BiIAAAAIgBgiIAAhAIAiAAIAACOg");
	this.shape_13.setTransform(41.8,-39.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_14.setTransform(28.2,-39.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiOIAuAAQA6AAAAAqQAAAZgZANIAqA+gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_15.setTransform(16.6,-39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(6.9,-56,123.6,52.5), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAwQgPgSAAgeQAAgeAPgSQAPgRAaAAQAbAAAPARQAPASAAAeQAAAegPASQgPASgbAAQgaAAgPgSgAgigqQgNAPAAAbQAAAbANAQQAMAPAWAAQAXAAAMgPQANgPAAgcQAAgbgNgPQgMgPgXAAQgWAAgMAPg");
	this.shape.setTransform(101.2,-39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_1.setTransform(89.7,-39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_2.setTransform(75.6,-39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBAIAAhgIABgVIgBAAIgwB1IgFAAIgwh1IgBAAIABAWIAABfIgJAAIAAh/IAPAAIAsBwIAAAAIAuhwIAOAAIAAB/g");
	this.shape_3.setTransform(62.5,-39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_4.setTransform(52.5,-39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_5.setTransform(45.5,-39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA9IAAgJQAOAGAVAAQAPAAAKgHQAJgIAAgMQAAgHgDgFQgDgEgHgEQgHgEgNgFQgTgGgIgHQgHgIAAgNQAAgPALgJQALgJARAAQATAAAPAHIgDAHQgQgGgOAAQgOAAgJAGQgIAHAAALQAAAHADAFQADAFAGADQAFAEAOAFQAOAEAIAFQAIAFADAGQADAGAAAJQAAAQgLAKQgMAJgTAAQgXAAgNgFg");
	this.shape_6.setTransform(31.3,-39.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAXIgDgtIALAAIgDAtg");
	this.shape_7.setTransform(24.6,-43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_8.setTransform(18.2,-39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_9.setTransform(11.2,-39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(6.9,-54.6,103.4,28.5), null);


(lib.quote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quotepngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-104,48,0.661,0.661);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.quote, new cjs.Rectangle(-104,48,126.3,53.6), null);


(lib.pc32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc32, new cjs.Rectangle(0,0,300,250), null);


(lib.pc31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.men2();
	this.instance.parent = this;
	this.instance.setTransform(95,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc31, new cjs.Rectangle(95,72,190,135), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAJQgJgHACgHIAFgGQAJgBAFAGQABACgBAFQgCAJgCABIgCABQgCAAgEgDg");
	this.shape.setTransform(127.3,94.6,0.968,0.968);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAoQgDgMAAgKIABgEIgCgXQACgFAAgDIgDgLIgBgDIgOAqQgBACABAFIgBAHQgBAFgEADIgFAAQgDgBAAgDQgDgGgGgdQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgDgRIgBgBIgHARIgHAVIABAAIgCACIACAGIgDAEQgCAFgBAKIgLAFQgCgCgCgJQgCgLgCgzIACAAIgDgSIAJgEQAGANAAAOIAAAWIADAAIAEgOIgBgCQAFgHAIgQIAFgLQAHAAAEAKQACAIADAeQAEgFAEgMIAJgdQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAFABQADgBAEAGQACAFADAQIAEAqIgBADIADADIgCAEIADANIgCAAIADAMIgHAFIgFAAQgDgEgCgLg");
	this.shape_1.setTransform(149.9,92.5,0.968,0.968);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAyQgEgEgBgEQAAgaAHgTQAJgYAQgTIAGgGIAIgEQAKAEACAGQgUANgLATQgMAUgCAbQAAABAFAJQAKAAAMgHQAIgEAXgQIgBALIgLAJQgSANgJAFQgLADgEAAQgHgBgFgGg");
	this.shape_2.setTransform(133.3,91.4,0.968,0.968);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA0QgMgDgGgHQgBgDgBgGIAAgJIAEgRQALgcAbgeIAHABQAFAFgDAIQADACABAJIgBAbQgCAdgRAPIgIAFQgCACgEAAIgBAAgAALgcIgKARQgNAZAAARIAFAGQABAAAFgDQALgJAFgNIACgZIACgDQgDgCgCgLIgDABg");
	this.shape_3.setTransform(140.8,90.4,0.968,0.968);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BuIg3gBIhJAAQgHAAgBgDIABgaIADhHIgDhzQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFAAIBNABIA7gBQAFAAACADQACACAAAFIAEAlIAAAFIgDACIgDAAQgqgFgiABQgIAAgBAEIAAAPQAAALAGACIAJABIAJgBIA8gDIACACIAAACQgEAgAAAQQAAAFgHgBQgOgCgVgBIghAAQgIAAABAFQAAATABADQABAEAHACQAGACAZAAIAagBIAagBQAEgBAAAGIgDAZIgEAWQgBADgEABg");
	this.shape_4.setTransform(48.6,85.1,0.968,0.968);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHB+IgkgkQgDgCABgDIAGgFQALgKACgEQAHgLACgOQACgQAAgqQgBhDgFgpQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAZAAQAMABAYgBQAEAAAAAFIgBCKQgBAmgIAUQgKAggXAUIgFAEIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBg");
	this.shape_5.setTransform(33.2,86.8,0.968,0.968);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBvIgOgBQgFAAAAgEQAEhngBgUIgChTIABgIQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAiABIAYgBQAFAAgBAEIgCA2IgCA1IACBmIgBAGQgKACgTAAIgQAAg");
	this.shape_6.setTransform(23.9,85,0.968,0.968);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBuQgEgCgCgCIgFgKIghg8QgDgHgEgFQgHACgHAEIgDACIACBJQAAAFgFAAQgKABgUAAQgRAAgJgBQgFAAAAgFIADhaQABgWgCgmIgCg+QAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAjABIAYgBQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAVgDAqQAAAMABAEQADAFADAAQASAAAKgKQAFgFAGgMIAVg3QACgFAGAAIAdABIAWgBQACABAAAFIgDAMQgJAcgIASQgLAXgOAMQgIAFgDAEIAeAxQARAcAHAPQAEAJgBAFQgBAFgGABQgFABgSAAQgUAAgKgBg");
	this.shape_7.setTransform(9.3,85,0.968,0.968);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/BvIgNAAQgCAAgDgEIhThtIgDgEIgCADIACBsIgBAFQAAABgFAAIgzAAQgFAAgBgCIAAgIIADhJQABgZgCgoIgChCQAAgDAFAAQAWgBALgCIAQgCIAIAJIBOBpQAEAGAEABQABgEAAgOQgDg+AAgfQAAgEABgBIAHgBIA0gBQAEAAgBAFQAAAggDBAIAABzQABADgFAAIgVABIgOgBg");
	this.shape_8.setTransform(68.9,84.9,0.968,0.968);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBvQgFAAgCgFIgGgWQgBgFgDABIgmgBIgcABIgDACIgEAMIgEAMQgCAFgEABIgkABQgRgBgEgCQgCAAACgHQAJgdAbhJIAnhnQACgIACgCIAUABQAKABAVgBQADgBADAGIBODGIAEAPQABAEgGABIgcABQgTAAgJgCgAgOACIgGAWIAGACIAUAAIAIAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgNQgHgagHgSIgOAkg");
	this.shape_9.setTransform(113.8,84.9,0.968,0.968);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBnQgogVgNgsQgHgVADgaQABgbAMgWQASggAegOQAXgLAdABQAsACAbAeQAHAJAAACQAAADgFAIQgJANgIAIQgGAHgEABIgJgIQgRgRgWABQgTgBgMAMQgTAQAAAcQgBAZAOAQQALANATADQAUACAYgKQgFghAAgQQAAgGADgBQAHAAAQACQAMABAZgCQADgBAAAGIgBAnQgBAWADApIAAAIQgCACgGgBQgOgDgRgFQgcALgcACIgGAAQgdAAgXgMg");
	this.shape_10.setTransform(91.7,84.9,0.968,0.968);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,73.8,154.9,25.5), null);


(lib.hulfhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.roofer1();
	this.instance.parent = this;
	this.instance.setTransform(115,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hulfhead, new cjs.Rectangle(115,35,204,166), null);


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
	this.shape_16.graphics.f("#003466").s().p("ArzCRIAAkgIXoAAIAAEgg");
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
(lib.Roof_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_843 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(843).call(this.frame_843).wait(13));

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(216.6,272.8,1.09,1.09);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA3IAAhdIggAAIAAgQIBRAAIAAAQIggAAIAABdg");
	this.shape.setTransform(271.5,224.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbApQgNgOAAgbQAAgQAGgNQAGgNAMgGQAMgHAPAAQAQAAAOAHIgGAPQgFgDgHgCQgGgBgHgBQgOAAgJALQgIALAAASQAAAUAIALQAIAKAPAAQAHAAAHgBIANgEIAAAPQgMAFgRAAQgXAAgMgPg");
	this.shape_1.setTransform(262.6,224.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA3IAAhtIA9AAIAAAPIgrAAIAAAeIAoAAIAAAOIgoAAIAAAjIArAAIAAAPg");
	this.shape_2.setTransform(253.6,224.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBEIAAgPIAKABQAOAAAAgSIAAhpIASAAIAABoQAAARgIAJQgIAJgPAAQgGAAgFgCg");
	this.shape_3.setTransform(245.5,226.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglApQgNgPAAgaQAAgbANgNQANgPAZAAQAXAAAOAPQANAOAAAaQAAAagNAPQgNAPgZAAQgYAAgNgPgAgXgeQgIALAAATQAAAUAIALQAIAKAPAAQAQAAAIgKQAIgLAAgUQAAgTgIgLQgIgKgPAAQgQAAgIAKg");
	this.shape_4.setTransform(238.5,224.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA3IgZgsIgSAAIAAAsIgSAAIAAhtIAfAAQAUABAKAHQAKAJAAAQQAAAUgVAHIAfAxgAgWgDIAMAAQAMAAAFgEQAGgFAAgJQAAgKgGgDQgGgFgLAAIgMAAg");
	this.shape_5.setTransform(228.3,224.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA3IAAhtIAgAAQASAAALAJQAKAIAAAQQAAARgLAIQgLAKgUgBIgMAAIAAAqgAgSAAIAKAAQANAAAGgFQAHgFgBgKQAAgKgFgEQgGgEgLgBIgNAAg");
	this.shape_6.setTransform(218.4,224.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA3IgZgsIgSAAIAAAsIgSAAIAAhtIAfAAQAUABAKAHQAKAJAAAQQAAAUgVAHIAfAxgAgWgDIAMAAQAMAAAFgEQAGgFAAgJQAAgKgGgDQgGgFgLAAIgMAAg");
	this.shape_7.setTransform(205.2,224.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAtQgLgLAAgTIAAhFIASAAIAABEQAAANAGAHQAGAGAMAAQAZAAAAgaIAAhEIASAAIAABFQAAAMgFAJQgFAJgKAFQgKAFgNAAQgUAAgLgKg");
	this.shape_8.setTransform(194,224.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkApQgOgPAAgaQAAgbAOgNQAMgPAYAAQAZAAANAPQANAOAAAaQAAAagNAPQgOAPgYAAQgXAAgNgPgAgXgeQgIALAAATQAAAUAIALQAIAKAPAAQAQAAAIgKQAIgLAAgUQAAgTgIgLQgIgKgQAAQgOAAgJAKg");
	this.shape_9.setTransform(182.3,224.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA3IAAgqIgkhDIATAAIAZAyIAagyIATAAIgkBCIAAArg");
	this.shape_10.setTransform(171.8,224.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA3IAAhdIggAAIAAgQIBRAAIAAAQIggAAIAABdg");
	this.shape_11.setTransform(159,224.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAyIAAgRQAIAEAIACQAIACAIAAQAJAAAFgEQAFgEAAgHQAAgGgEgFQgFgDgNgHQgPgFgGgHQgHgIAAgKQAAgOAKgIQAKgIAPAAQAQAAAPAHIgFAPQgPgHgLAAQgIABgEADQgFAEAAAGQAAAEACADQACAEAEACIAOAHQAMAFAFAEQAGAEACAFQADAGAAAHQAAAOgLAJQgKAIgSAAQgSAAgMgGg");
	this.shape_12.setTransform(150.5,224.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkApQgOgPAAgaQAAgbAOgNQANgPAYAAQAYAAANAPQANAOAAAaQAAAagNAPQgNAPgZAAQgXAAgNgPgAgXgeQgIALAAATQAAAUAIALQAIAKAPAAQAQAAAIgKQAIgLAAgUQAAgTgIgLQgIgKgPAAQgQAAgIAKg");
	this.shape_13.setTransform(140.3,224.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA3IAAhtIAgAAQASAAALAJQAKAIAAAQQAAARgLAIQgLAKgUgBIgMAAIAAAqgAgSAAIAKAAQANAAAHgFQAFgFAAgKQABgKgGgEQgGgEgLgBIgNAAg");
	this.shape_14.setTransform(130,224.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("As/idIAOAAIZxAAIAAE7I5xAAIgOAAg");
	this.shape_15.setTransform(200.7,224.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003466").s().p("As4CdIAAk6IZxAAIAAE6g");
	this.shape_16.setTransform(201.3,224.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},209).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},56).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance}]},229).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},56).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance}]},229).to({state:[{t:this.instance}]},11).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({x:217.6,y:225.8},11,cjs.Ease.get(1)).wait(56).to({y:269.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:216.6,y:272.8},0).to({x:217.6,y:225.8},11,cjs.Ease.get(1)).wait(56).to({y:269.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:216.6,y:272.8},0).to({x:217.6,y:225.8},11,cjs.Ease.get(1)).to({_off:true},9).wait(13));

	// t3-1
	this.instance_1 = new lib.t31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.3,41,1,1,0,0,0,75.7,34.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(198).to({_off:false},0).to({x:211.3,y:42,alpha:1},11,cjs.Ease.get(0.98)).wait(77).to({x:171.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(208).to({_off:false,x:150.3,y:41},0).to({x:211.3,y:42,alpha:1},11,cjs.Ease.get(0.98)).wait(77).to({x:171.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(208).to({_off:false,x:150.3,y:41},0).to({x:211.3,y:42,alpha:1},11,cjs.Ease.get(0.98)).wait(33));

	// Logo
	this.instance_2 = new lib.Logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.1,167.6,0.806,0.806,0,0,0,80.2,13.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:58.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,x:39.1},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:58.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,x:39.1},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:58.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(44));

	// FIND
	this.instance_3 = new lib.t22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(239.6,283.9,1.199,1.199,0,0,0,93,32.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({x:179.6,alpha:1},10,cjs.Ease.get(1)).wait(77).to({x:227.6,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(208).to({_off:false,x:239.6},0).to({x:179.6,alpha:1},10,cjs.Ease.get(1)).wait(77).to({x:227.6,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(208).to({_off:false,x:239.6},0).to({x:179.6,alpha:1},10,cjs.Ease.get(1)).wait(77).to({x:227.6,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(44));

	// FIND
	this.instance_4 = new lib.t21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(206.5,221.6,1.199,1.199,0,0,0,100.3,32.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({x:170.6,alpha:1},10,cjs.Ease.get(1)).wait(76).to({x:218.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(209).to({_off:false,x:206.5},0).to({x:170.6,alpha:1},10,cjs.Ease.get(1)).wait(76).to({x:218.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(209).to({_off:false,x:206.5},0).to({x:170.6,alpha:1},10,cjs.Ease.get(1)).wait(76).to({x:218.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(55));

	// t1-2
	this.instance_5 = new lib.t12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(28.9,234.9,1.131,1.131,0,0,0,84.2,30.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(49).to({x:66.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(237).to({_off:false,regX:84.2,x:28.9},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(49).to({x:66.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(237).to({_off:false,regX:84.2,x:28.9},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(49).to({x:66.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// t1-1
	this.instance_6 = new lib.t11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(39.7,194.8,1.131,1.131,0,0,0,94.8,16.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(49).to({regX:94.8,x:70.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(237).to({_off:false,x:39.7},0).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(49).to({regX:94.8,x:70.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(237).to({_off:false,x:39.7},0).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(49).to({regX:94.8,x:70.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(172));

	// Слой 9
	this.instance_7 = new lib.hulfhead();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62,96,1,1,0,0,0,61,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({alpha:0},10).to({_off:true},1).wait(207).to({_off:false,alpha:1},0).wait(89).to({alpha:0},10).to({_off:true},1).wait(207).to({_off:false,alpha:1},0).wait(89).to({alpha:0},10).to({_off:true},1).wait(142));

	// quote
	this.instance_8 = new lib.quote();
	this.instance_8.parent = this;
	this.instance_8.setTransform(190.5,245.6,1,1,0,0,0,95.5,40.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(197).to({_off:false},0).to({x:188,y:188.9},12).wait(87).to({y:247.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(197).to({_off:false,x:190.5,y:245.6},0).to({x:188,y:188.9},12).wait(87).to({y:247.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(197).to({_off:false,x:190.5,y:245.6},0).to({x:188,y:188.9},12).wait(33));

	// pc3-1
	this.instance_9 = new lib.pc31();
	this.instance_9.parent = this;
	this.instance_9.setTransform(100.5,147,1,1,0,0,0,82,101);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({x:130.5,y:145,alpha:1},10,cjs.Ease.get(1)).wait(100).to({y:93},11,cjs.Ease.get(1)).wait(57).to({y:95,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(118).to({_off:false,x:100.5,y:147},0).to({x:130.5,y:145,alpha:1},10,cjs.Ease.get(1)).wait(100).to({y:93},11,cjs.Ease.get(1)).wait(57).to({y:95,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(118).to({_off:false,x:100.5,y:147},0).to({x:130.5,y:145,alpha:1},10,cjs.Ease.get(1)).wait(100).to({y:93},11,cjs.Ease.get(1)).wait(22));

	// quote
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(53,134,184,0)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_17.setTransform(150,224.4);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(53,134,184,0.153)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_18.setTransform(150,224.4);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(53,134,184,0.286)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_19.setTransform(150,224.4);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(53,134,184,0.408)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_20.setTransform(150,224.4);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(53,134,184,0.514)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_21.setTransform(150,224.4);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(53,134,184,0.6)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_22.setTransform(150,224.4);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(53,134,184,0.671)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_23.setTransform(150,224.4);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(53,134,184,0.729)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_24.setTransform(150,224.4);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(53,134,184,0.769)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_25.setTransform(150,224.4);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(53,134,184,0.792)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_26.setTransform(150,224.4);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(53,134,184,0.8)").s().p("A3bEBIAAoBMAu3AAAIAAIBg");
	this.shape_27.setTransform(150,224.4);
	this.shape_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(89).to({_off:false},0).to({_off:true},1).wait(196).to({_off:false},0).to({_off:true},1).wait(109).to({_off:false},0).to({_off:true},1).wait(196).to({_off:false},0).to({_off:true},1).wait(109).to({_off:false},0).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(90).to({_off:false},0).to({_off:true},1).wait(194).to({_off:false},0).to({_off:true},1).wait(111).to({_off:false},0).to({_off:true},1).wait(194).to({_off:false},0).to({_off:true},1).wait(111).to({_off:false},0).to({_off:true},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(91).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(113).to({_off:false},0).to({_off:true},1).wait(192).to({_off:false},0).to({_off:true},1).wait(113).to({_off:false},0).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(92).to({_off:false},0).to({_off:true},1).wait(190).to({_off:false},0).to({_off:true},1).wait(115).to({_off:false},0).to({_off:true},1).wait(190).to({_off:false},0).to({_off:true},1).wait(115).to({_off:false},0).to({_off:true},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(93).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(117).to({_off:false},0).to({_off:true},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(94).to({_off:false},0).to({_off:true},1).wait(186).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(186).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(95).to({_off:false},0).to({_off:true},1).wait(184).to({_off:false},0).to({_off:true},1).wait(121).to({_off:false},0).to({_off:true},1).wait(184).to({_off:false},0).to({_off:true},1).wait(121).to({_off:false},0).to({_off:true},1).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(96).to({_off:false},0).to({_off:true},1).wait(182).to({_off:false},0).to({_off:true},1).wait(123).to({_off:false},0).to({_off:true},1).wait(182).to({_off:false},0).to({_off:true},1).wait(123).to({_off:false},0).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(97).to({_off:false},0).to({_off:true},1).wait(180).to({_off:false},0).to({_off:true},1).wait(125).to({_off:false},0).to({_off:true},1).wait(180).to({_off:false},0).to({_off:true},1).wait(125).to({_off:false},0).to({_off:true},1).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(98).to({_off:false},0).to({_off:true},1).wait(178).to({_off:false},0).to({_off:true},1).wait(127).to({_off:false},0).to({_off:true},1).wait(178).to({_off:false},0).to({_off:true},1).wait(127).to({_off:false},0).to({_off:true},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(99).to({_off:false},0).wait(177).to({_off:true},1).wait(129).to({_off:false},0).wait(177).to({_off:true},1).wait(129).to({_off:false},0).wait(143));

	// plate-orange
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,52,102,0)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_28.setTransform(150,154.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,52,102,0.09)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_29.setTransform(150,154.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,52,102,0.18)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_30.setTransform(150,154.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,52,102,0.271)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_31.setTransform(150,154.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,52,102,0.361)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_32.setTransform(150,154.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,52,102,0.451)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_33.setTransform(150,154.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,52,102,0.537)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_34.setTransform(150,154.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,52,102,0.627)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_35.setTransform(150,154.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,52,102,0.718)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_36.setTransform(150,154.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,52,102,0.808)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_37.setTransform(150,154.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,52,102,0.898)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_38.setTransform(150,154.9);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,52,102,0.725)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_39.setTransform(150,154.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,52,102,0.576)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_40.setTransform(150,154.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,52,102,0.439)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_41.setTransform(150,154.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,52,102,0.322)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_42.setTransform(150,154.9);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,52,102,0.224)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_43.setTransform(150,154.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,52,102,0.145)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_44.setTransform(150,154.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,52,102,0.082)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_45.setTransform(150,154.9);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,52,102,0.035)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_46.setTransform(150,154.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,52,102,0.008)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_47.setTransform(150,154.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,52,102,0.098)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_48.setTransform(150,154.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,52,102,0.2)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_49.setTransform(150,154.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,52,102,0.298)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_50.setTransform(150,154.9);
	this.shape_50._off = true;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,52,102,0.4)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_51.setTransform(150,154.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,52,102,0.498)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_52.setTransform(150,154.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,52,102,0.6)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_53.setTransform(150,154.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,52,102,0.698)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_54.setTransform(150,154.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,52,102,0.8)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_55.setTransform(150,154.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,52,102,0.816)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_56.setTransform(150,154.9);
	this.shape_56._off = true;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,52,102,0.733)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_57.setTransform(150,154.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,52,102,0.655)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_58.setTransform(150,154.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,52,102,0.573)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_59.setTransform(150,154.9);
	this.shape_59._off = true;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,52,102,0.49)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_60.setTransform(150,154.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,52,102,0.408)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_61.setTransform(150,154.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,52,102,0.325)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_62.setTransform(150,154.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,52,102,0.243)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_63.setTransform(150,154.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,52,102,0.165)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_64.setTransform(150,154.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,52,102,0.157)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_65.setTransform(150,44.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,52,102,0.424)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_66.setTransform(150,44.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,52,102,0.533)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_67.setTransform(150,44.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,52,102,0.631)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_68.setTransform(150,44.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,52,102,0.714)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_69.setTransform(150,44.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,52,102,0.78)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_70.setTransform(150,44.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,52,102,0.831)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_71.setTransform(150,44.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,52,102,0.867)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_72.setTransform(150,44.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,52,102,0.89)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_73.setTransform(150,44.9);
	this.shape_73._off = true;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,52,102,0.859)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_74.setTransform(150,44.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,52,102,0.753)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_75.setTransform(150,44.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,52,102,0.671)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_76.setTransform(150,44.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,52,102,0.455)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_77.setTransform(150,44.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,52,102,0.169)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_78.setTransform(150,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},69).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},87).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},77).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_28}]},10).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},69).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},87).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},77).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_28}]},10).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},69).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},87).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_38}]},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).to({_off:true},1).wait(88).to({_off:false},0).wait(1).to({_off:true},1).wait(106).to({_off:false},0).wait(1).to({y:44.9},0).to({_off:true},1).wait(97).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:154.9},0).to({_off:true},1).wait(88).to({_off:false},0).wait(1).to({_off:true},1).wait(106).to({_off:false},0).wait(1).to({y:44.9},0).to({_off:true},1).wait(97).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:154.9},0).to({_off:true},1).wait(88).to({_off:false},0).wait(1).to({_off:true},1).wait(106).to({_off:false},0).wait(1).to({y:44.9},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(10).to({_off:false},0).wait(69).to({_off:true},1).wait(19).to({_off:false},0).wait(87).to({_off:true},1).wait(22).to({_off:false,y:44.9},0).wait(77).to({_off:true},1).wait(30).to({_off:false,y:154.9},0).wait(69).to({_off:true},1).wait(19).to({_off:false},0).wait(87).to({_off:true},1).wait(22).to({_off:false,y:44.9},0).wait(77).to({_off:true},1).wait(30).to({_off:false,y:154.9},0).wait(69).to({_off:true},1).wait(19).to({_off:false},0).wait(87).to({_off:true},1).wait(22).to({_off:false,y:44.9},0).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(83).to({_off:false},0).to({_off:true},1).wait(210).to({_off:false,y:44.9},0).to({_off:true},1).wait(95).to({_off:false,y:154.9},0).to({_off:true},1).wait(210).to({_off:false,y:44.9},0).to({_off:true},1).wait(95).to({_off:false,y:154.9},0).to({_off:true},1).wait(158));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(86).to({_off:false},0).to({_off:true},1).wait(109).to({_off:false},0).to({_off:true},1).wait(196).to({_off:false},0).to({_off:true},1).wait(109).to({_off:false},0).to({_off:true},1).wait(196).to({_off:false},0).to({_off:true},1).wait(109).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(93).to({_off:false},0).to({_off:true},1).wait(106).to({_off:false,y:44.9},0).to({_off:true},1).wait(199).to({_off:false,y:154.9},0).to({_off:true},1).wait(106).to({_off:false,y:44.9},0).to({_off:true},1).wait(199).to({_off:false,y:154.9},0).to({_off:true},1).wait(106).to({_off:false,y:44.9},0).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(187).to({_off:false},0).to({_off:true},1).wait(101).to({_off:false,y:44.9},0).to({_off:true},1).wait(204).to({_off:false,y:154.9},0).to({_off:true},1).wait(101).to({_off:false,y:44.9},0).to({_off:true},1).wait(204).to({_off:false,y:154.9},0).to({_off:true},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(190).to({_off:false},0).to({_off:true},1).wait(101).to({_off:false,y:44.9},0).to({_off:true},1).wait(204).to({_off:false,y:154.9},0).to({_off:true},1).wait(101).to({_off:false,y:44.9},0).to({_off:true},1).wait(204).to({_off:false,y:154.9},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_73).wait(208).to({_off:false},0).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},1).wait(227).to({_off:false},0).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},1).wait(227).to({_off:false},0).to({_off:true},1).wait(33));

	// Слой 2
	this.instance_10 = new lib.hulfhead();
	this.instance_10.parent = this;
	this.instance_10.setTransform(62,96,1,1,0,0,0,61,45);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(296).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(296).to({_off:false,alpha:0},0).to({alpha:1},10).to({_off:true},1).wait(242));

	// pc3-2
	this.instance_11 = new lib.pc32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},0).to({alpha:1},10).wait(207).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},10).wait(207).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},10).wait(153));

	// pc1-2
	this.instance_12 = new lib.bgpc1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(856));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.3,125,379.7,252);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Roof_300x250_atlas_P_.png", id:"Roof_300x250_atlas_P_"},
		{src:"images/Roof_300x250_atlas_NP_.jpg", id:"Roof_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;