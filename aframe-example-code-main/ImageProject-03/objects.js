// objects.js

// Ground plane primitive
AFRAME.registerPrimitive('a-ground-plane', {
    defaultComponents: {
        geometry: {
            primitive: 'plane',
            width: 50,
            height: 50
        },
        material: {
            src: '#Grass'
        },
        rotation: { x: -90, y: 0, z: 0 },
        'static-body': {}
    },
    mappings: {
        position: 'position',
        rotation: 'rotation',
        width: 'geometry.width',
        height: 'geometry.height',
        color: 'material.color'
    }
});

// Tea plane primitive
AFRAME.registerPrimitive('a-tea-plane', {
    defaultComponents: {
        geometry: {
            primitive: 'box',
            depth: 50,
            height: 4,
            width: 50
        },
        material: {
            src: '#Grass'
        },
        'static-body': {}
    },
    mappings: {
        position: 'position',
        rotation: 'rotation',
        src: 'material.src',
        depth: 'geometry.depth',
        height: 'geometry.height',
        width: 'geometry.width'
    }
});

// Auto Builds Steps
AFRAME.registerPrimitive('a-stair-step', {
    defaultComponents: {
        'stair-step': {},
        'static-body': {}
    },
    mappings: {
        position: 'position',
        rotation: 'rotation'
    }
});

AFRAME.registerComponent('stair-step', {
    init: function () {
        const el = this.el;

        //
        // TOP STEP
        //
        const top = document.createElement('a-box');
        top.setAttribute('position', '0 1.5 0.1');
        top.setAttribute('depth', '2.3');
        top.setAttribute('height', '.5');
        top.setAttribute('width', '3.95');
        top.setAttribute('src', '#StoneTop');

        //
        // BOTTOM STEP
        //
        const bottom = document.createElement('a-box');
        bottom.setAttribute('position', '0 0.5 0');
        bottom.setAttribute('depth', '2');
        bottom.setAttribute('height', '2');
        bottom.setAttribute('width', '4');
        bottom.setAttribute('src', '#StoneBottom');

        // Add children to this entity
        el.appendChild(top);
        el.appendChild(bottom);
    }
});

// Light Pole Auto Build
AFRAME.registerPrimitive('a-table', {
    defaultComponents: {
        'table': {},
        'static-body': {}
    },
    mappings: {
        position: 'position',
        rotation: 'rotation'
    }
});

AFRAME.registerComponent('table', {
    init: function () {
        const el = this.el;

        //
        // Table Top
        //
        const tableTop = document.createElement('a-box');
        tableTop.setAttribute('position', '0 1 6');
        tableTop.setAttribute('rotation', '90 0 0');
        tableTop.setAttribute('depth', '.2');
        tableTop.setAttribute('height', '2');
        tableTop.setAttribute('width', '2');
        tableTop.setAttribute('src', '#DarkWood');

        //
        // Forward Right Leg
        //
        const forwardRightleg = document.createElement('a-box');
        forwardRightleg.setAttribute('position', '.8 .6 6.8');
        forwardRightleg.setAttribute('rotation', '0 0 0');
        forwardRightleg.setAttribute('depth', '.2');
        forwardRightleg.setAttribute('height', '1');
        forwardRightleg.setAttribute('width', '.2');
        forwardRightleg.setAttribute('src', '#DarkWood');
        
        //
        // Forward left Leg
        //
        const forwardLeftleg = document.createElement('a-box');
        forwardLeftleg.setAttribute('position', '-.8 .6 6.8');
        forwardLeftleg.setAttribute('rotation', '0 0 0');
        forwardLeftleg.setAttribute('depth', '.2');
        forwardLeftleg.setAttribute('height', '1');
        forwardLeftleg.setAttribute('width', '.2');
        forwardLeftleg.setAttribute('src', '#DarkWood');        
        
        //
        // Backward Right Leg
        //
        const backRightleg = document.createElement('a-box');
        backRightleg.setAttribute('position', '.8 .6 5.2');
        backRightleg.setAttribute('rotation', '0 0 0');
        backRightleg.setAttribute('depth', '.2');
        backRightleg.setAttribute('height', '1');
        backRightleg.setAttribute('width', '.2');
        backRightleg.setAttribute('src', '#DarkWood');
        
        //
        // backward left Leg
        //
        const backLeftleg = document.createElement('a-box');
        backLeftleg.setAttribute('position', '-.8 .6 5.2');
        backLeftleg.setAttribute('rotation', '0 0 0');
        backLeftleg.setAttribute('depth', '.2');
        backLeftleg.setAttribute('height', '1');
        backLeftleg.setAttribute('width', '.2');
        backLeftleg.setAttribute('src', '#DarkWood');        
        
        el.appendChild(tableTop);
        el.appendChild(forwardLeftleg);
        el.appendChild(forwardRightleg);
        el.appendChild(backLeftleg);
        el.appendChild(backRightleg);
    }
});

