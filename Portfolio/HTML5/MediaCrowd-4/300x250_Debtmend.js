(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_Debtmend_atlas_.png", id:"300x250_Debtmend_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"300x250_Debtmend_atlas_", frames: [[0,0,500,345],[0,347,412,189]]}
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
	this.spriteSheet = ss["300x250_Debtmend_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["300x250_Debtmend_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.well = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAB3").s().p("AgMA9IAAgcIAZAAIAAAcgAgMANIAAhJIAZAAIAABJg");
	this.shape.setTransform(99.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAB3").s().p("AgYA4QgMgGgGgIQgIgHgFgNQgEgKAAgMQAAgLAFgLQAFgMAHgIQAIgIALgFQALgFAMAAQANAAALAFQAMAGAIAIQAGAIAFAMQAFALAAAKQAAAMgFALQgFALgHAIQgJAKgLAEQgMAFgLAAQgMAAgMgFgAgNggQgHAEgDAEQgEAFgCAHQgCAGAAAGQAAAHACAGQADAHADAFQAEAEAGAEQAGADAHAAQAGAAAHgDQAGgDAEgGQAEgFACgGQACgGAAgHQAAgHgCgGQgDgGgDgFQgEgFgGgDQgGgDgHAAQgHAAgGADg");
	this.shape_1.setTransform(90.5,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAB3").s().p("AgMA9IAAhfIgmAAIAAgZIBlAAIAAAZIglAAIAABfg");
	this.shape_2.setTransform(78.6,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAB3").s().p("AgqA9IAAh4IBSAAIAAAZIg1AAIAAAXIAuAAIAAAVIguAAIAAAaIA4AAIAAAZg");
	this.shape_3.setTransform(64.5,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAB3").s().p("AgKA9Igvh4IAeAAIAbBUIAchUIAeAAIguB4g");
	this.shape_4.setTransform(53.2,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAB3").s().p("AAcA9IgKgcIgkAAIgJAcIgcAAIAsh4IAYAAIArB4gAgNANIAbAAIgOgog");
	this.shape_5.setTransform(41.7,18.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAB3").s().p("AAXA9IAAgzIguAAIAAAzIgbAAIAAh4IAbAAIAAAvIAuAAIAAgvIAcAAIAAB4g");
	this.shape_6.setTransform(29.6,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAB3").s().p("AgMA9IAAhfIgmAAIAAgZIBlAAIAAAZIglAAIAABfg");
	this.shape_7.setTransform(13.9,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAB3").s().p("AgKATIAAglIAVAAIAAAlg");
	this.shape_8.setTransform(6.4,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AAeA9Ig2hEIAABEIgcAAIAAh4IAWAAIA2BFIAAhFIAdAAIAAB4g");
	this.shape_9.setTransform(-2.2,18.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAB3").s().p("AgXA4QgMgGgHgIQgHgHgGgNQgEgLAAgLQAAgLAEgLQAHgNAGgHQAIgIAMgFQAKgFAMAAQANAAALAFQAMAGAIAIQAHAIAFAMQAEAKAAALQAAAMgEALQgFALgIAIQgKAKgJAEQgMAFgMAAQgLAAgMgFgAgMggQgIAFgCADQgEAFgCAHQgCAGAAAGQAAAHACAGQABAFAFAHQADAEAHAEQAGADAGAAQAHAAAHgDQAGgEADgFQAFgFACgGQACgGAAgHQAAgHgCgGQgDgGgEgFQgEgFgFgDQgHgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(-15.2,18.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAB3").s().p("AgzA9IAAh4IAtAAQAMgBANAGQAKADAIAKQAIAHADAMQAEAJABANQgBANgEAMQgEALgIAIQgIAHgLAFQgLAFgMAAgAgXAkIARAAQAGgBAFgCQAHgDADgEQAEgFADgHQACgJAAgFQAAgFgCgJQgDgGgEgEQgDgFgHgDQgEgDgHABIgRAAg");
	this.shape_11.setTransform(-27.5,18.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAB3").s().p("AgXA4QgLgFgGgJQgHgHgCgLQgEgMAAgMIAAg8IAdAAIAAA8QAAAHABAHQAAAFAEAGQADAFAFADQAGADAFAAQAGAAAGgDQAEgDAEgFQACgGACgFIABgOIAAg8IAcAAIAAA8QAAALgDANQgDAJgHAKQgHAJgKAEQgKAFgNAAQgMAAgLgFg");
	this.shape_12.setTransform(-44.4,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AAB3").s().p("AgXA4QgMgGgHgIQgHgHgGgNQgEgLAAgLQAAgMAFgKQAFgMAIgIQAHgIAMgFQAKgFAMAAQANAAALAFQAMAGAIAIQAHAIAFAMQAEAKAAALQAAAMgEALQgFALgIAIQgKAKgJAEQgMAFgMAAQgLAAgMgFgAgMggQgHAEgDAEQgEAFgCAHQgCAGAAAGQAAAHACAGQACAHAEAFQAEAEAGAEQAGADAGAAQAHAAAHgDQAFgDAEgGQAFgFACgGQABgGAAgHQAAgHgBgGQgDgGgEgFQgEgFgGgDQgFgDgIAAQgGAAgGADg");
	this.shape_13.setTransform(-57.3,18.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AAB3").s().p("AgNA9IAAgqIgrhOIAfAAIAZA3IAZg3IAgAAIgsBOIAAAqg");
	this.shape_14.setTransform(-69.5,18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AgWA4QgKgFgIgJQgGgGgGgOQgEgMAAgKQAAgKAFgMQAFgMAHgHQAIgKAKgEQAKgFALAAQANAAAKAFQAMAHAGAHQAIAJAEALQAEAKAAALQAAALgEAMQgFAMgHAIQgJAIgKAFQgKAFgMAAQgMAAgKgFgAgQgqQgHAEgGAHQgFAFgDAKQgDAIAAAIQAAAIADAKQADAIAFAGQAFAHAJAFQAIADAHAAQAJAAAIgEQAIgEAFgHQAGgIACgHQADgJAAgIQAAgIgDgIQgDgJgFgHQgFgGgIgEQgIgEgJAAQgJAAgHAEg");
	this.shape_15.setTransform(-85.6,18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AgWA5QgOgFgJgIIAHgNIAHAGIAKAFIAMAEQAGABAGAAQAMAAAIgEQAHgEAAgKQAAgFgCgEQgCgDgFgDQgFgDgGgBIgNgEIgQgFQgIgBgEgDQgFgEgCgFQgDgGAAgGQAAgJAEgHQADgHAGgEQAFgFAIgCQAIgCAIAAQANAAAJADQAKAEAIAGIgHANIgGgFIgHgEIgKgDIgKgBQgMAAgHAGQgHAFAAAJQAAAGACACQABADAFADQAFADAFABIAMAEIARAEQAJACAEADQAFADAEAGQACAHAAAHQAAAJgDAHQgDAGgGAEQgGAEgIACQgIACgKAAQgMAAgMgEg");
	this.shape_16.setTransform(-97.3,18.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#727477").s().p("AgEAQIADgPIgEAAIAAgQIALAAIAAAQIgFAPg");
	this.shape_17.setTransform(100.9,5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727477").s().p("AgWA5QgMgEgLgJIAHgNQADADAEADIAKAFQAHADAFABQAGABAGAAQAMAAAIgEQAHgEAAgKQAAgFgCgEQgCgDgFgDIgLgEIgNgEQgLgDgFgCQgIgBgEgDQgFgEgCgFQgDgFAAgHQAAgJAEgHQADgHAGgEQAFgFAIgCQAIgCAIAAQANAAAJADQAKAEAIAHIgHAMIgGgFIgHgEIgKgDIgKgBQgMAAgHAGQgHAFAAAJQAAAGACACQABADAFADIAKAEIAMAEIARAEQAJACAEADQAGAFADAFQACAGAAAHQAAAJgDAHQgDAGgGAEQgIAFgGABQgIACgKAAQgMAAgMgEg");
	this.shape_18.setTransform(93.8,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#727477").s().p("AAcA9IgcgsIgdAAIAAAsIgQAAIAAh5IAyAAQAHABAIADQAFADAHAGQAFAGACAHQADAGAAAHIgCANQgBAFgEAEQgDAEgFAEIgKAFIAdAvgAgdADIAiAAQAFAAAEgCIAGgEIAFgIQABgEAAgGQAAgFgBgEIgGgIQgDgEgEgBQgDgCgFAAIghAAg");
	this.shape_19.setTransform(83.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#727477").s().p("AgWA4QgLgFgHgJQgIgJgEgLQgEgJAAgNQAAgMAEgKQAFgLAHgJQAJgIAKgFQAKgFALAAQANAAAKAGQALAFAHAIQAHAIAFAMQAEAMAAAJQAAAMgFALQgEAMgIAIQgHAIgLAFQgKAFgMAAQgMAAgKgFgAgQgqQgJAFgEAGQgGAIgCAHQgDAJAAAHQAAAIADAKQADAKAFAFQAGAHAHAEQAIADAIAAQAJAAAIgEQAGgDAHgIQAFgGADgJQADgJAAgIQAAgIgDgIQgDgIgFgIQgGgGgIgEQgGgEgKAAQgHAAgJAEg");
	this.shape_20.setTransform(70.9,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#727477").s().p("AgGA9IAAhqIgqAAIAAgPIBhAAIAAAPIgqAAIAABqg");
	this.shape_21.setTransform(59.3,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727477").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_22.setTransform(51.8,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727477").s().p("AgxA9IAAh5IAqAAQALAAANAGQAKADAJAJQAGAJAEALQAEAKAAAMQAAANgEAMQgFAMgHAHQgIAHgKAFQgLAFgMAAgAghAuIAaAAQAKAAAHgDQAJgEAFgGQAFgHACgIQAEgIAAgKQAAgJgEgIQgCgIgFgHQgGgGgIgEQgIgDgJAAIgaAAg");
	this.shape_23.setTransform(43.8,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727477").s().p("AgoA9IAAh5IBPAAIAAAPIg/AAIAAAnIA3AAIAAAKIg3AAIAAAqIBBAAIAAAPg");
	this.shape_24.setTransform(32.5,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727477").s().p("AAdA9IgcgsIgfAAIAAAsIgPAAIAAh5IAyAAQAHABAIADQAGADAGAGQAEAEAEAJQACAHAAAGIgCANQAAAFgFAEQgCAEgGAEQgGAEgFABIAeAvgAgeADIAjAAQAFAAAEgCIAHgEIAEgIQABgEAAgGQAAgFgBgEIgFgIQgDgEgEgBQgEgCgEAAIgjAAg");
	this.shape_25.setTransform(21.8,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727477").s().p("AgRA4QgKgFgIgKQgIgJgEgLQgEgMAAgJQAAgKAEgLQAEgMAHgIQAHgJALgFQALgFAMAAQAQAAAMAHQAMAIAFALIgMAIQgDgFgEgFQgDgDgFgDIgKgDIgJgBQgIAAgIAEQgHAEgGAHQgGAHgCAIQgDAJAAAHQAAAKAEAHQACAIAGAIQAGAHAIADQAIAEAHAAIAJgBIAKgEIAJgGQAFgGABgEIANAHQgDAHgFAFQgFAFgHAEQgHAEgHABQgGACgIAAQgKAAgLgFg");
	this.shape_26.setTransform(9.9,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727477").s().p("AAdA9IgcgsIgfAAIAAAsIgPAAIAAh5IAyAAQAHABAIADQAHAEAEAFQAGAFACAIQADAGAAAHQAAAIgCAFQgBAFgEAEQgDAEgFAEIgLAFIAeAvgAgeADIAjAAQAGAAADgCIAGgEQADgDABgFQADgEAAgGIgDgJQgBgFgDgDQgEgEgEgBQgDgCgFAAIgiAAg");
	this.shape_27.setTransform(-5.5,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727477").s().p("AgXA4QgJgFgHgJQgHgIgCgLQgCgKAAgNIAAg8IAPAAIAAA8IACASQABAIAFAHQAFAGAGAEQAIAEAIAAQAKAAAHgEQAHgEAEgHQAEgGACgJQACgIAAgJIAAg8IAPAAIAAA8QAAANgDAKQgCAMgHAIQgGAIgKAFQgJAFgOAAQgNAAgKgFg");
	this.shape_28.setTransform(-18.1,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727477").s().p("AgWA4QgLgFgHgJQgHgIgFgMQgEgLAAgLQAAgLAFgLQADgLAJgJQAHgIALgFQAKgFALAAQAOAAAJAGQALAFAHAIQAGAHAGANQAEAMAAAJQAAAMgFALQgDAMgJAIQgHAIgLAFQgKAFgMAAQgMAAgKgFgAgQgqQgHAEgGAHQgFAGgDAJQgDAJAAAHQAAAIADAKQADAIAFAHQAGAHAHAEQAJADAHAAQAJAAAIgEQAIgEAFgHQAGgIACgHQADgJAAgIQAAgIgDgIQgDgIgFgIQgHgHgHgDQgGgEgKAAQgIAAgIAEg");
	this.shape_29.setTransform(-31,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727477").s().p("AgGA9IAAgtIgvhMIASAAIAjA+IAkg+IARAAIguBMIAAAtg");
	this.shape_30.setTransform(-43,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727477").s().p("AgoA8IAAh3IBPAAIAAANIg/AAIAAAoIA3AAIAAAKIg3AAIAAAqIBBAAIAAAOg");
	this.shape_31.setTransform(97.9,-18.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_32.setTransform(87.9,-18.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727477").s().p("AgxA8IAAh3IAqAAQANAAALAEQANAGAFAHQAIAJADALQAEAMAAAKQAAAMgEAMQgEAMgIAHQgHAIgLAFQgMAEgLAAgAghAuIAaAAQAKAAAHgDQAJgEAEgGQAGgGACgJQAEgIAAgKQAAgJgEgJQgDgIgFgHQgFgFgIgEQgIgEgJAAIgaAAg");
	this.shape_33.setTransform(76.5,-18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727477").s().p("AAmA8IhJhbIAABbIgPAAIAAh3IAMAAIBJBcIAAhcIAQAAIAAB3g");
	this.shape_34.setTransform(63.4,-18.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727477").s().p("AAoA8IgPgjIgxAAIgOAjIgRAAIAyh3IALAAIAyB3gAgVANIArAAIgWg3g");
	this.shape_35.setTransform(51,-18.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727477").s().p("AAhA8IAAg3IhBAAIAAA3IgQAAIAAh3IAQAAIAAA0IBBAAIAAg0IAQAAIAAB3g");
	this.shape_36.setTransform(38.9,-18.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_37.setTransform(23.8,-18.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_38.setTransform(13.8,-18.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727477").s().p("AgFASIAAgjIALAAIAAAjg");
	this.shape_39.setTransform(6.4,-23.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727477").s().p("AgoA8IAAh3IBPAAIAAANIg/AAIAAAoIA2AAIAAAKIg2AAIAAAqIBBAAIAAAOg");
	this.shape_40.setTransform(-0.2,-18.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#727477").s().p("AAYA8IgYg5IgXA5IgNAAIgzh3IARAAIApBlIAVgwIgWg1IAPAAIAPArIAQgrIAOAAIgVA1IAVAwIAphlIARAAIgzB3g");
	this.shape_41.setTransform(-14.7,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-25.1,204,50.2);


(lib.weoffer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#727477").s().p("AgKgCIAKgIIALANIgKAIg");
	this.shape.setTransform(116.5,-73.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727477").s().p("AhMgOIAJgHIB0AYIg5hHIAKgKIBLBdIgKAIIhxgYIA3BGIgKAKg");
	this.shape_1.setTransform(106.8,-72.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727477").s().p("AgFA6QgMgCgJgGQgKgGgHgJQgIgKgDgLQgEgMABgJQAAgLAFgLQAFgKAKgIQALgIALgCQAKgCAKABQAMADAKAGQAKAGAHAJQAHAIAEAMQADAMAAAJQAAALgGALQgGAMgIAGQgKAIgMADIgNABIgIgBgAgNgrQgJABgGAGQgJAHgCAHQgEAHAAAKQAAAHADAIQADAIAGAHQAGAHAHAFQAJAFAHACQAHACAIgCQAJgCAHgGQAHgFAEgJQAEgJAAgIQgBgIgDgHQgDgHgFgIQgGgHgIgFQgHgFgJgBIgGgBIgJABg");
	this.shape_2.setTransform(96.7,-63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727477").s().p("AgrgpIANgKIBJBdIgLAKg");
	this.shape_3.setTransform(90,-58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727477").s().p("AgRgRIghAYIgJgJIBMg+IAIALIgeAaIBBBSIgMAKg");
	this.shape_4.setTransform(82.5,-55.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727477").s().p("Ag9g6IAKgHIBxA/IgNAJIgigRIglAdIALAlIgNAKgAgbAIIAggZIgygeg");
	this.shape_5.setTransform(77.5,-45.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727477").s().p("AgSgRIggAYIgJgJIBLg+IAJALIgfAaIBCBSIgMAKg");
	this.shape_6.setTransform(65.3,-41.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727477").s().p("AhFgpIAMgKIBCBSIA0goIAJAJIhBA0g");
	this.shape_7.setTransform(59.4,-32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727477").s().p("AAFBEQgJgEgIgGIgQgQIgnguIAMgJIAnAtQAEAGAIAHQAFAGAHACQAGACAJgBQAIgBAIgHQAJgHADgHQACgIAAgHQgBgGgEgKIgKgMIgmgwIAMgJIAmAvQAJAMAEAIQAFAKAAAJQABAKgFAKQgEAJgMAKQgLAJgLACIgKABQgGAAgFgBg");
	this.shape_8.setTransform(49,-27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727477").s().p("AgJA/IgCgPQAEABAFgBIAJgCQAFgBAGgDIAMgIQAKgJADgHQACgIgFgHQgFgDgDAAQgDgCgGABIgLABIgcANIgNADQgGAAgFgDQgFgCgEgGQgFgFgDgHQgBgHABgHQADgIAEgGQAGgIAGgFQAIgHAMgEQAKgDAIAAIACAOIgFAAIgJABIgJAEIgJAGQgKAIgDAJQgBAIAFAHQADAEAEABIAIAAIAKgCIAOgGIAOgHQAHgDAHAAQAGAAAHACQAFADAFAGQAFAGACAGQACAGgCAIQgCAHgFAHQgFAGgIAGQgLAKgMAEQgNAEgJAAIgCAAg");
	this.shape_9.setTransform(41.1,-19.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727477").s().p("AhNgOIAKgHIBzAYIg4hHIAJgKIBNBcIgLAJIhxgYIA3BGIgJAKg");
	this.shape_10.setTransform(31.8,-11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727477").s().p("AgEA6QgKgBgMgHQgJgFgIgKQgHgJgEgMQgEgLABgKQABgLAFgLQAEgKAKgIQAKgIAMgCQALgCAKACQAMACAJAGQAJAFAIAKQAHAJAEAMQAEALgBAJQgBAMgFAKQgEAKgKAIQgKAJgMACQgGABgGAAIgIgBgAgNgrQgIABgHAGQgHAGgEAIQgEAIAAAJQAAAGADAJQADAIAGAHQAFAHAIAGQAIAEAJACQAGACAJgCQAGgBAJgGQAJgIACgHQAEgHAAgJQAAgHgDgIQgEgKgFgGQgFgGgJgGQgIgFgIgBIgGgBIgJABg");
	this.shape_11.setTransform(21.6,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727477").s().p("AgFA6QgMgCgKgGQgLgHgGgIQgHgIgEgMQgDgKAAgKQABgMAEgKQAGgLAKgIQANgLANgBQANgCALAGIgFAOIgJgEQgGgBgEACQgFAAgFADIgIAFQgIAHgDAHQgDAJAAAIQAAAHADAIQAEAKAEAFQAGAHAIAFQAIAFAJABQAGACAJgCQAJgBAGgGIAHgHQAEgFABgEIADgLQAAgFgBgFIAOgCQADAFgBAHQgBAHgDAIIgIANQgFAHgFADQgKAIgLACIgLABIgKgBg");
	this.shape_12.setTransform(12.6,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727477").s().p("AgMA6QgNgCgJgGQgKgGgIgJQgIgKgDgLQgDgLAAgJQAAgMAGgKQAFgLAJgHQANgLAOgBQANgCALAGIgEAOQgJgFgKABQgLACgIAHQgHAFgEAJQgDAHAAAJQAAAHADAIQACAIAHAIQAGAIAIAEQAHAFAJABQAJACAGgCQAIgCAHgGQAPgLABgZIgKgMIgVAOIgGgHIAegYIAlAtIgKAIIgKgNQgCAYgQANQgJAHgMADIgLABIgJgBg");
	this.shape_13.setTransform(0.5,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727477").s().p("AhMgOIAJgIIB0AZIg5hHIAKgKIBLBdIgKAIIhygYIA4BGIgKAKg");
	this.shape_14.setTransform(-10.5,22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AgqgpIAMgKIBJBdIgLAKg");
	this.shape_15.setTransform(-17.3,27.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AhFgpIAMgJIBBBSIA1gpIAJAJIhBAzg");
	this.shape_16.setTransform(-22.5,33.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#727477").s().p("AhFgpIAMgKIBBBSIA1goIAJAJIhBA0g");
	this.shape_17.setTransform(-30.3,39.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727477").s().p("AhFgVIBAgyIAGALIgxAoIAZAdIAqghIAIAKIgqAhIAYAhIA0gqIAJAKIhBA0g");
	this.shape_18.setTransform(-38.4,44.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#727477").s().p("AgMAwQAEABAFgBIAJgCIAMgEQAFgCAHgGQAKgIACgIQADgIgGgHQgCgDgFAAQgEgCgFABQgGABgFABIgcAMQgIADgFAAQgFAAgGgDQgEgCgGgGQgFgFgCgHQgBgHABgHQACgIAFgGQAFgIAHgFQAKgIAKgDQAJgDAJAAIACAOIgFAAIgJACIgJADIgJAGQgLAJgCAIQgBAJAFAGQAEAFADAAQADAAAFAAIAKgCIANgGIAPgHQAHgDAHAAQAFAAAHACQAGADAFAGQAGAHABAFQABAIgCAHQgCAIgFAFQgHAJgFADQgLAJgNAFQgMAEgLAAg");
	this.shape_19.setTransform(-46.6,51.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#727477").s().p("AhMgOIAJgHIB0AYIg5hHIAKgKIBLBdIgKAIIhxgYIA3BGIgKAKg");
	this.shape_20.setTransform(-56,58.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#727477").s().p("AAFBEQgHgCgKgIQgJgGgIgKIgmguIAMgJIAmAuIANAMQAEAFAIADQAIADAHgCQAIgBAIgGQAIgHADgIQADgHgBgIQgBgIgEgHQgEgGgFgHIgmgwIAMgJIAmAwQAHAIAFALQAFAIABALQAAAKgFALQgEAJgLAJQgMAKgKACIgJAAQgGAAgGgBg");
	this.shape_21.setTransform(-67.1,65.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727477").s().p("AgEA6QgMgCgKgGQgJgGgIgJQgHgJgEgMQgEgLABgKQABgLAFgLQAFgLAJgHQAKgIAMgCQAKgCALABQAKACALAHQAKAFAHAKQAIAKADAKQAEAMgBAJQAAALgFALQgFALgKAHQgKAJgMACIgNABIgHgBgAgMgrQgJABgHAGQgIAGgDAIQgEAKAAAHQAAAHADAIQAEAJAFAGQAGAIAIAEQAHAFAJACQAGACAJgCQAJgCAGgGQAJgGACgIQAEgHAAgKQAAgGgDgJQgDgHgGgIQgGgHgHgFQgIgFgJgBIgGgBIgIABg");
	this.shape_22.setTransform(-76.2,74.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727477").s().p("AgFA7QgLgCgLgHQgKgGgHgJQgHgJgEgKQgDgKAAgKQAAgLAFgMQAFgKALgJQANgKAOgCQALgBAMAFIgFAOQgGgDgDAAIgKAAIgKADIgIAFQgIAHgDAIQgDAHAAAJQAAAHADAIQAEAKAFAFQAHAIAGAEQAIAEAJADQAHABAIgBQAJgDAGgFIAHgHIAFgJQADgGAAgFQABgGgCgEIAOgCQADAFgBAIQgBAGgDAIQgCAHgGAGQgFAHgFADQgJAIgMACIgNABIgIAAg");
	this.shape_23.setTransform(-85.2,81.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727477").s().p("AgRgRIghAYIgJgJIBMg+IAIALIgeAaIBBBSIgMAKg");
	this.shape_24.setTransform(84.7,-81.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727477").s().p("AhCgYIAvgmQAFgEAGgBQAFgBAEABQAFABAFADQAGAEADAEQAGAIABAIQABAJgEAIQAKgEAKACQAKADAHAJQAFAGABAGQABAEgBAGQgBAEgEAIQgEAGgFAEIgtAlgAAagNQgDABgEADIggAZIAYAgIAhgaQAEgDABgDIADgIIgBgHIgEgGIgGgFIgHgDIgEAAIgEAAgAgIgzQgEAAgDADIgfAZIAaAdIAcgWIAFgGIABgHIAAgHIgEgHQgCgDgEgDIgFgDIgCAAIgFABg");
	this.shape_25.setTransform(77.4,-72.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727477").s().p("AhEgUIA/gzIAGALIgxApIAZAcIAqghIAIAKIgqAhIAYAhIA0gqIAIALIhAAzg");
	this.shape_26.setTransform(69.6,-66.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727477").s().p("AhAgZIAhgbQALgJAMgDQAJgDALACQAKABALAHQAIAFAJALQAJALAEALQAEAMgCAIQAAAKgGALQgGAKgLAJIggAagAgGgyQgIACgJAHIgVARIA5BHIAVgRQAIgHAEgHQAEgIAAgIQABgGgDgJQgFgKgFgGQgHgJgHgEQgIgFgIgCIgGAAIgIABg");
	this.shape_27.setTransform(59.6,-58.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727477").s().p("AhNgOIAKgHIBzAZIg4hJIAKgJIBLBdIgKAIIhygYIA5BGIgLAKg");
	this.shape_28.setTransform(47.2,-48.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727477").s().p("AgEA6QgMgCgKgGQgKgGgHgJQgHgJgEgMQgDgJAAgMQABgLAFgLQAFgLAJgHQAKgIAMgCQALgDAKADQAKABALAHQALAGAGAJQAIAKADALQAEALgBAJQAAALgFALQgFALgKAHQgKAJgLACQgHABgGAAIgIgBgAgMgrQgJABgHAGQgIAGgDAIQgEAKAAAHQAAAHADAIQAEAKAFAFQAGAIAIAEQAGAFAKACQAGACAJgCQAJgCAGgGQAIgGADgIQAEgHAAgJQAAgHgDgJQgDgHgGgIQgGgHgHgFQgIgFgJgBIgGgBIgIABg");
	this.shape_29.setTransform(37.1,-40.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727477").s().p("AgqgpIAMgKIBJBdIgMAKg");
	this.shape_30.setTransform(30.4,-35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727477").s().p("AgSgRIggAYIgJgJIBLg+IAJALIgfAaIBCBSIgMAKg");
	this.shape_31.setTransform(22.9,-31.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727477").s().p("Ag9g6IAKgIIBxBAIgNAIIghgQIgmAeIALAkIgNAKgAgbAJIAggaIgygfg");
	this.shape_32.setTransform(17.9,-21.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727477").s().p("AgMA6QgLgBgLgHQgJgFgJgKQgIgKgDgLQgDgMAAgIQAAgLAGgLQAEgKAKgIQANgLAOgBQANgCALAGIgEAOQgJgFgKACQgLABgIAHQgHAGgEAIQgDAIAAAIQAAAGADAJQADAJAGAHQAHAIAHAEQAHAFAJABQAHACAIgCQAJgCAGgFQAQgNAAgYIgKgMIgVAPIgGgHIAegZIAlAtIgKAIIgKgMQgCAYgQAMQgKAIgLACIgJACIgLgCg");
	this.shape_33.setTransform(7.7,-16.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727477").s().p("AgqgpIAMgKIBJBdIgMAKg");
	this.shape_34.setTransform(0.2,-10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727477").s().p("AhFgpIAMgKIBBBSIA1goIAJAJIhBA0g");
	this.shape_35.setTransform(-5,-4.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727477").s().p("AhCgYIAvgmQAFgEAFgBQAGgBAEABQAEABAGADIAJAIQAFAIACAIQAAAJgDAIQAKgEAKACQAKADAHAJQAEAEABAIQACADgBAHQgCAHgDAFQgFAGgFAEIgsAkgAAagNIgHAEIggAZIAYAgIAhgaIAFgGIACgIQABgDgCgFQAAgBgDgEQgDgDgDgCIgIgDIgDAAIgEAAgAgJgzIgGADIgfAZIAZAdIAcgWQADgCACgEIACgHIgBgIIgDgGQgEgEgDgCIgFgDIgCAAIgFABg");
	this.shape_36.setTransform(-14.2,0.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727477").s().p("AgEA6QgNgCgJgGQgIgFgJgKQgIgKgDgLQgEgLABgKQAAgLAFgLQAGgKAJgIQAKgIAMgCQAKgCAKABQAMADAKAGQAKAGAHAJQAHAIAEAMQADAKAAALQgBAMgFAKQgFALgJAHQgKAIgMADIgNABIgHgBgAgNgrQgJABgGAGQgJAHgCAHQgEAIAAAJQAAAHADAIQADAIAGAHQAGAIAHAEQAHAFAKACQAGACAIgCQAJgCAHgGQAIgGADgIQAEgJAAgIQAAgFgEgKQgDgHgFgIQgGgHgIgFQgHgFgJgBIgGgBIgJABg");
	this.shape_37.setTransform(-23.3,8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727477").s().p("AgXAKIAlgeIAJALIglAeg");
	this.shape_38.setTransform(-30.2,15.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727477").s().p("AgFA6QgJgBgMgHQgKgGgHgJQgIgKgDgLQgDgMAAgJQABgMAEgKQAFgKAKgIQAKgIALgCQANgCAJACQALACAKAGQAKAGAHAJQAJALACAKQADAMAAAIQgBANgEAJQgGAKgJAIQgKAJgLACQgHABgGAAIgJgBgAgNgrQgIABgHAGQgHAGgEAIQgDAIgBAJQAAAHADAIQADAIAGAHQAGAIAIAEQAFAFALACQAGACAJgCQAIgCAHgGQAIgGAEgIQADgIAAgIQAAgHgDgIQgDgIgGgIQgGgGgIgGQgKgFgGgBIgGgBIgJABg");
	this.shape_39.setTransform(-38.9,20.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727477").s().p("AhMgOIAJgHIB0AYIg5hHIAKgKIBLBdIgKAIIhxgYIA3BGIgKAKg");
	this.shape_40.setTransform(-49,28.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00AAB3").s().p("AhFgUIBAg0IALARIgsAlIASAUIAmgeIAMAPIgmAeIASAZIAvgmIANAQIhCA1g");
	this.shape_41.setTransform(-61.1,38.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00AAB3").s().p("AhFgUIBAg0IALAQIgsAlIASAVIAmgeIAMAPIgmAeIASAZIAwgmIAMAQIhBA1g");
	this.shape_42.setTransform(-69.1,44.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00AAB3").s().p("AhLgZIAqgiQAGgFAIgBQAHgCAJABQADABAJAEQAHAEAEAGQAIAJABALQACALgGAKIAzAQIgVARIgtgQIgQAOIAXAgIgRAPgAgQgsQgDABgCACIgWARIAYAdIAVgQIAEgFQABgDAAgEIgBgHQgCgEgCgCQgCgDgCgDIgHgCIgDgBIgEABg");
	this.shape_43.setTransform(-77.4,52.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00AAB3").s().p("AgxgUIA+gzIANAQIgsAkIASAXIAmgdIAMAPIgmAdIAfAnIgSAOg");
	this.shape_44.setTransform(-87.7,58);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AAB3").s().p("Ag/g2IARgNIBuBCIgTANIgcgOIgfAYIAKAfIgTAPgAgVAHIAYgUIgpgag");
	this.shape_45.setTransform(-95.8,69);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#727477").s().p("AAFBEQgJgDgIgHQgJgHgIgJIgmguIAMgKIAmAuIANANQAGAGAGACQAIACAHgBQAIgBAIgHQAIgGADgIQADgHgBgIQgBgIgDgIIgKgMIgmgwIAMgKIAmAwQAIAKAEAKQAFAIABALQAAAMgFAIQgFALgKAIQgLAJgLACIgKACQgGAAgFgCg");
	this.shape_46.setTransform(-20,-20.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#727477").s().p("AgEA6QgKgBgMgHQgKgGgHgJQgHgJgEgMQgDgJAAgMQABgLAFgLQAFgLAJgHQAKgIAMgCQALgDAKADQALACAKAGQALAGAGAJQAJALACAKQAEALgBAJQAAALgFALQgFALgKAHQgKAJgMACQgGABgGAAIgIgBgAgMgrQgJABgHAGQgHAGgEAIQgEAKAAAHQAAAGADAJQAFAKAEAFQAGAIAIAEQAGAFAKACQAGACAJgCQAJgCAGgFQAIgHADgIQAEgHAAgJQAAgHgDgIQgDgIgGgIQgGgGgHgGQgKgFgHgBIgGgBIgIABg");
	this.shape_47.setTransform(-29,-11.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#727477").s().p("AAWAfIhSgeIANgJIBCAYIgKhGIANgLIAMBXIAbAiIgMAKg");
	this.shape_48.setTransform(-40.2,-5.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#727477").s().p("AhJgaIApggQAGgFAHgCQAIgCAHACQAGABAGAEQAGAEAFAFQAEAFACAGQADAGAAAFQAAAFgBAHQgCAGgDAEIA0AQIgOALIgxgRIgXAUIAZAiIgMAKgAgQgzIgIAEIgcAWIAfAmIAbgVQAEgDACgEIABgJIgBgJIgGgIQgDgFgDgCIgHgDIgFAAIgEAAg");
	this.shape_49.setTransform(-50.1,6.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#727477").s().p("AhFgUIA/gzIAHALIgxAoIAYAeIArgiIAIAKIgrAiIAZAgIA0gqIAJALIhAAzg");
	this.shape_50.setTransform(-58.6,12.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#727477").s().p("AgvgVIA9gyIAIALIgwAoIAZAeIAoggIAJAKIgrAgIAiAqIgMAKg");
	this.shape_51.setTransform(-68.5,18.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#727477").s().p("AgvgVIA9gyIAIAKIgwApIAZAeIApggIAIAKIgrAgIAiAqIgMAKg");
	this.shape_52.setTransform(-76.3,24.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#727477").s().p("AgEA6QgKgBgMgHQgKgGgHgJQgHgJgEgMQgEgLABgKQABgLAFgLQAEgKAKgIQAKgIAMgCQALgDAKADQAMACAJAGQAJAFAIAKQAHAJAEAMQAEALgBAJQAAALgFALQgFALgKAHQgKAJgMACQgGABgGAAIgIgBgAgNgrQgIABgHAGQgHAGgEAIQgEAKAAAHQAAAHADAIQADAIAGAHQAGAIAIAEQAGAFAKACQAGACAJgCQAIgCAHgGQAJgGACgIQAEgHAAgJQAAgHgDgIQgEgKgFgGQgFgGgJgGQgIgFgIgBIgGgBIgJABg");
	this.shape_53.setTransform(-83.5,32);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#727477").s().p("AhEgVIA/gyIAGAKIgxAqIAZAcIAqghIAIAJIgqAiIAYAhIA0gqIAIAKIhAA0g");
	this.shape_54.setTransform(-95.5,41.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#727477").s().p("AhWAXIAOgLIBeA3IgPg0IgwgaIAMgJIAlAWIgMgqIAJgJIARA0IAwAaIghhoIANgKIAkB8IgKAJIg3geIARA7IgKAJg");
	this.shape_55.setTransform(-108.8,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-87.7,235.2,175.6);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pic2();
	this.instance.setTransform(-206,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-94.5,412,189);


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
	this.shape.graphics.f("#7D76B9").s().p("AhRBRQgighAAgwQAAgvAighQAigjAvAAQAwAAAiAjQAiAhAAAvQAAAwgiAhQgiAjgwAAQgvAAgigjgAgtg7QgQANAAAUQAAASALAQQAMAVAUAQQAUAVATgBQAMAAAIgDQAFgCAJgIQAIgHgCgGQgCgDgJgJIgJgHQgFgCgGgBIgPALQgKAIgOgQIgHgIQgTgUAJgJIAOgMQAEgHgLgRIgHgIQgEgEgFABQgCAAgIAFg");
	this.shape.setTransform(-72.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D92B7").s().p("AhRBRQgighAAgwQAAgvAighQAigjAvAAQAwAAAiAjQAiAhAAAvQAAAwgiAhQgiAjgwAAQgvAAgigjgAgtg7QgQANAAAUQAAASALAQQAMAVAUAQQAUAVATgBQAMAAAIgDQAFgCAJgIQAIgHgCgGQgCgDgJgJIgJgHQgFgCgGgBIgPALQgKAIgOgQIgHgIQgTgUAJgJIAOgMQAEgHgLgRIgHgIQgEgEgFABQgCAAgIAFg");
	this.shape_1.setTransform(-72.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},15).wait(15));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAB3").s().p("AguA1QgPgVAAggQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAfgPAWQgRAZgeAAQgdAAgRgZgAgVgiQgIANAAAVQAAAWAIANQAHAOAOAAQAdAAAAgxQAAgwgdAAQgOAAgHAOg");
	this.shape_2.setTransform(78.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAB3").s().p("AguA1QgPgWAAgfQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAfgPAWQgRAZgeAAQgdAAgRgZgAgcAAQAAAxAcAAQAdAAAAgxQAAgwgdAAQgcAAAAAwg");
	this.shape_3.setTransform(64.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgSgTIAtgwIAcAAIAACVg");
	this.shape_4.setTransform(46,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgSgTIAugwIAbAAIAACVg");
	this.shape_5.setTransform(36.7,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAB3").s().p("AguA1QgPgWAAgfQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAggPAVQgRAZgeAAQgdAAgRgZgAgcAAQAAAxAcAAQAPAAAIgOQAGgNAAgWQAAgwgdAAQgcAAAAAwg");
	this.shape_6.setTransform(19.8,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgTgTIAugwIAdAAIAACVg");
	this.shape_7.setTransform(7.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAB3").s().p("AAFBLIAAhrIgXAZIgSgTIAtgwIAcAAIAACVg");
	this.shape_8.setTransform(-7.6,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AgtA3QgPgVAAgiQAAghASgWQATgWAfAAQAaAAATAQIgPAZQgNgMgRAAQgOAAgLAMQgLANAAASIABADQAFgIAKgGQAMgGAJAAQAWAAAPANQAPALAAAYQAAAWgQAPQgRAPgZAAQgfAAgRgXgAgbASQABANAHAIQAIAKAMAAQANAAAHgHQAHgHAAgIQAAgMgIgFQgIgGgMAAQgQAAgLAOg");
	this.shape_9.setTransform(-18.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAB3").s().p("AgpBDQgSgLAAgUQAAgOAJgKQAJgKAOgDQgegKAAgaQAAgUATgKQAQgKAWAAQAXAAARAKQASAKAAAUQAAAageAKQAOADAJAKQAJALAAANQAAAUgSALQgRALgZAAQgYAAgRgLgAgQARQgKAGAAAIQAAAIAIAFQAIAFAKAAQAMAAAIgFQAIgFAAgIQAAgIgLgGQgHgEgKgCQgIACgIAEgAgRgsQgHAFAAAIQAAANAYAEQAZgEAAgNQAAgIgHgFQgHgEgLAAQgKAAgHAEg");
	this.shape_10.setTransform(-32.4,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAB3").s().p("AguA1QgPgVAAggQAAgfAPgVQARgZAdAAQAeAAARAZQAPAVAAAfQAAAggPAVQgRAZgeAAQgdAAgRgZgAgVgiQgIANABAVQgBAWAIANQAHAOAOAAQAdAAAAgxQAAgwgdAAQgOAAgHAOg");
	this.shape_11.setTransform(-46.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-11.6,169,23.2);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D76B9").s().p("ADXHpQAageABgUQAAgRgWgaQgMgNg0g1IpCqdIAAkRIKwMjQBeBlAXAgQAoA5gBA7QAABXhNBWQg9g8hFhAg");
	this.shape.setTransform(-6.6,-22.9);

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
p.nominalBounds = new cjs.Rectangle(-272.1,-195.5,544.2,391.1);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.4);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsHCFIAAkJIYPAAIAAEJg");
	mask.setTransform(77.7,13.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEFEFE","#00AAB3"],[0,1],0,-49.3,0,-0.8).s().p("AryB8QgIgBgHgFQgGgHAAgJIAAjMQAAgIAGgGQAHgHAIAAIXlAAQAIABAHAGQAGAGAAAJIAADLQAAAJgGAHQgHAFgIABg");
	this.shape.setTransform(77.7,14.3);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.9,155.3,24.8);


(lib.call = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#727477").s().p("AgdBFQgMgHgHgKQgHgLgEgOQgDgNAAgOIAAhJIATAAIAABJQAAAMACAJQACAKAGAJQAFAJAIAEQAIAEAMAAQANAAAIgEQAJgGAFgIQAFgIACgKQACgKAAgLIAAhJIATAAIAABJQAAAQgEAMQgCANgJAMQgIAJgLAHQgMAFgRAAQgRAAgMgFg");
	this.shape.setTransform(113.5,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727477").s().p("AgbBEQgOgGgIgLQgKgLgEgMQgGgPAAgNQAAgNAGgOQAFgNAKgLQAIgKAOgHQANgGANAAQAQAAANAHQAOAHAIAKQAJALAEANQAGAOAAAMQAAAOgGAPQgFAOgJAJQgJALgNAGQgNAGgPAAQgOAAgNgHgAgUg0QgJAFgHAIQgGAIgEALQgDAKAAAKQAAALADALQAEAKAHAIQAHAIAJAFQAKAFAJAAQAMAAAJgFQAJgFAHgIQAHgJADgKQAEgLAAgKQAAgKgEgKQgDgLgHgIQgHgJgJgEQgLgFgKAAQgJAAgLAFg");
	this.shape_1.setTransform(97.7,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727477").s().p("AgIBKIAAg2Ig5hdIAVAAIAsBMIAthMIAVAAIg5BdIAAA2g");
	this.shape_2.setTransform(83,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727477").s().p("AgIBKIAAiCIgzAAIAAgRIB3AAIAAARIgzAAIAACCg");
	this.shape_3.setTransform(64.3,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727477").s().p("AgcBGQgPgFgNgLIAJgQQADAEAFADIANAHIAOAFIAPABQAQAAAJgFQAJgGAAgLQgBgHgCgEQgDgEgFgDIgOgGIgkgLQgJgBgGgEQgFgFgEgGQgDgGABgJQAAgKADgJQAFgJAHgFQAHgGAJgCQALgDAJAAQAQAAAMAEQALAFAKAIIgJAPIgGgGIgKgFIgMgDQgGgCgGAAQgPAAgJAHQgIAHAAALQAAAGACAEQACADAFAEIANAFIAlAKIAQAGQAGAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgHAFgKADQgLACgLAAQgPAAgPgFg");
	this.shape_4.setTransform(51.5,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727477").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_5.setTransform(42.4,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727477").s().p("AgcBGQgQgFgMgLIAJgQQADAEAFADQAGAEAHADIAPAFIAOABQAPAAAKgFQAIgGAAgLQAAgHgCgEQgDgEgFgDIgOgGIglgLQgIgBgGgEQgGgFgDgGQgDgGAAgJQAAgKAFgJQADgIAIgGQAHgGAKgCQAKgDAJAAQAPAAAMAEQAMAFAKAIIgJAPQgDgDgDgDIgKgFIgLgDQgGgCgIAAQgOAAgJAHQgIAHAAALQAAAGADAEQACADAEAEIANAFIAQAEIAUAGQAMACAEAEQAHAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgGAFgLADQgLACgLAAQgQAAgOgFg");
	this.shape_6.setTransform(33.2,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727477").s().p("AgcBGQgPgFgNgLIAJgQQADAEAFADIANAHIAOAFIAPABQAQAAAJgFQAJgGAAgLQgBgHgCgEQgDgEgFgDIgOgGIgkgLQgJgBgGgEQgGgFgDgGQgDgGAAgJQAAgKAEgJQAEgIAIgGQAHgGAKgCQAKgDAJAAQAPAAAMAEQAMAFAKAIIgJAPIgGgGIgKgFIgMgDQgGgCgGAAQgPAAgJAHQgIAHAAALQAAAGACAEQADADAEAEIANAFIAQAEIAVAGIAQAGQAGAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgHAFgKADQgLACgLAAQgPAAgPgFg");
	this.shape_7.setTransform(20.4,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727477").s().p("AAwBKIgRgrIg9AAIgRArIgVAAIA+iTIAOAAIA8CTgAgaAPIA1AAIgbhCg");
	this.shape_8.setTransform(6.9,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727477").s().p("AgyBKIAAiTIATAAIAACDIBSAAIAAAQg");
	this.shape_9.setTransform(-10.9,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727477").s().p("AgyBKIAAiTIATAAIAACDIBRAAIAAAQg");
	this.shape_10.setTransform(-23.1,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727477").s().p("AgGAWIAAgrIAOAAIAAArg");
	this.shape_11.setTransform(-32.2,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727477").s().p("AgxBKIAAiTIBhAAIAAARIhOAAIAAAwIBEAAIAAAOIhEAAIAAA0IBQAAIAAAQg");
	this.shape_12.setTransform(-40.3,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727477").s().p("AAdBKIgdhGIgcBGIgRAAIg+iTIAUAAIAzB9IAag8IgahAIASAAIASA0IATg0IASAAIgaBAIAaA8IAyh9IAVAAIg/CTg");
	this.shape_13.setTransform(-58.2,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727477").s().p("Ag9BKIAAiTIA0AAQARAAANAGQAOAGAIAKQAKAKAEANQAFAOgBAOQAAARgEANQgGANgJAKQgKALgNAEQgMAGgQAAgAgpA6IAgAAQAMgBAJgEQALgEAGgJQAHgIADgJQAEgNgBgKQABgJgEgNQgEgKgGgIQgHgIgKgEQgJgEgMAAIggAAg");
	this.shape_14.setTransform(-81.6,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AAuBKIhZhwIAABwIgTAAIAAiTIAPAAIBbByIAAhyIASAAIAACTg");
	this.shape_15.setTransform(-97.6,12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AAxBKIgSgrIg9AAIgRArIgUAAIA8iTIAOAAIA+CTgAgaAPIA0AAIgahCg");
	this.shape_16.setTransform(-112.8,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAB3").s().p("AgUBcIAAhAIhBh3IAuAAIAnBVIAnhVIAvAAIhCB4IAAA/g");
	this.shape_17.setTransform(74,-11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAB3").s().p("AArBcIgPgqIg3AAIgPAqIgrAAIBEi3IAjAAIBEC3gAgUAVIApAAIgVg/g");
	this.shape_18.setTransform(56.6,-11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAB3").s().p("AhPBcIAAi3IBEAAQAWAAARAIQARAHAMAMQALAMAGASQAGAQAAASQAAATgGASQgHASgMALQgMAMgSAHQgQAHgUAAgAglA2IAaAAQALAAAJgEQAJgEAGgHQAGgIADgKQAEgJAAgMQAAgMgEgJQgDgKgHgHQgFgHgJgEQgJgEgLAAIgaAAg");
	this.shape_19.setTransform(39.1,-11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAB3").s().p("AgkBVQgSgJgLgMQgMgNgHgRQgGgRAAgRQAAgRAHgRQAGgRANgNQANgNAQgIQARgHASAAQAVAAARAIQARAIALANQANAOAGARQAGAQAAAQQAAATgHAQQgGAQgNAOQgLAMgSAIQgRAIgTAAQgUAAgQgIgAgUgxQgJAFgGAHQgGAIgDAKQgDALAAAIQAAAKADAKQADALAHAHQAGAJAJADQAJAFAKAAQAMAAAJgFQAIgEAHgIQAGgIADgKQADgKAAgKQAAgKgDgKQgDgKgHgIQgGgHgJgEQgJgFgLAAQgLAAgJAFg");
	this.shape_20.setTransform(19.4,-10.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAB3").s().p("AgUBcIAAiRIg4AAIAAgmICZAAIAAAmIg4AAIAACRg");
	this.shape_21.setTransform(1.4,-11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00AAB3").s().p("AgOBcIgWgFIgTgGIgSgKIATgmIAHAGIAOAHIATAGQAMADAHAAQAWAAAAgOQAAgFgDgDQgDgEgGgCIgegLQgMgDgKgFQgJgEgHgFQgFgGgEgHQgDgIAAgKQABgQAFgKQAGgLAIgIQALgIAMgDQAKgFAOAAIATACIASAFIAdANIgTAkIgFgEIgbgLQgIgDgJAAQgVAAAAAQQABAFACADQACADAFACQAEADAHABIAQAGQAPADAJAEQALAFAHAEQAIAGADAJQAEAKABAMQgBAQgGALQgEAJgLAIQgJAGgNAEQgMACgOABg");
	this.shape_22.setTransform(-20.8,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAB3").s().p("AgkBVQgQgHgJgNQgLgOgEgQQgFgQABgSIAAhcIArAAIAABcQAAALACAJQABAJAFAIQAEAHAIAGQAIADAJAAQALABAHgFQAHgFAFgHQAEgHADgLQACgLAAgIIAAhcIArAAIAABcQAAAUgGAPQgEAQgKAOQgKAMgPAIQgPAGgWAAQgVABgPgIg");
	this.shape_23.setTransform(-38.4,-10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00AAB3").s().p("AhBBcIAAi3IArAAIAACRIBXAAIAAAmg");
	this.shape_24.setTransform(-61,-11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AAB3").s().p("AhABcIAAi3IAqAAIAACRIBXAAIAAAmg");
	this.shape_25.setTransform(-76.2,-11);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAB3").s().p("AArBcIgPgqIg3AAIgPAqIgrAAIBDi3IAkAAIBEC3gAgVAVIAqAAIgVg/g");
	this.shape_26.setTransform(-93.3,-11);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAB3").s().p("AgdBVQgQgJgMgNQgMgNgHgSQgGgQgBgRQAAgQAHgQQAGgSAMgMQAMgNARgIQAQgIAVAAQAaAAATALQATALAKASIghAXQgFgJgDgDIgKgIIgNgEIgLgBQgLAAgIAFQgJAEgHAIQgGAKgDAIQgCALAAAIQAAAKADALQAEAKAGAIQAFAGAKAFQAKAFAIAAIANgBQAFgBAGgEIAKgIQAFgEADgHIAjAUQgEAKgJAIQgHAJgMAFQgLAGgLADQgOACgKAAQgSAAgRgIg");
	this.shape_27.setTransform(-110.8,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-20.3,239.6,40.8);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D76B9").s().p("AgkHBQgOgCgegdQgrgriEAOQioAdhXANQicAYhNgXQhngggIh5QAXBnBmAYQBMATCSgZQBSgNCggeQCCgRA3AgQAaAQAWASQAQAFAqgjIDKieQgBABgCgIIAIgLQAFgFAHgDQgFgBAEgQIADgHIADgHQACgFgDgJQgCgIgDgEQgEgEgFgBIgLgCIgFgCIgSgJQgIgGgFACQgHACgIgDQAFgBgOgCIgJAAQgIAAgEgCQgDgBgFAAQgIgBgrAIQglAHgIgFQAFgFAlgHIAwgIIAvgKQAbgFAVgBIBmgJQATgDAYgIQAcgKAJgJQACgIgBgMQgCgMgDgIIgWgYQgLgIgDgGQgEgHgGgEQgRgNgIgLIgIgOIgQgLQgRgKgKgMQgEgFAAgBIAAgFIAAgCQgBgEgNgIQgWgQgDgEIAPgEQgEgDgGgIIgKgLQgPgQgEgFIAEgEIABgCQABgFgMgMIgQgQIAEgBIANADQgHgNgLgLQgOgOgFgHIARgDIgNgRQgIgJgDgJIAGgDQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIADgCQgGgHgKgRQgKgRgHgHQACgFADgBQADgBABgDQgQgOACgSQAEACAFAFIAIAHIgFgRQgDgJAAgJIAbAqQAaArAbAcIDIC/IAyAtQAVAVAYAgQAQgCAGgJIAKgWQAHgIAFgPQAHgPADgKIAQABIASgkQAKACAFAGIARgmQALABADABQARguAOgGQAFADABACQABACAGADIAZgzQASgDACgEIAUgsIAQAFQABABAJgQIAKgQQAGgKAGgDQAGAEABADIAEANQAFgDAEgIIAHgNQARANgBAtQgBAkgKAaIgTA5QgKAegOAYQgYAqgoAqQgNAOgaAUIgVAOQgPAJgGAFIARAPQAIAJgCAPQgBAIgEANQgEALgBAXQgIgFgEgIQgDgGgHgDQgWgKgTAIQgSALgJADIgfAKQgSAHgLAIQgfAVgOADIgrANIAAgEIgDgJIgGgIQgCgDgDgBQgKgChBAsIh+BdIjTCqQgZAXgPAAIgBAAg");
	this.shape.setTransform(-47.8,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E8E9").s().p("ApFMaQgPgBgwglQgsghhzARQiOAdhHAKQh+ATg8gdQhPglADh/IAGsWIAGpgIQwAAIXBAXI7+X0QgvAogVAAIgCAAg");
	this.shape_1.setTransform(5.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.3,-79.4,266.8,158.9);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AryCFQgIAAgHgGQgGgGAAgJIAAjfQAAgJAGgGQAHgGAIAAIXlAAQAIAAAHAGQAGAGAAAJIAADfQAAAJgGAGQgHAGgIAAg");
	mask.setTransform(77.7,15.3);

	// Слой 3
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(77.7,13.4,1,1,0,0,0,77.7,13.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAB3").s().p("AryCFQgIAAgHgGQgGgHAAgIIAAjfQAAgIAGgHQAHgGAIAAIXlAAQAIAAAHAGQAGAHAAAIIAADfQAAAIgGAHQgHAGgIAAg");
	this.shape.setTransform(77.7,13.4);

	this.instance.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.9,155.3,24.8);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAoQgDgDAAgEQAAgFADgDQADgCADAAQADAAAEACQADADAAAFQAAAEgDADQgEADgDAAQgDAAgDgDgAgGAOIgDg4IASAAIgCA4g");
	this.shape.setTransform(65.6,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIA7AAIAAAQIgpAAIAAASIAoAAIAAANIgoAAIAAAUIApAAIAAAQg");
	this.shape_1.setTransform(60.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAqIgmg2IAAA2IgTAAIAAhTIATAAIAlA0IAAg0IATAAIAABTg");
	this.shape_2.setTransform(51.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAfQgNgMABgTQgBgSANgNQANgMASAAQATAAANAMQANANAAASQAAATgNAMQgNANgTAAQgSAAgNgNgAgRgTQgIAIAAALQAAALAIAJQAGAHALABQAMgBAHgHQAHgJAAgLQAAgKgHgJQgHgIgMAAQgKAAgHAIg");
	this.shape_3.setTransform(42.1,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIASAAIAABDIAjAAIAAAQg");
	this.shape_4.setTransform(34.1,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXAqIgFgOIgjAAIgGAOIgUAAIAhhTIAVAAIAhBTgAgMALIAZAAIgNgig");
	this.shape_5.setTransform(26.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgZAAIAAgQIBDAAIAAAQIgZAAIAABDg");
	this.shape_6.setTransform(14.7,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAfQgNgMABgTQgBgSANgNQANgMASAAQATAAANAMQANANAAASQAAATgNAMQgNANgTAAQgSAAgNgNgAgRgTQgIAIABALQgBALAIAJQAGAHALABQALgBAIgHQAGgJABgLQgBgLgGgIQgIgIgLAAQgKAAgHAIg");
	this.shape_7.setTransform(6,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAqIgog2IAAA2IgSAAIAAhTIATAAIAmA0IAAg0IASAAIAABTg");
	this.shape_8.setTransform(-3.6,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIA7AAIAAAQIgpAAIAAASIAoAAIAAANIgoAAIAAAUIApAAIAAAQg");
	this.shape_9.setTransform(-15.3,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANAqIgPgeIgNAAIAAAeIgSAAIAAhTIAmAAQANgBAIAJQAIAHAAAMQAAAKgGAGQgFAGgIACIATAggAgPgDIARAAQANAAAAgLQAAgLgNAAIgRAAg");
	this.shape_10.setTransform(-23.1,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYAqIgGgOIgjAAIgFAOIgVAAIAhhTIAVAAIAhBTgAgMALIAZAAIgNgig");
	this.shape_11.setTransform(-31.8,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAhQgJgJAAgRIAAgxIASAAIAAAxQAAAUATAAQAUAAAAgUIAAgxIASAAIAAAxQAAARgJAJQgKAKgTAAQgRAAgLgKg");
	this.shape_12.setTransform(-44.3,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgSANgNQAMgMASAAQATAAANAMQAMANAAASQAAATgMAMQgNANgTAAQgSAAgMgNgAgRgTQgIAJAAAKQAAALAIAJQAHAHAKABQALgBAIgHQAHgJAAgLQAAgKgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_13.setTransform(-54,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAqIAAgjIghgwIAUAAIAUAiIAVgiIAUAAIggAwIAAAjg");
	this.shape_14.setTransform(-63,1);

	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(0.1,0,1,1,0,0,0,77.7,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-14.3,155.3,28.6);


// stage content:
(lib._300x250_Debtmend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone
	this.instance = new lib.phone();
	this.instance.setTransform(222.1,22.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).to({x:204.1,alpha:1},11,cjs.Ease.get(1)).wait(105).to({y:12.4,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(211.8,11.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:21.8,alpha:1},10,cjs.Ease.get(1)).wait(249).to({x:229.8,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(125));

	// hedder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39BCC1").s().p("AgPhKQANAqAXAhQgZAkgLAnQgKhQAKhGg");
	this.shape.setTransform(17.4,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAB3").s().p("AgfBLQALgmAYgkQgWgigNgqQAMAVAMAPQAOAWAZASQgaAUgLAPQgQAQgKAYg");
	this.shape_1.setTransform(19.1,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F8DC7").s().p("AABAkQgGgPgPgUQAWgfAPgsQAIBGgIBQQgHgXgJgRg");
	this.shape_2.setTransform(49.5,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D76B9").s().p("AAGAkQgMgPgagUQApggAYgsQgPAtgWAfQANAUAIAPQAJARAHAWIAAABQgMgYgPgQg");
	this.shape_3.setTransform(47.9,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0098A1").s().p("AgPgEIAGgJQAKAJAPAMQgDADgBADQgQgOgLgEg");
	this.shape_4.setTransform(31.8,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D76B9").s().p("AgaAAQAKgNAQgJQAQAMALAKIgbAXQgOgOgMgJg");
	this.shape_5.setTransform(33.5,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0098A1").s().p("AgQgHIAIgHIAaAWIgJAGQgPgLgKgKg");
	this.shape_6.setTransform(31.7,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#736BA5").s().p("AgPgFIAHgJIANAOIABAAIAKAJIgFAGQgOgKgMgKg");
	this.shape_7.setTransform(31.8,25.7);

	this.instance_2 = new lib.ClipGroup_4();
	this.instance_2.setTransform(31.7,24.9,1,1,0,0,0,0.8,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7D76B9").s().p("AAxBQIhehPQgigXACgaQACgRARgTIAaAZQgJAJAAAFQgBAGATAOIABABIBdBNQAGAEABAIQABAHgFAGQgFAFgHABIgCABQgGAAgFgFg");
	this.shape_8.setTransform(36.8,32.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AhfClQgHgBgFgGQgFgFABgIQABgHAFgFIBghPIAAAAIABAAQARgPgBgGQAAgGgRgSQgegXgBgXQAAgYAggaIBbhJQAFgFAIABQAHABAFAGQAEAGAAAHQgBAHgGAFIhdBJQgQAOAAAHQAAAHAQAPIABABQAdAZACAUQACAagiAaIheBPQgFAEgGAAIgCAAg");
	this.shape_9.setTransform(33.5,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7D76B9").s().p("AAUA/IACgCQASgPABgHQAAgHgSgOIhbhIQgGgEgBgHQgBgIAFgGQAEgFAIgBQAHgBAGAFIBbBJQAfAXAAAYQAAAXgdAZg");
	this.shape_10.setTransform(29.9,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BEC0C2").s().p("Ag+ARIAAgBIA+guIA+AuQAAAHgGAHIAAgKIg4ghIg2AhIgBALQgGgIgBgGg");
	this.shape_11.setTransform(33.5,38.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3D4D6").s().p("AgVAfQgFgHgKgKIgTgBIABgLIA2giIA4AiIAAAKIAAABIgTABQgLAJgFAIQgLACgKAAQgKAAgLgCg");
	this.shape_12.setTransform(33.5,40.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BEC0C2").s().p("Ag+gPIAAgBQABgGAGgIIABALIA2AiIA4giIAAgKQAGAIAAAFIg+Avg");
	this.shape_13.setTransform(33.5,10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D4D6").s().p("Ag2gBIgBgLIATgBQAKgKAFgHQAVgEAVAEQAFAIALAJIATABIAAABIAAAKIg4Aig");
	this.shape_14.setTransform(33.5,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DEDEDE").s().p("AAEB/IghgcQgPhiAPhjIAfgbIAFgDQgHAnAGAcQAHAhAYAYQgyAzAWBSg");
	this.shape_15.setTransform(20.6,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BEC0C2").s().p("AAQBKQgRgOgDgZQgCgXALgQQgIgPADgSQAAgRANgOQgIgLgQgTIgagfIAAAAIAEACQAOANA4AsQgKANgBASQgCAVANAOQgOAMgCAWQgBAYASAQIhJA8g");
	this.shape_16.setTransform(25.1,24.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3D4D6").s().p("AgaB+IAFADQgYhSAzg0QgXgXgHghQgFgdAGgnIgEADIAEgDIAYAeQASATAIALQgNAPgCAQQgDASAKAQQgNAPACAYQADAYATAOIgzA5IAHgGIgHAGg");
	this.shape_17.setTransform(23.7,24.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEDEDE").s().p("AgkgEQAYgYAHghQAFgcgGgnIAkAeQAPBigQBjIggAcIgFACQAWhSgygzg");
	this.shape_18.setTransform(46.3,24.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D3D4D6").s().p("AAPB8IAHAGIgyg5QATgOACgYQACgYgNgPQAKgQgDgSQgCgQgNgPIAageIAYgeIAEADIgEgDQAHAogGAcQgHAhgWAXQAyA0gYBSIAFgDIgFAEg");
	this.shape_19.setTransform(43.1,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BEC0C2").s().p("AglBGQASgQgBgYQgCgWgOgMQAMgOgBgVQgCgSgJgNIAkgdIAigcIADgCIABAAIgaAfIgZAeQANAOABARQADASgJAPQAMAQgCAXQgDAZgRAOIAzA4g");
	this.shape_20.setTransform(41.8,24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E8E9").s().p("AgZDNIgBAAIgDgEIgLgNIgUgCIgBAAIgCgDIgKgLQgWAPgTgNQgHgFgEgIQgEgIACgHIgHgFQgfgcgGgGIgBgBIAAgBQgVhmAThtIAAgBIABgBIATgPQATgQAJgGQgDgRAQgLQARgMAVAMIACgCIAJgJIABAAIAUgCQAIgIAGgIIACgBQAOgDANAAQAOAAAPADIABAAIAAABQAGAIAIAIIAUACIABAAIAJAJIACACQAVgMARAMQAQALgCARQANAKAOAMIATAPIABABIAAABQATBtgVBmIAAABIgBABQgIAIgbAYIgIAGQABAIgFAIQgFAIgIAFQgTAMgTgOQgCAEgIAHIgCADIgBAAIgUACIgLANIgDAEIgBAAQgIACgSAAQgRAAgIgCgAhGCnQACAFAIAIIACABIATACIABAAIAAAAIANAPIACACQAIACAPAAQAQAAAIgCIACgCQAGgJAHgGIAAAAIABAAIATgCIACgBQAIgIACgFIABgCIADACQARAOARgLQAIgFAEgHQAEgIgBgFIAAgCIABgBIAIgHQAYgUALgLQAVhmgThqIgSgPIgdgXIgBgBIAAgBQADgPgOgKQgPgLgTAMIgCACIgMgNIgIgBIgMgBIgBAAIgBgBQgJgJgFgHQgOgDgNAAQgLAAgPADQgFAHgJAJIgBABIgBAAIgUACIgMANIgCgCQgTgMgPALQgOAKADAPIAAABIgBABQgJAGgUARIgSAPQgTBpAVBnQAHAHAdAaIAJAHIAAACQgCAFAEAIQADAHAGAEQAGAEAJABQALAAAMgIIACgCg");
	this.shape_21.setTransform(33.5,24.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D76B9").s().p("AB1A0QgGgHAAgQIAAgqIgKAAIAAgKIAKAAIAAgTIAMAAIAAATIApAAIAAAKIgpAAIAAArQAAAJAEAFQADADAJAAQAIAAAEgDQADgEAAgKIAAgCIAMAAIAAABQAAARgGAGQgFAGgTAAQgNAAgGgGgAAvA3QgHgEgDgHIAAANIgLAAIAAhyIAMAAIAAAuQADgHAGgDQAGgDALAAQARAAAHAHQAIAHAAAQIAAAUQAAARgIAIQgGAHgSAAQgKAAgHgDgAAsgHQgGAFAAALIAAAOQAAAMAGAGQAGAGANAAQAMAAAEgEQAEgEAAgQIAAgOQAAgOgEgEQgEgEgMAAQgNAAgGAGgAgZA6QgSAAgIgHQgHgHAAgSIAAgUQAAgQAHgHQAIgHASAAIAGAAQARAAAGAHQAIAHAAAQIAAANIg5AAIgBACIAAAFQAAAMAEAFQAFAEAMAAIAGAAQAKAAAFgDQAEgDAAgIIAMAAQgCAOgHAFQgGAGgQAAgAgpgJQgEAEAAAKIAAADIAtAAIAAgDQAAgKgDgEQgEgEgMAAIgGAAQgMAAgEAEgAilA5IAAhyIA4AAQAVAAAKAIQAIAJAAAWIAAAkQAAAVgIAJQgJAJgWAAgAiYAtIApAAQARAAAFgFQAGgGAAgQIAAgjQAAgRgGgGQgFgGgRAAIgpAAg");
	this.shape_22.setTransform(74.1,18.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAB3").s().p("AB3AzQgHgHAAgSIAAgUQAAgPAHgIQAIgHARgBQAKAAAGADQAGADAEAHIAAgtIAMAAIAAByIgMAAIAAgMQgDAGgGAEQgGADgLAAQgRAAgIgHgACBgJQgEAEAAAOIAAAOQAAAQAEAEQAEAEAMAAQANAAAGgGQAGgFAAgOIAAgNQAAgKgGgGQgGgHgNAAQgMABgEAEgAgTA6QgSAAgIgHQgIgHAAgSIAAgUQAAgQAIgHQAHgHASgBIAGAAQARABAHAHQAHAHAAAQIAAAMIg5AAIAAADIAAAFQAAANAEAEQAEAEAMAAIAGAAQALAAADgDQAEgEABgHIAMAAQAAANgIAGQgIAGgPAAgAgkgJQgEAFAAAIIAAAEIAtAAIAAgEQAAgIgEgFQgCgEgNAAIgGAAQgMAAgEAEgABXA5IAAgzQAAgLgEgEQgEgFgLAAQgNAAgGAHQgGAGAAAKIAAAwIgMAAIAAhQIAMAAIAAALQADgGAGgEQAHgDALAAQAQABAGAGQAHAHAAAOIAAA2gAhOA5IAAgyQAAgMgDgEQgEgEgKgBQgLAAgGAHQgFAFAAALIAAAwIgMAAIAAg4QAAgIgDgDQgFgDgJgBQgLAAgGAHQgGAGAAAKIAAAwIgMAAIAAhQIAMAAIAAALQADgGAGgEQAGgDAKAAQALABAFADQAGACADAJQAEgIAFgDQAGgDAKgBQAQABAGAGQAHAIAAANIAAA2g");
	this.shape_23.setTransform(75.9,27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("Ay3EGQgzgNgwgaQgogWgrgiIiWAAIgBmuMAwJAAAIAAGtMgmqAAAQgnAjgyAZQglARg5ATQgUACgWAAQgXAAgagCg");
	this.shape_24.setTransform(150,26.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.18)","rgba(0,0,0,0)"],[0,1],-1.2,-4.7,-1.2,3).s().p("A4EAmIAAhLMAwJAAAIAABLg");
	this.shape_25.setTransform(150.1,45.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(396));

	// Слой 19
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAB3").s().p("EgujAmDMBdHhMFMgABBLNIgWA4g");
	this.shape_26.setTransform(4.8,9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAB3").s().p("EgpNAhmMBSbhDLMgABA9lImZFmg");
	this.shape_27.setTransform(39,38.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AAB3").s().p("EgkbAdnMBI3g7NMgABAxYIr0J1g");
	this.shape_28.setTransform(69.6,63.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AAB3").s().p("EggNAaGMBAbg0LMgABAmoIwmNjg");
	this.shape_29.setTransform(96.6,86.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AAB3").s().p("A8jXDMA5HguFIgBdTI0vQyg");
	this.shape_30.setTransform(120,105.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00AAB3").s().p("A5dUeMAy7go7IgBVaI4QThg");
	this.shape_31.setTransform(139.8,122.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00AAB3").s().p("A27SXMAt3gktIgBO/I7FVug");
	this.shape_32.setTransform(156,135.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AAB3").s().p("A09QuMAp7ghbIgBJ+I9UXdg");
	this.shape_33.setTransform(168.6,146.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00AAB3").s().p("AzjPjMAnHgfFIgBGYI+6Ytg");
	this.shape_34.setTransform(177.6,153.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00AAB3").s().p("AytO2MAlbgdrIgBEPI/3Zcg");
	this.shape_35.setTransform(183,158.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00AAB3").s().p("AybOnMAk3gdNIgBDhMggLAZsg");
	this.shape_36.setTransform(184.8,159.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00AAB3").s().p("A4WL+IAAitIZ+AAIWv1SIgiEaI0+Tpg");
	this.shape_37.setTransform(156.1,103.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00AAB3").s().p("A4WMBIAAjAIZ9AAIWw1FIghEtI1BTcg");
	this.shape_38.setTransform(156,104.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAB3").s().p("A4WMKIAAj7IZ5AAIW00bIghFjI1IS2g");
	this.shape_39.setTransform(155.9,105.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00AAB3").s().p("A4WMYIAAlbIZ0AAIW5zXIgfG+I1VR4g");
	this.shape_40.setTransform(155.7,107.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00AAB3").s().p("A4WMtIAAnkIZtAAIXAx4IgcJAI1mQfg");
	this.shape_41.setTransform(155.4,110.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00AAB3").s().p("A4XNHIAAqSIZkAAIXKv9IgZLjI18Oug");
	this.shape_42.setTransform(155.1,114.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00AAB3").s().p("A4XNnIAAtnIZZAAIXVtoIgVOsI2XMlg");
	this.shape_43.setTransform(154.6,119.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00AAB3").s().p("A4XONIAAxiIZMAAIXiq5IgRSbI23KCg");
	this.shape_44.setTransform(154.1,125.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AAB3").s().p("A4WO4IAA2GIY7AAIXynrIgLWtI3dHGg");
	this.shape_45.setTransform(153.5,132.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AAB3").s().p("A4WPqIAA7QIYpAAIYFkDIgHbkI4GDwg");
	this.shape_46.setTransform(152.8,139.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00AAB3").s().p("AgbQhI38AAMAAAghBIYXAAIYYAAMAAAAhBg");
	this.shape_47.setTransform(152,148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_37}]},374).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// lines
	this.instance_3 = new lib.lines();
	this.instance_3.setTransform(49.2,263);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({x:28.2,y:15},13).wait(123).to({x:272.1,y:-15},13).wait(148));

	// call us
	this.instance_4 = new lib.call();
	this.instance_4.setTransform(116.9,216.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(259).to({_off:false},0).to({x:134.9,alpha:1},11,cjs.Ease.get(1)).wait(97).to({x:116.9,alpha:0},12,cjs.Ease.get(-1)).to({_off:true},1).wait(16));

	// well
	this.instance_5 = new lib.well();
	this.instance_5.setTransform(210.9,213.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).to({x:183.9,alpha:1},13,cjs.Ease.get(1)).wait(90).to({x:193.9,alpha:0},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(160));

	// we
	this.instance_6 = new lib.weoffer();
	this.instance_6.setTransform(171,127.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:150,y:144.8,alpha:1},9,cjs.Ease.get(1)).wait(71).to({x:171,y:127.8,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(296));

	// bird
	this.instance_7 = new lib.bird();
	this.instance_7.setTransform(-57.9,-2.4);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0.1,regY:0.1,scaleX:0.83,scaleY:0.83,rotation:6.2,x:41.7,y:94.9},10).to({regX:0,regY:0,scaleX:1.24,scaleY:1.24,rotation:0,x:91.6,y:66.7},89).to({scaleX:1,scaleY:1,x:132.1,y:-162.4},12).to({_off:true},1).wait(284));

	// Слой 13
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("A3bJLIAA9/MAu2AAAIAAMXMgk1AdSg");
	this.shape_48.setTransform(150,133.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("A3aJLIAA9/MAu2AAAIAAMXMgk1AdSg");
	this.shape_49.setTransform(148.3,112.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("A3bJLIAA9/MAu3AAAIAAMXMgk2AdSg");
	this.shape_50.setTransform(143,50.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("A3aJLIAA9/MAu1AAAIAAMXMgk1AdSg");
	this.shape_51.setTransform(141.3,29.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEFEFE").s().p("A3bJLIAA9/MAu3AAAIAAMXMgk1AdSg");
	this.shape_52.setTransform(139.5,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_48}]},99).to({state:[{t:this.shape_49,p:{x:148.3,y:112.6}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{x:144.8,y:71.1}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51,p:{x:141.3,y:29.6}}]},1).to({state:[{t:this.shape_52,p:{x:139.5,y:8.8}}]},1).to({state:[{t:this.shape_51,p:{x:137.8,y:-11.9}}]},1).to({state:[{t:this.shape_52,p:{x:136,y:-32.7}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{x:132.5,y:-74.2}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49,p:{x:129,y:-115.7}}]},1).to({state:[]},1).wait(284));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(99).to({_off:true},1).wait(1).to({_off:false,x:146.5,y:91.8},0).to({_off:true},1).wait(6).to({_off:false,x:134.3,y:-53.4},0).to({_off:true},1).wait(1).to({_off:false,x:130.8,y:-94.9},0).to({_off:true},1).wait(285));

	// Слой 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_99 = new cjs.Graphics().p("Egz9AVFMgAtgrMMBpUAAAMgu5AsPg");
	var mask_graphics_100 = new cjs.Graphics().p("EgzBAUtMgAsgqaMBnbAAAMguEArcg");
	var mask_graphics_101 = new cjs.Graphics().p("EgyEAUVMgArgpoMBlfAAAMgtMAqog");
	var mask_graphics_102 = new cjs.Graphics().p("EgxIAT8MgAqgo2MBjlAAAMgsWAp1g");
	var mask_graphics_103 = new cjs.Graphics().p("EgwMATkMgApgoEMBhrAAAMgrfApBg");
	var mask_graphics_104 = new cjs.Graphics().p("EgvPATLMgApgnSMBfxAAAMgqpAoOg");
	var mask_graphics_105 = new cjs.Graphics().p("EguTASzMgAogmgMBd3AAAMgpzAnbg");
	var mask_graphics_106 = new cjs.Graphics().p("EgtXASaMgAngltMBb8AAAMgo8Amng");
	var mask_graphics_107 = new cjs.Graphics().p("EgsaASCMgAmgk8MBaBAAAMgoFAl0g");
	var mask_graphics_108 = new cjs.Graphics().p("EgreARpMgAlgkJMBYHAAAMgnPAlBg");
	var mask_graphics_109 = new cjs.Graphics().p("EgqiARQMgAkgjWMBWNAAAMgmZAkNg");
	var mask_graphics_110 = new cjs.Graphics().p("EgplAQ4MgAkgikMBUTAAAMgljAjag");
	var mask_graphics_111 = new cjs.Graphics().p("EgopAQfMgAjghxMBSYAAAMgkrAimg");
	var mask_graphics_112 = new cjs.Graphics().p("EgnsAQHMgAjghAMBQeAAAMgj1Ahzg");
	var mask_graphics_235 = new cjs.Graphics().p("A+JMPIga5EMA9HAAAI7OZrg");
	var mask_graphics_236 = new cjs.Graphics().p("A9pMCIga4pMA8HAAAI6xZPg");
	var mask_graphics_237 = new cjs.Graphics().p("A9KL1IgZ4PMA7HAAAI6VY1g");
	var mask_graphics_238 = new cjs.Graphics().p("A8qLoIgZ30MA6HAAAI54YZg");
	var mask_graphics_239 = new cjs.Graphics().p("A8LLcIgY3bMA5HAAAI5cX/g");
	var mask_graphics_240 = new cjs.Graphics().p("A7rLPIgY3AMA4HAAAI4/Xjg");
	var mask_graphics_241 = new cjs.Graphics().p("A7MLDIgX2nMA3HAAAI4jXJg");
	var mask_graphics_242 = new cjs.Graphics().p("A6sK2IgX2MMA2HAAAI4GWtg");
	var mask_graphics_243 = new cjs.Graphics().p("A6NKpIgW1yMA1HAAAI3qWTg");
	var mask_graphics_244 = new cjs.Graphics().p("A5tKcIgX1YMA0IAAAI3NV5g");
	var mask_graphics_245 = new cjs.Graphics().p("A5OKQIgW0+MAzIAAAI2xVdg");
	var mask_graphics_246 = new cjs.Graphics().p("A4vKDIgV0kMAyJAAAI2VVDg");
	var mask_graphics_247 = new cjs.Graphics().p("A4PJ2IgV0KMAxJAAAI15Uog");
	var mask_graphics_248 = new cjs.Graphics().p("A3vJpIgVzvMAwJAAAI1cUNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_graphics_99,x:-87.8,y:309.4}).wait(1).to({graphics:mask_graphics_100,x:-88.6,y:292.7}).wait(1).to({graphics:mask_graphics_101,x:-89.5,y:276.1}).wait(1).to({graphics:mask_graphics_102,x:-90.3,y:259.4}).wait(1).to({graphics:mask_graphics_103,x:-91.1,y:242.7}).wait(1).to({graphics:mask_graphics_104,x:-91.9,y:226.1}).wait(1).to({graphics:mask_graphics_105,x:-92.7,y:209.4}).wait(1).to({graphics:mask_graphics_106,x:-93.5,y:192.8}).wait(1).to({graphics:mask_graphics_107,x:-94.3,y:176.1}).wait(1).to({graphics:mask_graphics_108,x:-95.1,y:159.5}).wait(1).to({graphics:mask_graphics_109,x:-95.9,y:142.8}).wait(1).to({graphics:mask_graphics_110,x:-96.7,y:126.2}).wait(1).to({graphics:mask_graphics_111,x:-97.5,y:109.5}).wait(1).to({graphics:mask_graphics_112,x:-98.3,y:92.9}).wait(123).to({graphics:mask_graphics_235,x:-86.4,y:118.9}).wait(1).to({graphics:mask_graphics_236,x:-68.2,y:117.9}).wait(1).to({graphics:mask_graphics_237,x:-50,y:116.9}).wait(1).to({graphics:mask_graphics_238,x:-31.8,y:116}).wait(1).to({graphics:mask_graphics_239,x:-13.6,y:115}).wait(1).to({graphics:mask_graphics_240,x:4.5,y:114}).wait(1).to({graphics:mask_graphics_241,x:22.7,y:113.1}).wait(1).to({graphics:mask_graphics_242,x:40.9,y:112.1}).wait(1).to({graphics:mask_graphics_243,x:59.1,y:111.1}).wait(1).to({graphics:mask_graphics_244,x:77.3,y:110.2}).wait(1).to({graphics:mask_graphics_245,x:95.5,y:109.2}).wait(1).to({graphics:mask_graphics_246,x:113.7,y:108.2}).wait(1).to({graphics:mask_graphics_247,x:131.9,y:107.3}).wait(1).to({graphics:mask_graphics_248,x:150.1,y:106.3}).wait(148));

	// pic2
	this.instance_8 = new lib.pic2_1();
	this.instance_8.setTransform(-173.4,312.5,1.089,1.089,0,0,0,-0.1,0.1);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({y:272.5},0).to({regY:0.2,scaleX:1.04,scaleY:1.04,x:-165.9,y:97.2},13).wait(123).to({regX:0,regY:0.1,scaleX:0.88,scaleY:0.88,x:129,y:115.6},13).wait(148));

	// Слой 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_99 = new cjs.Graphics().p("EgNqAmUItCtDIAA1kMA1PgqFMAALBMxg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgNqAk4ItDtDIAA17MA1Qgm1MAAKBJ3g");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgNqAjbItDtDIAA2RMA1QgjmMAAKBG/g");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgNqAh/ItDtDIAA2nMA1QggYMAAKBEHg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgNqAgiItDtCIAA2+MA1QgdIMAAKBBOg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AtqfGItDtDIAA3VMA1QgZ4MAAKA+Vg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AtqdqItCtDIAA3sMA1PgWpMAALA7dg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AtqcOItDtDIAA4DMA1QgTaMAAKA4lg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AtqaxItCtCIAA4bMA1PgQJMAALA1sg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AtqZVItCtCIAA4yMA1PgM6MAALAyzg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AtqX5ItDtDIAA5JMA1QgJqMAAKAv7g");
	var mask_1_graphics_110 = new cjs.Graphics().p("AtqWcItCtCIAA5gMA1PgGaMAALAtCg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AtqVAItCtCIAA53MA1PgDLMAALAqJg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AtqTmItDtCIAA6OMA1QAAFMAAKAnQg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AtqTmItDtCIAA6OMA1QAAFMAAKAnQg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AtLS8ItDtCIAA46MA0SAAFMAALAl8g");
	var mask_1_graphics_237 = new cjs.Graphics().p("AstSSItCtDIAA3lMAzVAAGMAAKAkmg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AsNRnItDtCIAA2RMAyWAAGMAALAjTg");
	var mask_1_graphics_239 = new cjs.Graphics().p("ArvQ9ItCtCIAA08MAxZAAFMAALAh+g");
	var mask_1_graphics_240 = new cjs.Graphics().p("ArQQTItDtDIAAznMAwcAAFMAALAgqg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AqxPoItDtCIAAySMAvfAAFIAKfUg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AqTO+ItCtCIAAw+MAuhAAFIAKeAg");
	var mask_1_graphics_243 = new cjs.Graphics().p("Ap0OUItCtDIAAvpMAtjAAFIAKcsg");
	var mask_1_graphics_244 = new cjs.Graphics().p("ApVNpItCtCIAAuVMAslAAGIAKbXg");
	var mask_1_graphics_245 = new cjs.Graphics().p("Ao3M/ItCtBIAAtBMArpAAFIAKaCg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AoYMVItCtBIAArtMAqrAAFIAKYug");
	var mask_1_graphics_247 = new cjs.Graphics().p("An5LrItCtBIAAqZMAptAAGIAKXYg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AnaLAItDtAIAApEMAowAAFIAKWEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_1_graphics_99,x:230,y:170.3}).wait(1).to({graphics:mask_1_graphics_100,x:228.5,y:159.9}).wait(1).to({graphics:mask_1_graphics_101,x:226.9,y:149.5}).wait(1).to({graphics:mask_1_graphics_102,x:225.4,y:139.1}).wait(1).to({graphics:mask_1_graphics_103,x:223.9,y:128.8}).wait(1).to({graphics:mask_1_graphics_104,x:222.3,y:118.4}).wait(1).to({graphics:mask_1_graphics_105,x:220.8,y:108}).wait(1).to({graphics:mask_1_graphics_106,x:219.3,y:97.6}).wait(1).to({graphics:mask_1_graphics_107,x:217.7,y:87.2}).wait(1).to({graphics:mask_1_graphics_108,x:216.2,y:76.8}).wait(1).to({graphics:mask_1_graphics_109,x:214.6,y:66.4}).wait(1).to({graphics:mask_1_graphics_110,x:213.1,y:56.1}).wait(1).to({graphics:mask_1_graphics_111,x:211.6,y:45.7}).wait(1).to({graphics:mask_1_graphics_112,x:210,y:35}).wait(123).to({graphics:mask_1_graphics_235,x:210,y:35}).wait(1).to({graphics:mask_1_graphics_236,x:225.6,y:37.4}).wait(1).to({graphics:mask_1_graphics_237,x:241.3,y:39.7}).wait(1).to({graphics:mask_1_graphics_238,x:256.9,y:42}).wait(1).to({graphics:mask_1_graphics_239,x:272.5,y:44.3}).wait(1).to({graphics:mask_1_graphics_240,x:288.1,y:46.6}).wait(1).to({graphics:mask_1_graphics_241,x:303.7,y:48.9}).wait(1).to({graphics:mask_1_graphics_242,x:319.3,y:51.2}).wait(1).to({graphics:mask_1_graphics_243,x:334.9,y:53.5}).wait(1).to({graphics:mask_1_graphics_244,x:350.6,y:55.8}).wait(1).to({graphics:mask_1_graphics_245,x:366.2,y:58.1}).wait(1).to({graphics:mask_1_graphics_246,x:381.8,y:60.4}).wait(1).to({graphics:mask_1_graphics_247,x:397.4,y:62.7}).wait(1).to({graphics:mask_1_graphics_248,x:413,y:65}).wait(1).to({graphics:null,x:0,y:0}).wait(147));

	// pic1
	this.instance_9 = new lib.pic1();
	this.instance_9.setTransform(199.4,147.3,0.799,0.799);

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({regX:0.1,regY:0.2,scaleX:0.97,scaleY:0.97,x:132.8,y:85},8).to({regY:0,scaleX:0.65,scaleY:0.65,x:144.4,y:61.3},5).wait(136).to({_off:true},1).wait(147));

	// Слой 17
	this.instance_10 = new lib.bird();
	this.instance_10.setTransform(-37.1,118.6);
	this.instance_10._off = true;
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(112).to({_off:false},0).to({regX:0.1,scaleX:0.93,scaleY:0.93,rotation:15,x:47.3,y:152.7},11).to({regX:0,scaleX:1.24,scaleY:1.24,rotation:0,x:55.1,y:172.6},103).to({scaleX:1,scaleY:1,x:126.1,y:29.6},9).to({_off:true},1).wait(12).to({_off:false,skewY:180,x:336.6,y:134.8},0).to({regX:-0.1,regY:0.1,scaleX:0.7,scaleY:0.7,x:271.1,y:128.8},11).to({scaleX:0.97,scaleY:0.97,x:248.2,y:154.8},120).to({skewX:51.2,skewY:231.2,x:369.2,y:106.9},10).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.6,-108.8,796.8,692.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;