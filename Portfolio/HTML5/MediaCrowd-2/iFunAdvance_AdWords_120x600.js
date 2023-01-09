(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"iFunAdvance_AdWords_120x600_atlas_", frames: [[0,0,350,484],[352,0,130,151]]}
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
	this.spriteSheet = ss["iFunAdvance_AdWords_120x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.term = function() {
	this.spriteSheet = ss["iFunAdvance_AdWords_120x600_atlas_"];
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
	this.shape.setTransform(46.5,349.8,0.883,0.883);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93CE1A").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQARAAAbQAAAcgQARQgRARgaAAQgZAAgRgRgAgVgaQgHAKAAAQQAAARAHAKQAJALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgMAAgJALg");
	this.shape_1.setTransform(33.7,349.8,0.883,0.883);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAdAAIAABeIAyAAIAAAZg");
	this.shape_2.setTransform(24.2,349.8,0.883,0.883);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CE1A").s().p("AgoA8IAAh3IBRAAIgEAWIgxAAIAAAcIAqAAIAAAWIgqAAIAAAvg");
	this.shape_3.setTransform(15.5,349.8,0.883,0.883);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93CE1A").s().p("AAYA8IAAgzIgvAAIAAAzIgcAAIAAh3IAcAAIAAAvIAvAAIAAgvIAcAAIAAB3g");
	this.shape_4.setTransform(0.9,349.8,0.883,0.883);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAFAMAKAGQAJAGAMAAQAKAAAHgEQAGgDAAgGQAAgKgZgGIgFgBQgXgFgJgHQgJgIAAgOQAAgSAMgJQANgKAVAAQASAAAMAGQAMAGAKANIgSAPQgGgJgJgFQgJgEgKAAQgIAAgGADQgFADAAAFQAAAHAYAHIALACQAUAFAJAIQAJAJAAAOQAAARgOALQgPAKgYAAQgVAAgNgHg");
	this.shape_5.setTransform(-10.4,349.8,0.883,0.883);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93CE1A").s().p("AAfA8IgHgXIgwAAIgHAXIgcAAIAph3IAiAAIAsB3gAgQANIAfAAIgQgxg");
	this.shape_6.setTransform(-20.9,349.8,0.883,0.883);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AgnAtQgQgRAAgcQAAgcAQgRQAQgQAaAAQASAAAOAIQAOAJAFAPIgWANQgGgLgGgFQgIgFgJAAQgMAAgJAKQgHAKAAARQAAAQAIAKQAIAKANAAQAIAAAIgEQAJgGAFgIIAWAOQgKAQgNAHQgMAHgSAAQgZAAgRgRg");
	this.shape_7.setTransform(-31.5,349.8,0.883,0.883);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA3QgNgIgHgPIATgQQAFAMAKAGQAJAGAMAAQAJAAAIgEQAGgDAAgGQAAgKgZgGIgEgBQgYgFgJgHQgJgIAAgOQAAgSAMgJQAOgKAUAAQASAAAMAGQAMAGAJANIgRAPQgFgJgKgFQgIgEgLAAQgIAAgFADQgGADAAAFQAAAHAZAHIAKACQAVAFAIAIQAJAIgBAPQABASgOAKQgOAKgZAAQgUAAgOgHg");
	this.shape_8.setTransform(37.3,332.6,0.883,0.883);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKATIAGgLIABgJIAAgBIgIAAIAAgXIAXAAIAAAXQAAAGgDAIQgEAHgGAGg");
	this.shape_9.setTransform(30.2,329.6,0.883,0.883);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOA8IAAguIgqhJIAeAAIAaAxIAbgxIAeAAIgrBJIAAAug");
	this.shape_10.setTransform(23.5,332.6,0.883,0.883);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgA8IgIgXIgwAAIgHAXIgdAAIAph3IAjAAIAtB3gAgRANIAgAAIgQgxg");
	this.shape_11.setTransform(13.3,332.6,0.883,0.883);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A8IAAh3IA0AAQAYAAAPAQQAOAQAAAbQAAASgFAMQgFANgKAIQgGAEgHADQgGACgOAAgAgYAjIAVAAQANAAAGgJQAIgJAAgRQAAgOgIgKQgFgJgLAAIgYAAg");
	this.shape_12.setTransform(2.7,332.6,0.883,0.883);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAtQgRgRAAgcQAAgaARgSQARgRAZAAQAaAAARARQAQASAAAaQAAAcgQARQgQARgbAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAJALALAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOAAQgLAAgJALg");
	this.shape_13.setTransform(-9.2,332.6,0.883,0.883);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_14.setTransform(-20.3,332.6,0.883,0.883);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAtQgQgRAAgcQAAgaAQgSQARgRAZAAQAaAAARARQARASAAAaQAAAcgRARQgRARgaAAQgZAAgRgRgAgUgaQgJAKABAQQgBARAJAKQAIALAMAAQAOAAAIgLQAIgLAAgQQAAgPgIgLQgIgLgOAAQgMAAgIALg");
	this.shape_15.setTransform(49.5,315.4,0.883,0.883);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_16.setTransform(38.4,315.4,0.883,0.883);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA8IgvhLIAABLIgaAAIAAh3IAcAAIAtBHIAAhHIAaAAIAAB3g");
	this.shape_17.setTransform(27.3,315.4,0.883,0.883);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAcAAIAAB3g");
	this.shape_18.setTransform(18.9,315.4,0.883,0.883);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgHAAgOQAAgRANgKQANgLAUABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_19.setTransform(5.5,315.5,0.883,0.883);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#93CE1A").s().p("AgnA8IAAh3IBNAAIgEAXIgtAAIAAAYIApAAIAAAUIgpAAIAAAdIAuAAIAFAXg");
	this.shape_20.setTransform(-3.5,315.4,0.883,0.883);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#93CE1A").s().p("AgnA8IAAh3IAcAAIAABfIAzAAIAAAYg");
	this.shape_21.setTransform(-12.1,315.4,0.883,0.883);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#93CE1A").s().p("AAgA8IgIgXIgvAAIgIAXIgcAAIAph3IAiAAIAtB3gAgQANIAgAAIgRgxg");
	this.shape_22.setTransform(-22.4,315.4,0.883,0.883);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAJAHAMgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgEAAQgZgHgIgHQgJgGAAgPQAAgRANgKQANgLAUABQASAAAMAFQALAGALAOIgSAPQgGgJgIgFQgJgEgLgBQgIAAgFAEQgGADAAAEQAAAJAZAFIAKADQAUAFAJAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_23.setTransform(-33.1,315.5,0.883,0.883);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAYA8IguhKIAABKIgbAAIAAh3IAcAAIAtBIIAAhIIAaAAIAAB3g");
	this.shape_24.setTransform(25.3,281.4,0.883,0.883);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQANAIAAASQgBAMgGAJQgHAHgNACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgLAAIgWAAg");
	this.shape_25.setTransform(14.5,281.4,0.883,0.883);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AglAyQgNgKAAgVIAAhPIAdAAIAABJQgBALAGAGQAFAFALAAQAKAAAHgFQAFgFAAgMIAAhJIAdAAIAABPQAAAVgOAKQgNALgYAAQgYAAgNgLg");
	this.shape_26.setTransform(2.9,281.5,0.883,0.883);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_27.setTransform(-8,281.4,0.883,0.883);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#93CE1A").s().p("AghA3QgOgIgGgPIATgQQAGANAJAEQAKAHALgBQALAAAGgDQAGgEAAgFQAAgKgZgGIgFAAQgXgHgJgHQgJgHAAgOQAAgRANgKQAMgLAVABQASAAAMAFQAMAHAKANIgSAPQgGgJgJgFQgIgEgLgBQgIAAgFAEQgGADAAAEQAAAJAYAFIALADQATAFAKAIQAJAJAAAOQAAARgOALQgOALgZAAQgVgBgNgHg");
	this.shape_28.setTransform(57.9,298.6,0.883,0.883);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#93CE1A").s().p("AgKATIAGgLQABgEAAgFIAAAAIgIAAIAAgXIAXAAIAAAVQAAAIgEAHQgDAHgGAGg");
	this.shape_29.setTransform(50.8,295.6,0.883,0.883);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#93CE1A").s().p("AATA8IgThRIgTBRIgcAAIgeh3IAbAAIASBNIAShNIAcAAIATBNIAShNIAbAAIgfB3g");
	this.shape_30.setTransform(42,298.6,0.883,0.883);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARATAAAZQAAAbgRASQgRARgaABQgZgBgRgRgAgUgaQgJALAAAPQAAAQAJALQAIALAMAAQANAAAIgLQAJgKAAgRQAAgQgJgKQgIgLgNABQgMgBgIALg");
	this.shape_31.setTransform(29.2,298.6,0.883,0.883);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#93CE1A").s().p("AAWA8IgbgxIgTAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgHAIQgHAHgMACIAfA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgFgCQgFgDgMAAIgVAAg");
	this.shape_32.setTransform(18.3,298.6,0.883,0.883);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#93CE1A").s().p("AAWA8IgcgxIgSAAIAAAxIgcAAIAAh3IA0AAQAYAAAMAJQAMAJAAARQAAANgGAIQgIAHgNACIAgA2gAgYgKIAWAAQALAAAFgDQAFgEAAgHQAAgHgGgCQgFgDgKAAIgWAAg");
	this.shape_33.setTransform(7.2,298.6,0.883,0.883);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#93CE1A").s().p("AgpAtQgRgSAAgbQAAgaARgSQAQgRAZAAQAZAAASARQAQASAAAaQAAAbgQASQgQARgbABQgZgBgQgRgAgUgaQgJAKAAAQQAAARAJAKQAIALAMAAQANAAAJgLQAIgLAAgQQAAgPgIgLQgJgLgNABQgMgBgIALg");
	this.shape_34.setTransform(-4.7,298.6,0.883,0.883);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#93CE1A").s().p("AAkA8IAAhjIgZBjIgVAAIgYhlIAABlIgZAAIAAh3IAqAAIASBLIARhLIAqAAIAAB3g");
	this.shape_35.setTransform(-17.2,298.6,0.883,0.883);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#93CE1A").s().p("AgqAtQgRgSAAgbQAAgaARgSQARgRAZAAQAaAAARARQARASAAAaQgBAbgQASQgSARgZABQgZgBgRgRgAgUgaQgIAKAAAQQAAARAIAKQAIALAMAAQAOAAAHgLQAJgLAAgQQAAgPgJgLQgHgLgOABQgLgBgJALg");
	this.shape_36.setTransform(-29.7,298.6,0.883,0.883);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#93CE1A").s().p("AgOA8IAAheIgoAAIAAgZIBtAAIAAAZIgpAAIAABeg");
	this.shape_37.setTransform(-40.8,298.6,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-45.7,276.1,108.4,79.2), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AgKASQgDgDgCgGIAFgCQACAEADADQACACAEAAQAEAAACgBQADgCAAgDQAAgFgKgDIgCgBQgGgBgDgCQgCgDAAgEQAAgFADgDQAFgDAFAAQAHAAADACQAEADACAFIgFABQgDgEgCgBQgCgCgEAAQgDAAgBACQgBABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAEAJADIABAAQAHACAEACQACAEAAAEQAAAFgDAEQgFADgIAAQgFAAgFgDg");
	this.shape.setTransform(41.2,372.4,1.444,1.444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5D5D").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAFgDIAAARIAJAAIAAAFIgJAAIAAAYQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_1.setTransform(36.2,371.2,1.444,1.444);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEADgDQADgCAEAAQAHAAADAEQADAEAAAHIAAAag");
	this.shape_2.setTransform(31,372.3,1.444,1.444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_3.setTransform(24.5,372.4,1.444,1.444);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("AAWAVIAAgYQAAgFgCgEQgCgDgEAAQgEAAgDAEQgEAEAAAGIAAAWIgGAAIAAgYQAAgGgBgDQgCgDgEAAQgFAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQADgEACgDQADgCAFAAQAGAAACADQABABACAGQADgFADgCQACgDAGAAQAGAAADAEQADAEAAAHIAAAag");
	this.shape_4.setTransform(16.2,372.3,1.444,1.444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AgNARQgDgDAAgIIAAgaIAHAAIAAAYQAAAFACAEQACADAFAAQAEAAADgEQADgDAAgHIAAgWIAHAAIAAAoIgHAAIAAgIQgDAEgDADQgDACgEAAQgGAAgEgEg");
	this.shape_5.setTransform(7.6,372.5,1.444,1.444);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AgMAQQgFgGAAgKQAAgIAFgGQAGgGAHAAQAGAAAEACQADADAEAGIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgEAEAAAHQAAAIAEAEQADAEAEAAQAEAAACgCQADgCACgEIAGACQgDAGgEADQgDACgHAAQgHAAgGgFg");
	this.shape_6.setTransform(1.2,372.4,1.444,1.444);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AgMAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAJAAAFAGQAFAFAAAJQAAAKgFAGQgFAFgJAAQgIAAgEgFgAgIgLQgDAGAAAFQAAAHADAFQADAEAFAAQAFAAADgEQAEgEAAgIQAAgHgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(-5.1,372.4,1.444,1.444);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAEgGAIAAQAEAAACACQADACAEAEIAAgZIAGAAIAAA6IgGAAIAAgHQgDAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAFAAIADgBIADgCIAEgFIABgIIgBgJIgEgEIgDgCIgDgBQgFAAgDAFg");
	this.shape_8.setTransform(-12,371.2,1.444,1.444);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5D").s().p("AgCAdIAAg5IAGAAIAAA5g");
	this.shape_9.setTransform(-19.7,371.1,1.444,1.444);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("AgCAdIAAg5IAFAAIAAA5g");
	this.shape_10.setTransform(-22.9,371.1,1.444,1.444);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AAPAVIgFgBQgCgDAAgDQgEAFgDABQgCABgEAAQgFAAgEgDQgEgEAAgFQAAgFADgDQAEgDAFgBIAEgBQAHgBADgCIAAgBQAAgDgDgDQgBgBgEAAQgDAAgDABQgDACgCADIgFgCQACgFAFgCQADgCAGAAQAIAAADADQADADAAAIIAAAQIABAFIADABIABAAIAAAFIgCAAgAAAAAIgFAAIgFADIgBAFQAAAEACACQACACAEAAQAEAAADgDQAEgDAAgFIAAgIIgIADg");
	this.shape_11.setTransform(-27.6,372.4,1.444,1.444);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D5D5D").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQACgHACgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_12.setTransform(-35.4,372.3,1.444,1.444);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_13.setTransform(-41.1,372.4,1.444,1.444);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AAFAdQgFAAgBgCQgCgCAAgFIAAgaIgHAAIAAgFIAHAAIAAgOIAGgDIAAARIAHAAIAAAFIgHAAIAAAYQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAIABAAIACAAIAAAFIgDAAg");
	this.shape_14.setTransform(-46.2,371.2,1.444,1.444);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D5D5D").s().p("AgDAeIAAgiIgHAAIAAgGIAHAAIAAgJQAAgFADgCQACgDAEAAIAFABIAAAGIgCgBIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgBAFIAAAGIAIAAIAAAGIgIAAIAAAig");
	this.shape_15.setTransform(-49.9,371,1.444,1.444);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5D5D").s().p("AAUAdIgGgOIgbAAIgGAOIgHAAIAWg5IAJAAIAWA5gAgLAJIAXAAIgMgeg");
	this.shape_16.setTransform(-55.7,371.1,1.444,1.444);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AAAADIgFALIgFgEIAJgJIgNgBIACgGIAMAFIgDgMIAGAAIgCAMIAMgFIACAGIgNABIAJAJIgFAEg");
	this.shape_17.setTransform(-62.6,368.9,1.444,1.444);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AgDAFIAAgJIAHAAIAAAJg");
	this.shape_18.setTransform(39.9,387.2,1.444,1.444);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D5D5D").s().p("AgNAYQgEgGAAgJQAAgJAEgGQAFgGAHAAQADAAADACQAEACACAEIAAgZIAHAAIAAA6IgHAAIAAgHQgCAEgEACQgDACgDAAQgIAAgEgGgAgHgCQgDADAAAIQAAAHADAFQADAEAEAAIAEgBIADgCQACgCABgDQABgCAAgGQAAgHgBgCIgDgEIgDgCIgEgBQgEAAgDAFg");
	this.shape_19.setTransform(34.8,383.7,1.444,1.444);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_20.setTransform(28.6,385,1.444,1.444);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5D5D5D").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_21.setTransform(22.7,385,1.444,1.444);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D5D5D").s().p("AgDAdIAAgoIAGAAIAAAogAgDgTIAAgJIAGAAIAAAJg");
	this.shape_22.setTransform(18.4,383.7,1.444,1.444);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D5D5D").s().p("AgMAQQgFgGAAgKQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAHAAAJIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgBABgEIAGADQgDAFgEACQgEACgFAAQgJAAgEgFgAgHgMQgCACgBAIIAVAAQgBgGgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_23.setTransform(13.7,385,1.444,1.444);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D5D5D").s().p("AgLAQQgGgHAAgJQAAgJAGgFQAFgGAHAAQAFAAAFACQAFAEACAFIgGADQgBgEgDgDQgEgCgDAAQgEAAgDAEQgDAFAAAGQAAAHADAFQADAEAEAAQADAAAEgCQACgCACgEIAGACQgDAGgEADQgDACgHAAQgIAAgEgFg");
	this.shape_24.setTransform(7.6,385,1.444,1.444);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_25.setTransform(1.4,385,1.444,1.444);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D5D5D").s().p("AgJAVIAAgoIAGAAIAAAMIAAAAQADgHABgDQADgDAEAAIACAAIAAAIIgBAAIgCgBQgFAAgCAFQgDAFAAAHIAAARg");
	this.shape_26.setTransform(-3.3,384.9,1.444,1.444);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5D5D5D").s().p("AAKAVIAAgYQAAgHgCgCQgCgDgFAAQgEAAgDAEQgDAEAAAGIAAAWIgHAAIAAgoIAHAAIAAAIQACgFAEgCQACgCAFAAQAGAAADAEQAEADAAAIIAAAag");
	this.shape_27.setTransform(-12.2,384.9,1.444,1.444);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCQADgCACgDIAFADQgDAFgEACQgDACgGAAQgJAAgEgFgAgHgMQgDADAAAHIAVAAQAAgGgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_28.setTransform(-18.8,385,1.444,1.444);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgHAAgFgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_29.setTransform(-24.9,385,1.444,1.444);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5D5D5D").s().p("AgEAcQgEgBgDgFIAAAHIgGAAIAAg6IAGAAIAAAZQAEgFADgBQACgCADAAQAIAAAFAGQAEAGAAAJQAAAJgEAGQgFAGgIAAQgDAAgCgCgAgDgGIgDACIgEAEIgBAJIABAIIAEAFIADACIADABQAFAAADgEQADgFAAgHQAAgIgDgDQgDgFgFAAg");
	this.shape_30.setTransform(-31.1,383.7,1.444,1.444);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5D5D5D").s().p("AgMAQQgFgFAAgLQAAgJAFgGQAFgFAHAAQAJAAAEAFQAFAGAAAKIAAABIgcAAQAAAHADADQADAEAFAAQADAAADgCIAFgFIAFADQgCAEgFADQgDACgHAAQgIAAgEgFgAgHgMQgDADAAAHIAVAAQAAgHgDgDQgCgDgGAAQgEAAgDADg");
	this.shape_31.setTransform(-40.8,385,1.444,1.444);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D5D5D").s().p("AgCAUIgPgnIAGAAIALAfIAMgfIAGAAIgPAng");
	this.shape_32.setTransform(-46.7,385,1.444,1.444);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D5D5D").s().p("AAPAVQgEAAgBgBQgCgCAAgEQgDAEgEACQgCABgEAAQgFAAgEgDQgEgDAAgGQAAgFADgDQADgDAGgBIAEgBQAHgBACgCIAAgBQAAgEgCgCQgCgBgDAAQgEAAgDABQgCACgCADIgFgCQADgFAEgCQADgCAGAAQAHAAAEADQADAEAAAHIAAAQIABAFIACABIACAAIAAAFIgCAAgAAAAAIgGAAIgEADIgBAFQAAAEACACQADACADAAQAEAAADgDQADgDAAgFIAAgIQgDACgEABg");
	this.shape_33.setTransform(-52.5,385,1.444,1.444);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5D5D5D").s().p("AAKAdIAAgZQAAgFgCgDQgCgCgFAAQgEAAgDADQgDADAAAGIAAAXIgHAAIAAg5IAHAAIAAAaQACgFAEgCQACgCAFAAQAGAAADADQAEAEAAAHIAAAag");
	this.shape_34.setTransform(-59.1,383.7,1.444,1.444);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAZBBIgyhRIAABRIgdAAIAAiBIAfAAIAwBOIAAhOIAeAAIAACBg");
	this.shape_35.setTransform(21.3,323.7,1.092,1.092);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_36.setTransform(9.9,323.7,1.092,1.092);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_37.setTransform(-1.7,323.7,1.092,1.092);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_38.setTransform(-16.8,323.7,1.092,1.092);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_39.setTransform(-27.5,323.7,1.092,1.092);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAfAAIAUBTIAThTIAeAAIghCBg");
	this.shape_40.setTransform(-40.5,323.7,1.092,1.092);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAAEIgGAQIgKgHIAOgMIgSgBIAEgKIAPAJIgEgSIALAAIgEASIAPgJIAEAKIgRABIANAMIgKAHg");
	this.shape_41.setTransform(39.4,340.6,1.092,1.092);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#93CE1A").s().p("AgkA7QgPgHgHgRIAVgRQAGAMAKAHQAKAGANAAQAMAAAHgEQAGgEAAgGQAAgKgbgHIgFgBQgagGgKgIQgJgIAAgQQAAgSANgMQAPgKAWAAQATAAAOAGQAMAGAMAPIgUAQQgGgJgKgGQgLgEgKAAQgJgBgGAEQgGADAAAFQAAAJAbAHIALACQAXAHAJAIQAKAJAAAQQAAAUgQALQgPALgaAAQgXAAgPgJg");
	this.shape_42.setTransform(29.3,346.2,1.092,1.092);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgUAAIAAA2IgfAAIAAiBIA5AAQAbAAAMAJQAOAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgagMIAYAAQAMAAAFgDQAGgDAAgIQAAgIgGgDQgFgDgNAAIgXAAg");
	this.shape_43.setTransform(15.3,346.2,1.092,1.092);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#93CE1A").s().p("AgoA3QgOgMAAgWIAAhXIAeAAIAABRQABAMAFAGQAHAFALAAQAMAAAGgFQAHgGAAgMIAAhRIAeAAIAABXQAAAWgOAMQgOAMgbAAQgaAAgOgMg");
	this.shape_44.setTransform(-0.3,346.3,1.092,1.092);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_45.setTransform(-15.8,346.2,1.092,1.092);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#93CE1A").s().p("AAaBBIAAg3Ig0AAIAAA3IgeAAIAAiBIAeAAIAAAyIA0AAIAAgyIAfAAIAACBg");
	this.shape_46.setTransform(-31.7,346.2,1.092,1.092);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#93CE1A").s().p("AglBAIgBgCIAAgDQAAgOAGgLQAFgLANgLIADgCQAWgTAAgPQAAgJgEgDQgDgFgEAAQgFAAgDADQgDACAAAFIABAHIgXAKIgCgGIAAgGQAAgQAKgLQAKgKAPAAQAQAAALALQAKAKAAARQAAAKgFAJQgEAGgRAOQgMAJgGAHQgGAFgBAFIA1AAIAAAYg");
	this.shape_47.setTransform(-49.8,346.3,1.092,1.092);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#93CE1A").s().p("AgOA/QACgaAJgcQAIgaAMgWIg0AAIAAgXIBHAAIAAAUQgMAXgGAZQgGAZgBAgg");
	this.shape_48.setTransform(-60.2,346.5,1.092,1.092);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#93CE1A").s().p("AgrBBIAAiBIAfAAIAABnIA4AAIAAAag");
	this.shape_49.setTransform(28.9,301.3,1.092,1.092);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#93CE1A").s().p("AAiBBIgJgZIgzAAIgIAZIgfAAIAtiBIAlAAIAxCBgAgSAOIAiAAIgRg1g");
	this.shape_50.setTransform(15.1,301.3,1.092,1.092);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#93CE1A").s().p("AgPBBIAAhmIgsAAIAAgbIB3AAIAAAbIgsAAIAABmg");
	this.shape_51.setTransform(0.6,301.3,1.092,1.092);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_52.setTransform(-10.1,301.3,1.092,1.092);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#93CE1A").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQAMAAAFgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_53.setTransform(-20.2,301.3,1.092,1.092);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#93CE1A").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAtiBIAmAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_54.setTransform(-35.2,301.3,1.092,1.092);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#93CE1A").s().p("AgqAxQgSgSAAgfQAAgeARgTQASgSAdAAQAUAAAOAJQAQAKAGARIgZANQgGgLgHgGQgJgFgJAAQgPAAgIALQgIALgBASQAAASAJALQAKALAOAAQAIAAAJgFQAIgFAHgLIAYAQQgLASgOAHQgNAIgTAAQgdAAgRgTg");
	this.shape_55.setTransform(-49.5,301.3,1.092,1.092);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#93CE1A").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgHgFQgIgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAHAAAFgCQAFgBAGgEIAAgQIgcAAIAAgXIA6AAIAAAxQgLANgNAGQgNAGgQAAQgcAAgRgSg");
	this.shape_56.setTransform(32.9,279,1.092,1.092);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#93CE1A").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_57.setTransform(18,279,1.092,1.092);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#93CE1A").s().p("AgPBBIAAiBIAfAAIAACBg");
	this.shape_58.setTransform(6.6,279,1.092,1.092);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AAcBBIgihAIgZAbIAAAlIgfAAIAAiBIAfAAIAAA3IAxg3IAkAAIgpAsIAyBVg");
	this.shape_59.setTransform(-3.6,279,1.092,1.092);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AAYBBIgeg2IgVAAIAAA2IgeAAIAAiBIA5AAQAaAAAOAJQANAJAAATQAAAOgIAJQgHAIgOADIAiA6gAgbgMIAYAAQANAAAFgDQAFgDABgIQAAgIgGgDQgFgDgNAAIgYAAg");
	this.shape_60.setTransform(-19.2,279,1.092,1.092);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#93CE1A").s().p("AguAxQgSgUAAgdQAAgcASgUQATgTAbAAQAdAAASATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQAAASAJAMQAJALANAAQAPAAAIgMQAKgLAAgSQAAgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_61.setTransform(-35.2,279,1.092,1.092);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAVBTIAUhTIAdAAIghCBg");
	this.shape_62.setTransform(-52.5,279,1.092,1.092);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPBBIAAhmIgtAAIAAgbIB5AAIAAAbIgtAAIAABmg");
	this.shape_63.setTransform(1.8,256.7,1.092,1.092);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIBVAAIgFAYIgxAAIAAAaIAtAAIAAAXIgtAAIAAAfIAzAAIAFAZg");
	this.shape_64.setTransform(-10.4,256.7,1.092,1.092);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgoAyQgRgTAAgeQAAgfARgTQARgSAcAAQASAAAMAGQANAHAKANIgUASQgHgIgIgFQgHgEgKAAQgPAAgIALQgIAKAAAUQAAAUAIAJQAIAKAOAAQAGAAAGgCQAFgBAFgEIAAgQIgbAAIAAgXIA6AAIAAAxQgKAMgPAHQgNAGgQAAQgbAAgRgSg");
	this.shape_65.setTransform(-24.5,256.7,1.092,1.092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-64.7,249.2,108.3,138.9), null);


