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
            color: '#000000'
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
            depth: 25,
            height: 5,
            width: 25
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
        'stair-step': {}
    },
    mappings: {
        position: 'stair-step.position',
        rotation: 'stair-step.rotation'
    }
});

AFRAME.registerComponent('stair-step', {
    schema: {
        position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
        rotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
    },

    init: function () {
        const el = this.el;
        const data = this.data;

        // Apply parent transform
        el.setAttribute('position', data.position);
        el.setAttribute('rotation', data.rotation);

        //
        // TOP STEP
        //
        const top = document.createElement('a-box');
        top.setAttribute('position', '0 1.5 0.1');
        top.setAttribute('depth', '2.3');
        top.setAttribute('height', '.5');
        top.setAttribute('width', '3.95');
        top.setAttribute('src', '#StoneTop');
        top.setAttribute('static-body', '');

        //
        // BOTTOM STEP
        //
        const bottom = document.createElement('a-box');
        bottom.setAttribute('position', '0 0.5 0');
        bottom.setAttribute('depth', '2');
        bottom.setAttribute('height', '2');
        bottom.setAttribute('width', '4');
        bottom.setAttribute('src', '#StoneBottom');
        bottom.setAttribute('static-body', '');

        // Add children to this entity
        el.appendChild(top);
        el.appendChild(bottom);
    }
});