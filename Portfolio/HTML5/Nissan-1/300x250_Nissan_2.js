(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_Nissan_2_atlas_P_", frames: [[0,137,216,117],[0,0,283,135],[218,137,55,55]]},
		{name:"300x250_Nissan_2_atlas_NP_", frames: [[0,0,409,131],[0,133,300,160]]}
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



(lib.mount = function() {
	this.spriteSheet = ss["300x250_Nissan_2_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.snow = function() {
	this.spriteSheet = ss["300x250_Nissan_2_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Snow_sprite = function() {
	this.spriteSheet = ss["300x250_Nissan_2_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.trail = function() {
	this.spriteSheet = ss["300x250_Nissan_2_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wheels2 = function() {
	this.spriteSheet = ss["300x250_Nissan_2_atlas_P_"];
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


(lib.white_pl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white_pl, new cjs.Rectangle(0,0,300,250), null);


(lib.wh_moove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheels2();
	this.instance.parent = this;
	this.instance.setTransform(-1.3,-0.3,2.436,2.436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wh_moove, new cjs.Rectangle(-1.3,-0.3,134,134), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D95442").s().p("Ag1CZIA5kxIAyAAIg5Exg");
	this.shape.setTransform(115.3,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D95442").s().p("AgzCUIAnjQIAyAAIgnDQgAAChiQgGgHABgMQAAgOAHgIQAJgIANAAQALAAAIAHQAHAHAAANQAAAOgJAHQgJAIgNABQgLgBgIgHg");
	this.shape_1.setTransform(104.4,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D95442").s().p("AgrBtQgcAAgRgUQgQgTgBggQABgbAIgZQAKgaASgVQATgWAcgMQAagNAlAAQARAAARADQARACANAEIgWBsQgDAQgCASIgEAhIAAAdIguAAIABgWIADgaIgCAAQgQAdgSAMQgSALgUAAIgCAAgAgMg2QgTAOgLAXQgLAWAAAYQAAARAIALQAGALAQABQAMAAALgKQANgJAKgTQAKgSAFgZIALg3QgDgCgGAAIgLgBQgYABgRAPg");
	this.shape_2.setTransform(86.8,56.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D95442").s().p("AhLBrIAZiAIAGgsIAFgkIAqAAIgDAVIgBAXIABAAQAKgVARgOQAQgOAWAAIAFAAIAGABIgKAxIgFgBIgEAAQgTAAgNALQgNALgJASQgIARgEAXIgQBUg");
	this.shape_3.setTransform(69.1,56.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D95442").s().p("AhLCRIAvj1IhRAAIAJgsIDSAAIgJAsIhRAAIgtD1g");
	this.shape_4.setTransform(55.1,52.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D95442").s().p("Ag4ASIAHgjIBqAAIgGAjg");
	this.shape_5.setTransform(37.2,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D95442").s().p("AAiCRIgWhBIgJgZIgHgZIgBAAIgPAYIgRAbIgqBAIg8AAIBuiTIg0iOIA1AAIAWBAIAHAYIAGAWIABAAIAPgYIAOgWIArhAIA8AAIhtCOIA5CTg");
	this.shape_6.setTransform(20.3,52.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D95442").s().p("AAbBrIAWh1IACgMIABgNQAAgNgGgIQgGgJgPAAQgLAAgNAJQgLAJgKARQgKARgFAXIgSBhIgyAAIAbiQIAHgjIAEgdIAsAAIgEAlIABAAQAPgUASgLQATgLAWAAQAPAAAMAGQAMAGAHANQAHANABAUIgBARIgDASIgXB4g");
	this.shape_7.setTransform(-12.5,56.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D95442").s().p("AgrBtQgcAAgRgUQgQgTgBggQAAgbAJgZQAKgaASgVQATgWAcgMQAagNAlAAQARAAARADQARACANAEIgWBsQgEAQgBASIgEAhIAAAdIguAAIABgWIACgaIgBAAQgQAdgSAMQgSALgUAAIgCAAgAgMg2QgTAOgLAXQgLAWABAYQgBARAIALQAGALAQABQAMAAAMgKQAMgJAKgTQAKgSAFgZIALg3QgDgCgGAAIgLgBQgYABgRAPg");
	this.shape_8.setTransform(-35.2,56.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D95442").s().p("Ag3BpQgQgFgIgGIANgkQAIAFAOAFQANAEAPAAQAPgBAIgGQAIgIAAgKQAAgKgGgHQgGgIgOgIQgTgJgLgMQgLgOgBgSQAAgUALgQQALgQATgIQASgJAZAAQARABAMADQANADAHAEIgMAkQgGgDgKgDQgKgDgNAAQgPAAgJAGQgHAHAAALQAAAIAGAHQAHAHANAHQALAGAKAIQAKAHAGAKQAGALAAANQAAAXgMAQQgLAQgUAIQgUAIgZAAQgTAAgPgEg");
	this.shape_9.setTransform(-55.9,56.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D95442").s().p("Ag3BpQgQgFgIgGIANgkQAIAFAOAFQANAEAPAAQAPgBAIgGQAIgIAAgKQAAgKgGgHQgGgIgOgIQgTgJgLgMQgLgOgBgSQAAgUALgQQALgQATgIQASgJAZAAQARABAMADQANADAHAEIgMAkQgGgDgKgDQgKgDgNAAQgPAAgJAGQgHAHAAALQAAAIAGAHQAHAHANAHQALAGAKAIQAKAHAGAKQAGALAAANQAAAXgMAQQgLAQgUAIQgUAIgZAAQgTAAgPgEg");
	this.shape_10.setTransform(-73,56.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D95442").s().p("AgzCUIAnjQIAyAAIgnDQgAAChiQgGgHABgMQAAgOAHgIQAJgIANAAQALAAAIAHQAHAHAAANQAAAOgJAHQgJAIgNABQgLgBgIgHg");
	this.shape_11.setTransform(-85.7,51.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D95442").s().p("AAfCRIgziJIgLghIgJgeIgHgeIgCABQgCAUgFAbIgKA6IgYB8IguAAIA3khIA5AAIAyCHQAJAZAGAVQAHAWAEAVIABAAIAEgsIAJg1IAYh/IAvAAIg3Ehg");
	this.shape_12.setTransform(-105,52.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DA594F").s().p("AgfA3QgKgGgEgMQgFgKAAgNQAAgOAFgMQAGgOAJgLQAJgMAMgGQALgHAOAAQAMAAAIAFQAIAEADAGQAEAGAAAIQAAANgIAHQgHAIgNADQgMADgPACQgQABgRgBIgBAJIABALIACAJQAFALAIAFQAIAFALAAQAMAAAJgDQAJgDAFgEIADAKQgEADgKAEQgKADgPAAQgQAAgLgIgAgIgtQgKAIgHAKQgHAKgEAMQAVAAAQgCQARgCAKgFQALgHAAgLQAAgKgHgFQgHgFgLAAQgMABgKAGg");
	this.shape_13.setTransform(43.6,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DA594F").s().p("AgbA8Igah3IALAAIARBOIADARIACAKIABAAIAFgIIAIgPIAvhSIANAAIhGB3g");
	this.shape_14.setTransform(33.1,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DA594F").s().p("AgVBTIAVh3IANAAIgXB3gAAGhAQgCgDAAgFQAAgEACgDQADgDAEAAQAFAAACADQACADABAEQgBAFgCADQgCADgFAAQgFAAgCgDg");
	this.shape_15.setTransform(24.1,10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DA594F").s().p("AgkA9IAQhQIADgTIAEgUIALAAIgDAPIgDANIABAAQAGgNAJgIQAJgJANAAIADAAIADABIgCALIgDgBIgEAAQgHAAgIAHQgJAHgGAMQgHANgDAQIgKA3g");
	this.shape_16.setTransform(17.8,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DA594F").s().p("Ag5BVIgWgBIAfilIAWgDIAXAAQAYAAATAHQASAHAKAOQAEAFAEALQAEALAAAPQAAANgEAMQgDAOgHAMQgIAMgLAKQgRAOgUAGQgUAGgaAAIgVAAgAgPhKIgMAAIgLACIgcCSIARABIAOAAQAcAAARgGQASgHANgNQAOgNAGgQQAHgQAAgRQAAgQgHgOQgFgOgQgJQgRgIgbgBIgLABg");
	this.shape_17.setTransform(4.5,10);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DA594F").s().p("AgTBHQgFgEgCgFQgCgGAAgFIABgMIABgMIANhBIgTAAIACgJIATAAIAEgXIAMgEIgFAbIAhAAIgCAJIggAAIgNBCIgBALIgBAMQAAAHADADQAEAEAGAAIAFAAIAFgCIABAKIgGABIgHABQgJAAgFgEg");
	this.shape_18.setTransform(-12.3,11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DA594F").s().p("AgcA8QgHgCgEgDIAEgKQAFAEAGACQAHACAGAAQAJAAAGgDQAGgEAEgGQADgGAAgGQAAgJgDgFQgEgHgLgGQgMgFgFgIQgDgHAAgJQAAgJAEgIQAGgHAIgFQAIgFALAAQAIAAAHACQAGACADADIgFAJQgCgCgGgBQgFgDgHAAQgLAAgHAHQgHAHAAAJQAAAIAFAGQAFAFAIAGQAMAFAEAIQAFAIAAAIQAAALgGAJQgGAIgJAGQgIAEgMAAQgJAAgHgDg");
	this.shape_19.setTransform(-22.1,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DA594F").s().p("AgfA3QgKgGgEgMQgFgKAAgNQAAgOAFgMQAGgOAJgLQAJgMAMgGQALgHAOAAQAMAAAIAFQAIAEADAGQAEAGAAAIQAAANgIAHQgHAIgNADQgMADgPACQgQABgRgBIgBAJIABALIACAJQAFALAIAFQAIAFALAAQAMAAAJgDQAJgDAFgEIADAKQgEADgKAEQgKADgPAAQgQAAgLgIgAgIgtQgKAIgHAKQgHAKgEAMQAVAAAQgCQARgCAKgFQALgHAAgLQAAgKgHgFQgHgFgLAAQgMABgKAGg");
	this.shape_20.setTransform(-32.2,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DA594F").s().p("AgkBUIAeidIg7AAIACgKICBAAIgBAKIg8AAIgdCdg");
	this.shape_21.setTransform(-41,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-121.8,-5.2,243.7,127.3), null);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],-89.4,-105.9,0,-30.6,-4.1,197.2).s().p("EgsnAlMMAAAhKXMBZPAAAMAAABKXg");
	this.shape.setTransform(285.6,238);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(0,0,571.2,476), null);


(lib.snow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2CBD2").s().p("EB1kAO1QgTgFgQgCIAsACIAAgDQCWAOACADIgFABgEA7QAOwQgsgQgxgGQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAIACgBQAUACA5ANQBNASAVAEQg4AAgfgLgEBzCAO7QgzgFAAgGQAeADAagFQANgCAaAAIgDABQgaAOgNAAIgCAAgEAnHAKdIgOgDQgMgDAAgDIAAgBQAFACAOACIAPAEIApAHIgxgFgECA9AJTIADgFQABgEAFAAIABgCQACAAAAAKQAAALgUACIgPABQAKgEANgJgEB+1AJgIhvgLQhwgMAAgCIDfAQQA8gZAXAZQAGAHAFACIheAAgEBb3AJRQhngKAAgDIDSAPQBTACBMgQQA8gNAMAEQgrANggAGQg5ALhoACIhmgLgEAhoAHfQgSgFgRgCIAsACIAAgDQCXAOABADIgEACgA4qHaQgsgPgxgHQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAIACgBQAVACA4ANIBjAXQg4gBgfgLgAfGHlQgzgFAAgGQAeADAbgFQAMgCAbAAIgEABQgZAOgOAAIgCAAgEgsyADHIAIgCIAoAHIgwgFgEgtNAC+IAAgBIATAFIgGACQgNgDAAgDgEBFyACeQgjgFAAgDIBFADQAOgMAMABQgEADgKAJQgIAIgEAAIgigEgEAq6ACKIhvgLQhwgMAAgCIDfAQQA8gYAXAYQAGAHAFACIgaAAIhEAAgEAtCAB9IADgFQABgEAFAAIABgBQACgBAAAKQAAALgUACIgPABQAKgEANgJgAH7B7QhngKAAgDIDTAPQBTACBMgQQA8gNAMAEQgrANggAGQg5AMhoABIhngLgEgyRAAJQgTgFgQgCIAsACIAAgDQCWAOACAEIgFABgEhslAAEQgsgOgxgHQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIACgBQAUACA5ANIBiAWQg4gBgfgLgEg0zAAPQgzgFAAgGQAeADAagFQANgCAbAAIgEABQgZAOgOAAIgCAAgEBV/gACQAAgKASgDQASgEAsABQABAGgGAEQgLAHgwgDQgCACADAEIAFAGIgWgKgEiBIgEXIAAgBQALAEBAAMQhKgHgBgIgAuIk3QgjgFAAgDIBFADQAOgMAMABQgEADgKAJQgIAIgEAAIgigEgEgpAgFLIhvgLQhwgMAAgCIDfAQQA8gYAXAYQAGAHAFADIhegBgEgm4gFYIADgFQABgEAFABIABgCQACgBAAAKQAAALgUADIgPAAQAKgEANgJgEhL+gFZQhngLAAgDIDSAPQBTACBMgQQA8gNAMAEQgrANggAHQg5ALhoABIhmgKgACEnYQAAgKASgDQARgEAsABQACAGgGAEQgMAHgvgDQgDACAEAFIAFAGIgWgLgEhiDgMNQgjgFAAgDIBFADQAOgMAMABQgEADgKAJQgIAIgEAAIgigEgEhR2gOuQAAgKASgDQASgEAsABQABAGgGAEQgLAHgwgDQgCACADAFIAFAGIgWgLg");
	this.shape.setTransform(924.3,131.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEE5ED").s().p("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");
	this.shape_1.setTransform(869,140.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow_1, new cjs.Rectangle(0,33.7,1750.8,213.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH2DsQgkgPgZgaQgZgbgNgkQgNgmAAgtQAAgtANgkQANglAagbQAZgbAkgOQAigPAtAAQAvAAAiAPQAlAPAYAaQAZAaANAmQAOAkAAAtQAAAtgOAmQgNAkgZAbQgaAbgjAOQgjAOgtAAQguAAgjgOgAIghDQgRAIgNAQQgNAPgHAYQgHAXAAAeQAAAeAHAYQAIAYAMAPQANAQARAIQATAIAUAAQAUAAATgIQARgIANgQQANgQAGgXQAIgXAAgfQAAgegIgXQgGgXgNgQQgNgPgSgJQgTgIgUAAQgTAAgTAIgACyDrQgfgQgMgdQgJgVAAgkIAAjGIhIAAIAAhNIBIAAIAAhsIBeAAIAABsIBvAAIAABNIhvAAIAAC6QAAAWAHAKQALATAkAAQAQAAAQgDQARgDANgEIAABPQgQAEgWADQgYADgRgBQgwAAgfgPgAkKDnQgmgUgTghQgLgSgEgVQgFgUAAgcIAAjpIBeAAIAADfQAAAWACAMQADAPAGAKQAJAQASAKQASAIAXAAQAZAAATgJQASgKAJgUQAJgSAAghIAAjiIBdAAIAADpQAAAwgQAfQgJAUgOAOQgPAOgTALQgUAKgZAGQgaAFgdAAQg5ABgngUgAq6DyQgXgIgRgRQgRgPgKgYQgKgWAAgcQAAggAMgYQAKgYAVgRQAVgSAbgIQAdgIAiAAQAYAAAVADQAdAEAIACIAAgOQAAgNgEgNQgFgMgKgKQgKgJgQgHQgSgFgWAAQgcAAgdAGQgcAGgiANIAAhJQAegNAggHQAhgGAjgBQArABAeAJQAgALAVASQAVASALAYQAKAaAAAcIADECIhVAAIgEgpIgCAAIgTARQgLAJgOAHQgQAJgQAEQgRAEgVAAQgcAAgXgIgAqTBSQgUAOAAAcQAAANAEAKQAFAKAIAGQAHAGALADQAJAEAMAAQAOAAANgEQANgDALgHQAMgHAHgFIAOgOIAAg7IgfgGQgOgCgVAAQgiAAgUANg");
	this.shape.setTransform(110,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiWAfIiZgVICngqIAhh2IBlBZIEyhEIjwCDIBVBKIiygZIihBkg");
	this.shape_1.setTransform(300.2,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoZExIgBAAIgBgCIgBgCIAAgCIABgDIACgBIABgBIACAAIABgBIAEgBIAEgCIAHgEIABgCIACgCIACgCIACgMIAAgJIgCgLIgBgEIgBgDIgBgFIgJgnIgoiVIgBgFIgGgTIAAgDIgGgQIgEgHIgEgGIgBgBIgCgBIgFgCIgDgBIgEAAIgNADIgCAAIgBgBIgCAAIgBgBIgBAAIgBgBIgBgCIAAgDIABgDIADgDIABgBIEJhEIAugHIAHgCIAkgCIAFABIAKACIAEABIAJAFIAHAGIAHAIIAGAKIAJAYIACAIIAAADIAAAEIABAEIAAAKIAAAEIAAADIgBADIgBAGIgBACIgDAGIgLAOIgOANIgPAIIgDACIgDABIgDACIgDACIgDACIgNAGIgDACIgEABIgDACIgHABIgEABIgDACIgMAEIgDABIgEABIgHACIgcAIIAJAEIASAEIAOACIAJAAIAPgCIAQgDIAHgEIAHgDIAEgBIASgJIADgBIAHgDIAGgCIADAAIABAAIACACIACADIACAEIABADIAEALIABACIAKAQIACADIACADIAIAJIAEAHIAPAQIADADIAFAGIAMAKIACABIAPALIALAFIAJADIAEAAIAHgBIACgBIADABIACACIABADIABACIAAABIgBABIAAABIgCABIgBAAIgCACIgDAAIigApIgCABIgCAAIgCABIgDAAIgBgBIgBgBIAAgBIgDgDIgCgFIhhiHIghAIIAJAfIALAoIAGAVIABAFIACAEIAAAEIABADIABAEIAHAQIACAEIAFAGIADAEIACABIAFABIADAAIAEAAIANgCIACAAIAEABIABABIABABIABACIAAACIAAACIgCACIgBAAIgCABIgFABIjJA0gAmHhEIgEABIgDABIgEABIgEAAIgEACIgHABIgDACIgGACIgEADIgDAGIgBADIgBAKIAAADIAAADIACAHIAAADIACAMIACAHIABADIAVBSIArgLIAKgFIAHgGIACgBIABgCIACgDIABgJIAAgEIAAgGIgBgCIAAgGIgDgQIgBgEIAAgEIgFgVIgJgbIgFgLIgCgCIgBgDIgEgEIgGgFIgCgBIgIAAgAg1C0IgDgBIAAgHIACgCIABgBIACgBIACgBIAGgBIAHgDIADgCIACgBIACgBIADgEIABgCIABgCIABgIIgBgOIgBgFIgBgDIAAgEIgBgDIAAgEIgOhBIgih7IgEgOIgDgIIgCgIIgHgRIgCgDIgCgEIgCgDIgCgBIgCgBIgBgBIgDgBIgDAAIgLAAIgKACIgEAAIgEgBIgBgCIgBgBIgBgBIAAgDIABgCIABgBIACgCIACgBIDSg3IABgBIACAAIAGACIACABIABACIAAACIAAABIgCADIgCABIgEAEIgDABIgDAAIgKAEIgFAEIgDADIgBACIAAAEIgBACIgBAJIABAKIACAIIABADIAAAEIAKAwIAvCwIAEAJIAFAIIACADIACACIADAEIACABIADAAIADAAIAEABIAHAAIAKgCIAFAAIAFABIABABIABABIABACIAAABIAAABIgBABIgDACIgCABIgCAAIjRA3IgCAAIgDABIgBAAgAC7B1IgBgBIgBAAIgBgBIAAgBIABgEIACgDIACAAIACgBIACgCIAFgDIAGgEIAKgKIAJgQIACgEIACgEIAHgQIACgGIADgHIAJgeIAJgpIANiWIgCgCIgEgDIgEgEIgEgBIgCAAIgCgBIgNgCIgFAAIgIgDIgDgBIgBgBIgBAAIgBgBIAAgBIgBgBIABgCIADgDIACgBIAGgDIALgCIADgCIALgEIAHgCIAGgEIAigWIAJgIIAEgCIAIgHIADgDIACgDIACgCIANgNIAEgEIAJgKIABAAIACABIADAEIADAEIACACIAIAJIAHAMIACADIAJAOIALAMIALATIAGAHIACADIBxCYIAFAIIATAZIATATIAGAEIAFADIABABIACAAIACAAIAFAAIADAAIAFAAIADgBIAEABIACABIACABIACABIABAAIABAAIAAABIgBABIgBABIAAABIgCABIgBABIgCABIjfA6IgBAAIgBAAIgCAAIgCACIgBAAIgBAAIgBAAIgCgBIgBgBIAAgBIgBgCIAAgCIABgCIABgCIAAgBIACgBIACgBIADgBIAMgHIAJgIIADgEIABgGIAAgFIgBgFIgBgDIAAgCIgIgSIgCgEIgDgDIgLgPIgDgEIgCgEIgIgJIgCgDIgFgFIgCgCIgBgCIhWAVIACApIABADIAAAFIACADIAAADIACADIACACIAFAHIACACIACACIADACIABACIANANIALAGIAGACIAGACIALABIACAAIAEABIACABIADACIAAABIABABIAAABIgBABIgBABIgBABIgCABIgCAAIgEADIidAogAEZgwIBMgXIhFhfg");
	this.shape_2.setTransform(303,64.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00364F").s().p("AsKI3IAAxtIYWAAIAARtg");
	this.shape_3.setTransform(301.4,56.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D95442").s().p("AsrI3Qh1AAhThTQhThTgBh2IAAtRMAiOAAAIAARtg");
	this.shape_4.setTransform(109.6,56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,379.4,113.4), null);


(lib.shape17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Goru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mount();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Goru, new cjs.Rectangle(0,0,409,131), null);


(lib.fari2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgGAHQgugbACgNQALgCAyAEIAFAIIgOgBIAPADIAiA4QgYgIghgUg");
	this.shape.setTransform(8.9,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABMAEIjDgfIgPgDIAOACIDXATIAoAog");
	this.shape_1.setTransform(22.6,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8E9FF").s().p("ABxA9IhngaQhagXgVgEIgMgDIgig4IDDAgIA7AaIgogoIjXgTIgFgJIBUAGIB7ALIAXAGIBNBMIgNAOQgMAKgKAAIgGgBg");
	this.shape_2.setTransform(25.5,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAGAjIgbgBQgJgBgDgEQgEgFANgYQALgWAKgNIAZABQAGAzAFAIQAHALgVAAIgNgBg");
	this.shape_3.setTransform(-157,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(184,233,255,0.2)","rgba(184,233,255,0)"],[0,1],-50,-18.3,0,9,4.5,72).s().p("ADEErQkEgPj9hkQgtgRgngSQACgJgJAGIAAAAIgcgNQADgXALgrQAbhogxhRQgQgZgVgUIgSgOQgagrhhgnQBygzDYANQECAPD+BiQD+BjBlB7QBlB6hwBNQhcBAjCAAQgnAAgrgCg");
	this.shape_4.setTransform(114.1,66.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(153,0,0,0.2)","rgba(153,0,0,0)"],[0,1],5.4,1.1,0,-0.5,0,10.6).s().p("AgVB4QgrgIgYgpQgYgoAJgwQAJgyAmgeQAkgdAqAIQArAIAYAoQAYApgJAxQgJAxglAdQgdAXggAAQgJAAgJgBg");
	this.shape_5.setTransform(-162.6,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(184,233,255,0.459)","rgba(184,233,255,0)"],[0,1],-64.2,-35.8,0,20.6,9.6,109.5).s().p("AFBIDQmEg/lsjGQlwjDiBjUQiFjVCyhqQC0hpGCBAQGAA/FuDEQFuDECEDVQCEDUi1BpQhwBDjAAAQhyAAiPgYg");
	this.shape_6.setTransform(87.8,86.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.fari2_1, new cjs.Rectangle(-173.2,16.5,359.7,123.8), null);


(lib.button_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBEIAAiGIBIAAIAAAOIg3AAIAAArIA0AAIAAAOIg0AAIAAAwIA6AAIAAAPg");
	this.shape.setTransform(45.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBEIgEgLIgFgVQgDgOgGgGQgGgGgLgBIgQAAIAAA7IgSAAIAAiEIAQgCIASgBQANAAAJADQAJACAGAGQAFAFAEAGQACAHAAAIQAAAJgDAGQgDAHgGAFQgGAEgHACIAAABQAHACAGAHQAEAHADALIAFAXIAFAOgAgTg1IgGABIAAAxIASAAQANAAAHgHQAJgHAAgLQgBgNgIgGQgIgHgNAAIgLABg");
	this.shape_1.setTransform(35,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA9QgNgIgIgQQgHgPgBgVQABgUAIgQQAIgQAOgJQAOgIARgBQATABANAIQAOAJAHAPQAIAPAAAVQgBAWgIAPQgIARgOAHQgOAJgRAAQgSAAgOgJgAgXguQgJAIgFAMQgFANAAAOQAAAPAFAMQAFAMAKAIQAJAIANgBQAOABAKgIQAJgIAFgNQAFgMAAgPQAAgKgCgJQgDgKgFgIQgGgIgIgEQgIgFgLgBQgNABgKAIg");
	this.shape_2.setTransform(22.1,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BEIgDg8IgBgSIgBgUIAAgTIgBAAIgIAYIgJAaIgYBCIgMAAIgWhBIgJgaIgGgZIgBAAIAAATIgBAUIgBATIgEA7IgRAAIAKiGIAWAAIAXBBIAIAXIAFAWIAAAAIAGgWIAIgXIAYhBIAXAAIAICGg");
	this.shape_3.setTransform(7.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBEIgPgBIAAiEIASgCIATAAQATAAANAEQAOAEAIAIQAKAJAEALQAFAMABARQgBAPgFANQgEAOgKAJQgKAKgPAEQgOAFgTAAIgSAAgAgdg1IgIABIAABpIAIABIAJAAQAcAAAPgOQAOgPAAgbQAAgQgFgLQgHgMgMgGQgMgHgSAAIgMABg");
	this.shape_4.setTransform(-11.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBEIgNgrIgvAAIgPArIgSAAIAuiGIAUAAIAvCGgAATALIgNglIgDgNIgDgMIAAAAIgDANIgEALIgNAmIAnAAg");
	this.shape_5.setTransform(-24.5,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBEIAAiGIBIAAIAAAOIg3AAIAAArIA0AAIAAAOIg0AAIAAAwIA6AAIAAAPg");
	this.shape_6.setTransform(-35.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBEIgEgLIgFgVQgDgOgGgGQgGgGgLgBIgQAAIAAA7IgSAAIAAiEIAQgCIARgBQANAAAKADQAJACAHAGQAEAFAEAGQACAHAAAIQAAAJgDAGQgEAHgFAFQgGAEgHACIAAABQAHACAGAHQAEAHACALIAGAXIAFAOgAgTg1IgGABIAAAxIASAAQANAAAHgHQAJgHAAgLQgBgNgIgGQgIgHgNAAIgLABg");
	this.shape_7.setTransform(-45.3,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DA594F").s().p("AsHDRIgDAAQgbAAgWgOIgOgLIgEgDIgBgBIgBgBIgCgCIgCgDIgCgBIgBgCIgBgBQgQgVgDgaIgBgLIAAgDIAAkrIZzAAQAmAAAcAZIAFAFIACACIADADIAAAAIABABIADAEQATAZABAhIAAEtgAInjNIgCgDIADADIgBAAg");
	this.shape_8.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.1,-21.4,175.3,41.8);


(lib.wheels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnoHPQi4i/ANkQQAOkODLjAQDMjAEPAAQEQAAC4DAQC4DAgNEOQgOEQjLC/QjMDAkPAAQkQAAi4jAg");

	// Layer 1
	this.instance = new lib.wh_moove();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0.9,1,1,0,0,0,67,67);
	this.instance.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 6.8, 20.91, 21.93, 0)];
	this.instance.cache(-3,-2,138,138);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E223C").s().p("AgIEiQhtgdg/hqQg/hpASh4QAUh4BbhBQBbhABsAeQA5APAsAkQhdACghANQgrARg1BVQgtBGAUBwQAKA4ATArQBEBGC0gIIAOAAQgSASgVAPQg+AthIAAQggAAghgKg");
	this.shape.setTransform(-19.8,1.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A333D").s().p("AjhI0QhvgthchbQhLhLgrhZQg7h4ABiQQAAhWAVhOIgDAnQgMC+BZCiQBYCiCKAlQCLAmBohvQBohvALi/QALi+hXijQhZiiiLglQg1gOgxAIQCShhC5AAQD7AACxCwQCxCyAAD6QAAD7ixCxQhbBbhuAtQhpAqh6gBQh5ABhogqg");
	this.shape_1.setTransform(0.4,0.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjhI0QhvgthchbQiwixAAj7QAAj6CwiyQCyiwD6AAQD7AACxCwQCxCyAAD6QAAD7ixCxQhbBbhuAtQhpAqh6gBQh5ABhogqg");
	this.shape_2.setTransform(0.4,0.9);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-65.5,132.1,131.1);


(lib.snow_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Snow_sprite();
	this.instance.parent = this;
	this.instance.setTransform(-21,15);

	this.instance_1 = new lib.shape17("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.snow_bottom, new cjs.Rectangle(-21,15,216,117), null);


(lib.Snow_b_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snow_bottom();
	this.instance.parent = this;
	this.instance.setTransform(-10,83.9,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,x:-2.6,y:22.7,alpha:0.699},6).to({scaleX:1.01,scaleY:1.01,x:15.9,y:1.4,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,83.9,54,33);


(lib.Snow_b_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 7
	this.instance = new lib.Snow_b_anim();
	this.instance.parent = this;
	this.instance.setTransform(17.5,-94.4,1,1,-1.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(5));

	// Layer 5
	this.instance_1 = new lib.Snow_b_anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.5,-78.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(9));

	// Слой 2
	this.instance_2 = new lib.Snow_b_anim();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.5,-67.8,1,1,-1.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(13));

	// Layer 3
	this.instance_3 = new lib.Snow_b_anim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(41.4,-94.4,1,1,-1.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(13));

	// Layer 1
	this.instance_4 = new lib.Snow_b_anim();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.5,-78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,5,54,33);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.fari2_1();
	this.instance.parent = this;
	this.instance.setTransform(175.1,13.3,1,1,0,0,0,0,13.8);
	this.instance.alpha = 0.488;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-175,15,364,128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({alpha:0.5},0).to({alpha:0.922},9).to({alpha:0.5},8).wait(1));

	// Layer 3
	this.instance_1 = new lib.Snow_b_all();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.7,87.9,0.822,0.648,0,-12.4,167.6);
	this.instance_1.alpha = 0.129;

	this.instance_2 = new lib.Snow_b_all();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105,84.5,0.822,0.433,0,8.8,-171.2);
	this.instance_2.alpha = 0.309;

	this.instance_3 = new lib.Snow_b_all();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.8,94.1,0.588,0.31,0,8.8,-171.2);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(25));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(155,163,173,0.898)").s().p("AjcAqQjRg3iIg+IAJgLQAKgMAKgDQAIgCAUADQAaAEATAAQAaAAARgJQAOgIADgJQACgIAaADQAaACAXAKQAVAJAMgBQAGgBAOgHQARgIBFASIAnAKQAQADArAAQAoAAAYADIAwAHQATACArAOQAnAMAbACIA4ACQAYABAZAHIAqALQAQAEAlAEQAfADAfAIIBRATQAyAKAQA2QAHAbgCAZQhPAGhRAAQkqAAlHhXg");
	this.shape.setTransform(89,99.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(155,163,173,0.898)").s().p("AjMAtIgRgFQjRg2iIg/IAIgKQALgLAKgDQAGgCAMABIAKABIAPABIAeACIAFAAQAWgBARgHIAFgDQAJgGADgHQADgFAOAAIALAAIAJAAQAQADAQAFIAIADQAUAIANgBQAHAAANgGQAKgEAWADQAVADAhAJIAnAKIATACIApABIAkABIAcACIAwAGIADABQARADAqAMQAmAMAcACIAKABIAuABQAOABANACIAXAFIAmAJIAEABQAPAEAiAEIADAAQAeADAdAHIAEABIBMASIAFABQAuAKARAwIACAHQAGAWAAAVIgBAIQhQAHhTAAQkgAAk/hUg");
	this.shape_1.setTransform(88.9,99.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(155,163,173,0.898)").s().p("AjMArIgRgEQjRg3iJg/IgBAAIAJgKQAMgJAJgDQAIgCAKABIAKAAIAPABIAfABIAEAAQAVAAATgHIAFgCQAJgGADgGQAEgFAOgBIAKAAIAJAAQAQACARAFIAIACQATAIAOAAQAHAAANgFQAKgDAWADQAWADAfAJIAoAKIASACIApABIAlABIAcACIAvAGIADAAQARADArANQAlALAdADIALAAIAuACIAbADIAXAEIAnAIIADABQAQAEAiAEIADAAQAdADAdAIIAEABIBMARIAFABQAuAKARAxIACAHQAGAWAAAUIgCAIQhQAHhTAAQkgAAlAhVg");
	this.shape_2.setTransform(88.7,99.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(155,163,173,0.898)").s().p("AjNArIgRgFQjRg3iKg/IAAgBIAJgIQAMgJAKgCQAHgCALAAIAJAAIAPAAIAfABIAFAAQAUAAATgGIAFgCQAKgFADgGQAFgEANgCIAKgBIAJAAQAQACARAEIAIADQASAGAPABQAIABANgFQAKgCAVADQAXAEAfAIIAnAKIASACIAqACIAkABQAQAAAMABQAVACAbAEIADABQAQADAsAMQAkALAeADIALABQASABAdAAIAbACIAXAEIAmAIIAEABQAQAEAhADIADAAQAeAEAdAHIAEABIBMASIAFABQAuAKARAxIACAHQAGAWgBAVIgCAHQhQAHhUAAQkgAAlBhVg");
	this.shape_3.setTransform(88.5,99.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(155,163,173,0.898)").s().p("AjNAqIgRgFQjRg3iLhAIgBAAIAJgIQANgIAKgCQAIgCAKAAIAJAAIAPgBIAfABIAFAAQATAAAUgFIAGgCQAJgFAEgFQAGgEAMgCIAKgBIAJgBQAPACASADIAIADQARAGAQABQAIABANgEQALgBAUADQAYAFAeAIIAnAKIASACIAqABIAlABQAPAAANACQAWABAZAEIADABIA8APQAkAKAfAEIALABQASABAdAAIAbACIAXADIAnAHIADABQARAEAhAEIADAAQAeAEAdAHIAEABIBMARIAFABQAuALARAxIACAHQAFAWAAAVIgDAGQhRAIhVAAQkeAAlChWg");
	this.shape_4.setTransform(88.4,99.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(155,163,173,0.898)").s().p("AjOApIgRgFQjRg3iMhAIgBgBIAKgHQANgGAKgCIASgDIAJgBIAPgBIAfAAIAFAAQASABAWgEIAFgCQAKgEAEgFQAGgEAMgCIAKgCIAJAAIAhADIAIADQARAFARADQAIAAANgCQALgBAUADQAYAFAdAIIAnAKIASACIAqACIAlABQAQAAAMABQAXACAZADIACABIA9APQAjAJAgAFIALABQARACAeAAIAcABIAXADIAmAGIAEABQARAEAhADIADAAQAdAEAeAHIAEABIBLASIAGABQAuALAQAxIACAHQAGAXgBAUIgEAGQhSAHhVAAQkdAAlDhWg");
	this.shape_5.setTransform(88.2,99.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(155,163,173,0.898)").s().p("AjPAoIgRgFQjQg4iNhAIgBgBIAJgGQAOgFAKgCIASgDIAJgBIAPgDIAfABIAFAAQASAAAWgDIAGgCQAJgDAFgEQAHgEALgCQAFgCAFAAIAJgCIAhADIAIACQAQAGASACQAIABANgCQAMAAATAEQAZAFAcAIIAoAKIARADIAqABIAmABIAcABQAZACAWADIADAAIA9APQAiAJAhAFIALABQAQACAgAAIAbACIAXACQAiADAFACIAEABQASAEAfAEIADAAQAeADAdAIIAEABIBMARIAGABQAuALAQAyIACAHQAFAWAAAVIgFAFQhSAJhWAAQkcAAlFhYg");
	this.shape_6.setTransform(88.1,99.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(155,163,173,0.898)").s().p("AjPAnIgRgFQjRg4iNhBIgCAAIAKgFQAOgFAKgCIASgCIAJgCIAQgDIAfAAIAFAAQARAAAXgCIAGgBQAJgDAGgEIASgFQAEgDAFAAIAJgCIAiACIAIACQAPAFATADQAIABANgBQAMAAATAFQAaAFAaAIIAoAKIARADIArABIAlABIAcABQAcABAUAEIADAAIA9AOQAhAJAjAFIAKACQAQACAhAAIAbABIAXABIAnAEIAEABQASAFAfAEIADAAQAeADAdAIIAEABIBNARIAFABQAuAMAQAxIACAIQAFAWgBAVIgEAEQhTAIhWAAQkcAAlGhYg");
	this.shape_7.setTransform(87.9,99.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(155,163,173,0.898)").s().p("AjQAmIgRgFQjQg4iOhBIgCgBIAJgEIAZgFIASgEIAJgCIAQgDQAOgCARABIAFAAQAQABAZgCIAGgBQAJgCAGgDIASgGQAEgCAFgBIAJgCIAiABIAIACQAOAEAUAEQAJABAMAAQANABATAEIAzAOIAoAKIARADIArABIAmABIAcABQAdABASADIADAAIA+APQAgAIAkAGIAKACQAPACAiAAIAcABIAXABIAnACIAEABQASAGAfADIADAAQAeAEAdAHIAEABIBMASIAGABQAuALAPAyIACAIQAGAWgBAVIgGAEQhTAIhXAAQkbAAlHhZg");
	this.shape_8.setTransform(87.7,100);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(155,163,173,0.898)").s().p("AjQAlIgRgEQjQg5iPhCIgDAAIAKgDIAagFIASgDIAJgDIAPgEQAOgCASABIAEAAQAQABAaAAIAGgBQAJgCAGgCIASgGQAEgDAGgBIAIgDIAiABIAJABIAiAIQAJACAMABQANABATAFIAzANIAoALIARADIArABIAmABIAcABQAfABAQADIADAAIA+AOQAfAIAlAGIALACQAOADAjgBIAcABIAXAAIAnACIAEABQATAFAeAEIADAAQAeAEAeAHIAEABIBMARIAGABQAtAMAQAyIACAIQAFAXgBAUIgGADQhUAJhZAAQkaAAlHhag");
	this.shape_9.setTransform(87.5,100);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(155,163,173,0.898)").s().p("AjQAlIgRgFQjRg5iQhCIgCgBIAKgCIAagDIASgEIAJgDIAPgFQAOgCASABIAFAAQAOABAbAAIAGAAQAKgBAGgCQALgDAHgDQAEgDAGgCIAIgDIAiAAIAJABIAiAIIAWAEIAfAHIAzAOIAoAKIARADIArACIAmABIAcAAQAhABAPADIACAAIA/AOQAeAHAmAHIALACQAOADAjgBIAcAAIAYAAIAmACIAFABQATAFAeADIADAAQAeAEAdAHIAEABIBNASIAFABQAuAMAPAyIACAIQAFAXgBAVIgHACQhUAJhZAAQkZAAlIhag");
	this.shape_10.setTransform(87.4,100.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(155,163,173,0.898)").s().p("AjRAkIgRgFQjQg5iRhCIgDgBIALgBIAbgCQAMgCAGgCIAIgEQAKgEAGgCQANgCATABIAEAAIAqADIAGgBIARgCQALgCAHgEIAJgFIAIgDIAjgCIAIACIAjAIIAWAFIAfAIIAzANIAoALIAQADIAsACIAmABIAcAAQAjABAMADIADAAQAKADA1ALIBFAOIAKACQANADAlgBIAcAAIAYgBIAnABIAEABQAUAFAdADIADAAQAeAEAeAIIAEABIBMARIAGABQAtAMAPAzIACAIQAFAXgBAUIgIACQhUAKhZAAQkZAAlKhcg");
	this.shape_11.setTransform(87.2,100.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(155,163,173,0.898)").s().p("AjRAkQjeg8iYhGQAtAAALgFQAPgJAJgCQAOgDAWABQAPACAiACQAZAAAKgHQAHgGAKgDIAjgDQAJgBBXAZQBdAaAOACIBTADQBDABAKACQAOAFCBAZQARAEA+gCIA+gBQAVAGAhADQAfAEAfAIIBRASQAyALAQA2QAHAbgCAYQhYALhfAAQkXAAlLhcg");
	this.shape_12.setTransform(87,100.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(155,163,173,0.898)").s().p("AjAAoIgSgFQjeg8iZhHQAtABALgFQAQgIAIgCQAKgCANAAIAOAAIAPABIAhABIAJAAQARAAAKgGQAHgFAKgDIACAAIAdgDIAEAAQADAAANADIAnAJIAjAIIAGACIAMADIAkAKQAbAIARADIAPADIAYABIA4ACIADAAIA9ACIARACIAeAHIA8AMIA1ALIARACQAVACAjgBIAFAAIArgCIAUABIAUAEIAiAGIARACQAXADAWAGIAPAEIBCAPIAMADQApANAOAwIACAIQAFAWgBAVIgGACQhWAKhbAAQkQAAlDhYg");
	this.shape_13.setTransform(86.9,100.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(155,163,173,0.898)").s().p("AjBAnIgSgFQjeg9iZhGIgBgBQAsABANgEQAPgHAJgCIAWgCIAOAAIAPAAIAiABIAIAAQAQgBALgEQAIgFAKgDIACAAIAcgCIAEgBQAEAAANACIAnAJQARACASAFIAGACIALADIAlAKQAZAHATADIAQACIAYABIA4ADIADABIA8ABIASACIAeAHIA8ANIA1AKIARADQAVACAigBIAFAAIAsgBIAUAAIAUAFQAPAEASACIASACQAXADAWAGIAPAEIBDAPIALADQAqANAOAvIACAIQAFAXgBAVIgFACQhWALheAAQkPAAlEhZg");
	this.shape_14.setTransform(86.7,100.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(155,163,173,0.898)").s().p("AjBAmIgSgFQjfg9iahHIAAAAQAqABAOgEQAQgGAJgCIAVgCIAOgBIAPAAIAiABIAJAAQAOgBANgEQAIgEAKgCIACAAIAcgDIAEgBQAEgBANADIAnAIQASABARAEIAGACIALAEQAVAHAQADQAYAHAVACIAQACIAXABIA5AEIACAAIA9ACIASABIAdAHQAXAGAmAIIA0AKIARADQAWADAigBIAFAAIAsgBIAUAAIAUAFIAhAGIASACQAXAEAXAFIAOAEIBDAQIAMACQAqANAOAvIACAIQAGAXgBAVIgFADQhYALheAAQkOAAlFhag");
	this.shape_15.setTransform(86.6,100.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(155,163,173,0.898)").s().p("AjCAmIgSgFQjeg+ibhHIgBAAQAqABAPgEQAPgFAKgCIAVgCIAOgBIAPAAIAiAAIAJAAQANgBAOgDQAIgEALgCIACAAQAPAAANgDIADAAQAEgBANADIAnAGQATABAQADIAHACIAKAEQAVAHARAEQAWAFAWACIARACIAXAAIA5AGIACAAQAmADAXgBIASABIAeAHQAXAHAlAHIA0AKIARADQAXAEAggBIAFAAIAtgBQAPAAAFABIAUAFQAPADATADIARACQAXADAXAGIAPAEQArALAYAFIALACQArAMAPAwIACAIQAGAWgCAWIgEACQhZAMhgAAQkNAAlGhag");
	this.shape_16.setTransform(86.4,100.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(155,163,173,0.898)").s().p("AjDAlIgSgFQjeg+ibhHIgBgBQApABAPgDQAQgEAJgCIAVgCIAPgBIAOgBIAjAAIAIAAQAMgBAQgDQAIgDALgBIACAAQAQgBALgDIAEAAQAEgBAMACQASAEAWACQAUAAAPADIAHACIAKAEQAVAIARADQAVAFAYABIAQABIAYABIA4AGIADAAQAlAEAYgBIASABIAdAGQAXAIAmAHIA0AKIARACQAYAFAfAAIAEAAIAtgBQAPgBAFACIAVAFQAPAEATACIARACQAXADAXAGIAPAEIBEAQIALACQArAMAPAwIACAHQAGAXgBAWIgEADQhZAMhhAAQkNAAlIhbg");
	this.shape_17.setTransform(86.2,100.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(155,163,173,0.898)").s().p("AjDAkIgSgFQjeg+idhIIgBAAQAoABARgCIAZgGIAVgCIAOgBIAPgBIAigBIAJAAIAcgDQAIgDALgBIACAAQASAAAJgDIAEgBQAEgBAMACQATAEAVABQAVgBAOADIAHACIAKAEQAVAIARADQATAEAaABIARABIAXAAQAOABArAHIACAAQAlAEAZgBQAMgBAGABQALACASAFQAXAIAlAGIA1AKIAQADQAZAGAegBIAFAAIAtAAQAOgBAGACIAUAFIAjAHIARACQAYADAXAGIAOADIBEARIALACQAsALAPAwIADAHQAFAXgBAWIgDADQhaANhiAAQkNAAlIhcg");
	this.shape_18.setTransform(86.1,100.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(155,163,173,0.898)").s().p("AjDAjIgSgFQjfg+idhIIgBgBQAnACASgCIAZgEIAVgCIAOgCIAOgCQAPgBAUAAIAJAAIAcgCQAJgDALAAIACAAQASAAAJgEIADgBQAEgBAMADQAUADAUABQAWgCANACIAHACIAKAEQAVAJASADQARADAcAAIARAAIAXABQANABAsAHIACABQAkAEAagBIASAAQAMABARAGQAYAIAkAGIA1AKIAQAEQAaAFAdAAIAFAAIAtAAIAVABIATAFQARAEASADIARADQAYADAXAFIAPAEIBEAQIALACQAsALAQAwIACAIQAGAXgBAVIgDAEQhbANhjAAQkMAAlJhdg");
	this.shape_19.setTransform(85.9,100.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(155,163,173,0.898)").s().p("AjEAiIgSgFQjfg+iehJIgBAAQAmACATgCIAZgDIAVgCIAOgDIAOgCIAjgCIAJAAIAdgBQAJgCALAAIACAAQATABAHgFIAEgBQAEgBAMACQAUAEAUAAQAXgDAMACQADAAAEACIAKAEQAVAJASADQAQADAdgBIASAAIAWABQAMAAAtAJIADAAQAjAFAbgCIASAAQAMACARAFQAXAJAlAGQAeAFAXAFIAPADQAbAHAdAAIAEAAIAtgBQAOAAAHACIAUAFQARAFASADIARACQAYADAXAFIAPAEIBEARIAMACQAsAKAQAwIACAHQAGAYAAAVIgDAFQhbANhkAAQkMAAlLheg");
	this.shape_20.setTransform(85.7,100.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(155,163,173,0.898)").s().p("AjFAiIgSgFQjeg/ifhJIgCgBQAmACAUgBIAZgCIAUgCIAPgDIAOgCQAPgCAUgBIAJAAIAdAAQAJgCALAAIACAAQAUABAGgFIAEgBQAEgBALACQAWAEASgBQAZgEALABIAHACIAKAEQAVAKASADQAPACAegCIASAAIAXABQALABAuAJIACABQAjAFAcgCIASAAQANABAQAFQAXAKAlAGQAeAFAWAFIAQADQAcAHAbABIAEAAIAugBQANAAAIACIAUAFQARAFASADIARACQAYADAXAGIAPADIBFARIALADQAtAJAQAwIADAHQAGAYgBAVIgCAFQhbAOhmAAQkLAAlNheg");
	this.shape_21.setTransform(85.6,100.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(155,163,173,0.898)").s().p("AjFAhIgSgFQjfg/ifhJIgCgBQAlACAUAAIAagCIAUgCIAPgDIANgDIAkgDIAJAAIAdAAIAUAAIACAAQAWABAFgFIADgCQAEgBAMADQAVAEATgDQAZgFAKABIAHACIAKAFQAVAKATACQANACAggCIATgBIAWABQAJABAwAKIACAAQAiAHAdgDQALgBAIABQANABAPAFQAYAKAkAGQAfAFAVAFIAQADQAdAIAaABIAEAAIAugBQAMAAAJACIAUAFQARAFASAEIASACQAYADAXAFIAPAEIBFARIALACQAtAKARAvIACAIQAHAXgBAWIgCAFQhdAOhmAAQkLAAlNhfg");
	this.shape_22.setTransform(85.4,100.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(155,163,173,0.898)").s().p("AjGAhIgSgFQjeg/ihhKIgCgBQAkADAWAAIAagBQANAAAGgCIAPgDIAOgDQAQgDATgBIAJAAIAeABIAUAAIACAAQAXACADgGIADgCQAFgBALACQAXAFARgEQAagGAKABQADAAAEACIAKAEQAVALATACQALABAigDIATAAQANgBAJABQAJABAxALIACABQAhAHAegDQAKgCAIABQAPABAOAFQAXALAlAGIA0AJIAPAEQAeAIAZABIAEAAIAvAAQALAAAKACIAUAFQARAGASADIASACQAYADAXAGIAPADIBFARIALADQAuAIARAwIADAHQAGAYgBAWIgBAFQhdAPhoAAQkLAAlOhgg");
	this.shape_23.setTransform(85.2,100.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(155,163,173,0.898)").s().p("AjGAiQjrhCiphOQBYAGAPgEIAcgIQAUgEAZAAIA1ADQAYACACgGQABgFARAEQAYAEARgEQAbgHAIAAQAGAAALAHQAWALASACQAKAAAkgDQAbgDAOACIA6ANQAhAIAggDQAbgEAUAJQAYALAkAGQAuAHAVAGQAfAJAYABQAPABAkgBQATAAAWAIQAaAIAbADQAgAEAfAIIBQATQAyAKAQA2QAIAbgCAYQheAPhpAAQkLAAlPhgg");
	this.shape_24.setTransform(85,100.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	// Layer 2
	this.instance_4 = new lib.wheels();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.8,84.1,0.222,0.273,0,175.8,180);

	this.instance_5 = new lib.wheels();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32.8,71.8,0.16,0.236,0,178,180);

	this.instance_6 = new lib.wheels();
	this.instance_6.parent = this;
	this.instance_6.setTransform(32.8,71.8,0.16,0.236,0,178,180);

	this.instance_7 = new lib.wheels();
	this.instance_7.parent = this;
	this.instance_7.setTransform(32.8,71.8,0.16,0.236,0,178,180);

	this.instance_8 = new lib.wheels();
	this.instance_8.parent = this;
	this.instance_8.setTransform(32.8,71.8,0.16,0.236,0,178,180);

	this.instance_9 = new lib.wheels();
	this.instance_9.parent = this;
	this.instance_9.setTransform(32.8,71.8,0.16,0.236,0,178,180);

	this.instance_10 = new lib.wheels();
	this.instance_10.parent = this;
	this.instance_10.setTransform(32.8,71.8,0.16,0.236,0,178,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(25));

	// Layer 1
	this.instance_11 = new lib.trail();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,0,371,147);


(lib.Snow_gorizont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCjAUCKAGQDSARD2AXQHrAtCsAaQCbAYEEgBIDPAAQB2ABBZAGQCsANEIAlIAAABQC2AdBuANQCjAVCKAFICIASQCoAWCaARQHrA4CrgBQDygBDDAHQCrAGDcASQCrANEJAkQC/AeBmANQClAWCIAGQDUARD1AWQHrAuCsAaQCaAYEFgBIDPgBQB1AABaAIQCrANEJAkIAAABQC2AdBuANQCjAVCKAGICIASQCnAVCbARQHrA4CqgBQDygBDEAHQCrAHDcARQCrANEJAkIAAbdg");
	var mask_graphics_1 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCjAUCKAHQDSAQD2AXQHrAtCsAaQCaAZEFgBIDPgBQB2AABZAHQCsAOEIAkIAAABQC2AdBuAOQCjATCKAHICIASQCoAVCaARQHsA5CpgCQDzgBDDAHQCrAHDcAQQCrAOEJAlQC/AdBmAOQClAUCIAHQDUARD1AWQHrAtCsAbQCaAYEFgBIDPgCQB1ACBaAGQCrAOEJAkIAAACQC2AcBtAOQCkAUCKAGICIASQCnAVCbASQHrA3CqAAQDzgCDDAHQCrAGDcASQCsANEJAlIAAbcg");
	var mask_graphics_2 = new cjs.Graphics().p("AABNuIgBgbIAAAbMhdDgIJIAA7bQC0AcBwAOQCjAUCLAGQDTASD1AWQHrAtCsAbQCbAYEDgCIDQgBQB2ABBZAHQCrANEKAlIAAACQC1AcBtANQCkAVCKAFICJASQCmAWCbASQHrA3CrgBQDygBDDAHQCrAGDcASQCsANEIAlQC/AdBmANQClAWCJAFQDTASD1AXQHrAsCsAbQCbAYEEgCIDOgBQB3ABBZAIQCrANEJAkIAAACQC2AcBuANQCjAVCKAGICJASQCmAVCaASQHsA4CqgBQDygCDEAHQCrAGDcASQCsAOEIAjIAAbdg");
	var mask_graphics_3 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdDgIJIAA7bQC0AcBwAOQCkAUCKAGQDTARD1AXQHrAtCsAaQCbAYEDgBIDQAAQB2ABBZAGQCrANEKAlIAAABQC1AdBuANQCjAVCKAFICJASQCmAWCbARQHrA4CrgBQDygBDDAHQCrAGDcASQCsANEIAkQC/AeBmAOQClAVCIAGQDTARD2AWQHrAuCsAaQCbAYEEgBIDPgBQB2AABZAIQCrANEJAkIAAABQC2AdBuANQCjAVCKAGICIASQCnAVCaARQHsA4CqgBQDygBDEAHQCrAHDcARQCsANEIAkIAAbdg");
	var mask_graphics_4 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCiAUCLAHQDSAQD2AXQHrAtCsAaQCaAZEEgBIDQgBQB2AABZAHQCrAOEKAkIAAABQC1AdBtAOQCkATCKAHICIASQCnAVCbARQHsA5CpgCQDzgBDDAHQCrAHDcAQQCrAOEJAlQC/AdBmAOQClAUCJAHQDTARD1AWQHqAtCtAbQCaAYEEgBIDPgCQB2ACBaAGQCrAOEJAkIAAABQC2AdBtAOQCkAUCKAGICJASQCmAVCbASQHrA3CqAAQDygCDEAHQCrAGDcASQCrANEKAlIAAbcg");
	var mask_graphics_5 = new cjs.Graphics().p("AABNuIgBgbIAAAbMhdDgIJIAA7bQC0AcBwAOQCkAUCKAGQDTASD1AWQHrAtCsAbQCaAYEEgCIDQgBQB2ABBZAHQCsANEJAlIAAACQC1AcBtANQCkAVCKAFICJASQCnAWCaASQHsA3CpgBQDzgBDDAHQCrAGDcARQCrAOEJAlQC/AdBmANQClAWCJAFQDSASD2AXQHqAsCtAbQCaAYEEgCIDPgBQB2ABBaAIQCrANEJAkIAAACQC2AcBtANQCkAVCKAGICJASQCmAVCaASQHsA4CqgBQDzgCDDAHQCrAGDcASQCrAOEKAjIAAbdg");
	var mask_graphics_6 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdDgIJIAA7bQC0AcBwAOQCjAUCLAGQDTARD1AXQHrAtCsAaQCaAYEEgBIDQAAQB2ABBZAGQCrANEKAlIAAABQC1AdBtANQCkAVCKAFICJASQCnAWCaARQHrA4CrgBQDygBDDAHQCrAGDcASQCrANEJAkQC/AeBmANQClAWCJAGQDSARD2AWQHqAuCtAaQCbAYEDgBIDPgBQB3AABZAIQCrANEJAkIAAABQC2AdBtANQCkAVCKAGICJASQCmAVCaARQHsA4CqgBQDygBDEAHQCrAHDcARQCsANEIAkIAAbdg");
	var mask_graphics_7 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCjAUCKAHQDSAQD2AXQHrAtCsAaQCaAZEFgBIDPgBQB2AABZAHQCsAOEIAkIAAABQC2AdBuAOQCjATCKAHICIASQCoAVCaARQHsA5CpgCQDzgBDDAHQCrAHDcAQQCrAOEJAlQC/AdBmAOQClAUCIAHQDUARD1AWQHrAtCsAbQCaAYEFgBIDPgCQB1ACBaAGQCrAOEJAkIAAABQC2AdBtAOQCkAUCKAGICIASQCnAVCbASQHrA3CqAAQDzgCDDAHQCrAGDcASQCsANEJAlIAAbcg");
	var mask_graphics_8 = new cjs.Graphics().p("AAANuIAAgbIAAAbMhdEgIJIAA7bQC1AcBxAOQCiAUCLAGQDSASD2AWQHrAtCsAbQCaAYEFgCIDPgBQB2ABBZAHQCrANEJAlIAAACQC2AcBtANQCkAVCKAFICIASQCnAWCbASQHsA3CpgBQDzgBDDAHQCrAGDcARQCsAOEIAlQC/AdBmANQClAWCIAFQDUASD1AXQHrAsCsAbQCaAYEEgCIDPgBQB2ABBaAHQCrAOEJAkIAAACQC2AcBtANQCkAVCKAGICJASQCmAVCbASQHrA4CqgBQDzgCDDAHQCrAGDcASQCrAOEKAjIAAbdg");
	var mask_graphics_9 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCiAUCLAGQDSARD2AXQHrAtCsAaQCaAYEEgBIDQAAQB2ABBZAGQCrANEJAlIAAABQC2AdBuANQCjAVCKAFICIASQCnAWCbARQHsA4CpgBQDzgBDDAHQCrAGDcASQCrANEJAkQC/AeBmANQClAWCJAFQDTASD1AWQHqAuCtAaQCaAYEEgBIDPgBQB2AABaAIQCrANEJAkIAAABQC2AdBtANQCkAVCKAGICJASQCmAVCbARQHrA4CqgBQDzgBDDAHQCrAHDcARQCrANEKAkIAAbdg");
	var mask_graphics_10 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBwAOQCkAUCKAHQDSAQD2AXQHrAtCsAaQCbAZEEgBIDPgBQB2AABZAHQCsAOEIAkIAAABQC2AdBuAOQCjATCKAHICIASQCnAVCbARQHrA5CrgCQDygBDDAHQCrAHDcAQQCsAOEIAlQC/AdBmAOQClAUCIAHQDTARD2AWQHqAtCtAbQCbAYEEgBIDPgCQB2ACBZAGQCrAOEJAkIAAABQC2AdBuAOQCjAUCKAGICIASQCnAVCaASQHsA3CqgBQDygBDEAHQCrAGDcASQCrANEJAlIAAbcg");
	var mask_graphics_11 = new cjs.Graphics().p("AAANuIAAgbIAAAbMhdEgIJIAA7bQC1AcBxAOQCjAUCKAGQDSASD2AWQHrAtCsAbQCbAYEEgCIDPgBQB2ABBZAHQCsANEIAlIAAACQC2AcBuANQCjAVCKAFICIASQCoAWCaASQHrA3CrgBQDygBDDAHQCrAGDcARQCrAOEJAlQC/AdBmANQClAWCIAFQDUASD1AXQHrAsCsAbQCaAYEFgCIDPgBQB1ABBaAIQCrANEJAkIAAACQC2AcBuANQCjAVCKAGICIASQCnAVCbASQHrA4CqgBQDygCDEAHQCrAGDcASQCrAOEKAjIAAbdg");
	var mask_graphics_12 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdDgIJIAA7bQC0AcBwAOQCjAUCLAGQDTARD1AXQHrAtCsAaQCaAYEEgBIDQAAQB2ABBZAGQCsANEJAlIAAABQC1AdBtANQCkAVCKAFICJASQCnAWCaARQHrA4CqgBQDzgBDDAHQCrAGDcASQCrANEJAkQC/AeBmANQClAWCJAFQDSASD2AWQHqAuCtAaQCbAYEDgBIDPgBQB3AABZAIQCrANEJAkIAAABQC2AdBuAOQCjAUCKAGICJASQCmAVCaARQHsA4CqgBQDzgBDDAHQCrAHDcARQCsANEIAkIAAbdg");
	var mask_graphics_13 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdDgIJIAA7bQC0AcBwAOQCjAUCLAHQDTARD1AWQHrAuCsAaQCaAYEEgBIDQgBQB2ABBZAGQCrAOEKAkIAAABQC1AdBuAOQCjAUCKAGICJASQCmAVCbARQHrA4CrgBQDygBDDAHQCrAHDcARQCsANEIAlQC/AeBmANQClAUCJAHQDSARD2AWQHrAtCsAbQCbAYEDgBIDQgBQB2ABBZAGQCrAOEJAlIAAABQC2AcBuAOQCjAUCKAGICJASQCmAVCaASQHtA3CpgBQDygBDEAIQCrAGDcARQCsANEIAlIAAbcg");
	var mask_graphics_14 = new cjs.Graphics().p("AAANuIAAgbIAAAbMhdDgIJIAA7bQC0AcBwAOQCjAVCLAFQDTASD1AXQHrAsCsAbQCbAYEDgCIDQAAQB2ABBZAGQCrAOEKAkIAAACQC1AcBuANQCjAVCKAGICJASQCmAVCbASQHrA4CrgBQDygCDDAHQCrAGDcASQCsAOEIAkQC/AdBmANQCmAWCHAFQDTASD2AXQHrAsCsAbQCbAYEEgBIDPgBQB2ABBZAGQCrAOEJAlIAAABQC2AcBuAOQCjAUCKAGICIASQCnAVCaASQHtA4CpgBQDygBDEAGQCrAHDcARQCsAOEIAjIAAbdg");
	var mask_graphics_15 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdEgIJIAA7bQC1AdBxANQCiAVCLAFQDSASD2AXQHrAsCsAbQCaAYEEgCIDQAAQB2AABZAIQCrANEJAkIAAABQC2AdBtANQCkAVCKAGICIASQCnAVCbARQHsA5CpgCQDzgBDDAHQCrAGDcASQCrAOEJAjQC/AeBmANQClAWCJAFQDTASD1AWQHqAuCtAaQCaAYEEgBIDPgBQB2ABBaAHQCrANEJAkIAAACQC2AcBtAOQCkAUCKAGICJASQCmAVCbARQHrA4CqgBQDzgBDDAIQCrAGDcARQCrANEKAkIAAbdg");
	var mask_graphics_16 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdDgIJIAA7bQC0AcBwAOQCkAUCKAHQDTARD1AWQHrAuCsAaQCaAYEEgBIDQgBQB2ABBZAGQCsAOEJAkIAAABQC1AdBuAOQCjAUCKAGICJASQCnAVCaARQHsA4CpgBQDzgBDDAHQCrAHDcARQCrANEJAlQC/AeBmANQCmAUCIAHQDSARD2AWQHqAtCtAbQCaAYEEgBIDPgBQB2ABBaAGQCrAOEJAlIAAABQC2AcBtAOQCkAUCKAGICJASQCmAVCaASQHtA3CpgBQDzgBDDAIQCrAGDcARQCrANEKAlIAAbcg");
	var mask_graphics_17 = new cjs.Graphics().p("AAANuIAAgbIAAAbMhdEgIJIAA7bQC1AcBxAOQCjAVCKAFQDSASD2AXQHrAsCsAbQCbAYEEgCIDPAAQB2ABBZAGQCsAOEIAkIAAACQC2AcBuANQCjAVCKAGICIASQCoAVCaASQHrA4CrgBQDygCDDAHQCrAGDcASQCrAOEJAkQC/AdBmANQClAWCIAFQDUASD1AXQHrAsCsAbQCaAYEFgBIDPgBQB1ABBaAGQCrAOEJAlIAAABQC2AcBuAOQCjAUCKAGICIASQCnAVCbASQHrA4CqgBQDygBDEAGQCrAHDcARQCrAOEJAjIAAbdg");
	var mask_graphics_18 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AdBxANQCjAVCKAFQDSASD2AXQHrAsCsAbQCaAYEFgCIDPAAQB2AABZAIQCsANEIAkIAAABQC2AdBuANQCjAVCKAGICIASQCoAVCaARQHsA5CpgCQDzgBDDAHQCrAGDcASQCrAOEJAjQC/AeBmANQClAWCIAFQDUASD1AWQHrAuCsAaQCaAYEFgBIDPgBQB1ABBaAHQCrANEJAkIAAACQC2AcBtAOQCkAUCKAGICIASQCnAVCbARQHrA4CqgBQDzgBDDAHQCrAHDcARQCsANEJAkIAAbdg");
	var mask_graphics_19 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCiAUCLAHQDSARD2AWQHrAuCsAaQCaAYEFgBIDPgBQB2ABBZAGQCsAOEIAkIAAABQC2AdBuAOQCjAUCKAGICIASQCoAVCaARQHsA4CpgBQDzgBDDAHQCrAHDcARQCsANEIAlQC/AeBmANQClAUCIAHQDUARD1AWQHrAtCsAbQCaAYEEgBIDPgBQB2ABBaAGQCrAOEJAlIAAABQC2AcBtAOQCkAUCKAGICIASQCnAVCbASQHrA3CqgBQDzgBDDAIQCrAGDcARQCrANEKAlIAAbcg");
	var mask_graphics_20 = new cjs.Graphics().p("AAANuIAAgbIAAAbMhdDgIJIAA7bQC0AcBwAOQCjAVCLAFQDTASD1AXQHrAsCsAbQCbAYEDgCIDQAAQB2ABBZAGQCrAOEKAkIAAACQC1AcBuANQCjAVCKAGICJASQCmAVCbASQHrA4CrgBQDygCDDAHQCrAGDcASQCsAOEIAkQC/AdBmANQCmAWCHAFQDTASD2AXQHrAsCsAbQCbAYEEgBIDPgBQB2ABBZAGQCrAOEJAlIAAABQC2AcBuAOQCjAUCKAGICIASQCnAVCaASQHtA4CpgBQDygBDEAGQCrAHDcARQCsAOEIAjIAAbdg");
	var mask_graphics_21 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AdBwANQCkAVCKAFQDSASD2AXQHrAsCsAbQCbAYEEgCIDPAAQB2AABZAIQCsANEIAkIAAABQC2AdBuANQCjAVCKAGICIASQCnAVCbARQHrA5CrgCQDygBDDAHQCrAGDcASQCsAOEIAjQC/AeBmANQCmAWCHAFQDTASD2AWQHqAuCtAaQCbAYEEgBIDPgBQB2ABBZAHQCrANEJAkIAAACQC2AcBuAOQCjAUCKAGICIASQCnAVCaARQHsA4CqgBQDygBDEAHQCrAHDcARQCrANEJAkIAAbdg");
	var mask_graphics_22 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCjAUCKAHQDSARD2AWQHrAuCsAaQCbAYEEgBIDPgBQB2ABBZAGQCsAOEIAkIAAABQC2AdBuAOQCjAUCKAGICIASQCoAVCaARQHrA4CrgBQDygBDDAHQCrAHDcARQCrANEJAlQC/AeBmANQClAUCIAHQDUARD1AWQHrAtCsAbQCaAYEFgBIDPgBQB1ABBaAGQCrAOEJAlIAAABQC2AcBuAOQCjAUCKAGICIASQCnAVCbASQHrA3CqgBQDygBDEAIQCrAGDcARQCrANEKAlIAAbcg");
	var mask_graphics_23 = new cjs.Graphics().p("AABNuIgBgbIAAAbMhdDgIJIAA7bQC0AcBwAOQCjAVCLAFQDTASD1AXQHrAsCsAbQCaAYEEgCIDQAAQB2ABBZAGQCsAOEJAkIAAACQC1AcBuANQCjAVCKAGICJASQCnAVCaASQHrA4CqgBQDzgCDDAHQCrAGDcASQCrAOEJAkQC/AdBmANQCmAWCIAFQDSASD2AXQHqAsCtAbQCbAYEDgBIDPgBQB3ABBZAGQCrAOEJAlIAAABQC2AcBtAOQCkAUCKAGICJASQCmAVCaASQHtA4CpgBQDzgBDDAGQCrAHDcARQCsAOEIAjIAAbdg");
	var mask_graphics_24 = new cjs.Graphics().p("AABNuIgBgcIAAAcMhdDgIJIAA7bQC0AdBwANQCjAVCLAFQDTASD1AXQHrAsCsAbQCaAYEEgCIDQAAQB2AABZAIQCrANEKAkIAAABQC1AdBuANQCjAVCKAGICJASQCmAVCbARQHrA5CrgCQDygBDDAHQCrAGDcASQCsAOEIAjQC/AeBmANQClAWCJAFQDSASD2AWQHrAuCsAaQCbAYEDgBIDPgBQB3ABBZAHQCrANEJAkIAAACQC2AcBuAOQCjAUCKAGICJASQCmAVCaARQHtA4CpgBQDygBDEAHQCrAHDcARQCsANEIAkIAAbdg");
	var mask_graphics_25 = new cjs.Graphics().p("AAANuIAAgcIAAAcMhdEgIJIAA7bQC1AcBxAOQCiAUCLAHQDSARD2AWQHrAuCsAaQCaAYEFgBIDPgBQB2ABBZAGQCsAOEIAkIAAABQC2AdBuAOQCjAUCKAGICIASQCoAVCaARQHsA4CpgBQDzgBDDAHQCrAHDcARQCsANEIAlQC/AeBmANQClAUCIAHQDUARD1AWQHrAtCsAbQCaAYEEgBIDPgBQB2ABBaAGQCrAOEJAlIAAABQC2AcBtAOQCkAUCKAGICIASQCnAVCbASQHrA3CqgBQDzgBDDAIQCrAGDcARQCrANEKAlIAAbcg");
	var mask_graphics_26 = new cjs.Graphics().p("AABNuIgBgbIAAAbMhdEgIJIAA7bQC1AcBxAOQCiAVCLAFQDSASD2AXQHrAsCsAbQCaAYEEgCIDQAAQB2ABBZAGQCrAOEJAkIAAACQC2AcBuANQCjAVCKAGICIASQCnAVCbASQHsA4CpgBQDzgCDDAHQCrAGDcASQCsAOEIAkQC/AdBmANQClAWCJAFQDTASD1AXQHqAsCtAbQCaAYEEgBIDPgBQB2ABBaAGQCrAOEJAlIAAABQC2AcBtAOQCkAUCKAGICJASQCmAVCbASQHrA4CqgBQDzgBDDAGQCrAHDcARQCrAOEKAjIAAbdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:445.7,y:101.2}).wait(1).to({graphics:mask_graphics_1,x:411.4,y:98.2}).wait(1).to({graphics:mask_graphics_2,x:377.1,y:95.2}).wait(1).to({graphics:mask_graphics_3,x:342.8,y:92.2}).wait(1).to({graphics:mask_graphics_4,x:308.6,y:89.2}).wait(1).to({graphics:mask_graphics_5,x:274.3,y:86.2}).wait(1).to({graphics:mask_graphics_6,x:240,y:83.2}).wait(1).to({graphics:mask_graphics_7,x:205.7,y:80.2}).wait(1).to({graphics:mask_graphics_8,x:171.4,y:77.2}).wait(1).to({graphics:mask_graphics_9,x:137.1,y:74.2}).wait(1).to({graphics:mask_graphics_10,x:102.9,y:71.2}).wait(1).to({graphics:mask_graphics_11,x:68.6,y:68.2}).wait(1).to({graphics:mask_graphics_12,x:34.3,y:65.2}).wait(1).to({graphics:mask_graphics_13,x:0,y:62.2}).wait(1).to({graphics:mask_graphics_14,x:-34.3,y:59.2}).wait(1).to({graphics:mask_graphics_15,x:-68.5,y:56.2}).wait(1).to({graphics:mask_graphics_16,x:-102.8,y:53.2}).wait(1).to({graphics:mask_graphics_17,x:-137.1,y:50.2}).wait(1).to({graphics:mask_graphics_18,x:-171.4,y:47.2}).wait(1).to({graphics:mask_graphics_19,x:-205.7,y:44.2}).wait(1).to({graphics:mask_graphics_20,x:-239.9,y:41.2}).wait(1).to({graphics:mask_graphics_21,x:-274.2,y:38.2}).wait(1).to({graphics:mask_graphics_22,x:-308.5,y:35.2}).wait(1).to({graphics:mask_graphics_23,x:-342.8,y:32.2}).wait(1).to({graphics:mask_graphics_24,x:-377.1,y:29.2}).wait(1).to({graphics:mask_graphics_25,x:-411.3,y:26.2}).wait(1).to({graphics:mask_graphics_26,x:-445.6,y:23.2}).wait(1));

	// Layer 3
	this.instance = new lib.snow_1();
	this.instance.parent = this;
	this.instance.setTransform(-190.3,-19.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-726.7,y:-66.2,alpha:0.648},26).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(233,238,244,0.4)","rgba(252,253,255,0.302)"],[0,1],0,86,0,-86).s().p("A6ZNSIAA6jMA0zAAAIAAajg");
	this.shape.setTransform(19,40);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer 2
	this.instance_1 = new lib.snow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-150,-35);

	this.instance_2 = new lib.car();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,29,1,1,0,0,0,141.5,67.5);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-38.7,1191.3,266.5);


// stage content:
(lib._300x250_Nissan_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_610 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(610).call(this.frame_610).wait(1));

	// Слой 11
	this.instance = new lib.white_pl();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.09;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221).to({_off:false},0).to({alpha:1},6).to({_off:true},1).wait(221).to({_off:false,alpha:0.09},0).to({alpha:1},6).to({_off:true},1).wait(155));

	// bordeer
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AXXTdMgutAAAMAAAgm5MAutAAAg");
	this.shape.setTransform(149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(611));

	// Слой 2
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,143.5,1,1,0,0,0,0.7,33.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).to({y:126.5,alpha:0.5},5).to({y:109.5,alpha:1},5).to({_off:true},79).wait(139).to({_off:false,y:143.5,alpha:0},0).to({y:126.5,alpha:0.5},5).to({y:109.5,alpha:1},5).to({_off:true},79).wait(139).to({_off:false,y:143.5,alpha:0},0).to({y:126.5,alpha:0.5},5).to({y:109.5,alpha:1},5).wait(6));

	// button_s
	this.instance_2 = new lib.button_s();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.4,283.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(137).to({_off:false},0).to({y:188.1,alpha:1},11,cjs.Ease.get(1)).to({y:195.1},4).to({_off:true},76).wait(137).to({_off:false,y:283.1,alpha:0},0).to({y:188.1,alpha:1},11,cjs.Ease.get(1)).to({y:195.1},4).to({_off:true},76).wait(137).to({_off:false,y:283.1,alpha:0},0).to({y:188.1,alpha:1},11,cjs.Ease.get(1)).to({y:195.1},4).wait(3));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(223.1,-30,0.353,0.353,0,0,0,189.6,56.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(133).to({_off:false},0).to({y:20},11,cjs.Ease.get(-1)).to({_off:true},84).wait(133).to({_off:false,y:-30},0).to({y:20},11,cjs.Ease.get(-1)).to({_off:true},84).wait(133).to({_off:false,y:-30},0).to({y:20},11,cjs.Ease.get(-1)).wait(11));

	// Слой 5
	this.instance_4 = new lib.white_pl();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.09},6).to({_off:true},1).wait(126).to({_off:false},0).to({alpha:1},11).wait(84).to({alpha:0.09},6).to({_off:true},1).wait(126).to({_off:false},0).to({alpha:1},11).wait(84).to({alpha:0.09},6).to({_off:true},1).wait(126).to({_off:false},0).to({alpha:1},11).wait(11));

	// Слой 6
	this.instance_5 = new lib.sun();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153,124,1,1,0,0,0,285.6,238);
	this.instance_5.alpha = 0.602;
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:285.7,rotation:22.7,x:183.1,alpha:0.199},144).to({_off:true},1).wait(83).to({_off:false,regX:285.6,rotation:0,x:153,alpha:0.602},0).to({regX:285.7,rotation:22.7,x:183.1,alpha:0.199},144).to({_off:true},1).wait(83).to({_off:false,regX:285.6,rotation:0,x:153,alpha:0.602},0).to({regX:285.7,rotation:22.7,x:183.1,alpha:0.199},144).to({_off:true},1).wait(10));

	// Слой 7
	this.instance_6 = new lib.Snow_b_all();
	this.instance_6.parent = this;
	this.instance_6.setTransform(317.6,131.3,2.831,2.831,0,-7.6,172.4);
	this.instance_6.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},145).wait(83).to({_off:false},0).to({_off:true},145).wait(83).to({_off:false},0).to({_off:true},145).wait(10));

	// Слой 8
	this.instance_7 = new lib.car();
	this.instance_7.parent = this;
	this.instance_7.setTransform(158.7,150,1,1,0,0,0,141.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},145).wait(83).to({_off:false},0).to({_off:true},145).wait(83).to({_off:false},0).to({_off:true},145).wait(10));

	// Слой 9
	this.instance_8 = new lib.Snow_gorizont();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,168.3,1,1,0,0,0,0,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},145).wait(83).to({_off:false},0).to({_off:true},145).wait(83).to({_off:false},0).to({_off:true},145).wait(10));

	// trail_zad.png
	this.instance_9 = new lib.Goru();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,72.5,1,1,0,0,0,150,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:85},144).to({_off:true},1).wait(83).to({_off:false,x:150},0).to({x:85},144).to({_off:true},1).wait(83).to({_off:false,x:150},0).to({x:85},144).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.4,11,1843,480.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_Nissan_2_atlas_P_.png", id:"300x250_Nissan_2_atlas_P_"},
		{src:"images/300x250_Nissan_2_atlas_NP_.jpg", id:"300x250_Nissan_2_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;