// Light Pole Auto Build
AFRAME.registerPrimitive('a-light-pole', {
    defaultComponents: {
        'light-pole': {},
        'static-body': {}
    },
    mappings: {
        position: 'position',
        rotation: 'rotation'
    }
});

AFRAME.registerComponent('light-pole', {
    init: function () {
        const el = this.el;

        //
        // Base
        //
        const base = document.createElement('a-cone');
        base.setAttribute('position', '0 0 0');
        base.setAttribute('rotation', '0 0 0');
        base.setAttribute('radius-bottom', '2.5');
        base.setAttribute('height', '1');
        base.setAttribute('src', '#Metal');

        //
        // Pole
        //
        const pole = document.createElement('a-cylinder');
        pole.setAttribute('position', '0 2.7 0');
        pole.setAttribute('radius', '0.5');
        pole.setAttribute('height', '5');
        pole.setAttribute('src', '#Metal');

        //
        // Base Light
        //
        const baseLight = document.createElement('a-cone');
        baseLight.setAttribute('position', '0 4.9 0');
        baseLight.setAttribute('rotation', '180 0 0');
        baseLight.setAttribute('radius-bottom', '0.9');
        baseLight.setAttribute('radius-top', '0.5');
        baseLight.setAttribute('height', '1');
        baseLight.setAttribute('src', '#Metal');

        //
        // Light Container
        //
        const lightContainer = document.createElement('a-cylinder');
        lightContainer.setAttribute('position', '0 6.2 0');
        lightContainer.setAttribute('radius', '0.8');
        lightContainer.setAttribute('height', '1.5');
        lightContainer.setAttribute(
            'material',
            'color: #9176c5ff; opacity: 0.25; transparent: true; side: double'
        );

        //
        // Light
        //
        const light = document.createElement('a-sphere');
        light.setAttribute('position', '0 6.7 0');
        light.setAttribute('radius', '0.6');
        light.setAttribute('material', {
            color: '#7c68b6ff',
            emissive: '#7c68b6ff',
            emissiveIntensity: 2
        });

        //
        // Lamp Light
        //
        const lampLight = document.createElement('a-light');
        lampLight.setAttribute('type', 'point');
        lampLight.setAttribute('position', '0 5.9 0');
        lampLight.setAttribute('intensity', '3');
        lampLight.setAttribute('distance', '6');     // how far the glow reaches
        lampLight.setAttribute('color', '#7c68b6ff');

        //
        // ground Light
        //
        const downLight = document.createElement('a-light');
        downLight.setAttribute('type', 'spot');
        downLight.setAttribute('position', '0 5.9 0');
        downLight.setAttribute('rotation', '-90 0 0');   // point straight down
        downLight.setAttribute('angle', '45');
        downLight.setAttribute('penumbra', '0.4');
        downLight.setAttribute('intensity', '3');
        downLight.setAttribute('distance', '10');
        downLight.setAttribute('color', '#7c68b6ff');

        //
        // topC
        //
        const topC = document.createElement('a-cone');
        topC.setAttribute('position', '0 7.4 0');
        topC.setAttribute('rotation', '0 0 0');
        topC.setAttribute('radius-bottom', '0.9');
        topC.setAttribute('radius-top', '0.2');
        topC.setAttribute('height', '1');
        topC.setAttribute('src', '#Metal');

        //
        // Decor
        //
        const decor = document.createElement('a-sphere');
        decor.setAttribute('position', '0 8.1 0');
        decor.setAttribute('radius', '0.2');
        decor.setAttribute('src', '#Metal');

        // Add children to this entity
        el.appendChild(base);
        el.appendChild(pole);
        el.appendChild(baseLight);
        el.appendChild(lightContainer);
        el.appendChild(light);
        el.appendChild(lampLight);
        el.appendChild(downLight);
        el.appendChild(topC);
        el.appendChild(decor);
    }
});