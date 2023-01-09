(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"HD_300x250_AdWords_MREC_atlas_P_", frames: [[0,0,298,474],[0,476,312,389],[0,867,264,124]]}
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
	this.spriteSheet = ss["HD_300x250_AdWords_MREC_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4pc2 = function() {
	this.spriteSheet = ss["HD_300x250_AdWords_MREC_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["HD_300x250_AdWords_MREC_atlas_P_"];
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


(lib.txt33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#496FAB").s().p("AAdBnIgdh9IAAAAIgcB9IglAAIgojMIAnAAIAWCBIABAAIAeiBIAbAAIAeCBIABAAIAWiBIAnAAIgoDMg");
	this.shape.setTransform(142.6,-25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#496FAB").s().p("AgzBVQgTgUAAgkIAAg5QAAgkATgUQAUgUAfAAQAgAAAUAUQATAUABAkIAAA5QgBAkgTAUQgTAVghgBQgfABgUgVgAgXg+QgIAMAAAWIAAA5QAAAWAIALQAJALAOAAQAQAAAHgLQAJgLgBgWIAAg5QABgWgJgLQgHgMgQAAQgPABgIAKg");
	this.shape_1.setTransform(123.5,-25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#496FAB").s().p("AAgBnIg+iDIgBABIAACCIgoAAIAAjMIAoAAIA+CBIABAAIAAiBIAoAAIAADMg");
	this.shape_2.setTransform(106.5,-25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#496FAB").s().p("AAYBnIgnhWIgRAAIAABWIgoAAIAAjMIAoAAIAABTIAMAAIAohTIAwAAIg4BdIA+Bvg");
	this.shape_3.setTransform(84.4,-25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#496FAB").s().p("AgvBWQgTgUAAgjIAAg8QAAgkATgTQASgVAdABQAhAAARARQAQASABAhIgBABIgmAAQABgTgHgKQgGgJgQAAQgMAAgHALQgHALAAAVIAAA9QgBAVAJALQAHALANgBQAPABAGgJQAFgIAAgVIAmAAIABABQAAAigQARQgQARghAAQgeABgTgUg");
	this.shape_4.setTransform(67.9,-25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#496FAB").s().p("AgTBnIAAjMIAnAAIAADMg");
	this.shape_5.setTransform(56.4,-25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#496FAB").s().p("Ag5BnIAAjMIApAAIAACrIBKAAIAAAhg");
	this.shape_6.setTransform(46.5,-25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#496FAB").s().p("AgvBWQgTgUAAgjIAAg8QAAgkASgTQATgVAeABQAgAAARARQARASAAAhIAAABIgnAAQABgTgHgKQgGgJgPAAQgNAAgHALQgIALABAVIAAA9QAAAVAHALQAIALAOgBQAOABAGgJQAFgIAAgVIAnAAIAAABQAAAigQARQgQARggAAQgfABgTgUg");
	this.shape_7.setTransform(31.6,-25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ArqC3QhQAAAAhQIAAjNQAAhQBQAAIXVAAQBQAAAABQIAADNQAABQhQAAg");
	this.shape_8.setTransform(88.8,-26.6,0.961,0.961);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt33, new cjs.Rectangle(9.3,-47.3,159,41.8), null);


(lib.txt32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBgIg5h6IgBAAIAAB6IgmAAIAAi/IAmAAIA5B6IABgBIAAh5IAlAAIAAC/g");
	this.shape.setTransform(121.5,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBQQgSgTAAgiIAAg1QAAghASgTQASgUAeAAQAeAAASAUQATATAAAhIAAA1QAAAigSATQgTATgeAAQgeAAgSgTgAgVg5QgIAKAAAVIAAA1QAAAVAIAKQAHALAOAAQAOAAAIgLQAIgKAAgVIAAg1QAAgVgIgKQgIgLgOAAQgOAAgHALg");
	this.shape_1.setTransform(105.6,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBgIAAi/IAjAAIAAC/g");
	this.shape_2.setTransform(94.5,49.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBTQgUgQAAgeIAAgBIAlAAQAAASAHAHQAIAIAOAAQAMAAAGgGQAFgGAAgLQAAgLgFgHQgGgHgPgGQgdgKgPgMQgPgOAAgYQAAgXASgPQARgPAaAAQAcAAARARQARAQgBAZIAAABIgkAAQAAgNgHgIQgGgIgMAAQgLAAgGAHQgGAGAAALQAAAJAHAGQAHAGAQAIQAbAJAOANQAOAOAAAYQAAAZgRAOQgQAPgcAAQgaAAgUgQg");
	this.shape_3.setTransform(83.6,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBgQgFgEgBgKIgBgTIAAgNQAAgPgGgIQgGgHgKAAIgbAAIAABMIgmAAIAAi/IA/AAQAbAAAQAPQARAPgBAbQAAAPgGALQgHAKgNAGQAPAFAHALQAGAMAAARIAAAOQAAAIACAJQACAJAEAEIAAADgAgcgJIAZAAQALAAAFgHQAHgHgBgNQABgNgHgIQgFgIgLAAIgZAAg");
	this.shape_4.setTransform(69.2,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BgIAAi/IBxAAIAAAeIhLAAIAAAwIBAAAIAAAdIhAAAIAAA2IBLAAIAAAeg");
	this.shape_5.setTransform(54.9,49.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBgIAAg4IAEhJIgBgBIglCCIgXAAIgliBIAAABIACBIIAAA4IglAAIAAi/IAxAAIAiCMIAAAAIAjiMIAxAAIAAC/g");
	this.shape_6.setTransform(38.1,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBgIAAg4IAChJIAAgBIglCCIgYAAIgkiBIgBABIADBIIAAA4IglAAIAAi/IAxAAIAiCMIAAAAIAjiMIAxAAIAAC/g");
	this.shape_7.setTransform(18.6,49.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBgIAAi/IAkAAIAAC/g");
	this.shape_8.setTransform(5.3,49.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBgIAAhHIg2h4IApAAIAfBSIAAAAIAghSIApAAIg3B7IAABEg");
	this.shape_9.setTransform(130.9,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1BgIAAi/IAmAAIAAChIBFAAIAAAeg");
	this.shape_10.setTransform(117.7,24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BgIAAi/IAmAAIAAChIBFAAIAAAeg");
	this.shape_11.setTransform(105.1,24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3BgIAAi/IBvAAIAAAeIhKAAIAAAwIBAAAIAAAdIhAAAIAAA2IBKAAIAAAeg");
	this.shape_12.setTransform(92.1,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+BgIAAi/IA5AAQAcAAASANQAQANAAAaQAAAOgGALQgGAKgMAGQAPACAHAMQAIAMgBAQQAAAbgPAPQgQAOgdAAgAgYBCIAaAAQALAAAGgHQAGgGAAgNQAAgOgFgHQgFgIgLAAIgcAAgAgYgOIAVAAQAKAAAHgHQAFgGABgMQAAgOgHgGQgGgGgMAAIgTAAg");
	this.shape_13.setTransform(77.8,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBgIAAhHIg2h4IApAAIAfBSIABAAIAfhSIApAAIg3B7IAABEg");
	this.shape_14.setTransform(62.7,24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BgIAAi/IAmAAIAAChIBFAAIAAAeg");
	this.shape_15.setTransform(49.4,24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BgIAAi/IAmAAIAAChIBFAAIAAAeg");
	this.shape_16.setTransform(36.8,24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag4BgIAAi/IBxAAIAAAeIhLAAIAAAwIBAAAIAAAdIhAAAIAAA2IBLAAIAAAeg");
	this.shape_17.setTransform(23.9,24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag9BgIAAi/IA4AAQAdAAARANQAQANAAAaQAAAOgGALQgGAKgNAGQAQACAHAMQAIAMgBAQQAAAbgPAPQgQAOgdAAgAgYBCIAaAAQAMAAAFgHQAGgGAAgNQAAgOgFgHQgFgIgLAAIgcAAgAgYgOIAVAAQAKAAAHgHQAFgGABgMQAAgOgHgGQgGgGgMAAIgTAAg");
	this.shape_18.setTransform(9.5,24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag3BgIAAi/IBvAAIAAAeIhKAAIAAAwIBAAAIAAAdIhAAAIAAA2IBKAAIAAAeg");
	this.shape_19.setTransform(143.9,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeBgIAAhQIg7AAIAABQIglAAIAAi/IAlAAIAABSIA7AAIAAhSIAlAAIAAC/g");
	this.shape_20.setTransform(128.6,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSBgIAAihIgrAAIAAgeIB7AAIAAAeIgsAAIAAChg");
	this.shape_21.setTransform(113.9,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgwBQQgSgTAAgiIAAg1QAAghASgTQASgUAeAAQAeAAASAUQATATAAAhIAAA1QAAAigSATQgTATgeAAQgeAAgSgTgAgVg5QgIAKAAAVIAAA1QAAAVAIAKQAHALAOAAQAOAAAIgLQAIgKAAgVIAAg1QAAgVgIgKQgIgLgOAAQgOAAgHALg");
	this.shape_22.setTransform(93.7,-0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBgIAAihIgrAAIAAgeIB7AAIAAAeIgsAAIAAChg");
	this.shape_23.setTransform(79.5,-0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwBQQgSgTAAgiIAAg1QAAghASgTQASgUAeAAQAeAAASAUQATATAAAhIAAA1QAAAigSATQgTATgeAAQgeAAgSgTgAgVg5QgIAKAAAVIAAA1QAAAVAIAKQAHALAOAAQAOAAAIgLQAIgKAAgVIAAg1QAAgVgIgKQgIgLgOAAQgOAAgHALg");
	this.shape_24.setTransform(59.3,-0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguBQQgTgSAAghIAAg5QAAghASgTQATgSAcAAQAgAAAQAQQAQAQABAcIAAABIgkAAQAAgQgHgHQgHgIgNAAQgOAAgHAKQgIAKAAATIAAA6QAAAUAIAKQAHAKAPAAQALAAAGgDQAEgDAEgGIAAgjIgZAAIAAgZIA/AAIAABGQgJANgPAJQgPAKgYAAQgeAAgTgTg");
	this.shape_25.setTransform(43.8,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgwBQQgSgTAAgiIAAg1QAAghASgTQASgUAeAAQAeAAASAUQATATAAAhIAAA1QAAAigSATQgTATgeAAQgeAAgSgTgAgVg5QgIAKAAAVIAAA1QAAAVAIAKQAHALAOAAQAOAAAIgLQAIgKAAgVIAAg1QAAgVgIgKQgIgLgOAAQgOAAgHALg");
	this.shape_26.setTransform(22.5,-0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSBgIAAihIgrAAIAAgeIB7AAIAAAeIgsAAIAAChg");
	this.shape_27.setTransform(8.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt32, new cjs.Rectangle(0,-20.5,152.1,88.8), null);


(lib.txt23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBrIhAiIIgBABIAACHIgqAAIAAjVIAqAAIBACIIABgBIAAiHIAqAAIAADVg");
	this.shape.setTransform(127.9,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BZQgTgVAAgmIAAg7QAAglATgVQAVgWAhAAQAiAAAUAWQAUAVAAAlIAAA7QAAAmgUAVQgVAVghAAQghAAgVgVgAgYhAQgIAMAAAXIAAA7QAAAXAIAMQAIAMAQAAQAQAAAJgMQAIgMAAgXIAAg7QAAgXgIgMQgJgLgQAAQgQAAgIALg");
	this.shape_1.setTransform(110.3,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_2.setTransform(97.9,50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_3.setTransform(86.7,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBrIgMguIg3AAIgMAuIgpAAIA7jVIArAAIA8DVgAgTAcIAnAAIgThKIgBAAg");
	this.shape_4.setTransform(71.2,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBaQgUgVAAglIAAg/QAAglATgUQATgVAfAAQAiAAASATQARASABAjIgBABIgoAAQABgVgHgJQgGgJgRAAQgNAAgHALQgIALAAAWIAAA/QAAAXAIALQAIALAPAAQAPAAAGgJQAGgJgBgVIAoAAIABABQAAAjgRASQgRASghAAQggAAgUgUg");
	this.shape_5.setTransform(54.9,50.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBaQgUgTAAgiIAAiQIApAAIAACQQAAAUAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgUIAAiQIApAAIAACQQAAAigUATQgUASggAAQgfAAgUgSg");
	this.shape_6.setTransform(38.2,50.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFBrIAAjVIBAAAQAhAAAVAZQAVAZAAAnIAAAjQAAAngVAZQgVAZghAAgAgbBJIAUAAQARAAAJgPQAKgPAAgZIAAgjQAAgZgKgPQgJgPgRAAIgUAAg");
	this.shape_7.setTransform(21.4,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBHAAIAAAgIhHAAIAAA8IBTAAIAAAig");
	this.shape_8.setTransform(5.9,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt23, new cjs.Rectangle(-4,28,143.3,43.6), null);


(lib.txt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBrIAAhZIhBAAIAABZIgqAAIAAjVIAqAAIAABcIBBAAIAAhcIAqAAIAADVg");
	this.shape.setTransform(54.1,63.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_1.setTransform(37.8,63.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_2.setTransform(26.6,63.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBrIgeiCIAAAAIgdCCIgnAAIgpjVIAoAAIAXCIIABAAIAfiIIAdAAIAfCIIABAAIAXiIIAoAAIgpDVg");
	this.shape_3.setTransform(11.3,63.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBcQgWgSAAghIABgBIAoAAQAAAUAJAJQAHAIARAAQANAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgRgHQgggLgQgOQgRgPAAgaQAAgbATgQQAUgRAdAAQAeAAATATQATASAAAcIgBABIgoAAQAAgPgHgJQgIgJgNAAQgLAAgHAIQgHAHAAAMQAAAKAHAHQAIAHASAIQAfAKAPAPQAPAQAAAbQAAAbgSAQQgTAQgeAAQgeAAgWgSg");
	this.shape_4.setTransform(87.1,35.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_5.setTransform(71.7,35.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBqQgFgEgCgLQgBgKAAgLIAAgPQAAgQgGgIQgHgJgLAAIgeAAIAABUIgqAAIAAjUIBGAAQAeABASAQQASARAAAdQAAARgHAMQgIAMgOAHQAQAFAHANQAIAMAAAUIAAAPQAAAJACAKQACAKAFAFIAAACgAgfgLIAbAAQAMABAHgJQAGgHAAgOQAAgPgGgJQgHgJgLAAIgcAAg");
	this.shape_6.setTransform(56.4,35.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnBrIgLguIg3AAIgLAuIgrAAIA9jVIAqAAIA7DVgAgSAcIAlAAIgThKIAAAAg");
	this.shape_7.setTransform(39.2,35.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_8.setTransform(23.5,35.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBcQgWgSAAghIABgBIAoAAQAAAUAJAJQAIAIAQAAQANAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgRgHQgggLgQgOQgRgPAAgaQAAgbATgQQAUgRAdAAQAeAAATATQATASAAAcIgBABIgoAAQAAgPgHgJQgIgJgNAAQgLAAgHAIQgHAHAAAMQAAAKAHAHQAIAHASAIQAfAKAPAPQAPAQAAAbQAAAbgSAQQgTAQgeAAQgeAAgWgSg");
	this.shape_9.setTransform(8.1,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(-2,13,99.4,71.2), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBrIAAjVIBAAAQAgAAAWAZQAVAZAAAnIAAAjQAAAngVAZQgWAZggAAgAgbBJIAUAAQAQAAAKgPQAJgPAAgZIAAgjQAAgZgJgPQgKgPgQAAIgUAAg");
	this.shape.setTransform(45.4,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBrIhAiIIgBABIAACHIgqAAIAAjVIAqAAIBACIIABgBIAAiHIAqAAIAADVg");
	this.shape_1.setTransform(27.7,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBrIgLguIg3AAIgLAuIgrAAIA9jVIAqAAIA7DVgAgSAcIAlAAIgThKIAAAAg");
	this.shape_2.setTransform(10.4,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBaQgUgTAAgiIAAiQIApAAIAACQQAAAUAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgUIAAiQIApAAIAACQQAAAigUATQgUASggAAQgfAAgUgSg");
	this.shape_3.setTransform(99.8,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BZQgTgVAAgmIAAg7QAAglATgVQAVgWAhAAQAhAAAVAWQAUAVABAlIAAA7QgBAmgUAVQgVAVghAAQghAAgVgVgAgYhAQgIAMAAAXIAAA7QAAAXAIAMQAJAMAPAAQAQAAAIgMQAJgMAAgXIAAg7QAAgXgJgMQgIgLgQAAQgQAAgIALg");
	this.shape_4.setTransform(82.6,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBrIAAhPIg8iGIAtAAIAjBcIAAAAIAkhcIAtAAIg9CJIAABMg");
	this.shape_5.setTransform(65.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBqQgFgEgCgKIgBgXIAAgOQAAgQgGgIQgHgKgLABIgeAAIAABUIgqAAIAAjTIBGAAQAeAAASAQQASARAAAdQAAARgHAMQgIAMgOAHQAQAFAHANQAIANAAATIAAAPQAAAJACAKQACAKAFAFIAAACgAgfgLIAbAAQAMABAHgJQAGgHAAgOQAAgPgGgJQgHgIgLgBIgcAAg");
	this.shape_6.setTransform(43,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BZQgTgVgBgmIAAg7QABglATgVQAVgWAhAAQAhAAAVAWQAUAVABAlIAAA7QgBAmgUAVQgVAVghAAQghAAgVgVgAgYhAQgIAMAAAXIAAA7QAAAXAIAMQAJAMAPAAQAQAAAIgMQAJgMAAgXIAAg7QAAgXgJgMQgIgLgQAAQgQAAgIALg");
	this.shape_7.setTransform(25.5,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BrIAAjVIB+AAIAAAiIhTAAIAAA6IBHAAIAAAgIhHAAIAABZg");
	this.shape_8.setTransform(10,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,-22,110.6,71.2), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBGAAIAAAgIhGAAIAAA8IBTAAIAAAig");
	this.shape.setTransform(114,82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BrIAAjVIAqAAIAACzIBNAAIAAAig");
	this.shape_1.setTransform(99.6,82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBrIAAjVIA/AAQAgAAATAPQATAPAAAdQAAAPgIAMQgGAMgNAFQAQADAJAOQAHANAAARQAAAfgRAQQgRAQghAAgAgaBJIAcAAQANAAAGgHQAHgHAAgPQAAgPgGgIQgFgIgNAAIgeAAgAgagPIAWAAQAMgBAHgHQAGgHAAgNQABgPgIgHQgGgHgOAAIgUAAg");
	this.shape_2.setTransform(83.9,82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_3.setTransform(71.5,82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBcQgWgSAAghIABgBIAoAAQAAAUAJAJQAIAIAQAAQANAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgRgHQgggLgQgOQgRgPAAgaQAAgbATgQQAUgRAdAAQAeAAATATQATASAAAcIgBABIgoAAQAAgPgHgJQgIgJgNAAQgLAAgHAIQgHAHAAAMQAAAKAHAHQAIAHASAIQAfAKAPAPQAPAQAAAbQAAAbgSAQQgTAQgeAAQgeAAgWgSg");
	this.shape_4.setTransform(59.4,82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBcQgWgSAAghIABgBIAoAAQAAAUAJAJQAIAIAQAAQANAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgRgHQgggLgQgOQgRgPAAgaQAAgbATgQQAUgRAdAAQAeAAATATQATASAAAcIgBABIgoAAQAAgPgHgJQgIgJgNAAQgLAAgHAIQgHAHAAAMQAAAKAHAHQAIAHASAIQAfAKAPAPQAPAQAAAbQAAAbgSAQQgTAQgeAAQgeAAgWgSg");
	this.shape_5.setTransform(43.2,82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BZQgVgVABgmIAAg7QgBglAVgVQAUgWAhAAQAhAAAVAWQAVAVgBAlIAAA7QABAmgVAVQgUAVgiAAQghAAgUgVgAgYhAQgIAMAAAXIAAA7QAAAXAIAMQAIAMAQAAQAQAAAJgMQAIgMAAgXIAAg7QAAgXgIgMQgJgLgQAAQgQAAgIALg");
	this.shape_6.setTransform(26.5,82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBrIAAjVIBIAAQAgAAATATQATATAAAfQAAAegTASQgTATggAAIgeAAIAABNgAgcgCIAeAAQAOAAAHgKQAHgKAAgPQAAgPgHgKQgHgKgOAAIgeAAg");
	this.shape_7.setTransform(9.8,82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBrIAAhZIhBAAIAABZIgqAAIAAjVIAqAAIAABcIBBAAIAAhcIAqAAIAADVg");
	this.shape_8.setTransform(134.9,54.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_9.setTransform(118.5,54.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBrQgFgFgCgLIgBgVIAAgPQAAgQgGgJQgHgIgLgBIgeAAIAABWIgqAAIAAjVIBGAAQAeAAASARQASAQAAAeQAAARgHAMQgIAMgOAGQAQAGAHAMQAIANAAAUIAAAPQAAAJACAKQACAKAFAEIAAAEgAgfgKIAbAAQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgKgLABIgcAAg");
	this.shape_10.setTransform(103.3,54.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_11.setTransform(90.4,54.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhFBrIAAjVIA/AAQAhAAASAPQASAPAAAdQABAPgIAMQgGAMgOAFQARADAJAOQAHANABARQAAAfgSAQQgSAQggAAgAgbBJIAdAAQANAAAGgHQAHgHAAgPQAAgPgFgIQgGgIgMAAIggAAgAgbgPIAYAAQALgBAHgHQAHgHgBgNQAAgPgGgHQgIgHgNAAIgVAAg");
	this.shape_12.setTransform(78.4,54.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_13.setTransform(55.9,54.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBcQgWgSAAghIABgBIAoAAQAAAUAJAJQAIAIAQAAQANAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgRgHQgggLgQgOQgRgPAAgaQAAgbATgQQAUgRAdAAQAeAAATATQATASAAAcIgBABIgoAAQAAgPgHgJQgIgJgNAAQgLAAgHAIQgHAHAAAMQAAAKAHAHQAIAHASAIQAfAKAPAPQAPAQAAAbQAAAbgSAQQgTAQgeAAQgeAAgWgSg");
	this.shape_14.setTransform(40.5,54.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBHAAIAAAgIhHAAIAAA8IBTAAIAAAig");
	this.shape_15.setTransform(25.6,54.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhEBrIAAjVIA/AAQAfAAATAPQASAPABAdQgBAPgGAMQgHAMgNAFQARADAHAOQAIANAAARQAAAfgRAQQgRAQghAAgAgaBJIAcAAQANAAAGgHQAHgHAAgPQAAgPgGgIQgFgIgNAAIgeAAgAgagPIAWAAQAMgBAHgHQAGgHAAgNQABgPgIgHQgGgHgNAAIgVAAg");
	this.shape_16.setTransform(9.6,54.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBHAAIAAAgIhHAAIAAA8IBTAAIAAAig");
	this.shape_17.setTransform(41.7,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAhBrIAAhZIhBAAIAABZIgqAAIAAjVIAqAAIAABcIBBAAIAAhcIAqAAIAADVg");
	this.shape_18.setTransform(24.6,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_19.setTransform(8.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-1,4,147.2,98.8), null);


(lib.t24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E38401").s().p("AAhBrIAAhZIhBAAIAABZIgqAAIAAjVIAqAAIAABcIBBAAIAAhcIAqAAIAADVg");
	this.shape.setTransform(142.4,47.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E38401").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_1.setTransform(126.1,47.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E38401").s().p("AAfBqQgFgEgCgLQgBgKAAgLIAAgPQAAgQgGgIQgHgJgLAAIgeAAIAABUIgqAAIAAjUIBGAAQAeAAASARQASARAAAdQAAARgHAMQgIAMgOAHQAQAFAHANQAIAMAAAUIAAAPQAAAJACAKQACAKAFAFIAAACgAgfgKIAbAAQAMAAAHgIQAGgIAAgOQAAgPgGgIQgHgKgLAAIgcAAg");
	this.shape_2.setTransform(110.8,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38401").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_3.setTransform(97.9,47.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E38401").s().p("AhFBrIAAjVIA/AAQAhAAASAPQATAPgBAdQABAPgIAMQgGAMgOAFQARADAJAOQAHANABARQAAAfgSAQQgSAQggAAgAgaBJIAcAAQANAAAGgHQAHgHAAgPQAAgPgGgIQgFgIgNAAIgeAAgAgagPIAWAAQAMgBAHgHQAHgHgBgNQAAgPgGgHQgIgHgNAAIgUAAg");
	this.shape_4.setTransform(85.9,47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E38401").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_5.setTransform(63.5,47.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E38401").s().p("AgwBcQgWgSAAghIABgBIAoAAQAAAUAJAJQAIAIAQAAQANAAAGgHQAHgHAAgMQAAgMgHgIQgGgHgRgHQgggLgQgOQgRgPAAgaQAAgbATgQQAUgRAdAAQAeAAATATQATASAAAcIgBABIgoAAQAAgPgHgJQgIgJgNAAQgLAAgHAIQgHAHAAAMQAAAKAHAHQAIAHASAIQAfAKAPAPQAPAQAAAbQAAAbgSAQQgTAQgeAAQgeAAgWgSg");
	this.shape_6.setTransform(48.1,47.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E38401").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBHAAIAAAgIhHAAIAAA8IBTAAIAAAig");
	this.shape_7.setTransform(33.1,47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E38401").s().p("AhEBrIAAjVIA/AAQAgAAASAPQASAPABAdQgBAPgGAMQgHAMgNAFQARADAHAOQAJANgBARQAAAfgRAQQgSAQggAAgAgbBJIAdAAQANAAAHgHQAGgHAAgPQAAgPgFgIQgGgIgNAAIgfAAgAgbgPIAXAAQAMgBAHgHQAGgHABgNQAAgPgIgHQgGgHgNAAIgWAAg");
	this.shape_8.setTransform(17.1,47.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E38401").s().p("AgUBrIAAhPIg8iGIAtAAIAjBcIAAAAIAkhcIAtAAIg9CJIAABMg");
	this.shape_9.setTransform(119.2,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E38401").s().p("AAfBqQgFgEgCgKIgBgXIAAgOQAAgPgGgJQgHgKgLABIgeAAIAABUIgqAAIAAjTIBGAAQAeAAASAQQASAQAAAeQAAARgHAMQgIAMgOAGQAQAGAHAMQAIAOAAATIAAAPQAAAJACAKQACAKAFAEIAAADgAgfgLIAbAAQAMABAHgJQAGgHAAgOQAAgPgGgJQgHgIgLgBIgcAAg");
	this.shape_10.setTransform(103,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E38401").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBHAAIAAAgIhHAAIAAA8IBTAAIAAAig");
	this.shape_11.setTransform(87.1,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E38401").s().p("AgVBrIg7jVIArAAIAkCeIABAIIAAAAIACgHIAjifIAsAAIg7DVg");
	this.shape_12.setTransform(70.9,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E38401").s().p("Ag+BrIAAjVIB9AAIAAAiIhTAAIAAA1IBHAAIAAAgIhHAAIAAA8IBTAAIAAAig");
	this.shape_13.setTransform(49.2,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E38401").s().p("AAhBrIAAhZIhBAAIAABZIgqAAIAAjVIAqAAIAABcIBBAAIAAhcIAqAAIAADVg");
	this.shape_14.setTransform(32.2,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E38401").s().p("AgUBrIAAizIgwAAIAAgiICJAAIAAAiIgwAAIAACzg");
	this.shape_15.setTransform(15.8,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AvlEvIAApdIfLAAIAAJdg");
	this.shape_16.setTransform(98.8,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t24, new cjs.Rectangle(-1,-3,199.7,71.2), null);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3bAAMAu3AAA");
	this.shape.setTransform(150,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6AC8C1").s().p("A3bDrIAAnVMAu3AAAIAAHVg");
	this.shape_1.setTransform(150,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate, new cjs.Rectangle(-1,-1,302,48.6), null);


(lib.pc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4pc2();
	this.instance.parent = this;
	this.instance.setTransform(12,-47,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc3, new cjs.Rectangle(12,-47,156,194.5), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,-1,132,62), null);


(lib.girlfront2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4pc1();
	this.instance.parent = this;
	this.instance.setTransform(4,-12,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girlfront2, new cjs.Rectangle(4,-12,149,237), null);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6ABDA6").s().p("AgUBrIAAhPIg8iGIAtAAIAjBcIAAAAIAkhcIAtAAIg9CJIAABMg");
	this.shape.setTransform(145.1,93.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6ABDA6").s().p("AhFBrIAAjVIA/AAQAgAAATAPQASAPAAAdQABAPgIAMQgGAMgOAFQARADAJAOQAHANABARQAAAfgSAQQgSAQggAAgAgbBJIAdAAQANAAAGgHQAHgHAAgPQAAgPgFgIQgGgIgMAAIggAAgAgbgPIAYAAQALgBAHgHQAHgHgBgNQAAgPgGgHQgIgHgNAAIgVAAg");
	this.shape_1.setTransform(128.8,93.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6ABDA6").s().p("AAnBrIgLguIg3AAIgLAuIgqAAIA8jVIAqAAIA8DVgAgSAcIAlAAIgThKIAAAAg");
	this.shape_2.setTransform(112,93.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6ABDA6").s().p("AhEBrIAAjVIA/AAQAfAAATAPQASAPABAdQgBAPgGAMQgHAMgNAFQARADAHAOQAIANAAARQAAAfgRAQQgRAQghAAgAgaBJIAcAAQANAAAHgHQAGgHAAgPQAAgPgGgIQgFgIgNAAIgeAAgAgagPIAWAAQAMgBAHgHQAGgHABgNQAAgPgIgHQgGgHgNAAIgVAAg");
	this.shape_3.setTransform(95.5,93.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6ABDA6").s().p("AAfBrQgFgFgCgKIgBgXIAAgOQAAgPgGgKQgHgJgLAAIgeAAIAABWIgqAAIAAjUIBGAAQAeAAASAQQASAQAAAeQAAARgHAMQgIAMgOAGQAQAGAHAMQAIAOAAATIAAAPQAAAJACAKQACAKAFAEIAAAEgAgfgLIAbAAQAMAAAHgHQAGgIAAgPQAAgOgGgIQgHgJgLAAIgcAAg");
	this.shape_4.setTransform(72.4,93.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6ABDA6").s().p("AgzBaQgUgTAAgiIAAiQIApAAIAACQQAAAUAIAJQAIAJAOAAQAPAAAIgJQAIgJAAgUIAAiQIApAAIAACQQAAAigUATQgUASggAAQgfAAgUgSg");
	this.shape_5.setTransform(54.7,93.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6ABDA6").s().p("Ag1BZQgVgVAAgmIAAg7QAAglAVgVQAUgWAhAAQAiAAAUAWQAVAVAAAlIAAA7QAAAmgVAVQgUAVgiAAQghAAgUgVgAgYhAQgIAMAAAXIAAA7QAAAXAIAMQAJAMAPAAQAQAAAIgMQAJgMAAgXIAAg7QAAgXgJgMQgIgLgQAAQgQAAgIALg");
	this.shape_6.setTransform(37.6,93.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6ABDA6").s().p("AgUBrIAAhPIg8iGIAtAAIAjBcIAAAAIAkhcIAtAAIg9CJIAABMg");
	this.shape_7.setTransform(20.8,93.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AvbCjIAAlFIe3AAIAAFFg");
	this.shape_8.setTransform(97.8,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.about, new cjs.Rectangle(-1,71,197.7,43.6), null);


// stage content:
(lib.HD_300x250_AdWords_MREC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_813 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(813).call(this.frame_813).wait(1));

	// logo
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(79,248,1,1,0,0,0,66,31);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:218,alpha:1},10).wait(111).to({x:150},6,cjs.Ease.get(1)).wait(270).to({y:248,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(29).to({_off:false,x:79},0).to({y:218,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:150},6,cjs.Ease.get(1)).wait(229));

	// Слой 4
	this.instance_1 = new lib.txt32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.2,156.9,1,1,0,0,0,62.1,43.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(279).to({_off:false},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(123).to({x:53.2,alpha:0},8).to({_off:true},1).wait(337).to({_off:false,x:43.2},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(46));

	// ABOUT
	this.instance_2 = new lib.txt33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.6,101.9,1,1,0,0,0,48.6,20.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(285).to({_off:false},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(123).to({x:29.6,alpha:0},8).to({_off:true},1).wait(337).to({_off:false,x:19.6},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(40));

	// pc-2
	this.instance_3 = new lib.txt22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.2,46.9,1,1,0,0,0,80.1,43.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.txt23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(71.2,46.9,1,1,0,0,0,80.1,43.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},144).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},113).to({state:[{t:this.instance_4}]},8).to({state:[]},1).to({state:[{t:this.instance_3}]},303).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},157).to({state:[{t:this.instance_4}]},8).to({state:[]},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(113).to({_off:true,x:71.2,alpha:0},8).wait(304).to({_off:false,x:61.2},0).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(157).to({_off:true,x:71.2,alpha:0},8,cjs.Ease.get(-1)).wait(60));

	// Pc-1-1.png
	this.instance_5 = new lib.txt23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43.2,156.9,1,1,0,0,0,62.1,43.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(156).to({_off:false},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:53.2,alpha:0},8).to({_off:true},1).wait(305).to({_off:false,x:43.2},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(155).to({x:53.2,alpha:0},8).to({_off:true},1).wait(49));

	// Pc-1-2.png
	this.instance_6 = new lib.girlfront2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(378,137.5,1,1,0,0,0,72,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:219,y:136.5},10,cjs.Ease.get(1)).wait(130).to({x:379},9).to({_off:true},1).wait(285).to({_off:false,x:378,y:137.5},0).to({x:219,y:136.5},10,cjs.Ease.get(1)).wait(130).to({x:379},9).to({_off:true},1).wait(229));

	// FREAKING OUT
	this.instance_7 = new lib.txt1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(61.2,46.9,1,1,0,0,0,80.1,43.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:71.2,alpha:0},8).to({_off:true},1).wait(303).to({_off:false,x:61.2},0).to({x:91.2,alpha:1},10,cjs.Ease.get(1)).wait(113).to({x:71.2,alpha:0},8).to({_off:true},1).wait(247));

	// Слой 5
	this.instance_8 = new lib.txt2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(43.2,156.9,1,1,0,0,0,62.1,43.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:53.2,alpha:0},8).to({_off:true},1).wait(305).to({_off:false,x:43.2},0).to({x:73.2,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:53.2,alpha:0},8).to({_off:true},1).wait(243));

	// ABOUT
	this.instance_9 = new lib.about();
	this.instance_9.parent = this;
	this.instance_9.setTransform(19.6,101.9,1,1,0,0,0,48.6,20.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:29.6,alpha:0},8).to({_off:true},1).wait(305).to({_off:false,x:19.6},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:29.6,alpha:0},8).to({_off:true},1).wait(237));

	// Слой 6
	this.instance_10 = new lib.plate();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,274,1,1,0,0,0,150,23.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({y:226},10,cjs.Ease.get(1)).wait(397).to({y:274},8).to({_off:true},1).wait(19).to({_off:false},0).to({y:226},10,cjs.Ease.get(1)).wait(350));

	// pc-3
	this.instance_11 = new lib.pc3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(446,166.5,1,1,0,0,0,145,111.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150).to({_off:false},0).to({x:295},10,cjs.Ease.get(1)).wait(258).to({x:325,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},9).wait(150).to({_off:false,x:446,alpha:1},0).to({x:295},10,cjs.Ease.get(1)).wait(219));

	// ABOUT
	this.instance_12 = new lib.t24();
	this.instance_12.parent = this;
	this.instance_12.setTransform(19.6,101.9,1,1,0,0,0,48.6,20.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150).to({_off:false},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(111).to({x:29.6,alpha:0},8).to({_off:true},1).wait(305).to({_off:false,x:19.6},0).to({x:49.6,alpha:1},10,cjs.Ease.get(1)).wait(155).to({x:29.6,alpha:0},8).to({_off:true},1).wait(55));

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-65.5,-121.8,8.4,136).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-49.7,-129.1,36.7,123.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-36.7,-135.2,60,113.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-26.5,-139.9,78.3,106.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-19.2,-143.2,91.4,100.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-14.6,-145.3,99.6,97).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-12.8,-146.2,102.8,95.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-13.7,-150.5,100.3,92).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-14.5,-154.9,97.8,88.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-15.4,-159.3,95.3,84.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-16.2,-163.6,92.8,81.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-17.1,-168,90.3,77.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-18,-172.4,87.8,73.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-25.9,-164,74.6,84.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-33.8,-155.5,61.3,94.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-41.7,-147.1,48.1,104.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-49.7,-138.7,34.8,115.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-57.6,-130.3,21.6,125.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-56.7,-125.9,24.1,129.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-48,-130,39.8,122.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-39.2,-134,55.6,115.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-30.4,-138,71.3,109.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_21.setTransform(150,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0.149)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0,0.533,0.545],-21.6,-142.1,87.1,102.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_22.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},150).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},130).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},136).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},150).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},174).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150).to({_off:true},1).wait(283).to({_off:false},0).wait(151).to({_off:true},1).wait(228));

	// Слой 13
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#ECA513","#EC9113"],[0.078,1],0,0,0,0,0,195).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_23.setTransform(150,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#DC8411","#E07412"],[0.055,1],0,0,0,0,0,171.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_24.setTransform(150,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#CF6910","#D65D11"],[0.035,1],0,0,0,0,0,160.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_25.setTransform(150,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#C4540F","#CF4B11"],[0.02,1],0,0,0,0,0,157.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_26.setTransform(150,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#BD440F","#C93E10"],[0.008,1],0,0,0,0,0,159.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_27.setTransform(150,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#B93B0E","#C63610"],[0.004,1],0,0,0,0,0,162.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_28.setTransform(150,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#B7380E","#C53310"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_29.setTransform(150,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#A83E21","#B53D25"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_30.setTransform(150,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#994535","#A5473B"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_31.setTransform(150,125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#8A4B48","#955150"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_32.setTransform(150,125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#7A525B","#865B66"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_33.setTransform(150,125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#6B586E","#76657B"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_34.setTransform(150,125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#5C5F82","#666F91"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_35.setTransform(150,125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#4D6595","#5679A6"],[0,1],-103.1,-126.7,103,126.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_36.setTransform(150,125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#68707F","#6F7D8D"],[0.012,1],-118.4,-105.6,118.4,105.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_37.setTransform(150,125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#827A6A","#888175"],[0.027,1],-133.7,-84.5,133.7,84.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_38.setTransform(150,125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#9D8554","#A1855D"],[0.039,1],-149,-63.3,149,63.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_39.setTransform(150,125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B7903E","#BA8944"],[0.051,1],-164.3,-42.2,164.3,42.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_40.setTransform(150,125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#D19A29","#D38D2C"],[0.067,1],-179.6,-21.1,179.7,21.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_41.setTransform(150,125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#E39312","#E58112"],[0.067,1],0,0,0,0,0,180.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_42.setTransform(150,125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#DA8111","#DF7212"],[0.051,1],0,0,0,0,0,169.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_43.setTransform(150,125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#D26F11","#D96212"],[0.039,1],0,0,0,0,0,161.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_44.setTransform(150,125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#C95C10","#D25211"],[0.027,1],0,0,0,0,0,158.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_45.setTransform(150,125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#C04A0F","#CC4311"],[0.012,1],0,0,0,0,0,158.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_46.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_23}]},144).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},129).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},142).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},144).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},173).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(144).to({_off:true},1).wait(289).to({_off:false},0).wait(145).to({_off:true},1).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.1,125,479,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/HD_300x250_AdWords_MREC_atlas_P_.png", id:"HD_300x250_AdWords_MREC_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;