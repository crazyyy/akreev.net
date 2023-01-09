(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_Debtmend_atlas_.png?1500278136461", id:"300x600_Debtmend_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"300x600_Debtmend_atlas_", frames: [[0,0,500,345],[0,347,412,189]]}
];


// symbols:



(lib.pic = function() {
	this.spriteSheet = ss["300x600_Debtmend_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["300x600_Debtmend_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.well = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AAB3").s().p("AgMA9IAAgcIAZAAIAAAcgAgMANIAAhJIAZAAIAABJg");
	this.shape.setTransform(82.6,26.6,1.088,1.088);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAB3").s().p("AgYA4QgMgGgGgIQgIgHgFgNQgEgKAAgMQAAgLAFgLQAFgMAHgIQAIgIALgFQALgFAMAAQANAAALAFQAMAGAIAIQAGAIAFAMQAFALAAAKQAAAMgFALQgFALgHAIQgJAKgLAEQgMAFgLAAQgMAAgMgFgAgNggQgHAEgDAEQgEAFgCAHQgCAGAAAGQAAAHACAGQADAHADAFQAEAEAGAEQAGADAHAAQAGAAAHgDQAGgDAEgGQAEgFACgGQACgGAAgHQAAgHgCgGQgDgGgDgFQgEgFgGgDQgGgDgHAAQgHAAgGADg");
	this.shape_1.setTransform(72.4,26.7,1.088,1.088);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAB3").s().p("AgMA9IAAhfIgmAAIAAgZIBlAAIAAAZIglAAIAABfg");
	this.shape_2.setTransform(59.5,26.6,1.088,1.088);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAB3").s().p("AgqA9IAAh4IBSAAIAAAZIg1AAIAAAXIAuAAIAAAVIguAAIAAAaIA4AAIAAAZg");
	this.shape_3.setTransform(44.1,26.6,1.088,1.088);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAB3").s().p("AgKA9Igvh4IAeAAIAbBUIAchUIAeAAIguB4g");
	this.shape_4.setTransform(31.9,26.6,1.088,1.088);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAB3").s().p("AAcA9IgKgcIgkAAIgJAcIgcAAIAsh4IAYAAIArB4gAgNANIAbAAIgOgog");
	this.shape_5.setTransform(19.4,26.6,1.088,1.088);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAB3").s().p("AAXA9IAAgzIguAAIAAAzIgbAAIAAh4IAbAAIAAAvIAuAAIAAgvIAcAAIAAB4g");
	this.shape_6.setTransform(6.2,26.6,1.088,1.088);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAB3").s().p("AgMA9IAAhfIgmAAIAAgZIBlAAIAAAZIglAAIAABfg");
	this.shape_7.setTransform(-10.8,26.6,1.088,1.088);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAB3").s().p("AgKATIAAglIAVAAIAAAlg");
	this.shape_8.setTransform(-19,21.9,1.088,1.088);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAB3").s().p("AAeA9Ig2hEIAABEIgcAAIAAh4IAWAAIA2BFIAAhFIAdAAIAAB4g");
	this.shape_9.setTransform(-28.4,26.6,1.088,1.088);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAB3").s().p("AgXA4QgMgGgHgIQgHgHgGgNQgEgLAAgLQAAgLAEgLQAHgNAGgHQAIgIAMgFQAKgFAMAAQANAAALAFQAMAGAIAIQAHAIAFAMQAEAKAAALQAAAMgEALQgFALgIAIQgKAKgJAEQgMAFgMAAQgLAAgMgFgAgMggQgIAFgCADQgEAFgCAHQgCAGAAAGQAAAHACAGQABAFAFAHQADAEAHAEQAGADAGAAQAHAAAHgDQAGgEADgFQAFgFACgGQACgGAAgHQAAgHgCgGQgDgGgEgFQgEgFgFgDQgHgDgHAAQgGAAgGADg");
	this.shape_10.setTransform(-42.6,26.7,1.088,1.088);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAB3").s().p("AgzA9IAAh4IAtAAQAMgBANAGQAKADAIAKQAIAHADAMQAEAJABANQgBANgEAMQgEALgIAIQgIAHgLAFQgLAFgMAAgAgXAkIARAAQAGgBAFgCQAHgDADgEQAEgFADgHQACgJAAgFQAAgFgCgJQgDgGgEgEQgDgFgHgDQgEgDgHABIgRAAg");
	this.shape_11.setTransform(-55.9,26.6,1.088,1.088);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAB3").s().p("AgXA4QgLgFgGgJQgHgHgCgLQgEgMAAgMIAAg8IAdAAIAAA8QAAAHABAHQAAAFAEAGQADAFAFADQAGADAFAAQAGAAAGgDQAEgDAEgFQACgGACgFIABgOIAAg8IAcAAIAAA8QAAALgDANQgDAJgHAKQgHAJgKAEQgKAFgNAAQgMAAgLgFg");
	this.shape_12.setTransform(-74.3,26.7,1.088,1.088);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AAB3").s().p("AgXA4QgMgGgHgIQgHgHgGgNQgEgLAAgLQAAgMAFgKQAFgMAIgIQAHgIAMgFQAKgFAMAAQANAAALAFQAMAGAIAIQAHAIAFAMQAEAKAAALQAAAMgEALQgFALgIAIQgKAKgJAEQgMAFgMAAQgLAAgMgFgAgMggQgHAEgDAEQgEAFgCAHQgCAGAAAGQAAAHACAGQACAHAEAFQAEAEAGAEQAGADAGAAQAHAAAHgDQAFgDAEgGQAFgFACgGQABgGAAgHQAAgHgBgGQgDgGgEgFQgEgFgGgDQgFgDgIAAQgGAAgGADg");
	this.shape_13.setTransform(-88.3,26.7,1.088,1.088);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AAB3").s().p("AgNA9IAAgqIgrhOIAfAAIAZA3IAZg3IAgAAIgsBOIAAAqg");
	this.shape_14.setTransform(-101.6,26.6,1.088,1.088);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AgWA4QgKgFgIgJQgGgGgGgOQgEgMAAgKQAAgKAFgMQAFgMAHgHQAIgKAKgEQAKgFALAAQANAAAKAFQAMAHAGAHQAIAJAEALQAEAKAAALQAAALgEAMQgFAMgHAIQgJAIgKAFQgKAFgMAAQgMAAgKgFgAgQgqQgHAEgGAHQgFAFgDAKQgDAIAAAIQAAAIADAKQADAIAFAGQAFAHAJAFQAIADAHAAQAJAAAIgEQAIgEAFgHQAGgIACgHQADgJAAgIQAAgIgDgIQgDgJgFgHQgFgGgIgEQgIgEgJAAQgJAAgHAEg");
	this.shape_15.setTransform(-119.1,26.6,1.088,1.088);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AgWA5QgOgFgJgIIAHgNIAHAGIAKAFIAMAEQAGABAGAAQAMAAAIgEQAHgEAAgKQAAgFgCgEQgCgDgFgDQgFgDgGgBIgNgEIgQgFQgIgBgEgDQgFgEgCgFQgDgGAAgGQAAgJAEgHQADgHAGgEQAFgFAIgCQAIgCAIAAQANAAAJADQAKAEAIAGIgHANIgGgFIgHgEIgKgDIgKgBQgMAAgHAGQgHAFAAAJQAAAGACACQABADAFADQAFADAFABIAMAEIARAEQAJACAEADQAFADAEAGQACAHAAAHQAAAJgDAHQgDAGgGAEQgGAEgIACQgIACgKAAQgMAAgMgEg");
	this.shape_16.setTransform(-131.8,26.7,1.088,1.088);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#727477").s().p("AgEAQIADgPIgEAAIAAgQIALAAIAAAQIgFAPg");
	this.shape_17.setTransform(25.4,12.4,1.088,1.088);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#727477").s().p("AgWA5QgMgEgLgJIAHgNQADADAEADIAKAFQAHADAFABQAGABAGAAQAMAAAIgEQAHgEAAgKQAAgFgCgEQgCgDgFgDIgLgEIgNgEQgLgDgFgCQgIgBgEgDQgFgEgCgFQgDgFAAgHQAAgJAEgHQADgHAGgEQAFgFAIgCQAIgCAIAAQANAAAJADQAKAEAIAHIgHAMIgGgFIgHgEIgKgDIgKgBQgMAAgHAGQgHAFAAAJQAAAGACACQABADAFADIAKAEIAMAEIARAEQAJACAEADQAGAFADAFQACAGAAAHQAAAJgDAHQgDAGgGAEQgIAFgGABQgIACgKAAQgMAAgMgEg");
	this.shape_18.setTransform(17.7,6.1,1.088,1.088);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#727477").s().p("AAcA9IgcgsIgdAAIAAAsIgQAAIAAh5IAyAAQAHABAIADQAFADAHAGQAFAGACAHQADAGAAAHIgCANQgBAFgEAEQgDAEgFAEIgKAFIAdAvgAgdADIAiAAQAFAAAEgCIAGgEIAFgIQABgEAAgGQAAgFgBgEIgGgIQgDgEgEgBQgDgCgFAAIghAAg");
	this.shape_19.setTransform(6.5,6.1,1.088,1.088);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#727477").s().p("AgWA4QgLgFgHgJQgIgJgEgLQgEgJAAgNQAAgMAEgKQAFgLAHgJQAJgIAKgFQAKgFALAAQANAAAKAGQALAFAHAIQAHAIAFAMQAEAMAAAJQAAAMgFALQgEAMgIAIQgHAIgLAFQgKAFgMAAQgMAAgKgFgAgQgqQgJAFgEAGQgGAIgCAHQgDAJAAAHQAAAIADAKQADAKAFAFQAGAHAHAEQAIADAIAAQAJAAAIgEQAGgDAHgIQAFgGADgJQADgJAAgIQAAgIgDgIQgDgIgFgIQgGgGgIgEQgGgEgKAAQgHAAgJAEg");
	this.shape_20.setTransform(-7.2,6.1,1.088,1.088);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#727477").s().p("AgGA9IAAhqIgqAAIAAgPIBhAAIAAAPIgqAAIAABqg");
	this.shape_21.setTransform(-19.9,6.1,1.088,1.088);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#727477").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_22.setTransform(-28,6.1,1.088,1.088);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727477").s().p("AgxA9IAAh5IAqAAQALAAANAGQAKADAJAJQAGAJAEALQAEAKAAAMQAAANgEAMQgFAMgHAHQgIAHgKAFQgLAFgMAAgAghAuIAaAAQAKAAAHgDQAJgEAFgGQAFgHACgIQAEgIAAgKQAAgJgEgIQgCgIgFgHQgGgGgIgEQgIgDgJAAIgaAAg");
	this.shape_23.setTransform(-36.7,6.1,1.088,1.088);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#727477").s().p("AgoA9IAAh5IBPAAIAAAPIg/AAIAAAnIA3AAIAAAKIg3AAIAAAqIBBAAIAAAPg");
	this.shape_24.setTransform(-49,6.1,1.088,1.088);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#727477").s().p("AAdA9IgcgsIgfAAIAAAsIgPAAIAAh5IAyAAQAHABAIADQAGADAGAGQAEAEAEAJQACAHAAAGIgCANQAAAFgFAEQgCAEgGAEQgGAEgFABIAeAvgAgeADIAjAAQAFAAAEgCIAHgEIAEgIQABgEAAgGQAAgFgBgEIgFgIQgDgEgEgBQgEgCgEAAIgjAAg");
	this.shape_25.setTransform(-60.7,6.1,1.088,1.088);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#727477").s().p("AgRA4QgKgFgIgKQgIgJgEgLQgEgMAAgJQAAgKAEgLQAEgMAHgIQAHgJALgFQALgFAMAAQAQAAAMAHQAMAIAFALIgMAIQgDgFgEgFQgDgDgFgDIgKgDIgJgBQgIAAgIAEQgHAEgGAHQgGAHgCAIQgDAJAAAHQAAAKAEAHQACAIAGAIQAGAHAIADQAIAEAHAAIAJgBIAKgEIAJgGQAFgGABgEIANAHQgDAHgFAFQgFAFgHAEQgHAEgHABQgGACgIAAQgKAAgLgFg");
	this.shape_26.setTransform(-73.5,6.1,1.088,1.088);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#727477").s().p("AAdA9IgcgsIgfAAIAAAsIgPAAIAAh5IAyAAQAHABAIADQAHAEAEAFQAGAFACAIQADAGAAAHQAAAIgCAFQgBAFgEAEQgDAEgFAEIgLAFIAeAvgAgeADIAjAAQAGAAADgCIAGgEQADgDABgFQADgEAAgGIgDgJQgBgFgDgDQgEgEgEgBQgDgCgFAAIgiAAg");
	this.shape_27.setTransform(-90.3,6.1,1.088,1.088);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#727477").s().p("AgZA9QgKgFgIgKQgHgJgCgMQgDgLAAgOIAAhBIARAAIAABBIACATQABAJAFAIQAGAHAGAEQAJAFAJAAQALgBAHgEQAIgEAFgIQAEgHACgJQACgJAAgKIAAhBIARAAIAABBQAAAOgDAMQgDAMgHAJQgHAIgLAHQgKAEgPAAQgPAAgKgFg");
	this.shape_28.setTransform(-104,6.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#727477").s().p("AgWA4QgLgFgHgJQgHgIgFgMQgEgLAAgLQAAgLAFgLQADgLAJgJQAHgIALgFQAKgFALAAQAOAAAJAGQALAFAHAIQAGAHAGANQAEAMAAAJQAAAMgFALQgDAMgJAIQgHAIgLAFQgKAFgMAAQgMAAgKgFgAgQgqQgHAEgGAHQgFAGgDAJQgDAJAAAHQAAAIADAKQADAIAFAHQAGAHAHAEQAJADAHAAQAJAAAIgEQAIgEAFgHQAGgIACgHQADgJAAgIQAAgIgDgIQgDgIgFgIQgHgHgHgDQgGgEgKAAQgIAAgIAEg");
	this.shape_29.setTransform(-118,6.1,1.088,1.088);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#727477").s().p("AgGA9IAAgtIgvhMIASAAIAjA+IAkg+IARAAIguBMIAAAtg");
	this.shape_30.setTransform(-131.1,6.1,1.088,1.088);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#727477").s().p("AgoA8IAAh3IBPAAIAAANIg/AAIAAAoIA3AAIAAAKIg3AAIAAAqIBBAAIAAAOg");
	this.shape_31.setTransform(-4,-14.5,1.088,1.088);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_32.setTransform(-14.9,-14.5,1.088,1.088);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#727477").s().p("AgxA8IAAh3IAqAAQANAAALAEQANAGAFAHQAIAJADALQAEAMAAAKQAAAMgEAMQgEAMgIAHQgHAIgLAFQgMAEgLAAgAghAuIAaAAQAKAAAHgDQAJgEAEgGQAGgGACgJQAEgIAAgKQAAgJgEgJQgDgIgFgHQgFgFgIgEQgIgEgJAAIgaAAg");
	this.shape_33.setTransform(-27.3,-14.5,1.088,1.088);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#727477").s().p("AAmA8IhJhbIAABbIgPAAIAAh3IAMAAIBJBcIAAhcIAQAAIAAB3g");
	this.shape_34.setTransform(-41.6,-14.5,1.088,1.088);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#727477").s().p("AAoA8IgPgjIgxAAIgOAjIgRAAIAyh3IALAAIAyB3gAgVANIArAAIgWg3g");
	this.shape_35.setTransform(-55,-14.5,1.088,1.088);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#727477").s().p("AAhA8IAAg3IhBAAIAAA3IgQAAIAAh3IAQAAIAAA0IBBAAIAAg0IAQAAIAAB3g");
	this.shape_36.setTransform(-68.3,-14.5,1.088,1.088);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_37.setTransform(-84.6,-14.5,1.088,1.088);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#727477").s().p("AgoA8IAAh3IAPAAIAABpIBCAAIAAAOg");
	this.shape_38.setTransform(-95.5,-14.5,1.088,1.088);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#727477").s().p("AgFASIAAgjIALAAIAAAjg");
	this.shape_39.setTransform(-103.6,-19.2,1.088,1.088);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#727477").s().p("AgoA8IAAh3IBPAAIAAANIg/AAIAAAoIA2AAIAAAKIg2AAIAAAqIBBAAIAAAOg");
	this.shape_40.setTransform(-110.7,-14.5,1.088,1.088);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#727477").s().p("AAYA8IgYg5IgXA5IgNAAIgzh3IARAAIApBlIAVgwIgWg1IAPAAIAPArIAQgrIAOAAIgVA1IAVAwIAphlIARAAIgzB3g");
	this.shape_41.setTransform(-126.6,-14.5,1.088,1.088);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.9,-21.2,221,54.6);


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
	this.shape.setTransform(144,340.9,1.122,1.122);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727477").s().p("AgbBEQgOgGgIgLQgKgLgEgMQgGgPAAgNQAAgNAGgOQAFgNAKgLQAIgKAOgHQANgGANAAQAQAAANAHQAOAHAIAKQAJALAEANQAGAOAAAMQAAAOgGAPQgFAOgJAJQgJALgNAGQgNAGgPAAQgOAAgNgHgAgUg0QgJAFgHAIQgGAIgEALQgDAKAAAKQAAALADALQAEAKAHAIQAHAIAJAFQAKAFAJAAQAMAAAJgFQAJgFAHgIQAHgJADgKQAEgLAAgKQAAgKgEgKQgDgLgHgIQgHgJgJgEQgLgFgKAAQgJAAgLAFg");
	this.shape_1.setTransform(126.3,340.8,1.122,1.122);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#727477").s().p("AgIBKIAAg2Ig5hdIAVAAIAsBMIAthMIAVAAIg5BdIAAA2g");
	this.shape_2.setTransform(109.8,340.8,1.122,1.122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#727477").s().p("AgIBKIAAiCIgzAAIAAgRIB3AAIAAARIgzAAIAACCg");
	this.shape_3.setTransform(88.9,340.8,1.122,1.122);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#727477").s().p("AgcBGQgPgFgNgLIAJgQQADAEAFADIANAHIAOAFIAPABQAQAAAJgFQAJgGAAgLQgBgHgCgEQgDgEgFgDIgOgGIgkgLQgJgBgGgEQgFgFgEgGQgDgGABgJQAAgKADgJQAFgJAHgFQAHgGAJgCQALgDAJAAQAQAAAMAEQALAFAKAIIgJAPIgGgGIgKgFIgMgDQgGgCgGAAQgPAAgJAHQgIAHAAALQAAAGACAEQACADAFAEIANAFIAlAKIAQAGQAGAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgHAFgKADQgLACgLAAQgPAAgPgFg");
	this.shape_4.setTransform(74.4,340.9,1.122,1.122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#727477").s().p("AgIBKIAAiTIARAAIAACTg");
	this.shape_5.setTransform(64.2,340.8,1.122,1.122);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727477").s().p("AgcBGQgQgFgMgLIAJgQQADAEAFADQAGAEAHADIAPAFIAOABQAPAAAKgFQAIgGAAgLQAAgHgCgEQgDgEgFgDIgOgGIglgLQgIgBgGgEQgGgFgDgGQgDgGAAgJQAAgKAFgJQADgIAIgGQAHgGAKgCQAKgDAJAAQAPAAAMAEQAMAFAKAIIgJAPQgDgDgDgDIgKgFIgLgDQgGgCgIAAQgOAAgJAHQgIAHAAALQAAAGADAEQACADAEAEIANAFIAQAEIAUAGQAMACAEAEQAHAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgGAFgLADQgLACgLAAQgQAAgOgFg");
	this.shape_6.setTransform(53.9,340.9,1.122,1.122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#727477").s().p("AgcBGQgPgFgNgLIAJgQQADAEAFADIANAHIAOAFIAPABQAQAAAJgFQAJgGAAgLQgBgHgCgEQgDgEgFgDIgOgGIgkgLQgJgBgGgEQgGgFgDgGQgDgGAAgJQAAgKAEgJQAEgIAIgGQAHgGAKgCQAKgDAJAAQAPAAAMAEQAMAFAKAIIgJAPIgGgGIgKgFIgMgDQgGgCgGAAQgPAAgJAHQgIAHAAALQAAAGACAEQADADAEAEIANAFIAQAEIAVAGIAQAGQAGAFAEAHQADAIAAAJQAAALgEAHQgEAIgIAFQgHAFgKADQgLACgLAAQgPAAgPgFg");
	this.shape_7.setTransform(39.6,340.9,1.122,1.122);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#727477").s().p("AAwBKIgRgrIg9AAIgRArIgVAAIA+iTIAOAAIA8CTgAgaAPIA1AAIgbhCg");
	this.shape_8.setTransform(24.4,340.8,1.122,1.122);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#727477").s().p("AgyBKIAAiTIATAAIAACDIBSAAIAAAQg");
	this.shape_9.setTransform(4.5,340.8,1.122,1.122);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#727477").s().p("AgyBKIAAiTIATAAIAACDIBRAAIAAAQg");
	this.shape_10.setTransform(-9.3,340.8,1.122,1.122);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#727477").s().p("AgGAWIAAgrIAOAAIAAArg");
	this.shape_11.setTransform(-19.5,334.9,1.122,1.122);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#727477").s().p("AgxBKIAAiTIBhAAIAAARIhOAAIAAAwIBEAAIAAAOIhEAAIAAA0IBQAAIAAAQg");
	this.shape_12.setTransform(-28.6,340.8,1.122,1.122);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#727477").s().p("AAdBKIgdhGIgcBGIgRAAIg+iTIAUAAIAzB9IAag8IgahAIASAAIASA0IATg0IASAAIgaBAIAaA8IAyh9IAVAAIg/CTg");
	this.shape_13.setTransform(-48.6,340.8,1.122,1.122);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#727477").s().p("Ag9BKIAAiTIA0AAQARAAANAGQAOAGAIAKQAKAKAEANQAFAOgBAOQAAARgEANQgGANgJAKQgKALgNAEQgMAGgQAAgAgpA6IAgAAQAMgBAJgEQALgEAGgJQAHgIADgJQAEgNgBgKQABgJgEgNQgEgKgGgIQgHgIgKgEQgJgEgMAAIggAAg");
	this.shape_14.setTransform(-74.9,340.8,1.122,1.122);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#727477").s().p("AAuBKIhZhwIAABwIgTAAIAAiTIAPAAIBbByIAAhyIASAAIAACTg");
	this.shape_15.setTransform(-92.9,340.8,1.122,1.122);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727477").s().p("AAxBKIgSgrIg9AAIgRArIgUAAIA8iTIAOAAIA+CTgAgaAPIA0AAIgahCg");
	this.shape_16.setTransform(-109.9,340.8,1.122,1.122);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAB3").s().p("AgUBcIAAhAIhBh3IAuAAIAnBVIAnhVIAvAAIhCB4IAAA/g");
	this.shape_17.setTransform(99.7,314.2,1.122,1.122);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAB3").s().p("AArBcIgPgqIg3AAIgPAqIgrAAIBEi3IAjAAIBEC3gAgUAVIApAAIgVg/g");
	this.shape_18.setTransform(80.2,314.2,1.122,1.122);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAB3").s().p("AhPBcIAAi3IBEAAQAWAAARAIQARAHAMAMQALAMAGASQAGAQAAASQAAATgGASQgHASgMALQgMAMgSAHQgQAHgUAAgAglA2IAaAAQALAAAJgEQAJgEAGgHQAGgIADgKQAEgJAAgMQAAgMgEgJQgDgKgHgHQgFgHgJgEQgJgEgLAAIgaAAg");
	this.shape_19.setTransform(60.6,314.2,1.122,1.122);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAB3").s().p("AgkBVQgSgJgLgMQgMgNgHgRQgGgRAAgRQAAgRAHgRQAGgRANgNQANgNAQgIQARgHASAAQAVAAARAIQARAIALANQANAOAGARQAGAQAAAQQAAATgHAQQgGAQgNAOQgLAMgSAIQgRAIgTAAQgUAAgQgIgAgUgxQgJAFgGAHQgGAIgDAKQgDALAAAIQAAAKADAKQADALAHAHQAGAJAJADQAJAFAKAAQAMAAAJgFQAIgEAHgIQAGgIADgKQADgKAAgKQAAgKgDgKQgDgKgHgIQgGgHgJgEQgJgFgLAAQgLAAgJAFg");
	this.shape_20.setTransform(38.4,314.2,1.122,1.122);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAB3").s().p("AgUBcIAAiRIg4AAIAAgmICZAAIAAAmIg4AAIAACRg");
	this.shape_21.setTransform(18.3,314.2,1.122,1.122);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00AAB3").s().p("AgOBcIgWgFIgTgGIgSgKIATgmIAHAGIAOAHIATAGQAMADAHAAQAWAAAAgOQAAgFgDgDQgDgEgGgCIgegLQgMgDgKgFQgJgEgHgFQgFgGgEgHQgDgIAAgKQABgQAFgKQAGgLAIgIQALgIAMgDQAKgFAOAAIATACIASAFIAdANIgTAkIgFgEIgbgLQgIgDgJAAQgVAAAAAQQABAFACADQACADAFACQAEADAHABIAQAGQAPADAJAEQALAFAHAEQAIAGADAJQAEAKABAMQgBAQgGALQgEAJgLAIQgJAGgNAEQgMACgOABg");
	this.shape_22.setTransform(-6.7,314.2,1.122,1.122);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAB3").s().p("AgkBVQgQgHgJgNQgLgOgEgQQgFgQABgSIAAhcIArAAIAABcQAAALACAJQABAJAFAIQAEAHAIAGQAIADAJAAQALABAHgFQAHgFAFgHQAEgHADgLQACgLAAgIIAAhcIArAAIAABcQAAAUgGAPQgEAQgKAOQgKAMgPAIQgPAGgWAAQgVABgPgIg");
	this.shape_23.setTransform(-26.5,314.2,1.122,1.122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00AAB3").s().p("AhBBcIAAi3IArAAIAACRIBXAAIAAAmg");
	this.shape_24.setTransform(-51.8,314.2,1.122,1.122);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AAB3").s().p("AhABcIAAi3IAqAAIAACRIBXAAIAAAmg");
	this.shape_25.setTransform(-68.9,314.2,1.122,1.122);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAB3").s().p("AArBcIgPgqIg3AAIgPAqIgrAAIBDi3IAkAAIBEC3gAgVAVIAqAAIgVg/g");
	this.shape_26.setTransform(-88.1,314.2,1.122,1.122);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAB3").s().p("AgdBVQgQgJgMgNQgMgNgHgSQgGgQgBgRQAAgQAHgQQAGgSAMgMQAMgNARgIQAQgIAVAAQAaAAATALQATALAKASIghAXQgFgJgDgDIgKgIIgNgEIgLgBQgLAAgIAFQgJAEgHAIQgGAKgDAIQgCALAAAIQAAAKADALQAEAKAGAIQAFAGAKAFQAKAFAIAAIANgBQAFgBAGgEIAKgIQAFgEADgHIAjAUQgEAKgJAIQgHAJgMAFQgLAGgLADQgOACgKAAQgSAAgRgIg");
	this.shape_27.setTransform(-107.7,314.2,1.122,1.122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.7,303.7,268.8,45.7);


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
(lib._300x600_Debtmend = function(mode,startPosition,loop) {
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
	this.shape_26.graphics.f("#00AAB3").s().p("EgXQAu8MgAUhd3MAvJAAKMgADBdtg");
	this.shape_26.setTransform(149,299.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAB3").s().p("EgXlgl7MAvLgFQMgADBRDMgu1AFUg");
	this.shape_27.setTransform(149.1,301.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AAB3").s().p("A3k83MAvJgKpMgADBEZMgu1AKpg");
	this.shape_28.setTransform(149.1,303);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AAB3").s().p("A3kzxMAvJgQFMgADA3wMgu3AP9g");
	this.shape_29.setTransform(149.2,304.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AAB3").s().p("A3kqtMAvIgVeMgACArHMgu4AVQg");
	this.shape_30.setTransform(149.2,306);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00AAB3").s().p("A3jhoMAvHga5IgCeeMgu6Aakg");
	this.shape_31.setTransform(149.3,307.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00AAB3").s().p("A3jHbMAvHggRIgDR2Mgu7Af3g");
	this.shape_32.setTransform(149.3,309);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AAB3").s().p("A3jQgMAvHglrIgCFMMgu9AlLg");
	this.shape_33.setTransform(149.4,310.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00AAB3").s().p("A2dP5MAs7gj6IgCFMMgr+Ai3g");
	this.shape_34.setTransform(156.3,303);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00AAB3").s().p("A1XPRMAqvgiHIgCFMMgo/Aghg");
	this.shape_35.setTransform(163.3,295.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00AAB3").s().p("A0ROqMAokggWIgDFMMgl/AeNg");
	this.shape_36.setTransform(170.3,288.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00AAB3").s().p("A4WL+IAAitIZ+AAIWv1SIgiEaI0+Tpg");
	this.shape_37.setTransform(124.1,401.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00AAB3").s().p("A4jMLIAAitIZ+AAIXJ1sIgiEbI1YUBg");
	this.shape_38.setTransform(125.3,400.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAB3").s().p("A5IMxIAAitIZ+AAIYT23IgiEZI2iVOg");
	this.shape_39.setTransform(129.1,396.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00AAB3").s().p("A6GNwIAAitIaAAAIaN42IgiEaI4eXNg");
	this.shape_40.setTransform(135.3,390.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00AAB3").s().p("A6DOYIgCkdIZ5AAIaS4VIgiGGI4gWvg");
	this.shape_41.setTransform(135.4,388.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00AAB3").s().p("A53QPIgLpuIZoACIad20IgeLPI4oVUg");
	this.shape_42.setTransform(135.8,384.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00AAB3").s().p("A5lTVIgYyeIZIAEIaz0SIgbTvI4zTAg");
	this.shape_43.setTransform(136.5,378);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00AAB3").s().p("A5LXpIgq+tIYcAJIbQwwIgVfrI5DPtg");
	this.shape_44.setTransform(137.5,368.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AAB3").s().p("A4qdNMgBCgudIXlANIb0sMMgAMAvCI5YLdg");
	this.shape_45.setTransform(138.7,356.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AAB3").s().p("EgYBAkAMgBghBuIWhASIcimmMgADBBzI5wGSg");
	this.shape_46.setTransform(140.3,341.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00AAB3").s().p("EgXWAsPMgCBhYgIVQAZIdXAAMAAJBYAI6PAKg");
	this.shape_47.setTransform(142.5,322.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_37}]},374).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).wait(1));

	// lines
	this.instance_3 = new lib.lines();
	this.instance_3.setTransform(16.5,393.7,1.446,1.446);

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
	this.instance_6.setTransform(179.7,215.4,1.192,1.192);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({x:147.3,y:240.6,alpha:1},9).wait(71).to({x:179.7,y:215.4,alpha:0},9).to({_off:true},1).wait(296));

	// Слой 2
	this.instance_7 = new lib.bird();
	this.instance_7.setTransform(367.2,57,1.401,1.401,0,15.7,-164.3,-0.2,0.3);
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(248).to({_off:false},0).to({regX:-0.3,scaleX:1.17,scaleY:1.17,skewX:8.2,skewY:-171.8,x:216.4,y:87},11).to({x:196.4,y:77},120).to({regX:-0.2,scaleX:1.4,scaleY:1.4,x:148.3,y:-103},10).to({_off:true},1).wait(6));

	// bird
	this.instance_8 = new lib.bird();
	this.instance_8.setTransform(-31,85,1.768,1.768,6.2,0,0,0.3,0.1);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:0,regY:0,scaleX:1.79,scaleY:1.79,rotation:0,x:120.7,y:91},10).to({x:140.7},89).to({regX:0.1,regY:0.1,scaleX:1.59,scaleY:1.59,x:91.8,y:93.1},12).to({regX:0,regY:0,scaleX:1.79,scaleY:1.79,x:96.7,y:83},124).to({x:244.7,y:-109},13).to({_off:true},1).wait(147));

	// Слой 13
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEFEFE").s().p("A1pbeIsOuOMAAAgrWMBDvAAAIAAR4Mgx8AnsIjVCpg");
	this.shape_48.setTransform(162.2,206.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEFEFE").s().p("EghdANHMAAAgq2MBC8AAAIAARpMg0pAp2g");
	this.shape_49.setTransform(158.2,200.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEFEFE").s().p("EghEAM9MAAAgqWMBCJAAAIAARdMg0AApWg");
	this.shape_50.setTransform(154.2,194.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEFEFE").s().p("EggrAMyMAAAgp0MBBWAAAIAARPMgzYAo2g");
	this.shape_51.setTransform(150.2,188.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEFEFE").s().p("EggRAMpMAAAgpUMBAjAAAIAARBMgywAoWg");
	this.shape_52.setTransform(146.2,182.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEFEFE").s().p("A/4MfMAAAgo0MA/xAAAIAAQ1MgyJAn2g");
	this.shape_53.setTransform(142.2,176.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEFEFE").s().p("A/eMUMAAAgoSMA+9AAAIAAQmMgxgAnXg");
	this.shape_54.setTransform(138.2,170.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEFEFE").s().p("A/FMLMAAAgnyMA+LAAAIAAQZMgw4Am2g");
	this.shape_55.setTransform(134.2,164);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEFEFE").s().p("A+rMBMAAAgnSMA9XAAAIAAQMMgwQAmXg");
	this.shape_56.setTransform(130.2,157.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEFEFE").s().p("A+SL3MAAAgmxMA8kAAAIAAP+MgvnAl3g");
	this.shape_57.setTransform(126.2,151.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEFEFE").s().p("A94LtMAAAgmQMA7xAAAIAAPwMgu/AlXg");
	this.shape_58.setTransform(122.1,145.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEFEFE").s().p("A9fLjMAAAglwMA6/AAAIAAPkMguYAk2g");
	this.shape_59.setTransform(118.1,139.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEFEFE").s().p("A0bVeIoqqFMAAAglPMA6LAAAIAAPWMgoNAf+IliEZg");
	this.shape_60.setTransform(114.1,133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).to({state:[{t:this.shape_48}]},99).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[]},1).wait(284));

	// Слой 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_99 = new cjs.Graphics().p("EgjOA0wMAAghqVIOZACMA3jBBMIABUfI2vVeg");
	var mask_graphics_100 = new cjs.Graphics().p("Egi4A0PMAAghpSIOQACMA2/BAiIABUTI2gVRg");
	var mask_graphics_101 = new cjs.Graphics().p("EgihAztMAAfhoPIOGADMA2dA/5IABUGI2SVDg");
	var mask_graphics_102 = new cjs.Graphics().p("EgiLAzMMAAfhnMIN9ADMA16A/QIABT5I2EU1g");
	var mask_graphics_103 = new cjs.Graphics().p("Egh1AyqMAAfhmIIN0ACMA1XA+nIABTsI12Uog");
	var mask_graphics_104 = new cjs.Graphics().p("EgheAyJMAAehlFINrACMA0zA9+IABTeI1nUbg");
	var mask_graphics_105 = new cjs.Graphics().p("EghIAxoMAAehkCINiACMA0QA9UIABTSI1ZUNg");
	var mask_graphics_106 = new cjs.Graphics().p("EggyAxHMAAdhi/INaACMAztA8rIABTFI1LT/g");
	var mask_graphics_107 = new cjs.Graphics().p("EggcAwlMAAdhh7INRACMAzKA8CIABS4I08Txg");
	var mask_graphics_108 = new cjs.Graphics().p("EggGAwEMAAdhg5INIADMAynA7YIABSsI0uTkg");
	var mask_graphics_109 = new cjs.Graphics().p("EgfvAviMAAchf1IM+ACMAyEA6wIABSeI0fTXg");
	var mask_graphics_110 = new cjs.Graphics().p("EgfZAvBMAAcheyIM2ACMAxgA6HIABSRI0RTJg");
	var mask_graphics_111 = new cjs.Graphics().p("EgfDAugMAAchdvIMsACMAw+A5dIABSEI0DS8g");
	var mask_graphics_112 = new cjs.Graphics().p("EgesAt/MAAbhcsIMjACMAwbA40IABR3Iz1Sug");
	var mask_graphics_235 = new cjs.Graphics().p("EgesAt/MAAbhcsIMjACMAwbA40IABR3Iz1Sug");
	var mask_graphics_236 = new cjs.Graphics().p("EgeKAtLMAAbhbEIMVACMAvkA31IABRjIzfSZg");
	var mask_graphics_237 = new cjs.Graphics().p("EgdoAsYMAAbhZdIMHACMAuuA21IABRQIzISEg");
	var mask_graphics_238 = new cjs.Graphics().p("EgdFArkMAAahX0IL5ABMAt3A12IABQ7IyyRvg");
	var mask_graphics_239 = new cjs.Graphics().p("EgcjAqwMAAahWMILqACMAtCA01IABQnIycRbg");
	var mask_graphics_240 = new cjs.Graphics().p("EgcAAp9MAAZhUlILcACMAsMAz2IABQTIyGRGg");
	var mask_graphics_241 = new cjs.Graphics().p("EgbeApJMAAZhS9ILOACMArWAy2IAAQAIxvQxg");
	var mask_graphics_242 = new cjs.Graphics().p("Ega8AoWMAAYhRVILBACMAqfAx2IABPsIxaQbg");
	var mask_graphics_243 = new cjs.Graphics().p("EgaZAnjMAAXhPtIKzABMApoAw3IABPYIxDQFg");
	var mask_graphics_244 = new cjs.Graphics().p("EgZ3AmvMAAXhOFIKlABMAoyAv4IABPDIwtPxg");
	var mask_graphics_245 = new cjs.Graphics().p("EgZUAl8MAAWhMeIKXACMAn8Au3IAAOvIwWPdg");
	var mask_graphics_246 = new cjs.Graphics().p("EgYyAlIMAAWhK2IKIACMAnGAt3IABOcIwBPHg");
	var mask_graphics_247 = new cjs.Graphics().p("EgYQAkUMAAWhJNIJ6ABMAmQAs4IABOIIvqOyg");
	var mask_graphics_248 = new cjs.Graphics().p("EgXtAjhMAAVhHmIJsABMAlaAr5IAAN0IvUOdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-201.3,y:321.9}).wait(99).to({graphics:mask_graphics_99,x:-201.3,y:321.9}).wait(1).to({graphics:mask_graphics_100,x:-200.9,y:314.7}).wait(1).to({graphics:mask_graphics_101,x:-200.6,y:307.4}).wait(1).to({graphics:mask_graphics_102,x:-200.2,y:300.2}).wait(1).to({graphics:mask_graphics_103,x:-199.8,y:293}).wait(1).to({graphics:mask_graphics_104,x:-199.4,y:285.8}).wait(1).to({graphics:mask_graphics_105,x:-199.1,y:278.5}).wait(1).to({graphics:mask_graphics_106,x:-198.7,y:271.3}).wait(1).to({graphics:mask_graphics_107,x:-198.3,y:264.1}).wait(1).to({graphics:mask_graphics_108,x:-197.9,y:256.8}).wait(1).to({graphics:mask_graphics_109,x:-197.6,y:249.6}).wait(1).to({graphics:mask_graphics_110,x:-197.2,y:242.4}).wait(1).to({graphics:mask_graphics_111,x:-196.8,y:235.2}).wait(1).to({graphics:mask_graphics_112,x:-196.4,y:227.9}).wait(123).to({graphics:mask_graphics_235,x:-196.4,y:227.9}).wait(1).to({graphics:mask_graphics_236,x:-173.8,y:228.7}).wait(1).to({graphics:mask_graphics_237,x:-151.3,y:229.5}).wait(1).to({graphics:mask_graphics_238,x:-128.7,y:230.3}).wait(1).to({graphics:mask_graphics_239,x:-106.1,y:231.1}).wait(1).to({graphics:mask_graphics_240,x:-83.5,y:231.8}).wait(1).to({graphics:mask_graphics_241,x:-60.9,y:232.6}).wait(1).to({graphics:mask_graphics_242,x:-38.3,y:233.4}).wait(1).to({graphics:mask_graphics_243,x:-15.7,y:234.2}).wait(1).to({graphics:mask_graphics_244,x:6.9,y:234.9}).wait(1).to({graphics:mask_graphics_245,x:29.5,y:235.7}).wait(1).to({graphics:mask_graphics_246,x:52.1,y:236.5}).wait(1).to({graphics:mask_graphics_247,x:74.7,y:237.3}).wait(1).to({graphics:mask_graphics_248,x:97.3,y:238.1}).wait(148));

	// pic2
	this.instance_9 = new lib.pic2_1();
	this.instance_9.setTransform(-305.3,407.5,1.575,1.575,0,0,0,-0.1,0.1);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({regY:0.2,scaleX:1.29,scaleY:1.29,x:-252,y:398.1},13).wait(123).to({regX:0.1,regY:0.3,scaleX:1.56,scaleY:1.56,x:29.7,y:315.4},13).wait(148));

	// Слой 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgTwA3ZIy2y3IAAxaIAAtxMA3igr5IVcw9MAAQBu/g");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgXbAxxIxxvGIAOyjMBR8hB/MAAOBjvg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgXiAxaIxju9IANyPMBRvhBuMAAPBjBg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgXoAxCIxWuzIANx7MBRhhBdMAAQBiTg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgXvAwrIxJupIAOxoMBRUhBMMAAPBhlg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgX1AwUIw8ugIANxUMBRHhA7MAAPBg3g");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgX8Av9IwvuXIAOw/MBQ6hAqMAAPBgIg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgYCAvmIwiuNIANwsMBQthAZMAAPBfZg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgYJAvPIwVuFIAOwXMBQghAIMAAPBerg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgYPAu4IwIt7IANwEMBQTg/3MAAPBd9g");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgYWAuhIv7tyIAOvvMBQGg/nMAAPBdPg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgYcAuKIvutpIANvbMBP5g/WMAAPBchg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgYjAtzIvhtfIAOvIMBPsg/FMAAOBbzg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgYqAtbIvTtVIANu0MBPfg+0MAAPBbFg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgYwAtEIvGtMIANugMBPRg+jMAAQBaXg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgYwAtEIvGtMIANugMBPRg+jMAAQBaXg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgYTAsPIu0s9IANuOMBN0g9ZMAAOBYrg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgX1ArZIujstIAOt9MBMUg8OMAAOBXAg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EgXXAqjIuRsdIANtsMBK2g7EMAAOBVUg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgW6ApuIt/sOIANtaMBJYg56MAANBTog");
	var mask_1_graphics_240 = new cjs.Graphics().p("EgWcAo4Ittr+IANtJMBH4g4vMAAOBR9g");
	var mask_1_graphics_241 = new cjs.Graphics().p("EgV/AoCItartIAMs5MBGag3kMAAOBQRg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgVhAnNItJrfIAMsmMBE7g2aMAAOBOlg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgVEAmXIs2rPIALsVMBDeg1PMAAMBM5g");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgUnAlhIskq/IALsEMBCAg0FMAAMBLOg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgUJAksIsTqwIALryMBAhgy7MAANBJig");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgTrAj2IsBqgIALrhMA/CgxvMAAMBH2g");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgTOAjAIrvqQIALrQMA9jgwlMAANBGLg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgSwAiLIrdqAIALrAMA8EgvaMAAMBEfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:277.9,y:259.8}).wait(99).to({graphics:mask_1_graphics_99,x:311.4,y:293.8}).wait(1).to({graphics:mask_1_graphics_100,x:308.2,y:286.1}).wait(1).to({graphics:mask_1_graphics_101,x:305,y:278.4}).wait(1).to({graphics:mask_1_graphics_102,x:301.8,y:270.7}).wait(1).to({graphics:mask_1_graphics_103,x:298.6,y:263}).wait(1).to({graphics:mask_1_graphics_104,x:295.4,y:255.3}).wait(1).to({graphics:mask_1_graphics_105,x:292.2,y:247.6}).wait(1).to({graphics:mask_1_graphics_106,x:289,y:239.9}).wait(1).to({graphics:mask_1_graphics_107,x:285.8,y:232.2}).wait(1).to({graphics:mask_1_graphics_108,x:282.6,y:224.5}).wait(1).to({graphics:mask_1_graphics_109,x:279.4,y:216.8}).wait(1).to({graphics:mask_1_graphics_110,x:276.3,y:209.1}).wait(1).to({graphics:mask_1_graphics_111,x:273.1,y:201.5}).wait(1).to({graphics:mask_1_graphics_112,x:269.9,y:193.8}).wait(123).to({graphics:mask_1_graphics_235,x:269.9,y:193.8}).wait(1).to({graphics:mask_1_graphics_236,x:283.7,y:195.1}).wait(1).to({graphics:mask_1_graphics_237,x:297.6,y:196.5}).wait(1).to({graphics:mask_1_graphics_238,x:311.4,y:197.9}).wait(1).to({graphics:mask_1_graphics_239,x:325.3,y:199.3}).wait(1).to({graphics:mask_1_graphics_240,x:339.1,y:200.6}).wait(1).to({graphics:mask_1_graphics_241,x:353,y:202}).wait(1).to({graphics:mask_1_graphics_242,x:366.9,y:203.4}).wait(1).to({graphics:mask_1_graphics_243,x:380.7,y:204.8}).wait(1).to({graphics:mask_1_graphics_244,x:394.6,y:206.2}).wait(1).to({graphics:mask_1_graphics_245,x:408.4,y:207.5}).wait(1).to({graphics:mask_1_graphics_246,x:422.3,y:208.9}).wait(1).to({graphics:mask_1_graphics_247,x:436.1,y:210.3}).wait(1).to({graphics:mask_1_graphics_248,x:450,y:211.7}).wait(148));

	// pic1
	this.instance_10 = new lib.pic1();
	this.instance_10.setTransform(111.6,388.8,1.236,1.236,0,0,0,0.1,0.1);

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(99).to({scaleX:1.13,scaleY:1.13,x:113.3,y:278.3},13).wait(123).to({x:543.3,y:239.3},13).wait(148));

	// Слой 3
	this.instance_11 = new lib.bird();
	this.instance_11.setTransform(357.5,510.4,0.795,0.795,0,0.6,-179.4,0.3,0.2);
	this.instance_11._off = true;
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(112).to({_off:false},0).to({regX:0.1,regY:0.3,scaleX:0.57,scaleY:0.57,x:258.2,y:507.6},11).wait(103).to({x:228.2,y:437.6},9).to({_off:true},1).wait(160));

	// Слой 1 - копия
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape_61.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.8,221.6,847.3,754.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;