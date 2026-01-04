'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, useMotionValue } from 'framer-motion'

// Vertex Shader: Gentle sphere
const vertexShader = `
  uniform float uTime;
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Minimal "breathing" scale effect
    float breath = sin(uTime * 0.5) * 0.01;
    vec3 pos = position * (1.0 + breath);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment Shader: Zen/Ethereal Effect
const fragmentShader = `
  uniform float uTime;
  uniform float uInteract; // 0.0 (Idle) to 1.0 (Hover)
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  // Simplex Noise (3D)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 i_ = mod289(i);
    vec4 p = permute( permute( permute( 
               i_.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i_.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i_.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z *ns.z); 
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );  
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    // Standard flow look (No heavy distortion)
    float n = snoise(vPosition * 0.6 + vec3(uTime * 0.1));
    float n2 = snoise(vPosition * 1.5 - vec3(uTime * 0.15));
    
    // Cycle Colors (HoverGrid Palette)
    vec3 cSky    = vec3(0.49, 0.83, 0.99); 
    vec3 cGreen  = vec3(0.43, 0.91, 0.72);
    vec3 cOrange = vec3(0.99, 0.53, 0.45);
    vec3 cYellow = vec3(0.99, 0.93, 0.45);
    vec3 cPink   = vec3(0.99, 0.65, 0.85);
    vec3 cPurple = vec3(0.77, 0.71, 0.99);
    
    // Time Cycle
    float t = uTime * 0.4; // 2x faster cycle
    float cycle = mod(t, 3.0);
    
    vec3 phaseColor;
    
    if (cycle < 1.0) {
        vec3 pair1 = mix(cSky, cGreen, smoothstep(-0.5, 0.5, n));
        vec3 pair2 = mix(cOrange, cYellow, smoothstep(-0.5, 0.5, n));
        phaseColor = mix(pair1, pair2, smoothstep(0.8, 1.0, cycle));
    } else if (cycle < 2.0) {
        vec3 pair2 = mix(cOrange, cYellow, smoothstep(-0.5, 0.5, n));
        vec3 pair3 = mix(cPink, cPurple, smoothstep(-0.5, 0.5, n));
        phaseColor = mix(pair2, pair3, smoothstep(0.8, 1.0, cycle - 1.0));
    } else {
        vec3 pair3 = mix(cPink, cPurple, smoothstep(-0.5, 0.5, n));
        vec3 pair1 = mix(cSky, cGreen, smoothstep(-0.5, 0.5, n));
        phaseColor = mix(pair3, pair1, smoothstep(0.8, 1.0, cycle - 2.0));
    }
    
    // Texture details
    float noiseMix = smoothstep(-1.0, 1.0, n2);
    vec3 highlight = phaseColor + 0.1;
    vec3 shadow = phaseColor - 0.1;
    vec3 finalColor = mix(shadow, highlight, noiseMix);
    
    // Interaction Effect: "Clarity & Glow"
    // 1. Reduce Grain on hover (uInteract -> 1.0)
    float grain = fract(sin(dot(vUv.xy, vec2(12.9898,78.233))) * 43758.5453);
    float grainStrength = mix(0.08, 0.02, uInteract); // Becomes clearer
    finalColor += (grain - 0.5) * grainStrength;
    
    // 2. Add Bloom/Glow (Brighten)
    vec3 glow = vec3(0.1) * uInteract;
    finalColor += glow;
    
    // Lighting & Depth
    // 1. Fresnel (Rim Light) - Soft outer glow
    float fresnel = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    finalColor += vec3(0.15) * pow(fresnel, 2.5);
    
    // 2. Inner Shadow / Ambient Occlusion
    // Darken the edges slightly to simulate volume/curvature
    float edgeDarkening = smoothstep(0.0, 0.6, dot(vNormal, vec3(0.0, 0.0, 1.0)));
    finalColor *= 0.8 + 0.2 * edgeDarkening;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

function FluidMesh() {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = React.useState(false)
    const timeRef = useRef(0)

    // Interaction Spring: Drives the "Glow/Clarity"
    const interactSpring = useSpring(0, { stiffness: 100, damping: 20 })

    // Mouse Rotation Physics
    const rotationX = useMotionValue(0)
    const rotationY = useMotionValue(0)
    const springRotX = useSpring(rotationX, { stiffness: 100, damping: 25 })
    const springRotY = useSpring(rotationY, { stiffness: 100, damping: 25 })

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uInteract: { value: 0 }
    }), [])

    React.useEffect(() => {
        interactSpring.set(hovered ? 1.0 : 0.0)
    }, [hovered, interactSpring])

    useFrame((state, delta) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;

            // "Time Dilation" Effect - FASTER VARIANT
            // Default Speed: 0.5 (was 0.3)
            // Hover Speed: 0.15 (was 0.05) - Still slows down, but not as much

            const currentSpeed = THREE.MathUtils.lerp(
                0.9, 0.3, interactSpring.get()
            );

            timeRef.current += delta * currentSpeed;

            material.uniforms.uTime.value = timeRef.current;
            material.uniforms.uInteract.value = interactSpring.get();

            // Rotation
            const { mouse, viewport } = state;
            rotationX.set((mouse.y * viewport.height) / 100);
            rotationY.set((mouse.x * viewport.width) / 100);

            meshRef.current.rotation.x = springRotX.get();
            meshRef.current.rotation.y = springRotY.get();
        }
    })

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <sphereGeometry args={[0.7, 64, 64]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={1} />
            <FluidMesh />
        </>
    )
}

export default function FluidSphere() {
    return (
        <div className="w-full aspect-square max-h-[400px] min-h-[300px] flex items-center justify-center relative rounded-xl overflow-hidden mx-auto">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 35 }}>
                <Scene />
            </Canvas>
        </div>
    )
}
