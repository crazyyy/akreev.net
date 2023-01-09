(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_MREC_3_atlas_", frames: [[0,0,340,280],[0,282,340,280],[0,564,340,280],[342,0,333,280]]}
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



(lib.b2pc3 = function() {
	this.spriteSheet = ss["300x250_MREC_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc1 = function() {
	this.spriteSheet = ss["300x250_MREC_3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pc2 = function() {
	this.spriteSheet = ss["300x250_MREC_3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pc4 = function() {
	this.spriteSheet = ss["300x250_MREC_3_atlas_"];
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


(lib.t43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAPQgHgGAAgJQAAgIAHgFQAFgHAIABQAJgBAGAHQAFAFABAIQgBAJgFAGQgGAFgJAAQgIAAgFgFg");
	this.shape.setTransform(113.3,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_1.setTransform(107.5,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_2.setTransform(98.7,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgJADgKAAQgOAAgMgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgEADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_3.setTransform(87.4,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyA0IAAg4QgBgIgDgGQgEgFgJAAQgJAAgFAFQgEAFAAAJIAAA4IgcAAIAAg3QAAgJgFgFQgDgGgJAAQgJAAgFAFQgEAGAAAJIAAA3IgeAAIAAhlIAeAAIAAAOQAFgIAHgEQAIgEAJAAQAJAAAIAEQAIAEAEAIQAHgIAIgEQAHgEALAAQANAAAIAFQAHAGAFAJQADAJAAALIAAA/g");
	this.shape_4.setTransform(72.3,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgJADgKAAQgOAAgMgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgEADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_5.setTransform(52.3,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAHAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgJADgKAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_6.setTransform(40.4,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAIAAIAFAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_7.setTransform(30.9,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQAAgIACgIQADgHAEgGQAFgHAHgEQAHgDALgBIAHAAIAKACIAAAZIgFgBIgEAAQgJgBgEAFQgFAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_8.setTransform(22.3,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_9.setTransform(7.4,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t43, new cjs.Rectangle(0,0,118.5,29.3), null);


(lib.t42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBNIAAhMIgUAAIAAgYIAUAAIAAgKQAAgIABgIQACgHAFgGQAFgHAGgEQAIgDALgBIAHAAIAKACIAAAZIgFgBIgEAAQgJgBgEAFQgFAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape.setTransform(218.2,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_1.setTransform(211.1,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgHAGQgGAIgKADQgIADgLAAQgOAAgMgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_2.setTransform(202.3,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgDgFIgDgJIAagHQABAGAEAEQAFAEAGAAQAGAAAEgDQACgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgJgDgEgGQgGgGAAgMQABgJAFgHQAGgIAIgEQAKgEAKAAQANAAAIAFQAJAEAEAHQAEAGACAGIgaAHQgCgGgDgDQgEgDgGAAQgEAAgDACQgEACAAAEQABAEADACQAEACAHABQAKABAJADQAIADAGAGQAFAHAAALQAAAJgEAIQgFAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_3.setTransform(191.3,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAHgDAHAAIAFAAIADABIAAAdIgGgBIgDAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_4.setTransform(182.8,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgEgJgBgLIAAg/IAeAAIAAA4QAAAIAFAGQADAFAJAAQAJAAAFgFQAEgGAAgIIAAg4IAeAAIAABlIgeAAIAAgNQgFAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_5.setTransform(172.2,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(159.9,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBMIAYg9IgqhaIAgAAIAZA6IAWg6IAfAAIg9CXg");
	this.shape_7.setTransform(147.8,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAHAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgJADgKAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_8.setTransform(131.3,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAIAAIAFAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_9.setTransform(121.8,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(111,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAuQgNgHgHgMQgHgMAAgPQABgOAHgMQAHgMAMgHQANgHAPAAQAKAAALADQAKAEAIAIQAHAIADAMIgbAHQgBgEgDgDQgDgDgFgDQgFgCgGAAQgGAAgFADQgGADgDAGQgDAFAAAIQAAALAHAHQAGAIAKgBQAHAAAEgCQAFgCADgEQADgDACgEIAbAIQgEALgIAJQgHAHgLAEQgKAEgLAAQgPAAgMgHg");
	this.shape_11.setTransform(98.9,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAFAEAGAAQAGAAADgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgIgDgGgGQgEgGAAgMQgBgJAGgHQAFgIAKgEQAJgEAJAAQANAAAJAFQAJAEAEAHQAEAGACAGIgaAHQgCgGgDgDQgEgDgGAAQgFAAgDACQgCACAAAEQgBAEAEACQAEACAIABQAJABAJADQAJADAEAGQAGAHAAALQAAAJgFAIQgEAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_12.setTransform(87.8,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBIQgLgEgHgJQgGgKgBgNQAAgJAEgIQAEgGAGgGIANgKIgFgGQgGgGgDgIQgDgHAAgFQAAgMAFgIQAGgKAKgFQAKgGAMAAQAMABAJAFQAJAFAGAJQAHAIgBAMQAAAKgEAIQgFAIgLAGIgJAFIAUAYIAIgNQADgFABgGIAcAAQgCAKgFALQgHALgIALIAaAeIgkAAIgKgLQgJAGgJAEQgIADgJAAQgNAAgLgEgAgfAXQgEAEAAAGQAAAGADAEQAEAEAEABIAKACIAJgCIAHgEIgYgdQgFADgEAFgAgWgsQgEADAAAGIABAEIAEAHIAHAHIAKgHQAEgCABgCQABgEAAgDQAAgGgCgDQgFgEgGgBQgHABgEAEg");
	this.shape_13.setTransform(71.3,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBMIAag9IgshaIAhAAIAZA6IAWg6IAeAAIg8CXg");
	this.shape_14.setTransform(53.4,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_15.setTransform(41.7,17.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBGQgKgHgHgMQgFgMAAgOQgBgJAEgKQADgIAHgHQAGgIAKgEQAJgFAKAAIAHABQAFAAAGADQAHADAEAGIABAAIAAhAIAeAAIAACZIgdAAIAAgNIAAAAQgGAHgGADQgFAEgGAAIgIABQgPAAgLgIgAgLADQgGADgDAGQgDAGAAAHQAAAIADAGQADAGAGADQAFADAHAAQAHAAAFgDQAGgDADgGQADgGABgIQgBgHgDgGQgDgGgGgDQgFgDgHAAQgHAAgFADg");
	this.shape_16.setTransform(29.5,14.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_17.setTransform(17,17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_18.setTransform(6.1,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t42, new cjs.Rectangle(0,0,224.5,29.3), null);


(lib.t41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCBNQgGgBgGgDQgFgDgFgGIAAAAIAAAMIgdAAIAAiZIAeAAIAABBQAFgGAGgDQAGgDAFgBIAHgBQALAAAKAFQAIAEAHAIQAGAHADAIQAEAKAAAJQgBAKgDAKQgDAJgHAIQgGAHgJAFQgJAEgMAAIgHgBgAgMADQgGADgDAGQgDAGAAAHQAAAIADAGQADAGAGADQAFADAHAAQAGAAAGgDQAGgDADgGQADgGAAgIQAAgHgDgGQgDgGgGgDQgGgDgGAAQgHAAgFADg");
	this.shape.setTransform(179.8,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgFgJABgLIAAg/IAeAAIAAA4QgBAIAEAGQAFAFAIAAQAJAAAEgFQAFgGAAgIIAAg4IAdAAIAABlIgcAAIAAgNQgGAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_1.setTransform(166.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_2.setTransform(158,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBHQgOgFgLgLQgKgKgGgOQgGgOgBgRQABgPAGgOQAGgOALgLQAKgKAOgGQAOgGAPAAQAPAAAMAFQAMAFAJAHQAJAHAFAIQAFAJACAIIgdAKQgBgEgDgFQgDgEgFgFQgFgFgHgDQgHgCgKAAQgMAAgKAGQgKAGgGAKQgGALAAAMQAAANAGALQAGAKAKAGQAKAHAMAAQAKAAAHgDQAHgDAFgFQAFgFADgEQADgFABgFIAeAKQgCAHgFAJQgFAIgJAHQgIAJgNAFQgMAEgRAAQgOABgOgGg");
	this.shape_3.setTransform(147.2,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_4.setTransform(134.5,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_5.setTransform(124.5,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBKIAAiTIBhAAIAAAcIhDAAIAAAfIA7AAIAAAbIg7AAIAAAhIBDAAIAAAcg");
	this.shape_6.setTransform(113.1,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBGQgLgHgFgMQgHgMABgOQAAgJADgKQADgIAHgHQAGgIAJgEQAKgFAKAAIAHABQAGAAAFADQAGADAGAGIAAAAIAAhAIAdAAIAACZIgcAAIAAgNIAAAAQgGAHgFADQgHAEgFAAIgIABQgPAAgLgIgAgLADQgGADgDAGQgDAGgBAHQABAIADAGQADAGAGADQAGADAFAAQAIAAAFgDQAGgDADgGQAEgGAAgIQAAgHgEgGQgDgGgGgDQgFgDgIAAQgFAAgGADg");
	this.shape_7.setTransform(94.9,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_8.setTransform(82.8,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(71.2,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_10.setTransform(62.1,14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgEAAgEADQgFACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAEgHAGgDQAHgEADgBIAIgBQANAAAIAGQAIAGAEAJQAEAJgBALIAAA+g");
	this.shape_11.setTransform(53.2,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAzIgVhAIgUBAIgdAAIgghlIAfAAIASA+IAUg+IAaAAIASA/IATg/IAeAAIgfBlg");
	this.shape_12.setTransform(38.6,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_13.setTransform(23.8,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhABKIAAiTIAuAAQAZAAASAIQATAJAKARQALAQAAAXQAAAWgLARQgKAQgTAKQgTAJgZAAgAghAtIAPAAQAQAAAKgFQAMgFAGgLQAHgKAAgOQAAgOgHgKQgHgKgLgFQgLgFgPAAIgPAAg");
	this.shape_14.setTransform(10.2,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t41, new cjs.Rectangle(0,0,193,29.3), null);


(lib.t32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPBIQgFgGAAgIQAAgHAFgGQAGgFAHgBQAHABAFAFQAFAGABAHQgBAIgFAGQgFAEgHAAQgHAAgGgEgAgRAYIAAgDIAAgDQAAgIADgGQAEgEAFgFIAKgJQAFgDAEgGQADgEABgHQgBgEgBgEQgDgDgEgBQgEgCgFAAQgIAAgFAGQgGAGABAJIAAADIABAEIgegDIAAgEIgBgFQABgOAGgJQAHgKALgFQALgFAMgBQAKAAAIADQAIADAIAFQAHAFAEAIQAEAIAAAJQAAALgGAKQgGAJgJAFQgGAFgFAFQgFAGgCAIg");
	this.shape.setTransform(166.9,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_1.setTransform(155.5,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqAzIAAgXIAug1IgsAAIAAgZIBSAAIAAAXIguA1IAvAAIAAAZg");
	this.shape_2.setTransform(144.9,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqAzIAAgXIAvg1IguAAIAAgZIBUAAIAAAXIgvA1IAvAAIAAAZg");
	this.shape_3.setTransform(134.6,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOBNIAAhkIAdAAIAABkgAgMguQgFgFAAgHQAAgIAFgFQAFgGAHAAQAIAAAFAGQAFAFABAIQgBAHgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_4.setTransform(126.7,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1BKIAAiTIA2AAQAPAAAMAFQAMAFAHALQAHAKAAAQQAAARgHAJQgHALgMAGQgNAFgPAAIgXAAIAAA0gAgXgGIAWAAQAGAAAFgCQAGgCADgEQAEgEAAgHQAAgHgEgEQgDgFgGgCQgFgCgGABIgWAAg");
	this.shape_5.setTransform(117.8,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAuQgMgGgIgMQgHgMAAgQQAAgOAHgMQAIgLALgIQANgHANAAQAQAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQABAJAIAFQAGAGAJgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgJADQgKADgKAAQgOAAgNgHgAAXgKQAAgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgDADAAAEIArAAIAAAAg");
	this.shape_6.setTransform(100,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAuQgNgHgHgMQgHgMAAgPQABgOAHgMQAHgMAMgHQANgHAPAAQAKAAALADQAKAEAIAIQAHAIADAMIgbAHQgBgEgDgDQgDgDgFgDQgFgCgGAAQgGAAgFADQgGADgDAGQgDAFAAAIQAAALAHAHQAGAIAKgBQAHAAAEgCQAFgCADgEQADgDACgEIAbAIQgEALgIAJQgHAHgLAEQgKAEgLAAQgPAAgMgHg");
	this.shape_7.setTransform(88.1,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOBNIAAhkIAdAAIAABkgAgMguQgFgFAAgHQAAgIAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAIQAAAHgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape_8.setTransform(79.3,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape_9.setTransform(73.6,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAFAEAGAAQAGAAADgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgJgDgFgGQgEgGAAgMQgBgJAGgHQAFgIAKgEQAIgEAKAAQANAAAJAFQAJAEAEAHQAFAGAAAGIgZAHQgBgGgEgDQgEgDgGAAQgFAAgDACQgCACAAAEQgBAEAEACQAEACAHABQAKABAJADQAJADAEAGQAGAHAAALQAAAJgFAIQgEAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_10.setTransform(65.7,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAHAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgJADgKAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_11.setTransform(54.8,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAyA0IAAg4QAAgIgEgGQgEgFgJAAQgJAAgFAFQgEAFAAAJIAAA4IgdAAIAAg3QAAgJgEgFQgDgGgJAAQgKAAgEAFQgEAGAAAJIAAA3IgeAAIAAhlIAeAAIAAAOQAEgIAJgEQAIgEAJAAQAJAAAIAEQAGAEAFAIQAHgIAIgEQAIgEALAAQAMAAAIAFQAHAGAEAJQAEAJAAALIAAA/g");
	this.shape_12.setTransform(39.7,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_13.setTransform(24.1,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfBKIAAg7Ig9AAIAAA7IgfAAIAAiTIAfAAIAAA6IA9AAIAAg6IAfAAIAACTg");
	this.shape_14.setTransform(9.9,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t32, new cjs.Rectangle(0,0,174.7,29.3), null);


(lib.t31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAvQgHgGAAgIQAAgJAHgGQAFgGAIAAQAJAAAFAGQAGAGABAJQgBAIgGAGQgFAGgJAAQgIAAgFgGgAgKgOQgEgDgDgEQgDgFAAgFQAAgJAHgGQAFgFAIgBQAJABAFAFQAGAGABAJQAAAFgEAFQgCAEgEADQgFADgGABQgFgBgFgDg");
	this.shape.setTransform(228.5,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxA0IAAg4QAAgIgDgGQgEgFgJAAQgJAAgEAFQgFAFAAAJIAAA4IgdAAIAAg3QAAgJgDgFQgEgGgJAAQgKAAgDAFQgFAGAAAJIAAA3IgeAAIAAhlIAdAAIAAAOQAFgIAJgEQAIgEAIAAQAKAAAHAEQAIAEAEAIQAHgIAIgEQAIgEAKAAQANAAAIAFQAIAGADAJQAEAJAAALIAAA/g");
	this.shape_1.setTransform(216.1,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(200.6,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIAEAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_3.setTransform(190.8,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQAAgIADgIQABgHAFgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_4.setTransform(182.2,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_5.setTransform(167.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqAzIAAgXIAvg1IguAAIAAgZIBUAAIAAAXIgvA1IAvAAIAAAZg");
	this.shape_6.setTransform(156.7,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqAzIAAgXIAug1IgtAAIAAgZIBTAAIAAAXIguA1IAvAAIAAAZg");
	this.shape_7.setTransform(146.4,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOBNIAAhkIAdAAIAABkgAgMguQgFgFgBgHQABgIAFgFQAFgGAHAAQAIAAAFAGQAGAFgBAIQABAHgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_8.setTransform(138.4,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2BNIAAiXIAeAAIAAANIAAAAQAFgHAHgDQAFgDAGgBIAIgBQAKAAAJAFQAKAEAGAIQAGAIAEAJQACAJAAAKQABAKgEAJQgEAJgFAHQgHAIgJAEQgJAFgLAAIgIgBIgLgEQgFgDgGgFIAAA9gAgMguQgGAEgDAFQgEAGAAAIQAAAIAEAFQADAGAGAEQAGACAGAAQAHAAAFgCQAGgEADgGQADgFABgIQgBgIgDgGQgDgFgGgEQgFgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(129.3,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgIADgLAAQgOAAgNgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_10.setTransform(111.8,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQABAJAHAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgKADgJAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_11.setTransform(99.9,17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIAEAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_12.setTransform(90.4,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQAAgIADgIQABgHAFgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_13.setTransform(81.8,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_14.setTransform(66.9,17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_15.setTransform(52.2,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgFAAgEADQgEACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAFgHAFgDQAGgEAFgBIAHgBQANAAAIAGQAIAGAEAJQADAJAAALIAAA+g");
	this.shape_16.setTransform(42,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_17.setTransform(30,17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAgBKIgghrIAAAAIggBrIghAAIgsiTIAhAAIAdBoIAghoIAgAAIAgBpIAdhpIAgAAIgsCTg");
	this.shape_18.setTransform(13.3,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(0,0,233.9,29.3), null);


(lib.t24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBIQgFgGAAgIQAAgHAFgGQAFgFAIgBQAHABAGAFQAEAGABAHQgBAIgEAGQgGAEgHAAQgIAAgFgEgAgQAYIgBgDIAAgDQAAgIADgGQAEgEAFgFIAKgJQAGgDADgGQADgEABgHQAAgEgDgEQgCgDgEgBQgEgCgEAAQgJAAgFAGQgGAGABAJIAAADIABAEIgegDIgBgEIAAgFQABgOAGgJQAHgKALgFQAMgFAMgBQAIAAAJADQAJADAGAFQAHAFAFAIQAEAIAAAJQgBALgFAKQgFAJgKAFQgGAFgFAFQgFAGgBAIg");
	this.shape.setTransform(112.3,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgIgMQgHgMAAgQQAAgOAHgMQAIgLALgIQANgHANAAQAQAAALAHQALAGAHAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgEgDgIAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape_1.setTransform(100.8,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgFgFgIAAQgGAAgDADQgFACgBAFQgCAEAAAGIAAA3IgfAAIAAhlIAeAAIAAAOIABAAQADgHAHgDQAGgEADgBIAIgBQANAAAIAGQAIAGAEAJQADAJABALIAAA+g");
	this.shape_2.setTransform(88.8,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBHQgOgGgLgLQgKgKgGgOQgGgOAAgQQAAgPAGgOQAGgOALgKQAKgLAOgGQAPgGAPAAQAQAAAOAGQAOAGAKAKQALALAFANQAGAOAAAQQAAAQgGAOQgGAOgKAKQgLALgOAGQgOAFgQABQgPgBgOgFgAgWgoQgKAHgGAKQgGALgBAMQABANAGAKQAGALAKAGQAKAHAMAAQANAAAKgHQALgGAGgLQAGgKAAgNQAAgMgGgLQgGgKgLgHQgKgGgNAAQgMAAgKAGg");
	this.shape_3.setTransform(74.1,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BLIAAgJQAAgIADgKQADgKAIgKQAIgKAPgIIARgKIALgHQAFgEADgEQADgFAAgGQAAgFgDgFQgCgEgFgDQgFgCgHAAQgEgBgGADQgFADgDAGQgEAFAAALIgfgFQABgOAEgJQAFgKAHgGQAIgHAKgCQAJgDAKgBQARAAALAHQAMAGAHALQAGAMAAANQAAALgEAIQgEAIgHAGQgHAHgIAFIgYANIgEAEIgGAFQgDADgBADIBFAAIAAAcg");
	this.shape_4.setTransform(54.3,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLAMgIQANgHANAAQAQAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape_5.setTransform(37.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgFgFgIAAQgFAAgFADQgEACgBAFQgCAEAAAGIAAA3IgfAAIAAhlIAeAAIAAAOIABAAQADgHAHgDQAGgEAEgBIAHgBQANAAAIAGQAIAGAEAJQADAJABALIAAA+g");
	this.shape_6.setTransform(25.2,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHQgOgGgLgLQgKgKgGgOQgGgOAAgQQAAgPAGgOQAGgOALgKQAKgLAOgGQAPgGAPAAQAQAAAOAGQAOAGAKAKQALALAFANQAGAOAAAQQAAAQgGAOQgGAOgKAKQgLALgOAGQgOAFgQABQgPgBgOgFgAgWgoQgKAHgGAKQgGALgBAMQABANAGAKQAGALAKAGQAKAHAMAAQANAAAKgHQALgGAGgLQAGgKAAgNQAAgMgGgLQgGgKgLgHQgKgGgNAAQgMAAgKAGg");
	this.shape_7.setTransform(10.5,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t24, new cjs.Rectangle(0,0,120.1,29.3), null);


(lib.t23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHANAAQAQAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape.setTransform(111.5,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgJADgJAAQgPAAgMgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgEADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_1.setTransform(99.6,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAHgEQAHgDAIAAIADAAIAFABIAAAdIgGgBIgEAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_2.setTransform(90.1,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASBNIAAg4QAAgIgEgGQgEgGgJAAQgGAAgEADQgEADgCAEQgCAFABAFIAAA4IgeAAIAAiZIAeAAIAABBQAEgGAFgDIAJgEIAIgBQANAAAIAGQAJAFAEAJQADAJAAAKIAAA/g");
	this.shape_3.setTransform(79.5,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBKIAAh2IgsAAIAAgdIB3AAIAAAdIgtAAIAAB2g");
	this.shape_4.setTransform(67,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAvQgHgGAAgIQAAgJAHgGQAFgGAIAAQAJAAAFAGQAGAGABAJQgBAIgGAGQgFAGgJAAQgIAAgFgGgAgKgOQgEgDgCgEQgEgFAAgFQAAgJAHgGQAFgFAIgBQAJABAFAFQAGAGABAJQAAAFgEAFQgCAEgEADQgFADgGABQgEgBgGgDg");
	this.shape_5.setTransform(52.7,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxA0IAAg4QABgIgEgGQgEgFgJAAQgJAAgEAFQgFAFAAAJIAAA4IgdAAIAAg3QAAgJgDgFQgEgGgJAAQgKAAgDAFQgFAGAAAJIAAA3IgeAAIAAhlIAdAAIAAAOQAGgIAIgEQAHgEAKAAQAIAAAIAEQAIAEAEAIQAHgIAIgEQAIgEALAAQAMAAAIAFQAIAGADAJQAEAJAAALIAAA/g");
	this.shape_6.setTransform(40.3,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(24.7,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAGgEQAIgDAIAAIADAAIAFABIAAAdIgGgBIgEAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_8.setTransform(14.9,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQABgIACgIQACgHAEgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_9.setTransform(6.3,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t23, new cjs.Rectangle(0,0,124.4,29.3), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAGgEQAIgDAIAAIADAAIAFABIAAAdIgGgBIgEAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape.setTransform(125.6,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgIgMQgHgMAAgQQAAgOAHgMQAIgLALgIQANgHANAAQAQAAALAHQALAGAHAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgEgDgIAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape_1.setTransform(115.2,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBIQgLgFgHgJQgGgIgCgKIAbgIQACAFADAEQACAFAGACQAFADAIAAQAGAAAGgCQAGgDAEgGQADgFAAgJIAAgNIgBAAQgEAGgFADIgLADIgIABQgOAAgLgHQgMgHgFgLQgHgLAAgOQAAgKAEgJQADgJAGgIQAHgHAIgEQAJgFALAAIAIABQAEABAHADQAFADAGAGIAAgMIAdAAIAABjQAAARgHAMQgHALgNAGQgMAGgPAAQgPAAgMgFgAgLguQgFADgEAGQgCAFgBAIQABAIACAFQAEAGAFADQAGACAGAAQAHAAAGgCQAFgDADgGQADgFAAgIQAAgIgDgFQgDgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(102.4,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQAEgJAGgEQAIgDAHAAIAFAAIADABIAAAdIgGgBIgDAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_3.setTransform(92.7,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAuQgIgFgEgJQgEgJAAgLIAAg/IAdAAIAAA4QAAAIAFAGQADAFAJAAQAJAAAFgFQAEgGAAgIIAAg4IAdAAIAABlIgdAAIAAgNQgFAIgGADQgGADgEAAIgGABQgMAAgJgGg");
	this.shape_4.setTransform(82.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCBNQgFgBgHgDQgFgDgFgGIgBAAIAAAMIgdAAIAAiZIAeAAIAABBQAGgGAGgDQAGgDAFgBIAIgBQALAAAIAFQAKAEAGAIQAGAHAEAIQACAKAAAJQAAAKgDAKQgEAJgFAIQgHAHgJAFQgJAEgLAAIgIgBgAgMADQgGADgDAGQgDAGgBAHQABAIADAGQADAGAGADQAGADAGAAQAGAAAGgDQAGgDADgGQADgGABgIQgBgHgDgGQgDgGgGgDQgGgDgGAAQgGAAgGADg");
	this.shape_5.setTransform(69.8,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgJADgKAAQgOAAgMgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgEADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape_6.setTransform(52.3,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgIgMQgHgMAAgQQAAgOAHgMQAIgLAMgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAHAFQAHAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgJADgKAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_7.setTransform(40.4,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAIAAIAFAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_8.setTransform(30.9,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQAAgIACgIQADgHAEgGQAFgHAHgEQAHgDALgBIAHAAIAKACIAAAZIgFgBIgEAAQgJgBgEAFQgFAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_9.setTransform(22.3,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_10.setTransform(7.4,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(0,0,131.4,29.3), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape.setTransform(52.2,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgFAAgEADQgEACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAFgHAFgDQAGgEAFgBIAHgBQANAAAIAGQAIAGAEAJQADAJAAALIAAA+g");
	this.shape_1.setTransform(42,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_2.setTransform(30,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBKIgghrIAAAAIggBrIghAAIgsiTIAhAAIAdBoIAghoIAgAAIAgBpIAdhpIAgAAIgsCTg");
	this.shape_3.setTransform(13.3,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(0,0,59,29.3), null);


(lib.t13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBIQgFgGAAgIQAAgHAFgGQAFgFAIgBQAHABAFAFQAFAGABAHQgBAIgFAGQgFAEgHAAQgIAAgFgEgAgQAYIgBgDIAAgDQAAgIADgGQAEgEAFgFIAKgJQAGgDADgGQADgEABgHQgBgEgBgEQgDgDgEgBQgEgCgEAAQgJAAgFAGQgGAGABAJIAAADIABAEIgegDIgBgEIAAgFQABgOAGgJQAHgKALgFQAMgFAMgBQAJAAAIADQAIADAIAFQAGAFAFAIQAEAIAAAJQAAALgGAKQgFAJgKAFQgGAFgFAFQgFAGgCAIg");
	this.shape.setTransform(117.3,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBNIAAg4QAAgIgEgGQgEgGgKAAQgFAAgEADQgEADgCAEQgBAFgBAFIAAA4IgdAAIAAiZIAdAAIAABBQAFgGAFgDIAJgEIAIgBQANAAAIAGQAJAFAEAJQADAJAAAKIAAA/g");
	this.shape_1.setTransform(105.7,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAyQgIgDgFgFQgFgFgCgFIgEgJIAagHQABAGAEAEQAFAEAGAAQAGAAADgDQADgDAAgDQAAgEgEgCQgEgDgHgBQgKgBgIgDQgIgDgGgGQgEgGAAgMQgBgJAGgHQAFgIAKgEQAJgEAJAAQANAAAJAFQAJAEAEAHQAEAGACAGIgaAHQgCgGgDgDQgEgDgGAAQgFAAgDACQgCACAAAEQgBAEAEACQAEACAIABQAJABAJADQAJADAEAGQAGAHAAALQAAAJgFAIQgEAHgJAFQgJAFgOAAQgKAAgIgDg");
	this.shape_2.setTransform(94.6,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(83.4,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBKIhDhlIAABlIgeAAIAAiTIAjAAIA/BgIAAhgIAfAAIAACTg");
	this.shape_4.setTransform(68.9,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAvQgHgGAAgIQAAgJAHgGQAFgGAIAAQAJAAAFAGQAGAGABAJQgBAIgGAGQgFAGgJAAQgIAAgFgGgAgKgOQgEgDgCgEQgEgFAAgFQAAgJAHgGQAFgFAIgBQAJABAFAFQAGAGABAJQAAAFgEAFQgCAEgEADQgFADgGABQgEgBgGgDg");
	this.shape_5.setTransform(52.7,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxA0IAAg4QABgIgEgGQgEgFgJAAQgJAAgEAFQgFAFAAAJIAAA4IgdAAIAAg3QAAgJgDgFQgEgGgJAAQgKAAgDAFQgFAGAAAJIAAA3IgeAAIAAhlIAdAAIAAAOQAGgIAIgEQAHgEAKAAQAIAAAIAEQAIAEAEAIQAHgIAIgEQAIgEALAAQAMAAAIAFQAIAGADAJQAEAJAAALIAAA/g");
	this.shape_6.setTransform(40.3,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(24.7,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAzIAAhkIAcAAIAAAPQAEgJAGgEQAIgDAIAAIADAAIAFABIAAAdIgGgBIgEAAQgLAAgGAHQgGAIAAANIAAAsg");
	this.shape_8.setTransform(14.9,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQABgIACgIQACgHAEgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_9.setTransform(6.3,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t13, new cjs.Rectangle(0,0,125.1,29.3), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBNIAAiaIAdAAIAACag");
	this.shape.setTransform(101.4,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAzIgVhAIgVBAIgcAAIgfhlIAeAAIASA+IATg+IAaAAIATA/IATg/IAfAAIghBlg");
	this.shape_1.setTransform(90.1,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_2.setTransform(75.3,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBNQgGgBgFgDQgGgDgFgGIgBAAIAAAMIgdAAIAAiZIAfAAIAABBQAFgGAGgDQAGgDAFgBIAIgBQALAAAIAFQAKAEAGAIQAGAHADAIQADAKAAAJQABAKgEAKQgEAJgFAIQgHAHgJAFQgJAEgLAAIgIgBgAgMADQgFADgEAGQgEAGAAAHQAAAIAEAGQAEAGAFADQAGADAGAAQAHAAAFgDQAGgDADgGQADgGABgIQgBgHgDgGQgDgGgGgDQgFgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(62.8,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEADgGIAYAJQgDAJgIAGQgGAIgKADQgIADgLAAQgOAAgNgHgAAWgKQAAgEgCgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgDADAAAEIAqAAIAAAAg");
	this.shape_4.setTransform(45.3,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPBNIgjgvIgBAAIAAAvIgeAAIAAiaIAeAAIAABdIAignIAmAAIgpAuIAqA2g");
	this.shape_5.setTransform(34.2,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAuQgMgHgIgLQgHgNAAgPQAAgOAHgMQAIgMAMgHQANgHAOAAQAQAAAMAGQANAIAHAMQAHALAAAPQAAAPgHAMQgIAMgMAHQgNAHgPAAQgPAAgMgHgAgMgWQgFADgEAGQgDAGAAAHQAAAHAEAGQADAGAGADQAFADAGAAQAHAAAGgDQAFgDAEgGQADgGAAgHQAAgHgDgGQgEgGgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_6.setTransform(21.3,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BNIAAiXIAeAAIAAANIABAAQAEgHAHgDQAFgDAGgBIAHgBQAMAAAIAFQAKAEAGAIQAGAIADAJQADAJAAAKQABAKgEAJQgEAJgFAHQgHAIgJAEQgJAFgLAAIgIgBIgLgEQgFgDgFgFIAAA9gAgMguQgFAEgEAFQgEAGAAAIQAAAIAEAFQAEAGAFAEQAGACAGAAQAHAAAFgCQAGgEADgGQADgFAAgIQAAgIgDgGQgDgFgGgEQgFgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(8.8,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,0,106.5,29.3), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAuQgMgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQACAJAGAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgKADQgIADgLAAQgOAAgNgHgAAWgKQABgEgDgEQgDgEgEgDQgFgDgHAAQgGAAgEADQgFADgDAFQgCADgBAEIAqAAIAAAAg");
	this.shape.setTransform(111.8,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAuQgNgGgHgMQgIgMAAgQQAAgOAIgMQAGgLANgIQAMgHAOAAQAPAAALAHQAMAGAGAMQAGALAAAPIAAAEIAAAGIhJAAQABAJAHAFQAIAGAIgBQAHAAAGgDQAGgEACgGIAZAJQgEAJgGAGQgHAIgJADQgKADgJAAQgPAAgMgHgAAXgKQgBgEgCgEQgCgEgFgDQgEgDgIAAQgGAAgFADQgEADgDAFQgCADgBAEIArAAIAAAAg");
	this.shape_1.setTransform(99.9,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAdAAIAAAPQADgJAIgEQAGgDAJAAIAEAAIADABIAAAdIgFgBIgEAAQgLAAgHAHQgFAIAAANIAAAsg");
	this.shape_2.setTransform(90.4,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBNIAAhMIgTAAIAAgYIATAAIAAgKQAAgIADgIQABgHAFgGQAFgHAHgEQAHgDALgBIAIAAIAJACIAAAZIgGgBIgDAAQgJgBgFAFQgEAEAAAJIAAALIAaAAIAAAYIgaAAIAABMg");
	this.shape_3.setTransform(81.8,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_4.setTransform(66.9,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDA9QgIgGgDgIQgDgJABgIIAAgnIgUAAIAAgaIAUAAIAAgfIAcAAIAAAfIAZAAIAAAaIgZAAIAAAmQAAAFAEAEQADADAHAAIAEAAIADAAIAEAAIAAAYIgKACIgIAAQgPAAgHgGg");
	this.shape_5.setTransform(52.2,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA0IAAg3QAAgJgEgGQgEgFgKAAQgFAAgEADQgEACgCAFQgCAEAAAGIAAA3IgdAAIAAhlIAdAAIAAAOIAAAAQAFgHAFgDQAGgEAFgBIAHgBQANAAAIAGQAIAGAEAJQADAJAAALIAAA+g");
	this.shape_6.setTransform(42,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAxQgHgEgFgGQgFgHAAgKIAAAAQAAgJAEgGQAEgGAHgDQAHgDAIgCIAPgBIAJAAQAEAAACgCQACgCAAgEQAAgFgEgDQgEgEgIAAQgGAAgFAEQgFADgBAHIgagGQABgLAHgHQAHgHAKgEQAJgDAKAAQANAAAKAFQAJAEAGAJQAGAJAAAOIAAA+IgbAAIAAgNIgBAAQgGAIgIADQgHAEgIAAQgJAAgIgEgAgHAKQgDACgCACQgDADAAAEQAAAFAEADQAEACAEAAQAGAAAEgDQAFgCACgFQADgEAAgGIAAgCIgRAAIgHABg");
	this.shape_7.setTransform(30,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBKIgghrIAAAAIggBrIghAAIgsiTIAhAAIAdBoIAghoIAgAAIAgBpIAdhpIAgAAIgsCTg");
	this.shape_8.setTransform(13.3,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,124.7,29.3), null);


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


(lib.pc4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc4_1, new cjs.Rectangle(0,0,333,280), null);


(lib.pc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b2pc3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc3, new cjs.Rectangle(0,0,340,280), null);


(lib.pc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2_1, new cjs.Rectangle(0,0,340,280), null);


(lib.pc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1_1, new cjs.Rectangle(0,0,340,280), null);


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
(lib._300x250_MREC_3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#323232").s().p("AATArIgTg9IAAAAIgSA9IgTAAIgZhVIATAAIAQA8IATg8IASAAIASA8IARg8IASAAIgZBVg");
	this.shape.setTransform(160.3,220.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323232").s().p("AgRAoQgIgDgGgGQgGgGgDgIQgDgIgBgJQABgJADgHQAEgJAGgGQAGgFAIgEQAIgDAIAAQAJAAAJADQAHAEAGAFQAHAGADAJQADAHABAJQgBAJgDAIQgEAIgGAGQgGAGgIADQgIAEgJAAQgIAAgJgEgAgNgXQgFAEgEAGQgDAHAAAGQAAAHADAGQAEAHAFADQAHADAGABQAIgBAFgDQAHgDADgHQADgGABgHQgBgGgDgHQgDgGgHgEQgFgDgIAAQgGAAgHADg");
	this.shape_1.setTransform(148.9,220.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("AASArIAAgjIgjAAIAAAjIgRAAIAAhVIARAAIAAAiIAjAAIAAgiIARAAIAABVg");
	this.shape_2.setTransform(139.5,220.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323232").s().p("AgIArIAAhDIgZAAIAAgSIBDAAIAAASIgZAAIAABDg");
	this.shape_3.setTransform(128.6,220.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323232").s().p("AgSAnQgIgEgEgIQgDgIAAgLIAAgyIASAAIgBAyQABAGACAEQACAFAEABQADACAEAAQAIAAAFgFQAEgEAAgJIAAgyIARAAIAAAyQAAALgDAIQgEAIgIAEQgIAEgLAAQgLAAgHgEg");
	this.shape_4.setTransform(120.6,220.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323232").s().p("AgRAoQgHgDgGgGQgHgGgDgIQgDgIgBgJQABgJADgHQADgJAHgGQAGgFAIgEQAIgDAIAAQAKAAAHADQAIAEAHAFQAFAGAEAJQADAHAAAJQAAAJgDAIQgDAIgHAGQgGAGgIADQgIAEgJAAQgIAAgJgEgAgMgXQgGAEgDAGQgEAHAAAGQAAAHAEAGQADAHAGADQAFADAHABQAHgBAHgDQAFgDAEgHQADgGAAgHQAAgGgDgHQgEgGgFgEQgHgDgHAAQgHAAgFADg");
	this.shape_5.setTransform(111.3,220.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323232").s().p("AgkArIAAhVIAaAAQAOABALAFQAKAFAHAJQAFAKAAAMQAAANgFAJQgHAKgKAFQgLAGgOAAgAgSAaIAJAAQAIAAAGgDQAGgDAFgGQADgGAAgIQAAgHgEgGQgEgGgGgDQgGgDgIAAIgJAAg");
	this.shape_6.setTransform(99.5,220.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323232").s().p("AATArIgmg6IAAA6IgRAAIAAhVIAUAAIAkA3IAAg3IARAAIAABVg");
	this.shape_7.setTransform(90,220.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323232").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_8.setTransform(83.4,220.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323232").s().p("AgbArIAAhVIA3AAIAAARIglAAIAAASIAhAAIAAAQIghAAIAAAig");
	this.shape_9.setTransform(78.3,220.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323232").s().p("AgRAoQgHgDgGgGQgHgGgDgIQgEgIAAgJQAAgJAEgHQADgJAHgGQAGgFAIgEQAIgDAIAAQAKAAAHADQAIAEAHAFQAFAGAEAJQADAHAAAJQAAAJgDAIQgDAIgHAGQgGAGgIADQgIAEgJAAQgIAAgJgEgAgMgXQgGAEgDAGQgEAHAAAGQAAAHAEAGQADAHAGADQAFADAHABQAHgBAHgDQAFgDAEgHQADgGAAgHQAAgGgDgHQgEgGgFgEQgHgDgHAAQgHAAgFADg");
	this.shape_10.setTransform(66.9,220.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#323232").s().p("AgIArIAAhDIgZAAIAAgSIBDAAIAAASIgZAAIAABDg");
	this.shape_11.setTransform(58.3,220.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#323232").s().p("AgbArIAAhVIA3AAIAAARIgmAAIAAARIAiAAIAAAQIgiAAIAAASIAmAAIAAARg");
	this.shape_12.setTransform(142.8,207.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#323232").s().p("AAOArIgQgfIgMAAIAAAfIgSAAIAAhVIAgAAQAJAAAHADQAGADAEAGQAFAGAAAJQAAAKgFAFQgEAGgHADIASAigAgOgDIAOAAIAFgBQAEgBACgDQACgCAAgEQAAgEgCgDQgCgCgEgBIgFgBIgOAAg");
	this.shape_13.setTransform(135.4,207.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#323232").s().p("AgbArIAAhVIA3AAIAAARIgmAAIAAARIAiAAIAAAQIgiAAIAAASIAmAAIAAARg");
	this.shape_14.setTransform(127.6,207.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#323232").s().p("AASArIAAgjIgjAAIAAAjIgSAAIAAhVIASAAIAAAiIAjAAIAAgiIARAAIAABVg");
	this.shape_15.setTransform(119.3,207.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#323232").s().p("AAMArIgdgpIAAApIgRAAIAAhVIARAAIAAAmIAdgmIAVAAIggApIAjAsg");
	this.shape_16.setTransform(108.6,207.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323232").s().p("AgOApQgIgDgGgGQgGgGgEgIQgDgIAAgKQAAgIAEgIQADgJAGgFQAGgGAIgEQAIgDAIAAQAJAAAHADQAHACAFAFQAFAEADAFQADAEABAFIgRAGIgCgFIgEgGIgHgEQgEgCgGAAQgGAAgGAEQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGAEQAFAEAHAAQAGAAAEgCIAHgEIAEgGIADgFIAQAGQAAAEgDAEQgDAFgFAFQgFAEgHADQgIADgJAAQgIAAgIgDg");
	this.shape_17.setTransform(99.5,207.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#323232").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_18.setTransform(92.9,207.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#323232").s().p("AgaArIAAhVIASAAIAABEIAjAAIAAARg");
	this.shape_19.setTransform(88.2,207.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#323232").s().p("AgOApQgIgDgGgGQgGgGgEgIQgDgIAAgKQAAgIAEgIQADgJAGgFQAGgGAIgEQAIgDAIAAQAJAAAHADQAHACAFAFQAFAEADAFQADAEABAFIgRAGIgCgFIgEgGIgHgEQgEgCgGAAQgGAAgGAEQgGAEgDAGQgEAGAAAGQAAAHAEAGQADAGAGAEQAFAEAHAAQAGAAAEgCIAHgEIAEgGIADgFIAQAGQAAAEgDAEQgDAFgFAFQgFAEgHADQgIADgJAAQgIAAgIgDg");
	this.shape_20.setTransform(79.9,207.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ApIDgQhdAAhChCQhBhBAAhdQAAhcBBhBQBChCBdAAISRAAQBdAABCBCQBBBBAABcQAABdhBBBQhCBChdAAg");
	this.shape_21.setTransform(110.9,214,1,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(359));

	// Слой 4
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(257.3,213,0.25,0.25,0,0,0,76.1,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359));

	// YOURSELF A FREE MEAL
	this.instance_1 = new lib.t43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.8,121.1,1,1,0,0,0,127,14.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(313).to({_off:false},0).to({x:217.8,alpha:1},9,cjs.Ease.get(1)).wait(37));

	// TODAY & SCORE
	this.instance_2 = new lib.t42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.6,97.2,1,1,0,0,0,87.8,14.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310).to({_off:false},0).to({x:125.6,alpha:1},9,cjs.Ease.get(1)).wait(40));

	// DOWNLOAD EATCLUB
	this.instance_3 = new lib.t41();
	this.instance_3.parent = this;
	this.instance_3.setTransform(142.2,73.3,1,1,0,0,0,118.6,14.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(307).to({_off:false},0).to({x:172.2,alpha:1},9,cjs.Ease.get(1)).wait(43));

	// pc4
	this.instance_4 = new lib.pc4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(133.5,78,1,1,0,0,0,150,93);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(301).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:133.9,y:79,alpha:1},9,cjs.Ease.get(0.5)).to({regY:92.9,scaleX:0.96,scaleY:0.96,x:134.6,y:80.8},48).wait(1));

	// WANT A FREE BURGER
	this.instance_5 = new lib.t31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(114.7,25.3,1,1,0,0,0,118.9,14.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({_off:false},0).to({x:132.7,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:144.7,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// FROM: ZE PICKLE?
	this.instance_6 = new lib.t32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92.8,49.9,1,1,0,0,0,97,14.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(205).to({_off:false},0).to({x:110.8,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:122.8,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// pc3
	this.instance_7 = new lib.pc3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(140,66,1,1,0,0,0,150,93);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(202).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:139.8,y:68.1,alpha:1},9,cjs.Ease.get(0.5)).to({scaleX:0.92,scaleY:0.92,x:138.1,y:79.3},99).to({_off:true},1).wait(48));

	// THAI 1982?
	this.instance_8 = new lib.t24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(55.3,100.6,1,1,0,0,0,59.5,14.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(111).to({_off:false},0).to({x:73.3,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:85.3,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// THE OH BAR
	this.instance_9 = new lib.t23();
	this.instance_9.parent = this;
	this.instance_9.setTransform(61.3,75.5,1,1,0,0,0,65.5,14.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(108).to({_off:false},0).to({x:79.3,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:91.3,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// A MEAL FROM:
	this.instance_10 = new lib.t22();
	this.instance_10.parent = this;
	this.instance_10.setTransform(74.7,49.9,1,1,0,0,0,78.9,14.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105).to({_off:false},0).to({x:92.7,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:104.7,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// WANT
	this.instance_11 = new lib.t21();
	this.instance_11.parent = this;
	this.instance_11.setTransform(31.4,25.3,1,1,0,0,0,35.6,14.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(102).to({_off:false},0).to({x:49.4,alpha:1},9,cjs.Ease.get(1)).wait(77).to({x:61.4,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// pc2
	this.instance_12 = new lib.pc2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(112,93,1,1,0,0,0,150,93);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(99).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:113.3,y:91.1,alpha:1},9,cjs.Ease.get(0.5)).to({scaleX:0.93,scaleY:0.93,x:122.8,y:76.8},103).to({_off:true},1).wait(147));

	// LOADED BY BL?
	this.instance_13 = new lib.t13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(79.1,75.5,1,1,0,0,0,83.3,14.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({x:97.1,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:109.1,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(256));

	// BURGER FROM:
	this.instance_14 = new lib.t12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(78.1,49.9,1,1,0,0,0,82.3,14.7);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({x:96.1,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:108.1,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(259));

	// WANT A FREE
	this.instance_15 = new lib.t11();
	this.instance_15.parent = this;
	this.instance_15.setTransform(69.3,25.3,1,1,0,0,0,73.5,14.7);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:87.3,alpha:1},9,cjs.Ease.get(1)).wait(79).to({x:99.3,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(262));

	// pc1
	this.instance_16 = new lib.pc1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(148.8,71.7,1,1,0,0,0,149.8,93.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:150,regY:93,scaleX:0.9,scaleY:0.9,x:128.5,y:84.6},108,cjs.Ease.get(0.5)).to({_off:true},1).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.8,103.5,343.2,280);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_MREC_3_atlas_.jpg", id:"300x250_MREC_3_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;