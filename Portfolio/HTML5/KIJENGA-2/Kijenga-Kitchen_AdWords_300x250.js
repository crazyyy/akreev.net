(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Kijenga_Kitchen_AdWords_300x250_atlas_", frames: [[0,0,300,250]]},
		{name:"Kijenga_Kitchen_AdWords_300x250_atlas_2", frames: [[0,0,300,192]]},
		{name:"Kijenga_Kitchen_AdWords_300x250_atlas_3", frames: [[0,0,146,250],[148,0,164,202],[148,204,191,81]]}
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



(lib.pc1 = function() {
	this.spriteSheet = ss["Kijenga_Kitchen_AdWords_300x250_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc1_1 = function() {
	this.spriteSheet = ss["Kijenga_Kitchen_AdWords_300x250_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc2 = function() {
	this.spriteSheet = ss["Kijenga_Kitchen_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pc2_1 = function() {
	this.spriteSheet = ss["Kijenga_Kitchen_AdWords_300x250_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.quotepngкопия = function() {
	this.spriteSheet = ss["Kijenga_Kitchen_AdWords_300x250_atlas_3"];
	this.gotoAndStop(2);
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


(lib.yellowbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA3IAAhsIAhAAQAZgBAPAOQAOAOAAAaQAAAagPAOQgPAOgbABgAgaAnIANAAQAmAAAAgnQAAgmgjAAIgQAAg");
	this.shape.setTransform(113.2,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeA3IAAhsIA9AAIAAAPIgrAAIAAAeIAoAAIAAANIgoAAIAAAiIArAAIAAAQg");
	this.shape_1.setTransform(103.4,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA3IAAgxIgxAAIAAAxIgSAAIAAhsIASAAIAAAsIAxAAIAAgsIASAAIAABsg");
	this.shape_2.setTransform(93.2,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAqQgNgPAAgbQAAgQAGgMQAGgOAMgGQAMgHAPAAQAQAAAOAHIgGAPQgFgDgHgBQgGgCgHgBQgOAAgJALQgIALAAASQAAAUAIAKQAIALAPAAQAHAAAHgCIANgDIAAAPQgMAFgRAAQgXAAgMgOg");
	this.shape_3.setTransform(82.8,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA3IAAhdIggAAIAAgPIBRAAIAAAPIggAAIAABdg");
	this.shape_4.setTransform(73.5,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfA3IgKgfIgpAAIgLAfIgTAAIAqhtIASAAIAoBtgAgFgSIgKAbIAfAAIgLgdIgDgJIgCgJIgFAUg");
	this.shape_5.setTransform(64.1,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA3IAAg3IAAgTIABgQIgBAAIggBaIgPAAIgghaIAAAAIABAkIAAA2IgQAAIAAhsIAZAAIAeBVIAfhVIAZAAIAABsg");
	this.shape_6.setTransform(52.1,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA3IAAhdIggAAIAAgPIBRAAIAAAPIggAAIAABdg");
	this.shape_7.setTransform(36.7,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeA3IAAhsIA9AAIAAAPIgrAAIAAAeIAoAAIAAANIgoAAIAAAiIArAAIAAAQg");
	this.shape_8.setTransform(28.4,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAqQgOgQAAgaQAAgaAPgOQAQgPAZAAQARAAAPAGIgGAPQgNgFgNgBQgRAAgKALQgLALAAASQAAAUAKAKQAJALAQAAQAJAAAJgCIAAgdIgWAAIAAgOIAoAAIAAA2QgKADgJACQgJABgLAAQgXAAgNgOg");
	this.shape_9.setTransform(18.3,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqViiIUrAAIAAFFI0rAAg");
	this.shape_10.setTransform(66.2,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDA539").s().p("AqVCiIAAlEIUrAAIAAFEg");
	this.shape_11.setTransform(66.2,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yellowbtn, new cjs.Rectangle(-1,-1,134.3,34.5), null);


(lib.t31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBEQgFgFgBgJQAAgJAGgFQAFgFAJAAQAKAAAFAFQAFAFAAAJQAAAJgFAFQgFAFgKAAQgIAAgGgFgAgPAUIgFhcIApAAIgFBcg");
	this.shape.setTransform(2.6,60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBHIgzhjIgBAAIACAjIAABAIgiAAIAAiNIAyAAIAzBiIABAAIgCghIAAhBIAjAAIAACNg");
	this.shape_1.setTransform(-8.6,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA3QgRgTgBgkQABgjARgTQASgTAiAAQAhABASASQARATAAAjQAAAkgRATQgSATgiAAQghAAgSgTgAgbAAQAAApAbAAQAOABAIgKQAHgLAAgVQAAgVgHgKQgIgKgNAAQgcAAAAApg");
	this.shape_2.setTransform(-25,60.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyA3QgTgTABgkQgBgjATgTQARgTAiAAQAhABASASQARATAAAjQAAAkgRATQgSATgiAAQggAAgSgTgAgcAAQAAApAcAAQAPABAHgKQAHgLAAgVQAAgVgHgKQgHgKgOAAQgdAAAAApg");
	this.shape_3.setTransform(-40.9,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBHIAAhuIgjAAIAAgfIBrAAIAAAfIgjAAIAABug");
	this.shape_4.setTransform(-54.7,60.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBIIgGgbIguAAIgHAbIgrAAIAviPIAzAAIAuCPgAgCgfIgMAsIAeAAIgHgWIgFgUIgEgSIgCAQg");
	this.shape_5.setTransform(-67.9,60.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARBHIgbg2IgMAGIAAAwIgmAAIAAiNIAmAAIAAA9IAMgSIAdgrIAqAAIgtBAIAtBNg");
	this.shape_6.setTransform(-81.2,60.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHQgKgCgKgEIAAgjQALAGAMADQAMADAJAAQAIAAAEgDQAEgDAAgEQAAgDgCgDQgBgCgEgCIgSgJQgNgHgIgFQgGgFgEgJQgDgHAAgLQAAgUAOgKQAPgMAXAAQAWAAAYALIgMAeQgUgKgPABQgGgBgEADQgDADAAAEQAAAEAEADQAFADASAJQATAJAHAIQAHAJAAAPQAAANgHALQgGAKgNAGQgNAGgQAAQgOAAgKgDg");
	this.shape_7.setTransform(-94.5,60.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBIIgHgbIgtAAIgHAbIgqAAIAuiPIAzAAIAvCPgAgDgfIgLAsIAeAAIgGgWIgGgUIgEgSIgDAQg");
	this.shape_8.setTransform(-107.7,60.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBHQgKgCgKgEIAAgjQALAGALADQAMADALAAQAHAAAEgDQAEgDAAgEQAAgDgBgDQgCgCgEgCIgRgJQgPgHgGgFQgIgFgDgJQgDgHAAgLQAAgUAOgKQAOgMAYAAQAXAAAXALIgMAeQgUgKgOABQgHgBgDADQgEADAAAEQAAAEAFADQADADATAJQATAJAGAIQAIAJAAAPQAAANgHALQgHAKgNAGQgMAGgQAAQgPAAgJgDg");
	this.shape_9.setTransform(-120.6,60.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASBHIg0hjIAAAAIABAjIAABAIgiAAIAAiOIAzAAIAyBjIABAAIgCghIAAhCIAjAAIAACOg");
	this.shape_10.setTransform(-24.6,38.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBHIAAiOIAlAAIAACOg");
	this.shape_11.setTransform(-36.5,38.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBHQgKgBgKgGIAAgiQALAGALADQANADAJAAQAIAAAEgDQAEgDAAgEQAAgDgCgDQgBgCgDgCIgTgJQgNgGgIgHQgGgFgEgHQgDgIAAgKQAAgVAOgLQAPgKAYgBQAVAAAYALIgMAeQgUgJgPAAQgGAAgEACQgDADAAAEQAAAEAEADQAFADASAKQASAIAIAIQAHAKAAAOQAAAOgHAKQgGAKgNAGQgNAGgQgBQgOAAgKgCg");
	this.shape_12.setTransform(-50.8,38.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_13.setTransform(-61.9,38.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBHIAAhtIgjAAIAAghIBrAAIAAAhIgjAAIAABtg");
	this.shape_14.setTransform(-73.5,38.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzA2QgRgSgBgkQABgjARgTQASgSAigBQAhAAASATQARATABAjQgBAkgRASQgSAUgigBQghABgSgUgAgbAAQAAAqAbAAQAOAAAIgKQAHgLAAgVQAAgUgHgKQgIgLgNAAQgcAAAAApg");
	this.shape_15.setTransform(-87.4,38.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA6QgQgPAAgdIAAhWIAnAAIAABUQAAAPAFAGQAGAIAKAAQAMAAAFgIQAFgGAAgPIAAhUIAnAAIAABWQAAAbgQAQQgQAPgdAAQgdAAgPgOg");
	this.shape_16.setTransform(-103,38.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXBZIgYggIAAAAQgiABgRgUQgTgSABgkQgBgjATgTQASgSAhgBQAhAAASATQARATAAAkQAAAvgeASIAiAngAgegPQABApAcAAQAOAAAHgKQAHgLAAgUQAAgVgHgKQgHgLgOAAQgdAAAAAqg");
	this.shape_17.setTransform(-118.3,40.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_18.setTransform(-31.5,16.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAWIAqAAIAAAeIgqAAIAAAbIAtAAIAAAfg");
	this.shape_19.setTransform(-42.5,16.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARBHIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAArQAAAYgZANIAqA+gAgWgIIAHAAQAUgBAAgSQAAgOgTAAIgIAAg");
	this.shape_20.setTransform(-54.1,16.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpBHIAAiOIBTAAIAAAgIgtAAIAAAbIApAAIAAAeIgpAAIAAA1g");
	this.shape_21.setTransform(-66.8,16.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdBIQgJgCgMgFIAAgfQAJAEAKADQAJACAJAAQAMAAAGgEQAFgDAAgIQAAgGgDgDQgDgDgFgBQgIgCgKAAIgJAAIAAgcIAJAAQAdAAgBgPQAAgGgEgCQgEgEgHAAQgOAAgOAKIgQgaQAMgIALgDQAMgDAPAAQAWgBAMAKQANAIAAAQQAAANgJAJQgHAKgQAFIAAAAQAkAEAAAcQAAAVgQALQgPALgcAAQgLABgKgCg");
	this.shape_22.setTransform(-83.6,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_23.setTransform(-98.8,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_24.setTransform(-108.2,17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjAxQgQgRAAggQAAgSAIgQQAIgPAPgIQAPgIASAAQAVAAARAHIgEAJQgRgIgRAAQgZAAgPAQQgPAPAAAaQAAAdAOAPQAPAOAaAAQASAAAMgFIAAgtIgmAAIAAgIIAvAAIAAA6QgSAIgYAAQgdAAgQgRg");
	this.shape_25.setTransform(-120.1,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(-128.5,0,141.4,75.8), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBIQgKgDgKgFIAAgiQALAGALADQANADAKAAQAHAAAEgDQAEgDAAgFQAAgDgCgBQgBgDgDgCIgSgKQgOgGgIgGQgGgEgEgJQgDgHAAgLQAAgTAOgMQAPgLAYABQAVAAAYAKIgMAdQgUgIgOgBQgHABgEACQgDADAAADQAAAFAEADQAFAEASAIQASAIAIAJQAHAJAAAPQAAANgHALQgGAKgNAGQgNAFgQAAQgOAAgKgBg");
	this.shape.setTransform(178.4,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyA2QgSgSAAgkQAAgjASgSQARgUAiABQAhAAASASQARATAAAjQAAAkgRASQgSATgiAAQghAAgRgTgAgbAAQAAAqAbAAQAOAAAIgLQAHgKAAgVQAAgUgHgLQgIgKgNAAQgcAAAAApg");
	this.shape_1.setTransform(164.5,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiPIAuAAQA6AAAAArQAAAZgZAMIAqA/gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_2.setTransform(150.6,-11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBIIAAiPIAyAAQAaAAANAMQAOAMAAAWQAAAYgOAMQgOANgZAAIgLAAIAAAwgAgMgHIAHAAQAHAAAGgEQAFgFAAgJQAAgOgPAAIgKAAg");
	this.shape_3.setTransform(137,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BIIAAiPIAxAAQAhABATARQASASAAAhQAAAjgTATQgTAUgkAAgAgVAoIAIAAQARAAAJgLQAIgKAAgTQgBgUgHgJQgIgKgPAAIgLAAg");
	this.shape_4.setTransform(118,-11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBIIAAiPIBTAAIAAAfIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_5.setTransform(105.2,-11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBIIAAhuIgjAAIAAghIBrAAIAAAhIgjAAIAABug");
	this.shape_6.setTransform(93.6,-11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBIQgKgDgKgFIAAgiQALAGAMADQALADAKAAQAIAAAEgDQAEgDAAgFQAAgDgBgBQgCgDgEgCIgSgKQgOgGgGgGQgIgEgDgJQgDgHAAgLQAAgTAOgMQAOgLAYABQAXAAAXAKIgMAdQgUgIgPgBQgGABgDACQgEADAAADQAAAFAFADQAEAEASAIQASAIAHAJQAIAJAAAPQAAANgHALQgHAKgNAGQgMAFgQAAQgPAAgJgBg");
	this.shape_7.setTransform(82,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA5QgQgPAAgbIAAhXIAnAAIAABTQAAAPAFAIQAGAGAKABQAMgBAFgGQAFgHAAgQIAAhTIAnAAIAABWQAAAcgQAPQgQAPgdAAQgdABgPgQg");
	this.shape_8.setTransform(68.5,-11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARBIIgdg1IgKAAIAAA1IgmAAIAAiPIAuAAQA6AAAAArQAAAZgZAMIAqA/gAgWgIIAHAAQAUgBAAgRQAAgPgTAAIgIAAg");
	this.shape_9.setTransform(55.1,-11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBIIAAhuIgjAAIAAghIBrAAIAAAhIgjAAIAABug");
	this.shape_10.setTransform(41.6,-11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAjAAQAeAAAQAQQAQAQAAAfQAAAfgRARQgRAQggAAgAgnA4IAWAAQA4AAAAg4QAAgbgOgOQgOgOgaAAIgYAAg");
	this.shape_11.setTransform(25,-11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmBAIhLhxIgBAAIABAfIAABSIgJAAIAAh/IAJAAIBLBxIABAAIgBgeIAAhTIAJAAIAAB/g");
	this.shape_12.setTransform(11.7,-11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBAIAAh/IAIAAIAAB/g");
	this.shape_13.setTransform(3,-11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_14.setTransform(-3,-11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAwQgPgSAAgeQAAgeAPgSQAPgRAaAAQAbAAAPARQAPASAAAeQAAAegPASQgPASgbAAQgaAAgPgSgAgigqQgNAPAAAbQAAAbANAQQAMAPAWAAQAXAAAMgPQANgPAAgcQAAgbgNgPQgMgPgXAAQgWAAgMAPg");
	this.shape_15.setTransform(-19.9,-11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_16.setTransform(-31.4,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-47.9,-28,234,31.3), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBAIAAgxIgrhOIAKAAIAkBFIAmhFIAJAAIgqBOIAAAxg");
	this.shape.setTransform(194.9,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBBIgSguIgzAAIgSAuIgKAAIAziBIAGAAIAyCBgAgEgiIgSAtIAtAAIgRguIgGgOIgEAPg");
	this.shape_1.setTransform(184.8,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBAIgchiIgFgUIgDASIgdBkIgHAAIgkh/IAKAAIAWBSIADAJIACAIIABAHIACAHQACgMAHgYIAWhNIAJAAIAZBYIAHAZIADgNIAbhkIAJAAIgkB/g");
	this.shape_2.setTransform(171.3,18.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBAIAAgxIgqhOIAKAAIAkBFIAmhFIAJAAIgrBOIAAAxg");
	this.shape_3.setTransform(153.9,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA9IAAgJQANAGAWAAQAOAAAKgHQAJgIAAgMQAAgHgDgFQgDgEgHgEQgHgEgMgFQgUgGgHgHQgIgIAAgNQAAgPALgJQAMgJAQAAQASAAAQAHIgDAHQgQgGgOAAQgOAAgJAGQgIAHAAALQAAAHADAFQADAFAFADQAGAEAOAFQAPAEAHAFQAIAFADAGQAEAGAAAJQAAAQgMAKQgMAJgSAAQgYAAgMgFg");
	this.shape_4.setTransform(144.3,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBBIgSguIgzAAIgSAuIgKAAIAziBIAGAAIAyCBgAgEgiIgSAtIAtAAIgRguIgGgOIgEAPg");
	this.shape_5.setTransform(133.9,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_6.setTransform(123.9,18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtA5QgLgJAAgQQAAgMAHgJQAGgJASgIIgHgHQgGgGgDgGQgCgGAAgHQAAgNAIgHQAIgHAPAAQAMAAAIAHQAIAHAAANQAAAJgGAIQgGAHgPAKIAmAnQAGgHAEgHIAGgSIAJAAQgGAWgNAQIAYAXIgMAAIgRgRQgIAIgHAEQgGADgHACQgHACgKAAQgSAAgKgJgAglAKQgFAEgCAFQgDAFAAAHQAAANAIAHQAJAHAOAAQALAAAJgEQAJgEAJgJIgpgpQgMAFgGAFgAgcg0QgGAFAAAJQAAAHAEAGQADAGAKAJQAOgHAEgHQAGgGAAgJQAAgIgGgFQgEgFgJAAQgKAAgGAFg");
	this.shape_7.setTransform(107.8,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_8.setTransform(91.7,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_9.setTransform(81.7,18.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfBAIgfg4IggAAIAAA4IgKAAIAAh/IAfAAQAXAAALAJQAMAIAAASQAAANgGAJQgIAIgNAEIAiA6gAggABIAYAAQAPAAAKgHQAIgHABgOQgBgPgIgGQgJgHgTAAIgVAAg");
	this.shape_10.setTransform(71.8,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAA3IA5AAIAAAHIg5AAIAAA5g");
	this.shape_11.setTransform(62,18.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBAIAAh/IBFAAIAAAIIg8AAIAAAxIA5AAIAAAHIg5AAIAAA3IA8AAIAAAIg");
	this.shape_12.setTransform(47.4,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBAIAAg/IhKAAIAAA/IgJAAIAAh/IAJAAIAAA5IBKAAIAAg5IAKAAIAAB/g");
	this.shape_13.setTransform(35.6,18.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_14.setTransform(24.4,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(17.5,4,184.2,28.5), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBFQgFgFAAgJQAAgJAFgFQAFgFAKAAQAJAAAGAFQAFAFAAAJQAAAJgGAFQgFAFgJAAQgJAAgGgFgAgTAVIAAgJQAAgJAEgGQAEgGAKgHQAHgFADgEQAEgEAAgFQAAgEgEgCQgEgDgFAAQgOAAgUALIgOgbQAZgOAZAAQAWAAAMAKQANAKAAAQQAAAMgGAJQgFAIgNAIQgKAGgCADQgDADAAAEIAAAFg");
	this.shape.setTransform(187.3,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBIIg0hkIAAAAIABAjIAABBIgiAAIAAiOIAyAAIA0BiIAAAAIgBgiIAAhAIAiAAIAACOg");
	this.shape_1.setTransform(174.1,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_2.setTransform(160.5,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBIIAAg7IgsAAIAAA7IgmAAIAAiOIAmAAIAAA1IAsAAIAAg1IAnAAIAACOg");
	this.shape_3.setTransform(147.1,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA3QgSgTAAgjQAAgVAJgSQAIgQAQgJQAPgKAVABQAXAAAVAKIgMAeIgQgGQgIgCgJgBQgNABgHAKQgIAMAAATQAAApAeAAQAKAAAJgDIASgGIAAAgQgSAJgXAAQgfgBgRgSg");
	this.shape_4.setTransform(133.1,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBIIAAhvIgjAAIAAgfIBrAAIAAAfIgiAAIAABvg");
	this.shape_5.setTransform(120.6,42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBIIAAiOIAlAAIAACOg");
	this.shape_6.setTransform(111.2,42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARBIIgbg3IgMAGIAAAxIgmAAIAAiOIAmAAIAAA+IAMgSIAdgsIAqAAIgtBAIAtBOg");
	this.shape_7.setTransform(101.7,42.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBIIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAAqQAAAZgZANIAqA+gAgWgIIAHAAQAUAAAAgSQAAgPgTAAIgIAAg");
	this.shape_8.setTransform(82.9,42.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA5QgQgOAAgdIAAhVIAnAAIAABSQAAAPAFAIQAGAGAKAAQAMAAAFgGQAFgHAAgQIAAhSIAnAAIAABUQAAAdgQAPQgQAQgdAAQgdgBgPgPg");
	this.shape_9.setTransform(67.7,42.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyA3QgTgTABgkQgBgjATgSQASgUAgABQAiAAASASQARATAAAjQAAAkgRATQgSASgiABQghgBgRgSgAgcAAQABApAbAAQAPAAAHgKQAHgKAAgVQAAgUgHgLQgIgKgOAAQgcAAAAApg");
	this.shape_10.setTransform(52.1,42.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBIIAAg3IguhXIApAAIAYA1IAZg1IAqAAIgwBVIAAA5g");
	this.shape_11.setTransform(37.5,42.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASBIIg0hkIAAAAIABAjIAABBIgiAAIAAiOIAzAAIAzBiIAAAAIgCgiIAAhAIAjAAIAACOg");
	this.shape_12.setTransform(17.3,42.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBIIAAiOIAlAAIAACOg");
	this.shape_13.setTransform(5.5,42.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASBIIg0hkIAAAAIABAjIAABBIgiAAIAAiOIAzAAIAyBiIABAAIgCghIAAhBIAjAAIAACOg");
	this.shape_14.setTransform(130.6,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzA3QgRgTgBgkQABgjARgSQATgUAgAAQAjABARASQASATAAAjQAAAkgSATQgSASgiABQgggBgTgSgAgbAAQgBApAcAAQAPABAHgLQAHgKAAgVQAAgUgHgLQgIgKgOAAQgbAAAAApg");
	this.shape_15.setTransform(114.3,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSBIIAAiOIAlAAIAACOg");
	this.shape_16.setTransform(102.8,21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBIIAAhvIgjAAIAAgfIBrAAIAAAfIgiAAIAABvg");
	this.shape_17.setTransform(93.5,21.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfBIIgHgbIguAAIgHAbIgrAAIAviPIAyAAIAvCPgAgCgfIgMAsIAeAAIgHgWIgFgUIgEgSIgCAQg");
	this.shape_18.setTransform(80.4,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWBIIguiOIArAAIAUBHQAFAYAAAJIADgQIADgQIAUhIIArAAIguCOg");
	this.shape_19.setTransform(66.2,21.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyA3QgTgTABgkQgBgjATgSQASgUAgAAQAiABASASQARATAAAjQAAAkgRATQgSASgiABQghgBgRgSgAgcAAQABApAbAAQAPABAHgLQAHgKAAgVQAAgUgHgLQgIgKgOAAQgcAAAAApg");
	this.shape_20.setTransform(51.2,21.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARBIIgzhkIgBAAIACAjIAABBIgiAAIAAiOIAyAAIAzBiIABAAIgCghIAAhBIAjAAIAACOg");
	this.shape_21.setTransform(34.9,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpBIIAAiOIBTAAIAAAeIgtAAIAAAXIAqAAIAAAeIgqAAIAAAbIAtAAIAAAgg");
	this.shape_22.setTransform(21.3,21.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARBIIgdg0IgKAAIAAA0IgmAAIAAiOIAuAAQA6AAAAAqQAAAZgZANIAqA+gAgWgIIAHAAQAUAAAAgSQAAgPgTAAIgIAAg");
	this.shape_23.setTransform(9.7,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,5,194.8,52.5), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape.setTransform(129.2,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBAIghg4IggAAIAAA4IgJAAIAAh/IAgAAQAWAAAMAJQALAIAAASQAAANgHAJQgGAIgPAEIAkA6gAghABIAZAAQAPAAAKgHQAJgHAAgOQAAgPgJgGQgJgHgTAAIgWAAg");
	this.shape_1.setTransform(119.9,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsBBIgSguIgzAAIgSAuIgKAAIA0iAIAEAAIAzCAgAgEgiIgSAtIAtAAIgRgtIgGgQIgEAQg");
	this.shape_2.setTransform(108.4,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_3.setTransform(98.3,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA9IAAgJQAOAGAVAAQAQAAAJgHQAJgIAAgMQAAgHgDgFQgDgEgHgEQgHgEgNgFQgTgGgIgHQgHgIAAgNQAAgPALgJQAMgJAQAAQATAAAPAHIgDAHQgQgGgOAAQgOAAgJAGQgIAHAAALQAAAHADAFQACAFAHADQAFAEAOAFQAOAEAIAFQAHAFAEAGQADAGAAAJQAAAQgLAKQgMAJgTAAQgXAAgNgFg");
	this.shape_4.setTransform(88.8,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpAwQgPgSAAgeQAAgeAPgSQAPgRAaAAQAbAAAPARQAPASAAAeQAAAegPASQgPASgbAAQgaAAgPgSgAgigqQgNAPAAAbQAAAbANAQQAMAPAWAAQAXAAAMgPQANgPAAgcQAAgbgNgPQgMgPgXAAQgWAAgMAPg");
	this.shape_5.setTransform(72.2,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_6.setTransform(60.7,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEBAIAAh3IgpAAIAAgIIBbAAIAAAIIgqAAIAAB3g");
	this.shape_7.setTransform(46.6,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBAIhLhxIgBAAIABAfIAABSIgJAAIAAh/IAJAAIBLBxIABAAIgBgeIAAhTIAJAAIAAB/g");
	this.shape_8.setTransform(35.3,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsBBIgSguIgzAAIgSAuIgKAAIA0iAIAEAAIAzCAgAgEgiIgSAtIAtAAIgRgtIgGgQIgEAQg");
	this.shape_9.setTransform(23.5,21.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhBAIgchiIgFgUIgDASIgdBkIgHAAIgkh/IAKAAIAWBSIADAJIACAIIABAHIACAHQACgMAHgYIAWhNIAJAAIAZBYIAHAZIADgNIAbhkIAJAAIgkB/g");
	this.shape_10.setTransform(10,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,7,136.1,28.5), null);


(lib.quote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quotepngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-105,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.quote, new cjs.Rectangle(-105,0,191,81), null);


(lib.pc32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc32, new cjs.Rectangle(0,0,300,250), null);


(lib.pc31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc31, new cjs.Rectangle(0,0,164,202), null);


(lib.pc12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc12, new cjs.Rectangle(0,0,300,192), null);


(lib.pc11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc11, new cjs.Rectangle(0,0,146,250), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAJQgJgHACgHIAFgGQAJgBAFAGQABACgBAFQgCAJgCABIgCABQgCAAgEgDg");
	this.shape.setTransform(131.6,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAoQgDgMAAgKIABgEIgCgXQACgFAAgDIgDgLIgBgDIgOAqQgBACABAFIgBAHQgBAFgEADIgFAAQgDgBAAgDQgDgGgGgdQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAIgDgRIgBgBIgHARIgHAVIABAAIgCACIACAGIgDAEQgCAFgBAKIgLAFQgCgCgCgJQgCgLgCgzIACAAIgDgSIAJgEQAGANAAAOIAAAWIADAAIAEgOIgBgCQAFgHAIgQIAFgLQAHAAAEAKQACAIADAeQAEgFAEgMIAJgdQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAFABQADgBAEAGQACAFADAQIAEAqIgBADIADADIgCAEIADANIgCAAIADAMIgHAFIgFAAQgDgEgCgLg");
	this.shape_1.setTransform(154.9,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAyQgEgEgBgEQAAgaAHgTQAJgYAQgTIAGgGIAIgEQAKAEACAGQgUANgLATQgMAUgCAbQAAABAFAJQAKAAAMgHQAIgEAXgQIgBALIgLAJQgSANgJAFQgLADgEAAQgHgBgFgGg");
	this.shape_2.setTransform(137.7,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA0QgMgDgGgHQgBgDgBgGIAAgJIAEgRQALgcAbgeIAHABQAFAFgDAIQADACABAJIgBAbQgCAdgRAPIgIAFQgCACgEAAIgBAAgAALgcIgKARQgNAZAAARIAFAGQABAAAFgDQALgJAFgNIACgZIACgDQgDgCgCgLIgDABg");
	this.shape_3.setTransform(145.5,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4BuIg3gBIhJAAQgHAAgBgDIABgaIADhHIgDhzQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAIAFAAIBNABIA7gBQAFAAACADQACACAAAFIAEAlIAAAFIgDACIgDAAQgqgFgiABQgIAAgBAEIAAAPQAAALAGACIAJABIAJgBIA8gDIACACIAAACQgEAgAAAQQAAAFgHgBQgOgCgVgBIghAAQgIAAABAFQAAATABADQABAEAHACQAGACAZAAIAagBIAagBQAEgBAAAGIgDAZIgEAWQgBADgEABg");
	this.shape_4.setTransform(50.2,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHB+IgkgkQgDgCABgDIAGgFQALgKACgEQAHgLACgOQACgQAAgqQgBhDgFgpQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAZAAQAMABAYgBQAEAAAAAFIgBCKQgBAmgIAUQgKAggXAUIgFAEIAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBgBg");
	this.shape_5.setTransform(34.4,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBvIgOgBQgFAAAAgEQAEhngBgUIgChTIABgIQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAiABIAYgBQAFAAgBAEIgCA2IgCA1IACBmIgBAGQgKACgTAAIgQAAg");
	this.shape_6.setTransform(24.7,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBuQgEgCgCgCIgFgKIghg8QgDgHgEgFQgHACgHAEIgDACIACBJQAAAFgFAAQgKABgUAAQgRAAgJgBQgFAAAAgFIADhaQABgWgCgmIgCg+QAAAAABgBQAAgBAAAAQABgBAAAAQABAAABAAIAjABIAYgBQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAVgDAqQAAAMABAEQADAFADAAQASAAAKgKQAFgFAGgMIAVg3QACgFAGAAIAdABIAWgBQACABAAAFIgDAMQgJAcgIASQgLAXgOAMQgIAFgDAEIAeAxQARAcAHAPQAEAJgBAFQgBAFgGABQgFABgSAAQgUAAgKgBg");
	this.shape_7.setTransform(9.7,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/BvIgNAAQgCAAgDgEIhThtIgDgEIgCADIACBsIgBAFQAAABgFAAIgzAAQgFAAgBgCIAAgIIADhJQABgZgCgoIgChCQAAgDAFAAQAWgBALgCIAQgCIAIAJIBOBpQAEAGAEABQABgEAAgOQgDg+AAgfQAAgEABgBIAHgBIA0gBQAEAAgBAFQAAAggDBAIAABzQABADgFAAIgVABIgOgBg");
	this.shape_8.setTransform(71.1,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBvQgFAAgCgFIgGgWQgBgFgDABIgmgBIgcABIgDACIgEAMIgEAMQgCAFgEABIgkABQgRgBgEgCQgCAAACgHQAJgdAbhJIAnhnQACgIACgCIAUABQAKABAVgBQADgBADAGIBODGIAEAPQABAEgGABIgcABQgTAAgJgCgAgOACIgGAWIAGACIAUAAIAIAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIgCgNQgHgagHgSIgOAkg");
	this.shape_9.setTransform(117.5,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBnQgogVgNgsQgHgVADgaQABgbAMgWQASggAegOQAXgLAdABQAsACAbAeQAHAJAAACQAAADgFAIQgJANgIAIQgGAHgEABIgJgIQgRgRgWABQgTgBgMAMQgTAQAAAcQgBAZAOAQQALANATADQAUACAYgKQgFghAAgQQAAgGADgBQAHAAAQACQAMABAZgCQADgBAAAGIgBAnQgBAWADApIAAAIQgCACgGgBQgOgDgRgFQgcALgcACIgGAAQgdAAgXgMg");
	this.shape_10.setTransform(94.8,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,160,26.4), null);


(lib.btnanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAfAAQAXAAANANQAOANAAAXQAAAYgOANQgOANgZAAgAgXAkIALAAQAjABAAglQAAgkggABIgOAAg");
	this.shape.setTransform(103.6,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAANIglAAIAAAfIAnAAIAAAOg");
	this.shape_1.setTransform(94.5,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAyIAAgtIgtAAIAAAtIgRAAIAAhjIARAAIAAApIAtAAIAAgpIAQAAIAABjg");
	this.shape_2.setTransform(85.2,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAmQgMgNAAgZQAAgPAGgLQAFgMALgGQALgHAOAAQAPAAANAHIgGAOIgLgFQgFgBgHAAQgNgBgIAKQgIAKAAARQAAASAIAKQAIAJANAAQAHABAGgCIAMgDIAAAOQgMAEgPABQgUAAgMgOg");
	this.shape_3.setTransform(75.7,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgdAAIAAgOIBJAAIAAAOIgdAAIAABVg");
	this.shape_4.setTransform(67.1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAyIgKgcIglAAIgKAcIgRAAIAlhjIARAAIAlBjgAgEgRIgJAZIAcAAIgKgaIgDgIIgCgJQgBAIgDAKg");
	this.shape_5.setTransform(58.5,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkAyIAAgyIABgSIAAgPIAAAAIgfBTIgNAAIgdhTIAAAAIABAiIAAAxIgQAAIAAhjIAYAAIAbBOIAAAAIAdhOIAWAAIAABjg");
	this.shape_6.setTransform(47.5,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgeAAIAAgOIBLAAIAAAOIgeAAIAABVg");
	this.shape_7.setTransform(33.4,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAANIglAAIAAAfIAnAAIAAAOg");
	this.shape_8.setTransform(25.8,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAmQgMgOAAgYQAAgXANgNQAOgPAYAAQAPABAOAFIgFAOQgNgFgMAAQgPgBgJAKQgJAKAAARQAAASAIAKQAIAJAPAAQAIAAAJgCIAAgZIgVAAIAAgNIAlAAIAAAxQgJADgIABQgJABgJABQgWAAgMgOg");
	this.shape_9.setTransform(16.5,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApeiUIS9AAIAAEpIy9AAg");
	this.shape_10.setTransform(60.7,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXAyIAAgtIgtAAIAAAtIgQAAIAAhjIAQAAIAAApIAtAAIAAgpIARAAIAABjg");
	this.shape_11.setTransform(85.8,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgdAAIAAgOIBKAAIAAAOIgeAAIAABVg");
	this.shape_12.setTransform(67.7,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkAyIAAgyIAAgSIABgPIgBAAIgeBTIgNAAIgdhTIgBAAIABAiIAAAxIgOAAIAAhjIAWAAIAcBOIAAAAIAdhOIAWAAIAABjg");
	this.shape_13.setTransform(48.1,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgeAAIAAgOIBKAAIAAAOIgdAAIAABVg");
	this.shape_14.setTransform(34,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9,p:{x:16.5}},{t:this.shape_8,p:{x:25.8}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:58.5}},{t:this.shape_4},{t:this.shape_3,p:{x:75.7}},{t:this.shape_2},{t:this.shape_1,p:{x:94.5}},{t:this.shape,p:{x:103.6}}]}).to({state:[{t:this.shape_10},{t:this.shape_9,p:{x:17.1}},{t:this.shape_8,p:{x:26.4}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_5,p:{x:59.1}},{t:this.shape_12},{t:this.shape_3,p:{x:76.3}},{t:this.shape_11},{t:this.shape_1,p:{x:95.1}},{t:this.shape,p:{x:104.2}}]},7).wait(7));

	// Слой 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0695D0").s().p("ApeCVIAAkpIS9AAIAAEpg");
	this.shape_15.setTransform(60.7,14.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#06ACDA").s().p("ApeCVIAAkpIS9AAIAAEpg");
	this.shape_16.setTransform(60.7,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123.4,31.8);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btnanim();
	this.instance.parent = this;
	this.instance.setTransform(1.9,-1.1,0.969,0.969,0,0,0,60.6,14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAxIAAhgIAdAAQAXAAAMAMQANANAAAWQAAAXgNANQgNANgYAAgAgXAjIAMAAQAiAAAAgjQAAgiggAAIgOAAg");
	this.shape.setTransform(43.5,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAxIAAhgIA1AAIAAANIgmAAIAAAaIAkAAIAAANIgkAAIAAAeIAmAAIAAAOg");
	this.shape_1.setTransform(34.8,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAxIAAgsIgsAAIAAAsIgQAAIAAhgIAQAAIAAAnIAsAAIAAgnIAPAAIAABgg");
	this.shape_2.setTransform(25.7,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAlQgMgNAAgYQAAgOAGgMQAFgLALgGQAKgGANAAQAPAAANAGIgGANIgKgEQgGgBgGAAQgMAAgIAJQgIAKAAAQQAAASAIAJQAHAJANAAIAMgBIAMgDIAAANQgLAFgPAAQgUAAgLgNg");
	this.shape_3.setTransform(16.5,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAxIAAhTIgcAAIAAgNIBHAAIAAANIgcAAIAABTg");
	this.shape_4.setTransform(8.2,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAxIgKgbIgkAAIgJAbIgRAAIAkhgIARAAIAkBggAgEgRIgJAZIAbAAIgJgaIgDgIIgCgIIgEARg");
	this.shape_5.setTransform(-0.1,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiAxIAAgxIABgRIAAgOIAAAAIgdBQIgNAAIgchQIgBAAIABAgIAAAwIgOAAIAAhgIAWAAIAbBLIAAAAIAbhLIAXAAIAABgg");
	this.shape_6.setTransform(-10.8,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAxIAAhTIgcAAIAAgNIBHAAIAAANIgcAAIAABTg");
	this.shape_7.setTransform(-24.5,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAxIAAhgIA1AAIAAANIgmAAIAAAaIAkAAIAAANIgkAAIAAAeIAmAAIAAAOg");
	this.shape_8.setTransform(-31.8,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAlQgMgNAAgYQAAgXANgNQAOgNAWAAQAPAAAOAGIgFANQgMgFgMAAQgOAAgKAJQgIAKgBAQQABASAHAJQAJAJAOAAQAHAAAKgCIAAgZIgUAAIAAgMIAjAAIAAAvQgJADgHABQgJACgJAAQgVAAgMgNg");
	this.shape_9.setTransform(-40.9,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApLiQISXAAIAAEhIyXAAg");
	this.shape_10.setTransform(1.9,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.8,-16.5,119.5,30.8);


// stage content:
(lib.KijengaKitchen_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_869 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(869).call(this.frame_869).wait(14));

	// btn
	this.instance = new lib.yellowbtn();
	this.instance.parent = this;
	this.instance.setTransform(219.8,272.9,1,1,0,0,0,66.2,16.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(846).to({_off:false},0).to({y:222.9},11,cjs.Ease.get(1)).wait(26));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.7,272.8,1.09,1.09);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(210).to({_off:false},0).to({y:222.8},11,cjs.Ease.get(1)).wait(66).to({y:272.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(230).to({_off:false},0).to({y:222.8},11,cjs.Ease.get(1)).wait(66).to({y:272.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(267));

	// t3-1
	this.instance_2 = new lib.t31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.3,41,1,1,0,0,0,75.7,34.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({x:211.3,alpha:1},11,cjs.Ease.get(1)).wait(87).to({x:191.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(199).to({_off:false,x:241.3},0).to({x:211.3,alpha:1},11,cjs.Ease.get(1)).wait(87).to({x:191.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},11).wait(199).to({_off:false,x:241.3},0).to({x:211.3,alpha:1},11,cjs.Ease.get(1)).wait(37));

	// Logo
	this.instance_3 = new lib.Logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-70.9,167.6,0.806,0.806,0,0,0,80.2,13.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:9.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(11).to({_off:false,regX:80.1,y:227.6},0).to({regX:80,regY:13.6,x:77.2,y:228.7,alpha:1},11).wait(97).to({x:107.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(99).to({_off:false,regX:80.2,regY:13.5,x:-70.9,y:167.6},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:9.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(11).to({_off:false,regX:80.1,y:227.6},0).to({regX:80,regY:13.6,x:77.2,y:228.7,alpha:1},11).wait(97).to({x:107.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(99).to({_off:false,regX:80.2,regY:13.5,x:-70.9,y:167.6},0).to({x:79.1,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:9.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(11).to({_off:false,regX:80.1,y:227.6},0).to({regX:80,regY:13.6,x:77.2,y:228.7,alpha:1},11).wait(37));

	// FIND
	this.instance_4 = new lib.t22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(244.7,273.4,1,1,0,0,0,92.9,32.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({x:194.7,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:244.7},0).to({x:194.7,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:244.7},0).to({x:194.7,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(48));

	// FIND
	this.instance_5 = new lib.t21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(217.3,221.4,1,1,0,0,0,100.3,32.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({x:187.3,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:217.3},0).to({x:187.3,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:217.3},0).to({x:187.3,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// pc1-1
	this.instance_6 = new lib.pc11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(227,125,1,1,0,0,0,73,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({x:377},10,cjs.Ease.get(-1)).to({_off:true},1).wait(207).to({_off:false,x:227,alpha:0},0).to({alpha:1},10).wait(90).to({x:377},10,cjs.Ease.get(-1)).to({_off:true},1).wait(207).to({_off:false,x:227,alpha:0},0).to({alpha:1},10).wait(90).to({x:377},10,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// t1-2
	this.instance_7 = new lib.t12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(37.3,216.5,1,1,0,0,0,84.3,30.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({x:96.3,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:166.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:37.3},0).to({x:96.3,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:166.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:37.3},0).to({x:96.3,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:166.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// t1-1
	this.instance_8 = new lib.t11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(46.9,181.1,1,1,0,0,0,94.9,16.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:106.9,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:176.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:46.9},0).to({x:106.9,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:176.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:46.9},0).to({x:106.9,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:176.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(157));

	// plate-blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0695D0").s().p("A3gImIAAxLMAvBAIvIAAIcg");
	this.shape.setTransform(150.5,195);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0695D0").s().p("A3gImIAAxKMAvBAIuIAAIcg");
	this.shape_1.setTransform(150.5,195.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0695D0").s().p("A3gIlIAAxJMAvBAIsIAAIdg");
	this.shape_2.setTransform(150.5,195.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0695D0").s().p("A3gIlIAAxJMAvBAIrIAAIeg");
	this.shape_3.setTransform(150.5,195.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0695D0").s().p("A3gIlIAAxIMAvBAIqIAAIeg");
	this.shape_4.setTransform(150.5,195.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0695D0").s().p("A3gIkIAAxHMAvBAIoIAAIfg");
	this.shape_5.setTransform(150.5,195.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0695D0").s().p("A3gIkIAAxHMAvBAInIAAIgg");
	this.shape_6.setTransform(150.5,195.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0695D0").s().p("A3gIkIAAxHMAvBAImIAAIhg");
	this.shape_7.setTransform(150.5,195.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0695D0").s().p("A3gIjIAAxFMAvBAIkIAAIhg");
	this.shape_8.setTransform(150.5,195.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0695D0").s().p("A3gIjIAAxFMAvBAIjIAAIig");
	this.shape_9.setTransform(150.5,195.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0695D0").s().p("A3gIjIAAxFMAvBAIiIAAIjg");
	this.shape_10.setTransform(150.5,195.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0695D0").s().p("A3gIiIAAxDMAvBAIhIAAIig");
	this.shape_11.setTransform(150.5,195.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0695D0").s().p("A3gIiIAAxDMAvBAIgIAAIjg");
	this.shape_12.setTransform(150.5,195.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0695D0").s().p("A3gIhIAAxBMAvBAIeIAAIjg");
	this.shape_13.setTransform(150.5,195.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0695D0").s().p("A3gIhIAAxBMAvBAIdIAAIkg");
	this.shape_14.setTransform(150.5,195.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0695D0").s().p("A3gIhIAAxBMAvBAIcIAAIlg");
	this.shape_15.setTransform(150.5,195.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0695D0").s().p("A3gIgIAAw/MAvBAIaIAAIlg");
	this.shape_16.setTransform(150.5,195.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0695D0").s().p("A3gIgIAAw/MAvBAIZIAAImg");
	this.shape_17.setTransform(150.5,195.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0695D0").s().p("A3gIgIAAw/MAvBAIYIAAIng");
	this.shape_18.setTransform(150.5,195.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0695D0").s().p("A3gIfIAAw9MAvBAIWIAAIng");
	this.shape_19.setTransform(150.5,195.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0695D0").s().p("A3gIfIAAw9MAvBAIVIAAIog");
	this.shape_20.setTransform(150.5,195.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0695D0").s().p("A3gIfIAAw9MAvBAIUIAAIpg");
	this.shape_21.setTransform(150.5,195.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0695D0").s().p("A3gIeIAAw7MAvBAISIAAIpg");
	this.shape_22.setTransform(150.5,195.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0695D0").s().p("A3gIeIAAw7MAvBAIRIAAIqg");
	this.shape_23.setTransform(150.5,195.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0695D0").s().p("A3gIeIAAw7MAvBAIQIAAIrg");
	this.shape_24.setTransform(150.5,195.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0695D0").s().p("A3gIdIAAw5MAvBAIOIAAIrg");
	this.shape_25.setTransform(150.5,195.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0695D0").s().p("A3gIdIAAw5MAvBAINIAAIsg");
	this.shape_26.setTransform(150.5,195.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0695D0").s().p("A3gIdIAAw5MAvBAIMIAAItg");
	this.shape_27.setTransform(150.5,195.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0695D0").s().p("A3gIcIAAw3MAvBAIKIAAItg");
	this.shape_28.setTransform(150.5,196);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0695D0").s().p("A3gIcIAAw3MAvBAIJIAAIug");
	this.shape_29.setTransform(150.5,196);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0695D0").s().p("A3gIcIAAw3MAvBAIIIAAIvg");
	this.shape_30.setTransform(150.5,196);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0695D0").s().p("A3gIbIAAw1MAvBAIGIAAIvg");
	this.shape_31.setTransform(150.5,196.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0695D0").s().p("A3gIbIAAw1MAvBAIFIAAIwg");
	this.shape_32.setTransform(150.5,196.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0695D0").s().p("A3gIbIAAw1MAvBAIEIAAIxg");
	this.shape_33.setTransform(150.5,196.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0695D0").s().p("A3gIaIAAwzMAvBAICIAAIxg");
	this.shape_34.setTransform(150.5,196.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0695D0").s().p("A3gIaIAAwzMAvBAIBIAAIyg");
	this.shape_35.setTransform(150.5,196.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0695D0").s().p("A3gIaIAAwzMAvBAH/IAAI0g");
	this.shape_36.setTransform(150.5,196.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0695D0").s().p("A3gIZIAAwxMAvBAH+IAAIzg");
	this.shape_37.setTransform(150.5,196.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0695D0").s().p("A3gIZIAAwxMAvBAH9IAAI0g");
	this.shape_38.setTransform(150.5,196.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0695D0").s().p("A3gIZIAAwwMAvBAH7IAAI1g");
	this.shape_39.setTransform(150.5,196.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0695D0").s().p("A3gIYIAAwvMAvBAH6IAAI1g");
	this.shape_40.setTransform(150.5,196.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0695D0").s().p("A3gIYIAAwvMAvBAH5IAAI2g");
	this.shape_41.setTransform(150.5,196.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0695D0").s().p("A3gIYIAAwuMAvBAH3IAAI3g");
	this.shape_42.setTransform(150.5,196.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0695D0").s().p("A3gIXIAAwtMAvBAH2IAAI3g");
	this.shape_43.setTransform(150.5,196.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0695D0").s().p("A3gIXIAAwtMAvBAH1IAAI4g");
	this.shape_44.setTransform(150.5,196.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0695D0").s().p("A3gIXIAAwtMAvBAHzIAAI6g");
	this.shape_45.setTransform(150.5,196.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0695D0").s().p("A3gIWIAAwrMAvBAHyIAAI5g");
	this.shape_46.setTransform(150.5,196.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0695D0").s().p("A3gIWIAAwrMAvBAHxIAAI6g");
	this.shape_47.setTransform(150.5,196.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0695D0").s().p("A3gIWIAAwrMAvBAHvIAAI8g");
	this.shape_48.setTransform(150.5,196.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0695D0").s().p("A3gIVIAAwpMAvBAHuIAAI7g");
	this.shape_49.setTransform(150.5,196.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0695D0").s().p("A3gIVIAAwpMAvBAHtIAAI8g");
	this.shape_50.setTransform(150.5,196.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0695D0").s().p("A3gIVIAAwpMAvBAHrIAAI+g");
	this.shape_51.setTransform(150.5,196.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0695D0").s().p("A3gIUIAAwnMAvBAHqIAAI9g");
	this.shape_52.setTransform(150.5,196.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0695D0").s().p("A3gIUIAAwnMAvBAHpIAAI+g");
	this.shape_53.setTransform(150.5,196.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0695D0").s().p("A3gIUIAAwmMAvBAHnIAAI/g");
	this.shape_54.setTransform(150.5,196.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0695D0").s().p("A3gITIAAwlMAvBAHmIAAI/g");
	this.shape_55.setTransform(150.5,196.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0695D0").s().p("A3gITIAAwlMAvBAHkIAAJBg");
	this.shape_56.setTransform(150.5,196.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0695D0").s().p("A3gITIAAwkMAvBAHjIAAJBg");
	this.shape_57.setTransform(150.5,197);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0695D0").s().p("A3gISIAAwjMAvBAHiIAAJBg");
	this.shape_58.setTransform(150.5,197);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0695D0").s().p("A3gISIAAwjMAvBAHgIAAJDg");
	this.shape_59.setTransform(150.5,197);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0695D0").s().p("A3gISIAAwjMAvBAHfIAAJEg");
	this.shape_60.setTransform(150.5,197.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0695D0").s().p("A3gIRIAAwhMAvBAHeIAAJDg");
	this.shape_61.setTransform(150.5,197.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0695D0").s().p("A3gIRIAAwhMAvBAHcIAAJFg");
	this.shape_62.setTransform(150.5,197.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0695D0").s().p("A3gIRIAAwhMAvBAHbIAAJGg");
	this.shape_63.setTransform(150.5,197.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0695D0").s().p("A3gIQIAAwfMAvBAHaIAAJFg");
	this.shape_64.setTransform(150.5,197.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0695D0").s().p("A3gIQIAAwfMAvBAHYIAAJHg");
	this.shape_65.setTransform(150.5,197.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0695D0").s().p("A3gIQIAAweMAvBAHXIAAJHg");
	this.shape_66.setTransform(150.5,197.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0695D0").s().p("A3gIPIAAwdMAvBAHWIAAJHg");
	this.shape_67.setTransform(150.5,197.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0695D0").s().p("A3gIPIAAwdMAvBAHUIAAJJg");
	this.shape_68.setTransform(150.5,197.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0695D0").s().p("A3gIPIAAwcMAvBAHTIAAJJg");
	this.shape_69.setTransform(150.5,197.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0695D0").s().p("A3gIOIAAwbMAvBAHSIAAJJg");
	this.shape_70.setTransform(150.5,197.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0695D0").s().p("A3gIOIAAwbMAvBAHQIAAJLg");
	this.shape_71.setTransform(150.5,197.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0695D0").s().p("A3gIOIAAwbMAvBAHPIAAJMg");
	this.shape_72.setTransform(150.5,197.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0695D0").s().p("A3gINIAAwZMAvBAHOIAAJLg");
	this.shape_73.setTransform(150.5,197.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0695D0").s().p("A3gINIAAwZMAvBAHMIAAJNg");
	this.shape_74.setTransform(150.5,197.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0695D0").s().p("A3gINIAAwZMAvBAHLIAAJOg");
	this.shape_75.setTransform(150.5,197.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0695D0").s().p("A3gIMIAAwXMAvBAHKIAAJNg");
	this.shape_76.setTransform(150.5,197.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0695D0").s().p("A3gIMIAAwXMAvBAHIIAAJPg");
	this.shape_77.setTransform(150.5,197.6);
	this.shape_77._off = true;

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0695D0").s().p("A3gILIAAwVMAvBAHFIAAJQg");
	this.shape_78.setTransform(150.5,197.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0695D0").s().p("A3gILIAAwVMAvBAHEIAAJRg");
	this.shape_79.setTransform(150.5,197.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0695D0").s().p("A3gILIAAwUMAvBAHDIAAJRg");
	this.shape_80.setTransform(150.5,197.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0695D0").s().p("A3gIKIAAwTMAvBAHBIAAJSg");
	this.shape_81.setTransform(150.5,197.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0695D0").s().p("A3gIKIAAwTMAvBAHAIAAJTg");
	this.shape_82.setTransform(150.5,197.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0695D0").s().p("A3gIKIAAwSMAvBAG/IAAJTg");
	this.shape_83.setTransform(150.5,197.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0695D0").s().p("A3gIJIAAwRMAvBAG9IAAJUg");
	this.shape_84.setTransform(150.5,197.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0695D0").s().p("A3gIJIAAwRMAvBAG8IAAJVg");
	this.shape_85.setTransform(150.5,197.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0695D0").s().p("A3gIJIAAwRMAvBAG7IAAJWg");
	this.shape_86.setTransform(150.5,198);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0695D0").s().p("A3gIIIAAwPMAvBAG5IAAJWg");
	this.shape_87.setTransform(150.5,198);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0695D0").s().p("A3gIIIAAwPMAvBAG4IAAJXg");
	this.shape_88.setTransform(150.5,198);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0695D0").s().p("A3GHsIgHvXMAuZAFnIACJwg");
	this.shape_89.setTransform(152.7,200.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0695D0").s().p("A2sHQIgOufMAtxAEWIAEKJg");
	this.shape_90.setTransform(154.9,203.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0695D0").s().p("A2SG0IgVtnMAtJADFIAGKig");
	this.shape_91.setTransform(157.1,206.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0695D0").s().p("A14GYIgcsvMAshAB0IAIK7g");
	this.shape_92.setTransform(159.3,209.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0695D0").s().p("A2Bl7MAr5AAjIAKLUMgrgAAAg");
	this.shape_93.setTransform(161.5,212.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0695D0").s().p("A1ulIMArRgAuIAMLtMgqyAAAg");
	this.shape_94.setTransform(163.7,212.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0695D0").s().p("A1bkEMAqpgB/IAOMGMgqFAAAg");
	this.shape_95.setTransform(165.9,211.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0695D0").s().p("A1Ii/MAqBgDQIAQMfMgpYAAAg");
	this.shape_96.setTransform(168.1,210.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0695D0").s().p("A01h7MApZgEgIASM3MgorAAAg");
	this.shape_97.setTransform(170.3,208.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0695D0").s().p("A0ig3MAoxgFxIAUNRMgn+AAAg");
	this.shape_98.setTransform(172.5,207.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0695D0").s().p("A0ig3MAoxgFxIAUNQMgn+AABg");
	this.shape_99.setTransform(172.5,207.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0695D0").s().p("A0hg4MAowgFvIATNPMgn9AAAg");
	this.shape_100.setTransform(172.5,207.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0695D0").s().p("A0hg5MAowgFuIASNPMgn8AAAg");
	this.shape_101.setTransform(172.5,207.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0695D0").s().p("A0gg6MAovgFtIASNOMgn9AAAg");
	this.shape_102.setTransform(172.5,207.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0695D0").s().p("A0fg7MAougFrIARNNMgn8AAAg");
	this.shape_103.setTransform(172.5,207.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0695D0").s().p("A0fg8MAougFqIARNNMgn8AAAg");
	this.shape_104.setTransform(172.5,207.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0695D0").s().p("A0eg8MAosgFqIARNMMgn7AAAg");
	this.shape_105.setTransform(172.6,207.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0695D0").s().p("A0eg9MAosgFoIARNLMgn7AAAg");
	this.shape_106.setTransform(172.6,207.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0695D0").s().p("A0dg+MAorgFnIAQNLMgn6AAAg");
	this.shape_107.setTransform(172.6,207.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0695D0").s().p("A0cg/MAoqgFlIAQNJMgn6AAAg");
	this.shape_108.setTransform(172.6,207.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0695D0").s().p("A0cg/MAoqgFlIAPNJMgn5AAAg");
	this.shape_109.setTransform(172.6,207.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0695D0").s().p("A0bhAMAopgFkIAONIMgn5AABg");
	this.shape_110.setTransform(172.6,208);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0695D0").s().p("A0bhBMAopgFiIAONHMgn5AAAg");
	this.shape_111.setTransform(172.6,208);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0695D0").s().p("A0ahCMAoogFhIANNHMgn4AAAg");
	this.shape_112.setTransform(172.6,208);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0695D0").s().p("A0ZhDMAongFgIAMNGMgn3AABg");
	this.shape_113.setTransform(172.7,208.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0695D0").s().p("A0ZhEMAongFfIAMNGMgn3AAAg");
	this.shape_114.setTransform(172.7,208.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0695D0").s().p("A0YhEMAomgFeIAMNFMgn3AAAg");
	this.shape_115.setTransform(172.7,208.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0695D0").s().p("A0YhFMAolgFdIAMNEMgn2AABg");
	this.shape_116.setTransform(172.7,208.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0695D0").s().p("A0YhGMAolgFcIALNEMgn1AAAg");
	this.shape_117.setTransform(172.7,208.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0695D0").s().p("A0XhHMAokgFaIALNDMgn2AAAg");
	this.shape_118.setTransform(172.7,208.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0695D0").s().p("A0WhHMAojgFaIAKNCMgn1AABg");
	this.shape_119.setTransform(172.7,208.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0695D0").s().p("A0WhIMAojgFYIAKNBMgn1AAAg");
	this.shape_120.setTransform(172.7,208.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0695D0").s().p("A0VhJMAoigFXIAJNBMgn0AAAg");
	this.shape_121.setTransform(172.8,208.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0695D0").s().p("A0VhKMAoigFWIAJNAMgn0AABg");
	this.shape_122.setTransform(172.8,208.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0695D0").s().p("A0UhKMAohgFVIAIM/MgnzAAAg");
	this.shape_123.setTransform(172.8,208.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0695D0").s().p("A0ThMMAofgFTIAIM/MgnyAAAg");
	this.shape_124.setTransform(172.8,208.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0695D0").s().p("A0ThMMAofgFTIAIM+MgnyAABg");
	this.shape_125.setTransform(172.8,208.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0695D0").s().p("A0ShNMAoegFRIAHM9MgnxAAAg");
	this.shape_126.setTransform(172.8,208.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0695D0").s().p("A0ShOMAoegFQIAHM9MgnxAAAg");
	this.shape_127.setTransform(172.8,208.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0695D0").s().p("A0RhPMAodgFPIAGM8MgnwAABg");
	this.shape_128.setTransform(172.8,208.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0695D0").s().p("A0QhQMAocgFNIAFM7MgnwAAAg");
	this.shape_129.setTransform(172.8,208.6);
	this.shape_129._off = true;

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#0695D0").s().p("A0PhRMAoagFMIAFM6MgnvAAAg");
	this.shape_130.setTransform(172.9,208.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#0695D0").s().p("A0PhSMAoagFKIAFM5MgnvAAAg");
	this.shape_131.setTransform(172.9,208.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#0695D0").s().p("A0OhSMAoZgFKIAEM5MgnuAAAg");
	this.shape_132.setTransform(172.9,208.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#0695D0").s().p("A0NhUMAoYgFHIADM3MgntAAAg");
	this.shape_133.setTransform(172.9,208.8);
	this.shape_133._off = true;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#0695D0").s().p("A0MhVMAoXgFGIACM3MgnsAAAg");
	this.shape_134.setTransform(172.9,208.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0695D0").s().p("A0MhWMAoXgFEIACM1MgntAAAg");
	this.shape_135.setTransform(172.9,208.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0695D0").s().p("A0LhXMAoWgFDIABM1MgnsAAAg");
	this.shape_136.setTransform(172.9,208.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#0695D0").s().p("A0KhYMAoVgFCIABM0MgnsAABg");
	this.shape_137.setTransform(173,209);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#0695D0").s().p("A0KhYMAoVgFCIAAM0MgnrAAAg");
	this.shape_138.setTransform(173,209);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0695D0").s().p("A0JhZMAoUgFAIAAMzMgnrAAAg");
	this.shape_139.setTransform(173,209);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0695D0").s().p("A0JhaMAoTgE/IAAMyMgnqAABg");
	this.shape_140.setTransform(173,209.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0695D0").s().p("A0JhaMAoTgE/IgBMyMgnqAAAg");
	this.shape_141.setTransform(173,209.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#0695D0").s().p("A0JhbMAoTgE9IgCMxMgnpAAAg");
	this.shape_142.setTransform(173.1,209.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#0695D0").s().p("A0IhcMAoRgE8IgBMwMgnpAABg");
	this.shape_143.setTransform(173.1,209.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#0695D0").s().p("A0IhdMAoRgE6IgCMvMgnpAAAg");
	this.shape_144.setTransform(173.1,209.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0695D0").s().p("A0HheMAoPgE5IgCMvMgnoAAAg");
	this.shape_145.setTransform(173.2,209.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#0695D0").s().p("A0HhfMAoPgE4IgDMuMgnnAABg");
	this.shape_146.setTransform(173.2,209.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#0695D0").s().p("A0HhgMAoPgE2IgEMtMgnnAAAg");
	this.shape_147.setTransform(173.2,209.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0695D0").s().p("A0GhgMAoNgE2IgEMtMgnmAAAg");
	this.shape_148.setTransform(173.3,209.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#0695D0").s().p("A0GhhMAoNgE1IgEMsMgnmAABg");
	this.shape_149.setTransform(173.3,209.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#0695D0").s().p("A0GhiMAoNgE0IgFMsMgnmAAAg");
	this.shape_150.setTransform(173.3,209.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0695D0").s().p("A0FhjMAoLgEyIgFMrMgnlAAAg");
	this.shape_151.setTransform(173.4,209.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0695D0").s().p("A0FhjMAoLgEyIgGMqMgnkAABg");
	this.shape_152.setTransform(173.4,209.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0695D0").s().p("A0EhkMAoKgEwIgGMpMgnlAAAg");
	this.shape_153.setTransform(173.5,209.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#0695D0").s().p("A0EhlMAoJgEvIgGMpMgnkAAAg");
	this.shape_154.setTransform(173.5,209.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0695D0").s().p("A0EhmMAoJgEuIgHMoMgnjAABg");
	this.shape_155.setTransform(173.5,209.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#0695D0").s().p("A0EhnMAoJgEsIgIMnMgnjAAAg");
	this.shape_156.setTransform(173.6,209.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#0695D0").s().p("A0DhoMAoHgErIgIMnMgniAAAg");
	this.shape_157.setTransform(173.6,209.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0695D0").s().p("A0DhoMAoHgEqIgJMlMgniAAAg");
	this.shape_158.setTransform(173.6,209.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0695D0").s().p("A0DhpMAoHgEpIgJMlMgniAAAg");
	this.shape_159.setTransform(173.7,209.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0695D0").s().p("A0ChqMAoFgEoIgJMlMgnhAAAg");
	this.shape_160.setTransform(173.7,209.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#0695D0").s().p("A0ChrMAoFgEmIgKMjMgnhAAAg");
	this.shape_161.setTransform(173.7,209.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0695D0").s().p("A0BhsMAoEgElIgLMjMgngAAAg");
	this.shape_162.setTransform(173.8,209.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#0695D0").s().p("A0BhtMAoDgEkIgLMjMgnfAAAg");
	this.shape_163.setTransform(173.8,209.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#0695D0").s().p("A0BhuMAoDgEjIgMMiMgnfAAAg");
	this.shape_164.setTransform(173.8,209.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#0695D0").s().p("A0AhuMAoCgEiIgMMhMgnfAAAg");
	this.shape_165.setTransform(173.9,209.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#0695D0").s().p("A0AhvMAoBgEhIgMMgMgneAABg");
	this.shape_166.setTransform(173.9,210);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#0695D0").s().p("A0AhwMAoBgEgIgNMgMgneAAAg");
	this.shape_167.setTransform(173.9,210);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0695D0").s().p("A0AhwMAoBgEfIgOMfMgndAAAg");
	this.shape_168.setTransform(174,210);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0695D0").s().p("Az/hxMAn/gEeIgNMeMgndAABg");
	this.shape_169.setTransform(174,210.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0695D0").s().p("Az/hyMAn/gEcIgOMdMgndAAAg");
	this.shape_170.setTransform(174,210.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0695D0").s().p("Az/hzMAn/gEbIgPMdMgncAAAg");
	this.shape_171.setTransform(174.1,210.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0695D0").s().p("Az+h0MAn9gEaIgPMcMgnbAABg");
	this.shape_172.setTransform(174.1,210.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0695D0").s().p("Az+h1MAn9gEYIgQMbMgnbAAAg");
	this.shape_173.setTransform(174.1,210.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0695D0").s().p("Az9h2MAn7gEXIgQMbMgnaAAAg");
	this.shape_174.setTransform(174.2,210.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0695D0").s().p("Az9h2MAn7gEXIgRMaMgnZAABg");
	this.shape_175.setTransform(174.2,210.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0695D0").s().p("Az9h3MAn7gEVIgRMZMgnaAAAg");
	this.shape_176.setTransform(174.2,210.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0695D0").s().p("Az8h4MAn5gEUIgRMZMgnZAAAg");
	this.shape_177.setTransform(174.3,210.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0695D0").s().p("Az8h4MAn5gEUIgSMYMgnYAABg");
	this.shape_178.setTransform(174.3,210.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0695D0").s().p("Az8h5MAn5gETIgSMYMgnZAAAg");
	this.shape_179.setTransform(174.3,210.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0695D0").s().p("Az7h6MAn3gERIgSMXMgnYAAAg");
	this.shape_180.setTransform(174.4,210.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0695D0").s().p("Az7h7MAn3gEQIgTMWMgnXAABg");
	this.shape_181.setTransform(174.4,210.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0695D0").s().p("Az7h8MAn3gEOIgUMVMgnXAAAg");
	this.shape_182.setTransform(174.5,210.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0695D0").s().p("Az6h9MAn1gENIgUMVMgnWAAAg");
	this.shape_183.setTransform(174.5,210.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0695D0").s().p("A0Oh+MAodgEKIgTMQMgoAAAAg");
	this.shape_184.setTransform(172.5,210.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0695D0").s().p("A0YGGIgJoGMApDgEFIgSMLg");
	this.shape_185.setTransform(170.5,211.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0695D0").s().p("A0tGDIgIoEMAprgECIgSMGg");
	this.shape_186.setTransform(168.5,211.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0695D0").s().p("A1BGBIgIoEMAqTgD9IgRMBg");
	this.shape_187.setTransform(166.5,211.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0695D0").s().p("A1WF+IgGoDMAq5gD5IgQL8g");
	this.shape_188.setTransform(164.5,211.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0695D0").s().p("A1qF8IgFoDMArfgD0IgOL3g");
	this.shape_189.setTransform(162.6,212.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0695D0").s().p("A1/F5IgEoBMAsHgDxIgNLzg");
	this.shape_190.setTransform(160.6,212.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0695D0").s().p("A2TF3IgEoBMAsugDsIgMLtg");
	this.shape_191.setTransform(158.6,212.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0695D0").s().p("A2oF0IgCoAMAtVgDoIgLLpg");
	this.shape_192.setTransform(156.6,212.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0695D0").s().p("A28FyIgCn/MAt9gDkIgLLjg");
	this.shape_193.setTransform(154.6,213.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0695D0").s().p("A3QFvIgBn/MAujgDfIgKLfg");
	this.shape_194.setTransform(152.6,213.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0695D0").s().p("A3lFsIAAn9MAvLgDcIgJLag");
	this.shape_195.setTransform(150.6,213.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#0695D0").s().p("A3lFsIAAn+MAvLgDaIgJLZg");
	this.shape_196.setTransform(150.6,213.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0695D0").s().p("A3lFrIAAn+MAvLgDZIgJLYg");
	this.shape_197.setTransform(150.6,213.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0695D0").s().p("A3lFrIAAn/MAvLgDXIgJLXg");
	this.shape_198.setTransform(150.6,213.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0695D0").s().p("A3lFrIAAoAMAvLgDWIgJLXg");
	this.shape_199.setTransform(150.6,213.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0695D0").s().p("A3lFqIAAoAMAvLgDUIgJLVg");
	this.shape_200.setTransform(150.6,213.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0695D0").s().p("A3lFqIAAoBMAvLgDTIgJLVg");
	this.shape_201.setTransform(150.6,213.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#0695D0").s().p("A3lFpIAAoAMAvLgDSIgJLTg");
	this.shape_202.setTransform(150.6,213.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#0695D0").s().p("A3lFpIAAoBMAvLgDRIgJLTg");
	this.shape_203.setTransform(150.6,214);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#0695D0").s().p("A3lFoIAAoBMAvLgDPIgJLRg");
	this.shape_204.setTransform(150.6,214);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#0695D0").s().p("A3lFoIAAoCMAvLgDOIgJLRg");
	this.shape_205.setTransform(150.6,214.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#0695D0").s().p("A3lFnIAAoCMAvLgDNIgJLQg");
	this.shape_206.setTransform(150.6,214.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0695D0").s().p("A3lFnIAAoDMAvLgDLIgJLPg");
	this.shape_207.setTransform(150.6,214.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0695D0").s().p("A3lFmIAAoDMAvLgDJIgJLNg");
	this.shape_208.setTransform(150.6,214.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#0695D0").s().p("A3lFmIAAoEMAvLgDIIgJLNg");
	this.shape_209.setTransform(150.6,214.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#0695D0").s().p("A3lFlIAAoEMAvLgDGIgJLLg");
	this.shape_210.setTransform(150.6,214.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#0695D0").s().p("A3lFlIAAoFMAvLgDFIgJLLg");
	this.shape_211.setTransform(150.6,214.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#0695D0").s().p("A3lFlIAAoGMAvLgDEIgJLLg");
	this.shape_212.setTransform(150.6,214.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#0695D0").s().p("A3lFkIAAoGMAvLgDCIgJLJg");
	this.shape_213.setTransform(150.6,214.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#0695D0").s().p("A3lFjIAAoGMAvLgDAIgJLHg");
	this.shape_214.setTransform(150.6,214.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#0695D0").s().p("A3lFjIAAoHMAvLgC/IgJLHg");
	this.shape_215.setTransform(150.6,214.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#0695D0").s().p("A3lFiIAAoHMAvLgC+IgJLGg");
	this.shape_216.setTransform(150.6,214.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0695D0").s().p("A3lFiIAAoIMAvLgC8IgJLFg");
	this.shape_217.setTransform(150.6,214.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#0695D0").s().p("A3lFhIAAoIMAvLgC6IgJLDg");
	this.shape_218.setTransform(150.6,214.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#0695D0").s().p("A3lFhIAAoJMAvLgC5IgJLDg");
	this.shape_219.setTransform(150.6,214.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#0695D0").s().p("A3lFgIAAoJMAvLgC3IgJLBg");
	this.shape_220.setTransform(150.6,214.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#0695D0").s().p("A3lFgIAAoKMAvLgC2IgJLBg");
	this.shape_221.setTransform(150.6,214.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#0695D0").s().p("A3lFgIAAoLMAvLgC1IgJLBg");
	this.shape_222.setTransform(150.6,214.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#0695D0").s().p("A3lFfIAAoLMAvLgCzIgJK/g");
	this.shape_223.setTransform(150.6,214.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#0695D0").s().p("A3lFfIAAoMMAvLgCyIgJK/g");
	this.shape_224.setTransform(150.6,215);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#0695D0").s().p("A3lFeIAAoLMAvLgCxIgJK9g");
	this.shape_225.setTransform(150.6,215);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#0695D0").s().p("A3lFeIAAoMMAvLgCwIgJK9g");
	this.shape_226.setTransform(150.6,215.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#0695D0").s().p("A3lFdIAAoMMAvLgCuIgJK7g");
	this.shape_227.setTransform(150.6,215.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#0695D0").s().p("A3lFdIAAoNMAvLgCtIgJK7g");
	this.shape_228.setTransform(150.6,215.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#0695D0").s().p("A3lFcIAAoNMAvLgCrIgJK5g");
	this.shape_229.setTransform(150.6,215.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#0695D0").s().p("A3lFcIAAoOMAvLgCqIgJK5g");
	this.shape_230.setTransform(150.6,215.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#0695D0").s().p("A3lFbIAAoOMAvLgCpIgJK4g");
	this.shape_231.setTransform(150.6,215.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#0695D0").s().p("A3lFbIAAoPMAvLgCnIgJK3g");
	this.shape_232.setTransform(150.6,215.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#0695D0").s().p("A3lFaIAAoPMAvLgCmIgJK2g");
	this.shape_233.setTransform(150.6,215.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#0695D0").s().p("A3lFaIAAoQMAvLgCkIgJK1g");
	this.shape_234.setTransform(150.6,215.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0695D0").s().p("A3lFaIAAoRMAvLgCjIgJK1g");
	this.shape_235.setTransform(150.6,215.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0695D0").s().p("A3lFZIAAoRMAvLgChIgJKzg");
	this.shape_236.setTransform(150.6,215.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#0695D0").s().p("A3lFYIAAoRMAvLgCfIgJKxg");
	this.shape_237.setTransform(150.6,215.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#0695D0").s().p("A3lFYIAAoSMAvLgCeIgJKxg");
	this.shape_238.setTransform(150.6,215.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#0695D0").s().p("A3lFXIAAoSMAvLgCcIgJKvg");
	this.shape_239.setTransform(150.6,215.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#0695D0").s().p("A3lFXIAAoTMAvLgCbIgJKvg");
	this.shape_240.setTransform(150.6,215.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#0695D0").s().p("A3lFWIAAoTMAvLgCaIgJKug");
	this.shape_241.setTransform(150.6,215.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#0695D0").s().p("A3lFWIAAoUMAvLgCYIgJKtg");
	this.shape_242.setTransform(150.6,215.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#0695D0").s().p("A3lFVIAAoUMAvLgCXIgJKsg");
	this.shape_243.setTransform(150.6,215.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#0695D0").s().p("A3lFVIAAoVMAvLgCVIgJKrg");
	this.shape_244.setTransform(150.6,216);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#0695D0").s().p("A3lFVIAAoWMAvLgCUIgJKrg");
	this.shape_245.setTransform(150.6,216);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#0695D0").s().p("A3lFUIAAoWMAvLgCSIgJKpg");
	this.shape_246.setTransform(150.6,216);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#0695D0").s().p("A3lFUIAAoXMAvLgCRIgJKpg");
	this.shape_247.setTransform(150.6,216.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#0695D0").s().p("A3lFTIAAoWMAvLgCQIgJKng");
	this.shape_248.setTransform(150.6,216.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#0695D0").s().p("A3lFTIAAoXMAvLgCPIgJKng");
	this.shape_249.setTransform(150.6,216.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#0695D0").s().p("A3lFSIAAoXMAvLgCNIgJKlg");
	this.shape_250.setTransform(150.6,216.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#0695D0").s().p("A3lFSIAAoYMAvLgCMIgJKlg");
	this.shape_251.setTransform(150.6,216.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#0695D0").s().p("A3lFRIAAoYMAvLgCLIgJKkg");
	this.shape_252.setTransform(150.6,216.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#0695D0").s().p("A3lFRIAAoZMAvLgCJIgJKjg");
	this.shape_253.setTransform(150.6,216.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#0695D0").s().p("A3lFQIAAoZMAvLgCIIgJKig");
	this.shape_254.setTransform(150.6,216.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#0695D0").s().p("A3lFQIAAoaMAvLgCGIgJKhg");
	this.shape_255.setTransform(150.6,216.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#0695D0").s().p("A3lFPIAAoaMAvLgCEIgJKfg");
	this.shape_256.setTransform(150.6,216.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#0695D0").s().p("A3lFPIAAobMAvLgCDIgJKfg");
	this.shape_257.setTransform(150.6,216.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#0695D0").s().p("A3lFPIAAocMAvLgCCIgJKfg");
	this.shape_258.setTransform(150.6,216.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#0695D0").s().p("A3lFOIAAocMAvLgCAIgJKdg");
	this.shape_259.setTransform(150.6,216.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#0695D0").s().p("A3lFNIAAocMAvLgB+IgJKbg");
	this.shape_260.setTransform(150.6,216.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0695D0").s().p("A3lFNIAAodMAvLgB9IgJKbg");
	this.shape_261.setTransform(150.6,216.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#0695D0").s().p("A3lFMIAAodMAvLgB8IgJKag");
	this.shape_262.setTransform(150.6,216.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#0695D0").s().p("A3lFMIAAoeMAvLgB6IgJKZg");
	this.shape_263.setTransform(150.6,216.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#0695D0").s().p("A3lFLIAAoeMAvLgB4IgJKXg");
	this.shape_264.setTransform(150.6,216.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#0695D0").s().p("A3lFLIAAofMAvLgB3IgJKXg");
	this.shape_265.setTransform(150.6,217);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#0695D0").s().p("A3lFKIAAofMAvLgB1IgJKVg");
	this.shape_266.setTransform(150.6,217);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#0695D0").s().p("A3lFKIAAogMAvLgB0IgJKVg");
	this.shape_267.setTransform(150.6,217.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#0695D0").s().p("A3lFKIAAohMAvLgBzIgJKVg");
	this.shape_268.setTransform(150.6,217.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#0695D0").s().p("A3lFJIAAohMAvLgBxIgJKTg");
	this.shape_269.setTransform(150.6,217.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#0695D0").s().p("A3lFJIAAoiMAvLgBwIgJKTg");
	this.shape_270.setTransform(150.6,217.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#0695D0").s().p("A3lFIIAAohMAvLgBvIgJKRg");
	this.shape_271.setTransform(150.6,217.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#0695D0").s().p("A3lFIIAAoiMAvLgBuIgJKRg");
	this.shape_272.setTransform(150.6,217.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#0695D0").s().p("A3lFHIAAoiMAvLgBsIgJKPg");
	this.shape_273.setTransform(150.6,217.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#0695D0").s().p("A3lFHIAAojMAvLgBrIgJKPg");
	this.shape_274.setTransform(150.6,217.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#0695D0").s().p("A3lFGIAAojMAvLgBpIgJKNg");
	this.shape_275.setTransform(150.6,217.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#0695D0").s().p("A3lFGIAAokMAvLgBoIgJKNg");
	this.shape_276.setTransform(150.6,217.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#0695D0").s().p("A3lFFIAAokMAvLgBmIgJKLg");
	this.shape_277.setTransform(150.6,217.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#0695D0").s().p("A3lFFIAAolMAvLgBlIgJKLg");
	this.shape_278.setTransform(150.6,217.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#0695D0").s().p("A3lFEIAAolMAvLgBkIgJKKg");
	this.shape_279.setTransform(150.6,217.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#0695D0").s().p("A3lFEIAAomMAvLgBiIgJKJg");
	this.shape_280.setTransform(150.6,217.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#0695D0").s().p("A3lFEIAAonMAvLgBhIgJKJg");
	this.shape_281.setTransform(150.6,217.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#0695D0").s().p("A3lFDIAAonMAvLgBfIgJKHg");
	this.shape_282.setTransform(150.6,217.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0695D0").s().p("A3lFCIAAonMAvLgBdIgJKFg");
	this.shape_283.setTransform(150.6,217.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#0695D0").s().p("A3lFCIAAooMAvLgBcIgJKFg");
	this.shape_284.setTransform(150.6,217.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0695D0").s().p("A3lFBIAAooMAvLgBaIgJKDg");
	this.shape_285.setTransform(150.6,217.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#0695D0").s().p("A3lFBIAAopMAvLgBZIgJKDg");
	this.shape_286.setTransform(150.6,218);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#0695D0").s().p("A3lFAIAAopMAvLgBYIgJKCg");
	this.shape_287.setTransform(150.6,218);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#0695D0").s().p("A3lFAIAAoqMAvLgBWIgJKBg");
	this.shape_288.setTransform(150.6,218.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0695D0").s().p("A3lE/IAAoqMAvLgBVIgJKAg");
	this.shape_289.setTransform(150.6,218.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#0695D0").s().p("A3lE/IAAorMAvLgBTIgJJ/g");
	this.shape_290.setTransform(150.6,218.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0695D0").s().p("A3lE/IAAosMAvLgBSIgJJ/g");
	this.shape_291.setTransform(150.6,218.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0695D0").s().p("A3lE+IAAosMAvLgBQIgJJ9g");
	this.shape_292.setTransform(150.6,218.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0695D0").s().p("A3lE+IAAotMAvLgBPIgJJ9g");
	this.shape_293.setTransform(150.6,218.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0695D0").s().p("A3lE9IAAosMAvLgBOIgJJ7g");
	this.shape_294.setTransform(150.6,218.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0695D0").s().p("A3lE9IAAotMAvLgBNIgJJ7g");
	this.shape_295.setTransform(150.6,218.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0695D0").s().p("A3lE8IAAotMAvLgBLIgJJ5g");
	this.shape_296.setTransform(150.6,218.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0695D0").s().p("A3lE8IAAouMAvLgBKIgJJ5g");
	this.shape_297.setTransform(150.6,218.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#0695D0").s().p("A3lE7IAAouMAvLgBJIgJJ4g");
	this.shape_298.setTransform(150.6,218.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0695D0").s().p("A3lE7IAAovMAvLgBHIgJJ3g");
	this.shape_299.setTransform(150.6,218.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#0695D0").s().p("A3lE6IAAovMAvLgBGIgJJ2g");
	this.shape_300.setTransform(150.6,218.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0695D0").s().p("A3kE2IAAplMAvJgAHIgIJtg");
	this.shape_301.setTransform(150.6,219.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#0695D0").s().p("A3kFOIAAqbMAvJAA4IgIJkg");
	this.shape_302.setTransform(150.6,216.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#0695D0").s().p("A3jFpIAArRMAvHAB3IgGJbg");
	this.shape_303.setTransform(150.5,214);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#0695D0").s().p("A3jGEIAAsHMAvHAC2IgGJSg");
	this.shape_304.setTransform(150.5,211.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#0695D0").s().p("A3iGfIAAs9MAvFAD1IgEJIg");
	this.shape_305.setTransform(150.5,208.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#0695D0").s().p("A3iG6IAAtzMAvFAE0IgEI/g");
	this.shape_306.setTransform(150.5,205.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#0695D0").s().p("A3hHVIAAupMAvDAFzIgDI2g");
	this.shape_307.setTransform(150.5,203.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#0695D0").s().p("A3hHwIAAvfMAvDAGyIgCItg");
	this.shape_308.setTransform(150.5,200.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#0695D0").s().p("A3gILIAAwVMAvBAHxIgBIkg");
	this.shape_309.setTransform(150.5,197.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213,p:{y:214.4}}]},1).to({state:[{t:this.shape_213,p:{y:214.5}}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236,p:{y:215.5}}]},1).to({state:[{t:this.shape_236,p:{y:215.6}}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259,p:{y:216.6}}]},1).to({state:[{t:this.shape_259,p:{y:216.7}}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282,p:{y:217.7}}]},1).to({state:[{t:this.shape_282,p:{y:217.8}}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213,p:{y:214.4}}]},1).to({state:[{t:this.shape_213,p:{y:214.5}}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236,p:{y:215.5}}]},1).to({state:[{t:this.shape_236,p:{y:215.6}}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259,p:{y:216.6}}]},1).to({state:[{t:this.shape_259,p:{y:216.7}}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282,p:{y:217.7}}]},1).to({state:[{t:this.shape_282,p:{y:217.8}}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(77).to({_off:false},0).wait(1).to({y:197.7},0).to({_off:true},1).wait(316).to({_off:false,y:197.6},0).wait(1).to({y:197.7},0).to({_off:true},1).wait(316).to({_off:false,y:197.6},0).wait(1).to({y:197.7},0).to({_off:true},1).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.shape_129).wait(130).to({_off:false},0).wait(1).to({x:172.9,y:208.7},0).to({_off:true},1).wait(316).to({_off:false,x:172.8,y:208.6},0).wait(1).to({x:172.9,y:208.7},0).to({_off:true},1).wait(316).to({_off:false,x:172.8,y:208.6},0).wait(1).to({x:172.9,y:208.7},0).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_133).wait(135).to({_off:false},0).wait(1).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(110));

	// quote
	this.instance_9 = new lib.quote();
	this.instance_9.parent = this;
	this.instance_9.setTransform(203.5,234.6,1,1,0,0,0,95.5,40.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(198).to({_off:false},0).to({y:154.6},12).wait(87).to({y:244.6},10).to({_off:true},1).wait(208).to({_off:false,y:234.6},0).to({y:154.6},12).wait(87).to({y:244.6},10).to({_off:true},1).wait(208).to({_off:false,y:234.6},0).to({y:154.6},12).wait(37));

	// pc3-1
	this.instance_10 = new lib.pc31();
	this.instance_10.parent = this;
	this.instance_10.setTransform(219.1,106,1,1,0,0,0,82,101);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({alpha:1},10).wait(218).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},10).wait(218).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false},0).to({alpha:1},10).wait(158));

	// plate-orange
	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(250,164,48,0.898)").s().p("A3gImIAAocMAvBgIvIAARLg");
	this.shape_310.setTransform(150,195);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(250,164,48,0.898)").s().p("A3gIoIAAodMAvBgIyIAARPg");
	this.shape_311.setTransform(150,194.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(250,164,48,0.898)").s().p("A3gIrIAAogMAvBgI1IAARVg");
	this.shape_312.setTransform(150,194.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(250,164,48,0.898)").s().p("A3gItIAAohMAvBgI4IAARZg");
	this.shape_313.setTransform(150,194.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(250,164,48,0.898)").s().p("A3gIwIAAokMAvBgI7IAARfg");
	this.shape_314.setTransform(150,194);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(250,164,48,0.898)").s().p("A3gIzIAAomMAvBgI+IAARkg");
	this.shape_315.setTransform(150,193.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(250,164,48,0.898)").s().p("A3gI1IAAooMAvBgJBIAARpg");
	this.shape_316.setTransform(150,193.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(250,164,48,0.898)").s().p("A3gI4IAAoqMAvBgJEIAARug");
	this.shape_317.setTransform(150,193.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(250,164,48,0.898)").s().p("A3gI6IAAorMAvBgJIIAARzg");
	this.shape_318.setTransform(150,193);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(250,164,48,0.898)").s().p("A3gI9IAAouMAvBgJKIAAR4g");
	this.shape_319.setTransform(150,192.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(250,164,48,0.898)").s().p("A3gI/IAAowMAvBgJNIAAR9g");
	this.shape_320.setTransform(150,192.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJCIAAoyMAvBgJRIAASDg");
	this.shape_321.setTransform(150,192.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJEIAAozMAvBgJUIAASHg");
	this.shape_322.setTransform(150,192);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJHIAAo2MAvBgJXIAASNg");
	this.shape_323.setTransform(150,191.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJJIAAo4MAvBgJZIAASRg");
	this.shape_324.setTransform(150,191.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJMIAAo6MAvBgJdIAASXg");
	this.shape_325.setTransform(150,191.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJOIAAo8MAvBgJfIAASbg");
	this.shape_326.setTransform(150,191);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJRIAAo+MAvBgJjIAAShg");
	this.shape_327.setTransform(150,190.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJTIAApAMAvBgJlIAASlg");
	this.shape_328.setTransform(150,190.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJWIAApCMAvBgJpIAASrg");
	this.shape_329.setTransform(150,190.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJYIAApEMAvBgJrIAASvg");
	this.shape_330.setTransform(150,190);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJbIAApGMAvBgJvIAAS1g");
	this.shape_331.setTransform(150,189.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJdIAApIMAvBgJxIAAS5g");
	this.shape_332.setTransform(150,189.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJgIAApKMAvBgJ1IAAS/g");
	this.shape_333.setTransform(150,189.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJiIAApMMAvBgJ3IAATDg");
	this.shape_334.setTransform(150,189);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJlIAApOMAvBgJ7IAATJg");
	this.shape_335.setTransform(150,188.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJoIAApQMAvBgJ+IAATOg");
	this.shape_336.setTransform(150,188.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJqIAApSMAvBgKBIAATTg");
	this.shape_337.setTransform(150,188.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJtIAApUMAvBgKEIAATYg");
	this.shape_338.setTransform(150,188);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJvIAApWMAvBgKHIAATdg");
	this.shape_339.setTransform(150,187.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJyIAApZMAvBgKJIAATig");
	this.shape_340.setTransform(150,187.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJ0IAApaMAvBgKNIAATng");
	this.shape_341.setTransform(150,187.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJ3IAApcMAvBgKQIAATsg");
	this.shape_342.setTransform(150,187);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJ5IAApeMAvBgKTIAATxg");
	this.shape_343.setTransform(150,186.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJ8IAAphMAvBgKVIAAT2g");
	this.shape_344.setTransform(150,186.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(250,164,48,0.898)").s().p("A3gJ+IAApiMAvBgKZIAAT7g");
	this.shape_345.setTransform(150,186.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKBIAApkMAvBgKdIAAUBg");
	this.shape_346.setTransform(150,185.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKDIAApmMAvBgKfIAAUFg");
	this.shape_347.setTransform(150,185.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKGIAAppMAvBgKiIAAULg");
	this.shape_348.setTransform(150,185.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKIIAApqMAvBgKlIAAUPg");
	this.shape_349.setTransform(150,185.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKLIAAptMAvBgKoIAAUVg");
	this.shape_350.setTransform(150,184.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKNIAApuMAvBgKrIAAUZg");
	this.shape_351.setTransform(150,184.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKQIAApxMAvBgKuIAAUfg");
	this.shape_352.setTransform(150,184.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKSIAApyMAvBgKxIAAUjg");
	this.shape_353.setTransform(150,184.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKVIAAp1MAvBgK0IAAUpg");
	this.shape_354.setTransform(150,183.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKYIAAp3MAvBgK4IAAUvg");
	this.shape_355.setTransform(150,183.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKaIAAp5MAvBgK6IAAUzg");
	this.shape_356.setTransform(150,183.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKdIAAp7MAvBgK+IAAU5g");
	this.shape_357.setTransform(150,183.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKfIAAp8MAvBgLBIAAU9g");
	this.shape_358.setTransform(150,182.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKiIAAp/MAvBgLEIAAVDg");
	this.shape_359.setTransform(150,182.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKkIAAqBMAvBgLGIAAVHg");
	this.shape_360.setTransform(150,182.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKnIAAqDMAvBgLKIAAVNg");
	this.shape_361.setTransform(150,182.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKpIAAqEMAvBgLNIAAVRg");
	this.shape_362.setTransform(150,181.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKsIAAqHMAvBgLPIAAVWg");
	this.shape_363.setTransform(150,181.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKuIAAqJMAvBgLSIAAVbg");
	this.shape_364.setTransform(150,181.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKxIAAqLMAvBgLWIAAVhg");
	this.shape_365.setTransform(150,181.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(250,164,48,0.898)").s().p("A3gKzIAAqMMAvBgLZIAAVlg");
	this.shape_366.setTransform(150,180.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(250,164,48,0.898)").s().p("A3gK2IAAqPMAvBgLcIAAVrg");
	this.shape_367.setTransform(150,180.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(250,164,48,0.898)").s().p("A3gK4IAAqQMAvBgLfIAAVvg");
	this.shape_368.setTransform(150,180.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(250,164,48,0.898)").s().p("A3gK7IAAqTMAvBgLiIAAV1g");
	this.shape_369.setTransform(150,180.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(250,164,48,0.898)").s().p("A3gK9IAAqUMAvBgLlIAAV5g");
	this.shape_370.setTransform(150,179.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLAIAAqXMAvBgLoIAAV/g");
	this.shape_371.setTransform(150,179.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLCIAAqZMAvBgLqIAAWDg");
	this.shape_372.setTransform(150,179.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLFIAAqbMAvBgLuIAAWJg");
	this.shape_373.setTransform(150,179.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLHIAAqdMAvBgLwIAAWNg");
	this.shape_374.setTransform(150,178.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLKIAAqfMAvBgL0IAAWTg");
	this.shape_375.setTransform(150,178.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLNIAAqiMAvBgL2IAAWYg");
	this.shape_376.setTransform(150,178.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLPIAAqjMAvBgL6IAAWdg");
	this.shape_377.setTransform(150,178.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLSIAAqlMAvBgL+IAAWjg");
	this.shape_378.setTransform(150,177.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLUIAAqnMAvBgMAIAAWng");
	this.shape_379.setTransform(150,177.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLXIAAqqMAvBgMDIAAWtg");
	this.shape_380.setTransform(150,177.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLZIAAqrMAvBgMGIAAWxg");
	this.shape_381.setTransform(150,177.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLcIAAqtMAvBgMKIAAW3g");
	this.shape_382.setTransform(150,176.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLeIAAqvMAvBgMMIAAW7g");
	this.shape_383.setTransform(150,176.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLhIAAqyMAvBgMPIAAXBg");
	this.shape_384.setTransform(150,176.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLjIAAqzMAvBgMSIAAXFg");
	this.shape_385.setTransform(150,176.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLmIAAq1MAvBgMWIAAXLg");
	this.shape_386.setTransform(150,175.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLoIAAq3MAvBgMYIAAXPg");
	this.shape_387.setTransform(150,175.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLrIAAq5MAvBgMcIAAXVg");
	this.shape_388.setTransform(150,175.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLtIAAq7MAvBgMeIAAXZg");
	this.shape_389.setTransform(150,175.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLwIAAq9MAvBgMiIAAXfg");
	this.shape_390.setTransform(150,174.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(250,164,48,0.898)").s().p("A3gLyIAAq/MAvBgMkIAAXjg");
	this.shape_391.setTransform(150,174.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(250,164,48,0.898)").s().p("A3gL1IAArBMAvBgMoIAAXpg");
	this.shape_392.setTransform(150,174.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(250,164,48,0.898)").s().p("A3gL3IAArDMAvBgMqIAAXtg");
	this.shape_393.setTransform(150,174.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(250,164,48,0.898)").s().p("A3gL6IAArFMAvBgMuIAAXzg");
	this.shape_394.setTransform(150,173.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(250,164,48,0.898)").s().p("A3gL9IAArHMAvBgMxIAAX4g");
	this.shape_395.setTransform(150,173.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(250,164,48,0.898)").s().p("A3gL/IAArJMAvBgM0IAAX9g");
	this.shape_396.setTransform(150,173.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMCIAArMMAvBgM2IAAYCg");
	this.shape_397.setTransform(150,173.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMEIAArNMAvBgM6IAAYHg");
	this.shape_398.setTransform(150,172.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMHIAArQMAvBgM8IAAYMg");
	this.shape_399.setTransform(150,172.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMJIAArSMAvBgM/IAAYRg");
	this.shape_400.setTransform(150,172.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMMIAArUMAvBgNCIAAYWg");
	this.shape_401.setTransform(150,172.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMOIAArVMAvBgNGIAAYbg");
	this.shape_402.setTransform(150,171.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMRIAArYMAvBgNJIAAYhg");
	this.shape_403.setTransform(150,171.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMTIAAraMAvBgNLIAAYlg");
	this.shape_404.setTransform(150,171.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMWIAArcMAvBgNPIAAYrg");
	this.shape_405.setTransform(150,171);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMYIAArdMAvBgNSIAAYvg");
	this.shape_406.setTransform(150,170.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMbIAArgMAvBgNVIAAY1g");
	this.shape_407.setTransform(150,170.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMdIAArhMAvBgNYIAAY5g");
	this.shape_408.setTransform(150,170.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(250,164,48,0.898)").s().p("A3gMgIAArkMAvBgNbIAAY/g");
	this.shape_409.setTransform(150,170);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(250,164,48,0.898)").s().p("A3ggHMAvBgLeIgBWyMgvAAAZg");
	this.shape_410.setTransform(150.1,171.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(250,164,48,0.898)").s().p("A3hhMMAvDgJgIgCUnMgvBAAyg");
	this.shape_411.setTransform(150.2,173.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(250,164,48,0.898)").s().p("A3hiQMAvDgHiIgDSaMgvAABLg");
	this.shape_412.setTransform(150.3,175.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(250,164,48,0.898)").s().p("A3ijVMAvFgFkIgEQPMgvBABkg");
	this.shape_413.setTransform(150.4,177);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(250,164,48,0.898)").s().p("A3ikZMAvFgDnIgFODMgvAAB9g");
	this.shape_414.setTransform(150.5,178.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(250,164,48,0.898)").s().p("A3jleMAvHgBoIgGL3MgvBACWg");
	this.shape_415.setTransform(150.6,180.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(250,164,48,0.898)").s().p("A3kmYMAvJAAXIgHJrMgvBACvg");
	this.shape_416.setTransform(150.7,181.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(250,164,48,0.898)").s().p("A3kmdMAvJACUIgIHfMgvBADIg");
	this.shape_417.setTransform(150.8,176.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmjMAvLAETIgJFTMgvBADhg");
	this.shape_418.setTransform(150.9,172.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmoMAvLAGQIgKDHMgvAAD6g");
	this.shape_419.setTransform(151,167.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmoMAvLAGOIgKDKMgvAAD5g");
	this.shape_420.setTransform(151,167.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmnMAvLAGMIgKDLMgvAAD4g");
	this.shape_421.setTransform(151,167.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmnMAvLAGJIgKDOMgvAAD4g");
	this.shape_422.setTransform(151,167.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmmMAvLAGGIgKDRMgvAAD2g");
	this.shape_423.setTransform(151,167.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmmMAvLAGFIgKDSMgvAAD2g");
	this.shape_424.setTransform(151,167.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmlMAvLAGCIgKDVMgvAAD1g");
	this.shape_425.setTransform(151,167.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmlMAvLAGAIgKDXMgvAAD0g");
	this.shape_426.setTransform(151,167.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmlMAvLAF+IgKDaMgvAADzg");
	this.shape_427.setTransform(151,167.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmkMAvLAF7IgKDcMgvAADyg");
	this.shape_428.setTransform(151,167.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmkMAvLAF5IgKDfMgvAADxg");
	this.shape_429.setTransform(151,167.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmjMAvLAF2IgKDhMgvAADwg");
	this.shape_430.setTransform(151,167);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmjMAvLAF0IgKDkMgvAADvg");
	this.shape_431.setTransform(151,167);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmiMAvLAFyIgKDlMgvAADug");
	this.shape_432.setTransform(151,167);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmiMAvLAFvIgKDoMgvAADug");
	this.shape_433.setTransform(151,166.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmhMAvLAFsIgKDrMgvAADtg");
	this.shape_434.setTransform(151,166.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmhMAvLAFrIgKDsMgvAADsg");
	this.shape_435.setTransform(151,166.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmgMAvLAFoIgKDvMgvAADrg");
	this.shape_436.setTransform(151,166.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmgMAvLAFmIgKDxMgvAADqg");
	this.shape_437.setTransform(151,166.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmgMAvLAFkIgKD0MgvAADpg");
	this.shape_438.setTransform(151,166.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmfMAvLAFhIgKD2MgvAADog");
	this.shape_439.setTransform(151,166.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmfMAvLAFfIgKD5MgvAADng");
	this.shape_440.setTransform(151,166.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmeMAvLAFcIgKD7MgvAADmg");
	this.shape_441.setTransform(151,166.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmeMAvLAFaIgKD9MgvAADmg");
	this.shape_442.setTransform(151,166.5);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmdMAvLAFXIgKEAMgvAADkg");
	this.shape_443.setTransform(151,166.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmdMAvLAFVIgKECMgvAADkg");
	this.shape_444.setTransform(151,166.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmcMAvLAFTIgKEEMgvAADjg");
	this.shape_445.setTransform(151,166.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmcMAvLAFRIgKEGMgvAADig");
	this.shape_446.setTransform(151,166.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmcMAvLAFPIgKEJMgvAADhg");
	this.shape_447.setTransform(151,166.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmbMAvLAFMIgKELMgvAADgg");
	this.shape_448.setTransform(151,166.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmbMAvLAFKIgKEOMgvAADfg");
	this.shape_449.setTransform(151,166.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmaMAvLAFHIgKEQMgvAADeg");
	this.shape_450.setTransform(151,166.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmaMAvLAFFIgKETMgvAADdg");
	this.shape_451.setTransform(151,166.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmZMAvLAFCIgKEVMgvAADcg");
	this.shape_452.setTransform(151,166.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmZMAvLAFBIgKEWMgvAADcg");
	this.shape_453.setTransform(151,166);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmYMAvLAE9IgKEaMgvAADbg");
	this.shape_454.setTransform(151,166);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmYMAvLAE7IgKEcMgvAADag");
	this.shape_455.setTransform(151,165.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmXMAvLAE5IgKEeMgvAADZg");
	this.shape_456.setTransform(151,165.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmXMAvLAE3IgKEgMgvAADYg");
	this.shape_457.setTransform(151,165.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmXMAvLAE1IgKEjMgvAADXg");
	this.shape_458.setTransform(151,165.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmWMAvLAEyIgKElMgvAADWg");
	this.shape_459.setTransform(151,165.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmWMAvLAEwIgKEoMgvAADVg");
	this.shape_460.setTransform(151,165.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmVMAvLAEtIgKEqMgvAADUg");
	this.shape_461.setTransform(151,165.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmVMAvLAErIgKEsMgvAADUg");
	this.shape_462.setTransform(151,165.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmUMAvLAEoIgKEvMgvAADSg");
	this.shape_463.setTransform(151,165.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmUMAvLAEmIgKExMgvAADSg");
	this.shape_464.setTransform(151,165.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmTMAvLAEjIgKE0MgvAADRg");
	this.shape_465.setTransform(151,165.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmTMAvLAEhIgKE2MgvAADQg");
	this.shape_466.setTransform(151,165.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmTMAvLAEfIgKE5MgvAADPg");
	this.shape_467.setTransform(151,165.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmSMAvLAEdIgKE6MgvAADOg");
	this.shape_468.setTransform(151,165.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmSMAvLAEbIgKE9MgvAADNg");
	this.shape_469.setTransform(151,165.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmRMAvLAEYIgKE/MgvAADMg");
	this.shape_470.setTransform(151,165.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmRMAvLAEWIgKFBMgvAADMg");
	this.shape_471.setTransform(151,165.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmQMAvLAETIgKFEMgvAADKg");
	this.shape_472.setTransform(151,165.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmQMAvLAERIgKFGMgvAADKg");
	this.shape_473.setTransform(151,165.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmPMAvLAEOIgKFJMgvAADJg");
	this.shape_474.setTransform(151,165.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmPMAvLAEMIgKFLMgvAADIg");
	this.shape_475.setTransform(151,165);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmPMAvLAEKIgKFOMgvAADHg");
	this.shape_476.setTransform(151,165);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmOMAvLAEHIgKFQMgvAADGg");
	this.shape_477.setTransform(151,164.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmOMAvLAEGIgKFSMgvAADFg");
	this.shape_478.setTransform(151,164.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmNMAvLAEDIgKFUMgvAADEg");
	this.shape_479.setTransform(151,164.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmNMAvLAEBIgKFXMgvAADDg");
	this.shape_480.setTransform(151,164.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmMMAvLAD9IgKFaMgvAADCg");
	this.shape_481.setTransform(151,164.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmMMAvLAD8IgKFbMgvAADCg");
	this.shape_482.setTransform(151,164.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmLMAvLAD5IgKFeMgvAADBg");
	this.shape_483.setTransform(151,164.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmLMAvLAD3IgKFgMgvAADAg");
	this.shape_484.setTransform(151,164.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmKMAvLAD0IgKFjMgvAAC/g");
	this.shape_485.setTransform(151,164.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmKMAvLADyIgKFlMgvAAC+g");
	this.shape_486.setTransform(151,164.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmKMAvLADwIgKFoMgvAAC9g");
	this.shape_487.setTransform(151,164.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmJMAvLADtIgKFqMgvAAC8g");
	this.shape_488.setTransform(151,164.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmJMAvLADsIgKFsMgvAAC7g");
	this.shape_489.setTransform(151,164.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmIMAvLADpIgKFuMgvAAC6g");
	this.shape_490.setTransform(151,164.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmIMAvLADnIgKFwMgvAAC6g");
	this.shape_491.setTransform(151,164.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmHMAvLADkIgKFzMgvAAC4g");
	this.shape_492.setTransform(151,164.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmHMAvLADiIgKF1MgvAAC4g");
	this.shape_493.setTransform(151,164.2);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmGMAvLADfIgKF4MgvAAC3g");
	this.shape_494.setTransform(151,164.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmGMAvLADdIgKF6MgvAAC2g");
	this.shape_495.setTransform(151,164.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmGMAvLADbIgKF9MgvAAC1g");
	this.shape_496.setTransform(151,164.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmFMAvLADYIgKF/MgvAAC0g");
	this.shape_497.setTransform(151,164);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmFMAvLADWIgKGCMgvAACzg");
	this.shape_498.setTransform(151,164);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmEMAvLADTIgKGEMgvAACyg");
	this.shape_499.setTransform(151,163.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmEMAvLADSIgKGGMgvAACxg");
	this.shape_500.setTransform(151,163.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmDMAvLADPIgKGIMgvAACwg");
	this.shape_501.setTransform(151,163.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmDMAvLADMIgKGLMgvAACwg");
	this.shape_502.setTransform(151,163.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmCMAvLADKIgKGNMgvAACvg");
	this.shape_503.setTransform(151,163.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmCMAvLADIIgKGPMgvAACug");
	this.shape_504.setTransform(151,163.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmBMAvLADFIgKGSMgvAACtg");
	this.shape_505.setTransform(151,163.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmBMAvLADDIgKGUMgvAACsg");
	this.shape_506.setTransform(151,163.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmBMAvLADBIgKGXMgvAACrg");
	this.shape_507.setTransform(151,163.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmAMAvLAC+IgKGZMgvAACqg");
	this.shape_508.setTransform(151,163.5);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmNMAvLADDIgKGrMgvAACtg");
	this.shape_509.setTransform(151,153.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmZMAvLADGIgKG+MgvAACvg");
	this.shape_510.setTransform(151,144.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmmMAvLADLIgKHQMgvAACyg");
	this.shape_511.setTransform(151,134.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmyMAvLADPIgKHiMgvAAC0g");
	this.shape_512.setTransform(151,125.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(250,164,48,0.898)").s().p("A3lm/MAvLADTIgKH1MgvAAC3g");
	this.shape_513.setTransform(151,115.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnLMAvLADXIgKIHMgvAAC5g");
	this.shape_514.setTransform(151,106);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnYMAvLADcIgKIZMgvAAC8g");
	this.shape_515.setTransform(151,96.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnkMAvLADfIgKIsMgvAAC+g");
	this.shape_516.setTransform(151,86.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnxMAvLADkIgKI+MgvAADBg");
	this.shape_517.setTransform(151,77.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln9MAvLADoIgKJQMgvAADDg");
	this.shape_518.setTransform(151,67.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(250,164,48,0.898)").s().p("A3loKMAvLADsIgKJjMgvAADGg");
	this.shape_519.setTransform(151,58.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(250,164,48,0.898)").s().p("A3loWMAvLADwIgKJ1MgvAADIg");
	this.shape_520.setTransform(151,48.5);
	this.shape_520._off = true;

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(250,164,48,0.898)").s().p("A3loUMAvLADtIgKJ1MgvAADHg");
	this.shape_521.setTransform(151,48.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(250,164,48,0.898)").s().p("A3loTMAvLADrIgKJ1MgvAADHg");
	this.shape_522.setTransform(151,48.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(250,164,48,0.898)").s().p("A3loTMAvLADpIgKJ1MgvAADIg");
	this.shape_523.setTransform(151,48.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(250,164,48,0.898)").s().p("A3loSMAvLADoIgKJ1MgvAADIg");
	this.shape_524.setTransform(151,48.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(250,164,48,0.898)").s().p("A3loRMAvLADmIgKJ1MgvAADIg");
	this.shape_525.setTransform(151,48.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(250,164,48,0.898)").s().p("A3loQMAvLADkIgKJ1MgvAADIg");
	this.shape_526.setTransform(151,48.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(250,164,48,0.898)").s().p("A3loPMAvLADiIgKJ1MgvAADIg");
	this.shape_527.setTransform(151,48.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(250,164,48,0.898)").s().p("A3loOMAvLADgIgKJ1MgvAADIg");
	this.shape_528.setTransform(151,48.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(250,164,48,0.898)").s().p("A3loNMAvLADeIgKJ1MgvAADIg");
	this.shape_529.setTransform(151,48.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(250,164,48,0.898)").s().p("A3loMMAvLADcIgKJ1MgvAADIg");
	this.shape_530.setTransform(151,48.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(250,164,48,0.898)").s().p("A3loLMAvLADaIgKJ1MgvAADIg");
	this.shape_531.setTransform(151,48.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(250,164,48,0.898)").s().p("A3loKMAvLADYIgKJ1MgvAADIg");
	this.shape_532.setTransform(151,48.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(250,164,48,0.898)").s().p("A3loJMAvLADWIgKJ1MgvAADIg");
	this.shape_533.setTransform(151,48.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(250,164,48,0.898)").s().p("A3loIMAvLADUIgKJ1MgvAADIg");
	this.shape_534.setTransform(151,48.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(250,164,48,0.898)").s().p("A3loHMAvLADSIgKJ1MgvAADIg");
	this.shape_535.setTransform(151,48);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(250,164,48,0.898)").s().p("A3loHMAvLADRIgKJ1MgvAADJg");
	this.shape_536.setTransform(151,48);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(250,164,48,0.898)").s().p("A3loFMAvLADPIgKJ1MgvAADIg");
	this.shape_537.setTransform(151,48);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(250,164,48,0.898)").s().p("A3loEMAvLADNIgKJ1MgvAADIg");
	this.shape_538.setTransform(151,48);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(250,164,48,0.898)").s().p("A3loEMAvLADMIgKJ1MgvAADIg");
	this.shape_539.setTransform(151,47.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(250,164,48,0.898)").s().p("A3loDMAvLADKIgKJ1MgvAADIg");
	this.shape_540.setTransform(151,47.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(250,164,48,0.898)").s().p("A3loCMAvLADIIgKJ1MgvAADIg");
	this.shape_541.setTransform(151,47.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(250,164,48,0.898)").s().p("A3loBMAvLADGIgKJ1MgvAADIg");
	this.shape_542.setTransform(151,47.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(250,164,48,0.898)").s().p("A3loAMAvLADEIgKJ1MgvAADIg");
	this.shape_543.setTransform(151,47.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln/MAvLADCIgKJ1MgvAADIg");
	this.shape_544.setTransform(151,47.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln+MAvLADAIgKJ1MgvAADIg");
	this.shape_545.setTransform(151,47.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln9MAvLAC+IgKJ1MgvAADIg");
	this.shape_546.setTransform(151,47.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln8MAvLAC8IgKJ1MgvAADIg");
	this.shape_547.setTransform(151,47.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln7MAvLAC6IgKJ1MgvAADIg");
	this.shape_548.setTransform(151,47.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln5MAvLAC3IgKJ1MgvAADHg");
	this.shape_549.setTransform(151,47.6);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln4MAvLAC1IgKJ1MgvAADHg");
	this.shape_550.setTransform(151,47.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln4MAvLACzIgKJ1MgvAADIg");
	this.shape_551.setTransform(151,47.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln3MAvLACyIgKJ1MgvAADIg");
	this.shape_552.setTransform(151,47.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln2MAvLACwIgKJ1MgvAADIg");
	this.shape_553.setTransform(151,47.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln1MAvLACuIgKJ1MgvAADIg");
	this.shape_554.setTransform(151,47.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("rgba(250,164,48,0.898)").s().p("A3ln0MAvLACsIgKJ1MgvAADIg");
	this.shape_555.setTransform(151,47.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnzMAvLACqIgKJ1MgvAADIg");
	this.shape_556.setTransform(151,47.4);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnyMAvLACoIgKJ1MgvAADIg");
	this.shape_557.setTransform(151,47.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnxMAvLACmIgKJ1MgvAADIg");
	this.shape_558.setTransform(151,47.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnwMAvLACkIgKJ1MgvAADIg");
	this.shape_559.setTransform(151,47.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnvMAvLACiIgKJ1MgvAADIg");
	this.shape_560.setTransform(151,47.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnuMAvLAChIgKJ1MgvAADIg");
	this.shape_561.setTransform(151,47.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnuMAvLACfIgKJ1MgvAADIg");
	this.shape_562.setTransform(151,47.2);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnsMAvLACcIgKJ2MgvAADHg");
	this.shape_563.setTransform(151,47.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnsMAvLACbIgKJ1MgvAADJg");
	this.shape_564.setTransform(151,47.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnrMAvLACaIgKJ1MgvAADIg");
	this.shape_565.setTransform(151,47.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnqMAvLACYIgKJ1MgvAADIg");
	this.shape_566.setTransform(151,47);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnpMAvLACWIgKJ1MgvAADIg");
	this.shape_567.setTransform(151,47);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnoMAvLACUIgKJ1MgvAADIg");
	this.shape_568.setTransform(151,47);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnnMAvLACSIgKJ1MgvAADIg");
	this.shape_569.setTransform(151,47);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnmMAvLACQIgKJ1MgvAADIg");
	this.shape_570.setTransform(151,46.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnlMAvLACOIgKJ1MgvAADIg");
	this.shape_571.setTransform(151,46.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnkMAvLACMIgKJ1MgvAADIg");
	this.shape_572.setTransform(151,46.9);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnjMAvLACKIgKJ1MgvAADIg");
	this.shape_573.setTransform(151,46.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(250,164,48,0.898)").s().p("A3lniMAvLACIIgKJ1MgvAADIg");
	this.shape_574.setTransform(151,46.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnhMAvLACGIgKJ1MgvAADIg");
	this.shape_575.setTransform(151,46.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(250,164,48,0.898)").s().p("A3lngMAvLACEIgKJ1MgvAADIg");
	this.shape_576.setTransform(151,46.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnfMAvLACCIgKJ1MgvAADIg");
	this.shape_577.setTransform(151,46.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(250,164,48,0.898)").s().p("A3lneMAvLACAIgKJ1MgvAADIg");
	this.shape_578.setTransform(151,46.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("rgba(250,164,48,0.898)").s().p("A3lndMAvLAB+IgKJ1MgvAADIg");
	this.shape_579.setTransform(151,46.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(250,164,48,0.898)").s().p("A3lncMAvLAB8IgKJ1MgvAADIg");
	this.shape_580.setTransform(151,46.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnbMAvLAB6IgKJ1MgvAADIg");
	this.shape_581.setTransform(151,46.6);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnaMAvLAB4IgKJ1MgvAADIg");
	this.shape_582.setTransform(151,46.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnZMAvLAB2IgKJ1MgvAADIg");
	this.shape_583.setTransform(151,46.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnYMAvLAB0IgKJ1MgvAADIg");
	this.shape_584.setTransform(151,46.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnXMAvLAByIgKJ1MgvAADIg");
	this.shape_585.setTransform(151,46.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnWMAvLABwIgKJ1MgvAADIg");
	this.shape_586.setTransform(151,46.4);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnVMAvLABuIgKJ1MgvAADIg");
	this.shape_587.setTransform(151,46.4);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnUMAvLABsIgKJ1MgvAADIg");
	this.shape_588.setTransform(151,46.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnTMAvLABrIgKJ1MgvAADIg");
	this.shape_589.setTransform(151,46.3);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnTMAvLABpIgKJ1MgvAADIg");
	this.shape_590.setTransform(151,46.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnRMAvLABmIgKJ2MgvAADHg");
	this.shape_591.setTransform(151,46.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnRMAvLABlIgKJ1MgvAADJg");
	this.shape_592.setTransform(151,46.2);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnQMAvLABkIgKJ1MgvAADIg");
	this.shape_593.setTransform(151,46.2);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnPMAvLABiIgKJ1MgvAADIg");
	this.shape_594.setTransform(151,46.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnOMAvLABgIgKJ1MgvAADIg");
	this.shape_595.setTransform(151,46.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnNMAvLABeIgKJ1MgvAADIg");
	this.shape_596.setTransform(151,46.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnMMAvLABcIgKJ1MgvAADIg");
	this.shape_597.setTransform(151,46.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnLMAvLABaIgKJ1MgvAADIg");
	this.shape_598.setTransform(151,46);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnKMAvLABYIgKJ1MgvAADIg");
	this.shape_599.setTransform(151,46);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnJMAvLABWIgKJ1MgvAADIg");
	this.shape_600.setTransform(151,46);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnIMAvLABUIgKJ1MgvAADIg");
	this.shape_601.setTransform(151,45.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnHMAvLABTIgKJ0MgvAADIg");
	this.shape_602.setTransform(151,45.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnHMAvLABRIgKJ1MgvAADJg");
	this.shape_603.setTransform(151,45.9);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnGMAvLABPIgKJ1MgvAADIg");
	this.shape_604.setTransform(151,45.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnFMAvLABOIgKJ1MgvAADIg");
	this.shape_605.setTransform(151,45.8);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnEMAvLABMIgKJ1MgvAADIg");
	this.shape_606.setTransform(151,45.8);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnDMAvLABKIgKJ1MgvAADIg");
	this.shape_607.setTransform(151,45.7);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnCMAvLABIIgKJ1MgvAADIg");
	this.shape_608.setTransform(151,45.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnBMAvLABGIgKJ1MgvAADIg");
	this.shape_609.setTransform(151,45.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(250,164,48,0.898)").s().p("A3lnAMAvLABEIgKJ1MgvAADIg");
	this.shape_610.setTransform(151,45.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(250,164,48,0.898)").s().p("A3lm/MAvLABCIgKJ1MgvAADIg");
	this.shape_611.setTransform(151,45.6);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("rgba(250,164,48,0.898)").s().p("A3lm+MAvLABAIgKJ1MgvAADIg");
	this.shape_612.setTransform(151,45.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("rgba(250,164,48,0.898)").s().p("A3lm9MAvLAA+IgKJ1MgvAADIg");
	this.shape_613.setTransform(151,45.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("rgba(250,164,48,0.898)").s().p("A3lm8MAvLAA8IgKJ1MgvAADIg");
	this.shape_614.setTransform(151,45.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("rgba(250,164,48,0.898)").s().p("A3lmqMAvLgACIgJKkMgvBAC0g");
	this.shape_615.setTransform(150.9,63.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("rgba(250,164,48,0.898)").s().p("A3kl6MAvJgA/IgILTMgvBACgg");
	this.shape_616.setTransform(150.8,77.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("rgba(250,164,48,0.898)").s().p("A3klJMAvJgB9IgHMBMgvBACNg");
	this.shape_617.setTransform(150.7,92.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("rgba(250,164,48,0.898)").s().p("A3jkYMAvHgC8IgGMxMgvBAB4g");
	this.shape_618.setTransform(150.6,107.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("rgba(250,164,48,0.898)").s().p("A3ijoMAvFgD6IgFNgMgvAABkg");
	this.shape_619.setTransform(150.5,121.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("rgba(250,164,48,0.898)").s().p("A3ii3MAvFgE4IgEOPMgvBABQg");
	this.shape_620.setTransform(150.4,136.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("rgba(250,164,48,0.898)").s().p("A3hiGMAvDgF2IgDO9MgvAAA8g");
	this.shape_621.setTransform(150.3,151.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("rgba(250,164,48,0.898)").s().p("A3hhWMAvDgG0IgCPtMgvBAAog");
	this.shape_622.setTransform(150.2,165.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("rgba(250,164,48,0.898)").s().p("A3gglMAvBgHyIgBQbMgvAAAUg");
	this.shape_623.setTransform(150.1,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_310}]}).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509,p:{y:153.9}}]},1).to({state:[{t:this.shape_510,p:{y:144.4}}]},1).to({state:[{t:this.shape_511,p:{y:134.8}}]},1).to({state:[{t:this.shape_512,p:{y:125.2}}]},1).to({state:[{t:this.shape_513,p:{y:115.6}}]},1).to({state:[{t:this.shape_514,p:{y:106}}]},1).to({state:[{t:this.shape_515,p:{y:96.4}}]},1).to({state:[{t:this.shape_516,p:{y:86.9}}]},1).to({state:[{t:this.shape_517,p:{y:77.3}}]},1).to({state:[{t:this.shape_518,p:{y:67.7}}]},1).to({state:[{t:this.shape_519,p:{y:58.1}}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509,p:{y:153.9}}]},1).to({state:[{t:this.shape_510,p:{y:144.4}}]},1).to({state:[{t:this.shape_511,p:{y:134.8}}]},1).to({state:[{t:this.shape_512,p:{y:125.2}}]},1).to({state:[{t:this.shape_513,p:{y:115.6}}]},1).to({state:[{t:this.shape_514,p:{y:106}}]},1).to({state:[{t:this.shape_515,p:{y:96.4}}]},1).to({state:[{t:this.shape_516,p:{y:86.9}}]},1).to({state:[{t:this.shape_517,p:{y:77.3}}]},1).to({state:[{t:this.shape_518,p:{y:67.7}}]},1).to({state:[{t:this.shape_519,p:{y:58.1}}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509,p:{y:153.4}}]},1).to({state:[{t:this.shape_510,p:{y:143.4}}]},1).to({state:[{t:this.shape_511,p:{y:133.3}}]},1).to({state:[{t:this.shape_512,p:{y:123.2}}]},1).to({state:[{t:this.shape_513,p:{y:113.1}}]},1).to({state:[{t:this.shape_514,p:{y:103}}]},1).to({state:[{t:this.shape_515,p:{y:92.9}}]},1).to({state:[{t:this.shape_516,p:{y:82.9}}]},1).to({state:[{t:this.shape_517,p:{y:72.8}}]},1).to({state:[{t:this.shape_518,p:{y:62.7}}]},1).to({state:[{t:this.shape_519,p:{y:52.6}}]},1).to({state:[{t:this.shape_520}]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.shape_310).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.shape_520).wait(210).to({_off:false},0).wait(1).to({_off:true},1).wait(316).to({_off:false},0).wait(1).to({_off:true},1).wait(316).to({_off:false,y:42.5},0).wait(37));

	// pc1-2
	this.instance_11 = new lib.pc12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,96,1,1,0,0,0,150,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({x:451},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:150},0).wait(79).to({x:451},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:150},0).wait(79).to({x:451},10,cjs.Ease.get(-1)).to({_off:true},1).wait(157));

	// pc3-2
	this.instance_12 = new lib.pc32();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).wait(228).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false,alpha:1},0).wait(228).to({alpha:0},10).to({_off:true},1).wait(79).to({_off:false,alpha:1},0).wait(168));

	// pc1-2
	this.instance_13 = new lib.pc12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,96,1,1,0,0,0,150,96);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(307).to({_off:false},0).to({_off:true},11).wait(307).to({_off:false},0).to({_off:true},11).wait(247));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102,125,349,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Kijenga_Kitchen_AdWords_300x250_atlas_.png", id:"Kijenga_Kitchen_AdWords_300x250_atlas_"},
		{src:"images/Kijenga_Kitchen_AdWords_300x250_atlas_2.png", id:"Kijenga_Kitchen_AdWords_300x250_atlas_2"},
		{src:"images/Kijenga_Kitchen_AdWords_300x250_atlas_3.png", id:"Kijenga_Kitchen_AdWords_300x250_atlas_3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;