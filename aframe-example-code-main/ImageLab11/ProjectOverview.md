# Tea Among the Lavender Trees

## Project Details 

### Concept/Theme and Description:
Tea Among the Lavender Trees is a small interactive VR environment built with A-Frame, combining hand-crafted 3D objects, custom physics, and environmental styling to create a cozy forest-themed scene with tea tables, stairs, grass platforms, and a glowing streetlight.

The goal was to create a walkable VR space where the user can move, jump, explore platforms, climb stairs, and interact with custom-built environmental objects

### What I Built
1. A Complete VR Scene Using A-Frame
    - Implemented with A-Frame 1.0.4 for compatibility with the physics system.
    - Uses an equirectangular skybox composed from two landscape images blended and edited by me.
    - Designed an explorable space with stairs, grass platforms, a tea table, and a stylized streetlight.

2. Custom 3D Objects Built Programmatically
I constructed several objects using custom A-Frame components and primitives, instead of importing external models:

a-light-pole
- Built from cones, cylinders, spheres, and lighting elements.
- Includes:
    - Decorative metal base
    - Lamp enclosure
    - Glowing emissive light sphere
    - Ambient glow and downward spotlight for scene mood.

a-table
- Constructed using multiple box primitives for tabletop + legs.
- Textured using custom wood materials.

a-stair-step
- A two-piece stone staircase (top step + bottom step).
- Programmatically assembled for precise control.

a-tea-plane (grass platform)
- A large environment block using a grass texture.
- Functions as a raised terrain area the player can explore.

All object creation is handled in *objects.js* with reusable primitives and procedural assembly.

### Player Movement, Jumping & Controls
#### Movement
- Implemented using wasd-controls and look-controls.
- Tuned acceleration and camera height to match the character’s collider dimensions.

#### Jumping
I wrote a custom jump physics component (jump in movement.js) that:
- Applies upward velocity.
- Applies gravity over time.
- Uses the player’s current Y-position as the ground reference, allowing jumps from any height.
- Doesn't prevents infinite bouncing or falling through platforms.
    -Need to fix


### Physics & Collision Handling
#### Physics Challenges Solved
Originally, physics did not work correctly due to:
- Using newer A-Frame versions incompatible with the physics library.
- Intersecting colliders causing jitter/bouncing.
- Objects having multiple overlapping static bodies.
- Player falling through platforms.
- Controls conflicting with physics bodies.

#### Solutions Implemented
1. Downgraded A-Frame to 1.0.4
    - Ensures compatibility with Cannon.js via aframe-physics-system.
2. Enabled a proper physics stack
    <script src="https://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v4.0.1/dist/aframe-physics-system.min.js"></script>
3. Converted the player to use kinematic-body
    - Allows WASD movement while maintaining collision detection via raycasting.
4. Cleaned up colliders across the environment
    - Removed overlapping static-bodies.
    - Ensured single colliders for platforms and multi-part objects.
    - Simplified geometry where needed.
5. Added physics debugging
    - physics="gravity: -9.8; debug: true"
    - Allowed real-time visualization of collider shapes to fix alignment issues.

### Project Includes
- Custom 3D objects built in JavaScript:
    - StreetLight
    - Table
    - Stairs
    - Grass platforms
- Fully integrated physics with:
    - Player collisions
    - Gravity
    - Walkable surfaces
    - Stable jumping
- Immersive environmental lighting (soft ambient + object-based lights)
- Particle effects (snow/falling particles around the player)
- A handcrafted VR world using a blended sky texture

### What I Learned
- How to build modular 3D objects with A-Frame primitives.
- How to implement and debug physics in older versions of A-Frame.
- How kinematic-body and raycasting collisions work.
- How overlapping colliders break physics — and how to fix them.
- How to write custom movement components (jump mechanics).
- How to work with skyboxes, materials, and lighting for atmosphere.

### Video Requirement
A screen-capture demonstration will show:
- Player movement
- Jumping behavior
- Use of platforms/stairs
- Lighting effects
- Custom objects in action
- Sky environment and atmosphere

If the video is not working below please access it here: https://kive7791.github.io//ImageFall25/aframe-example-code-main/ImageProject-03/Video/Walkthrough.mp4

[Project Demo](aframe-example-code-main/ImageProject-03/Video/Walkthrough.mp4)

### If I had More Time
- Add more 3D Objects
    - Moon
    - Two chairs
    - Two Tea cups
    - Animal Friends

## Credits
- Equirectangular image for my sky
    - Orgininals by:
        - donnaroza
            - Orginal Photo Name: AdobeStock_836724257_Preview
            - Where it was used: The forest and mushrooms
        - LazysAI
            - Orginal Photo Name: AdobeStock_1552129147_Preview 
            - Where it was used: The sky
    - Altered by: Kira Velez
        - I made some quick edits by combining both photos. I used donnaroza image to have a musytical foreground scene with mushrooms. Then I changed the background to LazysAI image.