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



(lib.bgimage = function() {
	this.initialize(img.bgimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,600);// helper functions:

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


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC300").s().p("AgIFyIAArjIARAAIAALjg");
	this.shape.setTransform(506.8,57.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AheA2IA9gNQAHAfAeAAQAZAAAAgQQAAgIgGgFQgFgEgPgEQg2gNgQgVQgQgUAAgcQAAgkAXgYQAWgZAqAAQBAAAAVBAIg2ATQgHgZgaAAQgVAAAAAQQAAAHAFAEQAGAEAMADQAnAKAPAHQAPAIALARQAKASAAAZQAAAngaAYQgaAZgpAAQhNAAgShPg");
	this.shape_1.setTransform(694.7,-23.6,1.123,1.123);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("Ag9BuQgZgUAAguIAAiuIBCAAIAAClQAAASAHAJQAGAIANAAQAMAAAHgGQAIgGABgIQACgIAAgWIAAiWIAzAAIAACqQAAAwgYAVQgYAWglAAQgnAAgYgVg");
	this.shape_2.setTransform(673,-23.4,1.123,1.123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_3.setTransform(644.2,-23.6,1.123,1.123);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AhBBiQgagjAAg9QAAg7AZglQAZgmAsAAQApAAAXAdQAWAcADAvIg8AEQAAgbgIgLQgJgLgKAAQgeAAAABKQAAAqAIAPQAIAPAOAAQAZAAADgrIA7AFQgDAvgZAZQgZAagjAAQgqAAgbgjg");
	this.shape_4.setTransform(624.9,-23.6,1.123,1.123);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AAiCBIgMgzIg3AAIgNAzIg1AAIBBkBIBEAAIBCEBgAgWAWIAhAAIgQhKg");
	this.shape_5.setTransform(602.2,-23.6,1.123,1.123);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_6.setTransform(582.6,-23.6,1.123,1.123);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC300").s().p("AAmCBIg6hyQgLgYgLgcQAFAbABAOIAAB9Ig1AAIAAkBIA9AAIAwBfQAPAbAIAVQgGgfABgkIAAhMIA0AAIAAEBg");
	this.shape_7.setTransform(562.1,-23.6,1.123,1.123);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC300").s().p("AhHBhQgcglAAg8QAAg4AbgmQAagmAvAAQAsAAAcAkQAbAjAAA7QAAA9gcAlQgcAlgsAAQgrAAgcgkgAgeACQAABIAeAAQAQAAAIgRQAHgSAAgtQAAhDgeAAQgfAAAABLg");
	this.shape_8.setTransform(537.6,-23.6,1.123,1.123);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC300").s().p("AhBBiQgagiAAg+QAAg8AZgkQAZgmArAAQAqAAAXAdQAWAcADAvIg8AEQAAgbgIgLQgJgLgKAAQgeAAAABKQAAAqAIAPQAIAPANAAQAaAAADgrIA7AFQgEAvgZAZQgYAagkAAQgpAAgbgjg");
	this.shape_9.setTransform(514.4,-23.6,1.123,1.123);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AAOBTIAAgnIhBAAIAAgNIA9hxIAUAAIAABuIAWAAIAAAQIgWAAIAAAngAghAcIAvAAIABheg");
	this.shape_10.setTransform(662.8,89.2,1.123,1.123);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgeBIQgNgKgFgRIAOgGQAIAcAZAAQAQAAAIgMQAKgLAAgSQAAgTgJgJQgKgLgMAAQgSAAgNAVIgNgDIAEhXIBPAAIgCASIhBAAIgDA0QAPgRARAAQATAAANAPQAOAQAAAYQAAAZgPAQQgOAQgVAAQgQAAgNgLg");
	this.shape_11.setTransform(649.5,89.5,1.123,1.123);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgjA8QgPgYAAgkQAAgjAOgYQANgZAXAAQAZAAAMAaQANAaAAAhQAAAigNAYQgMAagZAAQgVAAgOgZgAgZgxQgIASAAAfQAAAeAJAUQAIASAQAAQASAAAHgSQAJgUAAgbQAAgdgJgVQgIgVgRAAQgQAAgJATg");
	this.shape_12.setTransform(630.9,89.4,1.123,1.123);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgjA/QgOgXAAgkQAAgkAOgaQAMgaAcAAQAgAAAKAlIgPAFQgHgZgVAAQgkAAgBBLQAGgQALgIQALgIALAAQATAAAMAPQANAQAAAVQAAAXgOARQgNARgVAAQgWAAgPgWgAgTADQgKAMAAAQQAAAPAJALQAJALANAAQAOAAAJgLQAJgLAAgRQAAgPgJgMQgJgKgNAAQgMAAgKALg");
	this.shape_13.setTransform(617.8,89.4,1.123,1.123);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgkA8QgOgYAAgkQAAgjAOgYQANgZAXAAQAZAAAMAaQANAaAAAhQAAAigNAYQgNAagYAAQgVAAgPgZgAgZgxQgIASAAAfQABAfAIATQAIASAQAAQARAAAIgSQAIgSAAgdQAAgfgIgTQgIgVgRAAQgRAAgIATg");
	this.shape_14.setTransform(599,89.4,1.123,1.123);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AguBTIAAgPIAoAAIAAh9QgTAXgSANIAAgVQAbgSAOgWIALAAIAACWIAmAAIAAAPg");
	this.shape_15.setTransform(586.5,89.2,1.123,1.123);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AguBTIAAgPIAoAAIAAh9QgRAXgTANIAAgVQAbgSANgWIALAAIAACWIAmAAIAAAPg");
	this.shape_16.setTransform(567.7,89.2,1.123,1.123);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgjA/QgOgWABglQAAgkANgaQANgaAbAAQAgAAALAlIgPAFQgIgZgUAAQglAAgBBLQAGgQALgIQAKgIAMAAQATAAAMAPQANAPAAAWQgBAXgNARQgNARgVAAQgWAAgPgWgAgTADQgKALAAARQAAAPAJALQAJALANAAQAOAAAJgLQAJgLAAgRQAAgPgJgMQgJgKgMAAQgNAAgKALg");
	this.shape_17.setTransform(553.9,89.4,1.123,1.123);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AglBHQgNgNAAgTQAAgbAfgOQgZgNAAgaQAAgTANgMQANgMATAAQAVAAAMAMQAMALAAATQAAAagaALQAVALAFALQAFAKAAAMQAAAUgNAMQgOAOgXAAQgYAAgOgOgAgiAoQAAANAJAIQAKAIAQAAQAQAAAJgIQAJgIAAgMQAAgYgjgMQgiAKAAAZgAgTg9QgIAHAAALQAAAMAJAIQAJAIAKADQAQgFAHgIQAHgIAAgKQAAgNgIgGQgIgGgOAAQgMAAgIAHg");
	this.shape_18.setTransform(540.7,89.4,1.123,1.123);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgjA8QgOgYAAgkQgBgjANgYQAOgZAXAAQAZAAANAaQAMAaAAAhQAAAigNAYQgNAagYAAQgWAAgNgZgAgYgxQgJASABAfQAAAeAIAUQAIASAQAAQARAAAIgSQAIgUAAgbQABgdgJgVQgIgVgRAAQgRAAgHATg");
	this.shape_19.setTransform(527.5,89.4,1.123,1.123);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AghA1QgJgLAAgPQAAgSANgLQANgMAdAAIANABQAAgPgCgGQgCgGgGgEQgFgEgKAAQgXAAgDAWIgOgDQAFgiAlAAQAUAAAJAMQAJAKAAAcIAAAyQAAAMACALIgQAAIgBgVQgKAZgYAAQgRAAgIgLgAgQAHQgJAGgBAPQAAAJAGAGQAFAGALAAQANAAAIgMQAJgMAAgRIAAgIIgPAAQgRAAgKAHg");
	this.shape_20.setTransform(698.8,57,1.123,1.123);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgkA8IAAgOIA0hbIgvAAIAAgOIBEAAIAAAKIg2BfIA2AAIAAAOg");
	this.shape_21.setTransform(688.6,57,1.123,1.123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_22.setTransform(680.9,62.2,1.123,1.123);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AggAtQgLgSAAgbQAAgcAMgRQANgSASAAQAVAAALATQAMASAAAaQAAAbgNATQgMASgTAAQgUAAgMgTgAgTgkQgIAMAAAYQAAAZAIAMQAJALAKAAQAMAAAHgMQAIgLAAgZQAAgZgIgLQgIgLgLAAQgKAAgJALg");
	this.shape_23.setTransform(672.3,57,1.123,1.123);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgcAtQgLgSAAgbQAAgaAMgSQALgTASAAQAQAAAKAMQAKAMACATIgOADQgDgegVAAQgLAAgHANQgHANAAAVQAAAXAHAMQAHANALAAQATAAAFgeIAOADQgDAVgKAKQgKAMgPAAQgTAAgLgTg");
	this.shape_24.setTransform(661.3,57,1.123,1.123);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_25.setTransform(653.2,62.2,1.123,1.123);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgfAuQgNgRAAgcQAAgbANgTQANgSATAAQAUAAALARQAMAQABAgIhHAAQAAAaAJALQAKAJAJAAQATAAAHgYIAPAEQgEAQgMAJQgLALgPAAQgTAAgNgSgAgRgmQgIAKgBARIA1AAQAAgKgCgIQgCgHgHgHQgGgFgJAAQgKAAgIAKg");
	this.shape_26.setTransform(644.5,57,1.123,1.123);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AgXA+IAAh4IANAAIAAAcQAHgSAGgHQAIgGAHAAIAGAAIAAASIgDAAQgNAAgIAMQgHALgBAUIAAA+g");
	this.shape_27.setTransform(635.8,56.8,1.123,1.123);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AgdAxQgJgMAAgWIAAhMIAQAAIAABMQAAASAGAGQAGAIAHAAQAGgBAHgFQAFgEAFgKQAEgKAAgLIAAhDIAPAAIAAB3IgOAAIAAgWQgKAagUAAQgPAAgJgNg");
	this.shape_28.setTransform(625.2,57.2,1.123,1.123);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AgpAdIAOgEQAGAXAYAAQAKAAAGgFQAHgGAAgJQAAgOgRgEIgUgFQgMgDgHgHQgHgJAAgNQAAgPAKgKQAKgLAQAAQAfAAAIAfIgOAEQgGgTgSAAQgJAAgHAFQgGAEAAAJQAAANAQAEIASAEQAeAHAAAcQAAAQgLAKQgLALgTAAQgiAAgIgjg");
	this.shape_29.setTransform(613.7,57,1.123,1.123);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AAZA+IAAhNQAAgQgGgHQgGgGgJAAQgLAAgIALQgIAMAAASIAABBIgPAAIAAh4IAOAAIAAAXQAMgaATAAQAKAAAIAHQAJAHACAJQADAJAAAWIAABFg");
	this.shape_30.setTransform(602.6,56.8,1.123,1.123);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AgdAxQgJgMAAgWIAAhMIAQAAIAABMQAAASAGAGQAGAIAHAAQAGgBAHgFQAFgEAFgKQAEgKAAgLIAAhDIAPAAIAAB3IgOAAIAAgWQgKAagUAAQgPAAgJgNg");
	this.shape_31.setTransform(590.5,57.2,1.123,1.123);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgjBUQgLgJAAgPQAAgRAOgGQgJgIAAgMQAAgOAOgGQgNgNAAgTQAAgSALgMQALgLAPAAQAKAAAKAGQABgMAFgFQAGgFAKAAIAFAAIAAAQQgMAAgDACQgDADgBAIQAJANAAARQAAAQgLAMQgJALgRgBIgGAAIgHgBQgDAAgEACQgEADABAGQgBAGAGADQAFADATAAQAQAAAJADQAIABAFAJQAHAHgBALQAAAjgwAAQgYgBgKgIgAggA6QAAAKAJAFQAJAFAOAAQALAAALgEQAKgFAAgKQAAgGgDgDQgDgDgFgCIgTgBIgXgCQgLAGAAAKgAgRg2QgIAHABANQgBAMAHAHQAFAHAKAAQAKAAAFgHQAHgHAAgMQgBgMgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_32.setTransform(579.3,58.5,1.123,1.123);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFEFE").s().p("AguA8QgUgaAAgiQABgjAUgZQAUgYAcAAQAbAAASAVQASAVAAAfQABAWgKASQgKASgOAAQgMAAgEgOQgJAPgMAAQgOAAgHgNQgKgMABgUQgBgTALgOQAKgOAOAAQAMAAAIAOIABgMIANAAIgGBCQAAAIAHAAQAHAAAGgNQAGgMABgRQgBgbgPgQQgOgQgXAAQgWAAgQAUQgQAUAAAdQAAAdAPAUQAQAVAbAAQAWAAAVgOIAFAOQgYAPgYAAQghAAgTgZgAgOgTQgGAJAAAOQAAANAFAHQAFAIAHAAQAHAAAHgLQAGgKAAgOQAAgLgFgHQgFgHgHAAQgHAAgHAJg");
	this.shape_33.setTransform(565,54.6,1.123,1.123);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AggAtQgMgTAAgaQAAgcAOgRQANgSARAAQAUAAANATQAMASgBAaQABAbgNATQgNASgTAAQgUAAgMgTgAgTgkQgIALAAAZQAAAaAIALQAIALALAAQAMAAAHgMQAJgLgBgZQAAgYgIgMQgJgLgKAAQgLAAgIALg");
	this.shape_34.setTransform(550.8,57,1.123,1.123);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AgNBTIAAhpIgRAAIAAgPIARAAQABgcAIgJQAHgIAOAAIANABIAAAPQgEgBgFAAQgKAAgFAGQgEAFAAAPIAAAEIAXAAIAAAPIgXAAIAABpg");
	this.shape_35.setTransform(541.8,54.4,1.123,1.123);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AAYA+IAAhNQAAgQgFgHQgHgGgIAAQgLAAgIALQgIALAAATIAABBIgPAAIAAh4IAPAAIAAAXQAMgaARAAQALAAAJAHQAHAIADAIQADAJAAAWIAABFg");
	this.shape_36.setTransform(532.2,56.8,1.123,1.123);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AgHBRIAAh3IAPAAIAAB3gAgHg8IAAgVIAPAAIAAAVg");
	this.shape_37.setTransform(523.5,54.6,1.123,1.123);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AghA1QgJgLAAgPQAAgSANgLQANgMAdAAIANABQAAgPgBgGQgDgHgFgDQgGgEgKAAQgXAAgDAWIgOgDQAGgiAkAAQAUAAAKAMQAIALAAAbIAAAyQAAAOACAJIgPAAIgCgVQgKAZgYAAQgQAAgJgLgAgQAHQgKAHAAAOQABAIAFAHQAFAGAKAAQANAAAKgMQAJgMgBgRIAAgIIgOAAQgRAAgLAHg");
	this.shape_38.setTransform(696.7,22.2,1.123,1.123);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AgjA8IAAgOIAzhbIgvAAIAAgOIBDAAIAAAKIg1BfIA1AAIAAAOg");
	this.shape_39.setTransform(686.4,22.2,1.123,1.123);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_40.setTransform(678.8,27.4,1.123,1.123);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("AggAtQgLgTAAgaQAAgcANgRQANgSARAAQAUAAANATQALASAAAaQAAAcgMASQgNASgTAAQgUAAgMgTgAgSgkQgIALAAAZQAAAaAIALQAHALALAAQAMAAAIgMQAIgNAAgXQAAgYgJgMQgIgLgLAAQgLAAgHALg");
	this.shape_41.setTransform(670.2,22.2,1.123,1.123);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEFEFE").s().p("AgdAtQgKgSAAgbQAAgbALgRQAMgTASAAQAQAAAKAMQAJAMADATIgOADQgEgegTAAQgMAAgHANQgHANAAAVQAAAWAHANQAHANALAAQATAAAFgeIAOADQgDAUgKALQgLAMgOAAQgUAAgLgTg");
	this.shape_42.setTransform(659.2,22.2,1.123,1.123);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_43.setTransform(651.1,27.4,1.123,1.123);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEFEFE").s().p("AgfAuQgMgRAAgcQAAgcANgSQANgSASAAQATAAAMARQAMAQAAAgIhGAAQAAAbAJAKQAKAJAJAAQATAAAHgYIAPAEQgEAPgMAKQgLALgPAAQgUAAgMgSgAgRgmQgIAKgBARIA2AAQgBgLgCgHQgCgHgHgHQgGgFgIAAQgKAAgJAKg");
	this.shape_44.setTransform(642.4,22.2,1.123,1.123);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AgXA+IAAh3IANAAIAAAbQAIgTAGgGQAHgGAHAAIAGABIAAASIgDAAQgNgBgIAMQgHALgBATIAAA/g");
	this.shape_45.setTransform(633.6,22,1.123,1.123);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFEFE").s().p("AgdAyQgJgMAAgXIAAhMIAPAAIAABMQAAASAGAHQAHAGAHAAQAGABAGgGQAGgEAEgLQAEgHAAgNIAAhDIAQAAIAAB4IgOAAIAAgYQgLAbgUAAQgPAAgIgMg");
	this.shape_46.setTransform(623.1,22.4,1.123,1.123);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEFEFE").s().p("AgpAdIAPgEQAEAXAaAAQAJAAAHgFQAGgFAAgKQAAgOgRgEIgTgFQgNgDgHgHQgHgJAAgNQAAgPAKgKQAKgLAQAAQAgAAAHAfIgOAEQgHgTgRAAQgJAAgGAFQgGAEAAAJQAAANAPAEIASAEQAeAHAAAcQAAARgLAJQgLALgTAAQghAAgJgjg");
	this.shape_47.setTransform(611.6,22.2,1.123,1.123);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("AAYA+IAAhMQABgRgHgHQgFgHgJAAQgMAAgGAMQgJALABATIAABBIgQAAIAAh3IAPAAIAAAVQALgZASAAQALAAAIAHQAJAIACAIQADAIAAAYIAABEg");
	this.shape_48.setTransform(600.5,22,1.123,1.123);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AgdAyQgJgMAAgXIAAhMIAPAAIAABMQAAASAHAHQAGAGAHAAQAGABAGgGQAGgEAEgLQAEgHAAgNIAAhDIAQAAIAAB4IgOAAIAAgYQgLAbgUAAQgPAAgIgMg");
	this.shape_49.setTransform(588.4,22.4,1.123,1.123);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("AgkBUQgKgJAAgOQAAgSAPgHQgKgHAAgMQAAgOAOgGQgNgNAAgTQAAgSALgLQALgMAPAAQAKAAAKAFQABgMAFgEQAGgFALABIADAAIAAAOQgKABgEADQgEACAAAIQAJAOAAAPQAAASgKAKQgLAMgQAAIgHgBIgGgCQgDABgEADQgDADAAAFQAAAHAFACQAFACATABQAQAAAJACQAIADAGAHQAFAIAAALQAAAjgwgBQgXABgMgJgAggA7QAAAJAJAFQAJAFAOAAQALAAALgFQALgEAAgKQAAgGgEgDQgDgEgFgBIgTgBIgXgCQgLAHAAAKgAgSg2QgGAHAAANQAAAMAGAHQAFAHALAAQAIAAAGgHQAHgHAAgMQAAgLgHgJQgGgHgIAAQgJAAgHAHg");
	this.shape_50.setTransform(577.2,23.7,1.123,1.123);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_51.setTransform(568.5,27.4,1.123,1.123);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgTBYIgNAAIgeh3IAQAAIAVBZIAVhZIAKAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_52.setTransform(558.2,22.2,1.123,1.123);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgUBYIgMAAIgdh3IAOAAIAWBZIAUhZIALAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_53.setTransform(543.3,22.2,1.123,1.123);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgTBYIgNAAIgeh3IAQAAIAVBZIAVhZIAKAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_54.setTransform(528.4,22.2,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(504.1,-38.5,201.3,137.7), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB800").s().p("AAwBRIAAiNIgrCNIgLAAIgriNIAACNIgOAAIAAihIAYAAIAoCBIAniBIAYAAIAAChg");
	this.shape.setTransform(92.2,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB800").s().p("AgsBRIAAihIAuAAQAWAAALAOQAKAPAAATQAAAUgLAOQgLANgTAAIggAAIAABCgAgcgBIAeAAQAMAAAHgIQAHgKAAgNQAAgMgGgKQgGgJgNAAIgfAAg");
	this.shape_1.setTransform(79.1,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB800").s().p("AgtA0IANgGQAJAWAUAAQASAAAJgTQAJgTABghQgOAcgZAAQgSAAgNgPQgMgPAAgXQAAgXANgQQANgRAVAAQAZAAAMAWQAOAWgBAlQAAAngOAYQgNAZgaAAQgeAAgLghgAgYg4QgIAMAAAQQAAASAJAKQAJAJANAAQANAAAJgLQAJgLAAgRQABgOgJgMQgJgLgNAAQgPAAgJALg");
	this.shape_2.setTransform(67,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB800").s().p("AgtA0IANgGQAIAWAUAAQASAAAKgTQAJgUABggQgNAcgaAAQgSAAgNgPQgNgPAAgXQAAgWAOgRQANgRAVAAQAYAAANAWQAOAWAAAlQAAAmgPAZQgOAZgZAAQgfAAgKghgAgYg4QgJANAAAPQAAASAKAKQAKAJAMAAQANAAAJgLQAKgMgBgQQAAgOgJgMQgIgLgOAAQgPAAgIALg");
	this.shape_3.setTransform(55.3,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB800").s().p("AAeBRIgZhGIglAAIAABGIgPAAIAAihIAzAAQAVAAALAOQALAOAAARQAAAOgHALQgFALgOAFIAbBLgAgggFIAjAAQANAAAHgJQAGgIAAgNQABgOgIgGQgHgIgLAAIgkAAg");
	this.shape_4.setTransform(43.7,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgHBRIAAhEIgthdIAUAAIAiBKIAkhKIAPAAIgsBdIAABEg");
	this.shape_5.setTransform(95.2,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgmBRIAAihIARAAIAACPIA8AAIAAASg");
	this.shape_6.setTransform(85.9,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AAhBRIhEiNIABCNIgOAAIAAihIAVAAIA/CDIAAiDIANAAIAAChg");
	this.shape_7.setTransform(73.8,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AgoA8QgOgXAAglQAAgkAPgYQAPgYAYAAQAZAAAPAYQAPAYAAAkQAAAhgPAaQgPAagZAAQgaAAgOgZgAgagwQgKASAAAfQAAAeAKASQAKATAQAAQASAAAJgTQAKgUAAgdQAAgggKgRQgKgSgRAAQgQAAgKATg");
	this.shape_8.setTransform(60.9,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AAwBRIAAiNIgrCNIgLAAIgriNIAACNIgOAAIAAihIAYAAIAoCBIAniBIAZAAIAAChg");
	this.shape_9.setTransform(41.5,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgnA8QgPgYAAgkQAAgkAPgYQAPgYAYAAQAZAAAPAYQAPAYAAAkQAAAigPAZQgOAagaAAQgZAAgOgZgAgagwQgKAUAAAdQAAAeAKASQAKATAQAAQARAAALgTQAJgTAAgeQAAgggKgRQgKgSgRAAQgQAAgKATg");
	this.shape_10.setTransform(27,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAfBRIgZhGIglAAIAABGIgQAAIAAihIA0AAQAVAAAKAOQALAOgBARQAAAOgFALQgGALgNAFIAaBLgAgfgFIAiAAQAOAAAGgJQAHgIAAgNQAAgNgHgHQgHgHgLAAIgkAAg");
	this.shape_11.setTransform(15,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgoBRIAAihIBRAAIAAASIhAAAIAAAzIA1AAIAAAPIg1AAIAABNg");
	this.shape_12.setTransform(4.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,100.5,40), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC300").s().p("AA3CAIAAi2IgoC2IgoAAIgoi2IAAC2IgxAAIAAj/IBVAAIAeCHIAdiHIBUAAIAAD/g");
	this.shape.setTransform(803.7,90.3,1.476,1.476);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AAWCAIgehiIgUAAIAABiIhBAAIAAj/IBtAAQAkgBAVAVQAUAVAAAiQAAAWgHASQgIAQgWANIAmBvgAgcgYIAcAAQALAAAHgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_1.setTransform(768.5,90.3,1.476,1.476);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("AAiCAIgMgyIg3AAIgNAyIg1AAIBBj/IBEAAIBCD/gAgWAWIAhAAIgQhKg");
	this.shape_2.setTransform(737,90.3,1.476,1.476);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AhOCAIAAj/ICdAAIAAA6IheAAIAAAmIBMAAIAAA4IhMAAIAAAqIBeAAIAAA9g");
	this.shape_3.setTransform(709.4,90.3,1.476,1.476);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AAWCAIgehiIgUAAIAABiIhBAAIAAj/IBtAAQAlgBAUAVQAUAVAAAiQAAAWgHASQgIAQgWANIAmBvgAgcgYIAcAAQALAAAHgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_4.setTransform(679.3,90.3,1.476,1.476);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AggCAIAAj/IBAAAIAAD/g");
	this.shape_5.setTransform(655.3,90.3,1.476,1.476);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AhLCAIAAj/ICXAAIAAA9IhYAAIAAApIBDAAIAAA6IhDAAIAABfg");
	this.shape_6.setTransform(636.3,90.3,1.476,1.476);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AAWCBIgehiIgUAAIAABiIhBAAIAAkBIBtAAQAlAAAUAWQAUAVAAAhQAAAXgHARQgIAQgWAMIAmBxgAgcgXIAcAAQAKgBAIgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_7.setTransform(588.7,88.8,1.476,1.476);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("Ag9BvQgZgWAAgtIAAiuIBCAAIAAClQAAARAGAKQAHAIANAAQALAAAIgGQAIgGABgIQABgIABgWIAAiWIAyAAIAACqQAAAwgXAWQgXAUgnAAQgmAAgYgTg");
	this.shape_8.setTransform(557,89.1,1.476,1.476);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AhHBgQgcgjAAg8QAAg6AaglQAbglAvAAQArAAAcAjQAcAkAAA6QAAA8gcAlQgbAmgtgBQgrABgcglgAgeADQAABHAeAAQAQAAAHgRQAHgRAAguQAAhDgdAAQgfAAAABMg");
	this.shape_9.setTransform(525.7,88.8,1.476,1.476);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgcCBIAAhtIhHiUIBHAAIAkBWIAjhWIA5AAIhCCUIAABtg");
	this.shape_10.setTransform(495.8,88.8,1.476,1.476);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAZCBIAAhkIgxAAIAABkIhAAAIAAkBIBAAAIAABfIAxAAIAAhfIBAAAIAAEBg");
	this.shape_11.setTransform(454.5,88.8,1.476,1.476);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_12.setTransform(427.6,88.8,1.476,1.476);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgfCBIAAkBIA/AAIAAEBg");
	this.shape_13.setTransform(409.2,88.8,1.476,1.476);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AAeCBIgeiNIgaCNIg5AAIg4kBIA9AAIAdCUIAdiUIAyAAIAfCUIAeiUIAxAAIg4EBg");
	this.shape_14.setTransform(380.7,88.8,1.476,1.476);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhXAAIAAAjIBGAAIAAAzIhGAAIAAAnIBXAAIAAA5g");
	this.shape_15.setTransform(810.8,32.9,1.476,1.476);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AhFB3IAAjtICLAAIAAA5IhRAAIAAAmIA+AAIAAA1Ig+AAIAABZg");
	this.shape_16.setTransform(786.8,32.9,1.476,1.476);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_17.setTransform(767.1,32.9,1.476,1.476);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AhDB3IAAjtIA8AAIAACyIBLAAIAAA7g");
	this.shape_18.setTransform(749.5,32.9,1.476,1.476);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AAUB3IgbhbIgTAAIAABbIg8AAIAAjtIBlAAQAiAAASAUQASASAAAgQAAAWgGAPQgHAOgUAMIAiBogAgagWIAaAAQAKAAAHgGQAGgFAAgLQAAgXgWAAIgbAAg");
	this.shape_19.setTransform(711.8,32.9,1.476,1.476);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("Ag4BlQgXgSAAgqIAAigIA9AAIAACXQAAASAGAHQAGAIAMgBQALABAGgGQAHgFACgIIABgcIAAiJIAvAAIAACbQAAAugWATQgVATgjABQgkAAgWgUg");
	this.shape_20.setTransform(682.6,33.1,1.476,1.476);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AhCBZQgaghAAg4QAAgzAZgkQAZgiArAAQAoAAAaAgQAZAhABA3QAAA3gbAiQgZAigpAAQgoAAgaghgAgbACQAABCAbAAQAPAAAGgQQAHgPAAgrQAAg9gbAAQgcAAAABFg");
	this.shape_21.setTransform(653.8,32.9,1.476,1.476);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgZB3IAAhlIhCiIIBCAAIAhBPIAghPIA0AAIg9CIIAABlg");
	this.shape_22.setTransform(626.2,32.9,1.476,1.476);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("Ag/BaQgYgfAAg4QAAg1AXgjQAYgkAtAAQAjAAAVAVQAUAVAHAoIg6AHQgEglgWABQgdgBAABEQAAAoAKAOQAKANAMAAQAKAAAIgIQAIgIAAgOIggAAIAAgyIBXAAIAACFIgdAAQgDgLgFgOQgRAcgjAAQgmAAgYggg");
	this.shape_23.setTransform(577.3,32.9,1.476,1.476);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AAiB3Ig0hpQgIgQgMggQAEAWAAAQIAABzIgwAAIAAjtIA4AAIAtBXQAMAYAIAVQgFgdAAghIAAhGIAxAAIAADtg");
	this.shape_24.setTransform(548.3,32.9,1.476,1.476);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_25.setTransform(526.6,32.9,1.476,1.476);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AhVB3IAAjtIBLAAQAwAAAYAkQAZAjAAAvQAAA0gbAhQgZAigpAAgAgaBAIAQAAQAOAAAKgRQAKgSAAgeQAAgZgJgTQgJgSgQgBIgQAAg");
	this.shape_26.setTransform(505.8,32.9,1.476,1.476);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AAjB3Ig1hpQgLgVgKgbQAFAWAAAQIAABzIgwAAIAAjtIA4AAIAtBXQAMAYAIAVQgFgeABggIAAhGIAwAAIAADtg");
	this.shape_27.setTransform(475.8,32.9,1.476,1.476);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhXAAIAAAiIBGAAIAAA0IhGAAIAAAnIBXAAIAAA5g");
	this.shape_28.setTransform(449.2,32.9,1.476,1.476);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AhFB3IAAjtICLAAIAAA5IhRAAIAAAmIA+AAIAAA1Ig+AAIAABZg");
	this.shape_29.setTransform(425.3,32.9,1.476,1.476);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhWAAIAAAiIBFAAIAAA0IhFAAIAAAnIBWAAIAAA5g");
	this.shape_30.setTransform(400.7,32.9,1.476,1.476);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AhVB3IAAjtIBLAAQAvAAAZAkQAYAkAAAuQAAA0gaAhQgaAigoAAgAgaBAIAQAAQANAAALgRQAKgRAAgfQAAgZgJgTQgJgSgQgBIgQAAg");
	this.shape_31.setTransform(373.4,32.9,1.476,1.476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(360,14.9,461.6,94.4), null);


(lib.med4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC300").s().p("AgZBFQgKgFgGgJQgFgKgCgNQgCgMgBgUQAAgPADgOQADgMAGgMQAHgJAKgGQAKgFAOgBQANAAALAGQAKAFAFAJQAGAJACAPQADAPAAAPQgBARgDAOQgCAOgHAJQgFALgLAEQgKAFgNABQgQgBgJgFgAgKgvQgEAEgCAGQgDAHgBAJIAAAtQABAJADAIQACAFAFADQAEACAFABQAEgBAEgBIAFgEIAFgHIACgKIABgtIgCgNQAAgHgCgDIgFgHQgCgCgDgBIgHgBQgGAAgEADg");
	this.shape.setTransform(129.2,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AgZBFQgKgFgFgJQgFgKgDgNQgDgQABgQQAAgPACgOQAEgPAFgJQAHgJAKgGQAKgFAOgBQANAAALAGQAKAEAFAKQAFAKADAOQADAPgBAPQAAARgCAOQgDAOgGAJQgHALgKAEQgKAFgOABQgOgBgKgFgAgKgvQgEAEgCAGQgEAHAAAJIgBAVQAAAPABAJQABAJADAIQAEAGADACQAEACAFABQAEgBADgBIAGgEQADgDABgEIADgKQABgFABgIIAAggIgCgNQgBgGgCgEIgEgHQgCgCgEgBIgHgBQgFAAgFADg");
	this.shape_1.setTransform(117.7,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("AgZBFQgLgFgEgJQgGgKgCgNQgDgQAAgQQAAgPAEgOQACgPAHgJQAGgJAKgGQAKgFANgBQAOAAALAGQAJAEAHAKQAFALADANQACAMAAASQgBAPgCAQQgDAPgHAIQgFAKgKAFQgLAFgOABQgPgBgJgFgAgKgvQgEADgDAHIgDAQIgBAVQAAAPACAJQAAAJADAIQADAGAEACQAEACAFABQAFgBADgBIAGgEIADgHIADgKQACgFAAgIIAAggIgCgNIgDgKQgCgEgCgDQgDgDgDAAIgHgBQgFAAgFADg");
	this.shape_2.setTransform(106.1,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AgSAgIgCgBIgBgBIAAgCIAOgeIAAgSIABgGIADgDIAEgCIAGAAIAHAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABIAEADIAAAGIAAAIQgBAEgBADIgDAGIgDAGIgOAVIgCACIgCABIgIABg");
	this.shape_3.setTransform(97,42.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AgVBJIgLgDIgIgCIgDgCIgCgCIAAgCIgBgEIAAgKIABgEIABgCIACAAIASAHQAFABAIAAQAGAAAFgBQAFgCAEgDQADgDACgEQACgEAAgHQAAgFgCgEQgBgEgDgDQgEgDgGgCIgZAAIgJAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgCgBgDIAAg/QAAgEACgCQADgCADAAIBDAAIACABIABACIABAEIAAAFIgBAKQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAIgyAAIAAAfIAQgBQAJAAAKADQAKADAGAFQAGAGADAGQADAIAAAKQAAANgEAIQgDAJgJAGQgFAGgMAEQgLADgLAAg");
	this.shape_4.setTransform(88.7,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AAeBIIgFgBQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgCIgSgqIgEgHQgCgDgEgCIgRgBIAAA3IgBACIgCABIgFABIgOAAIgEgBIgDgBIAAgCIAAiCQAAgFACgCQADgCADAAIA0ABQALABAFADQAHADAFAFQAFAFACAGQADAIAAAHQAAAIgCAGIgFAKQgFAGgEACQgGADgGACIAGAEIAFAFIAFAHIARAmIACAGIAAADIAAACIgCABIgFABgAgXgIIAPAAIAKgBQAEgCADgDQAEgCABgEQACgEAAgFQAAgHgEgFQgDgFgHgBIgEgBIgIgBIgNAAg");
	this.shape_5.setTransform(77,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgKAfQgGgCgEgEQgDgEgDgGQgCgGAAgIQAAgIACgFQADgHADgEQAFgFAFgCQAEgCAHAAQAIAAAFACQAFADADADQADAEACAGQACAFAAAGIAAADQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgDABIgjAAIABAHQABADACACIAFAEIAGAAIAIAAIAJgDIADAAIAAAAIABABIAAABIABADIgBACIAAACIgBACIgCACIgFABIgHABIgHAAQgHAAgGgBgAgDgTIgFAEQgBACgBACIgBAFIAYAAQAAgGgDgEQgCgEgIAAg");
	this.shape_6.setTransform(127.9,51.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AgNAgIgDAAIgBgBIgBgCIAAg5IABAAIABgBIACgBIAHAAIACABIABABIAAAIIAHgJIAEgBIAEgBIACAAIAFACIAAAAIAAABIABACIAAAEIgBAEIAAACIgBABIgCAAIgFgBIgGADIgDADIgCAEIAAAjIgBACIgBABIgCAAg");
	this.shape_7.setTransform(122.7,51.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AgNAfIgGgDQgDgCgCgEQgCgEAAgEQAAgGADgDQABgDAEgCQAGgDAEgBQAGgBAHAAIAFAAIAAgDIAAgFIgCgDIgDgCIgFgBIgHABIgKAEIgCAAIgCAAIAAgBIgBgFIAAgDIABgCIADgCIAGgDIAHgBIAGgBIAMABQAFACADADQACACACAFQACAEgBAGIAAAmIgBABIgBABIgIAAIgCgBIgBgBIAAgFQgEAEgEACQgFACgEAAIgJgBgAgCAFIgEABIgDAEIgBADQAAAEACACQACACAFAAQACAAAEgBIAFgGIAAgKg");
	this.shape_8.setTransform(116.6,51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AgIApQgHgDgFgFQgEgFgEgIQgCgJAAgKQAAgJADgJQADgJAFgFQAGgGAGgDQAHgCAIAAIAGAAIAHACIAIAEIABABIABACIAAACIAAAGIAAADIgBABIgBAAIgDgBIgEgCIgGgDQgCgBgGAAQgDAAgFACQgDACgDAEIgEAJQgBAGgBAFQABAIABAFQACAGADADQABACAEADIAJACIAIgBIAJgFIADgBIABAAIABABIAAADIAAAIIAAABIgCACIgDACIgMAEIgIAAQgGAAgIgCg");
	this.shape_9.setTransform(110,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgDAtIgDAAIgBgBIAAhXIABgBIADAAIAHAAIADAAIABABIAABXIgBABIgDAAg");
	this.shape_10.setTransform(101.8,49.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgNAfIgGgDQgDgCgCgEQgBgEgBgEQAAgGACgDIAGgFQAFgDAFgBQAGgBAHAAIAFAAIAAgDIAAgFIgCgDIgDgCIgFgBIgHABIgFACIgFACIgCAAIgBAAIgBgBIgBgCIAAgGIACgCIACgCIAGgDIAGgBIAHgBIAMABQAEACADADQAEACABAFQACAEgBAGIAAAmIAAABIgCABIgIAAIgCgBIgBgBIAAgFQgEAFgEABQgEACgFAAIgJgBgAgBAFIgFABIgDAEIgBADQABADACADQACACAFAAIAFgBIAFgGIAAgKg");
	this.shape_11.setTransform(96.7,51.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgDAsIgCAAIgBgBIgBgBIAAg5IABgBIABgBIACgBIAHAAIACABIACABIAAABIAAA5IAAABIgCABIgCAAgAgGgcQgDgDAAgDQAAgFADgCQABgCAFAAQAGAAABACQACABAAAFQAAAFgCACQgCACgFAAQgEAAgCgCg");
	this.shape_12.setTransform(91.9,49.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgHAeQgGgCgDgEIgFgKQgCgFAAgIQAAgIADgGQACgGADgFQAEgEAGgCQAEgCAHAAIAEABIAFABIAGAEIABABIABABIABACIAAACIgBAGQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIgDgBIgCgBIgEgCIgGgBQgGAAgCAEQgEAGAAAIIABAIIADAGIACAEIAHABIAFgBIAFgCIACgDIACgBIABABIABABIABADIAAAHIgBACIgBABIgDACIgEACIgLABQgHAAgEgCg");
	this.shape_13.setTransform(87.6,51.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgOAeQgFgCgEgEIgFgKQgCgGAAgHQAAgIACgFQABgGAEgFQAFgEAFgCQAFgCAIgBQAKAAAEACQAFACAFAEQADAFACAGQACAEAAAJQAAAFgCAIQgCAGgEAEQgDAEgHADQgGACgHAAQgIAAgGgCgAgGgRIgEADIgDAHIgBAHIABAIIADAGQAAACAEACQADABADABIAGgBQADgCABgDQACgBABgEIABgJIgBgHIgCgGIgEgEQgDgBgEAAIgGABg");
	this.shape_14.setTransform(81.2,51.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AgLArIgGgCIgFgCIgDgCIgBgCIAAgIIAAgDIABgBIABAAIADABIAEACIAGADIAIABIAFgBIAEgCIADgEIABgEQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBIgEgDIgSgKQgDgBgCgDQgDgCgBgEQgCgDAAgGQAAgGACgFQACgEAEgEQAEgDAFgBIAKgBIAGAAIAKADIADABIABACIAAABIABACIAAADIgBADIAAACIAAACIgCAAIgCgBIgJgEIgHgBIgDAAIgEACIgCAEIgBADQAAADACACIAEADIASAKIAGAEQACACACAEQABAEAAAFQAAAIgCAEQgDAFgEADQgGAEgEABQgFABgGAAIgIAAg");
	this.shape_15.setTransform(74.4,50.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgNAeQgFgBgEgFQgFgEgCgGQgBgGAAgHQAAgIACgFQACgGAEgFQADgDAHgDQAFgCAHgBQAKAAAEACQAGACAEAEQADAFACAGQACAFAAAIQAAAHgCAGQgCAHgEADQgDAEgHADQgGACgHAAQgJAAgEgCgAgFgRIgFADIgCAHIgBAHIABAIIACAGQACADACABQADABADABIAGgBIAEgFQADgCABgDIAAgJIAAgHIgDgGIgEgEQgDgBgEAAg");
	this.shape_16.setTransform(97.7,21.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AAIAoIgIgBIgFgEQgDgDgBgEIgBgJIAAgdIgHAAIgCgBIAAgFIAAgDIAAgCIABgCIAIAAIAAgNIAAgBIABgBIAHgBIAGABIABABIAAAOIAOAAIABACIAAACIABADIgBAFIgCABIgNAAIAAAbQAAAFABACQACACAEAAIADAAIACgBIACAAIABABIAAACIABADIgBAEIgBACIgCABIgCABIgEABg");
	this.shape_17.setTransform(91.8,20.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgaArIgCgBIAAgBIAAhQIAAgBIABgBIACgBIAHAAIACABIABABIABABIAAAHIAFgFIAFgDIAEgCIAGgBQAHAAADADQAEACAEAEQADAFABAGQABAFAAAHQAAAIgBAFQgDAHgCADQgDAFgFACQgEACgHAAIgEAAIgEgBIgEgDIgEgDIAAAbIAAABIgBABIgHABgAgBgcQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgDADIgEAEIAAATIAHAGQADADACAAQAEAAACgCIADgEIADgFIAAgHIAAgHIgCgGIgEgEQgCgCgDAAg");
	this.shape_18.setTransform(83.2,22.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgOApQgGgCgEgEQgFgFgCgFQgDgHABgHIAAgyIAAgBIABgBIADgBIAIAAIADABIACABIAAABIAAAwIABAJIADAGIAGAEIAHABIAHgBIAFgEIAEgGIABgIIAAgxIAAgBIABgBIADgBIAIAAIACABIACABIAAABIAAAxQAAAHgCAHQgCAHgEADQgFAFgHACQgGACgIAAQgIAAgGgCg");
	this.shape_19.setTransform(75.1,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsCPIAAgqIguAAIAAg6IgigIIAfg3QgDgQADgTIABgEIAMAAIAAgHQgTgMAAgWQAAgRAMgNQANgMAQABQARgBAMAMQAMAMABARIALgmIAtAUIgPAHIANAZIAJAAQAEAAADgCQACgDABgEIAAgSIgKAAIAAgbIAcAAIAAAbIgJAAIAAASQgBAIgFAFQgFAGgIgBIgGAAIAJATIAWAAIAbg/IAagTIAAAhIgVAxIAKAAIACAoQAAAcgNAbQgOAagXAQIAABBgAhUgUIAAACIgbAvIAfAHIAAA4IAuAAIAAAqIBbAAIAAg8IABgCQAYgPAMgZQANgZAAgaIgBgfIi+AAQgDAPADAPgABSg7IANAAIAUgwIgLgGgAAog7IgJgTIgRAAIAIATIASAAgAAMg7IgIgTIgDAAQgDAAgCADQgDADAAAEIAAAJIATAAgAgRhdQgDASgOAJIAAAHIASAAIAAgJQAAgIAFgEQAFgGAGgBIgEgLgAgwhuQAEAEAAAGQAAAKgJADIAAAcIAJAAIAAgMIADgBQAQgKAAgSQAAgOgKgJQgKgJgNAAQgNAAgJAJQgKAJAAAOQAAASAQAKIADABIAAAMIAJAAIAAgcQgKgDABgKQAAgGADgEQAFgEAFAAQAGAAAEAEgAAKhXIASAAIgPgdIAFgDIgSgHIgEARIAEgCgAg+hkQAAAEAEAAQAFAAAAgEQAAgFgFAAQgEAAAAAFgABvh4IAFADIAAgGgAA5h7IAJAAIAAgJIgJAAgAhBgTQgGgGAAgLIAJAAQAAAOANAAQAPAAAAgOIAJAAQAAALgHAGQgGAGgLAAQgJAAgHgGg");
	this.shape_20.setTransform(24.2,35.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F87315").s().p("ABqEYQhUgOhBhGQg+hCgBg/IAAlaIDVAAIAAIvg");
	this.shape_21.setTransform(14.8,38.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EAEAEA").s().p("AB/FIQhlgRhOhVQhJhPgBhLIAAmPID9AAIAAApIjUAAIAAFaQABA/A+BCQBBBGBUAPIAAAAIAAA2g");
	this.shape_22.setTransform(12.8,38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC800").s().p("Ag7AYIASgYIAUAOIAig4IAvADIhNBSg");
	this.shape_23.setTransform(47.5,9.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF7A11").s().p("AAAEYQhUgOhBhGQg/hCAAg/IAAlaIFRAAQADAjAZAZQAaAYAiACIAAEEQAAA/g/BCQhBBGhUAOg");
	this.shape_24.setTransform(25.5,38.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgcFlQhlgRhPhUQhJhPgChLIAAmPIGCAAQALgaAXgRQAYgQAdAAQAnAAAbAbQAcAcAAAmQAAAdgQAXQgQAYgaAKIAAEXQgBBLhKBPQhPBUhjARg");
	this.shape_25.setTransform(28.4,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.med4, new cjs.Rectangle(0,0,134.4,71.5), null);


(lib.med3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("Ag5B5IgGgGQgIgIAAgMQAAgMAIgJIACgCQAEgFAJgCIAOgEQAGgBADgEIAqgrIgDgDQgEgEAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEIAEAEIAjgjIAAANIgjAiIgKgJQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgEABQgDADADADIAKAKIgwAyQgGAGgIACIgNADQgFABgFAEIgCACQgFAGAAAIQAAAHAFAHIAGAFQAHAGAIAAQAHAAAGgGIACgBQAEgFABgEIADgOQADgIAFgGIAxgyIALALIACABIAEgBQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgKgKIAWgVIAAANIgJAIIADADQAFAEAAAGQAAAHgFADQgDAEgHAAQgGAAgEgEIgDgDIgrArQgEAFAAAEIgDAOQgDAIgGAGIgBABQgJAJgLAAQgNAAgIgJgABAg1QgDACgEAAQgEAAgCgCIgGgGQgCgCgBgEQgDgBgCgCIgGgFQgDgDAAgEQAAgFADgDIAqgpIAAAOIgjAiIAAABIAGAGIABAAIAcgcIAAAOIgVAUIAAACIAFAGQAEgDADAAQAEAAADADIACABIAAAOg");
	this.shape.setTransform(18.3,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F87315").s().p("ABqEZQhUgPhBhHQg+hCgBg+IAAlbIDVAAIAABhIgpApQgDADAAAFQAAAEADADIAFAFQACACADABQABAEACACIAGAGQADACAEAAQADAAAEgCIAIAHIAAAFIgjAjIgEgEQgEgEgGAAQgGAAgEAEQgEAEAAAHQAAAFAEAFIADACIgrArQgDAEgFABIgOAEQgIACgFAFIgCACQgIAIAAAMQAAAMAIAJIAGAGQAJAIAMAAQALAAAIgIIACgBQAFgGADgIIADgOQABgEAEgFIArgrIAEAEQAEAEAGAAQAGAAAEgEQAEgEAAgGQAAgGgEgEIgDgDIAIgIIAAFCgAgQA8IgGgFQgGgHAAgIQAAgHAGgGIABgCQAGgEAEgBIAMgEQAJgCAFgFIAygyIgKgJQgEgDAEgEIADgCQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIAKAKIAjgjIAAAbIgWAWIAKAKQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIgDABIgDgBIgLgLIgyAxQgFAGgCAIIgEANQAAAFgFAEIgBACQgGAGgHAAQgIAAgGgGgABphyQgCgDgEAAQgEAAgDADIgGgHIAAgBIAVgUIAAAdgABOiBIgGgFIAAgCIAjghIAAANIgcAbg");
	this.shape_1.setTransform(14.8,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AB/FHQhlgQhNhVQhLhPAAhKIAAmQID+AAIAAApIjVAAIAAFbQABA+A+BCQBABHBVAOIABAAIAAA1g");
	this.shape_2.setTransform(12.8,38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AgZBFQgKgEgFgLQgGgIgCgOQgDgPAAgRQAAgQAEgOQADgNAFgLQAHgJAKgFQAJgGAOAAQAQAAAJAGQAKAFAGAJQAFAKACANQADAQAAAPQgBARgDAOQgCANgHAKQgFAKgLAFQgKAGgNAAQgOgBgLgFgAgJgwQgGAEgBAGQgDAJgBAHIAAAuIAEARQADAFAEADQADACAGAAQAEAAAEgBQADgBACgEIAFgGIACgKQABgGAAgHIAAghIgCgNQAAgGgCgDQgCgEgDgDQgDgDgCAAIgHgBQgGAAgDACg");
	this.shape_3.setTransform(152,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AgZBFQgKgFgFgKQgGgIgCgOQgDgPABgRQAAgQACgOQADgNAGgLQAIgJAJgFQAJgGAPAAQAOAAAKAGQAKAFAFAJQAHALABAMQACANAAASQAAARgDAOQgCANgHAKQgFAKgLAFQgLAGgNAAQgNgBgLgFgAgKgwQgEADgCAHIgEAQIgBAWQAAAOABAKQABAJADAIQADAFAEADQADACAGAAIAHgBQADgBADgEIAEgGIADgKQABgGABgHIAAghIgCgNIgDgJQgCgFgDgCQgCgDgDAAIgHgBQgFAAgFACg");
	this.shape_4.setTransform(140.5,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AgZBFQgJgEgGgLQgGgIgCgOQgCgMAAgUQAAgSACgMQADgNAGgLQAHgJAKgFQAKgGANAAQAPAAAKAGQAKAFAFAJQAGAJACAOQACANAAASQAAAOgCARQgDANgGAKQgHAKgKAFQgLAGgMAAQgOgBgLgFgAgKgwQgEADgDAHQgCAHgBAJQgBAJAAANQAAAOABAKQACAMACAFQACAFAFADQAEACAFAAQAEAAADgBQAEgBACgEIAEgGIADgKIACgNIgBghIgBgNIgDgJQgBgEgDgDIgGgDIgHgBQgFAAgFACg");
	this.shape_5.setTransform(128.9,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AgRAgIgDgBIgBgBIAAgCIAOgeIAAgRQAAgFABgCIACgDIAFgCIAGAAIAHAAIAFACQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIABAHIgBAOIgDAGIgEAGIgOAVIgCACIgCABIgDABg");
	this.shape_6.setTransform(119.8,42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC300").s().p("AgZBFQgKgFgFgKQgGgIgCgOQgDgPAAgRQAAgQAEgOQADgNAFgLQAHgJAKgFQAJgGAOAAQAQAAAJAGQAKAFAGAJQAFALACAMQACANABASQAAAOgDARQgDAOgHAJQgGAKgJAFQgLAGgNAAQgOgBgLgFgAgJgwQgFADgCAHIgEAQIgBAWQAAAOACAKQAAAJADAIQADAFAEADQADACAGAAQAEAAAEgBQACgBADgEIAFgGIACgKQABgGAAgHIAAghIgBgNIgDgJQgCgEgDgDQgDgDgCAAIgHgBQgFAAgEACg");
	this.shape_7.setTransform(111.5,35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC300").s().p("AggBGIgHgCIgEgDIgCgBIgBgDIAAgIIABgJIABgCIACgBIAJAFIAJACQAGACAHAAQAHAAAEgCIAJgEQADgDACgEQACgEAAgHQAAgFgBgEQgDgFgDgDIgJgEQgFgBgIAAIgVABQgDAAgCgCIgBgFIAAg+QAAgFABgBQACgCAEAAIBDAAIACAAIABACIABAEIABAGQAAAHgCADQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgyAAIAAAeIAQAAQAKAAAJADQAIACAIAGQAGAFADAHQADAHAAALQAAALgEAKQgEAJgHAGQgHAGgLAEQgMADgKAAg");
	this.shape_8.setTransform(100,35.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC300").s().p("AALBHIgDgBIAAgCIAAgaIg2AAIgCgBIgDgBIgBgEIgBgHIABgLIACgEIAuhSIACgBIACgCIAZgBIAHABIADACIABACIAABVIANAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAABQACACgBAHQABAFgCADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgNAAIAAAaIgBACIgCABIgLABgAgdASIAlAAIAAhBg");
	this.shape_9.setTransform(88.4,35.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC300").s().p("AAaBHIgDgBIgTgtIgEgHIgGgEQgDgBgFAAIgJAAIAAA2IgBADIgCABIgFABIgHAAIgHAAIgFgBIgBgBIgBgDIAAiBQgBgFADgCQADgCAEAAIAtAAIAHAAQAIACAHADQAHACAFAGQAEAEAEAHQACAHAAAIQAAAIgCAFQgCAGgEAFQgCAEgGAEIgMAFIAGADIAFAGIAFAHIATAsIABADIgBACIgCABIgFABIgJAAgAgXgIIAPAAIAJgCQAFgBAEgDQADgDABgDQABgEAAgFQAAgHgDgFQgCgEgIgDIgEgBIgVAAg");
	this.shape_10.setTransform(76.8,35.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgPAeIgBgBIgBgBIAAg3IACgBIACgBIAGAAIACABIABABIABABIAAAHIADgGIADgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIADgBIAEAAIACABIABABIABABIAAAJIgBADIAAABIgBAAIgCAAIgBgBIgCAAIgCAAIgCAAIgDACIgFAHIAAAiIgBABIgBABIgGABg");
	this.shape_11.setTransform(128.8,50.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgJAdQgHgCgDgDQgEgEgBgGQgCgFAAgJQAAgEACgIQACgHADgDQAEgEAFgCQAFgCAGAAQAIAAAEACQAFABADAEQADAEACAFIABALIAAACIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIghAAIABAGIACAFIAFADIAGABIAHAAIAMgEIABABIAAAAIABACIAAAFIgBACIAAABIgBABIgCABIgLADIgHAAQgFAAgHgCgAgDgSIgEADIgCAEIgBAGIAWAAQAAgHgCgEQgDgDgGAAg");
	this.shape_12.setTransform(123,51);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgIAdIgBgBIgSgyIAAgDIAAgDIADgBIAIAAIACAAIACABIABABIALAqIAOgqIAAgBIABgBIADAAIAHAAIACAAIABABIAAAEIAAACIgRAxIgBABIgCABIgIABg");
	this.shape_13.setTransform(117,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgNAdQgFgCgEgEIgFgKQgCgFAAgIQAAgGACgGQACgFAEgFQAEgEAFgCQAGgCAHAAQAHAAAGACQAFABAEAFQAEAFABAEQACAFAAAIQAAAEgCAIQgBAFgFAFQgDAEgGADQgHACgGAAQgFAAgIgCgAgFgRIgEAEIgDAGIgBAHIABAHIACAGIAEAEQADACADAAQAEAAACgCQADgBABgCIADgGIABgIIgBgHIgCgGIgEgEQgDgBgEAAQgCAAgDABg");
	this.shape_14.setTransform(110.6,51);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AgIAnQgGgCgFgFQgFgHgCgGQgDgJAAgJQAAgIADgJQADgIAFgFQAEgFAHgEQAHgCAIAAIAMACIAFACIADACIABABIAAACIAAACIABACIgBAEIAAACIgBABIgBAAIgCAAIgEgDIgFgDIgIgBQgFAAgDACQgCACgEAEIgEAJQgBAFAAAFQAAAHABAGQACAFADADQACADADACQAEACAFAAIAHgBIAJgEIADgBIABAAIAAABIABABIAAAHIgBADIgBABIgIAFIgGABIgIABQgIgBgGgCg");
	this.shape_15.setTransform(103.9,49.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgFAqIgBAAIgBgBIAAhRIABgBIABgBIACAAIAHAAIACAAIACABIAABTIgCAAIgGABg");
	this.shape_16.setTransform(96,49.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgMAeQgEgBgDgCIgEgGQgBgDAAgFQAAgEABgEIAGgFQADgCAGgCIASgBIAAgDIgBgFIgBgDIgEgCIgEgBIgHABIgFACIgHADIgBAAIgBgCIAAgCIAAgFIABgCIADgCIAFgCIAHgCIAGAAIALABIAHAEQAEADABAEQABAEAAAFIAAAlIAAABIgCABIgEAAIgEAAIgCgBIgBgBIAAgFQgEAEgEACQgEACgEAAIgIgBgAgCAFQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgCADIgBAEQAAADACACQACACAEAAIAFgCQADgBADgEIAAgJIgGAAg");
	this.shape_17.setTransform(91.1,51);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgNApIgIgDIgEgFQgCgCAAgEIABgEIABgEIACgDIAEgDQgDgBgBgDQgBgCAAgDQgBgEACgCQABgDAEgCQgEgDAAgDQgBgDgBgEQAAgFACgEQACgDADgDIAIgEQADgCAGAAIADABIAFABIASAAIACABIAAAEIAAAFQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgHAAIACAEIAAAEQABAFgCADQgCAEgCADQgFADgDAAQgEACgEAAIgGgBIgDgBIgBACIgBABIACADIAEABIANABQAFAAADABQAEABACACIAEAFIABAHIgBAIIgGAGIgJAEQgFACgGAAgAgJATIgCACIgBACIAAACQAAADADACQADABAGAAIAFgBIAEgBIACgDIAAgDQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBAAAAQgDgCgEAAIgKAAgAgFgdIgCACQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAEQAAADADAEQACACAFAAIACgBIADgCIADgDIAAgDQAAgFgDgCQgCgDgDAAg");
	this.shape_18.setTransform(85.3,52);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgJAdQgHgCgDgDQgDgDgDgHQgBgFAAgJQAAgGABgGQADgGAEgEQACgEAGgCQAEgCAHAAQAIAAAEACQAFABADAEQADAEACAFIABALIAAACQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIggAAIABAGIACAFIAFADIAGABIAHAAIALgEIABABIABAAIABACIAAAHIgCACIgCABIgLADIgIAAQgFAAgGgCgAgEgSIgDADIgCAEIgBAGIAWAAQAAgIgDgDQgDgDgGAAg");
	this.shape_19.setTransform(79.1,51);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AgQApQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAhIIAAgBIACAAIAGgBIAHABIABAAIAAABIAABAIAZAAIABAAIAAABIABAFIgBAGIAAABIgBABg");
	this.shape_20.setTransform(73.6,49.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgNAfQgHgDgDgEQgDgDgDgHQgBgGAAgHQAAgHACgGQACgGAEgEQAEgFAGgCQAGgDAGAAQAHAAAHACQAGACAEAFQADAEACAGQACAFAAAIQAAAHgCAGQgCAHgEADQgEAFgGACQgGADgHAAQgGAAgHgCgAgFgRIgFADIgCAHIgBAHIABAIIACAGIAEAEQADACADAAQAEAAACgCQAEgBAAgDIAEgGIAAgIIAAgHIgDgGIgEgEQgDgCgEAAQgDAAgCACg");
	this.shape_21.setTransform(97.4,21.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AAHAoIgHgBQgEgCgBgDQgEgDAAgDIgBgJIAAgdIgHAAIgCgBIAAgJIAAgCIABAAIABgBIAHAAIAAgOIABgBIADgBIAHAAIADABIABABIAAABIAAANIAMAAIACABIAAAAIACAGIgCAFIgBABIgNAAIAAAaQAAAGABABQACADAEAAIADAAIACgBIABgBIABABIABAAIAAADIABADIgBAEIgBACIgCABIgCABIgEABg");
	this.shape_22.setTransform(91.6,20.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgYAsIgCgBIgCgBIAAgBIAAhQIAAgBIABgBIACAAIAEgBIADABIACAAIABABIABABIAAAHIAFgFIAFgDIAEgCIAGgBQAFAAAFADQAFACADAFQACADACAHQABAGAAAGQAAAIgCAFQgBAGgDAFQgDAEgFACQgFADgGAAIgEgBIgEgBIgEgDIgEgDIAAAbIAAABIgCABIgCABgAgBgcIgEABIgDADIgEAFIAAATQACACAFADQADADACAAQAEAAACgCQACgBABgDIACgFIABgHIAAgHIgCgGIgEgEQgCgCgDAAg");
	this.shape_23.setTransform(82.9,22.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgOApQgGgCgEgEQgFgFgCgFQgDgHABgHIAAgyIAAgBIABgCIADAAIAIAAIADAAIACACIAAAxQgBAFACAEIADAGQADADADAAQADACADAAQAFAAADgCQACAAADgDQADgCAAgEQACgDAAgFIAAgxIAAgBIABgCIADAAIAIAAIACAAIACACIAAABIAAAxQAAAHgCAHQgCAHgEADQgFAEgHADQgHACgHAAQgIAAgGgCg");
	this.shape_24.setTransform(74.9,20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAhCNIAAgEQAAgOAKgKQAJgKAOABIArAAQAPgBAJAKQAKAKAAAOIAAAEgACFCEQgCgJgGgEQgHgGgJAAIgrAAQgIAAgGAGQgHAEgCAJIBaAAIAAAAgAh/ByIgHgGQgIgJAAgMQAAgMAIgIIACgCQAFgFAJgCIANgEQAGgBADgEIArgsIgCgCQgEgEgBgFQABgHAEgEQAEgEAFAAQAGAAAEAEIAEAEIAhgjQABgBAAAAQABgBAAgBQAAAAgBgBQAAAAgBgBIgGgHQgEACgDAAQgEAAgDgCIgGgGQgCgCgBgEQgDgBgCgCIgFgFQgDgDAAgEQAAgFADgDIApgrQADgCAFAAQAEAAADACIAGAGQABACABADQAEABACACIAFAGQAEADAAAEQAAAFgEACIAwAvQACgDAEAAQAEAAADADIAGAGQADACAAADQADABADACIAEAFQAEAEAAAEQAAAEgEADIgpApQgDAEgFAAQgFAAgCgEIgGgEQgCgDgBgDQgDgBgCgCIgGgFQgDgDAAgEQAAgEADgCIgHgIQgDgDgDADIghAiIADADQAEAEgBAGQABAGgEAEQgDAEgHAAQgGAAgEgEIgEgEIgrAsQgEAFAAAEIgEAOQgDAIgFAGIgCABQgIAIgMAAQgMAAgIgIgAgxgKQgDAEADADIAKAIIgyAzQgFAFgIACIgOAEQgEABgGAEIgBACQgGAGAAAHQAAAIAGAHIAGAFQAGAGAIAAQAIAAAGgGIACgCQAEgEAAgFIAEgNQACgIAGgGIAxgyIALALQADACADgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgKgKIAogpQAFgEAFABQAFgBAEAEIAIAIQACACABAFQgBADgCAEIAFAFIACAAIAqgqIABgBIgHgGQgDACgDAAQgEAAgDgCIgvgwQgDgDAAgDQAAgEADgDIgGgGIgBAAIgqAqIAAABIAGAHQADgDAEAAQAEAAABADIAIAHQAEAEAAAGQAAAFgEAEIgoApIgKgKQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgABogkIgqApIAAABIAFAGIACAAIAqgqIAAAAIgFgGIgBgBgAgghZIAAACIAGAFIABAAIApgqIAAgCIgFgEIgBgBgAA5BiQgEABgBgFQABgFAEAAIA+AAQAEAAABAFQgBAFgEgBg");
	this.shape_25.setTransform(25.3,33.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC800").s().p("Ag8AYIATgYIAUAOIAig4IAwADIhOBSg");
	this.shape_26.setTransform(47.4,10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF7A11").s().p("AAAEZQhUgPhBhHQg+hCgBg+IAAlbIFSAAQACAkAZAYQAZAZAjACIAAEEQgBA+g9BCQhCBHhUAPg");
	this.shape_27.setTransform(25.5,38.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AgcFlQhlgRhOhUQhLhPAAhLIAAmPIGBAAQALgaAXgQQAYgRAdAAQAnAAAcAbQAaAcAAAmQAAAdgPAYQgQAXgaAKIAAEXQgBBLhJBPQhPBUhkARg");
	this.shape_28.setTransform(28.4,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.med3, new cjs.Rectangle(0,0,157.2,71.5), null);


(lib.med2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AgYBiQgWgCgRghQgQggAIgiQAIgkAdgWIAjgbQAMgJAQAAIAoAAIAGAAIAAALIgGgBIgoAAQgMAAgKAHIgjAbQgaAUgHAgQgHAfAOAcQAOAdAQABIBhAAIgDgNIAAgEIABgEIAAgBIAAgBIABgFIADgHIAAAtg");
	this.shape.setTransform(17.8,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AgmAlQAAgbAYgZQAXgaAZABQAFAAAAAFQAAAFgFAAQgVAAgUAXQgUAVAAAXQAAAEgGAAQgFAAAAgEg");
	this.shape_1.setTransform(17.8,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AgWANQgGAAABgGQgBgEAGAAIA4AAIAAAKgAgbgCQgGAAAAgFQAAgFAGAAIA9AAIAAAKg");
	this.shape_2.setTransform(22,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AgIAfQgKAAgEgLIgGgKQgFgJgEgCQgHgGABgJQACgIAIgDQAKgDAHAAQAOAAAIAHIADACIADgCQAKgHAOAAIAIABIAAAKIgIgBQgKAAgHAGQgEADgGAAQgFAAgEgDQgHgGgJAAQgGAAgHADIgEADQAAADACACQAFAEAGAIQAGAJACAGQACACACAAIAmAAQADAAABgCQADgKAHgJIAAAWQgEAKgKAAg");
	this.shape_3.setTransform(20.9,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F87315").s().p("ABpEWQhUgOhAhHQg9hBgBg+IAAlXIDTAAIAABUIgIgBQgOABgKAHIgDABIgDgBQgJgHgOgBQgHABgKACQgIADgCAJQgBAIAHAGQAEADAFAJIAGALQAEALAKAAIAnAAQAKAAAEgKIAAAOIg+AAQgFABAAAEQAAAGAFAAIA+AAIAAAFIg5AAQgFAAAAAFQAAAGAFgBIA5AAIAAAGIgHAAIgoAAQgPAAgMAJIgkAbQgdAWgIAjQgIAiAQAhQASAhAUACIBlAAIAACygAAGBaQgPgCgOgcQgPgcAHggQAIgfAYgUIAlgbQAJgHAMAAIAoAAIAHAAIAACMIgDAFIAAACIgBAFIgBAAIAAABIAAAFIAAADIACAOgAAQgiQgXAaAAAaQAAAEAFAAQAFAAAAgEQAAgWAUgWQAVgXAVAAQAFAAAAgFQAAgFgFAAQgZgBgYAagAA1iOQgCAAgCgDQgCgGgGgIQgGgJgFgFQgCgCAAgCIAEgEQAHgCAGgBQAJAAAIAHQAEACAFAAQAGAAAEgCQAHgHAKAAIAIABIAAASQgHALgDAJQgBADgDAAg");
	this.shape_4.setTransform(14.7,37.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAEA").s().p("AB+FFQhlgRhMhUQhJhPgChJIAAmMID9AAIAAApIjTAAIAAFXQABA+A9BBQBABHBUAOIABAAIAAA1g");
	this.shape_5.setTransform(12.7,38.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AgYBFQgKgEgGgKQgGgKgCgNQgCgQAAgPQAAgQADgOQACgMAHgMQAGgJAKgFQAKgGAOAAQANAAAKAFQAJAFAHAKQAGALABAMQADAPAAAPQAAARgDANQgCAOgHAKQgGAJgKAGQgJAFgPAAQgOAAgJgFgAgKgvQgEADgCAHIgEAQIgBAVQAAAPABAJQACALADAFQACAHAEACQADACAGAAIAHgBQAEgCACgDQACgBACgFIADgKIABgNIAAggQAAgHgBgGIgEgKIgDgGQgDgDgDgBIgHgBQgFAAgFADg");
	this.shape_6.setTransform(167.5,35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC300").s().p("AgYBFQgKgFgFgJQgGgKgDgNQgCgQAAgPQAAgQADgOQADgOAGgKQAFgJAMgFQAJgGANAAQAOAAALAFQAJAFAGAKQAGAJACAOQACAMAAASQAAAPgCAPQgEAOgFAKQgIAKgJAFQgJAFgOAAQgPAAgJgFgAgKgvQgEAFgCAFQgDAGgBAKIAAAtQACALADAFQABAGAFADQAEACAFAAIAHgBIAHgFIADgGIADgKQACgFAAgIIAAggIgCgNIgDgKIgEgGQgDgDgDgBIgHgBQgFAAgFADg");
	this.shape_7.setTransform(156,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC300").s().p("AgYBFQgKgEgGgKQgGgLgCgMQgCgNAAgSQAAgOACgQQAEgPAGgJQAFgJALgFQAKgGANAAQAOAAAKAFQAJAFAHAKQAFAKACANQADAPAAAPQAAARgDANQgDAOgGAKQgGAJgKAGQgKAFgNAAQgQAAgIgFgAgJgvQgGAEgBAGIgEAQIgBAVQAAAPABAJQABAJADAHQAEAHADACQADACAGAAIAHgBQAEgCACgDQADgCABgEIADgKIABgtIgBgNIgEgKIgEgGIgFgEIgHgBQgFAAgEADg");
	this.shape_8.setTransform(144.6,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC300").s().p("AgUAfIgBgCIAAgCIAOgdIAAgRIABgHIACgDIAFgBIAGgBIAHABQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAIACADIABAHIgBAIIgBAGIgDAFIgEAHIgNAVIgCABIgCACIgIABg");
	this.shape_9.setTransform(135.5,42.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC300").s().p("AgZBFQgIgEgHgKQgGgLgCgMQgCgNAAgSQAAgQADgOQACgOAHgKQAGgJAKgFQAKgGANAAQANAAAMAFQAIAFAHAKQAGAKABANQADAPAAAPQAAARgDANQgDAPgGAJQgGAJgKAGQgKAFgNAAQgQAAgJgFgAgJgvQgFADgDAHIgDAQIgBAVQAAAPACAJQAAAJADAHQADAHAEACQADACAGAAIAHgBQAEgCACgDIAEgGIADgKIABgNIgCgtIgCgKIgFgGQgDgDgCgBIgHgBQgGAAgDADg");
	this.shape_10.setTransform(127.4,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC300").s().p("AgZBFQgJgFgGgJQgFgKgDgNQgCgQAAgPQAAgQADgOQADgOAGgKQAFgJALgFQALgGANAAQANAAALAFQAKAGAFAJQAGALACAMQACAMAAASQAAAPgDAPQgCAOgHAKQgGAKgKAFQgKAFgNAAQgPAAgKgFgAgJgvQgFAEgCAGQgDAGAAAKIgCAVIACAYQABALACAFQACAGAFADQADACAGAAIAIgBQADgCACgDIAFgGIACgKIABgNIAAggIgCgNQAAgGgCgEIgFgGQgDgDgCgBIgHgBQgFAAgEADg");
	this.shape_11.setTransform(115.9,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC300").s().p("AgZBFQgJgFgGgJQgFgKgDgNQgCgNAAgSQAAgOADgQQADgOAGgKQAGgJAKgFQAKgGANAAQAOAAALAFQAJAFAGAKQAFAJADAOQACAMAAASQAAATgDALQgDAOgGAKQgGAJgKAGQgKAFgNAAQgPAAgKgFgAgKgvQgEAFgCAFQgDAJgBAHIAAAtQABAJADAHQACAGAFADQAEACAFAAIAHgBIAGgFIAEgGIADgKQABgFAAgIIABgPIgCgeIgDgKIgEgGIgGgEIgHgBQgFAAgFADg");
	this.shape_12.setTransform(104.5,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC300").s().p("AgUAfIgBgCIABgCIANgdIAAgRIABgHIADgDIADgBIAHgBIAHABQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIADADIABAHIgBAIIgBAGIgDAFIgRAcIgEADIgIABg");
	this.shape_13.setTransform(95.4,42.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC300").s().p("AgmBIIgCgBIgBgBIgBgEIgBgFIABgFIABgEIABgCIACAAIAaAAIAAhcIgXANIgEABIgCgBIgCgDIAAgLIABgDIABgCIAhgVIADgBIAIgBIALABIACABIAAACIAAB1IAXAAIACAAIACACIABAEIgBAKIAAAEIgCABIgCABg");
	this.shape_14.setTransform(87.5,34.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC300").s().p("AAZBHIgCgCIgBgCIgSgqIgEgHIgFgEQgEgBgFAAIgJAAIAAA2IAAACQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgFABIgHABIgGgBIgFgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgCIAAiAQAAgFACgCQAEgDADAAIAzABQALACAFACQAHAEAFAEQAFAFACAHQADAGAAAJQAAAHgDAGQgBAFgDAFQgEAEgFAEIgMAFIAGADIAFAGIAFAHIASArIABADIgBACIgCACIgEAAIgJABgAgXgIIAZgBQAFgCADgDQACgCACgEQABgEAAgEQAAgIgDgEQgDgFgHgCIgEgBIgVAAg");
	this.shape_15.setTransform(75.7,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgNAeIgCAAIgBgBIAAg4IABgBIABAAIAHAAIACAAIABABIAAABIAAAHIAEgFIADgDIADgCIAHAAIACAAIACACIABABIAAAJIgCADIgCAAIgDgBIgCAAIgDABIgCABIgDADIgCAFIAAAhIgBABIgDABg");
	this.shape_16.setTransform(154.5,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgJAdQgGgCgDgEQgEgEgCgFQgCgFAAgIQAAgHACgGIAGgKIAJgGQAEgCAGAAQAHAAAFACQAFACADAEQADAEACAEQABAFAAAGIAAACIgBAEIgEABIggAAIABAGQAAADACACIAFADIAGABIAHAAIALgEIABABIABAAIABACIAAAFIgBACIAAABIgBABIgCABIgEABIgPACQgGAAgFgCgAgEgSQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAIgCAFIgBAFIAWAAQAAgHgCgDQgEgEgFAAIgFABg");
	this.shape_17.setTransform(148.8,50.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgEAeIgEgBIgBgBIgBgBIgRgxIAAgCIAAgEIADgBIAIAAIADABIABAAIABACIALAnIAAACIAOgrIABAAIACgBIAIAAIACABIABAAIAAAEIgRAzIgBABIgBABIgEABg");
	this.shape_18.setTransform(142.8,50.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgNAdQgFgCgEgEQgDgEgCgGQgCgEAAgIQAAgHACgFQACgFAEgFQAEgFAFgCQAFgCAIAAQAIAAAEACQAFACAEAEQADADADAGQACAGAAAHQAAAHgCAFQgBAFgFAFQgFAFgFACQgEACgIAAQgIAAgFgCgAgFgQQgCAAgCADQgCACgBAEIgBAHIABAHIACAGIAFAEQACACADAAIAGgCIAEgDQABgCABgEIABgIIAAgGIgCgGIgFgEQgCgCgEAAIgFACg");
	this.shape_19.setTransform(136.4,50.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AgIAnQgGgCgFgGQgFgGgCgHQgCgFAAgMQAAgLACgGQADgHAFgHQAFgEAGgEQAIgCAGAAIAHABIAGABIAEACIADACIABACIABABIAAABIAAAHIAAACIgBABIgBAAIgLgGIgIgBQgFAAgDADQgCABgEAEIgEAIIgBALIABANQACAEADAEQACACADACQAEACAFAAIAHgBIALgFIABAAIABABIAAACIAAAIIAAABIgBACIgDABIgFADIgGACIgIAAQgGAAgIgCg");
	this.shape_20.setTransform(129.8,49.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgMAoIgBgBIAAgCIAHgSIgBgCIgTgzIgBgDIABgCIACgBIAIAAIADABIABABIABACIAMAkIAAAAIAMglIABgCIACgBIAJAAIACABIABACIAAADIgZBIQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgKABg");
	this.shape_21.setTransform(120.5,51.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AAHAlIgHgBQgEgBgBgCIgDgHIgCgIIAAgcIgGAAIgCgBIgBgFIAAgDIABgBIABgBIABgBIAGAAIAAgMIABgBIABgBIADgBIAGAAIACABIABABIABABIAAAMIAMAAIABABIABABIABAEIgBAFQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgMAAIAAAZQAAAFABADQABABAFAAIABAAIACAAIACgBIACABIAAAAIAAACIABADIgBAEIgBACIgCABIgCABIgDAAg");
	this.shape_22.setTransform(115.3,50);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgCAqIgDAAIgCgBIAAg4IACgBIADgBIAGAAIACABIACABIAAABIAAA2IAAABIgEABgAgGgbQgCgBAAgFQAAgEACgCQADgCADAAQAFAAACACQACACAAAEQAAAFgCABQgCACgFAAQgFAAgBgCg");
	this.shape_23.setTransform(111.6,49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AAPAeIgEgBIAAgBIAAgeIgBgHIgBgEIgDgCIgEgBQgCAAgDACIgHAGIAAAlIgBABIgDAAIgHAAIgEgBIAAgBIAAg2IAAgBIABgBIACAAIAHAAIACAAIABABIAAABIAAAGIAJgHQAEgCAFAAQAGAAAEABIAGAFQADAEAAAEIABAKIAAAiIgBABIgDAAg");
	this.shape_24.setTransform(106.7,50.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AAgAeIgCAAIgBgBIgBgBIAAggIAAgFIgCgEIgDgCIgDgBQgDAAgDACIgGAGIAAAkIgBABIgBABIgCAAIgHAAIgCAAIgBgBIgBgBIAAggIAAgFIgCgEIgCgCIgEgBQgDAAgDACIgGAGIAAAlIgCABIgCAAIgIAAIgDgBIgBgBIAAg2IABgBIABgBIACAAIAGAAIACAAIABABIABABIAAAGIAJgHQAEgCAFAAIAGAAIAFACIADADIACAFIAKgIIAEgCIAFAAQAGAAADABIAGAFQADAEABAEIABAJIAAAiIgBABIgBABIgCAAg");
	this.shape_25.setTransform(98.2,50.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgKAdQgEgCgFgEQgEgEgBgFQgCgFAAgIQAAgHACgGQABgFAEgFIAJgGQAFgCAGAAQAIAAAEACQAEACAEAEQADAEABAEQACAFAAAGIAAACQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgDABIggAAIAAAGIADAFIAFADIAGABIAHAAIAJgDIADgBIABABIAAAAIAAACIAAADIAAACIAAACIgBACIgCABIgFABIgNACQgHAAgGgCgAgDgSQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgCACgBADIAAAFIAWAAQAAgGgDgEQgCgEgHAAIgDABg");
	this.shape_26.setTransform(89.9,50.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AgPApIgHgHIgEgJIAAgMQgBgHACgGQABgFADgEQAEgEAEgCQAEgCAHAAQAEAAADABIAHAGIAAgeIAAgBIACgBIACAAIAHAAIADAAIABABIAABSIAAABIgCAAIgHAAIgCAAIgBgBIAAgBIAAgGQgGAFgDACQgEACgGAAQgHAAgEgCgAgFgDQgDACAAABIgCAGIgBAGIABAHIACAGIADAEIAFABIACAAIAEgCIADgCIADgFIAAgSQgDgDgDgCQgDgCgDAAIgFABg");
	this.shape_27.setTransform(83.2,49.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AAPAeIgDAAIgBgBIAAgBIAAgeIgBgHIgCgEIgCgCIgFgBQgBAAgEACIgGAGIAAAkIAAABIgBABIgDAAIgHAAIgDAAIgBgBIAAgBIAAg3IADgBIAHAAIACAAIABABIAAAHIAJgHQADgCAGAAQAGAAADABIAHAFQACADABAFIABAKIAAAhIAAABIgBABIgDAAg");
	this.shape_28.setTransform(76.6,50.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AgDAoIgCAAIgCgBIAAgBIAAhLIAAgBIACgBIACAAIAHAAIADAAIABABIAAABIAABLIAAABIgBABIgDAAg");
	this.shape_29.setTransform(71.5,49.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AgNAeQgGgCgDgEQgEgEgCgGQgCgFAAgJQAAgGACgGQADgGADgEQADgEAHgDQAFgCAIAAQAIAAAFACQAGACAEAEQADADACAHQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAFgGACQgGACgHAAQgIAAgFgCgAgFgRIgFAEIgCAGIgBAHIABAIQABAEABACIAEAEQADABADAAIAGgBQADgBACgDIACgGIABgIIAAgHIgDgGQgBgDgDgBQgCgCgFAAQgCAAgDACg");
	this.shape_30.setTransform(96.1,21.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AAAAmQgCgBgDgDIgEgGIgBgJIAAgdIgHAAIgCgBIAAgJIAAgCIABgBIAIAAIAAgNIABgBIABgBIACAAIAHAAIADAAIABABIAAABIAAANIAOAAIABABIAAACIAAAJQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgNAAIAAAaQAAAFACACQABADAEAAIAGgCIABAAIABABIAAACIAAAHIgBACIgCACIgJABQgFAAgDgBg");
	this.shape_31.setTransform(90.3,20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgaAqIgCAAIAAgCIAAhPIAAgBIABgBIADAAIAGAAIADAAIABABIAAABIAAAHIAFgFIAFgDIAEgCIAGAAQAHAAADACQAFACACAFQAEAFAAAFQACAGAAAGQAAAIgCAFQgCAHgCADQgEAFgEACQgEACgHAAIgEAAIgDgCIgFgCIgEgEIAAAbIAAACIgBAAIgHABgAgCgcIgCABIgEADIgEAFIAAASQADAEAEACQADADACAAIAGgCIADgEIADgFIAAgHIAAgHIgDgGIgDgEQgCgCgDAAg");
	this.shape_32.setTransform(81.8,22.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFEFE").s().p("AgNApQgHgCgEgEQgEgEgDgGQgCgHAAgIIAAgxIABgBIABgBIACgBIAIAAIADABIABABIABABIAAAwIABAJIADAGIAGADIAGABIAHgBIAGgDQADgDAAgDQABgEAAgEIAAgyIACgBIADgBIAIAAIACABIABABIABABIAAAxQAAAIgCAGQgCAFgFAFQgEAEgHADQgFACgJAAQgIAAgFgCg");
	this.shape_33.setTransform(73.8,20.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AABBaIhnAAQgWgCgRghQgQggAIgiQAIgjAdgXIAkgbQAMgJAQAAIAoAAQANAAANALIAlAYQARAOALAUIASgCQATAAAOAEQATAFAAAKIAAA6IgBADIABAAIAAAcQAAAJgRAGQgPAGgUgBQgSABgOgFQgMAUgXAAQgUAAgNgQgAAEA3IAAAAIgBAFIAAABIAAABIAAADQAAAMAJAKQAJAIANABQAJAAAIgGQAHgFAEgHIABgEIABgDIAAAAIABgCIAAgIIgBgCIAAgBIgBgDIAAAAIgBgDIgFgIIAAAAIgCgCIgBAAIgCgCIgBgBIAAAAIgEgDIgJgCIgBAAIgEAAIgBAAIgFAAIAAAAIgEABIgEACQgJAFgEAJIAAAAgABLA8IAAABIAAADIAAAGIgBABIgBAGQALADARAAQAQAAANgEQALgDABgDIAAgRQgOAGgbABQgLAAgQgCgAgEBQIgDgNIAAgEIABgEIAAgBIAAAAIABgGIADgHIAFgIIAFgEIAGgFIAGgDIAFAAIAAgBIAGAAIAHAAIAFABIABAAIAFABIAAgtIABgDIAAgCIABgBIABgBIABgBIABgBIABAAQAFgEAMgDQgJgPgOgLIglgZQgLgJgJABIgoAAQgMAAgKAGIgkAbQgaAUgHAgQgHAfAOAdQAOAcAQABIBiAAIAAAAgAA8AhIACABIABABIACACIAAABIACADIABAAIACADIAAAAQANAFASAAIAGAAQAOgBALgEQAJgCABgEIAAgSIgDACIgJADIgBAAIgFABIgBAAIgEABIgCAAIgEABIgFAAIgCAAIgKAAIgCAAIgGAAIgDgBIgCAAIgEgBIgBAAIgFgBIgBAAIgIgCIgEgDIAAAAgAA8AIQABADALADQANAEAQAAQAQAAANgEQALgEABgDIAAgPIAAAAIgEABIAAAAIgFACIgBAAIgFACIgEAAIgBAAIgFABIgBAAIgGAAIgDABIgMAAIgDgBIgGAAIgBAAIgFgBIgBAAIgEAAIgFgBIgGgDIAAAAIgEgBIAAAAgABQgaIgGABIgJADIgCABIgBAAIgBABIgBABIAAAAIABAAIABABIABAAIACABIAEABIAMADIADAAIAFABIADAAIASAAIAIgBIADAAIALgDIADgBIAFgBIABgBIABAAQgDgEgJgCQgNgDgQAAg");
	this.shape_34.setTransform(25.6,38.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AgmAlQAAgbAYgZQAXgaAZABQAFAAAAAFQAAAFgFAAQgVAAgUAXQgUAVAAAXQAAAEgGAAQgFAAAAgEg");
	this.shape_35.setTransform(17.8,35.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AARAKIg8AAQgGAAABgGQgBgEAGAAIA4AAIAAgFIg9AAQgGAAAAgFQAAgFAGAAIA9AAIACABIADgBQAFAAAAAFIAAALQAFAFAGgBQAGABAFgFQAEgCADACQAEAEgEAEQgIAHgKAAQgJAAgIgGg");
	this.shape_36.setTransform(24.1,26.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AgRAfQgKAAgEgKIgGgLQgFgJgEgCQgIgGACgJQABgIAJgDQAXgIARANQACADADgDQAQgNAYAIQAJADABAIQACAJgIAGQgHAGgFAQQgEAKgLAAgAgngRIgDADQAAADACACQAFAEAGAJQAGAIABAGQACADADAAIAlAAQADAAACgDQAHgUAJgHQACgCAAgDIgEgDQgRgGgMAJQgFAEgFAAQgFAAgDgEQgIgGgJAAQgGAAgIADg");
	this.shape_37.setTransform(21.9,21.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC800").s().p("Ag7AYIATgYIAUAOIAhg4IAvADIhNBSg");
	this.shape_38.setTransform(47,9.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF7A11").s().p("AAAEWQhTgOhBhHQg9hBgBg+IAAlXIFPAAQACAjAZAYQAYAZAjABIAAECQgBA9g9BCQhBBGhUAPg");
	this.shape_39.setTransform(25.3,37.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("AgcFiQhkgRhOhUQhIhPgChJIAAmMIF/AAQAKgaAXgPQAYgRAcAAQAnAAAbAbQAbAbAAAmQAAAdgQAXQgPAXgaAKIAAEVQgBBJhJBPQhOBUhjARg");
	this.shape_40.setTransform(28.1,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.med2, new cjs.Rectangle(0,0,172.6,70.8), null);


(lib.med1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("Ag8B+IAAj8IB5AAIAAAMIgPAAIAADmIAPAAIAAAKgAgCB0IAlAAIAAjmIglAAgAgxB0IAkAAIAAjmIgkAAg");
	this.shape.setTransform(19.3,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F87315").s().p("ABpEWQhUgPhAhFQg9hCgBg9IAAlYIDTAAIAACHIh4AAIAAD8IB4AAIAACogABbBkIAAjmIAPAAIAADmgAAqBkIAAjmIAmAAIAADmgAgDBkIAAjmIAiAAIAADmg");
	this.shape_1.setTransform(14.7,37.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AB+FEQhlgRhMhTQhJhOgChLIAAmLID9AAIAAApIjTAAIAAFXQABA9A9BCQBABGBUAPIABAAIAAA0g");
	this.shape_2.setTransform(12.7,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7A11").s().p("AgDASIAAgSQgFgCgBgFQAAgEADgDQADgDADAAQAJAAAAAKQABAFgGACIAAASg");
	this.shape_3.setTransform(35.6,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("Ah+B+IAAj8ID8AAIAAD8gABOB0IAmAAIAAhLIgmAAgAAdB0IAnAAIAAjmIgnAAgAgTB0IAlAAIAAjmIglAAgAhEB0IAmAAIAAjmIgmAAgAhzB0IAkAAIAAjmIgkAAgABagKQgDADAAAEQABAFAFADIAAASIAIAAIAAgSQAGgDgBgFQAAgJgJAAQgEAAgDACgABOghIAmAAIAAhRIgmAAg");
	this.shape_4.setTransform(25.9,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AgZBFQgJgGgGgJQgGgLgCgMQgCgMAAgTQAAgOADgPQACgOAHgKQAGgJAKgGQAKgFANAAQAPAAAJAFQAKAFAGAKQAFAJADAOQACAPAAAPQAAARgDANQgDAOgGAKQgGAJgKAGQgMAFgMAAQgOAAgKgFgAgKgvQgFAEgCAGQgDAIAAAHIgBAWQAAAPABAJQABAJADAHQADAHAEABQAEADAFAAQAEAAADgCIAGgEIAEgHIADgJIgBg7IgDgJIgDgHQgEgCgCgBIgHgBQgGAAgEADg");
	this.shape_5.setTransform(150.1,34.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AgZBFQgKgGgFgJQgFgKgCgNQgDgPAAgQQAAgQADgNQADgOAGgKQAGgJAKgGQAKgFANAAQAQAAAJAFQAIAFAHAKQAGAKACANQACASAAAMQAAARgDANQgDAOgGAKQgGAJgKAGQgLAFgMAAQgPAAgKgFgAgJgvQgFADgDAHQgCAGAAAJIgBAWIABAYQACAMABAEQADAGAEACQAEADAFAAIAIgCIAFgEIAEgHIADgJIACgcIgBgRQAAgIgCgGIgCgJIgFgHQgCgCgDgBIgHgBQgFAAgEADg");
	this.shape_6.setTransform(138.6,34.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC300").s().p("AgZBFQgKgGgFgJQgFgJgDgOQgCgMAAgTQAAgSADgLQADgOAGgKQAHgKAJgFQAKgFANAAQAPAAAKAFQAJAFAGAKQAFAIADAPQACAMAAASQAAAPgDAPQgDAOgGAKQgGAKgKAFQgLAFgMAAQgPAAgKgFgAgKgvQgEAEgCAGQgDAIgBAHIAAAuQACAMACAEQADAGAEACQAFADAEAAQAEAAADgCIAGgEIAEgHIADgJQABgGAAgHIAAggIgCgOIgCgJIgFgHQgCgCgDgBIgHgBQgFAAgFADg");
	this.shape_7.setTransform(127.2,34.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC300").s().p("AgSAgIgCgBIgBgBIABgCIANgeIAAgXIAEgEIADgCIAHAAIAHAAIAEACIADAEIABAFIAAAIIgCAIIgDAFIgRAbIgCACIgCABIgEABg");
	this.shape_8.setTransform(118.1,42.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC300").s().p("AgZBFQgKgGgFgJQgFgJgDgOQgCgMAAgTQAAgSADgLQADgOAGgKQAHgKAJgFQAKgFANAAQAPAAAKAFQAJAFAGAKQAFAIADAPQACAMAAASQAAATgDALQgDAOgGAKQgGAJgKAGQgLAFgMAAQgPAAgKgFgAgKgvQgEAEgCAGQgDAIgBAHIAAAuIAEAQQADAGAEACQAFADAEAAQAEAAADgCIAGgEIAEgHIADgJQABgGAAgHIAAggIgCgOIgCgJIgFgHQgCgCgDgBIgHgBQgFAAgFADg");
	this.shape_9.setTransform(109.9,34.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC300").s().p("AgYBFQgKgGgGgJQgGgLgCgMQgCgMAAgTQAAgQADgNQACgOAHgKQAGgJAKgGQAJgFAPAAQAOAAAJAFQAJAFAHAKQAFAJADAOQACAPAAAPQAAARgDANQgCAOgHAKQgGAJgKAGQgLAFgNAAQgPAAgIgFgAgKgvQgDADgEAHQgCAFgBAKIgBAWQAAAPABAJQABAJADAHQADAHAEABQAEADAFAAQAEAAADgCIAGgEIAEgHIADgJIACgNIgBggIgBgOIgEgJQgBgEgCgDQgCgCgEgBIgHgBQgFAAgFADg");
	this.shape_10.setTransform(98.5,34.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC300").s().p("AgmBIIgCgBIgBgCIgBgDIAAgFIABgJIABgCIACgBIAaAAIAAhbIgWAMIgFACIgCgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgBgHIABgHIABgCIACgCIAfgTIABgBIACgBIAPAAIAEABIACABIAAB2IAXAAIACABIABACIABADIABAGIgBAFIgBADIgBACIgCABg");
	this.shape_11.setTransform(87.4,34.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC300").s().p("AAdBIIgEgCIgCgBIgTgsIgEgGQgCgEgEgBQgDgBgFgBIgJAAIAAA3IgBACIgCABIgLACIgMgCIgCgBIgBgCIAAiAQAAgFADgCQACgCAEAAIA0AAQAIABAHADQAGADAGAFQAFAGACAFQADAIAAAHQAAAFgCAIQgCAGgEAFQgDAFgFADQgEACgIACIAGAFIAFAEIAFAIIAQAlIACAGIABADIgBACIgCABIgEACgAgXgIIAPAAQAGAAAEgCIAHgEIAFgGQACgDAAgGQAAgHgEgFQgDgEgHgDIgZgBg");
	this.shape_12.setTransform(75.5,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgQAfIgBAAIgBgBIAAg5IABgBIABgBIADAAIAGAAIACAAIABABIABABIAAAHIADgGIADgDIAEgBIAEgBIACABIACAAIACAAIABABIAAABIAAAKIAAACIgBACIAAAAIgFgCIgCAAIgDABIgCACIgEACIgCAGIAAAjIAAABIgCAAIgGABg");
	this.shape_13.setTransform(122.1,50.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgKAeQgHgCgDgDQgEgFgBgFQgCgFAAgJQAAgIACgFQACgHAEgEQADgEAGgCQAGgCAFgBQAGABAGACQAHACACADQAEAFABAEQABAGAAAGIAAADQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEABIgiAAIABAHIADAFQACACADABIAGABIAHgBIAGAAIAEgCIACAAIABAAIABABIAAABIAAAHIgBACIgHACIgHACIgIAAQgHAAgFgCgAgEgSIgEACIgCAFIgBAGIAXAAQABgHgDgEQgDgEgGAAQgCAAgDACg");
	this.shape_14.setTransform(116.1,50.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AgIAeIgCgBIgBgBIgSg2IAAgDIACgBIACAAIAIAAIADAAIABABIABABIAMApIAAACIAOgrIAAgBIACgBIACAAIAIAAIACAAIABABIABABIAAACIgSA2IgBABIgCABIgJABg");
	this.shape_15.setTransform(109.8,50.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgNAeQgGgCgEgEQgDgDgCgHQgCgGAAgHIACgNQACgHAEgDQAEgFAGgCQAGgCAGgBQAIABAGACQAEABAFAFQAEAEACAGQACAIAAAFQAAAFgCAIQgCAGgEAEQgFAFgFACQgHACgGAAQgIAAgFgCgAgFgRQgDAAgCADIgCAHIgBAHIAAAIIADAGIAEAEQADABADAAQADAAADgBQACAAACgEIADgFIABgJIgBgHIgCgGIgEgEQgDgBgEAAQgDAAgCABg");
	this.shape_16.setTransform(103.2,50.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgIAoQgHgDgFgEQgFgGgCgIQgDgJAAgJQAAgKADgIQACgGAGgIQAGgGAGgCQAHgDAIAAIAGAAIAGACIAFACIADACIACABIAAACIAAACIABADIgBAGIgBABIgBABIgGgFIgGgCIgHgBQgGAAgDACQgEADgCADQgDAEgBAFQgCAGAAAFQAAAHACAGQABAFADAEQADADADACQAEABAFAAIAIgBIAFgCIAEgCIADgBIABAAIAAABIABACIAAAHIgBADIgBABIgDACIgFADIgPACQgHAAgHgDg");
	this.shape_17.setTransform(96.2,49.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgFAsIgCAAIAAhXIACAAIACgBIAHAAIACABIABAAIABABIAABVIgBABIgBAAIgGABg");
	this.shape_18.setTransform(88.1,49.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgGArIgBAAIAAgBIAAg5IAAgBIABgBIADAAIAHAAIADAAIABABIAAA7IgBAAIgHABgAgHgbQgCgDAAgEQAAgFACgCQADgCAEAAQAFAAACACQACACAAAEQAAAFgCACQgCACgFAAQgEAAgDgBg");
	this.shape_19.setTransform(84.8,49.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AgNAfIgHgDIgEgGQgBgDAAgFQAAgGACgDQABgEAEgBQAFgDAFgBQAGgBAHAAIAFAAIAAgDIAAgFIgCgDIgEgCIgEgBIgHABIgGACIgGADIgCgBIgBgBIAAgCIAAgCIAAgEIABgCIADgCIAGgCIAGgCIAHgBQAHABAEABIAIAEQADADACAEQABAEAAAHIAAAlIgBABIgCABIgEAAIgEAAIgCgBIAAgBIAAgEQgEADgEACQgEACgGAAgAgCAFIgEACIgDADIgBADQAAAEADACQACACAEAAIAFgCIAGgFIAAgKg");
	this.shape_20.setTransform(79.8,50.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgYAqQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAgBIAAhHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAVAAQAHAAAFACIAJAEQADACACAEQACAFAAAFIgBAFIgCAFIgEAEIgFADIAHACIAFADIAEAGQABADAAAFQAAAEgBAEIgEAGIgFAFIgGADIgIACIgIABgAgNAdIANAAIAEgBIAFgCIACgEIABgFIgBgFIgCgEIgFgCIgRgBgAgNgGIAKAAIAFgBIADgDIACgDIABgEIgBgFIgCgDIgEgCIgOgBg");
	this.shape_21.setTransform(73.2,49.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgNAeQgFgCgEgEQgFgFgBgFQgCgFAAgIQAAgHACgGQADgGADgEQADgEAHgDQAGgCAHAAQAIAAAFACQAHADACADQAEAFACAFQACAFAAAIQAAAHgCAGQgCAFgEAFQgFAFgFACQgFACgIAAQgIAAgFgCgAgFgRIgFAEIgCAGIgBAHIABAIIACAGIAEAEQADACADAAQADAAADgCQAEgBABgDIACgGIABgIIgBgHQAAgDgCgDQgBgCgDgCQgCgBgFAAIgFABg");
	this.shape_22.setTransform(95.9,21);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AAIAnIgIgBIgFgEQgDgCgBgEIgBgJIAAgdIgHAAIgCgBIAAgFIAAgDIAAgCIABgBIABgBIAHAAIAAgOIACgBIACAAIAHAAIADAAIABABIAAABIAAANIANAAIABABIABABIAAACIAAADIAAAFQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgNAAIAAAaQAAAFACACQABADAEAAIAGgCIABAAIABABIAAACIAAADIgBAHIgEACIgEAAg");
	this.shape_23.setTransform(90.1,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgYArIgCAAIgCgBIAAgBIAAhQIAAgBIACgBIACAAIAGAAIADAAIAAABIABABIAAAHIAFgEIAEgEIAFgCIAFAAQAHAAAEACQAFADACAEQACADADAHQABAGAAAGQAAAIgCAFQgCAGgDAFQgDAEgFACQgEACgGAAIgEAAIgEgBIgIgGIAAAbIAAABIgCABIgCAAgAgCgcIgDACIgDACIgEAFIAAATQAEADADACQAEADABAAQADAAACgCQAEgCAAgCIACgFIABgHIgBgHIgBgGIgEgEQgCgBgDAAg");
	this.shape_24.setTransform(81.6,22.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgOApQgGgCgEgEQgFgFgCgFQgCgGAAgIIAAgyIAAgBIABAAIAHgBIAHABIACAAIAAABIAAAxIABAIIADAGQAEADACABQADABADAAQAEAAAEgBIAEgEQADgDABgDIABgHIAAgyIABgBIABAAIAHgBIAGABIACAAIAAABIAAAxQAAAIgDAGQgCAHgEADQgEAEgHACQgGACgIAAQgHABgHgCg");
	this.shape_25.setTransform(73.6,20);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC800").s().p("Ag7AXIATgXIAUAOIAhg4IAvADIhNBSg");
	this.shape_26.setTransform(47,9.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF7A11").s().p("AAAEWQhTgPhBhFQg9hCgBg9IAAlYIFPAAQACAjAZAZQAYAYAjACIAAECQgBA9g9BCQhBBFhUAPg");
	this.shape_27.setTransform(25.3,37.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AgcFiQhkgRhOhTQhIhPgChKIAAmLIF/AAQAKgaAXgRQAYgQAcAAQAnAAAbAbQAbAcAAAmQAAAcgQAXQgPAYgaAKIAAEUQgBBKhJBPQhOBThjARg");
	this.shape_28.setTransform(28.1,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.med1, new cjs.Rectangle(0,0,155.2,70.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgMAhQgEgBgDgCQgDgCgBgFQgCgDAAgFQAAgFACgEQACgDAFgDQAFgDAFAAQAFgCAHABIAIAAIAAgMIgDgFIgEgCIgHgBIgHABIgGACIgEACIgCABIgBAAIgBgBIgBgCIAAgEIACgCIADgCIAFgCIAHgCIAGAAIAMABQAEABADADQADADACAFIABAKIAAAqIgBABIgBAAIgDABIgFgBIAAgBIAAgHQgDAEgGADQgFACgFAAIgJgBgAgDAEIgGACIgDAEIgBAFQAAAEADAEQAEADAFgBQAEAAADgCQAFgCADgFIAAgNIgJAAIgIABg");
	this.shape.setTransform(111,164.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AgSAhIgCgBIgBgDIAAgEIABgDIABgCIAbgqIgaAAIgCgBIgBgFIABgDIABgBIABAAIAjAAIACABIABABIAAAGIgBADIgBACIgbAqIAdAAIACABIAAACIAAAFIAAABIgCABg");
	this.shape_1.setTransform(105.2,164.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AgFAHQgCgCAAgFQAAgEACgBQACgCADAAQAEAAACACQACACAAADQAAAFgCACQgCABgEAAQgDAAgCgBg");
	this.shape_2.setTransform(100.4,167.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AgNAgQgGgBgEgGQgDgDgDgHQgCgJAAgGIACgMQACgGAEgGQAGgFAFgCQAFgCAIAAQAIAAAFACQAGABAEAGQAEAEACAGIACAOIgCAOQgCAGgFAFQgEAEgGADQgFADgIgBQgIAAgFgCgAgIgWQgDABgDAEQgDADAAAFQgCAEAAAFIABAJIAEAIQACAEAEACQADACAFAAQAFAAAEgCQADgCADgDQADgDAAgFQACgFAAgFIgBgJIgEgIQgCgDgDgCQgEgCgGAAQgEAAgEACg");
	this.shape_3.setTransform(94.8,164.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AgIAgQgFgCgEgEQgDgFgCgGQgCgJAAgFQAAgIADgHQACgHADgEQAFgEAFgCQAEgCAHAAIAFAAIAGACIAEACIADABIABACIABABIAAAEIgBADIgBABIgDgBIgDgCIgGgCQgCgCgEAAQgIAAgFAGQgEAIAAAKQAAAGACAFQAAADADAEQADAEADABQABACAFgBIAHgBIALgHIABABIABABIAAACIAAAEIAAABIgBABIgBACIgHAEIgHACIgGAAQgGAAgFgCg");
	this.shape_4.setTransform(88.2,164.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgFAHQgCgCAAgFQAAgEACgBQACgCADAAQAEAAACACQABABABAEQgBAFgBACQgCABgEAAQgDAAgCgBg");
	this.shape_5.setTransform(83.3,167.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgKAgQgFgCgFgEQgDgFgDgGQgCgJAAgGQAAgFACgIQACgIAFgDQADgFAGgCQAFgCAGAAQAJAAAEACQAGADADADQADAEABAGQACAFAAAGIAAACIgBADQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAIgpAAIABAJIAEAHQADADADABQAEACAFAAIAIgBIAGgBIAHgCIABAAIAAABIAAABIAAAFIAAABIAAABIgDABIgMADIgJAAQgGAAgGgCgAgGgXQgDABgCADIgEAHIgBAHIAhAAQAAgKgDgFQgFgEgIAAQgDAAgEABg");
	this.shape_6.setTransform(77.9,164.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AgOAiIgCgBIgBAAIgBgBIAAg+IABgBIABgBIACAAIAEAAIACAAIABABIAAAKIAFgGIAEgEQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAIAFAAIACAAIAFABIABABIABABIAAAGIgBACIgBABIgCAAIgCgBIgBAAIgEAAIgDAAIgDADIgEAEIgDAGIAAApIgBABIgBAAIgCABIgDAAg");
	this.shape_7.setTransform(72.4,164.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AgOAgQgGgCgBgDIgEgJIgBgLIAAgnIABgBIACAAIAFAAIACAAIABABIAAABIAAAkIABAIQABAEACACIAEAEQACACAEAAQACAAAFgEQAFgDAEgGIAAgrIABgBIABgBIABAAIAGAAIACAAIABABIAAABIAAA+IAAABIgBABIgCAAIgCABIgDgBIgBAAIgBgBIAAgJQgFAFgGADQgFADgFAAQgHAAgDgCg");
	this.shape_8.setTransform(65.7,164.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AgNAhIgHgDIgBgDIAAgDIAAgCIAAgBIABgBIABAAIALAEIAHABIAEAAIAEgCIADgDIABgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgEgEIgQgHIgFgDIgDgFQgCgDAAgEQAAgEACgDQABgDADgDQADgDAEgBQAFgBAEAAIAFAAIAIACIADACIABAAIAAABIAAABIAAAFIAAABIgBABIgBAAIgBgBIgIgDIgGAAIgEAAIgEACIgCADIgBAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIADADIAQAIIAFADIAEAEIABAIQAAAEgBAEIgFAHIgIADIgJABg");
	this.shape_9.setTransform(59.1,164.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AARAhIgBAAIAAglIgBgJIgDgFIgEgEIgGgBQgDAAgEADQgEACgGAHIAAAsIgBAAIgEABIgFgBIgBAAIAAgBIAAg+IAAgBIABgBIACAAIAFAAIABAAIABABIAAAJQAGgGAFgDQAFgCAFAAQAGAAAEACIAHAFIAEAJIABALIAAAmIAAABIgBAAIgCABIgDAAg");
	this.shape_10.setTransform(52.6,164.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgPAgQgFgDgBgCQgDgEgBgFIgBgLIAAgnIABgBIACAAIAGAAIABAAIABABIAAABIABAsIADAGIAEAEQADACADAAQACAAAGgEQAEgDAFgGIAAgrIAAgBIABgBIABAAIAGAAIACAAIABABIAABAIgBABIgBAAIgDABIgFgBIAAgBIAAgBIAAgIQgFAFgGADQgEADgFAAQgHAAgFgCg");
	this.shape_11.setTransform(45,164.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgNAtQgFAAgFgDQgDgCgCgDIgBgHIAAgFIAFgIIAEgDQgEgCgBgDQgBgCAAgDQAAgEABgDIAEgGIgDgGIgBgIQAAgFACgEIAEgIIAIgEQAFgCAFAAIAKABIATAAIABACIABADIgBAEIgBABIgJAAIADAFIAAAHQABAGgCADQgCAFgDACQgDADgFACQgEABgFAAIgHgBIgFgCIgCADIgBACQAAACACADQADABADAAIAYACIAHAEIAFAFQABADAAAEQAAAFgCADQgBAEgFADIgJAFQgGACgHAAQgHAAgFgCgAgOAUIgCADIgBADIAAADQgBAEAFADQAEACAJAAQAFAAACgBIAGgDIADgEIACgEQAAgFgEgCQgEgCgFAAIgPAAgAgHgkIgEADIgCAFIgBAFQAAAHADADQAEAEAGAAQADAAACgCQADAAACgDIACgEIABgFQgBgHgDgDQgDgEgGAAIgGABg");
	this.shape_12.setTransform(37.9,165.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgFAHQgCgCAAgFQAAgEACgBQACgCADAAQAEAAACACQABABAAAEQAAAFgBACQgCABgEAAQgDAAgCgBg");
	this.shape_13.setTransform(32.5,167.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AAPAhIgBgBIgBgBIgNgtIAAAAIAAAAIgMAtIAAABIgCABIgCAAIgEABIgGgBIgBgBIAAgBIgTg9IgBgBIABgBIABgBIAHAAIACABIABAAIABABIAPAzIAAABIAAgBIAOgzIABgBIAAAAIACgBIAFAAIACABIAAAAIABABIAPAzIAAABIAAgBIAPgzIABgBIABAAIABgBIAGAAIACABIABAAIAAACIgTA9IgCACIgDAAIgDABg");
	this.shape_14.setTransform(26.5,164.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AAPAhIgCgBIAAgBIgNgtIAAAAIAAAAIgMAtIgBABIgBABIgCAAIgEABIgEgBIgDgBIgBgBIgTg9IAAgBIABgCIAIAAIACABIABAAIAAABIAQAzIAOgzIAAgBIABAAIACgBIAFAAIABABIABAAIABABIAPAzIAPgzIAAgBIABAAIACgBIAGAAIABABIABAAIABABIgBABIgTA9IAAABIgCABIgCAAIgDABg");
	this.shape_15.setTransform(16.2,164.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AAPAhIgBgBIgBgBIgNgtIAAAAIAAAAIgMAtIAAABIgCABIgCAAIgEABIgGgBIgBgBIAAgBIgTg9IgBgBIABgBIABgBIAHAAIACABIABAAIABABIAPAzIAAABIAAgBIAOgzIABgBIAAAAIACgBIAFAAIACABIAAAAIABABIAPAzIAAABIAAgBIAPgzIABgBIABAAIABgBIAGAAIACABIABAAIAAACIgTA9IgCACIgDAAIgDABg");
	this.shape_16.setTransform(5.8,164.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgtBcIgSgHIAFgcIASAHQANAEAUAAQATAAAKgFQAJgGAAgLQAAgMgJgHQgIgGgWgKIgVgIQgKgFgGgFQgIgHgDgIQgFgHAAgNQAAgYASgOQASgOAegBIAPABIAjAIIgGAbQgFgCgMgEQgLgDgQAAQgNABgKAFQgKAGAAALQAAAGACAFQACAEAFAEIAMAHIAnAQQAMAFAFAFQAHAGAFAJQADAJAAAOQAAAZgSANQgSAMgjAAQgaAAgMgDg");
	this.shape_17.setTransform(61.4,141.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgcB2QgUgIgQgQQgPgRgIgXQgIgWAAggQAAgdAJgYQAJgXAQgRQARgRAUgHQAWgJAXAAQAMAAARACQAPADAHACIAPAFIAIAFIgLAdQgMgIgPgDQgRgFgSAAQgTAAgOAHQgOAGgMANQgKANgGARQgGATAAAVQAAAXAFARQAFASAKANQAKAMAQAIQAPAGAUABQAPAAAKgCIAPgDIAAhbIAiAAIAAByIgMADQgGACgMABIgXAEQgMABgNAAQgYAAgWgJg");
	this.shape_18.setTransform(9.6,138.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AghBXQgPgHgIgKQgIgKgFgRQgEgOAAgUIAAhlIAhAAIAABeQAAAiAKAOQALAOAYAAIAVgBIAJgBIAGgBIAAiZIAhAAIAACwIgeAGQgRADgaAAQgVAAgNgGg");
	this.shape_19.setTransform(28.8,141.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AApBdIAAheQAAgTgCgKQgCgMgGgHQgEgHgKgEQgJgDgMAAIgLAAIgZADIAACZIghAAIAAiwIAegGQATgDAYAAQAVAAAOAGQAPAHAIAKQAJALADAQQAEARAAARIAABlg");
	this.shape_20.setTransform(46.4,140.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AghBXQgPgHgIgKQgJgMgEgPQgEgRAAgRIAAhlIAhAAIAABeQAAAiALAOQAKAOAYAAIALAAIALgBIAIgBIAGgBIAAiZIAhAAIAACwIgeAGQgRADgZAAQgVAAgOgGg");
	this.shape_21.setTransform(76.4,141.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgzBdIAAiuIAdgIQAUgDARAAIAeADIAHACIgGAcIgNgDQgHgCgQAAQgKAAgHACIgLADIAACYg");
	this.shape_22.setTransform(91.9,140.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgcBZQgSgIgLgNQgLgMgFgSQgGgSAAgTQAAgXAHgTQAHgRAMgNQAMgMAPgFQAPgHAOAAQAlAAAUAYQAUAVAAAwIgBALIh8AAQADAdAOAOQAOAPAeAAQARAAAMgDQALgDAGgDIAFAbQgHAFgOACQgOAEgUgBQgXAAgRgGgAgQg+QgJAFgFAGQgGAGgEAKQgDAKgBAJIBaAAQAAgXgLgNQgMgPgUAAQgKAAgJAFg");
	this.shape_23.setTransform(104.4,141.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AAAJMQh2gZhohfIB+hEIAAgBIACgBIANllIAAAAIi+BmQgDABAAADIgDBWQAAADADABQACACADgCIBPgpQACgCADACQACABAAADIgFCXQgBADgCABIhcAyQgTgXgUgbIASn6QABgCACgCIK6l3QBKgRBLgiIABANIssG0IgHDiQAAADACACQAEABACgBIE5ioQACgBADABQACACAAADIgBAeQAAADgDABIhcAxQgDACAAACIgEBWQAAAEADABQAAAAABABQAAAAABAAQABAAAAAAQABgBABAAIC6hkQACgBAAgDIAKjgQAAgDgDgCQgDgCgCABIk7CqQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgDgBAAgDIABgeQAAgCADgCILQmDQAMGHiiE3QhMCThmBeQhpBgh2AYgAoRihQgkjRAVjTQEmCFD6iLIAAgBIAAABIABgBIAAABQBgA2BnANIpUFBIgCABIgOGSQhSimgjjHg");
	this.shape_24.setTransform(56.7,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,113.6,170.6), null);


(lib.gun2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlbBDIoVAAIACgFIAMggIAHgWQANguAngtQAMgNA3hFQAegnAnAFIALAAIAKgBQACgRACgHQADgNAMgCQAOgCAGAMIAIAXIHcAAQAHgBAEADIAACBIFdAAIAAhSQHUgBAJACIAMgVIAWgZIAVgbIAQAAQAnAWAUAqQACADAFADQAFADADABIAaAAIAABRIgBAAIgkEVIynAlg");
	this.shape.setTransform(88.1,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gun2, new cjs.Rectangle(0,0,176.2,48), null);


(lib.gun1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsdhwIHYAAIAAhXIRjAAIAACiIkwAAIAABlIDjAAIAABpIrVgHIh6AjIqfADg");
	this.shape.setTransform(115.8,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al4J0IhdgHQg+gEh6gFQgLAAgTAHQgYAKgWgRQgdgZgMgtQgqidA8ipQBKjSAehbQAPgxAKhQQAKhPg5g7QgSgSgagJIgxgRQgbgLgSgNIAAgNQAGgKAMgEQAHgCAPgBQA0gDAQgtIATgyIAWhQQW8AGAAADIgGCuQADAtgGAAIiRAAIiSgCQgcAAgWAKQgUAKgVATQgwAsgUA3QgUA2ALA+QAHApgXAaQgJAMgsAaQiIBTizgwQgsgNgTgCQgZgCghAGQgFABgEAGQgFAFgCAGQgdBRgKAkQgmCTgMA/QgWB2AfByQAEAOACAWQABAQgHAHQgGAHgQACQgaADgfAAIglgBgAg/leQg6AcgNAxQgIAeADAoQADAXAIAuQAKBEBJAUQAoAMA6AJQBcAQBfg5QBPgvgKhKQAAgqgGgWQgFgXgOgSQgegmgugOQglgLg3AEQgdACgJAcQgTA5AFAiQAFAoAlAlIAVAVIAJAKQAFAGgCAEQgCAFgJAAQgIABgGgCIgJgDQgogSghg0QgbgqgDgaQgFgfAAgQIgDgJQgCgFgDgBQgZgJgLgYQgDgIgGAAIgHACg");
	this.shape_1.setTransform(80.9,62.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gun1, new cjs.Rectangle(0,-16.8,195.7,142.6), null);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-8.4,-3.55,16.8,7.1);
	this.shape.setTransform(9,7.2,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullet, new cjs.Rectangle(0,0,18,14.5), null);


(lib.gun22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.gun2();
	this.instance.parent = this;
	this.instance.setTransform(3.2,-100.9,1,1,0,0,0,88,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.gun1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-37.2,1,1,0,0,0,88.9,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.gun22, new cjs.Rectangle(-97.6,-124.9,195.7,150.6), null);


(lib.gun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoBgDQDTgzGtARQDXAJCsATQikAfjEANQhoAHhgAAQj9AAjWgtg");
	this.shape.setTransform(152.2,-110.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiygBQBJgWCWAHQBKAEA9AJQg6ANhEAGQgjADghAAQhZAAhLgUg");
	this.shape_1.setTransform(195.1,-108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[]},2).wait(19));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiLCqQhTgmgnhCQgqhHAihJIABAtQALA1AxAsQAnAjBkAFQAvACARAFQAdAHAJAVQAGAfgyAPQgTAGgVAAQgpAAgvgVgACNC4QgzgIgKgbQgFgMAoAJQA3ANAQAAQgxgqgGghQgFgfAfgFIBJgJQAsgNACgtQACgziZgkQiPgihjAPQg2ALgTABQgfADALgRIAUgOQAbgQAegMQBggkBdAcQB3AjA7AvQBBA0gRA4QgNApg2AIQgaAEgHAEQgNAIADAUQAEAhAeATQAMAHABADQADAFgKAJQgPANgcAAQgNAAgPgDgAgHBUQhKgFhJgrIg6gqQB1BIBngPQAOgCAxgNQAbgIAKAHQAdAVgdAQQgZANg3AAIgjgBgACPgGIhmgrQhmgghWAQQghAHgJABQgOABgBgMQgDgaBHADQA/ACBoAXQBcAVAvAVQArAUgTAHQgEABgGAAQgPAAgagKg");
	this.shape_2.setTransform(133.5,-109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AC9CyQgSgDgEgJQgBgFAOAEQATAEAGAAQgRgPgCgLQgCgLALgCIAZgDIABAAQAPgFABgQQAAgDgBgDIADAAQADAIgDAJQgEANgPAEIgFABQgJABgCACQgFACABAIQABALALAHIAFAEQABABgEADQgFAFgKAAIgKgBgAi7CnQgdgPgPgbQgPgeAMgeIABASQAEAXARASQAPAOAkACQARABAGACQALADADAJQACANgSAGQgHACgIAAQgPAAgRgJgAAeBcQgkgDglgWIgdgVQA7AlAygIQAIgBAYgHQAOgDAFADQAOAKgPAIQgMAIgdAAIgQgBgAgrgmIgegMQgegJgZAEIgMADQgEAAgBgDQgBgIAVABQATAAAeAHQAbAGAOAGQAMAGgFACIgDABQgFAAgHgEgAA/iAQgHgOgpgJQgugLggAFIgYADQgKABADgFIAHgFQAIgFAKgEQAggMAeAJQAmAMAUAPQALAKAEAKg");
	this.shape_3.setTransform(134.9,-113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},1).to({state:[]},2).wait(19));

	// Слой 3
	this.instance = new lib.bullet();
	this.instance.parent = this;
	this.instance.setTransform(-41.8,-110.1,1,1,15,0,0,9,7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regY:7.3,rotation:0,x:-47.9,y:-120.4},3).to({rotation:-60,x:-69.3,y:-155.7},2).to({regY:7.4,rotation:-120,x:-118.4,y:-146.2},5).to({scaleX:0.29,scaleY:0.29,rotation:-285,x:-203.2,y:-83},9).wait(1));

	// Слой 4
	this.instance_1 = new lib.gun2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-100.9,1,1,0,0,0,88,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-17.8},1).to({regX:88.1,rotation:-12.9,x:-48.6,y:-101.4},5,cjs.Ease.get(-1)).to({regX:88,rotation:0,x:3.2,y:-100.9},9,cjs.Ease.get(1)).wait(10));

	// Слой 5
	this.instance_2 = new lib.gun1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,-37.2,1,1,0,0,0,88.9,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:89,rotation:-12.9,x:-11.9,y:-44.5},5,cjs.Ease.get(-1)).to({regX:88.9,rotation:0,x:-8.7,y:-37.2},9,cjs.Ease.get(1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,-124.9,195.7,150.6);


// stage content:
(lib.Gunsure_AdWords_970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(199.4,125.3,1.12,1.12,0,0,0,56.8,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(469));

	// Слой 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AkHTiIG83IQAWhEgGhRIgutmIAfAAIBONbQAMBYgcBSInpW+g");
	this.shape.setTransform(404.2,125.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(469));

	// Слой 17
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],11,-19.3,0,11,-19.3,247.1).s().p("EgjAATiMAAAgnDMBE3AAAIBKO/IncYEg");
	this.shape_1.setTransform(203.1,125.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(469));

	// txt-3
	this.instance_1 = new lib.txt3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.3,102,1,1,0,0,0,89.6,61.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).to({y:122,alpha:1},13).wait(110).to({x:232.3,alpha:0},5).to({_off:true},1).wait(6));

	// med-3
	this.instance_2 = new lib.med4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(852.5,92.7,1.245,1.245,0,0,0,67.2,35.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(233).to({_off:false},0).to({x:790.2,alpha:1},10).wait(62).to({x:815.1,alpha:0},9).to({_off:true},1).wait(154));

	// med-2
	this.instance_3 = new lib.med3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(624.3,94.1,1.245,1.245,0,0,0,78.5,35.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(224).to({_off:false},0).to({x:562,alpha:1},10).wait(66).to({x:586.9,alpha:0},9).to({_off:true},1).wait(159));

	// med-1
	this.instance_4 = new lib.med2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(876.9,92.9,1.245,1.245,0,0,0,86.3,35.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({x:814.7,alpha:1},9).wait(57).to({x:864.5,alpha:0},9).to({_off:true},1).wait(244));

	// txt-2
	this.instance_5 = new lib.med1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(623,94.3,1.245,1.245,0,0,0,77.5,35.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({x:560.7,alpha:1},9).wait(61).to({x:610.5,alpha:0},9).to({_off:true},1).wait(249));

	// txt-1
	this.instance_6 = new lib.txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(223.2,89.8,1,1,0,0,0,82.5,67.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({x:193.2,alpha:1},14,cjs.Ease.get(1)).wait(80).to({x:213.2,alpha:0},15).to({_off:true},1).wait(329));

	// txt-2
	this.instance_7 = new lib.txt2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(667.6,214.5,1.096,1.096,0,0,0,50.3,19.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({x:645.7,alpha:1},14).wait(397).to({y:280.2},9).to({_off:true},1).wait(11));

	// Слой 21
	this.instance_8 = new lib.gun22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(867.8,215.2,0.316,0.316,0,0,0,0.1,-49.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({regX:0.3,x:752.7},15).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},56).wait(24).to({_off:false},0).to({_off:true},61).wait(24).to({_off:false},0).to({_off:true},47).wait(24).to({_off:false},0).to({_off:true},47).wait(24).to({_off:false},0).to({_off:true},47).wait(22).to({_off:false},0).to({y:275.2},8).wait(1));

	// Layer 1
	this.instance_9 = new lib.gun();
	this.instance_9.parent = this;
	this.instance_9.setTransform(752.7,215.2,0.316,0.316,0,0,0,0.3,-49.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({_off:true},24).wait(56).to({_off:false},0).to({_off:true},24).wait(61).to({_off:false},0).to({_off:true},24).wait(47).to({_off:false},0).to({_off:true},24).wait(47).to({_off:false},0).to({_off:true},24).wait(47).to({_off:false},0).to({_off:true},25).wait(6));

	// Слой 20
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(43,43,43,0)").s().p("EgvLANYIAA6vMBeXAAAIAAavg");
	this.shape_2.setTransform(668.9,94);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(43,43,43,0.039)").s().p("EgvLANYIAA6vMBeXAAAIAAavg");
	this.shape_3.setTransform(668.9,93.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(43,43,43,0.078)").s().p("EgvLANXIAA6tMBeXAAAIAAatg");
	this.shape_4.setTransform(668.9,93.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(43,43,43,0.118)").s().p("EgvLANXIAA6tMBeXAAAIAAatg");
	this.shape_5.setTransform(668.9,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(43,43,43,0.157)").s().p("EgvLANXIAA6sMBeXAAAIAAasg");
	this.shape_6.setTransform(668.9,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(43,43,43,0.196)").s().p("EgvLANWIAA6rMBeXAAAIAAarg");
	this.shape_7.setTransform(668.9,93.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(43,43,43,0.235)").s().p("EgvLANWIAA6rMBeXAAAIAAarg");
	this.shape_8.setTransform(668.9,93.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(43,43,43,0.275)").s().p("EgvLANVIAA6pMBeXAAAIAAapg");
	this.shape_9.setTransform(668.9,93.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(43,43,43,0.314)").s().p("EgvLANVIAA6pMBeXAAAIAAapg");
	this.shape_10.setTransform(668.9,92.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(43,43,43,0.353)").s().p("EgvLANVIAA6pMBeXAAAIAAapg");
	this.shape_11.setTransform(668.9,92.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(43,43,43,0.396)").s().p("EgvLANUIAA6nMBeXAAAIAAang");
	this.shape_12.setTransform(668.9,92.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(43,43,43,0.435)").s().p("EgvLANUIAA6nMBeXAAAIAAang");
	this.shape_13.setTransform(668.9,92.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(43,43,43,0.475)").s().p("EgvLANUIAA6nMBeXAAAIAAang");
	this.shape_14.setTransform(668.9,92.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(43,43,43,0.514)").s().p("EgvLANUIAA6nMBeXAAAIAAang");
	this.shape_15.setTransform(668.9,92.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(43,43,43,0.553)").s().p("EgvLANTIAA6lMBeXAAAIAAalg");
	this.shape_16.setTransform(668.9,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(43,43,43,0.592)").s().p("EgvLANTIAA6lMBeXAAAIAAalg");
	this.shape_17.setTransform(668.9,91.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(43,43,43,0.631)").s().p("EgvLANSIAA6jMBeXAAAIAAajg");
	this.shape_18.setTransform(668.9,91.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(43,43,43,0.671)").s().p("EgvLANSIAA6jMBeXAAAIAAajg");
	this.shape_19.setTransform(668.9,91.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(43,43,43,0.71)").s().p("EgvLANSIAA6iMBeXAAAIAAaig");
	this.shape_20.setTransform(668.9,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(43,43,43,0.749)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_21.setTransform(668.9,91.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(43,43,43,0.682)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_22.setTransform(668.9,91.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(43,43,43,0.612)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_23.setTransform(668.9,91.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(43,43,43,0.545)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_24.setTransform(668.9,91.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(43,43,43,0.478)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_25.setTransform(668.9,91.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(43,43,43,0.408)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_26.setTransform(668.9,91.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(43,43,43,0.341)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_27.setTransform(668.9,91.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(43,43,43,0.271)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_28.setTransform(668.9,91.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(43,43,43,0.204)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_29.setTransform(668.9,91.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(43,43,43,0.137)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_30.setTransform(668.9,91.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(43,43,43,0.067)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_31.setTransform(668.9,91.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(43,43,43,0)").s().p("EgvLANRIAA6hMBeXAAAIAAahg");
	this.shape_32.setTransform(668.9,91.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},328).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},110).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));

	// Слой 18
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(38,42,36,0.898)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_33.setTransform(672.5,214.1);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(38,42,37,0.816)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_34.setTransform(672.5,214.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(39,42,37,0.733)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_35.setTransform(672.5,214.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(39,42,38,0.655)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_36.setTransform(672.5,214.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(40,42,39,0.573)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_37.setTransform(672.5,214.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(40,42,39,0.49)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_38.setTransform(672.5,214.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(41,43,40,0.408)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_39.setTransform(672.5,214.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(41,43,40,0.325)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_40.setTransform(672.5,214.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(42,43,41,0.243)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_41.setTransform(672.5,214.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(42,43,42,0.165)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_42.setTransform(672.5,214.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(43,43,42,0.082)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_43.setTransform(672.5,214.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(43,43,43,0)").s().p("EgwMAFnIAArNMBgZAAAIAALNg");
	this.shape_44.setTransform(672.5,214.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33}]},30).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},413).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(30).to({_off:false},0).wait(427).to({_off:true},1).wait(11));

	// bg-image.jpg
	this.instance_10 = new lib.bgimage();
	this.instance_10.parent = this;
	this.instance_10.setTransform(372,419,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(469));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(464,114,993.1,430);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bgimage.jpg", id:"bgimage"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;