/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'all_server_23',
                            type: 'image',
                            rect: ['314px', '36px', '142px', '165px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"all_server_23.png",'0px','0px']
                        },
                        {
                            id: 'cent2_symbol_1',
                            symbolName: 'cent2_symbol_1',
                            type: 'rect',
                            rect: ['564px', '39px', '135px', '143px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Rocket2_symbol_1',
                            symbolName: 'Rocket2_symbol_1',
                            type: 'rect',
                            rect: ['315px', '540px', '82px', '258px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'yellow_arrow-01_symbol_1',
                            symbolName: 'yellow_arrow-01_symbol_1',
                            type: 'rect',
                            rect: ['808px', '77px', '49px', '84px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Location_symbol_1',
                            symbolName: 'Location_symbol_1',
                            type: 'rect',
                            rect: ['61px', '259px', '89px', '170px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'shesterni_symbol_1',
                            symbolName: 'shesterni_symbol_1',
                            type: 'rect',
                            rect: ['747px', '550px', '147px', '199px', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'smoke2_symbol_1',
                            symbolName: 'smoke2_symbol_1',
                            type: 'rect',
                            rect: ['376px', '53px', '101px', '113px', 'auto', 'auto'],
                            transform: [[],[],[],['0.48673','0.48673']]
                        },
                        {
                            id: 'all_cloud_2',
                            type: 'image',
                            rect: ['180px', '749px', '122px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all_cloud_2.png",'0px','0px']
                        },
                        {
                            id: 'all_server_3',
                            type: 'image',
                            rect: ['440px', '882px', '95px', '128px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all_server_3.png",'0px','0px']
                        },
                        {
                            id: 'all_tree',
                            type: 'image',
                            rect: ['733px', '823px', '149px', '173px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all_tree.png",'0px','0px']
                        },
                        {
                            id: 'all-15',
                            type: 'image',
                            rect: ['27px', '833px', '137px', '157px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all-15.png",'0px','0px']
                        },
                        {
                            id: 'all__spruce',
                            type: 'image',
                            rect: ['54px', '712px', '74px', '111px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all_%20spruce.png",'0px','0px']
                        },
                        {
                            id: 'all_cloud_1',
                            type: 'image',
                            rect: ['570px', '898px', '122px', '99px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"all_cloud_1.png",'0px','0px']
                        },
                        {
                            id: 'Dollars_anim',
                            symbolName: 'Dollars_anim',
                            type: 'rect',
                            rect: ['45px', '16px', '215', '166', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'cashe-01_symbol_1',
                            symbolName: 'cashe-01_symbol_1',
                            type: 'rect',
                            rect: ['700px', '245px', '240px', '197px', 'auto', 'auto']
                        },
                        {
                            id: 'lamp_symbol_1',
                            symbolName: 'lamp_symbol_1',
                            type: 'rect',
                            rect: ['480px', '570px', '246px', '175px', 'auto', 'auto']
                        },
                        {
                            id: 'upgrade_fps4_symbol_1',
                            symbolName: 'upgrade_fps4_symbol_1',
                            type: 'rect',
                            rect: ['250px', '229px', '208px', '201px', 'auto', 'auto']
                        },
                        {
                            id: 'office365-013_symbol_1',
                            symbolName: 'office365-013_symbol_1',
                            type: 'rect',
                            rect: ['25px', '600px', '198px', '142px', 'auto', 'auto']
                        },
                        {
                            id: 'lock',
                            symbolName: 'lock',
                            type: 'rect',
                            rect: ['540px', '265px', '160', '182', 'auto', 'auto'],
                            transform: [[],[],[],['0.54395','0.54395']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '950px', '810px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(50,51,58,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                            [ "eid356", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${cent2_symbol_1}', [] ] ],
                            [ "eid362", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${yellow_arrow-01_symbol_1}', [] ] ],
                            [ "eid424", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${cashe-01_symbol_1}', ['stop'] ] ],
                            [ "eid357", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${shesterni_symbol_1}', [] ] ],
                            [ "eid466", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${lamp_symbol_1}', ['start'] ] ],
                            [ "eid361", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Rocket2_symbol_1}', [] ] ],
                            [ "eid360", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${smoke2_symbol_1}', [] ] ],
                            [ "eid738", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${upgrade_fps4_symbol_1}', [] ] ],
                            [ "eid359", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Location_symbol_1}', [] ] ],
                            [ "eid358", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Dollars_anim}', [] ] ],
                            [ "eid759", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${office365-013_symbol_1}', [] ] ]
                    ]
                }
            },
            "cent2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cent',
                            rect: ['0px', '0px', '2565px', '143px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cent2.png', '0px', '0px', '2565px', '143px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '143px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid71",
                            "width",
                            0,
                            0,
                            "linear",
                            "${cent}",
                            '0px',
                            '135px'
                        ],
                        [
                            "eid70",
                            "height",
                            0,
                            0,
                            "linear",
                            "${cent}",
                            '0px',
                            '143px'
                        ],
                        [
                            "eid72",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${cent}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid73",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${cent}",
                            [0,0],
                            [-135,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${cent}",
                            [-135,0],
                            [-270,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid75",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${cent}",
                            [-270,0],
                            [-405,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid76",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${cent}",
                            [-405,0],
                            [-540,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid77",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${cent}",
                            [-540,0],
                            [-675,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid78",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${cent}",
                            [-675,0],
                            [-810,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid79",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${cent}",
                            [-810,0],
                            [-945,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid80",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${cent}",
                            [-945,0],
                            [-1080,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid81",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${cent}",
                            [-1080,0],
                            [-1215,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid82",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${cent}",
                            [-1215,0],
                            [-1350,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid83",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${cent}",
                            [-1350,0],
                            [-1485,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid84",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${cent}",
                            [-1485,0],
                            [-1620,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid85",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${cent}",
                            [-1620,0],
                            [-1755,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid86",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${cent}",
                            [-1755,0],
                            [-1890,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid87",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${cent}",
                            [-1890,0],
                            [-2025,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid88",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${cent}",
                            [-2025,0],
                            [-2160,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid89",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${cent}",
                            [-2160,0],
                            [-2295,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid90",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${cent}",
                            [-2295,0],
                            [-2430,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Rocket2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Rocket',
                            rect: ['0px', '0px', '1641px', '258px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Rocket2.png', '0px', '0px', '1641px', '258px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '258px']
                        }
                    }
                },
                timeline: {
                    duration: 791,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid91",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rocket}",
                            '0px',
                            '258px'
                        ],
                        [
                            "eid93",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Rocket}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid94",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${Rocket}",
                            [0,0],
                            [-82,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid95",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${Rocket}",
                            [-82,0],
                            [-164,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid96",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${Rocket}",
                            [-164,0],
                            [-246,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid97",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${Rocket}",
                            [-246,0],
                            [-328,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid98",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${Rocket}",
                            [-328,0],
                            [-410,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid99",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${Rocket}",
                            [-410,0],
                            [-492,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid100",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${Rocket}",
                            [-492,0],
                            [-574,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid101",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${Rocket}",
                            [-574,0],
                            [-656,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid102",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${Rocket}",
                            [-656,0],
                            [-738,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid103",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${Rocket}",
                            [-738,0],
                            [-820,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid104",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${Rocket}",
                            [-820,0],
                            [-902,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid105",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${Rocket}",
                            [-902,0],
                            [-984,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid106",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${Rocket}",
                            [-984,0],
                            [-1066,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid107",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${Rocket}",
                            [-1066,0],
                            [-1148,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid108",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${Rocket}",
                            [-1148,0],
                            [-1230,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid109",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${Rocket}",
                            [-1230,0],
                            [-1312,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid110",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${Rocket}",
                            [-1312,0],
                            [-1394,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid111",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${Rocket}",
                            [-1394,0],
                            [-1476,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid112",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${Rocket}",
                            [-1476,0],
                            [-1558,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid92",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rocket}",
                            '0px',
                            '82px'
                        ]
                    ]
                }
            },
            "Location_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Location',
                            rect: ['0px', '0px', '1780px', '170px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Location.png', '0px', '0px', '1780px', '170px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '89px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 791,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid117",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Location}",
                            '0px',
                            '170px'
                        ],
                        [
                            "eid119",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${Location}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid120",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${Location}",
                            [0,0],
                            [-89,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid121",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${Location}",
                            [-89,0],
                            [-178,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid122",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${Location}",
                            [-178,0],
                            [-267,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid123",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${Location}",
                            [-267,0],
                            [-356,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid124",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${Location}",
                            [-356,0],
                            [-445,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid125",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${Location}",
                            [-445,0],
                            [-534,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid126",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${Location}",
                            [-534,0],
                            [-623,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid127",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${Location}",
                            [-623,0],
                            [-712,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid128",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${Location}",
                            [-712,0],
                            [-801,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid129",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${Location}",
                            [-801,0],
                            [-890,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid130",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${Location}",
                            [-890,0],
                            [-979,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid131",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${Location}",
                            [-979,0],
                            [-1068,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid132",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${Location}",
                            [-1068,0],
                            [-1157,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid133",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${Location}",
                            [-1157,0],
                            [-1246,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid134",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${Location}",
                            [-1246,0],
                            [-1335,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid135",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${Location}",
                            [-1335,0],
                            [-1424,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid136",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${Location}",
                            [-1424,0],
                            [-1513,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid137",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${Location}",
                            [-1513,0],
                            [-1602,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid138",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${Location}",
                            [-1602,0],
                            [-1691,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid118",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Location}",
                            '0px',
                            '89px'
                        ]
                    ]
                }
            },
            "yellow_arrow-01_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'yellow_arrow-01',
                            rect: ['0px', '0px', '980px', '84px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/yellow_arrow-01.png', '0px', '0px', '980px', '84px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '49px', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 791,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid144",
                            "width",
                            0,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            '0px',
                            '49px'
                        ],
                        [
                            "eid143",
                            "height",
                            0,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            '0px',
                            '84px'
                        ],
                        [
                            "eid145",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid146",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [0,0],
                            [-49,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid147",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-49,0],
                            [-98,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid148",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-98,0],
                            [-147,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid149",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-147,0],
                            [-196,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid150",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-196,0],
                            [-245,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid151",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-245,0],
                            [-294,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid152",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-294,0],
                            [-343,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid153",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-343,0],
                            [-392,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid154",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-392,0],
                            [-441,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid155",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-441,0],
                            [-490,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid156",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-490,0],
                            [-539,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid157",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-539,0],
                            [-588,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid158",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-588,0],
                            [-637,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid159",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-637,0],
                            [-686,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid160",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-686,0],
                            [-735,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid161",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-735,0],
                            [-784,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid162",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-784,0],
                            [-833,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid163",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-833,0],
                            [-882,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid164",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${yellow_arrow-01}",
                            [-882,0],
                            [-931,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "shesterni_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '2005px', '277px', 'auto', 'auto'],
                            id: 'shesterni',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shesterni.png', '0px', '0px', '2005px', '277px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '147px', '199px']
                        }
                    }
                },
                timeline: {
                    duration: 458,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid210",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${shesterni}",
                            [0,0],
                            [-10,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid211",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${shesterni}",
                            [-10,-32],
                            [-177,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid212",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${shesterni}",
                            [-177,-32],
                            [-344,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid213",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${shesterni}",
                            [-344,-32],
                            [-511,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid214",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${shesterni}",
                            [-511,-32],
                            [-678,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid215",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${shesterni}",
                            [-678,-32],
                            [-845,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid216",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${shesterni}",
                            [-845,-32],
                            [-1012,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid217",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${shesterni}",
                            [-1012,-32],
                            [-1179,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid218",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${shesterni}",
                            [-1179,-32],
                            [-1346,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid219",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${shesterni}",
                            [-1346,-32],
                            [-1513,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid220",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${shesterni}",
                            [-1513,-32],
                            [-1680,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid221",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${shesterni}",
                            [-1680,-32],
                            [-1847,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid209",
                            "width",
                            0,
                            0,
                            "linear",
                            "${shesterni}",
                            '0px',
                            '147px'
                        ],
                        [
                            "eid208",
                            "height",
                            0,
                            0,
                            "linear",
                            "${shesterni}",
                            '0px',
                            '199px'
                        ]
                    ]
                }
            },
            "smoke2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '1815px', 'auto', 'auto'],
                            id: 'smoke',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/smoke2.png', '0px', '0px', '101px', '1815px', 'no-repeat']
                        },
                        {
                            rect: ['0px', '0px', '101px', '1815px', 'auto', 'auto'],
                            id: 'smokeCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/smoke2.png', '0px', '0px', '101px', '1815px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1083,
                    autoPlay: true,
                    labels: {
                        "first_start": 0,
                        "start": 166
                    },
                    data: [
                        [
                            "eid293",
                            "width",
                            0,
                            0,
                            "linear",
                            "${smokeCopy}",
                            '101px',
                            '101px'
                        ],
                        [
                            "eid276",
                            "height",
                            0,
                            0,
                            "linear",
                            "${smokeCopy}",
                            '113px',
                            '113px'
                        ],
                        [
                            "eid224",
                            "height",
                            0,
                            0,
                            "linear",
                            "${smoke}",
                            '0px',
                            '113px'
                        ],
                        [
                            "eid226",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${smoke}",
                            [0,0],
                            [0,-5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid227",
                            "background-position",
                            499,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-5],
                            [0,-118],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid228",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-118],
                            [0,-231],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid229",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-231],
                            [0,-344],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid230",
                            "background-position",
                            624,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-344],
                            [0,-457],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid231",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-457],
                            [0,-570],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid232",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-570],
                            [0,-683],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid233",
                            "background-position",
                            749,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-683],
                            [0,-796],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid234",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-796],
                            [0,-909],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid235",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-909],
                            [0,-1022],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid236",
                            "background-position",
                            874,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-1022],
                            [0,-1135],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid237",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-1135],
                            [0,-1248],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid238",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-1248],
                            [0,-1361],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid239",
                            "background-position",
                            999,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-1361],
                            [0,-1474],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid240",
                            "background-position",
                            1041,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-1474],
                            [0,-1587],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid241",
                            "background-position",
                            1083,
                            0,
                            "linear",
                            "${smoke}",
                            [0,-1587],
                            [0,-1700],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid277",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-5],
                            [0,-5],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid278",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-5],
                            [0,-118],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid279",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-118],
                            [0,-231],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid280",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-231],
                            [0,-344],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid281",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-344],
                            [0,-457],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid282",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-457],
                            [0,-570],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid283",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-570],
                            [0,-683],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid284",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-683],
                            [0,-796],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid285",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-796],
                            [0,-909],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid286",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-909],
                            [0,-1022],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid287",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-1022],
                            [0,-1135],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid288",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-1135],
                            [0,-1248],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid289",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-1248],
                            [0,-1361],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid290",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-1361],
                            [0,-1474],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid291",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-1474],
                            [0,-1587],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid292",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${smokeCopy}",
                            [0,-1587],
                            [0,-1700],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid225",
                            "width",
                            0,
                            0,
                            "linear",
                            "${smoke}",
                            '0px',
                            '101px'
                        ]
                    ]
                }
            },
            "S-012_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'S-01',
                            rect: ['0px', '0px', '121px', '2502px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S-012.png', '0px', '0px', '121px', '2502px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '121px', '139px']
                        }
                    }
                },
                timeline: {
                    duration: 708,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid247",
                            "width",
                            0,
                            0,
                            "linear",
                            "${S-01}",
                            '0px',
                            '121px'
                        ],
                        [
                            "eid246",
                            "height",
                            0,
                            0,
                            "linear",
                            "${S-01}",
                            '0px',
                            '139px'
                        ],
                        [
                            "eid248",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${S-01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid249",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${S-01}",
                            [0,0],
                            [0,-139],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid250",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-139],
                            [0,-278],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid251",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-278],
                            [0,-417],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid252",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-417],
                            [0,-556],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid253",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-556],
                            [0,-695],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid254",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-695],
                            [0,-834],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid255",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-834],
                            [0,-973],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid256",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-973],
                            [0,-1112],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid257",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1112],
                            [0,-1251],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid258",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1251],
                            [0,-1390],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid259",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1390],
                            [0,-1529],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid260",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1529],
                            [0,-1668],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid261",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1668],
                            [0,-1807],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid262",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1807],
                            [0,-1946],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid263",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-1946],
                            [0,-2085],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid264",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-2085],
                            [0,-2224],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid265",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${S-01}",
                            [0,-2224],
                            [0,-2363],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Dollars_anim": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['125px', '16px', '121px', '139px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'S-012_symbol_1',
                            symbolName: 'S-012_symbol_1',
                            opacity: '1',
                            transform: [[], ['2'], [], ['0.53237', '0.53237']]
                        },
                        {
                            type: 'image',
                            id: 'all_Server_12',
                            rect: ['-15px', '31px', '96px', '135px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/all_Server_12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '166px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "start": 10
                    },
                    data: [
                        [
                            "eid339",
                            "top",
                            10,
                            376,
                            "linear",
                            "${S-012_symbol_1}",
                            '11px',
                            '32px'
                        ],
                        [
                            "eid347",
                            "top",
                            386,
                            363,
                            "linear",
                            "${S-012_symbol_1}",
                            '32px',
                            '33px'
                        ],
                        [
                            "eid343",
                            "top",
                            749,
                            403,
                            "linear",
                            "${S-012_symbol_1}",
                            '33px',
                            '34px'
                        ],
                        [
                            "eid345",
                            "top",
                            1152,
                            348,
                            "linear",
                            "${S-012_symbol_1}",
                            '34px',
                            '16px'
                        ],
                        [
                            "eid350",
                            "opacity",
                            10,
                            0,
                            "linear",
                            "${S-012_symbol_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid349",
                            "opacity",
                            1152,
                            348,
                            "linear",
                            "${S-012_symbol_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid338",
                            "left",
                            10,
                            376,
                            "linear",
                            "${S-012_symbol_1}",
                            '-12px',
                            '23px'
                        ],
                        [
                            "eid346",
                            "left",
                            386,
                            363,
                            "linear",
                            "${S-012_symbol_1}",
                            '23px',
                            '56px'
                        ],
                        [
                            "eid342",
                            "left",
                            749,
                            403,
                            "linear",
                            "${S-012_symbol_1}",
                            '56px',
                            '93px'
                        ],
                        [
                            "eid344",
                            "left",
                            1152,
                            348,
                            "linear",
                            "${S-012_symbol_1}",
                            '93px',
                            '125px'
                        ]
                    ]
                }
            },
            "cashe-01_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cashe-01',
                            rect: ['0px', '0px', '240px', '4137px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'cashe/cashe-01.png', '0px', '0px', '240px', '4137px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '240px', '197px']
                        }
                    }
                },
                timeline: {
                    duration: 833,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "stop": 791
                    },
                    data: [
                        [
                            "eid374",
                            "width",
                            0,
                            0,
                            "linear",
                            "${cashe-01}",
                            '0px',
                            '240px'
                        ],
                        [
                            "eid373",
                            "height",
                            0,
                            0,
                            "linear",
                            "${cashe-01}",
                            '0px',
                            '197px'
                        ],
                        [
                            "eid375",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid376",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,0],
                            [0,-197],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid377",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-197],
                            [0,-394],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid378",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-394],
                            [0,-591],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid379",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-591],
                            [0,-788],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid380",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-788],
                            [0,-985],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid381",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-985],
                            [0,-1182],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid382",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-1182],
                            [0,-1379],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid383",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-1379],
                            [0,-1576],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid384",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-1576],
                            [0,-1773],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid385",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-1773],
                            [0,-1970],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid386",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-1970],
                            [0,-2167],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid387",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-2167],
                            [0,-2364],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid388",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-2364],
                            [0,-2561],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid389",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-2561],
                            [0,-2758],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid390",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-2758],
                            [0,-2955],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid391",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-2955],
                            [0,-3152],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid392",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-3152],
                            [0,-3349],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid393",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-3349],
                            [0,-3546],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid394",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-3546],
                            [0,-3743],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid395",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${cashe-01}",
                            [0,-3743],
                            [0,-3940],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "lamp_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'lamp',
                            rect: ['0px', '0px', '246px', '1400px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'lamp/lamp.png', '0px', '0px', '246px', '1400px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '246px', '175px']
                        }
                    }
                },
                timeline: {
                    duration: 292,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid454",
                            "height",
                            0,
                            0,
                            "linear",
                            "${lamp}",
                            '0px',
                            '175px'
                        ],
                        [
                            "eid455",
                            "width",
                            0,
                            0,
                            "linear",
                            "${lamp}",
                            '0px',
                            '246px'
                        ],
                        [
                            "eid456",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${lamp}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid457",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${lamp}",
                            [0,0],
                            [0,-175],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid458",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${lamp}",
                            [0,-175],
                            [0,-350],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid459",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${lamp}",
                            [0,-350],
                            [0,-525],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid460",
                            "background-position",
                            167,
                            0,
                            "linear",
                            "${lamp}",
                            [0,-525],
                            [0,-700],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid461",
                            "background-position",
                            209,
                            0,
                            "linear",
                            "${lamp}",
                            [0,-700],
                            [0,-875],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid462",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${lamp}",
                            [0,-875],
                            [0,-1050],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid463",
                            "background-position",
                            292,
                            0,
                            "linear",
                            "${lamp}",
                            [0,-1050],
                            [0,-1225],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "office365-012_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'office365-01',
                            type: 'image',
                            rect: ['0px', '0px', '198px', '2556px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/office365-012.png', '0px', '0px', '198px', '2556px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '198px', '142px']
                        }
                    }
                },
                timeline: {
                    duration: 708,
                    autoPlay: true,
                    labels: {
                        "stop": 708
                    },
                    data: [
                        [
                            "eid556",
                            "height",
                            0,
                            0,
                            "linear",
                            "${office365-01}",
                            '0px',
                            '142px'
                        ],
                        [
                            "eid558",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid559",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,0],
                            [0,-142],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid560",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-142],
                            [0,-284],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid561",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-284],
                            [0,-426],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid562",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-426],
                            [0,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid563",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-568],
                            [0,-710],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid564",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-710],
                            [0,-852],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid565",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-852],
                            [0,-994],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid566",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-994],
                            [0,-1136],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid567",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1136],
                            [0,-1278],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid568",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1278],
                            [0,-1420],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid569",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1420],
                            [0,-1562],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid570",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1562],
                            [0,-1704],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid571",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1704],
                            [0,-1846],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid572",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1846],
                            [0,-1988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid573",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1988],
                            [0,-2130],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid574",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-2130],
                            [0,-2272],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid575",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-2272],
                            [0,-2414],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid557",
                            "width",
                            0,
                            0,
                            "linear",
                            "${office365-01}",
                            '0px',
                            '198px'
                        ]
                    ]
                }
            },
            "upgrade_fps4_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '208px', '3216px', 'auto', 'auto'],
                            id: 'upgrade_fps',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/upgrade_fps4.png', '0px', '0px', '208px', '3216px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '208px', '201px']
                        }
                    }
                },
                timeline: {
                    duration: 1185,
                    autoPlay: true,
                    labels: {
                        "rev": 670,
                        "stop": 1185
                    },
                    data: [
                        [
                            "eid705",
                            "height",
                            0,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            '0px',
                            '201px'
                        ],
                        [
                            "eid707",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid708",
                            "background-position",
                            42,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,0],
                            [0,-201],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid709",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-201],
                            [0,-402],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid710",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-402],
                            [0,-603],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid711",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-603],
                            [0,-804],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid712",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-804],
                            [0,-1005],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid713",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1005],
                            [0,-1206],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid714",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1206],
                            [0,-1407],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid715",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1407],
                            [0,-1608],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid716",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1608],
                            [0,-1809],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid717",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1809],
                            [0,-2010],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid718",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2010],
                            [0,-2211],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid719",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2211],
                            [0,-2412],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid720",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2412],
                            [0,-2613],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid721",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2613],
                            [0,-2814],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid722",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2814],
                            [0,-3015],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid723",
                            "background-position",
                            670,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-3015],
                            [0,-2814],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid724",
                            "background-position",
                            710,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2814],
                            [0,-2613],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid725",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2613],
                            [0,-2412],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid726",
                            "background-position",
                            785,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2412],
                            [0,-2211],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid727",
                            "background-position",
                            822,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2211],
                            [0,-2010],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid728",
                            "background-position",
                            860,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-2010],
                            [0,-1809],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid729",
                            "background-position",
                            892,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1809],
                            [0,-1608],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid730",
                            "background-position",
                            927,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1608],
                            [0,-1407],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid731",
                            "background-position",
                            960,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1407],
                            [0,-1206],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid732",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1206],
                            [0,-1005],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid733",
                            "background-position",
                            1039,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-1005],
                            [0,-804],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid734",
                            "background-position",
                            1077,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-804],
                            [0,-603],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid735",
                            "background-position",
                            1113,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-603],
                            [0,-402],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid736",
                            "background-position",
                            1150,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-402],
                            [0,-201],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid737",
                            "background-position",
                            1185,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            [0,-201],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid706",
                            "width",
                            0,
                            0,
                            "linear",
                            "${upgrade_fps}",
                            '0px',
                            '208px'
                        ]
                    ]
                }
            },
            "office365-013_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '198px', '2556px', 'auto', 'auto'],
                            id: 'office365-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/office365-013.png', '0px', '0px', '198px', '2556px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '198px', '142px']
                        }
                    }
                },
                timeline: {
                    duration: 708,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid739",
                            "height",
                            0,
                            0,
                            "linear",
                            "${office365-01}",
                            '0px',
                            '142px'
                        ],
                        [
                            "eid741",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid742",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,0],
                            [0,-142],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid743",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-142],
                            [0,-284],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid744",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-284],
                            [0,-426],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid745",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-426],
                            [0,-568],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid746",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-568],
                            [0,-710],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid747",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-710],
                            [0,-852],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid748",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-852],
                            [0,-994],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid749",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-994],
                            [0,-1136],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid750",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1136],
                            [0,-1278],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid751",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1278],
                            [0,-1420],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid752",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1420],
                            [0,-1562],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid753",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1562],
                            [0,-1704],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid754",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1704],
                            [0,-1846],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid755",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1846],
                            [0,-1988],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid756",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-1988],
                            [0,-2130],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid757",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-2130],
                            [0,-2272],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid758",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${office365-01}",
                            [0,-2272],
                            [0,-2414],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid740",
                            "width",
                            0,
                            0,
                            "linear",
                            "${office365-01}",
                            '0px',
                            '198px'
                        ]
                    ]
                }
            },
            "ru4k-01_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ru4k-01',
                            type: 'image',
                            rect: ['0px', '0px', '160px', '4551px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ru4k-01.png', '0px', '0px', '160px', '4551px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '160px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid761",
                            "width",
                            0,
                            0,
                            "linear",
                            "${ru4k-01}",
                            '0px',
                            '160px'
                        ],
                        [
                            "eid760",
                            "height",
                            0,
                            0,
                            "linear",
                            "${ru4k-01}",
                            '0px',
                            '182px'
                        ],
                        [
                            "eid762",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [0,0],
                            [-0,-0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid763",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-0],
                            [-0,-182],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid764",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-182],
                            [-0,-364],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid765",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-364],
                            [-0,-546],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid766",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-546],
                            [-0,-728],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid767",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-728],
                            [-0,-910],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid768",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-910],
                            [-0,-1092],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid769",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-1092],
                            [-0,-1274],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid770",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-1274],
                            [-0,-1456],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid771",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-1456],
                            [-0,-1638],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid772",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-1638],
                            [-0,-1820],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid773",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-1820],
                            [-0,-2002],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid774",
                            "background-position",
                            500,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-2002],
                            [-0,-2184],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid775",
                            "background-position",
                            541,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-2184],
                            [-0,-2366],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid776",
                            "background-position",
                            583,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-2366],
                            [-0,-2548],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid777",
                            "background-position",
                            625,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-2548],
                            [-0,-2730],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid778",
                            "background-position",
                            666,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-2730],
                            [-0,-2912],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid779",
                            "background-position",
                            708,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-2912],
                            [-0,-3094],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid780",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-3094],
                            [-0,-3276],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid781",
                            "background-position",
                            791,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-3276],
                            [-0,-3458],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid782",
                            "background-position",
                            833,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-3458],
                            [-0,-3640],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid783",
                            "background-position",
                            875,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-3640],
                            [-0,-3822],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid784",
                            "background-position",
                            916,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-3822],
                            [-0,-4004],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid785",
                            "background-position",
                            958,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-4004],
                            [-0,-4186],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid786",
                            "background-position",
                            1000,
                            0,
                            "linear",
                            "${ru4k-01}",
                            [-0,-4186],
                            [-0,-4368],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "lock": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ru4k-25',
                            type: 'image',
                            rect: ['-81px', '-85px', '289px', '391px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ru4k-25.png', '0px', '0px']
                        },
                        {
                            id: 'ru4k-01_symbol_1',
                            symbolName: 'ru4k-01_symbol_1',
                            rect: ['0px', '0px', '160px', '182px', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '160px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                            [ "eid792", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ru4k-01_symbol_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Interactive%20icons_edgeActions.js");
})("EDGE-920607168");
