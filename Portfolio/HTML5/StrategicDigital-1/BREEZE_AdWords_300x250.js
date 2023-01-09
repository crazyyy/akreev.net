(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"BREEZE_AdWords_300x250_atlas_", frames: [[0,0,300,250],[302,0,167,155],[302,157,141,70]]}
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
	this.spriteSheet = ss["BREEZE_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kids = function() {
	this.spriteSheet = ss["BREEZE_AdWords_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["BREEZE_AdWords_300x250_atlas_"];
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


(lib.t6build = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.988)").s().p("Ag5CEIAAkGIByAAIAAAlIg8AAIAABFIAuAAIAAAlIguAAIAABSIA9AAIAAAlg");
	this.shape.setTransform(93.1,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.988)").s().p("AA3CEIgEixIgiCxIggAAIgjiyIgDCyIgoAAIAEkGIA5AAIAgCmIAjimIA3AAIAEEGg");
	this.shape_1.setTransform(74.1,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.988)").s().p("AgkCCQgPgHgJgLQgJgMgEgPQgEgPAAgWIAAhgQAAgVAEgPQAEgQAJgLQAJgMAPgFQAQgGAUAAQApAAASAWQATAVAAArIAABgQAAArgTAWQgSAWgpAAQgUAAgQgFgAgKheQgEACgDADIgDAIQgCAEABAFIgBALIAAB6IABALIABAJIADAIQADADAEADQAFABAFAAQAGAAAEgBQAEgDADgDQACgCACgGIACgJIAAgLIAAh6IAAgLIgCgJQgCgFgCgDQgDgDgEgCQgEgBgGAAQgFAAgFABg");
	this.shape_2.setTransform(53.5,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.988)").s().p("AAXCEIAAh1IgtAAIAAB1Ig2AAIAAkGIA2AAIAABrIAtAAIAAhrIA2AAIAAEGg");
	this.shape_3.setTransform(34.4,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,0,0.988)").s().p("AA3CEIgEixIgiCxIggAAIgjiyIgDCyIgoAAIAEkGIA5AAIAgCmIAjimIA3AAIAEEGg");
	this.shape_4.setTransform(5.2,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,0,0.988)").s().p("AAfCEIgKg7IgoAAIgKA7IgzAAIA0kGIA5AAIA0EGgAgOAoIAeAAIgQhog");
	this.shape_5.setTransform(-14.8,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,0,0.988)").s().p("Ag5CEIAAkGIByAAIAAAlIg8AAIAABFIAuAAIAAAlIguAAIAABSIA9AAIAAAlg");
	this.shape_6.setTransform(-30,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,0,0.988)").s().p("AAYCEIgdh3IgTAAIAAB3Ig1AAIAAkGIBCAAQAUAAAPADQAPADAMAHQAMAJAFANQAGAOAAAUQAAAagHAPQgHAQgSAHIAkCBgAgYgTIANAAQATABAIgKQAIgJAAgUQAAgUgHgIQgHgJgRAAIgRAAg");
	this.shape_7.setTransform(-46.8,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,0,0.988)").s().p("AhKCEIAAkGIBAAAQAYgBAQAFQARAFAKAKQAKALAEAPQAEAPAAAWIAABeQAAAXgEAQQgEAPgKALQgKALgQAEQgQAGgYAAgAgUBeIALAAIAJAAIAHgDIAFgDIAFgFIABgFIACgIIAAgJIAAgKIAAhpIAAgPIgCgLQgCgFgEgDQgDgCgGgCQgEgBgJAAIgKAAg");
	this.shape_8.setTransform(-65.6,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,0,0.988)").s().p("AAYCEIgdh3IgTAAIAAB3Ig1AAIAAkGIBCAAQAUAAAPACQAPAEAMAHQALAJAGANQAGAOAAAUQAAAagHAPQgHAQgSAHIAkCBgAgYgTIANAAQATABAIgKQAIgJAAgUQAAgUgHgIQgHgJgSAAIgQAAg");
	this.shape_9.setTransform(75.5,-12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,0,0.988)").s().p("AgkCAQgPgGgIgMQgJgMgDgQQgEgPAAgXIAAiwIA0AAIAAC3IABANIACALQABAGADAEQACAEAEACQAFADAFAAQAHAAAEgDQAFgCACgEIADgKIACgLIAAgNIAAi3IA1AAIAACwQAAAXgDAPQgEAQgIAMQgJAMgOAGQgPAFgXAAQgVAAgPgFg");
	this.shape_10.setTransform(56.4,-12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,0,0.988)").s().p("AgkCCQgPgHgJgLQgJgMgEgPQgEgPAAgWIAAhgQAAgVAEgPQAEgQAJgLQAJgMAPgFQAPgGAVAAQAqAAARAWQATAVAAArIAABgQAAArgTAWQgRAWgqAAQgVAAgPgFgAgJheQgFACgCADIgEAIIgCAJIAAALIAAB6IAAALIACAJIAEAIQACADAFADQADABAGAAQAFAAAFgBQAFgDACgDQACgCACgGIABgJIABgLIAAh6IgBgLIgBgJQgCgFgCgDQgCgDgFgCQgFgBgFAAQgGAAgDABg");
	this.shape_11.setTransform(37.7,-12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,0,0.988)").s().p("AgZCEIAAhpIgzidIAyAAIAbBcIAbhcIAxAAIgzCdIAABpg");
	this.shape_12.setTransform(20.3,-12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,0,0.988)").s().p("AhKCEIAAkGIBAAAQAYgBARAFQAQAFAKAKQAKALAEAPQAEAPAAAWIAABeQAAAXgEAQQgEAPgKALQgJALgRAEQgRAGgXAAgAgVBeIALAAIAKAAIAHgDIAGgDIADgFIADgFIABgJIABgIIAAgKIAAhpIgBgPIgCgLQgCgFgDgDQgEgCgFgCQgGgBgIAAIgLAAg");
	this.shape_13.setTransform(-4.9,-12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,0,0.988)").s().p("Ag5CEIAAkGIA2AAIAADhIA9AAIAAAlg");
	this.shape_14.setTransform(-20.7,-12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,0,0.988)").s().p("AgaCEIAAkGIA0AAIAAEGg");
	this.shape_15.setTransform(-33,-12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,0,0.988)").s().p("AgkCAQgPgGgJgMQgIgMgEgQQgDgPAAgXIAAiwIA1AAIAAC3IAAANIACALQABAGACAEQADAEAEACQAFADAFAAQAHAAAEgDQAEgCADgEIAEgKIACgLIAAgNIAAi3IA0AAIAACwQAAAXgEAPQgDAQgIAMQgJAMgPAGQgPAFgWAAQgVAAgPgFg");
	this.shape_16.setTransform(-47.1,-12.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,0,0.988)").s().p("AhNCEIAAkGIBDAAQAOAAALABQAMABAKAGQALAEAHAIQAHAHAEAMQAEALAAAQIAAABQgBAwgmAGQAuAHABA4IAAACQAAAlgUATQgTAUgmAAgAgXBeIAOAAQAUAAAHgJQAIgKAAgWQAAgWgIgKQgJgKgTAAIgNAAgAgXgZIANAAQASAAAIgJQAHgIAAgUQAAgSgJgHQgKgHgTAAIgIAAg");
	this.shape_17.setTransform(-65.4,-12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t6build, new cjs.Rectangle(-76.8,-36.8,230.7,84), null);


(lib.t5close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AhLCFIAAkJIBBAAQAYgBARAFQAQAEALALQAKALAEAQQAEAOAAAXIAABgQAAAXgEAPQgEAQgKALQgKAMgRAFQgRAEgXAAgAgVBfIALAAIAKAAQAEAAADgCIAFgDIAEgGIADgGIABgIIAAgIIAAgLIAAhqIAAgPIgCgLQgCgFgDgCQgEgDgGgCQgFgBgIgBIgLAAg");
	this.shape.setTransform(131.1,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AhOCFIAAkJIBEAAQAOgBALACQAMACALAFQALAEAHAIQAHAHAEAMQAEANAAAPIAAABQgBAxgmAGQAuAHABA5IAAACQAAAlgUAUQgUATgmAAgAgYBfIAPAAQAUABAIgLQAIgJAAgVQAAgYgJgKQgJgKgTAAIgOAAgAgYgZIANAAQAUAAAHgIQAHgKAAgTQAAgTgJgHQgKgIgTABIgJAAg");
	this.shape_1.setTransform(112.4,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AgjCDQgPgHgJgMQgJgMgEgQQgDgQgBgUIAAheQABgWADgQQAEgPAJgNQAJgMAPgGQAPgGAWAAQAUAAAQAFQAOAGAIAKQAJAKAEAOQADAOABASIAAAYIg2AAIAAgaIAAgGIAAgGIAAgFIgBgGIgCgEIgDgEQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgFgBIgGgBQgGAAgEACQgFADgCADQgCACgCAHIgBAKIgBAMIAAB2QAAAUAGAIQAEAKANAAQAFAAAEgCQADgBADgCIAEgHIABgIIABgIIAAgKIAAgaIA2AAIAAAXQgBASgDAOQgEAOgIALQgIALgPAGQgPAGgVAAQgWAAgPgGg");
	this.shape_2.setTransform(93.6,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AgZCFIAAhpIg0igIAzAAIAbBeIAbheIAyAAIg0CgIAABpg");
	this.shape_3.setTransform(67.9,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AAZCFIgqh6IgIANIAABtIg2AAIAAkJIA2AAIAABvIAwhvIA0AAIgxB3IA2CSg");
	this.shape_4.setTransform(51.6,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AgjCDQgPgHgJgMQgJgMgEgQQgEgQAAgUIAAheQAAgWAEgQQAEgPAJgNQAJgMAPgGQAPgGAVAAQAWAAAPAFQAOAGAJAKQAIAKAEAOQAEAOgBASIAAAYIg1AAIAAgaIAAgGIAAgGIAAgFIgCgGIgBgEIgDgEQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgEgBIgHgBQgFAAgFACQgEADgDADQgCACgBAHIgCAKIgBAMIAAB2QABAUAEAIQAFAKANAAQAFAAAEgCQAEgBACgCIAEgHIABgIIABgIIAAgKIAAgaIA1AAIAAAXQABASgEAOQgDAOgJALQgIALgPAGQgPAGgWAAQgVAAgPgGg");
	this.shape_5.setTransform(32.7,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AgkCDQgQgGgJgMQgJgLgEgQQgEgPAAgWIAAhiQAAgVAEgQQAEgQAJgLQAJgLAQgGQAPgGAVAAQAqAAATAWQASAWAAArIAABiQAAArgSAWQgTAXgqAAQgVAAgPgGgAgKhfQgEACgDADQgCADgBAFIgCAJIgBALIAAB8IABALIACAKQABAEACAEQADADAEACQAFACAFAAQAFAAAFgCQAEgCADgDQADgEABgEIACgKIABgLIAAh8IgBgLIgCgKQgBgEgDgDQgDgDgEgCQgFgCgFAAQgFAAgFACg");
	this.shape_6.setTransform(14,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AAYCFIgeh4IgTAAIAAB4Ig2AAIAAkJIBEAAQAUAAAQACQAPAEAMAIQALAHAHAPQAFAOAAAUQAAAagHAQQgIAQgRAHIAlCCgAgZgTIAOAAQATAAAIgJQAJgJAAgVQAAgTgIgJQgHgKgSAAIgRAAg");
	this.shape_7.setTransform(-4.6,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("ABCCIIgFgBIgGgCIgFgEIgGgEIgEgEIgFgEIgEgEQgJALgNAHQgMAFgRAAQgbABgQgSQgRgRAAgbQAAgXALgWQALgVAQgPIgJgQIgJgTIgGgQQgDgLAAgJQAAgaAPgRQAQgQAaAAQAYgBARAQQARAOAAAZIgBAOIgDAMIgGALIgGAKIgHAKIgIAJIgIAJIgHAHIAhA6QADgIADgQQADgPAAgPIAmAAQAAArgWAnQAEAEAGADQAGADAHABIAAAnIgIABIgHgBgAgmBIQAAANAGAJQAFAHAIAAQAQAAAKgNIgfg9QgOAWAAAXgAgWheQgFAGAAAJQAAAGACAJIADANIAFAPIADAKQAHgLAGgRQAGgRAAgMQAAgJgFgEQgEgEgHAAQgHAAgEAGg");
	this.shape_8.setTransform(-32.5,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AgzB1QgTgVgBgqIAvgIQAAAZAHAMQAGAMAMAAQAKAAAEgFQAFgGgBgKQABgQgIgKQgGgMgPgNIgcgYQgLgJgGgJQgIgHgEgOQgEgMgBgQQABghASgRQAUgSAgAAQALAAAKACQAJACAHAEQAGAEAFAGQAGAGADAGQADAGACAIIAEAPIACAPIgwAHIgBgNIgBgLQgCgHgCgCQgCgEgEgCQgDgCgFAAQgJABgFAGQgFAHAAAIQAAAIACAGQABAGAFAFQADAGADACIAIAJIAdAZIAPAOQAHAIAGAJQAGAKADAMQADALAAANQAAAegTATQgSASggAAQgjAAgTgUg");
	this.shape_9.setTransform(-58.4,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("AhLCFIAAkJIBSAAQBGgBAABNQgBAVgFAOQgGAPgKAIQgKAIgNADQgOAEgQAAIgXAAIAAB0gAgVgUIARAAQARAAAGgIQAGgIAAgVIgBgQQAAgGgDgGQgEgFgFgCQgHgCgJgBIgRAAg");
	this.shape_10.setTransform(-75.3,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("AgkCDQgQgGgJgMQgJgLgEgQQgEgPAAgWIAAhiQAAgVAEgQQAEgQAJgLQAJgLAQgGQAPgGAVAAQAqAAATAWQASAWAAArIAABiQAAArgSAWQgTAXgqAAQgVAAgPgGgAgKhfQgEACgDADQgCADgBAFIgCAJIgBALIAAB8IABALIACAKQABAEACAEQADADAEACQAFACAFAAQAFAAAFgCQAEgCADgDQADgEABgEIACgKIABgLIAAh8IgBgLIgCgKQgBgEgDgDQgDgDgEgCQgFgCgFAAQgFAAgFACg");
	this.shape_11.setTransform(-94.4,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AAYCFIAAh3IgvAAIAAB3Ig2AAIAAkJIA2AAIAABtIAvAAIAAhtIA2AAIAAEJg");
	this.shape_12.setTransform(-113.8,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AgzB1QgTgVgBgqIAvgIQABAZAGAMQAGAMANAAQAJAAAEgFQAEgGABgKQAAgQgIgKQgHgMgNgNIgdgYQgLgJgHgJQgGgHgFgOQgFgMABgQQgBghAUgRQATgSAgAAQAMAAAJACQAJACAHAEQAHAEAEAGQAGAGADAGQADAGADAIIADAPIABAPIguAHIgBgNIgCgLQgBgHgDgCQgCgEgEgCQgEgCgEAAQgJABgFAGQgFAHAAAIQAAAIACAGQABAGAEAFQAEAGADACIAIAJIAcAZIARAOQAGAIAGAJQAGAKADAMQADALAAANQAAAegSATQgUASgfAAQgjAAgTgUg");
	this.shape_13.setTransform(-131.7,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("Ag1B4QgTgVgBgsIAwgJQABAbAGANQAHANAMgBQAKAAAFgGQAEgGAAgKQAAgQgHgMQgHgKgPgOIgdgYQgMgLgHgIQgHgIgEgOQgFgNAAgQQAAghAUgTQAUgSAhAAQAMAAAJACQAKACAHAEQAHAFAFAFQAFAHAEAGIAFAOIAEAPIABAQIgwAIIgBgPIgCgLIgDgJQgDgEgEgCQgEgCgEAAQgKAAgFAHQgFAHAAAKQAAAHACAGQACAGAEAFIAHAJIAIAJIAdAZQAKAIAHAIQAHAHAGALQAGAJADAMQADAMAAANQAAAfgTATQgUATgfAAQgmAAgTgVg");
	this.shape_14.setTransform(132,-25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.988)").s().p("Ag7CKIAAkTIA4AAIAADtIA/AAIAAAmg");
	this.shape_15.setTransform(116.6,-25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.988)").s().p("AglCHQgQgGgKgMQgJgMgEgQQgEgRAAgVIAAhmQAAgVAEgRQAEgPAJgNQAKgMAQgGQAPgFAWAAQArAAATAXQATAWAAAsIAABmQAAAsgTAXQgTAXgrAAQgWAAgPgGgAgKhiQgFACgCADQgDADgBAFIgCAKIAAALIAACAIAAALIACAKQABAFADADQACADAFADQAEACAGAAQAGAAAFgCQAEgDADgDQACgDACgFIACgKIAAgLIAAiAIAAgLIgCgKQgCgFgCgDQgDgDgEgCQgFgCgGAAQgGAAgEACg");
	this.shape_16.setTransform(98.7,-25.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.988)").s().p("AglCHQgQgGgKgMQgJgMgEgQQgEgRAAgVIAAhmQAAgVAEgRQAEgPAJgNQAKgMAQgGQAPgFAWAAQArAAATAXQATAWAAAsIAABmQAAAsgTAXQgTAXgrAAQgWAAgPgGgAgKhiQgFACgCADQgDADgBAFIgCAKIAAALIAACAIAAALIACAKQABAFADADQACADAFADQAEACAGAAQAGAAAFgCQAEgDADgDQACgDACgFIACgKIAAgLIAAiAIAAgLIgCgKQgCgFgCgDQgDgDgEgCQgFgCgGAAQgGAAgEACg");
	this.shape_17.setTransform(79.2,-25.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.988)").s().p("AAYCKIAAh7IgvAAIAAB7Ig4AAIAAkTIA4AAIAABxIAvAAIAAhxIA4AAIAAETg");
	this.shape_18.setTransform(59.3,-25.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.988)").s().p("AgkCGQgQgGgJgMQgJgNgEgQQgEgRAAgWIAAhfQAAgXAEgRQAEgPAJgNQAJgNAQgGQAQgGAWAAQAVAAAQAFQAPAGAIALQAJALAEAOQAEAOAAASIAAAYIg3AAIAAgaIAAgGIAAgGIAAgGIgCgFIgBgFIgDgEIgEgDIgFgBIgHgBQgGAAgEACQgFACgCAEQgDADgBAGIgCALIAAAMIAAB6QAAAUAFAJQAFAKANAAQAFAAAEgCQAEgBADgDIADgGIACgIIABgJIAAgKIAAgbIA3AAIAAAXQAAATgEAOQgEAPgIALQgJAMgPAGQgPAGgWAAQgWAAgQgHg");
	this.shape_19.setTransform(39.9,-25.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.988)").s().p("Ag1B4QgTgVgBgsIAwgJQABAbAGANQAHANAMgBQAKAAAFgGQAEgGAAgKQAAgQgHgMQgHgKgPgOIgdgYQgMgLgHgIQgHgIgEgOQgFgNAAgQQAAghAUgTQAUgSAhAAQAMAAAJACQAKACAHAEQAHAFAFAFQAFAHAEAGIAFAOIAEAPIABAQIgwAIIgBgPIgCgLIgDgJQgDgEgEgCQgEgCgEAAQgKAAgFAHQgFAHAAAKQAAAHACAGQACAGAEAFIAHAJIAIAJIAdAZQAKAIAHAIQAHAHAGALQAGAJADAMQADAMAAANQAAAfgTATQgUATgfAAQgmAAgTgVg");
	this.shape_20.setTransform(22,-25.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.988)").s().p("AglCHQgQgGgKgMQgJgMgEgQQgEgRAAgVIAAhmQAAgVAEgRQAEgPAJgNQAKgMAQgGQAPgFAWAAQArAAATAXQATAWAAAsIAABmQAAAsgTAXQgTAXgrAAQgWAAgPgGgAgKhiQgFACgCADQgDADgBAFIgCAKIAAALIAACAIAAALIACAKQABAFADADQACADAFADQAEACAGAAQAGAAAFgCQAEgDADgDQACgDACgFIACgKIAAgLIAAiAIAAgLIgCgKQgCgFgCgDQgDgDgEgCQgFgCgGAAQgGAAgEACg");
	this.shape_21.setTransform(-13.7,-25.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.988)").s().p("AgbCKIAAjpIgsAAIAAgqICPAAIAAAqIgsAAIAADpg");
	this.shape_22.setTransform(-30.8,-25.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.988)").s().p("Ag7CKIAAkTIB3AAIAAAnIg/AAIAABJIAwAAIAAAmIgwAAIAABXIA/AAIAAAmg");
	this.shape_23.setTransform(-62.2,-25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.988)").s().p("Ag1B4QgTgVgBgsIAwgJQABAbAGANQAHANAMgBQAKAAAFgGQAEgGAAgKQAAgQgHgMQgHgKgPgOIgdgYQgMgLgHgIQgHgIgEgOQgFgNAAgQQAAghAUgTQAUgSAhAAQAMAAAJACQAKACAHAEQAHAFAFAFQAFAHAEAGIAFAOIAEAPIABAQIgwAIIgBgPIgCgLIgDgJQgDgEgEgCQgEgCgEAAQgKAAgFAHQgFAHAAAKQAAAHACAGQACAGAEAFIAHAJIAIAJIAdAZQAKAIAHAIQAHAHAGALQAGAJADAMQADAMAAANQAAAfgTATQgUATgfAAQgmAAgTgVg");
	this.shape_24.setTransform(-78.6,-25.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.988)").s().p("AglCHQgQgGgKgMQgJgMgEgQQgEgRAAgVIAAhmQAAgVAEgRQAEgPAJgNQAKgMAQgGQAPgFAWAAQArAAATAXQATAWAAAsIAABmQAAAsgTAXQgTAXgrAAQgWAAgPgGgAgKhiQgFACgCADQgDADgBAFIgCAKIAAALIAACAIAAALIACAKQABAFADADQACADAFADQAEACAGAAQAGAAAFgCQAEgDADgDQACgDACgFIACgKIAAgLIAAiAIAAgLIgCgKQgCgFgCgDQgDgDgEgCQgFgCgGAAQgGAAgEACg");
	this.shape_25.setTransform(-97.2,-25.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.988)").s().p("Ag7CKIAAkTIA4AAIAADtIA/AAIAAAmg");
	this.shape_26.setTransform(-113.6,-25.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.988)").s().p("AgkCGQgQgGgJgMQgJgNgEgQQgEgRAAgWIAAhfQAAgXAEgRQAEgPAJgNQAJgNAQgGQAQgGAWAAQAVAAAQAFQAPAGAIALQAJALAEAOQAEAOAAASIAAAYIg3AAIAAgaIAAgGIAAgGIAAgGIgCgFIgBgFIgDgEIgEgDIgFgBIgHgBQgGAAgEACQgFACgCAEQgDADgBAGIgCALIAAAMIAAB6QAAAUAFAJQAFAKANAAQAFAAAEgCQAEgBADgDIADgGIACgIIABgJIAAgKIAAgbIA3AAIAAAXQAAATgEAOQgEAPgIALQgJAMgPAGQgPAGgWAAQgWAAgQgHg");
	this.shape_27.setTransform(-130.9,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5close, new cjs.Rectangle(-149.6,-50.4,299.2,86), null);


(lib.t4first = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("Ag9CLQgWgYgCgzIA5gKQgBAeAJAPQAHAPAOAAQAMAAAFgHQAFgIAAgLQAAgTgIgNQgIgMgRgQIgjgdQgNgLgHgKQgJgKgFgPQgGgQABgSQgBgnAXgVQAYgVAmAAQANAAAMACQALADAIAFQAIAEAGAHQAGAHAEAHQAEAIACAJQAEAJABAJIABASIg3AJIgBgRIgDgNQgBgHgDgEQgDgEgFgCQgEgDgFAAQgLABgGAIQgGAHAAALQAAAJADAHQACAHAEAGIAIALIAKAKIAhAdQAMAJAHAJQAIAJAHALQAIAMADAOQAEAOAAAPQAAAjgXAWQgWAWgkAAQgsAAgWgYg");
	this.shape.setTransform(39.7,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AAdCfIgjiQIgXAAIAACQIhBAAIAAk9IBRAAQAYAAATAEQARADAPAKQAOAJAHARQAHARAAAYQAAAfgJATQgJATgVAJIAsCbgAgdgXIAQAAQAWAAALgLQAJgLAAgYQAAgYgIgKQgJgLgWAAIgTAAg");
	this.shape_1.setTransform(18.6,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AhFCfIAAk9ICKAAIAAAtIhJAAIAABUIA5AAIAAAsIg5AAIAABkIBKAAIAAAsg");
	this.shape_2.setTransform(-1.2,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AgeCfIAAh+Ig+i/IA8AAIAiBwIAghwIA7AAIg+C/IAAB+g");
	this.shape_3.setTransform(-20.2,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("AgsCbQgSgIgKgOQgKgOgFgTQgEgTAAgbIAAjWIBAAAIAADeIAAAQIACAOQABAHAEAEQACAFAGADQAGADAGAAQAHAAAGgDQAFgDADgFQADgEACgHIACgOIABgQIAAjeIA/AAIAADWQAAAbgFATQgDATgKAOQgLAOgSAIQgSAGgbAAQgaAAgSgGg");
	this.shape_4.setTransform(-41.2,26.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AhdCfIAAk9IBRAAQAQAAAOACQAOACANAFQANAGAJAJQAIAJAFAPQAEAOAAASIAAACQAAA6guAHQA3AJABBEIAAACQAAAtgXAXQgYAXguAAgAgcByIARAAQAYAAAJgMQAKgLAAgaQAAgcgKgMQgLgMgYAAIgPAAgAgcgeIAPAAQAXAAAJgKQAJgLAAgYQAAgWgLgJQgMgIgYAAIgJAAg");
	this.shape_5.setTransform(-63.3,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AhFCfIAAk9ICKAAIAAAtIhJAAIAABUIA5AAIAAAsIg5AAIAABkIBKAAIAAAsg");
	this.shape_6.setTransform(105.3,-11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("ABCCfIgEjWIgqDWIgmAAIgrjXIgDDXIgxAAIAGk9IBEAAIAnDKIAqjKIBDAAIAFE9g");
	this.shape_7.setTransform(82.3,-11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AgsCdQgSgIgLgNQgLgOgEgTQgFgTAAgaIAAh0QAAgaAFgSQAEgTALgOQALgOASgHQATgGAZAAQAyAAAWAaQAWAaAAA0IAAB0QAAA0gWAbQgWAagyAAQgZAAgTgGgAgMhyQgFADgDADQgDAEgBAGIgDALIAAANIAACUIAAANIADAMQABAGADADQADAEAFACQAFADAHAAQAHAAAFgDQAFgCAEgEQACgDACgGIACgMIABgNIAAiUIgBgNIgCgLQgCgGgCgEQgEgDgFgDQgFgCgHAAQgHAAgFACg");
	this.shape_8.setTransform(57.4,-11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AAcCfIAAiNIg3AAIAACNIhBAAIAAk9IBBAAIAACCIA3AAIAAiCIBBAAIAAE9g");
	this.shape_9.setTransform(34.3,-11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("AgfCfIAAkOIgzAAIAAgvIClAAIAAAvIgzAAIAAEOg");
	this.shape_10.setTransform(4.1,-11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("Ag9CLQgWgYgCgzIA4gKQAAAeAJAPQAHAPAOAAQAMAAAFgHQAFgIAAgLQAAgTgIgNQgIgMgSgQIgigdQgNgLgHgKQgJgKgFgPQgGgQABgSQAAgnAWgVQAXgVAnAAQANAAAMACQALADAIAFQAIAEAGAHQAHAHADAHQAEAIADAJQADAJAAAJIACASIg4AJIAAgRIgCgNQgCgHgDgEQgDgEgFgCQgEgDgGAAQgKABgGAIQgGAHAAALQAAAJADAHQACAHAEAGIAJALIAJAKIAhAdQALAJAJAJQAIAJAGALQAIAMADAOQAEAOAAAPQAAAjgXAWQgWAWgkAAQgsAAgWgYg");
	this.shape_11.setTransform(-14.1,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AAdCfIgkiQIgWAAIAACQIhBAAIAAk9IBQAAQAZAAASAEQASADAPAKQAOAJAHARQAHARAAAYQAAAfgJATQgIATgWAJIAsCbgAgdgXIAQAAQAXAAAJgLQAKgLAAgYQAAgYgJgKQgIgLgVAAIgUAAg");
	this.shape_12.setTransform(-35.2,-11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AgfCfIAAk9IA/AAIAAE9g");
	this.shape_13.setTransform(-52.7,-11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("AhCCfIAAk9ICGAAIAAAsIhFAAIAABWIA4AAIAAAsIg4AAIAACPg");
	this.shape_14.setTransform(-66,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4first, new cjs.Rectangle(-76.8,-40.2,198.1,94.9), null);


(lib.t3land20k = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.988)").s().p("AA5E2IhhkcIgRAeIAAD+Ih+AAIAApqIB+AAIAAEDIBvkDIB6AAIh0EWIB8FUg");
	this.shape.setTransform(-0.1,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.988)").s().p("Ah6EOQgqgxAAhRIAAkUQAAhVApgwQApgxBSAAQBSAAAqAxQApAxAABUIAAEUQAABRgrAxQgrAxhPAAQhPAAgrgxgAgRjTQgIAEgFAHQgFAGgDAIQgDAHgBAKIgCASIAAASIAAEOQAABOAsAAQAtAAAAhOIAAkOIgBgbQgBgMgEgNQgEgOgKgIQgKgHgPAAQgKAAgHADg");
	this.shape_1.setTransform(-43.1,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.988)").s().p("AilE6IAAhTICVjnIAQgbIAUgeIAOgbQAJgTADgPQAEgQAAgRQAAgggNgRQgMgOgTAAIgGABQgwAEAABYIAAAcIhzAAIAAgeQAAgqAJgjQAJgiAUgZQATgaAhgOQAhgOArAAQBRAAApArQApArAABOQAAAagFAYQgFAYgMAXQgLAYgKAQIgbAoIgJAMIh2C1IC1AAIAABdg");
	this.shape_2.setTransform(-82.1,-6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.988)").s().p("AgFGAIAAhEQhOgEgogwQgogvgDheIBtgUQACB1A5AAQAXAAAKgOQAKgOAAgXQAAgZgJgVQgJgWgNgOQgNgOgXgVIhCg4QgZgWgQgTQgPgUgLgdQgKgegBgkQAAhHApgpQAogpBGgFIAAhBIAjAAIAABBQAgACAYAMQAZALAOAQQANAQAKAYQAJAXADAVQAEAVABAZIhsASIgBggIgFgaQgDgOgGgIQgFgHgIgFQgKgFgLABQgVABgLAPQgMAPABAVQAAARADAOQAEANAJAMQAJANAHAHIAVAUIBCA5QAsAnAZAqQAYArAAA6QAAA+gmAqQglAqg/AHIAABFg");
	this.shape_3.setTransform(-121.3,-5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("Ag+CPIAAkdIB8AAIAAAoIhCAAIAABMIAzAAIAAAoIgzAAIAABaIBDAAIAAAng");
	this.shape_4.setTransform(137.1,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("Ag9CPIAAkdIA5AAIAAD2IBDAAIAAAng");
	this.shape_5.setTransform(121.7,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AhUCPIAAkdIBJAAQAPAAAMABQANACAMAFQALAFAIAIQAHAJAFAMQAEANAAARIAAACQgBAzgpAHQAyAIABA9IAAACQAAApgVAUQgWAWgpgBgAgaBnIAQAAQAVAAAJgLQAJgLAAgWQAAgZgKgMQgJgKgVAAIgPAAgAgagbIAOAAQAVAAAIgKQAIgJAAgVQAAgVgKgHQgLgIgVAAIgJAAg");
	this.shape_6.setTransform(103.6,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AgcCPIAAkdIA5AAIAAEdg");
	this.shape_7.setTransform(88,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AgpCMQgQgGgJgNQgJgOgEgSQgEgRAAgYIAAheQAAgTADgPQACgPAGgNQAGgNAKgIQAJgIAPgEQAOgGASAAQAXAAAQAHQAQAFAKALQAJALAEAQQAFAOAAAVIAAAQIg5AAIAAgUIAAgMIgCgKQgCgGgCgDQgDgEgEgCQgFgBgHAAQgGgBgFADQgFADgCADQgDADgBAHIgCALIAAAOIAAB7QAAAVAGALQAFALAPAAQAQAAAGgLQAGgNAAgVIAAgcIgcAAIAAgkIBRAAIAACTIgnAAIgEgaQgNAeghABQgVAAgPgIg");
	this.shape_8.setTransform(72.6,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AgcCPIAAkdIA5AAIAAEdg");
	this.shape_9.setTransform(57.5,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("Ag+CPIAAkdIA7AAIAAD2IBBAAIAAAng");
	this.shape_10.setTransform(45.4,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("Ag+CPIAAkdIB8AAIAAAoIhCAAIAABMIAzAAIAAAoIgzAAIAABaIBDAAIAAAng");
	this.shape_11.setTransform(29.9,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AAaCQIggiCIgVAAIAACCIg5AAIAAkeIBIAAQAWgBAQAEQARADAMAJQANAJAGAOQAHAQAAAVQAAAcgIARQgIARgTAIIAoCNgAgbgVIAPAAQAVAAAIgKQAJgKAAgVQAAgWgIgJQgHgKgUAAIgSAAg");
	this.shape_12.setTransform(67.6,-22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AgnCNQgQgHgLgMQgJgNgEgRQgFgRAAgWIAAhpQAAgXAFgSQAEgQAJgNQALgMAQgGQAQgHAXAAQAtAAAUAYQAUAYAAAvIAABpQAAAugUAYQgUAZgtgBQgXAAgQgGgAgKhnQgGACgCAEQgCADgCAGIgCAKIgBALIAACGIABALIACALQACAGACADQACADAGACQAEACAGAAQAGAAAFgCQAFgCADgDQACgDABgGIADgLIAAgLIAAiGIAAgLIgDgKQgBgGgCgDQgDgEgFgCQgFgCgGAAQgGAAgEACg");
	this.shape_13.setTransform(46.7,-22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("Ag8CQIAAkeIB5AAIAAAnIg/AAIAABOIA0AAIAAAnIg0AAIAACCg");
	this.shape_14.setTransform(29.7,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3land20k, new cjs.Rectangle(-155.4,-61.8,305,110.5), null);


(lib.t2clear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.988)").s().p("Ag+CLQgWgZAAgqIAAiOQAAgrAVgZQAWgZApAAQArAAAUAaQAWAYAAArIAACOQAAAqgWAZQgWAZgpAAQgoAAgWgZgAgJhrQgDABgDADIgEAIIgCAJIgBAJIAAAJIAACLQAAAoAWAAQAXAAABgoIAAiLIgBgOIgDgNQgCgHgFgEQgFgEgIABQgFAAgEACg");
	this.shape.setTransform(65.4,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.988)").s().p("Ag+CLQgWgZAAgqIAAiOQAAgrAWgZQAUgZAqAAQAqAAAWAaQAVAYAAArIAACOQAAAqgWAZQgWAZgpAAQgoAAgWgZgAgIhrQgFABgCADIgEAIIgCAJIgBAJIAAAJIAACLQAAAoAWAAQAXAAAAgoIAAiLIgBgOIgCgNQgCgHgFgEQgFgEgIABQgEAAgEACg");
	this.shape_1.setTransform(44.9,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,0,0.988)").s().p("Ag+CLQgWgZAAgqIAAiOQAAgrAWgZQAUgZAqAAQArAAAVAaQAVAYAAArIAACOQAAAqgWAZQgWAZgpAAQgoAAgWgZgAgIhrQgEABgDADIgEAIIgCAJIgBAJIAAAJIAACLQAAAoAWAAQAYAAAAgoIAAiLIgCgOIgCgNQgCgHgFgEQgFgEgIABQgFAAgDACg");
	this.shape_2.setTransform(24.3,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.988)").s().p("AgYAjQANgDAHgIQAHgJgBgOIgdAAIAAg4IA3AAIAAAzQAAA1gvAHg");
	this.shape_3.setTransform(9.6,35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,0,0.988)").s().p("Ag9CPQgTgUAAgpIAAgFIA5AAQAAAWAFAJQAFAJANAAQAOAAAFgOQAFgOAAglIAAggQgGAIgKAFQgKAFgOABIgBAAQgOAAgMgFQgMgEgHgJQgIgJgFgMQgFgLgCgNQgDgOAAgQQAAhsBVAAQAWAAARAHQAQAIALAOQAKANAFATQAFASAAAXIAABxQAAATgDAQQgCAQgGAPQgGAOgKAKQgJAJgPAGQgQAFgTAAQgqAAgTgUgAgKhyQgEACgCAFQgDAEgBAHIgCAPIgBATIAAANIABALIABALIADAIQABAFADACIAGAEQAEACAEAAQAPAAAJgQIAAgyIgBgRIgEgOQgCgGgFgEQgFgEgHAAQgFAAgFADg");
	this.shape_4.setTransform(-5.3,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,0,0.988)").s().p("Ag+CLQgWgZAAgqIAAiOQAAgrAVgZQAWgZApAAQArAAAUAaQAWAYAAArIAACOQAAAqgWAZQgWAZgpAAQgoAAgWgZgAgJhrQgDABgCADIgFAIIgCAJIgBAJIAAAJIAACLQAAAoAWAAQAYAAgBgoIAAiLIAAgOIgDgNQgCgHgFgEQgFgEgIABQgFAAgEACg");
	this.shape_5.setTransform(-25.7,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,0,0.988)").s().p("AgGCfIAAj+IgvARIAAguQAQgGASgKQATgJAHgJIAvAAIAAE9g");
	this.shape_6.setTransform(-47.4,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,0,0.988)").s().p("AgCDFIAAgiQgpgCgUgZQgUgZgCgvIA5gLQABA9AcgBQAMAAAFgHQAGgHAAgMQgBgNgFgLQgEgLgGgHQgHgIgLgKIgjgdQgNgLgHgJQgJgLgFgPQgGgQABgSQgBgkAWgVQAUgVAkgDIAAghIASAAIAAAhQAQABAMAGQANAGAIAIQAGAJAFAMQAFAMACAKQABALABANIg3AJIgBgRIgDgMQgBgIgDgDQgDgEgFgDQgEgCgFAAQgLAAgGAIQgGAIAAALQABAIACAHQACAHAEAHIAIAKIALAKIAhAdQAXATAMAWQANAXAAAeQAAAggTAVQgTAWggADIAAAjg");
	this.shape_7.setTransform(-66.1,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AAnBeIgDh9IgYB9IgWAAIgZh+IgDB+IgcAAIADi7IAoAAIAXB3IAZh3IAnAAIADC7g");
	this.shape_8.setTransform(64.9,-12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AgZBcQgLgEgGgJQgGgHgDgMQgDgLAAgPIAAhEQAAgPADgKQADgMAGgIQAGgIALgEQALgEAOAAQAeAAANAQQAMAPAAAeIAABEQAAAfgMAPQgNAQgeAAQgOAAgLgEgAgGhDIgFAEIgDAGIgBAHIAAAHIAABWIAAAIIABAHIADAGIAFADQADACADgBQAEABADgCIAFgDIADgGIABgHIABgIIAAhWIgBgHIgBgIIgDgFIgFgEIgHAAIgGAAg");
	this.shape_9.setTransform(50.3,-12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("AARBeIgVhVIgNAAIAABVIgmAAIAAi7IAvAAQAOABALACQALACAIAFQAIAGAEAKQAFAKAAAOQAAASgGAMQgFALgMAEIAaBcgAgRgNIAKAAQAMAAAGgHQAGgGAAgOQAAgOgFgGQgFgHgMAAIgMAAg");
	this.shape_10.setTransform(37.3,-12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("AgmBeIAAi7IBOAAIAAAaIgpAAIAAAzIAiAAIAAAaIgiAAIAABUg");
	this.shape_11.setTransform(25.9,-12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AARBeIgVhVIgNAAIAABVIgmAAIAAi7IAvAAQAOABALACQALACAIAFQAIAGAEAKQAFAKAAAOQAAASgGAMQgFALgMAEIAaBcgAgRgNIAKAAQAMAAAGgHQAGgGAAgOQAAgOgFgGQgFgHgMAAIgMAAg");
	this.shape_12.setTransform(8.4,-12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AAWBeIgHgqIgdAAIgHAqIgkAAIAli7IApAAIAkC7gAgKAdIAWAAIgMhKg");
	this.shape_13.setTransform(-4.8,-12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("AgoBeIAAi7IBRAAIAAAbIgrAAIAAAyIAhAAIAAAZIghAAIAAA6IArAAIAAAbg");
	this.shape_14.setTransform(-15.6,-12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.988)").s().p("AgoBeIAAi7IAmAAIAACgIArAAIAAAbg");
	this.shape_15.setTransform(-25.6,-12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.988)").s().p("AgYBcQgLgFgGgJQgGgIgDgLQgDgLAAgPIAAhBQAAgPADgLQADgLAGgJQAGgIALgFQALgEAOAAQAPAAAKAEQAKADAGAIQAGAIADAJQADAKAAAMIAAARIgmAAIAAgSIAAgFIAAgDIAAgFIgBgDIgBgDIgCgDIgDgCIgDgBIgFAAQgDgBgDACIgFADIgDAHIgBAHIAAAJIAABSQAAANADAHQAEAGAIAAIAHgBQACAAACgCIADgFIABgFIAAgGIAAgHIAAgSIAmAAIAAAQQAAANgDAJQgCAKgGAIQgGAHgKAFQgLAEgPAAQgOAAgLgEg");
	this.shape_16.setTransform(-37.4,-12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.988)").s().p("AgZBcQgLgEgGgJQgGgHgDgMQgDgLAAgPIAAhEQAAgPADgKQADgMAGgIQAGgIALgEQALgEAOAAQAeAAANAQQAMAPAAAeIAABEQAAAfgMAPQgNAQgeAAQgOAAgLgEgAgGhDIgFAEIgDAGIgBAHIAAAHIAABWIAAAIIABAHIADAGIAFADQADACADgBQAEABADgCIAFgDIADgGIABgHIABgIIAAhWIgBgHIgBgIIgDgFIgFgEIgHAAIgGAAg");
	this.shape_17.setTransform(-56.3,-12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.988)").s().p("AgSBeIAAifIgeAAIAAgcIBhAAIAAAcIgeAAIAACfg");
	this.shape_18.setTransform(-68,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2clear, new cjs.Rectangle(-77.4,-47.4,155,94.9), null);


(lib.t1land = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AAxC6IhTjMIAADMIhBAAIAAlzIA2AAIBRDAIAAjAIA/AAIAAFzg");
	this.shape.setTransform(129.7,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("AgzC3QgVgJgNgPQgNgRgFgWQgGgWAAgeIAAiJQAAgdAGgWQAFgWANgQQANgQAVgIQAVgIAeAAQA7AAAZAeQAaAfAAA8IAACJQAAA8gaAgQgZAfg7AAQgeAAgVgIgAgOiFQgGADgDAEQgEAEgCAHIgCANIgBAPIAACuIABAPIACANQACAHAEAFQADAEAGADQAGACAIAAQAIAAAGgCQAGgDAEgEQADgFACgHIADgNIABgPIAAiuIgBgPIgDgOQgCgGgDgEQgEgEgGgDQgGgDgIAAQgIAAgGADg");
	this.shape_1.setTransform(103.7,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.988)").s().p("AgkC6IAAk7Ig8AAIAAg4IDBAAIAAA4Ig7AAIAAE7g");
	this.shape_2.setTransform(80.5,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.988)").s().p("AhqC6IAAlzIB0AAQBhAAAABrQAAAdgIAUQgIAVgOALQgOALgSAFQgTAFgXAAIghAAIAACigAgegcIAYAAQAYAAAJgLQAJgMAAgcQAAgPgCgIQgBgJgEgHQgEgIgJgDQgJgDgNAAIgYAAg");
	this.shape_3.setTransform(58.8,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.988)").s().p("ABNC6IgEj6IgxD6IguAAIgxj7IgFD7Ig4AAIAHlzIBPAAIAuDsIAxjsIBOAAIAGFzg");
	this.shape_4.setTransform(29.5,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.988)").s().p("AAsC6IgOhSIg6AAIgNBSIhIAAIBJlzIBSAAIBIFzgAgVA5IAsAAIgWiTg");
	this.shape_5.setTransform(1.1,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.988)").s().p("AAhC6IAAilIhBAAIAAClIhMAAIAAlzIBMAAIAACZIBBAAIAAiZIBLAAIAAFzg");
	this.shape_6.setTransform(-24.9,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.988)").s().p("AAiC6Ig5iqIgLASIAACYIhMAAIAAlzIBMAAIAACcIBDicIBIAAIhFCnIBLDMg");
	this.shape_7.setTransform(-50.1,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.988)").s().p("AgxC2QgVgJgNgRQgMgRgFgWQgGgWAAgdIAAiCQAAgfAGgWQAFgWAMgRQANgRAVgIQAWgJAdAAQAeAAAUAIQAVAHAMAPQALAOAGATQAFATAAAaIAAAgIhKAAIAAgjIAAgJIAAgIIgBgIIgCgHIgCgHIgEgEQgCgEgDgBIgHgBQgEgCgFAAQgIAAgGADQgGADgEAFQgDAFgCAHIgCAPIgBAQIAAClQAAAcAHANQAHANASgBQAHAAAFgBQAGgCADgFIAFgIIADgLIABgLIAAgPIAAgkIBKAAIAAAgQAAAagFATQgFAUgMAPQgLAPgVAJQgVAIgeAAQgdAAgWgJg");
	this.shape_8.setTransform(-76.5,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AgzC3QgVgJgNgPQgNgRgFgWQgGgWAAgeIAAiJQAAgdAGgWQAFgWANgQQANgQAVgIQAVgIAeAAQA7AAAZAeQAaAfAAA8IAACJQAAA8gaAgQgZAfg7AAQgeAAgVgIgAgOiFQgGADgDAEQgEAEgCAHIgCANIgBAPIAACuIABAPIACANQACAHAEAFQADAEAGADQAGACAIAAQAIAAAGgCQAGgDAEgEQADgFACgHIADgNIABgPIAAiuIgBgPIgDgOQgCgGgDgEQgEgEgGgDQgGgDgIAAQgIAAgGADg");
	this.shape_9.setTransform(-102.6,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.988)").s().p("AAiC6IgqioIgaAAIAACoIhMAAIAAlzIBeAAQAdAAAVAFQAVAEARALQARALAIAUQAIATAAAdQAAAkgKAWQgLAWgYALIAzC1gAgigbIASAAQAbAAAMgMQALgNAAgdQAAgbgKgNQgKgNgZAAIgXAAg");
	this.shape_10.setTransform(-128.5,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.988)").s().p("AhQC6IAAlzIChAAIAAA0IhVAAIAABjIBBAAIAAA0IhBAAIAAB1IBWAAIAAAzg");
	this.shape_11.setTransform(130.6,-20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.988)").s().p("AhQC6IAAlzIBMAAIAAFAIBVAAIAAAzg");
	this.shape_12.setTransform(110.7,-20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.988)").s().p("AAsC6IgOhSIg6AAIgNBSIhIAAIBJlzIBSAAIBIFzgAgVA5IAsAAIgWiTg");
	this.shape_13.setTransform(87.4,-20.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.988)").s().p("AhICiQgagcgCg7IBCgMQAAAjAKARQAIASASAAQANAAAGgJQAGgIgBgNQAAgXgJgOQgJgPgVgSIgngiQgQgNgJgMQgJgMgHgSQgGgRAAgWQAAgtAagZQAcgZAtAAQAQAAANADQANADAJAFQAJAGAIAIQAHAIAEAJQAFAJADALIAFAUIACAVIhBALIgCgTIgDgQQgCgJgCgEQgEgFgFgCQgGgEgGABQgNABgGAIQgHAKAAANQAAAKADAIQACAIAFAHIAKAMIALAMIAoAiQANALAJAKQAJALAJANQAHAOAFAQQAFAQAAASQAAApgbAaQgbAagrAAQgyAAgagdg");
	this.shape_14.setTransform(63.9,-20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.988)").s().p("AAiC6IgqioIgaAAIAACoIhMAAIAAlzIBeAAQAdAAAVAFQAWAEAQALQAQALAJAUQAIATAAAdQAAAkgKAWQgLAWgZALIA0C1gAgigbIATAAQAaAAALgMQAMgNAAgdQAAgbgKgNQgKgNgZAAIgXAAg");
	this.shape_15.setTransform(27.7,-20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.988)").s().p("AgzC3QgVgJgNgPQgNgRgFgWQgGgWAAgeIAAiIQAAgfAGgVQAFgWANgQQANgQAVgIQAVgIAeAAQA7AAAZAeQAaAgAAA8IAACIQAAA9gaAeQgZAgg7AAQgeAAgVgIgAgOiFQgGACgDAFQgEAEgCAHIgCANIgBAPIAACuIABAPIACANQACAHAEAEQADAFAGACQAGADAIAAQAIAAAGgDQAGgCAEgFQADgEACgHIADgNIABgPIAAiuIgBgPIgDgOQgCgGgDgEQgEgFgGgCQgGgDgIAAQgIAAgGADg");
	this.shape_16.setTransform(0.6,-20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.988)").s().p("AhOC6IAAlzICdAAIAAA0IhRAAIAABkIBDAAIAAA0IhDAAIAACng");
	this.shape_17.setTransform(-21.4,-20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.988)").s().p("AhpC6IAAlzIBaAAQAjAAAXAGQAYAHAOAPQAOAPAGAVQAFAVAAAgIAACFQAAAhgFAWQgGAWgOAPQgOAPgXAHQgXAHgiAAgAgdCFIAPAAIAOAAQAGgBAEgDIAIgEQADgDACgEIADgIQACgEAAgHIABgNIAAgOIAAiVIgBgVQAAgIgDgHQgCgHgFgEQgFgDgIgCQgHgDgMAAIgPAAg");
	this.shape_18.setTransform(-56.5,-20.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.988)").s().p("AAxC6IhTjMIAADMIhBAAIAAlzIA1AAIBSDAIAAjAIA/AAIAAFzg");
	this.shape_19.setTransform(-82.5,-20.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.988)").s().p("AAsC6IgOhSIg6AAIgNBSIhIAAIBJlzIBSAAIBIFzgAgVA5IAsAAIgWiTg");
	this.shape_20.setTransform(-107.6,-20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.988)").s().p("AhQC6IAAlzIBMAAIAAFAIBVAAIAAAzg");
	this.shape_21.setTransform(-129,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1land, new cjs.Rectangle(-149.6,-54.4,299.2,108.9), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,141,70), null);


(lib.kids_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kids();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kids_1, new cjs.Rectangle(0,0,167,155), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D917E").s().p("AgkBVIAAipIBJAAIAAAYIgnAAIAAAtIAeAAIAAAXIgeAAIAAA2IAnAAIAAAXg");
	this.shape.setTransform(46.2,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D917E").s().p("AAPBVIgShMIgMAAIAABMIgjAAIAAipIArAAQANAAAKACQAJACAIAFQAHAFAEAJQAEAJAAANQAAARgFAJQgEALgMAEIAYBTgAgPgMIAJAAQALAAAFgFQAGgHAAgMQAAgNgFgFQgFgHgLAAIgKAAg");
	this.shape_1.setTransform(35.4,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D917E").s().p("AgXBTQgJgDgGgIQgGgHgDgKQgCgKAAgOIAAg+QAAgNACgKQADgKAGgIQAGgHAJgEQAKgDANAAQAbAAAMAOQALAOAAAbIAAA+QAAAbgLAPQgMAOgbAAQgNAAgKgEgAgGg8IgEADIgCAFIgCAGIAAAHIAABOIAAAHIACAGIACAGIAEADQADABADAAQAEAAADgBIAEgDIADgGIABgGIAAgHIAAhOIAAgHIgBgGIgDgFIgEgDQgDgCgEAAQgDAAgDACg");
	this.shape_2.setTransform(23.1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D917E").s().p("AAjBVIgChxIgWBxIgUAAIgXhzIgCBzIgaAAIADipIAlAAIAUBrIAXhrIAjAAIADCpg");
	this.shape_3.setTransform(9.8,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D917E").s().p("AAWBVIglhdIAABdIgdAAIAAipIAYAAIAlBXIAAhXIAcAAIAACpg");
	this.shape_4.setTransform(-8.6,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D917E").s().p("AAPBVIgShMIgMAAIAABMIgjAAIAAipIArAAQANAAAKACQAJACAIAFQAHAFAEAJQAEAJAAANQAAARgFAJQgEALgMAEIAYBTgAgPgMIAJAAQALAAAFgFQAGgHAAgMQAAgNgFgFQgFgHgLAAIgKAAg");
	this.shape_5.setTransform(-20.2,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D917E").s().p("AAUBVIgGgmIgaAAIgGAmIghAAIAhipIAlAAIAhCpgAgJAaIATAAIgKhDg");
	this.shape_6.setTransform(-32.2,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D917E").s().p("AgkBVIAAipIBJAAIAAAYIgnAAIAAAtIAeAAIAAAXIgeAAIAAA2IAnAAIAAAXg");
	this.shape_7.setTransform(-42,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D917E").s().p("AgkBVIAAipIAiAAIAACSIAnAAIAAAXg");
	this.shape_8.setTransform(-51.1,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.988)").s().p("AqPCvIAAldIUfAAIAAFdg");
	this.shape_9.setTransform(0,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(13,145,126,0.988)").s().p("AqoDIIAAmPIVRAAIAAGPgAqPCvIUfAAIAAldI0fAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-68.1,-20,136.3,40.1), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.BREEZE_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_654 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(654).call(this.frame_654).wait(106));

	// kids
	this.instance = new lib.kids_1();
	this.instance.parent = this;
	this.instance.setTransform(216.4,172.5,1,1,0,0,0,83.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(760));

	// t6-build
	this.instance_1 = new lib.t6build();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,123,0.93,0.93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:false},0).to({x:83,alpha:1},15,cjs.Ease.get(1)).wait(85).to({x:173,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(264).to({_off:false,x:-7},0).to({x:83,alpha:1},15,cjs.Ease.get(1)).wait(85).to({x:173,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(15));

	// t5-close
	this.instance_2 = new lib.t5close();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149,13.5,0.983,0.983);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(234).to({_off:false},0).to({y:53.5,alpha:1},15,cjs.Ease.get(1)).wait(85).to({x:240,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(264).to({_off:false,x:149,y:13.5},0).to({y:53.5,alpha:1},15,cjs.Ease.get(1)).wait(85).to({x:240,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(30));

	// t4-first
	this.instance_3 = new lib.t4first();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,123,0.93,0.93);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({_off:false},0).to({x:83,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:183,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(284).to({_off:false,x:23},0).to({x:83,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:183,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// t3-land-20k
	this.instance_4 = new lib.t3land20k();
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.5,3.4,0.983,0.983);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({y:53.4,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:268.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(284).to({_off:false,x:148.5,y:3.4},0).to({y:53.4,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:268.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(160));

	// t2-clear
	this.instance_5 = new lib.t2clear();
	this.instance_5.parent = this;
	this.instance_5.setTransform(40.6,130,0.93,0.93);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({x:80.6,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:160.6,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(284).to({_off:false,x:40.6},0).to({x:80.6,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:160.6,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(255));

	// t1-land
	this.instance_6 = new lib.t1land();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149,23.5,0.983,0.983);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:53.5,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:232,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(284).to({_off:false,x:149,y:23.5},0).to({y:53.5,alpha:1},15,cjs.Ease.get(1)).wait(65).to({x:232,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(270));

	// Слой 17
	this.instance_7 = new lib.btn();
	this.instance_7.parent = this;
	this.instance_7.setTransform(81.5,246.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(234).to({_off:false},0).to({y:216.2,alpha:1},15,cjs.Ease.get(1)).wait(115).to({x:171.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(234).to({_off:false,x:81.5,y:246.2},0).to({y:216.2,alpha:1},15,cjs.Ease.get(1)).wait(115).to({x:171.5,alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(5,94,82,0.749)","rgba(5,94,82,0.749)","rgba(5,94,82,0)"],[0,0.604,1],-456,11.8,-156,11.8).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape.setTransform(150,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(5,94,82,0.729)","rgba(5,94,82,0.729)","rgba(5,94,82,0)"],[0,0.604,1],-381.9,11.4,-81.9,11.4).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_1.setTransform(150,90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(5,94,82,0.714)","rgba(5,94,82,0.714)","rgba(5,94,82,0)"],[0,0.604,1],-312.9,11.1,-12.9,11.1).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_2.setTransform(150,90.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(5,94,82,0.694)","rgba(5,94,82,0.694)","rgba(5,94,82,0)"],[0,0.604,1],-249,10.7,51,10.7).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_3.setTransform(150,90.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(5,94,82,0.678)","rgba(5,94,82,0.678)","rgba(5,94,82,0)"],[0,0.604,1],-190.2,10.4,109.8,10.4).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_4.setTransform(150,90.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(5,94,82,0.667)","rgba(5,94,82,0.667)","rgba(5,94,82,0)"],[0,0.604,1],-136.5,10.2,163.5,10.2).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_5.setTransform(150,90.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(5,94,82,0.655)","rgba(5,94,82,0.655)","rgba(5,94,82,0)"],[0,0.604,1],-88,9.9,212,9.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_6.setTransform(150,90.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(5,94,82,0.643)","rgba(5,94,82,0.643)","rgba(5,94,82,0)"],[0,0.604,1],-44.5,9.7,255.5,9.7).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_7.setTransform(150,90.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(5,94,82,0.631)","rgba(5,94,82,0.631)","rgba(5,94,82,0)"],[0,0.604,1],-6.2,9.5,293.8,9.5).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_8.setTransform(150,90.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(5,94,82,0.624)","rgba(5,94,82,0.624)","rgba(5,94,82,0)"],[0,0.604,1],27,9.3,327,9.3).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_9.setTransform(150,90.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(5,94,82,0.616)","rgba(5,94,82,0.616)","rgba(5,94,82,0)"],[0,0.604,1],55.1,9.2,355.1,9.2).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_10.setTransform(150,90.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(5,94,82,0.612)","rgba(5,94,82,0.612)","rgba(5,94,82,0)"],[0,0.604,1],78.1,9.1,378.1,9.1).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_11.setTransform(150,90.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(5,94,82,0.608)","rgba(5,94,82,0.608)","rgba(5,94,82,0)"],[0,0.604,1],96,9,396,9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_12.setTransform(150,90.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(5,94,82,0.604)","rgba(5,94,82,0.604)","rgba(5,94,82,0)"],[0,0.604,1],108.8,8.9,408.8,8.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_13.setTransform(150,90.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],116.5,8.9,416.5,8.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_14.setTransform(150,90.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],119,8.9,419,8.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_15.setTransform(150,90.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],108.8,8.9,408.8,8.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_16.setTransform(150,90.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],95.9,8.9,395.9,8.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_17.setTransform(150,90.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],78,8.9,378,8.9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_18.setTransform(150,90.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],54.9,9,354.9,9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_19.setTransform(150,90.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],26.7,9,326.7,9).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_20.setTransform(150,90.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-6.6,9.1,293.4,9.1).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_21.setTransform(150,90.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-45.1,9.1,254.9,9.1).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_22.setTransform(150,90.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-88.7,9.2,211.3,9.2).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_23.setTransform(150,90.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-137.4,9.3,162.6,9.3).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_24.setTransform(150,90.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-191.3,9.4,108.7,9.4).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_25.setTransform(150,90.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-250.3,9.5,49.7,9.5).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_26.setTransform(150,90.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-314.4,9.6,-14.4,9.6).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_27.setTransform(150,90.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-383.6,9.7,-83.6,9.7).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_28.setTransform(150,90.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(5,94,82,0.6)","rgba(5,94,82,0.6)","rgba(5,94,82,0)"],[0,0.604,1],-458,9.8,-158,9.8).s().p("A3bOEIAA8HMAu3AAAIAAcHg");
	this.shape_29.setTransform(150,90.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},320).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},320).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(15));

	// logo
	this.instance_8 = new lib.logo_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(82.1,288.6,1,1,0,0,0,70.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:208.6},14,cjs.Ease.get(1)).wait(205).to({y:238.6,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(145).to({_off:false,y:288.6,alpha:1},0).to({y:208.6},14,cjs.Ease.get(1)).wait(205).to({y:238.6,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// yellow
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],152,-6.1,452,-6.1).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_30.setTransform(150,215.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],89.1,-6.3,389.1,-6.3).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_31.setTransform(150,215.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],30.9,-6.6,330.9,-6.6).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_32.setTransform(150,215.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-22.7,-6.8,277.3,-6.8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_33.setTransform(150,215.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-71.6,-7,228.4,-7).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_34.setTransform(150,215.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-115.9,-7.2,184.1,-7.2).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_35.setTransform(150,215.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-155.5,-7.4,144.5,-7.4).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_36.setTransform(150,215.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-190.4,-7.5,109.6,-7.5).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_37.setTransform(150,215.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-220.7,-7.7,79.3,-7.7).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_38.setTransform(150,215.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-246.3,-7.8,53.7,-7.8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_39.setTransform(150,215.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-267.3,-7.9,32.7,-7.9).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_40.setTransform(150,215.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-283.6,-7.9,16.4,-7.9).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_41.setTransform(150,215.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-295.2,-8,4.8,-8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_42.setTransform(150,215.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-302.2,-8,-2.2,-8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_43.setTransform(150,215.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-304.5,-8,-4.5,-8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_44.setTransform(150,215.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-302.5,-8,-2.5,-8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_45.setTransform(150,215.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-296.3,-7.9,3.7,-7.9).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_46.setTransform(150,215.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-285.9,-7.7,14.1,-7.7).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_47.setTransform(150,215.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-271.5,-7.4,28.5,-7.4).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_48.setTransform(150,215.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-252.9,-7,47.1,-7).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_49.setTransform(150,215.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-230.2,-6.6,69.8,-6.6).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_50.setTransform(150,215.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-203.4,-6.1,96.6,-6.1).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_51.setTransform(150,215.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-172.4,-5.5,127.6,-5.5).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_52.setTransform(150,215.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-137.3,-4.8,162.7,-4.8).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_53.setTransform(150,215.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-98.1,-4,201.9,-4).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_54.setTransform(150,215.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-54.7,-3.2,245.3,-3.2).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_55.setTransform(150,215.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],-7.2,-2.3,292.8,-2.3).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_56.setTransform(150,215.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],44.4,-1.3,344.4,-1.3).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_57.setTransform(150,215.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],100.1,-0.2,400.1,-0.2).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_58.setTransform(150,215.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(220,219,64,0)","#DCDB40","#DCDB40"],[0.027,0.42,1],160,0.9,460,0.9).s().p("A3bFdIAAq5MAu3AAAIAAK5g");
	this.shape_59.setTransform(150,215.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},350).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},350).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// bg
	this.instance_9 = new lib.bg_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(760));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,323.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/BREEZE_AdWords_300x250_atlas_.png", id:"BREEZE_AdWords_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;