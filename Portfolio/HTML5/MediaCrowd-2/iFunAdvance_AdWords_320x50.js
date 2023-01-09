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



(lib.bgpictures = function() {
	this.initialize(img.bgpictures);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,484);// helper functions:

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
	this.shape.graphics.f("#93CE1A").s().p("AATA8IgThSIgTBSIgcAAIgeh3IAbAAIASBNIAShNIAcAAIASBNIAThNIAbAAIgeB3g");
	this.shape.setTransform(218.5,-156.3,1.093,1.093);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93CE1A").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQARAAAbQAAAcgQARQgRARgaAAQgZAAgRgRgAgVgaQgHAKAAAQQAAARAHAKQAJALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgMAAgJALg");
	this.shape_1.setTransform(202.7,-156.3,1.093,1.093);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAdAAIAABeIAyAAIAAAZg");
	this.shape_2.setTransform(190.9,-156.3,1.093,1.093);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CE1A").s().p("AgoA8IAAh3IBRAAIgEAWIgxAAIAAAcIAqAAIAAAWIgqAAIAAAvg");
	this.shape_3.setTransform(180.1,-156.3,1.093,1.093);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93CE1A").s().p("AAYA8IAAgzIgvAAIAAAzIgcAAIAAh3IAcAAIAAAvIAvAAIAAgvIAcAAIAAB3g");
	this.shape_4.setTransform(162,-156.3,1.093,1.093);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAFAMAKAGQAJAGAMAAQAKAAAHgEQAGgDAAgGQAAgKgZgGIgFgBQgXgFgJgHQgJgIAAgOQAAgSAMgJQANgKAVAAQASAAAMAGQAMAGAKANIgSAPQgGgJgJgFQgJgEgKAAQgIAAgGADQgFADAAAFQAAAHAYAHIALACQAUAFAJAIQAJAJAAAOQAAARgOALQgPAKgYAAQgVAAgNgHg");
	this.shape_5.setTransform(148,-156.3,1.093,1.093);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93CE1A").s().p("AAfA8IgHgXIgwAAIgHAXIgcAAIAph3IAiAAIAsB3gAgQANIAfAAIgQgxg");
	this.shape_6.setTransform(135,-156.3,1.093,1.093);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AgnAtQgQgRAAgcQAAgcAQgRQAQgQAaAAQASAAAOAIQAOAJAFAPIgWANQgGgLgGgFQgIgFgJAAQgMAAgJAKQgHAKAAARQAAAQAIAKQAIAKANAAQAIAAAIgEQAJgGAFgIIAWAOQgKAQgNAHQgMAHgSAAQgZAAgRgRg");
	this.shape_7.setTransform(121.8,-156.3,1.093,1.093);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA3QgNgIgHgPIATgQQAFAMAKAGQAJAGAMAAQAJAAAIgEQAGgDAAgGQAAgKgZgGIgEgBQgYgFgJgHQgJgIAAgOQAAgSAMgJQAOgKAUAAQASAAAMAGQAMAGAJANIgRAPQgFgJgKgFQgIgEgLAAQgIAAgFADQgGADAAAFQAAAHAZAHIAKACQAVAFAIAIQAJAIgBAPQABASgOAKQgOAKgZAAQgUAAgOgHg");
	this.shape_8.setTransform(103.7,-156.3,1.093,1.093);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKATIAGgLIABgJIAAgBIgIAAIAAgXIAXAAIAAAXQAAAGgDAIQgEAHgGAGg");
	this.shape_9.setTransform(94.9,-160,1.093,1.093);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOA8IAAguIgqhJIAeAAIAaAxIAbgxIAeAAIgrBJIAAAug");
	this.shape_10.setTransform(86.6,-156.3,1.093,1.093);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA8IgIgXIgwAAIgHAXIgdAAIAph3IAjAAIAtB3gAgRANIAgAAIgQgxg");
	this.shape_11.setTransform(74.1,-156.3,1.093,1.093);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8IAAh3IA0AAQAYAAAPAQQAOAQAAAbQAAASgFAMQgFANgKAIQgGAEgHADQgGACgOAAgAgYAjIAVAAQANAAAGgJQAIgJAAgRQAAgOgIgKQgFgJgLAAIgYAAg");
	this.shape_12.setTransform(60.9,-156.3,1.093,1.093);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQASAAAaQAAAcgQARQgQARgbAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAJALALAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgLAAgJALg");
	this.shape_13.setTransform(46.2,-156.3,1.093,1.093);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_14.setTransform(32.5,-156.3,1.093,1.093);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAtQgQgRAAgcQAAgaAQgSQARgRAZAAQAaAAARARQARASAAAaQAAAcgRARQgRARgaAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAIALAMAAQAOAAAIgLQAIgLAAgQQAAgPgIgLQgIgLgOAAQgMAAgIALg");
	this.shape_15.setTransform(14.1,-156.3,1.093,1.093);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_16.setTransform(0.3,-156.3,1.093,1.093);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA8IgvhLIAABLIgaAAIAAh3IAcAAIAtBHIAAhHIAaAAIAAB3g");
	this.shape_17.setTransform(-13.4,-156.3,1.093,1.093);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAcAAIAAB3g");
	this.shape_18.setTransform(-23.9,-156.3,1.093,1.093);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgHAAgOQAAgRANgKQANgLAUABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_19.setTransform(220.4,-178.8,1.093,1.093);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93CE1A").s().p("AgnA8IAAh3IBNAAIgEAXIgtAAIAAAYIApAAIAAAUIgpAAIAAAdIAuAAIAFAXg");
	this.shape_20.setTransform(209.2,-178.8,1.093,1.093);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAcAAIAABfIAzAAIAAAYg");
	this.shape_21.setTransform(198.6,-178.8,1.093,1.093);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#93CE1A").s().p("AAgA8IgIgXIgvAAIgIAXIgcAAIAph3IAiAAIAtB3gAgQANIAgAAIgRgxg");
	this.shape_22.setTransform(185.9,-178.8,1.093,1.093);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAJAHAMgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgGAAgPQAAgRANgKQANgLAUABQASAAAMAFQALAGALAOIgSAPQgGgJgIgFQgJgEgLgBQgIAAgFAEQgGADAAAEQAAAJAZAFIAKADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_23.setTransform(172.6,-178.8,1.093,1.093);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgFAAQgXgHgJgHQgJgHAAgOQAAgRANgKQAMgLAVABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQATAFAKAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_24.setTransform(154.8,-178.8,1.093,1.093);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93CE1A").s().p("AgKATIAGgLQABgEAAgFIAAAAIgIAAIAAgXIAXAAIAAAVQAAAIgEAHQgDAHgGAGg");
	this.shape_25.setTransform(146,-182.5,1.093,1.093);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#93CE1A").s().p("AATA8IgThRIgTBRIgcAAIgeh3IAbAAIASBNIAShNIAcAAIATBNIAShNIAbAAIgfB3g");
	this.shape_26.setTransform(135.1,-178.8,1.093,1.093);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARATAAAZQAAAbgRASQgRARgaABQgZgBgRgRgAgUgaQgJALAAAPQAAAQAJALQAIALAMAAQANAAAIgLQAJgKAAgRQAAgQgJgKQgIgLgNABQgMgBgIALg");
	this.shape_27.setTransform(119.3,-178.8,1.093,1.093);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#93CE1A").s().p("AAWA8IgbgxIgTAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgHAIQgHAHgMACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgMAAIgVAAg");
	this.shape_28.setTransform(105.8,-178.8,1.093,1.093);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#93CE1A").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgGAIQgIAHgNACIAgA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgGgCQgFgDgKAAIgWAAg");
	this.shape_29.setTransform(92.1,-178.8,1.093,1.093);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93CE1A").s().p("AgpAtQgRgSAAgbQAAgaARgSQAQgRAZAAQAZAAASARQAQASAAAaQAAAbgQASQgQARgbABQgZgBgQgRgAgUgaQgJAKAAAQQAAARAJAKQAIALAMAAQANAAAJgLQAIgLAAgQQAAgPgIgLQgJgLgNABQgMgBgIALg");
	this.shape_30.setTransform(77.4,-178.8,1.093,1.093);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#93CE1A").s().p("AAkA8IAAhjIgZBjIgVAAIgYhlIAABlIgZAAIAAh3IAqAAIASBLIARhLIAqAAIAAB3g");
	this.shape_31.setTransform(61.9,-178.8,1.093,1.093);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARASAAAaQgBAbgQASQgSARgZABQgZgBgRgRgAgUgaQgIAKAAAQQAAARAIAKQAIALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOABQgLgBgJALg");
	this.shape_32.setTransform(46.3,-178.8,1.093,1.093);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93CE1A").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_33.setTransform(32.6,-178.8,1.093,1.093);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYA8IguhKIAABKIgbAAIAAh3IAcAAIAtBIIAAhIIAaAAIAAB3g");
	this.shape_34.setTransform(14.2,-178.8,1.093,1.093);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQANAIAAASQgBAMgGAJQgHAHgNACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgLAAIgWAAg");
	this.shape_35.setTransform(0.8,-178.8,1.093,1.093);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglAyQgNgKAAgVIAAhPIAdAAIAABJQgBALAGAGQAFAFALAAQAKAAAHgFQAFgFAAgMIAAhJIAdAAIAABPQAAAVgOAKQgNALgYAAQgYAAgNgLg");
	this.shape_36.setTransform(-13.6,-178.6,1.093,1.093);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_37.setTransform(-27,-178.8,1.093,1.093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-33,-185.6,260.1,36.2), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDAFIAAgJIAHAAIAAAJg");
	this.shape.setTransform(189.6,-140.2,1.508,1.508);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAFgGAHAAQADAAADACQAEACACAEIAAgZIAHAAIAAA6IgHAAIAAgHQgCAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAEAAIAEgBIADgCQACgCABgDQABgCAAgGQAAgHgBgCIgDgEIgDgCIgEgBQgEAAgDAFg");
	this.shape_1.setTransform(184.3,-143.8,1.508,1.508);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_2.setTransform(177.8,-142.5,1.508,1.508);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_3.setTransform(171.7,-142.5,1.508,1.508);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDAdIAAgoIAGAAIAAAogAgDgTIAAgJIAGAAIAAAJg");
	this.shape_4.setTransform(167.1,-143.8,1.508,1.508);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_5.setTransform(162.2,-142.5,1.508,1.508);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgLAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAFAAAFACQAFAEACAFIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgDAFAAAGQAAAHADAFQADAEAEAAQADAAAEgCQACgCACgEIAGACQgDAGgEADQgDACgHAAQgIAAgEgFg");
	this.shape_6.setTransform(155.8,-142.5,1.508,1.508);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_7.setTransform(149.4,-142.5,1.508,1.508);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQADgHABgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_8.setTransform(144.5,-142.6,1.508,1.508);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgFAAQgEAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQACgFAEgCQACgCAFAAQAGAAADAEQAEADAAAIIAAAag");
	this.shape_9.setTransform(135.2,-142.6,1.508,1.508);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgCACgDIAFADQgDAFgEACQgDACgGAAQgJAAgEgFgAgHgMQgDADAAAHIAVAAQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_10.setTransform(128.3,-142.5,1.508,1.508);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_11.setTransform(121.9,-142.5,1.508,1.508);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgEAcQgEgBgDgFIAAAHIgGAAIAAg6IAGAAIAAAZQAEgFADgBQACgCADAAQAIAAAFAGQAEAGAAAJQAAAJgEAGQgFAGgIAAQgDAAgCgCgAgDgGIgDACIgEAEIgBAJIABAIIAEAFIADACIADABQAFAAADgEQADgFAAgHQAAgIgDgDQgDgFgFAAg");
	this.shape_12.setTransform(115.5,-143.8,1.508,1.508);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_13.setTransform(105.3,-142.5,1.508,1.508);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_14.setTransform(99.2,-142.5,1.508,1.508);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AAPAVQgEAAgBgBQgCgCAAgEQgDAEgEACQgCABgEAAQgFAAgEgDQgEgDAAgGQAAgFADgDQADgDAGgBIAEgBQAHgBACgCIAAgBQAAgEgCgCQgCgBgDAAQgEAAgDABQgCACgCADIgFgCQADgFAEgCQADgCAGAAQAHAAAEADQADAEAAAHIAAAQIABAFIACABIACAAIAAAFIgCAAgAAAAAIgGAAIgEADIgBAFQAAAEACACQADACADAAQAEAAADgDQADgDAAgFIAAgIQgDACgEABg");
	this.shape_15.setTransform(93.1,-142.5,1.508,1.508);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AAKAdIAAgZQAAgFgCgDQgCgCgFAAQgEAAgDADQgDADAAAGIAAAXIgHAAIAAg5IAHAAIAAAaQACgFAEgCQACgCAFAAQAGAAADADQAEAEAAAHIAAAag");
	this.shape_16.setTransform(86.2,-143.9,1.508,1.508);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgKASQgDgDgCgGIAFgCQACAEADADQACACAEAAQAEAAACgBQADgCAAgDQAAgFgKgDIgCgBQgGgBgDgCQgCgDAAgEQAAgFADgDQAFgDAFAAQAHAAADACQAEADACAFIgFABQgDgEgCgBQgCgCgEAAQgDAAgBACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAEAJADIABAAQAHACAEACQACAEAAAEQAAAFgDAEQgFADgIAAQgFAAgFgDg");
	this.shape_17.setTransform(76.4,-142.5,1.508,1.508);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAFgDIAAARIAJAAIAAAFIgJAAIAAAYQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_18.setTransform(71.3,-143.8,1.508,1.508);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEADgDQADgCAEAAQAHAAADAEQADAEAAAHIAAAag");
	this.shape_19.setTransform(65.8,-142.6,1.508,1.508);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_20.setTransform(59.1,-142.5,1.508,1.508);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AAWAVIAAgYQAAgFgCgEQgCgDgEAAQgEAAgDAEQgEAEAAAGIAAAWIgGAAIAAgYQAAgGgBgDQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEACgDQADgCAFAAQAGAAACADQABABACAGQADgFADgCQACgDAGAAQAGAAADAEQADAEAAAHIAAAag");
	this.shape_21.setTransform(50.4,-142.6,1.508,1.508);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgNARQgDgDAAgIIAAgaIAHAAIAAAYQAAAFACAEQACADAFAAQAEAAADgEQADgDAAgHIAAgWIAHAAIAAAoIgHAAIAAgIQgDAEgDADQgDACgEAAQgGAAgEgEg");
	this.shape_22.setTransform(41.4,-142.4,1.508,1.508);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgMAQQgFgGAAgKQAAgIAFgGQAGgGAHAAQAGAAAEACQADADAEAGIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgEAEAAAHQAAAIAEAEQADAEAEAAQAEAAACgCQADgCACgEIAGACQgDAGgEADQgDACgHAAQgHAAgGgFg");
	this.shape_23.setTransform(34.7,-142.5,1.508,1.508);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgMAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAJAAAFAGQAFAFAAAJQAAAKgFAGQgFAFgJAAQgIAAgEgFgAgIgLQgDAGAAAFQAAAHADAFQADAEAFAAQAFAAADgEQAEgEAAgIQAAgHgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_24.setTransform(28.1,-142.5,1.508,1.508);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAEgGAIAAQAEAAACACQADACAEAEIAAgZIAGAAIAAA6IgGAAIAAgHQgDAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAFAAIADgBIADgCIAEgFIABgIIgBgJIgEgEIgDgCIgDgBQgFAAgDAFg");
	this.shape_25.setTransform(20.9,-143.8,1.508,1.508);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_26.setTransform(12.9,-143.9,1.508,1.508);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_27.setTransform(9.5,-143.9,1.508,1.508);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AAPAVIgFgBQgCgDAAgDQgEAFgDABQgCABgEAAQgFAAgEgDQgEgEAAgFQAAgFADgDQAEgDAFgBIAEgBQAHgBADgCIAAgBQAAgDgDgDQgBgBgEAAQgDAAgDABQgDACgCADIgFgCQACgFAFgCQADgCAGAAQAIAAADADQADADAAAIIAAAQIABAFIADABIABAAIAAAFIgCAAgAAAAAIgFAAIgFADIgBAFQAAAEACACQACACAEAAQAEAAADgDQAEgDAAgFIAAgIIgIADg");
	this.shape_28.setTransform(4.6,-142.5,1.508,1.508);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQACgHACgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_29.setTransform(-3.5,-142.6,1.508,1.508);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_30.setTransform(-9.4,-142.5,1.508,1.508);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAGgDIAAARIAHAAIAAAFIgHAAIAAAYQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_31.setTransform(-14.8,-143.8,1.508,1.508);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgDAeIAAgiIgHAAIAAgGIAHAAIAAgJQAAgFADgCQACgDAEAAIAFABIAAAGIgCgBIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgBAFIAAAGIAIAAIAAAGIgIAAIAAAig");
	this.shape_32.setTransform(-18.6,-144,1.508,1.508);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AAUAdIgGgOIgbAAIgGAOIgHAAIAWg5IAJAAIAWA5gAgLAJIAXAAIgMgeg");
	this.shape_33.setTransform(-24.7,-143.9,1.508,1.508);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AAAADIgFALIgFgEIAJgJIgNgBIACgGIAMAFIgDgMIAGAAIgCAMIAMgFIACAGIgNABIAJAJIgFAEg");
	this.shape_34.setTransform(-31.9,-146.2,1.508,1.508);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#93CE1A").s().p("AgrBBIAAiBIAfAAIAABnIA4AAIAAAag");
	this.shape_35.setTransform(186.2,-179.3,1.005,1.005);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93CE1A").s().p("AAiBBIgJgZIgzAAIgIAZIgfAAIAtiBIAlAAIAxCBgAgSAOIAiAAIgRg1g");
	this.shape_36.setTransform(173.5,-179.3,1.005,1.005);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_37.setTransform(160.2,-179.3,1.005,1.005);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_38.setTransform(150.3,-179.3,1.005,1.005);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQAMAAAFgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_39.setTransform(141,-179.3,1.005,1.005);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAtiBIAmAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_40.setTransform(127.2,-179.3,1.005,1.005);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AgqAxQgSgSAAgfQAAgeARgTQASgSAdAAQAUAAAOAJQAQAKAGARIgZANQgGgLgHgGQgJgFgJAAQgPAAgIALQgIALgBASQAAASAJALQAKALAOAAQAIAAAJgFQAIgFAHgLIAYAQQgLASgOAHQgNAIgTAAQgdAAgRgTg");
	this.shape_41.setTransform(114,-179.3,1.005,1.005);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgHgFQgIgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAHAAAFgCQAFgBAGgEIAAgQIgcAAIAAgXIA6AAIAAAxQgLANgNAGQgNAGgQAAQgcAAgRgSg");
	this.shape_42.setTransform(95.7,-179.3,1.005,1.005);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#93CE1A").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_43.setTransform(81.9,-179.3,1.005,1.005);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_44.setTransform(71.4,-179.3,1.005,1.005);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#93CE1A").s().p("AAcBBIgihAIgZAbIAAAlIgfAAIAAiBIAfAAIAAA3IAxg3IAkAAIgpAsIAyBVg");
	this.shape_45.setTransform(62,-179.3,1.005,1.005);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgVAAIAAA2IgeAAIAAiBIA5AAQAaAAAOAJQANAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgbgMIAYAAQANAAAFgDQAFgDABgIQAAgIgGgDQgFgDgNAAIgYAAg");
	this.shape_46.setTransform(47.7,-179.3,1.005,1.005);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_47.setTransform(32.9,-179.3,1.005,1.005);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#93CE1A").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAVBTIAUhTIAdAAIghCBg");
	this.shape_48.setTransform(17.1,-179.3,1.005,1.005);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgtAAIAAgbIB5AAIAAAbIgtAAIAABmg");
	this.shape_49.setTransform(-2.8,-179.3,1.005,1.005);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBVAAIgFAYIgxAAIAAAaIAtAAIAAAXIgtAAIAAAfIAzAAIAFAZg");
	this.shape_50.setTransform(-14.1,-179.3,1.005,1.005);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgIgFQgHgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAGAAAGgCQAFgBAFgEIAAgQIgbAAIAAgXIA6AAIAAAxQgKAMgPAHQgNAGgQAAQgbAAgRgSg");
	this.shape_51.setTransform(-27,-179.3,1.005,1.005);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAAAEIgGAQIgKgHIAOgMIgSgBIAEgKIAPAJIgEgSIALAAIgEASIAPgJIAEAKIgRABIANAMIgKAHg");
	this.shape_52.setTransform(188.2,-164.6,1.005,1.005);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#93CE1A").s().p("AgkA7QgPgHgHgRIAVgRQAGAMAKAHQAKAGANAAQAMAAAHgEQAGgEAAgGQAAgKgbgHIgFgBQgagGgKgIQgJgIAAgQQAAgSANgMQAPgKAWAAQATAAAOAGQAMAGAMAPIgUAQQgGgJgKgGQgLgEgKAAQgJgBgGAEQgGADAAAFQAAAJAbAHIALACQAXAHAJAIQAKAJAAAQQAAAUgQALQgPALgaAAQgXAAgPgJg");
	this.shape_53.setTransform(178.8,-159.5,1.005,1.005);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgUAAIAAA2IgfAAIAAiBIA5AAQAbAAAMAJQAOAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgagMIAYAAQAMAAAFgDQAGgDAAgIQAAgIgGgDQgFgDgNAAIgXAAg");
	this.shape_54.setTransform(166,-159.5,1.005,1.005);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#93CE1A").s().p("AgoA3QgOgMAAgWIAAhXIAeAAIAABRQABAMAFAGQAHAFALAAQAMAAAGgFQAHgGAAgMIAAhRIAeAAIAABXQAAAWgOAMQgOAMgbAAQgaAAgOgMg");
	this.shape_55.setTransform(151.6,-159.4,1.005,1.005);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_56.setTransform(137.3,-159.5,1.005,1.005);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#93CE1A").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_57.setTransform(122.7,-159.5,1.005,1.005);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#93CE1A").s().p("AglBAIgBgCIAAgDQAAgOAGgLQAFgLANgLIADgCQAWgTAAgPQAAgJgEgDQgDgFgEAAQgFAAgDADQgDACAAAFIABAHIgXAKIgCgGIAAgGQAAgQAKgLQAKgKAPAAQAQAAALALQAKAKAAARQAAAKgFAJQgEAGgRAOQgMAJgGAHQgGAFgBAFIA1AAIAAAYg");
	this.shape_58.setTransform(106,-159.4,1.005,1.005);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AgOA/QACgaAJgcQAIgaAMgWIg0AAIAAgXIBHAAIAAAUQgMAXgGAZQgGAZgBAgg");
	this.shape_59.setTransform(96.4,-159.3,1.005,1.005);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZBBIgyhRIAABRIgdAAIAAiBIAfAAIAwBOIAAhOIAeAAIAACBg");
	this.shape_60.setTransform(80.3,-159.5,1.005,1.005);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_61.setTransform(69.7,-159.5,1.005,1.005);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_62.setTransform(59.1,-159.5,1.005,1.005);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_63.setTransform(45.2,-159.5,1.005,1.005);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_64.setTransform(35.3,-159.5,1.005,1.005);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAfAAIAUBTIAThTIAeAAIghCBg");
	this.shape_65.setTransform(23.3,-159.5,1.005,1.005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-34.1,-186.1,224.8,46.8), null);


