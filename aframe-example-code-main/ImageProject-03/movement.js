AFRAME.registerComponent('jump', {
  schema: {
    speed:   {type: 'number', default: 5},      // Initial jump speed
    gravity: {type: 'number', default: -9.8},   // Gravity force
    groundY: {type: 'number', default: 1.6}     // Standing height
  },

  init: function () {
    this.velocityY = 0;
    this.isJumping = false;

    this.onKeyDown = this.onKeyDown.bind(this);
    window.addEventListener('keydown', this.onKeyDown);
  },

  remove: function () {
    window.removeEventListener('keydown', this.onKeyDown);
  },

  onKeyDown: function (e) {
    if (e.code === 'Space' && !this.isJumping) {
      this.isJumping = true;
      this.velocityY = this.data.speed;
    }
  },

  tick: function (time, dt) {
    if (!this.isJumping) return;

    const data = this.data;
    const el   = this.el;
    const dtSec = dt / 1000;

    // Apply gravity
    this.velocityY += data.gravity * dtSec;

    // Update position
    const pos = el.getAttribute('position');
    pos.y += this.velocityY * dtSec;

    // Check if landed
    if (pos.y <= data.groundY) {
      pos.y = data.groundY;
      this.velocityY = 0;
      this.isJumping = false;
    }

    el.setAttribute('position', pos);
  }
});