(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"iFunAdvance_AdWords_300x250_atlas_", frames: [[0,0,350,484],[352,0,130,151]]}
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
	this.spriteSheet = ss["iFunAdvance_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.term = function() {
	this.spriteSheet = ss["iFunAdvance_AdWords_300x250_atlas_"];
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
	this.shape.setTransform(230.1,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93CE1A").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQARAAAbQAAAcgQARQgRARgaAAQgZAAgRgRgAgVgaQgHAKAAAQQAAARAHAKQAJALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgMAAgJALg");
	this.shape_1.setTransform(215.6,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAdAAIAABeIAyAAIAAAZg");
	this.shape_2.setTransform(204.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CE1A").s().p("AgoA8IAAh3IBRAAIgEAWIgxAAIAAAcIAqAAIAAAWIgqAAIAAAvg");
	this.shape_3.setTransform(195,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93CE1A").s().p("AAYA8IAAgzIgvAAIAAAzIgcAAIAAh3IAcAAIAAAvIAvAAIAAgvIAcAAIAAB3g");
	this.shape_4.setTransform(178.4,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAFAMAKAGQAJAGAMAAQAKAAAHgEQAGgDAAgGQAAgKgZgGIgFgBQgXgFgJgHQgJgIAAgOQAAgSAMgJQANgKAVAAQASAAAMAGQAMAGAKANIgSAPQgGgJgJgFQgJgEgKAAQgIAAgGADQgFADAAAFQAAAHAYAHIALACQAUAFAJAIQAJAJAAAOQAAARgOALQgPAKgYAAQgVAAgNgHg");
	this.shape_5.setTransform(165.6,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93CE1A").s().p("AAfA8IgHgXIgwAAIgHAXIgcAAIAph3IAiAAIAsB3gAgQANIAfAAIgQgxg");
	this.shape_6.setTransform(153.7,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AgnAtQgQgRAAgcQAAgcAQgRQAQgQAaAAQASAAAOAIQAOAJAFAPIgWANQgGgLgGgFQgIgFgJAAQgMAAgJAKQgHAKAAARQAAAQAIAKQAIAKANAAQAIAAAIgEQAJgGAFgIIAWAOQgKAQgNAHQgMAHgSAAQgZAAgRgRg");
	this.shape_7.setTransform(141.7,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA3QgNgIgHgPIATgQQAFAMAKAGQAJAGAMAAQAJAAAIgEQAGgDAAgGQAAgKgZgGIgEgBQgYgFgJgHQgJgIAAgOQAAgSAMgJQAOgKAUAAQASAAAMAGQAMAGAJANIgRAPQgFgJgKgFQgIgEgLAAQgIAAgFADQgGADAAAFQAAAHAZAHIAKACQAVAFAIAIQAJAIgBAPQABASgOAKQgOAKgZAAQgUAAgOgHg");
	this.shape_8.setTransform(125.1,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKATIAGgLIABgJIAAgBIgIAAIAAgXIAXAAIAAAXQAAAGgDAIQgEAHgGAGg");
	this.shape_9.setTransform(117.1,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOA8IAAguIgqhJIAeAAIAaAxIAbgxIAeAAIgrBJIAAAug");
	this.shape_10.setTransform(109.5,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA8IgIgXIgwAAIgHAXIgdAAIAph3IAjAAIAtB3gAgRANIAgAAIgQgxg");
	this.shape_11.setTransform(98,26.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8IAAh3IA0AAQAYAAAPAQQAOAQAAAbQAAASgFAMQgFANgKAIQgGAEgHADQgGACgOAAgAgYAjIAVAAQANAAAGgJQAIgJAAgRQAAgOgIgKQgFgJgLAAIgYAAg");
	this.shape_12.setTransform(86,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQASAAAaQAAAcgQARQgQARgbAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAJALALAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgLAAgJALg");
	this.shape_13.setTransform(72.5,26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_14.setTransform(59.9,26.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAtQgQgRAAgcQAAgaAQgSQARgRAZAAQAaAAARARQARASAAAaQAAAcgRARQgRARgaAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAIALAMAAQAOAAAIgLQAIgLAAgQQAAgPgIgLQgIgLgOAAQgMAAgIALg");
	this.shape_15.setTransform(43.1,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_16.setTransform(30.5,26.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA8IgvhLIAABLIgaAAIAAh3IAcAAIAtBHIAAhHIAaAAIAAB3g");
	this.shape_17.setTransform(18,26.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAcAAIAAB3g");
	this.shape_18.setTransform(8.4,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgHAAgOQAAgRANgKQANgLAUABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_19.setTransform(231.8,6.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93CE1A").s().p("AgnA8IAAh3IBNAAIgEAXIgtAAIAAAYIApAAIAAAUIgpAAIAAAdIAuAAIAFAXg");
	this.shape_20.setTransform(221.6,6.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAcAAIAABfIAzAAIAAAYg");
	this.shape_21.setTransform(211.9,6.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#93CE1A").s().p("AAgA8IgIgXIgvAAIgIAXIgcAAIAph3IAiAAIAtB3gAgQANIAgAAIgRgxg");
	this.shape_22.setTransform(200.3,6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAJAHAMgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgGAAgPQAAgRANgKQANgLAUABQASAAAMAFQALAGALAOIgSAPQgGgJgIgFQgJgEgLgBQgIAAgFAEQgGADAAAEQAAAJAZAFIAKADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_23.setTransform(188.1,6.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgFAAQgXgHgJgHQgJgHAAgOQAAgRANgKQAMgLAVABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQATAFAKAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_24.setTransform(171.8,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93CE1A").s().p("AgKATIAGgLQABgEAAgFIAAAAIgIAAIAAgXIAXAAIAAAVQAAAIgEAHQgDAHgGAGg");
	this.shape_25.setTransform(163.8,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#93CE1A").s().p("AATA8IgThRIgTBRIgcAAIgeh3IAbAAIASBNIAShNIAcAAIATBNIAShNIAbAAIgfB3g");
	this.shape_26.setTransform(153.8,6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARATAAAZQAAAbgRASQgRARgaABQgZgBgRgRgAgUgaQgJALAAAPQAAAQAJALQAIALAMAAQANAAAIgLQAJgKAAgRQAAgQgJgKQgIgLgNABQgMgBgIALg");
	this.shape_27.setTransform(139.3,6.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#93CE1A").s().p("AAWA8IgbgxIgTAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgHAIQgHAHgMACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgMAAIgVAAg");
	this.shape_28.setTransform(127,6.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#93CE1A").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgGAIQgIAHgNACIAgA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgGgCQgFgDgKAAIgWAAg");
	this.shape_29.setTransform(114.5,6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93CE1A").s().p("AgpAtQgRgSAAgbQAAgaARgSQAQgRAZAAQAZAAASARQAQASAAAaQAAAbgQASQgQARgbABQgZgBgQgRgAgUgaQgJAKAAAQQAAARAJAKQAIALAMAAQANAAAJgLQAIgLAAgQQAAgPgIgLQgJgLgNABQgMgBgIALg");
	this.shape_30.setTransform(101,6.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#93CE1A").s().p("AAkA8IAAhjIgZBjIgVAAIgYhlIAABlIgZAAIAAh3IAqAAIASBLIARhLIAqAAIAAB3g");
	this.shape_31.setTransform(86.8,6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARASAAAaQgBAbgQASQgSARgZABQgZgBgRgRgAgUgaQgIAKAAAQQAAARAIAKQAIALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOABQgLgBgJALg");
	this.shape_32.setTransform(72.6,6.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93CE1A").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_33.setTransform(60,6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYA8IguhKIAABKIgbAAIAAh3IAcAAIAtBIIAAhIIAaAAIAAB3g");
	this.shape_34.setTransform(43.2,6.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQANAIAAASQgBAMgGAJQgHAHgNACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgLAAIgWAAg");
	this.shape_35.setTransform(31,6.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglAyQgNgKAAgVIAAhPIAdAAIAABJQgBALAGAGQAFAFALAAQAKAAAHgFQAFgFAAgMIAAhJIAdAAIAABPQAAAVgOAKQgNALgYAAQgYAAgNgLg");
	this.shape_36.setTransform(17.8,6.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_37.setTransform(5.5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,237.9,33.1), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AgDAFIAAgJIAHAAIAAAJg");
	this.shape.setTransform(221.5,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5D5D").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAFgGAHAAQADAAADACQAEACACAEIAAgZIAHAAIAAA6IgHAAIAAgHQgCAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAEAAIAEgBIADgCQACgCABgDQABgCAAgGQAAgHgBgCIgDgEIgDgCIgEgBQgEAAgDAFg");
	this.shape_1.setTransform(218,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_2.setTransform(213.6,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D5D5D").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_3.setTransform(209.6,44.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("AgDAdIAAgoIAGAAIAAAogAgDgTIAAgJIAGAAIAAAJg");
	this.shape_4.setTransform(206.6,43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_5.setTransform(203.3,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AgLAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAFAAAFACQAFAEACAFIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgDAFAAAGQAAAHADAFQADAEAEAAQADAAAEgCQACgCACgEIAGACQgDAGgEADQgDACgHAAQgIAAgEgFg");
	this.shape_6.setTransform(199.1,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_7.setTransform(194.8,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQADgHABgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_8.setTransform(191.6,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5D").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgFAAQgEAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQACgFAEgCQACgCAFAAQAGAAADAEQAEADAAAIIAAAag");
	this.shape_9.setTransform(185.4,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgCACgDIAFADQgDAFgEACQgDACgGAAQgJAAgEgFgAgHgMQgDADAAAHIAVAAQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_10.setTransform(180.8,44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_11.setTransform(176.6,44.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D5D5D").s().p("AgEAcQgEgBgDgFIAAAHIgGAAIAAg6IAGAAIAAAZQAEgFADgBQACgCADAAQAIAAAFAGQAEAGAAAJQAAAJgEAGQgFAGgIAAQgDAAgCgCgAgDgGIgDACIgEAEIgBAJIABAIIAEAFIADACIADABQAFAAADgEQADgFAAgHQAAgIgDgDQgDgFgFAAg");
	this.shape_12.setTransform(172.3,43.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_13.setTransform(165.6,44.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_14.setTransform(161.5,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D5D5D").s().p("AAPAVQgEAAgBgBQgCgCAAgEQgDAEgEACQgCABgEAAQgFAAgEgDQgEgDAAgGQAAgFADgDQADgDAGgBIAEgBQAHgBACgCIAAgBQAAgEgCgCQgCgBgDAAQgEAAgDABQgCACgCADIgFgCQADgFAEgCQADgCAGAAQAHAAAEADQADAEAAAHIAAAQIABAFIACABIACAAIAAAFIgCAAgAAAAAIgGAAIgEADIgBAFQAAAEACACQADACADAAQAEAAADgDQADgDAAgFIAAgIQgDACgEABg");
	this.shape_15.setTransform(157.5,44.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5D5D").s().p("AAKAdIAAgZQAAgFgCgDQgCgCgFAAQgEAAgDADQgDADAAAGIAAAXIgHAAIAAg5IAHAAIAAAaQACgFAEgCQACgCAFAAQAGAAADADQAEAEAAAHIAAAag");
	this.shape_16.setTransform(152.9,43.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AgKASQgDgDgCgGIAFgCQACAEADADQACACAEAAQAEAAACgBQADgCAAgDQAAgFgKgDIgCgBQgGgBgDgCQgCgDAAgEQAAgFADgDQAFgDAFAAQAHAAADACQAEADACAFIgFABQgDgEgCgBQgCgCgEAAQgDAAgBACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAEAJADIABAAQAHACAEACQACAEAAAEQAAAFgDAEQgFADgIAAQgFAAgFgDg");
	this.shape_17.setTransform(146.4,44.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAFgDIAAARIAJAAIAAAFIgJAAIAAAYQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_18.setTransform(143,43.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D5D5D").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEADgDQADgCAEAAQAHAAADAEQADAEAAAHIAAAag");
	this.shape_19.setTransform(139.4,44.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_20.setTransform(134.9,44.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5D5D5D").s().p("AAWAVIAAgYQAAgFgCgEQgCgDgEAAQgEAAgDAEQgEAEAAAGIAAAWIgGAAIAAgYQAAgGgBgDQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEACgDQADgCAFAAQAGAAACADQABABACAGQADgFADgCQACgDAGAAQAGAAADAEQADAEAAAHIAAAag");
	this.shape_21.setTransform(129.2,44.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D5D5D").s().p("AgNARQgDgDAAgIIAAgaIAHAAIAAAYQAAAFACAEQACADAFAAQAEAAADgEQADgDAAgHIAAgWIAHAAIAAAoIgHAAIAAgIQgDAEgDADQgDACgEAAQgGAAgEgEg");
	this.shape_22.setTransform(123.2,44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D5D5D").s().p("AgMAQQgFgGAAgKQAAgIAFgGQAGgGAHAAQAGAAAEACQADADAEAGIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgEAEAAAHQAAAIAEAEQADAEAEAAQAEAAACgCQADgCACgEIAGACQgDAGgEADQgDACgHAAQgHAAgGgFg");
	this.shape_23.setTransform(118.7,44.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D5D5D").s().p("AgMAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAJAAAFAGQAFAFAAAJQAAAKgFAGQgFAFgJAAQgIAAgEgFgAgIgLQgDAGAAAFQAAAHADAFQADAEAFAAQAFAAADgEQAEgEAAgIQAAgHgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_24.setTransform(114.4,44.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5D5D5D").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAEgGAIAAQAEAAACACQADACAEAEIAAgZIAGAAIAAA6IgGAAIAAgHQgDAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAFAAIADgBIADgCIAEgFIABgIIgBgJIgEgEIgDgCIgDgBQgFAAgDAFg");
	this.shape_25.setTransform(109.6,43.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D5D5D").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_26.setTransform(104.3,43.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5D5D5D").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_27.setTransform(102,43.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D5D5D").s().p("AAPAVIgFgBQgCgDAAgDQgEAFgDABQgCABgEAAQgFAAgEgDQgEgEAAgFQAAgFADgDQAEgDAFgBIAEgBQAHgBADgCIAAgBQAAgDgDgDQgBgBgEAAQgDAAgDABQgDACgCADIgFgCQACgFAFgCQADgCAGAAQAIAAADADQADADAAAIIAAAQIABAFIADABIABAAIAAAFIgCAAgAAAAAIgFAAIgFADIgBAFQAAAEACACQACACAEAAQAEAAADgDQAEgDAAgFIAAgIIgIADg");
	this.shape_28.setTransform(98.8,44.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D5D5D").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQACgHACgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_29.setTransform(93.4,44.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_30.setTransform(89.5,44.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5D5D5D").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAGgDIAAARIAHAAIAAAFIgHAAIAAAYQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_31.setTransform(85.9,43.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D5D5D").s().p("AgDAeIAAgiIgHAAIAAgGIAHAAIAAgJQAAgFADgCQACgDAEAAIAFABIAAAGIgCgBIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgBAFIAAAGIAIAAIAAAGIgIAAIAAAig");
	this.shape_32.setTransform(83.4,43.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D5D5D").s().p("AAUAdIgGgOIgbAAIgGAOIgHAAIAWg5IAJAAIAWA5gAgLAJIAXAAIgMgeg");
	this.shape_33.setTransform(79.3,43.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D5D5D").s().p("AAAADIgFALIgFgEIAJgJIgNgBIACgGIAMAFIgDgMIAGAAIgCAMIAMgFIACAGIgNABIAJAJIgFAEg");
	this.shape_34.setTransform(74.5,42.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAEIgGAQIgKgHIAOgMIgSgBIAEgKIAPAJIgEgSIALAAIgEASIAPgJIAEAKIgRABIANAMIgKAHg");
	this.shape_35.setTransform(219.9,23.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93CE1A").s().p("AgkA7QgPgHgHgRIAVgRQAGAMAKAHQAKAGANAAQAMAAAHgEQAGgEAAgGQAAgKgbgHIgFgBQgagGgKgIQgJgIAAgQQAAgSANgMQAPgKAWAAQATAAAOAGQAMAGAMAPIgUAQQgGgJgKgGQgLgEgKAAQgJgBgGAEQgGADAAAFQAAAJAbAHIALACQAXAHAJAIQAKAJAAAQQAAAUgQALQgPALgaAAQgXAAgPgJg");
	this.shape_36.setTransform(210.6,28.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgUAAIAAA2IgfAAIAAiBIA5AAQAbAAAMAJQAOAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgagMIAYAAQAMAAAFgDQAGgDAAgIQAAgIgGgDQgFgDgNAAIgXAAg");
	this.shape_37.setTransform(197.8,28.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93CE1A").s().p("AgoA3QgOgMAAgWIAAhXIAeAAIAABRQABAMAFAGQAHAFALAAQAMAAAGgFQAHgGAAgMIAAhRIAeAAIAABXQAAAWgOAMQgOAMgbAAQgaAAgOgMg");
	this.shape_38.setTransform(183.5,29);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_39.setTransform(169.3,28.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_40.setTransform(154.8,28.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AglBAIgBgCIAAgDQAAgOAGgLQAFgLANgLIADgCQAWgTAAgPQAAgJgEgDQgDgFgEAAQgFAAgDADQgDACAAAFIABAHIgXAKIgCgGIAAgGQAAgQAKgLQAKgKAPAAQAQAAALALQAKAKAAARQAAAKgFAJQgEAGgRAOQgMAJgGAHQgGAFgBAFIA1AAIAAAYg");
	this.shape_41.setTransform(138.2,29);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgOA/QACgaAJgcQAIgaAMgWIg0AAIAAgXIBHAAIAAAUQgMAXgGAZQgGAZgBAgg");
	this.shape_42.setTransform(128.6,29.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAZBBIgyhRIAABRIgdAAIAAiBIAfAAIAwBOIAAhOIAeAAIAACBg");
	this.shape_43.setTransform(112.6,28.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_44.setTransform(102.1,28.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_45.setTransform(91.5,28.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_46.setTransform(77.6,28.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_47.setTransform(67.8,28.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAfAAIAUBTIAThTIAeAAIghCBg");
	this.shape_48.setTransform(55.9,28.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#93CE1A").s().p("AgrBBIAAiBIAfAAIAABnIA4AAIAAAag");
	this.shape_49.setTransform(218,6.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#93CE1A").s().p("AAiBBIgJgZIgzAAIgIAZIgfAAIAtiBIAlAAIAxCBgAgSAOIAiAAIgRg1g");
	this.shape_50.setTransform(205.3,6.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#93CE1A").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_51.setTransform(192.1,6.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_52.setTransform(182.2,6.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#93CE1A").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQAMAAAFgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_53.setTransform(173,6.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#93CE1A").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAtiBIAmAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_54.setTransform(159.2,6.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#93CE1A").s().p("AgqAxQgSgSAAgfQAAgeARgTQASgSAdAAQAUAAAOAJQAQAKAGARIgZANQgGgLgHgGQgJgFgJAAQgPAAgIALQgIALgBASQAAASAJALQAKALAOAAQAIAAAJgFQAIgFAHgLIAYAQQgLASgOAHQgNAIgTAAQgdAAgRgTg");
	this.shape_55.setTransform(146.1,6.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#93CE1A").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgHgFQgIgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAHAAAFgCQAFgBAGgEIAAgQIgcAAIAAgXIA6AAIAAAxQgLANgNAGQgNAGgQAAQgcAAgRgSg");
	this.shape_56.setTransform(127.9,6.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#93CE1A").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_57.setTransform(114.2,6.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_58.setTransform(103.7,6.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AAcBBIgihAIgZAbIAAAlIgfAAIAAiBIAfAAIAAA3IAxg3IAkAAIgpAsIAyBVg");
	this.shape_59.setTransform(94.4,6.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgVAAIAAA2IgeAAIAAiBIA5AAQAaAAAOAJQANAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgbgMIAYAAQANAAAFgDQAFgDABgIQAAgIgGgDQgFgDgNAAIgYAAg");
	this.shape_60.setTransform(80.2,6.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_61.setTransform(65.5,6.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAVBTIAUhTIAdAAIghCBg");
	this.shape_62.setTransform(49.7,6.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgtAAIAAgbIB5AAIAAAbIgtAAIAABmg");
	this.shape_63.setTransform(29.9,6.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBVAAIgFAYIgxAAIAAAaIAtAAIAAAXIgtAAIAAAfIAzAAIAFAZg");
	this.shape_64.setTransform(18.7,6.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgIgFQgHgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAGAAAGgCQAFgBAFgEIAAgQIgbAAIAAgXIA6AAIAAAxQgKAMgPAHQgNAGgQAAQgbAAgRgSg");
	this.shape_65.setTransform(5.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,222.4,46.6), null);


(lib.pc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.term();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(0,0,130,151), null);


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
	this.shape.setTransform(140,69.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAWQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBIgLgFQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEg");
	this.shape_1.setTransform(140.1,69.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgHgDgEQgCgDgFAAQgFAAgEAEQgEAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAEAAQAIAAAFAEQADAEAAAKg");
	this.shape_2.setTransform(134.7,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgHgDgEQgCgDgFAAQgFAAgFAEQgDAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAFAAQAHAAAEAEQAEAEAAAKIAAAfg");
	this.shape_3.setTransform(134.7,69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQALAAAGAHQAGAHAAALQAAAMgGAHQgGAHgLAAQgJAAgGgHQgHgIAAgLQAAgKAHgIQAHgHAIAAgAAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgFgHAAg");
	this.shape_4.setTransform(128.8,69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQATQgGgIAAgLQAAgKAGgIQAIgHAIAAQALAAAFAHQAHAHAAALQAAAMgHAHQgFAHgLAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAEAFAGAAQAHAAADgFQAFgFAAgJQAAgIgFgFQgDgFgHAAQgGAAgEAFg");
	this.shape_5.setTransform(128.8,69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_6.setTransform(124.5,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_7.setTransform(124.5,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAFABIACAAIACgBIAAAHIgEABIgDAAQgGAAgCgDQgCgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRg");
	this.shape_8.setTransform(121.2,68.1,1,1,0,0,0,0,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_9.setTransform(121.2,68.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgTgYIAIAAIAAAdQAAAHACAEQACADAGAAQAGAAADgEQAEgFAAgHIAAgbIAIAAIAAAwIgIAAIAAgJQgDAGgEACQgDACgGAAQgHAAgEgEQgEgFAAgKg");
	this.shape_10.setTransform(116.6,69.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgKIAAgeIAIAAIAAAdQAAAHACADQACAEAGAAQAGAAADgFQAEgFAAgHIAAgaIAIAAIAAAwIgIAAIAAgKQgDAHgEABQgDADgGAAQgHAAgEgEg");
	this.shape_11.setTransform(116.6,69.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_12.setTransform(112.1,68.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_13.setTransform(112.1,68.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHQgGgHAAgMQAAgKAGgIQAHgHAJAAgAAAgSQgFAAgFAFQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAg");
	this.shape_14.setTransform(107.8,69.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQATQgGgHAAgMQAAgKAGgIQAHgHAJAAQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAQgFAAgFAFg");
	this.shape_15.setTransform(107.8,69.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAagYIgGAHQgFgGgEgCQgGgDgFAAQgFAAgCADQgEABAAAFQAAAFADABQADADAKAFIAKADIAFACQAEAEACADQABAEAAAEQAAAKgHAGQgGAGgNAAQgJAAgHgEQgHgEgDgJIAGgGQADAHAGAEQAFAEAHAAQAIAAADgEQAFgCAAgHQAAgDgDgDQgEgEgKgDIgBgCQgJgBgFgEQgEgEgBgCQgCgEAAgEQAAgHAGgGQAHgFAJAAQAIAAAGADQAGADAFAGg");
	this.shape_16.setTransform(101.5,68.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAhQgHgFgEgJIAHgGQADAIAFAEQAGADAHAAQAHAAAEgCQAEgDAAgGQAAgFgDgCQgDgEgLgEIgBgBQgIgBgFgEIgFgGQgCgDAAgFQAAgIAGgFQAGgFAJAAQAIAAAGADQAHADAEAGIgFAHQgFgGgEgDQgGgCgFAAQgFAAgDACQgDACAAAFQAAAFADABQACADALAEIAKAFIAEABQAEADACAEQACAEAAAFQAAAJgHAGQgHAGgMAAQgJAAgHgEg");
	this.shape_17.setTransform(101.5,68.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_18.setTransform(89.2,68.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_19.setTransform(89.2,68.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_20.setTransform(85,69.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_21.setTransform(85,69.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEACACIAFABIABAAIADgBIAAAHIgEABIgEAAQgGAAgBgDQgDgDAAgGIAAgfIgIAAIAAgGIAIAAIAAgRg");
	this.shape_22.setTransform(80.4,68.1,1,1,0,0,0,0,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_23.setTransform(80.4,68.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_24.setTransform(77.3,68.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_25.setTransform(77.3,68.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgNAIIAAAaIgIAAIAAhCIAIAAIAAAJQADgFAEgCQAEgDAEAAQAJAAAGAHQAFAHAAAMQAAALgFAHQgFAHgKAAQgEAAgEgCQgEgDgDgFgAAAgbQgFAAgEAFQgEAFAAAJQAAAJAEAFQADAFAGAAQAGAAAEgFQADgFAAgIQAAgKgDgFQgEgFgGAAg");
	this.shape_26.setTransform(73.1,70);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAiIAAhCIAIAAIAAAIQADgEAEgCQAEgDAEAAQAJAAAGAHQAFAGAAANQAAALgFAHQgFAGgKAAQgEAAgEgBQgEgDgDgFIAAAagAgJgWQgEAFAAAJQAAAJAEAGQADAEAGAAQAGAAAEgEQADgGAAgIQAAgKgDgEQgEgGgGAAQgFAAgEAFg");
	this.shape_27.setTransform(73.1,70);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_28.setTransform(67.2,69.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_29.setTransform(67.2,69.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAcgUIgHAFQgFgHgDgCQgFgEgGAAQgKAAgFAIQgGAHAAANQAAANAGAHQAGAIAJAAQAHAAAFgDQAFgEADgGIAHAFQgEAJgHAEQgHAEgKAAQgNAAgJgKQgIgKAAgRQAAgQAIgKQAJgKAOAAQAJAAAGAEQAHAEAEAIg");
	this.shape_30.setTransform(61.1,68.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgQAJgKQAIgKAOAAQAJAAAHAEQAHAEADAIIgHAFQgEgHgEgDQgFgCgGAAQgJAAgGAHQgGAIAAAMQAAANAGAHQAGAIAKAAQAGAAAFgDQAGgEADgGIAHAEQgFAJgHAFQgGAEgKAAQgNAAgJgKg");
	this.shape_31.setTransform(61,68.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAALIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGQgDgEgCgBQgCgBgEAAQgFAAgEAFQgDAGAAAIQAAAIADAGQAEAFAFAAgAAOAHQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGg");
	this.shape_32.setTransform(46.6,70);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAeQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGIAAgJQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFgAgJgWQgDAGAAAIQAAAIADAGQAEAFAFAAIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGIgFgFQgCgBgEAAQgFAAgEAFg");
	this.shape_33.setTransform(46.6,70);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJg");
	this.shape_34.setTransform(40.9,69.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJIAAAfg");
	this.shape_35.setTransform(40.9,69.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_36.setTransform(36.5,68.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_37.setTransform(36.5,68.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgWgiIAIAAIAAAqIATgVIALAAIgQAPIASAhIgJAAIgNgbIgKAKIAAARIgIAAg");
	this.shape_38.setTransform(32.9,68.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAkIgNgcIgKAKIAAASIgIAAIAAhGIAIAAIAAAqIATgVIAKAAIgPAPIARAig");
	this.shape_39.setTransform(32.7,68.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AANgYIAAAJIgDAAIgBAAQgGAAgDAFQgDAFAAAKIAAAUIgJAAIAAgwIAIAAIAAAOIAAAAQADgIACgEQADgDAFAAIADAAg");
	this.shape_40.setTransform(28.1,69.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAHAAIAAAOIABAAQACgIADgEQADgDAEAAIADAAIABAAIAAAJIgCAAIgCAAQgGAAgDAFQgDAFAAAKIAAAUg");
	this.shape_41.setTransform(28.1,69.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQALAAAGAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHQgHgHAAgMQAAgLAHgHQAGgHAJAAgAAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAg");
	this.shape_42.setTransform(23,69.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPATQgHgHAAgMQAAgLAHgHQAFgHAKAAQAKAAAHAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHgAgJgNQgFAFAAAIQAAAJAFAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgDAFg");
	this.shape_43.setTransform(23,69.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgrgiIAJAAIAPA4IAPg4IAJAAIAPA4IAPg4IAJAAIgTBGIgJAAIgQg5IgOA5IgKAAg");
	this.shape_44.setTransform(15.8,68);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPAkIgPg5IgPA5IgJAAIgThGIAJAAIAPA3IAPg3IAIAAIAQA3IAPg3IAJAAIgTBGg");
	this.shape_45.setTransform(15.8,68.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1819").s().p("Ar6BQIAAifIX1AAIAACfg");
	this.shape_46.setTransform(76.5,68.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF141E").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_47.setTransform(3,40.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1819").s().p("AgtAyQgQgRAAghQAAgfARgSQAQgTAcAAQAfAAAPATQAQAUABAjIAAAFIhXAAQABAQAIAHQAHAIALgBQAKAAAHgEQAHgEAHgLIAZAPQgJARgOAHQgOAIgWAAQgdAAgQgTgAgRgjQgHAIAAAOIAAABIAvAAIAAgCQAAgPgFgHQgHgHgLAAQgLgBgGAJg");
	this.shape_48.setTransform(146.9,50);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1819").s().p("AgqAyQgSgSAAggQAAgeASgTQASgTAcAAQAVAAAOAJQAOAIAIASIgfAPQgCgLgHgGQgHgGgJAAQgMAAgHALQgHAKAAAUQAAAUAHALQAIALAMAAQAJAAAGgGQAGgGADgLIAfAPQgIARgOAJQgOAJgVAAQgcAAgSgTg");
	this.shape_49.setTransform(133.1,50);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgLAAgHAIQgGAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAGgMALgIQAKgGANAAQATAAALAMQAKALAAAXIAABXg");
	this.shape_50.setTransform(118.2,49.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1819").s().p("AAXA/QgHgGAAgNQgJANgIAGQgKAGgMAAQgSAAgMgMQgLgLAAgRQAAgOAHgMQAJgKAMgDQAJgEAPgBQASgDAIgEIAAgIQgBgHgFgFQgFgDgIAAQgHAAgHADQgEADgGAJIgbgMQAHgOANgFQAPgHATAAQAdAAALAKQAMAMABAcIAAAoQAAALABADQADADAFAAIAFgBIAAAaIgXAFQgMAAgHgGgAAAAAQgdAIAAARQAAAIAEAEQAGAFAHABQAMgBAHgHQAGgKABgOIAAgQg");
	this.shape_51.setTransform(103.1,50);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1819").s().p("AgTBBIgxiBIAmAAIAeBZIAfhZIAmAAIgxCBg");
	this.shape_52.setTransform(88.5,50);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1819").s().p("AgyBNQgOgRAAghQAAggAOgSQAPgSAYAAQALAAAKAGQAJAEAJALIAAhLIAlAAIAAC7IglAAIAAgRQgJAKgJAGQgKAFgLAAQgYAAgPgTgAgSgFQgHALAAAVQAAAVAHALQAHAMAMAAQAHAAAHgEQAFgDAIgLIAAg0QgHgJgGgEQgGgEgIAAQgLgBgIAMg");
	this.shape_53.setTransform(72.8,47.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1819").s().p("AAyBeIgNgkIhLAAIgMAkIgsAAIBBi7IA2AAIBGC7gAgaAUIAyAAIgZhNg");
	this.shape_54.setTransform(55.9,47.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgMAAgFAIQgHAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAHgNAKgHQAKgGANAAQAUAAAKAMQAKALAAAXIAABXg");
	this.shape_55.setTransform(37.7,49.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1819").s().p("AgSBeIAAiBIAlAAIAACBgAgSg7IAAgiIAlAAIAAAig");
	this.shape_56.setTransform(25.7,47.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1819").s().p("AhABeIAAi7ICBAAIgHAjIhNAAIAAArIBDAAIAAAjIhDAAIAABKg");
	this.shape_57.setTransform(15.4,47.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E1819").s().p("AgMA7IAAhSIgPAAIAAgjIA3AAIAAB1g");
	this.shape_58.setTransform(2.8,50.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg5IgwgQIAACUQAbgGAVgVg");
	this.shape_59.setTransform(140.4,21.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AgXhKIAvAQIAABqQgUAVgbAFg");
	this.shape_60.setTransform(140.4,22);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg9IgwgBIAABzQAXAMAZgDg");
	this.shape_61.setTransform(133.6,23.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AgXA1IAAhzIAvABIAAB7IgIABQgUAAgTgKg");
	this.shape_62.setTransform(133.6,23.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAYglIgwAAIAAAYQAPAaAhAVg");
	this.shape_63.setTransform(127,24.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AgYgLIAAgYIAwAAIAABHQgggVgQgag");
	this.shape_64.setTransform(127,24.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AgdiUQACAUgIAJQBEA5gCBOQgCBQhIAtQAZgIAZgeQAcggALgoQAdhphohKg");
	this.shape_65.setTransform(147.8,18.9,1,1,0,0,0,0,-0.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#93CE1A").s().p("AAbAUQAChOhEg5QAIgJgCgUQBoBKgdBpQgLAogcAgQgZAegZAIQBIgtAChQg");
	this.shape_66.setTransform(148.2,18.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1E1819").ss(0.2,0,0,2.6).p("ACCgBQAFBAggAlQgSAUgaAIQg7APgvgdQgsgagUg0QgUgyAPgzQAQg3A2ggQhCAigXA9QgXA8AcA9QAeA9A6AWQAyAUA2gPQA0gQAVgoQAYgtgdg0g");
	this.shape_67.setTransform(133.6,17.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E1819").s().p("AgqCRQg6gXgeg8Qgcg9AXg8QAXg+BCgiQg2AggQA4QgPAyAUAzQAUAzAsAbQAvAcA7gOQAagIASgVQAggkgFhBQAdA1gYAsQgVApg0APQgYAHgXAAQgcAAgdgLg");
	this.shape_68.setTransform(133.6,18.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#3E3D3F").ss(0.2,0,0,2.6).p("AAngmQhOghgRgNQgdgWgGgyQgZBrBrAfQBNANAHAvQAGArg1BKQA/goAFhCQAFhCg+gZg");
	this.shape_69.setTransform(139.8,15.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3E3D3F").s().p("ABLApQgHgvhNgOQhrgeAZhrQAGAyAdAWQARAMBOAiQA+AZgFBBQgFBCg/ApQA1hKgGgrg");
	this.shape_70.setTransform(139.8,15.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF141E").ss(0.5,0,0,2.6).p("AAAgZQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHQgHgIAAgLQAAgKAHgHQAIgIAKAAg");
	this.shape_71.setTransform(140.7,4.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF141E").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_72.setTransform(140.7,4.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3E3D3F").s().p("AgqCMQg3gVgcg6Qgbg7AVg7QAVg+A+ggQgzAfgPA2QgOAxATAxQAUAyArAaQAuAcA3gOQAagIAUgVQAiglgFg9QAYA0gZArQgWAogyAPQgWAHgWAAQgbAAgcgMg");
	this.shape_73.setTransform(133.8,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobig, new cjs.Rectangle(0,-1,154,77.3), null);


(lib.contacts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggA7IAAgBQAAgNAEgKQAGgJAMgMIAHgEQAJgJAGgEQAEgFACgFQACgGAAgGQAAgKgGgGQgFgGgJAAQgIAAgFAFQgGAGAAAIIABAGIADAGIgMAGIgDgJIgBgIQAAgOAKgJQAIgIAPAAQANgBAJAKQAKAJgBAPQAAALgFAKQgGAIgQAMIgEADQgTAQgDAMIA1AAIAAAMg");
	this.shape.setTransform(162.8,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA2QgHgGgDgNIANgDQACAJAEAFQAGAEAHAAQAKAAAGgLQAFgMAAgYQgEAIgHAEQgGAEgHAAQgNAAgJgLQgIgKAAgRQAAgTAJgLQAJgLAQAAQAQAAAKAPQAJAPAAAeQAAAegKAPQgJAQgSAAQgMAAgJgHgAgPgqQgFAIAAANQAAANAGAIQAFAHAJAAQAIAAAFgHQAHgHgBgMQABgNgHgIQgFgJgIAAQgJAAgGAHg");
	this.shape_1.setTransform(154.3,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAtQgJgQAAgdQAAgcAJgQQAJgQAQAAQARAAAJAQQAJAQAAAcQAAAdgJAQQgJAQgRAAQgQAAgJgQgAgOgkQgFAMAAAYQAAAYAFANQAFAMAJAAQAKAAAFgMQAFgMAAgZQAAgYgFgMQgFgMgKAAQgJAAgFAMg");
	this.shape_2.setTransform(145.9,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIA6IAAgaIgsAAIAAgOIAuhMIALAAIAABOIAQAAIAAAMIgQAAIAAAagAgZAUIAhAAIAAg2g");
	this.shape_3.setTransform(137.3,27.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA7IAAgBQAAgNAGgKQAFgJANgMIAGgEQAKgJAFgEQADgFADgFQACgGAAgGQAAgKgGgGQgFgGgJAAQgIAAgGAFQgFAGAAAIIABAGIADAGIgMAGIgDgJIgBgIQAAgOAJgJQAKgIAOAAQAOgBAIAKQAJAJAAAPQABALgGAKQgGAIgQAMIgEADQgTAQgDAMIA1AAIAAAMg");
	this.shape_4.setTransform(124.4,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA2QgHgGgDgNIAMgDQADAJAEAFQAGAEAHAAQAKAAAFgLQAHgMgBgYQgEAIgHAEQgGAEgHAAQgOAAgHgLQgJgKAAgRQAAgTAJgLQAJgLAQAAQAQAAAKAPQAJAPAAAeQAAAegKAPQgKAQgSAAQgLAAgJgHgAgPgqQgFAIAAANQAAANAGAIQAFAHAJAAQAIAAAFgHQAHgHAAgMQAAgNgHgIQgFgJgIAAQgJAAgGAHg");
	this.shape_5.setTransform(116,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIA6IAAgaIgsAAIAAgOIAuhMIAMAAIAABOIAPAAIAAAMIgPAAIAAAagAgZAUIAhAAIAAg2g");
	this.shape_6.setTransform(107.5,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAtQgJgQAAgdQAAgcAJgQQAJgQAQAAQARAAAJAQQAJAQAAAcQAAAdgJAQQgJAQgRAAQgQAAgJgQgAgOgkQgFAMAAAYQAAAYAFANQAFAMAJAAQAKAAAFgMQAFgMAAgZQAAgYgFgMQgFgMgKAAQgJAAgFAMg");
	this.shape_7.setTransform(94.7,27.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGA6IAAhcQgGAFgFADIgNAGIAAgNQAJgFAGgFQAGgGAFgJIALAAIAAB0g");
	this.shape_8.setTransform(85.4,27.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAtQgJgQAAgdQAAgcAJgQQAJgQAQAAQARAAAJAQQAJAQAAAcQAAAdgJAQQgJAQgRAAQgQAAgJgQgAgOgkQgFAMAAAYQAAAYAFANQAFAMAJAAQAKAAAFgMQAFgMAAgZQAAgYgFgMQgFgMgKAAQgJAAgFAMg");
	this.shape_9.setTransform(77.6,27.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgGAAQgIAAgHADQgFAEgFAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAEAAIADAAIAAAKIgEACIgFAAQgHAAgDgEQgEgFAAgGQgHAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgSIgQAFg");
	this.shape_10.setTransform(259.1,49.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAALIgrA+IAsAAIAAAMg");
	this.shape_11.setTransform(250.6,49.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_12.setTransform(244.6,52.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAhQgLgOAAgTQAAgUALgMQALgNARAAQASAAALANQALAMAAAUQAAAVgLALQgLAOgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQALAAAHgKQAHgJAAgPQAAgOgHgKQgGgJgMAAQgLAAgGAJg");
	this.shape_13.setTransform(237.6,49.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAgQgKgNgBgTQABgTAKgNQALgNASAAQALABAKAFQAIAHAGAKIgNAHQgEgKgFgEQgFgFgIABQgLAAgGAJQgIAKABAOQgBAPAIAKQAGAJALAAQAIAAAFgEQAFgFAEgJIANAGQgGALgIAHQgKAFgMABQgQAAgMgOg");
	this.shape_14.setTransform(228.4,49.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_15.setTransform(221.7,52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAhQgKgLAAgWQAAgVAKgLQALgNAQAAQASAAAKANQAKAMAAAVIAAADIg8AAQAAAOAHAIQAGAIAMAAQAGAAAGgEQAFgDAFgJIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgPgbQgGAHgBAOIAtAAQAAgOgGgHQgGgHgLAAQgKAAgFAHg");
	this.shape_16.setTransform(215,49.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAgQgLgMABgUQgBgUALgMQALgNARAAQANABAJAFQAIAHAFAKIgMAHQgDgKgGgEQgFgFgJABQgKAAgHAJQgGAKAAAOQAAAPAGAKQAIAJAJAAQAIAAAGgEQAGgFADgJIAMAGQgFALgJAHQgJAFgMABQgRAAgLgOg");
	this.shape_17.setTransform(206.1,49.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVAtIAAg1QAAgMgDgGQgFgHgKAAQgJAAgIAIQgGAHAAAOIAAAxIgPAAIAAhWIAPAAIAAARQAEgJAIgGQAIgEAJAAQANAAAHAIQAGAHABASIAAA3g");
	this.shape_18.setTransform(196.5,49.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAFgFANgEIAKgCQAMgCAJgEIAAgDQAAgHgFgFQgFgDgGAAQgIAAgHADQgGAEgEAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAGAGQAIAIAAAQIAAAjQAAAIABACQACACAEAAIADAAIAAAKIgEACIgFAAQgHAAgEgEQgDgFAAgGQgHAIgHADQgHAEgHABQgNAAgIgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_19.setTransform(187,49.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGArIgghVIAPAAIAXBDIAYhDIAPAAIggBVg");
	this.shape_20.setTransform(178.1,49.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgVAJgLQAKgNAPAAQAIABAHAEQAHAEAFAIIAAg1IAOAAIAAB8IgOAAIAAgOQgHAJgFADQgHAFgIAAQgQAAgJgNgAgQgGQgGAHAAARQAAAQAGAJQAHAJAKAAIAHgBIAHgEQAFgGACgFQACgGAAgMQAAgMgCgGQgCgFgFgFQgEgDgDgBIgHgBQgLAAgGAJg");
	this.shape_21.setTransform(168.7,47.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgHAAQgHAAgHADQgGAEgDAHIgMgFQAHgLAIgEQAIgFANAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAFAAIACAAIAAAKIgFACIgEAAQgHAAgDgEQgFgFAAgGQgGAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_22.setTransform(159.6,49.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWAtIAAg1QAAgMgFgGQgEgHgJAAQgLAAgGAIQgHAHAAAOIAAAxIgOAAIAAhWIAOAAIAAARQAEgJAIgGQAIgEAIAAQAOAAAHAIQAHAHgBASIAAA3g");
	this.shape_23.setTransform(149.8,49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_24.setTransform(142.4,47.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHBAIAAhKIgQAAIAAgLIAQAAIAAgVQAAgJAGgGQAEgGAKAAIAGABIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAHIAAAQIASAAIAAALIgSAAIAABKg");
	this.shape_25.setTransform(137.2,47.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_26.setTransform(132.2,47.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbBGQgNgEgKgIQgNgKgHgNQgGgNAAgRQAAgOAEgLQAFgMAIgKQAMgPARgIQARgIAVAAQAMAAAOAEQAMAEAJAHQALAIAFALQAGAKAAAOQAAAPgFAKQgFAMgLAIQgHAFgFACQgGACgIAAQgIAAgFgDQgEgDAAgHIAAgBQgEAHgHAEQgGADgHAAQgNAAgHgHQgHgIAAgNQAAgSAMgOQALgNAQAAQAIAAAFADQAFADADAHIAEgKIAMAAIgNAyIAAACQAAAEACACQADACADAAQAEAAAFgCIAJgGQAHgIADgIQAEgHAAgMQAAgVgQgOQgQgNgaAAQgLAAgJACQgMAEgFADQgRALgIAOQgJAQAAASQAAAPAFAKQAFALALAJQAJAGALAEQANADAKAAQAOAAAOgEQAMgEAMgIIAFAHQgMAJgOAFQgOAFgQAAQgOAAgOgEgAgQgOQgIALAAAPQAAAIAEAFQAEAFAHAAQAJAAAFgGQAHgFACgKIAFgSQgCgIgEgEQgFgEgGAAQgLAAgHALg");
	this.shape_27.setTransform(121.3,49);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAnQgIgHgEgNIAMgFQADAKAGAGQAGAEAJAAQAKAAAEgDQAFgEABgGQAAgLgWgFIgFgCQgOgEgEgFQgGgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAJAFAEALIgMADQgEgHgFgEQgFgDgIAAQgGAAgGADQgEADAAAGQAAAIAUAGIABABQASAFAGAFQAHAGAAAKQAAALgKAIQgKAIgPAAQgMAAgLgHg");
	this.shape_28.setTransform(108.5,49.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgVQAAgUAKgMQALgNAQAAQATAAAJANQAKALAAAWIAAADIg8AAQAAAPAHAHQAGAIALAAQAIAAAFgEQAGgEAEgIIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgQgbQgGAIAAANIAtAAQAAgOgGgHQgGgHgLAAQgKAAgGAHg");
	this.shape_29.setTransform(99.7,49.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_30.setTransform(92.8,47.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgFgDgIAAQgHAAgHADQgGAFgDAGIgLgFQAGgKAIgFQAIgFANAAQAPABAIAGQAHAJAAAPIAAAjQAAAIABACQACACAFAAIACAAIAAAKIgEACIgFAAQgHAAgDgEQgEgEgBgHQgGAIgHADQgGAEgIABQgMAAgJgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSQgGACgKADg");
	this.shape_31.setTransform(86,49.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgVAnQgKgHgDgNIAMgFQACAKAHAGQAFAEAKAAQAJAAAFgDQAGgEAAgGQAAgLgWgFIgFgCQgOgFgFgEQgFgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAIAFAFALIgMADQgEgHgFgEQgFgDgIAAQgHAAgEADQgFADAAAGQAAAIAUAGIABABQARAFAHAFQAGAGAAAKQAAALgJAIQgJAIgRAAQgMAAgJgHg");
	this.shape_32.setTransform(76.9,49.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_33.setTransform(56.5,49.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_34.setTransform(50.7,47.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_35.setTransform(45.3,47.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93CE1A").s().p("AAPApQgEgEgBgIQgFAHgFAFQgHAEgHABQgNAAgHgIQgJgIABgLQAAgKAFgHQAEgGAJgDIARgDIAQgEIAAgGQAAgFgEgCQgCgCgGgBQgFAAgEACQgDADgDAFIgTgIQAFgIAJgEQAHgEAPgBQAUABAHAGQAHAHAAATIAAAaIACAJQABACADAAIACAAIACAAIABARIgQAEQgJAAgEgFgAAAAAQgTAFABALQAAAFADAEQACADAGAAQAHAAAEgGQAFgEAAgLIAAgKg");
	this.shape_36.setTransform(37.9,49.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AAqAtIAAg1QAAgKgDgEQgEgFgGABQgIgBgEAGQgFAFAAAKIAAAzIgXAAIAAg1QAAgKgDgEQgDgFgHABQgIgBgEAGQgEAFAAAKIAAAzIgZAAIAAhWIAZAAIAAAPQAEgJAHgEQAHgEAJAAQALAAAEAEQAHAFACAKQAFgKAHgFQAHgEAKAAQANAAAGAHQAHAIAAAPIAAA6g");
	this.shape_37.setTransform(25.1,49.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93CE1A").s().p("AgpA+IAAh7IBRAAIgFAXIguAAIAAAZIArAAIAAAWIgrAAIAAAdIAwAAIAFAYg");
	this.shape_38.setTransform(12.8,47.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("AgLArIAAgbIAYAAIAAAbgAgLgPIAAgbIAYAAIAAAbg");
	this.shape_39.setTransform(56.3,29);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AgMA+IAAh7IAYAAIAAB7g");
	this.shape_40.setTransform(50.5,27.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AgdAhQgLgLAAgWQAAgVALgLQALgNASABQAUgBALANQAKANAAAXIAAADIg4AAQABAMAEADQAEAFAIABQAHAAAEgEQAFgBAEgJIARAKQgGALgJAFQgKAFgOABQgTAAgKgNgAgLgXQgEAGAAAJIAAABIAeAAIAAgCQAAgLgDgDQgFgFgHgBQgHAAgEAGg");
	this.shape_41.setTransform(43,29);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgOA+IAAhhIgrAAIAAgaIBzAAIAAAaIgrAAIAABhg");
	this.shape_42.setTransform(32,27.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVApQgEgEAAgHQgHAJgHADQgGADgIABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgGAAQgJAAgGADQgFADgFAIIgKgFQAGgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgEABIgFABQgGAAgEgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAKgBAHgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_43.setTransform(246.3,8.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAAKIgqA/IArAAIAAAMg");
	this.shape_44.setTransform(237.8,8.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_45.setTransform(231.8,11.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcAhQgLgNAAgUQAAgSALgOQALgMARAAQASAAALAMQALAMAAAUQAAAVgLAMQgLANgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQAMAAAGgJQAHgKAAgPQAAgOgHgKQgGgJgMAAQgKAAgHAJg");
	this.shape_46.setTransform(224.8,8.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaAhQgLgOABgTQgBgTALgNQAMgMAQAAQAMAAAKAFQAIAGAFAMIgMAGQgDgJgGgFQgFgEgIAAQgKAAgIAJQgGAKAAAOQAAAPAGAKQAIAKAKAAQAIgBAFgFQAGgDADgKIAMAGQgFAMgIAFQgKAHgMAAQgQAAgMgNg");
	this.shape_47.setTransform(215.6,8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_48.setTransform(208.9,11.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAiQgKgMAAgWQAAgUAKgMQAKgMARAAQASAAAKAMQAKAMAAAVIAAADIg8AAQAAAOAGAJQAIAHALAAQAHAAAFgEQAFgDAFgIIAKAFQgFAMgIAEQgJAGgMAAQgSAAgKgMgAgQgaQgFAGgBAPIAtAAQAAgOgGgHQgGgIgLABQgKgBgGAIg");
	this.shape_49.setTransform(202.2,8.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZAhQgLgNAAgUQAAgUALgMQALgMAQAAQAMAAAJAFQAJAGAGAMIgNAGQgDgJgGgFQgFgEgJAAQgJAAgIAJQgGAKgBAOQABAPAGAKQAIAKAJAAQAJgBAFgFQAGgEADgJIANAGQgGAMgJAFQgJAHgMAAQgRAAgKgNg");
	this.shape_50.setTransform(193.3,8.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgDgHQgFgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgOAAIAAhVIAOAAIAAARQAEgJAIgGQAIgEAJAAQAOAAAGAIQAHAIAAAQIAAA3g");
	this.shape_51.setTransform(183.7,8.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAVApQgEgEgBgHQgGAJgHADQgGADgIABQgNAAgIgIQgHgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgHAAQgIAAgGADQgFADgEAIIgLgFQAGgLAIgEQAIgFANABQAQgBAGAIQAIAHAAAPIAAAkQAAAIABACQACACAEAAIACAAIABAAIAAALIgJACQgHAAgDgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAEAFQAFAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_52.setTransform(174.2,8.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHArIgfhVIAPAAIAXBEIAZhEIAOAAIggBVg");
	this.shape_53.setTransform(165.3,8.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgUAJgMQAJgNAQAAQAIAAAHAFQAFADAHAJIAAg0IAOAAIAAB7IgOAAIAAgPQgFAJgHAEQgHAEgIAAQgQAAgJgMgAgQgHQgGAJAAAQQAAARAGAIQAHAJAKAAIAHgBQAEgBADgDQAFgFACgGQACgGAAgMQAAgMgCgGQgCgFgFgFIgHgEIgHgCQgLAAgGAJg");
	this.shape_54.setTransform(155.9,6.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAUApQgDgEgBgHQgGAJgHADQgFADgJABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHALgCIAKgCQAOgEAHgDIAAgDQAAgHgFgEQgFgEgGAAQgKAAgFADQgGADgEAIIgLgFQAHgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgJACQgGAAgFgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_55.setTransform(146.8,8.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgEgHQgEgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgPAAIAAhVIAPAAIAAARQAEgJAIgGQAHgEAJAAQAOAAAHAIQAHAIAAAQIAAA3g");
	this.shape_56.setTransform(137,8.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_57.setTransform(129.6,6.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgHA/IAAhJIgQAAIAAgMIAQAAIAAgUQAAgKAGgFQAEgFAKAAIAGAAIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAIIAAAOIASAAIAAAMIgSAAIAABJg");
	this.shape_58.setTransform(124.4,6.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_59.setTransform(119.4,6.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_60.setTransform(114.9,11.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAWArIgWhDIgUBDIgOAAIgbhVIAOAAIAUBEIAWhEIAMAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_61.setTransform(106.2,8.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgUBDIgPAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_62.setTransform(93.1,8.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgVBDIgOAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_63.setTransform(80.1,8.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_64.setTransform(57.4,8.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#93CE1A").s().p("AgeAhQgLgMABgVQAAgUALgMQALgMASAAQAUAAAKAMQAMANgBAXIAAAEIg4AAQABAKAEAEQAFAGAHAAQAGgBAFgCQAEgCAFgJIARAKQgFAMgLAEQgIAGgPAAQgSgBgMgMgAgLgXQgFAFABAKIAAABIAeAAIAAgCQAAgJgDgGQgEgEgIAAQgIAAgDAFg");
	this.shape_65.setTransform(49.5,8.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#93CE1A").s().p("AAPAsIAAg0QAAgKgDgEQgDgEgHAAQgHAAgEAFQgFAGAAAJIAAAyIgYAAIAAhVIAYAAIAAAPQAFgIAHgFQAFgEAKAAQANAAAGAHQAHAHAAAQIAAA5g");
	this.shape_66.setTransform(39.5,8.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_67.setTransform(31.6,6.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAYAAIAAB7g");
	this.shape_68.setTransform(26.3,6.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#93CE1A").s().p("AAOAsIAAg0QAAgKgCgEQgDgEgHAAQgHAAgFAFQgDAFAAAKIAAAyIgZAAIAAhVIAZAAIAAAPQAEgJAGgEQAGgEAKAAQAMAAAHAHQAHAIAAAPIAAA5g");
	this.shape_69.setTransform(18.4,8.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#93CE1A").s().p("AgrAvQgSgTAAgcQAAgbASgTQARgSAaAAQAbAAARASQASASAAAcQAAAdgRASQgRASgcAAQgaAAgRgSgAgVgbQgJAKAAARQAAASAJAKQAJALANAAQAMAAAJgLQAKgLgBgRQABgQgKgLQgJgLgMAAQgNAAgJALg");
	this.shape_70.setTransform(6.2,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.contacts, new cjs.Rectangle(0,0,263.1,56.4), null);


(lib.applynoq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAUBTIAVhTIAdAAIghCBg");
	this.shape.setTransform(135.3,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAxQgSgTAAgeQAAgdASgTQATgTAbAAQAcAAATATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQgBASAKAMQAJALANAAQAPAAAIgMQAKgLgBgSQABgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_1.setTransform(119.5,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_2.setTransform(105.1,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBBIAAgyIguhPIAhAAIAcA1IAeg1IAgAAIguBPIAAAyg");
	this.shape_3.setTransform(87.4,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIAgAAIAABnIA3AAIAAAag");
	this.shape_4.setTransform(76.8,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgbAAIAAAxgAgYgHIAYAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgYAAg");
	this.shape_5.setTransform(64.8,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAyAAQAfAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_6.setTransform(51.6,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAuiBIAlAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_7.setTransform(37.9,13.6);

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
(lib.iFunAdvance_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.141)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.267)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.384)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.49)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.588)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.675)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.753)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.816)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.875)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.918)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.953)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.98)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.996)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

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
	this.instance_2.setTransform(349.5,130.9,1.18,1.18,60,0,0,38.9,38.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({regX:38.8,rotation:0,x:249.4},14,cjs.Ease.get(1)).wait(52).to({regX:38.9,rotation:60,x:349.5},15,cjs.Ease.get(-1)).to({_off:true},1).wait(270));

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
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("AukDUIAAmnIdJAAIk+Gng");
	this.shape_15.setTransform(-92.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1).to({x:-71.8},0).wait(1).to({x:-52.4},0).wait(1).to({x:-34.6},0).wait(1).to({x:-18.3},0).wait(1).to({x:-3.6},0).wait(1).to({x:9.6},0).wait(1).to({x:21.2},0).wait(1).to({x:31.3},0).wait(1).to({x:39.8},0).wait(1).to({x:46.8},0).wait(1).to({x:52.2},0).wait(1).to({x:56.1},0).wait(1).to({x:58.5},0).wait(1).to({x:59.2},0).to({_off:true},235).wait(131));

	// Слой 19
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.004)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_16.setTransform(147.5,206.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.106)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_17.setTransform(147.5,206.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.204)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_18.setTransform(147.5,206.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.29)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_19.setTransform(147.5,206.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.373)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_20.setTransform(147.5,206.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.447)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_21.setTransform(147.5,206.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.514)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_22.setTransform(147.5,206.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.573)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_23.setTransform(147.5,206.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.627)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_24.setTransform(147.5,206.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.675)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_25.setTransform(147.5,206.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.71)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_26.setTransform(147.5,206.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.745)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_27.setTransform(147.5,206.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.769)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_28.setTransform(147.5,206.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.784)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_29.setTransform(147.5,206.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.796)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_30.setTransform(147.5,206.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.8)").s().p("A4cIcIAAw3MAw5AAAIAAQ3g");
	this.shape_31.setTransform(147.5,206.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},264).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(101));

	// Слой 16
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.8)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_32.setTransform(450,215.9);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.796)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_33.setTransform(150.1,215.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.784)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_34.setTransform(150.2,215.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.769)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_35.setTransform(150.4,215.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.745)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_36.setTransform(150.7,215.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.71)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_37.setTransform(151.1,215.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.675)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_38.setTransform(151.6,215.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.627)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_39.setTransform(152.2,215.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.573)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_40.setTransform(152.9,215.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.514)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_41.setTransform(153.6,215.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.447)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_42.setTransform(154.5,215.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.373)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_43.setTransform(155.4,215.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.29)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_44.setTransform(156.4,215.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.204)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_45.setTransform(157.5,215.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.106)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_46.setTransform(158.7,215.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.004)").s().p("A3bFWIH+qqMAm5AAAIAAKqg");
	this.shape_47.setTransform(160,215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32}]},14).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},185).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(14).to({_off:false},0).wait(1).to({x:408.7},0).wait(1).to({x:370.4},0).wait(1).to({x:335.2},0).wait(1).to({x:303.1},0).wait(1).to({x:274},0).wait(1).to({x:248},0).wait(1).to({x:225},0).wait(1).to({x:205.1},0).wait(1).to({x:188.3},0).wait(1).to({x:174.5},0).wait(1).to({x:163.8},0).wait(1).to({x:156.1},0).wait(1).to({x:151.6},0).wait(1).to({x:150},0).wait(185).to({_off:true},1).wait(166));

	// Слой 20
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_48.setTransform(150,125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.863)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_49.setTransform(150,125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.737)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_50.setTransform(150,125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.62)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_51.setTransform(150,125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.514)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_52.setTransform(150,125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.416)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_53.setTransform(150,125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.329)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_54.setTransform(150,125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.255)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_55.setTransform(150,125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.188)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_56.setTransform(150,125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.129)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_57.setTransform(150,125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.086)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_58.setTransform(150,125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.051)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_59.setTransform(150,125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.024)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_60.setTransform(150,125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.008)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_61.setTransform(150,125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.004)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_62.setTransform(150,125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.004)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_63.setTransform(150,125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.008)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_64.setTransform(150,125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.024)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_65.setTransform(150,125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.051)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_66.setTransform(150,125);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.086)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_67.setTransform(150,125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.129)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_68.setTransform(150,125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.188)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_69.setTransform(150,125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.255)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_70.setTransform(150,125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.329)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_71.setTransform(150,125);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.416)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_72.setTransform(150,125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.514)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_73.setTransform(150,125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.62)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_74.setTransform(150,125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.737)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_75.setTransform(150,125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.863)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_76.setTransform(150,125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_77.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_63}]},219).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[]},1).wait(131));

	// pc-1
	this.instance_8 = new lib.pc1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.1,95.8,1,1,0,0,0,151.2,226.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(125).to({y:117.8},16,cjs.Ease.get(1)).to({_off:true},108).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,67,487.5,418.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/iFunAdvance_AdWords_300x250_atlas_.png", id:"iFunAdvance_AdWords_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;