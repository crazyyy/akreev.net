(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Bathroom_300x250_atlas_P_", frames: [[138,0,153,201],[0,0,136,246],[0,248,191,81]]},
		{name:"Bathroom_300x250_atlas_NP_", frames: [[0,252,300,250],[0,0,300,250]]}
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
	this.spriteSheet = ss["Bathroom_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["Bathroom_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dog = function() {
	this.spriteSheet = ss["Bathroom_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.man2 = function() {
	this.spriteSheet = ss["Bathroom_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quotepngкопия = function() {
	this.spriteSheet = ss["Bathroom_300x250_atlas_P_"];
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
	this.shape.setTransform(147.6,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBIIhVh/IgBAAIABAjIAABcIgKAAIAAiQIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACQg");
	this.shape_1.setTransform(137.8,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_2.setTransform(122.7,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_3.setTransform(107.1,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBIIAAiGIgvAAIAAgKIBnAAIAAAKIgvAAIAACGg");
	this.shape_4.setTransform(94.1,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBJIgUg0Ig5AAIgVA0IgLAAIA7iRIAFAAIA5CRgAgFgnIgUAzIAzAAIgTgzIgGgRIgGARg");
	this.shape_5.setTransform(82.7,43.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBIIg3hLIgUAQIAAA7IgKAAIAAiQIAKAAIAABLIARgPIA3g8IANAAIg6A+IA8BSg");
	this.shape_6.setTransform(71.7,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_7.setTransform(59.2,43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxBJIgUg0Ig5AAIgVA0IgLAAIA7iRIAFAAIA5CRgAgFgnIgUAzIAzAAIgTgzIgGgRIgGARg");
	this.shape_8.setTransform(47.6,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_9.setTransform(35.9,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBIIhVh/IgBAAIABAjIAABcIgKAAIAAiQIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACQg");
	this.shape_10.setTransform(17.7,43.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBIIAAiQIAJAAIAACQg");
	this.shape_11.setTransform(7.8,43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBRQgLgDgLgFIAAgnQAMAGAOAEQANAEALAAQAJAAAEgEQAFgDAAgGQAAgDgCgCIgGgFIgVgLQgPgHgIgHQgIgFgEgJQgDgJAAgMQAAgWAQgMQAQgNAcAAQAZAAAZAMIgNAhQgWgKgRAAQgIAAgEADQgDADAAAEQAAAFAFAEQAFAEAUAKQAVAJAIAKQAIAKAAARQABAPgIALQgIAMgOAHQgPAGgSAAQgQAAgLgCg");
	this.shape_12.setTransform(143.6,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_13.setTransform(131,20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgnAAIAAgkIB5AAIAAAkIgnAAIAAB9g");
	this.shape_14.setTransform(117.9,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5A+QgUgVgBgpQAAgnAVgWQAUgVAlAAQAmAAAVAVQATAVABAoQgBApgTAVQgVAVgmAAQglAAgUgVgAggAAQAAAvAgAAQAQAAAJgLQAHgMABgYQgBgXgHgMQgJgLgQAAQggAAAAAug");
	this.shape_15.setTransform(102.2,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBBQgSgRAAgfIAAhiIAsAAIAABeQAAARAGAIQAGAIAMAAQAOAAAFgIQAHgIAAgRIAAheIArAAIAABhQAAAfgSASQgRARgiAAQggAAgSgRg");
	this.shape_16.setTransform(84.7,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBlIgbgkIAAAAQgmAAgUgVQgVgWAAgnQAAgpAUgVQAVgVAmAAQAlAAAUAVQAUAVAAApQAAA2gjATIAoAtgAgigRQAAAuAhAAQAPAAAIgMQAIgLAAgXQAAgYgIgMQgIgLgPAAQghAAAAAvg");
	this.shape_17.setTransform(67.3,22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_18.setTransform(46.3,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_19.setTransform(33.8,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUBRIgig7IgLAAIAAA7IgrAAIAAihIA1AAQBBAAgBAwQAAAcgbAOIAvBHgAgZgKIAIAAQAXAAAAgUQgBgRgVAAIgJAAg");
	this.shape_20.setTransform(20.7,20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIg0AAIAAAfIAvAAIAAAiIgvAAIAAA9g");
	this.shape_21.setTransform(6.3,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEBIIAAiGIgvAAIAAgKIBnAAIAAAKIgvAAIAACGg");
	this.shape_22.setTransform(-10.8,21.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBIIAAiQIBPAAIAAAJIhFAAIAAA3IBBAAIAAAJIhBAAIAAA+IBFAAIAAAJg");
	this.shape_23.setTransform(-21.4,21.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA3QgSgTAAgkQAAgVAJgRQAJgRARgJQARgKAVAAQAXAAAUAJIgFAJQgSgJgVAAQgcAAgQASQgRASAAAdQAAAhAQAQQAQARAeAAQAUAAAOgGIAAgzIgrAAIAAgJIA1AAIAABCQgVAJgaAAQghAAgTgUg");
	this.shape_24.setTransform(-34.8,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(-44.5,2,196.8,57.4), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQANADAKAAQAHAAAEgDQAEgDAAgEQAAgDgCgDQgBgCgDgCIgSgJQgOgHgIgGQgGgFgEgHQgDgIAAgKQAAgVAOgLQAPgKAYgBQAVAAAYALIgMAeQgUgJgOAAQgHAAgEACQgDADAAAEQAAAEAEADQAFADASAKQASAIAIAIQAHAKAAAOQAAAOgHAKQgGAKgNAGQgNAGgQgBQgOAAgKgCg");
	this.shape.setTransform(178.4,-160.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA2QgSgSAAgkQAAgjASgTQARgSAigBQAhAAASATQARATAAAjQAAAkgRASQgSAUgigBQghABgRgUgAgbAAQAAAqAbAAQAOAAAIgKQAHgLAAgVQAAgUgHgKQgIgLgNAAQgcAAAAApg");
	this.shape_1.setTransform(164.5,-160.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUABAAgTQAAgOgTAAIgIAAg");
	this.shape_2.setTransform(150.6,-160.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBHIAAiOIAyAAQAaAAANANQAOALAAAWQAAAYgOAMQgOANgZAAIgLAAIAAAvgAgMgHIAHAAQAHABAGgFQAFgFAAgJQAAgOgPAAIgKAAg");
	this.shape_3.setTransform(137,-160.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BHIAAiOIAxAAQAhAAATASQASASAAAhQAAAjgTATQgTATgkAAgAgVAoIAIAAQARAAAJgKQAIgKAAgVQgBgTgHgJQgIgKgPAAIgLAAg");
	this.shape_4.setTransform(118,-160.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_5.setTransform(105.2,-160.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgjAAIAABtg");
	this.shape_6.setTransform(93.6,-160.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGAMADQALADAKAAQAIAAAEgDQAEgDAAgEQAAgDgBgDQgCgCgEgCIgSgJQgOgHgGgGQgIgFgDgHQgDgIAAgKQAAgVAOgLQAOgKAYgBQAXAAAXALIgMAeQgUgJgPAAQgGAAgDACQgEADAAAEQAAAEAFADQAEADASAKQASAIAHAIQAIAKAAAOQAAAOgHAKQgHAKgNAGQgMAGgQgBQgPAAgJgCg");
	this.shape_7.setTransform(82,-160.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA6QgQgPAAgdIAAhWIAnAAIAABUQAAAPAFAGQAGAIAKAAQAMAAAFgIQAFgGAAgPIAAhUIAnAAIAABWQAAAbgQAQQgQAPgdAAQgdAAgPgOg");
	this.shape_8.setTransform(68.5,-160.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUABAAgTQAAgOgTAAIgIAAg");
	this.shape_9.setTransform(55.1,-160.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgjAAIAABtg");
	this.shape_10.setTransform(41.6,-160.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzBEQgMgFgGgKQgHgJAAgMQAAgaAbgNQgHgGgDgIQgDgIAAgJQAAgQAMgJQAMgJAVAAQAUAAALAJQALAJAAAQQAAAKgFAKQgHAJgNAIIATARQAHgLAEgNIAnAAQgDANgGANQgHAOgIAJIAgAeIgyAAIgJgKIgOAIIgMADIgQABQgQAAgLgFgAglAdQABAGAEAEQAEAEAHAAQAGAAAEgCIAHgDIgZgZQgHAGgBAKgAgYgtQgEADAAAFQAAAHAJAIQAFgDADgEQADgFAAgEQAAgFgDgCQgCgCgFAAQgDAAgDACg");
	this.shape_11.setTransform(22.9,-160.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-47.9,-177.1,234,31.3), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAdAAARAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAVAAQA5AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape.setTransform(193.7,-129.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_1.setTransform(182.3,-129.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBAIAAh/IAIAAIAAB/g");
	this.shape_2.setTransform(174.7,-129.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_3.setTransform(168.8,-129.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_4.setTransform(161.2,-129.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_5.setTransform(154.2,-129.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBAIgfg4IghAAIAAA4IgJAAIAAh/IAgAAQAWAAAMAJQALAIAAASQAAANgHAJQgGAIgOAEIAjA6gAghABIAZAAQAQAAAJgHQAIgHABgOQgBgPgIgGQgJgHgTAAIgWAAg");
	this.shape_6.setTransform(144.9,-129.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_7.setTransform(134.2,-129.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAxQgPgSAAgfQAAgTAHgPQAHgPAOgIQAOgIASAAQATAAAOAHIgDAIQgOgHgQAAQgXAAgOAPQgOAQAAAaQAAAbANAQQAOAPAXAAQAQAAAOgEIAAAIQgNAEgTAAQgaAAgQgRg");
	this.shape_8.setTransform(123.5,-129.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAeAAAQAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAWAAQA4AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape_9.setTransform(107,-129.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBAIhLhxIgBAAIABAfIAABSIgJAAIAAh/IAJAAIBLBxIABAAIgBgeIAAhTIAJAAIAAB/g");
	this.shape_10.setTransform(93.7,-129.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_11.setTransform(85,-129.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_12.setTransform(79,-129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(66.8,-144,134.9,28.5), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBIIAAg/IAAgKIABgdIgBAAIgcBmIgkAAIgdhnIgBAAIACAoIAAA/IgiAAIAAiPIAzAAIAdBlIABAAIAdhlIAzAAIAACPg");
	this.shape.setTransform(241.3,-113.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzA2QgRgSgBgkQABgjARgSQATgUAgABQAjAAARASQASATAAAjQAAAkgSASQgSATgiAAQggAAgTgTgAgbAAQgBAqAcAAQAPAAAHgLQAHgKAAgVQAAgUgHgLQgIgKgOAAQgbAAAAApg");
	this.shape_1.setTransform(223.6,-113.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyA2QgSgSgBgkQABgjASgSQARgUAiABQAhAAASASQARATAAAjQAAAkgRASQgSATgiAAQghAAgRgTgAgbAAQAAAqAbAAQAOAAAIgLQAHgKAAgVQAAgUgHgLQgIgKgNAAQgcAAAAApg");
	this.shape_2.setTransform(207.7,-113.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiPIAuAAQA6AAAAArQAAAZgZAMIAqA/gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_3.setTransform(193.8,-113.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWBIIAAg7IgsAAIAAA7IgmAAIAAiPIAmAAIAAA2IAsAAIAAg2IAnAAIAACPg");
	this.shape_4.setTransform(178.5,-113.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBIIAAhuIgjAAIAAghIBrAAIAAAhIgjAAIAABug");
	this.shape_5.setTransform(165,-113.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBIIgHgbIgtAAIgHAbIgqAAIAuiPIAzAAIAvCPgAgDgfIgLAsIAdAAIgFgWIgGgUIgEgSIgDAQg");
	this.shape_6.setTransform(151.9,-113.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BIIAAiPIAyAAQAcAAAOAJQAOAJAAASQAAAMgGAJQgGAIgKACIAAACQANACAGAJQAGAHAAANQAAAUgPAMQgPAKgYABgAgPAqIANAAQARAAAAgPQAAgIgEgDQgGgFgIAAIgMAAgAgPgQIALAAQAIAAAEgDQAEgDABgHQgBgMgQAAIgLAAg");
	this.shape_7.setTransform(138.2,-113.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiOIAuAAQA6AAAAAqQAAAZgZANIAqA+gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_8.setTransform(245.1,-135.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA5QgQgOAAgcIAAhWIAnAAIAABSQAAAPAFAIQAGAGAKAAQAMAAAFgGQAFgHAAgQIAAhSIAnAAIAABUQAAAdgQAPQgQAPgdAAQgdAAgPgPg");
	this.shape_9.setTransform(229.8,-135);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzA3QgSgTAAgkQAAgjASgSQATgUAgABQAjAAARASQASATAAAjQAAAkgSATQgSASgiAAQggAAgTgSgAgbAAQgBApAcAAQAOAAAIgKQAHgKAAgVQAAgUgHgLQgIgKgOAAQgbAAAAApg");
	this.shape_10.setTransform(214.3,-135.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBIIAAg3IgwhXIAqAAIAYA1IAZg1IApAAIgvBWIAAA4g");
	this.shape_11.setTransform(199.7,-135.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_12.setTransform(182.6,-135.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBIIAAhvIgjAAIAAgfIBrAAIAAAfIgjAAIAABvg");
	this.shape_13.setTransform(171,-135.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeBIIgHgbIgtAAIgHAbIgqAAIAuiPIAzAAIAvCPgAgDgfIgLAsIAeAAIgGgWIgGgUIgEgSIgDAQg");
	this.shape_14.setTransform(157.8,-135.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBIIgviOIAsAAIATBHQAGAYAAAKIACgRIAFgRIAThHIAsAAIgvCOg");
	this.shape_15.setTransform(143.6,-135.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzA3QgRgTgBgkQABgjARgSQATgUAgABQAjAAARASQASATAAAjQAAAkgSATQgSASgiAAQggAAgTgSgAgbAAQgBApAcAAQAPAAAHgKQAHgKAAgVQAAgUgHgLQgIgKgOAAQgbAAAAApg");
	this.shape_16.setTransform(128.7,-135.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASBIIg0hkIAAAAIABAjIAABBIgiAAIAAiOIAzAAIAzBiIAAAAIgBgiIAAhAIAiAAIAACOg");
	this.shape_17.setTransform(112.4,-135.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_18.setTransform(98.8,-135.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiOIAuAAQA6AAAAAqQAAAZgZANIAqA+gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_19.setTransform(87.1,-135.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(77.3,-151.4,175.7,52.5), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAwQgPgSAAgeQAAgeAPgSQAPgRAaAAQAbAAAPARQAPASAAAeQAAAegPASQgPASgbAAQgaAAgPgSgAgigqQgNAPAAAbQAAAbANAQQAMAPAWAAQAXAAAMgPQANgPAAgcQAAgbgNgPQgMgPgXAAQgWAAgMAPg");
	this.shape.setTransform(244.8,-135.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_1.setTransform(233.3,-135.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_2.setTransform(219.2,-135.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyBAIAAhgIABgVIAAAAIgwB1IgFAAIgvh1IgBAAIABAWIAABfIgJAAIAAh/IANAAIAtBwIABAAIAthwIANAAIAAB/g");
	this.shape_3.setTransform(206.1,-135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBAIAAh/IAIAAIAAB/g");
	this.shape_4.setTransform(196.1,-135.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_5.setTransform(189.1,-135.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA9IAAgJQANAGAWAAQAOAAAKgHQAJgIAAgMQAAgHgDgFQgDgEgHgEQgHgEgMgFQgUgGgHgHQgIgIAAgNQAAgPALgJQAMgJAQAAQASAAAQAHIgDAHQgQgGgOAAQgOAAgIAGQgJAHAAALQAAAHADAFQADAFAFADQAGAEAOAFQAPAEAHAFQAIAFADAGQAEAGAAAJQAAAQgMAKQgMAJgSAAQgYAAgMgFg");
	this.shape_6.setTransform(174.9,-135.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAXIgDgtIALAAIgDAtg");
	this.shape_7.setTransform(168.2,-139.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_8.setTransform(161.8,-135.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEBAIAAh/IAIAAIAAB/g");
	this.shape_9.setTransform(154.8,-135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(150.5,-150,103.4,28.5), null);


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
	this.instance = new lib.man2();
	this.instance.parent = this;
	this.instance.setTransform(-65,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc31, new cjs.Rectangle(-65,-38,136,246), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAJQgJgHACgHIAFgGQAJgBAFAGQABACgBAFQgCAJgCABIgCABQgCAAgEgDg");
	this.shape.setTransform(296.2,99.2,1.309,1.309);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAoQgDgMAAgKIABgEIgCgXQACgFAAgDIgDgLIgBgDIgOAqQgBACABAFIgBAHQgBAFgEADIgFAAQgDgBAAgDQgDgGgGgdQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgDgRIgBgBIgHARIgHAVIABAAIgCACIACAGIgDAEQgCAFgBAKIgLAFQgCgCgCgJQgCgLgCgzIACAAIgDgSIAJgEQAGANAAAOIAAAWIADAAIAEgOIgBgCQAFgHAIgQIAFgLQAHAAAEAKQACAIADAeQAEgFAEgMIAJgdQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAFABQADgBAEAGQACAFADAQIAEAqIgBADIADADIgCAEIADANIgCAAIADAMIgHAFIgFAAQgDgEgCgLg");
	this.shape_1.setTransform(326.7,96.3,1.309,1.309);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAyQgEgEgBgEQAAgaAHgTQAJgYAQgTIAGgGIAIgEQAKAEACAGQgUANgLATQgMAUgCAbQAAABAFAJQAKAAAMgHQAIgEAXgQIgBALIgLAJQgSANgJAFQgLADgEAAQgHgBgFgGg");
	this.shape_2.setTransform(304.2,94.8,1.309,1.309);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA0QgMgDgGgHQgBgDgBgGIAAgJIAEgRQALgcAbgeIAHABQAFAFgDAIQADACABAJIgBAbQgCAdgRAPIgIAFQgCACgEAAIgBAAgAALgcIgKARQgNAZAAARIAFAGQABAAAFgDQALgJAFgNIACgZIACgDQgDgCgCgLIgDABg");
	this.shape_3.setTransform(314.4,93.4,1.309,1.309);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BuIg3gBIhJAAQgHAAgBgDIABgaIADhHIgDhzQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFAAIBNABIA7gBQAFAAACADQACACAAAFIAEAlIAAAFIgDACIgDAAQgqgFgiABQgIAAgBAEIAAAPQAAALAGACIAJABIAJgBIA8gDIACACIAAACQgEAgAAAQQAAAFgHgBQgOgCgVgBIghAAQgIAAABAFQAAATABADQABAEAHACQAGACAZAAIAagBIAagBQAEgBAAAGIgDAZIgEAWQgBADgEABg");
	this.shape_4.setTransform(189.7,86.3,1.309,1.309);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHB+IgkgkQgDgCABgDIAGgFQALgKACgEQAHgLACgOQACgQAAgqQgBhDgFgpQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAZAAQAMABAYgBQAEAAAAAFIgBCKQgBAmgIAUQgKAggXAUIgFAEIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBg");
	this.shape_5.setTransform(169,88.7,1.309,1.309);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBvIgOgBQgFAAAAgEQAEhngBgUIgChTIABgIQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAiABIAYgBQAFAAgBAEIgCA2IgCA1IACBmIgBAGQgKACgTAAIgQAAg");
	this.shape_6.setTransform(156.3,86.2,1.309,1.309);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBuQgEgCgCgCIgFgKIghg8QgDgHgEgFQgHACgHAEIgDACIACBJQAAAFgFAAQgKABgUAAQgRAAgJgBQgFAAAAgFIADhaQABgWgCgmIgCg+QAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAjABIAYgBQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAVgDAqQAAAMABAEQADAFADAAQASAAAKgKQAFgFAGgMIAVg3QACgFAGAAIAdABIAWgBQACABAAAFIgDAMQgJAcgIASQgLAXgOAMQgIAFgDAEIAeAxQARAcAHAPQAEAJgBAFQgBAFgGABQgFABgSAAQgUAAgKgBg");
	this.shape_7.setTransform(136.6,86.2,1.309,1.309);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/BvIgNAAQgCAAgDgEIhThtIgDgEIgCADIACBsIgBAFQAAABgFAAIgzAAQgFAAgBgCIAAgIIADhJQABgZgCgoIgChCQAAgDAFAAQAWgBALgCIAQgCIAIAJIBOBpQAEAGAEABQABgEAAgOQgDg+AAgfQAAgEABgBIAHgBIA0gBQAEAAgBAFQAAAggDBAIAABzQABADgFAAIgVABIgOgBg");
	this.shape_8.setTransform(217.1,86,1.309,1.309);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBvQgFAAgCgFIgGgWQgBgFgDABIgmgBIgcABIgDACIgEAMIgEAMQgCAFgEABIgkABQgRgBgEgCQgCAAACgHQAJgdAbhJIAnhnQACgIACgCIAUABQAKABAVgBQADgBADAGIBODGIAEAPQABAEgGABIgcABQgTAAgJgCgAgOACIgGAWIAGACIAUAAIAIAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgNQgHgagHgSIgOAkg");
	this.shape_9.setTransform(277.8,86,1.309,1.309);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBnQgogVgNgsQgHgVADgaQABgbAMgWQASggAegOQAXgLAdABQAsACAbAeQAHAJAAACQAAADgFAIQgJANgIAIQgGAHgEABIgJgIQgRgRgWABQgTgBgMAMQgTAQAAAcQgBAZAOAQQALANATADQAUACAYgKQgFghAAgQQAAgGADgBQAHAAAQACQAMABAZgCQADgBAAAGIgBAnQgBAWADApIAAAIQgCACgGgBQgOgDgRgFQgcALgcACIgGAAQgdAAgXgMg");
	this.shape_10.setTransform(248.1,86.1,1.309,1.309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(124,71.1,209.4,34.5), null);


(lib.hulfhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dog();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hulfhead, new cjs.Rectangle(0,0,153,201), null);


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
	this.shape_16.graphics.f("#0695D0").s().p("ArzCRIAAkgIXoAAIAAEgg");
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
(lib.Bathroom_300x250 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(219.7,272.8,1.09,1.09);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA2IAAhcIggAAIAAgQIBRAAIAAAQIggAAIAABcg");
	this.shape.setTransform(274.7,225.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAqQgNgPAAgbQAAgQAGgMQAGgNAMgHQAMgHAPAAQAQAAAOAHIgGAPQgFgDgHgBQgGgCgHAAQgOAAgJAKQgIALAAASQAAAUAIALQAIAKAPAAQAHAAAHgBIANgEIAAAPQgMAFgRAAQgXAAgMgOg");
	this.shape_1.setTransform(265.7,225.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA2IAAhsIA9AAIAAAQIgrAAIAAAdIAoAAIAAAOIgoAAIAAAjIArAAIAAAOg");
	this.shape_2.setTransform(256.7,225.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBEIAAgPIAKABQAOAAAAgSIAAhpIASAAIAABoQAAARgIAJQgIAJgPAAQgGAAgFgCg");
	this.shape_3.setTransform(248.7,227.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAqQgNgPAAgbQAAgaANgOQANgPAZAAQAXAAAOAPQANAOAAAaQAAAbgNAOQgNAPgZAAQgYAAgNgOgAgXgdQgIAKAAATQAAAUAIALQAIAKAPAAQAQAAAIgKQAIgLAAgUQAAgTgIgKQgIgLgPAAQgQAAgIALg");
	this.shape_4.setTransform(241.7,225.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA2IgZgrIgSAAIAAArIgSAAIAAhsIAfAAQAUAAAKAIQAKAIAAARQAAATgVAJIAfAvgAgWgDIAMAAQAMAAAFgFQAGgEAAgJQAAgJgGgFQgGgDgLAAIgMAAg");
	this.shape_5.setTransform(231.4,225.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA2IAAhsIAgAAQASAAALAJQAKAIAAARQAAAQgLAJQgLAIgUABIgMAAIAAAogAgSAAIAKAAQANAAAGgFQAHgFgBgKQAAgJgFgFQgGgFgLABIgNAAg");
	this.shape_6.setTransform(221.6,225.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA2IgZgrIgSAAIAAArIgSAAIAAhsIAfAAQAUAAAKAIQAKAIAAARQAAATgVAJIAfAvgAgWgDIAMAAQAMAAAFgFQAGgEAAgJQAAgJgGgFQgGgDgLAAIgMAAg");
	this.shape_7.setTransform(208.3,225.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAtQgLgLAAgTIAAhFIASAAIAABEQAAANAGAHQAGAGAMAAQAZAAAAgaIAAhEIASAAIAABFQAAAMgFAJQgFAJgKAFQgKAFgNAAQgUAAgLgKg");
	this.shape_8.setTransform(197.1,225.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAqQgOgPAAgbQAAgaAOgOQAMgPAYAAQAZAAANAPQANAOAAAaQAAAbgNAOQgOAPgYAAQgXAAgNgOgAgXgdQgIAKAAATQAAAUAIALQAIAKAPAAQAQAAAIgKQAIgLAAgUQAAgTgIgKQgIgLgQAAQgOAAgJALg");
	this.shape_9.setTransform(185.5,225.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA2IAAgpIgkhDIATAAIAZAzIAagzIATAAIgkBCIAAAqg");
	this.shape_10.setTransform(174.9,225.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA2IAAhcIggAAIAAgQIBRAAIAAAQIggAAIAABcg");
	this.shape_11.setTransform(162.1,225.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAzIAAgRQAIADAIACQAIACAIAAQAJAAAFgEQAFgEAAgHQAAgGgEgEQgFgEgNgGQgPgGgGgHQgHgIAAgLQAAgNAKgIQAKgIAPAAQAQAAAPAHIgFAOQgPgFgLAAQgIgBgEAEQgFAEAAAGQAAAEACADQACADAEADIAOAHQAMAFAFADQAGAFACAFQADAFAAAIQAAAPgLAHQgKAJgSAAQgSAAgMgFg");
	this.shape_12.setTransform(153.6,225.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAqQgOgPAAgbQAAgaAOgOQANgPAYAAQAYAAANAPQANAOAAAaQAAAbgNAOQgNAPgZAAQgXAAgNgOgAgXgdQgIAKAAATQAAAUAIALQAIAKAPAAQAQAAAIgKQAIgLAAgUQAAgTgIgKQgIgLgPAAQgQAAgIALg");
	this.shape_13.setTransform(143.4,225.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjA2IAAhsIAgAAQASAAALAJQAKAIAAARQAAAQgLAJQgLAIgUABIgMAAIAAAogAgSAAIAKAAQANAAAHgFQAFgFAAgKQABgJgGgFQgGgFgLABIgNAAg");
	this.shape_14.setTransform(133.1,225.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("As/idIAOAAIZwAAIAAE7I5wAAIgOAAg");
	this.shape_15.setTransform(203.8,225.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0695D0").s().p("As4CdIAAk6IZxAAIAAE6g");
	this.shape_16.setTransform(204.5,225.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},209).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},56).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance}]},229).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},56).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance}]},229).to({state:[{t:this.instance}]},11).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({x:220.7,y:226.8},11,cjs.Ease.get(1)).wait(56).to({y:267.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:219.7,y:272.8},0).to({x:220.7,y:226.8},11,cjs.Ease.get(1)).wait(56).to({y:267.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:219.7,y:272.8},0).to({x:220.7,y:226.8},11,cjs.Ease.get(1)).to({_off:true},9).wait(13));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:16.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,regX:84.2,x:28.9},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:16.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,regX:84.2,x:28.9},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:16.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(152));

	// t1-1
	this.instance_6 = new lib.t11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(39.7,194.8,1.131,1.131,0,0,0,94.8,16.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:94.8,x:60.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,x:39.7},0).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:94.8,x:60.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,x:39.7},0).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:94.8,x:60.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({_off:false},0).to({x:130.5,y:145,alpha:1},10,cjs.Ease.get(1)).wait(167).to({x:110.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(119).to({_off:false,x:100.5,y:147},0).to({x:130.5,y:145,alpha:1},10,cjs.Ease.get(1)).wait(167).to({x:110.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(119).to({_off:false,x:100.5,y:147},0).to({x:130.5,y:145,alpha:1},10,cjs.Ease.get(1)).wait(133));

	// quote
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(53,134,184,0)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_17.setTransform(150,225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(53,134,184,0.078)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_18.setTransform(150,225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(53,134,184,0.161)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_19.setTransform(150,225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(53,134,184,0.239)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_20.setTransform(150,225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(53,134,184,0.322)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_21.setTransform(150,225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(53,134,184,0.4)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_22.setTransform(150,225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(53,134,184,0.478)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_23.setTransform(150,225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(53,134,184,0.561)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_24.setTransform(150,225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(53,134,184,0.639)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_25.setTransform(150,225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(53,134,184,0.722)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_26.setTransform(150,225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(53,134,184,0.8)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_27.setTransform(150,225);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(53,134,184,0.792)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_28.setTransform(150,225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(53,134,184,0.769)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_29.setTransform(150,225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(53,134,184,0.729)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_30.setTransform(150,225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(53,134,184,0.671)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_31.setTransform(150,225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(53,134,184,0.6)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_32.setTransform(150,225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(53,134,184,0.514)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_33.setTransform(150,225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(53,134,184,0.408)").s().p("A3bD6IAAnxMAuagACIAAACIAdAAIAAHxg");
	this.shape_34.setTransform(150,225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(53,134,184,0.286)").s().p("A3bD6IAAnxMAuZgACIABACIAdAAIAAHxg");
	this.shape_35.setTransform(150,225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(53,134,184,0.153)").s().p("A3bD6IAAnxMAuZgACIABACIAdAAIAAHxg");
	this.shape_36.setTransform(150,225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(53,134,184,0)").s().p("A3bD6IAAnxMAuZgACIABACIAdAAIAAHxg");
	this.shape_37.setTransform(150,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},99).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},167).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},119).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},167).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},119).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(109).to({_off:false},0).wait(167).to({_off:true},1).wait(139).to({_off:false},0).wait(167).to({_off:true},1).wait(139).to({_off:false},0).wait(133));

	// plate-orange
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,52,102,0)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_38.setTransform(150,47.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,52,102,0.09)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_39.setTransform(150,47.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,52,102,0.18)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_40.setTransform(150,47.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,52,102,0.271)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_41.setTransform(150,47.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,52,102,0.361)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_42.setTransform(150,47.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,52,102,0.451)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_43.setTransform(150,47.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,52,102,0.537)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_44.setTransform(150,47.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,52,102,0.627)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_45.setTransform(150,47.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,52,102,0.718)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_46.setTransform(150,47.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,52,102,0.808)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_47.setTransform(150,47.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,52,102,0.898)").s().p("A3bHbIAAu1MAu3AAAIAAO1g");
	this.shape_48.setTransform(150,47.5);
	this.shape_48._off = true;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,52,102,0.918)").s().p("A3bHJIAAuRMAu3AAAIAAORg");
	this.shape_49.setTransform(150,45.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,52,102,0.933)").s().p("A3bG5IAAtxMAu3AAAIAANxg");
	this.shape_50.setTransform(150,44.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,52,102,0.949)").s().p("A3bGrIAAtVMAu3AAAIAANVg");
	this.shape_51.setTransform(150,42.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,52,102,0.965)").s().p("A3bGeIAAs7MAu3AAAIAAM7g");
	this.shape_52.setTransform(150,41.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,52,102,0.976)").s().p("A3bGUIAAsnMAu3AAAIAAMng");
	this.shape_53.setTransform(150,40.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,52,102,0.984)").s().p("A3bGLIAAsVMAu3AAAIAAMVg");
	this.shape_54.setTransform(150,39.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,52,102,0.992)").s().p("A3bGEIAAsIMAu3AAAIAAMIg");
	this.shape_55.setTransform(150,38.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,52,102,0.996)").s().p("A3bGAIAAr/MAu3AAAIAAL/g");
	this.shape_56.setTransform(150,38.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#003466").s().p("A3bF9IAAr5MAu3AAAIAAL5g");
	this.shape_57.setTransform(150,38.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#003466").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_58.setTransform(150,38);
	this.shape_58._off = true;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,52,102,0.988)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_59.setTransform(150,38);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,52,102,0.957)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_60.setTransform(150,38);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,52,102,0.91)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_61.setTransform(150,38);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,52,102,0.839)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_62.setTransform(150,38);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,52,102,0.749)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_63.setTransform(150,38);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,52,102,0.639)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_64.setTransform(150,38);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,52,102,0.51)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_65.setTransform(150,38);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,52,102,0.357)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_66.setTransform(150,38);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,52,102,0.188)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_67.setTransform(150,38);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,52,102,0)").s().p("A3bF8IAAr3MAu3AAAIAAL3g");
	this.shape_68.setTransform(150,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},79).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},187).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},10).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},79).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},187).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},10).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},79).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(10).to({_off:false},0).wait(79).to({_off:true},1).wait(227).to({_off:false},0).wait(79).to({_off:true},1).wait(227).to({_off:false},0).wait(79).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(99).to({_off:false},0).wait(187).to({_off:true},1).wait(119).to({_off:false},0).wait(187).to({_off:true},1).wait(119).to({_off:false},0).wait(143));

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
	this.instance_12 = new lib.bg1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(856));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,252);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bathroom_300x250_atlas_P_.png", id:"Bathroom_300x250_atlas_P_"},
		{src:"images/Bathroom_300x250_atlas_NP_.jpg", id:"Bathroom_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;