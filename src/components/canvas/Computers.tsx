import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useCallback } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import CanvasLoader from '../Loader';

interface IComputers {
  isScreenSizeSmallerThan1300: boolean;
  isScreenSizeSmallerThan700: boolean;
  isScreenSizeSmallerThan500: boolean;
  isScreenSizeSmallerThan1000: boolean;
}

const Computers = ({ isScreenSizeSmallerThan1300, isScreenSizeSmallerThan700, isScreenSizeSmallerThan500, isScreenSizeSmallerThan1000 }: IComputers) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  const getProperties = useCallback(() => {
    let properties = { scale: 0.75, position: [-1, 0, 0] };
  
    switch (true) {
      case isScreenSizeSmallerThan500:
        properties = { scale: 0.25, position: [0, -0.8, -0.5] };
        break;
      case isScreenSizeSmallerThan700:
        properties = { scale: 0.35, position: [0, -0.95, -0.7] };
        break;
      case isScreenSizeSmallerThan1000:
        properties = { scale: 0.45, position: [0, -2.25, -0.7] };
        break;
      case isScreenSizeSmallerThan1300:
        properties = { scale: 0.6, position: [0, -3.25, -1.1] };
        break;
      default:
        properties = { scale: 0.75, position: [0, -3.25, -1.5] };
        break;
    }
  
    return properties;
  }, [isScreenSizeSmallerThan500, isScreenSizeSmallerThan700, isScreenSizeSmallerThan1000, isScreenSizeSmallerThan1300]);
  

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={getProperties().scale}
        position={getProperties().position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const { isScreenSizeSmallerThan: isScreenSizeSmallerThan1300 } =
    useMediaQuery({ maxWidth: 1300 });
  const { isScreenSizeSmallerThan: isScreenSizeSmallerThan1000 } =
    useMediaQuery({ maxWidth: 1000 });
  const { isScreenSizeSmallerThan: isScreenSizeSmallerThan700 } = useMediaQuery(
    { maxWidth: 700 }
  );
  const { isScreenSizeSmallerThan: isScreenSizeSmallerThan500 } = useMediaQuery(
    { maxWidth: 500 }
  );
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
          isScreenSizeSmallerThan1300={isScreenSizeSmallerThan1300}
          isScreenSizeSmallerThan1000={isScreenSizeSmallerThan1000}
          isScreenSizeSmallerThan700={isScreenSizeSmallerThan700}
          isScreenSizeSmallerThan500={isScreenSizeSmallerThan500}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
