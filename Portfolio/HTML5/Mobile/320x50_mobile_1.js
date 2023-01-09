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


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgFgJAAgLIAAg/IAfAAIAAA4QgBAIAEAGQAFAFAIAAQAJAAAEgFQAFgGAAgIIAAg4IAdAAIAABlIgcAAIAAgNQgGAIgGADQgGADgEAAIgGABQgNAAgIgGg");
	this.shape.setTransform(241,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(228.7,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBMIAag9IgrhaIAgAAIAYA6IAXg6IAeAAIg8CXg");
	this.shape_2.setTransform(216.6,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQAEgJAGgEQAIgDAHAAIAFAAIADABIAAAdIgGgBIgDAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_3.setTransform(202.5,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_4.setTransform(192.1,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAHAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgJADgKAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_5.setTransform(180.8,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgEAAgFADQgEACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAEgHAGgDQAHgEADgBIAIgBQANAAAIAGQAIAGAEAJQAEAJgBALIAAA+g");
	this.shape_6.setTransform(168.8,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgDgFIgDgJIAagHQABAGAEAEQAEAEAHAAQAGAAAEgDQACgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgJgDgEgGQgGgGAAgMQABgJAFgHQAGgIAIgEQAKgEAJAAQAOAAAIAFQAIAEAFAHQAEAGACAGIgaAHQgCgGgDgDQgEgDgGAAQgFAAgDACQgDACAAAEQABAEADACQAEACAIABQAJABAJADQAJADAEAGQAGAHAAALQAAAJgEAIQgFAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_7.setTransform(152.9,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_8.setTransform(143.4,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgEAAgEADQgFACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAEgHAGgDQAHgEADgBIAIgBQANAAAIAGQAIAGAEAJQAEAJgBALIAAA+g");
	this.shape_9.setTransform(133.3,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_10.setTransform(121.3,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAIAAIAFAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_11.setTransform(112.4,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgEgJgBgLIAAg/IAfAAIAAA4QgBAIAEAGQAEAFAJAAQAJAAAEgFQAFgGAAgIIAAg4IAeAAIAABlIgdAAIAAgNQgGAIgGADQgGADgEAAIgGABQgNAAgIgGg");
	this.shape_12.setTransform(101.7,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_13.setTransform(89.8,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_14.setTransform(79.9,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAFAEAGAAQAGAAADgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgIgDgGgGQgEgGAAgMQgBgJAGgHQAFgIAKgEQAJgEAJAAQANAAAJAFQAJAEAEAHQAEAGACAGIgaAHQgCgGgDgDQgEgDgGAAQgFAAgDACQgCACAAAEQgBAEAEACQAEACAIABQAJABAJADQAJADAEAGQAGAHAAALQAAAJgFAIQgEAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_15.setTransform(70.7,17.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQABAJAIAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgJADgJAAQgPAAgMgHgAAWgKQAAgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_16.setTransform(59.9,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIADAAIAEABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_17.setTransform(50.4,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_18.setTransform(36.5,15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_19.setTransform(26.5,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(19.2,0,230.2,29.3), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape.setTransform(265.4,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_1.setTransform(259.7,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBNIAAhkIAdAAIAABkgAgMguQgFgFgBgHQABgIAFgFQAFgGAHAAQAIAAAFAGQAGAFgBAIQABAHgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_2.setTransform(254,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBNQgFgBgHgDQgFgDgFgGIgBAAIAAAMIgdAAIAAiZIAeAAIAABBQAGgGAGgDQAGgDAFgBIAIgBQALAAAIAFQAKAEAGAIQAGAHAEAIQACAKAAAJQAAAKgDAKQgEAJgFAIQgHAHgJAFQgJAEgLAAIgIgBgAgMADQgGADgDAGQgDAGgBAHQABAIADAGQADAGAGADQAGADAGAAQAGAAAGgDQAGgDADgGQADgGABgIQgBgHgDgGQgDgGgGgDQgGgDgGAAQgGAAgGADg");
	this.shape_3.setTransform(244.9,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAGgEQAHgDAJAAIADAAIAFABIAAAdIgHgBIgDAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_4.setTransform(229.8,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgFgJABgLIAAg/IAdAAIAAA4QAAAIAEAGQAFAFAIAAQAJAAAEgFQAFgGAAgIIAAg4IAdAAIAABlIgdAAIAAgNQgFAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_5.setTransform(219.1,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(206.8,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBMIAZg9IgrhaIAhAAIAZA6IAWg6IAfAAIg9CXg");
	this.shape_7.setTransform(194.8,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgEAAgEADQgFACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAFgHAFgDQAHgEADgBIAIgBQANAAAIAGQAIAGAEAJQAEAJgBALIAAA+g");
	this.shape_8.setTransform(178.2,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(165.8,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbBHQgHgFgFgHQgEgHgBgKQABgJAEgIQAFgHAHgFQAIgFAJAAQAKAAAHAFQAHAFAFAHQAEAIABAJQgBAKgEAHQgFAHgHAFQgHAEgKABQgJgBgIgEgAAkAiQgEADABAFQgBAFAEADQADAEAFAAQAFAAAEgEQADgDAAgFQAAgFgDgDQgEgEgFABQgFgBgDAEgAg9BLIBgiUIAaAAIhgCUgAg8gMQgIgEgEgHQgFgJAAgIQAAgKAFgHQAEgJAIgEQAHgEAKgBQAJABAIAEQAIAEAEAJQAEAHABAKQgBAIgEAJQgEAHgIAEQgIAFgJAAQgKAAgHgFgAg0gxQgDAEAAAFQAAAEADAEQAEADAFAAQAFAAADgDQADgEAAgEQAAgFgDgEQgDgEgFAAQgFAAgEAEg");
	this.shape_10.setTransform(146.3,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcBGQgMgGgIgLQgHgLgEgOQgEgNAAgPQAAgOAEgNQAEgOAIgLQAIgLAMgGQAMgHAPAAQAQAAAMAHQAMAGAIAKQAIALAEAOQAEAOAAAOQAAAOgEAOQgEAOgIALQgIALgMAGQgMAGgQAAQgQAAgMgGgAgOgqQgHAFgDAHQgEAHgCAIIgCAPIACAQQACAHAEAHQADAIAHAEQAGAEAIABQAJgBAGgEQAGgEAEgIQAEgHACgHIABgQIgBgPQgCgIgEgHQgEgHgGgFQgGgEgJAAQgIAAgGAEg");
	this.shape_11.setTransform(130.6,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZBHQgLgFgIgLQgIgJgCgOIAdgHQACAKAHAGQAGAGAKAAQAHAAAFgCQAGgEADgFQAEgFAAgGQAAgIgEgFQgDgGgGgCQgFgCgHgBQgGAAgFAEQgGACgEAFIgdgMIANhKIBWAAIAAAcIg+AAIgGAgQAGgFAHgCQAGgCAHAAQAOAAALAGQALAGAGALQAGAKAAAPQAAAPgHAMQgIALgMAGQgNAHgPgBQgNAAgMgEg");
	this.shape_12.setTransform(116.9,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_13.setTransform(99.6,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_14.setTransform(88.7,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BNIAAiXIAeAAIAAANIABAAQAEgHAHgDQAFgDAFgBIAJgBQALAAAIAFQAKAEAGAIQAGAIAEAJQACAJAAAKQABAKgEAJQgEAJgFAHQgHAIgJAEQgJAFgLAAIgIgBIgLgEQgFgDgFgFIAAA9gAgMguQgFAEgEAFQgEAGAAAIQAAAIAEAFQAEAGAFAEQAGACAGAAQAHAAAFgCQAGgEADgGQADgFAAgIQAAgIgDgGQgDgFgGgEQgFgDgHAAQgGAAgGADg");
	this.shape_15.setTransform(73.6,19.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgEgJgBgLIAAg/IAeAAIAAA4QAAAIAFAGQADAFAJAAQAJAAAFgFQAEgGAAgIIAAg4IAeAAIAABlIgeAAIAAgNQgFAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_16.setTransform(60.7,17.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLAMgIQANgHANAAQAQAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape_17.setTransform(44,17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAzIgohlIAfAAIAYBDIAZhDIAfAAIgpBlg");
	this.shape_18.setTransform(32.1,17.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_19.setTransform(20.3,17.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaBHQgNgGgHgKQgIgKgCgPIAdgGQABAMAKAGQAIAHALAAQALAAAGgFQAGgFAAgHQAAgGgFgEQgEgEgIgBIgUgFQgSgDgLgKQgKgLgBgRQAAgOAIgKQAGgLAMgGQAMgGAOAAQARAAALAGQAMAGAGAJQAGAJACAKIgcAIQgCgJgGgFQgHgGgLAAQgJAAgGAFQgGAFAAAGQAAAGAEAEQAEAEAHACIAUADQAOADAJAGQAJAGAGAJQAEAJAAAKQAAAMgGAKQgGALgNAHQgMAGgSABQgQgBgMgFg");
	this.shape_20.setTransform(8.4,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(0,0,270.4,29.3), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAOQgFgFAAgJQAAgIAFgFQAGgHAIAAQAJAAAFAHQAGAFAAAIQAAAJgGAFQgFAHgJAAQgIAAgGgHg");
	this.shape.setTransform(217.2,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAvQgNgHgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgGAOgBQAPAAALAGQAMAHAGALQAGAMAAAOIAAAFIAAAFIhJAAQACAKAHAFQAHAGAIAAQAHgBAGgEQAGgDACgGIAZAJQgEAJgGAHQgHAGgJAEQgJADgKAAQgPAAgMgGgAAXgKQgBgEgCgEQgCgEgFgDQgEgCgIgBQgGAAgFAEQgEACgDAEQgCAEgBAEIArAAIAAAAg");
	this.shape_1.setTransform(208.3,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBIQgLgFgGgJQgHgIgCgKIAcgIQABAFACAEQADAFAFACQAFADAJAAQAGAAAGgCQAGgDADgGQADgFABgJIAAgNIgBAAQgEAGgGADIgKADIgIABQgOAAgMgHQgKgHgHgLQgGgLAAgOQAAgKADgJQAEgJAGgIQAHgHAIgEQAJgFALAAIAIABQAEABAGADQAHADAFAGIAAgMIAdAAIAABjQAAARgHAMQgHALgMAGQgNAGgPAAQgQAAgLgFgAgLguQgFADgEAGQgCAFgBAIQABAIACAFQAEAGAFADQAGACAGAAQAHAAAFgCQAGgDADgGQAEgFAAgIQAAgIgEgFQgDgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(195.5,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIAEAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_3.setTransform(185.8,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCQAHgBAIAAIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_4.setTransform(175.4,5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBKIAAiTIAeAAIAAB2IA/AAIAAAdg");
	this.shape_5.setTransform(165,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAvQgNgHgIgMQgHgMAAgQQAAgOAHgMQAIgLALgIQANgGANgBQAQAAALAGQALAHAHALQAGAMAAAOIAAAFIAAAFIhJAAQABAKAIAFQAGAGAJAAQAHgBAGgEQAGgDADgGIAYAJQgEAJgGAHQgHAGgJAEQgKADgJAAQgPAAgMgGgAAXgKQgBgEgCgEQgCgEgFgDQgFgCgHgBQgGAAgFAEQgEACgDAEQgDAEAAAEIArAAIAAAAg");
	this.shape_6.setTransform(147.9,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAzIgqhlIAgAAIAYBDIAZhDIAgAAIgqBlg");
	this.shape_7.setTransform(136,5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCQAHgBAIAAIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_8.setTransform(124.2,5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbBHQgMgGgIgKQgHgKgCgPIAcgGQADAMAIAGQAJAHAMAAQAKAAAGgFQAGgFAAgHQAAgGgEgEQgFgEgIgBIgUgFQgSgDgLgKQgLgLAAgRQABgOAGgKQAIgLALgGQAMgGAOAAQARAAAMAGQALAGAGAJQAGAJABAKIgcAIQgBgJgHgFQgGgGgMAAQgIAAgGAFQgGAFAAAGQAAAGADAEQAFAEAIACIATADQAOADAJAGQAKAGAEAJQAFAJAAAKQAAAMgGAKQgGALgMAHQgNAGgRABQgSgBgMgFg");
	this.shape_9.setTransform(112.3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(103.9,-11.8,118.5,29.3), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAYQAHgEAFgGQAEgFADgIIgDABIgDABQgHgBgFgEQgEgEgBgJQABgIAFgGQAGgFAIAAQAJAAAGAGQAGAHAAAMIAAABQAAAMgIALQgHAMgLAIg");
	this.shape.setTransform(98,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAFIhJAAQACAKAHAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgJADgKAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAEQgCAEgBAEIArAAIAAAAg");
	this.shape_1.setTransform(89,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBIQgLgFgGgJQgHgIgCgKIAcgIQABAFACAEQADAFAFACQAFADAJAAQAGAAAGgCQAGgDADgGQADgFABgJIAAgNIgBAAQgEAGgGADIgKADIgIABQgOAAgMgHQgKgHgHgLQgGgLAAgOQAAgKADgJQAEgJAGgIQAHgHAIgEQAJgFALAAIAIABQAEABAGADQAHADAFAGIAAgMIAdAAIAABjQAAARgHAMQgHALgMAGQgNAGgPAAQgQAAgLgFgAgLguQgFADgEAGQgCAFgBAIQABAIACAFQAEAGAFADQAGACAGAAQAHAAAFgCQAGgDADgGQAEgFAAgIQAAgIgEgFQgDgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(76.3,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIADAAIAEABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_3.setTransform(66.6,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_4.setTransform(56.2,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBKIAAiTIAeAAIAAB2IA/AAIAAAdg");
	this.shape_5.setTransform(45.8,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_6.setTransform(30,25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_7.setTransform(20,27.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBKIAAiTIBhAAIAAAcIhDAAIAAAfIA7AAIAAAbIg7AAIAAAhIBDAAIAAAcg");
	this.shape_8.setTransform(8.6,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,9.9,103.3,29.3), null);


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
(lib._320x50_mobile_1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#323232").s().p("AAMAcIgMgnIgLAnIgNAAIgQg3IAMAAIALAnIAMgnIALAAIAMAnIALgnIAMAAIgQA3g");
	this.shape.setTransform(276.4,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AgKAaQgFgCgEgEQgFgEgCgFQgCgFAAgGQAAgFACgFQACgGAFgEQADgDAGgDQAFgCAFAAQAGAAAGACQAEACAFAEQAEAEACAFQACAGAAAFQAAAGgDAFQgCAFgDAEQgFAEgFACQgFADgGAAQgFAAgFgDgAgIgOQgEACgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQADgCADgEQACgEAAgFQAAgEgCgEIgGgGQgEgDgFAAQgEAAgEADg");
	this.shape_1.setTransform(268.9,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("AANAcIgZglIAAAlIgLAAIAAg3IAMAAIAYAjIAAgjIALAAIAAA3g");
	this.shape_2.setTransform(262.6,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323232").s().p("AgXAcIAAg3IARAAQAJAAAHAEQAHADAEAGQADAGAAAIQAAAJgDAFQgEAHgHADQgHAEgJAAgAgMARIAGAAQAGAAADgCQAFgCACgDQACgEABgGQgBgEgCgEQgDgEgEgCQgDgCgGAAIgGAAg");
	this.shape_3.setTransform(291.9,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323232").s().p("AAQAcIgEgMIgXAAIgEAMIgMAAIAVg3IANAAIAVA3gAAIAFIgIgUIgHAUIAPAAg");
	this.shape_4.setTransform(286,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323232").s().p("AgKAaQgGgCgDgEQgFgEgCgFQgCgFAAgGQAAgFACgFQACgGAFgEQAEgDAFgDQAFgCAFAAQAGAAAFACQAGACADAEQAEAEADAFQACAGAAAFQAAAGgCAFQgCAFgFAEQgEAEgFACQgFADgGAAQgFAAgFgDgAgIgOQgDACgDAEQgCAEAAAEQAAAFACAEQADAEADACQAEACAEAAQAFAAAEgCQAEgCACgEQACgEAAgFQAAgEgCgEIgGgGQgEgDgFAAQgEAAgEADg");
	this.shape_5.setTransform(280,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323232").s().p("AgRAcIAAg3IAMAAIAAAsIAXAAIAAALg");
	this.shape_6.setTransform(274.8,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323232").s().p("AAMAcIgYgmIAAAmIgLAAIAAg3IAMAAIAYAkIAAgkIALAAIAAA3g");
	this.shape_7.setTransform(269.3,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323232").s().p("AAMAcIgMgoIgLAoIgNAAIgQg3IAMAAIALAnIAMgnIALAAIAMAnIALgnIAMAAIgQA3g");
	this.shape_8.setTransform(262,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323232").s().p("AgKAaQgFgCgFgEQgEgEgCgFQgCgFAAgGQAAgFACgFQACgGAEgEQAEgDAGgDQAFgCAFAAQAGAAAGACQAEACAFAEQAEAEACAFQACAGAAAFQAAAGgDAFQgBAFgEAEQgFAEgFACQgFADgGAAQgFAAgFgDgAgIgOQgEACgCAEQgCAEAAAEQAAAFACAEQACAEAEACQAEACAEAAQAFAAAEgCQADgCADgEQACgEAAgFQAAgEgCgEIgGgGQgEgDgFAAQgEAAgEADg");
	this.shape_9.setTransform(254.5,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323232").s().p("AgXAcIAAg3IARAAQAJAAAHAEQAHADAEAGQADAGAAAIQAAAJgDAFQgEAHgHADQgHAEgJAAgAgMARIAGAAQAGAAADgCQAFgCACgDQACgEABgGQgBgEgCgEQgDgEgEgCQgDgCgGAAIgGAAg");
	this.shape_10.setTransform(248.5,22.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkNBwIgIgBQgpgCgegeQggghAAguQAAgtAgghQAhghAuAAIIaAAQAsAAAgAdIAEAEQAgAhAAAtQAAAuggAhQghAhgvAAg");
	this.shape_11.setTransform(271,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(359));

	// Слой 4
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(24.6,27.8,0.162,0.162,0,0,0,76.6,106.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359));

	// A MEAL FROM:
	this.instance_1 = new lib.t22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96,41.6,0.649,0.649,0,0,0,78.9,14.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(298).to({_off:false},0).to({x:95.7,y:32.6,alpha:1},9,cjs.Ease.get(1)).wait(52));

	// WANT
	this.instance_2 = new lib.t21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.9,26.9,0.649,0.649,0,0,0,35.6,14.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(295).to({_off:false},0).to({x:67.6,y:17.9,alpha:1},9,cjs.Ease.get(1)).wait(55));

	// BURGER FROM:
	this.instance_3 = new lib.t12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.3,42.4,0.649,0.649,0,0,0,82.4,14.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).to({y:33.4,alpha:1},9,cjs.Ease.get(1)).wait(75).to({x:125.3,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(67));

	// WANT A FREE
	this.instance_4 = new lib.t11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(110.2,27.6,0.649,0.649,0,0,0,73.5,14.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(196).to({_off:false},0).to({regX:73.7,x:110.6,y:18.6,alpha:1},9,cjs.Ease.get(1)).wait(82).to({x:119.6,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(63));

	// A MEAL FROM:
	this.instance_5 = new lib.t22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(96,41.6,0.649,0.649,0,0,0,78.9,14.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102).to({_off:false},0).to({x:95.7,y:32.6,alpha:1},9,cjs.Ease.get(1)).wait(73).to({regX:79,x:95.4,y:41.6,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(166));

	// WANT
	this.instance_6 = new lib.t21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(67.9,26.9,0.649,0.649,0,0,0,35.6,14.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).to({x:67.6,y:17.9,alpha:1},9,cjs.Ease.get(1)).wait(80).to({regX:35.8,x:68.3,y:26.9,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// BURGER FROM:
	this.instance_7 = new lib.t12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(116.3,42.4,0.649,0.649,0,0,0,82.4,14.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({y:33.4,alpha:1},9,cjs.Ease.get(1)).wait(75).to({x:125.3,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(263));

	// WANT A FREE
	this.instance_8 = new lib.t11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(110.2,27.6,0.649,0.649,0,0,0,73.5,14.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:73.7,x:110.6,y:18.6,alpha:1},9,cjs.Ease.get(1)).wait(82).to({x:119.6,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(259));

	// Слой 21
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF1544").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_12.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(359));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,320,250);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;