(lib.pc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgpictures();
	this.instance.parent = this;
	this.instance.setTransform(-8,64,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(-8,64,134.6,186.2), null);


(lib.logobig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg5IgwgQIAACUQAbgGAVgVg");
	this.shape.setTransform(-121.2,34.8,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93CE1A").s().p("AgXhKIAvAQIAABqQgUAVgbAFg");
	this.shape_1.setTransform(-121.2,34.8,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg9IgwgBIAABzQAXAMAZgDg");
	this.shape_2.setTransform(-126.6,36.1,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CE1A").s().p("AgXA1IAAhzIAvABIAAB7IgIABQgUAAgTgKg");
	this.shape_3.setTransform(-126.6,36.1,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAYglIgwAAIAAAYQAPAaAhAVg");
	this.shape_4.setTransform(-132,37,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AgYgLIAAgYIAwAAIAABHQgggVgQgag");
	this.shape_5.setTransform(-132,36.8,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AgdiUQACAUgIAJQBEA5gCBOQgCBQhIAtQAZgIAZgeQAcggALgoQAdhphohKg");
	this.shape_6.setTransform(-115.3,32.4,0.8,0.8,0,0,0,0,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AAbAUQAChOhEg5QAIgJgCgUQBoBKgdBpQgLAogcAgQgZAegZAIQBIgtAChQg");
	this.shape_7.setTransform(-115,32.2,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1E1819").ss(0.2,0,0,2.6).p("ACCgBQAFBAggAlQgSAUgaAIQg7APgvgdQgsgagUg0QgUgyAPgzQAQg3A2ggQhCAigXA9QgXA8AcA9QAeA9A6AWQAyAUA2gPQA0gQAVgoQAYgtgdg0g");
	this.shape_8.setTransform(-126.7,31.6,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1819").s().p("AgqCRQg6gXgeg8Qgcg9AXg8QAXg+BCgiQg2AggQA4QgPAyAUAzQAUAzAsAbQAvAcA7gOQAagIASgVQAggkgFhBQAdA1gYAsQgVApg0APQgYAHgXAAQgcAAgdgLg");
	this.shape_9.setTransform(-126.7,31.8,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3E3D3F").ss(0.2,0,0,2.6).p("AAngmQhOghgRgNQgdgWgGgyQgZBrBrAfQBNANAHAvQAGArg1BKQA/goAFhCQAFhCg+gZg");
	this.shape_10.setTransform(-121.7,29.8,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E3D3F").s().p("ABLApQgHgvhNgOQhrgeAZhrQAGAyAdAWQARAMBOAiQA+AZgFBBQgFBCg/ApQA1hKgGgrg");
	this.shape_11.setTransform(-121.7,29.9,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF141E").ss(0.5,0,0,2.6).p("AAAgZQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHQgHgIAAgLQAAgKAHgHQAIgIAKAAg");
	this.shape_12.setTransform(-121,20.7,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF141E").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_13.setTransform(-121,20.7,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E3D3F").s().p("AgqCMQg3gVgcg6Qgbg7AVg7QAVg+A+ggQgzAfgPA2QgOAxATAxQAUAyArAaQAuAcA3gOQAagIAUgVQAiglgFg9QAYA0gZArQgWAogyAPQgWAHgWAAQgbAAgcgMg");
	this.shape_14.setTransform(-126.4,31.7,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgNIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBQgIgDgDgCQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGg");
	this.shape_15.setTransform(-15.8,38.1,0.629,0.629);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAWQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBIgLgFQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEg");
	this.shape_16.setTransform(-15.7,38.1,0.629,0.629);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgHgDgEQgCgDgFAAQgFAAgEAEQgEAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAEAAQAIAAAFAEQADAEAAAKg");
	this.shape_17.setTransform(-19.2,38.1,0.629,0.629);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgHgDgEQgCgDgFAAQgFAAgFAEQgDAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAFAAQAHAAAEAEQAEAEAAAKIAAAfg");
	this.shape_18.setTransform(-19.2,38.1,0.629,0.629);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQALAAAGAHQAGAHAAALQAAAMgGAHQgGAHgLAAQgJAAgGgHQgHgIAAgLQAAgKAHgIQAHgHAIAAgAAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgFgHAAg");
	this.shape_19.setTransform(-22.9,38.1,0.629,0.629);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQATQgGgIAAgLQAAgKAGgIQAIgHAIAAQALAAAFAHQAHAHAAALQAAAMgHAHQgFAHgLAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAEAFAGAAQAHAAADgFQAFgFAAgJQAAgIgFgFQgDgFgHAAQgGAAgEAFg");
	this.shape_20.setTransform(-22.9,38.1,0.629,0.629);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_21.setTransform(-25.6,37.5,0.629,0.629);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_22.setTransform(-25.6,37.5,0.629,0.629);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAFABIACAAIACgBIAAAHIgEABIgDAAQgGAAgCgDQgCgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRg");
	this.shape_23.setTransform(-27.6,37.5,0.629,0.629,0,0,0,0,0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_24.setTransform(-27.6,37.5,0.629,0.629);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgTgYIAIAAIAAAdQAAAHACAEQACADAGAAQAGAAADgEQAEgFAAgHIAAgbIAIAAIAAAwIgIAAIAAgJQgDAGgEACQgDACgGAAQgHAAgEgEQgEgFAAgKg");
	this.shape_25.setTransform(-30.5,38.2,0.629,0.629);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgKIAAgeIAIAAIAAAdQAAAHACADQACAEAGAAQAGAAADgFQAEgFAAgHIAAgaIAIAAIAAAwIgIAAIAAgKQgDAHgEABQgDADgGAAQgHAAgEgEg");
	this.shape_26.setTransform(-30.5,38.2,0.629,0.629);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_27.setTransform(-33.3,37.5,0.629,0.629);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_28.setTransform(-33.3,37.5,0.629,0.629);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHQgGgHAAgMQAAgKAGgIQAHgHAJAAgAAAgSQgFAAgFAFQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAg");
	this.shape_29.setTransform(-36,38.1,0.629,0.629);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQATQgGgHAAgMQAAgKAGgIQAHgHAJAAQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAQgFAAgFAFg");
	this.shape_30.setTransform(-36,38.1,0.629,0.629);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAagYIgGAHQgFgGgEgCQgGgDgFAAQgFAAgCADQgEABAAAFQAAAFADABQADADAKAFIAKADIAFACQAEAEACADQABAEAAAEQAAAKgHAGQgGAGgNAAQgJAAgHgEQgHgEgDgJIAGgGQADAHAGAEQAFAEAHAAQAIAAADgEQAFgCAAgHQAAgDgDgDQgEgEgKgDIgBgCQgJgBgFgEQgEgEgBgCQgCgEAAgEQAAgHAGgGQAHgFAJAAQAIAAAGADQAGADAFAGg");
	this.shape_31.setTransform(-40,37.5,0.629,0.629);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAhQgHgFgEgJIAHgGQADAIAFAEQAGADAHAAQAHAAAEgCQAEgDAAgGQAAgFgDgCQgDgEgLgEIgBgBQgIgBgFgEIgFgGQgCgDAAgFQAAgIAGgFQAGgFAJAAQAIAAAGADQAHADAEAGIgFAHQgFgGgEgDQgGgCgFAAQgFAAgDACQgDACAAAFQAAAFADABQACADALAEIAKAFIAEABQAEADACAEQACAEAAAFQAAAJgHAGQgHAGgMAAQgJAAgHgEg");
	this.shape_32.setTransform(-40,37.5,0.629,0.629);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_33.setTransform(-47.8,37.5,0.629,0.629);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_34.setTransform(-47.8,37.5,0.629,0.629);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_35.setTransform(-50.4,38.1,0.629,0.629);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_36.setTransform(-50.4,38.1,0.629,0.629);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEACACIAFABIABAAIADgBIAAAHIgEABIgEAAQgGAAgBgDQgDgDAAgGIAAgfIgIAAIAAgGIAIAAIAAgRg");
	this.shape_37.setTransform(-53.3,37.5,0.629,0.629,0,0,0,0,0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_38.setTransform(-53.3,37.5,0.629,0.629);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_39.setTransform(-55.3,37.5,0.629,0.629);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_40.setTransform(-55.3,37.5,0.629,0.629);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgNAIIAAAaIgIAAIAAhCIAIAAIAAAJQADgFAEgCQAEgDAEAAQAJAAAGAHQAFAHAAAMQAAALgFAHQgFAHgKAAQgEAAgEgCQgEgDgDgFgAAAgbQgFAAgEAFQgEAFAAAJQAAAJAEAFQADAFAGAAQAGAAAEgFQADgFAAgIQAAgKgDgFQgEgFgGAAg");
	this.shape_41.setTransform(-57.9,38.7,0.629,0.629);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAiIAAhCIAIAAIAAAIQADgEAEgCQAEgDAEAAQAJAAAGAHQAFAGAAANQAAALgFAHQgFAGgKAAQgEAAgEgBQgEgDgDgFIAAAagAgJgWQgEAFAAAJQAAAJAEAGQADAEAGAAQAGAAAEgEQADgGAAgIQAAgKgDgEQgEgGgGAAQgFAAgEAFg");
	this.shape_42.setTransform(-57.9,38.7,0.629,0.629);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_43.setTransform(-61.6,38.1,0.629,0.629);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_44.setTransform(-61.6,38.1,0.629,0.629);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAcgUIgHAFQgFgHgDgCQgFgEgGAAQgKAAgFAIQgGAHAAANQAAANAGAHQAGAIAJAAQAHAAAFgDQAFgEADgGIAHAFQgEAJgHAEQgHAEgKAAQgNAAgJgKQgIgKAAgRQAAgQAIgKQAJgKAOAAQAJAAAGAEQAHAEAEAIg");
	this.shape_45.setTransform(-65.4,37.5,0.629,0.629);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgQAJgKQAIgKAOAAQAJAAAHAEQAHAEADAIIgHAFQgEgHgEgDQgFgCgGAAQgJAAgGAHQgGAIAAAMQAAANAGAHQAGAIAKAAQAGAAAFgDQAGgEADgGIAHAEQgFAJgHAFQgGAEgKAAQgNAAgJgKg");
	this.shape_46.setTransform(-65.5,37.5,0.629,0.629);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAALIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGQgDgEgCgBQgCgBgEAAQgFAAgEAFQgDAGAAAIQAAAIADAGQAEAFAFAAgAAOAHQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGg");
	this.shape_47.setTransform(-74.6,38.7,0.629,0.629);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgOAeQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGIAAgJQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFgAgJgWQgDAGAAAIQAAAIADAGQAEAFAFAAIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGIgFgFQgCgBgEAAQgFAAgEAFg");
	this.shape_48.setTransform(-74.6,38.7,0.629,0.629);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJg");
	this.shape_49.setTransform(-78.1,38.1,0.629,0.629);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJIAAAfg");
	this.shape_50.setTransform(-78.1,38.1,0.629,0.629);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_51.setTransform(-81,37.5,0.629,0.629);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_52.setTransform(-81,37.5,0.629,0.629);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgWgiIAIAAIAAAqIATgVIALAAIgQAPIASAhIgJAAIgNgbIgKAKIAAARIgIAAg");
	this.shape_53.setTransform(-83.2,37.5,0.629,0.629);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAMAkIgNgcIgKAKIAAASIgIAAIAAhGIAIAAIAAAqIATgVIAKAAIgPAPIARAig");
	this.shape_54.setTransform(-83.3,37.5,0.629,0.629);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AANgYIAAAJIgDAAIgBAAQgGAAgDAFQgDAFAAAKIAAAUIgJAAIAAgwIAIAAIAAAOIAAAAQADgIACgEQADgDAFAAIADAAg");
	this.shape_55.setTransform(-86.2,38.1,0.629,0.629);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAHAAIAAAOIABAAQACgIADgEQADgDAEAAIADAAIABAAIAAAJIgCAAIgCAAQgGAAgDAFQgDAFAAAKIAAAUg");
	this.shape_56.setTransform(-86.2,38.1,0.629,0.629);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQALAAAGAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHQgHgHAAgMQAAgLAHgHQAGgHAJAAgAAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAg");
	this.shape_57.setTransform(-89.4,38.1,0.629,0.629);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgPATQgHgHAAgMQAAgLAHgHQAFgHAKAAQAKAAAHAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHgAgJgNQgFAFAAAIQAAAJAFAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgDAFg");
	this.shape_58.setTransform(-89.4,38.1,0.629,0.629);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgrgiIAJAAIAPA4IAPg4IAJAAIAPA4IAPg4IAJAAIgTBGIgJAAIgQg5IgOA5IgKAAg");
	this.shape_59.setTransform(-93.9,37.4,0.629,0.629);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAPAkIgPg5IgPA5IgJAAIgThGIAJAAIAPA3IAPg3IAIAAIAQA3IAPg3IAJAAIgTBGg");
	this.shape_60.setTransform(-93.9,37.5,0.629,0.629);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1E1819").s().p("Ar6BQIAAifIX1AAIAACfg");
	this.shape_61.setTransform(-55.7,37.6,0.629,0.629);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF141E").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_62.setTransform(-102,20.2,0.629,0.629);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1E1819").s().p("AgtAyQgQgRAAghQAAgfARgSQAQgTAcAAQAfAAAPATQAQAUABAjIAAAFIhXAAQABAQAIAHQAHAIALgBQAKAAAHgEQAHgEAHgLIAZAPQgJARgOAHQgOAIgWAAQgdAAgQgTgAgRgjQgHAIAAAOIAAABIAvAAIAAgCQAAgPgFgHQgHgHgLAAQgLgBgGAJg");
	this.shape_63.setTransform(-11.5,26.1,0.629,0.629);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1E1819").s().p("AgqAyQgSgSAAggQAAgeASgTQASgTAcAAQAVAAAOAJQAOAIAIASIgfAPQgCgLgHgGQgHgGgJAAQgMAAgHALQgHAKAAAUQAAAUAHALQAIALAMAAQAJAAAGgGQAGgGADgLIAfAPQgIARgOAJQgOAJgVAAQgcAAgSgTg");
	this.shape_64.setTransform(-20.2,26.1,0.629,0.629);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgLAAgHAIQgGAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAGgMALgIQAKgGANAAQATAAALAMQAKALAAAXIAABXg");
	this.shape_65.setTransform(-29.5,25.9,0.629,0.629);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1E1819").s().p("AAXA/QgHgGAAgNQgJANgIAGQgKAGgMAAQgSAAgMgMQgLgLAAgRQAAgOAHgMQAJgKAMgDQAJgEAPgBQASgDAIgEIAAgIQgBgHgFgFQgFgDgIAAQgHAAgHADQgEADgGAJIgbgMQAHgOANgFQAPgHATAAQAdAAALAKQAMAMABAcIAAAoQAAALABADQADADAFAAIAFgBIAAAaIgXAFQgMAAgHgGgAAAAAQgdAIAAARQAAAIAEAEQAGAFAHABQAMgBAHgHQAGgKABgOIAAgQg");
	this.shape_66.setTransform(-39.1,26.1,0.629,0.629);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1E1819").s().p("AgTBBIgxiBIAmAAIAeBZIAfhZIAmAAIgxCBg");
	this.shape_67.setTransform(-48.2,26.1,0.629,0.629);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E1819").s().p("AgyBNQgOgRAAghQAAggAOgSQAPgSAYAAQALAAAKAGQAJAEAJALIAAhLIAlAAIAAC7IglAAIAAgRQgJAKgJAGQgKAFgLAAQgYAAgPgTgAgSgFQgHALAAAVQAAAVAHALQAHAMAMAAQAHAAAHgEQAFgDAIgLIAAg0QgHgJgGgEQgGgEgIAAQgLgBgIAMg");
	this.shape_68.setTransform(-58.1,24.4,0.629,0.629);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1E1819").s().p("AAyBeIgNgkIhLAAIgMAkIgsAAIBBi7IA2AAIBGC7gAgaAUIAyAAIgZhNg");
	this.shape_69.setTransform(-68.7,24.2,0.629,0.629);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgMAAgFAIQgHAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAHgNAKgHQAKgGANAAQAUAAAKAMQAKALAAAXIAABXg");
	this.shape_70.setTransform(-80.2,25.9,0.629,0.629);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1E1819").s().p("AgSBeIAAiBIAlAAIAACBgAgSg7IAAgiIAlAAIAAAig");
	this.shape_71.setTransform(-87.7,24.2,0.629,0.629);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1E1819").s().p("AhABeIAAi7ICBAAIgHAjIhNAAIAAArIBDAAIAAAjIhDAAIAABKg");
	this.shape_72.setTransform(-94.2,24.2,0.629,0.629);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1E1819").s().p("AgMA7IAAhSIgPAAIAAgjIA3AAIAAB1g");
	this.shape_73.setTransform(-102.1,26.4,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobig, new cjs.Rectangle(-139.3,16.3,131.8,29.1), null);


(lib.contacts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBYIAAgDQAAgSAIgPQAIgOASgQIAKgIQAOgMAIgHQAGgHADgIQAEgIAAgJQAAgPgIgJQgJgJgNAAQgNAAgHAIQgJAHABANIAAAIIAEAJIgQAKQgEgGgBgHQgBgGAAgGQAAgVANgNQAOgNAVAAQAUAAAOAOQAOAOAAAVQAAARgJAOQgJANgXASIgGAEQgdAYgDARIBPAAIAAATg");
	this.shape.setTransform(290.9,-28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBQQgMgKgEgSIATgEQADANAHAGQAIAHAKAAQAQAAAIgRQAIgRABgkQgIAMgJAGQgJAGgLAAQgUAAgMgQQgNgPAAgaQAAgcAOgQQAOgQAWAAQAaAAANAWQAOAXAAAsQAAAsgOAXQgPAXgbAAQgSAAgLgKgAgVg+QgIALAAATQAAAUAIAMQAIAKANAAQAMAAAJgKQAIgLAAgSQAAgTgIgMQgJgNgMAAQgOAAgHALg");
	this.shape_1.setTransform(278.3,-28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBDQgOgZAAgqQAAgqAOgYQANgXAYAAQAZAAAOAXQANAYAAAqQAAAqgNAZQgOAXgZAAQgXAAgOgXgAgVg2QgIATAAAjQAAAkAIASQAHATAOgBQAPABAIgTQAIgRAAglQAAgkgIgSQgIgSgPAAQgOAAgHASg");
	this.shape_2.setTransform(259.5,-28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANBWIAAgnIhDAAIAAgUIBFhwIARAAIAAByIAXAAIAAASIgXAAIAAAngAgmAdIAyAAIAAhRg");
	this.shape_3.setTransform(246.8,-28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBYIAAgDQAAgSAIgPQAIgOASgQIAKgIQAOgMAIgHQAGgHADgIQAEgIAAgJQAAgPgIgJQgIgJgOAAQgMAAgJAIQgHAHgBANIABAIIAEAJIgQAKQgDgGgCgHQgBgGAAgGQAAgVAOgNQANgNAVAAQAVAAANAOQAOAOAAAVQAAARgJAOQgJANgXASIgGAEQgdAYgDARIBPAAIAAATg");
	this.shape_4.setTransform(227.7,-28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBQQgMgKgEgSIATgEQADANAHAGQAIAHAKAAQAQAAAIgRQAIgRABgkQgIAMgJAGQgJAGgLAAQgUAAgMgQQgNgPAAgaQAAgcAOgQQAOgQAWAAQAaAAANAWQAOAXAAAsQAAAsgOAXQgPAXgbAAQgSAAgLgKgAgVg+QgIALAAATQAAAUAIAMQAIAKANAAQAMAAAJgKQAIgLAAgSQAAgTgIgMQgJgNgMAAQgOAAgHALg");
	this.shape_5.setTransform(215.1,-28.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANBWIAAgnIhDAAIAAgUIBFhwIARAAIAAByIAXAAIAAASIgXAAIAAAngAgmAdIAyAAIAAhRg");
	this.shape_6.setTransform(202.6,-28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBDQgOgZAAgqQAAgqAOgYQANgXAYAAQAZAAANAXQAOAYAAAqQAAAqgOAZQgNAXgZAAQgXAAgOgXgAgVg2QgIATAAAjQAAAkAIASQAHATAOgBQAQABAHgTQAIgRgBglQABgkgIgSQgHgSgQAAQgOAAgHASg");
	this.shape_7.setTransform(183.7,-28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAIBWIAAiKQgIAIgIAFQgJAGgKADIAAgUQANgGAKgJQAJgJAHgLIAQAAIAACrg");
	this.shape_8.setTransform(169.9,-28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBDQgOgZAAgqQAAgqAOgYQAOgXAYAAQAYAAAOAXQANAYAAAqQAAAqgNAZQgOAXgYAAQgYAAgOgXgAgWg2QgHATAAAjQAAAkAHASQAIATAPgBQAPABAHgTQAHgRABglQgBgkgHgSQgHgSgPAAQgPAAgIASg");
	this.shape_9.setTransform(158.4,-28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLArIAAgbIAYAAIAAAbgAgLgPIAAgbIAYAAIAAAbg");
	this.shape_10.setTransform(143,-25.8,1.45,1.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMA+IAAh7IAYAAIAAB7g");
	this.shape_11.setTransform(134.6,-28.6,1.45,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAhQgLgLAAgWQAAgVALgLQALgNASABQAUgBALANQAKANAAAXIAAADIg4AAQABAMAEADQAEAFAIABQAHAAAEgEQAFgBAEgJIARAKQgGALgJAFQgKAFgOABQgTAAgKgNgAgLgXQgEAGAAAJIAAABIAeAAIAAgCQAAgLgDgDQgFgFgHgBQgHAAgEAGg");
	this.shape_12.setTransform(123.8,-25.8,1.45,1.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA+IAAhhIgrAAIAAgaIBzAAIAAAaIgrAAIAABhg");
	this.shape_13.setTransform(107.8,-28.6,1.45,1.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgGAAQgIAAgHADQgFAEgFAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAEAAIADAAIAAAKIgEACIgFAAQgHAAgDgEQgEgFAAgGQgHAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgSIgQAFg");
	this.shape_14.setTransform(283,27.9,1.249,1.249);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAALIgrA+IAsAAIAAAMg");
	this.shape_15.setTransform(272.3,27.9,1.249,1.249);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_16.setTransform(264.8,31.9,1.249,1.249);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAhQgLgOAAgTQAAgUALgMQALgNARAAQASAAALANQALAMAAAUQAAAVgLALQgLAOgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQALAAAHgKQAHgJAAgPQAAgOgHgKQgGgJgMAAQgLAAgGAJg");
	this.shape_17.setTransform(256.2,27.9,1.249,1.249);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAgQgKgNgBgTQABgTAKgNQALgNASAAQALABAKAFQAIAHAGAKIgNAHQgEgKgFgEQgFgFgIABQgLAAgGAJQgIAKABAOQgBAPAIAKQAGAJALAAQAIAAAFgEQAFgFAEgJIANAGQgGALgIAHQgKAFgMABQgQAAgMgOg");
	this.shape_18.setTransform(244.7,27.9,1.249,1.249);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_19.setTransform(236.3,31.9,1.249,1.249);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAhQgKgLAAgWQAAgVAKgLQALgNAQAAQASAAAKANQAKAMAAAVIAAADIg8AAQAAAOAHAIQAGAIAMAAQAGAAAGgEQAFgDAFgJIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgPgbQgGAHgBAOIAtAAQAAgOgGgHQgGgHgLAAQgKAAgFAHg");
	this.shape_20.setTransform(227.9,27.9,1.249,1.249);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAgQgLgMABgUQgBgUALgMQALgNARAAQANABAJAFQAIAHAFAKIgMAHQgDgKgGgEQgFgFgJABQgKAAgHAJQgGAKAAAOQAAAPAGAKQAIAJAJAAQAIAAAGgEQAGgFADgJIAMAGQgFALgJAHQgJAFgMABQgRAAgLgOg");
	this.shape_21.setTransform(216.8,27.9,1.249,1.249);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVAtIAAg1QAAgMgDgGQgFgHgKAAQgJAAgIAIQgGAHAAAOIAAAxIgPAAIAAhWIAPAAIAAARQAEgJAIgGQAIgEAJAAQANAAAHAIQAGAHABASIAAA3g");
	this.shape_22.setTransform(204.8,27.7,1.249,1.249);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAFgFANgEIAKgCQAMgCAJgEIAAgDQAAgHgFgFQgFgDgGAAQgIAAgHADQgGAEgEAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAGAGQAIAIAAAQIAAAjQAAAIABACQACACAEAAIADAAIAAAKIgEACIgFAAQgHAAgEgEQgDgFAAgGQgHAIgHADQgHAEgHABQgNAAgIgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_23.setTransform(192.9,27.9,1.249,1.249);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGArIgghVIAPAAIAXBDIAYhDIAPAAIggBVg");
	this.shape_24.setTransform(181.9,27.9,1.249,1.249);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgVAJgLQAKgNAPAAQAIABAHAEQAHAEAFAIIAAg1IAOAAIAAB8IgOAAIAAgOQgHAJgFADQgHAFgIAAQgQAAgJgNgAgQgGQgGAHAAARQAAAQAGAJQAHAJAKAAIAHgBIAHgEQAFgGACgFQACgGAAgMQAAgMgCgGQgCgFgFgFQgEgDgDgBIgHgBQgLAAgGAJg");
	this.shape_25.setTransform(170.1,25.7,1.249,1.249);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgHAAQgHAAgHADQgGAEgDAHIgMgFQAHgLAIgEQAIgFANAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAFAAIACAAIAAAKIgFACIgEAAQgHAAgDgEQgFgFAAgGQgGAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_26.setTransform(158.7,27.9,1.249,1.249);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAWAtIAAg1QAAgMgFgGQgEgHgJAAQgLAAgGAIQgHAHAAAOIAAAxIgOAAIAAhWIAOAAIAAARQAEgJAIgGQAIgEAIAAQAOAAAHAIQAHAHgBASIAAA3g");
	this.shape_27.setTransform(146.4,27.7,1.249,1.249);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_28.setTransform(137.2,25.6,1.249,1.249);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHBAIAAhKIgQAAIAAgLIAQAAIAAgVQAAgJAGgGQAEgGAKAAIAGABIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAHIAAAQIASAAIAAALIgSAAIAABKg");
	this.shape_29.setTransform(130.8,25.3,1.249,1.249);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_30.setTransform(124.6,25.6,1.249,1.249);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbBGQgNgEgKgIQgNgKgHgNQgGgNAAgRQAAgOAEgLQAFgMAIgKQAMgPARgIQARgIAVAAQAMAAAOAEQAMAEAJAHQALAIAFALQAGAKAAAOQAAAPgFAKQgFAMgLAIQgHAFgFACQgGACgIAAQgIAAgFgDQgEgDAAgHIAAgBQgEAHgHAEQgGADgHAAQgNAAgHgHQgHgIAAgNQAAgSAMgOQALgNAQAAQAIAAAFADQAFADADAHIAEgKIAMAAIgNAyIAAACQAAAEACACQADACADAAQAEAAAFgCIAJgGQAHgIADgIQAEgHAAgMQAAgVgQgOQgQgNgaAAQgLAAgJACQgMAEgFADQgRALgIAOQgJAQAAASQAAAPAFAKQAFALALAJQAJAGALAEQANADAKAAQAOAAAOgEQAMgEAMgIIAFAHQgMAJgOAFQgOAFgQAAQgOAAgOgEgAgQgOQgIALAAAPQAAAIAEAFQAEAFAHAAQAJAAAFgGQAHgFACgKIAFgSQgCgIgEgEQgFgEgGAAQgLAAgHALg");
	this.shape_31.setTransform(111,27.1,1.249,1.249);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWAnQgIgHgEgNIAMgFQADAKAGAGQAGAEAJAAQAKAAAEgDQAFgEABgGQAAgLgWgFIgFgCQgOgEgEgFQgGgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAJAFAEALIgMADQgEgHgFgEQgFgDgIAAQgGAAgGADQgEADAAAGQAAAIAUAGIABABQASAFAGAFQAHAGAAAKQAAALgKAIQgKAIgPAAQgMAAgLgHg");
	this.shape_32.setTransform(94.9,27.9,1.249,1.249);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgVQAAgUAKgMQALgNAQAAQATAAAJANQAKALAAAWIAAADIg8AAQAAAPAHAHQAGAIALAAQAIAAAFgEQAGgEAEgIIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgQgbQgGAIAAANIAtAAQAAgOgGgHQgGgHgLAAQgKAAgGAHg");
	this.shape_33.setTransform(84,27.9,1.249,1.249);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_34.setTransform(75.4,25.5,1.249,1.249);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgFgDgIAAQgHAAgHADQgGAFgDAGIgLgFQAGgKAIgFQAIgFANAAQAPABAIAGQAHAJAAAPIAAAjQAAAIABACQACACAFAAIACAAIAAAKIgEACIgFAAQgHAAgDgEQgEgEgBgHQgGAIgHADQgGAEgIABQgMAAgJgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSQgGACgKADg");
	this.shape_35.setTransform(66.8,27.9,1.249,1.249);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAnQgKgHgDgNIAMgFQACAKAHAGQAFAEAKAAQAJAAAFgDQAGgEAAgGQAAgLgWgFIgFgCQgOgFgFgEQgFgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAIAFAFALIgMADQgEgHgFgEQgFgDgIAAQgHAAgEADQgFADAAAGQAAAIAUAGIABABQARAFAHAFQAGAGAAAKQAAALgJAIQgJAIgRAAQgMAAgJgHg");
	this.shape_36.setTransform(55.5,27.9,1.249,1.249);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_37.setTransform(22.4,27.9,1.249,1.249);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_38.setTransform(15.2,25.5,1.249,1.249);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_39.setTransform(8.5,25.5,1.249,1.249);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AAPApQgEgEgBgIQgFAHgFAFQgHAEgHABQgNAAgHgIQgJgIABgLQAAgKAFgHQAEgGAJgDIARgDIAQgEIAAgGQAAgFgEgCQgCgCgGgBQgFAAgEACQgDADgDAFIgTgIQAFgIAJgEQAHgEAPgBQAUABAHAGQAHAHAAATIAAAaIACAJQABACADAAIACAAIACAAIABARIgQAEQgJAAgEgFgAAAAAQgTAFABALQAAAFADAEQACADAGAAQAHAAAEgGQAFgEAAgLIAAgKg");
	this.shape_40.setTransform(-0.8,27.9,1.249,1.249);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AAqAtIAAg1QAAgKgDgEQgEgFgGABQgIgBgEAGQgFAFAAAKIAAAzIgXAAIAAg1QAAgKgDgEQgDgFgHABQgIgBgEAGQgEAFAAAKIAAAzIgZAAIAAhWIAZAAIAAAPQAEgJAHgEQAHgEAJAAQALAAAEAEQAHAFACAKQAFgKAHgFQAHgEAKAAQANAAAGAHQAHAIAAAPIAAA6g");
	this.shape_41.setTransform(-16.7,27.7,1.249,1.249);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgpA+IAAh7IBRAAIgFAXIguAAIAAAZIArAAIAAAWIgrAAIAAAdIAwAAIAFAYg");
	this.shape_42.setTransform(-32.2,25.5,1.249,1.249);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVApQgEgEAAgHQgHAJgHADQgGADgIABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgGAAQgJAAgGADQgFADgFAIIgKgFQAGgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgEABIgFABQgGAAgEgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAKgBAHgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_43.setTransform(267,6.2,1.249,1.249);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAAKIgqA/IArAAIAAAMg");
	this.shape_44.setTransform(256.3,6.2,1.249,1.249);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_45.setTransform(248.8,10.2,1.249,1.249);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcAhQgLgNAAgUQAAgSALgOQALgMARAAQASAAALAMQALAMAAAUQAAAVgLAMQgLANgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQAMAAAGgJQAHgKAAgPQAAgOgHgKQgGgJgMAAQgKAAgHAJg");
	this.shape_46.setTransform(240.2,6.2,1.249,1.249);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaAhQgLgOABgTQgBgTALgNQAMgMAQAAQAMAAAKAFQAIAGAFAMIgMAGQgDgJgGgFQgFgEgIAAQgKAAgIAJQgGAKAAAOQAAAPAGAKQAIAKAKAAQAIgBAFgFQAGgDADgKIAMAGQgFAMgIAFQgKAHgMAAQgQAAgMgNg");
	this.shape_47.setTransform(228.7,6.2,1.249,1.249);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_48.setTransform(220.3,10.2,1.249,1.249);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAiQgKgMAAgWQAAgUAKgMQAKgMARAAQASAAAKAMQAKAMAAAVIAAADIg8AAQAAAOAGAJQAIAHALAAQAHAAAFgEQAFgDAFgIIAKAFQgFAMgIAEQgJAGgMAAQgSAAgKgMgAgQgaQgFAGgBAPIAtAAQAAgOgGgHQgGgIgLABQgKgBgGAIg");
	this.shape_49.setTransform(211.9,6.2,1.249,1.249);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZAhQgLgNAAgUQAAgUALgMQALgMAQAAQAMAAAJAFQAJAGAGAMIgNAGQgDgJgGgFQgFgEgJAAQgJAAgIAJQgGAKgBAOQABAPAGAKQAIAKAJAAQAJgBAFgFQAGgEADgJIANAGQgGAMgJAFQgJAHgMAAQgRAAgKgNg");
	this.shape_50.setTransform(200.8,6.2,1.249,1.249);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgDgHQgFgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgOAAIAAhVIAOAAIAAARQAEgJAIgGQAIgEAJAAQAOAAAGAIQAHAIAAAQIAAA3g");
	this.shape_51.setTransform(188.8,6,1.249,1.249);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAVApQgEgEgBgHQgGAJgHADQgGADgIABQgNAAgIgIQgHgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgHAAQgIAAgGADQgFADgEAIIgLgFQAGgLAIgEQAIgFANABQAQgBAGAIQAIAHAAAPIAAAkQAAAIABACQACACAEAAIACAAIABAAIAAALIgJACQgHAAgDgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAEAFQAFAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_52.setTransform(176.9,6.2,1.249,1.249);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHArIgfhVIAPAAIAXBEIAZhEIAOAAIggBVg");
	this.shape_53.setTransform(165.9,6.2,1.249,1.249);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgUAJgMQAJgNAQAAQAIAAAHAFQAFADAHAJIAAg0IAOAAIAAB7IgOAAIAAgPQgFAJgHAEQgHAEgIAAQgQAAgJgMgAgQgHQgGAJAAAQQAAARAGAIQAHAJAKAAIAHgBQAEgBADgDQAFgFACgGQACgGAAgMQAAgMgCgGQgCgFgFgFIgHgEIgHgCQgLAAgGAJg");
	this.shape_54.setTransform(154.1,4,1.249,1.249);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAUApQgDgEgBgHQgGAJgHADQgFADgJABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHALgCIAKgCQAOgEAHgDIAAgDQAAgHgFgEQgFgEgGAAQgKAAgFADQgGADgEAIIgLgFQAHgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgJACQgGAAgFgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_55.setTransform(142.7,6.2,1.249,1.249);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgEgHQgEgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgPAAIAAhVIAPAAIAAARQAEgJAIgGQAHgEAJAAQAOAAAHAIQAHAIAAAQIAAA3g");
	this.shape_56.setTransform(130.5,6,1.249,1.249);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_57.setTransform(121.3,4,1.249,1.249);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgHA/IAAhJIgQAAIAAgMIAQAAIAAgUQAAgKAGgFQAEgFAKAAIAGAAIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAIIAAAOIASAAIAAAMIgSAAIAABJg");
	this.shape_58.setTransform(114.8,3.6,1.249,1.249);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_59.setTransform(108.6,4,1.249,1.249);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_60.setTransform(102.9,10.2,1.249,1.249);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAWArIgWhDIgUBDIgOAAIgbhVIAOAAIAUBEIAWhEIAMAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_61.setTransform(92,6.2,1.249,1.249);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgUBDIgPAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_62.setTransform(75.7,6.2,1.249,1.249);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgVBDIgOAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_63.setTransform(59.4,6.2,1.249,1.249);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_64.setTransform(23.5,6.2,1.249,1.249);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#93CE1A").s().p("AgeAhQgLgMABgVQAAgUALgMQALgMASAAQAUAAAKAMQAMANgBAXIAAAEIg4AAQABAKAEAEQAFAGAHAAQAGgBAFgCQAEgCAFgJIARAKQgFAMgLAEQgIAGgPAAQgSgBgMgMgAgLgXQgFAFABAKIAAABIAeAAIAAgCQAAgJgDgGQgEgEgIAAQgIAAgDAFg");
	this.shape_65.setTransform(13.7,6.2,1.249,1.249);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#93CE1A").s().p("AAPAsIAAg0QAAgKgDgEQgDgEgHAAQgHAAgEAFQgFAGAAAJIAAAyIgYAAIAAhVIAYAAIAAAPQAFgIAHgFQAFgEAKAAQANAAAGAHQAHAHAAAQIAAA5g");
	this.shape_66.setTransform(1.3,6,1.249,1.249);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_67.setTransform(-8.6,3.8,1.249,1.249);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAYAAIAAB7g");
	this.shape_68.setTransform(-15.3,3.8,1.249,1.249);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#93CE1A").s().p("AAOAsIAAg0QAAgKgCgEQgDgEgHAAQgHAAgFAFQgDAFAAAKIAAAyIgZAAIAAhVIAZAAIAAAPQAEgJAGgEQAGgEAKAAQAMAAAHAHQAHAIAAAPIAAA5g");
	this.shape_69.setTransform(-25.2,6,1.249,1.249);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#93CE1A").s().p("AgrAvQgSgTAAgcQAAgbASgTQARgSAaAAQAbAAARASQASASAAAcQAAAdgRASQgRASgcAAQgaAAgRgSgAgVgbQgJAKAAARQAAASAJAKQAJALANAAQAMAAAJgLQAKgLgBgRQABgQgKgLQgJgLgMAAQgNAAgJALg");
	this.shape_70.setTransform(-40.4,3.8,1.249,1.249);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AAAhYIAACx");
	this.shape_71.setTransform(87.5,-28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.contacts, new cjs.Rectangle(-48.1,-44.9,353.1,81.3), null);


(lib.applynoq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAUBTIAVhTIAdAAIghCBg");
	this.shape.setTransform(-195.5,12,0.953,0.96);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAxQgSgTAAgeQAAgdASgTQATgTAbAAQAcAAATATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQgBASAKAMQAJALANAAQAPAAAIgMQAKgLgBgSQABgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_1.setTransform(-210.6,12,0.953,0.96);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_2.setTransform(-224.3,12,0.953,0.96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBBIAAgyIguhPIAhAAIAcA1IAeg1IAgAAIguBPIAAAyg");
	this.shape_3.setTransform(-241.2,12,0.953,0.96);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIAgAAIAABnIA3AAIAAAag");
	this.shape_4.setTransform(-251.2,12,0.953,0.96);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgbAAIAAAxgAgYgHIAYAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgYAAg");
	this.shape_5.setTransform(-262.8,12,0.953,0.96);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAyAAQAfAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_6.setTransform(-275.3,12,0.953,0.96);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAuiBIAlAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_7.setTransform(-288.4,12,0.953,0.96);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93CE1A").s().p("EgidACIIAAkPMBE7AAAIAAEPg");
	this.shape_8.setTransform(-150.3,12,0.685,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.applynoq, new cjs.Rectangle(-301.3,-0.1,302,24.2), null);


(lib.achive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAnIAAhNIAIAAIAABEIAZAAIAAAJg");
	this.shape.setTransform(52.9,60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAnIgFgSIgbAAIgFASIgIAAIAWhNIAIAAIAXBNgAgLAMIAWAAIgLgpg");
	this.shape_1.setTransform(47.8,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAnIAAhEIgTAAIAAgJIAtAAIAAAJIgTAAIAABEg");
	this.shape_2.setTransform(42.7,60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAHAAIAABNg");
	this.shape_3.setTransform(39.2,60);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAnIAAhNIAUAAQAJAAAHAFQAFAHAAALQAAALgFAGQgFAGgKAAIgOAAIAAAfgAgNAAIANAAQAHAAACgEQAEgDAAgIQAAgHgEgEQgCgDgHAAIgNAAg");
	this.shape_4.setTransform(35.6,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAnIgFgSIgbAAIgFASIgIAAIAWhNIAJAAIAWBNgAgLAMIAXAAIgMgpg");
	this.shape_5.setTransform(30,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAeQgHgLAAgTQAAgSAHgLQAHgLALAAQAHAAAFAEQAGAFADAJIgGAFQgDgHgEgDQgDgEgFAAQgIAAgEAJQgFAIAAAOQAAAPAFAIQAFAIAHAAQAGAAADgEQAEgDADgIIAGAGQgDAIgGAHQgFAEgJAAQgLAAgGgLg");
	this.shape_6.setTransform(24.6,60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgHgLAAgTQAAgSAHgLQAIgLAKAAQAHAAAFAEQAFAEADAIIgFAGQgCgGgEgDQgEgEgFAAQgHAAgFAJQgFAJAAANQAAAPAFAIQAEAIAIAAQAEAAADgCQADgCADgFIAAgOIgQAAIAAgIIAXAAIAAAaQgEAIgEADQgGAEgGAAQgLAAgHgLg");
	this.shape_7.setTransform(63.1,49.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAnIgbg+IAAA+IgIAAIAAhNIAJAAIAbA8IAAg8IAHAAIAABNg");
	this.shape_8.setTransform(57.4,49.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAnIAAhNIAHAAIAABNg");
	this.shape_9.setTransform(53.2,49.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAnIgSgrIgNAQIAAAbIgHAAIAAhNIAHAAIAAAmIAcgmIAJAAIgUAaIAXAzg");
	this.shape_10.setTransform(49.6,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAnIgOgjIgOAAIAAAjIgHAAIAAhNIAVAAQAKAAAGAFQAFAGAAAKQAAAHgEAHQgDADgGADIAOAkgAgOgEIAOAAQAGAAADgDQAEgDAAgHQAAgGgEgDQgCgEgHAAIgOAAg");
	this.shape_11.setTransform(43.8,49.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAmQgEgCgEgFQgEgGgCgIQgCgHAAgKQAAgJACgHQACgIAEgGQADgFAFgDQAGgCADAAQAFAAAFACQAFAEADAEQAEAGACAIIACAQIgCARQgCAIgEAGQgDAFgFACQgFADgFAAQgEAAgFgDgAgMgWQgFAJAAANQAAAOAFAJQAFAIAHAAQAJAAAEgIQAFgKAAgNQAAgMgFgKQgFgJgIAAQgHAAgFAJg");
	this.shape_12.setTransform(37.8,49.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAnIgNg/IgLA/IgIAAIgQhNIAIAAIAMA+IAMg+IAHAAIANA+IAMg+IAHAAIgPBNg");
	this.shape_13.setTransform(31.1,49.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAnIAAhEIgSAAIAAgJIAsAAIAAAJIgUAAIAABEg");
	this.shape_14.setTransform(23.1,49.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAnIAAhNIAiAAIgCAIIgYAAIAAAZIAWAAIAAAIIgWAAIAAAbIAZAAIACAJg");
	this.shape_15.setTransform(18.7,49.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAeQgHgKAAgUQAAgTAHgKQAHgLALAAQAGAAAGAEQAFAFADAHIgFAGQgDgGgEgDQgDgEgFAAQgHAAgFAJQgFAIAAAOQAAAPAFAIQAEAIAHAAQAFAAADgCQADgCACgFIAAgOIgPAAIAAgIIAXAAIAAAaQgDAHgGAEQgFAEgHAAQgKAAgHgLg");
	this.shape_16.setTransform(13.4,49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPgPIAPgBIAFAAIAFADIABAEQAAAEgBADQgDACgEAAIACACIAFAEIAHAIIgGABIgFgHIgEgEIgCgCIgCAAIgCAAIgFAAIACAPIgFAAgAgLgMIACALIANgCIACgCIAAgDQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBQgBgBgDAAg");
	this.shape_17.setTransform(39.9,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABxAqQgXgRgSABIh0ACQgZABgPgQIhEhCQgLgNAMgLQAMgMAOALIA7A3IBqAAIAAgHIhRAAQgSAAABgSQABgSAQABIBbgBQATgBAKALIBPBKIAABDQgbgegSgNg");
	this.shape_18.setTransform(35.7,34.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhvA2IgYhqIAJgBIATBbIDxgBIACARg");
	this.shape_19.setTransform(38.8,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93CE1A").s().p("AgIgEIAJgBQAFAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAIgBADIgCACIgNACg");
	this.shape_20.setTransform(39.7,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiHg1ID2AAIAYBqIj3ABgAgegXQgNAKAAAOQAAAOANAKQAMAKASAAQATAAANgKQAMgLAAgOQAAgNgNgKQgNgKgSAAQgSAAgMAKg");
	this.shape_21.setTransform(39.8,16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAGEQifAAhyhxQhyhyAAigQgBifBxhzQByhyCgAAIABAAQCgAAByBxQByBxAACgQABCghyByQhxBzihAAgAj9j8QhpBqABCTQAACUBpBpQBpBoCTAAIABAAQCVAABohqQBphpgBiTQAAiUhphpQhphoiUAAIgBAAQiUAAhoBpg");
	this.shape_22.setTransform(38.8,38.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93CE1A").s().p("AAAF1QiZAAhthtQhuhtAAiaQgBiZBthuQBthuCaAAIABAAQCaAABtBtQBuBtAACaQABCZhtBuQhtBuibAAg");
	this.shape_23.setTransform(38.8,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.achive, new cjs.Rectangle(0,0,77.7,77.7), null);


// stage content:
(lib.iFunAdvance_AdWords_320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt-1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(160.3,156.2,0.7,0.7,0,0,0,111.5,23.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:125.3,alpha:1},14,cjs.Ease.get(1)).wait(95).to({x:139.3,alpha:0},16,cjs.Ease.get(-1)).to({_off:true},1).wait(254));

	// achive
	this.instance_1 = new lib.achive();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.2,-16.8,0.559,0.559,-36.5,0,0,39.8,38.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:39.4,regY:38.3,rotation:15,x:226.1,y:25.3},14,cjs.Ease.get(1)).wait(200).to({regX:39.8,regY:38.9,rotation:-36.5,x:226.2,y:-16.8},15).to({_off:true},1).wait(144));

	// txt-2
	this.instance_2 = new lib.txt2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.4,154.6,0.7,0.7,0,0,0,119.3,16.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({x:118.4,alpha:1},16,cjs.Ease.get(1)).wait(79).to({x:132.4,alpha:0},15).to({_off:true},1).wait(144));

	// logo-big
	this.instance_3 = new lib.logobig();
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.7,30.2,0.7,0.7,0,0,0,76.9,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(236).to({_off:false},0).to({x:156.7,alpha:1},15).wait(114).to({y:37.2,alpha:0},14).wait(1));

	// contacts
	this.instance_4 = new lib.contacts();
	this.instance_4.parent = this;
	this.instance_4.setTransform(228,41.3,0.577,0.577,0,0,0,131.9,28.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(258).to({_off:false},0).to({regX:132.1,x:221.1,alpha:1},15).wait(76).to({regX:132,x:235,alpha:0},16).to({_off:true},1).wait(14));

	// apply noq
	this.instance_5 = new lib.applynoq();
	this.instance_5.parent = this;
	this.instance_5.setTransform(319.9,-16.7,0.7,0.7,0,0,0,0.5,-0.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(236).to({_off:false},0).to({regY:-0.1,y:0},15).wait(105).to({regY:-0.5,y:-9.7,alpha:0},16).to({_off:true},1).wait(7));

	// pc-1
	this.instance_6 = new lib.pc1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(344.7,100.6,0.7,0.7,0,0,0,151.4,226.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220).to({alpha:0},15).to({_off:true},1).wait(129).to({_off:false},0).to({alpha:1},14).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape.setTransform(54.1,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.067)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_1.setTransform(54.1,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.133)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_2.setTransform(54.1,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_3.setTransform(54.1,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.267)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_4.setTransform(54.1,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.333)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_5.setTransform(54.1,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.4)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_6.setTransform(54.1,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.467)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_7.setTransform(54.1,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.533)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_8.setTransform(54.1,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.6)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_9.setTransform(54.1,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.667)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_10.setTransform(54.1,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.733)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_11.setTransform(54.1,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_12.setTransform(54.1,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.867)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_13.setTransform(54.1,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.933)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_14.setTransform(54.1,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_15.setTransform(54.1,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.937)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_16.setTransform(54.1,25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.875)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_17.setTransform(54.1,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.812)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_18.setTransform(54.1,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.749)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_19.setTransform(54.1,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.686)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_20.setTransform(54.1,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.624)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_21.setTransform(54.1,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.561)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_22.setTransform(54.1,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.502)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_23.setTransform(54.1,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.439)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_24.setTransform(54.1,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.376)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_25.setTransform(54.1,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.314)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_26.setTransform(54.1,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.251)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_27.setTransform(54.1,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.188)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_28.setTransform(54.1,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.125)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_29.setTransform(54.1,25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.063)").s().p("AohD6IAAnzIRDAAIAAHzg");
	this.shape_30.setTransform(54.1,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},251).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},83).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(14));

	// Слой 20
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AyRD6IAAnzMAkjAAAIAAHzg");
	this.shape_31.setTransform(116.7,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AyOD6IAAnzMAkdAAAIAAHzg");
	this.shape_32.setTransform(116.6,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020202").s().p("AyrD6IAAnzMAlYAAAIAAHzg");
	this.shape_33.setTransform(119.5,25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#040404").s().p("AzID6IAAnzMAmRAAAIAAHzg");
	this.shape_34.setTransform(122.4,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#060606").s().p("AzlD6IAAnzMAnLAAAIAAHzg");
	this.shape_35.setTransform(125.3,25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#080808").s().p("A0CD6IAAnzMAoFAAAIAAHzg");
	this.shape_36.setTransform(128.1,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0A0A0A").s().p("A0fD6IAAnzMAo/AAAIAAHzg");
	this.shape_37.setTransform(131,25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0C0C0C").s().p("A07D6IAAnzMAp4AAAIAAHzg");
	this.shape_38.setTransform(134,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0E0E0E").s().p("A1YD6IAAnzMAqxAAAIAAHzg");
	this.shape_39.setTransform(136.8,25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#101010").s().p("A11D6IAAnzMArrAAAIAAHzg");
	this.shape_40.setTransform(139.7,25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#121212").s().p("A2SD6IAAnzMAslAAAIAAHzg");
	this.shape_41.setTransform(142.6,25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#141414").s().p("A2vD6IAAnzMAtfAAAIAAHzg");
	this.shape_42.setTransform(145.5,25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#161616").s().p("A3MD6IAAnzMAuZAAAIAAHzg");
	this.shape_43.setTransform(148.4,25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#181818").s().p("A3pD6IAAnzMAvTAAAIAAHzg");
	this.shape_44.setTransform(151.3,25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1A1A1A").s().p("A4GD6IAAnzMAwMAAAIAAHzg");
	this.shape_45.setTransform(154.2,25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1C1C1C").s().p("A4iD6IAAnzMAxFAAAIAAHzg");
	this.shape_46.setTransform(157.1,25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1E1E1E").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_47.setTransform(160,25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1C1C1C").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_48.setTransform(160,25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1A1A1A").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_49.setTransform(160,25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#181818").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_50.setTransform(160,25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#151515").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_51.setTransform(160,25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#131313").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_52.setTransform(160,25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_53.setTransform(160,25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F0F0F").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_54.setTransform(160,25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D0D0D").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_55.setTransform(160,25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0B0B0B").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_56.setTransform(160,25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#090909").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_57.setTransform(160,25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#060606").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_58.setTransform(160,25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#040404").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_59.setTransform(160,25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020202").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_60.setTransform(160,25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_61.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},236).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},114).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.8,11.9,327.6,130.3);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bgpictures.jpg", id:"bgpictures"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;