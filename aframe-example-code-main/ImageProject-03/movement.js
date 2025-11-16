AFRAME.registerComponent('jump', {
  schema: {
    speed:   {type: 'number', default: 14},      // Initial jump speed
    gravity: {type: 'number', default: -9.8},   // Gravity force
  },

  init: function () {
    this.velocityY = 0;
    this.isJumping = false;
    this.groundY = null;

    this.onKeyDown = this.onKeyDown.bind(this);
    window.addEventListener('keydown', this.onKeyDown);
  },

  remove: function () {
    window.removeEventListener('keydown', this.onKeyDown);
  },

  onKeyDown: function (e) {
    // Space bar
    if (e.code !== 'Space') return;

    // Don't start a new jump while already jumping
    if (this.isJumping) return;

    const pos = this.el.object3D.position;

    // Use the CURRENT height as the ground level
    this.groundY = pos.y;
    this.isJumping = true;
    this.velocityY = this.data.speed;
  },

  tick: function (time, delta) {
    if (!this.isJumping) return; // Do nothing when not jumping

    const el = this.el;
    const pos = el.object3D.position;
    const dt = delta / 1000;

    // Apply gravity
    this.velocityY += this.data.gravity * dt;

    // Move the player up/down
    pos.y += this.velocityY * dt;

    // Land on the ground we started from
    if (pos.y <= this.groundY) {
      pos.y = this.groundY;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }
});

AFRAME.registerComponent('log-collisions', {
  init: function () {
    this.el.addEventListener('collide', (e) => {
      console.log('Collided with:', e.detail.body.el);
    });
  }
});
