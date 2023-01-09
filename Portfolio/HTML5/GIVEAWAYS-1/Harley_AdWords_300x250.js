(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Harley_AdWords_300x250_atlas_", frames: [[0,0,300,192],[302,117,144,100],[302,0,165,115],[0,194,81,9]]}
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



(lib.bg = function() {
	this.spriteSheet = ss["Harley_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bike1 = function() {
	this.spriteSheet = ss["Harley_AdWords_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bike2 = function() {
	this.spriteSheet = ss["Harley_AdWords_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.herologo = function() {
	this.spriteSheet = ss["Harley_AdWords_300x250_atlas_"];
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


(lib._with = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE04").s().p("AgKA7QgFgBgEgEQgEgDgCgFQgCgFAAgIIAAgJIASAAIAAAKQAAAFACACQADADAEAAQAEAAACgDQADgDAAgIIAAgbQAAgFgDgCQgCgDgEAAQgDAAgDADQgCACgCADIgPAAIAAgMIABgOIAAgPIAAgTIAxAAIgBARIgfAAIgBAZIAAABQAEgFADgBIAIgBQAMAAAEAIQAFAIAAAOIAAARQAAASgGAJQgGAJgPAAQgGAAgFgBg");
	this.shape.setTransform(162.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEE04").s().p("AADA7IAAgcIgjAAIAAgQIAihJIAUAAIAABJIAKAAIAAAQIgKAAIAAAcgAgQAPIATAAIAAgtIAAAAg");
	this.shape_1.setTransform(154.9,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEE04").s().p("AgcA8IAAgQIARgZIALgTQAFgIADgIQACgHAAgHQAAgHgCgDQgDgDgFAAQgDAAgDADQgCAEAAAFIAAAIIgUAAIAAgFQAAgHACgFQADgGAEgEQADgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAEQADADACAFQACAFAAAFQAAAHgBAHQgBAHgEAIQgFAIgHALIgTAcIAjAAIAAARg");
	this.shape_2.setTransform(147.8,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEE04").s().p("AAPA7IgOhNIgBAAIgNBNIgRAAIgWh1IATAAIAMBKIABAAIANhKIAQAAIAOBKIALhKIATAAIgVB1g");
	this.shape_3.setTransform(138.5,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEE04").s().p("AAPA7IgEgaIgVAAIgEAaIgTAAIAVh1IAYAAIAXB1gAgHAPIAPAAIgIgxg");
	this.shape_4.setTransform(129.5,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEE04").s().p("AgWA1QgIgIAAgPIAAg8QAAgGACgFQACgGAEgEQADgEAGgDQAGgCAHAAQAHAAAFACQAGADAEAFQAEAEACAGQACAGAAAGIAAAIIgUAAIAAgLIgDgHQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgEgBQgEAAgDACQgCADAAAIIAAA8QAAAFACAEQACADAFAAQAFAAADgDQACgEAAgJIAAgMIgMAAIAAgPIAhAAIAAA7IgKAAIgEgJQgFAGgEACQgEADgHAAQgMAAgHgIg");
	this.shape_5.setTransform(121.7,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA7IAAh1IA2AAIAAARIghAAIAAAfIAZAAIAAARIgZAAIAAAiIAkAAIAAASg");
	this.shape_6.setTransform(103.2,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA7IAAh1IAeAAQAPgBAIAJQAIAJAAASIAAAuQAAATgIAIQgIAKgPgBgAgKAqIAHAAQAHABAEgEQADgDAAgKIAAgzQAAgJgDgEQgEgDgHAAIgHAAg");
	this.shape_7.setTransform(95.2,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA6QgGgCgEgEQgEgEgBgGQgCgFAAgHIAAg8QAAgGACgFQABgGAEgEQAEgEAGgDQAGgCAHAAQAIAAAGACQAGADADAEQAEAEACAGQACAFAAAGIAAA8QAAAHgCAFQgCAGgEAEQgDAEgGACQgGADgIAAQgHAAgGgDgAgIgnQgCADAAAHIAAA7QAAAHACADQADADAFAAQAGAAACgDQADgDAAgHIAAg7QAAgHgDgDQgCgDgGAAQgFAAgDADg");
	this.shape_8.setTransform(87,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA6QgFgCgEgEQgEgEgCgGQgCgFAAgHIAAg8QAAgGACgFQACgGAEgEQAEgEAFgDQAGgCAHAAQAIAAAGACQAFADAEAFQAEAEACAGQACAGAAAGIAAAJIgVAAIAAgJQAAgIgDgDQgDgDgEAAQgFAAgCADQgCADAAAHIAAA7QAAAHACADQACADAFAAQAGAAACgDQACgDAAgGIAAgOIAVAAIAAANQAAAHgCAFQgCAGgEAEQgEAFgFABQgGADgIAAQgHAAgGgDg");
	this.shape_9.setTransform(78.7,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNA6QgGgCgEgEQgEgEgBgGQgCgFAAgHIAAg8QAAgGACgFQABgGAEgEQAEgEAGgDQAGgCAHAAQAIAAAGACQAGADADAEQAEAEACAGQACAFAAAGIAAA8QAAAHgCAFQgCAGgEAEQgDAEgGACQgGADgIAAQgHAAgGgDgAgIgnQgCADAAAHIAAA7QAAAHACADQADADAFAAQAGAAACgDQADgDAAgHIAAg7QAAgHgDgDQgCgDgGAAQgFAAgDADg");
	this.shape_10.setTransform(66.9,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYA7IAAhbIgBAAIgSBbIgJAAIgShbIgBAAIAABbIgRAAIAAh1IAaAAIAOBEIAAAAIAPhEIAaAAIAAB1g");
	this.shape_11.setTransform(57.7,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNA6QgGgCgEgEQgEgEgBgGQgCgFAAgHIAAg8QAAgGACgFQABgGAEgEQAEgEAGgDQAGgCAHAAQAIAAAGACQAGADADAEQAEAEACAGQACAFAAAGIAAA8QAAAHgCAFQgCAGgEAEQgDAEgGACQgGADgIAAQgHAAgGgDgAgIgnQgCADAAAHIAAA7QAAAHACADQADADAFAAQAGAAACgDQADgDAAgHIAAg7QAAgHgDgDQgCgDgGAAQgFAAgDADg");
	this.shape_12.setTransform(48.6,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMA7IgNgwIgFAAIgFAAIAAAwIgVAAIAAh1IAdAAQAQgBAIAJQAJAIAAATIgBAMIgDAJIgFAFIgFACIARA2gAgLgFIAGAAIAGgBQADgBACgBIADgGIAAgJQAAgLgDgEQgDgDgIAAIgGAAg");
	this.shape_13.setTransform(40.6,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggA7IAAh1IAdAAQASgBAJAJQAJAIAAATQAAAKgCAGQgCAHgFADQgFAEgGACQgIACgIAAIgJAAIAAAwgAgMgFIAIAAIAIgBQADgBACgBIADgGIABgJIgBgJQgBgEgCgCQgCgCgDgBIgIAAIgIAAg");
	this.shape_14.setTransform(32.3,11.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbA7IAAh1IA1AAIAAARIghAAIAAAfIAZAAIAAARIgZAAIAAAiIAkAAIAAASg");
	this.shape_15.setTransform(20.9,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNA6QgFgCgEgFQgEgEgCgGQgCgGgBgGIAUgEQAAAKAEAEQADAFAEgBQAGAAADgDQADgCAAgGQAAgFgDgFIgHgJIgJgJQgGgDgEgFQgGgFgCgGQgDgHAAgJQgBgOAJgHQAIgIAOAAQAGAAAFACQAGACADAEQAEAEACAGQACAEAAAHIgTACQAAgEgBgCIgDgFIgEgBIgDgBQgEAAgDADQgCADAAAFQAAAFADAFIAHAIIAKAJIAKAIQAFAGACAGQADAGAAAIQAAAIgCAGQgDAFgEAFQgDADgHACQgFACgHAAQgHAAgGgDg");
	this.shape_16.setTransform(13.4,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWA0QgIgIAAgPIAAhYIAUAAIAABZQAAANAKAAQALAAAAgNIAAhZIAUAAIAABYQAAAPgIAIQgJAIgOAAQgOAAgIgIg");
	this.shape_17.setTransform(5.6,11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFEE04").s().p("AD8AAIAhggIAhAgIghAhgAk+AAIAiggIAhAgIghAhg");
	this.shape_18.setTransform(141.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._with, new cjs.Rectangle(0.3,0.3,173.5,22.2), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA0IAQgUIAMAJQAHAFAHgBQAHAAAFgEQAFgFAAgHQAAgGgFgGQgFgEgKgFQgKgEgFgEQgEgCgEgHQgFgHAAgLQAAgSANgMQAOgMATAAQAUAAASAQIgPAVIgNgJQgFgDgFAAQgIAAgEAFQgFAEAAAHQAAAHAGAEQAEAFANAFIAOAJQAEADADAIQAEAGAAAIQAAATgNAMQgOAMgSAAQgWAAgVgSg");
	this.shape.setTransform(129.2,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBEIAWiHIBJAAIgFAYIgsAAIgEAeIAqAAIgEAXIgqAAIgFAiIArAAIgEAYg");
	this.shape_1.setTransform(120.6,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBEIAUiHIAcAAIgPBvIAsAAIgEAYg");
	this.shape_2.setTransform(110.7,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA0QgRgUAAgaQAAgiAXgVQAXgVAbAAQAZAAARAMIgEAZQgNgLgTAAQgUgBgOAQQgQAOAAATQAAASALALQALALARAAQAQAAASgKIgEAcQgRAIgRABQgdgBgSgSg");
	this.shape_3.setTransform(100.7,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBEIAJg/IghhIIAbAAIAWAvIAhgvIAgAAIg2BJIgIA+g");
	this.shape_4.setTransform(89.3,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA0QgRgUAAgaQAAgiAXgVQAXgVAbAAQAZAAARAMIgEAZQgNgLgTAAQgUgBgOAQQgQAOAAATQAAASALALQALALARAAQAQAAASgKIgEAcQgRAIgRABQgdgBgSgSg");
	this.shape_5.setTransform(75.8,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPBEIgYgxIgEAAIgIAxIgcAAIAUiHIAaAAQAaAAANAKQANALABAUQgBAPgHALQgHANgSADIAbA0gAgKgFIAGABQAKAAAHgGQAIgGAAgJQAAgKgHgEQgFgEgNAAg");
	this.shape_6.setTransform(63.5,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A0QgSgSAAgfQABgfAVgUQAVgVAhAAQAfAAAQARQARASAAAgQAAAggUAUQgWAUggAAQgfAAgRgSgAgbgfQgOAPAAASQAAATALANQALAMARAAQASAAANgPQANgOAAgTQAAgTgKgMQgMgMgRAAQgRAAgNAOg");
	this.shape_7.setTransform(50.1,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBEIAQhvIgbAAIACgYIBTAAIgDAYIgcAAIgQBvg");
	this.shape_8.setTransform(38.7,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0A0QgSgSAAgfQABgfAVgUQAVgVAhAAQAfAAARARQAQASABAgQgBAggUAUQgWAUghAAQgeAAgRgSgAgbgfQgOAPAAASQAAATALANQALAMARAAQASAAANgPQANgOAAgTQAAgTgKgMQgMgMgRAAQgRAAgNAOg");
	this.shape_9.setTransform(25.3,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzBEIAAhQIgqBQIgMAAIgQhUIgdBUIgbAAIAviHIAaAAIANBLIAnhLIAaAAIAACHg");
	this.shape_10.setTransform(8.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,135.5,26.4), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE04").s().p("AAkB1IhOihIgXChIgxAAIAjjoIAxAAIBKCbIAXibIAwAAIgiDog");
	this.shape.setTransform(280.2,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEE04").s().p("AgJB4QgzAAgegfQgdgfAAg1QAAg1AkgjQAlgkA3AAQA1AAAdAeQAdAfAAA2QAAA3gkAjQgjAig4AAIgCAAgAgwg1QgXAZAAAgQAAAhATAUQATAVAdAAQAeAAAYgYQAWgYAAghQAAghgTgVQgSgUgeAAQgeAAgXAYg");
	this.shape_1.setTransform(255,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEE04").s().p("AhRBZIAbghIAVAOQAMAIAMAAQAMAAAJgJQAJgIAAgMQAAgLgJgIQgJgIgRgIQgSgHgIgGQgHgFgIgMQgHgMAAgTQAAgfAWgUQAXgVAiAAQAiAAAfAcIgaAiQgNgJgJgFQgJgFgIAAQgOAAgHAIQgJAIAAAMQAAAKAKAIQAIAIAWAJQASALAGAFQAHAGAGAMQAFAMAAAOQAAAegWAVQgXAWgfAAQgnAAgjgfg");
	this.shape_2.setTransform(233.6,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEE04").s().p("AhkB1IAijoIA8AAQAWAAAbAKQAaAKAQAZQAQAZAAAiQAAAegMAaQgLAagTAQQgVASgTAGQgTAFgaABgAgsBEIARAAQAqABASgXQASgWAAgkQAAgagRgOQgQgQgcAAIgPAAg");
	this.shape_3.setTransform(215.3,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEE04").s().p("AgpB1IAjjoIAvAAIgiDog");
	this.shape_4.setTransform(201,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFEE04").s().p("Ag2B1IgzjoIAsAAIAkCjIBTijIAwAAIh2Dog");
	this.shape_5.setTransform(187.3,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEE04").s().p("ABAB1IgMgwIhVAAIgZAwIgyAAIB8joIAiAAIA7DogAgMAdIA2AAIgShEg");
	this.shape_6.setTransform(161.5,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFEE04").s().p("AhkB1IAijoIA8AAQAWAAAbAKQAaAKAQAZQAQAZAAAiQAAAegLAaQgMAagUAQQgTASgUAGQgTAFgaABgAgsBEIASAAQApABASgXQASgWAAgkQAAgagQgOQgRgQgbAAIgQAAg");
	this.shape_7.setTransform(140.4,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEE04").s().p("AgyATIAFgmIBgAAIgGAmg");
	this.shape_8.setTransform(124.3,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFEE04").s().p("Ag3B1IAPhrIg5h9IAvAAIAlBRIA6hRIA1AAIhbB9IgPBrg");
	this.shape_9.setTransform(110.1,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFEE04").s().p("AhQB1IAjjoIB+AAIgHAoIhNAAIgHA0IBJAAIgHApIhJAAIgIA5IBKAAIgGAqg");
	this.shape_10.setTransform(90.3,22.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFEE04").s().p("AhBB1IAjjoIAuAAIgaC+IBMAAIgGAqg");
	this.shape_11.setTransform(73.3,22.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFEE04").s().p("AAbB1IgrhVIgHAAIgNBVIgvAAIAijoIAsAAQArgBAYATQAXASgBAhQAAAcgMATQgMAVgeAGIAtBZgAgRgIIAKAAQARAAANgLQAMgJAAgPQABgRgLgHQgKgHgWgBg");
	this.shape_12.setTransform(56.3,22.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFEE04").s().p("ABAB1IgMgwIhWAAIgZAwIgxAAIB8joIAiAAIA7DogAgLAdIA1AAIgRhEg");
	this.shape_13.setTransform(34.3,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFEE04").s().p("AAbB1IAOhiIhXAAIgOBiIgxAAIAijoIAxAAIgMBWIBWAAIANhWIAxAAIgjDog");
	this.shape_14.setTransform(13.5,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,294.4,45), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0A0QgRgSAAgfQAAgfAVgUQAVgVAgAAQAfAAARARQASASgBAgQAAAggUAUQgWAUggAAQgfAAgRgSgAgcgfQgNAPAAASQAAATALANQALAMARAAQARAAAOgPQANgOAAgTQAAgTgKgMQgLgMgSAAQgRAAgOAOg");
	this.shape.setTransform(76,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBEIgLhNIgeBNIgWAAIgViHIAaAAIANBRIAhhRIAOAAIANBSIAhhSIAbAAIg2CHg");
	this.shape_1.setTransform(60.5,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBEIAQhvIgbAAIADgYIBSAAIgDAYIgcAAIgPBvg");
	this.shape_2.setTransform(47.6,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBEIgthdIgOBdIgcAAIAUiHIAdAAIAqBaIAOhaIAcAAIgUCHg");
	this.shape_3.setTransform(29.8,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXBEIAUiHIAbAAIgUCHg");
	this.shape_4.setTransform(20.7,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFBEIgLhNIgeBNIgWAAIgViHIAaAAIANBRIAhhRIAOAAIANBSIAhhSIAbAAIg2CHg");
	this.shape_5.setTransform(11,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,85.5,26.4), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.herologo();
	this.instance.parent = this;
	this.instance.setTransform(8,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFED03").s().p("AngBfIAAi9IPBAAIAAC9g");
	this.shape.setTransform(48.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,-0.9,96.2,19), null);


(lib.Lights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(51,210,255,0.612)","rgba(51,203,255,0)"],[0,1],0.1,0,0,0.1,0,6.2).s().p("AgDA8QgWgEgNgUQgOgUABgYQADgaAQgOQARgPAUAEQAVAEAPAUQAMAVgBAXQgCAZgQAPQgNAMgQAAIgIgBg");
	this.shape.setTransform(-21.6,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(130,216,255,0.557)","rgba(153,214,255,0)"],[0.004,1],0.1,0,0,0.1,0,12.7).s().p("AhUB3Qg1ghgOg6QgMg5AjgxQAkgxA+gMQA/gLA1AhQA1AgANA6QAMA5gjAxQgjAyg/ALQgRADgPAAQgsAAgngYg");
	this.shape_1.setTransform(-22.6,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(208,222,255,0.498)","rgba(255,224,255,0)"],[0.004,1],0,0,0,0,0,26.7).s().p("AiCDKQhcgugchbQgbhaA2hUQA2hTBogbQBogbBcAuQBdAtAbBbQAbBag2BTQg2BUhoAaQgoALgkAAQg+AAg6gcg");
	this.shape_2.setTransform(-23.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(169,219,255,0.525)","rgba(204,219,255,0)"],[0.004,1],0.1,0,0,0.1,0,19.6).s().p("AhqChQhJgogVhKQgUhKAthCQAthCBTgUQBTgTBJAnQBIAnAUBLQAVBJgtBDQgtBChTATQgdAGgZAAQg1AAgwgZg");
	this.shape_3.setTransform(-23.2,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(90,213,255,0.584)","rgba(102,208,255,0)"],[0,1],0.1,0,0,0.1,0,6.8).s().p("Ag9BNQgigagGgqQgFgpAaggQAaggAqgDQApgEAiAbQAhAaAGAqQAFAogaAgQgZAggrAEIgLAAQgjAAgcgXg");
	this.shape_4.setTransform(-22.1,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,16.2,10.4,12.3);


(lib.bonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbB4QgLgGgIgJQgIgJgEgNQgFgMgBgNIApgGQAAASAIAKQAGAJAKAAQAKAAAHgGQAGgGAAgLQAAgMgFgJQgHgKgJgJIgUgRQgLgJgKgJQgJgLgGgNQgGgNAAgSQgBgdASgQQARgPAdAAQANAAALAEQAJAEAHAIQAIAIAFALQAEALABANIgoAEQAAgIgCgFQgDgFgDgDIgHgFIgGgBQgJAAgGAGQgFAHgBALQAAAKAHAJQAGAJAJAJIAUARQALAJAJAKQAKALAHANQAFANABARQgBAPgFALQgEAMgJAIQgJAIgMAEQgMAEgOAAQgOAAgMgFg");
	this.shape.setTransform(182.7,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUB6IAAjOIgpAAIAAglIB7AAIAAAlIgpAAIAADOg");
	this.shape_1.setTransform(168.7,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5B6IAAjzIBvAAIAAAlIhGAAIAAA/IA2AAIAAAjIg2AAIAABIIBKAAIAAAkg");
	this.shape_2.setTransform(155,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYB6IghhyIgBAAIgPAbIAABXIgpAAIAAjzIApAAIAABbIACAAIAqhbIAqAAIgtBbIAzCYg");
	this.shape_3.setTransform(140.7,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaB4QgNgFgHgIQgIgJgFgLQgDgMAAgMIAAh9QAAgNADgLQAFgMAIgIQAHgJANgFQAMgEAPAAQAQAAALAFQAMAFAIAJQAHAKAEAMQAEAMAAANIAAASIgqAAIAAgTQAAgPgGgHQgGgHgIAAQgMAAgFAHQgEAGgBAOIAAB7QABANAEAHQAFAHAMAAQAMAAAEgHQAEgGAAgMIAAgdIAqAAIAAAcQAAAMgEAMQgEALgHAJQgIAIgMAFQgLAFgQAAQgPAAgMgFg");
	this.shape_4.setTransform(123.6,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUB6IAAjzIApAAIAADzg");
	this.shape_5.setTransform(110.6,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUB6IAAjOIgpAAIAAglIB6AAIAAAlIgoAAIAADOg");
	this.shape_6.setTransform(99.3,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbB4QgLgGgIgJQgIgJgFgNQgEgMAAgNIAogGQAAASAIAKQAGAJAKAAQAKAAAHgGQAHgGgBgLQAAgMgFgJQgHgKgKgJIgTgRQgLgJgKgJQgJgLgGgNQgGgNgBgSQABgdARgQQAQgPAeAAQANAAALAEQAKAEAHAIQAHAIAFALQAEALACANIgpAEQAAgIgCgFQgCgFgEgDIgGgFIgHgBQgKAAgFAGQgGAHAAALQABAKAFAJQAHAJAJAJIAUARQALAJAJAKQAKALAGANQAHANAAARQAAAPgGALQgEAMgJAIQgIAIgNAEQgNAEgNAAQgOAAgMgFg");
	this.shape_7.setTransform(77.6,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBrQgRgRAAgfIAAi2IApAAIAAC3QAAAbAWAAQAWAAAAgbIAAi3IAqAAIAAC2QAAAfgRARQgRARgeAAQgdAAgRgRg");
	this.shape_8.setTransform(61.8,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcB6Ig1iYIAAAAIAACYIgmAAIAAjzIAmAAIAzCKIABAAIAAiKIAlAAIAADzg");
	this.shape_9.setTransform(44.9,22.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcB4QgLgFgJgIQgHgJgEgLQgEgMAAgMIAAh9QAAgNAEgLQAEgMAHgIQAJgJALgFQAMgEAQAAQAQAAANAEQALAFAIAJQAJAIADAMQAEALAAANIAAB9QAAAMgEAMQgDALgJAJQgIAIgLAFQgNAFgQAAQgQAAgMgFgAgQhRQgGAGAAAOIAAB7QAAANAGAHQAEAHAMAAQANAAAFgHQAEgHAAgNIAAh7QAAgOgEgGQgFgHgNAAQgMAAgEAHg");
	this.shape_10.setTransform(28,22.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBB6IAAjzIA+AAQAhAAAQARQAPAQAAAgQAAAIgCAHQgBAIgEAHQgDAGgGAGQgGAFgHAEQAQAFAJAOQAJANAAAYQAAAPgEANQgDANgIAKQgIAJgMAFQgNAGgSAAgAgXBXIASAAQAPAAAHgJQAHgJAAgTQAAgTgIgJQgIgKgSABIgNAAgAgXgVIAPAAQALAAAIgIQAIgIAAgPQAAgjgaABIgQAAg");
	this.shape_11.setTransform(11.3,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bonus, new cjs.Rectangle(0,0,192.9,45.6), null);


(lib.bike2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bike2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bike2_1, new cjs.Rectangle(0,0,165,115), null);


(lib.bike1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bike1();
	this.instance.parent = this;
	this.instance.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bike1_1, new cjs.Rectangle(0,4,144,100), null);


(lib.bgpc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgpc, new cjs.Rectangle(0,0,300,192), null);


(lib._50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE04").s().p("AiJDVIDqmpIAqAAIjqGpgABADIQgSgIgMgMQgMgNgIgRQgIgRABgUQgBgTAIgSQAIgRAMgNQAMgMASgHQARgIATAAQAUAAARAIQARAHANAMQANANAHARQAIASAAATQAAAUgIARQgHARgNANQgNAMgRAIQgRAHgUAAQgTAAgRgHgABCBPQgOAOABAUQgBAUAOAOQAPAOATAAQAVAAAOgOQANgOAAgUQAAgUgNgOQgOgOgVAAQgTAAgPAOgAiIgZQgRgIgNgMQgNgNgHgRQgIgRAAgUQAAgUAIgRQAHgRANgNQANgMARgIQARgHAUAAQAUAAARAHQARAIAMAMQANANAHARQAIARAAAUQAAAUgIARQgHARgNANQgMAMgRAIQgRAHgUAAQgUAAgRgHgAiGiSQgOAOAAAUQAAAUAOAOQAOAOAVAAQAUAAAOgOQAOgOAAgUQAAgUgOgOQgOgOgUAAQgVAAgOAOg");
	this.shape.setTransform(77.8,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEE04").s().p("AhMC6QgYgbAAg8IAAjFQAAg7AYgcQAXgbA1AAQA1AAAYAbQAYAcAAA7IAADFQAAA8gYAbQgYAbg1AAQg1AAgXgbgAggh0IAADpQAAAoAgAAQAhAAAAgoIAAjpQAAgnghAAQggAAAAAng");
	this.shape_1.setTransform(42.8,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEE04").s().p("AgkDNQgUgEgNgMQgOgLgHgSQgIgTAAgZIAAgfIBAAAIAAAhQAAAQAJAKQAIAKAOAAQAQAAAJgMQAJgKAAgcIAAheQABgUgKgJQgIgIgMgBQgQAAgJAKQgIAJgEANIg3AAIABguIACgvIABg2IAAhCICsAAIgDA7IhuAAIgEBaIABABQANgQAMgEQAMgFAQAAQApAAASAcQARAdAAAzIAAA6QAABBgWAfQgXAggzAAQgVAAgSgFg");
	this.shape_2.setTransform(17.3,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._50, new cjs.Rectangle(0,0,104.6,77.4), null);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAcIAKgNQAIAIAGAAQACAAADgCQACgEABgDQAAgFgMgFIgKgEQgDgCgCgEQgCgEAAgFQAAgKAGgHQAHgGAJAAQANAAAJAIIgLALQgHgEgEAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgDACAAAEQABAFAIAEQAIADAEADQADABADAFQADAEAAAGQAAAJgIAIQgIAHgJAAQgMAAgMgLg");
	this.shape.setTransform(61.6,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAmIgGgPIgcAAIgFAPIgRAAIAehLIAMAAIAfBLgAgIAKIARAAIgJgWg");
	this.shape_1.setTransform(54.8,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAcQgLgLAAgRQAAgQALgKQAMgMAOAAQAUAAALARIgLALQgDgGgFgDQgFgDgGAAQgIAAgGAHQgHAGAAAJQAAAKAHAGQAGAHAIAAQAFAAAFgCQAFgDADgHIgSAAIAAgOIAjAAIAAAJQAAAHgGAJQgFAJgIAEQgJAEgIAAQgPAAgLgLg");
	this.shape_2.setTransform(46.6,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAmIAAhLIApAAIAAAPIgZAAIAAAQIAZAAIAAANIgZAAIAAAfg");
	this.shape_3.setTransform(36.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAcQgLgLAAgRQAAgQALgLQALgLAPAAQAQAAALALQALALAAAQQAAARgLALQgKALgRAAQgQAAgKgLgAgOgQQgGAHAAAJQAAAKAGAHQAGAHAIAAQAKAAAFgHQAGgGAAgLQAAgKgFgGQgGgHgKAAQgIAAgGAHg");
	this.shape_4.setTransform(29.3,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAmIgTgeIgCAAIAAAeIgQAAIAAhLIAZAAQAKAAAHAGQAGAGAAALQAAAFgDAHQgDAFgIAEIAVAfgAgLgDIAEAAQAMAAAAgLQAAgEgEgDQgCgCgGAAIgEAAg");
	this.shape_5.setTransform(61.2,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUAmIgFgPIgdAAIgFAPIgRAAIAehLIAMAAIAfBLgAgIAJIARAAIgJgVg");
	this.shape_6.setTransform(53.5,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAmIAAhLIApAAIAAAPIgZAAIAAAPIAZAAIAAAOIgZAAIAAAQIAZAAIAAAPg");
	this.shape_7.setTransform(46.7,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAmIAAgjIgYgoIASAAIANAYIAOgYIASAAIgYAoIAAAjg");
	this.shape_8.setTransform(40.3,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCAlIAAg7IgLAAIAEgOIAWAAIAABJg");
	this.shape_9.setTransform(30.1,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAgIAAgaIgaAAIAAgMIAaAAIAAgZIALAAIAAAZIAaAAIAAAMIgaAAIAAAag");
	this.shape_10.setTransform(23.5,7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,235,0,0)","#FFEB00"],[0,1],-35.1,-0.8,-3.4,-0.8).s().p("AleB8IAAj3IK9AAIAAD3g");
	this.shape_11.setTransform(35.1,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(0,0,70.2,25.8), null);


// stage content:
(lib.Harley_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_829 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(829).call(this.frame_829).wait(11));

	// with
	this.instance = new lib._with();
	this.instance.parent = this;
	this.instance.setTransform(199.3,236.3,1,1,0,0,0,94.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(840));

	// bonus
	this.instance_1 = new lib.bonus();
	this.instance_1.parent = this;
	this.instance_1.setTransform(199.1,211.7,1,1,0,0,0,96.5,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(840));

	// 50
	this.instance_2 = new lib._50();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.1,220.7,1,1,0,0,0,52.3,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(840));

	// Слой 13
	this.instance_3 = new lib.Lights();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.1,98.3,1.416,1.416,0,0,0,-23,21.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({_off:true},6).wait(96).to({_off:false,regX:0,regY:0,x:185.6,y:67.3},0).to({_off:true},6).wait(162).to({_off:false,regX:-23,regY:21.9,x:153.1,y:98.3},0).to({_off:true},6).wait(96).to({_off:false,regX:0,regY:0,x:185.6,y:67.3},0).to({_off:true},6).wait(162).to({_off:false,regX:-23,regY:21.9,x:153.1,y:98.3},0).to({_off:true},6).wait(96).to({_off:false,regX:0,regY:0,x:185.6,y:67.3},0).to({_off:true},6).wait(92));

	// Слой 14
	this.instance_4 = new lib.Lights();
	this.instance_4.parent = this;
	this.instance_4.setTransform(44.1,95.2,0.769,0.769,0,0,0,-23.1,21.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({_off:false},0).to({_off:true},6).wait(95).to({_off:false},0).to({_off:true},6).wait(163).to({_off:false},0).to({_off:true},6).wait(95).to({_off:false},0).to({_off:true},6).wait(163).to({_off:false},0).to({_off:true},6).wait(95).to({_off:false},0).to({_off:true},6).wait(83));

	// +1
	this.instance_5 = new lib._1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(274.9,85.9,1,1,0,0,0,35.1,12.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).to({x:264.9,alpha:1},8).to({_off:true},205).wait(57).to({_off:false,x:274.9,alpha:0},0).to({x:264.9,alpha:1},8).to({_off:true},205).wait(57).to({_off:false,x:274.9,alpha:0},0).to({x:264.9,alpha:1},8).wait(235));

	// txt-3
	this.instance_6 = new lib.txt3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(267.5,72.3,1,1,0,0,0,67.8,13.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({x:227.5,y:62.3,alpha:1},12,cjs.Ease.get(1)).to({_off:true},213).wait(45).to({_off:false,x:267.5,y:72.3,alpha:0},0).to({x:227.5,y:62.3,alpha:1},12,cjs.Ease.get(1)).to({_off:true},213).wait(45).to({_off:false,x:267.5,y:72.3,alpha:0},0).to({x:227.5,y:62.3,alpha:1},12,cjs.Ease.get(1)).wait(243));

	// txt-2
	this.instance_7 = new lib.txt2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.2,89.3,1,1,0,0,0,147.2,22.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({_off:false},0).to({y:49.3,alpha:1},12,cjs.Ease.get(1)).wait(10).to({y:39.3},12,cjs.Ease.get(1)).to({_off:true},213).wait(23).to({_off:false,y:89.3,alpha:0},0).to({y:49.3,alpha:1},12,cjs.Ease.get(1)).wait(10).to({y:39.3},12,cjs.Ease.get(1)).to({_off:true},213).wait(23).to({_off:false,y:89.3,alpha:0},0).to({y:49.3,alpha:1},12,cjs.Ease.get(1)).wait(10).to({y:39.3},12,cjs.Ease.get(1)).wait(243));

	// txt-1
	this.instance_8 = new lib.txt1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(142.1,50.1,0.62,0.62,0,0,0,42.8,13.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:13.3,scaleX:1.96,scaleY:1.96,x:147.4,y:47.7,alpha:1},11,cjs.Ease.get(1)).wait(12).to({regY:13.2,scaleX:1,scaleY:1,x:46.3,y:25.1},12,cjs.Ease.get(1)).wait(10).to({y:15.1},12,cjs.Ease.get(1)).wait(213).to({scaleX:0.62,scaleY:0.62,x:142.1,y:50.1,alpha:0},0).to({regY:13.3,scaleX:1.96,scaleY:1.96,x:147.4,y:47.7,alpha:1},11,cjs.Ease.get(1)).wait(12).to({regY:13.2,scaleX:1,scaleY:1,x:46.3,y:25.1},12,cjs.Ease.get(1)).wait(10).to({y:15.1},12,cjs.Ease.get(1)).wait(213).to({scaleX:0.62,scaleY:0.62,x:142.1,y:50.1,alpha:0},0).to({regY:13.3,scaleX:1.96,scaleY:1.96,x:147.4,y:47.7,alpha:1},11,cjs.Ease.get(1)).wait(12).to({regY:13.2,scaleX:1,scaleY:1,x:46.3,y:25.1},12,cjs.Ease.get(1)).wait(10).to({y:15.1},12,cjs.Ease.get(1)).wait(243));

	// logo
	this.instance_9 = new lib.logo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(47.9,179.6,1,1,0,0,0,48.1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(840));

	// bike-2
	this.instance_10 = new lib.bike2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(369.2,101.8,0.794,0.794,0,0,0,82.5,57.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45).to({_off:false},0).to({scaleX:1,scaleY:1,x:190.2,y:131},12,cjs.Ease.get(1)).to({_off:true},213).wait(45).to({_off:false,scaleX:0.79,scaleY:0.79,x:369.2,y:101.8},0).to({scaleX:1,scaleY:1,x:190.2,y:131},12,cjs.Ease.get(1)).to({_off:true},213).wait(45).to({_off:false,scaleX:0.79,scaleY:0.79,x:369.2,y:101.8},0).to({scaleX:1,scaleY:1,x:190.2,y:131},12,cjs.Ease.get(1)).wait(243));

	// bike-1
	this.instance_11 = new lib.bike1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(325,102.6,0.361,0.361,0,0,0,72,50.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({regY:50,scaleX:1,scaleY:1,x:86.9,y:112.5},12).to({_off:true},235).wait(23).to({_off:false,regY:50.1,scaleX:0.36,scaleY:0.36,x:325,y:102.6},0).to({regY:50,scaleX:1,scaleY:1,x:86.9,y:112.5},12).to({_off:true},235).wait(23).to({_off:false,regY:50.1,scaleX:0.36,scaleY:0.36,x:325,y:102.6},0).to({regY:50,scaleX:1,scaleY:1,x:86.9,y:112.5},12).wait(265));

	// red
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC202C").s().p("A3bAQIAAgfMAu3AAAIAAAfg");
	this.shape.setTransform(150,190.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(840));

	// black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-475.6,18.5,-225.3,268.8).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_1.setTransform(150,221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-507.9,-13.8,-193.1,301).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_2.setTransform(150,221);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-485.8,-17.3,-169.8,298.7).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_3.setTransform(150,221);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-463.7,-20.8,-146.5,296.4).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_4.setTransform(150,221);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-441.6,-24.3,-123.2,294.1).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_5.setTransform(150,221);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-419.6,-27.9,-99.9,291.8).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_6.setTransform(150,221);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-397.5,-31.4,-76.6,289.5).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_7.setTransform(150,221);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-375.4,-34.9,-53.2,287.2).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_8.setTransform(150,221);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-353.4,-38.5,-30,284.9).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_9.setTransform(150,221);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-331.3,-42,-6.7,282.6).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_10.setTransform(150,221);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-309.2,-45.5,16.7,280.3).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_11.setTransform(150,221);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-287.1,-49.1,40,278).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_12.setTransform(150,221);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-265.1,-52.6,63.2,275.7).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_13.setTransform(150,221);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-243,-56.1,86.5,273.4).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_14.setTransform(150,221);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-220.9,-59.6,109.9,271.1).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_15.setTransform(150,221);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-198.8,-63.2,133.2,268.8).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_16.setTransform(150,221);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-176.7,-66.7,156.5,266.5).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_17.setTransform(150,221);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-154.7,-70.2,179.7,264.2).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_18.setTransform(150,221);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-132.6,-73.8,203,261.8).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_19.setTransform(150,221);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-110.5,-77.3,226.4,259.6).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_20.setTransform(150,221);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-88.4,-80.9,249.7,257.2).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_21.setTransform(150,221);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-66.4,-84.4,272.9,254.9).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_22.setTransform(150,221);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-44.3,-87.9,296.3,252.7).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_23.setTransform(150,221);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-22.2,-91.5,319.6,250.3).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_24.setTransform(150,221);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],-0.1,-95,342.9,248).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_25.setTransform(150,221);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],22,-98.5,366.2,245.8).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_26.setTransform(150,221);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],44,-102.1,389.5,243.4).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_27.setTransform(150,221);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],66.1,-105.6,412.8,241.1).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_28.setTransform(150,221);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],88.2,-109.1,436.1,238.8).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_29.setTransform(150,221);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],110.3,-112.6,459.4,236.5).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_30.setTransform(150,221);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],132.3,-116.2,482.7,234.2).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_31.setTransform(150,221);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],154.4,-119.7,506,231.9).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_32.setTransform(150,221);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],176.5,-123.2,529.3,229.6).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_33.setTransform(150,221);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],198.5,-126.8,552.6,227.3).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_34.setTransform(150,221);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],220.6,-130.3,575.9,225).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_35.setTransform(150,221);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],242.7,-133.8,599.2,222.7).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_36.setTransform(150,221);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#000000","#000000","#333333","#000000","#000000"],[0,0.192,0.38,0.584,1],264.8,-137.3,622.5,220.4).s().p("A3bEiIAApDMAu3AAAIAAJDg");
	this.shape_37.setTransform(150,221);
	this.shape_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},65).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_2}]},16).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_2}]},16).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_1}]},68).to({state:[{t:this.shape_2}]},65).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_2}]},16).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_2}]},16).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_1}]},68).to({state:[{t:this.shape_2}]},65).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_2}]},16).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_2}]},16).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(65).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(66).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(67).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(68).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(69).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(70).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(71).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(72).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(73).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(74).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(75).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(76).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(77).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(78).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(79).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(80).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(81).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(82).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(83).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(84).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(85).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(86).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(111));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(87).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(88).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(89).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(90).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(91).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(92).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(93).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(94).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(95).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(96).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(97).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(98).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(99).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(167).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false},0).to({_off:true},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(100).to({_off:false},0).to({_off:true},16).wait(35).to({_off:false},0).to({_off:true},16).wait(35).to({_off:false},0).to({_off:true},68).wait(100).to({_off:false},0).to({_off:true},16).wait(35).to({_off:false},0).to({_off:true},16).wait(35).to({_off:false},0).to({_off:true},68).wait(100).to({_off:false},0).to({_off:true},16).wait(35).to({_off:false},0).to({_off:true},16).wait(35).to({_off:false},0).wait(98));

	// bg-pc
	this.instance_12 = new lib.bgpc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,96,1,1,0,0,0,150,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(840));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.8,125,300.2,259.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Harley_AdWords_300x250_atlas_.png", id:"Harley_AdWords_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;