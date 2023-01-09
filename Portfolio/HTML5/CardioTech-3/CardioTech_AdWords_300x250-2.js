(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"CardioTech_AdWords_300x250_2_atlas_P_", frames: [[0,158,113,96],[291,0,101,202],[115,204,124,19],[0,0,289,156]]}
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



(lib.achive = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_2_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_2_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_2_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pc1 = function() {
	this.initialize(img.pc1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.pc2 = function() {
	this.spriteSheet = ss["CardioTech_AdWords_300x250_2_atlas_P_"];
	this.gotoAndStop(3);
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


(lib.txt31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrB5IAAjxIAlAAIAADUIAyAAIAAAdg");
	this.shape.setTransform(115.2,84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqB5IAAjxIAkAAIAADUIAyAAIAAAdg");
	this.shape_1.setTransform(104.2,84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSB5IAAjxIAkAAIAADxg");
	this.shape_2.setTransform(93.9,84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvB5IAAhQIABgkIAAgdIACgaIABgRIgDAAIgkCdIgXAAIgkidIgDAAIABARIABAaIABAdIABAkIAABQIgiAAIAAjxIAwAAIAXBdIAFAeIAEAaIABAAIAEgaIAGgeIAXhdIAwAAIAADxg");
	this.shape_3.setTransform(79.8,84.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6B5IAAjxIAnAAIARAAQAJABAJACQAIADAIAFQAIAGAGAKQAGAJAEAPQADAOAAAVIAABFQAAAVgDAOQgEAQgGAJQgGAJgIAGQgIAFgIACQgJADgJABIgRAAgAgVBfIAJAAQAKAAAGgCQAGgCAEgHQAEgGABgLQACgMAAgRIAAhKQAAgRgCgLQgBgLgEgHQgEgGgGgDQgGgCgKAAIgJAAg");
	this.shape_4.setTransform(62.5,84.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdB5IgHgsIgrAAIgGAsIgmAAIAtjxIApAAIAtDxgAgRAyIAjAAIgRh3IgBAAg");
	this.shape_5.setTransform(47.7,84.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABIIApAAIAAAcIgpAAIAABTIA1AAIAAAdg");
	this.shape_6.setTransform(35.7,84.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVB5IgehaIgPAAIAABaIgkAAIAAjxIApAAIAOAAIAQADQAIACAIAFQAHAEAGAIQAFAHAEANQAEALAAAQIAAAGQAAAcgIARQgIARgQAHIAoBhgAgYAEIAGAAQAKAAAHgCQAFgCAEgEQAFgFABgJQACgIAAgMIAAgTQAAgJgCgIQgCgGgDgEQgFgFgFgCQgHgCgKAAIgGAAg");
	this.shape_7.setTransform(22.4,84.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRB5IAAjUIgnAAIAAgdIBxAAIAAAdIgnAAIAADUg");
	this.shape_8.setTransform(8.1,84.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsB5IAAjxIBZAAIAAAdIg0AAIAABJIAnAAIAAAcIgnAAIAABSIA1AAIAAAdg");
	this.shape_9.setTransform(116.3,51.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABJIApAAIAAAcIgpAAIAABSIA1AAIAAAdg");
	this.shape_10.setTransform(104.6,51.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVB5IgehbIgPAAIAABbIgkAAIAAjxIApAAIAOAAIAQAEQAIACAIAEQAHAEAGAIQAFAIAEALQAEAMAAAQIAAAHQAAAbgIARQgIAQgQAJIAoBggAgYAEIAGAAQAKAAAHgCQAFgCAEgEQAFgGABgHQACgJAAgMIAAgTQAAgKgCgGQgCgHgDgFQgFgEgFgCQgHgCgKAAIgGAAg");
	this.shape_11.setTransform(91.2,51.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBbAAIAAAdIg2AAIAABJIAqAAIAAAcIgqAAIAABvg");
	this.shape_12.setTransform(78.1,51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWB5IgshzIgBAAIAABzIglAAIAAjxIAlAAIAABqIABAAIAphqIAlAAIgvBxIA0CAg");
	this.shape_13.setTransform(65.3,51.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdB5IgHgsIgrAAIgGAsIgmAAIAtjxIApAAIAtDxgAgRAyIAjAAIgRh4IgBAAg");
	this.shape_14.setTransform(50.3,51.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsB5IAAjxIBZAAIAAAdIg1AAIAABJIApAAIAAAcIgpAAIAABSIA1AAIAAAdg");
	this.shape_15.setTransform(38.3,51.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVB5IgehbIgOAAIAABbIglAAIAAjxIAoAAIAPAAIAQAEQAIACAIAEQAHAEAGAIQAFAIAEALQAEAMAAAQIAAAHQAAAbgIARQgIAQgQAJIAnBggAgXAEIAFAAQAKAAAGgCQAGgCAEgEQAEgGACgHQACgJAAgMIAAgTQAAgKgCgGQgCgHgDgFQgFgEgFgCQgHgCgKAAIgFAAg");
	this.shape_16.setTransform(25,51.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5B5IAAjxIAlAAIARAAIAQADQAJACAHADQAIAEAFAGQAGAGADAJQADAKAAAMIAAAMQAAAKgCAIQgDAHgFAGQgEAHgGAEQgGAEgGABIAAABQASADAJANQAJAOAAAWIAAAMQAAAOgDAJQgCAJgGAIQgFAGgHAFQgHAEgJADIgSADIgUABgAgVBfIAKAAQAIAAAFgCQAGgCAEgDQAEgFADgGQACgGAAgIIAAgTQAAgIgCgHQgBgHgEgEQgEgFgGgCQgGgDgJABIgKAAgAgVgQIAHAAQAHgBAGgBQAGgCAEgEQAEgEADgGQACgFAAgJIAAgKQAAgIgCgHQgCgGgDgFQgEgEgHgCQgFgDgJAAIgHAAg");
	this.shape_17.setTransform(9.9,51.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWB5IAAhwIgrAAIAABwIglAAIAAjxIAlAAIAABlIArAAIAAhlIAkAAIAADxg");
	this.shape_18.setTransform(126.6,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIB7QgGgBgHgEQgGgDgGgFQgHgFgEgJQgFgKgCgNQgDgNAAgSIAAhVQAAgRADgOQACgNAFgIQAFgKAGgFQAGgFAGgDQAHgDAGAAIALgBQAPAAAKAEQAJAEAGAHQAGAHADAJQACAKAAAKIgBAPIgCAOIgeAAIAAgMQAAgUgEgKQgFgKgIAAQgEAAgEACQgEACgCAFQgDAFgBAHQgCAIAAALIAABuIABATQABAIADAEQACAFAEACQAEACAFAAQADgBADgBQAEgCACgEQADgDABgFQACgGAAgGIAAgZIAhAAIAAAXQAAAdgNAOQgOAOgYAAIgMAAg");
	this.shape_19.setTransform(112.3,19.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABIIApAAIAAAcIgpAAIAABTIA1AAIAAAdg");
	this.shape_20.setTransform(100.3,19.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRB5IAAjUIgnAAIAAgdIBxAAIAAAdIgnAAIAADUg");
	this.shape_21.setTransform(87.5,19.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMB7QgGgBgHgEQgGgDgHgFQgGgFgFgJQgEgKgDgNQgDgNAAgSIAAhVQAAgRADgOQADgNAEgIQAGgKAFgFQAHgFAHgDQAGgDAHAAIALgBIAMABQAGAAAIADQAGADAGAFQAGAFAFAJQAFAJADANQADANAAASIAABVQAAASgDANQgDANgFAJQgFAJgGAFQgHAGgGADQgGADgHABIgMABIgMAAgAgIhbQgEACgDAFQgDAEgBAIQgCAIAAALIAABuQAAALACAIQABAHADAEQADAFAEACQAEACAEAAQAFAAAFgCQADgCAEgFQACgEABgHIABgTIAAhuIgBgTQgBgIgCgEQgEgFgDgCQgFgCgFAAQgEAAgEACg");
	this.shape_22.setTransform(74,19.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSB5IAAjxIAkAAIAADxg");
	this.shape_23.setTransform(62.7,19.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag6B5IAAjxIAnAAIARABQAJAAAJACQAIADAIAFQAIAGAGAKQAGAJAEAOQADAPAAAVIAABFQAAAVgDAOQgEAQgGAJQgGAKgIAEQgIAGgIACQgJADgJABIgRAAgAgVBgIAJAAQAKgBAGgCQAGgCAEgHQAEgHABgKQACgMAAgRIAAhKQAAgRgCgLQgBgLgEgHQgEgGgGgDQgGgCgKAAIgJAAg");
	this.shape_24.setTransform(51.7,19.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWB5IgfhaIgPAAIAABaIgkAAIAAjxIApAAIAPABIAPACQAIACAHAFQAIAFAGAHQAGAIAEALQADAMAAAQIAAAGQAAAcgIARQgIAQgPAJIAnBggAgYAEIAGAAQAKAAAHgCQAFgCAEgEQAEgFACgJQACgIAAgMIAAgTQAAgJgBgIQgDgGgEgEQgDgFgGgCQgHgCgKAAIgGAAg");
	this.shape_25.setTransform(37.1,19.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdB5IgHgrIgrAAIgGArIgmAAIAtjxIApAAIAtDxgAgRAyIAjAAIgRh4IgBAAg");
	this.shape_26.setTransform(22.1,19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIB7QgGgBgHgEQgGgDgGgFQgHgFgEgJQgFgKgCgNQgDgNAAgSIAAhVQAAgRADgOQACgNAFgIQAFgKAGgFQAGgFAGgDQAHgDAGAAIALgBQAPAAAKAEQAJAEAGAHQAGAHADAJQACAKAAAKIgBAPIgCAOIgeAAIAAgMQAAgUgEgKQgFgKgIAAQgEAAgEACQgEACgCAFQgDAFgBAHQgCAIAAALIAABuIABATQABAIADAEQACAFAEACQAEACAFAAQADgBADgBQAEgCACgEQADgDABgFQACgGAAgGIAAgZIAhAAIAAAXQAAAdgNAOQgOAOgYAAIgMAAg");
	this.shape_27.setTransform(8.9,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt31, new cjs.Rectangle(0,0,136.7,105.4), null);


(lib.txt23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2CBFC").s().p("AgYC8QgJgKAAgVQAAgXAJgKQAJgKAPAAQAQAAAJALQAJALAAAVQAAAUgJAKQgJALgQAAQgPABgJgLgAgWBLIgIkRIA7AAIgHERg");
	this.shape.setTransform(274.8,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2CBFC").s().p("AgbC5IAAh7IhLj2IA5AAIAtCxIACAAIAtixIA4AAIhLD2IAAB7g");
	this.shape_1.setTransform(256.8,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2CBFC").s().p("AhBC5IAAlxIA4AAIAAFFIBLAAIAAAsg");
	this.shape_2.setTransform(239.4,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2CBFC").s().p("AhCC5IAAlxIA5AAIAAFFIBLAAIAAAsg");
	this.shape_3.setTransform(222.5,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2CBFC").s().p("AAsC5IgKhCIhDAAIgKBCIg5AAIBFlxIBAAAIBEFxgAgbBMIA2AAIgai4IgBAAg");
	this.shape_4.setTransform(202.2,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2CBFC").s().p("AgMC7QgKgBgKgEQgLgFgJgJQgJgIgHgNQgHgPgEgUQgFgTAAgcIAAiDQAAgcAFgTQAEgVAHgNQAHgNAKgJQAJgIAKgEQAKgFAKAAIARgCQAWAAAPAGQAPAHAJAKQAJALAEAPQAEAOAAAQIgBAWIgEAWIguAAIAAgTQAAgfgGgOQgHgQgNAAQgHAAgGADQgGADgEAIQgEAHgBAMQgDAMAAARIAACpQAAARACAMQACAMADAGQAEAIAGACQAGADAHAAQAGAAAFgCQAFgDAEgFQADgFADgJQACgIAAgLIAAgkIA0AAIAAAiQAAAtgVAVQgUAVgnABIgRgCg");
	this.shape_5.setTransform(182,28.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2CBFC").s().p("AgbC5IAAlxIA3AAIAAFxg");
	this.shape_6.setTransform(165.4,28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2CBFC").s().p("AgbC5IAAlFIg8AAIAAgsICvAAIAAAsIg8AAIAAFFg");
	this.shape_7.setTransform(150,28.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2CBFC").s().p("AAsC5IgKhCIhDAAIgKBCIg5AAIBElxIBBAAIBEFxgAgbBMIA2AAIgai4IgBAAg");
	this.shape_8.setTransform(130.1,28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2CBFC").s().p("ABJC5IAAh7IAAg2IABgvIACgmIADgaIgFAAIg4DxIgiAAIg5jxIgEAAIACAaIACAmIACAvIAAA2IAAB7Ig1AAIAAlxIBJAAIAkCPQAGAYADAVIAGAoIABAAIAHgoIAJgtIAkiPIBIAAIAAFxg");
	this.shape_9.setTransform(103.9,28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2CBFC").s().p("AgSC7QgKgBgKgEQgLgFgJgJQgJgIgIgNQgHgPgFgUQgEgTAAgcIAAiDQAAgcAEgTQAFgVAIgNQAHgNAJgJQAJgIALgEQAKgFALAAIARgCIATACQAKABAKADQAKAFAJAIQAKAHAHAOQAIAOAFAUQAEAUAAAcIAACDQAAAcgEATQgGAUgHAOQgHANgKAJQgJAIgLAFQgKAEgKACQgJACgJAAIgSgCgAgOiMQgFADgFAHQgEAHgCAMQgCAMAAASIAACnQAAASACALQACAMAEAHQAFAGAFADQAHAEAHAAQAJAAAGgEQAGgDAEgGQAEgHACgMQACgLAAgSIAAinQAAgSgCgMQgCgMgEgHQgEgHgGgDQgGgDgJgBQgHABgHADg");
	this.shape_10.setTransform(76.9,28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2CBFC").s().p("AgbC5IAAlFIg8AAIAAgsICvAAIAAAsIg8AAIAAFFg");
	this.shape_11.setTransform(56.2,28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B2CBFC").s().p("AgRC6QgKgBgKgEQgKgEgIgIQgKgHgHgNQgHgNgEgUQgFgTAAgbIAAkAIA5AAIAAEPQAAARACAMQACALAEAHQADAHAHADQAFADAIAAQAIAAAGgDQAGgDAEgHQAEgHADgLQABgMAAgRIAAkPIA4AAIAAEAQAAAbgEATQgEAUgIANQgGANgKAHQgJAIgKAEQgKAEgKABIgRABIgRgBg");
	this.shape_12.setTransform(34.9,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2CBFC").s().p("AAsC5IgKhCIhDAAIgJBCIg6AAIBFlxIBAAAIBEFxgAgbBMIA2AAIgZi4IgCAAg");
	this.shape_13.setTransform(12.5,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt23, new cjs.Rectangle(0,0,284.5,60), null);


(lib.txt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBQIAAifIA6AAIAAATIgiAAIAAAwIAaAAIAAASIgaAAIAAA3IAjAAIAAATg");
	this.shape.setTransform(275.7,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBQIglhoIgBAAIABAKIABALIAAAPIABAVIAAAvIgWAAIAAifIAUAAIAlBqIABAAIgBgIIgBgKIAAgNIgBgRIAAg6IAWAAIAACfg");
	this.shape_1.setTransform(266.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBRIgJgDQgFgCgDgDQgEgEgEgGQgDgGgCgJQgCgIAAgMIAAg4QABgMACgJQABgIADgGQADgGAFgDIAIgGIAJgCIAHAAIAIAAIAJACIAJAGQADADADAGQAEAGABAIQACAJAAAMIAAA4QAAAMgCAIQgBAJgEAGQgDAGgEAEQgEADgEACIgJADIgIABIgHgBgAgFg8QgDABgBAEQgCADgCAEIgBAOIAABHIABANIAEAHQABADADACIAFABIAHgBIAEgFIACgHIABgNIAAhHIgBgOIgCgHQgCgEgCgBQgDgCgEABQgCgBgDACg");
	this.shape_2.setTransform(255.9,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBQIAAgNIAvh/IgnAAIAAgTIBDAAIAAAMIgvCAIArAAIAAATg");
	this.shape_3.setTransform(247,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBRQgEgBgEgBIgIgGQgEgEgDgGQgDgGgCgJQgCgIAAgMIAAg4QAAgMACgJQACgIAEgGQADgGAEgDIAJgGIAJgCIAIAAQAJgBAHADQAHADAEAFQAEAEACAGQACAHAAAHIgBAJIgCAKIgTAAIAAgIQAAgbgOABQgDgBgDACQgDABgBAEQgCADgBAEIgBAOIAABHIABAMQABAGACACQABADADACIAGABQAEAAADgCQADgCABgEIADgJIABgKIAAgVIgMAAIAAgPIAkAAIAABQIgQAAIgDgPQgFAIgGAEQgGAFgHAAIgGgBg");
	this.shape_4.setTransform(233.9,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATBQIglhoIgBAAIABAKIABALIAAAPIABAVIAAAvIgWAAIAAifIAUAAIAlBqIABAAIgBgIIgBgKIAAgNIgBgRIAAg6IAWAAIAACfg");
	this.shape_5.setTransform(223.7,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBQIAAifIAXAAIAACfg");
	this.shape_6.setTransform(215.8,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBQIglhoIgBAAIABAKIABALIAAAPIABAVIAAAvIgWAAIAAifIAUAAIAlBqIABAAIgBgIIgBgKIAAgNIgBgRIAAg6IAWAAIAACfg");
	this.shape_7.setTransform(207.9,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOBQIgUg8IgJAAIAAA8IgYAAIAAifIAaAAIAKAAIALACIAKAFQAEACAFAGQAEAFACAHQACAIAAAKIAAAEQAAATgFALQgGALgKAFIAaBAgAgPACIADAAQAHABAFgCQADgBACgDQAEgDABgGIABgNIAAgMIgBgMQgBgEgDgCQgDgEgDgBQgFgCgHABIgDAAg");
	this.shape_8.setTransform(198.2,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBQIgIgCIgIgFQgEgDgDgGQgDgGgCgIQgCgIAAgMIAAhuIAYAAIAAB1IABAMQABAFACADQABADADABIAFABIAGgBIAFgEIACgIIABgMIAAh1IAYAAIAABuQAAAMgCAIQgCAIgDAGQgDAGgEADIgIAFIgIACIgIABIgHgBg");
	this.shape_9.setTransform(187.7,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBQIAAifIAZAAIALAAQAFABAGABQAFABAFADQAFACAEAEQADAEADAGQACAGAAAIIAAAIQAAAHgCAEQgCAGgDAEIgHAHQgDADgEAAIAAABQALACAHAJQAGAIAAAPIAAAIQAAAJgCAGQgCAGgEAFQgDAFgFADQgFADgGABQgFACgHABIgMAAgAgOA/IAHAAIAIgBQAEgCADgCQADgDABgEQACgEAAgGIAAgMIgBgKQgBgFgDgDQgDgDgEgBQgDgCgGAAIgHAAgAgOgKIAFAAIAJgCIAGgDQADgDABgEQACgEAAgGIAAgGIgBgKQgCgEgCgDQgDgEgEgBQgDgCgGABIgFAAg");
	this.shape_10.setTransform(178,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBQIAAiMIgaAAIAAgTIBLAAIAAATIgaAAIAACMg");
	this.shape_11.setTransform(164.7,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBQIgFgcIgcAAIgEAcIgYAAIAdifIAbAAIAdCfgAgLAhIAXAAIgMhOIAAAAg");
	this.shape_12.setTransform(156.1,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeBQIAAifIA9AAIAAATIgkAAIAAAwIAcAAIAAASIgcAAIAABKg");
	this.shape_13.setTransform(148.2,12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOBQIgUg8IgJAAIAAA8IgYAAIAAifIAaAAIAKAAIALACIAKAFQAEACAFAGQAEAFACAHQACAIAAAKIAAAEQAAATgFALQgGALgKAFIAaBAgAgPACIADAAQAHABAFgCQADgBACgDQAEgDABgGIABgNIAAgMIgBgMQgBgEgDgCQgDgEgDgBQgFgCgHABIgDAAg");
	this.shape_14.setTransform(135.2,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHBQIgIgCIgIgFQgEgDgDgGQgDgGgCgIQgCgIAAgMIAAhuIAYAAIAAB1IABAMQABAFACADQABADADABIAFABIAGgBIAFgEIACgIIABgMIAAh1IAYAAIAABuQAAAMgCAIQgCAIgDAGQgDAGgEADIgIAFIgIACIgIABIgHgBg");
	this.shape_15.setTransform(124.7,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHBRIgJgDQgFgCgEgDQgDgEgEgGQgDgGgCgJQgBgIAAgMIAAg4QAAgMACgJQABgIADgGQAEgGADgDIAJgGIAJgCIAHAAIAIAAIAJACIAJAGQADADAEAGQADAGABAIQACAJAAAMIAAA4QAAAMgCAIQgBAJgDAGQgDAGgFAEQgEADgEACIgJADIgIABIgHgBgAgFg8QgDABgBAEQgCADgCAEIgBAOIAABHIABANIAEAHQABADADACIAFABIAHgBIAEgFIACgHIACgNIAAhHIgCgOIgCgHQgCgEgCgBQgEgCgDABQgDgBgCACg");
	this.shape_16.setTransform(114.7,12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBQIAAg1IgfhqIAYAAIATBMIABAAIAThMIAYAAIggBqIAAA1g");
	this.shape_17.setTransform(105.3,12.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATBQIglhoIgBAAIABAKIABALIAAAPIABAVIAAAvIgWAAIAAifIAUAAIAlBqIABAAIgBgIIgBgKIAAgNIgBgRIAAg6IAWAAIAACfg");
	this.shape_18.setTransform(91.4,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLBQIAAifIAXAAIAACfg");
	this.shape_19.setTransform(83.5,12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHBQIgIgCIgIgFQgEgDgDgGQgDgGgCgIQgCgIAAgMIAAhuIAYAAIAAB1IABAMQABAFACADQABADADABIAFABIAGgBIAFgEIACgIIABgMIAAh1IAYAAIAABuQAAAMgCAIQgCAIgDAGQgDAGgEADIgIAFIgIACIgIABIgHgBg");
	this.shape_20.setTransform(71.7,13);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHBRIgJgDQgEgCgFgDQgEgEgDgGQgDgGgCgJQgBgIAAgMIAAg4QAAgMACgJQABgIADgGQAEgGADgDIAJgGIAJgCIAHAAIAIAAIAJACIAJAGQADADAEAGQADAGABAIQACAJAAAMIAAA4QAAAMgCAIQgCAJgCAGQgEAGgEAEQgEADgEACIgJADIgIABIgHgBgAgFg8QgDABgBAEQgCADgBAEIgCAOIAABHIACANIADAHQABADADACIAFABIAHgBIAEgFIADgHIABgNIAAhHIgBgOIgDgHQgCgEgCgBQgDgCgEABQgDgBgCACg");
	this.shape_21.setTransform(61.7,12.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMBQIAAg1IgfhqIAYAAIATBMIABAAIAThMIAZAAIghBqIAAA1g");
	this.shape_22.setTransform(52.3,12.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBPQgHgDgEgFQgEgFgCgGQgCgGAAgHIABgJIACgKIATAAIAAAJIAAALIADAIQACAEADACQADABAEAAQAGAAAEgEQAEgEAAgHIgBgHIgCgGIgDgHIgGgHIgYgdQgHgJgDgIQgEgKAAgJQAAgIACgHQADgHAFgEQAEgFAHgDQAHgDAIABQAKAAAHACQAIAEAEAEQAEAFACAGQABAHAAAGIAAAJIgCAKIgTAAIAAgIQAAgNgEgGQgDgIgIABQgGAAgEADQgDAEAAAGIAAAGIACAGIACAEIADAFIAcAhQAHAKAFAJQAEAKAAAKQAAAIgDAHQgDAHgFAFQgFAEgHADQgHACgIABQgKAAgIgDg");
	this.shape_23.setTransform(39.2,12.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkBQIAAifIAZAAIAKAAQAEAAAGACQAFACAFADQAFADAEAGQAEAFADAIQACAJAAALIAAAGQAAANgCAJQgCAIgEAGQgEAHgFADIgKAGIgKACIgJABIgCAAIAAAxgAgLANIABAAQAGAAAEgCQAFgBACgFQACgEACgFIABgPIAAgPIgBgMQgBgFgCgDQgDgEgFgCQgEgBgGAAIgBAAg");
	this.shape_24.setTransform(30.6,12.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdBQIAAifIA6AAIAAATIgiAAIAAAwIAaAAIAAASIgaAAIAAA3IAjAAIAAATg");
	this.shape_25.setTransform(22.1,12.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdBQIAAifIA6AAIAAATIgiAAIAAAwIAaAAIAAASIgaAAIAAA3IAjAAIAAATg");
	this.shape_26.setTransform(14.3,12.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAOBQIgchMIgBAAIAABMIgYAAIAAifIAYAAIAABGIABAAIAbhGIAYAAIgfBLIAiBUg");
	this.shape_27.setTransform(5.8,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(-1.6,-0.6,283.2,28.4), null);


(lib.txt21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpB1IAAjoIAkAAIAADMIAvAAIAAAcg");
	this.shape.setTransform(186.1,-96.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLB2QgGgBgHgDQgGgDgGgFQgGgGgFgIQgEgJgDgMQgDgNAAgSIAAhRQAAgSADgMQADgMAEgJQAFgJAGgFQAGgEAHgEQAGgCAGgBIALAAIAMAAIANADQAGADAGAFQAGAFAEAIQAFAJADANQADAMAAASIAABRQAAASgDANQgDAMgFAIQgEAJgGAGQgGAFgHADIgMAEIgMAAIgLAAgAgIhYQgEACgDAFQgCAEgBAHQgCAIAAALIAABqQAAAKACAIQABAGACAFQADAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEQACgFACgGIABgSIAAhqIgBgTQgCgHgCgEQgDgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_1.setTransform(172.9,-96.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVB1IgehYIgOAAIAABYIgiAAIAAjoIAnAAIANAAIAPACQAIACAIAFQAHAEAFAHQAGAIADALQAEALAAAQIAAAGQAAAbgHAQQgJAQgOAHIAlBegAgXAEIAGAAQAJAAAHgDQAFgBAEgEQAEgFABgIQADgIAAgLIAAgTQAAgJgCgGQgCgHgDgEQgEgEgGgDQgGgCgKAAIgGAAg");
	this.shape_2.setTransform(159.3,-96.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQB1IAAjNIgmAAIAAgbIBtAAIAAAbIglAAIAADNg");
	this.shape_3.setTransform(145.6,-96.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcB1Ig4iXIAAAAIAAANIACARIABAWIAAAeIAABFIgfAAIAAjoIAcAAIA4CaIABAAIgBgMIgCgPIAAgTIgBgYIAAhUIAgAAIAADog");
	this.shape_4.setTransform(132,-96.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLB2QgGgBgHgDQgGgDgGgFQgGgGgFgIQgEgJgDgMQgDgNAAgSIAAhRQAAgSADgMQADgMAEgJQAFgJAGgFQAGgEAHgEQAGgCAGgBIALAAIAMAAIANADQAGADAGAFQAGAFAEAIQAFAJADANQADAMAAASIAABRQAAASgDANQgDAMgFAIQgEAJgGAGQgGAFgHADIgMAEIgMAAIgLAAgAgIhYQgEACgDAFQgCAEgBAHQgCAIAAALIAABqQAAAKACAIQABAGACAFQADAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEQACgFACgGIABgSIAAhqIgBgTQgCgHgCgEQgDgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_5.setTransform(117.2,-96.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHB2QgHgBgGgDQgGgDgGgFQgGgGgEgIQgFgJgDgMQgCgNAAgSIAAhRQAAgSACgMQADgMAFgJQAEgJAGgFQAGgEAGgEIANgDIAKAAQAOAAAKADQAJAEAGAHQAFAGADAJQACAKAAAKIgBAOIgCANIgdAAIAAgLQAAgUgEgJQgEgJgIAAQgEAAgEACQgEABgCAFQgDAEgBAIQgBAHAAALIAABqIABASQABAIACADQADAFADACQAEACAEAAQAEAAADgBIAGgGIADgIQACgGAAgGIAAgXIAgAAIAAAWQAAAbgNAOQgNANgYAAIgKAAg");
	this.shape_6.setTransform(104,-96.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrB1IAAjoIBWAAIAAAbIgyAAIAABGIAmAAIAAAbIgmAAIAABQIAzAAIAAAcg");
	this.shape_7.setTransform(86.5,-96.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRB1IAAjNIglAAIAAgbIBtAAIAAAbIglAAIAADNg");
	this.shape_8.setTransform(74.2,-96.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcB1IgHgrIgqAAIgFArIgkAAIAqjoIApAAIArDogAgQAwIAhAAIgQhzIgBAAg");
	this.shape_9.setTransform(61.8,-96.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVB1IgehYIgOAAIAABYIgiAAIAAjoIAnAAIANAAIAPACQAIACAIAFQAHAEAFAHQAGAIADALQAEALAAAQIAAAGQAAAbgHAQQgJAQgOAHIAlBegAgXAEIAGAAQAJAAAHgDQAFgBAEgEQAEgFACgIQACgIAAgLIAAgTQgBgJgBgGQgCgHgEgEQgDgEgGgDQgHgCgJAAIgGAAg");
	this.shape_10.setTransform(48.7,-96.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQB1IAAjNIgmAAIAAgbIBtAAIAAAbIglAAIAADNg");
	this.shape_11.setTransform(29,-96.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVB1IgehYIgOAAIAABYIgiAAIAAjoIAnAAIANAAIAPACQAIACAIAFQAHAEAFAHQAGAIADALQAEALAAAQIAAAGQAAAbgHAQQgJAQgOAHIAlBegAgXAEIAGAAQAJAAAHgDQAFgBAEgEQAEgFABgIQADgIAAgLIAAgTQAAgJgCgGQgCgHgDgEQgEgEgGgDQgGgCgKAAIgGAAg");
	this.shape_12.setTransform(16.6,-96.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcB1IgHgrIgqAAIgGArIgkAAIArjoIApAAIArDogAgQAwIAhAAIgQhzIgBAAg");
	this.shape_13.setTransform(2.3,-96.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrB1IAAjoIBWAAIAAAbIgyAAIAABGIAmAAIAAAbIgmAAIAABQIAzAAIAAAcg");
	this.shape_14.setTransform(-9.3,-96.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVB1IAAhsIgpAAIAABsIgjAAIAAjoIAjAAIAABhIApAAIAAhhIAjAAIAADog");
	this.shape_15.setTransform(-23.3,-96.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVB1IAAhsIgpAAIAABsIgjAAIAAjoIAjAAIAABhIApAAIAAhhIAjAAIAADog");
	this.shape_16.setTransform(-44.5,-96.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRB1IAAjNIglAAIAAgbIBtAAIAAAbIglAAIAADNg");
	this.shape_17.setTransform(-58,-96.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRB1IAAjoIAjAAIAADog");
	this.shape_18.setTransform(-67.6,-96.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAbB1IgThxIgGgvIgCAAIgFAvIgVBxIgjAAIgijoIAiAAIAQCLIACAhIADAAIADglIAZiHIAcAAIAYCHIACAlIAEAAIACghIAOiLIAiAAIghDog");
	this.shape_19.setTransform(-81.5,-96.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt21, new cjs.Rectangle(-97,-115,293,58.1), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B61652").s().p("AgEAhIAAgWIgOgrIALAAIAHAfIAAAAIAIgfIALAAIgOArIAAAWg");
	this.shape.setTransform(39.8,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B61652").s().p("AgLAhIAAhBIALAAIAAA5IAMAAIAAAIg");
	this.shape_1.setTransform(36.6,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B61652").s().p("AgOAhIAAhBIAKAAIAEAAIAEABIAEACIAEADIADAGIAAAIIAAADIAAAJIgDAFIgEAEIgDADIgFABIgDAAIgBAAIAAAUgAgEAGIABAAIADgBIADgDIACgDIAAgHIAAgGIAAgFIgCgDIgDgCIgDgBIgBAAg");
	this.shape_2.setTransform(33.1,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B61652").s().p("AgOAhIAAhBIAKAAIAEAAIAEABIAEACIAEADIACAGIABAIIAAADIgBAJIgCAFIgEAEIgEADIgEABIgDAAIgBAAIAAAUgAgEAGIAAAAIAEgBIADgDIABgDIABgHIAAgGIgBgFIgBgDIgDgCIgEgBIAAAAg");
	this.shape_3.setTransform(29.3,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B61652").s().p("AAIAhIgCgMIgLAAIgCAMIgKAAIAMhBIALAAIAMBBgAgEAOIAJAAIgFghIAAAAg");
	this.shape_4.setTransform(25.2,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B61652").s().p("AgHAhIgEgEQgCgCgBgCIgBgFIABgEIAAgEIAIAAIAAAEIABAEIABAEIACACIACABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgCIgBgDIgCgDIgCgDIgJgLQgDgEgCgEQgBgEAAgDIABgHIADgEIAFgEQACgBADAAQAEAAADABIAFAEIADAEIAAAGIAAADIgBAFIgIAAIAAgEQAAgFgBgDQgCgDgDAAQAAAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAACIABACIABACIABADIALAMIAFAIIACAJIgBAGQgBADgDACIgFADIgGABIgHgBg");
	this.shape_5.setTransform(19.8,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B61652").s().p("AgCAiIgDgBIgEgDIgDgDIgCgHIAAgIIAAgXIAAgIIACgHIADgDIAEgDIAEgBIACAAQAEAAACABQADACACACIACAEIABAGIAAADIgBAFIgIAAIAAgEQAAgFgCgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCAAIgBACIgBAEIgBAFIAAAeIABAFIAAADIACACIACABIACgBIABgBIABgDIABgDIAAgHIAJAAIAAAHQAAAIgEADQgDAEgHAAIgDAAg");
	this.shape_6.setTransform(16.2,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B61652").s().p("AgKAiQgDgBgCgBQgCgDgCgDQgBgDAAgEIABgGIADgGIADgEIADgDIACgBIgCgCIgCgEIgCgEIgBgFIAAgEIABgGQABgDACgBIAFgEIAFgBIAGABIAEAEIADADIAAAFIgBAGIgDAGIgEAFIgCADIgBAAIAKASIABgEIAAgGIAAgBIAAgDIAIAAIABADIAAABQgBAFgBAFIgEAIIAGALIgKAAIgCgEIgGADIgGABIgHgBgAgIALIgCAGIAAAFIADADIACACIAEABIADgBIADgCIgKgUIgDAGgAgEgaIgBADIgBADIABACIAAAEIABADIACADIAAgBIACgCIACgCIABgEIAAgEIAAgCIgBgDIgBgBIgCAAIgCAAIgBABg");
	this.shape_7.setTransform(11.8,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B61652").s().p("AgEAhIAAg5IgLAAIAAgIIAfAAIAAAIIgLAAIAAA5g");
	this.shape_8.setTransform(7.8,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B61652").s().p("AAAAFIgFAMIgIgGIAJgJIgMgCIADgJIALAGIgCgNIAJAAIgCANIALgGIADAJIgMACIAJAKIgIAFg");
	this.shape_9.setTransform(4.1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,43.9,14.1), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAKIgMAZIgPgMIASgUIgZgDIAFgTIAYAMIgEgbIATAAIgFAbIAYgMIAGATIgaADIATAVIgQALg");
	this.shape.setTransform(78.5,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBoIglhjIgBAAIAABjIgfAAIAAjPIAfAAIAABbIABAAIAjhbIAgAAIgoBiIAsBtg");
	this.shape_1.setTransform(69.1,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYBoIgRhkIgFgrIgCAAIgFArIgSBkIggAAIgejPIAfAAIAOB9IABAdIADAAIADghIAXh5IAYAAIAVB5IADAhIADAAIABgdIANh9IAfAAIgeDPg");
	this.shape_2.setTransform(53,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCHIAmkNIAaAAIglENg");
	this.shape_3.setTransform(40.6,36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBpIgLgDQgFgCgGgFQgFgEgEgHQgFgHgBgKQgDgKAAgOIAAhXQAAgNADgKQACgKAEgHQAEgHAGgEQAEgEAHgCQAFgDAGAAIAJgBIAKABIAMACIALAHQAFAEAEAHQAEAGADAKQACAKAAAOIAABXQAAAOgCAKQgDAKgEAHQgFAHgEAEQgGAFgFACIgMADIgKABIgKgBgAgNhLQgFAGAAAOIAABwQAAANAFAGQAFAFAIAAQAJAAAFgFQAFgGAAgNIAAhwQAAgOgFgGQgFgGgJAAQgIAAgFAGg");
	this.shape_4.setTransform(30.9,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBoIAAgYIAYAAIAAiNIgZAXIgPgQIAvgxIAXAAIAAC3IAZAAIAAAYg");
	this.shape_5.setTransform(19.4,35.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJCGIAAgdQgLgBgIgFQgIgEgEgGQgFgGgBgHQgCgHAAgIIAAgMIADgNIAYAAIAAAKQAAARAFAJQAGAJAKAAQAIAAAEgEQAFgFAAgJIAAgHIgDgIIgFgJIgHgKIgfgoQgIgLgGgMQgEgLAAgOQAAgJACgIQADgIAFgGQAFgGAHgEQAHgEAJgBIAAgcIAWAAIAAAcQAKACAHAEQAGAFAFAGQAEAFABAHQACAHAAAHIgBANIgCAMIgZAAIAAgKQAAgRgEgIQgGgJgKAAQgIAAgEAFQgFAFAAAIQAAAHADAGIAHAMIAjAtIAJANIAHAMIAEANQACAGAAAHQAAAJgDAIQgCAHgGAGQgEAGgHAEQgGAEgJACIAAAeg");
	this.shape_6.setTransform(8.2,35.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A8E3FF").s().p("AgKBHIAAh8IgWAAIAAgRIBBAAIAAARIgWAAIAAB8g");
	this.shape_7.setTransform(29.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A8E3FF").s().p("AgPBGQgHgDgDgEQgFgFgBgFQgCgFABgGIAAgIIACgJIAQAAIAAAHIABAKIACAIQACADADABQADACADAAQAGAAADgEQADgDAAgGIAAgGIgCgGIgDgGIgFgHIgWgZQgFgIgEgIQgDgHAAgJQAAgHACgGQACgGAFgEQAEgFAGgCQAGgCAHAAQAJAAAGACQAHADADAEQAEAFACAFQACAFgBAGIgBAIIgBAJIgRAAIAAgHQAAgLgDgGQgDgGgHAAQgGAAgCADQgEADAAAGIABAFIABAFIADAEIADAEIAYAdQAGAJAEAIQADAIAAAJQAAAIgCAGQgDAGgEAEQgEAFgHACQgFACgIAAQgJAAgGgCg");
	this.shape_8.setTransform(22.2,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A8E3FF").s().p("AAABIIgGAAIgHgCIgHgFQgEgDgDgFQgCgFgCgHQgCgHAAgLIAAhiIAWAAIAABoIABALQAAAEACADQABADADAAIAEABIAGgBQACAAABgDIADgHIABgLIAAhoIAVAAIAABiQAAAKgCAIQgBAHgDAFQgDAFgDADQgEADgEACIgHACIgHAAg");
	this.shape_9.setTransform(13.6,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A8E3FF").s().p("AgNBFQgFgCgEgFQgDgEgCgGQgBgFAAgHIABgKIABgLIARAAIAAARIABAJIABAGIADADIAEABIACAAIADgDIACgFIAAgIIABhuIAVAAIAABrQAAALgCAHQgDAHgEAEQgFAEgFABQgFACgFAAQgIAAgFgDg");
	this.shape_10.setTransform(5,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,84.8,54.4), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPB6QgGgHAAgNQAAgPAGgGQAGgHAJAAQALAAAFAHQAGAHAAAOQAAANgGAHQgGAHgKAAQgJAAgGgHgAgOAxIgFixIAmAAIgFCxg");
	this.shape.setTransform(140,83.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRB5IAAjUIgnAAIAAgdIBxAAIAAAdIgnAAIAADUg");
	this.shape_1.setTransform(129,84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWB5IgghaIgNAAIAABaIgkAAIAAjxIAnAAIAQAAIAPADQAIACAHAFQAIAEAGAIQAGAHADANQAEALAAAQIAAAGQAAAcgIARQgIARgPAHIAmBhgAgXAEIAFAAQAKAAAGgCQAGgCAEgEQAEgFACgJQACgIAAgMIAAgTQAAgJgCgIQgBgGgFgEQgEgFgFgCQgHgCgKAAIgFAAg");
	this.shape_2.setTransform(116.1,84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLB6QgHAAgHgDQgHgDgFgGQgHgFgEgKQgFgJgDgMQgDgOAAgSIAAhUQAAgTADgNQADgNAFgIQAFgKAGgFQAGgFAGgDQAHgDAHAAIALgBIAMABQAHAAAGADQAHADAGAFQAGAFAFAJQAFAJADANQADANAAATIAABUQAAASgDAOQgDAMgFAJQgFAJgGAGQgGAFgHADQgGADgHABIgMABIgLgBgAgJhbQgEACgCAFQgDAEgBAIQgCAIABALIAABuQgBALACAIQABAHADAEQACAFAEACQAFACAEgBQAFABAEgCQAFgCACgFQADgEACgHIABgTIAAhuIgBgTQgCgIgDgEQgCgFgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(100.6,84.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBbAAIAAAdIg2AAIAABIIAqAAIAAAcIgqAAIAABwg");
	this.shape_4.setTransform(88.2,84.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBbAAIAAAdIg2AAIAABIIAqAAIAAAcIgqAAIAABwg");
	this.shape_5.setTransform(76.5,84.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsB5IAAjxIBZAAIAAAdIg0AAIAABIIAnAAIAAAcIgnAAIAABTIA1AAIAAAdg");
	this.shape_6.setTransform(64.7,84.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbB3QgLgFgGgHQgHgHgCgJQgDgKAAgJIABgPIADgOIAcAAIAAAMIABARQACAIACAFQADAFAFADQAEACAHAAQAJAAAGgFQAGgGAAgLIgBgLIgDgJIgFgKIgIgLIgmgtQgKgNgFgNQgGgNAAgPQAAgMAEgLQAEgKAHgHQAHgHAKgEQALgEAMAAQAQAAAKAEQALAFAGAHQAHAIADAJQACAJAAAJQAAAIgBAGIgDAPIgcAAIAAgMQAAgTgGgKQgFgKgMAAQgKAAgFAFQgFAGAAAKIABAJIACAIIADAGIAFAHIAqAzQALAPAHAOQAGAOAAAPQAAANgEAKQgEALgIAHQgHAHgLAEQgKAEgNAAQgQAAgLgEg");
	this.shape_7.setTransform(45.1,84.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbB3QgLgFgGgHQgHgHgCgJQgDgKAAgJIABgPIADgOIAcAAIAAAMIABARQACAIACAFQADAFAFADQAEACAHAAQAJAAAGgFQAGgGAAgLIgBgLIgDgJIgFgKIgIgLIgmgtQgKgNgFgNQgGgNAAgPQAAgMAEgLQAEgKAHgHQAHgHAKgEQALgEAMAAQAQAAAKAEQALAFAGAHQAHAIADAJQACAJAAAJQAAAIgBAGIgDAPIgcAAIAAgMQAAgTgGgKQgFgKgMAAQgKAAgFAFQgFAGAAAKIABAJIACAIIADAGIAFAHIAqAzQALAPAHAOQAGAOAAAPQAAANgEAKQgEALgIAHQgHAHgLAEQgKAEgNAAQgQAAgLgEg");
	this.shape_8.setTransform(31.6,84.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABIIApAAIAAAcIgpAAIAABTIA1AAIAAAdg");
	this.shape_9.setTransform(19.6,84.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrB5IAAjxIAlAAIAADUIAyAAIAAAdg");
	this.shape_10.setTransform(8.4,84.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWB5IAAhvIgrAAIAABvIglAAIAAjxIAlAAIAABmIArAAIAAhmIAkAAIAADxg");
	this.shape_11.setTransform(165.4,51.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRB5IAAjUIgnAAIAAgdIBxAAIAAAdIgnAAIAADUg");
	this.shape_12.setTransform(151.3,51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSB5IAAjxIAlAAIAADxg");
	this.shape_13.setTransform(141.3,51.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdB5IgVh1IgFgxIgDAAIgFAxIgWB1IglAAIgjjxIAkAAIAQCSIACAhIAEAAIADgmIAaiNIAcAAIAZCNIADAmIAEAAIABghIAQiSIAjAAIgiDxg");
	this.shape_14.setTransform(126.9,51.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABJIApAAIAAAcIgpAAIAABSIA1AAIAAAdg");
	this.shape_15.setTransform(105.1,51.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAvB5IAAhQIABgkIABgeIABgZIABgRIgCAAIglCdIgXAAIgkidIgDAAIABARIABAZIABAeIABAkIAABQIgiAAIAAjxIAwAAIAXBeIAFAcIAEAbIABAAIAEgbIAGgcIAXheIAwAAIAADxg");
	this.shape_16.setTransform(88.3,51.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRB5IAAjxIAjAAIAADxg");
	this.shape_17.setTransform(74.2,51.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRB5IAAjUIgnAAIAAgdIBxAAIAAAdIgnAAIAADUg");
	this.shape_18.setTransform(64.2,51.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbB3QgLgFgGgHQgHgHgCgJQgDgKAAgJIABgPIADgOIAcAAIAAAMIABARQACAIACAFQADAFAFADQAEACAHAAQAJAAAGgFQAGgGAAgLIgBgLIgDgJIgFgKIgIgLIgmgtQgKgNgFgNQgGgNAAgPQAAgMAEgLQAEgKAHgHQAHgHAKgEQALgEAMAAQAQAAAKAEQALAFAGAHQAHAIADAJQACAJAAAJQAAAIgBAGIgDAPIgcAAIAAgMQAAgTgGgKQgFgKgMAAQgKAAgFAFQgFAGAAAKIABAJIACAIIADAGIAFAHIAqAzQALAPAHAOQAGAOAAAPQAAANgEAKQgEALgIAHQgHAHgLAEQgKAEgNAAQgQAAgLgEg");
	this.shape_19.setTransform(45.1,51.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbB3QgLgFgGgHQgHgHgCgJQgDgKAAgJIABgPIADgOIAcAAIAAAMIABARQACAIACAFQADAFAFADQAEACAHAAQAJAAAGgFQAGgGAAgLIgBgLIgDgJIgFgKIgIgLIgmgtQgKgNgFgNQgGgNAAgPQAAgMAEgLQAEgKAHgHQAHgHAKgEQALgEAMAAQAQAAAKAEQALAFAGAHQAHAIADAJQACAJAAAJQAAAIgBAGIgDAPIgcAAIAAgMQAAgTgGgKQgFgKgMAAQgKAAgFAFQgFAGAAAKIABAJIACAIIADAGIAFAHIAqAzQALAPAHAOQAGAOAAAPQAAANgEAKQgEALgIAHQgHAHgLAEQgKAEgNAAQgQAAgLgEg");
	this.shape_20.setTransform(31.6,51.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABJIApAAIAAAcIgpAAIAABSIA1AAIAAAdg");
	this.shape_21.setTransform(19.6,51.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrB5IAAjxIAlAAIAADUIAyAAIAAAdg");
	this.shape_22.setTransform(8.4,51.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdB5Ig5idIgBAAIABAPIABARIABAWIAAAgIAABHIggAAIAAjxIAeAAIA5ChIABAAIgBgNIgBgPIgBgUIgBgYIAAhZIAhAAIAADxg");
	this.shape_23.setTransform(118.9,19.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRB5IAAjxIAkAAIAADxg");
	this.shape_24.setTransform(107.1,19.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRB5IAAjUIgnAAIAAgdIBxAAIAAAdIgnAAIAADUg");
	this.shape_25.setTransform(90.8,19.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdB5IgHgrIgrAAIgGArIgmAAIAtjxIApAAIAtDxgAgRAyIAjAAIgRh4IgBAAg");
	this.shape_26.setTransform(77.8,19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBbAAIAAAdIg2AAIAABIIAqAAIAAAcIgqAAIAABwg");
	this.shape_27.setTransform(66,19.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgtB5IAAjxIBZAAIAAAdIg0AAIAABIIApAAIAAAcIgpAAIAABTIA1AAIAAAdg");
	this.shape_28.setTransform(48,19.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgbB3QgLgFgGgHQgHgHgCgJQgDgKAAgJIABgPIADgOIAcAAIAAAMIABARQACAIACAFQADAFAFADQAEACAHAAQAJAAAGgFQAGgGAAgLIgBgLIgDgJIgFgKIgIgLIgmgtQgKgNgFgNQgGgNAAgPQAAgMAEgLQAEgKAHgHQAHgHAKgEQALgEAMAAQAQAAAKAEQALAFAGAHQAHAIADAJQACAJAAAJQAAAIgBAGIgDAPIgcAAIAAgMQAAgTgGgKQgFgKgMAAQgKAAgFAFQgFAGAAAKIABAJIACAIIADAGIAFAHIAqAzQALAPAHAOQAGAOAAAPQAAANgEAKQgEALgIAHQgHAHgLAEQgKAEgNAAQgQAAgLgEg");
	this.shape_29.setTransform(34.6,19.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLB7QgHgBgHgEQgHgDgFgFQgHgFgEgJQgFgKgDgNQgDgNAAgSIAAhVQAAgRADgOQADgNAFgIQAEgKAHgFQAGgFAGgDQAHgDAHAAIALgBIAMABQAGAAAHADQAHADAGAFQAGAFAFAJQAFAJADANQADANAAASIAABVQAAASgDANQgDANgFAJQgFAJgGAFQgHAGgGADQgHADgGABIgMABIgLAAgAgJhbQgDACgDAFQgDAEgBAIQgCAIABALIAABuQgBALACAIQABAHADAEQADAFADACQAEACAFAAQAFAAAEgCQAFgCACgFQADgEABgHIACgTIAAhuIgCgTQgBgIgDgEQgCgFgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_30.setTransform(20.4,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgrB5IAAjxIAlAAIAADUIAyAAIAAAdg");
	this.shape_31.setTransform(8.4,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,175.5,105.4), null);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DB1B55","#9C0835"],[0,1],-119.7,0,141.2,0).s().p("AvpJUIAAynIfNAAQAGBnAABqQAAIMigHKg");
	this.shape.setTransform(119.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(19.4,0,200.5,119.3), null);


(lib.pc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc2();
	this.instance.parent = this;
	this.instance.setTransform(-117,40,0.808,0.808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc2_1, new cjs.Rectangle(-117,40,233.4,126), null);


(lib.pc12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-94,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc12, new cjs.Rectangle(-94,-107,101,202), null);


(lib.pc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pc1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pc1_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242427").s().p("AgWA+IAAh8IATAAIAABtIAaAAIAAAPg");
	this.shape.setTransform(61.7,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242427").s().p("AgVA+IAAh8IATAAIAABtIAZAAIAAAPg");
	this.shape_1.setTransform(56,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#242427").s().p("AgIA+IAAh8IASAAIAAB8g");
	this.shape_2.setTransform(50.6,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#242427").s().p("AAYA+IAAgpIABgSIAAgPIABgOIAAgJIgBAAIgTBRIgLAAIgThRIgBAAIAAAJIABAOIABAPIAAASIAAApIgSAAIAAh8IAZAAIAMAxIADAOIABAOIAAAAIADgOIADgOIAMgxIAYAAIAAB8g");
	this.shape_3.setTransform(43.3,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#242427").s().p("AgJA+IgVAAIAAh8IAVAAIAJAAIAIACQAEACAFADQAEACADAFQADAFACAHQABAIAAALIAAAjQAAALgBAHQgCAIgDAFQgDAFgEACQgFAEgEABIgIABIgJAAgAgLAxIAFAAIAIgBQADgCADgCIACgKIABgPIAAglIgBgPIgCgJQgDgDgDgBQgDgCgFAAIgFAAg");
	this.shape_4.setTransform(34.4,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#242427").s().p("AAOA+IgDgWIgWAAIgDAWIgTAAIAXh8IAVAAIAXB8gAgIAaIARAAIgIg+IgBAAg");
	this.shape_5.setTransform(26.8,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#242427").s().p("AgXA+IAAh8IAuAAIAAAQIgbAAIAAAlIAVAAIAAAOIgVAAIAAAqIAcAAIAAAPg");
	this.shape_6.setTransform(20.5,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#242427").s().p("AALA+IgPguIgHAAIAAAuIgTAAIAAh8IAVAAIAHAAIAIACIAIAEQAEACADAEQADADACAHQABAFAAAJIAAAEQAAANgEAJQgEAIgIAFIAUAxgAgLACIACAAIAJgBQACgBACgCQADgDAAgEIABgKIAAgKIAAgIIgDgHIgFgCQgDgCgGAAIgCAAg");
	this.shape_7.setTransform(13.6,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#242427").s().p("AgIA+IAAhsIgVAAIAAgQIA7AAIAAAQIgVAAIAABsg");
	this.shape_8.setTransform(6.2,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#242427").s().p("AgXA+IAAh8IAuAAIAAAQIgbAAIAAAlIAVAAIAAAOIgVAAIAAAqIAcAAIAAAPg");
	this.shape_9.setTransform(-2.8,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#242427").s().p("AgXA+IAAh8IAuAAIAAAQIgbAAIAAAlIAVAAIAAAOIgVAAIAAAqIAcAAIAAAPg");
	this.shape_10.setTransform(-8.9,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#242427").s().p("AALA+IgPguIgHAAIAAAuIgTAAIAAh8IAVAAIAHAAIAIACIAIAEQAEACADAEQADADACAHQABAFAAAJIAAAEQAAANgEAJQgEAIgIAFIAUAxgAgLACIACAAIAJgBQACgBACgCQADgDAAgEIABgKIAAgKIAAgIIgDgHIgFgCQgDgCgGAAIgCAAg");
	this.shape_11.setTransform(-15.9,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#242427").s().p("AgXA+IAAh8IAvAAIAAAQIgcAAIAAAlIAWAAIAAAOIgWAAIAAA5g");
	this.shape_12.setTransform(-22.6,20.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#242427").s().p("AALA+IgWg7IgBAAIAAA7IgTAAIAAh8IATAAIAAA3IABAAIAVg3IATAAIgZA7IAbBBg");
	this.shape_13.setTransform(-29.2,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#242427").s().p("AAOA+IgCgWIgXAAIgDAWIgTAAIAXh8IAVAAIAXB8gAgJAaIASAAIgJg+IAAAAg");
	this.shape_14.setTransform(-37,20.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#242427").s().p("AgXA+IAAh8IAuAAIAAAQIgbAAIAAAlIAVAAIAAAOIgVAAIAAAqIAcAAIAAAPg");
	this.shape_15.setTransform(-43.2,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#242427").s().p("AALA+IgPguIgHAAIAAAuIgTAAIAAh8IAVAAIAHAAIAIACIAIAEQAEACADAEQADADACAHQABAFAAAJIAAAEQAAANgEAJQgEAIgIAFIAUAxgAgLACIACAAIAJgBQACgBACgCQADgDAAgEIABgKIAAgKIAAgIIgDgHIgFgCQgDgCgGAAIgCAAg");
	this.shape_16.setTransform(-50.2,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#242427").s().p("AgdA+IAAh8IATAAIAJAAIAIACIAIADQAEACADADQADADABAEQACAFAAAGIAAAHQAAAFgBAEIgEAIIgFAEIgHAEIAAAAQAKACAEAGQAFAHAAALIAAAHQAAAHgBAFQgCAEgDAEQgCAEgEABIgIAFIgKABIgJAAgAgKAyIAFAAIAGgBQADgCACgCIAEgFIABgHIAAgKIgBgIIgDgGIgFgDIgHgBIgFAAgAgKgIIADAAIAHgBIAFgDIADgFIABgIIAAgEIgBgIIgDgGQgCgCgDgBQgCgCgFAAIgDAAg");
	this.shape_17.setTransform(-57.9,20.4);

	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-62,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-64,-9.5,130.3,41.9), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#072276","#213E9B"],[0,1],-96,25.1,164.8,25.1).s().p("Ar9FZIAAqxIX7AAQilD0jdDcQh5B5iABog");
	this.shape.setTransform(96,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blue, new cjs.Rectangle(19.4,0,153.2,69.1), null);


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.achive();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.badge, new cjs.Rectangle(-56.5,-48,113,96), null);


// stage content:
(lib.CardioTech_AdWords_300x2502 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_790 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(790).call(this.frame_790).wait(10));

	// txt-1
	this.instance = new lib.txt31();
	this.instance.parent = this;
	this.instance.setTransform(57.5,62.4,1,1,0,0,0,68.4,52.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(258).to({_off:false},0).to({x:80,alpha:1},19,cjs.Ease.get(0.99)).wait(94).to({x:117.5,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(258).to({_off:false,x:57.5},0).to({x:80,alpha:1},19,cjs.Ease.get(0.99)).wait(132));

	// Слой 21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_296 = new cjs.Graphics().p("AjmFwIjrAAIAAjHIBAAAQghhOAAhbQAAiyB/h/QB+h/C0AAQCyAAB+B/QB/B/AACyQAABbghBOIBFAAIAADHIjxAAQhkBBh+gBQiAABhlhBgAjZjfQhZBZAAB/QgBBjA4BNIHyAAQA4hNAAhjQAAh/hZhZQhahah9AAQh/AAhZBag");
	var mask_graphics_358 = new cjs.Graphics().p("AjmFwIjrAAIAAjHIBAAAQghhOAAhbQAAiyB/h/QB+h/C0AAQCyAAB+B/QB/B/AACyQAABbghBOIBFAAIAADHIjxAAQhkBBh+gBQiAABhlhBgAjZjfQhZBZAAB/QgBBjA4BNIHyAAQA4hNAAhjQAAh/hZhZQhahah9AAQh/AAhZBag");
	var mask_graphics_687 = new cjs.Graphics().p("AjmFwIjrAAIAAjHIBAAAQghhOAAhbQAAiyB/h/QB+h/C0AAQCyAAB+B/QB/B/AACyQAABbghBOIBFAAIAADHIjxAAQhkBBh+gBQiAABhlhBgAjZjfQhZBZAAB/QgBBjA4BNIHyAAQA4hNAAhjQAAh/hZhZQhahah9AAQh/AAhZBag");
	var mask_graphics_772 = new cjs.Graphics().p("AjmFwIjrAAIAAjHIBAAAQghhOAAhbQAAiyB/h/QB+h/C0AAQCyAAB+B/QB/B/AACyQAABbghBOIBFAAIAADHIjxAAQhkBBh+gBQiAABhlhBgAjZjfQhZBZAAB/QgBBjA4BNIHyAAQA4hNAAhjQAAh/hZhZQhahah9AAQh/AAhZBag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(296).to({graphics:mask_graphics_296,x:238.8,y:195.5}).wait(62).to({graphics:mask_graphics_358,x:238.8,y:195.5}).wait(1).to({graphics:null,x:0,y:0}).wait(328).to({graphics:mask_graphics_687,x:238.8,y:195.5}).wait(85).to({graphics:mask_graphics_772,x:238.8,y:195.5}).wait(1).to({graphics:null,x:0,y:0}).wait(27));

	// Слой 22
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)","rgba(255,255,255,0.298)"],[0,0.471,1,1],-43.4,0,43.4,0).s().p("ArjHhIJkvBINjAAIpkPBg");
	this.shape.setTransform(135.3,193);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(296).to({_off:false},0).wait(1).to({x:138.9},0).wait(1).to({x:142.5},0).wait(1).to({x:146.1},0).wait(1).to({x:149.7},0).wait(1).to({x:153.3},0).wait(1).to({x:156.9},0).wait(1).to({x:160.4},0).wait(1).to({x:164},0).wait(1).to({x:167.6},0).wait(1).to({x:171.2},0).wait(1).to({x:174.8},0).wait(1).to({x:178.4},0).wait(1).to({x:182},0).wait(1).to({x:185.6},0).wait(1).to({x:189.2},0).wait(1).to({x:192.7},0).wait(1).to({x:196.3},0).wait(1).to({x:199.9},0).wait(1).to({x:203.5},0).wait(1).to({x:207.1},0).wait(1).to({x:210.7},0).wait(1).to({x:214.3},0).wait(1).to({x:217.9},0).wait(1).to({x:221.5},0).wait(1).to({x:225},0).wait(1).to({x:228.6},0).wait(1).to({x:232.2},0).wait(1).to({x:235.8},0).wait(1).to({x:239.4},0).wait(1).to({x:243},0).wait(1).to({x:246.6},0).wait(1).to({x:250.2},0).wait(1).to({x:253.8},0).wait(1).to({x:257.3},0).wait(1).to({x:260.9},0).wait(1).to({x:264.5},0).wait(1).to({x:268.1},0).wait(1).to({x:271.7},0).wait(1).to({x:275.3},0).wait(1).to({x:278.9},0).wait(1).to({x:282.5},0).wait(1).to({x:286},0).wait(1).to({x:289.6},0).wait(1).to({x:293.2},0).wait(1).to({x:296.8},0).wait(1).to({x:300.4},0).wait(1).to({x:304},0).wait(1).to({x:307.6},0).wait(1).to({x:311.2},0).wait(1).to({x:314.8},0).wait(1).to({x:318.4},0).wait(1).to({x:321.9},0).wait(1).to({x:325.5},0).wait(1).to({x:329.1},0).wait(1).to({x:332.7},0).wait(1).to({x:336.3},0).wait(1).to({x:339.9},0).wait(1).to({x:343.5},0).wait(1).to({x:347.1},0).wait(1).to({x:350.6},0).wait(1).to({x:354.2},0).wait(1).to({x:357.8},0).to({_off:true},1).wait(328).to({_off:false,x:135.3},0).wait(1).to({x:137.9},0).wait(1).to({x:140.6},0).wait(1).to({x:143.2},0).wait(1).to({x:145.8},0).wait(1).to({x:148.4},0).wait(1).to({x:151},0).wait(1).to({x:153.6},0).wait(1).to({x:156.3},0).wait(1).to({x:158.9},0).wait(1).to({x:161.5},0).wait(1).to({x:164.1},0).wait(1).to({x:166.7},0).wait(1).to({x:169.4},0).wait(1).to({x:172},0).wait(1).to({x:174.6},0).wait(1).to({x:177.2},0).wait(1).to({x:179.8},0).wait(1).to({x:182.4},0).wait(1).to({x:185.1},0).wait(1).to({x:187.7},0).wait(1).to({x:190.3},0).wait(1).to({x:192.9},0).wait(1).to({x:195.5},0).wait(1).to({x:198.1},0).wait(1).to({x:200.8},0).wait(1).to({x:203.4},0).wait(1).to({x:206},0).wait(1).to({x:208.6},0).wait(1).to({x:211.2},0).wait(1).to({x:213.9},0).wait(1).to({x:216.5},0).wait(1).to({x:219.1},0).wait(1).to({x:221.7},0).wait(1).to({x:224.3},0).wait(1).to({x:226.9},0).wait(1).to({x:229.6},0).wait(1).to({x:232.2},0).wait(1).to({x:234.8},0).wait(1).to({x:237.4},0).wait(1).to({x:240},0).wait(1).to({x:242.6},0).wait(1).to({x:245.3},0).wait(1).to({x:247.9},0).wait(1).to({x:250.5},0).wait(1).to({x:253.1},0).wait(1).to({x:255.7},0).wait(1).to({x:258.4},0).wait(1).to({x:261},0).wait(1).to({x:263.6},0).wait(1).to({x:266.2},0).wait(1).to({x:268.8},0).wait(1).to({x:271.4},0).wait(1).to({x:274.1},0).wait(1).to({x:276.7},0).wait(1).to({x:279.3},0).wait(1).to({x:281.9},0).wait(1).to({x:284.5},0).wait(1).to({x:287.1},0).wait(1).to({x:289.8},0).wait(1).to({x:292.4},0).wait(1).to({x:295},0).wait(1).to({x:297.6},0).wait(1).to({x:300.2},0).wait(1).to({x:302.9},0).wait(1).to({x:305.5},0).wait(1).to({x:308.1},0).wait(1).to({x:310.7},0).wait(1).to({x:313.3},0).wait(1).to({x:315.9},0).wait(1).to({x:318.6},0).wait(1).to({x:321.2},0).wait(1).to({x:323.8},0).wait(1).to({x:326.4},0).wait(1).to({x:329},0).wait(1).to({x:331.6},0).wait(1).to({x:334.3},0).wait(1).to({x:336.9},0).wait(1).to({x:339.5},0).wait(1).to({x:342.1},0).wait(1).to({x:344.7},0).wait(1).to({x:347.4},0).wait(1).to({x:350},0).wait(1).to({x:352.6},0).wait(1).to({x:355.2},0).wait(1).to({x:357.8},0).to({_off:true},1).wait(27));

	// badge
	this.instance_1 = new lib.badge();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.5,196);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(269).to({_off:false},0).to({x:238.5},19,cjs.Ease.get(0.99)).wait(74).to({x:366},18,cjs.Ease.get(-1)).to({_off:true},1).wait(279).to({_off:false,x:358.5},0).to({x:238.5},19,cjs.Ease.get(0.99)).wait(121));

	// badge
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,0,0,0)","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_1.setTransform(91,124.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,0,0,0.184)","rgba(255,0,0,0)"],[0.043,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_2.setTransform(91,124.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,0,0,0.345)","rgba(255,0,0,0)"],[0.082,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_3.setTransform(91,124.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,0,0,0.478)","rgba(255,0,0,0)"],[0.114,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_4.setTransform(91,124.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,0,0,0.588)","rgba(255,0,0,0)"],[0.141,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_5.setTransform(91,124.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,0,0,0.675)","rgba(255,0,0,0)"],[0.161,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_6.setTransform(91,124.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,0,0,0.737)","rgba(255,0,0,0)"],[0.176,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_7.setTransform(91,124.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,0,0,0.773)","rgba(255,0,0,0)"],[0.184,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_8.setTransform(91,124.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,0,0,0.784)","rgba(255,0,0,0)"],[0.188,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_9.setTransform(91,124.6);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,0,0,0.773)","rgba(255,0,0,0)"],[0.176,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_10.setTransform(91,124.6);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,0,0,0.737)","rgba(255,0,0,0)"],[0.141,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_11.setTransform(91,124.6);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,0,0,0.678)","rgba(255,0,0,0)"],[0.082,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_12.setTransform(91,124.6);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(255,0,0,0.596)","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_13.setTransform(91,124.6);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(255,0,0,0.6)","rgba(255,0,0,0)"],[0.004,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_14.setTransform(91,124.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(255,0,0,0.608)","rgba(255,0,0,0)"],[0.012,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_15.setTransform(91,124.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,0,0,0.624)","rgba(255,0,0,0)"],[0.027,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_16.setTransform(91,124.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(255,0,0,0.643)","rgba(255,0,0,0)"],[0.047,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_17.setTransform(91,124.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,0,0,0.671)","rgba(255,0,0,0)"],[0.075,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_18.setTransform(91,124.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(255,0,0,0.702)","rgba(255,0,0,0)"],[0.106,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_19.setTransform(91,124.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(255,0,0,0.741)","rgba(255,0,0,0)"],[0.145,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_20.setTransform(91,124.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},166).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},20).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},21).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},313).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},20).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},21).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(174).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(175).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(176).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(177).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(178).to({_off:false},0).wait(20).to({_off:true},1).wait(11).to({_off:false},0).wait(21).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).wait(20).to({_off:true},1).wait(11).to({_off:false},0).wait(21).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(165));

	// Слой 23
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(255,0,0,0)","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_21.setTransform(206.8,124.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,0,0,0.184)","rgba(255,0,0,0)"],[0.043,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_22.setTransform(206.8,124.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(255,0,0,0.345)","rgba(255,0,0,0)"],[0.082,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_23.setTransform(206.8,124.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(255,0,0,0.478)","rgba(255,0,0,0)"],[0.114,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_24.setTransform(206.8,124.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(255,0,0,0.588)","rgba(255,0,0,0)"],[0.141,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_25.setTransform(206.8,124.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(255,0,0,0.675)","rgba(255,0,0,0)"],[0.161,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_26.setTransform(206.8,124.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(255,0,0,0.737)","rgba(255,0,0,0)"],[0.176,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_27.setTransform(206.8,124.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(255,0,0,0.773)","rgba(255,0,0,0)"],[0.184,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_28.setTransform(206.8,124.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(255,0,0,0.784)","rgba(255,0,0,0)"],[0.188,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_29.setTransform(206.8,124.6);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(255,0,0,0.773)","rgba(255,0,0,0)"],[0.176,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_30.setTransform(206.8,124.6);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(255,0,0,0.737)","rgba(255,0,0,0)"],[0.141,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_31.setTransform(206.8,124.6);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(255,0,0,0.678)","rgba(255,0,0,0)"],[0.082,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_32.setTransform(206.8,124.6);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(255,0,0,0.596)","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_33.setTransform(206.8,124.6);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(255,0,0,0.6)","rgba(255,0,0,0)"],[0.004,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_34.setTransform(206.8,124.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(255,0,0,0.608)","rgba(255,0,0,0)"],[0.012,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_35.setTransform(206.8,124.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(255,0,0,0.624)","rgba(255,0,0,0)"],[0.027,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_36.setTransform(206.8,124.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(255,0,0,0.643)","rgba(255,0,0,0)"],[0.047,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_37.setTransform(206.8,124.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(255,0,0,0.671)","rgba(255,0,0,0)"],[0.075,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_38.setTransform(206.8,124.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(255,0,0,0.702)","rgba(255,0,0,0)"],[0.106,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_39.setTransform(206.8,124.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(255,0,0,0.741)","rgba(255,0,0,0)"],[0.145,1],0,0,0,0,0,14).s().p("AheBfQgognAAg4QAAg3AogoQAngnA3ABQA4gBAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgngog");
	this.shape_40.setTransform(206.8,124.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},166).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},20).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},21).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},313).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},20).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},21).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(174).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(169));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(175).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(176).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(177).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(178).to({_off:false},0).wait(20).to({_off:true},1).wait(11).to({_off:false},0).wait(21).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(325).to({_off:false},0).wait(20).to({_off:true},1).wait(11).to({_off:false},0).wait(21).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(165));

	// txt-23
	this.instance_2 = new lib.txt23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,243.1,1,1,0,0,0,142.2,29.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(133).to({_off:false},0).to({y:220.6,alpha:1},19,cjs.Ease.get(1)).wait(82).to({y:243.1,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(270).to({_off:false},0).to({y:220.6,alpha:1},19,cjs.Ease.get(1)).wait(82).to({y:243.1,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// txt-22
	this.instance_3 = new lib.txt22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149,206,1,1,0,0,0,139.3,13.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(128).to({_off:false},0).to({y:183.5,alpha:1},19,cjs.Ease.get(1)).wait(92).to({y:206,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(260).to({_off:false},0).to({y:183.5,alpha:1},19,cjs.Ease.get(1)).wait(92).to({y:206,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(150));

	// Слой 20
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#DB1B55","#9C0835"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_41.setTransform(151.7,296.2);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DB1B55","#9C0835"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOOMgvPAADg");
	this.shape_42.setTransform(151.7,206.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(219,27,85,0.996)","rgba(156,8,53,0.996)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_43.setTransform(151.7,206.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(219,27,85,0.988)","rgba(156,8,53,0.988)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_44.setTransform(151.7,206.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(219,27,85,0.976)","rgba(156,8,53,0.976)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_45.setTransform(151.7,206.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(219,27,85,0.957)","rgba(156,8,53,0.957)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_46.setTransform(151.7,206.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(219,27,85,0.929)","rgba(156,8,53,0.929)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_47.setTransform(151.7,206.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(219,27,85,0.902)","rgba(156,8,53,0.902)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_48.setTransform(151.7,206.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(219,27,85,0.863)","rgba(156,8,53,0.863)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_49.setTransform(151.7,206.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(219,27,85,0.824)","rgba(156,8,53,0.824)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_50.setTransform(151.7,206.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(219,27,85,0.776)","rgba(156,8,53,0.776)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_51.setTransform(151.7,206.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(219,27,85,0.722)","rgba(156,8,53,0.722)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_52.setTransform(151.7,206.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(219,27,85,0.667)","rgba(156,8,53,0.667)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_53.setTransform(151.7,206.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(219,27,85,0.6)","rgba(156,8,53,0.6)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_54.setTransform(151.7,206.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(219,27,85,0.533)","rgba(156,8,53,0.533)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_55.setTransform(151.7,206.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(219,27,85,0.459)","rgba(156,8,53,0.459)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_56.setTransform(151.7,206.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(219,27,85,0.376)","rgba(156,8,53,0.376)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_57.setTransform(151.7,206.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(219,27,85,0.29)","rgba(156,8,53,0.29)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_58.setTransform(151.7,206.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(219,27,85,0.2)","rgba(156,8,53,0.2)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_59.setTransform(151.7,206.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(219,27,85,0.102)","rgba(156,8,53,0.102)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_60.setTransform(151.7,206.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(219,27,85,0)","rgba(156,8,53,0)"],[0,1],-151.3,0,232,0).s().p("A3nnIMAvPAAAIAAOPMgvPAACg");
	this.shape_61.setTransform(151.7,206.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41}]},123).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},108).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).to({state:[{t:this.shape_41}]},244).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},108).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(123).to({_off:false},0).wait(1).to({y:287},0).wait(1).to({y:278.2},0).wait(1).to({y:270},0).wait(1).to({y:262.3},0).wait(1).to({y:255},0).wait(1).to({y:248.3},0).wait(1).to({y:242.1},0).wait(1).to({y:236.3},0).wait(1).to({y:231.1},0).wait(1).to({y:226.4},0).wait(1).to({y:222.1},0).wait(1).to({y:218.4},0).wait(1).to({y:215.2},0).wait(1).to({y:212.4},0).wait(1).to({y:210.2},0).wait(1).to({y:208.4},0).wait(1).to({y:207.2},0).wait(1).to({y:206.4},0).to({_off:true},1).wait(372).to({_off:false,y:296.2},0).wait(1).to({y:287},0).wait(1).to({y:278.2},0).wait(1).to({y:270},0).wait(1).to({y:262.3},0).wait(1).to({y:255},0).wait(1).to({y:248.3},0).wait(1).to({y:242.1},0).wait(1).to({y:236.3},0).wait(1).to({y:231.1},0).wait(1).to({y:226.4},0).wait(1).to({y:222.1},0).wait(1).to({y:218.4},0).wait(1).to({y:215.2},0).wait(1).to({y:212.4},0).wait(1).to({y:210.2},0).wait(1).to({y:208.4},0).wait(1).to({y:207.2},0).wait(1).to({y:206.4},0).to({_off:true},1).wait(267));

	// txt-21
	this.instance_4 = new lib.txt21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.5,132.3,1,1,0,0,0,48.5,19.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(142).to({_off:false},0).to({y:139.8,alpha:1},19,cjs.Ease.get(1)).wait(89).to({y:132.3,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(263).to({_off:false},0).to({y:139.8,alpha:1},19,cjs.Ease.get(1)).wait(89).to({y:132.3,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(139));

	// pc-2
	this.instance_5 = new lib.pc2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(148,131,1,1,0,0,0,0,78);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({y:86,alpha:1},19,cjs.Ease.get(1)).wait(88).to({y:131,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(264).to({_off:false},0).to({y:86,alpha:1},19,cjs.Ease.get(1)).wait(88).to({y:131,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// Слой 18
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(7,34,118,0)","rgba(33,62,155,0)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_62.setTransform(150.9,81.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(7,34,118,0.102)","rgba(33,62,155,0.102)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_63.setTransform(150.9,81.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(7,34,118,0.2)","rgba(33,62,155,0.2)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_64.setTransform(150.9,81.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(7,34,118,0.29)","rgba(33,62,155,0.29)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_65.setTransform(150.9,81.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(7,34,118,0.376)","rgba(33,62,155,0.376)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_66.setTransform(150.9,81.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(7,34,118,0.459)","rgba(33,62,155,0.459)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_67.setTransform(150.9,81.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(7,34,118,0.533)","rgba(33,62,155,0.533)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_68.setTransform(150.9,81.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(7,34,118,0.6)","rgba(33,62,155,0.6)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_69.setTransform(150.9,81.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(7,34,118,0.667)","rgba(33,62,155,0.667)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_70.setTransform(150.9,81.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(7,34,118,0.722)","rgba(33,62,155,0.722)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_71.setTransform(150.9,81.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(7,34,118,0.776)","rgba(33,62,155,0.776)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_72.setTransform(150.9,81.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(7,34,118,0.824)","rgba(33,62,155,0.824)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_73.setTransform(150.9,81.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(7,34,118,0.863)","rgba(33,62,155,0.863)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_74.setTransform(150.9,81.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(7,34,118,0.902)","rgba(33,62,155,0.902)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_75.setTransform(150.9,81.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(7,34,118,0.929)","rgba(33,62,155,0.929)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_76.setTransform(150.9,81.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(7,34,118,0.957)","rgba(33,62,155,0.957)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_77.setTransform(150.9,81.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(7,34,118,0.976)","rgba(33,62,155,0.976)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_78.setTransform(150.9,81.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(7,34,118,0.988)","rgba(33,62,155,0.988)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_79.setTransform(150.9,81.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(7,34,118,0.996)","rgba(33,62,155,0.996)"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_80.setTransform(150.9,81.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#072276","#213E9B"],[0,1],-150,59.3,317.4,59.3).s().p("A3asvMAu1AAAIAAZTMgu1AAMg");
	this.shape_81.setTransform(150.9,81.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62}]},132).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_81}]},99).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_62}]},253).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_81}]},99).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).wait(139));

	// txt-1
	this.instance_6 = new lib.txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(72.8,61.1,1,1,0,0,0,87.8,52.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:96.1,alpha:1},18).to({_off:true},133).wait(240).to({_off:false,x:72.8,alpha:0},0).to({x:96.1,alpha:1},18).to({_off:true},133).wait(258));

	// pc-1-2
	this.instance_7 = new lib.pc12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(205,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(800));

	// logo
	this.instance_8 = new lib.logo_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(49,142.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({x:72.3,alpha:1},18,cjs.Ease.get(0.99)).wait(344).to({x:49.8,alpha:0},19,cjs.Ease.get(-1)).to({_off:true},1).wait(9).to({_off:false,x:49},0).to({x:72.3,alpha:1},18,cjs.Ease.get(0.99)).wait(382));

	// txt-2
	this.instance_9 = new lib.txt2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(27.4,218.1,1,1,0,0,0,42.4,27.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({x:50.7,alpha:1},18,cjs.Ease.get(0.99)).wait(326).to({x:28.2,alpha:0},18,cjs.Ease.get(-1)).to({_off:true},1).wait(28).to({_off:false,x:27.4},0).to({x:50.7,alpha:1},18,cjs.Ease.get(0.99)).wait(373));

	// Слой 19
	this.instance_10 = new lib.red();
	this.instance_10.parent = this;
	this.instance_10.setTransform(89,59.6,1,1,0,0,0,109.9,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(800));

	// Слой 17
	this.instance_11 = new lib.blue();
	this.instance_11.parent = this;
	this.instance_11.setTransform(65.4,216.1,1,1,0,0,0,86.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(800));

	// txt-3
	this.instance_12 = new lib.txt3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(111.9,234.1,1,1,0,0,0,21.9,7);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(27).to({_off:false},0).to({x:137.9,alpha:1},18).wait(317).to({x:122.9,alpha:0},18).to({_off:true},1).wait(37).to({_off:false,x:111.9},0).to({x:137.9,alpha:1},18).wait(364));

	// pc-1
	this.instance_13 = new lib.pc1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(800));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135,125,315,250.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pc1.jpg", id:"pc1"},
		{src:"images/CardioTech_AdWords_300x250_2_atlas_P_.png", id:"CardioTech_AdWords_300x250_2_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;