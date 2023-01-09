(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Village_AdWords_300x250_atlas_", frames: [[0,564,420,280],[0,0,420,280],[0,282,420,280]]},
		{name:"Village_AdWords_300x250_atlas_2", frames: [[0,0,64,94]]}
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



(lib._1Copy = function() {
	this.spriteSheet = ss["Village_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["Village_AdWords_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["Village_AdWords_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["Village_AdWords_300x250_atlas_2"];
	this.gotoAndStop(0);
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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBUIAAhJIhOAAIAABJIggAAIAAinIAgAAIAABIIBOAAIAAhIIAfAAIAACng");
	this.shape.setTransform(187.8,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBQQgPgHgMgLQgLgMgGgPQgHgQAAgTQAAgSAHgQQAGgQALgLQAMgLAQgHQAQgGATAAQAVAAAPAGQAPAGAKAKIgJAOQgCAFgFAAQgCAAgDgCIgIgFIgIgEIgLgCIgOgBQgMAAgJAEQgLAEgGAIQgHAIgFALQgEALABAMQAAAPAEALQAEALAHAIQAIAIAKAEQAJAEALAAQAMAAAHgCIAPgFIAAgfIgVAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgSIA3AAIAABEIgMAIQgIAEgHACIgSADQgIABgKAAQgSAAgQgGg");
	this.shape_1.setTransform(170.3,68.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBQQgNgFgJgKQgJgJgFgNQgFgMAAgPIAAhkIAgAAIAABkQAAAJACAIQADAIAFAFQAFAGAHADQAHADAIAAQAJAAAHgDQAHgDAFgGQAFgFADgIQACgIAAgJIAAhkIAgAAIAABkQAAAPgFAMQgFANgJAJQgJAKgNAFQgNAFgQAAQgPAAgNgFg");
	this.shape_2.setTransform(153.7,68.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBQQgQgHgLgLQgLgMgGgQQgGgPAAgTQAAgSAGgPQAGgQALgMQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALAMQALALAGAQQAGAPAAASQAAATgGAPQgGAQgLAMQgLALgQAHQgQAGgTAAQgSAAgQgGgAgVg2QgKAEgHAHQgHAIgEALQgDALAAANQAAAOADALQAEALAHAHQAHAIAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgHADgLQAEgLAAgOQAAgNgEgLQgDgLgHgIQgHgHgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_3.setTransform(135.9,68.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBUQgFAAgCgBIgFgFIgjg2IgEgEQgCgCgFAAIgNAAIAABCIggAAIAAinIA0AAQAQAAAMADQAMAEAIAGQAIAHAEAJQADAJAAAKQAAAJgCAHQgDAIgEAGQgFAFgHAFQgHAFgJACQAGAEAFAGIAqA+gAghgDIATAAQAJAAAGgCQAGgDAEgDQAFgEACgGQACgFAAgGQAAgNgJgHQgIgHgQAAIgUAAg");
	this.shape_4.setTransform(119.7,68.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBUIAAhJIhPAAIAABJIgfAAIAAinIAfAAIAABIIBPAAIAAhIIAfAAIAACng");
	this.shape_5.setTransform(102.6,68.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBUIAAiNIgyAAIAAgaICDAAIAAAaIgyAAIAACNg");
	this.shape_6.setTransform(86.9,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAMIAAgXIA7AAIAAAXg");
	this.shape_7.setTransform(75.7,69.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArBUQgFAAgDgBQgDgCgBgDIgvg+QgCgDgDgBQgDgCgFAAIgKAAIAABKIggAAIAAinIAgAAIAABGIAHAAIAIgBIAEgEIAug7QADgDADgCQAEgBAEAAIAbAAIg4BGIgGAFIgFAEQAEABADADIAGAFIA6BPg");
	this.shape_8.setTransform(64.3,68.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBUIAAinIAfAAIAACNIBCAAIAAAag");
	this.shape_9.setTransform(49.9,68.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA6BUQgEAAgDgCQgCgCgBgDIgNgiIhFAAIgMAiQgBADgDACQgDACgEAAIgYAAIBCinIAfAAIBCCngAgCgqIgDAJIgVA2IA1AAIgVg3IgDgIIgDgLIgCALg");
	this.shape_10.setTransform(35,68.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBUIglhwIgBgFIgCgFIAAAFIgCAFIglBwIgcAAIg0inIAaAAQAEAAADABQADADAAADIAdBkIACAIIACAKIACgKIACgIIAhhkQABgDADgCQADgCADAAIAJAAQAEAAACABQADADABADIAhBkQADAIABAJIACgJIACgIIAdhkQAAgDADgCQADgCAEAAIAYAAIg0Cng");
	this.shape_11.setTransform(14.5,68.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBSIAAijIBhAAIAAAJIhVAAIAABDIBHAAIAAAJIhHAAIAABEIBVAAIAAAKg");
	this.shape_12.setTransform(183.7,42.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBOQgPgGgLgLQgLgLgGgPQgGgQAAgTQAAgSAGgQQAFgPALgLQALgLAPgGQAPgGATAAIARABIAPAEIANAGIALAJIgDAFQgCACgDgBIgFgDIgJgGIgOgFQgJgCgMAAQgPAAgNAFQgNAFgJAKQgJAJgFAOQgFAOAAAQQAAARAFAOQAFAOAJAJQAJAKAOAFQANAFAQAAIAOgBIAMgCIAKgFIALgFIAAgsIgfAAIgCgBIgBgCIAAgGIAtAAIAAA6QgMAJgOAEQgOAFgSAAQgSAAgQgGg");
	this.shape_13.setTransform(167.7,42.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABABSIgCgBIgCgCIgUgwIhPAAIgUAwIgBACIgDABIgJAAIBDijIALAAIBDCjgAgBhAIgBAEIgiBSIBJAAIgihSIgDgKIgBAGg");
	this.shape_14.setTransform(151.6,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsBSIAAijIAMAAIAACZIBNAAIAAAKg");
	this.shape_15.setTransform(139.2,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsBSIAAijIAMAAIAACZIBNAAIAAAKg");
	this.shape_16.setTransform(127.5,42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFBSIAAijIALAAIAACjg");
	this.shape_17.setTransform(117.5,42.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEBSIhEijIAJAAIADAAIABADIA5CHIACAGIAAAGIACgGIACgGIA4iHIABgCIADgBIAJAAIhECjg");
	this.shape_18.setTransform(106.8,42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFBSIAAhEIg9hfIALAAIACAAIACACIAvBMIADAEIABAFIACgFIADgEIAvhMIACgCIACAAIALAAIg9BfIAABEg");
	this.shape_19.setTransform(85.9,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABABSIgCgBIgCgCIgUgwIhPAAIgUAwIgBACIgDABIgJAAIBDijIALAAIBDCjgAgBhAIgBAEIgiBSIBJAAIgihSIgDgKIgBAGg");
	this.shape_20.setTransform(71.4,42.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsBSIAAijIAMAAIAACZIBNAAIAAAKg");
	this.shape_21.setTransform(59,42.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgxBSIAAijIAqAAQAcAAAOAMQAPANABAXQgBALgEAJQgEAJgHAGQgIAGgLAEQgKAEgNAAIgeAAIAABCgAglAGIAeAAQAKAAAIgDQAJgDAGgEQAGgFADgIQADgHAAgJQAAgTgMgKQgLgKgWAAIgeAAg");
	this.shape_22.setTransform(46.1,42.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdBOQgMgFgIgKIACgGQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIADABIADAEIAGAEIAIAEIAKAEQAFABAHAAQAJAAAHgDQAJgDAEgFQAGgFADgHQADgHAAgIQAAgJgEgFQgDgGgHgEQgFgEgHgCIgPgFIgPgFQgIgDgFgEQgGgFgDgHQgEgHAAgLQAAgIADgIQADgHAGgGQAGgGAJgEQAJgDALAAQANAAAJAEQAKAEAJAIIgDAGIgCACQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBIgGgEIgLgFQgGgCgIAAQgJAAgGACQgHADgEAEQgFAFgDAFQgCAGAAAHQAAAIADAFQAEAGAGAEQAGAEAHACIAOAFIAPAGQAIACAGAFQAFAEAEAHQADAHABAKQgBALgDAJQgEAJgGAHQgHAGgJAEQgLAEgLAAQgRAAgLgGg");
	this.shape_23.setTransform(32.2,42.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFBSIAAijIALAAIAACjg");
	this.shape_24.setTransform(23.1,42.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhEBSIAAijIA8AAQAQAAAPAFQAOAGALALQAKAKAGAQQAFAPAAASQAAATgFAPQgGAPgKALQgLALgOAGQgPAFgQAAgAg4BIIAwAAQANAAANgFQAMgEAJgKQAIgJAFgNQAFgOAAgRQAAgQgFgOQgFgNgIgKQgJgJgMgFQgNgFgNAAIgwAAg");
	this.shape_25.setTransform(11.7,42.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D69F0F").s().p("Ag0BUIAAinIBpAAIAAAZIhKAAIAAAvIA6AAIAAAXIg6AAIAAAvIBKAAIAAAZg");
	this.shape_26.setTransform(145.2,16.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D69F0F").s().p("Ag0BUIAAinIBpAAIAAAZIhKAAIAAAvIA7AAIAAAXIg7AAIAAAvIBKAAIAAAZg");
	this.shape_27.setTransform(131.9,16.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D69F0F").s().p("AAmBUQgFAAgCgBIgFgFIgjg2IgEgEQgCgCgFAAIgNAAIAABCIggAAIAAinIA0AAQAQAAAMADQAMAEAIAGQAIAHAEAJQADAJAAAKQAAAJgCAHQgDAIgEAGQgFAFgHAFQgHAFgJACQAGAEAFAGIAqA+gAghgDIATAAQAJAAAGgCQAGgDAEgDQAFgEACgGQACgFAAgGQAAgNgJgHQgIgHgQAAIgUAAg");
	this.shape_28.setTransform(118,16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D69F0F").s().p("Ag0BUIAAinIBpAAIAAAZIhKAAIAAAxIA+AAIAAAYIg+AAIAABFg");
	this.shape_29.setTransform(103.5,16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D69F0F").s().p("AA6BUQgEAAgDgCQgCgCgBgDIgNgiIhFAAIgMAiQgBADgDACQgDACgEAAIgYAAIBCinIAfAAIBCCngAgCgqIgDAJIgVA2IA1AAIgVg3IgDgIIgDgLIgCALg");
	this.shape_30.setTransform(83.8,16.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D69F0F").s().p("AAsBUQgGAAgCgBQgDgCgCgDIgvg+QgCgDgDgBQgDgCgGAAIgJAAIAABKIgfAAIAAinIAfAAIAABGIAHAAIAIgBIAFgEIAtg7QADgDADgCQADgBAFAAIAbAAIg5BGIgFAFIgFAEQAEABADADIAGAFIA7BPg");
	this.shape_31.setTransform(63.8,16.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D69F0F").s().p("AgiBQQgQgHgLgLQgLgMgGgQQgGgPAAgTQAAgSAGgPQAGgQALgMQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALAMQALALAGAQQAGAPAAASQAAATgGAPQgGAQgLAMQgLALgQAHQgQAGgTAAQgSAAgQgGgAgVg2QgKAEgHAHQgHAIgEALQgDALAAANQAAAOADALQAEALAHAHQAHAIAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgHADgLQAEgLAAgOQAAgNgEgLQgDgLgHgIQgHgHgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_32.setTransform(45.5,16.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D69F0F").s().p("AgiBQQgQgHgLgLQgLgMgGgQQgGgPAAgTQAAgSAGgPQAGgQALgMQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALAMQALALAGAQQAGAPAAASQAAATgGAPQgGAQgLAMQgLALgQAHQgQAGgTAAQgSAAgQgGgAgVg2QgKAEgHAHQgHAIgEALQgDALAAANQAAAOADALQAEALAHAHQAHAIAKAEQAKAEALAAQAMAAAKgEQAKgEAHgIQAHgHADgLQAEgLAAgOQAAgNgEgLQgDgLgHgIQgHgHgKgEQgKgEgMAAQgLAAgKAEg");
	this.shape_33.setTransform(26.9,16.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D69F0F").s().p("Ag9BUIAAinIA6AAQAPAAAMADQAMADAHAGQAIAGADAIQAEAIAAALQAAAGgCAFQgCAGgDAEQgEAFgGAEQgFAEgIADQAiAGAAAeQAAALgEAJQgEAJgHAGQgIAHgMADQgLAEgPAAgAgeA8IAfAAQAJAAAFgCQAGgCAEgEQADgDACgFQACgFAAgFQAAgFgCgFQgCgEgEgDQgDgDgGgCQgGgCgIAAIgfAAgAgegKIAZAAQAPAAAIgGQAJgGAAgMQAAgOgIgFQgHgGgPAAIgbAAg");
	this.shape_34.setTransform(10.3,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,199.1,83.9), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBUQgIgBgIgDQgIgDgGgEQgHgEgFgFIAMgSQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQACgCADAAQAEAAADADIAIAEIAKAFQAGADAHgBQALAAAGgEQAGgFAAgKQAAgGgEgEQgDgDgFgDIgLgEIgOgFQgHgCgHgDQgHgDgFgEQgFgGgDgIQgEgIAAgMQAAgJAEgJQAEgKAHgHQAIgHALgEQAKgFANAAQAIAAAHACQAIABAHADIAMAGQAGADAEAEIgKASIgDAEQgCABgDAAQgDAAgDgBIgHgEIgJgEQgFgCgGABQgKgBgGAFQgFAFAAAIQAAAFADAEIAJAFIALAFIAOAEIAOAGQAGAEAGAEQAFAFADAHQADAIAAAKQAAAMgEAKQgEALgHAHQgIAHgLAFQgMAFgNAAQgIgBgIgCg");
	this.shape.setTransform(167.6,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BUIAAinIBrAAIAAAeIhEAAIAAAnIA0AAIAAAcIg0AAIAAApIBEAAIAAAdg");
	this.shape_1.setTransform(155.3,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9BUIAAhfIAAgQIgsBWQgDAEgEACQgDACgFAAIgDAAQgGAAgDgCQgDgCgDgEIgthWIABAIIAAAIIAABfIgiAAIAAinIAeAAIAEAAIAEAAIADACIACADIAsBVIAEAKIADAJIAEgKIAFgJIArhVIADgDIACgCIAEAAIAEAAIAeAAIAACng");
	this.shape_2.setTransform(137.6,62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBQQgQgHgLgLQgMgNgGgPQgHgQAAgSQAAgRAHgQQAGgQAMgMQALgLAQgHQARgHASAAQAUABAQAGQAQAHAMALQALAMAHAQQAGAQAAARQAAASgGAQQgHAPgLANQgMALgQAHQgQAGgUABQgSgBgRgGgAgTgyQgJAFgGAHQgGAHgDAJQgEALAAALQAAANAEAJQADALAGAGQAGAIAJADQAJAEAKAAQAMAAAIgEQAJgDAGgIQAGgGAEgLQADgJAAgNQAAgLgDgLQgEgJgGgHQgGgHgJgFQgIgDgMAAQgKAAgJADg");
	this.shape_3.setTransform(117.4,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBUIAAhHIhDAAIAABHIgoAAIAAinIAoAAIAABGIBDAAIAAhGIAoAAIAACng");
	this.shape_4.setTransform(99.4,62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBUIAAg/Ig+hoIAjAAQAFAAADACQADADABADIAZAyIAFALIADAKIAEgKIAFgLIAZgyIABgDIADgCIAEgCIAEgBIAjAAIg+BoIAAA/g");
	this.shape_5.setTransform(78.3,62.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4BUQgGAAgDgCQgDgDgCgDIgKgeIg/AAIgKAeQgBADgDADQgEACgEAAIggAAIBCinIAoAAIBACngAgDgjIgDAKIgQAtIAtAAIgPguIgEgKIgEgNIgDAOg");
	this.shape_6.setTransform(61.9,62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBUIAAinIAnAAIAACIIA+AAIAAAfg");
	this.shape_7.setTransform(47.7,62.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIA8AAQARAAAMAEQANAEAJAHQAIAIAEAKQAEAKAAAMQAAANgEAKQgEAKgJAHQgIAHgNAFQgNAEgQAAIgVAAIAAA4gAgYAAIAVAAQAOAAAHgIQAHgHAAgNQAAgGgCgFQgCgFgDgDQgEgDgFgCQgGgCgGAAIgVAAg");
	this.shape_8.setTransform(34.2,62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBUQgIgBgIgDQgIgDgGgEQgHgEgFgFIAMgSQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQACgCADAAQAEAAADADIAIAEIAKAFQAGADAHgBQALAAAGgEQAGgFAAgKQAAgGgEgEQgDgDgFgDIgLgEIgOgFQgHgCgHgDQgHgDgFgEQgFgGgDgIQgEgIAAgMQAAgJAEgJQAEgKAHgHQAIgHALgEQAKgFANAAQAIAAAHACQAIABAHADIAMAGQAGADAEAEIgKASIgDAEQgCABgDAAQgDAAgDgBIgHgEIgJgEQgFgCgGABQgKgBgGAFQgFAFAAAIQAAAFADAEIAJAFIALAFIAOAEIAOAGQAGAEAGAEQAFAFADAHQADAIAAAKQAAAMgEAKQgEALgHAHQgIAHgLAFQgMAFgNAAQgIgBgIgCg");
	this.shape_9.setTransform(19.9,62.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_10.setTransform(10.2,62.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhMBUIAAinIBCAAQATgBAQAHQAQAGALALQAMAMAGAPQAHAQAAARQAAASgHAQQgGAPgMAMQgLALgQAGQgQAHgTgBgAgkA3IAaAAQAKAAAJgEQAJgEAGgHQAGgIADgKQADgJAAgNQAAgLgDgLQgDgJgGgIQgGgHgJgEQgJgDgKAAIgaAAg");
	this.shape_11.setTransform(-1.7,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXBPQgQgGgLgMQgMgLgGgQQgHgQAAgSQAAgSAGgQQAGgQAMgLQAMgLAQgHQARgGATgBQALABAJABQAJACAIADQAIADAHAFIALAJIgLAQIgEAFQgCABgDAAQgEAAgDgCIgJgGIgIgCIgKgCIgKgBQgLAAgIAEQgJAEgGAHQgGAHgEAKQgDAKAAALQAAANAEALQAEAKAGAHQAHAIAJADQAIAEAKAAIAPgBIALgEIAAgaIgQAAQgEAAgCgCQgCgCAAgCIAAgVIA8AAIAABGIgOAIQgHAEgHACQgIACgJABIgUABQgRABgQgIg");
	this.shape_12.setTransform(110.3,36.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA1BVQgEgBgDgBQgDgCgDgDIhPhkIABAJIAAAIIAABaIgjAAIAAipIAVAAIAEAAIADABIADADIADADIBPBkIgBgKIAAgIIAAhZIAjAAIAACpg");
	this.shape_13.setTransform(93.5,36.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_14.setTransform(81,36.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBBVIAAgQIABgFIACgFIBPhwIhMAAIAAgfIB9AAIAAAPIgBAFIgCAGIhPBxIBQAAIAAAeg");
	this.shape_15.setTransform(70.3,36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA3BVQgFgBgDgCQgDgCgBgEIgKgdIhAAAIgKAdQgBAEgDACQgEACgFABIgeAAIBBipIAnAAIBCCpgAgCgjIgFAKIgPAtIAuAAIgRgtIgDgLIgEgNIgCAOg");
	this.shape_16.setTransform(54.6,36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA9BVIAAhhIAAgPIgsBWQgDAEgEACQgDACgFAAIgDAAQgFAAgEgCQgEgCgCgEIgthWIABAIIAAAHIAABhIgiAAIAAipIAeAAIAEAAIAEABIACACIADAEIArBUIAFAJIADAKIAEgKIAFgJIArhUIACgEIADgCIAEgBIAEAAIAeAAIAACpg");
	this.shape_17.setTransform(35.2,36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA4BVQgGgBgDgCQgDgCgCgEIgKgdIg/AAIgKAdQgBAEgEACQgDACgFABIgeAAIBBipIAoAAIBBCpgAgCgjIgEAKIgQAtIAuAAIgRgtIgDgLIgEgNIgCAOg");
	this.shape_18.setTransform(15.7,36.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYBRQgMgEgIgJQgHgHgFgMQgEgLAAgNQAAgNAFgMQAFgMAJgNIAmgzQADgEAEgCQAFgCAGgBIAhAAIgyA9IgCACIgCACIAIgCIAKgBQAJAAAJADQAJAEAHAFQAGAHAFAIQAEAKAAANQAAAMgEAKQgFALgHAIQgIAIgMAFQgLAEgOAAQgNABgLgFgAgLAEQgEACgDAEQgDAEgCAFQgCAFAAAFIABAMQABAFAEADQADAEAFACQAFACAGAAQAEAAAGgCIAIgGQADgEACgFQACgEAAgGQAAgHgCgFQgCgFgDgDQgDgEgFgCQgGgBgFgBQgFAAgFACg");
	this.shape_19.setTransform(-3.9,36.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUBOQgRgGgKgLQgLgLgGgQQgGgPAAgTQAAgSAGgPQAGgQALgLQAKgLAPgGQAQgGARAAQAKAAAIABQAIABAHADQAGACAGAEIAMAJIgEAFQgBADgDgCIgGgDIgJgGIgOgEQgIgDgMAAQgPABgNAFQgNAEgJAKQgJAKgFANQgFAOAAAQQAAARAFAOQAFANAJAKQAKAKANAFQAOAFAPAAIAOgBIALgDIALgDIALgGIAAgsIgfAAIgCgBIgBgCIAAgHIAtAAIAAA7QgNAIgNAFQgOAFgSAAQgSAAgPgGg");
	this.shape_20.setTransform(136.3,11.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA6BSIgCAAIgCgDIhqiMIAAAGIAACJIgKAAIAAijIAFAAIADAAIACACIBqCNIgBgGIAAiJIALAAIAACjg");
	this.shape_21.setTransform(119.1,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFBSIAAijIALAAIAACjg");
	this.shape_22.setTransform(107.4,11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdBOQgMgGgIgKIACgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIADABIADADIAGAFIAIAEIAKAEQAFABAHAAQAJAAAHgDQAIgDAGgFQAEgFADgHQADgHAAgIQAAgJgEgFQgDgGgGgEQgFgDgIgDIgOgFIgPgEQgIgEgFgFQgGgEgEgHQgDgHAAgKQAAgJADgIQADgHAGgGQAGgGAJgDQAJgEALAAQAMAAAKAEQALAEAHAIIgCAGIgDACQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgFIgKgFQgGgCgJAAQgIAAgIADQgGACgEAEQgFAFgDAFQgCAGAAAHQAAAIADAFQAEAGAGAEIANAGIAOAGIAPAFQAIACAGAFQAGAEADAHQADAHAAAKQAAALgDAIQgDAKgIAGQgGAHgKAEQgKAEgLAAQgRAAgLgGg");
	this.shape_23.setTransform(98,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABABSIgDgBIgBgCIgTgwIhQAAIgTAwIgCACIgDABIgJAAIBDijIALAAIBDCjgAAAhAIgCAFIgiBSIBIAAIgghSIgEgKIAAAFg");
	this.shape_24.setTransform(84.3,11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVBOQgOgGgKgLQgLgLgFgQQgGgPAAgTQAAgSAGgPQAGgPAKgLQALgMAOgGQAPgGARAAQAQAAANAGQANAEALAKIgEAFQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFgCIgJgGQgFgDgJgCQgIgDgLAAQgOABgNAFQgMAEgJAKQgJAKgFANQgFAOAAAQQAAARAFAOQAFANAJAKQAJAKAMAEQAMAFANABIAQgBIAMgEIALgGIAKgHIABgBIABgBIACABIAFAFIgLAKQgGAEgHADQgHADgJACQgIACgLAAQgQAAgOgGg");
	this.shape_25.setTransform(69.2,11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAzBSIgxiNIgBgHIgBAHIgwCNIgLAAIg0ijIAJAAQADAAABAEIArCFIACALIABgGIACgFIAuiGIACgCIACgBIADAAIACABIACACIAuCGIACAFIABAGIABgGIABgFIAqiGIABgCIADgBIAIAAIgzCjg");
	this.shape_26.setTransform(49.2,11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfBOQgOgGgLgLQgKgLgFgPQgGgQAAgTQAAgSAGgPQAFgQAKgLQALgLAOgGQAPgGAQAAQARAAAPAGQAOAGALALQAKALAGAQQAFAPAAASQAAATgFAQQgGAPgKALQgLALgOAGQgPAGgRAAQgQAAgPgGgAgahDQgMAFgJAJQgJAKgEANQgFAOAAAQQAAARAFAOQAEAOAJAJQAJAKAMAFQAMAFAOAAQAPAAAMgFQAMgFAJgKQAJgJAEgOQAFgOAAgRQAAgQgFgOQgEgNgJgKQgJgJgMgFQgMgFgPAAQgOAAgMAFg");
	this.shape_27.setTransform(28.3,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAzBSIAAhOIhlAAIAABOIgNAAIAAijIANAAIAABNIBlAAIAAhNIANAAIAACjg");
	this.shape_28.setTransform(10.4,11.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdBOQgMgGgIgKIACgEQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIADABIADADIAGAFIAIAEIAKAEQAFABAHAAQAJAAAHgDQAIgDAFgFQAGgFACgHQADgHAAgIQAAgJgEgFQgDgGgGgEQgFgDgIgDIgOgFIgPgEQgIgEgFgFQgGgEgDgHQgEgHAAgKQAAgJADgIQADgHAGgGQAGgGAJgDQAJgEALAAQAMAAAKAEQALAEAHAIIgCAGIgDACQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgFIgLgFQgGgCgIAAQgIAAgIADQgGACgEAEQgFAFgDAFQgCAGAAAHQAAAIADAFQAEAGAGAEIANAGIAOAGIAPAFQAIACAFAFQAHAEADAHQADAHABAKQgBALgDAIQgDAKgIAGQgGAHgKAEQgKAEgLAAQgRAAgLgGg");
	this.shape_29.setTransform(-4.7,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-13.1,-5.7,189.8,83.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA1BUQgEAAgDgBQgDgCgDgDIhPhkIABAJIAAAIIAABZIgjAAIAAinIAVAAIAEAAIADABIADACIADACIBPBlIgBgKIAAgIIAAhYIAjAAIAACng");
	this.shape.setTransform(133.9,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BUIAAinIBrAAIAAAeIhEAAIAAAnIA0AAIAAAcIg0AAIAAApIBEAAIAAAdg");
	this.shape_1.setTransform(118.8,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIA8AAQARAAAMAEQANAEAJAHQAIAIAEAKQAEAKAAAMQAAANgEAKQgEAKgJAHQgIAHgNAFQgNAEgQAAIgVAAIAAA4gAgYAAIAVAAQAOAAAHgIQAHgHAAgNQAAgGgCgFQgCgFgDgDQgEgDgFgCQgGgCgGAAIgVAAg");
	this.shape_2.setTransform(105,62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBQQgQgHgLgLQgMgNgGgPQgHgQAAgSQAAgRAHgQQAGgQAMgMQALgLAQgHQARgHASAAQAUABAQAGQAQAHAMALQALAMAHAQQAGAQAAARQAAASgGAQQgHAPgLANQgMALgQAHQgQAGgUABQgSgBgRgGgAgTgyQgJAFgGAHQgGAHgDAJQgEALAAALQAAANAEAJQADALAGAGQAGAIAJADQAJAEAKAAQAMAAAIgEQAJgDAGgIQAGgGAEgLQADgJAAgNQAAgLgDgLQgEgJgGgHQgGgHgJgFQgIgDgMAAQgKAAgJADg");
	this.shape_3.setTransform(87.9,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBUIgfhlIgCgGIgCgGIAAAGIgCAGIggBlIgkAAIg0inIAhAAQAFAAADACQAEADABADIAXBYIACAJIACALIADgLIACgJIAchYQABgDADgDQAEgCAEAAIALAAQAFAAADACQAEACABAEIAbBYIADAIIACAKIACgKIACgIIAXhYQABgDAEgDQADgCAFAAIAfAAIg0Cng");
	this.shape_4.setTransform(61.8,62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBQQgQgHgLgLQgMgNgGgPQgHgQAAgSQAAgRAHgQQAGgQAMgMQALgLAQgHQARgHASAAQAUABAQAGQAQAHAMALQALAMAHAQQAGAQAAARQAAASgGAQQgHAPgLANQgMALgQAHQgQAGgUABQgSgBgRgGgAgTgyQgJAFgGAHQgGAHgDAJQgEALAAALQAAANAEAJQADALAGAGQAGAIAJADQAJAEAKAAQAMAAAIgEQAJgDAGgIQAGgGAEgLQADgJAAgNQAAgLgDgLQgEgJgGgHQgGgHgJgFQgIgDgMAAQgKAAgJADg");
	this.shape_5.setTransform(40.1,62.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA1BUQgEAAgDgBQgDgCgDgDIhPhkIABAJIAAAIIAABZIgjAAIAAinIAVAAIAEAAIADABIADACIADACIBPBlIgBgKIAAgIIAAhYIAjAAIAACng");
	this.shape_6.setTransform(22.1,62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBUQgIgBgIgDQgIgDgGgEQgHgEgFgFIAMgSQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQACgCADAAQAEAAADADIAIAEIAKAFQAGADAHgBQALAAAGgEQAGgFAAgKQAAgGgEgEQgDgDgFgDIgLgEIgOgFQgHgCgHgDQgHgDgFgEQgFgGgDgIQgEgIAAgMQAAgJAEgJQAEgKAHgHQAIgHALgEQAKgFANAAQAIAAAHACQAIABAHADIAMAGQAGADAEAEIgKASIgDAEQgCABgDAAQgDAAgDgBIgHgEIgJgEQgFgCgGABQgKgBgGAFQgFAFAAAIQAAAFADAEIAJAFIALAFIAOAEIAOAGQAGAEAGAEQAFAFADAHQADAIAAAKQAAAMgEAKQgEALgHAHQgIAHgLAFQgMAFgNAAQgIgBgIgCg");
	this.shape_7.setTransform(2.3,62.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_8.setTransform(-7.5,62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBSIAAijIBhAAIAAAJIhWAAIAABDIBHAAIAAAJIhHAAIAABEIBXAAIgBAKg");
	this.shape_9.setTransform(169.6,36.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBOQgQgGgLgLQgLgLgGgQQgGgPAAgTQAAgSAGgPQAGgQALgLQAKgLAPgGQAPgGASAAQAKAAAIABQAIABAGADQAIACAFAEQAHAEAFAFIgEAFQgBADgDgCIgGgDIgJgGIgNgFQgJgCgMAAQgPAAgNAGQgNAEgJAKQgJAKgFANQgFAOAAAQQAAARAFAOQAFANAJAKQAKAKANAFQAOAFAPAAIANgBIAMgDIAMgDIAKgGIAAgsIgfAAIgDgBIAAgCIAAgHIAtAAIAAA7QgMAIgPAFQgNAFgRAAQgTAAgPgGg");
	this.shape_10.setTransform(153.6,36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABABSIgCgBIgDgCIgTgwIhQAAIgTAwIgBACIgDABIgJAAIBDijIALAAIBDCjgAAAhAIgDAFIghBSIBJAAIgihSIgDgKIAAAFg");
	this.shape_11.setTransform(137.6,36.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsBSIAAijIAMAAIAACZIBNAAIAAAKg");
	this.shape_12.setTransform(125.2,36.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsBSIAAijIAMAAIAACZIBNAAIAAAKg");
	this.shape_13.setTransform(113.5,36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFBSIAAijIALAAIAACjg");
	this.shape_14.setTransform(103.5,36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEBSIhEijIAKAAIACABIABACIA4CHIADAFIAAAGIACgGIABgFIA4iHIACgCIADgBIAJAAIhECjg");
	this.shape_15.setTransform(92.9,36.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFBSIAAhDIg9hgIALAAIADAAIABADIAvBLIADAFIABAEIACgEIADgFIAvhLIACgCIADgBIAKAAIg9BgIAABDg");
	this.shape_16.setTransform(72.1,36.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABABSIgDgBIgCgCIgTgwIhQAAIgSAwIgCACIgDABIgJAAIBDijIALAAIBDCjgAgBhAIgCAFIghBSIBJAAIghhSIgEgKIgBAFg");
	this.shape_17.setTransform(57.6,36.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsBSIAAijIAMAAIAACZIBNAAIAAAKg");
	this.shape_18.setTransform(45.2,36.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBSIAAijIArAAQAcAAAPANQAPAMAAAYQAAAKgFAKQgEAJgHAFQgIAHgKADQgLADgNAAIgeAAIAABDgAglAGIAeAAQAKAAAIgCQAJgDAGgFQAGgFAEgIQACgHAAgIQAAgUgLgKQgLgJgXgBIgeAAg");
	this.shape_19.setTransform(32.4,36.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdBOQgMgGgJgKIADgEQABgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIACABIAEADIAGAFIAIAEIAKADQAFACAHAAQAJAAAHgDQAIgDAGgFQAEgFAEgHQACgHAAgIQAAgJgDgFQgEgGgFgEQgHgDgHgDIgOgFIgPgEQgHgEgGgFQgGgEgEgHQgDgHAAgKQAAgJADgIQADgHAGgGQAGgGAJgEQAJgDAKAAQANAAAKAEQAKAEAJAJIgDAFIgDACQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBIgGgEIgKgFQgHgCgJAAQgIAAgHACQgGADgFAEQgEAFgDAFQgCAGAAAHQAAAIADAFQAEAGAGAEIANAGIAOAGIAPAFQAHACAHAFQAFAEAEAHQAEAHgBAKQABAKgEAJQgEAKgGAGQgHAHgKAEQgJAEgMAAQgQAAgMgGg");
	this.shape_20.setTransform(18.6,36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFBSIAAijIALAAIAACjg");
	this.shape_21.setTransform(9.5,36.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhEBSIAAijIA8AAQAQAAAPAGQAOAFALALQAKALAGAPQAFAPAAASQAAATgFAPQgGAQgKAKQgLAKgOAHQgPAFgQAAgAg4BIIAwAAQAOAAAMgEQAMgGAJgJQAIgJAFgNQAFgOAAgRQAAgQgFgNQgFgOgIgKQgJgIgMgFQgMgFgOgBIgwAAg");
	this.shape_22.setTransform(-1.9,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAzBSIgxiNIgBgHIgBAHIgwCNIgLAAIg0ijIAJAAQADAAABAEIArCFIACALIABgGIACgFIAuiGIACgCIACgBIADAAIACABIACACIAuCGIACAFIABAGIABgGIABgFIAqiGIABgCIADgBIAIAAIgzCjg");
	this.shape_23.setTransform(167.6,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxBSIAAijIBiAAIAAAJIhVAAIAABDIBHAAIAAAJIhHAAIAABEIBVAAIAAAKg");
	this.shape_24.setTransform(149.8,11.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA6BSIgCAAIgDgDIhpiMIAAAGIAACJIgLAAIAAijIAGAAIADAAIACACIBpCNIAAgGIAAiJIALAAIAACjg");
	this.shape_25.setTransform(133.7,11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhEBSIAAijIA8AAQAQAAAPAFQAOAGALALQAKAKAGAQQAFAPAAASQAAATgFAPQgGAQgKAKQgLAKgOAGQgPAGgQAAgAg4BIIAwAAQAOAAAMgEQAMgFAJgKQAIgJAFgNQAFgOAAgRQAAgQgFgOQgFgNgIgJQgJgKgMgFQgMgEgOgBIgwAAg");
	this.shape_26.setTransform(110.3,11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA6BSIgDAAIgBgDIhqiMIAAAGIAACJIgKAAIAAijIAGAAIACAAIACACIBqCNIgBgGIAAiJIAKAAIAACjg");
	this.shape_27.setTransform(92.2,11.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABABSIgDgBIgBgCIgTgwIhQAAIgTAwIgCACIgDABIgJAAIBDijIALAAIBDCjgAgBhAIgBAFIgiBSIBIAAIgghSIgEgKIgBAFg");
	this.shape_28.setTransform(75.9,11.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAvBSIgEAAIgCgDIg0hCIgCgDIgCgCIgDAAIgEgBIgWAAIAABLIgMAAIAAijIArAAQAbAAAOALQAOALAAAVQAAAJgDAIQgDAIgHAGQgGAFgIAEQgJADgKABIAEAFIA5BHgAgsAAIAdAAQALAAAHgDQAJgCAGgFQAGgFADgHQADgGAAgKQAAgRgLgIQgMgJgUAAIgfAAg");
	this.shape_29.setTransform(62.2,11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag1BSIAAijIAvAAQANAAALADQAKADAGAFQAHAFAEAIQADAIAAAJQAAAHgCAGQgDAGgEAGQgFAFgFADQgHAEgIACQATACALAKQALAKAAAQQAAALgFAIQgDAIgHAGQgHAGgLADQgKADgMAAgAgpBJIApAAQAVAAAKgKQALgJAAgRQAAgIgDgGQgCgHgGgDQgGgFgHgCQgIgDgKABIgpAAgAgpgEIAjAAQAKgBAIgCQAJgDAFgFQAFgEACgGQADgHAAgGQAAgRgLgIQgKgJgVAAIgjAAg");
	this.shape_30.setTransform(47.4,11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgwBSIAAijIBhAAIAAAJIhVAAIAABDIBHAAIAAAJIhHAAIAABEIBWAAIgBAKg");
	this.shape_31.setTransform(27.1,11.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA0BSIAAhOIhnAAIAABOIgMAAIAAijIAMAAIAABNIBnAAIAAhNIALAAIAACjg");
	this.shape_32.setTransform(11,11.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFBSIAAiaIg6AAIAAgJIB/AAIAAAJIg6AAIAACag");
	this.shape_33.setTransform(-4.5,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-13.5,-5.7,195.6,83.5), null);


(lib.pc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc3, new cjs.Rectangle(0,0,420,280), null);


(lib.pc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(0,0,420,280), null);


(lib.pc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1Copy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(0,0,420,280), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,64,94), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrBIIAAiPIBXAAIAAAQIhEAAIAAAwIA3AAIAAAOIg3AAIAAAxIBEAAIAAAQg");
	this.shape.setTransform(130.8,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBIQgFAAgDgEIgkg0IgEgDIgGgBIgPAAIAAA8IgTAAIAAiPIAoAAQANAAAKADQAKADAGAFQAHAFADAIQADAHAAAJQAAAIgCAGQgDAHgFAFQgEAFgGADQgHAEgJACQAEACADAEIAqA5gAghgBIAUAAQAJAAAGgCQAGgCAEgEQAEgEADgFQACgFAAgGQAAgNgJgHQgIgGgQAAIgVAAg");
	this.shape_1.setTransform(119,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBEQgNgGgJgJQgJgKgFgNQgGgOAAgQQAAgPAGgOQAFgNAJgKQAJgJANgGQANgFAPAAQAQAAANAFQANAGAJAJQAKAKAFANQAFAOAAAPQAAAQgFAOQgFANgKAKQgJAJgNAGQgNAFgQAAQgPAAgNgFgAgUg0QgJAEgHAIQgHAHgDAKQgEALAAAMQAAANAEALQADAKAHAHQAHAIAJAEQAKADAKAAQAMAAAJgDQAJgEAHgIQAHgHADgKQAEgLAAgNQAAgMgEgLQgDgKgHgHQgHgIgJgEQgJgDgMAAQgKAAgKADg");
	this.shape_2.setTransform(103.8,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5BIIAAhpIAAgEIABgFIgxBZQgCAEgFAAIgCAAQgEAAgDgEIgyhZIAAAFIAAAEIAABpIgRAAIAAiPIAOAAIAEABIAEADIAxBXIADAFIABAFIABgFIADgFIAxhXIACgDIAEgBIAOAAIAACPg");
	this.shape_3.setTransform(86.6,19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwBIIgDgBIgEgDIhShrIABAFIAAAFIAABlIgRAAIAAiPIAKAAIAEABIACADIBSBrIAAgFIAAgFIAAhlIARAAIAACPg");
	this.shape_4.setTransform(66,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBIQgEAAgDgEIglg0IgDgDIgGgBIgPAAIAAA8IgTAAIAAiPIApAAQAMAAAKADQAKADAGAFQAHAFADAIQADAHAAAJQAAAIgDAGQgCAHgEAFQgFAFgHADQgGAEgIACQADACADAEIAqA5gAghgBIAVAAQAIAAAFgCQAHgCAFgEQAEgEACgFQACgFAAgGQAAgNgIgHQgJgGgPAAIgWAAg");
	this.shape_5.setTransform(52.8,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BIQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgDIgNgjIg/AAIgOAjIgCADQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgPAAIA5iPIATAAIA5CPgAgBgtIgCAGIgXA6IA1AAIgXg6IgEgNIgBAHg");
	this.shape_6.setTransform(38.8,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBIIAAiPIBXAAIAAAQIhEAAIAAAwIA3AAIAAAOIg3AAIAAAxIBEAAIAAAQg");
	this.shape_7.setTransform(26.5,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBIIAAiPIAUAAIAAB+IA9AAIAAARg");
	this.shape_8.setTransform(15.9,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D41B29").s().p("ArjC+IAAl7IXHAAIAAF7g");
	this.shape_9.setTransform(74,19);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CB9928").s().p("ArjC+IAAl7IXHAAIAAF7g");
	this.shape_10.setTransform(74,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,38);


// stage content:
(lib.Village_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_830 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(830).call(this.frame_830).wait(3));

	// Layer 2
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(319).to({scaleX:0.61,scaleY:0.61},10,cjs.Ease.get(-1)).wait(151).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(298).to({scaleX:0.61,scaleY:0.61},10,cjs.Ease.get(-1)).wait(36));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,266,1,1,0,0,0,74,18.9);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).to({y:216},15,cjs.Ease.get(1)).wait(125).to({y:276},15,cjs.Ease.get(-1)).to({_off:true},1).wait(322).to({_off:false,y:266},0).to({y:216},15,cjs.Ease.get(1)).wait(16));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.4,132.6,1,1,0,0,0,99.5,46.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(319).to({_off:false},0).to({x:106.4,alpha:1},15,cjs.Ease.get(1)).wait(125).to({x:136.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(322).to({_off:false},0).to({x:106.4,alpha:1},15,cjs.Ease.get(1)).wait(21));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.5,168.1,1,1,0,0,0,81.8,36);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({x:102.5,alpha:1},15,cjs.Ease.get(-1)).wait(130).to({x:122.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(319).to({_off:false,x:132.5},0).to({x:102.5,alpha:1},15,cjs.Ease.get(-1)).wait(128).to({x:122.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(35));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(135.5,168.1,1,1,0,0,0,84.3,36);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:105.5,alpha:1},15,cjs.Ease.get(1)).wait(126).to({x:125.5,alpha:0},14,cjs.Ease.get(0.98)).to({_off:true},1).wait(324).to({_off:false,x:135.5},0).to({x:105.5,alpha:1},15,cjs.Ease.get(1)).wait(126).to({x:125.5,alpha:0},14,cjs.Ease.get(0.98)).to({_off:true},1).wait(193));

	// plate
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025589").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(2,85,137,0.957)").s().p("A3bOkIAA9HMAu3AAAIAAdHg");
	this.shape_1.setTransform(150,144.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(2,85,137,0.925)").s().p("A3bLBIAA2BMAu3AAAIAAWBg");
	this.shape_2.setTransform(150,157.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(2,85,137,0.906)").s().p("A3bI5IAAxxMAu3AAAIAARxg");
	this.shape_3.setTransform(150,166.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(2,85,137,0.898)").s().p("A3bILIAAwVMAu3AAAIAAQVg");
	this.shape_4.setTransform(150,168.8);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(2,85,137,0.898)").s().p("A2PILIAAwVMAsfAAAIAAQVg");
	this.shape_5.setTransform(142.4,168.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(2,85,137,0.898)").s().p("A1DILIAAwVMAqHAAAIAAQVg");
	this.shape_6.setTransform(134.8,168.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(2,85,137,0.898)").s().p("Az3ILIAAwVMAnvAAAIAAQVg");
	this.shape_7.setTransform(127.2,168.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(2,85,137,0.898)").s().p("AyrILIAAwVMAlXAAAIAAQVg");
	this.shape_8.setTransform(119.6,168.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(2,85,137,0.898)").s().p("AxfILIAAwVMAi/AAAIAAQVg");
	this.shape_9.setTransform(112,168.8);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(2,85,137,0.898)").s().p("AzoILIAAwVMAnRAAAIAAQVg");
	this.shape_10.setTransform(125.7,168.8);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(2,85,137,0.898)").s().p("A1TILIAAwVMAqmAAAIAAQVg");
	this.shape_11.setTransform(136.3,168.8);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(2,85,137,0.898)").s().p("A2fILIAAwVMAs+AAAIAAQVg");
	this.shape_12.setTransform(143.9,168.8);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(2,85,137,0.898)").s().p("A3MILIAAwVMAuZAAAIAAQVg");
	this.shape_13.setTransform(148.5,168.8);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(2,85,137,0.933)").s().p("A3bMRIAA4hMAu3AAAIAAYhg");
	this.shape_14.setTransform(150,153);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(2,85,137,0.965)").s().p("A3bPcIAA+3MAu3AAAIAAe3g");
	this.shape_15.setTransform(150,140.8);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(2,85,137,0.984)").s().p("A3bRuMAAAgjbMAu3AAAMAAAAjbg");
	this.shape_16.setTransform(150,132);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(2,85,137,0.996)").s().p("A3bTFMAAAgmJMAu3AAAMAAAAmJg");
	this.shape_17.setTransform(150,126.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(2,85,137,0.902)").s().p("A3bIoIAAxPMAu3AAAIAARPg");
	this.shape_18.setTransform(150,167.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(2,85,137,0.914)").s().p("A3bJ/IAAz9MAu3AAAIAAT9g");
	this.shape_19.setTransform(150,161.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(2,85,137,0.898)").s().p("AxvILIAAwVMAjfAAAIAAQVg");
	this.shape_20.setTransform(113.5,128.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(2,85,137,0.898)").s().p("AydILIAAwVMAk7AAAIAAQVg");
	this.shape_21.setTransform(118.1,128.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(2,85,137,0.898)").s().p("AzqILIAAwVMAnVAAAIAAQVg");
	this.shape_22.setTransform(125.8,128.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(2,85,137,0.898)").s().p("A1WILIAAwVMAqtAAAIAAQVg");
	this.shape_23.setTransform(136.6,128.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(2,85,137,0.898)").s().p("A3gILIAAwVMAvBAAAIAAQVg");
	this.shape_24.setTransform(150.5,128.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(2,85,137,0.902)").s().p("A3gIoIAAxPMAvBAAAIAARPg");
	this.shape_25.setTransform(150.5,128.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(2,85,137,0.914)").s().p("A3gJ/IAAz9MAvBAAAIAAT9g");
	this.shape_26.setTransform(150.4,128.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(2,85,137,0.933)").s().p("A3fMRIAA4hMAu/AAAIAAYhg");
	this.shape_27.setTransform(150.3,127.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(2,85,137,0.965)").s().p("A3dPcIAA+3MAu7AAAIAAe3g");
	this.shape_28.setTransform(150.2,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},140).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},140).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_18,p:{y:167.1}}]},1).to({state:[{t:this.shape_19,p:{y:161.8}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_19,p:{y:128.2}}]},1).to({state:[{t:this.shape_18,p:{y:128.7}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},140).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},140).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},138).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_18,p:{y:167.1}}]},1).to({state:[{t:this.shape_19,p:{y:161.8}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_19,p:{y:128.2}}]},1).to({state:[{t:this.shape_18,p:{y:128.7}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(158).to({_off:false},0).to({_off:true},1).wait(159).to({_off:false},0).to({_off:true},1).wait(159).to({_off:false},0).wait(1).to({_off:true},1).wait(158).to({_off:false},0).to({_off:true},1).wait(157).to({_off:false},0).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).to({_off:true},1).wait(159).to({_off:false},0).to({_off:true},1).wait(149).to({_off:false},0).to({_off:true},1).wait(169).to({_off:false},0).to({_off:true},1).wait(159).to({_off:false},0).to({_off:true},1).wait(147).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,y:128.8},0).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).wait(140).to({_off:true},1).wait(4).to({_off:false,scaleX:1.34,x:150},0).to({_off:true},1).wait(14).to({_off:false,scaleX:1,x:112},0).wait(140).to({_off:true},1).wait(14).to({_off:false,scaleX:1.34,x:150,y:128.8},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1,x:112},0).wait(140).to({_off:true},1).wait(19).to({_off:false,y:168.8},0).wait(140).to({_off:true},1).wait(4).to({_off:false,scaleX:1.34,x:150},0).to({_off:true},1).wait(14).to({_off:false,scaleX:1,x:112},0).wait(138).to({_off:true},1).wait(19).to({_off:false,y:128.8},0).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(150).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false,y:128.8},0).to({_off:true},1).wait(301).to({_off:false,y:168.8},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(139).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false,y:128.8},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(151).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(143).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false,y:128.8},0).to({_off:true},1).wait(303).to({_off:false,y:168.8},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(141).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false,y:128.8},0).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(152).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(145).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,y:128.8},0).to({_off:true},1).wait(305).to({_off:false,y:168.8},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(143).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,y:128.8},0).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(153).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(147).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false,y:128.8},0).to({_off:true},1).wait(307).to({_off:false,y:168.8},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(145).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false,y:128.8},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(155).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(153).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:127.4},0).to({_off:true},1).wait(313).to({_off:false,y:153},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(151).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:127.4},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(156).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(155).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:126.4},0).to({_off:true},1).wait(315).to({_off:false,y:140.8},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(153).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:126.4},0).to({_off:true},1).wait(34));

	// pc3
	this.instance_5 = new lib.pc3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(121.1,115,1,1,0,0,0,210,140);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(319).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:182.1,y:124},160).to({_off:true},1).wait(317).to({_off:false,scaleX:1,scaleY:1,x:121.1,y:115},0).to({scaleX:0.99,scaleY:0.99,x:129.7,y:116.3},21).wait(15));

	// pc2
	this.instance_6 = new lib.pc2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(204.1,118,1,1,0,0,0,209.8,139.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:123.6,y:125.6},160).to({_off:true},1).wait(319).to({_off:false,scaleX:1,scaleY:1,x:204.1,y:118},0).to({scaleX:0.9,scaleY:0.9,x:123.6,y:125.6},158).to({_off:true},1).wait(35));

	// pc1
	this.instance_7 = new lib.pc1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(205,115,1,1,0,0,0,210,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:209.8,scaleX:0.91,scaleY:0.91,x:120.3,y:124.7},159).to({_off:true},1).wait(320).to({_off:false,regX:210,scaleX:1,scaleY:1,x:205,y:115},0).to({regX:209.8,scaleX:0.91,scaleY:0.91,x:120.3,y:124.7},159).to({_off:true},1).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,100,420,280);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Village_AdWords_300x250_atlas_.png", id:"Village_AdWords_300x250_atlas_"},
		{src:"images/Village_AdWords_300x250_atlas_2.png", id:"Village_AdWords_300x250_atlas_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;