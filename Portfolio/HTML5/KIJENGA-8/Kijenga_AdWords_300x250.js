(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Kijenga_AdWords_300x250_atlas_", frames: [[0,0,624,231],[626,0,148,235]]}
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



(lib.bgpc = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.women = function() {
	this.spriteSheet = ss["Kijenga_AdWords_300x250_atlas_"];
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


(lib.women_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.women();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.women_1, new cjs.Rectangle(0,0,148,235), null);


(lib.t23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AgIBFQAAgLAIAAQAJAAAAALQAAALgJgBQgIABAAgLgAgCAlIgDhzIAMAAIgEBzg");
	this.shape.setTransform(68.4,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414141").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAAA7IBGAAIAAAJIhGAAIAABDIBKAAIAAAKg");
	this.shape_1.setTransform(60.1,39.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414141").s().p("AA+BOIAAh2IABgaIgBAAIg6CQIgGAAIg7iQIgBAAIABAcIAAB0IgLAAIAAibIARAAIA3CIIABAAIA3iIIARAAIAACbg");
	this.shape_2.setTransform(44.1,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414141").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_3.setTransform(26.2,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414141").s().p("AAuBOIAAhMIhbAAIAABMIgLAAIAAibIALAAIAABFIBbAAIAAhFIALAAIAACbg");
	this.shape_4.setTransform(9.9,39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414141").s().p("AAnBOIgohEIgnAAIAABEIgLAAIAAibIAmAAQAcgBAOALQAOALAAAWQAAAQgJALQgIAJgRAFIArBHgAgoABIAeAAQATAAALgIQALgJAAgRQAAgTgLgHQgLgJgXABIgaAAg");
	this.shape_5.setTransform(100.2,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414141").s().p("AgqBBQgPgQAAgcIAAhjIAKAAIAABkQABAWAMANQANANAVAAQAXAAAMgNQANgMAAgWIAAhlIALAAIAABkQAAAbgQAQQgQAPgbAAQgbAAgPgPg");
	this.shape_6.setTransform(84.9,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414141").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_7.setTransform(68.6,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414141").s().p("AgFBOIAAg7Ig0hgIANAAIAtBUIAthUIAMAAIg0BfIAAA8g");
	this.shape_8.setTransform(54.4,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414141").s().p("AAnBOIgohEIgnAAIAABEIgLAAIAAibIAmAAQAcgBAOALQAOALAAAWQAAAQgJALQgIAJgRAFIArBHgAgoABIAeAAQATAAALgIQALgJAAgRQAAgTgLgHQgLgJgXABIgaAAg");
	this.shape_9.setTransform(37.3,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414141").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_10.setTransform(21.5,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414141").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAABCIBGAAIAAAKIhGAAIAABFg");
	this.shape_11.setTransform(8.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t23, new cjs.Rectangle(0,0,108,55.9), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDA539").s().p("Ah4CoIAAhJQAlARAaAHQAaAHAWAAQAZAAAOgKQAOgKAAgUQAAgLgGgIQgGgJgMgHQgMgIgkgSQghgPgRgOQgSgPgJgUQgLgTAAgaQAAgxAigcQAhgdA6AAQAdAAAbAHQAaAHAdAMIgaA9QgegLgTgGQgTgEgUAAQgVAAgMAKQgMALAAAQQAAAKAFAJQAFAHAKAIQALAGAnATQA0AZATAZQATAZAAAkQAAAygkAdQgkAdhAAAQg7AAgugXg");
	this.shape.setTransform(125.6,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDA539").s().p("AiCCOQgugyAAhcQAAhcAugxQAugxBVAAQBWAAAtAxQAtAxAABcQAABcguAyQgtAxhWAAQhUAAgugxgAhFhdQgYAgAAA9QAAA+AYAgQAXAfAuAAQBeAAAAh9QAAh9hdAAQgvAAgXAgg");
	this.shape_1.setTransform(90.3,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDA539").s().p("AA9C6IhYiPIgqAAIAACPIhOAAIAAlzIBsAAQBLAAAkAcQAkAbAAA4QAAAhgSAaQgSAYghAPQBUB9AZAlgAhFgUIAaAAQAlAAARgMQASgNAAgaQAAgbgSgLQgSgLgmAAIgYAAg");
	this.shape_2.setTransform(54.8,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDA539").s().p("Ah/C6IAAlzIB2AAQBDAAAjAdQAjAdAAA6QAAA8glAfQgmAghEAAIgiAAIAACEgAgxgKIAaAAQAkAAASgOQASgPAAgbQAAgcgPgNQgQgNgfAAIgkAAg");
	this.shape_3.setTransform(20.1,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDA539").s().p("AgWBvIAAi2Ig9AAIAAgnICnAAIAAAnIg9AAIAAC2g");
	this.shape_4.setTransform(134.9,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDA539").s().p("AhIBlIAAgsQAXALAQAEQAPADANAAQAOAAAJgFQAJgHgBgLQAAgGgDgFQgEgGgHgFQgHgEgVgKQgVgKgKgIQgKgJgGgMQgGgMAAgPQAAgeAUgRQAUgRAjAAQARAAAQAFQAQADAQAIIgOAlQgTgIgLgDQgMgCgLAAQgNgBgGAHQgIAGAAAKQAAAHADAEQADAFAGAEQAHAEAWAMQAfAPAMAOQAMAPgBAWQAAAegVARQgWASgmAAQgjAAgcgOg");
	this.shape_5.setTransform(117.4,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDA539").s().p("Ag/BvIAAjdIB/AAIAAAmIhQAAIAAAxIBLAAIAAAmIhLAAIAAA5IBQAAIAAAng");
	this.shape_6.setTransform(100.4,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDA539").s().p("AhSBvIAAjdIBGAAQAuAAAWANQAVAOAAAdQAAAUgJANQgKANgPACIAAABQAVAFAJAMQAKANAAAWQAAAegWASQgWAQgmAAgAgiBIIAeAAQATAAAJgHQAKgIAAgPQAAgbgnAAIgdAAgAgigWIAbAAQASAAAJgGQAIgGAAgOQAAgMgJgGQgJgFgUgBIgYAAg");
	this.shape_7.setTransform(81.2,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDA539").s().p("Ag/BvIAAjdIB/AAIAAAmIhQAAIAAAxIBLAAIAAAmIhLAAIAAA5IBQAAIAAAng");
	this.shape_8.setTransform(53.8,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDA539").s().p("AAsBvIAAhfIhXAAIAABfIgwAAIAAjdIAwAAIAABXIBXAAIAAhXIAvAAIAADdg");
	this.shape_9.setTransform(32.7,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDA539").s().p("AgXBvIAAi2Ig8AAIAAgnICnAAIAAAnIg8AAIAAC2g");
	this.shape_10.setTransform(11.7,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(0,0,146.8,97.8), null);


(lib.t21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("Ag7BOIAAibIArAAQAlgBATAUQAUAUAAAlQAAAngVAUQgVAVgngBgAgwBFIAaAAQBGAAAAhFQAAgigRgRQgRgRghAAIgdAAg");
	this.shape.setTransform(42.6,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414141").s().p("AAuBOIhciKIgBAAIACAmIAABkIgLAAIAAibIALAAIBcCJIABAAIgBgkIAAhlIAKAAIAACbg");
	this.shape_1.setTransform(26.5,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414141").s().p("AgFBOIAAibIALAAIAACbg");
	this.shape_2.setTransform(15.8,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414141").s().p("AgqBOIAAibIBVAAIAAAKIhKAAIAABCIBGAAIAAAKIhGAAIAABFg");
	this.shape_3.setTransform(8.5,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t21, new cjs.Rectangle(0,0,52.2,34), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AgQBGQAAgKAIAAQAIAAAAAKQAAALgIAAQgIAAAAgLgAgNAmIAAgEQAAgNAEgIQAEgJAKgIIAKgJQAIgGADgHQADgGAAgJQAAgNgJgIQgJgIgNAAQgJAAgHACQgIABgIAFIgEgJQAMgFAIgCQAIgCAIAAQATAAALALQALALAAASQAAAHgCAGQgBAFgEAFIgIAJIgLAIQgHAGgEAFQgDAFgBAFQgCAFAAALIAAABg");
	this.shape.setTransform(59,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414141").s().p("AAuBOIAAhMIhbAAIAABMIgLAAIAAibIALAAIAABFIBbAAIAAhFIALAAIAACbg");
	this.shape_1.setTransform(46.6,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414141").s().p("AgFBOIAAiRIgzAAIAAgKIBxAAIAAAKIg0AAIAACRg");
	this.shape_2.setTransform(33,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414141").s().p("AgEBOIAAibIAJAAIAACbg");
	this.shape_3.setTransform(24.4,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414141").s().p("AAoBOIgih3IgGgZIgFAWIgiB6IgKAAIgribIAMAAIAbBjIADAMIADAKIACAIIABAJIALgtIAbhdIALAAIAgBsIAIAeIADgQIAhh6IAMAAIgsCbg");
	this.shape_4.setTransform(11.8,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0,0,66,34), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0695D0").s().p("AAVBWIg+h4IgBAAIACArIAABNIgoAAIAAirIA8AAIA9B2IABAAIgCgoIAAhOIAqAAIAACrg");
	this.shape.setTransform(156.4,66.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0695D0").s().p("Ag9BBQgWgWABgrQAAgqAVgXQAVgWAoAAQApAAAVAWQAWAWgBArQABArgWAXQgVAWgpAAQgnAAgWgXgAgiAAQABAyAhAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQghAAgBAxg");
	this.shape_1.setTransform(136.8,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0695D0").s().p("AgWBWIAAirIAtAAIAACrg");
	this.shape_2.setTransform(123,66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0695D0").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_3.setTransform(111.8,66.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0695D0").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgYIgFgWIgDAUg");
	this.shape_4.setTransform(95.9,66.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0695D0").s().p("AgaBWIg4irIA0AAIAXBWQAHAdAAAMIADgVIAFgTIAXhXIA0AAIg4Crg");
	this.shape_5.setTransform(78.9,66.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0695D0").s().p("Ag8BBQgXgWAAgrQABgqAVgXQAWgWAnAAQApAAAVAWQAWAWgBArQABArgWAXQgVAWgpAAQgoAAgUgXgAghAAQAAAyAhAAQASAAAIgNQAJgMAAgZQAAgZgJgMQgIgMgSAAQghAAAAAxg");
	this.shape_6.setTransform(61,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0695D0").s().p("AAVBWIg9h4IgBAAIABArIAABNIgpAAIAAirIA9AAIA9B2IABAAIgBgoIAAhOIApAAIAACrg");
	this.shape_7.setTransform(41.4,66.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0695D0").s().p("AgyBWIAAirIBlAAIAAAmIg2AAIAAAbIAyAAIAAAkIgyAAIAAAgIA2AAIAAAmg");
	this.shape_8.setTransform(25.2,66.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0695D0").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA3AAQBFAAABAzQAAAegdAPIAxBLgAgagKIAJAAQAXAAAAgWQAAgSgXAAIgJAAg");
	this.shape_9.setTransform(11.2,66.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0695D0").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_10.setTransform(110.4,42.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0695D0").s().p("AAVBWIgkg/IgLAAIAAA/IguAAIAAirIA3AAQBFAAABAzQAAAegdAPIAxBLgAgagKIAJAAQAXAAAAgWQAAgSgXAAIgJAAg");
	this.shape_11.setTransform(96.3,42.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0695D0").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgZIgFgVIgDAUg");
	this.shape_12.setTransform(78.3,42.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0695D0").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_13.setTransform(62.5,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0695D0").s().p("AgjBWQgMgDgMgGIAAgpQANAHAPAEQAOADAMAAQAJAAAFgDQAFgEAAgFQAAgEgCgCQgCgDgFgDIgVgLQgRgHgIgIQgIgGgFgJQgEgJAAgNQAAgYASgNQAQgNAeAAQAbAAAbAMIgOAkQgYgLgSAAQgIAAgDADQgFADAAAFQAAAFAGAEQAEAEAXALQAWAKAIAKQAJALAAASQAAAQgIAMQgIAMgPAHQgPAHgUAAQgRAAgMgCg");
	this.shape_14.setTransform(48.6,42.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0695D0").s().p("Ag8BBQgXgWAAgrQABgqAVgXQAWgWAnAAQApAAAVAWQAWAWAAArQAAArgWAXQgVAWgpAAQgoAAgUgXgAghAAQAAAyAhAAQARAAAJgNQAJgMgBgZQABgZgJgMQgJgMgRAAQghAAAAAxg");
	this.shape_15.setTransform(25.8,42.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0695D0").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_16.setTransform(9.1,42.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0695D0").s().p("AgWBWIAAiFIgqAAIAAgmICBAAIAAAmIgqAAIAACFg");
	this.shape_17.setTransform(69.9,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0695D0").s().p("AAkBWIgIggIg3AAIgIAgIgzAAIA4irIA8AAIA5CrgAgDglIgOA1IAjAAIgHgbIgGgZIgFgVIgDAUg");
	this.shape_18.setTransform(54.1,19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0695D0").s().p("AAbBWIAAhGIg1AAIAABGIgvAAIAAirIAvAAIAABAIA1AAIAAhAIAuAAIAACrg");
	this.shape_19.setTransform(36.2,19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0695D0").s().p("AAZBWIgRhLIgDgSIgFgXIgBATIgFAUIgRBNIg3AAIgqirIAtAAIATBVIAIAuIAFghIAIghIAPhBIAqAAIAOBBQAEAQAEATIAGAfQABgNAGggIAUhWIAsAAIgqCrg");
	this.shape_20.setTransform(14.5,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,168.6,84.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AAoBOIgih3IgGgZIgFAWIgiB6IgKAAIgribIAMAAIAbBjIADAMIADAKIACAIIABAJIALgtIAbhdIALAAIAgBsIAIAeIADgQIAhh6IAMAAIgsCbg");
	this.shape.setTransform(126.8,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414141").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_1.setTransform(108.6,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414141").s().p("AAuBOIhciKIgBAAIACAmIAABkIgLAAIAAibIALAAIBcCJIABAAIgBgkIAAhlIAKAAIAACbg");
	this.shape_2.setTransform(92.3,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414141").s().p("AAoBOIg8hSIgVASIAABAIgLAAIAAibIALAAIAABQIASgRIA8g/IAOAAIg/BCIBBBZg");
	this.shape_3.setTransform(79.1,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414141").s().p("AgFBOIAAiRIgyAAIAAgKIBvAAIAAAKIgzAAIAACRg");
	this.shape_4.setTransform(60.2,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414141").s().p("AgCAcIgEg3IANAAIgEA3g");
	this.shape_5.setTransform(52.3,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414141").s().p("AAuBOIhciKIgBAAIACAmIAABkIgLAAIAAibIALAAIBcCJIABAAIgBgkIAAhlIAKAAIAACbg");
	this.shape_6.setTransform(42.3,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414141").s().p("AgzA7QgSgWAAglQAAglATgVQASgWAgAAQAhAAASAWQATAWAAAkQAAAlgTAWQgSAWghAAQggAAgTgWgAgqgzQgPASAAAhQAAAiAPASQAPATAbAAQAcAAAPgTQAPgSAAgiQAAghgPgSQgPgSgcAAQgbAAgPASg");
	this.shape_7.setTransform(26,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414141").s().p("Ag7BOIAAibIArAAQAlgBATAUQAUAUAAAlQAAAngVAUQgVAVgngBgAgwBFIAaAAQBGAAAAhFQAAgigRgRQgRgRghAAIgdAAg");
	this.shape_8.setTransform(10.2,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,138.9,34), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgfAuIAAgQQAHAEAHABQAIACAHAAQAIABAFgEQAEgEABgGQAAgFgFgEQgEgEgMgGQgOgFgGgHQgFgGAAgLQAAgMAJgHQAJgIANAAQAPAAAOAHIgFANQgNgFgLAAQgGAAgEADQgFADAAAGQAAAEACADIAFAFIANAGQALAFAFADQAFAEACAFQADAFAAAHQAAANgKAIQgKAIgPAAQgSgBgKgFg");
	this.shape.setTransform(108.5,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIARAAIAABVIAqAAIAAAOg");
	this.shape_1.setTransform(101.3,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdAyIgKgcIglAAIgKAcIgRAAIAlhjIARAAIAlBjgAgEgRIgJAZIAcAAIgKgaIgDgIIgCgJQgBAIgDAKg");
	this.shape_2.setTransform(92.4,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAANIglAAIAAAfIAnAAIAAAOg");
	this.shape_3.setTransform(84.1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAfAAQAXAAANANQAOANAAAXQAAAYgOANQgOANgZAAgAgXAkIALAAQAjABAAglQAAgkggABIgOAAg");
	this.shape_4.setTransform(75.1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAANIglAAIAAAfIAnAAIAAAOg");
	this.shape_5.setTransform(62.4,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAuIAAgQQAHAEAIABQAHACAGAAQAKABAEgEQAFgEgBgGQAAgFgDgEQgFgEgMgGQgOgFgFgHQgGgGAAgLQAAgMAJgHQAJgIAOAAQAOAAAPAHIgGANQgNgFgKAAQgHAAgFADQgEADAAAGQAAAEACADIAFAFIANAGQALAFAFADQAFAEADAFQACAFAAAHQAAANgKAIQgJAIgRAAQgQgBgLgFg");
	this.shape_6.setTransform(54.5,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAyIgRg7IgCgLIgCgKIgBAMIgDAJIgRA7IgRAAIgNgyIgNgxIAQAAIAPA6IAEAYIADgNIACgLIARg6IAPAAIAQA6IAGAYIAEgZIAPg5IAQAAIgaBjg");
	this.shape_7.setTransform(43.9,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAmQgMgOAAgYQAAgYAMgNQAMgOAWAAQAWAAANAOQAMANAAAYQAAAYgMAOQgNAOgWAAQgWAAgMgOgAgVgbQgIAJAAASQAAASAIAKQAHAJAOAAQAOAAAIgJQAHgKAAgSQAAgSgHgJQgHgJgPAAQgOAAgHAJg");
	this.shape_8.setTransform(31.8,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAyIgXgoIgQAAIAAAoIgRAAIAAhjIAdAAQASAAAKAHQAJAIAAAOQAAATgUAHIAdAsgAgUgCIALAAQALAAAFgFQAFgEAAgIQAAgIgGgFQgFgDgKAAIgLAAg");
	this.shape_9.setTransform(22.4,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAyIAAhjIAeAAQATAAAKAGQAJAGAAANQAAAJgFAGQgEAFgIACIAAABQAKABAFAGQAFAGAAAJQAAAOgJAIQgKAHgQAAgAgSAkIARAAQAJAAAFgDQAGgFgBgIQABgIgGgDQgFgEgKAAIgQAAgAgSgIIAQAAQAIAAAFgDQAFgDAAgIQAAgHgFgDQgFgDgLAAIgNAAg");
	this.shape_10.setTransform(13,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApeiUIS9AAIAAEpIy9AAg");
	this.shape_11.setTransform(60.7,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(7));

	// Слой 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0695D0").s().p("ApeCVIAAkpIS9AAIAAEpg");
	this.shape_12.setTransform(60.7,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#06ACDA").s().p("ApeCVIAAkpIS9AAIAAEpg");
	this.shape_13.setTransform(60.7,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123.4,31.8);


(lib.bgpc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgpc();
	this.instance.parent = this;
	this.instance.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgpc_1, new cjs.Rectangle(0,-34,624,231), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btnanim();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,60.6,14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAuIAAgPQAHADAHABQAIADAHAAQAJAAAEgEQAEgEABgGQAAgGgFgEQgEgDgMgGQgOgFgGgGQgFgHAAgKQAAgNAJgHQAJgHANAAQAPAAAPAGIgGANQgNgGgLAAQgGAAgFAEQgEADAAAGQAAAEACADIAFAFIANAHQALAEAFADQAFAEACAFQADAFAAAHQAAANgKAIQgKAHgPAAQgSABgKgGg");
	this.shape.setTransform(47.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAyIAAhjIARAAIAABVIAqAAIAAAOg");
	this.shape_1.setTransform(40.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdAyIgKgcIglAAIgKAcIgRAAIAlhjIARAAIAlBjgAgEgRIgJAZIAcAAIgKgaIgDgIIgCgJQgBAIgDAKg");
	this.shape_2.setTransform(31.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAAMIglAAIAAAgIAnAAIAAAOg");
	this.shape_3.setTransform(23.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAfAAQAXAAANANQAOANAAAXQAAAYgOANQgOANgZAAgAgXAlIALAAQAjAAAAglQAAgjgggBIgOAAg");
	this.shape_4.setTransform(14.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAyIAAhjIA3AAIAAAOIgnAAIAAAbIAlAAIAAAMIglAAIAAAgIAnAAIAAAOg");
	this.shape_5.setTransform(1.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAuIAAgPQAGADAJABQAHADAGAAQAKAAAEgEQAFgEgBgGQAAgGgDgEQgFgDgMgGQgOgFgFgGQgGgHAAgKQAAgNAJgHQAJgHAOAAQAOAAAOAGIgFANQgNgGgKAAQgHAAgFAEQgEADAAAGQAAAEACADIAFAFIANAHQALAEAFADQAFAEADAFQACAFAAAHQAAANgKAIQgKAHgQAAQgRABgKgGg");
	this.shape_6.setTransform(-6.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAyIgRg7IgCgLIgCgKIgBALIgDAKIgRA7IgRAAIgNgyIgNgxIAQAAIAPA5IAEAZIADgNIACgMIARg5IAPAAIAQA5IAGAZIAEgZIAPg5IAQAAIgaBjg");
	this.shape_7.setTransform(-16.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAmQgMgNAAgZQAAgYAMgOQAMgNAWABQAWAAANANQAMANAAAYQAAAZgMANQgNANgWAAQgWAAgMgNgAgVgbQgIAKAAARQAAASAIAKQAHAKAOAAQAOAAAIgKQAHgKAAgSQAAgRgHgKQgHgKgPAAQgOAAgHAKg");
	this.shape_8.setTransform(-28.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAyIgXgoIgQAAIAAAoIgRAAIAAhjIAdAAQASAAAKAIQAJAGAAAPQAAATgTAHIAcAsgAgUgDIALAAQALAAAFgDQAFgFAAgJQAAgHgGgEQgFgEgKAAIgLAAg");
	this.shape_9.setTransform(-38.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAyIAAhjIAeAAQATAAAKAGQAJAGAAANQAAAJgFAFQgEAHgIABIAAAAQAKACAFAFQAFAHAAAKQAAANgKAHQgJAIgRAAgAgSAlIARAAQAJgBAGgEQAEgDAAgJQAAgIgEgEQgGgEgKAAIgQAAgAgSgHIAQAAQAIAAAFgEQAFgDAAgIQAAgHgFgDQgFgEgLAAIgNAAg");
	this.shape_10.setTransform(-47.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApeiUIS9AAIAAEpIy9AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Слой 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApeiUIS9AAIAAEpIy9AAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDA539").s().p("ApeCVIAAkpIS9AAIAAEpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.6,-15.9,123.4,31.8);


// stage content:
(lib.Kijenga_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(215.2,228.7,1.09,1.09);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({_off:false},0).to({y:222.2,alpha:1},20,cjs.Ease.get(1)).wait(86).to({y:235.2,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(41));

	// FIND
	this.instance_1 = new lib.t21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216.6,32.1,1,1,0,0,0,26.1,16.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(131).to({_off:false},0).to({x:172.4,alpha:1},19,cjs.Ease.get(1)).wait(78).to({x:139.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(56));

	// THE BEST PROS
	this.instance_2 = new lib.t22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(265,81.2,1,1,0,0,0,73.4,48.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({x:217.5,alpha:1},19,cjs.Ease.get(1)).wait(92).to({x:187,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(49));

	// FOR YOUR HOME!
	this.instance_3 = new lib.t23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(246.5,137.1,1,1,0,0,0,54,27.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(117).to({_off:false},0).to({x:201,alpha:1},19,cjs.Ease.get(1)).wait(107).to({x:168.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(41));

	// WITH?
	this.instance_4 = new lib.t3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,128.1,1,1,0,0,0,33,16.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({x:45,alpha:1},16,cjs.Ease.get(1)).wait(65).to({x:84,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(181));

	// WHAT TO START RENOVATION
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(44.3,81.4,1,1,0,0,0,84.3,42.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({x:96.3,alpha:1},16,cjs.Ease.get(1)).wait(69).to({x:135.3,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// DON'T KNOW
	this.instance_6 = new lib.t1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(29.4,34.1,1,1,0,0,0,69.4,16.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({x:81.4,alpha:1},16,cjs.Ease.get(1)).wait(73).to({x:120.4,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(189));

	// women
	this.instance_7 = new lib.women_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(241.3,132.5,1,1,0,0,0,74,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:227},23,cjs.Ease.get(1)).wait(84).to({x:375},8,cjs.Ease.get(-1)).to({_off:true},1).wait(137).to({_off:false},0).to({x:241.3},16,cjs.Ease.get(1)).wait(26));

	// Logo
	this.instance_8 = new lib.Logo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(88.1,225.9,0.9,0.9,0,0,0,80.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({regX:80.2,regY:13.4,scaleX:0.8,scaleY:0.8,x:79.9,y:224.1},16,cjs.Ease.get(1)).wait(108).to({regX:80.1,scaleX:0.73,scaleY:0.73,x:74.4,y:223.1},19).wait(103).to({regY:13.3,scaleX:0.9,scaleY:0.9,x:88.1,y:225.9},16,cjs.Ease.get(1)).wait(26));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0695D0").s().p("A3bEMIAAoXMAu3AAAIAAIXg");
	this.shape.setTransform(150,224.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0695D0").s().p("A3bENIAAoZMAu3AAAIAAIZg");
	this.shape_1.setTransform(150,224);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0695D0").s().p("A3bEOIAAobMAu3AAAIAAIbg");
	this.shape_2.setTransform(150,223.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0695D0").s().p("A3bEPIAAodMAu3AAAIAAIdg");
	this.shape_3.setTransform(150,223.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0695D0").s().p("A3bERIAAohMAu3AAAIAAIhg");
	this.shape_4.setTransform(150,223.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0695D0").s().p("A3bESIAAojMAu3AAAIAAIjg");
	this.shape_5.setTransform(150,223.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0695D0").s().p("A3bESIAAokMAu3AAAIAAIkg");
	this.shape_6.setTransform(150,223.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0695D0").s().p("A3bETIAAolMAu3AAAIAAIlg");
	this.shape_7.setTransform(150,222.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0695D0").s().p("A3bEUIAAonMAu3AAAIAAIng");
	this.shape_8.setTransform(150,222.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0695D0").s().p("A3bEVIAAopMAu3AAAIAAIpg");
	this.shape_9.setTransform(150,222.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0695D0").s().p("A3bEWIAAorMAu3AAAIAAIrg");
	this.shape_10.setTransform(150,222.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0695D0").s().p("A3bEXIAAotMAu3AAAIAAItg");
	this.shape_11.setTransform(150,222.3);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0695D0").s().p("A3bEWIAAoqMAu3AAAIAAIqg");
	this.shape_12.setTransform(150,222.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0695D0").s().p("A3bEQIAAofMAu3AAAIAAIfg");
	this.shape_13.setTransform(150,223.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0695D0").s().p("A3bEPIAAocMAu3AAAIAAIcg");
	this.shape_14.setTransform(150,223.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1,p:{y:224}}]},1).to({state:[{t:this.shape_2,p:{y:223.8}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{y:223.4}}]},1).to({state:[{t:this.shape_5,p:{y:223.2}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{y:222.8}}]},1).to({state:[{t:this.shape_9,p:{y:222.6}}]},1).to({state:[{t:this.shape_9,p:{y:222.5}}]},1).to({state:[{t:this.shape_10,p:{y:222.5}}]},1).to({state:[{t:this.shape_10,p:{y:222.4}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},230).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_8,p:{y:222.7}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5,p:{y:223.1}}]},1).to({state:[{t:this.shape_4,p:{y:223.3}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_2,p:{y:223.9}}]},1).to({state:[{t:this.shape_1,p:{y:224}}]},1).to({state:[{t:this.shape_1,p:{y:224.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:true},1).wait(257).to({_off:false,y:224.1},0).wait(1).to({y:224.2},0).wait(2).to({y:224.3},0).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(20).to({_off:false},0).wait(233).to({_off:true},1).wait(41));

	// bg-pc
	this.instance_9 = new lib.bgpc_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-12.3,116,1,1,0,0,0,312,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:156.7},23,cjs.Ease.get(1)).wait(94).to({x:311.7,y:116.3},40,cjs.Ease.get(1)).wait(96).to({x:-12.3},16,cjs.Ease.get(1)).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.3,91.5,639.6,284.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
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