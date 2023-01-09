(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_Debtmend_atlas_.png", id:"160x600_Debtmend_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"160x600_Debtmend_atlas_", frames: [[0,0,500,345],[0,347,412,189]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.pic = function() {
	this.spriteSheet = ss["160x600_Debtmend_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["160x600_Debtmend_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.well = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAB3").s().p("AgMA9IAAgcIAZAAIAAAcgAgMANIAAhJIAZAAIAABJg");
	this.shape.setTransform(-34.6,28.8,0.794,0.794);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAB3").s().p("AgYA4QgMgGgGgIQgIgHgFgNQgEgKAAgMQAAgLAFgLQAFgMAHgIQAIgIALgFQALgFAMAAQANAAALAFQAMAGAIAIQAGAIAFAMQAFALAAAKQAAAMgFALQgFALgHAIQgJAKgLAEQgMAFgLAAQgMAAgMgFgAgNggQgHAEgDAEQgEAFgCAHQgCAGAAAGQAAAHACAGQADAHADAFQAEAEAGAEQAGADAHAAQAGAAAHgDQAGgDAEgGQAEgFACgGQACgGAAgHQAAgHgCgGQgDgGgDgFQgEgFgGgDQgGgDgHAAQgHAAgGADg");
	this.shape_1.setTransform(-42,28.9,0.794,0.794);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAB3").s().p("AgMA9IAAhfIgmAAIAAgZIBlAAIAAAZIglAAIAABfg");
	this.shape_2.setTransform(-51.5,28.9,0.794,0.794);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAB3").s().p("AgqA9IAAh4IBSAAIAAAZIg1AAIAAAXIAuAAIAAAVIguAAIAAAaIA4AAIAAAZg");
	this.shape_3.setTransform(-62.7,28.9,0.794,0.794);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAB3").s().p("AgKA9Igvh4IAeAAIAbBUIAchUIAeAAIguB4g");
	this.shape_4.setTransform(-71.6,28.9,0.794,0.794);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAB3").s().p("AAcA9IgKgcIgkAAIgJAcIgcAAIAsh4IAYAAIArB4gAgNANIAbAAIgOgog");
	this.shape_5.setTransform(-80.7,28.9,0.794,0.794);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAB3").s().p("AAXA9IAAgzIguAAIAAAzIgbAAIAAh4IAbAAIAAAvIAuAAIAAgvIAcAAIAAB4g");
	this.shape_6.setTransform(-90.4,28.9,0.794,0.794);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAB3").s().p("AgMA9IAAhfIgmAAIAAgZIBlAAIAAAZIglAAIAABfg");
	this.shape_7.setTransform(-102.8,29.1,0.794,0.794);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAB3").s().p("AgKATIAAglIAVAAIAAAlg");
	this.shape_8.setTransform(-108.8,25.6,0.794,0.794);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AAeA9Ig2hEIAABEIgcAAIAAh4IAWAAIA2BFIAAhFIAdAAIAAB4g");
	this.shape_9.setTransform(-115.6,29.1,0.794,0.794);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAB3").s().p("AgXA4QgMgGgHgIQgHgHgGgNQgEgLAAgLQAAgLAEgLQAHgNAGgHQAIgIAMgFQAKgFAMAAQANAAALAFQAMAGAIAIQAHAIAFAMQAEAKAAALQAAAMgEALQgFALgIAIQgKAKgJAEQgMAFgMAAQgLAAgMgFgAgMggQgIAFgCADQgEAFgCAHQgCAGAAAGQAAAHACAGQABAFAFAHQADAEAHAEQAGADAGAAQAHAAAHgDQAGgEADgFQAFgFACgGQACgGAAgHQAAgHgCgGQgDgGgEgFQgEgFgFgDQgHgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(-126,29.1,0.794,0.794);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAB3").s().p("AgzA9IAAh4IAtAAQAMgBANAGQAKADAIAKQAIAHADAMQAEAJABANQgBANgEAMQgEALgIAIQgIAHgLAFQgLAFgMAAgAgXAkIARAAQAGgBAFgCQAHgDADgEQAEgFADgHQACgJAAgFQAAgFgCgJQgDgGgEgEQgDgFgHgDQgEgDgHABIgRAAg");
	this.shape_11.setTransform(-135.8,29.1,0.794,0.794);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAB3").s().p("AgXA4QgLgFgGgJQgHgHgCgLQgEgMAAgMIAAg8IAdAAIAAA8QAAAHABAHQAAAFAEAGQADAFAFADQAGADAFAAQAGAAAGgDQAEgDAEgFQACgGACgFIABgOIAAg8IAcAAIAAA8QAAALgDANQgDAJgHAKQgHAJgKAEQgKAFgNAAQgMAAgLgFg");
	this.shape_12.setTransform(-94.2,14,0.794,0.794);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AAB3").s().p("AgXA4QgMgGgHgIQgHgHgGgNQgEgLAAgLQAAgMAFgKQAFgMAIgIQAHgIAMgFQAKgFAMAAQANAAALAFQAMAGAIAIQAHAIAFAMQAEAKAAALQAAAMgEALQgFALgIAIQgKAKgJAEQgMAFgMAAQgLAAgMgFgAgMggQgHAEgDAEQgEAFgCAHQgCAGAAAGQAAAHACAGQACAHAEAFQAEAEAGAEQAGADAGAAQAHAAAHgDQAFgDAEgGQAFgFACgGQABgGAAgHQAAgHgBgGQgDgGgEgFQgEgFgGgDQgFgDgIAAQgGAAgGADg");
	this.shape_13.setTransform(-104.5,14,0.794,0.794);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AAB3").s().p("AgNA9IAAgqIgrhOIAfAAIAZA3IAZg3IAgAAIgsBOIAAAqg");
	this.shape_14.setTransform(-114.1,14,0.794,0.794);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AgWA4QgKgFgIgJQgGgGgGgOQgEgMAAgKQAAgKAFgMQAFgMAHgHQAIgKAKgEQAKgFALAAQANAAAKAFQAMAHAGAHQAIAJAEALQAEAKAAALQAAALgEAMQgFAMgHAIQgJAIgKAFQgKAFgMAAQgMAAgKgFgAgQgqQgHAEgGAHQgFAFgDAKQgDAIAAAIQAAAIADAKQADAIAFAGQAFAHAJAFQAIADAHAAQAJAAAIgEQAIgEAFgHQAGgIACgHQADgJAAgIQAAgIgDgIQgDgJgFgHQgFgGgIgEQgIgEgJAAQgJAAgHAEg");
	this.shape_15.setTransform(-126.8,14,0.794,0.794);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AgWA5QgOgFgJgIIAHgNIAHAGIAKAFIAMAEQAGABAGAAQAMAAAIgEQAHgEAAgKQAAgFgCgEQgCgDgFgDQgFgDgGgBIgNgEIgQgFQgIgBgEgDQgFgEgCgFQgDgGAAgGQAAgJAEgHQADgHAGgEQAFgFAIgCQAIgCAIAAQANAAAJADQAKAEAIAGIgHANIgGgFIgHgEIgKgDIgKgBQgMAAgHAGQgHAFAAAJQAAAGACACQABADAFADQAFADAFABIAMAEIARAEQAJACAEADQAFADAEAGQACAHAAAHQAAAJgDAHQgDAGgGAEQgGAEgIACQgIACgKAAQgMAAgMgEg");
	this.shape_16.setTransform(-136.1,14,0.794,0.794);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#727477").s().p("AgEAQIADgPIgEAAIAAgQIALAAIAAAQIgFAPg");
	this.shape_17.setTransform(-22.7,3.6,0.794,0.794);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727477").s().p("AgWA5QgMgEgLgJIAHgNQADADAEADIAKAFQAHADAFABQAGABAGAAQAMAAAIgEQAHgEAAgKQAAgFgCgEQgCgDgFgDIgLgEIgNgEQgLgDgFgCQgIgBgEgDQgFgEgCgFQgDgFAAgHQAAgJAEgHQADgHAGgEQAFgFAIgCQAIgCAIAAQANAAAJADQAKAEAIAHIgHAMIgGgFIgHgEIgKgDIgKgBQgMAAgHAGQgHAFAAAJQAAAGACACQABADAFADIAKAEIAMAEIARAEQAJACAEADQAGAFADAFQACAGAAAHQAAAJgDAHQgDAGgGAEQgIAFgGABQgIACgKAAQgMAAgMgEg");
	this.shape_18.setTransform(-28.3,-1,0.794,0.794);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#727477").s().p("AAcA9IgcgsIgdAAIAAAsIgQAAIAAh5IAyAAQAHABAIADQAFADAHAGQAFAGACAHQADAGAAAHIgCANQgBAFgEAEQgDAEgFAEIgKAFIAdAvgAgdADIAiAAQAFAAAEgCIAGgEIAFgIQABgEAAgGQAAgFgBgEIgGgIQgDgEgEgBQgDgCgFAAIghAAg");
	this.shape_19.setTransform(-36.5,-1,0.794,0.794);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#727477").s().p("AgWA4QgLgFgHgJQgIgJgEgLQgEgJAAgNQAAgMAEgKQAFgLAHgJQAJgIAKgFQAKgFALAAQANAAAKAGQALAFAHAIQAHAIAFAMQAEAMAAAJQAAAMgFALQgEAMgIAIQgHAIgLAFQgKAFgMAAQgMAAgKgFgAgQgqQgJAFgEAGQgGAIgCAHQgDAJAAAHQAAAIADAKQADAKAFAFQAGAHAHAEQAIADAIAAQAJAAAIgEQAGgDAHgIQAFgGADgJQADgJAAgIQAAgIgDgIQgDgIgFgIQgGgGgIgEQgGgEgKAAQgHAAgJAEg");
	this.shape_20.setTransform(-46.4,-1,0.794,0.794);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#727477").s().p("AgGA9IAAhqIgqAAIAAgPIBhAAIAAAPIgqAAIAABqg");
	this.shape_21.setTransform(-55.7,-1,0.794,0.794);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727477").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_22.setTransform(-61.6,-1,0.794,0.794);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727477").s().p("AgxA9IAAh5IAqAAQALAAANAGQAKADAJAJQAGAJAEALQAEAKAAAMQAAANgEAMQgFAMgHAHQgIAHgKAFQgLAFgMAAgAghAuIAaAAQAKAAAHgDQAJgEAFgGQAFgHACgIQAEgIAAgKQAAgJgEgIQgCgIgFgHQgGgGgIgEQgIgDgJAAIgaAAg");
	this.shape_23.setTransform(-68,-1,0.794,0.794);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727477").s().p("AgoA9IAAh5IBPAAIAAAPIg/AAIAAAnIA3AAIAAAKIg3AAIAAAqIBBAAIAAAPg");
	this.shape_24.setTransform(-77,-1,0.794,0.794);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727477").s().p("AAdA9IgcgsIgfAAIAAAsIgPAAIAAh5IAyAAQAHABAIADQAGADAGAGQAEAEAEAJQACAHAAAGIgCANQAAAFgFAEQgCAEgGAEQgGAEgFABIAeAvgAgeADIAjAAQAFAAAEgCIAHgEIAEgIQABgEAAgGQAAgFgBgEIgFgIQgDgEgEgBQgEgCgEAAIgjAAg");
	this.shape_25.setTransform(-85.5,-1,0.794,0.794);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727477").s().p("AgRA4QgKgFgIgKQgIgJgEgLQgEgMAAgJQAAgKAEgLQAEgMAHgIQAHgJALgFQALgFAMAAQAQAAAMAHQAMAIAFALIgMAIQgDgFgEgFQgDgDgFgDIgKgDIgJgBQgIAAgIAEQgHAEgGAHQgGAHgCAIQgDAJAAAHQAAAKAEAHQACAIAGAIQAGAHAIADQAIAEAHAAIAJgBIAKgEIAJgGQAFgGABgEIANAHQgDAHgFAFQgFAFgHAEQgHAEgHABQgGACgIAAQgKAAgLgFg");
	this.shape_26.setTransform(-94.9,-1,0.794,0.794);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727477").s().p("AAdA9IgcgsIgfAAIAAAsIgPAAIAAh5IAyAAQAHABAIADQAHAEAEAFQAGAFACAIQADAGAAAHQAAAIgCAFQgBAFgEAEQgDAEgFAEIgLAFIAeAvgAgeADIAjAAQAGAAADgCIAGgEQADgDABgFQADgEAAgGIgDgJQgBgFgDgDQgEgEgEgBQgDgCgFAAIgiAAg");
	this.shape_27.setTransform(-107.1,-1,0.794,0.794);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727477").s().p("AgZA9QgKgFgIgKQgHgJgCgMQgDgLAAgOIAAhBIARAAIAABBIACATQABAJAFAIQAGAHAGAEQAJAFAJAAQALgBAHgEQAIgEAFgIQAEgHACgJQACgJAAgKIAAhBIARAAIAABBQAAAOgDAMQgDAMgHAJQgHAIgLAHQgKAEgPAAQgPAAgKgFg");
	this.shape_28.setTransform(-117.1,-1.1,0.73,0.73);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727477").s().p("AgWA4QgLgFgHgJQgHgIgFgMQgEgLAAgLQAAgLAFgLQADgLAJgJQAHgIALgFQAKgFALAAQAOAAAJAGQALAFAHAIQAGAHAGANQAEAMAAAJQAAAMgFALQgDAMgJAIQgHAIgLAFQgKAFgMAAQgMAAgKgFgAgQgqQgHAEgGAHQgFAGgDAJQgDAJAAAHQAAAIADAKQADAIAFAHQAGAHAHAEQAJADAHAAQAJAAAIgEQAIgEAFgHQAGgIACgHQADgJAAgIQAAgIgDgIQgDgIgFgIQgHgHgHgDQgGgEgKAAQgIAAgIAEg");
	this.shape_29.setTransform(-127.4,-1,0.794,0.794);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727477").s().p("AgGA9IAAgtIgvhMIASAAIAjA+IAkg+IARAAIguBMIAAAtg");
	this.shape_30.setTransform(-136.9,-1,0.794,0.794);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727477").s().p("AgoA8IAAh3IBPAAIAAANIg/AAIAAAoIA3AAIAAAKIg3AAIAAAqIBBAAIAAAOg");
	this.shape_31.setTransform(-44.2,-16,0.794,0.794);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_32.setTransform(-52.1,-16,0.794,0.794);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727477").s().p("AgxA8IAAh3IAqAAQANAAALAEQANAGAFAHQAIAJADALQAEAMAAAKQAAAMgEAMQgEAMgIAHQgHAIgLAFQgMAEgLAAgAghAuIAaAAQAKAAAHgDQAJgEAEgGQAGgGACgJQAEgIAAgKQAAgJgEgJQgDgIgFgHQgFgFgIgEQgIgEgJAAIgaAAg");
	this.shape_33.setTransform(-61.1,-16,0.794,0.794);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727477").s().p("AAmA8IhJhbIAABbIgPAAIAAh3IAMAAIBJBcIAAhcIAQAAIAAB3g");
	this.shape_34.setTransform(-71.6,-16,0.794,0.794);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727477").s().p("AAoA8IgPgjIgxAAIgOAjIgRAAIAyh3IALAAIAyB3gAgVANIArAAIgWg3g");
	this.shape_35.setTransform(-81.4,-16,0.794,0.794);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727477").s().p("AAhA8IAAg3IhBAAIAAA3IgQAAIAAh3IAQAAIAAA0IBBAAIAAg0IAQAAIAAB3g");
	this.shape_36.setTransform(-91.1,-16,0.794,0.794);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_37.setTransform(-103,-16,0.794,0.794);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_38.setTransform(-111,-16,0.794,0.794);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727477").s().p("AgFASIAAgjIALAAIAAAjg");
	this.shape_39.setTransform(-116.8,-19.5,0.794,0.794);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727477").s().p("AgoA8IAAh3IBPAAIAAANIg/AAIAAAoIA2AAIAAAKIg2AAIAAAqIBBAAIAAAOg");
	this.shape_40.setTransform(-122.1,-16,0.794,0.794);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#727477").s().p("AAYA8IgYg5IgXA5IgNAAIgzh3IARAAIApBlIAVgwIgWg1IAPAAIAPArIAQgrIAOAAIgVA1IAVAwIAphlIARAAIgzB3g");
	this.shape_41.setTransform(-133.6,-16,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.2,-20.9,119.1,55);


(lib.weoffer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#727477").s().p("AgRgRIghAYIgJgJIBMg+IAIALIgeAaIBBBSIgMAKg");
	this.shape.setTransform(-1.9,-29.2,0.799,0.799);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727477").s().p("AhCgYIAvgmQAFgEAGgBQAFgBAEABQAFABAFADQAGAEADAEQAGAIABAIQABAJgEAIQAKgEAKACQAKADAHAJQAFAGABAGQABAEgBAGQgBAEgEAIQgEAGgFAEIgtAlgAAagNQgDABgEADIggAZIAYAgIAhgaQAEgDABgDIADgIIgBgHIgEgGIgGgFIgHgDIgEAAIgEAAgAgIgzQgEAAgDADIgfAZIAaAdIAcgWIAFgGIABgHIAAgHIgEgHQgCgDgEgDIgFgDIgCAAIgFABg");
	this.shape_1.setTransform(-7.7,-22.3,0.799,0.799);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727477").s().p("AhEgUIA/gzIAGALIgxApIAZAcIAqghIAIAKIgqAhIAYAhIA0gqIAIALIhAAzg");
	this.shape_2.setTransform(-13.9,-17.4,0.799,0.799);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727477").s().p("AhAgZIAhgbQALgJAMgDQAJgDALACQAKABALAHQAIAFAJALQAJALAEALQAEAMgCAIQAAAKgGALQgGAKgLAJIggAagAgGgyQgIACgJAHIgVARIA5BHIAVgRQAIgHAEgHQAEgIAAgIQABgGgDgJQgFgKgFgGQgHgJgHgEQgIgFgIgCIgGAAIgIABg");
	this.shape_3.setTransform(-21.9,-10.9,0.799,0.799);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727477").s().p("AhNgOIAKgHIBzAZIg4hJIAKgJIBLBdIgKAIIhygYIA5BGIgLAKg");
	this.shape_4.setTransform(-31.8,-3.1,0.799,0.799);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727477").s().p("AgEA6QgMgCgKgGQgKgGgHgJQgHgJgEgMQgDgJAAgMQABgLAFgLQAFgLAJgHQAKgIAMgCQALgDAKADQAKABALAHQALAGAGAJQAIAKADALQAEALgBAJQAAALgFALQgFALgKAHQgKAJgLACQgHABgGAAIgIgBgAgMgrQgJABgHAGQgIAGgDAIQgEAKAAAHQAAAHADAIQAEAKAFAFQAGAIAIAEQAGAFAKACQAGACAJgCQAJgCAGgGQAIgGADgIQAEgHAAgJQAAgHgDgJQgDgHgGgIQgGgHgHgFQgIgFgJgBIgGgBIgIABg");
	this.shape_5.setTransform(-39.9,3.4,0.799,0.799);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727477").s().p("AgqgpIAMgKIBJBdIgMAKg");
	this.shape_6.setTransform(-45.3,7.7,0.799,0.799);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727477").s().p("AgSgRIggAYIgJgJIBLg+IAJALIgfAaIBCBSIgMAKg");
	this.shape_7.setTransform(-51.3,10.4,0.799,0.799);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727477").s().p("Ag9g6IAKgIIBxBAIgNAIIghgQIgmAeIALAkIgNAKgAgbAJIAggaIgygfg");
	this.shape_8.setTransform(-55.3,18.2,0.799,0.799);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727477").s().p("AgMA6QgLgBgLgHQgJgFgJgKQgIgKgDgLQgDgMAAgIQAAgLAGgLQAEgKAKgIQANgLAOgBQANgCALAGIgEAOQgJgFgKACQgLABgIAHQgHAGgEAIQgDAIAAAIQAAAGADAJQADAJAGAHQAHAIAHAEQAHAFAJABQAHACAIgCQAJgCAGgFQAQgNAAgYIgKgMIgVAPIgGgHIAegZIAlAtIgKAIIgKgMQgCAYgQAMQgKAIgLACIgJACIgLgCg");
	this.shape_9.setTransform(-63.4,22.7,0.799,0.799);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727477").s().p("AgqgpIAMgKIBJBdIgMAKg");
	this.shape_10.setTransform(-69.4,27.1,0.799,0.799);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727477").s().p("AhFgpIAMgKIBBBSIA1goIAJAJIhBA0g");
	this.shape_11.setTransform(-73.6,32,0.799,0.799);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727477").s().p("AhCgYIAvgmQAFgEAFgBQAGgBAEABQAEABAGADIAJAIQAFAIACAIQAAAJgDAIQAKgEAKACQAKADAHAJQAEAEABAIQACADgBAHQgCAHgDAFQgFAGgFAEIgsAkgAAagNIgHAEIggAZIAYAgIAhgaIAFgGIACgIQABgDgCgFQAAgBgDgEQgDgDgDgCIgIgDIgDAAIgEAAgAgJgzIgGADIgfAZIAZAdIAcgWQADgCACgEIACgHIgBgIIgDgGQgEgEgDgCIgFgDIgCAAIgFABg");
	this.shape_12.setTransform(-80.9,36.4,0.799,0.799);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727477").s().p("AgEA6QgNgCgJgGQgIgFgJgKQgIgKgDgLQgEgLABgKQAAgLAFgLQAGgKAJgIQAKgIAMgCQAKgCAKABQAMADAKAGQAKAGAHAJQAHAIAEAMQADAKAAALQgBAMgFAKQgFALgJAHQgKAIgMADIgNABIgHgBgAgNgrQgJABgGAGQgJAHgCAHQgEAIAAAJQAAAHADAIQADAIAGAHQAGAIAHAEQAHAFAKACQAGACAIgCQAJgCAHgGQAIgGADgIQAEgJAAgIQAAgFgEgKQgDgHgFgIQgGgHgIgFQgHgFgJgBIgGgBIgJABg");
	this.shape_13.setTransform(-88.2,42.1,0.799,0.799);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727477").s().p("AgXAKIAlgeIAJALIglAeg");
	this.shape_14.setTransform(-93.7,48,0.799,0.799);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AgFA6QgJgBgMgHQgKgGgHgJQgIgKgDgLQgDgMAAgJQABgMAEgKQAFgKAKgIQAKgIALgCQANgCAJACQALACAKAGQAKAGAHAJQAJALACAKQADAMAAAIQgBANgEAJQgGAKgJAIQgKAJgLACQgHABgGAAIgJgBgAgNgrQgIABgHAGQgHAGgEAIQgDAIgBAJQAAAHADAIQADAIAGAHQAGAIAIAEQAFAFALACQAGACAJgCQAIgCAHgGQAIgGAEgIQADgIAAgIQAAgHgDgIQgDgIgGgIQgGgGgIgGQgKgFgGgBIgGgBIgJABg");
	this.shape_15.setTransform(-100.7,52.1,0.799,0.799);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AhMgOIAJgHIB0AYIg5hHIAKgKIBLBdIgKAIIhxgYIA3BGIgKAKg");
	this.shape_16.setTransform(-108.8,58.6,0.799,0.799);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAB3").s().p("AhFgUIBAg0IALARIgsAlIASAUIAmgeIAMAPIgmAeIASAZIAvgmIANAQIhCA1g");
	this.shape_17.setTransform(0.6,-50.2,0.799,0.799);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAB3").s().p("AhFgUIBAg0IALAQIgsAlIASAVIAmgeIAMAPIgmAeIASAZIAwgmIAMAQIhBA1g");
	this.shape_18.setTransform(-5.8,-45.1,0.799,0.799);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAB3").s().p("AhLgZIAqgiQAGgFAIgBQAHgCAJABQADABAJAEQAHAEAEAGQAIAJABALQACALgGAKIAzAQIgVARIgtgQIgQAOIAXAgIgRAPgAgQgsQgDABgCACIgWARIAYAdIAVgQIAEgFQABgDAAgEIgBgHQgCgEgCgCQgCgDgCgDIgHgCIgDgBIgEABg");
	this.shape_19.setTransform(-12.5,-39,0.799,0.799);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAB3").s().p("AgxgUIA+gzIANAQIgsAkIASAXIAmgdIAMAPIgmAdIAfAnIgSAOg");
	this.shape_20.setTransform(-20.7,-34.5,0.799,0.799);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAB3").s().p("Ag/g2IARgNIBuBCIgTANIgcgOIgfAYIAKAfIgTAPgAgVAHIAYgUIgpgag");
	this.shape_21.setTransform(-27.1,-25.7,0.799,0.799);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727477").s().p("AgMA6QgNgCgJgGQgKgGgIgJQgIgKgDgLQgDgLAAgJQAAgMAGgKQAFgLAJgHQANgLAOgBQANgCALAGIgEAOQgJgFgKABQgLACgIAHQgHAFgEAJQgDAHAAAJQAAAHADAIQACAIAHAIQAGAIAIAEQAHAFAJABQAJACAGgCQAIgCAHgGQAPgLABgZIgKgMIgVAOIgGgHIAegYIAlAtIgKAIIgKgNQgCAYgQANQgJAHgMADIgLABIgJgBg");
	this.shape_22.setTransform(-39.3,24.6,0.799,0.799);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727477").s().p("AhMgOIAJgIIB0AZIg5hHIAKgKIBLBdIgKAIIhygYIA4BGIgKAKg");
	this.shape_23.setTransform(-48.1,31.1,0.799,0.799);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727477").s().p("AgqgpIAMgKIBJBdIgLAKg");
	this.shape_24.setTransform(-53.6,35.5,0.799,0.799);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727477").s().p("AhFgpIAMgJIBBBSIA1gpIAJAJIhBAzg");
	this.shape_25.setTransform(-57.7,40.5,0.799,0.799);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727477").s().p("AhFgpIAMgKIBBBSIA1goIAJAJIhBA0g");
	this.shape_26.setTransform(-63.9,45.5,0.799,0.799);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727477").s().p("AhFgVIBAgyIAGALIgxAoIAZAdIAqghIAIAKIgqAhIAYAhIA0gqIAJAKIhBA0g");
	this.shape_27.setTransform(-70.4,49,0.799,0.799);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727477").s().p("AgMAwQAEABAFgBIAJgCIAMgEQAFgCAHgGQAKgIACgIQADgIgGgHQgCgDgFAAQgEgCgFABQgGABgFABIgcAMQgIADgFAAQgFAAgGgDQgEgCgGgGQgFgFgCgHQgBgHABgHQACgIAFgGQAFgIAHgFQAKgIAKgDQAJgDAJAAIACAOIgFAAIgJACIgJADIgJAGQgLAJgCAIQgBAJAFAGQAEAFADAAQADAAAFAAIAKgCIANgGIAPgHQAHgDAHAAQAFAAAHACQAGADAFAGQAGAHABAFQABAIgCAHQgCAIgFAFQgHAJgFADQgLAJgNAFQgMAEgLAAg");
	this.shape_28.setTransform(-77,54.5,0.799,0.799);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727477").s().p("AhMgOIAJgHIB0AYIg5hHIAKgKIBLBdIgKAIIhxgYIA3BGIgKAKg");
	this.shape_29.setTransform(-84.5,60.3,0.799,0.799);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727477").s().p("AAFBEQgHgCgKgIQgJgGgIgKIgmguIAMgJIAmAuIANAMQAEAFAIADQAIADAHgCQAIgBAIgGQAIgHADgIQADgHgBgIQgBgIgEgHQgEgGgFgHIgmgwIAMgJIAmAwQAHAIAFALQAFAIABALQAAAKgFALQgEAJgLAJQgMAKgKACIgJAAQgGAAgGgBg");
	this.shape_30.setTransform(-93.4,66,0.799,0.799);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727477").s().p("AgEA6QgMgCgKgGQgJgGgIgJQgHgJgEgMQgEgLABgKQABgLAFgLQAFgLAJgHQAKgIAMgCQAKgCALABQAKACALAHQAKAFAHAKQAIAKADAKQAEAMgBAJQAAALgFALQgFALgKAHQgKAJgMACIgNABIgHgBgAgMgrQgJABgHAGQgIAGgDAIQgEAKAAAHQAAAHADAIQAEAJAFAGQAGAIAIAEQAHAFAJACQAGACAJgCQAJgCAGgGQAJgGACgIQAEgHAAgKQAAgGgDgJQgDgHgGgIQgGgHgHgFQgIgFgJgBIgGgBIgIABg");
	this.shape_31.setTransform(-100.6,73.2,0.799,0.799);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727477").s().p("AgFA7QgLgCgLgHQgKgGgHgJQgHgJgEgKQgDgKAAgKQAAgLAFgMQAFgKALgJQANgKAOgCQALgBAMAFIgFAOQgGgDgDAAIgKAAIgKADIgIAFQgIAHgDAIQgDAHAAAJQAAAHADAIQAEAKAFAFQAHAIAGAEQAIAEAJADQAHABAIgBQAJgDAGgFIAHgHIAFgJQADgGAAgFQABgGgCgEIAOgCQADAFgBAIQgBAGgDAIQgCAHgGAGQgFAHgFADQgJAIgMACIgNABIgIAAg");
	this.shape_32.setTransform(-107.9,79,0.799,0.799);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727477").s().p("AgKgCIAKgIIALANIgKAIg");
	this.shape_33.setTransform(-25.4,36.6,0.799,0.799);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727477").s().p("AhMgOIAJgHIB0AYIg5hHIAKgKIBLBdIgKAIIhxgYIA3BGIgKAKg");
	this.shape_34.setTransform(-33.1,37.5,0.799,0.799);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727477").s().p("AgFA6QgMgCgJgGQgKgGgHgJQgIgKgDgLQgEgMABgJQAAgLAFgLQAFgKAKgIQALgIALgCQAKgCAKABQAMADAKAGQAKAGAHAJQAHAIAEAMQADAMAAAJQAAALgGALQgGAMgIAGQgKAIgMADIgNABIgIgBgAgNgrQgJABgGAGQgJAHgCAHQgEAHAAAKQAAAHADAIQADAIAGAHQAGAHAHAFQAJAFAHACQAHACAIgCQAJgCAHgGQAHgFAEgJQAEgJAAgIQgBgIgDgHQgDgHgFgIQgGgHgIgFQgHgFgJgBIgGgBIgJABg");
	this.shape_35.setTransform(-41.2,44,0.799,0.799);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727477").s().p("AgrgpIANgKIBJBdIgLAKg");
	this.shape_36.setTransform(-46.5,48.3,0.799,0.799);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727477").s().p("AgRgRIghAYIgJgJIBMg+IAIALIgeAaIBBBSIgMAKg");
	this.shape_37.setTransform(-52.5,51,0.799,0.799);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727477").s().p("Ag9g6IAKgHIBxA/IgNAJIgigRIglAdIALAlIgNAKgAgbAIIAggZIgygeg");
	this.shape_38.setTransform(-56.5,58.8,0.799,0.799);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727477").s().p("AgSgRIggAYIgJgJIBLg+IAJALIgfAaIBCBSIgMAKg");
	this.shape_39.setTransform(-66.3,62,0.799,0.799);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727477").s().p("AhFgpIAMgKIBCBSIA0goIAJAJIhBA0g");
	this.shape_40.setTransform(-71,69.6,0.799,0.799);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#727477").s().p("AAFBEQgJgEgIgGIgQgQIgnguIAMgJIAnAtQAEAGAIAHQAFAGAHACQAGACAJgBQAIgBAIgHQAJgHADgHQACgIAAgHQgBgGgEgKIgKgMIgmgwIAMgJIAmAvQAJAMAEAIQAFAKAAAJQABAKgFAKQgEAJgMAKQgLAJgLACIgKABQgGAAgFgBg");
	this.shape_41.setTransform(-79.3,73.1,0.799,0.799);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#727477").s().p("AgJA/IgCgPQAEABAFgBIAJgCQAFgBAGgDIAMgIQAKgJADgHQACgIgFgHQgFgDgDAAQgDgCgGABIgLABIgcANIgNADQgGAAgFgDQgFgCgEgGQgFgFgDgHQgBgHABgHQADgIAEgGQAGgIAGgFQAIgHAMgEQAKgDAIAAIACAOIgFAAIgJABIgJAEIgJAGQgKAIgDAJQgBAIAFAHQADAEAEABIAIAAIAKgCIAOgGIAOgHQAHgDAHAAQAGAAAHACQAFADAFAGQAFAGACAGQACAGgCAIQgCAHgFAHQgFAGgIAGQgLAKgMAEQgNAEgJAAIgCAAg");
	this.shape_42.setTransform(-85.6,79.8,0.799,0.799);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#727477").s().p("AhNgOIAKgHIBzAYIg4hHIAJgKIBNBcIgLAJIhxgYIA3BGIgJAKg");
	this.shape_43.setTransform(-93.1,85.7,0.799,0.799);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#727477").s().p("AgEA6QgKgBgMgHQgJgFgIgKQgHgJgEgMQgEgLABgKQABgLAFgLQAEgKAKgIQAKgIAMgCQALgCAKACQAMACAJAGQAJAFAIAKQAHAJAEAMQAEALgBAJQgBAMgFAKQgEAKgKAIQgKAJgMACQgGABgGAAIgIgBgAgNgrQgIABgHAGQgHAGgEAIQgEAIAAAJQAAAGADAJQADAIAGAHQAFAHAIAGQAIAEAJACQAGACAJgCQAGgBAJgGQAJgIACgHQAEgHAAgJQAAgHgDgIQgEgKgFgGQgFgGgJgGQgIgFgIgBIgGgBIgJABg");
	this.shape_44.setTransform(-101.2,92.1,0.799,0.799);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#727477").s().p("AgFA6QgMgCgKgGQgLgHgGgIQgHgIgEgMQgDgKAAgKQABgMAEgKQAGgLAKgIQANgLANgBQANgCALAGIgFAOIgJgEQgGgBgEACQgFAAgFADIgIAFQgIAHgDAHQgDAJAAAIQAAAHADAIQAEAKAEAFQAGAHAIAFQAIAFAJABQAGACAJgCQAJgBAGgGIAHgHQAEgFABgEIADgLQAAgFgBgFIAOgCQADAFgBAHQgBAHgDAIIgIANQgFAHgFADQgKAIgLACIgLABIgKgBg");
	this.shape_45.setTransform(-108.4,97.9,0.799,0.799);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#727477").s().p("AAFBEQgJgDgIgHQgJgHgIgJIgmguIAMgKIAmAuIANANQAGAGAGACQAIACAHgBQAIgBAIgHQAIgGADgIQADgHgBgIQgBgIgDgIIgKgMIgmgwIAMgKIAmAwQAIAKAEAKQAFAIABALQAAAMgFAIQgFALgKAIQgLAJgLACIgKACQgGAAgFgCg");
	this.shape_46.setTransform(-38.5,-19.3,0.799,0.799);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#727477").s().p("AgEA6QgKgBgMgHQgKgGgHgJQgHgJgEgMQgDgJAAgMQABgLAFgLQAFgLAJgHQAKgIAMgCQALgDAKADQALACAKAGQALAGAGAJQAJALACAKQAEALgBAJQAAALgFALQgFALgKAHQgKAJgMACQgGABgGAAIgIgBgAgMgrQgJABgHAGQgHAGgEAIQgEAKAAAHQAAAGADAJQAFAKAEAFQAGAIAIAEQAGAFAKACQAGACAJgCQAJgCAGgFQAIgHADgIQAEgHAAgJQAAgHgDgIQgDgIgGgIQgGgGgHgGQgKgFgHgBIgGgBIgIABg");
	this.shape_47.setTransform(-45.7,-12.1,0.799,0.799);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#727477").s().p("AAWAfIhSgeIANgJIBCAYIgKhGIANgLIAMBXIAbAiIgMAKg");
	this.shape_48.setTransform(-54.6,-7.3,0.799,0.799);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#727477").s().p("AhJgaIApggQAGgFAHgCQAIgCAHACQAGABAGAEQAGAEAFAFQAEAFACAGQADAGAAAFQAAAFgBAHQgCAGgDAEIA0AQIgOALIgxgRIgXAUIAZAiIgMAKgAgQgzIgIAEIgcAWIAfAmIAbgVQAEgDACgEIABgJIgBgJIgGgIQgDgFgDgCIgHgDIgFAAIgEAAg");
	this.shape_49.setTransform(-62.6,2.1,0.799,0.799);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#727477").s().p("AhFgUIA/gzIAHALIgxAoIAYAeIArgiIAIAKIgrAiIAZAgIA0gqIAJALIhAAzg");
	this.shape_50.setTransform(-69.4,6.9,0.799,0.799);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#727477").s().p("AgvgVIA9gyIAIALIgwAoIAZAeIAoggIAJAKIgrAgIAiAqIgMAKg");
	this.shape_51.setTransform(-77.3,11.9,0.799,0.799);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#727477").s().p("AgvgVIA9gyIAIAKIgwApIAZAeIApggIAIAKIgrAgIAiAqIgMAKg");
	this.shape_52.setTransform(-83.5,16.9,0.799,0.799);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#727477").s().p("AgEA6QgKgBgMgHQgKgGgHgJQgHgJgEgMQgEgLABgKQABgLAFgLQAEgKAKgIQAKgIAMgCQALgDAKADQAMACAJAGQAJAFAIAKQAHAJAEAMQAEALgBAJQAAALgFALQgFALgKAHQgKAJgMACQgGABgGAAIgIgBgAgNgrQgIABgHAGQgHAGgEAIQgEAKAAAHQAAAHADAIQADAIAGAHQAGAIAIAEQAGAFAKACQAGACAJgCQAIgCAHgGQAJgGACgIQAEgHAAgJQAAgHgDgIQgEgKgFgGQgFgGgJgGQgIgFgIgBIgGgBIgJABg");
	this.shape_53.setTransform(-89.2,22.8,0.799,0.799);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#727477").s().p("AhEgVIA/gyIAGAKIgxAqIAZAcIAqghIAIAJIgqAiIAYAhIA0gqIAIAKIhAA0g");
	this.shape_54.setTransform(-98.9,30.6,0.799,0.799);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#727477").s().p("AhWAXIAOgLIBeA3IgPg0IgwgaIAMgJIAlAWIgMgqIAJgJIARA0IAwAaIghhoIANgKIAkB8IgKAJIg3geIARA7IgKAJg");
	this.shape_55.setTransform(-109.5,36.5,0.799,0.799);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.5,-56.1,122.8,158.8);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic2();
	this.instance.setTransform(387,-94,1,1,180);

	this.instance_1 = new lib.pic2();
	this.instance_1.setTransform(-206,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-283,593,377);


(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic();
	this.instance.setTransform(-250,-172.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-172.5,500,345);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D76B9").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAegdAnAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAcgpAAQgnAAgegcgAgmgyQgOALABARQgBAPAKAOQAKASARAOQARARAQAAQAKAAAHgDQAFgCAHgHQAHgFgDgGQgBgDgIgGIgHgHQgEgCgFAAIgOAKQgHAFgMgNIgHgHQgPgQAHgIIALgLQAEgGgJgOIgGgHQgDgDgEAAQgCAAgHAFg");
	this.shape.setTransform(-186.1,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D92B7").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAegdAnAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAcgpAAQgnAAgegcgAgmgyQgOALABARQgBAPAKAOQAKASARAOQARARAQAAQAKAAAHgDQAFgCAHgHQAHgFgDgGQgBgDgIgGIgHgHQgEgCgFAAIgOAKQgHAFgMgNIgHgHQgPgQAHgIIALgLQAEgGgJgOIgGgHQgDgDgEAAQgCAAgHAFg");
	this.shape_1.setTransform(-186.1,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},15).wait(15));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAB3").s().p("AguA1QgPgVAAggQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAfgPAWQgRAZgeAAQgdAAgRgZgAgVgiQgIANAAAVQAAAWAIANQAHAOAOAAQAdAAAAgxQAAgwgdAAQgOAAgHAOg");
	this.shape_2.setTransform(-56.9,-0.7,0.853,0.853);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAB3").s().p("AguA1QgPgWAAgfQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAfgPAWQgRAZgeAAQgdAAgRgZgAgcAAQAAAxAcAAQAdAAAAgxQAAgwgdAAQgcAAAAAwg");
	this.shape_3.setTransform(-68.9,-0.7,0.853,0.853);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgSgTIAtgwIAcAAIAACVg");
	this.shape_4.setTransform(-84.3,-0.7,0.853,0.853);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgSgTIAugwIAbAAIAACVg");
	this.shape_5.setTransform(-92.3,-0.7,0.853,0.853);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAB3").s().p("AguA1QgPgWAAgfQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAggPAVQgRAZgeAAQgdAAgRgZgAgcAAQAAAxAcAAQAPAAAIgOQAGgNAAgWQAAgwgdAAQgcAAAAAwg");
	this.shape_6.setTransform(-106.7,-0.7,0.853,0.853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgTgTIAugwIAdAAIAACVg");
	this.shape_7.setTransform(-117.2,-0.7,0.853,0.853);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgSgTIAtgwIAcAAIAACVg");
	this.shape_8.setTransform(-130.1,-0.7,0.853,0.853);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AgtA3QgPgVAAgiQAAghASgWQATgWAfAAQAaAAATAQIgPAZQgNgMgRAAQgOAAgLAMQgLANAAASIABADQAFgIAKgGQAMgGAJAAQAWAAAPANQAPALAAAYQAAAWgQAPQgRAPgZAAQgfAAgRgXgAgbASQABANAHAIQAIAKAMAAQANAAAHgHQAHgHAAgIQAAgMgIgFQgIgGgMAAQgQAAgLAOg");
	this.shape_9.setTransform(-139.4,-0.7,0.853,0.853);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAB3").s().p("AgpBDQgSgLAAgUQAAgOAJgKQAJgKAOgDQgegKAAgaQAAgUATgKQAQgKAWAAQAXAAARAKQASAKAAAUQAAAageAKQAOADAJAKQAJALAAANQAAAUgSALQgRALgZAAQgYAAgRgLgAgQARQgKAGAAAIQAAAIAIAFQAIAFAKAAQAMAAAIgFQAIgFAAgIQAAgIgLgGQgHgEgKgCQgIACgIAEgAgRgsQgHAFAAAIQAAANAYAEQAZgEAAgNQAAgIgHgFQgHgEgLAAQgKAAgHAEg");
	this.shape_10.setTransform(-151.2,-0.7,0.853,0.853);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAB3").s().p("AguA1QgPgVAAggQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAggPAVQgRAZgeAAQgdAAgRgZgAgVgiQgIANABAVQgBAWAIANQAHAOAOAAQAdAAAAgxQAAgwgdAAQgOAAgHAOg");
	this.shape_11.setTransform(-163.1,-0.7,0.853,0.853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.1,-11.6,144.6,19.8);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D76B9").s().p("ASbZLQAageABgUQAAgRgWgaQgMgNg0g1MgnJgthIAAkRMAo2AvnQBfBlAWAgQApA5gBA7QAABXhNBWQg9g8hFhAg");
	this.shape.setTransform(-103,-135.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0098A1").s().p("AhTgSIAFgJQAVgdAagaQAaAUAhAvQAmAzASARIgCADQgNAOgGANQhdhLg1gag");
	this.shape_1.setTransform(6.5,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#736BA5").s().p("AhSgfQAPgUAVgYIACgBIAAAAQAUAVA0AzIA3A0IgIAJQgNANgEAHQhKgvhCg9g");
	this.shape_2.setTransform(6.6,46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D76B9").s().p("AmcJVIs6rzQhahDgmhAQgkg9AFhEQAEguAZguQAXgpAtgwQAUAVAtApQArApAWAXQgsAugCAYQgDAfBgBIIAEADIAAgBIMjLnIazgDIAACeg");
	this.shape_3.setTransform(132.2,98.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAB3").s().p("AwwV0QglgEgYgdQgYgdADglQADgfAVgWIAAABIAEgDQBghHgDggQgCgUgagfQgWgbgxgtIAAgBQhNhBglg5Qgmg9gBg+QAAhAAng9QAlg6BShCMAltgd8IgFDrMgj3AceIAAAAQhaBIAAAjQAAAjBcBMIADADQBMBGAjAzQApA9AFA7QAFBDgmA+QgmA+haBDIAHgHQgZAVggAAIgJAAg");
	this.shape_4.setTransform(122.9,-55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0098A1").s().p("AhSgmIAiggICEBzIgeAZQhNg2g7g2g");
	this.shape_5.setTransform(7.6,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAB3").s().p("A2mJYIAAitIZ+AAIRYwFIB3CEIxDP0IgNAPIgwAug");
	this.shape_6.setTransform(-127.3,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.1,-308.6,544.2,504.2);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.4);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEFEFE","#00AAB3"],[0,1],0,-52.5,0,-4).s().p("AryCbQgIAAgHgGQgGgGAAgJIAAkLQAAgIAGgHQAHgGAIAAIXlAAQAIAAAHAGQAGAGAAAJIAAELQAAAIgGAHQgHAGgIAAg");
	this.shape.setTransform(77.7,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAB3").s().p("AryCFQgIAAgHgGQgGgHAAgIIAAjfQAAgIAGgHQAHgGAIAAIXlAAQAIAAAHAGQAGAHAAAIIAADfQAAAIgGAHQgHAGgIAAg");
	this.shape_1.setTransform(77.7,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.3,33);


(lib.call = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#727477").s().p("AgyBKIAAiTIATAAIAACDIBSAAIAAAQg");
	this.shape.setTransform(2.3,339,1.15,1.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727477").s().p("AgyBKIAAiTIATAAIAACDIBRAAIAAAQg");
	this.shape_1.setTransform(-11.8,339,1.15,1.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727477").s().p("AgGAWIAAgrIAOAAIAAArg");
	this.shape_2.setTransform(-22.2,332.8,1.15,1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727477").s().p("AgxBKIAAiTIBhAAIAAARIhOAAIAAAwIBEAAIAAAOIhEAAIAAA0IBQAAIAAAQg");
	this.shape_3.setTransform(-31.5,339,1.15,1.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727477").s().p("AAdBKIgdhGIgcBGIgRAAIg+iTIAUAAIAzB9IAag8IgahAIASAAIASA0IATg0IASAAIgaBAIAaA8IAyh9IAVAAIg/CTg");
	this.shape_4.setTransform(-52.1,339,1.15,1.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727477").s().p("Ag9BKIAAiTIA0AAQARAAANAGQAOAGAIAKQAKAKAEANQAFAOgBAOQAAARgEANQgGANgJAKQgKALgNAEQgMAGgQAAgAgpA6IAgAAQAMgBAJgEQALgEAGgJQAHgIADgJQAEgNgBgKQABgJgEgNQgEgKgGgIQgHgIgKgEQgJgEgMAAIggAAg");
	this.shape_5.setTransform(-79,339,1.15,1.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727477").s().p("AAuBKIhZhwIAABwIgTAAIAAiTIAPAAIBbByIAAhyIASAAIAACTg");
	this.shape_6.setTransform(-97.5,339,1.15,1.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727477").s().p("AAxBKIgSgrIg9AAIgRArIgUAAIA8iTIAOAAIA+CTgAgaAPIA0AAIgahCg");
	this.shape_7.setTransform(-114.9,339,1.15,1.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727477").s().p("AgdBFQgMgHgHgKQgHgLgEgOQgDgNAAgOIAAhJIATAAIAABJQAAAMACAJQACAKAGAJQAFAJAIAEQAIAEAMAAQANAAAIgEQAJgGAFgIQAFgIACgKQACgKAAgLIAAhJIATAAIAABJQAAAQgEAMQgCANgJAMQgIAJgLAHQgMAFgRAAQgRAAgMgFg");
	this.shape_8.setTransform(7.5,363.5,1.15,1.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727477").s().p("AgbBEQgOgGgIgLQgKgLgEgMQgGgPAAgNQAAgNAGgOQAFgNAKgLQAIgKAOgHQANgGANAAQAQAAANAHQAOAHAIAKQAJALAEANQAGAOAAAMQAAAOgGAPQgFAOgJAJQgJALgNAGQgNAGgPAAQgOAAgNgHgAgUg0QgJAFgHAIQgGAIgEALQgDAKAAAKQAAALADALQAEAKAHAIQAHAIAJAFQAKAFAJAAQAMAAAJgFQAJgFAHgIQAHgJADgKQAEgLAAgKQAAgKgEgKQgDgLgHgIQgHgJgJgEQgLgFgKAAQgJAAgLAFg");
	this.shape_9.setTransform(-10.6,363.4,1.15,1.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727477").s().p("AgIBKIAAg2Ig5hdIAVAAIAsBMIAthMIAVAAIg5BdIAAA2g");
	this.shape_10.setTransform(-27.5,363.4,1.15,1.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727477").s().p("AgIBKIAAiCIgzAAIAAgRIB3AAIAAARIgzAAIAACCg");
	this.shape_11.setTransform(-49,363.4,1.15,1.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727477").s().p("AgcBGQgPgFgNgLIAJgQQADAEAFADIANAHIAOAFIAPABQAQAAAJgFQAJgGAAgLQgBgHgCgEQgDgEgFgDIgOgGIgkgLQgJgBgGgEQgFgFgEgGQgDgGABgJQAAgKADgJQAFgJAHgFQAHgGAJgCQALgDAJAAQAQAAAMAEQALAFAKAIIgJAPIgGgGIgKgFIgMgDQgGgCgGAAQgPAAgJAHQgIAHAAALQAAAGACAEQACADAFAEIANAFIAlAKIAQAGQAGAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgHAFgKADQgLACgLAAQgPAAgPgFg");
	this.shape_12.setTransform(-63.8,363.4,1.15,1.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727477").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_13.setTransform(-74.2,363.4,1.15,1.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727477").s().p("AgcBGQgQgFgMgLIAJgQQADAEAFADQAGAEAHADIAPAFIAOABQAPAAAKgFQAIgGAAgLQAAgHgCgEQgDgEgFgDIgOgGIglgLQgIgBgGgEQgGgFgDgGQgDgGAAgJQAAgKAFgJQADgIAIgGQAHgGAKgCQAKgDAJAAQAPAAAMAEQAMAFAKAIIgJAPQgDgDgDgDIgKgFIgLgDQgGgCgIAAQgOAAgJAHQgIAHAAALQAAAGADAEQACADAEAEIANAFIAQAEIAUAGQAMACAEAEQAHAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgGAFgLADQgLACgLAAQgQAAgOgFg");
	this.shape_14.setTransform(-84.8,363.4,1.15,1.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AgcBGQgPgFgNgLIAJgQQADAEAFADIANAHIAOAFIAPABQAQAAAJgFQAJgGAAgLQgBgHgCgEQgDgEgFgDIgOgGIgkgLQgJgBgGgEQgGgFgDgGQgDgGAAgJQAAgKAEgJQAEgIAIgGQAHgGAKgCQAKgDAJAAQAPAAAMAEQAMAFAKAIIgJAPIgGgGIgKgFIgMgDQgGgCgGAAQgPAAgJAHQgIAHAAALQAAAGACAEQADADAEAEIANAFIAQAEIAVAGIAQAGQAGAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgHAFgKADQgLACgLAAQgPAAgPgFg");
	this.shape_15.setTransform(-99.5,363.4,1.15,1.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AAwBKIgRgrIg9AAIgRArIgVAAIA+iTIAOAAIA8CTgAgaAPIA1AAIgbhCg");
	this.shape_16.setTransform(-115,363.4,1.15,1.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAB3").s().p("AgUBcIAAhAIhBh3IAuAAIAnBVIAnhVIAvAAIhCB4IAAA/g");
	this.shape_17.setTransform(-30.6,312.5,1.15,1.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAB3").s().p("AArBcIgPgqIg3AAIgPAqIgrAAIBEi3IAjAAIBEC3gAgUAVIApAAIgVg/g");
	this.shape_18.setTransform(-50.5,312.5,1.15,1.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAB3").s().p("AhPBcIAAi3IBEAAQAWAAARAIQARAHAMAMQALAMAGASQAGAQAAASQAAATgGASQgHASgMALQgMAMgSAHQgQAHgUAAgAglA2IAaAAQALAAAJgEQAJgEAGgHQAGgIADgKQAEgJAAgMQAAgMgEgJQgDgKgHgHQgFgHgJgEQgJgEgLAAIgaAAg");
	this.shape_19.setTransform(-70.6,312.5,1.15,1.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAB3").s().p("AgkBVQgSgJgLgMQgMgNgHgRQgGgRAAgRQAAgRAHgRQAGgRANgNQANgNAQgIQARgHASAAQAVAAARAIQARAIALANQANAOAGARQAGAQAAAQQAAATgHAQQgGAQgNAOQgLAMgSAIQgRAIgTAAQgUAAgQgIgAgUgxQgJAFgGAHQgGAIgDAKQgDALAAAIQAAAKADAKQADALAHAHQAGAJAJADQAJAFAKAAQAMAAAJgFQAIgEAHgIQAGgIADgKQADgKAAgKQAAgKgDgKQgDgKgHgIQgGgHgJgEQgJgFgLAAQgLAAgJAFg");
	this.shape_20.setTransform(-93.3,312.5,1.15,1.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAB3").s().p("AgUBcIAAiRIg4AAIAAgmICZAAIAAAmIg4AAIAACRg");
	this.shape_21.setTransform(-114,312.5,1.15,1.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00AAB3").s().p("AgOBcIgWgFIgTgGIgSgKIATgmIAHAGIAOAHIATAGQAMADAHAAQAWAAAAgOQAAgFgDgDQgDgEgGgCIgegLQgMgDgKgFQgJgEgHgFQgFgGgEgHQgDgIAAgKQABgQAFgKQAGgLAIgIQALgIAMgDQAKgFAOAAIATACIASAFIAdANIgTAkIgFgEIgbgLQgIgDgJAAQgVAAAAAQQABAFACADQACADAFACQAEADAHABIAQAGQAPADAJAEQALAFAHAEQAIAGADAJQAEAKABAMQgBAQgGALQgEAJgLAIQgJAGgNAEQgMACgOABg");
	this.shape_22.setTransform(-9.6,284.5,1.15,1.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAB3").s().p("AgkBVQgQgHgJgNQgLgOgEgQQgFgQABgSIAAhcIArAAIAABcQAAALACAJQABAJAFAIQAEAHAIAGQAIADAJAAQALABAHgFQAHgFAFgHQAEgHADgLQACgLAAgIIAAhcIArAAIAABcQAAAUgGAPQgEAQgKAOQgKAMgPAIQgPAGgWAAQgVABgPgIg");
	this.shape_23.setTransform(-29.9,284.5,1.15,1.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00AAB3").s().p("AhBBcIAAi3IArAAIAACRIBXAAIAAAmg");
	this.shape_24.setTransform(-55.9,284.4,1.15,1.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AAB3").s().p("AhABcIAAi3IAqAAIAACRIBXAAIAAAmg");
	this.shape_25.setTransform(-73.4,284.4,1.15,1.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAB3").s().p("AArBcIgPgqIg3AAIgPAqIgrAAIBDi3IAkAAIBEC3gAgVAVIAqAAIgVg/g");
	this.shape_26.setTransform(-93,284.4,1.15,1.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAB3").s().p("AgdBVQgQgJgMgNQgMgNgHgSQgGgQgBgRQAAgQAHgQQAGgSAMgMQAMgNARgIQAQgIAVAAQAaAAATALQATALAKASIghAXQgFgJgDgDIgKgIIgNgEIgLgBQgLAAgIAFQgJAEgHAIQgGAKgDAIQgCALAAAIQAAAKADALQAEAKAGAIQAFAGAKAFQAKAFAIAAIANgBQAFgBAGgEIAKgIQAFgEADgHIAjAUQgEAKgJAIQgHAJgMAFQgLAGgLADQgOACgKAAQgSAAgRgIg");
	this.shape_27.setTransform(-113.1,284.5,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,273.7,137.8,98.5);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D76B9").s().p("AgkHBQgOgCgegdQgrgriEAOQioAdhXANQicAYhNgXQhngggIh5QAXBnBmAYQBMATCSgZQBSgNCggeQCCgRA3AgQAaAQAWASQAQAFAqgjIDKieQgBABgCgIIAIgLQAFgFAHgDQgFgBAEgQIADgHIADgHQACgFgDgJQgCgIgDgEQgEgEgFgBIgLgCIgFgCIgSgJQgIgGgFACQgHACgIgDQAFgBgOgCIgJAAQgIAAgEgCQgDgBgFAAQgIgBgrAIQglAHgIgFQAFgFAlgHIAwgIIAvgKQAbgFAVgBIBmgJQATgDAYgIQAcgKAJgJQACgIgBgMQgCgMgDgIIgWgYQgLgIgDgGQgEgHgGgEQgRgNgIgLIgIgOIgQgLQgRgKgKgMQgEgFAAgBIAAgFIAAgCQgBgEgNgIQgWgQgDgEIAPgEQgEgDgGgIIgKgLQgPgQgEgFIAEgEIABgCQABgFgMgMIgQgQIAEgBIANADQgHgNgLgLQgOgOgFgHIARgDIgNgRQgIgJgDgJIAGgDQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIADgCQgGgHgKgRQgKgRgHgHQACgFADgBQADgBABgDQgQgOACgSQAEACAFAFIAIAHIgFgRQgDgJAAgJIAbAqQAaArAbAcIDIC/IAyAtQAVAVAYAgQAQgCAGgJIAKgWQAHgIAFgPQAHgPADgKIAQABIASgkQAKACAFAGIARgmQALABADABQARguAOgGQAFADABACQABACAGADIAZgzQASgDACgEIAUgsIAQAFQABABAJgQIAKgQQAGgKAGgDQAGAEABADIAEANQAFgDAEgIIAHgNQARANgBAtQgBAkgKAaIgTA5QgKAegOAYQgYAqgoAqQgNAOgaAUIgVAOQgPAJgGAFIARAPQAIAJgCAPQgBAIgEANQgEALgBAXQgIgFgEgIQgDgGgHgDQgWgKgTAIQgSALgJADIgfAKQgSAHgLAIQgfAVgOADIgrANIAAgEIgDgJIgGgIQgCgDgDgBQgKgChBAsIh+BdIjTCqQgZAXgPAAIgBAAg");
	this.shape.setTransform(-47.8,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E8E9").s().p("Ao5QiQgPgBgxglQgrghh0ARQiOAdhHAKQh9ATg8gdQhPglACh/QABiZgMuFIgMtoIQxAAIXkInI7/X0QguAogWAAIgBAAg");
	this.shape_1.setTransform(4.3,-26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.3,-132.2,266.8,211.7);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAoQgDgDAAgEQAAgFADgDQADgCADAAQADAAAEACQADADAAAFQAAAEgDADQgEADgDAAQgDAAgDgDgAgGAOIgDg4IASAAIgCA4g");
	this.shape.setTransform(-66.3,1.8,0.975,0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIA7AAIAAAQIgpAAIAAASIAoAAIAAANIgoAAIAAAUIApAAIAAAQg");
	this.shape_1.setTransform(-71.5,1.7,0.975,0.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAqIgmg2IAAA2IgTAAIAAhTIATAAIAlA0IAAg0IATAAIAABTg");
	this.shape_2.setTransform(-79.8,1.7,0.975,0.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAfQgNgMABgTQgBgSANgNQANgMASAAQATAAANAMQANANAAASQAAATgNAMQgNANgTAAQgSAAgNgNgAgRgTQgIAIAAALQAAALAIAJQAGAHALABQAMgBAHgHQAHgJAAgLQAAgKgHgJQgHgIgMAAQgKAAgHAIg");
	this.shape_3.setTransform(-89.3,1.7,0.975,0.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIASAAIAABDIAjAAIAAAQg");
	this.shape_4.setTransform(-97.1,1.7,0.975,0.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXAqIgFgOIgjAAIgGAOIgUAAIAhhTIAVAAIAhBTgAgMALIAZAAIgNgig");
	this.shape_5.setTransform(-104.8,1.7,0.975,0.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgZAAIAAgQIBDAAIAAAQIgZAAIAABDg");
	this.shape_6.setTransform(-116,1.7,0.975,0.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAfQgNgMABgTQgBgSANgNQANgMASAAQATAAANAMQANANAAASQAAATgNAMQgNANgTAAQgSAAgNgNgAgRgTQgIAIABALQgBALAIAJQAGAHALABQALgBAIgHQAGgJABgLQgBgLgGgIQgIgIgLAAQgKAAgHAIg");
	this.shape_7.setTransform(-124.4,1.7,0.975,0.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAqIgog2IAAA2IgSAAIAAhTIATAAIAmA0IAAg0IASAAIAABTg");
	this.shape_8.setTransform(-133.8,1.7,0.975,0.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIA7AAIAAAQIgpAAIAAASIAoAAIAAANIgoAAIAAAUIApAAIAAAQg");
	this.shape_9.setTransform(-145.2,1.7,0.975,0.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAqIgPgeIgNAAIAAAeIgSAAIAAhTIAmAAQANgBAIAJQAIAHAAAMQAAAKgGAGQgFAGgIACIATAggAgPgDIARAAQANAAAAgLQAAgLgNAAIgRAAg");
	this.shape_10.setTransform(-152.8,1.7,0.975,0.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAqIgGgOIgjAAIgFAOIgVAAIAhhTIAVAAIAhBTgAgMALIAZAAIgNgig");
	this.shape_11.setTransform(-161.3,1.7,0.975,0.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAhQgJgJAAgRIAAgxIASAAIAAAxQAAAUATAAQAUAAAAgUIAAgxIASAAIAAAxQAAARgJAJQgKAKgTAAQgRAAgLgKg");
	this.shape_12.setTransform(-173.5,1.8,0.975,0.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgSANgNQAMgMASAAQATAAANAMQAMANAAASQAAATgMAMQgNANgTAAQgSAAgMgNgAgRgTQgIAJAAAKQAAALAIAJQAHAHAKABQALgBAIgHQAHgJAAgLQAAgKgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_13.setTransform(-182.9,1.7,0.975,0.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAqIAAgjIghgwIAUAAIAUAiIAVgiIAUAAIggAwIAAAjg");
	this.shape_14.setTransform(-191.7,1.7,0.975,0.975);

	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-132.1,-1.2,0.922,0.922,0,0,0,76.9,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-13.9,143.2,30.4);


// stage content:
(lib._160x600_Debtmend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone
	this.instance = new lib.phone();
	this.instance.setTransform(204.1,17.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).to({y:26.9,alpha:1},11).wait(105).to({y:16.9,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(211.8,11.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:25.8,alpha:1},10,cjs.Ease.get(1)).wait(249).to({y:13.8,alpha:0},11).to({_off:true},1).wait(125));

	// hedder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39BCC1").s().p("AgPhKQANAqAXAhQgZAkgLAnQgKhQAKhGg");
	this.shape.setTransform(29.7,81.8,1.319,1.319);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAB3").s().p("AgfBLQALgmAYgkQgWgigNgqQAMAVAMAPQAOAWAZASQgaAUgLAPQgQAQgKAYg");
	this.shape_1.setTransform(31.8,81.8,1.319,1.319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F8DC7").s().p("AABAkQgGgPgPgUQAWgfAPgsQAIBGgIBQQgHgXgJgRg");
	this.shape_2.setTransform(72,81.8,1.319,1.319);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D76B9").s().p("AAGAkQgMgPgagUQApggAYgsQgPAtgWAfQANAUAIAPQAJARAHAWIAAABQgMgYgPgQg");
	this.shape_3.setTransform(69.9,81.8,1.319,1.319);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0098A1").s().p("AgPgEIAGgJQAKAJAPAMQgDADgBADQgQgOgLgEg");
	this.shape_4.setTransform(48.6,75,1.319,1.319);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D76B9").s().p("AgaAAQAKgNAQgJQAQAMALAKIgbAXQgOgOgMgJg");
	this.shape_5.setTransform(50.8,73,1.319,1.319);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0098A1").s().p("AgQgHIAIgHIAaAWIgJAGQgPgLgKgKg");
	this.shape_6.setTransform(48.5,93.7,1.319,1.319);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#736BA5").s().p("AgPgFIAHgJIANAOIABAAIAKAJIgFAGQgOgKgMgKg");
	this.shape_7.setTransform(48.7,84,1.319,1.319);

	this.instance_2 = new lib.ClipGroup_4();
	this.instance_2.setTransform(38.5,71.1,1.319,1.319,0,0,0,8.8,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7D76B9").s().p("AAxBQIhehPQgigXACgaQACgRARgTIAaAZQgJAJAAAFQgBAGATAOIABABIBdBNQAGAEABAIQABAHgFAGQgFAFgHABIgCABQgGAAgFgFg");
	this.shape_8.setTransform(55.3,93.2,1.319,1.319);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AhfClQgHgBgFgGQgFgFABgIQABgHAFgFIBghPIAAAAIABAAQARgPgBgGQAAgGgRgSQgegXgBgXQAAgYAggaIBbhJQAFgFAIABQAHABAFAGQAEAGAAAHQgBAHgGAFIhdBJQgQAOAAAHQAAAHAQAPIABABQAdAZACAUQACAagiAaIheBPQgFAEgGAAIgCAAg");
	this.shape_9.setTransform(50.9,82.6,1.319,1.319);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7D76B9").s().p("AAUA/IACgCQASgPABgHQAAgHgSgOIhbhIQgGgEgBgHQgBgIAFgGQAEgFAIgBQAHgBAGAFIBbBJQAfAXAAAYQAAAXgdAZg");
	this.shape_10.setTransform(46.1,72.2,1.319,1.319);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BEC0C2").s().p("Ag+ARIAAgBIA+guIA+AuQAAAHgGAHIAAgKIg4ghIg2AhIgBALQgGgIgBgGg");
	this.shape_11.setTransform(50.9,101.3,1.319,1.319);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3D4D6").s().p("AgVAfQgFgHgKgKIgTgBIABgLIA2giIA4AiIAAAKIAAABIgTABQgLAJgFAIQgLACgKAAQgKAAgLgCg");
	this.shape_12.setTransform(50.9,103.8,1.319,1.319);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BEC0C2").s().p("Ag+gPIAAgBQABgGAGgIIABALIA2AiIA4giIAAgKQAGAIAAAFIg+Avg");
	this.shape_13.setTransform(50.9,63.7,1.319,1.319);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D4D6").s().p("Ag2gBIgBgLIATgBQAKgKAFgHQAVgEAVAEQAFAIALAJIATABIAAABIAAAKIg4Aig");
	this.shape_14.setTransform(50.9,61.3,1.319,1.319);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DEDEDE").s().p("AAEB/IghgcQgPhiAPhjIAfgbIAFgDQgHAnAGAcQAHAhAYAYQgyAzAWBSg");
	this.shape_15.setTransform(33.8,82.5,1.319,1.319);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BEC0C2").s().p("AAQBKQgRgOgDgZQgCgXALgQQgIgPADgSQAAgRANgOQgIgLgQgTIgagfIAAAAIAEACQAOANA4AsQgKANgBASQgCAVANAOQgOAMgCAWQgBAYASAQIhJA8g");
	this.shape_16.setTransform(39.9,82.5,1.319,1.319);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3D4D6").s().p("AgaB+IAFADQgYhSAzg0QgXgXgHghQgFgdAGgnIgEADIAEgDIAYAeQASATAIALQgNAPgCAQQgDASAKAQQgNAPACAYQADAYATAOIgzA5IAHgGIgHAGg");
	this.shape_17.setTransform(38,82.6,1.319,1.319);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEDEDE").s().p("AgkgEQAYgYAHghQAFgcgGgnIAkAeQAPBigQBjIggAcIgFACQAWhSgygzg");
	this.shape_18.setTransform(67.8,82.5,1.319,1.319);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D3D4D6").s().p("AAPB8IAHAGIgyg5QATgOACgYQACgYgNgPQAKgQgDgSQgCgQgNgPIAageIAYgeIAEADIgEgDQAHAogGAcQgHAhgWAXQAyA0gYBSIAFgDIgFAEg");
	this.shape_19.setTransform(63.6,82.6,1.319,1.319);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BEC0C2").s().p("AglBGQASgQgBgYQgCgWgOgMQAMgOgBgVQgCgSgJgNIAkgdIAigcIADgCIABAAIgaAfIgZAeQANAOABARQADASgJAPQAMAQgCAXQgDAZgRAOIAzA4g");
	this.shape_20.setTransform(61.8,82.5,1.319,1.319);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E8E9").s().p("AgZDNIgBAAIgDgEIgLgNIgUgCIgBAAIgCgDIgKgLQgWAPgTgNQgHgFgEgIQgEgIACgHIgHgFQgfgcgGgGIgBgBIAAgBQgVhmAThtIAAgBIABgBIATgPQATgQAJgGQgDgRAQgLQARgMAVAMIACgCIAJgJIABAAIAUgCQAIgIAGgIIACgBQAOgDANAAQAOAAAPADIABAAIAAABQAGAIAIAIIAUACIABAAIAJAJIACACQAVgMARAMQAQALgCARQANAKAOAMIATAPIABABIAAABQATBtgVBmIAAABIgBABQgIAIgbAYIgIAGQABAIgFAIQgFAIgIAFQgTAMgTgOQgCAEgIAHIgCADIgBAAIgUACIgLANIgDAEIgBAAQgIACgSAAQgRAAgIgCgAhGCnQACAFAIAIIACABIATACIABAAIAAAAIANAPIACACQAIACAPAAQAQAAAIgCIACgCQAGgJAHgGIAAAAIABAAIATgCIACgBQAIgIACgFIABgCIADACQARAOARgLQAIgFAEgHQAEgIgBgFIAAgCIABgBIAIgHQAYgUALgLQAVhmgThqIgSgPIgdgXIgBgBIAAgBQADgPgOgKQgPgLgTAMIgCACIgMgNIgIgBIgMgBIgBAAIgBgBQgJgJgFgHQgOgDgNAAQgLAAgPADQgFAHgJAJIgBABIgBAAIgUACIgMANIgCgCQgTgMgPALQgOAKADAPIAAABIgBABQgJAGgUARIgSAPQgTBpAVBnQAHAHAdAaIAJAHIAAACQgCAFAEAIQADAHAGAEQAGAEAJABQALAAAMgIIACgCg");
	this.shape_21.setTransform(50.9,82.6,1.319,1.319);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D76B9").s().p("AB1A0QgGgHAAgQIAAgqIgKAAIAAgKIAKAAIAAgTIAMAAIAAATIApAAIAAAKIgpAAIAAArQAAAJAEAFQADADAJAAQAIAAAEgDQADgEAAgKIAAgCIAMAAIAAABQAAARgGAGQgFAGgTAAQgNAAgGgGgAAvA3QgHgEgDgHIAAANIgLAAIAAhyIAMAAIAAAuQADgHAGgDQAGgDALAAQARAAAHAHQAIAHAAAQIAAAUQAAARgIAIQgGAHgSAAQgKAAgHgDgAAsgHQgGAFAAALIAAAOQAAAMAGAGQAGAGANAAQAMAAAEgEQAEgEAAgQIAAgOQAAgOgEgEQgEgEgMAAQgNAAgGAGgAgZA6QgSAAgIgHQgHgHAAgSIAAgUQAAgQAHgHQAIgHASAAIAGAAQARAAAGAHQAIAHAAAQIAAANIg5AAIgBACIAAAFQAAAMAEAFQAFAEAMAAIAGAAQAKAAAFgDQAEgDAAgIIAMAAQgCAOgHAFQgGAGgQAAgAgpgJQgEAEAAAKIAAADIAtAAIAAgDQAAgKgDgEQgEgEgMAAIgGAAQgMAAgEAEgAilA5IAAhyIA4AAQAVAAAKAIQAIAJAAAWIAAAkQAAAVgIAJQgJAJgWAAgAiYAtIApAAQARAAAFgFQAGgGAAgQIAAgjQAAgRgGgGQgFgGgRAAIgpAAg");
	this.shape_22.setTransform(104.4,74,1.319,1.319);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAB3").s().p("AB3AzQgHgHAAgSIAAgUQAAgPAHgIQAIgHARgBQAKAAAGADQAGADAEAHIAAgtIAMAAIAAByIgMAAIAAgMQgDAGgGAEQgGADgLAAQgRAAgIgHgACBgJQgEAEAAAOIAAAOQAAAQAEAEQAEAEAMAAQANAAAGgGQAGgFAAgOIAAgNQAAgKgGgGQgGgHgNAAQgMABgEAEgAgTA6QgSAAgIgHQgIgHAAgSIAAgUQAAgQAIgHQAHgHASgBIAGAAQARABAHAHQAHAHAAAQIAAAMIg5AAIAAADIAAAFQAAANAEAEQAEAEAMAAIAGAAQALAAADgDQAEgEABgHIAMAAQAAANgIAGQgIAGgPAAgAgkgJQgEAFAAAIIAAAEIAtAAIAAgEQAAgIgEgFQgCgEgNAAIgGAAQgMAAgEAEgABXA5IAAgzQAAgLgEgEQgEgFgLAAQgNAAgGAHQgGAGAAAKIAAAwIgMAAIAAhQIAMAAIAAALQADgGAGgEQAHgDALAAQAQABAGAGQAHAHAAAOIAAA2gAhOA5IAAgyQAAgMgDgEQgEgEgKgBQgLAAgGAHQgFAFAAALIAAAwIgMAAIAAg4QAAgIgDgDQgFgDgJgBQgLAAgGAHQgGAGAAAKIAAAwIgMAAIAAhQIAMAAIAAALQADgGAGgEQAGgDAKAAQALABAFADQAGACADAJQAEgIAFgDQAGgDAKgBQAQABAGAGQAHAIAAANIAAA2g");
	this.shape_23.setTransform(106.8,86.1,1.319,1.319);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("Ak2HKQgzgNgwgbQgogVgrgiIiWAAIgBs0IKDgBQCCgBICAAIAAMzQmdAABIABIlTABQgnAjgyAZQglARg5ATQgUACgWAAQgXAAgagCg");
	this.shape_24.setTransform(84.8,56,1.319,1.319);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.18)","rgba(0,0,0,0)"],[0,1],-0.6,-6.2,-0.6,3.9).s().p("AsyAyIAAhjIZlAAIAABjg");
	this.shape_25.setTransform(81.9,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(396));

	// Слой 19
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAB3").s().p("EgMUAu8MgAKhd3IY+AKMgACBdtg");
	this.shape_26.setTransform(78,299.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAB3").s().p("EgMggpjIZBh3MgACBU1I40CBg");
	this.shape_27.setTransform(78.2,302.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AAB3").s().p("EgMhgkFIZDj6MgABBL+I44EBg");
	this.shape_28.setTransform(78.3,305.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AAB3").s().p("Asj+oIZHl7MgABBDGI47GCg");
	this.shape_29.setTransform(78.5,308);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AAB3").s().p("Ask5LIZKn9MgACA6PI4+ICg");
	this.shape_30.setTransform(78.6,310.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00AAB3").s().p("AsmztIZNqAMgABAxYI5BKDg");
	this.shape_31.setTransform(78.8,313.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00AAB3").s().p("AsnuPIZQsCMgACAogI5EMDg");
	this.shape_32.setTransform(78.9,315.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AAB3").s().p("AspoyIZTuDIgCfoI5GODg");
	this.shape_33.setTransform(79.1,318.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00AAB3").s().p("AsqjVIZVwFIgBWxI5KQEg");
	this.shape_34.setTransform(79.2,321.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00AAB3").s().p("AssCHIZZyFIgBN7I5NSCg");
	this.shape_35.setTransform(79.4,323.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00AAB3").s().p("AstHkIZc0HIgCFEI5QUDg");
	this.shape_36.setTransform(79.5,326.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00AAB3").s().p("AvODaIAAitIZ+AAIEekKIABD5IjQDCg");
	this.shape_37.setTransform(65.6,456.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00AAB3").s().p("AvOD1IAAjkIZ+AAIEekIIABEvIjQDAg");
	this.shape_38.setTransform(65.6,455.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAB3").s().p("AvOFCIAAmGIZ+AAIEekBIABHRIjQC6g");
	this.shape_39.setTransform(65.7,451.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00AAB3").s().p("AvOHEIgBqYIZ+AAIEejzIADLfIjRCwg");
	this.shape_40.setTransform(65.7,444.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00AAB3").s().p("AvPJ7IgBwXIZ+AAIEejhIAFRZIjTCjg");
	this.shape_41.setTransform(65.8,435.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00AAB3").s().p("AvQNlIgB4EIZ+AAIEejJIAHZAIjUCRg");
	this.shape_42.setTransform(66,423.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00AAB3").s().p("AvQSEMgACghfIZ+AAIEeirMAAJAiSIjWB7g");
	this.shape_43.setTransform(66.1,408.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00AAB3").s().p("AvRXWMgADgsnIZ+AAIEeiIMAANAtRIjZBig");
	this.shape_44.setTransform(66.2,391.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AAB3").s().p("AvSddMgAEg5dIZ+AAIEehfMAARA57IjcBEg");
	this.shape_45.setTransform(66.4,371.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AAB3").s().p("EgPTAkXMgAFhIAIZ+AAIEegxMAAVBISIjfAjg");
	this.shape_46.setTransform(66.6,349);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00AAB3").s().p("EAL5AsJI7NgDMgAGhYRIZ+AAIEeACMAAZBYVg");
	this.shape_47.setTransform(66.9,323.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_37}]},374).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// lines
	this.instance_3 = new lib.lines();
	this.instance_3.setTransform(-33.5,393.7,1.446,1.446);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({scaleX:1.24,scaleY:1.24,x:-11,y:294.7},13).wait(123).to({y:295.9},0).to({scaleX:1,scaleY:1,x:240.1,y:283},13).wait(148));

	// call us
	this.instance_4 = new lib.call();
	this.instance_4.setTransform(116.9,216.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(259).to({_off:false},0).to({x:134.9,alpha:1},11,cjs.Ease.get(1)).wait(97).to({x:116.9,alpha:0},12,cjs.Ease.get(-1)).to({_off:true},1).wait(16));

	// well
	this.instance_5 = new lib.well();
	this.instance_5.setTransform(215.8,540.7,1.242,1.242);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).to({x:182.3,alpha:1},13,cjs.Ease.get(1)).wait(90).to({x:194.7,alpha:0},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(160));

	// we
	this.instance_6 = new lib.weoffer();
	this.instance_6.setTransform(177.3,195.6,1.192,1.192);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:147.3,y:217.6,alpha:1},9).wait(71).to({x:167.3,y:198.6,alpha:0},9).to({_off:true},1).wait(296));

	// bird
	this.instance_7 = new lib.bird();
	this.instance_7.setTransform(-23.9,66,0.859,0.859,-23.2,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:76.1,y:136},10).to({x:71.1,y:132},89).to({regX:0.1,regY:0.1,scaleX:1.36,scaleY:1.36,x:75.2,y:142.5},12).to({scaleX:1.37,scaleY:1.37,x:71.3,y:140.8},124).to({regX:0,regY:0,scaleX:1.79,scaleY:1.79,x:244.7,y:-109},13).to({_off:true},1).wait(147));

	// Слой 13
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("A1pbeIknlXInno3MAAAgrWIHnAAMAwtAAAILbAAIAAR4IrbJEMgmiAeoIjTCpg");
	this.shape_48.setTransform(112.2,206.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("A1pbeIkolXInmo3MAAAgrWIHmAAMAwuAAAILbAAIAAR4IrbJEMgmhAeoIjVCpg");
	this.shape_49.setTransform(162.2,206.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("EghcANIIgBgBMAAAgq2MBC8AAAIAARqMg0oAp1IgBAAg");
	this.shape_50.setTransform(158.2,200.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("EghEAM+IAAgBMAAAgqWMBCJAAAIAARdMgz/ApVIgBABg");
	this.shape_51.setTransform(154.2,194.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEFEFE").s().p("EggqAM0IgBgBMAAAgp1MBBWAAAIAARPMgzXAo1IgBABg");
	this.shape_52.setTransform(150.2,188.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("EggQAMpIgBgBMAAAgpTMBAjAAAIAARBMgyvAoWIgBAAg");
	this.shape_53.setTransform(146.2,182.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("AyQcWItnv3IgBAAMAAAgozMA/xAAAIAAQ0MgyIAn2g");
	this.shape_54.setTransform(142.2,176.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEFEFE").s().p("AyBb/ItdvqIAAgBMAAAgoSMA+9AAAIAAQnMgxfAnWg");
	this.shape_55.setTransform(138.2,170);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEFEFE").s().p("AxzboItRvdIgBgBMAAAgnxMA+LAAAIAAQZMgw4Am2g");
	this.shape_56.setTransform(134.2,164);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEFEFE").s().p("AxlbRItGvQMAAAgnSMA9XAAAIAAQNMgwQAmVg");
	this.shape_57.setTransform(130.2,157.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEFEFE").s().p("AxWa7Is8vDMAAAgmyMA8kAAAIAAP+MgvnAl3g");
	this.shape_58.setTransform(126.2,151.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEFEFE").s().p("AxHajIsxu2IAAgBMAAAgmPMA7xAAAIAAPwMgu/AlXg");
	this.shape_59.setTransform(122.1,145.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEFEFE").s().p("Aw5aNIsmuqMAAAglwMA6/AAAIAAPkMguYAk2g");
	this.shape_60.setTransform(118.1,139.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEFEFE").s().p("AywXaIhrh8IoqqFMAAAglPMA6LAAAIAAECIAALUMgoNAf+IliEZg");
	this.shape_61.setTransform(114.1,133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_49}]},99).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).wait(284));

	// Слой 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMAy2A7rIEtFhIABUfIkuEeIyBRAg");
	var mask_graphics_99 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMAy2A7rIEtFhIABUfIkuEeIyBRAg");
	var mask_graphics_100 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_101 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_102 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_103 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_104 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_105 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_106 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_107 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_108 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_109 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_110 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_111 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMAy2A7rIEtFhIABUfIkuEeIyBRAg");
	var mask_graphics_235 = new cjs.Graphics().p("EggGAwEMAAehg5INGACMAuWA2YIESFCIABSrIkTEEIwbPgg");
	var mask_graphics_236 = new cjs.Graphics().p("EgfoAvYMAAdhfgIM6ACMAx5A6jIABSaI0bTSg");
	var mask_graphics_237 = new cjs.Graphics().p("EgfLAurMAAdheGIMuACMAxLA5sIABSJI0ITAg");
	var mask_graphics_238 = new cjs.Graphics().p("EgetAt/MAAchcsIMjACMAwbA40IABR4Iz1Stg");
	var mask_graphics_239 = new cjs.Graphics().p("EgePAtTMAAchbTIMWACMAvsA3+IABRmIzhSbg");
	var mask_graphics_240 = new cjs.Graphics().p("EgdyAsmMAAchZ5IMKACMAu+A3HIAARVIzOSJg");
	var mask_graphics_241 = new cjs.Graphics().p("EgdUAr6MAAbhYgIL+ACMAuPA2QIABREIy7R3g");
	var mask_graphics_242 = new cjs.Graphics().p("Egc2ArOMAAahXHILyACMAthA1aIAAQxIyoRmg");
	var mask_graphics_243 = new cjs.Graphics().p("EgcYAqiMAAahVuILlACMAsyA0jIAAQgIyURUg");
	var mask_graphics_244 = new cjs.Graphics().p("Egb7Ap1MAAahUUILZACMAsDAzsIABQPIyCRCg");
	var mask_graphics_245 = new cjs.Graphics().p("EgbdApJMAAZhS7ILOACMArUAy2IAAP9IxuQwg");
	var mask_graphics_246 = new cjs.Graphics().p("Ega/AodMAAZhRhILBACMAqlAx+IAAPsIxbQdg");
	var mask_graphics_247 = new cjs.Graphics().p("EgaiAnwMAAZhQHIK1ACMAp2AxHIABPbIxJQLg");
	var mask_graphics_248 = new cjs.Graphics().p("EgaEAnEMAAYhOuIKpACMAlpAsKIDeEGIABPKIjfDUItWMlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-251.3,y:321.9}).wait(99).to({graphics:mask_graphics_99,x:-241.3,y:321.9}).wait(1).to({graphics:mask_graphics_100,x:-241.3,y:311.9}).wait(1).to({graphics:mask_graphics_101,x:-241.3,y:301.9}).wait(1).to({graphics:mask_graphics_102,x:-241.3,y:291.9}).wait(1).to({graphics:mask_graphics_103,x:-241.3,y:281.9}).wait(1).to({graphics:mask_graphics_104,x:-241.3,y:271.9}).wait(1).to({graphics:mask_graphics_105,x:-241.3,y:261.9}).wait(1).to({graphics:mask_graphics_106,x:-241.3,y:251.9}).wait(1).to({graphics:mask_graphics_107,x:-241.3,y:241.9}).wait(1).to({graphics:mask_graphics_108,x:-241.3,y:231.9}).wait(1).to({graphics:mask_graphics_109,x:-241.3,y:221.9}).wait(1).to({graphics:mask_graphics_110,x:-241.3,y:211.9}).wait(1).to({graphics:mask_graphics_111,x:-241.3,y:201.9}).wait(124).to({graphics:mask_graphics_235,x:-209.4,y:217.9}).wait(1).to({graphics:mask_graphics_236,x:-187,y:217.9}).wait(1).to({graphics:mask_graphics_237,x:-164.6,y:217.9}).wait(1).to({graphics:mask_graphics_238,x:-142.2,y:217.9}).wait(1).to({graphics:mask_graphics_239,x:-119.8,y:217.9}).wait(1).to({graphics:mask_graphics_240,x:-97.4,y:217.9}).wait(1).to({graphics:mask_graphics_241,x:-75.1,y:217.9}).wait(1).to({graphics:mask_graphics_242,x:-52.7,y:217.9}).wait(1).to({graphics:mask_graphics_243,x:-30.3,y:217.9}).wait(1).to({graphics:mask_graphics_244,x:-7.9,y:217.9}).wait(1).to({graphics:mask_graphics_245,x:14.5,y:217.9}).wait(1).to({graphics:mask_graphics_246,x:36.8,y:217.9}).wait(1).to({graphics:mask_graphics_247,x:59.2,y:217.9}).wait(1).to({graphics:mask_graphics_248,x:81.6,y:217.9}).wait(148));

	// pic2
	this.instance_8 = new lib.pic2_1();
	this.instance_8.setTransform(-305.3,407.5,1.575,1.575,0,0,0,-0.1,0.1);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({regY:0.2,scaleX:1.29,scaleY:1.29,x:-252,y:398.1},12).wait(124).to({regX:0.1,regY:0.3,scaleX:1.56,scaleY:1.56,x:29.7,y:315.4},13).wait(148));

	// Слой 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgTwA3ZIhThTIxkxkIAAxaIAAtxMArAgh+IMjp7IVdw9MAAOBu/g");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgXbAxxIhKg/IwmuHIANyjMAoKggUMApxghrMAAQBjvg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgVAAxYIjlg5IwguDIAOyNMBRthBtMAAQBi9g");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgSlAw/ImBg1IwXt9IANx4MBRfhBaMAAPBiLg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgQJAwnIoegxIwPt3IANxjMBRRhBIMAAPBhZg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgNuAwOIq6grIwHt0IANxNMBRDhA1MAAPBgng");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgLTAv1ItWgmIv/tvIAOw3MBQ0hAjMAAPBf1g");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgI4AvdIvygiIv3tpIANwiMBQnhARMAAPBfDg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgGdAvDIyOgcIvvtkIAOwMMBQYg//MAAPBeRg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgECAuqI0qgWIvntgIAOv3MBQKg/sMAAPBdfg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgBmAuSI3HgSIvftbIAOvhMBP8g/aMAAPBctg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EAAzAt5I5hgMIvXtXIAOvLMBPug/IMAAPBb7g");
	var mask_1_graphics_110 = new cjs.Graphics().p("EADOAtgI79gIIvPtRIAOu2MBPfg+1MAAQBbJg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EAFpAtII+ZgEIvGtMIANugMAtSgjuMAh/ga1MAAQBaXg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EAFpAtII+ZgEIvGtMIANugMAtSgjuMAh/ga1MAAQBaXg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EADxAsSI8WgTIuistIANuOMBN0g9ZMAAOBYrg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EAB5ArcI6TgjIt+sNIAOt9MBMUg8OMAAOBXAg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EAAAAqmI4OgzItartIANtsMBK2g7EMAAOBVUg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgB2ApwI2NhCIs2rOIANtaMBJYg56MAANBTog");
	var mask_1_graphics_240 = new cjs.Graphics().p("EgDuAo6I0JhSIsSquIANtJMBH4g4vMAAOBR9g");
	var mask_1_graphics_241 = new cjs.Graphics().p("EgFmAoEIyHhhIrsqOIAMs5MBGag3kMAAOBQRg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgHfAnOIwChxIrJpvIAMsmMBE7g2aMAAOBOlg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgJYAmYIt+iBIqkpPIALsVMBDeg1PMAAMBM5g");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgLPAljIr8iSIqAovIALsEMBCAg0FMAAMBLOg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgNIAktIp4ihIpcoQIALryMBAhgy7MAANBJig");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgPAAj2In1ivIo3nxIALrhMA/CgxvMAAMBH2g");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgQ5AjAIlxi/IoTnRIALrQMA9jgwlMAANBGLg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgSwAiLIjujQInvmwIALrAIHkl+MA0ggpcMAAMBEfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:237.9,y:259.8}).wait(99).to({graphics:mask_1_graphics_99,x:261.4,y:293.8}).wait(1).to({graphics:mask_1_graphics_100,x:262.1,y:285.4}).wait(1).to({graphics:mask_1_graphics_101,x:262.8,y:277.1}).wait(1).to({graphics:mask_1_graphics_102,x:263.5,y:268.8}).wait(1).to({graphics:mask_1_graphics_103,x:264.2,y:260.4}).wait(1).to({graphics:mask_1_graphics_104,x:264.9,y:252.1}).wait(1).to({graphics:mask_1_graphics_105,x:265.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_106,x:266.3,y:235.4}).wait(1).to({graphics:mask_1_graphics_107,x:267,y:227.1}).wait(1).to({graphics:mask_1_graphics_108,x:267.7,y:218.8}).wait(1).to({graphics:mask_1_graphics_109,x:268.4,y:210.4}).wait(1).to({graphics:mask_1_graphics_110,x:269.2,y:202.1}).wait(1).to({graphics:mask_1_graphics_111,x:269.9,y:193.8}).wait(124).to({graphics:mask_1_graphics_235,x:269.9,y:193.8}).wait(1).to({graphics:mask_1_graphics_236,x:283.7,y:195.1}).wait(1).to({graphics:mask_1_graphics_237,x:297.6,y:196.5}).wait(1).to({graphics:mask_1_graphics_238,x:311.4,y:197.9}).wait(1).to({graphics:mask_1_graphics_239,x:325.3,y:199.3}).wait(1).to({graphics:mask_1_graphics_240,x:339.1,y:200.6}).wait(1).to({graphics:mask_1_graphics_241,x:353,y:202}).wait(1).to({graphics:mask_1_graphics_242,x:366.9,y:203.4}).wait(1).to({graphics:mask_1_graphics_243,x:380.7,y:204.8}).wait(1).to({graphics:mask_1_graphics_244,x:394.6,y:206.2}).wait(1).to({graphics:mask_1_graphics_245,x:408.4,y:207.5}).wait(1).to({graphics:mask_1_graphics_246,x:422.3,y:208.9}).wait(1).to({graphics:mask_1_graphics_247,x:436.1,y:210.3}).wait(1).to({graphics:mask_1_graphics_248,x:450,y:211.7}).wait(148));

	// pic1
	this.instance_9 = new lib.pic1();
	this.instance_9.setTransform(46,436,0.974,0.974,0,0,0,0.1,0.1);

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({regX:0.2,scaleX:1.03,scaleY:1.03,x:38.7,y:307.4},12).wait(124).to({regX:0.1,scaleX:1.13,scaleY:1.13,x:113.3,y:278.3},0).to({x:543.3,y:239.3},13).wait(148));

	// Слой 3
	this.instance_10 = new lib.bird();
	this.instance_10.setTransform(-38.2,425.6,0.511,0.511,0.5,0,0,0.2,0.4);
	this.instance_10._off = true;
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111).to({_off:false},0).to({x:31.8,y:455.6},11).wait(104).to({x:11.8,y:375.6},8).to({_off:true},1).wait(161));

	// Слой 1 - копия
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape_62.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.8,216.3,836.7,760.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;