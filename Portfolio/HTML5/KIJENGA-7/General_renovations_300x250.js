(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"General_renovations_300x250_atlas_P_", frames: [[148,0,146,243],[296,0,182,141],[0,0,146,250],[296,143,191,81]]},
		{name:"General_renovations_300x250_atlas_NP_", frames: [[0,0,300,227],[302,0,300,210]]}
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



(lib.constractors = function() {
	this.spriteSheet = ss["General_renovations_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.menphone = function() {
	this.spriteSheet = ss["General_renovations_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pc1 = function() {
	this.spriteSheet = ss["General_renovations_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pc1pngкопия = function() {
	this.spriteSheet = ss["General_renovations_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc2 = function() {
	this.spriteSheet = ss["General_renovations_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quote = function() {
	this.spriteSheet = ss["General_renovations_300x250_atlas_P_"];
	this.gotoAndStop(3);
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
	this.shape.graphics.f("#FFFFFF").s().p("AgHBAQAAgKAHAAQAIAAAAAKQAAAJgIAAQgHAAAAgJgAgCAiIgDhqIALAAIgDBqg");
	this.shape.setTransform(119.5,66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBJIhViBIgBAAIABAjIAABeIgKAAIAAiQIAKAAIBVB/IABAAIgBgiIAAhdIAKAAIAACQg");
	this.shape_1.setTransform(109.7,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_2.setTransform(94.6,65.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA3QgRgUAAgjQAAgiASgUQARgUAdAAQAfAAARAUQARAUAAAiQAAAjgRAUQgSAUgeAAQgdAAgSgUgAgngvQgOARAAAeQAAAfAOARQAOARAZAAQAaAAAOgRQAOgRAAgfQAAgegOgRQgOgRgaAAQgZAAgOARg");
	this.shape_3.setTransform(79,65.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBJIAAiHIgvAAIAAgJIBnAAIAAAJIgvAAIAACHg");
	this.shape_4.setTransform(65.9,65.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAyBJIgVgzIg5AAIgVAzIgLAAIA7iRIAFAAIA5CRgAgFgmIgUAzIAzAAIgTgzIgHgSIgFASg");
	this.shape_5.setTransform(54.5,65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBJIg3hMIgUAQIAAA8IgKAAIAAiQIAKAAIAABKIARgQIA3g6IANAAIg6A8IA8BUg");
	this.shape_6.setTransform(43.5,65.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_7.setTransform(31.1,65.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyBJIgVgzIg5AAIgVAzIgLAAIA7iRIAFAAIA5CRgAgFgmIgUAzIAzAAIgTgzIgHgSIgFASg");
	this.shape_8.setTransform(19.4,65.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBFIAAgKQAQAGAYAAQARAAALgIQAKgIAAgNQAAgJgDgFQgEgFgIgFQgIgEgOgFQgWgHgIgJQgJgJAAgPQAAgQANgKQANgLATAAQAUAAASAIIgEAJQgSgIgQAAQgPAAgKAIQgJAHAAANQAAAIADAFQADAFAGAFQAHAEAPAFQARAFAJAGQAIAFAEAHQAEAHAAAKQAAASgNALQgOALgVAAQgbAAgOgGg");
	this.shape_9.setTransform(7.8,65.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBJIhViBIgBAAIABAjIAABeIgKAAIAAiRIAKAAIBVCAIABAAIgBgiIAAheIAKAAIAACRg");
	this.shape_10.setTransform(112.5,43.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBJIAAiRIAJAAIAACRg");
	this.shape_11.setTransform(102.6,43.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBRQgLgDgLgFIAAgnQAMAGAOAEQANAEALAAQAJAAAFgEQAEgDAAgGQAAgDgCgCIgGgFIgVgLQgPgHgIgHQgIgFgEgJQgDgJAAgMQAAgWAQgMQAQgNAcAAQAZAAAZAMIgNAhQgWgKgRAAQgIAAgEADQgDADAAAEQAAAFAFAEQAFAEAUAKQAVAJAIAKQAIAKAAARQABAPgIALQgIAMgOAHQgPAGgSAAQgQAAgLgCg");
	this.shape_12.setTransform(87.8,42.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_13.setTransform(75.2,42.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBRIAAh9IgnAAIAAgkIB5AAIAAAkIgnAAIAAB9g");
	this.shape_14.setTransform(62.1,42.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5A+QgUgWgBgoQAAgoAVgUQAUgWAlAAQAmAAAVAVQATAWABAnQgBApgTAVQgVAVgmAAQglAAgUgVgAggAAQAAAvAgAAQAQAAAJgMQAHgLABgYQgBgXgHgLQgJgMgQAAQggAAAAAug");
	this.shape_15.setTransform(46.4,42.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyBBQgSgRAAgfIAAhiIAsAAIAABeQAAARAGAIQAGAIAMAAQAOAAAFgIQAHgIAAgRIAAheIArAAIAABhQAAAfgSASQgRARgiAAQggAAgSgRg");
	this.shape_16.setTransform(28.9,42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBlIgbgkIAAAAQgmAAgUgVQgVgWAAgnQAAgpAUgVQAVgVAmAAQAlAAAUAVQAUAVAAApQAAA2gjATIAoAtgAgigRQAAAuAhAAQAPAAAIgMQAIgLAAgXQAAgYgIgMQgIgLgPAAQghAAAAAvg");
	this.shape_17.setTransform(11.5,44.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_18.setTransform(90.6,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIgzAAIAAAaIAvAAIAAAiIgvAAIAAAeIAzAAIAAAkg");
	this.shape_19.setTransform(78.2,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUBRIgig7IgKAAIAAA7IgsAAIAAihIA1AAQBAAAAAAwQABAcgcAOIAvBHgAgYgKIAIAAQAVAAAAgUQAAgRgVAAIgIAAg");
	this.shape_20.setTransform(65,18.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvBRIAAihIBfAAIAAAjIg0AAIAAAfIAvAAIAAAiIgvAAIAAA9g");
	this.shape_21.setTransform(50.6,18.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEBJIAAiHIgvAAIAAgJIBnAAIAAAJIgvAAIAACHg");
	this.shape_22.setTransform(33.5,19.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBJIAAiQIBPAAIAAAJIhFAAIAAA3IBBAAIAAAIIhBAAIAAA+IBFAAIAAAKg");
	this.shape_23.setTransform(23,19.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA3QgSgTAAgkQAAgVAJgRQAJgRARgJQARgKAVAAQAXAAAUAJIgFAJQgTgJgUAAQgcAAgRASQgQASAAAdQAAAhAQAQQAQARAeAAQAUAAAOgGIAAgzIgsAAIAAgJIA2AAIAABCQgVAJgaAAQghAAgTgUg");
	this.shape_24.setTransform(9.5,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,124.4,81.4), null);


(lib.txt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQANADAKAAQAHAAAEgDQAEgDAAgEQAAgEgCgCQgBgCgDgCIgSgKQgOgFgIgHQgGgEgEgIQgDgIAAgKQAAgVAOgLQAPgLAYABQAVAAAYAKIgMAdQgUgIgOgBQgHAAgEADQgDADAAADQAAAFAEADQAFADASAKQASAHAIAJQAHAKAAAOQAAAOgHAKQgGAKgNAGQgNAGgQgBQgOAAgKgCg");
	this.shape.setTransform(275.1,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzA2QgRgSAAgkQAAgjARgSQASgTAiAAQAhAAASASQARATAAAjQAAAkgRASQgSAUgigBQghABgSgUgAgbAAQAAAqAbAAQAOgBAIgJQAHgLAAgVQAAgVgHgJQgIgLgNAAQgcAAAAApg");
	this.shape_1.setTransform(261.2,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgIIAHAAQAUgBAAgSQAAgOgTAAIgIAAg");
	this.shape_2.setTransform(247.4,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBHIAAiOIAyAAQAaABANALQAOAMAAAWQAAAYgOAMQgOANgZAAIgLAAIAAAvgAgMgHIAHAAQAHABAGgFQAFgFAAgJQAAgOgPAAIgKAAg");
	this.shape_3.setTransform(233.8,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BHIAAiOIAxAAQAhABATARQASASAAAhQAAAjgTATQgTAUgjgBgAgVAoIAIAAQARAAAJgLQAIgJAAgUQgBgUgHgJQgIgKgPAAIgLAAg");
	this.shape_4.setTransform(214.8,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_5.setTransform(201.9,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQANADAKAAQAHAAAEgDQAEgDAAgEQAAgEgCgCQgBgCgDgCIgSgKQgOgFgIgHQgGgEgEgIQgDgIAAgKQAAgVAOgLQAPgLAYABQAVAAAYAKIgMAdQgUgIgOgBQgHAAgEADQgDADAAADQAAAFAEADQAFADASAKQASAHAIAJQAHAKAAAOQAAAOgHAKQgGAKgNAGQgNAGgQgBQgOAAgKgCg");
	this.shape_6.setTransform(190.5,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASBHIg0hjIAAAAIABAjIAABAIgiAAIAAiOIAzAAIAzBjIAAAAIgBgiIAAhBIAiAAIAACOg");
	this.shape_7.setTransform(176.3,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_8.setTransform(162.7,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA2QgSgSAAgkQAAgVAJgQQAIgRAQgJQAPgJAVAAQAXgBAVAKIgMAfIgQgGQgIgDgJAAQgNAAgHAMQgIALAAASQAAAqAeAAQAKAAAJgDIASgGIAAAgQgSAJgXgBQgfABgRgUg");
	this.shape_9.setTransform(150.6,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBHIAAiOIAlAAIAACOg");
	this.shape_10.setTransform(140.4,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBHIAAiOIAnAAIAABwIA2AAIAAAeg");
	this.shape_11.setTransform(131.5,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzBEQgNgFgFgKQgHgJAAgMQAAgaAbgNQgGgGgEgIQgDgIAAgJQAAgQAMgJQAMgJAVAAQAUAAALAJQALAJAAAQQAAAKgFAKQgHAJgNAIIATARQAIgLADgNIAnAAQgDANgGANQgHAOgHAJIAfAeIgxAAIgKgKIgOAIIgMADIgQABQgPAAgMgFgAglAdQAAAGAFAEQAEAEAHAAQAGAAAEgCIAHgDIgZgZQgHAGgBAKgAgYgtQgEADAAAFQAAAHAJAIQAFgDADgEQADgFAAgEQAAgFgDgCQgCgCgFAAQgDAAgDACg");
	this.shape_12.setTransform(112.5,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag7BHIAAiOIAxAAQAhABATARQASASAAAhQAAAjgTATQgTAUgjgBgAgVAoIAIAAQARAAAJgLQAHgJABgUQAAgUgIgJQgIgKgPAAIgLAAg");
	this.shape_13.setTransform(91.8,16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_14.setTransform(79,16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBHIAAiOIAlAAIAACOg");
	this.shape_15.setTransform(69.7,16.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAbIApAAIAAAeIgpAAIAAA1g");
	this.shape_16.setTransform(61.2,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBHIAAiOIAlAAIAACOg");
	this.shape_17.setTransform(52,16.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgiAAIAABtg");
	this.shape_18.setTransform(42.7,16.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgIIAHAAQAUgBAAgSQAAgOgTAAIgIAAg");
	this.shape_19.setTransform(30.9,16.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_20.setTransform(18,16.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmA2QgSgSAAgkQAAgVAJgQQAIgRAQgJQAPgJAVAAQAXgBAVAKIgMAfIgQgGQgIgDgJAAQgNAAgHAMQgIALAAASQAAAqAeAAQAKAAAJgDIASgGIAAAgQgSAJgXgBQgfABgRgUg");
	this.shape_21.setTransform(5.9,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(-3,0,285.8,31.3), null);


(lib.txt21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAzQgPgSgBghQAAggARgSQAQgTAbAAQAdAAAQATQAQASAAAgQAAAhgQASQgQATgdAAQgbAAgRgTgAgkgsQgNAQAAAcQAAAdANAQQANAQAXAAQAYAAANgQQAOgQAAgdQAAgdgOgPQgNgQgYAAQgXAAgNAQg");
	this.shape.setTransform(160.6,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBEIAAh+IgsAAIAAgJIBhAAIAAAJIgsAAIAAB+g");
	this.shape_1.setTransform(148.4,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA3QgOgNAAgXIAAhXIAKAAIAABXQAAATALALQALALASAAQAUAAALgKQAKgLAAgTIAAhYIAKAAIAABXQAAAXgOANQgNAOgYAAQgXAAgNgOg");
	this.shape_2.setTransform(131.6,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAzQgRgSABghQAAggAQgSQAQgTAbAAQAcAAARATQAPASAAAgQAAAhgPASQgRATgcAAQgbAAgQgTgAgkgsQgNAQAAAcQAAAdANAQQAMAQAYAAQAZAAANgQQANgQgBgdQABgdgNgPQgNgQgZAAQgXAAgNAQg");
	this.shape_3.setTransform(117.6,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBEIAAg0IgthTIALAAIAmBJIAohJIAKAAIgtBSIAAA1g");
	this.shape_4.setTransform(105.3,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBEIAAhDIhPAAIAABDIgJAAIAAiHIAJAAIAAA8IBPAAIAAg8IAJAAIAACHg");
	this.shape_5.setTransform(88.5,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAzQgRgSAAghQAAgUAIgQQAIgQAOgIQAPgJASAAQAUAAAQAIIgDAIQgPgHgRAAQgZAAgOAQQgPAQAAAcQAAAdAOAQQAOAQAZAAQAQAAAPgEIAAAIQgOAFgTAAQgcAAgQgTg");
	this.shape_6.setTransform(76.1,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEBEIAAh+IgsAAIAAgJIBhAAIAAAJIgsAAIAAB+g");
	this.shape_7.setTransform(64.9,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAvBEIgTgwIg2AAIgTAwIgLAAIA2iHIAFAAIA2CHgAgEgkIgTAvIAvAAIgSgvIgFgRIgFARg");
	this.shape_8.setTransform(54.2,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA1BEIAAhmIABgWIgBAAIgyB8IgFAAIgzh8IgBAAIABAXIAABlIgJAAIAAiHIAPAAIAvB2IAAAAIAxh2IAOAAIAACHg");
	this.shape_9.setTransform(40.3,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkBEIAAiHIBJAAIAAAJIhAAAIAAAzIA8AAIAAAIIg8AAIAAA6IBAAAIAAAJg");
	this.shape_10.setTransform(22.3,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjBEIgehoIgFgVIgEATIgeBqIgIAAIgliHIAKAAIAYBXIACAJIACAJIACAHIACAIQACgNAHgaIAXhRIAKAAIAbBeIAHAaIADgOIAchqIAKAAIglCHg");
	this.shape_11.setTransform(8.2,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt21, new cjs.Rectangle(-2.2,-1.5,172.3,29.9), null);


(lib.txt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape.setTransform(144,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBHIAAg+IAAgKIABgdIgBAAIgcBlIgkAAIgdhlIgBAAIACAnIAAA+IgiAAIAAiOIAzAAIAdBlIABAAIAdhlIAzAAIAACOg");
	this.shape_1.setTransform(128.6,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA2QgRgSgBgkQABgjARgTQASgSAigBQAhAAASATQARATAAAjQAAAkgRASQgSAUgigBQggABgTgUgAgbAAQAAAqAbAAQAOgBAIgJQAHgLAAgVQAAgVgHgJQgIgLgNAAQgcAAAAApg");
	this.shape_2.setTransform(110.9,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBHIAAg5IgsAAIAAA5IgmAAIAAiOIAmAAIAAA1IAsAAIAAg1IAnAAIAACOg");
	this.shape_3.setTransform(95.3,37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUAAAAgSQAAgOgTAAIgIAAg");
	this.shape_4.setTransform(76.6,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA6QgQgPAAgcIAAhXIAnAAIAABUQAAAOAFAIQAGAHAKAAQAMAAAFgHQAFgHAAgPIAAhUIAnAAIAABWQAAAcgQAPQgQAPgdAAQgdAAgPgOg");
	this.shape_5.setTransform(61.3,37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzA2QgRgSgBgkQABgjARgTQASgSAigBQAhAAASATQARATABAjQgBAkgRASQgSAUgigBQghABgSgUgAgbAAQAAAqAbAAQAOgBAIgJQAHgLAAgVQAAgVgHgJQgIgLgNAAQgcAAAAApg");
	this.shape_6.setTransform(45.8,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBHIAAg2IgvhYIArAAIAXA1IAYg1IAqAAIguBXIAAA3g");
	this.shape_7.setTransform(31.2,37.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_8.setTransform(127.6,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgiAAIAABtg");
	this.shape_9.setTransform(116,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBIIgHgbIguAAIgHAbIgrAAIAviPIAyAAIAvCPgAgCgfIgMAsIAeAAIgHgWIgFgUIgEgSIgCAQg");
	this.shape_10.setTransform(102.9,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBHIguiOIArAAIAUBIQAFAYAAAKIADgSIADgQIAUhIIArAAIguCOg");
	this.shape_11.setTransform(88.7,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgyA2QgTgSABgkQgBgjATgTQASgSAgAAQAiAAASASQARATAAAjQAAAkgRASQgSAUgigBQghABgRgUgAgcAAQABAqAbAAQAPgBAHgJQAHgLAAgVQAAgVgHgJQgHgLgPAAQgcAAAAApg");
	this.shape_12.setTransform(73.7,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARBHIgzhjIgBAAIACAjIAABAIgiAAIAAiOIAyAAIAzBjIABAAIgCgiIAAhBIAjAAIAACOg");
	this.shape_13.setTransform(57.4,15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_14.setTransform(43.8,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgJIAHAAQAUAAAAgRQAAgPgTAAIgIAAg");
	this.shape_15.setTransform(32.2,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12, new cjs.Rectangle(22.5,-0.4,132.9,52.5), null);


(lib.txt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAzQgRgTABggQAAggAQgSQAQgTAbAAQAcAAAQATQARASgBAgQABAggRATQgQATgcAAQgbAAgQgTgAgkgsQgNAQAAAcQAAAdANAQQAMAQAYAAQAZAAANgQQANgPgBgeQABgcgNgQQgNgPgZAAQgXAAgNAPg");
	this.shape.setTransform(99.5,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBEIAAh+IgsAAIAAgJIBhAAIAAAJIgsAAIAAB+g");
	this.shape_1.setTransform(87.2,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBEIAAiHIBJAAIAAAJIhAAAIAAAzIA8AAIAAAIIg8AAIAAA6IBAAAIAAAJg");
	this.shape_2.setTransform(72.5,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA1BEIAAhmIABgWIgBAAIgyB8IgFAAIgzh8IgBAAIABAXIAABlIgJAAIAAiHIAPAAIAvB2IAAAAIAxh2IAOAAIAACHg");
	this.shape_3.setTransform(58.7,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBEIAAiHIAJAAIAACHg");
	this.shape_4.setTransform(48,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEBEIAAh+IgsAAIAAgJIBhAAIAAAJIgsAAIAAB+g");
	this.shape_5.setTransform(40.7,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBAIAAgJQAPAGAWAAQAQAAAKgIQAKgHAAgNQAAgIgEgFQgDgFgHgEQgHgEgOgFQgUgGgIgIQgIgJAAgNQAAgQAMgJQAMgKARAAQATAAARAHIgDAJQgRgHgQAAQgOAAgIAGQgJAHAAAMQAAAIACAFQADAFAGADQAHAEAOAGQAQAEAIAFQAHAFAEAHQAEAGAAAKQAAARgNAKQgMAKgUAAQgZAAgNgGg");
	this.shape_6.setTransform(25.6,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAYIgDgvIALAAIgDAvg");
	this.shape_7.setTransform(18.6,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBEIAAh+IgsAAIAAgJIBhAAIAAAJIgsAAIAAB+g");
	this.shape_8.setTransform(11.8,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEBEIAAiHIAJAAIAACHg");
	this.shape_9.setTransform(4.4,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt11, new cjs.Rectangle(0,-0.7,108.9,29.9), null);


(lib.quotepc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quote();
	this.instance.parent = this;
	this.instance.setTransform(64,-35,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.quotepc, new cjs.Rectangle(64,-35,136.1,57.7), null);


(lib.men2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.menphone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men2, new cjs.Rectangle(0,0,182,141), null);


(lib.men = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men, new cjs.Rectangle(0,0,146,250), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAJQgJgHACgHIAFgGQAJgBAFAGQABACgBAFQgCAJgCABIgCABQgCAAgEgDg");
	this.shape.setTransform(172.2,28.1,1.309,1.309);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAoQgDgMAAgKIABgEIgCgXQACgFAAgDIgDgLIgBgDIgOAqQgBACABAFIgBAHQgBAFgEADIgFAAQgDgBAAgDQgDgGgGgdQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgDgRIgBgBIgHARIgHAVIABAAIgCACIACAGIgDAEQgCAFgBAKIgLAFQgCgCgCgJQgCgLgCgzIACAAIgDgSIAJgEQAGANAAAOIAAAWIADAAIAEgOIgBgCQAFgHAIgQIAFgLQAHAAAEAKQACAIADAeQAEgFAEgMIAJgdQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAFABQADgBAEAGQACAFADAQIAEAqIgBADIADADIgCAEIADANIgCAAIADAMIgHAFIgFAAQgDgEgCgLg");
	this.shape_1.setTransform(202.7,25.3,1.309,1.309);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAyQgEgEgBgEQAAgaAHgTQAJgYAQgTIAGgGIAIgEQAKAEACAGQgUANgLATQgMAUgCAbQAAABAFAJQAKAAAMgHQAIgEAXgQIgBALIgLAJQgSANgJAFQgLADgEAAQgHgBgFgGg");
	this.shape_2.setTransform(180.2,23.8,1.309,1.309);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA0QgMgDgGgHQgBgDgBgGIAAgJIAEgRQALgcAbgeIAHABQAFAFgDAIQADACABAJIgBAbQgCAdgRAPIgIAFQgCACgEAAIgBAAgAALgcIgKARQgNAZAAARIAFAGQABAAAFgDQALgJAFgNIACgZIACgDQgDgCgCgLIgDABg");
	this.shape_3.setTransform(190.4,22.4,1.309,1.309);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BuIg3gBIhJAAQgHAAgBgDIABgaIADhHIgDhzQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFAAIBNABIA7gBQAFAAACADQACACAAAFIAEAlIAAAFIgDACIgDAAQgqgFgiABQgIAAgBAEIAAAPQAAALAGACIAJABIAJgBIA8gDIACACIAAACQgEAgAAAQQAAAFgHgBQgOgCgVgBIghAAQgIAAABAFQAAATABADQABAEAHACQAGACAZAAIAagBIAagBQAEgBAAAGIgDAZIgEAWQgBADgEABg");
	this.shape_4.setTransform(65.7,15.2,1.309,1.309);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHB+IgkgkQgDgCABgDIAGgFQALgKACgEQAHgLACgOQACgQAAgqQgBhDgFgpQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAZAAQAMABAYgBQAEAAAAAFIgBCKQgBAmgIAUQgKAggXAUIgFAEIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBg");
	this.shape_5.setTransform(45,17.6,1.309,1.309);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBvIgOgBQgFAAAAgEQAEhngBgUIgChTIABgIQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAiABIAYgBQAFAAgBAEIgCA2IgCA1IACBmIgBAGQgKACgTAAIgQAAg");
	this.shape_6.setTransform(32.3,15.2,1.309,1.309);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBuQgEgCgCgCIgFgKIghg8QgDgHgEgFQgHACgHAEIgDACIACBJQAAAFgFAAQgKABgUAAQgRAAgJgBQgFAAAAgFIADhaQABgWgCgmIgCg+QAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAjABIAYgBQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAVgDAqQAAAMABAEQADAFADAAQASAAAKgKQAFgFAGgMIAVg3QACgFAGAAIAdABIAWgBQACABAAAFIgDAMQgJAcgIASQgLAXgOAMQgIAFgDAEIAeAxQARAcAHAPQAEAJgBAFQgBAFgGABQgFABgSAAQgUAAgKgBg");
	this.shape_7.setTransform(12.6,15.2,1.309,1.309);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/BvIgNAAQgCAAgDgEIhThtIgDgEIgCADIACBsIgBAFQAAABgFAAIgzAAQgFAAgBgCIAAgIIADhJQABgZgCgoIgChCQAAgDAFAAQAWgBALgCIAQgCIAIAJIBOBpQAEAGAEABQABgEAAgOQgDg+AAgfQAAgEABgBIAHgBIA0gBQAEAAgBAFQAAAggDBAIAABzQABADgFAAIgVABIgOgBg");
	this.shape_8.setTransform(93.1,15,1.309,1.309);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBvQgFAAgCgFIgGgWQgBgFgDABIgmgBIgcABIgDACIgEAMIgEAMQgCAFgEABIgkABQgRgBgEgCQgCAAACgHQAJgdAbhJIAnhnQACgIACgCIAUABQAKABAVgBQADgBADAGIBODGIAEAPQABAEgGABIgcABQgTAAgJgCgAgOACIgGAWIAGACIAUAAIAIAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgNQgHgagHgSIgOAkg");
	this.shape_9.setTransform(153.8,15,1.309,1.309);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBnQgogVgNgsQgHgVADgaQABgbAMgWQASggAegOQAXgLAdABQAsACAbAeQAHAJAAACQAAADgFAIQgJANgIAIQgGAHgEABIgJgIQgRgRgWABQgTgBgMAMQgTAQAAAcQgBAZAOAQQALANATADQAUACAYgKQgFghAAgQQAAgGADgBQAHAAAQACQAMABAZgCQADgBAAAGIgBAnQgBAWADApIAAAIQgCACgGgBQgOgDgRgFQgcALgcACIgGAAQgdAAgXgMg");
	this.shape_10.setTransform(124.1,15,1.309,1.309);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,209.4,34.5), null);


(lib.constractors_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.constractors();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.constractors_1, new cjs.Rectangle(0,0,146,243), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGApIAAhGIgYAAIAAgLIA9AAIAAALIgYAAIAABGg");
	this.shape.setTransform(119,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAgQgJgMAAgUQAAgMAEgJQAFgKAJgGQAJgEALAAQANgBAKAGIgEALIgJgEQgFgBgFAAQgLAAgGAJQgHAHAAAOQAAAPAGAIQAHAIALAAIAKgBIAKgDIAAAMQgJADgNAAQgRABgKgLg");
	this.shape_1.setTransform(112.3,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXApIAAhRIAuAAIAAALIggAAIAAAXIAeAAIAAAKIgeAAIAAAaIAgAAIAAALg");
	this.shape_2.setTransform(105.4,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQA0IAAgLIAJABQAKgBAAgOIAAhPIANAAIAABPQABANgHAGQgFAHgLAAQgFAAgFgBg");
	this.shape_3.setTransform(99.3,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAgQgKgMAAgUQAAgUAKgKQAKgLASAAQATAAAKALQAKAKAAAUQAAAUgKAMQgLALgSgBQgSABgKgLgAgRgWQgHAIAAAOQAAAQAHAHQAGAIALAAQAMAAAGgIQAGgIAAgPQAAgOgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(93.9,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPApIgSghIgNAAIAAAhIgOAAIAAhRIAYAAQAOAAAIAFQAIAHAAAMQAAAQgQAFIAXAkgAgQgCIAJAAQAJAAADgDQAFgEAAgGQAAgIgFgDQgFgDgHAAIgJAAg");
	this.shape_5.setTransform(86.2,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbApIAAhRIAYAAQAPAAAIAGQAHAGAAANQABAMgJAHQgJAGgOABIgJAAIAAAegAgNAAIAHAAQAKAAAEgDQAGgEAAgIQgBgHgEgEQgEgDgIAAIgKAAg");
	this.shape_6.setTransform(78.7,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPApIgSghIgNAAIAAAhIgOAAIAAhRIAYAAQAOAAAIAFQAIAHAAAMQAAAQgQAFIAXAkgAgQgCIAJAAQAJAAADgDQAFgEAAgGQAAgIgFgDQgFgDgHAAIgJAAg");
	this.shape_7.setTransform(68.6,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAiQgJgIAAgPIAAg0IAOAAIAAAzQAAALAEAFQAGAEAIAAQAUABAAgVIAAgzIANAAIAAA1QAAAJgEAHQgEAGgHAEQgIAEgKAAQgOAAgJgIg");
	this.shape_8.setTransform(60.1,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAgQgKgMAAgUQAAgUAKgKQAKgLASAAQATAAAKALQAKAKAAAUQAAAUgKAMQgLALgSgBQgSABgKgLgAgRgWQgHAIAAAOQAAAQAHAHQAGAIALAAQAMAAAGgIQAGgIAAgPQAAgOgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(51.2,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGApIAAgfIgbgyIAOAAIATAlIAUglIAOAAIgbAxIAAAgg");
	this.shape_10.setTransform(43.2,14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGApIAAhGIgYAAIAAgLIA9AAIAAALIgYAAIAABGg");
	this.shape_11.setTransform(33.5,14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAnIAAgOIAMAFIALABQAHAAAFgDQADgDABgFQgBgFgDgDQgEgDgKgEQgLgFgFgFQgEgGAAgJQgBgKAIgGQAIgFALAAQALAAAMAEIgEALQgLgEgIAAQgGAAgDADQgEADAAAEQAAADABADIAFAEIAKAGQAJAEAFACQADADACAEQACAFAAAFQAAALgHAGQgJAHgNgBQgOAAgIgDg");
	this.shape_12.setTransform(27,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAgQgKgMAAgUQAAgUAKgKQAKgLASAAQATAAAKALQAKAKAAAUQAAAUgKAMQgLALgSgBQgSABgKgLgAgRgWQgHAIAAAOQAAAQAHAHQAGAIALAAQAMAAAGgIQAGgIAAgPQAAgOgGgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(19.3,14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbApIAAhRIAZAAQAOAAAHAGQAJAGgBANQAAAMgIAHQgJAGgOABIgJAAIAAAegAgNAAIAHAAQAKAAAEgDQAFgEABgIQAAgHgFgEQgFgDgHAAIgKAAg");
	this.shape_14.setTransform(11.4,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqJiOIAKAAIUJAAIAAEdI0JAAIgKAAg");
	this.shape_15.setTransform(65,14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003466").s().p("AqECPIAAkdIUJAAIAAEdg");
	this.shape_16.setTransform(65.5,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-1,-1,132.1,30.5), null);


(lib.bgpc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgpc2, new cjs.Rectangle(0,0,300,210), null);


(lib.bgpc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1pngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgpc1, new cjs.Rectangle(0,38,300,227), null);


// stage content:
(lib.General_renovations_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_878 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(878).call(this.frame_878).wait(17));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(69.2,23.1,0.536,0.536,0,0,0,104.7,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({x:229.2,y:22.1},15).wait(94).to({x:69.2,y:23.1},15).wait(197).to({x:229.2,y:22.1},15).wait(94).to({x:69.2,y:23.1},15).wait(197).to({x:229.2,y:22.1},15).wait(42));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.3,267,1,1,0,0,0,65,14.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221).to({_off:false},0).to({y:219,alpha:1},15,cjs.Ease.get(0.94)).wait(69).to({y:269},15,cjs.Ease.get(-1)).to({_off:true},1).wait(221).to({_off:false,y:267,alpha:0},0).to({y:219,alpha:1},15,cjs.Ease.get(0.94)).wait(69).to({y:269},15,cjs.Ease.get(-1)).to({_off:true},1).wait(221).to({_off:false,y:267,alpha:0},0).to({y:219,alpha:1},15,cjs.Ease.get(0.94)).wait(17));

	// constractors
	this.instance_2 = new lib.constractors_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.4,126.7,1,1,0,0,0,73,121.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({_off:false},0).to({x:84.4,alpha:1},15,cjs.Ease.get(1)).wait(68).to({x:54.4,alpha:0},15).to({_off:true},1).wait(222).to({_off:false,x:44.4},0).to({x:84.4,alpha:1},15,cjs.Ease.get(1)).wait(68).to({x:54.4,alpha:0},15).to({_off:true},1).wait(222).to({_off:false,x:44.4},0).to({x:84.4,alpha:1},15,cjs.Ease.get(1)).wait(22));

	// txt-3.png
	this.instance_3 = new lib.txt3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(169.9,41.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(211).to({_off:false},0).to({x:170,alpha:1},15,cjs.Ease.get(1)).wait(73).to({x:200,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(217).to({_off:false,x:169.9},0).to({x:170,alpha:1},15,cjs.Ease.get(1)).wait(73).to({x:200,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(217).to({_off:false,x:169.9},0).to({x:170,alpha:1},15,cjs.Ease.get(1)).wait(27));

	// men-2
	this.instance_4 = new lib.men2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(232.4,130.2,1,1,0,0,0,91,70.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(113).to({_off:false},0).to({x:202.4,alpha:1},15,cjs.Ease.get(1)).wait(68).to({x:232.4,alpha:0},15).to({_off:true},1).wait(222).to({_off:false},0).to({x:202.4,alpha:1},15,cjs.Ease.get(1)).wait(68).to({x:232.4,alpha:0},15).to({_off:true},1).wait(222).to({_off:false},0).to({x:202.4,alpha:1},15,cjs.Ease.get(1)).wait(68).to({x:232.4,alpha:0},15).to({_off:true},1).wait(41));

	// txt-2-2.png
	this.instance_5 = new lib.txt22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.6,271.1,1,1,0,0,0,142.8,15.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108).to({_off:false},0).to({y:231.1,alpha:1},15,cjs.Ease.get(1)).wait(83).to({x:113.6,alpha:0},15).to({_off:true},1).wait(207).to({_off:false,x:153.6,y:271.1},0).to({y:231.1,alpha:1},15,cjs.Ease.get(1)).wait(83).to({x:113.6,alpha:0},15).to({_off:true},1).wait(207).to({_off:false,x:153.6,y:271.1},0).to({y:231.1,alpha:1},15,cjs.Ease.get(1)).wait(83).to({x:113.6,alpha:0},15).to({_off:true},1).wait(31));

	// txt-2-1.png
	this.instance_6 = new lib.txt21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(98,250.9,1,1,0,0,0,86.2,14.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(103).to({_off:false},0).to({y:210.9,alpha:1},15,cjs.Ease.get(1)).wait(83).to({x:58,alpha:0},15).to({_off:true},1).wait(207).to({_off:false,x:98,y:250.9},0).to({y:210.9,alpha:1},15,cjs.Ease.get(1)).wait(83).to({x:58,alpha:0},15).to({_off:true},1).wait(207).to({_off:false,x:98,y:250.9},0).to({y:210.9,alpha:1},15,cjs.Ease.get(1)).wait(83).to({x:58,alpha:0},15).to({_off:true},1).wait(36));

	// txt-1-1.png
	this.instance_7 = new lib.txt11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(105.8,189.6,1,1,0,0,0,54.5,14.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:65.8,alpha:1},14,cjs.Ease.get(0.98)).wait(68).to({x:105.8,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(223).to({_off:false},0).to({x:65.8,alpha:1},14,cjs.Ease.get(0.98)).wait(68).to({x:105.8,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(223).to({_off:false},0).to({x:65.8,alpha:1},14,cjs.Ease.get(0.98)).wait(68).to({x:105.8,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// txt-1-2.png
	this.instance_8 = new lib.txt12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(93.4,222,1,1,0,0,0,64.5,26.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({x:53.4,alpha:1},14,cjs.Ease.get(0.98)).wait(67).to({x:93.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(224).to({_off:false},0).to({x:53.4,alpha:1},14,cjs.Ease.get(0.98)).wait(67).to({x:93.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(224).to({_off:false},0).to({x:53.4,alpha:1},14,cjs.Ease.get(0.98)).wait(67).to({x:93.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(149));

	// men
	this.instance_9 = new lib.men();
	this.instance_9.parent = this;
	this.instance_9.setTransform(267,125,1,1,0,0,0,73,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({x:227,alpha:1},14,cjs.Ease.get(0.98)).wait(65).to({x:267,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(226).to({_off:false},0).to({x:227,alpha:1},14,cjs.Ease.get(0.98)).wait(65).to({x:267,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(226).to({_off:false},0).to({x:227,alpha:1},14,cjs.Ease.get(0.98)).wait(65).to({x:267,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(144));

	// Слой 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003466").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape.setTransform(150,210);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003A6D").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_1.setTransform(150,211.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#014174").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_2.setTransform(150,212.6);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01477B").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_3.setTransform(150,213.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#024E82").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_4.setTransform(150,215.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#025489").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_5.setTransform(150,216.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#025B90").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_6.setTransform(150,217.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#036197").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_7.setTransform(150,218.9);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#03689F").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_8.setTransform(150,220.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#046EA6").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_9.setTransform(150,221.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0475AD").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_10.setTransform(150,222.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#047BB4").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_11.setTransform(150,224);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0582BB").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_12.setTransform(150,225.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0588C2").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_13.setTransform(150,226.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#068FC9").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_14.setTransform(150,227.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0695D0").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_15.setTransform(150,229);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0693CE").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_16.setTransform(150,228.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0691CC").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_17.setTransform(150,228.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#068EC8").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_18.setTransform(150,227.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#058AC4").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_19.setTransform(150,226.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0585BF").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_20.setTransform(150,226);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0580B9").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_21.setTransform(150,224.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0479B2").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_22.setTransform(150,223.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0472AA").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_23.setTransform(150,222.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#036AA1").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_24.setTransform(150,220.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#02578C").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_25.setTransform(150,216.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#014C80").s().p("A3bGQIAAsfMAu3AAAIAAMfg");
	this.shape_26.setTransform(150,214.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},118).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},172).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},118).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},172).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},118).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(118).to({_off:true},1).wait(201).to({_off:false},0).wait(119).to({_off:true},1).wait(201).to({_off:false},0).wait(119).to({_off:true},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120).to({_off:false},0).to({_off:true},1).wait(198).to({_off:false,y:212.5},0).to({_off:true},1).wait(121).to({_off:false,y:212.6},0).to({_off:true},1).wait(198).to({_off:false,y:212.5},0).to({_off:true},1).wait(121).to({_off:false,y:212.6},0).to({_off:true},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(125).to({_off:false},0).to({_off:true},1).wait(190).to({_off:false,y:218.8},0).to({_off:true},1).wait(129).to({_off:false,y:218.9},0).to({_off:true},1).wait(190).to({_off:false,y:218.8},0).to({_off:true},1).wait(129).to({_off:false,y:218.9},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(133).to({_off:false},0).wait(173).to({y:228.9},0).to({_off:true},1).wait(147).to({_off:false,y:229},0).wait(173).to({y:228.9},0).to({_off:true},1).wait(147).to({_off:false,y:229},0).wait(120));

	// quote-pc
	this.instance_10 = new lib.quotepc();
	this.instance_10.parent = this;
	this.instance_10.setTransform(189.5,264.5,1,1,0,0,0,95.5,40.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(216).to({_off:false},0).to({y:209.5},15,cjs.Ease.get(1)).wait(68).to({y:256.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(222).to({_off:false,y:264.5},0).to({y:209.5},15,cjs.Ease.get(1)).wait(68).to({y:256.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(222).to({_off:false,y:264.5},0).to({y:209.5},15,cjs.Ease.get(1)).wait(22));

	// Слой 17
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(66,66,66,0.447)").s().p("A3bDHIAAmNMAu3AAAIAAGNg");
	this.shape_27.setTransform(150,19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(66,66,66,0.447)").s().p("A3PDHIAAmNMAufAAAIAAGNg");
	this.shape_28.setTransform(151.2,19.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(66,66,66,0.447)").s().p("A2qDHIAAmNMAtVAAAIAAGNg");
	this.shape_29.setTransform(154.9,19.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(66,66,66,0.447)").s().p("A1sDHIAAmNMArZAAAIAAGNg");
	this.shape_30.setTransform(161.1,19.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(66,66,66,0.447)").s().p("A0WDHIAAmNMAotAAAIAAGNg");
	this.shape_31.setTransform(169.7,19.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(66,66,66,0.447)").s().p("AyoDHIAAmNMAlRAAAIAAGNg");
	this.shape_32.setTransform(180.7,19.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(66,66,66,0.447)").s().p("AwhDHIAAmNMAhEAAAIAAGNg");
	this.shape_33.setTransform(194.2,19.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(66,66,66,0.447)").s().p("AuCDHIAAmNIcFAAIAAGNg");
	this.shape_34.setTransform(210.2,19.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(66,66,66,0.447)").s().p("ArKDHIAAmNIWVAAIAAGNg");
	this.shape_35.setTransform(228.6,19.8);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(66,66,66,0.498)").s().p("ArKGNIAAsZIWVAAIAAMZg");
	this.shape_36.setTransform(228.6,39.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(66,66,66,0.541)").s().p("ArKI1IAAxpIWVAAIAARpg");
	this.shape_37.setTransform(228.6,56.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(66,66,66,0.576)").s().p("ArKK+IAA17IWVAAIAAV7g");
	this.shape_38.setTransform(228.5,70);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(66,66,66,0.604)").s().p("ArKMpIAA5RIWVAAIAAZRg");
	this.shape_39.setTransform(228.5,80.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(66,66,66,0.624)").s().p("ArKN1IAA7pIWVAAIAAbpg");
	this.shape_40.setTransform(228.5,88.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(66,66,66,0.635)").s().p("ArKOjIAA9FIWVAAIAAdFg");
	this.shape_41.setTransform(228.5,92.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(66,66,66,0.639)").s().p("ArKOyIAA9jIWVAAIAAdjg");
	this.shape_42.setTransform(228.5,94.4);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(66,66,66,0.616)").s().p("ArKNVIAA6pIWVAAIAAapg");
	this.shape_43.setTransform(228.5,85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(66,66,66,0.592)").s().p("ArKL3IAA3uIWVAAIAAXug");
	this.shape_44.setTransform(228.5,75.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(66,66,66,0.569)").s().p("ArKKaIAA0zIWVAAIAAUzg");
	this.shape_45.setTransform(228.5,66.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(66,66,66,0.545)").s().p("ArKI9IAAx5IWVAAIAAR5g");
	this.shape_46.setTransform(228.6,57.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(66,66,66,0.518)").s().p("ArKHfIAAu9IWVAAIAAO9g");
	this.shape_47.setTransform(228.6,47.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(66,66,66,0.494)").s().p("ArKGCIAAsDIWVAAIAAMDg");
	this.shape_48.setTransform(228.6,38.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(66,66,66,0.471)").s().p("ArKElIAApJIWVAAIAAJJg");
	this.shape_49.setTransform(228.6,29.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(66,66,66,0.447)").s().p("AuaDHIAAmNIc1AAIAAGNg");
	this.shape_50.setTransform(207.7,19.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(66,66,66,0.447)").s().p("AxKDHIAAmNMAiWAAAIAAGNg");
	this.shape_51.setTransform(190.1,19.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(66,66,66,0.447)").s().p("AzbDHIAAmNMAm2AAAIAAGNg");
	this.shape_52.setTransform(175.7,19.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(66,66,66,0.447)").s().p("A1LDHIAAmNMAqXAAAIAAGNg");
	this.shape_53.setTransform(164.4,19.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(66,66,66,0.447)").s().p("A2bDHIAAmNMAs3AAAIAAGNg");
	this.shape_54.setTransform(156.4,19.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(66,66,66,0.447)").s().p("A3LDHIAAmNMAuXAAAIAAGNg");
	this.shape_55.setTransform(151.6,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_27}]},201).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},83).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},7).to({state:[{t:this.shape_27}]},201).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},83).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},7).to({state:[{t:this.shape_27}]},201).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(201).to({_off:true},1).wait(112).to({_off:false},0).wait(208).to({_off:true},1).wait(112).to({_off:false},0).wait(208).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(209).to({_off:false},0).to({_off:true},1).wait(97).to({_off:false},0).to({_off:true},1).wait(222).to({_off:false},0).to({_off:true},1).wait(97).to({_off:false},0).to({_off:true},1).wait(222).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(216).to({_off:false},0).wait(83).to({_off:true},1).wait(237).to({_off:false},0).wait(83).to({_off:true},1).wait(237).to({_off:false},0).wait(37));

	// Слой 10
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#003466").s().p("A3bBiIAAjDMAu3AAAIAADDg");
	this.shape_56.setTransform(150,179.5);
	this.shape_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(118).to({_off:false},0).wait(84).to({y:180.9},0).wait(1).to({y:182.2},0).wait(1).to({y:183.5},0).wait(1).to({y:184.9},0).wait(1).to({y:186.2},0).wait(1).to({y:187.5},0).wait(1).to({y:188.9},0).wait(1).to({y:190.2},0).wait(1).to({y:191.5},0).wait(1).to({y:192.9},0).wait(1).to({y:194.2},0).wait(1).to({y:195.5},0).wait(1).to({y:196.9},0).wait(1).to({y:198.2},0).wait(1).to({y:199.5},0).to({_off:true},1).wait(222).to({_off:false,y:179.5},0).wait(84).to({y:180.9},0).wait(1).to({y:182.2},0).wait(1).to({y:183.5},0).wait(1).to({y:184.9},0).wait(1).to({y:186.2},0).wait(1).to({y:187.5},0).wait(1).to({y:188.9},0).wait(1).to({y:190.2},0).wait(1).to({y:191.5},0).wait(1).to({y:192.9},0).wait(1).to({y:194.2},0).wait(1).to({y:195.5},0).wait(1).to({y:196.9},0).wait(1).to({y:198.2},0).wait(1).to({y:199.5},0).to({_off:true},1).wait(222).to({_off:false,y:179.5},0).wait(84).to({y:180.9},0).wait(1).to({y:182.2},0).wait(1).to({y:183.5},0).wait(1).to({y:184.9},0).wait(1).to({y:186.2},0).wait(1).to({y:187.5},0).wait(1).to({y:188.9},0).wait(1).to({y:190.2},0).wait(1).to({y:191.5},0).wait(1).to({y:192.9},0).wait(1).to({y:194.2},0).wait(1).to({y:195.5},0).wait(1).to({y:196.9},0).wait(1).to({y:198.2},0).wait(1).to({y:199.5},0).to({_off:true},1).wait(36));

	// bg-pc-2
	this.instance_11 = new lib.bgpc2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,120,1,1,0,0,0,150,120);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(103).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(83).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(207).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(83).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(207).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(83).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(36));

	// bg-pc-1
	this.instance_12 = new lib.bgpc1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,75.5,1,1,0,0,0,150,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},119).wait(82).to({_off:false},0).wait(120).to({_off:true},119).wait(82).to({_off:false},0).wait(120).to({_off:true},119).wait(82).to({_off:false},0).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,124.8,300,250.2);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/General_renovations_300x250_atlas_P_.png", id:"General_renovations_300x250_atlas_P_"},
		{src:"images/General_renovations_300x250_atlas_NP_.jpg", id:"General_renovations_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;