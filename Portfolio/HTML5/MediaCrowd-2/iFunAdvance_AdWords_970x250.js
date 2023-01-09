(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"iFunAdvance_AdWords_970x250_atlas_", frames: [[0,0,350,484],[352,0,130,151]]}
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
	this.spriteSheet = ss["iFunAdvance_AdWords_970x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.term = function() {
	this.spriteSheet = ss["iFunAdvance_AdWords_970x250_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAYA8IguhKIAABKIgbAAIAAh3IAcAAIAtBIIAAhIIAaAAIAAB3g");
	this.shape.setTransform(62,-156.9,2.165,2.165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQANAIAAASQgBAMgGAJQgHAHgNACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgLAAIgWAAg");
	this.shape_1.setTransform(35.4,-156.9,2.165,2.165);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAyQgNgKAAgVIAAhPIAdAAIAABJQgBALAGAGQAFAFALAAQAKAAAHgFQAFgFAAgMIAAhJIAdAAIAABPQAAAVgOAKQgNALgYAAQgYAAgNgLg");
	this.shape_2.setTransform(7,-156.6,2.165,2.165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_3.setTransform(-19.7,-156.9,2.165,2.165);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgFAAQgXgHgJgHQgJgHAAgOQAAgRANgKQAMgLAVABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQATAFAKAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_4.setTransform(222.4,-115.3,2.165,2.165);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AgKATIAGgLQABgEAAgFIAAAAIgIAAIAAgXIAXAAIAAAVQAAAIgEAHQgDAHgGAGg");
	this.shape_5.setTransform(205,-122.8,2.165,2.165);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93CE1A").s().p("AATA8IgThRIgTBRIgcAAIgeh3IAbAAIASBNIAShNIAcAAIATBNIAShNIAbAAIgfB3g");
	this.shape_6.setTransform(183.4,-115.4,2.165,2.165);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARATAAAZQAAAbgRASQgRARgaABQgZgBgRgRgAgUgaQgJALAAAPQAAAQAJALQAIALAMAAQANAAAIgLQAJgKAAgRQAAgQgJgKQgIgLgNABQgMgBgIALg");
	this.shape_7.setTransform(152.1,-115.3,2.165,2.165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93CE1A").s().p("AAWA8IgbgxIgTAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgHAIQgHAHgMACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgMAAIgVAAg");
	this.shape_8.setTransform(125.4,-115.4,2.165,2.165);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#93CE1A").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgGAIQgIAHgNACIAgA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgGgCQgFgDgKAAIgWAAg");
	this.shape_9.setTransform(98.2,-115.4,2.165,2.165);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#93CE1A").s().p("AgpAtQgRgSAAgbQAAgaARgSQAQgRAZAAQAZAAASARQAQASAAAaQAAAbgQASQgQARgbABQgZgBgQgRgAgUgaQgJAKAAAQQAAARAJAKQAIALAMAAQANAAAJgLQAIgLAAgQQAAgPgIgLQgJgLgNABQgMgBgIALg");
	this.shape_10.setTransform(69.1,-115.3,2.165,2.165);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#93CE1A").s().p("AAkA8IAAhjIgZBjIgVAAIgYhlIAABlIgZAAIAAh3IAqAAIASBLIARhLIAqAAIAAB3g");
	this.shape_11.setTransform(38.4,-115.4,2.165,2.165);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARASAAAaQgBAbgQASQgSARgZABQgZgBgRgRgAgUgaQgIAKAAAQQAAARAIAKQAIALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOABQgLgBgJALg");
	this.shape_12.setTransform(7.6,-115.3,2.165,2.165);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#93CE1A").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_13.setTransform(-19.6,-115.4,2.165,2.165);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqAtQgQgRAAgcQAAgaAQgSQARgRAZAAQAaAAARARQARASAAAaQAAAcgRARQgRARgaAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAIALAMAAQAOAAAIgLQAIgLAAgQQAAgPgIgLQgIgLgOAAQgMAAgIALg");
	this.shape_14.setTransform(181.3,-73.7,2.165,2.165);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_15.setTransform(154.1,-73.7,2.165,2.165);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAYA8IgvhLIAABLIgaAAIAAh3IAcAAIAtBHIAAhHIAaAAIAAB3g");
	this.shape_16.setTransform(126.9,-73.7,2.165,2.165);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAcAAIAAB3g");
	this.shape_17.setTransform(106.2,-73.7,2.165,2.165);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgHAAgOQAAgRANgKQANgLAUABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_18.setTransform(74.8,-74.3,2.165,2.165);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93CE1A").s().p("AgnA8IAAh3IBNAAIgEAXIgtAAIAAAYIApAAIAAAUIgpAAIAAAdIAuAAIAFAXg");
	this.shape_19.setTransform(52.7,-74.3,2.165,2.165);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAcAAIAABfIAzAAIAAAYg");
	this.shape_20.setTransform(31.7,-74.3,2.165,2.165);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93CE1A").s().p("AAgA8IgIgXIgvAAIgIAXIgcAAIAph3IAiAAIAtB3gAgQANIAgAAIgRgxg");
	this.shape_21.setTransform(6.4,-74.3,2.165,2.165);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAJAHAMgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgGAAgPQAAgRANgKQANgLAUABQASAAAMAFQALAGALAOIgSAPQgGgJgIgFQgJgEgLgBQgIAAgFAEQgGADAAAEQAAAJAZAFIAKADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_22.setTransform(-19.9,-74.3,2.165,2.165);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghA3QgNgIgHgPIATgQQAFAMAKAGQAJAGAMAAQAJAAAIgEQAGgDAAgGQAAgKgZgGIgEgBQgYgFgJgHQgJgIAAgOQAAgSAMgJQAOgKAUAAQASAAAMAGQAMAGAJANIgRAPQgFgJgKgFQgIgEgLAAQgIAAgFADQgGADAAAFQAAAHAZAHIAKACQAVAFAIAIQAJAIgBAPQABASgOAKQgOAKgZAAQgUAAgOgHg");
	this.shape_23.setTransform(121.5,-32.7,2.165,2.165);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKATIAGgLIABgJIAAgBIgIAAIAAgXIAXAAIAAAXQAAAGgDAIQgEAHgGAGg");
	this.shape_24.setTransform(104.1,-40.2,2.165,2.165);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOA8IAAguIgqhJIAeAAIAaAxIAbgxIAeAAIgrBJIAAAug");
	this.shape_25.setTransform(87.7,-32.7,2.165,2.165);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAgA8IgIgXIgwAAIgHAXIgdAAIAph3IAjAAIAtB3gAgRANIAgAAIgQgxg");
	this.shape_26.setTransform(62.8,-32.7,2.165,2.165);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag0A8IAAh3IA0AAQAYAAAPAQQAOAQAAAbQAAASgFAMQgFANgKAIQgGAEgHADQgGACgOAAgAgYAjIAVAAQANAAAGgJQAIgJAAgRQAAgOgIgKQgFgJgLAAIgYAAg");
	this.shape_27.setTransform(36.7,-32.7,2.165,2.165);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQASAAAaQAAAcgQARQgQARgbAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAJALALAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgLAAgJALg");
	this.shape_28.setTransform(7.6,-32.7,2.165,2.165);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_29.setTransform(-19.6,-32.7,2.165,2.165);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93CE1A").s().p("AATA8IgThSIgTBSIgcAAIgeh3IAbAAIASBNIAShNIAcAAIASBNIAThNIAbAAIgeB3g");
	this.shape_30.setTransform(171.9,8.6,2.165,2.165);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#93CE1A").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQARAAAbQAAAcgQARQgRARgaAAQgZAAgRgRgAgVgaQgHAKAAAQQAAARAHAKQAJALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgMAAgJALg");
	this.shape_31.setTransform(140.5,8.6,2.165,2.165);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAdAAIAABeIAyAAIAAAZg");
	this.shape_32.setTransform(117.2,8.6,2.165,2.165);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93CE1A").s().p("AgoA8IAAh3IBRAAIgEAWIgxAAIAAAcIAqAAIAAAWIgqAAIAAAvg");
	this.shape_33.setTransform(95.9,8.6,2.165,2.165);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#93CE1A").s().p("AAYA8IAAgzIgvAAIAAAzIgcAAIAAh3IAcAAIAAAvIAvAAIAAgvIAcAAIAAB3g");
	this.shape_34.setTransform(60,8.6,2.165,2.165);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAFAMAKAGQAJAGAMAAQAKAAAHgEQAGgDAAgGQAAgKgZgGIgFgBQgXgFgJgHQgJgIAAgOQAAgSAMgJQANgKAVAAQASAAAMAGQAMAGAKANIgSAPQgGgJgJgFQgJgEgKAAQgIAAgGADQgFADAAAFQAAAHAYAHIALACQAUAFAJAIQAJAJAAAOQAAARgOALQgPAKgYAAQgVAAgNgHg");
	this.shape_35.setTransform(32.3,8.6,2.165,2.165);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93CE1A").s().p("AAfA8IgHgXIgwAAIgHAXIgcAAIAph3IAiAAIAsB3gAgQANIAfAAIgQgxg");
	this.shape_36.setTransform(6.5,8.6,2.165,2.165);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AgnAtQgQgRAAgcQAAgcAQgRQAQgQAaAAQASAAAOAIQAOAJAFAPIgWANQgGgLgGgFQgIgFgJAAQgMAAgJAKQgHAKAAARQAAAQAIAKQAIAKANAAQAIAAAIgEQAJgGAFgIIAWAOQgKAQgNAHQgMAHgSAAQgZAAgRgRg");
	this.shape_37.setTransform(-19.5,8.6,2.165,2.165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-31.5,-169.8,265.6,192), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AgDAFIAAgJIAHAAIAAAJg");
	this.shape.setTransform(215.7,40,1.785,1.785);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5D5D").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAFgGAHAAQADAAADACQAEACACAEIAAgZIAHAAIAAA6IgHAAIAAgHQgCAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAEAAIAEgBIADgCQACgCABgDQABgCAAgGQAAgHgBgCIgDgEIgDgCIgEgBQgEAAgDAFg");
	this.shape_1.setTransform(209.4,35.8,1.785,1.785);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_2.setTransform(201.7,37.3,1.785,1.785);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D5D5D").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_3.setTransform(194.5,37.3,1.785,1.785);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("AgDAdIAAgoIAGAAIAAAogAgDgTIAAgJIAGAAIAAAJg");
	this.shape_4.setTransform(189.1,35.8,1.785,1.785);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_5.setTransform(183.3,37.3,1.785,1.785);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AgLAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAFAAAFACQAFAEACAFIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgDAFAAAGQAAAHADAFQADAEAEAAQADAAAEgCQACgCACgEIAGACQgDAGgEADQgDACgHAAQgIAAgEgFg");
	this.shape_6.setTransform(175.7,37.3,1.785,1.785);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_7.setTransform(168.1,37.3,1.785,1.785);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQADgHABgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_8.setTransform(162.3,37.2,1.785,1.785);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5D").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgFAAQgEAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQACgFAEgCQACgCAFAAQAGAAADAEQAEADAAAIIAAAag");
	this.shape_9.setTransform(151.3,37.2,1.785,1.785);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgCACgDIAFADQgDAFgEACQgDACgGAAQgJAAgEgFgAgHgMQgDADAAAHIAVAAQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_10.setTransform(143.2,37.3,1.785,1.785);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_11.setTransform(135.6,37.3,1.785,1.785);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D5D5D").s().p("AgEAcQgEgBgDgFIAAAHIgGAAIAAg6IAGAAIAAAZQAEgFADgBQACgCADAAQAIAAAFAGQAEAGAAAJQAAAJgEAGQgFAGgIAAQgDAAgCgCgAgDgGIgDACIgEAEIgBAJIABAIIAEAFIADACIADABQAFAAADgEQADgFAAgHQAAgIgDgDQgDgFgFAAg");
	this.shape_12.setTransform(127.9,35.8,1.785,1.785);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_13.setTransform(115.9,37.3,1.785,1.785);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_14.setTransform(108.7,37.3,1.785,1.785);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D5D5D").s().p("AAPAVQgEAAgBgBQgCgCAAgEQgDAEgEACQgCABgEAAQgFAAgEgDQgEgDAAgGQAAgFADgDQADgDAGgBIAEgBQAHgBACgCIAAgBQAAgEgCgCQgCgBgDAAQgEAAgDABQgCACgCADIgFgCQADgFAEgCQADgCAGAAQAHAAAEADQADAEAAAHIAAAQIABAFIACABIACAAIAAAFIgCAAgAAAAAIgGAAIgEADIgBAFQAAAEACACQADACADAAQAEAAADgDQADgDAAgFIAAgIQgDACgEABg");
	this.shape_15.setTransform(101.5,37.3,1.785,1.785);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5D5D").s().p("AAKAdIAAgZQAAgFgCgDQgCgCgFAAQgEAAgDADQgDADAAAGIAAAXIgHAAIAAg5IAHAAIAAAaQACgFAEgCQACgCAFAAQAGAAADADQAEAEAAAHIAAAag");
	this.shape_16.setTransform(93.3,35.7,1.785,1.785);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AgKASQgDgDgCgGIAFgCQACAEADADQACACAEAAQAEAAACgBQADgCAAgDQAAgFgKgDIgCgBQgGgBgDgCQgCgDAAgEQAAgFADgDQAFgDAFAAQAHAAADACQAEADACAFIgFABQgDgEgCgBQgCgCgEAAQgDAAgBACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAEAJADIABAAQAHACAEACQACAEAAAEQAAAFgDAEQgFADgIAAQgFAAgFgDg");
	this.shape_17.setTransform(81.7,37.3,1.785,1.785);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAFgDIAAARIAJAAIAAAFIgJAAIAAAYQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_18.setTransform(75.6,35.8,1.785,1.785);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D5D5D").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEADgDQADgCAEAAQAHAAADAEQADAEAAAHIAAAag");
	this.shape_19.setTransform(69.2,37.2,1.785,1.785);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_20.setTransform(61.1,37.3,1.785,1.785);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5D5D5D").s().p("AAWAVIAAgYQAAgFgCgEQgCgDgEAAQgEAAgDAEQgEAEAAAGIAAAWIgGAAIAAgYQAAgGgBgDQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEACgDQADgCAFAAQAGAAACADQABABACAGQADgFADgCQACgDAGAAQAGAAADAEQADAEAAAHIAAAag");
	this.shape_21.setTransform(50.9,37.2,1.785,1.785);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D5D5D").s().p("AgNARQgDgDAAgIIAAgaIAHAAIAAAYQAAAFACAEQACADAFAAQAEAAADgEQADgDAAgHIAAgWIAHAAIAAAoIgHAAIAAgIQgDAEgDADQgDACgEAAQgGAAgEgEg");
	this.shape_22.setTransform(40.2,37.4,1.785,1.785);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D5D5D").s().p("AgMAQQgFgGAAgKQAAgIAFgGQAGgGAHAAQAGAAAEACQADADAEAGIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgEAEAAAHQAAAIAEAEQADAEAEAAQAEAAACgCQADgCACgEIAGACQgDAGgEADQgDACgHAAQgHAAgGgFg");
	this.shape_23.setTransform(32.3,37.3,1.785,1.785);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D5D5D").s().p("AgMAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAJAAAFAGQAFAFAAAJQAAAKgFAGQgFAFgJAAQgIAAgEgFgAgIgLQgDAGAAAFQAAAHADAFQADAEAFAAQAFAAADgEQAEgEAAgIQAAgHgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_24.setTransform(24.5,37.3,1.785,1.785);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5D5D5D").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAEgGAIAAQAEAAACACQADACAEAEIAAgZIAGAAIAAA6IgGAAIAAgHQgDAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAFAAIADgBIADgCIAEgFIABgIIgBgJIgEgEIgDgCIgDgBQgFAAgDAFg");
	this.shape_25.setTransform(16,35.8,1.785,1.785);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D5D5D").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_26.setTransform(6.5,35.7,1.785,1.785);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5D5D5D").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_27.setTransform(2.5,35.7,1.785,1.785);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D5D5D").s().p("AAPAVIgFgBQgCgDAAgDQgEAFgDABQgCABgEAAQgFAAgEgDQgEgEAAgFQAAgFADgDQAEgDAFgBIAEgBQAHgBADgCIAAgBQAAgDgDgDQgBgBgEAAQgDAAgDABQgDACgCADIgFgCQACgFAFgCQADgCAGAAQAIAAADADQADADAAAIIAAAQIABAFIADABIABAAIAAAFIgCAAgAAAAAIgFAAIgFADIgBAFQAAAEACACQACACAEAAQAEAAADgDQAEgDAAgFIAAgIIgIADg");
	this.shape_28.setTransform(-3.3,37.3,1.785,1.785);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D5D5D").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQACgHACgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_29.setTransform(-12.9,37.2,1.785,1.785);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_30.setTransform(-20,37.3,1.785,1.785);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5D5D5D").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAGgDIAAARIAHAAIAAAFIgHAAIAAAYQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_31.setTransform(-26.3,35.8,1.785,1.785);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D5D5D").s().p("AgDAeIAAgiIgHAAIAAgGIAHAAIAAgJQAAgFADgCQACgDAEAAIAFABIAAAGIgCgBIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgBAFIAAAGIAIAAIAAAGIgIAAIAAAig");
	this.shape_32.setTransform(-30.8,35.5,1.785,1.785);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D5D5D").s().p("AAUAdIgGgOIgbAAIgGAOIgHAAIAWg5IAJAAIAWA5gAgLAJIAXAAIgMgeg");
	this.shape_33.setTransform(-38,35.7,1.785,1.785);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D5D5D").s().p("AAAADIgFALIgFgEIAJgJIgNgBIACgGIAMAFIgDgMIAGAAIgCAMIAMgFIACAGIgNABIAJAJIgFAEg");
	this.shape_34.setTransform(-46.6,32.9,1.785,1.785);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgtAAIAAgbIB5AAIAAAbIgtAAIAABmg");
	this.shape_35.setTransform(5.2,-160.3,1.846,1.846);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBVAAIgFAYIgxAAIAAAaIAtAAIAAAXIgtAAIAAAfIAzAAIAFAZg");
	this.shape_36.setTransform(-15.5,-160.3,1.846,1.846);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgIgFQgHgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAGAAAGgCQAFgBAFgEIAAgQIgbAAIAAgXIA6AAIAAAxQgKAMgPAHQgNAGgQAAQgbAAgRgSg");
	this.shape_37.setTransform(-39.2,-160.3,1.846,1.846);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#93CE1A").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgHgFQgIgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAHAAAFgCQAFgBAGgEIAAgQIgcAAIAAgXIA6AAIAAAxQgLANgNAGQgNAGgQAAQgcAAgRgSg");
	this.shape_38.setTransform(110.1,-119.3,1.846,1.846);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#93CE1A").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_39.setTransform(84.8,-119.3,1.846,1.846);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_40.setTransform(65.5,-119.3,1.846,1.846);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#93CE1A").s().p("AAcBBIgihAIgZAbIAAAlIgfAAIAAiBIAfAAIAAA3IAxg3IAkAAIgpAsIAyBVg");
	this.shape_41.setTransform(48.3,-119.3,1.846,1.846);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgVAAIAAA2IgeAAIAAiBIA5AAQAaAAAOAJQANAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgbgMIAYAAQANAAAFgDQAFgDABgIQAAgIgGgDQgFgDgNAAIgYAAg");
	this.shape_42.setTransform(22,-119.3,1.846,1.846);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_43.setTransform(-5.1,-119.3,1.846,1.846);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#93CE1A").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAVBTIAUhTIAdAAIghCBg");
	this.shape_44.setTransform(-34.3,-119.3,1.846,1.846);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAZBBIgyhRIAABRIgdAAIAAiBIAfAAIAwBOIAAhOIAeAAIAACBg");
	this.shape_45.setTransform(70.2,-38.7,1.846,1.846);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_46.setTransform(50.9,-38.7,1.846,1.846);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_47.setTransform(31.3,-38.7,1.846,1.846);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_48.setTransform(5.8,-38.7,1.846,1.846);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_49.setTransform(-12.4,-38.7,1.846,1.846);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAfAAIAUBTIAThTIAeAAIghCBg");
	this.shape_50.setTransform(-34.3,-38.7,1.846,1.846);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#93CE1A").s().p("AgrBBIAAiBIAfAAIAABnIA4AAIAAAag");
	this.shape_51.setTransform(93.8,-79.3,1.846,1.846);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#93CE1A").s().p("AAiBBIgJgZIgzAAIgIAZIgfAAIAtiBIAlAAIAxCBgAgSAOIAiAAIgRg1g");
	this.shape_52.setTransform(70.4,-79.3,1.846,1.846);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#93CE1A").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_53.setTransform(46,-79.3,1.846,1.846);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_54.setTransform(27.9,-79.3,1.846,1.846);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#93CE1A").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQAMAAAFgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_55.setTransform(10.8,-79.3,1.846,1.846);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#93CE1A").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAtiBIAmAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_56.setTransform(-14.5,-79.3,1.846,1.846);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#93CE1A").s().p("AgqAxQgSgSAAgfQAAgeARgTQASgSAdAAQAUAAAOAJQAQAKAGARIgZANQgGgLgHgGQgJgFgJAAQgPAAgIALQgIALgBASQAAASAJALQAKALAOAAQAIAAAJgFQAIgFAHgLIAYAQQgLASgOAHQgNAIgTAAQgdAAgRgTg");
	this.shape_57.setTransform(-38.8,-79.3,1.846,1.846);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAAAEIgGAQIgKgHIAOgMIgSgBIAEgKIAPAJIgEgSIALAAIgEASIAPgJIAEAKIgRABIANAMIgKAHg");
	this.shape_58.setTransform(125,-8.1,1.846,1.846);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AgkA7QgPgHgHgRIAVgRQAGAMAKAHQAKAGANAAQAMAAAHgEQAGgEAAgGQAAgKgbgHIgFgBQgagGgKgIQgJgIAAgQQAAgSANgMQAPgKAWAAQATAAAOAGQAMAGAMAPIgUAQQgGgJgKgGQgLgEgKAAQgJgBgGAEQgGADAAAFQAAAJAbAHIALACQAXAHAJAIQAKAJAAAQQAAAUgQALQgPALgaAAQgXAAgPgJg");
	this.shape_59.setTransform(107.8,1.3,1.846,1.846);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgUAAIAAA2IgfAAIAAiBIA5AAQAbAAAMAJQAOAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgagMIAYAAQAMAAAFgDQAGgDAAgIQAAgIgGgDQgFgDgNAAIgXAAg");
	this.shape_60.setTransform(84.3,1.3,1.846,1.846);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#93CE1A").s().p("AgoA3QgOgMAAgWIAAhXIAeAAIAABRQABAMAFAGQAHAFALAAQAMAAAGgFQAHgGAAgMIAAhRIAeAAIAABXQAAAWgOAMQgOAMgbAAQgaAAgOgMg");
	this.shape_61.setTransform(57.8,1.5,1.846,1.846);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_62.setTransform(31.6,1.3,1.846,1.846);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#93CE1A").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_63.setTransform(4.8,1.3,1.846,1.846);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AglBAIgBgCIAAgDQAAgOAGgLQAFgLANgLIADgCQAWgTAAgPQAAgJgEgDQgDgFgEAAQgFAAgDADQgDACAAAFIABAHIgXAKIgCgGIAAgGQAAgQAKgLQAKgKAPAAQAQAAALALQAKAKAAARQAAAKgFAJQgEAGgRAOQgMAJgGAHQgGAFgBAFIA1AAIAAAYg");
	this.shape_64.setTransform(-25.8,1.5,1.846,1.846);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#93CE1A").s().p("AgOA/QACgaAJgcQAIgaAMgWIg0AAIAAgXIBHAAIAAAUQgMAXgGAZQgGAZgBAgg");
	this.shape_65.setTransform(-43.4,1.7,1.846,1.846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-50,-172.9,266.4,214), null);


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
	this.instance.setTransform(-3,71,0.865,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(-3,71,302.6,418.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AghA9IAAgDQAAgMAFgKQAGgKAMgLIAHgFQAKgIAFgFQAEgFACgFQADgGAAgGQAAgKgGgHQgGgGgJAAQgIAAgGAGQgFAFAAAJIABAFIACAGIgLAHIgDgJIgBgIQAAgPAJgJQAJgJAOAAQAPAAAJAKQAJAJAAAPQAAAMgGAJQgGAJgQANIgEADQgUAQgCALIA2AAIAAAOg");
	this.shape.setTransform(168.7,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA3QgHgHgDgNIAMgCQADAJAEAEQAGAGAHgBQALABAFgMQAGgMAAgZQgFAJgGADQgHAEgHAAQgOAAgIgLQgIgKAAgSQAAgTAJgKQAJgMAQAAQARAAAKAPQAIAQABAeQAAAfgKAPQgKAQgTAAQgLAAgJgHgAgPgqQgFAIAAANQAAANAGAIQAFAHAJAAQAIABAGgIQAGgHAAgNQAAgMgGgJQgGgJgIABQgJgBgGAIg");
	this.shape_1.setTransform(160.1,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAtQgKgQAAgdQAAgdAKgQQAJgQAQAAQARAAAKAQQAJAQAAAdQAAAdgJAQQgKARgRAAQgQAAgJgRgAgOglQgGANAAAYQAAAZAGAMQAFANAJAAQALAAAFgNQAFgMAAgZQAAgYgFgNQgFgMgLAAQgJAAgFAMg");
	this.shape_2.setTransform(147.1,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJA8IAAgbIguAAIAAgPIAvhMIAMAAIAABOIAQAAIAAANIgQAAIAAAbgAgaAUIAiAAIAAg4g");
	this.shape_3.setTransform(138.4,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA9IAAgDQAAgMAFgKQAGgKAMgLIAHgFQAKgIAFgFQAEgFACgFQADgGAAgGQAAgKgGgHQgGgGgJAAQgIAAgGAGQgFAFAAAJIABAFIACAGIgLAHIgDgJIgBgIQAAgPAJgJQAJgJAOAAQAPAAAJAKQAJAJAAAPQAAAMgGAJQgGAJgQANIgEADQgUAQgCALIA2AAIAAAOg");
	this.shape_4.setTransform(125.3,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA3QgHgHgDgNIANgCQACAJAEAEQAGAGAHgBQALABAFgMQAGgMAAgZQgFAJgHADQgFAEgHAAQgOAAgJgLQgJgKAAgSQAAgTAKgKQAJgMAQAAQARAAAKAPQAJAQAAAeQgBAfgJAPQgKAQgSAAQgMAAgJgHgAgPgqQgFAIAAANQAAANAGAIQAFAHAJAAQAIABAHgIQAFgHAAgNQAAgMgGgJQgGgJgIABQgJgBgGAIg");
	this.shape_5.setTransform(116.6,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJA8IAAgbIguAAIAAgPIAvhMIAMAAIAABOIAQAAIAAANIgQAAIAAAbgAgaAUIAiAAIAAg4g");
	this.shape_6.setTransform(108,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAtQgKgQAAgdQAAgdAKgQQAJgQAQAAQARAAAKAQQAJAQAAAdQAAAdgJAQQgKARgRAAQgQAAgJgRgAgOglQgGANAAAYQAAAZAGAMQAFANAJAAQALAAAFgNQAFgMAAgZQAAgYgFgNQgFgMgLAAQgJAAgFAMg");
	this.shape_7.setTransform(94.9,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGA8IAAhgIgLAJIgNAHIAAgPQAJgDAHgGQAFgGAGgIIAKAAIAAB2g");
	this.shape_8.setTransform(85.6,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAtQgKgQAAgdQAAgdAKgQQAJgQAQAAQARAAAKAQQAJAQAAAdQAAAdgJAQQgKARgRAAQgQAAgJgRgAgOglQgGANAAAYQAAAZAGAMQAFANAJAAQALAAAFgNQAFgMAAgZQAAgYgFgNQgFgMgLAAQgJAAgFAMg");
	this.shape_9.setTransform(77.6,27.3);

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
	this.shape.setTransform(146.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAxQgSgTAAgeQAAgdASgTQATgTAbAAQAcAAATATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQgBASAKAMQAJALANAAQAPAAAIgMQAKgLgBgSQABgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_1.setTransform(130.3,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_2.setTransform(115.9,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBBIAAgyIguhPIAhAAIAcA1IAeg1IAgAAIguBPIAAAyg");
	this.shape_3.setTransform(98.2,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIAgAAIAABnIA3AAIAAAag");
	this.shape_4.setTransform(87.6,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgbAAIAAAxgAgYgHIAYAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgYAAg");
	this.shape_5.setTransform(75.6,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAyAAQAfAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_6.setTransform(62.4,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAuiBIAlAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_7.setTransform(48.7,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93CE1A").s().p("EgidACIIAAkPMBE7AAAIAAEPg");
	this.shape_8.setTransform(206.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.applynoq, new cjs.Rectangle(-14,0,441.2,27.2), null);


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
(lib.iFunAdvance_AdWords_970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pc-1
	this.instance = new lib.pc1();
	this.instance.parent = this;
	this.instance.setTransform(464.1,101.8,1,1,0,0,0,151.2,226.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229));

	// logo-big
	this.instance_1 = new lib.logobig();
	this.instance_1.parent = this;
	this.instance_1.setTransform(723.6,66.9,1.255,1.255,0,0,0,76.7,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229));

	// contacts
	this.instance_2 = new lib.contacts();
	this.instance_2.parent = this;
	this.instance_2.setTransform(786.4,206,1,1,0,0,0,131.5,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229));

	// txt-1
	this.instance_3 = new lib.txt1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.5,217.2,1,1,0,0,0,111.2,23.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:180.5,alpha:1},14,cjs.Ease.get(1)).wait(95).to({x:170.5,alpha:0},16,cjs.Ease.get(-1)).to({_off:true},1).wait(103));

	// achive
	this.instance_4 = new lib.achive();
	this.instance_4.parent = this;
	this.instance_4.setTransform(248.5,-51.1,1.18,1.18,60,0,0,38.9,38.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regY:38.9,scaleX:1.32,scaleY:1.32,rotation:0,x:244,y:125.5},14,cjs.Ease.get(1)).wait(66).to({regY:38.8,scaleX:1.18,scaleY:1.18,rotation:60,x:248.5,y:-51.1},15,cjs.Ease.get(-1)).to({_off:true},1).wait(119));

	// txt-2
	this.instance_5 = new lib.txt2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(190.5,214.9,1,1,0,0,0,118.9,16.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(125).to({_off:false},0).to({x:170.5,alpha:1},16,cjs.Ease.get(1)).wait(72).to({x:190.5,alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// Слой 17
	this.instance_6 = new lib.pc2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(938.4,114.5,1,1,0,0,0,98.1,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(229));

	// apply noq
	this.instance_7 = new lib.applynoq();
	this.instance_7.parent = this;
	this.instance_7.setTransform(776,146.3,1,1,0,0,0,150.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(229));

	// Слой 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A8lIcIAAw3MA5LAAAIAAQ3g");
	this.shape.setTransform(794.5,206.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

	// Слой 20
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A4NTiMAAAgnDMAwbAAAMAAAAnDg");
	this.shape_1.setTransform(155,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,71,1052.6,418.5);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/iFunAdvance_AdWords_970x250_atlas_.png", id:"iFunAdvance_AdWords_970x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;