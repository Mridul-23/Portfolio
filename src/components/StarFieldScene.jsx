import React, { useRef, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';


const RotatingStars = memo(function RotatingStars() {
  const starsGroup = useRef();
  const lastRef = useRef(0);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const delta = t - lastRef.current;

    if (delta > 1 / 30) {
      if (starsGroup.current) {
        starsGroup.current.rotation.z -= 0.0005 * (delta * 30);
      }
      lastRef.current = t;
    }
  });

  return (
    <group ref={starsGroup}>
      <Stars
        radius={60}
        depth={50}
        count={2000}     // fewer points—still looks dense
        factor={3.5}    // slightly smaller size
        fade            // keep the soft fade‐away look
        speed={0}       // no automatic “movement” from drei
      />
    </group>
  );
});
RotatingStars.displayName = 'RotatingStars';

export default function StarFieldScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 5] }}
        className='pointer-events-none'
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.7} />
        <RotatingStars />
      </Canvas>
    </div>
  );
}
