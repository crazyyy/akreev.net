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


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF4B00").s().p("AAjBvIg6hiIgTAAIACALIAAAKIAABNIgxAAIAAjdIAxAAIAAA/IAAANIgCANIATAAIA4hZIA1AAIg6BYIgHALIgJAHIAAACQAFACAFAFQAFAFAEAGIA7Bfg");
	this.shape.setTransform(208.7,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4B00").s().p("Ag9BkQgNgMgBgVIAAiFQABgVANgMQANgMAWAAIA0AAQAbABAXACIgCAlIhVAAQgHAAgEADQgDAEAAAJIAAAiIBXAAIAAAiIhXAAIAAArQAAAJADAEQAEAEAHAAIBVAAIACAkQgXACgbABIg0AAQgWAAgNgMg");
	this.shape_1.setTransform(188.6,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF4B00").s().p("Ag9BkQgNgMgBgVIAAiFQABgVANgMQANgMAWAAIA1AAQAaABAXACIgCAlIhUAAQgJAAgDADQgDAEAAAJIAAAiIBXAAIAAAiIhXAAIAAArQAAAJADAEQADAEAJAAIBUAAIACAkQgXACgaABIg1AAQgWAAgNgMg");
	this.shape_2.setTransform(170,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF4B00").s().p("AAwBvQgGAAgFgEQgFgDgBgHIgYiQIgEgcIgFAAIgCAOIgCAOIgYCQQgBAHgFADQgFAEgGAAIgwAAQgGAAgFgEQgFgDgBgGIgjjQIAyAAIAWCZIABAQIABARIAHAAIACgRIADgQIAXiKQACgHAEgEQAFgEAHAAIApAAQAHAAAFAEQAEAEACAHIAXCLIADAQIACAQIAHAAIABgRIABgPIAXiaIAxAAIgjDQQgBAGgFADQgFAEgGAAg");
	this.shape_3.setTransform(144.6,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF4B00").s().p("AADBvIAAibIAAgMIACgNIgyAOIgHghIA3gWIAyAAIAADdg");
	this.shape_4.setTransform(113.7,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4B00").s().p("AgXBvIAAhKIhKiTIA0AAIAlBRIAEAOIAEAOIACAAIADgOIAFgOIAlhRIAzAAIhJCTIAABKg");
	this.shape_5.setTransform(91.2,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF4B00").s().p("Ag7BiQgNgNABgVIAAivIAxAAIAAClQgBAJAFAEQAEAEAJAAIBLAAIADAlIgvADIgvABQgagBgMgNg");
	this.shape_6.setTransform(73.7,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF4B00").s().p("AAuBvQgIAAgEgDQgEgEgEgHIg5h2IgIgRQgEgJgCgIIgDAAIACARIAAASIAACDIgvAAIAAjLQAAgJAFgFQAEgEAJAAIAeAAQAHAAAFADQAEAEAEAHIA3BzIAIAQIAIATIADAAIgBgSIgBgTIAAh/IAvAAIAADLQAAAJgFAFQgEAEgJAAg");
	this.shape_7.setTransform(52.8,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF4B00").s().p("AAABzQgiABgVgLQgVgKgJgZQgJgaAAgsQAAgrAJgaQAJgZAVgKQAVgLAiABQAjgBAVALQAVAKAJAZQAKAagBArQABAsgKAaQgJAZgVAKQgUAKghAAIgDAAgAAaBFQAKgGAEgRQAEgRAAgdQAAgcgEgRQgEgQgKgHQgJgHgRAAQgQAAgJAHQgKAHgEAQQgEARAAAcQAAAdAEARQAEARAKAGQAJAHAQAAQARAAAJgHg");
	this.shape_8.setTransform(30.2,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,46.3);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF4B00").s().p("AgQA8IgYgDIABgTIASAAIANABIAIAAQAJAAAEgCQAEgDAAgHQAAgEgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIgGgDIgXgIQgNgFgGgHQgGgIABgNQgBgOAFgHQAEgHAKgCQAJgDAOAAIATABIAUAEIgCARIgRAAIgUAAIgJABQgDAAgCACQgCADAAAFQAAAGADACQADADAHACIAVAIQAOAEAFAIQAGAIAAANQAAANgEAIQgFAHgJADQgKADgPAAIgEAAIgMgBg");
	this.shape.setTransform(169.6,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4B00").s().p("AAYA7QgEAAgCgCIgFgGIgdg9IgEgJIgEgKIgBAAIABAKIAAAJIAABFIgZAAIAAhrQABgFACgCQACgDAFAAIAPAAQAEAAADACIAEAGIAcA8IAFAJIAEAKIACAAIgBgKIAAgKIAAhDIAYAAIAABrQABAFgDACQgCADgFAAg");
	this.shape_1.setTransform(158.6,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF4B00").s().p("AggA1QgHgGAAgLIAAhGQAAgLAHgHQAHgGAMAAIAbAAQAOAAAMACIgBATIgsAAQgFAAgBACQgCACAAAFIAAARIAuAAIAAASIguAAIAAAXQAAAEACACQABADAFgBIAsAAIABAUIgaABIgbAAQgMAAgHgGg");
	this.shape_2.setTransform(147.8,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF4B00").s().p("AASA7Igeg0IgKAAIABAGIABAFIAAApIgaAAIAAh1IAaAAIAAAiIgBAHIgBAHIAKAAIAdgwIAcAAIgeAvIgEAGIgFADIAAABIAGAEIAEAGIAfAyg");
	this.shape_3.setTransform(137.8,40.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF4B00").s().p("AAAA9QgSAAgLgFQgLgGgEgNQgFgOAAgXQAAgWAFgOQAEgNALgFQALgGASAAQASAAALAGQAMAFAEANQAFAOAAAWQAAAXgFAOQgEANgMAGQgKAFgQAAIgDAAgAgNgjQgFADgCAJQgCAJAAAOQAAAQACAIQACAJAFAEQAFADAIAAQAJAAAFgDQAFgEACgJQACgIAAgQQAAgOgCgJQgCgJgFgDQgFgEgJAAIgBAAQgHAAgFAEg");
	this.shape_4.setTransform(126.1,40.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4B00").s().p("AgMA7IAAhfIgjAAIAAgWIBfAAIAAAWIgjAAIAABfg");
	this.shape_5.setTransform(115.2,40.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF4B00").s().p("AgmA7IAAhdQAAgLAHgHQAHgFAMgBIAaAAQAOAAALACIgBATIgpAAQgFAAgCACQgCACAAAFIAAAUIAsAAIAAASIgsAAIAAAxg");
	this.shape_6.setTransform(102.1,40.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF4B00").s().p("AAAA9QgSAAgLgFQgLgGgEgNQgFgOAAgXQAAgWAFgOQAEgNALgFQALgGASAAQASAAALAGQAMAFAEANQAFAOAAAWQAAAXgFAOQgEANgMAGQgKAFgQAAIgDAAgAgNgjQgFADgCAJQgCAJAAAOQAAAQACAIQACAJAFAEQAFADAIAAQAJAAAFgDQAFgEACgJQACgIAAgQQAAgOgCgJQgCgJgFgDQgFgEgJAAIgBAAQgHAAgFAEg");
	this.shape_7.setTransform(91.2,40.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF4B00").s().p("AAZA6QgGgEgDgIQgDgHAAgNQAAgNADgIQADgGAGgEQAGgDALAAQALAAAGADQAHAEACAGQADAIAAANQAAANgDAHQgCAIgHAEQgGADgLAAQgLAAgGgDgAAjAHQgCABgBAFQgBAEABAJQgBAIABAFQABAEACACQADACAEAAQAEAAACgCQADgCABgEIAAgNIAAgNQgBgFgDgBQgCgCgEAAIgCAAQgDAAgCACgAgrA7IBGh1IAQAAIhFB1gAgpAJQgLAAgGgDQgHgEgDgGQgDgIABgNQgBgNADgIQADgHAHgEQAGgDALAAQAKAAAHADQAGAEADAHQADAIAAANQAAANgDAIQgDAGgGAEQgGADgJAAIgCAAgAgwgsQgCACgBAEIgBANIABANQABAFACABQACACAEAAQAFAAACgCQACgBABgFIABgNIgBgNQgBgEgCgCQgCgCgFAAQgEAAgCACg");
	this.shape_8.setTransform(74,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF4B00").s().p("AgSA7IgVgDIADgUIAQABIANABQAJAAAEgCQAEgBACgEQACgEABgGQAAgHgDgEQgCgDgHgCIgPgCIgOgBQgEgBgDgCQgBgCgBgEIADg0IBFAAIgBAVIgvAAIgCAVIAQACQAOABAIAFQAJAFADAHQADAIAAALQAAAKgDAJQgEAIgJAFQgIAGgQAAIgSgBg");
	this.shape_9.setTransform(61.6,40.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF4B00").s().p("AgoA8IAAgPIABgFQAAgDACgCIAdgfQAKgKAFgIQAFgJAAgGQAAgFgEgBQgEgCgHAAIgLABIgLAAIgNABIgBgUQAMgCAJgBIASgBQALAAAJACQAJADAEAGQAFAGABALQAAAGgCAGQgBAGgFAGIgMANIgdAgIAJgBIAHgBIAkAAIAAAYg");
	this.shape_10.setTransform(52,40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0075AF").s().p("AgYAtQgHgFgDgMQgDgLAAgRQAAgSAEgLQAEgLAKgFQAJgEAPAAIAQABIAOACIgCAQIgOgBIgNAAIgJABQgEABgDAEQgCADgCAHIgBAPQAAAMACAHQABAHAEADQADADAFAAQAFAAAFgCIAIgDIAAghIAUAAIAAA2IgQAAIgCgKQgCADgEADIgJAEQgFACgGAAQgLAAgHgFg");
	this.shape_11.setTransform(158.5,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0075AF").s().p("AAUAwQgEAAgCgBIgDgFIgYgzIgDgHIgDgIIgCAAIABAIIAAAIIAAA4IgUAAIAAhYQAAgDACgCQACgCAEAAIANAAQADAAACABIADAFIAYAxIADAHIAEAJIABAAIAAgJIgBgIIAAg2IAVAAIAABYQAAADgCACQgCACgEAAg");
	this.shape_12.setTransform(149,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0075AF").s().p("AgKAwIAAhfIAVAAIAABfg");
	this.shape_13.setTransform(141.9,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0075AF").s().p("AAUAwQgEAAgCgBIgDgFIgYgzIgDgHIgDgIIgCAAIABAIIAAAIIAAA4IgUAAIAAhYQAAgDACgCQACgCAEAAIANAAQADAAACABIADAFIAYAxIADAHIAEAJIABAAIAAgJIgBgIIAAg2IAVAAIAABYQAAADgCACQgCACgEAAg");
	this.shape_14.setTransform(134.8,24.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0075AF").s().p("AgJAwIAAhfIATAAIAABfg");
	this.shape_15.setTransform(127.7,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0075AF").s().p("AAkAwIgDhPIgDAAIgOA7QgBAEgCABQgDACgDAAIgNAAQgEAAgCgCQgCgBgBgEIgOg7IgDAAIgDBPIgUAAIAEhXQAAgEACgCQACgCAEAAIAUAAQAEAAACABIADAFIALAwIACAHIABAGIABAAIABgGIABgHIAMgwIADgFQACgBAEAAIAUAAQAEAAACACQACACAAAEIAEBXg");
	this.shape_16.setTransform(119.2,24.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0075AF").s().p("AgYAuQgIgFgEgLQgEgLgBgTQABgSAEgLQAEgLAIgFQAJgEAPAAQAPAAAJAEQAKAFADALQAFALAAASQAAATgFALQgDALgKAFQgJAEgPAAQgPAAgJgEgAALAeQAFgDABgHQACgHAAgNQAAgMgCgHQgBgHgFgDQgEgDgHAAQgHAAgDADQgFADgCAHQgBAHAAAMQAAANABAHQACAHAFADQADADAHAAQAHAAAEgDg");
	this.shape_17.setTransform(108.1,24.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0075AF").s().p("AgJAwIAAhOIgdAAIAAgRIBNAAIAAARIgcAAIAABOg");
	this.shape_18.setTransform(99.1,24.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0075AF").s().p("AgjAxIAAhfIAKgBIAMgBIAOAAQANAAAHADQAIADAEAHQADAGAAAMQAAANgDAGQgEAHgHACQgHADgMABIgIgBIgJgBIAAAkgAgOgBIAOAAQAGAAADgBQADgCABgDQACgEAAgGQAAgFgCgDQgBgEgDgCIgJgBIgOAAg");
	this.shape_19.setTransform(90.9,24.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0075AF").s().p("AgKAwIAAggIgfg/IAWAAIAQAjIACAGIABAGIABAAIACgGIABgGIARgjIAVAAIgfA/IAAAgg");
	this.shape_20.setTransform(82,24.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0075AF").s().p("AAPAxIgHgeQgBgEgDgCQgCgBgDgBIgPAAIAAAmIgVAAIAAhfIALgBIALgBIAPAAQALAAAIADQAIACADAHQAEAFABAMQAAAKgFAGQgEAFgKABIAAABIAFADQADABACADQACADACAFIAIAegAgQgEIAPAAQAIAAADgDQADgDAAgIQAAgIgDgCQgDgEgIAAIgPAAg");
	this.shape_21.setTransform(73.6,24.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0075AF").s().p("AgSAtQgJgFgEgLQgEgLAAgSQAAgRAEgLQAEgLAJgFQAJgFAOAAIAMAAIAIABIAJACIgCAQIgIAAIgJgBIgKAAQgGAAgEADQgEADgCAHQgBAHAAALQAAAMABAHQACAHAEADQAEADAGAAIALgBIAKAAIAIgBIACAQIgJACIgKACIgMAAIgDAAQgMAAgIgFg");
	this.shape_22.setTransform(64.8,24.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0075AF").s().p("AgaArQgGgFAAgJIAAg5QAAgJAGgFQAGgGAJAAIAWAAIAWACIgBAPIgkAAQgDAAgCACQgBACAAAEIAAAOIAlAAIAAAPIglAAIAAASQAAAEABACQACACADAAIAkAAIABAPIgWABIgWABQgJAAgGgGg");
	this.shape_23.setTransform(191.1,9.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0075AF").s().p("AgZAqQgGgFAAgJIAAhMIAWAAIAABHQgBAFACABQACABAFAAIAfAAIABARIgUABIgTAAQgMAAgFgGg");
	this.shape_24.setTransform(183.6,9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0075AF").s().p("AgLAyIgNAAIgMgCIAAhfIALgBIALAAIAOAAQAMAAAHACQAIACADAGQAEAFAAAKQAAAKgEAGQgEAFgJABIAAABQAKAAAFAHQAFAGAAAMQAAAKgEAFQgDAFgIACQgHACgLABIgPAAgAgPAiIAPAAIAJgBQADgCACgDQABgCAAgGQAAgFgBgEQgCgDgDgBQgDgBgGAAIgPAAgAgPgIIAPAAQAHABADgDQADgDAAgHQAAgHgDgDQgDgCgIAAIgOAAg");
	this.shape_25.setTransform(175.2,9.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0075AF").s().p("AAYAwIgHgZIghAAIgHAZIgVAAIAbhaQABAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQACgBADAAIATAAQADAAACABQAAABABAAQAAAAABABQAAAAAAABQAAABABAAIAcBagAAMAGIgIgcIgBgFIgBgEIgDAAIgCAJIgIAcIAXAAg");
	this.shape_26.setTransform(166,9.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0075AF").s().p("AgJAwIAAhOIgeAAIAAgRIBOAAIAAARIgcAAIAABOg");
	this.shape_27.setTransform(157.3,9.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0075AF").s().p("AgKAwIAAhfIAUAAIAABfg");
	this.shape_28.setTransform(151,9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0075AF").s().p("AgfAwIAAhLQAAgKAGgFQAFgGAKABIAVAAIAVABIgBAQIghAAQgEAAgCACQgCABAAAEIAAAQIAkAAIAAAPIgkAAIAAAog");
	this.shape_29.setTransform(145.4,9.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0075AF").s().p("AgYAuQgIgFgEgLQgEgLgBgTQABgSAEgLQAEgLAIgFQAJgEAPAAQAPAAAJAEQAKAFADALQAFALAAASQAAATgFALQgDALgKAFQgJAEgPAAQgPAAgJgEgAALAeQAFgDABgHQACgHAAgNQAAgMgCgHQgBgHgFgDQgEgDgHAAQgHAAgDADQgFADgCAHQgBAHAAAMQAAANABAHQACAHAFADQADADAHAAQAHAAAEgDg");
	this.shape_30.setTransform(136.4,9.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0075AF").s().p("AAQAxIgIgdQgBgFgCgCQgDgCgDABIgPAAIAAAlIgVAAIAAhgIALgBIALAAIAPAAQALAAAIACQAIADADAGQAFAGAAALQgBALgEAGQgEAFgKACIAAAAIAFACQADACACADQADADAAAFIAJAegAgQgEIAPAAQAIAAACgDQAEgDAAgIQAAgIgEgDQgCgCgIAAIgPAAg");
	this.shape_31.setTransform(127.4,9.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0075AF").s().p("AgjAxIAAhgIAKgBIAMAAIANAAQANAAAJADQAHADAEAGQADAIAAAMQAAAMgDAGQgEAHgGADQgIACgLAAIgJAAIgJgBIAAAkgAgOgBIAOAAQAFAAADgCQAEgBABgDQABgDABgGQgBgHgBgCQgBgEgEgCIgIAAIgOAAg");
	this.shape_32.setTransform(118.6,9.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0075AF").s().p("AgaArQgGgFAAgJIAAg5QAAgJAGgFQAFgGAKAAIAXAAIAVACIgBAPIgkAAQgEAAgBACQgBACgBAEIAAAOIAmAAIAAAPIgmAAIAAASQABAEABACQABACAEAAIAkAAIABAPIgVABIgXABQgKAAgFgGg");
	this.shape_33.setTransform(107.1,9.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0075AF").s().p("AgZAqQgFgFgBgJIAAhMIAWAAIAABHQAAAFACABQABABAEAAIAgAAIABARIgTABIgUAAQgMAAgFgGg");
	this.shape_34.setTransform(99.6,9.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0075AF").s().p("AgLAyIgNAAIgMgCIAAhfIALgBIALAAIAOAAQAMAAAHACQAIACADAGQAEAFAAAKQAAAKgEAGQgEAFgJABIAAABQAKAAAFAHQAFAGAAAMQAAAKgEAFQgDAFgIACQgHACgLABIgPAAgAgPAiIAPAAIAJgBQADgCACgDQABgCAAgGQAAgFgBgEQgCgDgDgBQgDgBgGAAIgPAAgAgPgIIAPAAQAHABADgDQADgDAAgHQAAgHgDgDQgDgCgIAAIgOAAg");
	this.shape_35.setTransform(91.2,9.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0075AF").s().p("AAXAwIgHgZIgfAAIgHAZIgWAAIAchaQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQACgBADAAIATAAQADAAACABQABABAAAAQAAAAABABQAAAAAAABQAAABABAAIAcBagAAMAGIgIgcIgBgFIgBgEIgDAAIgCAJIgIAcIAXAAg");
	this.shape_36.setTransform(82,9.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0075AF").s().p("AAVAwIgFgBQgCgCgBgDIgKg+IgBgMIgCAAIgBAGIgBAGIgLA+QAAADgCACQgCABgDAAIgUAAQgEAAgCgBQgBgCgBgDIgQhZIAXAAIAJBCIABAGIAAAIIADAAIABgHIABgHIALg8QAAgDACgBQACgCADAAIASAAQADAAABACQACABABADIAKA8IACAHIAAAHIADAAIAAgHIABgHIAKhCIAWAAIgQBZQAAADgCACQgCABgEAAg");
	this.shape_37.setTransform(70.7,9.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0075AF").s().p("AgaArQgGgFAAgJIAAg5QAAgJAGgFQAGgGAJAAIAWAAIAWACIgBAPIgkAAQgDAAgCACQgCACABAEIAAAOIAlAAIAAAPIglAAIAAASQgBAEACACQACACADAAIAkAAIABAPIgWABIgWABQgJAAgGgGg");
	this.shape_38.setTransform(60,9.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0075AF").s().p("AAUAwQgEAAgCgBIgDgFIgYgzIgDgHIgDgIIgCAAIABAIIAAAIIAAA4IgUAAIAAhYQAAgDACgCQACgCAEAAIANAAQADAAACABIADAFIAYAxIADAHIAEAJIABAAIAAgJIgBgIIAAg2IAVAAIAABYQAAADgCACQgCACgEAAg");
	this.shape_39.setTransform(50.8,9.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0075AF").s().p("AgaArQgGgFAAgJIAAg5QAAgJAGgFQAFgGAKAAIAXAAIAVACIgBAPIgkAAQgEAAgBACQgBACgBAEIAAAOIAmAAIAAAPIgmAAIAAASQABAEABACQABACAEAAIAkAAIABAPIgVABIgXABQgKAAgFgGg");
	this.shape_40.setTransform(41.9,9.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0075AF").s().p("AAQAxIgIgdQgBgFgCgCQgDgCgDABIgPAAIAAAlIgVAAIAAhgIAKgBIAMAAIAOAAQAMAAAIACQAIADAEAGQADAGAAALQAAALgEAGQgEAFgKACIAAAAIAFACQADACACADQACADABAFIAJAegAgQgEIAPAAQAIAAACgDQAEgDAAgIQAAgIgEgDQgCgCgIAAIgPAAg");
	this.shape_41.setTransform(33.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(3.1,-1.8,217.5,53.3), null);


(lib.HANDS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006CA1").s().p("AhZC6QgfgLgigxQgigwgEgkQAGgKAKgYQAJgTALgKQBIhEBkhUQAZgVAjADQAhAEAXAZQAXAcAWAiQAUAegEAkQgFAjgaAYQhVBLhTBHQgZAVgcAAQgPAAgPgGg");
	this.shape.setTransform(138.6,79.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006CA1").s().p("AhfC0QgIgEgIgGQgcgUgbgkQgpgzgJgjIAAgBQACgJAJgSIAEgJQAIgNAIgIIAIgJIA5gtQAlgbAegYQApgeAhgUIANgEQASgJAgAMQAbAHAXAUIAKAJQAeAgAXAgQAJAMAEAKQAJAWgCAaQgEAagPATQgIAKgJAJIhqBcQgaAWgbAMQgNAIgSAEQgQAIgSAAQgYAAgcgOg");
	this.shape_1.setTransform(141.9,81.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006CA1").s().p("AgLDHQgmAGg0ghIgSgNQgfgYgdgjQgvg2gOgjIAAAAQgBgKALgUIAFgJQAIgOAKgIIAKgJQAdgVAjgYQAvgeAdgVQAxggAjgMQAHgBAGABQAPgFAmAVQAaAKAaAXIALAKQAkAkAYAeQAMANADAJQAMAYgDAcQgDAdgSAUQgJALgLAJIhzBkQgdAYgfAFQgHADgJAAQgIAAgLgCg");
	this.shape_2.setTransform(145.2,84.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006CA1").s().p("AAaDaQgNACgagNQgmgGg4gqIgSgPQgjgdgegiQg2g5gTghIAAgBQgFgLANgWIAGgKQAKgOALgIIALgJQAhgVAngXQA4ghAcgSQA7gkAigCQAJAAAGAEQAMgCArAeQAaAOAdAaIAMALQArAoAYAcQAOAPAEAHQAOAagDAdIAAABQgEAfgVAWIgVAUIh9BtQgdAYggAAIgHAAg");
	this.shape_3.setTransform(148.5,87.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006CA1").s().p("AAdDsQgNgBgfgVQglgTg8gyIgUgRQgmgiggghQg8g8gYghIAAAAQgIgMAPgYIAHgKQAKgPANgIIANgJQAjgVAsgXQBCgjAagQQBDgmAlAGQAJACAHAGQAIACAwAnQAaASAgAcIANAMQAxAsAZAaQARAQADAGQARAcgEAgIAAABQgEAhgXAXIgYAVQhDA8hDA5QgaAWgdAAQgKAAgKgDg");
	this.shape_4.setTransform(151.7,90.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006CA1").s().p("AAfD/QgbgKiOiFQiBh3gqgwQgLgMARgaQAPgXASgLQArgYA7gdIBkgyQBhg0AhAmQAHAIBwBiQBuBfAIAMQATAegEAjQgEAkgbAYQhVBLhUBHQgYAVgcAAQgPAAgQgGg");
	this.shape_5.setTransform(154.9,93.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006CA1").s().p("AAeDzQgNgDgggYQgmgXg9g2IgUgRQgogkggghQg+g8gaghIgBgBQgJgMAQgZIAHgKQALgPANgIIAOgIQAkgWAugXQBFgkAagPQBHgnAkAKQAKADAHAGQAGADAzAqQAZAUAiAdIANAMQA0AuAZAZQASARADAFQASAdgEAhIAAABQgFAigYAXIgYAWIiKB3QgaAWgcAAQgMAAgMgEg");
	this.shape_6.setTransform(152.9,91.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006CA1").s().p("AAcDoQgNgBgdgTQgmgPg7gxIgTgQQglghggghQg6g8gXggIgBgBQgHgLAPgYIAHgKQAKgPAMgIIANgIQAjgVAqgYQBAgiAagRQBBglAkAEQAJACAHAFQAJABAvAkQAZASAgAbIANAMQAvArAZAaQAQAQAEAGQAQAcgEAfIAAABQgEAhgXAXIgWAUQhDA7hCA4QgaAWgeAAQgIAAgJgBg");
	this.shape_7.setTransform(150.9,89.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006CA1").s().p("AAaDcQgNABgagNQgmgIg5grIgSgPQgjgegfgiQg2g5gUghIAAgBQgFgLANgWIAGgKQAKgOALgIIAMgJQAhgVAogYQA5ggAbgTQA8gjAjgCQAJABAGAEQALgBAsAeQAaAPAeAaIAMALQArApAZAbQAOAPADAHQAPAbgDAeIAAAAQgEAggVAWIgWAUQg/A4g/A1QgcAZggAAIgJgBg");
	this.shape_8.setTransform(148.9,87.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006CA1").s().p("AgMDLQgmAAg2gmIgSgNQghgbgegiQgyg4gQgiIgBgBQgDgJAMgWIAGgJQAJgOAKgJIALgIQAfgVAlgYQA0gfAcgUQA2giAigHQAIAAAHACQANgDAoAZQAaAMAcAYIALALQAoAmAYAdQANAOADAIQAOAZgEAdIAAAAQgDAegUAVQgJALgLAJIh4BoQgeAagiABIgIABQgMAAgRgGg");
	this.shape_9.setTransform(146.9,85.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006CA1").s().p("AhlCtIgRgMQgfgYgcgjQgug2gOgiIAAgBQgBgKALgTIAFgJQAIgOAJgIIALgJQAcgVAjgYQAtgdAdgWQAxggAigMQAHgCAGABQAPgGAmAUQAaAKAaAWIALAKQAjAkAYAeQALANAEAJQALAYgDAcIAAAAQgDAcgSAUQgJAKgKAKIhyBjQgdAYgeAFQgOAGgVgDQgHABgIAAQghAAgqgag");
	this.shape_10.setTransform(144.8,84);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006CA1").s().p("AhhCyQgIgFgIgGQgdgVgcgkQgqg0gKgjIAAAAQABgKAKgSIAEgJQAIgNAIgJIAJgIIA7gtQAngcAegYQArgeAhgRQAHgDAGgBQARgHAiANQAbAIAYAVIAKAJQAfAiAXAfQAKAMAEAJQAKAXgDAbIAAAAQgDAagQAUIgSATIhsBeQgbAWgbAKQgOAJgTABQgOAGgPAAQgbAAgfgRg");
	this.shape_11.setTransform(142.8,82.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006CA1").s().p("AhdC2QgIgEgIgFQgagSgbglQgmgygHgjIAAAAQADgJAJgTIAEgHQAGgOAIgIIAIgIIA2gtIBAg0QAlgdAhgXIAMgGQAUgJAeAIQAbAFAWATIAKAJQAbAfAXAgQAIAMAEAKQAIAWgCAZQgDAYgPAUQgHAJgJAJIhnBZQgYAVgZAOQgOAKgQAHQgTANgWAAQgVAAgXgLg");
	this.shape_12.setTransform(140.7,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},35).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(12));

	// Слой 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006CA1").s().p("AgHESQgjgEgcgkQhmiFg1hJQgHgKgIgTIgPglIAUglQAMgWALgLQAmgjB8hqQAggcAiAEQAjAEAaAiICaDLQAdAlgFAnQgEAmgkAgIiZCFQggAbgeAAIgHAAg");
	this.shape_13.setTransform(88,97.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006CA1").s().p("AgFEQQgkgJgggmIgqgwQhfhvgsg6IgJgNIgJgRIgEgKQgLgYgCgHQAAgFAPgXIAHgLIALgPQAJgLAJgIQAhgcBLg7QAUgQAVgMQARgKASgGIAIgDQAbgOAkANQAiAKAgAkIAfAlQBSBfBBBRIAKANQATAcgBAdIgBALQgEAYgRAWQgLAPgQAOIhSBHQgWATgVANQgWAMgWAHIgDAAQgSAMgWAAQgQAAgRgGg");
	this.shape_14.setTransform(94.1,103.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006CA1").s().p("AgDENQgkgPgkgnIgyg0Qhwh4gug4QgGgHgEgIIgKgRIgGgKQgMgYgCgLQAAgIAQgWIAJgLQAGgHAHgIQAKgKALgIQAoggBQg6QAYgSAYgIQASgHAUABIAJAAQAagGApAXQAiAPAkAlIAlAnQBkBqBCBNIAMAQQAWAdgCAgIgCAMQgFAagUAXQgOAPgRAPIhZBOQgZAVgYAJQgYAIgZgDIgEgBQgJADgKAAQgYAAgigTg");
	this.shape_15.setTransform(100.1,109.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006CA1").s().p("ABUEvIgEgBQgYACg5goQgkgUgpgpIg4g4QiDiAgvg3IgMgQIgLgSIgHgLQgNgXgBgPQgBgLARgVIALgLIAQgOQAKgKAMgJQAwgjBVg6QAcgTAagFQAVgDAWAHIAJAEQAYACAuAgQAkAUAoAoIApApQB3B0BDBLIAOAQQAZAfgDAjIgCANQgHAbgXAYQgQAQgTAQIhgBVQgcAYgcADIgNACQgUAAgVgLg");
	this.shape_16.setTransform(106.1,115.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006CA1").s().p("ACWFYQgdAAgfgXIgEgDQgVgHhBg0QgjgagugrIg/g7QiViJgvg2IgOgRIgNgSIgHgMQgOgXgCgSQgBgPASgTIANgLIASgPIAZgSQA2gmBbg6QAggVAdAAQAWAAAZAOIAKAGQAVAKA0AqQAkAaAtApIAuArQCKB/BEBIIAPARQAcAggEAmQgBAHgCAHQgIAdgaAZIgmAiIhoBbQgeAagfAAIgBAAg");
	this.shape_17.setTransform(112.1,121.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006CA1").s().p("ACiF3QgggEgighIj7jfQjHivgegqQgQgSgIgNQgOgWgCgWQgCgTATgRIAkgZQBBguB4hIQAkgXAfAFQAdADAhAdIDWC9QCvCbBCBFQAgAjgGApQgFAmglAhIiZCFQgdAZgdAAIgJgBg");
	this.shape_18.setTransform(118.1,127.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006CA1").s().p("ACaFkQgegCgggaIgEgEQgUgKhEg5QgjgcgvgrIhDg9QibiMgwg2QgJgKgEgHIgOgSIgIgNQgOgWgCgUQgBgQASgSIANgLIAUgPIAagTQA5gnBdg6QAhgVAdABQAYABAZARIAKAHQAVANA2AtQAkAcAvArIAwArQCQCDBFBHIAPARQAeAhgFAnIgDAPQgIAdgcAZIgnAjIhrBdQgdAageAAIgFAAg");
	this.shape_19.setTransform(114.4,123.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006CA1").s().p("ABZE9IgEgDQgWgEg/gyQgkgYgsgqIg+g7QiQiHgvg2IgNgRIgNgSIgHgMQgOgWgCgSQgBgOASgTIAMgLIASgPIAZgTQA0glBag6QAfgUAcgBQAWgBAYAMIAKAGQAWAHAyAoQAjAZAtApIAtAqQCEB8BEBJIAPAQQAcAggFAmIgCAOQgIAcgaAZIgkAhIhnBZQgdAagfABIgCAAQgbAAgdgTg");
	this.shape_20.setTransform(110.6,120);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006CA1").s().p("ABVEyIgEgCQgYABg6gpQgkgVgpgpIg6g5QiFiBgug3IgMgQIgMgSIgHgLQgNgXgCgPQAAgMARgUIALgLIAQgPIAXgTQAwgjBWg6QAdgUAagDQAVgDAXAIIAJAEQAXACAwAiQAjAVApAoIAqApQB5B2BDBKIAOAQQAaAfgEAkIgCANQgHAbgYAYQgQARgSAQIhiBVQgcAYgcAEIgLAAQgVAAgXgLg");
	this.shape_21.setTransform(106.8,116.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006CA1").s().p("ABREnIgEgBQgaAHg1giQgkgSgngoIg0g2Qh6h8gug3IgLgPIgLgSIgGgLQgNgXgBgNQgBgKARgVIAKgLIAOgPQAKgKAMgIQArghBTg7QAagSAZgHQAUgEAVADIAJACQAYgCAsAcQAjARAmAnIAnAoQBuBvBCBMIANAQQAYAegDAhIgCANQgGAagVAYQgPAQgSAPIhdBRQgaAXgaAGQgLACgMAAQgOAAgPgEg");
	this.shape_22.setTransform(103.1,112.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006CA1").s().p("AgDEOQgkgPgkgnIgwgzQhvh3gtg4IgLgPQgFgIgEgJIgGgKQgMgYgBgLQgBgHAQgWIAJgLIANgPQAKgLAKgIQAngfBQg6QAXgSAYgJQASgGAUgBIAIAAQAagHAoAWQAjAOAkAlIAjAnQBjBoBBBOIAMAPQAWAdgCAgIgCAMQgFAZgTAXQgOAQgRAPIhYBNQgZAVgYAIQgYAJgYgCIgEAAQgJAEgMAAQgXAAgggRg");
	this.shape_23.setTransform(99.3,108.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006CA1").s().p("AgFEPQgjgKghgmIgsgyQhjhwgtg7QgGgFgEgIQgFgIgEgJIgEgKQgMgYgBgIQAAgFAPgYIAIgLIALgOQAJgLAJgIQAjgdBMg7QAVgQAWgMQARgIATgFIAIgCQAbgMAlAQQAjALAgAkIAgAlQBXBiBBBQQAHAIAEAGQAUAcgBAeIgCAMQgEAYgRAWQgNAPgQAOIhUBJQgWAUgWALQgWALgXAFIgEAAQgPAJgTAAQgTAAgVgJg");
	this.shape_24.setTransform(95.6,104.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006CA1").s().p("AgFERQgkgHgeglIgngwQhZhqgsg7IgJgOIgHgQIgEgJQgLgZgCgGQAAgCAPgZIAHgLIAJgOQAJgMAIgHQAfgbBIg7QATgQAVgOQAPgKASgJIAHgEQAcgRAiAKQAiAHAeAjIAdAlQBMBaBABTIAKAOQASAagBAcIgBALQgDAXgQAWQgLAOgPAOIhPBFQgVASgUAOQgVAOgVAKIgDABQgXARgaAAQgLAAgLgDg");
	this.shape_25.setTransform(91.8,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_13}]},30).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_13}]},1).wait(17));

	// Слой 3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006CA1").s().p("AAVE7QgigEgbgjIjWkbQgIgMgJgTIgOghQAIg0AigdICbiHQAlgfAjAEQAiAEAeAnIChDVIA5BLQAYAigEAkQgEAkgeAbQhQBIhSBFQgdAZgfAAIgJgBg");
	this.shape_26.setTransform(43.4,124);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006CA1").s().p("AAcE8IgGgCQgcgIgcgiQgzg/gwg5IiJinIgIgKQgFgJgGgMIgDgHIgMgcQAHgsAagcIAMgLIB6hqQAUgRAVgPIAMgGQAfgSAfAKIACABQAeAIAiAoIBFBTQA7BGAwA8IARAVIAcAiIAQAUIAMATQANAagCAaIgBAKQgGAfgaAYIgCACIiIB3QgRAOgRALQgXARgZAAQgLAAgMgEg");
	this.shape_27.setTransform(47.8,129.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006CA1").s().p("AAjE+IgGgDQgbgLgfgjQgzg8g5g+IiWioIgIgLQgGgIgGgNIgDgHIgMgeQAHguAcgcIAMgLIB/huQAWgTAWgMIANgFQAfgLAgAQIACAAQAbALAnArIBLBTQBGBLAuA3IARAUIAfAjIARAUIANATQAPAbgBAbIgBAKQgGAggbAZIgDACQhGA/hHA9QgSAPgSAJQgTALgTAAQgSAAgSgJg");
	this.shape_28.setTransform(52.2,134.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006CA1").s().p("AAqFAIgGgEQgYgOgiglQg0g3hDhEIiiirIgJgKQgGgIgGgNIgEgIIgNgfQAIgwAegcIANgMICEhyQAXgUAYgJIAOgDQAfgHAhAWIACACQAZAOAqAsQAkAmAuAuQBQBQAsAxIATAVIAhAjIASAUQAIAKAFAJQARAbgBAcIgBAKQgFAigcAaIgDACQhJBBhKBAQgTAPgTAIQgOAGgPAAQgXAAgZgPg");
	this.shape_29.setTransform(56.5,140.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006CA1").s().p("AAyFDIgHgFQgWgRgmgmQg0g0hMhJQiAh9gugwIgKgKQgHgIgGgOIgEgIIgNggQAIgyAggcIANgNICJh2QAZgVAZgGQAIgCAIAAQAegBAjAcIABACQAXARAvAuQAlAlAzAwQBbBVApAsIATAUIAkAjIATAUQAJAKAFAJQATAcAAAdIgBALQgFAjgdAaIgDADQhMBDhNBCQgUARgUAGQgKADgLAAQgdAAgdgXg");
	this.shape_30.setTransform(60.9,145.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006CA1").s().p("AAzFAQgrgridiPQiTiFgyg0QgJgKgJgUIgNgiQAIgzAigdICbiHQAkgfAiAFQAgAEAkAlQAhAiCFB3QCFB3AcAdIAmAkQAYAXALAQQAXAigDAkQgEAkgfAbQhQBIhSBFQgbAXgcAAQglAAgmgmg");
	this.shape_31.setTransform(65.3,151);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006CA1").s().p("AA0FEIgGgGQgVgRgngnQg0gzhRhLQiBh7gxgyIgKgKQgHgIgGgOIgEgIIgOghQAJgyAggdIAOgMICKh4QAagWAZgFQAIgCAIABQAfABAiAeIACACQAWASAwAwIBbBUQBeBXAqAqIATAUIAlAjIATAUQAJALAGAIQATAdAAAdIgBALQgEAjgeAbIgEADQhMBEhOBDQgUARgVAFQgJACgJAAQgfAAgggag");
	this.shape_32.setTransform(62.5,147.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006CA1").s().p("AAwFCIgGgFQgXgQglglQg0g1hKhIQh+h9gtgvIgKgKQgHgJgGgNIgDgIIgNggQAIgxAfgdIANgMICIh1QAYgVAZgHQAIgCAHAAQAfgCAiAbIACABQAXAQAtAuIBXBVQBYBTArAuIATAUIAjAjIASAUIAOATQASAcAAAdIgBAKQgEAjgeAaIgDADQhLBDhMBBQgUAQgUAGQgLAEgMAAQgbAAgcgVg");
	this.shape_33.setTransform(59.8,144.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006CA1").s().p("AArFBIgGgFQgYgOgjglQgzg3hFhEQh6iAgpgrIgJgKQgHgJgFgNIgEgIIgNgfQAIgwAegcIANgMICEhzQAYgUAYgIIAOgEQAfgFAhAXIACABQAZAOArAtIBTBUQBRBRAsAwIASAUIAiAkIASAUQAIAKAFAIQARAcAAAcIgBAKQgFAigdAaIgDACQhJBChLBAQgSAQgUAHQgOAGgOAAQgYAAgZgQg");
	this.shape_34.setTransform(57.1,141);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006CA1").s().p("AAnE/IgGgDQgagNgggkQgzg6g/hBIicipIgIgKQgGgJgGgNIgEgHIgMgeQAIgvAcgcIANgMICBhwQAXgUAXgKIANgEQAggJAgATIACABQAbAMAoAsQAiAmAsAtQBLBOAtA0IASAUIAgAjIARAUIAOATQAPAbgBAcIgBAKQgFAhgcAZIgCACQhIBAhJA/QgSAPgTAJQgQAIgSAAQgUAAgVgMg");
	this.shape_35.setTransform(54.3,137.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006CA1").s().p("AAiE+IgGgDQgbgLgegjQgzg8g4g9IiUipIgIgKQgGgJgGgMIgDgIIgNgdQAIguAcgbIAMgMIB+htQAWgTAWgMIANgFQAfgNAfAPIACABQAcALAmAqIBKBTQBFBLAuA3IARAVIAfAiIARAUQAIAKAFAJQAOAbgBAbIgBAKQgGAggbAZIgCACQhGA+hHA9QgSAPgSAKQgTALgUAAQgRAAgSgIg");
	this.shape_36.setTransform(51.6,134.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#006CA1").s().p("AAeE9IgGgCQgcgKgdgiQgzg+gyg6IiMinIgIgLQgGgIgFgNIgDgHIgMgcQAHgtAagbIAMgMIB8hqQAUgSAVgOIAMgGQAggQAfALIACABQAdAIAjApIBGBTQA/BIAvA6IARAVIAdAjIAQAUQAHAJAFAJQAOAagCAbIgBAKQgGAfgbAZIgCABQhEA9hFA8QgRAOgRALQgXAPgXAAQgNAAgNgFg");
	this.shape_37.setTransform(48.9,130.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#006CA1").s().p("AAZE8IgGgCQgdgHgagiQgzhAgsg3IiFimIgHgKQgGgJgFgMIgDgHIgMgbQAHgsAagbIALgLIB4hpIAoggIAMgIQAfgTAeAIIACAAQAfAHAhAoIBCBSQA4BEAwA/IAQAUIAcAjIAQAUQAHAJAEAJQANAagCAaIgCAJQgGAfgaAYIgBABIiHB2IggAaQgaATgaAAQgKAAgJgCg");
	this.shape_38.setTransform(46.1,127.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_26}]},25).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_26}]},1).wait(22));

	// Слой 4
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#006CA1").s().p("Ag1DxQgTgLgJgLQgwg8hbh8QgXgfAEgkQAEgkAdgaQBThKBUhIQAdgYAiADQAjAEAXAeQBWBvA1BJQAXAggEAkQgEAlgeAbQheBThHA7QgJAIgSAIIghAPIgigVg");
	this.shape_39.setTransform(3.4,156.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#006CA1").s().p("AgpD2IgNgJQgSgMgLgMIg9hIQgtg0gsg7IgKgOQgPgZAFgcIAAgBQAEgdAWgYIAKgJQAegaAigcQArgjAjgfQAQgOASgLIAMgHQAYgMAdAIIAAAAQAfAGAcAfIAvA3QBCBNAnAzIACAEQAUAbgCAfIgBAIQgEAegWAXIgLALIg1AuQgfAagmAeQgcAXgZARQgKAGgQAGIgDAAQgQAGgKABIgIABIgUgOg");
	this.shape_40.setTransform(6.2,159.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006CA1").s().p("AgPEDIgIgBQgLgIgJgIIgNgKQgQgMgOgOIhChIQg2g4gpg1IgJgOQgRgaAFgcIAAgBQAFgcAZgZIAKgJQAdgaAngdQAvglAhgdQASgPASgJIANgFQAagIAcAMIABAAQAbAIAhAhIA0A3QBKBOAnAxIACAEQAWAagEAiIgBAIQgGAegXAXIgLALQgcAYgcAXQgbAWgvAiQgeAYgaAOQgLAGgQADIgDABQgJACgHAAIgLgBg");
	this.shape_41.setTransform(9,162.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006CA1").s().p("AgRECQgFgBgCgCQgMgIgJgJIgNgMQgPgMgPgPIhHhIQhAg9glgvIgKgOQgSgaAGgdIAAgBQAGgbAbgaIAKgJQAdgZAqgfQA1gnAfgbQATgQATgGIAOgEQAagEAdARIABAAQAXAKAnAjIA4A2QBSBQAnAvIADADQAWAbgFAjIgBAIQgHAdgZAYIgLALQgdAZgeAXQgWASg4AnQggAYgbAMQgOAEgPACIgDAAIgGABQgLAAgLgFg");
	this.shape_42.setTransform(11.8,166.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006CA1").s().p("AAKELQgOgBgPgJIgHgFQgMgJgJgKIgNgNIgegcIhNhJQhIhBgigpIgLgNQgTgcAHgdIAAgBQAGgaAdgbIALgJQAdgZAuggQA6gpAdgZQAUgRAUgEQAHgCAIAAQAaAAAeAVIABAAQAUAMArAlIA8A2QBcBSAmAsIADADQAYAbgGAkIgCAJQgIAdgaAYIgMALQgdAZghAYQgSAOhAArQgiAZgdAJQgPAEgPAAIgDAAg");
	this.shape_43.setTransform(14.6,169.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006CA1").s().p("AANEQQgPgCgSgOQgQgMgMgPQgXgchnhZQhjhWgYggQgWgdAJgeQAHgZAfgcQAdgZA9gqQA/grAbgXQAcgXAeADQAbAEAeAZICDBsQBnBWAlAqQAaAbgIAlQgHAigfAcQgkAggpAdQgPALhIAvQgxAhgmAAIgKAAg");
	this.shape_44.setTransform(17.4,172.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#006CA1").s().p("AANENIgDAAQgOgCgPgLIgIgEQgLgKgJgKIgNgOIgfgdQgegdgwgsQhMhDgggmIgMgNQgUgcAIgdIAAgBQAGgaAegbIAMgKQAcgYAvghQA9gpAcgZQAUgRAVgEIAPgBQAaACAeAWIABABQATAMAtAmIA+A2QBeBSAnAsIACADQAZAbgHAkIgBAJQgJAdgaAYIgMALQgeAaghAXQgRAOhDAsQgjAZgdAIQgNADgMAAIgGAAg");
	this.shape_45.setTransform(15.6,170.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#006CA1").s().p("AAKEJQgOAAgOgIQgFgCgDgCQgLgJgJgKIgNgMIgfgdIhLhIQhGhBgjgqIgKgOQgUgbAHgdIAAAAQAGgbAdgaIALgKQAdgYAtggQA5gpAdgZQATgRAVgFQAHgCAHAAQAagBAeAUIABAAQAVALApAlIA8A2QBZBRAmAtIADAEQAYAbgGAjIgCAJQgHAdgaAYIgLALQgeAZggAXQgTAQg+AqQghAYgdAKQgPAEgPAAIgBABIgCgBg");
	this.shape_46.setTransform(13.9,168.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#006CA1").s().p("AgREBIgIgCQgLgJgJgJIgNgMQgPgMgPgPIhIhJQhBg9gkguIgLgOQgSgaAGgdIAAgBQAGgbAbgaIALgJQAdgZAqgfQA2gnAfgbQASgQAUgHIAOgDQAagDAdARIABAAQAXAKAnAkIA4A2QBUBQAnAuIACAEQAXAbgFAiIgBAJQgHAdgZAYIgLALQgdAZgfAXQgWASg4AnQghAYgbALQgOAFgPABIgDABIgEAAQgMAAgMgGg");
	this.shape_47.setTransform(12.2,166.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#006CA1").s().p("AgQEDIgHgCIgVgQIgNgMQgPgLgPgPIhEhIQg7g7gngxIgKgOQgRgbAFgcIAAgBQAGgbAZgaIALgJQAdgaAogeQAygmAggbQATgQASgIQAHgDAHgBQAZgGAdAOIABABQAZAIAkAjIA2A2QBOBPAnAwIADAEQAWAagFAiIgBAIQgGAegYAYIgLAKQgdAZgdAXQgYAUg0AlQgfAXgaANQgNAFgPADIgDAAIgMABQgIAAgIgCg");
	this.shape_48.setTransform(10.4,164.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006CA1").s().p("AgPEDQgFAAgCgBIgVgPIgNgLQgQgLgNgOIhChIQg1g4gpg1IgKgOQgQgaAFgdIAAAAQAFgcAYgZIALgKQAdgZAmgeQAvgkAhgdQASgPASgJIANgFQAZgJAdALIAAABQAcAHAgAhQAYAbAbAcQBJBOAnAyIADADQAVAagEAiIgBAIQgFAegXAXIgLALQgcAYgcAWQgbAXguAiQgeAXgaAPQgLAGgQAEIgDAAQgKADgIAAIgJgBg");
	this.shape_49.setTransform(8.7,162.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006CA1").s().p("AgVEEIgVgPIgNgJQgRgMgMgNIg+hIQgvg1gsg5IgJgOQgPgZAEgdIAAAAQAFgdAXgYIAKgKQAdgaAjgcQAsgjAjgeQARgPARgLIAMgGQAZgLAdAJIAAAAQAeAGAeAgIAwA3QBEBNAmAzIADAEQAUAbgCAfIgBAJQgFAdgWAYIgLAKIg2AuQgeAZgoAgQgdAXgZAQQgKAGgQAFIgDABQgQAFgLAAIgGABIgBAAg");
	this.shape_50.setTransform(6.9,160.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#006CA1").s().p("AgoD4IgOgJQgSgMgKgMIg7hIQgqgygtg9QgGgHgDgHQgPgYAEgdQAEgeAWgXIAJgKIA/g2IBMhBQARgOAQgMIAMgHQAZgNAcAFQAgAFAbAfIAtA3QA/BMAnA1IACAEQATAagBAfIgBAIQgEAegWAXIgKALIg1AtQgfAcgkAcIgzApQgKAGgQAHIgDABQgQAGgJACIgIACIgUgNg");
	this.shape_51.setTransform(5.2,158.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).to({state:[{t:this.shape_39}]},20).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_39}]},1).wait(27));

	// Слой 5
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#172122").s().p("AhEFtQgwgMhVhuQhDhUhEhzQgyhUAmg3QATgeCIhoQCEhoAMgIQBLgvApAoQA0AwBNBkQBWBuBCBsQAtBGhJBBQgpAihQAzQg3AvhHAoQhMAqguAAQgKAAgJgCg");
	this.shape_52.setTransform(145.4,81.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#172122").s().p("Ag2FnQg8gFhMhdQg/hIhAh2QgxhWAXhGQAKgrB3hcQBvhYApgTQBbgzAjAfQA7AhBEBaQBMBkA/BuQAuBRgzBMQgcArhRAyQg2AqhLAmQhQAsgyAAIgLgBg");
	this.shape_53.setTransform(146.3,83.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#172122").s().p("Ai0EYQg6g8g9h4QgwhbAJhTQABg4BmhQQBahIBGgfQBqg2AeAWQBCATA6BPQBCBaA8BwQAwBcgeBYQgOA0hTAwQg0AmhPAjQhTAsg7ABIgGAAQhEAAhBhJg");
	this.shape_54.setTransform(147.2,85.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#172122").s().p("AiqEqQg0gwg8h7QgthdgHhiQgHhFBUhEQBFg4BkgqQB6g6AYAMQBIAFAwBFQA5BQA4BxQAzBogIBkQgBA9hVAvQgyAghUAhQhMAohCAHIgXACQhEAAgzgyg");
	this.shape_55.setTransform(148.1,87.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#172122").s().p("AijE9Qgwglg4h9QgthggUhxQgRhRBDg4QAwgoCBg2QCJg+ATAEQBQgKAmA6QAvBHA1ByQA0B0AOBvQAMBGhWAtQgxAchXAeQhHAkhIAOQgdAFgZAAQg4AAgjgcg");
	this.shape_56.setTransform(149.3,90);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#172122").s().p("AidFRQgrgYg1iAQgrhjgkh/QgahfAygrQAbgZCfhBICmhHQBWgZAdAxQAlA8AyB0QA2CAAkB6QAZBPhYAsQgwAWhbAdQhAAghPAUQg2ANgmAAQgjAAgVgMg");
	this.shape_57.setTransform(150.6,91.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#172122").s().p("AihFFQguggg3h+Qgshigah2QgVhWA9gzQAogjCMg6QCQg/ARAAQBRgQAjA3QArBDA0BzQA1B5AWByQARBKhXAtQgwAZhZAeQhEAjhLAQQgkAHgeAAQgxAAgfgVg");
	this.shape_58.setTransform(149.8,90.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#172122").s().p("AikE4Qgxgog5h8QgthfgRhtQgPhPBIg7QA1gsB6gzQCFg9AUAGQBOgGApA9QAxBJA2ByQA0BxAIBsQAJBDhWAvQgxAchXAfQhIAlhGAMQgYAEgVAAQg8AAgnghg");
	this.shape_59.setTransform(149,89.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#172122").s().p("AipEtQg0gvg7h7QgthegIhkQgJhGBShCQBCg2BogsQB8g7AXAMQBJACAvBEQA4BPA4BxQAyBqgFBlQABA+hVAvQgzAfhTAhQhMAohDAIQgNABgNAAQhDAAgxgug");
	this.shape_60.setTransform(148.2,88.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#172122").s().p("AivEhQg3g2g8h6QgvhbABhbQgDg/BdhJQBPhABWglQByg4AbARQBFAMA1BKQA9BVA6BwQAxBigSBeQgIA5hUAvQgzAjhRAiQhQAqg+AEIgOABQhFAAg6g9g");
	this.shape_61.setTransform(147.6,86.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#172122").s().p("Ai2EWQg6g+g+h4QgvhaAKhRQACg3BohRQBdhKBDgdQBog3AeAXQBBAVA7BRQBEBbA8BwQAwBaggBXQgQAzhTAwQg0AmhPAkQhUAtg6AAIgCAAQhEAAhFhMg");
	this.shape_62.setTransform(147.1,85.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#172122").s().p("AgzFlQg/gDhKhYQg9hFhAh2QgwhYAThJQAIguBzhZQBphUAxgWQBeg0AiAcQA9AeBBBXQBJBiA/BvQAvBTguBPQgYAuhTAxQg0AphNAlQhQAsg0AAIgJgBg");
	this.shape_63.setTransform(146.5,84.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#172122").s().p("Ag8FpQg3gIhQhjQhAhNhBh0QgyhVAdhBQAOgmB9hhQB3hdAegPQBVgyAlAiQA4AoBIBdQBPBoBABtQAuBNg7BIQghAnhRAzQg2AshKAnQhOAqgwAAIgPgBg");
	this.shape_64.setTransform(146,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_52}]},35).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_52}]},1).wait(12));

	// Слой 6
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#172122").s().p("AhKFsQgwgNhUhvQhAhWhCh0QgwhUAmg3QAUgdCJhmQCGhmAMgIQBMgtAoAoQA0AyBKBkQBVBwBABtQAsBHhLA/QgpAihRAxQg3AvhJAnQhLAogtAAQgLAAgKgDg");
	this.shape_65.setTransform(88,93);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#172122").s().p("Ag1FmQg7gDhMhdQg9hJhBh2QgxhWAVhEQAJgqB3hbQBwhXAogWQBag0AjAeQA6AiBCBZQBMBlA/BuQAwBRgyBKQgaArhSAxQg1ArhMAmQhRAsgxAAIgKgBg");
	this.shape_66.setTransform(91.1,97.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#172122").s().p("AirEcQg4g8hCh3QgxhZAEhSQgCg2BlhQQBahIBEgkQBog7AeAVQBAARA6BOQBEBaA+BvQA0BbgaBVQgMAzhSAyQgzAnhPAmQhSAtg6ADIgLABQhAAAg/hFg");
	this.shape_67.setTransform(94.3,101.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#172122").s().p("AiaExQg1gvhBh4QgyhbgNhgQgNhCBThGQBEg4BggzQB2hCAZAMQBGABAyBDQA7BPA9BvQA5BlgCBhQADA7hTAzQgxAjhSAlQhLAqhAALQgSAEgRAAQg7AAgvgsg");
	this.shape_68.setTransform(97.5,105.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#172122").s().p("AiNFHQgwgihCh5QgyhdgehuQgYhPBBg7QAugpB8hBQCEhJAUADQBMgQAqA4QAzBEA8BvQA9BxAWBrQARBEhTAzQgvAfhVAkQhEAohIATQgkAKgfAAQgtAAgfgWg");
	this.shape_69.setTransform(101,109.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#172122").s().p("AiAFeQgtgVhBh6Qgzhfgvh8QgihcAugwQAZgaCXhPQCUhQANgGQBSggAiAtQArA5A6BvQBCB8AuB1QAgBNhTAzQguAchYAjQg9AmhOAbQhAAWgqAAQgYAAgQgHg");
	this.shape_70.setTransform(104.6,113.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#172122").s().p("AiIFPQgwgchBh6QgyheglhzQgbhUA5g2QAngkCGhGQCJhMASAAQBOgWAnA0QAwBAA7BvQA/B1AfBuQAXBIhTAzQgvAehWAkQhCAnhKAWQgsAOgjAAQgnAAgZgRg");
	this.shape_71.setTransform(102.4,110.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#172122").s().p("AiQFBQgyglhCh5QgyhdgZhqQgVhMBFg+QA0gtB1g9QCAhHAVAFQBLgMAsA7QA1BHA8BvQA8BuAQBoQAOBChTAzQgwAghUAlQhGAohFARQgfAJgbAAQgyAAgjgcg");
	this.shape_72.setTransform(100.2,108.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#172122").s().p("AiYEzQg1gthBh4QgyhbgPhiQgOhEBRhEQBBg3Bjg0QB4hDAYALQBHgCAxBCQA6BOA9BvQA5BmABBiQAFA9hSAyQgyAjhSAlQhKAqhBAMQgUAEgSAAQg6AAgtgpg");
	this.shape_73.setTransform(97.9,105.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#172122").s().p("AiiEmQg2g1hCh3QgyhagEhZQgHg9BchLQBPg/BSgsQBvg+AbAQQBDAJA2BJQBABUA9BvQA3BggOBbQgFA3hSAzQgyAlhRAlQhOAsg+AHQgLABgKAAQg/AAg3g4g");
	this.shape_74.setTransform(95.8,103.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#172122").s().p("AitEZQg5g+hCh2QgxhZAGhQQAAg1BnhRQBdhKBBgiQBmg6AeAWQA/ATA8BQQBEBbA+BuQA0BagdBUQgNAyhSAyQg0AnhPAmQhSAug6ACIgIAAQhBAAhAhIg");
	this.shape_75.setTransform(93.9,100.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#172122").s().p("AgwFlQg+gBhKhYQg7hGhCh2QgxhXARhIQAGgtBzhYQBqhTAwgaQBdg1AiAcQA7AdBABXQBKBiA/BuQAxBTgsBNQgXAthSAyQg0AphNAnQhSAsg0AAIgGAAg");
	this.shape_76.setTransform(91.9,98.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#172122").s().p("Ag9FoQg3gHhPhjQg+hOhCh1QgwhWAbg/QAOglB+hfQB4hdAdgQQBVgyAlAiQA3AoBGBdQBPBpA/BtQAvBOg8BGQgfAnhSAyQg2AshLAmQhOAqgvAAIgPgBg");
	this.shape_77.setTransform(90,95.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.shape_65}]},30).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_65}]},1).wait(17));

	// Слой 7
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#172122").s().p("Ag1FvQgwgKhahpQhGhShJhwQg2hRAjg5QATgfCDhuQB/htAMgJQBJgyAqAlQA2AvBRBgQBbBqBHBpQAwBEhHBEQgmAlhPA1Qg0AyhGArQhOAwgtAAQgIAAgIgCg");
	this.shape_78.setTransform(40.5,116.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#172122").s().p("AghFoQg6AAhRhYQhBhEhKhyQg1hUARhFQAHgqBxhiQBqheAngYQBXg5AlAcQA7AeBIBVQBSBgBFBqQA1BOguBNQgXAthPA2QgyAuhKAqQhSAzg0AAIgEAAg");
	this.shape_79.setTransform(42.8,121.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#172122").s().p("AiaElQg8g4hJhzQg2hWgBhSQgFg2BhhXQBVhMBCgoQBkhBAfATQBBANA/BLQBJBWBEBqQA6BYgVBXQgJA0hPA2QgxArhMApQhPAyg7AHIgRABQg8AAhAg9g");
	this.shape_80.setTransform(45.2,126.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#172122").s().p("AiJE4Qg4grhIh0Qg3hYgThfQgQhCBPhKQBBg9Bdg4QBzhIAYALQBGgEA2BAQBABMBDBqQA/BkADBfQAHA8hQA3QgvAmhQApQhJAvhAAPQgVAGgVAAQg2AAgugng");
	this.shape_81.setTransform(47.7,131.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#172122").s().p("Ah7FOQgzgfhIh1Qg4hagkhsQgchOA9g/QAsgrB4hIQCBhQASACQBMgVAtA2QA3BBBCBrQBDBuAcBpQAWBDhQA3QgtAjhUAoQhCAshGAXQgpAPgiAAQgnAAgdgTg");
	this.shape_82.setTransform(50.6,136.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#172122").s().p("AhsFkQgvgShIh2Qg3hcg3h7QgnhYAsgzQAXgbCThYQCOhXAOgHQBQgmAkAsQAuA3BABrQBJB4A0ByQAlBLhQA4QgsAfhWAnQg8AqhMAfQhFAcgrAAQgTAAgNgFg");
	this.shape_83.setTransform(53.3,141.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#172122").s().p("Ah2FWQgxgZhIh2Qg3hagshyQgghSA3g6QAkgmCChNQCGhTAQgBQBOgcApAyQA0A+BBBrQBGByAlBsQAbBGhQA4QgtAhhUAoQhAArhIAaQgyASgmAAQggAAgYgNg");
	this.shape_84.setTransform(51.6,138.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#172122").s().p("Ah/FIQg0ghhIh1Qg3hagghpQgZhLBBhBQAxgwByhEQB9hOAUAEQBKgQAvA4QA6BEBCBrQBCBrAWBmQASBChQA3QguAjhSApQhEAthFAVQgjALgfAAQgrAAgigXg");
	this.shape_85.setTransform(49.9,135.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#172122").s().p("AiHE7Qg3gqhJh0Qg2hYgVhhQgShEBMhIQA+g7Bhg6QB1hJAXAKQBHgGA1A/QA/BKBCBrQBABkAGBhQAJA8hQA3QgvAmhQApQhIAvhBAQQgXAGgXAAQg1AAgrgjg");
	this.shape_86.setTransform(48.1,132.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#172122").s().p("AiREvQg6gyhJhzQg2hXgKhZQgKg8BXhQQBLhFBQgwQBshEAbAPQBDAEA7BGQBEBRBEBqQA8BdgJBcQgBA4hPA2QgwAphOApQhMAxg9AKQgPADgOAAQg6AAg3gxg");
	this.shape_87.setTransform(46.4,129);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#172122").s().p("AicEiQg9g5hJhzQg2hVABhRQgDg1BjhXQBYhPA+gmQBjhAAgAUQBAAPBABMQBKBYBEBqQA5BWgYBWQgKAzhPA3QgxAqhNAqQhQAzg5AFIgPABQg9AAhBhBg");
	this.shape_88.setTransform(44.9,125.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#172122").s().p("AioEWQhAhChJhyQg2hUANhIQAEguBthfQBlhZAugcQBag8AjAaQA9AaBGBTQBQBdBFBqQA2BQgoBQQgTAuhQA3QgyAthKAqQhUA0g2AAIgEABQg8AAhMhRg");
	this.shape_89.setTransform(43.4,122.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#172122").s().p("AgoFrQg3gEhUheQhDhKhJhxQg2hSAYhBQALgmB4hnQByhjAdgTQBSg2AnAfQA5AlBLBZQBWBkBFBpQAzBKg3BKQgcAqhPA1QgzAwhJArQhQAxgxAAIgJAAg");
	this.shape_90.setTransform(41.9,119.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78}]}).to({state:[{t:this.shape_78}]},25).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_78}]},1).wait(22));

	// Слой 8
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#172122").s().p("Ag1FvQgwgKhahpQhGhShJhwQg2hRAjg5QATgfCDhuQB/htAMgJQBJgyAqAlQA2AvBRBgQBbBqBHBpQAwBEhHBEQgmAlhPA1Qg0AyhGArQhOAwgtAAQgIAAgIgCg");
	this.shape_91.setTransform(4.5,155.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#172122").s().p("Ag7FuQgwgLhYhrQhEhShIhyQg0hSAkg4QATgfCFhrQCBhrAMgIQBKgxAqAmQA1AwBPBhQBZBsBFBpQAvBFhIBDQgnAkhQA0Qg1AxhHAqQhNAtgtAAQgJAAgIgCg");
	this.shape_92.setTransform(5.7,158.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#172122").s().p("AhBFtQgwgMhWhsQhDhUhFhzQgzhTAlg3QAUgeCHhqQCDhoAMgIQBLgvApAmQA0AxBNBiQBXBuBDBrQAtBGhJBBQgnAjhRAzQg1AwhIAoQhMArguAAQgKAAgIgCg");
	this.shape_93.setTransform(6.9,161.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#172122").s().p("AhIFsQgwgMhUhvQhBhVhDh0QgxhUAmg2QAUgeCJhnQCEhmANgIQBLguApAnQAzAyBMBkQBVBvBABtQAtBGhLBAQgoAjhRAxQg3AvhJAnQhKApgtAAQgLAAgKgDg");
	this.shape_94.setTransform(8.1,164.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#172122").s().p("AhOFrQgwgNhShwQg/hXhBh1QgwhUAng3QAVgdCKhkQCHhkAMgIQBNgsAoAoQAyAzBKBlQBTBwA+BuQArBHhLA/QgpAihSAwQg3AthKAmQhKAngtAAQgMAAgKgDg");
	this.shape_95.setTransform(9.3,167.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#172122").s().p("AhVFqQgvgOhQhyQg+hXg/h3QguhVAog2QAWgdCMhiQCIhhANgHQBNgrAnAoQAyA0BIBnQBRByA8BvQAqBIhNA9QgpAhhTAvQg4AshLAlQhJAkgsAAQgOAAgLgDg");
	this.shape_96.setTransform(10.5,170.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#172122").s().p("AhRFqQgvgNhShxQg+hWhAh2QgvhVAng2QAVgdCLhkQCHhiANgIQBNgsAnAoQAyA0BJBlQBTBxA9BuQArBIhMA+QgpAihTAvQg3AthKAmQhKAmgsAAQgNAAgLgEg");
	this.shape_97.setTransform(9.8,169);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#172122").s().p("AhMFrQgwgNhThvQg/hWhCh1QgwhVAng2QAVgdCKhlQCGhkAMgIQBNgtAnAoQAzAyBKBlQBUBwA/BuQArBHhLA+QgoAjhTAwQg3AuhJAmQhKAngtAAQgMAAgKgDg");
	this.shape_98.setTransform(9,167);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#172122").s().p("AhIFsQgwgNhUhuQhBhVhCh1QgxhUAmg2QAUgeCJhmQCFhmAMgIQBMguAoAoQAzAyBMBkQBVBvBABsQAsBHhLA/QgnAjhSAxQg3AvhJAnQhLAogtAAQgLAAgJgCg");
	this.shape_99.setTransform(8.2,165);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#172122").s().p("AhEFsQgwgMhVhtQhChVhEhzQgyhTAmg3QAUgeCHhoQCEhoAMgIQBLguApAnQA0AxBMBjQBWBuBCBsQAtBGhKBBQgnAjhSAyQg2AvhIAoQhLAqgtAAQgLAAgJgDg");
	this.shape_100.setTransform(7.5,163.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#172122").s().p("AhBFtQgvgLhXhtQhChThGhzQgzhTAlg3QAUgfCGhpQCDhpAMgIQBLgvApAmQA0AxBOBiQBXBtBDBrQAuBGhJBBQgoAkhQAzQg2AwhIAoQhMArgtAAQgKAAgJgCg");
	this.shape_101.setTransform(6.7,161.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#172122").s().p("Ag9FuQgwgLhXhsQhEhThHhyQgzhSAkg4QATgeCFhrQCChqAMgJQBKgwAqAmQA1AwBOBhQBZBtBEBqQAuBFhIBCQgnAkhQA0Qg1AxhHApQhNAtgtAAQgKAAgIgCg");
	this.shape_102.setTransform(6,159.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#172122").s().p("Ag5FuQgwgKhZhrQhEhShIhxQg1hSAkg4QASgfCFhsQCAhsAMgIQBJgyAqAmQA2AvBQBhQBaBrBFBqQAvBEhHBDQgnAlhPA0Qg1AyhHAqQhNAugtAAQgJAAgIgCg");
	this.shape_103.setTransform(5.2,157.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91}]}).to({state:[{t:this.shape_91}]},20).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_91}]},1).wait(27));

	// Слой 2
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#006CA1").s().p("AhZC6QgfgLgigxQgigwgEgkQAGgKAKgYQAJgTALgKQBIhEBkhUQAZgVAjADQAhAEAXAZQAXAcAWAiQAUAegEAkQgFAjgaAYQhVBLhTBHQgZAVgcAAQgPAAgPgGg");
	this.shape_104.setTransform(138.6,79.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#006CA1").s().p("Ag1DxQgTgLgJgLQgwg8hbh8QgXgfAEgkQAEgkAdgaQBThKBUhIQAdgYAiADQAjAEAXAeQBWBvA1BJQAXAggEAkQgEAlgeAbQheBThHA7QgJAIgSAIIghAPIgigVg");
	this.shape_105.setTransform(3.4,156.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#006CA1").s().p("AgHESQgjgEgcgkQhmiFg1hJQgHgKgIgTIgPglIAUglQAMgWALgLQAmgjB8hqQAggcAiAEQAjAEAaAiICaDLQAdAlgFAnQgEAmgkAgIiZCFQggAbgeAAIgHAAg");
	this.shape_106.setTransform(88,97.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#006CA1").s().p("AAVE7QgigEgbgjIjWkbQgIgMgJgTIgOghQAIg0AigdICbiHQAlgfAjAEQAiAEAeAnIChDVIA5BLQAYAigEAkQgEAkgeAbQhQBIhSBFQgdAZgfAAIgJgBg");
	this.shape_107.setTransform(43.4,124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]}).to({state:[]},20).wait(40));

	// Слой 72
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#006CA1").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_108.setTransform(-231.4,-113.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(1).to({x:-239.9,y:-115.1},0).wait(1).to({x:-247.6,y:-116.7},0).wait(1).to({x:-254.3,y:-118.1},0).wait(1).to({x:-260.1,y:-119.3},0).wait(1).to({x:-265.1,y:-120.4},0).wait(1).to({x:-269.1,y:-121.2},0).wait(1).to({x:-272.3,y:-121.9},0).wait(1).to({x:-274.5,y:-122.3},0).wait(1).to({x:-275.9,y:-122.6},0).wait(1).to({x:-276.3,y:-122.7},0).wait(5).to({x:-228.7,y:-82.1},0).wait(1).to({x:-229.2,y:-88.1},0).wait(1).to({x:-229.7,y:-93.4},0).wait(1).to({x:-230.1,y:-98},0).wait(1).to({x:-230.4,y:-102.1},0).wait(1).to({x:-230.7,y:-105.5},0).wait(1).to({x:-231,y:-108.3},0).wait(1).to({x:-231.1,y:-110.5},0).wait(1).to({x:-231.3,y:-112.1},0).wait(1).to({y:-113},0).wait(1).to({x:-231.4,y:-113.3},0).wait(6).to({x:-239.9,y:-115.1},0).wait(1).to({x:-247.6,y:-116.7},0).wait(1).to({x:-254.3,y:-118.1},0).wait(1).to({x:-260.1,y:-119.3},0).wait(1).to({x:-265.1,y:-120.4},0).wait(1).to({x:-269.1,y:-121.2},0).wait(1).to({x:-272.3,y:-121.9},0).wait(1).to({x:-274.5,y:-122.3},0).wait(1).to({x:-275.9,y:-122.6},0).wait(1).to({x:-276.3,y:-122.7},0).wait(5).to({x:-228.7,y:-82.1},0).wait(1).to({x:-229.2,y:-88.1},0).wait(1).to({x:-229.7,y:-93.4},0).wait(1).to({x:-230.1,y:-98},0).wait(1).to({x:-230.4,y:-102.1},0).wait(1).to({x:-230.7,y:-105.5},0).wait(1).to({x:-231,y:-108.3},0).wait(1).to({x:-231.1,y:-110.5},0).wait(1).to({x:-231.3,y:-112.1},0).wait(1).to({y:-113},0).wait(1).to({x:-231.4,y:-113.3},0).wait(5));

	// Слой 74
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#006CA1").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_109.setTransform(-260.4,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_109).wait(1).to({x:-271.9,y:-91.8},0).wait(1).to({x:-282.2,y:-93.2},0).wait(1).to({x:-291.3,y:-94.4},0).wait(1).to({x:-299.2,y:-95.5},0).wait(1).to({x:-305.9,y:-96.4},0).wait(1).to({x:-311.3,y:-97.2},0).wait(1).to({x:-315.6,y:-97.8},0).wait(1).to({x:-318.6,y:-98.2},0).wait(1).to({x:-320.4,y:-98.4},0).wait(1).to({x:-321,y:-98.5},0).wait(5).to({x:-228.7,y:-82.1},0).wait(1).to({x:-234.7,y:-83.7},0).wait(1).to({x:-240.1,y:-85},0).wait(1).to({x:-244.9,y:-86.2},0).wait(1).to({x:-249,y:-87.3},0).wait(1).to({x:-252.5,y:-88.2},0).wait(1).to({x:-255.4,y:-88.9},0).wait(1).to({x:-257.6,y:-89.5},0).wait(1).to({x:-259.2,y:-89.9},0).wait(1).to({x:-260.1,y:-90.1},0).wait(1).to({x:-260.4,y:-90.2},0).wait(6).to({x:-271.9,y:-91.8},0).wait(1).to({x:-282.2,y:-93.2},0).wait(1).to({x:-291.3,y:-94.4},0).wait(1).to({x:-299.2,y:-95.5},0).wait(1).to({x:-305.9,y:-96.4},0).wait(1).to({x:-311.3,y:-97.2},0).wait(1).to({x:-315.6,y:-97.8},0).wait(1).to({x:-318.6,y:-98.2},0).wait(1).to({x:-320.4,y:-98.4},0).wait(1).to({x:-321,y:-98.5},0).wait(5).to({x:-228.7,y:-82.1},0).wait(1).to({x:-234.7,y:-83.7},0).wait(1).to({x:-240.1,y:-85},0).wait(1).to({x:-244.9,y:-86.2},0).wait(1).to({x:-249,y:-87.3},0).wait(1).to({x:-252.5,y:-88.2},0).wait(1).to({x:-255.4,y:-88.9},0).wait(1).to({x:-257.6,y:-89.5},0).wait(1).to({x:-259.2,y:-89.9},0).wait(1).to({x:-260.1,y:-90.1},0).wait(1).to({x:-260.4,y:-90.2},0).wait(5));

	// Слой 69
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#006CA1").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_110.setTransform(-286.8,-37.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(1).to({x:-292.3,y:-31.3},0).wait(1).to({x:-297.3,y:-26},0).wait(1).to({x:-301.7,y:-21.3},0).wait(1).to({x:-305.5,y:-17.2},0).wait(1).to({x:-308.7,y:-13.8},0).wait(1).to({x:-311.3,y:-10.9},0).wait(1).to({x:-313.4,y:-8.7},0).wait(1).to({x:-314.9,y:-7.2},0).wait(1).to({x:-315.7,y:-6.2},0).wait(1).to({x:-316,y:-5.9},0).wait(5).to({x:-254.7,y:-31.3},0).wait(1).to({x:-260.8,y:-32.5},0).wait(1).to({x:-266.2,y:-33.5},0).wait(1).to({x:-271,y:-34.4},0).wait(1).to({x:-275.2,y:-35.1},0).wait(1).to({x:-278.7,y:-35.8},0).wait(1).to({x:-281.6,y:-36.3},0).wait(1).to({x:-283.9,y:-36.7},0).wait(1).to({x:-285.5,y:-37},0).wait(1).to({x:-286.5,y:-37.2},0).wait(1).to({x:-286.8,y:-37.3},0).wait(6).to({x:-292.3,y:-31.3},0).wait(1).to({x:-297.3,y:-26},0).wait(1).to({x:-301.7,y:-21.3},0).wait(1).to({x:-305.5,y:-17.2},0).wait(1).to({x:-308.7,y:-13.8},0).wait(1).to({x:-311.3,y:-10.9},0).wait(1).to({x:-313.4,y:-8.7},0).wait(1).to({x:-314.9,y:-7.2},0).wait(1).to({x:-315.7,y:-6.2},0).wait(1).to({x:-316,y:-5.9},0).wait(5).to({x:-254.7,y:-31.3},0).wait(1).to({x:-260.8,y:-32.5},0).wait(1).to({x:-266.2,y:-33.5},0).wait(1).to({x:-271,y:-34.4},0).wait(1).to({x:-275.2,y:-35.1},0).wait(1).to({x:-278.7,y:-35.8},0).wait(1).to({x:-281.6,y:-36.3},0).wait(1).to({x:-283.9,y:-36.7},0).wait(1).to({x:-285.5,y:-37},0).wait(1).to({x:-286.5,y:-37.2},0).wait(1).to({x:-286.8,y:-37.3},0).wait(5));

	// Слой 67
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#006CA1").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_111.setTransform(-315.8,-5.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#006CA1").s().p("AiACBIAAkBIEBAAIAAEBg");
	this.shape_112.setTransform(-325.7,-3.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#006CA1").s().p("AiBCAIAAj/IECAAIAAD/g");
	this.shape_113.setTransform(-334.6,-1.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#006CA1").s().p("AiBCAIAAkAIEDAAIAAEAg");
	this.shape_114.setTransform(-342.4,-0.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#006CA1").s().p("AiACAIAAkAIEBAAIAAEAg");
	this.shape_115.setTransform(-349.2,1.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#006CA1").s().p("AiACAIAAj/IECAAIAAD/g");
	this.shape_116.setTransform(-363.3,3.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#006CA1").s().p("AiBCAIAAj/IEDAAIAAD/g");
	this.shape_117.setTransform(-365.9,4.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#006CA1").s().p("AiBCBIAAkBIECAAIAAEBg");
	this.shape_118.setTransform(-367.5,4.8);
	this.shape_118._off = true;

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#006CA1").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_119.setTransform(-307,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111}]}).to({state:[{t:this.shape_112,p:{x:-325.7,y:-3.6}}]},1).to({state:[{t:this.shape_113,p:{x:-334.6,y:-1.8}}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_112,p:{x:-355,y:2.3}}]},1).to({state:[{t:this.shape_113,p:{x:-359.7,y:3.2}}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},5).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_119,p:{x:-307}}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_119,p:{x:-315.4}}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},5).to({state:[{t:this.shape_112,p:{x:-325.7,y:-3.6}}]},1).to({state:[{t:this.shape_113,p:{x:-334.6,y:-1.8}}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_112,p:{x:-355,y:2.3}}]},1).to({state:[{t:this.shape_113,p:{x:-359.7,y:3.2}}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_111}]},5).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_119,p:{x:-307}}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_119,p:{x:-315.4}}]},1).to({state:[{t:this.shape_111}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_111).to({_off:true},1).wait(9).to({_off:false,x:-368,y:4.9},0).wait(5).to({x:-280.6,y:-5.6},0).to({_off:true},1).wait(3).to({_off:false,x:-303.1},0).to({_off:true},1).wait(3).to({_off:false,x:-314.4},0).to({_off:true},1).wait(1).to({_off:false,x:-315.8},0).wait(5).to({_off:true},1).wait(9).to({_off:false,x:-368,y:4.9},0).wait(5).to({x:-280.6,y:-5.6},0).to({_off:true},1).wait(3).to({_off:false,x:-303.1},0).to({_off:true},1).wait(3).to({_off:false,x:-314.4},0).to({_off:true},1).wait(1).to({_off:false,x:-315.8},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(9).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,x:-287.3,y:-5.6},0).wait(1).to({x:-293.3},0).wait(1).to({x:-298.6},0).to({_off:true},1).wait(2).to({_off:false,x:-310.2},0).wait(1).to({x:-312.6},0).to({_off:true},1).wait(16).to({_off:false,x:-367.5,y:4.8},0).to({_off:true},1).wait(6).to({_off:false,x:-287.3,y:-5.6},0).wait(1).to({x:-293.3},0).wait(1).to({x:-298.6},0).to({_off:true},1).wait(2).to({_off:false,x:-310.2},0).wait(1).to({x:-312.6},0).to({_off:true},1).wait(7));

	// Слой 65
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#006CA1").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_120.setTransform(-379.3,36.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#006CA1").s().p("AiBCBIAAkBIEEAAIAAEBg");
	this.shape_121.setTransform(-387.3,26.6);
	this.shape_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_120).to({_off:true},1).wait(2).to({_off:false,x:-400.6,y:9.2},0).to({_off:true},1).wait(2).to({_off:false,x:-414.4,y:-8.7},0).wait(1).to({x:-417.4,y:-12.5},0).to({_off:true},1).wait(1).to({_off:false,x:-420.7,y:-16.9},0).wait(1).to({x:-421.1,y:-17.4},0).wait(5).to({x:-281.1,y:-5.6},0).to({_off:true},1).wait(1).to({_off:false,x:-316.5,y:9.7},0).wait(1).to({x:-331.2,y:16.1},0).to({_off:true},1).wait(2).to({_off:false,x:-363.6,y:30.1},0).wait(1).to({x:-370.5,y:33.1},0).to({_off:true},1).wait(1).to({_off:false,x:-378.3,y:36.5},0).wait(1).to({x:-379.3,y:36.9},0).wait(5).to({_off:true},1).wait(2).to({_off:false,x:-400.6,y:9.2},0).to({_off:true},1).wait(2).to({_off:false,x:-414.4,y:-8.7},0).wait(1).to({x:-417.4,y:-12.5},0).to({_off:true},1).wait(1).to({_off:false,x:-420.7,y:-16.9},0).wait(1).to({x:-421.1,y:-17.4},0).wait(5).to({x:-281.1,y:-5.6},0).to({_off:true},1).wait(1).to({_off:false,x:-316.5,y:9.7},0).wait(1).to({x:-331.2,y:16.1},0).to({_off:true},1).wait(2).to({_off:false,x:-363.6,y:30.1},0).wait(1).to({x:-370.5,y:33.1},0).to({_off:true},1).wait(1).to({_off:false,x:-378.3,y:36.5},0).wait(1).to({x:-379.3,y:36.9},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(1).to({_off:false},0).wait(1).to({x:-394.4,y:17.4},0).to({_off:true},1).wait(1).to({_off:false,x:-406.1,y:2.1},0).wait(1).to({x:-410.7,y:-3.8},0).to({_off:true},1).wait(2).to({_off:false,x:-419.5,y:-15.3},0).to({_off:true},1).wait(7).to({_off:false,x:-299.8,y:2.5},0).to({_off:true},1).wait(2).to({_off:false,x:-344,y:21.6},0).wait(1).to({x:-354.8,y:26.3},0).to({_off:true},1).wait(2).to({_off:false,x:-375.4,y:35.2},0).to({_off:true},1).wait(7).to({_off:false,x:-387.3,y:26.6},0).wait(1).to({x:-394.4,y:17.4},0).to({_off:true},1).wait(1).to({_off:false,x:-406.1,y:2.1},0).wait(1).to({x:-410.7,y:-3.8},0).to({_off:true},1).wait(2).to({_off:false,x:-419.5,y:-15.3},0).to({_off:true},1).wait(7).to({_off:false,x:-299.8,y:2.5},0).to({_off:true},1).wait(2).to({_off:false,x:-344,y:21.6},0).wait(1).to({x:-354.8,y:26.3},0).to({_off:true},1).wait(2).to({_off:false,x:-375.4,y:35.2},0).to({_off:true},1).wait(6));

	// Слой 63
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#006CA1").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_122.setTransform(-321.3,-96.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(1).to({x:-333.6,y:-87.8},0).wait(1).to({x:-344.7,y:-80},0).wait(1).to({x:-354.4,y:-73},0).wait(1).to({x:-362.8,y:-66.9},0).wait(1).to({x:-370,y:-61.8},0).wait(1).to({x:-375.8,y:-57.7},0).wait(1).to({x:-380.4,y:-54.4},0).wait(1).to({x:-383.6,y:-52.1},0).wait(1).to({x:-385.6,y:-50.7},0).wait(1).to({x:-386.2,y:-50.2},0).wait(5).to({x:-276.3,y:-122.7},0).wait(1).to({x:-284.9,y:-117.8},0).wait(1).to({x:-292.5,y:-113.3},0).wait(1).to({x:-299.2,y:-109.4},0).wait(1).to({x:-305.1,y:-106.1},0).wait(1).to({x:-310,y:-103.2},0).wait(1).to({x:-314.1,y:-100.8},0).wait(1).to({x:-317.2,y:-99},0).wait(1).to({x:-319.5,y:-97.7},0).wait(1).to({x:-320.8,y:-96.9},0).wait(1).to({x:-321.3,y:-96.7},0).wait(6).to({x:-333.6,y:-87.8},0).wait(1).to({x:-344.7,y:-80},0).wait(1).to({x:-354.4,y:-73},0).wait(1).to({x:-362.8,y:-66.9},0).wait(1).to({x:-370,y:-61.8},0).wait(1).to({x:-375.8,y:-57.7},0).wait(1).to({x:-380.4,y:-54.4},0).wait(1).to({x:-383.6,y:-52.1},0).wait(1).to({x:-385.6,y:-50.7},0).wait(1).to({x:-386.2,y:-50.2},0).wait(5).to({x:-276.3,y:-122.7},0).wait(1).to({x:-284.9,y:-117.8},0).wait(1).to({x:-292.5,y:-113.3},0).wait(1).to({x:-299.2,y:-109.4},0).wait(1).to({x:-305.1,y:-106.1},0).wait(1).to({x:-310,y:-103.2},0).wait(1).to({x:-314.1,y:-100.8},0).wait(1).to({x:-317.2,y:-99},0).wait(1).to({x:-319.5,y:-97.7},0).wait(1).to({x:-320.8,y:-96.9},0).wait(1).to({x:-321.3,y:-96.7},0).wait(5));

	// Слой 61
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#006CA1").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_123.setTransform(-373.3,-116.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(1).to({x:-380.6,y:-123.4},0).wait(1).to({x:-387.2,y:-129.8},0).wait(1).to({x:-393,y:-135.5},0).wait(1).to({x:-398,y:-140.3},0).wait(1).to({x:-402.3,y:-144.5},0).wait(1).to({x:-405.7,y:-147.9},0).wait(1).to({x:-408.4,y:-150.5},0).wait(1).to({x:-410.4,y:-152.4},0).wait(1).to({x:-411.5,y:-153.5},0).wait(1).to({x:-411.9,y:-153.9},0).wait(5).to({x:-321,y:-98.5},0).wait(1).to({x:-331,y:-101.9},0).wait(1).to({x:-339.8,y:-104.9},0).wait(1).to({x:-347.7,y:-107.6},0).wait(1).to({x:-354.5,y:-109.9},0).wait(1).to({x:-360.2,y:-111.8},0).wait(1).to({x:-364.9,y:-113.4},0).wait(1).to({x:-368.6,y:-114.7},0).wait(1).to({x:-371.2,y:-115.6},0).wait(1).to({x:-372.8,y:-116.1},0).wait(1).to({x:-373.3,y:-116.3},0).wait(6).to({x:-380.6,y:-123.4},0).wait(1).to({x:-387.2,y:-129.8},0).wait(1).to({x:-393,y:-135.5},0).wait(1).to({x:-398,y:-140.3},0).wait(1).to({x:-402.3,y:-144.5},0).wait(1).to({x:-405.7,y:-147.9},0).wait(1).to({x:-408.4,y:-150.5},0).wait(1).to({x:-410.4,y:-152.4},0).wait(1).to({x:-411.5,y:-153.5},0).wait(1).to({x:-411.9,y:-153.9},0).wait(5).to({x:-321,y:-98.5},0).wait(1).to({x:-331,y:-101.9},0).wait(1).to({x:-339.8,y:-104.9},0).wait(1).to({x:-347.7,y:-107.6},0).wait(1).to({x:-354.5,y:-109.9},0).wait(1).to({x:-360.2,y:-111.8},0).wait(1).to({x:-364.9,y:-113.4},0).wait(1).to({x:-368.6,y:-114.7},0).wait(1).to({x:-371.2,y:-115.6},0).wait(1).to({x:-372.8,y:-116.1},0).wait(1).to({x:-373.3,y:-116.3},0).wait(5));

	// Слой 59
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#006CA1").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_124.setTransform(-343.2,-46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(1).to({x:-347.7,y:-36.7},0).wait(1).to({x:-351.8,y:-27.9},0).wait(1).to({x:-355.4,y:-20},0).wait(1).to({x:-358.6,y:-13.2},0).wait(1).to({x:-361.2,y:-7.5},0).wait(1).to({x:-363.4,y:-2.8},0).wait(1).to({x:-365.1,y:0.9},0).wait(1).to({x:-366.3,y:3.5},0).wait(1).to({x:-367,y:5.1},0).wait(1).to({x:-367.2,y:5.6},0).wait(5).to({x:-316,y:-5.9},0).wait(1).to({x:-321.2,y:-13.7},0).wait(1).to({x:-325.8,y:-20.6},0).wait(1).to({x:-329.9,y:-26.7},0).wait(1).to({x:-333.4,y:-32},0).wait(1).to({x:-336.4,y:-36.5},0).wait(1).to({x:-338.8,y:-40.2},0).wait(1).to({x:-340.7,y:-43},0).wait(1).to({x:-342.1,y:-45},0).wait(1).to({x:-342.9,y:-46.3},0).wait(1).to({x:-343.2,y:-46.7},0).wait(6).to({x:-347.7,y:-36.7},0).wait(1).to({x:-351.8,y:-27.9},0).wait(1).to({x:-355.4,y:-20},0).wait(1).to({x:-358.6,y:-13.2},0).wait(1).to({x:-361.2,y:-7.5},0).wait(1).to({x:-363.4,y:-2.8},0).wait(1).to({x:-365.1,y:0.9},0).wait(1).to({x:-366.3,y:3.5},0).wait(1).to({x:-367,y:5.1},0).wait(1).to({x:-367.2,y:5.6},0).wait(5).to({x:-316,y:-5.9},0).wait(1).to({x:-321.2,y:-13.7},0).wait(1).to({x:-325.8,y:-20.6},0).wait(1).to({x:-329.9,y:-26.7},0).wait(1).to({x:-333.4,y:-32},0).wait(1).to({x:-336.4,y:-36.5},0).wait(1).to({x:-338.8,y:-40.2},0).wait(1).to({x:-340.7,y:-43},0).wait(1).to({x:-342.1,y:-45},0).wait(1).to({x:-342.9,y:-46.3},0).wait(1).to({x:-343.2,y:-46.7},0).wait(5));

	// Слой 57
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#006CA1").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_125.setTransform(-386.8,-49.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#006CA1").s().p("AiACAIAAj/IEBAAIAAD/g");
	this.shape_126.setTransform(-395.6,-56.8);
	this.shape_126._off = true;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#006CA1").s().p("AiACAIAAj/IECAAIAAD/g");
	this.shape_127.setTransform(-403.4,-63.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#006CA1").s().p("AiBCBIAAkBIECAAIAAEBg");
	this.shape_128.setTransform(-410.3,-69.2);
	this.shape_128._off = true;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#006CA1").s().p("AiACBIAAkBIEBAAIAAEBg");
	this.shape_129.setTransform(-416.3,-74.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#006CA1").s().p("AiBCAIAAj/IECAAIAAD/g");
	this.shape_130.setTransform(-425.5,-81.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#006CA1").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_131.setTransform(-377.6,-22.8);
	this.shape_131._off = true;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#006CA1").s().p("AiACAIAAkAIECAAIAAEAg");
	this.shape_132.setTransform(-380.1,-29.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#006CA1").s().p("AiBCAIAAj/IEDAAIAAD/g");
	this.shape_133.setTransform(-383.8,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125}]}).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127,p:{x:-403.4,y:-63.4}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{x:-416.3,y:-74.2}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_127,p:{x:-428.7,y:-84.6}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{x:-432.4,y:-87.7}}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},5).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},5).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127,p:{x:-403.4,y:-63.4}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{x:-416.3,y:-74.2}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_127,p:{x:-428.7,y:-84.6}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{x:-432.4,y:-87.7}}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},5).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_125}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_125).to({_off:true},1).wait(9).to({_off:false,x:-432.8,y:-88.1},0).wait(5).to({x:-368,y:4.9},0).to({_off:true},1).wait(9).to({_off:false,x:-386.8,y:-49.5},0).wait(5).to({_off:true},1).wait(9).to({_off:false,x:-432.8,y:-88.1},0).wait(5).to({x:-368,y:4.9},0).to({_off:true},1).wait(9).to({_off:false,x:-386.8,y:-49.5},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false,x:-374.8,y:-14.7},0).to({_off:true},1).wait(4).to({_off:false,x:-385.1,y:-44.6},0).to({_off:true},1).wait(8).to({_off:false,x:-395.6,y:-56.8},0).to({_off:true},1).wait(15).to({_off:false,x:-374.8,y:-14.7},0).to({_off:true},1).wait(4).to({_off:false,x:-385.1,y:-44.6},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-421.3,y:-78.5},0).to({_off:true},1).wait(2).to({_off:false,x:-431,y:-86.6},0).to({_off:true},1).wait(7).to({_off:false,x:-371.6,y:-5.5},0).to({_off:true},1).wait(16).to({_off:false,x:-410.3,y:-69.2},0).to({_off:true},1).wait(1).to({_off:false,x:-421.3,y:-78.5},0).to({_off:true},1).wait(2).to({_off:false,x:-431,y:-86.6},0).to({_off:true},1).wait(7).to({_off:false,x:-371.6,y:-5.5},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(18).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:-382.1,y:-35.9},0).to({_off:true},1).wait(2).to({_off:false,x:-386.1,y:-47.3},0).wait(1).to({x:-386.6,y:-48.9},0).to({_off:true},1).wait(23).to({_off:false,x:-377.6,y:-22.8},0).to({_off:true},1).wait(1).to({_off:false,x:-382.1,y:-35.9},0).to({_off:true},1).wait(2).to({_off:false,x:-386.1,y:-47.3},0).wait(1).to({x:-386.6,y:-48.9},0).to({_off:true},1).wait(5));

	// Слой 55
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#006CA1").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_134.setTransform(-471.3,-12.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#006CA1").s().p("AiBCBIAAkBIEEAAIAAEBg");
	this.shape_135.setTransform(-475.5,-22.1);
	this.shape_135._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_134).to({_off:true},1).wait(4).to({_off:false,x:-487.8,y:-51.4},0).to({_off:true},1).wait(1).to({_off:false,x:-491.3,y:-59.7},0).to({_off:true},1).wait(1).to({_off:false,x:-493.1,y:-63.9},0).wait(1).to({x:-493.3,y:-64.4},0).wait(5).to({x:-421.1,y:-17.4},0).wait(1).to({x:-430.7,y:-16.4},0).wait(1).to({x:-439.2,y:-15.5},0).wait(1).to({x:-446.7,y:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-463.3,y:-13},0).wait(1).to({x:-466.8,y:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-471.3,y:-12.2},0).wait(5).to({_off:true},1).wait(4).to({_off:false,x:-487.8,y:-51.4},0).to({_off:true},1).wait(1).to({_off:false,x:-491.3,y:-59.7},0).to({_off:true},1).wait(1).to({_off:false,x:-493.1,y:-63.9},0).wait(1).to({x:-493.3,y:-64.4},0).wait(5).to({x:-421.1,y:-17.4},0).wait(1).to({x:-430.7,y:-16.4},0).wait(1).to({x:-439.2,y:-15.5},0).wait(1).to({x:-446.7,y:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-463.3,y:-13},0).wait(1).to({x:-466.8,y:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-471.3,y:-12.2},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_135).wait(1).to({_off:false},0).wait(1).to({x:-479.2,y:-31},0).wait(1).to({x:-482.5,y:-38.8},0).wait(1).to({x:-485.4,y:-45.6},0).to({_off:true},1).wait(1).to({_off:false,x:-489.8,y:-56.1},0).to({_off:true},1).wait(1).to({_off:false,x:-492.4,y:-62.3},0).to({_off:true},1).wait(10).to({_off:false,x:-453.2,y:-14.1},0).wait(1).to({x:-458.7,y:-13.5},0).to({_off:true},1).wait(2).to({_off:false,x:-469.3,y:-12.4},0).wait(1).to({x:-470.8,y:-12.2},0).to({_off:true},1).wait(6).to({_off:false,x:-475.5,y:-22.1},0).wait(1).to({x:-479.2,y:-31},0).wait(1).to({x:-482.5,y:-38.8},0).wait(1).to({x:-485.4,y:-45.6},0).to({_off:true},1).wait(1).to({_off:false,x:-489.8,y:-56.1},0).to({_off:true},1).wait(1).to({_off:false,x:-492.4,y:-62.3},0).to({_off:true},1).wait(10).to({_off:false,x:-453.2,y:-14.1},0).wait(1).to({x:-458.7,y:-13.5},0).to({_off:true},1).wait(2).to({_off:false,x:-469.3,y:-12.4},0).wait(1).to({x:-470.8,y:-12.2},0).to({_off:true},1).wait(5));

	// Слой 52
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#006CA1").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_136.setTransform(-432.2,-86.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,108,161,0.812)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_137.setTransform(-443.7,-82.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,108,161,0.639)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_138.setTransform(-454.1,-78.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,108,161,0.49)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_139.setTransform(-463.2,-75.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,108,161,0.361)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_140.setTransform(-471,-72.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,108,161,0.251)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_141.setTransform(-477.7,-69.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,108,161,0.161)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_142.setTransform(-483.2,-67.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,108,161,0.09)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_143.setTransform(-487.4,-65.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,108,161,0.039)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_144.setTransform(-490.4,-64.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,108,161,0.012)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_145.setTransform(-492.3,-64.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,108,161,0)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_146.setTransform(-492.9,-63.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136}]}).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_136}]},5).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},5).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_136}]},5).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_136).to({_off:true},1).wait(14).to({_off:false,x:-386.2,y:-50.2},0).wait(1).to({x:-395,y:-57.2},0).wait(1).to({x:-402.8,y:-63.4},0).wait(1).to({x:-409.7,y:-68.9},0).wait(1).to({x:-415.7,y:-73.6},0).wait(1).to({x:-420.7,y:-77.6},0).wait(1).to({x:-424.9,y:-80.9},0).wait(1).to({x:-428.1,y:-83.5},0).wait(1).to({x:-430.4,y:-85.3},0).wait(1).to({x:-431.8,y:-86.4},0).wait(1).to({x:-432.2,y:-86.8},0).wait(5).to({_off:true},1).wait(14).to({_off:false,x:-386.2,y:-50.2},0).wait(1).to({x:-395,y:-57.2},0).wait(1).to({x:-402.8,y:-63.4},0).wait(1).to({x:-409.7,y:-68.9},0).wait(1).to({x:-415.7,y:-73.6},0).wait(1).to({x:-420.7,y:-77.6},0).wait(1).to({x:-424.9,y:-80.9},0).wait(1).to({x:-428.1,y:-83.5},0).wait(1).to({x:-430.4,y:-85.3},0).wait(1).to({x:-431.8,y:-86.4},0).wait(1).to({x:-432.2,y:-86.8},0).wait(5));

	// Слой 50
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#006CA1").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_147.setTransform(-478.8,-152.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,108,161,0.812)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_148.setTransform(-482.4,-166.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,108,161,0.639)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_149.setTransform(-485.6,-179.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,108,161,0.49)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_150.setTransform(-488.4,-190.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,108,161,0.361)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_151.setTransform(-490.8,-199.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,108,161,0.251)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_152.setTransform(-492.9,-207.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,108,161,0.161)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_153.setTransform(-494.6,-214.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,108,161,0.09)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_154.setTransform(-495.9,-219.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,108,161,0.039)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_155.setTransform(-496.9,-223);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,108,161,0.012)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_156.setTransform(-497.4,-225.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,108,161,0)").s().p("AiBCCIAAkDIEDAAIAAEDg");
	this.shape_157.setTransform(-497.6,-225.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147}]}).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_147}]},5).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},5).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_147}]},5).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_147).to({_off:true},1).wait(14).to({_off:false,x:-411.9,y:-153.9},0).wait(1).to({x:-424.6,y:-153.7},0).wait(1).to({x:-436,y:-153.5},0).wait(1).to({x:-446,y:-153.3},0).wait(1).to({x:-454.7,y:-153.2},0).wait(1).to({x:-462.1,y:-153.1},0).wait(1).to({x:-468.1,y:-153},0).wait(1).to({x:-472.8,y:-152.9},0).wait(1).to({x:-476.1},0).wait(1).to({x:-478.1,y:-152.8},0).wait(1).to({x:-478.8},0).wait(5).to({_off:true},1).wait(14).to({_off:false,x:-411.9,y:-153.9},0).wait(1).to({x:-424.6,y:-153.7},0).wait(1).to({x:-436,y:-153.5},0).wait(1).to({x:-446,y:-153.3},0).wait(1).to({x:-454.7,y:-153.2},0).wait(1).to({x:-462.1,y:-153.1},0).wait(1).to({x:-468.1,y:-153},0).wait(1).to({x:-472.8,y:-152.9},0).wait(1).to({x:-476.1},0).wait(1).to({x:-478.1,y:-152.8},0).wait(1).to({x:-478.8},0).wait(5));

	// Слой 54
	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#006CA1").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_158.setTransform(-421.6,-16.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,108,161,0.812)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_159.setTransform(-430.7,-15.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,108,161,0.639)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_160.setTransform(-438.9,-14.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,108,161,0.49)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_161.setTransform(-446.1,-13.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,108,161,0.361)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_162.setTransform(-452.4,-13);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,108,161,0.251)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_163.setTransform(-457.6,-12.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,108,161,0.161)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_164.setTransform(-462,-12);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,108,161,0.09)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_165.setTransform(-465.3,-11.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,108,161,0.039)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_166.setTransform(-467.8,-11.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,108,161,0.012)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_167.setTransform(-469.2,-11.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,108,161,0)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_168.setTransform(-469.7,-11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158}]}).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_158}]},5).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},5).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_158}]},5).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_158}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_158).to({_off:true},1).wait(14).to({_off:false,x:-367.2,y:5.6},0).wait(1).to({x:-377.6,y:1.4},0).wait(1).to({x:-386.8,y:-2.3},0).wait(1).to({x:-394.9,y:-5.6},0).wait(1).to({x:-402,y:-8.5},0).wait(1).to({x:-408,y:-10.9},0).wait(1).to({x:-412.9,y:-12.9},0).wait(1).to({x:-416.7,y:-14.4},0).wait(1).to({x:-419.4,y:-15.5},0).wait(1).to({x:-421,y:-16.2},0).wait(1).to({x:-421.6,y:-16.4},0).wait(5).to({_off:true},1).wait(14).to({_off:false,x:-367.2,y:5.6},0).wait(1).to({x:-377.6,y:1.4},0).wait(1).to({x:-386.8,y:-2.3},0).wait(1).to({x:-394.9,y:-5.6},0).wait(1).to({x:-402,y:-8.5},0).wait(1).to({x:-408,y:-10.9},0).wait(1).to({x:-412.9,y:-12.9},0).wait(1).to({x:-416.7,y:-14.4},0).wait(1).to({x:-419.4,y:-15.5},0).wait(1).to({x:-421,y:-16.2},0).wait(1).to({x:-421.6,y:-16.4},0).wait(5));

	// Слой 47
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#006CA1").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_169.setTransform(-492.4,-64.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,108,161,0.812)").s().p("AiBCBIAAkBIECAAIAAEBg");
	this.shape_170.setTransform(-502.5,-72.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,108,161,0.639)").s().p("AiACAIAAkAIEBAAIAAEAg");
	this.shape_171.setTransform(-511.6,-79.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,108,161,0.49)").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_172.setTransform(-519.6,-86.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,108,161,0.361)").s().p("AiBCAIAAj/IEDAAIAAD/g");
	this.shape_173.setTransform(-526.5,-92.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,108,161,0.251)").s().p("AiBCAIAAkAIEDAAIAAEAg");
	this.shape_174.setTransform(-532.3,-97);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,108,161,0.161)").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_175.setTransform(-537.1,-101);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,108,161,0.09)").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_176.setTransform(-540.9,-104);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,108,161,0.039)").s().p("AiACAIAAj/IEBAAIAAD/g");
	this.shape_177.setTransform(-543.5,-106.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,108,161,0.012)").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_178.setTransform(-545.1,-107.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,108,161,0)").s().p("AiACBIAAkBIECAAIAAEBg");
	this.shape_179.setTransform(-545.7,-108);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#006CA1").s().p("AiBCBIAAkBIEDAAIAAEBg");
	this.shape_180.setTransform(-444.1,-83.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#006CA1").s().p("AiBCAIAAj/IECAAIAAD/g");
	this.shape_181.setTransform(-454.3,-79.5);
	this.shape_181._off = true;

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#006CA1").s().p("AiACBIAAkBIEBAAIAAEBg");
	this.shape_182.setTransform(-477.5,-70.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#006CA1").s().p("AiBCBIAAkBIECAAIAAEBg");
	this.shape_183.setTransform(-487,-66.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#006CA1").s().p("AiACAIAAkAIEBAAIAAEAg");
	this.shape_184.setTransform(-490,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169}]}).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_169}]},5).to({state:[{t:this.shape_180,p:{x:-444.1,y:-83.6}}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182,p:{x:-477.5,y:-70.1}}]},1).to({state:[{t:this.shape_180,p:{x:-482.8,y:-67.9}}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_182,p:{x:-491.8,y:-64.3}}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_169}]},5).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_169}]},5).to({state:[{t:this.shape_180,p:{x:-444.1,y:-83.6}}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182,p:{x:-477.5,y:-70.1}}]},1).to({state:[{t:this.shape_180,p:{x:-482.8,y:-67.9}}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_182,p:{x:-491.8,y:-64.3}}]},1).to({state:[{t:this.shape_169}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_169).to({_off:true},1).wait(14).to({_off:false,x:-432.8,y:-88.1},0).to({_off:true},1).wait(9).to({_off:false,x:-492.4,y:-64.1},0).wait(5).to({_off:true},1).wait(14).to({_off:false,x:-432.8,y:-88.1},0).to({_off:true},1).wait(9).to({_off:false,x:-492.4,y:-64.1},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_181).wait(17).to({_off:false},0).wait(1).to({x:-463.2,y:-75.9},0).wait(1).to({x:-470.9,y:-72.7},0).to({_off:true},1).wait(27).to({_off:false,x:-454.3,y:-79.5},0).wait(1).to({x:-463.2,y:-75.9},0).wait(1).to({x:-470.9,y:-72.7},0).to({_off:true},1).wait(10));

	// Слой 14
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#006CA1").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_185.setTransform(-478.6,-153.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,108,161,0.812)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_186.setTransform(-491.5,-144.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,108,161,0.639)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_187.setTransform(-503.1,-137);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,108,161,0.49)").s().p("AiBCBIAAkBIEEAAIAAEBg");
	this.shape_188.setTransform(-513.3,-130.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,108,161,0.361)").s().p("AiBCBIAAkBIEEAAIAAEBg");
	this.shape_189.setTransform(-522.1,-124.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,108,161,0.251)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_190.setTransform(-529.5,-119.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,108,161,0.161)").s().p("AiBCBIAAkBIEEAAIAAEBg");
	this.shape_191.setTransform(-535.7,-115.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,108,161,0.09)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_192.setTransform(-540.4,-112.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,108,161,0.039)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_193.setTransform(-543.8,-110.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,108,161,0.012)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_194.setTransform(-545.8,-108.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,108,161,0)").s().p("AiCCBIAAkBIEEAAIAAEBg");
	this.shape_195.setTransform(-546.5,-108.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#006CA1").s().p("AiBCBIAAkBIEEAAIAAEBg");
	this.shape_196.setTransform(-485.8,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185}]}).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_185}]},5).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_196,p:{x:-485.8,y:-109.7}}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_196,p:{x:-481,y:-139}}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},5).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_185}]},5).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_196,p:{x:-485.8,y:-109.7}}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_196,p:{x:-481,y:-139}}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_185).to({_off:true},1).wait(14).to({_off:false,x:-493.3,y:-64.4},0).wait(1).to({x:-490.5,y:-81.3},0).wait(1).to({x:-488,y:-96.4},0).to({_off:true},1).wait(1).to({_off:false,x:-483.9,y:-121.3},0).wait(1).to({x:-482.3,y:-131},0).to({_off:true},1).wait(1).to({_off:false,x:-479.9,y:-145.2},0).wait(1).to({x:-479.2,y:-149.7},0).wait(1).to({x:-478.8,y:-152.3},0).wait(1).to({x:-478.6,y:-153.2},0).wait(5).to({_off:true},1).wait(14).to({_off:false,x:-493.3,y:-64.4},0).wait(1).to({x:-490.5,y:-81.3},0).wait(1).to({x:-488,y:-96.4},0).to({_off:true},1).wait(1).to({_off:false,x:-483.9,y:-121.3},0).wait(1).to({x:-482.3,y:-131},0).to({_off:true},1).wait(1).to({_off:false,x:-479.9,y:-145.2},0).wait(1).to({x:-479.2,y:-149.7},0).wait(1).to({x:-478.8,y:-152.3},0).wait(1).to({x:-478.6,y:-153.2},0).wait(5));

	// Слой 13
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#006CA1").s().p("Aw1PmQixg3h9glQgPgEgGgIQgFgHABgPQABgRAAgaIgBguIEFAAIAAkFIoJAAIAAkHIEEAAIAAoNIEKAAIAAkEIEAAAIAAiLIBiAjIChA8QBgAkBAAWQCPAzB8hIQD5iSH3kgQBrg/BxA4QB1A6FdC2QA5AdArBEQBgCXDCEtQAiA0gBArQAAArggApQgKAMgRAMIiQBoQgyAjglgGQgmgHgggyIhjiUQg7hYglg+QgohCg/gmQg4ghhRgPQghgGhBgBQhfAAhNA9IsvKGIsvKFQgOAMgQAAQgIAAgJgDgAxxgFID/AAIAAkEIj/AAg");
	this.shape_197.setTransform(-127.6,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_197).wait(60));

	// Слой 150
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,75,0,0)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADALIAABPgAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAEgGAOgDIAagHIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQAAAFgFAGQgGAFgEABIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQABgDAFgFQAGgEAEgBIBNAAIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_198.setTransform(109.4,27.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,75,0,0.137)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_199.setTransform(109.4,27.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,75,0,0.271)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_200.setTransform(109.4,27.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,75,0,0.408)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_201.setTransform(109.4,27.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,75,0,0.541)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_202.setTransform(109.4,27.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,75,0,0.678)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_203.setTransform(109.4,27.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,75,0,0.812)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_204.setTransform(109.4,27.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,75,0,0.949)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADALIAABPgAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAEgGAOgDIAagHIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQAAAFgFAGQgGAFgEABIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQABgDAFgFQAGgEAEgBIBNAAIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_205.setTransform(109.4,27.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,75,0,0.008)").s().p("A1hX0IBcAAQABAIAAAIIhdA9gA3fXQIAAhcIBbAAIAABcgA/bWlIAAgvIBcAAQAFAhgZANQgNAHgTAAQgSAAgWgGgA9dVRIAAhcIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgCgAxjTRIAAhbIBcAAIAABbgEglZARRIAAhaIBbAAQAOA5gXAWQgPAPggAAQgQAAgTgEgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPVIAAhdIBbAAIAABdgAtkNXIAAhbIBbAAIAABbgEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAhdIBdAAIAABdgEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhcIBcAAIAABcgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhbIBaAAIAABbgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAhdIBbAAIAABdgA5eFaIAAhdIBbAAIAABdgAd9DaIAAhcIBaAAQAJA/gLAOQgNAQg4AAIgTgBgAMNDaIAAhdIBcAAIAABdgACSDaIAAhcIBdAAIAABcgAlpDaIAAhcIBeAAIAABcgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBcIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkghIAAheIBdAAIAABegAlpgiIAAheIBdAAIAABegA1hgiIAAhcIBdAAIAABcgAnmigIAAheQA8AAASABQAEAAAFAFQAFAFAAAEQABARAAA+gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQgBAEgFAFQgFAFgEAAQgRABg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhbIBbAAIAABbgAhqmfIAAheIBbAAIAABegAGRmgIAAhdIBbAAIAABdgAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvIIAAhcIBbAAIAABcgAnmwZIAAhdIBbAAIAABdgAhqwZIAAhLIBbAaIAAAxgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgYAHguIBZAAIAABZIgQABQgjAAgUgUgAaB3kIAAhcIBaAAIAABcg");
	this.shape_206.setTransform(92.7,10.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,75,0,0.149)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_207.setTransform(92.7,10.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,75,0,0.29)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_208.setTransform(92.7,10.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,75,0,0.431)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_209.setTransform(92.7,10.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,75,0,0.576)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_210.setTransform(92.7,10.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,75,0,0.718)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_211.setTransform(92.7,10.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,75,0,0.859)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_212.setTransform(92.7,10.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF4B00").s().p("A1hX0IBcAAQABAIAAAIIhdA9gA3fXQIAAhcIBbAAIAABcgA/bWlIAAgvIBcAAQAFAhgZANQgNAHgTAAQgSAAgWgGgA9dVRIAAhcIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgCgAxjTRIAAhbIBcAAIAABbgEglZARRIAAhaIBbAAQAOA5gXAWQgPAPggAAQgQAAgTgEgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPVIAAhdIBbAAIAABdgAtkNXIAAhbIBbAAIAABbgEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAhdIBdAAIAABdgEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhcIBcAAIAABcgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhbIBaAAIAABbgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAhdIBbAAIAABdgA5eFaIAAhdIBbAAIAABdgAd9DaIAAhcIBaAAQAJA/gLAOQgNAQg4AAIgTgBgAMNDaIAAhdIBcAAIAABdgACSDaIAAhcIBdAAIAABcgAlpDaIAAhcIBeAAIAABcgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBcIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkghIAAheIBdAAIAABegAlpgiIAAheIBdAAIAABegA1hgiIAAhcIBdAAIAABcgAnmigIAAheQA8AAASABQAEAAAFAFQAFAFAAAEQABARAAA+gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQgBAEgFAFQgFAFgEAAQgRABg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhbIBbAAIAABbgAhqmfIAAheIBbAAIAABegAGRmgIAAhdIBbAAIAABdgAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvIIAAhcIBbAAIAABcgAnmwZIAAhdIBbAAIAABdgAhqwZIAAhLIBbAaIAAAxgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgYAHguIBZAAIAABZIgQABQgjAAgUgUgAaB3kIAAhcIBaAAIAABcg");
	this.shape_213.setTransform(92.7,10.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,75,0,0.118)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_214.setTransform(109.4,27.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,75,0,0.239)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_215.setTransform(109.4,27.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,75,0,0.357)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_216.setTransform(109.4,27.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,75,0,0.475)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_217.setTransform(109.4,27.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(255,75,0,0.592)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_218.setTransform(109.4,27.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(255,75,0,0.714)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_219.setTransform(109.4,27.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(255,75,0,0.831)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_220.setTransform(109.4,27.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(255,75,0,0.792)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_221.setTransform(109.4,27.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(255,75,0,0.631)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_222.setTransform(109.4,27.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(255,75,0,0.318)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_223.setTransform(109.4,27.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(255,75,0,0.157)").s().p("A98VUIADgGIBSAAIAABSgA6GUoIAAhcIBbAAIAABcgA5aQqQAUg0gugnIBKAAIAABbgEglzAQpQADgkAWgZQAWgZAfgEIADBagAwMQoIAAhaIBcAAIAABagEgs7AMsQgOgEgFgGQgLgRAAgTQAAgVANgPQAagMASgEIAABrIgbgJgAwLMuIAAhdIBbAAIAABdgEgoAAMtIAAhdIBeAAIAABdgAsNKuIAAhaIBcAAIAABagA+CKtQgGgcAgghQAhgiAgAEIAABbgEgr7AKsQgEgZAegfQAfgfAhgCIAABZgA2IHTIBdAAQAABBgBAMQgLARgEAAIhNAAgEgl+AIxIAAheIBaAAIAABegEgr8AGwIAAheIBbAAIAABegAHqExIAAheIBdAAIAABegAkREvIAAhcIBaAAIAABcgEgx5AEvQgFgnAdgcQAdgdAlAHIACAXIABBCgA6HEuIAAhaIBcAAIAABagAkTAyIAAhQQAYgOBFABIAABdgEgkCAAxIAAhaIBdAAIAABagAsOhMIAAhcIBdAAIAABcgA2JhMIAAhaIBcAAIAABagAFqhMIAAhcIBaAAIAABcgA+EjKIAAhcIBcAAIAABcgARkjKIAAhdIBYAAIAABdgEggDgFJIAAhbIBbAAIAABbgAgTlKIAAhbIBZAAIAABbgAHpnJIAAhbIBbAAIAABbgA2InJIAAhbIBcAAIAABbgAdipHIAAhdIBcAAIAABdgAkRpHIAAheIBbAAIAABegA8FpHIAAheIBbAAIAABegALnrHIAAhcIBaAAIAABcgEAwggO+IAAhdIBbAAIAABdgEAlkgTvIAAhbIBdAAIAABbgAsO1BIAAhdIBeAAIAABdg");
	this.shape_224.setTransform(109.4,27.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(255,75,0,0)").s().p("A1hX0IBcAAQABAIAAAIIhdA9gA3fXQIAAhcIBbAAIAABcgA/bWlIAAgvIBcAAQAFAhgZANQgNAHgTAAQgSAAgWgGgA9dVRIAAhcIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgCgAxjTRIAAhbIBcAAIAABbgEglZARRIAAhaIBbAAQAOA5gXAWQgPAPggAAQgQAAgTgEgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPVIAAhdIBbAAIAABdgAtkNXIAAhbIBbAAIAABbgEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAhdIBdAAIAABdgEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhcIBcAAIAABcgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhbIBaAAIAABbgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAhdIBbAAIAABdgA5eFaIAAhdIBbAAIAABdgAd9DaIAAhcIBaAAQAJA/gLAOQgNAQg4AAIgTgBgAMNDaIAAhdIBcAAIAABdgACSDaIAAhcIBdAAIAABcgAlpDaIAAhcIBeAAIAABcgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBcIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkghIAAheIBdAAIAABegAlpgiIAAheIBdAAIAABegA1hgiIAAhcIBdAAIAABcgAnmigIAAheQA8AAASABQAEAAAFAFQAFAFAAAEQABARAAA+gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQgBAEgFAFQgFAFgEAAQgRABg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhbIBbAAIAABbgAhqmfIAAheIBbAAIAABegAGRmgIAAhdIBbAAIAABdgAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvIIAAhcIBbAAIAABcgAnmwZIAAhdIBbAAIAABdgAhqwZIAAhLIBbAaIAAAxgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgYAHguIBZAAIAABZIgQABQgjAAgUgUgAaB3kIAAhcIBaAAIAABcg");
	this.shape_225.setTransform(92.7,10.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(255,75,0,0.141)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_226.setTransform(92.7,10.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(255,75,0,0.286)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_227.setTransform(92.7,10.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(255,75,0,0.427)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_228.setTransform(92.7,10.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(255,75,0,0.573)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_229.setTransform(92.7,10.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(255,75,0,0.714)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_230.setTransform(92.7,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198}]}).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_225}]},1).wait(1));

	// Слой 148
	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(255,75,0,0.498)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_231.setTransform(108.5,2.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(255,75,0,0.569)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_232.setTransform(108.5,2.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(255,75,0,0.643)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_233.setTransform(108.5,2.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(255,75,0,0.714)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_234.setTransform(108.5,2.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(255,75,0,0.784)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_235.setTransform(108.5,2.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,75,0,0.855)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_236.setTransform(108.5,2.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(255,75,0,0.929)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_237.setTransform(108.5,2.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF4B00").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_238.setTransform(108.5,2.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,75,0,0)").s().p("A1hX0IBcAAQABAIAAAIIhdA9gA3fXQIAAhcIBbAAIAABcgA/bWlIAAgvIBcAAQAFAhgZANQgNAHgTAAQgSAAgWgGgA9dVRIAAhcIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgCgAxjTRIAAhbIBcAAIAABbgEglZARRIAAhaIBbAAQAOA5gXAWQgPAPggAAQgQAAgTgEgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPVIAAhdIBbAAIAABdgAtkNXIAAhbIBbAAIAABbgEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAhdIBdAAIAABdgEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhcIBcAAIAABcgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhbIBaAAIAABbgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAhdIBbAAIAABdgA5eFaIAAhdIBbAAIAABdgAd9DaIAAhcIBaAAQAJA/gLAOQgNAQg4AAIgTgBgAMNDaIAAhdIBcAAIAABdgACSDaIAAhcIBdAAIAABcgAlpDaIAAhcIBeAAIAABcgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBcIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkghIAAheIBdAAIAABegAlpgiIAAheIBdAAIAABegA1hgiIAAhcIBdAAIAABcgAnmigIAAheQA8AAASABQAEAAAFAFQAFAFAAAEQABARAAA+gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQgBAEgFAFQgFAFgEAAQgRABg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhbIBbAAIAABbgAhqmfIAAheIBbAAIAABegAGRmgIAAhdIBbAAIAABdgAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvIIAAhcIBbAAIAABcgAnmwZIAAhdIBbAAIAABdgAhqwZIAAhLIBbAaIAAAxgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgYAHguIBZAAIAABZIgQABQgjAAgUgUgAaB3kIAAhcIBaAAIAABcg");
	this.shape_239.setTransform(92.7,10.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(255,75,0,0.137)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_240.setTransform(92.7,10.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(255,75,0,0.271)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_241.setTransform(92.7,10.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(255,75,0,0.408)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_242.setTransform(92.7,10.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(255,75,0,0.541)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_243.setTransform(92.7,10.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,75,0,0.678)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_244.setTransform(92.7,10.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(255,75,0,0.812)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_245.setTransform(92.7,10.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(255,75,0,0.949)").s().p("A1hX0IBcAAQABAIAAAIIhdA9gA3fXQIAAhcIBbAAIAABcgA/bWlIAAgvIBcAAQAFAhgZANQgNAHgTAAQgSAAgWgGgA9dVRIAAhcIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgCgAxjTRIAAhbIBcAAIAABbgEglZARRIAAhaIBbAAQAOA5gXAWQgPAPggAAQgQAAgTgEgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPVIAAhdIBbAAIAABdgAtkNXIAAhbIBbAAIAABbgEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAhdIBdAAIAABdgEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhcIBcAAIAABcgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhbIBaAAIAABbgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAhdIBbAAIAABdgA5eFaIAAhdIBbAAIAABdgAd9DaIAAhcIBaAAQAJA/gLAOQgNAQg4AAIgTgBgAMNDaIAAhdIBcAAIAABdgACSDaIAAhcIBdAAIAABcgAlpDaIAAhcIBeAAIAABcgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBcIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkghIAAheIBdAAIAABegAlpgiIAAheIBdAAIAABegA1hgiIAAhcIBdAAIAABcgAnmigIAAheQA8AAASABQAEAAAFAFQAFAFAAAEQABARAAA+gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQgBAEgFAFQgFAFgEAAQgRABg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhbIBbAAIAABbgAhqmfIAAheIBbAAIAABegAGRmgIAAhdIBbAAIAABdgAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvIIAAhcIBbAAIAABcgAnmwZIAAhdIBbAAIAABdgAhqwZIAAhLIBbAaIAAAxgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgYAHguIBZAAIAABZIgQABQgjAAgUgUgAaB3kIAAhcIBaAAIAABcg");
	this.shape_246.setTransform(92.7,10.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,75,0,0)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_247.setTransform(108.5,2.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,75,0,0.125)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_248.setTransform(108.5,2.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,75,0,0.251)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_249.setTransform(108.5,2.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,75,0,0.376)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_250.setTransform(108.5,2.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(255,75,0,0.502)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_251.setTransform(108.5,2.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,75,0,0.624)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_252.setTransform(108.5,2.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(255,75,0,0.749)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_253.setTransform(108.5,2.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,75,0,0.875)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_254.setTransform(108.5,2.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(255,75,0,0.831)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_255.setTransform(108.5,2.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(255,75,0,0.667)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_256.setTransform(108.5,2.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(255,75,0,0.333)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_257.setTransform(108.5,2.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(255,75,0,0.169)").s().p("A59YdIAAhcIBaAAIAABcgEgj5AUgIAAhcIBcAAIAABcgA3/UgIAAhbIBdAAIAABbgA78SfIAAhbIBaAAIAABbgEgr0AQiIAAhdIBbAAIAABdgEgj5AOjIAAhbIBcAAIAABbgEgt1AMkIAAhcIBbAAQAPA8gVAUQgOAOglAAQgPAAgTgCgA0AMlIAAhdIBbAAIAABdgEgvzAKkIAAhcIBcAAIAABcgAgLIlIAAhcIBaAAIAABcgAmIIlIAAhcIBeAAIAABcgA5+GoIAAhdIBbAAIAABdgAsEGnIAAhdIBcAAIAABdgAPtEoIAAheIBbAAIAABegADyEoIAAhdIBcAAIAABdgAbfEnIAAhcIBaAAQAJA/gMAOQgMAQg4AAIgTgBgAJvEnIAAhdIBcAAIAABdgA1+EnIAAhdIBbAAIAABdgEgn2AEnIAAhdIBdAAIAABdgAiKCpIAAhbIBdAAIAABbgAuECoIAAhbIBcAAIAABbgEgh6AAqIAAhcIBdAAIAABcgAFyhTIAAhcIBaAAIAABcgALwhUIAAhbIBbAAIAABbgA3/hVIAAhbIBeAAIAABbgA/7jUIAAhaIBcAAIAABagEAtcgD6IAAhbIBbAAIAABbgAWXksIAAheIBaAAIAABegAmIlSIAAheIBeAAIAABegA59lTIAAhcIBaAAIAABcgAgLnRIAAhbIBbAAIAABbgAFxtPIAAhcIBbAAIAABcgAqEtPIAAhbIBaAAIAABbgAsFvMIAAhdIBdAAIAABdgEAuWgUYIAAhcIBdAAIAABcgAf33DIAAhZIBcAAIAABZg");
	this.shape_258.setTransform(108.5,2.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(255,75,0,0.106)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_259.setTransform(92.7,10.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(255,75,0,0.216)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_260.setTransform(92.7,10.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(255,75,0,0.322)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_261.setTransform(92.7,10.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(255,75,0,0.427)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_262.setTransform(92.7,10.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(255,75,0,0.533)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_263.setTransform(92.7,10.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(255,75,0,0.643)").s().p("A1hXzIBcAAQgtAvgvAggA3fXQIAAhcIBbAAIAABcgA/bWlIAAgwIBcAAQAFAigZANQgNAHgTAAQgSAAgWgGgA9dVQIAAhbIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgDgAxjTQIAAhaIBcAAIAABagEglZARRIAAhaIBbAAQAOA4gXAXQgPAOggAAQgQAAgTgDgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPUIAAhcIBbAAIAABcgAtkNWIAAhaIBbAAIAABagEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAheIBdAAIAABegEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhdIBcAAIAABdgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhcIBaAAIAABcgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAheIBbAAIAABegA5eFaIAAhdIBbAAIAABdgAd9DaIAAhdIBaAAQAJBAgLAOQgNAPg4AAIgTAAgAMNDaIAAhdIBcAAIAABdgACSDaIAAhdIBdAAIAABdgAlpDaIAAhdIBeAAIAABdgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBbIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkgiIAAhdIBdAAIAABdgAlpgiIAAheIBdAAIAABegA1hgjIAAhbIBdAAIAABbgAnmihIAAhdQA8AAASABQAPAfAAA9gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQggAPg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhcIBbAAIAABcgAhqmfIAAheIBbAAIAABegAGRmgIAAheIBbAAIAABegAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvJIAAhcIBbAAIAABcgAnmwZIAAheIBbAAIAABegAhqwaIAAhLIBbAbIAAAwgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgZAHgtIBZAAIAABZIgQABQgjAAgUgUgAaB3lIAAhcIBaAAIAABcg");
	this.shape_264.setTransform(92.7,10.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(255,75,0,0.749)").s().p("A1hX0IBcAAQABAIAAAIIhdA9gA3fXQIAAhcIBbAAIAABcgA/bWlIAAgvIBcAAQAFAhgZANQgNAHgTAAQgSAAgWgGgA9dVRIAAhcIBaAAQAMBBgQARQgMAMgkAAQgQAAgWgCgAxjTRIAAhbIBcAAIAABbgEglZARRIAAhaIBbAAQAOA5gXAWQgPAPggAAQgQAAgTgEgA5eRSIAAhbIBbAAIAABbgA/bRSIAAhbIBdAAIAABbgAzhPVIAAhdIBbAAIAABdgA7ePVIAAhdIBdAAIAABdgEgpWAPVIAAhdIBbAAIAABdgAtkNXIAAhbIBbAAIAABbgEghbANWIAAhbIBcAAIAABbgEgjXALZIAAheIBaAAIAABegEgtUALYIAAhdIBcAAIAABdgApnJYIAAhdIBdAAIAABdgEgxQAJYQgLg+ARgTQASgUBEAIIAABdgA/bJXIAAhcIBcAAIAABcgAzhHXIAAhaIBbAAIAABagEgpVAHXIAAhbIBaAAIAABbgAGRFbIAAhdIBbAAIAABdgAjqFbIAAheIBeAAIAABegAxiFbIAAhdIBbAAIAABdgA5eFaIAAhdIBbAAIAABdgAd9DaIAAhcIBaAAQAJA/gLAOQgNAQg4AAIgTgBgAMNDaIAAhdIBcAAIAABdgACSDaIAAhcIBdAAIAABcgAlpDaIAAhcIBeAAIAABcgA7eDaIAAhdIBdAAIAABdgEgnTABcQgOg2AWgXQAWgVA6AIIAABagAATBcIAAhbIBdAAIAABbgAKQBbIAAhbIBbAAIAABbgA3eBbIAAhbIBbAAIAABbgAvkghIAAheIBdAAIAABegAlpgiIAAheIBdAAIAABegA1hgiIAAhcIBdAAIAABcgAnmigIAAheQA8AAASABQAEAAAFAFQAFAFAAAEQABARAAA+gAxhihIAAhbIBaAAIAABbgAMNiiIAAhbIBdAAIAABbgEAlggEHIAAhbIBdAAIAABbgAOMl8IBeAAIAABOQgBAEgFAFQgFAFgEAAQgRABg+AAgA9dkhIAAhaIBcAAIAABagEAv7gFHIAAhbIBbAAIAABbgAhqmfIAAheIBbAAIAABegAGRmgIAAhdIBbAAIAABdgAjpofIAAhbIBdAAIAABbgA3eofIAAhbIBbAAIAABbgAWCofIAAhbIBdAAIAABbgAESscIAAhdIBbAAIAABdgATwvIIAAhcIBbAAIAABcgAnmwZIAAhdIBbAAIAABdgAhqwZIAAhLIBbAaIAAAxgAMNyZIAAhdIBdAAIAABdgAtQ0tQgZgYAHguIBZAAIAABZIgQABQgjAAgUgUgAaB3kIAAhcIBaAAIAABcg");
	this.shape_265.setTransform(92.7,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_231}]}).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_239}]},1).wait(1));

	// Слой 1
	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FF4B00").s().p("A75fgQArgKANAFQAMAEgDAXgA6Re5IAAhaIBbAAIAABagA8Qe5IAAhaIBbAAIAABagA8Pc7IAAhcIBaAAIAABcgA+Oc6QALgbAdgYQAigZARgQIAABcgA2Tc6IAAhdIBbAAIAAA/IguAegA4Tc6IAAhbIBeAAIAABbgEgjoAbgIA4AAIAAAqgA0VbcIBCAAIhCAqgA6Ca9QgFgBgFgFQgGgGAAgEIgBhPIBeAAIAABfIhNAAgA8Ha8IBQhAIAABAgEgiNAa8IAAhdIBdAAIAABdgEgkNAa8IAAhdIBdAAIAABdgA4Ta8IAAhdIBdAAIAABdgA2Sa6IAAhdIBaAAIAABdgA0Va5IAAhcIBdAAIAABcgAyUZcIBbAAIAAAfIhbA5gEgl6AZlIAFgHIBHAAIAABMgA+QZfIBBAAIhBAzgA+PY9IAAhcIBcAAIAABcgEggOAY8IAAhbIBbAAIAABbgEgiNAY8IAAhbIBdAAIAABbgAyUY6IAAhaIBbAAIAABagA2TY6IAAhbIBcAAIAABbgA8QXhIBhAAIhhBMgAuaXgIBbAAIAAAEIhbA2gAwXXAIAAhdIBcAAIAABdgAsYXAIAAhdIBbAAIAAA0IhFApgAuYXAIAAheIBcAAIAABegA4GW+QgEAAgFgGQgEgFAAgEQgBgRAAg9IBfAAIAABeQg/AAgSgBgEggOAW+IAAhcIBaAAIAABcgEgqIAW9IAAhbIBaAAIAABbgA0VW9IAAheIBdAAIAABegA+PW9IAAhbIBdAAIAABbgEgkOAW9IBfhHIAABHgAyUW8IAAhdIBbAAIAABdgA2SW8IAAhdIBbAAIAABdgA6QW8IAAhaIBbAAIAABagEgrsAWaQgegeACgbIBbAAIAABbQghgEgegegEgmLAViIA3AAIg3ApgAqbVAIAAhdIBdAAIAABdgAsYVAIAAhdIBbAAIAABdgAuYVAIAAhcIBdAAIAABcgA8QVAIAAheIBbAAIAABegEgqIAVAIAAheIBbAAIAABegAyXU/IAAhdIBeAAIAABdgA0UU/IAAhdIBcAAIAABdgA4SU/IAAhcIBdAAIAABcgA6QU/IAAhdIBaAAIAABdgEggNAU/QgJg6ATgUQAUgVA8AHIAABcgEghlAU/IA1goIAAAogEgmKAU/IAAhdIBaAAIAABdgAodU8IAAhbIBdAAIAAAoIhbAzgEgkOATjIBkAAIhkBLgAuZTBIAAhaIBdAAIAABagAqbTBIAAhbIBdAAIAABbgEgwHARzQABgFAFgFQAGgGAEAAQANgBBFAAIgEAbQgCAOgFAEQgNAJgZAXQgXARgaABIAAhOgAmeTAIAAhdIBcAAIAABdgAodTAIAAheIBdAAIAABegEgmJATAIAAhcIBaAAIAABcgA2TS/IAAhbIBbAAIAABbgA4SS/IAAhbIBcAAIAABbgEgiNARkIBcAAQADAcgfAeQgeAfgiACgEgoLAS/IAAhbIBdAAIAABbgA6QS/IAAhbIBaAAIAABbgA8QS/IAAhcIBaAAIAABcgAyVS+IAAhbIBcAAIAABbgA0US+IAAhaIBcAAIAABagEgqIAS+IAAhaIBbAAIAABagEgyFAS+IAAhaIBbAAIAABagEg0KARkIBjAAIAABWgAkfRjIBcAAIAAAhIhcAvgEg1OAQbQgMgYABgeIAyAAIAABjQgbgWgMgXgA9lQ5QgfgZgMAAIAAg6IBeAAIAABaQgLAFgJAAQgQAAgPgMgEggOARBIgCheIBdAAQAKA/gZAVQgPANgfAAQgOAAgQgDgAqbRDIAAhdIBcAAIAABdgAuZRDIAAhdIBeAAIAABdgAsYRDIAAhdIBbAAIAABdgAwVRDIAAhdIBaAAIAABdgA6RRCIAAhdIBbAAIAABdgA8PRCIAAhdIBaAAIAABdgEgkNARCIAAhdIBdAAIAABdgEgqGARCIgCgHIBbhHIAABOgEgyFARCIAAhdIBbAAIAABdgEg0EARCIAAhdIBdAAIAABdgAyXRCIAAhdIBeAAIAABdgA4SRCIAAheIBdAAIAABegEgiOARCIAAhdIBeAAIAABdgEgoKARCIAAhdIBdAAIAABdgAkeRAIAAhdIBbAAIAABdgAigQ/IAAhcIBdAAIAABcgAmdQ/IAAhdIBbAAIAABdgAodQ/IAAhdIBcAAIAABdgAggPiIBaAAIAAAlIhaArgEgsHAPkIA+AAIg+AvgEguIAPDIAAheIBdAAIAABegA6QPCIAAhdIBaAAIAABdgA+QPCIAAhcIBdAAIAABcgEggOAPCIAAhdIBbAAIAABdgEgkNAPCIAAhdIBdAAIAABdgEgmIAPCQgKhCAQgRQAQgRBDAJIAABbgAqYPCIAAhdIBbAAIAABdgAyWPCIAAheIBdAAIAABegA0TPCIAAhdIBbAAIAABdgA4SPCIAAheIBcAAIAABegA8QPCIAAhdIBaAAIAABdgEgntAPCIBAgwIAAAwgEgyFAPCIAAhdIBbAAIAABdgAuZPBIAAhbIBeAAIAABbgAwWPBIAAhdIBbAAIAABdgA2TPBIAAhcIBcAAIAABcgEg1RAPBIAkgrIAHAFIAAAmgABjPBIAAhcIBcAAIAABcgAihPBIAAhbIBdAAIAABbgAmePBIAAhbIBcAAIAABbgAodPBIAAhcIBdAAIAABcgAggPAIAAhaIBbAAIAABagAkePAIAAhbIBbAAIAABbgADhNmIBcAAIAAAsIhZAmIgDACgEgqHANlIBeAAQgPAVgdAVIgyAkgAFiNCIAAhdIBbAAIAABdgADiNCIAAhdIBbAAIAABdgEgoKANCIAAhcIBaAAQAIAhgeAeQgdAdglAAIgCAAgABiNCIAAhcIBdAAIAABcgAieNCIAAhbIBeAAIAABbgEgkLANCQgIglAegeQAegdAnAGIAABagEgqIANCIAAhbIBaAAIAABbgEguIANCIAAhdIBRAAQAEABAEAFQAFAGAAAEIABBNgAobNBIAAhbIBdAAIAABbgAsZNBIAAhbIBeAAIAABbgAuYNBIAAhbIBdAAIAABbgAwVNBIAAhbIBaAAIAABbgAyWNBIAAhbIBdAAIAABbgA0TNBIAAhbIBbAAIAABbgA8PNBIAAhbIBaAAIAABbgA+QNBIAAhbIBdAAIAABbgEgiNANBIAAhbIBdAAIAABbgEgwHANBIAAhOQABgEAFgFQAFgFAEAAQARgBA9AAIAABdgAqZNBIAAhaIBbAAIAABagA4TNBIAAhbIBeAAIAABbgEggOANBIAAhbIBcAAIAABbgAJgLlIBbAAIAAAaIgIACIhTAdgALcLGIAAhfIBcAAIABAoIgBAnQgBAEgGAGQgHAFgFABIgjABIgmgBgEgmKALFIAAheIBZAAQAKA/gOASQgNAPgoAAQgPAAgRgCgAFeLFIAAhdIBbAAIAABdgAuYLFIAAhdIBcAAIAABdgEggNALFIAAhdIBaAAIAABdgAieLFIAAhdIBdAAIAABdgAkdLFIAAheIBbAAIAABegA2ULFIAAhdIBcAAIAABdgA4SLFIAAheIBdAAIAABegA+QLFIAAhdIBdAAIAABdgEgqIALFIAAheIBbAAIAABegAJbLEIAAhdIBdAAIAABdgAHeLEIAAhcIBbAAIAABcgAgeLEIAAhcIBaAAIAABcgAobLEIAAhdIBdAAIAABdgAqXLEIAAhdIBaAAIAABdgAwVLEIAAhcIBbAAIAABcgAyWLEIAAhdIBdAAIAABdgEgiUALEIBLhdIAaAAIAABdgEgsHALEIAAhcIBbAAIAABcgEgwNALEQAOgaAggZQAxglAEgFIAABdgABgLEIAAhdIBcAAIAABdgEgoLALEIAAhcIBdAAIAABcgEguHALEIAAhcIBcAAIAABcgEAiOAKwIAAhbIBcAAIAABbgEgkNAJoIBCAAIhCAxgAPYJnIBYAAIAAAFIhYAfgAUdIJIBZAAQAGAVgFAMQgGANgVAEQgNADgSAHIggALgEgiNAI9IAAhVIBcAAIAABhgARYJGIAAhfIBcAAIAAAnQAAAXgCAQQAAAFgJAFQgIAFgHABQgNACgTAAIgigBgANYJFIAAhdIBdAAIAABdgAmbJFIAAhdIBcAAIAABdgEggOAJFIAAhdIBbAAIAABdgEgt9AJFIBRhAIAABAgALbJFIAAhdIBbAAIAABdgAieJFIAAheIBdAAIAABegAqYJFIAAhdIBbAAIAABdgAuZJFIAAheIBeAAIAABegAwVJFIAAheIBbAAIAABegA0TJFIAAhdIBaAAIAABdgA6RJFIAAheIBbAAIAABegEgmKAJFIAAhfIBNAAQAEABAFAFQAGAGAAAEQABANAABCgEgqKAJFIAAgoIABgmQAAgFAHgFQAGgGAFgBIAkgBIAlABIAABfgAHdJEIAAhcIBbAAIAABcgAFeJEIAAhcIBcAAIAABcgABgJEIAAhdIBbAAIAABdgAyWJEIAAhcIBdAAIAABcgA8PJEIAAhcIBbAAIAABcgEgsHAJEIAAhdIBaAAIAABdgAsYJEIAAhcIBdAAIAABcgA4TJEIAAhdIBdAAIAABdgEArwAGZQAogLAPAGQAPAHAGAhIhMAbgAUdHMIAAhbIBaAAIAABbgEgoLAFrIBfAAIAABMQgBAFgFAFQgGAGgFAAQgMABhCAAgADrHHQgEgBgFgFQgEgFgBgEIAAhOIBdAAIAABdIhPAAgARZHGIAAhbIBZAAIAABbgAkdHGIAAhbIBcAAIAABbgAqYHGIAAhcIBbAAIAABcgEggOAHGIAAhbIBaAAIAABbgEgiNAHGIAAhbIBdAAIAABbgANYHGIAAhbIBeAAIAABbgABfHGIAAhbIBcAAIAABbgAgfHGIAAhbIBaAAIAABbgAyWHGIAAhbIBcAAIAABbgA4SHGIAAhcIBcAAIAABcgA+QHGIAAhbIBeAAIAABbgEgkNAHGIAAhbIBdAAIAABbgALcHFIAAhcIBJAAIARABIAABbgAmbHFIAAhbIBdAAIAABbgAocHFIAAhaIBeAAIAABagAwVHFIAAhaIBbAAIAABagA0UHFIAAhbIBcAAIAABbgA8PHFIAAhbIBaAAIAABbgEgmJAHFIAAhbIBaAAIAABbgAJcHFIAAhaIBdAAIAABagEAyzAGSIAAhaIBcAAIAABagEAl/AFtIAAhdIBdAAIAABdgAZmFOIAAhdIBcAAIAABdgALcFIIAAhdIBaAAIAABdgAsYFIIAAheIBcAAIAABegAuYFIIAAhdIBcAAIAABdgAPYFHIAAhdIBeAAIAABdgAJbFHIAAhdIBdAAIAABdgAFeFHIAAhdIBbAAIAABdgADfFHIAAhcIBcAAIAABcgABhFHIAAhcIBbAAIAABcgAgfFHIAAhdIBbAAIAABdgAkcFHIAAhcIBbAAIAABcgAwVFHIAAhdIBbAAIAABdgA0TFHIAAhdIBbAAIAABdgA2TFHIAAhdIBbAAIAABdgA6RFHIAAhdIBbAAIAABdgA8QFHIAAhdIBaAAIAABdgEggOAFHIAAhdIBbAAIAABdgATWFHIAAheIBcAAIAABegANZFHIAAhdIBdAAIAABdgAHdFHIAAhdIBbAAIAABdgAidFHIAAheIBcAAIAABegAmbFHIAAhdIBdAAIAABdgAqYFHIAAhdIBaAAIAABdgEgkNAFHIAAhcIBeAAIAABcgEgmJAFHIAAhdIBaAAIAABdgEgoKAFHQgDgeAfgfQAfgfAhgBIAABdgEAhPADLIBeAAIgBBPQAAADgGAFQgFAFgEAAIhOABgAWODzIAAhaIBdAAIAABagAuYDJIAAhcIBcAAIAABcgAwVDJIAAheIBQABQAEAAAEAFQAEAFAAAEIAABPgAyWDJIAAhcIBdAAIAABcgEgkNADJIAAhcIBcAAIAABcgABgDIIAAhbIBbAAIAABbgAkcDIIAAhbIBaAAIAABbgAobDIIAAhbIBcAAIAABbgA6RDIIAAhbIBbAAIAABbgA+QDIIAAhbIBdAAIAABbgEgiNADIIAAhdQBBAAANABQAFAAAFAHQAFAGABAFIABAkIAAAmgARYDIIAAhbIBaAAIAABbgANZDIIAAhbIBcAAIAABbgAHdDIIAAhaIBcAAIAABagADdDIIAAhNQABgEAFgGQAGgFAEgBIBOAAIAABdgAmbDIIAAhcIBdAAIAABcgA2TDIIAAhcIBbAAIAABcgA8PDIIAAhbIBaAAIAABbgEgmKADIIgEgHIBfhNIAABUgAigDHQAAhAABgMQAAgEAGgGQAGgFAEgBIBPAAIAABcgAsYDHIAAhbIBcAAIAABbgAUKB8IAAhdIBbAAIAABdgADrBJQgDAAgFgFQgFgFgBgEIAAhNIBeAAIAABcQg+AAgSgBgAiSBJQgDAAgFgFQgFgGAAgEIgBhMIBfAAIAABcQg/AAgSgBgAPYBJIAAhbIBdAAIAABbgANYBJIAAhaIBdAAIAABagAobBJIAAhaIBcAAIAABagA0TBJIAAhbIBaAAIAABbgEgj1ABJIBFg4IAAA4gAJbBIIAAhaIBcAAIAABagAgeBIIAAhaIBaAAIAABagAmbBIIAAhZIBcAAIAABZgA4SBIIAAhaIBdAAIAABagA6RBIIAAhbIBbAAIAABbgA+QBIIAAhaIBdAAIAABagARZBIIAAhaIBZAAIAABagAFeBIIAAhaIBbAAIAABagABgBIIAAhaIBbAAIAABagAkcBIIAAhaIBcAAIAABagAqYBIIAAhaIBbAAIAABagAsYBIQgEhLAIgJQAKgKBOAFIAABZgAuMBIIBRg3IAAA3gA8PBIIAAhaIBaAAIAABagEgiLABIIgDgFIgBg1QAAgTAGgHQAJgKBQAFIAABZgAyXBHIAAhMIBkBMgEApxAA1IAAhZIBKAAIAYBZgAaHgJIAAhdIBaAAIAABdgABvg0QgFgBgFgFQgGgGAAgEIgBhPIBdAAIAABgQhAAAgMgBgA0Tg0IAAhdQArgOASAnIAoBEgATWg1IAAhdIBdAAIAABdgARZg1IAAhdIBZAAIAABdgAFeg1IAAhdIBbAAIAABdgAobg1IAAhcIBcAAIAABcgA4Sg1IAAhdIBcAAIAABdgAPYg1IAAheIBdAAIAABegANZg1IAAhdIBdAAIAABdgAJbg1IAAhdIBdAAIAABdgAieg1IAAhdIBdAAIAABdgAqWg1QgLgzAXgYQAXgYA2AHIAABcgAHdg2IAAhcIBbAAIAABcgA2Tg2IAAhdIBbAAIAABdgA+Pg2IAAhcIBdAAIAABcgEggMgA2QgKgvAYgYQAXgZA0ADIAABdgAgfg3IAAhcIBaAAIAABcgAJbi0IAAhcIBdAAIAABcgABhi0IAAhbIBaAAIAABbgA2Ti0IAAhaIAHgDQBBgHAOAQQAPARgLBDgAVVi0IAAhdIBSAAQADABAFAFQAFAFAAAEIAABOgAPYi0IAAhcIBdAAIAABcgANYi0IAAhbIBdAAIAABbgAFei0IAAhcIBbAAIAABcgApmi0IANhbQAQgGAIAGQAIAFgCAUQgBAMABAUIAAAigA8Qi0IAAhbIBbAAIAABbgAkci1IAAhbIBcAAIAABbgA4Si1IAAhbIBdAAIAABbgA+Ni1QgFgUAbgcQAbgcApgQIACARIAABLgAHdi1IAAhbIBcAAIAABbgADei1IAAhaIBcAAIAABagAiei1IAAhbIBdAAIAABbgAoci1IAAhbIBeAAIAABbgAYzlEQA/gFATATQATAUgJA8IhcABgAQZkyIg8gBIgFgCIAAhbIBdAAIACA/QABAVgFAFQgGAFgRAAIgDAAgApbk1QgKgFgDgTQgDgNgGgTIgMgiIA/AAIAABaQgKADgIAAQgHAAgEgDgARZk0IAAhbIBZAAIAABbgAFek0IAAhbIBbAAIAABbgAgfk0IAAhbIBaAAIAABbgAkdk0IAAhbIBbAAIAABbgA2Tk0IAAg+IAHgGIA8BEgA6Rk0IAAhbIBbAAIAABbgA8Sk0IBdhIIAABIgANYk0IAAhbIBeAAIAABbgALak0IAAhbIBdAAIAABbgAHek0IAAhaIBbAAIAABagABgk0IAAhcIBaAAIAABcgAiek0IAAhcIBdAAIAABcgAmbk0IAAhbIBcAAIAABbgAobk0IAAhbIBdAAIAABbgA4Tk0IAAhdIBNABQAFAAAGAGQAGAFABAEIAABNgAJbk1IAAhaIBdAAIAABagADgk1IAAhbIBaAAIAABbgEArKgFzIAAhbIBcAAIAABbgAqFmxQgGgBgGgIQgHgIgBgHQgCgOABgUIAAgjIBdAAIAABeIgkABIgIAAQgQAAgMgCgAPYmxIAAhdIBdAAIAABdgAJamxIAAheIBeAAIAABegAHdmxIAAhdIBbAAIAABdgAiemxIAAheIBdAAIAABegAkdmxIAAheIBbAAIAABegAFemyIAAhdIBaAAIAABdgADemyIAAhcIBcAAIAABcgAmcmyIAAhcIBdAAIAABcgAocmyIAAhcIBdAAIAABcgANYmyIAAhdIBcAAIAABdgAgfmyIAAhcIBbAAIAABcgAZfnXIAAheIBeAAIAABegATxndIAAheIBaAAIAABegAr3pQIgPggQgJgTgKgJIBeAAIAABbIgKAAQghAAgRgfgAgeoxIAAhcIBaAAIAABcgADfoyIAAhdIBPABQAEAAAFAGQAEAFABAEIAABNgABgoyIAAhcIBbAAIAABcgAieoyIAAhbIBdAAIAABbgAJboyIAAhbIBeAAIAABbgAkdoyIAAhbIBcAAIAABbgAmboyIAAhbIBdAAIAABbgAoboyIAAhbIBdAAIAABbgANWozQAAg/ABgNQAAgEAGgGQAGgFAEAAQANgBBCAAIAABcgALbozIAAhbIBbAAIAABbgAHdozIAAhaIBbAAIAABagAcwp2IAAhdIBdAAIAABdgAOAqpIAAhdIBaAAIAABdgAgequIgDgfIBdgJIAAAogAmbquIAAheIBcAAIAABegAoaquIAAhdIBbAAIAABdgAJaqvIAAhdIBeAAIAABdgABiqvQgIgZAHgOQAHgOAZgEQAMgCARgGIAdgLIAABMgAieqvIAAgpIBdAJIAAAggAFdqvIAAhcIBcAAIAABcgADdqvIgBgnIABgmQABgFAGgFQAGgGAFgBQAMgBBAAAIAABfgAtwsMIA1AAIAABRgASdrcIAAhbIBdAAIAABbgAuMs3QgVgTAKhCIALgCIBRAAIAABcQgaAGgSAAQgZAAgMgLgAHgsuQgLgyAXgYQAWgYA3AEIAABegAFesvIgEgIQAPgOAegLQAogPAKgGIAAA2gAocsvIAAhLQAGAFAzAXQAiAQAJAfgAqYsvIAAhfIAlAAQAWAAAPABQAFABAGAHQAHAIAAAFQACAPgBAVIAAAlgAPYsvIAAheIBdAAIAABegALnt0IAAhcIBcAAIAABcgAsZuvIAAhGIA2AbQAhAQAPAbgAT+uvIAAhaIBaAAIAABagAuZuvIAAhcIAmAAQAWAAAOABQAGABAHAHQAHAHAAAFQACAOAAAVIgBAkgANzu7IAAhcIBbAAIAABcgEAz/gPuIAAhdIBcAAIAABdgAwWxvIBUApQADACADAGQADAFgBAEQgBADgFAEQgFADgEAAIhNABgAyWwsIAAhbQBBgOASASQATASgKBFgAzvxaQghgSgJgfIBRAAIAQABIAABQQgFgEgygcgARRyHIAAhbIBbAAIAABbgEAoxgTRIAAhfIBJABQAEAAAFAFQAFAFABAFIAKBPgAdy1xIgCgVQAAgmANgQQAOgPAmgFQAdgEAAAaIAABJgEAiigc6IAAhcIBdAAIAABcgEAtCgeaIAAhbIBdAAIAABbg");
	this.shape_266.setTransform(110.5,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_266).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505.3,-229.6,957.7,421.7);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgGAIQgDgDAAgFQAAgEADgDQADgCADAAQAFAAADACQADADAAAEQAAAFgDADQgDACgFAAQgDAAgDgCg");
	this.shape.setTransform(164.9,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgCADAAQAEAAADACQADADABAEQgBAEgDAEQgDACgEABQgDgBgDgCg");
	this.shape_1.setTransform(164.6,69.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgHAHQgCgCAAgFQAAgDACgEQADgDAEAAQAFAAADADQACAEAAADQAAAFgCACQgDADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(164.3,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQADADABADQgBAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_3.setTransform(163.7,71.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQACADAAAEQAAAEgCADQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(163.4,72.7);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgGAIQgDgDAAgFQAAgDADgEQADgDADAAQAFAAADADQADAEAAADQAAAFgDADQgDACgFAAQgDAAgDgCg");
	this.shape_5.setTransform(163.1,73.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQADADABADQgBAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_6.setTransform(162.8,74.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgEAEAAQAFAAADAEQACADAAADQAAAEgCADQgDADgFABQgEgBgDgDg");
	this.shape_7.setTransform(162.5,75.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgEADgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_8.setTransform(162.2,75.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADgBQAEABADADQADADABADQgBAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_9.setTransform(161.9,76.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgEAEAAQAFAAADAEQACADAAADQAAAEgCADQgDAEgFAAQgEAAgDgEg");
	this.shape_10.setTransform(161.6,77.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgGAIQgDgEAAgEQAAgEADgCQADgDADAAQAFAAADADQADACAAAEQAAAEgDAEQgDACgFAAQgDAAgDgCg");
	this.shape_11.setTransform(161.3,78.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgDADAAQAEAAADADQADADABADQgBAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_12.setTransform(161,79);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEgBQAFABADADQACADAAADQAAAEgCADQgDAEgFAAQgEAAgDgEg");
	this.shape_13.setTransform(160.7,79.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgCADAAQAEAAADACQADADABAEQgBAEgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_14.setTransform(160.1,81.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgGAIQgDgDgBgFQABgDADgDQADgDADAAQAEAAADADQAEADAAADQAAAFgEADQgDADgEAAQgDAAgDgDg");
	this.shape_15.setTransform(159.9,82.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_16.setTransform(159.6,82.9);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgHAIQgCgDAAgFQAAgEACgDQADgCAEAAQAFAAADACQACADAAAEQAAAFgCADQgDACgFAAQgEAAgDgCg");
	this.shape_17.setTransform(159.3,83.7);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgGAHQgDgDgBgEQABgEADgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_18.setTransform(159,84.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgHAHQgDgCAAgFQAAgDADgEQADgCAEAAQAEAAADACQADAEAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_19.setTransform(158.7,85.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgGAHQgDgDgBgEQABgDADgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDADgEABQgDgBgDgDg");
	this.shape_20.setTransform(158.1,86.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_21.setTransform(157.8,87.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgGAHQgDgDgBgEQABgDADgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_22.setTransform(157.2,89.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgDADgDQADgEAEAAQAEAAADAEQADADAAADQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_23.setTransform(156.9,89.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgHAIQgCgDAAgFQAAgDACgDQADgDAEAAQAFAAADADQACADAAADQAAAFgCADQgDADgFAAQgEAAgDgDg");
	this.shape_24.setTransform(156.6,90.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgGAHQgDgDgBgEQABgDADgDQADgDADgBQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_25.setTransform(156.3,91.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgDADgDQADgEAEAAQAEAAADAEQADADAAADQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_26.setTransform(156,92.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAFAAADACQACADAAAEQAAAEgCAEQgDACgFAAQgEAAgDgCg");
	this.shape_27.setTransform(155.7,93);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgEADAAQAFAAACAEQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_28.setTransform(155,96.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQADADABAEQgBAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_29.setTransform(155.2,97.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgGAIQgDgDgBgFQABgEADgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_30.setTransform(155.4,98.2);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgDAEgBQAEABAEADQACADAAADQAAAEgCADQgEAEgEAAQgEAAgCgEg");
	this.shape_31.setTransform(155.6,99.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgHAHQgCgCAAgFQAAgDACgEQADgCAEAAQAFAAADACQACAEAAADQAAAFgCACQgDADgFAAQgEAAgDgDg");
	this.shape_32.setTransform(155.8,100.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgDAEAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_33.setTransform(156,101);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAFgEADQgDADgEAAQgDAAgDgDg");
	this.shape_34.setTransform(156.2,101.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgEADAAQAFAAADAEQACADAAADQAAAEgCADQgDADgFABQgDgBgEgDg");
	this.shape_35.setTransform(156.8,104.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgEAEAAQAEAAAEAEQACADAAADQAAAEgCADQgEAEgEAAQgEAAgDgEg");
	this.shape_36.setTransform(157.4,107.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADgBQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_37.setTransform(158,110.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgGAHQgDgCAAgFQAAgDADgEQADgCADAAQAFAAADACQADAEAAADQAAAFgDACQgDADgFAAQgDAAgDgDg");
	this.shape_38.setTransform(158.2,111.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgDADgDQAEgDADAAQAFAAADADQACADAAADQAAAFgCADQgDADgFAAQgDAAgEgDg");
	this.shape_39.setTransform(158.6,113.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQADADABAEQgBAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_40.setTransform(158.8,114.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgGAIQgDgEgBgEQABgEADgDQADgCADAAQAEAAADACQAEADAAAEQAAAEgEAEQgDACgEAAQgDAAgDgCg");
	this.shape_41.setTransform(159,115.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgEAEAAQAEAAAEAEQACADAAADQAAAEgCADQgEADgEABQgEgBgDgDg");
	this.shape_42.setTransform(159.2,116);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_43.setTransform(159.8,118.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADgBQAFABACADQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_44.setTransform(160.4,121.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgGAHQgEgCAAgFQAAgDAEgEQADgCADAAQAEAAADACQADAEABADQgBAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_45.setTransform(160.6,122.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgHAIQgCgDAAgFQAAgDACgDQADgDAEAAQAEAAAEADQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_46.setTransform(161,124.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgHAIQgDgEAAgEQAAgEADgCQADgDAEAAQAEAAADADQADACAAAEQAAAEgDAEQgDACgEAAQgEAAgDgCg");
	this.shape_47.setTransform(161.4,126.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDADgEABQgDgBgDgDg");
	this.shape_48.setTransform(161.6,127.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgCADAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_49.setTransform(162,129.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDADQgDAEgFAAQgDAAgDgEg");
	this.shape_50.setTransform(162.2,130.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgGAIQgDgDgBgFQABgDADgEQADgDADAAQAEAAADADQAEAEAAADQAAAFgEADQgDACgEAAQgDAAgDgCg");
	this.shape_51.setTransform(163,133.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgGAIQgEgEAAgEQAAgEAEgCQADgDADAAQAEAAADADQAEACAAAEQAAAEgEAEQgDACgEAAQgDAAgDgCg");
	this.shape_52.setTransform(163.8,137.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDADQgDADgFABQgDgBgDgDg");
	this.shape_53.setTransform(164,138.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgCADAAQAFAAACACQADADAAAEQAAAFgDADQgCACgFAAQgDAAgEgCg");
	this.shape_54.setTransform(164.4,140.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEgBQAEABAEADQADADAAADQAAAEgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_55.setTransform(165,143.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_56.setTransform(165.4,145.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgHAIQgDgEAAgEQAAgEADgCQAEgDADAAQAFAAACADQADACAAAEQAAAEgDAEQgCACgFAAQgDAAgEgCg");
	this.shape_57.setTransform(166.2,148.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgGAIQgDgDAAgFQAAgEADgDQACgCAEAAQAEAAAEACQACADAAAEQAAAFgCADQgEACgEAAQgEAAgCgCg");
	this.shape_58.setTransform(166.8,151.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADgBQAFABADADQADADAAADQAAAEgDADQgDAEgFAAQgDAAgDgEg");
	this.shape_59.setTransform(167.6,155.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AgHAIQgCgDAAgFQAAgDACgEQADgDAEAAQAFAAADADQACAEAAADQAAAFgCADQgDACgFAAQgEAAgDgCg");
	this.shape_60.setTransform(167.8,156.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AgHAIQgCgEAAgEQAAgEACgCQADgDAEAAQAEAAAEADQACACAAAEQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_61.setTransform(168.6,160.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AgHAIQgCgDAAgFQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAFgCADQgEACgEAAQgEAAgDgCg");
	this.shape_62.setTransform(168.6,155.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgDADgDQAEgDADgBQAFABACADQADADAAADQAAAEgDADQgCAEgFAAQgDAAgEgEg");
	this.shape_63.setTransform(168.5,153.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCAEQgEADgEAAQgEAAgDgDg");
	this.shape_64.setTransform(168.2,145.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgHAIQgDgDAAgFQAAgDADgEQAEgDADAAQAFAAADADQACAEAAADQAAAFgCADQgDACgFAAQgDAAgEgCg");
	this.shape_65.setTransform(167.6,132);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAFAAADACQACADAAAEQAAAEgCAEQgDACgFABQgEgBgDgCg");
	this.shape_66.setTransform(167.4,126.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDADQgEADgEABQgEgBgDgDg");
	this.shape_67.setTransform(167.3,124.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AgGAIQgDgDAAgFQAAgDADgDQACgDAEAAQAEAAAEADQACADAAADQAAAFgCADQgEADgEAAQgEAAgCgDg");
	this.shape_68.setTransform(166.8,113.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgGAHQgDgCgBgFQABgDADgEQADgCADAAQAEAAADACQAEAEAAADQAAAFgEACQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(166.2,97.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgHAHQgCgDAAgEQAAgEACgDQADgDAEAAQAEAAAEADQACADAAAEQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_70.setTransform(165.9,92.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAFAAADACQADADAAAEQAAAEgDAEQgDACgFABQgDgBgDgCg");
	this.shape_71.setTransform(165.8,89.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AgHAIQgCgDAAgFQAAgEACgDQADgCAEAAQAEAAAEACQADADAAAEQAAAFgDADQgEACgEAAQgEAAgDgCg");
	this.shape_72.setTransform(165.5,82);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AgGAHQgDgCAAgFQAAgDADgEQADgDADAAQAFAAADADQADAEAAADQAAAFgDACQgDADgFAAQgDAAgDgDg");
	this.shape_73.setTransform(165.4,79.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:164.3,y:70.4}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:163.7,y:71.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{x:162.8,y:74.3}}]},1).to({state:[{t:this.shape_7,p:{x:162.5,y:75.1}}]},1).to({state:[{t:this.shape_8,p:{x:162.2,y:75.9}}]},1).to({state:[{t:this.shape_9,p:{x:161.9,y:76.6}}]},1).to({state:[{t:this.shape_10,p:{x:161.6,y:77.4}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{x:160.7,y:79.8}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:159.9,y:82.1}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{x:159,y:84.4}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21,p:{x:157.8,y:87.6}}]},1).to({state:[{t:this.shape_13,p:{x:157.5,y:88.3}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24,p:{x:156.6,y:90.7}}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{x:155.7,y:93}}]},1).to({state:[{t:this.shape_15,p:{x:155.4,y:93.8}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{x:156.2,y:101.9}}]},1).to({state:[{t:this.shape_8,p:{x:156.4,y:102.9}}]},1).to({state:[{t:this.shape_27,p:{x:156.6,y:103.8}}]},1).to({state:[{t:this.shape_35,p:{x:156.8,y:104.8}}]},1).to({state:[{t:this.shape_3,p:{x:157,y:105.7}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_36,p:{x:157.4,y:107.6}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_37,p:{x:158,y:110.4}}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_24,p:{x:158.4,y:112.3}}]},1).to({state:[{t:this.shape_39,p:{x:158.6,y:113.2}}]},1).to({state:[{t:this.shape_40,p:{x:158.8,y:114.1}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_7,p:{x:159.4,y:116.9}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_44,p:{x:160.4,y:121.6}}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_15,p:{x:160.8,y:123.5}}]},1).to({state:[{t:this.shape_46,p:{x:161,y:124.4}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{x:162.2,y:130.1}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_44,p:{x:162.6,y:132}}]},1).to({state:[{t:this.shape_9,p:{x:162.8,y:132.9}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_46,p:{x:163.2,y:134.8}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_21,p:{x:163.6,y:136.6}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_6,p:{x:164.6,y:141.3}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_55,p:{x:165,y:143.2}}]},1).to({state:[{t:this.shape_13,p:{x:165.2,y:144.1}}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_34,p:{x:165.6,y:146}}]},1).to({state:[{t:this.shape_8,p:{x:165.8,y:147}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_3,p:{x:166.4,y:149.8}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_10,p:{x:167,y:152.6}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_37,p:{x:167.4,y:154.5}}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_39,p:{x:168,y:157.3}}]},1).to({state:[{t:this.shape_40,p:{x:168.2,y:158.2}}]},1).to({state:[{t:this.shape_18,p:{x:168.4,y:159.1}}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_7,p:{x:168.8,y:161}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_2,p:{x:168.4,y:150.5}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_35,p:{x:168,y:142.6}}]},1).to({state:[{t:this.shape_10,p:{x:167.9,y:140}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_55,p:{x:167.7,y:134.7}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67,p:{x:167.3,y:124.1}}]},1).to({state:[{t:this.shape_50,p:{x:167.2,y:121.5}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_13,p:{x:166.9,y:116.2}}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_8,p:{x:166.7,y:111}}]},1).to({state:[{t:this.shape_27,p:{x:166.6,y:108.3}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_36,p:{x:166.4,y:103.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_24,p:{x:166,y:95.2}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_10,p:{x:165.6,y:84.6}}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_15,p:{x:165.3,y:76.7}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_67,p:{x:165,y:71.5}}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:164,y:71.2},0).to({_off:true},1).wait(11).to({_off:false,x:160.4,y:80.5},0).to({_off:true},1).wait(44).to({_off:false,x:160,y:119.8},0).to({_off:true},1).wait(66).to({_off:false,x:166.3,y:100.4},0).to({_off:true},1).wait(11).to({_off:false,x:164.9,y:68.8},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(5).to({_off:false},0).to({_off:true},1).wait(60).to({_off:false,x:161.2,y:125.4},0).to({_off:true},1).wait(10).to({_off:false,x:163.4,y:135.7},0).to({_off:true},1).wait(12).to({_off:false,x:166,y:147.9},0).to({_off:true},1).wait(18).to({_off:false,x:168.3},0).to({_off:true},1).wait(6).to({_off:false,x:167.5,y:129.4},0).to({_off:true},1).wait(20).to({_off:false,x:165.1,y:74.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(18).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false,x:155.1,y:94.6},0).to({_off:true},1).wait(15).to({_off:false,x:157.8,y:109.4},0).to({_off:true},1).wait(8).to({_off:false,x:159.6,y:117.9},0).to({_off:true},1).wait(10).to({_off:false,x:161.8,y:128.2},0).to({_off:true},1).wait(26).to({_off:false,x:167.2,y:153.5},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(19).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:158.4,y:86},0).to({_off:true},1).wait(11).to({_off:false,x:154.8,y:95.4},0).to({_off:true},1).wait(13).to({_off:false,x:157.6,y:108.5},0).to({_off:true},1).wait(12).to({_off:false,x:160.2,y:120.7},0).to({_off:true},1).wait(10).to({_off:false,x:162.4,y:131},0).to({_off:true},1).wait(8).to({_off:false,x:164.2,y:139.5},0).to({_off:true},1).wait(23).to({_off:false,x:168.7,y:158.4},0).to({_off:true},1).wait(7).to({_off:false,x:167.8,y:137.3},0).to({_off:true},1).wait(6).to({_off:false,x:167,y:118.9},0).to({_off:true},1).wait(4).to({_off:false,x:166.5,y:105.7},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(37).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,x:157.2,y:106.6},0).to({_off:true},1).wait(37).to({_off:false,x:164.8,y:142.3},0).to({_off:true},1).wait(8).to({_off:false,x:166.6,y:150.7},0).to({_off:true},1).wait(38).to({_off:false,x:165.7,y:87.3},0).to({_off:true},1).wait(7));

	// Слой 19
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AroB/IXRj9");
	this.shape_74.setTransform(260.8,218.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArhCBIXDkB");
	this.shape_75.setTransform(260,218.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArZCDIWzkE");
	this.shape_76.setTransform(259.3,218.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArSCFIWlkJ");
	this.shape_77.setTransform(258.6,218.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArLCGIWXkL");
	this.shape_78.setTransform(257.8,218);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArDCIIWHkP");
	this.shape_79.setTransform(257.1,217.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq8CKIV5kT");
	this.shape_80.setTransform(256.3,217.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq1CLIVrkV");
	this.shape_81.setTransform(255.6,217.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqtCNIVbka");
	this.shape_82.setTransform(254.9,217.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqmCPIVNkd");
	this.shape_83.setTransform(254.1,217.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqfCRIU/kh");
	this.shape_84.setTransform(253.4,217);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqXCTIUvkl");
	this.shape_85.setTransform(252.7,216.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqQCUIUhkn");
	this.shape_86.setTransform(251.9,216.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqICXIURks");
	this.shape_87.setTransform(251.2,216.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqBCYIUDkv");
	this.shape_88.setTransform(250.5,216.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ap5CaITzkz");
	this.shape_89.setTransform(249.7,216.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApyCcITlk3");
	this.shape_90.setTransform(249,215.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AprCeITXk7");
	this.shape_91.setTransform(248.3,215.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApkCfITJk9");
	this.shape_92.setTransform(247.5,215.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApcChIS5lB");
	this.shape_93.setTransform(246.8,215.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApVCjISrlF");
	this.shape_94.setTransform(246,215.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApOClISdlJ");
	this.shape_95.setTransform(245.3,215);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApGCnISNlN");
	this.shape_96.setTransform(244.6,214.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ao/CoIR/lP");
	this.shape_97.setTransform(243.8,214.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ao3CqIRvlT");
	this.shape_98.setTransform(243.1,214.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AowCsIRhlX");
	this.shape_99.setTransform(242.4,214.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AopCuIRTlb");
	this.shape_100.setTransform(241.6,214.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AohCwIRDlf");
	this.shape_101.setTransform(240.9,213.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoaCyIQ1lj");
	this.shape_102.setTransform(240.2,213.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoTCzIQnll");
	this.shape_103.setTransform(239.4,213.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoLC1IQXlp");
	this.shape_104.setTransform(238.7,213.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoEC3IQJlt");
	this.shape_105.setTransform(237.9,213.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An8C5IP5lx");
	this.shape_106.setTransform(237.2,213);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An1C6IPrl0");
	this.shape_107.setTransform(236.5,212.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnuC8IPdl3");
	this.shape_108.setTransform(235.7,212.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnpC9IPTl6");
	this.shape_109.setTransform(236.4,212.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnlC/IPLl8");
	this.shape_110.setTransform(237,212.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnhDAIPDl/");
	this.shape_111.setTransform(237.6,212.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AndDBIO7mB");
	this.shape_112.setTransform(238.3,212.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnZDCIOzmD");
	this.shape_113.setTransform(238.9,212.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnVDDIOrmF");
	this.shape_114.setTransform(239.5,212.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnRDEIOjmH");
	this.shape_115.setTransform(240.1,212);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnNDGIOamL");
	this.shape_116.setTransform(240.8,212);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnIDHIORmN");
	this.shape_117.setTransform(241.4,211.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnEDIIOJmP");
	this.shape_118.setTransform(242,211.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnADJIOBmR");
	this.shape_119.setTransform(242.7,211.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am8DKIN5mT");
	this.shape_120.setTransform(243.3,211.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am3DLINwmV");
	this.shape_121.setTransform(243.9,211.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmzDNINnmY");
	this.shape_122.setTransform(244.5,211.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmvDNINfma");
	this.shape_123.setTransform(245.2,211.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmrDPINXmd");
	this.shape_124.setTransform(245.8,211.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmnDQINPmf");
	this.shape_125.setTransform(246.4,211.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmjDRINHmh");
	this.shape_126.setTransform(247,211.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmeDSIM+mj");
	this.shape_127.setTransform(247.7,211);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmbDUIM2mm");
	this.shape_128.setTransform(248.3,211);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmWDVIMtmp");
	this.shape_129.setTransform(248.9,210.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmSDWIMlmr");
	this.shape_130.setTransform(249.6,210.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmODXIMdmt");
	this.shape_131.setTransform(250.2,210.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmKDYIMUmv");
	this.shape_132.setTransform(250.8,210.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmFDZIMMmx");
	this.shape_133.setTransform(251.5,210.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmBDaIMDmz");
	this.shape_134.setTransform(252.1,210.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al9DbIL7m2");
	this.shape_135.setTransform(252.7,210.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al5DdILzm5");
	this.shape_136.setTransform(253.3,210.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al1DeILrm7");
	this.shape_137.setTransform(254,210.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlxDfILjm9");
	this.shape_138.setTransform(254.6,210.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlsDgILam/");
	this.shape_139.setTransform(255.2,210);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AloDhILRnB");
	this.shape_140.setTransform(255.8,209.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlkDjILJnF");
	this.shape_141.setTransform(256.5,209.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlgDkILBnH");
	this.shape_142.setTransform(257.1,209.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlcDlIK5nJ");
	this.shape_143.setTransform(257.7,209.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlYDmIKwnL");
	this.shape_144.setTransform(258.4,209.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlTDnIKnnN");
	this.shape_145.setTransform(259,209.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlPDpIKfnR");
	this.shape_146.setTransform(259.6,209.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlLDqIKXnT");
	this.shape_147.setTransform(260.3,209.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlHDrIKPnV");
	this.shape_148.setTransform(260.9,209.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlDDsIKHnX");
	this.shape_149.setTransform(261.5,209.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak/DtIJ/nZ");
	this.shape_150.setTransform(262.1,209.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak7DuIJ3nb");
	this.shape_151.setTransform(262.8,209);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak2DwIJtne");
	this.shape_152.setTransform(263.4,208.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkyDwIJlng");
	this.shape_153.setTransform(264,208.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkuDyIJdnj");
	this.shape_154.setTransform(264.7,208.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkqDzIJVnl");
	this.shape_155.setTransform(265.3,208.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AklD0IJMnn");
	this.shape_156.setTransform(265.9,208.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkhD1IJDnp");
	this.shape_157.setTransform(266.5,208.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkdD2II7nr");
	this.shape_158.setTransform(267.2,208.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkZD4IIznv");
	this.shape_159.setTransform(267.8,208.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkVD5IIrnx");
	this.shape_160.setTransform(268.4,208.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkRD6IIjnz");
	this.shape_161.setTransform(269,208.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkMD7IIan1");
	this.shape_162.setTransform(269.7,208.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkJD8IITn3");
	this.shape_163.setTransform(270.3,208);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkED9IIJn5");
	this.shape_164.setTransform(270.9,207.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkAD+IIBn8");
	this.shape_165.setTransform(271.6,207.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj8EAIH5n+");
	this.shape_166.setTransform(272.2,207.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj3EBIHwoB");
	this.shape_167.setTransform(272.8,207.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjzECIHnoD");
	this.shape_168.setTransform(273.5,207.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjvEDIHfoF");
	this.shape_169.setTransform(274.1,207.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjrEEIHXoH");
	this.shape_170.setTransform(274.7,207.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjnEFIHPoK");
	this.shape_171.setTransform(275.3,207.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjjEHIHHoN");
	this.shape_172.setTransform(276,207.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjfEIIG/oP");
	this.shape_173.setTransform(276.6,207.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjaEJIG1oR");
	this.shape_174.setTransform(277.2,207);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjWEKIGtoT");
	this.shape_175.setTransform(277.8,207);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjSELIGloV");
	this.shape_176.setTransform(278.5,206.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjOEMIGdoX");
	this.shape_177.setTransform(279.1,206.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjKEOIGVoa");
	this.shape_178.setTransform(279.7,206.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjZEJIGzoS");
	this.shape_179.setTransform(279.2,207.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjpEFIHToJ");
	this.shape_180.setTransform(278.6,207.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj4EBIHxoB");
	this.shape_181.setTransform(278.1,207.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkID9IIRn5");
	this.shape_182.setTransform(277.6,208.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkXD5IIvnx");
	this.shape_183.setTransform(277,208.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AknD1IJPnp");
	this.shape_184.setTransform(276.5,208.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak2DxIJtnh");
	this.shape_185.setTransform(275.9,209.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlGDtIKNnZ");
	this.shape_186.setTransform(275.4,209.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlVDpIKrnR");
	this.shape_187.setTransform(274.9,209.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AllDlILLnJ");
	this.shape_188.setTransform(274.3,210.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al0DhILpnB");
	this.shape_189.setTransform(273.8,210.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmEDdIMJm5");
	this.shape_190.setTransform(273.2,210.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmTDZIMnmx");
	this.shape_191.setTransform(272.7,211.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmjDVINHmp");
	this.shape_192.setTransform(272.1,211.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmyDQINlmf");
	this.shape_193.setTransform(271.6,211.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnCDNIOFmY");
	this.shape_194.setTransform(271.1,212.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnRDIIOjmQ");
	this.shape_195.setTransform(270.5,212.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnhDEIPDmH");
	this.shape_196.setTransform(270,212.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnwDAIPhl/");
	this.shape_197.setTransform(269.4,213.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoAC8IQBl3");
	this.shape_198.setTransform(268.9,213.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoPC4IQflv");
	this.shape_199.setTransform(268.4,214);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoeC0IQ+ln");
	this.shape_200.setTransform(267.8,214.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AouCwIRdlf");
	this.shape_201.setTransform(267.3,214.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ao9CsIR7lX");
	this.shape_202.setTransform(266.7,215);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApNCoISblP");
	this.shape_203.setTransform(266.2,215.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApdCjIS7lF");
	this.shape_204.setTransform(265.6,215.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ApsCfITZk9");
	this.shape_205.setTransform(265.1,216);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ap8CbIT4k2");
	this.shape_206.setTransform(264.6,216.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqLCYIUXku");
	this.shape_207.setTransform(264,216.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqbCTIU3kl");
	this.shape_208.setTransform(263.5,217);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqqCPIVVkd");
	this.shape_209.setTransform(262.9,217.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq6CLIV1kV");
	this.shape_210.setTransform(262.4,217.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArJCHIWTkN");
	this.shape_211.setTransform(261.9,218.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArZCDIWykF");
	this.shape_212.setTransform(261.3,218.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74}]}).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_74}]},1).wait(1));

	// Слой 18
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AFbMfIq149");
	this.shape_213.setTransform(300.6,126.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlXsfIKvY/");
	this.shape_214.setTransform(299.4,125.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlUsfIKpY/");
	this.shape_215.setTransform(298.3,125.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlRsgIKjZB");
	this.shape_216.setTransform(297.1,124.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlNsgIKbZC");
	this.shape_217.setTransform(295.9,124.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlKshIKVZD");
	this.shape_218.setTransform(294.8,124);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlHsiIKPZF");
	this.shape_219.setTransform(293.6,123.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlEsjIKJZH");
	this.shape_220.setTransform(292.5,123.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlAsjIKBZH");
	this.shape_221.setTransform(291.3,122.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak9skIJ7ZJ");
	this.shape_222.setTransform(290.2,122.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak6skIJ1ZJ");
	this.shape_223.setTransform(289.1,121.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak3slIJvZL");
	this.shape_224.setTransform(287.9,121.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak0slIJpZM");
	this.shape_225.setTransform(286.7,121.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkwsmIJhZN");
	this.shape_226.setTransform(285.6,120.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AktsnIJbZP");
	this.shape_227.setTransform(284.4,120.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkqsoIJVZR");
	this.shape_228.setTransform(283.3,119.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AknsoIJPZR");
	this.shape_229.setTransform(282.1,119.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkkspIJJZT");
	this.shape_230.setTransform(281,119);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkhspIJCZT");
	this.shape_231.setTransform(279.8,118.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkdsqII7ZV");
	this.shape_232.setTransform(278.7,118.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkasqII1ZW");
	this.shape_233.setTransform(277.5,117.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkXsrIIvZX");
	this.shape_234.setTransform(276.4,117.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkUssIIoZZ");
	this.shape_235.setTransform(275.2,116.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkQssIIiZZ");
	this.shape_236.setTransform(274.1,116.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkNstIIbZb");
	this.shape_237.setTransform(272.9,116);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkKsuIIVZd");
	this.shape_238.setTransform(271.8,115.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkHsuIIPZd");
	this.shape_239.setTransform(270.6,115.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkDsvIIIZf");
	this.shape_240.setTransform(269.5,114.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkBswIIDZg");
	this.shape_241.setTransform(268.3,114.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj9swIH7Zh");
	this.shape_242.setTransform(267.1,113.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj6sxIH1Zj");
	this.shape_243.setTransform(266,113.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj3syIHvZl");
	this.shape_244.setTransform(264.8,113.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj0syIHpZl");
	this.shape_245.setTransform(263.7,112.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjwszIHhZn");
	this.shape_246.setTransform(262.5,112.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ADuM0Inb5n");
	this.shape_247.setTransform(261.4,111.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjrstIHXZb");
	this.shape_248.setTransform(261.8,112.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjpsnIHTZP");
	this.shape_249.setTransform(262.2,112.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjoshIHRZD");
	this.shape_250.setTransform(262.6,113);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjmsbIHNY3");
	this.shape_251.setTransform(263,113.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjksVIHJYr");
	this.shape_252.setTransform(263.4,113.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjisPIHFYf");
	this.shape_253.setTransform(263.8,114.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjgsJIHBYT");
	this.shape_254.setTransform(264.2,114.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjesDIG9YG");
	this.shape_255.setTransform(264.6,115.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ajcr9IG5X7");
	this.shape_256.setTransform(265,115.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ajar3IG1Xv");
	this.shape_257.setTransform(265.4,115.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjZrxIGzXj");
	this.shape_258.setTransform(265.8,116.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjWrqIGuXV");
	this.shape_259.setTransform(266.2,116.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjVrkIGqXJ");
	this.shape_260.setTransform(266.6,117.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjTreIGmW9");
	this.shape_261.setTransform(267,117.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjRrYIGjWx");
	this.shape_262.setTransform(267.4,117.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjPrSIGfWl");
	this.shape_263.setTransform(267.8,118.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjNrMIGbWZ");
	this.shape_264.setTransform(268.2,118.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjLrGIGXWN");
	this.shape_265.setTransform(268.6,119.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjJrAIGTWB");
	this.shape_266.setTransform(269,119.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjHq6IGPV1");
	this.shape_267.setTransform(269.4,119.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjFq0IGMVp");
	this.shape_268.setTransform(269.8,120.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjEquIGIVd");
	this.shape_269.setTransform(270.2,120.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjCqnIGEVQ");
	this.shape_270.setTransform(270.6,121.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjAqhIGBVD");
	this.shape_271.setTransform(271,121.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai+qbIF9U3");
	this.shape_272.setTransform(271.4,122);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai8qVIF5Ur");
	this.shape_273.setTransform(271.8,122.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai6qPIF1Uf");
	this.shape_274.setTransform(272.2,122.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai4qJIFxUT");
	this.shape_275.setTransform(272.6,123.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai2qDIFtUH");
	this.shape_276.setTransform(273,123.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai0p9IFpT7");
	this.shape_277.setTransform(273.4,124);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aiyp3IFlTv");
	this.shape_278.setTransform(273.8,124.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiwpxIFhTj");
	this.shape_279.setTransform(274.2,124.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AivprIFfTX");
	this.shape_280.setTransform(274.6,125.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AitplIFbTL");
	this.shape_281.setTransform(275,125.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AirpfIFXS/");
	this.shape_282.setTransform(275.4,126.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AippYIFTSx");
	this.shape_283.setTransform(275.8,126.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AinpSIFPSl");
	this.shape_284.setTransform(276.2,126.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AilpMIFLSZ");
	this.shape_285.setTransform(276.6,127.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AijpGIFHSN");
	this.shape_286.setTransform(277,127.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AihpAIFDSB");
	this.shape_287.setTransform(277.4,128.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aifo6IE/R1");
	this.shape_288.setTransform(277.8,128.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aieo0IE9Rp");
	this.shape_289.setTransform(278.3,128.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AibouIE4Rd");
	this.shape_290.setTransform(278.7,129.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiaonIE1RQ");
	this.shape_291.setTransform(279,129.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiYohIExRE");
	this.shape_292.setTransform(279.4,130.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiWocIEtQ5");
	this.shape_293.setTransform(279.9,130.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiUoVIEpQr");
	this.shape_294.setTransform(280.3,130.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiSoPIElQf");
	this.shape_295.setTransform(280.7,131.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiQoJIEhQT");
	this.shape_296.setTransform(281.1,131.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiOoDIEdQH");
	this.shape_297.setTransform(281.4,132.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiNn9IEaP7");
	this.shape_298.setTransform(281.9,132.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiKn3IEVPv");
	this.shape_299.setTransform(282.3,133);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiJnxIETPj");
	this.shape_300.setTransform(282.7,133.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiHnrIEPPX");
	this.shape_301.setTransform(283.1,133.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiFnlIELPL");
	this.shape_302.setTransform(283.5,134.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiDnfIEHO+");
	this.shape_303.setTransform(283.9,134.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiBnYIEDOx");
	this.shape_304.setTransform(284.3,135);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah/nTID/On");
	this.shape_305.setTransform(284.7,135.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah9nMID7OZ");
	this.shape_306.setTransform(285.1,135.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah7nGID3ON");
	this.shape_307.setTransform(285.5,136.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah5nAIDzOB");
	this.shape_308.setTransform(285.9,136.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah4m6IDxN1");
	this.shape_309.setTransform(286.3,137);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah1m0IDsNp");
	this.shape_310.setTransform(286.7,137.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah0muIDpNd");
	this.shape_311.setTransform(287.1,137.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhymoIDlNR");
	this.shape_312.setTransform(287.5,138.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhwmiIDhNF");
	this.shape_313.setTransform(287.9,138.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhumcIDdM5");
	this.shape_314.setTransform(288.3,139.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhsmWIDZMt");
	this.shape_315.setTransform(288.7,139.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhqmPIDVMg");
	this.shape_316.setTransform(289.1,139.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ABpGKIjRsU");
	this.shape_317.setTransform(289.5,140.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhvmVIDfMr");
	this.shape_318.setTransform(289.8,139.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah2mhIDtND");
	this.shape_319.setTransform(290.1,139.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah9msID7NZ");
	this.shape_320.setTransform(290.4,139.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiEm4IEJNx");
	this.shape_321.setTransform(290.8,138.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiLnDIEXOH");
	this.shape_322.setTransform(291.1,138.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiSnPIElOf");
	this.shape_323.setTransform(291.4,137.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiZnaIEyO1");
	this.shape_324.setTransform(291.7,137.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AignmIFBPN");
	this.shape_325.setTransform(292,137.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AimnyIFNPk");
	this.shape_326.setTransform(292.3,136.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aitn9IFbP7");
	this.shape_327.setTransform(292.6,136.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai0oIIFpQS");
	this.shape_328.setTransform(293,135.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai7oUIF3Qp");
	this.shape_329.setTransform(293.3,135.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjCogIGFRB");
	this.shape_330.setTransform(293.6,135);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjJorIGTRX");
	this.shape_331.setTransform(293.9,134.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjQo3IGhRv");
	this.shape_332.setTransform(294.2,134.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjXpCIGvSF");
	this.shape_333.setTransform(294.5,133.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjepOIG9Sd");
	this.shape_334.setTransform(294.9,133.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjlpaIHLS1");
	this.shape_335.setTransform(295.2,133);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjrplIHXTL");
	this.shape_336.setTransform(295.5,132.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjypxIHmTj");
	this.shape_337.setTransform(295.8,132.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj5p8IHzT5");
	this.shape_338.setTransform(296.1,131.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkAqIIIBUR");
	this.shape_339.setTransform(296.4,131.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkHqUIIPUp");
	this.shape_340.setTransform(296.8,131);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkOqfIIdU/");
	this.shape_341.setTransform(297.1,130.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkVqrIIrVX");
	this.shape_342.setTransform(297.4,130.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Akcq2II5Vt");
	this.shape_343.setTransform(297.7,129.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkjrCIJHWF");
	this.shape_344.setTransform(298,129.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkqrNIJVWb");
	this.shape_345.setTransform(298.3,129);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkwrZIJiWz");
	this.shape_346.setTransform(298.7,128.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak4rkIJxXJ");
	this.shape_347.setTransform(299,128.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak+rwIJ9Xh");
	this.shape_348.setTransform(299.3,127.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlGr7IKMX3");
	this.shape_349.setTransform(299.6,127.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlMsHIKZYP");
	this.shape_350.setTransform(299.9,127);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlTsTIKnYn");
	this.shape_351.setTransform(300.2,126.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_213}]}).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_213}]},1).wait(1));

	// Слой 17
	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An4BxIPxjh");
	this.shape_352.setTransform(215.4,57.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An1B3IPrjt");
	this.shape_353.setTransform(214.8,57.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnyB9IPlj5");
	this.shape_354.setTransform(214.3,57.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnwCEIPhkH");
	this.shape_355.setTransform(213.7,58);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AntCKIPbkT");
	this.shape_356.setTransform(213.1,58.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnrCRIPWkh");
	this.shape_357.setTransform(212.6,58.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnoCXIPRkt");
	this.shape_358.setTransform(212,58.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnlCdIPLk5");
	this.shape_359.setTransform(211.4,58.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AniCjIPFlG");
	this.shape_360.setTransform(210.9,58.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AngCqIPBlT");
	this.shape_361.setTransform(210.3,58.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AndCwIO7lf");
	this.shape_362.setTransform(209.7,59);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnaC3IO2lt");
	this.shape_363.setTransform(209.2,59.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnYC9IOxl5");
	this.shape_364.setTransform(208.6,59.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnVDDIOrmF");
	this.shape_365.setTransform(208,59.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnTDKIOnmT");
	this.shape_366.setTransform(207.5,59.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnQDQIOhmf");
	this.shape_367.setTransform(206.9,59.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnNDWIObmr");
	this.shape_368.setTransform(206.3,59.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnKDcIOVm3");
	this.shape_369.setTransform(205.8,60.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnHDjIOQnF");
	this.shape_370.setTransform(205.2,60.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnFDpIOLnR");
	this.shape_371.setTransform(204.7,60.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnCDvIOFnd");
	this.shape_372.setTransform(204.1,60.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am/D2IN/nr");
	this.shape_373.setTransform(203.5,60.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am9D8IN7n3");
	this.shape_374.setTransform(203,60.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am6ECIN1oD");
	this.shape_375.setTransform(202.4,60.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am4EJINwoR");
	this.shape_376.setTransform(201.8,61.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am1EPINrod");
	this.shape_377.setTransform(201.3,61.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmyEVINlop");
	this.shape_378.setTransform(200.7,61.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmwEcINho3");
	this.shape_379.setTransform(200.1,61.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmtEiINbpD");
	this.shape_380.setTransform(199.6,61.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmqEoINVpP");
	this.shape_381.setTransform(199,61.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmoEvINRpd");
	this.shape_382.setTransform(198.4,62);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmlE1INLpp");
	this.shape_383.setTransform(197.9,62.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmiE8INFp3");
	this.shape_384.setTransform(197.3,62.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmgFCINBqD");
	this.shape_385.setTransform(196.7,62.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmdFIIM7qP");
	this.shape_386.setTransform(196.2,62.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmfFIIM/qP");
	this.shape_387.setTransform(196.6,63.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmhFHINDqN");
	this.shape_388.setTransform(197,64.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmjFHINHqN");
	this.shape_389.setTransform(197.3,65.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmlFHINLqM");
	this.shape_390.setTransform(197.7,66.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmnFGINPqL");
	this.shape_391.setTransform(198.1,67.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmpFGINTqL");
	this.shape_392.setTransform(198.5,68.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmrFFINXqJ");
	this.shape_393.setTransform(198.9,69.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmtFFINbqJ");
	this.shape_394.setTransform(199.3,70.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmuFFINeqI");
	this.shape_395.setTransform(199.7,71.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmwFEINhqH");
	this.shape_396.setTransform(200.1,72.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmzFEINnqH");
	this.shape_397.setTransform(200.5,73.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am1FDINrqF");
	this.shape_398.setTransform(200.9,74.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am3FDINuqF");
	this.shape_399.setTransform(201.3,75.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am4FDINyqF");
	this.shape_400.setTransform(201.7,76.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am6FCIN1qD");
	this.shape_401.setTransform(202.1,77.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am8FCIN5qD");
	this.shape_402.setTransform(202.5,78.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am+FBIN9qC");
	this.shape_403.setTransform(202.9,79.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnAFBIOBqB");
	this.shape_404.setTransform(203.3,80.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnCFBIOFqB");
	this.shape_405.setTransform(203.7,81.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnEFAIOJp/");
	this.shape_406.setTransform(204.1,82.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnGFAIONp/");
	this.shape_407.setTransform(204.5,83.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnIFAIORp+");
	this.shape_408.setTransform(204.9,84.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnKE/IOVp9");
	this.shape_409.setTransform(205.3,85);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnME+IOZp8");
	this.shape_410.setTransform(205.7,86);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnOE+IOdp7");
	this.shape_411.setTransform(206.1,87);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnQE+IOhp7");
	this.shape_412.setTransform(206.5,88);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnSE+IOlp7");
	this.shape_413.setTransform(206.8,88.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnUE9IOpp5");
	this.shape_414.setTransform(207.2,89.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnWE9IOtp5");
	this.shape_415.setTransform(207.6,90.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnYE9IOxp4");
	this.shape_416.setTransform(208,91.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnaE8IO1p3");
	this.shape_417.setTransform(208.4,92.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AncE8IO5p3");
	this.shape_418.setTransform(208.8,93.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AndE7IO8p1");
	this.shape_419.setTransform(209.2,94.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnfE7IO/p1");
	this.shape_420.setTransform(209.6,95.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnhE6IPDp0");
	this.shape_421.setTransform(210,96.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnjE6IPHpz");
	this.shape_422.setTransform(210.4,97.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnlE6IPLpz");
	this.shape_423.setTransform(210.8,98.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnnE5IPPpx");
	this.shape_424.setTransform(211.2,99.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnpE5IPTpx");
	this.shape_425.setTransform(211.6,100.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnrE4IPXpv");
	this.shape_426.setTransform(212,101.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AntE4IPbpv");
	this.shape_427.setTransform(212.4,102.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnvE4IPfpv");
	this.shape_428.setTransform(212.8,103.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnxE3IPjpt");
	this.shape_429.setTransform(213.2,104.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnzE3IPnpt");
	this.shape_430.setTransform(213.6,105.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An1E3IPrpt");
	this.shape_431.setTransform(214,106.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An3E2IPvpr");
	this.shape_432.setTransform(214.4,107.5);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An5E2IPzpr");
	this.shape_433.setTransform(214.8,108.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An7E1IP3pp");
	this.shape_434.setTransform(215.2,109.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An9E1IP7pp");
	this.shape_435.setTransform(215.6,110.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An/E0IP/po");
	this.shape_436.setTransform(216,111.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoBE0IQDpn");
	this.shape_437.setTransform(216.4,112.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoDE0IQHpn");
	this.shape_438.setTransform(216.8,113.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoEEzIQKpl");
	this.shape_439.setTransform(217.2,114.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoHEzIQOpl");
	this.shape_440.setTransform(217.6,115.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoJEzIQTpl");
	this.shape_441.setTransform(218,116.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoKEyIQVpj");
	this.shape_442.setTransform(218.3,117.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoMEyIQZpj");
	this.shape_443.setTransform(218.7,118.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoOEyIQdpj");
	this.shape_444.setTransform(219.1,119.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoQExIQhph");
	this.shape_445.setTransform(219.5,120.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoSEwIQlpg");
	this.shape_446.setTransform(219.9,121.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoUEwIQppf");
	this.shape_447.setTransform(220.3,122.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoWEwIQtpf");
	this.shape_448.setTransform(220.7,123.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoYEvIQxpd");
	this.shape_449.setTransform(221.1,124.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoaEvIQ1pd");
	this.shape_450.setTransform(221.5,125.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AocEvIQ5pd");
	this.shape_451.setTransform(221.9,126);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoeEuIQ9pb");
	this.shape_452.setTransform(222.3,127);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AogEuIRBpb");
	this.shape_453.setTransform(222.7,128);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoiEuIRFpa");
	this.shape_454.setTransform(223.1,129);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AokEtIRJpZ");
	this.shape_455.setTransform(223.5,130);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AomEtIRNpZ");
	this.shape_456.setTransform(223.9,130.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AolEnIRLpN");
	this.shape_457.setTransform(223.7,128.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AojEiIRHpD");
	this.shape_458.setTransform(223.4,126.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoiEdIRFo5");
	this.shape_459.setTransform(223.2,124.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AogEXIRCot");
	this.shape_460.setTransform(222.9,122.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AofESIQ/oj");
	this.shape_461.setTransform(222.7,120.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoeEMIQ9oX");
	this.shape_462.setTransform(222.4,118.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AodEHIQ7oN");
	this.shape_463.setTransform(222.2,116.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AobECIQ3oD");
	this.shape_464.setTransform(221.9,114.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoaD9IQ1n5");
	this.shape_465.setTransform(221.7,112.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoZD3IQznt");
	this.shape_466.setTransform(221.5,110);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoYDyIQxni");
	this.shape_467.setTransform(221.2,107.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoWDsIQtnX");
	this.shape_468.setTransform(221,105.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoVDnIQrnN");
	this.shape_469.setTransform(220.7,103.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoTDhIQnnB");
	this.shape_470.setTransform(220.5,101.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoSDcIQlm3");
	this.shape_471.setTransform(220.3,99.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoRDXIQjmt");
	this.shape_472.setTransform(220,97.4);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoQDRIQhmh");
	this.shape_473.setTransform(219.8,95.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoODMIQdmX");
	this.shape_474.setTransform(219.5,93.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoNDHIQbmN");
	this.shape_475.setTransform(219.3,91.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoLDBIQXmB");
	this.shape_476.setTransform(219,89);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoKC8IQVl3");
	this.shape_477.setTransform(218.8,86.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoJC3IQTlt");
	this.shape_478.setTransform(218.5,84.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoICxIQRlh");
	this.shape_479.setTransform(218.3,82.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoGCsIQNlX");
	this.shape_480.setTransform(218.1,80.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoFCnIQLlN");
	this.shape_481.setTransform(217.8,78.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoEChIQIlB");
	this.shape_482.setTransform(217.6,76.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoCCbIQFk1");
	this.shape_483.setTransform(217.3,74.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoBCWIQDks");
	this.shape_484.setTransform(217.1,72.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AoACRIQBkh");
	this.shape_485.setTransform(216.8,70.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An+CMIP9kX");
	this.shape_486.setTransform(216.6,68);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An9CGIP7kL");
	this.shape_487.setTransform(216.4,65.9);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An7CBIP3kB");
	this.shape_488.setTransform(216.1,63.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An7B7IP3j2");
	this.shape_489.setTransform(215.9,61.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("An5B2IPzjr");
	this.shape_490.setTransform(215.6,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_352}]}).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_352}]},1).wait(1));

	// Слой 16
	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ABrMtIjV5Z");
	this.shape_491.setTransform(175.6,150.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhrsoIDXZR");
	this.shape_492.setTransform(175.4,150.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhtskIDbZK");
	this.shape_493.setTransform(175.3,150.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhushIDdZC");
	this.shape_494.setTransform(175.1,151.3);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhwsdIDhY7");
	this.shape_495.setTransform(175,151.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhxsZIDjYz");
	this.shape_496.setTransform(174.8,152.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AhzsVIDnYr");
	this.shape_497.setTransform(174.7,152.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah0sRIDpYj");
	this.shape_498.setTransform(174.5,152.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah2sNIDtYb");
	this.shape_499.setTransform(174.4,153.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah3sJIDvYT");
	this.shape_500.setTransform(174.2,153.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah5sFIDzYL");
	this.shape_501.setTransform(174.1,154);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah6sBID1YD");
	this.shape_502.setTransform(173.9,154.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah8r+ID5X8");
	this.shape_503.setTransform(173.8,154.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah9r5ID7X0");
	this.shape_504.setTransform(173.6,155.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah/r2ID/Xt");
	this.shape_505.setTransform(173.5,155.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiAryIEBXl");
	this.shape_506.setTransform(173.3,156);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiCruIEFXd");
	this.shape_507.setTransform(173.2,156.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiDrqIEHXV");
	this.shape_508.setTransform(173.1,156.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiErmIEJXN");
	this.shape_509.setTransform(172.9,157.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiGriIENXF");
	this.shape_510.setTransform(172.8,157.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiIreIERW9");
	this.shape_511.setTransform(172.6,157.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiJraIETW1");
	this.shape_512.setTransform(172.5,158.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiLrWIEWWt");
	this.shape_513.setTransform(172.3,158.7);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiMrTIEZWn");
	this.shape_514.setTransform(172.2,159.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiOrPIEdWe");
	this.shape_515.setTransform(172,159.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiPrLIEfWX");
	this.shape_516.setTransform(171.9,159.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiQrHIEiWP");
	this.shape_517.setTransform(171.7,160.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiSrDIElWH");
	this.shape_518.setTransform(171.6,160.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiTq/IEnV/");
	this.shape_519.setTransform(171.4,161.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiVq7IErV3");
	this.shape_520.setTransform(171.3,161.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiXq3IEvVv");
	this.shape_521.setTransform(171.1,161.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiYqzIExVn");
	this.shape_522.setTransform(171,162.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiaqvIE0Vf");
	this.shape_523.setTransform(170.8,162.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AibqsIE3VY");
	this.shape_524.setTransform(170.7,163);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ACeKpIk71Q");
	this.shape_525.setTransform(170.5,163.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AihqjIFDVH");
	this.shape_526.setTransform(171.1,163.9);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AilqeIFLU9");
	this.shape_527.setTransform(171.8,164.4);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AipqaIFTU1");
	this.shape_528.setTransform(172.4,164.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AitqWIFbUt");
	this.shape_529.setTransform(173,165.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiyqRIFlUj");
	this.shape_530.setTransform(173.6,165.8);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai2qMIFtUZ");
	this.shape_531.setTransform(174.2,166.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai6qIIF1UR");
	this.shape_532.setTransform(174.9,166.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai+qDIF9UH");
	this.shape_533.setTransform(175.5,167.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjDp/IGGT/");
	this.shape_534.setTransform(176.1,167.8);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjHp6IGPT1");
	this.shape_535.setTransform(176.7,168.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjLp2IGXTt");
	this.shape_536.setTransform(177.4,168.7);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjPpxIGfTj");
	this.shape_537.setTransform(178,169.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjUpsIGpTa");
	this.shape_538.setTransform(178.6,169.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjYpoIGxTR");
	this.shape_539.setTransform(179.2,170.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjcpkIG5TJ");
	this.shape_540.setTransform(179.9,170.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjgpfIHBS/");
	this.shape_541.setTransform(180.5,171.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjlpbIHKS3");
	this.shape_542.setTransform(181.1,171.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjopWIHSSt");
	this.shape_543.setTransform(181.7,172.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjtpSIHbSk");
	this.shape_544.setTransform(182.3,172.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjxpNIHjSb");
	this.shape_545.setTransform(183,173.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj1pIIHrSR");
	this.shape_546.setTransform(183.6,173.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj5pEIH0SJ");
	this.shape_547.setTransform(184.2,174.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj+o/IH9R/");
	this.shape_548.setTransform(184.8,174.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkCo7IIFR3");
	this.shape_549.setTransform(185.5,175);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkGo2IINRt");
	this.shape_550.setTransform(186.1,175.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkLoyIIXRl");
	this.shape_551.setTransform(186.7,176);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkPotIIfRb");
	this.shape_552.setTransform(187.3,176.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkTopIInRT");
	this.shape_553.setTransform(188,177);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkXokIIvRJ");
	this.shape_554.setTransform(188.6,177.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkbofII3RA");
	this.shape_555.setTransform(189.2,178);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkgobIJAQ3");
	this.shape_556.setTransform(189.8,178.4);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkkoWIJJQu");
	this.shape_557.setTransform(190.4,178.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkooSIJRQl");
	this.shape_558.setTransform(191.1,179.4);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AksoNIJZQb");
	this.shape_559.setTransform(191.7,179.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkwoJIJhQT");
	this.shape_560.setTransform(192.3,180.4);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak0oFIJqQL");
	this.shape_561.setTransform(193,180.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak5oAIJzQB");
	this.shape_562.setTransform(193.6,181.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak9n7IJ7P3");
	this.shape_563.setTransform(194.2,181.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlBn3IKDPv");
	this.shape_564.setTransform(194.8,182.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlFnyIKMPl");
	this.shape_565.setTransform(195.5,182.8);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlKnuIKUPd");
	this.shape_566.setTransform(196.1,183.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlOnpIKdPT");
	this.shape_567.setTransform(196.7,183.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlSnlIKlPL");
	this.shape_568.setTransform(197.3,184.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlWngIKtPB");
	this.shape_569.setTransform(197.9,184.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlbnbIK3O4");
	this.shape_570.setTransform(198.6,185.2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlfnXIK/Ov");
	this.shape_571.setTransform(199.2,185.7);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AljnTILHOn");
	this.shape_572.setTransform(199.8,186.2);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlnnOILPOd");
	this.shape_573.setTransform(200.4,186.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlsnJILYOT");
	this.shape_574.setTransform(201.1,187.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlwnFILhOL");
	this.shape_575.setTransform(201.7,187.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al0nAILpOB");
	this.shape_576.setTransform(202.3,188.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al4m8ILxN5");
	this.shape_577.setTransform(202.9,188.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al8m3IL5Nv");
	this.shape_578.setTransform(203.5,189.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmAmzIMCNn");
	this.shape_579.setTransform(204.2,189.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmFmuIMLNd");
	this.shape_580.setTransform(204.8,190.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmJmqIMTNV");
	this.shape_581.setTransform(205.4,190.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmNmlIMbNL");
	this.shape_582.setTransform(206,191);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmSmhIMlND");
	this.shape_583.setTransform(206.7,191.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmWmcIMtM5");
	this.shape_584.setTransform(207.3,192);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmamYIM1Mx");
	this.shape_585.setTransform(207.9,192.5);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmemTIM9Mn");
	this.shape_586.setTransform(208.5,193);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmimOINGMe");
	this.shape_587.setTransform(209.2,193.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmnmKINPMV");
	this.shape_588.setTransform(209.8,194);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmrmFINXMM");
	this.shape_589.setTransform(210.4,194.4);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmvmBINfMD");
	this.shape_590.setTransform(211,194.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Amzl8INnL5");
	this.shape_591.setTransform(211.6,195.4);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am4l4INxLx");
	this.shape_592.setTransform(212.3,195.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am8l0IN5Lp");
	this.shape_593.setTransform(212.9,196.4);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AnAlvIOBLf");
	this.shape_594.setTransform(213.5,196.8);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AHFFrIuJrV");
	this.shape_595.setTransform(214.1,197.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Am6l3IN1Lv");
	this.shape_596.setTransform(213,196);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmwmEINhMJ");
	this.shape_597.setTransform(211.9,194.6);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmnmRINPMj");
	this.shape_598.setTransform(210.8,193.3);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmdmeIM7M9");
	this.shape_599.setTransform(209.7,191.9);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmTmrIMnNX");
	this.shape_600.setTransform(208.6,190.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AmJm3IMTNv");
	this.shape_601.setTransform(207.5,189.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al/nEIL/OJ");
	this.shape_602.setTransform(206.4,187.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Al1nRILrOj");
	this.shape_603.setTransform(205.3,186.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlrneILXO9");
	this.shape_604.setTransform(204.2,185.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlhnrILDPX");
	this.shape_605.setTransform(203.1,183.8);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlXn4IKvPx");
	this.shape_606.setTransform(202,182.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlNoFIKcQL");
	this.shape_607.setTransform(200.9,181.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AlEoSIKIQk");
	this.shape_608.setTransform(199.8,179.8);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ak5oeIJ0Q9");
	this.shape_609.setTransform(198.7,178.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkworIJhRX");
	this.shape_610.setTransform(197.6,177.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Akmo4IJNRx");
	this.shape_611.setTransform(196.5,175.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkcpFII5SL");
	this.shape_612.setTransform(195.4,174.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkSpSIIlSk");
	this.shape_613.setTransform(194.3,173.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AkIpeIIRS+");
	this.shape_614.setTransform(193.2,171.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj+psIH9TZ");
	this.shape_615.setTransform(192.1,170.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aj1p4IHrTx");
	this.shape_616.setTransform(191,169);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjqqFIHWUL");
	this.shape_617.setTransform(189.9,167.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjhqSIHCUl");
	this.shape_618.setTransform(188.8,166.3);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjWqfIGuU/");
	this.shape_619.setTransform(187.7,165);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjNqsIGbVZ");
	this.shape_620.setTransform(186.6,163.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AjDq5IGHVz");
	this.shape_621.setTransform(185.5,162.3);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ai5rFIFzWM");
	this.shape_622.setTransform(184.4,160.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AivrSIFfWl");
	this.shape_623.setTransform(183.3,159.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AilrfIFLW/");
	this.shape_624.setTransform(182.2,158.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AibrsIE3XZ");
	this.shape_625.setTransform(181.1,156.9);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiRr5IEjXz");
	this.shape_626.setTransform(180,155.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AiHsGIEPYN");
	this.shape_627.setTransform(178.9,154.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah+sTID9Yn");
	this.shape_628.setTransform(177.8,152.8);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ah0sfIDpY/");
	this.shape_629.setTransform(176.7,151.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_491}]}).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_491}]},1).wait(1));

	// Слой 15
	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ANUKuI6n1b");
	this.shape_630.setTransform(250.1,137.4);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AtNqnIabVQ");
	this.shape_631.setTransform(249.2,137.7);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AtHqiIaPVF");
	this.shape_632.setTransform(248.3,137.9);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AtBqcIaDU5");
	this.shape_633.setTransform(247.4,138.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("As7qXIZ3Uv");
	this.shape_634.setTransform(246.5,138.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("As1qRIZsUj");
	this.shape_635.setTransform(245.7,138.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AswqLIZgUX");
	this.shape_636.setTransform(244.8,138.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsqqGIZVUN");
	this.shape_637.setTransform(243.9,138.9);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AskqAIZJUB");
	this.shape_638.setTransform(243,139.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Asep6IY9T1");
	this.shape_639.setTransform(242.1,139.3);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsYp0IYxTp");
	this.shape_640.setTransform(241.2,139.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsSpvIYlTf");
	this.shape_641.setTransform(240.3,139.8);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsNppIYbTT");
	this.shape_642.setTransform(239.5,140);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsHpjIYPTH");
	this.shape_643.setTransform(238.6,140.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsBpdIYDS7");
	this.shape_644.setTransform(237.7,140.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ar7pYIX3Sx");
	this.shape_645.setTransform(236.8,140.6);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ar1pSIXrSl");
	this.shape_646.setTransform(235.9,140.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArvpMIXfSZ");
	this.shape_647.setTransform(235.1,141);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArppHIXTSP");
	this.shape_648.setTransform(234.2,141.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArjpBIXHSD");
	this.shape_649.setTransform(233.3,141.4);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ardo7IW7R3");
	this.shape_650.setTransform(232.4,141.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArYo1IWxRs");
	this.shape_651.setTransform(231.5,141.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArSowIWlRg");
	this.shape_652.setTransform(230.6,142.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArMoqIWZRV");
	this.shape_653.setTransform(229.7,142.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArGokIWNRJ");
	this.shape_654.setTransform(228.8,142.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArAofIWBQ/");
	this.shape_655.setTransform(228,142.7);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq6oZIV1Qz");
	this.shape_656.setTransform(227.1,142.9);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq0oTIVpQn");
	this.shape_657.setTransform(226.2,143.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqvoOIVfQc");
	this.shape_658.setTransform(225.3,143.3);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqpoIIVTQR");
	this.shape_659.setTransform(224.4,143.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqjoCIVHQF");
	this.shape_660.setTransform(223.5,143.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aqdn8IU7P6");
	this.shape_661.setTransform(222.6,144);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqXn3IUvPu");
	this.shape_662.setTransform(221.8,144.2);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqRnxIUjPj");
	this.shape_663.setTransform(220.9,144.4);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AKMHsI0XvX");
	this.shape_664.setTransform(220,144.6);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqLnlIUXPM");
	this.shape_665.setTransform(220.2,145);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqLngIUXPB");
	this.shape_666.setTransform(220.4,145.3);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMnaIUZO1");
	this.shape_667.setTransform(220.6,145.7);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMnVIUZOq");
	this.shape_668.setTransform(220.8,146.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMnPIUZOf");
	this.shape_669.setTransform(221,146.4);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMnJIUZOT");
	this.shape_670.setTransform(221.2,146.8);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMnEIUZOJ");
	this.shape_671.setTransform(221.4,147.2);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMm+IUZN9");
	this.shape_672.setTransform(221.6,147.5);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMm4IUZNx");
	this.shape_673.setTransform(221.8,147.9);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmyIUZNl");
	this.shape_674.setTransform(222,148.3);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmtIUZNb");
	this.shape_675.setTransform(222.3,148.6);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmnIUZNP");
	this.shape_676.setTransform(222.5,149);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmhIUZND");
	this.shape_677.setTransform(222.7,149.4);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmcIUZM5");
	this.shape_678.setTransform(222.9,149.8);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmWIUZMt");
	this.shape_679.setTransform(223.1,150.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmQIUZMh");
	this.shape_680.setTransform(223.3,150.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmLIUZMX");
	this.shape_681.setTransform(223.5,150.9);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMmFIUZML");
	this.shape_682.setTransform(223.7,151.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqMl/IUZL/");
	this.shape_683.setTransform(223.9,151.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNl5IUbL0");
	this.shape_684.setTransform(224.1,152);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNl0IUbLp");
	this.shape_685.setTransform(224.3,152.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNluIUbLd");
	this.shape_686.setTransform(224.5,152.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNlpIUbLS");
	this.shape_687.setTransform(224.7,153.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNljIUbLH");
	this.shape_688.setTransform(224.9,153.4);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNldIUbK7");
	this.shape_689.setTransform(225.1,153.8);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNlXIUbKv");
	this.shape_690.setTransform(225.3,154.2);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNlSIUbKl");
	this.shape_691.setTransform(225.5,154.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNlMIUbKZ");
	this.shape_692.setTransform(225.7,154.9);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNlGIUbKN");
	this.shape_693.setTransform(226,155.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNlBIUbKD");
	this.shape_694.setTransform(226.2,155.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNk7IUbJ3");
	this.shape_695.setTransform(226.4,156);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNk1IUbJr");
	this.shape_696.setTransform(226.6,156.4);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkwIUbJg");
	this.shape_697.setTransform(226.8,156.8);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkqIUbJV");
	this.shape_698.setTransform(227,157.1);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkkIUbJJ");
	this.shape_699.setTransform(227.2,157.5);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkeIUbI9");
	this.shape_700.setTransform(227.4,157.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkYIUbIy");
	this.shape_701.setTransform(227.6,158.2);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkTIUbIn");
	this.shape_702.setTransform(227.8,158.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkNIUbIb");
	this.shape_703.setTransform(228,159);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkIIUbIQ");
	this.shape_704.setTransform(228.2,159.3);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNkCIUbIF");
	this.shape_705.setTransform(228.4,159.7);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOj8IUdH5");
	this.shape_706.setTransform(228.7,160.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOj2IUcHt");
	this.shape_707.setTransform(228.9,160.4);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjxIUcHj");
	this.shape_708.setTransform(229.1,160.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqNjrIUbHX");
	this.shape_709.setTransform(229.3,161.2);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjlIUdHL");
	this.shape_710.setTransform(229.5,161.5);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjfIUdHA");
	this.shape_711.setTransform(229.7,161.9);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjaIUdG1");
	this.shape_712.setTransform(229.9,162.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjUIUdGp");
	this.shape_713.setTransform(230.1,162.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjPIUdGf");
	this.shape_714.setTransform(230.3,163);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjJIUdGT");
	this.shape_715.setTransform(230.5,163.4);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOjDIUdGH");
	this.shape_716.setTransform(230.7,163.7);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOi+IUdF8");
	this.shape_717.setTransform(230.9,164.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOi4IUdFx");
	this.shape_718.setTransform(231.1,164.5);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOiyIUdFl");
	this.shape_719.setTransform(231.3,164.9);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOisIUdFa");
	this.shape_720.setTransform(231.5,165.2);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOinIUdFP");
	this.shape_721.setTransform(231.7,165.6);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOihIUdFD");
	this.shape_722.setTransform(231.9,166);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOibIUdE3");
	this.shape_723.setTransform(232.1,166.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOiWIUdEt");
	this.shape_724.setTransform(232.4,166.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPiQIUfEh");
	this.shape_725.setTransform(232.6,167.1);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPiKIUfEV");
	this.shape_726.setTransform(232.8,167.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqOiFIUeEK");
	this.shape_727.setTransform(233,167.8);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPh/IUfD/");
	this.shape_728.setTransform(233.2,168.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPh5IUfDz");
	this.shape_729.setTransform(233.4,168.5);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPh0IUfDp");
	this.shape_730.setTransform(233.6,168.9);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPhuIUfDd");
	this.shape_731.setTransform(233.8,169.3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPhoIUfDR");
	this.shape_732.setTransform(234,169.6);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqPhiIUfDF");
	this.shape_733.setTransform(234.2,170);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AKQBeI0fi7");
	this.shape_734.setTransform(234.4,170.4);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqVhuIUrDd");
	this.shape_735.setTransform(234.9,169.4);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aqah/IU1D/");
	this.shape_736.setTransform(235.3,168.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqgiQIVBEg");
	this.shape_737.setTransform(235.7,167.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqmihIVNFD");
	this.shape_738.setTransform(236.2,166.6);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqrixIVXFj");
	this.shape_739.setTransform(236.7,165.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AqxjCIViGF");
	this.shape_740.setTransform(237.1,164.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq2jTIVtGn");
	this.shape_741.setTransform(237.5,163.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Aq8jkIV5HJ");
	this.shape_742.setTransform(238,162.9);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArBj1IWDHr");
	this.shape_743.setTransform(238.4,161.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArHkGIWPIN");
	this.shape_744.setTransform(238.9,161);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArNkXIWbIv");
	this.shape_745.setTransform(239.3,160);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArSkoIWlJR");
	this.shape_746.setTransform(239.8,159.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArYk5IWxJz");
	this.shape_747.setTransform(240.2,158.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArdlKIW7KV");
	this.shape_748.setTransform(240.7,157.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArjlbIXHK3");
	this.shape_749.setTransform(241.1,156.3);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("ArplsIXTLY");
	this.shape_750.setTransform(241.6,155.3);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Arul8IXdL6");
	this.shape_751.setTransform(242,154.4);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ar0mNIXpMc");
	this.shape_752.setTransform(242.5,153.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ar5mfIXzM/");
	this.shape_753.setTransform(242.9,152.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Ar/mwIX/Nh");
	this.shape_754.setTransform(243.4,151.6);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsFnAIYLOB");
	this.shape_755.setTransform(243.8,150.6);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsKnRIYVOj");
	this.shape_756.setTransform(244.3,149.7);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsPniIYfPF");
	this.shape_757.setTransform(244.7,148.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsVnzIYrPn");
	this.shape_758.setTransform(245.2,147.8);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsboEIY3QJ");
	this.shape_759.setTransform(245.6,146.9);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AshoVIZCQr");
	this.shape_760.setTransform(246.1,145.9);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsmomIZNRN");
	this.shape_761.setTransform(246.5,145);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("Asso3IZZRv");
	this.shape_762.setTransform(247,144);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AsxpIIZjSR");
	this.shape_763.setTransform(247.4,143.1);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("As3pZIZvSz");
	this.shape_764.setTransform(247.8,142.1);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("As8pqIZ5TV");
	this.shape_765.setTransform(248.3,141.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AtCp7IaFT3");
	this.shape_766.setTransform(248.8,140.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AtIqMIaRUZ");
	this.shape_767.setTransform(249.2,139.3);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("rgba(102,102,102,0.6)").ss(1,1,1).p("AtNqcIabU5");
	this.shape_768.setTransform(249.6,138.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_630}]}).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_630}]},1).wait(1));

	// Слой 24
	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgIAKAAQALAAAHAIQAJAIgBAKQABALgJAHQgHAJgLgBQgKABgIgJg");
	this.shape_769.setTransform(157.8,34);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#666666").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAIQgHAHgLABQgKgBgIgHg");
	this.shape_770.setTransform(158.8,35.9);
	this.shape_770._off = true;

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#666666").s().p("AgSASQgHgHgBgLQABgKAHgIQAIgIAKAAQALAAAHAIQAJAIgBAKQABALgJAHQgHAIgLAAQgKAAgIgIg");
	this.shape_771.setTransform(159.8,37.7);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgHAKgBQALABAHAHQAJAIgBAKQABALgJAHQgHAJgLAAQgKAAgIgJg");
	this.shape_772.setTransform(160.8,39.6);
	this.shape_772._off = true;

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#666666").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgIAKABQALgBAIAIQAHAIABAKQgBALgHAIQgIAHgLAAQgKAAgIgHg");
	this.shape_773.setTransform(161.9,41.4);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#666666").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgIAKABQALgBAHAIQAJAIAAAKQAAALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_774.setTransform(162.9,43.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#666666").s().p("AgSASQgHgHgBgLQABgKAHgIQAIgIAKAAQALAAAHAIQAJAIAAAKQAAALgJAHQgHAJgLgBQgKABgIgJg");
	this.shape_775.setTransform(163.9,45.2);
	this.shape_775._off = true;

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#666666").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIABAKQgBALgHAIQgIAHgLABQgKgBgIgHg");
	this.shape_776.setTransform(164.9,47);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#666666").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgIAKAAQALAAAIAIQAHAIABAKQgBALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_777.setTransform(165.9,48.9);
	this.shape_777._off = true;

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#666666").s().p("AgSATQgIgIABgLQgBgKAIgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLABQgKgBgIgHg");
	this.shape_778.setTransform(167,50.7);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgIAKAAQALAAAIAIQAHAIABAKQgBALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_779.setTransform(168,52.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#666666").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIABAKQgBALgHAIQgIAIgLAAQgKAAgIgIg");
	this.shape_780.setTransform(169,54.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#666666").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKABQALgBAHAIQAIAIAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape_781.setTransform(170,56.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgHAKgBQALABAIAHQAHAIAAAKQAAALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_782.setTransform(171,58.1);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#666666").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKABQALgBAHAIQAJAIgBAKQABALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_783.setTransform(172.1,60);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#666666").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgHAKAAQALAAAHAHQAJAIgBAKQABALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_784.setTransform(173.1,61.9);
	this.shape_784._off = true;

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgIAKAAQALAAAHAIQAIAIAAAKQAAALgIAHQgHAJgLgBQgKABgIgJg");
	this.shape_785.setTransform(174.1,63.7);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#666666").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgHAKAAQALAAAHAHQAJAIAAAKQAAALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_786.setTransform(175.1,65.6);
	this.shape_786._off = true;

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgIAKAAQALAAAHAIQAJAIgBAKQABALgJAHQgHAIgLAAQgKAAgIgIg");
	this.shape_787.setTransform(176.1,67.4);
	this.shape_787._off = true;

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#666666").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKgBQALABAIAHQAHAIABAKQgBALgHAHQgIAJgLAAQgKAAgIgJg");
	this.shape_788.setTransform(177.2,69.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#666666").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgIAKABQALgBAHAIQAJAIAAAKQAAALgJAIQgHAHgLAAQgKAAgIgHg");
	this.shape_789.setTransform(178.2,71.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgHAKgBQALABAIAHQAHAIABAKQgBALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_790.setTransform(179.2,73);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#666666").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgIAKABQALgBAIAIQAHAIABAKQgBALgHAIQgIAHgLABQgKgBgIgHg");
	this.shape_791.setTransform(180.2,74.8);
	this.shape_791._off = true;

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#666666").s().p("AgSATQgIgIABgLQgBgKAIgIQAIgHAKAAQALAAAIAHQAHAIABAKQgBALgHAIQgIAHgLABQgKgBgIgHg");
	this.shape_792.setTransform(183.3,80.4);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgHAKgBQALABAHAHQAIAIAAAKQAAALgIAHQgHAJgLAAQgKAAgIgJg");
	this.shape_793.setTransform(185.3,84.1);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#666666").s().p("AgSATQgIgIABgLQgBgKAIgIQAIgIAKABQALgBAIAIQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgIgHg");
	this.shape_794.setTransform(186.3,86);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgHAKgBQALABAHAHQAJAIgBAKQABALgJAHQgHAJgLgBQgKABgIgJg");
	this.shape_795.setTransform(187.4,87.8);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#666666").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKgBQALABAIAHQAIAIAAAKQAAALgIAHQgIAJgLAAQgKAAgIgJg");
	this.shape_796.setTransform(193.5,99);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#666666").s().p("AgSATQgIgIABgLQgBgKAIgIQAIgIAKABQALgBAIAIQAHAIABAKQgBALgHAIQgIAHgLAAQgKAAgIgHg");
	this.shape_797.setTransform(194.5,100.8);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#666666").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKgBQALABAIAHQAHAIABAKQgBALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_798.setTransform(195.5,102.7);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgIAKAAQALAAAIAIQAHAIAAAKQAAALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_799.setTransform(197.6,106.4);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgIAKAAQALAAAIAIQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_800.setTransform(201.6,113.8);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#666666").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgIAKABQALgBAIAIQAIAIAAAKQAAALgIAIQgIAHgLABQgKgBgIgHg");
	this.shape_801.setTransform(204.7,119.4);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#666666").s().p("AgSASQgHgHgBgLQABgKAHgIQAIgIAKAAQALAAAHAIQAJAIgBAKQABALgJAHQgHAJgLgBQgKABgIgJg");
	this.shape_802.setTransform(205.7,121.2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgHAKgBQALABAIAHQAHAIAAAKQAAALgHAHQgIAJgLAAQgKAAgIgJg");
	this.shape_803.setTransform(212.9,134.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgIAKAAQALAAAIAIQAHAIABAKQgBALgHAHQgIAJgLgBQgKABgIgJg");
	this.shape_804.setTransform(213.9,136.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#666666").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgHAKAAQALAAAHAHQAJAIgBAKQABALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_805.setTransform(217,141.6);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#666666").s().p("AgSASQgHgHgBgLQABgKAHgIQAIgHAKgBQALABAHAHQAJAIgBAKQABALgJAHQgHAJgLgBQgKABgIgJg");
	this.shape_806.setTransform(221,149);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#666666").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgIAKAAQALAAAIAIQAHAIABAKQgBALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_807.setTransform(226.1,158.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#666666").s().p("AgSASQgHgHgBgLQABgKAHgIQAIgIAKAAQALAAAHAIQAJAIAAAKQAAALgJAHQgHAIgLAAQgKAAgIgIg");
	this.shape_808.setTransform(224.2,154.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#666666").s().p("AgSATQgIgIABgLQgBgKAIgIQAIgIAKABQALgBAIAIQAHAIABAKQgBALgHAIQgIAHgLABQgKgBgIgHg");
	this.shape_809.setTransform(216.1,140.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#666666").s().p("AgSATQgIgIABgLQgBgKAIgIQAIgIAKABQALgBAIAIQAHAIAAAKQAAALgHAIQgIAHgLABQgKgBgIgHg");
	this.shape_810.setTransform(215.1,138.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#666666").s().p("AgSASQgIgHABgLQgBgKAIgIQAIgHAKgBQALABAIAHQAHAIABAKQgBALgHAHQgIAJgLAAQgKAAgIgJg");
	this.shape_811.setTransform(195,101.7);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#666666").s().p("AgSASQgIgHAAgLQAAgKAIgIQAIgIAKAAQALAAAHAIQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_812.setTransform(193,98);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#666666").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAHQgIAJgLgBQgKABgIgJg");
	this.shape_813.setTransform(189,90.7);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#666666").s().p("AgSATQgHgIgBgLQABgKAHgIQAIgIAKABQALgBAHAIQAJAIgBAKQABALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_814.setTransform(168.8,54.1);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#666666").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAIQgHAIgLAAQgKAAgIgIg");
	this.shape_815.setTransform(162.8,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_769}]}).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773,p:{x:161.9,y:41.4}}]},1).to({state:[{t:this.shape_774,p:{x:162.9,y:43.3}}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776,p:{x:164.9,y:47}}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778,p:{x:167,y:50.7}}]},1).to({state:[{t:this.shape_779,p:{x:168,y:52.6}}]},1).to({state:[{t:this.shape_780,p:{x:169,y:54.4}}]},1).to({state:[{t:this.shape_781,p:{x:170,y:56.3}}]},1).to({state:[{t:this.shape_782,p:{x:171,y:58.1}}]},1).to({state:[{t:this.shape_783,p:{x:172.1,y:60}}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785,p:{x:174.1,y:63.7}}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_788,p:{x:177.2,y:69.3}}]},1).to({state:[{t:this.shape_789,p:{x:178.2,y:71.1}}]},1).to({state:[{t:this.shape_790,p:{x:179.2,y:73}}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778,p:{x:182.3,y:78.5}}]},1).to({state:[{t:this.shape_792,p:{x:183.3,y:80.4}}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_793,p:{x:185.3,y:84.1}}]},1).to({state:[{t:this.shape_794,p:{x:186.3,y:86}}]},1).to({state:[{t:this.shape_795}]},1).to({state:[{t:this.shape_783,p:{x:188.4,y:89.7}}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_776,p:{x:192.5,y:97.1}}]},1).to({state:[{t:this.shape_796}]},1).to({state:[{t:this.shape_797,p:{x:194.5,y:100.8}}]},1).to({state:[{t:this.shape_798,p:{x:195.5,y:102.7}}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_792,p:{x:198.6,y:108.2}}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_800,p:{x:201.6,y:113.8}}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802,p:{x:205.7,y:121.2}}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_779,p:{x:209.8,y:128.6}}]},1).to({state:[{t:this.shape_780,p:{x:210.8,y:130.5}}]},1).to({state:[{t:this.shape_781,p:{x:211.9,y:132.3}}]},1).to({state:[{t:this.shape_803,p:{x:212.9,y:134.2}}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785,p:{x:215.9,y:139.8}}]},1).to({state:[{t:this.shape_805,p:{x:217,y:141.6}}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_789,p:{x:220,y:147.2}}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_792,p:{x:225.1,y:156.5}}]},1).to({state:[{t:this.shape_807,p:{x:226.1,y:158.3}}]},1).to({state:[{t:this.shape_793,p:{x:227.2,y:160.2}}]},1).to({state:[{t:this.shape_794,p:{x:228.2,y:162}}]},1).to({state:[{t:this.shape_793,p:{x:227.2,y:160.2}}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_788,p:{x:214.1,y:136.4}}]},1).to({state:[{t:this.shape_773,p:{x:213.1,y:134.6}}]},1).to({state:[{t:this.shape_797,p:{x:212.1,y:132.8}}]},1).to({state:[{t:this.shape_803,p:{x:211.1,y:130.9}}]},1).to({state:[{t:this.shape_793,p:{x:210.1,y:129.1}}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_805,p:{x:207.1,y:123.6}}]},1).to({state:[{t:this.shape_785,p:{x:206,y:121.8}}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_805,p:{x:203,y:116.3}}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_790,p:{x:199,y:109}}]},1).to({state:[{t:this.shape_782,p:{x:198,y:107.2}}]},1).to({state:[{t:this.shape_773,p:{x:197,y:105.3}}]},1).to({state:[{t:this.shape_773,p:{x:196,y:103.5}}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_803,p:{x:194,y:99.9}}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_802,p:{x:190,y:92.5}}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_774,p:{x:184.9,y:83.4}}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_798,p:{x:182.9,y:79.7}}]},1).to({state:[{t:this.shape_790,p:{x:181.9,y:77.9}}]},1).to({state:[{t:this.shape_794,p:{x:180.9,y:76.1}}]},1).to({state:[{t:this.shape_781,p:{x:179.9,y:74.3}}]},1).to({state:[{t:this.shape_788,p:{x:178.9,y:72.4}}]},1).to({state:[{t:this.shape_779,p:{x:177.9,y:70.6}}]},1).to({state:[{t:this.shape_800,p:{x:176.9,y:68.8}}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_774,p:{x:167.8,y:52.3}}]},1).to({state:[{t:this.shape_798,p:{x:166.8,y:50.5}}]},1).to({state:[{t:this.shape_798,p:{x:165.8,y:48.7}}]},1).to({state:[{t:this.shape_797,p:{x:164.8,y:46.8}}]},1).to({state:[{t:this.shape_803,p:{x:163.8,y:45}}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_807,p:{x:161.8,y:41.3}}]},1).to({state:[{t:this.shape_779,p:{x:160.8,y:39.5}}]},1).to({state:[{t:this.shape_778,p:{x:159.8,y:37.7}}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_769}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_769).to({_off:true},1).wait(32).to({_off:false,x:191.4,y:95.2},0).to({_off:true},1).wait(7).to({_off:false,x:199.6,y:110.1},0).to({_off:true},1).wait(34).to({_off:false,x:221.1,y:149.2},0).to({_off:true},1).wait(15).to({_off:false,x:205,y:120},0).to({_off:true},1).wait(30).to({_off:false,x:173.9,y:63.3},0).to({_off:true},1).wait(2).to({_off:false,x:170.8,y:57.8},0).wait(1).to({x:169.8,y:56},0).to({_off:true},1).wait(11).to({_off:false,x:157.8,y:34},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_770).wait(1).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false,x:200.6,y:111.9},0).to({_off:true},1).wait(31).to({_off:false,x:223.1,y:152.9},0).to({_off:true},1).wait(46).to({_off:false,x:175.9,y:66.9},0).to({_off:true},1).wait(16).to({_off:false,x:158.8,y:35.9},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_772).wait(3).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false,x:202.7,y:115.6},0).wait(1).to({x:203.7,y:117.5},0).to({_off:true},1).wait(14).to({_off:false,x:219,y:145.3},0).to({_off:true},1).wait(10).to({_off:false,x:226.2,y:158.4},0).to({_off:true},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.shape_775).wait(6).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false,x:189.4,y:91.5},0).to({_off:true},1).wait(33).to({_off:false,x:224.1,y:154.6},0).to({_off:true},1).wait(29).to({_off:false,x:202,y:114.5},0).to({_off:true},1).wait(15).to({_off:false,x:185.9,y:85.2},0).to({_off:true},1).wait(12).to({_off:false,x:172.9,y:61.5},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_777).wait(8).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false,x:181.2,y:76.7},0).to({_off:true},1).wait(25).to({_off:false,x:207.8,y:124.9},0).to({_off:true},1).wait(14).to({_off:false,x:223.1,y:152.7},0).to({_off:true},1).wait(14).to({_off:false,x:218.1,y:143.7},0).wait(1).to({x:217.1,y:141.9},0).to({_off:true},1).wait(15).to({_off:false,x:201,y:112.7},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_784).wait(15).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false,x:206.7,y:123.1},0).to({_off:true},1).wait(7).to({_off:false,x:214.9,y:137.9},0).to({_off:true},1).wait(18).to({_off:false,x:222.1,y:151.1},0).to({_off:true},1).wait(17).to({_off:false,x:204,y:118.1},0).to({_off:true},1).wait(11).to({_off:false,x:192,y:96.2},0).wait(1).to({x:191,y:94.4},0).to({_off:true},1).wait(2).to({_off:false,x:187.9,y:88.9},0).wait(1).to({x:186.9,y:87.1},0).to({_off:true},1).wait(11).to({_off:false,x:174.9,y:65.1},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_786).wait(17).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false,x:190.4,y:93.4},0).to({_off:true},1).wait(17).to({_off:false,x:208.8,y:126.8},0).to({_off:true},1).wait(26).to({_off:false,x:220.1,y:147.4},0).wait(1).to({x:219.1,y:145.6},0).to({_off:true},1).wait(46).to({_off:false,x:171.9,y:59.6},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_787).wait(18).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:184.3,y:82.3},0).to({_off:true},1).wait(32).to({_off:false,x:218,y:143.5},0).to({_off:true},1).wait(12).to({_off:false,x:225.2,y:156.5},0).to({_off:true},1).wait(15).to({_off:false,x:209.1,y:127.3},0).wait(1).to({x:208.1,y:125.5},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_791).wait(22).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false,x:196.5,y:104.5},0).to({_off:true},1).wait(24).to({_off:false,x:222.1,y:150.9},0).to({_off:true},1).wait(33).to({_off:false,x:200,y:110.8},0).to({_off:true},1).wait(15).to({_off:false,x:183.9,y:81.6},0).to({_off:true},1).wait(26));

	// Слой 14
	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#666666").ss(1,1,1).p("AIujHIxbGO");
	this.shape_816.setTransform(93.2,230.1);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#666666").ss(1,1,1).p("AorDDIRXmF");
	this.shape_817.setTransform(93.4,229.9);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#666666").ss(1,1,1).p("AopC/IRTl9");
	this.shape_818.setTransform(93.7,229.7);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#666666").ss(1,1,1).p("AooC7IRRl1");
	this.shape_819.setTransform(93.9,229.5);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#666666").ss(1,1,1).p("AomC3IRNlt");
	this.shape_820.setTransform(94.2,229.4);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#666666").ss(1,1,1).p("AolCzIRLll");
	this.shape_821.setTransform(94.5,229.2);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#666666").ss(1,1,1).p("AojCvIRHld");
	this.shape_822.setTransform(94.8,229.1);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#666666").ss(1,1,1).p("AoiCrIRFlV");
	this.shape_823.setTransform(95,228.9);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#666666").ss(1,1,1).p("AogCnIRBlN");
	this.shape_824.setTransform(95.3,228.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#666666").ss(1,1,1).p("AoeCjIQ9lF");
	this.shape_825.setTransform(95.5,228.5);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#666666").ss(1,1,1).p("AodCfIQ7k9");
	this.shape_826.setTransform(95.8,228.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#666666").ss(1,1,1).p("AobCbIQ3k0");
	this.shape_827.setTransform(96.1,228.2);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#666666").ss(1,1,1).p("AoaCWIQ1ks");
	this.shape_828.setTransform(96.3,228.1);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#666666").ss(1,1,1).p("AoYCTIQxkl");
	this.shape_829.setTransform(96.6,227.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#666666").ss(1,1,1).p("AoXCOIQvkb");
	this.shape_830.setTransform(96.9,227.7);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#666666").ss(1,1,1).p("AoVCKIQrkT");
	this.shape_831.setTransform(97.1,227.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#666666").ss(1,1,1).p("AoTCGIQnkL");
	this.shape_832.setTransform(97.4,227.4);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#666666").ss(1,1,1).p("AoSCCIQlkD");
	this.shape_833.setTransform(97.6,227.2);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#666666").ss(1,1,1).p("AoQB+IQhj7");
	this.shape_834.setTransform(97.9,227);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#666666").ss(1,1,1).p("AoPB6IQfjz");
	this.shape_835.setTransform(98.2,226.9);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#666666").ss(1,1,1).p("AoNB2IQbjr");
	this.shape_836.setTransform(98.4,226.7);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#666666").ss(1,1,1).p("AoMByIQZjj");
	this.shape_837.setTransform(98.7,226.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#666666").ss(1,1,1).p("AoKBtIQVja");
	this.shape_838.setTransform(99,226.4);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#666666").ss(1,1,1).p("AoIBqIQRjT");
	this.shape_839.setTransform(99.2,226.2);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#666666").ss(1,1,1).p("AoHBmIQPjL");
	this.shape_840.setTransform(99.5,226);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#666666").ss(1,1,1).p("AoFBiIQLjD");
	this.shape_841.setTransform(99.8,225.9);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#666666").ss(1,1,1).p("AoEBdIQJi5");
	this.shape_842.setTransform(100,225.7);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#666666").ss(1,1,1).p("AoCBZIQFix");
	this.shape_843.setTransform(100.3,225.5);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#666666").ss(1,1,1).p("AoBBVIQDip");
	this.shape_844.setTransform(100.6,225.3);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#666666").ss(1,1,1).p("An/BRIP/ih");
	this.shape_845.setTransform(100.8,225.2);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#666666").ss(1,1,1).p("An9BNIP7iZ");
	this.shape_846.setTransform(101.1,225);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#666666").ss(1,1,1).p("An8BJIP5iR");
	this.shape_847.setTransform(101.3,224.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#666666").ss(1,1,1).p("An6BFIP2iJ");
	this.shape_848.setTransform(101.6,224.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#666666").ss(1,1,1).p("An5BBIPziB");
	this.shape_849.setTransform(101.9,224.5);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#666666").ss(1,1,1).p("An3A9IPvh5");
	this.shape_850.setTransform(102.1,224.3);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#666666").ss(1,1,1).p("An2A5IPthx");
	this.shape_851.setTransform(102.4,224.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#666666").ss(1,1,1).p("An0A1IPphp");
	this.shape_852.setTransform(102.7,224);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#666666").ss(1,1,1).p("AnyAwIPlhg");
	this.shape_853.setTransform(102.9,223.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#666666").ss(1,1,1).p("AnxAtIPjhY");
	this.shape_854.setTransform(103.2,223.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#666666").ss(1,1,1).p("AnvAoIPghP");
	this.shape_855.setTransform(103.5,223.5);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#666666").ss(1,1,1).p("AnuAkIPdhH");
	this.shape_856.setTransform(103.7,223.3);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#666666").ss(1,1,1).p("AnsAgIPZg/");
	this.shape_857.setTransform(104,223.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#666666").ss(1,1,1).p("AnrAcIPXg3");
	this.shape_858.setTransform(104.3,223);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#666666").ss(1,1,1).p("AnpAYIPTgv");
	this.shape_859.setTransform(104.5,222.8);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#666666").ss(1,1,1).p("AnoAUIPQgn");
	this.shape_860.setTransform(104.8,222.6);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#666666").ss(1,1,1).p("AnmAQIPNgf");
	this.shape_861.setTransform(105.1,222.5);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#666666").ss(1,1,1).p("AnlALIPLgW");
	this.shape_862.setTransform(105.3,222.3);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#666666").ss(1,1,1).p("AnjAIIPHgP");
	this.shape_863.setTransform(105.6,222.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#666666").ss(1,1,1).p("AnhAEIPDgG");
	this.shape_864.setTransform(105.8,222);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#666666").ss(1,1,1).p("AngAAIPBAA");
	this.shape_865.setTransform(106.1,221.8);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#666666").ss(1,1,1).p("AnegEIO9AJ");
	this.shape_866.setTransform(106.4,221.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#666666").ss(1,1,1).p("AncgIIO6AR");
	this.shape_867.setTransform(106.6,221.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#666666").ss(1,1,1).p("AnbgMIO3AZ");
	this.shape_868.setTransform(106.9,221.3);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#666666").ss(1,1,1).p("AnagQIO0Ah");
	this.shape_869.setTransform(107.2,221.1);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#666666").ss(1,1,1).p("AnYgUIOxAp");
	this.shape_870.setTransform(107.4,221);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#666666").ss(1,1,1).p("AnWgYIOtAx");
	this.shape_871.setTransform(107.7,220.8);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#666666").ss(1,1,1).p("AnVgcIOrA5");
	this.shape_872.setTransform(108,220.6);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#666666").ss(1,1,1).p("AnTggIOnBB");
	this.shape_873.setTransform(108.2,220.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#666666").ss(1,1,1).p("AnRgkIOkBJ");
	this.shape_874.setTransform(108.5,220.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#666666").ss(1,1,1).p("AnQgpIOhBT");
	this.shape_875.setTransform(108.8,220.1);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#666666").ss(1,1,1).p("AnPgsIOeBa");
	this.shape_876.setTransform(109,220);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#666666").ss(1,1,1).p("AnNgxIObBj");
	this.shape_877.setTransform(109.3,219.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#666666").ss(1,1,1).p("AnLg0IOXBp");
	this.shape_878.setTransform(109.5,219.6);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#666666").ss(1,1,1).p("AnKg5IOVBz");
	this.shape_879.setTransform(109.8,219.4);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#666666").ss(1,1,1).p("AnIg9IORB7");
	this.shape_880.setTransform(110.1,219.3);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#666666").ss(1,1,1).p("AnHhBIOPCD");
	this.shape_881.setTransform(110.3,219.1);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#666666").ss(1,1,1).p("AnFhFIOLCL");
	this.shape_882.setTransform(110.6,219);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#666666").ss(1,1,1).p("AnEhJIOJCT");
	this.shape_883.setTransform(110.9,218.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#666666").ss(1,1,1).p("AnChNIOFCb");
	this.shape_884.setTransform(111.1,218.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#666666").ss(1,1,1).p("AHBBSIuBij");
	this.shape_885.setTransform(111.4,218.4);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#666666").ss(1,1,1).p("AnKg5IOUBz");
	this.shape_886.setTransform(109.8,219.4);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#666666").ss(1,1,1).p("AnLg1IOXBr");
	this.shape_887.setTransform(109.6,219.6);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#666666").ss(1,1,1).p("AnNgxIOaBj");
	this.shape_888.setTransform(109.3,219.8);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("#666666").ss(1,1,1).p("AnOgtIOdBb");
	this.shape_889.setTransform(109,219.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#666666").ss(1,1,1).p("AnRglIOjBL");
	this.shape_890.setTransform(108.5,220.3);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("#666666").ss(1,1,1).p("AnTghIOnBD");
	this.shape_891.setTransform(108.3,220.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#666666").ss(1,1,1).p("AnVgdIOqA7");
	this.shape_892.setTransform(108,220.6);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("#666666").ss(1,1,1).p("AnWgZIOtAz");
	this.shape_893.setTransform(107.7,220.8);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#666666").ss(1,1,1).p("AnXgVIOvAr");
	this.shape_894.setTransform(107.5,220.9);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("#666666").ss(1,1,1).p("AnZgRIOzAj");
	this.shape_895.setTransform(107.2,221.1);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#666666").ss(1,1,1).p("AnbgNIO3Ab");
	this.shape_896.setTransform(107,221.3);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("#666666").ss(1,1,1).p("AncgJIO5AT");
	this.shape_897.setTransform(106.7,221.4);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#666666").ss(1,1,1).p("AnegFIO9AL");
	this.shape_898.setTransform(106.4,221.6);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("#666666").ss(1,1,1).p("AnfgBIO/AD");
	this.shape_899.setTransform(106.2,221.7);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#666666").ss(1,1,1).p("AnhACIPDgD");
	this.shape_900.setTransform(105.9,221.9);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("#666666").ss(1,1,1).p("AniAGIPFgL");
	this.shape_901.setTransform(105.6,222.1);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#666666").ss(1,1,1).p("AnkALIPJgV");
	this.shape_902.setTransform(105.4,222.3);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("#666666").ss(1,1,1).p("AnlAOIPLgb");
	this.shape_903.setTransform(105.1,222.4);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#666666").ss(1,1,1).p("AnnASIPPgj");
	this.shape_904.setTransform(104.9,222.6);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#666666").ss(1,1,1).p("AnpAXIPTgt");
	this.shape_905.setTransform(104.6,222.8);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#666666").ss(1,1,1).p("AnqAbIPVg1");
	this.shape_906.setTransform(104.4,222.9);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("#666666").ss(1,1,1).p("AnrAeIPYg7");
	this.shape_907.setTransform(104.1,223.1);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#666666").ss(1,1,1).p("AntAiIPbhD");
	this.shape_908.setTransform(103.8,223.3);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#666666").ss(1,1,1).p("AnvAmIPfhL");
	this.shape_909.setTransform(103.6,223.4);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#666666").ss(1,1,1).p("AnwArIPhhV");
	this.shape_910.setTransform(103.3,223.6);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("#666666").ss(1,1,1).p("AnyAvIPlhd");
	this.shape_911.setTransform(103,223.8);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#666666").ss(1,1,1).p("AnzAzIPnhk");
	this.shape_912.setTransform(102.8,223.9);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#666666").ss(1,1,1).p("An1A3IPrht");
	this.shape_913.setTransform(102.5,224.1);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#666666").ss(1,1,1).p("An2A6IPthz");
	this.shape_914.setTransform(102.3,224.3);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("#666666").ss(1,1,1).p("An4A/IPxh9");
	this.shape_915.setTransform(102,224.4);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#666666").ss(1,1,1).p("An6BDIP1iF");
	this.shape_916.setTransform(101.8,224.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#666666").ss(1,1,1).p("An7BHIP3iN");
	this.shape_917.setTransform(101.5,224.7);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#666666").ss(1,1,1).p("An9BLIP7iU");
	this.shape_918.setTransform(101.2,224.9);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("#666666").ss(1,1,1).p("An+BPIP9id");
	this.shape_919.setTransform(101,225.1);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#666666").ss(1,1,1).p("An/BTIQAil");
	this.shape_920.setTransform(100.7,225.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("#666666").ss(1,1,1).p("AoBBXIQDit");
	this.shape_921.setTransform(100.4,225.4);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#666666").ss(1,1,1).p("AoDBbIQHi1");
	this.shape_922.setTransform(100.2,225.6);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#666666").ss(1,1,1).p("AoEBfIQJi9");
	this.shape_923.setTransform(99.9,225.7);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#666666").ss(1,1,1).p("AoGBjIQNjF");
	this.shape_924.setTransform(99.7,225.9);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#666666").ss(1,1,1).p("AoHBnIQQjN");
	this.shape_925.setTransform(99.4,226.1);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#666666").ss(1,1,1).p("AoJBrIQTjV");
	this.shape_926.setTransform(99.2,226.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("#666666").ss(1,1,1).p("AoLBvIQXjd");
	this.shape_927.setTransform(98.9,226.4);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#666666").ss(1,1,1).p("AoMBzIQZjl");
	this.shape_928.setTransform(98.6,226.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("#666666").ss(1,1,1).p("AoNB3IQcjt");
	this.shape_929.setTransform(98.4,226.8);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#666666").ss(1,1,1).p("AoPB7IQfj1");
	this.shape_930.setTransform(98.1,226.9);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("#666666").ss(1,1,1).p("AoRB/IQjj9");
	this.shape_931.setTransform(97.8,227.1);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#666666").ss(1,1,1).p("AoSCDIQlkF");
	this.shape_932.setTransform(97.6,227.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("#666666").ss(1,1,1).p("AoUCHIQpkN");
	this.shape_933.setTransform(97.3,227.4);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#666666").ss(1,1,1).p("AoWCLIQtkV");
	this.shape_934.setTransform(97.1,227.6);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("#666666").ss(1,1,1).p("AoXCPIQvkd");
	this.shape_935.setTransform(96.8,227.7);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#666666").ss(1,1,1).p("AoaCXIQ1kt");
	this.shape_936.setTransform(96.3,228.1);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("#666666").ss(1,1,1).p("AocCbIQ5k1");
	this.shape_937.setTransform(96,228.2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#666666").ss(1,1,1).p("AofCjIQ/lF");
	this.shape_938.setTransform(95.5,228.6);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("#666666").ss(1,1,1).p("AojCvIRHle");
	this.shape_939.setTransform(94.7,229.1);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#666666").ss(1,1,1).p("AooC8IRRl3");
	this.shape_940.setTransform(93.9,229.6);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("#666666").ss(1,1,1).p("AopDAIRTl+");
	this.shape_941.setTransform(93.7,229.7);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#666666").ss(1,1,1).p("AorDEIRXmG");
	this.shape_942.setTransform(93.4,229.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_816}]}).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824,p:{x:95.3}}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829,p:{x:96.6}}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_842}]},1).to({state:[{t:this.shape_843}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_845}]},1).to({state:[{t:this.shape_846}]},1).to({state:[{t:this.shape_847}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_853}]},1).to({state:[{t:this.shape_854}]},1).to({state:[{t:this.shape_855}]},1).to({state:[{t:this.shape_856}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_881,p:{x:110.3}}]},1).to({state:[{t:this.shape_882,p:{y:219}}]},1).to({state:[{t:this.shape_883}]},1).to({state:[{t:this.shape_884}]},1).to({state:[{t:this.shape_885}]},1).to({state:[{t:this.shape_884}]},1).to({state:[{t:this.shape_883}]},1).to({state:[{t:this.shape_882,p:{y:218.9}}]},1).to({state:[{t:this.shape_881,p:{x:110.4}}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_890}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_896}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_898}]},1).to({state:[{t:this.shape_899}]},1).to({state:[{t:this.shape_900}]},1).to({state:[{t:this.shape_901}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_903}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_909}]},1).to({state:[{t:this.shape_910}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_912}]},1).to({state:[{t:this.shape_913}]},1).to({state:[{t:this.shape_914}]},1).to({state:[{t:this.shape_915}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_917}]},1).to({state:[{t:this.shape_918}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_924}]},1).to({state:[{t:this.shape_925}]},1).to({state:[{t:this.shape_926}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_930}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_933}]},1).to({state:[{t:this.shape_934}]},1).to({state:[{t:this.shape_935}]},1).to({state:[{t:this.shape_829,p:{x:96.5}}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_937}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_824,p:{x:95.2}}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_941}]},1).to({state:[{t:this.shape_942}]},1).to({state:[{t:this.shape_816}]},1).wait(1));

	// Слой 12
	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("#666666").ss(1,1,1).p("AzRjLMAmjAGX");
	this.shape_943.setTransform(234.3,-0.6);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#666666").ss(1,1,1).p("AzNjHMAmbAGP");
	this.shape_944.setTransform(233.8,0.1);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("#666666").ss(1,1,1).p("AzKjCMAmVAGF");
	this.shape_945.setTransform(233.3,0.9);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#666666").ss(1,1,1).p("AzGi9MAmNAF7");
	this.shape_946.setTransform(232.9,1.7);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("#666666").ss(1,1,1).p("AzCi5MAmFAFz");
	this.shape_947.setTransform(232.4,2.4);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#666666").ss(1,1,1).p("Ay+i0MAl+AFp");
	this.shape_948.setTransform(231.9,3.2);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("#666666").ss(1,1,1).p("Ay7iwMAl3AFh");
	this.shape_949.setTransform(231.5,4);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#666666").ss(1,1,1).p("Ay3irMAlvAFX");
	this.shape_950.setTransform(231,4.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("#666666").ss(1,1,1).p("Ay0inMAlpAFP");
	this.shape_951.setTransform(230.5,5.5);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#666666").ss(1,1,1).p("AywiiMAlhAFF");
	this.shape_952.setTransform(230.1,6.3);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("#666666").ss(1,1,1).p("AysieMAlZAE9");
	this.shape_953.setTransform(229.6,7.1);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#666666").ss(1,1,1).p("AypiZMAlTAEz");
	this.shape_954.setTransform(229.1,7.8);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("#666666").ss(1,1,1).p("AyliUMAlLAEp");
	this.shape_955.setTransform(228.6,8.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#666666").ss(1,1,1).p("AyhiQMAlDAEh");
	this.shape_956.setTransform(228.2,9.4);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("#666666").ss(1,1,1).p("AydiMMAk8AEZ");
	this.shape_957.setTransform(227.7,10.1);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#666666").ss(1,1,1).p("AyaiHMAk1AEP");
	this.shape_958.setTransform(227.2,10.9);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().s("#666666").ss(1,1,1).p("AyWiDMAktAEH");
	this.shape_959.setTransform(226.8,11.7);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#666666").ss(1,1,1).p("AyTh+MAkmAD9");
	this.shape_960.setTransform(226.3,12.4);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("#666666").ss(1,1,1).p("AyPh5MAkfADz");
	this.shape_961.setTransform(225.8,13.2);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#666666").ss(1,1,1).p("AyLh1MAkXADr");
	this.shape_962.setTransform(225.4,14);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f().s("#666666").ss(1,1,1).p("AyHhwMAkQADh");
	this.shape_963.setTransform(224.9,14.7);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#666666").ss(1,1,1).p("AyEhsMAkJADZ");
	this.shape_964.setTransform(224.4,15.5);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("#666666").ss(1,1,1).p("AyAhnMAkBADP");
	this.shape_965.setTransform(224,16.3);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#666666").ss(1,1,1).p("Ax9hjMAj7ADH");
	this.shape_966.setTransform(223.5,17.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("#666666").ss(1,1,1).p("Ax5heMAjzAC9");
	this.shape_967.setTransform(223,17.8);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#666666").ss(1,1,1).p("Ax1hZMAjrACz");
	this.shape_968.setTransform(222.6,18.6);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("#666666").ss(1,1,1).p("AxyhVMAjlACr");
	this.shape_969.setTransform(222.1,19.4);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#666666").ss(1,1,1).p("AxuhQMAjdACh");
	this.shape_970.setTransform(221.6,20.1);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("#666666").ss(1,1,1).p("AxqhMMAjVACZ");
	this.shape_971.setTransform(221.2,20.9);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#666666").ss(1,1,1).p("AxmhHMAjNACP");
	this.shape_972.setTransform(220.7,21.6);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("#666666").ss(1,1,1).p("AxjhDMAjHACH");
	this.shape_973.setTransform(220.2,22.4);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#666666").ss(1,1,1).p("Axfg+MAi/AB9");
	this.shape_974.setTransform(219.8,23.2);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("#666666").ss(1,1,1).p("Axbg6MAi3AB0");
	this.shape_975.setTransform(219.3,24);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#666666").ss(1,1,1).p("AxYg1MAixABr");
	this.shape_976.setTransform(218.8,24.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("#666666").ss(1,1,1).p("AxUgwMAipABh");
	this.shape_977.setTransform(218.4,25.5);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#666666").ss(1,1,1).p("AxQgsMAihABZ");
	this.shape_978.setTransform(217.9,26.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f().s("#666666").ss(1,1,1).p("AxNgnMAibABP");
	this.shape_979.setTransform(217.4,27);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#666666").ss(1,1,1).p("AxJgjMAiTABH");
	this.shape_980.setTransform(217,27.8);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f().s("#666666").ss(1,1,1).p("AxFgeMAiLAA9");
	this.shape_981.setTransform(216.5,28.6);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#666666").ss(1,1,1).p("AxCgaMAiFAA1");
	this.shape_982.setTransform(216,29.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f().s("#666666").ss(1,1,1).p("Aw+gVMAh9AAr");
	this.shape_983.setTransform(215.6,30.1);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#666666").ss(1,1,1).p("Aw6gRMAh1AAj");
	this.shape_984.setTransform(215.1,30.9);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f().s("#666666").ss(1,1,1).p("Aw3gMMAhvAAZ");
	this.shape_985.setTransform(214.6,31.6);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#666666").ss(1,1,1).p("AwzgHMAhnAAQ");
	this.shape_986.setTransform(214.1,32.4);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f().s("#666666").ss(1,1,1).p("AwvgDMAhfAAH");
	this.shape_987.setTransform(213.7,33.2);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#666666").ss(1,1,1).p("AwsAAMAhZAAA");
	this.shape_988.setTransform(213.2,34);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f().s("#666666").ss(1,1,1).p("AwoAFMAhRgAJ");
	this.shape_989.setTransform(212.7,34.7);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#666666").ss(1,1,1).p("AwkAKMAhJgAT");
	this.shape_990.setTransform(212.3,35.5);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f().s("#666666").ss(1,1,1).p("AwhAOMAhDgAb");
	this.shape_991.setTransform(211.8,36.3);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#666666").ss(1,1,1).p("AwdATMAg7gAl");
	this.shape_992.setTransform(211.3,37);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("#666666").ss(1,1,1).p("AwZAXMAgzgAt");
	this.shape_993.setTransform(210.9,37.8);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#666666").ss(1,1,1).p("AwWAcMAgtgA3");
	this.shape_994.setTransform(210.4,38.6);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().s("#666666").ss(1,1,1).p("AwSAgMAglgA/");
	this.shape_995.setTransform(209.9,39.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#666666").ss(1,1,1).p("AwOAlMAgdgBJ");
	this.shape_996.setTransform(209.5,40.1);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#666666").ss(1,1,1).p("AwLApMAgXgBR");
	this.shape_997.setTransform(209,40.9);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#666666").ss(1,1,1).p("AwHAuMAgPgBb");
	this.shape_998.setTransform(208.5,41.7);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("#666666").ss(1,1,1).p("AwDAyMAgHgBk");
	this.shape_999.setTransform(208.1,42.4);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#666666").ss(1,1,1).p("AwAA3MAgBgBt");
	this.shape_1000.setTransform(207.6,43.2);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#666666").ss(1,1,1).p("Av8A7If5h2");
	this.shape_1001.setTransform(207.1,44);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#666666").ss(1,1,1).p("Av4BAIfxh/");
	this.shape_1002.setTransform(206.7,44.7);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("#666666").ss(1,1,1).p("Av0BFIfpiJ");
	this.shape_1003.setTransform(206.2,45.5);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#666666").ss(1,1,1).p("AvxBJIfjiR");
	this.shape_1004.setTransform(205.7,46.3);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("#666666").ss(1,1,1).p("AvtBOIfbib");
	this.shape_1005.setTransform(205.3,47);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#666666").ss(1,1,1).p("AvpBSIfTij");
	this.shape_1006.setTransform(204.8,47.8);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f().s("#666666").ss(1,1,1).p("AvmBXIfNit");
	this.shape_1007.setTransform(204.3,48.6);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#666666").ss(1,1,1).p("AviBbIfFi1");
	this.shape_1008.setTransform(203.9,49.3);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f().s("#666666").ss(1,1,1).p("AveBgIe9i/");
	this.shape_1009.setTransform(203.4,50.1);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#666666").ss(1,1,1).p("AvaBlIe2jI");
	this.shape_1010.setTransform(202.9,50.9);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("#666666").ss(1,1,1).p("AvXBpIevjR");
	this.shape_1011.setTransform(202.5,51.7);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#666666").ss(1,1,1).p("AvTBtIenja");
	this.shape_1012.setTransform(202,52.4);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f().s("#666666").ss(1,1,1).p("AvaBkIe2jI");
	this.shape_1013.setTransform(202.9,50.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#666666").ss(1,1,1).p("AviBcIfFi3");
	this.shape_1014.setTransform(203.8,49.4);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().s("#666666").ss(1,1,1).p("AvlBXIfLit");
	this.shape_1015.setTransform(204.3,48.6);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#666666").ss(1,1,1).p("AvpBTIfTil");
	this.shape_1016.setTransform(204.8,47.9);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().s("#666666").ss(1,1,1).p("AvsBOIfaib");
	this.shape_1017.setTransform(205.2,47.1);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#666666").ss(1,1,1).p("AvwBKIfhiT");
	this.shape_1018.setTransform(205.7,46.3);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f().s("#666666").ss(1,1,1).p("Av3BBIfwiB");
	this.shape_1019.setTransform(206.6,44.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#666666").ss(1,1,1).p("Av7A8If3h3");
	this.shape_1020.setTransform(207.1,44.1);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#666666").ss(1,1,1).p("Av/A4If/hv");
	this.shape_1021.setTransform(207.5,43.3);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#666666").ss(1,1,1).p("AwCA0MAgFgBm");
	this.shape_1022.setTransform(208,42.6);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#666666").ss(1,1,1).p("AwGAvMAgNgBd");
	this.shape_1023.setTransform(208.5,41.8);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#666666").ss(1,1,1).p("AwKAqMAgVgBT");
	this.shape_1024.setTransform(208.9,41);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#666666").ss(1,1,1).p("AwNAmMAgbgBL");
	this.shape_1025.setTransform(209.4,40.3);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#666666").ss(1,1,1).p("AwRAhMAgjgBB");
	this.shape_1026.setTransform(209.8,39.5);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#666666").ss(1,1,1).p("AwVAdMAgrgA5");
	this.shape_1027.setTransform(210.3,38.8);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#666666").ss(1,1,1).p("AwYAZMAgxgAx");
	this.shape_1028.setTransform(210.7,38);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#666666").ss(1,1,1).p("AwcAUMAg5gAn");
	this.shape_1029.setTransform(211.2,37.3);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#666666").ss(1,1,1).p("AwgAPMAhBgAd");
	this.shape_1030.setTransform(211.7,36.5);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#666666").ss(1,1,1).p("AwjALMAhHgAV");
	this.shape_1031.setTransform(212.1,35.7);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#666666").ss(1,1,1).p("AwnAGMAhPgAM");
	this.shape_1032.setTransform(212.6,35);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#666666").ss(1,1,1).p("AwqACMAhVgAD");
	this.shape_1033.setTransform(213,34.2);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#666666").ss(1,1,1).p("AwugCMAhdAAF");
	this.shape_1034.setTransform(213.5,33.5);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("#666666").ss(1,1,1).p("AwygGMAhlAAN");
	this.shape_1035.setTransform(214,32.7);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#666666").ss(1,1,1).p("Aw1gLMAhrAAW");
	this.shape_1036.setTransform(214.4,32);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#666666").ss(1,1,1).p("Aw5gPMAhzAAf");
	this.shape_1037.setTransform(214.9,31.2);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#666666").ss(1,1,1).p("Aw9gTMAh6AAn");
	this.shape_1038.setTransform(215.4,30.4);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#666666").ss(1,1,1).p("AxAgYMAiBAAx");
	this.shape_1039.setTransform(215.8,29.7);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#666666").ss(1,1,1).p("AxEgcMAiJAA6");
	this.shape_1040.setTransform(216.3,28.9);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#666666").ss(1,1,1).p("AxHghMAiPABD");
	this.shape_1041.setTransform(216.7,28.2);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#666666").ss(1,1,1).p("AxLglMAiXABL");
	this.shape_1042.setTransform(217.2,27.4);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#666666").ss(1,1,1).p("AxPgqMAifABV");
	this.shape_1043.setTransform(217.7,26.6);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#666666").ss(1,1,1).p("AxSguMAilABd");
	this.shape_1044.setTransform(218.1,25.9);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#666666").ss(1,1,1).p("AxWgzMAitABn");
	this.shape_1045.setTransform(218.6,25.1);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#666666").ss(1,1,1).p("AxZg3MAizABv");
	this.shape_1046.setTransform(219,24.4);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#666666").ss(1,1,1).p("Axdg8MAi7AB4");
	this.shape_1047.setTransform(219.5,23.6);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#666666").ss(1,1,1).p("AxhhAMAjDACB");
	this.shape_1048.setTransform(220,22.9);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("#666666").ss(1,1,1).p("AxkhFMAjJACL");
	this.shape_1049.setTransform(220.4,22.1);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#666666").ss(1,1,1).p("AxohJMAjRACT");
	this.shape_1050.setTransform(220.9,21.3);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#666666").ss(1,1,1).p("AxshOMAjZACd");
	this.shape_1051.setTransform(221.4,20.6);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#666666").ss(1,1,1).p("AxvhSMAjfACl");
	this.shape_1052.setTransform(221.8,19.8);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#666666").ss(1,1,1).p("AxzhXMAjnACv");
	this.shape_1053.setTransform(222.3,19.1);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#666666").ss(1,1,1).p("Ax2hbMAjtAC3");
	this.shape_1054.setTransform(222.7,18.3);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("#666666").ss(1,1,1).p("Ax6hgMAj1ADA");
	this.shape_1055.setTransform(223.2,17.6);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#666666").ss(1,1,1).p("Ax9hkMAj8ADJ");
	this.shape_1056.setTransform(223.7,16.8);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("#666666").ss(1,1,1).p("AyBhoMAkDADR");
	this.shape_1057.setTransform(224.1,16);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#666666").ss(1,1,1).p("AyFhtMAkLADb");
	this.shape_1058.setTransform(224.6,15.3);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("#666666").ss(1,1,1).p("AyJhyMAkSADl");
	this.shape_1059.setTransform(225.1,14.5);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#666666").ss(1,1,1).p("AyMh2MAkZADt");
	this.shape_1060.setTransform(225.5,13.8);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("#666666").ss(1,1,1).p("AyQh7MAkhAD3");
	this.shape_1061.setTransform(226,13);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#666666").ss(1,1,1).p("AyTh/MAkoAD/");
	this.shape_1062.setTransform(226.4,12.2);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("#666666").ss(1,1,1).p("AyXiDMAkvAEH");
	this.shape_1063.setTransform(226.9,11.5);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#666666").ss(1,1,1).p("AybiIMAk3AER");
	this.shape_1064.setTransform(227.3,10.7);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("#666666").ss(1,1,1).p("AyeiMMAk9AEZ");
	this.shape_1065.setTransform(227.8,10);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#666666").ss(1,1,1).p("AyiiRMAlFAEj");
	this.shape_1066.setTransform(228.3,9.2);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("#666666").ss(1,1,1).p("AyliVMAlMAEr");
	this.shape_1067.setTransform(228.7,8.4);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#666666").ss(1,1,1).p("AypiaMAlTAE1");
	this.shape_1068.setTransform(229.2,7.7);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#666666").ss(1,1,1).p("AytieMAlbAE9");
	this.shape_1069.setTransform(229.6,6.9);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#666666").ss(1,1,1).p("AyxijMAljAFH");
	this.shape_1070.setTransform(230.1,6.2);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().s("#666666").ss(1,1,1).p("Ay4isMAlxAFZ");
	this.shape_1071.setTransform(231,4.7);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#666666").ss(1,1,1).p("Ay/i1MAl/AFr");
	this.shape_1072.setTransform(232,3.2);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f().s("#666666").ss(1,1,1).p("AzDi5MAmHAFz");
	this.shape_1073.setTransform(232.4,2.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#666666").ss(1,1,1).p("AzGi+MAmNAF9");
	this.shape_1074.setTransform(232.9,1.6);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f().s("#666666").ss(1,1,1).p("AzOjHMAmdAGP");
	this.shape_1075.setTransform(233.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_943}]}).to({state:[{t:this.shape_944}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_949,p:{y:4}}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_951,p:{x:230.5,y:5.5}}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_953}]},1).to({state:[{t:this.shape_954}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_956}]},1).to({state:[{t:this.shape_957}]},1).to({state:[{t:this.shape_958}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_968}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_971}]},1).to({state:[{t:this.shape_972}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_974}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_977}]},1).to({state:[{t:this.shape_978}]},1).to({state:[{t:this.shape_979}]},1).to({state:[{t:this.shape_980}]},1).to({state:[{t:this.shape_981}]},1).to({state:[{t:this.shape_982}]},1).to({state:[{t:this.shape_983}]},1).to({state:[{t:this.shape_984}]},1).to({state:[{t:this.shape_985}]},1).to({state:[{t:this.shape_986}]},1).to({state:[{t:this.shape_987}]},1).to({state:[{t:this.shape_988}]},1).to({state:[{t:this.shape_989}]},1).to({state:[{t:this.shape_990}]},1).to({state:[{t:this.shape_991}]},1).to({state:[{t:this.shape_992}]},1).to({state:[{t:this.shape_993}]},1).to({state:[{t:this.shape_994}]},1).to({state:[{t:this.shape_995}]},1).to({state:[{t:this.shape_996}]},1).to({state:[{t:this.shape_997}]},1).to({state:[{t:this.shape_998}]},1).to({state:[{t:this.shape_999}]},1).to({state:[{t:this.shape_1000}]},1).to({state:[{t:this.shape_1001}]},1).to({state:[{t:this.shape_1002}]},1).to({state:[{t:this.shape_1003,p:{x:206.2,y:45.5}}]},1).to({state:[{t:this.shape_1004}]},1).to({state:[{t:this.shape_1005}]},1).to({state:[{t:this.shape_1006}]},1).to({state:[{t:this.shape_1007}]},1).to({state:[{t:this.shape_1008}]},1).to({state:[{t:this.shape_1009}]},1).to({state:[{t:this.shape_1010}]},1).to({state:[{t:this.shape_1011,p:{x:202.5}}]},1).to({state:[{t:this.shape_1012}]},1).to({state:[{t:this.shape_1011,p:{x:202.4}}]},1).to({state:[{t:this.shape_1013}]},1).to({state:[{t:this.shape_1009}]},1).to({state:[{t:this.shape_1014}]},1).to({state:[{t:this.shape_1015}]},1).to({state:[{t:this.shape_1016}]},1).to({state:[{t:this.shape_1017}]},1).to({state:[{t:this.shape_1018}]},1).to({state:[{t:this.shape_1003,p:{x:206.1,y:45.6}}]},1).to({state:[{t:this.shape_1019}]},1).to({state:[{t:this.shape_1020}]},1).to({state:[{t:this.shape_1021}]},1).to({state:[{t:this.shape_1022}]},1).to({state:[{t:this.shape_1023}]},1).to({state:[{t:this.shape_1024}]},1).to({state:[{t:this.shape_1025}]},1).to({state:[{t:this.shape_1026}]},1).to({state:[{t:this.shape_1027}]},1).to({state:[{t:this.shape_1028}]},1).to({state:[{t:this.shape_1029}]},1).to({state:[{t:this.shape_1030}]},1).to({state:[{t:this.shape_1031}]},1).to({state:[{t:this.shape_1032}]},1).to({state:[{t:this.shape_1033}]},1).to({state:[{t:this.shape_1034}]},1).to({state:[{t:this.shape_1035}]},1).to({state:[{t:this.shape_1036}]},1).to({state:[{t:this.shape_1037}]},1).to({state:[{t:this.shape_1038}]},1).to({state:[{t:this.shape_1039}]},1).to({state:[{t:this.shape_1040}]},1).to({state:[{t:this.shape_1041}]},1).to({state:[{t:this.shape_1042}]},1).to({state:[{t:this.shape_1043}]},1).to({state:[{t:this.shape_1044}]},1).to({state:[{t:this.shape_1045}]},1).to({state:[{t:this.shape_1046}]},1).to({state:[{t:this.shape_1047}]},1).to({state:[{t:this.shape_1048}]},1).to({state:[{t:this.shape_1049}]},1).to({state:[{t:this.shape_1050}]},1).to({state:[{t:this.shape_1051}]},1).to({state:[{t:this.shape_1052}]},1).to({state:[{t:this.shape_1053}]},1).to({state:[{t:this.shape_1054}]},1).to({state:[{t:this.shape_1055}]},1).to({state:[{t:this.shape_1056}]},1).to({state:[{t:this.shape_1057}]},1).to({state:[{t:this.shape_1058}]},1).to({state:[{t:this.shape_1059}]},1).to({state:[{t:this.shape_1060}]},1).to({state:[{t:this.shape_1061}]},1).to({state:[{t:this.shape_1062}]},1).to({state:[{t:this.shape_1063}]},1).to({state:[{t:this.shape_1064}]},1).to({state:[{t:this.shape_1065}]},1).to({state:[{t:this.shape_1066}]},1).to({state:[{t:this.shape_1067}]},1).to({state:[{t:this.shape_1068}]},1).to({state:[{t:this.shape_1069}]},1).to({state:[{t:this.shape_1070}]},1).to({state:[{t:this.shape_951,p:{x:230.6,y:5.4}}]},1).to({state:[{t:this.shape_1071}]},1).to({state:[{t:this.shape_949,p:{y:3.9}}]},1).to({state:[{t:this.shape_1072}]},1).to({state:[{t:this.shape_1073}]},1).to({state:[{t:this.shape_1074}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_1075}]},1).to({state:[{t:this.shape_943}]},1).wait(1));

	// Слой 11
	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#666666").ss(1,1,1).p("Ai9yDMAF7AkH");
	this.shape_1076.setTransform(129.9,94.5);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f().s("#666666").ss(1,1,1).p("Ai+x+MAF9Aj9");
	this.shape_1077.setTransform(129.9,95.3);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#666666").ss(1,1,1).p("Ai/x5MAF/Ajz");
	this.shape_1078.setTransform(129.9,96);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f().s("#666666").ss(1,1,1).p("AjAx0MAGBAjp");
	this.shape_1079.setTransform(129.9,96.7);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#666666").ss(1,1,1).p("AjCxvMAGEAjf");
	this.shape_1080.setTransform(129.9,97.5);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().s("#666666").ss(1,1,1).p("AjCxqMAGGAjV");
	this.shape_1081.setTransform(129.9,98.2);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#666666").ss(1,1,1).p("AjExlMAGJAjL");
	this.shape_1082.setTransform(129.9,98.9);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f().s("#666666").ss(1,1,1).p("AjFxhMAGLAjD");
	this.shape_1083.setTransform(129.9,99.7);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#666666").ss(1,1,1).p("AjGxbMAGMAi3");
	this.shape_1084.setTransform(129.9,100.4);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f().s("#666666").ss(1,1,1).p("AjHxXMAGOAiv");
	this.shape_1085.setTransform(129.9,101.1);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#666666").ss(1,1,1).p("AjHxSMAGQAil");
	this.shape_1086.setTransform(129.9,101.9);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f().s("#666666").ss(1,1,1).p("AjJxNMAGTAib");
	this.shape_1087.setTransform(129.9,102.6);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#666666").ss(1,1,1).p("AjKxIMAGVAiR");
	this.shape_1088.setTransform(129.9,103.3);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f().s("#666666").ss(1,1,1).p("AjLxDMAGXAiH");
	this.shape_1089.setTransform(129.9,104);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#666666").ss(1,1,1).p("AjMw+MAGZAh9");
	this.shape_1090.setTransform(129.9,104.8);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("#666666").ss(1,1,1).p("AjNw5MAGbAhz");
	this.shape_1091.setTransform(129.9,105.5);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#666666").ss(1,1,1).p("AjOw0MAGdAhp");
	this.shape_1092.setTransform(129.9,106.2);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f().s("#666666").ss(1,1,1).p("AjPwvMAGfAhf");
	this.shape_1093.setTransform(129.9,107);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#666666").ss(1,1,1).p("AjQwqMAGhAhV");
	this.shape_1094.setTransform(130,107.7);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("#666666").ss(1,1,1).p("AjRwlMAGjAhL");
	this.shape_1095.setTransform(130,108.4);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#666666").ss(1,1,1).p("AjSwhMAGlAhD");
	this.shape_1096.setTransform(130,109.2);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f().s("#666666").ss(1,1,1).p("AjTwcMAGnAg5");
	this.shape_1097.setTransform(130,109.9);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#666666").ss(1,1,1).p("AjUwXMAGpAgv");
	this.shape_1098.setTransform(130,110.6);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("#666666").ss(1,1,1).p("AjVwSMAGrAgl");
	this.shape_1099.setTransform(130,111.4);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#666666").ss(1,1,1).p("AjWwNMAGtAgb");
	this.shape_1100.setTransform(130,112.1);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f().s("#666666").ss(1,1,1).p("AjXwIMAGvAgR");
	this.shape_1101.setTransform(130,112.8);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#666666").ss(1,1,1).p("AjYwDMAGxAgH");
	this.shape_1102.setTransform(130,113.6);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().s("#666666").ss(1,1,1).p("AjZv+IGzf9");
	this.shape_1103.setTransform(130,114.3);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#666666").ss(1,1,1).p("Ajav5IG1fz");
	this.shape_1104.setTransform(130,115);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f().s("#666666").ss(1,1,1).p("Ajbv0IG3fp");
	this.shape_1105.setTransform(130,115.7);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#666666").ss(1,1,1).p("AjcvvIG5ff");
	this.shape_1106.setTransform(130,116.5);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f().s("#666666").ss(1,1,1).p("AjdvrIG7fX");
	this.shape_1107.setTransform(130,117.2);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#666666").ss(1,1,1).p("AjevmIG9fN");
	this.shape_1108.setTransform(130,118);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f().s("#666666").ss(1,1,1).p("AjgvhIHAfD");
	this.shape_1109.setTransform(130,118.7);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#666666").ss(1,1,1).p("AjgvcIHCe5");
	this.shape_1110.setTransform(130,119.4);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("#666666").ss(1,1,1).p("AjivXIHFev");
	this.shape_1111.setTransform(130,120.1);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#666666").ss(1,1,1).p("AjjvSIHHel");
	this.shape_1112.setTransform(130,120.9);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("#666666").ss(1,1,1).p("AjjvNIHHeb");
	this.shape_1113.setTransform(130,121.6);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#666666").ss(1,1,1).p("AjlvIIHLeR");
	this.shape_1114.setTransform(130,122.3);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("#666666").ss(1,1,1).p("AjmvDIHNeH");
	this.shape_1115.setTransform(130,123.1);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#666666").ss(1,1,1).p("Ajnu+IHPd9");
	this.shape_1116.setTransform(130,123.8);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f().s("#666666").ss(1,1,1).p("Ajou5IHRdz");
	this.shape_1117.setTransform(130,124.5);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#666666").ss(1,1,1).p("Ajpu0IHTdp");
	this.shape_1118.setTransform(130,125.2);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("#666666").ss(1,1,1).p("AjquvIHVdf");
	this.shape_1119.setTransform(130,126);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#666666").ss(1,1,1).p("AjrurIHXdX");
	this.shape_1120.setTransform(130,126.7);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("#666666").ss(1,1,1).p("AjsumIHZdN");
	this.shape_1121.setTransform(130.1,127.5);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#666666").ss(1,1,1).p("AjtuhIHbdD");
	this.shape_1122.setTransform(130.1,128.2);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f().s("#666666").ss(1,1,1).p("AjuucIHdc4");
	this.shape_1123.setTransform(130.1,128.9);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#666666").ss(1,1,1).p("AjvuXIHfcv");
	this.shape_1124.setTransform(130.1,129.6);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().s("#666666").ss(1,1,1).p("AjwuSIHhcl");
	this.shape_1125.setTransform(130.1,130.4);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#666666").ss(1,1,1).p("AjxuNIHjcb");
	this.shape_1126.setTransform(130.1,131.1);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f().s("#666666").ss(1,1,1).p("AjyuIIHlcR");
	this.shape_1127.setTransform(130.1,131.9);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#666666").ss(1,1,1).p("AjzuDIHncH");
	this.shape_1128.setTransform(130.1,132.6);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f().s("#666666").ss(1,1,1).p("Aj0t+IHpb9");
	this.shape_1129.setTransform(130.1,133.3);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#666666").ss(1,1,1).p("Aj1t5IHrbz");
	this.shape_1130.setTransform(130.1,134);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f().s("#666666").ss(1,1,1).p("Aj2t0IHtbp");
	this.shape_1131.setTransform(130.1,134.8);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#666666").ss(1,1,1).p("Aj3twIHvbh");
	this.shape_1132.setTransform(130.1,135.5);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f().s("#666666").ss(1,1,1).p("Aj4tqIHxbW");
	this.shape_1133.setTransform(130.1,136.2);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#666666").ss(1,1,1).p("Aj5tlIHzbM");
	this.shape_1134.setTransform(130.1,137);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f().s("#666666").ss(1,1,1).p("Aj6thIH2bD");
	this.shape_1135.setTransform(130.1,137.7);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#666666").ss(1,1,1).p("Aj8tcIH5a5");
	this.shape_1136.setTransform(130.1,138.4);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f().s("#666666").ss(1,1,1).p("Aj8tXIH5av");
	this.shape_1137.setTransform(130.1,139.2);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#666666").ss(1,1,1).p("Aj+tSIH8al");
	this.shape_1138.setTransform(130.1,139.9);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f().s("#666666").ss(1,1,1).p("Aj+tNIH+ab");
	this.shape_1139.setTransform(130.1,140.6);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#666666").ss(1,1,1).p("Aj/tIIIAaR");
	this.shape_1140.setTransform(130.1,141.4);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f().s("#666666").ss(1,1,1).p("AkBtDIIDaH");
	this.shape_1141.setTransform(130.1,142.1);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#666666").ss(1,1,1).p("AkCs+IIFZ9");
	this.shape_1142.setTransform(130.1,142.8);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f().s("#666666").ss(1,1,1).p("AkDs5IIHZz");
	this.shape_1143.setTransform(130.1,143.5);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#666666").ss(1,1,1).p("AkEs0IIJZp");
	this.shape_1144.setTransform(130.1,144.3);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f().s("#666666").ss(1,1,1).p("AkFswIILZh");
	this.shape_1145.setTransform(130.1,145);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#666666").ss(1,1,1).p("Aj+tRIH8ak");
	this.shape_1146.setTransform(130.1,140);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f().s("#666666").ss(1,1,1).p("Aj8tWIH5at");
	this.shape_1147.setTransform(130.1,139.2);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#666666").ss(1,1,1).p("Aj8tbIH5a3");
	this.shape_1148.setTransform(130.1,138.5);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f().s("#666666").ss(1,1,1).p("Aj6tgIH2bB");
	this.shape_1149.setTransform(130.1,137.8);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#666666").ss(1,1,1).p("Aj5tlIH0bL");
	this.shape_1150.setTransform(130.1,137.1);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f().s("#666666").ss(1,1,1).p("Aj5tpIHybU");
	this.shape_1151.setTransform(130.1,136.4);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#666666").ss(1,1,1).p("Aj3tvIHvbe");
	this.shape_1152.setTransform(130.1,135.7);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f().s("#666666").ss(1,1,1).p("Aj2t0IHtbo");
	this.shape_1153.setTransform(130.1,134.9);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#666666").ss(1,1,1).p("Aj1t4IHrbx");
	this.shape_1154.setTransform(130.1,134.2);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f().s("#666666").ss(1,1,1).p("Aj0t9IHpb7");
	this.shape_1155.setTransform(130.1,133.5);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#666666").ss(1,1,1).p("AjzuCIHncF");
	this.shape_1156.setTransform(130.1,132.8);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f().s("#666666").ss(1,1,1).p("AjzuHIHmcP");
	this.shape_1157.setTransform(130.1,132);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#666666").ss(1,1,1).p("AjyuMIHlcZ");
	this.shape_1158.setTransform(130.1,131.3);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f().s("#666666").ss(1,1,1).p("AjxuQIHich");
	this.shape_1159.setTransform(130.1,130.6);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#666666").ss(1,1,1).p("AjwuVIHgcr");
	this.shape_1160.setTransform(130.1,129.9);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f().s("#666666").ss(1,1,1).p("AjuuaIHdc1");
	this.shape_1161.setTransform(130,129.1);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#666666").ss(1,1,1).p("AjtufIHbc/");
	this.shape_1162.setTransform(130,128.4);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f().s("#666666").ss(1,1,1).p("AjsukIHZdJ");
	this.shape_1163.setTransform(130,127.7);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#666666").ss(1,1,1).p("AjrupIHXdT");
	this.shape_1164.setTransform(130,127);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f().s("#666666").ss(1,1,1).p("AjquuIHVdd");
	this.shape_1165.setTransform(130,126.3);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#666666").ss(1,1,1).p("AjpuyIHTdl");
	this.shape_1166.setTransform(130,125.5);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f().s("#666666").ss(1,1,1).p("Ajou3IHRdv");
	this.shape_1167.setTransform(130,124.8);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#666666").ss(1,1,1).p("Ajnu8IHPd5");
	this.shape_1168.setTransform(130,124.1);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().s("#666666").ss(1,1,1).p("AjmvBIHNeD");
	this.shape_1169.setTransform(130,123.4);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#666666").ss(1,1,1).p("AjlvGIHLeN");
	this.shape_1170.setTransform(130,122.6);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f().s("#666666").ss(1,1,1).p("AjkvLIHJeX");
	this.shape_1171.setTransform(130,121.9);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#666666").ss(1,1,1).p("AjjvQIHHeg");
	this.shape_1172.setTransform(130,121.2);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#666666").ss(1,1,1).p("AjivUIHFep");
	this.shape_1173.setTransform(130,120.5);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#666666").ss(1,1,1).p("AjhvZIHDez");
	this.shape_1174.setTransform(130,119.8);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f().s("#666666").ss(1,1,1).p("AjgveIHBe9");
	this.shape_1175.setTransform(130,119.1);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#666666").ss(1,1,1).p("AjfvjIG/fH");
	this.shape_1176.setTransform(130,118.3);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f().s("#666666").ss(1,1,1).p("AjevoIG9fR");
	this.shape_1177.setTransform(130,117.6);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#666666").ss(1,1,1).p("AjdvsIG7fa");
	this.shape_1178.setTransform(130,116.9);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f().s("#666666").ss(1,1,1).p("AjcvyIG5fl");
	this.shape_1179.setTransform(130,116.2);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#666666").ss(1,1,1).p("Ajbv2IG3ft");
	this.shape_1180.setTransform(130,115.4);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f().s("#666666").ss(1,1,1).p("Ajav7IG1f3");
	this.shape_1181.setTransform(130,114.7);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#666666").ss(1,1,1).p("AjZwAMAGzAgB");
	this.shape_1182.setTransform(130,114);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#666666").ss(1,1,1).p("AjYwFMAGxAgL");
	this.shape_1183.setTransform(130,113.3);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#666666").ss(1,1,1).p("AjXwKMAGvAgV");
	this.shape_1184.setTransform(130,112.6);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#666666").ss(1,1,1).p("AjWwOMAGtAgd");
	this.shape_1185.setTransform(130,111.8);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#666666").ss(1,1,1).p("AjVwTMAGrAgn");
	this.shape_1186.setTransform(130,111.1);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#666666").ss(1,1,1).p("AjUwYMAGpAgx");
	this.shape_1187.setTransform(130,110.4);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#666666").ss(1,1,1).p("AjSwdMAGmAg7");
	this.shape_1188.setTransform(130,109.7);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#666666").ss(1,1,1).p("AjRwiMAGkAhF");
	this.shape_1189.setTransform(130,109);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#666666").ss(1,1,1).p("AjQwnMAGiAhP");
	this.shape_1190.setTransform(130,108.2);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#666666").ss(1,1,1).p("AjPwsMAGgAhZ");
	this.shape_1191.setTransform(130,107.5);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#666666").ss(1,1,1).p("AjPwwMAGfAhh");
	this.shape_1192.setTransform(129.9,106.8);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#666666").ss(1,1,1).p("AjOw1MAGdAhr");
	this.shape_1193.setTransform(129.9,106.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#666666").ss(1,1,1).p("AjNw6MAGbAh1");
	this.shape_1194.setTransform(129.9,105.4);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#666666").ss(1,1,1).p("AjMw/MAGZAh/");
	this.shape_1195.setTransform(129.9,104.6);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#666666").ss(1,1,1).p("AjLxEMAGWAiJ");
	this.shape_1196.setTransform(129.9,103.9);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#666666").ss(1,1,1).p("AjKxJMAGVAiT");
	this.shape_1197.setTransform(129.9,103.2);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#666666").ss(1,1,1).p("AjJxNMAGTAic");
	this.shape_1198.setTransform(129.9,102.5);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#666666").ss(1,1,1).p("AjGxcMAGMAi5");
	this.shape_1199.setTransform(129.9,100.3);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#666666").ss(1,1,1).p("AjExmMAGJAjN");
	this.shape_1200.setTransform(129.9,98.9);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#666666").ss(1,1,1).p("AjCxrMAGGAjX");
	this.shape_1201.setTransform(129.9,98.2);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#666666").ss(1,1,1).p("AjBxwMAGDAjh");
	this.shape_1202.setTransform(129.9,97.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1076}]}).to({state:[{t:this.shape_1077}]},1).to({state:[{t:this.shape_1078}]},1).to({state:[{t:this.shape_1079}]},1).to({state:[{t:this.shape_1080}]},1).to({state:[{t:this.shape_1081}]},1).to({state:[{t:this.shape_1082}]},1).to({state:[{t:this.shape_1083,p:{y:99.7}}]},1).to({state:[{t:this.shape_1084}]},1).to({state:[{t:this.shape_1085,p:{y:101.1}}]},1).to({state:[{t:this.shape_1086,p:{y:101.9}}]},1).to({state:[{t:this.shape_1087}]},1).to({state:[{t:this.shape_1088}]},1).to({state:[{t:this.shape_1089}]},1).to({state:[{t:this.shape_1090}]},1).to({state:[{t:this.shape_1091}]},1).to({state:[{t:this.shape_1092}]},1).to({state:[{t:this.shape_1093}]},1).to({state:[{t:this.shape_1094}]},1).to({state:[{t:this.shape_1095}]},1).to({state:[{t:this.shape_1096}]},1).to({state:[{t:this.shape_1097}]},1).to({state:[{t:this.shape_1098}]},1).to({state:[{t:this.shape_1099}]},1).to({state:[{t:this.shape_1100}]},1).to({state:[{t:this.shape_1101}]},1).to({state:[{t:this.shape_1102}]},1).to({state:[{t:this.shape_1103}]},1).to({state:[{t:this.shape_1104}]},1).to({state:[{t:this.shape_1105}]},1).to({state:[{t:this.shape_1106}]},1).to({state:[{t:this.shape_1107}]},1).to({state:[{t:this.shape_1108}]},1).to({state:[{t:this.shape_1109}]},1).to({state:[{t:this.shape_1110}]},1).to({state:[{t:this.shape_1111}]},1).to({state:[{t:this.shape_1112}]},1).to({state:[{t:this.shape_1113}]},1).to({state:[{t:this.shape_1114}]},1).to({state:[{t:this.shape_1115}]},1).to({state:[{t:this.shape_1116}]},1).to({state:[{t:this.shape_1117}]},1).to({state:[{t:this.shape_1118}]},1).to({state:[{t:this.shape_1119}]},1).to({state:[{t:this.shape_1120}]},1).to({state:[{t:this.shape_1121}]},1).to({state:[{t:this.shape_1122}]},1).to({state:[{t:this.shape_1123}]},1).to({state:[{t:this.shape_1124}]},1).to({state:[{t:this.shape_1125}]},1).to({state:[{t:this.shape_1126}]},1).to({state:[{t:this.shape_1127}]},1).to({state:[{t:this.shape_1128}]},1).to({state:[{t:this.shape_1129}]},1).to({state:[{t:this.shape_1130}]},1).to({state:[{t:this.shape_1131}]},1).to({state:[{t:this.shape_1132}]},1).to({state:[{t:this.shape_1133}]},1).to({state:[{t:this.shape_1134}]},1).to({state:[{t:this.shape_1135}]},1).to({state:[{t:this.shape_1136}]},1).to({state:[{t:this.shape_1137}]},1).to({state:[{t:this.shape_1138}]},1).to({state:[{t:this.shape_1139,p:{y:140.6}}]},1).to({state:[{t:this.shape_1140}]},1).to({state:[{t:this.shape_1141}]},1).to({state:[{t:this.shape_1142,p:{y:142.8}}]},1).to({state:[{t:this.shape_1143,p:{y:143.5}}]},1).to({state:[{t:this.shape_1144}]},1).to({state:[{t:this.shape_1145}]},1).to({state:[{t:this.shape_1144}]},1).to({state:[{t:this.shape_1143,p:{y:143.6}}]},1).to({state:[{t:this.shape_1142,p:{y:142.9}}]},1).to({state:[{t:this.shape_1141}]},1).to({state:[{t:this.shape_1140}]},1).to({state:[{t:this.shape_1139,p:{y:140.7}}]},1).to({state:[{t:this.shape_1146}]},1).to({state:[{t:this.shape_1147}]},1).to({state:[{t:this.shape_1148}]},1).to({state:[{t:this.shape_1149}]},1).to({state:[{t:this.shape_1150}]},1).to({state:[{t:this.shape_1151}]},1).to({state:[{t:this.shape_1152}]},1).to({state:[{t:this.shape_1153}]},1).to({state:[{t:this.shape_1154}]},1).to({state:[{t:this.shape_1155}]},1).to({state:[{t:this.shape_1156}]},1).to({state:[{t:this.shape_1157}]},1).to({state:[{t:this.shape_1158}]},1).to({state:[{t:this.shape_1159}]},1).to({state:[{t:this.shape_1160}]},1).to({state:[{t:this.shape_1161}]},1).to({state:[{t:this.shape_1162}]},1).to({state:[{t:this.shape_1163}]},1).to({state:[{t:this.shape_1164}]},1).to({state:[{t:this.shape_1165}]},1).to({state:[{t:this.shape_1166}]},1).to({state:[{t:this.shape_1167}]},1).to({state:[{t:this.shape_1168}]},1).to({state:[{t:this.shape_1169}]},1).to({state:[{t:this.shape_1170}]},1).to({state:[{t:this.shape_1171}]},1).to({state:[{t:this.shape_1172}]},1).to({state:[{t:this.shape_1173}]},1).to({state:[{t:this.shape_1174}]},1).to({state:[{t:this.shape_1175}]},1).to({state:[{t:this.shape_1176}]},1).to({state:[{t:this.shape_1177}]},1).to({state:[{t:this.shape_1178}]},1).to({state:[{t:this.shape_1179}]},1).to({state:[{t:this.shape_1180}]},1).to({state:[{t:this.shape_1181}]},1).to({state:[{t:this.shape_1182}]},1).to({state:[{t:this.shape_1183}]},1).to({state:[{t:this.shape_1184}]},1).to({state:[{t:this.shape_1185}]},1).to({state:[{t:this.shape_1186}]},1).to({state:[{t:this.shape_1187}]},1).to({state:[{t:this.shape_1188}]},1).to({state:[{t:this.shape_1189}]},1).to({state:[{t:this.shape_1190}]},1).to({state:[{t:this.shape_1191}]},1).to({state:[{t:this.shape_1192}]},1).to({state:[{t:this.shape_1193}]},1).to({state:[{t:this.shape_1194}]},1).to({state:[{t:this.shape_1195}]},1).to({state:[{t:this.shape_1196}]},1).to({state:[{t:this.shape_1197}]},1).to({state:[{t:this.shape_1198}]},1).to({state:[{t:this.shape_1086,p:{y:101.7}}]},1).to({state:[{t:this.shape_1085,p:{y:101}}]},1).to({state:[{t:this.shape_1199}]},1).to({state:[{t:this.shape_1083,p:{y:99.6}}]},1).to({state:[{t:this.shape_1200}]},1).to({state:[{t:this.shape_1201}]},1).to({state:[{t:this.shape_1202}]},1).to({state:[{t:this.shape_1079}]},1).to({state:[{t:this.shape_1078}]},1).to({state:[{t:this.shape_1077}]},1).to({state:[{t:this.shape_1076}]},1).wait(1));

	// Слой 10
	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#666666").ss(1,1,1).p("AwTO4MAgngdv");
	this.shape_1203.setTransform(253.3,114.9);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#666666").ss(1,1,1).p("AwOO3MAgdgdu");
	this.shape_1204.setTransform(252.9,115.2);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#666666").ss(1,1,1).p("AwKO3MAgVgdt");
	this.shape_1205.setTransform(252.6,115.5);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#666666").ss(1,1,1).p("AwFO3MAgLgdt");
	this.shape_1206.setTransform(252.2,115.8);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#666666").ss(1,1,1).p("AwAO2MAgBgdr");
	this.shape_1207.setTransform(251.8,116);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#666666").ss(1,1,1).p("Av7O2If39r");
	this.shape_1208.setTransform(251.5,116.3);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f().s("#666666").ss(1,1,1).p("Av2O2Ift9r");
	this.shape_1209.setTransform(251.1,116.6);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#666666").ss(1,1,1).p("AvyO1Ifl9p");
	this.shape_1210.setTransform(250.7,116.9);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#666666").ss(1,1,1).p("AvtO1Ifb9p");
	this.shape_1211.setTransform(250.4,117.1);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#666666").ss(1,1,1).p("AvpO0IfS9n");
	this.shape_1212.setTransform(250,117.4);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#666666").ss(1,1,1).p("AvkO0IfJ9n");
	this.shape_1213.setTransform(249.6,117.7);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#666666").ss(1,1,1).p("AvfO0Ie/9n");
	this.shape_1214.setTransform(249.3,118);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#666666").ss(1,1,1).p("AvaO0Ie19n");
	this.shape_1215.setTransform(248.9,118.3);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#666666").ss(1,1,1).p("AvWOzIet9l");
	this.shape_1216.setTransform(248.6,118.5);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#666666").ss(1,1,1).p("AvROyIej9k");
	this.shape_1217.setTransform(248.2,118.8);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#666666").ss(1,1,1).p("AvMOyIeZ9j");
	this.shape_1218.setTransform(247.8,119.1);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#666666").ss(1,1,1).p("AvIOyIeR9j");
	this.shape_1219.setTransform(247.5,119.4);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#666666").ss(1,1,1).p("AvDOyIeH9i");
	this.shape_1220.setTransform(247.1,119.7);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#666666").ss(1,1,1).p("Au+OxId99h");
	this.shape_1221.setTransform(246.7,119.9);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#666666").ss(1,1,1).p("Au5OxIdz9h");
	this.shape_1222.setTransform(246.4,120.2);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#666666").ss(1,1,1).p("Au0OwIdp9f");
	this.shape_1223.setTransform(246,120.5);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#666666").ss(1,1,1).p("AuwOwIdh9f");
	this.shape_1224.setTransform(245.6,120.8);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#666666").ss(1,1,1).p("AurOwIdX9f");
	this.shape_1225.setTransform(245.3,121);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#666666").ss(1,1,1).p("AumOvIdO9d");
	this.shape_1226.setTransform(244.9,121.3);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#666666").ss(1,1,1).p("AuiOvIdF9d");
	this.shape_1227.setTransform(244.5,121.6);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#666666").ss(1,1,1).p("AudOvIc79d");
	this.shape_1228.setTransform(244.2,121.9);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#666666").ss(1,1,1).p("AuYOuIcx9b");
	this.shape_1229.setTransform(243.8,122.2);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#666666").ss(1,1,1).p("AuUOuIcp9b");
	this.shape_1230.setTransform(243.5,122.4);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#666666").ss(1,1,1).p("AuPOtIcf9Z");
	this.shape_1231.setTransform(243.1,122.7);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#666666").ss(1,1,1).p("AuKOtIcV9Z");
	this.shape_1232.setTransform(242.7,123);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#666666").ss(1,1,1).p("AuGOtIcN9Z");
	this.shape_1233.setTransform(242.4,123.3);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#666666").ss(1,1,1).p("AuBOsIcD9X");
	this.shape_1234.setTransform(242,123.5);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#666666").ss(1,1,1).p("At8OsIb59X");
	this.shape_1235.setTransform(241.6,123.8);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("#666666").ss(1,1,1).p("At3OrIbv9V");
	this.shape_1236.setTransform(241.3,124.1);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f().s("#666666").ss(1,1,1).p("AtzOrIbn9V");
	this.shape_1237.setTransform(240.9,124.4);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("#666666").ss(1,1,1).p("AtuOrIbd9V");
	this.shape_1238.setTransform(240.5,124.6);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#666666").ss(1,1,1).p("AtpOrIbT9V");
	this.shape_1239.setTransform(240.2,124.9);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("#666666").ss(1,1,1).p("AtlOqIbK9T");
	this.shape_1240.setTransform(239.8,125.2);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f().s("#666666").ss(1,1,1).p("AtfOqIa/9S");
	this.shape_1241.setTransform(239.5,125.5);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("#666666").ss(1,1,1).p("AtbOpIa39R");
	this.shape_1242.setTransform(239.1,125.7);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f().s("#666666").ss(1,1,1).p("AtWOpIat9R");
	this.shape_1243.setTransform(238.7,126);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("#666666").ss(1,1,1).p("AtROoIaj9Q");
	this.shape_1244.setTransform(238.4,126.3);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#666666").ss(1,1,1).p("AtNOoIab9P");
	this.shape_1245.setTransform(238,126.6);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("#666666").ss(1,1,1).p("AtIOoIaR9P");
	this.shape_1246.setTransform(237.6,126.8);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#666666").ss(1,1,1).p("AtEOnIaI9N");
	this.shape_1247.setTransform(237.3,127.1);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("#666666").ss(1,1,1).p("As/OnIZ/9N");
	this.shape_1248.setTransform(236.9,127.4);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f().s("#666666").ss(1,1,1).p("As6OnIZ19N");
	this.shape_1249.setTransform(236.5,127.7);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("#666666").ss(1,1,1).p("As1OmIZr9L");
	this.shape_1250.setTransform(236.2,128);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f().s("#666666").ss(1,1,1).p("AsxOmIZj9L");
	this.shape_1251.setTransform(235.8,128.2);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("#666666").ss(1,1,1).p("AssOmIZZ9L");
	this.shape_1252.setTransform(235.4,128.5);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#666666").ss(1,1,1).p("AsnOlIZP9J");
	this.shape_1253.setTransform(235.1,128.8);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f().s("#666666").ss(1,1,1).p("AsjOlIZH9J");
	this.shape_1254.setTransform(234.7,129.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#666666").ss(1,1,1).p("AseOkIY99H");
	this.shape_1255.setTransform(234.4,129.3);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("#666666").ss(1,1,1).p("AsZOkIYz9H");
	this.shape_1256.setTransform(234,129.6);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#666666").ss(1,1,1).p("AsUOkIYp9H");
	this.shape_1257.setTransform(233.6,129.9);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("#666666").ss(1,1,1).p("AsPOjIYf9F");
	this.shape_1258.setTransform(233.3,130.2);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#666666").ss(1,1,1).p("AsLOjIYX9F");
	this.shape_1259.setTransform(232.9,130.5);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("#666666").ss(1,1,1).p("AsGOiIYN9D");
	this.shape_1260.setTransform(232.5,130.7);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f().s("#666666").ss(1,1,1).p("AsBOiIYE9D");
	this.shape_1261.setTransform(232.2,131);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("#666666").ss(1,1,1).p("Ar9OiIX79D");
	this.shape_1262.setTransform(231.8,131.3);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f().s("#666666").ss(1,1,1).p("Ar4OhIXx9C");
	this.shape_1263.setTransform(231.4,131.6);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f().s("#666666").ss(1,1,1).p("ArzOhIXn9B");
	this.shape_1264.setTransform(231.1,131.9);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("#666666").ss(1,1,1).p("ArvOhIXf9B");
	this.shape_1265.setTransform(230.7,132.1);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f().s("#666666").ss(1,1,1).p("ArqOgIXV8/");
	this.shape_1266.setTransform(230.3,132.4);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#666666").ss(1,1,1).p("ArlOgIXL8/");
	this.shape_1267.setTransform(230,132.7);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f().s("#666666").ss(1,1,1).p("ArhOgIXD8+");
	this.shape_1268.setTransform(229.6,133);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("#666666").ss(1,1,1).p("ArcOfIW589");
	this.shape_1269.setTransform(229.3,133.2);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f().s("#666666").ss(1,1,1).p("ArXOfIWv89");
	this.shape_1270.setTransform(228.9,133.5);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("#666666").ss(1,1,1).p("ArSOeIWl87");
	this.shape_1271.setTransform(228.5,133.8);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f().s("#666666").ss(1,1,1).p("ArOOeIWd87");
	this.shape_1272.setTransform(228.2,134.1);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("#666666").ss(1,1,1).p("ArbOfIW389");
	this.shape_1273.setTransform(229.2,133.2);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f().s("#666666").ss(1,1,1).p("ArgOgIXB8+");
	this.shape_1274.setTransform(229.6,133);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#666666").ss(1,1,1).p("ArqOgIXU8/");
	this.shape_1275.setTransform(230.3,132.4);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f().s("#666666").ss(1,1,1).p("AruOhIXd9B");
	this.shape_1276.setTransform(230.7,132.2);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#666666").ss(1,1,1).p("Ar3OhIXv9B");
	this.shape_1277.setTransform(231.4,131.6);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f().s("#666666").ss(1,1,1).p("Ar8OiIX59D");
	this.shape_1278.setTransform(231.8,131.3);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("#666666").ss(1,1,1).p("AsBOiIYC9D");
	this.shape_1279.setTransform(232.1,131.1);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f().s("#666666").ss(1,1,1).p("AsFOiIYL9D");
	this.shape_1280.setTransform(232.5,130.8);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("#666666").ss(1,1,1).p("AsKOjIYV9F");
	this.shape_1281.setTransform(232.8,130.5);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f().s("#666666").ss(1,1,1).p("AsTOkIYn9G");
	this.shape_1282.setTransform(233.5,130);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("#666666").ss(1,1,1).p("AsYOkIYx9H");
	this.shape_1283.setTransform(233.9,129.7);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("#666666").ss(1,1,1).p("AsdOkIY79H");
	this.shape_1284.setTransform(234.3,129.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("#666666").ss(1,1,1).p("AshOlIZD9J");
	this.shape_1285.setTransform(234.6,129.1);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("#666666").ss(1,1,1).p("AsmOlIZN9J");
	this.shape_1286.setTransform(235,128.9);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f().s("#666666").ss(1,1,1).p("AsqOlIZV9J");
	this.shape_1287.setTransform(235.3,128.6);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#666666").ss(1,1,1).p("AsvOmIZf9L");
	this.shape_1288.setTransform(235.7,128.3);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#666666").ss(1,1,1).p("As0OmIZp9L");
	this.shape_1289.setTransform(236,128.1);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f().s("#666666").ss(1,1,1).p("As4OmIZy9M");
	this.shape_1290.setTransform(236.4,127.8);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#666666").ss(1,1,1).p("As9OnIZ79N");
	this.shape_1291.setTransform(236.8,127.5);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f().s("#666666").ss(1,1,1).p("AtCOnIaF9N");
	this.shape_1292.setTransform(237.1,127.2);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#666666").ss(1,1,1).p("AtGOoIaN9P");
	this.shape_1293.setTransform(237.5,127);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f().s("#666666").ss(1,1,1).p("AtLOoIaX9P");
	this.shape_1294.setTransform(237.9,126.7);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#666666").ss(1,1,1).p("AtQOpIah9R");
	this.shape_1295.setTransform(238.2,126.4);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f().s("#666666").ss(1,1,1).p("AtUOpIap9R");
	this.shape_1296.setTransform(238.6,126.1);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#666666").ss(1,1,1).p("AtZOpIaz9R");
	this.shape_1297.setTransform(238.9,125.9);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f().s("#666666").ss(1,1,1).p("AteOpIa99R");
	this.shape_1298.setTransform(239.3,125.6);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#666666").ss(1,1,1).p("AtiOqIbF9T");
	this.shape_1299.setTransform(239.6,125.3);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f().s("#666666").ss(1,1,1).p("AtnOqIbP9T");
	this.shape_1300.setTransform(240,125);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#666666").ss(1,1,1).p("AtsOrIbZ9V");
	this.shape_1301.setTransform(240.4,124.8);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f().s("#666666").ss(1,1,1).p("AtwOrIbh9V");
	this.shape_1302.setTransform(240.7,124.5);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("#666666").ss(1,1,1).p("At1OrIbr9V");
	this.shape_1303.setTransform(241.1,124.2);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f().s("#666666").ss(1,1,1).p("At5OsIbz9X");
	this.shape_1304.setTransform(241.4,124);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("#666666").ss(1,1,1).p("At+OsIb99X");
	this.shape_1305.setTransform(241.8,123.7);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f().s("#666666").ss(1,1,1).p("AuDOtIcH9Y");
	this.shape_1306.setTransform(242.2,123.4);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("#666666").ss(1,1,1).p("AuHOtIcP9Z");
	this.shape_1307.setTransform(242.5,123.1);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f().s("#666666").ss(1,1,1).p("AuMOtIcZ9Z");
	this.shape_1308.setTransform(242.9,122.9);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#666666").ss(1,1,1).p("AuROtIcj9Z");
	this.shape_1309.setTransform(243.2,122.6);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f().s("#666666").ss(1,1,1).p("AuVOuIcr9b");
	this.shape_1310.setTransform(243.6,122.3);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("#666666").ss(1,1,1).p("AuaOuIc19b");
	this.shape_1311.setTransform(244,122);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f().s("#666666").ss(1,1,1).p("AufOvIc/9d");
	this.shape_1312.setTransform(244.3,121.8);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("#666666").ss(1,1,1).p("AujOvIdH9d");
	this.shape_1313.setTransform(244.7,121.5);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f().s("#666666").ss(1,1,1).p("AuoOvIdR9d");
	this.shape_1314.setTransform(245,121.2);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("#666666").ss(1,1,1).p("AutOwIdb9f");
	this.shape_1315.setTransform(245.4,120.9);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f().s("#666666").ss(1,1,1).p("AuxOwIdj9f");
	this.shape_1316.setTransform(245.7,120.7);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("#666666").ss(1,1,1).p("Au2OxIdt9g");
	this.shape_1317.setTransform(246.1,120.4);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f().s("#666666").ss(1,1,1).p("Au6OxId29h");
	this.shape_1318.setTransform(246.5,120.1);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("#666666").ss(1,1,1).p("Au/OxId/9h");
	this.shape_1319.setTransform(246.8,119.9);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f().s("#666666").ss(1,1,1).p("AvEOyIeJ9j");
	this.shape_1320.setTransform(247.2,119.6);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("#666666").ss(1,1,1).p("AvNOyIeb9j");
	this.shape_1321.setTransform(247.9,119);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f().s("#666666").ss(1,1,1).p("AvSOzIel9l");
	this.shape_1322.setTransform(248.3,118.8);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#666666").ss(1,1,1).p("AvXOzIev9l");
	this.shape_1323.setTransform(248.6,118.5);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f().s("#666666").ss(1,1,1).p("AvbO0Ie39m");
	this.shape_1324.setTransform(249,118.2);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#666666").ss(1,1,1).p("AvgO0IfB9n");
	this.shape_1325.setTransform(249.3,117.9);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f().s("#666666").ss(1,1,1).p("AvpO1IfT9p");
	this.shape_1326.setTransform(250.1,117.4);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("#666666").ss(1,1,1).p("AvuO1Ifd9p");
	this.shape_1327.setTransform(250.4,117.1);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f().s("#666666").ss(1,1,1).p("Av3O2Ifv9q");
	this.shape_1328.setTransform(251.1,116.6);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#666666").ss(1,1,1).p("Av8O2If59r");
	this.shape_1329.setTransform(251.5,116.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1203}]}).to({state:[{t:this.shape_1204}]},1).to({state:[{t:this.shape_1205}]},1).to({state:[{t:this.shape_1206}]},1).to({state:[{t:this.shape_1207}]},1).to({state:[{t:this.shape_1208}]},1).to({state:[{t:this.shape_1209}]},1).to({state:[{t:this.shape_1210,p:{x:250.7,y:116.9}}]},1).to({state:[{t:this.shape_1211}]},1).to({state:[{t:this.shape_1212}]},1).to({state:[{t:this.shape_1213,p:{x:249.6}}]},1).to({state:[{t:this.shape_1214}]},1).to({state:[{t:this.shape_1215}]},1).to({state:[{t:this.shape_1216}]},1).to({state:[{t:this.shape_1217}]},1).to({state:[{t:this.shape_1218}]},1).to({state:[{t:this.shape_1219,p:{y:119.4}}]},1).to({state:[{t:this.shape_1220}]},1).to({state:[{t:this.shape_1221}]},1).to({state:[{t:this.shape_1222}]},1).to({state:[{t:this.shape_1223}]},1).to({state:[{t:this.shape_1224}]},1).to({state:[{t:this.shape_1225}]},1).to({state:[{t:this.shape_1226}]},1).to({state:[{t:this.shape_1227}]},1).to({state:[{t:this.shape_1228}]},1).to({state:[{t:this.shape_1229}]},1).to({state:[{t:this.shape_1230}]},1).to({state:[{t:this.shape_1231}]},1).to({state:[{t:this.shape_1232}]},1).to({state:[{t:this.shape_1233}]},1).to({state:[{t:this.shape_1234}]},1).to({state:[{t:this.shape_1235}]},1).to({state:[{t:this.shape_1236}]},1).to({state:[{t:this.shape_1237}]},1).to({state:[{t:this.shape_1238}]},1).to({state:[{t:this.shape_1239}]},1).to({state:[{t:this.shape_1240}]},1).to({state:[{t:this.shape_1241}]},1).to({state:[{t:this.shape_1242}]},1).to({state:[{t:this.shape_1243}]},1).to({state:[{t:this.shape_1244}]},1).to({state:[{t:this.shape_1245}]},1).to({state:[{t:this.shape_1246}]},1).to({state:[{t:this.shape_1247}]},1).to({state:[{t:this.shape_1248}]},1).to({state:[{t:this.shape_1249}]},1).to({state:[{t:this.shape_1250}]},1).to({state:[{t:this.shape_1251}]},1).to({state:[{t:this.shape_1252}]},1).to({state:[{t:this.shape_1253}]},1).to({state:[{t:this.shape_1254}]},1).to({state:[{t:this.shape_1255}]},1).to({state:[{t:this.shape_1256}]},1).to({state:[{t:this.shape_1257}]},1).to({state:[{t:this.shape_1258,p:{x:233.3}}]},1).to({state:[{t:this.shape_1259}]},1).to({state:[{t:this.shape_1260}]},1).to({state:[{t:this.shape_1261}]},1).to({state:[{t:this.shape_1262}]},1).to({state:[{t:this.shape_1263}]},1).to({state:[{t:this.shape_1264,p:{x:231.1}}]},1).to({state:[{t:this.shape_1265}]},1).to({state:[{t:this.shape_1266}]},1).to({state:[{t:this.shape_1267,p:{x:230}}]},1).to({state:[{t:this.shape_1268}]},1).to({state:[{t:this.shape_1269}]},1).to({state:[{t:this.shape_1270}]},1).to({state:[{t:this.shape_1271}]},1).to({state:[{t:this.shape_1272}]},1).to({state:[{t:this.shape_1271}]},1).to({state:[{t:this.shape_1270}]},1).to({state:[{t:this.shape_1273}]},1).to({state:[{t:this.shape_1274}]},1).to({state:[{t:this.shape_1267,p:{x:229.9}}]},1).to({state:[{t:this.shape_1275}]},1).to({state:[{t:this.shape_1276}]},1).to({state:[{t:this.shape_1264,p:{x:231}}]},1).to({state:[{t:this.shape_1277}]},1).to({state:[{t:this.shape_1278}]},1).to({state:[{t:this.shape_1279}]},1).to({state:[{t:this.shape_1280}]},1).to({state:[{t:this.shape_1281}]},1).to({state:[{t:this.shape_1258,p:{x:233.2}}]},1).to({state:[{t:this.shape_1282}]},1).to({state:[{t:this.shape_1283}]},1).to({state:[{t:this.shape_1284}]},1).to({state:[{t:this.shape_1285}]},1).to({state:[{t:this.shape_1286}]},1).to({state:[{t:this.shape_1287}]},1).to({state:[{t:this.shape_1288}]},1).to({state:[{t:this.shape_1289}]},1).to({state:[{t:this.shape_1290}]},1).to({state:[{t:this.shape_1291}]},1).to({state:[{t:this.shape_1292}]},1).to({state:[{t:this.shape_1293}]},1).to({state:[{t:this.shape_1294}]},1).to({state:[{t:this.shape_1295}]},1).to({state:[{t:this.shape_1296}]},1).to({state:[{t:this.shape_1297}]},1).to({state:[{t:this.shape_1298}]},1).to({state:[{t:this.shape_1299}]},1).to({state:[{t:this.shape_1300}]},1).to({state:[{t:this.shape_1301}]},1).to({state:[{t:this.shape_1302}]},1).to({state:[{t:this.shape_1303}]},1).to({state:[{t:this.shape_1304}]},1).to({state:[{t:this.shape_1305}]},1).to({state:[{t:this.shape_1306}]},1).to({state:[{t:this.shape_1307}]},1).to({state:[{t:this.shape_1308}]},1).to({state:[{t:this.shape_1309}]},1).to({state:[{t:this.shape_1310}]},1).to({state:[{t:this.shape_1311}]},1).to({state:[{t:this.shape_1312}]},1).to({state:[{t:this.shape_1313}]},1).to({state:[{t:this.shape_1314}]},1).to({state:[{t:this.shape_1315}]},1).to({state:[{t:this.shape_1316}]},1).to({state:[{t:this.shape_1317}]},1).to({state:[{t:this.shape_1318}]},1).to({state:[{t:this.shape_1319}]},1).to({state:[{t:this.shape_1320}]},1).to({state:[{t:this.shape_1219,p:{y:119.3}}]},1).to({state:[{t:this.shape_1321}]},1).to({state:[{t:this.shape_1322}]},1).to({state:[{t:this.shape_1323}]},1).to({state:[{t:this.shape_1324}]},1).to({state:[{t:this.shape_1325}]},1).to({state:[{t:this.shape_1213,p:{x:249.7}}]},1).to({state:[{t:this.shape_1326}]},1).to({state:[{t:this.shape_1327}]},1).to({state:[{t:this.shape_1210,p:{x:250.8,y:116.8}}]},1).to({state:[{t:this.shape_1328}]},1).to({state:[{t:this.shape_1329}]},1).to({state:[{t:this.shape_1207}]},1).to({state:[{t:this.shape_1206}]},1).to({state:[{t:this.shape_1205}]},1).to({state:[{t:this.shape_1204}]},1).to({state:[{t:this.shape_1203}]},1).wait(1));

	// Слой 6
	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f().s("#666666").ss(1,1,1).p("ApZQ4MASzghv");
	this.shape_1330.setTransform(97.6,142);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("#666666").ss(1,1,1).p("ApcQsMAS5ghX");
	this.shape_1331.setTransform(98.3,142.6);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f().s("#666666").ss(1,1,1).p("ApfQgMAS/gg/");
	this.shape_1332.setTransform(99,143.3);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#666666").ss(1,1,1).p("ApiQUMATFggn");
	this.shape_1333.setTransform(99.7,143.9);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("#666666").ss(1,1,1).p("AplQIMATLggO");
	this.shape_1334.setTransform(100.5,144.6);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().s("#666666").ss(1,1,1).p("ApoP7ITR/1");
	this.shape_1335.setTransform(101.2,145.2);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("#666666").ss(1,1,1).p("AprPvITW/d");
	this.shape_1336.setTransform(101.9,145.9);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#666666").ss(1,1,1).p("ApuPjITd/F");
	this.shape_1337.setTransform(102.6,146.5);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("#666666").ss(1,1,1).p("ApxPXITj+t");
	this.shape_1338.setTransform(103.3,147.1);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#666666").ss(1,1,1).p("Ap0PLITp+V");
	this.shape_1339.setTransform(104.1,147.8);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("#666666").ss(1,1,1).p("Ap3O/ITv99");
	this.shape_1340.setTransform(104.8,148.4);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#666666").ss(1,1,1).p("Ap6OyIT09j");
	this.shape_1341.setTransform(105.5,149);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("#666666").ss(1,1,1).p("Ap9OmIT79L");
	this.shape_1342.setTransform(106.2,149.7);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#666666").ss(1,1,1).p("AqAOaIUB8z");
	this.shape_1343.setTransform(106.9,150.3);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("#666666").ss(1,1,1).p("AqDOOIUH8b");
	this.shape_1344.setTransform(107.7,150.9);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#666666").ss(1,1,1).p("AqGOCIUN8D");
	this.shape_1345.setTransform(108.4,151.6);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("#666666").ss(1,1,1).p("AqJN1IUT7p");
	this.shape_1346.setTransform(109.1,152.2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().s("#666666").ss(1,1,1).p("AqMNpIUZ7R");
	this.shape_1347.setTransform(109.8,152.9);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("#666666").ss(1,1,1).p("AqPNdIUf65");
	this.shape_1348.setTransform(110.6,153.5);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#666666").ss(1,1,1).p("AqSNRIUl6h");
	this.shape_1349.setTransform(111.3,154.2);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("#666666").ss(1,1,1).p("AqVNFIUr6J");
	this.shape_1350.setTransform(112,154.8);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("#666666").ss(1,1,1).p("AqYM5IUx5x");
	this.shape_1351.setTransform(112.7,155.4);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f().s("#666666").ss(1,1,1).p("AqbMtIU35Z");
	this.shape_1352.setTransform(113.4,156.1);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("#666666").ss(1,1,1).p("AqdMhIU85A");
	this.shape_1353.setTransform(114.2,156.7);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f().s("#666666").ss(1,1,1).p("AqhMUIVD4n");
	this.shape_1354.setTransform(114.9,157.3);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("#666666").ss(1,1,1).p("AqjMIIVI4P");
	this.shape_1355.setTransform(115.6,158);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f().s("#666666").ss(1,1,1).p("AqnL8IVP33");
	this.shape_1356.setTransform(116.3,158.6);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("#666666").ss(1,1,1).p("AqqLwIVV3f");
	this.shape_1357.setTransform(117,159.3);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f().s("#666666").ss(1,1,1).p("AqtLjIVb3G");
	this.shape_1358.setTransform(117.8,159.9);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("#666666").ss(1,1,1).p("AqwLXIVh2t");
	this.shape_1359.setTransform(118.5,160.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f().s("#666666").ss(1,1,1).p("AqyLLIVm2V");
	this.shape_1360.setTransform(119.2,161.2);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("#666666").ss(1,1,1).p("Aq2K/IVt19");
	this.shape_1361.setTransform(119.9,161.8);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#666666").ss(1,1,1).p("Aq5KzIVz1l");
	this.shape_1362.setTransform(120.6,162.5);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#666666").ss(1,1,1).p("Aq8KnIV51N");
	this.shape_1363.setTransform(121.4,163.1);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#666666").ss(1,1,1).p("Aq/KbIV/01");
	this.shape_1364.setTransform(122.1,163.7);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#666666").ss(1,1,1).p("ArCKOIWE0b");
	this.shape_1365.setTransform(122.8,164.4);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#666666").ss(1,1,1).p("ArFKCIWL0D");
	this.shape_1366.setTransform(123.5,165);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("#666666").ss(1,1,1).p("ArIJ2IWRzr");
	this.shape_1367.setTransform(124.3,165.7);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#666666").ss(1,1,1).p("ArLJqIWXzT");
	this.shape_1368.setTransform(125,166.3);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#666666").ss(1,1,1).p("ArOJeIWdy7");
	this.shape_1369.setTransform(125.7,166.9);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#666666").ss(1,1,1).p("ArRJSIWjyj");
	this.shape_1370.setTransform(126.4,167.6);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#666666").ss(1,1,1).p("ArUJGIWpyK");
	this.shape_1371.setTransform(127.1,168.2);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#666666").ss(1,1,1).p("ArXI5IWvxx");
	this.shape_1372.setTransform(127.9,168.8);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#666666").ss(1,1,1).p("AraItIW0xZ");
	this.shape_1373.setTransform(128.6,169.5);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#666666").ss(1,1,1).p("ArdIhIW7xB");
	this.shape_1374.setTransform(129.3,170.1);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#666666").ss(1,1,1).p("ArgIVIXBwp");
	this.shape_1375.setTransform(130,170.8);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#666666").ss(1,1,1).p("ArjIJIXHwQ");
	this.shape_1376.setTransform(130.7,171.4);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#666666").ss(1,1,1).p("ArlH8IXMv4");
	this.shape_1377.setTransform(131.5,172.1);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#666666").ss(1,1,1).p("ArpHwIXSvf");
	this.shape_1378.setTransform(132.2,172.7);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#666666").ss(1,1,1).p("ArsHkIXZvH");
	this.shape_1379.setTransform(132.9,173.3);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#666666").ss(1,1,1).p("AruHYIXeuv");
	this.shape_1380.setTransform(133.6,174);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#666666").ss(1,1,1).p("AryHMIXluX");
	this.shape_1381.setTransform(134.3,174.6);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#666666").ss(1,1,1).p("Ar1HAIXrt/");
	this.shape_1382.setTransform(135.1,175.2);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#666666").ss(1,1,1).p("Ar4G0IXxtn");
	this.shape_1383.setTransform(135.8,175.9);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#666666").ss(1,1,1).p("Ar7GnIX3tN");
	this.shape_1384.setTransform(136.5,176.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#666666").ss(1,1,1).p("Ar9GbIX8s1");
	this.shape_1385.setTransform(137.2,177.2);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#666666").ss(1,1,1).p("AsAGPIYCsd");
	this.shape_1386.setTransform(138,177.8);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#666666").ss(1,1,1).p("AsEGDIYJsF");
	this.shape_1387.setTransform(138.7,178.4);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#666666").ss(1,1,1).p("AsHF3IYPrt");
	this.shape_1388.setTransform(139.4,179.1);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#666666").ss(1,1,1).p("AsKFrIYVrV");
	this.shape_1389.setTransform(140.1,179.7);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#666666").ss(1,1,1).p("AsMFeIYaq8");
	this.shape_1390.setTransform(140.8,180.4);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#666666").ss(1,1,1).p("AsQFSIYgqj");
	this.shape_1391.setTransform(141.6,181);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#666666").ss(1,1,1).p("AsTFGIYnqL");
	this.shape_1392.setTransform(142.3,181.6);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#666666").ss(1,1,1).p("AsWE6IYtpz");
	this.shape_1393.setTransform(143,182.3);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#666666").ss(1,1,1).p("AsZEuIYzpb");
	this.shape_1394.setTransform(143.7,182.9);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#666666").ss(1,1,1).p("AscEhIY5pC");
	this.shape_1395.setTransform(144.4,183.6);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#666666").ss(1,1,1).p("AsfEWIY+or");
	this.shape_1396.setTransform(145.2,184.2);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#666666").ss(1,1,1).p("AsiEJIZFoR");
	this.shape_1397.setTransform(145.9,184.8);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#666666").ss(1,1,1).p("AslD9IZLn5");
	this.shape_1398.setTransform(146.6,185.5);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#666666").ss(1,1,1).p("AsoDxIZRnh");
	this.shape_1399.setTransform(147.3,186.1);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#666666").ss(1,1,1).p("AsfEVIY/op");
	this.shape_1400.setTransform(145.2,184.2);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#666666").ss(1,1,1).p("AscEhIY5pB");
	this.shape_1401.setTransform(144.5,183.6);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#666666").ss(1,1,1).p("AsZEtIYzpZ");
	this.shape_1402.setTransform(143.8,183);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#666666").ss(1,1,1).p("AsWE5IYtpx");
	this.shape_1403.setTransform(143,182.3);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#666666").ss(1,1,1).p("AsTFFIYnqJ");
	this.shape_1404.setTransform(142.3,181.7);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#666666").ss(1,1,1).p("AsQFRIYhqh");
	this.shape_1405.setTransform(141.6,181.1);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#666666").ss(1,1,1).p("AsNFdIYbq5");
	this.shape_1406.setTransform(140.9,180.4);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#666666").ss(1,1,1).p("AsKFpIYVrR");
	this.shape_1407.setTransform(140.2,179.8);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#666666").ss(1,1,1).p("AsHF1IYPrp");
	this.shape_1408.setTransform(139.5,179.2);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#666666").ss(1,1,1).p("AsEGBIYJsB");
	this.shape_1409.setTransform(138.8,178.5);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#666666").ss(1,1,1).p("AsBGNIYDsZ");
	this.shape_1410.setTransform(138.1,177.9);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#666666").ss(1,1,1).p("Ar+GZIX9sx");
	this.shape_1411.setTransform(137.4,177.3);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#666666").ss(1,1,1).p("Ar7GlIX3tJ");
	this.shape_1412.setTransform(136.7,176.7);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#666666").ss(1,1,1).p("Ar4GxIXxth");
	this.shape_1413.setTransform(135.9,176);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#666666").ss(1,1,1).p("Ar1G9IXrt5");
	this.shape_1414.setTransform(135.2,175.4);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#666666").ss(1,1,1).p("AryHJIXluR");
	this.shape_1415.setTransform(134.5,174.8);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#666666").ss(1,1,1).p("ArwHVIXhup");
	this.shape_1416.setTransform(133.8,174.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#666666").ss(1,1,1).p("ArsHhIXavB");
	this.shape_1417.setTransform(133.1,173.5);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#666666").ss(1,1,1).p("ArqHtIXVvZ");
	this.shape_1418.setTransform(132.4,172.9);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#666666").ss(1,1,1).p("ArnH5IXPvx");
	this.shape_1419.setTransform(131.7,172.2);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#666666").ss(1,1,1).p("ArjIFIXIwJ");
	this.shape_1420.setTransform(131,171.6);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#666666").ss(1,1,1).p("ArhIRIXDwh");
	this.shape_1421.setTransform(130.3,171);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#666666").ss(1,1,1).p("AreIdIW9w5");
	this.shape_1422.setTransform(129.5,170.4);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#666666").ss(1,1,1).p("ArbIpIW3xR");
	this.shape_1423.setTransform(128.8,169.7);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#666666").ss(1,1,1).p("ArYI0IWxxo");
	this.shape_1424.setTransform(128.1,169.1);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#666666").ss(1,1,1).p("ArVJBIWryA");
	this.shape_1425.setTransform(127.4,168.5);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#666666").ss(1,1,1).p("ArSJNIWlyZ");
	this.shape_1426.setTransform(126.7,167.8);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#666666").ss(1,1,1).p("ArPJZIWfyw");
	this.shape_1427.setTransform(126,167.2);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#666666").ss(1,1,1).p("ArMJlIWZzJ");
	this.shape_1428.setTransform(125.3,166.6);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#666666").ss(1,1,1).p("ArJJxIWTzg");
	this.shape_1429.setTransform(124.6,166);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#666666").ss(1,1,1).p("ArGJ8IWNz4");
	this.shape_1430.setTransform(123.9,165.3);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#666666").ss(1,1,1).p("ArDKJIWH0R");
	this.shape_1431.setTransform(123.2,164.7);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f().s("#666666").ss(1,1,1).p("ArAKUIWB0o");
	this.shape_1432.setTransform(122.5,164.1);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#666666").ss(1,1,1).p("Aq9KhIV71B");
	this.shape_1433.setTransform(121.7,163.4);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f().s("#666666").ss(1,1,1).p("Aq6KsIV11Y");
	this.shape_1434.setTransform(121,162.8);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#666666").ss(1,1,1).p("Aq3K5IVv1x");
	this.shape_1435.setTransform(120.3,162.2);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f().s("#666666").ss(1,1,1).p("Aq1LEIVr2H");
	this.shape_1436.setTransform(119.6,161.5);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#666666").ss(1,1,1).p("AqxLRIVj2g");
	this.shape_1437.setTransform(118.9,160.9);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f().s("#666666").ss(1,1,1).p("AquLcIVd23");
	this.shape_1438.setTransform(118.2,160.3);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#666666").ss(1,1,1).p("AqsLoIVZ3Q");
	this.shape_1439.setTransform(117.5,159.7);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f().s("#666666").ss(1,1,1).p("AqpL1IVT3p");
	this.shape_1440.setTransform(116.8,159);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#666666").ss(1,1,1).p("AqmMAIVN3/");
	this.shape_1441.setTransform(116.1,158.4);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f().s("#666666").ss(1,1,1).p("AqjMNIVH4Z");
	this.shape_1442.setTransform(115.4,157.8);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#666666").ss(1,1,1).p("AqgMYIVB4v");
	this.shape_1443.setTransform(114.6,157.1);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f().s("#666666").ss(1,1,1).p("AqdMkIU75H");
	this.shape_1444.setTransform(113.9,156.5);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#666666").ss(1,1,1).p("AqaMwIU15f");
	this.shape_1445.setTransform(113.2,155.9);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f().s("#666666").ss(1,1,1).p("AqXM8IUv53");
	this.shape_1446.setTransform(112.5,155.2);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#666666").ss(1,1,1).p("AqUNJIUp6R");
	this.shape_1447.setTransform(111.8,154.6);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f().s("#666666").ss(1,1,1).p("AqRNUIUj6n");
	this.shape_1448.setTransform(111.1,154);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#666666").ss(1,1,1).p("AqONgIUd6/");
	this.shape_1449.setTransform(110.4,153.3);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f().s("#666666").ss(1,1,1).p("AqLNsIUX7X");
	this.shape_1450.setTransform(109.7,152.7);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#666666").ss(1,1,1).p("AqIN4IUR7v");
	this.shape_1451.setTransform(109,152.1);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f().s("#666666").ss(1,1,1).p("AqFOEIUL8H");
	this.shape_1452.setTransform(108.2,151.5);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#666666").ss(1,1,1).p("AqCOQIUF8f");
	this.shape_1453.setTransform(107.5,150.8);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f().s("#666666").ss(1,1,1).p("Ap/OcIT/83");
	this.shape_1454.setTransform(106.8,150.2);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#666666").ss(1,1,1).p("Ap8OoIT59P");
	this.shape_1455.setTransform(106.1,149.6);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f().s("#666666").ss(1,1,1).p("Ap5O0ITz9n");
	this.shape_1456.setTransform(105.4,148.9);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#666666").ss(1,1,1).p("Ap2PAITt9/");
	this.shape_1457.setTransform(104.7,148.3);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f().s("#666666").ss(1,1,1).p("ApzPMITn+X");
	this.shape_1458.setTransform(104,147.7);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#666666").ss(1,1,1).p("ApxPYITj+v");
	this.shape_1459.setTransform(103.3,147.1);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f().s("#666666").ss(1,1,1).p("ApuPkITd/H");
	this.shape_1460.setTransform(102.6,146.4);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#666666").ss(1,1,1).p("AprPwITX/f");
	this.shape_1461.setTransform(101.9,145.8);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f().s("#666666").ss(1,1,1).p("ApoP8ITR/3");
	this.shape_1462.setTransform(101.1,145.2);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#666666").ss(1,1,1).p("AplQIMATLggP");
	this.shape_1463.setTransform(100.4,144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1330}]}).to({state:[{t:this.shape_1331,p:{y:142.6}}]},1).to({state:[{t:this.shape_1332}]},1).to({state:[{t:this.shape_1333}]},1).to({state:[{t:this.shape_1334}]},1).to({state:[{t:this.shape_1335}]},1).to({state:[{t:this.shape_1336}]},1).to({state:[{t:this.shape_1337}]},1).to({state:[{t:this.shape_1338}]},1).to({state:[{t:this.shape_1339}]},1).to({state:[{t:this.shape_1340}]},1).to({state:[{t:this.shape_1341}]},1).to({state:[{t:this.shape_1342}]},1).to({state:[{t:this.shape_1343}]},1).to({state:[{t:this.shape_1344}]},1).to({state:[{t:this.shape_1345}]},1).to({state:[{t:this.shape_1346}]},1).to({state:[{t:this.shape_1347}]},1).to({state:[{t:this.shape_1348}]},1).to({state:[{t:this.shape_1349}]},1).to({state:[{t:this.shape_1350}]},1).to({state:[{t:this.shape_1351}]},1).to({state:[{t:this.shape_1352}]},1).to({state:[{t:this.shape_1353}]},1).to({state:[{t:this.shape_1354}]},1).to({state:[{t:this.shape_1355}]},1).to({state:[{t:this.shape_1356}]},1).to({state:[{t:this.shape_1357}]},1).to({state:[{t:this.shape_1358}]},1).to({state:[{t:this.shape_1359}]},1).to({state:[{t:this.shape_1360}]},1).to({state:[{t:this.shape_1361}]},1).to({state:[{t:this.shape_1362}]},1).to({state:[{t:this.shape_1363}]},1).to({state:[{t:this.shape_1364}]},1).to({state:[{t:this.shape_1365}]},1).to({state:[{t:this.shape_1366}]},1).to({state:[{t:this.shape_1367}]},1).to({state:[{t:this.shape_1368}]},1).to({state:[{t:this.shape_1369}]},1).to({state:[{t:this.shape_1370}]},1).to({state:[{t:this.shape_1371}]},1).to({state:[{t:this.shape_1372}]},1).to({state:[{t:this.shape_1373}]},1).to({state:[{t:this.shape_1374}]},1).to({state:[{t:this.shape_1375}]},1).to({state:[{t:this.shape_1376}]},1).to({state:[{t:this.shape_1377}]},1).to({state:[{t:this.shape_1378}]},1).to({state:[{t:this.shape_1379}]},1).to({state:[{t:this.shape_1380}]},1).to({state:[{t:this.shape_1381}]},1).to({state:[{t:this.shape_1382}]},1).to({state:[{t:this.shape_1383}]},1).to({state:[{t:this.shape_1384}]},1).to({state:[{t:this.shape_1385}]},1).to({state:[{t:this.shape_1386}]},1).to({state:[{t:this.shape_1387}]},1).to({state:[{t:this.shape_1388}]},1).to({state:[{t:this.shape_1389}]},1).to({state:[{t:this.shape_1390}]},1).to({state:[{t:this.shape_1391}]},1).to({state:[{t:this.shape_1392}]},1).to({state:[{t:this.shape_1393}]},1).to({state:[{t:this.shape_1394}]},1).to({state:[{t:this.shape_1395}]},1).to({state:[{t:this.shape_1396}]},1).to({state:[{t:this.shape_1397,p:{y:184.8}}]},1).to({state:[{t:this.shape_1398}]},1).to({state:[{t:this.shape_1399}]},1).to({state:[{t:this.shape_1398}]},1).to({state:[{t:this.shape_1397,p:{y:184.9}}]},1).to({state:[{t:this.shape_1400}]},1).to({state:[{t:this.shape_1401}]},1).to({state:[{t:this.shape_1402}]},1).to({state:[{t:this.shape_1403}]},1).to({state:[{t:this.shape_1404}]},1).to({state:[{t:this.shape_1405}]},1).to({state:[{t:this.shape_1406}]},1).to({state:[{t:this.shape_1407}]},1).to({state:[{t:this.shape_1408}]},1).to({state:[{t:this.shape_1409}]},1).to({state:[{t:this.shape_1410}]},1).to({state:[{t:this.shape_1411}]},1).to({state:[{t:this.shape_1412}]},1).to({state:[{t:this.shape_1413}]},1).to({state:[{t:this.shape_1414}]},1).to({state:[{t:this.shape_1415}]},1).to({state:[{t:this.shape_1416}]},1).to({state:[{t:this.shape_1417}]},1).to({state:[{t:this.shape_1418}]},1).to({state:[{t:this.shape_1419}]},1).to({state:[{t:this.shape_1420}]},1).to({state:[{t:this.shape_1421}]},1).to({state:[{t:this.shape_1422}]},1).to({state:[{t:this.shape_1423}]},1).to({state:[{t:this.shape_1424}]},1).to({state:[{t:this.shape_1425}]},1).to({state:[{t:this.shape_1426}]},1).to({state:[{t:this.shape_1427}]},1).to({state:[{t:this.shape_1428}]},1).to({state:[{t:this.shape_1429}]},1).to({state:[{t:this.shape_1430}]},1).to({state:[{t:this.shape_1431}]},1).to({state:[{t:this.shape_1432}]},1).to({state:[{t:this.shape_1433}]},1).to({state:[{t:this.shape_1434}]},1).to({state:[{t:this.shape_1435}]},1).to({state:[{t:this.shape_1436}]},1).to({state:[{t:this.shape_1437}]},1).to({state:[{t:this.shape_1438}]},1).to({state:[{t:this.shape_1439}]},1).to({state:[{t:this.shape_1440}]},1).to({state:[{t:this.shape_1441}]},1).to({state:[{t:this.shape_1442}]},1).to({state:[{t:this.shape_1443}]},1).to({state:[{t:this.shape_1444}]},1).to({state:[{t:this.shape_1445}]},1).to({state:[{t:this.shape_1446}]},1).to({state:[{t:this.shape_1447}]},1).to({state:[{t:this.shape_1448}]},1).to({state:[{t:this.shape_1449}]},1).to({state:[{t:this.shape_1450}]},1).to({state:[{t:this.shape_1451}]},1).to({state:[{t:this.shape_1452}]},1).to({state:[{t:this.shape_1453}]},1).to({state:[{t:this.shape_1454}]},1).to({state:[{t:this.shape_1455}]},1).to({state:[{t:this.shape_1456}]},1).to({state:[{t:this.shape_1457}]},1).to({state:[{t:this.shape_1458}]},1).to({state:[{t:this.shape_1459}]},1).to({state:[{t:this.shape_1460}]},1).to({state:[{t:this.shape_1461}]},1).to({state:[{t:this.shape_1462}]},1).to({state:[{t:this.shape_1463}]},1).to({state:[{t:this.shape_1333}]},1).to({state:[{t:this.shape_1332}]},1).to({state:[{t:this.shape_1331,p:{y:142.7}}]},1).to({state:[{t:this.shape_1330}]},1).wait(1));

	// Слой 5
	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f().s("#666666").ss(1,1,1).p("AjqkSIHUIl");
	this.shape_1464.setTransform(134.3,6.5);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#666666").ss(1,1,1).p("AjvkWIHfIt");
	this.shape_1465.setTransform(134.8,8);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f().s("#666666").ss(1,1,1).p("Aj1kZIHrIz");
	this.shape_1466.setTransform(135.2,9.6);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#666666").ss(1,1,1).p("Aj6kcIH1I5");
	this.shape_1467.setTransform(135.7,11.1);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f().s("#666666").ss(1,1,1).p("AkAkfIIBI/");
	this.shape_1468.setTransform(136.2,12.6);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#666666").ss(1,1,1).p("AkGkiIINJF");
	this.shape_1469.setTransform(136.6,14.2);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f().s("#666666").ss(1,1,1).p("AkLklIIXJL");
	this.shape_1470.setTransform(137.1,15.7);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#666666").ss(1,1,1).p("AkRkpIIjJT");
	this.shape_1471.setTransform(137.5,17.3);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f().s("#666666").ss(1,1,1).p("AkWksIItJZ");
	this.shape_1472.setTransform(138,18.8);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#666666").ss(1,1,1).p("AkckvII5Jf");
	this.shape_1473.setTransform(138.5,20.3);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f().s("#666666").ss(1,1,1).p("AkhkyIJEJl");
	this.shape_1474.setTransform(138.9,21.9);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#666666").ss(1,1,1).p("Aknk1IJPJr");
	this.shape_1475.setTransform(139.4,23.4);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f().s("#666666").ss(1,1,1).p("Aktk4IJbJx");
	this.shape_1476.setTransform(139.8,25);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#666666").ss(1,1,1).p("Akyk7IJlJ3");
	this.shape_1477.setTransform(140.3,26.5);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f().s("#666666").ss(1,1,1).p("Ak4k/IJxJ/");
	this.shape_1478.setTransform(140.8,28);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#666666").ss(1,1,1).p("Ak9lCIJ8KF");
	this.shape_1479.setTransform(141.2,29.6);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f().s("#666666").ss(1,1,1).p("AlDlFIKHKL");
	this.shape_1480.setTransform(141.7,31.1);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#666666").ss(1,1,1).p("AlJlIIKTKR");
	this.shape_1481.setTransform(142.1,32.7);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f().s("#666666").ss(1,1,1).p("AlOlLIKdKX");
	this.shape_1482.setTransform(142.6,34.2);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#666666").ss(1,1,1).p("AlUlOIKpKd");
	this.shape_1483.setTransform(143.1,35.7);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f().s("#666666").ss(1,1,1).p("AlalSIK1Kk");
	this.shape_1484.setTransform(143.5,37.3);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#666666").ss(1,1,1).p("AlflVIK/Kr");
	this.shape_1485.setTransform(144,38.8);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f().s("#666666").ss(1,1,1).p("AlllYILLKx");
	this.shape_1486.setTransform(144.4,40.3);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#666666").ss(1,1,1).p("AlqlbILVK3");
	this.shape_1487.setTransform(144.9,41.9);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#666666").ss(1,1,1).p("AlwleILhK9");
	this.shape_1488.setTransform(145.4,43.4);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#666666").ss(1,1,1).p("Al2lhILsLD");
	this.shape_1489.setTransform(145.8,45);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#666666").ss(1,1,1).p("Al7llIL3LL");
	this.shape_1490.setTransform(146.3,46.5);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#666666").ss(1,1,1).p("AmBloIMDLR");
	this.shape_1491.setTransform(146.7,48.1);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#666666").ss(1,1,1).p("AmGlrIMNLX");
	this.shape_1492.setTransform(147.2,49.6);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#666666").ss(1,1,1).p("AmMluIMZLd");
	this.shape_1493.setTransform(147.7,51.1);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f().s("#666666").ss(1,1,1).p("AmSlxIMlLj");
	this.shape_1494.setTransform(148.1,52.7);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#666666").ss(1,1,1).p("AmXl0IMvLp");
	this.shape_1495.setTransform(148.6,54.2);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f().s("#666666").ss(1,1,1).p("Amdl3IM7Lv");
	this.shape_1496.setTransform(149,55.7);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#666666").ss(1,1,1).p("Amil7INFL3");
	this.shape_1497.setTransform(149.5,57.3);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#666666").ss(1,1,1).p("Amol+INRL9");
	this.shape_1498.setTransform(150,58.8);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#666666").ss(1,1,1).p("AmtmBINcMD");
	this.shape_1499.setTransform(150.4,60.4);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f().s("#666666").ss(1,1,1).p("AmzmEINnMJ");
	this.shape_1500.setTransform(150.9,61.9);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#666666").ss(1,1,1).p("Am5mHINzMP");
	this.shape_1501.setTransform(151.3,63.4);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f().s("#666666").ss(1,1,1).p("Am+mKIN9MV");
	this.shape_1502.setTransform(151.8,65);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#666666").ss(1,1,1).p("AnEmOIOJMc");
	this.shape_1503.setTransform(152.3,66.5);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f().s("#666666").ss(1,1,1).p("AnJmRIOUMj");
	this.shape_1504.setTransform(152.7,68.1);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#666666").ss(1,1,1).p("AnPmUIOfMp");
	this.shape_1505.setTransform(153.2,69.6);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f().s("#666666").ss(1,1,1).p("AnVmXIOrMv");
	this.shape_1506.setTransform(153.6,71.1);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f().s("#666666").ss(1,1,1).p("AnamaIO1M1");
	this.shape_1507.setTransform(154.1,72.7);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f().s("#666666").ss(1,1,1).p("AngmdIPBM7");
	this.shape_1508.setTransform(154.6,74.2);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f().s("#666666").ss(1,1,1).p("AnmmhIPNND");
	this.shape_1509.setTransform(155,75.8);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f().s("#666666").ss(1,1,1).p("AnrmkIPXNJ");
	this.shape_1510.setTransform(155.5,77.3);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f().s("#666666").ss(1,1,1).p("AnxmnIPjNP");
	this.shape_1511.setTransform(155.9,78.8);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f().s("#666666").ss(1,1,1).p("An2mqIPtNV");
	this.shape_1512.setTransform(156.4,80.4);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f().s("#666666").ss(1,1,1).p("An8mtIP5Nb");
	this.shape_1513.setTransform(156.9,81.9);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f().s("#666666").ss(1,1,1).p("AoCmwIQENh");
	this.shape_1514.setTransform(157.3,83.4);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f().s("#666666").ss(1,1,1).p("AoHmzIQPNn");
	this.shape_1515.setTransform(157.8,85);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f().s("#666666").ss(1,1,1).p("AoNm3IQbNu");
	this.shape_1516.setTransform(158.2,86.5);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f().s("#666666").ss(1,1,1).p("AoSm6IQmN1");
	this.shape_1517.setTransform(158.7,88.1);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#666666").ss(1,1,1).p("AoYm9IQxN7");
	this.shape_1518.setTransform(159.2,89.6);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f().s("#666666").ss(1,1,1).p("AoenAIQ9OB");
	this.shape_1519.setTransform(159.6,91.2);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#666666").ss(1,1,1).p("AojnDIRHOH");
	this.shape_1520.setTransform(160.1,92.7);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f().s("#666666").ss(1,1,1).p("AopnHIRTOP");
	this.shape_1521.setTransform(160.5,94.2);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f().s("#666666").ss(1,1,1).p("AovnKIReOU");
	this.shape_1522.setTransform(161,95.8);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f().s("#666666").ss(1,1,1).p("Ao0nNIRpOb");
	this.shape_1523.setTransform(161.5,97.3);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#666666").ss(1,1,1).p("Ao5nQIR0Oh");
	this.shape_1524.setTransform(161.9,98.8);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f().s("#666666").ss(1,1,1).p("Ao/nTIR/On");
	this.shape_1525.setTransform(162.4,100.4);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().s("#666666").ss(1,1,1).p("ApFnWISLOt");
	this.shape_1526.setTransform(162.8,101.9);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f().s("#666666").ss(1,1,1).p("ApLnZISXOz");
	this.shape_1527.setTransform(163.3,103.4);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#666666").ss(1,1,1).p("ApQncIShO5");
	this.shape_1528.setTransform(163.8,105);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f().s("#666666").ss(1,1,1).p("ApWngIStPB");
	this.shape_1529.setTransform(164.2,106.5);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().s("#666666").ss(1,1,1).p("ApbnjIS3PH");
	this.shape_1530.setTransform(164.7,108.1);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f().s("#666666").ss(1,1,1).p("AphnmITDPN");
	this.shape_1531.setTransform(165.1,109.6);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().s("#666666").ss(1,1,1).p("ApnnpITPPT");
	this.shape_1532.setTransform(165.6,111.2);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f().s("#666666").ss(1,1,1).p("ApsnsITZPZ");
	this.shape_1533.setTransform(166.1,112.7);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f().s("#666666").ss(1,1,1).p("ApbnjIS4PH");
	this.shape_1534.setTransform(164.7,108.1);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f().s("#666666").ss(1,1,1).p("ApQndIShO7");
	this.shape_1535.setTransform(163.8,105.1);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#666666").ss(1,1,1).p("ApLnaISXO1");
	this.shape_1536.setTransform(163.3,103.6);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f().s("#666666").ss(1,1,1).p("ApFnXISLOu");
	this.shape_1537.setTransform(162.9,102.1);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#666666").ss(1,1,1).p("ApAnTISBOn");
	this.shape_1538.setTransform(162.4,100.5);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f().s("#666666").ss(1,1,1).p("Ao6nQIR1Oh");
	this.shape_1539.setTransform(162,99);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#666666").ss(1,1,1).p("Ao1nNIRrOb");
	this.shape_1540.setTransform(161.5,97.5);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f().s("#666666").ss(1,1,1).p("AovnKIRfOV");
	this.shape_1541.setTransform(161.1,96);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().s("#666666").ss(1,1,1).p("AoqnHIRVOP");
	this.shape_1542.setTransform(160.6,94.5);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f().s("#666666").ss(1,1,1).p("AoknEIRJOJ");
	this.shape_1543.setTransform(160.2,93);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#666666").ss(1,1,1).p("AofnBIQ/OD");
	this.shape_1544.setTransform(159.7,91.4);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f().s("#666666").ss(1,1,1).p("AoZm+IQzN9");
	this.shape_1545.setTransform(159.3,89.9);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f().s("#666666").ss(1,1,1).p("AoUm7IQpN2");
	this.shape_1546.setTransform(158.8,88.4);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f().s("#666666").ss(1,1,1).p("AoOm3IQdNv");
	this.shape_1547.setTransform(158.4,86.9);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f().s("#666666").ss(1,1,1).p("AoJm0IQTNp");
	this.shape_1548.setTransform(157.9,85.4);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f().s("#666666").ss(1,1,1).p("AoDmxIQHNj");
	this.shape_1549.setTransform(157.4,83.9);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f().s("#666666").ss(1,1,1).p("An+muIP9Nd");
	this.shape_1550.setTransform(157,82.4);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f().s("#666666").ss(1,1,1).p("An4mrIPxNX");
	this.shape_1551.setTransform(156.5,80.8);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f().s("#666666").ss(1,1,1).p("AnzmoIPmNR");
	this.shape_1552.setTransform(156.1,79.3);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f().s("#666666").ss(1,1,1).p("AntmlIPbNL");
	this.shape_1553.setTransform(155.6,77.8);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f().s("#666666").ss(1,1,1).p("AnomiIPQNE");
	this.shape_1554.setTransform(155.2,76.3);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f().s("#666666").ss(1,1,1).p("AnimfIPFM/");
	this.shape_1555.setTransform(154.7,74.8);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f().s("#666666").ss(1,1,1).p("AndmbIO7M3");
	this.shape_1556.setTransform(154.3,73.2);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f().s("#666666").ss(1,1,1).p("AnXmYIOvMx");
	this.shape_1557.setTransform(153.8,71.7);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f().s("#666666").ss(1,1,1).p("AnRmVIOkMr");
	this.shape_1558.setTransform(153.4,70.2);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f().s("#666666").ss(1,1,1).p("AnMmSIOZMl");
	this.shape_1559.setTransform(152.9,68.7);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f().s("#666666").ss(1,1,1).p("AnGmPIOOMf");
	this.shape_1560.setTransform(152.5,67.2);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f().s("#666666").ss(1,1,1).p("AnBmMIODMZ");
	this.shape_1561.setTransform(152,65.6);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f().s("#666666").ss(1,1,1).p("Am7mJIN3MT");
	this.shape_1562.setTransform(151.5,64.1);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f().s("#666666").ss(1,1,1).p("Am2mGINtMN");
	this.shape_1563.setTransform(151.1,62.6);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f().s("#666666").ss(1,1,1).p("AmwmCINhMG");
	this.shape_1564.setTransform(150.6,61.1);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f().s("#666666").ss(1,1,1).p("Amrl/INXL/");
	this.shape_1565.setTransform(150.2,59.6);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f().s("#666666").ss(1,1,1).p("Amll8INLL5");
	this.shape_1566.setTransform(149.7,58.1);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f().s("#666666").ss(1,1,1).p("Amgl5INBLz");
	this.shape_1567.setTransform(149.3,56.6);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f().s("#666666").ss(1,1,1).p("Amal2IM1Lt");
	this.shape_1568.setTransform(148.8,55);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f().s("#666666").ss(1,1,1).p("AmVlzIMrLn");
	this.shape_1569.setTransform(148.4,53.5);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f().s("#666666").ss(1,1,1).p("AmPlwIMfLh");
	this.shape_1570.setTransform(147.9,52);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f().s("#666666").ss(1,1,1).p("AmJltIMULb");
	this.shape_1571.setTransform(147.5,50.5);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f().s("#666666").ss(1,1,1).p("AmElqIMJLV");
	this.shape_1572.setTransform(147,49);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f().s("#666666").ss(1,1,1).p("Al/lmIL+LN");
	this.shape_1573.setTransform(146.6,47.4);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f().s("#666666").ss(1,1,1).p("Al5ljILzLH");
	this.shape_1574.setTransform(146.1,45.9);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f().s("#666666").ss(1,1,1).p("Al0lgILpLB");
	this.shape_1575.setTransform(145.7,44.4);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f().s("#666666").ss(1,1,1).p("AluldILdK7");
	this.shape_1576.setTransform(145.2,42.9);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f().s("#666666").ss(1,1,1).p("AlplaILTK1");
	this.shape_1577.setTransform(144.8,41.4);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f().s("#666666").ss(1,1,1).p("AljlXILHKv");
	this.shape_1578.setTransform(144.3,39.9);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f().s("#666666").ss(1,1,1).p("AldlUIK7Kp");
	this.shape_1579.setTransform(143.8,38.3);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f().s("#666666").ss(1,1,1).p("AlYlRIKxKj");
	this.shape_1580.setTransform(143.4,36.8);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f().s("#666666").ss(1,1,1).p("AlSlNIKlKc");
	this.shape_1581.setTransform(142.9,35.3);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f().s("#666666").ss(1,1,1).p("AlNlKIKbKV");
	this.shape_1582.setTransform(142.5,33.8);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f().s("#666666").ss(1,1,1).p("AlHlHIKPKP");
	this.shape_1583.setTransform(142,32.3);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f().s("#666666").ss(1,1,1).p("AlClEIKFKJ");
	this.shape_1584.setTransform(141.6,30.8);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f().s("#666666").ss(1,1,1).p("Ak9lBIJ7KD");
	this.shape_1585.setTransform(141.1,29.3);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f().s("#666666").ss(1,1,1).p("Ak3k+IJvJ9");
	this.shape_1586.setTransform(140.7,27.7);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f().s("#666666").ss(1,1,1).p("Akxk7IJjJ3");
	this.shape_1587.setTransform(140.2,26.2);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f().s("#666666").ss(1,1,1).p("Aksk4IJZJx");
	this.shape_1588.setTransform(139.7,24.7);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f().s("#666666").ss(1,1,1).p("Akmk1IJNJr");
	this.shape_1589.setTransform(139.3,23.2);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f().s("#666666").ss(1,1,1).p("AkhkyIJDJl");
	this.shape_1590.setTransform(138.8,21.7);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f().s("#666666").ss(1,1,1).p("AkbkuII3Jd");
	this.shape_1591.setTransform(138.4,20.1);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f().s("#666666").ss(1,1,1).p("AkWkrIItJX");
	this.shape_1592.setTransform(137.9,18.6);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f().s("#666666").ss(1,1,1).p("AkQkoIIhJR");
	this.shape_1593.setTransform(137.5,17.1);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f().s("#666666").ss(1,1,1).p("AkFkiIILJF");
	this.shape_1594.setTransform(136.6,14.1);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f().s("#666666").ss(1,1,1).p("Aj/kfIIAI/");
	this.shape_1595.setTransform(136.1,12.5);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f().s("#666666").ss(1,1,1).p("Aj0kZIHqIz");
	this.shape_1596.setTransform(135.2,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1464}]}).to({state:[{t:this.shape_1465}]},1).to({state:[{t:this.shape_1466}]},1).to({state:[{t:this.shape_1467,p:{y:11.1}}]},1).to({state:[{t:this.shape_1468}]},1).to({state:[{t:this.shape_1469}]},1).to({state:[{t:this.shape_1470,p:{x:137.1,y:15.7}}]},1).to({state:[{t:this.shape_1471}]},1).to({state:[{t:this.shape_1472}]},1).to({state:[{t:this.shape_1473}]},1).to({state:[{t:this.shape_1474}]},1).to({state:[{t:this.shape_1475}]},1).to({state:[{t:this.shape_1476}]},1).to({state:[{t:this.shape_1477}]},1).to({state:[{t:this.shape_1478}]},1).to({state:[{t:this.shape_1479}]},1).to({state:[{t:this.shape_1480}]},1).to({state:[{t:this.shape_1481}]},1).to({state:[{t:this.shape_1482}]},1).to({state:[{t:this.shape_1483}]},1).to({state:[{t:this.shape_1484}]},1).to({state:[{t:this.shape_1485}]},1).to({state:[{t:this.shape_1486}]},1).to({state:[{t:this.shape_1487}]},1).to({state:[{t:this.shape_1488}]},1).to({state:[{t:this.shape_1489}]},1).to({state:[{t:this.shape_1490}]},1).to({state:[{t:this.shape_1491}]},1).to({state:[{t:this.shape_1492}]},1).to({state:[{t:this.shape_1493}]},1).to({state:[{t:this.shape_1494}]},1).to({state:[{t:this.shape_1495}]},1).to({state:[{t:this.shape_1496}]},1).to({state:[{t:this.shape_1497}]},1).to({state:[{t:this.shape_1498}]},1).to({state:[{t:this.shape_1499}]},1).to({state:[{t:this.shape_1500}]},1).to({state:[{t:this.shape_1501}]},1).to({state:[{t:this.shape_1502}]},1).to({state:[{t:this.shape_1503}]},1).to({state:[{t:this.shape_1504}]},1).to({state:[{t:this.shape_1505}]},1).to({state:[{t:this.shape_1506}]},1).to({state:[{t:this.shape_1507}]},1).to({state:[{t:this.shape_1508}]},1).to({state:[{t:this.shape_1509}]},1).to({state:[{t:this.shape_1510}]},1).to({state:[{t:this.shape_1511}]},1).to({state:[{t:this.shape_1512}]},1).to({state:[{t:this.shape_1513}]},1).to({state:[{t:this.shape_1514}]},1).to({state:[{t:this.shape_1515}]},1).to({state:[{t:this.shape_1516}]},1).to({state:[{t:this.shape_1517}]},1).to({state:[{t:this.shape_1518}]},1).to({state:[{t:this.shape_1519}]},1).to({state:[{t:this.shape_1520}]},1).to({state:[{t:this.shape_1521}]},1).to({state:[{t:this.shape_1522}]},1).to({state:[{t:this.shape_1523}]},1).to({state:[{t:this.shape_1524}]},1).to({state:[{t:this.shape_1525}]},1).to({state:[{t:this.shape_1526}]},1).to({state:[{t:this.shape_1527}]},1).to({state:[{t:this.shape_1528}]},1).to({state:[{t:this.shape_1529,p:{x:164.2,y:106.5}}]},1).to({state:[{t:this.shape_1530}]},1).to({state:[{t:this.shape_1531,p:{x:165.1,y:109.6}}]},1).to({state:[{t:this.shape_1532}]},1).to({state:[{t:this.shape_1533}]},1).to({state:[{t:this.shape_1532}]},1).to({state:[{t:this.shape_1531,p:{x:165.2,y:109.7}}]},1).to({state:[{t:this.shape_1534}]},1).to({state:[{t:this.shape_1529,p:{x:164.3,y:106.6}}]},1).to({state:[{t:this.shape_1535}]},1).to({state:[{t:this.shape_1536}]},1).to({state:[{t:this.shape_1537}]},1).to({state:[{t:this.shape_1538}]},1).to({state:[{t:this.shape_1539}]},1).to({state:[{t:this.shape_1540}]},1).to({state:[{t:this.shape_1541}]},1).to({state:[{t:this.shape_1542}]},1).to({state:[{t:this.shape_1543}]},1).to({state:[{t:this.shape_1544}]},1).to({state:[{t:this.shape_1545}]},1).to({state:[{t:this.shape_1546}]},1).to({state:[{t:this.shape_1547}]},1).to({state:[{t:this.shape_1548}]},1).to({state:[{t:this.shape_1549}]},1).to({state:[{t:this.shape_1550}]},1).to({state:[{t:this.shape_1551}]},1).to({state:[{t:this.shape_1552}]},1).to({state:[{t:this.shape_1553}]},1).to({state:[{t:this.shape_1554}]},1).to({state:[{t:this.shape_1555}]},1).to({state:[{t:this.shape_1556}]},1).to({state:[{t:this.shape_1557}]},1).to({state:[{t:this.shape_1558}]},1).to({state:[{t:this.shape_1559}]},1).to({state:[{t:this.shape_1560}]},1).to({state:[{t:this.shape_1561}]},1).to({state:[{t:this.shape_1562}]},1).to({state:[{t:this.shape_1563}]},1).to({state:[{t:this.shape_1564}]},1).to({state:[{t:this.shape_1565}]},1).to({state:[{t:this.shape_1566}]},1).to({state:[{t:this.shape_1567}]},1).to({state:[{t:this.shape_1568}]},1).to({state:[{t:this.shape_1569}]},1).to({state:[{t:this.shape_1570}]},1).to({state:[{t:this.shape_1571}]},1).to({state:[{t:this.shape_1572}]},1).to({state:[{t:this.shape_1573}]},1).to({state:[{t:this.shape_1574}]},1).to({state:[{t:this.shape_1575}]},1).to({state:[{t:this.shape_1576}]},1).to({state:[{t:this.shape_1577}]},1).to({state:[{t:this.shape_1578}]},1).to({state:[{t:this.shape_1579}]},1).to({state:[{t:this.shape_1580}]},1).to({state:[{t:this.shape_1581}]},1).to({state:[{t:this.shape_1582}]},1).to({state:[{t:this.shape_1583}]},1).to({state:[{t:this.shape_1584}]},1).to({state:[{t:this.shape_1585}]},1).to({state:[{t:this.shape_1586}]},1).to({state:[{t:this.shape_1587}]},1).to({state:[{t:this.shape_1588}]},1).to({state:[{t:this.shape_1589}]},1).to({state:[{t:this.shape_1590}]},1).to({state:[{t:this.shape_1591}]},1).to({state:[{t:this.shape_1592}]},1).to({state:[{t:this.shape_1593}]},1).to({state:[{t:this.shape_1470,p:{x:137,y:15.6}}]},1).to({state:[{t:this.shape_1594}]},1).to({state:[{t:this.shape_1595}]},1).to({state:[{t:this.shape_1467,p:{y:11}}]},1).to({state:[{t:this.shape_1596}]},1).to({state:[{t:this.shape_1465}]},1).to({state:[{t:this.shape_1464}]},1).wait(1));

	// Слой 4
	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f().s("#666666").ss(1,1,1).p("APnhGI/NCN");
	this.shape_1597.setTransform(257.7,26.9);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f().s("#666666").ss(1,1,1).p("AvdBPIe7id");
	this.shape_1598.setTransform(257.8,28);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f().s("#666666").ss(1,1,1).p("AvUBXIepit");
	this.shape_1599.setTransform(257.9,29.1);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f().s("#666666").ss(1,1,1).p("AvLBeIeXi7");
	this.shape_1600.setTransform(258,30.1);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f().s("#666666").ss(1,1,1).p("AvBBmIeDjL");
	this.shape_1601.setTransform(258.1,31.2);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f().s("#666666").ss(1,1,1).p("Au4BuIdxjb");
	this.shape_1602.setTransform(258.2,32.3);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f().s("#666666").ss(1,1,1).p("AuvB2Idfjr");
	this.shape_1603.setTransform(258.3,33.4);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f().s("#666666").ss(1,1,1).p("AumB9IdMj5");
	this.shape_1604.setTransform(258.4,34.5);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f().s("#666666").ss(1,1,1).p("AucCFIc5kJ");
	this.shape_1605.setTransform(258.4,35.6);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f().s("#666666").ss(1,1,1).p("AuTCMIcnkY");
	this.shape_1606.setTransform(258.6,36.7);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f().s("#666666").ss(1,1,1).p("AuKCUIcVkn");
	this.shape_1607.setTransform(258.6,37.7);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f().s("#666666").ss(1,1,1).p("AuBCcIcDk3");
	this.shape_1608.setTransform(258.7,38.8);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f().s("#666666").ss(1,1,1).p("At3CkIbvlH");
	this.shape_1609.setTransform(258.8,39.9);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f().s("#666666").ss(1,1,1).p("AtuCrIbdlV");
	this.shape_1610.setTransform(258.9,41);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f().s("#666666").ss(1,1,1).p("AtkCzIbJll");
	this.shape_1611.setTransform(259,42.1);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f().s("#666666").ss(1,1,1).p("AtbC7Ia3l1");
	this.shape_1612.setTransform(259.1,43.2);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f().s("#666666").ss(1,1,1).p("AtSDDIalmF");
	this.shape_1613.setTransform(259.2,44.3);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f().s("#666666").ss(1,1,1).p("AtJDKIaTmT");
	this.shape_1614.setTransform(259.3,45.3);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f().s("#666666").ss(1,1,1).p("AtADSIaBmj");
	this.shape_1615.setTransform(259.4,46.4);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f().s("#666666").ss(1,1,1).p("As2DaIZtmz");
	this.shape_1616.setTransform(259.5,47.5);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f().s("#666666").ss(1,1,1).p("AstDhIZbnB");
	this.shape_1617.setTransform(259.6,48.6);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f().s("#666666").ss(1,1,1).p("AsjDpIZInR");
	this.shape_1618.setTransform(259.7,49.7);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f().s("#666666").ss(1,1,1).p("AsaDxIY1nh");
	this.shape_1619.setTransform(259.7,50.7);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f().s("#666666").ss(1,1,1).p("AsRD4IYjnv");
	this.shape_1620.setTransform(259.8,51.8);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f().s("#666666").ss(1,1,1).p("AsIEAIYRn/");
	this.shape_1621.setTransform(259.9,52.9);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f().s("#666666").ss(1,1,1).p("Ar/EIIX/oP");
	this.shape_1622.setTransform(260,54);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f().s("#666666").ss(1,1,1).p("Ar1EQIXrof");
	this.shape_1623.setTransform(260.1,55.1);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f().s("#666666").ss(1,1,1).p("ArsEXIXZot");
	this.shape_1624.setTransform(260.2,56.2);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f().s("#666666").ss(1,1,1).p("ArjEfIXHo9");
	this.shape_1625.setTransform(260.3,57.3);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f().s("#666666").ss(1,1,1).p("ArZEnIWzpN");
	this.shape_1626.setTransform(260.4,58.3);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f().s("#666666").ss(1,1,1).p("ArQEuIWhpb");
	this.shape_1627.setTransform(260.5,59.4);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f().s("#666666").ss(1,1,1).p("ArHE2IWPpr");
	this.shape_1628.setTransform(260.6,60.5);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f().s("#666666").ss(1,1,1).p("Aq9E+IV8p7");
	this.shape_1629.setTransform(260.7,61.6);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f().s("#666666").ss(1,1,1).p("Aq1FFIVrqJ");
	this.shape_1630.setTransform(260.8,62.7);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f().s("#666666").ss(1,1,1).p("AqrFNIVXqZ");
	this.shape_1631.setTransform(260.9,63.8);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f().s("#666666").ss(1,1,1).p("AqiFVIVFqp");
	this.shape_1632.setTransform(260.9,64.9);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f().s("#666666").ss(1,1,1).p("AqYFdIUxq5");
	this.shape_1633.setTransform(261,65.9);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f().s("#666666").ss(1,1,1).p("AqPFkIUfrH");
	this.shape_1634.setTransform(261.1,67);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f().s("#666666").ss(1,1,1).p("AqGFsIUNrX");
	this.shape_1635.setTransform(261.2,68.1);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f().s("#666666").ss(1,1,1).p("Ap9F0IT7rn");
	this.shape_1636.setTransform(261.3,69.2);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f().s("#666666").ss(1,1,1).p("ApzF7ITor1");
	this.shape_1637.setTransform(261.4,70.3);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f().s("#666666").ss(1,1,1).p("ApqGDITVsF");
	this.shape_1638.setTransform(261.5,71.4);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f().s("#666666").ss(1,1,1).p("AphGLITDsV");
	this.shape_1639.setTransform(261.6,72.4);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f().s("#666666").ss(1,1,1).p("ApXGTISwsl");
	this.shape_1640.setTransform(261.7,73.5);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f().s("#666666").ss(1,1,1).p("ApOGaISdsz");
	this.shape_1641.setTransform(261.8,74.6);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f().s("#666666").ss(1,1,1).p("ApFGiISLtD");
	this.shape_1642.setTransform(261.9,75.7);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f().s("#666666").ss(1,1,1).p("Ao8GqIR5tT");
	this.shape_1643.setTransform(262,76.8);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f().s("#666666").ss(1,1,1).p("AoyGxIRmth");
	this.shape_1644.setTransform(262.1,77.9);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f().s("#666666").ss(1,1,1).p("AopG5IRTtx");
	this.shape_1645.setTransform(262.1,79);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f().s("#666666").ss(1,1,1).p("AogHBIRBuB");
	this.shape_1646.setTransform(262.2,80);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f().s("#666666").ss(1,1,1).p("AoXHJIQvuQ");
	this.shape_1647.setTransform(262.3,81.1);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f().s("#666666").ss(1,1,1).p("AoNHQIQbuf");
	this.shape_1648.setTransform(262.4,82.2);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f().s("#666666").ss(1,1,1).p("AoEHYIQJuv");
	this.shape_1649.setTransform(262.5,83.3);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f().s("#666666").ss(1,1,1).p("An7HgIP3u/");
	this.shape_1650.setTransform(262.6,84.4);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f().s("#666666").ss(1,1,1).p("AnxHnIPkvN");
	this.shape_1651.setTransform(262.7,85.5);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f().s("#666666").ss(1,1,1).p("AnoHvIPRvd");
	this.shape_1652.setTransform(262.8,86.6);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f().s("#666666").ss(1,1,1).p("AnfH3IO/vt");
	this.shape_1653.setTransform(262.9,87.6);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f().s("#666666").ss(1,1,1).p("AnWH+IOtv7");
	this.shape_1654.setTransform(263,88.7);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f().s("#666666").ss(1,1,1).p("AnMIGIOZwL");
	this.shape_1655.setTransform(263.1,89.8);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f().s("#666666").ss(1,1,1).p("AnDIOIOHwb");
	this.shape_1656.setTransform(263.2,90.9);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f().s("#666666").ss(1,1,1).p("Am6IWIN1wr");
	this.shape_1657.setTransform(263.2,92);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f().s("#666666").ss(1,1,1).p("AmxIdINiw5");
	this.shape_1658.setTransform(263.4,93.1);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f().s("#666666").ss(1,1,1).p("AmnIlINPxJ");
	this.shape_1659.setTransform(263.4,94.1);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f().s("#666666").ss(1,1,1).p("AmeItIM9xY");
	this.shape_1660.setTransform(263.5,95.2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f().s("#666666").ss(1,1,1).p("AmVI0IMrxn");
	this.shape_1661.setTransform(263.6,96.3);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f().s("#666666").ss(1,1,1).p("AmMI8IMYx3");
	this.shape_1662.setTransform(263.7,97.4);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f().s("#666666").ss(1,1,1).p("AmCJEIMFyH");
	this.shape_1663.setTransform(263.8,98.5);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f().s("#666666").ss(1,1,1).p("Al5JMILzyX");
	this.shape_1664.setTransform(263.9,99.6);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f().s("#666666").ss(1,1,1).p("AlvJTILgyl");
	this.shape_1665.setTransform(264,100.7);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().s("#666666").ss(1,1,1).p("AFnpaIrNS1");
	this.shape_1666.setTransform(264.1,101.7);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f().s("#666666").ss(1,1,1).p("AlvJTILfyl");
	this.shape_1667.setTransform(264,100.7);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f().s("#666666").ss(1,1,1).p("Al4JMILyyW");
	this.shape_1668.setTransform(263.9,99.6);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f().s("#666666").ss(1,1,1).p("AmCJEIMEyH");
	this.shape_1669.setTransform(263.8,98.5);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f().s("#666666").ss(1,1,1).p("AmLI9IMXx4");
	this.shape_1670.setTransform(263.7,97.5);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f().s("#666666").ss(1,1,1).p("AmUI1IMpxp");
	this.shape_1671.setTransform(263.6,96.4);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f().s("#666666").ss(1,1,1).p("AmdItIM7xZ");
	this.shape_1672.setTransform(263.5,95.3);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f().s("#666666").ss(1,1,1).p("AmmIlINNxK");
	this.shape_1673.setTransform(263.4,94.3);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f().s("#666666").ss(1,1,1).p("AmwIeINhw7");
	this.shape_1674.setTransform(263.4,93.2);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f().s("#666666").ss(1,1,1).p("Am5IXINywt");
	this.shape_1675.setTransform(263.3,92.1);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f().s("#666666").ss(1,1,1).p("AnCIPIOFwd");
	this.shape_1676.setTransform(263.2,91);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f().s("#666666").ss(1,1,1).p("AnLIHIOXwN");
	this.shape_1677.setTransform(263.1,90);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f().s("#666666").ss(1,1,1).p("AnUIAIOpv/");
	this.shape_1678.setTransform(263,88.9);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f().s("#666666").ss(1,1,1).p("AndH4IO7vv");
	this.shape_1679.setTransform(262.9,87.8);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f().s("#666666").ss(1,1,1).p("AnnHxIPPvh");
	this.shape_1680.setTransform(262.8,86.8);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f().s("#666666").ss(1,1,1).p("AnwHpIPgvR");
	this.shape_1681.setTransform(262.7,85.7);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f().s("#666666").ss(1,1,1).p("An5HhIPzvB");
	this.shape_1682.setTransform(262.6,84.6);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f().s("#666666").ss(1,1,1).p("AoCHZIQFuy");
	this.shape_1683.setTransform(262.5,83.6);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f().s("#666666").ss(1,1,1).p("AoLHSIQXuj");
	this.shape_1684.setTransform(262.4,82.5);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f().s("#666666").ss(1,1,1).p("AoUHKIQpuU");
	this.shape_1685.setTransform(262.4,81.4);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f().s("#666666").ss(1,1,1).p("AodHDIQ7uF");
	this.shape_1686.setTransform(262.3,80.4);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f().s("#666666").ss(1,1,1).p("AomG7IRNt1");
	this.shape_1687.setTransform(262.2,79.3);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f().s("#666666").ss(1,1,1).p("AowG0IRhtn");
	this.shape_1688.setTransform(262.1,78.2);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f().s("#666666").ss(1,1,1).p("Ao5GsIRztX");
	this.shape_1689.setTransform(262,77.1);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f().s("#666666").ss(1,1,1).p("ApCGlISFtJ");
	this.shape_1690.setTransform(261.9,76.1);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f().s("#666666").ss(1,1,1).p("ApLGdISXs5");
	this.shape_1691.setTransform(261.8,75);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f().s("#666666").ss(1,1,1).p("ApUGVISpsp");
	this.shape_1692.setTransform(261.7,73.9);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f().s("#666666").ss(1,1,1).p("ApdGOIS7sb");
	this.shape_1693.setTransform(261.6,72.9);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f().s("#666666").ss(1,1,1).p("ApmGGITNsL");
	this.shape_1694.setTransform(261.5,71.8);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f().s("#666666").ss(1,1,1).p("ApvF/ITfr9");
	this.shape_1695.setTransform(261.5,70.7);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f().s("#666666").ss(1,1,1).p("Ap5F3ITyrt");
	this.shape_1696.setTransform(261.4,69.7);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f().s("#666666").ss(1,1,1).p("AqCFvIUFrd");
	this.shape_1697.setTransform(261.3,68.6);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f().s("#666666").ss(1,1,1).p("AqLFoIUXrP");
	this.shape_1698.setTransform(261.2,67.5);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f().s("#666666").ss(1,1,1).p("AqUFgIUpq/");
	this.shape_1699.setTransform(261.1,66.4);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f().s("#666666").ss(1,1,1).p("AqdFZIU7qx");
	this.shape_1700.setTransform(261,65.4);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f().s("#666666").ss(1,1,1).p("AqmFRIVOqh");
	this.shape_1701.setTransform(260.9,64.3);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f().s("#666666").ss(1,1,1).p("AqvFJIVgqR");
	this.shape_1702.setTransform(260.8,63.2);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f().s("#666666").ss(1,1,1).p("Aq5FCIVzqD");
	this.shape_1703.setTransform(260.7,62.2);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f().s("#666666").ss(1,1,1).p("ArCE6IWFpz");
	this.shape_1704.setTransform(260.6,61.1);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f().s("#666666").ss(1,1,1).p("ArLEzIWXpl");
	this.shape_1705.setTransform(260.5,60);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f().s("#666666").ss(1,1,1).p("ArUErIWppV");
	this.shape_1706.setTransform(260.4,59);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f().s("#666666").ss(1,1,1).p("ArdEkIW7pH");
	this.shape_1707.setTransform(260.3,57.9);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f().s("#666666").ss(1,1,1).p("ArnEcIXPo3");
	this.shape_1708.setTransform(260.3,56.8);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f().s("#666666").ss(1,1,1).p("ArvEUIXgon");
	this.shape_1709.setTransform(260.2,55.7);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f().s("#666666").ss(1,1,1).p("Ar5ENIXzoZ");
	this.shape_1710.setTransform(260.1,54.7);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f().s("#666666").ss(1,1,1).p("AsCEFIYFoJ");
	this.shape_1711.setTransform(260,53.6);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f().s("#666666").ss(1,1,1).p("AsLD+IYXn7");
	this.shape_1712.setTransform(259.9,52.6);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f().s("#666666").ss(1,1,1).p("AsUD2IYpnr");
	this.shape_1713.setTransform(259.8,51.5);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f().s("#666666").ss(1,1,1).p("AsdDvIY7nc");
	this.shape_1714.setTransform(259.7,50.4);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f().s("#666666").ss(1,1,1).p("AsnDnIZPnN");
	this.shape_1715.setTransform(259.6,49.3);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f().s("#666666").ss(1,1,1).p("AswDfIZhm9");
	this.shape_1716.setTransform(259.5,48.3);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f().s("#666666").ss(1,1,1).p("As5DXIZzmu");
	this.shape_1717.setTransform(259.4,47.2);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f().s("#666666").ss(1,1,1).p("AtCDQIaFmf");
	this.shape_1718.setTransform(259.4,46.1);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f().s("#666666").ss(1,1,1).p("AtLDIIaXmP");
	this.shape_1719.setTransform(259.3,45.1);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f().s("#666666").ss(1,1,1).p("AtUDBIapmB");
	this.shape_1720.setTransform(259.2,44);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f().s("#666666").ss(1,1,1).p("AtdC5Ia7lx");
	this.shape_1721.setTransform(259.1,42.9);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f().s("#666666").ss(1,1,1).p("AtmCyIbNlj");
	this.shape_1722.setTransform(259,41.9);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f().s("#666666").ss(1,1,1).p("AtwCqIbhlT");
	this.shape_1723.setTransform(258.9,40.8);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f().s("#666666").ss(1,1,1).p("At5CjIbzlF");
	this.shape_1724.setTransform(258.8,39.7);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#666666").ss(1,1,1).p("AuCCbIcFk1");
	this.shape_1725.setTransform(258.7,38.6);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f().s("#666666").ss(1,1,1).p("AuLCTIcXkl");
	this.shape_1726.setTransform(258.6,37.6);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f().s("#666666").ss(1,1,1).p("AuUCMIcpkX");
	this.shape_1727.setTransform(258.5,36.5);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f().s("#666666").ss(1,1,1).p("AudCEIc7kH");
	this.shape_1728.setTransform(258.4,35.5);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f().s("#666666").ss(1,1,1).p("AunB9IdOj4");
	this.shape_1729.setTransform(258.4,34.4);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f().s("#666666").ss(1,1,1).p("AuvB1Idfjp");
	this.shape_1730.setTransform(258.3,33.3);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f().s("#666666").ss(1,1,1).p("Au5BtIdzjZ");
	this.shape_1731.setTransform(258.2,32.2);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f().s("#666666").ss(1,1,1).p("AvCBlIeFjJ");
	this.shape_1732.setTransform(258.1,31.2);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f().s("#666666").ss(1,1,1).p("AvUBWIepir");
	this.shape_1733.setTransform(257.9,29);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f().s("#666666").ss(1,1,1).p("AveBPIe9id");
	this.shape_1734.setTransform(257.8,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1597}]}).to({state:[{t:this.shape_1598}]},1).to({state:[{t:this.shape_1599}]},1).to({state:[{t:this.shape_1600}]},1).to({state:[{t:this.shape_1601}]},1).to({state:[{t:this.shape_1602}]},1).to({state:[{t:this.shape_1603}]},1).to({state:[{t:this.shape_1604}]},1).to({state:[{t:this.shape_1605}]},1).to({state:[{t:this.shape_1606}]},1).to({state:[{t:this.shape_1607}]},1).to({state:[{t:this.shape_1608}]},1).to({state:[{t:this.shape_1609}]},1).to({state:[{t:this.shape_1610}]},1).to({state:[{t:this.shape_1611}]},1).to({state:[{t:this.shape_1612}]},1).to({state:[{t:this.shape_1613}]},1).to({state:[{t:this.shape_1614}]},1).to({state:[{t:this.shape_1615}]},1).to({state:[{t:this.shape_1616}]},1).to({state:[{t:this.shape_1617}]},1).to({state:[{t:this.shape_1618}]},1).to({state:[{t:this.shape_1619}]},1).to({state:[{t:this.shape_1620}]},1).to({state:[{t:this.shape_1621}]},1).to({state:[{t:this.shape_1622}]},1).to({state:[{t:this.shape_1623}]},1).to({state:[{t:this.shape_1624}]},1).to({state:[{t:this.shape_1625}]},1).to({state:[{t:this.shape_1626}]},1).to({state:[{t:this.shape_1627}]},1).to({state:[{t:this.shape_1628}]},1).to({state:[{t:this.shape_1629}]},1).to({state:[{t:this.shape_1630}]},1).to({state:[{t:this.shape_1631}]},1).to({state:[{t:this.shape_1632}]},1).to({state:[{t:this.shape_1633}]},1).to({state:[{t:this.shape_1634}]},1).to({state:[{t:this.shape_1635}]},1).to({state:[{t:this.shape_1636}]},1).to({state:[{t:this.shape_1637}]},1).to({state:[{t:this.shape_1638}]},1).to({state:[{t:this.shape_1639}]},1).to({state:[{t:this.shape_1640}]},1).to({state:[{t:this.shape_1641}]},1).to({state:[{t:this.shape_1642}]},1).to({state:[{t:this.shape_1643}]},1).to({state:[{t:this.shape_1644}]},1).to({state:[{t:this.shape_1645}]},1).to({state:[{t:this.shape_1646}]},1).to({state:[{t:this.shape_1647}]},1).to({state:[{t:this.shape_1648}]},1).to({state:[{t:this.shape_1649}]},1).to({state:[{t:this.shape_1650}]},1).to({state:[{t:this.shape_1651}]},1).to({state:[{t:this.shape_1652}]},1).to({state:[{t:this.shape_1653}]},1).to({state:[{t:this.shape_1654}]},1).to({state:[{t:this.shape_1655}]},1).to({state:[{t:this.shape_1656}]},1).to({state:[{t:this.shape_1657}]},1).to({state:[{t:this.shape_1658}]},1).to({state:[{t:this.shape_1659}]},1).to({state:[{t:this.shape_1660}]},1).to({state:[{t:this.shape_1661}]},1).to({state:[{t:this.shape_1662}]},1).to({state:[{t:this.shape_1663}]},1).to({state:[{t:this.shape_1664}]},1).to({state:[{t:this.shape_1665}]},1).to({state:[{t:this.shape_1666}]},1).to({state:[{t:this.shape_1667}]},1).to({state:[{t:this.shape_1668}]},1).to({state:[{t:this.shape_1669}]},1).to({state:[{t:this.shape_1670}]},1).to({state:[{t:this.shape_1671}]},1).to({state:[{t:this.shape_1672}]},1).to({state:[{t:this.shape_1673}]},1).to({state:[{t:this.shape_1674}]},1).to({state:[{t:this.shape_1675}]},1).to({state:[{t:this.shape_1676}]},1).to({state:[{t:this.shape_1677}]},1).to({state:[{t:this.shape_1678}]},1).to({state:[{t:this.shape_1679}]},1).to({state:[{t:this.shape_1680}]},1).to({state:[{t:this.shape_1681}]},1).to({state:[{t:this.shape_1682}]},1).to({state:[{t:this.shape_1683}]},1).to({state:[{t:this.shape_1684}]},1).to({state:[{t:this.shape_1685}]},1).to({state:[{t:this.shape_1686}]},1).to({state:[{t:this.shape_1687}]},1).to({state:[{t:this.shape_1688}]},1).to({state:[{t:this.shape_1689}]},1).to({state:[{t:this.shape_1690}]},1).to({state:[{t:this.shape_1691}]},1).to({state:[{t:this.shape_1692}]},1).to({state:[{t:this.shape_1693}]},1).to({state:[{t:this.shape_1694}]},1).to({state:[{t:this.shape_1695}]},1).to({state:[{t:this.shape_1696}]},1).to({state:[{t:this.shape_1697}]},1).to({state:[{t:this.shape_1698}]},1).to({state:[{t:this.shape_1699}]},1).to({state:[{t:this.shape_1700}]},1).to({state:[{t:this.shape_1701}]},1).to({state:[{t:this.shape_1702}]},1).to({state:[{t:this.shape_1703}]},1).to({state:[{t:this.shape_1704}]},1).to({state:[{t:this.shape_1705}]},1).to({state:[{t:this.shape_1706}]},1).to({state:[{t:this.shape_1707}]},1).to({state:[{t:this.shape_1708}]},1).to({state:[{t:this.shape_1709}]},1).to({state:[{t:this.shape_1710}]},1).to({state:[{t:this.shape_1711}]},1).to({state:[{t:this.shape_1712}]},1).to({state:[{t:this.shape_1713}]},1).to({state:[{t:this.shape_1714}]},1).to({state:[{t:this.shape_1715}]},1).to({state:[{t:this.shape_1716}]},1).to({state:[{t:this.shape_1717}]},1).to({state:[{t:this.shape_1718}]},1).to({state:[{t:this.shape_1719}]},1).to({state:[{t:this.shape_1720}]},1).to({state:[{t:this.shape_1721}]},1).to({state:[{t:this.shape_1722}]},1).to({state:[{t:this.shape_1723}]},1).to({state:[{t:this.shape_1724}]},1).to({state:[{t:this.shape_1725}]},1).to({state:[{t:this.shape_1726}]},1).to({state:[{t:this.shape_1727}]},1).to({state:[{t:this.shape_1728}]},1).to({state:[{t:this.shape_1729}]},1).to({state:[{t:this.shape_1730}]},1).to({state:[{t:this.shape_1731}]},1).to({state:[{t:this.shape_1732}]},1).to({state:[{t:this.shape_1600}]},1).to({state:[{t:this.shape_1733}]},1).to({state:[{t:this.shape_1734}]},1).to({state:[{t:this.shape_1597}]},1).wait(1));

	// Слой 23
	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFABQAGgBAFAFQAEAEABAGQgBAGgEAFQgFAEgGABQgFgBgFgEg");
	this.shape_1735.setTransform(65.3,61.9);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgFAFABQAHgBAEAFQAFAEgBAGQABAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_1736.setTransform(66.3,61.1);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgEAFgBQAHABAEAEQAEAFABAFQgBAGgEAFQgEAFgHAAQgFAAgFgFg");
	this.shape_1737.setTransform(67.2,60.3);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAEAFABAFQgBAGgEAFQgEAEgHABQgFgBgFgEg");
	this.shape_1738.setTransform(68.1,59.5);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgFAEgFQAEgEAGAAQAHAAAEAEQAFAFgBAFQABAHgFAEQgEAFgHgBQgGABgEgFg");
	this.shape_1739.setTransform(69.1,58.6);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgGAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAGQAAAHgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_1740.setTransform(70,57.8);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAHgFAEQgFAEgGAAQgGAAgEgEg");
	this.shape_1741.setTransform(71,57);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGABQAGgBAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_1742.setTransform(71.9,56.2);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAFgEAFgBQAGABAFAEQAFAFAAAFQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_1743.setTransform(72.9,55.3);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAGgFAFQgFAEgGABQgFgBgFgEg");
	this.shape_1744.setTransform(73.8,54.5);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgFAFgFQAFgEAFAAQAGAAAFAEQAFAFgBAFQABAHgFAEQgFAFgGgBQgFABgFgFg");
	this.shape_1745.setTransform(74.7,53.7);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#666666").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAGABAFAEQAEAEABAGQgBAHgEAEQgFAFgGgBQgFABgFgFg");
	this.shape_1746.setTransform(75.7,52.9);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFABQAHgBAEAFQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_1747.setTransform(77.6,51.2);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAEgEAGgBQAHABAEAEQAFAFgBAFQABAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_1748.setTransform(78.5,50.4);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAEgFAGAAQAHAAAEAFQAFAFgBAFQABAGgFAFQgEAEgHABQgGgBgEgEg");
	this.shape_1749.setTransform(79.4,49.6);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgEAGAAQAGAAAFAEQAEAFABAFQgBAHgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_1750.setTransform(80.4,48.7);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_1751.setTransform(81.3,47.9);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgEAGgBQAGABAFAEQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_1752.setTransform(82.3,47.1);
	this.shape_1752._off = true;

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAFgFAFABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1753.setTransform(83.2,46.3);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAFgFAFABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgFABgFgFg");
	this.shape_1754.setTransform(84.1,45.5);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAFgFAFAAQAGAAAFAFQAFAFgBAFQABAGgFAFQgFAEgGABQgFgBgFgEg");
	this.shape_1755.setTransform(85.1,44.6);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#666666").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFABAFQgBAHgEAEQgFAEgGABQgFgBgFgEg");
	this.shape_1756.setTransform(86,43.8);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFgBQAHABAEAEQAFAFgBAFQABAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_1757.setTransform(87,43);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAHABAEAEQAEAEABAGQgBAGgEAFQgEAFgHAAQgFAAgFgFg");
	this.shape_1758.setTransform(87.9,42.2);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGABQAHgBAEAFQAFAEgBAGQABAGgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_1759.setTransform(88.9,41.3);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAFgFAFABQAHgBAEAFQAFAFgBAFQABAGgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_1760.setTransform(89.8,40.5);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgFAGAAQAGAAAFAFQAEAFAAAFQAAAGgEAFQgFAEgGABQgGgBgEgEg");
	this.shape_1761.setTransform(90.7,39.7);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAEgGABQgGgBgEgEg");
	this.shape_1762.setTransform(91.7,38.9);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_1763.setTransform(93.6,37.2);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgGAFgEQAFgFAFABQAGgBAFAFQAFAEgBAGQABAGgFAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1764.setTransform(94.5,36.4);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAFgFAFABQAGgBAFAFQAFAFgBAFQABAGgFAFQgFAFgGgBQgFABgFgFg");
	this.shape_1765.setTransform(95.4,35.6);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFABAFQgBAGgEAFQgFAEgGABQgFgBgFgEg");
	this.shape_1766.setTransform(96.4,34.7);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgFAFAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAEgHABQgFgBgFgEg");
	this.shape_1767.setTransform(97.3,33.9);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgGAFgEQAFgEAFgBQAGABAFAEQAFAEgBAGQABAHgFAEQgFAFgGgBQgFABgFgFg");
	this.shape_1768.setTransform(97.2,36.7);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgGAFgEQAEgFAGABQAGgBAFAFQAEAEAAAGQAAAGgEAFQgFAEgGABQgGgBgEgEg");
	this.shape_1769.setTransform(97.1,39.4);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFABQAGgBAFAFQAEAEABAGQgBAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_1770.setTransform(96.8,47.6);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAEgEAGgBQAGABAFAEQAFAFAAAFQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_1771.setTransform(96.6,53.1);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgFAFAAQAHAAAEAFQAFAFgBAFQABAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_1772.setTransform(96.4,58.6);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_1773.setTransform(96.2,64);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgFAGAAQAGAAAFAFQAEAFABAFQgBAHgEAEQgFAEgGABQgGgBgEgEg");
	this.shape_1774.setTransform(96.1,66.8);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f("#666666").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFgBQAHABAEAEQAEAEABAGQgBAHgEAEQgEAFgHgBQgFABgFgFg");
	this.shape_1775.setTransform(96,69.5);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAGgFAFQgFAFgGAAQgGAAgEgFg");
	this.shape_1776.setTransform(95.7,77.7);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFgBQAHABAEAEQAFAFgBAFQABAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_1777.setTransform(95.5,83.2);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgFAGABQAGgBAFAFQAEAFAAAFQAAAGgEAFQgFAFgGgBQgGABgEgFg");
	this.shape_1778.setTransform(95.3,88.7);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f("#666666").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAHAAAEAEQAEAFABAFQgBAHgEAEQgEAFgHgBQgFABgFgFg");
	this.shape_1779.setTransform(95.1,94.2);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgGAEgEQAFgEAFgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgFABgFgFg");
	this.shape_1780.setTransform(94.9,99.7);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgGAEgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_1781.setTransform(94.8,102.4);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgGAEgEQAEgFAGABQAHgBAEAFQAFAEgBAGQABAGgFAFQgEAEgHABQgGgBgEgEg");
	this.shape_1782.setTransform(94.7,105.1);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgEAFgBQAHABAEAEQAFAEgBAGQABAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_1783.setTransform(94.6,107.9);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgEAGgBQAGABAFAEQAEAFAAAFQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_1784.setTransform(94.3,116.1);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAHgBAEAFQAEAFABAFQgBAGgEAFQgEAFgHgBQgFABgFgFg");
	this.shape_1785.setTransform(94.2,118.8);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGAAQAGAAAFAEQAFAFAAAFQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_1786.setTransform(93.9,127);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgFAEgFQAEgFAGAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAEgHABQgGgBgEgEg");
	this.shape_1787.setTransform(93.8,129.8);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgEAGAAQAHAAAEAEQAEAFAAAFQAAAHgEAEQgEAFgHgBQgGABgEgFg");
	this.shape_1788.setTransform(93.4,128.8);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAEgFAGABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_1789.setTransform(93,127.8);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgGAEgEQAFgFAFABQAGgBAFAFQAFAEAAAGQAAAHgFAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1790.setTransform(91.8,124.9);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgGAFgEQAFgEAFAAQAGAAAFAEQAFAEgBAGQABAHgFAEQgFAFgGgBQgFABgFgFg");
	this.shape_1791.setTransform(91.4,124);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f("#666666").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAGAAAFAEQAEAFABAFQgBAHgEAEQgFAFgGgBQgFABgFgFg");
	this.shape_1792.setTransform(91,123);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAFgFAFABQAHgBAEAFQAFAEgBAGQABAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_1793.setTransform(89.8,120.1);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgGAEgEQAEgEAGgBQAHABAEAEQAFAEgBAGQABAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_1794.setTransform(89.3,119.1);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgGAFgEQAEgEAGgBQAHABAEAEQAEAEAAAGQAAAHgEAEQgEAFgHgBQgGABgEgFg");
	this.shape_1795.setTransform(88.9,118.1);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAFgEAFgBQAGABAFAEQAFAFgBAFQABAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_1796.setTransform(87.3,114.3);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgEAFgBQAGABAFAEQAEAEABAGQgBAGgEAFQgFAFgGAAQgFAAgFgFg");
	this.shape_1797.setTransform(86.9,113.3);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgGAEgEQAFgEAFgBQAHABAEAEQAFAEgBAGQABAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_1798.setTransform(86.1,111.4);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgFAGABQAGgBAFAFQAEAFABAFQgBAGgEAFQgFAFgGgBQgGABgEgFg");
	this.shape_1799.setTransform(84.9,108.5);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_1800.setTransform(84.5,107.5);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgFAFgFQAEgEAGgBQAGABAFAEQAEAFAAAFQAAAHgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_1801.setTransform(83.6,105.5);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgFAEgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAEgGABQgFgBgFgEg");
	this.shape_1802.setTransform(83.2,104.6);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f("#666666").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFABQAGgBAFAFQAEAFABAFQgBAGgEAFQgFAFgGgBQgFABgFgFg");
	this.shape_1803.setTransform(82.4,102.6);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgGAEgEQAEgFAGABQAHgBAEAFQAFAEgBAGQABAHgFAEQgEAEgHAAQgGAAgEgEg");
	this.shape_1804.setTransform(81.2,99.7);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgEAGgBQAHABAEAEQAFAFgBAFQABAHgFAEQgEAFgHgBQgGABgEgFg");
	this.shape_1805.setTransform(80.8,98.8);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgFAEgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAGgFAFQgFAEgGABQgGgBgEgEg");
	this.shape_1806.setTransform(80,96.8);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f("#666666").s().p("AgKALQgFgFABgGQgBgGAFgEQAFgEAFgBQAGABAFAEQAFAEgBAGQABAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_1807.setTransform(78.8,93.9);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f("#666666").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAHAAAEAEQAFAFgBAFQABAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_1808.setTransform(77.5,91);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f("#666666").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGgBQAHABAEAEQAFAFgBAFQABAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_1809.setTransform(76.7,89.1);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgFAGABQAGgBAFAFQAFAEAAAGQAAAGgFAFQgFAEgGABQgGgBgEgEg");
	this.shape_1810.setTransform(75.9,87.1);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f("#666666").s().p("AgKALQgFgEABgHQgBgGAFgEQAEgEAGgBQAGABAFAEQAEAEAAAGQAAAHgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_1811.setTransform(75.5,86.2);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f("#666666").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgEAFAAQAHAAAEAEQAEAEABAGQgBAHgEAEQgEAFgHgBQgFABgFgFg");
	this.shape_1812.setTransform(73.1,80.3);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f("#666666").s().p("AgKALQgEgEgBgHQABgFAEgFQAEgFAGAAQAHAAAEAFQAFAFgBAFQABAHgFAEQgEAEgHABQgGgBgEgEg");
	this.shape_1813.setTransform(72.7,79.4);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f("#666666").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgEAGgBQAHABAEAEQAFAEgBAGQABAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_1814.setTransform(68.2,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1735}]}).to({state:[{t:this.shape_1736,p:{x:66.3,y:61.1}}]},1).to({state:[{t:this.shape_1737}]},1).to({state:[{t:this.shape_1738}]},1).to({state:[{t:this.shape_1739,p:{x:69.1,y:58.6}}]},1).to({state:[{t:this.shape_1740,p:{x:70,y:57.8}}]},1).to({state:[{t:this.shape_1741}]},1).to({state:[{t:this.shape_1742,p:{x:71.9,y:56.2}}]},1).to({state:[{t:this.shape_1743,p:{x:72.9,y:55.3}}]},1).to({state:[{t:this.shape_1744,p:{x:73.8,y:54.5}}]},1).to({state:[{t:this.shape_1745,p:{x:74.7,y:53.7}}]},1).to({state:[{t:this.shape_1746,p:{x:75.7,y:52.9}}]},1).to({state:[{t:this.shape_1736,p:{x:76.6,y:52}}]},1).to({state:[{t:this.shape_1747,p:{x:77.6,y:51.2}}]},1).to({state:[{t:this.shape_1748}]},1).to({state:[{t:this.shape_1749,p:{x:79.4,y:49.6}}]},1).to({state:[{t:this.shape_1750,p:{y:48.7}}]},1).to({state:[{t:this.shape_1751}]},1).to({state:[{t:this.shape_1752}]},1).to({state:[{t:this.shape_1753,p:{x:83.2,y:46.3}}]},1).to({state:[{t:this.shape_1754,p:{x:84.1,y:45.5}}]},1).to({state:[{t:this.shape_1755}]},1).to({state:[{t:this.shape_1756,p:{x:86,y:43.8}}]},1).to({state:[{t:this.shape_1757}]},1).to({state:[{t:this.shape_1758,p:{x:87.9,y:42.2}}]},1).to({state:[{t:this.shape_1759,p:{x:88.9,y:41.3}}]},1).to({state:[{t:this.shape_1760,p:{x:89.8,y:40.5}}]},1).to({state:[{t:this.shape_1761,p:{x:90.7,y:39.7}}]},1).to({state:[{t:this.shape_1762,p:{x:91.7,y:38.9}}]},1).to({state:[{t:this.shape_1740,p:{x:92.6,y:38}}]},1).to({state:[{t:this.shape_1763,p:{x:93.6,y:37.2}}]},1).to({state:[{t:this.shape_1764,p:{y:36.4}}]},1).to({state:[{t:this.shape_1765,p:{y:35.6}}]},1).to({state:[{t:this.shape_1766,p:{x:96.4,y:34.7}}]},1).to({state:[{t:this.shape_1767}]},1).to({state:[{t:this.shape_1768}]},1).to({state:[{t:this.shape_1769}]},1).to({state:[{t:this.shape_1742,p:{x:97,y:42.1}}]},1).to({state:[{t:this.shape_1758,p:{x:96.9,y:44.9}}]},1).to({state:[{t:this.shape_1770,p:{x:96.8,y:47.6}}]},1).to({state:[{t:this.shape_1743,p:{x:96.7,y:50.4}}]},1).to({state:[{t:this.shape_1771,p:{x:96.6,y:53.1}}]},1).to({state:[{t:this.shape_1760,p:{x:96.5,y:55.8}}]},1).to({state:[{t:this.shape_1772,p:{x:96.4,y:58.6}}]},1).to({state:[{t:this.shape_1745,p:{x:96.3,y:61.3}}]},1).to({state:[{t:this.shape_1773,p:{x:96.2,y:64}}]},1).to({state:[{t:this.shape_1774}]},1).to({state:[{t:this.shape_1775}]},1).to({state:[{t:this.shape_1770,p:{x:95.9,y:72.3}}]},1).to({state:[{t:this.shape_1763,p:{x:95.8,y:75}}]},1).to({state:[{t:this.shape_1776}]},1).to({state:[{t:this.shape_1759,p:{x:95.6,y:80.5}}]},1).to({state:[{t:this.shape_1777,p:{x:95.5,y:83.2}}]},1).to({state:[{t:this.shape_1765,p:{y:86}}]},1).to({state:[{t:this.shape_1778,p:{x:95.3,y:88.7}}]},1).to({state:[{t:this.shape_1761,p:{x:95.2,y:91.4}}]},1).to({state:[{t:this.shape_1779,p:{x:95.1,y:94.2}}]},1).to({state:[{t:this.shape_1756,p:{x:95,y:96.9}}]},1).to({state:[{t:this.shape_1780}]},1).to({state:[{t:this.shape_1781}]},1).to({state:[{t:this.shape_1782}]},1).to({state:[{t:this.shape_1783,p:{x:94.6,y:107.9}}]},1).to({state:[{t:this.shape_1764,p:{y:110.6}}]},1).to({state:[{t:this.shape_1742,p:{x:94.4,y:113.3}}]},1).to({state:[{t:this.shape_1784,p:{x:94.3,y:116.1}}]},1).to({state:[{t:this.shape_1785,p:{x:94.2,y:118.8}}]},1).to({state:[{t:this.shape_1766,p:{x:94.1,y:121.6}}]},1).to({state:[{t:this.shape_1744,p:{x:94,y:124.3}}]},1).to({state:[{t:this.shape_1786}]},1).to({state:[{t:this.shape_1787}]},1).to({state:[{t:this.shape_1788}]},1).to({state:[{t:this.shape_1789}]},1).to({state:[{t:this.shape_1784,p:{x:92.6,y:126.9}}]},1).to({state:[{t:this.shape_1752}]},1).to({state:[{t:this.shape_1790}]},1).to({state:[{t:this.shape_1791,p:{x:91.4,y:124}}]},1).to({state:[{t:this.shape_1792,p:{x:91,y:123}}]},1).to({state:[{t:this.shape_1772,p:{x:90.6,y:122}}]},1).to({state:[{t:this.shape_1785,p:{x:90.2,y:121.1}}]},1).to({state:[{t:this.shape_1793}]},1).to({state:[{t:this.shape_1794}]},1).to({state:[{t:this.shape_1795}]},1).to({state:[{t:this.shape_1762,p:{x:88.5,y:117.2}}]},1).to({state:[{t:this.shape_1773,p:{x:88.1,y:116.2}}]},1).to({state:[{t:this.shape_1754,p:{x:87.7,y:115.2}}]},1).to({state:[{t:this.shape_1796,p:{x:87.3,y:114.3}}]},1).to({state:[{t:this.shape_1797}]},1).to({state:[{t:this.shape_1770,p:{x:86.5,y:112.3}}]},1).to({state:[{t:this.shape_1798}]},1).to({state:[{t:this.shape_1779,p:{x:85.7,y:110.4}}]},1).to({state:[{t:this.shape_1749,p:{x:85.3,y:109.4}}]},1).to({state:[{t:this.shape_1799}]},1).to({state:[{t:this.shape_1800}]},1).to({state:[{t:this.shape_1752}]},1).to({state:[{t:this.shape_1801}]},1).to({state:[{t:this.shape_1802}]},1).to({state:[{t:this.shape_1745,p:{x:82.8,y:103.6}}]},1).to({state:[{t:this.shape_1803}]},1).to({state:[{t:this.shape_1777,p:{x:82,y:101.7}}]},1).to({state:[{t:this.shape_1758,p:{x:81.6,y:100.7}}]},1).to({state:[{t:this.shape_1804}]},1).to({state:[{t:this.shape_1805}]},1).to({state:[{t:this.shape_1750,p:{y:97.8}}]},1).to({state:[{t:this.shape_1806}]},1).to({state:[{t:this.shape_1778,p:{x:79.6,y:95.9}}]},1).to({state:[{t:this.shape_1753,p:{x:79.2,y:94.9}}]},1).to({state:[{t:this.shape_1807,p:{x:78.8,y:93.9}}]},1).to({state:[{t:this.shape_1746,p:{x:78.4,y:92.9}}]},1).to({state:[{t:this.shape_1756,p:{x:77.9,y:92}}]},1).to({state:[{t:this.shape_1808}]},1).to({state:[{t:this.shape_1785,p:{x:77.1,y:90}}]},1).to({state:[{t:this.shape_1809}]},1).to({state:[{t:this.shape_1752}]},1).to({state:[{t:this.shape_1810}]},1).to({state:[{t:this.shape_1811}]},1).to({state:[{t:this.shape_1773,p:{x:75.1,y:85.2}}]},1).to({state:[{t:this.shape_1744,p:{x:74.7,y:84.2}}]},1).to({state:[{t:this.shape_1796,p:{x:74.3,y:83.2}}]},1).to({state:[{t:this.shape_1770,p:{x:73.9,y:82.3}}]},1).to({state:[{t:this.shape_1783,p:{x:73.5,y:81.3}}]},1).to({state:[{t:this.shape_1812}]},1).to({state:[{t:this.shape_1813}]},1).to({state:[{t:this.shape_1739,p:{x:72.2,y:78.4}}]},1).to({state:[{t:this.shape_1778,p:{x:71.8,y:77.4}}]},1).to({state:[{t:this.shape_1771,p:{x:71.4,y:76.5}}]},1).to({state:[{t:this.shape_1752}]},1).to({state:[{t:this.shape_1753,p:{x:70.6,y:74.5}}]},1).to({state:[{t:this.shape_1791,p:{x:70.2,y:73.6}}]},1).to({state:[{t:this.shape_1792,p:{x:69.8,y:72.6}}]},1).to({state:[{t:this.shape_1766,p:{x:69.4,y:71.6}}]},1).to({state:[{t:this.shape_1777,p:{x:69,y:70.6}}]},1).to({state:[{t:this.shape_1747,p:{x:68.6,y:69.7}}]},1).to({state:[{t:this.shape_1814}]},1).to({state:[{t:this.shape_1740,p:{x:67.8,y:67.7}}]},1).to({state:[{t:this.shape_1762,p:{x:67.4,y:66.8}}]},1).to({state:[{t:this.shape_1773,p:{x:67,y:65.8}}]},1).to({state:[{t:this.shape_1778,p:{x:66.5,y:64.8}}]},1).to({state:[{t:this.shape_1743,p:{x:66.1,y:63.9}}]},1).to({state:[{t:this.shape_1807,p:{x:65.7,y:62.9}}]},1).to({state:[{t:this.shape_1735}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1752).wait(18).to({_off:false},0).to({_off:true},1).wait(54).to({_off:false,x:92.2,y:125.9},0).to({_off:true},1).wait(19).to({_off:false,x:84.1,y:106.5},0).to({_off:true},1).wait(18).to({_off:false,x:76.3,y:88.1},0).to({_off:true},1).wait(12).to({_off:false,x:71,y:75.5},0).to({_off:true},1).wait(14));

	// Слой 13
	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ADTGbImls2");
	this.shape_1815.setTransform(8.2,163.6);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjWmiIGtNF");
	this.shape_1816.setTransform(7.8,163.4);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjamqIG1NV");
	this.shape_1817.setTransform(7.3,163.2);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjdmyIG7Nk");
	this.shape_1818.setTransform(6.9,163);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajhm5IHDNz");
	this.shape_1819.setTransform(6.4,162.8);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjlnBIHLOD");
	this.shape_1820.setTransform(6,162.7);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjpnIIHTOS");
	this.shape_1821.setTransform(5.6,162.5);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjsnQIHZOh");
	this.shape_1822.setTransform(5.1,162.3);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjwnYIHhOx");
	this.shape_1823.setTransform(4.7,162.1);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj0nfIHpPA");
	this.shape_1824.setTransform(4.2,162);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj4nnIHxPP");
	this.shape_1825.setTransform(3.8,161.8);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj7nvIH3Pf");
	this.shape_1826.setTransform(3.4,161.6);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj/n3IH/Pu");
	this.shape_1827.setTransform(2.9,161.4);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkDn+IIHP9");
	this.shape_1828.setTransform(2.5,161.2);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkHoGIIPQN");
	this.shape_1829.setTransform(2.1,161);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkKoNIIVQc");
	this.shape_1830.setTransform(1.6,160.9);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkOoVIIdQr");
	this.shape_1831.setTransform(1.2,160.7);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkSodIIlQ7");
	this.shape_1832.setTransform(0.8,160.5);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkWolIItRK");
	this.shape_1833.setTransform(0.3,160.3);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkaosII1RZ");
	this.shape_1834.setTransform(-0.1,160.1);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akdo0II7Rp");
	this.shape_1835.setTransform(-0.6,160);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akho8IJDR5");
	this.shape_1836.setTransform(-1,159.8);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AklpDIJLSH");
	this.shape_1837.setTransform(-1.4,159.6);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkppLIJTSX");
	this.shape_1838.setTransform(-1.9,159.4);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AktpTIJbSn");
	this.shape_1839.setTransform(-2.3,159.2);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkwpaIJhS1");
	this.shape_1840.setTransform(-2.7,159);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak0piIJpTF");
	this.shape_1841.setTransform(-3.2,158.9);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak4pqIJxTV");
	this.shape_1842.setTransform(-3.6,158.7);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak8pxIJ5Tj");
	this.shape_1843.setTransform(-4,158.5);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlAp5IKBTz");
	this.shape_1844.setTransform(-4.5,158.3);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlDqBIKHUD");
	this.shape_1845.setTransform(-4.9,158.2);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlHqIIKPUR");
	this.shape_1846.setTransform(-5.3,158);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlLqQIKXUh");
	this.shape_1847.setTransform(-5.8,157.8);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlPqYIKfUw");
	this.shape_1848.setTransform(-6.2,157.6);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AFTKgIql0/");
	this.shape_1849.setTransform(-6.7,157.4);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlSqbIKlU3");
	this.shape_1850.setTransform(-6.7,157);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlRqXIKjUv");
	this.shape_1851.setTransform(-6.8,156.6);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlQqSIKhUl");
	this.shape_1852.setTransform(-6.9,156.1);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlQqOIKhUc");
	this.shape_1853.setTransform(-6.9,155.7);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlPqJIKfUT");
	this.shape_1854.setTransform(-7,155.2);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlOqFIKdUL");
	this.shape_1855.setTransform(-7.1,154.8);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlOqAIKdUC");
	this.shape_1856.setTransform(-7.1,154.4);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlNp8IKbT5");
	this.shape_1857.setTransform(-7.2,153.9);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlNp3IKbTw");
	this.shape_1858.setTransform(-7.2,153.5);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlMpzIKZTn");
	this.shape_1859.setTransform(-7.3,153);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlLpvIKXTf");
	this.shape_1860.setTransform(-7.4,152.6);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlLpqIKXTV");
	this.shape_1861.setTransform(-7.4,152.1);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlKpmIKVTN");
	this.shape_1862.setTransform(-7.5,151.7);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlJpiIKTTF");
	this.shape_1863.setTransform(-7.6,151.3);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlJpdIKTS7");
	this.shape_1864.setTransform(-7.6,150.8);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlIpZIKRSz");
	this.shape_1865.setTransform(-7.7,150.4);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlHpUIKPSp");
	this.shape_1866.setTransform(-7.8,149.9);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlHpQIKPSh");
	this.shape_1867.setTransform(-7.8,149.5);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlGpMIKNSZ");
	this.shape_1868.setTransform(-7.9,149.1);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlFpHIKLSP");
	this.shape_1869.setTransform(-8,148.6);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlFpDIKLSH");
	this.shape_1870.setTransform(-8,148.2);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlEo+IKJR9");
	this.shape_1871.setTransform(-8.1,147.7);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlDo6IKHR1");
	this.shape_1872.setTransform(-8.2,147.3);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlDo1IKHRs");
	this.shape_1873.setTransform(-8.2,146.9);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlCoxIKFRj");
	this.shape_1874.setTransform(-8.3,146.4);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlBotIKDRb");
	this.shape_1875.setTransform(-8.4,146);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlBooIKDRR");
	this.shape_1876.setTransform(-8.4,145.5);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlAokIKBRJ");
	this.shape_1877.setTransform(-8.5,145.1);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlAogIKBRA");
	this.shape_1878.setTransform(-8.5,144.7);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak/obIJ/Q3");
	this.shape_1879.setTransform(-8.6,144.2);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak+oXIJ9Qv");
	this.shape_1880.setTransform(-8.7,143.8);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak+oSIJ9Ql");
	this.shape_1881.setTransform(-8.7,143.3);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak9oOIJ7Qd");
	this.shape_1882.setTransform(-8.8,142.9);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak8oJIJ5QU");
	this.shape_1883.setTransform(-8.9,142.5);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AE9IGIp5wL");
	this.shape_1884.setTransform(-8.9,142);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak6oEIJ1QI");
	this.shape_1885.setTransform(-8.7,142.3);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak5oCIJzQF");
	this.shape_1886.setTransform(-8.4,142.6);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak3oAIJvQB");
	this.shape_1887.setTransform(-8.2,142.9);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak1n/IJrP/");
	this.shape_1888.setTransform(-8,143.2);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak0n+IJpP8");
	this.shape_1889.setTransform(-7.7,143.6);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akzn8IJnP5");
	this.shape_1890.setTransform(-7.5,143.9);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akxn7IJjP3");
	this.shape_1891.setTransform(-7.2,144.2);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akwn5IJhPz");
	this.shape_1892.setTransform(-7,144.5);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akun3IJdPv");
	this.shape_1893.setTransform(-6.7,144.8);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aktn2IJbPt");
	this.shape_1894.setTransform(-6.5,145.1);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akrn0IJXPp");
	this.shape_1895.setTransform(-6.2,145.4);

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkpnzIJTPn");
	this.shape_1896.setTransform(-6,145.7);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkonxIJRPj");
	this.shape_1897.setTransform(-5.8,146);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkmnwIJNPh");
	this.shape_1898.setTransform(-5.5,146.3);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AklnuIJLPd");
	this.shape_1899.setTransform(-5.3,146.6);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkjntIJHPb");
	this.shape_1900.setTransform(-5,146.9);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkinrIJFPX");
	this.shape_1901.setTransform(-4.8,147.2);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkhnqIJDPU");
	this.shape_1902.setTransform(-4.5,147.6);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkfnoII/PR");
	this.shape_1903.setTransform(-4.3,147.9);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkdnnII7PP");
	this.shape_1904.setTransform(-4.1,148.2);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkcnlII5PL");
	this.shape_1905.setTransform(-3.8,148.5);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkankII1PJ");
	this.shape_1906.setTransform(-3.6,148.8);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkZniIIzPF");
	this.shape_1907.setTransform(-3.3,149.1);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkXnhIIvPD");
	this.shape_1908.setTransform(-3.1,149.4);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkWnfIItO/");
	this.shape_1909.setTransform(-2.8,149.7);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkUndIIpO7");
	this.shape_1910.setTransform(-2.6,150);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkTncIInO5");
	this.shape_1911.setTransform(-2.3,150.3);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkRnaIIjO1");
	this.shape_1912.setTransform(-2.1,150.6);

	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkQnZIIhOz");
	this.shape_1913.setTransform(-1.8,150.9);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkOnXIIdOv");
	this.shape_1914.setTransform(-1.6,151.2);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkNnWIIbOt");
	this.shape_1915.setTransform(-1.4,151.6);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkLnVIIXOq");
	this.shape_1916.setTransform(-1.1,151.9);

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkKnTIIVOn");
	this.shape_1917.setTransform(-0.9,152.2);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkInRIIROj");
	this.shape_1918.setTransform(-0.6,152.5);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkHnQIIPOh");
	this.shape_1919.setTransform(-0.4,152.8);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkFnOIILOd");
	this.shape_1920.setTransform(-0.1,153.1);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkEnNIIJOb");
	this.shape_1921.setTransform(0.1,153.4);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkCnLIIFOX");
	this.shape_1922.setTransform(0.4,153.7);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkBnJIIDOT");
	this.shape_1923.setTransform(0.6,154);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj/nIIH/OR");
	this.shape_1924.setTransform(0.9,154.3);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj+nHIH9OP");
	this.shape_1925.setTransform(1.1,154.6);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj8nFIH5OL");
	this.shape_1926.setTransform(1.3,154.9);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj7nEIH3OJ");
	this.shape_1927.setTransform(1.6,155.3);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj5nCIHzOF");
	this.shape_1928.setTransform(1.8,155.6);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj4nBIHxOC");
	this.shape_1929.setTransform(2.1,155.9);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj2m/IHtN/");
	this.shape_1930.setTransform(2.3,156.2);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj1m9IHrN8");
	this.shape_1931.setTransform(2.6,156.5);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajzm8IHnN5");
	this.shape_1932.setTransform(2.8,156.8);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajym6IHlN1");
	this.shape_1933.setTransform(3.1,157.1);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajwm5IHhNz");
	this.shape_1934.setTransform(3.3,157.4);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajum3IHdNw");
	this.shape_1935.setTransform(3.5,157.7);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajtm2IHbNt");
	this.shape_1936.setTransform(3.8,158);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ajsm0IHZNp");
	this.shape_1937.setTransform(4,158.3);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjqmzIHVNn");
	this.shape_1938.setTransform(4.3,158.6);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjpmxIHTNj");
	this.shape_1939.setTransform(4.5,158.9);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjnmwIHPNh");
	this.shape_1940.setTransform(4.8,159.2);

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjmmvIHNNe");
	this.shape_1941.setTransform(5,159.6);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjkmtIHJNb");
	this.shape_1942.setTransform(5.3,159.9);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjimrIHFNX");
	this.shape_1943.setTransform(5.5,160.2);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjhmqIHDNV");
	this.shape_1944.setTransform(5.7,160.5);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjfmoIG/NR");
	this.shape_1945.setTransform(6,160.8);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjemnIG9NP");
	this.shape_1946.setTransform(6.2,161.1);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjcmlIG5NL");
	this.shape_1947.setTransform(6.5,161.4);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjbmjIG3NI");
	this.shape_1948.setTransform(6.7,161.7);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjamiIG1NF");
	this.shape_1949.setTransform(7,162);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjYmhIGxND");
	this.shape_1950.setTransform(7.2,162.3);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjWmfIGtM/");
	this.shape_1951.setTransform(7.4,162.6);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjVmdIGrM8");
	this.shape_1952.setTransform(7.7,163);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjTmcIGnM5");
	this.shape_1953.setTransform(7.9,163.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1815}]}).to({state:[{t:this.shape_1816}]},1).to({state:[{t:this.shape_1817}]},1).to({state:[{t:this.shape_1818}]},1).to({state:[{t:this.shape_1819}]},1).to({state:[{t:this.shape_1820}]},1).to({state:[{t:this.shape_1821}]},1).to({state:[{t:this.shape_1822}]},1).to({state:[{t:this.shape_1823}]},1).to({state:[{t:this.shape_1824}]},1).to({state:[{t:this.shape_1825}]},1).to({state:[{t:this.shape_1826}]},1).to({state:[{t:this.shape_1827}]},1).to({state:[{t:this.shape_1828}]},1).to({state:[{t:this.shape_1829}]},1).to({state:[{t:this.shape_1830}]},1).to({state:[{t:this.shape_1831}]},1).to({state:[{t:this.shape_1832}]},1).to({state:[{t:this.shape_1833}]},1).to({state:[{t:this.shape_1834}]},1).to({state:[{t:this.shape_1835}]},1).to({state:[{t:this.shape_1836}]},1).to({state:[{t:this.shape_1837}]},1).to({state:[{t:this.shape_1838}]},1).to({state:[{t:this.shape_1839}]},1).to({state:[{t:this.shape_1840}]},1).to({state:[{t:this.shape_1841}]},1).to({state:[{t:this.shape_1842}]},1).to({state:[{t:this.shape_1843}]},1).to({state:[{t:this.shape_1844}]},1).to({state:[{t:this.shape_1845}]},1).to({state:[{t:this.shape_1846}]},1).to({state:[{t:this.shape_1847}]},1).to({state:[{t:this.shape_1848}]},1).to({state:[{t:this.shape_1849}]},1).to({state:[{t:this.shape_1850}]},1).to({state:[{t:this.shape_1851}]},1).to({state:[{t:this.shape_1852}]},1).to({state:[{t:this.shape_1853}]},1).to({state:[{t:this.shape_1854}]},1).to({state:[{t:this.shape_1855}]},1).to({state:[{t:this.shape_1856}]},1).to({state:[{t:this.shape_1857}]},1).to({state:[{t:this.shape_1858}]},1).to({state:[{t:this.shape_1859}]},1).to({state:[{t:this.shape_1860}]},1).to({state:[{t:this.shape_1861}]},1).to({state:[{t:this.shape_1862}]},1).to({state:[{t:this.shape_1863}]},1).to({state:[{t:this.shape_1864}]},1).to({state:[{t:this.shape_1865}]},1).to({state:[{t:this.shape_1866}]},1).to({state:[{t:this.shape_1867}]},1).to({state:[{t:this.shape_1868}]},1).to({state:[{t:this.shape_1869}]},1).to({state:[{t:this.shape_1870}]},1).to({state:[{t:this.shape_1871}]},1).to({state:[{t:this.shape_1872}]},1).to({state:[{t:this.shape_1873}]},1).to({state:[{t:this.shape_1874}]},1).to({state:[{t:this.shape_1875}]},1).to({state:[{t:this.shape_1876}]},1).to({state:[{t:this.shape_1877}]},1).to({state:[{t:this.shape_1878}]},1).to({state:[{t:this.shape_1879}]},1).to({state:[{t:this.shape_1880}]},1).to({state:[{t:this.shape_1881}]},1).to({state:[{t:this.shape_1882}]},1).to({state:[{t:this.shape_1883}]},1).to({state:[{t:this.shape_1884}]},1).to({state:[{t:this.shape_1885}]},1).to({state:[{t:this.shape_1886}]},1).to({state:[{t:this.shape_1887}]},1).to({state:[{t:this.shape_1888}]},1).to({state:[{t:this.shape_1889}]},1).to({state:[{t:this.shape_1890}]},1).to({state:[{t:this.shape_1891}]},1).to({state:[{t:this.shape_1892}]},1).to({state:[{t:this.shape_1893}]},1).to({state:[{t:this.shape_1894}]},1).to({state:[{t:this.shape_1895}]},1).to({state:[{t:this.shape_1896}]},1).to({state:[{t:this.shape_1897}]},1).to({state:[{t:this.shape_1898}]},1).to({state:[{t:this.shape_1899}]},1).to({state:[{t:this.shape_1900}]},1).to({state:[{t:this.shape_1901}]},1).to({state:[{t:this.shape_1902}]},1).to({state:[{t:this.shape_1903}]},1).to({state:[{t:this.shape_1904}]},1).to({state:[{t:this.shape_1905}]},1).to({state:[{t:this.shape_1906}]},1).to({state:[{t:this.shape_1907}]},1).to({state:[{t:this.shape_1908}]},1).to({state:[{t:this.shape_1909}]},1).to({state:[{t:this.shape_1910}]},1).to({state:[{t:this.shape_1911}]},1).to({state:[{t:this.shape_1912}]},1).to({state:[{t:this.shape_1913}]},1).to({state:[{t:this.shape_1914}]},1).to({state:[{t:this.shape_1915}]},1).to({state:[{t:this.shape_1916}]},1).to({state:[{t:this.shape_1917}]},1).to({state:[{t:this.shape_1918}]},1).to({state:[{t:this.shape_1919}]},1).to({state:[{t:this.shape_1920}]},1).to({state:[{t:this.shape_1921}]},1).to({state:[{t:this.shape_1922}]},1).to({state:[{t:this.shape_1923}]},1).to({state:[{t:this.shape_1924}]},1).to({state:[{t:this.shape_1925}]},1).to({state:[{t:this.shape_1926}]},1).to({state:[{t:this.shape_1927}]},1).to({state:[{t:this.shape_1928}]},1).to({state:[{t:this.shape_1929}]},1).to({state:[{t:this.shape_1930}]},1).to({state:[{t:this.shape_1931}]},1).to({state:[{t:this.shape_1932}]},1).to({state:[{t:this.shape_1933}]},1).to({state:[{t:this.shape_1934}]},1).to({state:[{t:this.shape_1935}]},1).to({state:[{t:this.shape_1936}]},1).to({state:[{t:this.shape_1937}]},1).to({state:[{t:this.shape_1938}]},1).to({state:[{t:this.shape_1939}]},1).to({state:[{t:this.shape_1940}]},1).to({state:[{t:this.shape_1941}]},1).to({state:[{t:this.shape_1942}]},1).to({state:[{t:this.shape_1943}]},1).to({state:[{t:this.shape_1944}]},1).to({state:[{t:this.shape_1945}]},1).to({state:[{t:this.shape_1946}]},1).to({state:[{t:this.shape_1947}]},1).to({state:[{t:this.shape_1948}]},1).to({state:[{t:this.shape_1949}]},1).to({state:[{t:this.shape_1950}]},1).to({state:[{t:this.shape_1951}]},1).to({state:[{t:this.shape_1952}]},1).to({state:[{t:this.shape_1953}]},1).to({state:[{t:this.shape_1815}]},1).wait(1));

	// Слой 9
	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqCENIUFoZ");
	this.shape_1954.setTransform(93.5,177.8);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqPEZIUfox");
	this.shape_1955.setTransform(94.8,177.3);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqdEkIU7pH");
	this.shape_1956.setTransform(96.1,176.7);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqqEwIVVpf");
	this.shape_1957.setTransform(97.4,176.1);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq4E8IVxp3");
	this.shape_1958.setTransform(98.7,175.5);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArFFIIWLqP");
	this.shape_1959.setTransform(100,174.9);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArTFTIWnql");
	this.shape_1960.setTransform(101.3,174.3);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArhFfIXDq9");
	this.shape_1961.setTransform(102.6,173.7);

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AruFrIXdrV");
	this.shape_1962.setTransform(103.9,173.1);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar8F2IX5rs");
	this.shape_1963.setTransform(105.2,172.6);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsJGCIYTsD");
	this.shape_1964.setTransform(106.5,172);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsXGOIYvsb");
	this.shape_1965.setTransform(107.8,171.4);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AskGaIZJsz");
	this.shape_1966.setTransform(109.1,170.8);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsyGmIZltK");
	this.shape_1967.setTransform(110.4,170.2);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("As/GxIZ/th");
	this.shape_1968.setTransform(111.7,169.6);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtNG9Iabt5");
	this.shape_1969.setTransform(113,169);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtbHJIa2uR");
	this.shape_1970.setTransform(114.3,168.4);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtoHUIbRun");
	this.shape_1971.setTransform(115.6,167.9);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("At2HgIbtu/");
	this.shape_1972.setTransform(116.9,167.3);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AuDHsIcHvX");
	this.shape_1973.setTransform(118.2,166.7);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AuRH4Icjvv");
	this.shape_1974.setTransform(119.5,166.1);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AufIDIc/wF");
	this.shape_1975.setTransform(120.8,165.5);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AusIPIdZwd");
	this.shape_1976.setTransform(122.1,164.9);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Au6IbId1w1");
	this.shape_1977.setTransform(123.4,164.3);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvHInIePxN");
	this.shape_1978.setTransform(124.7,163.7);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvVIyIeqxj");
	this.shape_1979.setTransform(126,163.1);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AviI+IfFx7");
	this.shape_1980.setTransform(127.2,162.6);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvwJKIfhyT");
	this.shape_1981.setTransform(128.5,162);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Av9JWIf7yr");
	this.shape_1982.setTransform(129.8,161.4);

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwLJhMAgXgTB");
	this.shape_1983.setTransform(131.2,160.8);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwZJtMAgzgTZ");
	this.shape_1984.setTransform(132.5,160.2);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwmJ5MAhNgTx");
	this.shape_1985.setTransform(133.8,159.6);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aw0KFMAhpgUJ");
	this.shape_1986.setTransform(135,159);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AxBKQMAiDgUf");
	this.shape_1987.setTransform(136.3,158.4);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AxPKcMAifgU3");
	this.shape_1988.setTransform(137.6,157.9);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AxFKSMAiLgUj");
	this.shape_1989.setTransform(136.5,158);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aw8KIMAh5gUP");
	this.shape_1990.setTransform(135.5,158.1);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwyJ+MAhlgT7");
	this.shape_1991.setTransform(134.4,158.2);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwpJ0MAhSgTn");
	this.shape_1992.setTransform(133.3,158.4);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwfJqMAg/gTT");
	this.shape_1993.setTransform(132.2,158.5);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwWJfMAgtgS9");
	this.shape_1994.setTransform(131.1,158.6);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwMJVMAgZgSp");
	this.shape_1995.setTransform(130.1,158.8);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AwCJLMAgGgSV");
	this.shape_1996.setTransform(129,158.9);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Av5JBIfzyB");
	this.shape_1997.setTransform(127.9,159);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvwI3Ifhxt");
	this.shape_1998.setTransform(126.8,159.2);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvmItIfNxZ");
	this.shape_1999.setTransform(125.7,159.3);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvcIjIe5xF");
	this.shape_2000.setTransform(124.6,159.4);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvTIZIenwx");
	this.shape_2001.setTransform(123.5,159.5);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvJIPIeTwd");
	this.shape_2002.setTransform(122.5,159.7);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AvAIEIeBwI");
	this.shape_2003.setTransform(121.4,159.8);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Au2H6Idtvz");
	this.shape_2004.setTransform(120.3,159.9);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AutHwIdavf");
	this.shape_2005.setTransform(119.2,160.1);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AujHmIdHvL");
	this.shape_2006.setTransform(118.1,160.2);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AuaHcIc1u3");
	this.shape_2007.setTransform(117.1,160.3);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AuQHSIchuj");
	this.shape_2008.setTransform(116,160.4);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AuHHIIcPuP");
	this.shape_2009.setTransform(114.9,160.6);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("At9G+Ib7t6");
	this.shape_2010.setTransform(113.8,160.7);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("At0G0Ibptn");
	this.shape_2011.setTransform(112.7,160.8);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtqGqIbVtS");
	this.shape_2012.setTransform(111.6,161);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtgGfIbBs9");
	this.shape_2013.setTransform(110.5,161.1);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtXGVIavsp");
	this.shape_2014.setTransform(109.5,161.2);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtNGLIabsV");
	this.shape_2015.setTransform(108.4,161.4);

	this.shape_2016 = new cjs.Shape();
	this.shape_2016.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AtEGBIaJsB");
	this.shape_2016.setTransform(107.3,161.5);

	this.shape_2017 = new cjs.Shape();
	this.shape_2017.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("As6F3IZ1rt");
	this.shape_2017.setTransform(106.2,161.6);

	this.shape_2018 = new cjs.Shape();
	this.shape_2018.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsxFtIZjrZ");
	this.shape_2018.setTransform(105.1,161.7);

	this.shape_2019 = new cjs.Shape();
	this.shape_2019.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsnFjIZPrF");
	this.shape_2019.setTransform(104,161.9);

	this.shape_2020 = new cjs.Shape();
	this.shape_2020.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AseFYIY9qw");
	this.shape_2020.setTransform(103,162);

	this.shape_2021 = new cjs.Shape();
	this.shape_2021.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsUFOIYpqc");
	this.shape_2021.setTransform(101.9,162.1);

	this.shape_2022 = new cjs.Shape();
	this.shape_2022.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsKFEIYWqH");
	this.shape_2022.setTransform(100.8,162.3);

	this.shape_2023 = new cjs.Shape();
	this.shape_2023.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AsBE6IYDpz");
	this.shape_2023.setTransform(99.7,162.4);

	this.shape_2024 = new cjs.Shape();
	this.shape_2024.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar/E5IX/px");
	this.shape_2024.setTransform(99.6,162.6);

	this.shape_2025 = new cjs.Shape();
	this.shape_2025.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar9E5IX7px");
	this.shape_2025.setTransform(99.5,162.8);

	this.shape_2026 = new cjs.Shape();
	this.shape_2026.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar8E4IX5pv");
	this.shape_2026.setTransform(99.5,163);

	this.shape_2027 = new cjs.Shape();
	this.shape_2027.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar6E4IX1pv");
	this.shape_2027.setTransform(99.3,163.3);

	this.shape_2028 = new cjs.Shape();
	this.shape_2028.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar4E3IXxpt");
	this.shape_2028.setTransform(99.3,163.5);

	this.shape_2029 = new cjs.Shape();
	this.shape_2029.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar2E3IXtps");
	this.shape_2029.setTransform(99.2,163.7);

	this.shape_2030 = new cjs.Shape();
	this.shape_2030.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ar0E2IXppr");
	this.shape_2030.setTransform(99.1,163.9);

	this.shape_2031 = new cjs.Shape();
	this.shape_2031.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArzE1IXnpp");
	this.shape_2031.setTransform(99,164.2);

	this.shape_2032 = new cjs.Shape();
	this.shape_2032.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArxE0IXjpn");
	this.shape_2032.setTransform(98.9,164.4);

	this.shape_2033 = new cjs.Shape();
	this.shape_2033.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArvE0IXfpn");
	this.shape_2033.setTransform(98.8,164.6);

	this.shape_2034 = new cjs.Shape();
	this.shape_2034.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArtEzIXbpl");
	this.shape_2034.setTransform(98.7,164.8);

	this.shape_2035 = new cjs.Shape();
	this.shape_2035.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArrEyIXXpj");
	this.shape_2035.setTransform(98.6,165);

	this.shape_2036 = new cjs.Shape();
	this.shape_2036.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArqEyIXUpj");
	this.shape_2036.setTransform(98.6,165.2);

	this.shape_2037 = new cjs.Shape();
	this.shape_2037.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AroExIXRph");
	this.shape_2037.setTransform(98.5,165.5);

	this.shape_2038 = new cjs.Shape();
	this.shape_2038.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArmExIXNpg");
	this.shape_2038.setTransform(98.4,165.7);

	this.shape_2039 = new cjs.Shape();
	this.shape_2039.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArkEwIXJpf");
	this.shape_2039.setTransform(98.3,165.9);

	this.shape_2040 = new cjs.Shape();
	this.shape_2040.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AriEvIXFpd");
	this.shape_2040.setTransform(98.2,166.1);

	this.shape_2041 = new cjs.Shape();
	this.shape_2041.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArgEvIXBpd");
	this.shape_2041.setTransform(98.1,166.4);

	this.shape_2042 = new cjs.Shape();
	this.shape_2042.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AreEuIW9pb");
	this.shape_2042.setTransform(98,166.6);

	this.shape_2043 = new cjs.Shape();
	this.shape_2043.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArdEtIW7pZ");
	this.shape_2043.setTransform(97.9,166.8);

	this.shape_2044 = new cjs.Shape();
	this.shape_2044.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArbEtIW3pZ");
	this.shape_2044.setTransform(97.8,167);

	this.shape_2045 = new cjs.Shape();
	this.shape_2045.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArZEsIWzpX");
	this.shape_2045.setTransform(97.8,167.3);

	this.shape_2046 = new cjs.Shape();
	this.shape_2046.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArXEsIWvpW");
	this.shape_2046.setTransform(97.7,167.5);

	this.shape_2047 = new cjs.Shape();
	this.shape_2047.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArVErIWrpV");
	this.shape_2047.setTransform(97.6,167.7);

	this.shape_2048 = new cjs.Shape();
	this.shape_2048.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArUEqIWopT");
	this.shape_2048.setTransform(97.5,167.9);

	this.shape_2049 = new cjs.Shape();
	this.shape_2049.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArSEpIWlpR");
	this.shape_2049.setTransform(97.4,168.1);

	this.shape_2050 = new cjs.Shape();
	this.shape_2050.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArQEpIWhpR");
	this.shape_2050.setTransform(97.3,168.3);

	this.shape_2051 = new cjs.Shape();
	this.shape_2051.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArOEoIWdpP");
	this.shape_2051.setTransform(97.2,168.6);

	this.shape_2052 = new cjs.Shape();
	this.shape_2052.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArMEnIWZpN");
	this.shape_2052.setTransform(97.1,168.8);

	this.shape_2053 = new cjs.Shape();
	this.shape_2053.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArLEnIWXpN");
	this.shape_2053.setTransform(97.1,169);

	this.shape_2054 = new cjs.Shape();
	this.shape_2054.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArJEmIWTpL");
	this.shape_2054.setTransform(97,169.2);

	this.shape_2055 = new cjs.Shape();
	this.shape_2055.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArHEmIWPpK");
	this.shape_2055.setTransform(96.9,169.5);

	this.shape_2056 = new cjs.Shape();
	this.shape_2056.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArFElIWLpJ");
	this.shape_2056.setTransform(96.8,169.7);

	this.shape_2057 = new cjs.Shape();
	this.shape_2057.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArDEkIWHpH");
	this.shape_2057.setTransform(96.7,169.9);

	this.shape_2058 = new cjs.Shape();
	this.shape_2058.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArBEkIWDpH");
	this.shape_2058.setTransform(96.6,170.1);

	this.shape_2059 = new cjs.Shape();
	this.shape_2059.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArAEjIWApF");
	this.shape_2059.setTransform(96.5,170.3);

	this.shape_2060 = new cjs.Shape();
	this.shape_2060.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq+EiIV9pD");
	this.shape_2060.setTransform(96.4,170.5);

	this.shape_2061 = new cjs.Shape();
	this.shape_2061.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq8EhIV5pB");
	this.shape_2061.setTransform(96.3,170.8);

	this.shape_2062 = new cjs.Shape();
	this.shape_2062.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq6EhIV1pB");
	this.shape_2062.setTransform(96.3,171);

	this.shape_2063 = new cjs.Shape();
	this.shape_2063.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq4EgIVxo/");
	this.shape_2063.setTransform(96.2,171.2);

	this.shape_2064 = new cjs.Shape();
	this.shape_2064.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq2EgIVto/");
	this.shape_2064.setTransform(96.1,171.4);

	this.shape_2065 = new cjs.Shape();
	this.shape_2065.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq1EfIVro9");
	this.shape_2065.setTransform(96,171.7);

	this.shape_2066 = new cjs.Shape();
	this.shape_2066.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqzEeIVno7");
	this.shape_2066.setTransform(95.9,171.9);

	this.shape_2067 = new cjs.Shape();
	this.shape_2067.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqxEeIVjo7");
	this.shape_2067.setTransform(95.8,172.1);

	this.shape_2068 = new cjs.Shape();
	this.shape_2068.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqvEdIVfo5");
	this.shape_2068.setTransform(95.7,172.3);

	this.shape_2069 = new cjs.Shape();
	this.shape_2069.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqtEcIVbo3");
	this.shape_2069.setTransform(95.6,172.5);

	this.shape_2070 = new cjs.Shape();
	this.shape_2070.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqrEbIVYo1");
	this.shape_2070.setTransform(95.6,172.8);

	this.shape_2071 = new cjs.Shape();
	this.shape_2071.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqpEbIVUo1");
	this.shape_2071.setTransform(95.5,173);

	this.shape_2072 = new cjs.Shape();
	this.shape_2072.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqoEbIVRo1");
	this.shape_2072.setTransform(95.4,173.2);

	this.shape_2073 = new cjs.Shape();
	this.shape_2073.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqmEaIVNoz");
	this.shape_2073.setTransform(95.3,173.4);

	this.shape_2074 = new cjs.Shape();
	this.shape_2074.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqkEZIVJox");
	this.shape_2074.setTransform(95.2,173.6);

	this.shape_2075 = new cjs.Shape();
	this.shape_2075.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqiEYIVFow");
	this.shape_2075.setTransform(95.1,173.9);

	this.shape_2076 = new cjs.Shape();
	this.shape_2076.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqhEYIVDov");
	this.shape_2076.setTransform(95,174.1);

	this.shape_2077 = new cjs.Shape();
	this.shape_2077.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqfEXIU/ot");
	this.shape_2077.setTransform(94.9,174.3);

	this.shape_2078 = new cjs.Shape();
	this.shape_2078.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqdEWIU7or");
	this.shape_2078.setTransform(94.8,174.5);

	this.shape_2079 = new cjs.Shape();
	this.shape_2079.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqbEWIU3or");
	this.shape_2079.setTransform(94.8,174.7);

	this.shape_2080 = new cjs.Shape();
	this.shape_2080.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqZEVIUzop");
	this.shape_2080.setTransform(94.7,175);

	this.shape_2081 = new cjs.Shape();
	this.shape_2081.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqXEVIUvop");
	this.shape_2081.setTransform(94.6,175.2);

	this.shape_2082 = new cjs.Shape();
	this.shape_2082.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqWEUIUton");
	this.shape_2082.setTransform(94.5,175.4);

	this.shape_2083 = new cjs.Shape();
	this.shape_2083.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqUETIUpol");
	this.shape_2083.setTransform(94.4,175.6);

	this.shape_2084 = new cjs.Shape();
	this.shape_2084.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqSESIUlok");
	this.shape_2084.setTransform(94.3,175.9);

	this.shape_2085 = new cjs.Shape();
	this.shape_2085.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqQESIUhoj");
	this.shape_2085.setTransform(94.2,176.1);

	this.shape_2086 = new cjs.Shape();
	this.shape_2086.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqOERIUdoh");
	this.shape_2086.setTransform(94.1,176.3);

	this.shape_2087 = new cjs.Shape();
	this.shape_2087.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqMERIUZoh");
	this.shape_2087.setTransform(94,176.5);

	this.shape_2088 = new cjs.Shape();
	this.shape_2088.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqLEQIUWof");
	this.shape_2088.setTransform(94,176.7);

	this.shape_2089 = new cjs.Shape();
	this.shape_2089.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqJEQIUToe");
	this.shape_2089.setTransform(93.9,177);

	this.shape_2090 = new cjs.Shape();
	this.shape_2090.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqHEPIUPod");
	this.shape_2090.setTransform(93.8,177.2);

	this.shape_2091 = new cjs.Shape();
	this.shape_2091.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqFEOIULob");
	this.shape_2091.setTransform(93.7,177.4);

	this.shape_2092 = new cjs.Shape();
	this.shape_2092.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqDENIUHoa");
	this.shape_2092.setTransform(93.6,177.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1954}]}).to({state:[{t:this.shape_1955}]},1).to({state:[{t:this.shape_1956}]},1).to({state:[{t:this.shape_1957}]},1).to({state:[{t:this.shape_1958}]},1).to({state:[{t:this.shape_1959}]},1).to({state:[{t:this.shape_1960}]},1).to({state:[{t:this.shape_1961}]},1).to({state:[{t:this.shape_1962}]},1).to({state:[{t:this.shape_1963}]},1).to({state:[{t:this.shape_1964}]},1).to({state:[{t:this.shape_1965}]},1).to({state:[{t:this.shape_1966}]},1).to({state:[{t:this.shape_1967}]},1).to({state:[{t:this.shape_1968}]},1).to({state:[{t:this.shape_1969}]},1).to({state:[{t:this.shape_1970}]},1).to({state:[{t:this.shape_1971}]},1).to({state:[{t:this.shape_1972}]},1).to({state:[{t:this.shape_1973}]},1).to({state:[{t:this.shape_1974}]},1).to({state:[{t:this.shape_1975}]},1).to({state:[{t:this.shape_1976}]},1).to({state:[{t:this.shape_1977}]},1).to({state:[{t:this.shape_1978}]},1).to({state:[{t:this.shape_1979}]},1).to({state:[{t:this.shape_1980}]},1).to({state:[{t:this.shape_1981}]},1).to({state:[{t:this.shape_1982}]},1).to({state:[{t:this.shape_1983}]},1).to({state:[{t:this.shape_1984}]},1).to({state:[{t:this.shape_1985}]},1).to({state:[{t:this.shape_1986}]},1).to({state:[{t:this.shape_1987}]},1).to({state:[{t:this.shape_1988}]},1).to({state:[{t:this.shape_1989}]},1).to({state:[{t:this.shape_1990}]},1).to({state:[{t:this.shape_1991}]},1).to({state:[{t:this.shape_1992}]},1).to({state:[{t:this.shape_1993}]},1).to({state:[{t:this.shape_1994}]},1).to({state:[{t:this.shape_1995}]},1).to({state:[{t:this.shape_1996}]},1).to({state:[{t:this.shape_1997}]},1).to({state:[{t:this.shape_1998}]},1).to({state:[{t:this.shape_1999}]},1).to({state:[{t:this.shape_2000}]},1).to({state:[{t:this.shape_2001}]},1).to({state:[{t:this.shape_2002}]},1).to({state:[{t:this.shape_2003}]},1).to({state:[{t:this.shape_2004}]},1).to({state:[{t:this.shape_2005}]},1).to({state:[{t:this.shape_2006}]},1).to({state:[{t:this.shape_2007}]},1).to({state:[{t:this.shape_2008}]},1).to({state:[{t:this.shape_2009}]},1).to({state:[{t:this.shape_2010}]},1).to({state:[{t:this.shape_2011}]},1).to({state:[{t:this.shape_2012}]},1).to({state:[{t:this.shape_2013}]},1).to({state:[{t:this.shape_2014}]},1).to({state:[{t:this.shape_2015}]},1).to({state:[{t:this.shape_2016}]},1).to({state:[{t:this.shape_2017}]},1).to({state:[{t:this.shape_2018}]},1).to({state:[{t:this.shape_2019}]},1).to({state:[{t:this.shape_2020}]},1).to({state:[{t:this.shape_2021}]},1).to({state:[{t:this.shape_2022}]},1).to({state:[{t:this.shape_2023}]},1).to({state:[{t:this.shape_2024}]},1).to({state:[{t:this.shape_2025}]},1).to({state:[{t:this.shape_2026}]},1).to({state:[{t:this.shape_2027}]},1).to({state:[{t:this.shape_2028}]},1).to({state:[{t:this.shape_2029}]},1).to({state:[{t:this.shape_2030}]},1).to({state:[{t:this.shape_2031}]},1).to({state:[{t:this.shape_2032}]},1).to({state:[{t:this.shape_2033}]},1).to({state:[{t:this.shape_2034}]},1).to({state:[{t:this.shape_2035}]},1).to({state:[{t:this.shape_2036}]},1).to({state:[{t:this.shape_2037}]},1).to({state:[{t:this.shape_2038}]},1).to({state:[{t:this.shape_2039}]},1).to({state:[{t:this.shape_2040}]},1).to({state:[{t:this.shape_2041}]},1).to({state:[{t:this.shape_2042}]},1).to({state:[{t:this.shape_2043}]},1).to({state:[{t:this.shape_2044}]},1).to({state:[{t:this.shape_2045}]},1).to({state:[{t:this.shape_2046}]},1).to({state:[{t:this.shape_2047}]},1).to({state:[{t:this.shape_2048}]},1).to({state:[{t:this.shape_2049}]},1).to({state:[{t:this.shape_2050}]},1).to({state:[{t:this.shape_2051}]},1).to({state:[{t:this.shape_2052}]},1).to({state:[{t:this.shape_2053}]},1).to({state:[{t:this.shape_2054}]},1).to({state:[{t:this.shape_2055}]},1).to({state:[{t:this.shape_2056}]},1).to({state:[{t:this.shape_2057}]},1).to({state:[{t:this.shape_2058}]},1).to({state:[{t:this.shape_2059}]},1).to({state:[{t:this.shape_2060}]},1).to({state:[{t:this.shape_2061}]},1).to({state:[{t:this.shape_2062}]},1).to({state:[{t:this.shape_2063}]},1).to({state:[{t:this.shape_2064}]},1).to({state:[{t:this.shape_2065}]},1).to({state:[{t:this.shape_2066}]},1).to({state:[{t:this.shape_2067}]},1).to({state:[{t:this.shape_2068}]},1).to({state:[{t:this.shape_2069}]},1).to({state:[{t:this.shape_2070}]},1).to({state:[{t:this.shape_2071}]},1).to({state:[{t:this.shape_2072}]},1).to({state:[{t:this.shape_2073}]},1).to({state:[{t:this.shape_2074}]},1).to({state:[{t:this.shape_2075}]},1).to({state:[{t:this.shape_2076}]},1).to({state:[{t:this.shape_2077}]},1).to({state:[{t:this.shape_2078}]},1).to({state:[{t:this.shape_2079}]},1).to({state:[{t:this.shape_2080}]},1).to({state:[{t:this.shape_2081}]},1).to({state:[{t:this.shape_2082}]},1).to({state:[{t:this.shape_2083}]},1).to({state:[{t:this.shape_2084}]},1).to({state:[{t:this.shape_2085}]},1).to({state:[{t:this.shape_2086}]},1).to({state:[{t:this.shape_2087}]},1).to({state:[{t:this.shape_2088}]},1).to({state:[{t:this.shape_2089}]},1).to({state:[{t:this.shape_2090}]},1).to({state:[{t:this.shape_2091}]},1).to({state:[{t:this.shape_2092}]},1).to({state:[{t:this.shape_1954}]},1).wait(1));

	// Слой 8
	this.shape_2093 = new cjs.Shape();
	this.shape_2093.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AizLKIFn2T");
	this.shape_2093.setTransform(47.3,133.3);

	this.shape_2094 = new cjs.Shape();
	this.shape_2094.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ai4LRIFx2h");
	this.shape_2094.setTransform(47.7,133.2);

	this.shape_2095 = new cjs.Shape();
	this.shape_2095.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ai9LYIF72v");
	this.shape_2095.setTransform(48.2,133.1);

	this.shape_2096 = new cjs.Shape();
	this.shape_2096.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjCLfIGF29");
	this.shape_2096.setTransform(48.6,133);

	this.shape_2097 = new cjs.Shape();
	this.shape_2097.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjHLmIGP3L");
	this.shape_2097.setTransform(49,132.8);

	this.shape_2098 = new cjs.Shape();
	this.shape_2098.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjMLtIGZ3Z");
	this.shape_2098.setTransform(49.5,132.7);

	this.shape_2099 = new cjs.Shape();
	this.shape_2099.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjRL0IGj3n");
	this.shape_2099.setTransform(49.9,132.6);

	this.shape_2100 = new cjs.Shape();
	this.shape_2100.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjWL7IGt31");
	this.shape_2100.setTransform(50.4,132.5);

	this.shape_2101 = new cjs.Shape();
	this.shape_2101.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjbMDIG34F");
	this.shape_2101.setTransform(50.8,132.4);

	this.shape_2102 = new cjs.Shape();
	this.shape_2102.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjgMKIHB4T");
	this.shape_2102.setTransform(51.2,132.3);

	this.shape_2103 = new cjs.Shape();
	this.shape_2103.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjlMRIHL4g");
	this.shape_2103.setTransform(51.7,132.1);

	this.shape_2104 = new cjs.Shape();
	this.shape_2104.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjqMYIHV4v");
	this.shape_2104.setTransform(52.1,132);

	this.shape_2105 = new cjs.Shape();
	this.shape_2105.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjvMfIHf49");
	this.shape_2105.setTransform(52.6,131.9);

	this.shape_2106 = new cjs.Shape();
	this.shape_2106.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj0MmIHp5L");
	this.shape_2106.setTransform(53,131.8);

	this.shape_2107 = new cjs.Shape();
	this.shape_2107.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj5MtIHz5Z");
	this.shape_2107.setTransform(53.5,131.6);

	this.shape_2108 = new cjs.Shape();
	this.shape_2108.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj+M0IH95n");
	this.shape_2108.setTransform(53.9,131.5);

	this.shape_2109 = new cjs.Shape();
	this.shape_2109.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkDM7IIH51");
	this.shape_2109.setTransform(54.3,131.4);

	this.shape_2110 = new cjs.Shape();
	this.shape_2110.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkINCIIR6D");
	this.shape_2110.setTransform(54.8,131.3);

	this.shape_2111 = new cjs.Shape();
	this.shape_2111.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkNNJIIb6R");
	this.shape_2111.setTransform(55.2,131.2);

	this.shape_2112 = new cjs.Shape();
	this.shape_2112.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkSNQIIl6f");
	this.shape_2112.setTransform(55.7,131.1);

	this.shape_2113 = new cjs.Shape();
	this.shape_2113.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkXNXIIv6t");
	this.shape_2113.setTransform(56.1,131);

	this.shape_2114 = new cjs.Shape();
	this.shape_2114.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkcNeII567");
	this.shape_2114.setTransform(56.5,130.8);

	this.shape_2115 = new cjs.Shape();
	this.shape_2115.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkhNlIJD7J");
	this.shape_2115.setTransform(57,130.7);

	this.shape_2116 = new cjs.Shape();
	this.shape_2116.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkmNsIJN7X");
	this.shape_2116.setTransform(57.4,130.6);

	this.shape_2117 = new cjs.Shape();
	this.shape_2117.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkrNzIJX7l");
	this.shape_2117.setTransform(57.9,130.5);

	this.shape_2118 = new cjs.Shape();
	this.shape_2118.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkwN6IJh7z");
	this.shape_2118.setTransform(58.3,130.3);

	this.shape_2119 = new cjs.Shape();
	this.shape_2119.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak1OBIJr8B");
	this.shape_2119.setTransform(58.7,130.2);

	this.shape_2120 = new cjs.Shape();
	this.shape_2120.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak6OJIJ18Q");
	this.shape_2120.setTransform(59.2,130.1);

	this.shape_2121 = new cjs.Shape();
	this.shape_2121.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak/OQIJ/8f");
	this.shape_2121.setTransform(59.6,130);

	this.shape_2122 = new cjs.Shape();
	this.shape_2122.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlEOXIKJ8t");
	this.shape_2122.setTransform(60.1,129.9);

	this.shape_2123 = new cjs.Shape();
	this.shape_2123.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlJOeIKT87");
	this.shape_2123.setTransform(60.5,129.8);

	this.shape_2124 = new cjs.Shape();
	this.shape_2124.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlOOlIKd9J");
	this.shape_2124.setTransform(61,129.6);

	this.shape_2125 = new cjs.Shape();
	this.shape_2125.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlTOsIKn9X");
	this.shape_2125.setTransform(61.4,129.5);

	this.shape_2126 = new cjs.Shape();
	this.shape_2126.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlYOzIKx9l");
	this.shape_2126.setTransform(61.8,129.4);

	this.shape_2127 = new cjs.Shape();
	this.shape_2127.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AldO6IK79z");
	this.shape_2127.setTransform(62.3,129.3);

	this.shape_2128 = new cjs.Shape();
	this.shape_2128.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleOoIK99O");
	this.shape_2128.setTransform(62.2,130.2);

	this.shape_2129 = new cjs.Shape();
	this.shape_2129.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleOWIK98r");
	this.shape_2129.setTransform(62.1,131.2);

	this.shape_2130 = new cjs.Shape();
	this.shape_2130.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleODIK98G");
	this.shape_2130.setTransform(61.9,132.1);

	this.shape_2131 = new cjs.Shape();
	this.shape_2131.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleNxIK97h");
	this.shape_2131.setTransform(61.8,133);

	this.shape_2132 = new cjs.Shape();
	this.shape_2132.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleNfIK969");
	this.shape_2132.setTransform(61.7,133.9);

	this.shape_2133 = new cjs.Shape();
	this.shape_2133.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleNNIK96Z");
	this.shape_2133.setTransform(61.6,134.9);

	this.shape_2134 = new cjs.Shape();
	this.shape_2134.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleM7IK951");
	this.shape_2134.setTransform(61.5,135.8);

	this.shape_2135 = new cjs.Shape();
	this.shape_2135.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfMpIK/5R");
	this.shape_2135.setTransform(61.4,136.7);

	this.shape_2136 = new cjs.Shape();
	this.shape_2136.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfMXIK/4t");
	this.shape_2136.setTransform(61.3,137.6);

	this.shape_2137 = new cjs.Shape();
	this.shape_2137.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfMFIK/4J");
	this.shape_2137.setTransform(61.1,138.6);

	this.shape_2138 = new cjs.Shape();
	this.shape_2138.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfLzIK/3l");
	this.shape_2138.setTransform(61,139.5);

	this.shape_2139 = new cjs.Shape();
	this.shape_2139.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfLhIK/3B");
	this.shape_2139.setTransform(60.9,140.4);

	this.shape_2140 = new cjs.Shape();
	this.shape_2140.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfLPIK/2d");
	this.shape_2140.setTransform(60.8,141.4);

	this.shape_2141 = new cjs.Shape();
	this.shape_2141.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfK8IK/13");
	this.shape_2141.setTransform(60.7,142.3);

	this.shape_2142 = new cjs.Shape();
	this.shape_2142.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgKqILB1T");
	this.shape_2142.setTransform(60.6,143.2);

	this.shape_2143 = new cjs.Shape();
	this.shape_2143.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgKYILB0v");
	this.shape_2143.setTransform(60.4,144.1);

	this.shape_2144 = new cjs.Shape();
	this.shape_2144.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgKGILB0L");
	this.shape_2144.setTransform(60.3,145.1);

	this.shape_2145 = new cjs.Shape();
	this.shape_2145.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgJ0ILBzn");
	this.shape_2145.setTransform(60.2,146);

	this.shape_2146 = new cjs.Shape();
	this.shape_2146.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgJiILBzD");
	this.shape_2146.setTransform(60.1,146.9);

	this.shape_2147 = new cjs.Shape();
	this.shape_2147.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgJQILByf");
	this.shape_2147.setTransform(60,147.8);

	this.shape_2148 = new cjs.Shape();
	this.shape_2148.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhI+ILDx7");
	this.shape_2148.setTransform(59.9,148.8);

	this.shape_2149 = new cjs.Shape();
	this.shape_2149.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhIsILCxW");
	this.shape_2149.setTransform(59.8,149.7);

	this.shape_2150 = new cjs.Shape();
	this.shape_2150.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhIaILDwz");
	this.shape_2150.setTransform(59.6,150.7);

	this.shape_2151 = new cjs.Shape();
	this.shape_2151.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhIHILDwN");
	this.shape_2151.setTransform(59.5,151.6);

	this.shape_2152 = new cjs.Shape();
	this.shape_2152.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhH1ILDvp");
	this.shape_2152.setTransform(59.4,152.5);

	this.shape_2153 = new cjs.Shape();
	this.shape_2153.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhHjILDvF");
	this.shape_2153.setTransform(59.3,153.4);

	this.shape_2154 = new cjs.Shape();
	this.shape_2154.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhHRILDuh");
	this.shape_2154.setTransform(59.2,154.4);

	this.shape_2155 = new cjs.Shape();
	this.shape_2155.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhG/ILEt9");
	this.shape_2155.setTransform(59.1,155.3);

	this.shape_2156 = new cjs.Shape();
	this.shape_2156.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AliGtILFtZ");
	this.shape_2156.setTransform(59,156.2);

	this.shape_2157 = new cjs.Shape();
	this.shape_2157.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AliGbILFs1");
	this.shape_2157.setTransform(58.8,157.1);

	this.shape_2158 = new cjs.Shape();
	this.shape_2158.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AliGJILFsR");
	this.shape_2158.setTransform(58.7,158.1);

	this.shape_2159 = new cjs.Shape();
	this.shape_2159.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AliF2ILFrs");
	this.shape_2159.setTransform(58.6,159);

	this.shape_2160 = new cjs.Shape();
	this.shape_2160.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AliFlILFrJ");
	this.shape_2160.setTransform(58.5,159.9);

	this.shape_2161 = new cjs.Shape();
	this.shape_2161.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AliFSILFqj");
	this.shape_2161.setTransform(58.4,160.9);

	this.shape_2162 = new cjs.Shape();
	this.shape_2162.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AljFAILHp/");
	this.shape_2162.setTransform(58.3,161.8);

	this.shape_2163 = new cjs.Shape();
	this.shape_2163.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgFGILBqL");
	this.shape_2163.setTransform(58.1,161.4);

	this.shape_2164 = new cjs.Shape();
	this.shape_2164.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleFMIK9qW");
	this.shape_2164.setTransform(58,161);

	this.shape_2165 = new cjs.Shape();
	this.shape_2165.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlbFRIK3qh");
	this.shape_2165.setTransform(57.8,160.6);

	this.shape_2166 = new cjs.Shape();
	this.shape_2166.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlZFXIKzqt");
	this.shape_2166.setTransform(57.6,160.1);

	this.shape_2167 = new cjs.Shape();
	this.shape_2167.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlWFcIKtq3");
	this.shape_2167.setTransform(57.5,159.8);

	this.shape_2168 = new cjs.Shape();
	this.shape_2168.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlUFiIKprD");
	this.shape_2168.setTransform(57.3,159.4);

	this.shape_2169 = new cjs.Shape();
	this.shape_2169.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlRFoIKjrP");
	this.shape_2169.setTransform(57.2,158.9);

	this.shape_2170 = new cjs.Shape();
	this.shape_2170.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlPFtIKfrZ");
	this.shape_2170.setTransform(57,158.5);

	this.shape_2171 = new cjs.Shape();
	this.shape_2171.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlMFzIKZrl");
	this.shape_2171.setTransform(56.9,158.1);

	this.shape_2172 = new cjs.Shape();
	this.shape_2172.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlKF5IKVrw");
	this.shape_2172.setTransform(56.7,157.7);

	this.shape_2173 = new cjs.Shape();
	this.shape_2173.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlHF+IKPr7");
	this.shape_2173.setTransform(56.5,157.3);

	this.shape_2174 = new cjs.Shape();
	this.shape_2174.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlFGEIKLsH");
	this.shape_2174.setTransform(56.4,156.9);

	this.shape_2175 = new cjs.Shape();
	this.shape_2175.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlCGJIKFsR");
	this.shape_2175.setTransform(56.2,156.5);

	this.shape_2176 = new cjs.Shape();
	this.shape_2176.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlAGPIKBsd");
	this.shape_2176.setTransform(56.1,156.1);

	this.shape_2177 = new cjs.Shape();
	this.shape_2177.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak9GVIJ7sp");
	this.shape_2177.setTransform(55.9,155.7);

	this.shape_2178 = new cjs.Shape();
	this.shape_2178.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak7GaIJ3sz");
	this.shape_2178.setTransform(55.8,155.3);

	this.shape_2179 = new cjs.Shape();
	this.shape_2179.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak4GgIJxs/");
	this.shape_2179.setTransform(55.6,154.9);

	this.shape_2180 = new cjs.Shape();
	this.shape_2180.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak1GmIJrtK");
	this.shape_2180.setTransform(55.4,154.5);

	this.shape_2181 = new cjs.Shape();
	this.shape_2181.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkzGrIJntV");
	this.shape_2181.setTransform(55.3,154.1);

	this.shape_2182 = new cjs.Shape();
	this.shape_2182.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkxGxIJjth");
	this.shape_2182.setTransform(55.1,153.6);

	this.shape_2183 = new cjs.Shape();
	this.shape_2183.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkuG2IJdtr");
	this.shape_2183.setTransform(55,153.2);

	this.shape_2184 = new cjs.Shape();
	this.shape_2184.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AksG8IJZt3");
	this.shape_2184.setTransform(54.8,152.9);

	this.shape_2185 = new cjs.Shape();
	this.shape_2185.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkpHCIJTuD");
	this.shape_2185.setTransform(54.7,152.4);

	this.shape_2186 = new cjs.Shape();
	this.shape_2186.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AknHHIJPuN");
	this.shape_2186.setTransform(54.5,152);

	this.shape_2187 = new cjs.Shape();
	this.shape_2187.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkkHNIJJuZ");
	this.shape_2187.setTransform(54.3,151.6);

	this.shape_2188 = new cjs.Shape();
	this.shape_2188.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkhHTIJDuk");
	this.shape_2188.setTransform(54.2,151.2);

	this.shape_2189 = new cjs.Shape();
	this.shape_2189.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkfHYII/uv");
	this.shape_2189.setTransform(54,150.8);

	this.shape_2190 = new cjs.Shape();
	this.shape_2190.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkdHeII7u7");
	this.shape_2190.setTransform(53.9,150.4);

	this.shape_2191 = new cjs.Shape();
	this.shape_2191.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkaHjII1vF");
	this.shape_2191.setTransform(53.7,150);

	this.shape_2192 = new cjs.Shape();
	this.shape_2192.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkYHpIIxvR");
	this.shape_2192.setTransform(53.6,149.6);

	this.shape_2193 = new cjs.Shape();
	this.shape_2193.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkVHvIIrvd");
	this.shape_2193.setTransform(53.4,149.2);

	this.shape_2194 = new cjs.Shape();
	this.shape_2194.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkSH0IIlvn");
	this.shape_2194.setTransform(53.2,148.8);

	this.shape_2195 = new cjs.Shape();
	this.shape_2195.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkQH6IIhvz");
	this.shape_2195.setTransform(53.1,148.4);

	this.shape_2196 = new cjs.Shape();
	this.shape_2196.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkNIAIIbv+");
	this.shape_2196.setTransform(52.9,148);

	this.shape_2197 = new cjs.Shape();
	this.shape_2197.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkLIFIIXwJ");
	this.shape_2197.setTransform(52.8,147.6);

	this.shape_2198 = new cjs.Shape();
	this.shape_2198.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkJILIITwV");
	this.shape_2198.setTransform(52.6,147.1);

	this.shape_2199 = new cjs.Shape();
	this.shape_2199.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkGIQIINwf");
	this.shape_2199.setTransform(52.5,146.7);

	this.shape_2200 = new cjs.Shape();
	this.shape_2200.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkEIWIIJwr");
	this.shape_2200.setTransform(52.3,146.3);

	this.shape_2201 = new cjs.Shape();
	this.shape_2201.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkBIbIIDw2");
	this.shape_2201.setTransform(52.1,145.9);

	this.shape_2202 = new cjs.Shape();
	this.shape_2202.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj+IhIH9xB");
	this.shape_2202.setTransform(52,145.5);

	this.shape_2203 = new cjs.Shape();
	this.shape_2203.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj8InIH5xN");
	this.shape_2203.setTransform(51.8,145.1);

	this.shape_2204 = new cjs.Shape();
	this.shape_2204.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj5ItIHzxY");
	this.shape_2204.setTransform(51.7,144.7);

	this.shape_2205 = new cjs.Shape();
	this.shape_2205.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj3IyIHvxj");
	this.shape_2205.setTransform(51.5,144.3);

	this.shape_2206 = new cjs.Shape();
	this.shape_2206.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aj1I4IHrxv");
	this.shape_2206.setTransform(51.4,143.9);

	this.shape_2207 = new cjs.Shape();
	this.shape_2207.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjyI9IHlx5");
	this.shape_2207.setTransform(51.2,143.5);

	this.shape_2208 = new cjs.Shape();
	this.shape_2208.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjvJDIHfyF");
	this.shape_2208.setTransform(51,143.1);

	this.shape_2209 = new cjs.Shape();
	this.shape_2209.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjtJIIHbyQ");
	this.shape_2209.setTransform(50.9,142.7);

	this.shape_2210 = new cjs.Shape();
	this.shape_2210.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjqJOIHVyb");
	this.shape_2210.setTransform(50.7,142.2);

	this.shape_2211 = new cjs.Shape();
	this.shape_2211.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjoJUIHRyn");
	this.shape_2211.setTransform(50.6,141.9);

	this.shape_2212 = new cjs.Shape();
	this.shape_2212.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjlJaIHLyy");
	this.shape_2212.setTransform(50.4,141.5);

	this.shape_2213 = new cjs.Shape();
	this.shape_2213.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjjJfIHHy9");
	this.shape_2213.setTransform(50.3,141);

	this.shape_2214 = new cjs.Shape();
	this.shape_2214.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjhJlIHDzJ");
	this.shape_2214.setTransform(50.1,140.6);

	this.shape_2215 = new cjs.Shape();
	this.shape_2215.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjeJqIG9zT");
	this.shape_2215.setTransform(49.9,140.2);

	this.shape_2216 = new cjs.Shape();
	this.shape_2216.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjbJwIG3zf");
	this.shape_2216.setTransform(49.8,139.8);

	this.shape_2217 = new cjs.Shape();
	this.shape_2217.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjZJ1IGzzq");
	this.shape_2217.setTransform(49.6,139.4);

	this.shape_2218 = new cjs.Shape();
	this.shape_2218.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjWJ7IGtz1");
	this.shape_2218.setTransform(49.5,139);

	this.shape_2219 = new cjs.Shape();
	this.shape_2219.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjUKBIGp0B");
	this.shape_2219.setTransform(49.3,138.6);

	this.shape_2220 = new cjs.Shape();
	this.shape_2220.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjRKHIGj0M");
	this.shape_2220.setTransform(49.2,138.2);

	this.shape_2221 = new cjs.Shape();
	this.shape_2221.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjPKMIGf0X");
	this.shape_2221.setTransform(49,137.8);

	this.shape_2222 = new cjs.Shape();
	this.shape_2222.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjMKSIGZ0j");
	this.shape_2222.setTransform(48.8,137.4);

	this.shape_2223 = new cjs.Shape();
	this.shape_2223.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjKKYIGV0v");
	this.shape_2223.setTransform(48.7,137);

	this.shape_2224 = new cjs.Shape();
	this.shape_2224.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjHKdIGP05");
	this.shape_2224.setTransform(48.5,136.6);

	this.shape_2225 = new cjs.Shape();
	this.shape_2225.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjFKiIGL1E");
	this.shape_2225.setTransform(48.4,136.2);

	this.shape_2226 = new cjs.Shape();
	this.shape_2226.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjCKoIGF1P");
	this.shape_2226.setTransform(48.2,135.7);

	this.shape_2227 = new cjs.Shape();
	this.shape_2227.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AjAKuIGB1b");
	this.shape_2227.setTransform(48.1,135.3);

	this.shape_2228 = new cjs.Shape();
	this.shape_2228.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ai9K0IF71m");
	this.shape_2228.setTransform(47.9,135);

	this.shape_2229 = new cjs.Shape();
	this.shape_2229.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ai7K5IF31x");
	this.shape_2229.setTransform(47.7,134.5);

	this.shape_2230 = new cjs.Shape();
	this.shape_2230.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ai4K/IFx19");
	this.shape_2230.setTransform(47.6,134.1);

	this.shape_2231 = new cjs.Shape();
	this.shape_2231.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ai2LFIFt2J");
	this.shape_2231.setTransform(47.4,133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2093}]}).to({state:[{t:this.shape_2094}]},1).to({state:[{t:this.shape_2095}]},1).to({state:[{t:this.shape_2096}]},1).to({state:[{t:this.shape_2097}]},1).to({state:[{t:this.shape_2098}]},1).to({state:[{t:this.shape_2099}]},1).to({state:[{t:this.shape_2100}]},1).to({state:[{t:this.shape_2101}]},1).to({state:[{t:this.shape_2102}]},1).to({state:[{t:this.shape_2103}]},1).to({state:[{t:this.shape_2104}]},1).to({state:[{t:this.shape_2105}]},1).to({state:[{t:this.shape_2106}]},1).to({state:[{t:this.shape_2107}]},1).to({state:[{t:this.shape_2108}]},1).to({state:[{t:this.shape_2109}]},1).to({state:[{t:this.shape_2110}]},1).to({state:[{t:this.shape_2111}]},1).to({state:[{t:this.shape_2112}]},1).to({state:[{t:this.shape_2113}]},1).to({state:[{t:this.shape_2114}]},1).to({state:[{t:this.shape_2115}]},1).to({state:[{t:this.shape_2116}]},1).to({state:[{t:this.shape_2117}]},1).to({state:[{t:this.shape_2118}]},1).to({state:[{t:this.shape_2119}]},1).to({state:[{t:this.shape_2120}]},1).to({state:[{t:this.shape_2121}]},1).to({state:[{t:this.shape_2122}]},1).to({state:[{t:this.shape_2123}]},1).to({state:[{t:this.shape_2124}]},1).to({state:[{t:this.shape_2125}]},1).to({state:[{t:this.shape_2126}]},1).to({state:[{t:this.shape_2127}]},1).to({state:[{t:this.shape_2128}]},1).to({state:[{t:this.shape_2129}]},1).to({state:[{t:this.shape_2130}]},1).to({state:[{t:this.shape_2131}]},1).to({state:[{t:this.shape_2132}]},1).to({state:[{t:this.shape_2133}]},1).to({state:[{t:this.shape_2134}]},1).to({state:[{t:this.shape_2135}]},1).to({state:[{t:this.shape_2136}]},1).to({state:[{t:this.shape_2137}]},1).to({state:[{t:this.shape_2138}]},1).to({state:[{t:this.shape_2139}]},1).to({state:[{t:this.shape_2140}]},1).to({state:[{t:this.shape_2141}]},1).to({state:[{t:this.shape_2142}]},1).to({state:[{t:this.shape_2143}]},1).to({state:[{t:this.shape_2144}]},1).to({state:[{t:this.shape_2145}]},1).to({state:[{t:this.shape_2146}]},1).to({state:[{t:this.shape_2147}]},1).to({state:[{t:this.shape_2148}]},1).to({state:[{t:this.shape_2149}]},1).to({state:[{t:this.shape_2150}]},1).to({state:[{t:this.shape_2151}]},1).to({state:[{t:this.shape_2152}]},1).to({state:[{t:this.shape_2153}]},1).to({state:[{t:this.shape_2154}]},1).to({state:[{t:this.shape_2155}]},1).to({state:[{t:this.shape_2156}]},1).to({state:[{t:this.shape_2157}]},1).to({state:[{t:this.shape_2158}]},1).to({state:[{t:this.shape_2159}]},1).to({state:[{t:this.shape_2160}]},1).to({state:[{t:this.shape_2161}]},1).to({state:[{t:this.shape_2162}]},1).to({state:[{t:this.shape_2163}]},1).to({state:[{t:this.shape_2164}]},1).to({state:[{t:this.shape_2165}]},1).to({state:[{t:this.shape_2166}]},1).to({state:[{t:this.shape_2167}]},1).to({state:[{t:this.shape_2168}]},1).to({state:[{t:this.shape_2169}]},1).to({state:[{t:this.shape_2170}]},1).to({state:[{t:this.shape_2171}]},1).to({state:[{t:this.shape_2172}]},1).to({state:[{t:this.shape_2173}]},1).to({state:[{t:this.shape_2174}]},1).to({state:[{t:this.shape_2175}]},1).to({state:[{t:this.shape_2176}]},1).to({state:[{t:this.shape_2177}]},1).to({state:[{t:this.shape_2178}]},1).to({state:[{t:this.shape_2179}]},1).to({state:[{t:this.shape_2180}]},1).to({state:[{t:this.shape_2181}]},1).to({state:[{t:this.shape_2182}]},1).to({state:[{t:this.shape_2183}]},1).to({state:[{t:this.shape_2184}]},1).to({state:[{t:this.shape_2185}]},1).to({state:[{t:this.shape_2186}]},1).to({state:[{t:this.shape_2187}]},1).to({state:[{t:this.shape_2188}]},1).to({state:[{t:this.shape_2189}]},1).to({state:[{t:this.shape_2190}]},1).to({state:[{t:this.shape_2191}]},1).to({state:[{t:this.shape_2192}]},1).to({state:[{t:this.shape_2193}]},1).to({state:[{t:this.shape_2194}]},1).to({state:[{t:this.shape_2195}]},1).to({state:[{t:this.shape_2196}]},1).to({state:[{t:this.shape_2197}]},1).to({state:[{t:this.shape_2198}]},1).to({state:[{t:this.shape_2199}]},1).to({state:[{t:this.shape_2200}]},1).to({state:[{t:this.shape_2201}]},1).to({state:[{t:this.shape_2202}]},1).to({state:[{t:this.shape_2203}]},1).to({state:[{t:this.shape_2204}]},1).to({state:[{t:this.shape_2205}]},1).to({state:[{t:this.shape_2206}]},1).to({state:[{t:this.shape_2207}]},1).to({state:[{t:this.shape_2208}]},1).to({state:[{t:this.shape_2209}]},1).to({state:[{t:this.shape_2210}]},1).to({state:[{t:this.shape_2211}]},1).to({state:[{t:this.shape_2212}]},1).to({state:[{t:this.shape_2213}]},1).to({state:[{t:this.shape_2214}]},1).to({state:[{t:this.shape_2215}]},1).to({state:[{t:this.shape_2216}]},1).to({state:[{t:this.shape_2217}]},1).to({state:[{t:this.shape_2218}]},1).to({state:[{t:this.shape_2219}]},1).to({state:[{t:this.shape_2220}]},1).to({state:[{t:this.shape_2221}]},1).to({state:[{t:this.shape_2222}]},1).to({state:[{t:this.shape_2223}]},1).to({state:[{t:this.shape_2224}]},1).to({state:[{t:this.shape_2225}]},1).to({state:[{t:this.shape_2226}]},1).to({state:[{t:this.shape_2227}]},1).to({state:[{t:this.shape_2228}]},1).to({state:[{t:this.shape_2229}]},1).to({state:[{t:this.shape_2230}]},1).to({state:[{t:this.shape_2231}]},1).to({state:[{t:this.shape_2093}]},1).wait(1));

	// Слой 7
	this.shape_2232 = new cjs.Shape();
	this.shape_2232.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnNm8IObN5");
	this.shape_2232.setTransform(111.5,106.4);

	this.shape_2233 = new cjs.Shape();
	this.shape_2233.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnWm3IOtNw");
	this.shape_2233.setTransform(113.3,105.2);

	this.shape_2234 = new cjs.Shape();
	this.shape_2234.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnemzIO9Nn");
	this.shape_2234.setTransform(115.1,103.9);

	this.shape_2235 = new cjs.Shape();
	this.shape_2235.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnnmuIPPNd");
	this.shape_2235.setTransform(116.9,102.6);

	this.shape_2236 = new cjs.Shape();
	this.shape_2236.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnvmqIPgNV");
	this.shape_2236.setTransform(118.7,101.3);

	this.shape_2237 = new cjs.Shape();
	this.shape_2237.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An4mlIPxNL");
	this.shape_2237.setTransform(120.5,100);

	this.shape_2238 = new cjs.Shape();
	this.shape_2238.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoBmgIQDNB");
	this.shape_2238.setTransform(122.3,98.7);

	this.shape_2239 = new cjs.Shape();
	this.shape_2239.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoJmbIQTM3");
	this.shape_2239.setTransform(124.1,97.4);

	this.shape_2240 = new cjs.Shape();
	this.shape_2240.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoSmXIQlMv");
	this.shape_2240.setTransform(125.9,96.1);

	this.shape_2241 = new cjs.Shape();
	this.shape_2241.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AobmSIQ3Ml");
	this.shape_2241.setTransform(127.7,94.8);

	this.shape_2242 = new cjs.Shape();
	this.shape_2242.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AojmOIRHMc");
	this.shape_2242.setTransform(129.5,93.5);

	this.shape_2243 = new cjs.Shape();
	this.shape_2243.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AosmJIRYMT");
	this.shape_2243.setTransform(131.3,92.2);

	this.shape_2244 = new cjs.Shape();
	this.shape_2244.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao0mEIRpMJ");
	this.shape_2244.setTransform(133.1,90.9);

	this.shape_2245 = new cjs.Shape();
	this.shape_2245.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao9l/IR7L/");
	this.shape_2245.setTransform(134.9,89.6);

	this.shape_2246 = new cjs.Shape();
	this.shape_2246.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApFl7ISLL3");
	this.shape_2246.setTransform(136.7,88.3);

	this.shape_2247 = new cjs.Shape();
	this.shape_2247.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApOl2ISdLt");
	this.shape_2247.setTransform(138.5,87);

	this.shape_2248 = new cjs.Shape();
	this.shape_2248.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApWlxIStLj");
	this.shape_2248.setTransform(140.3,85.7);

	this.shape_2249 = new cjs.Shape();
	this.shape_2249.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApfltIS/Lb");
	this.shape_2249.setTransform(142.1,84.5);

	this.shape_2250 = new cjs.Shape();
	this.shape_2250.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApoloITRLR");
	this.shape_2250.setTransform(143.9,83.2);

	this.shape_2251 = new cjs.Shape();
	this.shape_2251.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApwljIThLH");
	this.shape_2251.setTransform(145.7,81.9);

	this.shape_2252 = new cjs.Shape();
	this.shape_2252.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ap5leITzK9");
	this.shape_2252.setTransform(147.5,80.6);

	this.shape_2253 = new cjs.Shape();
	this.shape_2253.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqBlaIUDK1");
	this.shape_2253.setTransform(149.3,79.3);

	this.shape_2254 = new cjs.Shape();
	this.shape_2254.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqKlVIUVKr");
	this.shape_2254.setTransform(151.1,78);

	this.shape_2255 = new cjs.Shape();
	this.shape_2255.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqSlRIUlKj");
	this.shape_2255.setTransform(152.9,76.7);

	this.shape_2256 = new cjs.Shape();
	this.shape_2256.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqblMIU3KZ");
	this.shape_2256.setTransform(154.7,75.4);

	this.shape_2257 = new cjs.Shape();
	this.shape_2257.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqjlHIVHKP");
	this.shape_2257.setTransform(156.5,74.1);

	this.shape_2258 = new cjs.Shape();
	this.shape_2258.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqslCIVZKF");
	this.shape_2258.setTransform(158.3,72.8);

	this.shape_2259 = new cjs.Shape();
	this.shape_2259.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq1k+IVrJ9");
	this.shape_2259.setTransform(160.1,71.5);

	this.shape_2260 = new cjs.Shape();
	this.shape_2260.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq9k5IV7Jz");
	this.shape_2260.setTransform(161.9,70.2);

	this.shape_2261 = new cjs.Shape();
	this.shape_2261.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArGk0IWNJp");
	this.shape_2261.setTransform(163.7,68.9);

	this.shape_2262 = new cjs.Shape();
	this.shape_2262.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArOkwIWdJg");
	this.shape_2262.setTransform(165.5,67.7);

	this.shape_2263 = new cjs.Shape();
	this.shape_2263.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArXkrIWvJX");
	this.shape_2263.setTransform(167.3,66.4);

	this.shape_2264 = new cjs.Shape();
	this.shape_2264.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArgkmIXAJN");
	this.shape_2264.setTransform(169.1,65.1);

	this.shape_2265 = new cjs.Shape();
	this.shape_2265.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArokiIXRJF");
	this.shape_2265.setTransform(170.9,63.8);

	this.shape_2266 = new cjs.Shape();
	this.shape_2266.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArxkdIXjI7");
	this.shape_2266.setTransform(172.7,62.5);

	this.shape_2267 = new cjs.Shape();
	this.shape_2267.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArnkVIXPIr");
	this.shape_2267.setTransform(171.6,64.4);

	this.shape_2268 = new cjs.Shape();
	this.shape_2268.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArdkNIW7Ib");
	this.shape_2268.setTransform(170.5,66.4);

	this.shape_2269 = new cjs.Shape();
	this.shape_2269.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArTkFIWoIL");
	this.shape_2269.setTransform(169.5,68.3);

	this.shape_2270 = new cjs.Shape();
	this.shape_2270.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArKj9IWVH7");
	this.shape_2270.setTransform(168.4,70.2);

	this.shape_2271 = new cjs.Shape();
	this.shape_2271.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ArAj1IWBHr");
	this.shape_2271.setTransform(167.3,72.2);

	this.shape_2272 = new cjs.Shape();
	this.shape_2272.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aq3jtIVvHb");
	this.shape_2272.setTransform(166.3,74.1);

	this.shape_2273 = new cjs.Shape();
	this.shape_2273.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqtjlIVbHL");
	this.shape_2273.setTransform(165.2,76.1);

	this.shape_2274 = new cjs.Shape();
	this.shape_2274.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqjjdIVHG7");
	this.shape_2274.setTransform(164.1,78);

	this.shape_2275 = new cjs.Shape();
	this.shape_2275.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqZjVIUzGr");
	this.shape_2275.setTransform(163,79.9);

	this.shape_2276 = new cjs.Shape();
	this.shape_2276.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqQjNIUhGb");
	this.shape_2276.setTransform(162,81.9);

	this.shape_2277 = new cjs.Shape();
	this.shape_2277.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqGjFIUNGL");
	this.shape_2277.setTransform(160.9,83.8);

	this.shape_2278 = new cjs.Shape();
	this.shape_2278.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ap8i9IT5F7");
	this.shape_2278.setTransform(159.8,85.8);

	this.shape_2279 = new cjs.Shape();
	this.shape_2279.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Apzi1ITnFr");
	this.shape_2279.setTransform(158.8,87.7);

	this.shape_2280 = new cjs.Shape();
	this.shape_2280.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AppitITTFb");
	this.shape_2280.setTransform(157.7,89.6);

	this.shape_2281 = new cjs.Shape();
	this.shape_2281.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApfilIS/FL");
	this.shape_2281.setTransform(156.6,91.6);

	this.shape_2282 = new cjs.Shape();
	this.shape_2282.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApWidIStE7");
	this.shape_2282.setTransform(155.6,93.5);

	this.shape_2283 = new cjs.Shape();
	this.shape_2283.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApMiVISZEr");
	this.shape_2283.setTransform(154.5,95.5);

	this.shape_2284 = new cjs.Shape();
	this.shape_2284.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApCiNISFEb");
	this.shape_2284.setTransform(153.4,97.4);

	this.shape_2285 = new cjs.Shape();
	this.shape_2285.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao5iFIRyEL");
	this.shape_2285.setTransform(152.4,99.3);

	this.shape_2286 = new cjs.Shape();
	this.shape_2286.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aovh9IRfD7");
	this.shape_2286.setTransform(151.3,101.3);

	this.shape_2287 = new cjs.Shape();
	this.shape_2287.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aolh1IRLDr");
	this.shape_2287.setTransform(150.2,103.2);

	this.shape_2288 = new cjs.Shape();
	this.shape_2288.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AobhtIQ4Db");
	this.shape_2288.setTransform(149.2,105.2);

	this.shape_2289 = new cjs.Shape();
	this.shape_2289.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoShlIQlDL");
	this.shape_2289.setTransform(148.1,107.1);

	this.shape_2290 = new cjs.Shape();
	this.shape_2290.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoIhdIQRC7");
	this.shape_2290.setTransform(147,109);

	this.shape_2291 = new cjs.Shape();
	this.shape_2291.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An+hVIP9Cr");
	this.shape_2291.setTransform(145.9,111);

	this.shape_2292 = new cjs.Shape();
	this.shape_2292.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An1hNIPrCb");
	this.shape_2292.setTransform(144.9,112.9);

	this.shape_2293 = new cjs.Shape();
	this.shape_2293.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnrhFIPXCL");
	this.shape_2293.setTransform(143.8,114.9);

	this.shape_2294 = new cjs.Shape();
	this.shape_2294.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Anhg9IPDB7");
	this.shape_2294.setTransform(142.7,116.8);

	this.shape_2295 = new cjs.Shape();
	this.shape_2295.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnYg1IOxBr");
	this.shape_2295.setTransform(141.7,118.7);

	this.shape_2296 = new cjs.Shape();
	this.shape_2296.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnOgtIOdBb");
	this.shape_2296.setTransform(140.6,120.7);

	this.shape_2297 = new cjs.Shape();
	this.shape_2297.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnEglIOJBL");
	this.shape_2297.setTransform(139.5,122.6);

	this.shape_2298 = new cjs.Shape();
	this.shape_2298.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am6gdIN2A7");
	this.shape_2298.setTransform(138.5,124.6);

	this.shape_2299 = new cjs.Shape();
	this.shape_2299.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmxgVINjAr");
	this.shape_2299.setTransform(137.4,126.5);

	this.shape_2300 = new cjs.Shape();
	this.shape_2300.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmngNINPAb");
	this.shape_2300.setTransform(136.3,128.4);

	this.shape_2301 = new cjs.Shape();
	this.shape_2301.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmegFIM8AL");
	this.shape_2301.setTransform(135.3,130.4);

	this.shape_2302 = new cjs.Shape();
	this.shape_2302.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmegLIM9AX");
	this.shape_2302.setTransform(134.9,130);

	this.shape_2303 = new cjs.Shape();
	this.shape_2303.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmfgSIM/Ak");
	this.shape_2303.setTransform(134.6,129.7);

	this.shape_2304 = new cjs.Shape();
	this.shape_2304.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmggYINBAx");
	this.shape_2304.setTransform(134.3,129.3);

	this.shape_2305 = new cjs.Shape();
	this.shape_2305.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmggeINBA9");
	this.shape_2305.setTransform(133.9,129);

	this.shape_2306 = new cjs.Shape();
	this.shape_2306.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmhglINDBL");
	this.shape_2306.setTransform(133.6,128.7);

	this.shape_2307 = new cjs.Shape();
	this.shape_2307.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmigrINFBW");
	this.shape_2307.setTransform(133.2,128.3);

	this.shape_2308 = new cjs.Shape();
	this.shape_2308.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmigxINFBj");
	this.shape_2308.setTransform(132.9,128);

	this.shape_2309 = new cjs.Shape();
	this.shape_2309.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Amjg3INHBv");
	this.shape_2309.setTransform(132.6,127.6);

	this.shape_2310 = new cjs.Shape();
	this.shape_2310.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Amjg9INIB7");
	this.shape_2310.setTransform(132.2,127.3);

	this.shape_2311 = new cjs.Shape();
	this.shape_2311.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmkhEINJCJ");
	this.shape_2311.setTransform(131.9,126.9);

	this.shape_2312 = new cjs.Shape();
	this.shape_2312.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmlhKINLCV");
	this.shape_2312.setTransform(131.5,126.6);

	this.shape_2313 = new cjs.Shape();
	this.shape_2313.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmmhRINNCj");
	this.shape_2313.setTransform(131.2,126.3);

	this.shape_2314 = new cjs.Shape();
	this.shape_2314.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmmhXINNCv");
	this.shape_2314.setTransform(130.9,125.9);

	this.shape_2315 = new cjs.Shape();
	this.shape_2315.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmnhdINPC7");
	this.shape_2315.setTransform(130.5,125.6);

	this.shape_2316 = new cjs.Shape();
	this.shape_2316.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmohjINRDH");
	this.shape_2316.setTransform(130.2,125.2);

	this.shape_2317 = new cjs.Shape();
	this.shape_2317.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmohpINRDT");
	this.shape_2317.setTransform(129.8,124.9);

	this.shape_2318 = new cjs.Shape();
	this.shape_2318.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmphwINTDh");
	this.shape_2318.setTransform(129.5,124.5);

	this.shape_2319 = new cjs.Shape();
	this.shape_2319.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Amqh2INVDt");
	this.shape_2319.setTransform(129.2,124.2);

	this.shape_2320 = new cjs.Shape();
	this.shape_2320.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Amrh8INXD5");
	this.shape_2320.setTransform(128.8,123.9);

	this.shape_2321 = new cjs.Shape();
	this.shape_2321.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmriDINXEH");
	this.shape_2321.setTransform(128.5,123.5);

	this.shape_2322 = new cjs.Shape();
	this.shape_2322.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmsiJINZET");
	this.shape_2322.setTransform(128.1,123.2);

	this.shape_2323 = new cjs.Shape();
	this.shape_2323.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmtiPINbEf");
	this.shape_2323.setTransform(127.8,122.9);

	this.shape_2324 = new cjs.Shape();
	this.shape_2324.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmtiVINbEr");
	this.shape_2324.setTransform(127.5,122.5);

	this.shape_2325 = new cjs.Shape();
	this.shape_2325.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmuicINdE5");
	this.shape_2325.setTransform(127.1,122.2);

	this.shape_2326 = new cjs.Shape();
	this.shape_2326.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmviiINfFF");
	this.shape_2326.setTransform(126.8,121.8);

	this.shape_2327 = new cjs.Shape();
	this.shape_2327.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmvioINfFR");
	this.shape_2327.setTransform(126.4,121.5);

	this.shape_2328 = new cjs.Shape();
	this.shape_2328.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmwiuINhFd");
	this.shape_2328.setTransform(126.1,121.1);

	this.shape_2329 = new cjs.Shape();
	this.shape_2329.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Amwi1INhFr");
	this.shape_2329.setTransform(125.8,120.8);

	this.shape_2330 = new cjs.Shape();
	this.shape_2330.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Amxi7INjF3");
	this.shape_2330.setTransform(125.4,120.5);

	this.shape_2331 = new cjs.Shape();
	this.shape_2331.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmyjBINlGD");
	this.shape_2331.setTransform(125.1,120.1);

	this.shape_2332 = new cjs.Shape();
	this.shape_2332.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmzjHINnGQ");
	this.shape_2332.setTransform(124.8,119.8);

	this.shape_2333 = new cjs.Shape();
	this.shape_2333.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am0jOINpGd");
	this.shape_2333.setTransform(124.4,119.4);

	this.shape_2334 = new cjs.Shape();
	this.shape_2334.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am0jUINpGp");
	this.shape_2334.setTransform(124.1,119.1);

	this.shape_2335 = new cjs.Shape();
	this.shape_2335.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am1jaINrG1");
	this.shape_2335.setTransform(123.7,118.7);

	this.shape_2336 = new cjs.Shape();
	this.shape_2336.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am2jgINsHB");
	this.shape_2336.setTransform(123.4,118.4);

	this.shape_2337 = new cjs.Shape();
	this.shape_2337.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am2jnINtHP");
	this.shape_2337.setTransform(123.1,118.1);

	this.shape_2338 = new cjs.Shape();
	this.shape_2338.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am3jtINvHb");
	this.shape_2338.setTransform(122.7,117.7);

	this.shape_2339 = new cjs.Shape();
	this.shape_2339.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am3j0INvHp");
	this.shape_2339.setTransform(122.4,117.4);

	this.shape_2340 = new cjs.Shape();
	this.shape_2340.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am4j6INxH1");
	this.shape_2340.setTransform(122,117);

	this.shape_2341 = new cjs.Shape();
	this.shape_2341.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am5kAINzIB");
	this.shape_2341.setTransform(121.7,116.7);

	this.shape_2342 = new cjs.Shape();
	this.shape_2342.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am6kGIN1IN");
	this.shape_2342.setTransform(121.4,116.3);

	this.shape_2343 = new cjs.Shape();
	this.shape_2343.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am6kNIN1Ia");
	this.shape_2343.setTransform(121,116);

	this.shape_2344 = new cjs.Shape();
	this.shape_2344.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am7kTIN3In");
	this.shape_2344.setTransform(120.7,115.7);

	this.shape_2345 = new cjs.Shape();
	this.shape_2345.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am8kZIN5Iz");
	this.shape_2345.setTransform(120.4,115.3);

	this.shape_2346 = new cjs.Shape();
	this.shape_2346.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am8kfIN5I/");
	this.shape_2346.setTransform(120,115);

	this.shape_2347 = new cjs.Shape();
	this.shape_2347.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am9kmIN7JN");
	this.shape_2347.setTransform(119.7,114.6);

	this.shape_2348 = new cjs.Shape();
	this.shape_2348.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am+ksIN9JZ");
	this.shape_2348.setTransform(119.3,114.3);

	this.shape_2349 = new cjs.Shape();
	this.shape_2349.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am+kyIN9Jl");
	this.shape_2349.setTransform(119,113.9);

	this.shape_2350 = new cjs.Shape();
	this.shape_2350.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am/k4IN/Jx");
	this.shape_2350.setTransform(118.7,113.6);

	this.shape_2351 = new cjs.Shape();
	this.shape_2351.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnAk/IOAJ/");
	this.shape_2351.setTransform(118.3,113.3);

	this.shape_2352 = new cjs.Shape();
	this.shape_2352.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnAlFIOBKL");
	this.shape_2352.setTransform(118,112.9);

	this.shape_2353 = new cjs.Shape();
	this.shape_2353.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnBlLIODKX");
	this.shape_2353.setTransform(117.6,112.6);

	this.shape_2354 = new cjs.Shape();
	this.shape_2354.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnClRIOFKj");
	this.shape_2354.setTransform(117.3,112.3);

	this.shape_2355 = new cjs.Shape();
	this.shape_2355.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnClYIOGKx");
	this.shape_2355.setTransform(117,111.9);

	this.shape_2356 = new cjs.Shape();
	this.shape_2356.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnDleIOHK9");
	this.shape_2356.setTransform(116.6,111.6);

	this.shape_2357 = new cjs.Shape();
	this.shape_2357.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnElkIOJLK");
	this.shape_2357.setTransform(116.3,111.2);

	this.shape_2358 = new cjs.Shape();
	this.shape_2358.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnElrIOJLX");
	this.shape_2358.setTransform(115.9,110.9);

	this.shape_2359 = new cjs.Shape();
	this.shape_2359.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnFlxIOLLj");
	this.shape_2359.setTransform(115.6,110.5);

	this.shape_2360 = new cjs.Shape();
	this.shape_2360.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnGl3IONLv");
	this.shape_2360.setTransform(115.3,110.2);

	this.shape_2361 = new cjs.Shape();
	this.shape_2361.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnHl+IOPL9");
	this.shape_2361.setTransform(114.9,109.9);

	this.shape_2362 = new cjs.Shape();
	this.shape_2362.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnHmEIOPMJ");
	this.shape_2362.setTransform(114.6,109.5);

	this.shape_2363 = new cjs.Shape();
	this.shape_2363.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnImKIORMV");
	this.shape_2363.setTransform(114.2,109.2);

	this.shape_2364 = new cjs.Shape();
	this.shape_2364.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnJmQIOTMh");
	this.shape_2364.setTransform(113.9,108.8);

	this.shape_2365 = new cjs.Shape();
	this.shape_2365.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnJmXIOTMv");
	this.shape_2365.setTransform(113.6,108.5);

	this.shape_2366 = new cjs.Shape();
	this.shape_2366.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnKmdIOVM7");
	this.shape_2366.setTransform(113.2,108.1);

	this.shape_2367 = new cjs.Shape();
	this.shape_2367.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnLmjIOWNH");
	this.shape_2367.setTransform(112.9,107.8);

	this.shape_2368 = new cjs.Shape();
	this.shape_2368.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnLmpIOXNU");
	this.shape_2368.setTransform(112.5,107.5);

	this.shape_2369 = new cjs.Shape();
	this.shape_2369.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnMmwIOZNh");
	this.shape_2369.setTransform(112.2,107.1);

	this.shape_2370 = new cjs.Shape();
	this.shape_2370.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnMm2IOaNt");
	this.shape_2370.setTransform(111.9,106.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2232}]}).to({state:[{t:this.shape_2233}]},1).to({state:[{t:this.shape_2234}]},1).to({state:[{t:this.shape_2235}]},1).to({state:[{t:this.shape_2236}]},1).to({state:[{t:this.shape_2237}]},1).to({state:[{t:this.shape_2238}]},1).to({state:[{t:this.shape_2239}]},1).to({state:[{t:this.shape_2240}]},1).to({state:[{t:this.shape_2241}]},1).to({state:[{t:this.shape_2242}]},1).to({state:[{t:this.shape_2243}]},1).to({state:[{t:this.shape_2244}]},1).to({state:[{t:this.shape_2245}]},1).to({state:[{t:this.shape_2246}]},1).to({state:[{t:this.shape_2247}]},1).to({state:[{t:this.shape_2248}]},1).to({state:[{t:this.shape_2249}]},1).to({state:[{t:this.shape_2250}]},1).to({state:[{t:this.shape_2251}]},1).to({state:[{t:this.shape_2252}]},1).to({state:[{t:this.shape_2253}]},1).to({state:[{t:this.shape_2254}]},1).to({state:[{t:this.shape_2255}]},1).to({state:[{t:this.shape_2256}]},1).to({state:[{t:this.shape_2257}]},1).to({state:[{t:this.shape_2258}]},1).to({state:[{t:this.shape_2259}]},1).to({state:[{t:this.shape_2260}]},1).to({state:[{t:this.shape_2261}]},1).to({state:[{t:this.shape_2262}]},1).to({state:[{t:this.shape_2263}]},1).to({state:[{t:this.shape_2264}]},1).to({state:[{t:this.shape_2265}]},1).to({state:[{t:this.shape_2266}]},1).to({state:[{t:this.shape_2267}]},1).to({state:[{t:this.shape_2268}]},1).to({state:[{t:this.shape_2269}]},1).to({state:[{t:this.shape_2270}]},1).to({state:[{t:this.shape_2271}]},1).to({state:[{t:this.shape_2272}]},1).to({state:[{t:this.shape_2273}]},1).to({state:[{t:this.shape_2274}]},1).to({state:[{t:this.shape_2275}]},1).to({state:[{t:this.shape_2276}]},1).to({state:[{t:this.shape_2277}]},1).to({state:[{t:this.shape_2278}]},1).to({state:[{t:this.shape_2279}]},1).to({state:[{t:this.shape_2280}]},1).to({state:[{t:this.shape_2281}]},1).to({state:[{t:this.shape_2282}]},1).to({state:[{t:this.shape_2283}]},1).to({state:[{t:this.shape_2284}]},1).to({state:[{t:this.shape_2285}]},1).to({state:[{t:this.shape_2286}]},1).to({state:[{t:this.shape_2287}]},1).to({state:[{t:this.shape_2288}]},1).to({state:[{t:this.shape_2289}]},1).to({state:[{t:this.shape_2290}]},1).to({state:[{t:this.shape_2291}]},1).to({state:[{t:this.shape_2292}]},1).to({state:[{t:this.shape_2293}]},1).to({state:[{t:this.shape_2294}]},1).to({state:[{t:this.shape_2295}]},1).to({state:[{t:this.shape_2296}]},1).to({state:[{t:this.shape_2297}]},1).to({state:[{t:this.shape_2298}]},1).to({state:[{t:this.shape_2299}]},1).to({state:[{t:this.shape_2300}]},1).to({state:[{t:this.shape_2301}]},1).to({state:[{t:this.shape_2302}]},1).to({state:[{t:this.shape_2303}]},1).to({state:[{t:this.shape_2304}]},1).to({state:[{t:this.shape_2305}]},1).to({state:[{t:this.shape_2306}]},1).to({state:[{t:this.shape_2307}]},1).to({state:[{t:this.shape_2308}]},1).to({state:[{t:this.shape_2309}]},1).to({state:[{t:this.shape_2310}]},1).to({state:[{t:this.shape_2311}]},1).to({state:[{t:this.shape_2312}]},1).to({state:[{t:this.shape_2313}]},1).to({state:[{t:this.shape_2314}]},1).to({state:[{t:this.shape_2315}]},1).to({state:[{t:this.shape_2316}]},1).to({state:[{t:this.shape_2317}]},1).to({state:[{t:this.shape_2318}]},1).to({state:[{t:this.shape_2319}]},1).to({state:[{t:this.shape_2320}]},1).to({state:[{t:this.shape_2321}]},1).to({state:[{t:this.shape_2322}]},1).to({state:[{t:this.shape_2323}]},1).to({state:[{t:this.shape_2324}]},1).to({state:[{t:this.shape_2325}]},1).to({state:[{t:this.shape_2326}]},1).to({state:[{t:this.shape_2327}]},1).to({state:[{t:this.shape_2328}]},1).to({state:[{t:this.shape_2329}]},1).to({state:[{t:this.shape_2330}]},1).to({state:[{t:this.shape_2331}]},1).to({state:[{t:this.shape_2332}]},1).to({state:[{t:this.shape_2333}]},1).to({state:[{t:this.shape_2334}]},1).to({state:[{t:this.shape_2335}]},1).to({state:[{t:this.shape_2336}]},1).to({state:[{t:this.shape_2337}]},1).to({state:[{t:this.shape_2338}]},1).to({state:[{t:this.shape_2339}]},1).to({state:[{t:this.shape_2340}]},1).to({state:[{t:this.shape_2341}]},1).to({state:[{t:this.shape_2342}]},1).to({state:[{t:this.shape_2343}]},1).to({state:[{t:this.shape_2344}]},1).to({state:[{t:this.shape_2345}]},1).to({state:[{t:this.shape_2346}]},1).to({state:[{t:this.shape_2347}]},1).to({state:[{t:this.shape_2348}]},1).to({state:[{t:this.shape_2349}]},1).to({state:[{t:this.shape_2350}]},1).to({state:[{t:this.shape_2351}]},1).to({state:[{t:this.shape_2352}]},1).to({state:[{t:this.shape_2353}]},1).to({state:[{t:this.shape_2354}]},1).to({state:[{t:this.shape_2355}]},1).to({state:[{t:this.shape_2356}]},1).to({state:[{t:this.shape_2357}]},1).to({state:[{t:this.shape_2358}]},1).to({state:[{t:this.shape_2359}]},1).to({state:[{t:this.shape_2360}]},1).to({state:[{t:this.shape_2361}]},1).to({state:[{t:this.shape_2362}]},1).to({state:[{t:this.shape_2363}]},1).to({state:[{t:this.shape_2364}]},1).to({state:[{t:this.shape_2365}]},1).to({state:[{t:this.shape_2366}]},1).to({state:[{t:this.shape_2367}]},1).to({state:[{t:this.shape_2368}]},1).to({state:[{t:this.shape_2369}]},1).to({state:[{t:this.shape_2370}]},1).to({state:[{t:this.shape_2232}]},1).wait(1));

	// Слой 3
	this.shape_2371 = new cjs.Shape();
	this.shape_2371.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmGEvIMNpd");
	this.shape_2371.setTransform(26.2,92.2);

	this.shape_2372 = new cjs.Shape();
	this.shape_2372.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmPEuIMfpb");
	this.shape_2372.setTransform(26.3,91.3);

	this.shape_2373 = new cjs.Shape();
	this.shape_2373.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmYEtIMxpZ");
	this.shape_2373.setTransform(26.3,90.4);

	this.shape_2374 = new cjs.Shape();
	this.shape_2374.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmgEtINBpZ");
	this.shape_2374.setTransform(26.4,89.5);

	this.shape_2375 = new cjs.Shape();
	this.shape_2375.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmpEsINTpX");
	this.shape_2375.setTransform(26.5,88.6);

	this.shape_2376 = new cjs.Shape();
	this.shape_2376.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmyErINlpV");
	this.shape_2376.setTransform(26.5,87.7);

	this.shape_2377 = new cjs.Shape();
	this.shape_2377.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am7ErIN3pV");
	this.shape_2377.setTransform(26.6,86.8);

	this.shape_2378 = new cjs.Shape();
	this.shape_2378.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnEEqIOJpT");
	this.shape_2378.setTransform(26.7,86);

	this.shape_2379 = new cjs.Shape();
	this.shape_2379.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnMEqIOZpT");
	this.shape_2379.setTransform(26.7,85.1);

	this.shape_2380 = new cjs.Shape();
	this.shape_2380.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnVEpIOrpR");
	this.shape_2380.setTransform(26.8,84.2);

	this.shape_2381 = new cjs.Shape();
	this.shape_2381.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AneEpIO9pR");
	this.shape_2381.setTransform(26.8,83.3);

	this.shape_2382 = new cjs.Shape();
	this.shape_2382.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnnEoIPPpP");
	this.shape_2382.setTransform(26.9,82.4);

	this.shape_2383 = new cjs.Shape();
	this.shape_2383.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnvEnIPgpN");
	this.shape_2383.setTransform(27,81.5);

	this.shape_2384 = new cjs.Shape();
	this.shape_2384.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An4EmIPxpM");
	this.shape_2384.setTransform(27,80.7);

	this.shape_2385 = new cjs.Shape();
	this.shape_2385.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoBEmIQDpL");
	this.shape_2385.setTransform(27.1,79.8);

	this.shape_2386 = new cjs.Shape();
	this.shape_2386.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoKElIQVpJ");
	this.shape_2386.setTransform(27.2,78.9);

	this.shape_2387 = new cjs.Shape();
	this.shape_2387.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoSElIQmpJ");
	this.shape_2387.setTransform(27.2,78);

	this.shape_2388 = new cjs.Shape();
	this.shape_2388.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AobEkIQ3pH");
	this.shape_2388.setTransform(27.3,77.1);

	this.shape_2389 = new cjs.Shape();
	this.shape_2389.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AokEjIRJpF");
	this.shape_2389.setTransform(27.4,76.2);

	this.shape_2390 = new cjs.Shape();
	this.shape_2390.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AotEjIRbpF");
	this.shape_2390.setTransform(27.4,75.3);

	this.shape_2391 = new cjs.Shape();
	this.shape_2391.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao1EiIRspD");
	this.shape_2391.setTransform(27.5,74.5);

	this.shape_2392 = new cjs.Shape();
	this.shape_2392.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao+EiIR9pC");
	this.shape_2392.setTransform(27.5,73.6);

	this.shape_2393 = new cjs.Shape();
	this.shape_2393.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApHEhISPpB");
	this.shape_2393.setTransform(27.6,72.7);

	this.shape_2394 = new cjs.Shape();
	this.shape_2394.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApQEgISho/");
	this.shape_2394.setTransform(27.7,71.8);

	this.shape_2395 = new cjs.Shape();
	this.shape_2395.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApZEgISzo/");
	this.shape_2395.setTransform(27.7,70.9);

	this.shape_2396 = new cjs.Shape();
	this.shape_2396.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApiEfITFo9");
	this.shape_2396.setTransform(27.8,70);

	this.shape_2397 = new cjs.Shape();
	this.shape_2397.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApqEeITVo8");
	this.shape_2397.setTransform(27.8,69.2);

	this.shape_2398 = new cjs.Shape();
	this.shape_2398.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApzEeITno7");
	this.shape_2398.setTransform(27.9,68.3);

	this.shape_2399 = new cjs.Shape();
	this.shape_2399.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ap8EdIT5o5");
	this.shape_2399.setTransform(28,67.4);

	this.shape_2400 = new cjs.Shape();
	this.shape_2400.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqFEdIULo5");
	this.shape_2400.setTransform(28,66.5);

	this.shape_2401 = new cjs.Shape();
	this.shape_2401.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqOEcIUdo3");
	this.shape_2401.setTransform(28.1,65.6);

	this.shape_2402 = new cjs.Shape();
	this.shape_2402.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqWEbIUto2");
	this.shape_2402.setTransform(28.2,64.7);

	this.shape_2403 = new cjs.Shape();
	this.shape_2403.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqfEbIU/o1");
	this.shape_2403.setTransform(28.2,63.8);

	this.shape_2404 = new cjs.Shape();
	this.shape_2404.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqoEaIVRoz");
	this.shape_2404.setTransform(28.3,62.9);

	this.shape_2405 = new cjs.Shape();
	this.shape_2405.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqxEaIVjoz");
	this.shape_2405.setTransform(28.4,62.1);

	this.shape_2406 = new cjs.Shape();
	this.shape_2406.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqwEMIVhoX");
	this.shape_2406.setTransform(28.3,63.4);

	this.shape_2407 = new cjs.Shape();
	this.shape_2407.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqwD+IVhn7");
	this.shape_2407.setTransform(28.3,64.8);

	this.shape_2408 = new cjs.Shape();
	this.shape_2408.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqvDwIVfng");
	this.shape_2408.setTransform(28.2,66.2);

	this.shape_2409 = new cjs.Shape();
	this.shape_2409.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqvDjIVfnF");
	this.shape_2409.setTransform(28.2,67.5);

	this.shape_2410 = new cjs.Shape();
	this.shape_2410.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AquDVIVdmp");
	this.shape_2410.setTransform(28.1,68.9);

	this.shape_2411 = new cjs.Shape();
	this.shape_2411.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AquDHIVdmN");
	this.shape_2411.setTransform(28.1,70.3);

	this.shape_2412 = new cjs.Shape();
	this.shape_2412.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqtC6IVblz");
	this.shape_2412.setTransform(28,71.6);

	this.shape_2413 = new cjs.Shape();
	this.shape_2413.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqtCsIVblX");
	this.shape_2413.setTransform(28,73);

	this.shape_2414 = new cjs.Shape();
	this.shape_2414.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqsCeIVZk7");
	this.shape_2414.setTransform(27.9,74.4);

	this.shape_2415 = new cjs.Shape();
	this.shape_2415.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqsCRIVZkh");
	this.shape_2415.setTransform(27.9,75.8);

	this.shape_2416 = new cjs.Shape();
	this.shape_2416.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqrCDIVXkF");
	this.shape_2416.setTransform(27.8,77.1);

	this.shape_2417 = new cjs.Shape();
	this.shape_2417.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqrB1IVXjp");
	this.shape_2417.setTransform(27.8,78.5);

	this.shape_2418 = new cjs.Shape();
	this.shape_2418.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqqBoIVVjO");
	this.shape_2418.setTransform(27.7,79.9);

	this.shape_2419 = new cjs.Shape();
	this.shape_2419.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqqBaIVViz");
	this.shape_2419.setTransform(27.7,81.2);

	this.shape_2420 = new cjs.Shape();
	this.shape_2420.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqpBMIVTiX");
	this.shape_2420.setTransform(27.6,82.6);

	this.shape_2421 = new cjs.Shape();
	this.shape_2421.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqpA/IVTh9");
	this.shape_2421.setTransform(27.6,84);

	this.shape_2422 = new cjs.Shape();
	this.shape_2422.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqoAxIVRhh");
	this.shape_2422.setTransform(27.5,85.3);

	this.shape_2423 = new cjs.Shape();
	this.shape_2423.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqoAjIVRhF");
	this.shape_2423.setTransform(27.5,86.7);

	this.shape_2424 = new cjs.Shape();
	this.shape_2424.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqnAVIVPgp");
	this.shape_2424.setTransform(27.4,88.1);

	this.shape_2425 = new cjs.Shape();
	this.shape_2425.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqnAIIVPgP");
	this.shape_2425.setTransform(27.4,89.4);

	this.shape_2426 = new cjs.Shape();
	this.shape_2426.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqmgFIVNAL");
	this.shape_2426.setTransform(27.3,90.8);

	this.shape_2427 = new cjs.Shape();
	this.shape_2427.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqmgTIVNAn");
	this.shape_2427.setTransform(27.3,92.2);

	this.shape_2428 = new cjs.Shape();
	this.shape_2428.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqlghIVLBC");
	this.shape_2428.setTransform(27.2,93.6);

	this.shape_2429 = new cjs.Shape();
	this.shape_2429.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqlguIVLBd");
	this.shape_2429.setTransform(27.2,94.9);

	this.shape_2430 = new cjs.Shape();
	this.shape_2430.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aqkg8IVJB5");
	this.shape_2430.setTransform(27.1,96.3);

	this.shape_2431 = new cjs.Shape();
	this.shape_2431.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqkhKIVJCU");
	this.shape_2431.setTransform(27.1,97.7);

	this.shape_2432 = new cjs.Shape();
	this.shape_2432.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqjhXIVHCv");
	this.shape_2432.setTransform(27,99);

	this.shape_2433 = new cjs.Shape();
	this.shape_2433.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqjhlIVHDL");
	this.shape_2433.setTransform(27,100.4);

	this.shape_2434 = new cjs.Shape();
	this.shape_2434.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqihyIVFDl");
	this.shape_2434.setTransform(26.9,101.8);

	this.shape_2435 = new cjs.Shape();
	this.shape_2435.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqiiAIVFEB");
	this.shape_2435.setTransform(26.9,103.1);

	this.shape_2436 = new cjs.Shape();
	this.shape_2436.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqhiOIVDEd");
	this.shape_2436.setTransform(26.8,104.5);

	this.shape_2437 = new cjs.Shape();
	this.shape_2437.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqhicIVDE5");
	this.shape_2437.setTransform(26.8,105.9);

	this.shape_2438 = new cjs.Shape();
	this.shape_2438.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqgipIVBFT");
	this.shape_2438.setTransform(26.7,107.2);

	this.shape_2439 = new cjs.Shape();
	this.shape_2439.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aqgi3IVBFv");
	this.shape_2439.setTransform(26.7,108.6);

	this.shape_2440 = new cjs.Shape();
	this.shape_2440.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqfjFIU/GL");
	this.shape_2440.setTransform(26.6,110);

	this.shape_2441 = new cjs.Shape();
	this.shape_2441.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Aqbi+IU3F9");
	this.shape_2441.setTransform(26.6,109.7);

	this.shape_2442 = new cjs.Shape();
	this.shape_2442.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqXi3IUvFu");
	this.shape_2442.setTransform(26.6,109.5);

	this.shape_2443 = new cjs.Shape();
	this.shape_2443.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqTivIUnFf");
	this.shape_2443.setTransform(26.6,109.2);

	this.shape_2444 = new cjs.Shape();
	this.shape_2444.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqPioIUfFR");
	this.shape_2444.setTransform(26.6,109);

	this.shape_2445 = new cjs.Shape();
	this.shape_2445.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqLihIUXFD");
	this.shape_2445.setTransform(26.6,108.7);

	this.shape_2446 = new cjs.Shape();
	this.shape_2446.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqHiaIUPE1");
	this.shape_2446.setTransform(26.6,108.5);

	this.shape_2447 = new cjs.Shape();
	this.shape_2447.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AqDiTIUHEn");
	this.shape_2447.setTransform(26.6,108.2);

	this.shape_2448 = new cjs.Shape();
	this.shape_2448.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ap/iLIT/EX");
	this.shape_2448.setTransform(26.6,108);

	this.shape_2449 = new cjs.Shape();
	this.shape_2449.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ap7iEIT3EK");
	this.shape_2449.setTransform(26.6,107.7);

	this.shape_2450 = new cjs.Shape();
	this.shape_2450.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ap3h9ITvD7");
	this.shape_2450.setTransform(26.6,107.4);

	this.shape_2451 = new cjs.Shape();
	this.shape_2451.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Apzh2ITnDt");
	this.shape_2451.setTransform(26.5,107.2);

	this.shape_2452 = new cjs.Shape();
	this.shape_2452.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApvhvITfDf");
	this.shape_2452.setTransform(26.5,106.9);

	this.shape_2453 = new cjs.Shape();
	this.shape_2453.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AprhoITXDR");
	this.shape_2453.setTransform(26.5,106.7);

	this.shape_2454 = new cjs.Shape();
	this.shape_2454.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApnhhITPDD");
	this.shape_2454.setTransform(26.5,106.4);

	this.shape_2455 = new cjs.Shape();
	this.shape_2455.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApjhaITHC0");
	this.shape_2455.setTransform(26.5,106.2);

	this.shape_2456 = new cjs.Shape();
	this.shape_2456.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApfhTIS/Cm");
	this.shape_2456.setTransform(26.5,105.9);

	this.shape_2457 = new cjs.Shape();
	this.shape_2457.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApbhLIS3CX");
	this.shape_2457.setTransform(26.5,105.6);

	this.shape_2458 = new cjs.Shape();
	this.shape_2458.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApXhEISvCJ");
	this.shape_2458.setTransform(26.5,105.4);

	this.shape_2459 = new cjs.Shape();
	this.shape_2459.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApTg9ISnB7");
	this.shape_2459.setTransform(26.5,105.2);

	this.shape_2460 = new cjs.Shape();
	this.shape_2460.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApPg2ISfBt");
	this.shape_2460.setTransform(26.5,104.9);

	this.shape_2461 = new cjs.Shape();
	this.shape_2461.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApLgvISXBf");
	this.shape_2461.setTransform(26.5,104.6);

	this.shape_2462 = new cjs.Shape();
	this.shape_2462.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApHgoISPBR");
	this.shape_2462.setTransform(26.5,104.4);

	this.shape_2463 = new cjs.Shape();
	this.shape_2463.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("ApDggISHBB");
	this.shape_2463.setTransform(26.5,104.1);

	this.shape_2464 = new cjs.Shape();
	this.shape_2464.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao/gZIR/Az");
	this.shape_2464.setTransform(26.5,103.9);

	this.shape_2465 = new cjs.Shape();
	this.shape_2465.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao6gSIR2Al");
	this.shape_2465.setTransform(26.5,103.6);

	this.shape_2466 = new cjs.Shape();
	this.shape_2466.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ao3gLIRvAX");
	this.shape_2466.setTransform(26.5,103.4);

	this.shape_2467 = new cjs.Shape();
	this.shape_2467.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AozgEIRnAJ");
	this.shape_2467.setTransform(26.5,103.1);

	this.shape_2468 = new cjs.Shape();
	this.shape_2468.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AovADIRfgF");
	this.shape_2468.setTransform(26.5,102.9);

	this.shape_2469 = new cjs.Shape();
	this.shape_2469.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AorAKIRXgS");
	this.shape_2469.setTransform(26.5,102.6);

	this.shape_2470 = new cjs.Shape();
	this.shape_2470.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AonARIRPgh");
	this.shape_2470.setTransform(26.4,102.3);

	this.shape_2471 = new cjs.Shape();
	this.shape_2471.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AojAYIRHgv");
	this.shape_2471.setTransform(26.4,102.1);

	this.shape_2472 = new cjs.Shape();
	this.shape_2472.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AofAfIQ/g9");
	this.shape_2472.setTransform(26.4,101.8);

	this.shape_2473 = new cjs.Shape();
	this.shape_2473.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AobAmIQ3hL");
	this.shape_2473.setTransform(26.4,101.6);

	this.shape_2474 = new cjs.Shape();
	this.shape_2474.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoXAtIQvhZ");
	this.shape_2474.setTransform(26.4,101.3);

	this.shape_2475 = new cjs.Shape();
	this.shape_2475.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoTA0IQnhn");
	this.shape_2475.setTransform(26.4,101.1);

	this.shape_2476 = new cjs.Shape();
	this.shape_2476.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoPA8IQfh3");
	this.shape_2476.setTransform(26.4,100.8);

	this.shape_2477 = new cjs.Shape();
	this.shape_2477.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoLBCIQXiE");
	this.shape_2477.setTransform(26.4,100.6);

	this.shape_2478 = new cjs.Shape();
	this.shape_2478.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoHBKIQPiT");
	this.shape_2478.setTransform(26.4,100.3);

	this.shape_2479 = new cjs.Shape();
	this.shape_2479.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AoCBRIQFih");
	this.shape_2479.setTransform(26.4,100.1);

	this.shape_2480 = new cjs.Shape();
	this.shape_2480.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An+BYIP9iv");
	this.shape_2480.setTransform(26.4,99.8);

	this.shape_2481 = new cjs.Shape();
	this.shape_2481.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An7BfIP3i9");
	this.shape_2481.setTransform(26.4,99.5);

	this.shape_2482 = new cjs.Shape();
	this.shape_2482.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("An3BmIPvjL");
	this.shape_2482.setTransform(26.4,99.3);

	this.shape_2483 = new cjs.Shape();
	this.shape_2483.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnzBuIPnjb");
	this.shape_2483.setTransform(26.4,99);

	this.shape_2484 = new cjs.Shape();
	this.shape_2484.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnvB1IPfjp");
	this.shape_2484.setTransform(26.4,98.8);

	this.shape_2485 = new cjs.Shape();
	this.shape_2485.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnrB8IPXj3");
	this.shape_2485.setTransform(26.4,98.5);

	this.shape_2486 = new cjs.Shape();
	this.shape_2486.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnmCDIPNkF");
	this.shape_2486.setTransform(26.3,98.3);

	this.shape_2487 = new cjs.Shape();
	this.shape_2487.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AniCKIPFkT");
	this.shape_2487.setTransform(26.3,98);

	this.shape_2488 = new cjs.Shape();
	this.shape_2488.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AneCRIO9kh");
	this.shape_2488.setTransform(26.3,97.8);

	this.shape_2489 = new cjs.Shape();
	this.shape_2489.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnaCZIO1kx");
	this.shape_2489.setTransform(26.3,97.5);

	this.shape_2490 = new cjs.Shape();
	this.shape_2490.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnWCgIOtk/");
	this.shape_2490.setTransform(26.3,97.3);

	this.shape_2491 = new cjs.Shape();
	this.shape_2491.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnSCnIOllN");
	this.shape_2491.setTransform(26.3,97);

	this.shape_2492 = new cjs.Shape();
	this.shape_2492.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnOCuIOdlb");
	this.shape_2492.setTransform(26.3,96.7);

	this.shape_2493 = new cjs.Shape();
	this.shape_2493.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnKC1IOVlp");
	this.shape_2493.setTransform(26.3,96.5);

	this.shape_2494 = new cjs.Shape();
	this.shape_2494.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnGC8IONl3");
	this.shape_2494.setTransform(26.3,96.2);

	this.shape_2495 = new cjs.Shape();
	this.shape_2495.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AnCDDIOFmF");
	this.shape_2495.setTransform(26.3,96);

	this.shape_2496 = new cjs.Shape();
	this.shape_2496.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am+DLIN9mV");
	this.shape_2496.setTransform(26.3,95.7);

	this.shape_2497 = new cjs.Shape();
	this.shape_2497.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am6DSIN1mj");
	this.shape_2497.setTransform(26.3,95.5);

	this.shape_2498 = new cjs.Shape();
	this.shape_2498.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Am2DZINtmx");
	this.shape_2498.setTransform(26.3,95.2);

	this.shape_2499 = new cjs.Shape();
	this.shape_2499.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmyDgINlm/");
	this.shape_2499.setTransform(26.3,95);

	this.shape_2500 = new cjs.Shape();
	this.shape_2500.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmuDnINdnN");
	this.shape_2500.setTransform(26.3,94.7);

	this.shape_2501 = new cjs.Shape();
	this.shape_2501.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmqDuINVnb");
	this.shape_2501.setTransform(26.3,94.4);

	this.shape_2502 = new cjs.Shape();
	this.shape_2502.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmmD1INNnp");
	this.shape_2502.setTransform(26.3,94.2);

	this.shape_2503 = new cjs.Shape();
	this.shape_2503.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmiD9INFn5");
	this.shape_2503.setTransform(26.3,94);

	this.shape_2504 = new cjs.Shape();
	this.shape_2504.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmeEEIM9oH");
	this.shape_2504.setTransform(26.3,93.7);

	this.shape_2505 = new cjs.Shape();
	this.shape_2505.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmaELIM1oV");
	this.shape_2505.setTransform(26.2,93.4);

	this.shape_2506 = new cjs.Shape();
	this.shape_2506.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmWESIMtoj");
	this.shape_2506.setTransform(26.2,93.2);

	this.shape_2507 = new cjs.Shape();
	this.shape_2507.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmSEZIMlox");
	this.shape_2507.setTransform(26.2,92.9);

	this.shape_2508 = new cjs.Shape();
	this.shape_2508.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmOEgIMdo/");
	this.shape_2508.setTransform(26.2,92.7);

	this.shape_2509 = new cjs.Shape();
	this.shape_2509.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmKEoIMVpP");
	this.shape_2509.setTransform(26.2,92.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2371}]}).to({state:[{t:this.shape_2372}]},1).to({state:[{t:this.shape_2373}]},1).to({state:[{t:this.shape_2374}]},1).to({state:[{t:this.shape_2375}]},1).to({state:[{t:this.shape_2376}]},1).to({state:[{t:this.shape_2377}]},1).to({state:[{t:this.shape_2378}]},1).to({state:[{t:this.shape_2379}]},1).to({state:[{t:this.shape_2380}]},1).to({state:[{t:this.shape_2381}]},1).to({state:[{t:this.shape_2382}]},1).to({state:[{t:this.shape_2383}]},1).to({state:[{t:this.shape_2384}]},1).to({state:[{t:this.shape_2385}]},1).to({state:[{t:this.shape_2386}]},1).to({state:[{t:this.shape_2387}]},1).to({state:[{t:this.shape_2388}]},1).to({state:[{t:this.shape_2389}]},1).to({state:[{t:this.shape_2390}]},1).to({state:[{t:this.shape_2391}]},1).to({state:[{t:this.shape_2392}]},1).to({state:[{t:this.shape_2393}]},1).to({state:[{t:this.shape_2394}]},1).to({state:[{t:this.shape_2395}]},1).to({state:[{t:this.shape_2396}]},1).to({state:[{t:this.shape_2397}]},1).to({state:[{t:this.shape_2398}]},1).to({state:[{t:this.shape_2399}]},1).to({state:[{t:this.shape_2400}]},1).to({state:[{t:this.shape_2401}]},1).to({state:[{t:this.shape_2402}]},1).to({state:[{t:this.shape_2403}]},1).to({state:[{t:this.shape_2404}]},1).to({state:[{t:this.shape_2405}]},1).to({state:[{t:this.shape_2406}]},1).to({state:[{t:this.shape_2407}]},1).to({state:[{t:this.shape_2408}]},1).to({state:[{t:this.shape_2409}]},1).to({state:[{t:this.shape_2410}]},1).to({state:[{t:this.shape_2411}]},1).to({state:[{t:this.shape_2412}]},1).to({state:[{t:this.shape_2413}]},1).to({state:[{t:this.shape_2414}]},1).to({state:[{t:this.shape_2415}]},1).to({state:[{t:this.shape_2416}]},1).to({state:[{t:this.shape_2417}]},1).to({state:[{t:this.shape_2418}]},1).to({state:[{t:this.shape_2419}]},1).to({state:[{t:this.shape_2420}]},1).to({state:[{t:this.shape_2421}]},1).to({state:[{t:this.shape_2422}]},1).to({state:[{t:this.shape_2423}]},1).to({state:[{t:this.shape_2424}]},1).to({state:[{t:this.shape_2425}]},1).to({state:[{t:this.shape_2426}]},1).to({state:[{t:this.shape_2427}]},1).to({state:[{t:this.shape_2428}]},1).to({state:[{t:this.shape_2429}]},1).to({state:[{t:this.shape_2430}]},1).to({state:[{t:this.shape_2431}]},1).to({state:[{t:this.shape_2432}]},1).to({state:[{t:this.shape_2433}]},1).to({state:[{t:this.shape_2434}]},1).to({state:[{t:this.shape_2435}]},1).to({state:[{t:this.shape_2436}]},1).to({state:[{t:this.shape_2437}]},1).to({state:[{t:this.shape_2438}]},1).to({state:[{t:this.shape_2439}]},1).to({state:[{t:this.shape_2440}]},1).to({state:[{t:this.shape_2441}]},1).to({state:[{t:this.shape_2442}]},1).to({state:[{t:this.shape_2443}]},1).to({state:[{t:this.shape_2444}]},1).to({state:[{t:this.shape_2445}]},1).to({state:[{t:this.shape_2446}]},1).to({state:[{t:this.shape_2447}]},1).to({state:[{t:this.shape_2448}]},1).to({state:[{t:this.shape_2449}]},1).to({state:[{t:this.shape_2450}]},1).to({state:[{t:this.shape_2451}]},1).to({state:[{t:this.shape_2452}]},1).to({state:[{t:this.shape_2453}]},1).to({state:[{t:this.shape_2454}]},1).to({state:[{t:this.shape_2455}]},1).to({state:[{t:this.shape_2456}]},1).to({state:[{t:this.shape_2457}]},1).to({state:[{t:this.shape_2458}]},1).to({state:[{t:this.shape_2459}]},1).to({state:[{t:this.shape_2460}]},1).to({state:[{t:this.shape_2461}]},1).to({state:[{t:this.shape_2462}]},1).to({state:[{t:this.shape_2463}]},1).to({state:[{t:this.shape_2464}]},1).to({state:[{t:this.shape_2465}]},1).to({state:[{t:this.shape_2466}]},1).to({state:[{t:this.shape_2467}]},1).to({state:[{t:this.shape_2468}]},1).to({state:[{t:this.shape_2469}]},1).to({state:[{t:this.shape_2470}]},1).to({state:[{t:this.shape_2471}]},1).to({state:[{t:this.shape_2472}]},1).to({state:[{t:this.shape_2473}]},1).to({state:[{t:this.shape_2474}]},1).to({state:[{t:this.shape_2475}]},1).to({state:[{t:this.shape_2476}]},1).to({state:[{t:this.shape_2477}]},1).to({state:[{t:this.shape_2478}]},1).to({state:[{t:this.shape_2479}]},1).to({state:[{t:this.shape_2480}]},1).to({state:[{t:this.shape_2481}]},1).to({state:[{t:this.shape_2482}]},1).to({state:[{t:this.shape_2483}]},1).to({state:[{t:this.shape_2484}]},1).to({state:[{t:this.shape_2485}]},1).to({state:[{t:this.shape_2486}]},1).to({state:[{t:this.shape_2487}]},1).to({state:[{t:this.shape_2488}]},1).to({state:[{t:this.shape_2489}]},1).to({state:[{t:this.shape_2490}]},1).to({state:[{t:this.shape_2491}]},1).to({state:[{t:this.shape_2492}]},1).to({state:[{t:this.shape_2493}]},1).to({state:[{t:this.shape_2494}]},1).to({state:[{t:this.shape_2495}]},1).to({state:[{t:this.shape_2496}]},1).to({state:[{t:this.shape_2497}]},1).to({state:[{t:this.shape_2498}]},1).to({state:[{t:this.shape_2499}]},1).to({state:[{t:this.shape_2500}]},1).to({state:[{t:this.shape_2501}]},1).to({state:[{t:this.shape_2502}]},1).to({state:[{t:this.shape_2503}]},1).to({state:[{t:this.shape_2504}]},1).to({state:[{t:this.shape_2505}]},1).to({state:[{t:this.shape_2506}]},1).to({state:[{t:this.shape_2507}]},1).to({state:[{t:this.shape_2508}]},1).to({state:[{t:this.shape_2509}]},1).to({state:[{t:this.shape_2371}]},1).wait(1));

	// Слой 2
	this.shape_2510 = new cjs.Shape();
	this.shape_2510.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmXkgIMvJB");
	this.shape_2510.setTransform(24.5,33);

	this.shape_2511 = new cjs.Shape();
	this.shape_2511.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmVkgIMrJB");
	this.shape_2511.setTransform(25.7,32.2);

	this.shape_2512 = new cjs.Shape();
	this.shape_2512.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmSkgIMlJB");
	this.shape_2512.setTransform(26.9,31.4);

	this.shape_2513 = new cjs.Shape();
	this.shape_2513.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmPkgIMfJB");
	this.shape_2513.setTransform(28.1,30.6);

	this.shape_2514 = new cjs.Shape();
	this.shape_2514.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmNkgIMbJB");
	this.shape_2514.setTransform(29.3,29.8);

	this.shape_2515 = new cjs.Shape();
	this.shape_2515.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmKkgIMVJB");
	this.shape_2515.setTransform(30.5,29);

	this.shape_2516 = new cjs.Shape();
	this.shape_2516.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmIkfIMRI/");
	this.shape_2516.setTransform(31.7,28.1);

	this.shape_2517 = new cjs.Shape();
	this.shape_2517.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmFkfIMLI/");
	this.shape_2517.setTransform(32.9,27.3);

	this.shape_2518 = new cjs.Shape();
	this.shape_2518.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmDkfIMHI/");
	this.shape_2518.setTransform(34.1,26.5);

	this.shape_2519 = new cjs.Shape();
	this.shape_2519.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmAkfIMBI/");
	this.shape_2519.setTransform(35.3,25.7);

	this.shape_2520 = new cjs.Shape();
	this.shape_2520.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al+kfIL9I/");
	this.shape_2520.setTransform(36.5,24.9);

	this.shape_2521 = new cjs.Shape();
	this.shape_2521.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al7kfIL3I/");
	this.shape_2521.setTransform(37.7,24.1);

	this.shape_2522 = new cjs.Shape();
	this.shape_2522.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al4kfILyI/");
	this.shape_2522.setTransform(38.9,23.3);

	this.shape_2523 = new cjs.Shape();
	this.shape_2523.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al2kfILtI/");
	this.shape_2523.setTransform(40.1,22.5);

	this.shape_2524 = new cjs.Shape();
	this.shape_2524.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al0keILpI9");
	this.shape_2524.setTransform(41.3,21.6);

	this.shape_2525 = new cjs.Shape();
	this.shape_2525.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlxkeILjI9");
	this.shape_2525.setTransform(42.4,20.8);

	this.shape_2526 = new cjs.Shape();
	this.shape_2526.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlukeILdI9");
	this.shape_2526.setTransform(43.6,20);

	this.shape_2527 = new cjs.Shape();
	this.shape_2527.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlskeILYI9");
	this.shape_2527.setTransform(44.9,19.2);

	this.shape_2528 = new cjs.Shape();
	this.shape_2528.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlpkeILTI9");
	this.shape_2528.setTransform(46.1,18.4);

	this.shape_2529 = new cjs.Shape();
	this.shape_2529.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlnkeILPI9");
	this.shape_2529.setTransform(47.3,17.6);

	this.shape_2530 = new cjs.Shape();
	this.shape_2530.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlkkeILJI9");
	this.shape_2530.setTransform(48.4,16.8);

	this.shape_2531 = new cjs.Shape();
	this.shape_2531.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhkdILDI7");
	this.shape_2531.setTransform(49.6,16);

	this.shape_2532 = new cjs.Shape();
	this.shape_2532.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlfkdIK/I7");
	this.shape_2532.setTransform(50.8,15.2);

	this.shape_2533 = new cjs.Shape();
	this.shape_2533.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlckdIK5I7");
	this.shape_2533.setTransform(52,14.4);

	this.shape_2534 = new cjs.Shape();
	this.shape_2534.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlakdIK1I7");
	this.shape_2534.setTransform(53.2,13.6);

	this.shape_2535 = new cjs.Shape();
	this.shape_2535.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlXkdIKvI7");
	this.shape_2535.setTransform(54.4,12.7);

	this.shape_2536 = new cjs.Shape();
	this.shape_2536.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlVkdIKrI7");
	this.shape_2536.setTransform(55.6,11.9);

	this.shape_2537 = new cjs.Shape();
	this.shape_2537.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlSkdIKlI7");
	this.shape_2537.setTransform(56.8,11.1);

	this.shape_2538 = new cjs.Shape();
	this.shape_2538.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlQkdIKhI7");
	this.shape_2538.setTransform(58,10.3);

	this.shape_2539 = new cjs.Shape();
	this.shape_2539.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlNkcIKbI5");
	this.shape_2539.setTransform(59.2,9.5);

	this.shape_2540 = new cjs.Shape();
	this.shape_2540.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlLkcIKXI5");
	this.shape_2540.setTransform(60.4,8.7);

	this.shape_2541 = new cjs.Shape();
	this.shape_2541.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlIkcIKRI5");
	this.shape_2541.setTransform(61.6,7.9);

	this.shape_2542 = new cjs.Shape();
	this.shape_2542.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlFkcIKLI5");
	this.shape_2542.setTransform(62.8,7.1);

	this.shape_2543 = new cjs.Shape();
	this.shape_2543.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlDkcIKHI5");
	this.shape_2543.setTransform(64,6.2);

	this.shape_2544 = new cjs.Shape();
	this.shape_2544.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlAkcIKBI5");
	this.shape_2544.setTransform(65.2,5.4);

	this.shape_2545 = new cjs.Shape();
	this.shape_2545.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlAkqIKBJV");
	this.shape_2545.setTransform(65.1,6.8);

	this.shape_2546 = new cjs.Shape();
	this.shape_2546.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak/k3IJ/Jv");
	this.shape_2546.setTransform(65.1,8.2);

	this.shape_2547 = new cjs.Shape();
	this.shape_2547.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak/lFIJ/KL");
	this.shape_2547.setTransform(65,9.5);

	this.shape_2548 = new cjs.Shape();
	this.shape_2548.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak+lTIJ9Kn");
	this.shape_2548.setTransform(65,10.9);

	this.shape_2549 = new cjs.Shape();
	this.shape_2549.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak+lgIJ9LB");
	this.shape_2549.setTransform(64.9,12.3);

	this.shape_2550 = new cjs.Shape();
	this.shape_2550.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak9luIJ7Ld");
	this.shape_2550.setTransform(64.9,13.7);

	this.shape_2551 = new cjs.Shape();
	this.shape_2551.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak9l8IJ7L5");
	this.shape_2551.setTransform(64.8,15);

	this.shape_2552 = new cjs.Shape();
	this.shape_2552.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak8mJIJ5MT");
	this.shape_2552.setTransform(64.8,16.4);

	this.shape_2553 = new cjs.Shape();
	this.shape_2553.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak8mXIJ5Mv");
	this.shape_2553.setTransform(64.7,17.8);

	this.shape_2554 = new cjs.Shape();
	this.shape_2554.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak7mlIJ3NL");
	this.shape_2554.setTransform(64.7,19.1);

	this.shape_2555 = new cjs.Shape();
	this.shape_2555.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak7myIJ3Nl");
	this.shape_2555.setTransform(64.6,20.5);

	this.shape_2556 = new cjs.Shape();
	this.shape_2556.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak6nAIJ1OB");
	this.shape_2556.setTransform(64.6,21.9);

	this.shape_2557 = new cjs.Shape();
	this.shape_2557.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak6nOIJ1Od");
	this.shape_2557.setTransform(64.5,23.2);

	this.shape_2558 = new cjs.Shape();
	this.shape_2558.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak5ncIJzO5");
	this.shape_2558.setTransform(64.5,24.6);

	this.shape_2559 = new cjs.Shape();
	this.shape_2559.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak5npIJzPT");
	this.shape_2559.setTransform(64.4,26);

	this.shape_2560 = new cjs.Shape();
	this.shape_2560.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak4n3IJxPv");
	this.shape_2560.setTransform(64.4,27.3);

	this.shape_2561 = new cjs.Shape();
	this.shape_2561.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak4oFIJxQL");
	this.shape_2561.setTransform(64.3,28.7);

	this.shape_2562 = new cjs.Shape();
	this.shape_2562.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak3oSIJvQl");
	this.shape_2562.setTransform(64.3,30.1);

	this.shape_2563 = new cjs.Shape();
	this.shape_2563.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak3ogIJvRB");
	this.shape_2563.setTransform(64.2,31.5);

	this.shape_2564 = new cjs.Shape();
	this.shape_2564.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak2ouIJtRd");
	this.shape_2564.setTransform(64.2,32.8);

	this.shape_2565 = new cjs.Shape();
	this.shape_2565.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak2o7IJtR3");
	this.shape_2565.setTransform(64.1,34.2);

	this.shape_2566 = new cjs.Shape();
	this.shape_2566.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak1pJIJrST");
	this.shape_2566.setTransform(64.1,35.6);

	this.shape_2567 = new cjs.Shape();
	this.shape_2567.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak1pXIJrSv");
	this.shape_2567.setTransform(64,36.9);

	this.shape_2568 = new cjs.Shape();
	this.shape_2568.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak0plIJpTL");
	this.shape_2568.setTransform(64,38.3);

	this.shape_2569 = new cjs.Shape();
	this.shape_2569.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak0pyIJpTl");
	this.shape_2569.setTransform(63.9,39.7);

	this.shape_2570 = new cjs.Shape();
	this.shape_2570.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkzqAIJnUB");
	this.shape_2570.setTransform(63.9,41);

	this.shape_2571 = new cjs.Shape();
	this.shape_2571.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkzqOIJnUc");
	this.shape_2571.setTransform(63.8,42.4);

	this.shape_2572 = new cjs.Shape();
	this.shape_2572.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkyqbIJlU3");
	this.shape_2572.setTransform(63.8,43.8);

	this.shape_2573 = new cjs.Shape();
	this.shape_2573.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkyqpIJlVT");
	this.shape_2573.setTransform(63.7,45.1);

	this.shape_2574 = new cjs.Shape();
	this.shape_2574.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akxq3IJjVv");
	this.shape_2574.setTransform(63.7,46.5);

	this.shape_2575 = new cjs.Shape();
	this.shape_2575.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkxrEIJjWJ");
	this.shape_2575.setTransform(63.6,47.9);

	this.shape_2576 = new cjs.Shape();
	this.shape_2576.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkwrSIJhWl");
	this.shape_2576.setTransform(63.6,49.3);

	this.shape_2577 = new cjs.Shape();
	this.shape_2577.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkwrgIJhXB");
	this.shape_2577.setTransform(63.5,50.6);

	this.shape_2578 = new cjs.Shape();
	this.shape_2578.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkvrtIJfXb");
	this.shape_2578.setTransform(63.5,52);

	this.shape_2579 = new cjs.Shape();
	this.shape_2579.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akvr7IJfX3");
	this.shape_2579.setTransform(63.4,53.4);

	this.shape_2580 = new cjs.Shape();
	this.shape_2580.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Akwr0IJhXp");
	this.shape_2580.setTransform(62.9,53.1);

	this.shape_2581 = new cjs.Shape();
	this.shape_2581.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkyrtIJlXb");
	this.shape_2581.setTransform(62.3,52.8);

	this.shape_2582 = new cjs.Shape();
	this.shape_2582.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AkzrnIJnXP");
	this.shape_2582.setTransform(61.8,52.5);

	this.shape_2583 = new cjs.Shape();
	this.shape_2583.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak1rgIJrXB");
	this.shape_2583.setTransform(61.2,52.2);

	this.shape_2584 = new cjs.Shape();
	this.shape_2584.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak2rZIJtWz");
	this.shape_2584.setTransform(60.7,51.9);

	this.shape_2585 = new cjs.Shape();
	this.shape_2585.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak4rSIJxWl");
	this.shape_2585.setTransform(60.1,51.6);

	this.shape_2586 = new cjs.Shape();
	this.shape_2586.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak5rMIJzWZ");
	this.shape_2586.setTransform(59.5,51.3);

	this.shape_2587 = new cjs.Shape();
	this.shape_2587.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak7rFIJ3WL");
	this.shape_2587.setTransform(59,51);

	this.shape_2588 = new cjs.Shape();
	this.shape_2588.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak8q+IJ5V9");
	this.shape_2588.setTransform(58.4,50.8);

	this.shape_2589 = new cjs.Shape();
	this.shape_2589.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak+q3IJ9Vv");
	this.shape_2589.setTransform(57.9,50.5);

	this.shape_2590 = new cjs.Shape();
	this.shape_2590.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Ak/qxIJ/Vi");
	this.shape_2590.setTransform(57.3,50.2);

	this.shape_2591 = new cjs.Shape();
	this.shape_2591.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlBqqIKDVV");
	this.shape_2591.setTransform(56.8,49.9);

	this.shape_2592 = new cjs.Shape();
	this.shape_2592.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlCqjIKFVH");
	this.shape_2592.setTransform(56.2,49.6);

	this.shape_2593 = new cjs.Shape();
	this.shape_2593.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlEqcIKIU5");
	this.shape_2593.setTransform(55.7,49.3);

	this.shape_2594 = new cjs.Shape();
	this.shape_2594.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlFqVIKLUr");
	this.shape_2594.setTransform(55.1,49);

	this.shape_2595 = new cjs.Shape();
	this.shape_2595.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlHqPIKPUf");
	this.shape_2595.setTransform(54.5,48.7);

	this.shape_2596 = new cjs.Shape();
	this.shape_2596.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlIqIIKRUR");
	this.shape_2596.setTransform(54,48.4);

	this.shape_2597 = new cjs.Shape();
	this.shape_2597.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlKqBIKVUD");
	this.shape_2597.setTransform(53.4,48.1);

	this.shape_2598 = new cjs.Shape();
	this.shape_2598.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlLp6IKXT1");
	this.shape_2598.setTransform(52.9,47.8);

	this.shape_2599 = new cjs.Shape();
	this.shape_2599.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlNpzIKbTn");
	this.shape_2599.setTransform(52.3,47.5);

	this.shape_2600 = new cjs.Shape();
	this.shape_2600.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlOptIKdTb");
	this.shape_2600.setTransform(51.8,47.3);

	this.shape_2601 = new cjs.Shape();
	this.shape_2601.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlPpmIKgTN");
	this.shape_2601.setTransform(51.2,47);

	this.shape_2602 = new cjs.Shape();
	this.shape_2602.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlRpfIKjS/");
	this.shape_2602.setTransform(50.7,46.7);

	this.shape_2603 = new cjs.Shape();
	this.shape_2603.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlSpYIKmSx");
	this.shape_2603.setTransform(50.1,46.4);

	this.shape_2604 = new cjs.Shape();
	this.shape_2604.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlUpRIKpSj");
	this.shape_2604.setTransform(49.5,46.1);

	this.shape_2605 = new cjs.Shape();
	this.shape_2605.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlWpLIKtSX");
	this.shape_2605.setTransform(49,45.8);

	this.shape_2606 = new cjs.Shape();
	this.shape_2606.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlXpEIKvSJ");
	this.shape_2606.setTransform(48.4,45.5);

	this.shape_2607 = new cjs.Shape();
	this.shape_2607.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlZo9IKzR7");
	this.shape_2607.setTransform(47.9,45.2);

	this.shape_2608 = new cjs.Shape();
	this.shape_2608.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Alao2IK1Rt");
	this.shape_2608.setTransform(47.3,44.9);

	this.shape_2609 = new cjs.Shape();
	this.shape_2609.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlcovIK4Rf");
	this.shape_2609.setTransform(46.8,44.6);

	this.shape_2610 = new cjs.Shape();
	this.shape_2610.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AldopIK7RT");
	this.shape_2610.setTransform(46.2,44.3);

	this.shape_2611 = new cjs.Shape();
	this.shape_2611.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AleoiIK9RF");
	this.shape_2611.setTransform(45.6,44.1);

	this.shape_2612 = new cjs.Shape();
	this.shape_2612.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlgobILBQ3");
	this.shape_2612.setTransform(45.1,43.8);

	this.shape_2613 = new cjs.Shape();
	this.shape_2613.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlhoUILDQp");
	this.shape_2613.setTransform(44.5,43.5);

	this.shape_2614 = new cjs.Shape();
	this.shape_2614.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AljoNILHQc");
	this.shape_2614.setTransform(44,43.2);

	this.shape_2615 = new cjs.Shape();
	this.shape_2615.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlloHILLQP");
	this.shape_2615.setTransform(43.4,42.9);

	this.shape_2616 = new cjs.Shape();
	this.shape_2616.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlmoAILNQB");
	this.shape_2616.setTransform(42.9,42.6);

	this.shape_2617 = new cjs.Shape();
	this.shape_2617.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Alon5ILRPz");
	this.shape_2617.setTransform(42.3,42.3);

	this.shape_2618 = new cjs.Shape();
	this.shape_2618.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlpnyILTPl");
	this.shape_2618.setTransform(41.7,42);

	this.shape_2619 = new cjs.Shape();
	this.shape_2619.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlqnsILVPZ");
	this.shape_2619.setTransform(41.2,41.7);

	this.shape_2620 = new cjs.Shape();
	this.shape_2620.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlsnlILZPL");
	this.shape_2620.setTransform(40.6,41.4);

	this.shape_2621 = new cjs.Shape();
	this.shape_2621.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AltneILbO9");
	this.shape_2621.setTransform(40.1,41.2);

	this.shape_2622 = new cjs.Shape();
	this.shape_2622.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlvnXILfOv");
	this.shape_2622.setTransform(39.5,40.9);

	this.shape_2623 = new cjs.Shape();
	this.shape_2623.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlwnRILhOj");
	this.shape_2623.setTransform(39,40.6);

	this.shape_2624 = new cjs.Shape();
	this.shape_2624.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlynKILlOV");
	this.shape_2624.setTransform(38.4,40.3);

	this.shape_2625 = new cjs.Shape();
	this.shape_2625.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AlznDILnOH");
	this.shape_2625.setTransform(37.8,40);

	this.shape_2626 = new cjs.Shape();
	this.shape_2626.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al1m8ILrN5");
	this.shape_2626.setTransform(37.3,39.7);

	this.shape_2627 = new cjs.Shape();
	this.shape_2627.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al2m1ILtNr");
	this.shape_2627.setTransform(36.7,39.4);

	this.shape_2628 = new cjs.Shape();
	this.shape_2628.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al4mvILxNf");
	this.shape_2628.setTransform(36.2,39.1);

	this.shape_2629 = new cjs.Shape();
	this.shape_2629.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al5moILzNR");
	this.shape_2629.setTransform(35.6,38.8);

	this.shape_2630 = new cjs.Shape();
	this.shape_2630.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al7mhIL3ND");
	this.shape_2630.setTransform(35.1,38.5);

	this.shape_2631 = new cjs.Shape();
	this.shape_2631.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al8maIL5M1");
	this.shape_2631.setTransform(34.5,38.2);

	this.shape_2632 = new cjs.Shape();
	this.shape_2632.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al+mUIL9Mp");
	this.shape_2632.setTransform(34,38);

	this.shape_2633 = new cjs.Shape();
	this.shape_2633.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("Al/mNIL/Mb");
	this.shape_2633.setTransform(33.4,37.7);

	this.shape_2634 = new cjs.Shape();
	this.shape_2634.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmBmGIMDMN");
	this.shape_2634.setTransform(32.8,37.4);

	this.shape_2635 = new cjs.Shape();
	this.shape_2635.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmCl/IMFL/");
	this.shape_2635.setTransform(32.3,37.1);

	this.shape_2636 = new cjs.Shape();
	this.shape_2636.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmEl4IMJLx");
	this.shape_2636.setTransform(31.7,36.8);

	this.shape_2637 = new cjs.Shape();
	this.shape_2637.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmFlyIMLLl");
	this.shape_2637.setTransform(31.2,36.5);

	this.shape_2638 = new cjs.Shape();
	this.shape_2638.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmHlqIMPLW");
	this.shape_2638.setTransform(30.6,36.2);

	this.shape_2639 = new cjs.Shape();
	this.shape_2639.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmIlkIMRLJ");
	this.shape_2639.setTransform(30.1,35.9);

	this.shape_2640 = new cjs.Shape();
	this.shape_2640.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmKldIMVK7");
	this.shape_2640.setTransform(29.5,35.6);

	this.shape_2641 = new cjs.Shape();
	this.shape_2641.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmLlWIMXKt");
	this.shape_2641.setTransform(29,35.3);

	this.shape_2642 = new cjs.Shape();
	this.shape_2642.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmNlQIMbKh");
	this.shape_2642.setTransform(28.4,35.1);

	this.shape_2643 = new cjs.Shape();
	this.shape_2643.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmOlJIMdKT");
	this.shape_2643.setTransform(27.9,34.7);

	this.shape_2644 = new cjs.Shape();
	this.shape_2644.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmQlCIMhKF");
	this.shape_2644.setTransform(27.3,34.5);

	this.shape_2645 = new cjs.Shape();
	this.shape_2645.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmRk7IMjJ3");
	this.shape_2645.setTransform(26.7,34.2);

	this.shape_2646 = new cjs.Shape();
	this.shape_2646.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmSk0IMmJp");
	this.shape_2646.setTransform(26.2,33.9);

	this.shape_2647 = new cjs.Shape();
	this.shape_2647.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmUkuIMpJd");
	this.shape_2647.setTransform(25.6,33.6);

	this.shape_2648 = new cjs.Shape();
	this.shape_2648.graphics.f().s("rgba(153,153,153,0.4)").ss(1,1,1).p("AmWknIMtJP");
	this.shape_2648.setTransform(25.1,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2510}]}).to({state:[{t:this.shape_2511}]},1).to({state:[{t:this.shape_2512}]},1).to({state:[{t:this.shape_2513}]},1).to({state:[{t:this.shape_2514}]},1).to({state:[{t:this.shape_2515}]},1).to({state:[{t:this.shape_2516}]},1).to({state:[{t:this.shape_2517}]},1).to({state:[{t:this.shape_2518}]},1).to({state:[{t:this.shape_2519}]},1).to({state:[{t:this.shape_2520}]},1).to({state:[{t:this.shape_2521}]},1).to({state:[{t:this.shape_2522}]},1).to({state:[{t:this.shape_2523}]},1).to({state:[{t:this.shape_2524}]},1).to({state:[{t:this.shape_2525}]},1).to({state:[{t:this.shape_2526}]},1).to({state:[{t:this.shape_2527}]},1).to({state:[{t:this.shape_2528}]},1).to({state:[{t:this.shape_2529}]},1).to({state:[{t:this.shape_2530}]},1).to({state:[{t:this.shape_2531}]},1).to({state:[{t:this.shape_2532}]},1).to({state:[{t:this.shape_2533}]},1).to({state:[{t:this.shape_2534}]},1).to({state:[{t:this.shape_2535}]},1).to({state:[{t:this.shape_2536}]},1).to({state:[{t:this.shape_2537}]},1).to({state:[{t:this.shape_2538}]},1).to({state:[{t:this.shape_2539}]},1).to({state:[{t:this.shape_2540}]},1).to({state:[{t:this.shape_2541}]},1).to({state:[{t:this.shape_2542}]},1).to({state:[{t:this.shape_2543}]},1).to({state:[{t:this.shape_2544}]},1).to({state:[{t:this.shape_2545}]},1).to({state:[{t:this.shape_2546}]},1).to({state:[{t:this.shape_2547}]},1).to({state:[{t:this.shape_2548}]},1).to({state:[{t:this.shape_2549}]},1).to({state:[{t:this.shape_2550}]},1).to({state:[{t:this.shape_2551}]},1).to({state:[{t:this.shape_2552}]},1).to({state:[{t:this.shape_2553}]},1).to({state:[{t:this.shape_2554}]},1).to({state:[{t:this.shape_2555}]},1).to({state:[{t:this.shape_2556}]},1).to({state:[{t:this.shape_2557}]},1).to({state:[{t:this.shape_2558}]},1).to({state:[{t:this.shape_2559}]},1).to({state:[{t:this.shape_2560}]},1).to({state:[{t:this.shape_2561}]},1).to({state:[{t:this.shape_2562}]},1).to({state:[{t:this.shape_2563}]},1).to({state:[{t:this.shape_2564}]},1).to({state:[{t:this.shape_2565}]},1).to({state:[{t:this.shape_2566}]},1).to({state:[{t:this.shape_2567}]},1).to({state:[{t:this.shape_2568}]},1).to({state:[{t:this.shape_2569}]},1).to({state:[{t:this.shape_2570}]},1).to({state:[{t:this.shape_2571}]},1).to({state:[{t:this.shape_2572}]},1).to({state:[{t:this.shape_2573}]},1).to({state:[{t:this.shape_2574}]},1).to({state:[{t:this.shape_2575}]},1).to({state:[{t:this.shape_2576}]},1).to({state:[{t:this.shape_2577}]},1).to({state:[{t:this.shape_2578}]},1).to({state:[{t:this.shape_2579}]},1).to({state:[{t:this.shape_2580}]},1).to({state:[{t:this.shape_2581}]},1).to({state:[{t:this.shape_2582}]},1).to({state:[{t:this.shape_2583}]},1).to({state:[{t:this.shape_2584}]},1).to({state:[{t:this.shape_2585}]},1).to({state:[{t:this.shape_2586}]},1).to({state:[{t:this.shape_2587}]},1).to({state:[{t:this.shape_2588}]},1).to({state:[{t:this.shape_2589}]},1).to({state:[{t:this.shape_2590}]},1).to({state:[{t:this.shape_2591}]},1).to({state:[{t:this.shape_2592}]},1).to({state:[{t:this.shape_2593}]},1).to({state:[{t:this.shape_2594}]},1).to({state:[{t:this.shape_2595}]},1).to({state:[{t:this.shape_2596}]},1).to({state:[{t:this.shape_2597}]},1).to({state:[{t:this.shape_2598}]},1).to({state:[{t:this.shape_2599}]},1).to({state:[{t:this.shape_2600}]},1).to({state:[{t:this.shape_2601}]},1).to({state:[{t:this.shape_2602}]},1).to({state:[{t:this.shape_2603}]},1).to({state:[{t:this.shape_2604}]},1).to({state:[{t:this.shape_2605}]},1).to({state:[{t:this.shape_2606}]},1).to({state:[{t:this.shape_2607}]},1).to({state:[{t:this.shape_2608}]},1).to({state:[{t:this.shape_2609}]},1).to({state:[{t:this.shape_2610}]},1).to({state:[{t:this.shape_2611}]},1).to({state:[{t:this.shape_2612}]},1).to({state:[{t:this.shape_2613}]},1).to({state:[{t:this.shape_2614}]},1).to({state:[{t:this.shape_2615}]},1).to({state:[{t:this.shape_2616}]},1).to({state:[{t:this.shape_2617}]},1).to({state:[{t:this.shape_2618}]},1).to({state:[{t:this.shape_2619}]},1).to({state:[{t:this.shape_2620}]},1).to({state:[{t:this.shape_2621}]},1).to({state:[{t:this.shape_2622}]},1).to({state:[{t:this.shape_2623}]},1).to({state:[{t:this.shape_2624}]},1).to({state:[{t:this.shape_2625}]},1).to({state:[{t:this.shape_2626}]},1).to({state:[{t:this.shape_2627}]},1).to({state:[{t:this.shape_2628}]},1).to({state:[{t:this.shape_2629}]},1).to({state:[{t:this.shape_2630}]},1).to({state:[{t:this.shape_2631}]},1).to({state:[{t:this.shape_2632}]},1).to({state:[{t:this.shape_2633}]},1).to({state:[{t:this.shape_2634}]},1).to({state:[{t:this.shape_2635}]},1).to({state:[{t:this.shape_2636}]},1).to({state:[{t:this.shape_2637}]},1).to({state:[{t:this.shape_2638}]},1).to({state:[{t:this.shape_2639}]},1).to({state:[{t:this.shape_2640}]},1).to({state:[{t:this.shape_2641}]},1).to({state:[{t:this.shape_2642}]},1).to({state:[{t:this.shape_2643}]},1).to({state:[{t:this.shape_2644}]},1).to({state:[{t:this.shape_2645}]},1).to({state:[{t:this.shape_2646}]},1).to({state:[{t:this.shape_2647}]},1).to({state:[{t:this.shape_2648}]},1).to({state:[{t:this.shape_2510}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-22,376,273.1);


(lib.btn_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(0,90.1,1,1,0,0,0,118.5,23.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:118.6,regY:23.2,scaleX:1.24,scaleY:1.24,x:0.2,y:90.3},15,cjs.Ease.get(1)).to({regX:118.5,regY:23.1,scaleX:1,scaleY:1,x:0,y:90.1},14,cjs.Ease.get(-1)).to({regX:118.6,regY:23.2,scaleX:1.24,scaleY:1.24,x:0.2,y:90.3},15,cjs.Ease.get(1)).to({regX:118.5,regY:23.1,scaleX:1,scaleY:1,x:0,y:90.1},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.5,67,237,46.3);


// stage content:
(lib._25discount_AdWords_300x250newtextd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.btn_anim();
	this.instance.parent = this;
	this.instance.setTransform(150,215.1,1,1,0,0,0,0,90.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.txt1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143,63.3,1.604,1.604,0,0,0,107.5,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.HANDS();
	this.instance_2.parent = this;
	this.instance_2.setTransform(139,138.4,0.248,0.248,0,0,0,-53.5,-23.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgEGQIAAsfIAJAAIAAMfg");
	this.shape.setTransform(-342.9,142.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(1));

	// Слой 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#172122","rgba(23,33,34,0)"],[0.631,1],0,0,0,0,0,71.6).s().p("At6H2QlwjPAAknQAAklFwjQQFxjQIJAAQIJAAFxDQQFxDQAAElQAAEnlxDPQlxDQoJAAQoJAAlxjQg");
	this.shape_1.setTransform(148.6,138);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#172122").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.4,103.5,701.6,272.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;