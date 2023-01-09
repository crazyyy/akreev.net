(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.t23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgFgGgBgJQABgIAFgFQAGgHAIABQAJgBAFAHQAGAFABAIQgBAJgGAGQgFAFgJAAQgIAAgGgFg");
	this.shape.setTransform(84.3,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_1.setTransform(78.4,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_2.setTransform(72.7,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBNIAAhkIAdAAIAABkgAgMguQgFgFAAgHQAAgIAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAIQAAAHgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_3.setTransform(67,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBNQgFgBgHgDQgFgDgFgGIgBAAIAAAMIgcAAIAAiZIAdAAIAABBQAGgGAGgDQAGgDAFgBIAIgBQAKAAAKAFQAIAEAHAIQAGAHAEAIQADAKAAAJQgBAKgDAKQgDAJgHAIQgGAHgJAFQgJAEgMAAIgHgBgAgMADQgGADgDAGQgDAGgBAHQABAIADAGQADAGAGADQAFADAHAAQAGAAAGgDQAGgDADgGQAEgGAAgIQAAgHgEgGQgDgGgGgDQgGgDgGAAQgHAAgFADg");
	this.shape_4.setTransform(57.9,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAGgEQAIgDAIAAIADAAIAFABIAAAdIgGgBIgEAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_5.setTransform(42.8,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgFgJAAgLIAAg/IAfAAIAAA4QgBAIAEAGQAFAFAIAAQAJAAAEgFQAFgGAAgIIAAg4IAdAAIAABlIgcAAIAAgNQgGAIgGADQgGADgEAAIgGABQgNAAgIgGg");
	this.shape_6.setTransform(32.2,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(19.9,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBMIAag9IgshaIAhAAIAYA6IAXg6IAeAAIg8CXg");
	this.shape_8.setTransform(7.8,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t23, new cjs.Rectangle(0,0,89.4,29.3), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQABgIACgIQACgHAEgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape.setTransform(102.2,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQAAgIACgIQACgHAFgGQAFgHAGgEQAIgDALgBIAHAAIAKACIAAAZIgFgBIgEAAQgJgBgEAFQgFAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_1.setTransform(93.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(83.2,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBHQgHgFgFgHQgFgHAAgKQAAgJAFgIQAFgHAHgFQAHgFAKAAQAJAAAIAFQAIAFAEAHQAEAIABAJQgBAKgEAHQgEAHgIAFQgIAEgJABQgKgBgHgEgAAkAiQgDADAAAFQAAAFADADQADAEAFAAQAFAAADgEQAEgDAAgFQAAgFgEgDQgDgEgFABQgFgBgDAEgAg9BLIBgiUIAaAAIhgCUgAg8gMQgIgEgFgHQgEgJAAgIQAAgKAEgHQAFgJAIgEQAIgEAJgBQAJABAHAEQAJAEAEAJQAEAHAAAKQAAAIgEAJQgEAHgJAEQgHAFgJAAQgJAAgIgFgAg0gxQgDAEAAAFQAAAEADAEQAEADAFAAQAFAAADgDQAEgEAAgEQAAgFgEgEQgDgEgFAAQgFAAgEAEg");
	this.shape_3.setTransform(63.7,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBGQgMgGgIgLQgHgLgEgOQgEgNAAgPQAAgOAEgNQAEgOAIgLQAIgLAMgGQAMgHAPAAQAQAAAMAHQAMAGAIAKQAIALAEAOQAEAOAAAOQAAAOgEAOQgEAOgIALQgIALgMAGQgMAGgQAAQgQAAgMgGgAgOgqQgHAFgDAHQgEAHgCAIIgCAPIACAQQACAHAEAHQADAIAHAEQAGAEAIABQAJgBAGgEQAGgEAEgIQAEgHACgHIABgQIgBgPQgCgIgEgHQgEgHgGgFQgGgEgJAAQgIAAgGAEg");
	this.shape_4.setTransform(48,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBHQgLgFgIgLQgIgJgCgOIAdgHQACAKAHAGQAGAGAKAAQAHAAAFgCQAGgEADgFQAEgFAAgGQAAgIgEgFQgDgGgGgCQgFgCgHgBQgGAAgFAEQgGACgEAFIgdgMIANhKIBWAAIAAAcIg+AAIgGAgQAGgFAHgCQAGgCAHAAQAOAAALAGQALAGAGALQAGAKAAAPQAAAPgHAMQgIALgMAGQgNAHgPgBQgNAAgMgEg");
	this.shape_5.setTransform(34.3,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(17,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_7.setTransform(6.1,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(0,0,108.5,29.3), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBIQgLgFgGgJQgHgIgCgKIAcgIQABAFACAEQADAFAFACQAFADAJAAQAGAAAGgCQAGgDADgGQADgFABgJIAAgNIgBAAQgEAGgGADIgKADIgIABQgOAAgMgHQgKgHgHgLQgGgLAAgOQAAgKADgJQAEgJAGgIQAHgHAIgEQAJgFALAAIAHABQAFABAGADQAHADAFAGIAAgMIAdAAIAABjQAAARgHAMQgHALgMAGQgNAGgPAAQgQAAgLgFgAgLguQgFADgEAGQgCAFgBAIQABAIACAFQAEAGAFADQAGACAGAAQAHAAAFgCQAGgDADgGQAEgFAAgIQAAgIgEgFQgDgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape.setTransform(79.9,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgFAAgEADQgEACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAFgHAFgDQAGgEAFgBIAHgBQANAAAIAGQAIAGAEAJQADAJAAALIAAA+g");
	this.shape_1.setTransform(67.7,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBNIAAhkIAdAAIAABkgAgMguQgFgFAAgHQAAgIAFgFQAFgGAHAAQAIAAAFAGQAFAFABAIQgBAHgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_2.setTransform(58.7,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAHgDAHAAIAFAAIADABIAAAdIgGgBIgDAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_3.setTransform(52.3,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQABAJAIAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgJADgJAAQgPAAgMgHgAAWgKQAAgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_4.setTransform(41.9,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRBNIAAhMIgUAAIAAgYIAUAAIAAgKQAAgIABgIQADgHAEgGQAFgHAGgEQAIgDALgBIAHAAIAKACIAAAZIgGgBIgDAAQgJgBgEAFQgFAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_5.setTransform(31.8,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQABgIACgIQACgHAEgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_6.setTransform(23.4,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHQgOgGgLgLQgKgKgGgOQgGgOAAgQQAAgPAGgOQAGgOALgKQAKgLAOgGQAPgGAPAAQAQAAAOAGQAOAGAKAKQALALAFANQAGAOAAAQQAAAQgGAOQgGAOgKAKQgLALgOAGQgOAFgQABQgPgBgOgFgAgWgoQgKAHgGAKQgGALgBAMQABANAGAKQAGALAKAGQAKAHAMAAQANAAAKgHQALgGAGgLQAGgKAAgNQAAgMgGgLQgGgKgLgHQgKgGgNAAQgMAAgKAGg");
	this.shape_7.setTransform(10.5,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(0,0,88.9,29.3), null);


(lib.t13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgHgFAAgJQAAgIAHgFQAFgHAIAAQAJAAAFAHQAGAFABAIQgBAJgGAFQgFAHgJAAQgIAAgFgHg");
	this.shape.setTransform(69.7,47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAFAEAGAAQAGAAADgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgJgDgFgGQgEgGAAgMQgBgJAGgHQAFgIAKgEQAIgEAKAAQANAAAJAFQAJAEAEAHQAFAGAAAGIgZAHQgBgGgEgDQgEgDgGAAQgFAAgCACQgDACAAAEQgBAEAEACQAEACAHABQAKABAJADQAJADAFAGQAFAHAAALQAAAJgFAIQgEAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_1.setTransform(61.6,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAvQgNgHgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgGAOgBQAPAAALAGQAMAHAGALQAGAMAAAOIAAAFIAAAFIhJAAQACAKAHAFQAHAGAIAAQAHgBAGgEQAGgDACgGIAZAIQgEAKgGAHQgHAGgJAEQgJADgKAAQgPAAgMgGgAAXgKQgBgEgCgEQgCgEgFgDQgEgCgIgBQgGAAgFAEQgEACgDAEQgCAEgBAEIArAAIAAAAg");
	this.shape_2.setTransform(50.8,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBOIAAibIAdAAIAACbg");
	this.shape_3.setTransform(42,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBNQgGgBgFgDQgGgDgFgGIAAAAIAAAMIgeAAIAAiZIAfAAIAABBQAFgGAGgDQAGgDAFgBIAHgBQAMAAAIAFQAJAEAHAIQAGAHADAIQADAKABAJQAAAKgEAKQgEAJgGAIQgGAHgJAFQgJAEgMAAIgHgBgAgMADQgGADgDAGQgEAGABAHQgBAIAEAGQADAGAGADQAGADAGAAQAHAAAFgDQAGgDADgGQAEgGgBgIQABgHgEgGQgDgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(32.9,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCQAHgBAIAAIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_5.setTransform(20.2,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBLIAAh3IgsAAIAAgeIB3AAIAAAeIgtAAIAAB3g");
	this.shape_6.setTransform(8.4,42.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgNAIgNQAGgLANgIQAMgGAOgBQAPAAALAGQAMAHAGALQAGAMAAAOIAAAFIAAAFIhJAAQACAKAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAHQgHAGgKAEQgJADgKAAQgOAAgMgHgAAWgKQABgEgDgEQgDgEgEgDQgFgCgHgBQgGABgFACQgEADgDAEQgCAFgBADIAqAAIAAAAg");
	this.shape_7.setTransform(107.2,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAGgEQAIgDAIAAIADAAIAFABIAAAdIgGgBIgEAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_8.setTransform(97.7,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_9.setTransform(87.3,19.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1BNIAAiXIAdAAIAAANIABAAQAFgHAFgDQAGgDAFgBIAIgBQALAAAKAFQAIAEAHAIQAGAIADAJQAEAJAAAKQAAAKgEAJQgDAJgHAHQgGAIgJAEQgJAFgMAAIgHgBIgLgEQgGgDgEgFIAAA9gAgMguQgGAEgDAFQgEAGABAIQgBAIAEAFQADAGAGAEQAFACAHAAQAGAAAGgCQAGgEADgGQAEgFgBgIQABgIgEgGQgDgFgGgEQgGgDgGAAQgHAAgFADg");
	this.shape_10.setTransform(75.7,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBHQgMgGgIgKQgHgKgCgPIAcgGQADAMAIAGQAJAHAMAAQAKAAAGgFQAGgFAAgHQAAgGgEgEQgFgEgIgBIgUgFQgSgDgLgKQgLgLAAgRQABgOAGgKQAIgLALgGQAMgGAOAAQARAAAMAGQALAGAGAJQAGAJABAKIgcAIQgBgJgHgFQgGgGgMAAQgIAAgGAFQgGAFAAAGQAAAGADAEQAFAEAIACIATADQAOADAJAGQAKAGAEAJQAFAJAAAKQAAAMgGAKQgGALgMAHQgNAGgRABQgSgBgMgFg");
	this.shape_11.setTransform(62.4,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASBNIAAg4QAAgIgEgGQgEgGgKAAQgFAAgEADQgEADgCAEQgBAFgBAFIAAA4IgdAAIAAiZIAdAAIAABBQAFgGAFgDIAJgEIAIgBQANAAAJAGQAIAFAEAJQADAJAAAKIAAA/g");
	this.shape_12.setTransform(45.2,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_13.setTransform(34.5,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBNIAAhkIAdAAIAABkgAgMgtQgFgGgBgHQABgIAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAIQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_14.setTransform(27.5,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgBKIgghrIAAAAIggBrIghAAIgsiTIAhAAIAdBoIAghoIAgAAIAgBpIAdhpIAgAAIgsCTg");
	this.shape_15.setTransform(13.3,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t13, new cjs.Rectangle(0,2,127.1,54.6), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgFgGAAgJQAAgIAFgFQAGgHAIABQAJgBAFAHQAGAFAAAIQAAAJgGAGQgFAFgJAAQgIAAgGgFg");
	this.shape.setTransform(89.4,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgEgJAAgLIAAg/IAdAAIAAA4QAAAIAFAGQADAFAJAAQAJAAAFgFQAEgGAAgIIAAg4IAdAAIAABlIgdAAIAAgNQgFAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_1.setTransform(80.3,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(68,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBMIAZg9IgrhaIAhAAIAZA6IAWg6IAfAAIg9CXg");
	this.shape_3.setTransform(55.9,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIADAAIAEABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_4.setTransform(41.8,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_5.setTransform(31.4,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLAMgIQANgHANAAQAQAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape_6.setTransform(20.1,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgFgFgIAAQgFAAgFADQgEACgBAFQgCAEAAAGIAAA3IgfAAIAAhlIAeAAIAAAOIABAAQADgHAHgDQAGgEAEgBIAHgBQANAAAIAGQAIAGAEAJQADAJABALIAAA+g");
	this.shape_7.setTransform(8.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,0,99.3,29.3), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAFAEAGAAQAGAAADgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgIgDgGgGQgEgGAAgMQgBgJAGgHQAFgIAJgEQAKgEAJAAQANAAAJAFQAIAEAFAHQAFAGABAGIgaAHQgCgGgDgDQgDgDgHAAQgFAAgDACQgCACAAAEQAAAEADACQAEACAIABQAJABAJADQAJADAEAGQAGAHAAALQAAAJgFAIQgEAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape.setTransform(114.9,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_1.setTransform(105.4,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgJAAQgGAAgDADQgFACgCAFQgBAEAAAGIAAA3IgeAAIAAhlIAdAAIAAAOIABAAQAEgHAFgDQAGgEAEgBIAIgBQANAAAIAGQAIAGAEAJQADAJAAALIAAA+g");
	this.shape_2.setTransform(95.3,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_3.setTransform(83.3,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAHgDAHAAIAFAAIADABIAAAdIgGgBIgDAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_4.setTransform(74.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgEgJAAgLIAAg/IAdAAIAAA4QAAAIAFAGQADAFAJAAQAJAAAFgFQAEgGAAgIIAAg4IAeAAIAABlIgeAAIAAgNQgFAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_5.setTransform(63.7,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_6.setTransform(51.8,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_7.setTransform(41.9,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAEAEAHAAQAHAAACgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgJgDgFgGQgEgGgBgMQAAgJAGgHQAFgIAKgEQAIgEALAAQAMAAAJAFQAIAEAFAHQAFAGAAAGIgZAHQgBgGgEgDQgDgDgHAAQgEAAgDACQgDACAAAEQAAAEADACQAEACAHABQAKABAJADQAJADAFAGQAFAHAAALQAAAJgEAIQgFAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_8.setTransform(32.7,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLALgIQANgHANAAQAQAAALAHQALAGAHAMQAGALAAAPIAAAEIAAAGIhJAAQABAJAIAFQAGAGAJgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgKADgJAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgFgDgHAAQgGAAgFADQgEADgDAFQgDADAAAEIArAAIAAAAg");
	this.shape_9.setTransform(21.9,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYBKIgbg1IgXAAIAAA1IgeAAIAAiTIA5AAQAOAAAMAFQANAFAGAKQAIALgBAQQAAAQgHAKQgIAKgMAFIAfA7gAgagHIAaAAQAEAAAGgCQAFgBAEgFQAEgEAAgHQAAgHgEgEQgEgEgFgCQgGgCgEABIgaAAg");
	this.shape_10.setTransform(9.5,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,122.2,29.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669933").s().p("A5YW5MAAAgtxMAyxAAAMAAAAtxg");
	this.shape.setTransform(1177.5,146.5,7.304,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCOQgOgJgGgMIgFAYQgBADgDAAIg1AAQgFAAABgFIA+kjQABgEADAAIA1AAQAEAAgBAFIgUBqQAHgJANgGQAOgGAQAAQAnAAAWAaQAUAXAAAlQAAA4gfAlQgfAkgtAAQgWAAgSgLgAgUALQgOASAAAZQAAAUALAMQALAKAPAAQATAAAPgPQAQgSABgdQAAgVgLgKQgLgJgRAAQgVAAgOARg");
	this.shape.setTransform(137,197.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaBWQgSgTAAgeQAAgJADgNIAZh1QAAAAABgBQAAgBAAAAQABAAABgBQAAAAABAAIA3AAQAFAAgBAFIgYBvIgCALQAAANAIAHQAHAIAOAAQAaAAAIgkIAZh0QABgDADAAIA4AAQAEAAgBAFIgiCkQgEAMAAAVQAAABAAAAQgBABAAAAQAAABgBAAQgBAAgBAAIg2AAQgDAAgBgDIABgRQgHAMgNAHQgOAHgPAAQggAAgSgUg");
	this.shape_1.setTransform(115,202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6CWQgFAAABgEIA+kkQABgDADAAIA3AAQAEAAgBAEIg+EkQAAADgDAAg");
	this.shape_2.setTransform(99.3,197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhqBzQgkglAAg7QAAhNAygxQAugtA/AAIABAAQA4AAAiAfQAcAYAHAkQABAEgEABIg5ARQgEACgBgEQgEgUgOgMQgRgRgdAAQgiAAgaAbQgdAeAAAwQAAAgATAVQAUAVAgAAQAtAAAWguQACgDADABIA0AVQADACgBADQgOAigdAXQglAdg0AAQg7AAglgmg");
	this.shape_3.setTransform(79.9,197.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpB4QgQgPAAgaQAAgIACgKIARhPIgfAAQgFAAABgFIAKgvQABgDADAAIAGAAQAgAAAIgiIAFgYQAAAAAAgBQABgBAAAAQABAAAAgBQABAAABAAIAvAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgMA4IAjAAQAFAAgBAEIgKAvQgBAEgDAAIgkAAIgRBRQAAASAVAAIAKgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgJAqQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQgKAFgQAAQgcAAgRgPg");
	this.shape_4.setTransform(56.9,198.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbBRQgVgaAAgoQAAg1AegiQAegiAsAAQAZAAAQAKQAMAHAEAKIAEgTQABgDADAAIA1AAQAEAAgBAEIgiCfQgEASAAAQIAAADQABAFgFAAIgxAAQgBAAgBAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAgEIABgRQgSAcghAAQgkAAgXgagAgmgdQgMARAAAYQAAATAKALQAKALAQAAQASAAANgQQAPgSAAgdQAAgSgKgLQgKgKgPAAQgWAAgNAUg");
	this.shape_5.setTransform(37,201.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3CTQgEAAABgEIA8keQABgDADAAICyAAQAEAAgBAFIgLA2QAAAAgBABQAAAAAAABQgBAAgBAAQAAAAgBAAIh1AAIgMA4IBoAAQAFAAgBAFIgLAxQAAADgEABIhpAAIgMA4IB0AAQAEAAgBAFIgLA2QgBADgDAAg");
	this.shape_6.setTransform(15.5,197.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ak2E+QiEiDgBi7QAAi4CEiEQCDiDC5AAQBHAABCAVQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIgCADQgiAjgNAxQgTBCAdA/QAbA9A7AgQAGAEAAAHQgCBDAnA1QApA3BCASQAxANAwgMIAEAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAQghCZh5BkQh8BmigAAIgBAAQi5AAiCiCg");
	this.shape_7.setTransform(76.9,77.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjcLiQiHgqhwhfQhthbhJh/QhJh+gZiMQgZiQAeiJQAjifBdiBQBah9CEhSQCDhRCYgYQCcgaCbAnQAFABADAFQACAFgCAFIgDAKQgGAVAAAYQAAAIgHADQgdAOgUAYQgVAYgJAgQgNA0AXAxQABADgEgBQg3gMg1AAQjHAAiOCOQiOCOgBDIQAADGCNCOQCNCPDGACQCjABCChhQCAhfAuiYIACgBIACABQAeArAzAOQAgAJAhgGQAfgGAagTQAGgFAHAFQAVALAVAGIALADQAFABADAEQADAFgCAFQgrCahlB7QhhB3iIBKQiIBJiZAQQgoAEgnAAQh2AAh0glg");
	this.shape_8.setTransform(75.9,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,151.9,212.7), null);


// stage content:
(lib._300x250_MREC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn1.on("click", function () {
		  window.open(window.clickTag, '_blank')
				});
	}
	this.frame_358 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(358).call(this.frame_358).wait(1));

	// clickayer1
	this.btn1 = new lib.Symbol4();
	this.btn1.parent = this;
	this.btn1.setTransform(1.4,0,0.126,0.853,0,0,0,1.2,0);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(359));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323232").s().p("AATArIgTg9IAAAAIgSA9IgTAAIgZhVIATAAIAQA8IASg8IATAAIASA8IAQg8IATAAIgZBVg");
	this.shape.setTransform(198.5,205);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AgQAoQgIgDgHgGQgFgGgEgIQgDgIAAgJQAAgJADgHQADgIAHgHQAGgFAIgEQAIgDAJAAQAJAAAIADQAHAEAGAFQAHAHADAIQADAHABAJQgBAJgDAIQgEAIgGAGQgGAGgIADQgIAEgJAAQgJAAgHgEgAgNgXQgFAEgEAGQgDAHAAAGQAAAHADAGQAEAHAFADQAHADAGABQAIgBAFgDQAHgDADgHQADgGABgHQgBgGgDgHQgDgGgHgEQgFgDgIAAQgGAAgHADg");
	this.shape_1.setTransform(187.1,205.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("AATArIgmg6IAAA6IgRAAIAAhVIAUAAIAkA3IAAg3IARAAIAABVg");
	this.shape_2.setTransform(177.4,205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323232").s().p("AgkArIAAhVIAaAAQAOABALAFQALAFAFAJQAGAKAAAMQAAANgGAJQgFAKgMAFQgKAGgOAAgAgTAaIAJAAQAJAAAGgDQAGgDAEgGQAEgGAAgIQAAgHgEgGQgDgGgIgDQgFgDgJAAIgJAAg");
	this.shape_3.setTransform(165.7,205);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323232").s().p("AAZArIgHgTIgkAAIgGATIgSAAIAghVIAUAAIAhBVgAAMAIIgMggIgMAgIAYAAg");
	this.shape_4.setTransform(156.7,205);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323232").s().p("AgRAoQgIgDgFgGQgGgGgEgIQgEgIAAgJQAAgJAEgHQAEgIAGgHQAGgFAIgEQAIgDAIAAQAKAAAHADQAIAEAHAFQAFAHAEAIQADAHAAAJQAAAJgDAIQgDAIgHAGQgGAGgIADQgIAEgJAAQgJAAgIgEgAgMgXQgGAEgDAGQgEAHAAAGQAAAHAEAGQADAHAGADQAFADAHABQAHgBAHgDQAFgDAEgHQADgGAAgHQAAgGgDgHQgEgGgFgEQgHgDgHAAQgHAAgFADg");
	this.shape_5.setTransform(147.5,205.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323232").s().p("AgaArIAAhVIASAAIAABEIAjAAIAAARg");
	this.shape_6.setTransform(139.7,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323232").s().p("AATArIgmg6IAAA6IgRAAIAAhVIAUAAIAkA3IAAg3IARAAIAABVg");
	this.shape_7.setTransform(131.3,205);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323232").s().p("AASArIgSg9IAAAAIgSA9IgTAAIgZhVIATAAIAQA8IASg8IASAAIATA8IAQg8IATAAIgZBVg");
	this.shape_8.setTransform(120.1,205);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323232").s().p("AgQAoQgIgDgHgGQgFgGgEgIQgEgIABgJQgBgJAEgHQADgIAHgHQAGgFAIgEQAIgDAJAAQAIAAAJADQAHAEAGAFQAHAHADAIQADAHABAJQgBAJgDAIQgDAIgHAGQgGAGgIADQgIAEgJAAQgIAAgIgEgAgNgXQgFAEgEAGQgDAHAAAGQAAAHADAGQAEAHAFADQAHADAGABQAIgBAFgDQAHgDADgHQADgGABgHQgBgGgDgHQgDgGgHgEQgFgDgIAAQgGAAgHADg");
	this.shape_9.setTransform(108.7,205.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323232").s().p("AgkArIAAhVIAaAAQAOABALAFQALAFAFAJQAGAKAAAMQAAANgGAJQgFAKgMAFQgKAGgOAAgAgTAaIAJAAQAJAAAGgDQAGgDAEgGQAEgGAAgIQAAgHgEgGQgDgGgIgDQgFgDgJAAIgJAAg");
	this.shape_10.setTransform(99.6,205);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ApIDgQhdAAhChCQhBhBAAhdQAAhcBBhBQBChCBdAAISRAAQBdAABCBCQBBBBAABcQAABdhBBBQhCBChdAAg");
	this.shape_11.setTransform(150,205,1,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(359));

	// Слой 4
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(252.9,62.2,0.375,0.375,0,0,0,76.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359));

	// THE OH BAR
	this.instance_1 = new lib.t23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.1,103.1,1.424,1.424,0,0,0,65.5,14.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(310).to({_off:false},0).to({x:110.7,alpha:1},9,cjs.Ease.get(1)).wait(40));

	// A MEAL FROM:
	this.instance_2 = new lib.t22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.2,66.6,1.424,1.424,0,0,0,78.9,14.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(307).to({_off:false},0).to({x:129.8,alpha:1},9,cjs.Ease.get(1)).wait(43));

	// WANT
	this.instance_3 = new lib.t21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42.5,31.6,1.424,1.424,0,0,0,35.6,14.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(304).to({_off:false},0).to({x:68.1,alpha:1},9,cjs.Ease.get(1)).wait(46));

	// LOADED BY BL?
	this.instance_4 = new lib.t13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(110.3,103.1,1.424,1.424,0,0,0,83.2,14.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(208).to({_off:false},0).to({regX:83.3,x:136.1,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:153.2,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// BURGER FROM:
	this.instance_5 = new lib.t12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(109.1,66.6,1.424,1.424,0,0,0,82.3,14.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(205).to({_off:false},0).to({x:134.7,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:151.8,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// WANT A FREE
	this.instance_6 = new lib.t11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(96.5,31.6,1.424,1.424,0,0,0,73.5,14.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(202).to({_off:false},0).to({x:122.1,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:139.2,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// THE OH BAR
	this.instance_7 = new lib.t23();
	this.instance_7.parent = this;
	this.instance_7.setTransform(85.1,103.1,1.424,1.424,0,0,0,65.5,14.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(108).to({_off:false},0).to({x:110.7,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:127.8,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// A MEAL FROM:
	this.instance_8 = new lib.t22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(104.2,66.6,1.424,1.424,0,0,0,78.9,14.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({_off:false},0).to({x:129.8,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:146.9,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// WANT
	this.instance_9 = new lib.t21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(42.5,31.6,1.424,1.424,0,0,0,35.6,14.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(102).to({_off:false},0).to({x:68.1,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:85.2,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// LOADED BY BL?
	this.instance_10 = new lib.t13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(110.3,103.1,1.424,1.424,0,0,0,83.2,14.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({regX:83.3,x:136.1,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:153.2,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(256));

	// BURGER FROM:
	this.instance_11 = new lib.t12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(109.1,66.6,1.424,1.424,0,0,0,82.3,14.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({x:134.7,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:151.8,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(259));

	// WANT A FREE
	this.instance_12 = new lib.t11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(96.5,31.6,1.424,1.424,0,0,0,73.5,14.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:122.1,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:139.2,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(262));

	// Слой 21
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF1544").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(359));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.8,125,308.2,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;