export const data = [
    {
        locked: false,
        layers: {
            ROOT: {
                type: { resolvedName: 'RootLayer' },
                props: {
                    boxSize: { width: 1640, height: 924 },
                    position: { x: 0, y: 0 },
                    rotate: 0,
                    color: 'rgb(255, 255, 255)',
                    image: null,
                },
                hidden: false,
                locked: false,
                child: [
                    '35b18a84-6a91-4fc0-89bf-05b2769c3179',
                    '6b774af9-623d-41b7-9daa-fa7f392be460',
                    'fb5dfcaf-65c8-4ce1-90f4-23ab1e65052b',
                    '812d60e6-fa51-43f6-ac5e-53a536d5a74b',
                ],
                parent: null,
            },
            '35b18a84-6a91-4fc0-89bf-05b2769c3179': {
                type: { resolvedName: 'ShapeLayer' },
                props: {
                    shape: 'rectangle',
                    position: { x: -41, y: 652 },
                    boxSize: { width: 1766, height: 272.57142857142856, x: -41, y: 652 },
                    rotate: 0,
                    color: 'rgb(253, 235, 207)',
                },
                hidden: false,
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '6b774af9-623d-41b7-9daa-fa7f392be460': {
                type: { resolvedName: 'TextLayer' },
                props: {
                    text: '<p style="text-align: center;font-family: Bevan;font-size: 42px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: em;"><span style="color: rgb(0, 0, 0);">LidoJS</span></p>',
                    position: { x: 513.1390728476821, y: 256.9139072847683 },
                    boxSize: {
                        width: 534.3009995574356,
                        height: 98.32149307645994,
                        x: 554.364238410596,
                        y: 200.2516556291391,
                    },
                    scale: 1.6664659843467788,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Bevan',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Bevan/Bevan-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [42],
                    effect: {
                        name: 'splice',
                        settings: { thickness: 59, offset: 45, direction: 45, color: 'rgb(67, 127, 173)' },
                    },
                },
                hidden: false,
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            'fb5dfcaf-65c8-4ce1-90f4-23ab1e65052b': {
                type: { resolvedName: 'TextLayer' },
                props: {
                    text: '<p style="font-family: Oswald; color: rgb(0, 0, 0); font-size: 18px; text-transform: uppercase; text-align: center; line-height: 1.4; letter-spacing: 0;"><strong>DEVELOPED WITH REACTJS</strong></p>',
                    position: { x: 617.8019861388137, y: 355.2354003612282 },
                    boxSize: {
                        width: 324.9751729751722,
                        height: 32.507936507936506,
                        x: 660.3312392930668,
                        y: 450.63786397561233,
                    },
                    scale: 1.2503052503052503,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Oswald',
                            fonts: [
                                {
                                    style: 'Bold',
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Bold.woff2',
                                    ],
                                },
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Oswald/Oswald-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [18],
                    effect: null,
                },
                hidden: false,
                locked: false,
                child: [],
                parent: 'ROOT',
            },
            '812d60e6-fa51-43f6-ac5e-53a536d5a74b': {
                type: { resolvedName: 'TextLayer' },
                props: {
                    text: '<p style="text-align: center;font-family: Actor;font-size: 18px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: em;"><span style="color: rgb(0, 0, 0);">https://lidojs.com</span></p>',
                    position: { x: 340.19732436693374, y: 772.4945054945055 },
                    boxSize: { width: 892.1844965189322, height: 58.791208791208796, x: 588.7585409439712, y: 787 },
                    scale: 2.3516483516483517,
                    rotate: 0,
                    fonts: [
                        {
                            name: 'Actor',
                            fonts: [
                                {
                                    urls: [
                                        'https://api-gilt-one.vercel.app/assets/liquid-editor/fonts/raw/master/src/fonts/Actor/Actor-Regular.woff2',
                                    ],
                                },
                            ],
                        },
                    ],
                    colors: ['rgb(0, 0, 0)'],
                    fontSizes: [18],
                    effect: null,
                },
                hidden: false,
                locked: false,
                child: [],
                parent: 'ROOT',
            },
        },
    },
];
