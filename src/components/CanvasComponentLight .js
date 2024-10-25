import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';
import cloud from '../assets/cloudOne.png'; // Ensure this path is correct


const CanvasComponentLight = () => {
    const containerRef = useRef();
    let birds = []; // Ensure this is an array
    let flocks = [];

    let renderer;
    let scene;
    let camera;

    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;
    const SCREEN_WIDTH_HALF = SCREEN_WIDTH / 2;
    const SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

    const init = () => {
        // Initialize scene, camera, and renderer
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 0.1, 1000);
        camera.position.z = 450;
    
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }
    
        // Create birds and flocks
        for (let i = 0; i < 200; i++) {
            const flock = new Flock();
            flock.position.set(
                Math.random() * 400 - 200,
                Math.random() * 400 - 200,
                Math.random() * 400 - 200
            );
            flock.velocity.set(
                Math.random() * 2 - 1,
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
            );
            flock.setAvoidWalls(true);
            flock.setWorldSize(500, 500, 400);
    
            const bird = new THREE.Mesh(
                new Bird(),
                new THREE.MeshBasicMaterial({
                    color: Math.random() * 0xffffff,
                    side: THREE.DoubleSide,
                })
            );
            bird.phase = Math.floor(Math.random() * 62.83);
            bird.position.copy(flock.position);
            scene.add(bird);
            birds.push(bird); // Now birds.push should work
            flocks.push(flock);
        }


        checkBirdPositions();
    
        // Set event listeners
        document.addEventListener('mousemove', onDocumentMouseMove);
        window.addEventListener('resize', onWindowResize);
    };

    const checkBirdPositions = () => {
        const bird = birds[0];

            if (bird && bird.position) {
                console.log(`Bird  - Position: x: ${bird.position.x}, y: ${bird.position.y}, z: ${bird.position.z}`);
            } else {
                console.error(`Bird  is undefined or has no position`);
            }
    }

    const animate = () => {
        requestAnimationFrame(animate);
      
        render();
    }

    const render = () => {


   
        

        if (birds.length !== flocks.length) {
            console.error('Mismatch between birds and flocks length:', birds.length, flocks.length);
        }
        
        for (let i = 0; i < birds.length; i++) {
            const flock = flocks[i]; // Get corresponding flock instance
            
    
            if (flock) {
                flock.run(flocks); // Ensure flock is a valid Flock instance
            } else {
                console.error('Flock is undefined for bird at index', i);
            }
    
            const bird = birds[i];
            if (bird) {
                const color = bird.material.color;
    
                // Update color based on position
                color.r = color.g = color.b = (500 - bird.position.z) / 1000;
    
                // Rotate bird as it flies
                bird.rotation.y = Math.atan2(-flock.velocity.z, flock.velocity.x);
                bird.rotation.z = Math.asin(flock.velocity.y / flock.velocity.length());
    
                // Flap wings!
                bird.phase = (bird.phase + (Math.max(0, bird.rotation.z) + 0.1)) % 62.83;
                bird.geometry.attributes.position.array[5 * 3 + 1] = bird.geometry.attributes.position.array[4 * 3 + 1] = Math.sin(bird.phase) * 5;
                bird.geometry.attributes.position.needsUpdate = true; // Mark geometry for update
            }
        }
    
        renderer.render(scene, camera);
    };
    




    class Bird extends THREE.BufferGeometry {
        constructor() {
            super();
    
            this.vertices = [];
            this.faces = []; // Initialize faces array
            const scope = this;

            // Sukuriame viršūnes
            const vertices = new Float32Array([
                5, 0, 0,
                -5, -2, 1,
                -5, 0, 0,
                -5, -2, -1,
                0, 2, -6,
                0, 2, 6,
                2, 0, 0,
                -3, 0, 0,
            ]);
    
            // Nustatome pozicijų atributą
            this.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    
            // Nustatome veidų indeksus (jei naudojami)
            const indices = [
                0, 2, 1,
                4, 7, 6,
                5, 6, 7,
            ];
    
            this.setIndex(indices);
            
            // Apskaičiuojame normalias, kad šviesa teisingai atrodytų
            this.computeVertexNormals();
        }
    
        addVertex(x, y, z) {
            const vertex = new THREE.Vector3(x, y, z);
            this.vertices.push(vertex);
            // Add the vertex to the geometry directly (optional)
            this.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices.flatMap(v => [v.x, v.y, v.z]), 3));
        }
    
        addFace(a, b, c) {
            // Push the face indices to the faces array (you might want to adjust how you manage this)
            this.faces.push(a, b, c);
        }
    }
    



    class Flock {
        constructor() {
            this.vector = new THREE.Vector3();
            this.position = new THREE.Vector3();
            this.velocity = new THREE.Vector3();
            this._acceleration = new THREE.Vector3();
            this._width = 500;
            this._height = 500;
            this._depth = 200;
            this._goal = null;
            this._neighborhoodRadius = 200;
            this._maxSpeed = 5;
            this._maxSteerForce = 0.1;
            this._avoidWalls = false;
            
        }
    
        setGoal(target) {
            this._goal = target;
        }
    
        setAvoidWalls(value) {
            this._avoidWalls = value;
        }
    
        setWorldSize(width, height, depth) {
            this._width = width;
            this._height = height;
            this._depth = depth;
        }
    
        
    
        checkWalls() {
            this.vector.set(-this._width, this.position.y, this.position.z);
            this._acceleration.add(this.avoid(this.vector).multiplyScalar(5));
    
            this.vector.set(this._width, this.position.y, this.position.z);
            this._acceleration.add(this.avoid(this.vector).multiplyScalar(5));
    
            this.vector.set(this.position.x, -this._height, this.position.z);
            this._acceleration.add(this.avoid(this.vector).multiplyScalar(5));
    
            this.vector.set(this.position.x, this._height, this.position.z);
            this._acceleration.add(this.avoid(this.vector).multiplyScalar(5));
    
            this.vector.set(this.position.x, this.position.y, -this._depth);
            this._acceleration.add(this.avoid(this.vector).multiplyScalar(5));
    
            this.vector.set(this.position.x, this.position.y, this._depth);
            this._acceleration.add(this.avoid(this.vector).multiplyScalar(5));
        }
    
        flock(flocks) {
            if (this._goal) {
                this._acceleration.add(this.reach(this._goal, 0.005));
            }
    
            this._acceleration.add(this.alignment(flocks));
            this._acceleration.add(this.cohesion(flocks));
            this._acceleration.add(this.separation(flocks));
        }
    
        move() {
            this.velocity.add(this._acceleration);
    
            const l = this.velocity.length();
            if (l > this._maxSpeed) {
                this.velocity.divideScalar(l / this._maxSpeed);
            }
    
            this.position.add(this.velocity);
            this._acceleration.set(0, 0, 0);
        }

        checkBounds() {
            // Wrap the position around the world boundaries
            if (this.position.x > this._width) this.position.x = -this._width;
            if (this.position.x < -this._width) this.position.x = this._width;
            if (this.position.y > this._height) this.position.y = -this._height;
            if (this.position.y < -this._height) this.position.y = this._height;
            if (this.position.z > this._depth) this.position.z = -this._depth;
            if (this.position.z < -this._depth) this.position.z = this._depth;
        }
        
    
        avoid(target) {
            const steer = new THREE.Vector3();
            steer.copy(this.position).sub(target);
            steer.multiplyScalar(1 / this.position.distanceToSquared(target));
            steer.sub(target);
            return steer;
        }
    
        repulse(target) {
            const distance = this.position.distanceTo(target);
            if (distance < 150) {
                const steer = new THREE.Vector3().sub(this.position, target).multiplyScalar(0.1 / distance);
                this._acceleration.add(steer);
            }
        }
    
        reach(target, amount) {
            const steer = new THREE.Vector3().sub(target, this.position).multiplyScalar(amount);
            return steer;
        }
    
        alignment(flocks) {
            const velSum = new THREE.Vector3();
            let count = 0;
    
            for (let flock of flocks) {
                if (Math.random() > 0.6) continue;
    
                const distance = flock.position.distanceTo(this.position);
                if (distance > 0 && distance <= this._neighborhoodRadius) {
                    velSum.add(flock.velocity);
                    count++;
                }
            }
    
            if (count > 0) {
                velSum.divideScalar(count);
                const l = velSum.length();
                if (l > this._maxSteerForce) {
                    velSum.divideScalar(l / this._maxSteerForce);
                }
            }
    
            return velSum;
        }
    
        cohesion(flocks) {
            const posSum = new THREE.Vector3();
            const steer = new THREE.Vector3();
            let count = 0;
    
            for (let flock of flocks) {
                if (Math.random() > 0.6) continue;
    
                const distance = flock.position.distanceTo(this.position);
                if (distance > 0 && distance <= this._neighborhoodRadius) {
                    posSum.add(flock.position);
                    count++;
                }
            }
    
            if (count > 0) {
                posSum.divideScalar(count);
                steer.sub(posSum, this.position);
                const l = steer.length();
                if (l > this._maxSteerForce) {
                    steer.divideScalar(l / this._maxSteerForce);
                }
            }
    
            return steer;
        }
    
        separation(flocks) {
            const posSum = new THREE.Vector3();
            const repulse = new THREE.Vector3();
    
            for (let flock of flocks) {
                if (Math.random() > 0.6) continue;
    
                const distance = flock.position.distanceTo(this.position);
                if (distance > 0 && distance <= this._neighborhoodRadius) {
                    repulse.sub(this.position, flock.position).normalize().divideScalar(distance);
                    posSum.add(repulse);
                }
            }
    
            return posSum;
        }


        async run(flocks) {
            // Wall avoidance logic
            if (this._avoidWalls) {
                // Creating a vector for wall checks
                const vector = new THREE.Vector3();
        
                // Check left wall
                vector.set(-this._width, this.position.y, this.position.z);
                this._acceleration.add(this.avoid(vector).multiplyScalar(5));
        
                // Check right wall
                vector.set(this._width, this.position.y, this.position.z);
                this._acceleration.add(this.avoid(vector).multiplyScalar(5));
        
                // Check bottom wall
                vector.set(this.position.x, -this._height, this.position.z);
                this._acceleration.add(this.avoid(vector).multiplyScalar(5));
        
                // Check top wall
                vector.set(this.position.x, this._height, this.position.z);
                this._acceleration.add(this.avoid(vector).multiplyScalar(5));
        
                // Check near wall
                vector.set(this.position.x, this.position.y, -this._depth);
                this._acceleration.add(this.avoid(vector).multiplyScalar(5));
        
                // Check far wall
                vector.set(this.position.x, this.position.y, this._depth);
                this._acceleration.add(this.avoid(vector).multiplyScalar(5));
            }
        
            // Randomly decide to flock
            if (Math.random() > 0.5) {
                this.flock(flocks);
            }
        
            // Move the flock
            this.move();


            
            
                
        }
        
    }
    


    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

    const onDocumentMouseMove = (event) => {
        console.log({ x: event.clientX, y: event.clientY });
        var vector = new THREE.Vector3(
            event.clientX - SCREEN_WIDTH_HALF,
            -event.clientY + SCREEN_HEIGHT_HALF,
            0
        );
        
        for (var i = 0, il = flocks.length; i < il; i++) {
            const flock = flocks[i];
        
            vector.z = flock.position.z;
        
            flock.repulse(vector);
        }
    }


    
   
  
    useEffect(() => {
        init();
        animate();

        return () => {
            if (containerRef.current && renderer) {
                containerRef.current.removeChild(renderer.domElement);
            }
            document.removeEventListener('mousemove', onDocumentMouseMove);
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);
    

  return (
    <div>
      <style>
        {`
          canvas {
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
          }
          @keyframes anim {
            from {
              transform: translateX(200%);
            }
            to {
              transform: translateX(-200%);
            }
          }
          @keyframes anime {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-200%);
            }
          }
          .c1,
          .c2 {
            width: 1200px;
            height: 1000px;
            position: absolute;
            background: transparent url(${cloud}) 0 0 no-repeat;
            filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0));
            background-size: 100%;
            z-index: 0;
          }
          .c1.one,
          .c2.one { top: -400px; left: 0px; }
          .c1.two,
          .c2.two { top: 200px; left: 700px; }
          .c1.three,
          .c2.three { top: 400px; right: 100px; }
          .c1.four,
          .c2.four { top: -180px; right: 0px; }
          .c2 .one { top: -209px; }
          @media (max-width: 1023px) {
            .c2.one { left: -80px; }
            .c2.two { left: -120px; }
            .c2.three { right: 220px; }
            .c2.four { right: 220px; }
          }
          .c1 { animation: anime 600s linear infinite forwards; }
          .c2 { transform: translateX(200%); animation: anim 600s linear infinite forwards; }
        `}
      </style>
      <div ref={containerRef} style={{ position: 'absolute', top:'0', left:'0', width: '100%', height: '100vh', zindex:'10000' }}>
        {/* <canvas id="canv"></canvas> */}
        <div className="sky">
          <div className="clouds">
            <div className="c1 one"></div>
            <div className="c1 two"></div>
            <div className="c1 three"></div>
            {/* <div className="c1 four"></div> */}
            <div className="c2 one"></div>
            <div className="c2 two"></div>
            <div className="c2 three"></div>
            {/* <div className="c2 four"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasComponentLight;
