(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Kijenga_AdWords_300x250_atlas_", frames: [[193,0,161,216],[179,322,127,64],[356,111,114,102],[356,0,108,109],[0,201,177,188],[0,0,191,199],[179,218,241,102]]}
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



(lib.blurmen = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ForFree = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Hands1 = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Hands2 = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.house1 = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.quote = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(6);
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIBFQAAgLAIAAQAJAAAAALQAAALgJAAQgIAAAAgLgAgCAlIgDhzIAMAAIgEBzg");
	this.shape.setTransform(150.8,68.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBOIhciKIgBAAIACAlIAABlIgLAAIAAibIALAAIBcCJIABAAIgBgkIAAhlIAKAAIAACbg");
	this.shape_1.setTransform(140.2,68.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_2.setTransform(123.9,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_3.setTransform(107.1,68);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIg0AAIAAgKIBxAAIAAAKIgzAAIAACRg");
	this.shape_4.setTransform(93,68.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA1BPIgVg4Ig/AAIgWA4IgMAAIA/idIAGAAIA+CdgAgFgqIgWA3IA3AAIgVg3IgHgTIgFATg");
	this.shape_5.setTransform(80.6,68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoBOIg8hSIgVASIAABAIgLAAIAAibIALAAIAABQIASgRIA8g/IAOAAIg/BCIBBBZg");
	this.shape_6.setTransform(68.8,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBLIAAgLQAQAHAaAAQATAAAMgJQALgJAAgOQgBgJgDgGQgEgGgJgFQgIgFgPgFQgZgHgIgKQgKgKABgQQAAgRANgLQAOgMAUAAQAXAAATAJIgEAJQgTgIgSAAQgRAAgKAIQgKAIAAAOQAAAJADAFQADAGAIAEQAGAFARAGQATAFAIAGQAKAGAEAIQAFAIgBAKQAAAUgOALQgPAMgXAAQgcAAgPgGg");
	this.shape_7.setTransform(55.3,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA1BPIgVg4Ig/AAIgWA4IgMAAIA/idIAGAAIA+CdgAgFgqIgWA3IA3AAIgVg3IgHgTIgFATg");
	this.shape_8.setTransform(42.7,68);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBLIAAgLQAQAHAaAAQATAAAMgJQALgJgBgOQAAgJgDgGQgEgGgJgFQgIgFgPgFQgZgHgIgKQgKgKABgQQAAgRANgLQAOgMAUAAQAXAAATAJIgEAJQgTgIgSAAQgRAAgKAIQgKAIAAAOQAAAJADAFQADAGAIAEQAGAFARAGQATAFAIAGQAKAGAEAIQAFAIgBAKQAAAUgOALQgPAMgXAAQgcAAgPgGg");
	this.shape_9.setTransform(30.1,68);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuBOIhciKIgBAAIACAlIAABlIgLAAIAAibIALAAIBcCJIABAAIgBgkIAAhlIAKAAIAACbg");
	this.shape_10.setTransform(10.4,68.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBOIAAibIAKAAIAACbg");
	this.shape_11.setTransform(-0.3,68.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjBWQgLgDgNgGIAAgpQANAHAOAEQAPADAMAAQAJAAAFgDQAFgEAAgFQAAgEgCgCQgCgDgEgDIgWgLQgRgHgJgIQgHgGgEgJQgFgJAAgNQAAgYARgNQASgNAdAAQAaAAAcAMIgOAkQgYgLgSAAQgHAAgEADQgFADAAAFQAAAFAFAEQAGAEAVALQAXAKAJAKQAIALAAASQAAAQgIAMQgIAMgQAHQgPAHgTAAQgRAAgMgCg");
	this.shape_12.setTransform(146.7,42.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_13.setTransform(133.4,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_14.setTransform(119.4,42.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag9BBQgVgWAAgrQgBgqAWgXQAVgWAoAAQApAAAVAWQAVAWAAArQAAArgVAXQgVAWgpAAQgnAAgWgXgAgiAAQAAAyAiAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQgiAAAAAxg");
	this.shape_15.setTransform(102.7,42.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BFQgTgSAAgiIAAhnIAuAAIAABkQAAASAHAIQAHAJAMAAQAOAAAHgJQAGgIAAgSIAAhkIAuAAIAABmQAAAigTATQgTASgjAAQgjAAgSgSg");
	this.shape_16.setTransform(84,42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcBrIgdgmQgpAAgVgXQgWgXAAgqQAAgqAWgXQAVgWApgBQAoABAVAWQAVAWAAArQAAA6glAUIAqAwgAgkgTQAAAyAjAAQAQAAAJgNQAIgMAAgZQAAgZgIgMQgJgNgQAAQgjAAAAAyg");
	this.shape_17.setTransform(65.6,44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_18.setTransform(43.4,42.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_19.setTransform(30.2,42.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA3AAQBFAAABAzQAAAegdAPIAxBLgAgagKIAIAAQAYAAAAgWQgBgSgWAAIgJAAg");
	this.shape_20.setTransform(16.3,42.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg3AAIAAAgIAyAAIAAAkIgyAAIAABBg");
	this.shape_21.setTransform(1,42.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjBWQgMgCgOgFIAAgnQAMAGAMADQAMADAJAAQAPAAAHgFQAGgEABgJQgBgHgEgEQgDgEgHgCQgIgCgNAAIgLAAIAAghIALAAQAjAAgBgSQABgHgGgDQgFgEgIAAQgQAAgSALIgTgfQAOgJAOgEQAOgEASAAQAaAAAPALQAPAKAAATQAAAQgKALQgJALgTAGIAAAAQArAFAAAjQAAAYgSANQgUAOggAAQgOAAgMgCg");
	this.shape_22.setTransform(-19.2,42.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFBPIAAiSIgzAAIAAgLIBxAAIAAALIg0AAIAACSg");
	this.shape_23.setTransform(147.7,16.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqBPIAAidIBVAAIAAALIhKAAIAAA7IBGAAIAAAJIhGAAIAABEIBKAAIAAAKg");
	this.shape_24.setTransform(136.3,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrA8QgUgVAAgnQAAgXAKgSQAJgTATgKQASgKAXAAQAaAAAUAKIgFAKQgUgKgWAAQgeAAgSATQgSATAAAgQAAAjARASQASASAgAAQAVAAAQgGIAAg3IgvAAIAAgKIA6AAIAABHQgXAKgdAAQgkAAgTgVg");
	this.shape_25.setTransform(121.7,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t31, new cjs.Rectangle(-28.3,-3,183.8,87.4), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBWQgLgDgNgGIAAgpQAOAHAOAEQAOADAMAAQAJAAAFgDQAFgEAAgFQAAgEgCgCQgCgDgEgDIgWgLQgRgHgJgIQgIgGgEgJQgEgJAAgNQAAgYASgNQARgNAdAAQAaAAAcAMIgOAkQgYgLgRAAQgIAAgFADQgEADAAAFQAAAFAFAEQAGAEAVALQAXAKAJAKQAIALAAASQAAAQgIAMQgIAMgQAHQgPAHgTAAQgRAAgMgCg");
	this.shape.setTransform(177,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBWIgjg/IgMAAIAAA/IgvAAIAAirIA5AAQBEAAAAAzQAAAegdAPIAzBLgAgagKIAIAAQAXAAAAgWQABgSgXAAIgJAAg");
	this.shape_1.setTransform(162.9,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BBQgXgWAAgrQABgqAVgXQAWgWAnAAQApAAAVAWQAWAWAAArQAAArgWAXQgVAWgpAAQgoAAgUgXgAghAAQAAAyAhAAQARAAAJgNQAJgMgBgZQABgZgJgMQgJgMgRAAQghAAAAAxg");
	this.shape_2.setTransform(144.1,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_3.setTransform(127.5,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBCQgVgXAAgqQAAgaAKgUQAKgUATgLQATgLAYAAQAcAAAZAMIgOAkIgTgHQgKgDgKAAQgQAAgJAOQgJANAAAXQAAAxAkAAQAMAAAKgDIAWgIIAAAoQgWAJgbAAQgmAAgUgWg");
	this.shape_4.setTransform(112.8,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgYIgFgWIgDAUg");
	this.shape_5.setTransform(96.1,45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA4AAQBFAAAAAzQgBAegdAPIAzBLgAgagKIAJAAQAWAAAAgWQAAgSgWAAIgJAAg");
	this.shape_6.setTransform(80.3,45.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_7.setTransform(64,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBWIg9h4IgBAAIABArIAABNIgoAAIAAirIA8AAIA9B2IABAAIgCgoIAAhOIAqAAIAACrg");
	this.shape_8.setTransform(46.9,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9BBQgWgWABgrQAAgqAVgXQAVgWAoAAQApAAAVAWQAWAWgBArQABArgWAXQgVAWgpAAQgnAAgWgXgAghAAQAAAyAhAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQghAAAAAxg");
	this.shape_9.setTransform(27.3,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBCQgVgXAAgqQAAgaAKgUQAKgUATgLQATgLAYAAQAcAAAZAMIgOAkIgTgHQgKgDgKAAQgQAAgJAOQgJANAAAXQAAAxAkAAQAMAAAKgDIAWgIIAAAoQgWAJgbAAQgmAAgUgWg");
	this.shape_10.setTransform(10.2,45.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_11.setTransform(177.6,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3BWIAAirIAuAAIAACFIBBAAIAAAmg");
	this.shape_12.setTransform(164.2,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBBWIAAirIA8AAQAhAAARALQARAKABAWQgBAOgHALQgHAKgMADIAAABQAQADAHAKQAHAKAAAQQAAAXgSANQgRAOgfAAgAgSAyIAQAAQAUAAAAgSQABgJgHgEQgGgFgJAAIgPAAgAgSgTIANAAQAJAAAFgEQAGgEAAgIQAAgPgVAAIgMAAg");
	this.shape_13.setTransform(149,19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgZIgFgVIgDAUg");
	this.shape_14.setTransform(131.8,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_15.setTransform(116,19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BFQgTgSAAghIAAhoIAuAAIAABjQAAATAHAIQAHAIAMAAQAOAAAHgIQAGgIAAgTIAAhjIAuAAIAABnQAAAhgTASQgTATgjAAQgjAAgSgSg");
	this.shape_16.setTransform(99.8,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BWIAAirIA7AAQAgAAAQAPQAQAOAAAaQAAAdgRAOQgRAQgeAAIgNAAIAAA5gAgPgIIAIAAQAKAAAGgGQAGgGAAgKQAAgRgSAAIgMAAg");
	this.shape_17.setTransform(83.7,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_18.setTransform(69.4,19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA3AAQBFAAABAzQAAAegdAPIAxBLgAgagKIAIAAQAYAAAAgWQgBgSgWAAIgJAAg");
	this.shape_19.setTransform(55.4,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(0,0,185.8,63.4), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBWIAAirIA8AAQAoAAAWAWQAXAVAAAnQAAAqgYAYQgYAXgpAAgAgZAwIAKAAQAUAAAKgMQAKgNAAgYQAAgXgKgMQgJgLgSAAIgNAAg");
	this.shape.setTransform(190.2,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBWIg+h4IgBAAIADArIAABNIgqAAIAAirIA9AAIA+B2IAAAAIgBgoIAAhOIAoAAIAACrg");
	this.shape_1.setTransform(171.1,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgYIgFgWIgDAUg");
	this.shape_2.setTransform(152.3,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBWIAAirIA8AAQAoAAAWAWQAXAVAAAnQAAAqgYAYQgYAXgpAAgAgZAwIAKAAQAUAAAKgMQAKgNAAgYQAAgXgKgMQgJgLgSAAIgNAAg");
	this.shape_3.setTransform(128.9,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_4.setTransform(113.6,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBWIAAirIAtAAIAACrg");
	this.shape_5.setTransform(102.5,45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg3AAIAAAgIAyAAIAAAkIgyAAIAABBg");
	this.shape_6.setTransform(92.3,45.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWBWIAAirIAtAAIAACrg");
	this.shape_7.setTransform(81.2,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_8.setTransform(69.9,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA3AAQBFAAABAzQAAAegdAPIAxBLgAgagKIAJAAQAXAAAAgWQAAgSgXAAIgJAAg");
	this.shape_9.setTransform(55.8,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_10.setTransform(40.3,45.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBCQgVgXAAgqQAAgaAKgUQAKgUATgLQATgLAYAAQAcAAAZAMIgOAkIgTgHQgKgDgKAAQgQAAgJAOQgJANAAAXQAAAxAkAAQAMAAAKgDIAWgIIAAAoQgWAJgbAAQgmAAgUgWg");
	this.shape_11.setTransform(25.9,45.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_12.setTransform(190.3,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIgzAAIAAgKIBvAAIAAAKIgyAAIAACRg");
	this.shape_13.setTransform(176.1,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7BOIAAibIArAAQAlAAATATQAUAUAAAlQAAAngVAUQgVAUgnAAgAgwBFIAaAAQBGAAAAhFQAAgigRgRQgRgRghAAIgdAAg");
	this.shape_14.setTransform(157.3,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAAA7IBGAAIAAAJIhGAAIAABDIBKAAIAAAKg");
	this.shape_15.setTransform(143.5,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuBOIAAhMIhbAAIAABMIgLAAIAAibIALAAIAABFIBbAAIAAhFIALAAIAACbg");
	this.shape_16.setTransform(129.1,19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmA8QgTgWAAgmQAAgXAJgSQAJgTARgKQARgKAWAAQAWAAATAJIgEAKQgSgJgSAAQgeAAgQATQgRATAAAgQAAAiAQASQAQATAdAAQATAAARgFIAAAJQgPAGgYAAQggAAgTgVg");
	this.shape_17.setTransform(114.7,19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFBOIAAiRIgyAAIAAgKIBvAAIAAAKIgyAAIAACRg");
	this.shape_18.setTransform(101.8,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA2BPIgWg4Ig/AAIgWA4IgMAAIA/idIAGAAIA+CdgAgFgqIgWA3IA3AAIgVg3IgGgTIgGATg");
	this.shape_19.setTransform(89.4,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA+BOIAAh1IABgbIgBAAIg6CQIgGAAIg7iQIgBAAIABAcIAAB0IgLAAIAAibIARAAIA3CIIABAAIA3iIIARAAIAACbg");
	this.shape_20.setTransform(73.3,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIgzAAIAAgKIBvAAIAAAKIgyAAIAACRg");
	this.shape_21.setTransform(52.4,19.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAAA7IBGAAIAAAJIhGAAIAABDIBKAAIAAAKg");
	this.shape_22.setTransform(41,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgsA8QgTgVAAgnQAAgXAJgSQALgTASgKQASgKAXAAQAZAAAVAKIgEAKQgVgKgWAAQgeAAgSATQgSATAAAgQAAAjARASQARASAhAAQAVAAAPgGIAAg3IguAAIAAgKIA6AAIAABHQgXAKgcAAQgkAAgVgVg");
	this.shape_23.setTransform(26.4,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(15.7,0,185,63.4), null);


(lib.t12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape.setTransform(96.8,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBCQgVgXAAgqQAAgaAKgUQAKgUATgLQATgLAYAAQAcAAAZAMIgOAkIgTgHQgKgDgKAAQgQAAgJAOQgJANAAAXQAAAxAkAAQAMAAAKgDIAWgIIAAAoQgWAJgbAAQgmAAgUgWg");
	this.shape_1.setTransform(82.2,42.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_2.setTransform(67.9,42.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBuIAAgkIAIACIAJABQALAAAFgHQAFgHAAgRIAAieIAtAAIAACaQAAAjgPASQgPASgeAAQgMAAgLgDg");
	this.shape_3.setTransform(54.9,45.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BBQgXgWAAgrQABgqAVgXQAWgWAnAAQApAAAVAWQAWAWgBArQABArgWAXQgVAWgpAAQgoAAgUgXgAghAAQAAAyAhAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQghAAAAAxg");
	this.shape_4.setTransform(43,42.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBWIgjg/IgMAAIAAA/IgvAAIAAirIA4AAQBGAAgBAzQAAAegcAPIAxBLgAgagKIAIAAQAYAAAAgWQAAgSgXAAIgJAAg");
	this.shape_5.setTransform(26.4,42.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BWIAAirIA7AAQAgAAAQAPQAQAOAAAaQAAAdgRAOQgRAQgeAAIgNAAIAAA5gAgPgIIAIAAQAKAAAGgGQAGgGAAgKQAAgRgSAAIgMAAg");
	this.shape_6.setTransform(10.1,42.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVBWIg+h4IgBAAIACArIAABNIgoAAIAAirIA8AAIA9B2IABAAIgCgoIAAhOIAqAAIAACrg");
	this.shape_7.setTransform(156.4,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9BBQgWgWABgrQAAgqAVgXQAVgWAoAAQApAAAVAWQAWAWgBArQABArgWAXQgVAWgpAAQgnAAgWgXgAgiAAQABAyAhAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQghAAgBAxg");
	this.shape_8.setTransform(136.8,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBWIAAirIAtAAIAACrg");
	this.shape_9.setTransform(123,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_10.setTransform(111.8,19.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgZIgFgVIgDAUg");
	this.shape_11.setTransform(95.9,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBWIg4irIA0AAIAXBWQAHAdAAAMIADgVIAFgTIAXhXIA0AAIg4Crg");
	this.shape_12.setTransform(78.9,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BBQgXgWAAgrQABgqAVgXQAWgWAnAAQApAAAVAWQAWAWgBArQABArgWAXQgVAWgpAAQgoAAgUgXgAghAAQAAAyAhAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQghAAAAAxg");
	this.shape_13.setTransform(61,19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVBWIg9h4IgBAAIABArIAABNIgpAAIAAirIA9AAIA9B2IABAAIgBgoIAAhOIApAAIAACrg");
	this.shape_14.setTransform(41.4,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_15.setTransform(25.2,19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA3AAQBFAAABAzQAAAegdAPIAxBLgAgagKIAJAAQAXAAAAgWQAAgSgXAAIgJAAg");
	this.shape_16.setTransform(11.2,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t12, new cjs.Rectangle(0,0,168.6,60.4), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAAA7IBGAAIAAAJIhGAAIAABDIBKAAIAAAKg");
	this.shape.setTransform(181.9,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA+BOIAAh2IABgaIgBAAIg6CQIgGAAIg7iQIgBAAIABAcIAAB0IgLAAIAAibIARAAIA3CIIABAAIA3iIIARAAIAACbg");
	this.shape_1.setTransform(165.8,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_2.setTransform(148,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBOIAAhMIhbAAIAABMIgLAAIAAibIALAAIAABFIBbAAIAAhFIALAAIAACbg");
	this.shape_3.setTransform(131.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnBOIgohEIgnAAIAABEIgLAAIAAibIAmAAQAcgBAOALQAOALAAAWQAAAQgJALQgIAJgRAFIArBHgAgoABIAeAAQATAAALgIQALgJAAgRQAAgTgLgHQgLgJgXABIgaAAg");
	this.shape_4.setTransform(112.4,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBBQgPgQAAgcIAAhjIAKAAIAABkQAAAWANANQANANAVAAQAXAAAMgNQANgMAAgWIAAhlIALAAIAABkQAAAbgQAQQgPAPgcAAQgbAAgPgPg");
	this.shape_5.setTransform(97.1,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_6.setTransform(80.8,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFBOIAAg7Ig0hgIAMAAIAtBUIAuhUIAMAAIg0BfIAAA8g");
	this.shape_7.setTransform(66.7,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBOIAAiRIg0AAIAAgKIBxAAIAAAKIgzAAIAACRg");
	this.shape_8.setTransform(49.4,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBLIAAgLQARAHAbAAQASAAALgJQALgJAAgOQAAgJgDgGQgEgGgIgFQgJgFgPgFQgYgHgKgKQgIgKgBgQQAAgRAOgLQAOgMAVAAQAWAAATAJIgDAJQgUgIgSAAQgQAAgLAIQgKAIAAAOQAAAJADAFQADAGAHAEQAIAFAQAGQATAFAJAGQAJAGAEAIQAEAIABAKQAAAUgPALQgOAMgXAAQgdAAgQgGg");
	this.shape_9.setTransform(37.7,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_10.setTransform(23.3,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBOIAAibIAmAAQA4AAgBAtQAAAXgPALQgQAMgbgBIgYAAIAABBgAgjAEIAVAAQAaAAAMgIQALgJABgTQgBgSgKgJQgMgIgWAAIgaAAg");
	this.shape_11.setTransform(9,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,189.7,34), null);


(lib.Quotepic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blurmen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Quotepic2, new cjs.Rectangle(0,0,161,216), null);


(lib.Quotepic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.quote();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Quotepic1, new cjs.Rectangle(0,0,241,102), null);


(lib.men = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.men, new cjs.Rectangle(0,0,191,199), null);


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


(lib.hands2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hands2, new cjs.Rectangle(0,0,108,109), null);


(lib.hands1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hands1, new cjs.Rectangle(0,0,114,102), null);


(lib.forfree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ForFree();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.forfree, new cjs.Rectangle(0,0,127,64), null);


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


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.house1();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-94,177,188);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.house1();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-94,177,188);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.house1();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-94,177,188);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.house1();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-94,177,188);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btnanim();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,60.6,14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAfAAQAXAAANANQAOANAAAXQAAAYgOANQgOANgZAAgAgXAlIALAAQAjAAAAglQAAgjgggBIgOAAg");
	this.shape.setTransform(42.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAAMIglAAIAAAgIAnAAIAAAOg");
	this.shape_1.setTransform(33.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAyIAAgtIgtAAIAAAtIgRAAIAAhjIARAAIAAApIAtAAIAAgpIAQAAIAABjg");
	this.shape_2.setTransform(24.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAmQgMgNAAgZQAAgOAGgMQAFgMALgGQALgGAOAAQAPAAANAGIgGANIgLgDQgFgDgHAAQgNABgIAJQgIALAAAQQAAASAIAKQAIAKANAAQAHAAAGgCIAMgDIAAAOQgMAFgPgBQgUAAgMgNg");
	this.shape_3.setTransform(15,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgdAAIAAgOIBJAAIAAAOIgdAAIAABVg");
	this.shape_4.setTransform(6.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAyIgKgcIglAAIgKAcIgRAAIAlhjIARAAIAlBjgAgEgRIgJAZIAcAAIgKgaIgDgIIgCgJQgBAIgDAKg");
	this.shape_5.setTransform(-2.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkAyIAAgxIABgTIAAgOIAAAAIgeBSIgOAAIgdhSIAAAAIABAiIAAAwIgQAAIAAhjIAYAAIAbBPIAAAAIAchPIAYAAIAABjg");
	this.shape_6.setTransform(-13.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAyIAAhVIgdAAIAAgOIBKAAIAAAOIgeAAIAABVg");
	this.shape_7.setTransform(-27.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAAMIglAAIAAAgIAnAAIAAAOg");
	this.shape_8.setTransform(-34.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAmQgMgNAAgZQAAgXANgOQAOgOAYABQAPAAAOAFIgFAOQgNgGgMAAQgPABgJAJQgJALAAAQQAAASAIAKQAIAKAPAAQAIAAAJgDIAAgZIgVAAIAAgNIAlAAIAAAxQgJADgIABQgJACgJgBQgWAAgMgNg");
	this.shape_9.setTransform(-44.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApeiUIS9AAIAAEpIy9AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-15.9,123.4,31.8);


// stage content:
(lib.Kijenga_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_869 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(869).call(this.frame_869).wait(14));

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(219.7,272.8,1.09,1.09);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.yellowbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.8,272.9,1,1,0,0,0,66.2,16.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210).to({_off:false},0).to({y:222.8},11,cjs.Ease.get(1)).wait(76).to({y:272.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(220).to({_off:false},0).to({y:222.8},11,cjs.Ease.get(1)).wait(76).to({y:272.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(257));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(846).to({_off:false},0).to({y:223.9},11,cjs.Ease.get(1)).wait(26));

	// t3-1
	this.instance_2 = new lib.t31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.3,41,1,1,0,0,0,75.7,34.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({x:211.3,alpha:1},11,cjs.Ease.get(1)).wait(97).to({y:-29},10,cjs.Ease.get(-1)).to({_off:true},1).wait(199).to({_off:false,x:241.3,y:41,alpha:0},0).to({x:211.3,alpha:1},11,cjs.Ease.get(1)).wait(97).to({y:-29},10,cjs.Ease.get(-1)).to({_off:true},1).wait(199).to({_off:false,x:241.3,y:41,alpha:0},0).to({x:211.3,alpha:1},11,cjs.Ease.get(1)).wait(37));

	// Logo
	this.instance_3 = new lib.Logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(204,225,0.944,0.944,0,0,0,80.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({y:265},10,cjs.Ease.get(-1)).to({_off:true},1).wait(87).to({_off:false,regY:13.5,scaleX:0.75,scaleY:0.75,x:78.7,y:284.4},0).to({y:224.4},11,cjs.Ease.get(1)).wait(109).to({regY:13.4,scaleX:0.94,scaleY:0.94,x:204,y:225},10,cjs.Ease.get(-1)).wait(90).to({y:265},10,cjs.Ease.get(-1)).to({_off:true},1).wait(87).to({_off:false,regY:13.5,scaleX:0.75,scaleY:0.75,x:78.7,y:284.4},0).to({y:224.4},11,cjs.Ease.get(1)).wait(109).to({regY:13.4,scaleX:0.94,scaleY:0.94,x:204,y:225},10,cjs.Ease.get(-1)).wait(90).to({y:265},10,cjs.Ease.get(-1)).to({_off:true},1).wait(87).to({_off:false,regY:13.5,scaleX:0.75,scaleY:0.75,x:78.7,y:284.4},0).to({y:224.4},11,cjs.Ease.get(1)).wait(49));

	// FIND
	this.instance_4 = new lib.t22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(244.7,93.4,1,1,0,0,0,92.9,32.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({x:194.7,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:244.7},0).to({x:194.7,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:244.7},0).to({x:194.7,alpha:1},10,cjs.Ease.get(1)).wait(68).to({x:234.7,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(48));

	// FIND
	this.instance_5 = new lib.t21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(217.3,41.4,1,1,0,0,0,100.3,32.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({x:187.3,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:217.3},0).to({x:187.3,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(229).to({_off:false,x:217.3},0).to({x:187.3,alpha:1},10,cjs.Ease.get(1)).wait(67).to({x:227.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// FOR YOUR HOME!
	this.instance_6 = new lib.hands2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(245,305.7,1,1,0,0,0,54,54.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).to({y:195.7},10,cjs.Ease.get(1)).wait(80).to({y:305.7},11,cjs.Ease.get(-1)).to({_off:true},1).wait(216).to({_off:false},0).to({y:195.7},10,cjs.Ease.get(1)).wait(80).to({y:305.7},11,cjs.Ease.get(-1)).to({_off:true},1).wait(216).to({_off:false},0).to({y:195.7},10,cjs.Ease.get(1)).wait(80).to({y:305.7},11,cjs.Ease.get(-1)).to({_off:true},1).wait(36));

	// man
	this.instance_7 = new lib.men();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-103.5,141.5,1,1,0,0,0,95.5,99.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({x:96.5},10,cjs.Ease.get(1)).wait(77).to({x:-103.5},11,cjs.Ease.get(-1)).to({_off:true},1).wait(219).to({_off:false},0).to({x:96.5},10,cjs.Ease.get(1)).wait(77).to({x:-103.5},11,cjs.Ease.get(-1)).to({_off:true},1).wait(219).to({_off:false},0).to({x:96.5},10,cjs.Ease.get(1)).wait(77).to({x:-103.5},11,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// forfree
	this.instance_8 = new lib.forfree();
	this.instance_8.parent = this;
	this.instance_8.setTransform(71.6,114.2,1.299,1.299,0,0,0,63.5,32);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,x:71.5,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:-68.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(238).to({_off:false,scaleX:1.3,scaleY:1.3,x:71.6,alpha:0},0).to({scaleX:1,scaleY:1,x:71.5,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:-68.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(238).to({_off:false,scaleX:1.3,scaleY:1.3,x:71.6,alpha:0},0).to({scaleX:1,scaleY:1,x:71.5,alpha:1},10,cjs.Ease.get(1)).wait(59).to({x:-68.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// t1-2
	this.instance_9 = new lib.t12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(37.3,58.5,1,1,0,0,0,84.3,30.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({x:96.3,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:166.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:37.3},0).to({x:96.3,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:166.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,x:37.3},0).to({x:96.3,alpha:1},10,cjs.Ease.get(1)).wait(69).to({x:166.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// t1-1
	this.instance_10 = new lib.t11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(46.9,23.1,1,1,0,0,0,94.9,16.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:106.9,alpha:1},10,cjs.Ease.get(1)).wait(79).to({x:176.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,x:46.9},0).to({x:106.9,alpha:1},10,cjs.Ease.get(1)).wait(79).to({x:176.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,x:46.9},0).to({x:106.9,alpha:1},10,cjs.Ease.get(1)).wait(79).to({x:176.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// hands1
	this.instance_11 = new lib.hands1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(57,307,1,1,0,0,0,57,51);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({y:199},10,cjs.Ease.get(1)).wait(69).to({y:309},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,y:307},0).to({y:199},10,cjs.Ease.get(1)).wait(69).to({y:309},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false,y:307},0).to({y:199},10,cjs.Ease.get(1)).wait(69).to({y:309},10,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// plate
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0695D0").s().p("A3bEXIAAotMAu3AAAIAAItg");
	this.shape.setTransform(150,222.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(883));

	// Quote-pic2
	this.instance_12 = new lib.Quotepic1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(178.5,247,1,1,0,0,0,120.5,51);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(210).to({_off:false},0).to({y:144},11,cjs.Ease.get(1)).wait(86).to({y:254},10,cjs.Ease.get(-1)).to({_off:true},1).wait(210).to({_off:false,y:247},0).to({y:144},11,cjs.Ease.get(1)).wait(86).to({y:254},10,cjs.Ease.get(-1)).to({_off:true},1).wait(210).to({_off:false,y:247},0).to({y:144},11,cjs.Ease.get(1)).wait(26));

	// Quote-pic1
	this.instance_13 = new lib.Quotepic2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-78.5,97,1,1,0,0,0,80.5,108);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(199).to({_off:false},0).to({x:61.5},11,cjs.Ease.get(1)).wait(87).to({x:-78.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(209).to({_off:false},0).to({x:61.5},11,cjs.Ease.get(1)).wait(87).to({x:-78.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(209).to({_off:false},0).to({x:61.5},11,cjs.Ease.get(1)).wait(37));

	// house
	this.instance_14 = new lib.Анимация1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(322.5,217);

	this.instance_15 = new lib.Анимация2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(212.5,107);

	this.instance_16 = new lib.Анимация3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(212.5,107);
	this.instance_16._off = true;

	this.instance_17 = new lib.Анимация4("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(392.5,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},79).to({state:[{t:this.instance_17}]},10).to({state:[]},1).to({state:[{t:this.instance_14}]},218).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},79).to({state:[{t:this.instance_17}]},10).to({state:[]},1).to({state:[{t:this.instance_14}]},218).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},79).to({state:[{t:this.instance_17}]},10).to({state:[]},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:212.5,y:107},10,cjs.Ease.get(1)).wait(308).to({_off:false,x:322.5,y:217},0).to({_off:true,x:212.5,y:107},10,cjs.Ease.get(1)).wait(308).to({_off:false,x:322.5,y:217},0).to({_off:true,x:212.5,y:107},10,cjs.Ease.get(1)).wait(237));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(89).to({_off:false},0).to({_off:true,x:392.5},10,cjs.Ease.get(-1)).wait(308).to({_off:false,x:212.5},0).to({_off:true,x:392.5},10,cjs.Ease.get(-1)).wait(308).to({_off:false,x:212.5},0).to({_off:true,x:392.5},10,cjs.Ease.get(-1)).wait(148));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F48F03","#FFBE57"],[0,1],-150,0,150,0).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F48F03","#FFBE57"],[0,1],-135,-15,135,15).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F48F03","#FFBE57"],[0,1],-120,-30,120,30).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_3.setTransform(150,125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F48F03","#FFBE57"],[0,1],-105,-45,105,45).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F48F03","#FFBE57"],[0,1],-90,-60,90,60).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F48F03","#FFBE57"],[0,1],-75,-75,75,75).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F48F03","#FFBE57"],[0,1],-60,-90,60,90).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F48F03","#FFBE57"],[0,1],-45,-105,45,105).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F48F03","#FFBE57"],[0,1],-30,-120,30,120).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F48F03","#FFBE57"],[0,1],-15,-135,15,135).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F48F03","#FFBE57"],[0,1],0,-150,0,150).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F48F03","#FFBE57"],[0,1],15.7,-141.3,-15.7,141.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F48F03","#FFBE57"],[0,1],31.5,-132.6,-31.4,132.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F48F03","#FFBE57"],[0,1],47.2,-124,-47.1,124).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_14.setTransform(150,125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F48F03","#FFBE57"],[0,1],62.9,-115.3,-62.8,115.4).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_15.setTransform(150,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F48F03","#FFBE57"],[0,1],78.6,-106.6,-78.5,106.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_16.setTransform(150,125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F48F03","#FFBE57"],[0,1],94.3,-98,-94.3,98).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F48F03","#FFBE57"],[0,1],110,-89.4,-110,89.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_18.setTransform(150,125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F48F03","#FFBE57"],[0,1],125.7,-80.7,-125.7,80.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_19.setTransform(150,125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F48F03","#FFBE57"],[0,1],141.4,-72,-141.4,72).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_20.setTransform(150,125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F48F03","#FFBE57"],[0,1],157.1,-63.4,-157.2,63.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_21.setTransform(150,125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F48F03","#FFBE57"],[0,1],172.8,-54.7,-172.9,54.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_22.setTransform(150,125);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F48F03","#FFBE57"],[0,1],143.5,-49.7,-143.5,49.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_23.setTransform(150,125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F48F03","#FFBE57"],[0,1],114.1,-44.8,-114.2,44.7).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_24.setTransform(150,125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F48F03","#FFBE57"],[0,1],84.8,-39.8,-84.8,39.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_25.setTransform(150,125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F48F03","#FFBE57"],[0,1],55.4,-34.8,-55.5,34.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_26.setTransform(150,125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F48F03","#FFBE57"],[0,1],26.1,-29.9,-26.1,29.8).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_27.setTransform(150,125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F48F03","#FFBE57"],[0,1],-3.2,-24.8,3.3,24.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_28.setTransform(150,125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F48F03","#FFBE57"],[0,1],-32.6,-19.8,32.6,19.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_29.setTransform(150,125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F48F03","#FFBE57"],[0,1],-61.9,-14.9,62,14.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_30.setTransform(150,125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F48F03","#FFBE57"],[0,1],-91.3,-9.9,91.3,10).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_31.setTransform(150,125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F48F03","#FFBE57"],[0,1],-120.6,-4.9,120.7,5).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_32.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},89).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},197).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},89).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},197).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},89).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(89).to({_off:true},1).wait(228).to({_off:false},0).wait(89).to({_off:true},1).wait(228).to({_off:false},0).wait(89).to({_off:true},1).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(110).to({_off:false},0).wait(197).to({_off:true},1).wait(120).to({_off:false},0).wait(197).to({_off:true},1).wait(120).to({_off:false},0).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102,125,459,311);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Kijenga_AdWords_300x250_atlas_.png", id:"Kijenga_AdWords_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;