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
	this.shape.setTransform(2.4,85.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AheA2IA9gNQAHAfAeAAQAZAAAAgQQAAgIgGgFQgFgEgPgEQg2gNgQgVQgQgUAAgcQAAgkAXgYQAWgZAqAAQBAAAAVBAIg2ATQgHgZgaAAQgVAAAAAQQAAAHAFAEQAGAEAMADQAnAKAPAHQAPAIALARQAKASAAAZQAAAngaAYQgaAZgpAAQhNAAgShPg");
	this.shape_1.setTransform(169.8,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("Ag9BuQgZgUAAguIAAiuIBCAAIAAClQAAASAHAJQAGAIANAAQAMAAAHgGQAIgGABgIQACgIAAgWIAAiWIAzAAIAACqQAAAwgYAVQgYAWglAAQgnAAgYgVg");
	this.shape_2.setTransform(150.4,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_3.setTransform(124.8,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AhBBiQgagjAAg9QAAg7AZglQAZgmAsAAQApAAAXAdQAWAcADAvIg8AEQAAgbgIgLQgJgLgKAAQgeAAAABKQAAAqAIAPQAIAPAOAAQAZAAADgrIA7AFQgDAvgZAZQgZAagjAAQgqAAgbgjg");
	this.shape_4.setTransform(107.6,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AAiCBIgMgzIg3AAIgNAzIg1AAIBBkBIBEAAIBCEBgAgWAWIAhAAIgQhKg");
	this.shape_5.setTransform(87.4,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_6.setTransform(69.9,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC300").s().p("AAmCBIg6hyQgLgYgLgcQAFAbABAOIAAB9Ig1AAIAAkBIA9AAIAwBfQAPAbAIAVQgGgfABgkIAAhMIA0AAIAAEBg");
	this.shape_7.setTransform(51.7,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC300").s().p("AhHBhQgcglAAg8QAAg4AbgmQAagmAvAAQAsAAAcAkQAbAjAAA7QAAA9gcAlQgcAlgsAAQgrAAgcgkgAgeACQAABIAeAAQAQAAAIgRQAHgSAAgtQAAhDgeAAQgfAAAABLg");
	this.shape_8.setTransform(29.9,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC300").s().p("AhBBiQgagiAAg+QAAg8AZgkQAZgmArAAQAqAAAXAdQAWAcADAvIg8AEQAAgbgIgLQgJgLgKAAQgeAAAABKQAAAqAIAPQAIAPANAAQAaAAADgrIA7AFQgEAvgZAZQgYAagkAAQgpAAgbgjg");
	this.shape_9.setTransform(9.2,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AAOBTIAAgnIhBAAIAAgNIA9hxIAUAAIAABuIAWAAIAAAQIgWAAIAAAngAghAcIAvAAIABheg");
	this.shape_10.setTransform(141.3,113.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgeBIQgNgKgFgRIAOgGQAIAcAZAAQAQAAAIgMQAKgLAAgSQAAgTgJgJQgKgLgMAAQgSAAgNAVIgNgDIAEhXIBPAAIgCASIhBAAIgDA0QAPgRARAAQATAAANAPQAOAQAAAYQAAAZgPAQQgOAQgVAAQgQAAgNgLg");
	this.shape_11.setTransform(129.6,114);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgjA8QgPgYAAgkQAAgjAOgYQANgZAXAAQAZAAAMAaQANAaAAAhQAAAigNAYQgMAagZAAQgVAAgOgZgAgZgxQgIASAAAfQAAAeAJAUQAIASAQAAQASAAAHgSQAJgUAAgbQAAgdgJgVQgIgVgRAAQgQAAgJATg");
	this.shape_12.setTransform(113,113.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgjA/QgOgXAAgkQAAgkAOgaQAMgaAcAAQAgAAAKAlIgPAFQgHgZgVAAQgkAAgBBLQAGgQALgIQALgIALAAQATAAAMAPQANAQAAAVQAAAXgOARQgNARgVAAQgWAAgPgWgAgTADQgKAMAAAQQAAAPAJALQAJALANAAQAOAAAJgLQAJgLAAgRQAAgPgJgMQgJgKgNAAQgMAAgKALg");
	this.shape_13.setTransform(101.3,113.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgkA8QgOgYAAgkQAAgjAOgYQANgZAXAAQAZAAAMAaQANAaAAAhQAAAigNAYQgNAagYAAQgVAAgPgZgAgZgxQgIASAAAfQABAfAIATQAIASAQAAQARAAAIgSQAIgSAAgdQAAgfgIgTQgIgVgRAAQgRAAgIATg");
	this.shape_14.setTransform(84.5,113.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AguBTIAAgPIAoAAIAAh9QgTAXgSANIAAgVQAbgSAOgWIALAAIAACWIAmAAIAAAPg");
	this.shape_15.setTransform(73.4,113.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AguBTIAAgPIAoAAIAAh9QgRAXgTANIAAgVQAbgSANgWIALAAIAACWIAmAAIAAAPg");
	this.shape_16.setTransform(56.7,113.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgjA/QgOgWABglQAAgkANgaQANgaAbAAQAgAAALAlIgPAFQgIgZgUAAQglAAgBBLQAGgQALgIQAKgIAMAAQATAAAMAPQANAPAAAWQgBAXgNARQgNARgVAAQgWAAgPgWgAgTADQgKALAAARQAAAPAJALQAJALANAAQAOAAAJgLQAJgLAAgRQAAgPgJgMQgJgKgMAAQgNAAgKALg");
	this.shape_17.setTransform(44.4,113.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AglBHQgNgNAAgTQAAgbAfgOQgZgNAAgaQAAgTANgMQANgMATAAQAVAAAMAMQAMALAAATQAAAagaALQAVALAFALQAFAKAAAMQAAAUgNAMQgOAOgXAAQgYAAgOgOgAgiAoQAAANAJAIQAKAIAQAAQAQAAAJgIQAJgIAAgMQAAgYgjgMQgiAKAAAZgAgTg9QgIAHAAALQAAAMAJAIQAJAIAKADQAQgFAHgIQAHgIAAgKQAAgNgIgGQgIgGgOAAQgMAAgIAHg");
	this.shape_18.setTransform(32.6,113.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgjA8QgOgYAAgkQgBgjANgYQAOgZAXAAQAZAAANAaQAMAaAAAhQAAAigNAYQgNAagYAAQgWAAgNgZgAgYgxQgJASABAfQAAAeAIAUQAIASAQAAQARAAAIgSQAIgUAAgbQABgdgJgVQgIgVgRAAQgRAAgHATg");
	this.shape_19.setTransform(20.9,113.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AghA1QgJgLAAgPQAAgSANgLQANgMAdAAIANABQAAgPgCgGQgCgGgGgEQgFgEgKAAQgXAAgDAWIgOgDQAFgiAlAAQAUAAAJAMQAJAKAAAcIAAAyQAAAMACALIgQAAIgBgVQgKAZgYAAQgRAAgIgLgAgQAHQgJAGgBAPQAAAJAGAGQAFAGALAAQANAAAIgMQAJgMAAgRIAAgIIgPAAQgRAAgKAHg");
	this.shape_20.setTransform(173.5,85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgkA8IAAgOIA0hbIgvAAIAAgOIBEAAIAAAKIg2BfIA2AAIAAAOg");
	this.shape_21.setTransform(164.3,85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_22.setTransform(157.5,89.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AggAtQgLgSAAgbQAAgcAMgRQANgSASAAQAVAAALATQAMASAAAaQAAAbgNATQgMASgTAAQgUAAgMgTgAgTgkQgIAMAAAYQAAAZAIAMQAJALAKAAQAMAAAHgMQAIgLAAgZQAAgZgIgLQgIgLgLAAQgKAAgJALg");
	this.shape_23.setTransform(149.8,85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgcAtQgLgSAAgbQAAgaAMgSQALgTASAAQAQAAAKAMQAKAMACATIgOADQgDgegVAAQgLAAgHANQgHANAAAVQAAAXAHAMQAHANALAAQATAAAFgeIAOADQgDAVgKAKQgKAMgPAAQgTAAgLgTg");
	this.shape_24.setTransform(140.1,85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_25.setTransform(132.8,89.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgfAuQgNgRAAgcQAAgbANgTQANgSATAAQAUAAALARQAMAQABAgIhHAAQAAAaAJALQAKAJAJAAQATAAAHgYIAPAEQgEAQgMAJQgLALgPAAQgTAAgNgSgAgRgmQgIAKgBARIA1AAQAAgKgCgIQgCgHgHgHQgGgFgJAAQgKAAgIAKg");
	this.shape_26.setTransform(125.1,85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AgXA+IAAh4IANAAIAAAcQAHgSAGgHQAIgGAHAAIAGAAIAAASIgDAAQgNAAgIAMQgHALgBAUIAAA+g");
	this.shape_27.setTransform(117.3,84.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AgdAxQgJgMAAgWIAAhMIAQAAIAABMQAAASAGAGQAGAIAHAAQAGgBAHgFQAFgEAFgKQAEgKAAgLIAAhDIAPAAIAAB3IgOAAIAAgWQgKAagUAAQgPAAgJgNg");
	this.shape_28.setTransform(107.9,85.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AgpAdIAOgEQAGAXAYAAQAKAAAGgFQAHgGAAgJQAAgOgRgEIgUgFQgMgDgHgHQgHgJAAgNQAAgPAKgKQAKgLAQAAQAfAAAIAfIgOAEQgGgTgSAAQgJAAgHAFQgGAEAAAJQAAANAQAEIASAEQAeAHAAAcQAAAQgLAKQgLALgTAAQgiAAgIgjg");
	this.shape_29.setTransform(97.6,85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AAZA+IAAhNQAAgQgGgHQgGgGgJAAQgLAAgIALQgIAMAAASIAABBIgPAAIAAh4IAOAAIAAAXQAMgaATAAQAKAAAIAHQAJAHACAJQADAJAAAWIAABFg");
	this.shape_30.setTransform(87.8,84.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AgdAxQgJgMAAgWIAAhMIAQAAIAABMQAAASAGAGQAGAIAHAAQAGgBAHgFQAFgEAFgKQAEgKAAgLIAAhDIAPAAIAAB3IgOAAIAAgWQgKAagUAAQgPAAgJgNg");
	this.shape_31.setTransform(76.9,85.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgjBUQgLgJAAgPQAAgRAOgGQgJgIAAgMQAAgOAOgGQgNgNAAgTQAAgSALgMQALgLAPAAQAKAAAKAGQABgMAFgFQAGgFAKAAIAFAAIAAAQQgMAAgDACQgDADgBAIQAJANAAARQAAAQgLAMQgJALgRgBIgGAAIgHgBQgDAAgEACQgEADABAGQgBAGAGADQAFADATAAQAQAAAJADQAIABAFAJQAHAHgBALQAAAjgwAAQgYgBgKgIgAggA6QAAAKAJAFQAJAFAOAAQALAAALgEQAKgFAAgKQAAgGgDgDQgDgDgFgCIgTgBIgXgCQgLAGAAAKgAgRg2QgIAHABANQgBAMAHAHQAFAHAKAAQAKAAAFgHQAHgHAAgMQgBgMgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_32.setTransform(67,86.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFEFE").s().p("AguA8QgUgaAAgiQABgjAUgZQAUgYAcAAQAbAAASAVQASAVAAAfQABAWgKASQgKASgOAAQgMAAgEgOQgJAPgMAAQgOAAgHgNQgKgMABgUQgBgTALgOQAKgOAOAAQAMAAAIAOIABgMIANAAIgGBCQAAAIAHAAQAHAAAGgNQAGgMABgRQgBgbgPgQQgOgQgXAAQgWAAgQAUQgQAUAAAdQAAAdAPAUQAQAVAbAAQAWAAAVgOIAFAOQgYAPgYAAQghAAgTgZgAgOgTQgGAJAAAOQAAANAFAHQAFAIAHAAQAHAAAHgLQAGgKAAgOQAAgLgFgHQgFgHgHAAQgHAAgHAJg");
	this.shape_33.setTransform(54.3,82.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AggAtQgMgTAAgaQAAgcAOgRQANgSARAAQAUAAANATQAMASgBAaQABAbgNATQgNASgTAAQgUAAgMgTgAgTgkQgIALAAAZQAAAaAIALQAIALALAAQAMAAAHgMQAJgLgBgZQAAgYgIgMQgJgLgKAAQgLAAgIALg");
	this.shape_34.setTransform(41.6,85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AgNBTIAAhpIgRAAIAAgPIARAAQABgcAIgJQAHgIAOAAIANABIAAAPQgEgBgFAAQgKAAgFAGQgEAFAAAPIAAAEIAXAAIAAAPIgXAAIAABpg");
	this.shape_35.setTransform(33.6,82.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AAYA+IAAhNQAAgQgFgHQgHgGgIAAQgLAAgIALQgIALAAATIAABBIgPAAIAAh4IAPAAIAAAXQAMgaARAAQALAAAJAHQAHAIADAIQADAJAAAWIAABFg");
	this.shape_36.setTransform(25,84.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AgHBRIAAh3IAPAAIAAB3gAgHg8IAAgVIAPAAIAAAVg");
	this.shape_37.setTransform(17.3,82.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AghA1QgJgLAAgPQAAgSANgLQANgMAdAAIANABQAAgPgBgGQgDgHgFgDQgGgEgKAAQgXAAgDAWIgOgDQAGgiAkAAQAUAAAKAMQAIALAAAbIAAAyQAAAOACAJIgPAAIgCgVQgKAZgYAAQgQAAgJgLgAgQAHQgKAHAAAOQABAIAFAHQAFAGAKAAQANAAAKgMQAJgMgBgRIAAgIIgOAAQgRAAgLAHg");
	this.shape_38.setTransform(171.6,54);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AgjA8IAAgOIAzhbIgvAAIAAgOIBDAAIAAAKIg1BfIA1AAIAAAOg");
	this.shape_39.setTransform(162.4,54);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_40.setTransform(155.7,58.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("AggAtQgLgTAAgaQAAgcANgRQANgSARAAQAUAAANATQALASAAAaQAAAcgMASQgNASgTAAQgUAAgMgTgAgSgkQgIALAAAZQAAAaAIALQAHALALAAQAMAAAIgMQAIgNAAgXQAAgYgJgMQgIgLgLAAQgLAAgHALg");
	this.shape_41.setTransform(147.9,54);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEFEFE").s().p("AgdAtQgKgSAAgbQAAgbALgRQAMgTASAAQAQAAAKAMQAJAMADATIgOADQgEgegTAAQgMAAgHANQgHANAAAVQAAAWAHANQAHANALAAQATAAAFgeIAOADQgDAUgKALQgLAMgOAAQgUAAgLgTg");
	this.shape_42.setTransform(138.2,54);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_43.setTransform(131,58.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEFEFE").s().p("AgfAuQgMgRAAgcQAAgcANgSQANgSASAAQATAAAMARQAMAQAAAgIhGAAQAAAbAJAKQAKAJAJAAQATAAAHgYIAPAEQgEAPgMAKQgLALgPAAQgUAAgMgSgAgRgmQgIAKgBARIA2AAQgBgLgCgHQgCgHgHgHQgGgFgIAAQgKAAgJAKg");
	this.shape_44.setTransform(123.2,54);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AgXA+IAAh3IANAAIAAAbQAIgTAGgGQAHgGAHAAIAGABIAAASIgDAAQgNgBgIAMQgHALgBATIAAA/g");
	this.shape_45.setTransform(115.4,53.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFEFE").s().p("AgdAyQgJgMAAgXIAAhMIAPAAIAABMQAAASAGAHQAHAGAHAAQAGABAGgGQAGgEAEgLQAEgHAAgNIAAhDIAQAAIAAB4IgOAAIAAgYQgLAbgUAAQgPAAgIgMg");
	this.shape_46.setTransform(106,54.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEFEFE").s().p("AgpAdIAPgEQAEAXAaAAQAJAAAHgFQAGgFAAgKQAAgOgRgEIgTgFQgNgDgHgHQgHgJAAgNQAAgPAKgKQAKgLAQAAQAgAAAHAfIgOAEQgHgTgRAAQgJAAgGAFQgGAEAAAJQAAANAPAEIASAEQAeAHAAAcQAAARgLAJQgLALgTAAQghAAgJgjg");
	this.shape_47.setTransform(95.7,54);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("AAYA+IAAhMQABgRgHgHQgFgHgJAAQgMAAgGAMQgJALABATIAABBIgQAAIAAh3IAPAAIAAAVQALgZASAAQALAAAIAHQAJAIACAIQADAIAAAYIAABEg");
	this.shape_48.setTransform(85.9,53.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AgdAyQgJgMAAgXIAAhMIAPAAIAABMQAAASAHAHQAGAGAHAAQAGABAGgGQAGgEAEgLQAEgHAAgNIAAhDIAQAAIAAB4IgOAAIAAgYQgLAbgUAAQgPAAgIgMg");
	this.shape_49.setTransform(75.1,54.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("AgkBUQgKgJAAgOQAAgSAPgHQgKgHAAgMQAAgOAOgGQgNgNAAgTQAAgSALgLQALgMAPAAQAKAAAKAFQABgMAFgEQAGgFALABIADAAIAAAOQgKABgEADQgEACAAAIQAJAOAAAPQAAASgKAKQgLAMgQAAIgHgBIgGgCQgDABgEADQgDADAAAFQAAAHAFACQAFACATABQAQAAAJACQAIADAGAHQAFAIAAALQAAAjgwgBQgXABgMgJgAggA7QAAAJAJAFQAJAFAOAAQALAAALgFQALgEAAgKQAAgGgEgDQgDgEgFgBIgTgBIgXgCQgLAHAAAKgAgSg2QgGAHAAANQAAAMAGAHQAFAHALAAQAIAAAGgHQAHgHAAgMQAAgLgHgJQgGgHgIAAQgJAAgHAHg");
	this.shape_50.setTransform(65.1,55.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_51.setTransform(57.4,58.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgTBYIgNAAIgeh3IAQAAIAVBZIAVhZIAKAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_52.setTransform(48.2,54);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgUBYIgMAAIgdh3IAOAAIAWBZIAUhZIALAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_53.setTransform(34.9,54);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgTBYIgNAAIgeh3IAQAAIAVBZIAVhZIAKAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_54.setTransform(21.6,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,179.3,122.6), null);


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
	this.shape.setTransform(123.5,122.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AAWCAIgehiIgUAAIAABiIhBAAIAAj/IBtAAQAkgBAVAVQAUAVAAAiQAAAWgHASQgIAQgWANIAmBvgAgcgYIAcAAQALAAAHgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_1.setTransform(99.6,122.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("AAiCAIgMgyIg3AAIgNAyIg1AAIBBj/IBEAAIBCD/gAgWAWIAhAAIgQhKg");
	this.shape_2.setTransform(78.3,122.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AhOCAIAAj/ICdAAIAAA6IheAAIAAAmIBMAAIAAA4IhMAAIAAAqIBeAAIAAA9g");
	this.shape_3.setTransform(59.6,122.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AAWCAIgehiIgUAAIAABiIhBAAIAAj/IBtAAQAlgBAUAVQAUAVAAAiQAAAWgHASQgIAQgWANIAmBvgAgcgYIAcAAQALAAAHgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_4.setTransform(39.2,122.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AggCAIAAj/IBAAAIAAD/g");
	this.shape_5.setTransform(23,122.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AhLCAIAAj/ICXAAIAAA9IhYAAIAAApIBDAAIAAA6IhDAAIAABfg");
	this.shape_6.setTransform(10.1,122.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AAWCBIgehiIgUAAIAABiIhBAAIAAkBIBtAAQAlAAAUAWQAUAVAAAhQAAAXgHARQgIAQgWAMIAmBxgAgcgXIAcAAQAKgBAIgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_7.setTransform(155.8,84.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("Ag9BvQgZgWAAgtIAAiuIBCAAIAAClQAAARAGAKQAHAIANAAQALAAAIgGQAIgGABgIQABgIABgWIAAiWIAyAAIAACqQAAAwgXAWQgXAUgnAAQgmAAgYgTg");
	this.shape_8.setTransform(134.3,84.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AhHBgQgcgjAAg8QAAg6AaglQAbglAvAAQArAAAcAjQAcAkAAA6QAAA8gcAlQgbAmgtgBQgrABgcglgAgeADQAABHAeAAQAQAAAHgRQAHgRAAguQAAhDgdAAQgfAAAABMg");
	this.shape_9.setTransform(113.1,84.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgcCBIAAhtIhHiUIBHAAIAkBWIAjhWIA5AAIhCCUIAABtg");
	this.shape_10.setTransform(92.8,84.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAZCBIAAhkIgxAAIAABkIhAAAIAAkBIBAAAIAABfIAxAAIAAhfIBAAAIAAEBg");
	this.shape_11.setTransform(64.8,84.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_12.setTransform(46.6,84.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgfCBIAAkBIA/AAIAAEBg");
	this.shape_13.setTransform(34.1,84.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AAeCBIgeiNIgaCNIg5AAIg4kBIA9AAIAdCUIAdiUIAyAAIAfCUIAeiUIAxAAIg4EBg");
	this.shape_14.setTransform(14.8,84.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhXAAIAAAjIBGAAIAAAzIhGAAIAAAnIBXAAIAAA5g");
	this.shape_15.setTransform(134.3,47.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AhFB3IAAjtICLAAIAAA5IhRAAIAAAmIA+AAIAAA1Ig+AAIAABZg");
	this.shape_16.setTransform(118.1,47.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_17.setTransform(104.7,47.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AhDB3IAAjtIA8AAIAACyIBLAAIAAA7g");
	this.shape_18.setTransform(92.8,47.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AAUB3IgbhbIgTAAIAABbIg8AAIAAjtIBlAAQAiAAASAUQASASAAAgQAAAWgGAPQgHAOgUAMIAiBogAgagWIAaAAQAKAAAHgGQAGgFAAgLQAAgXgWAAIgbAAg");
	this.shape_19.setTransform(67.3,47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("Ag4BlQgXgSAAgqIAAigIA9AAIAACXQAAASAGAHQAGAIAMgBQALABAGgGQAHgFACgIIABgcIAAiJIAvAAIAACbQAAAugWATQgVATgjABQgkAAgWgUg");
	this.shape_20.setTransform(47.4,47.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AhCBZQgaghAAg4QAAgzAZgkQAZgiArAAQAoAAAaAgQAZAhABA3QAAA3gbAiQgZAigpAAQgoAAgaghgAgbACQAABCAbAAQAPAAAGgQQAHgPAAgrQAAg9gbAAQgcAAAABFg");
	this.shape_21.setTransform(27.9,47.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgZB3IAAhlIhCiIIBCAAIAhBPIAghPIA0AAIg9CIIAABlg");
	this.shape_22.setTransform(9.2,47.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("Ag/BaQgYgfAAg4QAAg1AXgjQAYgkAtAAQAjAAAVAVQAUAVAHAoIg6AHQgEglgWABQgdgBAABEQAAAoAKAOQAKANAMAAQAKAAAIgIQAIgIAAgOIggAAIAAgyIBXAAIAACFIgdAAQgDgLgFgOQgRAcgjAAQgmAAgYggg");
	this.shape_23.setTransform(149.1,12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AAiB3Ig0hpQgIgQgMggQAEAWAAAQIAABzIgwAAIAAjtIA4AAIAtBXQAMAYAIAVQgFgdAAghIAAhGIAxAAIAADtg");
	this.shape_24.setTransform(129.4,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_25.setTransform(114.8,12.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AhVB3IAAjtIBLAAQAwAAAYAkQAZAjAAAvQAAA0gbAhQgZAigpAAgAgaBAIAQAAQAOAAAKgRQAKgSAAgeQAAgZgJgTQgJgSgQgBIgQAAg");
	this.shape_26.setTransform(100.6,12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AAjB3Ig1hpQgLgVgKgbQAFAWAAAQIAABzIgwAAIAAjtIA4AAIAtBXQAMAYAIAVQgFgeABggIAAhGIAwAAIAADtg");
	this.shape_27.setTransform(80.3,12.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhXAAIAAAiIBGAAIAAA0IhGAAIAAAnIBXAAIAAA5g");
	this.shape_28.setTransform(62.3,12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AhFB3IAAjtICLAAIAAA5IhRAAIAAAmIA+AAIAAA1Ig+AAIAABZg");
	this.shape_29.setTransform(46.1,12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhWAAIAAAiIBFAAIAAA0IhFAAIAAAnIBWAAIAAA5g");
	this.shape_30.setTransform(29.4,12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AhVB3IAAjtIBLAAQAvAAAZAkQAYAkAAAuQAAA0gaAhQgaAigoAAgAgaBAIAQAAQANAAALgRQAKgRAAgfQAAgZgJgTQgJgSgQgBIgQAAg");
	this.shape_31.setTransform(10.9,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,165.2,134.9), null);


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
(lib.Gunsure_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150,125.2,0.956,0.956,0,0,0,56.8,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regY:85.3,scaleX:0.47,scaleY:0.47,x:39.7,y:54.8},11).wait(409).to({regY:85.5,scaleX:0.96,scaleY:0.96,x:150,y:125.2},10).wait(1));

	// Слой 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AkHTiIG83IQAWhEgGhRIgutmIAfAAIBONbQAMBYgcBSInpW+g");
	this.shape.setTransform(244.2,125.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AkQTiIHO3iQAWhEgGhRIgutMIAfAAIBONCQAMBYgcBRIn7XYg");
	this.shape_1.setTransform(226.9,125.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AkYTiIHf37QAWhEgGhRIguszIAfAAIBOMoQAMBYgcBSIoNXxg");
	this.shape_2.setTransform(209.7,125.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AkhTiIHx4VQAWhEgGhRIgusZIAfAAIBOMPQAMBYgcBRIofYLg");
	this.shape_3.setTransform(192.4,125.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AkqTiIID4uQAWhEgGhRIgusAIAfAAIBOL1QAMBYgcBSIoxYkg");
	this.shape_4.setTransform(175.2,125.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AkzTiIIV5IQAWhEgGhRIgurmIAfAAIBOLcQAMBYgcBRIpDY+g");
	this.shape_5.setTransform(157.9,125.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("Ak8TiIIm5hQAWhEgGhRIgurNIAgAAIBNLDQAMBYgcBRIpTZXg");
	this.shape_6.setTransform(140.7,125.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AlFTiII456QAWhEgGhRIguq0IAgAAIBNKpQAMBYgcBSIplZwg");
	this.shape_7.setTransform(123.4,125.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AlOTiIJK6UQAWhEgGhRIguqaIAgAAIBNKQQAMBYgcBRIp3aKg");
	this.shape_8.setTransform(106.2,125.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AlXTiIJc6tQAWhEgGhRIguqBIAgAAIBNJ2QAMBYgcBSIqJajg");
	this.shape_9.setTransform(88.9,125.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AlgTiIJu7HQAWhEgGhRIgupnIAfAAIBOJdQAMBYgcBRIqba9g");
	this.shape_10.setTransform(71.7,125.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AlpTiIKA7gQAWhEgGhRIgupOIAfAAIBOJDQAMBYgcBSIqtbWg");
	this.shape_11.setTransform(54.5,125.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AlfTiIJs7EQAWhEgGhRIgupqIAgAAIBNJfQAMBYgcBSIqZa6g");
	this.shape_12.setTransform(73.4,125.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AlVTiIJY6oQAWhEgGhRIguqGIAgAAIBNJ7QAMBYgcBSIqGaeg");
	this.shape_13.setTransform(92.4,125.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AlLTiIJE6MQAWhEgGhRIguqiIAgAAIBNKXQAMBYgcBSIpyaCg");
	this.shape_14.setTransform(111.4,125.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AlBTiIIx5wQAWhEgGhRIguq+IAfAAIBOKzQAMBYgcBSIpfZmg");
	this.shape_15.setTransform(130.3,125.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("Ak4TiIIe5UQAWhEgGhRIguraIAfAAIBOLPQAMBYgcBSIpLZKg");
	this.shape_16.setTransform(149.3,125.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AkuTiIIK44QAWhEgGhRIgur2IAgAAIBNLrQAMBYgcBSIo3Yug");
	this.shape_17.setTransform(168.3,125.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AkkTiIH24cQAWhEgGhRIgusSIAgAAIBNMHQAMBYgcBSIokYSg");
	this.shape_18.setTransform(187.3,125.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AkaTiIHi4AQAWhEgGhRIgusuIAgAAIBNMjQAMBYgcBSIoQX2g");
	this.shape_19.setTransform(206.2,125.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AkQTiIHP3kQAWhEgGhRIgutKIAfAAIBOM/QAMBYgcBSIn9Xag");
	this.shape_20.setTransform(225.2,125.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},409).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 17
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],4.4,-14.8,0,4.4,-14.8,156.7).s().p("A08TiMAAAgnDMAovAAAIBKO/IncYEg");
	this.shape_21.setTransform(133.1,125.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],16.4,-2.3,0,16.4,-2.3,151.1).s().p("AzqTiMAAAgnDMAmLAAAIBKOsInvYXg");
	this.shape_22.setTransform(125,125.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],28.4,10.3,0,28.4,10.3,145.5).s().p("AyZTiMAAAgnDMAjpAAAIBKOZIoCYqg");
	this.shape_23.setTransform(116.9,125.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],40.4,22.8,0,40.4,22.8,139.9).s().p("AxHTiMAAAgnDMAhFAAAIBKOFIoVY+g");
	this.shape_24.setTransform(108.9,125.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],52.4,35.4,0,52.4,35.4,134.3).s().p("Av1TiMAAAgnDIehAAIBKNyIooZRg");
	this.shape_25.setTransform(100.8,125.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],64.3,47.9,0,64.3,47.9,128.8).s().p("AukTiMAAAgnDIb/AAIBKNfIo8Zkg");
	this.shape_26.setTransform(92.7,125.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],76.4,60.5,0,76.4,60.5,123.3).s().p("AtTTiMAAAgnDIZcAAIBLNMIpPZ3g");
	this.shape_27.setTransform(84.7,125.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],88.3,73.1,0,88.3,73.1,117.9).s().p("AsBTiMAAAgnDIW5AAIBKM5IpiaKg");
	this.shape_28.setTransform(76.6,125.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],100.3,85.6,0,100.3,85.6,112.5).s().p("AqvTiMAAAgnDIUVAAIBKMmIp1adg");
	this.shape_29.setTransform(68.5,125.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],112.3,98.2,0,112.3,98.2,107.1).s().p("ApdTiMAAAgnDIRxAAIBLMTIqHawg");
	this.shape_30.setTransform(60.5,125.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],124.3,110.7,0,124.3,110.7,101.8).s().p("AoMTiMAAAgnDIPPAAIBKMAIqabDg");
	this.shape_31.setTransform(52.4,125.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],136.3,123.3,0,136.3,123.3,96.6).s().p("Am6TiMAAAgnDIMrAAIBKLtIqtbWg");
	this.shape_32.setTransform(44.3,125.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],123.1,109.5,0,123.1,109.5,102.3).s().p("AoUTiMAAAgnDIPfAAIBKMCIqYbBg");
	this.shape_33.setTransform(53.2,125.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],109.9,95.7,0,109.9,95.7,108.2).s().p("ApuTiMAAAgnDISTAAIBKMWIqDatg");
	this.shape_34.setTransform(62.1,125.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],96.7,81.8,0,96.7,81.8,114.1).s().p("ArHTiMAAAgnDIVGAAIBJMsIpuaXg");
	this.shape_35.setTransform(71,125.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],83.5,68,0,83.5,68,120).s().p("AshTiMAAAgnDIX5AAIBKNBIpaaCg");
	this.shape_36.setTransform(79.8,125.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],70.4,54.2,0,70.4,54.2,126.1).s().p("At7TiMAAAgnDIatAAIBKNVIpFZug");
	this.shape_37.setTransform(88.7,125.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],57.2,40.4,0,57.2,40.4,132.1).s().p("AvVTiMAAAgnDIdhAAIBKNrIowZYg");
	this.shape_38.setTransform(97.6,125.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],44,26.6,0,44,26.6,138.2).s().p("AwvTiMAAAgnDMAgVAAAIBKOAIobZDg");
	this.shape_39.setTransform(106.4,125.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],30.8,12.8,0,30.8,12.8,144.4).s().p("AyITiMAAAgnDMAjHAAAIBLOUIoHYvg");
	this.shape_40.setTransform(115.3,125.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],17.6,-1,0,17.6,-1,150.6).s().p("AziTiMAAAgnDMAl7AAAIBKOqInxYZg");
	this.shape_41.setTransform(124.2,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_21}]},19).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},409).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// txt-3
	this.instance_1 = new lib.txt3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.3,105,1,1,0,0,0,89.6,61.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).to({y:125,alpha:1},13).wait(92).to({x:232.3,alpha:0},5).to({_off:true},1).wait(5));

	// med-3
	this.instance_2 = new lib.med4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(223.7,128.5,1,1,0,0,0,67.2,35.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(233).to({_off:false},0).to({x:173.7,alpha:1},10).wait(62).to({x:193.7,alpha:0},9).to({_off:true},1).wait(135));

	// med-2
	this.instance_3 = new lib.med3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(234.8,49.2,1,1,0,0,0,78.5,35.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(224).to({_off:false},0).to({x:184.8,alpha:1},10).wait(66).to({x:204.8,alpha:0},9).to({_off:true},1).wait(140));

	// med-1
	this.instance_4 = new lib.med2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(243.3,128.7,1,1,0,0,0,86.3,35.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({x:193.3,alpha:1},9).wait(57).to({x:233.3,alpha:0},9).to({_off:true},1).wait(225));

	// txt-2
	this.instance_5 = new lib.med1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(234.5,48.6,1,1,0,0,0,77.5,35.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({x:184.5,alpha:1},9).wait(61).to({x:224.5,alpha:0},9).to({_off:true},1).wait(230));

	// txt-1
	this.instance_6 = new lib.txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(223.2,89.8,1,1,0,0,0,82.5,67.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({x:193.2,alpha:1},14,cjs.Ease.get(1)).wait(80).to({x:213.2,alpha:0},15).to({_off:true},1).wait(310));

	// txt-2
	this.instance_7 = new lib.txt2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(145.9,216.1,1,1,0,0,0,50.3,19.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({x:125.9,alpha:1},14).wait(259).to({y:276.1},9).to({_off:true},1).wait(130));

	// Слой 21
	this.instance_8 = new lib.gun22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(328.5,216.8,0.288,0.288,0,0,0,0.1,-49.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({x:223.5},15).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},56).wait(24).to({_off:false},0).to({_off:true},61).wait(24).to({_off:false},0).to({_off:true},47).wait(24).to({_off:false},0).to({x:328.5},7).to({_off:true},1).wait(122));

	// Layer 1
	this.instance_9 = new lib.gun();
	this.instance_9.parent = this;
	this.instance_9.setTransform(223.5,216.8,0.288,0.288,0,0,0,0.1,-49.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({_off:true},24).wait(56).to({_off:false},0).to({_off:true},24).wait(61).to({_off:false},0).to({_off:true},24).wait(47).to({_off:false},0).to({_off:true},25).wait(129));

	// Слой 20
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(43,43,43,0)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_42.setTransform(150,87.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(43,43,43,0.055)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_43.setTransform(150,87.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(43,43,43,0.106)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_44.setTransform(150,87.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(43,43,43,0.161)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_45.setTransform(150,87.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(43,43,43,0.216)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_46.setTransform(150,87.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(43,43,43,0.267)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_47.setTransform(150,87.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(43,43,43,0.322)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_48.setTransform(150,87.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(43,43,43,0.376)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_49.setTransform(150,87.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(43,43,43,0.427)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_50.setTransform(150,87.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(43,43,43,0.482)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_51.setTransform(150,87.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(43,43,43,0.533)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_52.setTransform(150,87.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(43,43,43,0.588)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_53.setTransform(150,87.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(43,43,43,0.643)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_54.setTransform(150,87.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(43,43,43,0.694)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_55.setTransform(150,87.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(43,43,43,0.749)").s().p("A3bNxIAA7hMAu3AAAIAAbhg");
	this.shape_56.setTransform(150,87.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(43,43,43,0.749)").s().p("A3bN/IAA78MAu3AAAIAAb8g");
	this.shape_57.setTransform(150,88.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(43,43,43,0.749)").s().p("A3bOMIAA8XMAu3AAAIAAcXg");
	this.shape_58.setTransform(150,89.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(43,43,43,0.749)").s().p("A3bOaIAA8yMAu3AAAIAAcyg");
	this.shape_59.setTransform(150,91.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(43,43,43,0.749)").s().p("A3bOnIAA9OMAu3AAAIAAdOg");
	this.shape_60.setTransform(150,92.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(43,43,43,0.749)").s().p("A3bO1IAA9pMAu3AAAIAAdpg");
	this.shape_61.setTransform(150,93.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(43,43,43,0.749)").s().p("A3bPCIAA+EMAu3AAAIAAeEg");
	this.shape_62.setTransform(150,95.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(43,43,43,0.749)").s().p("A3bPQIAA+fMAu3AAAIAAefg");
	this.shape_63.setTransform(150,96.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(43,43,43,0.749)").s().p("A3bPdIAA+6MAu3AAAIAAe6g");
	this.shape_64.setTransform(150,97.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(43,43,43,0.749)").s().p("A3bPrIAA/VMAu3AAAIAAfVg");
	this.shape_65.setTransform(150,99.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(43,43,43,0.749)").s().p("A3bP4IAA/wMAu3AAAIAAfwg");
	this.shape_66.setTransform(150,100.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(43,43,43,0.749)").s().p("A3bQHMAAAggMMAu3AAAMAAAAgMg");
	this.shape_67.setTransform(150,102);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(43,43,43,0.749)").s().p("A3bQUMAAAggnMAu3AAAMAAAAgng");
	this.shape_68.setTransform(150,103.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(43,43,43,0.749)").s().p("A3bQiMAAAghCMAu3AAAMAAAAhCg");
	this.shape_69.setTransform(150,104.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(43,43,43,0.749)").s().p("A3bQvMAAAghdMAu3AAAMAAAAhdg");
	this.shape_70.setTransform(150,106);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(43,43,43,0.749)").s().p("A3bQEMAAAggHMAu3AAAMAAAAgHg");
	this.shape_71.setTransform(150,109.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(43,43,43,0.749)").s().p("A3bPZIAA+xMAu3AAAIAAexg");
	this.shape_72.setTransform(150,113.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(43,43,43,0.749)").s().p("A3bOuIAA9bMAu3AAAIAAdbg");
	this.shape_73.setTransform(150,117.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(43,43,43,0.749)").s().p("A3bODIAA8FMAu3AAAIAAcFg");
	this.shape_74.setTransform(150,121.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(43,43,43,0.749)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_75.setTransform(150,125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(43,43,43,0.675)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_76.setTransform(150,125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(43,43,43,0.6)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_77.setTransform(150,125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(43,43,43,0.525)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_78.setTransform(150,125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(43,43,43,0.451)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_79.setTransform(150,125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(43,43,43,0.376)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_80.setTransform(150,125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(43,43,43,0.298)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_81.setTransform(150,125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(43,43,43,0.224)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_82.setTransform(150,125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(43,43,43,0.149)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_83.setTransform(150,125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(43,43,43,0.075)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_84.setTransform(150,125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(43,43,43,0)").s().p("A3bNYIAA6vMAu3AAAIAAavg");
	this.shape_85.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},140).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},174).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_75}]},92).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).wait(1));

	// Слой 18
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(43,43,43,0)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_86.setTransform(150,214.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(43,43,43,0.063)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_87.setTransform(150,214.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(42,43,42,0.129)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_88.setTransform(150,214.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(42,43,42,0.192)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_89.setTransform(150,214.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(42,43,41,0.255)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_90.setTransform(150,214.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(41,43,40,0.322)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_91.setTransform(150,214.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(41,43,40,0.384)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_92.setTransform(150,214.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(41,43,40,0.451)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_93.setTransform(150,214.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(40,42,39,0.514)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_94.setTransform(150,214.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(40,42,39,0.576)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_95.setTransform(150,214.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(39,42,38,0.643)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_96.setTransform(150,214.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(39,42,37,0.706)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_97.setTransform(150,214.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(39,42,37,0.769)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_98.setTransform(150,214.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(38,42,36,0.835)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_99.setTransform(150,214.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(38,42,36,0.898)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_100.setTransform(150,214.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(38,42,36,0.769)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_101.setTransform(150,214.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(38,42,36,0.706)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_102.setTransform(150,214.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(38,42,36,0.643)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_103.setTransform(150,214.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(38,42,36,0.576)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_104.setTransform(150,214.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(38,42,36,0.514)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_105.setTransform(150,214.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(38,42,36,0.451)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_106.setTransform(150,214.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(38,42,36,0.384)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_107.setTransform(150,214.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(38,42,36,0.322)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_108.setTransform(150,214.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(38,42,36,0.255)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_109.setTransform(150,214.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(38,42,36,0.192)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_110.setTransform(150,214.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(38,42,36,0.129)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_111.setTransform(150,214.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(38,42,36,0.063)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_112.setTransform(150,214.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(38,42,36,0)").s().p("A3bFnIAArNMAu3AAAIAALNg");
	this.shape_113.setTransform(150,214.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86}]},30).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},270).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[]},1).wait(121));

	// bg-image.jpg
	this.instance_10 = new lib.bgimage();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-84,0.698,0.698);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,41,301.1,418.6);
// library properties:
lib.properties = {
	width: 300,
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