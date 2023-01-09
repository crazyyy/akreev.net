(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"CardioTech_NY_300x250_atlas_P_", frames: [[336,235,24,21],[336,207,162,26],[0,0,334,241],[336,0,159,205]]},
		{name:"CardioTech_NY_300x250_atlas_NP_", frames: [[0,357,300,250],[0,0,421,355]]}
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



(lib.bg2 = function() {
	this.spriteSheet = ss["CardioTech_NY_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.spriteSheet = ss["CardioTech_NY_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bullet = function() {
	this.spriteSheet = ss["CardioTech_NY_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.spriteSheet = ss["CardioTech_NY_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sign = function() {
	this.spriteSheet = ss["CardioTech_NY_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.speakers = function() {
	this.spriteSheet = ss["CardioTech_NY_300x250_atlas_P_"];
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


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9CkIAAlHIB5AAIAAAnIhHAAIAABiIA3AAIAAAnIg3AAIAABwIBJAAIAAAng");
	this.shape.setTransform(123.8,72.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABACkIAAhsIAAgxIACgpIACgiIABgYIgEAAIgxDWIgfAAIgxjWIgEAAIACAYIACAiIAAApIABAxIAABsIguAAIAAlHIBAAAIAgB/QAFAVADASIAFAkIABAAIAGgkQACgSAGgVIAgh/IA/AAIAAFHg");
	this.shape_1.setTransform(101,72.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQCmQgJgBgJgFQgJgDgIgIQgJgHgGgMQgHgMgDgTQgEgRAAgZIAAhzQAAgZAEgSQAEgRAGgMQAHgMAIgHQAIgHAKgEQAJgEAJgBIAPgBIARABQAJABAJADQAIAEAJAHQAIAHAHAMQAGAMAFASQADARAAAaIAABzQAAAZgEARQgEARgGANQgHAMgIAIQgJAHgJAEQgJAEgJACIgQABIgQgBgAgMh8QgFADgEAGQgDAGgCALQgCALAAAPIAACVQAAAPACAKQACAKADAHQAEAGAFACQAGACAGABQAIgBAFgCQAGgCADgGQAEgHACgKQABgKAAgPIAAiVQAAgPgBgLQgCgLgEgGQgDgGgGgDQgFgDgIAAQgGAAgGADg");
	this.shape_2.setTransform(77.1,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeCkIAAiXIg6AAIAACXIgyAAIAAlHIAyAAIAACJIA6AAIAAiJIAxAAIAAFHg");
	this.shape_3.setTransform(56.3,72.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYCkIAAkgIg1AAIAAgnICbAAIAAAnIg1AAIAAEgg");
	this.shape_4.setTransform(28.8,72.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnCkIgJg7Ig7AAIgJA7IgyAAIA8lHIA5AAIA8FHgAgXBEIAvAAIgXijIgBAAg");
	this.shape_5.setTransform(11.2,72.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglChQgPgGgIgKQgJgJgEgNQgDgMAAgOIABgTIAEgTIAmAAIAAAQQAAANACAKQACAKADAHQAEAIAGADQAHAEAJAAQANgBAHgHQAIgIAAgPIgBgOIgEgNIgHgNIgLgQIgzg9QgOgRgIgTQgHgSAAgUQAAgQAFgNQAFgPAKgJQAJgKAPgGQAOgFARAAQAVAAAPAGQAOAGAJAKQAJAKADANQAEAMAAAMQAAALgCAJIgEAUIgmAAIAAgQQAAgagIgOQgHgOgQAAQgOAAgHAIQgHAHAAANIABANIADALIAFAJIAHAJIA4BFQAQAVAJASQAIATAAAVQAAASgFAOQgGAOgKAKQgKAJgPAGQgOAFgRAAQgWAAgPgGg");
	this.shape_6.setTransform(167.4,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQCmQgJgCgJgEQgJgDgIgIQgJgHgGgMQgHgMgDgTQgEgRAAgZIAAhzQAAgZAEgSQAEgRAGgMQAHgMAIgHQAIgHAKgEQAJgEAJgBIAPgBIARABQAJABAJADQAIAEAJAHQAIAHAHAMQAGAMAFASQADASAAAZIAABzQAAAYgEASQgEARgGANQgHAMgIAIQgJAHgJAEQgJAEgJACIgQABIgQgBgAgMh8QgFACgEAHQgDAGgCALQgCALAAAPIAACVQAAAPACAKQACAKADAGQAEAHAFACQAGADAGAAQAIAAAFgDQAGgCADgHQAEgGACgKQABgKAAgPIAAiVQAAgPgBgLQgCgLgEgGQgDgHgGgCQgFgDgIAAQgGAAgGADg");
	this.shape_7.setTransform(148.1,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6CkIAAlHIAyAAIAAEgIBDAAIAAAng");
	this.shape_8.setTransform(131.8,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYCkIAAlHIAxAAIAAFHg");
	this.shape_9.setTransform(117.9,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdCkIg7icIgCAAIAACcIgxAAIAAlHIAxAAIAACPIACAAIA4iPIAxAAIg/CZIBHCug");
	this.shape_10.setTransform(104.3,32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoCkIhPjVIgBAAIABATIACAXIABAfIABAsIAABgIgsAAIAAlHIAoAAIBPDaIABAAIgCgQIgBgWIgCgbIAAgiIAAh3IAsAAIAAFHg");
	this.shape_11.setTransform(74,32.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdCkIgrh7IgSAAIAAB7IgxAAIAAlHIA2AAIAUAAQALABALAEQAKADALAFQAKAGAIAKQAIALAFAPQAEARABAVIAAAJQgBAmgKAXQgLAWgVALIA1CDgAggAGIAHAAQANAAAKgDQAHgDAGgGQAFgHADgMQACgKAAgRIAAgaQAAgNgCgJQgCgJgGgGQgFgGgIgDQgJgDgOAAIgHAAg");
	this.shape_12.setTransform(54.1,32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPCkQgJgBgIgDQgJgEgIgGQgIgHgHgLQgGgMgEgRQgDgRAAgYIAAjiIAyAAIAADvQAAAPABAKQACALADAGQAEAGAFADQAFACAHAAQAHAAAFgCQAGgDADgGQAEgGACgLQACgKAAgPIAAjvIAxAAIAADiQAAAYgEAQQgEASgGAMQgGALgIAHQgJAGgIAEQgJADgJABIgPABIgPgBg");
	this.shape_13.setTransform(32.5,32.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhOCkIAAlHIAyAAIAYAAQALACAKACQAMACAKAFQALAFAHAJQAHAHAFANQAFAMAAARIAAAQQAAANgEALQgEALgGAJQgGAIgIAFQgIAGgIABIAAACQAYAFANARQAMATAAAdIAAARQAAASgEANQgEANgHAJQgHAKgKAGQgJAGgNADQgLAEgNABIgaABgAgdCCIAOAAQAKAAAIgDQAHgDAGgFQAGgFADgJQAEgIAAgMIAAgZQAAgMgDgJQgCgJgFgGQgGgGgIgDQgIgDgMAAIgOAAgAgdgXIAJAAQALAAAHgCQAIgCAGgFQAGgGADgIQADgIAAgLIAAgOQAAgLgCgKQgDgJgFgGQgFgFgIgEQgIgDgNAAIgJAAg");
	this.shape_14.setTransform(12.6,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,7,178.7,94), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.69)","#FFFFFF"],[0,0.447,1],0,124.8,0,-124.5).s().p("A3dTnMAAAgnOMAu7AAAMAAAAnOg");
	this.shape.setTransform(-3.1,54.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-153.3,-71.2,300.4,251.1), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D7068").s().p("AgbDVQgKgNgBgWQABgbAKgKQAKgMARAAQATAAAJAMQALAMAAAZQAAAWgLAMQgKANgSAAQgRgBgKgLgAgZBUIgJk0IBDAAIgIE0g");
	this.shape.setTransform(107.8,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D7068").s().p("AgbDVQgLgNAAgWQAAgbALgKQAKgMARAAQASAAALAMQAJAMABAZQgBAWgJAMQgLANgSAAQgRgBgKgLgAgZBUIgIk0IBCAAIgIE0g");
	this.shape_1.setTransform(90.8,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D7068").s().p("AhgDSIAAmjIBAAAIAbABQANABAOAFQAOAEAOAIQAOAIAKAOQAKAPAHAVQAFAWAAAfIAAAPQABAigGAXQgGAXgKARQgJAQgMAKQgNAKgOAFQgNAFgOABIgaACIgGAAIAACAgAggAjIADAAQASAAALgEQALgGAHgKQAHgLAEgPQACgRAAgZIAAglQAAgTgCgOQgDgNgHgJQgHgJgMgEQgLgEgSgBIgDAAg");
	this.shape_2.setTransform(71.3,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D7068").s().p("ABSDSIAAiLIABg+IABg1IACgrIADgeIgFAAIhAERIgnAAIhAkRIgEAAIACAeIACArIACA1IAAA+IAACLIg7AAIAAmjIBTAAIAoCjIAKAyIAHAuIABAAIAHguQAEgYAGgaIAqijIBRAAIAAGjg");
	this.shape_3.setTransform(40.4,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D7068").s().p("AAyDSIgMhLIhLAAIgLBLIhBAAIBNmjIBJAAIBNGjgAgeBXIA9AAIgejQIgBAAg");
	this.shape_4.setTransform(10.7,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D7068").s().p("AgODUQgMgCgLgFQgLgFgLgJQgKgKgIgPQgIgQgFgXQgFgWAAggIAAiTQAAggAFgWQAFgXAIgPQAIgQALgJQAKgJAMgFQALgFALgBIAUgCQAZABARAGQARAHAKAMQAKANAEAQQAFAQAAASQAAAOgCALIgEAaIgzAAIAAgWQAAgjgIgQQgIgSgOAAQgIAAgHADQgHAEgEAJQgEAHgDAOQgCANAAAVIAAC/QAAATACANQACANAEAIQAEAIAHADQAHADAIABQAGAAAGgDQAGgDAEgGQAEgGADgJQACgJAAgNIAAgpIA7AAIAAAnQAAAygXAYQgYAZgrAAIgUgCg");
	this.shape_5.setTransform(-12.2,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D7068").s().p("AgfDSIAAlxIhDAAIAAgyIDGAAIAAAyIhEAAIAAFxg");
	this.shape_6.setTransform(-34.8,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D7068").s().p("AgVDUQgMgCgLgFQgLgFgLgJQgLgKgIgPQgIgQgFgXQgFgWAAggIAAiTQAAggAFgWQAFgXAIgPQAJgQAKgJQALgJAMgFQALgFAMgBIAVgCIAUACQALABAMAFQAMAEAKAKQALAIAIAPQAJAQAFAXQAFAWAAAhIAACTQAAAggFAWQgGAWgIARQgIAPgLAJQgLAKgLAFQgMAFgMACIgTACIgWgCgAgPifQgIAEgEAIQgFAIgCANQgCAOAAAUIAAC+QAAAUACANQACAMAFAIQAEAJAIACQAGADAKABQAIgBAIgDQAHgCAFgJQAEgIACgMQACgNABgUIAAi+QgBgUgCgOQgCgNgEgIQgFgIgHgEQgIgDgIgBQgKABgGADg");
	this.shape_7.setTransform(-58.3,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D7068").s().p("AgVDUQgMgCgLgFQgLgFgLgJQgLgKgIgPQgIgQgFgXQgFgWAAggIAAiTQAAggAFgWQAFgXAIgPQAJgQAKgJQALgJAMgFQALgFAMgBIAVgCIAUACQALABAMAFQAMAEAKAKQALAIAIAPQAJAQAFAXQAFAWAAAhIAACTQAAAggFAWQgGAWgIARQgIAPgLAJQgLAKgLAFQgMAFgMACIgTACIgWgCgAgPifQgIAEgEAIQgFAIgCANQgCAOAAAUIAAC+QAAAUACANQACAMAFAIQAEAJAIACQAGADAKABQAIgBAIgDQAHgCAFgJQAEgIACgMQACgNABgUIAAi+QgBgUgCgOQgCgNgEgIQgFgIgHgEQgIgDgIgBQgKABgGADg");
	this.shape_8.setTransform(-83.9,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D7068").s().p("AhkDSIAAmjIBAAAIAeABQAOABAPADQAOAEANAGQANAGAKAKQAJALAHAQQAFAPAAAWIAAAVQAAAQgFAOQgEAPgIAKQgIALgKAHQgKAHgLACIAAACQAfAGARAXQAPAYAAAlIAAAWQAAAWgFASQgFAQgJAMQgKAMgMAHQgNAIgOAFQgQAEgRABQgPACgSAAgAglCmIASAAQANgBAJgDQAKgDAIgHQAHgHAFgLQADgLAAgPIAAggQAAgPgCgLQgDgLgHgIQgHgIgLgEQgKgEgPAAIgSAAgAglgdIALAAQANAAALgDQAKgDAHgHQAIgHADgJQAEgMAAgOIAAgRQAAgPgDgLQgCgMgHgHQgHgIgLgFQgKgEgQAAIgLAAg");
	this.shape_9.setTransform(-108.8,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D7068").s().p("AgfDSIAAlxIhEAAIAAgyIDGAAIAAAyIhDAAIAAFxg");
	this.shape_10.setTransform(-143.9,3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D7068").s().p("AhODSIAAmjICaAAIAAAyIhbAAIAAB+IBGAAIAAAxIhGAAIAACQIBeAAIAAAyg");
	this.shape_11.setTransform(-163.5,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D7068").s().p("AgaDUQgKgCgKgFQgLgFgKgJQgKgKgIgPQgIgQgFgXQgFgWAAggIAAiUQAAgfAFgXQAFgWAJgQQAJgPALgJQALgJAMgFQAMgFAMgBIAVgCQAZAAASAHQARAHAMAMQAKAMAFARQAFAQAAASQAAAOgCALIgEAZIgzAAIAAgUQAAhFglAAQgJAAgHAEQgIADgFAJQgFAIgCANQgCAOAAAUIAAC9QAAAUACANQACANAFAIQAFAIAHADQAHADAKAAQAKAAAIgFQAHgGAFgJQAFgKADgNQACgNAAgPIAAg3IghAAIAAgpIBfAAIAADUIgqAAIgHgoQgMAXgQALQgQAKgUAAIgRgCg");
	this.shape_12.setTransform(-187.7,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D7068").s().p("AAlDSIg3idIgXAAIAACdIg/AAIAAmjIBFAAIAaABQANABAPAEQAOADANAJQANAHAKANQAKANAGAVQAHATAAAdIAAAKQAAAwgOAfQgOAdgbANIBECogAgpAHIAJAAQARAAALgEQALgDAHgIQAHgJADgOQAEgOAAgWIAAghQAAgQgDgMQgDgMgHgHQgHgIgLgEQgLgDgSgBIgJAAg");
	this.shape_13.setTransform(-212.4,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D7068").s().p("AgVDUQgMgCgLgFQgMgFgKgJQgLgKgIgPQgJgQgEgXQgFgWAAggIAAiTQAAggAFgWQAFgXAIgPQAIgQALgJQALgJAMgFQALgFAMgBIAVgCIAUACQALABAMAFQAMAEAKAKQALAIAIAPQAJAQAFAXQAFAWAAAhIAACTQAAAggFAWQgGAWgIARQgIAPgLAJQgLAKgMAFQgLAFgLACIgUACIgWgCgAgPifQgIAEgEAIQgFAIgCANQgDAOAAAUIAAC+QAAAUADANQACAMAFAIQAEAJAIACQAGADAKABQAIgBAIgDQAGgCAGgJQAEgIACgMQACgNABgUIAAi+QgBgUgCgOQgCgNgEgIQgGgIgGgEQgIgDgIgBQgKABgGADg");
	this.shape_14.setTransform(-239.3,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D7068").s().p("AhPDSIAAmjICfAAIAAAyIhgAAIAAB+IBLAAIAAAxIhLAAIAADCg");
	this.shape_15.setTransform(-260.9,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAkQgLgMAAgYQAAgZALgLQAKgLARAAQASAAAKAMQAKAMABAXQgBAXgKANQgKAMgSAAQgRAAgKgMg");
	this.shape_16.setTransform(80.3,-37.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAkQgJgMgBgYQABgZAJgLQALgLARAAQASAAAKAMQALAMAAAXQAAAXgLANQgKAMgSAAQgRAAgLgMg");
	this.shape_17.setTransform(68,-37.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAkQgKgMAAgYQAAgZAKgLQALgLARAAQASAAAKAMQALAMAAAXQAAAXgLANQgKAMgSAAQgRAAgLgMg");
	this.shape_18.setTransform(55.6,-37.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAlDSIg3idIgXAAIAACdIg/AAIAAmjIBFAAIAaABQANABAPAEQAOADANAJQANAHAKANQAKANAGAVQAHATAAAdIAAAKQAAAxgOAeQgOAdgbANIBECogAgpAHIAJAAQARAAALgEQALgDAHgIQAHgJADgOQAEgOAAgWIAAghQAAgQgDgMQgDgMgHgHQgHgIgLgEQgLgDgSAAIgJAAg");
	this.shape_19.setTransform(37.8,-54.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAyDSIgMhLIhLAAIgLBLIhBAAIBNmjIBJAAIBNGjgAgeBXIA9AAIgejRIgBAAg");
	this.shape_20.setTransform(11.9,-54.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhODSIAAmjICaAAIAAAyIhaAAIAAB+IBGAAIAAAxIhGAAIAACQIBdAAIAAAyg");
	this.shape_21.setTransform(-8.9,-54.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfDSIAAiMIhVkXIBBAAIAzDJIACAAIAzjJIBAAAIhVEXIAACMg");
	this.shape_22.setTransform(-32.2,-54.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAxDSIgjjKIgKhXIgEAAIgLBXIgkDKIhAAAIg9mjIA9AAIAdD9IADA7IAGAAIAGhDIAtj1IAyAAIArD1IAFBDIAHAAIACg7IAaj9IA+AAIg7Gjg");
	this.shape_23.setTransform(-73,-54.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhODSIAAmjICaAAIAAAyIhbAAIAAB+IBGAAIAAAxIhGAAIAACQIBeAAIAAAyg");
	this.shape_24.setTransform(-100,-54.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAzDSIhkkRIgDAAIADAZIACAdIABApIABA3IAAB7Ig4AAIAAmjIAzAAIBlEYIABAAIgBgWIgDgbIgCgiIgBgsIAAiZIA6AAIAAGjg");
	this.shape_25.setTransform(-125.4,-54.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAyDSIgMhLIhLAAIgLBLIhBAAIBNmjIBJAAIBNGjgAgeBXIA9AAIgejRIgBAAg");
	this.shape_26.setTransform(-161.9,-54.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgwDOQgSgIgLgMQgMgNgEgQQgFgQAAgQQAAgOACgLIAEgZIAyAAIAAAUQAAARACANQACANAFAKQAFAIAIAFQAHAEAMAAQASAAAJgJQAKgKgBgUIgBgSIgEgQQgEgIgFgJQgGgJgJgLIhBhOQgSgXgJgXQgKgXAAgaQAAgVAGgRQAHgSAMgMQANgNASgHQASgHAWAAQAcAAASAIQASAIAMANQALAMAEAQQAEAQAAAQQAAAOgBALIgFAZIgxAAIAAgUQAAghgKgSQgKgSgUAAQgSAAgJAKQgJAKAAARQAAAJACAHIADANIAHAMIAIAMIBJBYQAUAaALAZQALAYAAAbQAAAWgHASQgHASgNANQgNAMgTAHQgSAHgWAAQgcAAgUgIg");
	this.shape_27.setTransform(-196.2,-54.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfDSIAAlxIhEAAIAAgyIDGAAIAAAyIhDAAIAAFxg");
	this.shape_28.setTransform(-218.6,-54.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfDSIAAmjIA/AAIAAGjg");
	this.shape_29.setTransform(-236.1,-54.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66CC66").s().p("A95ElIAApJMA7zAAAIAAJJg");
	this.shape_30.setTransform(-78.2,-55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-275.1,-86.7,394,126.5), null);


(lib.TC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AgTAwIAAgIIAGgBQADAAACgDIADgEIABgHIgShJIAOAAIAIApIABANIABAAIABgNIAGgpIAOAAIgQBLIgCAKIgEAGQgCADgDACQgDABgEAAIgIgBg");
	this.shape.setTransform(50.5,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgGAxIAAhhIANAAIAABhg");
	this.shape_1.setTransform(46.7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgTAxIAAhhIAKAAIABAIIACgDIAEgCIACgDIAFgBIADABIADABQABAAAAAAQAAABABAAQAAAAABABQAAAAABABIADAEIABAHIABALIAAAWIgBAKIgBAIIgDAEIgEADIgDABIgEABQgEAAgBgCIgGgFIABAJIAAAUgAgDglIgDADIAAAsIABACIABACIADACIABAAIACAAIADgDIACgEIAAgHIAAgbIAAgHIgCgEIgDgCIgCgBQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_2.setTransform(42.7,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgUAxIAAhhIALAAIACAIIACgDIACgCIAEgDIAEgBIADABIADABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABIADAEIADAHIABALIAAAWIgBAKIgDAIIgDAEIgDADIgEABIgDABQgEAAgCgCIgEgFIAAAJIAAAUgAgDglIgDADIAAAsIABACIABACIACACIACAAIADAAIACgDIABgEIABgHIAAgbIgBgHIgBgEIgCgCIgDgBQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_3.setTransform(37.4,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AALAuIgDgRIgQAAIgCARIgOAAIARhbIAPAAIARBbgAgGATIANAAIgHgtIAAAAg");
	this.shape_4.setTransform(32,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AgGAlIgGgCQgDgCgBgEQgBgDAAgFIAAgEIABgEIAKAAIAAAHIABAFIACACIAEAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIgBgCIgCgCIgBgDIgJgMIgEgDIgDgGIgCgFIgBgGQAAgEACgDQAAgDADgDIAGgDIAGgBIAHABIAGADIADAFIACAHIgBAEIgBAFIgJAAIgBgHIgBgFIgCgCIgDgBIgCABIgCABIgBACIAAADIABAEIADAFIALALIACAFIADAEIADAGIABAFQAAAFgCACQgBAEgDACQgCACgEABQgDACgEAAIgGgBg");
	this.shape_5.setTransform(24.9,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgCAuIgFgBIgGgDIgEgGIgCgIIgBgMIAAggIABgMQABgFACgDQACgDACgCIAFgDIAFgCIADAAQAGAAADACQAEABACADQACACABAEIABAIIAAAFIgBAFIgLAAIAAgEQAAgIgCgEQgCgDgDAAIgCAAIgDADIgBAFIgBAHIAAApIABAHIABAFIADACIACABIACgBIADgCIACgDIAAgFIAAgJIANAAIAAAJQAAALgFAFQgGAGgJAAIgDgBg");
	this.shape_6.setTransform(20.2,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("AgOAwQgEgCgEgDQgCgDgCgEQgCgEAAgGQAAgEACgEIADgIIAFgGIAEgEIABgBIgCgEIgCgFIgCgGIgCgGIgBgGQAAgEACgEQACgEACgDIAHgEIAIgBQAEAAAEACQADABACADIAEAFIAAAFQAAAFgCAFIgDAIIgFAGIgFAFIAAABIANAYIACgGIABgHIAAgDIgBgDIAMAAIAAADIAAADQAAAHgCAGQgCAGgEAFIAJAPIgPAAIgDgFQgDADgFABQgDACgFAAQgEAAgFgBgAgNAPIgBAJIAAAFIADAFIAEADQACACAEAAIADgCIAFgDIgOgbQgEAEgCAEgAgEglIgDACIgBADIgBAEIABAEIABAEIABAEIACAFIABgBIADgDIABgEIACgFIABgFIAAgEIgCgCIgCgCIgBAAIgDAAg");
	this.shape_7.setTransform(14.3,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("AgGAuIAAhQIgPAAIAAgLIArAAIAAALIgPAAIAABQg");
	this.shape_8.setTransform(8.7,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("AAAAHIgIAQIgKgIIAMgMIgRgDIAEgNIAQAJIgDgTIANAAIgDATIAQgJIAEANIgSADIANANIgLAIg");
	this.shape_9.setTransform(3.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC, new cjs.Rectangle(0,0,53.7,15.4), null);


(lib.speakers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.speakers();
	this.instance.parent = this;
	this.instance.setTransform(6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speakers_1, new cjs.Rectangle(6,-1,159,205), null);


(lib.sign_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sign();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_1, new cjs.Rectangle(0,0,334,241), null);


(lib.moove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],17.9,-65.9,55.4,-205.9).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape.setTransform(54.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],8.2,-36.5,45.7,-176.5).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_1.setTransform(54.8,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-1.6,-7,35.9,-147).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_2.setTransform(54.8,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-11.3,22.5,26.2,-117.5).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_3.setTransform(54.8,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-20.9,51.9,16.6,-88.1).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_4.setTransform(54.8,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-30.7,81.4,6.8,-58.6).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_5.setTransform(54.8,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-40.4,110.8,-2.9,-29.2).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_6.setTransform(54.8,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-50.1,140.3,-12.6,0.3).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_7.setTransform(54.8,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-59.8,169.8,-22.3,29.8).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_8.setTransform(54.8,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(61,61,61,0)","rgba(82,82,82,0.498)","rgba(82,82,82,0)"],[0,0.482,1],-69.5,199.2,-32,59.2).s().p("Aq+ItIF01tIQJEVIl0Vsg");
	this.shape_9.setTransform(54.8,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-69.9,140.5,166.6);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(0,1,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,1,148.3,23.8), null);


(lib.gift = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(245,223,7,0.976)").s().p("AgDAKQgEgBgCgDQgCgDAAgDIAAAAQAAgDADgDQADgDAFAAQAFAAAEADQADADAAADQAAAFgDACQgEADgFAAIgDAAg");
	this.shape.setTransform(180,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(245,223,7,0.976)").s().p("AgDAKQgEgBgCgDQgCgDAAgDIAAAAQAAgDADgDQADgDAFAAQAFAAAEADQADADAAADQAAAFgDACQgEADgFAAIgDAAg");
	this.shape_1.setTransform(176,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(245,223,7,0.976)").s().p("AgDAKQgEgBgCgDQgCgDAAgDIAAAAQAAgDADgDQADgDAFAAQAFAAAEADQADADAAADQAAAFgDACQgEADgFAAIgDAAg");
	this.shape_2.setTransform(172.1,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(245,223,7,0.976)").s().p("AgaBCIgBAAQgOgCgEgZIgBgQIAAgGIABgNQgFgBgCgDIgBgCIAAgBIABgDQABgCACgEIACgDQADgEABgJIACgHIgDAAQgHgBgCgEIgBgDIAAgBIACgFQADgFAKgDIAIgEQAGgEAEAAIABABQAEAAAFAFQACABADABIACAAQAFAAAJgCIANgDIABAAIABAAQAGABABAFIABABIAAABIgCADQgBAEgDACQgIAFgPAAIgDAAIgEAAIgHgBQgIAAgDAEQgBAEgBAIIgBAEIAAACQAVgDARAAIACAAIAEAAIAEAAQAFABACADIACADIAAAAIgBABQAAAEgGADIgHADQgHACgOAAIgBAAIgCAAIgEAAIgEAAIgFAAQgEABgBACQgDAEgCAKIAAACIAAAHQAAAHACAFQACAEADABIABAAIADAAQAIAAANgGIAHgCQARgGAMAAIAGAAIAEABQADABACAEIAAADIAAABIgBADQgCADgPABIgGAAQgNADgSAKIAAAAQgQAJgJAAg");
	this.shape_3.setTransform(166.1,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(245,223,7,0.976)").s().p("AgaBCIgBAAQgOgCgEgZIgBgQIAAgGIABgNQgFgBgCgDIgBgCIAAgBIABgDQAAgCAEgEIACgDQACgEABgJIABgHIgCAAQgHgBgCgEIgBgDIAAgBIACgFQADgFALgDIAIgEQAFgEAFAAIAAABQAEAAAFAFQABABAEABIACAAQAFAAAIgCIAOgDIACAAIAAAAQAHABABAFIAAABIAAABIgBADQgCAEgDACQgIAFgPAAIgDAAIgDAAIgIgBQgJAAgBAEQgCAEgCAIIAAAEIAAACQAVgDARAAIACAAIADAAIAFAAQAGABACADIABADIAAAAIAAABQgCAEgFADIgHADQgHACgOAAIgBAAIgDAAIgDAAIgEAAIgFAAQgEABgCACQgCAEgCAKIAAACIAAAHQAAAHACAFQACAEAEABIABAAIACAAQAIAAAOgGIAFgCQASgGANAAIAEAAIAFABQADABABAEIABADIAAABIgBADQgDADgOABIgFAAQgPADgRAKIAAAAQgQAJgJAAg");
	this.shape_4.setTransform(156.3,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(245,223,7,0.976)").s().p("AgqBAQgBgCAAgIIAAgCIABgGIAAgIIAAgCQAAgJgCAAIgBAAIgDAAIgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgEQABgEACgCIAGgDQACgCgBgDIABgbIAAgPQgBgFgHAAQgGAAgDgEQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQABgCAEgEQAEgDAKgBQADAAAFgEQADgDADAAQADAAABACIADAFIAVAGIAKADIALADQAPAEAGAGQAEAFAAAHIAAAGQgCAKgGAGQgHAHgOAHQgMAGgLACIArAXQAYALABAEQgCAFgFADQgEACgDAAIgCAAQgZgJgTgMIgZgOIABAUIAAABQgBAOgDABIgHABQgHAAgCgEgAgYgbIABAeQAxgLAAgMIAAgCQgCgIgfgHIgMgCIgBAAQgDABgBALg");
	this.shape_5.setTransform(144.9,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(245,223,7,0.976)").s().p("AgWBCIAAAAQgKgBgDgOIAAgLIAAgLIAAgBIABgJIABgOQAAAAAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAQgFgDAAgCIAAgBIAAAAQABgCAEgEIADgFQACgCAAgHIABgEIAAgGIAAgCIgCAAQgIgCgCgEIAAgCIAAgBIABgFQAEgGAKgDIAIgDQAGgEAEAAIAAAAQAEAAAGAFIAEACIABAAQAFAAAKgDIAOgCIABAAQAHAAABAFIABABIAAABIgCAEQgCADgDACQgIAGgRAAIgFAAIgGAAQgJAAgCADQgCAEAAAJIAAADIAAACIAEgBQATgDAMAAIAFAAQAGABAGACQAEACAAACIAAABQAAADgJAFQgGADgEAAIgGABIgFgBIgEAAQgLAAgGACQgHADgDAMIAAAGIAAAGIAAALIABAFQADAKAAAGIAAACQAAADgCACQgCADgEAAg");
	this.shape_6.setTransform(134.7,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(245,223,7,0.976)").s().p("AABBCQgCAAgCgGIgBgJQgDgRgBgdIAAgJIABghQAAgDgGgBIgHAAIgJABIgLABIgFAAQgLAAgDgEQgCgDAAgCQAAgGAMgDQAIgDAMAAQAOAAAZgDQAcgCAMAAQAEAAAEACQAEADAAADIgBACQgDAGgJACIgPADIgCAAIgDAAIgGAAQgJABgBACQgEAFAAAOIAAAAIAAALIABAKIACAqIAAAFIABAFIAAACQAAAGgCADQgCADgHABg");
	this.shape_7.setTransform(119.1,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(245,223,7,0.976)").s().p("AgaBCIgBAAQgOgCgEgZIgBgQIAAgGIABgNQgFgBgCgDIgBgCIAAgBIABgDQABgCACgEIACgDQADgEABgJIACgHIgDAAQgHgBgCgEIgBgDIAAgBIACgFQADgFAKgDIAIgEQAGgEAEAAIABABQAEAAAFAFQACABADABIACAAQAFAAAJgCIANgDIABAAIABAAQAGABABAFIABABIAAABIgBADQgCAEgDACQgIAFgPAAIgDAAIgEAAIgHgBQgIAAgDAEQgBAEgBAIIgBAEIAAACQAVgDARAAIACAAIAEAAIAEAAQAFABADADIABADIAAAAIgBABQAAAEgGADIgHADQgHACgOAAIgBAAIgCAAIgEAAIgEAAIgFAAQgEABgBACQgDAEgCAKIAAACIAAAHQAAAHACAFQACAEADABIABAAIADAAQAIAAANgGIAHgCQARgGAMAAIAGAAIAEABQADABACAEIAAADIAAABIgBADQgCADgPABIgFAAQgOADgSAKIAAAAQgQAJgJAAg");
	this.shape_8.setTransform(110.3,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(245,223,7,0.976)").s().p("AgHBGIgCAAQgTgCgMgcQgIgTgBgUIAAgEIAAgIQABgJACgJQAFgTALgLQAKgKANAAIADAAIACAAQAKABAIALQAIAKABAMIAAAAIAAABQgBAFgFAEQgCADgCAAIgBAAIgDgBQgEgDgDgKIgBgDQgDgJgEgBIgBAAQgIAAgGALQgIALgCASIAAAJIAAAAQAAAMAGARQAHAXAMABIABAAQADAAAEgCQAPgJALgnIgQABIgEABIgEABIgCAAIgBgBQgDAAgCgEQgCgCAAgDIAAgBIAAgBQACgFAHgBIAEgBQAQgDAKAAIAEAAIAJACQACABAAAHIAAAEIgBAIIAAABQgDAOgIAOQgSAfgYAEIgDAAg");
	this.shape_9.setTransform(99.5,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(245,223,7,0.976)").s().p("AgOAZIgCgBIAAgCQgBgGALgTIABgCIABgIQAAgGACgCQACgDAEAAIACAAQAGAAAEAFQACADAAAFIgBAEQgBAHgFAHQgEAIgHAGQgGAEgHAAg");
	this.shape_10.setTransform(84.9,28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(245,223,7,0.976)").s().p("AgdBMQgGgFgCgGQgKgdgEgQQgEgTAAgOIABgNQABgFACgFQADgFAEAAIABAAQAFAAACADIAAAIIAAABIAAAHQAAAgAGAOQACgFABgLIACgOIADgRQAEgLAFgDIAEgBQAJAAAHAcQAKAjAOAYQAHgTAAgmIgBgVQAAgRgCgPIgBgFQAAgEACgCIADgCIAGgDQAIAIACARIABANIgBAOQgBA1gDASQgEAegLAAQgFAAgIgIQgJgLgIgUIgNghIgGAzQgCAQgDAFQgCACgDAAQgDAAgDgCg");
	this.shape_11.setTransform(77.2,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(245,223,7,0.976)").s().p("AAEBCQgUAAgOgUQgLgSgBgaIAAgEQAAglAOgPQALgLARAAQAVAAAMAeQAHARACASIABAOQAAAagMAOQgJALgPABIgDAAgAgWgMQAAAJABAJQAGAnARABIACAAQAIAAAFgGQAGgHABgPIAAgEQAAgKgCgIQgFgZgKgLIgFgFIgDgBIgCABIgCADQgEAFgDAAIgBgBQgKAHABATg");
	this.shape_12.setTransform(66.5,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(245,223,7,0.976)").s().p("AgnBDQgCgEgBgKIAAgCIAAgRIAAghIAAgKIAAgIIABgaQABgGADgEQADgDAEAAQAIAAAFAMQAWA0ASAfIAAgDQAAgZgCglIAAgDIgBgOQAAgUAGgGQACgCADAAQAEAAADACQAEAFAAAOIgBAPIAAADIgBAhIABAjIABAHIABAMQAAAHgCAEQgEAGgGAAQgKAAgHgMQgKgPgPgiIgLgVIAAAcIABAoIAAABQAAAFgFAFQgDADgDAAQgEAAgDgFg");
	this.shape_13.setTransform(56.8,20.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(245,223,7,0.976)").s().p("AABBCQgCAAgCgGIgBgJQgDgRgBgdIAAgJIABghQAAgDgGgBIgHAAIgJABIgLABIgFAAQgLAAgDgEQgCgDAAgCQAAgGAMgDQAIgDAMAAQAOAAAZgDQAcgCAMAAQAEAAAEACQAEADAAADIgBACQgDAGgJACIgPADIgCAAIgDAAIgGAAQgJABgBACQgEAFAAAOIAAAAIAAALIABAKIACAqIAAAFIABAFIAAACQAAAGgCADQgCADgHABg");
	this.shape_14.setTransform(41,21.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(245,223,7,0.976)").s().p("AAbBHQgFgBgCgEIgBgHQAAgGgBgBIgBgIIAAgFQgCgQgBgBQgBgCgGAAIgQACIgFAAIABAGIABAXQAAALgCAEQgCAEgGAAQgCAAgDgCQgEgBgBgDQgBgCAAgGIAAgKIABgKQAAgLgDgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgDAAIgCABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgCgBAAgEIAAgBIAAgEQACgCADgBIAFAAIACAAIAEAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAgBIgBgFIAAgCIAAgCQAAgOgBgNIAAgDIgCgNIAAgDQABgJAFgDQAEgCADAAQADAAACACQAFAFAAARIgBAOIAAAGIAAACIAAAIIAAAHIAAADQgBAFADACQACACAFAAIAHgBIAFAAQAGgBABgCQACgBAAgGIAAgCIAAgDIAAgIIgBgQIgBgEIAAgNQAAgMADgEQADgDAEAAQAFAAADAEQAGAGAAAUIgBAXIAAAFIgBADIgBAIQABADACACIAEABIAFABQAHADABAEIAAABQAAADgFACIgNAEIAAACQAAAIADAJIACASIAAABQAAAEgDADQgDADgFAAIgCAAg");
	this.shape_15.setTransform(30.8,21);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(245,223,7,0.976)").s().p("AgHBGIgCAAQgTgCgMgcQgIgTgBgUIAAgEIAAgIQABgJACgJQAFgTALgLQAKgKANAAIADAAIACAAQAKABAIALQAIAKABAMIAAAAIAAABQgBAFgFAEQgCADgCAAIgBAAIgDgBQgEgDgDgKIgBgDQgDgJgEgBIgBAAQgIAAgGALQgIALgCASIAAAJIAAAAQAAAMAGARQAHAXAMABIABAAQADAAAEgCQAPgJALgnIgQABIgEABIgEABIgCAAIgBgBQgDAAgCgEQgCgCAAgDIAAgBIAAgBQACgFAHgBIAEgBQAQgDAKAAIAEAAIAJACQACABAAAHIAAAEIgBAIIAAABQgDAOgIAOQgSAfgYAEIgDAAg");
	this.shape_16.setTransform(20.8,21.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(245,223,7,0.976)").s().p("AgCBDQgDgCgBgDQgBgGAAgKIAAgGIAAgEIAAgGIgBgmIgBgGIAAgHIgCgWQAAgRAFgFQADgDADAAQAGAAACADQACADAAAFIgBAJIAAADIgBAWIAAAXIABARIAAAGIABATIABADIABAMIgBAEQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_17.setTransform(13.7,21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(245,223,7,0.976)").s().p("AgpBAQgBgCAAgIIAAgCIAAgGIABgIIAAgCQAAgJgCAAIgCAAIgDAAIgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIACgEQABgEADgCIAFgDQABgCABgDIAAgbIAAgPQgBgFgGAAQgHAAgDgEQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBgCAFgEQAEgDALgBQACAAAFgEQADgDADAAQADAAACACIACAFIAVAGIAKADIAMADQANAEAHAGQAEAFABAHIgBAGQgCAKgGAGQgHAHgPAHQgLAGgKACIAqAXQAYALAAAEQgBAFgFADQgEACgCAAIgDAAQgZgJgTgMIgZgOIABAUIAAABQAAAOgEABIgHABQgHAAgBgEgAgXgbIAAAeQAxgLAAgMIgBgCQgBgIgfgHIgMgCIgBAAQgDABAAALg");
	this.shape_18.setTransform(6.4,21.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,0,0.976)").s().p("AgMB/QgIAAgGgGQgKgMACgqIABgVIABgNQgKABgKAAQg4gDgPgWQgFgHABgJQAAgGACgHQAHgTAiACQAMAAAZAEIAOACIAAgDIAAgDIAAgRQACgvAQgPQAMgMATABIABAAQAIABAFAGQAIAKgBAeQAAAQgEAVIgBALIADAAIAEgBQAagCANAAQAdABAMAOQAKALgBATIAAACQgBAUglgCIgSgBIgRgBQgRgBgGAEIACATQACARgBAMQAAALgCAGQgHAWgeAJIgGABIgCgBg");
	this.shape_19.setTransform(64.1,75.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.976)").s().p("AALBBIgWg+IgBAAIAAA+IgUAAIAAiBIAUAAIAAA5IABAAIAVg5IAUAAIgZA9IAcBEg");
	this.shape_20.setTransform(124.9,57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.976)").s().p("AgDBBIgHgBIgIgFIgFgIQgCgEgCgIQgCgHABgJIAAgtQgBgKACgHQACgHACgFQACgEAEgDQADgDAEgBIAHgDIAFAAQAHAAAGADQAFACAEADQADAEABAFIABAKIgBAIIgBAIIgQAAIAAgHQAAgKgCgFQgCgGgFAAIgDABIgEAEIgCAGIgBALIAAA6IABAKIABAHIAEADIAEABIAEgBIADgDIACgEIAAgHIAAgNIASAAIAAANQAAAPgGAHQgIAIgNAAIgFgBg");
	this.shape_21.setTransform(117.2,57.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.976)").s().p("AAPBBIgDgXIgXAAIgDAXIgUAAIAYiBIAVAAIAYCBgAgJAbIATAAIgKhAIAAAAg");
	this.shape_22.setTransform(109.8,57.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.976)").s().p("AgeBBIAAiBIAUAAIAJAAIAIACIAJADQAEABADAEQADADABAFQACAFAAAGIAAAHQAAAFgBAEQgCAFgCADIgGAFIgGADIAAABQAJACAFAGQAFAHAAAMIAAAHQAAAHgBAFQgCAFgDAEQgCADgEADQgEACgFABIgKACIgJABgAgLAzIAGAAIAGgBQADgBADgCIADgGIABgIIAAgKIgBgIIgDgGQgCgCgDgBQgCgCgFAAIgGAAgAgLgIIAEAAIAHgBIAFgDQACgCABgEQACgDAAgEIAAgGIgBgIIgDgGQgCgCgEgBQgCgCgFAAIgEAAg");
	this.shape_23.setTransform(102.4,57.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.976)").s().p("AALBBIAAg8IgVAAIAAA8IgVAAIAAiBIAVAAIAAA2IAVAAIAAg2IAUAAIAACBg");
	this.shape_24.setTransform(93.9,57.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.976)").s().p("AgOBAQgFgDgEgEQgEgDgBgFQgBgFgBgGIABgHIABgIIAQAAIAAAGIAAAKIACAHIAFAEQACABADAAQAFAAADgDQADgDAAgGIAAgGIgBgEIgEgGIgEgGIgTgXQgGgHgDgIQgDgHAAgHQAAgHACgGQACgEAEgFQAEgDAFgCQAGgDAGAAQAJAAAFADQAGACADAEQAEAEACAFIABAJIgBAIIgBAIIgQAAIAAgGQAAgKgCgGQgEgFgGgBQgFAAgCADQgEAEAAAFIABAFIACAEIACAEIACADIAWAbQAGAIAEAHQACAIAAAJQABAGgCAFQgDAGgEAEQgEAEgGACQgFACgHAAQgIAAgGgCg");
	this.shape_25.setTransform(86.1,57.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.976)").s().p("AAPBBIgDgXIgXAAIgDAXIgUAAIAYiBIAVAAIAYCBgAgJAbIATAAIgKhAIAAAAg");
	this.shape_26.setTransform(78.7,57.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.976)").s().p("AgEBBIgHgBIgGgFIgGgIQgDgEgBgIQgCgHAAgJIAAgtQAAgKACgHQABgHADgFQADgEADgDQADgDADgBIAHgDIAGAAQAHAAAGADQAFACADADQADAEACAFIABAKIAAAIIgBAIIgQAAIAAgHQgBgKgCgFQgCgGgFAAIgEABIgDAEIgCAGIgBALIAAA6IABAKIACAHIADADIAEABIADgBIAEgDIACgEIABgHIAAgNIASAAIAAANQAAAPgIAHQgGAIgOAAIgGgBg");
	this.shape_27.setTransform(71.7,57.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.976)").s().p("AgOCWIgQgFQgIgDgHgGQgIgGgGgKQgGgKgDgPQgEgOAAgTIAAh9QAAgTAEgOQAEgOAFgKQAGgKAIgFQAIgGAIgDQAIgEAIgBIAOgBIAOABQAIABAIADQAIADAIAGQAHAGAGAJQAGAKADAOQAEAPAAATIAAB9QAAATgEAOQgDAPgGAJQgGAKgIAHQgHAGgIADIgQAFIgOABIgPgBgAgThrQgHAJAAATIAACgQAAASAHAIQAHAJANAAQANAAAHgJQAGgIAAgSIAAigQAAgTgGgJQgHgJgNAAQgNAAgHAJg");
	this.shape_28.setTransform(54.6,52.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.976)").s().p("AgOCWIgQgFQgIgDgHgGQgIgGgGgKQgGgKgDgPQgEgOAAgTIAAh9QAAgTAEgOQAEgOAFgKQAGgKAIgFQAIgGAIgDQAIgEAIgBIAOgBIAOABQAIABAIADQAIADAIAGQAHAGAGAJQAGAKADAOQAEAPAAATIAAB9QAAATgEAOQgDAPgGAJQgGAKgIAHQgHAGgIADIgQAFIgOABIgPgBgAgThrQgHAJAAATIAACgQAAASAHAIQAHAJANAAQANAAAHgJQAGgIAAgSIAAigQAAgTgGgJQgHgJgNAAQgNAAgHAJg");
	this.shape_29.setTransform(36.4,52.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.976)").s().p("AgsCUIAAgiIAiAAIAAjJIglAhIgUgXIBDhGIAiAAIgBAAIABAAIAAEFIAhAAIAAAig");
	this.shape_30.setTransform(20.1,52.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.976)").s().p("AgJCTIAAghQgNgBgJgEQgIgFgEgGQgGgHgCgIQgCgIAAgIIABgOIACgNIAbAAIAAALQABASAFAKQAGAKALAAQAJAAAFgFQAEgFABgKIgBgIIgCgIIgGgKIgIgLIgigtQgJgMgFgMQgFgNgBgPQAAgKADgIQADgJAFgGQAGgHAIgEQAIgFAKgBIAAgfIAXAAIAAAfQALACAIAFQAHAEAFAHQAEAGADAIQABAHAAAIIgBAOIgDANIgaAAIAAgLQAAgSgGgJQgFgKgLAAQgJAAgFAFQgFAGAAAJQAAAHADAHQADAGAFAHIAmAyIAKAOIAHANQADAHACAHIABAPQAAAJgCAJQgDAIgFAGQgGAHgHAEQgHAEgKACIAAAig");
	this.shape_31.setTransform(6.2,56.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.976)").s().p("AALBBIgPgxIgIAAIAAAxIgTAAIAAiBIAVAAIAIAAIAIACQAEABAEACIAIAHQADAEABAGQACAGAAAJIAAADQABAPgFAJQgEAJgJAEIAWA0gAgMACIADAAQAFAAAEgBQACgBADgCIACgHIABgLIAAgKIgBgJIgCgGIgFgEIgJgBIgDAAg");
	this.shape_32.setTransform(118.1,106.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.976)").s().p("AgXBBIAAiBIAvAAIAAAPIgbAAIAAAnIAUAAIAAAPIgUAAIAAAsIAcAAIAAAQg");
	this.shape_33.setTransform(111,106.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.976)").s().p("AAMBBIAAg8IgXAAIAAA8IgUAAIAAiBIAUAAIAAA2IAXAAIAAg2IATAAIAACBg");
	this.shape_34.setTransform(103.2,106.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.976)").s().p("AgDBBIgHgBIgIgFIgFgHQgCgGgCgHQgCgGABgKIAAgtQgBgKACgHQACgHACgFQACgEAEgDQADgDAEgBIAHgCIAFgBQAHAAAGADQAFACAEADQADAEABAFIABALIgBAHIgBAIIgQAAIAAgGQAAgLgCgFQgCgGgFAAIgDABIgEAEIgCAGIgBALIAAA6IABAKIABAHIAEADIAEACIAEgCIADgDIACgEIAAgHIAAgNIASAAIAAANQAAAPgGAHQgIAIgNAAIgFgBg");
	this.shape_35.setTransform(95.5,106.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.976)").s().p("AAABBIgGAAIgGgCIgGgEQgEgCgDgFQgCgFgBgGQgCgHAAgKIAAhYIAUAAIAABeIABAKIACAGIADAEIAEABIAFgBIAEgEIACgGIAAgKIAAheIAUAAIAABYQAAAKgCAHQgBAGgCAFQgDAFgEACIgGAEIgHACIgGAAg");
	this.shape_36.setTransform(87.6,106.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.976)").s().p("AgGBBIgHgBIgHgFQgDgDgDgEQgCgGgCgHQgBgGAAgKIAAgtQAAgKABgHQACgHACgFQADgEADgDIAHgEIAHgCIAGgBIAHABIAHACIAGADQAEADACAFIAFAMQABAHAAAKIAAAtQAAAKgCAGQgBAIgDAEQgCAFgEADIgHAFIgHABIgGABIgGgBgAgEgxQgCACgCADIgCAGIgBALIAAA5IABAKIACAHIAEADIAEACIAFgCIAEgDIACgHIABgKIAAg5IgBgLIgCgGQgCgDgCgCIgFgBIgEABg");
	this.shape_37.setTransform(79.5,106.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.976)").s().p("AgKBBIgYiBIAUAAIAOBmIAAAAIAPhmIAUAAIgYCBg");
	this.shape_38.setTransform(71.9,106.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.976)").s().p("AgYBBIAAiBIAwAAIAAAPIgbAAIAAAnIAUAAIAAAPIgUAAIAAAsIAcAAIAAAQg");
	this.shape_39.setTransform(135.2,91.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.976)").s().p("AAQBBIgfhUIAAAAIAAAIIABAJIABAMIAAARIAAAmIgSAAIAAiBIAQAAIAfBWIAAAAIAAgHIgBgIIgBgKIAAgOIAAgvIASAAIAACBg");
	this.shape_40.setTransform(127.3,91.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.976)").s().p("AAPBBIgDgXIgXAAIgDAXIgUAAIAYiBIAVAAIAYCBgAgJAbIATAAIgKhAIAAAAg");
	this.shape_41.setTransform(119.4,91.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.976)").s().p("AgMA/QgFgCgDgEQgDgEgCgFIgBgLIABgJIABgLIARAAIgBAQIABAIIABAGIACADIAEABIACgBIACgCIACgFIABgHIAAhkIAUAAIAABhQgBAKgCAGQgCAHgEADQgEAEgFABIgJABQgHAAgFgCg");
	this.shape_42.setTransform(112,91.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.976)").s().p("AAPBBIgDgXIgXAAIgDAXIgUAAIAYiBIAVAAIAYCBgAgJAbIATAAIgKhAIAAAAg");
	this.shape_43.setTransform(102.3,91.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.976)").s().p("AAQBBIgfhUIAAAAIAAAIIABAJIABAMIAAARIAAAmIgSAAIAAiBIAQAAIAfBWIAAAAIAAgHIgBgIIgBgKIAAgOIAAgvIASAAIAACBg");
	this.shape_44.setTransform(94.3,91.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.976)").s().p("AAMBBIgQgxIgIAAIAAAxIgTAAIAAiBIAVAAIAIAAIAHACQAFABAEACIAIAHQACAEACAGQADAGAAAJIAAADQAAAPgFAJQgEAJgIAEIAUA0gAgMACIADAAQAFAAADgBQADgBACgCIADgHIABgLIAAgKIgBgJIgDgGIgEgEIgJgBIgDAAg");
	this.shape_45.setTransform(86.4,91.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.976)").s().p("AgGBBIgHgBIgHgFQgDgDgDgEQgCgGgCgHQgBgGAAgKIAAgtQAAgKABgHQACgHACgFQADgEADgDIAHgEIAHgCIAGgBIAHABIAHACIAGADQAEADACAFIAFAMQABAHAAAKIAAAtQAAAKgCAGQgBAIgDAEQgCAFgEADIgHAFIgHABIgGABIgGgBgAgEgxQgCACgCADIgCAGIgBALIAAA5IABAKIACAHIAEADIAEACIAFgCIAEgDIACgHIABgKIAAg5IgBgLIgCgGQgCgDgCgCIgFgBIgEABg");
	this.shape_46.setTransform(78.1,91.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.976)").s().p("AgWBBIAAiBIAUAAIAABxIAZAAIAAAQg");
	this.shape_47.setTransform(71.7,91.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.976)").s().p("AgOCWIgQgFQgIgDgHgGQgIgGgGgKQgGgKgDgPQgEgOAAgTIAAh9QAAgTAEgOQAEgOAFgKQAGgKAIgFQAIgGAIgDQAIgEAIgBIAOgBIAOABQAIABAIADQAIADAIAGQAHAGAGAJQAGAKADAOQAEAPAAATIAAB9QAAATgEAOQgDAPgGAJQgGAKgIAHQgHAGgIADIgQAFIgOABIgPgBgAgThrQgHAJAAATIAACgQAAASAHAIQAHAJANAAQANAAAHgJQAGgIAAgSIAAigQAAgTgGgJQgHgJgNAAQgNAAgHAJg");
	this.shape_48.setTransform(54.6,98.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.976)").s().p("AgOCWIgQgFQgIgDgHgGQgIgGgGgKQgGgKgDgPQgEgOAAgTIAAh9QAAgTAEgOQAEgOAFgKQAGgKAIgFQAIgGAIgDQAIgEAIgBIAOgBIAOABQAIABAIADQAIADAIAGQAHAGAGAJQAGAKADAOQAEAPAAATIAAB9QAAATgEAOQgDAPgGAJQgGAKgIAHQgHAGgIADIgQAFIgOABIgPgBgAgThrQgHAJAAATIAACgQAAASAHAIQAHAJANAAQANAAAHgJQAGgIAAgSIAAigQAAgTgGgJQgHgJgNAAQgNAAgHAJg");
	this.shape_49.setTransform(36.4,98.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.976)").s().p("AgsCUIAAgiIAiAAIAAjJIglAhIgUgXIBDhGIAiAAIgBAAIABAAIAAEFIAhAAIAAAig");
	this.shape_50.setTransform(20.1,98.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.976)").s().p("AgJCTIAAghQgNgBgJgEQgIgFgEgGQgGgHgCgIQgCgIAAgIIABgOIACgNIAbAAIAAALQABASAFAKQAGAKALAAQAJAAAFgFQAEgFABgKIgBgIIgCgIIgGgKIgIgLIgigtQgJgMgFgMQgFgNgBgPQAAgKADgIQADgJAFgGQAGgHAIgEQAIgFAKgBIAAgfIAXAAIAAAfQALACAIAFQAHAEAFAHQAEAGADAIQABAHAAAIIgBAOIgDANIgaAAIAAgLQAAgSgGgJQgFgKgLAAQgJAAgFAFQgFAGAAAJQAAAHADAHQADAGAFAHIAmAyIAKAOIAHANQADAHACAHIABAPQAAAJgCAJQgDAIgFAGQgGAHgHAEQgHAEgKACIAAAig");
	this.shape_51.setTransform(6.2,102.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift, new cjs.Rectangle(-2.3,9.2,189.3,115.2), null);


(lib.Bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bullet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bullet, new cjs.Rectangle(0,0,24,21), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D7068").s().p("AgKAvIAAgSIAVAAIAAASgAgKAOIAAg8IAVAAIAAA8g");
	this.shape.setTransform(268.7,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D7068").s().p("AgKAvIAAgiIggg7IAYAAIASApIATgpIAYAAIghA8IAAAhg");
	this.shape_1.setTransform(262.6,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D7068").s().p("AAUAvIgFgSIgdAAIgFASIgWAAIAehdIAXAAIAeBdgAgJAMIATAAIgKghIAAAAg");
	this.shape_2.setTransform(254.1,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D7068").s().p("AgkAvIAAhdIAiAAQAQAAALALQAMAKAAARIAAAQQAAASgMAKQgLALgQAAgAgOAeIALAAQAIAAAFgGQAEgGAAgKIAAgQQAAgKgEgFQgFgGgIAAIgLAAg");
	this.shape_3.setTransform(245.6,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D7068").s().p("AgcAlQgLgLAAgSIAAgQQAAgRALgLQALgMARAAQASAAALAMQALALAAARIAAAQQAAASgLALQgLAMgSAAQgRAAgLgMgAgNgYQgEAGAAAKIAAAQQAAALAEAGQAFAHAIAAQAJAAAEgHQAGgGgBgLIAAgQQABgKgGgGQgEgHgJAAQgIAAgFAHg");
	this.shape_4.setTransform(236.7,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D7068").s().p("AgKAvIAAhMIgZAAIAAgRIBHAAIAAARIgZAAIAABMg");
	this.shape_5.setTransform(228.4,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D7068").s().p("AAQAvQgDgCAAgFIgBgJIAAgGQAAgHgEgDQgDgEgGAAIgPAAIAAAkIgWAAIAAhdIAkAAQAPAAALAHQAJAIAAANQAAAHgEAGQgEAFgIACQAKADADAFQAEAGAAAJIAAAGIABAIQABAFADACIAAABgAgQgFIAOAAQAGAAADgDQAEgDAAgGQAAgFgEgEQgDgDgGAAIgOAAg");
	this.shape_6.setTransform(217.2,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D7068").s().p("AggAvIAAhdIBBAAIAAARIgrAAIAAAUIAkAAIAAAQIgkAAIAAAXIAqAAIAAARg");
	this.shape_7.setTransform(209,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D7068").s().p("AgkAvIAAhdIAiAAQAQAAALALQAMAKAAARIAAAQQAAASgMAKQgLALgQAAgAgOAeIALAAQAIAAAFgGQAEgGAAgKIAAgQQAAgKgEgFQgFgGgIAAIgLAAg");
	this.shape_8.setTransform(200.7,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D7068").s().p("AAQAvQgDgCAAgFIgBgJIAAgGQAAgHgEgDQgDgEgGAAIgPAAIAAAkIgWAAIAAhdIAkAAQAPAAAKAHQAKAIAAANQAAAHgEAGQgEAFgIACQAKADADAFQAEAGAAAJIAAAGIABAIQABAFADACIAAABgAgQgFIAOAAQAGAAADgDQAEgDAAgGQAAgFgEgEQgDgDgGAAIgOAAg");
	this.shape_9.setTransform(192.2,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D7068").s().p("AgcAlQgLgLAAgSIAAgQQAAgRALgLQALgMARAAQASAAALAMQALALAAARIAAAQQAAASgLALQgLAMgSAAQgRAAgLgMgAgMgYQgGAGAAAKIAAAQQAAALAGAGQAEAHAIAAQAJAAAFgHQAEgGAAgLIAAgQQAAgKgEgGQgGgHgIAAQgIAAgEAHg");
	this.shape_10.setTransform(183,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0D7068").ss(1,1,1).p("ApJinISTAAQAyAAAAAyIAADrQAAAygyAAIyTAAQgyAAAAgyIAAjrQAAgyAyAAg");
	this.shape_11.setTransform(223.1,19.6,0.833,0.833);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("ApJCoQgyAAAAgyIAAjrQAAgyAyAAISTAAQAyAAAAAyIAADrQAAAygyAAg");
	this.shape_12.setTransform(223.1,19.6,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(169.2,4.7,107.9,30), null);


(lib.bgsnow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgsnow, new cjs.Rectangle(0,0,421,355), null);


(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,300,250), null);


(lib._10k = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAANIgPAeIgTgOIAXgZIgggFIAHgXIAdAQIgEgjIAXAAIgFAjIAdgQIAIAYIghAEIAXAZIgUAPg");
	this.shape.setTransform(96.3,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXCBIgvh7IgBAAIAAB7IgnAAIAAkBIAnAAIAABxIABAAIAshxIAoAAIgzB5IA4CIg");
	this.shape_1.setTransform(84.7,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeCBIgVh8IgHg1IgCAAIgGA1IgXB8IgnAAIglkBIAlAAIASCbIACAkIAEAAIADgpIAciWIAeAAIAbCWIADApIAEAAIACgkIAQibIAlAAIgkEBg");
	this.shape_2.setTransform(64.7,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnCnIAulNIAhAAIguFNg");
	this.shape_3.setTransform(49.3,53);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMCCIgOgDQgHgEgHgFQgGgFgFgJQgFgIgDgNQgDgMAAgRIAAhsQAAgRADgNQADgMAFgIQAFgJAHgFQAGgFAHgDQAHgDAHgBIAMgBIANABIAOAEQAHACAGAGQAHAFAFAIQAFAJADAMQADAMAAASIAABsQAAARgDAMQgDANgFAIQgFAJgHAFIgNAJIgOADIgNACIgMgCgAgQhdQgGAHAAARIAACLQAAAQAGAIQAFAHALAAQAMAAAGgHQAGgIAAgQIAAiLQAAgRgGgHQgGgIgMAAQgLAAgFAIg");
	this.shape_4.setTransform(37.2,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnCBIAAgdIAeAAIAAiwIggAdIgRgUIA6g9IAdAAIAAAAIAAAAIAADkIAeAAIAAAdg");
	this.shape_5.setTransform(23,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKCmIAAgkQgPgCgKgFQgJgFgFgIQgHgHgCgJQgDgJAAgKIABgPIAEgPIAeAAIAAAMQAAAVAHALQAFALAOAAQAKAAAGgFQAFgGAAgLIgBgJIgDgKIgFgLIgJgMIgngzQgKgNgHgOQgFgOAAgRQAAgMADgJQADgKAGgIQAGgHAJgFQAJgFALgCIAAgiIAcAAIAAAiQALACAJAGQAIAFAGAIQAFAHACAJQACAIAAAJIgBAPIgDAQIgeAAIAAgNQAAgUgHgLQgGgLgNAAQgKAAgFAGQgGAGAAAKQAAAJAEAHIAJAPIArA5QAHAIAEAIIAJAPQADAHACAIQACAIAAAJQAAALgDAKQgEAJgFAHQgHAIgIAEQgIAFgKACIAAAmg");
	this.shape_6.setTransform(9.2,52);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBhIAAiqIgfAAIAAgXIBbAAIAAAXIgfAAIAACqg");
	this.shape_7.setTransform(77.5,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBfQgJgDgFgGQgFgGgDgHQgCgIAAgIIABgLIACgLIAXAAIAAAJIABAOIADAKQACAEAEACQAEACAFAAQAIAAAEgEQAEgFAAgJIAAgIIgCgIIgFgHIgGgKIgegjQgIgLgEgKQgFgLAAgMQAAgKADgIQADgIAGgFQAFgGAJgEQAIgDAKAAQANAAAIAEQAJADAFAGQAFAGACAIQACAHAAAHIgBAMIgCALIgXAAIAAgJQAAgPgEgIQgFgJgJAAQgIAAgEAFQgEAFAAAHIABAIIABAGIADAFIAEAGIAhAoQAKAMAFALQAFALAAANQAAAKgEAIQgDAJgGAGQgGAFgIAEQgJADgKAAQgNAAgIgEg");
	this.shape_8.setTransform(67.2,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBhIgKgCQgFgCgFgEQgEgEgEgHQgEgHgCgKQgCgKAAgOIAAiGIAdAAIAACNIABAQQABAGACADQACAEADABQADACAEAAQAEAAADgCQADgBADgEQACgDABgGIABgQIAAiNIAdAAIAACGQAAAOgCAKQgDAKgDAHQgEAHgFAEQgFAEgFACQgFACgFAAIgJABIgJgBg");
	this.shape_9.setTransform(55.5,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBeQgIgDgEgGQgFgGgBgHQgCgJAAgIIAAgOIACgPIAYAAIAAAXIABANIACAIIADAFIAGAAIADAAIAEgEQACgCAAgFIABgLIAAiWIAdAAIAACSQAAAPgDAKQgDAJgGAGQgFAFgIACQgHACgHAAQgLAAgHgEg");
	this.shape_10.setTransform(43.7,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBhIgYhJIgMAAIAABJIgdAAIAAjBIAhAAIALABIAMACQAHACAGADQAGADAFAHQAFAGADAJQACAKAAAMIAAAGQAAAVgGAOQgGANgNAHIAgBNgAgTADIAFAAQAHAAAGgBQAEgCADgDQAEgEACgHIABgRIAAgPIgBgMQgCgGgDgEQgDgDgFgCQgFgCgIAAIgFAAg");
	this.shape_11.setTransform(29.3,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBiIgLgDQgFgDgFgEQgFgEgEgIQgDgHgDgKQgCgLAAgOIAAhEQAAgOACgKQADgLADgHQAEgIAFgDQAFgFAGgCIAKgDIAJAAIAKAAQAFAAAFADQAGACAFAEQAFAEADAIQAEAHADAKQACAKAAAPIAABEQAAAOgCAKQgDALgEAHQgDAIgFAEIgLAGIgKAEIgKABIgJgBgAgGhJQgEACgCADQgCAFgBAFIgBAQIAABYIABAOQABAHACADQACADAEACQADACADgBQAFABADgCQADgCACgDQACgDABgHIABgOIAAhYIgBgQQgBgFgCgFQgCgDgDgCQgDgBgFgBQgDABgDABg");
	this.shape_12.setTransform(16.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkBhIAAjBIBJAAIAAAXIgsAAIAAA7IAiAAIAAAVIgiAAIAABag");
	this.shape_13.setTransform(6.9,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._10k, new cjs.Rectangle(0,0,103.2,74), null);


(lib.bullets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bullet();
	this.instance.parent = this;
	this.instance.setTransform(12,88.9,1,1,0,0,0,12,10.5);

	this.instance_1 = new lib.Bullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.8,10.5,1,1,0,0,0,12,10.5);

	this.instance_2 = new lib.Bullet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(191,10.5,1,1,0,0,0,12,10.5);

	this.instance_3 = new lib.Bullet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(181.6,51.7,1,1,0,0,0,12,10.5);

	this.instance_4 = new lib.Bullet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(141.5,37.7,1,1,0,0,0,12,10.5);

	this.instance_5 = new lib.Bullet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(112.2,61.1,1,1,0,0,0,12,10.5);

	this.instance_6 = new lib.Bullet();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.3,49.4,1,1,0,0,0,12,10.5);

	this.instance_7 = new lib.Bullet();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62.7,78.3,1,1,0,0,0,12,10.5);

	this.instance_8 = new lib.Bullet();
	this.instance_8.parent = this;
	this.instance_8.setTransform(33.2,67.7,1,1,0,0,0,12,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullets, new cjs.Rectangle(0,0,244.8,99.4), null);


// stage content:
(lib.CardioTech_NY_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_867 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(867).call(this.frame_867).wait(1));

	// Слой 21
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(75.5,280.9,1,1,0,0,0,63.6,16.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).to({y:219.8},10,cjs.Ease.get(1)).wait(75).to({y:270.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,y:280.9},0).to({y:219.8},10,cjs.Ease.get(1)).wait(75).to({y:270.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(218).to({_off:false,y:280.9},0).to({y:219.8},10,cjs.Ease.get(1)).wait(17));

	// Слой 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_133 = new cjs.Graphics().p("Ao7DyIAkgeIgGgNILcpsIAVgNQAagNAfAHQAiAGBtAlQBjAiAkAPQAbALgCAQQgCANgQAMQgRAOrFLVg");
	var mask_graphics_223 = new cjs.Graphics().p("AnYDIIAegYIgGgLIJeoBIARgLQAWgKAaAFQAcAGBaAeQBSAcAeAMQAWAJgCAOQgCAKgNALQgOALpKJXg");
	var mask_graphics_447 = new cjs.Graphics().p("Ao7DyIAkgeIgGgNILcpsIAVgNQAagNAfAHQAiAGBtAlQBjAiAkAPQAbALgCAQQgCANgQAMQgRAOrFLVg");
	var mask_graphics_537 = new cjs.Graphics().p("AnYDIIAegYIgGgLIJeoBIARgLQAWgKAaAFQAcAGBaAeQBSAcAeAMQAWAJgCAOQgCAKgNALQgOALpKJXg");
	var mask_graphics_761 = new cjs.Graphics().p("Ao7DyIAkgeIgGgNILcpsIAVgNQAagNAfAHQAiAGBtAlQBjAiAkAPQAbALgCAQQgCANgQAMQgRAOrFLVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(133).to({graphics:mask_graphics_133,x:205.1,y:156.1}).wait(80).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_223,x:220.2,y:134}).wait(80).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_graphics_447,x:205.1,y:156.1}).wait(80).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_537,x:220.2,y:134}).wait(80).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_graphics_761,x:205.1,y:156.1}).wait(80).to({graphics:null,x:0,y:0}).wait(27));

	// Слой 25
	this.instance_1 = new lib.moove();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.3,150.8,1.025,1.025,17,0,0,54.9,13.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({_off:true},80).wait(10).to({_off:false,regY:13.5,scaleX:0.85,scaleY:0.85,x:231.9,y:129.6},0).to({_off:true},80).wait(144).to({_off:false,regY:13.4,scaleX:1.02,scaleY:1.02,x:219.3,y:150.8},0).to({_off:true},80).wait(10).to({_off:false,regY:13.5,scaleX:0.85,scaleY:0.85,x:231.9,y:129.6},0).to({_off:true},80).wait(144).to({_off:false,regY:13.4,scaleX:1.02,scaleY:1.02,x:219.3,y:150.8},0).to({_off:true},80).wait(27));

	// speakers
	this.instance_2 = new lib.speakers_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380.2,111.7,1,1,0,0,0,79.5,102.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(123).to({_off:false},0).to({x:209.2},10,cjs.Ease.get(1)).wait(80).to({regY:102.6,scaleX:0.85,scaleY:0.85,x:224.8,y:97},10).wait(80).to({x:367.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(123).to({_off:false,regY:102.5,scaleX:1,scaleY:1,x:380.2,y:111.7},0).to({x:209.2},10,cjs.Ease.get(1)).wait(80).to({regY:102.6,scaleX:0.85,scaleY:0.85,x:224.8,y:97},10).wait(80).to({x:367.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(123).to({_off:false,regY:102.5,scaleX:1,scaleY:1,x:380.2,y:111.7},0).to({x:209.2},10,cjs.Ease.get(1)).wait(80).to({regY:102.6,scaleX:0.85,scaleY:0.85,x:224.8,y:97},10).wait(17));

	// txt-3
	this.instance_3 = new lib.txt3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.1,59.3,1,1,0,0,0,65.4,53);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(123).to({_off:false},0).to({x:74.1,alpha:1},10,cjs.Ease.get(1)).wait(65).to({x:44.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false},0).to({x:74.1,alpha:1},10,cjs.Ease.get(1)).wait(65).to({x:44.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(228).to({_off:false},0).to({x:74.1,alpha:1},10,cjs.Ease.get(1)).wait(65).to({x:44.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

	// T&C
	this.instance_4 = new lib.TC();
	this.instance_4.parent = this;
	this.instance_4.setTransform(287.3,178.7,1,1,0,0,0,26.9,7.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(128).to({_off:false},0).to({x:267.3,alpha:1},15,cjs.Ease.get(1)).wait(65).to({y:182.3},10).wait(75).to({x:317.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(138).to({_off:false,x:287.3,y:178.7},0).to({x:267.3,alpha:1},15,cjs.Ease.get(1)).wait(65).to({y:182.3},10).wait(75).to({x:317.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(138).to({_off:false,x:287.3,y:178.7},0).to({x:267.3,alpha:1},15,cjs.Ease.get(1)).wait(65).to({y:182.3},10).wait(22));

	// 10k
	this.instance_5 = new lib._10k();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90.3,152.1,1,1,0,0,0,51.6,37);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(128).to({_off:false},0).to({x:60.3,alpha:1},10,cjs.Ease.get(1)).wait(65).to({regX:0,regY:0,x:8.7,y:115.1},0).to({x:7.1,y:-1.7},10).wait(85).to({x:-6.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(133).to({_off:false,regX:51.6,regY:37,x:90.3,y:152.1},0).to({x:60.3,alpha:1},10,cjs.Ease.get(1)).wait(65).to({regX:0,regY:0,x:8.7,y:115.1},0).to({x:7.1,y:-1.7},10).wait(85).to({x:-6.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(133).to({_off:false,regX:51.6,regY:37,x:90.3,y:152.1},0).to({x:60.3,alpha:1},10,cjs.Ease.get(1)).wait(65).to({regX:0,regY:0,x:8.7,y:115.1},0).to({x:7.1,y:-1.7},10).wait(27));

	// gift
	this.instance_6 = new lib.gift();
	this.instance_6.parent = this;
	this.instance_6.setTransform(47,90.1,1,1,0,0,0,67,17.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(213).to({_off:false},0).to({x:77,alpha:1},15,cjs.Ease.get(1)).wait(75).to({x:47,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(213).to({_off:false},0).to({x:77,alpha:1},15,cjs.Ease.get(1)).wait(75).to({x:47,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(213).to({_off:false},0).to({x:77,alpha:1},15,cjs.Ease.get(1)).wait(12));

	// gift
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77,272.5,1,1,0,0,0,67,17.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(128).to({_off:false},0).to({y:227},10,cjs.Ease.get(1)).wait(165).to({y:272},10,cjs.Ease.get(-1)).to({_off:true},1).wait(128).to({_off:false,y:272.5},0).to({y:227},10,cjs.Ease.get(1)).wait(165).to({y:272},10,cjs.Ease.get(-1)).to({_off:true},1).wait(128).to({_off:false,y:272.5},0).to({y:227},10,cjs.Ease.get(1)).wait(102));

	// Слой 20
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,102,0)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape.setTransform(150.5,222.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,204,102,0.102)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_1.setTransform(150.5,222.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,204,102,0.2)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_2.setTransform(150.5,222.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,204,102,0.302)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_3.setTransform(150.5,222.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,204,102,0.4)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_4.setTransform(150.5,222.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,204,102,0.502)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_5.setTransform(150.5,222.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,204,102,0.6)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_6.setTransform(150.5,222.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,204,102,0.698)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_7.setTransform(150.5,222.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,204,102,0.8)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_8.setTransform(150.5,222.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,204,102,0.898)").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_9.setTransform(150.5,222.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC66").s().p("A3gEUIAAonMAvBAAAIAAIng");
	this.shape_10.setTransform(150.5,222.4);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},213).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},75).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape}]},218).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},75).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape}]},218).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(223).to({_off:false},0).wait(85).to({_off:true},1).wait(228).to({_off:false},0).wait(85).to({_off:true},1).wait(228).to({_off:false},0).wait(17));

	// Слой 17
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(115,19,56,0)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_11.setTransform(150.5,153.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(113,54,65,0.188)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_12.setTransform(150.5,153.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(110,86,73,0.361)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_13.setTransform(150.5,153.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(108,113,79,0.51)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_14.setTransform(150.5,153.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(107,137,85,0.639)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_15.setTransform(150.5,153.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(105,158,91,0.749)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_16.setTransform(150.5,153.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(104,174,95,0.839)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_17.setTransform(150.5,153.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(103,187,98,0.91)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_18.setTransform(150.5,153.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(103,197,100,0.961)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_19.setTransform(150.5,153.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,202,102,0.988)").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_20.setTransform(150.5,153.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CC66").s().p("A3gFrIAArVMAvBAAAIAALVg");
	this.shape_21.setTransform(150.5,153.5);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66CC66").s().p("A3gFuIAAraMAvBAAAIAALag");
	this.shape_22.setTransform(150.5,142);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CC66").s().p("A3gFvIAArdMAvBAAAIAALdg");
	this.shape_23.setTransform(150.5,130.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66CC66").s().p("A3gFyIAAriMAvBAAAIAALig");
	this.shape_24.setTransform(150.5,119);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CC66").s().p("A3gFzIAArlMAvBAAAIAALlg");
	this.shape_25.setTransform(150.5,107.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66CC66").s().p("A3gF2IAArqMAvBAAAIAALqg");
	this.shape_26.setTransform(150.5,96);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66CC66").s().p("A3gF3IAArtMAvBAAAIAALtg");
	this.shape_27.setTransform(150.5,84.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66CC66").s().p("A3gF6IAAryMAvBAAAIAALyg");
	this.shape_28.setTransform(150.5,73);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66CC66").s().p("A3gF7IAAr1MAvBAAAIAAL1g");
	this.shape_29.setTransform(150.5,61.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66CC66").s().p("A3gF9IAAr5MAvBAAAIAAL5g");
	this.shape_30.setTransform(150.5,50);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66CC66").s().p("A3gGAIAAr+MAvBAAAIAAL+g");
	this.shape_31.setTransform(150.5,38.5);
	this.shape_31._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},123).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},70).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},85).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},128).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},70).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},85).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},128).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},70).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(133).to({_off:false},0).wait(70).to({_off:true},1).wait(243).to({_off:false},0).wait(70).to({_off:true},1).wait(243).to({_off:false},0).wait(70).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(213).to({_off:false},0).wait(95).to({_off:true},1).wait(218).to({_off:false},0).wait(95).to({_off:true},1).wait(218).to({_off:false},0).wait(27));

	// bg-2.jpg
	this.instance_8 = new lib.bg2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(175).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(118).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(175).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(118).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(112));

	// Слой 7
	this.instance_9 = new lib.txt1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.6,-67,0.649,0.649,0,0,0,-77.9,-86.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(78).to({_off:false},0).to({y:15.5,alpha:1},10,cjs.Ease.get(1)).wait(40).to({regX:69.2,regY:89.1,x:247,y:129.5},0).to({x:245.6,y:109.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(252).to({_off:false,regX:-77.9,regY:-86.6,x:151.6,y:-67},0).to({y:15.5,alpha:1},10,cjs.Ease.get(1)).wait(40).to({regX:69.2,regY:89.1,x:247,y:129.5},0).to({x:245.6,y:109.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(252).to({_off:false,regX:-77.9,regY:-86.6,x:151.6,y:-67},0).to({y:15.5,alpha:1},10,cjs.Ease.get(1)).wait(40).to({regX:69.2,regY:89.1,x:247,y:129.5},0).to({x:245.6,y:109.5,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(100));

	// Bullet
	this.instance_10 = new lib.Bullet();
	this.instance_10.parent = this;
	this.instance_10.setTransform(37.9,119.7,1,1,0,0,0,12,10.5);

	this.instance_11 = new lib.Bullet();
	this.instance_11.parent = this;
	this.instance_11.setTransform(59,98.5,1,1,0,0,0,12,10.5);

	this.instance_12 = new lib.Bullet();
	this.instance_12.parent = this;
	this.instance_12.setTransform(59,98.5,1,1,0,0,0,12,10.5);

	this.instance_13 = new lib.Bullet();
	this.instance_13.parent = this;
	this.instance_13.setTransform(59,98.5,1,1,0,0,0,12,10.5);

	this.instance_14 = new lib.Bullet();
	this.instance_14.parent = this;
	this.instance_14.setTransform(59,98.5,1,1,0,0,0,12,10.5);

	this.instance_15 = new lib.Bullet();
	this.instance_15.parent = this;
	this.instance_15.setTransform(59,98.5,1,1,0,0,0,12,10.5);

	this.instance_16 = new lib.Bullet();
	this.instance_16.parent = this;
	this.instance_16.setTransform(88.5,109.1,1,1,0,0,0,12,10.5);

	this.instance_17 = new lib.Bullet();
	this.instance_17.parent = this;
	this.instance_17.setTransform(59,98.5,1,1,0,0,0,12,10.5);

	this.instance_18 = new lib.bullets();
	this.instance_18.parent = this;
	this.instance_18.setTransform(148.3,80.4,1,1,0,0,0,122.4,49.6);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},31).to({state:[{t:this.instance_11,p:{x:59,y:98.5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_12,p:{x:59,y:98.5}},{t:this.instance_11,p:{x:88.5,y:109.1}},{t:this.instance_10}]},3).to({state:[{t:this.instance_13,p:{x:59,y:98.5}},{t:this.instance_12,p:{x:88.5,y:109.1}},{t:this.instance_11,p:{x:109.1,y:80.2}},{t:this.instance_10}]},6).to({state:[{t:this.instance_14,p:{x:59,y:98.5}},{t:this.instance_13,p:{x:88.5,y:109.1}},{t:this.instance_12,p:{x:109.1,y:80.2}},{t:this.instance_11,p:{x:138.1,y:91.9}},{t:this.instance_10}]},10).to({state:[{t:this.instance_15,p:{x:59,y:98.5}},{t:this.instance_14,p:{x:88.5,y:109.1}},{t:this.instance_13,p:{x:109.1,y:80.2}},{t:this.instance_12,p:{x:138.1,y:91.9}},{t:this.instance_11,p:{x:167.4,y:68.5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{x:109.1,y:80.2}},{t:this.instance_14,p:{x:138.1,y:91.9}},{t:this.instance_13,p:{x:167.4,y:68.5}},{t:this.instance_12,p:{x:207.4,y:82.5}},{t:this.instance_11,p:{x:216.9,y:41.3}},{t:this.instance_10}]},4).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_18}]},10).to({state:[]},74).to({state:[{t:this.instance_10}]},190).to({state:[{t:this.instance_11,p:{x:59,y:98.5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_12,p:{x:59,y:98.5}},{t:this.instance_11,p:{x:88.5,y:109.1}},{t:this.instance_10}]},3).to({state:[{t:this.instance_13,p:{x:59,y:98.5}},{t:this.instance_12,p:{x:88.5,y:109.1}},{t:this.instance_11,p:{x:109.1,y:80.2}},{t:this.instance_10}]},6).to({state:[{t:this.instance_14,p:{x:59,y:98.5}},{t:this.instance_13,p:{x:88.5,y:109.1}},{t:this.instance_12,p:{x:109.1,y:80.2}},{t:this.instance_11,p:{x:138.1,y:91.9}},{t:this.instance_10}]},10).to({state:[{t:this.instance_15,p:{x:59,y:98.5}},{t:this.instance_14,p:{x:88.5,y:109.1}},{t:this.instance_13,p:{x:109.1,y:80.2}},{t:this.instance_12,p:{x:138.1,y:91.9}},{t:this.instance_11,p:{x:167.4,y:68.5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{x:109.1,y:80.2}},{t:this.instance_14,p:{x:138.1,y:91.9}},{t:this.instance_13,p:{x:167.4,y:68.5}},{t:this.instance_12,p:{x:207.4,y:82.5}},{t:this.instance_11,p:{x:216.9,y:41.3}},{t:this.instance_10}]},4).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_18}]},10).to({state:[]},74).to({state:[{t:this.instance_10}]},190).to({state:[{t:this.instance_11,p:{x:59,y:98.5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_12,p:{x:59,y:98.5}},{t:this.instance_11,p:{x:88.5,y:109.1}},{t:this.instance_10}]},3).to({state:[{t:this.instance_13,p:{x:59,y:98.5}},{t:this.instance_12,p:{x:88.5,y:109.1}},{t:this.instance_11,p:{x:109.1,y:80.2}},{t:this.instance_10}]},6).to({state:[{t:this.instance_14,p:{x:59,y:98.5}},{t:this.instance_13,p:{x:88.5,y:109.1}},{t:this.instance_12,p:{x:109.1,y:80.2}},{t:this.instance_11,p:{x:138.1,y:91.9}},{t:this.instance_10}]},10).to({state:[{t:this.instance_15,p:{x:59,y:98.5}},{t:this.instance_14,p:{x:88.5,y:109.1}},{t:this.instance_13,p:{x:109.1,y:80.2}},{t:this.instance_12,p:{x:138.1,y:91.9}},{t:this.instance_11,p:{x:167.4,y:68.5}},{t:this.instance_10}]},3).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{x:109.1,y:80.2}},{t:this.instance_14,p:{x:138.1,y:91.9}},{t:this.instance_13,p:{x:167.4,y:68.5}},{t:this.instance_12,p:{x:207.4,y:82.5}},{t:this.instance_11,p:{x:216.9,y:41.3}},{t:this.instance_10}]},4).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_18}]},10).to({state:[]},74).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({_off:false},0).wait(8).to({y:160.4},10).to({_off:true},74).wait(222).to({_off:false,y:80.4},0).wait(8).to({y:160.4},10).to({_off:true},74).wait(222).to({_off:false,y:80.4},0).wait(8).to({y:160.4},10).to({_off:true},74).wait(85));

	// sign
	this.instance_19 = new lib.sign_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(101.4,169.5,0.436,0.436,0,0,0,166.8,120.7);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).to({regX:167,regY:120.5,scaleX:1,scaleY:1,x:143,y:143.5,alpha:1},12,cjs.Ease.get(1)).wait(55).to({y:223.5},10).to({_off:true},74).wait(159).to({_off:false,regX:166.8,regY:120.6,scaleX:0.56,scaleY:0.56,x:91.1,y:161.5,alpha:0},0).wait(5).to({regX:167,regY:120.5,scaleX:1,scaleY:1,x:143,y:143.5,alpha:1},11,cjs.Ease.get(1)).wait(55).to({y:223.5},10).to({_off:true},74).wait(159).to({_off:false,regX:166.8,regY:120.6,scaleX:0.56,scaleY:0.56,x:91.1,y:161.5,alpha:0},0).wait(5).to({regX:167,regY:120.5,scaleX:1,scaleY:1,x:143,y:143.5,alpha:1},11,cjs.Ease.get(1)).wait(55).to({y:223.5},10).to({_off:true},74).wait(85));

	// Слой 8
	this.instance_20 = new lib.txt2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(222.6,160.1,1,1,0,0,0,69.1,89);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(71).to({_off:false},0).to({x:223,y:159.7,alpha:1},10).to({_off:true},65).wait(239).to({_off:false,x:222.6,y:160.1,alpha:0},0).to({x:223,y:159.7,alpha:1},10).to({_off:true},65).wait(239).to({_off:false,x:222.6,y:160.1,alpha:0},0).to({x:223,y:159.7,alpha:1},10).to({_off:true},65).wait(94));

	// bg-snow
	this.instance_21 = new lib.bgsnow();
	this.instance_21.parent = this;
	this.instance_21.setTransform(150.7,122.4,0.72,0.72,0,0,0,210.6,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:210.5,scaleX:1,scaleY:1,x:210.5,y:72.5},16,cjs.Ease.get(1)).wait(55).to({y:152.5},10).wait(59).to({regX:210.6,scaleX:0.72,scaleY:0.72,x:150.7,y:122.4},0).wait(174).to({regX:210.5,scaleX:1,scaleY:1,x:210.5,y:72.5},16,cjs.Ease.get(1)).wait(55).to({y:152.5},10).wait(59).to({regX:210.6,scaleX:0.72,scaleY:0.72,x:150.7,y:122.4},0).wait(174).to({regX:210.5,scaleX:1,scaleY:1,x:210.5,y:72.5},16,cjs.Ease.get(1)).wait(55).to({y:152.5},10).wait(59).to({regX:210.6,scaleX:0.72,scaleY:0.72,x:150.7,y:122.4},0).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.1,119.6,303.1,255.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CardioTech_NY_300x250_atlas_P_.png", id:"CardioTech_NY_300x250_atlas_P_"},
		{src:"images/CardioTech_NY_300x250_atlas_NP_.jpg", id:"CardioTech_NY_300x250_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;