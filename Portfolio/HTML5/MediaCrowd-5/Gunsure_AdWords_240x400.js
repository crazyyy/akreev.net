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
	this.shape.setTransform(-76.8,402.7,1.765,1.765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AheA2IA9gNQAHAfAeAAQAZAAAAgQQAAgIgGgFQgFgEgPgEQg2gNgQgVQgQgUAAgcQAAgkAXgYQAWgZAqAAQBAAAAVBAIg2ATQgHgZgaAAQgVAAAAAQQAAAHAFAEQAGAEAMADQAnAKAPAHQAPAIALARQAKASAAAZQAAAngaAYQgaAZgpAAQhNAAgShPg");
	this.shape_1.setTransform(218.7,275,1.765,1.765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("Ag9BuQgZgUAAguIAAiuIBCAAIAAClQAAASAHAJQAGAIANAAQAMAAAHgGQAIgGABgIQACgIAAgWIAAiWIAzAAIAACqQAAAwgYAVQgYAWglAAQgnAAgYgVg");
	this.shape_2.setTransform(184.5,275.4,1.765,1.765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_3.setTransform(139.3,275,1.765,1.765);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AhBBiQgagjAAg9QAAg7AZglQAZgmAsAAQApAAAXAdQAWAcADAvIg8AEQAAgbgIgLQgJgLgKAAQgeAAAABKQAAAqAIAPQAIAPAOAAQAZAAADgrIA7AFQgDAvgZAZQgZAagjAAQgqAAgbgjg");
	this.shape_4.setTransform(109,275,1.765,1.765);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AAiCBIgMgzIg3AAIgNAzIg1AAIBBkBIBEAAIBCEBgAgWAWIAhAAIgQhKg");
	this.shape_5.setTransform(73.3,275,1.765,1.765);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_6.setTransform(42.4,275,1.765,1.765);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC300").s().p("AAmCBIg6hyQgLgYgLgcQAFAbABAOIAAB9Ig1AAIAAkBIA9AAIAwBfQAPAbAIAVQgGgfABgkIAAhMIA0AAIAAEBg");
	this.shape_7.setTransform(10.2,275,1.765,1.765);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC300").s().p("AhHBhQgcglAAg8QAAg4AbgmQAagmAvAAQAsAAAcAkQAbAjAAA7QAAA9gcAlQgcAlgsAAQgrAAgcgkgAgeACQAABIAeAAQAQAAAIgRQAHgSAAgtQAAhDgeAAQgfAAAABLg");
	this.shape_8.setTransform(-28.3,275,1.765,1.765);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC300").s().p("AhBBiQgagiAAg+QAAg8AZgkQAZgmArAAQAqAAAXAdQAWAcADAvIg8AEQAAgbgIgLQgJgLgKAAQgeAAAABKQAAAqAIAPQAIAPANAAQAaAAADgrIA7AFQgEAvgZAZQgYAagkAAQgpAAgbgjg");
	this.shape_9.setTransform(-64.7,275,1.765,1.765);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AAOBTIAAgnIhBAAIAAgNIA9hxIAUAAIAABuIAWAAIAAAQIgWAAIAAAngAghAcIAvAAIABheg");
	this.shape_10.setTransform(168.5,452.3,1.765,1.765);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgeBIQgNgKgFgRIAOgGQAIAcAZAAQAQAAAIgMQAKgLAAgSQAAgTgJgJQgKgLgMAAQgSAAgNAVIgNgDIAEhXIBPAAIgCASIhBAAIgDA0QAPgRARAAQATAAANAPQAOAQAAAYQAAAZgPAQQgOAQgVAAQgQAAgNgLg");
	this.shape_11.setTransform(147.7,452.9,1.765,1.765);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgjA8QgPgYAAgkQAAgjAOgYQANgZAXAAQAZAAAMAaQANAaAAAhQAAAigNAYQgMAagZAAQgVAAgOgZgAgZgxQgIASAAAfQAAAeAJAUQAIASAQAAQASAAAHgSQAJgUAAgbQAAgdgJgVQgIgVgRAAQgQAAgJATg");
	this.shape_12.setTransform(118.4,452.6,1.765,1.765);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgjA/QgOgXAAgkQAAgkAOgaQAMgaAcAAQAgAAAKAlIgPAFQgHgZgVAAQgkAAgBBLQAGgQALgIQALgIALAAQATAAAMAPQANAQAAAVQAAAXgOARQgNARgVAAQgWAAgPgWgAgTADQgKAMAAAQQAAAPAJALQAJALANAAQAOAAAJgLQAJgLAAgRQAAgPgJgMQgJgKgNAAQgMAAgKALg");
	this.shape_13.setTransform(97.8,452.6,1.765,1.765);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgkA8QgOgYAAgkQAAgjAOgYQANgZAXAAQAZAAAMAaQANAaAAAhQAAAigNAYQgNAagYAAQgVAAgPgZgAgZgxQgIASAAAfQABAfAIATQAIASAQAAQARAAAIgSQAIgSAAgdQAAgfgIgTQgIgVgRAAQgRAAgIATg");
	this.shape_14.setTransform(68.1,452.6,1.765,1.765);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AguBTIAAgPIAoAAIAAh9QgTAXgSANIAAgVQAbgSAOgWIALAAIAACWIAmAAIAAAPg");
	this.shape_15.setTransform(48.6,452.3,1.765,1.765);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AguBTIAAgPIAoAAIAAh9QgRAXgTANIAAgVQAbgSANgWIALAAIAACWIAmAAIAAAPg");
	this.shape_16.setTransform(19,452.3,1.765,1.765);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgjA/QgOgWABglQAAgkANgaQANgaAbAAQAgAAALAlIgPAFQgIgZgUAAQglAAgBBLQAGgQALgIQAKgIAMAAQATAAAMAPQANAPAAAWQgBAXgNARQgNARgVAAQgWAAgPgWgAgTADQgKALAAARQAAAPAJALQAJALANAAQAOAAAJgLQAJgLAAgRQAAgPgJgMQgJgKgMAAQgNAAgKALg");
	this.shape_17.setTransform(-2.6,452.6,1.765,1.765);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AglBHQgNgNAAgTQAAgbAfgOQgZgNAAgaQAAgTANgMQANgMATAAQAVAAAMAMQAMALAAATQAAAagaALQAVALAFALQAFAKAAAMQAAAUgNAMQgOAOgXAAQgYAAgOgOgAgiAoQAAANAJAIQAKAIAQAAQAQAAAJgIQAJgIAAgMQAAgYgjgMQgiAKAAAZgAgTg9QgIAHAAALQAAAMAJAIQAJAIAKADQAQgFAHgIQAHgIAAgKQAAgNgIgGQgIgGgOAAQgMAAgIAHg");
	this.shape_18.setTransform(-23.5,452.6,1.765,1.765);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgjA8QgOgYAAgkQgBgjANgYQAOgZAXAAQAZAAANAaQAMAaAAAhQAAAigNAYQgNAagYAAQgWAAgNgZgAgYgxQgJASABAfQAAAeAIAUQAIASAQAAQARAAAIgSQAIgUAAgbQABgdgJgVQgIgVgRAAQgRAAgHATg");
	this.shape_19.setTransform(-44.2,452.6,1.765,1.765);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AghA1QgJgLAAgPQAAgSANgLQANgMAdAAIANABQAAgPgCgGQgCgGgGgEQgFgEgKAAQgXAAgDAWIgOgDQAFgiAlAAQAUAAAJAMQAJAKAAAcIAAAyQAAAMACALIgQAAIgBgVQgKAZgYAAQgRAAgIgLgAgQAHQgJAGgBAPQAAAJAGAGQAFAGALAAQANAAAIgMQAJgMAAgRIAAgIIgPAAQgRAAgKAHg");
	this.shape_20.setTransform(225.2,401.7,1.765,1.765);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgkA8IAAgOIA0hbIgvAAIAAgOIBEAAIAAAKIg2BfIA2AAIAAAOg");
	this.shape_21.setTransform(209,401.7,1.765,1.765);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_22.setTransform(197,410,1.765,1.765);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AggAtQgLgSAAgbQAAgcAMgRQANgSASAAQAVAAALATQAMASAAAaQAAAbgNATQgMASgTAAQgUAAgMgTgAgTgkQgIAMAAAYQAAAZAIAMQAJALAKAAQAMAAAHgMQAIgLAAgZQAAgZgIgLQgIgLgLAAQgKAAgJALg");
	this.shape_23.setTransform(183.5,401.7,1.765,1.765);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgcAtQgLgSAAgbQAAgaAMgSQALgTASAAQAQAAAKAMQAKAMACATIgOADQgDgegVAAQgLAAgHANQgHANAAAVQAAAXAHAMQAHANALAAQATAAAFgeIAOADQgDAVgKAKQgKAMgPAAQgTAAgLgTg");
	this.shape_24.setTransform(166.2,401.7,1.765,1.765);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_25.setTransform(153.4,410,1.765,1.765);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgfAuQgNgRAAgcQAAgbANgTQANgSATAAQAUAAALARQAMAQABAgIhHAAQAAAaAJALQAKAJAJAAQATAAAHgYIAPAEQgEAQgMAJQgLALgPAAQgTAAgNgSgAgRgmQgIAKgBARIA1AAQAAgKgCgIQgCgHgHgHQgGgFgJAAQgKAAgIAKg");
	this.shape_26.setTransform(139.8,401.7,1.765,1.765);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AgXA+IAAh4IANAAIAAAcQAHgSAGgHQAIgGAHAAIAGAAIAAASIgDAAQgNAAgIAMQgHALgBAUIAAA+g");
	this.shape_27.setTransform(126,401.4,1.765,1.765);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AgdAxQgJgMAAgWIAAhMIAQAAIAABMQAAASAGAGQAGAIAHAAQAGgBAHgFQAFgEAFgKQAEgKAAgLIAAhDIAPAAIAAB3IgOAAIAAgWQgKAagUAAQgPAAgJgNg");
	this.shape_28.setTransform(109.4,402,1.765,1.765);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AgpAdIAOgEQAGAXAYAAQAKAAAGgFQAHgGAAgJQAAgOgRgEIgUgFQgMgDgHgHQgHgJAAgNQAAgPAKgKQAKgLAQAAQAfAAAIAfIgOAEQgGgTgSAAQgJAAgHAFQgGAEAAAJQAAANAQAEIASAEQAeAHAAAcQAAAQgLAKQgLALgTAAQgiAAgIgjg");
	this.shape_29.setTransform(91.3,401.7,1.765,1.765);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AAZA+IAAhNQAAgQgGgHQgGgGgJAAQgLAAgIALQgIAMAAASIAABBIgPAAIAAh4IAOAAIAAAXQAMgaATAAQAKAAAIAHQAJAHACAJQADAJAAAWIAABFg");
	this.shape_30.setTransform(73.9,401.4,1.765,1.765);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AgdAxQgJgMAAgWIAAhMIAQAAIAABMQAAASAGAGQAGAIAHAAQAGgBAHgFQAFgEAFgKQAEgKAAgLIAAhDIAPAAIAAB3IgOAAIAAgWQgKAagUAAQgPAAgJgNg");
	this.shape_31.setTransform(54.8,402,1.765,1.765);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEFEFE").s().p("AgjBUQgLgJAAgPQAAgRAOgGQgJgIAAgMQAAgOAOgGQgNgNAAgTQAAgSALgMQALgLAPAAQAKAAAKAGQABgMAFgFQAGgFAKAAIAFAAIAAAQQgMAAgDACQgDADgBAIQAJANAAARQAAAQgLAMQgJALgRgBIgGAAIgHgBQgDAAgEACQgEADABAGQgBAGAGADQAFADATAAQAQAAAJADQAIABAFAJQAHAHgBALQAAAjgwAAQgYgBgKgIgAggA6QAAAKAJAFQAJAFAOAAQALAAALgEQAKgFAAgKQAAgGgDgDQgDgDgFgCIgTgBIgXgCQgLAGAAAKgAgRg2QgIAHABANQgBAMAHAHQAFAHAKAAQAKAAAFgHQAHgHAAgMQgBgMgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_32.setTransform(37.2,404,1.765,1.765);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEFEFE").s().p("AguA8QgUgaAAgiQABgjAUgZQAUgYAcAAQAbAAASAVQASAVAAAfQABAWgKASQgKASgOAAQgMAAgEgOQgJAPgMAAQgOAAgHgNQgKgMABgUQgBgTALgOQAKgOAOAAQAMAAAIAOIABgMIANAAIgGBCQAAAIAHAAQAHAAAGgNQAGgMABgRQgBgbgPgQQgOgQgXAAQgWAAgQAUQgQAUAAAdQAAAdAPAUQAQAVAbAAQAWAAAVgOIAFAOQgYAPgYAAQghAAgTgZgAgOgTQgGAJAAAOQAAANAFAHQAFAIAHAAQAHAAAHgLQAGgKAAgOQAAgLgFgHQgFgHgHAAQgHAAgHAJg");
	this.shape_33.setTransform(14.8,398,1.765,1.765);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEFEFE").s().p("AggAtQgMgTAAgaQAAgcAOgRQANgSARAAQAUAAANATQAMASgBAaQABAbgNATQgNASgTAAQgUAAgMgTgAgTgkQgIALAAAZQAAAaAIALQAIALALAAQAMAAAHgMQAJgLgBgZQAAgYgIgMQgJgLgKAAQgLAAgIALg");
	this.shape_34.setTransform(-7.6,401.7,1.765,1.765);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("AgNBTIAAhpIgRAAIAAgPIARAAQABgcAIgJQAHgIAOAAIANABIAAAPQgEgBgFAAQgKAAgFAGQgEAFAAAPIAAAEIAXAAIAAAPIgXAAIAABpg");
	this.shape_35.setTransform(-21.8,397.7,1.765,1.765);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("AAYA+IAAhNQAAgQgFgHQgHgGgIAAQgLAAgIALQgIALAAATIAABBIgPAAIAAh4IAPAAIAAAXQAMgaARAAQALAAAJAHQAHAIADAIQADAJAAAWIAABFg");
	this.shape_36.setTransform(-36.9,401.4,1.765,1.765);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AgHBRIAAh3IAPAAIAAB3gAgHg8IAAgVIAPAAIAAAVg");
	this.shape_37.setTransform(-50.5,397.9,1.765,1.765);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEFEFE").s().p("AghA1QgJgLAAgPQAAgSANgLQANgMAdAAIANABQAAgPgBgGQgDgHgFgDQgGgEgKAAQgXAAgDAWIgOgDQAGgiAkAAQAUAAAKAMQAIALAAAbIAAAyQAAAOACAJIgPAAIgCgVQgKAZgYAAQgQAAgJgLgAgQAHQgKAHAAAOQABAIAFAHQAFAGAKAAQANAAAKgMQAJgMgBgRIAAgIIgOAAQgRAAgLAHg");
	this.shape_38.setTransform(221.8,347,1.765,1.765);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEFEFE").s().p("AgjA8IAAgOIAzhbIgvAAIAAgOIBDAAIAAAKIg1BfIA1AAIAAAOg");
	this.shape_39.setTransform(205.7,347,1.765,1.765);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_40.setTransform(193.7,355.3,1.765,1.765);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("AggAtQgLgTAAgaQAAgcANgRQANgSARAAQAUAAANATQALASAAAaQAAAcgMASQgNASgTAAQgUAAgMgTgAgSgkQgIALAAAZQAAAaAIALQAHALALAAQAMAAAIgMQAIgNAAgXQAAgYgJgMQgIgLgLAAQgLAAgHALg");
	this.shape_41.setTransform(180.1,347,1.765,1.765);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEFEFE").s().p("AgdAtQgKgSAAgbQAAgbALgRQAMgTASAAQAQAAAKAMQAJAMADATIgOADQgEgegTAAQgMAAgHANQgHANAAAVQAAAWAHANQAHANALAAQATAAAFgeIAOADQgDAUgKALQgLAMgOAAQgUAAgLgTg");
	this.shape_42.setTransform(162.9,347,1.765,1.765);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_43.setTransform(150.1,355.3,1.765,1.765);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEFEFE").s().p("AgfAuQgMgRAAgcQAAgcANgSQANgSASAAQATAAAMARQAMAQAAAgIhGAAQAAAbAJAKQAKAJAJAAQATAAAHgYIAPAEQgEAPgMAKQgLALgPAAQgUAAgMgSgAgRgmQgIAKgBARIA2AAQgBgLgCgHQgCgHgHgHQgGgFgIAAQgKAAgJAKg");
	this.shape_44.setTransform(136.5,347,1.765,1.765);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEFEFE").s().p("AgXA+IAAh3IANAAIAAAbQAIgTAGgGQAHgGAHAAIAGABIAAASIgDAAQgNgBgIAMQgHALgBATIAAA/g");
	this.shape_45.setTransform(122.6,346.7,1.765,1.765);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEFEFE").s().p("AgdAyQgJgMAAgXIAAhMIAPAAIAABMQAAASAGAHQAHAGAHAAQAGABAGgGQAGgEAEgLQAEgHAAgNIAAhDIAQAAIAAB4IgOAAIAAgYQgLAbgUAAQgPAAgIgMg");
	this.shape_46.setTransform(106.1,347.3,1.765,1.765);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEFEFE").s().p("AgpAdIAPgEQAEAXAaAAQAJAAAHgFQAGgFAAgKQAAgOgRgEIgTgFQgNgDgHgHQgHgJAAgNQAAgPAKgKQAKgLAQAAQAgAAAHAfIgOAEQgHgTgRAAQgJAAgGAFQgGAEAAAJQAAANAPAEIASAEQAeAHAAAcQAAARgLAJQgLALgTAAQghAAgJgjg");
	this.shape_47.setTransform(88,347,1.765,1.765);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("AAYA+IAAhMQABgRgHgHQgFgHgJAAQgMAAgGAMQgJALABATIAABBIgQAAIAAh3IAPAAIAAAVQALgZASAAQALAAAIAHQAJAIACAIQADAIAAAYIAABEg");
	this.shape_48.setTransform(70.6,346.7,1.765,1.765);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("AgdAyQgJgMAAgXIAAhMIAPAAIAABMQAAASAHAHQAGAGAHAAQAGABAGgGQAGgEAEgLQAEgHAAgNIAAhDIAQAAIAAB4IgOAAIAAgYQgLAbgUAAQgPAAgIgMg");
	this.shape_49.setTransform(51.5,347.3,1.765,1.765);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("AgkBUQgKgJAAgOQAAgSAPgHQgKgHAAgMQAAgOAOgGQgNgNAAgTQAAgSALgLQALgMAPAAQAKAAAKAFQABgMAFgEQAGgFALABIADAAIAAAOQgKABgEADQgEACAAAIQAJAOAAAPQAAASgKAKQgLAMgQAAIgHgBIgGgCQgDABgEADQgDADAAAFQAAAHAFACQAFACATABQAQAAAJACQAIADAGAHQAFAIAAALQAAAjgwgBQgXABgMgJgAggA7QAAAJAJAFQAJAFAOAAQALAAALgFQALgEAAgKQAAgGgEgDQgDgEgFgBIgTgBIgXgCQgLAHAAAKgAgSg2QgGAHAAANQAAAMAGAHQAFAHALAAQAIAAAGgHQAHgHAAgMQAAgLgHgJQgGgHgIAAQgJAAgHAHg");
	this.shape_50.setTransform(33.9,349.3,1.765,1.765);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_51.setTransform(20.2,355.3,1.765,1.765);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgTBYIgNAAIgeh3IAQAAIAVBZIAVhZIAKAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_52.setTransform(4,347,1.765,1.765);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgUBYIgMAAIgdh3IAOAAIAWBZIAUhZIALAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_53.setTransform(-19.4,347,1.765,1.765);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("AAWA8IgWhYIgTBYIgNAAIgeh3IAQAAIAVBZIAVhZIAKAAIAWBZIAWhZIANAAIgdB3g");
	this.shape_54.setTransform(-42.8,347,1.765,1.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(-81,251.6,316.4,216.4), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB800").s().p("AAwBRIAAiNIgrCNIgLAAIgriNIAACNIgOAAIAAihIAYAAIAoCBIAniBIAYAAIAAChg");
	this.shape.setTransform(199.2,22.9,3.115,3.115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB800").s().p("AgsBRIAAihIAuAAQAWAAALAOQAKAPAAATQAAAUgLAOQgLANgTAAIggAAIAABCgAgcgBIAeAAQAMAAAHgIQAHgKAAgNQAAgMgGgKQgGgJgNAAIgfAAg");
	this.shape_1.setTransform(158.4,22.9,3.115,3.115);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB800").s().p("AgtA0IANgGQAJAWAUAAQASAAAJgTQAJgTABghQgOAcgZAAQgSAAgNgPQgMgPAAgXQAAgXANgQQANgRAVAAQAZAAAMAWQAOAWgBAlQAAAngOAYQgNAZgaAAQgeAAgLghgAgYg4QgIAMAAAQQAAASAJAKQAJAJANAAQANAAAJgLQAJgLAAgRQABgOgJgMQgJgLgNAAQgPAAgJALg");
	this.shape_2.setTransform(120.5,22.9,3.115,3.115);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB800").s().p("AgtA0IANgGQAIAWAUAAQASAAAKgTQAJgUABggQgNAcgaAAQgSAAgNgPQgNgPAAgXQAAgWAOgRQANgRAVAAQAYAAANAWQAOAWAAAlQAAAmgPAZQgOAZgZAAQgfAAgKghgAgYg4QgJANAAAPQAAASAKAKQAKAJAMAAQANAAAJgLQAKgMgBgQQAAgOgJgMQgIgLgOAAQgPAAgIALg");
	this.shape_3.setTransform(84.1,22.9,3.115,3.115);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB800").s().p("AAeBRIgZhGIglAAIAABGIgPAAIAAihIAzAAQAVAAALAOQALAOAAARQAAAOgHALQgFALgOAFIAbBLgAgggFIAjAAQANAAAHgJQAGgIAAgNQABgOgIgGQgHgIgLAAIgkAAg");
	this.shape_4.setTransform(48.1,22.9,3.115,3.115);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgHBRIAAhEIgthdIAUAAIAiBKIAkhKIAPAAIgsBdIAABEg");
	this.shape_5.setTransform(212.1,-22.1,1.552,1.552);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgmBRIAAihIARAAIAACPIA8AAIAAASg");
	this.shape_6.setTransform(197.7,-22.1,1.552,1.552);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AAhBRIhEiNIABCNIgOAAIAAihIAVAAIA/CDIAAiDIANAAIAAChg");
	this.shape_7.setTransform(178.8,-22.1,1.552,1.552);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AgoA8QgOgXAAglQAAgkAPgYQAPgYAYAAQAZAAAPAYQAPAYAAAkQAAAhgPAaQgPAagZAAQgaAAgOgZgAgagwQgKASAAAfQAAAeAKASQAKATAQAAQASAAAJgTQAKgUAAgdQAAgggKgRQgKgSgRAAQgQAAgKATg");
	this.shape_8.setTransform(158.8,-22.1,1.552,1.552);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AAwBRIAAiNIgrCNIgLAAIgriNIAACNIgOAAIAAihIAYAAIAoCBIAniBIAZAAIAAChg");
	this.shape_9.setTransform(128.7,-22.1,1.552,1.552);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgnA8QgPgYAAgkQAAgkAPgYQAPgYAYAAQAZAAAPAYQAPAYAAAkQAAAigPAZQgOAagaAAQgZAAgOgZgAgagwQgKAUAAAdQAAAeAKASQAKATAQAAQARAAALgTQAJgTAAgeQAAgggKgRQgKgSgRAAQgQAAgKATg");
	this.shape_10.setTransform(106.3,-22.1,1.552,1.552);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAfBRIgZhGIglAAIAABGIgQAAIAAihIA0AAQAVAAAKAOQALAOgBARQAAAOgFALQgGALgNAFIAaBLgAgfgFIAiAAQAOAAAGgJQAHgIAAgNQAAgNgHgHQgHgHgLAAIgkAAg");
	this.shape_11.setTransform(87.6,-22.1,1.552,1.552);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgoBRIAAihIBRAAIAAASIhAAAIAAAzIA1AAIAAAPIg1AAIAABNg");
	this.shape_12.setTransform(70.7,-22.1,1.552,1.552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(33.1,-35.2,187.3,84.6), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC300").s().p("AA3CAIAAi2IgoC2IgoAAIgoi2IAAC2IgxAAIAAj/IBVAAIAeCHIAdiHIBUAAIAAD/g");
	this.shape.setTransform(137.3,508.4,1.754,1.754);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC300").s().p("AAWCAIgehiIgUAAIAABiIhBAAIAAj/IBtAAQAkgBAVAVQAUAVAAAiQAAAWgHASQgIAQgWANIAmBvgAgcgYIAcAAQALAAAHgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_1.setTransform(95.4,508.4,1.754,1.754);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC300").s().p("AAiCAIgMgyIg3AAIgNAyIg1AAIBBj/IBEAAIBCD/gAgWAWIAhAAIgQhKg");
	this.shape_2.setTransform(58.1,508.4,1.754,1.754);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC300").s().p("AhOCAIAAj/ICdAAIAAA6IheAAIAAAmIBMAAIAAA4IhMAAIAAAqIBeAAIAAA9g");
	this.shape_3.setTransform(25.3,508.4,1.754,1.754);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC300").s().p("AAWCAIgehiIgUAAIAABiIhBAAIAAj/IBtAAQAlgBAUAVQAUAVAAAiQAAAWgHASQgIAQgWANIAmBvgAgcgYIAcAAQALAAAHgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_4.setTransform(-10.5,508.4,1.754,1.754);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC300").s().p("AggCAIAAj/IBAAAIAAD/g");
	this.shape_5.setTransform(-39,508.4,1.754,1.754);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC300").s().p("AhLCAIAAj/ICXAAIAAA9IhYAAIAAApIBDAAIAAA6IhDAAIAABfg");
	this.shape_6.setTransform(-61.6,508.4,1.754,1.754);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AAWCBIgehiIgUAAIAABiIhBAAIAAkBIBtAAQAlAAAUAWQAUAVAAAhQAAAXgHARQgIAQgWAMIAmBxgAgcgXIAcAAQAKgBAIgGQAIgGAAgMQAAgZgZAAIgdAAg");
	this.shape_7.setTransform(193.9,441.8,1.754,1.754);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("Ag9BvQgZgWAAgtIAAiuIBCAAIAAClQAAARAGAKQAHAIANAAQALAAAIgGQAIgGABgIQABgIABgWIAAiWIAyAAIAACqQAAAwgXAWQgXAUgnAAQgmAAgYgTg");
	this.shape_8.setTransform(156.2,442.2,1.754,1.754);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AhHBgQgcgjAAg8QAAg6AaglQAbglAvAAQArAAAcAjQAcAkAAA6QAAA8gcAlQgbAmgtgBQgrABgcglgAgeADQAABHAeAAQAQAAAHgRQAHgRAAguQAAhDgdAAQgfAAAABMg");
	this.shape_9.setTransform(119.1,441.8,1.754,1.754);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgcCBIAAhtIhHiUIBHAAIAkBWIAjhWIA5AAIhCCUIAABtg");
	this.shape_10.setTransform(83.5,441.8,1.754,1.754);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAZCBIAAhkIgxAAIAABkIhAAAIAAkBIBAAAIAABfIAxAAIAAhfIBAAAIAAEBg");
	this.shape_11.setTransform(34.4,441.8,1.754,1.754);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgeCBIAAjDIgrAAIAAg+ICTAAIAAA+IgrAAIAADDg");
	this.shape_12.setTransform(2.5,441.8,1.754,1.754);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgfCBIAAkBIA/AAIAAEBg");
	this.shape_13.setTransform(-19.4,441.8,1.754,1.754);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AAeCBIgeiNIgaCNIg5AAIg4kBIA9AAIAdCUIAdiUIAyAAIAfCUIAeiUIAxAAIg4EBg");
	this.shape_14.setTransform(-53.3,441.8,1.754,1.754);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhXAAIAAAjIBGAAIAAAzIhGAAIAAAnIBXAAIAAA5g");
	this.shape_15.setTransform(156.2,377.1,1.754,1.754);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AhFB3IAAjtICLAAIAAA5IhRAAIAAAmIA+AAIAAA1Ig+AAIAABZg");
	this.shape_16.setTransform(127.8,377.1,1.754,1.754);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_17.setTransform(104.3,377.1,1.754,1.754);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AhDB3IAAjtIA8AAIAACyIBLAAIAAA7g");
	this.shape_18.setTransform(83.5,377.1,1.754,1.754);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AAUB3IgbhbIgTAAIAABbIg8AAIAAjtIBlAAQAiAAASAUQASASAAAgQAAAWgGAPQgHAOgUAMIAiBogAgagWIAaAAQAKAAAHgGQAGgFAAgLQAAgXgWAAIgbAAg");
	this.shape_19.setTransform(38.7,377.1,1.754,1.754);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("Ag4BlQgXgSAAgqIAAigIA9AAIAACXQAAASAGAHQAGAIAMgBQALABAGgGQAHgFACgIIABgcIAAiJIAvAAIAACbQAAAugWATQgVATgjABQgkAAgWgUg");
	this.shape_20.setTransform(3.9,377.4,1.754,1.754);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AhCBZQgaghAAg4QAAgzAZgkQAZgiArAAQAoAAAaAgQAZAhABA3QAAA3gbAiQgZAigpAAQgoAAgaghgAgbACQAABCAbAAQAPAAAGgQQAHgPAAgrQAAg9gbAAQgcAAAABFg");
	this.shape_21.setTransform(-30.3,377.1,1.754,1.754);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgZB3IAAhlIhCiIIBCAAIAhBPIAghPIA0AAIg9CIIAABlg");
	this.shape_22.setTransform(-63.1,377.1,1.754,1.754);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("Ag/BaQgYgfAAg4QAAg1AXgjQAYgkAtAAQAjAAAVAVQAUAVAHAoIg6AHQgEglgWABQgdgBAABEQAAAoAKAOQAKANAMAAQAKAAAIgIQAIgIAAgOIggAAIAAgyIBXAAIAACFIgdAAQgDgLgFgOQgRAcgjAAQgmAAgYggg");
	this.shape_23.setTransform(182.1,315.8,1.754,1.754);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AAiB3Ig0hpQgIgQgMggQAEAWAAAQIAABzIgwAAIAAjtIA4AAIAtBXQAMAYAIAVQgFgdAAghIAAhGIAxAAIAADtg");
	this.shape_24.setTransform(147.7,315.8,1.754,1.754);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgdB3IAAjtIA7AAIAADtg");
	this.shape_25.setTransform(122,315.8,1.754,1.754);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AhVB3IAAjtIBLAAQAwAAAYAkQAZAjAAAvQAAA0gbAhQgZAigpAAgAgaBAIAQAAQAOAAAKgRQAKgSAAgeQAAgZgJgTQgJgSgQgBIgQAAg");
	this.shape_26.setTransform(97.1,315.8,1.754,1.754);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEFE").s().p("AAjB3Ig1hpQgLgVgKgbQAFAWAAAQIAABzIgwAAIAAjtIA4AAIAtBXQAMAYAIAVQgFgeABggIAAhGIAwAAIAADtg");
	this.shape_27.setTransform(61.5,315.8,1.754,1.754);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhXAAIAAAiIBGAAIAAA0IhGAAIAAAnIBXAAIAAA5g");
	this.shape_28.setTransform(30,315.8,1.754,1.754);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEFE").s().p("AhFB3IAAjtICLAAIAAA5IhRAAIAAAmIA+AAIAAA1Ig+AAIAABZg");
	this.shape_29.setTransform(1.5,315.8,1.754,1.754);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEFE").s().p("AhIB3IAAjtICRAAIAAA3IhWAAIAAAiIBFAAIAAA0IhFAAIAAAnIBWAAIAAA5g");
	this.shape_30.setTransform(-27.7,315.8,1.754,1.754);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEFE").s().p("AhVB3IAAjtIBLAAQAvAAAZAkQAYAkAAAuQAAA0gaAhQgaAigoAAgAgaBAIAQAAQANAAALgRQAKgRAAgfQAAgZgJgTQgJgSgQgBIgQAAg");
	this.shape_31.setTransform(-60.1,315.8,1.754,1.754);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-79.2,294.4,289.6,236.6), null);


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
(lib.Gunsure_AdWords_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(120.1,200.2,0.636,0.636,0,0,0,56.8,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:56.9,regY:85.6,scaleX:0.46,scaleY:0.46,x:36.2,y:110.9},6).to({regY:85.3,scaleX:0.31,scaleY:0.31,x:27.4,y:36.6},5).wait(409).to({regY:85.6,scaleX:0.46,scaleY:0.46,x:36.2,y:110.9},0).to({regX:56.8,regY:85.5,scaleX:0.64,scaleY:0.64,x:120.1,y:200.2},10).wait(1));

	// Слой 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AjxfuIAGgdIACgIICss9ID4ywQAPgugEg2Iik9kIAVgBIC5dfQAIA6gTA2IkiUaIigLNIgCAIIgGAdg");
	this.shape.setTransform(200.1,203.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AjwfrIGn/9IAEgSQALgmgBgrIgBgTIij9gIAAgBIAVgBIC4dcIACAQQAEAygPAvIgFAQInFf3IAAABg");
	this.shape_1.setTransform(177.5,203);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AjwfoIGn/6IAEgSQALgmgBgrIgBgSIik9fIABAAIAUAAIAAAAIC5dZIABAQQAFAxgPAvIgEARInFfzIAAABg");
	this.shape_2.setTransform(154.8,202.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AjvflIGm/3IAFgSQAKgmgCgrIgBgTIij9bIABAAIAUAAIAAAAIC4dWIACAQQAFAygPAuIgEARInEfwIAAABg");
	this.shape_3.setTransform(132.1,202.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AjufhIGl/zIAFgSQAJgmgCgrIgCgSIii9ZIABAAIAUAAIAAAAIC3dTIACAQQAGAzgOAuIgEAQInEftIAAAAg");
	this.shape_4.setTransform(109.4,202.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AjufeIGl/wIAFgSQAJgmgDgrIgBgSIii9WIAVAAIAAABIC3dQIACAQQAGAygOAuIgEARInDfpg");
	this.shape_5.setTransform(86.7,201.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AjtfbIGk/tQAPgtgEg2Iik9lIAVAAIC5deQAIA7gTA2InCfmg");
	this.shape_6.setTransform(64,201.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("Aj7cRIHA+EQAPgugEg2IiJ44IAVgBICeYzQAIA6gTA2Ined+g");
	this.shape_7.setTransform(57.3,181.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AkJZGIHc8bQAOgtgEg2Ihu0NIAVAAICDUGQAIA6gSA3In6cUg");
	this.shape_8.setTransform(50.7,161);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AkWV8IH36zQAOgtgEg2IhTvgIAVAAIBoPZQAIA7gSA2IoVasg");
	this.shape_9.setTransform(43.9,140.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AkkSxIIS5JQAPgtgEg2Ig5q0IAVgBIBOKuQAIA6gTA3IowZCg");
	this.shape_10.setTransform(37.3,120.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AkyPmIIu3fQAPgugEg2IgfmIIAVAAIA0GBQAIA7gTA2IpMXZg");
	this.shape_11.setTransform(30.6,100.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AjtfdIGk/uIAFgTQAJglgDgsIgCgSIih9VIAVAAIAAABIC2dPIACAQQAHAygNAvIgFAQInCfog");
	this.shape_12.setTransform(77.6,201.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AjuffIGl/xIAFgTQAJglgDgsIgBgSIii9WIAUAAIABABIC3dRIACAPQAGAygOAvIgEARInDfpIgBABg");
	this.shape_13.setTransform(91.3,201.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AjufhIGl/zIAFgSQAJgmgCgrIgCgSIii9YIABAAIAUgBIAAABIC3dTIACAQQAGAygOAuIgEAQInDftg");
	this.shape_14.setTransform(104.9,202);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AjufjIGl/1IAFgSQAKgmgDgrIgBgTIii9ZIAAAAIAUgBIABABIC3dUIACAQQAGAygPAvIgEAQInEfuIAAABg");
	this.shape_15.setTransform(118.5,202.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AjvfmIGm/4IAFgSQAKgmgBgrIgCgSIij9dIABgBIAUAAIAAAAIC4dYIACAQQAFAygPAuIgEARInEfyIgBAAg");
	this.shape_16.setTransform(145.7,202.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AjwfoIGn/6IAEgSQALgmgBgrIgBgTIik9eIABgBIAUAAIAAAAIC5dZIABAQQAFAygPAvIgEARInFfzIgBABg");
	this.shape_17.setTransform(159.3,202.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AjwfqIGn/8IAEgSQAMgmgCgrIgBgTIij9fIAAgCIAVAAIC4dcIACAPQAFAygQAvIgEAQInGf3IAAAAg");
	this.shape_18.setTransform(172.9,203);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AjwfsIGn/+IAEgSQAMgmgBgrIgBgTIik9hIAAgCIAVAAIC5ddIACAQQAEAygQAuIgEARInGf4IAAABg");
	this.shape_19.setTransform(186.5,203.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_6}]},409).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 17
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],20.7,-16.8,0,20.7,-16.8,176.1).s().p("AyGfTMAAAg+lIfzAAIBjAAIC3exIkaT7IioL5g");
	this.shape_20.setTransform(106.2,200.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],20.7,-16.8,0,20.7,-16.8,176.1).s().p("AyGfTMAAAg+lMAhWAAAIC3exInCf0g");
	this.shape_21.setTransform(106.2,200.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],32,-33.5,0,32,-33.5,176.1).s().p("EgQVgh5Id0AAIC3exInCf0I5pFOg");
	this.shape_22.setTransform(94.9,217.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],43.3,-50.1,0,43.3,-50.1,176.1).s().p("EgOjgkfIaRAAIC2ewInCf1I2FKag");
	this.shape_23.setTransform(83.5,234);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],54.7,-66.8,0,54.7,-66.8,176.1).s().p("EgMygnGIWuAAIC3exInCf0IyjPog");
	this.shape_24.setTransform(72.2,250.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],66,-83.5,0,66,-83.5,176.1).s().p("EgLBgptITMAAIC3exInCf0IvBU2g");
	this.shape_25.setTransform(60.9,267.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],77.3,-100.1,0,77.3,-100.1,176.1).s().p("EgJPgsTIPpAAIC2ewInCf1IrdaCg");
	this.shape_26.setTransform(49.5,284);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],88.7,-116.8,0,88.7,-116.8,176.1).s().p("EgHegu6IMHAAIC2exInCf0In7fQg");
	this.shape_27.setTransform(38.2,300.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],89,-80.1,0,89,-80.1,153.5).s().p("EgG5gonILXAAICcaLIndeJImWY6g");
	this.shape_28.setTransform(36.7,260.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],89.4,-43.4,0,89.4,-43.4,130.9).s().p("EgGUgiTIKoAAICBVkIn4cdIkxSmg");
	this.shape_29.setTransform(35.1,220);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],89.9,-6.8,0,89.9,-6.8,108.5).s().p("Alw8AIJ6AAIBnQ+IoVayIjLMRg");
	this.shape_30.setTransform(33.6,179.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],90.3,29.9,0,90.3,29.9,86.2).s().p("AlL1sIJLAAIBMMYIoxZFIhlF8g");
	this.shape_31.setTransform(32,139.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],90.7,65.4,0,90.7,65.4,64.3).s().p("AklPNIgB+yIIcAAIAxHyIpMXZg");
	this.shape_32.setTransform(30.5,100.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],81.9,-106.8,0,81.9,-106.8,176.1).s().p("EgIigtWIOOAAIC3exInCf0IqDcIg");
	this.shape_33.setTransform(45,290.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],75.1,-96.8,0,75.1,-96.8,176.1).s().p("EgJmgryIQWAAIC3exInCf0IsLZAg");
	this.shape_34.setTransform(51.8,280.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],68.3,-86.8,0,68.3,-86.8,176.1).s().p("EgKqgqOISeAAIC3exInCf0IuTV4g");
	this.shape_35.setTransform(58.6,270.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],61.5,-76.8,0,61.5,-76.8,176.1).s().p("EgLugoqIUmAAIC3exInCf0IwbSwg");
	this.shape_36.setTransform(65.4,260.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],47.9,-56.8,0,47.9,-56.8,176.1).s().p("EgN2gliIY3AAIC2exInCf0I0rMgg");
	this.shape_37.setTransform(79,240.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],41.1,-46.8,0,41.1,-46.8,176.1).s().p("EgO6gj+Ia/AAIC2exInCf0I2zJYg");
	this.shape_38.setTransform(85.8,230.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],34.3,-36.8,0,34.3,-36.8,176.1).s().p("EgP+giaIdHAAIC2exInCf0I47GQg");
	this.shape_39.setTransform(92.6,220.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFC200","#FFC200","#FF6612","#FF6612"],[0,0.004,0.976,1],27.5,-26.8,0,27.5,-26.8,176.1).s().p("EgRCgg2IfPAAIC2exInCf0I7DDIg");
	this.shape_40.setTransform(99.4,210.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},19).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_27}]},409).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// txt-3
	this.instance_1 = new lib.txt3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129,70,0.665,0.665,0,0,0,89.7,61.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).to({regY:61.4,y:83.4,alpha:1},13).wait(92).to({x:155.7,alpha:0},5).to({_off:true},1).wait(5));

	// med-3
	this.instance_2 = new lib.med4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.2,338.9,1.119,1.119,0,0,0,67.2,35.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(233).to({_off:false},0).to({x:95.3,alpha:1},10).wait(62).to({x:117.7,alpha:0},9).to({_off:true},1).wait(135));

	// med-2
	this.instance_3 = new lib.med3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(163.7,238.6,1.119,1.119,0,0,0,78.6,35.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(224).to({_off:false},0).to({x:107.8,alpha:1},10).wait(66).to({x:130.1,alpha:0},9).to({_off:true},1).wait(140));

	// med-1
	this.instance_4 = new lib.med2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(173.2,339.1,1.119,1.119,0,0,0,86.3,35.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({regX:86.4,x:117.3,alpha:1},9).wait(57).to({regX:86.3,x:162,alpha:0},9).to({_off:true},1).wait(225));

	// txt-2
	this.instance_5 = new lib.med1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.4,237.9,1.119,1.119,0,0,0,77.6,35.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({regX:77.7,x:107.5,alpha:1},9).wait(61).to({regX:77.6,x:152.2,alpha:0},9).to({_off:true},1).wait(230));

	// txt-1
	this.instance_6 = new lib.txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.6,59.9,0.665,0.665,0,0,0,82.7,67.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({regX:82.5,x:129.5,alpha:1},14,cjs.Ease.get(1)).wait(80).to({regX:82.7,x:143,alpha:0},15).to({_off:true},1).wait(310));

	// txt-2
	this.instance_7 = new lib.txt2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(98,144,0.665,0.665,0,0,0,50.3,20);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({x:84.7,alpha:1},14).wait(259).to({x:197.9,alpha:0},9).to({_off:true},1).wait(130));

	// Слой 21
	this.instance_8 = new lib.gun22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(331.8,50.7,0.423,0.423,0,0,0,0.1,-49.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({regX:0.4,x:154.8},15).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},56).wait(24).to({_off:false},0).to({_off:true},61).wait(24).to({_off:false},0).to({_off:true},47).wait(24).to({_off:false},0).to({regX:0.1,x:331.8},7).to({_off:true},1).wait(122));

	// Layer 1
	this.instance_9 = new lib.gun();
	this.instance_9.parent = this;
	this.instance_9.setTransform(154.8,50.7,0.423,0.423,0,0,0,0.4,-49.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({_off:true},24).wait(56).to({_off:false},0).to({_off:true},24).wait(61).to({_off:false},0).to({_off:true},24).wait(47).to({_off:false},0).to({_off:true},25).wait(129));

	// Слой 20
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(39,41,36,0)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_41.setTransform(121.3,280.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(39,41,36,0.043)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_42.setTransform(121.3,280.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(39,41,36,0.082)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_43.setTransform(121.3,280.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(39,41,36,0.125)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_44.setTransform(121.3,280.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(39,41,36,0.169)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_45.setTransform(121.3,280.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(39,41,36,0.212)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_46.setTransform(121.3,280.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(39,41,36,0.251)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_47.setTransform(121.3,280.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(39,41,36,0.294)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_48.setTransform(121.3,280.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(39,41,36,0.337)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_49.setTransform(121.3,280.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(39,41,36,0.38)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_50.setTransform(121.3,280.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(39,41,36,0.42)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_51.setTransform(121.3,280.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(39,41,36,0.463)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_52.setTransform(121.3,280.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(39,41,36,0.506)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_53.setTransform(121.3,280.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(39,41,36,0.549)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_54.setTransform(121.3,280.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(39,41,36,0.588)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_55.setTransform(121.3,280.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(39,41,36,0.631)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_56.setTransform(121.3,280.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(39,41,36,0.675)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_57.setTransform(121.3,280.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(39,41,36,0.718)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_58.setTransform(121.3,280.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(39,41,36,0.757)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_59.setTransform(121.3,280.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(39,41,36,0.8)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_60.setTransform(121.3,280.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(39,41,36,0.8)").s().p("AyyOaIAA8zMAllAAAIAAczg");
	this.shape_61.setTransform(121.3,280.2,1,1.114);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(39,41,36,0.722)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_62.setTransform(121.3,280.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(39,41,36,0.639)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_63.setTransform(121.3,280.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(39,41,36,0.561)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_64.setTransform(121.3,280.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(39,41,36,0.478)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_65.setTransform(121.3,280.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(39,41,36,0.4)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_66.setTransform(121.3,280.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(39,41,36,0.322)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_67.setTransform(121.3,280.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(39,41,36,0.239)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_68.setTransform(121.3,280.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(39,41,36,0.161)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_69.setTransform(121.3,280.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(39,41,36,0.078)").s().p("AyyQDMAAAggFMAllAAAMAAAAgFg");
	this.shape_70.setTransform(121.3,280.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41}]},328).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},92).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_41}]},1).wait(1));

	// Слой 18
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(38,42,36,0)").s().p("AvlGVIAAspIfLAAIAAMpg");
	this.shape_71.setTransform(121.8,135.3,1.21,1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(38,42,36,0.125)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_72.setTransform(121.8,135.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(38,42,36,0.239)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_73.setTransform(121.8,135.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(38,42,36,0.345)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_74.setTransform(121.8,135.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(38,42,36,0.439)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_75.setTransform(121.8,135.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(38,42,36,0.525)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_76.setTransform(121.8,135.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(38,42,36,0.604)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_77.setTransform(121.8,135.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(38,42,36,0.675)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_78.setTransform(121.8,135.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(38,42,36,0.733)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_79.setTransform(121.8,135.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(38,42,36,0.784)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_80.setTransform(121.8,135.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(38,42,36,0.824)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_81.setTransform(121.8,135.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(38,42,36,0.855)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_82.setTransform(121.8,135.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(38,42,36,0.878)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_83.setTransform(121.8,135.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(38,42,36,0.894)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_84.setTransform(121.8,135.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(38,42,36,0.898)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_85.setTransform(121.8,135.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(38,42,36,0.898)").s().p("AytGVIAAspMAlbAAAIAAMpg");
	this.shape_86.setTransform(120.8,135.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(38,42,36,0.835)").s().p("AyuGVIAAspMAldAAAIAAMpg");
	this.shape_87.setTransform(120.9,135.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(38,42,36,0.769)").s().p("AyvGVIAAspMAlfAAAIAAMpg");
	this.shape_88.setTransform(121,135.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(38,42,36,0.706)").s().p("AywGVIAAspMAlhAAAIAAMpg");
	this.shape_89.setTransform(121.1,135.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(38,42,36,0.643)").s().p("AywGVIAAspMAlhAAAIAAMpg");
	this.shape_90.setTransform(121.1,135.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(38,42,36,0.576)").s().p("AyxGVIAAspMAljAAAIAAMpg");
	this.shape_91.setTransform(121.2,135.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(38,42,36,0.514)").s().p("AyyGVIAAspMAlkAAAIAAMpg");
	this.shape_92.setTransform(121.3,135.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(38,42,36,0.451)").s().p("AyyGVIAAspMAllAAAIAAMpg");
	this.shape_93.setTransform(121.3,135.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(38,42,36,0.384)").s().p("AyzGVIAAspMAlnAAAIAAMpg");
	this.shape_94.setTransform(121.4,135.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(38,42,36,0.322)").s().p("Ay0GVIAAspMAlpAAAIAAMpg");
	this.shape_95.setTransform(121.5,135.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(38,42,36,0.255)").s().p("Ay1GVIAAspMAlqAAAIAAMpg");
	this.shape_96.setTransform(121.6,135.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(38,42,36,0.192)").s().p("Ay1GVIAAspMAlrAAAIAAMpg");
	this.shape_97.setTransform(121.6,135.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(38,42,36,0.129)").s().p("Ay2GVIAAspMAltAAAIAAMpg");
	this.shape_98.setTransform(121.7,135.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(38,42,36,0.063)").s().p("Ay3GVIAAspMAluAAAIAAMpg");
	this.shape_99.setTransform(121.8,135.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(38,42,36,0)").s().p("Ay3GVIAAspMAlvAAAIAAMpg");
	this.shape_100.setTransform(121.8,135.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71}]},30).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},270).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[]},1).wait(121));

	// bg-image.jpg
	this.instance_10 = new lib.bgimage();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-46,-4,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,196,291.9,410.3);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
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