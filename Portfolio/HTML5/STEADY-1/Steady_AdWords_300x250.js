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



(lib.Man = function() {
	this.initialize(img.Man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,477);// helper functions:

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


(lib.t33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4BgIAAi/IBuAAIAAAeIhPAAIAAAyIBIAAIAAAcIhIAAIAAA1IBSAAIAAAeg");
	this.shape.setTransform(35,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4BgIAAi/IBuAAIAAAeIhOAAIAAAyIBHAAIAAAcIhHAAIAAA1IBRAAIAAAeg");
	this.shape_1.setTransform(19.8,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkBgIgnhHIgkAAIAABHIggAAIAAi/IBJAAQAcAAASASQATARAAAaQAAATgLAPQgKAOgTAHIAtBLgAgngDIAnAAQAQAAAJgJQAKgJgBgNQABgOgKgIQgJgJgQAAIgnAAg");
	this.shape_2.setTransform(3.5,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2BgIAAi/IBtAAIAAAeIhNAAIAAA2IBGAAIAAAcIhGAAIAABPg");
	this.shape_3.setTransform(-12.6,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAlBgIgphHIgkAAIAABHIgfAAIAAi/IBJAAQAcAAASASQATARAAAaQAAATgLAPQgLAOgRAHIAsBLgAgogDIApAAQAPAAAJgJQAJgJAAgNQAAgOgJgIQgJgJgPAAIgpAAg");
	this.shape_4.setTransform(-35.5,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyBWQgYgNgNgWQgNgXAAgcQAAgbANgXQANgWAYgNQAXgNAbAAQAdAAAXANQAXANANAWQANAXAAAbQAAAcgNAXQgNAWgXANQgXANgdAAQgbAAgXgNgAgig7QgQAJgJAQQgJAQAAASQAAATAJAQQAJAQAQAJQAQAJASAAQAeAAATgUQAUgTAAgeQAAgdgUgTQgTgUgeAAQgSAAgQAJg");
	this.shape_5.setTransform(-56.5,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag2BgIAAi/IBtAAIAAAeIhOAAIAAA2IBHAAIAAAcIhHAAIAABPg");
	this.shape_6.setTransform(-74.2,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t33, new cjs.Rectangle(-83.9,-13.6,128,39.7), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5500D3").s().p("AhiCTQgmggAAg3IBhAAQAAARAMAKQALAKAQgBQAQAAAMgHQALgJAAgNQAAgFgCgEQgCgEgFgEIgIgFIgNgGIgNgDIgQgEQgpgLgRgIQgvgVgGgwIgBgQQAAgzAjgbQAjgcA8AAQA8AAAiAdQAiAeAAA0IhfAAQABgPgLgIQgKgJgOABQgNAAgKAFQgJAHAAALQAAAEABAEQACAFAFACIAIAGIANAFIALAEIAQAEIARAFIASAEIASAHIAQAJQAKAEAFAGQAHAFAGAHQAHAHADAJIAHATQACAMAAAMQAAA2glAeQgmAeg9AAQg/AAgkggg");
	this.shape.setTransform(386.3,83.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5500D3").s().p("AhuCrIAAlVIDZAAIAABSIh7AAIAAAyIBvAAIAABMIhvAAIAAAzIB/AAIAABSg");
	this.shape_1.setTransform(357.7,83.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5500D3").s().p("AgvCrIAAlVIBfAAIAAFVg");
	this.shape_2.setTransform(335.3,83.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5500D3").s().p("AguCrIAAkAIhdAAIAAhVIEXAAIAABVIhdAAIAAEAg");
	this.shape_3.setTransform(312.3,83.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5500D3").s().p("AgvCrIAAlVIBfAAIAAFVg");
	this.shape_4.setTransform(289.4,83.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5500D3").s().p("ABLCrIiHi5IAAC5IhbAAIAAlVIBSAAICCCyIAAiyIBbAAIAAFVg");
	this.shape_5.setTransform(262.7,83.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5500D3").s().p("AhqCIQgqgnAAg+IAAjRIBgAAIAADPQAAAZAPAOQAOAPAXABQAYgBAPgPQAOgOAAgZIAAjPIBgAAIAADRQAAA+gqAnQgqAnhBAAQhAAAgqgng");
	this.shape_6.setTransform(226.4,84.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5500D3").s().p("AguCrIAAkAIhdAAIAAhVIEXAAIAABVIhdAAIAAEAg");
	this.shape_7.setTransform(193.6,83.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5500D3").s().p("AAnCrIg2hpIgiAAIAABpIheAAIAAlVICTAAQA3AAAkAiQAkAiAAA1QAAAfgOAYQgPAZgZAQIBDB8gAgxgMIArAAQASAAALgKQALgLAAgQQAAgRgLgKQgLgKgSAAIgrAAg");
	this.shape_8.setTransform(163.5,83.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5500D3").s().p("AhgCdQgrgYgXgpQgZgpAAgzQAAgyAZgpQAXgpArgXQArgXA1gBQAoABAkAOQAiANAaAYQAYAXAOAhQAOAhAAAmQAAAngOAhQgOAigYAYQgaAWgiAOQgkANgoAAQg1AAgrgWgAg/hAQgaAaAAAmQAAAoAaAaQAZAaAmAAQAnAAAZgaQAagaAAgoQAAgngagZQgZgbgnAAQgmAAgZAbg");
	this.shape_9.setTransform(125.5,83.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5500D3").s().p("AiHCrIAAlVICRAAQA2AAAkAjQAkAjAAA1QAAA1gkAjQgkAjg2AAIgzAAIAABfgAgpgFIApAAQAQAAAMgLQALgMAAgSQAAgTgLgLQgMgMgQAAIgpAAg");
	this.shape_10.setTransform(90.7,83.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5500D3").s().p("AiHCrIAAlVICQAAQA3AAAkAjQAkAjAAA1QAAA1gkAjQgkAjg3AAIgyAAIAABfgAgpgFIAoAAQARAAAMgLQALgMAAgSQAAgTgLgLQgMgMgRAAIgoAAg");
	this.shape_11.setTransform(59.2,83.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5500D3").s().p("AhgCdQgrgYgYgpQgYgpAAgzQAAgyAYgpQAYgpArgXQArgXA1gBQApABAjAOQAjANAZAYQAYAXAOAhQAOAhAAAmQAAAngOAhQgOAigYAYQgZAWgjAOQgjANgpAAQg1AAgrgWgAhAhAQgZAaAAAmQAAAoAZAaQAaAaAmAAQAoAAAZgaQAZgaAAgoQAAgngZgZQgZgbgoAAQgmAAgaAbg");
	this.shape_12.setTransform(22.1,83.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5500D3").s().p("AieDLIAAmVIC2AAQA2AAAjAeQAjAdAAAtQAAAagNAYQgOAYgYAOQAdAMARAaQAQAaAAAiQAAAwglAiQgmAhg4AAgAgzBvIA8AAQASAAALgKQALgLAAgQQAAgQgLgKQgLgLgSAAIg8AAgAgzgsIA3AAQASAAAKgJQAKgLAAgQQAAgQgKgJQgKgKgSAAIg3AAg");
	this.shape_13.setTransform(381.2,34.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5500D3").s().p("AhzC6QgygbgdgxQgdgxAAg9QAAg8AdgxQAdgwAygcQAzgbBAAAQAwAAAqAQQApAQAdAcQAeAcAQAoQARAnAAAtQAAAugRAoQgQAogeAcQgdAbgpARQgqAPgwAAQhAAAgzgbgAhLhNQgfAfAAAuQAAAvAfAgQAdAfAuAAQAuAAAfgfQAegfAAgwQAAgugegfQgfgfguAAQguAAgdAfg");
	this.shape_14.setTransform(337.2,34.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5500D3").s().p("AhxCnQgsgqAAhCIAAgQIBxAAIAAAKQAAAXAMAPQANAOAUgBQAUABAMgOQANgPAAgXIAAkEIBwAAIAAEKQAABCgrAqQgsAphGAAQhGAAgsgpg");
	this.shape_15.setTransform(293.7,35.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5500D3").s().p("AhUDGQgpgRgcgcQgcgcgRgnQgQgoAAguQAAgsAQgoQAQgnAdgcQAcgdAogQQAogQAtAAQBQAAA7AtQA7AtANBHIh2AAQgKgagagPQgYgPggAAQgsAAgdAeQgbAeAAAvQAAAxAbAeQAdAeAsAAQAhAAAZgPQAYgOAKgXIhkAAIAAhGIDeAAQAAAxgQAqQgPAqgcAeQgcAegoARQgoAQgvAAQgtAAgogPg");
	this.shape_16.setTransform(241.3,34.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5500D3").s().p("Ag3DLIAAmVIBvAAIAAGVg");
	this.shape_17.setTransform(208.3,34.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5500D3").s().p("AhUDGQgogRgdgcQgcgcgRgnQgQgoAAguQAAgsAQgoQAQgnAcgcQAdgdAogQQAogQAtAAQBQAAA7AtQA7AtANBHIh1AAQgLgagZgPQgagPgeAAQgtAAgdAeQgcAeAAAvQAAAxAcAeQAdAeAtAAQAfAAAZgPQAZgOALgXIhkAAIAAhGIDdAAQAAAxgPAqQgRAqgbAeQgcAegoARQgoAQgvAAQgtAAgogPg");
	this.shape_18.setTransform(175.5,34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5500D3").s().p("ABODLIhOjEIhLDEIhjAAIh/mVIB5AAIBBDpIBhjnIAmAAIBiDnIBBjpIB3AAIh9GVg");
	this.shape_19.setTransform(109.1,34.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5500D3").s().p("AiDDLIAAmVIECAAIAABgIiTAAIAAA9ICEAAIAABaIiEAAIAAA9ICYAAIAABhg");
	this.shape_20.setTransform(63,34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5500D3").s().p("ABZDLIihjcIAADcIhsAAIAAmVIBiAAICaDUIAAjUIBtAAIAAGVg");
	this.shape_21.setTransform(23.8,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-0.1,-0.1,403.8,119.6), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBlQgUgJgOgOQgPgOgIgVQgIgUAAgXQAAgWAIgUQAIgVAOgOQAOgOAUgJQAUgIAWAAQAmAAAdAWQAdAWAHAiIgjAAQgHgUgSgMQgTgNgXAAQgfAAgVAWQgUAVAAAgQAAAhAUAVQAUAVAgAAQAZAAATgNQASgNAGgVIhKAAIAAgdIBwAAQgBAfgNAZQgOAZgYAOQgYAPgeAAQgWAAgUgIg");
	this.shape.setTransform(215.2,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA5BpIhsiVIAACVIgiAAIAAjRIAfAAIBqCSIAAiSIAiAAIAADRg");
	this.shape_1.setTransform(191.9,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBpIAAjRIAhAAIAADRg");
	this.shape_2.setTransform(176.2,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZBpIAAjRIBKAAQAVAAAVAIQATAIAPANQANAOAIAUQAJAUAAAVQgBAegOAYQgNAYgZAOQgYANgdAAgAg3BJIAnAAQAfAAAUgUQAUgVAAggQAAgfgUgUQgUgVgfAAIgnAAg");
	this.shape_3.setTransform(161.4,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5BpIhsiVIAACVIgiAAIAAjRIAfAAIBqCSIAAiSIAiAAIAADRg");
	this.shape_4.setTransform(138.4,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQBpIAAjRIAhAAIAADRg");
	this.shape_5.setTransform(122.7,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag8BpIAAjRIB5AAIAAAhIhWAAIAAA7IBOAAIAAAfIhOAAIAABWg");
	this.shape_6.setTransform(111.3,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBpIAAixIg+AAIAAggICdAAIAAAgIg+AAIAACxg");
	this.shape_7.setTransform(86.5,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoBpIgshOIgoAAIAABOIgiAAIAAjRIBRAAQAeAAAUASQAUAUAAAcQAAAWgLAQQgMAPgTAHIAwBTgAgsgEIAtAAQARAAAKgKQAKgJAAgPQAAgOgKgKQgKgJgRAAIgtAAg");
	this.shape_8.setTransform(69,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABABpIgSguIhcAAIgSAuIglAAIBVjRIAfAAIBXDRgAgiAdIBEAAIgihYg");
	this.shape_9.setTransform(47.8,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQBpIAAixIg+AAIAAggICdAAIAAAgIg+AAIAACxg");
	this.shape_10.setTransform(28.7,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag3BaQgWgTAAggIAjAAQAAARAMAJQANALASgBQASAAALgIQANgJAAgOIgBgGIgCgFIgDgEIgEgDIgFgEIgGgCIgGgCIgGgCIgIgCIgHgCQgagGgMgGQgbgMgDgbIAAgIQgBgcAVgQQAUgQAhAAQAhAAAUARQASARABAfIgjAAQABgQgLgJQgMgIgPAAQgRAAgLAHQgLAHAAAMQAAAFACAEQABAEAEADIAHAFIAJAEIALADIAMAEQAbAGAMAGQAbAMAEAbIABAKQAAAVgLAOQgKAPgRAHQgRAHgVAAQgkAAgVgSg");
	this.shape_11.setTransform(11.1,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(0,0,229.3,43.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4BgIAAi/IBuAAIAAAeIhPAAIAAAyIBIAAIAAAcIhIAAIAAA1IBSAAIAAAeg");
	this.shape.setTransform(152.8,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2BgIAAi/IAfAAIAACiIBOAAIAAAdg");
	this.shape_1.setTransform(138.6,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBYQgSgKgKgQQgKgSAAgWIAAh2IAgAAIAAB0QAAAWAMANQANANATgBQAUABAMgNQANgNAAgWIAAh0IAgAAIAAB2QAAAWgKASQgKAQgSAKQgRAKgWAAQgVAAgRgKg");
	this.shape_2.setTransform(120.7,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRBgIAAi/IBDAAQAUAAASAIQASAHANANQAMAMAIASQAHASAAATQAAAbgMAWQgNAWgWAMQgWANgbAAgAgyBDIAjAAQAcAAASgTQATgTAAgdQAAgcgTgTQgSgSgcAAIgjAAg");
	this.shape_3.setTransform(101.3,49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag4BgIAAi/IBuAAIAAAeIhOAAIAAAyIBHAAIAAAcIhHAAIAAA1IBRAAIAAAeg");
	this.shape_4.setTransform(83.6,49.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AArBgIAAhUIhWAAIAABUIgfAAIAAi/IAfAAIAABPIBWAAIAAhPIAgAAIAAC/g");
	this.shape_5.setTransform(65.5,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjBbQgTgHgNgNQgNgNgHgTQgHgSgBgVQABgUAHgSQAHgTANgNQANgNATgHQASgIAUAAQAiAAAZATQAZAUAHAgIgfAAQgHgTgQgLQgQgLgVAAQgcABgSATQgUATABAdQgBAeAUATQASATAcABQAWAAAQgMQAQgLAHgVIAfAAQgHAigZAUQgaAUgiAAQgUAAgSgIg");
	this.shape_6.setTransform(45.2,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyBRQgUgQAAgeIAgAAQAAAQALAJQAMAIAQABQAQgBALgHQALgIAAgNIgBgFIgCgFIgCgDIgEgEIgEgDIgFgCIgGgCIgGgBIgHgDIgGgBQgYgGgLgFQgYgLgDgYIgBgIQAAgaASgOQASgPAfAAQAeAAASAQQARAQAAAbIgfAAQAAgOgKgIQgKgHgOgBQgPAAgKAHQgKAGAAAMQAAAEABAEQACADADADIAGAEQADACAGACIAKADIAKADQAZAGALAFQAZAMADAXIABAKQAAASgJAOQgKANgPAHQgQAGgUAAQgfAAgUgRg");
	this.shape_7.setTransform(26.1,49.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBgIgnhHIgkAAIAABHIggAAIAAi/IBJAAQAcAAASASQASARABAaQAAATgLAPQgKAOgTAHIAtBLgAgngDIAnAAQAQAAAJgJQAKgJgBgNQABgOgKgIQgJgJgQAAIgnAAg");
	this.shape_8.setTransform(210,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmBYQgSgKgKgQQgKgSAAgWIAAh3IAgAAIAAB1QAAAWAMANQANAMATAAQAUAAAMgMQANgNAAgWIAAh1IAgAAIAAB3QAAAWgKASQgKAQgSAKQgRAKgWAAQgVAAgRgKg");
	this.shape_9.setTransform(190.4,21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgyBWQgYgNgNgWQgNgXAAgcQAAgbANgXQANgWAYgNQAXgNAbAAQAdAAAXANQAXANANAWQANAXAAAbQAAAcgNAXQgNAWgXANQgXANgdAAQgbAAgXgNgAgig7QgQAJgJAQQgJAQAAASQAAATAJAQQAJAQAQAJQAQAJASAAQAeAAATgUQAUgTAAgeQAAgdgUgTQgTgUgeAAQgSAAgQAJg");
	this.shape_10.setTransform(169.2,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBgIAAhNIhEhyIAhAAIAzBWIAzhWIAiAAIhFByIAABNg");
	this.shape_11.setTransform(148.9,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPBgIAAihIg4AAIAAgeICPAAIAAAeIg4AAIAAChg");
	this.shape_12.setTransform(125.1,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPBgIAAi/IAfAAIAAC/g");
	this.shape_13.setTransform(113.4,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2BgIAAi/IBtAAIAAAeIhOAAIAAA2IBHAAIAAAcIhHAAIAABPg");
	this.shape_14.setTransform(102.9,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPBgIAAihIg4AAIAAgeICPAAIAAAeIg4AAIAAChg");
	this.shape_15.setTransform(80.3,21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA7BgIgRgqIhUAAIgQAqIgiAAIBNi/IAdAAIBPC/gAgfAaIA+AAIgfhQg");
	this.shape_16.setTransform(62.9,21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAsBgIAAhUIhXAAIAABUIgfAAIAAi/IAfAAIAABPIBXAAIAAhPIAfAAIAAC/g");
	this.shape_17.setTransform(43.4,21.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPBgIAAihIg4AAIAAgeICPAAIAAAeIg4AAIAAChg");
	this.shape_18.setTransform(25.6,21.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5500D3").s().p("AgnD4IAAnuIBPAAIAAHug");
	this.shape_19.setTransform(3,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-1,2.4,221.2,67.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5500D3").s().p("AiBCkQgygvAAhMIAAj8IB0AAIAAD6QAAAfASASQASASAbAAQAdAAARgSQASgSAAgfIAAj6IB0AAIAAD8QAABMgyAvQgzAwhPAAQhOAAgzgwg");
	this.shape.setTransform(288.7,95.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5500D3").s().p("Ah0C9Qg0gcgdgxQgdgyAAg+QAAg9AdgyQAdgxA0gcQAzgcBBAAQAxAAArARQAqAPAeAdQAeAcAQApQARAoAAAuQAAAugRApQgQAogeAdQgeAcgqAQQgrARgxAAQhBAAgzgcgAhNhPQgeAgAAAvQAAAwAeAfQAfAgAuAAQAwAAAeggQAfgfAAgwQAAgvgfggQgegfgwAAQguAAgfAfg");
	this.shape_1.setTransform(242.7,94.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5500D3").s().p("Ag6DOIAAiiIiOj6IB+AAIBKCWIBLiWIB+AAIiQD7IAAChg");
	this.shape_2.setTransform(197.5,94.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5500D3").s().p("AAvDOIhBh+IgqAAIAAB+IhyAAIAAmcICyAAQBDABAsApQArAoAABAQAAAmgSAeQgRAdgfATIBSCWgAg8gPIA0AAQAWAAAOgMQANgMAAgVQAAgTgNgNQgOgNgWAAIg0AAg");
	this.shape_3.setTransform(145.7,94.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5500D3").s().p("ABeDOIgWhCIiSAAIgWBCIh7AAICimcIBvAAIClGcgAguAzIBaAAIgth/g");
	this.shape_4.setTransform(102.3,94.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5500D3").s().p("AiGDOIAAmcIEHAAIAABjIiVAAIAAA9ICHAAIAABcIiHAAIAAA9ICbAAIAABjg");
	this.shape_5.setTransform(64.3,94.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5500D3").s().p("ABbDOIikjfIAADfIhuAAIAAmcIBjAAICeDYIAAjYIBuAAIAAGcg");
	this.shape_6.setTransform(24.4,94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5500D3").s().p("AiAC+QgwgpAAhHIB9AAQAAAWAPANQAPAMAVAAQAUAAAPgLQAPgKAAgRQAAgHgCgFQgDgFgGgFIgLgHQgFgDgLgEIgRgFIgUgFQg1gNgYgLQg7gcgIg9IgBgVQAAhBAsgkQAtgkBOAAQBPAAArAmQAsAmAABEIh6AAQAAgUgNgLQgNgKgTAAQgSAAgMAIQgNAHAAAPQAAAGADAFQACAFAGAEIALAHQAFADALADIAQAFIAUAGIAXAFIAWAHQAPAFAIAEIAVAKQANAHAHAHIAQAQQAJAKAFALQAFAKADAPQADAOAAARQAABGgwAmQgxAmhPAAQhRAAgwgpg");
	this.shape_7.setTransform(290,37.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5500D3").s().p("AisDdIAAm4IDGAAQA6AAAnAfQAmAhAAAwQAAAegPAZQgPAagaAPQAgANASAdQASAdAAAjQAAA1gpAlQgpAkg9AAgAg4B5IBBAAQAUAAAMgLQAMgLAAgTQAAgRgMgLQgMgLgUAAIhBAAgAg4gwIA8AAQAUAAAKgKQAMgLAAgRQAAgSgMgKQgKgLgUAAIg8AAg");
	this.shape_8.setTransform(250.8,37.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5500D3").s().p("Ah8DKQg4gegeg0Qggg1AAhDQAAhBAgg2QAeg0A4geQA3gdBFAAQA0AAAuARQAtARAgAfQAfAdASAsQATArAAAxQAAAygTArQgSArgfAfQggAegtARQguARg0AAQhFABg3gegAhShUQghAiAAAyQAAA0AhAhQAhAiAxAAQAzAAAggiQAhghAAg0QAAgyghgiQggghgzgBQgxABghAhg");
	this.shape_9.setTransform(203,37.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5500D3").s().p("Ah7C1QgvgtgBhIIAAgRIB7AAIAAALQAAAZANAPQAOAPAWAAQAVAAAOgPQAOgPAAgZIAAkbIB5AAIAAEhQAABIguAtQgwAthMAAQhLAAgxgtg");
	this.shape_10.setTransform(155.8,38.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5500D3").s().p("AhcDWQgrgRgfgeQgfgfgSgrQgSgrAAgyQAAgxASgrQARgqAfgfQAfgfAsgRQArgRAxAAQBXAABAAwQBAAxAOBNIh/AAQgMgcgcgRQgbgQgiAAQgwAAgfAhQgeAgAAA0QAAA1AeAhQAeAgAxAAQAjAAAbgPQAcgQAKgaIhsAAIAAhLIDxAAQAAA1gRAtQgSAugeAgQgeAhgsASQgrASgzAAQgxAAgsgRg");
	this.shape_11.setTransform(98.8,37.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5500D3").s().p("Ag8DdIAAm4IB5AAIAAG4g");
	this.shape_12.setTransform(63,37.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5500D3").s().p("AhcDWQgrgRgfgeQgfgfgSgrQgSgrAAgyQAAgxASgrQARgqAfgfQAfgfAsgRQArgRAxAAQBXAABAAwQBAAxAOBNIh/AAQgMgcgcgRQgbgQgiAAQgwAAgfAhQgeAgAAA0QAAA1AeAhQAeAgAxAAQAjAAAbgPQAcgQAKgaIhsAAIAAhLIDxAAQAAA1gRAtQgSAugeAgQgeAhgsASQgrASgzAAQgxAAgsgRg");
	this.shape_13.setTransform(27.4,37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,312.6,137.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+BpIAAjRIB5AAIAAAhIhWAAIAAA2IBPAAIAAAeIhPAAIAAA8IBaAAIAAAgg");
	this.shape.setTransform(146.9,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBpIgshOIgoAAIAABOIgiAAIAAjRIBRAAQAeAAAUASQAUAUAAAcQAAAWgLAQQgMAPgTAHIAwBTgAgsgEIAtAAQARAAAKgKQAKgJAAgPQAAgOgKgKQgKgJgRAAIgtAAg");
	this.shape_1.setTransform(129,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABABpIgSguIhcAAIgSAuIglAAIBVjRIAfAAIBXDRgAgiAdIBEAAIgihYg");
	this.shape_2.setTransform(107.9,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhKBpIAAjRIBNAAQAfAAAUATQAVAVAAAeQAAAdgVATQgUATgfAAIgqAAIAABIgAgnABIAoAAQARAAALgJQALgLAAgPQAAgQgLgLQgLgKgRAAIgoAAg");
	this.shape_3.setTransform(89,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABhBpIgYiXIhECUIgIAAIhFiUIgYCXIgkAAIAjjRIAiAAIA/COIBAiOIAiAAIAjDRg");
	this.shape_4.setTransform(64.4,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BeQgagNgOgZQgPgaAAgeQAAgeAPgYQAOgZAagPQAZgOAeAAQAgAAAZAOQAZAPAPAZQAOAYAAAeQAAAegOAaQgPAZgZANQgZAPggAAQgeAAgZgPgAglhBQgSAKgKARQgJASAAAUQAAAVAJARQAKASASAKQARAJAUAAQAhABAVgWQAWgVAAghQAAgfgWgWQgVgWghAAQgUAAgRAKg");
	this.shape_5.setTransform(37.6,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnBlQgUgJgOgOQgOgPgJgTQgHgVgBgXQABgWAHgUQAJgUAOgPQAOgPAUgHQAVgIAVAAQAmgBAbAVQAbAWAJAjIgjAAQgHgUgSgMQgRgNgYAAQgfABgUAVQgVAWAAAfQAAAhAVAVQAUAWAfgBQAZABARgNQASgNAHgWIAiAAQgHAlgcAVQgcAXgmAAQgVgBgVgHg");
	this.shape_6.setTransform(13.8,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,156.9,43.6), null);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man, new cjs.Rectangle(0,0,370,477), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCCZIAAgLIAjhSIhVjJIAAgLIA5AAIA7COIA/iNIA2AAIAAALIiBElg");
	this.shape.setTransform(178.3,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKCjQgjABgegVQgegVgLgiIAAheQAMgiAdgUQAegVAjABQAmgCAfAcIAAhsIA5AAIAAE/Ig3AAIAAgYQgbAegoAAIgEAAgAghgSQgRAKgIAQIAABDQAJASAPAJQAQAKATgBQARABAQgJQAPgIAKgOIAAhQQgJgNgQgIQgQgIgRABIgBAAQgSAAgPAJg");
	this.shape_1.setTransform(152.4,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNB6QgfAAgYgNQgXgLgJgSIAAg3QAUgjBFgKIAsgGQAPgEACgFIAAgKQgHgMgOgHQgNgGgPAAQgSAAgPAJQgPAKgJAPIgygWQAPgeAegRQAcgRAiAAQAmABAdASQAdARAKAcIAACvIg0AAIAAgZQgNAPgTAIQgQAIgQAAIgEgBgAgCAWQgUAEgJAEQgKAFgEAHIAAATQARASAagDQAeABAWgYIAAgwQgXAOgdADg");
	this.shape_2.setTransform(126,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIBlQgegUgMghIAAhfQAVgvAwgTQAugSAvAUQArATAVAtIAABCIioAAIAAARQAHASAQAKQARAKASgCQAUACAQgKQARgKAJgRIAzAUQgOAfgdARQgeASgpAAQgpAAgggWgAgbhBQgVAKgIATIAAANIBxAAIAAgNQgMgYgZgIQgKgEgKAAQgNAAgOAHg");
	this.shape_3.setTransform(101.2,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCCNQgWgLgLgWIAAiNIgtAAIAAguIAYAAQANABAHgMIAAg9IA6AAIAABIIA7AAIAAAuIg7AAIAAByQAIAUAfAAIATAAIAAAwQgNADgQAAIgEAAQgdAAgUgLg");
	this.shape_4.setTransform(79.4,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhOCNQgigVgOggIA2gaQAKAVAVAMQAUAMAXgBQAVAAARgIQAPgHAHgMIAAgXQgJgRgVgFQgMgEgagDQgcgDgQgGQgtgMgVgqIAAg7QANgcAfgSQAhgTApAAQAtAAAhAUQAiATANAhIg3AbQgKgUgSgLQgTgMgXAAQgTAAgQAHQgPAIgFAMIAAATQAKATATADQAKADAcAEQAbAEARAGQAtAMAWAqIAAA+QgNAbggASQgjATgqAAQgugBgjgTg");
	this.shape_5.setTransform(57.8,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5500D3").s().p("AizC/IgMgLIAAloQBLhPBtgDQBsgDBPBLIALALIABFnQhLBQhtADIgIAAQhnAAhMhIgAh2BNQANAdAgASQAhATAqAAQAoAAAggRQAfgQAMgZIAAg5QgVgjgpgNQgQgFgZgEQgbgDgGgCQgPgEgIgLIAAgOQAIgLAMgFQAMgFALACQASgBAQAJQAQAJAJAQIA8gbQgOgfgegRQgggTgqAAQgnAAgfARQgdAQgMAZIAAA4QAUAmArALQAOAFAaADQAZAEAJADQAOADAIALIAAARQgTAWgcgDQgTABgRgKQgRgJgKgRg");
	this.shape_6.setTransform(19.2,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,190,52.7), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBEIgihXIghBXIgTAAIgriGIAYAAIAeBiIAlhhIAIAAIAnBhIAehiIAXAAIgqCGg");
	this.shape.setTransform(176.3,64.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA9QgRgJgJgQQgJgQAAgUQAAgSAJgRQAJgPARgKQAQgJATAAQAUAAAQAJQARAKAJAPQAJARAAASQAAAUgJAQQgJAQgRAJQgQAJgUAAQgTAAgQgJgAgYgpQgLAGgGAMQgHAKAAANQAAAOAHALQAGALALAHQALAFANABQAVAAAOgOQAOgOAAgVQAAgUgOgOQgOgOgVABQgNAAgLAGg");
	this.shape_1.setTransform(158.4,64.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBEIhFhgIAABgIgWAAIAAiGIAUAAIBEBdIAAhdIAVAAIAACGg");
	this.shape_2.setTransform(143.2,64.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BEIAAiGIAwAAQAOAAAMAEQANAGAJAJQAJAJAFAMQAFANAAANQAAAUgJAPQgIAPgQAJQgQAJgSAAgAgiAvIAYAAQAUAAAMgOQAOgNAAgUQAAgUgOgMQgMgNgUgBIgYAAg");
	this.shape_3.setTransform(124.4,64.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBEIgLgeIg8AAIgLAeIgXAAIA2iGIAUAAIA3CGgAgWASIAsAAIgWg4g");
	this.shape_4.setTransform(110.1,64.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA9QgRgJgJgQQgJgQAAgUQAAgSAJgRQAJgPARgKQAQgJATAAQAUAAAQAJQARAKAJAPQAJARAAASQAAAUgJAQQgJAQgRAJQgQAJgUAAQgTAAgQgJgAgYgpQgLAGgGAMQgHAKAAANQAAAOAHALQAGALALAHQALAFANABQAVAAAOgOQAOgOAAgVQAAgUgOgOQgOgOgVABQgNAAgLAGg");
	this.shape_5.setTransform(95.4,64.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBEIAAiGIAWAAIAABxIA3AAIAAAVg");
	this.shape_6.setTransform(83.1,64.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBEIhFhgIAABgIgWAAIAAiGIAUAAIBEBdIAAhdIAVAAIAACGg");
	this.shape_7.setTransform(70.2,64.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBEIgihXIggBXIgUAAIgriGIAXAAIAfBiIAmhhIAHAAIAnBhIAdhiIAYAAIgrCGg");
	this.shape_8.setTransform(53,64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjA9QgRgJgJgQQgJgQAAgUQAAgSAJgRQAJgPARgKQAQgJATAAQAUAAAQAJQARAKAJAPQAJARAAASQAAAUgJAQQgJAQgRAJQgQAJgUAAQgTAAgQgJgAgYgpQgLAGgGAMQgHAKAAANQAAAOAHALQAGALALAHQALAFANABQAVAAAOgOQAOgOAAgVQAAgUgOgOQgOgOgVABQgNAAgLAGg");
	this.shape_9.setTransform(35.1,64.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BEIAAiGIAwAAQAOAAAMAEQANAGAJAJQAJAJAFAMQAFANAAANQAAAUgJAPQgIAPgQAJQgQAJgSAAgAgiAvIAYAAQAUAAAMgOQAOgNAAgUQAAgUgOgMQgMgNgUgBIgYAAg");
	this.shape_10.setTransform(20.5,64.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AsbjaIY3AAQBTAAA7A7QA6A6AABTIAAAlQAABTg6A6Qg7A7hTAAI43AAQhTAAg7g7Qg6g6AAhTIAAglQAAhTA6g6QA7g7BTAAg");
	this.shape_11.setTransform(100.7,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5500D3").s().p("AsbDbQhTAAg6g7Qg7g6AAhTIAAglQAAhTA7g6QA6g7BTAAIY3AAQBTAAA6A7QA7A6AABTIAAAlQAABTg7A6Qg6A7hTAAg");
	this.shape_12.setTransform(100.7,63.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOBbIAAggIAdAAIAAAggAgNAnIAAiBIAbAAIAACBg");
	this.shape_13.setTransform(201.4,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOBZIAAhHIhAhqIAgAAIAuBQIAvhQIAgAAIhABqIAABHg");
	this.shape_14.setTransform(189.3,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA3BZIgQgnIhOAAIgPAnIgfAAIBHixIAbAAIBJCxgAgdAYIA6AAIgdhKg");
	this.shape_15.setTransform(171.9,18.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhLBZIAAixIA+AAQATAAARAHQAQAHAMALQAMAMAHARQAGAQAAASQAAAZgLAVQgMAUgUALQgVAMgZAAgAguA+IAhAAQAZAAARgSQASgRAAgbQAAgagSgRQgRgSgZAAIghAAg");
	this.shape_16.setTransform(154.1,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgvBQQgVgMgMgVQgNgVAAgaQAAgZANgVQAMgVAVgMQAWgMAZAAQAbAAAVAMQAVAMANAVQAMAVAAAZQAAAagMAVQgNAVgVAMQgVAMgbAAQgZAAgWgMgAggg3QgOAJgJAOQgIAPAAARQAAASAIAPQAJAOAOAJQAPAIARAAQAcAAASgSQASgTAAgbQAAgagSgTQgSgSgcAAQgRAAgPAIg");
	this.shape_17.setTransform(133.8,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOBZIAAiWIgzAAIAAgbICDAAIAAAbIgzAAIAACWg");
	this.shape_18.setTransform(116.2,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag+BZIAAixIBBAAQAaAAARARQARARAAAZQAAAZgRAQQgRAQgaAAIgkAAIAAA9gAghABIAjAAQAOAAAIgIQAJgJAAgNQAAgNgJgJQgIgJgOAAIgjAAg");
	this.shape_19.setTransform(95.5,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjBRQgRgIgJgQQgJgQAAgVIAAhuIAdAAIAABtQAAATAMANQAMAMARgBQATABALgMQAMgNAAgTIAAhtIAdAAIAABuQAAAVgJAQQgJAQgQAIQgRAKgUgBQgTABgQgKg");
	this.shape_20.setTransform(77.8,18.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAxBZIhch+IAAB+IgdAAIAAixIAbAAIBZB8IAAh8IAdAAIAACxg");
	this.shape_21.setTransform(52.7,18.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBVQgSgHgLgMQgMgNgIgQQgGgSAAgTQAAgSAGgSQAIgRAMgMQALgMARgHQARgHASAAQAhAAAYASQAYATAGAdIgeAAQgFgSgPgJQgRgLgTAAQgbAAgQASQgRASAAAbQAAAcARASQAQARAbABQAVAAAQgMQAQgKAEgTIg+AAIAAgYIBeAAQgBAagLAWQgLAVgUAMQgVAMgZAAQgTAAgQgHg");
	this.shape_22.setTransform(33.1,18.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOBZIAAixIAcAAIAACxg");
	this.shape_23.setTransform(19.2,18.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AguBMQgTgQAAgbIAeAAQAAAOAKAIQALAJAPAAQAPAAAKgIQAKgHAAgMIAAgEIgCgFIgDgDIgDgDIgEgDIgFgCIgFgCIgGgCIgGgBIgFgCQgXgFgKgFQgXgKgCgWIgBgHQAAgYARgOQARgNAcAAQAcAAAQAOQARAPAAAZIgdAAQAAgNgJgHQgKgHgNAAQgOAAgJAGQgKAGAAAKQAAAEACADQABAEADACIAGAEQADACAFACIAJADIAKACQAXAGAKAFQAXAKADAXIABAIQAAARgJANQgJAMgOAGQgPAGgSAAQgdAAgSgPg");
	this.shape_24.setTransform(7.8,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-1.6,0.4,208.6,86.1), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F1F1").s().p("ACzCJIlthWQgGgBgDgFQgDgFACgHQABgGAFgDQAFgDAGABIAPADQAQgZACgJQALguAqgeIAngUIgYBkQgCAJAGAJQAFAJALACQAKACAJgFQAJgGADgKIAYhsQADgSAQgJQAPgJASADQARAFAKAPQAKAQgFASIgZBrQgDAKAGAJQAFAJAKADQALACAJgGQAJgFACgKIAYhmQAcAbAMAhQAMAjgIAjQgDAKACAdIAOAEQAGABADAFQADAFgBAHQgBAGgGADQgDACgEAAIgEAAg");
	this.shape.setTransform(76.5,291.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("ABtCvQgNgDgHgLIhViGQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgTgzIgohAIgBgDIgFABQAAALgcARIgTAMIgmg9IAUgMQAbgSAJAFQAGgIAGgEIAJgFQAIgFAKABIACgCIAFgBIAAgBIALgFIACAAIABAAIACgBIAJgCIAAAAIALgCIAKAAIAIABIACAAIAIACQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIABAAIAEABIAEABIACABIAEACIAJAFQAEABgCAGQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgEABIgJgBIgFAAIgEABIgDAAIgCABIgFABIgCABIgFACIgDABIgDABIAAABIgGADIgBAAIgDAEIgCACIgCAAIgCAEIgDACIgDAFIgBABIgBABIgBACIApBEIApAqIBWCGQAHAMgDANQgDANgLAHQgIAFgIAAIgIgBg");
	this.shape_1.setTransform(156.8,262.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F1F1").s().p("AgNCiQgIAAgGgGQgGgGgBgIIgCgRQgPgEgOgJIgOAKQgGAFgIAAQgIgBgHgGIgPgQQgGgGAAgIQgBgJAGgGIAKgNQgGgKgFgSIgQgDQgJAAgFgHQgGgGAAgIIABgWQAAgIAFgGQAGgGAJgBIAOgCQAGgSAHgNIgJgMQgFgGAAgJQABgIAFgGIARgPQAFgGAJAAQAIgBAHAFIALAJQASgKAOgDIACgOQABgIAHgGQAGgFAIAAIAWAAQAIAAAGAGQAHAGAAAIIACAOQASAFAOAIIAKgHQAHgFAIAAQAIABAGAFIAQAQQAGAGAAAIQABAIgGAHIgIALQAJARADAOIANACQAJABAGAGQAFAGAAAJIgBAVQAAAJgFAGQgGAGgIABIgPABQgEASgJAMIAKANQAFAHgBAIQgBAIgGAGIgPAQQgGAGgJAAQgIAAgHgFIgMgKQgRAJgOADIgDARQAAAIgHAFQgGAGgIAAgAgngqQgRARAAAYQAAAXARARQAQARAXAAQAYABARgRQARgRAAgXQAAgYgQgRQgRgRgXgBQgYAAgRARg");
	this.shape_2.setTransform(280.3,282.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F1F1").s().p("AAHCEIgRAAQgHAAgGgEQgFgFAAgHIgBgOQgNgDgLgHIgLAJQgFADgHAAQgHgBgFgEIgMgNQgFgFgBgHQAAgHAEgFIAIgLIgJgXIgNgCQgHgBgEgFQgFgFABgHIAAgRQAAgPAQgDIAMgBQAEgOAGgLIgHgKQgEgFAAgHQABgHAEgFIANgNQAGgFAGAAQAHAAAFAEIAKAIQAQgKAKgBIACgLQABgHAFgFQAFgFAHAAIARABQAHAAAFAFQAFAEABAHIABALQALADAPAJIAJgHQAFgFAHABQAHAAAFAGIANAMQAEAGABAGQAAAHgEAFIgIAJQAHAMADAOIAMABQAHABAEAFQAFAFAAAHIAAARQgBAHgEAFQgFAFgHABIgMABQgEAOgHALIAIALQAEAFAAAHQgBAHgFAFIgNAMQgEAFgIAAQgGAAgGgEIgKgIQgNAGgNAEIgBANQgBAHgFAEQgFAFgFAAIgCgBgAgggiQgOAOAAATQAAATAOAOQAOAOASAAQAUAAAOgNQAOgOAAgTQAAgTgOgOQgNgOgUgBQgTAAgOAOg");
	this.shape_3.setTransform(213.6,265.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1F1F1").s().p("AC0CJIlthWQgGgBgDgFQgEgFACgHQACgFAFgEQAFgDAGABIAPAEQAQgaABgIQAMgvApgeIAngTIgXBjQgDAJAGAJQAFAJALADQAKACAJgGQAJgGACgKIAZhsQADgRAQgJQAQgKASAEQARAEAKAQQAJAPgEASIgaBrQgCAKAFAJQAGAJAKADQAKACAKgFQAJgGACgKIAXhmQAcAbAMAiQAMAjgIAiQgDAMACAcIAPADQAFABADAGQADAFgBAGQgBAGgFADQgEACgEAAIgDAAg");
	this.shape_4.setTransform(76.3,367.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F1F1").s().p("AgLCEQgGAAgFgEQgFgFgBgHIgBgOQgNgCgMgIIgKAJQgGAEgGgBQgIAAgEgGIgNgMQgFgGAAgGQAAgHAFgGIAIgKQgHgNgCgJIgOgDQgHAAgEgGQgFgFABgIIAAgRQgBgGAFgFQAFgFAGgBIANgBQAEgOAGgLIgHgLQgFgFABgGQAAgHAFgFIAOgNQAEgFAHAAQAHgBAFAFIAJAIQANgIAOgDIABgMQACgHAFgFQAFgEAGAAIATABQAGAAAFAEQAFAFAAAGIADANQAPAFAKAGIAIgIQAGgEAIABQAGAAAEAFIAOANQAEAGAAAGQABAHgEAFIgHAJQAGAPADAKIAMACQAGABAFAFQAEAGAAAGIAAASQAAAGgEAFQgFAFgHAAIgMACQgEAPgHAKIAHALQAFAEAAAIQgBAGgFAFIgNANQgFAEgGABQgIABgFgFIgKgIQgJAFgRAFIgBAMQgBAHgGAGQgFAEgHAAgAgggiQgOANAAAUQAAATAOAOQANAPATAAQAUAAANgPQAPgNAAgTQABgTgPgOQgOgOgTAAIgBAAQgSAAgOANg");
	this.shape_5.setTransform(21.9,384.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1F1F1").s().p("AgHBfQgGAAgDgDQgDgEgBgEIgBgKIgRgHIgIAGQgLAGgGgJIgKgJQgDgDAAgFQAAgFACgEIAHgHQgGgMgBgFIgKgBQgLgCABgMIAAgLQAAgGADgDQADgDAEgBIAKgBQADgMAFgGIgHgIQgGgKAJgHIAJgJQADgDAFAAQAFgBAEADIAGAGQAIgEALgEIABgJQACgEADgDQAEgDAFAAIAMAAQAEgBAEAEQAFAEAAAEIABAIQAJADAJAFIAHgFQADgDAGAAQAFABADAEIAJAJQADADAAAGQAAAFgCADIgGAHQAEAIAEAKIAIAAQAEACAEAEQADADAAAGIgBALQABAMgLABIgJABQgDAKgFAIIAGAHQACAEAAAFQAAAFgEADIgJAKQgJAHgIgGIgIgGQgMAFgGACIgCAKQgBALgMgBgAgXgYQgKAJAAAOQAAAOAKAKQAKAKANAAQANABALgKQAKgKAAgOQABgOgLgKQgKgKgNAAIgBAAQgNAAgKAKg");
	this.shape_6.setTransform(43.2,337.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1F1").s().p("AgHBgQgGAAgDgEQgDgDgBgFIgBgKQgNgFgEgDIgIAGQgKAHgHgIIgKgKQgDgDAAgFQgBgFADgEIAHgIQgFgKgCgGIgKgCQgLgBABgLIAAgMQgBgMAMgBIAJgBQADgKAFgIIgHgIQgGgJAJgIIAJgIQADgEAFAAQAFgBAEAEIAGAFQAJgFAKgDIABgJQACgEADgDQAEgEAFAAIAMAAQAEAAAEAEQAFADAAAFIABAIQAHACALAHIAHgFQADgEAGABQAFAAADAEIAJAJQADADAAAGQAAAFgCAEIgFAGIAHASIAJABQAEABAEADQACAEAAAFIAAAMQABAMgMABIgJABQgDAKgFAIIAGAHQACAEAAAFQAAAFgEADIgJAJQgIAJgJgIIgIgGQgFAEgNAEIgCAJQgBAFgDADQgEAEgFAAgAgXgYQgKAKAAAOQAAANAKAKQAKAKANAAQANABALgKQAKgKAAgOQAAgNgKgLQgKgKgNAAQgOAAgKAKg");
	this.shape_7.setTransform(43.2,430.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F1F1").s().p("AgUC2QgdgQAAgJQgJgCgGgDIgJgFQgIgFgEgJIgRgMIgBgCIgCgCIgGgHIgHgJIgBgBIgCgDIgGgNIgDgKIAAgCIgBgBIAAgEIgBgEIAAgCIgBgFIAAgJQAAgEAGgCIAEABIACACIAEAJIACACIABADIACADIABAAIABACIABACIAFAFIADADIABAAIADADIABABIACABQADACADABIABABIAEACIACABIAHABIACABIAEAAIACABIAFAAIADgEIAkhBIATg5IBMiKQAHgLAMgEQANgEAMAGQALAHAEAMQAEANgGAMIhOCKQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAIglApIglBFIACADQAIgEAeAQIATAKIgjA/g");
	this.shape_8.setTransform(103.7,407.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F1F1").s().p("AgHBgQgLAAgCgMIgBgKQgLgDgGgFIgHAGQgJAHgJgHIgJgKQgIgJAHgIIAGgIIgHgRIgKgBQgKgBgBgMIAAgMQABgMALgBIAJgBQACgGAFgMIgFgHQgGgKAIgHIAJgKQADgDAFgBQAFAAAEAEIAGAFQALgGAJgCIABgJQABgEADgDQAFgEAEAAIAMAAQALAAACAMIABAIIATAJIAGgGQAKgGAHAIIAKAKQACADAAAFQABAFgDAEIgFAGIAHASIAIACQAFAAADAEQADADAAAFIAAAMQAAAMgLABIgJABQgDALgFAHIAGAIQAGAIgHAJIgKAIQgIAJgJgIIgHgGQgHAEgLAEIgCAJQgBAFgEADQgDAEgFAAgAgXgYQgKAKAAAOQAAANAKAKQAJAKAOABQAOAAAKgKQALgKAAgOQAAgNgKgLQgKgKgOAAQgOAAgKAKg");
	this.shape_9.setTransform(196.4,414.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1F1F1").s().p("AAJChIgVAAQgIAAgHgFQgGgGgBgIIgCgSQgNgDgQgJIgNAKQgHAFgIgBQgJAAgFgGIgQgPQgGgHAAgIQAAgIAFgHIALgNQgFgIgHgVIgRgBQgIgBgFgHQgGgGAAgIIAAgVQAAgJAGgGQAGgGAIgBIAQgCQAEgRAIgNIgJgMQgFgHABgIQAAgIAGgHIAQgPQAGgGAIAAQAJgBAGAGIALAJQAPgIASgGIACgOQABgIAGgFQAHgGAIAAIAVAAQAJAAAGAGQAGAGABAIIABAOQARAFAPAJIAKgIQAHgFAJAAQAIABAGAGIAPAQQAGAGAAAIQABAJgFAGIgKALQAIANAEARIAPADQAIABAGAGQAGAGgBAIIAAAWQAAAIgGAGQgGAGgIAAIgPACQgDANgJASIAJAMQAFAHgBAIQgBAIgGAGIgPAQQgHAFgIABQgIAAgGgFIgNgKQgPAIgQAEIgCAQQgBAJgGAFQgGAGgHAAIgCgBgAgmgqQgRARgBAYQAAAXARARQARARAXABQAXAAARgRQARgRABgXQAAgXgRgRQgRgSgYAAIgBAAQgWAAgQAQg");
	this.shape_10.setTransform(172.7,317.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1F1F1").s().p("ADpCcIighSIhHguIgEAKQgCADgEACQgEABgDgCIgHgEQgEgCgBgEQgCgEADgDIAMgZIidhQIgGAMIgqgVIAAgBIg3gqIANgYIBBAUIABAAIAqAWIgGAMICdBRIALgbQACgDAFgCQAEgBADACIAHADQAEACABAEQABAFgCADIgEAJIBjAoICMBIQAEACABAEQACAEgCAEIgbA0QgCAEgEABIgDAAIgFgBg");
	this.shape_11.setTransform(195.4,463);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F1F1").s().p("AAHCEIgRAAQgHAAgFgEQgFgFgBgHIgBgOQgKgDgOgHIgLAJQgGAEgGgBQgHAAgFgFIgMgNQgFgFgBgHQAAgHAEgFIAJgLQgGgLgEgMIgNgCQgHgBgEgFQgFgFAAgHIABgRQAAgHAEgFQAFgFAGgBIANgBQAFgOAGgLIgIgKQgEgFAAgHQABgHAFgFIAMgNQAGgEAGgBQAHAAAFAEIAKAIQAQgKAKgBIACgLQABgHAFgFQAFgFAHAAIARABQAHAAAFAFQAGAEAAAHIABALQASAHAJAFIAIgHQAFgFAHABQAHAAAFAGIANAMQAFAFAAAIQAAAGgEAGIgIAIQAHAMADAOIAMABQAHABAEAFQAFAFAAAHIgBASQAAAGgEAFQgFAFgGABIgMABQgEAMgIANIAIALQAEAFAAAHQgBAHgFAFIgMAMQgFAFgHAAQgHAAgFgEIgLgIQgIAFgRAFIgCANQgBAHgFAEQgEAFgGAAIgCgBgAgfgiQgOAOAAAUQgBASAOAOQANAOATABQATAAAPgOQAOgOAAgTQAAgTgOgOQgNgOgUgBQgSAAgOAOg");
	this.shape_12.setTransform(156.2,404.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1F1F1").s().p("AC0CJIlthVQgGgBgDgGQgEgFACgGQABgGAFgDQAFgEAGACIAPADQAPgZADgJQALgvAqgdIAngVIgXBkQgDAJAGAJQAFAJALACQAKADAJgGQAJgFACgKIAZhsQADgSAQgKQAQgKARAFQASAEAJAQQAKAPgFARIgZBsQgDAKAGAKQAFAJAKACQALACAJgGQAJgFACgLIAYhlQAdAbALAiQAMAigIAkQgDAMACAbIAPADQAFACADAFQADAFgBAGQgBAGgFADQgDACgEAAIgEAAg");
	this.shape_13.setTransform(182,366);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1F1F1").s().p("ABsCvQgNgDgHgLIhWiKIgSgzIgohAIgCgCIgEAAQAAAJgdAUIgSAMIgmg+IATgNQAdgPAIADQAFgGAGgFIAJgGQAHgEALAAIADgCIAEgBIABAAIADgCIAIgDIACAAIADgBIAJgCIAAgBIALgBIABAAIAFgBIADABIAJAAIACABIAIABIACABIABABIAEABIADABIADAAIANAHQADACgBAFQAAABAAAAQAAABAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBIgUAAIgBABIgDAAIgEABIgCABIgJADIgCABIgBABIgFADIgEAEIgCABIgCACIgDACIgDAGQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgCABIgBACIgBABIADAFIAnA+IApAqIABADIBVCFQAHALgDAMQgDANgLAHQgJAGgJAAIgHgBg");
	this.shape_14.setTransform(118.6,332.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1F1F1").s().p("AgKCEQgHAAgFgEQgFgFgBgHIgCgOQgMgDgMgHIgKAJQgFAEgHgBQgGAAgGgGIgNgMQgEgGgBgGQAAgHAEgGIAJgKQgEgHgFgPIgOgDQgHAAgEgGQgFgFAAgIIAAgRQAAgFAFgGQAFgFAHgBIANgBQADgNAHgMIgIgLQgEgFAAgGQABgHAFgFIANgNQAFgFAHAAQAHgBAFAFIAIAIQAMgIAQgDIABgMQABgHAFgFQAGgEAHAAIARABQAOAAAEAPIAAANQAPADALAIIAKgIQAFgEAGABQAHAAAFAFIANANQAFAFAAAHQAAAHgEAFIgHAJQAGAOAEALIALACQAHABAFAFQAEAGgBAGIAAASQAAAGgEAFQgFAFgHAAIgMACQgDAMgHANIAIALQADAEAAAIQgBAGgEAFIgNANQgFAEgHABQgHABgFgFIgKgIQgJAFgRAFIgCAMQAAAHgGAGQgFAEgHAAgAgfgiQgOANgBAUQAAATAOAOQANAPATAAQAUAAAOgPQAOgNAAgTQAAgUgNgNQgOgOgUAAIgBAAQgRAAgOANg");
	this.shape_15.setTransform(229.8,384.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1F1F1").s().p("AgHBfQgMABgBgMIgBgKIgRgHIgIAGQgEACgFAAQgFAAgDgFIgJgJQgEgDAAgFQAAgFADgEIAHgHQgGgJgBgIIgKgBQgMgDAAgLIAAgLQAAgGAEgDQADgDAFgBIAJgBQAEgNAEgFIgFgIQgIgJAIgIIAKgJQADgDAFAAQAFgBAEADIAHAGQAIgFALgDIABgJQACgLALABIAMAAQAMgBABAMIABAIQAIADALAFIAGgFQADgDAGAAQAFABADAEIAJAJQAEAEAAAFQAAAFgDADIgFAHIAHASIAIAAQAFACADAEQAEAEAAAFIAAALQAAALgMACIgJABQgDAKgFAIIAGAHQADAEAAAFQgBAFgDADIgKAKQgDACgFABQgFAAgEgCIgHgGQgMAFgHACIgBAKQAAAEgEAEQgEACgFAAgAgWgYQgKAJgBAOQAAANAKALQAKAKANAAQAOABALgKQAKgKAAgOQAAgOgKgKQgKgKgOAAIgBAAQgMAAgKAKg");
	this.shape_16.setTransform(251.1,337.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1F1F1").s().p("AkmA4IgDgbIBCgTIAAgBIAwgFIACANICvgRIgEgeQAAgEACgDQADgEAFAAIAFgBQAFAAADADQAEACAAAEIABAKIBqgUICcgRQAEgBAEADQADADABAEIAGA4QAAAFgCADQgDAEgEAAIifASIhpADIABAKQABAEgDAEQgDADgEABIgHAAQgFABgDgDQgCgDAAgEIgEgcIivATIACAOIgwAFg");
	this.shape_17.setTransform(29.8,268.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1F1F1").s().p("ACzCJIlthWQgGgBgDgFQgCgFABgHQABgFAFgEQAFgDAGABIAPAEQAQgaACgIQALgvAqgeIAmgUIgXBkQgCAJAGAJQAGAJAKADQAKACAJgGQAJgGACgKIAZhsQADgRAQgKQAPgJASAEQARAEAKAQQAJAPgEASIgZBrQgDAKAGAJQAFAJALADQAKACAJgFQAJgGACgKIAZhmQAbAbAMAiQAMAigJAjIAAAoIAOADQAGABADAFQADAGgBAGQgCAGgFADQgEACgEAAIgDAAgAg3hpIAAAAg");
	this.shape_18.setTransform(43.6,206.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1F1F1").s().p("AC0CJIlthWQgGgBgDgFQgEgFACgHQACgFAFgEQAFgDAGABIAPAFQAQgcABgHQAMgvApgeQAVgPASgFIgXBkQgDAJAGAJQAFAJALADQAKACAJgGQAJgGACgKIAZhrQADgSAQgKQAQgJASAEQARAEAKAQQAJAPgEASIgaBrQgCAKAFAJQAGAJAKADQAKACAKgFQAJgGACgKIAXhmQAcAbAMAiQAMAigIAjQgDAMACAcIAPADQAFABADAGQADAFgBAGQgBAGgFADQgEACgEAAIgDAAg");
	this.shape_19.setTransform(76.3,66.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1F1F1").s().p("AgLCEQgGAAgFgFQgFgEgBgHIgBgNQgQgGgJgGIgKAJQgGAEgGAAQgIgBgEgFIgNgNQgFgFAAgHQAAgGAFgGIAIgKQgHgNgCgKIgOgCQgHgBgEgFQgFgFABgHIAAgSQgBgGAFgFQAFgFAGgBIANgCQAEgNAGgLIgHgLQgFgFABgHQAAgGAFgGIAOgMQAEgFAHAAQAHAAAFAEIAJAHQANgHAOgEIABgLQACgHAFgEQAFgFAGABIATAAQAGAAAFAEQAFAFAAAHIADALQATAGAGAFIAIgHQAGgEAIABQAGAAAEAFIAOANQAEAFAAAHQABAHgEAFIgHAJQAGAOADALIAMACQAGABAFAFQAEAFAAAHIAAARQAAAHgEAFQgFAFgHABIgMABQgEAOgHALIAHAKQAFAFAAAHQgBAHgFAFIgNANQgFAEgGABQgIAAgFgEIgKgJQgNAIgNACIgBANQgBAHgGAFQgFAFgHAAgAgggiQgOANAAAUQAAATAOAOQANAOATAAQAUAAANgOQAPgNAAgTQABgTgPgOQgOgOgTAAIgBAAQgSAAgOANg");
	this.shape_20.setTransform(21.9,83.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1F1F1").s().p("AgHBgQgGAAgDgEQgDgDgBgFIgBgKQgKgCgHgFIgIAGQgLAGgGgIIgKgKQgDgDAAgFQAAgFACgEIAHgHQgGgMgBgFIgKgBQgLgCABgLIAAgMQgBgLALgCIAKgBQADgJAFgJIgHgHQgFgKAIgIIAJgIQADgEAFAAQAFgBAEAEIAGAFQAJgFAKgDIABgIQACgFADgDQAEgEAFAAIAMAAQAEAAAEAEQAFADAAAFIABAIQAHACALAHIAHgFQADgEAGABQAFAAADAEIAJAKQADADAAAFQAAAFgCAEIgGAGQAEAIAEAKIAIACQAEAAAEAEQADADAAAGIgBALQABAMgLABIgJABQgDAKgFAIIAGAHQAGAKgIAHIgJAKQgIAIgJgIIgIgGQgIAFgKADIgCAKQgBALgMAAgAgXgYQgKAKAAAOQAAANAKAKQAKAKANAAQAOABAKgKQAKgKAAgOQABgNgLgLQgKgKgNAAQgOAAgKAKg");
	this.shape_21.setTransform(43.2,36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1F1F1").s().p("AgHBgQgGAAgDgEQgDgDgBgFIgBgKQgLgDgGgFIgIAGQgDAEgGgBQgFAAgDgEIgKgKQgDgDAAgFQgBgFADgEIAHgIQgFgKgCgGIgKgCQgLAAABgNIAAgLQgBgMAMgBIAJgBQADgJAFgJIgHgHQgFgKAIgHIAJgKQADgDAFgBQAFAAAEAEIAGAFQAIgFALgDIABgJQACgEADgDQAEgEAFAAIAMAAQAEAAAEAEQAFADAAAFIABAIQAHACALAHIAHgGQAKgGAHAIIAJAKQADADAAAFQAAAFgCAEIgFAGIAHASIAJABQALACgBALIAAAMQABAMgMABIgJABQgDAKgFAIIAGAHQAGAJgIAJIgJAIQgIAJgJgIIgIgGQgGAFgMADIgCAJQgBAFgDADQgEAEgFAAgAgXgYQgKAKAAAOQAAANAKAKQAKAKANAAQANABALgKQAKgKAAgOQAAgOgKgKQgKgKgNAAQgOAAgKAKg");
	this.shape_22.setTransform(43.2,129.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F1F1F1").s().p("AgIBfQgEAAgEgDQgDgEAAgEIgCgKIgRgHIgIAEQgJAJgIgKIgJgJQgEgDABgFQgBgFAEgEIAGgHIgHgRIgJgBQgMgDAAgLIABgLQgBgGAEgDQADgDAFgBIAJgBQADgKAEgIIgFgIQgHgHAHgKIAKgKQAJgGAIAGIAHAGQAKgGAJgDIABgIQABgLAMABIAMAAQALgBACAMIABAIQAKADAJAFIAGgFQAJgGAIAIIAJAJQAJAIgIAJIgFAHQADAEAEAOIAJAAQAEABADAEQAEAEAAAFIAAAMQAAAFgEAEQgDADgEABIgJABIgJASIAGAHQADADAAAGQgBAFgEADIgIAKQgKAHgIgGIgHgHQgMAGgHABIgBAKQgBAEgDAEQgEADgEAAgAgWgYQgKAJAAAOQgBANAKALQAKAKANAAQAOAAALgKQAKgKgBgNQAAgOgJgKQgKgKgOAAIgBAAQgMAAgKAKg");
	this.shape_23.setTransform(143.3,192.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1F1F1").s().p("AgUC2QgdgQAAgJQgIgCgHgEIgJgEQgIgFgEgJIgEgBIgDgDIAAgBIgEgCIgGgFIgBgCIgCgCIgNgPIgBgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgCgFIgEgIIgDgKIAAgBIgBgCIAAgEIgBgDIAAgDIgBgFIAAgJQAAgEAGgCIAEABIACACIAEAJIACACIABADIACADIABABIACADIADADIAFAFIABAAIADADIABABIACACIAGACIABABIAEACIACABIAHABIACABIAEAAIACABIAFAAIADgEIAkhCIASg1IABgDIBMiKQAHgMAMgEQANgDAMAGQALAHAEANQAEAMgGAMIhOCKIgCAEIglAoIglBFIACADQAJgFAdARQANAGAGAFIgjA+IgUgMg");
	this.shape_24.setTransform(103.7,106.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F1F1F1").s().p("AgHBgQgLAAgCgNIgBgJQgLgDgGgFIgHAGQgFAEgEgBQgGAAgDgEIgJgJQgHgJAGgIIAGgIQgGgLgBgGIgKgBQgKgBgBgMIAAgMQABgFADgEQADgDAFgBIAJgBQACgGAFgMIgFgHQgHgKAJgHIAJgKQADgDAFAAQAGAAADADIAGAFQAKgGAKgCIABgJQABgEADgDQAFgEAEAAIAMAAQALACACAKIABAJQAMAEAHAEIAGgGQAEgCAFAAQAFAAADAEIAKAKQACADAAAFQABAFgDAEIgFAGIAHASIAIABQALACAAALIAAAMQAAAMgLABIgJABQgCAKgGAIIAGAIQAGAIgHAJIgKAIQgIAIgJgHIgHgFQgLAFgHACIgCAJQgBAMgMAAgAgXgYQgKAKAAAOQAAANAKAKQAJAKAOABQAOAAAKgKQALgKAAgOQAAgOgKgKQgLgKgNAAQgOAAgKAKg");
	this.shape_25.setTransform(196.4,113.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F1F1F1").s().p("AAJCiIgVAAQgJAAgGgGQgGgGgBgIIgCgQQgPgGgOgHIgNAJQgHAFgIAAQgJgBgFgGIgQgPQgGgHAAgIQAAgIAFgGIALgOQgFgIgHgUIgRgCQgIgBgFgHQgGgGAAgIIAAgVQAAgJAGgGQAGgGAIgBIAQgCQAEgRAIgNIgJgMQgFgHABgIQAAgIAGgGIAQgQQAGgGAIAAQAJAAAGAFIALAJQAPgIASgGIACgOQABgIAGgFQAHgGAIAAIAVAAQAJABAGAGQAGAFABAIIABAOQAOAEASAKIAKgIQAHgFAJAAQAIABAGAFIAPARQAGAGAAAIQABAIgFAHIgKALQAIANAEARIAPADQAIABAGAGQAGAGgBAIIAAAVQAAAJgGAGQgFAGgJABIgPACQgDANgJARIAJAMQAFAHgBAIQgBAJgGAGIgPAPQgHAGgIAAQgIABgGgFIgNgLQgLAHgUAFIgCARQgBAIgGAGQgGAFgHAAIgCAAgAgmgpQgRAQgBAYQAAAXARARQARASAXAAQAXAAARgRQARgQABgYQAAgXgRgRQgRgSgYAAQgWAAgRARg");
	this.shape_26.setTransform(172.7,16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F1F1F1").s().p("AgDCsQABgFgBgFIgEgIQgHgIgJgCQgPgCgIANQgDACgCAHIgLBDQgNgIgLgMQgQgYAEgcQAEgcAVgSIAEgEQALgIANgCIAijPQgMgHgGgKIgDgEQgOgYAFgcQAFgcAXgQQAPgLANgCIgLBDIABAKQABAFACADQAFAIALACQAOADAKgNIAEgJIALhDQANAGALAOQAQAXgEAdQgDAcgWASIgEADQgGAFgRAGIgiDNQAMAKAGAIIACAFQAPAXgFAcQgGAcgXARQgMAJgRADg");
	this.shape_27.setTransform(109,232.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F1F1F1").s().p("ADpCcIiOhJIhZg3IgEAJQgCAEgEABQgEABgDgCIgHgDQgEgCgBgEQgCgEADgEIAMgZIidhPIgGAMIgqgWIAAgBIg3gqIANgYIBBAVIABgBIAqAWIgGAMICdBRIALgaQACgDAFgCQAEgCADACIAHAEQAEACABAEQABAEgCAEIgEAJIBRAfICeBRQAJAFgEAJIgbAzQgCAEgEACIgEABIgEgCg");
	this.shape_28.setTransform(195.4,162.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F1F1F1").s().p("AgKCEQgHAAgFgEQgFgFgBgGIgBgPQgIgCgQgIIgLAJQgGAEgGgBQgHAAgFgFIgMgOQgFgEgBgHQAAgHAEgGIAJgKIgKgXIgNgDQgHAAgEgFQgFgFAAgIIABgRQAAgGAEgFQAFgFAGAAIANgCQAEgOAHgLIgIgLQgEgFAAgHQABgGAFgFIAMgOQAGgEAGAAQAHgBAFAFIAKAHQAMgHAOgDIACgLQABgHAFgGQAFgEAHAAIARABQAHAAAFAEQAGAFAAAHIABALQAPAFAMAGIAIgHQAFgEAHAAQAHABAFAGIANAMQAFAFAAAHQAAAHgEAFIgIAJQAIARACAJIAMABQAHAAAEAGQAFAFAAAHIgBARQAAAHgEAFQgFAFgGABIgMABQgDAKgJAPIAIAKQAEAGAAAGQgBAIgFAEIgMANQgFAEgHAAQgHABgFgEIgLgIQgMAGgNADIgCAOQgBAHgFAFQgFAEgHAAgAgfgiQgOAOAAATQgBATAOAOQANAOATAAQATAAAPgOQAOgOAAgSQAAgTgOgOQgNgOgUAAIgBAAQgSAAgNANg");
	this.shape_29.setTransform(156.2,104.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1F1F1").s().p("AC0CJIlthWQgGgBgDgFQgEgGACgGQABgFAFgEQAFgDAGABIAPAEQAQgaACgJQALguAqgeQAVgPASgGIgXBkQgDAJAGAKQAFAJALACQAKACAJgFQAJgGACgKIAZhsQADgRAQgKQAPgKASAEQASAEAJAQQAKAPgFASIgZBsQgDAKAGAJQAFAJAKADQALACAJgGQAJgFACgKIAYhmQAdAaALAiQAMAigIAkQgDAMACAbIAPAEQAFABADAFQADAFgBAGQgBAHgFADQgEADgEAAIgDgBg");
	this.shape_30.setTransform(182,65.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F1F1F1").s().p("AgcEpQgKAAAAgKIAAihIAJhnIgLAAQgEAAgDgEQgEgDAAgEIAAgHQAAgFAEgCQADgDAEAAIAdAAIAAiwIgPAAIAAgwIAOhDIAaAAIAMBDIAAAwIgNAAIAACwIAdAAQADAAAEADQADACAAAFIAAAHQAAAEgDADQgEAEgDAAIgLAAIAJBrIAACdQAAAEgEADQgCADgFAAg");
	this.shape_31.setTransform(80.3,173.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1F1F1").s().p("ABsCvQgNgDgHgLIhWiKIgSgzIgqhCIgEABQAAAJgdATIgSAMIgmg+IATgMQAdgQAIADQAFgGAGgFIAJgFQAGgFAMAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIAEgBIABAAIADgCIAKgEIADAAIAJgCIALgCIABAAIAFgBIADABIAJAAIACABIAIACIACAAIABABIAEAAIADACIADABIAEACIAJAEQADACgBAGIgCADIgEABIgJgBIgLAAIgBABIgDAAIgEABIgCABIgJADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBABIgFADIgEAFIgCAAIgCACIgDAEIgCABIgBADIgCACIgCABIgBACIgBACIADAEIAnA/IAAABIApApIBWCHQAHALgDANQgDANgLAHQgJAFgJAAIgHgBg");
	this.shape_32.setTransform(118.6,31.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F1F1F1").s().p("AC0CJIlthWQgGgBgDgFQgEgFACgHQABgFAFgEQAFgDAGABIAPAEQAQgaACgIQALgvAqgeQAVgPASgFIgXBkQgDAJAGAJQAFAJALADQAKACAJgGQAJgGADgKIAYhsQADgRAQgKQAQgJARAEQASAEAJAQQAKAPgFASIgZBrQgDAKAGAJQAFAJAKADQALACAJgFQAJgGACgKIAYhmQAcAbAMAiQAMAigIAjQgDAMACAcIAPADQAGABADAFQACAFgBAHQgBAGgFADQgEACgEAAIgDAAg");
	this.shape_33.setTransform(251.5,206.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F1F1F1").s().p("ACzCJIlthWQgGgBgDgFQgCgFABgHQABgFAFgEQAFgDAGABIAPAFQARgcABgHQALgvAqgeQAVgPASgFIgYBkQgCAJAGAJQAGAJAKADQAKACAJgGQAJgGADgKIAYhrQADgSAQgKQAPgJASAEQARAEAKAQQAJAPgEASIgZBrQgDAKAGAJQAFAJALADQAKACAJgFQAJgGACgKIAYhmQAcAbAMAiQAMAigJAjIAAAoIAOADQAGABADAGQADAFgBAGQgBAGgFADQgFACgEAAIgDAAg");
	this.shape_34.setTransform(284.3,66.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1F1F1").s().p("AgKCEQgHAAgFgFQgFgEgBgHIgCgNQgRgHgHgFIgKAJQgFAEgHAAQgHgBgFgFIgNgNQgEgFgBgHQAAgHAEgFIAJgKQgFgIgEgPIgOgCQgHgBgEgFQgFgFAAgHIAAgSQAAgGAFgFQAFgFAHgBIANgCQAEgNAGgLIgIgLQgEgFAAgHQABgGAFgGIANgMQAFgFAHAAQAGAAAGAEIAIAHQAMgHAQgEIABgLQABgHAFgEQAGgFAHABIARAAQAOAAAEAQIAAALQARAFAJAGIAKgHQAFgEAGABQAHAAAFAFIANANQAFAFAAAHQAAAGgEAGIgHAJQAGANAEAMIALACQAHABAFAFQAEAFgBAHIAAARQAAAHgEAFQgFAFgHABIgMABQgCALgIAOIAIAKQADAFAAAHQgBAHgEAFIgNANQgFAEgHABQgHAAgFgEIgKgJQgOAIgMACIgCANQAAAHgGAFQgFAFgHAAgAgfgiQgOANgBAUQAAATAOAOQANAOATAAQAUAAAOgOQAOgNAAgTQAAgTgNgOQgOgOgUAAIgBAAQgRAAgOANg");
	this.shape_35.setTransform(229.8,83.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F1F1F1").s().p("AgHBgQgMAAgBgMIgBgKQgJgCgIgFIgIAGQgEADgFgBQgFAAgDgEIgJgKQgEgDAAgFQAAgFADgEIAHgHQgGgJgBgIIgKgBQgMgCAAgLIAAgMQAAgLAMgCIAJgBQADgKAFgIIgFgHQgIgKAIgIIAKgIQADgEAFAAQAFgBAEAEIAHAFQAJgGAKgCIABgIQACgMALAAIAMAAQALAAACAMIABAIQAHACAMAHIAGgFQADgEAGABQAFAAADAEIAJAKQAEADAAAFQAAAFgDAEIgFAGIAHASIAIACQAFAAADAEQAEAEAAAFIAAALQAAALgMACIgJABQgDAKgFAIIAGAHQAGAKgHAHIgKAKQgDADgFABQgFAAgEgEIgHgGQgIAFgLADIgBAKQAAAEgEAEQgEADgFAAgAgWgYQgKAKgBAOQAAANAKAKQAKAKANAAQAPABAKgKQAKgKAAgOQAAgNgKgLQgKgKgOAAQgNAAgKAKg");
	this.shape_36.setTransform(251.1,36.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F1F1F1").s().p("AgHBgQgFAAgEgEQgDgDgBgFIgBgKQgKgDgHgFIgIAGQgDAEgGgBQgFAAgDgEIgJgKQgEgDAAgFQAAgFADgEIAHgIQgDgEgEgMIgKgCQgFAAgDgEQgEgEAAgFIAAgLQAAgLAMgCIAKgBQABgJAGgJIgFgHQgHgJAHgIIAKgKQAIgIAJAIIAHAFQAGgEANgEIABgJQACgLALAAIAMAAQAMAAABAMIABAIQAHACAMAHIAGgGQAEgDAFABQAFAAADAEIAJAKQAEADAAAFQAAAFgDAEIgFAGQAEAIADAKIAIABQAMACAAALIAAAMQAAALgMACIgJABQgDAKgFAIIAGAHQAGAKgHAIIgKAIQgDAEgFABQgFAAgEgEIgHgGQgJAGgKACIgBAJQAAAFgEADQgEAEgFAAgAgWgYQgKAKgBAOQAAANAKAKQAKAKANAAQAOABALgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgNAAgKAKg");
	this.shape_37.setTransform(251.1,129.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F1F1F1").s().p("AgHBfQgLAAgCgLIgBgKIgRgHIgHAEQgFAEgEAAQgGAAgDgFIgJgJQgEgDgBgFQABgFADgEIAGgHQgGgLgBgGIgKgBQgKgCgBgMIAAgLQABgGADgDQADgDAGgBIAIgBQACgJAFgJIgFgIQgGgKAIgHIAJgKQADgDAFAAQAGAAADADIAGAGQALgGAJgDIABgIQABgLALABIANAAQAFAAAEADQAEAEAAAEIABAIQAMAEAHAEIAGgFQAEgDAFAAQAEABAEAEIAJAJQAHAIgGAJIgGAHQAEAFAEANIAIAAQAFABADAEQADAEAAAFIAAAMQAAAGgDADQgEADgFABIgIABQgCAJgGAJIAGAHQADADgBAGQAAAFgDADIgKAKQgJAHgIgGIgIgHQgMAGgGABIgBAKQgBAFgEADQgDADgGAAgAgXgYQgKAJAAAOQAAAOAJAKQALAKANAAQAOAAAKgKQALgKAAgNQAAgOgKgKQgKgKgOAAIgBAAQgNAAgKAKg");
	this.shape_38.setTransform(351.3,192.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F1F1F1").s().p("AgHBgQgFgBgDgDQgEgDgBgFIgBgKQgKgDgHgEIgIAFQgDAEgFAAQgFgBgEgEIgJgJQgHgIAGgJIAHgHIgHgSIgKAAQgFgCgDgDQgEgFAAgEIAAgMQACgMAKgBIAKgBQABgJAGgJIgFgHQgEgDABgGQAAgFAEgDIAJgKQAJgHAIAGIAHAGQAHgEANgEIABgIQAAgFAEgDQADgEAFABIAMAAQAMgBABAMIABAIIATAJIAGgGQAKgGAHAJIAJAJQAEADAAAFQABAFgEAEIgFAGQADAEAEAOIAJABQALACAAAMIAAALQAAAFgEAEQgDADgFABIgJABQgEANgEAFIAGAIQAHAJgIAIIgKAIQgDAEgFABQgFAAgEgDIgHgGQgJAFgKACIAAAKQgCALgLAAgAgWgYQgKAKgBANQAAAOAKAKQAKALAOAAQAOAAAKgKQAKgLAAgNQAAgOgKgJQgKgKgOAAQgNgBgKAKg");
	this.shape_39.setTransform(464.7,211);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F1F1F1").s().p("AgVC2QgbgPgBgKQgIgCgIgEIgIgEQgIgEgFgKIgDgBIgDgDIgBgBIgDgCIgFgFIgDgCIgCgCIgGgHIgGgIIgBgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAIgDgFIgEgKIgCgIIgBgBIAAgCIAAgEIgBgDIAAgRQAAgFAEgBQABAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAEAJIABACIACADIABADIABABIADADIACADIACACIAEADIAEADIACABIABACIAGADIAFACIACABIACAAIAEABIADABIADAAIADABIAGAAIABgEIAlhCIARg1IACgDIBMiKQAHgMANgEQANgDALAGQAMAHADANQAEAMgHAMIhNCKIgDAEIglAoIgjBCIgCADIACADQALgFAbARIAUALIgjA+IgVgMg");
	this.shape_40.setTransform(311.7,106.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F1F1F1").s().p("AgHBgQgFAAgDgEQgEgEgBgFIgBgJQgLgDgGgFIgIAGQgDAEgFgBQgGAAgDgEIgJgJQgHgIAGgJIAGgIQgCgDgEgOIgLgBQgEAAgDgEQgDgEgBgFIAAgMQABgMAMgBIAJgBQABgJAFgJIgEgHQgEgEAAgFQABgFAEgDIAJgKQAKgHAHAHIAHAFQAIgFAMgDIABgJQAAgEADgDQAEgEAFAAIAMAAQAMACABAKIABAJQAKADAIAFIAGgGQALgGAHAIIAJAKQAEADAAAFQABAFgEAEIgFAGQACAEAFAOIAIABQALACAAALIAAAMQAAAMgMABIgIABQgDAKgFAIIAGAIQAGAJgHAIIgKAIQgDAEgFAAQgFAAgEgDIgHgFQgMAFgHACIAAAJQgBAFgEAEQgEADgFAAgAgWgYQgKAKgBAOQAAANAKAKQAKAKAOABQAOAAAKgKQAJgLABgNQAAgOgKgKQgKgKgOAAQgNAAgKAKg");
	this.shape_41.setTransform(404.4,113.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F1F1F1").s().p("AAJCiIgVAAQgJAAgGgGQgGgGgBgIIgBgQQgOgFgQgIIgNAJQgHAFgIAAQgIgBgGgGIgQgPQgGgGAAgJQgBgIAGgGIAKgOQgHgMgEgQIgQgCQgJgBgFgHQgGgGAAgIIABgVQAAgJAGgGQAFgGAIgBIAQgCQADgNAJgRIgKgMQgFgHABgIQABgIAGgGIAPgQQAHgGAIAAQAIAAAHAFIALAJQAPgJATgFIABgOQABgIAGgFQAHgGAHAAIAWAAQAJABAFAGQAHAFAAAIIACAOQATAGANAIIALgIQAHgFAIAAQAHABAHAFIAQARQAFAGABAIQgBAIgFAHIgIALQAIAPAEAPIAOADQAIABAFAGQAGAGAAAIIgBAVQAAAJgFAGQgGAGgHABIgPACQgGASgIAMIAKAMQAEAHAAAIQAAAJgGAGIgQAPQgGAGgJAAQgIABgGgFIgNgLQgOAIgRAEIgCARQgBAIgGAGQgGAFgHAAIgCAAgAgmgpQgRAQAAAYQgBAXARARQAQASAXAAQAYAAASgRQARgRAAgXQABgXgRgRQgRgSgYAAQgXAAgRARg");
	this.shape_42.setTransform(380.8,16.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F1F1F1").s().p("AgDCsIgBgKIgEgIQgFgIgKgCQgPgCgJANQgDADgCAGIgLBDQgPgKgHgKQgSgYAEgcQAEgcAWgSIADgEQALgHAMgDIAjjPQgKgFgIgMIgCgEQgQgYAGgcQAFgcAYgQQANgKAQgDIgMBDQgBAGABAEQABAFADADQAGAIAKACQAOADAKgNIADgJIALhDQAMAEANAQQARAXgFAdQgDAcgXASIgDADQgJAGgPAFIgiDNQAPANAEAFIACAFQAPAYgGAbQgGAcgWARQgNAJgPADg");
	this.shape_43.setTransform(317.1,232.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F1F1F1").s().p("AjhA8IhFgFIgDgbIBCgTIAwgGIACAPICvgTIgEgdQAAgEACgDQADgEAFAAIAFgBQAFgBADADQAEADAAAEIABAKIBVgRIAVgDICcgRQAEgBAEADQADACABAEIAGA6QABADgDAEQgDADgFABIieASIhpACIABALQABAEgDAEQgDADgEAAIgHABQgFAAgDgCQgCgDAAgEIgEgdIivAUIACANIgwAGg");
	this.shape_44.setTransform(336.2,162.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F1F1F1").s().p("AgLCEQgGAAgFgEQgFgFAAgGIgDgPQgHgCgQgIIgKAJQgHAEgGgBQgHAAgEgFIgOgOQgFgFAAgGQAAgHAEgGIAJgKQgIgOgCgJIgNgDQgHAAgFgFQgEgFAAgIIAAgRQABgGAEgFQAFgFAHAAIAMgCQADgNAHgMIgIgLQgDgFAAgHQABgGAEgFIAOgOQAFgEAGAAQAHgBAGAFIAJAHQALgGAQgEIABgLQABgHAFgGQAFgEAHAAIARABQAHAAAFAEQAFAFABAHIABALQAOAFAMAGIAJgHQAGgEAGAAQAIABAEAGIAMAMQAFAFABAHQAAAHgFAFIgHAJQAJAQABAKIAMABQAHAAAEAGQAFAFgBAHIAAARQABAHgFAFQgFAFgGABIgNABQgEAOgHALIAIAKQAFAFgBAHQAAAHgGAFIgNANQgFAEgGAAQgHABgGgEIgJgIQgQAHgLACIgCAOQAAAHgFAFQgGAEgHAAgAgggiQgNANAAAUQAAATANAOQANAOATAAQATAAAOgOQAOgNABgTQABgTgOgOQgPgOgSAAIgCAAQgSAAgOANg");
	this.shape_45.setTransform(364.3,104.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F1F1F1").s().p("Ah9DLIApg1QAEgFAAgFIABgIQgBgKgIgGQgGgFgHAAQgHAAgGADQgGADgCADIgqA2QgJgQgCgOQgDgcARgXQAQgXAdgGIAEgBQAKgBAQADIB+ilQgHgMAAgMIAAgGQgCgcASgWQASgWAcgDQAPgCAQAFIgpA2IgEAJIgBAJQABAKAIAFQAGAEAHABQAHABAGgDQAGgEADgDIApg1QAJAPACAOQAEAdgRAXQgRAWgcAFIgFACQgLACgOgEIh/CmQAHAMAAAMIABAEQABAdgRAVQgSAXgcADIgKABQgKAAgMgEg");
	this.shape_46.setTransform(434,145);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F1F1F1").s().p("Ah1C/IAngzQADgFABgDIAAgJQgBgKgIgFQgKgJgOAIQgCABgFAFIgnAyQgJgNgBgPQgEgbAQgVQAPgVAbgGIAEgBQAKgBAOACIB2iaQgFgLgCgMIAAgEQgCgbARgUQASgVAagDQAMgCASAEIgoAzIgDAIIgBAJQABAKAIAFQAMAIAMgHQAEgBADgFIAngyQAJANABAPQAEAbgQAVQgPAVgbAGIgEAAQgJADgOgDIh3CaQAFALACAMIAAAEQACAbgRAUQgRAVgbADIgJABQgJAAgLgDg");
	this.shape_47.setTransform(457.2,29.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F1F1F1").s().p("AC0CJIlthWQgGgBgDgFQgEgGACgGQABgFAGgEQAFgDAFABIAQAEQAQgaABgJQALguAqgeQAVgPASgGIgXBkQgDAJAGAKQAFAJAKACQALACAJgFQAJgGACgKIAZhsQADgRAQgKQAPgJASADQASAEAJAQQAKAPgEASIgbBsQgCAKAGAJQAGAJAKADQAKACAKgGQAJgFACgKIAXhmQAdAbALAhQAMAigIAkQgDANACAaIAPAEQAFABADAFQADAFgBAGQgBAHgFADQgEADgEAAIgDgBg");
	this.shape_48.setTransform(390,65.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F1F1F1").s().p("AgcEqQgEAAgDgEQgEgDAAgFIAAifIAJhpIgKAAQgFAAgDgDQgCgDAAgEIAAgIQAAgEACgCQADgDAFAAIAdAAIAAiwIgOAAIAAgwIABAAIAMhEIAaAAIAMBEIABAAIAAAwIgPAAIAACwIAdAAQAFAAADADQACACAAAEIAAAIQAAAKgKAAIgJAAIAHBXIAAAUIAACdQAAAFgCADQgDAEgEAAg");
	this.shape_49.setTransform(390.7,217.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F1F1F1").s().p("ABtCvQgMgDgHgLIhViFIgCgFIgTgzIgog/IgBgDIgEABQAAAJgdATIgSAMIgng+IAVgMQAbgQAJADQAEgGAIgFIAIgFQAGgFAMAAIADgCIAEgBIAEgCIAKgEIABAAIABAAQAFgCAEAAIABAAIAKgCIACAAIAEgBIAEABIAJAAIABABQAFAAADACIADAAIABABIADAAIAGADQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIAJAEQAEACgBAGQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgDABIgUgBIgCABIgCAAIgFABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgIADIgDABIgGAEIAAABIgEAEIgCAAIgEAGIgCABIgCADIgCACIgBABIgBACIAAACQAAACACACIAnA/IAAABIApApIABACIBVCFQAHALgDANQgDANgMAHQgIAFgJAAIgHgBg");
	this.shape_50.setTransform(326.5,31.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F1F1F1").s().p("ABtCvQgNgDgHgLIhViGQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgSg0Igpg/IAAgDIgBAAIgEABQAAALgcARIgTAMIgmg9IAUgMQAbgRAJAEQAGgIAGgDIAJgGQAHgFALAAIACgBIAFgCIANgFIABAAIACgBQAEgCAEAAIABAAIALgCIAKAAIAIABIACAAIAIACIACABIABAAIAIACIACABQAAAAABAAQABABAAAAQABAAAAAAQAAAAABABIAJAEQADACgBAGQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgEABIgSgBIgCABIgDAAIgFACIgCAAIgFACIAAABIgEAAIgCACIAAABIgGADIgBAAIgDAEIgCABIgCABIgCAEIgDACIgCACIgBADIgBABIgCADIApBEIApApIABADIBVCEQAHALgDANQgDANgLAHQgIAGgIAAIgIgBg");
	this.shape_51.setTransform(590.5,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,605.3,478.8), null);


// stage content:
(lib.Steady_AdWords_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_867 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(867).call(this.frame_867).wait(17));

	// Logo
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(51.5,17.2,0.268,0.268,0,0,0,95,26.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:36.5,alpha:1},14,cjs.Ease.get(1)).wait(870));

	// t1
	this.instance_1 = new lib.t11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.3,43.2,0.468,0.468,0,0,0,78.5,21.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156).to({_off:false},0).to({y:58.2,alpha:1},14,cjs.Ease.get(1)).wait(106).to({y:43.2,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(171).to({_off:false},0).to({y:58.2,alpha:1},14,cjs.Ease.get(1)).wait(106).to({y:43.2,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(171).to({_off:false},0).to({y:58.2,alpha:1},14,cjs.Ease.get(1)).wait(102));

	// t2
	this.instance_2 = new lib.t22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.7,98.9,0.5,0.5,0,0,0,156.3,68.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).to({x:86.7,alpha:1},14,cjs.Ease.get(1)).wait(108).to({x:101.7,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false},0).to({x:86.7,alpha:1},14,cjs.Ease.get(1)).wait(108).to({x:101.7,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false},0).to({x:86.7,alpha:1},14,cjs.Ease.get(1)).wait(94));

	// t3
	this.instance_3 = new lib.t33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.1,144.6,0.5,0.5,0,0,0,112.1,37.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(174).to({_off:false},0).to({x:107.1,alpha:1},14,cjs.Ease.get(1)).wait(108).to({y:159.6,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false,x:92.1,y:144.6},0).to({x:107.1,alpha:1},14,cjs.Ease.get(1)).wait(108).to({y:159.6,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false,x:92.1,y:144.6},0).to({x:107.1,alpha:1},14,cjs.Ease.get(1)).wait(84));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(46.3,43.2,0.468,0.468,0,0,0,78.5,21.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({y:58.2,alpha:1},14,cjs.Ease.get(1)).wait(106).to({y:43.2,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(171).to({_off:false},0).to({y:58.2,alpha:1},14,cjs.Ease.get(1)).wait(106).to({y:43.2,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(171).to({_off:false},0).to({y:58.2,alpha:1},14,cjs.Ease.get(1)).wait(106).to({y:43.2,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(132));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.7,98.9,0.5,0.5,0,0,0,156.3,68.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({x:86.7,alpha:1},14,cjs.Ease.get(1)).wait(108).to({x:101.7,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false},0).to({x:86.7,alpha:1},14,cjs.Ease.get(1)).wait(108).to({x:101.7,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false},0).to({x:86.7,alpha:1},14,cjs.Ease.get(1)).wait(108).to({x:101.7,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(122));

	// t3
	this.instance_6 = new lib.t3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(92.1,144.6,0.5,0.5,0,0,0,112.1,37.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).to({x:107.1,alpha:1},14,cjs.Ease.get(1)).wait(108).to({y:159.6,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false,x:92.1,y:144.6},0).to({x:107.1,alpha:1},14,cjs.Ease.get(1)).wait(108).to({y:159.6,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(169).to({_off:false,x:92.1,y:144.6},0).to({x:107.1,alpha:1},14,cjs.Ease.get(1)).wait(108).to({y:159.6,alpha:0},14,cjs.Ease.get(-0.5)).to({_off:true},1).wait(112));

	// Слой 18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_60 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_111 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_203 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_254 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_366 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_417 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_509 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_560 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_672 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_723 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_810 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");
	var mask_graphics_861 = new cjs.Graphics().p("AlOSEQgpAAgdgbQgcgbAAgnIAAgRQAAgnAcgbQAdgbApAAIMRAAQApAAAdAbQAcAbAAAnIAAARQAAAngcAbQgdAbgpAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_graphics_60,x:54.9,y:115.6}).wait(51).to({graphics:mask_graphics_111,x:54.9,y:115.6}).wait(1).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_graphics_203,x:54.9,y:115.6}).wait(51).to({graphics:mask_graphics_254,x:54.9,y:115.6}).wait(1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_graphics_366,x:54.9,y:115.6}).wait(51).to({graphics:mask_graphics_417,x:54.9,y:115.6}).wait(1).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_graphics_509,x:54.9,y:115.6}).wait(51).to({graphics:mask_graphics_560,x:54.9,y:115.6}).wait(1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_graphics_672,x:54.9,y:115.6}).wait(51).to({graphics:mask_graphics_723,x:54.9,y:115.6}).wait(1).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_graphics_810,x:54.9,y:115.6}).wait(51).to({graphics:mask_graphics_861,x:54.9,y:115.6}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Слой 19
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)","rgba(255,255,255,0)"],[0,0.486,1],-111,-64,111,64.1).s().p("A/AJiIAAzDMA+BAAAIAATDg");
	this.shape.setTransform(-97.7,219,0.5,0.5);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)","rgba(255,255,255,0)"],[0,0.486,1],-55.5,-32,55.5,32.1).s().p("AvfExIAAphIe/AAIAAJhg");
	this.shape_1.setTransform(-91.6,219);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60).to({_off:false},0).to({_off:true},1).wait(50).to({_off:false,x:214.8},0).to({_off:true},1).wait(91).to({_off:false,x:-97.7},0).to({_off:true},1).wait(50).to({_off:false,x:214.8},0).to({_off:true},1).wait(111).to({_off:false,x:-97.7},0).to({_off:true},1).wait(50).to({_off:false,x:214.8},0).to({_off:true},1).wait(91).to({_off:false,x:-97.7},0).to({_off:true},1).wait(50).to({_off:false,x:214.8},0).to({_off:true},1).wait(111).to({_off:false,x:-97.7},0).to({_off:true},1).wait(50).to({_off:false,x:214.8},0).to({_off:true},1).wait(86).to({_off:false,x:-97.7},0).to({_off:true},1).wait(50).to({_off:false,x:214.8},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(61).to({_off:false},0).wait(1).to({x:-85.5},0).wait(1).to({x:-79.3},0).wait(1).to({x:-73.2},0).wait(1).to({x:-67.1},0).wait(1).to({x:-61},0).wait(1).to({x:-54.8},0).wait(1).to({x:-48.7},0).wait(1).to({x:-42.6},0).wait(1).to({x:-36.5},0).wait(1).to({x:-30.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-18.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-5.8},0).wait(1).to({x:0.3},0).wait(1).to({x:6.4},0).wait(1).to({x:12.6},0).wait(1).to({x:18.7},0).wait(1).to({x:24.8},0).wait(1).to({x:30.9},0).wait(1).to({x:37.1},0).wait(1).to({x:43.2},0).wait(1).to({x:49.3},0).wait(1).to({x:55.5},0).wait(1).to({x:61.6},0).wait(1).to({x:67.7},0).wait(1).to({x:73.8},0).wait(1).to({x:80},0).wait(1).to({x:86.1},0).wait(1).to({x:92.2},0).wait(1).to({x:98.4},0).wait(1).to({x:104.5},0).wait(1).to({x:110.6},0).wait(1).to({x:116.7},0).wait(1).to({x:122.9},0).wait(1).to({x:129},0).wait(1).to({x:135.1},0).wait(1).to({x:141.2},0).wait(1).to({x:147.4},0).wait(1).to({x:153.5},0).wait(1).to({x:159.6},0).wait(1).to({x:165.8},0).wait(1).to({x:171.9},0).wait(1).to({x:178},0).wait(1).to({x:184.1},0).wait(1).to({x:190.3},0).wait(1).to({x:196.4},0).wait(1).to({x:202.5},0).wait(1).to({x:208.6},0).to({_off:true},1).wait(93).to({_off:false,x:-91.6},0).wait(1).to({x:-85.5},0).wait(1).to({x:-79.3},0).wait(1).to({x:-73.2},0).wait(1).to({x:-67.1},0).wait(1).to({x:-61},0).wait(1).to({x:-54.8},0).wait(1).to({x:-48.7},0).wait(1).to({x:-42.6},0).wait(1).to({x:-36.5},0).wait(1).to({x:-30.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-18.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-5.8},0).wait(1).to({x:0.3},0).wait(1).to({x:6.4},0).wait(1).to({x:12.6},0).wait(1).to({x:18.7},0).wait(1).to({x:24.8},0).wait(1).to({x:30.9},0).wait(1).to({x:37.1},0).wait(1).to({x:43.2},0).wait(1).to({x:49.3},0).wait(1).to({x:55.5},0).wait(1).to({x:61.6},0).wait(1).to({x:67.7},0).wait(1).to({x:73.8},0).wait(1).to({x:80},0).wait(1).to({x:86.1},0).wait(1).to({x:92.2},0).wait(1).to({x:98.4},0).wait(1).to({x:104.5},0).wait(1).to({x:110.6},0).wait(1).to({x:116.7},0).wait(1).to({x:122.9},0).wait(1).to({x:129},0).wait(1).to({x:135.1},0).wait(1).to({x:141.2},0).wait(1).to({x:147.4},0).wait(1).to({x:153.5},0).wait(1).to({x:159.6},0).wait(1).to({x:165.8},0).wait(1).to({x:171.9},0).wait(1).to({x:178},0).wait(1).to({x:184.1},0).wait(1).to({x:190.3},0).wait(1).to({x:196.4},0).wait(1).to({x:202.5},0).wait(1).to({x:208.6},0).to({_off:true},1).wait(113).to({_off:false,x:-91.6},0).wait(1).to({x:-85.5},0).wait(1).to({x:-79.3},0).wait(1).to({x:-73.2},0).wait(1).to({x:-67.1},0).wait(1).to({x:-61},0).wait(1).to({x:-54.8},0).wait(1).to({x:-48.7},0).wait(1).to({x:-42.6},0).wait(1).to({x:-36.5},0).wait(1).to({x:-30.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-18.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-5.8},0).wait(1).to({x:0.3},0).wait(1).to({x:6.4},0).wait(1).to({x:12.6},0).wait(1).to({x:18.7},0).wait(1).to({x:24.8},0).wait(1).to({x:30.9},0).wait(1).to({x:37.1},0).wait(1).to({x:43.2},0).wait(1).to({x:49.3},0).wait(1).to({x:55.5},0).wait(1).to({x:61.6},0).wait(1).to({x:67.7},0).wait(1).to({x:73.8},0).wait(1).to({x:80},0).wait(1).to({x:86.1},0).wait(1).to({x:92.2},0).wait(1).to({x:98.4},0).wait(1).to({x:104.5},0).wait(1).to({x:110.6},0).wait(1).to({x:116.7},0).wait(1).to({x:122.9},0).wait(1).to({x:129},0).wait(1).to({x:135.1},0).wait(1).to({x:141.2},0).wait(1).to({x:147.4},0).wait(1).to({x:153.5},0).wait(1).to({x:159.6},0).wait(1).to({x:165.8},0).wait(1).to({x:171.9},0).wait(1).to({x:178},0).wait(1).to({x:184.1},0).wait(1).to({x:190.3},0).wait(1).to({x:196.4},0).wait(1).to({x:202.5},0).wait(1).to({x:208.6},0).to({_off:true},1).wait(93).to({_off:false,x:-91.6},0).wait(1).to({x:-85.5},0).wait(1).to({x:-79.3},0).wait(1).to({x:-73.2},0).wait(1).to({x:-67.1},0).wait(1).to({x:-61},0).wait(1).to({x:-54.8},0).wait(1).to({x:-48.7},0).wait(1).to({x:-42.6},0).wait(1).to({x:-36.5},0).wait(1).to({x:-30.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-18.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-5.8},0).wait(1).to({x:0.3},0).wait(1).to({x:6.4},0).wait(1).to({x:12.6},0).wait(1).to({x:18.7},0).wait(1).to({x:24.8},0).wait(1).to({x:30.9},0).wait(1).to({x:37.1},0).wait(1).to({x:43.2},0).wait(1).to({x:49.3},0).wait(1).to({x:55.5},0).wait(1).to({x:61.6},0).wait(1).to({x:67.7},0).wait(1).to({x:73.8},0).wait(1).to({x:80},0).wait(1).to({x:86.1},0).wait(1).to({x:92.2},0).wait(1).to({x:98.4},0).wait(1).to({x:104.5},0).wait(1).to({x:110.6},0).wait(1).to({x:116.7},0).wait(1).to({x:122.9},0).wait(1).to({x:129},0).wait(1).to({x:135.1},0).wait(1).to({x:141.2},0).wait(1).to({x:147.4},0).wait(1).to({x:153.5},0).wait(1).to({x:159.6},0).wait(1).to({x:165.8},0).wait(1).to({x:171.9},0).wait(1).to({x:178},0).wait(1).to({x:184.1},0).wait(1).to({x:190.3},0).wait(1).to({x:196.4},0).wait(1).to({x:202.5},0).wait(1).to({x:208.6},0).to({_off:true},1).wait(113).to({_off:false,x:-91.6},0).wait(1).to({x:-85.5},0).wait(1).to({x:-79.3},0).wait(1).to({x:-73.2},0).wait(1).to({x:-67.1},0).wait(1).to({x:-61},0).wait(1).to({x:-54.8},0).wait(1).to({x:-48.7},0).wait(1).to({x:-42.6},0).wait(1).to({x:-36.5},0).wait(1).to({x:-30.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-18.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-5.8},0).wait(1).to({x:0.3},0).wait(1).to({x:6.4},0).wait(1).to({x:12.6},0).wait(1).to({x:18.7},0).wait(1).to({x:24.8},0).wait(1).to({x:30.9},0).wait(1).to({x:37.1},0).wait(1).to({x:43.2},0).wait(1).to({x:49.3},0).wait(1).to({x:55.5},0).wait(1).to({x:61.6},0).wait(1).to({x:67.7},0).wait(1).to({x:73.8},0).wait(1).to({x:80},0).wait(1).to({x:86.1},0).wait(1).to({x:92.2},0).wait(1).to({x:98.4},0).wait(1).to({x:104.5},0).wait(1).to({x:110.6},0).wait(1).to({x:116.7},0).wait(1).to({x:122.9},0).wait(1).to({x:129},0).wait(1).to({x:135.1},0).wait(1).to({x:141.2},0).wait(1).to({x:147.4},0).wait(1).to({x:153.5},0).wait(1).to({x:159.6},0).wait(1).to({x:165.8},0).wait(1).to({x:171.9},0).wait(1).to({x:178},0).wait(1).to({x:184.1},0).wait(1).to({x:190.3},0).wait(1).to({x:196.4},0).wait(1).to({x:202.5},0).wait(1).to({x:208.6},0).to({_off:true},1).wait(88).to({_off:false,x:-91.6},0).wait(1).to({x:-85.5},0).wait(1).to({x:-79.3},0).wait(1).to({x:-73.2},0).wait(1).to({x:-67.1},0).wait(1).to({x:-61},0).wait(1).to({x:-54.8},0).wait(1).to({x:-48.7},0).wait(1).to({x:-42.6},0).wait(1).to({x:-36.5},0).wait(1).to({x:-30.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-18.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-5.8},0).wait(1).to({x:0.3},0).wait(1).to({x:6.4},0).wait(1).to({x:12.6},0).wait(1).to({x:18.7},0).wait(1).to({x:24.8},0).wait(1).to({x:30.9},0).wait(1).to({x:37.1},0).wait(1).to({x:43.2},0).wait(1).to({x:49.3},0).wait(1).to({x:55.5},0).wait(1).to({x:61.6},0).wait(1).to({x:67.7},0).wait(1).to({x:73.8},0).wait(1).to({x:80},0).wait(1).to({x:86.1},0).wait(1).to({x:92.2},0).wait(1).to({x:98.4},0).wait(1).to({x:104.5},0).wait(1).to({x:110.6},0).wait(1).to({x:116.7},0).wait(1).to({x:122.9},0).wait(1).to({x:129},0).wait(1).to({x:135.1},0).wait(1).to({x:141.2},0).wait(1).to({x:147.4},0).wait(1).to({x:153.5},0).wait(1).to({x:159.6},0).wait(1).to({x:165.8},0).wait(1).to({x:171.9},0).wait(1).to({x:178},0).wait(1).to({x:184.1},0).wait(1).to({x:190.3},0).wait(1).to({x:196.4},0).wait(1).to({x:202.5},0).wait(1).to({x:208.6},0).to({_off:true},1).wait(23));

	// btn
	this.instance_7 = new lib.btn();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62.6,225.7,0.5,0.5,0,0,0,104.3,43.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({y:210.7,alpha:1},14,cjs.Ease.get(1)).wait(838));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(151.4,124.5,0.5,0.5,0,0,0,302.7,249);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(884));

	// man
	this.instance_9 = new lib.man();
	this.instance_9.parent = this;
	this.instance_9.setTransform(288.5,130.8,0.5,0.5,0,0,0,185,238.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:207.5},14,cjs.Ease.get(1)).wait(870));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,381,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Man.jpg", id:"Man"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;