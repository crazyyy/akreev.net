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



(lib.bgpct = function() {
	this.initialize(img.bgpct);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,247);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AAxBhIgxhYIgvBYIgNAAIA4hiIgzhfIALAAIAsBUIAvhUIALAAIg0BfIA3Big");
	this.shape.setTransform(191.6,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFBhIAAjBIALAAIAADBg");
	this.shape_1.setTransform(183,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApBhIhUivIgBAAIAACvIgLAAIAAjBIAPAAIBUCvIABAAIAAivIALAAIAADBg");
	this.shape_2.setTransform(173.7,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBgQgMgGgIgLQgJgMgEgTQgFgUAAgcQAAgcAFgTQAFgTAIgMQAJgMALgFQAMgFAMAAQAPAAALAFQAMAFAIAMQAIAMAFATQAEATAAAcQAAAggGAUQgGATgJALQgJALgLAEQgLAEgLAAQgNAAgLgFgAgXhUQgKAHgGAMQgGAMgDARQgCARAAATQAAAUACARQACARAGAMQAGAMAKAGQAKAHAOAAQAcAAAMgWQAMgWAAgvQAAgTgDgRQgCgQgGgNQgGgMgKgHQgKgHgPAAQgNAAgKAHg");
	this.shape_3.setTransform(159.3,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+BhIAAizIgBAAIg4CzIgJAAIg4izIgBAAIAACzIgMAAIAAjBIATAAIA3CuIAAAAIA2iuIATAAIAADBg");
	this.shape_4.setTransform(143.1,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBhIAAhiIhVAAIAABiIgLAAIAAjBIALAAIAABVIBVAAIAAhVIALAAIAADBg");
	this.shape_5.setTransform(127.1,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBhIAAi3Ig1AAIAAgKIBzAAIAAAKIg0AAIAAC3g");
	this.shape_6.setTransform(114.2,29.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBhIAAjBIAMAAIAAC3IBRAAIAAAKg");
	this.shape_7.setTransform(103.1,29.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA3BhIgSg8IhJAAIgSA8IgMAAIA9jBIANAAIA7DBgAghAcIBDAAIghhxIgBAAg");
	this.shape_8.setTransform(90.2,29.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBhIAAjBIBcAAIAAAKIhQAAIAABOIBLAAIAAAJIhLAAIAABWIBTAAIAAAKg");
	this.shape_9.setTransform(78.4,29.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBhIAAhiIhVAAIAABiIgLAAIAAjBIALAAIAABVIBVAAIAAhVIALAAIAADBg");
	this.shape_10.setTransform(64.9,29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA+BhIAAizIgBAAIg3CzIgKAAIg5izIAAAAIAACzIgMAAIAAjBIATAAIA2CuIABAAIA2iuIASAAIAADBg");
	this.shape_11.setTransform(42.5,29.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBgQgMgGgIgLQgJgMgEgTQgFgUAAgcQAAgcAFgTQAFgTAIgMQAJgMALgFQAMgFAMAAQAPAAALAFQAMAFAIAMQAIAMAFATQAEATAAAcQAAAggGAUQgGATgJALQgJALgLAEQgLAEgLAAQgNAAgLgFgAgXhUQgKAHgGAMQgGAMgDARQgCARAAATQAAAUACARQACARAGAMQAGAMAKAGQAKAHAOAAQAcAAAMgWQAMgWAAgvQAAgTgDgRQgCgQgGgNQgGgMgKgHQgKgHgPAAQgNAAgKAHg");
	this.shape_12.setTransform(26.2,29.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqBhIgEgLIgBgPIAAgUQAAgKgBgJQgCgHgFgGQgEgFgHgDQgIgDgLgBIgqAAIAABaIgLAAIAAjBIA3AAQALAAAJACQAIADAHAHQAHAGAEAKQADAJAAANQAAAUgKANQgKANgTACIAAABQAMABAHADQAIAEAEAHQAEAGABAIQACAJAAAKIAAAVIABANQACAHAEAFgAgrgBIAlAAIAPgCQAJgCAGgEQAGgFAFgJQADgJAAgOQABgTgKgLQgLgLgSAAIgrAAg");
	this.shape_13.setTransform(12.5,29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguBhIAAjBIBdAAIAAAKIhRAAIAABOIBLAAIAAAJIhLAAIAABgg");
	this.shape_14.setTransform(0.5,29.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbBfQgLgFgGgIQgGgHgDgJQgCgJAAgHIAAgNIAMAAIAAAKQAAAKADAIQADAIAFAGQAGAFAIAEQAIADAKAAQAKAAAIgDQAJgEAFgGQAGgGADgIQADgIAAgJQAAgJgCgHQgCgHgFgFQgEgEgHgDIgOgHIgWgGQgTgHgKgLQgKgKAAgUQAAgMADgJQAEgKAHgGQAHgHAJgDQAKgEALAAQAaAAAOAOQAMAPAAAYIgLAAQAAgUgKgMQgJgMgVAAQgIAAgHACQgHACgHAFQgFAFgEAIQgDAHAAAMQAAAQAIAIQAIAJAMAEIAcAKIARAHQAIAEAFAGQAEAGADAIQADAIAAAKQAAANgFAKQgEALgHAGQgIAIgKADQgLAEgLAAQgQAAgLgGg");
	this.shape_15.setTransform(162.5,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBiIAAjDIBcAAIAAALIhQAAIAABOIBLAAIAAAJIhLAAIAABWIBTAAIAAALg");
	this.shape_16.setTransform(150.7,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaBeQgMgHgHgNQgHgNgDgTQgEgSAAgYQAAgWAEgTQADgSAIgNQAHgNAMgIQAMgHAQAAQARAAALAHQAKAGAGAJQAGAKACAKQACAKAAAHIgLAAQAAgKgDgIQgCgKgGgGQgFgIgIgEQgIgEgLAAQgNAAgKAHQgKAGgGAMQgGAMgDARQgCARAAAUQAAATACARQACARAGAMQAFAMAKAHQAKAHAOAAQAOAAAJgHQAJgHAFgKQAFgKACgJIACgQIAMAAQAAAJgDALQgCAMgHALQgHALgLAHQgMAIgSAAQgPAAgLgHg");
	this.shape_17.setTransform(137.6,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqBiIgEgLIgBgQIAAgUQAAgKgBgIQgCgJgFgFQgEgGgHgDQgIgCgLAAIgqAAIAABaIgLAAIAAjDIA3AAQALAAAJAEQAIADAHAGQAHAGADAJQAEALAAANQAAATgKAOQgKAMgTACIAAAAQAMACAHAEQAIADAEAGQAEAHABAJQACAHAAALIAAAUIABAPQACAFADAHgAgrgBIAlAAIAPgBQAJgCAGgFQAGgFAFgJQADgJAAgNQABgUgLgLQgKgLgSAAIgrAAg");
	this.shape_18.setTransform(124.2,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTBhQgJgDgJgGQgHgGgEgLQgFgMAAgRIAAiMIALAAIAACOQAAAVAKAMQAKANAWAAQAVAAALgNQALgMgBgVIAAiOIAMAAIAACMQAAAQgFALQgEAMgIAGQgIAHgJACQgKADgKAAQgJAAgKgCg");
	this.shape_19.setTransform(110.2,3.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYBgQgMgGgIgLQgJgMgEgTQgFgUAAgcQAAgcAFgTQAFgTAIgMQAJgMALgFQAMgFAMAAQAPAAALAFQAMAFAIAMQAIAMAFATQAEATAAAcQAAAggGAUQgGATgJALQgJALgLAEQgLAEgLAAQgNAAgLgFgAgXhUQgKAHgGAMQgGAMgDARQgCARAAATQAAAUACARQACARAGAMQAGAMAKAGQAKAHAOAAQAcAAAMgWQAMgWAAgvQAAgTgDgRQgCgQgGgNQgGgMgKgHQgKgHgPAAQgNAAgKAHg");
	this.shape_20.setTransform(96,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbBfQgLgFgGgIQgHgHgCgJQgCgJAAgHIAAgNIALAAIAAAKQAAAKAEAIQADAIAFAGQAFAFAJAEQAIADAKAAQAKAAAIgDQAIgEAHgGQAFgGAEgIQACgIAAgJQAAgJgBgHQgDgHgFgFQgFgEgGgDIgPgHIgVgGQgTgHgLgLQgJgKgBgUQAAgMAFgJQADgKAHgGQAHgHAKgDQAJgEALAAQAbAAANAOQAMAPAAAYIgLAAQAAgUgKgMQgKgMgUAAQgHAAgIACQgIACgGAFQgFAFgEAIQgDAHAAAMQAAAQAIAIQAIAJANAEIAbAKIASAHQAGAEAFAGQAGAGACAIQADAIAAAKQAAANgEAKQgFALgHAGQgIAIgKADQgLAEgLAAQgQAAgLgGg");
	this.shape_21.setTransform(82.1,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvBiIAAjDIBcAAIAAALIhQAAIAABOIBLAAIAAAJIhLAAIAABWIBTAAIAAALg");
	this.shape_22.setTransform(70.3,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAqBiIgDgLIgCgQIAAgUQAAgKgCgIQgBgJgEgFQgFgGgIgDQgHgCgLAAIgqAAIAABaIgMAAIAAjDIA4AAQALAAAJAEQAIADAHAGQAHAGADAJQAEALAAANQAAATgKAOQgKAMgTACIAAAAQAMACAIAEQAHADAEAGQAEAHACAJQABAHAAALIAAAUIABAPQABAFAEAHgAgrgBIAlAAIAPgBQAIgCAHgFQAHgFADgJQAEgJABgNQAAgUgLgLQgKgLgSAAIgrAAg");
	this.shape_23.setTransform(57.4,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArBiIAAhiIhVAAIAABiIgLAAIAAjDIALAAIAABWIBVAAIAAhWIALAAIAADDg");
	this.shape_24.setTransform(36.6,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEBiIAAi4Ig0AAIAAgLIByAAIAAALIg0AAIAAC4g");
	this.shape_25.setTransform(23.7,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFBiIAAjDIALAAIAADDg");
	this.shape_26.setTransform(15.6,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAkBiIgkiyIAAAAIgkCyIgNAAIgrjDIALAAIAmCyIAAAAIAliyIANAAIAlCyIAAAAIAliyIAMAAIgqDDg");
	this.shape_27.setTransform(3.8,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt33, new cjs.Rectangle(-7.8,-13.5,207.9,62), null);


(lib.txt32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnDDIAAmFIDPAAIAAA1IiRAAIAABsICIAAIAAAzIiIAAIAACxg");
	this.shape.setTransform(200.7,76);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpDDIAAmFIA+AAIAAFQICVAAIAAA1g");
	this.shape_1.setTransform(176,76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqDDIAAmFIDRAAIAAA1IiTAAIAABsICKAAIAAAzIiKAAIAAB8ICYAAIAAA1g");
	this.shape_2.setTransform(150.5,76);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/DAQgYgLgNgRQgMgSgGgUQgFgVAAgVIAAgJIA/AAIAAAKQAAAjAPASQAQASAgAAQATAAANgIQAOgIAGgNQAHgNAAgPQgBgegOgQQgPgQgagHIgqgPQgqgPgUgZQgUgZABgpQAAgkAPgYQAPgZAbgNQAbgNAkAAQAlABAWAKQAXAKALAQQALAPADASQAEASgBAPIAAAJIg+AAIAAgIQAAgbgNgPQgNgOgcgBQgNAAgMAGQgMAFgHANQgIAMAAAVQAAAYAOAPQANAPAfAMIAqAPQApAOATAYQATAZAAAoQgBApgPAaQgQAagdAMQgdAMgmAAQgkAAgXgLg");
	this.shape_3.setTransform(122.3,75.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4DDQgEgFgDgJQgCgJgBgLIgCgjIAAgnQgBgggNgPQgMgOgfAAIgyAAIAACpIg+AAIAAmFICIAAQAbAAAXAKQAWAKANAWQAOAWAAAlQAAAmgRAaQgQAaggAEIAAABQAdADAPASQAPATACAoIABAoIABAnQABAPAGAIQAFAHAHAEgAg/gUIAxAAQAdAAAQgRQAQgRAAgeQABgfgPgQQgOgQgeAAIg0AAg");
	this.shape_4.setTransform(94.7,75.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAADHQgkAAgbgMQgbgMgOgbQgOgbAAgtIAAkSIA+AAIAAEXQAAAlAOARQAPARAbAAQAcAAAPgRQAOgRAAglIAAkXIA+AAIAAESQAAAtgOAbQgOAbgbAMQgZAMgkAAIgDAAg");
	this.shape_5.setTransform(64.1,76.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAADLQhCAAgfgxQgfgyAAhoQAAhnAfgxQAfgyBCAAQBDAAAfAyQAfAxAABnQAABogfAyQgeAxhCAAIgCAAgAgZiVQgMAGgJAQQgJAQgGAfQgFAfAAAxQAAAxAFAfQAGAfAJARQAJAQAMAGQAMAGANAAQAOAAAMgGQAMgGAJgQQAJgRAGgfQAFgfAAgxQAAgxgFgfQgGgfgJgQQgJgQgMgGQgMgGgOAAQgNAAgMAGg");
	this.shape_6.setTransform(34.2,75.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggDDIAAiZIhljsIBGAAIBACoIBEioIBBAAIhpDsIAACZg");
	this.shape_7.setTransform(5.9,76);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdDDIAAlRIhdAAIAAg0ID1AAIAAA0IhbAAIAAFRg");
	this.shape_8.setTransform(172.4,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhIC1QgcgVgMgtQgMgtABhGQgBhEAMgtQAMgtAcgWQAdgWAwAAQApABAYANQAYANALAUQALATAEAVQACAUAAAQIAAAHIg+AAIAAgHQABgSgFgSQgFgRgMgMQgMgLgWAAQgXAAgOAMQgPANgHAiQgIAhAAA/QAAA9AIAiQAHAjAPANQAOAOAXgBQATAAALgKQAMgJAGgOQAGgPABgQQADgQgBgOIAAgHIA+AAIAAAJQABAjgLAgQgLAggaATQgbAUgtABQgxAAgcgWg");
	this.shape_9.setTransform(146.2,27.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhqDDIAAmFIDRAAIAAA0IiTAAIAABsICKAAIAAA0IiKAAIAAB9ICYAAIAAA0g");
	this.shape_10.setTransform(119.1,27.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdDDIAAlRIhdAAIAAg0ID1AAIAAA0IhbAAIAAFRg");
	this.shape_11.setTransform(92.5,27.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAADLQhCAAgfgxQgfgyAAhoQAAhnAfgxQAfgyBCAAQBDAAAfAyQAfAxAABnQAABogfAyQgeAxhCAAIgCAAgAgZiVQgMAGgJAQQgJAQgGAfQgFAfAAAxQAAAxAFAfQAGAfAJARQAJAQAMAGQAMAGANAAQAOAAAMgGQAMgGAJgQQAJgRAGgfQAFgfAAgxQAAgxgFgfQgGgfgJgQQgJgQgMgGQgMgGgOAAQgNAAgMAGg");
	this.shape_12.setTransform(64.6,27.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA4DDQgEgFgDgJQgCgJgBgLIgCgjIAAgnQgBgggNgPQgMgOgfAAIgyAAIAACpIg+AAIAAmFICIAAQAcAAAWAKQAWAKANAWQANAWAAAlQAAAmgQAaQgQAaggAEIAAABQAdADAPASQAPATACAoIABAoIABAnQABAPAGAIQAFAHAGAEgAg/gUIAxAAQAdAAAQgRQARgRgBgeQABgfgOgQQgPgQgdAAIg1AAg");
	this.shape_13.setTransform(36,27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhyDDIAAmFIB6AAQAlAAAYAPQAYAOALAZQALAaAAAiQAAA1gdAdQgdAgg4AAIg2AAIAAChgAg1gMIAtAAQAQAAAOgGQAOgHAIgPQAJgPAAgYQABgggPgSQgPgSgkAAIgpAAg");
	this.shape_14.setTransform(7.6,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt32, new cjs.Rectangle(-9.8,-7.6,225,117.5), null);


(lib.txt31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFBEIAAgcIALAAIAAAcgAgFgnIAAgcIALAAIAAAcg");
	this.shape.setTransform(228.8,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBiIAAjDIBcAAIAAALIhQAAIAABOIBLAAIAAAJIhLAAIAABWIBTAAIAAALg");
	this.shape_1.setTransform(220.3,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBiIgDgLIgBgQIAAgUQAAgKgDgIQgBgJgEgFQgFgGgIgDQgHgCgLAAIgqAAIAABaIgMAAIAAjDIA5AAQAKAAAJAEQAJADAGAGQAHAGAEAJQADALAAANQAAATgKAOQgKAMgTACIAAAAQAMACAIAEQAHADAEAGQAEAHACAJQABAHAAALIAAAUIABAPQABAFAFAHgAgrgBIAlAAIAPgBQAJgCAGgFQAGgFAEgJQAFgJAAgNQgBgUgJgLQgLgLgSAAIgrAAg");
	this.shape_2.setTransform(207.5,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBgQgMgGgIgLQgJgMgEgTQgFgUAAgcQAAgcAFgTQAFgTAIgMQAJgMALgFQAMgFAMAAQAPAAALAFQAMAFAIAMQAIAMAFATQAEATAAAcQAAAggGAUQgGATgJALQgJALgLAEQgLAEgLAAQgNAAgLgFgAgXhUQgKAHgGAMQgGAMgDARQgCARAAATQAAAUACARQACARAGAMQAGAMAKAGQAKAHAOAAQAcAAAMgWQAMgWAAgvQAAgTgDgRQgCgQgGgNQgGgMgKgHQgKgHgPAAQgNAAgKAHg");
	this.shape_3.setTransform(192.9,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBeQgMgHgHgNQgHgNgDgTQgEgSAAgYQAAgWAEgTQADgSAIgNQAHgNAMgIQAMgHAQAAQARAAALAHQAKAGAGAJQAGAKACAKQACAKAAAHIgLAAQAAgKgDgIQgCgKgGgGQgFgIgIgEQgIgEgLAAQgNAAgKAHQgKAGgGAMQgGAMgDARQgCARAAAUQAAATACARQACARAGAMQAFAMAKAHQAKAHAOAAQAOAAAJgHQAJgHAFgKQAFgKACgJIACgQIAMAAQAAAJgDALQgCAMgHALQgHALgLAHQgMAIgSAAQgPAAgLgHg");
	this.shape_4.setTransform(179,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBfQgLgFgGgIQgHgHgCgJQgCgJAAgHIAAgNIALAAIAAAKQAAAKAEAIQADAIAFAGQAGAFAIAEQAIADAKAAQAKAAAIgDQAIgEAHgGQAFgGAEgIQACgIAAgJQAAgJgCgHQgCgHgFgFQgFgEgGgDIgPgHIgVgGQgUgHgJgLQgLgKAAgUQABgMAEgJQADgKAHgGQAHgHAKgDQAJgEALAAQAbAAANAOQAMAPAAAYIgLAAQAAgUgKgMQgJgMgVAAQgHAAgIACQgHACgHAFQgFAFgEAIQgDAHAAAMQAAAQAIAIQAIAJANAEIAbAKIARAHQAIAEAEAGQAGAGACAIQADAIAAAKQAAANgEAKQgFALgHAGQgIAIgKADQgLAEgLAAQgQAAgLgGg");
	this.shape_5.setTransform(165.4,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBnQgNgGgHgJQgHgJgCgMQgDgLAAgLIAAgFIAhAAIAAAFQAAATAJAKQAIAKARAAQAKgBAHgEQAHgEAEgHQADgHAAgIQAAgQgIgIQgIgJgOgEIgWgIQgWgIgLgNQgKgNAAgXQAAgSAIgNQAIgNAPgIQAOgGATAAQAUgBAMAGQALAGAGAIQAGAJACAJIACASIAAAEIghAAIAAgEQAAgOgHgJQgHgHgPgBQgHABgGADQgHADgEAGQgEAHAAALQAAANAHAIQAIAIAQAGIAWAJQAWAHAKAMQALAOgBAVQAAAWgIAOQgJAOgPAGQgPAGgVABQgTgBgMgFg");
	this.shape_6.setTransform(144.7,43.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BoIAAjQIBBAAQAUABANAHQANAJAGANQAGAOAAASQAAAcgQAQQgQAQgdAAIgdAAIAABWgAgcgGIAYAAQAIAAAIgDQAHgEAFgIQAEgIAAgNQABgRgIgJQgJgKgSAAIgWAAg");
	this.shape_7.setTransform(130.4,43.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQBoIAAjQIAhAAIAADQg");
	this.shape_8.setTransform(119.3,43.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5BoIAAisIgBAAIgqCsIgbAAIgqisIgBAAIAACsIgfAAIAAjQIA0AAIAkCaIAAAAIAkiaIAzAAIAADQg");
	this.shape_9.setTransform(105.5,43.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBiIgEgLIgBgQIAAgUQAAgKgCgIQgBgJgFgFQgDgGgJgDQgHgCgLAAIgqAAIAABaIgLAAIAAjDIA3AAQALAAAJAEQAJADAGAGQAHAGADAJQAEALAAANQAAATgKAOQgKAMgTACIAAAAQAMACAHAEQAIADAEAGQAEAHABAJQACAHAAALIAAAUIABAPQABAFAEAHgAgrgBIAlAAIAPgBQAIgCAHgFQAHgFAEgJQADgJAAgNQAAgUgKgLQgKgLgSAAIgrAAg");
	this.shape_10.setTransform(82,44.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBhQgJgDgJgGQgHgGgEgLQgFgMAAgRIAAiMIALAAIAACOQAAAVAKAMQAKANAWAAQAVAAAKgNQAMgMgBgVIAAiOIAMAAIAACMQAAAQgFALQgEAMgIAGQgIAHgJACQgKADgKAAQgJAAgKgCg");
	this.shape_11.setTransform(68,44.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBgQgMgGgIgLQgJgMgEgTQgFgUAAgcQAAgcAFgTQAFgTAIgMQAJgMALgFQAMgFAMAAQAPAAALAFQAMAFAIAMQAIAMAFATQAEATAAAcQAAAggGAUQgGATgJALQgJALgLAEQgLAEgLAAQgNAAgLgFgAgXhUQgKAHgGAMQgGAMgDARQgCARAAATQAAAUACARQACARAGAMQAGAMAKAGQAKAHAOAAQAcAAAMgWQAMgWAAgvQAAgTgDgRQgCgQgGgNQgGgMgKgHQgKgHgPAAQgNAAgKAHg");
	this.shape_12.setTransform(53.7,44.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEBiIAAhRIg2hyIANAAIAtBnIAwhnIALAAIg1ByIAABRg");
	this.shape_13.setTransform(40.3,44.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFBiIAAhRIg1hyIANAAIAtBnIAvhnIAMAAIg1ByIAABRg");
	this.shape_14.setTransform(21.7,44.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BiIAAjDIA0AAQAOABAKADQAJADAHAHQAFAHADAIQACAJAAALQABAUgKALQgKAKgRADIAAABQAWABALAMQAKAOAAAUQAAAZgPAOQgPAOgZABgAgqBYIAmAAQAXAAAMgJQAMgKAAgZQAAgNgDgIQgEgJgGgFQgHgFgJgCQgJgCgJAAIgmAAgAgqgIIAlAAQASAAAMgKQAMgJAAgVQAAgnglAAIgqAAg");
	this.shape_15.setTransform(9.1,44.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5BiIAAjDIAtAAQAOAAANAFQANAEAKAKQAJALAFATQAFATABAdQAAAegHATQgFATgKALQgKAKgNAEQgMAFgNAAgAgtBYIAhAAQAeAAAOgWQAOgVAAgtQAAgWgDgQQgDgRgHgKQgGgMgMgEQgLgGgQAAIghAAg");
	this.shape_16.setTransform(185.9,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvBiIAAjDIBcAAIAAALIhQAAIAABOIBLAAIAAAJIhLAAIAABWIBTAAIAAALg");
	this.shape_17.setTransform(173.2,16.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFBiIAAi4Ig0AAIAAgLIByAAIAAALIgzAAIAAC4g");
	this.shape_18.setTransform(161,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AApBiIhUixIgBAAIAACxIgLAAIAAjDIAPAAIBUCxIABAAIAAixIALAAIAADDg");
	this.shape_19.setTransform(148,16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTBhQgKgDgHgGQgIgGgEgLQgFgMAAgRIAAiMIALAAIAACOQAAAVAKAMQAKANAWAAQAVAAALgNQAKgMABgVIAAiOIALAAIAACMQAAAQgFALQgFAMgHAGQgIAHgKACQgJADgKAAQgJAAgKgCg");
	this.shape_20.setTransform(134.2,16.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA3BiIgSg9IhJAAIgSA9IgMAAIA9jDIANAAIA7DDgAghAbIBDAAIghhwIgBAAg");
	this.shape_21.setTransform(120.7,16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AArBiIAAhiIhVAAIAABiIgLAAIAAjDIALAAIAABWIBVAAIAAhWIALAAIAADDg");
	this.shape_22.setTransform(107.1,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvBiIAAjDIBcAAIAAALIhQAAIAABOIBLAAIAAAJIhLAAIAABWIBTAAIAAALg");
	this.shape_23.setTransform(88.2,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag2BiIAAjDIA1AAQANABAKADQAJADAGAHQAHAHACAIQADAJAAALQAAAUgLALQgJAKgQADIAAABQAVABAKAMQALAOAAAUQAAAZgPAOQgOAOgaABgAgrBYIAnAAQAXAAAMgJQANgKAAgZQAAgNgEgIQgEgJgHgFQgGgFgJgCQgJgCgJAAIgnAAgAgrgIIAmAAQASAAAMgKQAMgJAAgVQAAgnglAAIgrAAg");
	this.shape_24.setTransform(75.3,16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFBiIAAi4IgzAAIAAgLIBxAAIAAALIgzAAIAAC4g");
	this.shape_25.setTransform(55.8,16.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAfIAAg9IAIAAIAAA9g");
	this.shape_26.setTransform(47.5,10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AApBiIhUixIgBAAIAACxIgLAAIAAjDIAPAAIBUCxIABAAIAAixIALAAIAADDg");
	this.shape_27.setTransform(37.9,16.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYBgQgMgGgIgLQgJgMgEgTQgFgUAAgcQAAgcAFgTQAFgTAIgMQAJgMALgFQAMgFAMAAQAPAAALAFQAMAFAIAMQAIAMAFATQAEATAAAcQAAAggGAUQgGATgJALQgJALgLAEQgLAEgLAAQgNAAgLgFgAgXhUQgKAHgGAMQgGAMgDARQgCARAAATQAAAUACARQACARAGAMQAGAMAKAGQAKAHAOAAQAcAAAMgWQAMgWAAgvQAAgTgDgRQgCgQgGgNQgGgMgKgHQgKgHgPAAQgNAAgKAHg");
	this.shape_28.setTransform(23.5,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag5BiIAAjDIAtAAQAPAAAMAFQANAEAKAKQAJALAFATQAFATABAdQAAAegHATQgFATgKALQgKAKgMAEQgNAFgNAAgAgtBYIAhAAQAeAAAOgWQAOgVAAgtQAAgWgDgQQgDgRgHgKQgHgMgLgEQgLgGgQAAIghAAg");
	this.shape_29.setTransform(9.4,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt31, new cjs.Rectangle(0,0,234.3,63.4), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhACEIAAkHIB9AAIAAAOIhtAAIAABqIBmAAIAAAMIhmAAIAAB1IBxAAIAAAOg");
	this.shape.setTransform(126.8,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6CEIAAiFIhzAAIAACFIgPAAIAAkHIAPAAIAABzIBzAAIAAhzIAPAAIAAEHg");
	this.shape_1.setTransform(108.5,66.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHCEIAAj5IhGAAIAAgOICbAAIAAAOIhGAAIAAD5g");
	this.shape_2.setTransform(91,66.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNCEIAAkHIA9AAQAUAAARAGQASAEAMAPQANAPAHAaQAHAZAAAoQAAAogIAaQgIAagNAPQgNAPgRAEQgSAGgRAAgAg9B3IAtAAQApABATgeQASgdAAg9QAAgegEgWQgEgWgJgPQgJgPgPgIQgQgGgVAAIgtAAg");
	this.shape_3.setTransform(65.1,66.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABLCEIgZhSIhjAAIgZBSIgQAAIBSkHIAUAAIBOEHgAgtAlIBbAAIgtiZIgBAAg");
	this.shape_4.setTransform(46.2,66.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhACEIAAkHIB9AAIAAAOIhtAAIAABqIBmAAIAAAMIhmAAIAAB1IBxAAIAAAOg");
	this.shape_5.setTransform(30.2,66.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6CEQgEgGgBgJQgCgJAAgMIAAgbQAAgOgCgLQgDgLgFgHQgHgIgKgEQgKgEgPAAIg5AAIAAB6IgQAAIAAkHIBMAAQAOAAAMAEQAMAEAJAIQAJAJAFANQAFANAAASQAAAbgOASQgNARgaACIAAABQARACAKAFQAKAEAFAKQAFAIACAMQACALAAAOIAAAcQAAALACAIQACAIAFAIgAg6gCIAxAAQALAAALgCQAKgDAKgGQAIgHAGgMQAFgLABgTQgBgbgOgPQgOgOgYAAIg6AAg");
	this.shape_6.setTransform(12.8,66.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA1CaIg1hwIg2BwIg0AAIBRicIhLiXIA2AAIAxBnIAwhnIA0AAIhKCXIBOCcg");
	this.shape_7.setTransform(231.8,103.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXCaIAAkzIAvAAIAAEzg");
	this.shape_8.setTransform(216.2,103.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmCaIhYjqIgBAAIAADqIguAAIAAkzIA7AAIBZDkIAAAAIAAjkIAvAAIAAEzg");
	this.shape_9.setTransform(199.1,103.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAACfQg0ABgYgnQgZgnAAhSQAAhRAZgnQAYgnA0ABQA0gBAZAnQAZAngBBRQABBSgZAnQgYAng0AAIgBgBgAAUB2QAKgEAHgNQAIgNADgZQAEgZABgmQgBgmgEgZQgDgYgIgNQgHgNgKgEQgJgFgLABQgKgBgKAFQgJAEgHANQgHANgFAYQgDAZAAAmQAAAmADAZQAFAZAHANQAHANAJAEQAKAFAKgBQALABAJgFg");
	this.shape_10.setTransform(174.8,103.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABTCaIAAj/IAAAAIg+D/IgpAAIg+j/IAAAAIAAD/IgvAAIAAkzIBNAAIA1DjIABAAIA1jjIBLAAIAAEzg");
	this.shape_11.setTransform(147.3,103.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAtCaIAAiPIhZAAIAACPIgxAAIAAkzIAxAAIAAB7IBZAAIAAh7IAxAAIAAEzg");
	this.shape_12.setTransform(119.9,103.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXCaIAAkJIhJAAIAAgqIDBAAIAAAqIhIAAIAAEJg");
	this.shape_13.setTransform(98,103.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTCaIAAkzIAxAAIAAEJIB2AAIAAAqg");
	this.shape_14.setTransform(79.3,103.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABACaIgThMIhZAAIgUBMIgzAAIBYkzIA+AAIBQEzgAAlAnIgjiWIgBAAIgkCWIBIAAg");
	this.shape_15.setTransform(57.8,103.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhUCaIAAkzICmAAIAAAqIh0AAIAABVIBtAAIAAAoIhtAAIAABiIB3AAIAAAqg");
	this.shape_16.setTransform(36.9,103.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAuCaIAAiPIhaAAIAACPIgxAAIAAkzIAxAAIAAB7IBaAAIAAh7IAwAAIAAEzg");
	this.shape_17.setTransform(14,103.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHCEIAAhtIhIiaIARAAIA+CKIBAiKIAQAAIhICaIAABtg");
	this.shape_18.setTransform(208.4,140.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABLCEIgZhSIhjAAIgZBSIgQAAIBTkHIATAAIBPEHgAgtAlIBcAAIguiZIAAAAg");
	this.shape_19.setTransform(191.3,140.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhNCEIAAkHIA9AAQAUAAARAFQASAFAMAPQANAPAHAaQAHAaAAAnQAAApgIAaQgIAZgNAOQgNAQgRAEQgSAGgRAAgAg9B3IAtAAQApAAATgdQASgeAAg8QAAgegEgWQgEgXgJgOQgJgPgPgHQgQgIgVABIgtAAg");
	this.shape_20.setTransform(173.2,140.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghCCQgQgHgLgRQgMgPgGgbQgGgZAAgnQAAglAGgbQAHgaALgQQAMgQAPgHQAQgGARAAQAUAAAQAGQAPAHALAQQALAQAGAaQAGAbAAAlQAAArgIAbQgIAbgMAPQgNAOgPAGQgPAEgOAAQgRAAgQgGgAgghyQgNAKgIAPQgIARgEAXQgEAXAAAaQAAAcADAWQAEAWAIARQAIAQANAKQAOAJATAAQAlAAARgeQAQgfAAg/QAAgagDgWQgEgXgIgRQgIgQgNgKQgOgJgUAAQgSAAgOAJg");
	this.shape_21.setTransform(153.2,140.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHCEIAAj5IhGAAIAAgOICbAAIAAAOIhGAAIAAD5g");
	this.shape_22.setTransform(135.4,140.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA6CEQgDgGgDgJQgCgJAAgMIAAgbQAAgOgCgLQgCgLgGgIQgFgHgLgEQgKgEgQgBIg5AAIAAB7IgPAAIAAkHIBNAAQANAAAMAEQAMAEAJAIQAJAJAFANQAFANAAASQAAAbgNARQgOASgaACIAAACQAQABAKAEQALAGAFAJQAGAIACALQABAMAAAOIAAAcQAAALACAIQACAIAFAIgAg7gCIAzAAQAJAAAMgCQALgCAIgHQAKgHAFgLQAGgMgBgTQAAgagNgPQgOgQgZABIg7AAg");
	this.shape_23.setTransform(109.9,140.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghCCQgQgHgLgRQgMgPgGgbQgGgZAAgnQAAglAGgbQAHgaALgQQAMgQAPgHQAQgGARAAQAUAAAQAGQAPAHALAQQALAQAGAaQAGAbAAAlQAAArgIAbQgIAbgMAPQgNAOgPAGQgPAEgOAAQgRAAgQgGgAgghyQgNAKgIAPQgIARgEAXQgEAXAAAaQAAAcADAWQAEAWAIARQAIAQANAKQAOAJATAAQAlAAARgeQAQgfAAg/QAAgagDgWQgEgXgIgRQgIgQgNgKQgOgJgUAAQgSAAgOAJg");
	this.shape_24.setTransform(90.2,140.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglCCQgPgIgJgKQgIgLgDgMQgDgMAAgJIAAgRIAPAAIAAANQAAANAFALQAEALAHAHQAIAJALAEQALAFAOAAQANAAAMgFQAKgEAJgJQAHgIAFgKQAFgLAAgNQAAgNgEgJQgEgJgGgHQgFgFgKgFIgUgIIgcgKQgcgJgNgPQgOgOABgbQAAgQAFgNQAFgMAJgJQAKgJANgFQANgEAPAAQAkAAARASQARAUAAAhIgPAAQgBgbgNgQQgMgQgcAAQgKAAgKADQgLADgHAGQgJAHgEAKQgFAKAAAPQAAAXALALQAKAMASAGIAmAOQANADAKAGQAKAFAHAIQAHAIAEAKQADAMAAAOQAAARgGAOQgGAOgKAJQgLAKgOAFQgOAEgPAAQgXAAgOgGg");
	this.shape_25.setTransform(71.4,140.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHCEIAAkHIAPAAIAAEHg");
	this.shape_26.setTransform(59.5,140.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJCEIhIkHIAQAAIBBD2IAAAAIBCj2IAQAAIhIEHg");
	this.shape_27.setTransform(48.2,140.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhNCEIAAkHIA9AAQAUAAARAFQASAFAMAPQANAPAHAaQAHAaAAAnQAAApgIAaQgIAZgNAOQgNAQgRAEQgSAGgRAAgAg9B3IAtAAQApAAATgdQASgeAAg8QAAgegEgWQgEgXgJgOQgJgPgPgHQgQgIgVABIgtAAg");
	this.shape_28.setTransform(30.8,140.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABLCEIgZhSIhjAAIgZBSIgPAAIBSkHIATAAIBPEHgAgtAlIBcAAIguiZIAAAAg");
	this.shape_29.setTransform(11.9,140.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,44.5,244.7,121.4), null);


(lib.txt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAtQgFgBgFgFQgFgEgDgJQgDgJAAgQIABgRQABgIAEgGQADgIAHgEQAGgEAKAAQAMAAAHAEQAHAGADAJQACAJAAALIAAAJIgtAAIAAAGIABALQABAHADAEQADAEAGABQAEgBADgCQADgCACgEIACgGIAAgFIARAAQAAAOgJAJQgIAIgOABIgLgCgAgHgeQgEADgBAFQgBAFAAAGIAAACIAbAAIAAgFQABgIgEgGQgDgFgHgBQgFAAgDAEg");
	this.shape.setTransform(195.9,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSApQgHgGgDgKQgDgLAAgOQAAgNADgLQADgKAHgGQAHgGAMAAQALAAAFADQAHAEACAEQAEAFABAGIABAKIgSAAIgBgJQgBgEgDgDQgCgDgGAAQgFAAgEAFQgDAEgBAHIgBARIABARQABAIADAEQAEAEAFABQAIgBADgFQADgGAAgKIARAAQAAALgEAHQgDAIgGAFQgHAEgLAAQgMAAgHgGg");
	this.shape_1.setTransform(188.4,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIA8IAAhYIARAAIAABYgAgIgpIAAgSIARAAIAAASg");
	this.shape_2.setTransform(182.9,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBA4QgEgBgCgFQgCgFAAgJIAAg2IgMAAIAAgOIAMAAIAAgZIARAAIAAAZIAPAAIAAAOIgPAAIAAA0QAAAFABACQACADAFgBIAHAAIAAANIgHABIgIABQgGAAgDgCg");
	this.shape_3.setTransform(178.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSApQgHgGgDgKQgDgLAAgOQAAgNADgLQADgKAHgGQAHgGANAAQAJAAAGADQAHAEACAEQAEAFABAGIABAKIgSAAIgBgJQgBgEgDgDQgDgDgEAAQgGAAgEAFQgCAEgCAHIgBARIABARQACAIACAEQAEAEAGABQAGgBAEgFQADgGAAgKIARAAQgBALgCAHQgEAIgGAFQgHAEgKAAQgNAAgHgGg");
	this.shape_4.setTransform(172.7,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcApQgFgHgBgMQABgKACgFQADgGAEgBQAFgDAGgCIANgEQAFgBADgCQACgDAAgFQAAgHgCgDQgDgDgGgBQgGABgDABQgDADAAAEIgCAIIgQAAQAAgJADgHQACgHAHgDQAHgDAMAAQAHAAAGACQAGACAFAFQADAFAAAIIAAAyQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIACAAIABAAIAAAMIgEAAIgFABQgGABgEgDQgEgDgBgGIgBAAQgDAGgGAEQgEADgHAAQgMAAgGgGgAAEAAIgGADIgHADQgDABgCAEQgCAEAAAFQAAAGADADQADAFAFAAQAHgBAFgFQADgGAAgKIAAgNQgCABgEAAg");
	this.shape_5.setTransform(165.3,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIASAAIAAAOIABAAQACgHAFgFQAFgEAHAAIADAAIACABIAAASIgDgBIgFAAQgEAAgEACQgEABgCAFQgDAEAAAIIAAA1g");
	this.shape_6.setTransform(159.1,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiA7IAAh1IAlAAQALAAAHAEQAHAFADAHQAEAIAAAKQAAAQgJAJQgJAJgQAAIgQAAIAAAxgAgPgDIANAAQAEAAAEgCQAFgCACgEQADgFAAgHQAAgKgFgFQgEgGgKAAIgMAAg");
	this.shape_7.setTransform(152.3,10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAuIAAhZIASAAIAAAOIABAAQACgHAFgFQAFgEAHAAIADAAIACABIAAASIgDgBIgFAAQgEAAgEACQgEABgCAFQgDAEAAAIIAAA1g");
	this.shape_8.setTransform(141.6,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUArQgEgCgDgGQgDgHAAgMIAAg9IASAAIAAA/QAAAIADACQADAEAGAAQAFAAAEgEQAEgEABgIIAAg9IARAAIAABYIgQAAIAAgKIgBAAQgDAGgGAEQgFADgIAAQgHAAgFgDg");
	this.shape_9.setTransform(134.6,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSApQgIgGgDgKQgDgLAAgOQAAgNADgLQADgKAHgGQAHgGAMAAQANAAAHAGQAIAGADAKQADALgBANQABAOgEALQgDAKgHAGQgIAGgMAAQgLAAgHgGgAgJgcQgDAEgBAHIgBARIABASQABAIADAEQAEADAFABQAHgBADgDQADgEABgIQACgHAAgLQAAgJgCgIQgBgHgDgEQgDgFgHAAQgFAAgEAFg");
	this.shape_10.setTransform(126.7,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA7IAAguIgfhHIAVAAIAUAzIAUgzIATAAIgfBHIAAAug");
	this.shape_11.setTransform(118.9,10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAtQgFgBgFgFQgFgEgDgJQgDgJAAgQIABgRQABgIAEgGQADgIAHgEQAGgEAKAAQAMAAAHAEQAHAGADAJQACAJAAALIAAAJIgtAAIAAAGIABALQABAHADAEQADAEAGABQAEgBADgCQADgCACgEIACgGIAAgFIARAAQAAAOgJAJQgIAIgOABIgLgCgAgHgeQgEADgBAFQgBAFAAAGIAAACIAbAAIAAgFQABgIgEgGQgDgFgHgBQgFAAgDAEg");
	this.shape_12.setTransform(107.1,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAtIgYhZIATAAIAPBGIAAAAIAOhGIATAAIgXBZg");
	this.shape_13.setTransform(99.7,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcApQgFgHgBgMQABgKACgFQADgGAEgBQAFgDAGgCIANgEQAEgBADgCQADgDAAgFQAAgHgDgDQgCgDgGgBQgGABgDABQgDADAAAEIgBAIIgRAAQAAgJACgHQAEgHAGgDQAHgDAMAAQAGAAAHACQAHACAEAFQADAFAAAIIAAAyQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAABAAIABAAIACAAIAAAMIgEAAIgFABQgGABgFgDQgDgDgBgGIgBAAQgDAGgGAEQgEADgIAAQgKAAgHgGgAAEAAIgGADIgHADQgEABgBAEQgCAEAAAFQAAAGADADQACAFAGAAQAHgBAFgFQADgGAAgKIAAgNQgCABgEAAg");
	this.shape_14.setTransform(92.5,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAtQgFgBgFgFQgFgEgDgJQgDgJAAgQIABgRQABgIAEgGQADgIAHgEQAGgEAKAAQAMAAAHAEQAHAGADAJQACAJAAALIAAAJIgtAAIAAAGIABALQABAHADAEQADAEAGABQAEgBADgCQADgCACgEIACgGIAAgFIARAAQAAAOgJAJQgIAIgOABIgLgCgAgHgeQgEADgBAFQgBAFAAAGIAAACIAbAAIAAgFQABgIgEgGQgDgFgHgBQgFAAgDAEg");
	this.shape_15.setTransform(84.6,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IASAAIAABlIAtAAIAAAQg");
	this.shape_16.setTransform(77.4,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUArQgEgCgDgGQgDgHAAgMIAAg9IASAAIAAA/QAAAIADACQADAEAGAAQAFAAAEgEQAEgEABgIIAAg9IARAAIAABYIgQAAIAAgKIgBAAQgDAGgGAEQgFADgIAAQgHAAgFgDg");
	this.shape_17.setTransform(65.4,12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSApQgIgGgDgKQgDgLAAgOQAAgNADgLQADgKAHgGQAHgGAMAAQANAAAHAGQAIAGADAKQADALgBANQABAOgEALQgDAKgHAGQgIAGgMAAQgLAAgHgGgAgJgcQgDAEgBAHIgBARIABASQABAIADAEQAEADAFABQAHgBADgDQADgEABgIQACgHAAgLQAAgJgCgIQgBgHgDgEQgDgFgHAAQgFAAgEAFg");
	this.shape_18.setTransform(57.6,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJA7IAAguIgehHIAUAAIATAzIAVgzIAUAAIggBHIAAAug");
	this.shape_19.setTransform(49.8,10.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJA8IAAhLIgNAAIAAgNIANAAIAAgIQAAgNAGgFQAFgFALAAIAFAAIAEAAIAAAPIgFAAQgEAAgCABQgDADAAAEIAAAIIAOAAIAAANIgOAAIAABLg");
	this.shape_20.setTransform(39.6,10.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IASAAIAAB1g");
	this.shape_21.setTransform(35.4,10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAOAuIAAg8QAAgJgDgEQgDgEgHAAQgDAAgDACQgDACgCAEQgCAEAAAGIAAA7IgSAAIAAhZIARAAIAAALIAAAAQAEgGAGgDQAFgEAHAAQALAAAFAFQAGAGAAANIAABDg");
	this.shape_22.setTransform(25.5,12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAtQgFgBgFgFQgFgEgDgJQgDgJAAgQIABgRQABgIAEgGQADgIAHgEQAGgEAKAAQAMAAAHAEQAHAGADAJQACAJAAALIAAAJIgtAAIAAAGIABALQABAHADAEQADAEAGABQAEgBADgCQADgCACgEIACgGIAAgFIARAAQAAAOgJAJQgIAIgOABIgLgCgAgHgeQgEADgBAFQgBAFAAAGIAAACIAbAAIAAgFQABgIgEgGQgDgFgHgBQgFAAgDAEg");
	this.shape_23.setTransform(17.7,12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJAtIgYhZIATAAIAPBGIAAAAIAOhGIATAAIgXBZg");
	this.shape_24.setTransform(10.3,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfA7IAAh1IA/AAIAAAQIgtAAIAAAhIAqAAIAAAPIgqAAIAAAlIAtAAIAAAQg");
	this.shape_25.setTransform(3.1,10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#03A289").s().p("AldAZIAAgxIK7AAIAAAxg");
	this.shape_26.setTransform(34.5,-9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12, new cjs.Rectangle(-2.1,-11.9,202.8,33.1), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5CEQgDgGgBgJQgCgJAAgMIAAgbQAAgOgDgLQgCgLgFgIQgHgHgKgEQgLgFgOABIg6AAIAAB6IgPAAIAAkHIBMAAQAOAAAMAEQAMAEAJAJQAJAIAFANQAFANAAASQAAAbgOARQgNASgaADIAAABQAQAAALAGQAJAEAGAJQAFAKACAKQACAMAAAOIAAAbQAAAMACAIQACAIAFAIgAg7gCIAyAAQALAAAKgCQALgCAKgHQAIgGAGgMQAFgMABgTQgBgbgOgOQgOgPgYgBIg7AAg");
	this.shape.setTransform(67.6,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaCDQgNgDgKgJQgLgIgGgPQgGgPAAgYIAAi+IAPAAIAADBQAAAcAOARQANARAeAAQAdAAAOgRQAPgRAAgcIAAjBIAPAAIAAC+QAAAWgGAPQgHAPgKAJQgKAJgNAEQgOADgNAAQgNAAgNgDg");
	this.shape_1.setTransform(48.6,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghCCQgQgHgLgRQgMgPgGgaQgGgaAAgnQAAgmAGgaQAHgaALgQQAMgQAPgHQAQgHARAAQAUAAAQAHQAPAHALAQQALAQAGAaQAGAaAAAmQAAArgIAbQgIAbgMAPQgNAPgPAEQgPAFgOABQgRgBgQgGgAgghyQgNAJgIARQgIAQgEAXQgEAXAAAaQAAAbADAXQAEAWAIARQAIARANAIQAOAKATAAQAlAAARgeQAQgeAAhAQAAgZgDgXQgEgXgIgRQgIgQgNgKQgOgJgUAAQgSAAgOAJg");
	this.shape_2.setTransform(29.4,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHCEIAAhtIhIiaIARAAIA+CKIBAiKIAQAAIhICaIAABtg");
	this.shape_3.setTransform(11.2,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhTCZIAAkxICkAAIAAApIh0AAIAABVIBtAAIAAApIhtAAIAABhIB3AAIAAApg");
	this.shape_4.setTransform(199.3,58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtCZQgEgEgCgGQgCgIgBgJQgBgNAAgOIgBgeQAAgagKgLQgKgMgXAAIgpAAIAACFIgwAAIAAkxIBrAAQAVgBASAJQASAHAJASQALARABAdQAAAdgOAVQgMAUgZAEIAAAAQAXACAMAPQALAPABAfIABAgIABAfQABALAFAGQAEAHAEACgAgygQIAoAAQAWAAANgNQANgNgBgXQABgZgLgNQgMgNgXAAIgqAAg");
	this.shape_5.setTransform(177.7,58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAACgQgzAAgZgnQgZgnAAhSQAAhRAZgnQAZgnAzAAQA1AAAYAnQAZAnAABRQAABSgZAnQgYAng0AAIgBAAgAAVB2QAJgFAHgNQAHgNAFgYQADgZAAgmQAAgmgDgZQgFgYgHgNQgHgMgJgFQgKgFgLAAQgKAAgKAFQgJAFgHAMQgIANgDAYQgEAZgBAmQABAmAEAZQADAYAIANQAHANAJAFQAKAFAKAAQALAAAKgFg");
	this.shape_6.setTransform(153.3,58.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4CPQgXgSgJgjQgJgjAAg3QAAg2AJgjQAJgkAXgRQAWgRAmAAQAgABATAKQATAKAJAQQAIAPADARQACAQAAAMIAAAGIgxAAIAAgGQAAgPgDgNQgEgOgKgJQgJgJgSAAQgRAAgLAKQgMAKgGAbQgFAaAAAxQAAAwAFAbQAGAbAMALQALAKARAAQAQAAAJgIQAJgHAEgLQAFgMACgNQABgMAAgMIAAgEIAxAAIAAAGQAAAcgIAZQgJAZgVAQQgVAPgkABQglgBgWgQg");
	this.shape_7.setTransform(130.6,58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyCXQgSgIgKgOQgKgOgFgQQgEgRABgQIAAgHIAwAAIAAAHQAAAdANANQAMAPAZAAQAPAAALgHQAKgGAFgLQAFgKAAgLQAAgYgLgMQgMgNgVgFIgggNQgigLgPgTQgPgVAAggQAAgcAMgTQALgTAWgLQAVgJAcgBQAdABASAHQARAJAJAMQAJANACANQADAOAAAMIAAAHIgxAAIAAgHQAAgUgKgMQgKgMgWAAQgLABgJAEQgJAEgGAJQgGAKAAAQQgBAUALAMQALALAYAKIAhALQAgAMAPATQAPATAAAfQAAAhgMAUQgNAVgWAJQgXAKgeAAQgdAAgSgJg");
	this.shape_8.setTransform(107.9,58.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyCXQgSgIgKgOQgKgOgFgQQgEgRABgQIAAgHIAwAAIAAAHQAAAdANANQAMAPAZAAQAPAAALgHQAKgGAFgLQAFgKAAgLQAAgYgLgMQgMgNgVgFIgggNQgigLgPgTQgPgVAAggQAAgcAMgTQALgTAWgLQAVgJAcgBQAdABASAHQARAJAJAMQAJANACANQADAOAAAMIAAAHIgxAAIAAgHQAAgUgKgMQgKgMgWAAQgLABgJAEQgJAEgGAJQgGAKAAAQQgBAUALAMQALALAYAKIAhALQAgAMAPATQAPATAAAfQAAAhgMAUQgNAVgWAJQgXAKgeAAQgdAAgSgJg");
	this.shape_9.setTransform(75.3,58.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhaCZIAAkxIBgAAQAeAAASALQATALAJAVQAJATAAAbQAAAqgXAXQgXAZgsAAIgqAAIAAB+gAgpgJIAjAAQAMAAALgGQALgFAHgMQAHgLAAgTQAAgZgLgOQgMgPgcAAIggAAg");
	this.shape_10.setTransform(54.2,58.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXCZIAAkxIAvAAIAAExg");
	this.shape_11.setTransform(37.8,58.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABTCZIAAj+IAAAAIg+D+IgpAAIg+j+IAAAAIAAD+IgvAAIAAkxIBNAAIA1DiIABAAIA1jiIBLAAIAAExg");
	this.shape_12.setTransform(17.5,58.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaCDQgNgDgKgJQgLgIgGgPQgGgPAAgYIAAi+IAPAAIAADBQAAAcAOARQANARAeAAQAdAAAOgRQAPgRAAgcIAAjBIAPAAIAAC+QAAAWgGAPQgHAPgKAJQgKAJgNAEQgOADgNAAQgNAAgNgDg");
	this.shape_13.setTransform(242.3,96.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghCBQgQgGgLgQQgMgRgGgZQgGgaAAgnQAAgmAGgZQAHgbALgQQAMgQAPgHQAQgHARABQAUgBAQAHQAPAHALAQQALAQAGAbQAGAZAAAmQAAArgIAbQgIAbgMAPQgNAPgPAEQgPAGgOAAQgRAAgQgIgAgghyQgNAKgIAQQgIAQgEAXQgEAXAAAaQAAAbADAXQAEAWAIARQAIARANAIQAOAKATAAQAlAAARgfQAQgdAAhAQAAgagDgXQgEgWgIgRQgIgRgNgJQgOgJgUAAQgSAAgOAJg");
	this.shape_14.setTransform(223.1,96.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHCEIAAhtIhIiaIARAAIA+CKIBAiKIAQAAIhICaIAABtg");
	this.shape_15.setTransform(204.9,96.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAxCEIgxjxIAAAAIgxDxIgTAAIg5kHIAPAAIAzDxIABAAIAxjxIASAAIAyDxIABAAIAzjxIAPAAIg6EHg");
	this.shape_16.setTransform(174.8,96.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghCBQgQgGgLgQQgMgRgGgZQgGgaAAgnQAAgmAGgZQAHgbALgQQAMgQAPgHQAQgHARABQAUgBAQAHQAPAHALAQQALAQAGAbQAGAZAAAmQAAArgIAbQgIAbgMAPQgNAPgPAEQgPAGgOAAQgRAAgQgIgAgghyQgNAKgIAQQgIAQgEAXQgEAXAAAaQAAAbADAXQAEAWAIARQAIARANAIQAOAKATAAQAlAAARgfQAQgdAAhAQAAgagDgXQgEgWgIgRQgIgRgNgJQgOgJgUAAQgSAAgOAJg");
	this.shape_17.setTransform(151.8,96.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag+CEIAAkHIAQAAIAAD5IBtAAIAAAOg");
	this.shape_18.setTransform(134.7,96.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag+CEIAAkHIAQAAIAAD5IBtAAIAAAOg");
	this.shape_19.setTransform(119,96.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghCBQgQgGgLgQQgMgRgGgZQgGgaAAgnQAAgmAGgZQAHgbALgQQAMgQAPgHQAQgHARABQAUgBAQAHQAPAHALAQQALAQAGAbQAGAZAAAmQAAArgIAbQgIAbgMAPQgNAPgPAEQgPAGgOAAQgRAAgQgIgAgghyQgNAKgIAQQgIAQgEAXQgEAXAAAaQAAAbADAXQAEAWAIARQAIARANAIQAOAKATAAQAlAAARgfQAQgdAAhAQAAgagDgXQgEgWgIgRQgIgRgNgJQgOgJgUAAQgSAAgOAJg");
	this.shape_20.setTransform(100.5,96.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag+CEIAAkHIB9AAIAAAOIhuAAIAABpIBnAAIAAAOIhnAAIAACCg");
	this.shape_21.setTransform(84.1,96.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+CEIAAkHIAPAAIAAD5IBuAAIAAAOg");
	this.shape_22.setTransform(59.4,96.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+CEIAAkHIAPAAIAAD5IBuAAIAAAOg");
	this.shape_23.setTransform(43.7,96.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHCEIAAkHIAPAAIAAEHg");
	this.shape_24.setTransform(32.1,96.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAxCEIgxjxIAAAAIgxDxIgTAAIg5kHIAPAAIAzDxIABAAIAxjxIASAAIAyDxIABAAIAzjxIAPAAIg6EHg");
	this.shape_25.setTransform(16,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,253.7,121.4), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0D1D1").s().p("AC7EGIi7jwIi5DwIg9AAIDWkTIjEj4IA9AAICnDUICnjUIA+AAIjED4IDWETg");
	this.shape.setTransform(688.6,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D0D1D1").s().p("AgZF1IAAoLIAyAAIAAILgAggkkQgNgNAAgUQAAgTANgOQAOgOASAAQAUAAANAOQAOAOAAATQAAATgOAOQgNANgUAAQgSAAgOgNg");
	this.shape_1.setTransform(655.9,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D1D1").s().p("ACLEMIAAk8QAAgsgEgZQgEgegNgXQgMgXgagNQgZgNgqAAQgsAAggAUQggAUgPAhQgQAigGAmQgHAlAAAuIAAEDIgzAAIAAoLIAzAAIAABRIADAAQAXgtAogXQAogZAzAAQBgAAAnA3QAmA5AABrIAAE8g");
	this.shape_2.setTransform(620.5,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0D1D1").s().p("AhqD8QgzgWglglQglglgVgzQgVgxAAg3QAAg2AVgzQAVgyAlgmQAlglAzgWQAxgWA4AAQA3AAA0AVQAxAUAnAmQAmAlAVAyQAVAzAAA4QAAA6gVAyQgVAygmAlQgnAmgxAUQg0AVg3AAQg4AAgxgWgAhajPQgpATgcAfQgeAfgQAqQgRAqAAArQAAAsARApQAQAqAeAeQAdAfAoATQAoASAuAAQAtAAArgRQApgSAggeQAfgeASgqQARgoAAgwQAAgvgRgpQgRgrgggeQgegegrgSQgrgRgtAAQgtAAgpASg");
	this.shape_3.setTransform(567.3,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0D1D1").s().p("AEREMIAAlPQAAgggEgcQgEgbgMgUQgLgVgXgMQgWgMgkAAQgmAAgcAPQgbAPgOAbQgPAagIAhQgFAhAAAlIAAEtIgzAAIAAlDQAAgigEgcQgEgdgMgXQgMgXgYgNQgXgOgmAAQgmAAgaASQgaASgPAeQgNAcgHAjQgFAkAAAjIAAEfIgzAAIAAoLIAzAAIAABBIADAAQASgkAjgUQAlgVApAAQAxAAAnAZQAnAZAUAuQAUgvApgYQApgZAzAAQAxAAAgAQQAgAPARAcQASAbAHAlQAHAmAAAuIAAFIg");
	this.shape_4.setTransform(500.8,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0D1D1").s().p("ACMHUIAAk9QAAgmgEgfQgFgegMgWQgOgYgYgMQgagNgpAAQgtAAggATQggAVgPAgQgQAigGAmQgHAlAAAwIAAECIgzAAIAAunIAzAAIAAHsIADAAQAXgrAogYQAogYAzgBQBgAAAnA3QAmA4AABrIAAE9g");
	this.shape_5.setTransform(437.5,-4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D1D1").s().p("AgpFkIAAncIg7AAIAAgvIA7AAIAAi8IAxAAIAAC8IBcAAIAAAvIhcAAIAAHcg");
	this.shape_6.setTransform(405.3,7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D0D1D1").s().p("AgZHUIAAunIAzAAIAAOng");
	this.shape_7.setTransform(386.1,-4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0D1D1").s().p("AhmD8QgvgVgkgmQghgngSgyQgTg0AAg3QAAg4ASgyQARgvAigmQAhglAxgVQAwgVA4AAQA+ABA2AaQA2AcAhAvIACAAIAAhaIAzAAIAAILIgzAAIAAheIgCAAQgcAwg5AdQg3Acg8ABQg5AAgwgWgAhSjPQgnAUgaAeQgbAggPApQgPAmAAArQAAAuAPApQAOApAcAgQAbAgAnATQAkASAvAAQBgAAA3hEQA3hFAAhhQAAhdg5g+Qg7g+hcAAQgsAAgmASg");
	this.shape_8.setTransform(346.1,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0D1D1").s().p("AhmD8QgvgWgiglQgigmgRgzQgSgyAAg2QAAg3ASgxQASgxAignQAjglAugWQAvgWA3AAQA7AAAuAWQAvAWAhAmQAhAnARAyQARA1AAA2InGAAQAABkA8A8QA7A9BaAAQA8AAAwggQAvggAeg4IArAZQgjBEg9AmQg+AlhNAAQg4AAgvgWgAhIjTQgjAPgcAZQgcAZgSAiQgRAjgDAjIGTAAQgEgigRgkQgQgggbgbQgagZgkgPQgkgOgmAAQgmAAgkAOg");
	this.shape_9.setTransform(293.6,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D0D1D1").s().p("AEEGsIAAm5IoHAAIAAG5Ig2AAIAAtXIA2AAIAAFrIIHAAIAAlrIA2AAIAANXg");
	this.shape_10.setTransform(229.7,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D0D1D1").s().p("AlvhwIFejJIGBDiIAAGRg");
	this.shape_11.setTransform(41.2,62.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D1D1").s().p("AlxhWIGLjiIFYDIIrjGpg");
	this.shape_12.setTransform(125.1,62.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D1D1").s().p("AitDlIAAnJIFbjIIgBNZg");
	this.shape_13.setTransform(150.8,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D0D1D1").s().p("AismtIFaDJIAAHJIlbDJg");
	this.shape_14.setTransform(17.4,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D0D1D1").s().p("AlzBzILnmtIAAGPImJDng");
	this.shape_15.setTransform(40.9,-62.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D0D1D1").s().p("Al2BVIAAmQILtGuIlZDJg");
	this.shape_16.setTransform(125.5,-62.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#115C4C","#14A287"],[0,0.616],-41.8,-12.1,75.2,22).s().p("AAAACIlcjDIFbjJIFeDJIAAGFIldDHg");
	this.shape_17.setTransform(83.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,-94.1,713.3,188.4), null);


(lib.BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBnIAAhWIhBh3IArAAIAZA1IAJAVIAIAUIAAAAIAJgUIAJgVIAZg1IArAAIhFB2IAABXg");
	this.shape.setTransform(197.1,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBnIgTg6IhAAAIgSA6IgnAAIBCjNIAwAAIBDDNgAAZAQIgQgyIgGgTIgEgTIAAAAIgFATIgFATIgQAyIA0AAg");
	this.shape_1.setTransform(178.4,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBoIgVgBIAAjLQANgCAPgBIAggBQAbAAAWAGQAUAGAOAMQAQAMAHASQAJATAAAbQAAAagJAVQgIAUgPAOQgPAOgYAHQgXAHgfAAIgdgBgAgnhKIgKABIAACTIAJABIALAAQAkAAAVgUQAUgTABgnQgBgjgSgSQgTgTgjAAIgPABg");
	this.shape_2.setTransform(158.8,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BdQgUgOgMgXQgMgYAAgfQAAgeANgZQAMgYAWgOQAWgNAcgBQAeABAWANQAVAOAMAYQALAXAAAeQAAAhgNAZQgMAYgXANQgWAMgcABQgdgBgWgNgAgehBQgNALgGARQgHARAAAVQAAAVAHARQAHARAMAKQANAKARAAQASAAANgKQANgKAHgSQAGgRABgVQAAgTgHgRQgGgSgNgKQgNgLgTAAQgSAAgMAKg");
	this.shape_3.setTransform(137,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBnIAAiuIg7AAIAAgfICbAAIAAAfIg8AAIAACug");
	this.shape_4.setTransform(118.2,26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBBoIgXgBIAAjLQANgCAQgBIAggBQAbAAAWAGQAUAGAOAMQAQAMAHASQAJATAAAbQAAAagJAVQgIAUgPAOQgQAOgXAHQgXAHgfAAIgcgBgAgnhKIgKABIAACTIAJABIALAAQAkAAAVgUQAUgTABgnQAAgjgTgSQgTgTgjAAIgPABg");
	this.shape_5.setTransform(93.9,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyBnIgTg6IhAAAIgSA6IgnAAIBCjNIAwAAIBDDNgAAZAQIgQgyIgGgTIgEgTIAAAAIgFATIgFATIgQAyIA0AAg");
	this.shape_6.setTransform(73.1,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BnIAAjNIB3AAIAAAfIhSAAIAAA1IBOAAIAAAeIhOAAIAAA8IBXAAIAAAfg");
	this.shape_7.setTransform(56,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBoQgCgFgEgMIgHggQgFgTgIgIQgIgJgQAAIgTAAIAABVIglAAIAAjLIAagDIAfgBQAVAAAQAEQAQAEAKAJQAIAGAFALQAFALAAANQgBANgFALQgFAKgJAHQgIAGgKADIAAABQALAFAHAKQAHALAEAPIAGAYIAGAVIAEAMgAgahKIgJABIAABCIAXAAQASgBALgIQALgKAAgPQAAgRgLgIQgLgJgRAAIgPABg");
	this.shape_8.setTransform(39.6,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#03A289").s().p("AyvFeIAAq7MAlfAAAIAAK7g");
	this.shape_9.setTransform(120,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BTN, new cjs.Rectangle(0,-10,240,70), null);


// stage content:
(lib.Healthmonix_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_812 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(812).call(this.frame_812).wait(9));

	// Слой 20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_34 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");
	var mask_graphics_135 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");
	var mask_graphics_259 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");
	var mask_graphics_406 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");
	var mask_graphics_507 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");
	var mask_graphics_635 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");
	var mask_graphics_733 = new cjs.Graphics().p("ArEDAIAAl/IWJAAIAAF/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_graphics_34,x:87,y:216.1}).wait(55).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_graphics_135,x:87,y:216.1}).wait(55).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_graphics_259,x:87,y:216.1}).wait(55).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_graphics_406,x:87,y:216.1}).wait(55).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_graphics_507,x:87,y:216.1}).wait(55).to({graphics:null,x:0,y:0}).wait(73).to({graphics:mask_graphics_635,x:87,y:216.1}).wait(65).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_graphics_733,x:87,y:216.1}).wait(65).to({graphics:null,x:0,y:0}).wait(23));

	// Слой 21
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.502,1],-81.9,-0.1,82,-0.1).s().p("A0bE6IPQpzIZnAAIvQJzg");
	this.shape.setTransform(-95.3,218.7);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.502,1],-81.9,-0.1,82,-0.1).s().p("A0bE6IPQpzIZmAAIvPJzg");
	this.shape_1.setTransform(-88.4,218.7);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.502,1],-81.9,-0.1,82,-0.1).s().p("A0aE6IPPpzIZmAAIvPJzg");
	this.shape_2.setTransform(-81.6,218.7);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.502,1],-82,-0.1,81.9,-0.1).s().p("A0aE6IPPpzIZmAAIvPJzg");
	this.shape_3.setTransform(-47.4,218.7);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.502,1],-82,-0.1,81.9,-0.1).s().p("A0bE6IPQpzIZmAAIvPJzg");
	this.shape_4.setTransform(14.2,218.7);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.502,1],-82,-0.1,81.9,-0.1).s().p("A0bE6IPQpzIZnAAIvQJzg");
	this.shape_5.setTransform(253.6,218.7);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:-67.9},0).wait(1).to({x:-61.1},0).wait(1).to({x:-54.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.9},0).to({_off:true},1).wait(4).to({_off:false,x:7.3},0).to({_off:true},1).wait(85).to({_off:false,x:-95.3},0).to({_off:true},1).wait(3).to({_off:false,x:-67.9},0).wait(1).to({x:-61.1},0).wait(1).to({x:-54.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.9},0).to({_off:true},1).wait(4).to({_off:false,x:7.3},0).to({_off:true},1).wait(108).to({_off:false,x:-95.3},0).to({_off:true},1).wait(3).to({_off:false,x:-67.9},0).wait(1).to({x:-61.1},0).wait(1).to({x:-54.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.9},0).to({_off:true},1).wait(4).to({_off:false,x:7.3},0).to({_off:true},1).wait(131).to({_off:false,x:-95.3},0).to({_off:true},1).wait(3).to({_off:false,x:-67.9},0).wait(1).to({x:-61.1},0).wait(1).to({x:-54.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.9},0).to({_off:true},1).wait(4).to({_off:false,x:7.3},0).to({_off:true},1).wait(85).to({_off:false,x:-95.3},0).to({_off:true},1).wait(3).to({_off:false,x:-67.9},0).wait(1).to({x:-61.1},0).wait(1).to({x:-54.2},0).to({_off:true},1).wait(3).to({_off:false,x:-26.9},0).to({_off:true},1).wait(4).to({_off:false,x:7.3},0).to({_off:true},1).wait(112).to({_off:false,x:-95.3},0).wait(1).to({x:-89.5},0).to({_off:true},1).wait(2).to({_off:false,x:-72.2},0).to({_off:true},1).wait(2).to({_off:false,x:-54.9},0).to({_off:true},1).wait(6).to({_off:false,x:-14.5},0).to({_off:true},1).wait(1).to({_off:false,x:-2.9},0).to({_off:true},1).wait(81).to({_off:false,x:-95.3},0).wait(1).to({x:-89.5},0).to({_off:true},1).wait(2).to({_off:false,x:-72.2},0).to({_off:true},1).wait(2).to({_off:false,x:-54.9},0).to({_off:true},1).wait(6).to({_off:false,x:-14.5},0).to({_off:true},1).wait(1).to({_off:false,x:-2.9},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(35).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,x:-20},0).to({_off:true},1).wait(90).to({_off:false,x:-88.4},0).to({_off:true},1).wait(9).to({_off:false,x:-20},0).to({_off:true},1).wait(113).to({_off:false,x:-88.4},0).to({_off:true},1).wait(9).to({_off:false,x:-20},0).to({_off:true},1).wait(136).to({_off:false,x:-88.4},0).to({_off:true},1).wait(9).to({_off:false,x:-20},0).to({_off:true},1).wait(90).to({_off:false,x:-88.4},0).to({_off:true},1).wait(9).to({_off:false,x:-20},0).to({_off:true},1).wait(302));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(36).to({_off:false},0).wait(1).to({x:-74.8},0).to({_off:true},1).wait(5).to({_off:false,x:-33.7},0).to({_off:true},1).wait(4).to({_off:false,x:0.5},0).to({_off:true},1).wait(4).to({_off:false,x:34.7},0).wait(1).to({x:41.5},0).to({_off:true},1).wait(82).to({_off:false,x:-81.6},0).wait(1).to({x:-74.8},0).to({_off:true},1).wait(5).to({_off:false,x:-33.7},0).to({_off:true},1).wait(4).to({_off:false,x:0.5},0).to({_off:true},1).wait(4).to({_off:false,x:34.7},0).wait(1).to({x:41.5},0).to({_off:true},1).wait(105).to({_off:false,x:-81.6},0).wait(1).to({x:-74.8},0).to({_off:true},1).wait(5).to({_off:false,x:-33.7},0).to({_off:true},1).wait(4).to({_off:false,x:0.5},0).to({_off:true},1).wait(4).to({_off:false,x:34.7},0).wait(1).to({x:41.5},0).to({_off:true},1).wait(128).to({_off:false,x:-81.6},0).wait(1).to({x:-74.8},0).to({_off:true},1).wait(5).to({_off:false,x:-33.7},0).to({_off:true},1).wait(4).to({_off:false,x:0.5},0).to({_off:true},1).wait(4).to({_off:false,x:34.7},0).wait(1).to({x:41.5},0).to({_off:true},1).wait(82).to({_off:false,x:-81.6},0).wait(1).to({x:-74.8},0).to({_off:true},1).wait(5).to({_off:false,x:-33.7},0).to({_off:true},1).wait(4).to({_off:false,x:0.5},0).to({_off:true},1).wait(4).to({_off:false,x:34.7},0).wait(1).to({x:41.5},0).to({_off:true},1).wait(109).to({_off:false,x:-83.7},0).wait(1).to({x:-78},0).to({_off:true},1).wait(1).to({_off:false,x:-66.4},0).to({_off:true},1).wait(3).to({_off:false,x:-43.3},0).wait(1).to({x:-37.6},0).to({_off:true},1).wait(1).to({_off:false,x:-26},0).to({_off:true},1).wait(4).to({_off:false,x:2.8},0).to({_off:true},1).wait(1).to({_off:false,x:14.4},0).to({_off:true},1).wait(1).to({_off:false,x:25.9},0).to({_off:true},1).wait(4).to({_off:false,x:54.8},0).to({_off:true},1).wait(73).to({_off:false,x:-83.7},0).wait(1).to({x:-78},0).to({_off:true},1).wait(1).to({_off:false,x:-66.4},0).to({_off:true},1).wait(3).to({_off:false,x:-43.3},0).wait(1).to({x:-37.6},0).to({_off:true},1).wait(1).to({_off:false,x:-26},0).to({_off:true},1).wait(4).to({_off:false,x:2.8},0).to({_off:true},1).wait(1).to({_off:false,x:14.4},0).to({_off:true},1).wait(1).to({_off:false,x:25.9},0).to({_off:true},1).wait(4).to({_off:false,x:54.8},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(41).to({_off:false},0).wait(1).to({x:-40.5},0).to({_off:true},1).wait(3).to({_off:false,x:-13.2},0).wait(1).to({x:-6.3},0).to({_off:true},1).wait(3).to({_off:false,x:21},0).wait(1).to({x:27.9},0).to({_off:true},1).wait(3).to({_off:false,x:55.2},0).wait(1).to({x:62.1},0).wait(1).to({x:68.9},0).wait(1).to({x:75.7},0).wait(1).to({x:82.6},0).wait(1).to({x:89.4},0).wait(1).to({x:96.3},0).wait(1).to({x:103.1},0).wait(1).to({x:109.9},0).wait(1).to({x:116.8},0).wait(1).to({x:123.6},0).wait(1).to({x:130.5},0).wait(1).to({x:137.3},0).wait(1).to({x:144.2},0).wait(1).to({x:151},0).wait(1).to({x:157.8},0).wait(1).to({x:164.7},0).wait(1).to({x:171.5},0).wait(1).to({x:178.4},0).wait(1).to({x:185.2},0).wait(1).to({x:192},0).wait(1).to({x:198.9},0).wait(1).to({x:205.7},0).wait(1).to({x:212.6},0).wait(1).to({x:219.4},0).wait(1).to({x:226.2},0).wait(1).to({x:233.1},0).wait(1).to({x:239.9},0).wait(1).to({x:246.8},0).to({_off:true},1).wait(1).to({_off:false,x:260.4},0).wait(1).to({x:267.3},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(53).to({_off:false,x:-47.4},0).wait(1).to({x:-40.5},0).to({_off:true},1).wait(3).to({_off:false,x:-13.2},0).wait(1).to({x:-6.3},0).to({_off:true},1).wait(3).to({_off:false,x:21},0).wait(1).to({x:27.9},0).to({_off:true},1).wait(3).to({_off:false,x:55.2},0).wait(1).to({x:62.1},0).wait(1).to({x:68.9},0).wait(1).to({x:75.7},0).wait(1).to({x:82.6},0).wait(1).to({x:89.4},0).wait(1).to({x:96.3},0).wait(1).to({x:103.1},0).wait(1).to({x:109.9},0).wait(1).to({x:116.8},0).wait(1).to({x:123.6},0).wait(1).to({x:130.5},0).wait(1).to({x:137.3},0).wait(1).to({x:144.2},0).wait(1).to({x:151},0).wait(1).to({x:157.8},0).wait(1).to({x:164.7},0).wait(1).to({x:171.5},0).wait(1).to({x:178.4},0).wait(1).to({x:185.2},0).wait(1).to({x:192},0).wait(1).to({x:198.9},0).wait(1).to({x:205.7},0).wait(1).to({x:212.6},0).wait(1).to({x:219.4},0).wait(1).to({x:226.2},0).wait(1).to({x:233.1},0).wait(1).to({x:239.9},0).wait(1).to({x:246.8},0).to({_off:true},1).wait(1).to({_off:false,x:260.4},0).wait(1).to({x:267.3},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(76).to({_off:false,x:-47.4},0).wait(1).to({x:-40.5},0).to({_off:true},1).wait(3).to({_off:false,x:-13.2},0).wait(1).to({x:-6.3},0).to({_off:true},1).wait(3).to({_off:false,x:21},0).wait(1).to({x:27.9},0).to({_off:true},1).wait(3).to({_off:false,x:55.2},0).wait(1).to({x:62.1},0).wait(1).to({x:68.9},0).wait(1).to({x:75.7},0).wait(1).to({x:82.6},0).wait(1).to({x:89.4},0).wait(1).to({x:96.3},0).wait(1).to({x:103.1},0).wait(1).to({x:109.9},0).wait(1).to({x:116.8},0).wait(1).to({x:123.6},0).wait(1).to({x:130.5},0).wait(1).to({x:137.3},0).wait(1).to({x:144.2},0).wait(1).to({x:151},0).wait(1).to({x:157.8},0).wait(1).to({x:164.7},0).wait(1).to({x:171.5},0).wait(1).to({x:178.4},0).wait(1).to({x:185.2},0).wait(1).to({x:192},0).wait(1).to({x:198.9},0).wait(1).to({x:205.7},0).wait(1).to({x:212.6},0).wait(1).to({x:219.4},0).wait(1).to({x:226.2},0).wait(1).to({x:233.1},0).wait(1).to({x:239.9},0).wait(1).to({x:246.8},0).to({_off:true},1).wait(1).to({_off:false,x:260.4},0).wait(1).to({x:267.3},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(99).to({_off:false,x:-47.4},0).wait(1).to({x:-40.5},0).to({_off:true},1).wait(3).to({_off:false,x:-13.2},0).wait(1).to({x:-6.3},0).to({_off:true},1).wait(3).to({_off:false,x:21},0).wait(1).to({x:27.9},0).to({_off:true},1).wait(3).to({_off:false,x:55.2},0).wait(1).to({x:62.1},0).wait(1).to({x:68.9},0).wait(1).to({x:75.7},0).wait(1).to({x:82.6},0).wait(1).to({x:89.4},0).wait(1).to({x:96.3},0).wait(1).to({x:103.1},0).wait(1).to({x:109.9},0).wait(1).to({x:116.8},0).wait(1).to({x:123.6},0).wait(1).to({x:130.5},0).wait(1).to({x:137.3},0).wait(1).to({x:144.2},0).wait(1).to({x:151},0).wait(1).to({x:157.8},0).wait(1).to({x:164.7},0).wait(1).to({x:171.5},0).wait(1).to({x:178.4},0).wait(1).to({x:185.2},0).wait(1).to({x:192},0).wait(1).to({x:198.9},0).wait(1).to({x:205.7},0).wait(1).to({x:212.6},0).wait(1).to({x:219.4},0).wait(1).to({x:226.2},0).wait(1).to({x:233.1},0).wait(1).to({x:239.9},0).wait(1).to({x:246.8},0).to({_off:true},1).wait(1).to({_off:false,x:260.4},0).wait(1).to({x:267.3},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(53).to({_off:false,x:-47.4},0).wait(1).to({x:-40.5},0).to({_off:true},1).wait(3).to({_off:false,x:-13.2},0).wait(1).to({x:-6.3},0).to({_off:true},1).wait(3).to({_off:false,x:21},0).wait(1).to({x:27.9},0).to({_off:true},1).wait(3).to({_off:false,x:55.2},0).wait(1).to({x:62.1},0).wait(1).to({x:68.9},0).wait(1).to({x:75.7},0).wait(1).to({x:82.6},0).wait(1).to({x:89.4},0).wait(1).to({x:96.3},0).wait(1).to({x:103.1},0).wait(1).to({x:109.9},0).wait(1).to({x:116.8},0).wait(1).to({x:123.6},0).wait(1).to({x:130.5},0).wait(1).to({x:137.3},0).wait(1).to({x:144.2},0).wait(1).to({x:151},0).wait(1).to({x:157.8},0).wait(1).to({x:164.7},0).wait(1).to({x:171.5},0).wait(1).to({x:178.4},0).wait(1).to({x:185.2},0).wait(1).to({x:192},0).wait(1).to({x:198.9},0).wait(1).to({x:205.7},0).wait(1).to({x:212.6},0).wait(1).to({x:219.4},0).wait(1).to({x:226.2},0).wait(1).to({x:233.1},0).wait(1).to({x:239.9},0).wait(1).to({x:246.8},0).to({_off:true},1).wait(1).to({_off:false,x:260.4},0).wait(1).to({x:267.3},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(81).to({_off:false,x:-49.1},0).to({_off:true},1).wait(2).to({_off:false,x:-31.8},0).to({_off:true},1).wait(3).to({_off:false,x:-8.7},0).to({_off:true},1).wait(2).to({_off:false,x:8.6},0).to({_off:true},1).wait(5).to({_off:false,x:43.3},0).wait(1).to({x:49},0).to({_off:true},1).wait(2).to({_off:false,x:66.3},0).to({_off:true},1).wait(1).to({_off:false,x:77.9},0).wait(1).to({x:83.7},0).wait(1).to({x:89.4},0).wait(1).to({x:95.2},0).wait(1).to({x:101},0).wait(1).to({x:106.7},0).to({_off:true},1).wait(1).to({_off:false,x:118.3},0).wait(1).to({x:124.1},0).wait(1).to({x:129.8},0).wait(1).to({x:135.6},0).wait(1).to({x:141.4},0).wait(1).to({x:147.1},0).to({_off:true},1).wait(1).to({_off:false,x:158.7},0).to({_off:true},1).wait(1).to({_off:false,x:170.2},0).wait(1).to({x:176},0).wait(1).to({x:181.8},0).wait(1).to({x:187.5},0).wait(1).to({x:193.3},0).wait(1).to({x:199.1},0).wait(1).to({x:204.9},0).wait(1).to({x:210.6},0).wait(1).to({x:216.4},0).wait(1).to({x:222.2},0).to({_off:true},1).wait(1).to({_off:false,x:233.7},0).wait(1).to({x:239.5},0).wait(1).to({x:245.3},0).wait(1).to({x:251},0).wait(1).to({x:256.8},0).wait(1).to({x:262.6},0).wait(1).to({x:268.4},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(41).to({_off:false,x:-49.1},0).to({_off:true},1).wait(2).to({_off:false,x:-31.8},0).to({_off:true},1).wait(3).to({_off:false,x:-8.7},0).to({_off:true},1).wait(2).to({_off:false,x:8.6},0).to({_off:true},1).wait(5).to({_off:false,x:43.3},0).wait(1).to({x:49},0).to({_off:true},1).wait(2).to({_off:false,x:66.3},0).to({_off:true},1).wait(1).to({_off:false,x:77.9},0).wait(1).to({x:83.7},0).wait(1).to({x:89.4},0).wait(1).to({x:95.2},0).wait(1).to({x:101},0).wait(1).to({x:106.7},0).to({_off:true},1).wait(1).to({_off:false,x:118.3},0).wait(1).to({x:124.1},0).wait(1).to({x:129.8},0).wait(1).to({x:135.6},0).wait(1).to({x:141.4},0).wait(1).to({x:147.1},0).to({_off:true},1).wait(1).to({_off:false,x:158.7},0).to({_off:true},1).wait(1).to({_off:false,x:170.2},0).wait(1).to({x:176},0).wait(1).to({x:181.8},0).wait(1).to({x:187.5},0).wait(1).to({x:193.3},0).wait(1).to({x:199.1},0).wait(1).to({x:204.9},0).wait(1).to({x:210.6},0).wait(1).to({x:216.4},0).wait(1).to({x:222.2},0).to({_off:true},1).wait(1).to({_off:false,x:233.7},0).wait(1).to({x:239.5},0).wait(1).to({x:245.3},0).wait(1).to({x:251},0).wait(1).to({x:256.8},0).wait(1).to({x:262.6},0).wait(1).to({x:268.4},0).wait(1).to({x:274.1},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(50).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:48.4},0).to({_off:true},1).wait(95).to({_off:false,x:14.2},0).to({_off:true},1).wait(4).to({_off:false,x:48.4},0).to({_off:true},1).wait(118).to({_off:false,x:14.2},0).to({_off:true},1).wait(4).to({_off:false,x:48.4},0).to({_off:true},1).wait(141).to({_off:false,x:14.2},0).to({_off:true},1).wait(4).to({_off:false,x:48.4},0).to({_off:true},1).wait(95).to({_off:false,x:14.2},0).to({_off:true},1).wait(4).to({_off:false,x:48.4},0).to({_off:true},1).wait(128).to({_off:false,x:31.7},0).to({_off:true},1).wait(22).to({_off:false,x:164.5},0).to({_off:true},1).wait(74).to({_off:false,x:31.7},0).to({_off:true},1).wait(22).to({_off:false,x:164.5},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(85).to({_off:false},0).to({_off:true},1).wait(100).to({_off:false},0).to({_off:true},1).wait(123).to({_off:false},0).to({_off:true},1).wait(146).to({_off:false},0).to({_off:true},1).wait(100).to({_off:false},0).to({_off:true},1).wait(82).to({_off:false,x:-60.6},0).to({_off:true},1).wait(6).to({_off:false,x:-20.2},0).to({_off:true},1).wait(6).to({_off:false,x:20.2},0).to({_off:true},1).wait(2).to({_off:false,x:37.5},0).to({_off:true},1).wait(3).to({_off:false,x:60.6},0).to({_off:true},1).wait(1).to({_off:false,x:72.1},0).to({_off:true},1).wait(6).to({_off:false,x:112.5},0).to({_off:true},1).wait(6).to({_off:false,x:152.9},0).to({_off:true},1).wait(12).to({_off:false,x:228},0).to({_off:true},1).wait(47).to({_off:false,x:-60.6},0).to({_off:true},1).wait(6).to({_off:false,x:-20.2},0).to({_off:true},1).wait(6).to({_off:false,x:20.2},0).to({_off:true},1).wait(2).to({_off:false,x:37.5},0).to({_off:true},1).wait(3).to({_off:false,x:60.6},0).to({_off:true},1).wait(1).to({_off:false,x:72.1},0).to({_off:true},1).wait(6).to({_off:false,x:112.5},0).to({_off:true},1).wait(6).to({_off:false,x:152.9},0).to({_off:true},1).wait(12).to({_off:false,x:228},0).to({_off:true},1).wait(31));

	// BTN
	this.instance = new lib.BTN();
	this.instance.parent = this;
	this.instance.setTransform(-76.7,219,0.61,0.61,0,0,0,120.1,30.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:87.3},10,cjs.Ease.get(1)).wait(335).to({regY:30,y:279.3},11,cjs.Ease.get(-1)).to({_off:true},1).wait(15).to({_off:false,regY:30.1,x:-76.7,y:219},0).to({x:87.3},10,cjs.Ease.get(1)).wait(424));

	// Logo
	this.instance_1 = new lib.Logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,216.6,0.137,0.137,0,0,0,356.9,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:230,alpha:1},10).wait(345).to({x:260,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(5).to({_off:false,x:250},0).to({x:230,alpha:1},10).wait(434));

	// Слой 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(52,52,52,0)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_6.setTransform(150,216.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(52,52,52,0.188)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_7.setTransform(150,216.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(52,52,52,0.361)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_8.setTransform(150,216.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(52,52,52,0.51)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_9.setTransform(150,216.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(52,52,52,0.639)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_10.setTransform(150,216.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(52,52,52,0.749)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_11.setTransform(150,216.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(52,52,52,0.839)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_12.setTransform(150,216.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(52,52,52,0.91)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_13.setTransform(150,216.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(52,52,52,0.961)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_14.setTransform(150,216.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(52,52,52,0.988)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_15.setTransform(150,216.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#343434").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_16.setTransform(150,216.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(52,52,52,0.82)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_17.setTransform(150,216.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(52,52,52,0.725)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_18.setTransform(150,216.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(52,52,52,0.635)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_19.setTransform(150,216.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(52,52,52,0.545)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_20.setTransform(150,216.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(52,52,52,0.455)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_21.setTransform(150,216.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(52,52,52,0.365)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_22.setTransform(150,216.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(52,52,52,0.275)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_23.setTransform(150,216.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(52,52,52,0.18)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_24.setTransform(150,216.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(52,52,52,0.09)").s().p("A3bCiIAAlDMAu3AAAIAAFDg");
	this.shape_25.setTransform(150,216.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},350).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(439));

	// txt-3-3
	this.instance_2 = new lib.txt33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.1,175.4,0.721,0.721,0,0,0,104,31);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({_off:false},0).to({x:106.5,alpha:1},10,cjs.Ease.get(1)).wait(110).to({x:84.8,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(240).to({_off:false,x:128.1},0).to({x:106.5,alpha:1},10,cjs.Ease.get(1)).wait(199));

	// txt-3-2
	this.instance_3 = new lib.txt32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(140.8,118.8,0.721,0.721,0,0,0,121.7,63.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(235).to({_off:false},0).to({x:119.2,alpha:1},10,cjs.Ease.get(1)).wait(109).to({x:97.6,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(241).to({_off:false,x:140.8},0).to({x:119.2,alpha:1},10,cjs.Ease.get(1)).wait(204));

	// green-shape
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#03A289").s().p("AgYAoIAAhPIAxAAIAABPg");
	this.shape_26.setTransform(16.5,129.6,0.721,0.721);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#03A289").s().p("AgRB5IAAjxIAjAAIAADxg");
	this.shape_27.setTransform(16.5,129.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#03A289").s().p("AgRDLIAAmVIAjAAIAAGVg");
	this.shape_28.setTransform(16.5,129.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#03A289").s().p("AgRETIAAolIAjAAIAAIlg");
	this.shape_29.setTransform(16.5,129.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#03A289").s().p("AgRFSIAAqjIAjAAIAAKjg");
	this.shape_30.setTransform(16.5,129.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#03A289").s().p("AgRGHIAAsNIAjAAIAAMNg");
	this.shape_31.setTransform(16.5,129.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#03A289").s().p("AgRGzIAAtlIAjAAIAANlg");
	this.shape_32.setTransform(16.5,129.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#03A289").s().p("AgRHVIAAupIAjAAIAAOpg");
	this.shape_33.setTransform(16.5,129.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#03A289").s().p("AgRHtIAAvZIAjAAIAAPZg");
	this.shape_34.setTransform(16.5,129.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#03A289").s().p("AgRH7IAAv1IAjAAIAAP1g");
	this.shape_35.setTransform(16.5,129.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#03A289").s().p("AgRIAIAAv/IAjAAIAAP/g");
	this.shape_36.setTransform(16.5,129.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#03A289").s().p("AgRH8IAAv3IAjAAIAAP3g");
	this.shape_37.setTransform(16.5,129.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#03A289").s().p("AgRHwIAAvfIAjAAIAAPfg");
	this.shape_38.setTransform(16.5,129.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#03A289").s().p("AgRHcIAAu3IAjAAIAAO3g");
	this.shape_39.setTransform(16.5,129.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#03A289").s().p("AgRHAIAAt/IAjAAIAAN/g");
	this.shape_40.setTransform(16.5,129.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#03A289").s().p("AgRGcIAAs3IAjAAIAAM3g");
	this.shape_41.setTransform(16.5,129.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#03A289").s().p("AgRFwIAArfIAjAAIAALfg");
	this.shape_42.setTransform(16.5,129.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#03A289").s().p("AgRE9IAAp5IAjAAIAAJ5g");
	this.shape_43.setTransform(16.5,129.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#03A289").s().p("AgREBIAAoBIAjAAIAAIBg");
	this.shape_44.setTransform(16.5,129.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#03A289").s().p("AgRC9IAAl5IAjAAIAAF5g");
	this.shape_45.setTransform(16.5,129.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#03A289").s().p("AgRBxIAAjhIAjAAIAADhg");
	this.shape_46.setTransform(16.5,129.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#03A289").s().p("AgRAdIAAg5IAjAAIAAA5g");
	this.shape_47.setTransform(16.5,129.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},235).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},104).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_26}]},246).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(204));

	// txt-3-1
	this.instance_4 = new lib.txt31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.1,53.1,0.721,0.721,0,0,0,117.1,31.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(230).to({_off:false},0).to({regX:117.2,x:96.5,alpha:1},10,cjs.Ease.get(1)).wait(109).to({regX:117.1,x:74.9,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(241).to({_off:false,x:118.1},0).to({regX:117.2,x:96.5,alpha:1},10,cjs.Ease.get(1)).wait(209));

	// txt-2
	this.instance_5 = new lib.txt2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.7,105.3,0.815,0.815,0,0,0,122.5,60.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).to({regX:122.4,x:112.2,alpha:1},10,cjs.Ease.get(1)).wait(95).to({regX:122.3,x:87.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(256).to({_off:false,regX:122.5,x:136.7},0).to({regX:122.4,x:112.2,alpha:1},10,cjs.Ease.get(1)).wait(95).to({regX:122.3,x:87.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(218));

	// txt-1-2
	this.instance_6 = new lib.txt12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(122.2,173.8,0.806,0.806,0,0,0,101.4,10.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:98.1,alpha:1},10,cjs.Ease.get(1)).wait(89).to({x:74,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(261).to({_off:false,x:122.2},0).to({x:98.1,alpha:1},10,cjs.Ease.get(1)).wait(89).to({x:74,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(333));

	// txt-1
	this.instance_7 = new lib.txt1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(139.1,105.5,0.806,0.806,0,0,0,127,60.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:126.9,x:114.9,alpha:1},10,cjs.Ease.get(1)).wait(88).to({regX:126.8,x:90.8,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(262).to({_off:false,regX:127,x:139.1},0).to({regX:126.9,x:114.9,alpha:1},10,cjs.Ease.get(1)).wait(88).to({regX:126.8,x:90.8,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(339));

	// Слой 8
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-0.2,136.6,127.2,-84).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_48.setTransform(150,125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-5.2,133.3,115.9,-76.5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_49.setTransform(150,125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-9.8,130.4,105.8,-69.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_50.setTransform(150,125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-13.8,127.8,96.9,-63.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_51.setTransform(150,125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-17.3,125.6,89.1,-58.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_52.setTransform(150,125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-20.2,123.7,82.6,-54.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_53.setTransform(150,125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-22.6,122.1,77.2,-50.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_54.setTransform(150,125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-24.4,120.9,73.1,-48).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_55.setTransform(150,125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-25.8,120.1,70.1,-46).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_56.setTransform(150,125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-26.6,119.6,68.3,-44.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_57.setTransform(150,125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-26.9,119.4,67.7,-44.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_58.setTransform(150,125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-24.4,121,73.1,-48).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_59.setTransform(150,125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-22,122.5,78.6,-51.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_60.setTransform(150,125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-19.6,124.1,83.9,-55.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_61.setTransform(150,125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-17.2,125.7,89.3,-58.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_62.setTransform(150,125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-14.7,127.2,94.8,-62.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_63.setTransform(150,125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-12.3,128.8,100.2,-66).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_64.setTransform(150,125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-9.9,130.3,105.6,-69.6).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_65.setTransform(150,125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-7.4,131.9,111,-73.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_66.setTransform(150,125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-5,133.5,116.4,-76.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_67.setTransform(150,125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(0,0,0,0.769)","rgba(0,0,0,0)"],[0,1],-2.6,135,121.8,-80.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_68.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_58}]},339).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},12).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).wait(439));

	// bg-pct.jpg
	this.instance_8 = new lib.bgpct();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(372).to({scaleY:1.01,y:0},0).wait(449));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bgpct.jpg", id:"bgpct"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;