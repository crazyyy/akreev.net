(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"iFunAdvance_AdWords_250x250_atlas_", frames: [[0,0,350,484],[352,0,130,151]]}
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



(lib.bgpictures = function() {
	this.spriteSheet = ss["iFunAdvance_AdWords_250x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.term = function() {
	this.spriteSheet = ss["iFunAdvance_AdWords_250x250_atlas_"];
	this.gotoAndStop(1);
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


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93CE1A").s().p("AATA8IgThSIgTBSIgcAAIgeh3IAbAAIASBNIAShNIAcAAIASBNIAThNIAbAAIgeB3g");
	this.shape.setTransform(181.1,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93CE1A").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQARAAAbQAAAcgQARQgRARgaAAQgZAAgRgRgAgVgaQgHAKAAAQQAAARAHAKQAJALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgMAAgJALg");
	this.shape_1.setTransform(166.6,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAdAAIAABeIAyAAIAAAZg");
	this.shape_2.setTransform(155.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CE1A").s().p("AgoA8IAAh3IBRAAIgEAWIgxAAIAAAcIAqAAIAAAWIgqAAIAAAvg");
	this.shape_3.setTransform(146,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93CE1A").s().p("AAYA8IAAgzIgvAAIAAAzIgcAAIAAh3IAcAAIAAAvIAvAAIAAgvIAcAAIAAB3g");
	this.shape_4.setTransform(129.4,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAFAMAKAGQAJAGAMAAQAKAAAHgEQAGgDAAgGQAAgKgZgGIgFgBQgXgFgJgHQgJgIAAgOQAAgSAMgJQANgKAVAAQASAAAMAGQAMAGAKANIgSAPQgGgJgJgFQgJgEgKAAQgIAAgGADQgFADAAAFQAAAHAYAHIALACQAUAFAJAIQAJAJAAAOQAAARgOALQgPAKgYAAQgVAAgNgHg");
	this.shape_5.setTransform(116.6,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93CE1A").s().p("AAfA8IgHgXIgwAAIgHAXIgcAAIAph3IAiAAIAsB3gAgQANIAfAAIgQgxg");
	this.shape_6.setTransform(104.7,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AgnAtQgQgRAAgcQAAgcAQgRQAQgQAaAAQASAAAOAIQAOAJAFAPIgWANQgGgLgGgFQgIgFgJAAQgMAAgJAKQgHAKAAARQAAAQAIAKQAIAKANAAQAIAAAIgEQAJgGAFgIIAWAOQgKAQgNAHQgMAHgSAAQgZAAgRgRg");
	this.shape_7.setTransform(92.7,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA3QgNgIgHgPIATgQQAFAMAKAGQAJAGAMAAQAJAAAIgEQAGgDAAgGQAAgKgZgGIgEgBQgYgFgJgHQgJgIAAgOQAAgSAMgJQAOgKAUAAQASAAAMAGQAMAGAJANIgRAPQgFgJgKgFQgIgEgLAAQgIAAgFADQgGADAAAFQAAAHAZAHIAKACQAVAFAIAIQAJAIgBAPQABASgOAKQgOAKgZAAQgUAAgOgHg");
	this.shape_8.setTransform(76.1,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKATIAGgLIABgJIAAgBIgIAAIAAgXIAXAAIAAAXQAAAGgDAIQgEAHgGAGg");
	this.shape_9.setTransform(68.1,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOA8IAAguIgqhJIAeAAIAaAxIAbgxIAeAAIgrBJIAAAug");
	this.shape_10.setTransform(60.5,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA8IgIgXIgwAAIgHAXIgdAAIAph3IAjAAIAtB3gAgRANIAgAAIgQgxg");
	this.shape_11.setTransform(49,26.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8IAAh3IA0AAQAYAAAPAQQAOAQAAAbQAAASgFAMQgFANgKAIQgGAEgHADQgGACgOAAgAgYAjIAVAAQANAAAGgJQAIgJAAgRQAAgOgIgKQgFgJgLAAIgYAAg");
	this.shape_12.setTransform(37,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQASAAAaQAAAcgQARQgQARgbAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAJALALAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgLAAgJALg");
	this.shape_13.setTransform(23.5,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_14.setTransform(10.9,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAtQgQgRAAgcQAAgaAQgSQARgRAZAAQAaAAARARQARASAAAaQAAAcgRARQgRARgaAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAIALAMAAQAOAAAIgLQAIgLAAgQQAAgPgIgLQgIgLgOAAQgMAAgIALg");
	this.shape_15.setTransform(-5.9,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_16.setTransform(-18.5,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA8IgvhLIAABLIgaAAIAAh3IAcAAIAtBHIAAhHIAaAAIAAB3g");
	this.shape_17.setTransform(-31,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAcAAIAAB3g");
	this.shape_18.setTransform(-40.6,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgHAAgOQAAgRANgKQANgLAUABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_19.setTransform(186.3,6.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93CE1A").s().p("AgnA8IAAh3IBNAAIgEAXIgtAAIAAAYIApAAIAAAUIgpAAIAAAdIAuAAIAFAXg");
	this.shape_20.setTransform(176.1,6.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAcAAIAABfIAzAAIAAAYg");
	this.shape_21.setTransform(166.4,6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#93CE1A").s().p("AAgA8IgIgXIgvAAIgIAXIgcAAIAph3IAiAAIAtB3gAgQANIAgAAIgRgxg");
	this.shape_22.setTransform(154.8,6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAJAHAMgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgGAAgPQAAgRANgKQANgLAUABQASAAAMAFQALAGALAOIgSAPQgGgJgIgFQgJgEgLgBQgIAAgFAEQgGADAAAEQAAAJAZAFIAKADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_23.setTransform(142.6,6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgFAAQgXgHgJgHQgJgHAAgOQAAgRANgKQAMgLAVABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQATAFAKAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_24.setTransform(126.3,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93CE1A").s().p("AgKATIAGgLQABgEAAgFIAAAAIgIAAIAAgXIAXAAIAAAVQAAAIgEAHQgDAHgGAGg");
	this.shape_25.setTransform(118.3,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#93CE1A").s().p("AATA8IgThRIgTBRIgcAAIgeh3IAbAAIASBNIAShNIAcAAIATBNIAShNIAbAAIgfB3g");
	this.shape_26.setTransform(108.3,6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARATAAAZQAAAbgRASQgRARgaABQgZgBgRgRgAgUgaQgJALAAAPQAAAQAJALQAIALAMAAQANAAAIgLQAJgKAAgRQAAgQgJgKQgIgLgNABQgMgBgIALg");
	this.shape_27.setTransform(93.8,6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#93CE1A").s().p("AAWA8IgbgxIgTAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgHAIQgHAHgMACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgMAAIgVAAg");
	this.shape_28.setTransform(81.5,6.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#93CE1A").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgGAIQgIAHgNACIAgA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgGgCQgFgDgKAAIgWAAg");
	this.shape_29.setTransform(69,6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93CE1A").s().p("AgpAtQgRgSAAgbQAAgaARgSQAQgRAZAAQAZAAASARQAQASAAAaQAAAbgQASQgQARgbABQgZgBgQgRgAgUgaQgJAKAAAQQAAARAJAKQAIALAMAAQANAAAJgLQAIgLAAgQQAAgPgIgLQgJgLgNABQgMgBgIALg");
	this.shape_30.setTransform(55.5,6.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#93CE1A").s().p("AAkA8IAAhjIgZBjIgVAAIgYhlIAABlIgZAAIAAh3IAqAAIASBLIARhLIAqAAIAAB3g");
	this.shape_31.setTransform(41.3,6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARASAAAaQgBAbgQASQgSARgZABQgZgBgRgRgAgUgaQgIAKAAAQQAAARAIAKQAIALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOABQgLgBgJALg");
	this.shape_32.setTransform(27.1,6.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93CE1A").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_33.setTransform(14.5,6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYA8IguhKIAABKIgbAAIAAh3IAcAAIAtBIIAAhIIAaAAIAAB3g");
	this.shape_34.setTransform(-2.3,6.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQANAIAAASQgBAMgGAJQgHAHgNACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgLAAIgWAAg");
	this.shape_35.setTransform(-14.5,6.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglAyQgNgKAAgVIAAhPIAdAAIAABJQgBALAGAGQAFAFALAAQAKAAAHgFQAFgFAAgMIAAhJIAdAAIAABPQAAAVgOAKQgNALgYAAQgYAAgNgLg");
	this.shape_36.setTransform(-27.7,6.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_37.setTransform(-40,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-45.5,0,237.2,33.1), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDAFIAAgJIAHAAIAAAJg");
	this.shape.setTransform(166.3,47,1.491,1.491);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAFgGAHAAQADAAADACQAEACACAEIAAgZIAHAAIAAA6IgHAAIAAgHQgCAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAEAAIAEgBIADgCQACgCABgDQABgCAAgGQAAgHgBgCIgDgEIgDgCIgEgBQgEAAgDAFg");
	this.shape_1.setTransform(161,43.4,1.491,1.491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_2.setTransform(154.6,44.7,1.491,1.491);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_3.setTransform(148.6,44.7,1.491,1.491);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgDAdIAAgoIAGAAIAAAogAgDgTIAAgJIAGAAIAAAJg");
	this.shape_4.setTransform(144.1,43.4,1.491,1.491);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_5.setTransform(139.2,44.7,1.491,1.491);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgLAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAFAAAFACQAFAEACAFIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgDAFAAAGQAAAHADAFQADAEAEAAQADAAAEgCQACgCACgEIAGACQgDAGgEADQgDACgHAAQgIAAgEgFg");
	this.shape_6.setTransform(132.9,44.7,1.491,1.491);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_7.setTransform(126.6,44.7,1.491,1.491);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQADgHABgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_8.setTransform(121.7,44.6,1.491,1.491);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgFAAQgEAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQACgFAEgCQACgCAFAAQAGAAADAEQAEADAAAIIAAAag");
	this.shape_9.setTransform(112.5,44.6,1.491,1.491);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgCACgDIAFADQgDAFgEACQgDACgGAAQgJAAgEgFgAgHgMQgDADAAAHIAVAAQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_10.setTransform(105.7,44.7,1.491,1.491);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_11.setTransform(99.4,44.7,1.491,1.491);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgEAcQgEgBgDgFIAAAHIgGAAIAAg6IAGAAIAAAZQAEgFADgBQACgCADAAQAIAAAFAGQAEAGAAAJQAAAJgEAGQgFAGgIAAQgDAAgCgCgAgDgGIgDACIgEAEIgBAJIABAIIAEAFIADACIADABQAFAAADgEQADgFAAgHQAAgIgDgDQgDgFgFAAg");
	this.shape_12.setTransform(93,43.4,1.491,1.491);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_13.setTransform(83,44.7,1.491,1.491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_14.setTransform(76.9,44.7,1.491,1.491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AAPAVQgEAAgBgBQgCgCAAgEQgDAEgEACQgCABgEAAQgFAAgEgDQgEgDAAgGQAAgFADgDQADgDAGgBIAEgBQAHgBACgCIAAgBQAAgEgCgCQgCgBgDAAQgEAAgDABQgCACgCADIgFgCQADgFAEgCQADgCAGAAQAHAAAEADQADAEAAAHIAAAQIABAFIACABIACAAIAAAFIgCAAgAAAAAIgGAAIgEADIgBAFQAAAEACACQADACADAAQAEAAADgDQADgDAAgFIAAgIQgDACgEABg");
	this.shape_15.setTransform(70.9,44.7,1.491,1.491);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AAKAdIAAgZQAAgFgCgDQgCgCgFAAQgEAAgDADQgDADAAAGIAAAXIgHAAIAAg5IAHAAIAAAaQACgFAEgCQACgCAFAAQAGAAADADQAEAEAAAHIAAAag");
	this.shape_16.setTransform(64,43.4,1.491,1.491);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgKASQgDgDgCgGIAFgCQACAEADADQACACAEAAQAEAAACgBQADgCAAgDQAAgFgKgDIgCgBQgGgBgDgCQgCgDAAgEQAAgFADgDQAFgDAFAAQAHAAADACQAEADACAFIgFABQgDgEgCgBQgCgCgEAAQgDAAgBACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAEAJADIABAAQAHACAEACQACAEAAAEQAAAFgDAEQgFADgIAAQgFAAgFgDg");
	this.shape_17.setTransform(54.4,44.7,1.491,1.491);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAFgDIAAARIAJAAIAAAFIgJAAIAAAYQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_18.setTransform(49.3,43.5,1.491,1.491);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEADgDQADgCAEAAQAHAAADAEQADAEAAAHIAAAag");
	this.shape_19.setTransform(43.9,44.6,1.491,1.491);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_20.setTransform(37.2,44.7,1.491,1.491);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AAWAVIAAgYQAAgFgCgEQgCgDgEAAQgEAAgDAEQgEAEAAAGIAAAWIgGAAIAAgYQAAgGgBgDQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEACgDQADgCAFAAQAGAAACADQABABACAGQADgFADgCQACgDAGAAQAGAAADAEQADAEAAAHIAAAag");
	this.shape_21.setTransform(28.7,44.6,1.491,1.491);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgNARQgDgDAAgIIAAgaIAHAAIAAAYQAAAFACAEQACADAFAAQAEAAADgEQADgDAAgHIAAgWIAHAAIAAAoIgHAAIAAgIQgDAEgDADQgDACgEAAQgGAAgEgEg");
	this.shape_22.setTransform(19.8,44.8,1.491,1.491);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgMAQQgFgGAAgKQAAgIAFgGQAGgGAHAAQAGAAAEACQADADAEAGIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgEAEAAAHQAAAIAEAEQADAEAEAAQAEAAACgCQADgCACgEIAGACQgDAGgEADQgDACgHAAQgHAAgGgFg");
	this.shape_23.setTransform(13.1,44.7,1.491,1.491);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgMAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAJAAAFAGQAFAFAAAJQAAAKgFAGQgFAFgJAAQgIAAgEgFgAgIgLQgDAGAAAFQAAAHADAFQADAEAFAAQAFAAADgEQAEgEAAgIQAAgHgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_24.setTransform(6.6,44.7,1.491,1.491);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAEgGAIAAQAEAAACACQADACAEAEIAAgZIAGAAIAAA6IgGAAIAAgHQgDAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAFAAIADgBIADgCIAEgFIABgIIgBgJIgEgEIgDgCIgDgBQgFAAgDAFg");
	this.shape_25.setTransform(-0.5,43.4,1.491,1.491);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_26.setTransform(-8.4,43.4,1.491,1.491);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_27.setTransform(-11.7,43.4,1.491,1.491);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AAPAVIgFgBQgCgDAAgDQgEAFgDABQgCABgEAAQgFAAgEgDQgEgEAAgFQAAgFADgDQAEgDAFgBIAEgBQAHgBADgCIAAgBQAAgDgDgDQgBgBgEAAQgDAAgDABQgDACgCADIgFgCQACgFAFgCQADgCAGAAQAIAAADADQADADAAAIIAAAQIABAFIADABIABAAIAAAFIgCAAgAAAAAIgFAAIgFADIgBAFQAAAEACACQACACAEAAQAEAAADgDQAEgDAAgFIAAgIIgIADg");
	this.shape_28.setTransform(-16.6,44.7,1.491,1.491);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQACgHACgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_29.setTransform(-24.6,44.6,1.491,1.491);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_30.setTransform(-30.5,44.7,1.491,1.491);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAGgDIAAARIAHAAIAAAFIgHAAIAAAYQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_31.setTransform(-35.8,43.5,1.491,1.491);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AgDAeIAAgiIgHAAIAAgGIAHAAIAAgJQAAgFADgCQACgDAEAAIAFABIAAAGIgCgBIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgBAFIAAAGIAIAAIAAAGIgIAAIAAAig");
	this.shape_32.setTransform(-39.6,43.3,1.491,1.491);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AAUAdIgGgOIgbAAIgGAOIgHAAIAWg5IAJAAIAWA5gAgLAJIAXAAIgMgeg");
	this.shape_33.setTransform(-45.6,43.4,1.491,1.491);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AAAADIgFALIgFgEIAJgJIgNgBIACgGIAMAFIgDgMIAGAAIgCAMIAMgFIACAGIgNABIAJAJIgFAEg");
	this.shape_34.setTransform(-52.7,41.1,1.491,1.491);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAEIgGAQIgKgHIAOgMIgSgBIAEgKIAPAJIgEgSIALAAIgEASIAPgJIAEAKIgRABIANAMIgKAHg");
	this.shape_35.setTransform(164.9,21.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93CE1A").s().p("AgkA7QgPgHgHgRIAVgRQAGAMAKAHQAKAGANAAQAMAAAHgEQAGgEAAgGQAAgKgbgHIgFgBQgagGgKgIQgJgIAAgQQAAgSANgMQAPgKAWAAQATAAAOAGQAMAGAMAPIgUAQQgGgJgKgGQgLgEgKAAQgJgBgGAEQgGADAAAFQAAAJAbAHIALACQAXAHAJAIQAKAJAAAQQAAAUgQALQgPALgaAAQgXAAgPgJg");
	this.shape_36.setTransform(155.6,26.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgUAAIAAA2IgfAAIAAiBIA5AAQAbAAAMAJQAOAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgagMIAYAAQAMAAAFgDQAGgDAAgIQAAgIgGgDQgFgDgNAAIgXAAg");
	this.shape_37.setTransform(142.8,26.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93CE1A").s().p("AgoA3QgOgMAAgWIAAhXIAeAAIAABRQABAMAFAGQAHAFALAAQAMAAAGgFQAHgGAAgMIAAhRIAeAAIAABXQAAAWgOAMQgOAMgbAAQgaAAgOgMg");
	this.shape_38.setTransform(128.5,27);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_39.setTransform(114.3,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_40.setTransform(99.8,26.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AglBAIgBgCIAAgDQAAgOAGgLQAFgLANgLIADgCQAWgTAAgPQAAgJgEgDQgDgFgEAAQgFAAgDADQgDACAAAFIABAHIgXAKIgCgGIAAgGQAAgQAKgLQAKgKAPAAQAQAAALALQAKAKAAARQAAAKgFAJQgEAGgRAOQgMAJgGAHQgGAFgBAFIA1AAIAAAYg");
	this.shape_41.setTransform(83.2,27);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgOA/QACgaAJgcQAIgaAMgWIg0AAIAAgXIBHAAIAAAUQgMAXgGAZQgGAZgBAgg");
	this.shape_42.setTransform(73.6,27.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAZBBIgyhRIAABRIgdAAIAAiBIAfAAIAwBOIAAhOIAeAAIAACBg");
	this.shape_43.setTransform(57.6,26.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_44.setTransform(47.1,26.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_45.setTransform(36.5,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_46.setTransform(22.6,26.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_47.setTransform(12.8,26.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAfAAIAUBTIAThTIAeAAIghCBg");
	this.shape_48.setTransform(0.9,26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#93CE1A").s().p("AgrBBIAAiBIAfAAIAABnIA4AAIAAAag");
	this.shape_49.setTransform(163,4.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#93CE1A").s().p("AAiBBIgJgZIgzAAIgIAZIgfAAIAtiBIAlAAIAxCBgAgSAOIAiAAIgRg1g");
	this.shape_50.setTransform(150.3,4.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#93CE1A").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_51.setTransform(137.1,4.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_52.setTransform(127.2,4.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#93CE1A").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQAMAAAFgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_53.setTransform(118,4.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#93CE1A").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAtiBIAmAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_54.setTransform(104.2,4.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#93CE1A").s().p("AgqAxQgSgSAAgfQAAgeARgTQASgSAdAAQAUAAAOAJQAQAKAGARIgZANQgGgLgHgGQgJgFgJAAQgPAAgIALQgIALgBASQAAASAJALQAKALAOAAQAIAAAJgFQAIgFAHgLIAYAQQgLASgOAHQgNAIgTAAQgdAAgRgTg");
	this.shape_55.setTransform(91.1,4.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#93CE1A").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgHgFQgIgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAHAAAFgCQAFgBAGgEIAAgQIgcAAIAAgXIA6AAIAAAxQgLANgNAGQgNAGgQAAQgcAAgRgSg");
	this.shape_56.setTransform(72.9,4.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#93CE1A").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_57.setTransform(59.2,4.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_58.setTransform(48.7,4.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AAcBBIgihAIgZAbIAAAlIgfAAIAAiBIAfAAIAAA3IAxg3IAkAAIgpAsIAyBVg");
	this.shape_59.setTransform(39.4,4.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgVAAIAAA2IgeAAIAAiBIA5AAQAaAAAOAJQANAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgbgMIAYAAQANAAAFgDQAFgDABgIQAAgIgGgDQgFgDgNAAIgYAAg");
	this.shape_60.setTransform(25.2,4.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_61.setTransform(10.5,4.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAVBTIAUhTIAdAAIghCBg");
	this.shape_62.setTransform(-5.3,4.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgtAAIAAgbIB5AAIAAAbIgtAAIAABmg");
	this.shape_63.setTransform(-25.1,4.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBVAAIgFAYIgxAAIAAAaIAtAAIAAAXIgtAAIAAAfIAzAAIAFAZg");
	this.shape_64.setTransform(-36.3,4.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgIgFQgHgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAGAAAGgCQAFgBAFgEIAAgQIgbAAIAAgXIA6AAIAAAxQgKAMgPAHQgNAGgQAAQgbAAgRgSg");
	this.shape_65.setTransform(-49.2,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-55,-2,222.4,49.9), null);


(lib.pc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.term();
	this.instance.parent = this;
	this.instance.setTransform(-49,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(-49,0,130,151), null);


(lib.pc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgpictures();
	this.instance.parent = this;
	this.instance.setTransform(0,73,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(0,73,302.6,418.5), null);


(lib.logosmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AALgHIgEACQgBgDgCAAQgBgBgDAAQgCAAAAABQgCAAAAACQAAADAFABIABAAQAFACACABQACACAAADQAAADgDACQgCADgGAAQgDAAgCgDQgDgBgBgEIADgCQABADACACQACACACAAQACAAACgCQACAAAAgDQAAgDgHgCIgBAAIgFgCQgCgCAAgCQAAgEADgBQACgDADAAQAEAAADACQACACACACg");
	this.shape.setTransform(99.1,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFALQgEgBgBgEIAEgCQABADACACIADACQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgDgGgBIgBgBIgGgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgEADgCQABgCAEAAQAEABACABIAEAFIgEABIgCgDIgEgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAADAFABIAAAAQAGACACABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAAEgCACQgDACgFAAQgEAAgBgCg");
	this.shape_1.setTransform(99.1,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAKgDIAAAQIgEAAIAAgPQAAgEgBgBQAAgCgEAAQgCAAgDACQgBADAAADIAAAOIgEAAIAAgZIAEAAIAAAFQABgCACgCQACgBADAAQAEAAACACQABACAAAFg");
	this.shape_2.setTransform(96.2,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHANIAAgPQgBgEgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgCAAgCACQgDADAAADIAAAOIgDAAIAAgZIADAAIAAAFIAFgEQABgBACAAQAFAAABACQACACAAAFIAAAQg");
	this.shape_3.setTransform(96.2,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgNQAFAAAEAEQADAFAAAEQAAAGgDAEQgEAEgFAAQgFAAgDgEQgDgEAAgGQAAgFADgEQADgEAFAAgAAAgJQgCAAgDACQgCAEAAADQAAAEACAEQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgDQgBgCgEAAg");
	this.shape_4.setTransform(93.1,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFgBQAFABAEADQADAEAAAFQAAAGgDAEQgEAEgFgBQgFABgDgEgAgFgGQgCADAAADQAAADACAFQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgCQgBgDgEAAQgCAAgDADg");
	this.shape_5.setTransform(93.1,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAGIgDAAgAgBgHIADAAIAAAaIgDAAg");
	this.shape_6.setTransform(90.8,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBATIAAgZIADAAIAAAZgAgBgMIAAgFIADAAIAAAFg");
	this.shape_7.setTransform(90.8,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AABgQIAAALIAFAAIAAADIgFAAIAAAPIABADQAAABADAAIAAAAIACgBIAAAEIgCAAIgCAAQgDAAgBgBQgBgBAAgEIAAgQIgEAAIAAgDIAEAAIAAgJg");
	this.shape_8.setTransform(89.1,16.6,1,1,0,0,0,0,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADATQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgQIgFAAIAAgEIAFAAIAAgJIACgCIAAALIAGAAIAAAEIgGAAIAAAOIABADQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIABAAIABAAIAAADIgCABg");
	this.shape_9.setTransform(89.1,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgKgMIAFAAIAAAPQAAAEABABQABACADAAQACAAADgCQACgDAAgEIAAgNIAEAAIAAAZIgEAAIAAgFQgCADgCABQgCABgCAAQgFAAgBgCQgDgDAAgEg");
	this.shape_10.setTransform(86.6,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHALQgDgDAAgEIAAgQIAFAAIAAAPQAAAEABABQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAQACAAADgCQACgDAAgEIAAgNIAEAAIAAAZIgEAAIAAgFQgCADgCABQgCABgCAAQgFAAgBgCg");
	this.shape_11.setTransform(86.6,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAlIgDAAg");
	this.shape_12.setTransform(84.3,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_13.setTransform(84.3,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgNQAFAAAEAEQADAFAAAEQAAAGgDAEQgEAEgFAAQgFAAgDgEQgDgEAAgGQAAgFADgEQADgEAFAAgAAAgJQgCAAgDACQgCAEAAADQAAAEACAEQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgDQgBgCgEAAg");
	this.shape_14.setTransform(82,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFgBQAFABAEADQADAEAAAFQAAAGgDAEQgEAEgFgBQgFABgDgEgAgFgGQgCADAAADQAAADACAFQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgCQgBgDgEAAQgCAAgDADg");
	this.shape_15.setTransform(82,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AANgMIgDADQAAgBgEgDQgDgBgDAAIgEABQgBABAAACQAAACABACQACACAFACQABAAAEACIACAAQADACAAACQABABAAADQAAAFgDADQgFAEgFAAQgFAAgEgDQgDgCgCgFIADgDIAFAGQACACAEAAQAEAAACgCQACgBAAgDQAAgDgBgBQgBgBgHgDIAAAAQgFgBgCgCQgBAAgCgDIgBgEQAAgFAEgCQADgDAEAAQAEAAAEACQADACACADg");
	this.shape_16.setTransform(78.7,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIARQgDgCgCgFIADgDIAFAGQACACAEAAQADAAACgCQADgBAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAIgHgEIAAAAQgFgBgCgCIgDgDIgBgEQAAgFAEgCQADgDAEAAQAEAAADACQAEACACADIgDADQAAgBgFgDIgFgBIgEABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQACACAFACIAEACIADAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAEQAAAFgDADQgFAEgFAAQgFAAgEgDg");
	this.shape_17.setTransform(78.7,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAlIgDAAg");
	this.shape_18.setTransform(72.2,16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_19.setTransform(72.2,16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAKgDIAAAJIAAAEIACAAIABAAIAAADIgCABIgBAAQgCAAgBgBQgBgCAAgCQgDAEgBAAQgCABgCAAQgEAAgCgDQgCgCAAgDQAAgDACgCQABgBAEgCIADAAIAGgCIAAgBQAAgCgCgBQgCgBgCAAIgDABQgCAAgBADIgDgCQACgDACgCIAGgBQAFAAACADQACACAAAFgAAGgCIgIACIgDACIgBAEIABADQACACACAAQACAAACgCQADgDAAgDg");
	this.shape_20.setTransform(69.9,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAJANIgDgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgEADIgEABQgEAAgCgCQgCgCAAgEQAAgDACgBQACgBAEgCIACAAIAGgCIAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgEgBIgDABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABIgEgCIAFgFIAFgBQAFAAACACQACADAAAEIAAAKIAAAEIADAAIAAAAIAAADIgBAAgAgDAAIgDACIAAADIABAEQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQADAAACgCQACgDAAgDIAAgFg");
	this.shape_21.setTransform(70,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AABgQIAAALIAFAAIAAADIgFAAIAAAPIABADQABABACAAIAAAAIACgBIAAAEIgCAAIgCAAQgDAAgBgBQgBgBAAgEIAAgQIgEAAIAAgDIAEAAIAAgJg");
	this.shape_22.setTransform(67.5,16.6,1,1,0,0,0,0,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADATQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgQIgEAAIAAgEIAEAAIAAgJIADgCIAAALIAGAAIAAAEIgGAAIAAAOIABADIADABIABAAIABAAIAAADIgCABg");
	this.shape_23.setTransform(67.5,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAGIgDAAgAgBgHIADAAIAAAaIgDAAg");
	this.shape_24.setTransform(65.9,16.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBATIAAgZIADAAIAAAZgAgBgMIAAgFIADAAIAAAFg");
	this.shape_25.setTransform(65.9,16.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgGAEIAAAOIgEAAIAAgiIAEAAIAAAEIAEgEQAAgBADAAQAGAAACAEQADAEAAAGQAAAFgDAEQgCADgGAAIgDgBgAAAgOQgCAAgCADQgCAEAAADQAAAEACADQACADACAAQADAAACgDQACgCAAgEQAAgGgCgCQgBgDgEAAg");
	this.shape_26.setTransform(63.7,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLASIAAgiIAFAAIAAAEIADgEQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAFAAACADQAEAEAAAGQAAAGgEADQgCAEgFAAIgEgBIgDgEIAAAOgAgEgMQgCAEAAAEQAAAEACADQACADACAAQADAAACgDQACgCAAgFQAAgFgCgCQgCgDgDAAQgCAAgCACg");
	this.shape_27.setTransform(63.7,17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAJgDIAAAJIABAEIABAAIABAAIAAADIgBABIgBAAIgEgBIgBgEIgEAEQgBABgCAAQgEAAgDgDQgCgBAAgEQAAgDACgCQACgBAEgCIACAAIAGgCIAAAAIAAgBQAAgCgBgBIgEgBIgEABIgDADIgDgCQACgDADgCIAFgBQAFAAACADQACACAAAFgAAFgCIgIACIgDACIgBAEQAAACACABQABACACAAQACAAADgCQACgDAAgDg");
	this.shape_28.setTransform(60.5,17.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAJANIgDgBIgBgDIgEADIgDABQgEAAgDgCQgCgBAAgFQAAgDACgBQABgBAEgCIADAAIAFgCIABgBIAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgDgBIgEABIgDADIgDgCQABgDADgCIAGgBQAFAAACACQACADAAAEIAAAKIAAAEIACAAIABAAIAAADIgCAAgAgDAAIgDACIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQACAAACgCQACgDAAgDIAAgFg");
	this.shape_29.setTransform(60.6,17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAPgKIgEADQgDgEgCgBQgCgCgDAAQgFAAgDAEQgDAEAAAGQAAAHADAEQADAEAFAAQAEAAACgCQADgCACgDIADACQgCAFgEACQgEADgFAAQgGAAgFgGQgEgFAAgJQAAgIAEgFQAFgGAHAAQAEAAAEADQADABADAFg");
	this.shape_30.setTransform(57.3,16.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgJQAAgIAFgFQAEgGAHAAQAFAAADADQADABADAFIgEADQgCgEgCgBQgCgCgEAAQgEAAgDAEQgDAEAAAGQAAAHADAEQADAEAEAAQAEAAACgCIAFgFIAEACQgCAFgEACQgEADgFAAQgHAAgEgGg");
	this.shape_31.setTransform(57.3,16.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAIAEIgEAEIgEABQgFAAgCgEQgDgDAAgGQAAgGADgEQACgDAFAAQACAAACABIAEAEIAAgFIAEAAIAAAaQAAAFgDACQgEACgFAAQgEAAgCgCQgDgCAAgEIAEAAQAAACACACIADABQAEAAACgCQACgCAAgDgAABAGIACgBIACgCIACgDIABgDIgBgFIgBgCQAAgCgCgBIgDgBQgCAAgDADQgCACAAAFQAAAEACADQADADACAAg");
	this.shape_32.setTransform(49.7,17.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHAQQgCgCAAgEIAEAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADABQAEAAABgCQADgCAAgDIAAgEIgFAEIgDABQgFAAgCgEQgDgDAAgGQAAgGADgEQACgDAFAAIADABIAFAEIAAgFIADAAIAAAaQAAAFgCACQgEACgFAAQgEAAgDgCgAgEgLQgCACAAAFQAAAEACADQADADACAAIACgBIACgCIACgDIABgDIgBgFIgBgCQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgCgBQgCAAgDADg");
	this.shape_33.setTransform(49.7,17.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AALgDIAAAQIgFAAIAAgPQAAgEgBgBQgBgCgDAAQgCAAgCACQgCACAAAEIAAAOIgFAAIAAgZIAFAAIAAAFQABgDACgBQACgBADAAQAEAAACACQACACAAAFg");
	this.shape_34.setTransform(46.6,17);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAGANIAAgPQAAgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACQgCACAAAEIAAAOIgFAAIAAgZIAFAAIAAAFIADgEIAFgBQAEAAACACQACACAAAFIAAAQg");
	this.shape_35.setTransform(46.6,17);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAGIgDAAgAgBgHIADAAIAAAaIgDAAg");
	this.shape_36.setTransform(44.3,16.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgBATIAAgZIADAAIAAAZgAgBgMIAAgFIADAAIAAAFg");
	this.shape_37.setTransform(44.3,16.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgNgSIAEAAIAAAWIAKgKIAGAAIgIAHIAJASIgFAAIgGgPIgGAFIAAAKIgEAAg");
	this.shape_38.setTransform(42.6,16.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAGATIgGgPIgFAFIAAAKIgFAAIAAglIAFAAIAAAWIAJgKIAGAAIgIAHIAJASg");
	this.shape_39.setTransform(42.3,16.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAHgMIAAAEIgCAAQgDAAgCADQgBADAAAEIAAALIgFAAIAAgZIAEAAIAAAIIABAAQAAgEACgDQACgBACAAg");
	this.shape_40.setTransform(39.9,17);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGANIAAgZIAFAAIAAAIIAAAAQAAgEACgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIACAAIAAAEIgCAAQgDAAgCADQgBADAAAEIAAALg");
	this.shape_41.setTransform(39.9,17);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgNQAGAAADAEQADAEAAAFQAAAGgDAEQgDAEgGAAQgFAAgCgEQgEgEAAgGQAAgFAEgEQACgEAFAAgAAAgJQgCAAgDACQgCADAAAEQAAAFACADQADACACAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAg");
	this.shape_42.setTransform(37.2,17.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFgBQAGABADADQADAEAAAFQAAAHgDADQgDAEgGgBQgFABgDgEgAgFgGQgCACAAAEQAAAFACADQACACADAAQADAAADgCQACgDAAgFQAAgEgCgCQgDgDgDAAQgCAAgDADg");
	this.shape_43.setTransform(37.2,17.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgWgRIAFAAIAIAdIAIgdIAEAAIAIAdIAIgdIAEAAIgKAkIgFAAIgIgdIgHAdIgFAAg");
	this.shape_44.setTransform(33.3,16.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAIATIgIgeIgHAeIgFAAIgKglIAFAAIAIAdIAIgdIAEAAIAIAdIAIgdIAEAAIgKAlg");
	this.shape_45.setTransform(33.3,16.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1819").s().p("AmSAqIAAhTIMlAAIAABTg");
	this.shape_46.setTransform(65.5,16.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF141E").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_47.setTransform(26.6,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1819").s().p("AgYAbQgIgKAAgRQAAgPAJgLQAJgKAOABQAQAAAIAKQAJAJAAATIAAADIgtAAQABAJADADQAEAEAGAAQAFAAAEgCQADgCAEgHIANAIQgEAJgIAFQgIADgLAAQgOAAgKgJgAgIgSQgEAEAAAHIAAABIAYAAIAAgBQAAgIgCgDQgFgFgFAAQgGAAgCAFg");
	this.shape_48.setTransform(102.7,6.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1819").s().p("AgWAbQgJgKAAgRQAAgPAJgLQAKgKAOABQALAAAHAEQAHAFAFAJIgQAIQgCgHgDgCQgDgDgFAAQgHAAgDAFQgEAHAAAJQAAAKAEAHQAEAFAGAAQAFAAADgDQADgDACgGIAQAIQgFAKgHAEQgHAEgLAAQgOABgKgKg");
	this.shape_49.setTransform(95.4,6.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1819").s().p("AAMAkIAAgrQAAgIgDgCQgCgEgFAAQgFAAgFAFQgDAEAAAHIAAApIgTAAIAAhFIATAAIAAAMQAEgHAFgDQAEgDAIAAQALgBAEAHQAGAGAAAMIAAAug");
	this.shape_50.setTransform(87.5,6.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1819").s().p("AAMAhQgDgCgBgIQgFAIgDACQgEADgHAAQgKABgGgHQgHgFAAgKQAAgHAFgHQAEgEAHgCIAZgGIAAgEQAAgEgCgDQgEgCgDAAQgFAAgCACQgCABgEAFIgOgGQADgGAIgEQAGgDALAAQAPAAAGAFQAHAGAAAPIAAAVIABAHQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIACAAIAAAOIgHACIgGAAQgHAAgDgDgAAAAAQgPAEAAAJQAAADADAEQACACAEAAQAGABAEgFQADgEAAgIIAAgIg");
	this.shape_51.setTransform(79.5,6.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1819").s().p("AgJAjIgahFIATAAIAQAvIARgvIATAAIgaBFg");
	this.shape_52.setTransform(71.8,6.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1819").s().p("AgaApQgHgJAAgSQAAgPAHgKQAIgKANAAQAFAAAFADQAFACAFAGIAAgoIATAAIAABjIgTAAIAAgJQgFAGgFACQgFADgFAAQgOAAgHgKgAgJgCQgEAFAAALQAAAMAEAFQADAHAGAAQAEAAAEgDQADgCAEgFIAAgbQgEgFgDgCQgEgCgEAAQgFAAgEAGg");
	this.shape_53.setTransform(63.5,5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1819").s().p("AAaAyIgHgTIgnAAIgGATIgXAAIAihjIAdAAIAlBjgAgNALIAaAAIgOgpg");
	this.shape_54.setTransform(54.6,5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1819").s().p("AAMAkIAAgrQAAgHgDgDQgCgEgGAAQgFAAgDAFQgEADABAIIAAApIgUAAIAAhFIAUAAIAAAMQADgHAGgDQADgDAIAAQALgBAFAHQAFAFAAANIAAAug");
	this.shape_55.setTransform(44.9,6.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1819").s().p("AgJAyIAAhEIATAAIAABEgAgJgfIAAgSIATAAIAAASg");
	this.shape_56.setTransform(38.6,5.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1819").s().p("AghAyIAAhjIBDAAIgDATIgpAAIAAAXIAjAAIAAASIgjAAIAAAng");
	this.shape_57.setTransform(33.2,5.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E1819").s().p("AgGAfIAAgrIgIAAIAAgSIAdAAIAAA9g");
	this.shape_58.setTransform(26.5,7.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AgPguIAeAKIAABCQgOANgQAEg");
	this.shape_59.setTransform(13.6,13.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AgPAhIAAhIIAfAAIAABOIgGABQgMAAgNgHg");
	this.shape_60.setTransform(9.3,14.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#93CE1A").s().p("AgPgHIAAgPIAfAAIAAAsQgVgNgKgQg");
	this.shape_61.setTransform(5.1,15.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AARANQABgxgqgkQAEgGAAgMQBBAugSBCQgHAZgSAVQgQATgQAEQAugcABgyg");
	this.shape_62.setTransform(18.5,11.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1E1819").s().p("AgaBcQglgPgSgmQgSgmAOgmQAPgnAqgVQgiAUgKAjQgKAgANAfQAMAhAcAQQAeATAlgKQAQgEALgNQAVgYgDgoQASAhgPAcQgOAaghAJQgPAEgPAAQgRAAgSgGg");
	this.shape_63.setTransform(9.2,11.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3E3D3F").s().p("AAwAaQgEgdgxgJQhDgTAPhEQAEAgATAOQAKAIAxAUQAnAQgDAqQgDApgoAaQAhgvgDgbg");
	this.shape_64.setTransform(13.2,10);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF141E").s().p("AgKALQgGgEAAgHQAAgFAGgFQAFgGAFABQAHgBAEAGQAGAFAAAFQAAAHgGAEQgEAFgHABQgFgBgFgFg");
	this.shape_65.setTransform(13.8,2.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3E3D3F").s().p("AgaBZQgjgOgSgkQgRglANglQAOgoAngUQggAUgKAiQgJAeANAfQAMAgAbAQQAdASAjgJQARgGALgMQAWgYgDgmQAPAhgQAbQgOAZgfAJQgOAFgOAAQgRAAgRgHg");
	this.shape_66.setTransform(9.4,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logosmall, new cjs.Rectangle(0,0,106,21.4), null);


(lib.logobig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgNIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBQgIgDgDgCQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGg");
	this.shape.setTransform(97.4,58.1,0.695,0.695);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAWQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBIgLgFQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEg");
	this.shape_1.setTransform(97.5,58.1,0.695,0.695);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgHgDgEQgCgDgFAAQgFAAgEAEQgEAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAEAAQAIAAAFAEQADAEAAAKg");
	this.shape_2.setTransform(93.7,58,0.695,0.695);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgHgDgEQgCgDgFAAQgFAAgFAEQgDAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAFAAQAHAAAEAEQAEAEAAAKIAAAfg");
	this.shape_3.setTransform(93.7,58,0.695,0.695);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgFgHAAgAAAgZQALAAAGAHQAGAHAAALQAAAMgGAHQgGAHgLAAQgJAAgGgHQgHgIAAgLQAAgKAHgIQAHgHAIAAg");
	this.shape_4.setTransform(89.6,58.1,0.695,0.695);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQATQgGgIAAgLQAAgKAGgIQAIgHAIAAQALAAAFAHQAHAHAAALQAAAMgHAHQgFAHgLAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAEAFAGAAQAHAAADgFQAFgFAAgJQAAgIgFgFQgDgFgHAAQgGAAgEAFg");
	this.shape_5.setTransform(89.6,58.1,0.695,0.695);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgNIAHAAIAAAwIgHAAgAgDgiIAHAAIAAALIgHAAg");
	this.shape_6.setTransform(86.6,57.4,0.695,0.695);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_7.setTransform(86.6,57.4,0.695,0.695);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAFABIACAAIACgBIAAAHIgEABIgDAAQgGAAgCgDQgCgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRg");
	this.shape_8.setTransform(84.3,57.4,0.695,0.695,0,0,0,0,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_9.setTransform(84.3,57.4,0.695,0.695);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgTgYIAIAAIAAAdQAAAHACAEQACADAGAAQAGAAADgEQAEgFAAgHIAAgbIAIAAIAAAwIgIAAIAAgJQgDAGgEACQgDACgGAAQgHAAgEgEQgEgFAAgKg");
	this.shape_10.setTransform(81.1,58.1,0.695,0.695);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgKIAAgeIAIAAIAAAdQAAAHACADQACAEAGAAQAGAAADgFQAEgFAAgHIAAgaIAIAAIAAAwIgIAAIAAgKQgDAHgEABQgDADgGAAQgHAAgEgEg");
	this.shape_11.setTransform(81.1,58.1,0.695,0.695);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_12.setTransform(78,57.3,0.695,0.695);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_13.setTransform(78,57.3,0.695,0.695);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgSQgFAAgFAFQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAgAAAgZQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHQgGgHAAgMQAAgKAGgIQAHgHAJAAg");
	this.shape_14.setTransform(75,58.1,0.695,0.695);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQATQgGgHAAgMQAAgKAGgIQAHgHAJAAQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAQgFAAgFAFg");
	this.shape_15.setTransform(75,58.1,0.695,0.695);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAagYIgGAHQgFgGgEgCQgGgDgFAAQgFAAgCADQgEABAAAFQAAAFADABQADADAKAFIAKADIAFACQAEAEACADQABAEAAAEQAAAKgHAGQgGAGgNAAQgJAAgHgEQgHgEgDgJIAGgGQADAHAGAEQAFAEAHAAQAIAAADgEQAFgCAAgHQAAgDgDgDQgEgEgKgDIgBgCQgJgBgFgEQgEgEgBgCQgCgEAAgEQAAgHAGgGQAHgFAJAAQAIAAAGADQAGADAFAGg");
	this.shape_16.setTransform(70.6,57.3,0.695,0.695);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAhQgHgFgEgJIAHgGQADAIAFAEQAGADAHAAQAHAAAEgCQAEgDAAgGQAAgFgDgCQgDgEgLgEIgBgBQgIgBgFgEIgFgGQgCgDAAgFQAAgIAGgFQAGgFAJAAQAIAAAGADQAHADAEAGIgFAHQgFgGgEgDQgGgCgFAAQgFAAgDACQgDACAAAFQAAAFADABQACADALAEIAKAFIAEABQAEADACAEQACAEAAAFQAAAJgHAGQgHAGgMAAQgJAAgHgEg");
	this.shape_17.setTransform(70.6,57.3,0.695,0.695);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_18.setTransform(62.1,57.3,0.695,0.695);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_19.setTransform(62.1,57.3,0.695,0.695);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_20.setTransform(59.2,58.1,0.695,0.695);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_21.setTransform(59.2,58.1,0.695,0.695);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEACACIAFABIABAAIADgBIAAAHIgEABIgEAAQgGAAgBgDQgDgDAAgGIAAgfIgIAAIAAgGIAIAAIAAgRg");
	this.shape_22.setTransform(55.9,57.4,0.695,0.695,0,0,0,0,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_23.setTransform(55.9,57.4,0.695,0.695);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgNIAHAAIAAAwIgHAAgAgDgiIAHAAIAAALIgHAAg");
	this.shape_24.setTransform(53.8,57.4,0.695,0.695);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_25.setTransform(53.8,57.4,0.695,0.695);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgbQgFAAgEAFQgEAFAAAJQAAAJAEAFQADAFAGAAQAGAAAEgFQADgFAAgIQAAgKgDgFQgEgFgGAAgAgNAIIAAAaIgIAAIAAhCIAIAAIAAAJQADgFAEgCQAEgDAEAAQAJAAAGAHQAFAHAAAMQAAALgFAHQgFAHgKAAQgEAAgEgCQgEgDgDgFg");
	this.shape_26.setTransform(50.9,58.6,0.695,0.695);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAiIAAhCIAIAAIAAAIQADgEAEgCQAEgDAEAAQAJAAAGAHQAFAGAAANQAAALgFAHQgFAGgKAAQgEAAgEgBQgEgDgDgFIAAAagAgJgWQgEAFAAAJQAAAJAEAGQADAEAGAAQAGAAAEgEQADgGAAgIQAAgKgDgEQgEgGgGAAQgFAAgEAFg");
	this.shape_27.setTransform(50.9,58.6,0.695,0.695);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_28.setTransform(46.8,58.1,0.695,0.695);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_29.setTransform(46.8,58.1,0.695,0.695);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAcgUIgHAFQgFgHgDgCQgFgEgGAAQgKAAgFAIQgGAHAAANQAAANAGAHQAGAIAJAAQAHAAAFgDQAFgEADgGIAHAFQgEAJgHAEQgHAEgKAAQgNAAgJgKQgIgKAAgRQAAgQAIgKQAJgKAOAAQAJAAAGAEQAHAEAEAIg");
	this.shape_30.setTransform(42.5,57.3,0.695,0.695);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgQAJgKQAIgKAOAAQAJAAAHAEQAHAEADAIIgHAFQgEgHgEgDQgFgCgGAAQgJAAgGAHQgGAIAAAMQAAANAGAHQAGAIAKAAQAGAAAFgDQAGgEADgGIAHAEQgFAJgHAFQgGAEgKAAQgNAAgJgKg");
	this.shape_31.setTransform(42.5,57.3,0.695,0.695);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAALIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGQgDgEgCgBQgCgBgEAAQgFAAgEAFQgDAGAAAIQAAAIADAGQAEAFAFAAgAAOAHQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGg");
	this.shape_32.setTransform(32.5,58.7,0.695,0.695);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAeQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGIAAgJQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFgAgJgWQgDAGAAAIQAAAIADAGQAEAFAFAAIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGIgFgFQgCgBgEAAQgFAAgEAFg");
	this.shape_33.setTransform(32.5,58.7,0.695,0.695);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJg");
	this.shape_34.setTransform(28.5,58,0.695,0.695);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJIAAAfg");
	this.shape_35.setTransform(28.5,58,0.695,0.695);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgNIAHAAIAAAwIgHAAgAgDgiIAHAAIAAALIgHAAg");
	this.shape_36.setTransform(25.4,57.4,0.695,0.695);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_37.setTransform(25.4,57.4,0.695,0.695);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgWgiIAIAAIAAAqIATgVIALAAIgQAPIASAhIgJAAIgNgbIgKAKIAAARIgIAAg");
	this.shape_38.setTransform(22.9,57.3,0.695,0.695);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAkIgNgcIgKAKIAAASIgIAAIAAhGIAIAAIAAAqIATgVIAKAAIgPAPIARAig");
	this.shape_39.setTransform(22.7,57.3,0.695,0.695);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AANgYIAAAJIgDAAIgBAAQgGAAgDAFQgDAFAAAKIAAAUIgJAAIAAgwIAIAAIAAAOIAAAAQADgIACgEQADgDAFAAIADAAg");
	this.shape_40.setTransform(19.6,58,0.695,0.695);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAHAAIAAAOIABAAQACgIADgEQADgDAEAAIADAAIABAAIAAAJIgCAAIgCAAQgGAAgDAFQgDAFAAAKIAAAUg");
	this.shape_41.setTransform(19.6,58,0.695,0.695);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAgAAAgZQALAAAGAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHQgHgHAAgMQAAgLAHgHQAGgHAJAAg");
	this.shape_42.setTransform(16,58.1,0.695,0.695);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPATQgHgHAAgMQAAgLAHgHQAFgHAKAAQAKAAAHAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHgAgJgNQgFAFAAAIQAAAJAFAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgDAFg");
	this.shape_43.setTransform(16,58.1,0.695,0.695);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgrgiIAJAAIAPA4IAPg4IAJAAIAPA4IAPg4IAJAAIgTBGIgJAAIgQg5IgOA5IgKAAg");
	this.shape_44.setTransform(11,57.3,0.695,0.695);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPAkIgPg5IgPA5IgJAAIgThGIAJAAIAPA3IAPg3IAIAAIAQA3IAPg3IAJAAIgTBGg");
	this.shape_45.setTransform(11,57.3,0.695,0.695);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1819").s().p("Ar6BQIAAifIX1AAIAACfg");
	this.shape_46.setTransform(53.3,57.5,0.695,0.695);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF141E").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_47.setTransform(2.1,38.3,0.695,0.695);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1819").s().p("AgtAyQgQgRAAghQAAgfARgSQAQgTAcAAQAfAAAPATQAQAUABAjIAAAFIhXAAQABAQAIAHQAHAIALgBQAKAAAHgEQAHgEAHgLIAZAPQgJARgOAHQgOAIgWAAQgdAAgQgTgAgRgjQgHAIAAAOIAAABIAvAAIAAgCQAAgPgFgHQgHgHgLAAQgLgBgGAJg");
	this.shape_48.setTransform(102.2,44.7,0.695,0.695);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1819").s().p("AgqAyQgSgSAAggQAAgeASgTQASgTAcAAQAVAAAOAJQAOAIAIASIgfAPQgCgLgHgGQgHgGgJAAQgMAAgHALQgHAKAAAUQAAAUAHALQAIALAMAAQAJAAAGgGQAGgGADgLIAfAPQgIARgOAJQgOAJgVAAQgcAAgSgTg");
	this.shape_49.setTransform(92.6,44.7,0.695,0.695);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgLAAgHAIQgGAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAGgMALgIQAKgGANAAQATAAALAMQAKALAAAXIAABXg");
	this.shape_50.setTransform(82.2,44.6,0.695,0.695);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1819").s().p("AAXA/QgHgGAAgNQgJANgIAGQgKAGgMAAQgSAAgMgMQgLgLAAgRQAAgOAHgMQAJgKAMgDQAJgEAPgBQASgDAIgEIAAgIQgBgHgFgFQgFgDgIAAQgHAAgHADQgEADgGAJIgbgMQAHgOANgFQAPgHATAAQAdAAALAKQAMAMABAcIAAAoQAAALABADQADADAFAAIAFgBIAAAaIgXAFQgMAAgHgGgAAAAAQgdAIAAARQAAAIAEAEQAGAFAHABQAMgBAHgHQAGgKABgOIAAgQg");
	this.shape_51.setTransform(71.7,44.7,0.695,0.695);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1819").s().p("AgTBBIgxiBIAmAAIAeBZIAfhZIAmAAIgxCBg");
	this.shape_52.setTransform(61.6,44.7,0.695,0.695);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1819").s().p("AgyBNQgOgRAAghQAAggAOgSQAPgSAYAAQALAAAKAGQAJAEAJALIAAhLIAlAAIAAC7IglAAIAAgRQgJAKgJAGQgKAFgLAAQgYAAgPgTgAgSgFQgHALAAAVQAAAVAHALQAHAMAMAAQAHAAAHgEQAFgDAIgLIAAg0QgHgJgGgEQgGgEgIAAQgLgBgIAMg");
	this.shape_53.setTransform(50.7,42.9,0.695,0.695);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1819").s().p("AAyBeIgNgkIhLAAIgMAkIgsAAIBBi7IA2AAIBGC7gAgaAUIAyAAIgZhNg");
	this.shape_54.setTransform(38.9,42.7,0.695,0.695);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgMAAgFAIQgHAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAHgNAKgHQAKgGANAAQAUAAAKAMQAKALAAAXIAABXg");
	this.shape_55.setTransform(26.2,44.6,0.695,0.695);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1819").s().p("AgSBeIAAiBIAlAAIAACBgAgSg7IAAgiIAlAAIAAAig");
	this.shape_56.setTransform(17.9,42.7,0.695,0.695);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1819").s().p("AhABeIAAi7ICBAAIgHAjIhNAAIAAArIBDAAIAAAjIhDAAIAABKg");
	this.shape_57.setTransform(10.8,42.7,0.695,0.695);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E1819").s().p("AgMA7IAAhSIgPAAIAAgjIA3AAIAAB1g");
	this.shape_58.setTransform(2,45.2,0.695,0.695);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg5IgwgQIAACUQAbgGAVgVg");
	this.shape_59.setTransform(97.6,25.2,0.695,0.695);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AgXhKIAvAQIAABqQgUAVgbAFg");
	this.shape_60.setTransform(97.6,25.3,0.695,0.695);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg9IgwgBIAABzQAXAMAZgDg");
	this.shape_61.setTransform(92.9,26.4,0.695,0.695);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AgXA1IAAhzIAvABIAAB7IgIABQgUAAgTgKg");
	this.shape_62.setTransform(92.9,26.4,0.695,0.695);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAYglIgwAAIAAAYQAPAaAhAVg");
	this.shape_63.setTransform(88.3,27.1,0.695,0.695);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AgYgLIAAgYIAwAAIAABHQgggVgQgag");
	this.shape_64.setTransform(88.3,27,0.695,0.695);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AgdiUQACAUgIAJQBEA5gCBOQgCBQhIAtQAZgIAZgeQAcggALgoQAdhphohKg");
	this.shape_65.setTransform(102.8,23.2,0.695,0.695,0,0,0,0,-0.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#93CE1A").s().p("AAbAUQAChOhEg5QAIgJgCgUQBoBKgdBpQgLAogcAgQgZAegZAIQBIgtAChQg");
	this.shape_66.setTransform(103.1,23,0.695,0.695);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1E1819").ss(0.2,0,0,2.6).p("ACCgBQAFBAggAlQgSAUgaAIQg7APgvgdQgsgagUg0QgUgyAPgzQAQg3A2ggQhCAigXA9QgXA8AcA9QAeA9A6AWQAyAUA2gPQA0gQAVgoQAYgtgdg0g");
	this.shape_67.setTransform(92.9,22.5,0.695,0.695);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E1819").s().p("AgqCRQg6gXgeg8Qgcg9AXg8QAXg+BCgiQg2AggQA4QgPAyAUAzQAUAzAsAbQAvAcA7gOQAagIASgVQAggkgFhBQAdA1gYAsQgVApg0APQgYAHgXAAQgcAAgdgLg");
	this.shape_68.setTransform(92.9,22.7,0.695,0.695);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#3E3D3F").ss(0.2,0,0,2.6).p("AAngmQhOghgRgNQgdgWgGgyQgZBrBrAfQBNANAHAvQAGArg1BKQA/goAFhCQAFhCg+gZg");
	this.shape_69.setTransform(97.3,20.9,0.695,0.695);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3E3D3F").s().p("ABLApQgHgvhNgOQhrgeAZhrQAGAyAdAWQARAMBOAiQA+AZgFBBQgFBCg/ApQA1hKgGgrg");
	this.shape_70.setTransform(97.3,21,0.695,0.695);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF141E").ss(0.5,0,0,2.6).p("AAAgZQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHQgHgIAAgLQAAgKAHgHQAIgIAKAAg");
	this.shape_71.setTransform(97.9,13,0.695,0.695);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF141E").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_72.setTransform(97.9,13,0.695,0.695);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3E3D3F").s().p("AgqCMQg3gVgcg6Qgbg7AVg7QAVg+A+ggQgzAfgPA2QgOAxATAxQAUAyArAaQAuAcA3gOQAagIAUgVQAiglgFg9QAYA0gZArQgWAogyAPQgWAHgWAAQgbAAgcgMg");
	this.shape_73.setTransform(93.1,22.6,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobig, new cjs.Rectangle(0.1,9,107.4,54.1), null);


(lib.contacts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgGAAQgIAAgHADQgFAEgFAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAEAAIADAAIAAAKIgEACIgFAAQgHAAgDgEQgEgFAAgGQgHAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgSIgQAFg");
	this.shape.setTransform(218.8,53.6,0.883,0.883);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAALIgrA+IAsAAIAAAMg");
	this.shape_1.setTransform(211.3,53.6,0.883,0.883);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_2.setTransform(206,56.5,0.883,0.883);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAhQgLgOAAgTQAAgUALgMQALgNARAAQASAAALANQALAMAAAUQAAAVgLALQgLAOgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQALAAAHgKQAHgJAAgPQAAgOgHgKQgGgJgMAAQgLAAgGAJg");
	this.shape_3.setTransform(199.9,53.6,0.883,0.883);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAgQgKgNgBgTQABgTAKgNQALgNASAAQALABAKAFQAIAHAGAKIgNAHQgEgKgFgEQgFgFgIABQgLAAgGAJQgIAKABAOQgBAPAIAKQAGAJALAAQAIAAAFgEQAFgFAEgJIANAGQgGALgIAHQgKAFgMABQgQAAgMgOg");
	this.shape_4.setTransform(191.7,53.6,0.883,0.883);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_5.setTransform(185.8,56.5,0.883,0.883);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAhQgKgLAAgWQAAgVAKgLQALgNAQAAQASAAAKANQAKAMAAAVIAAADIg8AAQAAAOAHAIQAGAIAMAAQAGAAAGgEQAFgDAFgJIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgPgbQgGAHgBAOIAtAAQAAgOgGgHQgGgHgLAAQgKAAgFAHg");
	this.shape_6.setTransform(179.9,53.6,0.883,0.883);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAgQgLgMABgUQgBgUALgMQALgNARAAQANABAJAFQAIAHAFAKIgMAHQgDgKgGgEQgFgFgJABQgKAAgHAJQgGAKAAAOQAAAPAGAKQAIAJAJAAQAIAAAGgEQAGgFADgJIAMAGQgFALgJAHQgJAFgMABQgRAAgLgOg");
	this.shape_7.setTransform(172,53.6,0.883,0.883);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAtIAAg1QAAgMgDgGQgFgHgKAAQgJAAgIAIQgGAHAAAOIAAAxIgPAAIAAhWIAPAAIAAARQAEgJAIgGQAIgEAJAAQANAAAHAIQAGAHABASIAAA3g");
	this.shape_8.setTransform(163.5,53.5,0.883,0.883);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAFgFANgEIAKgCQAMgCAJgEIAAgDQAAgHgFgFQgFgDgGAAQgIAAgHADQgGAEgEAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAGAGQAIAIAAAQIAAAjQAAAIABACQACACAEAAIADAAIAAAKIgEACIgFAAQgHAAgEgEQgDgFAAgGQgHAIgHADQgHAEgHABQgNAAgIgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_9.setTransform(155.1,53.6,0.883,0.883);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGArIgghVIAPAAIAXBDIAYhDIAPAAIggBVg");
	this.shape_10.setTransform(147.3,53.6,0.883,0.883);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgVAJgLQAKgNAPAAQAIABAHAEQAHAEAFAIIAAg1IAOAAIAAB8IgOAAIAAgOQgHAJgFADQgHAFgIAAQgQAAgJgNgAgQgGQgGAHAAARQAAAQAGAJQAHAJAKAAIAHgBIAHgEQAFgGACgFQACgGAAgMQAAgMgCgGQgCgFgFgFQgEgDgDgBIgHgBQgLAAgGAJg");
	this.shape_11.setTransform(139,52.1,0.883,0.883);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgHAAQgHAAgHADQgGAEgDAHIgMgFQAHgLAIgEQAIgFANAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAFAAIACAAIAAAKIgFACIgEAAQgHAAgDgEQgFgFAAgGQgGAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_12.setTransform(130.9,53.6,0.883,0.883);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWAtIAAg1QAAgMgFgGQgEgHgJAAQgLAAgGAIQgHAHAAAOIAAAxIgOAAIAAhWIAOAAIAAARQAEgJAIgGQAIgEAIAAQAOAAAHAIQAHAHgBASIAAA3g");
	this.shape_13.setTransform(122.2,53.5,0.883,0.883);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_14.setTransform(115.7,52,0.883,0.883);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHBAIAAhKIgQAAIAAgLIAQAAIAAgVQAAgJAGgGQAEgGAKAAIAGABIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAHIAAAQIASAAIAAALIgSAAIAABKg");
	this.shape_15.setTransform(111.2,51.8,0.883,0.883);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_16.setTransform(106.8,52,0.883,0.883);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbBGQgNgEgKgIQgNgKgHgNQgGgNAAgRQAAgOAEgLQAFgMAIgKQAMgPARgIQARgIAVAAQAMAAAOAEQAMAEAJAHQALAIAFALQAGAKAAAOQAAAPgFAKQgFAMgLAIQgHAFgFACQgGACgIAAQgIAAgFgDQgEgDAAgHIAAgBQgEAHgHAEQgGADgHAAQgNAAgHgHQgHgIAAgNQAAgSAMgOQALgNAQAAQAIAAAFADQAFADADAHIAEgKIAMAAIgNAyIAAACQAAAEACACQADACADAAQAEAAAFgCIAJgGQAHgIADgIQAEgHAAgMQAAgVgQgOQgQgNgaAAQgLAAgJACQgMAEgFADQgRALgIAOQgJAQAAASQAAAPAFAKQAFALALAJQAJAGALAEQANADAKAAQAOAAAOgEQAMgEAMgIIAFAHQgMAJgOAFQgOAFgQAAQgOAAgOgEgAgQgOQgIALAAAPQAAAIAEAFQAEAFAHAAQAJAAAFgGQAHgFACgKIAFgSQgCgIgEgEQgFgEgGAAQgLAAgHALg");
	this.shape_17.setTransform(97.1,53.1,0.883,0.883);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAnQgIgHgEgNIAMgFQADAKAGAGQAGAEAJAAQAKAAAEgDQAFgEABgGQAAgLgWgFIgFgCQgOgEgEgFQgGgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAJAFAEALIgMADQgEgHgFgEQgFgDgIAAQgGAAgGADQgEADAAAGQAAAIAUAGIABABQASAFAGAFQAHAGAAAKQAAALgKAIQgKAIgPAAQgMAAgLgHg");
	this.shape_18.setTransform(85.8,53.6,0.883,0.883);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgVQAAgUAKgMQALgNAQAAQATAAAJANQAKALAAAWIAAADIg8AAQAAAPAHAHQAGAIALAAQAIAAAFgEQAGgEAEgIIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgQgbQgGAIAAANIAtAAQAAgOgGgHQgGgHgLAAQgKAAgGAHg");
	this.shape_19.setTransform(78.1,53.6,0.883,0.883);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_20.setTransform(72,51.9,0.883,0.883);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgFgDgIAAQgHAAgHADQgGAFgDAGIgLgFQAGgKAIgFQAIgFANAAQAPABAIAGQAHAJAAAPIAAAjQAAAIABACQACACAFAAIACAAIAAAKIgEACIgFAAQgHAAgDgEQgEgEgBgHQgGAIgHADQgGAEgIABQgMAAgJgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSQgGACgKADg");
	this.shape_21.setTransform(65.9,53.6,0.883,0.883);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVAnQgKgHgDgNIAMgFQACAKAHAGQAFAEAKAAQAJAAAFgDQAGgEAAgGQAAgLgWgFIgFgCQgOgFgFgEQgFgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAIAFAFALIgMADQgEgHgFgEQgFgDgIAAQgHAAgEADQgFADAAAGQAAAIAUAGIABABQARAFAHAFQAGAGAAAKQAAALgJAIQgJAIgRAAQgMAAgJgHg");
	this.shape_22.setTransform(57.9,53.6,0.883,0.883);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_23.setTransform(39.9,53.6,0.883,0.883);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_24.setTransform(34.8,51.9,0.883,0.883);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_25.setTransform(30,51.9,0.883,0.883);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#93CE1A").s().p("AAPApQgEgEgBgIQgFAHgFAFQgHAEgHABQgNAAgHgIQgJgIABgLQAAgKAFgHQAEgGAJgDIARgDIAQgEIAAgGQAAgFgEgCQgCgCgGgBQgFAAgEACQgDADgDAFIgTgIQAFgIAJgEQAHgEAPgBQAUABAHAGQAHAHAAATIAAAaIACAJQABACADAAIACAAIACAAIABARIgQAEQgJAAgEgFgAAAAAQgTAFABALQAAAFADAEQACADAGAAQAHAAAEgGQAFgEAAgLIAAgKg");
	this.shape_26.setTransform(23.5,53.6,0.883,0.883);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#93CE1A").s().p("AAqAtIAAg1QAAgKgDgEQgEgFgGABQgIgBgEAGQgFAFAAAKIAAAzIgXAAIAAg1QAAgKgDgEQgDgFgHABQgIgBgEAGQgEAFAAAKIAAAzIgZAAIAAhWIAZAAIAAAPQAEgJAHgEQAHgEAJAAQALAAAEAEQAHAFACAKQAFgKAHgFQAHgEAKAAQANAAAGAHQAHAIAAAPIAAA6g");
	this.shape_27.setTransform(12.2,53.5,0.883,0.883);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#93CE1A").s().p("AgpA+IAAh7IBRAAIgFAXIguAAIAAAZIArAAIAAAWIgrAAIAAAdIAwAAIAFAYg");
	this.shape_28.setTransform(1.3,51.9,0.883,0.883);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfA5IAAgCQAAgMAEgJQAGgJAMgKIAGgGQAKgIAEgEQAEgEACgGQACgFABgGQgBgJgFgHQgFgFgJAAQgHAAgGAFQgFAFAAAIIAAAFIADAGIgLAGQgCgEgBgDIgBgJQABgNAIgJQAJgJAOABQANAAAIAJQAKAIAAAOQgBAMgFAIQgGAJgPAMIgEACQgTAQgCALIA0AAIAAAMg");
	this.shape_29.setTransform(140.8,27.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVA0QgIgGgCgMIALgDQADAJAEAEQAFAFAHAAQAKAAAFgMQAGgLAAgXQgFAIgGADQgGAEgGAAQgNAAgIgKQgJgKAAgRQAAgRAJgLQAJgLAPAAQAQAAAJAPQAJAOAAAdQAAAdgJAPQgKAPgRAAQgMAAgHgHgAgOgoQgFAHAAANQAAAMAGAIQAFAHAIAAQAIAAAGgHQAFgHAAgLQAAgNgGgIQgFgIgIAAQgJAAgFAHg");
	this.shape_30.setTransform(132.5,28);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYArQgJgPAAgcQAAgbAJgPQAJgQAPAAQAQAAAJAQQAJAPAAAbQAAAcgJAPQgJAQgQAAQgPAAgJgQgAgOgjQgFAMAAAXQAAAXAFAMQAFAMAJAAQAKAAAFgMQAFgLAAgYQAAgXgFgMQgFgMgKAAQgJAAgFAMg");
	this.shape_31.setTransform(124.4,28);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAIA4IAAgaIgrAAIAAgNIAshIIAMAAIAABKIAOAAIAAALIgOAAIAAAagAgZATIAhAAIAAg1g");
	this.shape_32.setTransform(116.2,28);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AggA5IAAgCQAAgMAGgJQAFgJAMgKIAGgGQAKgIAEgEQAEgEADgGQACgFAAgGQAAgJgGgHQgFgFgJAAQgHAAgGAFQgFAFAAAIIABAFIACAGIgLAGQgCgEgBgDIgBgJQAAgNAJgJQAJgJAOABQANAAAIAJQAJAIAAAOQABAMgGAIQgGAJgPAMIgEACQgTAQgBALIAyAAIAAAMg");
	this.shape_33.setTransform(103.7,27.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVA0QgIgGgCgMIALgDQADAJAEAEQAFAFAHAAQAKAAAFgMQAGgLAAgXQgFAIgGADQgGAEgGAAQgNAAgIgKQgJgKAAgRQAAgRAJgLQAJgLAPAAQAQAAAJAPQAJAOAAAdQAAAdgJAPQgKAPgRAAQgMAAgHgHgAgOgoQgFAHAAANQAAAMAGAIQAFAHAIAAQAIAAAGgHQAFgHAAgLQAAgNgGgIQgFgIgIAAQgJAAgFAHg");
	this.shape_34.setTransform(95.5,28);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAIA4IAAgaIgrAAIAAgNIAshIIAMAAIAABKIAPAAIAAALIgPAAIAAAagAgZATIAhAAIAAg1g");
	this.shape_35.setTransform(87.4,28);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYArQgJgPAAgcQAAgbAJgPQAJgQAPAAQAQAAAJAQQAJAPAAAbQAAAcgJAPQgJAQgQAAQgPAAgJgQgAgOgjQgFAMAAAXQAAAXAFAMQAFAMAJAAQAKAAAFgMQAFgLAAgYQAAgXgFgMQgFgMgKAAQgJAAgFAMg");
	this.shape_36.setTransform(75,28);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAGA4IAAhaQgGAFgFAEQgGADgGADIAAgOQAIgDAHgGQAFgGAFgHIAKAAIAABvg");
	this.shape_37.setTransform(66.1,28);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYArQgJgPAAgcQAAgbAJgPQAJgQAPAAQAQAAAJAQQAJAPAAAbQAAAcgJAPQgJAQgQAAQgPAAgJgQgAgOgjQgFAMAAAXQAAAXAFAMQAFAMAJAAQAKAAAFgMQAFgLAAgYQAAgXgFgMQgFgMgKAAQgJAAgFAMg");
	this.shape_38.setTransform(58.6,28);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("AgLArIAAgbIAYAAIAAAbgAgLgPIAAgbIAYAAIAAAbg");
	this.shape_39.setTransform(39.7,29.6,0.883,0.883);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AgMA+IAAh7IAYAAIAAB7g");
	this.shape_40.setTransform(34.6,27.9,0.883,0.883);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AgdAhQgLgLAAgWQAAgVALgLQALgNASABQAUgBALANQAKANAAAXIAAADIg4AAQABAMAEADQAEAFAIABQAHAAAEgEQAFgBAEgJIARAKQgGALgJAFQgKAFgOABQgTAAgKgNgAgLgXQgEAGAAAJIAAABIAeAAIAAgCQAAgLgDgDQgFgFgHgBQgHAAgEAGg");
	this.shape_41.setTransform(28,29.6,0.883,0.883);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgOA+IAAhhIgrAAIAAgaIBzAAIAAAaIgrAAIAABhg");
	this.shape_42.setTransform(18.3,27.9,0.883,0.883);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVApQgEgEAAgHQgHAJgHADQgGADgIABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgGAAQgJAAgGADQgFADgFAIIgKgFQAGgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgEABIgFABQgGAAgEgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAKgBAHgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_43.setTransform(207.5,5.1,0.883,0.883);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAAKIgqA/IArAAIAAAMg");
	this.shape_44.setTransform(200,5.1,0.883,0.883);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_45.setTransform(194.7,7.9,0.883,0.883);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcAhQgLgNAAgUQAAgSALgOQALgMARAAQASAAALAMQALAMAAAUQAAAVgLAMQgLANgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQAMAAAGgJQAHgKAAgPQAAgOgHgKQgGgJgMAAQgKAAgHAJg");
	this.shape_46.setTransform(188.5,5.1,0.883,0.883);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaAhQgLgOABgTQgBgTALgNQAMgMAQAAQAMAAAKAFQAIAGAFAMIgMAGQgDgJgGgFQgFgEgIAAQgKAAgIAJQgGAKAAAOQAAAPAGAKQAIAKAKAAQAIgBAFgFQAGgDADgKIAMAGQgFAMgIAFQgKAHgMAAQgQAAgMgNg");
	this.shape_47.setTransform(180.4,5.1,0.883,0.883);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_48.setTransform(174.5,7.9,0.883,0.883);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAiQgKgMAAgWQAAgUAKgMQAKgMARAAQASAAAKAMQAKAMAAAVIAAADIg8AAQAAAOAGAJQAIAHALAAQAHAAAFgEQAFgDAFgIIAKAFQgFAMgIAEQgJAGgMAAQgSAAgKgMgAgQgaQgFAGgBAPIAtAAQAAgOgGgHQgGgIgLABQgKgBgGAIg");
	this.shape_49.setTransform(168.6,5.1,0.883,0.883);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZAhQgLgNAAgUQAAgUALgMQALgMAQAAQAMAAAJAFQAJAGAGAMIgNAGQgDgJgGgFQgFgEgJAAQgJAAgIAJQgGAKgBAOQABAPAGAKQAIAKAJAAQAJgBAFgFQAGgEADgJIANAGQgGAMgJAFQgJAHgMAAQgRAAgKgNg");
	this.shape_50.setTransform(160.7,5.1,0.883,0.883);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgDgHQgFgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgOAAIAAhVIAOAAIAAARQAEgJAIgGQAIgEAJAAQAOAAAGAIQAHAIAAAQIAAA3g");
	this.shape_51.setTransform(152.2,5,0.883,0.883);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAVApQgEgEgBgHQgGAJgHADQgGADgIABQgNAAgIgIQgHgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgHAAQgIAAgGADQgFADgEAIIgLgFQAGgLAIgEQAIgFANABQAQgBAGAIQAIAHAAAPIAAAkQAAAIABACQACACAEAAIACAAIABAAIAAALIgJACQgHAAgDgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAEAFQAFAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_52.setTransform(143.8,5.1,0.883,0.883);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHArIgfhVIAPAAIAXBEIAZhEIAOAAIggBVg");
	this.shape_53.setTransform(136,5.1,0.883,0.883);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgUAJgMQAJgNAQAAQAIAAAHAFQAFADAHAJIAAg0IAOAAIAAB7IgOAAIAAgPQgFAJgHAEQgHAEgIAAQgQAAgJgMgAgQgHQgGAJAAAQQAAARAGAIQAHAJAKAAIAHgBQAEgBADgDQAFgFACgGQACgGAAgMQAAgMgCgGQgCgFgFgFIgHgEIgHgCQgLAAgGAJg");
	this.shape_54.setTransform(127.7,3.5,0.883,0.883);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAUApQgDgEgBgHQgGAJgHADQgFADgJABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHALgCIAKgCQAOgEAHgDIAAgDQAAgHgFgEQgFgEgGAAQgKAAgFADQgGADgEAIIgLgFQAHgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgJACQgGAAgFgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_55.setTransform(119.6,5.1,0.883,0.883);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgEgHQgEgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgPAAIAAhVIAPAAIAAARQAEgJAIgGQAHgEAJAAQAOAAAHAIQAHAIAAAQIAAA3g");
	this.shape_56.setTransform(111,5,0.883,0.883);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_57.setTransform(104.4,3.5,0.883,0.883);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgHA/IAAhJIgQAAIAAgMIAQAAIAAgUQAAgKAGgFQAEgFAKAAIAGAAIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAIIAAAOIASAAIAAAMIgSAAIAABJg");
	this.shape_58.setTransform(99.9,3.3,0.883,0.883);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_59.setTransform(95.5,3.5,0.883,0.883);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_60.setTransform(91.5,7.9,0.883,0.883);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAWArIgWhDIgUBDIgOAAIgbhVIAOAAIAUBEIAWhEIAMAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_61.setTransform(83.8,5.1,0.883,0.883);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgUBDIgPAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_62.setTransform(72.2,5.1,0.883,0.883);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgVBDIgOAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_63.setTransform(60.7,5.1,0.883,0.883);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_64.setTransform(40.7,5.1,0.883,0.883);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#93CE1A").s().p("AgeAhQgLgMABgVQAAgUALgMQALgMASAAQAUAAAKAMQAMANgBAXIAAAEIg4AAQABAKAEAEQAFAGAHAAQAGgBAFgCQAEgCAFgJIARAKQgFAMgLAEQgIAGgPAAQgSgBgMgMgAgLgXQgFAFABAKIAAABIAeAAIAAgCQAAgJgDgGQgEgEgIAAQgIAAgDAFg");
	this.shape_65.setTransform(33.7,5.1,0.883,0.883);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#93CE1A").s().p("AAPAsIAAg0QAAgKgDgEQgDgEgHAAQgHAAgEAFQgFAGAAAJIAAAyIgYAAIAAhVIAYAAIAAAPQAFgIAHgFQAFgEAKAAQANAAAGAHQAHAHAAAQIAAA5g");
	this.shape_66.setTransform(24.9,5,0.883,0.883);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_67.setTransform(17.9,3.4,0.883,0.883);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAYAAIAAB7g");
	this.shape_68.setTransform(13.2,3.4,0.883,0.883);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#93CE1A").s().p("AAOAsIAAg0QAAgKgCgEQgDgEgHAAQgHAAgFAFQgDAFAAAKIAAAyIgZAAIAAhVIAZAAIAAAPQAEgJAGgEQAGgEAKAAQAMAAAHAHQAHAIAAAPIAAA5g");
	this.shape_69.setTransform(6.2,5,0.883,0.883);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#93CE1A").s().p("AgrAvQgSgTAAgcQAAgbASgTQARgSAaAAQAbAAARASQASASAAAcQAAAdgRASQgRASgcAAQgaAAgRgSgAgVgbQgJAKAAARQAAASAJAKQAJALANAAQAMAAAJgLQAKgLgBgRQABgQgKgLQgJgLgMAAQgNAAgJALg");
	this.shape_70.setTransform(-4.5,3.4,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.contacts, new cjs.Rectangle(-10,-2.3,232.3,61.9), null);


(lib.applynoq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAUBTIAVhTIAdAAIghCBg");
	this.shape.setTransform(109.6,13.7,0.936,0.936);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAxQgSgTAAgeQAAgdASgTQATgTAbAAQAcAAATATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQgBASAKAMQAJALANAAQAPAAAIgMQAKgLgBgSQABgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_1.setTransform(94.8,13.7,0.936,0.936);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_2.setTransform(81.3,13.7,0.936,0.936);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBBIAAgyIguhPIAhAAIAcA1IAeg1IAgAAIguBPIAAAyg");
	this.shape_3.setTransform(64.7,13.7,0.936,0.936);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIAgAAIAABnIA3AAIAAAag");
	this.shape_4.setTransform(54.8,13.7,0.936,0.936);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgbAAIAAAxgAgYgHIAYAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgYAAg");
	this.shape_5.setTransform(43.5,13.7,0.936,0.936);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAyAAQAfAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_6.setTransform(31.3,13.7,0.936,0.936);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAuiBIAlAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_7.setTransform(18.4,13.7,0.936,0.936);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93CE1A").s().p("EgidACIIAAkPMBE7AAAIAAEPg");
	this.shape_8.setTransform(220.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.applynoq, new cjs.Rectangle(0,0,441.2,27.2), null);


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
(lib.iFunAdvance_AdWords_250x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(125,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.141)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_1.setTransform(125,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.267)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_2.setTransform(125,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.384)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_3.setTransform(125,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.49)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_4.setTransform(125,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.588)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_5.setTransform(125,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.675)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_6.setTransform(125,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.753)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_7.setTransform(125,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.816)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_8.setTransform(125,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.875)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_9.setTransform(125,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.918)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_10.setTransform(125,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.953)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_11.setTransform(125,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.98)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_12.setTransform(125,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.996)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_13.setTransform(125,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_14.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},365).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// contacts
	this.instance = new lib.contacts();
	this.instance.parent = this;
	this.instance.setTransform(149.4,221.8,1,1,0,0,0,131.5,28.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264).to({_off:false},0).to({y:201.8,alpha:1},15,cjs.Ease.get(1)).wait(101));

	// txt-1
	this.instance_1 = new lib.txt1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(480.5,217.2,1,1,0,0,0,111.2,23.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:180.5},14,cjs.Ease.get(1)).wait(81).to({x:200.5,alpha:0},16,cjs.Ease.get(-1)).to({_off:true},1).wait(254));

	// achive
	this.instance_2 = new lib.achive();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.5,130.9,1.18,1.18,60,0,0,38.9,38.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({regX:38.8,rotation:0,x:204.4},14,cjs.Ease.get(1)).wait(52).to({regX:38.9,rotation:60,x:299.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(270));

	// logo-small
	this.instance_3 = new lib.logosmall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-88.8,20.4,1,1,0,0,0,53,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:63.2},14,cjs.Ease.get(1)).wait(215).to({x:43.2,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(135));

	// txt-2
	this.instance_4 = new lib.txt2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.5,214.9,1,1,0,0,0,118.9,16.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(125).to({_off:false},0).to({x:170.5,alpha:1},16,cjs.Ease.get(1)).wait(72).to({x:190.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(151));

	// logo-big
	this.instance_5 = new lib.logobig();
	this.instance_5.parent = this;
	this.instance_5.setTransform(68.9,61,1,1,0,0,0,76.6,38);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(249).to({_off:false},0).to({x:88.9,alpha:1},15,cjs.Ease.get(1)).wait(116));

	// Слой 17
	this.instance_6 = new lib.pc2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(405.5,114.5,1,1,0,0,0,98.1,114);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(236).to({_off:false},0).to({x:275.5},13,cjs.Ease.get(1)).wait(131));

	// apply noq
	this.instance_7 = new lib.applynoq();
	this.instance_7.parent = this;
	this.instance_7.setTransform(20.1,138.3,1,1,0,0,0,150.6,13.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249).to({_off:false},0).to({x:150.1,alpha:1},15,cjs.Ease.get(1)).wait(116));

	// Слой 18
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIg3BJIkHFeg");
	this.shape_15.setTransform(-92.8,20.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIhcB6ImPEtg");
	this.shape_16.setTransform(-71.8,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIh9CmIoPEBg");
	this.shape_17.setTransform(-52.4,20.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIicDQIqDDXg");
	this.shape_18.setTransform(-34.6,20.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIi4D0IrtCzg");
	this.shape_19.setTransform(-18.3,20.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIjREWItOCRg");
	this.shape_20.setTransform(-3.6,20.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIjoE1IujByg");
	this.shape_21.setTransform(9.6,20.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIj8FQIvwBXg");
	this.shape_22.setTransform(21.2,20.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIkOFnIwxBAg");
	this.shape_23.setTransform(31.3,20.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIkcF6IxqAtg");
	this.shape_24.setTransform(39.8,20.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIkoGLIyYAcg");
	this.shape_25.setTransform(46.8,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIkxGXIy7AQg");
	this.shape_26.setTransform(52.2,20.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.8)").s().p("AukjTIdJAAIk4GgI4RAHg");
	this.shape_27.setTransform(56.1,20.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.8)").s().p("AukjTIdJAAIk9GlI4MACg");
	this.shape_28.setTransform(58.5,20.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.8)").s().p("AqBDUIkjAAIAAmnIdJAAIk+Gng");
	this.shape_29.setTransform(59.2,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},235).wait(131));

	// Слой 19
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.004)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_30.setTransform(147.5,206.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.106)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_31.setTransform(147.5,206.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.204)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_32.setTransform(147.5,206.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.29)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_33.setTransform(147.5,206.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.373)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_34.setTransform(147.5,206.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.447)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_35.setTransform(147.5,206.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.514)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_36.setTransform(147.5,206.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.573)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_37.setTransform(147.5,206.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.627)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_38.setTransform(147.5,206.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.675)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_39.setTransform(147.5,206.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.71)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_40.setTransform(147.5,206.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.745)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_41.setTransform(147.5,206.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.769)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_42.setTransform(147.5,206.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.784)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_43.setTransform(147.5,206.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.796)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_44.setTransform(147.5,206.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.8)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_45.setTransform(147.5,206.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},264).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).wait(101));

	// Слой 16
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.8)").s().p("A3bFWIAyhEIHMpmMAm5AAAIAAKqg");
	this.shape_46.setTransform(450,215.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.8)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_47.setTransform(401.9,215.9);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.796)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_48.setTransform(100,215.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.784)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_49.setTransform(100,215.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.769)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_50.setTransform(100,215.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.745)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_51.setTransform(100,215.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.71)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_52.setTransform(100,215.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.675)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_53.setTransform(100,215.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.627)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_54.setTransform(100,215.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.573)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_55.setTransform(100,215.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.514)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_56.setTransform(100,215.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.447)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_57.setTransform(100,215.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.373)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_58.setTransform(100,215.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.29)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_59.setTransform(100,215.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.204)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_60.setTransform(100,215.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.106)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_61.setTransform(100,215.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.004)").s().p("A3bFWIH+qqMAmHAAAIAyAAIAAKqg");
	this.shape_62.setTransform(100,215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},14).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},185).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(15).to({_off:false},0).wait(1).to({x:357.4},0).wait(1).to({x:316.5},0).wait(1).to({x:279.1},0).wait(1).to({x:245.3},0).wait(1).to({x:215},0).wait(1).to({x:188.3},0).wait(1).to({x:165.1},0).wait(1).to({x:145.5},0).wait(1).to({x:129.5},0).wait(1).to({x:117},0).wait(1).to({x:108.1},0).wait(1).to({x:102.8},0).wait(1).to({x:101},0).wait(185).to({x:100},0).to({_off:true},1).wait(166));

	// Слой 20
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_63.setTransform(125,125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.863)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_64.setTransform(125,125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.737)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_65.setTransform(125,125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.62)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_66.setTransform(125,125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.514)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_67.setTransform(125,125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.416)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_68.setTransform(125,125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.329)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_69.setTransform(125,125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.255)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_70.setTransform(125,125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.188)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_71.setTransform(125,125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.129)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_72.setTransform(125,125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.086)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_73.setTransform(125,125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.051)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_74.setTransform(125,125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.024)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_75.setTransform(125,125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.008)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_76.setTransform(125,125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.004)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_77.setTransform(125,125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.004)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_78.setTransform(125,125);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.008)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_79.setTransform(125,125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.024)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_80.setTransform(125,125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.051)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_81.setTransform(125,125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.086)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_82.setTransform(125,125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.129)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_83.setTransform(125,125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.188)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_84.setTransform(125,125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.255)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_85.setTransform(125,125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.329)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_86.setTransform(125,125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.416)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_87.setTransform(125,125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.514)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_88.setTransform(125,125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.62)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_89.setTransform(125,125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.737)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_90.setTransform(125,125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.863)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_91.setTransform(125,125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_92.setTransform(125,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[]},1).to({state:[{t:this.shape_78}]},219).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).wait(131));

	// pc-1
	this.instance_8 = new lib.pc1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(124.7,83.5,0.84,0.84,0,0,0,151.1,226.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(125).to({regX:151.2,regY:226.7,scaleX:0.83,scaleY:0.83,x:124.9,y:98.4},16,cjs.Ease.get(-1)).to({_off:true},108).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,79.3,438.1,351.5);
// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/iFunAdvance_AdWords_250x250_atlas_.png", id:"iFunAdvance_AdWords_250x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;