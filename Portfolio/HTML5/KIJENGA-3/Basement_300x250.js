(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Basement_300x250_atlas_P_", frames: [[157,0,178,192],[0,0,155,250],[157,194,191,81]]},
		{name:"Basement_300x250_atlas_NP_", frames: [[0,0,300,250],[0,252,300,250]]}
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
	this.spriteSheet = ss["Basement_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["Basement_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Men1 = function() {
	this.spriteSheet = ss["Basement_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.men2 = function() {
	this.spriteSheet = ss["Basement_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quotepngкопия = function() {
	this.spriteSheet = ss["Basement_300x250_atlas_P_"];
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
	this.shape.setTransform(147.6,83.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBJIhViBIgBAAIABAjIAABeIgKAAIAAiRIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACRg");
	this.shape_1.setTransform(137.8,83.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_2.setTransform(122.7,83.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_3.setTransform(107.1,83.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBJIAAiHIgvAAIAAgKIBnAAIAAAKIgvAAIAACHg");
	this.shape_4.setTransform(94.1,83.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxBJIgUg0Ig5AAIgVA0IgLAAIA7iRIAFAAIA5CRgAgFgmIgUAyIAzAAIgTgyIgGgSIgGASg");
	this.shape_5.setTransform(82.7,83.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBJIg3hMIgUAQIAAA8IgKAAIAAiRIAKAAIAABLIARgPIA3g8IANAAIg6A9IA8BUg");
	this.shape_6.setTransform(71.7,83.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_7.setTransform(59.2,83.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxBJIgUg0Ig5AAIgVA0IgLAAIA7iRIAFAAIA5CRgAgFgmIgUAyIAzAAIgTgyIgGgSIgGASg");
	this.shape_8.setTransform(47.6,83.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_9.setTransform(35.9,83.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBJIhViBIgBAAIABAjIAABeIgKAAIAAiRIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACRg");
	this.shape_10.setTransform(17.7,83.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_11.setTransform(7.8,83.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBRQgLgDgLgFIAAgnQAMAGAOAEQANAEALAAQAJAAAEgEQAFgDAAgGQAAgDgCgCIgGgFIgVgLQgPgHgIgHQgIgFgEgJQgDgJAAgMQAAgWAQgMQAQgNAcAAQAZAAAZAMIgNAhQgWgKgRAAQgIAAgEADQgDADAAAEQAAAFAFAEQAFAEAUAKQAVAJAIAKQAIAKAAARQABAPgIALQgIAMgOAHQgPAGgSAAQgQAAgLgCg");
	this.shape_12.setTransform(143.6,58.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_13.setTransform(131,58.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgnAAIAAgkIB5AAIAAAkIgnAAIAAB9g");
	this.shape_14.setTransform(117.9,58.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5A+QgUgWgBgoQAAgoAVgUQAUgWAlAAQAmAAAVAVQATAWABAnQgBApgTAVQgVAVgmAAQglAAgUgVgAggAAQAAAvAgAAQAQAAAJgMQAHgLABgYQgBgXgHgLQgJgMgQAAQggAAAAAug");
	this.shape_15.setTransform(102.2,58.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBBQgSgRAAgfIAAhiIAsAAIAABeQAAARAGAIQAGAIAMAAQAOAAAFgIQAHgIAAgRIAAheIArAAIAABhQAAAfgSASQgRARgiAAQggAAgSgRg");
	this.shape_16.setTransform(84.7,58.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBlIgbgkIAAAAQgmAAgUgVQgVgWAAgnQAAgpAUgVQAVgVAmAAQAlAAAUAVQAUAVAAApQAAA2gjATIAoAtgAgigRQAAAuAhAAQAPAAAIgMQAIgLAAgXQAAgYgIgMQgIgLgPAAQghAAAAAvg");
	this.shape_17.setTransform(67.3,60.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_18.setTransform(144.1,33.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_19.setTransform(131.7,33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUBRIghg7IgMAAIAAA7IgrAAIAAihIA1AAQBBAAAAAwQAAAcgcAOIAvBHgAgZgKIAIAAQAXAAAAgUQgBgRgVAAIgJAAg");
	this.shape_20.setTransform(118.5,33.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIg0AAIAAAfIAvAAIAAAiIgvAAIAAA9g");
	this.shape_21.setTransform(104.1,33.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEBIIAAiGIgvAAIAAgKIBnAAIAAAKIgvAAIAACGg");
	this.shape_22.setTransform(87,34.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBIIAAiQIBPAAIAAAJIhFAAIAAA3IBBAAIAAAJIhBAAIAAA+IBFAAIAAAJg");
	this.shape_23.setTransform(76.5,34.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA3QgSgTAAgkQAAgVAJgRQAJgRARgJQARgKAVAAQAYAAASAJIgDAJQgUgJgUAAQgbAAgSASQgQASAAAdQAAAhAQAQQAQARAeAAQAUAAAOgGIAAgzIgrAAIAAgJIA1AAIAABCQgVAJgaAAQgiAAgSgUg");
	this.shape_24.setTransform(63,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(2.8,15.1,149.5,83.6), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQANADAKAAQAHAAAEgDQAEgDAAgEQAAgEgCgCQgBgCgDgCIgSgJQgOgGgIgHQgGgFgEgHQgDgIAAgKQAAgVAOgLQAPgLAYAAQAVAAAYALIgMAdQgUgIgOgBQgHAAgEADQgDADAAADQAAAFAEADQAFADASAKQASAHAIAJQAHAKAAAOQAAAOgHAKQgGAKgNAGQgNAGgQgBQgOAAgKgCg");
	this.shape.setTransform(176.1,-129.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA2QgSgSAAgkQAAgjASgTQARgSAigBQAhAAASATQARATAAAjQAAAkgRASQgSAUgigBQghABgRgUgAgbAAQAAAqAbAAQAOgBAIgJQAHgLAAgVQAAgVgHgJQgIgLgNAAQgcAAAAApg");
	this.shape_1.setTransform(162.2,-129.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUAAAAgSQAAgOgTAAIgIAAg");
	this.shape_2.setTransform(148.4,-129.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBHIAAiOIAyAAQAaABANAMQAOALAAAWQAAAYgOAMQgOANgZAAIgLAAIAAAvgAgMgHIAHAAQAHABAGgFQAFgFAAgJQAAgOgPAAIgKAAg");
	this.shape_3.setTransform(134.8,-129.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BHIAAiOIAyAAQAhABATARQATASAAAhQAAAjgUATQgTAUgkgBgAgVAoIAJAAQAQAAAIgLQAIgJAAgVQABgTgIgJQgIgKgPAAIgLAAg");
	this.shape_4.setTransform(174.7,-149.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_5.setTransform(161.8,-149.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgiAAIAABtg");
	this.shape_6.setTransform(150.2,-149.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQANADAJAAQAIAAAEgDQAEgDAAgEQAAgEgCgCQgBgCgDgCIgTgJQgNgGgIgHQgGgFgEgHQgDgIAAgKQAAgVAOgLQAPgLAYAAQAVAAAYALIgMAdQgUgIgPgBQgGAAgEADQgDADAAADQAAAFAEADQAFADASAKQASAHAIAJQAHAKAAAOQAAAOgHAKQgGAKgNAGQgNAGgQgBQgOAAgKgCg");
	this.shape_7.setTransform(138.7,-149.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA6QgQgPAAgcIAAhXIAnAAIAABUQAAAOAFAHQAGAIAKAAQAMAAAFgIQAFgGAAgPIAAhUIAnAAIAABWQAAAcgQAPQgQAPgdAAQgdAAgPgOg");
	this.shape_8.setTransform(125.2,-149.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUAAAAgSQAAgOgTAAIgIAAg");
	this.shape_9.setTransform(111.7,-149.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgiAAIAABtg");
	this.shape_10.setTransform(98.2,-149.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BEQgMgFgGgKQgGgJAAgMQAAgaAagNQgFgGgEgIQgDgIAAgJQAAgQAMgJQAMgJAVAAQAUAAALAJQAMAJAAAQQgBAKgGAKQgGAJgNAIIATARQAIgLACgNIAoAAQgDANgGANQgHAOgHAJIAfAeIgxAAIgKgKIgPAIIgLADIgQABQgQAAgMgFgAgkAdQgBAGAFAEQAEAEAHAAQAGAAAEgCIAGgDIgXgZQgIAGAAAKgAgZgtQgDADAAAFQAAAHAJAIQAGgDADgEQACgFAAgEQAAgFgCgCQgEgCgDAAQgFAAgDACg");
	this.shape_11.setTransform(79.5,-149.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-50.2,-165.9,234,51.5), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAdAAARAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAVAAQA5AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape.setTransform(191,-118.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_1.setTransform(179.6,-118.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBAIAAh/IAIAAIAAB/g");
	this.shape_2.setTransform(172,-118.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_3.setTransform(166.1,-118.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_4.setTransform(158.5,-118.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_5.setTransform(151.5,-118.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBAIgfg4IghAAIAAA4IgJAAIAAh/IAgAAQAWAAAMAJQALAIAAASQAAANgHAJQgGAIgOAEIAjA6gAghABIAZAAQAQAAAJgHQAIgHABgOQgBgPgIgGQgJgHgTAAIgWAAg");
	this.shape_6.setTransform(142.2,-118.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_7.setTransform(131.5,-118.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAxQgPgSAAgfQAAgTAHgPQAHgPAOgIQAOgIASAAQATAAAOAHIgDAIQgOgHgQAAQgXAAgOAPQgOAQAAAaQAAAbANAQQAOAPAXAAQAQAAAOgEIAAAIQgNAEgTAAQgaAAgQgRg");
	this.shape_8.setTransform(120.8,-118.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAeAAAQAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAWAAQA4AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape_9.setTransform(104.3,-118.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBAIhLhxIgBAAIABAfIAABSIgJAAIAAh/IAJAAIBLBxIABAAIgBgeIAAhTIAJAAIAAB/g");
	this.shape_10.setTransform(91,-118.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_11.setTransform(82.3,-118.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_12.setTransform(76.3,-118.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(64.1,-132.9,134.9,28.5), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBIIAAhvIgjAAIAAgfIBrAAIAAAfIgjAAIAABvg");
	this.shape.setTransform(246.8,-98);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBIIg0hkIAAAAIABAjIAABBIgiAAIAAiOIAzAAIAzBiIAAAAIgBghIAAhBIAiAAIAACOg");
	this.shape_1.setTransform(232.5,-98);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_2.setTransform(218.9,-98);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBIIAAg/IAAgKIABgdIgBAAIgcBmIgkAAIgdhnIgBAAIACApIAAA+IgiAAIAAiOIAzAAIAdBkIABAAIAdhkIAzAAIAACOg");
	this.shape_3.setTransform(203.5,-98);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_4.setTransform(188.6,-98);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBIQgKgDgKgEIAAgjQALAGAMADQALADAKAAQAIAAAEgDQAEgDAAgFQAAgCgBgCQgCgDgEgCIgSgKQgOgFgGgGQgIgGgDgIQgDgHAAgLQAAgUAOgKQAPgMAXAAQAWAAAYALIgMAeQgUgKgPABQgGgBgEADQgDADAAAEQAAAEAEADQAEADATAJQATAJAHAIQAHAJAAAPQAAANgHALQgGAKgOAGQgMAFgQABQgOAAgKgCg");
	this.shape_5.setTransform(177.2,-98);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBIIgHgbIgtAAIgHAbIgqAAIAuiPIAzAAIAvCPgAgDgfIgLAsIAdAAIgFgWIgGgUIgEgSIgDAQg");
	this.shape_6.setTransform(164,-98);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BIIAAiOIAyAAQAcAAAOAJQAOAIAAATQAAAMgGAIQgGAJgKABIAAABQANADAGAJQAGAHAAAOQAAATgPALQgPAMgYAAgAgPApIANAAQARABAAgPQAAgHgEgFQgGgDgIAAIgMAAgAgPgPIALAAQAIgBAEgDQAEgEABgGQgBgMgQAAIgLAAg");
	this.shape_7.setTransform(150.3,-98);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBHIgdgzIgKAAIAAAzIgmAAIAAiNIAuAAQA6AAAAAqQAAAZgZANIAqA9gAgWgJIAHAAQAUABAAgTQAAgOgTAAIgIAAg");
	this.shape_8.setTransform(246.7,-119.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA5QgQgPAAgcIAAhVIAnAAIAABTQAAAPAFAGQAGAIAKgBQAMABAFgIQAFgGAAgPIAAhTIAnAAIAABUQAAAcgQAQQgQAQgdAAQgdAAgPgQg");
	this.shape_9.setTransform(231.5,-119.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyA3QgTgTABgkQgBgjATgTQASgTAgAAQAiABASASQARATAAAjQAAAkgRATQgSATgiAAQghAAgRgTgAgcAAQABApAbAAQAPABAHgLQAHgKAAgVQAAgVgHgKQgHgKgPAAQgcAAAAApg");
	this.shape_10.setTransform(215.9,-119.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBHIAAg2IguhXIApAAIAYA0IAZg0IAqAAIgwBVIAAA4g");
	this.shape_11.setTransform(201.3,-119.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBHIAAiNIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_12.setTransform(184.2,-119.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBHIAAhuIgjAAIAAgfIBrAAIAAAfIgjAAIAABug");
	this.shape_13.setTransform(172.6,-119.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAfBIIgHgbIguAAIgHAbIgrAAIAviPIAzAAIAuCPgAgCgfIgMAsIAeAAIgHgWIgFgUIgEgSIgCAQg");
	this.shape_14.setTransform(159.5,-119.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBHIguiNIArAAIAUBHQAFAYAAAJIADgRIADgPIAUhIIArAAIguCNg");
	this.shape_15.setTransform(145.3,-119.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyA3QgTgTABgkQgBgjATgTQASgTAgAAQAiABASASQARATAAAjQAAAkgRATQgSATgiAAQghAAgRgTgAgcAAQABApAbAAQAPABAHgLQAHgKAAgVQAAgVgHgKQgHgKgPAAQgcAAAAApg");
	this.shape_16.setTransform(130.3,-119.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARBHIgzhjIgBAAIACAjIAABAIgiAAIAAiNIAyAAIAzBiIABAAIgBghIAAhBIAiAAIAACNg");
	this.shape_17.setTransform(114,-119.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBHIAAiNIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_18.setTransform(100.4,-119.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARBHIgdgzIgKAAIAAAzIgmAAIAAiNIAuAAQA6AAAAAqQAAAZgZANIAqA9gAgWgJIAHAAQAUABAAgTQAAgOgTAAIgIAAg");
	this.shape_19.setTransform(88.8,-119.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(78.9,-135.5,175.7,52.5), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAwQgPgSAAgeQAAgeAPgSQAPgRAaAAQAbAAAPARQAPASAAAeQAAAegPASQgPASgbAAQgaAAgPgSgAgigqQgNAPAAAbQAAAbANAQQAMAPAWAAQAXAAAMgPQANgPAAgcQAAgbgNgPQgMgPgXAAQgWAAgMAPg");
	this.shape.setTransform(245.9,-119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_1.setTransform(234.4,-119.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_2.setTransform(220.3,-119.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyBAIAAhgIABgVIAAAAIgwB1IgFAAIgwh1IAAAAIAAAWIAABfIgJAAIAAh/IAPAAIAsBwIABAAIAthwIANAAIAAB/g");
	this.shape_3.setTransform(207.2,-119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_4.setTransform(197.2,-119.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_5.setTransform(190.2,-119.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA9IAAgJQAOAGAWAAQAPAAAJgHQAJgIAAgMQAAgHgDgFQgDgEgHgEQgHgEgNgFQgTgGgIgHQgHgIAAgNQAAgPALgJQAMgJAQAAQATAAAPAHIgDAHQgQgGgOAAQgOAAgJAGQgIAHAAALQAAAHADAFQACAFAHADQAFAEAOAFQAOAEAIAFQAHAFAEAGQADAGABAJQAAAQgMAKQgMAJgTAAQgXAAgNgFg");
	this.shape_6.setTransform(176,-119.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAXIgDgtIALAAIgDAtg");
	this.shape_7.setTransform(169.3,-123.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_8.setTransform(162.9,-119.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_9.setTransform(155.9,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(151.6,-134.1,103.4,28.5), null);


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
	this.instance.setTransform(-65,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc31, new cjs.Rectangle(-65,-44,155,250), null);


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
	this.instance = new lib.Men1();
	this.instance.parent = this;
	this.instance.setTransform(-6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hulfhead, new cjs.Rectangle(-6,7,178,192), null);


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
(lib.Basement_300x250 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({x:217.6,y:225.8},11,cjs.Ease.get(1)).wait(56).to({y:269.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:216.6,y:272.8},0).to({x:217.6,y:225.8},11,cjs.Ease.get(1)).wait(56).to({y:267.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,y:272.8},0).to({y:225.8},11,cjs.Ease.get(1)).to({_off:true},9).wait(13));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:58.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,x:39.1,y:165.5},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:58.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,x:39.1},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:58.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(44));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:186.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,regX:84.2,x:28.9},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:186.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,regX:84.2,x:28.9},0).to({regX:84.3,x:95.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:186.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(152));

	// t1-1
	this.instance_6 = new lib.t11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(39.7,194.8,1.131,1.131,0,0,0,94.8,16.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:94.8,x:140.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,x:39.7},0).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:94.8,x:140.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(227).to({_off:false,x:39.7},0).to({regX:94.9,x:107.6,alpha:1},10,cjs.Ease.get(1)).wait(59).to({regX:94.8,x:140.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

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
	this.shape_28.setTransform(150,64.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,52,102,0.09)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_29.setTransform(150,64.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,52,102,0.18)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_30.setTransform(150,64.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,52,102,0.271)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_31.setTransform(150,64.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,52,102,0.361)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_32.setTransform(150,64.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,52,102,0.451)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_33.setTransform(150,64.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,52,102,0.537)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_34.setTransform(150,64.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,52,102,0.627)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_35.setTransform(150,64.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,52,102,0.718)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_36.setTransform(150,64.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,52,102,0.808)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_37.setTransform(150,64.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,52,102,0.898)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_38.setTransform(150,64.9);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,52,102,0.89)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_39.setTransform(150,64.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,52,102,0.859)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_40.setTransform(150,64.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,52,102,0.816)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_41.setTransform(150,64.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,52,102,0.753)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_42.setTransform(150,64.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,52,102,0.671)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_43.setTransform(150,64.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,52,102,0.573)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_44.setTransform(150,64.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,52,102,0.455)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_45.setTransform(150,64.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,52,102,0.322)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_46.setTransform(150,64.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,52,102,0.169)").s().p("A3bHTIAAulMAu3AAAIAAOlg");
	this.shape_47.setTransform(150,64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},69).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},187).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_28}]},10).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},69).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},187).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_28}]},10).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},69).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).to({_off:true},1).wait(295).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(295).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(241));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(10).to({_off:false},0).wait(276).to({_off:true},1).wait(30).to({_off:false},0).wait(276).to({_off:true},1).wait(30).to({_off:false},0).wait(232));

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
p.nominalBounds = new cjs.Rectangle(145,125,305,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Basement_300x250_atlas_P_.png", id:"Basement_300x250_atlas_P_"},
		{src:"images/Basement_300x250_atlas_NP_.jpg", id:"Basement_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;