(lib.pc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.term();
	this.instance.parent = this;
	this.instance.setTransform(-168,-193,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2, new cjs.Rectangle(-168,-193,116.6,135.5), null);


(lib.pc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgpictures();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1, new cjs.Rectangle(0,0,350,484), null);


(lib.logosmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AALgHIgEACQgBgDgCAAQgBgBgDAAQgCAAAAABQgCAAAAACQAAADAFABIABAAQAFACACABQACACAAADQAAADgDACQgCADgGAAQgDAAgCgDQgDgBgBgEIADgCQABADACACQACACACAAQACAAACgCQACAAAAgDQAAgDgHgCIgBAAIgFgCQgCgCAAgCQAAgEADgBQACgDADAAQAEAAADACQACACACACg");
	this.shape.setTransform(93.6,16.5,0.946,0.946);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFALQgEgBgBgEIAEgCQABADACACIADACQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgDgGgBIgBgBIgGgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgEADgCQABgCAEAAQAEABACABIAEAFIgEABIgCgDIgEgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAADAFABIAAAAQAGACACABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAAEgCACQgDACgFAAQgEAAgBgCg");
	this.shape_1.setTransform(93.7,16.5,0.946,0.946);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAKgDIAAAQIgEAAIAAgPQAAgEgBgBQAAgCgEAAQgCAAgDACQgBADAAADIAAAOIgEAAIAAgZIAEAAIAAAFQABgCACgCQACgBADAAQAEAAACACQABACAAAFg");
	this.shape_2.setTransform(90.9,16.5,0.946,0.946);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHANIAAgPQgBgEgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgCAAgCACQgDADAAADIAAAOIgDAAIAAgZIADAAIAAAFIAFgEQABgBACAAQAFAAABACQACACAAAFIAAAQg");
	this.shape_3.setTransform(90.9,16.5,0.946,0.946);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgNQAFAAAEAEQADAFAAAEQAAAGgDAEQgEAEgFAAQgFAAgDgEQgDgEAAgGQAAgFADgEQADgEAFAAgAAAgJQgCAAgDACQgCAEAAADQAAAEACAEQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgDQgBgCgEAAg");
	this.shape_4.setTransform(88,16.5,0.946,0.946);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFgBQAFABAEADQADAEAAAFQAAAGgDAEQgEAEgFgBQgFABgDgEgAgFgGQgCADAAADQAAADACAFQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgCQgBgDgEAAQgCAAgDADg");
	this.shape_5.setTransform(88,16.5,0.946,0.946);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAGIgDAAgAgBgHIADAAIAAAaIgDAAg");
	this.shape_6.setTransform(85.8,16,0.946,0.946);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBATIAAgZIADAAIAAAZgAgBgMIAAgFIADAAIAAAFg");
	this.shape_7.setTransform(85.8,16,0.946,0.946);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AABgQIAAALIAFAAIAAADIgFAAIAAAPIABADQAAABADAAIAAAAIACgBIAAAEIgCAAIgCAAQgDAAgBgBQgBgBAAgEIAAgQIgEAAIAAgDIAEAAIAAgJg");
	this.shape_8.setTransform(84.2,16.1,0.946,0.946,0,0,0,0,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADATQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgQIgFAAIAAgEIAFAAIAAgJIACgCIAAALIAGAAIAAAEIgGAAIAAAOIABADQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIABAAIABAAIAAADIgCABg");
	this.shape_9.setTransform(84.2,16,0.946,0.946);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgKgMIAFAAIAAAPQAAAEABABQABACADAAQACAAADgCQACgDAAgEIAAgNIAEAAIAAAZIgEAAIAAgFQgCADgCABQgCABgCAAQgFAAgBgCQgDgDAAgEg");
	this.shape_10.setTransform(81.9,16.5,0.946,0.946);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHALQgDgDAAgEIAAgQIAFAAIAAAPQAAAEABABQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAQACAAADgCQACgDAAgEIAAgNIAEAAIAAAZIgEAAIAAgFQgCADgCABQgCABgCAAQgFAAgBgCg");
	this.shape_11.setTransform(81.9,16.5,0.946,0.946);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAlIgDAAg");
	this.shape_12.setTransform(79.6,16,0.946,0.946);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_13.setTransform(79.6,16,0.946,0.946);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgNQAFAAAEAEQADAFAAAEQAAAGgDAEQgEAEgFAAQgFAAgDgEQgDgEAAgGQAAgFADgEQADgEAFAAgAAAgJQgCAAgDACQgCAEAAADQAAAEACAEQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgDQgBgCgEAAg");
	this.shape_14.setTransform(77.5,16.5,0.946,0.946);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFgBQAFABAEADQADAEAAAFQAAAGgDAEQgEAEgFgBQgFABgDgEgAgFgGQgCADAAADQAAADACAFQACACADAAQAEAAABgCQACgDAAgFQAAgEgCgCQgBgDgEAAQgCAAgDADg");
	this.shape_15.setTransform(77.5,16.5,0.946,0.946);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AANgMIgDADQAAgBgEgDQgDgBgDAAIgEABQgBABAAACQAAACABACQACACAFACQABAAAEACIACAAQADACAAACQABABAAADQAAAFgDADQgFAEgFAAQgFAAgEgDQgDgCgCgFIADgDIAFAGQACACAEAAQAEAAACgCQACgBAAgDQAAgDgBgBQgBgBgHgDIAAAAQgFgBgCgCQgBAAgCgDIgBgEQAAgFAEgCQADgDAEAAQAEAAAEACQADACACADg");
	this.shape_16.setTransform(74.3,16,0.946,0.946);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIARQgDgCgCgFIADgDIAFAGQACACAEAAQADAAACgCQADgBAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAIgHgEIAAAAQgFgBgCgCIgDgDIgBgEQAAgFAEgCQADgDAEAAQAEAAADACQAEACACADIgDADQAAgBgFgDIgFgBIgEABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQACACAFACIAEACIADAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIABAEQAAAFgDADQgFAEgFAAQgFAAgEgDg");
	this.shape_17.setTransform(74.4,16,0.946,0.946);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAlIgDAAg");
	this.shape_18.setTransform(68.2,16,0.946,0.946);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_19.setTransform(68.2,16,0.946,0.946);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAKgDIAAAJIAAAEIACAAIABAAIAAADIgCABIgBAAQgCAAgBgBQgBgCAAgCQgDAEgBAAQgCABgCAAQgEAAgCgDQgCgCAAgDQAAgDACgCQABgBAEgCIADAAIAGgCIAAgBQAAgCgCgBQgCgBgCAAIgDABQgCAAgBADIgDgCQACgDACgCIAGgBQAFAAACADQACACAAAFgAAGgCIgIACIgDACIgBAEIABADQACACACAAQACAAACgCQADgDAAgDg");
	this.shape_20.setTransform(66,16.5,0.946,0.946);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAJANIgDgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgEADIgEABQgEAAgCgCQgCgCAAgEQAAgDACgBQACgBAEgCIACAAIAGgCIAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgEgBIgDABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAABIgEgCIAFgFIAFgBQAFAAACACQACADAAAEIAAAKIAAAEIADAAIAAAAIAAADIgBAAgAgDAAIgDACIAAADIABAEQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAQADAAACgCQACgDAAgDIAAgFg");
	this.shape_21.setTransform(66.1,16.5,0.946,0.946);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AABgQIAAALIAFAAIAAADIgFAAIAAAPIABADQABABACAAIAAAAIACgBIAAAEIgCAAIgCAAQgDAAgBgBQgBgBAAgEIAAgQIgEAAIAAgDIAEAAIAAgJg");
	this.shape_22.setTransform(63.8,16.1,0.946,0.946,0,0,0,0,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADATQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgQIgEAAIAAgEIAEAAIAAgJIADgCIAAALIAGAAIAAAEIgGAAIAAAOIABADIADABIABAAIABAAIAAADIgCABg");
	this.shape_23.setTransform(63.8,16,0.946,0.946);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAGIgDAAgAgBgHIADAAIAAAaIgDAAg");
	this.shape_24.setTransform(62.2,16,0.946,0.946);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBATIAAgZIADAAIAAAZgAgBgMIAAgFIADAAIAAAFg");
	this.shape_25.setTransform(62.2,16,0.946,0.946);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgGAEIAAAOIgEAAIAAgiIAEAAIAAAEIAEgEQAAgBADAAQAGAAACAEQADAEAAAGQAAAFgDAEQgCADgGAAIgDgBgAAAgOQgCAAgCADQgCAEAAADQAAAEACADQACADACAAQADAAACgDQACgCAAgEQAAgGgCgCQgBgDgEAAg");
	this.shape_26.setTransform(60.1,16.9,0.946,0.946);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLASIAAgiIAFAAIAAAEIADgEQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAFAAACADQAEAEAAAGQAAAGgEADQgCAEgFAAIgEgBIgDgEIAAAOgAgEgMQgCAEAAAEQAAAEACADQACADACAAQADAAACgDQACgCAAgFQAAgFgCgCQgCgDgDAAQgCAAgCACg");
	this.shape_27.setTransform(60.1,16.9,0.946,0.946);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAJgDIAAAJIABAEIABAAIABAAIAAADIgBABIgBAAIgEgBIgBgEIgEAEQgBABgCAAQgEAAgDgDQgCgBAAgEQAAgDACgCQACgBAEgCIACAAIAGgCIAAAAIAAgBQAAgCgBgBIgEgBIgEABIgDADIgDgCQACgDADgCIAFgBQAFAAACADQACACAAAFgAAFgCIgIACIgDACIgBAEQAAACACABQABACACAAQACAAADgCQACgDAAgDg");
	this.shape_28.setTransform(57.2,16.5,0.946,0.946);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAJANIgDgBIgBgDIgEADIgDABQgEAAgDgCQgCgBAAgFQAAgDACgBQABgBAEgCIADAAIAFgCIABgBIAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgDgBIgEABIgDADIgDgCQABgDADgCIAGgBQAFAAACACQACADAAAEIAAAKIAAAEIACAAIABAAIAAADIgCAAgAgDAAIgDACIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQACAAACgCQACgDAAgDIAAgFg");
	this.shape_29.setTransform(57.2,16.5,0.946,0.946);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAPgKIgEADQgDgEgCgBQgCgCgDAAQgFAAgDAEQgDAEAAAGQAAAHADAEQADAEAFAAQAEAAACgCQADgCACgDIADACQgCAFgEACQgEADgFAAQgGAAgFgGQgEgFAAgJQAAgIAEgFQAFgGAHAAQAEAAAEADQADABADAFg");
	this.shape_30.setTransform(54.2,16,0.946,0.946);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAOQgFgFAAgJQAAgIAFgFQAEgGAHAAQAFAAADADQADABADAFIgEADQgCgEgCgBQgCgCgEAAQgEAAgDAEQgDAEAAAGQAAAHADAEQADAEAEAAQAEAAACgCIAFgFIAEACQgCAFgEACQgEADgFAAQgHAAgEgGg");
	this.shape_31.setTransform(54.1,16,0.946,0.946);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAIAEIgEAEIgEABQgFAAgCgEQgDgDAAgGQAAgGADgEQACgDAFAAQACAAACABIAEAEIAAgFIAEAAIAAAaQAAAFgDACQgEACgFAAQgEAAgCgCQgDgCAAgEIAEAAQAAACACACIADABQAEAAACgCQACgCAAgDgAABAGIACgBIACgCIACgDIABgDIgBgFIgBgCQAAgCgCgBIgDgBQgCAAgDADQgCACAAAFQAAAEACADQADADACAAg");
	this.shape_32.setTransform(46.9,16.9,0.946,0.946);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHAQQgCgCAAgEIAEAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADABQAEAAABgCQADgCAAgDIAAgEIgFAEIgDABQgFAAgCgEQgDgDAAgGQAAgGADgEQACgDAFAAIADABIAFAEIAAgFIADAAIAAAaQAAAFgCACQgEACgFAAQgEAAgDgCgAgEgLQgCACAAAFQAAAEACADQADADACAAIACgBIACgCIACgDIABgDIgBgFIgBgCQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgCgBQgCAAgDADg");
	this.shape_33.setTransform(46.9,16.9,0.946,0.946);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AALgDIAAAQIgFAAIAAgPQAAgEgBgBQgBgCgDAAQgCAAgCACQgCACAAAEIAAAOIgFAAIAAgZIAFAAIAAAFQABgDACgBQACgBADAAQAEAAACACQACACAAAFg");
	this.shape_34.setTransform(44,16.5,0.946,0.946);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAGANIAAgPQAAgEgBgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgCACQgCACAAAEIAAAOIgFAAIAAgZIAFAAIAAAFIADgEIAFgBQAEAAACACQACACAAAFIAAAQg");
	this.shape_35.setTransform(44,16.5,0.946,0.946);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgBgSIADAAIAAAGIgDAAgAgBgHIADAAIAAAaIgDAAg");
	this.shape_36.setTransform(41.8,16,0.946,0.946);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgBATIAAgZIADAAIAAAZgAgBgMIAAgFIADAAIAAAFg");
	this.shape_37.setTransform(41.8,16,0.946,0.946);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgNgSIAEAAIAAAWIAKgKIAGAAIgIAHIAJASIgFAAIgGgPIgGAFIAAAKIgEAAg");
	this.shape_38.setTransform(40.2,16,0.946,0.946);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAGATIgGgPIgFAFIAAAKIgFAAIAAglIAFAAIAAAWIAJgKIAGAAIgIAHIAJASg");
	this.shape_39.setTransform(39.9,16,0.946,0.946);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAHgMIAAAEIgCAAQgDAAgCADQgBADAAAEIAAALIgFAAIAAgZIAEAAIAAAIIABAAQAAgEACgDQACgBACAAg");
	this.shape_40.setTransform(37.6,16.5,0.946,0.946);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGANIAAgZIAFAAIAAAIIAAAAQAAgEACgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIACAAIAAAEIgCAAQgDAAgCADQgBADAAAEIAAALg");
	this.shape_41.setTransform(37.6,16.5,0.946,0.946);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgNQAGAAADAEQADAEAAAFQAAAGgDAEQgDAEgGAAQgFAAgCgEQgEgEAAgGQAAgFAEgEQACgEAFAAgAAAgJQgCAAgDACQgCADAAAEQAAAFACADQADACACAAQAEAAACgCQACgDAAgFQAAgEgCgDQgCgCgEAAg");
	this.shape_42.setTransform(35.1,16.5,0.946,0.946);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAKQgDgDAAgHQAAgGADgDQADgDAFgBQAGABADADQADAEAAAFQAAAHgDADQgDAEgGgBQgFABgDgEgAgFgGQgCACAAAEQAAAFACADQACACADAAQADAAADgCQACgDAAgFQAAgEgCgCQgDgDgDAAQgCAAgDADg");
	this.shape_43.setTransform(35.1,16.5,0.946,0.946);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgWgRIAFAAIAIAdIAIgdIAEAAIAIAdIAIgdIAEAAIgKAkIgFAAIgIgdIgHAdIgFAAg");
	this.shape_44.setTransform(31.5,15.9,0.946,0.946);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAIATIgIgeIgHAeIgFAAIgKglIAFAAIAIAdIAIgdIAEAAIAIAdIAIgdIAEAAIgKAlg");
	this.shape_45.setTransform(31.5,16,0.946,0.946);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1819").s().p("AmSAqIAAhTIMlAAIAABTg");
	this.shape_46.setTransform(61.9,16.1,0.946,0.946);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF141E").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_47.setTransform(25.1,2.2,0.946,0.946);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1819").s().p("AgYAbQgIgKAAgRQAAgPAJgLQAJgKAOABQAQAAAIAKQAJAJAAATIAAADIgtAAQABAJADADQAEAEAGAAQAFAAAEgCQADgCAEgHIANAIQgEAJgIAFQgIADgLAAQgOAAgKgJgAgIgSQgEAEAAAHIAAABIAYAAIAAgBQAAgIgCgDQgFgFgFAAQgGAAgCAFg");
	this.shape_48.setTransform(97,6.9,0.946,0.946);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1819").s().p("AgWAbQgJgKAAgRQAAgPAJgLQAKgKAOABQALAAAHAEQAHAFAFAJIgQAIQgCgHgDgCQgDgDgFAAQgHAAgDAFQgEAHAAAJQAAAKAEAHQAEAFAGAAQAFAAADgDQADgDACgGIAQAIQgFAKgHAEQgHAEgLAAQgOABgKgKg");
	this.shape_49.setTransform(90.1,6.9,0.946,0.946);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1819").s().p("AAMAkIAAgrQAAgIgDgCQgCgEgFAAQgFAAgFAFQgDAEAAAHIAAApIgTAAIAAhFIATAAIAAAMQAEgHAFgDQAEgDAIAAQALgBAEAHQAGAGAAAMIAAAug");
	this.shape_50.setTransform(82.7,6.8,0.946,0.946);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1819").s().p("AAMAhQgDgCgBgIQgFAIgDACQgEADgHAAQgKABgGgHQgHgFAAgKQAAgHAFgHQAEgEAHgCIAZgGIAAgEQAAgEgCgDQgEgCgDAAQgFAAgCACQgCABgEAFIgOgGQADgGAIgEQAGgDALAAQAPAAAGAFQAHAGAAAPIAAAVIABAHQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAIABAAIACAAIAAAOIgHACIgGAAQgHAAgDgDgAAAAAQgPAEAAAJQAAADADAEQACACAEAAQAGABAEgFQADgEAAgIIAAgIg");
	this.shape_51.setTransform(75.1,6.9,0.946,0.946);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1819").s().p("AgJAjIgahFIATAAIAQAvIARgvIATAAIgaBFg");
	this.shape_52.setTransform(67.8,6.9,0.946,0.946);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1819").s().p("AgaApQgHgJAAgSQAAgPAHgKQAIgKANAAQAFAAAFADQAFACAFAGIAAgoIATAAIAABjIgTAAIAAgJQgFAGgFACQgFADgFAAQgOAAgHgKgAgJgCQgEAFAAALQAAAMAEAFQADAHAGAAQAEAAAEgDQADgCAEgFIAAgbQgEgFgDgCQgEgCgEAAQgFAAgEAGg");
	this.shape_53.setTransform(60,5.5,0.946,0.946);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1819").s().p("AAaAyIgHgTIgnAAIgGATIgXAAIAihjIAdAAIAlBjgAgNALIAaAAIgOgpg");
	this.shape_54.setTransform(51.5,5.5,0.946,0.946);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1819").s().p("AAMAkIAAgrQAAgHgDgDQgCgEgGAAQgFAAgDAFQgEADABAIIAAApIgUAAIAAhFIAUAAIAAAMQADgHAGgDQADgDAIAAQALgBAFAHQAFAFAAANIAAAug");
	this.shape_55.setTransform(42.4,6.8,0.946,0.946);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1819").s().p("AgJAyIAAhEIATAAIAABEgAgJgfIAAgSIATAAIAAASg");
	this.shape_56.setTransform(36.4,5.5,0.946,0.946);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1819").s().p("AghAyIAAhjIBDAAIgDATIgpAAIAAAXIAjAAIAAASIgjAAIAAAng");
	this.shape_57.setTransform(31.3,5.5,0.946,0.946);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E1819").s().p("AgGAfIAAgrIgIAAIAAgSIAdAAIAAA9g");
	this.shape_58.setTransform(25,7.2,0.946,0.946);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#93CE1A").s().p("AgPguIAeAKIAABCQgOANgQAEg");
	this.shape_59.setTransform(12.8,13.5,0.946,0.946);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AgPAhIAAhIIAfAAIAABOIgGABQgMAAgNgHg");
	this.shape_60.setTransform(8.7,14.4,0.946,0.946);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#93CE1A").s().p("AgPgHIAAgPIAfAAIAAAsQgVgNgKgQg");
	this.shape_61.setTransform(4.8,15,0.946,0.946);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AARANQABgxgqgkQAEgGAAgMQBBAugSBCQgHAZgSAVQgQATgQAEQAugcABgyg");
	this.shape_62.setTransform(17.4,11.6,0.946,0.946);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1E1819").s().p("AgaBcQglgPgSgmQgSgmAOgmQAPgnAqgVQgiAUgKAjQgKAgANAfQAMAhAcAQQAeATAlgKQAQgEALgNQAVgYgDgoQASAhgPAcQgOAaghAJQgPAEgPAAQgRAAgSgGg");
	this.shape_63.setTransform(8.7,11.2,0.946,0.946);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3E3D3F").s().p("AAwAaQgEgdgxgJQhDgTAPhEQAEAgATAOQAKAIAxAUQAnAQgDAqQgDApgoAaQAhgvgDgbg");
	this.shape_64.setTransform(12.4,9.8,0.946,0.946);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF141E").s().p("AgKALQgGgEAAgHQAAgFAGgFQAFgGAFABQAHgBAEAGQAGAFAAAFQAAAHgGAEQgEAFgHABQgFgBgFgFg");
	this.shape_65.setTransform(13,3,0.946,0.946);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3E3D3F").s().p("AgaBZQgjgOgSgkQgRglANglQAOgoAngUQggAUgKAiQgJAeANAfQAMAgAbAQQAdASAjgJQARgGALgMQAWgYgDgmQAPAhgQAbQgOAZgfAJQgOAFgOAAQgRAAgRgHg");
	this.shape_66.setTransform(8.9,11.2,0.946,0.946);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logosmall, new cjs.Rectangle(0,0.4,100.2,20.2), null);


(lib.logobig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgNIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBQgIgDgDgCQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGg");
	this.shape.setTransform(90,53,0.678,0.678);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAWQgEgEgDgHIAHgDQABAGAEADQAEADAEAAQAGAAACgCQADgCAAgEQAAgFgMgEIgCgBIgLgFQgDgDAAgFQAAgGAFgEQAFgEAGAAQAHAAAFADQAFADACAGIgGACQgDgEgDgCQgCgCgFAAQgDAAgDACQgDACAAADQAAAFALADIABAAQAJADAFADQADAEAAAFQAAAHgFAEQgFAEgKAAQgHAAgFgEg");
	this.shape_1.setTransform(90.1,53,0.678,0.678);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgHgDgEQgCgDgFAAQgFAAgEAEQgEAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAEAAQAIAAAFAEQADAEAAAKg");
	this.shape_2.setTransform(86.4,53,0.678,0.678);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgHgDgEQgCgDgFAAQgFAAgFAEQgDAEAAAIIAAAbIgIAAIAAgwIAIAAIAAAKQACgFAFgEQAEgCAFAAQAHAAAEAEQAEAEAAAKIAAAfg");
	this.shape_3.setTransform(86.4,53,0.678,0.678);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQALAAAGAHQAGAHAAALQAAAMgGAHQgGAHgLAAQgJAAgGgHQgHgIAAgLQAAgKAHgIQAHgHAIAAgAAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgFQgEgFgHAAg");
	this.shape_4.setTransform(82.4,53,0.678,0.678);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQATQgGgIAAgLQAAgKAGgIQAIgHAIAAQALAAAFAHQAHAHAAALQAAAMgHAHQgFAHgLAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAEAFAGAAQAHAAADgFQAFgFAAgJQAAgIgFgFQgDgFgHAAQgGAAgEAFg");
	this.shape_5.setTransform(82.4,53,0.678,0.678);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_6.setTransform(79.5,52.3,0.678,0.678);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_7.setTransform(79.5,52.3,0.678,0.678);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAFABIACAAIACgBIAAAHIgEABIgDAAQgGAAgCgDQgCgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRg");
	this.shape_8.setTransform(77.3,52.3,0.678,0.678,0,0,0,0,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_9.setTransform(77.3,52.3,0.678,0.678);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgTgYIAIAAIAAAdQAAAHACAEQACADAGAAQAGAAADgEQAEgFAAgHIAAgbIAIAAIAAAwIgIAAIAAgJQgDAGgEACQgDACgGAAQgHAAgEgEQgEgFAAgKg");
	this.shape_10.setTransform(74.1,53,0.678,0.678);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAVQgEgFAAgKIAAgeIAIAAIAAAdQAAAHACADQACAEAGAAQAGAAADgFQAEgFAAgHIAAgaIAIAAIAAAwIgIAAIAAgKQgDAHgEABQgDADgGAAQgHAAgEgEg");
	this.shape_11.setTransform(74.1,53,0.678,0.678);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_12.setTransform(71.1,52.3,0.678,0.678);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_13.setTransform(71.1,52.3,0.678,0.678);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHQgGgHAAgMQAAgKAGgIQAHgHAJAAgAAAgSQgFAAgFAFQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAg");
	this.shape_14.setTransform(68.2,53,0.678,0.678);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQATQgGgHAAgMQAAgKAGgIQAHgHAJAAQAKAAAHAHQAGAIAAAKQAAAMgGAHQgHAHgKAAQgJAAgHgHgAgKgNQgDAFAAAIQAAAJADAFQAFAFAFAAQAHAAADgFQAEgFAAgJQAAgIgEgFQgDgFgHAAQgFAAgFAFg");
	this.shape_15.setTransform(68.2,53,0.678,0.678);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAagYIgGAHQgFgGgEgCQgGgDgFAAQgFAAgCADQgEABAAAFQAAAFADABQADADAKAFIAKADIAFACQAEAEACADQABAEAAAEQAAAKgHAGQgGAGgNAAQgJAAgHgEQgHgEgDgJIAGgGQADAHAGAEQAFAEAHAAQAIAAADgEQAFgCAAgHQAAgDgDgDQgEgEgKgDIgBgCQgJgBgFgEQgEgEgBgCQgCgEAAgEQAAgHAGgGQAHgFAJAAQAIAAAGADQAGADAFAGg");
	this.shape_16.setTransform(63.9,52.3,0.678,0.678);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAhQgHgFgEgJIAHgGQADAIAFAEQAGADAHAAQAHAAAEgCQAEgDAAgGQAAgFgDgCQgDgEgLgEIgBgBQgIgBgFgEIgFgGQgCgDAAgFQAAgIAGgFQAGgFAJAAQAIAAAGADQAHADAEAGIgFAHQgFgGgEgDQgGgCgFAAQgFAAgDACQgDACAAAFQAAAFADABQACADALAEIAKAFIAEABQAEADACAEQACAEAAAFQAAAJgHAGQgHAGgMAAQgJAAgHgEg");
	this.shape_17.setTransform(63.9,52.3,0.678,0.678);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAABFIgHAAg");
	this.shape_18.setTransform(55.5,52.3,0.678,0.678);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAkIAAhGIAHAAIAABGg");
	this.shape_19.setTransform(55.5,52.3,0.678,0.678);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_20.setTransform(52.7,53,0.678,0.678);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_21.setTransform(52.7,53,0.678,0.678);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AADghIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEACACIAFABIABAAIADgBIAAAHIgEABIgEAAQgGAAgBgDQgDgDAAgGIAAgfIgIAAIAAgGIAIAAIAAgRg");
	this.shape_22.setTransform(49.5,52.3,0.678,0.678,0,0,0,0,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAkQgGAAgBgDQgDgDAAgGIAAgfIgJAAIAAgGIAJAAIAAgRIAHgFIAAAWIAKAAIAAAGIgKAAIAAAdQAAAEABACIAGABIABAAIACgBIAAAHIgDABg");
	this.shape_23.setTransform(49.5,52.3,0.678,0.678);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_24.setTransform(47.4,52.3,0.678,0.678);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_25.setTransform(47.4,52.3,0.678,0.678);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgNAIIAAAaIgIAAIAAhCIAIAAIAAAJQADgFAEgCQAEgDAEAAQAJAAAGAHQAFAHAAAMQAAALgFAHQgFAHgKAAQgEAAgEgCQgEgDgDgFgAAAgbQgFAAgEAFQgEAFAAAJQAAAJAEAFQADAFAGAAQAGAAAEgFQADgFAAgIQAAgKgDgFQgEgFgGAAg");
	this.shape_26.setTransform(44.6,53.5,0.678,0.678);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAiIAAhCIAIAAIAAAIQADgEAEgCQAEgDAEAAQAJAAAGAHQAFAGAAANQAAALgFAHQgFAGgKAAQgEAAgEgBQgEgDgDgFIAAAagAgJgWQgEAFAAAJQAAAJAEAGQADAEAGAAQAGAAAEgEQADgGAAgIQAAgKgDgEQgEgGgGAAQgFAAgEAFg");
	this.shape_27.setTransform(44.6,53.5,0.678,0.678);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AARgIIAAAUIABAGQABABACAAIABAAIABAAIAAAGIgDABIgCAAQgEAAgCgCQgDgDAAgEQgDAEgEADQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIgAAJgDIgQAEQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGg");
	this.shape_28.setTransform(40.6,53,0.678,0.678);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAaQgEAAgCgCQgDgDAAgEIgHAHQgDACgFAAQgIAAgDgEQgFgEAAgHQAAgHAEgDQAEgDAGgCIAGgBQAGgBAFgDIAAAAIAAgBQAAgEgDgDQgCgCgEAAQgFAAgDACQgDACgDAEIgGgDQADgEAFgEQAGgDAGAAQAJAAAEAEQAEAFAAAIIAAAUIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIABAAIAAAGIgDABgAgHABQgCAAgDADQgCADAAADQAAAFADACQACADAFAAQAFAAAEgEQAEgEAAgGIAAgJg");
	this.shape_29.setTransform(40.6,53,0.678,0.678);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAcgUIgHAFQgFgHgDgCQgFgEgGAAQgKAAgFAIQgGAHAAANQAAANAGAHQAGAIAJAAQAHAAAFgDQAFgEADgGIAHAFQgEAJgHAEQgHAEgKAAQgNAAgJgKQgIgKAAgRQAAgQAIgKQAJgKAOAAQAJAAAGAEQAHAEAEAIg");
	this.shape_30.setTransform(36.5,52.3,0.678,0.678);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgQAJgKQAIgKAOAAQAJAAAHAEQAHAEADAIIgHAFQgEgHgEgDQgFgCgGAAQgJAAgGAHQgGAIAAAMQAAANAGAHQAGAIAKAAQAGAAAFgDQAGgEADgGIAHAEQgFAJgHAFQgGAEgKAAQgNAAgJgKg");
	this.shape_31.setTransform(36.4,52.3,0.678,0.678);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAALIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGQgDgEgCgBQgCgBgEAAQgFAAgEAFQgDAGAAAIQAAAIADAGQAEAFAFAAgAAOAHQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGg");
	this.shape_32.setTransform(26.7,53.6,0.678,0.678);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAeQgFgDAAgIIAAgBIAIACQABAEADADQADACAEAAQAHAAADgDQAEgEAAgGIAAgJQgDAFgEADQgEACgEAAQgKAAgFgHQgFgGAAgMQAAgNAGgGQAFgHAJAAQAEAAAEADQAEACADAFIAAgIIAIAAIAAAwQAAAJgGAFQgFAFgLAAQgIAAgGgFgAgJgWQgDAGAAAIQAAAIADAGQAEAFAFAAIAFgBIAFgEQACgCABgDIABgHIgBgJIgCgGIgFgFQgCgBgEAAQgFAAgEAFg");
	this.shape_33.setTransform(26.7,53.6,0.678,0.678);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAUgGIAAAfIgIAAIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJg");
	this.shape_34.setTransform(22.8,53,0.678,0.678);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAMAZIAAgdQAAgIgCgDQgEgDgEAAQgFAAgEAEQgEAFAAAHIAAAbIgIAAIAAgwIAIAAIAAAKQADgGAEgDQAEgCAEAAQAJAAADAEQAEAFAAAJIAAAfg");
	this.shape_35.setTransform(22.8,53,0.678,0.678);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgDgiIAHAAIAAALIgHAAgAgDgNIAHAAIAAAwIgHAAg");
	this.shape_36.setTransform(19.8,52.3,0.678,0.678);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDAjIAAgwIAHAAIAAAwgAgDgXIAAgLIAHAAIAAALg");
	this.shape_37.setTransform(19.8,52.3,0.678,0.678);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgWgiIAIAAIAAAqIATgVIALAAIgQAPIASAhIgJAAIgNgbIgKAKIAAARIgIAAg");
	this.shape_38.setTransform(17.4,52.3,0.678,0.678);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAkIgNgcIgKAKIAAASIgIAAIAAhGIAIAAIAAAqIATgVIAKAAIgPAPIARAig");
	this.shape_39.setTransform(17.2,52.3,0.678,0.678);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AANgYIAAAJIgDAAIgBAAQgGAAgDAFQgDAFAAAKIAAAUIgJAAIAAgwIAIAAIAAAOIAAAAQADgIACgEQADgDAFAAIADAAg");
	this.shape_40.setTransform(14.1,53,0.678,0.678);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAZIAAgwIAHAAIAAAOIABAAQACgIADgEQADgDAEAAIADAAIABAAIAAAJIgCAAIgCAAQgGAAgDAFQgDAFAAAKIAAAUg");
	this.shape_41.setTransform(14.1,53,0.678,0.678);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AAAgZQALAAAGAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHQgHgHAAgMQAAgLAHgHQAGgHAJAAgAAAgSQgGAAgDAFQgEAFAAAIQAAAJAEAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAg");
	this.shape_42.setTransform(10.6,53,0.678,0.678);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgPATQgHgHAAgMQAAgLAHgHQAFgHAKAAQAKAAAHAHQAGAIAAAKQAAALgGAIQgHAHgKAAQgKAAgFgHgAgJgNQgFAFAAAIQAAAJAFAFQADAFAGAAQAHAAAEgFQADgFAAgJQAAgIgDgFQgEgFgHAAQgGAAgDAFg");
	this.shape_43.setTransform(10.6,53,0.678,0.678);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.2,0,0,22.9).p("AgrgiIAJAAIAPA4IAPg4IAJAAIAPA4IAPg4IAJAAIgTBGIgJAAIgQg5IgOA5IgKAAg");
	this.shape_44.setTransform(5.8,52.2,0.678,0.678);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAPAkIgPg5IgPA5IgJAAIgThGIAJAAIAPA3IAPg3IAIAAIAQA3IAPg3IAJAAIgTBGg");
	this.shape_45.setTransform(5.8,52.3,0.678,0.678);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1819").s().p("Ar6BQIAAifIX1AAIAACfg");
	this.shape_46.setTransform(47,52.4,0.678,0.678);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF141E").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_47.setTransform(-2.9,33.7,0.678,0.678);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1819").s().p("AgtAyQgQgRAAghQAAgfARgSQAQgTAcAAQAfAAAPATQAQAUABAjIAAAFIhXAAQABAQAIAHQAHAIALgBQAKAAAHgEQAHgEAHgLIAZAPQgJARgOAHQgOAIgWAAQgdAAgQgTgAgRgjQgHAIAAAOIAAABIAvAAIAAgCQAAgPgFgHQgHgHgLAAQgLgBgGAJg");
	this.shape_48.setTransform(94.7,40,0.678,0.678);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1819").s().p("AgqAyQgSgSAAggQAAgeASgTQASgTAcAAQAVAAAOAJQAOAIAIASIgfAPQgCgLgHgGQgHgGgJAAQgMAAgHALQgHAKAAAUQAAAUAHALQAIALAMAAQAJAAAGgGQAGgGADgLIAfAPQgIARgOAJQgOAJgVAAQgcAAgSgTg");
	this.shape_49.setTransform(85.3,40,0.678,0.678);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgLAAgHAIQgGAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAGgMALgIQAKgGANAAQATAAALAMQAKALAAAXIAABXg");
	this.shape_50.setTransform(75.2,39.8,0.678,0.678);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1819").s().p("AAXA/QgHgGAAgNQgJANgIAGQgKAGgMAAQgSAAgMgMQgLgLAAgRQAAgOAHgMQAJgKAMgDQAJgEAPgBQASgDAIgEIAAgIQgBgHgFgFQgFgDgIAAQgHAAgHADQgEADgGAJIgbgMQAHgOANgFQAPgHATAAQAdAAALAKQAMAMABAcIAAAoQAAALABADQADADAFAAIAFgBIAAAaIgXAFQgMAAgHgGgAAAAAQgdAIAAARQAAAIAEAEQAGAFAHABQAMgBAHgHQAGgKABgOIAAgQg");
	this.shape_51.setTransform(64.9,40,0.678,0.678);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1819").s().p("AgTBBIgxiBIAmAAIAeBZIAfhZIAmAAIgxCBg");
	this.shape_52.setTransform(55.1,40,0.678,0.678);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1819").s().p("AgyBNQgOgRAAghQAAggAOgSQAPgSAYAAQALAAAKAGQAJAEAJALIAAhLIAlAAIAAC7IglAAIAAgRQgJAKgJAGQgKAFgLAAQgYAAgPgTgAgSgFQgHALAAAVQAAAVAHALQAHAMAMAAQAHAAAHgEQAFgDAIgLIAAg0QgHgJgGgEQgGgEgIAAQgLgBgIAMg");
	this.shape_53.setTransform(44.4,38.1,0.678,0.678);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1819").s().p("AAyBeIgNgkIhLAAIgMAkIgsAAIBBi7IA2AAIBGC7gAgaAUIAyAAIgZhNg");
	this.shape_54.setTransform(32.9,38,0.678,0.678);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1819").s().p("AAWBDIAAhQQAAgOgFgHQgEgGgKAAQgMAAgFAIQgHAIAAAPIAABMIglAAIAAiBIAlAAIAAAWQAHgNAKgHQAKgGANAAQAUAAAKAMQAKALAAAXIAABXg");
	this.shape_55.setTransform(20.6,39.8,0.678,0.678);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1819").s().p("AgSBeIAAiBIAlAAIAACBgAgSg7IAAgiIAlAAIAAAig");
	this.shape_56.setTransform(12.5,38,0.678,0.678);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1819").s().p("AhABeIAAi7ICBAAIgHAjIhNAAIAAArIBDAAIAAAjIhDAAIAABKg");
	this.shape_57.setTransform(5.5,38,0.678,0.678);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E1819").s().p("AgMA7IAAhSIgPAAIAAgjIA3AAIAAB1g");
	this.shape_58.setTransform(-3.1,40.4,0.678,0.678);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg5IgwgQIAACUQAbgGAVgVg");
	this.shape_59.setTransform(90.2,21,0.678,0.678);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#93CE1A").s().p("AgXhKIAvAQIAABqQgUAVgbAFg");
	this.shape_60.setTransform(90.2,21,0.678,0.678);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAZg9IgwgBIAABzQAXAMAZgDg");
	this.shape_61.setTransform(85.7,22.1,0.678,0.678);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#93CE1A").s().p("AgXA1IAAhzIAvABIAAB7IgIABQgUAAgTgKg");
	this.shape_62.setTransform(85.7,22.1,0.678,0.678);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AAYglIgwAAIAAAYQAPAaAhAVg");
	this.shape_63.setTransform(81.2,22.8,0.678,0.678);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#93CE1A").s().p("AgYgLIAAgYIAwAAIAABHQgggVgQgag");
	this.shape_64.setTransform(81.2,22.7,0.678,0.678);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#93CE1A").ss(0.5,0,0,2.6).p("AgdiUQACAUgIAJQBEA5gCBOQgCBQhIAtQAZgIAZgeQAcggALgoQAdhphohKg");
	this.shape_65.setTransform(95.3,18.9,0.678,0.678,0,0,0,0,-0.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#93CE1A").s().p("AAbAUQAChOhEg5QAIgJgCgUQBoBKgdBpQgLAogcAgQgZAegZAIQBIgtAChQg");
	this.shape_66.setTransform(95.6,18.8,0.678,0.678);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1E1819").ss(0.2,0,0,2.6).p("ACCgBQAFBAggAlQgSAUgaAIQg7APgvgdQgsgagUg0QgUgyAPgzQAQg3A2ggQhCAigXA9QgXA8AcA9QAeA9A6AWQAyAUA2gPQA0gQAVgoQAYgtgdg0g");
	this.shape_67.setTransform(85.6,18.3,0.678,0.678);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1E1819").s().p("AgqCRQg6gXgeg8Qgcg9AXg8QAXg+BCgiQg2AggQA4QgPAyAUAzQAUAzAsAbQAvAcA7gOQAagIASgVQAggkgFhBQAdA1gYAsQgVApg0APQgYAHgXAAQgcAAgdgLg");
	this.shape_68.setTransform(85.6,18.4,0.678,0.678);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#3E3D3F").ss(0.2,0,0,2.6).p("AAngmQhOghgRgNQgdgWgGgyQgZBrBrAfQBNANAHAvQAGArg1BKQA/goAFhCQAFhCg+gZg");
	this.shape_69.setTransform(89.9,16.7,0.678,0.678);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3E3D3F").s().p("ABLApQgHgvhNgOQhrgeAZhrQAGAyAdAWQARAMBOAiQA+AZgFBBQgFBCg/ApQA1hKgGgrg");
	this.shape_70.setTransform(89.9,16.8,0.678,0.678);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FF141E").ss(0.5,0,0,2.6).p("AAAgZQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHQgHgIAAgLQAAgKAHgHQAIgIAKAAg");
	this.shape_71.setTransform(90.5,9,0.678,0.678);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF141E").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_72.setTransform(90.5,9,0.678,0.678);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3E3D3F").s().p("AgqCMQg3gVgcg6Qgbg7AVg7QAVg+A+ggQgzAfgPA2QgOAxATAxQAUAyArAaQAuAcA3gOQAagIAUgVQAiglgFg9QAYA0gZArQgWAogyAPQgWAHgWAAQgbAAgcgMg");
	this.shape_73.setTransform(85.8,18.3,0.678,0.678);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logobig, new cjs.Rectangle(-4.9,5.1,104.8,52.8), null);


(lib.contacts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape.setTransform(34,375.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_1.setTransform(28.2,373.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_2.setTransform(22.9,373.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CE1A").s().p("AAPApQgEgEgBgIQgFAHgFAFQgHAEgHABQgNAAgHgIQgJgIABgLQAAgKAFgHQAEgGAJgDIARgDIAQgEIAAgGQAAgFgEgCQgCgCgGgBQgFAAgEACQgDADgDAFIgTgIQAFgIAJgEQAHgEAPgBQAUABAHAGQAHAHAAATIAAAaIACAJQABACADAAIACAAIACAAIABARIgQAEQgJAAgEgFgAAAAAQgTAFABALQAAAFADAEQACADAGAAQAHAAAEgGQAFgEAAgLIAAgKg");
	this.shape_3.setTransform(15.5,375.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93CE1A").s().p("AAqAtIAAg1QAAgKgDgEQgEgFgGABQgIgBgEAGQgFAFAAAKIAAAzIgXAAIAAg1QAAgKgDgEQgDgFgHABQgIgBgEAGQgEAFAAAKIAAAzIgZAAIAAhWIAZAAIAAAPQAEgJAHgEQAHgEAJAAQALAAAEAEQAHAFACAKQAFgKAHgFQAHgEAKAAQANAAAGAHQAHAIAAAPIAAA6g");
	this.shape_4.setTransform(2.7,375.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#93CE1A").s().p("AgpA+IAAh7IBRAAIgFAXIguAAIAAAZIArAAIAAAWIgrAAIAAAdIAwAAIAFAYg");
	this.shape_5.setTransform(-9.7,373.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93CE1A").s().p("AgLArIAAgbIAYAAIAAAbgAgLgPIAAgbIAYAAIAAAbg");
	this.shape_6.setTransform(16.2,314.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93CE1A").s().p("AgMA+IAAh7IAYAAIAAB7g");
	this.shape_7.setTransform(10.4,312.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93CE1A").s().p("AgdAhQgLgLAAgWQAAgVALgLQALgNASABQAUgBALANQAKANAAAXIAAADIg4AAQABAMAEADQAEAFAIABQAHAAAEgEQAFgBAEgJIARAKQgGALgJAFQgKAFgOABQgTAAgKgNgAgLgXQgEAGAAAJIAAABIAeAAIAAgCQAAgLgDgDQgFgFgHgBQgHAAgEAGg");
	this.shape_8.setTransform(2.9,314.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#93CE1A").s().p("AgOA+IAAhhIgrAAIAAgaIBzAAIAAAaIgrAAIAABhg");
	this.shape_9.setTransform(-8.1,312.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#93CE1A").s().p("AgMArIAAgbIAYAAIAAAbgAgMgPIAAgbIAYAAIAAAbg");
	this.shape_10.setTransform(43.5,253.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#93CE1A").s().p("AgeAhQgLgMABgVQAAgUALgMQALgMASAAQAUAAAKAMQAMANgBAXIAAAEIg4AAQABAKAEAEQAFAGAHAAQAGgBAFgCQAEgCAFgJIARAKQgFAMgLAEQgIAGgPAAQgSgBgMgMgAgLgXQgFAFABAKIAAABIAeAAIAAgCQAAgJgDgGQgEgEgIAAQgIAAgDAFg");
	this.shape_11.setTransform(35.6,253.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#93CE1A").s().p("AAPAsIAAg0QAAgKgDgEQgDgEgHAAQgHAAgEAFQgFAGAAAJIAAAyIgYAAIAAhVIAYAAIAAAPQAFgIAHgFQAFgEAKAAQANAAAGAHQAHAHAAAQIAAA5g");
	this.shape_12.setTransform(25.6,253.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#93CE1A").s().p("AgLA+IAAhVIAXAAIAABVgAgLgnIAAgWIAXAAIAAAWg");
	this.shape_13.setTransform(17.7,251.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#93CE1A").s().p("AgLA+IAAh7IAYAAIAAB7g");
	this.shape_14.setTransform(12.4,251.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#93CE1A").s().p("AAOAsIAAg0QAAgKgCgEQgDgEgHAAQgHAAgFAFQgDAFAAAKIAAAyIgZAAIAAhVIAZAAIAAAPQAEgJAGgEQAGgEAKAAQAMAAAHAHQAHAIAAAPIAAA5g");
	this.shape_15.setTransform(4.5,253.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#93CE1A").s().p("AgrAvQgSgTAAgcQAAgbASgTQARgSAaAAQAbAAARASQASASAAAcQAAAdgRASQgRASgcAAQgaAAgRgSgAgVgbQgJAKAAARQAAASAJAKQAJALANAAQAMAAAJgLQAKgLgBgRQABgQgKgLQgJgLgMAAQgNAAgJALg");
	this.shape_16.setTransform(-7.7,251.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgGAAQgIAAgHADQgFAEgFAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAEAAIADAAIAAAKIgEACIgFAAQgHAAgDgEQgEgFAAgGQgHAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgSIgQAFg");
	this.shape_17.setTransform(95.2,391.3,0.588,0.588);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAALIgrA+IAsAAIAAAMg");
	this.shape_18.setTransform(90.2,391.3,0.588,0.588);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_19.setTransform(86.7,393.2,0.588,0.588);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAhQgLgOAAgTQAAgUALgMQALgNARAAQASAAALANQALAMAAAUQAAAVgLALQgLAOgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQALAAAHgKQAHgJAAgPQAAgOgHgKQgGgJgMAAQgLAAgGAJg");
	this.shape_20.setTransform(82.6,391.3,0.588,0.588);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAgQgKgNgBgTQABgTAKgNQALgNASAAQALABAKAFQAIAHAGAKIgNAHQgEgKgFgEQgFgFgIABQgLAAgGAJQgIAKABAOQgBAPAIAKQAGAJALAAQAIAAAFgEQAFgFAEgJIANAGQgGALgIAHQgKAFgMABQgQAAgMgOg");
	this.shape_21.setTransform(77.2,391.3,0.588,0.588);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_22.setTransform(73.3,393.2,0.588,0.588);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbAhQgKgLAAgWQAAgVAKgLQALgNAQAAQASAAAKANQAKAMAAAVIAAADIg8AAQAAAOAHAIQAGAIAMAAQAGAAAGgEQAFgDAFgJIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgPgbQgGAHgBAOIAtAAQAAgOgGgHQgGgHgLAAQgKAAgFAHg");
	this.shape_23.setTransform(69.3,391.3,0.588,0.588);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaAgQgLgMABgUQgBgUALgMQALgNARAAQANABAJAFQAIAHAFAKIgMAHQgDgKgGgEQgFgFgJABQgKAAgHAJQgGAKAAAOQAAAPAGAKQAIAJAJAAQAIAAAGgEQAGgFADgJIAMAGQgFALgJAHQgJAFgMABQgRAAgLgOg");
	this.shape_24.setTransform(64.1,391.3,0.588,0.588);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAVAtIAAg1QAAgMgDgGQgFgHgKAAQgJAAgIAIQgGAHAAAOIAAAxIgPAAIAAhWIAPAAIAAARQAEgJAIgGQAIgEAJAAQANAAAHAIQAGAHABASIAAA3g");
	this.shape_25.setTransform(58.5,391.2,0.588,0.588);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAFgFANgEIAKgCQAMgCAJgEIAAgDQAAgHgFgFQgFgDgGAAQgIAAgHADQgGAEgEAHIgKgFQAGgLAIgEQAJgFAMAAQAQABAGAGQAIAIAAAQIAAAjQAAAIABACQACACAEAAIADAAIAAAKIgEACIgFAAQgHAAgEgEQgDgFAAgGQgHAIgHADQgHAEgHABQgNAAgIgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_26.setTransform(52.8,391.3,0.588,0.588);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGArIgghVIAPAAIAXBDIAYhDIAPAAIggBVg");
	this.shape_27.setTransform(47.6,391.3,0.588,0.588);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgVAJgLQAKgNAPAAQAIABAHAEQAHAEAFAIIAAg1IAOAAIAAB8IgOAAIAAgOQgHAJgFADQgHAFgIAAQgQAAgJgNgAgQgGQgGAHAAARQAAAQAGAJQAHAJAKAAIAHgBIAHgEQAFgGACgFQACgGAAgMQAAgMgCgGQgCgFgFgFQgEgDgDgBIgHgBQgLAAgGAJg");
	this.shape_28.setTransform(42.1,390.2,0.588,0.588);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfAmQgIgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgGgDgHAAQgHAAgHADQgGAEgDAHIgMgFQAHgLAIgEQAIgFANAAQAQABAHAGQAHAIAAAQIAAAjQAAAIACACQABACAFAAIACAAIAAAKIgFACIgEAAQgHAAgDgEQgFgFAAgGQgGAIgHADQgHAEgHABQgNAAgHgIgAAAgCIgNADQgFABgEAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSIgQAFg");
	this.shape_29.setTransform(36.7,391.3,0.588,0.588);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWAtIAAg1QAAgMgFgGQgEgHgJAAQgLAAgGAIQgHAHAAAOIAAAxIgOAAIAAhWIAOAAIAAARQAEgJAIgGQAIgEAIAAQAOAAAHAIQAHAHgBASIAAA3g");
	this.shape_30.setTransform(31,391.2,0.588,0.588);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_31.setTransform(26.6,390.2,0.588,0.588);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHBAIAAhKIgQAAIAAgLIAQAAIAAgVQAAgJAGgGQAEgGAKAAIAGABIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAHIAAAQIASAAIAAALIgSAAIAABKg");
	this.shape_32.setTransform(23.6,390.1,0.588,0.588);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_33.setTransform(20.7,390.2,0.588,0.588);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgbBGQgNgEgKgIQgNgKgHgNQgGgNAAgRQAAgOAEgLQAFgMAIgKQAMgPARgIQARgIAVAAQAMAAAOAEQAMAEAJAHQALAIAFALQAGAKAAAOQAAAPgFAKQgFAMgLAIQgHAFgFACQgGACgIAAQgIAAgFgDQgEgDAAgHIAAgBQgEAHgHAEQgGADgHAAQgNAAgHgHQgHgIAAgNQAAgSAMgOQALgNAQAAQAIAAAFADQAFADADAHIAEgKIAMAAIgNAyIAAACQAAAEACACQADACADAAQAEAAAFgCIAJgGQAHgIADgIQAEgHAAgMQAAgVgQgOQgQgNgaAAQgLAAgJACQgMAEgFADQgRALgIAOQgJAQAAASQAAAPAFAKQAFALALAJQAJAGALAEQANADAKAAQAOAAAOgEQAMgEAMgIIAFAHQgMAJgOAFQgOAFgQAAQgOAAgOgEgAgQgOQgIALAAAPQAAAIAEAFQAEAFAHAAQAJAAAFgGQAHgFACgKIAFgSQgCgIgEgEQgFgEgGAAQgLAAgHALg");
	this.shape_34.setTransform(14.3,390.9,0.588,0.588);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAnQgIgHgEgNIAMgFQADAKAGAGQAGAEAJAAQAKAAAEgDQAFgEABgGQAAgLgWgFIgFgCQgOgEgEgFQgGgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAJAFAEALIgMADQgEgHgFgEQgFgDgIAAQgGAAgGADQgEADAAAGQAAAIAUAGIABABQASAFAGAFQAHAGAAAKQAAALgKAIQgKAIgPAAQgMAAgLgHg");
	this.shape_35.setTransform(6.7,391.3,0.588,0.588);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbAhQgKgMAAgVQAAgUAKgMQALgNAQAAQATAAAJANQAKALAAAWIAAADIg8AAQAAAPAHAHQAGAIALAAQAIAAAFgEQAGgEAEgIIAKAGQgFAMgIAEQgJAGgMAAQgRAAgLgNgAgQgbQgGAIAAANIAtAAQAAgOgGgHQgGgHgLAAQgKAAgGAHg");
	this.shape_36.setTransform(1.6,391.3,0.588,0.588);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_37.setTransform(-2.5,390.2,0.588,0.588);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AggAmQgHgIAAgLQAAgLAGgHQAGgFANgEIAJgCQAMgCAJgEIAAgDQAAgHgEgFQgFgDgIAAQgHAAgHADQgGAFgDAGIgLgFQAGgKAIgFQAIgFANAAQAPABAIAGQAHAJAAAPIAAAjQAAAIABACQACACAFAAIACAAIAAAKIgEACIgFAAQgHAAgDgEQgEgEgBgHQgGAIgHADQgGAEgIABQgMAAgJgIgAAAgCIgNADQgGABgDAFQgDAEAAAGQAAAJAEAEQAFAEAIAAQAKAAAHgGQAHgIAAgJIAAgSQgGACgKADg");
	this.shape_38.setTransform(-6.5,391.3,0.588,0.588);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAnQgKgHgDgNIAMgFQACAKAHAGQAFAEAKAAQAJAAAFgDQAGgEAAgGQAAgLgWgFIgFgCQgOgFgFgEQgFgGAAgJQAAgLAIgGQAIgHANAAQANABAIAFQAIAFAFALIgMADQgEgHgFgEQgFgDgIAAQgHAAgEADQgFADAAAGQAAAIAUAGIABABQARAFAHAFQAGAGAAAKQAAALgJAIQgJAIgRAAQgMAAgJgHg");
	this.shape_39.setTransform(-11.8,391.3,0.588,0.588);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAVApQgEgEAAgHQgHAJgHADQgGADgIABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgGAAQgJAAgGADQgFADgFAIIgKgFQAGgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgEABIgFABQgGAAgEgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAKgBAHgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_40.setTransform(94.4,268.5,0.628,0.628);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgeArIAAgLIAqg+IgmAAIAAgMIA4AAIAAAKIgqA/IArAAIAAAMg");
	this.shape_41.setTransform(89,268.5,0.628,0.628);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_42.setTransform(85.3,270.6,0.628,0.628);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgcAhQgLgNAAgUQAAgSALgOQALgMARAAQASAAALAMQALAMAAAUQAAAVgLAMQgLANgSAAQgRAAgLgNgAgRgYQgHAKAAAOQAAAPAHAKQAHAJAKAAQAMAAAGgJQAHgKAAgPQAAgOgHgKQgGgJgMAAQgKAAgHAJg");
	this.shape_43.setTransform(80.9,268.5,0.628,0.628);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAhQgLgOABgTQgBgTALgNQAMgMAQAAQAMAAAKAFQAIAGAFAMIgMAGQgDgJgGgFQgFgEgIAAQgKAAgIAJQgGAKAAAOQAAAPAGAKQAIAKAKAAQAIgBAFgFQAGgDADgKIAMAGQgFAMgIAFQgKAHgMAAQgQAAgMgNg");
	this.shape_44.setTransform(75.1,268.5,0.628,0.628);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_45.setTransform(70.9,270.6,0.628,0.628);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbAiQgKgMAAgWQAAgUAKgMQAKgMARAAQASAAAKAMQAKAMAAAVIAAADIg8AAQAAAOAGAJQAIAHALAAQAHAAAFgEQAFgDAFgIIAKAFQgFAMgIAEQgJAGgMAAQgSAAgKgMgAgQgaQgFAGgBAPIAtAAQAAgOgGgHQgGgIgLABQgKgBgGAIg");
	this.shape_46.setTransform(66.7,268.5,0.628,0.628);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgZAhQgLgNAAgUQAAgUALgMQALgMAQAAQAMAAAJAFQAJAGAGAMIgNAGQgDgJgGgFQgFgEgJAAQgJAAgIAJQgGAKgBAOQABAPAGAKQAIAKAJAAQAJgBAFgFQAGgEADgJIANAGQgGAMgJAFQgJAHgMAAQgRAAgKgNg");
	this.shape_47.setTransform(61.1,268.5,0.628,0.628);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgDgHQgFgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgOAAIAAhVIAOAAIAAARQAEgJAIgGQAIgEAJAAQAOAAAGAIQAHAIAAAQIAAA3g");
	this.shape_48.setTransform(55.1,268.5,0.628,0.628);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAVApQgEgEgBgHQgGAJgHADQgGADgIABQgNAAgIgIQgHgGAAgNQAAgLAGgGQAHgHAMgCIAJgCQAOgEAHgDIAAgDQAAgHgEgEQgGgEgHAAQgIAAgGADQgFADgEAIIgLgFQAGgLAIgEQAIgFANABQAQgBAGAIQAIAHAAAPIAAAkQAAAIABACQACACAEAAIACAAIABAAIAAALIgJACQgHAAgDgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAEAFQAFAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_49.setTransform(49.1,268.5,0.628,0.628);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHArIgfhVIAPAAIAXBEIAZhEIAOAAIggBVg");
	this.shape_50.setTransform(43.5,268.5,0.628,0.628);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcAzQgJgMAAgVQAAgUAJgMQAJgNAQAAQAIAAAHAFQAFADAHAJIAAg0IAOAAIAAB7IgOAAIAAgPQgFAJgHAEQgHAEgIAAQgQAAgJgMgAgQgHQgGAJAAAQQAAARAGAIQAHAJAKAAIAHgBQAEgBADgDQAFgFACgGQACgGAAgMQAAgMgCgGQgCgFgFgFIgHgEIgHgCQgLAAgGAJg");
	this.shape_51.setTransform(37.6,267.4,0.628,0.628);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAUApQgDgEgBgHQgGAJgHADQgFADgJABQgNAAgHgIQgIgGAAgNQAAgLAGgGQAHgHALgCIAKgCQAOgEAHgDIAAgDQAAgHgFgEQgFgEgGAAQgKAAgFADQgGADgEAIIgLgFQAHgLAIgEQAJgFAMABQAQgBAHAIQAHAHAAAPIAAAkQAAAIACACQABACAEAAIACAAIABAAIAAALIgJACQgGAAgFgFgAAAgCIgNADQgGADgDAEQgDAEAAAGQAAAHAFAFQAEAFAIAAQAJgBAIgGQAHgHAAgKIAAgSQgIAEgIABg");
	this.shape_52.setTransform(31.9,268.5,0.628,0.628);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAVAsIAAg0QAAgMgEgHQgEgFgKAAQgKAAgHAIQgGAHAAAOIAAAvIgPAAIAAhVIAPAAIAAARQAEgJAIgGQAHgEAJAAQAOAAAHAIQAHAIAAAQIAAA3g");
	this.shape_53.setTransform(25.8,268.5,0.628,0.628);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_54.setTransform(21.1,267.4,0.628,0.628);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgHA/IAAhJIgQAAIAAgMIAQAAIAAgUQAAgKAGgFQAEgFAKAAIAGAAIAFABIAAAMIgEgBIgDAAQgFAAgDADQgDADAAAIIAAAOIASAAIAAAMIgSAAIAABJg");
	this.shape_55.setTransform(17.9,267.3,0.628,0.628);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGA9IAAhVIANAAIAABVgAgGgqIAAgSIANAAIAAASg");
	this.shape_56.setTransform(14.7,267.4,0.628,0.628);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_57.setTransform(11.9,270.6,0.628,0.628);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAWArIgWhDIgUBDIgOAAIgbhVIAOAAIAUBEIAWhEIAMAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_58.setTransform(6.4,268.5,0.628,0.628);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgUBDIgPAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_59.setTransform(-1.8,268.5,0.628,0.628);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAVArIgVhDIgVBDIgOAAIgahVIAOAAIAUBEIAVhEIANAAIAVBDIAUhDIAOAAIgaBVg");
	this.shape_60.setTransform(-10,268.5,0.628,0.628);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgoBJIAAgDQAAgPAHgMQAGgMAPgNIAIgHQAMgKAGgFQAFgGADgHQADgGgBgIQAAgLgGgIQgHgIgLAAQgKAAgGAHQgHAGAAAKIABAIIACAHIgNAHIgEgKIgBgKQABgSAKgKQALgKASAAQAQAAAMALQALALAAARQAAAOgHAMQgHALgUAPIgEAEQgZATgCANIBBAAIAAARg");
	this.shape_61.setTransform(94.1,332.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgbBCQgKgIgDgQIAPgDQADALAFAGQAHAFAJAAQAMAAAHgOQAHgPABgcQgHAKgIAEQgHAFgJAAQgQAAgLgNQgJgMgBgWQAAgWAMgNQAKgOAUAAQAUAAAMASQAKATABAkQAAAlgMASQgMATgWAAQgPAAgJgIgAgRgyQgIAIAAAQQAAAQAIAKQAHAJAKAAQAKgBAHgIQAHgJAAgOQAAgQgHgKQgIgLgJABQgLgBgGAKg");
	this.shape_62.setTransform(83.8,332.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgeA3QgMgUAAgjQAAgjAMgSQALgUATAAQAVAAALAUQALASAAAjQAAAjgLAUQgMATgUAAQgTAAgLgTgAgRgsQgHAPAAAdQAAAdAHAQQAGAPALgBQANAAAGgOQAGgPAAgeQAAgegGgOQgGgPgNAAQgLAAgGAPg");
	this.shape_63.setTransform(73.4,332.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAKBHIAAggIg2AAIAAgRIA4hcIAOAAIAABeIATAAIAAAPIgTAAIAAAggAgfAYIAoAAIAAhCg");
	this.shape_64.setTransform(63.1,332.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgoBJIAAgDQAAgPAHgMQAGgMAPgNIAIgHQAMgKAGgFQAFgGADgHQACgGAAgIQABgLgHgIQgHgIgLAAQgKAAgGAHQgHAGAAAKIABAIIACAHIgNAHIgEgKIgBgKQAAgSAMgKQAKgKASAAQARAAALALQALALAAARQAAAOgHAMQgIALgTAPIgEAEQgYATgDANIBBAAIAAARg");
	this.shape_65.setTransform(47.4,332.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgcBCQgIgIgEgQIAPgDQACALAHAGQAGAFAIAAQANAAAHgOQAHgPAAgcQgGAKgHAEQgJAFgHAAQgRAAgLgNQgKgMABgWQgBgWALgNQAMgOASAAQAVAAALASQALATAAAkQAAAlgLASQgMATgWAAQgPAAgKgIgAgRgyQgIAIABAQQgBAQAIAKQAGAJALAAQAKgBAHgIQAHgJAAgOQAAgQgIgKQgGgLgKABQgLgBgGAKg");
	this.shape_66.setTransform(37,332.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAKBHIAAggIg2AAIAAgRIA4hcIAOAAIAABeIATAAIAAAPIgTAAIAAAggAgfAYIAoAAIAAhCg");
	this.shape_67.setTransform(26.7,332.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeA3QgMgUAAgjQAAgjAMgSQALgUATAAQAVAAALAUQALASAAAjQAAAjgLAUQgMATgUAAQgTAAgLgTgAgRgsQgHAPAAAdQAAAdAHAQQAGAPALgBQANAAAGgOQAGgPAAgeQAAgegGgOQgGgPgNAAQgLAAgGAPg");
	this.shape_68.setTransform(11.1,332.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAHBHIAAhyQgHAHgHAEQgHAFgJADIAAgRQAMgFAHgHQAIgHAGgKIANAAIAACNg");
	this.shape_69.setTransform(-0.1,332.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgeA3QgMgUAAgjQAAgjAMgSQALgUATAAQAVAAALAUQALASAAAjQAAAjgLAUQgMATgUAAQgTAAgLgTgAgRgsQgHAPAAAdQAAAdAHAQQAGAPALgBQANAAAGgOQAGgPAAgeQAAgegGgOQgGgPgNAAQgLAAgGAPg");
	this.shape_70.setTransform(-9.7,332.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.contacts, new cjs.Rectangle(-15.8,245.4,121.3,149.9), null);


(lib.applynoq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBBIAAgyIguhPIAhAAIAcA1IAeg1IAgAAIguBPIAAAyg");
	this.shape.setTransform(96.4,-114,1.396,1.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBBIAAiBIAgAAIAABnIA3AAIAAAag");
	this.shape_1.setTransform(81.7,-114,1.396,1.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAzAAQAeAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgbAAIAAAxgAgYgHIAYAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgYAAg");
	this.shape_2.setTransform(64.9,-114,1.396,1.396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAyAAQAfAAAOAJQAOAKAAAVQAAAVgNAJQgNAKgaAAIgaAAIAAAxgAgXgHIAXAAQALAAAGgEQAGgEAAgJQAAgIgGgEQgFgEgMAAIgXAAg");
	this.shape_3.setTransform(46.5,-114,1.396,1.396);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBBIgIgZIg0AAIgIAZIgfAAIAuiBIAlAAIAwCBgAgSAOIAjAAIgSg1g");
	this.shape_4.setTransform(27.3,-114,1.396,1.396);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBBIgVhZIgUBZIggAAIggiBIAdAAIAUBTIAUhTIAeAAIAUBTIAVhTIAdAAIghCBg");
	this.shape_5.setTransform(80.6,-85,1.396,1.396);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAxQgSgTAAgeQAAgdASgTQATgTAbAAQAcAAATATQASATAAAdQAAAegSATQgSATgdAAQgbAAgTgTgAgWgdQgJAMAAARQgBASAKAMQAJALANAAQAPAAAIgMQAKgLgBgSQABgRgKgMQgJgLgOAAQgNAAgJALg");
	this.shape_6.setTransform(58.5,-85,1.396,1.396);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBBIgzhRIAABRIgdAAIAAiBIAfAAIAxBOIAAhOIAdAAIAACBg");
	this.shape_7.setTransform(38.4,-85,1.396,1.396);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93CE1A").s().p("EgidACIIAAkPMBE7AAAIAAEPg");
	this.shape_8.setTransform(125.9,-100.4,0.571,2.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.applynoq, new cjs.Rectangle(0,-138,251.8,75.2), null);


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
(lib.iFunAdvance_AdWords_120x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape.setTransform(60,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.141)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_1.setTransform(60,300);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.267)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_2.setTransform(60,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.384)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_3.setTransform(60,300);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.49)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_4.setTransform(60,300);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.588)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_5.setTransform(60,300);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.675)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_6.setTransform(60,300);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.753)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_7.setTransform(60,300);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.816)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_8.setTransform(60,300);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.875)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_9.setTransform(60,300);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.918)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_10.setTransform(60,300);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.953)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_11.setTransform(60,300);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.98)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_12.setTransform(60,300);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.996)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_13.setTransform(60,300);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_14.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},365).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// contacts
	this.instance = new lib.contacts();
	this.instance.parent = this;
	this.instance.setTransform(179.4,181.8,1,1,0,0,0,131.5,28.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264).to({_off:false},0).to({x:149.4,alpha:1},15,cjs.Ease.get(1)).wait(101));

	// Слой 20
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_15.setTransform(60,300);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.863)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_16.setTransform(60,300);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.737)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_17.setTransform(60,300);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.62)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_18.setTransform(60,300);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.514)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_19.setTransform(60,300);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.416)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_20.setTransform(60,300);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.329)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_21.setTransform(60,300);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.255)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_22.setTransform(60,300);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.188)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_23.setTransform(60,300);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.129)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_24.setTransform(60,300);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.086)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_25.setTransform(60,300);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.051)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_26.setTransform(60,300);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.024)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_27.setTransform(60,300);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.008)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_28.setTransform(60,300);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.004)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape_29.setTransform(60,300);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.004)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_30.setTransform(80,300);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.008)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_31.setTransform(80,300);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.024)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_32.setTransform(80,300);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.051)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_33.setTransform(80,300);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.086)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_34.setTransform(80,300);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.129)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_35.setTransform(80,300);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.188)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_36.setTransform(80,300);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.255)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_37.setTransform(80,300);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.329)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_38.setTransform(80,300);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.416)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_39.setTransform(80,300);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.514)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_40.setTransform(80,300);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.62)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_41.setTransform(80,300);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.737)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_42.setTransform(80,300);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.863)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_43.setTransform(80,300);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_44.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_30}]},219).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[]},1).wait(131));

	// txt-1
	this.instance_1 = new lib.txt1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(480.5,217.2,1,1,0,0,0,111.2,23.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:180.5},14,cjs.Ease.get(1)).wait(81).to({x:200.5,alpha:0},16,cjs.Ease.get(-1)).to({_off:true},1).wait(254));

	// achive
	this.instance_2 = new lib.achive();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.4,388.9,1.227,1.227,60,0,0,39,38.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({regX:38.9,regY:38.9,scaleX:1.27,scaleY:1.27,rotation:0,x:59.1,y:374.4},14,cjs.Ease.get(1)).wait(183).to({regX:39,regY:38.8,scaleX:1.17,scaleY:1.17,rotation:60,x:167,y:392},15).to({_off:true},1).wait(139));

	// logo-small
	this.instance_3 = new lib.logosmall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(63.2,20.4,1,1,0,0,0,53,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},249).wait(131));

	// txt-2
	this.instance_4 = new lib.txt2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.5,214.9,1,1,0,0,0,118.9,16.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(125).to({_off:false},0).to({x:170.5,alpha:1},16,cjs.Ease.get(1)).wait(77).to({x:190.5,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(146));

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
	this.instance_6.setTransform(415.5,417.4,1,1,0,0,0,98.1,114);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(243).to({_off:false},0).to({x:268.5,y:428.5},13,cjs.Ease.get(1)).wait(124));

	// apply noq
	this.instance_7 = new lib.applynoq();
	this.instance_7.parent = this;
	this.instance_7.setTransform(20.1,428.3,1,1,0,0,0,150.6,13.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249).to({_off:false},0).to({x:150.1,alpha:1},15,cjs.Ease.get(1)).wait(116));

	// Слой 18
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AL2DUI5/AAIgcAAIAAmnIdJAAIACGng");
	this.shape_45.setTransform(87.4,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).to({_off:true},249).wait(131));

	// Слой 19
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.004)").s().p("ApXTdMAAAgm5ISvAAMAAAAm5g");
	this.shape_46.setTransform(60,475.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.133)").s().p("ApXTcMAAAgm3ISvAAMAAAAm3g");
	this.shape_47.setTransform(60,475.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.251)").s().p("ApXTcMAAAgm3ISvAAMAAAAm3g");
	this.shape_48.setTransform(60,475.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.361)").s().p("ApXTbMAAAgm1ISvAAMAAAAm1g");
	this.shape_49.setTransform(60,475.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.463)").s().p("ApXTbMAAAgm1ISvAAMAAAAm1g");
	this.shape_50.setTransform(60,475.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.557)").s().p("ApXTaMAAAgmzISvAAMAAAAmzg");
	this.shape_51.setTransform(60,475.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.643)").s().p("ApXTaMAAAgmzISvAAMAAAAmzg");
	this.shape_52.setTransform(60,475.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.718)").s().p("ApXTZMAAAgmxISvAAMAAAAmxg");
	this.shape_53.setTransform(60,475.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.784)").s().p("ApXTZMAAAgmxISvAAMAAAAmxg");
	this.shape_54.setTransform(60,475.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.839)").s().p("ApXTZMAAAgmxISvAAMAAAAmxg");
	this.shape_55.setTransform(60,475.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.89)").s().p("ApXTZMAAAgmxISvAAMAAAAmxg");
	this.shape_56.setTransform(60,476);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.929)").s().p("ApXTYMAAAgmvISvAAMAAAAmvg");
	this.shape_57.setTransform(60,476);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.961)").s().p("ApXTYMAAAgmvISvAAMAAAAmvg");
	this.shape_58.setTransform(60,476);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.98)").s().p("ApXTYMAAAgmvISvAAMAAAAmvg");
	this.shape_59.setTransform(60,476);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.996)").s().p("ApXTYMAAAgmvISvAAMAAAAmvg");
	this.shape_60.setTransform(60,476);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ApXTYMAAAgmvISvAAMAAAAmvg");
	this.shape_61.setTransform(60,476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_46}]},264).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(101));

	// Слой 1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ApbQaMAAAggzIS3AAMAAAAgzg");
	this.shape_62.setTransform(58.4,494.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).to({_off:true},249).wait(131));

	// pc-1
	this.instance_8 = new lib.pc1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(35,204.4,0.725,0.725,0,0,0,151.1,226.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},249).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,299.5,255.3,600.6);
// library properties:
lib.properties = {
	width: 120,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/iFunAdvance_AdWords_120x600_atlas_.png", id:"iFunAdvance_AdWords_120x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;