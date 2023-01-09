(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1200,
	height: 1800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/toppicture.jpg", id:"toppicture"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.toppicture = function() {
	this.initialize(img.toppicture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,198);


(lib.circlecycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,56,56,0)").s().p("AucOeQmAmAAAoeQAAodGAl/QF/mAIdAAQIeAAGAGAQF/F/AAIdQAAIel/GAQmAF/oeAAQodAAl/l/g");
	this.shape.setTransform(-1.1,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(46,46,46,0.027)").s().p("Ar4L5Qk7k7AAm+QAAm8E7k8QE8k7G8AAQG+AAE7E7QE7E8AAG8QAAG+k7E7Qk7E7m+AAQm8AAk8k7g");
	this.shape_1.setTransform(-1.1,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(43,43,43,0.039)").s().p("ArALBQklkkABmdQgBmbElklQElklGbABQGdgBEkElQElElAAGbQAAGdklEkQkkElmdAAQmbAAklklg");
	this.shape_2.setTransform(-1.1,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(40,40,40,0.039)").s().p("AqNKPQkPkQAAl/QAAl+EPkPQEPkPF+AAQF/AAEQEPQEOEPAAF+QAAF/kOEQQkQEOl/AAQl+AAkPkOg");
	this.shape_3.setTransform(-1.1,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(37,37,37,0.035)").s().p("ApaJbQj6j6AAlhQAAlgD6j6QD6j6FgAAQFhAAD6D6QD6D6AAFgQAAFhj6D6Qj6D6lhAAQlgAAj6j6g");
	this.shape_4.setTransform(-1.1,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(34,34,34,0.035)").s().p("AonIoQjljkAAlEQAAlCDljlQDljlFCAAQFEAADkDlQDlDlAAFCQAAFEjlDkQjkDllEAAQlCAAjljlg");
	this.shape_5.setTransform(-1.1,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(31,31,31,0.031)").s().p("An0H1QjPjQAAklQAAkkDPjQQDQjPEkAAQElAADQDPQDPDQAAEkQAAEljPDQQjQDPklAAQkkAAjQjPg");
	this.shape_6.setTransform(-1.1,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(28,28,28,0.031)").s().p("AnAHCQi7i7AAkHQAAkGC7i6QC6i7EGAAQEHAAC7C7QC6C6AAEGQAAEHi6C7Qi7C6kHAAQkGAAi6i6g");
	this.shape_7.setTransform(-1.1,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(25,25,25,0.031)").s().p("AmOGPQikimAAjpQAAjoCkimQCmikDoAAQDpAACmCkQCkCmAADoQAADpikCmQimCkjpAAQjoAAimikg");
	this.shape_8.setTransform(-1,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(22,22,22,0.027)").s().p("AlaFbQiQiQAAjLQAAjKCQiQQCQiQDKAAQDLAACQCQQCQCQAADKQAADLiQCQQiQCQjLAAQjKAAiQiQg");
	this.shape_9.setTransform(-1.1,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(19,19,19,0.027)").s().p("AknEoQh7h7AAitQAAisB7h7QB7h7CsAAQCtAAB7B7QB7B7AACsQAACth7B7Qh7B7itAAQisAAh7h7g");
	this.shape_10.setTransform(-1.1,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(16,16,16,0.024)").s().p("Aj0D1QhmhlABiQQgBiOBmhmQBmhmCOABQCQgBBlBmQBmBmAACOQAACQhmBlQhlBmiQAAQiOAAhmhmg");
	this.shape_11.setTransform(-1,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(13,13,13,0.024)").s().p("AjBDCQhQhQAAhyQAAhwBQhRQBRhQBwAAQByAABQBQQBQBRAABwQAAByhQBQQhQBQhyAAQhwAAhRhQg");
	this.shape_12.setTransform(-1.1,-1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(10,10,10,0.02)").s().p("AiOCOQg7g6AAhUQAAhSA7g8QA8g7BSAAQBUAAA6A7QA8A8AABSQAABUg8A6Qg6A8hUAAQhSAAg8g8g");
	this.shape_13.setTransform(-1,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(7,7,7,0.02)").s().p("AhbBcQgmgnABg1QgBg0AmgnQAngmA0ABQA1gBAnAmQAlAnABA0QgBA1glAnQgnAlg1ABQg0gBgnglg");
	this.shape_14.setTransform(-1,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(17,17,17,0.02)").s().p("Ah+B+Qg0g0AAhKQAAhIA0g2QA2g0BIAAQBKAAA0A0QA0A2AABIQAABKg0A0Qg0A0hKAAQhIAAg2g0g");
	this.shape_15.setTransform(-1,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(47,47,47,0.024)").s().p("AjlDmQhghfgBiHQABiGBghfQBfhgCGgBQCHABBfBgQBhBfAACGQAACHhhBfQhfBhiHAAQiGAAhfhhg");
	this.shape_16.setTransform(-1,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(96,96,96,0.031)").s().p("AmUGUQininAAjtQAAjsCnioQCoinDsAAQDtAACnCnQCpCoAADsQAADtipCnQinCpjtAAQjsAAioipg");
	this.shape_17.setTransform(-1,-1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(166,166,166,0.035)").s().p("AqIKIQkMkMAAl8QAAl7EMkNQENkMF7AAQF8AAEMEMQEMENAAF7QAAF8kMEMQkMEMl8AAQl7AAkNkMg");
	this.shape_18.setTransform(-1,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.047)").s().p("AvBPBQmNmOgBozQABoyGNmPQGPmNIygBQIzABGOGNQGPGPgBIyQABIzmPGOQmOGPozgBQoyABmPmPg");
	this.shape_19.setTransform(-1,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(215,215,215,0.039)").s().p("Au6O6QmLmLAAovQAAovGLmLQGLmLIvAAQIvAAGLGLQGLGLAAIvQAAIvmLGLQmLGLovAAQovAAmLmLg");
	this.shape_20.setTransform(-1,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(175,175,175,0.027)").s().p("AuyOzQmImJAAoqQAAoqGImIQGImIIqAAQIqAAGJGIQGIGIAAIqQAAIqmIGJQmJGIoqAAQoqAAmImIg");
	this.shape_21.setTransform(-1.1,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(136,136,136,0.02)").s().p("AurOsQmFmGAAomQAAomGFmFQGFmFImAAQImAAGGGFQGFGFAAImQAAImmFGGQmGGFomAAQomAAmFmFg");
	this.shape_22.setTransform(-1.1,-1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(96,96,96,0.008)").s().p("AukOlQmCmDAAoiQAAohGCmDQGDmCIhAAQIiAAGDGCQGCGDAAIhQAAIimCGDQmDGCoiAAQohAAmDmCg");
	this.shape_23.setTransform(-1.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},50).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(73,73,73,0)").ss(1,1,1).p("AYwAAQAAKQnQHQQnQHQqQAAQqPAAnRnQQnPnQAAqQQAAqPHPnRQHRnPKPAAQKQAAHQHPQHQHRAAKPg");
	this.shape_24.setTransform(-1.6,-1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(73,73,73,0.059)").ss(1,1,1).p("A3zAAQAAp2G+m/QG/m+J2AAQJ3AAG+G+QG/G/AAJ2QAAJ3m/G+Qm+G/p3AAQp2AAm/m/Qm+m+AAp3g");
	this.shape_25.setTransform(-1.5,-1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(73,73,73,0.122)").ss(1,1,1).p("A24AAQAApeGtmtQGtmtJeAAQJfAAGsGtQGuGtAAJeQAAJfmuGsQmsGupfAAQpeAAmtmuQmtmsAApfg");
	this.shape_26.setTransform(-1.4,-1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(73,73,73,0.18)").ss(1,1,1).p("A18AAQAApFGbmcQGcmbJFAAQJGAAGbGbQGcGcAAJFQAAJGmcGbQmbGcpGAAQpFAAmcmcQmbmbAApGg");
	this.shape_27.setTransform(-1.3,-1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(73,73,73,0.239)").ss(1,1,1).p("A1AAAQAAosGJmKQGLmKIsAAQItAAGKGKQGKGKAAIsQAAItmKGKQmKGKotAAQosAAmLmKQmJmKAAotg");
	this.shape_28.setTransform(-1.2,-1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(73,73,73,0.302)").ss(1,1,1).p("A0EAAQAAoUF4l4QF5l5ITAAQIUAAF5F5QF4F4AAIUQAAIVl4F4Ql5F5oUAAQoTAAl5l5Ql4l4AAoVg");
	this.shape_29.setTransform(-1.1,-1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(73,73,73,0.361)").ss(1,1,1).p("AzIAAQAAn7FmlnQFnlnH7AAQH7AAFnFnQFnFnAAH7QAAH8lnFmQlnFon7AAQn7AAlnloQlmlmAAn8g");
	this.shape_30.setTransform(-1,-0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(73,73,73,0.42)").ss(1,1,1).p("AyNAAQAAniFVlWQFWlVHiAAQHjAAFVFVQFWFWAAHiQAAHjlWFVQlVFWnjAAQniAAlWlWQlVlVAAnjg");
	this.shape_31.setTransform(-0.9,-0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(73,73,73,0.478)").ss(1,1,1).p("AxRAAQAAnJFElEQFElEHJAAQHKAAFEFEQFEFEAAHJQAAHKlEFDQlEFFnKAAQnJAAlElFQlElDAAnKg");
	this.shape_32.setTransform(-0.8,-0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(73,73,73,0.541)").ss(1,1,1).p("AwVAAQAAmxEykyQEykzGxAAQGxAAEzEzQEyEyAAGxQAAGykyEyQkzEzmxAAQmxAAkykzQkykyAAmyg");
	this.shape_33.setTransform(-0.7,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("APaAAQAAGZkhEgQkhEimYAAQmYAAkhkiQkgkgAAmZQAAmYEgkhQEhkhGYAAQGYAAEhEhQEhEhAAGYg");
	this.shape_34.setTransform(-0.6,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("Av0AAQAAmjEokoQEpkpGjAAQGjAAEpEpQEpEoAAGjQAAGkkpEoQkpEpmjAAQmjAAkpkpQkokoAAmkg");
	this.shape_35.setTransform(-0.7,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AwOAAQAAmuEwkwQEwkwGuAAQGuAAEwEwQExEwAAGuQAAGukxEwQkwExmuAAQmuAAkwkxQkwkwAAmug");
	this.shape_36.setTransform(-0.8,-0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AwoAAQAAm5E3k4QE5k4G4AAQG5AAE4E4QE4E4AAG5QAAG5k4E4Qk4E5m5AAQm4AAk5k5Qk3k4AAm5g");
	this.shape_37.setTransform(-0.8,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AxDAAQAAnDFAlAQFAlAHDAAQHEAAFAFAQFAFAAAHDQAAHElAFAQlAFAnEAAQnDAAlAlAQlAlAAAnEg");
	this.shape_38.setTransform(-0.9,-0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AxdAAQAAnOFHlIQFIlHHOAAQHPAAFHFHQFIFIAAHOQAAHPlIFHQlHFInPAAQnOAAlIlIQlHlHAAnPg");
	this.shape_39.setTransform(-1,-0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("Ax3AAQAAnZFPlPQFPlPHZAAQHaAAFPFPQFPFPAAHZQAAHalPFPQlPFPnaAAQnZAAlPlPQlPlPAAnag");
	this.shape_40.setTransform(-1.1,-0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AySAAQAAnkFXlXQFXlXHkAAQHlAAFXFXQFXFXAAHkQAAHllXFWQlXFYnlAAQnkAAlXlYQlXlWAAnlg");
	this.shape_41.setTransform(-1.1,-0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AysAAQAAnvFelfQFfleHvAAQHvAAFfFeQFfFfAAHvQAAHwlfFeQlfFfnvAAQnvAAlflfQleleAAnwg");
	this.shape_42.setTransform(-1.2,-0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AzGAAQAAn6FmlmQFmlmH6AAQH7AAFmFmQFmFmAAH6QAAH6lmFmQlmFnn7AAQn6AAlmlnQlmlmAAn6g");
	this.shape_43.setTransform(-1.3,-0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AzgAAQAAoFFtluQFuluIFAAQIFAAFuFuQFuFuAAIFQAAIFluFuQluFvoFAAQoFAAlulvQltluAAoFg");
	this.shape_44.setTransform(-1.4,-0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("Az7AAQAAoPF2l2QF2l2IPAAQIQAAF2F2QF2F2AAIPQAAIQl2F2Ql2F2oQAAQoPAAl2l2Ql2l2AAoQg");
	this.shape_45.setTransform(-1.5,-0.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("A0VAAQAAoaF9l+QF+l9IaAAQIbAAF+F9QF9F+AAIaQAAIbl9F9Ql+F+obAAQoaAAl+l+Ql9l9AAobg");
	this.shape_46.setTransform(-1.5,-0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("A0vAAQAAolGFmGQGFmEIlAAQImAAGFGEQGFGGAAIlQAAImmFGFQmFGFomAAQolAAmFmFQmFmFAAomg");
	this.shape_47.setTransform(-1.6,-0.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(73,73,73,0.6)").ss(1,1,1).p("AVLAAQAAIxmOGMQmMGOoxAAQowAAmNmOQmNmMAAoxQAAowGNmNQGNmNIwAAQIxAAGMGNQGOGNAAIwg");
	this.shape_48.setTransform(-1.7,-0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(73,73,73,0.4)").ss(1,1,1).p("AvCAAQAAmOEakaQEakaGOAAQGPAAEaEaQEaEaAAGOQAAGOkaEaQkaEbmPAAQmOAAkakbQkakaAAmOg");
	this.shape_49.setTransform(-1.7,-0.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(73,73,73,0.2)").ss(1,1,1).p("Ao6AAQAAjrCnioQCoimDrAAQDtAACmCmQCoCoAADrQAADsioCnQimCnjtAAQjrAAioinQininAAjsg");
	this.shape_50.setTransform(-1.7,-1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(73,73,73,0)").ss(1,1,1).p("ACzAAQAABKg1A0Qg0A0hKAAQhIAAg1g0Qg1g0AAhKQAAhJA1g0QA1g0BIAAQBKAAA0A0QA1A0AABJg");
	this.shape_51.setTransform(-1.7,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},47).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(1));

	// Layer 2
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgUAbAAQAcAAAVAUQAVAVgBAbQABAcgVAVQgVAVgcgBQgbABgVgVg");
	this.shape_52.setTransform(-1,-1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AjmDnQhghgAAiHQAAiGBghgQBghgCGAAQCHAABgBgQBgBgAACGQAACHhgBgQhgBgiHAAQiGAAhghgg");
	this.shape_53.setTransform(-1,-1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AmIGKQikijAAjnQAAjlCkijQCjikDlAAQDnAACjCkQCjCjAADlQAADnijCjQijCjjnAAQjlAAijijg");
	this.shape_54.setTransform(-1,-1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AoYIZQjfjeAAk7QAAk6DfjeQDejfE6AAQE7AADeDfQDfDeAAE6QAAE7jfDeQjeDfk7AAQk6AAjejfg");
	this.shape_55.setTransform(-1,-1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AqVKXQkSkTgBmEQABmCESkTQETkSGCgBQGEABETESQERETAAGCQAAGEkRETQkTERmEAAQmCAAkTkRg");
	this.shape_56.setTransform(-1,-1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ar/MAQk+k+AAnCQAAnAE+k/QE/k+HAAAQHCAAE+E+QE+E/AAHAQAAHCk+E+Qk+E+nCAAQnAAAk/k+g");
	this.shape_57.setTransform(-1,-1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AtWNXQliljAAn0QAAnzFiljQFjliHzAAQH0AAFjFiQFiFjAAHzQAAH0liFjQljFin0AAQnzAAljlig");
	this.shape_58.setTransform(-1,-1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AuZObQl/l/AAocQAAoaF/l/QF/l/IaAAQIcAAF/F/QF9F/AAIaQAAIcl9F/Ql/F9ocAAQoaAAl/l9g");
	this.shape_59.setTransform(-1,-1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AvKPLQmSmTAAo4QAAo3GSmTQGTmSI3AAQI4AAGTGSQGSGTAAI3QAAI4mSGTQmTGSo4AAQo3AAmTmSg");
	this.shape_60.setTransform(-1,-1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AvnPpQmfmfAApKQAApJGfmeQGemfJJAAQJKAAGfGfQGdGeABJJQgBJKmdGfQmfGdpKABQpJgBmemdg");
	this.shape_61.setTransform(-1,-1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Aw/RBQnEnEABp9QgBp9HEnCQHCnEJ9ABQJ9gBHEHEQHCHCABJ9QgBJ9nCHEQnEHCp9ABQp9gBnCnCg");
	this.shape_62.setTransform(-1,-1,0.929,0.929);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.996)").s().p("AvsPtQmhmgAApNQAApLGhmhQGhmhJLAAQJNAAGgGhQGhGhAAJLQAAJNmhGgQmgGhpNAAQpLAAmhmhg");
	this.shape_63.setTransform(-1,-1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.992)").s().p("AvcPdQmamaAApDQAApCGamaQGamaJCAAQJDAAGaGaQGaGaAAJCQAAJDmaGaQmaGapDAAQpCAAmamag");
	this.shape_64.setTransform(-1,-1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.98)").s().p("AvBPDQmPmPAAo0QAAoyGPmPQGPmPIyAAQI0AAGPGPQGOGPAAIyQAAI0mOGPQmPGOo0AAQoyAAmPmOg");
	this.shape_65.setTransform(-1.1,-1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.969)").s().p("AubOdQmAmAAAodQAAodGAl+QF+mAIdAAQIdAAGAGAQF/F+AAIdQAAIdl/GAQmAF/odAAQodAAl+l/g");
	this.shape_66.setTransform(-1.1,-1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.949)").s().p("AuPOQQl6l6AAoWQAAoVF6l6QF6l6IVAAQIWAAF6F6QF6F6AAIVQAAIWl6F6Ql6F6oWAAQoVAAl6l6g");
	this.shape_67.setTransform(-1.1,-1.1,0.961,0.961);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.961)").s().p("ArFLHQkoknAAmgQAAmfEokmQEmkoGfAAQGgAAEnEoQEnEmAAGfQAAGgknEnQknEnmgAAQmfAAkmkng");
	this.shape_68.setTransform(-1.1,-1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.969)").s().p("AogIhQjjjiAAk/QAAk/DjjhQDhjjE/AAQE/AADiDjQDjDhAAE/QAAE/jjDiQjiDjk/AAQk/AAjhjjg");
	this.shape_69.setTransform(-1.1,-1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.98)").s().p("Al7F8QidieAAjeQAAjeCdidQCdidDeAAQDeAACeCdQCeCdgBDeQABDeieCeQieCejegBQjeABidieg");
	this.shape_70.setTransform(-1,-1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.988)").s().p("AjWDWQhYhYAAh+QAAh8BYhaQBahYB8AAQB+AABYBYQBaBagBB8QABB+haBYQhYBah+gBQh8ABhahag");
	this.shape_71.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52}]},2).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},52).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_52}]},1).wait(1));

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgUAbAAQAcAAAVAUQAVAVgBAbQABAcgVAVQgVAVgcgBQgbABgVgVg");
	this.shape_72.setTransform(-1,-1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CCCCCC").s().p("Ai/DAQhPhQAAhwQAAhvBPhQQBQhPBvAAQBwAABQBPQBPBQAABvQAABwhPBQQhQBPhwAAQhvAAhQhPg");
	this.shape_73.setTransform(-1,-1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AlDFDQiGiGAAi9QAAi8CGiHQCHiGC8AAQC9AACGCGQCHCHAAC8QAAC9iHCGQiGCHi9AAQi8AAiHiHg");
	this.shape_74.setTransform(-1,-1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CCCCCC").s().p("Am8G9Qi4i4gBkFQABkDC4i5QC5i4EDgBQEFABC4C4QC4C5AAEDQAAEFi4C4Qi4C4kFAAQkDAAi5i4g");
	this.shape_75.setTransform(-1,-1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AorIsQjnjmAAlGQAAlFDnjmQDmjnFFAAQFGAADmDnQDnDmAAFFQAAFGjnDmQjmDnlGAAQlFAAjmjng");
	this.shape_76.setTransform(-1,-1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CCCCCC").s().p("AqQKRQkQkRAAmAQAAl/EQkRQERkQF/AAQGAAAEREQQEQERAAF/QAAGAkQERQkREQmAAAQl/AAkRkQg");
	this.shape_77.setTransform(-1,-1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CCCCCC").s().p("ArpLrQk2k2AAm1QAAm0E2k1QE1k2G0AAQG1AAE2E2QE1E1AAG0QAAG1k1E2Qk2E1m1AAQm0AAk1k1g");
	this.shape_78.setTransform(-1,-1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CCCCCC").s().p("As5M6QlWlWAAnkQAAnjFWlWQFWlWHjAAQHkAAFWFWQFWFWAAHjQAAHklWFWQlWFWnkAAQnjAAlWlWg");
	this.shape_79.setTransform(-1,-1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CCCCCC").s().p("At+N/QlzlzAAoMQAAoMFzlyQFylzIMAAQIMAAFzFzQFzFyAAIMQAAIMlzFzQlzFzoMAAQoMAAlylzg");
	this.shape_80.setTransform(-1,-1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CCCCCC").s().p("Au4O6QmLmLgBovQABouGLmKQGKmLIugBQIvABGLGLQGKGKABIuQgBIvmKGLQmLGKovABQougBmKmKg");
	this.shape_81.setTransform(-1,-1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("AvoPpQmgmfAApKQAApKGgmeQGemgJKAAQJKAAGfGgQGfGeAAJKQAAJKmfGfQmfGfpKAAQpKAAmemfg");
	this.shape_82.setTransform(-1,-1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CCCCCC").s().p("AwOQPQmumvAApgQAApfGumvQGvmuJfAAQJgAAGvGuQGvGvgBJfQABJgmvGvQmvGvpggBQpfABmvmvg");
	this.shape_83.setTransform(-1,-1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("AwpQqQm6m6AApwQAApvG6m6QG6m6JvAAQJwAAG6G6QG6G6gBJvQABJwm6G6Qm6G6pwgBQpvABm6m6g");
	this.shape_84.setTransform(-1,-1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCCCC").s().p("Aw5Q6QnBnAAAp6QAAp5HBnAQHAnBJ5AAQJ6AAHAHBQHBHAAAJ5QAAJ6nBHAQnAHBp6AAQp5AAnAnBg");
	this.shape_85.setTransform(-1,-1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("Aw/RBQnEnEABp9QgBp9HEnCQHCnEJ9ABQJ9gBHEHEQHCHCABJ9QgBJ9nCHEQnEHCp9ABQp9gBnCnCg");
	this.shape_86.setTransform(-1,-1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CCCCCC").s().p("Aw4Q5QnBm/ABp6QgBp4HBnAQHAnBJ4ABQJ6gBG/HBQHAHAABJ4QgBJ6nAG/Qm/HAp6ABQp4gBnAnAg");
	this.shape_87.setTransform(-1,-1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCCCCC").s().p("AwkQkQm3m3AAptQAApsG3m4QG4m3JsAAQJtAAG3G3QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm4m4g");
	this.shape_88.setTransform(-1,-1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CCCCCC").s().p("AwAQBQmompAApYQAApYGomoQGomoJYAAQJYAAGpGoQGpGoAAJYQAAJYmpGpQmpGppYAAQpYAAmompg");
	this.shape_89.setTransform(-1,-1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s().p("AvOPQQmVmUAAo8QAAo6GVmUQGUmVI6AAQI8AAGUGVQGUGUAAI6QAAI8mUGUQmUGUo8AAQo6AAmUmUg");
	this.shape_90.setTransform(-1,-1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CCCCCC").s().p("AuPOQQl6l6AAoWQAAoVF6l6QF6l6IVAAQIWAAF6F6QF6F6AAIVQAAIWl6F6Ql6F6oWAAQoVAAl6l6g");
	this.shape_91.setTransform(-1,-1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CCCCCC").s().p("Aq3K5QkgkhAAmYQAAmWEgkhQEhkgGWAAQGYAAEhEgQEfEhABGWQgBGYkfEhQkhEfmYABQmWgBkhkfg");
	this.shape_92.setTransform(-1,-1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CCCCCC").s().p("AnfHhQjHjIAAkZQAAkYDHjHQDHjHEYAAQEZAADIDHQDHDHAAEYQAAEZjHDIQjIDHkZAAQkYAAjHjHg");
	this.shape_93.setTransform(-1,-1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CCCCCC").s().p("AkHEJQhuhuAAibQAAiaBuhtQBthuCaAAQCbAABuBuQBtBtABCaQgBCbhtBuQhuBtibABQiagBhthtg");
	this.shape_94.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72}]}).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_91}]},51).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_72}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-161,319,319);


(lib._8instatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFE8D4").s().p("AmSFGIAAqLIMlAAIAAKLg");
	this.shape.setTransform(-0.2,-15.4,0.229,0.229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("AmTFGIAAqLIMFAAIAiKLg");
	this.shape_1.setTransform(18.1,-15.4,0.229,0.229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFE8D4").s().p("AmFFGIgbqLIMcAAIAlKLg");
	this.shape_2.setTransform(36.1,-15.4,0.229,0.229);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE7D2B").s().p("AmEFGIgdqLIMKAAIA6KLg");
	this.shape_3.setTransform(54.4,-15.4,0.229,0.229);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE7D2B").s().p("AmTFGIAiqLIMEAAIAAKLg");
	this.shape_4.setTransform(-18.6,-15.4,0.229,0.229);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFE8D4").s().p("AmgFGIAkqLIMdAAIgbKLg");
	this.shape_5.setTransform(-36.6,-15.4,0.229,0.229);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE7D2B").s().p("AmhFGIA5qLIMKAAIgeKLg");
	this.shape_6.setTransform(-54.9,-15.4,0.229,0.229);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh2B1ilAAQilAAh1h1g");
	this.shape_7.setTransform(54.8,-3.4,0.229,0.229);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5CEB7").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh2B0Qh0B1imAAQilAAh1h1g");
	this.shape_8.setTransform(36.5,-3.4,0.229,0.229);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh1B1imAAQikAAh2h1g");
	this.shape_9.setTransform(18.2,-3.4,0.229,0.229);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D5CEB7").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh1B1imAAQikAAh2h1g");
	this.shape_10.setTransform(-0.3,-3.4,0.229,0.229);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh1B1imAAQilAAh1h1g");
	this.shape_11.setTransform(-18.6,-3.4,0.229,0.229);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D5CEB7").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh2B1ilAAQilAAh1h1g");
	this.shape_12.setTransform(-37,-3.4,0.229,0.229);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh2B0Qh0B1imAAQilAAh1h1g");
	this.shape_13.setTransform(-55.3,-3.4,0.229,0.229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjqD1QgFgEAAgGQAAgHAEgEIHCnUQADgEAHAAQAGAAAEAEQAFAEAAAHQAAAGgEAEInCHUQgEAEgGAAQgHAAgDgEg");
	this.shape_14.setTransform(31.8,9,0.229,0.229);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnsIBQgEgEgBgGQAAgGAFgFIPEvtQAEgEAGAAQAGAAAFAEQAEAFABAGQAAAGgFAFIvEPsQgFAFgFAAQgHAAgEgFg");
	this.shape_15.setTransform(36.8,12,0.229,0.229);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjKDUQgFgFAAgGQAAgGAEgFIGBmQQAEgEAHgBQAGAAAEAFQAFAEAAAHQAAAFgEAFImBGQQgEAFgHgBQgFAAgFgDg");
	this.shape_16.setTransform(43.5,13.4,0.229,0.229);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmbGsQgEgEAAgHQgBgFAFgFIMhtCQAEgFAHABQAGAAAEADQAFAFAAAGQAAAGgEAEIsiNDQgEAEgHABQgGgBgEgEg");
	this.shape_17.setTransform(-19.9,-3.4,0.229,0.229);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AtlOLQgFgEAAgHQAAgGAEgEIa37/QAEgFAHAAQAGAAAEAEQAFAFAAAGQAAAGgEAFI63b+QgEAFgHAAQgGAAgEgEg");
	this.shape_18.setTransform(-10.9,1.8,0.229,0.229);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AlhFwQgFgEAAgGQAAgGAEgFIKvrKQAEgEAHgBQAGAAAEAFQAFAEAAAGQAAAGgEAFIqvLKQgEAFgHAAQgGAAgEgFg");
	this.shape_19.setTransform(0.9,4.4,0.229,0.229);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F3F3F").s().p("Egw8ADXIAAmtMBh5AAAIAAGtg");
	this.shape_20.setTransform(-0.4,-67.5,0.229,0.229);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#747575").s().p("Ag+BDIgViFICnAAIgaCFg");
	this.shape_21.setTransform(64,65.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0E7F47").s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBg");
	this.shape_22.setTransform(64,53.5,0.229,0.229);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#747575").s().p("AkTEmIhepLILjAAIhwJLg");
	this.shape_23.setTransform(-64,65.7,0.229,0.229);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0E7F47").s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBg");
	this.shape_24.setTransform(-64,53.5,0.229,0.229);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#28170E").s().p("AiSBYQglAAgZgaQgagaAAgkQAAgjAagaQAZgaAlAAIElAAQAlAAAZAaQAaAaAAAjQAAAkgaAaQgZAaglAAg");
	this.shape_25.setTransform(25.6,32.1,0.229,0.229);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#28170E").s().p("AiyDjQgKAAAAgJIADjaQAAhkgJhxIgBgFQAAgGAKgBQAagDBWAAIBgABQBNACAwAuQAwAwAABNQAABNgpAxQgtA0hNAAIhNgDQgOAAAAAMQAAAUADAYQADAeAAAPQAAAHgHAAgAg9h3QgCAEAABHIACA6QAAAHA6AAQBFAAAAhGQAAhMhIAAQg0AAgDAGg");
	this.shape_26.setTransform(46.2,-36,0.229,0.229);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#28170E").s().p("AilCqQhChFAAhlQAAhjBChGQBChGBjgBQBjABBDBGQBCBGAABjQAABmhBBFQhCBGhlAAQhkAAhBhHgAhMhQQgfAkgBAsQABAxAdAiQAeAjAwAAQAtAAAhglQAfgkAAgtQAAgvgfgjQgfgkgvABQgtAAgfAlg");
	this.shape_27.setTransform(35,-36,0.229,0.229);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#28170E").s().p("ABaDjQgJgBAAgIIAChNIADhOQAAgNgHgBQgJgChGgBQhEABgKACQgHABAAANIACBNQACAtAAAfQAAAJgJACQgKACg0AAQguAAgKgCQgJgCAAgIQgBgYAEhSQAEhDAAgoQgBgjgDhMQgDhHAAgrQAAgHAHAAIAeABIA/AAIAfgBQAFAAABAFQgBAWgDA0QgEA5AAAQQAAAMAHACQAJACBIAAQBFAAALgCQAJgCgBgMIgChHQgCgqAAgdQAAgKAIAAIAdABIA6AAIAdgBQAJAAAAAHQAAAmgDBMQgCBMAAAjQgBAoAEBDQADBSAAAYQAAAHgDABQgDACgGAAQgSACgmAAQg0AAgIgCg");
	this.shape_28.setTransform(23.3,-36,0.229,0.229);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#28170E").s().p("Ag6D0QgIgBgagtQgaguAAgKQABgDAFgBQAwgMAOgHQAigQAAgiQAAgVgWgaIgqgvQgXgiABgqQAAg7A3goQAtggA/gKIAGgBQAGABACAHQAJAZAeA+IABACQAAAHgFAAIgJgBIgKgBQgYAAgRAKQgWANABAWQgBATAYAdIArA1QAYAjAAAkQgBBDg3AvQgwAphFANg");
	this.shape_29.setTransform(14,-36,0.229,0.229);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#28170E").s().p("ACDDlQgYgChxAAIiVgBQgLgBAAgIQAAglAEhJQAEhOAAgeQAAgegEhtIgDhOIgBgEQAAgHAIgBIBJABICOAAIBIgBQARAAADANIAIBcQAAAGgHAAIgGAAQhagHhAAAQgSAAgDAIQgCADAAAWQAAAWAGAHQAHAHAPAAIAagBQAlAAAugCIAkgEQAIAAAAAIQAAgGgGA4QgDAUAAAeQAAAHgJgBIgegCQgQgChFAAIggAAQgOAAgCAGIAAAUQAAAYADAIQAGANAiACIAwAAQALAAAogDQAigEARAAQAHABAAAMQAAALgFAoQgGAogFAJQgDAFgIAAIgJgBg");
	this.shape_30.setTransform(2.4,-35.9,0.229,0.229);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#28170E").s().p("ACCDlQgXgChxAAIiVgBQgLgBAAgIQAAggAEhOQAEhBAAgrQAAgsgEhfIgEhSQAAgHAIgBIBJABICOAAIBIgBQARAAACANQACAHADAmQAEAkAAALQAAAGgHAAIgGAAQhagHhAAAQgRAAgFAIQgBAEAAAVQAAAWAGAHQAHAHAPAAIAagBQAlAAAugCIAkgEQAHAAAAAHQAAgDgFA2QgDAYAAAaQAAAHgJgBIgegCQgQgChFAAIggAAQgOAAgCAGIAAAUQAAAZADAHQAGANAiACIAvAAQAMAAAogDQAigEARAAQAHABAAAMQAAAOgGAlQgFAogFAJQgEAFgHAAIgKgBg");
	this.shape_31.setTransform(-6.5,-35.9,0.229,0.229);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#28170E").s().p("AhLDpQg9gBgRgEQgKgCAAgIQAAgwADg9IAChsQAAglgEhFIgGhxQgBgIAKAAICSACQAVAAA4gEQA4gEAWAAQARAAACANIABAqIAEAcQADATAAAJQAAAEgGAAQgVAAg1gFQgygEgZAAQgcAAgGACQgMAGAAAaQAAAfAPAEQAHACALAAQAeAAAlgDIBEgCQAKAAAAA5QAAAxgDAHQgCAFgFABIgWgDQgjgChHAAIgYAAQgQADAAALQAAAyADA4IAEAxQAAAJgVABIgdAAg");
	this.shape_32.setTransform(-15.4,-36,0.229,0.229);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#28170E").s().p("AhLDpQg8gBgTgEQgJgDAAgHIAChtQADg8AAgwQAAgxgEg5IgGhtIAAgEQAAgIAKAAICSACQAUAAA4gEQA4gEAWAAQARAAABANIACAqIAEAcQAEARgBALQABAEgHAAQgVAAg2gFQgxgEgZAAQgdAAgFACQgMAGAAAaQAAAfAPAEQAHACALAAQAeAAAlgDIBEgCQALAAAAA5QgBAxgDAHQgCAFgGABIgWgDQgigChHAAIgXAAQgSACABAMQAAAqADBAIAEAzQgCAHgTABIgdAAg");
	this.shape_33.setTransform(-24.3,-36,0.229,0.229);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#28170E").s().p("AimCqQhBhEAAhmQAAhkBBhFQBDhGBjgBQBjABBDBGQBCBGAABjQAABmhBBFQhDBGhkAAQhjAAhDhHgAhMhQQgfAjAAAtQAAAyAdAhQAeAjAwAAQAtAAAhglQAegjAAguQAAgvgdgjQgfgkgwABQgtAAgfAlg");
	this.shape_34.setTransform(-34.8,-36,0.229,0.229);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#28170E").s().p("AiFCqQg+hDAAhnQAAhhA8hFQA/hIBgAAQBpAAA8BBQAHAHAAAFQAAAHgXAnQgXAogGAFQgCADgEAAQgCAAgOgNQgUgRgPgIQgZgNgcAAQguAAgdAkQgaAhAAAxQAAAwAaAhQAdAlAuAAQAcAAAZgNQAQgHASgPQAOgNACAAQAEAAADAEQAGAHAWAiQAYAjAAAEQAAAGgHAIQg7BHhkAAQhkAAg/hFg");
	this.shape_35.setTransform(-45.5,-36,0.229,0.229);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C2B59B").s().p("EglrAGwIAAtfMBLXAAAIAANfg");
	this.shape_36.setTransform(-0.3,-36.5,0.229,0.229);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(116,117,117,0.4)").s().p("EgoTACRIAAkhMBQnAAAIAAEhg");
	this.shape_37.setTransform(-0.1,-56.5,0.229,0.229);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(116,117,117,0.4)").s().p("EgBNArgMAAAhW/ICbAAMAAABW/g");
	this.shape_38.setTransform(63,3.9,0.229,0.229);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(116,117,117,0.4)").s().p("EgBNArgMAAAhW/ICbAAMAAABW/g");
	this.shape_39.setTransform(-63.4,3.9,0.229,0.229);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#519FD5").s().p("AplVIMAAAgqPITLAAMAAAAqPg");
	this.shape_40.setTransform(36.7,17,0.229,0.229);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3F3F3F").s().p("AplDvIAAndITLAAIAAHdg");
	this.shape_41.setTransform(36.7,61.6,0.229,0.229);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#747575").s().p("AsYGdIAAs5IYwAAIAAM5g");
	this.shape_42.setTransform(36.7,61.4,0.229,0.229);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3F3F3F").s().p("AsYekMAAAg9HIYwAAMAAAA9Hg");
	this.shape_43.setTransform(36.7,26.2,0.229,0.229);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3F3F3F").s().p("EguAAFPIAAqdMBcCAAAIAAKdg");
	this.shape_44.setTransform(-0.2,-58,0.229,0.229);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F3F3F").s().p("EgC1AtmMAAAhbLIFrAAMAAABbLg");
	this.shape_45.setTransform(63,4.2,0.229,0.229);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3F3F3F").s().p("AgoKbIAA01IBRAAIAAU1g");
	this.shape_46.setTransform(-63.4,4.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#28170E").s().p("A4WAyIAAhjMAwtAAAIAABjg");
	this.shape_47.setTransform(-20.7,69.8,0.229,0.229);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_48.setTransform(10.5,58.7,0.229,0.229);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_49.setTransform(5.3,58.7,0.229,0.229);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_50.setTransform(0.1,58.7,0.229,0.229);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_51.setTransform(-5.1,58.7,0.229,0.229);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_52.setTransform(-10.3,58.7,0.229,0.229);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_53.setTransform(-15.5,58.7,0.229,0.229);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_54.setTransform(-20.7,58.7,0.229,0.229);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_55.setTransform(-25.9,58.7,0.229,0.229);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_56.setTransform(-31.1,58.7,0.229,0.229);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_57.setTransform(-36.3,58.7,0.229,0.229);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_58.setTransform(-41.5,58.7,0.229,0.229);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_59.setTransform(-46.7,58.7,0.229,0.229);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_60.setTransform(-51.9,58.7,0.229,0.229);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#28170E").s().p("A4XIFIAAwKMAwvAAAIAAQKgA3THCMAunAAAIAAuDMgunAAAg");
	this.shape_61.setTransform(-20.7,58.7,0.229,0.229);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#519FD5").s().p("A3yeJMAAAg8RMAvlAAAMAAAA8Rg");
	this.shape_62.setTransform(-20.7,25.7,0.229,0.229);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EFE8D4").s().p("EguAAtmMAAAhbLMBcCAAAMAAABbLg");
	this.shape_63.setTransform(-0.2,4.2,0.229,0.229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,-72.4,148.1,144.8);


(lib._8incar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231207").ss(0.8,1,1).p("AAvAAQAAATgOAOQgOANgTAAQgSAAgNgNQgPgOAAgTQAAgSAPgOQANgNASAAQATAAAOANQAOAOAAASg");
	this.shape.setTransform(-55.9,32.1,1.267,1.267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_1.setTransform(-55.9,32,0.428,0.428);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231207").ss(0.8,1,1).p("AAvAAQAAATgOAOQgOANgTAAQgSAAgNgNQgPgOAAgTQAAgSAPgOQANgNASAAQATAAAOANQAOAOAAASg");
	this.shape_2.setTransform(24.9,32.1,1.267,1.267);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_3.setTransform(24.8,32,0.428,0.428);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#231207").ss(0.8,1,1).p("AAvAAQAAATgOAOQgOANgTAAQgSAAgNgNQgPgOAAgTQAAgSAPgOQANgNASAAQATAAAOANQAOAOAAASg");
	this.shape_4.setTransform(50.6,32.1,1.267,1.267);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_5.setTransform(50.5,32,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#224659").s().p("AgCAAQgBgCADgBQAEAAAAADQAAAEgEAAQgEAAACgEg");
	this.shape_6.setTransform(55.6,-2.6,0.428,0.428,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#224659").s().p("AAAADQAAABAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIAAgCQgBgDADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABACQAAABgBABQAAAAAAABQAAAAgBAAQgBABAAAAIgBgBg");
	this.shape_7.setTransform(38.9,1.1,0.428,0.428,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#224659").s().p("AAAAEQgCAAAAgEQgBgDADAAQAEAAAAADQAAAEgEAAIAAAAg");
	this.shape_8.setTransform(30.4,-2.6,0.428,0.428,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBABAAIAAgnQgBgDADABQAEAAAAACIAAAnQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_9.setTransform(30.4,-1.1,0.428,0.428,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBABAAIAAgnQgBgDADABQAEAAAAACIAAAnQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_10.setTransform(55.6,-1.1,0.428,0.428,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgmQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQADAAABACIAAAmQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_11.setTransform(38.9,2.6,0.428,0.428,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D4255").s().p("AgCAcQABgcgBgbQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAAAAAIACAAIABADIAAA3QAAADgDAAQgCAAAAgDg");
	this.shape_12.setTransform(41,-1.5,0.428,0.428,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#224659").s().p("AgHAXQgEAAAAgDIABgmQgBgEAEABQABAAABAAQABAAAAABQAAAAABAAQAAABAAAAIAAADQADgIAKADQABAAAAABQAAAAABABQAAAAAAABQAAABgBAAIgBADQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgDgCgDACQgBABgBAEIgCAJIABAUQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_13.setTransform(64.5,2.6,0.428,0.428,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D4255").s().p("AgDAcIAAg3QAAgDADAAQAEAAAAADIAAA3QAAADgEAAQgDAAAAgDg");
	this.shape_14.setTransform(67.9,-1.5,0.428,0.428,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D4255").s().p("AAAAfQgDAAAAgDIAAg3QAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIABAAQAEAAAAADIAAA3QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_15.setTransform(33,2.2,0.428,0.428,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQADABgBgDIAAgCQgBgJAHgCIAAAMQAAAEAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAAAADIAAAVQAAAHAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABQgIAAAAgMg");
	this.shape_16.setTransform(56.6,-1.4,0.428,0.428,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgEADAAQADABgBgDIAAgCQAAgGABgBIAFgEIAAAMQAAAEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEgBAAAEIAAAWQAAAGAFgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgEABQgHAAgBgMg");
	this.shape_17.setTransform(5.4,-1.4,0.428,0.428,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAABAAQAEAAgBgEIAAgBQAAgGABgBIAFgEIAAAMQAAAEAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAAAAEIAAAVQAAAGAGgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAADQAAAAAAABQABAAgBABQAAAAgBAAQAAAAgBAAIgDABQgJAAAAgMg");
	this.shape_18.setTransform(23.8,2.3,0.428,0.428,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgEgDABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgDQAAgBAAAAQABgBAAgBQAAAAABAAQAAAAABAAQADAAAAgEIAAgBQgCgIAIgDIAAAMQAAABAAABQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBAAAGIAAATQAAAHAFgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAADQACACgEAAIgEABQgIAAAAgMg");
	this.shape_19.setTransform(62.4,2.3,0.428,0.428,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#224659").s().p("AgBAfIgDAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgeQAAgBAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgEABAAgEQAAgEAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBQgBgQAQACQABAAAAAAQABAAAAAAQABABAAAAQAAABgBAAIAAADQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFgBgCACQgCACABAFQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIADAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAABQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgEAAgBABIAAAFIAAAcQAAABAAAAQAAABgBABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_20.setTransform(67.8,2.2,0.428,0.428,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#224659").s().p("AgBAXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgQgpIAAgBQAFgBACABIADAGIAJAbIAKgbQABgFACgBIAHAAIgQApQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgBAAg");
	this.shape_21.setTransform(60.1,-1.1,0.428,0.428,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#224659").s().p("AABAXIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgQgpIAAgCIAFAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAKAfIAKgbIADgGQACgBAFABIAAACIgPAnQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_22.setTransform(54.3,-1.1,0.428,0.428,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#224659").s().p("AgQAMQgFgMAGgMQAFgMANABQALACAEAKIABACIgBABQgGACgBgCQgFgKgIAEQgIADAAALIABAIQADAIAGAAQAJAAACgIQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAIAEACQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQgDANgNABIgCAAQgLAAgFgMg");
	this.shape_23.setTransform(37.6,2.6,0.428,0.428,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#224659").s().p("AgQAYQAIABADgFQAEgEgDgHIgPgnIABAAIAGAAIADAGIAJAcIAKgcIADgGQACgBAFABIgUA2QgCAFgEACIgEABQgGAAAAgIg");
	this.shape_24.setTransform(39.7,-0.7,0.428,0.428,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#224659").s().p("AAKAUIAAgaQgBgIgGgBQgJgCgCAJIgBAIIAAAUQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgmQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAFAAgBAEIAAACQAIgIAJACQAKADAAAJIABAfQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_25.setTransform(7,-1.1,0.428,0.428,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgFAEQgEADAAAHIAAAWQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAQgDABAAgEQABgUgBgSQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAIADAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAADQAJgKAJAEQAIACACAIQABALgBAVQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_26.setTransform(20.6,-1.1,0.428,0.428,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgFAEQgEADAAAGIAAAXQAAADgEAAQgEAAAAgDIAAglQAAgEADAAQAFAAgBAEIAAABQAIgIAKADQAIACACAJQABAKgBAVQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_27.setTransform(28.9,-1.1,0.428,0.428,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#224659").s().p("AAKAUIAAgZQAAgHgFgCQgFgDgFAFQgEADAAAGIAAAWQAAAEgEAAQgEAAAAgEIAAglQAAgEADAAQAFABgBADIAAACQAJgIAJACQAJADABAJIAAAfQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_28.setTransform(64.2,-1.1,0.428,0.428,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgGAEQgDAEAAAGIAAAWQAAADgEAAQgEAAAAgDIAAglQAAgEADAAQAFAAgBAEIABABQAHgIAKADQAJACABAIIAAAgQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_29.setTransform(66.3,-1.1,0.428,0.428,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#224659").s().p("AAKAUIAAgYQAAgIgFgCQgFgCgFAEQgEADAAAGIAAAWQAAAEgEAAQgEAAAAgEIAAgkQAAgFADAAQAFABgBAEIAAABQAJgIAJADQAJACAAAIIABAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_30.setTransform(31.4,2.6,0.428,0.428,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#224659").s().p("AgRAIIAAgbQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAEAAAAADIAAAZQAAAJAIABQACAAAEgCQAEgDAAgEIABgZQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAmQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgEQgHAIgGAAQgPgBAAgOg");
	this.shape_31.setTransform(27.3,2.6,0.428,0.428,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#224659").s().p("AgIAWQgJgCAAgKIAAgeQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIACAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAIAAAVIAAAEQAAAKAJABQAIAAABgKQABgFAAgTQAAgEAEAAQAEAAAAAEIAAAkQAAAEgDAAQgEAAAAgEIAAgDQgGAIgGAAIgHgBg");
	this.shape_32.setTransform(46.7,-1.1,0.428,0.428,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#224659").s().p("AgRALIAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAEgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQAGALAJgFQAFgCgBgDQAAgEgEgBIgNgEQgJgBAAgJQAAgKAKgCQAHgDAIAEQAEABACAEQACAEgBABQgBABgEAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQgCgEgGgBQgEgBgDADQgEAFAHADIAPAFQAKACgDALQgCAGgGADQgEACgGAAQgOAAgDgNg");
	this.shape_33.setTransform(25.3,2.6,0.428,0.428,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#224659").s().p("AgUADIAAgDQAAgSAQgEQAIgCAIAFQAHAGABAKIAAAIQgCATgSAAQgSgBgCgUgAgLgGQgDAHADAHQAEAIAHAAQAGABAEgHQACgCABgIIgBgDQgBgLgLgBIAAAAQgIAAgDAJg");
	this.shape_34.setTransform(66.3,2.6,0.428,0.428,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#224659").s().p("AAAAXQgRgBgCgRIgBgFQAAgSAQgEQAIgCAIAFQAIAFABALQABAGgCAFQgCAIgGAEQgFADgGAAIgBAAgAgLgGQgCAHADAHQADAIAHAAQAIAAAEgIIABgIIAAgEQgDgLgKAAIAAAAQgJAAgCAJg");
	this.shape_35.setTransform(62.1,-1.1,0.428,0.428,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#224659").s().p("AgBAXQgHAAgFgFQgFgFgBgIIgBgFQAAgSAQgEQAIgCAIAFQAHAGABAKQACAEgCAIQgCAHgGAEQgGADgGAAIgBAAgAgLgGQgCAGACAIQADAIAIAAQAIAAADgIQACgEAAgEIgBgDQgBgLgLgBIAAAAQgJAAgCAJg");
	this.shape_36.setTransform(51.3,2.6,0.428,0.428,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#224659").s().p("AgBAYQgRgCgBgRIgBgFQAAgSAPgDQAIgEAIAGQAIAFABALQACAEgCAIQgCAHgGAEQgGAEgGAAIgBAAgAgLgGQgCAHACAHQADAIAIAAQAIAAADgIIACgIIgBgEQgCgLgKAAIAAAAQgIAAgDAJg");
	this.shape_37.setTransform(53.4,2.6,0.428,0.428,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D4255").s().p("AgPAfQgFAAAAgDIAAg2QAAgEAEAAIAhAAQAEAAAAAEQAAAEgEgBIgZAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAVAAQADgBAAADQAAADgDAAIgVAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAAAWQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_38.setTransform(55.5,2.2,0.428,0.428,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#224659").s().p("AAKAdIAAgaQAAgJgJAAQgJgBgBAKIAAAZQAAADgEAAQgEAAAAgDIAAg3QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADAAQAEAAAAAEIAAATQAJgJAIADQAIACACAIIAAAgQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_39.setTransform(34,-1.5,0.428,0.428,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#224659").s().p("AAKAcIAAgZQAAgKgJAAQgJgBgBALIAAAYQAAAEgEAAQgEAAAAgEIAAg2QAAgDAEAAQAEgBAAAEIAAATQAJgIAIADQAJACABAIIAAAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgEAAIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_40.setTransform(60.9,2.2,0.428,0.428,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#224659").s().p("AgSAJQgDgJADgHQAEgQAQABQAHAAAFAFQAFAFABAHQABAFgBABQAAABgHAAIgVAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQADAJAIACQAHABAFgGQACgEAGADQgEAOgQAAQgOgBgEgOgAgGgMQgEADAAADQgBABAAAAQABAAAAABQAAAAAAAAQABAAAAAAIATAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgCgJgKAAQgCAAgEADg");
	this.shape_41.setTransform(58.8,2.6,0.428,0.428,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#224659").s().p("AgBAXQgQgBgCgSIAAgJQAEgSAQABQARABACARQABAEgBABQgBABgFAAIgXAAQgDgBABAEQABAJAKACQAHABAEgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGABQgFANgNAAIgDAAgAAAgPQgJAAgBAJQgBAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIASAAQAEABgBgEQgDgIgIAAIgBAAg");
	this.shape_42.setTransform(52.3,-1.1,0.428,0.428,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#224659").s().p("AgSAJQgDgJADgHQAEgQAPABQAHAAAGAFQAFAFABAHIAAAGQgBABgGAAIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQABAJAJADQAHACAFgHQADgEAGADQgEAOgQAAQgPgBgDgOgAAAgPQgDAAgDADQgEADgBADQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIASAAQAEABgBgDQgBgEgEgDQgCgCgEAAIgBAAg");
	this.shape_43.setTransform(43.6,2.6,0.428,0.428,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#224659").s().p("AAAAXQgOAAgFgOQgCgJACgHQAFgQAQABQAPABADAQQABAFgBABQgBABgGAAIgWAAQgDgBABAEQACAJAIACQAIABAEgGQACgEAHACQgEAOgPAAIgBAAgAAAgPQgIAAgDAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIATAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBQgCgIgJAAIgBAAg");
	this.shape_44.setTransform(9.1,-1.1,0.428,0.428,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#224659").s().p("AgCAXQgQgCgCgRIABgKQACgIAGgEQAGgFAHABQAGAAAGAFQAFAFABAIQABAEgBABQgBABgGAAIgWAAQAAAAgBAAQAAAAgBAAQAAABAAABQAAAAAAABQACAJAIACQAHABAFgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHABQgCAHgHAEQgFACgFAAIgDAAgAAAgPQgJAAgCAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIASAAQADABAAgEQgDgIgIAAIgBAAg");
	this.shape_45.setTransform(35.6,2.6,0.428,0.428,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#224659").s().p("AgCAXQgQgDgBgQQgBgEABgGQAEgRAQABQAIAAAFAFQAFAFABAIQABAEgBABQgBABgFAAIgWAAQgEgBABAEQACAJAIACQAIABAEgGQADgEAGADQgCAHgHAEQgEADgGAAIgDgBgAgGgMQgEACgBAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIATAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgBgEgDgCQgDgDgFAAIAAAAQgDAAgDADg");
	this.shape_46.setTransform(14.3,-1.1,0.428,0.428,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#224659").s().p("AgFAXQgGAAgEgDQgEgDAAgFQgCgMANgBIAOgCIACgBQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABgFgEgCQgEgDgEABQgGABgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCQABgEADgCQAFgEAIAAQAHgBAGADQAEAEABAGIAAATIACANQgGABgBgBQgBAAgCgEQgIAFgFAAIgCAAgAgGAEQgFABAAAEQgBAFAEABQAIADAFgFQAGgDgBgJg");
	this.shape_47.setTransform(22.7,-1.1,0.428,0.428,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#224659").s().p("AgEAXQgGAAgEgDQgEgDgBgFQgBgMANgBIANgCIADgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQABgFgDgCQgEgDgFABQgGABgDAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEgCQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAIAAgCQACgEADgCQAFgEAHAAQAIgBAFADQAFAEAAAGIAAATQAAAHACAGQgFABgCgBIgCgEQgIAFgGAAIgBAAgAgFAEQgGABAAAFQAAAEAGACQAFACAGgFQAFgEgBgIg");
	this.shape_48.setTransform(58.2,-1.1,0.428,0.428,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#224659").s().p("AgGAXQgIAAgDgGQgEgGAEgHQADgEAIgBIAMgDQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgEgCgCQgDgEgGABQgIAAgBAFQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAgDAEgCQAEgEAIAAQAIgBAFAEQAFADAAAGIABAVQAAAGABAFQgFABgCgBIgCgFQgIAGgHAAIgCAAgAgFAEQgGABAAAFQAAAEAGACQAFACAFgFQAGgEgBgIIgPADg");
	this.shape_49.setTransform(31.9,-1.1,0.428,0.428,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#224659").s().p("AgEAXQgOAAgBgLQgBgMANgBIANgCQAEgBAAgCQABgEgDgDQgEgDgFABQgGABgDAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgEADgCQAFgEAHAAQAIgBAFADQAFADAAAHIAAATQAAAHACAGQgGABgBgBQgBAAgBgFQgIAGgGAAIgBAAgAgFAEQgFABgBAEQAAAFAEABQAHADAGgFQAFgEgBgIg");
	this.shape_50.setTransform(18.5,-1.1,0.428,0.428,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#224659").s().p("AgSAdIAAg3QAAgBAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAFAAgBAEIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAFgHAHABQAJAAAEAIQAEAGAAAJQAAAIgEAGQgFAHgIABQgFABgHgGIAAASQAAAEgFAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAgAgIgSQgDAEAAAIIABAGQACAHAIABQAHAAADgIQADgIgDgIQgDgGgGgBIgBAAQgEAAgEAFg");
	this.shape_51.setTransform(44.5,-0.8,0.428,0.428,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#224659").s().p("AgSAcIAAg1QAAgFADAAQAFAAgBAFIAAACQAGgHAFAAQAMgCAFANQAEALgDAKQgDAJgJADQgIAEgIgIIAAASQAAAEgFAAQgDAAAAgEgAgIgSQgDAEAAAIIABAGQADAHAHABQAHAAADgHQAEgHgEgKQgDgGgGgBIgBAAQgEAAgEAFg");
	this.shape_52.setTransform(42.5,-0.8,0.428,0.428,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#224659").s().p("AgRAQQgCgHACgJQACgKAJgEQAJgDAIAIIAAgTQAAgDAEAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAA2QAAAFgDgBQgFAAABgEIAAgBQgFAGgGAAIgBABQgNAAgEgQgAAAgHQgHABgCAGQgBACAAAFQAAAGABADQAEAHAFABQAHAAADgHQAFgKgFgIQgDgGgGAAIgBAAg");
	this.shape_53.setTransform(49.3,2.3,0.428,0.428,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#224659").s().p("AgHAdQgDgBgDgEQgFgGAAgKQAAgJAFgGQAFgHAHAAQAFAAAIAGIAAgTQAAgBAAgBQAAAAAAgBQABAAABAAQABAAABAAQABAAAAAAQABAAABAAQAAABAAAAQAAABAAABIAAA5QAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAAAgEIAAgCQgGAGgGAAQgDAAgEgCgAAAgHQgFAAgEAHIgBAIQAAAGACADQADAHAFAAQAIAAADgHQAEgKgFgHQgCgHgHAAIgBAAg");
	this.shape_54.setTransform(29.4,2.3,0.428,0.428,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#224659").s().p("AgfATIAAgkQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQAGABgBADIAAABIADgDQADgDAEAAIAOABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABABIALAfIALgcIADgFQABgBAFAAIAAAEIgPAlQgBADgEAAQgEAAgBgDIgNgoIgBADQgCAFgEgCQgDgBgCACQgDABgBAEIgBAJIAAASQAAAEgEAAIgBAAQgDAAAAgEg");
	this.shape_55.setTransform(40.8,2.6,0.428,0.428,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#224659").s().p("AABAgQgXAAgEgZQgBgKADgKQAFgOAQgDQANgDAJAJIAFAGQACAEgBABQAAABgFABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgGgNgLACQgNABgDANQgDALAEALQAEAMAMAAQAMAAAFgNIAAgCIABgBIAHACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACQgFASgSAAIgCAAg");
	this.shape_56.setTransform(36.3,-1.5,0.428,0.428,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#224659").s().p("AgGAfQgKgEgBgIQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAFABACADQAEAFAIgDQAHgBAAgHIAAgGQgJAHgIgEQgJgDgDgKQgCgKAEgJQAEgJAJgCQAGgCAIAHIABAAIAAgDQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAFAAAAAFIgBAkQAAANgHAFQgFAEgHAAIgGgBgAAAgYQgGAAgEAJQgCAIADAHQADAGAGAAQAIAAADgGQABgCAAgGIgBgIQgDgIgHAAIgBAAg");
	this.shape_57.setTransform(16.5,-0.7,0.428,0.428,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#224659").s().p("AAYAXQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgZQAAgJgHAAQgJgBgCAJIgBAFIAAAVQABADgEAAQgDAAAAgDIAAgZQAAgIgGgBQgIgCgEAJIAAAbQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDAAQgBAAAAAAQgBAAgBgBQAAAAAAgBQAAAAAAgBIAAgmQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIADAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAGgHAJAAQAHABACAHQAGgIAHAAQAOgBABAPIAAAdQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDAAg");
	this.shape_58.setTransform(11.7,-1.1,0.428,0.428,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#224659").s().p("AgXAOQgBgEACgBQAGgCABAGQACAJAKACQAKACAGgGQAEgDgBgEQgBgEgEgDIgOgFIgJgBQgJgFAAgIQAAgKAIgEQANgIAOAIQAHADABAJQABABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgDgDgCQgJgEgIADQgFADAAAGQAAAFAGABIAWAHQAJADAAAJQABAJgHAGQgHAFgLAAQgTgBgEgRg");
	this.shape_59.setTransform(45.8,2.2,0.428,0.428,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#224659").s().p("AAAAgQgTAAgEgSQgBgEACgBQAGgBABAFQACAGAGADQAFADAGgBIAGgBQAGgDAAgHQAAgFgHgDIgVgFQgJgEAAgJQgBgKAJgEQANgIAOAIQAHADABAJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAgDgEgDQgJgEgIAEQgFACAAAGQAAAFAGACIANAFIAJACQAJADABAJQAAAKgIAFQgHAFgJAAIgBAAg");
	this.shape_60.setTransform(49,-1.5,0.428,0.428,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#224659").s().p("AgDAZIACgBQAEABAEgFQADgEgDgGIgMgjIgCgDIgBADQgBABAAABQAAAAgBAAQAAABgBAAQgBgBAAAAQgHgDgDAIIgBALIAAASQAAADgEAAQgFAAABgDIAAgmQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIADAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAADQAGgKAKAFIAFgBQADAAACAFIALAdIAKgcIADgFQABgBAGAAIAAACIgTAwIgEAHQgEAFgGAAQgFgBACgGg");
	this.shape_61.setTransform(21.6,3,0.428,0.428,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#224659").s().p("AAZAfQgDAAAAgDIAAguIgBAAIgRAvQAAACgEAAQgDAAAAgCIgRgvIAAAuQAAADgEAAQgEAAgBgDIAAg3QAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAHAAABABQACABACAGIANArIAQguQACgFAFAAIAGABQABABAAAFIAAAzIgBADIgEAAg");
	this.shape_62.setTransform(25.3,-1.5,0.428,0.428,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#54A4DA").s().p("AAAA2Ig1g2IA1gzIAAgBIA1A0Ig1A2g");
	this.shape_63.setTransform(-6,-12.8,0.428,0.428,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#54A4DA").s().p("AgBA0IgygyQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAygzQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAABIAzAzIABAAIgBACIgyAyIgCABIgBgBg");
	this.shape_64.setTransform(-13.1,-12.8,0.428,0.428,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F48220").s().p("Ah9BjIABgCIDEjEIA2A2IiNCNQgEAEgFAAg");
	this.shape_65.setTransform(-0.6,-8.5,0.428,0.428,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D4255").s().p("Ah/hjQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIBlAAQADAAACACICSCRIgBACIg0A0g");
	this.shape_66.setTransform(-0.5,-17.2,0.428,0.428,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F48220").s().p("ABACEIg2g2QAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIAVgVQADgDgDgDIixiyQAAAAABAAQAAAAAAAAQABAAABAAQAAgBABAAIBkAAQADABACACICwCwQADADgDADIhOBOg");
	this.shape_67.setTransform(-5.5,-18.5,0.428,0.428,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D4255").s().p("AjMDDIgDgBIExkvQADgEgDgEIgXgWIA1g2IABAAIBNBMQADADgDAEIkvEuQgCACgDABg");
	this.shape_68.setTransform(-2.8,-4.5,0.428,0.428,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#55A5DB").s().p("AhBC1Qg2gageg1QgbgxAAg+QABgmAQgkQARgmAhgdQAtgpA5gGQBmgMBFBRQAEAFAAABQAAACgFAEIg6AwQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgWgogwgFQgcgDgWALQggAPgOAlQgWA9AdA6QAWAsAxAGQAzAFAhgjQAIgHAGgLQAAgBAAgBQABAAAAAAQABgBABABQAAAAABAAIA9ArQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgyBHhRANQgQADgQAAQgoAAgngTg");
	this.shape_69.setTransform(27.8,-12.8,0.428,0.428,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#54A4DA").s().p("AiTDHQgFAAAAgFIAAmDIABgEIAEgBICHAAQA+ABAuAeQAtAfAKA6QAGAugNAjQgRAwg0AYQgfAOgqAFQgVADgbgBQgEAAAAAEIAABeQAAAFgEAAIhdAAgAg0hxIAAB7QAAAFADAAQAkgCASgFQAagIALgQQAKgUgCggQgBgNgGgKQgJgRgYgFQgPgEgqgBQgFAAAAAFg");
	this.shape_70.setTransform(12.4,-12.8,0.428,0.428,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#54A4DA").s().p("AhaDJIhVAAQgFAAAAgEIAAmNIEQDYQABgBAAgEIAAjMIAAgEIAFgBIBPAAQAEAAAAAEIAAGLIkHjPIgDgCQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIABDJQAAAFgEAAIgBAAg");
	this.shape_71.setTransform(60.5,-12.9,0.428,0.428,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#55A5DB").s().p("AimDGQgBgBAAgFIAAmCQAAgEAFAAICbAAQA6ABAwAnQAuAlAQBDQAIAjgBAmQgBAzgWAmQgaAtgzAYQgqASgvADIiLABQgFAAgBgBgAhDhyQgGAAAAAFIAADZQAAAEAEABQAgAHAbgGQAwgKATgtQAQgogHgrQgIg5g1gWQgcgLgkAAIgIAAg");
	this.shape_72.setTransform(43.7,-12.8,0.428,0.428,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6E6E6").s().p("ApAEcQgNAAgKgJQgMgKAAgNIAAn3QAAgNAMgKQAKgJANAAISJAAQAMAAAIAJQAGAJAAAOIAAH3QAAAOgGAJQgIAJgMAAg");
	this.shape_73.setTransform(25.1,-10.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F7931E").s().p("AgeAUQgHAAgGgHQgFgFgBgIIAAAAQABgHAFgGQAGgGAHAAIA8AAQAIAAAFAGQAHAGgBAHIAAAAQABAIgHAFQgFAHgIAAg");
	this.shape_74.setTransform(87.5,-40.4,0.428,0.428);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F7931E").s().p("AgdAUQgJAAgFgHQgFgFAAgIIAAAAQAAgHAFgGQAFgGAJAAIA7AAQAIAAAFAGQAHAGAAAHIAAAAQAAAIgHAFQgFAHgIAAg");
	this.shape_75.setTransform(-36.2,-40.4,0.428,0.428);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#519FD5").s().p("A34LpIAA3RMAvyAAAIAAXRg");
	this.shape_76.setTransform(25.9,-10.7,0.428,0.428);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE7D2B").s().p("AnKBPIAAieIOWAAIAACeg");
	this.shape_77.setTransform(-19.9,28.1,0.428,0.428);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#519FD5").s().p("AgtAUQgIAAgFgGQgGgFABgIIAAgCQgBgHAGgFQAFgFAIgBIBbAAQAHABAGAFQAFAFABAHIAAACQgBAIgFAFQgGAGgHAAg");
	this.shape_78.setTransform(-79.2,9.2,0.428,0.428);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CCCCCC").s().p("AhwBxQgvgvABhCQgBhBAvgvQAvgvBBAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAQhBAAgvgvg");
	this.shape_79.setTransform(50.6,32,0.428,0.428);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhkAAhJhIg");
	this.shape_80.setTransform(50.6,32,0.428,0.428);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CCCCCC").s().p("AhwBxQgugvgBhCQABhBAugvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAvQguAvhCAAQhBAAgvgvg");
	this.shape_81.setTransform(24.9,32,0.428,0.428);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AisCuQhJhIAAhmQAAhlBJhIQBHhIBlAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhlAAhHhIg");
	this.shape_82.setTransform(24.9,32,0.428,0.428);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CCCCCC").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgvgvg");
	this.shape_83.setTransform(-55.9,32,0.428,0.428);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhkAAhJhIg");
	this.shape_84.setTransform(-55.9,32,0.428,0.428);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#519FD5").s().p("AmHC+QAFgYASgkQAkhHBDg7QDXi+G0ABQAFBGABBMQACCWgTAhQgGAMgJANQgTAZgSAAg");
	this.shape_85.setTransform(-62.3,-27.2,0.428,0.428);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#519FD5").s().p("AjhAjQgOAAgKgLQgKgJAAgOIAAgBQAAgOAKgJQAKgLAOABIHCAAQAOgBALALQAJAJABAOIAAABQgBAOgJAJQgLALgOAAg");
	this.shape_86.setTransform(-80.7,31.3,0.428,0.428);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EAB998").s().p("AAACfQgHABgGgHQgGgFAAgIIAAkXQAAgJAGgFQAGgGAHABIAAAAQAIgBAFAGQAHAFAAAJIAAEXQAAAIgHAFQgFAHgIgBg");
	this.shape_87.setTransform(-89.7,20.4,0.428,0.428);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("Ah8EwQAAkCB8jIQA+hkA+gxQgPAyhVChQhSC0gXDIQgBAMgVADIgPABIgGAAg");
	this.shape_88.setTransform(-84.4,-5.7,0.428,0.428);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7931E").s().p("Ag6AiIAAhDIBYAAQAOAAAIAJQAHAJABAPIAAAEQAAAegeAAg");
	this.shape_89.setTransform(-79.4,27,0.428,0.428);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgFAiQgOAAgJgKQgKgJAAgOIAAgBQAAgOAKgJQAJgKAOAAIAtAAIAABDg");
	this.shape_90.setTransform(-83.7,27,0.428,0.428);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AkvA0QBEjjCAhXIHFAAIAAFRQgQAbheAlQi+BLmHAxQAIhhAihyg");
	this.shape_91.setTransform(-66.8,-4.7,0.428,0.428);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE7D2B").s().p("An+I6IABotIB5lwICBjWIK7AAQAfABAUAZQAUAZAAAgIAAMvIlxAAQgNABgUAFQgoAIggAVQhoA+AACQg");
	this.shape_92.setTransform(-67.9,5.4,0.428,0.428);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3F3F3F").s().p("A/nC4IAAlwIQ4AAIBNA9MAgXgALIAAA8IM0AAIAABYIs0AAIAACqg");
	this.shape_93.setTransform(-2.6,24,0.428,0.428);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#333333").ss(3,1,1).p("Ag4lEIBxAbIAAJu");
	this.shape_94.setTransform(-46.1,3.9,0.428,0.428);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3F3F3F").s().p("AhLBAQgGAAgEgEQgDgEAAgGIAAhjQAAgGADgFQAEgEAGAAICWAAQAGAAAEAEQAFAFAAAGIAABjQAAAGgFAEQgEAEgGAAg");
	this.shape_95.setTransform(88,29.6,0.428,0.428);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C1272D").s().p("AgtAUQgIgBgFgGQgFgFAAgIIAAAAQAAgHAFgGQAFgFAIgBIBaAAQAIABAGAFQAFAGAAAHIAAAAQAAAIgFAFQgGAGgIABg");
	this.shape_96.setTransform(87.7,24.6,0.428,0.428);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D9D9D9").s().p("AgnBoIhIjPIDfAAIAADPg");
	this.shape_97.setTransform(86.6,23.1,0.428,0.428);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE7D2B").s().p("AiDAsQgSAAgMgMQgNgNABgSIAAgBQgBgSANgNQAMgNASAAIEGAAQASAAANANQAMANAAASIAAABQAAASgMANQgNAMgSAAg");
	this.shape_98.setTransform(71.9,29.6,0.428,0.428);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E6E6E6").s().p("AgOA2IAAhsIAdAAIAABsg");
	this.shape_99.setTransform(75.8,26.1,0.428,0.428);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E6E6E6").s().p("AgOA2IAAhsIAdAAIAABsg");
	this.shape_100.setTransform(67.6,26.1,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-42.5,183.6,85.2);


(lib._7kovsh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgYIABgIQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAIQAAAYgRAQQgRARgYAAg");
	this.shape.setTransform(-0.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgXARgRQARgRAYAAIG1AAQAYAAARARQARARAAAXIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_1.setTransform(-0.1,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_2.setTransform(-0.1,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgWARgRQARgSAYAAIG1AAQAYAAARASQARARAAAWIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_3.setTransform(-0.1,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgYIABgIQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAIQAAAYgRAQQgRARgYAAg");
	this.shape_4.setTransform(-0.1,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgXARgRQARgRAYAAIG1AAQAYAAARARQARARAAAXIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_5.setTransform(-0.1,22.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAWAQAMQARAOAVAAIG1AAQAVAAARgOQAQgMADgWIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_6.setTransform(-0.1,36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F89F4D").s().p("AjaA6QgVgBgRgOQgQgOgDgVIgBgIQAAgWARgRQARgRAYgBIG1AAQAYABARARQARARAAAWIgBAIQgDAVgQAOQgRAOgVABg");
	this.shape_7.setTransform(-0.1,34.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgYIABgIQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAIQAAAYgRAQQgRARgYAAg");
	this.shape_8.setTransform(-0.1,-44.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgXARgRQARgRAYAAIG1AAQAYAAARARQARARAAAXIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_9.setTransform(-0.1,-47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_10.setTransform(-0.1,-32.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgWARgRQARgSAYAAIG1AAQAYAAARASQARARAAAWIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_11.setTransform(-0.1,-35.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAWAQAMQARAOAVAAIG1AAQAVAAARgOQAQgMADgWIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_12.setTransform(-0.1,-21.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F89F4D").s().p("AjaA6QgVgBgRgOQgQgOgDgVIgBgIQAAgWARgRQARgRAYAAIG1AAQAYAAARARQARARAAAWIgBAIQgDAVgQAOQgRAOgVABg");
	this.shape_13.setTransform(-0.1,-23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_14.setTransform(-0.1,-9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgWARgRQARgSAYAAIG1AAQAYAAARASQARARAAAWIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_15.setTransform(-0.1,-12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#747575").s().p("AkQBFIAAiJIIhAAIAACJg");
	this.shape_16.setTransform(0.5,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-52.8,55.7,105.6);


(lib._7inые = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtiNjQlolnAAn8QAAn7FoloQFnlnH7AAQH8AAFnFnQFoFoAAH7QAAH8loFnQlnFon8AAQn7AAlnlog");
	mask.setTransform(8,9.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgYIABgIQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAIQAAAYgRAQQgRARgYAAg");
	this.shape.setTransform(-33.4,35.1,0.509,0.509,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgXARgRQARgRAYAAIG1AAQAYAAARARQARARAAAXIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_1.setTransform(-33.4,33.8,0.509,0.509,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_2.setTransform(-33.4,41,0.509,0.509,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgWARgRQARgSAYAAIG1AAQAYAAARASQARARAAAWIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_3.setTransform(-33.4,39.7,0.509,0.509,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgYIABgIQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAIQAAAYgRAQQgRARgYAAg");
	this.shape_4.setTransform(-33.4,46.9,0.509,0.509,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgXARgRQARgRAYAAIG1AAQAYAAARARQARARAAAXIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_5.setTransform(-33.4,45.6,0.509,0.509,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAWAQAMQARAOAVAAIG1AAQAVAAARgOQAQgMADgWIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_6.setTransform(-33.4,52.8,0.509,0.509,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F89F4D").s().p("AjaA6QgVgBgRgOQgQgOgDgVIgBgIQAAgWARgRQARgRAYgBIG1AAQAYABARARQARARAAAWIgBAIQgDAVgQAOQgRAOgVABg");
	this.shape_7.setTransform(-33.4,51.5,0.509,0.509,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgYIABgIQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAIQAAAYgRAQQgRARgYAAg");
	this.shape_8.setTransform(-33.4,11.5,0.509,0.509,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgXARgRQARgRAYAAIG1AAQAYAAARARQARARAAAXIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_9.setTransform(-33.4,10.2,0.509,0.509,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_10.setTransform(-33.4,17.4,0.509,0.509,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgWARgRQARgSAYAAIG1AAQAYAAARASQARARAAAWIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_11.setTransform(-33.4,16.1,0.509,0.509,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAWAQAMQARAOAVAAIG1AAQAVAAARgOQAQgMADgWIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_12.setTransform(-33.4,23.2,0.509,0.509,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F89F4D").s().p("AjaA6QgVgBgRgOQgQgOgDgVIgBgIQAAgWARgRQARgRAYAAIG1AAQAYAAARARQARARAAAWIgBAIQgDAVgQAOQgRAOgVABg");
	this.shape_13.setTransform(-33.4,22,0.509,0.509,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB7425").s().p("AjaAhQgYAAgRgRQgRgQAAgXIABgJQADAVAQANQARAOAVAAIG1AAQAVAAARgOQAQgNADgVIABAJQAAAXgRAQQgRARgYAAg");
	this.shape_14.setTransform(-33.4,29.1,0.509,0.509,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F89F4D").s().p("AjaA6QgVAAgRgPQgQgOgDgVIgBgIQAAgWARgRQARgSAYAAIG1AAQAYAAARASQARARAAAWIgBAIQgDAVgQAOQgRAPgVAAg");
	this.shape_15.setTransform(-33.4,27.9,0.509,0.509,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#519FD5").s().p("ADGCZQAYhNgdhJQgPgmgegeQgdgegngQQgngPgpABQgoABgnARQgnASgeAfQgeAfgQAnQgMAdgEAgIgmgPQAGggALgbQAphkBggrQBegrBgAmQBbAlAoBdQAnBaggBhg");
	this.shape_16.setTransform(-61.3,58.1,0.509,0.509,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#519FD5").s().p("AjwChQgHgeAAghQAAhqBJhMQBJhNBlAAQBjAABHBGQBHBGAHBmIgoAAQgCgmgQgkQgQgjgagbQgegggmgRQgmgQgqAAQgoAAgmAQQgnARgdAfQgeAfgQAnQgQAoAAAsQAAAhAJAeg");
	this.shape_17.setTransform(-102.2,57.9,0.509,0.509,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE7D2B").s().p("AC5ByQgOgOAAgUQAAgUAOgOQAOgOAUAAQAUAAAOAOQAOAOAAAUQAAAUgOAOQgOAOgUgBQgUABgOgOgAjeByQgOgOAAgUQAAgUAOgOQAOgOAUAAQAUAAAOAOQAOAOAAAUQAAAUgOAOQgOAOgUgBQgUABgOgOgAhJBqIgFgxIgbg/IgogdIgsAAIhNATQAAhBAQgdQAFgJAGgFIAFgCIAgAAIAjAAIAkAAIAHAAIAqBWIDQAAIArAAIAhAAIAeAAIAFAAIgFABIhXAYIgnAzIgCBGg");
	this.shape_18.setTransform(-83.4,54.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#519FD5").s().p("AB5BqIhEg7QgEgDABgGQAAgGAFgGIAHgIIg2gsIgVAaQgCADgEAAQgFABgDgDIgDgBQgCgDgBgEQAAgDACgDIA1hAQACgDAEAAQAEAAACACIAEADQADADABAEQgBAEgCADIgXAbIA2AsIAGgHQAFgEAFgBQAGgBAEADIA+A0IAVAsIgYAKgAiBBqIgqhWIgIAAIAAh0QABgJALAAIAeAAQAFAAAFACQAEACAAAFIAACDIBVAAQAdACAcALQA1ATAHAng");
	this.shape_19.setTransform(-78.6,39.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747575").s().p("AgWEwQgbgbAAgnQAAgYALgUQALgUATgNQAVgQAdAAQAmAAAcAbQAbAcAAAmQAAAPgEAMQgJAdgYASQgZATgfAAQgnAAgZgbgAAIDMQgMAOAAAUQAAAUAMAOQAOAOAUAAQAUAAAOgOQAOgOAAgUQAAgUgOgOQgOgOgUAAQgUAAgOAOgAmvEwQgbgbAAgnQAAgYALgUQALgUATgNQAYgQAcAAQAmAAAcAbQAbAcAAAmQAAAPgEAMQgJAdgYASQgZATgfAAQgmAAgcgbgAmPDMQgOAOAAAUQAAAUAOAOQAOAOAUAAQAUAAAOgOQAOgOAAgUQAAgUgOgOQgOgOgUAAQgUAAgOAOgAC0DfIAAhIIEXAAIAABIgACdDfIAAgBQgEgYgKgSQgIgPgMgIIAAnnIA4AAIAAHiIABAAIAABHgAA3B2IAFgCIgFAAIgFgKIgWgsQg8iAgdhDQgTgsgZgSQgHgFgHgCIgHgBIAAAAIAAABIi1AAQgUAAgHAIQgJAJABAPIgCABIAADHIgjAAIAAjGQAAgNABgIQAEgTALgNQAUgWAkAAIC1AAQASAAAVANQAmAYAYA6QAhBSBcC9IgoADIgFgIg");
	this.shape_20.setTransform(-65.7,38.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3F3F3F").s().p("AAQkSMgiDAKTIAAhfMAiDgKiMAhlAKWIAABrg");
	this.shape_21.setTransform(8.5,-33.3,0.506,0.506,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E6E6").s().p("EghfAGrIAAhbIgUAGIAAheMAiDgKiMAhlAKVIAABrIgVgGIAABbg");
	this.shape_22.setTransform(8.5,-31.2,0.506,0.506,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_23.setTransform(50.1,41.7,0.506,0.506,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_24.setTransform(50.1,40.8,0.506,0.506,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_25.setTransform(50.1,45.7,0.506,0.506,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_26.setTransform(50.1,44.8,0.506,0.506,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_27.setTransform(50.1,49.6,0.506,0.506,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_28.setTransform(50.1,48.8,0.506,0.506,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_29.setTransform(50.1,53.6,0.506,0.506,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_30.setTransform(50.1,52.8,0.506,0.506,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_31.setTransform(69.6,41.7,0.506,0.506,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_32.setTransform(69.6,40.8,0.506,0.506,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_33.setTransform(69.6,45.7,0.506,0.506,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_34.setTransform(69.6,44.8,0.506,0.506,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_35.setTransform(69.6,49.6,0.506,0.506,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_36.setTransform(69.6,48.8,0.506,0.506,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_37.setTransform(69.6,53.6,0.506,0.506,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_38.setTransform(69.6,52.8,0.506,0.506,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_39.setTransform(89.2,41.7,0.506,0.506,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_40.setTransform(89.2,40.8,0.506,0.506,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_41.setTransform(89.2,45.7,0.506,0.506,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_42.setTransform(89.2,44.8,0.506,0.506,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_43.setTransform(89.2,49.6,0.506,0.506,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_44.setTransform(89.2,48.8,0.506,0.506,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_45.setTransform(89.2,53.6,0.506,0.506,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_46.setTransform(89.2,52.8,0.506,0.506,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_47.setTransform(50.1,22,0.506,0.506,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_48.setTransform(50.1,21.1,0.506,0.506,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_49.setTransform(50.1,26,0.506,0.506,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_50.setTransform(50.1,25.1,0.506,0.506,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_51.setTransform(50.1,29.9,0.506,0.506,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_52.setTransform(50.1,29.1,0.506,0.506,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_53.setTransform(50.1,34,0.506,0.506,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_54.setTransform(50.1,33.1,0.506,0.506,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_55.setTransform(69.6,22,0.506,0.506,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_56.setTransform(69.6,21.1,0.506,0.506,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_57.setTransform(69.6,26,0.506,0.506,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_58.setTransform(69.6,25.1,0.506,0.506,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_59.setTransform(69.6,29.9,0.506,0.506,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_60.setTransform(69.6,29.1,0.506,0.506,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_61.setTransform(69.6,34,0.506,0.506,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_62.setTransform(69.6,33.1,0.506,0.506,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_63.setTransform(89.2,22,0.506,0.506,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_64.setTransform(89.2,21.1,0.506,0.506,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_65.setTransform(89.2,26,0.506,0.506,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_66.setTransform(89.2,25.1,0.506,0.506,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_67.setTransform(89.2,29.9,0.506,0.506,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_68.setTransform(89.2,29.1,0.506,0.506,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_69.setTransform(89.2,34,0.506,0.506,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_70.setTransform(89.2,33.1,0.506,0.506,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#747575").s().p("ArPAZIAAgxIWeAAIAAAxg");
	this.shape_71.setTransform(70,36.3,0.506,0.506,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_72.setTransform(50.1,2.3,0.506,0.506,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_73.setTransform(50.1,1.4,0.506,0.506,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_74.setTransform(50.1,6.3,0.506,0.506,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_75.setTransform(50.1,5.4,0.506,0.506,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_76.setTransform(50.1,10.2,0.506,0.506,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_77.setTransform(50.1,9.4,0.506,0.506,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_78.setTransform(50.1,14.2,0.506,0.506,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_79.setTransform(50.1,13.4,0.506,0.506,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_80.setTransform(69.6,2.3,0.506,0.506,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_81.setTransform(69.6,1.4,0.506,0.506,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_82.setTransform(69.6,6.3,0.506,0.506,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_83.setTransform(69.6,5.4,0.506,0.506,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_84.setTransform(69.6,10.2,0.506,0.506,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_85.setTransform(69.6,9.4,0.506,0.506,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_86.setTransform(69.6,14.2,0.506,0.506,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_87.setTransform(69.6,13.4,0.506,0.506,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_88.setTransform(89.2,2.3,0.506,0.506,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_89.setTransform(89.2,1.4,0.506,0.506,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_90.setTransform(89.2,6.3,0.506,0.506,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_91.setTransform(89.2,5.4,0.506,0.506,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_92.setTransform(89.2,10.2,0.506,0.506,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_93.setTransform(89.2,9.4,0.506,0.506,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_94.setTransform(89.2,14.2,0.506,0.506,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_95.setTransform(89.2,13.4,0.506,0.506,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_96.setTransform(50.1,61.8,0.506,0.506,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_97.setTransform(50.1,61,0.506,0.506,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_98.setTransform(50.1,65.8,0.506,0.506,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_99.setTransform(50.1,64.9,0.506,0.506,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_100.setTransform(50.1,69.8,0.506,0.506,0,0,180);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_101.setTransform(50.1,68.9,0.506,0.506,0,0,180);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_102.setTransform(69.6,61.8,0.506,0.506,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_103.setTransform(69.6,61,0.506,0.506,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_104.setTransform(69.6,65.8,0.506,0.506,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_105.setTransform(69.6,64.9,0.506,0.506,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_106.setTransform(69.6,69.8,0.506,0.506,0,0,180);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_107.setTransform(69.6,68.9,0.506,0.506,0,0,180);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_108.setTransform(89.2,61.8,0.506,0.506,0,0,180);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_109.setTransform(89.2,61,0.506,0.506,0,0,180);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_110.setTransform(89.2,65.8,0.506,0.506,0,0,180);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_111.setTransform(89.2,64.9,0.506,0.506,0,0,180);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_112.setTransform(89.2,69.8,0.506,0.506,0,0,180);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_113.setTransform(89.2,68.9,0.506,0.506,0,0,180);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#747575").s().p("ArPAYIAAgvIWeAAIAAAvg");
	this.shape_114.setTransform(70,56,0.506,0.506,0,0,180);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#747575").s().p("ArPAZIAAgwIWeAAIAAAwg");
	this.shape_115.setTransform(70,16.6,0.506,0.506,0,0,180);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E6E6E6").s().p("AgXLPIAA2eIAvAAIAAWeg");
	this.shape_116.setTransform(38.8,34.5,0.506,0.506,0,0,180);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E6E6E6").s().p("AgYLPIAA2eIAxAAIAAWeg");
	this.shape_117.setTransform(101.1,34.5,0.506,0.506,0,0,180);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E6E6E6").s().p("AgxNvIAA7dIBiAAIAAbdg");
	this.shape_118.setTransform(-97.6,26.4,0.506,0.506,0,0,180);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E6E6E6").s().p("AgrNvIAA7dIBYAAIAAbdg");
	this.shape_119.setTransform(114.8,26.4,0.506,0.506,0,0,180);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3F3F3F").s().p("EgguAMfIAA4+MBBdAAAIAAY+g");
	this.shape_120.setTransform(8.5,30.5,0.506,0.506,0,0,180);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1D4255").s().p("EgqaANhIAA7AMBU0AAAIAAbAg");
	this.shape_121.setTransform(5.9,112.2,0.506,0.506,0,0,180);

	this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-52.8,245.5,185.3);


(lib._6inwhanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape.setTransform(-13,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape_1.setTransform(13,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231207").s().p("AgmAKIAAgSIBOAAIAAASg");
	this.shape_2.setTransform(0,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231207").s().p("AgmAJIAAgRIBOAAIAAARg");
	this.shape_3.setTransform(0,-12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_4.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.5,28,27);


(lib._6incar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#224659").s().p("AgCAAQgBgCADgBQAEAAAAADQAAAEgEAAQgEAAACgEg");
	this.shape.setTransform(-6.1,-6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#224659").s().p("AAAADQAAABAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIAAgCQgBgDADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABACQAAABgBABQAAAAAAABQAAAAgBAAQgBABAAAAIgBgBg");
	this.shape_1.setTransform(32.9,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#224659").s().p("AAAAEQgCAAAAgEQgBgDADAAQAEAAAAADQAAAEgEAAIAAAAg");
	this.shape_2.setTransform(52.9,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBABAAIAAgnQgBgDADABQAEAAAAACIAAAnQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_3.setTransform(52.9,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBABAAIAAgnQgBgDADABQAEAAAAACIAAAnQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_4.setTransform(-6.1,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgmQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQADAAABACIAAAmQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_5.setTransform(33,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D4255").s().p("AgCAcQABgcgBgbQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAAAAAIACAAIABADIAAA3QAAADgDAAQgCAAAAgDg");
	this.shape_6.setTransform(28.1,-3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#224659").s().p("AgHAXQgEAAAAgDIABgmQgBgEAEABQABAAABAAQABAAAAABQAAAAABAAQAAABAAAAIAAADQADgIAKADQABAAAAABQAAAAABABQAAAAAAABQAAABgBAAIgBADQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgDgCgDACQgBABgBAEIgCAJIABAUQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_7.setTransform(-26.7,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D4255").s().p("AgDAcIAAg3QAAgDADAAQAEAAAAADIAAA3QAAADgEAAQgDAAAAgDg");
	this.shape_8.setTransform(-34.6,-3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D4255").s().p("AAAAfQgDAAAAgDIAAg3QAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIABAAQAEAAAAADIAAA3QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_9.setTransform(46.9,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQADABgBgDIAAgCQgBgJAHgCIAAAMQAAAEAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAAAADIAAAVQAAAHAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABQgIAAAAgMg");
	this.shape_10.setTransform(-8.2,-3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgEADAAQADABgBgDIAAgCQAAgGABgBIAFgEIAAAMQAAAEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEgBAAAEIAAAWQAAAGAFgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgEABQgHAAgBgMg");
	this.shape_11.setTransform(111.2,-3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAABAAQAEAAgBgEIAAgBQAAgGABgBIAFgEIAAAMQAAAEAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAAAAEIAAAVQAAAGAGgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAADQAAAAAAABQABAAgBABQAAAAgBAAQAAAAgBAAIgDABQgJAAAAgMg");
	this.shape_12.setTransform(68.3,5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgEgDABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgDQAAgBAAAAQABgBAAgBQAAAAABAAQAAAAABAAQADAAAAgEIAAgBQgCgIAIgDIAAAMQAAABAAABQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBAAAGIAAATQAAAHAFgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAADQACACgEAAIgEABQgIAAAAgMg");
	this.shape_13.setTransform(-21.9,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#224659").s().p("AgBAfIgDAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgeQAAgBAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgEABAAgEQAAgEAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBQgBgQAQACQABAAAAAAQABAAAAAAQABABAAAAQAAABgBAAIAAADQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFgBgCACQgCACABAFQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIADAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAABQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgEAAgBABIAAAFIAAAcQAAABAAAAQAAABgBABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_14.setTransform(-34.4,5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#224659").s().p("AgBAXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgQgpIAAgBQAFgBACABIADAGIAJAbIAKgbQABgFACgBIAHAAIgQApQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgBAAg");
	this.shape_15.setTransform(-16.5,-2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#224659").s().p("AABAXIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgQgpIAAgCIAFAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAKAfIAKgbIADgGQACgBAFABIAAACIgPAnQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_16.setTransform(-2.9,-2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#224659").s().p("AgQAMQgFgMAGgMQAFgMANABQALACAEAKIABACIgBABQgGACgBgCQgFgKgIAEQgIADAAALIABAIQADAIAGAAQAJAAACgIQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAIAEACQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQgDANgNABIgCAAQgLAAgFgMg");
	this.shape_17.setTransform(36.2,5.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#224659").s().p("AgQAYQAIABADgFQAEgEgDgHIgPgnIABAAIAGAAIADAGIAJAcIAKgcIADgGQACgBAFABIgUA2QgCAFgEACIgEABQgGAAAAgIg");
	this.shape_18.setTransform(31.3,-1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#224659").s().p("AAKAUIAAgaQgBgIgGgBQgJgCgCAJIgBAIIAAAUQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgmQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAFAAgBAEIAAACQAIgIAJACQAKADAAAJIABAfQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_19.setTransform(107.6,-2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgFAEQgEADAAAHIAAAWQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAQgDABAAgEQABgUgBgSQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAIADAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAADQAJgKAJAEQAIACACAIQABALgBAVQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_20.setTransform(75.8,-2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgFAEQgEADAAAGIAAAXQAAADgEAAQgEAAAAgDIAAglQAAgEADAAQAFAAgBAEIAAABQAIgIAKADQAIACACAJQABAKgBAVQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_21.setTransform(56.3,-2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#224659").s().p("AAKAUIAAgZQAAgHgFgCQgFgDgFAFQgEADAAAGIAAAWQAAAEgEAAQgEAAAAgEIAAglQAAgEADAAQAFABgBADIAAACQAJgIAJACQAJADABAJIAAAfQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_22.setTransform(-26.1,-2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgGAEQgDAEAAAGIAAAWQAAADgEAAQgEAAAAgDIAAglQAAgEADAAQAFAAgBAEIABABQAHgIAKADQAJACABAIIAAAgQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_23.setTransform(-31,-2.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#224659").s().p("AAKAUIAAgYQAAgIgFgCQgFgCgFAEQgEADAAAGIAAAWQAAAEgEAAQgEAAAAgEIAAgkQAAgFADAAQAFABgBAEIAAABQAJgIAJADQAJACAAAIIABAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_24.setTransform(50.5,5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#224659").s().p("AgRAIIAAgbQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAEAAAAADIAAAZQAAAJAIABQACAAAEgCQAEgDAAgEIABgZQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAmQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgEQgHAIgGAAQgPgBAAgOg");
	this.shape_25.setTransform(60.2,6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#224659").s().p("AgIAWQgJgCAAgKIAAgeQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIACAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAIAAAVIAAAEQAAAKAJABQAIAAABgKQABgFAAgTQAAgEAEAAQAEAAAAAEIAAAkQAAAEgDAAQgEAAAAgEIAAgDQgGAIgGAAIgHgBg");
	this.shape_26.setTransform(14.9,-2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#224659").s().p("AgRALIAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAEgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQAGALAJgFQAFgCgBgDQAAgEgEgBIgNgEQgJgBAAgJQAAgKAKgCQAHgDAIAEQAEABACAEQACAEgBABQgBABgEAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQgCgEgGgBQgEgBgDADQgEAFAHADIAPAFQAKACgDALQgCAGgGADQgEACgGAAQgOAAgDgNg");
	this.shape_27.setTransform(64.9,5.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#224659").s().p("AgUADIAAgDQAAgSAQgEQAIgCAIAFQAHAGABAKIAAAIQgCATgSAAQgSgBgCgUgAgLgGQgDAHADAHQAEAIAHAAQAGABAEgHQACgCABgIIgBgDQgBgLgLgBIAAAAQgIAAgDAJg");
	this.shape_28.setTransform(-31,5.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#224659").s().p("AAAAXQgRgBgCgRIgBgFQAAgSAQgEQAIgCAIAFQAIAFABALQABAGgCAFQgCAIgGAEQgFADgGAAIgBAAgAgLgGQgCAHADAHQADAIAHAAQAIAAAEgIIABgIIAAgEQgDgLgKAAIAAAAQgJAAgCAJg");
	this.shape_29.setTransform(-21.2,-2.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#224659").s().p("AgBAXQgHAAgFgFQgFgFgBgIIgBgFQAAgSAQgEQAIgCAIAFQAHAGABAKQACAEgCAIQgCAHgGAEQgGADgGAAIgBAAgAgLgGQgCAGACAIQADAIAIAAQAIAAADgIQACgEAAgEIgBgDQgBgLgLgBIAAAAQgJAAgCAJg");
	this.shape_30.setTransform(4.1,5.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#224659").s().p("AgBAYQgRgCgBgRIgBgFQAAgSAPgDQAIgEAIAGQAIAFABALQACAEgCAIQgCAHgGAEQgGAEgGAAIgBAAgAgLgGQgCAHACAHQADAIAIAAQAIAAADgIIACgIIgBgEQgCgLgKAAIAAAAQgIAAgDAJg");
	this.shape_31.setTransform(-0.7,5.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D4255").s().p("AgPAfQgFAAAAgDIAAg2QAAgEAEAAIAhAAQAEAAAAAEQAAAEgEgBIgZAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAVAAQADgBAAADQAAADgDAAIgVAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAAAWQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_32.setTransform(-5.7,5.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#224659").s().p("AAKAdIAAgaQAAgJgJAAQgJgBgBAKIAAAZQAAADgEAAQgEAAAAgDIAAg3QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADAAQAEAAAAAEIAAATQAJgJAIADQAIACACAIIAAAgQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_33.setTransform(44.6,-3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#224659").s().p("AAKAcIAAgZQAAgKgJAAQgJgBgBALIAAAYQAAAEgEAAQgEAAAAgEIAAg2QAAgDAEAAQAEgBAAAEIAAATQAJgIAIADQAJACABAIIAAAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgEAAIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_34.setTransform(-18.3,5.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#224659").s().p("AgSAJQgDgJADgHQAEgQAQABQAHAAAFAFQAFAFABAHQABAFgBABQAAABgHAAIgVAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQADAJAIACQAHABAFgGQACgEAGADQgEAOgQAAQgOgBgEgOgAgGgMQgEADAAADQgBABAAAAQABAAAAABQAAAAAAAAQABAAAAAAIATAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgCgJgKAAQgCAAgEADg");
	this.shape_35.setTransform(-13.5,5.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#224659").s().p("AgBAXQgQgBgCgSIAAgJQAEgSAQABQARABACARQABAEgBABQgBABgFAAIgXAAQgDgBABAEQABAJAKACQAHABAEgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGABQgFANgNAAIgDAAgAAAgPQgJAAgBAJQgBAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIASAAQAEABgBgEQgDgIgIAAIgBAAg");
	this.shape_36.setTransform(1.7,-2.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#224659").s().p("AgSAJQgDgJADgHQAEgQAPABQAHAAAGAFQAFAFABAHIAAAGQgBABgGAAIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQABAJAJADQAHACAFgHQADgEAGADQgEAOgQAAQgPgBgDgOgAAAgPQgDAAgDADQgEADgBADQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIASAAQAEABgBgDQgBgEgEgDQgCgCgEAAIgBAAg");
	this.shape_37.setTransform(22.2,5.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#224659").s().p("AAAAXQgOAAgFgOQgCgJACgHQAFgQAQABQAPABADAQQABAFgBABQgBABgGAAIgWAAQgDgBABAEQACAJAIACQAIABAEgGQACgEAHACQgEAOgPAAIgBAAgAAAgPQgIAAgDAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIATAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBQgCgIgJAAIgBAAg");
	this.shape_38.setTransform(102.7,-2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#224659").s().p("AgCAXQgQgCgCgRIABgKQACgIAGgEQAGgFAHABQAGAAAGAFQAFAFABAIQABAEgBABQgBABgGAAIgWAAQAAAAgBAAQAAAAgBAAQAAABAAABQAAAAAAABQACAJAIACQAHABAFgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHABQgCAHgHAEQgFACgFAAIgDAAgAAAgPQgJAAgCAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIASAAQADABAAgEQgDgIgIAAIgBAAg");
	this.shape_39.setTransform(40.7,5.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#224659").s().p("AgCAXQgQgDgBgQQgBgEABgGQAEgRAQABQAIAAAFAFQAFAFABAIQABAEgBABQgBABgFAAIgWAAQgEgBABAEQACAJAIACQAIABAEgGQADgEAGADQgCAHgHAEQgEADgGAAIgDgBgAgGgMQgEACgBAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIATAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgBgEgDgCQgDgDgFAAIAAAAQgDAAgDADg");
	this.shape_40.setTransform(90.5,-2.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#224659").s().p("AgFAXQgGAAgEgDQgEgDAAgFQgCgMANgBIAOgCIACgBQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABgFgEgCQgEgDgEABQgGABgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCQABgEADgCQAFgEAIAAQAHgBAGADQAEAEABAGIAAATIACANQgGABgBgBQgBAAgCgEQgIAFgFAAIgCAAgAgGAEQgFABAAAEQgBAFAEABQAIADAFgFQAGgDgBgJg");
	this.shape_41.setTransform(71,-2.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#224659").s().p("AgEAXQgGAAgEgDQgEgDgBgFQgBgMANgBIANgCIADgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQABgFgDgCQgEgDgFABQgGABgDAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEgCQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAIAAgCQACgEADgCQAFgEAHAAQAIgBAFADQAFAEAAAGIAAATQAAAHACAGQgFABgCgBIgCgEQgIAFgGAAIgBAAgAgFAEQgGABAAAFQAAAEAGACQAFACAGgFQAFgEgBgIg");
	this.shape_42.setTransform(-12,-2.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#224659").s().p("AgGAXQgIAAgDgGQgEgGAEgHQADgEAIgBIAMgDQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgEgCgCQgDgEgGABQgIAAgBAFQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAgDAEgCQAEgEAIAAQAIgBAFAEQAFADAAAGIABAVQAAAGABAFQgFABgCgBIgCgFQgIAGgHAAIgCAAgAgFAEQgGABAAAFQAAAEAGACQAFACAFgFQAGgEgBgIIgPADg");
	this.shape_43.setTransform(49.5,-2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#224659").s().p("AgEAXQgOAAgBgLQgBgMANgBIANgCQAEgBAAgCQABgEgDgDQgEgDgFABQgGABgDAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgEADgCQAFgEAHAAQAIgBAFADQAFADAAAHIAAATQAAAHACAGQgGABgBgBQgBAAgBgFQgIAGgGAAIgBAAgAgFAEQgFABgBAEQAAAFAEABQAHADAGgFQAFgEgBgIg");
	this.shape_44.setTransform(80.7,-2.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#224659").s().p("AgSAdIAAg3QAAgBAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAFAAgBAEIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAFgHAHABQAJAAAEAIQAEAGAAAJQAAAIgEAGQgFAHgIABQgFABgHgGIAAASQAAAEgFAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAgAgIgSQgDAEAAAIIABAGQACAHAIABQAHAAADgIQADgIgDgIQgDgGgGgBIgBAAQgEAAgEAFg");
	this.shape_45.setTransform(19.9,-1.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#224659").s().p("AgSAcIAAg1QAAgFADAAQAFAAgBAFIAAACQAGgHAFAAQAMgCAFANQAEALgDAKQgDAJgJADQgIAEgIgIIAAASQAAAEgFAAQgDAAAAgEgAgIgSQgDAEAAAIIABAGQADAHAHABQAHAAADgHQAEgHgEgKQgDgGgGgBIgBAAQgEAAgEAFg");
	this.shape_46.setTransform(24.7,-1.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#224659").s().p("AgRAQQgCgHACgJQACgKAJgEQAJgDAIAIIAAgTQAAgDAEAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAA2QAAAFgDgBQgFAAABgEIAAgBQgFAGgGAAIgBABQgNAAgEgQgAAAgHQgHABgCAGQgBACAAAFQAAAGABADQAEAHAFABQAHAAADgHQAFgKgFgIQgDgGgGAAIgBAAg");
	this.shape_47.setTransform(8.8,5.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#224659").s().p("AgHAdQgDgBgDgEQgFgGAAgKQAAgJAFgGQAFgHAHAAQAFAAAIAGIAAgTQAAgBAAgBQAAAAAAgBQABAAABAAQABAAABAAQABAAAAAAQABAAABAAQAAABAAAAQAAABAAABIAAA5QAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAAAgEIAAgCQgGAGgGAAQgDAAgEgCgAAAgHQgFAAgEAHIgBAIQAAAGACADQADAHAFAAQAIAAADgHQAEgKgFgHQgCgHgHAAIgBAAg");
	this.shape_48.setTransform(55.2,5.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#224659").s().p("AgfATIAAgkQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQAGABgBADIAAABIADgDQADgDAEAAIAOABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABABIALAfIALgcIADgFQABgBAFAAIAAAEIgPAlQgBADgEAAQgEAAgBgDIgNgoIgBADQgCAFgEgCQgDgBgCACQgDABgBAEIgBAJIAAASQAAAEgEAAIgBAAQgDAAAAgEg");
	this.shape_49.setTransform(28.5,5.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#224659").s().p("AABAgQgXAAgEgZQgBgKADgKQAFgOAQgDQANgDAJAJIAFAGQACAEgBABQAAABgFABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgGgNgLACQgNABgDANQgDALAEALQAEAMAMAAQAMAAAFgNIAAgCIABgBIAHACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACQgFASgSAAIgCAAg");
	this.shape_50.setTransform(39.1,-3.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#224659").s().p("AgGAfQgKgEgBgIQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAFABACADQAEAFAIgDQAHgBAAgHIAAgGQgJAHgIgEQgJgDgDgKQgCgKAEgJQAEgJAJgCQAGgCAIAHIABAAIAAgDQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAFAAAAAFIgBAkQAAANgHAFQgFAEgHAAIgGgBgAAAgYQgGAAgEAJQgCAIADAHQADAGAGAAQAIAAADgGQABgCAAgGIgBgIQgDgIgHAAIgBAAg");
	this.shape_51.setTransform(85.5,-1.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#224659").s().p("AAYAXQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgZQAAgJgHAAQgJgBgCAJIgBAFIAAAVQABADgEAAQgDAAAAgDIAAgZQAAgIgGgBQgIgCgEAJIAAAbQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDAAQgBAAAAAAQgBAAgBgBQAAAAAAgBQAAAAAAgBIAAgmQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIADAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAGgHAJAAQAHABACAHQAGgIAHAAQAOgBABAPIAAAdQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDAAg");
	this.shape_52.setTransform(96.6,-2.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#224659").s().p("AgXAOQgBgEACgBQAGgCABAGQACAJAKACQAKACAGgGQAEgDgBgEQgBgEgEgDIgOgFIgJgBQgJgFAAgIQAAgKAIgEQANgIAOAIQAHADABAJQABABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgDgDgCQgJgEgIADQgFADAAAGQAAAFAGABIAWAHQAJADAAAJQABAJgHAGQgHAFgLAAQgTgBgEgRg");
	this.shape_53.setTransform(16.8,5.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#224659").s().p("AAAAgQgTAAgEgSQgBgEACgBQAGgBABAFQACAGAGADQAFADAGgBIAGgBQAGgDAAgHQAAgFgHgDIgVgFQgJgEAAgJQgBgKAJgEQANgIAOAIQAHADABAJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAgDgEgDQgJgEgIAEQgFACAAAGQAAAFAGACIANAFIAJACQAJADABAJQAAAKgIAFQgHAFgJAAIgBAAg");
	this.shape_54.setTransform(9.5,-3.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#224659").s().p("AgDAZIACgBQAEABAEgFQADgEgDgGIgMgjIgCgDIgBADQgBABAAABQAAAAgBAAQAAABgBAAQgBgBAAAAQgHgDgDAIIgBALIAAASQAAADgEAAQgFAAABgDIAAgmQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIADAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAADQAGgKAKAFIAFgBQADAAACAFIALAdIAKgcIADgFQABgBAGAAIAAACIgTAwIgEAHQgEAFgGAAQgFgBACgGg");
	this.shape_55.setTransform(73.4,6.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#224659").s().p("AAZAfQgDAAAAgDIAAguIgBAAIgRAvQAAACgEAAQgDAAAAgCIgRgvIAAAuQAAADgEAAQgEAAgBgDIAAg3QAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAHAAABABQACABACAGIANArIAQguQACgFAFAAIAGABQABABAAAFIAAAzIgBADIgEAAg");
	this.shape_56.setTransform(64.9,-3.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#54A4DA").s().p("AAAA2Ig1g2IA1gzIAAgBIA1A0Ig1A2g");
	this.shape_57.setTransform(138,-30.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#54A4DA").s().p("AgBA0IgygyQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAygzQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAABIAzAzIABAAIgBACIgyAyIgCABIgBgBg");
	this.shape_58.setTransform(154.5,-30.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F48220").s().p("Ah9BjIABgCIDEjEIA2A2IiNCNQgEAEgFAAg");
	this.shape_59.setTransform(125.3,-20);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D4255").s().p("Ah/hjQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIBlAAQADAAACACICSCRIgBACIg0A0g");
	this.shape_60.setTransform(125.1,-40.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F48220").s().p("ABACEIg2g2QAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIAVgVQADgDgDgDIixiyQAAAAABAAQAAAAAAAAQABAAABAAQAAgBABAAIBkAAQADABACACICwCwQADADgDADIhOBOg");
	this.shape_61.setTransform(136.9,-43.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D4255").s().p("AjMDDIgDgBIExkvQADgEgDgEIgXgWIA1g2IABAAIBNBMQADADgDAEIkvEuQgCACgDABg");
	this.shape_62.setTransform(130.5,-10.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#55A5DB").s().p("AhBC1Qg2gageg1QgbgxAAg+QABgmAQgkQARgmAhgdQAtgpA5gGQBmgMBFBRQAEAFAAABQAAACgFAEIg6AwQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgWgogwgFQgcgDgWALQggAPgOAlQgWA9AdA6QAWAsAxAGQAzAFAhgjQAIgHAGgLQAAgBAAgBQABAAAAAAQABgBABABQAAAAABAAIA9ArQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgyBHhRANQgQADgQAAQgoAAgngTg");
	this.shape_63.setTransform(59,-30.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#54A4DA").s().p("AiTDHQgFAAAAgFIAAmDIABgEIAEgBICHAAQA+ABAuAeQAtAfAKA6QAGAugNAjQgRAwg0AYQgfAOgqAFQgVADgbgBQgEAAAAAEIAABeQAAAFgEAAIhdAAgAg0hxIAAB7QAAAFADAAQAkgCASgFQAagIALgQQAKgUgCggQgBgNgGgKQgJgRgYgFQgPgEgqgBQgFAAAAAFg");
	this.shape_64.setTransform(94.9,-30.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#54A4DA").s().p("AhaDJIhVAAQgFAAAAgEIAAmNIEQDYQABgBAAgEIAAjMIAAgEIAFgBIBPAAQAEAAAAAEIAAGLIkHjPIgDgCQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIABDJQAAAFgEAAIgBAAg");
	this.shape_65.setTransform(-17.3,-30.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#55A5DB").s().p("AimDGQgBgBAAgFIAAmCQAAgEAFAAICbAAQA6ABAwAnQAuAlAQBDQAIAjgBAmQgBAzgWAmQgaAtgzAYQgqASgvADIiLABQgFAAgBgBgAhDhyQgGAAAAAFIAADZQAAAEAEABQAgAHAbgGQAwgKATgtQAQgogHgrQgIg5g1gWQgcgLgkAAIgIAAg");
	this.shape_66.setTransform(21.8,-30.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E6E6E6").s().p("A1EKZQgeAAgZgXQgagWAAgfIAAyaQAAgeAagXQAZgVAegBMAqcAAAQAcABARAVQARAWgBAfIAASaQABAggRAVQgRAXgcAAg");
	this.shape_67.setTransform(58.5,-23.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7931E").s().p("AgeAUQgHAAgGgHQgFgFgBgIIAAAAQABgHAFgGQAGgGAHAAIA8AAQAIAAAFAGQAHAGgBAHIAAAAQABAIgHAFQgFAHgIAAg");
	this.shape_68.setTransform(204.5,-94.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F7931E").s().p("AgdAUQgJAAgFgHQgFgFAAgIIAAAAQAAgHAFgGQAFgGAJAAIA7AAQAIAAAFAGQAHAGAAAHIAAAAQAAAIgHAFQgFAHgIAAg");
	this.shape_69.setTransform(-84.5,-94.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#519FD5").s().p("A34LpIAA3RMAvyAAAIAAXRg");
	this.shape_70.setTransform(60.5,-24.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EE7D2B").s().p("AnKBPIAAieIOWAAIAACeg");
	this.shape_71.setTransform(-46.5,65.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#519FD5").s().p("AgtAUQgIAAgFgGQgGgFABgIIAAgCQgBgHAGgFQAFgFAIgBIBbAAQAHABAGAFQAFAFABAHIAAACQgBAIgFAFQgGAGgHAAg");
	this.shape_72.setTransform(-185,21.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CCCCCC").s().p("AhwBxQgvgvABhCQgBhBAvgvQAvgvBBAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAQhBAAgvgvg");
	this.shape_73.setTransform(118.1,74.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhkAAhJhIg");
	this.shape_74.setTransform(118.1,74.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CCCCCC").s().p("AhwBxQgugvgBhCQABhBAugvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAvQguAvhCAAQhBAAgvgvg");
	this.shape_75.setTransform(58.1,74.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AisCuQhJhIAAhmQAAhlBJhIQBHhIBlAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhlAAhHhIg");
	this.shape_76.setTransform(58.1,74.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CCCCCC").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgvgvg");
	this.shape_77.setTransform(-130.5,74.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhkAAhJhIg");
	this.shape_78.setTransform(-130.5,74.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#519FD5").s().p("AmHC+QAFgYASgkQAkhHBDg7QDXi+G0ABQAFBGABBMQACCWgTAhQgGAMgJANQgTAZgSAAg");
	this.shape_79.setTransform(-145.6,-63.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#519FD5").s().p("AjhAjQgOAAgKgLQgKgJAAgOIAAgBQAAgOAKgJQAKgLAOABIHCAAQAOgBALALQAJAJABAOIAAABQgBAOgJAJQgLALgOAAg");
	this.shape_80.setTransform(-188.5,73.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EAB998").s().p("AAACfQgHABgGgHQgGgFAAgIIAAkXQAAgJAGgFQAGgGAHABIAAAAQAIgBAFAGQAHAFAAAJIAAEXQAAAIgHAFQgFAHgIgBg");
	this.shape_81.setTransform(-209.5,47.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("Ah8EwQAAkCB8jIQA+hkA+gxQgPAyhVChQhSC0gXDIQgBAMgVADIgPABIgGAAg");
	this.shape_82.setTransform(-197.2,-13.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7931E").s().p("Ag6AiIAAhDIBYAAQAOAAAIAJQAHAJABAPIAAAEQAAAegeAAg");
	this.shape_83.setTransform(-185.5,63.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgFAiQgOAAgJgKQgKgJAAgOIAAgBQAAgOAKgJQAJgKAOAAIAtAAIAABDg");
	this.shape_84.setTransform(-195.5,63.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AkvA0QBEjjCAhXIHFAAIAAFRQgQAbheAlQi+BLmHAxQAIhhAihyg");
	this.shape_85.setTransform(-156.1,-11.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE7D2B").s().p("An+I6IABotIB5lwICBjWIK7AAQAfABAUAZQAUAZAAAgIAAMvIlxAAQgNABgUAFQgoAIggAVQhoA+AACQg");
	this.shape_86.setTransform(-158.6,12.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3F3F3F").s().p("A/nC4IAAlwIQ4AAIBNA9MAgXgALIAAA8IM0AAIAABYIs0AAIAACqg");
	this.shape_87.setTransform(-6,56.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#333333").ss(3,1,1).p("Ag4lEIBxAbIAAJu");
	this.shape_88.setTransform(-107.8,9.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3F3F3F").s().p("AhLBAQgGAAgEgEQgDgEAAgGIAAhjQAAgGADgFQAEgEAGAAICWAAQAGAAAEAEQAFAFAAAGIAABjQAAAGgFAEQgEAEgGAAg");
	this.shape_89.setTransform(205.5,69.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C1272D").s().p("AgtAUQgIgBgFgGQgFgFAAgIIAAAAQAAgHAFgGQAFgFAIgBIBaAAQAIABAGAFQAFAGAAAHIAAAAQAAAIgFAFQgGAGgIABg");
	this.shape_90.setTransform(205,57.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D9D9D9").s().p("AgnBoIhIjPIDfAAIAADPg");
	this.shape_91.setTransform(202.3,54.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE7D2B").s().p("AiDAsQgSAAgMgMQgNgNABgSIAAgBQgBgSANgNQAMgNASAAIEGAAQASAAANANQAMANAAASIAAABQAAASgMANQgNAMgSAAg");
	this.shape_92.setTransform(168,69.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E6E6E6").s().p("AgOA2IAAhsIAdAAIAABsg");
	this.shape_93.setTransform(177,61.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E6E6E6").s().p("AgOA2IAAhsIAdAAIAABsg");
	this.shape_94.setTransform(158,61.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.5,-99.4,429,199);


(lib._6carbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Au/AZIAAgxId/AAIAAAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgILCIAAg0Qg2gOgni5QgqjHAAkYQAAkaAqjHQAqjIA7AAQA7AAAqDIQArDHAAEaQAAEYgrDHQgjCpgxAbIAAA3g");
	this.shape_1.setTransform(-128,-71.9);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).wait(1).to({x:-116.7},0).wait(1).to({x:-105.5},0).wait(1).to({x:-94.2},0).wait(1).to({x:-83},0).wait(1).to({x:-71.7},0).wait(1).to({x:-60.5},0).wait(1).to({x:-49.2},0).wait(1).to({x:-38},0).wait(1).to({x:-26.7},0).wait(1).to({x:-15.5},0).wait(1).to({x:-4.2},0).wait(1).to({x:7},0).wait(1).to({x:18.3},0).wait(1).to({x:29.5},0).wait(1).to({x:40.8},0).wait(1).to({x:52},0).wait(1).to({x:63.3},0).wait(1).to({x:74.5},0).wait(1).to({x:85.8},0).wait(1).to({x:97},0).wait(1).to({x:108.3},0).wait(1).to({x:119.5},0).wait(1).to({x:130.8},0).wait(1).to({x:142},0).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgJMcIAAhUQg8gPgrjNQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC7g1AdIAABYg");
	this.shape_2.setTransform(-127.9,-80.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdgBk2QABk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC8g2AdIAABXg");
	this.shape_3.setTransform(-101.9,-80.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdgBk2QABk5AujeQAvjcBBAAQBCAAAvDcQAuDeABE5QgBE2guDdQgoC8g2AdIAABXg");
	this.shape_4.setTransform(-75.9,-80.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdAAk2QAAk5AvjeQAvjcBBAAQBCAAAvDcQAuDeABE5QgBE2guDdQgoC8g2AdIAABXg");
	this.shape_5.setTransform(-49.9,-80.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdAAk2QAAk5AvjeQAvjcBBAAQBCAAAuDcQAwDeAAE5QAAE2gwDdQgnC8g2AdIAABXg");
	this.shape_6.setTransform(-23.9,-80.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdABk2QgBk5AvjeQAvjcBBAAQBCAAAuDcQAwDegBE5QABE2gwDdQgnC8g1AdIAABXg");
	this.shape_7.setTransform(28.1,-80.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAuDcQAwDegBE5QABE2gwDdQgnC8g1AdIAABXg");
	this.shape_8.setTransform(54.1,-80.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAuDcQAvDeAAE5QAAE2gvDdQgnC8g1AdIAABXg");
	this.shape_9.setTransform(80.1,-80.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgJMcIAAhUQg8gQgrjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC8g1AdIAABXg");
	this.shape_10.setTransform(106.1,-80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},18).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:-75.9}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{x:-23.9}}]},1).to({state:[{t:this.shape_6,p:{x:2.1}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_4,p:{x:132.1}}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgJMcIAAhUQg8gPgrjNQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC7g1AdIAABYg");
	this.shape_11.setTransform(-127.9,-80.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdgBk2QABk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC8g2AdIAABXg");
	this.shape_12.setTransform(-101.9,-80.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdgBk2QABk5AujeQAvjcBBAAQBCAAAvDcQAuDeABE5QgBE2guDdQgoC8g2AdIAABXg");
	this.shape_13.setTransform(-75.9,-80.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdAAk2QAAk5AvjeQAvjcBBAAQBCAAAvDcQAuDeABE5QgBE2guDdQgoC8g2AdIAABXg");
	this.shape_14.setTransform(-49.9,-80.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdAAk2QAAk5AvjeQAvjcBBAAQBCAAAuDcQAwDeAAE5QAAE2gwDdQgnC8g2AdIAABXg");
	this.shape_15.setTransform(-23.9,-80.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdABk2QgBk5AvjeQAvjcBBAAQBCAAAuDcQAwDegBE5QABE2gwDdQgnC8g1AdIAABXg");
	this.shape_16.setTransform(28.1,-80.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAuDcQAwDegBE5QABE2gwDdQgnC8g1AdIAABXg");
	this.shape_17.setTransform(54.1,-80.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAuDcQAvDeAAE5QAAE2gvDdQgnC8g1AdIAABXg");
	this.shape_18.setTransform(80.1,-80.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgJMcIAAhUQg8gQgrjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC8g1AdIAABXg");
	this.shape_19.setTransform(106.1,-80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},7).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13,p:{x:-75.9}}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:-23.9}}]},1).to({state:[{t:this.shape_15,p:{x:2.1}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13,p:{x:132.1}}]},1).to({state:[]},1).wait(12));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAuDcQAvDeAAE5QAAE2gvDdQgnC8g1AdIAABXg");
	this.shape_20.setTransform(-117.9,-80.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdgBk2QABk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC8g2AdIAABXg");
	this.shape_21.setTransform(-92.9,-80.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdAAk2QAAk5AvjeQAvjcBBAAQBCAAAvDcQAuDeABE5QgBE2guDdQgoC8g2AdIAABXg");
	this.shape_22.setTransform(-67.9,-80.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdAAk2QAAk5AvjeQAvjcBBAAQBCAAAuDcQAwDeAAE5QAAE2gwDdQgnC8g2AdIAABXg");
	this.shape_23.setTransform(-42.9,-80.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAuDcQAwDegBE5QABE2gwDdQgnC8g1AdIAABXg");
	this.shape_24.setTransform(-17.9,-80.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgJMcIAAhUQg8gQgrjMQgujdAAk2QAAk5AujeQAvjcBBAAQBCAAAvDcQAuDeAAE5QAAE2guDdQgoC8g1AdIAABXg");
	this.shape_25.setTransform(7.1,-80.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgJMcIAAhUQg7gQgsjMQgujdgBk2QABk5AujeQAvjcBBAAQBCAAAvDcQAuDeABE5QgBE2guDdQgoC8g2AdIAABXg");
	this.shape_26.setTransform(32.1,-80.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgIMcIAAhUQg9gQgrjMQgvjdABk2QgBk5AvjeQAvjcBBAAQBCAAAuDcQAwDegBE5QABE2gwDdQgnC8g1AdIAABXg");
	this.shape_27.setTransform(82.1,-80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20,p:{x:-117.9}}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:-42.9}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{x:32.1}}]},1).to({state:[{t:this.shape_23,p:{x:57.1}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_20,p:{x:107.1}}]},1).to({state:[{t:this.shape_26,p:{x:132.1}}]},1).to({state:[]},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.9,-160.5,230,163);


(lib._5inpack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#461917").s().p("AAvGNQAOgRACgWQADgOABgsIAJiVQAIhTABgyQAChbgZgcQApgdADhJQACgpgNhRQgFgggEAEQgVAXgDACIgQAAQgRgBgEABQgIADgNAKIgJAIIgJAGIgEAAQgaADgZgFQgkgHgKgUQgNgYAZgQQAOgJAigIQAcgGAdAEQAGABAZAKQAVAJAIgCQATgDAEgVQAFgXALgFQAbBXgLCEQgGBKgPCRIgDBpQgBBCgCAmIgHBrQgJBHgfAWQgWgOAagNg");
	this.shape.setTransform(-143.2,298.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE5439").s().p("AgzBcQgggJArhJQAgg3AZgaIACgCIACgBIAAgBQAXgUAWADQgFAsgjBDQgjBKgiAAIgIgBg");
	this.shape_1.setTransform(134,316);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE5439").s().p("AhbDFQgVgFgHgcQgFgXATgqQAWgvAHgQIA9iTQAPgiAMgQQATgYAbgIQAZgHAQAFQAVAGABAYIAAABQAAAagQAmQgJAWgUApIg7CHQgRAngGAMQgQAagYAMQgVALgQAAIgIgBg");
	this.shape_2.setTransform(79.8,338);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE5439").s().p("AjQCkIAphbQAdhOASgqQAfhLAogfQAxgnAfAhQAdAdgEA+QAHAAAUgeQAagqAQgWQA7hVAZAgQANAQgYA0QgNAbgWApQgdBCgvBfIgiBBQgdArgbgIQgYgFgIgmIgNg6QgOALgnBJQgfA4gqADIgGABQguAAASg9g");
	this.shape_3.setTransform(107,332.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE5439").s().p("AjlCRQgCgUANgjQARgmAFgQIAnhtQAWg9ARgXQAfgpAyAEQAxADAFAoQACAWgQA5QAWgOAvgsQAqgpAcgNQAigQAdALQAhALgKAnQgJAggvAkQgxAkgKAaQgJAXAZAzQAYAxgSAfQgKASgWAOQgWANgWADQgdADgOgOQgFgFgRgjQgKgYgIgPQgPgbgNAFQgIADgJAaQgKAggDAFQgbAng3AIIgOABQguAAgFgyg");
	this.shape_4.setTransform(50,339.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE5439").s().p("AAXC0QgSgVgfgxQgegvgPgPQgNANgRAxQgOAngcAOQgcANgfgHQgdgGgXgWQgegbALg0QAVg9AHgYIAUhYQAOg5AWgYQAXgZApgDQAogDAdAUQAQALASAZIAZApQAFAGATAiQATAfAJADQAPAEARgoQAWgxAKgIQAegbAqABQApAAAdAbQAbAagUBBQgLAjgaA2QgIAagRA7QgRAzgcAXQggAageAAQgnAAglgpg");
	this.shape_5.setTransform(1.2,335.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CE5439").s().p("AgsDcQgzgXgdgSQgvgdgPggQgQgiAKg6IAVhaQAGg6AHglQANhFAZgMQAWgLA0AcQAbAOAoAcQBRAwApA4IABACQA1BLAABSQABBfhLAuQghAVgoAAQgsAAgygYgAgWg/QgOAEgKAzQgIAjgCAbQgBAdAZASQAaASAcgOQAcgMAGgeQAGgcgMgeQgHgSgWgZQgWgZgRAAIgEAAg");
	this.shape_6.setTransform(-95.3,299.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE5439").s().p("AhjDPQg0gZglgvQgogzgDg3QgCgjAOg4QATg+AHgcQAMgrAGgLQAOgaAdgEQAegDAeAVQAdAVAJAeQAIAggRA8IgdBZQgJAkAKAYQANAgAogJQASgEAJgWIALgpIAOhDQAJgsALgYQAQgfAigIQAfgHAiAOQAhAOASAbQATAfgKAhQgLAjgVBUQgWBJglAiQgwArhEAAIgCAAQg5AAg+geg");
	this.shape_7.setTransform(-49.3,320.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CE3665").s().p("AAxDdQgxgFgQAEQg4gcgdgQQgygdgTghQgUggAHg1IAShVQAGg5AHgjQANhAAdgIQAYgHAsAbQAYAOAjAbQBQAyAsA9QA2BJgLBSQgJBIg5AfQgWAMgeAAIgRgBgAglgmQgFAPgEArQgJAmAEANQAFASAhAIQAbAHATgMQATgMAEgZIABgHIAAAAIgBgKQgCgWgMgUQgQgcgXgNQgMgHgJAAQgOAAgFAOg");
	this.shape_8.setTransform(-104,342.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE3665").s().p("AhpC3Qg4gMgcgrQgbgoAShGIAnhrQAQgxAhgcQAqgkAtAbQAoAagbBKQgHAUgTAoQgOAgAAARQgBAaAPAIQAPAIAVgRQAPgMAMghIAQgxQANgqAIgVQAPgmAUgSQASgQAdgIQAigJAMAUQgFgJAKAGQALAHgPgDQAbAGgcBVQgQAxgcA3Qg1BxhhAiQggALggAAQgTAAgUgEg");
	this.shape_9.setTransform(35.9,381.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CE3665").s().p("Aj7C/QgNgYAfg/QAmhPACgIQAGgggPgCQgbgDgMgQQgQgVAQgcQAMgZAXgOQAegTA8gFIBegHQAugHAMADQAaAGgDAmQApgqAvgcQBGgsAdAgQAXAZgeArQgdAqgfgBIgXgMQgOgIgHAQQgFANAQAIIAaAMQArApg3BRQguBIg2AcQgzAbgcgOQgZgMgBgiQAAgiAVgZQAYgbAjAFQAHABATASQARALAGgYQADgNgPgHQgTgGgHgFQgcgUAHgcQALgugDgLQgMAMgUAIIggAPQgXAMgFAHQgFAFgMAaQgLAbgYBCQgXA7gaAbQgUAWgbAFIgMABQgWAAgKgUg");
	this.shape_10.setTransform(82.8,376.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE3665").s().p("AAeCqQgagYgdgtIgrg/QgLANgLAnQgLAigRAPQgTAPgZACQgZACgXgJQg2gWAHhAIAehqQAchnAEgIQAcg4A+AGQAyAEAxA9QAZAhAsBFQAehLAYgYQAmgoA+AWIADABIACAAQAqAQgGAzQgCALgXBHQgJAYgRBAQgRA5gWAbQgfAmgjAAQgiAAgmgkg");
	this.shape_11.setTransform(-9.4,377.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE3665").s().p("AhCC6QhVghgzhFQg4hLALhUQAMhcBagdQBZgcBpAsQBhApBBBNIABACQA+BJgoBXQgnBUheASQgcAGgcAAQg2AAg5gWgAhVg5QgoAXAYA0QAVAuBBANQBCANAXgxQAJgVgLgWQgKgTgVgSQgGgFgMgGIgSgLQgCgBgEgKIgBgCQACAEAAAFQgTgEgRAAQgcAAgVAMg");
	this.shape_12.setTransform(-59.5,364.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE3665").s().p("AgZAiQgDgiAAgRQACgkAVgGQARgFAKATQAHAOAAAVQABAegaAdQgJAMgHAAQgKAAgDgbgAABAIQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQACgFADgGQAEgPgLgFQgJgEADAXIACAMQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAIABABg");
	this.shape_13.setTransform(-141.1,306.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE5439").s().p("AgLA6QgRgHAAg3QABg3AIgBIAoAbIAAAAIAAAAIAIgKQgCA8gBAFQgGAngUAAQgEAAgHgDgAgHAEQAAANAGAOQAEgOAAgMQAAgKgEgSQgGASAAAJg");
	this.shape_14.setTransform(-146.6,306.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE5439").s().p("AgPB3QAEhHAAgZIAAi3QABAJAAgTQABgngBAAQAIABAMDHQAQDIgWATQgTgaAAhBg");
	this.shape_15.setTransform(-154.4,314);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#906F74").s().p("AgHANIgGgBIAAgBQAMgSAHgEQAIgEAAAJQABAGgHAHQgHAGgHAAIgBAAg");
	this.shape_16.setTransform(-135.5,264.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#906F74").s().p("AgCgHQATgNAVALQgNAPgWAFQgMAEgcAAIAjgWg");
	this.shape_17.setTransform(-140.9,266.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#906F74").s().p("AAhAEQgpgIglAIQgjAQgSAGQghAKAegnQAdgpBTALQBEAJAbAcIgBgCQgGgSARAkIABABQgJAFgBAKQgigXgogJg");
	this.shape_18.setTransform(-144.8,253.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#906F74").s().p("AAWBUQAFg0AAgiQAAhGggACQgaABgBBDQgCBBASACQAYAEgIggQgOgjACgEQAKgjAJAoQAKAogDAVQgEAagEAIQgHAPgTgPQgMgJgDgZIgHgnIAAgBQgCgqACgeQAEg3AYgEQAegGARA/QANAtgCAnQgBAbgIAgQgFAQgDAAQgDAAgCgZg");
	this.shape_19.setTransform(-152,235.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#906F74").s().p("AggCpQgLgIABgeQAEgjAAgLQgBgVgGghIgJg0QgHguAIgqQALg6AngCQApgCAOA9QALAwgJAsQgQBCgdgJQgQgFgHgiQgHggAJgRQAHgOALgEQAOgEAEAUQACAOgLAEQgOAGgBAHQgCAOAGAIQAIAKANgHQAPgGAAgmQABgfgGgUQgHgXgMgLQgPgPgTANQgYAPADBEIAPBpQAGAtgFAjQgDAPgEANIgCgBg");
	this.shape_20.setTransform(-141.7,231.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#906F74").s().p("AAIF1QgRgEgQgOQgegcgEhNQAChXgCgfQgFhcgDgtQgGhSgMg4QgeiMAVhaQACALABBVQABA/ATAaQAYAhA0gEQAcgBA1gQIAGgCIABABQAUAWgSAJQgFAEgqAJQgPADgRABIgeAAQgDAAgNgFQgMgEgFADQgUALAEBDQABAkAIAzQAGBIAICRQAEAxALASQAQAZAoADIAUgFQAMgDAFAIQAGAHgJAJQgHAGgMAFQgMAFgNAAIgNgBg");
	this.shape_21.setTransform(-146.2,306.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE3665").s().p("AhoG5QgTgOANgMQAVgNAHgIQAfgfAIg8QAGg7ABhcIABiXQABgiAQheQANhQgEgwQgEgzAAhTQgDggABgMQABgTAVACQAvAEAiBAQAWAqAFAmIABAaIAAAEIgCAJQgtDrhDEwQgUBigGARQgXA8gfAAQgMAAgOgKg");
	this.shape_22.setTransform(-128.8,303.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D5D0D0").s().p("AhXCwQgNgBgHgOQgJgTACguQAGgzAAgQIAAiDQACglACgRQAEgdAmAPQARAHABAMQABAJgCAbIAABPQAAAPgGA/QgEA+AMAMQAQARA7gMQA8gLANARQAbAjgrAJQgMACg3AAIhLACIgcABIgGAAg");
	this.shape_23.setTransform(109.6,-23.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D5D0D0").s().p("AgCCxQgVgDgHgNQgJgOAEgxQAGg1AAgOIABiBQAGgMgFgkQgDgZAbgFQAQgDAHAFQAGAEAGAOQAHASgDAnIgFA5IABA9IAAA+IACAtQABAigIAIQgIAKgPAAIgGgBg");
	this.shape_24.setTransform(-28.8,-22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D5D0D0").s().p("AgWCxQgIgJgCgZQADibAAhOQABgqAJgbQAQgtAdAqQAJALgDArIgEA4IABB3IAAA9QgCAogOAIQgNAHgHAAQgJAAgGgGg");
	this.shape_25.setTransform(21.3,-22.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D5D0D0").s().p("AA7CoQgEgDgngwQgQgWgUgIQgbgKgOAYQgEAHAFAbQAEAYgIAHQgPAPgUgHQgVgIABgVIABihIgEhEQgDguAIgVQAJgWAMgDQADgBAmABIAzACQAcADAUAJQArASAUAuQAUAsgMAuQgDAMgZAdQgYAaAAAMQgBARAaAiQAgArAEAHQgSAGgPAAQgTAAgNgKgAgrh4IgBABQgRAFAAAiQgBASADAfQAAArAFAKQAKASAngJQAjgJAPgcQAOgbgIgfQgIgggZgQQgRgMgTAAQgMAAgNAEg");
	this.shape_26.setTransform(-49.1,-22.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D5D0D0").s().p("AheCVIgBgBIgBAAIgDgCQg2glgNg6QgLg1Abg5QAag3AygiQA2gkA7AEQAfACAeAMQAqAPAFAWQAJAmgogHQgHgBgugRQg/gWg1ApQg3ApAHBBQAGBAA9AkQA+AmA5ghQAlgWgOgcQgFgKgOgCIgaAAQgcgBgUgKQgZgPAZgaQAJgHBAAAQA+AAAJAHQALAHAAA1QAAAzgHAQQgaA1hiABIgHAAQhSAAgsggg");
	this.shape_27.setTransform(-4.2,-22.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D5D0D0").s().p("AiVCuIgBAAIgBgBIAAAAQgLgOA4iEIBLimQAZg3AVAeQADAEAfBKIBLCuIATApQAPAigGAFQgEAEgZAAQgZgBgGgEQgKgGgIgUQgGgSgTgGQgSgHgrACQgyACgQALQgHAFgFASQgEASgFAEQgIAGgQAAIgagCgAg3A9IA3ADQAnAAAFgMQAEgOgWgrQgagwgDgMQAKAdgLADQgMADALgfg");
	this.shape_28.setTransform(79.4,-22.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D5D0D0").s().p("Ah3CuIgRAAQAEgEgHgXQgKgeADg+QAGhCABgaQgFg4ACgfQADg5AjAHQBfAFAJABQA1AIAqAhQA6AvgGBVQgFBVg+AsQgwAihIACIgoAEIgYACQgJAAgGgCgAgxh0QggABgEBYQgDBDAJAuQADALAAAIQABADALAGQALAGAegFQAYgEAPgGQAngQATgtQASgsgMgoQgMgogngUQgegQgrAAIgEAAIAAAAIgBAAg");
	this.shape_29.setTransform(68.7,19.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D5D0D0").s().p("AAXCrIhXgIQgfgBgFgFQgDgEgBghIgDheQgFhBAAgrQAChPAggIQAggJADAuQABAZgFAvQABALgGBJQgDBIAKAKQAJAJAngBIA5gCIAYAAQAWABACADQAFAEgBAUQAAAUgFAFQgHAHgnAAIgmgBg");
	this.shape_30.setTransform(-24.5,19.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D5D0D0").s().p("AAgCqQg4gGgOgBIgiACQgWABgJgFQgNgIgBgOIAAghQABjJADhLIAAgBIAFAAIACAAQBfAAAuAAIA5ACQAiAGgPAeQgJASgaACQgOABglgFQhFgKgNAgQgCAHgBAiQgBAlAEAHQAFAKAHACQAEABARAAIA2gDQAngBALAHQAOAMgDAQQgDAPgPAIQgOAHg1gJQgugIgOAPQgHAIACARQABAQAIAGQAKAJAqgBIA6gDQAMAAAWgBQARABAGAOQAEAKgFAMQgFALgJAFQgKAGgbAAIghgCg");
	this.shape_31.setTransform(2.6,19.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D5D0D0").s().p("AiFClQgQgLACg9QAHhDAAgPIABi0IABAAQAYgLAtAzQAYAbAjAvQAKAMAiAsQAiApAVAHQABhMgCgnQgDgoABgVQACgnAVgFQAhgIAFAiQACATgEAoIgCByIACA6QABAlgFAUQgDALAAALQgBAGgTgCQgIgBgKgKIgOgRQgjgkgxg7IhRhgQgDA8AABgQAAAigIARQgIARgNAAQgJAAgNgJg");
	this.shape_32.setTransform(33.6,19.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D5D0D0").s().p("AgmCoIg9gCIgGAAIgBAAQgTAAgBg2IAEhJIgBhoIgDgpQgCgcAFgKQALgYAmgBQAWAAAsAFQAkADAXAJQAeANAOAdQAKAVgLAdQgNAgADAOQABAIARAOQARASAEAJQAHAUgDAeQgKBIhUAKQgQADgUAAIgjgCgAgjAOQgXAHgGATQgaBJBCAEQAmADAUgHQAggJABgiQACgug8gMQgJgDgKAAQgNAAgMAFgAgohwQgZABAAAJIgBAFQgCAeADAJQAFARAZAGQAQAEATgCQAYgDAJgKQApgthDgRQgRgEgTAAIgLAAg");
	this.shape_33.setTransform(-52.5,18.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D5D0D0").s().p("AiTB8QAGhCAAgSIgEhcQgBg7AHgiQAIgmAYATIAqAvICOCkQAOgKgBg7IgEhQQgCgaABgOQADgYAPgIQAngTAFA5QADAegFAyIgBClQAAAwgFAKQgJARghgZQgIgGgKgMIgRgXQgQgUgdgfQgggigMgPIgZghQgRgYgQgDIAHB8QAABiggAAQgjAAgCg4g");
	this.shape_34.setTransform(45.2,-22.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D5D0D0").s().p("AhlCPQhKgsgGhWQgFhIAtg0QAsg0BJgJQBMgJA6AsQA0ApAPBCQAQBBgfA3QgaAvg0AXIgiAMIgcACIgLABQg9AAgzgggAhVhTQgfAhgBAxQgBAvAdAjQAgAnA5ACQA2ACAjglQAfghABgyQABgvgdgjQgggng5gCIgEAAQg0AAghAkg");
	this.shape_35.setTransform(-84.6,-23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#461917").s().p("Ag1C2QgVgDgLgEIgVgDQAHACgZgVQgUgQhAgMQgtgIgsgDQgOgBgRAFIgfAIQgUADgegHQgRgEgfgLQgngNgIgbQgJgcAvADQAMABAPAEQANACAQgHQANgHASgTQATgTALgHQAmgXCDgZQBxgVAsguQAEgEAOgXQAFgMAQgBQAKgBASAFQANAEAQgGQADgBADgIQADgHAIgDQAJgDAhAJQgFgBATAIIASAIQAGAAALgHQAGgEAEgBQAEgBADABIABAKQgBAQgSAPQgWARAGAKQAJAPBKgCQBXgDAIADQAiAJAFAWQAJAjAKAMQAHAIAXAKIAoAVQAwAbgPAgQgKAVgxARQgtAQg6AGQiNAPgFgwQgBgJAKgMQAGgJgKgNQgJgMggAAQgjAAgIgFQgRgKgFglQgFgigWgJQgSgHgkARQgdAOgQAPQgWAYAAAeQAAAeAXAUQAfAcAFANQAPAbglAKIgMABIgYgBg");
	this.shape_36.setTransform(-45.9,108.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#461917").s().p("Ah3CMQhGgKgLgOQgGgJABgWQACgbgCgEQgEgSgBAAIgYABQg2gKhOgaQgYgGgLgZQgLgcAYgPQANgIAKAJIAQAPQAOAHACAAIASgBQCIgDBBgGIBQgHQAmgCAmAHQASAEAcgBIAvAAQAPAAAnAEQAkADASgGQAogMgegIIg4gIQgxgGgNgIQgVgMApgVQAWgKAMgCQASgDAVAJQAGADAPALQAOALALADQAHACAaANQAYALAHABQAIABAKgIQAKgJAHgBQAWgBAHARQAHAPgHATQgBACgLAHQgLAGABADQAAAFAFAFIAGAGQAAAFAJALQAFAEgKAMQgNAShEAJQg/AIhqgMQglgEhMgFQhJgFglgFQgggDgpASQgvATAnAXQAHAFAbgJQAfgLADAAQASgCAaAJQAbAKAPABIABAAIAAAAQgCAVAwABQA2ABAFAOQAKAfiLAAQglAAg2gHg");
	this.shape_37.setTransform(19.9,177.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#461917").s().p("AIiF/QgNgGgOgDIgfgGIgWgCQgEgCgMgMQgEgFgHgQQgGgPgIgHIgRgMQgCgCgBgKQAQABACgPQgKgNAEgRQADgIAPgLQAMgIgDgPQgDgRgUgEIgigCQgvABgcgEQg1gHgFgdQgDgVATgFQAYgIAEgHQADgHgJgPQgIgOAGgDQAEgDATAIIAZAJQANACAUgCIAhgEQAsgEASgFQAtgMgKgXQgNgehxANQh5AWgVgBQgegDghgPQglgSgVgJQglgKgRgHQgggOAXgXQAEgFAqgHQAggGgFgUQgIgcgrAHQgwAOgMACQg/AEghAEQg5AIgcAbQgZAYgJAFQgPAJgfAEIhKAIQgtAFgeAGQgsAKgeABQgmAAglgGQhXgVg/AHQgVADgiANQgkALgVADQgbADgwAAQgzAAgXACIhWAOIgYgBQgOAAAIAOQAGAMA9AAIBOgBQAiAFATAIQAcALAQAVQAQAWgDAWQgDATgSAJIgGACIgDABQgJAAgPgJQgPgIgLgCQgMgCgTAAQgRABgNgDQgjgGgxgVIhQglIgvgTQgegMgPgMIgWgLQACgPgKgJQgggBgWgCQgrgFAMgWQgFAIgSgFQgPgEgIgHQgMgKgBgKQAAgIAIgNQASgcAcALQALAFAmAeQAbAWAXgBQAZAAgbgnQgJgMgQgMIgXgRQgSgRAlgZIATgOQAEgDAIgPQAJgSAEgGQAHgKARgIQAagMAqgFQAVgCAygDQAkgBASADQAaAEAcAQQAOAJAHAKQAKARAGAGQAOANARADQAKACAagBQBxAFBJAAQBmgBBUgIQAVgCCdAcQCSARAAgyQgBgXg1gKQg8gGgMgDQgpgLgzgcIhXgyQghgTAFgRQAFgSAqAHQAQACA6AUQA0AOAMgWQADgGgDgVQgCgSALgGQAKgGAUAHQAUAHAGAKQAMAVgYALQgKAEABAEQAAAGARAMQAJAGASAEQAVAFAHADQARAHAOANIAaAaQAYAWAjAIIBAAMQAMAEARAIQAOAEAQgMQALgJABgMQgBgOACgJQABgEgDgLQgCgHAIgHQAHgHAWABIAgADQAZgBAPACQATACAWAHQAHACAZAFQAWAGADAIQAFAMgSAKQgGAEAoAHQApAHB6AkQBlAeBBADQBIAEBtgJIC0gQQARgBAvgGQAqgBARATQAZAbgUARQgQAMgfADQgUABgigHQgngIgTgBIgrgBIgrAAQgXABgdAKQggAMgSAFQgdAJg+ALQg9AKgfAKQguAOgHAZQgHAYAyAMQAvAKAmgHQAegGA0gCQANgBAXgKQAUgJAMACQAHAAAXAIQAXAIALABQAgACA5gOQA4gNAgACQAlACBJAKIAwgBQAhgBAMAHQAPAIAHAQQAIASgKAPQgGALgVAEQgYAEgJADQgbAJg1AeQgzAdgcAJQANAGAYgEIAlgIQAVgFARgBQAOgBAZABQAqACAegTQAYgPAbgnQAQgYAGgEQAOgKAPARQgDgDAKAdQAKAdACgGQgEANgpAYQgWANgjASQgKAFg8AbQgsATgYATIgHAVQgMAOgPADQgiAZgtARIguAUQgcANgRABQgcADgQgaQgQgagVABQgKABgSAOIgaATQgQAIgXgCQgagBgNADQgTAFgMAPQgXAQgQgUQgQACgLAEIgaAIIgsAAQgJADgFAAQgMAAAEgQg");
	this.shape_38.setTransform(45.8,160.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5C231B").s().p("AKpJTQiUgHjdgcQk8gqk3hOQmChgkKhtQljiQjpjCIg8gzQgZgdAJgnQAThTBHhJQBuhwDFg0QCKglDUgNQDwgPEVAbQDoAWEUA2QEAAxDIA1QDyBADJBOQDYBUCLBfQBjBEA1A3QBOBWACBXIAHgEQgFBBg2BIQgwBCg8AkQieBfkEAkQh1ARiJAAQg3AAg7gDg");
	this.shape_39.setTransform(30.9,147.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B6A7A7").s().p("AvLazQgvgGgRAAIkxgIQBEjvCNneICupKQBklLBSj6IARg5QALgiAPgTQAegkA/gUQAmgNBGgJQCvgZDoAWIg+gPQHEBoHCAXQEvAQELhNQCOgqBchEQB7haALh7IgHAFQgDhchVhaQg4g8hrhFQibhljwhYQlch/n4hhQkHgzjhgWQkHgZjnALQjTAKiLAhQjDAvh2BnQgxAqgnA8Qg1BSAYAsQh2h1guh0QgfhNAfhEQAZg5BJg7QBKg8BkgjQBFgYB8gYQHehfJXBhQGbBDJ/DFQEIBSCoBYQDlB5CDCnQB/CjgGBaQAFgygVg8QgQgwgjg9Igog2QgggsADgOQA+ArA3BPQA1BNAVBLQATBCgRBRQgJAugjBhIg6CrQgiBmgeBCIh2EHQgJATgOAaQgDAHgIAaQgGAWgGAHQAAgUgEAIIgJAWQgKAQgPAiIhXCvQgwBihkDDQhYCvg3B5QhfDRi1GkQBHk6BymYQBmlsBok2QA9i0A4iUQAVg4AuhxQAOgiAPgNQAMgMAggMIg0ATIAGgPQgKAXg6ARIhWAUQhIAShEAKQiAATizgEQmYgJlmg1Ih0gSIg1gOQgngKgMAGQgIAEgDAGIgIARQgVAqgWBGIgjBwQhPDqjAJRQiOG2hvFeQgQAzgFAJQgOAagfALQgMAEgWAAIgcgBg");
	this.shape_40.setTransform(28.9,233);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A89B9B").s().p("AuYQLQkFgViDgHMALdggFQI8BpIoACQCqABCCgHQCggJCJgVQBxgSA5gVIr7etQgRAugMAHQgIADg6ACIvXAkQgrACgxAAQiCAAipgMg");
	this.shape_41.setTransform(52.4,304.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D5D0D0").s().p("EAPNAlvQjMgHhhgBQpngFwVgaImQgKQiWgDgZgDQhkgMg/gtQhhhHgNisQgEg4AEhaIAGiGMAANg6LQgFhtABg5QAChmAig6QBAhuDBgaQBEgJBfAAICPACQHUAESPACQGCABE2gGQCfgDBYAXQB8AgBABdQAUAuAFBCQABAXAABrIgWV4QAAATgFA1QgBAvALATQAJANAdAWIAqAfIBHBAQAoAmAWAiIADAFQAaArASA5QASA5AFA5QAEArgBASQgDAegSAUQgMAMgbAYQgbAXgNAPIiBCQQgLANgfAcQgcAbgIATQgGAPACAnIACA3IgMK5QgDCHgIENQgFDwACClQACCFgDAgQgIBhgmA6Qg1BRiEAaQhuAWihAAIgcAAgAS3q1QCuBIBtBUIAPsMQAInIABlFQAAh6hFg+QhAg5h9gJQiHgJjIgCQjhgBhvgCQkDgEmhgFIqmgHQjbgDh9ABQi9ACiaAMQhPAFgrAKQhCAOgtAiQguAhgUA7QgOArgCBIQgCA4AEBiQAFBvAAAsIgBFIQAABtgIDeQgFDGAQCDQDYjiGKg7QEMgpGoAlQKJA3JyDLQheghBxAmQB5AqgegKQC9A+BdAmg");
	this.shape_42.setTransform(20.4,168.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DE4B22").s().p("AgKADIAGglQAHAMACAWQACAZAFAKQgagIAEgYg");
	this.shape_43.setTransform(205.4,449.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DE4B22").s().p("AgOApQgLAAABgMQAcABADgaQAEgmAEgGQAOAdgFAXQgHAcgfABg");
	this.shape_44.setTransform(209.2,450.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DE4B22").s().p("AgGAEIABghQAFAOADAPIAAADIAFAbQgNgEgBgWg");
	this.shape_45.setTransform(125.5,462.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DE4B22").s().p("AAIgFQgBALgMACQgHgTAUAGg");
	this.shape_46.setTransform(202.9,444);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DE4B22").s().p("AgGA/QgagDgVgNQgXgPgIgXQgIgUAFgWQAGgaAWgEQgGA9ADAJQAHAjAzADQAxACAOgkQAJgVgFg1QAvAegkAyQggAvgpAAIgHgBg");
	this.shape_47.setTransform(208.3,451.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DE4B22").s().p("AgXBuQAFgnAAgMIABhNQABgwACggQAEgyASAQQAVARgHAhQgBAIgIANQgJANgDAIQgDASACAiIABA3IAABEIgGACQgRAAgBgbg");
	this.shape_48.setTransform(-212,455.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DE4B22").s().p("AhLBtIAdAAQAFgJgCgYIgCgjQACgTABghIADg4QADgjALgPQAPgUAfAJQAiAKgcAEQgoAIgDAFQgFAHAFAQIAHAXIABAdQACAGAPAKQACABATgBQAPAAAAAJQABAIgLABIgRACQgYANgHAJQgKAPAHAcQAIAfAUAAQASABALAGIAHgCQAOgJAPAIIAAAAQAWAHhUAKQgpADg2ACQAGgKgBgNg");
	this.shape_49.setTransform(190.2,455.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DE4B22").s().p("AggCSQASgrADgvQADgmgIg1IgSg7QgOgwAIgCQAKgDAVAxQAMAgAJAdQALAlgFA1QgDAdgKA1QAHgeABAQQABATgLAFQAVgHAUAIg");
	this.shape_50.setTransform(74.1,454.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DE4B22").s().p("AjNB8QATgZAdACQAoAEALgEQAZgJAohQQAQggAFgSQAJglgTgOQgNgKgZAPQgWAMgGgOQgPgfAzgFQAygEAPAcQATAfgWAzQgLAZgeAyQgOAdAJAHQAFAEAhACIAlACQAagBAKgJQAWgTgIg6QgJg6AVgWQAHgKADgCQAEgCAQgCQAJAAAVACQAWADAGAEQANAKAAAQQAAAHgGAfQgDAPgLARQgNARgQAJQgDABgSACQgOACgCAHQgGALAHAGQAFAGAMgBQAegBASAHQAWAJALAYgABnAOQAJAgAdgdQANgMABgUQABgYgPgJQgKgGgMAEIgUAKQANgGgGAMQgFANgDgSIAFA1g");
	this.shape_51.setTransform(48.7,456.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DE4B22").s().p("AiWCDQgIgEgDgUQgEgagCgFQgIgUgQgKIgBgWIgOgpIgMgqQgKgiABgTQABgbAbAhQAKANAIAkIANA2QAPAlASApIAVg7QAMghgCgaIgLgnQgJgcAJgJQAQgRAgBZQAnBoACADQAagRAKg+QAMhLALgQQALgPAcgDQAPgBAfADIAdACIAYgFIARgDQALgCAHACQAQAEAFAFQAGAIgOAMQgMAJgagEQgOgCgEAlQgIBRAPBxIgqAAQABgJADgJIAFgSQAEgTgCgcQgCgmAAgJQAEgcAAgOIAAgvQgFgMgGgCQgDgCgTABQgpACgVAtQgCAEgYBMQgDALgKAvQgIArgKAGQgEACgNgBIgTgBQADgagOgnIgXg/QgRAjgRBHIgDANQgCAIgKADIgIABQgGAAgGgDg");
	this.shape_52.setTransform(-136.2,456);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DE4B22").s().p("AgKAHQAKgGAGgGIACgCIADAOIgMABIgJgBg");
	this.shape_53.setTransform(24.7,468.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DE4B22").s().p("Ag4B9QAIgLgJgQQgLgSgCgHQgDgLACgZIAEgkQAFgvAJgbQARgwAhgEQBAgIALBoQAEAngIApQgHApgPARQgPARgfABIg4gCgAgmgXQgGBJAVAfIAAABQAaArAXguQASgjACgnQACgZgHgcQgKglgUgHQgHgCgEAAQghAAgFBHg");
	this.shape_54.setTransform(20.8,456.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DE4B22").s().p("AFHCGIsWAAQBGgMAZAAIAbACQAUACAHgDQAdgOgCgoQgHgxAAgUQABhqBGgUQAjgKAdAIQAmAJgGAjQgMADgZgLQgagLgPAEQgTAEgOANQgLAKgJASQgVApAIAwQAJA4AqAQQATAIAagNQAcgNAKACQAGACAIAPQAIAPAGACQAdAMgLgpQgSgxgCgMQgFgfAKgkQALgnAVgcQA2hGBEA2QA9AvgZCMIgHAaQgEASAKAHQAJAGAOgLQAKgJAHAOQgMgaAHhCQAKhHAAgYQABglAHgLQALgPAgAFQAHgNAZAKQAZAJgVAPQgFAEgUgDQgVgEgGAEQgHAFgGApQgFAmAVABQAaACAEAMQABABgVASQgUARgFABQgBgFABgDQgGAQABAZQACAdALANQAOAQAfgDQAhgDAKAIQgJgIAAg+QgBg9AKgHQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgCQAAgGADAGQgHgQADgkQADgrgBgMQAlgJALAAQAdgCASAQQgGAOgWACQgYACgIAIQgIAJgBAcQgBAcAHAIQAFAGARAAQARAAAFAHQALANgOAFQgIADgOACQgFADgIACQgEABgFAJQgDAFABASQAAAQACAHQAEAQAKALQALANAQACQALACAUgJQALgFAMAQQgMgQADgpQAHguAAgPIAAgwQgBggABgSQACgeABgBQADgFAVgEQANgDASACIAeACQACAPgZAHQgdAHgGAPQgDAIAAARQAAASADAIQAFANAFAEIAPAIQACADARAAQANADgJALQgFAGgNgCQgPgCgEADQgWARAHAoQAHAoAbAAQgDAGgFABIASgDIAWgDIAEgBIAAAAIAAAEQgCAXg2ABQhCgFgOAAgAglheQgXAIgLAUQgIAPgEAfQgFArAJAgQALAsAkAKQAlAMAbgYQAXgVAHgpQAEgHgDgxQgCguALgBQgQACgigUQgTgMgRAAQgMAAgLAEg");
	this.shape_55.setTransform(136.1,455.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DE4B22").s().p("AABB0QAGgSABgUIgoADQgfABgHgIQgIgKAFgJIAJgPQAFgcAVghQAbgnALgWQAdg0AKAdQAGAQAAA5QgBAeAIAjIAPBAIAJATgAgLgTQgUAdgBAOQAAAYAYABQAXACAAgWIAAhaIgaAqg");
	this.shape_56.setTransform(5.7,457.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DE4B22").s().p("AgfB8QAMgKAAgkQgCgoACgMQADgygDgjQgBgOgCgIQgBgLgJgHQgEgFgVgEQgPgDgBgNICTAAQgIAPgPACQgWABgFAEQgLAIgBAEIgDATQgJAcAAArIACBIQgBAXAcAdg");
	this.shape_57.setTransform(-173.3,456.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DE4B22").s().p("Ah+B4IAAh8QAAhpAJgEQAagLACBQQABAqgDA4QAEA+AigJQAdgIAggzQAigxAHgsQAJgxglgCQgDAAgVAMQgRAKgFgOQgJgYAzgGQAmgEAOARQAOAPgCAmQgDAegRAcIgQAXQgLAPgDAJQgNAkAcAEIAYACQAPACAGAGQAPANAVAEg");
	this.shape_58.setTransform(-88.6,457.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DE4B22").s().p("AAOBxQgHgIgTgqIgkhIQgUgyAMgaQAcArAWAuQAGAPAGAZQAIAVARAPIgBhoQgBhBACgqQAOAAgDAMQAMgWAEAbQABAKACAvIAACUIAAAEIAAAVIABAQQggAAgQgTg");
	this.shape_59.setTransform(-204,455.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DE4B22").s().p("AgWB+QgKgBgFgIQgKgNAEg0QAGg3AAgOIAAhCQAAgdABgBQABgCAWgIQALgDAbADQAeAEgPALQgJAIgVgDQgMgCgHAZQgFATAEAUQAEATAJAPQADAEAOAAQANAAACADQACAEgKAJIgPAMQgJALgHAIQgEAFAAAUQABgDAAAJQABACAAABQAAABAAAAQgBgBAAgBQAAgCgBgEQABAIgDAWQAAASAKAGIgRABIgFAAg");
	this.shape_60.setTransform(-189.7,456.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DE4B22").s().p("AguCNIg+gEQAXgRAAhLQgBhVAIgSQAJgjAIgRQANgfAaAAQAAAQgOAbQgRAhgDAKQgOAzAIBCQAEAsADAHQAIAQAegIQAHgBAegDQAZgCAKgFQAogWgYgkIgWgdQgLgQACgIQABgCAWgdQAMgSgTgVQgLgMgSACQgIAAgYAHQgEgpAuAKQAuAKAKAgQAEAQgIAUQgKAXACAIQAAAKAMAVQALASAEAKIABALIAAAEQgDA4hQAHIgbABIgtgBg");
	this.shape_61.setTransform(-14.6,455.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DE4B22").s().p("AiVCEIgHgEQACgCgHgHQgPgPgGgdQgEgQgBghIgGghQgEgZABgFQAEgYAZgdQAagdAZgIQArgNAoAbQAkAaANAtQAIAegJA2QgMBBACAWQAXghA9hgQARgZALgWQAUgogIgLQgKgNgjAIQgmAJgLgIQgegUAfgHQASgEAjABIAvACQAaAEAIARQAEAKgXAvQgMAZgWAkQgEAIgYAlQgWAjAHAMQAIARAxgFQAygEAPAQIAAABQAGAHgWAAIghgBIkCAAIgTABIgFAAQgJAAgFgBgAhqhmIgQAJQgQAIgBADQgHAMgEATIgGAhQgGAaAEAgQAFAmARARQAoAoAlgeQAagWATgyQgDgugEgWQgGgngcgUQgOgKgKgBIgGgBQgJAAgMAEg");
	this.shape_62.setTransform(-50.6,455.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#878787").s().p("AgQBoQgRgHgFg0QgGgxAGAAQgDgtADgWQAGgnAiACQAjABAEAtQADAYgFAuQAAA1gEASQgJAfgWAAQgIAAgMgGg");
	this.shape_63.setTransform(11.2,-434);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#878787").s().p("AgKBoQgggJADg4QACg+gRgPQgXgKgJgGQgQgLAPgYQAGgKArgEQAngEAAADIAygBQAhACAIASQAMAagYAMQgiARgDAEQgGAJgBAZIgBAxQgDAxgfAAQgEAAgHgCg");
	this.shape_64.setTransform(50.5,-399.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#878787").s().p("AAABtQgoAAgNgJQgVgMgCgiIACg2QAAhFAOgTQASgZBAAGQAcACALAGQAUAKgGAZQgEAWgZAFQgHABgmAAQAJAGAZAGQAVAGAAASQAAARgUAFIgYAEQAFAAgBAFQgBADgDABQAIACANABQAWAAAJAJQALAMgEASQgDAQgOAJQgMAHglAAIgFAAg");
	this.shape_65.setTransform(-33.6,-434.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#878787").s().p("AgFBwQgegCgXgPQgYgQACgUQABgWAjgUQgFADgMgPQgMgMAbAWQgugpAagwQAbgwA+ANQAZAFAQAQQAUAUgPAWQgNATgZgMQgcgNgGAHQADAMAfANQAiAPAHAKQAPAXgIAdQgIAbgYAQQgTANgaAAIgHgBgAgPArQAJADADgFQADgFgHgFQgJgGgSgBQAKABgCAEQgCAEgGgIQAKAOAJAEg");
	this.shape_66.setTransform(27.3,-399.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#878787").s().p("AAlBfQgXgQgOgBQgMAAgVAOQgVAOgMAAQgbACgIgUQgGgRAIgZQA6icAvACIAAAAQAYgCAhBCQASAmASAyQATA/gtACIgBAAQgOAAgVgOg");
	this.shape_67.setTransform(1.9,-400);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#878787").s().p("AAKBVQgKgIgCgLQgBgCgMAHQgFACgCAPQgCANgMAFQgKADgMgEQgLgEgHgIQgFgFgCgrQgCgqACAAQgDgkACgTQACgjAVgNQASgKAlAEQAiADAUAMQATALAKASQAKATgCAWQAAAIgJAQQgJASAAAIQAAAIAKAQQAJAPgDAKQgIAegUAAQgSAAgbgXg");
	this.shape_68.setTransform(-51.5,-400.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#878787").s().p("AgMBwQhEgGgPhDQgGgcAFhYQAAABABAAQAAABAAgBQAAAAABgBQAAAAAAgCQADgGgFAGQAXgiAYAGQAWAHAIAlIAAA9QAEAzAVgVQANgMgEguQgEgyAJgNQAQgYAbAIQAZAHAFAYQAPBEgZA5QgbBBg7AAIgJAAg");
	this.shape_69.setTransform(31.9,-433.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#878787").s().p("AgaBrIgEAAQggAAgEgBQgVgEgKgRQgJgPADgpQAEgpAAgNIAAgpQADgYAPgKQAQgLAnAEQAdACAYAJQAtAPAVAlQAVAngQApQgRAugpARQgIAEgdAEIgVACQgIAAAAgCgAgXAXQgCANAKAFQAPAIANgPQANgOAAgQQAAgOgIgLQgJgMgNAAQgRABgDAMQgBAHgBARQADgLACAIQACAKgHgHQAFAFgCAOg");
	this.shape_70.setTransform(-9.6,-434.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#878787").s().p("AhKBWQglgbgEgzQgEgzAkghQAggeAxgCQAvgCAiAaQAmAdgBA1IAAABQgBAwgiAfQggAdguACIgGAAQgpAAgegXgAgEAnQgEgBAKgBQAIAAAAABQAdgJABgfQACglgqABQglABABAlQABAfAfAIIAAAAg");
	this.shape_71.setTransform(-25.4,-400.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#878787").s().p("ABDBZQgKgcgIgBQgcAsgVgBQgUgBgegsQgKAbgLALQgRASgXgNQgXgNAFglQALgrADgOQAEgqAGgVQALgmAdgBQAZAAATAiQAJAPALAdQgCgJAEAAQAKAAgKATIAgg8QAZgkAfARQATALAJAxQAEAaAEArQAHAmgBAJQgCAagaAFIgKABQgTAAgHgUg");
	this.shape_72.setTransform(-60.8,-434.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#878787").s().p("Ah3BkQgVgRALgxQAPgyABgUIAAgCQAFggAGgNQAKgWAbABQAaAAASAeQAKARALAlIAcg3QAWgjAYAAQAbABAKAkIAJA6QACAPALAuQAFArgWAOQgrAagXhIIgRAeQgKARgQADQgUAEgOgRQgKgLgJgaIgbApQgJANgNAAQgKAAgOgLg");
	this.shape_73.setTransform(60.3,-434);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgXgDQACgeAVAFQATAEAFAZQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQgNAYgPABIgCAAQgSAAABghg");
	this.shape_74.setTransform(-142.5,-176.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAAAcQgSgEgGgZQgGgYATgDIAFAAIAEAAIACABQAYAEACAaQACAagUAAIgIgBg");
	this.shape_75.setTransform(-157.1,-170.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EC4399").s().p("AguA1QgMgVgKgqQgGgcAVgUQATgSAegDQAdgDAVAQQAUAPAEAcIAAAKIAAANQgEAXgOAVQgUAdgcAGIgKABQgYAAgQgbgAgRgHQgCAiATgBQAQgBANgZQAAABAAAAQAAAAAAAAQgBgBAAAAQAAAAABAAIABgCQgFgagVgEIgFgBQgPAAgBAag");
	this.shape_76.setTransform(-143,-176.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EC4399").s().p("AgBD8Qg7gBgOg+QgCgNgChiQAFg9AAgjQAAhGgagMQgKgFgaAAQgZABgMgHQgWgMgJgYQgJgXAGgYQALgtA3gIQAHgBBDABIBBAAIA2gDQAngCAZACQBNAGANAzQAGAXgJAWQgKAWgUAMQgLAHgeACQgeAAgJAIQgWARACBLQACAmAFA+QgBBMgIAbQgRA2g3AAIgBAAg");
	this.shape_77.setTransform(125.5,-156.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EC4399").s().p("AgeEHQhFgIg5g5QhDhBBGgzQAegWAiAPQATAIAnAaQAeAQARgOQATgOgegcQgOgPgvgOQgwgOgSgPQgvglgChDQgBggALgdQALgfAWgWQAQgQA7gYQA8gbAFAQIAAAAIAEAAIAEAAQAlAAAhAMQAqAQAVAfQATAcgFAhQgFAlghALQgWAIgygeQgvgcgPAKQghAUAoAaQAOAIArAQQChBBgmCKQgTBGg/AfQgqAVg1AAQgQAAgTgCg");
	this.shape_78.setTransform(164.6,-156.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EC4399").s().p("AgQEBQhCgEg0gqQg5gvgOhNQgGghAAhwIAAgLQABhkAEgVQAShPBKAPQA+ANAFBhQADA1gIBdQABAvAFAQQALAjAiABQAgAAALgjQAFgRABgtQgJhjAFg4QAIhnBIgBQBIgCAMBbQAHAzgIBeQAABagQAxQgWBGhAAnQgyAfg4AAIgPgBg");
	this.shape_79.setTransform(80.9,-155.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EC4399").s().p("AA5HPQAhg3gIg9QgIhCgfhjQglhtgNg1IgZhNQgPgxgFggQgDgUAKgpQAKgngGgYQgMgvgqhdQgqhbgLgxIBQgEQA2gDAgAEQBlALAWBNQAKAmgCA+IgDBkIgBJxQAABhglAoQgoArhdAAQA1glAdgwg");
	this.shape_80.setTransform(-121.2,-185.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EC4399").s().p("AhmD+QhWgCgYgkQgIgNgBhpQgBhkgCAAQgGhKgBgrQgBhPAbgdQAZgaBJAAIBrAHQBiAIBDBFQBEBHgBBiQgBBbg9BGQg9BGhZANQhGAKgsAAIgIAAgAg6hUQgGAOgBA7IAAAHIAAACQAAARgDAqQABAkAYAIQAiANAlgfQAlgdAGgjQAHgigSghQgSgigjgNQgTgIgPAAQgXAAgIATg");
	this.shape_81.setTransform(-72.6,-156.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EC4399").s().p("AikD5Qg6gRgFhkQAGhxAAggQgIhZAEgwQAIhYA9gLQAkgHAcAXQAKAIAkAsIAzBBQAfAnAXAZQAAhbALguQAShUBOAaQA4ASAFBhQADA1gIBbQAAARADAyQACAxgDAfQgMBfhGgBQgpAAhLhpQgmg6gKgMQgagegNAFQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAA9QgBAugGAbQgOBAgzAAQgOAAgRgFg");
	this.shape_82.setTransform(31.5,-156.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EC4399").s().p("AiqDIQhThGgKhsQgJhrBIhUQBIhUBtgIQBtgIBXBPQBWBOgCBrQAEhfAABeQAABdgEhTQACBihHBMQhIBMhlAHIgUABQhfAAhKg+gAhIhJQghAbAAAuQAAAuAhAdQAdAaAqAAQApABAdgZQAhgcAAgxIAAAAQAAgtghgcQgdgZgpAAQgqAAgdAZg");
	this.shape_83.setTransform(-20.6,-156.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F58428").s().p("AgEBLQgbgDgVgjQgRgcgGggQgFgaAXgPQAVgNAhADQAfADAWATQAaAUAAAgQAAAdgaAYQgYAWgaAAIgEAAgAgUgFQAGAYAPAFQAeAJgCghQgBgbgagFIgFAAIgFAAQgSADAGAYg");
	this.shape_84.setTransform(-157.4,-170.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F58428").s().p("AgjgxIBHAgIhEBAIgBABIgCACg");
	this.shape_85.setTransform(-200.6,-225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F58428").s().p("Ag4BOQgRgfACguQACgsAVggQASgcAcgGIAMgCIADAAQAiAVANAVQAPAZgDAlQgEAogQAhQgWAsggABIgDABQggAAgTgig");
	this.shape_86.setTransform(191.2,-228.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F58428").s().p("AgDD+QhIgEgJhqQgDghADg1IAEhFIgChEQgCgyAFghQAOhiBIAHQBFAHAJBiQAFA1gJBfIAAABQAAASAEA0QACA1gDAhQgMBhhGAAIgFAAg");
	this.shape_87.setTransform(117,-214);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F58428").s().p("AgeECQhBgJgxgsQgxgtgOg+QgDgOgChHQgBhEACAAIAAgPQAAhfAJghQAYhXBRAlQAxAWAEBlQABA3gGBbQACAnALAUQARAeAhgOQAdgMADgsIgChFIgChFQgBgxAGgfQAQhdBRASQA/APAGBhQADA1gJBeQgBBSgXA0QgcBAhBAiQgsAWguAAQgPAAgPgCg");
	this.shape_88.setTransform(-21.7,-213.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F58428").s().p("AiYD7Qg8gRgFhiQgCgfAEgzIAEhCQgIhaAEgxQAHhZA9gMQAdgFAZANQAZANANAaQAFALgBA5QAAAyAKADIAlg7QAYgqAVgYQBBhJA7AtQAkAcgEAjQgDAZgbAnIgsA/QgVAjAJAXQAHASAfAmQAnAvALAQQAzBPhRAmQg4AZhFhPQhDhhgXgbIgDA9QgCAqgHAZQgRA6gwAAQgNAAgQgEg");
	this.shape_89.setTransform(81.4,-213.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F58428").s().p("AhqD+QhJgBgbgfQgbggAAhNQAGhWAAgdQgFhGgBgoQgBhJAWggQAXggA/gEQAigCA/AFQBqAEBIA8QBLA/AJBqQAIBkhEBOQhDBLhnAKQhRAIgZAAIgDAAgAg9hRQgDAJAABIQAABHADAIQALAfA1gRQAigKATgdQAUgdgEgiQgCgegTgXQgSgXgegJQgRgHgPAAQgZAAgHAUg");
	this.shape_90.setTransform(-73.1,-213.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F58428").s().p("AiRD/QhHgFgJhjQgDggADgzIADhEQgIhbADgzQAGhdA9gPQAkgJAeAXQAMAJAkArIAyBGQArA2AMgFQgCABABgMQABgJAAALQABhXAKgiQAWhNBIAXQA8ASAEBoQADA5gJBgQAAARADAvQACAvgEAdQgMBZhGgBQgzAAg9hRQg8hegagbIAAA9QgBAqgEAaQgOBKg9AAIgIAAg");
	this.shape_91.setTransform(29.4,-214);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F58428").s().p("AheGJQg7gHgfgrQgcgngBg/QgEjPgBiEQgCkqAJgBIAFANIALAbIAdBLQAbBHATAsQAOAgAoAdQAqAfAOAZQAjBBBOCbQBICQAsBNQhwAGgtABIgoAAQhBAAgzgFg");
	this.shape_92.setTransform(-183.1,-169.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AkZBtQBlhrCgg7QCSg5CZgBIADAAIgGAIQgjAphVAXQhpAXgrAQQhMAdhEAoIhFApQgUAKgVAAQgSAAgRgHg");
	this.shape_93.setTransform(-170.5,-225.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AjWDUQgMgHgKgUIgNgiQgnhegXg+IACAAIASgCQCLgQCBgzQCJg3B3hcQASAWASAzIAbBPQAQArAAAOQgBAUgcAZQhgBWipA4QheAggVAFQgqAKgdAAQgdAAgRgKg");
	this.shape_94.setTransform(-164.5,-208.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAAAIIAAgMIAAgJIAAALIAAACIAAAOIAAgGg");
	this.shape_95.setTransform(-135.9,-177.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#653600").s().p("AhZBYQgqgiAEg0QADg4AoggQAkgcAwADQAyAEAkAgQAfAdAJApIACAWIAAABQgKAigDAHQgMAagRgPQgIgIADgiQADglgCgIQgSg2g2gFQgygFghAtQgPAVADAZQADAaAQAUQAQAVAVACQAXAEASgWQAggigzgSQgDgBgOAEQgKACgGgLQgEgIAMgLQAJgIAKgEQAagKAUAQQASAPAEAbQAEAcgNAZQgPAbgeAIQgMAEgOAAQgiAAgegYg");
	this.shape_96.setTransform(-192.1,-242.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#653600").s().p("AglCeQgBgGgBgaQgBgSgHgOQgGgLgLgNIgUgXQgogwgBg0QgBg6AwgoQAvgnA7AGQBAAFAaA3QAMAZgFAiQgFAhgRAaQgsA+g7gqQgXgRgBgfQgCghAagRQARgMAWAFQAYAGgLAXQgBACgeAPQgVALAUARQAaAUAYgdQAWgagCgbQgDhGhHABQhDACgcA3QgZAyAyBCQAiAuAFAJQAPAaABAZIAAAJIAAADQgFAggLAJQgDACgDAAQgJAAgHgcg");
	this.shape_97.setTransform(-169.7,-256.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#653600").s().p("ABMIjQgggJgSgPQgZgVgVguQgXg0gMgWIidkyQgKgWgGgLQgLgUgNgIQgGgDgRgDQgQgDgIgGQgVgQgSgxQgRg4gIgUIgihKQgWgvgCgdQgCghAkgiQATgSAwgdQB8hPCYgsQBhgcA8gCQAwgBATATQAOANAUAzIA8CaIARAmQAKAXgBAQQgBANgJAOQgMARgCAIQgGAXAOAsIAYBBIAwCmQANAwAqB5QAbBtgoA6QgnA6hQAfQgyATg9AHIglADQglgHgSgFgAkuhWIANAiQAKAUAMAIQAjAUBTgVQAUgFBgggQCng3BghWQAcgaABgWQABgOgRgqIgbhQQgSgygSgXQh3BciJA3QiBAziLARQB/gNhHAJQhKAJgCgDIAAAAIAAAAQAXBAAnBdgAiGnQQifA9hmBrQAkAPAkgPIBAgmQBKgsBRggQArgRBogWQBTgYAkgoQgIAJgEgHQgFgKAVAAQiZAAiTA5g");
	this.shape_98.setTransform(-159.2,-184.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#191919").s().p("EAWMAkiMgrIgAvIhMAAQgugBgegFQiMgaggiQQgMgzAAhPQADhZAAgpMAAWgsHIgCpAQgBlbAMjmQAIirCygjQA+gMBiACICYAGIbTAdQHxAHFLAIQBnADBDA5QBIA+ADBmQACAigCBEMgAVAp8IgEKxQgCGdgFEUQgCBkg7BDQg+BGhgAAIgFAAg");
	this.shape_99.setTransform(6.4,162.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#191919").s().p("Aq2ICQhWAAhDgUQhMgYg5g0QhEg9gdhZQgZhKAAhoIAApcMAh1AAAQAgAAADAEQADADAAAkIACE0QABC3gDB7QgDCGhTBmQhVBoiEAZQgiAGo4ABIt6gBg");
	this.shape_100.setTransform(-0.1,-418.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F4904D").s().p("ArxIrQhJAAhGgYQhFgZg5guQiKhvgXjlQgIhPADh4IAFl8IgDgtQgCgkAFgGQAGgGAnACIAvADMAhRAAAQANAAA7gGQA3gEANAKQAOAKgCBDQgBAkgEA0IAAGPQAAB1gIA2QgNBcgrBGQhYCPioApQhZAVjoAAg");
	this.shape_101.setTransform(-0.2,-415);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("EgkkANAIBg56MBESAAAQANAAApgEQAngDAOAHQANAGABAJQABAGAAAYIBdZNg");
	this.shape_102.setTransform(-0.2,-197.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EE7D2B").s().p("EAAnAttMghfgAEQhmAAhAg3QhFg7gDhmUgACgA7AAChPfIAAnbICHAAQT8gFQ4gCUAhKgAEAAuAALQAVAFACAGQABAHgCAeMAAABSVQAAAsAEBuQADBmgMBCQghC/ilAHQhgAEw8AAIuVAAg");
	this.shape_103.setTransform(0,178);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D5D0D0").s().p("AgoA6QgIgPABgrQABgjAFgNQAJgWAbgFQAHgCAQACQASACAGAGQAJAJgFAXQgCAMgHAVIgBACQgBAKADAOIAIAWQAEAXgnAHIgOABQgbAAgKgTg");
	this.shape_104.setTransform(130.6,-322.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D5D0D0").s().p("AgoBAQgKgKACgtQABgoAIgPQAKgSATgEQALgEAaAEQAXADgBAbQAAAYgRAdQgRAfgSAPQgMAKgKAAQgIAAgHgHg");
	this.shape_105.setTransform(78,-318.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D5D0D0").s().p("Ag2AwQgTgTAAgdQgBgbATgUQAVgVAigBIABAAQAjAAAUAWQATAUAAAbQAAAcgTATQgUAWgiABIgCAAQghAAgVgWgAgTgEQgHAXAaAFQASADAEgTQAEgQgPgIQgJgEgEAAQgMAAgFAQg");
	this.shape_106.setTransform(57.9,-317.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D5D0D0").s().p("AgjBGQgMgIgCgmQgBgcAEgUQAHgeAUgNQATgNAdAJIACABQArAOg1BKQgMAcgJANQgIAQgMAAQgIAAgHgFg");
	this.shape_107.setTransform(95.7,-319.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D5D0D0").s().p("AgWBKQgUgMgEgfQgKhJAdgZQAUgRAfAHQAjAHgNAeIAAABIgBABQgGASAIAqQAGAkgYANQgSAJgMAAQgMAAgJgGg");
	this.shape_108.setTransform(113.2,-320.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D5D0D0").s().p("AgzA3QgLgKgEgfQgEgjAEgRQAHgbAfAAIACAAQAgABAYALQAeAOAHAdQAJAigaAVQgWATgjABIgFABQgcAAgLgLgAgOAAQgBARAOABQAOAAABgRQABgPgPgBIAAAAQgNAAgBAPg");
	this.shape_109.setTransform(1.2,-319.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D5D0D0").s().p("AAABDQgggCgTgVQgRgTABgZQAAgaASgTQAUgUAggCQAcgBARAVQAPASAEAdQAGAkgTARQgRAPgeAAIgHgBg");
	this.shape_110.setTransform(-103,-323.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D5D0D0").s().p("AgxAoQgKgNgDgZQgEgWAFgRQAJgdARACQAPABAIAaQACAFAAAcQADAWAMgIQAIgFAAgZIAAglIACgBIAQgGQAVgCAIAgQALAngOAcQgNAegmACIgFAAQggAAgSgZg");
	this.shape_111.setTransform(-40.6,-321.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D5D0D0").s().p("AANAzQgSgUgFgCQgCAUgOAIQgOAIgPgOQgJgIgBgZIAAghQgBg5AcAKQARAGAkApQgCgUAJgPQAKgTAVAJQAMAFABAYQABAKgDAYQgBAMACAZQgCAVgWADIgDAAQgLAAgOgNg");
	this.shape_112.setTransform(-20.1,-320.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D5D0D0").s().p("AgLBAQgngJgPgmQgQgmAdgdQAXgWA7AJQA9AKgcAlQgLAOgSgJQgYgNgHACQgdAGANAXQANAZAXgSIABgBQAYgNARARQARAUgYAUQgKAIgZACIgJAAQgOAAgLgDg");
	this.shape_113.setTransform(35.6,-318.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D5D0D0").s().p("AAiBBIgSgFIgSADQgOACgFAAQgcgDgIgjQgIgdAKgfQAMgiAdACQAQABAqALIABABIAHAOQAFAPADAbQAFAwgNALQgFADgGAAIgHgBg");
	this.shape_114.setTransform(-83,-323.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D5D0D0").s().p("AglA8QgggRgHgcQgHgZAWgWQAbgaACgLQALgBALABQAVACAXAJQAmARAGAeQAFAXgTAaQgSAZgZAGQgJACgIAAQgTAAgWgLgAACAXQAXgBgBgWQgBgTgWgBQgXgBABAVQAAATATADIACABIABAAIABAAg");
	this.shape_115.setTransform(-62,-323);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EE7D2B").s().p("EgjEAO2IBU2uIAFiKQAEhXAPg3QAqidCVgHQA1gCdvABQddAAAnABQBaADA8A6QA/A7AABaIBhaYg");
	this.shape_116.setTransform(-0.2,-374.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.4,-470.5,468.9,941.1);


(lib._4inlins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8A42B").s().p("Ao8PKQi8hAich4QgggYgegbIBvh9QCbCIDBBBQC7A/DFgNQDEgMCxhVQC4hZCIiaQCIiaBBjBQA+i5gMjGQgMjEhVizQhYi3ibiJIBvh9QCzCfBoDWQBjDOAODnQAPDlhJDZQhLDgifC1QifCzjWBoQjRBjjjAOQglACgkAAQi/AAi3g8g");
	this.shape.setTransform(70.9,-48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#573F29").s().p("Ag4ADIA1g6QAcAbAgAYIg2A8g");
	this.shape_1.setTransform(-26.6,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#573F29").s().p("Ao9IJIP7yCICABxIv7SCg");
	this.shape_2.setTransform(-85.9,104.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8A42B").s().p("Ah9gVIBZhlICjCPIhaBmg");
	this.shape_3.setTransform(-28.5,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8A42B").s().p("Ah9gUIBZhmICiCPIhZBmg");
	this.shape_4.setTransform(-139.6,169);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFCE30").s().p("Al1RdQjihMi0ieQiziehnjXQhjjOgPjnQgOjlBJjZQBMjhCei0QCfi0DWhnQDOhjDngOQDmgPDZBJQDfBLC2CfQCyCfBoDWQBjDPAPDmQAODlhJDZQhLDhifC1QifCzjWBnQjQBkjmAOQgkACgkAAQi9AAi4g9gAg9vvQjFAMizBVQi4BZiHCaQiICZhBDCQg/C6AMDEQAODHBUCwQBYC5CbCHQCaCJDBBAQC8A/DCgNQDGgMCyhVQC3hZCIiZQCIibBBjBQA/i7gNjDQgMjFhViyQhYi4ibiIQibiJjAhAQibg0ilAAQgeAAggACg");
	this.shape_5.setTransform(51,-63.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A5E3D").s().p("AhwAIIBsh5IB1BqIhsB5g");
	this.shape_6.setTransform(-26.9,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A5E3D").s().p("Ap9HRIP7yDIEADiIv7SCg");
	this.shape_7.setTransform(-92.3,98.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFCE30").s().p("AjQhdIBahlIFHEgIhaBlg");
	this.shape_8.setTransform(-36.8,36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFCE30").s().p("AjQhdIBahlIFHEgIhaBlg");
	this.shape_9.setTransform(-147.8,161.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(249,250,251,0.2)").s().p("AlsD0QjAhAiaiIQCIiYC3hYQCyhVDEgMQAagCAkAAQCkAACcA0QDABACaCIQiHCYi4BYQiwBVjGAMQgbACgjAAQikAAicg0g");
	this.shape_10.setTransform(46.5,-134.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(252,252,253,0.098)").s().p("AmgPbQjAhRiUiUQiViVhSjAQhUjIAAjZQAAjZBUjHQBSjACViVQCUiUDAhRQDIhVDYAAQDaAADHBVQDBBRCUCUQCVCVBRDAQBUDHAADZQAADahUDHQhRDAiVCVQiUCUjBBRQjHBVjaAAQjYAAjIhVgAg5vwQjEAMiyBWQi3BXiICaQCaCIDBBAQCbA0CkAAQAkAAAcgCQDEgMCwhVQC5hYCHiZQibiIjAhBQicg0ikAAQghAAgdACg");
	this.shape_11.setTransform(50.5,-63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.7,-181.2,337.6,362.6);


(lib._4incoffee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43221B").s().p("ACPAeQhRghhlgHQiJgIhAgvQACgKAEgMIAAAAQBFAhCYAJQBkAHBIApQAzAfAfAsIAAABIgEAJQgngig3gYg");
	this.shape.setTransform(-132.9,-122.2,0.998,0.998,-99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#622E23").s().p("AgsCeIgCgBQhTgdg0g8Qg0g6AAg9QAAgVAIgVIAAgBIAAgBIAAgBIABAAIAAAAQAUg1A6gbQgKAQgGAPQgYBGA1BKQA0BIBhAiQA5AUA4AAQA7AAAugVQgYAjgtATQgsATg4AAQg4AAg1gTg");
	this.shape_1.setTransform(-132.1,-121.4,0.998,0.998,-99.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D3327").s().p("Ag6CoQhigjg1hKQg1hIAZhGQAYhFBXgZQBXgZBhAjQBjAjA1BKQA0BIgYBFQgZBGhWAZQglAKgmAAQg0AAg6gUg");
	this.shape_2.setTransform(-133.4,-122.4,0.998,0.998,-99.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape_3.setTransform(-100,-56.2,0.998,0.998,-99.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_4.setTransform(-93.9,-57.1,0.998,0.998,-99.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_5.setTransform(-100,-56.1,0.998,0.998,-99.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43221B").s().p("AAID+QAJhMgniVQgchhARhTQANg6AegsIABAAIAKAAQgUAxgDA8QgGBXAaBjQAlCFgYBNIgWACg");
	this.shape_6.setTransform(-163.1,-59.2,0.998,0.998,-99.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#622E23").s().p("AgmD8Qg5gCgugvQATAEAQAAIABAAQBKAAAyhJQA1hLAAhnQABg+gUg3QgUg2ghgkQA3AQAnA8QAnA7AIBRIAAABIAAAAIAAAGIABABIAAAEIAAAEIAAATQAABng1BLQg0BJhIABg");
	this.shape_7.setTransform(-163.7,-63.9,0.998,0.998,-99.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D3327").s().p("AAAD+QhKAAg0hMQg1hLABhnQAAhpA1hLQA1hJBIAAQBLABA0BKQA1BLgBBnQgBBqg1BKQg0BKhJAAIAAAAg");
	this.shape_8.setTransform(-163.3,-60.2,0.998,0.998,-99.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_9.setTransform(-52,-14.6,0.998,0.998,-99.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_10.setTransform(-51.2,-8.9,0.998,0.998,-99.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_11.setTransform(-52.2,-15.2,0.998,0.998,-99.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#43221B").s().p("AjACiQA/gtBSiAQA1hXBKgrQAygeA3gFIABAAIAGAIQgxARgwAmQhFA2g2BWQgpBBgnAmQggAfgjAQQgJgHgIgIg");
	this.shape_12.setTransform(-117.8,3.8,0.998,0.998,-99.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#622E23").s().p("Ai8CDIgBgBIAAAAIAAAAQglgsAEhBQAIAPAMAOQAqAuBIAAQAwAAAwgUQA0gWAtgoQAugoAcgzQAagyAEgyQAYAxgPBAQgOBAgwA5IgBABIAAABIAAAAIAAAAIgBAAIAAAAQgTAXgPANIgBAAIAAAAIgCACIAAAAQgsAngzAVQgwAVgvAAQhJAAgqgvg");
	this.shape_13.setTransform(-114.7,3.6,0.998,0.998,-99.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D3327").s().p("Ai8CpQgxg3AUhZQAVhXBOhHQBPhGBYgKQBbgLAxA4QAyA4gVBZQgUBXhPBGQhPBGhYALQgPABgNAAQhHAAgpgvg");
	this.shape_14.setTransform(-118.4,4.2,0.998,0.998,-99.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#43221B").s().p("ABKB+QgchTg+hPQhWhtgHhOQAKgHAJgDIABgBQAVBKBdB3QBABOAQBSQALA7gMA1IgBABIgJADQAAg0gUg5g");
	this.shape_15.setTransform(-173.2,-16.9,0.998,0.998,-99.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#622E23").s().p("AgHDEQg8gxgghOQgbhAAAg/QAAg+AZguQAYgvAsgTQAYgKAZAAQAgAAAgAOQgRABgRAIQhBAcgUBZQgTBYAoBfQAWA6AoAqQAmApAtAUIgRABQg9AAg4gvg");
	this.shape_16.setTransform(-172.5,-11.2,0.998,0.998,-99.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D3327").s().p("AguDWQhNgxgohgQgohfAThZQAUhYBEgdQBEgdBLAwQBMAwApBhQAoBfgUBZQgTBYhEAdQgZALgbAAQgtAAgugeg");
	this.shape_17.setTransform(-173.5,-17.4,0.998,0.998,-99.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#43221B").s().p("AjiBqIAAAAQBIgcBvhlQBKhFBRgWQA5gQA2AJIAEAKQg0AEg4AXQhQAihKBEQg4A0gvAaQgnAXgmAGg");
	this.shape_18.setTransform(-157,32.8,0.998,0.998,-99.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#622E23").s().p("AihB1QgrgWgUgmIAAgBIAAgBIgBAAQgZgzAVg8QAEARAIAQQAUAlArAVQAqAVA3AAQBIAABJglQA3gaAogqQAmgqAQguQAMA9goBCQgpBAhOAqIAAAAIgCABIAAAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgCABQhHAjhIABQg3gBgqgUg");
	this.shape_19.setTransform(-152,32.2,0.998,0.998,-99.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D3327").s().p("AhlDAQhagNghhBQgihCAqhOQArhQBdgvQBcgwBaANQBaANAhBCQAiBCgrBOQgqBQheAvQhJAlhEAAQgUAAgUgDg");
	this.shape_20.setTransform(-157.7,33.1,0.998,0.998,-99.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_21.setTransform(-86.4,54.3,0.998,0.998,-99.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_22.setTransform(-84.8,54.2,0.998,0.998,-99.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_23.setTransform(-86.8,54.8,0.998,0.998,-99.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_24.setTransform(-134,97.1,0.998,0.998,-99.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_25.setTransform(-134,94.4,0.998,0.998,-99.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_26.setTransform(-133.5,97.7,0.998,0.998,-99.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape_27.setTransform(-76,145.3,0.999,0.999,161.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_28.setTransform(-77.9,139.3,0.999,0.999,161.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_29.setTransform(-75.9,145.2,0.999,0.999,161.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#43221B").s().p("AAID+QAJhMgniVQgchhARhTQANg6AegsIABAAIAKAAQgUAxgDA8QgGBXAaBjQAlCFgYBNIgWACg");
	this.shape_30.setTransform(121.4,-171.3,0.999,0.999,161.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#622E23").s().p("AgmD8Qg5gCgugvQATAEAQAAIABAAQBKAAAyhJQA1hLAAhnQABg+gUg3QgUg2ghgkQA3AQAnA8QAnA7AIBRIAAABIAAAAIAAAGIABABIAAAEIAAAEIAAATQAABng1BLQg0BJhIABg");
	this.shape_31.setTransform(116.9,-170,0.999,0.999,161.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D3327").s().p("AAAD+QhKAAg0hMQg1hLABhnQAAhpA1hLQA1hJBIAAQBLABA0BKQA1BLgBBnQgBBqg1BKQg0BKhJAAIAAAAg");
	this.shape_32.setTransform(120.4,-171,0.999,0.999,161.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_33.setTransform(-42.2,91.4,0.999,0.999,161.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_34.setTransform(-36.7,89.8,0.999,0.999,161.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_35.setTransform(-42.8,91.7,0.999,0.999,161.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#43221B").s().p("AjACiQA/gtBSiAQA1hXBKgrQAygeA3gFIABAAIAGAIQgxARgwAmQhFA2g2BWQgpBBgnAmQggAfgjAQQgJgHgIgIg");
	this.shape_36.setTransform(-14,153.6,0.999,0.999,161.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#622E23").s().p("Ai8CDIgBgBIAAAAIAAAAQglgsAEhBQAIAPAMAOQAqAuBIAAQAwAAAwgUQA0gWAtgoQAugoAcgzQAagyAEgyQAYAxgPBAQgOBAgwA5IgBABIAAABIAAAAIAAAAIgBAAIAAAAQgTAXgPANIgBAAIAAAAIgCACIAAAAQgsAngzAVQgwAVgvAAQhJAAgqgvg");
	this.shape_37.setTransform(-14.7,150.6,0.999,0.999,161.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D3327").s().p("Ai8CpQgxg3AUhZQAVhXBOhHQBPhGBYgKQBbgLAxA4QAyA4gVBZQgUBXhPBGQhPBGhYALQgPABgNAAQhHAAgpgvg");
	this.shape_38.setTransform(-13.5,154.2,0.999,0.999,161.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#43221B").s().p("ABKB+QgchTg+hPQhWhtgHhOQAKgHAJgDIABgBQAVBKBdB3QBABOAQBSQALA7gMA1IgBABIgJADQAAg0gUg5g");
	this.shape_39.setTransform(176.2,-188.4,0.999,0.999,161.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#622E23").s().p("AgHDEQg8gxgghOQgbhAAAg/QAAg+AZguQAYgvAsgTQAYgKAZAAQAgAAAgAOQgRABgRAIQhBAcgUBZQgTBYAoBfQAWA6AoAqQAmApAtAUIgRABQg9AAg4gvg");
	this.shape_40.setTransform(181.7,-190.1,0.999,0.999,161.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6D3327").s().p("AguDWQhNgxgohgQgohfAThZQAUhYBEgdQBEgdBLAwQBMAwApBhQAoBfgUBZQgTBYhEAdQgZALgbAAQgtAAgugeg");
	this.shape_41.setTransform(175.7,-188.1,0.999,0.999,161.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#43221B").s().p("AjiBqIAAAAQBIgcBvhlQBKhFBRgWQA5gQA2AJIAEAKQg0AEg4AXQhQAihKBEQg4A0gvAaQgnAXgmAGg");
	this.shape_42.setTransform(20.7,188,0.999,0.999,161.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#622E23").s().p("AihB1QgrgWgUgmIAAgBIAAgBIgBAAQgZgzAVg8QAEARAIAQQAUAlArAVQAqAVA3AAQBIAABJglQA3gaAogqQAmgqAQguQAMA9goBCQgpBAhOAqIAAAAIgCABIAAAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgCABQhHAjhIABQg3gBgqgUg");
	this.shape_43.setTransform(19.3,183.2,0.999,0.999,161.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6D3327").s().p("AhlDAQhagNghhBQgihCAqhOQArhQBdgvQBcgwBaANQBaANAhBCQAiBCgrBOQgqBQheAvQhJAlhEAAQgUAAgUgDg");
	this.shape_44.setTransform(21.1,188.6,0.999,0.999,161.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_45.setTransform(31.2,114.8,0.999,0.999,161.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_46.setTransform(30.8,113.3,0.999,0.999,161.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_47.setTransform(31.7,115.2,0.999,0.999,161.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_48.setTransform(-37.5,32,0.999,0.999,161.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_49.setTransform(-40.1,32.5,0.999,0.999,161.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_50.setTransform(-36.9,31.5,0.999,0.999,161.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#43221B").s().p("ACPAeQhRghhlgHQiJgIhAgvQACgKAEgMIAAAAQBFAhCYAJQBkAHBIApQAzAfAfAsIAAABIgEAJQgngig3gYg");
	this.shape_51.setTransform(75.2,148.5,0.999,0.999,98.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#622E23").s().p("AgsCeIgCgBQhTgdg0g8Qg0g6AAg9QAAgVAIgVIAAgBIAAgBIAAgBIABAAIAAAAQAUg1A6gbQgKAQgGAPQgYBGA1BKQA0BIBhAiQA5AUA4AAQA7AAAugVQgYAjgtATQgsATg4AAQg4AAg1gTg");
	this.shape_52.setTransform(74.7,147.5,0.999,0.999,98.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6D3327").s().p("Ag6CoQhigjg1hKQg1hIAZhGQAYhFBXgZQBXgZBhAjQBjAjA1BKQA0BIgYBFQgZBGhWAZQglAKgmAAQg0AAg6gUg");
	this.shape_53.setTransform(75.6,148.9,0.999,0.999,98.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape_54.setTransform(64.6,75.5,0.999,0.999,98.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_55.setTransform(58.5,74.4,0.999,0.999,98.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_56.setTransform(64.6,75.4,0.999,0.999,98.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#43221B").s().p("AAID+QAJhMgniVQgchhARhTQANg6AegsIABAAIAKAAQgUAxgDA8QgGBXAaBjQAlCFgYBNIgWACg");
	this.shape_57.setTransform(123.7,98.2,0.999,0.999,98.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#622E23").s().p("AgmD8Qg5gCgugvQATAEAQAAIABAAQBKAAAyhJQA1hLAAhnQABg+gUg3QgUg2ghgkQA3AQAnA8QAnA7AIBRIAAABIAAAAIAAAGIABABIAAAEIAAAEIAAATQAABng1BLQg0BJhIABg");
	this.shape_58.setTransform(122.7,102.8,0.999,0.999,98.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6D3327").s().p("AAAD+QhKAAg0hMQg1hLABhnQAAhpA1hLQA1hJBIAAQBLABA0BKQA1BLgBBnQgBBqg1BKQg0BKhJAAIAAAAg");
	this.shape_59.setTransform(123.5,99.2,0.999,0.999,98.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_60.setTransform(32,20.9,0.999,0.999,98.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_61.setTransform(33,15.2,0.999,0.999,98.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_62.setTransform(32.1,21.5,0.999,0.999,98.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#43221B").s().p("AjACiQA/gtBSiAQA1hXBKgrQAygeA3gFIABAAIAGAIQgxARgwAmQhFA2g2BWQgpBBgnAmQggAfgjAQQgJgHgIgIg");
	this.shape_63.setTransform(100.3,24,0.999,0.999,98.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#622E23").s().p("Ai8CDIgBgBIAAAAIAAAAQglgsAEhBQAIAPAMAOQAqAuBIAAQAwAAAwgUQA0gWAtgoQAugoAcgzQAagyAEgyQAYAxgPBAQgOBAgwA5IgBABIAAABIAAAAIAAAAIgBAAIAAAAQgTAXgPANIgBAAIAAAAIgCACIAAAAQgsAngzAVQgwAVgvAAQhJAAgqgvg");
	this.shape_64.setTransform(97.3,23.2,0.999,0.999,98.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6D3327").s().p("Ai8CpQgxg3AUhZQAVhXBOhHQBPhGBYgKQBbgLAxA4QAyA4gVBZQgUBXhPBGQhPBGhYALQgPABgNAAQhHAAgpgvg");
	this.shape_65.setTransform(101.1,23.8,0.999,0.999,98.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#43221B").s().p("ABKB+QgchTg+hPQhWhtgHhOQAKgHAJgDIABgBQAVBKBdB3QBABOAQBSQALA7gMA1IgBABIgJADQAAg0gUg5g");
	this.shape_66.setTransform(146.6,61.1,0.999,0.999,98.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#622E23").s().p("AgHDEQg8gxgghOQgbhAAAg/QAAg+AZguQAYgvAsgTQAYgKAZAAQAgAAAgAOQgRABgRAIQhBAcgUBZQgTBYAoBfQAWA6AoAqQAmApAtAUIgRABQg9AAg4gvg");
	this.shape_67.setTransform(147.6,55.4,0.999,0.999,98.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6D3327").s().p("AguDWQhNgxgohgQgohfAThZQAUhYBEgdQBEgdBLAwQBMAwApBhQAoBfgUBZQgTBYhEAdQgZALgbAAQgtAAgugeg");
	this.shape_68.setTransform(146.6,61.7,0.999,0.999,98.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#43221B").s().p("AjiBqIAAAAQBIgcBvhlQBKhFBRgWQA5gQA2AJIAEAKQg0AEg4AXQhQAihKBEQg4A0gvAaQgnAXgmAGg");
	this.shape_69.setTransform(146.7,8.8,0.999,0.999,98.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#622E23").s().p("AihB1QgrgWgUgmIAAgBIAAgBIgBAAQgZgzAVg8QAEARAIAQQAUAlArAVQAqAVA3AAQBIAABJglQA3gaAogqQAmgqAQguQAMA9goBCQgpBAhOAqIAAAAIgCABIAAAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgCABQhHAjhIABQg3gBgqgUg");
	this.shape_70.setTransform(141.8,7.8,0.999,0.999,98.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6D3327").s().p("AhlDAQhagNghhBQgihCAqhOQArhQBdgvQBcgwBaANQBaANAhBCQAiBCgrBOQgqBQheAvQhJAlhEAAQgUAAgUgDg");
	this.shape_71.setTransform(147.5,8.7,0.999,0.999,98.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_72.setTransform(86.3,-33.9,0.999,0.999,98.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_73.setTransform(84.7,-34.2,0.999,0.999,98.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_74.setTransform(86.8,-34.2,0.999,0.999,98.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_75.setTransform(144.9,-59.6,0.999,0.999,98.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_76.setTransform(144.2,-57,0.999,0.999,98.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_77.setTransform(144.7,-60.3,0.999,0.999,98.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#43221B").s().p("ACPAeQhRghhlgHQiJgIhAgvQACgKAEgMIAAAAQBFAhCYAJQBkAHBIApQAzAfAfAsIAAABIgEAJQgngig3gYg");
	this.shape_78.setTransform(129.4,-113.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#622E23").s().p("AgsCeIgCgBQhTgdg0g8Qg0g6AAg9QAAgVAIgVIAAgBIAAgBIAAgBIABAAIAAAAQAUg1A6gbQgKAQgGAPQgYBGA1BKQA0BIBhAiQA5AUA4AAQA7AAAugVQgYAjgtATQgsATg4AAQg4AAg1gTg");
	this.shape_79.setTransform(128.4,-113.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6D3327").s().p("Ag6CoQhigjg1hKQg1hIAZhGQAYhFBXgZQBXgZBhAjQBjAjA1BKQA0BIgYBFQgZBGhWAZQglAKgmAAQg0AAg6gUg");
	this.shape_80.setTransform(129.6,-114.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape_81.setTransform(58.7,-92.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_82.setTransform(58.6,-85.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_83.setTransform(58.6,-92);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#43221B").s().p("AAID+QAJhMgniVQgchhARhTQANg6AegsIABAAIAKAAQgUAxgDA8QgGBXAaBjQAlCFgYBNIgWACg");
	this.shape_84.setTransform(72.1,-153.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#622E23").s().p("AgmD8Qg5gCgugvQATAEAQAAIABAAQBKAAAyhJQA1hLAAhnQABg+gUg3QgUg2ghgkQA3AQAnA8QAnA7AIBRIAAABIAAAAIAAAGIABABIAAAEIAAAEIAAATQAABng1BLQg0BJhIABg");
	this.shape_85.setTransform(76.8,-153.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6D3327").s().p("AAAD+QhKAAg0hMQg1hLABhnQAAhpA1hLQA1hJBIAAQBLABA0BKQA1BLgBBnQgBBqg1BKQg0BKhJAAIAAAAg");
	this.shape_86.setTransform(73.1,-153.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_87.setTransform(9.7,-51.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_88.setTransform(4,-51.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_89.setTransform(10.3,-51.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#43221B").s().p("AjACiQA/gtBSiAQA1hXBKgrQAygeA3gFIABAAIAGAIQgxARgwAmQhFA2g2BWQgpBBgnAmQggAfgjAQQgJgHgIgIg");
	this.shape_90.setTransform(2.4,-119.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#622E23").s().p("Ai8CDIgBgBIAAAAIAAAAQglgsAEhBQAIAPAMAOQAqAuBIAAQAwAAAwgUQA0gWAtgoQAugoAcgzQAagyAEgyQAYAxgPBAQgOBAgwA5IgBABIAAABIAAAAIAAAAIgBAAIAAAAQgTAXgPANIgBAAIAAAAIgCACIAAAAQgsAngzAVQgwAVgvAAQhJAAgqgvg");
	this.shape_91.setTransform(2,-116.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6D3327").s().p("Ai8CpQgxg3AUhZQAVhXBOhHQBPhGBYgKQBbgLAxA4QAyA4gVBZQgUBXhPBGQhPBGhYALQgPABgNAAQhHAAgpgvg");
	this.shape_92.setTransform(2,-120.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#43221B").s().p("ABKB+QgchTg+hPQhWhtgHhOQAKgHAJgDIABgBQAVBKBdB3QBABOAQBSQALA7gMA1IgBABIgJADQAAg0gUg5g");
	this.shape_93.setTransform(31.9,-170.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#622E23").s().p("AgHDEQg8gxgghOQgbhAAAg/QAAg+AZguQAYgvAsgTQAYgKAZAAQAgAAAgAOQgRABgRAIQhBAcgUBZQgTBYAoBfQAWA6AoAqQAmApAtAUIgRABQg9AAg4gvg");
	this.shape_94.setTransform(26.2,-171);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6D3327").s().p("AguDWQhNgxgohgQgohfAThZQAUhYBEgdQBEgdBLAwQBMAwApBhQAoBfgUBZQgTBYhEAdQgZALgbAAQgtAAgugeg");
	this.shape_95.setTransform(32.5,-171.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#43221B").s().p("AjiBqIAAAAQBIgcBvhlQBKhFBRgWQA5gQA2AJIAEAKQg0AEg4AXQhQAihKBEQg4A0gvAaQgnAXgmAGg");
	this.shape_96.setTransform(-19.8,-163);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#622E23").s().p("AihB1QgrgWgUgmIAAgBIAAgBIgBAAQgZgzAVg8QAEARAIAQQAUAlArAVQAqAVA3AAQBIAABJglQA3gaAogqQAmgqAQguQAMA9goBCQgpBAhOAqIAAAAIgCABIAAAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgCABQhHAjhIABQg3gBgqgUg");
	this.shape_97.setTransform(-20.1,-158);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6D3327").s().p("AhlDAQhagNghhBQgihCAqhOQArhQBdgvQBcgwBaANQBaANAhBCQAiBCgrBOQgqBQheAvQhJAlhEAAQgUAAgUgDg");
	this.shape_98.setTransform(-20,-163.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_99.setTransform(-52.7,-96.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_100.setTransform(-52.8,-95.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_101.setTransform(-53.1,-97.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_102.setTransform(-87.2,-150.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_103.setTransform(-84.5,-150.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_104.setTransform(-87.9,-150.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-210.5,394,421.1);


(lib._4inbeansbig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape.setTransform(-32.2,-80.6,0.816,0.816,-99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_1.setTransform(-27.2,-81.3,0.816,0.816,-99.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_2.setTransform(-32.2,-80.5,0.816,0.816,-99.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_3.setTransform(7.1,-46.5,0.816,0.816,-99.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_4.setTransform(7.7,-41.9,0.816,0.816,-99.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_5.setTransform(6.9,-47,0.816,0.816,-99.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43221B").s().p("AjACiQA/gtBSiAQA1hXBKgrQAygeA3gFIABAAIAGAIQgxARgwAmQhFA2g2BWQgpBBgnAmQggAfgjAQQgJgHgIgIg");
	this.shape_6.setTransform(-46.7,-31.5,0.816,0.816,-99.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#622E23").s().p("Ai8CDIgBgBIAAAAIAAAAQglgsAEhBQAIAPAMAOQAqAuBIAAQAwAAAwgUQA0gWAtgoQAugoAcgzQAagyAEgyQAYAxgPBAQgOBAgwA5IgBABIAAABIAAAAIAAAAIgBAAIAAAAQgTAXgPANIgBAAIAAAAIgCACIAAAAQgsAngzAVQgwAVgvAAQhJAAgqgvg");
	this.shape_7.setTransform(-44.2,-31.7,0.816,0.816,-99.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D3327").s().p("Ai8CpQgxg3AUhZQAVhXBOhHQBPhGBYgKQBbgLAxA4QAyA4gVBZQgUBXhPBGQhPBGhYALQgPABgNAAQhHAAgpgvg");
	this.shape_8.setTransform(-47.3,-31.2,0.816,0.816,-99.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43221B").s().p("AjiBqIAAAAQBIgcBvhlQBKhFBRgWQA5gQA2AJIAEAKQg0AEg4AXQhQAihKBEQg4A0gvAaQgnAXgmAGg");
	this.shape_9.setTransform(-78.8,-7.8,0.816,0.816,-99.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#622E23").s().p("AihB1QgrgWgUgmIAAgBIAAgBIgBAAQgZgzAVg8QAEARAIAQQAUAlArAVQAqAVA3AAQBIAABJglQA3gaAogqQAmgqAQguQAMA9goBCQgpBAhOAqIAAAAIgCABIAAAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgCABQhHAjhIABQg3gBgqgUg");
	this.shape_10.setTransform(-74.7,-8.3,0.816,0.816,-99.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D3327").s().p("AhlDAQhagNghhBQgihCAqhOQArhQBdgvQBcgwBaANQBaANAhBCQAiBCgrBOQgqBQheAvQhJAlhEAAQgUAAgUgDg");
	this.shape_11.setTransform(-79.4,-7.6,0.816,0.816,-99.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_12.setTransform(-21,9.8,0.816,0.816,-99.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_13.setTransform(-19.7,9.7,0.816,0.816,-99.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_14.setTransform(-21.3,10.2,0.816,0.816,-99.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_15.setTransform(-59.9,44.8,0.816,0.816,-99.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_16.setTransform(-60,42.6,0.816,0.816,-99.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_17.setTransform(-59.6,45.3,0.816,0.816,-99.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape_18.setTransform(-12.6,84.2,0.817,0.817,161.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_19.setTransform(-14.1,79.3,0.817,0.817,161.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_20.setTransform(-12.5,84.1,0.817,0.817,161.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_21.setTransform(15.1,40.1,0.817,0.817,161.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_22.setTransform(19.6,38.8,0.817,0.817,161.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_23.setTransform(14.6,40.4,0.817,0.817,161.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_24.setTransform(75.1,59.3,0.817,0.817,161.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_25.setTransform(74.8,58,0.817,0.817,161.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_26.setTransform(75.5,59.6,0.817,0.817,161.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_27.setTransform(18.9,-8.4,0.817,0.817,161.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_28.setTransform(16.8,-8,0.817,0.817,161.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_29.setTransform(19.4,-8.9,0.817,0.817,161.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_30.setTransform(75.8,-17.5,0.817,0.817,98.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_31.setTransform(76.7,-22.2,0.817,0.817,98.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_32.setTransform(75.9,-17,0.817,0.817,98.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_33.setTransform(57.6,-76.7,0.818,0.818);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_34.setTransform(52.9,-76.8,0.818,0.818);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_35.setTransform(58.1,-76.8,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.3,-100.4,192.6,200.9);


(lib._6inst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ñëîé 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape.setTransform(-328.6,55.5,0.428,0.428);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape_1.setTransform(-317.4,55.5,0.428,0.428);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231207").s().p("AgmAKIAAgSIBOAAIAAASg");
	this.shape_2.setTransform(-323,60.8,0.428,0.428);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231207").s().p("AgmAJIAAgRIBOAAIAAARg");
	this.shape_3.setTransform(-323,50.1,0.428,0.428);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_4.setTransform(-323,55.4,0.428,0.428);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape_5.setTransform(-222.2,55.5,0.428,0.428);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape_6.setTransform(-211,55.5,0.428,0.428);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231207").s().p("AgmAKIAAgSIBOAAIAAASg");
	this.shape_7.setTransform(-216.6,60.8,0.428,0.428);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231207").s().p("AgmAJIAAgRIBOAAIAAARg");
	this.shape_8.setTransform(-216.6,50.1,0.428,0.428);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_9.setTransform(-216.6,55.4,0.428,0.428);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape_10.setTransform(-247.9,55.5,0.428,0.428);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231207").s().p("AgIAjIAAhFIASAAIAABFg");
	this.shape_11.setTransform(-236.7,55.5,0.428,0.428);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231207").s().p("AgmAKIAAgSIBOAAIAAASg");
	this.shape_12.setTransform(-242.3,60.8,0.428,0.428);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231207").s().p("AgmAJIAAgRIBOAAIAAARg");
	this.shape_13.setTransform(-242.3,50.1,0.428,0.428);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231207").s().p("AggAhQgNgOAAgTQAAgSANgOQAOgNASAAQATAAAOANQANAOABASQgBATgNAOQgOANgTAAQgSAAgOgNg");
	this.shape_14.setTransform(-242.3,55.4,0.428,0.428);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#224659").s().p("AgCAAQgBgCADgBQAEAAAAADQAAAEgEAAQgEAAACgEg");
	this.shape_15.setTransform(-270.2,21.5,0.428,0.428);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#224659").s().p("AAAADQAAABAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIAAgCQgBgDADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIABACQAAABgBABQAAAAAAABQAAAAgBAAQgBABAAAAIgBgBg");
	this.shape_16.setTransform(-253.5,25.2,0.428,0.428);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#224659").s().p("AAAAEQgCAAAAgEQgBgDADAAQAEAAAAADQAAAEgEAAIAAAAg");
	this.shape_17.setTransform(-244.9,21.5,0.428,0.428);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBABAAIAAgnQgBgDADABQAEAAAAACIAAAnQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_18.setTransform(-244.9,23.1,0.428,0.428);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBABAAIAAgnQgBgDADABQAEAAAAACIAAAnQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_19.setTransform(-270.2,23.1,0.428,0.428);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#224659").s().p("AAAAXQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgmQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQADAAABACIAAAmQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAABg");
	this.shape_20.setTransform(-253.5,26.8,0.428,0.428);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D4255").s().p("AgCAcQABgcgBgbQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAAAAAIACAAIABADIAAA3QAAADgDAAQgCAAAAgDg");
	this.shape_21.setTransform(-255.6,22.7,0.428,0.428);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#224659").s().p("AgHAXQgEAAAAgDIABgmQgBgEAEABQABAAABAAQABAAAAABQAAAAABAAQAAABAAAAIAAADQADgIAKADQABAAAAABQAAAAABABQAAAAAAABQAAABgBAAIgBADQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgDgCgDACQgBABgBAEIgCAJIABAUQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_22.setTransform(-279,26.7,0.428,0.428);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D4255").s().p("AgDAcIAAg3QAAgDADAAQAEAAAAADIAAA3QAAADgEAAQgDAAAAgDg");
	this.shape_23.setTransform(-282.4,22.7,0.428,0.428);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D4255").s().p("AAAAfQgDAAAAgDIAAg3QAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIABAAQAEAAAAADIAAA3QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAg");
	this.shape_24.setTransform(-247.5,26.4,0.428,0.428);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQADABgBgDIAAgCQgBgJAHgCIAAAMQAAAEAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAAAADIAAAVQAAAHAGgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABQgIAAAAgMg");
	this.shape_25.setTransform(-271.1,22.7,0.428,0.428);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAgEADAAQADABgBgDIAAgCQAAgGABgBIAFgEIAAAMQAAAEADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEgBAAAEIAAAWQAAAGAFgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgEABQgHAAgBgMg");
	this.shape_26.setTransform(-220,22.7,0.428,0.428);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAABAAQAEAAgBgEIAAgBQAAgGABgBIAFgEIAAAMQAAAEAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgEAAAAAEIAAAVQAAAGAGgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAADQAAAAAAABQABAAgBABQAAAAgBAAQAAAAgBAAIgDABQgJAAAAgMg");
	this.shape_27.setTransform(-238.3,26.4,0.428,0.428);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D4255").s().p("AgEATIAAgXQAAgEgDABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgDQAAgBAAAAQABgBAAgBQAAAAABAAQAAAAABAAQADAAAAgEIAAgBQgCgIAIgDIAAAMQAAABAAABQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBAAAGIAAATQAAAHAFgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAADQACACgEAAIgEABQgIAAAAgMg");
	this.shape_28.setTransform(-277,26.4,0.428,0.428);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#224659").s().p("AgBAfIgDAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgeQAAgBAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAQgEABAAgEQAAgEAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBQgBgQAQACQABAAAAAAQABAAAAAAQABABAAAAQAAABgBAAIAAADQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFgBgCACQgCACABAFQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIADAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAABQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgEAAgBABIAAAFIAAAcQAAABAAAAQAAABgBABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_29.setTransform(-282.3,26.4,0.428,0.428);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#224659").s().p("AgBAXQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgQgpIAAgBQAFgBACABIADAGIAJAbIAKgbQABgFACgBIAHAAIgQApQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgBAAg");
	this.shape_30.setTransform(-274.7,23.1,0.428,0.428);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#224659").s().p("AABAXIgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgQgpIAAgCIAFAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAKAfIAKgbIADgGQACgBAFABIAAACIgPAnQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_31.setTransform(-268.8,23,0.428,0.428);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#224659").s().p("AgQAMQgFgMAGgMQAFgMANABQALACAEAKIABACIgBABQgGACgBgCQgFgKgIAEQgIADAAALIABAIQADAIAGAAQAJAAACgIQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAIAEACQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBABQgDANgNABIgCAAQgLAAgFgMg");
	this.shape_32.setTransform(-252.1,26.8,0.428,0.428);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#224659").s().p("AgQAYQAIABADgFQAEgEgDgHIgPgnIABAAIAGAAIADAGIAJAcIAKgcIADgGQACgBAFABIgUA2QgCAFgEACIgEABQgGAAAAgIg");
	this.shape_33.setTransform(-254.2,23.4,0.428,0.428);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#224659").s().p("AAKAUIAAgaQgBgIgGgBQgJgCgCAJIgBAIIAAAUQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgDAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgmQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAFAAgBAEIAAACQAIgIAJACQAKADAAAJIABAfQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_34.setTransform(-221.6,23,0.428,0.428);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgFAEQgEADAAAHIAAAWQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIgEAAQgDABAAgEQABgUgBgSQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAIADAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAADQAJgKAJAEQAIACACAIQABALgBAVQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_35.setTransform(-235.1,23,0.428,0.428);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgFAEQgEADAAAGIAAAXQAAADgEAAQgEAAAAgDIAAglQAAgEADAAQAFAAgBAEIAAABQAIgIAKADQAIACACAJQABAKgBAVQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_36.setTransform(-243.5,23,0.428,0.428);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#224659").s().p("AAKAUIAAgZQAAgHgFgCQgFgDgFAFQgEADAAAGIAAAWQAAAEgEAAQgEAAAAgEIAAglQAAgEADAAQAFABgBADIAAACQAJgIAJACQAJADABAJIAAAfQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_37.setTransform(-278.7,23,0.428,0.428);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#224659").s().p("AAKAVIAAgZQAAgHgFgDQgFgCgGAEQgDAEAAAGIAAAWQAAADgEAAQgEAAAAgDIAAglQAAgEADAAQAFAAgBAEIABABQAHgIAKADQAJACABAIIAAAgQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEAAIAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_38.setTransform(-280.9,23,0.428,0.428);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#224659").s().p("AAKAUIAAgYQAAgIgFgCQgFgCgFAEQgEADAAAGIAAAWQAAAEgEAAQgEAAAAgEIAAgkQAAgFADAAQAFABgBAEIAAABQAJgIAJADQAJACAAAIIABAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_39.setTransform(-246,26.7,0.428,0.428);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#224659").s().p("AgRAIIAAgbQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAEAAAAADIAAAZQAAAJAIABQACAAAEgCQAEgDAAgEIABgZQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAAmQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgEQgHAIgGAAQgPgBAAgOg");
	this.shape_40.setTransform(-241.8,26.8,0.428,0.428);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#224659").s().p("AgIAWQgJgCAAgKIAAgeQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIACAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAIAAAVIAAAEQAAAKAJABQAIAAABgKQABgFAAgTQAAgEAEAAQAEAAAAAEIAAAkQAAAEgDAAQgEAAAAgEIAAgDQgGAIgGAAIgHgBg");
	this.shape_41.setTransform(-261.2,23.1,0.428,0.428);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#224659").s().p("AgRALIAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAEgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABABQAGALAJgFQAFgCgBgDQAAgEgEgBIgNgEQgJgBAAgJQAAgKAKgCQAHgDAIAEQAEABACAEQACAEgBABQgBABgEAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQgCgEgGgBQgEgBgDADQgEAFAHADIAPAFQAKACgDALQgCAGgGADQgEACgGAAQgOAAgDgNg");
	this.shape_42.setTransform(-239.8,26.8,0.428,0.428);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#224659").s().p("AgUADIAAgDQAAgSAQgEQAIgCAIAFQAHAGABAKIAAAIQgCATgSAAQgSgBgCgUgAgLgGQgDAHADAHQAEAIAHAAQAGABAEgHQACgCABgIIgBgDQgBgLgLgBIAAAAQgIAAgDAJg");
	this.shape_43.setTransform(-280.9,26.8,0.428,0.428);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#224659").s().p("AAAAXQgRgBgCgRIgBgFQAAgSAQgEQAIgCAIAFQAIAFABALQABAGgCAFQgCAIgGAEQgFADgGAAIgBAAgAgLgGQgCAHADAHQADAIAHAAQAIAAAEgIIABgIIAAgEQgDgLgKAAIAAAAQgJAAgCAJg");
	this.shape_44.setTransform(-276.7,23,0.428,0.428);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#224659").s().p("AgBAXQgHAAgFgFQgFgFgBgIIgBgFQAAgSAQgEQAIgCAIAFQAHAGABAKQACAEgCAIQgCAHgGAEQgGADgGAAIgBAAgAgLgGQgCAGACAIQADAIAIAAQAIAAADgIQACgEAAgEIgBgDQgBgLgLgBIAAAAQgJAAgCAJg");
	this.shape_45.setTransform(-265.8,26.8,0.428,0.428);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#224659").s().p("AgBAYQgRgCgBgRIgBgFQAAgSAPgDQAIgEAIAGQAIAFABALQACAEgCAIQgCAHgGAEQgGAEgGAAIgBAAgAgLgGQgCAHACAHQADAIAIAAQAIAAADgIIACgIIgBgEQgCgLgKAAIAAAAQgIAAgDAJg");
	this.shape_46.setTransform(-267.9,26.8,0.428,0.428);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D4255").s().p("AgPAfQgFAAAAgDIAAg2QAAgEAEAAIAhAAQAEAAAAAEQAAAEgEgBIgZAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAAPQAAAAAAABQAAAAAAABQABAAAAAAQABABABAAIAVAAQADgBAAADQAAADgDAAIgVAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAABIAAAWQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_47.setTransform(-270,26.4,0.428,0.428);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#224659").s().p("AAKAdIAAgaQAAgJgJAAQgJgBgBAKIAAAZQAAADgEAAQgEAAAAgDIAAg3QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADAAQAEAAAAAEIAAATQAJgJAIADQAIACACAIIAAAgQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_48.setTransform(-248.5,22.7,0.428,0.428);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#224659").s().p("AAKAcIAAgZQAAgKgJAAQgJgBgBALIAAAYQAAAEgEAAQgEAAAAgEIAAg2QAAgDAEAAQAEgBAAAEIAAATQAJgIAIADQAJACABAIIAAAgQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgEAAIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_49.setTransform(-275.4,26.4,0.428,0.428);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#224659").s().p("AgSAJQgDgJADgHQAEgQAQABQAHAAAFAFQAFAFABAHQABAFgBABQAAABgHAAIgVAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABQADAJAIACQAHABAFgGQACgEAGADQgEAOgQAAQgOgBgEgOgAgGgMQgEADAAADQgBABAAAAQABAAAAABQAAAAAAAAQABAAAAAAIATAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgCgJgKAAQgCAAgEADg");
	this.shape_50.setTransform(-273.4,26.8,0.428,0.428);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#224659").s().p("AgBAXQgQgBgCgSIAAgJQAEgSAQABQARABACARQABAEgBABQgBABgFAAIgXAAQgDgBABAEQABAJAKACQAHABAEgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGABQgFANgNAAIgDAAgAAAgPQgJAAgBAJQgBAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIASAAQAEABgBgEQgDgIgIAAIgBAAg");
	this.shape_51.setTransform(-266.9,23.1,0.428,0.428);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#224659").s().p("AgSAJQgDgJADgHQAEgQAPABQAHAAAGAFQAFAFABAHIAAAGQgBABgGAAIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQABAJAJADQAHACAFgHQADgEAGADQgEAOgQAAQgPgBgDgOgAAAgPQgDAAgDADQgEADgBADQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIASAAQAEABgBgDQgBgEgEgDQgCgCgEAAIgBAAg");
	this.shape_52.setTransform(-258.1,26.8,0.428,0.428);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#224659").s().p("AAAAXQgOAAgFgOQgCgJACgHQAFgQAQABQAPABADAQQABAFgBABQgBABgGAAIgWAAQgDgBABAEQACAJAIACQAIABAEgGQACgEAHACQgEAOgPAAIgBAAgAAAgPQgIAAgDAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIATAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBQgCgIgJAAIgBAAg");
	this.shape_53.setTransform(-223.6,23,0.428,0.428);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#224659").s().p("AgCAXQgQgCgCgRIABgKQACgIAGgEQAGgFAHABQAGAAAGAFQAFAFABAIQABAEgBABQgBABgGAAIgWAAQAAAAgBAAQAAAAgBAAQAAABAAABQAAAAAAABQACAJAIACQAHABAFgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHABQgCAHgHAEQgFACgFAAIgDAAgAAAgPQgJAAgCAJQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIASAAQADABAAgEQgDgIgIAAIgBAAg");
	this.shape_54.setTransform(-250.2,26.8,0.428,0.428);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#224659").s().p("AgCAXQgQgDgBgQQgBgEABgGQAEgRAQABQAIAAAFAFQAFAFABAIQABAEgBABQgBABgFAAIgWAAQgEgBABAEQACAJAIACQAIABAEgGQADgEAGADQgCAHgHAEQgEADgGAAIgDgBgAgGgMQgEACgBAEQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIATAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQgBgEgDgCQgDgDgFAAIAAAAQgDAAgDADg");
	this.shape_55.setTransform(-228.9,23.1,0.428,0.428);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#224659").s().p("AgFAXQgGAAgEgDQgEgDAAgFQgCgMANgBIAOgCIACgBQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABgFgEgCQgEgDgEABQgGABgDAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgCQABgEADgCQAFgEAIAAQAHgBAGADQAEAEABAGIAAATIACANQgGABgBgBQgBAAgCgEQgIAFgFAAIgCAAgAgGAEQgFABAAAEQgBAFAEABQAIADAFgFQAGgDgBgJg");
	this.shape_56.setTransform(-237.2,23,0.428,0.428);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#224659").s().p("AgEAXQgGAAgEgDQgEgDgBgFQgBgMANgBIANgCIADgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQABgFgDgCQgEgDgFABQgGABgDAFQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgEgCQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAIAAgCQACgEADgCQAFgEAHAAQAIgBAFADQAFAEAAAGIAAATQAAAHACAGQgFABgCgBIgCgEQgIAFgGAAIgBAAgAgFAEQgGABAAAFQAAAEAGACQAFACAGgFQAFgEgBgIg");
	this.shape_57.setTransform(-272.7,23,0.428,0.428);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#224659").s().p("AgGAXQgIAAgDgGQgEgGAEgHQADgEAIgBIAMgDQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgEgCgCQgDgEgGABQgIAAgBAFQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAgDAEgCQAEgEAIAAQAIgBAFAEQAFADAAAGIABAVQAAAGABAFQgFABgCgBIgCgFQgIAGgHAAIgCAAgAgFAEQgGABAAAFQAAAEAGACQAFACAFgFQAGgEgBgIIgPADg");
	this.shape_58.setTransform(-246.4,23,0.428,0.428);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#224659").s().p("AgEAXQgOAAgBgLQgBgMANgBIANgCQAEgBAAgCQABgEgDgDQgEgDgFABQgGABgDAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgEADgCQAFgEAHAAQAIgBAFADQAFADAAAHIAAATQAAAHACAGQgGABgBgBQgBAAgBgFQgIAGgGAAIgBAAgAgFAEQgFABgBAEQAAAFAEABQAHADAGgFQAFgEgBgIg");
	this.shape_59.setTransform(-233,23,0.428,0.428);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#224659").s().p("AgSAdIAAg3QAAgBAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAFAAgBAEIAAACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAFgHAHABQAJAAAEAIQAEAGAAAJQAAAIgEAGQgFAHgIABQgFABgHgGIAAASQAAAEgFAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAgAgIgSQgDAEAAAIIABAGQACAHAIABQAHAAADgIQADgIgDgIQgDgGgGgBIgBAAQgEAAgEAFg");
	this.shape_60.setTransform(-259.1,23.4,0.428,0.428);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#224659").s().p("AgSAcIAAg1QAAgFADAAQAFAAgBAFIAAACQAGgHAFAAQAMgCAFANQAEALgDAKQgDAJgJADQgIAEgIgIIAAASQAAAEgFAAQgDAAAAgEgAgIgSQgDAEAAAIIABAGQADAHAHABQAHAAADgHQAEgHgEgKQgDgGgGgBIgBAAQgEAAgEAFg");
	this.shape_61.setTransform(-257,23.4,0.428,0.428);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#224659").s().p("AgRAQQgCgHACgJQACgKAJgEQAJgDAIAIIAAgTQAAgDAEAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAAA2QAAAFgDgBQgFAAABgEIAAgBQgFAGgGAAIgBABQgNAAgEgQgAAAgHQgHABgCAGQgBACAAAFQAAAGABADQAEAHAFABQAHAAADgHQAFgKgFgIQgDgGgGAAIgBAAg");
	this.shape_62.setTransform(-263.8,26.4,0.428,0.428);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#224659").s().p("AgHAdQgDgBgDgEQgFgGAAgKQAAgJAFgGQAFgHAHAAQAFAAAIAGIAAgTQAAgBAAgBQAAAAAAgBQABAAABAAQABAAABAAQABAAAAAAQABAAABAAQAAABAAAAQAAABAAABIAAA5QAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEAAAAgEIAAgCQgGAGgGAAQgDAAgEgCgAAAgHQgFAAgEAHIgBAIQAAAGACADQADAHAFAAQAIAAADgHQAEgKgFgHQgCgHgHAAIgBAAg");
	this.shape_63.setTransform(-244,26.4,0.428,0.428);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#224659").s().p("AgfATIAAgkQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQAGABgBADIAAABIADgDQADgDAEAAIAOABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABABABIALAfIALgcIADgFQABgBAFAAIAAAEIgPAlQgBADgEAAQgEAAgBgDIgNgoIgBADQgCAFgEgCQgDgBgCACQgDABgBAEIgBAJIAAASQAAAEgEAAIgBAAQgDAAAAgEg");
	this.shape_64.setTransform(-255.4,26.7,0.428,0.428);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#224659").s().p("AABAgQgXAAgEgZQgBgKADgKQAFgOAQgDQANgDAJAJIAFAGQACAEgBABQAAABgFABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgGgNgLACQgNABgDANQgDALAEALQAEAMAMAAQAMAAAFgNIAAgCIABgBIAHACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBACQgFASgSAAIgCAAg");
	this.shape_65.setTransform(-250.9,22.7,0.428,0.428);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#224659").s().p("AgGAfQgKgEgBgIQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAFABACADQAEAFAIgDQAHgBAAgHIAAgGQgJAHgIgEQgJgDgDgKQgCgKAEgJQAEgJAJgCQAGgCAIAHIABAAIAAgDQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAFAAAAAFIgBAkQAAANgHAFQgFAEgHAAIgGgBgAAAgYQgGAAgEAJQgCAIADAHQADAGAGAAQAIAAADgGQABgCAAgGIgBgIQgDgIgHAAIgBAAg");
	this.shape_66.setTransform(-231,23.4,0.428,0.428);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#224659").s().p("AAYAXQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgZQAAgJgHAAQgJgBgCAJIgBAFIAAAVQABADgEAAQgDAAAAgDIAAgZQAAgIgGgBQgIgCgEAJIAAAbQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgDAAQgBAAAAAAQgBAAgBgBQAAAAAAgBQAAAAAAgBIAAgmQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAABAAIADAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAADQAGgHAJAAQAHABACAHQAGgIAHAAQAOgBABAPIAAAdQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDAAg");
	this.shape_67.setTransform(-226.3,23,0.428,0.428);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#224659").s().p("AgXAOQgBgEACgBQAGgCABAGQACAJAKACQAKACAGgGQAEgDgBgEQgBgEgEgDIgOgFIgJgBQgJgFAAgIQAAgKAIgEQANgIAOAIQAHADABAJQABABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgDgDgCQgJgEgIADQgFADAAAGQAAAFAGABIAWAHQAJADAAAJQABAJgHAGQgHAFgLAAQgTgBgEgRg");
	this.shape_68.setTransform(-260.4,26.4,0.428,0.428);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#224659").s().p("AAAAgQgTAAgEgSQgBgEACgBQAGgBABAFQACAGAGADQAFADAGgBIAGgBQAGgDAAgHQAAgFgHgDIgVgFQgJgEAAgJQgBgKAJgEQANgIAOAIQAHADABAJQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIgEAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAgDgEgDQgJgEgIAEQgFACAAAGQAAAFAGACIANAFIAJACQAJADABAJQAAAKgIAFQgHAFgJAAIgBAAg");
	this.shape_69.setTransform(-263.5,22.7,0.428,0.428);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#224659").s().p("AgDAZIACgBQAEABAEgFQADgEgDgGIgMgjIgCgDIgBADQgBABAAABQAAAAgBAAQAAABgBAAQgBgBAAAAQgHgDgDAIIgBALIAAASQAAADgEAAQgFAAABgDIAAgmQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIADAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAADQAGgKAKAFIAFgBQADAAACAFIALAdIAKgcIADgFQABgBAGAAIAAACIgTAwIgEAHQgEAFgGAAQgFgBACgGg");
	this.shape_70.setTransform(-236.2,27.1,0.428,0.428);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#224659").s().p("AAZAfQgDAAAAgDIAAguIgBAAIgRAvQAAACgEAAQgDAAAAgCIgRgvIAAAuQAAADgEAAQgEAAgBgDIAAg3QAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAHAAABABQACABACAGIANArIAQguQACgFAFAAIAGABQABABAAAFIAAAzIgBADIgEAAg");
	this.shape_71.setTransform(-239.8,22.7,0.428,0.428);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#54A4DA").s().p("AAAA2Ig1g2IA1gzIAAgBIA1A0Ig1A2g");
	this.shape_72.setTransform(-208.6,11.3,0.428,0.428);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#54A4DA").s().p("AgBA0IgygyQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAygzQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAABIAzAzIABAAIgBACIgyAyIgCABIgBgBg");
	this.shape_73.setTransform(-201.5,11.3,0.428,0.428);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F48220").s().p("Ah9BjIABgCIDEjEIA2A2IiNCNQgEAEgFAAg");
	this.shape_74.setTransform(-214,15.6,0.428,0.428);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1D4255").s().p("Ah/hjQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIBlAAQADAAACACICSCRIgBACIg0A0g");
	this.shape_75.setTransform(-214.1,7,0.428,0.428);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F48220").s().p("ABACEIg2g2QAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIAVgVQADgDgDgDIixiyQAAAAABAAQAAAAAAAAQABAAABAAQAAgBABAAIBkAAQADABACACICwCwQADADgDADIhOBOg");
	this.shape_76.setTransform(-209,5.7,0.428,0.428);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1D4255").s().p("AjMDDIgDgBIExkvQADgEgDgEIgXgWIA1g2IABAAIBNBMQADADgDAEIkvEuQgCACgDABg");
	this.shape_77.setTransform(-211.8,19.7,0.428,0.428);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#55A5DB").s().p("AhBC1Qg2gageg1QgbgxAAg+QABgmAQgkQARgmAhgdQAtgpA5gGQBmgMBFBRQAEAFAAABQAAACgFAEIg6AwQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgWgogwgFQgcgDgWALQggAPgOAlQgWA9AdA6QAWAsAxAGQAzAFAhgjQAIgHAGgLQAAgBAAgBQABAAAAAAQABgBABABQAAAAABAAIA9ArQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgyBHhRANQgQADgQAAQgoAAgngTg");
	this.shape_78.setTransform(-242.3,11.3,0.428,0.428);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#54A4DA").s().p("AiTDHQgFAAAAgFIAAmDIABgEIAEgBICHAAQA+ABAuAeQAtAfAKA6QAGAugNAjQgRAwg0AYQgfAOgqAFQgVADgbgBQgEAAAAAEIAABeQAAAFgEAAIhdAAgAg0hxIAAB7QAAAFADAAQAkgCASgFQAagIALgQQAKgUgCggQgBgNgGgKQgJgRgYgFQgPgEgqgBQgFAAAAAFg");
	this.shape_79.setTransform(-227,11.3,0.428,0.428);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#54A4DA").s().p("AhaDJIhVAAQgFAAAAgEIAAmNIEQDYQABgBAAgEIAAjMIAAgEIAFgBIBPAAQAEAAAAAEIAAGLIkHjPIgDgCQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIABDJQAAAFgEAAIgBAAg");
	this.shape_80.setTransform(-275,11.3,0.428,0.428);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#55A5DB").s().p("AimDGQgBgBAAgFIAAmCQAAgEAFAAICbAAQA6ABAwAnQAuAlAQBDQAIAjgBAmQgBAzgWAmQgaAtgzAYQgqASgvADIiLABQgFAAgBgBgAhDhyQgGAAAAAFIAADZQAAAEAEABQAgAHAbgGQAwgKATgtQAQgogHgrQgIg5g1gWQgcgLgkAAIgIAAg");
	this.shape_81.setTransform(-258.2,11.3,0.428,0.428);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E6E6E6").s().p("A1EKZQgeAAgZgXQgagWAAgfIAAyaQAAgeAagXQAZgVAegBMAqcAAAQAcABARAVQARAWgBAfIAASaQABAggRAVQgRAXgcAAg");
	this.shape_82.setTransform(-242.6,14,0.428,0.428);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7931E").s().p("AgeAUQgHAAgGgHQgFgFgBgIIAAAAQABgHAFgGQAGgGAHAAIA8AAQAIAAAFAGQAHAGgBAHIAAAAQABAIgHAFQgFAHgIAAg");
	this.shape_83.setTransform(-180.1,-16.2,0.428,0.428);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7931E").s().p("AgdAUQgJAAgFgHQgFgFAAgIIAAAAQAAgHAFgGQAFgGAJAAIA7AAQAIAAAFAGQAHAGAAAHIAAAAQAAAIgHAFQgFAHgIAAg");
	this.shape_84.setTransform(-303.8,-16.2,0.428,0.428);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#519FD5").s().p("A34LpIAA3RMAvyAAAIAAXRg");
	this.shape_85.setTransform(-241.7,13.5,0.428,0.428);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE7D2B").s().p("AnKBPIAAieIOWAAIAACeg");
	this.shape_86.setTransform(-287.5,52.3,0.428,0.428);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#519FD5").s().p("AgtAUQgIAAgFgGQgGgFABgIIAAgCQgBgHAGgFQAFgFAIgBIBbAAQAHABAGAFQAFAFABAHIAAACQgBAIgFAFQgGAGgHAAg");
	this.shape_87.setTransform(-346.8,33.4,0.428,0.428);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCCCCC").s().p("AhwBxQgvgvABhCQgBhBAvgvQAvgvBBAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAQhBAAgvgvg");
	this.shape_88.setTransform(-217,56.2,0.428,0.428);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhkAAhJhIg");
	this.shape_89.setTransform(-217,56.2,0.428,0.428);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s().p("AhwBxQgugvgBhCQABhBAugvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAvQguAvhCAAQhBAAgvgvg");
	this.shape_90.setTransform(-242.7,56.2,0.428,0.428);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AisCuQhJhIAAhmQAAhlBJhIQBHhIBlAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhlAAhHhIg");
	this.shape_91.setTransform(-242.7,56.2,0.428,0.428);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CCCCCC").s().p("AhwBxQgvgvAAhCQAAhBAvgvQAvgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgvgvg");
	this.shape_92.setTransform(-323.5,56.2,0.428,0.428);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AitCuQhIhIAAhmQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABmhIBIQhJBIhlAAQhkAAhJhIg");
	this.shape_93.setTransform(-323.5,56.2,0.428,0.428);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#519FD5").s().p("AmHC+QAFgYASgkQAkhHBDg7QDXi+G0ABQAFBGABBMQACCWgTAhQgGAMgJANQgTAZgSAAg");
	this.shape_94.setTransform(-329.9,-3,0.428,0.428);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#519FD5").s().p("AjhAjQgOAAgKgLQgKgJAAgOIAAgBQAAgOAKgJQAKgLAOABIHCAAQAOgBALALQAJAJABAOIAAABQgBAOgJAJQgLALgOAAg");
	this.shape_95.setTransform(-348.3,55.5,0.428,0.428);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EAB998").s().p("AAACfQgHABgGgHQgGgFAAgIIAAkXQAAgJAGgFQAGgGAHABIAAAAQAIgBAFAGQAHAFAAAJIAAEXQAAAIgHAFQgFAHgIgBg");
	this.shape_96.setTransform(-357.3,44.6,0.428,0.428);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("Ah8EwQAAkCB8jIQA+hkA+gxQgPAyhVChQhSC0gXDIQgBAMgVADIgPABIgGAAg");
	this.shape_97.setTransform(-352,18.5,0.428,0.428);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F7931E").s().p("Ag6AiIAAhDIBYAAQAOAAAIAJQAHAJABAPIAAAEQAAAegeAAg");
	this.shape_98.setTransform(-347,51.2,0.428,0.428);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgFAiQgOAAgJgKQgKgJAAgOIAAgBQAAgOAKgJQAJgKAOAAIAtAAIAABDg");
	this.shape_99.setTransform(-351.3,51.2,0.428,0.428);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AkvA0QBEjjCAhXIHFAAIAAFRQgQAbheAlQi+BLmHAxQAIhhAihyg");
	this.shape_100.setTransform(-334.4,19.5,0.428,0.428);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE7D2B").s().p("An+I6IABotIB5lwICBjWIK7AAQAfABAUAZQAUAZAAAgIAAMvIlxAAQgNABgUAFQgoAIggAVQhoA+AACQg");
	this.shape_101.setTransform(-335.5,29.6,0.428,0.428);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F3F3F").s().p("A/nC4IAAlwIQ4AAIBNA9MAgXgALIAAA8IM0AAIAABYIs0AAIAACqg");
	this.shape_102.setTransform(-270.2,48.2,0.428,0.428);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#333333").ss(1.5,1,1).p("Ag4lEIBxAbIAAJu");
	this.shape_103.setTransform(-313.7,28.1,0.428,0.428);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3F3F3F").s().p("AhLBAQgGAAgEgEQgDgEAAgGIAAhjQAAgGADgFQAEgEAGAAICWAAQAGAAAEAEQAFAFAAAGIAABjQAAAGgFAEQgEAEgGAAg");
	this.shape_104.setTransform(-179.6,53.8,0.428,0.428);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C1272D").s().p("AgtAUQgIgBgFgGQgFgFAAgIIAAAAQAAgHAFgGQAFgFAIgBIBaAAQAIABAGAFQAFAGAAAHIAAAAQAAAIgFAFQgGAGgIABg");
	this.shape_105.setTransform(-179.9,48.8,0.428,0.428);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D9D9D9").s().p("AgnBoIhIjPIDfAAIAADPg");
	this.shape_106.setTransform(-181,47.3,0.428,0.428);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EE7D2B").s().p("AiDAsQgSAAgMgMQgNgNABgSIAAgBQgBgSANgNQAMgNASAAIEGAAQASAAANANQAMANAAASIAAABQAAASgMANQgNAMgSAAg");
	this.shape_107.setTransform(-195.7,53.8,0.428,0.428);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E6E6E6").s().p("AgOA2IAAhsIAdAAIAABsg");
	this.shape_108.setTransform(-191.8,50.3,0.428,0.428);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E6E6E6").s().p("AgOA2IAAhsIAdAAIAABsg");
	this.shape_109.setTransform(-200,50.3,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359.4,-18.3,183.6,85.2);


(lib._3man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFE8D4").s().p("Ag6BJQAAhHAZgkQANgUARgGIAWgKQALgFAKAAQAKAAAEAGQACADADAIQABAFgLARIgCADIAAAAIgOAIIgUAHQgfAOgNAQQgNARgHAkIgBALg");
	this.shape.setTransform(-32.6,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231207").s().p("AhqCqQgLhDAehVQA3ieggiTQBJASAyBRQAzBTAABqQAABoguBQQgtBPhFAYQgug5gKg9g");
	this.shape_1.setTransform(-42,94.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231207").s().p("ABnEmQhYAAg8hWQg+hWAAh6QAAh1A7hWQA5hVBUgFQAkCMg2CbQggBbAKBJQAJBDAsA9g");
	this.shape_2.setTransform(-62.5,94.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5CEB7").s().p("AgxAuIACgLIgBAAQAIgjAMgQQANgSAfgPIAUgHIAOgIQgMAOgeAaQgXAdgEA8QgLgJgTgKg");
	this.shape_3.setTransform(-32.9,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAD4C0").s().p("Ag8AQIAAgBQAdAHAwgWQAZgMATgNQgTAegcANQgQAIgRAAQgUAAgVgKg");
	this.shape_4.setTransform(-96.1,146.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5CEB7").s().p("Al4IZQgTAOgZAMQgyAXgdgHQADg6BEgaQg3hHgNh5QgNh5AgiRQBJlFD0kKIAKgIQAzgjBBgIQBngNBnBIIAAgcIABAdQBLBQAzBJQA7BUA8B2QBnDIgZDQQgPB/hECIQAvApAHAxQgVgGgYgKQgwgUgPgRQgFAPgQASQiJAuiWAJQghACgfAAQjDAAiohHgAADFRQgqg9gJhDQgKhKAghaQA0ibgiiNQhUAGg7BVQg7BVAAB1QAAB6A+BWQA+BXBWAAIADAAIAAAAgAAMA7QgbBVAKBCQAIA+AvA5QBGgYAthPQAuhRAAhnQAAhrgyhSQgyhShMgSQAhCUg4Ceg");
	this.shape_5.setTransform(-52.2,90.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAD4C0").s().p("AgdANIgYgTIgLAEQAQgSAFgPQAPARAuASQAYAKAVAGQACAKgBAKQg6gBgjgWg");
	this.shape_6.setTransform(-11.8,145.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231207").s().p("AgtgMQhAAIgzAiIAAgeIACAAIANgIQAlgWAsgJIADgBQAZgFAbABQA+ACBJAnIAFADQATAJALAIIAAAcQhnhGhnANg");
	this.shape_7.setTransform(-51.1,30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5CEB7").s().p("AgaAwQgagHgMgeQgMgcACgYQAuAJAQAAQAegCAIgbQgDAVARAPQAYAVALAjQgsAJgjAWQABgJgXgFg");
	this.shape_8.setTransform(-65.2,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D5CEB7").s().p("AgtA9QABgpAlglQAggkgGgpQASAiAIAIQASAVAVgIQAdgNAKgDQAGgCAFACQAOACADAGQgEgGgKAAQgKAAgLAFIgYAKQgRAGgNAUQgZAkAABHQgqgXgogLgAguA9IABAAIAAAAIgBAAgAgtA9gAhhA1QgbAAgZAFQgBgRALgyQAHgbgSgZQAXAMAbgIQAegJAMgYQgtBlA5AyQgagHgZgBg");
	this.shape_9.setTransform(-42.2,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFE8D4").s().p("Agcg9IALgZQAIgKAWAHQAYAGALAUQAHApgiAiQgkAoAAApQg7gzAuhng");
	this.shape_10.setTransform(-45.2,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFE8D4").s().p("AgQALQgSgOADgVIAHgbQAGgUAKAEQAHADAUANQASAZgGAaQgLAyAAARIgEABQgKgkgWgVg");
	this.shape_11.setTransform(-59.4,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFE8D4").s().p("AgUgEQgzg6AlAGIARADQgCAXAMAeQAJAdAbAGQAWAGgBAJIgMAIQgigigYgcg");
	this.shape_12.setTransform(-70.9,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#783E2C").s().p("AhmAvQgHgEgCgIQgCgJAEgHQATgfAdgSQAdgTAgAAQAgAAAeATQAdASATAfQAEAHgCAJQgCAIgHAEQgEACgGAAQgMAAgFgJQgOgYgUgNQgUgMgWAAQgVAAgUAMQgTANgPAYQgEAHgIACIgFABQgGAAgEgDg");
	this.shape_13.setTransform(64.5,-107.1,0.618,0.618);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#783E2C").s().p("ABMAoQgPgYgUgNQgTgMgWAAQgVAAgUAMQgTANgPAYQgEAHgIACQgJACgGgEQgIgEgBgIQgCgIAEgIQATgeAdgTQAegTAfAAQAgAAAdATQAeATATAeQAEAIgCAIQgCAIgHAEQgFADgFAAQgMAAgFgKg");
	this.shape_14.setTransform(32.6,-105.2,0.618,0.618);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6AB88").s().p("Ah1gWQAAgXAHgVIgBASQAABZBvAAQBwAAAAhZIgBgSQAHAXAAAVQABBZh3AAQh2AAABhZg");
	this.shape_15.setTransform(49.1,-88.7,0.618,0.618);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJANQgDgFAAgIQAAgHADgFQAEgHAFAAQAFAAAEAHQAFAFAAAHQAAAIgFAFQgEAGgFABQgFgBgEgGg");
	this.shape_16.setTransform(63.7,-98,0.618,0.618);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#783E2C").s().p("AAAAnQgXAAgRAKQgFgQAAgPQAAgaAOgUQANgUASAAQATAAAOAUQANAUAAAaQAAAPgFAQQgRgKgYAAgAgWgTQgEAFAAAJQAAAGAEAGQAEAGAGAAQAFAAAFgGQACgGAAgGQAAgIgCgGQgFgGgFAAQgGAAgEAGg");
	this.shape_17.setTransform(64.5,-97.6,0.618,0.618);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIANQgFgFAAgIQAAgHAFgFQADgHAFAAQAFAAAFAHQADAFAAAHQAAAIgDAFQgFAGgFABQgFgBgDgGg");
	this.shape_18.setTransform(31.7,-98,0.618,0.618);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#783E2C").s().p("AAAAnQgXAAgRAKQgFgQAAgPQAAgaAOgUQANgUASAAQATAAAOAUQANAUAAAaQAAAPgFAQQgRgKgYAAgAgWgTQgEAFAAAJQAAAGAEAGQAEAGAGAAQAFAAAFgGQACgGAAgGQAAgIgCgGQgFgGgFAAQgGAAgEAGg");
	this.shape_19.setTransform(32.6,-97.6,0.618,0.618);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A261B").s().p("AghD2IgBgGIAAgBIgCgFIAAgBIgGgYIAAgBIgCgKIgBgCIgBgJIgBgCIgEgSQA6h4AciwQg5ggg0gqIAIgrQBAA6BNArIgBAJIAAABIgBALIAAABQgLBYgUBPQgdB4gtBTg");
	this.shape_20.setTransform(20.9,-107.5,0.618,0.618);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#633324").s().p("AglCGQggi8ASiCQAzApA6AgQgbCxg6B3g");
	this.shape_21.setTransform(19.5,-108.6,0.618,0.618);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#783E2C").s().p("AhaAYQgpgRgYgfQgCgEAAgEQABgEADgCQAEgDAEABQAEAAACAEQAVAdAlANQAkAQAtAAQAuAAAkgQQAkgNAVgdQAHgIAHAGQAEACAAAEQABAEgCAEQgZAfgoARQgoASgzAAQgyAAgogSg");
	this.shape_22.setTransform(49,-78.5,0.618,0.618);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9C8A4").s().p("AjJC7QhThjgBiKIAAgLIABAGQAfgyARhJQAMgtAEgvQBLAmBYAKQBdANBPgbQAagJAfgQIAtgYIALBPQASBbAkA8IADgMIABARQAACKhVBjQhUBjh1AAQh1AAhUhjgAheA9QgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABQAPAVAaAKQAYALAfAAQAfAAAZgLQAZgKAPgVQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAAAgBQgGgDgDAEQgOASgVAKQgXAKgcAAQgcAAgWgKQgXgKgNgSQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAhHgcQgBA2BIAAQBJAAAAg2QABgOgFgOIABALQAAA2hGAAQhEAAAAg2IABgLQgEANAAAPgAC0hIQADgKAAgJQABgRgJgNQgJgMgMAAQgMAAgIAMQgIANgBARQAAAJADAKQALgHAPAAQAPAAALAHgAiJhIQADgKAAgJQAAgRgJgNQgJgMgLAAQgMAAgJAMQgIANAAARQAAAJADAKQALgHAPAAQAOAAAMAHgAiJixQAMAIAJAPQAEAHAGAAQAEgBADgCQAEgCABgFQACgFgDgFQgLgTgTgMQgSgMgUAAQgUAAgTAMQgRAMgNATQgCAFABAFQABAFAFACQAEADAFgCQAFAAACgFQAKgPAMgIQAMgIAOAAQANAAANAIgAB0jZQgSALgMAVQgDAEABAFQACAGAEACQAEACAGgBQAFgBACgEQAJgPAMgJQAMgHAOgBQAOABAMAHQANAJAIAPQAEAFAIAAQADAAACgBQAFgCABgGQACgFgDgEQgMgVgSgLQgSgMgVABQgUgBgSAMg");
	this.shape_23.setTransform(49.1,-87.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DEA07C").s().p("Ag7CKQAngFAYglQAaglAAgzQAAgmgRghQgPgggdgQIABgDIAFgYQAkAKAYAnQAZAnAAAyQgBA4ggAqQgdApguAAg");
	this.shape_24.setTransform(82.2,-89.5,0.618,0.618);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9C8A4").s().p("Ag0BqIAHgWQAHACAHAAQAcAAASgaQAUgaAAgiQAAgfgPgYQgPgYgVgGIAEgXQAbAJATAeQATAeAAAnQAAAsgZAhQgZAggiAAQgKAAgLgDg");
	this.shape_25.setTransform(82.3,-89.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEA07C").s().p("AgQA8QgUgaAAgiQAAgeAPgYQAOgXAUgHIADASQgQAJgIAUQgKAUAAAWQAAAeARAYQAOAXAYADIgHABQgcAAgSgag");
	this.shape_26.setTransform(16.2,-89.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9C8A4").s().p("AgZBMQgZggAAgsQAAgnASgeQASgdAagJIAEAWQgUAIgOAXQgOAYAAAeQgBAiAUAaQASAZAcAAIAMgBIAGAWQgJACgJAAQghAAgZggg");
	this.shape_27.setTransform(15.9,-89.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663525").s().p("AErCDIgQgxIgVhkIAAgCIgBgFIAAgCIgDgTIAAgEIAAgBIgCgTQABgtAQhIIAAABIABAAIABAAIABAAIALAEQgKBGgBAPQgDA1AMAzQAOA/AlBKIgBABIgDARIAAAAIgDALIAAAAIgDALIAAABIgBACIAAABgAgkAAQhegLhOgrQgxgagogkQgZgWgNgRIAFAAIABAAIAIgBIAIgCIAAAAQArAqA4AgQBSAuBgAMQBoAOBQgRQAxgLA7geIgvAaQghASgcALQg7AThDAAQgbAAgfgEg");
	this.shape_28.setTransform(46.6,-111);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#783E2C").s().p("AEJA/QgMg0ACgzQABgPALhHQASAIAOAMQAUATAHAaQAUBVgYCKIgHAnQgkhKgOhAgAg4AdQhhgMhSgtQg3gfgrgqIgBAAQAxgLApgpIAGgGQBmgoCGgBQCGABBmApQALAOAHAOQgQBIAAAtQg7AbgyALQgsAKg1AAQgoAAgugGg");
	this.shape_29.setTransform(48.7,-116.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAB998").s().p("AhOF1IAGhRQhHgVg3g4Qg2g4gbhPQgKACgJAAQgkAAgYggQgaghAAgrQAAgnATgeQASgdAcgJQgVh2AMhQIAFgbQgQgPgHgIQgDgGAAgBIA3AeIApAHQAdAGAUgVQAjgiAaACQAUACAXAbQAbAiAQARQAcAeAeAIQBVAWBPhEQAoghAWgnIAUgUQAPAGAQAKQAgAVAFAYQAMAxgBBBQABA3gKA2QAdAIAUAeQATAfAAAnQAAArgZAhQgaAggjAAQgLAAgKgDQgbBOg1A5Qg3A3hGAWIAGBSIhPAtg");
	this.shape_30.setTransform(49,-87.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231207").s().p("Ah1BqQgxgIAAgoQAAhDAxgwQAxgwBEAAQBFAAAxAwQAxAwAABDQAAAlgxAJQgQAChmAAIh1AAg");
	this.shape_31.setTransform(64.4,139);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231207").s().p("Ah1BqQgxgIAAgoQAAhDAxgwQAxgwBEAAQBFAAAxAwQAxAwAABDQAAAlgxAJQgQAChmAAIh1AAg");
	this.shape_32.setTransform(32.1,139);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE7D2B").s().p("AAOIGIgYrBIgQLBIkMAAIAAwLIJNAAIAAQLg");
	this.shape_33.setTransform(48.9,83.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231207").s().p("AArAsQgrghAAgoQAAAogrAhQg6AshZgvQAZgFATgSQAMgLATgXQAqgwBJAAQBKAAApAwIAgAiQATASAZAFQguAYgmAAQgkAAgcgVg");
	this.shape_34.setTransform(49,-79);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231207").s().p("AgUgCQg6hVADgsQAzARAmAfQAnAeAXAnQgIBtgVAlQgGgqg9hcg");
	this.shape_35.setTransform(70.8,-106.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231207").s().p("AjIBwQgSgxABg/QAkhBBQgoQBSgpBigBQBIAABDAYQg0BJhKAgQgpAShSAMQhIAMgcATQgrAegIBKQgJgLgJgYg");
	this.shape_36.setTransform(41.1,-107.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9C8A4").s().p("AgFEtQgqAAgXgOQgOgIg2gwQhRhJgehzQgTgGgQgSQgPgQgTghQgUgkANgkQANgjAegFIANgDIAAgEIADgDIAkgjIA4heIAJACIAdgJICIAdICBgpIAkAVIAKgCIA3BeIAkAjIAEADIgBAEIAOADQAeAFANAjQANAkgUAkQgTAhgPAQQgQASgTAGQgfB0hRBIQg1AwgPAIQgXAOgqAAg");
	this.shape_37.setTransform(49,-89.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D5CEB7").s().p("AANEPIgZAAQj1AOiTh3QiPh1AgipQAghwBXgdQBAgVBvAWIBkAXQA5ANAfADIA+AAQAfgCA7gOIBngXQBvgWBAAVQBXAdAgBwQAgCpiPB1QiDBrjTAAIgygCg");
	this.shape_38.setTransform(50.1,-124.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EFE8D4").s().p("AghBfQgfgCg5gOIhkgXQAXhBA5gqQA6grBJgBIAVAAQBIABA7ArQA5AqAXBBIhnAYQg7ANgfACg");
	this.shape_39.setTransform(50.1,-156.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#519FD5").s().p("AlAG4IgGnLIAGluQA5gXB4geIADgBICMDKICMjKIAFABQB4AeA3AXIAHGJIgGGwg");
	this.shape_40.setTransform(49,-11.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAB998").s().p("AiLgYIAHiLIEQgMIAACXIiMDIg");
	this.shape_41.setTransform(49,-53.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#95C8E5").s().p("Ag+DFIAAmJIAHADQA6AbAdBFQAoBhgLDFg");
	this.shape_42.setTransform(87.5,-30.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EAB998").s().p("AhumUIDdAAQgJEYgYEnQgLCIgrAyQghAqhRAFg");
	this.shape_43.setTransform(81.1,14.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#95C8E5").s().p("AhqAnQAphNA7hFQA7hFAugVIAIgDIAAFiIgmAvQhmhWhJhMg");
	this.shape_44.setTransform(6.2,-30.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EAB998").s().p("AhkC1QgggQgTggQgTggAJgbQAHgWAZgtIAYgnQAug+A5haICnCNQheB9hDBFQgRAUgRAHQgRAHgTAAQgQAAgSgEg");
	this.shape_45.setTransform(3.8,-17.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#EE7D2B").ss(1,1,1).p("AESBAQAJgDAOgHQAkgQAAABQgBhVABABQABABj7goQABABkIAJIhaA1QhaAzACACIAsA1QABAABegTQB1gUBmAAQBqAABXALQA/AIAEAEQABABAJgEQACgBACgBgAl+AeQABABAcgSQAlgTApgSAF+A4QABABhtAH");
	this.shape_46.setTransform(48.2,-136.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.3,-165.9,204.6,316.9);


(lib._3hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9C8A4").s().p("AhCBCQgcgcAAgmQAAglAcgcQAcgbAmAAQAnAAAcAbQAcAcAAAlQAAAmgcAcQgcAbgnAAQgmAAgcgbg");
	this.shape.setTransform(-22.2,-10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAB998").s().p("ADXC+Qg1gTgZgOIAAAAIjFhxQh8hGgegTQhEgtgQgaQgQgZATgfQASgeAnALQAMADBoAxIEnCLIBWAkQAgAOALAiQAKAggOAaQgQAggLAJQgOAMgRAAQgMAAgNgFg");
	this.shape_1.setTransform(1.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-19.9,63.5,39.8);


(lib._3coffee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231207").s().p("AgJAKQgFgFABgFQgBgFAFgEQAFgEAEgBQAGABAEAEQAEAEABAFQgBAFgEAFQgEAFgGgBQgEABgFgFg");
	this.shape.setTransform(-2.3,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgEAFgFQAEgFAFAAQAGAAAEAFQAEAFAAAEQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_1.setTransform(-1.2,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAFgGgBQgFABgEgFg");
	this.shape_2.setTransform(3.3,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231207").s().p("AgJAKQgEgFgBgFQABgFAEgEQAFgEAEAAQAGAAAEAEQAFAEAAAFQAAAFgFAFQgEAFgGgBQgEABgFgFg");
	this.shape_3.setTransform(-0.8,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_4.setTransform(1.5,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231207").s().p("AgJAKQgEgEgBgGQABgFAEgEQAEgEAFgBQAFABAFAEQAFAEgBAFQABAGgFAEQgFAFgFgBQgFABgEgFg");
	this.shape_5.setTransform(-3.7,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231207").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFABQAFgBAFAFQAFAEAAAFQAAAGgFAEQgFAEgFAAQgFAAgEgEg");
	this.shape_6.setTransform(-0.7,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFABQAGgBAEAFQAEAEABAFQgBAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(-2.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231207").s().p("AgJAKQgEgEgBgGQABgFAEgEQAFgFAEABQAGgBAEAFQAFAEAAAFQAAAGgFAEQgEAEgGAAQgEAAgFgEg");
	this.shape_8.setTransform(3.7,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231207").s().p("AgJAKQgEgEgBgGQABgEAEgFQAEgFAFAAQAGAAAEAFQAFAFgBAEQABAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_9.setTransform(1.8,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231207").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAFAEgBAFQABAGgFAEQgEAFgGgBQgFABgEgFg");
	this.shape_10.setTransform(0.7,-4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgEAFgFQAEgEAFgBQAGABAEAEQAEAFAAAEQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_11.setTransform(-3,-5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgFAFgEQAFgFAEABQAGgBAEAFQAEAEABAFQgBAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_12.setTransform(2.2,-9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231207").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgEAFAAQAFAAAFAEQAEAEABAFQgBAGgEAEQgFAFgFgBQgFABgEgFg");
	this.shape_13.setTransform(-1.5,-14.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgEAFgFQAEgFAFABQAGgBAEAFQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_14.setTransform(3.3,-15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231207").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgEAFAAQAGAAAEAEQAEAEABAFQgBAGgEAEQgEAFgGgBQgFABgEgFg");
	this.shape_15.setTransform(-2.2,-20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231207").s().p("AgJAKQgEgEgBgGQABgFAEgEQAEgFAFABQAGgBAEAFQAFAEgBAFQABAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_16.setTransform(1.8,-25.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231207").s().p("AgJAKQgFgEAAgGQAAgEAFgFQAEgEAFgBQAFABAFAEQAEAFABAEQgBAGgEAEQgFAFgFAAQgFAAgEgFg");
	this.shape_17.setTransform(-1.5,-29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-30.8,10.4,61.6);


(lib._2inrukav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE7D2B").s().p("AgRAiQgOgIgFgQQgFgNAIgOQAIgPAQgEQANgEAOAHQAOAIAFAQQAEANgHAOQgIAOgQAFQgFACgFAAQgIAAgJgFg");
	this.shape.setTransform(-15.8,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("AgRAiQgOgIgFgQQgEgNAHgOQAIgOAQgFQANgFAOAIQAOAIAFAPQAFAOgIAOQgIAOgPAFQgGACgFAAQgJAAgIgFg");
	this.shape_1.setTransform(-12.5,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#519FD5").s().p("AjDlwIDLAHIC8LCIi8AYg");
	this.shape_2.setTransform(-18.8,-20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#95C8E5").s().p("AlllwIJgAUIBrKLIn+BCg");
	this.shape_3.setTransform(-2.6,-20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkalsIHbA1IBaJzImEAxg");
	this.shape_4.setTransform(1.5,-15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9C8A4").s().p("AAMDuQgwgUgogpQgQgPgQgWQgQgagkhMIAAgBIg6kUIAggEQAogEAoABQB8ADBJAvIAOA4QAVA+AkAhIAUAPQAlBKAAA4QABBHg7AuQgjAYgpAFIgUABQgbAAgagJg");
	this.shape_5.setTransform(16.4,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-57,76.8,114);


(lib._2inmoney = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAD5F").s().p("AgcgnIARg9IA2gLQgpAvgZBcQgNAvgGAlQgChMAQhLg");
	this.shape.setTransform(4.3,-56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAD5F").s().p("AgFgmIgkhKQAdgVAXAMQANAGAHAKQAOBAgFBZQgDAugGAhQgChOgihXg");
	this.shape_1.setTransform(-7.6,-56);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23120B").s().p("AAVC0QgWAFgagBQgZgBgSgHIAFgpQAqAPArgLQAegHAPgUQAPgVgGgYQgGgWgUgNQgTgLghgFQg0gIgagNQgfgSgJgjQgIgjARgfQARgeAlgQIgNg5IAjgJIANA3QAogJAkALIgEApQgmgLglAJQgeAIgMAUQgLAQAFAUQAFAVAVAKQARAJApAHQAyAIAaASQAcARAJAlQAJAjgRAgQgRAigpARIAPA7IgkAJg");
	this.shape_2.setTransform(0.7,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFAD5F").s().p("AiqHOQiSgbhTh4IgGgJQBPA+B6ALQA3AFCigIQBLgEBAgxQA4gqA3hTQAthDANhrQAMhfgShUQgmi7hch+QBRBIA2BrQAzBkAZB8QARBSgMBgQgNBrgsBDQg4BTg3AqQhAAxhMAEQhVAEg7AAQhPAAgogHg");
	this.shape_3.setTransform(3,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AiFKlQiRgahTh4QhYiBAHi5QAHiwBXiPQA5hdBWhKIA8gyQAfgZAOgRQAjgsgWg/QgYhFhsiOQBIAHAygLQAYgCAVAJQAZAMARABQAXAGBFgPQBCgOAlALQifCiAlBjQAPAmAvArQAcAZBAAzQBTBIA4BtQA0BjAaB+QARBTgMBhQgNBrgsBDQg4BTg4AqQhAAxhLAEQhTAEg6AAQhSAAgpgIg");
	this.shape_4.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-68.7,88.9,137.4);


(lib._2infingers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9C8A4").s().p("ACTHDQgSgSgFgeQgKg9BCg9QgDgQACgZQAEg0AagxQgMgFgPgQQgegfgPgxQg0gohMhJIgnAaIgBAAQhugShPgpQgxgaglgtIgIgVQgdhLAMg9QAOhJBFgdQA+gaBJAZQAkAMAXASQBEAyCNBdIAmArQAtA9AeBXQAkBoAPAzQAQA0ABAVQABAehLCbQgZAggbAeQguA0gNAAIgEgBg");
	this.shape.setTransform(-2.9,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAB998").s().p("AhlFeQgQgMAFgnQAFgnBJh6QAjg+Ajg1IiDl4IAfAeQAkAoAWA0IBzDlIAFAWQACAjgUA3Ig+CHQgFASgNAMQgWAYgfATQgTAMgdAYIgEAAQgHAAgFgEg");
	this.shape_1.setTransform(25,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAB998").s().p("AA1BTQgegMgRgWQgHgDgSgLQgjgXgpgnIAtg9ICSBgIgQBRQgMgBgPgFg");
	this.shape_2.setTransform(3.9,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-46.1,73,92.3);


(lib._2infinger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCDBCA").s().p("AggAYQgFgdAJgiIAHgJQAPgIAnAHQAGAPgKAkQgLAngNAHQgIAFgHAAQgRAAgFgdg");
	this.shape.setTransform(-12.2,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9C8A4").s().p("Ah+GWQgMgBgIgOQgRgcAPhEQgFghgDg1QgFhqANhjQgMg5gZg0QgRglgIg2QgIg4AGgzIACgMIgBgDIAAgBQANgTAQgSQBIhKBtAlQBeAgBLBeQAOASAJAOQAjA1gPA5QgLAqgtA3IgBABQhmA6gZgKIgQBAQgPBGgBAfQgFBWgPAwQgbBXg+AAIgMgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-40.7,43.2,81.5);


(lib._2inbhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE7D2B").s().p("AgVAeQgNgJgDgQQgCgOAJgMQAKgNAPgDQAOgCANAJQANAKACAPQADAOgKANQgJANgQACIgFABQgLAAgKgIg");
	this.shape.setTransform(63.2,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("AgVAfQgNgKgDgQQgCgOAJgMQAKgNAPgCQAOgDANAKQANAJACAPQADAPgKAMQgJANgQACIgFABQgLAAgKgHg");
	this.shape_1.setTransform(50.3,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231207").s().p("AlzArIABiFILjARIADCkg");
	this.shape_2.setTransform(73.1,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#28170E").s().p("AlzEHIAFoCILYg7IAKJtg");
	this.shape_3.setTransform(73.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlcDaIgVmVILYg1IALHhg");
	this.shape_4.setTransform(65.6,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCDBCA").s().p("AgKAeQgtgNABgUQACgkA0ACQAbABAbAIIABAYQgCAagTAQQgXgCgVgGg");
	this.shape_5.setTransform(-60.8,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAB998").s().p("AhOA6QjlgYAkhiIgCATQADAXAcASQBaA4EsgMICBgmIh4A7QgzAEgxAAQhEAAhDgHg");
	this.shape_6.setTransform(-41,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9C8A4").s().p("AkwDLIg1grQgiggkHh8IkAhzQA8g5CjAsQBRAXBFAiQAhgzBqAGQA1AEAvANICugVQB2h8CoAEQBZADBrAgQBBAJG5AbIAvErIn4gqQhqAAj+BDIkJBNQgFABgGAAQgcAAgvgig");
	this.shape_7.setTransform(-14.4,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAB998").s().p("AlnhrIAkgbQBEglE5BtQCeA2CQA8IhUBcg");
	this.shape_8.setTransform(-74.3,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAB998").s().p("AlohVIAhgkQBVgyE1BnQCcA0CKA8IhQBfg");
	this.shape_9.setTransform(-71.4,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.3,-31.1,220.6,62.3);


(lib._1inhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape.setTransform(145.6,-26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_1.setTransform(107.3,-26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2A3QgXgXAAggQAAgfAXgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXQgXAXggAAQgfAAgXgXg");
	this.shape_2.setTransform(69,-26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#519FD5").s().p("AhvBQIDYioIAHAJIjYCog");
	this.shape_3.setTransform(-173.3,79.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEBCF").s().p("AhHA2QgGgvAdgjIBPhjQAmAhAEAxQAEAxghAmIhJBWQglgdgFgtg");
	this.shape_4.setTransform(-145.4,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#73C386").s().p("Ahjg+IBAgxICHCtIhAAyg");
	this.shape_5.setTransform(-149,60.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEBCF").s().p("AgeBRQgiAAgYgYQgYgXAAgiQAAggAYgYQAYgYAiAAICPAAIAAChg");
	this.shape_6.setTransform(-80,38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#519FD5").s().p("AoOEOIOVrKICICwIuULJg");
	this.shape_7.setTransform(-99.9,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#519FD5").s().p("AnMDPIIjmqQAkgcAtAGQAuAGAcAjIgFAEQAtggA3AHQA7AHAkAuQAdAmAAAxQAAAggNAdQgPAcgaAVIghAaIivjeIAHgFQgQgVgbgEQgbgDgVAQIokGrg");
	this.shape_8.setTransform(-10.5,-64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9B689").s().p("AphHwIgWgNIBMhWQAhgmgEgzQgEgygnggIHKoyQAXgcAjgKIIFiFQAugLApAZIkKDOIAcAkIEPjUIAwAuImXE8IAOASIjvAfQgrAHgcAhImMHjQgHAJgLAJQgaAUgiACIgJAAQgdAAgagPg");
	this.shape_9.setTransform(-85.3,-14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9B689").s().p("AnGGuQguAAghghQggggAAguQAAg0AoghQAfgaAoAAIGVAAQAuAAAeghQAgggAAgtIAAkhIEyjuIAWAWQAgAgAuAAIBlAAIAAKpIhgAAQgYgBgWALIjmBnQgXALgXAAg");
	this.shape_10.setTransform(-38.4,6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#73C386").s().p("Am/CpILQowICuDfIrPIwg");
	this.shape_11.setTransform(-17.9,-41.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGHCQgeAAgWgWQgWgVAAgfIAAruQAAgfAWgWQAWgWAeAAIBXAAIAAODg");
	this.shape_12.setTransform(26.4,3.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#519FD5").s().p("AqVIVQgkAAgagaQgagZAAglIAAt5QAAglAagZQAagaAkAAIWDAAIAAQpg");
	this.shape_13.setTransform(109.6,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6EAB1").s().p("AAIARIgGgIIiwCJQAqgxAHhCIAAg2ICjiBICJCtIigB9QhegghVAng");
	this.shape_14.setTransform(-162.9,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.5,-88.3,369.2,176.8);


(lib._1incontract = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#519FD5").s().p("AtCAoIAAhPIaFAAIAABPg");
	this.shape.setTransform(-52.3,-83.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#519FD5").s().p("AtCAoIAAhPIaFAAIAABPg");
	this.shape_1.setTransform(-52.3,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#519FD5").s().p("ApcAoIAAhPIS5AAIAABPg");
	this.shape_2.setTransform(-75.3,136.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#519FD5").s().p("ArcAoIAAhPIW5AAIAABPg");
	this.shape_3.setTransform(-62.4,168);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#519FD5").s().p("AsOAoIAAhPIYdAAIAABPg");
	this.shape_4.setTransform(-57.4,152.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#519FD5").s().p("AtCAoIAAhPIaFAAIAABPg");
	this.shape_5.setTransform(-52.3,121.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#519FD5").s().p("AtMAoIAAhPIaZAAIAABPg");
	this.shape_6.setTransform(-51.2,56.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#519FD5").s().p("AwAAoIAAhPMAgBAAAIAABPg");
	this.shape_7.setTransform(-33.3,-6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#519FD5").s().p("AwAAoIAAhPMAgBAAAIAABPg");
	this.shape_8.setTransform(-33.3,87.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#519FD5").s().p("AxFAoIAAhPMAiLAAAIAABPg");
	this.shape_9.setTransform(-26.3,71.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#519FD5").s().p("AyAAoIAAhPMAkBAAAIAABPg");
	this.shape_10.setTransform(-20.4,-37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#519FD5").s().p("AyOAoIAAhPMAkdAAAIAABPg");
	this.shape_11.setTransform(-19.1,40.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#519FD5").s().p("AzIAoIAAhPMAmRAAAIAABPg");
	this.shape_12.setTransform(-13.2,-114.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#519FD5").s().p("AziAoIAAhPMAnFAAAIAABPg");
	this.shape_13.setTransform(-10.6,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#519FD5").s().p("Az9AoIAAhPMAn7AAAIAABPg");
	this.shape_14.setTransform(-7.9,-99.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#519FD5").s().p("Az9AoIAAhPMAn7AAAIAABPg");
	this.shape_15.setTransform(-7.9,-52.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#519FD5").s().p("A1tAoIAAhPMArbAAAIAABPg");
	this.shape_16.setTransform(3.3,-130.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#519FD5").s().p("Am+D9QgFgXAFgHIFgn6IAAAkQADASgDAHIheDlIgjBVQgTAygIAlQAOAXAwg3QASgVAjgyQA6hTA7hpIAAAsQABANgBAEIgYB1QAQAFAVgNQAVgQAMgFQAZgMAKAFQAIAEAUAUQAYARAwABQAbABAygBIDRAJIAAA9IjRgJQgyABgbgBQgxgCgXgQQgUgTgIgEQgLgFgYALQgbARgLAHQgYAMgTgMQgDgBAAgXQAAgUACgNIABgEIAQhOQhIB8hKBhQgVAcgNAJQgZASgNgcQgDgGABgOIAAgVIABghIAAAFQAFg6AdhJIBEilIkkGiQAFgHgFgYg");
	this.shape_17.setTransform(83,181.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE7D2B").s().p("At6GVIAAhqQAAgRACgNQAMhaBEg9QBEg9BcAAIC7AAQAAhrAwhgQA5h1BuhFQBxhICFAAQCGAABxBIQBuBFA6B1QAwBhAABqIC6AAQBcAABFA9QBDA9AMBaQACANAAARIAABqgAhGjQQgfAYgKAmQgFAPAAAPQAAAxAjAiQAiAhAvAAQAwAAAighQAjgiAAgxQAAgOgEgQQgKgmgggYQgfgZgoAAQgnAAgfAZg");
	this.shape_18.setTransform(0,-211.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgYgAglMAAAhBJIKoAAQgCANAAARIAABqIb1AAIAAhqQAAgRgCgNIKoAAMAAABBJg");
	this.shape_19.setTransform(0,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D4255").s().p("EgZIAlTQhJAAgzgzQgzgzAAhIMAAAhFIQAAhJAzgzQAzgzBJAAMAySAAAQBIAAAzAzQAzAzAABJMAAABFIQAABIgzAzQgzAzhIAAg");
	this.shape_20.setTransform(0,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.4,-251.6,357,503.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5inpack();
	this.instance.setTransform(-212.2,0.1,0.179,0.179,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib._5inpack();
	this.instance_1.setTransform(-127.3,0.1,0.179,0.179,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib._5inpack();
	this.instance_2.setTransform(42.4,0.1,0.179,0.179,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib._5inpack();
	this.instance_3.setTransform(-42.5,0.1,0.179,0.179,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.1,-84.2,338.5,168.5);


(lib._7cara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib._7kovsh();
	this.instance.setTransform(-65.9,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({y:-47.3},15).wait(5).to({y:-8.8},10).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE7D2B").s().p("AhBBCQgbgcAAgmQAAglAbgcQAcgbAlAAQAmAAAcAbQAbAcAAAlQAAAmgbAcQgcAbgmAAQglAAgcgbg");
	this.shape.setTransform(-11.1,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747575").s().p("AhsCRQgwgjgRg5QgIgZAAgcQAAhKA2g1QA1g2BKAAQA4AAAtAfQAmAaAVAnQAWAoAAAtQAABLg2A2Qg1A1hLAAQg8AAgwglg");
	this.shape_1.setTransform(-11.1,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE7D2B").s().p("AhBBCQgbgcAAgmQAAglAbgcQAcgbAlAAQAmAAAcAbQAbAcAAAlQAAAmgbAcQgcAbgmAAQglAAgcgbg");
	this.shape_2.setTransform(69.2,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#519FD5").s().p("ADGCZQAYhNgdhJQgPgmgegeQgdgegngQQgngPgpABQgoABgnARQgnASgeAfQgeAfgQAnQgMAdgEAgIgmgPQAGggALgbQAphkBggrQBegrBgAmQBbAlAoBdQAnBaggBhg");
	this.shape_3.setTransform(-11.4,38.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#519FD5").s().p("AjwChQgHgeAAghQAAhqBJhMQBJhNBlAAQBjAABHBGQBHBGAHBmIgoAAQgCgmgQgkQgQgjgagbQgegggmgRQgmgQgqAAQgoAAgmAQQgnARgdAfQgeAfgQAnQgQAoAAAsQAAAhAJAeg");
	this.shape_4.setTransform(69,37.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE7D2B").s().p("AjpDmIgEiJIhMhnIi1gwIJ0AAIBTiqIDYAAIAKAEQALAKAKARQAfA7AAB/IhJgWIhNgPIhXAAIhPA2Ig0CBIgLBfg");
	this.shape_5.setTransform(35,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#747575").s().p("AnYFmQC2l3BEihQAwhxBLgvQApgZAjAAIFiAAQBGAAAnArQAXAZAHAlQADAQAAAaIAAGbIhGAAIAAmdIgEgDQABgdgQgRQgOgQgnAAIliAAIAAgCIAAgBIgBAAQgEAAgJADQgNAFgOAJQgzAkglBWQhFCgirFfg");
	this.shape_6.setTransform(24.8,-11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747575").s().p("AhsCRQgwgjgRg5QgIgZAAgcQAAhKA1g1QA2g2BKAAQA3AAAvAfQAlAaAVAnQAWAoAAAtQAABLg2A2Qg1A1hLAAQg8AAgwglg");
	this.shape_7.setTransform(69.3,46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#519FD5").s().p("AkPCyQAAheB2grQA7gWA7gDICjAAIAAkEQAAgJAJgFQAIgEAMAAIA5AAQAYAAAAASIAAEfIAiAVIgiAvIAAAlQAAAKgHAJQgHAJgKAAIgmAAIhiA8IjnAAQgeAXgdAEIgKAAQgxAAAAhVg");
	this.shape_8.setTransform(34.3,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#519FD5").s().p("AjlCLIAAAAIDLivQAHgHAMADQAKADAJAKIAMAPIBqhaIgug3QgFgFAAgIQABgHAGgGIAHgGQAFgFAIABQAHABAGAFIBqB9QAFAGAAAHQgBAIgGAFIgHAGQgGAFgHAAQgIgBgFgGIgug2IhqBYIAOAQQAJAKACAMQABAMgHAGIiaCIg");
	this.shape_9.setTransform(6.5,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#747575").s().p("Ag2IgIAAiLIACAAIAAu1IBrAAIAAO/QgXAQgRAeQgSAjgHAvIgBABg");
	this.shape_10.setTransform(-32.5,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.8,-65,187.6,130.1);


(lib._6inwheels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6inwhanim();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-13.5,28,27);


(lib._5instatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtiNjQlolnAAn8QAAn7FoloQFnlnH7AAQH8AAFnFnQFoFoAAH7QAAH8loFnQlnFon8AAQn7AAlnlog");
	mask.setTransform(8,9.7);

	// Layer 6
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(137.1,22.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-61.6,245.5,168.5);


(lib._5inallpack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5inpack();
	this.instance.setTransform(-212.2,0.1,0.179,0.179,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib._5inpack();
	this.instance_1.setTransform(-127.3,0.1,0.179,0.179,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib._5inpack();
	this.instance_2.setTransform(42.4,0.1,0.179,0.179,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib._5inpack();
	this.instance_3.setTransform(-42.5,0.1,0.179,0.179,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.1,-84.2,338.5,168.5);


(lib._5in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtiNjQlolnAAn8QAAn7FoloQFnlnH7AAQH8AAFnFnQFoFoAAH7QAAH8loFnQlnFon8AAQn7AAlnlog");
	mask.setTransform(8,9.7);

	// Layer 6
	this.instance = new lib._5inallpack();
	this.instance.setTransform(137.1,22.6);
	this.instance.cache(-256,-86,343,173);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.8},10).wait(14).to({x:137.1},0).to({x:51.8},10).wait(15));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191919").s().p("AjDAnIAAhNIGHAAIAABNg");
	this.shape.setTransform(9.2,-63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4904D").s().p("AjTAsIAAhXIARAAIAABMIGIAAIAAhMIAOAAIAABXg");
	this.shape_1.setTransform(9.1,-62.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE7D2B").s().p("AmPDCIAAmDIC8AAIAABZIGnAAIAAhZIC8AAIAAGDg");
	this.shape_2.setTransform(9.1,-47.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},15).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(15));

	// Layer 8
	this.instance_1 = new lib._3coffee();
	this.instance_1.setTransform(10.3,-187.8,2.032,2.032);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:16.4},14).to({_off:true},1).wait(9).to({_off:false,y:-187.8},0).to({y:16.4},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-61.6,245.5,168.5);


(lib._4instatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtdNdQllllAAn4QAAn4FlllQFlllH4AAQH5AAFlFlQFlFlAAH4QAAH4llFlQllFmn5AAQn4AAlllmg");
	mask.setTransform(-265.8,9.2);

	// 4-in-lins
	this.instance = new lib._4inlins();
	this.instance.setTransform(-313.7,35.5,0.484,0.484);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	mask_1.setTransform(-288.8,3.5);

	// 4-in-coffee
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape.setTransform(-303.2,-71.3,0.816,0.816,-99.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_1.setTransform(-298.2,-72,0.816,0.816,-99.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_2.setTransform(-303.2,-71.2,0.816,0.816,-99.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_3.setTransform(-263.9,-37.2,0.816,0.816,-99.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_4.setTransform(-263.3,-32.6,0.816,0.816,-99.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_5.setTransform(-264.2,-37.7,0.816,0.816,-99.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43221B").s().p("AjACiQA/gtBSiAQA1hXBKgrQAygeA3gFIABAAIAGAIQgxARgwAmQhFA2g2BWQgpBBgnAmQggAfgjAQQgJgHgIgIg");
	this.shape_6.setTransform(-317.8,-22.2,0.816,0.816,-99.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#622E23").s().p("Ai8CDIgBgBIAAAAIAAAAQglgsAEhBQAIAPAMAOQAqAuBIAAQAwAAAwgUQA0gWAtgoQAugoAcgzQAagyAEgyQAYAxgPBAQgOBAgwA5IgBABIAAABIAAAAIAAAAIgBAAIAAAAQgTAXgPANIgBAAIAAAAIgCACIAAAAQgsAngzAVQgwAVgvAAQhJAAgqgvg");
	this.shape_7.setTransform(-315.2,-22.4,0.816,0.816,-99.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D3327").s().p("Ai8CpQgxg3AUhZQAVhXBOhHQBPhGBYgKQBbgLAxA4QAyA4gVBZQgUBXhPBGQhPBGhYALQgPABgNAAQhHAAgpgvg");
	this.shape_8.setTransform(-318.3,-21.9,0.816,0.816,-99.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43221B").s().p("AjiBqIAAAAQBIgcBvhlQBKhFBRgWQA5gQA2AJIAEAKQg0AEg4AXQhQAihKBEQg4A0gvAaQgnAXgmAGg");
	this.shape_9.setTransform(-349.8,1.5,0.816,0.816,-99.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#622E23").s().p("AihB1QgrgWgUgmIAAgBIAAgBIgBAAQgZgzAVg8QAEARAIAQQAUAlArAVQAqAVA3AAQBIAABJglQA3gaAogqQAmgqAQguQAMA9goBCQgpBAhOAqIAAAAIgCABIAAAAIgBAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgBAAIAAAAIgBAAIAAABIgCABQhHAjhIABQg3gBgqgUg");
	this.shape_10.setTransform(-345.8,1,0.816,0.816,-99.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D3327").s().p("AhlDAQhagNghhBQgihCAqhOQArhQBdgvQBcgwBaANQBaANAhBCQAiBCgrBOQgqBQheAvQhJAlhEAAQgUAAgUgDg");
	this.shape_11.setTransform(-350.4,1.7,0.816,0.816,-99.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_12.setTransform(-292.1,19.1,0.816,0.816,-99.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_13.setTransform(-290.7,19,0.816,0.816,-99.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_14.setTransform(-292.4,19.5,0.816,0.816,-99.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_15.setTransform(-331,54.1,0.816,0.816,-99.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_16.setTransform(-331.1,51.9,0.816,0.816,-99.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_17.setTransform(-330.6,54.6,0.816,0.816,-99.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#43221B").s().p("AjwBKQgFgNgBgIIAAgBQBMgICGhFQBYgwBUgBQA7AAAyAWIAAABIACAKQgzgKg8AJQhWAMhZAvQhEAkg0ANQghAJgdAAIgTgBg");
	this.shape_18.setTransform(-283.6,93.5,0.817,0.817,161.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#622E23").s().p("AgiB4QhQAAg7gjQg7gkgNg4IAAgBIgBAAIAAgCQgLg3Akg2QgBAQAEASQAMA7A8AiQA7AjBQAAQAjAAAlgIQA8gNAygdQAvgfAbgpQgDA8g0AyQg1A1hRAXIgBAAIgBAAIgBAAIAAABIgCAAIgBAAIgBAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIAAABIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIAAAAQglAIgjAAg");
	this.shape_19.setTransform(-285.1,88.6,0.817,0.817,161.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D3327").s().p("AiSChQhTgkgQhIQgQhHA9hDQA9hCBmgWQBlgWBTAjQBUAkAPBIQAQBHg9BDQg9BChmAWQgmAIgkAAQg7AAgzgVg");
	this.shape_20.setTransform(-283.6,93.4,0.817,0.817,161.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_21.setTransform(-256,49.4,0.817,0.817,161.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_22.setTransform(-251.5,48.1,0.817,0.817,161.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_23.setTransform(-256.4,49.7,0.817,0.817,161.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#43221B").s().p("AiHDSIAAAAQAvg8ApiTQAchgA3g+QApgrAygUIABAAIAIAGQgqAdgjAyQgzBGgaBiQgVBKgaAvQgWAngcAZQgLgFgJgFg");
	this.shape_24.setTransform(-196,68.6,0.817,0.817,161.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#622E23").s().p("Ag/DVQgnAAgggTIAAAAIgBAAIAAgBIAAAAIgBAAQgvgfgPhAQAMAOAPAJQAfATAoAAQA5AAA4glQA6gnAphAQAgg1AMg4QALg4gLgvQAoAqACBIQADBIglBGIAAABIgBACIgBAAIAAACIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIgBABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAABIgBABIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIgBABIAAABQgoBBg7AmQg3Alg4AAg");
	this.shape_25.setTransform(-196.3,67.3,0.817,0.817,161.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D3327").s().p("AiDDXQg/gngGhaQgFhYA2hZQA3hZBTgkQBSgkA/AmQA/AnAGBaQAGBZg3BZQg3BZhTAjQgnASgjAAQgmAAghgUg");
	this.shape_26.setTransform(-195.5,68.9,0.817,0.817,161.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#43221B").s().p("AgHAwQhbgwgwhEQghgxgKg2IAIgIQAVAwAoAuQA8BBBZAvQBFAkAoAkQAhAeATAhQgHALgHAHQgyg8iFhIg");
	this.shape_27.setTransform(-252.1,0.9,0.817,0.817,161.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#622E23").s().p("ABFDEQA0g1gRhaQgRhXhMhJQgrgrg1gYQg0gXgyAAIAAAAQAigUAvAAQAxAAA0AXQAzAXAtAsQAvAsAZA3QAZAzAAAyQgBBAgmAnIgBABQgnAohEABQARgKALgMg");
	this.shape_28.setTransform(-254.3,1.3,0.817,0.817,161.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6D3327").s().p("AApDXQhZgOhMhJQhLhJgRhXQgRhaAzg1QA0g1BbAOQBYAOBMBJQBMBJARBXQARBag0A1QgpAqhBAAQgRAAgTgDg");
	this.shape_29.setTransform(-251.7,0.4,0.817,0.817,161.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_30.setTransform(-195.2,-8.2,0.817,0.817,98.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_31.setTransform(-194.4,-12.9,0.817,0.817,98.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_32.setTransform(-195.2,-7.7,0.817,0.817,98.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#43221B").s().p("ABKB9QgchSg+hPQgwg8gXgxQgTgpgDglQAJgGAKgFIABAAQAVBJBdB4QA/BOARBTQALA5gMA2IgBAAIgKAEQAAg0gTg6g");
	this.shape_33.setTransform(-213.4,-67.4,0.818,0.818);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#622E23").s().p("AgDDHQg6gugihKIgBgCIAAgBIgDgIQgbg/AAg/QAAg+AYgtQAZgwAtgTIABgBIABAAQAWgJAYAAQAgAAAgAOQgSADgPAGQhCAdgUBYQgUBZApBfQAWA5AnArQAnApAtATIgRABQg7AAg2gsg");
	this.shape_34.setTransform(-218.2,-67.5,0.818,0.818);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6D3327").s().p("AguDVQhMgwgphhQgoheAThZQAUhYBEgdQBEgdBLAwQBMAxApBgQAoBfgTBZQgUBYhEAdQgaALgaAAQgtAAgugfg");
	this.shape_35.setTransform(-213,-67.5,0.818,0.818);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 13
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F4F4F4").s().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	this.shape_36.setTransform(-288.8,3.5);

	this.shape_36.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1));

	// 4-in-coffee
	this.instance_1 = new lib._4incoffee();
	this.instance_1.setTransform(-271.6,11.5,0.422,0.422);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.8,-77.2,199.3,200.5);


(lib._4in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtdNdQllllAAn4QAAn4FlllQFlllH4AAQH5AAFlFlQFlFlAAH4QAAH4llFlQllFmn5AAQn4AAlllmg");
	mask.setTransform(-265.8,9.2);

	// 4-in-lins
	this.instance = new lib._4inlins();
	this.instance.setTransform(-313.7,35.5,0.484,0.484);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-299.7,y:-6.5},9).to({x:-243.7,y:35.5},10).to({x:-289.9,y:77.5},9).to({x:-313.7,y:35.5},9).wait(1));

	// Layer 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-288.8,y:3.5}).wait(1).to({graphics:mask_1_graphics_1,x:-287.3,y:-1.1}).wait(1).to({graphics:mask_1_graphics_2,x:-285.7,y:-5.8}).wait(1).to({graphics:mask_1_graphics_3,x:-284.2,y:-10.5}).wait(1).to({graphics:mask_1_graphics_4,x:-282.6,y:-15.1}).wait(1).to({graphics:mask_1_graphics_5,x:-281,y:-19.8}).wait(1).to({graphics:mask_1_graphics_6,x:-279.5,y:-24.5}).wait(1).to({graphics:mask_1_graphics_7,x:-277.9,y:-29.1}).wait(1).to({graphics:mask_1_graphics_8,x:-276.4,y:-33.8}).wait(1).to({graphics:mask_1_graphics_9,x:-274.8,y:-38.5}).wait(1).to({graphics:mask_1_graphics_10,x:-269.2,y:-34.3}).wait(1).to({graphics:mask_1_graphics_11,x:-263.6,y:-30.1}).wait(1).to({graphics:mask_1_graphics_12,x:-258,y:-25.9}).wait(1).to({graphics:mask_1_graphics_13,x:-252.4,y:-21.7}).wait(1).to({graphics:mask_1_graphics_14,x:-246.8,y:-17.5}).wait(1).to({graphics:mask_1_graphics_15,x:-241.2,y:-13.3}).wait(1).to({graphics:mask_1_graphics_16,x:-235.6,y:-9.1}).wait(1).to({graphics:mask_1_graphics_17,x:-230,y:-4.9}).wait(1).to({graphics:mask_1_graphics_18,x:-224.4,y:-0.7}).wait(1).to({graphics:mask_1_graphics_19,x:-218.8,y:3.5}).wait(1).to({graphics:mask_1_graphics_20,x:-224,y:8.2}).wait(1).to({graphics:mask_1_graphics_21,x:-229.1,y:12.9}).wait(1).to({graphics:mask_1_graphics_22,x:-234.2,y:17.5}).wait(1).to({graphics:mask_1_graphics_23,x:-239.4,y:22.2}).wait(1).to({graphics:mask_1_graphics_24,x:-244.5,y:26.9}).wait(1).to({graphics:mask_1_graphics_25,x:-249.6,y:31.5}).wait(1).to({graphics:mask_1_graphics_26,x:-254.8,y:36.2}).wait(1).to({graphics:mask_1_graphics_27,x:-259.9,y:40.9}).wait(1).to({graphics:mask_1_graphics_28,x:-265,y:45.5}).wait(1).to({graphics:mask_1_graphics_29,x:-267.7,y:40.9}).wait(1).to({graphics:mask_1_graphics_30,x:-270.3,y:36.2}).wait(1).to({graphics:mask_1_graphics_31,x:-273,y:31.5}).wait(1).to({graphics:mask_1_graphics_32,x:-275.6,y:26.9}).wait(1).to({graphics:mask_1_graphics_33,x:-278.2,y:22.2}).wait(1).to({graphics:mask_1_graphics_34,x:-280.9,y:17.5}).wait(1).to({graphics:mask_1_graphics_35,x:-283.5,y:12.9}).wait(1).to({graphics:mask_1_graphics_36,x:-286.2,y:8.2}).wait(1).to({graphics:mask_1_graphics_37,x:-288.8,y:3.5}).wait(1));

	// 4-in-coffee
	this.instance_1 = new lib._4inbeansbig();
	this.instance_1.setTransform(-271,9.3);
	this.instance_1.cache(-98,-102,197,205);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AlsFtQiYiXAAjWQAAjVCYiXQCYiYDUAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjUAAiYiYg");
	this.shape.setTransform(-288.8,3.5);

	this.shape.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-287.3,y:-1.1},0).wait(1).to({x:-285.7,y:-5.8},0).wait(1).to({x:-284.2,y:-10.5},0).wait(1).to({x:-282.6,y:-15.1},0).wait(1).to({x:-281,y:-19.8},0).wait(1).to({x:-279.5,y:-24.5},0).wait(1).to({x:-277.9,y:-29.1},0).wait(1).to({x:-276.4,y:-33.8},0).wait(1).to({x:-274.8,y:-38.5},0).wait(1).to({x:-269.2,y:-34.3},0).wait(1).to({x:-263.6,y:-30.1},0).wait(1).to({x:-258,y:-25.9},0).wait(1).to({x:-252.4,y:-21.7},0).wait(1).to({x:-246.8,y:-17.5},0).wait(1).to({x:-241.2,y:-13.3},0).wait(1).to({x:-235.6,y:-9.1},0).wait(1).to({x:-230,y:-4.9},0).wait(1).to({x:-224.4,y:-0.7},0).wait(1).to({x:-218.8,y:3.5},0).wait(1).to({x:-224,y:8.2},0).wait(1).to({x:-229.1,y:12.9},0).wait(1).to({x:-234.2,y:17.5},0).wait(1).to({x:-239.4,y:22.2},0).wait(1).to({x:-244.5,y:26.9},0).wait(1).to({x:-249.6,y:31.5},0).wait(1).to({x:-254.8,y:36.2},0).wait(1).to({x:-259.9,y:40.9},0).wait(1).to({x:-265,y:45.5},0).wait(1).to({x:-267.7,y:40.9},0).wait(1).to({x:-270.3,y:36.2},0).wait(1).to({x:-273,y:31.5},0).wait(1).to({x:-275.6,y:26.9},0).wait(1).to({x:-278.2,y:22.2},0).wait(1).to({x:-280.9,y:17.5},0).wait(1).to({x:-283.5,y:12.9},0).wait(1).to({x:-286.2,y:8.2},0).wait(1).to({x:-288.8,y:3.5},0).wait(1));

	// 4-in-coffee
	this.instance_2 = new lib._4incoffee();
	this.instance_2.setTransform(-271.6,11.5,0.422,0.422);
	this.instance_2.cache(-199,-212,398,425);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.8,-77.2,199.3,200.5);


(lib._8in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtdNdQllllAAn4QAAn4FlllQFlllH4AAQH5AAFlFlQFlFlAAH4QAAH4llFlQllFmn5AAQn4AAlllmg");
	mask.setTransform(-265.8,9.2);

	// Layer 4
	this.instance = new lib._8incar("synched",0);
	this.instance.setTransform(-502.1,31.1,1.246,1.246,0,0,180);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-265.6,y:34.3},14).wait(30).to({startPosition:0},0).to({x:-23.8},15).wait(16));

	// objects
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFE8D4").s().p("AmSFGIAAqLIMlAAIAAKLg");
	this.shape.setTransform(-263.6,-5.9,0.234,0.234);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("AmTFGIAAqLIMFAAIAiKLg");
	this.shape_1.setTransform(-244.8,-5.9,0.234,0.234);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFE8D4").s().p("AmFFGIgbqLIMcAAIAlKLg");
	this.shape_2.setTransform(-226.3,-5.9,0.234,0.234);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE7D2B").s().p("AmEFGIgdqLIMKAAIA6KLg");
	this.shape_3.setTransform(-207.5,-5.9,0.234,0.234);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE7D2B").s().p("AmTFGIAiqLIMEAAIAAKLg");
	this.shape_4.setTransform(-282.4,-5.9,0.234,0.234);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFE8D4").s().p("AmgFGIAkqLIMdAAIgbKLg");
	this.shape_5.setTransform(-300.9,-5.9,0.234,0.234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE7D2B").s().p("AmhFGIA5qLIMKAAIgeKLg");
	this.shape_6.setTransform(-319.6,-5.9,0.234,0.234);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh2B1ilAAQilAAh1h1g");
	this.shape_7.setTransform(-207.1,6.5,0.234,0.234);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5CEB7").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh2B0Qh0B1imAAQilAAh1h1g");
	this.shape_8.setTransform(-225.9,6.5,0.234,0.234);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh1B1imAAQikAAh2h1g");
	this.shape_9.setTransform(-244.7,6.5,0.234,0.234);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D5CEB7").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh1B1imAAQikAAh2h1g");
	this.shape_10.setTransform(-263.7,6.5,0.234,0.234);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh1B1imAAQilAAh1h1g");
	this.shape_11.setTransform(-282.4,6.5,0.234,0.234);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D5CEB7").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh1B0Qh2B1ilAAQilAAh1h1g");
	this.shape_12.setTransform(-301.2,6.5,0.234,0.234);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE6721").s().p("AkaBTQh1h0AAilIAAgCIMfAAIAAACQAAClh2B0Qh0B1imAAQilAAh1h1g");
	this.shape_13.setTransform(-320,6.5,0.234,0.234);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjqD1QgFgEAAgGQAAgHAEgEIHCnUQADgEAHAAQAGAAAEAEQAFAEAAAHQAAAGgEAEInCHUQgEAEgGAAQgHAAgDgEg");
	this.shape_14.setTransform(-230.7,19.2,0.234,0.234);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnsIBQgEgEgBgGQAAgGAFgFIPEvtQAEgEAGAAQAGAAAFAEQAEAFABAGQAAAGgFAFIvEPsQgFAFgFAAQgHAAgEgFg");
	this.shape_15.setTransform(-225.6,22.2,0.234,0.234);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjKDUQgFgFAAgGQAAgGAEgFIGBmQQAEgEAHgBQAGAAAEAFQAFAEAAAHQAAAFgEAFImBGQQgEAFgHgBQgFAAgFgDg");
	this.shape_16.setTransform(-218.8,23.6,0.234,0.234);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmbGsQgEgEAAgHQgBgFAFgFIMhtCQAEgFAHABQAGAAAEADQAFAFAAAGQAAAGgEAEIsiNDQgEAEgHABQgGgBgEgEg");
	this.shape_17.setTransform(-283.7,6.5,0.234,0.234);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AtlOLQgFgEAAgHQAAgGAEgEIa37/QAEgFAHAAQAGAAAEAEQAFAFAAAGQAAAGgEAFI63b+QgEAFgHAAQgGAAgEgEg");
	this.shape_18.setTransform(-274.5,11.8,0.234,0.234);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AlhFwQgFgEAAgGQAAgGAEgFIKvrKQAEgEAHgBQAGAAAEAFQAFAEAAAGQAAAGgEAFIqvLKQgEAFgHAAQgGAAgEgFg");
	this.shape_19.setTransform(-262.4,14.4,0.234,0.234);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3F3F3F").s().p("Egw8ADXIAAmtMBh5AAAIAAGtg");
	this.shape_20.setTransform(-263.7,-59.2,0.234,0.234);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#747575").s().p("AkTEmIhdpLILhAAIhvJLg");
	this.shape_21.setTransform(-197.7,77.3,0.234,0.234);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0E7F47").s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBg");
	this.shape_22.setTransform(-197.7,64.8,0.234,0.234);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#747575").s().p("AkTEmIhepLILjAAIhwJLg");
	this.shape_23.setTransform(-329,77.3,0.234,0.234);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0E7F47").s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBg");
	this.shape_24.setTransform(-329,64.8,0.234,0.234);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#28170E").s().p("AiSBYQglAAgZgaQgagaAAgkQAAgjAagaQAZgaAlAAIElAAQAlAAAZAaQAaAaAAAjQAAAkgaAaQgZAaglAAg");
	this.shape_25.setTransform(-237.1,42.9,0.234,0.234);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#28170E").s().p("AiyDjQgKAAAAgJIADjaQAAhkgJhxIgBgFQAAgGAKgBQAagDBWAAIBgABQBNACAwAuQAwAwAABNQAABNgpAxQgtA0hNAAIhNgDQgOAAAAAMQAAAUADAYQADAeAAAPQAAAHgHAAgAg9h3QgCAEAABHIACA6QAAAHA6AAQBFAAAAhGQAAhMhIAAQg0AAgDAGg");
	this.shape_26.setTransform(-216,-26.9,0.234,0.234);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#28170E").s().p("AilCqQhChFAAhlQAAhjBChGQBChGBjgBQBjABBDBGQBCBGAABjQAABmhBBFQhCBGhlAAQhkAAhBhHgAhMhQQgfAkgBAsQABAxAdAiQAeAjAwAAQAtAAAhglQAfgkAAgtQAAgvgfgjQgfgkgvABQgtAAgfAlg");
	this.shape_27.setTransform(-227.4,-27,0.234,0.234);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#28170E").s().p("ABaDjQgJgBAAgIIAChNIADhOQAAgNgHgBQgJgChGgBQhEABgKACQgHABAAANIACBNQACAtAAAfQAAAJgJACQgKACg0AAQguAAgKgCQgJgCAAgIQgBgYAEhSQAEhDAAgoQgBgjgDhMQgDhHAAgrQAAgHAHAAIAeABIA/AAIAfgBQAFAAABAFQgBAWgDA0QgEA5AAAQQAAAMAHACQAJACBIAAQBFAAALgCQAJgCgBgMIgChHQgCgqAAgdQAAgKAIAAIAdABIA6AAIAdgBQAJAAAAAHQAAAmgDBMQgCBMAAAjQgBAoAEBDQADBSAAAYQAAAHgDABQgDACgGAAQgSACgmAAQg0AAgIgCg");
	this.shape_28.setTransform(-239.5,-26.9,0.234,0.234);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#28170E").s().p("Ag6D0QgIgBgagtQgaguAAgKQABgDAFgBQAwgMAOgHQAigQAAgiQAAgVgWgaIgqgvQgXgiABgqQAAg7A3goQAtggA/gKIAGgBQAGABACAHQAJAZAeA+IABACQAAAHgFAAIgJgBIgKgBQgYAAgRAKQgWANABAWQgBATAYAdIArA1QAYAjAAAkQgBBDg3AvQgwAphFANg");
	this.shape_29.setTransform(-249,-26.9,0.234,0.234);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#28170E").s().p("ACDDlQgYgChxAAIiVgBQgLgBAAgIQAAglAEhJQAEhOAAgeQAAgegEhtIgDhOIgBgEQAAgHAIgBIBJABICOAAIBIgBQARAAADANIAIBcQAAAGgHAAIgGAAQhagHhAAAQgSAAgDAIQgCADAAAWQAAAWAGAHQAHAHAPAAIAagBQAlAAAugCIAkgEQAIAAAAAIQAAgGgGA4QgDAUAAAeQAAAHgJgBIgegCQgQgChFAAIggAAQgOAAgCAGIAAAUQAAAYADAIQAGANAiACIAwAAQALAAAogDQAigEARAAQAHABAAAMQAAALgFAoQgGAogFAJQgDAFgIAAIgJgBg");
	this.shape_30.setTransform(-260.9,-26.9,0.234,0.234);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#28170E").s().p("ACCDlQgXgChxAAIiVgBQgLgBAAgIQAAggAEhOQAEhBAAgrQAAgsgEhfIgEhSQAAgHAIgBIBJABICOAAIBIgBQARAAACANQACAHADAmQAEAkAAALQAAAGgHAAIgGAAQhagHhAAAQgRAAgFAIQgBAEAAAVQAAAWAGAHQAHAHAPAAIAagBQAlAAAugCIAkgEQAHAAAAAHQAAgDgFA2QgDAYAAAaQAAAHgJgBIgegCQgQgChFAAIggAAQgOAAgCAGIAAAUQAAAZADAHQAGANAiACIAvAAQAMAAAogDQAigEARAAQAHABAAAMQAAAOgGAlQgFAogFAJQgEAFgHAAIgKgBg");
	this.shape_31.setTransform(-270,-26.9,0.234,0.234);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#28170E").s().p("AhLDpQg9gBgRgEQgKgCAAgIQAAgwADg9IAChsQAAglgEhFIgGhxQgBgIAKAAICSACQAVAAA4gEQA4gEAWAAQARAAACANIABAqIAEAcQADATAAAJQAAAEgGAAQgVAAg1gFQgygEgZAAQgcAAgGACQgMAGAAAaQAAAfAPAEQAHACALAAQAeAAAlgDIBEgCQAKAAAAA5QAAAxgDAHQgCAFgFABIgWgDQgjgChHAAIgYAAQgQADAAALQAAAyADA4IAEAxQAAAJgVABIgdAAg");
	this.shape_32.setTransform(-279.1,-27,0.234,0.234);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#28170E").s().p("AhLDpQg8gBgTgEQgJgDAAgHIAChtQADg8AAgwQAAgxgEg5IgGhtIAAgEQAAgIAKAAICSACQAUAAA4gEQA4gEAWAAQARAAABANIACAqIAEAcQAEARgBALQABAEgHAAQgVAAg2gFQgxgEgZAAQgdAAgFACQgMAGAAAaQAAAfAPAEQAHACALAAQAeAAAlgDIBEgCQALAAAAA5QgBAxgDAHQgCAFgGABIgWgDQgigChHAAIgXAAQgSACABAMQAAAqADBAIAEAzQgCAHgTABIgdAAg");
	this.shape_33.setTransform(-288.2,-27,0.234,0.234);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#28170E").s().p("AimCqQhBhEAAhmQAAhkBBhFQBDhGBjgBQBjABBDBGQBCBGAABjQAABmhBBFQhDBGhkAAQhjAAhDhHgAhMhQQgfAjAAAtQAAAyAdAhQAeAjAwAAQAtAAAhglQAegjAAguQAAgvgdgjQgfgkgwABQgtAAgfAlg");
	this.shape_34.setTransform(-299.1,-27,0.234,0.234);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#28170E").s().p("AiFCqQg+hDAAhnQAAhhA8hFQA/hIBgAAQBpAAA8BBQAHAHAAAFQAAAHgXAnQgXAogGAFQgCADgEAAQgCAAgOgNQgUgRgPgIQgZgNgcAAQguAAgdAkQgaAhAAAxQAAAwAaAhQAdAlAuAAQAcAAAZgNQAQgHASgPQAOgNACAAQAEAAADAEQAGAHAWAiQAYAjAAAEQAAAGgHAIQg7BHhkAAQhkAAg/hFg");
	this.shape_35.setTransform(-310,-27,0.234,0.234);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C2B59B").s().p("EglrAGwIAAtfMBLXAAAIAANfg");
	this.shape_36.setTransform(-263.7,-27.5,0.234,0.234);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(116,117,117,0.4)").s().p("EgoTACRIAAkhMBQnAAAIAAEhg");
	this.shape_37.setTransform(-263.5,-48,0.234,0.234);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(116,117,117,0.4)").s().p("EgBNArgMAAAhW/ICbAAMAAABW/g");
	this.shape_38.setTransform(-198.8,13.9,0.234,0.234);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(116,117,117,0.4)").s().p("EgBNArgMAAAhW/ICbAAMAAABW/g");
	this.shape_39.setTransform(-328.4,13.9,0.234,0.234);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#519FD5").s().p("AplVIMAAAgqPITLAAMAAAAqPg");
	this.shape_40.setTransform(-225.7,27.4,0.234,0.234);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3F3F3F").s().p("AplDvIAAndITLAAIAAHdg");
	this.shape_41.setTransform(-225.7,73.1,0.234,0.234);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#747575").s().p("AsYGdIAAs5IYwAAIAAM5g");
	this.shape_42.setTransform(-225.7,72.9,0.234,0.234);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3F3F3F").s().p("AsYekMAAAg9HIYwAAMAAAA9Hg");
	this.shape_43.setTransform(-225.7,36.8,0.234,0.234);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3F3F3F").s().p("EguAAFPIAAqdMBcCAAAIAAKdg");
	this.shape_44.setTransform(-263.6,-49.6,0.234,0.234);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F3F3F").s().p("EgC1AtmMAAAhbLIFrAAMAAABbLg");
	this.shape_45.setTransform(-198.8,14.2,0.234,0.234);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3F3F3F").s().p("EgC1AtmMAAAhbLIFrAAMAAABbLg");
	this.shape_46.setTransform(-328.4,14.2,0.234,0.234);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#28170E").s().p("A4WAyIAAhjMAwtAAAIAABjg");
	this.shape_47.setTransform(-284.5,81.5,0.234,0.234);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_48.setTransform(-252.6,70.1,0.234,0.234);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_49.setTransform(-257.9,70.1,0.234,0.234);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_50.setTransform(-263.2,70.1,0.234,0.234);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_51.setTransform(-268.6,70.1,0.234,0.234);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_52.setTransform(-273.9,70.1,0.234,0.234);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_53.setTransform(-279.2,70.1,0.234,0.234);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_54.setTransform(-284.5,70.1,0.234,0.234);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_55.setTransform(-289.9,70.1,0.234,0.234);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_56.setTransform(-295.2,70.1,0.234,0.234);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_57.setTransform(-300.5,70.1,0.234,0.234);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_58.setTransform(-305.9,70.1,0.234,0.234);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_59.setTransform(-311.2,70.1,0.234,0.234);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#28170E").s().p("AggHjIAAvFIBBAAIAAPFg");
	this.shape_60.setTransform(-316.5,70.1,0.234,0.234);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#28170E").s().p("A4XIFIAAwKMAwvAAAIAAQKgA3THCMAunAAAIAAuDMgunAAAg");
	this.shape_61.setTransform(-284.5,70.1,0.234,0.234);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#519FD5").s().p("A3yeJMAAAg8RMAvlAAAMAAAA8Rg");
	this.shape_62.setTransform(-284.5,36.3,0.234,0.234);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EFE8D4").s().p("EguAAtmMAAAhbLMBcCAAAMAAABbLg");
	this.shape_63.setTransform(-263.6,14.2,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.8,-64.3,200.4,148.5);


(lib._3instatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3-man
	this.instance = new lib._3man();
	this.instance.setTransform(12.8,0);
	this.instance.cache(-104,-168,209,321);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 3-hand
	this.instance_1 = new lib._3hand();
	this.instance_1.setTransform(9.4,-6.9,1,1,0,0,0,26.6,12.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-165.9,204.6,316.9);


(lib._3in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3-man
	this.instance = new lib._3man();
	this.instance.setTransform(-2.2,0);
	this.instance.cache(-104,-168,209,321);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// 3-hand
	this.instance_1 = new lib._3hand();
	this.instance_1.setTransform(-5.6,-6.9,1,1,0,0,0,26.6,12.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({rotation:-56.4,x:-5.4,y:-7},8,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,rotation:-56,x:-30.5,y:8.1},0).wait(1).to({rotation:-54.8,x:-30.8,y:7.6},0).wait(1).to({rotation:-52.9,x:-31.3,y:6.7},0).wait(1).to({rotation:-50.3,x:-31.9,y:5.6},0).wait(1).to({rotation:-47.1,x:-32.6,y:4.1},0).wait(1).to({rotation:-43.4,x:-33.2,y:2.3},0).wait(1).to({rotation:-39.4,x:-33.8,y:0.4},0).wait(1).to({rotation:-35.1,x:-34.3,y:-1.8},0).wait(1).to({rotation:-30.7,x:-34.6,y:-4},0).wait(1).to({rotation:-26.3,x:-34.8,y:-6.2},0).wait(1).to({rotation:-22,y:-8.4},0).wait(1).to({rotation:-17.9,x:-34.6,y:-10.5},0).wait(1).to({rotation:-14.1,x:-34.3,y:-12.4},0).wait(1).to({rotation:-10.6,x:-33.9,y:-14.1},0).wait(1).to({rotation:-7.5,x:-33.5,y:-15.6},0).wait(1).to({rotation:-4.9,x:-33.1,y:-16.9},0).wait(1).to({rotation:-2.8,x:-32.7,y:-17.9},0).wait(1).to({rotation:-1.1,x:-32.4,y:-18.7},0).wait(1).to({regX:26.6,regY:12.3,rotation:0,x:-5.6,y:-6.9},0).wait(37));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_38 = new cjs.Graphics().p("AhlFqIAArTIDMAAIAALTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_38,x:-55.7,y:6.8}).wait(37));

	// 3-coffee
	this.instance_2 = new lib._3coffee();
	this.instance_2.setTransform(-55,-53.6);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({y:49.4},22).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-165.9,204.6,316.9);


(lib._3Harvesting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDB+QgTAAgSgGQgRgGgMgPQgJgKgDgLQgEgLgBgKIAAgRIA4gFIgBAFIAAAFQABASAIAJQAIAJANAAQANAAAIgJQAJgJAAgSQAAgQgIgHQgIgGgKgBIgQgBIAAgnIAKAAIAGgBQALgDAEgGQAEgGABgFIABgIQAAgJgEgGQgEgHgGgCQgGgDgEAAQgMAAgGAHQgFAGgBAIIgBAOIg5gFQACgRAGgOQAGgPANgLQALgIALgEQAMgDAKgBIAMgBQAXAAAOAGQAOAEAHAHQALAJAGANQAFANAAAOQAAANgFALQgFAMgIAGQgFAEgGADIgLAFIAHACIAHACQAQAFAIAOQAIAOAAARQAAANgEAMQgEAMgJAKQgOARgVAHQgSAGgRAAIgDAAg");
	this.shape.setTransform(264,168.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(264.1,169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._3instatic();
	this.instance.setTransform(100.1,154);
	this.instance.cache(-91,-168,209,321);

	this.instance_1 = new lib._3in();
	this.instance_1.setTransform(115.1,154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(137,168.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINIQlclcAAnsQAAnrFcldQFdlcHrAAQHsAAFcFcQFdFdAAHrQAAHsldFcQlcFdnsAAQnrAAldldg");
	this.shape_3.setTransform(137,168.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(138.8,168.1,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-14.6,168.8,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.7,-12,580.8,316.9);


(lib._1instat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As6M7QlWlXAAnkQAAnjFWlXQFXlWHjAAQHkAAFWFWQFXFXAAHjQAAHklXFXQlWFWnkAAQnjAAlXlWg");
	mask.setTransform(22.7,15.4);

	// 1-in-hand
	this.instance = new lib._1inhand();
	this.instance.setTransform(125.3,70,0.43,0.43,36.5,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 1-in-contract
	this.instance_1 = new lib._1incontract();
	this.instance_1.setTransform(-2.2,-29.6,0.43,0.43,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-101.5,218.6,234);


(lib._1in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(17));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As6M7QlWlXAAnkQAAnjFWlXQFXlWHjAAQHkAAFWFWQFXFXAAHjQAAHklXFXQlWFWnkAAQnjAAlXlWg");
	mask.setTransform(22.7,15.4);

	// 1-in-hand
	this.instance = new lib._1inhand();
	this.instance.setTransform(125.3,70,0.43,0.43,36.5,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,scaleX:0.36,scaleY:0.36,x:80.4,y:74.6},13).to({x:87,y:63.6},4).to({y:74.1},4).to({x:100.7,y:71.3},3).to({x:117.2,y:54.8},2).wait(49));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTClIAAlJIGnAAIAAFJg");
	this.shape.setTransform(32.7,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjEClIAAlJIGJAAIAAFJg");
	this.shape_1.setTransform(27.1,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai2ClIAAlJIFtAAIAAFJg");
	this.shape_2.setTransform(28.2,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AinClIAAlJIFPAAIAAFJg");
	this.shape_3.setTransform(29.3,52.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiXClIAAlJIEwAAIAAFJg");
	this.shape_4.setTransform(30.3,52.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiMClIAAlJIEZAAIAAFJg");
	this.shape_5.setTransform(30.3,52.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiBClIAAlJIEDAAIAAFJg");
	this.shape_6.setTransform(30.4,52.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah2ClIAAlJIDtAAIAAFJg");
	this.shape_7.setTransform(30.3,52.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhrClIAAlJIDWAAIAAFJg");
	this.shape_8.setTransform(30.4,52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhOClIAAlJICdAAIAAFJg");
	this.shape_9.setTransform(35.5,52.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxClIAAlJIBjAAIAAFJg");
	this.shape_10.setTransform(40.6,52.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVClIAAlJIAqAAIAAFJg");
	this.shape_11.setTransform(45.7,52.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:32.2},0).wait(1).to({x:31.7},0).wait(1).to({x:31.2},0).wait(1).to({x:30.6},0).wait(1).to({x:30.1},0).wait(1).to({x:29.6},0).wait(1).to({x:29.1},0).wait(1).to({x:28.6},0).wait(1).to({x:28.1},0).wait(1).to({x:27.6},0).wait(1).to({x:27.1},0).wait(1).to({x:26.6},0).wait(1).to({x:26.1},0).to({_off:true},1).wait(61));

	// 1-in-contract
	this.instance_1 = new lib._1incontract();
	this.instance_1.setTransform(-2.2,-29.6,0.43,0.43,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:0.36,scaleY:0.36,x:-6.7,y:-11.6},13).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.9,-101.5,218.6,234);


(lib._2instatic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtdNdQllllAAn4QAAn4FlllQFlllH4AAQH5AAFlFlQFlFlAAH4QAAH4llFlQllFmn5AAQn4AAlllmg");
	mask.setTransform(-265.8,9.2);

	// Layer 5
	this.instance = new lib._2infingers();
	this.instance.setTransform(-287.8,-133.7,1,1,0,0,0,-20.6,-33.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib._2infinger();
	this.instance_1.setTransform(-297.2,-127.3,1,1,0,0,0,-8.5,-23.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib._2inrukav();
	this.instance_2.setTransform(-314.2,-208.4,1,1,0,0,0,-3.9,-36.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib._2inbhand();
	this.instance_3.setTransform(-147.1,81.6,1,1,0,0,0,83.9,-2.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib._2inmoney();
	this.instance_4.setTransform(-281.5,-28.2,1,1,0,0,0,-0.3,-45.8);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.7,-112.8,204.8,227.7);


(lib._2in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtdNdQllllAAn4QAAn4FlllQFlllH4AAQH5AAFlFlQFlFlAAH4QAAH4llFlQllFmn5AAQn4AAlllmg");
	mask.setTransform(-265.8,9.2);

	// Layer 5
	this.instance = new lib._2infingers();
	this.instance.setTransform(-287.8,-133.7,1,1,0,0,0,-20.6,-33.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-20.7,rotation:-3,x:-311.4,y:-90.2},9,cjs.Ease.get(1)).to({rotation:-11.2,x:-310.5,y:-133.6},16).wait(6).to({rotation:-18.1,x:-316,y:-133.7},5,cjs.Ease.get(-1)).wait(46));

	// Layer 9
	this.instance_1 = new lib._2infinger();
	this.instance_1.setTransform(-297.2,-127.3,1,1,0,0,0,-8.5,-23.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-8.7,regY:-23.9,rotation:-25.2,x:-315.1,y:-80.3},9,cjs.Ease.get(1)).to({rotation:-33.4,x:-312.7,y:-123.3},16).wait(6).to({rotation:-22.7,x:-318.2},5,cjs.Ease.get(-1)).wait(46));

	// Layer 8
	this.instance_2 = new lib._2inrukav();
	this.instance_2.setTransform(-314.2,-208.4,1,1,0,0,0,-3.9,-36.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-4,rotation:-11.7,x:-349.6,y:-155.8},9,cjs.Ease.get(1)).to({regY:-36.9,rotation:-19.9,x:-357.7,y:-193.2},16).wait(6).to({x:-363.2},5,cjs.Ease.get(-1)).wait(46));

	// Layer 13
	this.instance_3 = new lib._2inbhand();
	this.instance_3.setTransform(-147.1,81.6,1,1,0,0,0,83.9,-2.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({regY:-2.3,rotation:-1.4,x:-147.2,y:81.5},2).to({regY:-2.2,rotation:0,x:-147.1,y:81.6},2).wait(42));

	// Layer 14
	this.instance_4 = new lib._2inmoney();
	this.instance_4.setTransform(-281.5,-28.2,1,1,0,0,0,-0.3,-45.8);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({rotation:5,x:-271.1,y:-75.5},16).wait(6).to({rotation:0,x:-281.5,y:-28.2},5,cjs.Ease.get(-1)).to({y:-26.5},2).to({y:-28.2},2).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.3,-112.8,197.5,227.7);


(lib._2Acquisition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSB8IAAgrIASgNIARgOIAWgTQAPgMAKgMQAKgLAGgOQAHgOAAgTIgBgNQgBgIgFgGQgGgGgKgBQgIABgFACQgFADgDAEIgEAIQgCAGAAAKIABAJIABAKIg6gDIAAgUQABgLAEgNQAHgRALgJQAKgKAMgFQAMgEAKgCQALgBAGAAQAJAAAMACQAMACAMAGQAQAIAIAMQAIAMADAMQADAMgBAJQABARgHARQgGAQgPASQgPASgZAUIgNALIgMAKIBdgBIAAAug");
	this.shape.setTransform(-290.5,185.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(-290.2,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._2instatic();
	this.instance.setTransform(90.3,176.1,0.965,0.965,0,0,0,0.1,0.1);
	this.instance.cache(-351,-115,209,232);

	this.instance_1 = new lib._2in();
	this.instance_1.setTransform(90.3,176.1,0.965,0.965,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(-165.9,184.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINIQlclcAAnsQAAnrFcldQFdlcHrAAQHsAAFcFcQFdFdAAHrQAAHsldFcQlcFdnsAAQnrAAldldg");
	this.shape_3.setTransform(-165.9,184.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(-165.5,186,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-14,185.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.1,-44.7,578.3,354);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6inwheels();
	this.instance.setTransform(-55.9,32.3,0.428,0.428,0,0,0,0,0.1);

	this.instance_1 = new lib._6inwheels();
	this.instance_1.setTransform(50.6,32.1,0.428,0.428,0,0,0,0,0.1);

	this.instance_2 = new lib._6inwheels();
	this.instance_2.setTransform(24.9,32.1,0.428,0.428,0,0,0,0,0.1);

	this.instance_3 = new lib._6incar();
	this.instance_3.setTransform(0,0,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-42.5,183.6,85.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6inwheels();
	this.instance.setTransform(-55.8,32.1,0.428,0.428,0,0,0,0,0.1);

	this.instance_1 = new lib._6inwheels();
	this.instance_1.setTransform(50.6,32.1,0.428,0.428,0,0,0,0,0.1);

	this.instance_2 = new lib._6inwheels();
	this.instance_2.setTransform(24.9,32.1,0.428,0.428,0,0,0,0,0.1);

	this.instance_3 = new lib._6incar();
	this.instance_3.setTransform(0,0,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-42.5,183.6,85.2);


(lib._8Distribution = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgKgJQgLgJgGgOQgHgPAAgQQAAgIACgGQAAgGADgFQAFgLAGgGQAHgHAIgDIAMgFQgEgCgIgHQgIgGgHgLQgFgLgBgSQAAgPAHgPQAIgPARgKQARgKAaAAQAWAAARAIQARAHAKAPQAKAPAAAWQgBASgFALQgHAKgIAGQgHAFgGADQAIADAKAEQAKAGAIAMQAIAMAAAUQAAAVgIAOQgIAPgNAIQgNAIgPAEQgPAEgOAAQgSAAgQgGgAgKAPQgIAEgEAIQgEAIgBAMQAAANAEAIQAFAHAGAEQAHAEAFAAQAGAAAHgDQAGgDADgGQACgBABgGQACgFAAgMQABgOgFgHQgFgIgFgDIgLgDIgBAAQgFAAgGADgAAAhSQgLABgFAIQgGAIABALQAAAGACAHQABAHAFAFQAFAGAIAAQAKAAAGgGQAHgHAAgPIgBgMQgCgIgFgGQgFgFgJAAIgBAAg");
	this.shape.setTransform(-277.1,175.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(-277.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._8instatic();
	this.instance.setTransform(-151.4,175.4);
	this.instance.cache(-76,-74,152,149);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib._8in();
	this.instance_1.setTransform(105.5,165.7,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(-153,174.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINIQlclcAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrQAAHsldFcQlcFdnsAAQnsAAlcldg");
	this.shape_3.setTransform(-153,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(-151.9,174.1,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-2.5,174.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.1,50.4,576.8,247.6);


(lib._7in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.gotoAndPlay(34);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(11));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtiNjQlolnAAn8QAAn7FoloQFnlnH7AAQH8AAFnFnQFoFoAAH7QAAH8loFnQlnFon8AAQn7AAlnlog");
	mask.setTransform(8,9.7);

	// Layer 3
	this.instance = new lib._7cara();
	this.instance.setTransform(-67.1,38.6,0.509,0.509,0,0,180,0.1,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({x:-28.4,y:37.9},26).wait(41));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F3F").s().p("AAQkSMgiDAKTIAAhfMAiDgKiMAhlAKWIAABrg");
	this.shape.setTransform(8.5,-33.3,0.506,0.506,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("EghfAGrIAAhbIgUAGIAAheMAiDgKiMAhlAKVIAABrIgVgGIAABbg");
	this.shape_1.setTransform(8.5,-31.2,0.506,0.506,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_2.setTransform(50.1,41.7,0.506,0.506,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_3.setTransform(50.1,40.8,0.506,0.506,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_4.setTransform(50.1,45.7,0.506,0.506,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_5.setTransform(50.1,44.8,0.506,0.506,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_6.setTransform(50.1,49.6,0.506,0.506,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_7.setTransform(50.1,48.8,0.506,0.506,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_8.setTransform(50.1,53.6,0.506,0.506,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_9.setTransform(50.1,52.8,0.506,0.506,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_10.setTransform(69.6,41.7,0.506,0.506,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_11.setTransform(69.6,40.8,0.506,0.506,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_12.setTransform(69.6,45.7,0.506,0.506,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_13.setTransform(69.6,44.8,0.506,0.506,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_14.setTransform(69.6,49.6,0.506,0.506,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_15.setTransform(69.6,48.8,0.506,0.506,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_16.setTransform(69.6,53.6,0.506,0.506,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_17.setTransform(69.6,52.8,0.506,0.506,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_18.setTransform(89.2,41.7,0.506,0.506,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_19.setTransform(89.2,40.8,0.506,0.506,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_20.setTransform(89.2,45.7,0.506,0.506,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_21.setTransform(89.2,44.8,0.506,0.506,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_22.setTransform(89.2,49.6,0.506,0.506,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_23.setTransform(89.2,48.8,0.506,0.506,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_24.setTransform(89.2,53.6,0.506,0.506,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_25.setTransform(89.2,52.8,0.506,0.506,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_26.setTransform(50.1,22,0.506,0.506,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_27.setTransform(50.1,21.1,0.506,0.506,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_28.setTransform(50.1,26,0.506,0.506,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_29.setTransform(50.1,25.1,0.506,0.506,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_30.setTransform(50.1,29.9,0.506,0.506,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_31.setTransform(50.1,29.1,0.506,0.506,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_32.setTransform(50.1,34,0.506,0.506,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_33.setTransform(50.1,33.1,0.506,0.506,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_34.setTransform(69.6,22,0.506,0.506,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_35.setTransform(69.6,21.1,0.506,0.506,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_36.setTransform(69.6,26,0.506,0.506,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_37.setTransform(69.6,25.1,0.506,0.506,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_38.setTransform(69.6,29.9,0.506,0.506,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_39.setTransform(69.6,29.1,0.506,0.506,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_40.setTransform(69.6,34,0.506,0.506,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_41.setTransform(69.6,33.1,0.506,0.506,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_42.setTransform(89.2,22,0.506,0.506,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_43.setTransform(89.2,21.1,0.506,0.506,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_44.setTransform(89.2,26,0.506,0.506,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_45.setTransform(89.2,25.1,0.506,0.506,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_46.setTransform(89.2,29.9,0.506,0.506,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_47.setTransform(89.2,29.1,0.506,0.506,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_48.setTransform(89.2,34,0.506,0.506,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_49.setTransform(89.2,33.1,0.506,0.506,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#747575").s().p("ArPAZIAAgxIWeAAIAAAxg");
	this.shape_50.setTransform(70,36.3,0.506,0.506,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_51.setTransform(50.1,2.3,0.506,0.506,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_52.setTransform(50.1,1.4,0.506,0.506,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_53.setTransform(50.1,6.3,0.506,0.506,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_54.setTransform(50.1,5.4,0.506,0.506,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_55.setTransform(50.1,10.2,0.506,0.506,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_56.setTransform(50.1,9.4,0.506,0.506,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_57.setTransform(50.1,14.2,0.506,0.506,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_58.setTransform(50.1,13.4,0.506,0.506,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_59.setTransform(69.6,2.3,0.506,0.506,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_60.setTransform(69.6,1.4,0.506,0.506,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_61.setTransform(69.6,6.3,0.506,0.506,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_62.setTransform(69.6,5.4,0.506,0.506,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_63.setTransform(69.6,10.2,0.506,0.506,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_64.setTransform(69.6,9.4,0.506,0.506,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_65.setTransform(69.6,14.2,0.506,0.506,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_66.setTransform(69.6,13.4,0.506,0.506,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgMQgMgKAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMAKQgMAMgQAAg");
	this.shape_67.setTransform(89.2,2.3,0.506,0.506,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_68.setTransform(89.2,1.4,0.506,0.506,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_69.setTransform(89.2,6.3,0.506,0.506,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_70.setTransform(89.2,5.4,0.506,0.506,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAGQAAAPgMALQgMALgQAAg");
	this.shape_71.setTransform(89.2,10.2,0.506,0.506,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_72.setTransform(89.2,9.4,0.506,0.506,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgPIABgGQACAPALAHQALAKAPAAIEpAAQAPAAALgKQALgHACgPIABAGQAAAPgMALQgMALgQAAg");
	this.shape_73.setTransform(89.2,14.2,0.506,0.506,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgKgCgOIgBgFQAAgOAMgMQAMgMAQAAIEpAAQAQAAAMAMQAMAMAAAOIgBAFQgCAOgLAKQgLAKgPAAg");
	this.shape_74.setTransform(89.2,13.4,0.506,0.506,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_75.setTransform(50.1,61.8,0.506,0.506,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_76.setTransform(50.1,61,0.506,0.506,0,0,180);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_77.setTransform(50.1,65.8,0.506,0.506,0,0,180);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_78.setTransform(50.1,64.9,0.506,0.506,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_79.setTransform(50.1,69.8,0.506,0.506,0,0,180);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_80.setTransform(50.1,68.9,0.506,0.506,0,0,180);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_81.setTransform(69.6,61.8,0.506,0.506,0,0,180);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_82.setTransform(69.6,61,0.506,0.506,0,0,180);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_83.setTransform(69.6,65.8,0.506,0.506,0,0,180);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_84.setTransform(69.6,64.9,0.506,0.506,0,0,180);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_85.setTransform(69.6,69.8,0.506,0.506,0,0,180);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_86.setTransform(69.6,68.9,0.506,0.506,0,0,180);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_87.setTransform(89.2,61.8,0.506,0.506,0,0,180);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_88.setTransform(89.2,61,0.506,0.506,0,0,180);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_89.setTransform(89.2,65.8,0.506,0.506,0,0,180);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgLQAMgMAQAAIEpAAQAQAAAMAMQAMALAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_90.setTransform(89.2,64.9,0.506,0.506,0,0,180);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EB7425").s().p("AiUAWQgQAAgMgLQgMgLAAgQIABgFQACAOALAIQALAKAPAAIEpAAQAPAAALgKQALgIACgOIABAFQAAAQgMALQgMALgQAAg");
	this.shape_91.setTransform(89.2,69.8,0.506,0.506,0,0,180);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F89F4D").s().p("AiUAnQgPAAgLgKQgLgJgCgPIgBgFQAAgPAMgMQAMgLAQAAIEpAAQAQAAAMALQAMAMAAAPIgBAFQgCAPgLAJQgLAKgPAAg");
	this.shape_92.setTransform(89.2,68.9,0.506,0.506,0,0,180);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#747575").s().p("ArPAYIAAgvIWeAAIAAAvg");
	this.shape_93.setTransform(70,56,0.506,0.506,0,0,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#747575").s().p("ArPAZIAAgwIWeAAIAAAwg");
	this.shape_94.setTransform(70,16.6,0.506,0.506,0,0,180);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E6E6E6").s().p("AgXLPIAA2eIAvAAIAAWeg");
	this.shape_95.setTransform(38.8,34.5,0.506,0.506,0,0,180);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E6E6E6").s().p("AgYLPIAA2eIAxAAIAAWeg");
	this.shape_96.setTransform(101.1,34.5,0.506,0.506,0,0,180);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E6E6E6").s().p("AgxNvIAA7dIBiAAIAAbdg");
	this.shape_97.setTransform(-97.6,26.4,0.506,0.506,0,0,180);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E6E6").s().p("AgrNvIAA7dIBYAAIAAbdg");
	this.shape_98.setTransform(114.8,26.4,0.506,0.506,0,0,180);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3F3F3F").s().p("EgguAMfIAA4+MBBdAAAIAAY+g");
	this.shape_99.setTransform(8.5,30.5,0.506,0.506,0,0,180);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1D4255").s().p("EgqaANhIAA7AMBU0AAAIAAbAg");
	this.shape_100.setTransform(5.9,112.2,0.506,0.506,0,0,180);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-52.8,245.5,185.3);


(lib._5Packaging = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfB4QgMgEgIgFQgIgFgFgFQgJgKgFgLQgFgKgBgKIgCgSIA5gCIAAAJIACALQADAJAHAFQAGAGALAAQAJAAAGgFQAGgFADgIQADgHABgIIAAgNQAAgWgJgKQgJgIgLAAIgGABIgGACQgHADgCACIgEAJIgzgIIAPh+ICLAAIgEAuIhaAAIgGAtQAEgEAJgEQAJgEAPgBQAYABAQAKQAQALAJASQAIARAAAWQAAAQgFAQQgFAQgLANQgLANgSAIQgRAHgXABQgQgBgMgDg");
	this.shape.setTransform(263.8,167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(264.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._5instatic();
	this.instance.setTransform(129.9,157.9,0.975,0.975);
	this.instance.cache(-117,-64,250,173);

	this.instance_1 = new lib._5in();
	this.instance_1.setTransform(129.9,157.9,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(138,168);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINJQlcldAAnsQAAnrFcldQFdlcHrAAQHsAAFcFcQFdFdAAHrQAAHsldFdQlcFcnsAAQnrAAldlcg");
	this.shape_3.setTransform(138,168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(139.6,168.1,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-13.7,168.4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.8,44.6,635.5,247.6);


(lib._4Sorting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEB5IAAg4IhhAAIABgsIBiiNIA3AAIAACRIAhAAIAAAoIghAAIAAA4gAADg6IgDAIIgGAKIgGAJIgnA4IA3AAIAAgiIACg5IgDAIg");
	this.shape.setTransform(-290.3,185.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(-290.2,186.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._4instatic();
	this.instance.setTransform(90.3,176.1,0.965,0.965,0,0,0,0.1,0.1);
	this.instance.cache(-390,-79,203,205);

	this.instance_1 = new lib._4in();
	this.instance_1.setTransform(90.3,176.1,0.965,0.965,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(-165.9,184.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINIQlclcAAnsQAAnrFcldQFdlcHrAAQHsAAFcFcQFdFdAAHrQAAHsldFcQlcFdnsAAQnrAAldldg");
	this.shape_3.setTransform(-165.9,184.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(-165.5,186,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-14,185.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.1,61.7,578.3,247.6);


(lib._6in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.gotoAndPlay (12);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-263.2,11.4);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-261.2,23.1,1.522,1.522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.52,scaleY:1.52,x:-261.2,y:23.1},8).wait(67));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtdNdQllllAAn4QAAn4FlllQFlllH4AAQH5AAFlFlQFlFlAAH4QAAH4llFlQllFmn5AAQn4AAlllmg");
	mask.setTransform(-265.8,9.2);

	// Layer 7
	this.instance_2 = new lib._6carbg();
	this.instance_2.setTransform(-266.4,138.6);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:88.6},8).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.8,-31.1,217.4,162.3);


(lib._1StrategicSourcing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCB6IAAixIgLAFIgOACIgaABIAAglIATgCQALgCAKgFQALgGAEgHQAFgHADgIIAsAAIAADzg");
	this.shape.setTransform(262.7,168.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(264.1,169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._1instat();
	this.instance.setTransform(115.1,154);
	this.instance.cache(-81,-103,223,238);

	this.instance_1 = new lib._1in();
	this.instance_1.setTransform(115.1,154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(137,168.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINIQlclcAAnsQAAnrFcldQFdlcHrAAQHsAAFcFcQFdFdAAHrQAAHsldFcQlcFdnsAAQnrAAldldg");
	this.shape_3.setTransform(137,168.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(138.8,168.1,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-14.6,168.8,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.7,16.2,607.6,276.4);


(lib._7Warehousing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAB6IAIgiQAGgVALgbQAKgbARgbQAQgeAZgdIhyAAIAAgwICrAAIAAAsQgSAVgMATQgNATgJASQgJAUgHAWIgJAgQgDANgCALIgDAYg");
	this.shape.setTransform(263.9,166.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(264.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._7inые();
	this.instance.setTransform(129.9,157.9,0.975,0.975);
	this.instance.cache(-117,-55,250,189);

	this.instance_1 = new lib._7in();
	this.instance_1.setTransform(129.9,157.9,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(138,168);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINJQlcldAAnsQAAnrFcldQFdlcHrAAQHsAAFcFcQFdFdAAHrQAAHsldFdQlcFcnsAAQnrAAldlcg");
	this.shape_3.setTransform(138,168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(139.6,168.1,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-13.7,168.4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.8,44.6,579.9,265.5);


(lib._6Shipping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVB7QgLgDgMgHQgTgMgLgaQgMgZAAgtQAAgXAEgXQADgXALgUQAKgSATgLQATgMAbAAQANAAALADQAKADAJAFQAMAIAHALQAHAJACAKIAFARIg6AHIAAgGIgBgGQgCgIgGgFQgGgEgHgBQgFAAgGAEQgGADgFAHQgEAHgDAMQgCALgBAMIgCAWQACgFAEgFQAEgEAJgFQAHgFAHgDQAJgCAJAAQAPAAAPAIQAQAHALAQQAKAPAAAbQAAAcgLASQgLAUgUAKQgTAKgaAAQgJAAgMgDgAgQARQgIAKAAARQAAAIACAIQACAKAGAGQAGAHAKABQALAAAHgGQAGgEADgIQACgGABgHIAAgJIAAgJQgBgGgCgHQgDgFgGgFQgDgDgGgBIgKgCQgKACgHAJg");
	this.shape.setTransform(-276.9,175.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D2B").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_1.setTransform(-277.2,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 3-coffee
	this.instance = new lib._6inst();
	this.instance.setTransform(109.9,153,0.975,0.975);
	this.instance.cache(-361,-20,188,89);

	this.instance_1 = new lib._6in();
	this.instance_1.setTransform(105.5,165.7,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ASlAAQAAHsldFdQlcFcnsAAQnsAAlclcQlcldAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrg");
	this.shape_2.setTransform(-153,174.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.247)").s().p("AtINIQlclcAAnsQAAnrFcldQFclcHsAAQHsAAFcFcQFdFdAAHrQAAHsldFcQlcFdnsAAQnsAAlcldg");
	this.shape_3.setTransform(-153,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// Layer 4
	this.instance_2 = new lib.circlecycle();
	this.instance_2.setTransform(-151.9,174.1,1,1,0,0,0,-1,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("A3yTWQoBAAlrlrQlqlrAAoAQAAoAFqlqQFrlrIBABMBC7AAAMAAAAmqg");
	this.shape_4.setTransform(-2.5,174.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.1,50.4,576.8,247.6);


// stage content:
(lib.FtoF5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FARM TO FORK
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACYGWIjXlxIh8CDIAADuIjBAAIAAsqIDBAAIAAFLIEulLIDzAAIkfEtIE2H9g");
	this.shape.setTransform(1001.8,91.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACGGWIigkiIiAAAIAAEiIjLAAIAAsqIFsAAQArAAAvADQAvAFAtASQAuARAlAnQAeAgARAvQARAuABA4QgBA9gSAoQgRAogaAWQgbAZgcAOQgdANgVAIIC8FEgAiaghICnAAQALAAAUgCQATgDAWgLQAVgJAOgXQAOgXABgoQgBg0gUgXQgUgWgbgGQgcgHgWABIirAAg");
	this.shape_1.setTransform(917.9,91.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCGtQhgAAhMgjQhLghgzg8Qg0g8gbhNQgahOAAhXQAAhTAZhNQAahMAzg9QAyg8BLgjQBLgjBigBQAiAAAlAGQAmAFAlANQBKAbAxAsQAxAsAdAzQAcA0AOAyQAOAyAEAmQAEAmAAAQQgBBqgrBZQgqBZhEA3Qg8AxhCASQhAATg+AAIgCgBgABbDqQAugZAfg1QAeg0AEhVQADg/gRg7QgRg7gigmQgbgcglgQQglgQgoAAQg+ABgtAhQgtAggZA6QgZA5AABLQACBeAeA6QAfA6AuAaQAuAbAxgBQAwABAtgZg");
	this.shape_2.setTransform(828.8,91.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak2GWIAAsqIJtAAIAACcImjAAIAACqIGCAAIAACcImCAAIAAFIg");
	this.shape_3.setTransform(750.3,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCGtQhgAAhMgjQhLghgzg8Qg0g8gbhNQgahOAAhXQAAhTAZhNQAahMAzg9QAyg8BLgjQBLgjBigBQAiAAAlAGQAmAFAlANQBKAbAxAsQAxAsAdAzQAcA0AOAyQAOAyAEAmQAEAmAAAQQgBBqgrBZQgqBZhEA3Qg8AxhCASQhAATg+AAIgCgBgABbDqQAugZAfg1QAeg0AEhVQADg/gRg7QgRg7gigmQgbgcglgQQglgQgoAAQg+ABgtAhQgtAggZA6QgZA5AABLQACBeAeA6QAfA6AuAaQAuAbAxgBQAwABAtgZg");
	this.shape_4.setTransform(634.7,91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhkGWIAAqJIjTAAIAAihIJvAAIAAChIjSAAIAAKJg");
	this.shape_5.setTransform(556.6,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AD+GWIAMpBIAChSIgGAdIgIAjIgGAXIgHAcIiZIgIitAAIiToJIgkiQIADAzIABArIADA9IAKH+IjEAAIAAsqIEoAAIB9HFIAbCCIAJgrIAFgbIAHgeICCnjIEoAAIAAMqg");
	this.shape_6.setTransform(440.6,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACGGWIigkiIiAAAIAAEiIjLAAIAAsqIFsAAQArAAAvADQAvAFAtASQAuARAlAnQAeAgARAvQARAuABA4QgBA9gSAoQgRAogaAWQgbAZgcAOQgdANgVAIIC8FEgAiaghICnAAQALAAAUgCQATgDAWgLQAVgJAOgXQAOgXABgoQgBg0gUgXQgUgWgbgGQgcgHgWABIirAAg");
	this.shape_7.setTransform(350.1,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AC9GWIgpiCIkoAAIgoCCIjYAAIEtsqIDRAAIEsMqgABmCCIhnlWIgQA/IgRA/IgWBGIgXBMIgWBGIDLAAg");
	this.shape_8.setTransform(265.7,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ak2GWIAAsqIJtAAIAACcImjAAIAACqIGCAAIAACcImCAAIAAFIg");
	this.shape_9.setTransform(192.2,91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// SHIPPING
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_10.setTransform(1048.1,873.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_11.setTransform(1020.1,873.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_12.setTransform(1000.2,873.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_13.setTransform(983.7,873.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#519FD5").s().p("AgvCGQgUgFgPgIQgOgKgJgIIgQgRIA0ghIAKALQAGAFAJAGQAOAGANAEQANACAKAAQANAAALgDQALgFAHgHQAHgGABgKQgBgKgHgGQgIgFgKgCIgVgEIgVgDIgVgEQgHgBgLgEQgNgEgMgHQgMgGgIgNQgJgPAAgVQAAgaAKgRQAKgRAQgLQAQgKATgFQASgEAQAAQAfAAAWAJQAXAIAQAMIAbAWIgyAjIgMgLQgGgFgJgFQgGgEgNgEQgLgEgMAAQgNABgIADQgJAFgEAGQgFAHAAAGQAAALAHAEQAGAGAHABIAPADIAcAFIAeAGIAVAFQAXAJAMAPQALARAAAXQAAAPgEAPQgGAOgKANQgNAOgQAIQgRAIgRADQgUADgSAAQgbAAgUgGg");
	this.shape_14.setTransform(959.5,873.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_15.setTransform(933.4,873.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAQAKAAAMACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_16.setTransform(904.9,873.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_17.setTransform(877.4,873.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#519FD5").s().p("Ah2CGIAAkLIBVAAQAQAAATACQAUACAVAGQAVAHARAPQAVATAJAaQAIAbAAAcQAAAQgCANQgBAMgEAJQgJAfgRARQgRARgTAIQgTAIgSACQgPACgLAAgAgzBQIAUAAQAOAAAPgCQANgCANgIQAMgHAJgQQAHgQABgdQAAgMgDgOQgCgNgKgNQgIgMgLgFQgMgFgJgBIgWgBIgbAAg");
	this.shape_18.setTransform(1115,833.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_19.setTransform(1086.6,833.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_20.setTransform(1059.2,833.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_21.setTransform(1021.2,833.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_22.setTransform(993.2,833.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_23.setTransform(973.3,833.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_24.setTransform(956.8,833.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_25.setTransform(933.6,833.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAQAKAAAMACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_26.setTransform(904.2,833.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#519FD5").s().p("AgvCHQgUgGgPgJQgNgJgKgJIgPgQIAyggIALAKQAFAFAKAGQAOAGANAEQANACAKAAQAOAAALgDQAKgEAIgHQAGgIABgJQgBgKgHgGQgIgGgKgCIgWgDIgTgDIgXgEQgGgBgMgEQgLgEgNgHQgMgGgJgNQgIgOgBgWQAAgaALgRQAKgSAQgKQAQgKATgFQATgEAPAAQAfAAAWAJQAWAIARALIAbAXIgyAkIgMgMQgGgGgJgEQgGgFgMgDQgMgEgMAAQgMAAgJAEQgJAFgFAGQgEAGAAAHQAAAKAHAGQAFAEAIACIAPAEIAcAEIAeAGIAWAGQAWAIAMAPQAMARAAAXQAAAPgGAOQgFAPgKANQgNAOgQAIQgQAIgSADQgUADgSAAQgaAAgVgFg");
	this.shape_27.setTransform(875.6,833.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_28.setTransform(282.3,1062.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_29.setTransform(254.3,1062.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_30.setTransform(234.4,1062.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_31.setTransform(214.2,1062.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_32.setTransform(186.5,1062.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#519FD5").s().p("AAyCGIhGh6IgpArIAABPIg/AAIAAkLIA/AAIAABuIBihuIBRAAIhfBkIBnCng");
	this.shape_33.setTransform(161.5,1062.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#519FD5").s().p("Ag5B9QgdgRgRgfQgRggAAgtQAAgnAQggQARggAdgTQAdgTAkAAQAYAAAUAHQAUAIAPAMQAOALAHALQAIALAGAKIg2AaQgCgGgFgHQgEgHgJgHQgJgIgKgDQgJgDgJAAQgTABgPALQgPAMgHATQgIAUAAAWQABAcAIATQAJAUAPAKQAPAKAQAAQASgBALgGQALgHAHgJQAHgJAFgIIA0AbQgHALgJAMQgJALgPALIgQAKQgLAFgPAEQgOAFgTAAQgiAAgdgRg");
	this.shape_34.setTransform(133.8,1062.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_35.setTransform(106.6,1062.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#519FD5").s().p("AhyCGIAAkLIBsAAQAVAAATACQAUABAQAHQARAIAMAQQAHAMAEAPQAFAOAAAOQgBAMgCAKQgCALgFAJQgMAWgSAKQgTALgVACQgUADgRAAIgsAAIAABYgAgugCIAoAAQALABAMgCQAOgDAHgJQAJgJAAgUQAAgTgJgJQgJgIgNgCQgMgCgHABIgrAAg");
	this.shape_36.setTransform(81.1,1062.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#519FD5").s().p("AhnCGIAAkLIDEAAIAAA1IiCAAIAAAwIB5AAIAAAxIh5AAIAABAICNAAIAAA1g");
	this.shape_37.setTransform(1042.3,1581.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_38.setTransform(1016.6,1581.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAQAKAAAMACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_39.setTransform(987.2,1581.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_40.setTransform(961.5,1581.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#519FD5").s().p("AgvCHQgUgGgOgIQgPgJgJgKIgQgQIAzghIALALQAGAFAJAGQANAGAOADQANADAKAAQANAAALgDQAMgEAGgHQAHgIAAgJQAAgKgIgGQgHgGgLgCIgUgDIgVgDIgWgEQgGgBgLgEQgMgEgNgHQgMgGgIgNQgKgOAAgWQAAgaALgRQAKgSAQgKQAQgKATgFQATgEAPAAQAfAAAWAJQAXAIAPALIAbAXIgwAkIgNgMQgHgGgHgEQgIgFgLgDQgMgEgMAAQgNAAgIAEQgJAFgEAGQgFAGAAAHQABAKAFAGQAHAEAIACIANAEIAdAEIAeAGQAOACAHAEQAYAIALAPQALARAAAXQAAAPgEAOQgGAPgLANQgMAOgQAIQgRAIgSADQgSADgTAAQgbAAgUgFg");
	this.shape_41.setTransform(937.3,1581.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAQAKAAAMACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_42.setTransform(899.3,1581.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_43.setTransform(873.6,1581.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_44.setTransform(1120.6,1542.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAQAKAAAMACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_45.setTransform(1091.7,1542.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_46.setTransform(1070.6,1542.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_47.setTransform(1054.1,1542.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#519FD5").s().p("AAACJQgOAAgRgEQgQgDgOgIQgUgKgKgNQgLgNgFgPQgEgPgBgPIgBgdIAAiUIBEAAIAACmQAAAKABAIQABAJADAGQAHALALADQAMAFALgBQAXAAAJgJQAKgIACgMQACgMAAgLIAAilIBDAAIAACUQABAUgDATQgDATgKASQgLASgPAJQgPAKgQAFQgPAEgMACIgNABIgCAAg");
	this.shape_48.setTransform(1029.5,1542.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#519FD5").s().p("AhyCGIAAkLIBoAAQAUAAARACQASABANAEQARAFAJAKQALAKAFAMQAEAMABANQgBALgCAHIgCAIQgHAOgKAHQgJAHgKADQgKAEgHABQANACAOACQAPAEALANQAHAIAEAKQAEAKAAAMQgBALgEAMQgEAMgJALQgKALgRAIQgPAGgRACQgSACgUAAgAgyBVIAvAAQAKAAALgCQAMgBAIgHQAJgHgBgPQAAgQgHgHQgHgHgJgBIgQgCIg5AAgAgygaIAyAAIAQgCQAJgBAGgHQAIgGgBgNQAAgNgFgGQgGgGgJgBQgIgCgHABIg1AAg");
	this.shape_49.setTransform(1003,1542.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_50.setTransform(982.8,1542.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_51.setTransform(964.4,1542.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_52.setTransform(939.4,1542.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#519FD5").s().p("AgvCHQgUgGgPgJQgNgIgKgKIgPgQIAyggIALAKQAGAFAJAFQAOAIANACQANAEAKgBQAOAAALgEQAKgEAIgHQAGgHABgJQgBgLgHgFQgIgGgKgCIgWgDIgTgDIgXgEQgGgBgMgEQgLgDgNgIQgMgGgJgOQgIgOgBgVQAAgaALgRQAKgRAQgLQAQgKATgEQATgFAPAAQAfABAWAHQAWAJARALIAbAXIgyAkIgMgMQgGgGgJgEQgGgEgNgEQgLgDgMgBQgMAAgJAFQgJAEgFAGQgEAGAAAHQAAALAHAFQAGAEAHADIAPACIAcAFIAeAFIAWAHQAWAIAMAPQAMARAAAXQAAAPgGAOQgFAQgKAMQgNAOgQAIQgQAIgSADQgUADgSAAQgaAAgVgFg");
	this.shape_53.setTransform(915.2,1542.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_54.setTransform(896.6,1542.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#519FD5").s().p("Ah3CGIAAkLIBWAAQAQAAATACQAUACAVAGQAVAHARAPQAVATAJAaQAJAbAAAcQAAAQgCANQgCAMgEAJQgJAfgRARQgRARgTAIQgTAIgSACQgPACgLAAgAgzBQIAUAAQAPAAAOgCQANgCAMgIQANgHAJgQQAHgQAAgdQABgMgDgOQgCgNgJgNQgKgMgKgFQgLgFgKgBIgWgBIgbAAg");
	this.shape_55.setTransform(877.6,1542.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_56.setTransform(1105.2,583);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_57.setTransform(1077.2,583.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_58.setTransform(1057.3,583.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#519FD5").s().p("AgvCGQgUgFgPgIQgOgJgJgJIgQgRIA0ghIAKALQAFAFAKAGQANAGAOAEQANACAKAAQANAAALgDQAMgFAGgGQAHgIABgJQgBgLgHgFQgIgGgLgCIgUgDIgVgDIgVgEQgHgBgLgEQgNgDgMgIQgMgGgIgNQgKgOABgWQAAgaAKgRQAKgSAQgKQAQgKATgFQATgEAPAAQAfAAAWAJQAXAIAQAMIAbAWIgyAjIgMgLQgHgGgIgEQgGgFgNgDQgLgEgMAAQgNAAgIAEQgJAFgEAGQgFAGAAAHQAAAKAHAGQAFAEAIACIAPAEIAcAEIAeAGIAVAFQAYAJALAPQALARAAAXQAAAPgEAOQgGAQgKAMQgNAOgQAIQgRAIgRADQgUADgSAAQgbAAgUgGg");
	this.shape_59.setTransform(1037.9,583.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_60.setTransform(1011.8,583.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#519FD5").s().p("AAxCGIAAhzIhgAAIAABzIhEAAIAAkLIBEAAIAABhIBgAAIAAhhIBDAAIAAELg");
	this.shape_61.setTransform(984.1,583.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#519FD5").s().p("Ag5B9QgdgRgRgfQgRggAAgtQAAgnAQggQARggAdgTQAdgTAkAAQAYAAAUAHQAUAIAPAMQAOALAHALQAIALAGAKIg2AaQgCgGgFgHQgEgHgJgHQgJgIgKgDQgJgDgJAAQgTABgPALQgPAMgHATQgIAUAAAWQABAcAIATQAJAUAPAKQAPAKAQAAQASgBALgGQALgHAHgJQAHgJAFgIIA0AbQgHALgJAMQgJALgPALIgQAKQgLAFgPAEQgOAFgTAAQgiAAgdgRg");
	this.shape_62.setTransform(957.4,583.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_63.setTransform(931.2,583.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#519FD5").s().p("AAACJQgOAAgRgEQgQgDgOgIQgUgKgKgNQgLgNgFgPQgEgPgBgPIgBgdIAAiUIBEAAIAACmQAAAKABAIQABAJADAGQAHALALADQAMAFALgBQAXAAAJgJQAKgIACgMQACgMAAgLIAAilIBDAAIAACUQABAUgDATQgDATgKASQgLASgPAJQgPAKgQAFQgPAEgMACIgNABIgCAAg");
	this.shape_64.setTransform(902.9,583.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#519FD5").s().p("AhyCGIAAkLIBsAAQAUAAAVACQATABARAHQAQAIAMAQQAHAMAEAPQAFAOAAAOQgBAMgCAKQgDALgEAJQgMAWgSAKQgTALgVACQgVADgQAAIgsAAIAABYgAgugCIAoAAQALABAMgCQAOgDAHgJQAJgJAAgUQAAgTgJgJQgJgIgMgCQgNgCgIABIgqAAg");
	this.shape_65.setTransform(877.1,583.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#519FD5").s().p("AhTCGIBxkLIA2AAIhxELg");
	this.shape_66.setTransform(1123.9,543.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_67.setTransform(1100.9,543.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAIAWACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_68.setTransform(1072,543.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_69.setTransform(1051,543.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_70.setTransform(1034.4,543.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_71.setTransform(1017.8,543.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#519FD5").s().p("AgvCHQgUgGgOgJQgOgIgKgKIgPgQIAyggIALAKQAFAFAKAFQAOAIANACQANADAKAAQANAAAMgEQAKgEAIgGQAGgIAAgJQAAgLgHgFQgIgFgKgDIgWgDIgTgDIgXgEQgGgBgMgEQgMgDgMgIQgMgGgJgOQgIgOgBgVQAAgaALgRQAKgRAQgLQAQgKATgEQASgFAQAAQAfABAWAHQAWAJAQALIAbAXIgxAkIgMgMQgGgFgJgFQgHgEgLgEQgMgDgMgBQgMAAgJAFQgJAEgFAGQgEAHAAAGQAAAKAGAGQAGAEAIADIAPACIAcAFIAeAFIAWAHQAWAIAMAPQAMARAAAXQAAAPgGAOQgFAPgLANQgMAOgQAIQgQAIgTADQgTADgSAAQgaAAgVgFg");
	this.shape_72.setTransform(998.3,543.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_73.setTransform(979.7,543.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#519FD5").s().p("AAACJQgOAAgRgEQgQgDgOgIQgUgKgKgNQgLgNgFgPQgEgPgBgPIgBgdIAAiUIBEAAIAACmQAAAKABAIQABAJADAGQAHALALADQAMAFALgBQAXAAAJgJQAKgIACgMQACgMAAgLIAAilIBDAAIAACUQABAUgDATQgDATgKASQgLASgPAJQgPAKgQAFQgPAEgMACIgNABIgCAAg");
	this.shape_74.setTransform(959.9,543.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#519FD5").s().p("ABnCQQgKgDgLgHQgLgHgRgMIgVAJQgKAEgMADQgLACgMAAQgbAAgZgKQgYgJgSgRQgPgPgJgSQgIgSgEgTQgEgUAAgPQAAgoARgfQAPggAegSQAegUAqAAQAeAAAZAMQAZAKARAUQASATAJAZQAJAZAAAdQAAAVgEARQgFAQgGANIgLAUQAHAHAHAFQAHAEAJADIAWAGIgUAvQgOgDgKgDgAgQhcQgSABgMAIQgMAIgHAMQgIAMgDAPQgDAOAAAOQAAAnATAWQASAXAfABQAVgBAPgMQAPgLAHgUQAIgTAAgWQgBgTgEgPQgFgPgFgHQgJgNgKgGQgLgGgKgCIgMgBIgEAAg");
	this.shape_75.setTransform(932.4,544.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#519FD5").s().p("Ag5B9QgdgRgRgfQgRggAAgtQAAgnAQggQARggAdgTQAdgTAkAAQAYAAAUAHQAUAIAPAMQAOALAHALQAIALAGAKIg2AaQgCgGgFgHQgEgHgJgHQgJgIgKgDQgJgDgJAAQgTABgPALQgPAMgHATQgIAUAAAWQABAcAIATQAJAUAPAKQAPAKAQAAQASgBALgGQALgHAHgJQAHgJAFgIIA0AbQgHALgJAMQgJALgPALIgQAKQgLAFgPAEQgOAFgTAAQgiAAgdgRg");
	this.shape_76.setTransform(903.6,543.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_77.setTransform(876.4,543.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_78.setTransform(1035.6,1227.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_79.setTransform(1007.6,1227.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_80.setTransform(987.7,1227.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#519FD5").s().p("AhyCGIAAkLIBsAAQAUAAAVACQATABARAHQAQAIAMAQQAHAMAEAPQAFAOAAAOQgBAMgCAKQgCALgFAJQgMAWgSAKQgTALgVACQgVADgQAAIgsAAIAABYgAgugCIAoAAQALABAMgCQAOgDAHgJQAJgJAAgUQAAgTgJgJQgJgIgMgCQgNgCgIABIgqAAg");
	this.shape_81.setTransform(969.8,1227.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#519FD5").s().p("AhxCGIAAkLIBsAAQATAAAUACQAVABAPAHQARAIAMAQQAHAMAFAPQADAOAAAOQABAMgDAKQgDALgEAJQgLAWgTAKQgTALgVACQgUADgRAAIgtAAIAABYgAgvgCIApAAQALABAMgCQANgDAJgJQAIgJABgUQgBgTgJgJQgJgIgNgCQgMgCgHABIgsAAg");
	this.shape_82.setTransform(943.6,1227.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_83.setTransform(923.5,1227.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#519FD5").s().p("AAxCGIAAhzIhgAAIAABzIhEAAIAAkLIBEAAIAABhIBgAAIAAhhIBDAAIAAELg");
	this.shape_84.setTransform(903.4,1227.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#519FD5").s().p("AgvCHQgUgGgPgJQgNgIgKgKIgPgQIAyggIALAKQAFAFAKAFQAOAIANACQANADAKAAQAOAAALgEQAKgDAIgIQAGgHABgJQgBgLgHgFQgIgGgKgBIgWgEIgTgDIgXgEQgGgBgMgEQgLgDgNgIQgMgGgJgOQgIgOgBgVQAAgaALgRQAKgRAQgLQAQgKATgEQATgFAPAAQAfABAWAHQAWAJARALIAbAXIgyAkIgMgMQgGgGgJgEQgGgFgMgDQgMgDgMgBQgMAAgJAFQgJAEgFAGQgEAGAAAHQAAALAHAEQAFAFAIADIAPACIAcAFIAeAFIAWAHQAWAIAMAPQAMARAAAXQAAAPgGAOQgFAPgKANQgNAOgQAIQgQAIgSADQgUADgSAAQgaAAgVgFg");
	this.shape_85.setTransform(875.6,1227.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// STRATEGIC SOURCING
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_86.setTransform(348.8,1380.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_87.setTransform(320.8,1380.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_88.setTransform(300.9,1380.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#519FD5").s().p("AgvCGQgUgFgPgJQgNgIgKgKIgPgQIAyggIALAKQAFAFAKAFQAOAIANACQANAEAKgBQANAAAMgEQAKgDAIgIQAGgHAAgJQAAgLgHgFQgIgFgKgCIgWgEIgTgDIgXgEQgGgBgMgEQgMgDgMgIQgMgGgJgOQgIgNgBgWQAAgaALgRQAKgRAQgLQAQgKATgEQASgFAQAAQAfABAWAHQAWAJAQAMIAbAWIgxAjIgMgLQgGgGgIgEQgIgFgLgDQgMgDgMgBQgMAAgJAFQgJAEgFAGQgEAGAAAHQAAALAGAEQAGAFAIADIAPACIAcAFIAeAFIAWAGQAWAJAMAPQAMARAAAXQAAAPgGAPQgFAOgLANQgMAOgQAIQgQAIgTADQgTADgSAAQgaAAgVgGg");
	this.shape_89.setTransform(281.5,1380.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#519FD5").s().p("AAACJQgOAAgRgEQgQgDgOgIQgUgKgKgNQgLgNgFgPQgEgPgBgPIgBgdIAAiUIBEAAIAACmQAAAKABAIQABAJADAGQAHALALADQAMAFALgBQAXAAAJgJQAKgIACgMQACgMAAgLIAAilIBDAAIAACUQABAUgDATQgDATgKASQgLASgPAJQgPAKgQAFQgPAEgMACIgNABIgCAAg");
	this.shape_90.setTransform(255,1380.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAIAWACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_91.setTransform(226.1,1380.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#519FD5").s().p("AAxCGIAAhzIhgAAIAABzIhEAAIAAkLIBEAAIAABhIBgAAIAAhhIBDAAIAAELg");
	this.shape_92.setTransform(196.8,1380.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#519FD5").s().p("AhoCGIAAkLIDEAAIAAA1IiBAAIAAAwIB5AAIAAAxIh5AAIAABAICNAAIAAA1g");
	this.shape_93.setTransform(171.2,1380.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_94.setTransform(145.5,1380.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_95.setTransform(117.6,1380.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#519FD5").s().p("AAwCGIgNgtIgMgsIgJgdIgFgSIgFgRIgEgXIgDAVIgEAQIgFASIgJAeIgaBbIhFAAIhEkLIBDAAIAOBAIAKAtIAGAeIAFAcIAFAfIAGghIAFgZIAGgYIAJghIAWhTIA5AAIAMAsIANArIAJAgIAHAWIAFAYIAFAgIAFghIAEgZIAGgXIAHgiIAJgpIAJgpIBCAAIhEELg");
	this.shape_96.setTransform(85.6,1380.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).wait(1));

	// It’s a manual process, with farm workers hand picking the coffee cherry. In Central America, this usually happens from November through February/March. While in Brazil a mechanical tractor-harvesting process is performed from May through July/August. 
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgGAIIAAgOIANAAIAAAOg");
	this.shape_97.setTransform(1016.5,1007);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFgBQgFABgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_98.setTransform(1012.2,1003.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_99.setTransform(1007.1,1002.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgDIAAgDQAAgJgEgDQgGgFgJAAQgJAAgEAEQgGADgCAJIgNgCQABgJAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADAEABAGIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgJAAQgNAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBAEQAAAFAEAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgHADgOABg");
	this.shape_100.setTransform(1000.9,1003.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQABgMAEgIQAEgKAIgGQAJgFAJAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgNAAIAAgLQgIANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_101.setTransform(987.3,1002.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_102.setTransform(978.6,1003.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgYAgQgLgLABgVQAAgLADgLQAFgKAKgFQAIgFAJAAQANAAAJAHQAJAHACANIgOACQgBgJgGgEQgFgEgHgBQgIAAgHAJQgGAHgBAPQAAAQAHAHQAHAJAIgBQAIABAFgGQAGgFABgKIAPABQgCAOgKAJQgKAIgNAAQgPAAgKgLg");
	this.shape_103.setTransform(970.5,1003.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFgBQgFABgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_104.setTransform(964.2,1003.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAIg");
	this.shape_105.setTransform(956.4,1003.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_106.setTransform(950.1,1002);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_107.setTransform(938.6,1002.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_108.setTransform(932,1002.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_109.setTransform(927.9,1002.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AAQApIgOgvIgCgPIgQA+IgOAAIgZhRIAOAAIANAuIAFARIAFgRIAMguIANAAIAMAuIAFAQIAEgQIAPguIANAAIgZBRg");
	this.shape_110.setTransform(920.4,1003.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAEgIQAFgKAIgGQAIgFAKAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgNAAIAAgLQgIANgPAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAHAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_111.setTransform(905.4,1002.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_112.setTransform(896.8,1003.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_113.setTransform(890.5,1002.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAIg");
	this.shape_114.setTransform(884.3,1003.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAIg");
	this.shape_115.setTransform(875.4,1003.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQAAgLAFgLQAEgKAJgFQAKgFAIAAQAOAAAIAHQAJAHACANIgOACQgCgJgEgEQgGgEgHgBQgIAAgHAJQgGAHAAAPQgBAQAHAHQAGAJAJgBQAIABAGgGQAFgFACgKIANABQgBAOgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_116.setTransform(867.3,1003.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAHAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_117.setTransform(1100.4,983.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_118.setTransform(1091.7,985.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgdAkQgIgHABgKQgBgGADgFQADgFAFgDQAEgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgFADQgEAEgCAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEADABAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHAEADQAEAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_119.setTransform(1082.8,985.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAFgIADgDQADgDAFAAQAGAAAIAFIgFAMQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_120.setTransform(1071.9,985.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_121.setTransform(1064.1,985.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_122.setTransform(1057.6,983.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAFAEAIABQAKAAAFgFQAEgEAAgFQABgFgFgDQgCgBgMgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAFQAEAEAAAIIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIABAEIAGAEIAKADQAQAEAFADQAGABADAFQAEAFAAAGQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_123.setTransform(1051.2,985.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgdAkQgIgHABgKQgBgGADgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgFADQgEAEgCAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQADADACAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgCADAAADQAAAHAEADQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_124.setTransform(1042.8,985.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgVAMgMQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAJgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_125.setTransform(1033.9,985.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAHAAAIAFIgFAMQgFgDgFAAQgFAAgCADQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_126.setTransform(1027.4,985.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_127.setTransform(1015.2,985.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_128.setTransform(1006.3,983.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_129.setTransform(999.7,983.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIABQgGAAgFACQgFAEgCAFQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAAMQAEgGAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_130.setTransform(986.3,985.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgVAMgMQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAJgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_131.setTransform(975.1,985.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_132.setTransform(968.7,985.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_133.setTransform(963.5,983.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQABgMAEgIQAEgKAIgGQAJgFAJAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgNAAIAAgLQgIANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_134.setTransform(951.7,983.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_135.setTransform(943.1,985.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAGgDQAGgEAFAAQALAAAIAGQAIAFAFAKQADAKAAAMQABAMgFAJQgFAKgIAFQgJAGgJAAQgFAAgGgDQgGgDgDgEIAAAogAgPglQgHAIABAQQgBAOAHAIQAGAHAJABQAIgBAHgHQAGgJAAgOQAAgQgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_136.setTransform(934.4,986.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIABQgGAAgFACQgFAEgCAFQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAAMQAEgGAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_137.setTransform(923.1,985.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_138.setTransform(911.9,985.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIAOAAIAABxIgOAAIAAgLQgIANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_139.setTransform(902.8,983.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_140.setTransform(889.7,985.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_141.setTransform(880.8,985.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_142.setTransform(871.9,983.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_143.setTransform(865.3,983.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_144.setTransform(1084.5,966.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQACgDAFAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_145.setTransform(1078.1,966.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgFAEQgEADgDAIIgNgBQACgJAEgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQAEAEAAAFIABANIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBAEQAAAFAEAEQAFAEAIAAQAGAAAHgEQAGgDADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_146.setTransform(1070.3,966.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAGAFQAFAFAHgBQAKAAAEgDQAFgEAAgGQAAgFgEgCQgDgDgLgCQgNgEgHgCQgFgCgEgFQgCgFAAgGQgBgGADgEQACgFAFgDQADgCAGgCQAFgCAHAAQAHAAAIADQAIADADAEQAEAFABAJIgOACQgBgHgEgDQgFgFgHAAQgJABgEADQgEADAAAEIABAFIAGAEIAKAEQAPADAHAEQAFAAAEAEQADAGAAAHQAAAGgEAHQgFAGgHADQgIAEgKAAQgOAAgIgHg");
	this.shape_147.setTransform(1057.4,966.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_148.setTransform(1048.9,966.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgEAEQgGADgCAIIgNgBQABgJAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADAEABAFIABANIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgJAAQgNAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBAEQAAAFAEAEQAFAEAIAAQAGAAAGgEQAHgDADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_149.setTransform(1040,966.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_150.setTransform(1031.1,966.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgVAtIAAALIgNAAIAAhxIANAAIAAApQAKgLAMAAQAHAAAHADQAHADAEAGQAEAFADAIQADAGAAAJQAAAVgLAMQgLAMgOAAQgNAAgIgNgAgPgHQgGAHAAAOQAAAPADAGQAHALALAAQAIAAAGgIQAHgIAAgQQAAgOgHgIQgGgIgIAAQgIAAgHAJg");
	this.shape_151.setTransform(1022.5,965.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_152.setTransform(1008.9,966.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_153.setTransform(1000,965.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgGA5IAAhjIgmAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_154.setTransform(990.7,965.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_155.setTransform(979.2,970.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_156.setTransform(972.4,966.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AAQApIgOgvIgCgPIgQA+IgOAAIgZhRIAOAAIANAuIAFARIAFgQIAMgvIANAAIAMAuIAFAQIAEgQIAPguIANAAIgZBRg");
	this.shape_157.setTransform(962.2,966.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgKQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_158.setTransform(952,966.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_159.setTransform(945.5,966.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgWAtIAAALIgMAAIAAhxIANAAIAAApQAKgLAMAAQAHAAAHADQAGADAFAGQAEAFADAIQADAGAAAJQAAAVgLAMQgLAMgOAAQgNAAgJgNgAgPgHQgGAHgBAOQAAAPAFAGQAGALALAAQAHAAAHgIQAHgIAAgQQAAgOgHgIQgGgIgIAAQgIAAgHAJg");
	this.shape_160.setTransform(938,965.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAfggIASAAIgeAdIAiA0g");
	this.shape_161.setTransform(925.4,965.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFAAQgFAAgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_162.setTransform(918.8,966.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgdAkQgIgGABgLQAAgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgEAEQgGADgBAIIgPgBQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQADAEACAFIAAANIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgEQAHgDADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_163.setTransform(911,966.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_164.setTransform(901.9,965.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_165.setTransform(891,971.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_166.setTransform(884.3,965.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQAAgMAEgKQAFgKAJgFQAKgFAIAAQANAAAJAHQAJAHACANIgOABQgCgIgEgEQgGgEgHgBQgIABgHAHQgGAIAAAPQgBAQAHAHQAGAIAJAAQAIABAGgGQAFgFABgKIAPABQgCAPgKAIQgJAIgOAAQgPAAgLgLg");
	this.shape_167.setTransform(876.2,966.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_168.setTransform(870.1,965.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_169.setTransform(866.3,966.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQAAgGADgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgGAEgBAJIgPgDQADgIAEgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQADADABAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgCADABADQAAAHADADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_170.setTransform(1089.9,948.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_171.setTransform(1076.5,948.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_172.setTransform(1070,947.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAJAGAEQAFAEAHABQAKAAAFgFQAEgEABgFQAAgEgFgDQgDgDgLgCQgNgEgHgCQgFgCgEgFQgCgFAAgGQgBgGADgEQACgFAFgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAFQAEAFABAHIgOACQgBgGgEgEQgFgDgHAAQgJgBgEAEQgEADAAAEIABAGIAGADIAKADQAQAFAGACQAFABAEAFQADAFAAAGQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_173.setTransform(1059.2,948.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_174.setTransform(1053.1,947.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_175.setTransform(1048.9,946.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_176.setTransform(1044.5,946.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_177.setTransform(1038.3,946.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAJAGAEQAFAEAHABQAKAAAFgFQAEgEAAgFQAAgEgEgDQgCgDgMgCQgOgEgGgCQgFgCgDgFQgDgFAAgGQAAgGACgEQACgFAFgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAFQAEAFABAHIgOACQgBgGgEgEQgFgDgHAAQgJgBgEAEQgEADAAAEIABAGIAGADIAKADQAPAFAHACQAFABAEAFQADAFAAAGQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_178.setTransform(1029.8,948.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQADgDAFAAQAHAAAHAEIgFANQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_179.setTransform(1019.4,948.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_180.setTransform(1011.6,948.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_181.setTransform(1005.3,946.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_182.setTransform(999.1,948.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgYAgQgKgLAAgVQAAgMADgJQAFgLAKgFQAIgFAJAAQANAAAJAHQAJAHACAMIgNADQgDgJgFgEQgFgFgGABQgJgBgGAJQgIAHAAAPQABAQAGAHQAGAJAJAAQAIgBAFgFQAGgFABgKIAPACQgDANgJAJQgKAIgNAAQgPAAgKgLg");
	this.shape_183.setTransform(991,948.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQADgDAEAAQAIAAAHAEIgFANQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_184.setTransform(980.2,948.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_185.setTransform(975.1,946.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_186.setTransform(968.9,948.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_187.setTransform(960,946.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_188.setTransform(953.4,947.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMAEgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_189.setTransform(941.9,947);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgDgGABQgHAAgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_190.setTransform(933.3,948.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAEgDQAFgBAGgBIAMgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgGAEgCAJIgNgDQABgIAFgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQADADABAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgJAAQgNAAgIgHgAgCAFIgMACQgEACgCADQgBADgBADQAAAHAEADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_191.setTransform(924.4,948.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQABgMAEgIQAEgKAIgGQAJgFAJAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgNAAIAAgLQgIANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_192.setTransform(910.8,947);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgDgGABQgHAAgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_193.setTransform(902.1,948.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgeAkQgHgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgGAEgCAJIgOgDQADgIAEgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQADADABAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgNAAgIgHgAgCAFIgMACQgEACgCADQgCADABADQAAAHADADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_194.setTransform(893.2,948.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAGgDQAFgEAGAAQALAAAIAFQAJAGAEAKQADAKAAAMQABANgFAIQgEAKgJAGQgJAFgJAAQgFAAgGgDQgGgDgDgFIAAApgAgPglQgGAIAAAQQAAAOAGAHQAHAJAIAAQAIAAAGgJQAHgIAAgOQAAgQgHgIQgGgIgIAAQgIAAgHAJg");
	this.shape_195.setTransform(884.6,950);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AAVApIgRgaIgEgHIgUAhIgRAAIAegpIgcgoIARAAIAOAUIAEAJIAGgJIANgUIARAAIgdAnIAgAqg");
	this.shape_196.setTransform(875.9,948.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_197.setTransform(867.4,948.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_198.setTransform(1096,930);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBAMIAtAAQgBgLgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_199.setTransform(1087.1,930.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_200.setTransform(1078.2,928.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_201.setTransform(1071.7,928.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgdA4IgBgNIAIABQAEAAADgBIAEgFIAFgKIABgEIgghRIAQAAIARAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgEAHgFAEQgEADgHAAIgJgCg");
	this.shape_202.setTransform(1061,931.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBAMIAtAAQgBgLgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_203.setTransform(1052.4,930.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_204.setTransform(1043.5,928.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgGA5IAAhjIgmAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_205.setTransform(1034.3,928.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape_206.setTransform(1022.7,933.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgHAGgDQAGgDAFAAQALAAAIAGQAIAFAFAKQADAKAAAMQAAAMgEAJQgFAKgIAFQgJAGgJAAQgFAAgGgDQgGgDgDgEIAAAogAgPgmQgHAJABAQQgBAOAHAIQAGAHAJAAQAIAAAHgHQAGgIAAgPQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_207.setTransform(1016.2,931.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBAMIAtAAQgBgLgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_208.setTransform(1007.1,930.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_209.setTransform(1000.5,928.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAJAGAEQAEAFAIgBQAKAAAFgEQAEgDAAgGQABgFgFgDQgCgCgMgCQgOgEgFgCQgHgCgCgFQgDgFAAgGQAAgGACgEQADgFAEgDQADgCAGgCQAGgCAGAAQAIAAAHADQAHADAEAEQADAGACAIIgOACQgBgHgFgDQgEgFgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKAEQAPADAHAEQAFAAAEAEQADAFAAAIQAAAGgEAHQgFAGgHADQgIAEgKAAQgOAAgIgHg");
	this.shape_210.setTransform(994.2,930.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAJAFAEQAGAFAIgBQAJAAAEgEQAGgDAAgGQgBgFgEgDQgCgCgMgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQABgGACgEQACgFAEgDQAEgCAFgCQAHgCAGAAQAHAAAIADQAIADADAEQADAGABAIIgNACQgBgHgFgDQgEgFgHAAQgJAAgEAEQgEADAAAFIACAEIAFAEIALAEQAPADAFAEQAGAAADAEQAEAFAAAIQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_211.setTransform(981.7,930.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_212.setTransform(976,928.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_213.setTransform(969.7,928.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_214.setTransform(963.2,928.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_215.setTransform(951.9,930);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_216.setTransform(945.7,928.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAGAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_217.setTransform(934.8,928.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBAMIAtAAQgBgLgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_218.setTransform(926.1,930.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgjApIAAgMIAzg6IgQABIggAAIAAgMIBCAAIAAAJIgrAzIgJAJIASAAIAkAAIAAAMg");
	this.shape_219.setTransform(917.7,930.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgGA5IAAhRIAMAAIAABRgAgGgoIAAgQIAMAAIAAAQg");
	this.shape_220.setTransform(911.9,928.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgDgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGABgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_221.setTransform(903.5,930);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_222.setTransform(895,928.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AAVApIgRgaIgEgGIgVAgIgRAAIAfgpIgcgoIARAAIAOATIAEAKIAFgKIAPgTIAQAAIgdAnIAgAqg");
	this.shape_223.setTransform(889.3,930.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgdAkQgIgHABgKQgBgGADgFQADgFAFgDQAEgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgFAEQgEADgCAIIgPgBQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQAEAEABAFIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgEQAHgDADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_224.setTransform(880.8,930.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgDgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGABgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_225.setTransform(869.7,930);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAGAEAHAAQAKAAAFgDQAEgFAAgFQAAgEgEgDQgDgDgLgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgGADgEQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAFQAEAFAAAHIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAEIABAGIAGADIAKADQAQAFAFACQAGABADAEQAEAFAAAHQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_226.setTransform(1052,911.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_227.setTransform(1046.3,910.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgCgGgBQgHABgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAGIABANIAAAxg");
	this.shape_228.setTransform(1035.6,911.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgGAEgBAJIgPgDQACgIAFgFQAEgGAIgDQAIgDAJAAQALAAAGADQAHACADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAEIgMADQgEACgCADQgBADAAAEQAAAGADADQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIADgNABg");
	this.shape_229.setTransform(1026.7,911.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_230.setTransform(1017.8,911.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgVAtIAAALIgOAAIAAhxIAPAAIAAApQAIgLAMAAQAIAAAHADQAGADAFAGQAEAFADAIQADAGgBAJQAAAVgKAMQgLAMgOAAQgNAAgIgNgAgPgHQgHAHABAOQAAAPADAGQAHALALAAQAHAAAIgIQAGgIAAgQQAAgOgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_231.setTransform(1009.1,910.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_232.setTransform(995.5,911.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_233.setTransform(986.6,910.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_234.setTransform(980.1,910.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_235.setTransform(971.4,910);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_236.setTransform(964.4,911.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_237.setTransform(953.7,910.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgGAEgBAJIgPgDQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAEIgMADQgEACgCADQgBADAAAEQAAAGADADQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIADgNABg");
	this.shape_238.setTransform(947.5,911.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_239.setTransform(941.3,910.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_240.setTransform(937.4,910.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgCgGgBQgHABgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAGIABANIAAAxg");
	this.shape_241.setTransform(930.6,911.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_242.setTransform(921.7,911.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_243.setTransform(915.1,910.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_244.setTransform(908.3,911.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgHAGgDQAGgDAFAAQALAAAIAFQAIAGAFAKQADAKAAAMQAAANgEAIQgFAKgIAGQgJAFgJAAQgFAAgGgDQgGgDgDgFIAAApgAgPglQgHAIABAQQgBAOAHAHQAGAJAJgBQAIABAHgJQAGgIAAgOQAAgQgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_245.setTransform(899.7,913.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_246.setTransform(886.1,911.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_247.setTransform(877.2,910.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgGA5IAAhjIgmAAIAAgOIBZAAIAAAOIgmAAIAABjg");
	this.shape_248.setTransform(867.9,910.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgNIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_249.setTransform(221.5,1121.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_250.setTransform(214.7,1121.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_251.setTransform(205.6,1124.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_252.setTransform(199.6,1121.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_253.setTransform(196,1121.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAHAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgGgIgKAAQgHAAgHAHg");
	this.shape_254.setTransform(185.1,1121.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_255.setTransform(176.5,1122.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgEADQgFAEgDAIIgNgCQACgIAEgFQAEgGAJgDQAIgDAIAAQALAAAHADQAGACADAEQAEAEAAAFIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMADQgEABgCADQgBADgBADQAAAGAFAEQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_256.setTransform(167.6,1122.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_257.setTransform(154.2,1122.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_258.setTransform(145.3,1122.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_259.setTransform(136.2,1124.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgdA4IgCgNIAIABQAFAAADgBIAEgFIAFgKIABgEIgfhRIAOAAIASAwIAEASIAGgRIARgxIAOAAIgfBTQgFANgBAFQgDAHgFAEQgGADgGAAIgJgCg");
	this.shape_260.setTransform(128.1,1124.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AAVApIgRgaIgEgHIgUAhIgSAAIAfgpIgcgoIARAAIAOAUIAEAJIAFgJIAPgUIAQAAIgdAnIAgAqg");
	this.shape_261.setTransform(120,1122.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_262.setTransform(111.5,1122.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_263.setTransform(100.4,1127.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgNIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_264.setTransform(96.1,1121.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgFADQgEAEgDAIIgNgCQACgIAEgFQAEgGAJgDQAIgDAIAAQALAAAHADQAGACADAEQAEAEAAAFIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMADQgEABgCADQgBADgBADQAAAGAFAEQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_265.setTransform(89.3,1122.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_266.setTransform(80.4,1122.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_267.setTransform(71.5,1121.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgEQgBgDgEgDQgDgCgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgEgIgBQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgFAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_268.setTransform(317.5,1104.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALAMAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_269.setTransform(306.4,1104.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQACgDAFAAQAIAAAHAEIgFAOQgFgDgFgBQgFABgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_270.setTransform(299.9,1104.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_271.setTransform(294.7,1102.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_272.setTransform(285.6,1103.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgGA5IAAhRIAMAAIAABRgAgGgoIAAgQIAMAAIAAAQg");
	this.shape_273.setTransform(281.5,1102.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_274.setTransform(273.1,1103.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgZAgQgJgLgBgVQAAgMAFgKQAEgKAJgFQAKgFAIAAQAOAAAIAHQAJAHACANIgNABQgDgIgEgEQgGgEgHgBQgIAAgGAIQgIAIABAPQAAAQAGAHQAGAJAJgBQAIAAAGgFQAFgFACgKIANABQgCAOgJAJQgJAIgOAAQgPAAgLgLg");
	this.shape_275.setTransform(267.1,1104.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLgBQgIABgGAGg");
	this.shape_276.setTransform(258.3,1104.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_277.setTransform(251.8,1103.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALAMAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_278.setTransform(245,1104.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAFgIADgDQADgDAFAAQAGAAAIAEIgFAOQgFgDgFgBQgFABgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_279.setTransform(238.5,1104.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgHAGgDQAGgDAFAAQALAAAIAFQAIAGAFAKQADAKAAAMQAAAMgEAJQgFAKgIAGQgJAFgJAAQgFAAgGgDQgGgDgDgFIAAApgAgPgmQgHAJABAQQgBAOAHAHQAGAJAJgBQAIABAHgJQAGgHAAgPQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_280.setTransform(231,1106);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALAMAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_281.setTransform(217.4,1104.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_282.setTransform(210.8,1103.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQABgMAEgIQAEgKAIgGQAJgFAJAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgNAAIAAgLQgIANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_283.setTransform(199.3,1103);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLgBQgIABgGAGg");
	this.shape_284.setTransform(190.7,1104.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_285.setTransform(181.5,1106);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgDIAAgEQAAgIgEgDQgGgFgJAAQgJAAgEAEQgFADgDAJIgNgCQABgJAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADADABAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgJAAQgNAAgIgHgAgCAEIgMAEQgEABgCADQgBADAAAEQgBAFAEAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_286.setTransform(172.9,1104.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAfggIASAAIgeAdIAiA0g");
	this.shape_287.setTransform(165,1102.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQAAgMAFgKQAEgKAJgFQAKgFAIAAQAOAAAIAHQAJAHACANIgOABQgCgIgEgEQgGgEgHgBQgIAAgHAIQgGAIAAAPQgBAQAHAHQAGAJAJgBQAIAAAGgFQAFgFACgKIANABQgBAOgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_288.setTransform(156.7,1104.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgDIAAgEQAAgIgEgDQgFgFgKAAQgJAAgFAEQgEADgDAJIgNgCQACgJAEgGQAEgFAJgDQAIgDAIAAQALAAAGACQAHADADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAGgIADQgFADgIAAQgOAAgIgHgAgCAEIgMAEQgEABgCADQgCADAAAEQAAAFAFAEQAEAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_289.setTransform(148,1104.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgHAFgDQAGgDAHAAQAKAAAIAFQAJAGADAKQAFAKAAAMQgBAMgEAJQgFAKgIAGQgJAFgJAAQgGAAgFgDQgGgDgEgFIAAApgAgPgmQgGAJgBAQQABAOAGAHQAHAJAIgBQAIABAGgJQAHgHAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_290.setTransform(139.3,1106);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAFAFQAFAFAJgBQAJAAAEgDQAGgFAAgFQgBgEgEgDQgCgCgMgDQgNgEgHgCQgFgCgEgFQgDgFAAgGQABgFACgFQADgFADgDQAEgCAFgCQAHgCAGAAQAHAAAIADQAHADAEAFQADAEABAIIgNADQgBgHgFgDQgEgFgHAAQgJABgEADQgEADAAAEIACAGIAFADIALAEQAPADAFADQAGABADAEQAEAGAAAHQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_291.setTransform(126.2,1104.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_292.setTransform(120.4,1102.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLgBQgIABgGAGg");
	this.shape_293.setTransform(109.7,1104.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLgBQgIABgGAGg");
	this.shape_294.setTransform(100.8,1104.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_295.setTransform(94.5,1102.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_296.setTransform(90.1,1102.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALAMAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_297.setTransform(83,1104.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgaAzQgLgHgGgPQgGgOAAgPQAAgRAHgOQAGgNANgHQANgHANAAQARAAAMAJQAMAJAEAQIgOADQgFgMgHgGQgIgGgMAAQgKAAgJAHQgJAGgEALQgDAKgBALQABANAEALQAEALAJAFQAJAGAIAAQANAAAJgIQAJgHADgOIAPADQgEATgNAKQgNAKgRAAQgQAAgNgIg");
	this.shape_298.setTransform(72.9,1102.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgHAHIAAgOIAPAAIAAAOg");
	this.shape_299.setTransform(945.4,1682.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAGAFAHAAQAKAAAFgFQAEgEAAgFQAAgFgEgDQgDgBgLgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAJIgNABQgBgGgFgEQgEgEgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKADQAQAEAFAEQAGAAADAFQAEAEAAAHQAAAHgEAHQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_300.setTransform(939.1,1679.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgBA2QgEgDgCgDQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_301.setTransform(933,1677.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgCgGAAQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAEABAHIABANIAAAxg");
	this.shape_302.setTransform(926.2,1679);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgFADQgEAEgDAIIgNgCQACgIAEgGQAEgFAJgDQAIgDAIAAQALAAAHACQAGADADAEQAEADAAAGIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgBADgBADQAAAGAFAEQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_303.setTransform(917.3,1679.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_304.setTransform(910.8,1679);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_305.setTransform(903,1679.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgEADQgGAEgCAIIgOgCQADgIAEgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADADABAGIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgCADABADQAAAGADAEQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_306.setTransform(894.1,1679.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgBA2QgEgDgCgDQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_307.setTransform(887.6,1677.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAGAFQAEAFAIAAQAKAAAFgFQAEgEAAgFQABgFgFgDQgCgBgMgDQgOgEgFgCQgHgCgCgFQgDgFAAgGQAAgFACgFQADgFAEgDQADgDAGgBQAGgCAGAAQAIAAAHADQAHADAEAEQADAFACAJIgOABQgBgGgFgEQgEgEgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKADQAPAEAHAEQAFAAAEAFQADAEAAAHQAAAHgEAHQgEAGgIAEQgIADgKAAQgOAAgIgHg");
	this.shape_308.setTransform(881.2,1679.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_309.setTransform(872.8,1679.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_310.setTransform(866.3,1679);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_311.setTransform(1055.2,1660.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_312.setTransform(1048.6,1659.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgNgIQgHAIAAAOQAAAQAHAIQAHAIAGAAQAJAAAHgHQAGgIABgPQgBgQgGgHQgGgIgKAAQgIAAgFAHg");
	this.shape_313.setTransform(1037.1,1659.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_314.setTransform(1028.5,1660.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_315.setTransform(1022,1660.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_316.setTransform(1014.2,1660.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgFApIgghRIAQAAIARAvIAEARIAEgPIATgxIAPAAIggBRg");
	this.shape_317.setTransform(1005.8,1660.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_318.setTransform(1000,1659.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_319.setTransform(996.4,1659.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_320.setTransform(990.2,1660.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADAEAFIAAgpIAOAAIAABxIgOAAIAAgLQgIANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_321.setTransform(981.1,1659.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgNgIQgHAIAAAOQAAAQAHAIQAHAIAGAAQAJAAAHgHQAGgIABgPQgBgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_322.setTransform(967.7,1659.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHABgHAFQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAFIABAOIAAAxg");
	this.shape_323.setTransform(959.1,1660.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgdAkQgIgGAAgLQABgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgDIAAgDQAAgJgEgDQgGgFgJAAQgJAAgEADQgGAEgBAJIgPgCQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQADAEACAGIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMADQgEACgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIADgNABg");
	this.shape_324.setTransform(950.2,1660.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAIAFAFQAGAEAHAAQAKAAAFgDQAEgFAAgFQAAgFgEgCQgDgDgLgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNADQgBgHgFgEQgEgEgHAAQgJABgEADQgEADAAAEIABAGIAGADIAKAEQAQADAFADQAGABADAEQAEAGAAAGQAAAIgEAGQgFAGgHADQgIAEgKAAQgOAAgIgHg");
	this.shape_325.setTransform(937.3,1660.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAgggIASAAIgfAdIAiA0g");
	this.shape_326.setTransform(929.8,1659.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgYAgQgLgLAAgVQABgMAEgKQAEgKAJgFQAJgFAJAAQANAAAJAHQAJAHACANIgNACQgDgJgEgEQgFgEgHgBQgJAAgGAIQgIAIAAAPQABAQAGAHQAHAIAIAAQAIAAAFgFQAGgFACgKIANABQgCAOgJAJQgKAIgNAAQgPAAgKgLg");
	this.shape_327.setTransform(921.6,1660.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgGIgBgMIAAgyIAOAAIAAAsIABAPQABAGAFADQAEADAGAAQAEAAAGgDQAGgDACgGQACgGAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_328.setTransform(912.8,1660.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_329.setTransform(906.4,1660.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_330.setTransform(900.9,1659.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_331.setTransform(889.7,1660.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_332.setTransform(883.1,1659.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHABgHAFQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAFIABAOIAAAxg");
	this.shape_333.setTransform(876.3,1660.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_334.setTransform(867.4,1660.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgEgKAAgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgIANgOAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAHAAQAKAAAGgHQAHgIgBgPQABgQgHgHQgGgIgKAAQgHAAgHAHg");
	this.shape_335.setTransform(1108.3,1640.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_336.setTransform(1099.6,1642.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAHAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_337.setTransform(1090.5,1640.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQgBgGADgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgEQAAgJgEgEQgFgEgKAAQgJAAgFADQgEAEgDAIIgOgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEADABAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgCADAAADQABAHAEADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_338.setTransform(1081.8,1642.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAIAAAPQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_339.setTransform(1072.9,1642.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_340.setTransform(1066.7,1640.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_341.setTransform(1058.2,1646.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAIAFAFQAGAFAHAAQAKAAAFgFQAEgEAAgFQAAgFgEgDQgDgBgLgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIABAEIAGAEIAKADQAQAFAFACQAGABADAFQAEAEAAAHQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_342.setTransform(1052,1642.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_343.setTransform(1043.6,1642.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgBA2QgEgCgCgEQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_344.setTransform(1037,1640.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgBA2QgEgCgCgEQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_345.setTransform(1032.6,1640.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_346.setTransform(1025.8,1642.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_347.setTransform(1019.5,1640.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgEQAAgJgEgEQgFgEgKAAQgJAAgFADQgEAEgDAIIgNgCQACgIAEgFQAEgGAIgDQAJgDAIAAQALAAAHADQAGACADAEQADADACAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgCADAAADQAAAHAFADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_348.setTransform(1013.3,1642.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgDQAGgEAHAAQAKAAAIAFQAJAGADAKQAFAKAAAMQgBAMgEAJQgFAKgIAFQgJAGgJAAQgGAAgFgDQgGgDgEgEIAAAogAgPgmQgGAJgBAQQABAOAGAIQAHAHAIABQAIgBAGgHQAHgJAAgOQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_349.setTransform(1004.7,1643.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_350.setTransform(991.1,1642.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAIAAAPQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_351.setTransform(982.2,1642.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgHAAgHAHg");
	this.shape_352.setTransform(968.6,1640.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_353.setTransform(959.9,1642.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgZAgQgKgMAAgUQAAgMAEgJQAFgLAKgFQAJgFAIAAQANAAAJAHQAJAHACAMIgOADQgCgJgEgEQgGgFgHABQgIAAgHAHQgGAIAAAPQgBAQAHAIQAGAHAJABQAIgBAGgFQAFgFABgLIAOADQgBANgKAJQgKAIgNAAQgPAAgLgLg");
	this.shape_354.setTransform(951.8,1642.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgEQAAgJgEgEQgFgEgKAAQgJAAgFADQgFAEgCAIIgNgCQACgIAEgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQAEADAAAGIABAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgCADAAADQAAAHAFADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_355.setTransform(943,1642.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_356.setTransform(936.8,1640.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAGgDQAGgEAFAAQALAAAIAFQAIAGAFAKQADAKAAAMQABAMgFAJQgFAKgIAFQgJAGgJAAQgFAAgGgDQgGgDgDgEIAAAogAgPgmQgHAJABAQQgBAOAHAIQAGAHAJABQAIgBAHgHQAGgJAAgOQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_357.setTransform(930.8,1643.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_358.setTransform(919.4,1646.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAFAFQAFAFAJAAQAJAAAEgFQAGgEAAgFQgBgFgEgDQgCgBgMgDQgNgEgHgCQgFgCgEgFQgDgFAAgGQABgFACgFQADgFADgDQAEgDAFgBQAGgCAHAAQAHAAAIADQAHADAEAEQADAFABAIIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIACAEIAFAEIALADQAPAFAFACQAGABADAFQAEAEAAAHQAAAIgEAGQgFAGgHAEQgIADgJAAQgPAAgIgHg");
	this.shape_359.setTransform(913.2,1642.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_360.setTransform(904.8,1642.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AgFApIgghRIAQAAIARAvIAEASIAEgRIATgwIAPAAIggBRg");
	this.shape_361.setTransform(896.4,1642.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_362.setTransform(890.5,1640.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_363.setTransform(884.3,1642.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_364.setTransform(875.4,1640.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAFAFQAGAFAIAAQAJAAAEgFQAGgEAAgFQgBgFgEgDQgCgBgMgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQABgFACgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAHAAAIADQAIADADAEQADAFABAIIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIACAEIAFAEIALADQAPAFAFACQAGABADAFQAEAEAAAHQAAAIgEAGQgFAGgHAEQgIADgJAAQgPAAgIgHg");
	this.shape_365.setTransform(867,1642.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_366.setTransform(1095.2,1623.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAJAFAEQAFAFAIgBQAKAAAFgDQAEgEAAgGQAAgFgEgDQgDgCgLgCQgNgEgGgCQgHgCgCgFQgDgFgBgGQAAgGADgEQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNADQgBgHgFgDQgEgFgHAAQgJAAgEAEQgEADAAAEIABAGIAGADIAKAEQAPADAGAEQAGAAADAEQAEAGAAAHQAAAGgEAHQgEAGgIADQgIAEgKAAQgOAAgIgHg");
	this.shape_367.setTransform(1086.8,1623.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgMIAAgyIAOAAIAAAsIABAPQABAGAFADQAEADAGAAQAEAAAGgDQAGgEACgFQACgGAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_368.setTransform(1078.3,1624);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_369.setTransform(1069.4,1623.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_370.setTransform(1060.5,1622.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_371.setTransform(1051.6,1623.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_372.setTransform(1045.2,1623.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgFAEQgEADgCAJIgPgCQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQAEADABAGIAAANIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_373.setTransform(1037.4,1623.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AAQApIgOgvIgCgPIgPA+IgPAAIgahRIAPAAIANAuIAFARIAFgQIAMgvIANAAIANAuIADAQIAFgQIAOguIAOAAIgaBRg");
	this.shape_374.setTransform(1027.2,1623.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AAqAqIAAgyQAAgJgCgEQgBgDgEgDQgDgCgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgGAGgDQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_375.setTransform(1010.3,1623.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_376.setTransform(999.1,1623.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_377.setTransform(992.7,1623.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_378.setTransform(987.5,1622.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAGAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_379.setTransform(975.7,1622.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_380.setTransform(967.1,1623.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AAQA5IgZgrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAgggIASAAIgfAdIAiA0g");
	this.shape_381.setTransform(959.2,1622.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AgYAgQgKgLAAgVQAAgMAEgKQAEgKAKgFQAIgFAJAAQANAAAJAHQAJAHACANIgNABQgDgIgFgEQgFgFgGAAQgJAAgGAIQgIAIAAAPQABAQAGAHQAGAIAJAAQAIABAFgGQAGgFABgLIAPACQgDAPgJAIQgKAIgNAAQgPAAgKgLg");
	this.shape_382.setTransform(950.9,1623.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_383.setTransform(944.9,1622.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgEQAHgDAGAAQAKAAAIAGQAJAFADAKQAEAKABAMQAAAMgFAJQgFAKgIAGQgJAFgJAAQgGAAgFgDQgGgDgEgFIAAApgAgPgmQgGAJgBAQQABAOAGAHQAHAIAIAAQAIAAAGgIQAHgIAAgOQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_384.setTransform(938.9,1625.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_385.setTransform(925.3,1623.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_386.setTransform(918.8,1623.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgdAkQgIgGABgLQAAgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgGgFgJAAQgJAAgEAEQgGADgBAJIgPgCQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQADADACAGIAAANIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_387.setTransform(911,1623.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAJAFAEQAGAFAIgBQAJAAAFgDQAEgEAAgGQAAgFgEgDQgDgCgLgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgGADgEQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNADQgBgHgFgDQgEgFgHAAQgJAAgEAEQgEADAAAEIABAGIAGADIALAEQAPADAFAEQAGAAADAEQAEAGAAAHQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_388.setTransform(898.1,1623.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AAqAqIAAgyQAAgJgCgEQgBgDgEgDQgDgCgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgGAGgDQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_389.setTransform(887.5,1623.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_390.setTransform(876.3,1623.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_391.setTransform(869.8,1622.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_392.setTransform(865.3,1622.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgHAHIAAgOIAPAAIAAAOg");
	this.shape_393.setTransform(224.1,1517.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_394.setTransform(217.4,1513.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAGAFQAEAFAIAAQAKgBAFgEQAEgEAAgFQABgFgFgDQgCgCgMgCQgOgEgFgCQgHgCgCgFQgDgFAAgGQAAgFACgFQADgFAEgDQADgDAGgBQAGgCAGAAQAIAAAHADQAHADAEAEQADAFACAJIgOABQgBgGgFgEQgEgEgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKADQAPAEAHAEQAFAAAEAFQADAEAAAHQAAAHgEAHQgEAGgIAEQgIADgKAAQgOAAgIgHg");
	this.shape_395.setTransform(208.9,1513.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_396.setTransform(200.4,1514);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_397.setTransform(187.1,1513.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_398.setTransform(178.2,1512.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_399.setTransform(169.3,1513.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_400.setTransform(162.9,1513.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgFgEgKAAQgJAAgFADQgFAEgCAIIgNgCQACgIAEgGQAEgFAJgDQAHgDAJAAQALAAAHADQAGACADAEQAEAEAAAFIABAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgBADgBADQAAAHAFADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_401.setTransform(155.1,1513.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AAQApIgNgwIgDgOIgPA+IgPAAIgahRIAPAAIANAuIAFASIAEgRIAOgvIAMAAIANAuIADAQIAGgQIANguIAPAAIgaBRg");
	this.shape_402.setTransform(144.9,1513.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_403.setTransform(130.2,1513.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_404.setTransform(121.3,1512.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgBA2QgEgDgCgDQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_405.setTransform(114.7,1512.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgCgGAAQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAEABAGIABAOIAAAxg");
	this.shape_406.setTransform(103.5,1513.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_407.setTransform(97.3,1512.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_408.setTransform(91,1512.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgBA2QgEgDgCgDQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_409.setTransform(84.5,1512.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgFA5IAAhRIAMAAIAABRgAgFgoIAAgQIAMAAIAAAQg");
	this.shape_410.setTransform(80.4,1512.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AAQApIgOgwIgCgOIgQA+IgOAAIgZhRIAOAAIANAuIAFASIAFgRIAMgvIANAAIAMAuIAFAQIAEgQIAPguIANAAIgaBRg");
	this.shape_411.setTransform(72.8,1513.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAIAFAFQAGAFAIgBQAJAAAFgDQAEgFAAgFQAAgEgEgDQgDgCgLgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNADQgBgHgFgEQgEgEgHAAQgJABgEADQgEADAAAEIABAGIAGADIALAEQAPADAFADQAGABADAEQAEAGAAAGQAAAHgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_412.setTransform(305,1495.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_413.setTransform(296.6,1495.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgFApIgghRIAPAAIASAwIAEAQIAEgPIATgxIAPAAIggBRg");
	this.shape_414.setTransform(288.2,1495.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_415.setTransform(282.3,1493.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_416.setTransform(276.1,1495.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_417.setTransform(267.2,1493.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAIAFAFQAFAFAIgBQAKAAAFgDQAEgFAAgFQABgEgFgDQgCgCgMgDQgNgEgGgCQgHgCgCgFQgDgFgBgGQAAgFADgFQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNADQgBgHgFgEQgEgEgHAAQgJABgEADQgEADAAAEIABAGIAGADIAKAEQAPADAGADQAGABADAEQAEAGAAAGQAAAHgEAHQgEAGgIADQgIAEgKAAQgOAAgIgHg");
	this.shape_418.setTransform(258.8,1495.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_419.setTransform(248.3,1495.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AgGA5IAAhRIAMAAIAABRgAgGgoIAAgQIAMAAIAAAQg");
	this.shape_420.setTransform(243.2,1493.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_421.setTransform(237,1495.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_422.setTransform(228.1,1493.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_423.setTransform(221.5,1494.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgCgGgBQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAFIABAOIAAAxg");
	this.shape_424.setTransform(210.3,1495.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgXQgHAIAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_425.setTransform(201.4,1495.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAGAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_426.setTransform(187.8,1494);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_427.setTransform(179.1,1495.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AgYAgQgLgLAAgVQABgLAEgLQAEgKAJgFQAJgFAJAAQANAAAJAHQAJAHACANIgNABQgDgIgFgEQgEgEgHgBQgJAAgGAIQgIAIABAPQAAAQAGAHQAHAJAIgBQAIABAFgGQAGgFACgKIANABQgCAOgJAJQgKAIgNAAQgPAAgKgLg");
	this.shape_428.setTransform(171,1495.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AgdAkQgIgGAAgLQABgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgDIAAgEQAAgIgEgDQgGgFgJAAQgJAAgEADQgGAEgBAJIgPgCQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQADAEACAGIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_429.setTransform(162.2,1495.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_430.setTransform(156,1493.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgHAFgDQAHgDAGAAQAKAAAIAFQAJAGADAKQAFAKAAAMQAAANgFAIQgFAKgIAGQgJAFgJAAQgGAAgFgDQgGgDgEgFIAAApgAgPgmQgGAJgBAQQABAOAGAHQAHAJAIgBQAIABAGgJQAHgHAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_431.setTransform(150,1497);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAHAAQAJAAAGgHQAHgIgBgPQABgQgHgHQgGgIgKAAQgHAAgHAHg");
	this.shape_432.setTransform(136.2,1494);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgCgGgBQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAFIABAOIAAAxg");
	this.shape_433.setTransform(127.5,1495.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgDIAAgEQAAgIgEgDQgFgFgKAAQgJAAgFADQgFAEgCAJIgNgCQACgJAEgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQAEAEAAAGIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgIAAQgOAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBAEQAAAFAFAEQAEAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_434.setTransform(118.6,1495.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAGAFQAEAFAJgBQAJAAAEgDQAFgFABgFQAAgEgFgDQgDgCgLgDQgNgEgHgCQgGgCgDgFQgCgFAAgGQgBgFADgFQADgFAEgDQADgCAGgCQAFgCAHAAQAHAAAIADQAHADAEAEQADAFACAIIgOADQgBgHgEgEQgFgEgHAAQgJABgEADQgEADAAAEIACAGIAFADIALAEQAOADAHADQAFABAEAEQADAGAAAGQAAAHgEAHQgEAGgIADQgIAEgJAAQgPAAgIgHg");
	this.shape_435.setTransform(105.7,1495.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAfggIASAAIgeAdIAiA0g");
	this.shape_436.setTransform(98.3,1493.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AgZAgQgKgLABgVQgBgLAEgLQAFgKAJgFQAKgFAIAAQANAAAJAHQAJAHACANIgOABQgCgIgEgEQgGgEgHgBQgIAAgHAIQgGAIAAAPQgBAQAHAHQAGAJAJgBQAIABAGgGQAFgFABgKIAOABQgBAOgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_437.setTransform(90,1495.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgMIAAgyIAOAAIAAAsIABAPQABAFAFAEQAEADAGAAQAEAAAGgDQAGgEACgFQACgGAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_438.setTransform(81.2,1495.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQADgDAEAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_439.setTransform(74.8,1495.4);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgDg");
	this.shape_440.setTransform(69.4,1494.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIABQgGAAgFACQgFAEgCAFQgDAGAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_441.setTransform(319.3,1477);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_442.setTransform(308.2,1477.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQACgDAFAAQAIAAAHAFIgFAMQgFgCgFgBQgFABgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_443.setTransform(301.7,1477);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_444.setTransform(296.5,1475.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgEgKAAgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgIANgOAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAIAAQAJAAAGgHQAHgIgBgPQABgQgHgHQgGgIgKAAQgHAAgHAHg");
	this.shape_445.setTransform(284.8,1475.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_446.setTransform(276.1,1477.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAGAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_447.setTransform(267,1475.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AgdAkQgIgHABgKQgBgGADgFQADgFAFgDQAEgBAFgBIANgDQAPgCAIgCIAAgFQAAgIgEgEQgFgEgKAAQgJAAgFADQgEAEgCAIIgPgCQADgIAEgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEADABAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgHgHgAgCAFIgMACQgEACgCADQgCADAAADQABAHAEADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_448.setTransform(258.3,1477.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_449.setTransform(249.4,1477.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_450.setTransform(243.2,1475.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAEABAHIABANIAAAxg");
	this.shape_451.setTransform(237,1477);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_452.setTransform(228,1477.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_453.setTransform(214.7,1477.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFgBQgFABgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_454.setTransform(208.3,1477);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgEADQgGAEgBAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQADADACAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHADADQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_455.setTransform(200.5,1477.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAGAEAHABQAKAAAFgFQAEgEAAgFQAAgFgEgDQgDgBgLgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAFQAEAEAAAIIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIABAEIAGAEIAKADQAQAEAFAEQAGAAADAFQAEAFAAAGQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_456.setTransform(187.6,1477.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_457.setTransform(179.1,1477.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAGAFQAEAEAIABQAKAAAFgFQAEgEAAgFQABgFgFgDQgCgBgMgDQgOgEgFgCQgHgCgCgFQgDgFAAgGQAAgFACgFQADgFAEgDQADgDAGgBQAGgCAGAAQAIAAAHADQAHADAEAFQADAEACAIIgOACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIABAEIAGAEIAKADQAPAEAHAEQAFAAAEAFQADAFAAAGQAAAIgEAGQgEAGgIAEQgIADgKAAQgOAAgIgHg");
	this.shape_458.setTransform(170.7,1477.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgEADQgGAEgBAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQADADACAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHADADQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_459.setTransform(162.2,1477.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AgaAzQgLgHgGgPQgGgOAAgPQAAgRAHgOQAGgNANgHQANgHANAAQARAAAMAJQAMAJAEAQIgOADQgFgMgHgGQgIgGgMAAQgKAAgJAHQgJAGgEALQgDAKgBALQABANAEALQAEALAJAFQAJAGAIAAQANAAAJgIQAJgHADgOIAPADQgEATgNAKQgNAKgRAAQgQAAgNgIg");
	this.shape_460.setTransform(152.1,1475.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("AgHAHIAAgNIAOAAIAAANg");
	this.shape_461.setTransform(139.6,1480.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AgBA2QgEgDgCgDQgCgEAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_462.setTransform(135.2,1475.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAEABAHIABANIAAAxg");
	this.shape_463.setTransform(128.4,1477);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_464.setTransform(119.5,1477.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIABQgGAAgFACQgFAEgCAFQgDAGAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_465.setTransform(108.4,1477);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_466.setTransform(97.2,1477.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#333333").s().p("AgZAgQgKgMABgUQAAgMADgJQAFgLAJgFQAKgFAIAAQANAAAJAHQAJAHACAMIgOACQgCgIgEgEQgGgFgHABQgIAAgHAHQgGAIAAAPQgBAQAHAIQAGAHAJABQAIgBAGgFQAFgFABgLIAOADQgBAOgKAIQgJAIgOAAQgPAAgLgLg");
	this.shape_467.setTransform(89.1,1477.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAHg");
	this.shape_468.setTransform(80.4,1477.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKgBgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAGAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_469.setTransform(71.2,1475.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#333333").s().p("AgdA4IgCgNIAIABQAFAAADgBIAEgFIAFgKIABgEIgghRIAPAAIASAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgDAHgFAEQgGADgGAAIgJgCg");
	this.shape_470.setTransform(252.6,1460.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_471.setTransform(246.4,1457.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#333333").s().p("AgGA5IAAhRIAMAAIAABRgAgGgoIAAgQIAMAAIAAAQg");
	this.shape_472.setTransform(242.3,1457.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_473.setTransform(238.7,1457.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_474.setTransform(235.2,1457.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#333333").s().p("AgWAtIAAALIgMAAIAAhxIANAAIAAApQAKgLAMAAQAHAAAHADQAGADAFAGQAEAFADAIQADAGAAAJQAAAVgLAMQgLAMgOAAQgNAAgJgNgAgPgHQgGAHgBAOQAAAPAFAGQAGALALAAQAHAAAHgIQAHgIAAgQQAAgOgHgIQgGgIgIAAQgIAAgHAJg");
	this.shape_475.setTransform(229.2,1457.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAFgDQAEgBAFgCIANgCQAPgCAIgDIAAgEQAAgIgEgDQgFgFgKAAQgJAAgFAEQgEADgCAIIgPgBQADgJAEgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQAEAEABAFIAAANIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAGgIADQgFADgIAAQgOAAgHgHgAgCAEIgMAEQgEABgCADQgCADAAAEQABAFAEAEQAEAEAIAAQAGAAAHgEQAGgDADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_476.setTransform(220.1,1458.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_477.setTransform(211.2,1458.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#333333").s().p("AgYAgQgKgLAAgVQAAgMAEgKQAEgKAKgFQAIgFAJAAQANAAAJAHQAJAHACANIgNABQgDgIgFgEQgFgFgGAAQgJABgGAHQgIAIAAAPQABAQAGAHQAGAIAJAAQAIABAFgGQAGgFABgLIAPACQgDAPgJAIQgKAIgNAAQgPAAgKgLg");
	this.shape_478.setTransform(203,1458.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#333333").s().p("AgdAkQgIgGAAgLQABgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgDIAAgEQAAgIgEgDQgFgFgKAAQgJAAgEAEQgGADgBAIIgPgBQACgJAFgGQAEgFAIgDQAIgDAJAAQALAAAGACQAHADADAEQADAEACAFIAAANIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAGgIADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgCADABAEQAAAFADAEQAFAEAIAAQAGAAAGgEQAHgDADgGQACgFAAgKIAAgEQgHACgOACg");
	this.shape_479.setTransform(194.3,1458.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFAAQgFAAgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_480.setTransform(187.8,1458.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_481.setTransform(182.4,1457.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAFgDQAEgBAFgCIANgCQAPgCAIgDIAAgEQAAgIgEgDQgGgFgJAAQgJAAgFAEQgEADgCAIIgPgBQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQAEAEABAFIAAANIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgEQAHgDADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_482.setTransform(171.1,1458.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_483.setTransform(160.4,1457);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_484.setTransform(153.3,1458.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_485.setTransform(140,1458.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_486.setTransform(131.1,1458.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_487.setTransform(124.9,1457.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#333333").s().p("AgBA1QgEgBgCgFQgCgDAAgNIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_488.setTransform(121,1457.3);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_489.setTransform(114.2,1458.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_490.setTransform(107.9,1457.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgEQAGgDAHAAQAKAAAIAGQAJAFADAKQAFAKAAAMQgBAMgEAJQgFAKgIAGQgJAFgJAAQgGAAgFgDQgGgDgEgFIAAApgAgPgmQgGAJgBAQQABAOAGAHQAHAIAIAAQAIAAAGgIQAHgIAAgOQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_491.setTransform(102,1460.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgEQgBgDgEgCQgDgDgFAAQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIAAQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgGAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_492.setTransform(90.6,1458.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgMQALgJAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_493.setTransform(79.5,1458.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#333333").s().p("AgZAgQgJgLgBgVQAAgMAFgKQAEgKAJgFQAKgFAIAAQAOAAAIAHQAJAHACANIgNABQgDgIgEgEQgGgFgHAAQgIABgGAHQgIAIABAPQAAAQAGAHQAGAIAJAAQAIABAGgGQAFgFACgLIANACQgBAPgKAIQgJAIgOAAQgPAAgLgLg");
	this.shape_494.setTransform(71.3,1458.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHAAAGgFQAFgEAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgIgLAAQgIgBgGAHg");
	this.shape_495.setTransform(279.7,1440.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_496.setTransform(270.8,1438.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_497.setTransform(264.2,1438.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAIAIAHAAQAJAAAGgHQAHgIgBgPQABgQgHgHQgGgIgKAAQgHAAgHAHg");
	this.shape_498.setTransform(252.7,1438.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgDgGABQgHAAgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_499.setTransform(244.1,1440.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgFADQgFAEgCAIIgNgCQACgIAEgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQAEADAAAHIABAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgBADgBADQAAAHAFADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_500.setTransform(235.2,1440.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#333333").s().p("AgdA4IgCgNIAJABQAEAAADgBIAEgFIAFgKIABgEIgghRIAQAAIARAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgDAHgGAEQgFADgGAAIgJgCg");
	this.shape_501.setTransform(222.4,1442);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_502.setTransform(216.2,1438.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_503.setTransform(212.1,1438.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_504.setTransform(208.3,1440.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_505.setTransform(200.2,1441.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHAAAGgFQAFgEAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgIgLAAQgIgBgGAHg");
	this.shape_506.setTransform(191.6,1440.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_507.setTransform(185,1438.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgDgGABQgHAAgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_508.setTransform(178.2,1440.2);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_509.setTransform(172,1438.7);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#333333").s().p("AAVApIgRgaIgEgHIgVAhIgRAAIAfgpIgcgoIASAAIAMAUIAFAJIAFgJIAPgUIAQAAIgcAnIAeAqg");
	this.shape_510.setTransform(161.8,1440.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAQAHAHQAHAIAJABQAKgBAHgIQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_511.setTransform(153.3,1440.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#333333").s().p("AgVAtIAAALIgOAAIAAhxIAPAAIAAApQAIgLAMAAQAIAAAHADQAGADAFAGQAEAFADAIQADAGgBAJQAAAVgKAMQgLAMgOAAQgNAAgIgNgAgPgHQgHAHABAOQAAAPADAGQAHALALAAQAHAAAIgIQAGgIAAgQQAAgOgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_512.setTransform(144.7,1438.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_513.setTransform(133.3,1444.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#333333").s().p("AgdA4IgCgNIAIABQAFAAADgBIAEgFIAFgKIABgEIgfhRIAOAAIASAwIAEASIAGgRIARgxIAOAAIgfBTQgFANgBAFQgDAHgFAEQgGADgGAAIgJgCg");
	this.shape_514.setTransform(127.2,1442);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQAAgMAFgJQAEgLAJgFQAKgFAIAAQAOAAAIAHQAJAHACAMIgOADQgCgJgEgEQgGgFgHABQgIgBgHAJQgGAHAAAPQgBAQAHAHQAGAIAJABQAIgBAGgFQAFgFACgKIANACQgBANgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_515.setTransform(119.4,1440.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgFADQgEAEgDAIIgNgCQACgIAEgFQAEgGAJgDQAIgDAIAAQALAAAHADQAGACADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgCADAAADQAAAHAFADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIADgNACg");
	this.shape_516.setTransform(110.6,1440.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQACgDAFAAQAIAAAHAFIgFAMQgFgDgFAAQgFAAgCADQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_517.setTransform(104.2,1440.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_518.setTransform(96.3,1440.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQABgMADgJQAFgLAKgFQAJgFAIAAQANAAAJAHQAJAHACAMIgOADQgCgJgEgEQgGgFgHABQgIgBgHAJQgGAHAAAPQgBAQAHAHQAGAIAJABQAIgBAGgFQAFgFABgKIAOACQgBANgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_519.setTransform(88.2,1440.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQAAgMAFgJQAEgLAJgFQAKgFAIAAQAOAAAIAHQAJAHACAMIgOADQgCgJgEgEQgGgFgHABQgIgBgHAJQgGAHAAAPQgBAQAHAHQAGAIAJABQAIgBAGgFQAFgFACgKIANACQgBANgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_520.setTransform(80.2,1440.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgFADQgEAEgDAIIgNgCQACgIAEgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgCADAAADQAAAHAFADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIADgNACg");
	this.shape_521.setTransform(71.5,1440.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAIAAAIIAAAqg");
	this.shape_522.setTransform(297.3,1421.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_523.setTransform(289.5,1421.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQABgMAEgIQAEgKAIgGQAJgFAJAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIABgPQgBgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_524.setTransform(280.3,1420.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAIAAAIIAAAqg");
	this.shape_525.setTransform(274.1,1421.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJAAQAKAAAHgHQAHgJAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_526.setTransform(266.3,1421.9);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAIAAAIIAAAqg");
	this.shape_527.setTransform(255.4,1421.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJAAQAKAAAHgHQAHgJAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_528.setTransform(247.6,1421.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_529.setTransform(241.3,1420.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgIAAgJgGgAgNgIQgHAIAAAOQAAAQAHAIQAGAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgFAHg");
	this.shape_530.setTransform(229.6,1420.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_531.setTransform(220.9,1421.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#333333").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAfggIASAAIgeAdIAiA0g");
	this.shape_532.setTransform(213,1420.3);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#333333").s().p("AgZAgQgKgMAAgUQABgMADgKQAFgKAJgFQAKgFAIAAQANAAAJAHQAJAHACAMIgOACQgCgIgEgEQgFgFgIAAQgIABgHAHQgGAIAAAPQgBAQAHAIQAGAHAJAAQAIABAGgGQAFgFABgLIAOACQgBAPgKAIQgJAIgOAAQgPAAgLgLg");
	this.shape_533.setTransform(204.8,1421.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_534.setTransform(196,1421.9);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_535.setTransform(187.1,1420.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#333333").s().p("AgZAgQgJgMgBgUQAAgMAFgKQAEgKAJgFQAJgFAJAAQAOAAAIAHQAJAHACAMIgNACQgCgIgFgEQgFgFgHAAQgJABgGAHQgIAIABAPQAAAQAGAIQAHAHAIAAQAIABAFgGQAGgFACgLIANACQgCAPgJAIQgJAIgOAAQgPAAgLgLg");
	this.shape_536.setTransform(179,1421.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_537.setTransform(165.8,1421.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQADgDAFAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAIAAAIIAAAqg");
	this.shape_538.setTransform(159.3,1421.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#333333").s().p("AgdAkQgIgGAAgLQABgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgCIAAgFQAAgIgEgDQgFgFgKAAQgJAAgEAEQgGADgBAIIgPgBQACgJAFgGQAEgFAIgDQAIgDAJAAQALAAAGACQAHADADAEQADAEACAFIAAANIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAGgIADQgFADgJAAQgNAAgHgHgAgCAEIgMAEQgEABgCADQgCADABADQAAAGADAEQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgKIAAgEQgHACgOACg");
	this.shape_539.setTransform(151.5,1421.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAJAFAEQAFAFAIgBQAKAAAFgEQAEgDAAgGQABgFgFgDQgCgCgMgCQgNgEgGgCQgHgCgCgFQgDgFgBgGQAAgGADgEQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAGAAAIIgNACQgBgHgFgDQgEgFgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKAEQAPADAGAEQAGAAADAEQAEAFAAAIQAAAGgEAHQgEAGgIADQgIAEgKAAQgOAAgIgHg");
	this.shape_540.setTransform(138.6,1421.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_541.setTransform(132.5,1420.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_542.setTransform(125.7,1421.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_543.setTransform(116.8,1421.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#333333").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFgBQgJAAgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgFgIAAQgGABgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_544.setTransform(105.7,1421.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgHAGgDQAFgDAGAAQALAAAIAGQAJAFAEAKQADAKAAAMQABAMgFAJQgEAKgJAFQgJAGgJAAQgFAAgGgDQgGgDgDgFIAAApgAgPgmQgGAJAAAQQAAAOAGAIQAHAHAIAAQAIAAAGgHQAHgJAAgOQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_545.setTransform(94.8,1423.4);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_546.setTransform(88.4,1420.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_547.setTransform(82.1,1420.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#333333").s().p("AgVA2QgLgEgGgJQgGgKAAgLIAOgBQABAIAEAGQAEAFAHAEQAIADAIAAQAJAAAGgCQAHgDADgEQAEgFAAgFQAAgGgEgEQgDgEgHgDIgSgFQgQgEgGgBQgJgFgEgGQgEgGAAgIQAAgJAFgHQAFgIAKgEQAJgEALAAQALAAAKAEQAKAEAFAIQAFAIABAKIgPACQgBgLgHgGQgHgFgMAAQgMAAgHAFQgGAFAAAHQAAAGAEAEQAFAEAQAEQATAEAHADQAKADAEAHQAFAHAAAJQAAAKgFAIQgFAIgKAEQgKAFgMAAQgOAAgKgFg");
	this.shape_548.setTransform(72.3,1420.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#333333").s().p("AgHAHIAAgNIAOAAIAAANg");
	this.shape_549.setTransform(1067.2,1288.1);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAGAFQAFAEAHABQAKgBAFgDQAEgFAAgFQABgEgFgDQgDgDgLgCQgOgEgGgCQgGgCgDgFQgCgFAAgGQAAgGACgEQADgFAEgDQADgDAGgBQAFgCAHAAQAIAAAHADQAHADAEAFQAEAFABAHIgOACQgBgGgEgEQgFgDgHAAQgJAAgEADQgEADAAAEIABAGIAGADIAKADQAPAFAHACQAFABAEAEQADAFAAAHQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_550.setTransform(1060.9,1284.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#333333").s().p("AgaAgQgLgLAAgVQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHgBAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_551.setTransform(1052.4,1284.7);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAGAFQAEAEAJABQAJgBAEgDQAFgFABgFQAAgEgFgDQgDgDgLgCQgNgEgHgCQgGgCgDgFQgCgFAAgGQgBgGADgEQADgFAEgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAFQADAFACAHIgOACQgBgGgEgEQgFgDgHAAQgJAAgEADQgEADAAAEIACAGIAFADIALADQAOAFAHACQAFABAEAEQADAFAAAHQAAAIgEAGQgEAGgIAEQgIADgJAAQgPAAgIgHg");
	this.shape_552.setTransform(1044,1284.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAGAFADQAEADAGAAQAEAAAGgDQAGgEACgGQACgFAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_553.setTransform(1035.5,1284.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_554.setTransform(1026.6,1284.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_555.setTransform(1017.7,1283.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#333333").s().p("AgaAgQgLgLAAgVQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHgBAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_556.setTransform(1008.8,1284.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQACgDAFAAQAIAAAHAEIgFANQgFgDgFAAQgFAAgCADQgDADgBAFQgDAIAAAIIAAAqg");
	this.shape_557.setTransform(1002.4,1284.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgFAEgDAJIgNgDQABgIAFgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQADADABAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgNAAgIgHgAgCAEIgMADQgEACgCADQgBADAAADQgBAHAEADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgKIAAgEQgHADgOABg");
	this.shape_558.setTransform(994.6,1284.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#333333").s().p("AAQApIgNgvIgDgPIgQA+IgOAAIgZhRIAOAAIANAuIAFARIAEgRIANguIANAAIAMAuIAFAQIAEgQIAOguIAPAAIgaBRg");
	this.shape_559.setTransform(984.4,1284.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#333333").s().p("AgqA5IAAhxIAqAAIAQABQAJACAFAEQAGAEAEAHQADAHAAAIQAAAPgJAIQgKAKgYAAIgbAAIAAAvgAgbgBIAbAAQAPAAAGgGQAGgFAAgKQAAgHgDgFQgEgGgGgBIgOgBIgbAAg");
	this.shape_560.setTransform(969.1,1283.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#333333").s().p("AgaAzQgLgHgGgPQgGgOAAgPQAAgRAHgOQAGgNAOgHQAMgHANAAQARAAAMAJQALAJAGAQIgPADQgEgMgIgGQgIgGgLAAQgLAAgKAHQgIAGgEALQgEAKAAALQAAANAFALQAEALAJAFQAJAGAIAAQAOAAAIgIQAJgHADgOIAPADQgFATgMAKQgNAKgRAAQgQAAgNgIg");
	this.shape_561.setTransform(957.8,1283.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#333333").s().p("AguA5IAAhxIAoAAQALAAAHACQAKACAHAGQAJAIAEAMQAFAMAAAOQAAAMgDAKQgDAKgFAHQgFAGgFAEQgGAEgIACQgIACgJAAgAgfArIAZAAQAJAAAHgCQAGgCAEgEQAFgFADgJQADgJAAgMQAAgRgGgKQgGgKgIgDQgGgCgMAAIgYAAg");
	this.shape_562.setTransform(946.4,1283.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#333333").s().p("AAdA5Ig6hYIAABYIgPAAIAAhxIAQAAIA6BYIAAhYIAPAAIAABxg");
	this.shape_563.setTransform(934.6,1283.1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_564.setTransform(919.9,1284.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#333333").s().p("AgBA2QgEgCgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_565.setTransform(913.4,1283.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAGAFQAFAEAHABQAKgBAEgDQAFgFABgFQAAgEgFgDQgDgDgLgCQgNgEgHgCQgFgCgEgFQgCgFAAgGQgBgGADgEQACgFAFgDQADgDAGgBQAFgCAHAAQAHAAAIADQAIADADAFQAEAFABAHIgOACQgBgGgEgEQgFgDgHAAQgJAAgEADQgEADAAAEIABAGIAGADIAKADQAQAFAGACQAFABAEAEQADAFAAAHQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_566.setTransform(902.6,1284.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgFgKABgNQAAgMADgIQAFgKAIgGQAJgFAJAAQAGAAAGADQAGADADAFIAAgpIAPAAIAABxIgOAAIAAgLQgHANgPAAQgJAAgIgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAIAAQAIAAAHgHQAGgIAAgPQAAgQgGgHQgHgIgJAAQgIAAgGAHg");
	this.shape_567.setTransform(893.9,1283.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_568.setTransform(885.2,1284.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_569.setTransform(876.3,1284.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_570.setTransform(867.2,1286.3);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_571.setTransform(1100.5,1264.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_572.setTransform(1093.4,1266.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgDgEgDQgEgDgGAAQgHAAgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAGIABAOIAAAxg");
	this.shape_573.setTransform(1080.1,1266.2);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_574.setTransform(1071.2,1266.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_575.setTransform(1065,1264.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_576.setTransform(1061.1,1264.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgFgEgKAAQgJAAgFAEQgEADgDAIIgNgCQACgIAEgGQAEgFAIgDQAJgDAIAAQALAAAHACQAGADADAEQADAEACAFIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgHAGgIADQgFADgIAAQgOAAgIgHgAgCAFIgMADQgEABgCADQgCADAAADQAAAGAFAEQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_577.setTransform(1054.3,1266.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_578.setTransform(1047.7,1264.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_579.setTransform(1043.4,1266.2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_580.setTransform(1035.6,1266.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#333333").s().p("AgjA6IAAhxIANAAIAAALQAFgGAGgDQAFgEAGAAQALAAAIAGQAIAFAFAKQAEAKgBAMQAAAMgEAJQgFAKgIAFQgJAGgJAAQgGAAgFgDQgGgDgEgEIAAAogAgPgmQgHAJAAAQQAAAOAHAIQAGAHAJABQAIgBAHgHQAGgIAAgPQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_581.setTransform(1026.9,1267.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAGAFQAFAFAHAAQAKgBAFgEQAEgDABgGQAAgFgFgDQgDgCgLgCQgNgEgHgCQgFgCgEgFQgCgFAAgGQgBgFADgFQACgFAFgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAEQAEAGABAIIgOABQgBgGgEgDQgFgFgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKAEQAQAEAGADQAFAAAEAFQADAEAAAIQAAAGgEAHQgFAGgHADQgIAEgKAAQgOAAgIgHg");
	this.shape_582.setTransform(1018.2,1266.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgDgEgDQgEgDgGAAQgHAAgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAGIABAOIAAAxg");
	this.shape_583.setTransform(1009.8,1266.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAEgDQAFgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgEAEQgGADgCAIIgNgCQABgIAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADAEABAFIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgJAAQgNAAgIgHgAgCAFIgMADQgEABgCADQgBADgBADQAAAGAEAEQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_584.setTransform(1000.9,1266.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_585.setTransform(994.4,1266.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_586.setTransform(989,1264.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#333333").s().p("AgaAgQgLgLAAgVQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_587.setTransform(977.7,1266.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_588.setTransform(971.3,1266.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgNIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgDACgGQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_589.setTransform(963.4,1266.4);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#333333").s().p("AgYAgQgLgMAAgUQABgMAEgKQAEgKAJgFQAJgFAJAAQANAAAJAHQAJAHACAMIgNACQgDgIgEgEQgFgFgHAAQgJABgGAHQgIAIAAAPQABAQAGAIQAHAHAIABQAIAAAFgGQAGgFACgLIANACQgCAOgJAJQgKAIgNAAQgPAAgKgLg");
	this.shape_590.setTransform(955.3,1266.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#333333").s().p("AgaAgQgLgLAAgVQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_591.setTransform(946.6,1266.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAGAFQAFAFAHAAQAKgBAEgEQAFgDABgGQAAgFgFgDQgDgCgLgCQgNgEgHgCQgFgCgEgFQgCgFAAgGQgBgFADgFQACgFAFgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAEQAEAGABAIIgOABQgBgGgEgDQgFgFgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKAEQAQAEAGADQAFAAAEAFQADAEAAAIQAAAGgEAHQgFAGgHADQgIAEgKAAQgOAAgIgHg");
	this.shape_592.setTransform(938.1,1266.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAGAFAHAAQAKgBAFgEQAEgDAAgGQABgFgFgDQgDgCgLgCQgOgEgFgCQgHgCgCgFQgDgFgBgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAEQAEAGAAAIIgNABQgBgGgFgDQgEgFgHAAQgJAAgEAEQgEADAAAFIABAEIAGAEIAKAEQAPAEAGADQAGAAADAFQAEAEAAAIQAAAGgEAHQgEAGgIADQgIAEgKAAQgOAAgIgHg");
	this.shape_593.setTransform(925.7,1266.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQACgDAFAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_594.setTransform(919.7,1266.2);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#333333").s().p("AgaAgQgLgLAAgVQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_595.setTransform(911.9,1266.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#333333").s().p("AgFA5IAAhRIAMAAIAABRgAgFgoIAAgQIAMAAIAAAQg");
	this.shape_596.setTransform(905.7,1264.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_597.setTransform(902.1,1264.7);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgDQAHgEAGAAQAKAAAIAGQAJAFADAKQAEAKABAMQAAAMgFAJQgFAKgIAFQgJAGgJAAQgGAAgFgDQgGgDgEgEIAAAogAgPgmQgGAJgBAQQABAOAGAIQAHAHAIABQAIgBAGgHQAHgIAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_598.setTransform(896.1,1267.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgDQAGgEAHAAQAKAAAIAGQAJAFADAKQAFAKAAAMQgBAMgEAJQgFAKgIAFQgJAGgJAAQgGAAgFgDQgGgDgEgEIAAAogAgPgmQgGAJgBAQQABAOAGAIQAHAHAIABQAIgBAGgHQAHgIAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_599.setTransform(887.2,1267.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgNIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgDACgGQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_600.setTransform(878,1266.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#333333").s().p("AgVA2QgLgEgGgJQgGgKAAgLIAOgBQABAIAEAGQAEAFAHAEQAIADAIAAQAJAAAGgCQAHgDADgEQAEgFAAgFQAAgGgEgEQgDgEgHgDIgSgFQgQgEgGgBQgJgFgEgGQgEgGAAgIQAAgJAFgHQAFgIAKgEQAJgEALAAQALAAAKAEQAKAEAFAIQAFAIABAKIgPACQgBgLgHgGQgHgFgMAAQgMAAgHAFQgGAFAAAHQAAAGAEAEQAFAEAQAEQATAEAHADQAKADAEAHQAFAHAAAJQAAAKgFAIQgFAIgKAEQgKAFgMAAQgOAAgKgFg");
	this.shape_601.setTransform(868.3,1264.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#333333").s().p("AgGAIIAAgOIAOAAIAAAOg");
	this.shape_602.setTransform(282,833.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#333333").s().p("AgBA2QgEgCgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_603.setTransform(277.6,828.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAJAGAEQAFAEAHABQAKgBAEgDQAFgFABgFQAAgEgFgDQgDgCgLgDQgNgEgHgCQgFgCgEgFQgCgFAAgGQgBgGADgEQACgFAFgDQADgDAGgBQAFgCAHAAQAHAAAIADQAIADADAFQAEAFABAHIgOACQgBgGgEgEQgFgDgHAAQgJAAgEADQgEADAAAEIABAGIAGADIAKADQAQAFAGACQAFABAEAFQADAEAAAHQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_604.setTransform(271.2,829.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgGIgBgMIAAgyIAOAAIAAAsIABAPQABAFAFAEQAEADAGAAQAEAAAGgDQAGgEACgFQACgGAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_605.setTransform(262.7,829.9);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_606.setTransform(253.6,831.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgGIgBgMIAAgyIAOAAIAAAsIABAPQABAFAFAEQAEADAGAAQAEAAAGgDQAGgEACgFQACgGAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_607.setTransform(244.9,829.9);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#333333").s().p("AAkA5IgOgjIguAAIgMAjIgQAAIAshxIAOAAIAvBxgAgHgWIgMAgIAlAAIgMgeIgGgYQgCALgFALg");
	this.shape_608.setTransform(235.3,828.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#333333").s().p("AgVA7IAfh1IAMAAIgfB1g");
	this.shape_609.setTransform(227.7,828.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#333333").s().p("AgdA4IgBgNIAHABQAFAAADgBIAFgFIAEgKIABgEIgfhRIAPAAIARAwIAEASIAGgRIASgxIANAAIgfBTQgFANgBAFQgEAHgFAEQgEADgHAAIgJgCg");
	this.shape_610.setTransform(221.5,831.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_611.setTransform(215.6,828.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgGIgBgMIAAgyIAOAAIAAAsIABAPQABAFAFAEQAEADAGAAQAEAAAGgDQAGgEACgFQACgGAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_612.setTransform(209.4,829.9);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#333333").s().p("AgWAxQgIgJAAgRIAOgCQAAAOAEAEQAFAFAHAAQAFAAAEgCQAEgDACgEQABgFAAgKIAAhNIAPAAIAABMQAAAPgEAIQgDAHgHAFQgIAEgJAAQgOAAgIgJg");
	this.shape_613.setTransform(200.6,828.3);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_614.setTransform(188.1,828.2);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_615.setTransform(178.9,831.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgGIgBgMIAAgyIAOAAIAAAsIABAPQABAFAFAEQAEADAGAAQAEAAAGgDQAGgEACgFQACgGAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_616.setTransform(170.2,829.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJAAQAKAAAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_617.setTransform(161.4,829.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQADgDAEAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_618.setTransform(154.9,829.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_619.setTransform(147.1,828.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#333333").s().p("AgBA2QgEgCgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_620.setTransform(140.6,828.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#333333").s().p("AgdA4IgCgNIAIABQAFAAADgBIAEgFIAFgKIABgEIgfhRIAOAAIASAwIAEASIAGgRIARgxIAOAAIgfBTQgFANgBAFQgDAHgFAEQgGADgGAAIgJgCg");
	this.shape_621.setTransform(129.9,831.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#333333").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgFADQgFAEgCAJIgNgDQACgIAEgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQAEADAAAHIABAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgBADgBAEQAAAFAFAEQAEAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgJIAAgFQgHADgOACg");
	this.shape_622.setTransform(121.3,829.8);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#333333").s().p("AAoA5IAAheIgiBeIgLAAIgihgIAABgIgOAAIAAhxIAXAAIAbBPIAEARIAFgSIAchOIAUAAIAABxg");
	this.shape_623.setTransform(110.2,828.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#333333").s().p("AAqAqIAAgzQAAgHgCgEQgBgEgEgDQgDgCgFAAQgJABgGAFQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgEgIgBQgGAAgFADQgFAEgCAFQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAALQAEgFAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_624.setTransform(92.4,829.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#333333").s().p("AgbAgQgKgMAAgUQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJAAQAKAAAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_625.setTransform(81.3,829.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQADgDAEAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_626.setTransform(74.8,829.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_627.setTransform(69.6,828.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#333333").s().p("AgRA0QgIgFgFgKQgFgKAAgNQAAgMAFgIQAEgKAIgGQAIgFAKAAQAGAAAGADQAGADAEAFIAAgpIANAAIAABxIgMAAIAAgLQgJANgOAAQgJAAgIgGgAgNgIQgHAIAAAOQAAAQAHAIQAHAIAGAAQAJAAAHgHQAGgIABgPQgBgQgGgHQgGgIgKAAQgIAAgFAHg");
	this.shape_628.setTransform(290.1,809.9);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_629.setTransform(281.5,811.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#333333").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgFgIABQgGAAgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_630.setTransform(270.4,811.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAFgJAEgDQACgDAFAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_631.setTransform(261.7,811.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_632.setTransform(253.9,811.4);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_633.setTransform(247.6,809.7);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_634.setTransform(243,811.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_635.setTransform(235.2,811.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgDQAHgEAGAAQAKAAAIAGQAJAFADAKQAFAKAAAMQAAAMgFAJQgFAKgIAFQgJAGgJAAQgGAAgFgDQgGgDgEgEIAAAogAgPgmQgGAJgBAQQABAOAGAIQAHAHAIABQAIgBAGgHQAHgIAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_636.setTransform(226.5,812.9);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAFAFQAFAFAJAAQAJgBAEgEQAGgDAAgGQgBgFgEgDQgCgCgMgCQgNgEgHgCQgFgCgEgFQgDgFAAgGQABgFACgFQADgFAEgDQADgDAFgBQAGgCAHAAQAIAAAHADQAHADAEAEQADAGABAIIgNABQgBgGgEgDQgFgEgHgBQgJAAgEAEQgEADAAAFIACAEIAFAEIALAEQAPAEAGADQAFAAADAFQAEAEAAAIQAAAGgEAHQgEAGgIADQgIAEgJAAQgPAAgIgHg");
	this.shape_637.setTransform(213.4,811.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_638.setTransform(207.6,809.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAFAFQAGAFAIAAQAJgBAEgEQAGgDgBgGQAAgFgEgDQgCgCgMgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQABgFACgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAHAAAIADQAIADADAEQADAGABAIIgNABQgBgGgFgDQgEgEgHgBQgJAAgEAEQgEADAAAFIACAEIAFAEIALAEQAPAEAFADQAGAAADAFQAEAEAAAIQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_639.setTransform(197.4,811.4);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAGAFAHAAQAKgBAFgEQAEgDAAgGQAAgFgEgDQgDgCgLgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAEQAEAGAAAIIgNABQgBgGgFgDQgEgEgHgBQgJAAgEAEQgEADAAAFIABAEIAGAEIAKAEQAQAEAFADQAGAAADAFQAEAEAAAIQAAAGgEAHQgFAGgHADQgIAEgKAAQgOAAgIgHg");
	this.shape_640.setTransform(189.4,811.4);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_641.setTransform(180.9,811.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#333333").s().p("AgYAgQgLgMAAgUQABgLAEgLQAEgKAJgFQAJgFAJAAQANAAAJAHQAJAHACAMIgNACQgDgIgFgEQgEgFgHAAQgJABgGAHQgIAIABAPQAAAQAGAIQAHAHAIABQAIAAAFgGQAGgFACgLIANACQgCAOgJAJQgKAIgNAAQgPAAgKgLg");
	this.shape_642.setTransform(172.8,811.4);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_643.setTransform(164,811.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_644.setTransform(157.6,811.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgDQAHgEAGAAQAKAAAIAGQAJAFADAKQAFAKAAAMQAAAMgFAJQgFAKgIAFQgJAGgJAAQgGAAgFgDQgGgDgEgEIAAAogAgPgmQgGAJgBAQQABAOAGAIQAHAHAIABQAIgBAGgHQAHgIAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_645.setTransform(150,812.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_646.setTransform(136.2,812.9);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgEQgCgEgEgDQgEgCgGAAQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAGIABAOIAAAxg");
	this.shape_647.setTransform(127.5,811.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_648.setTransform(121.3,809.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#333333").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_649.setTransform(117.4,810);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAIAFAFQAGAFAIAAQAJgBAFgEQAEgDAAgGQAAgFgEgDQgDgCgLgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQAAgFADgFQACgFAEgDQAEgDAFgBQAHgCAGAAQAIAAAHADQAIADADAEQAEAGAAAIIgNABQgBgGgFgDQgEgEgHgBQgJAAgEAEQgEADAAAFIABAEIAGAEIALAEQAPAEAFADQAGAAADAFQAEAEAAAIQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_650.setTransform(111.1,811.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_651.setTransform(102.6,811.4);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#333333").s().p("AgFApIgghRIAPAAIASAwIAEARIAEgRIATgwIAPAAIggBRg");
	this.shape_652.setTransform(94.2,811.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_653.setTransform(88.2,811.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgCIAAgFQAAgIgEgEQgFgEgKAAQgJAAgFAEQgFADgCAIIgNgCQACgIAEgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQAEAEAAAFIABAOIAAAQQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgIAAQgOAAgIgHgAgCAFIgMADQgEABgCADQgBADgBADQAAAGAFAEQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgHACgOADg");
	this.shape_654.setTransform(80.4,811.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_655.setTransform(71.5,809.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#333333").s().p("AgUAGIAAgLIApAAIAAALg");
	this.shape_656.setTransform(258.3,793);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_657.setTransform(253.6,792.9);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALAMAAATQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_658.setTransform(245.8,793);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#333333").s().p("AgBA2QgEgCgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_659.setTransform(239.3,791.6);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#333333").s().p("AgZAgQgKgLAAgVQAAgLAFgLQAEgKAJgFQAKgFAIAAQAOAAAIAHQAJAHACANIgOACQgCgJgEgEQgGgEgHgBQgIAAgHAJQgGAHAAAPQgBAQAHAHQAGAJAJgBQAIAAAGgFQAFgFACgKIANABQgBAOgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_660.setTransform(233.2,793);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#333333").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgDIAAgDQAAgJgEgDQgFgFgKAAQgJAAgFADQgEAEgDAJIgNgCQACgJAEgGQAEgFAJgDQAIgDAIAAQALAAAGACQAHADADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAGgIADQgFADgIAAQgOAAgIgHgAgCAEIgMADQgEACgCADQgCADAAAEQAAAFAFAEQAEAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgKIAAgEQgIADgNABg");
	this.shape_661.setTransform(224.5,793);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQACgDAFAAQAIAAAHAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_662.setTransform(218,792.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#333333").s().p("AgBA2QgEgCgCgFQgCgEAAgNIAAgtIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAGABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_663.setTransform(212.6,791.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_664.setTransform(204,791.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#333333").s().p("AgdAkQgIgGAAgLQABgGACgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgDIAAgDQAAgJgEgDQgGgFgJAAQgJAAgEADQgGAEgBAJIgPgCQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMADQgEACgCADQgBADAAAEQAAAFADAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIADgNABg");
	this.shape_665.setTransform(197.8,793);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#333333").s().p("AgYAgQgKgLAAgVQAAgLADgLQAFgKAKgFQAJgFAIAAQANAAAJAHQAJAHACANIgOACQgBgJgGgEQgFgEgGgBQgJAAgHAJQgHAHAAAPQABAQAGAHQAHAJAIgBQAIAAAFgFQAGgFABgKIAPABQgCAOgKAJQgKAIgNAAQgPAAgKgLg");
	this.shape_666.setTransform(189.6,793);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_667.setTransform(183.6,791.4);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgDgEgDQgEgCgGgBQgHABgHAFQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAFIABAOIAAAxg");
	this.shape_668.setTransform(177.3,792.9);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAEgDQAFgBAFgCIANgCQAPgCAIgDIAAgDQAAgJgEgDQgGgFgJAAQgJAAgFADQgEAEgCAJIgPgCQACgJAFgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQAEADABAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgJAAQgNAAgHgHgAgCAEIgMADQgEACgCADQgBADAAAEQAAAFAEAEQAEAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgIADgNABg");
	this.shape_669.setTransform(168.4,793);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_670.setTransform(159.5,791.4);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#333333").s().p("AgYAgQgKgLAAgVQAAgLADgLQAFgKAKgFQAJgFAIAAQANAAAJAHQAJAHACANIgOACQgBgJgGgEQgFgEgGgBQgJAAgHAJQgHAHAAAPQABAQAGAHQAHAJAIgBQAIAAAFgFQAGgFABgKIAPABQgCAOgKAJQgKAIgNAAQgPAAgKgLg");
	this.shape_671.setTransform(151.4,793);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#333333").s().p("AgaAfQgLgKAAgVQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgIgLgBQgIABgGAGg");
	this.shape_672.setTransform(142.6,793);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#333333").s().p("AAqAqIAAgzQAAgHgCgFQgBgDgEgDQgDgCgFAAQgJABgGAFQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgEgIgBQgGAAgFADQgFAEgCAFQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAALQAEgFAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_673.setTransform(131.5,792.9);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#333333").s().p("AgeAkQgGgGAAgLQAAgGACgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgDIAAgDQAAgJgEgDQgFgFgKAAQgJAAgFADQgFAEgCAJIgNgCQACgJAEgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQAEADAAAHIABAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAGgHADQgFADgIAAQgOAAgIgHgAgCAEIgMADQgEACgCADQgBADgBAEQAAAFAFAEQAEAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgKIAAgEQgHADgOABg");
	this.shape_674.setTransform(115.9,793);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_675.setTransform(105.2,791.4);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_676.setTransform(101.7,791.4);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#333333").s().p("AgjApIAAgLIAzg7IgQAAIggAAIAAgLIBCAAIAAAJIgrAzIgJAKIASgBIAkAAIAAAMg");
	this.shape_677.setTransform(95.9,793);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgDIAAgDQAAgJgEgDQgGgFgJAAQgJAAgFADQgEAEgDAJIgNgCQACgJAEgGQAEgFAJgDQAIgDAIAAQALAAAHACQAGADADAEQAEADAAAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgIAAQgOAAgIgHgAgCAEIgMADQgEACgCADQgBADgBAEQAAAFAFAEQAEAEAIAAQAGAAAHgDQAGgEADgGQACgFAAgKIAAgEQgHADgOABg");
	this.shape_678.setTransform(87.5,793);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAFgIADgDQADgDAFAAQAGAAAIAEIgFAOQgFgEgFAAQgFAAgCAEQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_679.setTransform(81,792.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#333333").s().p("AgqA5IAAhxIAqAAQANAAAIAEQAHADAFAHQAEAIAAAIQAAAHgEAGQgEAHgIAEQALACAFAGQAGAIAAAKQAAAIgDAHQgEAGgFAEQgFAEgHACQgIACgLAAgAgaArIAaAAIAKAAQAGgBADgCQAEgDACgEQACgEAAgFQAAgHgDgFQgDgEgGgCQgGgCgJAAIgaAAgAgagIIAYAAIANgBQAGgCADgEQACgEAAgGQAAgFgCgFQgDgEgFgCQgFgBgKAAIgXAAg");
	this.shape_680.setTransform(72.5,791.4);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgCgGAAQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAEABAHIABANIAAAxg");
	this.shape_681.setTransform(300.1,774.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_682.setTransform(293.9,773);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_683.setTransform(283.2,774.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_684.setTransform(277,773);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_685.setTransform(273.5,773);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_686.setTransform(267.2,773);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#333333").s().p("AAbA5IgYhWIgDgNIgCANIgYBWIgQAAIgehxIAQAAIARBJIAFAYIAFgVIAVhMIARAAIARA4QAFAWAEATIAFgZIAShIIAPAAIgfBxg");
	this.shape_687.setTransform(255.3,773);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#333333").s().p("AgHAHIAAgOIAOAAIAAAOg");
	this.shape_688.setTransform(241.1,777.9);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_689.setTransform(234.3,773);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#333333").s().p("AgYAgQgLgMABgUQAAgMADgJQAFgLAKgFQAIgFAJAAQANAAAJAHQAJAHACAMIgOACQgBgIgGgEQgEgFgIABQgIAAgHAHQgGAIgBAPQAAAQAHAIQAHAHAIABQAIAAAFgGQAGgFABgLIAPADQgCAOgKAIQgKAIgNAAQgPAAgKgLg");
	this.shape_690.setTransform(226.2,774.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_691.setTransform(219.9,774.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgFAEQgEADgCAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEAEABAFIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgIAAQgOAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHADADQAFAEAIAAQAGAAAGgEQAHgDADgHQACgEAAgJIAAgFQgIADgNACg");
	this.shape_692.setTransform(212.1,774.6);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#333333").s().p("AAnA5IAAheIggBeIgMAAIgihgIAABgIgOAAIAAhxIAWAAIAcBPIAEARIAGgSIAbhOIAUAAIAABxg");
	this.shape_693.setTransform(201,773);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#333333").s().p("AgVA7IAfh1IAMAAIgfB1g");
	this.shape_694.setTransform(192.1,773);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#333333").s().p("AgdA4IgCgNIAJABQAEAAADgBIAEgFIAFgKIABgEIgghRIAPAAIASAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgDAHgGAEQgFADgGAAIgJgCg");
	this.shape_695.setTransform(185.9,776.2);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_696.setTransform(179.8,774.5);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgCIAAgFQAAgIgEgEQgGgEgJAAQgJAAgFAEQgEADgCAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEAEABAFIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHADADQAFAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIADgNACg");
	this.shape_697.setTransform(172,774.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_698.setTransform(163.1,774.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAGgJADgDQADgDAEAAQAIAAAHAFIgFAMQgFgCgFAAQgFAAgCACQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_699.setTransform(156.7,774.5);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#333333").s().p("AgWAtIAAALIgMAAIAAhxIANAAIAAApQAKgLAMAAQAHAAAHADQAGADAFAGQAEAFADAIQADAGAAAJQAAAVgLAMQgLAMgOAAQgNAAgJgNgAgPgHQgGAHgBAOQAAAPAFAGQAGALALAAQAHAAAHgIQAHgIAAgQQAAgOgHgIQgGgIgIAAQgIAAgHAJg");
	this.shape_700.setTransform(149.1,773.1);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_701.setTransform(140,774.6);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#333333").s().p("AglA5IAAhxIBLAAIAAAOIg8AAIAAAjIA0AAIAAAMIg0AAIAAA0g");
	this.shape_702.setTransform(131,773);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_703.setTransform(116.9,773);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_704.setTransform(107.7,776.1);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#333333").s().p("AgRAnQgHgCgDgFQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_705.setTransform(99,774.7);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKAMQALAKAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgJAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_706.setTransform(90.2,774.6);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQADgDAFAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_707.setTransform(83.7,774.5);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_708.setTransform(75.9,773);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#333333").s().p("AgBA2QgEgDgCgDQgCgEAAgNIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_709.setTransform(69.4,773.2);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFgBQgFABgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_710.setTransform(295.5,756.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_711.setTransform(287.7,756.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#333333").s().p("AgWAtIAAALIgNAAIAAhxIAPAAIAAApQAIgLAMAAQAIAAAHADQAHADAEAGQAFAFACAIQACAGABAJQgBAVgKAMQgKAMgPAAQgNAAgJgNgAgPgHQgHAHAAAOQABAPAEAGQAGALALAAQAIAAAHgIQAGgIAAgQQAAgOgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_712.setTransform(279,754.7);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgEQgBgDgEgDQgDgCgFAAQgJABgGAFQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgEgIgBQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgFAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_713.setTransform(267.7,756.1);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_714.setTransform(256.5,756.2);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#333333").s().p("AgFApIgghRIAPAAIASAwIAEAQIAEgPIATgxIAPAAIggBRg");
	this.shape_715.setTransform(248.1,756.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAIg");
	this.shape_716.setTransform(239.6,756.2);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#333333").s().p("AAdA5Ig6hYIAABYIgPAAIAAhxIAQAAIA6BYIAAhYIAPAAIAABxg");
	this.shape_717.setTransform(229.4,754.6);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgEQgBgDgEgDQgDgCgFAAQgJABgGAFQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgEgIgBQgGAAgFAEQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAALQAEgFAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_718.setTransform(212.5,756.1);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAKgJAFQgKAFgKAAQgQAAgLgMgAgQgWQgHAHAAAPQAAAQAHAHQAHAJAJgBQAKABAHgJQAHgHAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAIg");
	this.shape_719.setTransform(201.4,756.2);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAEIgFAOQgFgDgFgBQgFABgCADQgDACgBAFQgDAIAAAIIAAAqg");
	this.shape_720.setTransform(194.9,756.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_721.setTransform(189.7,754.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#333333").s().p("AgWAkQgJgGgCgOIAOgCQABAIAFAFQAFAFAIgBQAKAAAFgDQAEgFAAgFQABgEgFgDQgCgCgMgDQgNgEgGgCQgHgCgCgFQgDgFgBgGQAAgFADgFQACgFAEgDQAEgCAFgCQAHgCAGAAQAIAAAHADQAIADADAEQAEAFAAAIIgNADQgBgHgFgDQgEgFgHAAQgJABgEADQgEADAAAEIABAGIAGADIAKAEQAPADAGADQAGABADAEQAEAGAAAHQAAAGgEAHQgEAGgIADQgIAEgKAAQgOAAgIgHg");
	this.shape_722.setTransform(178.7,756.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgCgGgBQgHABgHAFQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGADADAEQADAFABAFIABAOIAAAxg");
	this.shape_723.setTransform(170.2,756.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAHAJAAQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_724.setTransform(161.3,756.2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgHAGgDQAGgDAFAAQALAAAIAFQAIAGAFAKQADAKAAAMQAAAMgEAJQgFAKgIAGQgJAFgJAAQgFAAgGgDQgGgDgDgFIAAApgAgPglQgHAIABAQQgBAOAHAHQAGAJAJgBQAIABAHgJQAGgHAAgPQAAgQgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_725.setTransform(152.7,757.7);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgHAGgDQAGgDAFAAQALAAAIAFQAIAGAFAKQADAKAAAMQABAMgFAJQgFAKgIAGQgJAFgJAAQgFAAgGgDQgGgDgDgFIAAApgAgPglQgHAIABAQQgBAOAHAHQAGAJAJgBQAIABAHgJQAGgHAAgPQAAgQgGgIQgHgIgIAAQgIAAgHAJg");
	this.shape_726.setTransform(143.8,757.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgDIAAgEQAAgIgEgDQgGgFgJAAQgJAAgEAEQgFADgDAJIgNgCQABgJAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADAEABAGIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgJAAQgNAAgIgHgAgCAEIgMAEQgEABgCADQgBADAAAEQgBAFAEAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgHADgOABg");
	this.shape_727.setTransform(134.6,756.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_728.setTransform(125.7,754.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#333333").s().p("AgdA4IgBgNIAIABQAEAAADgBIAEgFIAFgKIABgEIgghRIAQAAIARAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgDAHgGAEQgFADgGAAIgJgCg");
	this.shape_729.setTransform(112.9,757.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_730.setTransform(107,754.6);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_731.setTransform(103.5,754.6);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#333333").s().p("AgeAkQgGgGgBgLQAAgGADgFQADgFAEgDQAFgBAGgCIAMgCQAPgCAIgDIAAgEQAAgIgEgDQgGgFgJAAQgJAAgEAEQgFADgDAJIgNgCQABgJAFgGQAEgFAJgDQAHgDAJAAQALAAAHACQAGADADAEQADAEABAGIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAGgHADQgFADgJAAQgNAAgIgHgAgCAEIgMAEQgEABgCADQgBADgBAEQAAAFAEAEQAFAEAIAAQAGAAAGgDQAHgEADgGQACgFAAgKIAAgEQgHADgOABg");
	this.shape_732.setTransform(97.3,756.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgMIAAgyIAOAAIAAAsIABAPQABAGAFADQAEADAGAAQAEAAAGgDQAGgDACgGQACgGAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_733.setTransform(88.3,756.3);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAFAFQAGAFAIgBQAJAAAEgDQAGgFAAgFQgBgEgEgDQgCgCgMgDQgOgEgFgCQgHgCgCgFQgEgFAAgGQABgFACgFQACgFAEgDQAEgCAFgCQAHgCAGAAQAHAAAIADQAIADADAEQADAFABAIIgNADQgBgHgFgDQgEgFgHAAQgJABgEADQgEADAAAEIACAGIAFADIALAEQAPADAFADQAGABADAEQAEAGAAAHQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_734.setTransform(79.9,756.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgEgBgHIgBgMIAAgyIAOAAIAAAsIABAPQABAGAFADQAEADAGAAQAEAAAGgDQAGgDACgGQACgGAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_735.setTransform(71.4,756.3);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAIAFAFQAFAEAJABQAJAAAEgFQAGgEAAgFQgBgFgEgDQgCgBgMgDQgNgEgHgCQgFgCgEgFQgDgFAAgGQABgGACgEQADgFADgDQAEgDAFgBQAGgCAHAAQAHAAAIADQAHADAEAFQADAEABAIIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAFIACAEIAFAEIALADQAPAEAFADQAGABADAFQAEAFAAAGQAAAIgEAGQgFAGgHAEQgIADgJAAQgPAAgIgHg");
	this.shape_736.setTransform(282.8,737.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_737.setTransform(277,736.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_738.setTransform(270.8,736.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_739.setTransform(264.2,736.4);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_740.setTransform(255.2,742.2);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#333333").s().p("AgdAkQgIgHABgKQgBgGADgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgFADQgEAEgCAIIgPgCQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEADABAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHADADQAFAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_741.setTransform(248.5,737.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#333333").s().p("AgYAgQgKgMAAgUQAAgMADgJQAFgLAKgFQAIgFAJAAQANAAAJAHQAJAHACAMIgNADQgDgJgFgEQgFgFgGABQgJAAgGAIQgIAHAAAPQABAQAGAIQAGAHAJABQAIgBAFgFQAGgFACgLIAOADQgDANgJAJQgKAIgNAAQgPAAgKgLg");
	this.shape_742.setTransform(240.4,737.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_743.setTransform(234.3,736.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAFgIAEgDQADgDAFAAQAHAAAHAFIgFAMQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_744.setTransform(230.5,737.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_745.setTransform(222.7,737.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgFgIABQgGAAgFACQgFAEgCAFQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAAMQAEgGAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_746.setTransform(211.6,737.7);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#333333").s().p("AAjA5IgMgjIguAAIgNAjIgQAAIAshxIAOAAIAvBxgAgHgWIgMAgIAkAAIgMgeIgGgYQgBALgFALg");
	this.shape_747.setTransform(199.7,736.2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_748.setTransform(188,736.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#333333").s().p("AgdAkQgIgHABgKQgBgGADgFQADgFAFgDQAEgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgFADQgEAEgCAIIgPgCQADgIAEgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQAEADABAGIAAAOIAAAQQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgHgHgAgCAFIgMACQgEACgCADQgCADAAADQABAHAEADQAEAEAIAAQAGAAAHgEQAGgDADgHQACgEAAgJIAAgFQgIACgNADg");
	this.shape_749.setTransform(181.8,737.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAFIgFAMQgFgDgFAAQgFAAgCADQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_750.setTransform(175.4,737.7);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAGABACQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgCg");
	this.shape_751.setTransform(169.9,736.4);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_752.setTransform(163.1,737.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_753.setTransform(154.2,737.8);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#333333").s().p("AgaAzQgLgHgGgPQgGgOAAgPQAAgRAHgOQAGgNANgHQANgHANAAQARAAAMAJQALAJAGAQIgPADQgEgMgIgGQgIgGgMAAQgLAAgJAHQgIAGgEALQgDAKgBALQABANAEALQAEALAJAFQAJAGAIAAQAOAAAIgIQAJgHADgOIAPADQgEATgNAKQgNAKgRAAQgQAAgNgIg");
	this.shape_754.setTransform(144.1,736.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgFgEgCQgEgDgGABQgHgBgHAGQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_755.setTransform(129.3,737.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_756.setTransform(122.7,736.2);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#333333").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_757.setTransform(113.8,741.1);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#333333").s().p("AgdA4IgBgNIAIABQAEAAADgBIAEgFIAFgKIABgEIgghRIAPAAIASAwIAEASIAGgRIARgxIAPAAIggBTQgFANgBAFQgDAHgGAEQgFADgGAAIgJgCg");
	this.shape_758.setTransform(107.6,739.4);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAEgIAEgDQACgDAGAAQAGAAAIAFIgFAMQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_759.setTransform(101.5,737.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAFIgFAMQgFgDgFAAQgFAAgCADQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_760.setTransform(96.2,737.7);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgSALgMQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgJgLABQgIgBgGAHg");
	this.shape_761.setTransform(88.4,737.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_762.setTransform(79.5,736.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#333333").s().p("AgZAgQgJgMgBgUQAAgMAFgJQAEgLAJgFQAKgFAIAAQAOAAAIAHQAJAHACAMIgNADQgDgJgEgEQgGgFgHABQgIAAgGAIQgIAHABAPQAAAQAGAIQAGAHAJABQAIgBAGgFQAFgFACgLIANADQgBANgKAJQgJAIgOAAQgPAAgLgLg");
	this.shape_763.setTransform(71.3,737.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_764.setTransform(287.7,719.4);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_765.setTransform(278.8,719.4);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_766.setTransform(272.5,717.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_767.setTransform(268,717.7);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_768.setTransform(261,719.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#333333").s().p("AgZAgQgKgLABgVQAAgMADgKQAFgKAKgFQAJgFAIAAQANAAAJAHQAJAHACANIgOABQgBgIgGgEQgEgEgIgBQgIABgHAHQgGAIgBAPQAAAQAHAHQAGAIAJAAQAIABAGgGQAFgFABgKIAPABQgCAPgKAIQgKAIgNAAQgPAAgLgLg");
	this.shape_769.setTransform(252.8,719.4);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_770.setTransform(239.6,719.4);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_771.setTransform(230.7,717.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#333333").s().p("AgBA1QgEgBgCgEQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgUIAMgJIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_772.setTransform(224.2,718);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#333333").s().p("AgXA0QgKgGABgOIANACQABAGAEADQAFAEAJAAQAIAAAGgEQAFgEACgHQABgEAAgOQgJALgNAAQgQAAgKgMQgJgMAAgQQAAgMAEgKQAFgKAIgFQAIgGAKAAQAOAAAJAMIAAgKIANAAIAABGQAAATgEAJQgEAIgIAEQgJAFgLAAQgOAAgJgHgAgOgmQgHAHAAAPQAAAQAHAGQAGAIAIAAQAKAAAGgIQAHgGAAgPQAAgPgHgIQgHgIgJAAQgIAAgGAIg");
	this.shape_773.setTransform(212.7,720.9);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_774.setTransform(204,719.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#333333").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_775.setTransform(197.8,717.8);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#333333").s().p("AAQA5IgZgrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAgggIASAAIgfAdIAiA0g");
	this.shape_776.setTransform(192.6,717.8);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#333333").s().p("AgYAgQgLgLABgVQAAgMADgKQAFgKAKgFQAIgFAJAAQANAAAJAHQAJAHACANIgOABQgBgIgGgEQgEgEgIgBQgIABgHAHQgGAIgBAPQAAAQAHAHQAHAIAIAAQAIABAFgGQAGgFABgKIAPABQgCAPgKAIQgKAIgNAAQgPAAgKgLg");
	this.shape_777.setTransform(184.3,719.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#333333").s().p("AgFA5IAAhRIALAAIAABRgAgFgoIAAgQIALAAIAAAQg");
	this.shape_778.setTransform(178.3,717.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#333333").s().p("AgiA6IAAhxIAMAAIAAALQAFgGAFgEQAGgDAGAAQALAAAIAGQAIAFAEAKQAFAKAAAMQgBAMgEAJQgEAKgJAFQgJAGgJAAQgGAAgFgDQgGgDgEgFIAAApgAgPgmQgHAJAAAQQAAAOAHAHQAGAIAJAAQAIAAAHgIQAGgIAAgOQAAgQgGgIQgHgIgIAAQgIAAgHAIg");
	this.shape_779.setTransform(172.3,720.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#333333").s().p("AgRA0QgJgFgEgKQgEgKAAgNQgBgMAEgIQAFgKAIgGQAIgFAKAAQAGAAAGADQAGADADAFIAAgpIAOAAIAABxIgMAAIAAgLQgIANgPAAQgIAAgJgGgAgOgIQgGAIAAAOQAAAQAGAIQAHAIAHAAQAKAAAGgHQAHgIAAgPQAAgQgHgHQgHgIgJAAQgHAAgHAHg");
	this.shape_780.setTransform(158.4,717.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#333333").s().p("AATAqIAAgwQAAgJgBgFQgCgEgEgCQgEgDgGAAQgHAAgHAGQgGAGAAAPIAAAsIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAFABAFIABAOIAAAxg");
	this.shape_781.setTransform(149.8,719.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#333333").s().p("AgdAkQgIgGABgLQgBgGADgFQADgFAFgDQAEgBAGgCIAMgCQAPgCAIgCIAAgFQAAgIgEgDQgFgFgKAAQgJAAgFAEQgEADgCAIIgPgBQADgJAEgGQAEgFAIgDQAJgDAIAAQALAAAGACQAHADADAEQAEAEABAFIAAANIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgHgHgAgCAEIgMAEQgEABgCADQgCADAAAEQABAFAEAEQAEAEAIAAQAGAAAHgEQAGgDADgGQACgFAAgKIAAgEQgIACgNACg");
	this.shape_782.setTransform(140.9,719.4);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_783.setTransform(132,717.8);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#333333").s().p("AgWAkQgIgGgDgOIAOgCQABAIAFAFQAGAFAIgBQAJAAAEgDQAGgEgBgGQAAgFgEgCQgCgDgMgCQgOgEgFgCQgHgCgCgFQgEgFAAgGQABgGACgEQACgFAEgDQAEgCAFgCQAHgCAGAAQAHAAAIADQAIADADAEQADAFABAJIgNACQgBgHgFgDQgEgFgHAAQgJABgEADQgEADAAAEIACAFIAFAEIALAEQAPADAFAEQAGAAADAEQAEAGAAAHQAAAGgEAHQgFAGgHADQgIAEgJAAQgPAAgIgHg");
	this.shape_784.setTransform(119.1,719.4);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAANQAFgJAEgDQADgDAEAAQAIAAAHAEIgFAOQgFgDgFAAQgFAAgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_785.setTransform(113.1,719.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#333333").s().p("AgaAfQgLgLAAgUQAAgSALgNQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJgBQAHAAAGgDQAFgFAEgJIAOACQgDANgKAHQgJAHgOAAQgRAAgKgMgAgOgYQgHAHgBALIAtAAQgBgLgFgFQgGgJgLAAQgIABgGAGg");
	this.shape_786.setTransform(105.3,719.4);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#333333").s().p("AARA5IgagrIgKAKIAAAhIgOAAIAAhxIAOAAIAABAIAfggIASAAIgeAdIAiA0g");
	this.shape_787.setTransform(97.4,717.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAANQAEgJAEgDQACgDAGAAQAGAAAIAEIgFAOQgFgDgFAAQgFAAgCADQgDACgCAFQgCAIAAAIIAAAqg");
	this.shape_788.setTransform(90.8,719.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#333333").s().p("AgbAfQgKgLAAgUQAAgVAMgLQALgKAOAAQARAAAKALQALALAAAUQAAAPgEAIQgFAJgJAGQgKAFgKAAQgQAAgLgMgAgQgXQgHAJAAAOQAAAQAHAHQAHAIAJAAQAKAAAHgIQAHgIAAgPQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_789.setTransform(83,719.4);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#333333").s().p("AAQApIgOgvIgCgPIgQA+IgOAAIgZhRIAOAAIANAuIAFARIAFgQIAMgvIANAAIAMAuIAFAQIAEgQIAPguIANAAIgaBRg");
	this.shape_790.setTransform(72.8,719.4);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJAAgGAFQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgEgIAAQgGAAgFACQgFADgCAGQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAAMQAEgGAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_791.setTransform(285.5,700.9);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#333333").s().p("AgVAqIAAhRIANAAIAAAMQAFgIADgDQADgDAFAAQAGAAAIAEIgFANQgFgDgFAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_792.setTransform(276.8,700.9);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#333333").s().p("AgdAkQgIgHAAgKQABgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgEADQgGAEgBAJIgPgDQACgIAFgFQAEgGAIgDQAIgDAJAAQALAAAGADQAHACADAEQADADACAHIAAAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgHAHgIACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgCADABADQAAAHADADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_793.setTransform(269,701);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#333333").s().p("AgKA6IAAhGIgNAAIAAgLIANAAIAAgJQAAgIABgEQACgGAFgDQADgEAKAAIANACIgCAMIgJgBQgGAAgDADQgCADAAAHIAAAIIAQAAIAAALIgQAAIAABGg");
	this.shape_794.setTransform(262.7,699.3);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#333333").s().p("AATA5IAAg1QAAgIgEgFQgFgFgIAAQgEAAgGADQgFAEgDAFQgCAEAAAJIAAAuIgOAAIAAhxIAOAAIAAApQAKgLANAAQAJAAAHAEQAHADACAHQADAGAAAKIAAA1g");
	this.shape_795.setTransform(251.2,699.4);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_796.setTransform(244.6,699.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#333333").s().p("AgGA5IAAhRIAMAAIAABRgAgGgoIAAgQIAMAAIAAAQg");
	this.shape_797.setTransform(240.5,699.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#333333").s().p("AAQApIgNgwIgDgOIgQA+IgOAAIgZhRIAOAAIANAuIAFARIAEgRIAOguIAMAAIANAuIADAQIAGgQIANguIAPAAIgaBRg");
	this.shape_798.setTransform(233,701);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgFIgGAAIAAgQIAOAAIAAAQQAAAHgDAGQgDAFgFADg");
	this.shape_799.setTransform(220.5,705.4);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAJAFAEQAFAEAJABQAJAAAEgFQAGgEAAgFQgBgEgEgDQgCgDgMgCQgNgEgHgCQgFgCgEgFQgCgFAAgGQAAgGACgEQADgFADgDQAEgDAFgBQAGgCAHAAQAIAAAHADQAHADAEAFQADAFABAHIgNACQgBgGgEgEQgFgDgHAAQgJgBgEAEQgEADAAAEIACAGIAFADIALADQAPAFAFACQAGABADAFQAEAFAAAGQAAAIgEAGQgEAGgIAEQgIADgJAAQgPAAgIgHg");
	this.shape_800.setTransform(214.3,701);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#333333").s().p("AgWAkQgIgHgDgNIAOgCQABAJAFAEQAFAEAJABQAJAAAEgFQAGgEAAgFQgBgEgEgDQgCgDgMgCQgNgEgHgCQgFgCgEgFQgDgFAAgGQABgGACgEQADgFADgDQAEgDAFgBQAHgCAGAAQAHAAAIADQAHADAEAFQADAFABAHIgNACQgBgGgFgEQgEgDgHAAQgJgBgEAEQgEADAAAEIACAGIAFADIALADQAPAFAFACQAGABADAFQAEAFAAAGQAAAIgEAGQgFAGgHAEQgIADgJAAQgPAAgIgHg");
	this.shape_801.setTransform(206.3,701);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#333333").s().p("AgaAgQgLgMAAgUQAAgTALgLQALgMAPAAQARAAAKAMQALALAAATIAAADIg8AAQAAAOAHAHQAHAHAJABQAHAAAGgFQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAHgBAKIAtAAQgBgKgFgFQgGgIgLAAQgIAAgGAGg");
	this.shape_802.setTransform(197.8,701);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#333333").s().p("AgZAgQgJgLgBgVQAAgMAFgJQAEgLAJgFQAKgFAIAAQAOAAAIAHQAJAHACAMIgNADQgDgJgEgEQgGgFgHABQgIgBgGAJQgIAHABAPQAAAQAGAHQAGAJAJAAQAIgBAGgFQAFgFACgKIANACQgCANgJAJQgJAIgOAAQgPAAgLgLg");
	this.shape_803.setTransform(189.7,701);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#333333").s().p("AgbAgQgKgLAAgVQAAgWAMgKQALgKAOAAQARAAAKAMQALALAAATQAAAOgEAJQgFAKgJAFQgKAFgKAAQgQAAgLgLgAgQgWQgHAHAAAPQAAAPAHAIQAHAJAJAAQAKAAAHgJQAHgIAAgPQAAgOgHgIQgHgIgKAAQgJAAgHAIg");
	this.shape_804.setTransform(180.9,701);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#333333").s().p("AgVAqIAAhRIAMAAIAAAMQAGgIADgDQADgDAEAAQAIAAAHAEIgFANQgFgDgFAAQgFAAgCADQgDADgBAFQgDAHAAAJIAAAqg");
	this.shape_805.setTransform(174.5,700.9);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#333333").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAFgDQAGgEAHAAQAKAAAIAFQAJAGADAKQAEAKAAAMQABANgFAIQgEAKgJAGQgJAFgJAAQgFAAgGgDQgGgDgEgFIAAApgAgPglQgGAIAAAQQAAAOAGAHQAHAJAIAAQAIAAAGgJQAHgIAAgOQAAgQgHgIQgGgIgIAAQgIAAgHAJg");
	this.shape_806.setTransform(166.9,702.5);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_807.setTransform(156,699.4);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#333333").s().p("AgeAkQgGgHAAgKQAAgGACgFQADgFAFgDQAEgBAGgBIAMgDQAPgCAIgDIAAgDQAAgJgEgEQgFgEgKAAQgJAAgFADQgEAEgDAJIgNgDQACgIAEgFQAEgGAJgDQAIgDAIAAQALAAAGADQAHACADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgHAHgIACQgFADgIAAQgOAAgIgHgAgCAFIgMACQgEACgCADQgCADAAADQAAAHAFADQAEAEAIAAQAGAAAHgDQAGgEADgHQACgEAAgJIAAgFQgIADgNACg");
	this.shape_808.setTransform(149.8,701);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#333333").s().p("AgRAnQgHgDgDgEQgDgFgBgFIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgKIAAgrIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_809.setTransform(140.8,701.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#333333").s().p("AATAqIAAgxQAAgIgBgEQgCgEgEgDQgEgDgGABQgHAAgHAFQgGAGAAAQIAAArIgOAAIAAhRIAMAAIAAAMQAKgOAPAAQAHAAAHADQAGACADAFQADAEABAHIABANIAAAxg");
	this.shape_810.setTransform(132,700.9);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#333333").s().p("AgdAkQgIgHABgKQAAgGACgFQADgFAEgDQAFgBAFgBIANgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgGAEgBAJIgPgDQACgIAFgFQAEgGAIgDQAJgDAIAAQALAAAGADQAHACADAEQADADACAHIAAAMIAAARQAAAUABAFIADAKIgOAAIgDgKQgIAHgHACQgFADgJAAQgNAAgHgHgAgCAFIgMACQgEACgCADQgBADAAADQAAAHADADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgJIAAgFQgIADgNACg");
	this.shape_811.setTransform(123.1,701);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#333333").s().p("AAqAqIAAgzQAAgIgCgDQgBgEgEgDQgDgBgFAAQgJAAgGAFQgFAGAAANIAAAuIgMAAIAAg0QAAgJgEgFQgDgEgIAAQgGAAgFACQgFADgCAGQgDAHAAAKIAAAqIgOAAIAAhRIANAAIAAAMQAEgGAGgEQAHgEAIAAQAJAAAGAEQAEAEACAGQAKgOAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_812.setTransform(112,700.9);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#333333").s().p("AgeAkQgGgHgBgKQAAgGADgFQADgFAEgDQAFgBAGgBIAMgDQAPgCAIgDIAAgDQAAgJgEgEQgGgEgJAAQgJAAgEADQgFAEgDAJIgNgDQABgIAFgFQAEgGAJgDQAHgDAJAAQALAAAHADQAGACADAEQADADABAHIABAMIAAARQAAAUABAFIAEAKIgPAAIgDgKQgIAHgHACQgFADgJAAQgNAAgIgHgAgCAFIgMACQgEACgCADQgBADgBADQAAAHAEADQAFAEAIAAQAGAAAGgDQAHgEADgHQACgEAAgJIAAgFQgHADgOACg");
	this.shape_813.setTransform(96.4,701);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#333333").s().p("AgWAkQgJgHgCgNIAOgCQABAJAGAEQAFAEAHABQAKAAAFgFQAEgEAAgFQABgEgFgDQgCgDgMgCQgOgEgGgCQgFgCgEgFQgCgFAAgGQAAgGACgEQADgFAEgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAFQAEAFABAHIgOACQgBgGgEgEQgFgDgHAAQgJgBgEAEQgEADAAAEIABAGIAGADIAKADQAPAFAHACQAFABAEAFQADAFAAAGQAAAIgEAGQgFAGgHAEQgIADgKAAQgOAAgIgHg");
	this.shape_814.setTransform(83.5,701);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#333333").s().p("AgHANQAEgCADgEQAAgEAAgEIgGAAIAAgQIAOAAIAAAMQAAAJgDAFQgDAGgFADg");
	this.shape_815.setTransform(77.6,695.4);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#333333").s().p("AgBA2QgEgDgCgEQgCgDAAgOIAAgtIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAuQAAAHABABQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHAAIACAMIgLABQgIAAgCgCg");
	this.shape_816.setTransform(73.8,699.6);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#333333").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_817.setTransform(69.3,699.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]}).wait(1));

	// HARVESTING
	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_818.setTransform(257.8,381.6);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_819.setTransform(229.8,381.7);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_820.setTransform(209.9,381.7);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#519FD5").s().p("Ag5B9QgdgRgRgfQgRggAAgtQAAgnAQggQARggAdgTQAdgTAkAAQAYAAAUAHQAUAIAPAMQAOALAHALQAIALAGAKIg2AaQgCgGgFgHQgEgHgJgHQgJgIgKgDQgJgDgJAAQgTABgPALQgPAMgHATQgIAUAAAWQABAcAIATQAJAUAPAKQAPAKAQAAQASgBALgGQALgHAHgJIAMgRIA0AbQgHALgJAMQgJALgPALIgQAKQgLAFgPAEQgOAFgTAAQgiAAgdgRg");
	this.shape_821.setTransform(191.6,381.7);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_822.setTransform(165.4,381.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#519FD5").s().p("AAACJQgOAAgRgEQgQgDgOgIQgUgKgKgNQgLgNgFgPQgEgPgBgPIgBgdIAAiUIBEAAIAACmQAAAKABAIQABAJADAGQAHALALADQAMAFALgBQAXAAAJgJQAKgIACgMQACgMAAgLIAAilIBDAAIAACUQABAUgDATQgDATgKASQgLASgPAJQgPAKgQAFQgPAEgMACIgNABIgCAAg");
	this.shape_823.setTransform(137.1,382);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#519FD5").s().p("AAACNQgfAAgZgLQgZgLgRgUQgRgUgJgZQgJgaAAgcQAAgbAJgZQAIgZARgUQARgUAYgMQAZgMAhAAIAWACQAMACAMAEQAZAJAQAOQAQAPAKARQAJARAFARQAEAQACANQABAMAAAEQAAAjgOAeQgOAdgXASQgUAQgWAGQgUAHgTAAIgCgBgAgkhKQgOALgJATQgIATAAAYQABAeAKATQAKAUAPAIQAPAJAQAAQAPAAAPgIQAPgIAKgSQAKgRACgcQAAgUgFgTQgFgUgMgMQgJgJgMgGQgMgFgMAAQgVAAgPALg");
	this.shape_824.setTransform(108.2,381.7);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#519FD5").s().p("AgvCGQgUgFgPgIQgNgKgKgIIgPgRIAzghIAKALQAGAFAJAFQAOAHANAEQANACAKAAQAOAAALgEQAKgDAIgIQAGgGABgKQgBgKgHgGQgIgFgKgCIgWgEIgUgDIgVgEQgHgBgLgEQgMgEgNgHQgMgGgIgOQgJgNAAgWQgBgaALgRQAKgRAQgLQAQgKATgEQASgFAQAAQAfABAWAHQAWAJARAMIAbAWIgyAjIgMgLQgGgFgJgFQgGgEgNgEQgLgDgMgBQgMABgJAEQgJAEgFAGQgEAHAAAGQAAALAHAEQAGAGAHACIAPACIAcAFIAeAFIAWAGQAXAJALAPQALARAAAXQABAPgGAPQgFAOgKANQgNAOgQAIQgQAIgSADQgUADgSAAQgbAAgUgGg");
	this.shape_825.setTransform(79.6,381.7);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#519FD5").s().p("Ag5B9QgdgRgRgfQgRggAAgtQAAgnAQggQARggAdgTQAdgTAkAAQAYAAAUAHQAUAIAPAMQAOALAHALQAIALAGAKIg2AaQgCgGgFgHQgEgHgJgHQgJgIgKgDQgJgDgJAAQgTABgPALQgPAMgHATQgIAUAAAWQABAcAIATQAJAUAPAKQAPAKAQAAQASgBALgGQALgHAHgJQAHgJAFgIIA0AbQgHALgJAMQgJALgPALIgQAKQgLAFgPAEQgOAFgTAAQgiAAgdgRg");
	this.shape_826.setTransform(268.2,336.5);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_827.setTransform(248.5,336.5);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_828.setTransform(228.3,336.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#519FD5").s().p("AhnCGIAAkLIDEAAIAAA1IiCAAIAAAwIB5AAIAAAxIh5AAIAABAICOAAIAAA1g");
	this.shape_829.setTransform(202.7,336.5);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_830.setTransform(178.9,336.5);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_831.setTransform(154.8,336.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_832.setTransform(128.9,336.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_833.setTransform(103.8,336.5);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#519FD5").s().p("AgvCGQgUgFgPgIQgNgKgKgIIgPgRIAzghIAKALQAGAFAJAGQAOAHANADQANADAKgBQAOAAALgDQAKgFAIgHQAGgGABgKQgBgKgHgGQgIgFgKgCIgWgEIgUgDIgVgEQgHgBgLgEQgMgDgNgIQgMgGgIgNQgJgOAAgWQgBgaALgRQAKgSAQgKQAQgKATgFQASgEAQAAQAfAAAWAJQAWAIARAMIAbAWIgyAjIgMgLQgGgFgJgFQgGgEgNgEQgLgEgMAAQgMABgJADQgJAFgFAGQgEAGAAAHQAAALAHAEQAGAGAHABIAPAEIAcAEIAeAGIAWAFQAXAJALAPQALARAAAXQABAPgGAPQgFAOgKANQgNAOgQAIQgQAIgSADQgUADgSAAQgbAAgUgGg");
	this.shape_834.setTransform(79.6,336.5);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#519FD5").s().p("AhEB7QgbgTgPgfQgOgggBgoQABgpARggQARggAdgSQAegSAlAAQAaAAAUAHQAUAHAPALQAOAKAJAKIAOARIgzAfQgFgIgHgJQgIgIgMgHQgMgGgSAAQgYAAgPAMQgQAMgHAUQgHAUAAAVQAAAWAGASQAGASAKAKQAHAIANAGQANAFAOAAQAJAAAKgCQAJgCAJgGQAMgJAEgKQAEgKABgLIg8AAIAAgxIB1AAIAACTIg1AAIAAgZQgFAGgKAHQgKAHgQAGQgPAFgVAAQglAAgbgSg");
	this.shape_835.setTransform(300.4,660.3);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#519FD5").s().p("AAuCGIgwhVIgPgZIgLgTIgJgPIgMgXIACCnIhAAAIAAkLIBBAAIA5BjIARAfIAMATIALAWIgDirIBAAAIAAELg");
	this.shape_836.setTransform(272.4,660.4);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#519FD5").s().p("AggCGIAAkLIBBAAIAAELg");
	this.shape_837.setTransform(252.6,660.4);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#519FD5").s().p("AggCGIAAjVIhGAAIAAg2IDNAAIAAA2IhGAAIAADVg");
	this.shape_838.setTransform(236,660.4);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#519FD5").s().p("AgvCHQgUgGgPgJQgNgIgKgKIgPgQIAyggIALAKQAGAFAJAFQAOAIANACQANADAKAAQAOAAALgEQAKgEAIgGQAGgIABgJQgBgLgHgFQgIgFgKgDIgWgDIgTgDIgXgEQgGgBgMgEQgLgDgNgIQgMgGgJgOQgIgOgBgVQAAgaALgRQAKgRAQgLQAQgKATgEQATgFAPAAQAfABAWAHQAWAJARALIAbAXIgyAkIgMgMQgGgFgJgFQgGgEgNgEQgLgDgMgBQgMAAgJAFQgJAEgFAGQgEAHAAAGQAAAKAHAGQAGAEAHADIAPACIAcAFIAeAFIAWAHQAWAIAMAPQAMARAAAXQAAAPgGAOQgFAPgKANQgNAOgQAIQgQAIgSADQgUADgSAAQgaAAgVgFg");
	this.shape_839.setTransform(211.8,660.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#519FD5").s().p("AhnCGIAAkLIDDAAIAAA1IiBAAIAAAwIB4AAIAAAxIh4AAIAABAICNAAIAAA1g");
	this.shape_840.setTransform(187.8,660.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#519FD5").s().p("AghCGIhckLIBHAAIA2C9IA3i9IBHAAIhdELg");
	this.shape_841.setTransform(162,660.4);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#519FD5").s().p("AAsCGIgzhgIgrAAIAABgIhDAAIAAkLIB3AAIAeACQAPABAPAGQAPAGANANQAJAKAGAQQAGAPAAASQAAAVgGANQgGAMgJAHQgIAIgKAFIgQAHIA+BrgAgygKIA2AAIAKgBQAHgBAHgDQAHgDAEgIQAFgHAAgOQAAgRgHgHQgGgIgJgCQgJgCgIABIg3AAg");
	this.shape_842.setTransform(136.8,660.4);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#519FD5").s().p("AA+CGIgNgrIhhAAIgNArIhIAAIBkkLIBEAAIBjELgAAiArIgihwIgFAVIgFAVIgHAXIgIAYIgHAXIBCAAg");
	this.shape_843.setTransform(108.9,660.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#519FD5").s().p("AAxCGIAAhzIhgAAIAABzIhEAAIAAkLIBEAAIAABhIBgAAIAAhhIBDAAIAAELg");
	this.shape_844.setTransform(81.3,660.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818}]}).wait(1));

	// 7-Warehousing
	this.instance = new lib._5Packaging();
	this.instance.setTransform(335.8,920.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib._7Warehousing();
	this.instance_1.setTransform(335.8,1270.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 3-Harvesting
	this.instance_2 = new lib._1StrategicSourcing();
	this.instance_2.setTransform(335.8,197.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib._3Harvesting();
	this.instance_3.setTransform(335.8,565.9);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// 6-Shipping
	this.instance_4 = new lib._4Sorting();
	this.instance_4.setTransform(1017.8,877.8,1,1,0,0,0,127.9,151);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib._8Distribution();
	this.instance_5.setTransform(1004.8,1583.3,1,1,0,0,0,127.9,151);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.instance_6 = new lib._2Acquisition();
	this.instance_6.setTransform(1017.8,524.7,1,1,0,0,0,127.9,151);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.instance_7 = new lib._6Shipping();
	this.instance_7.setTransform(1004.8,1236.7,1,1,0,0,0,127.9,151);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// top-picture.jpg
	this.instance_8 = new lib.toppicture();
	this.instance_8.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer 11
	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#EE7D2B").ss(3,1,1).p("EAAAh45MAAADxz");
	this.shape_845.setTransform(599,835.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_845).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(601,900,1200,1765.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;