import { Suspense } from "react";
import {
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

export default function Experience({ started }) {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Suspense fallback={null}>
            <primitive object={computer.scene} position-y={-1.2}>
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.25}
              >
                {<iframe src="https://portfolio2d-three.vercel.app/" />}
              </Html>
            </primitive>
          </Suspense>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.5}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Tavo L'Eglise
          </Text>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.3}
            position={[2, -0.35, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Frontend Web developer
          </Text>
        </Float>
      </PresentationControls>
    </>
  );
}
