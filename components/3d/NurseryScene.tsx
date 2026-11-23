
"use client";


import { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import {
  ContactShadows,
  Environment,
  Float,
  Text,

} from "@react-three/drei";
import CameraController from "./CameraController";


function Crib() {
  const gold = "#C6A66B";
  const ivory = "#F5EFE4";
  const cream = "#E8DCC9";
  const wood = "#D4BC9B";

  return (
    <group position={[0, -0.705, 0]}>
      {/* Mattress */}
      <mesh position={[0, 0.56, 0]}>
        <boxGeometry args={[2.25, 0.16, 1.15]} />
        <meshStandardMaterial color="#FFFDF8" roughness={0.9} />
      </mesh>

      {/* Solid wooden bed base */}
      <mesh position={[0, 0.36, 0]}>
        <boxGeometry args={[2.42, 0.2, 1.3]} />
        <meshStandardMaterial color={wood} roughness={0.65} />
      </mesh>

      {/* Decorative gold base line */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[2.38, 0.025, 1.26]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.65}
          roughness={0.3}
        />
      </mesh>

      {/* Four elegant corner posts */}
      {[-1, 1].map((x) =>
        [-1, 1].map((z) => (
          <group
            key={`${x}-${z}`}
            position={[x * 1.16, 0, z * 0.58]}
          >
            <mesh position={[0, 0.58, 0]}>
              <cylinderGeometry args={[0.075, 0.095, 1.05, 24]} />
              <meshStandardMaterial color={ivory} roughness={0.4} />
            </mesh>

            {/* Gold collar */}
            <mesh position={[0, 1.02, 0]}>
              <cylinderGeometry args={[0.083, 0.083, 0.045, 24]} />
              <meshStandardMaterial
                color={gold}
                metalness={0.7}
                roughness={0.25}
              />
            </mesh>

            {/* Soft rounded finial */}
            <mesh position={[0, 1.15, 0]}>
              <sphereGeometry args={[0.105, 24, 24]} />
              <meshStandardMaterial color={ivory} roughness={0.35} />
            </mesh>

            <mesh position={[0, 1.15, 0.085]}>
              <sphereGeometry args={[0.035, 16, 16]} />
              <meshStandardMaterial
                color={gold}
                metalness={0.7}
                roughness={0.25}
              />
            </mesh>
          </group>
        ))
      )}

      {/* Headboard main panel */}
      <mesh position={[0, 0.94, -0.59]}>
        <boxGeometry args={[1.95, 0.82, 0.13]} />
        <meshStandardMaterial color={ivory} roughness={0.5} />
      </mesh>

      {/* Headboard upper curved accent */}
      <mesh
        position={[0, 1.27, -0.505]}
        rotation={[0, 0, 0]}
      >
        <torusGeometry args={[0.72, 0.035, 12, 64, Math.PI]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.65}
          roughness={0.3}
        />
      </mesh>

      {/* Headboard inner frame */}
      {[-0.88, 0.88].map((x) => (
        <mesh key={x} position={[x, 0.94, -0.505]}>
          <boxGeometry args={[0.025, 0.65, 0.025]} />
          <meshStandardMaterial color={gold} metalness={0.6} />
        </mesh>
      ))}

      <mesh position={[0, 0.59, -0.505]}>
        <boxGeometry args={[1.78, 0.025, 0.025]} />
        <meshStandardMaterial color={gold} metalness={0.6} />
      </mesh>

      {/* Royal crown-inspired centerpiece */}
      <group position={[0, 1.02, -0.49]}>
        <mesh position={[0, -0.12, 0]}>
          <boxGeometry args={[0.34, 0.035, 0.025]} />
          <meshStandardMaterial color={gold} metalness={0.7} />
        </mesh>

        {[-0.13, 0, 0.13].map((x, i) => (
          <mesh
            key={i}
            position={[x, i === 1 ? 0.02 : -0.015, 0]}
          >
            <sphereGeometry args={[0.045, 20, 20]} />
            <meshStandardMaterial
              color={gold}
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
        ))}

        {[-0.12, 0.12].map((x) => (
          <mesh
            key={x}
            position={[x, -0.055, 0]}
            rotation={[0, 0, x > 0 ? -0.35 : 0.35]}
          >
            <boxGeometry args={[0.035, 0.16, 0.025]} />
            <meshStandardMaterial color={gold} metalness={0.7} />
          </mesh>
        ))}
      </group>

      {/* Headboard side details */}
      {[-0.65, 0.65].map((x) => (
        <mesh key={x} position={[x, 0.94, -0.49]}>
          <sphereGeometry args={[0.055, 20, 20]} />
          <meshStandardMaterial color={gold} metalness={0.7} />
        </mesh>
      ))}

      {/* Front footboard - solid and elegant */}
      <mesh position={[0, 0.68, 0.59]}>
        <boxGeometry args={[1.95, 0.42, 0.1]} />
        <meshStandardMaterial color={ivory} roughness={0.5} />
      </mesh>

      {/* Footboard gold frame */}
      {[-0.87, 0.87].map((x) => (
        <mesh key={x} position={[x, 0.68, 0.65]}>
          <boxGeometry args={[0.025, 0.31, 0.018]} />
          <meshStandardMaterial color={gold} metalness={0.7} />
        </mesh>
      ))}

      <mesh position={[0, 0.68, 0.65]}>
        <boxGeometry args={[1.72, 0.025, 0.018]} />
        <meshStandardMaterial color={gold} metalness={0.7} />
      </mesh>

      {/* Small central decorative medallion */}
      <mesh position={[0, 0.68, 0.67]}>
        <torusGeometry args={[0.105, 0.018, 12, 40]} />
        <meshStandardMaterial color={gold} metalness={0.75} />
      </mesh>

      <mesh position={[0, 0.68, 0.66]}>
        <sphereGeometry args={[0.045, 20, 20]} />
        <meshStandardMaterial color={cream} roughness={0.4} />
      </mesh>

      {/* Side rails: top and bottom */}
      {[-1, 1].map((side) => (
        <group key={side}>
          {[0.96, 0.55].map((y) => (
            <mesh
              key={y}
              position={[side * 1.16, y, 0]}
            >
              <boxGeometry args={[0.09, 0.075, 1.08]} />
              <meshStandardMaterial color={ivory} roughness={0.45} />
            </mesh>
          ))}

          {/* Real vertical wooden slats */}
          {Array.from({ length: 7 }).map((_, i) => (
            <mesh
              key={i}
              position={[side * 1.16, 0.75, -0.45 + i * 0.15]}
            >
              <cylinderGeometry args={[0.025, 0.025, 0.38, 16]} />
              <meshStandardMaterial color={wood} roughness={0.5} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}


function TamimName() {
  return (
    <group position={[1, 1.75, -2.35]}>
      {/* Beige name plaque */}
      <mesh>
        <boxGeometry args={[2.8, 0.85, 0.12]} />
        <meshStandardMaterial
          color="#F1E5D2"
          roughness={0.65}
        />
      </mesh>

      {/* Gold frame */}
      <mesh position={[0, 0, -0.07]}>
        <boxGeometry args={[2.9, 0.95, 0.035]} />
        <meshStandardMaterial
          color="#C6A77D"
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {/* 3D floating name */}

        <Text
          position={[0, 0, 0.16]}
          fontSize={0.55}
          anchorX="center"
          anchorY="middle"
          color="#718FA5"
          outlineWidth={0.008}
          outlineColor="#D7EAF4"
          letterSpacing={0.04}
        >
          تميم
          <meshStandardMaterial
            color="#8FB9D3"
            metalness={0.35}
            roughness={0.3}
          />
        </Text>
   

      {/* Decorative stars */}
      {[-1.15, 1.15].map((x) => (
        <mesh key={x} position={[x, 0, 0.1]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial
            color="#C6A77D"
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}


function TeddyBear() {
  const fur = "#C9A787";
  const blue = "#A9C9DF";

  return (
    <group position={[0.72, -0.145, 0.12]}>
      {/* Body */}
      <mesh position={[0, 0.28, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color={fur} roughness={1} />
      </mesh>

      {/* Blue outfit */}
      <mesh position={[0, 0.27, 0.045]} scale={[1, 1, 0.85]}>
        <sphereGeometry args={[0.255, 32, 32]} />
        <meshStandardMaterial color={blue} roughness={0.9} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.65, 0.015]}>
        <sphereGeometry args={[0.21, 32, 32]} />
        <meshStandardMaterial color={fur} roughness={1} />
      </mesh>

      {/* Ears */}
      {[-1, 1].map((x) => (
        <group key={x} position={[x * 0.155, 0.81, 0.015]}>
          <mesh>
            <sphereGeometry args={[0.075, 24, 24]} />
            <meshStandardMaterial color={fur} roughness={1} />
          </mesh>
          <mesh position={[0, 0, 0.052]}>
            <sphereGeometry args={[0.038, 20, 20]} />
            <meshStandardMaterial color="#E8CFC0" roughness={1} />
          </mesh>
        </group>
      ))}

      {/* Eyes */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 0.075, 0.67, 0.205]}>
          <sphereGeometry args={[0.014, 16, 16]} />
          <meshStandardMaterial color="#382D29" />
        </mesh>
      ))}

      {/* Soft muzzle */}
      <mesh position={[0, 0.59, 0.205]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshStandardMaterial color="#E8D2C1" roughness={1} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.61, 0.27]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial color="#5B4438" />
      </mesh>

      {/* Short rounded arms resting on belly */}
      {[-1, 1].map((x) => (
        <group
          key={x}
          position={[x * 0.205, 0.34, 0.13]}
          rotation={[0, 0, x * -0.5]}
        >
          <mesh>
            <sphereGeometry args={[0.105, 24, 24]} />
            <meshStandardMaterial color={fur} roughness={1} />
          </mesh>
        </group>
      ))}

      {/* Rounded feet resting forward */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 0.13, 0.075, 0.12]}>
          <sphereGeometry args={[0.115, 24, 24]} />
          <meshStandardMaterial color={fur} roughness={1} />
        </mesh>
      ))}

      {/* Blue bow */}
      <group position={[0, 0.43, 0.235]}>
        {[-1, 1].map((x) => (
          <mesh
            key={x}
            position={[x * 0.065, 0, 0]}
            rotation={[0, 0, x * 0.3]}
          >
            <sphereGeometry args={[0.065, 20, 20]} />
            <meshStandardMaterial color="#718FA5" roughness={0.7} />
          </mesh>
        ))}
        <mesh>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#C6A66B" metalness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

function MoonAndStars() {
  return (
    <group position={[1.6, 2.2, -1.2]}>
      <Float speed={1} floatIntensity={0.2}>
        <mesh>
          <torusGeometry args={[0.32, 0.07, 16, 64, Math.PI * 1.5]} />
          <meshStandardMaterial
            color="#C6A77D"
            metalness={0.5}
            roughness={0.35}
          />
        </mesh>
      </Float>

      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 1.25) * 0.75,
            Math.sin(i * 1.25) * 0.75,
            0,
          ]}
        >
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial
            color="#D9BD91"
            emissive="#C6A77D"
            emissiveIntensity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function Room() {
  const wall = "#F7F0E6";
  const trim = "#E8DCC9";
  const gold = "#C6A66B";

  return (
    <group>
      {/* Main floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.65, 0]}
        receiveShadow
      >
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#D9C5A9" roughness={0.85} />
      </mesh>

      {/* Floor wood panels */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[-5.5 + i, -0.638, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[0.012, 12]} />
          <meshStandardMaterial color="#BDA487" roughness={1} />
        </mesh>
      ))}

      {/* Back wall */}
      <mesh position={[0, 1.5, -2.5]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color={wall} side={DoubleSide} />
      </mesh>

      {/* Left wall */}
      <mesh
        position={[-6, 1.5, 3.5]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color="#F0E6D8" side={DoubleSide} />
      </mesh>

      {/* Right wall */}
      <mesh
        position={[6, 1.5, 3.5]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color="#F0E6D8" side={DoubleSide} />
      </mesh>

      {/* Ceiling */}
      <mesh
        position={[0, 4.5, 3.5]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#FFF9EF" side={DoubleSide} />
      </mesh>

      {/* Back wall crown molding */}
      <mesh position={[0, 4.38, -2.43]}>
        <boxGeometry args={[11.9, 0.18, 0.16]} />
        <meshStandardMaterial color={trim} roughness={0.5} />
      </mesh>

      {/* Ceiling gold detail */}
      <mesh position={[0, 4.27, -2.34]}>
        <boxGeometry args={[11.8, 0.018, 0.025]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.65}
          roughness={0.3}
        />
      </mesh>

      {/* Side wall crown moldings */}
      {/* Side wall crown moldings */}
      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh
            position={[side * 5.88, 4.38, 3.5]}
          >
            <boxGeometry args={[0.18, 0.18, 12]} />
            <meshStandardMaterial color={trim} roughness={0.5} />
          </mesh>

          <mesh position={[side * 5.78, 4.27, 3.5]}>
            <boxGeometry args={[0.025, 0.018, 11.8]} />
            <meshStandardMaterial
              color={gold}
              metalness={0.65}
              roughness={0.3}
            />
          </mesh>
        </group>
      ))}
            {/* Side wall decorative lower molding */}
      {[-1, 1].map((side) => (
        <group key={side}>
          {[0.35, 1.65, 2.95].map((z) => (
            <mesh
              key={z}
              position={[side * 5.96, 1.3, z]}
            >
              <boxGeometry args={[0.045, 2.1, 0.85]} />
              <meshStandardMaterial color={trim} roughness={0.6} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Back wall baseboard */}
      <mesh position={[0, -0.48, -2.43]}>
        <boxGeometry args={[12, 0.3, 0.12]} />
        <meshStandardMaterial color={trim} roughness={0.55} />
      </mesh>

      {/* Side wall baseboards */}
      {[-1, 1].map((side) => (
        <mesh
          key={side}
          position={[side * 5.92, -0.48, 3.5]}
        >
          <boxGeometry args={[0.12, 0.3, 12]} />
          <meshStandardMaterial color={trim} roughness={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function NurseryWindow({ night }: { night: boolean }) {
  const gold = "#C6A66B";
  const blue = "#B8D3E5";
  const lightBlue = "#D7EAF4";

  return (
    <group position={[-1.8, 1.55, -2.4]}>
      <mesh>
        <boxGeometry args={[1.92, 1.78, 0.14]} />
        <meshStandardMaterial color="#D8BC94" roughness={0.55} />
      </mesh>

      <mesh position={[0, 0, 0.078]}>
        <planeGeometry args={[1.68, 1.52]} />
        <meshStandardMaterial
          color={night ? "#263B59" : "#BFDCEB"}
          emissive={night ? "#172B48" : "#BFDCEB"}
          emissiveIntensity={night ? 0.08 : 0.22}
          roughness={0.25}
        />
      </mesh>

      {[-0.86, 0.86].map((x) => (
        <mesh key={x} position={[x, 0, 0.11]}>
          <boxGeometry args={[0.045, 1.58, 0.045]} />
          <meshStandardMaterial color="#FFF9EF" roughness={0.4} />
        </mesh>
      ))}

      {[-0.77, 0.77].map((y) => (
        <mesh key={y} position={[0, y, 0.11]}>
          <boxGeometry args={[1.76, 0.045, 0.045]} />
          <meshStandardMaterial color="#FFF9EF" roughness={0.4} />
        </mesh>
      ))}

      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.045, 1.5, 0.035]} />
        <meshStandardMaterial color="#FFF9EF" roughness={0.4} />
      </mesh>

      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[1.68, 0.045, 0.035]} />
        <meshStandardMaterial color="#FFF9EF" roughness={0.4} />
      </mesh>

      {[-1, 1].map((side) => (
        <group key={side} position={[side * 1.04, 0, 0.19]}>
          <mesh>
            <boxGeometry args={[0.5, 1.92, 0.12]} />
            <meshStandardMaterial color={blue} roughness={0.98} />
          </mesh>

          {[-0.19, -0.095, 0, 0.095, 0.19].map((x, index) => (
            <mesh
              key={x}
              position={[x, 0, 0.075 + (index % 2) * 0.012]}
              rotation={[0, (index - 2) * 0.035, 0]}
            >
              <boxGeometry args={[0.075, 1.9, 0.045]} />
              <meshStandardMaterial
                color={index % 2 === 0 ? lightBlue : "#AFCBDF"}
                roughness={1}
              />
            </mesh>
          ))}

          <mesh position={[-side * 0.015, -0.28, 0.105]}>
            <torusGeometry args={[0.115, 0.018, 10, 32, Math.PI * 1.45]} />
            <meshStandardMaterial color={gold} metalness={0.65} roughness={0.3} />
          </mesh>

          <mesh position={[0, -0.28, 0.13]}>
            <sphereGeometry args={[0.045, 18, 18]} />
            <meshStandardMaterial color="#E9D4B4" roughness={0.45} />
          </mesh>

          <mesh position={[0, -0.43, 0.12]}>
            <cylinderGeometry args={[0.012, 0.035, 0.22, 12]} />
            <meshStandardMaterial color={gold} metalness={0.45} roughness={0.5} />
          </mesh>
        </group>
      ))}

      <mesh position={[0, 0.91, 0.2]}>
        <boxGeometry args={[2.48, 0.2, 0.16]} />
        <meshStandardMaterial color="#E9DCC9" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.79, 0.285]}>
        <boxGeometry args={[2.42, 0.025, 0.025]} />
        <meshStandardMaterial color={gold} metalness={0.65} roughness={0.3} />
      </mesh>

      <mesh
        position={[0, 1.04, 0.23]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.035, 0.035, 2.65, 20]} />
        <meshStandardMaterial color={gold} metalness={0.7} roughness={0.25} />
      </mesh>

      {[-1.36, 1.36].map((x) => (
        <mesh key={x} position={[x, 1.04, 0.23]}>
          <sphereGeometry args={[0.075, 20, 20]} />
          <meshStandardMaterial color="#E9DCC9" roughness={0.4} />
        </mesh>
      ))}

      <mesh position={[0, -0.91, 0.17]}>
        <boxGeometry args={[2.08, 0.09, 0.28]} />
        <meshStandardMaterial color="#F5EFE4" roughness={0.45} />
      </mesh>

      <mesh position={[0, -0.96, 0.2]}>
        <boxGeometry args={[2.1, 0.018, 0.29]} />
        <meshStandardMaterial color={gold} metalness={0.55} roughness={0.35} />
      </mesh>
    </group>
  );
}

function NurseryRug() {
  return (
    <group position={[0, -0.625, 0.1]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.9, 64]} />
        <meshStandardMaterial
          color="#E8D8C3"
          roughness={1}
        />
      </mesh>

      <mesh
        position={[0, 0.008, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[1.65, 1.7, 64]} />
        <meshStandardMaterial
          color="#B8D3E5"
          roughness={1}
          transparent={false}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}




function BabyBedding() {
  const gold = "#C6A66B";

  return (
    <group position={[0, -0.705, 0]}>
      {/* Main quilted blanket */}
      <mesh position={[-0.72, 0.69, 0.12]}>
        <boxGeometry args={[0.92, 0.10, 0.82]} />
        <meshStandardMaterial
          color="#B8D3E5"
          roughness={0.95}
        />
      </mesh>

      {/* Soft ivory folded edge */}
      <mesh position={[-0.72, 0.75, 0.47]}>
        <boxGeometry args={[0.92, 0.025, 0.12]} />
        <meshStandardMaterial
          color="#FFF9EF"
          roughness={0.9}
        />
      </mesh>

      {/* Gold piping on folded edge */}
      <mesh position={[-0.72, 0.765, 0.415]}>
        <boxGeometry args={[0.88, 0.008, 0.012]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.55}
          roughness={0.35}
        />
      </mesh>

      {/* Blanket lower gold border */}
      <mesh position={[-0.72, 0.744, -0.28]}>
        <boxGeometry args={[0.86, 0.012, 0.018]} />
        <meshStandardMaterial color={gold} metalness={0.5} />
      </mesh>

      {/* Embroidered T */}
      <Text
        position={[-0.72, 0.748, 0.08]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.19}
        anchorX="center"
        anchorY="middle"
        color="#71899B"
      >
        T
      </Text>

      {/* Main pillow */}
      <mesh position={[0, 0.70, -0.39]}>
        <boxGeometry args={[0.72, 0.12, 0.32]} />
        <meshStandardMaterial
          color="#FFF9EF"
          roughness={1}
        />
      </mesh>

      {/* Pillow decorative center */}
      <mesh position={[0, 0.765, -0.39]}>
        <boxGeometry args={[0.22, 0.008, 0.015]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {/* Second small baby-blue pillow */}
      <mesh position={[0.68, 0.69, -0.38]}>
        <boxGeometry args={[0.38, 0.11, 0.27]} />
        <meshStandardMaterial
          color="#D7EAF4"
          roughness={1}
        />
      </mesh>

      {/* Decorative cushion */}
      <mesh position={[0.82, 0.75, 0.02]}>
        <sphereGeometry args={[0.15, 32, 24]} />
        <meshStandardMaterial
          color="#E8DCC9"
          roughness={0.85}
        />
      </mesh>

      {/* Cushion gold center detail */}
      <mesh position={[0.82, 0.895, 0.02]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.65}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}




function SideTable({
  side,
  night,
}: {
  side: -1 | 1;
  night: boolean;
}) {
  const gold = "#C6A66B";
  const ivory = "#F5EFE4";
  const wood = "#D4BC9B";

  return (
    <group position={[side * 2.05, -0.65, 0.18]}>
      {/* Four tapered legs */}
      {[-1, 1].map((x) =>
        [-1, 1].map((z) => (
          <group key={`${x}-${z}`} position={[x * 0.27, 0, z * 0.24]}>
            <mesh position={[0, 0.31, 0]}>
              <cylinderGeometry args={[0.035, 0.05, 0.62, 16]} />
              <meshStandardMaterial color={ivory} roughness={0.45} />
            </mesh>
            <mesh position={[0, 0.58, 0]}>
              <cylinderGeometry args={[0.045, 0.045, 0.035, 16]} />
              <meshStandardMaterial color={gold} metalness={0.65} roughness={0.3} />
            </mesh>
          </group>
        ))
      )}

      {/* Lower shelf */}
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[0.68, 0.055, 0.58]} />
        <meshStandardMaterial color={wood} roughness={0.65} />
      </mesh>

      {/* Main cabinet body */}
      <mesh position={[0, 0.48, 0]}>
        <boxGeometry args={[0.65, 0.42, 0.54]} />
        <meshStandardMaterial color={ivory} roughness={0.48} />
      </mesh>

      {/* Drawer front */}
      <mesh position={[0, 0.52, 0.278]}>
        <boxGeometry args={[0.53, 0.25, 0.025]} />
        <meshStandardMaterial color="#FBF7EF" roughness={0.45} />
      </mesh>

      {/* Gold drawer outline */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 0.255, 0.52, 0.296]}>
          <boxGeometry args={[0.012, 0.22, 0.012]} />
          <meshStandardMaterial color={gold} metalness={0.65} roughness={0.3} />
        </mesh>
      ))}
      {[-1, 1].map((y) => (
        <mesh key={y} position={[0, 0.52 + y * 0.115, 0.296]}>
          <boxGeometry args={[0.52, 0.012, 0.012]} />
          <meshStandardMaterial color={gold} metalness={0.65} roughness={0.3} />
        </mesh>
      ))}

      {/* Drawer knob */}
      <mesh position={[0, 0.52, 0.325]}>
        <sphereGeometry args={[0.035, 20, 20]} />
        <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} />
      </mesh>

      {/* Thick tabletop with gold edge */}
      <mesh position={[0, 0.73, 0]}>
        <boxGeometry args={[0.78, 0.09, 0.68]} />
        <meshStandardMaterial color={ivory} roughness={0.38} />
      </mesh>
      <mesh position={[0, 0.68, 0]}>
        <boxGeometry args={[0.79, 0.018, 0.69]} />
        <meshStandardMaterial color={gold} metalness={0.65} roughness={0.3} />
      </mesh>

     {side === -1 ? (
        <BedsideLamp night={night} />
      ) : (
        <TableDecor />
      )}
    </group>
  );
}

function BedsideLamp({ night }: { night: boolean }) {
  return (
    <group position={[0, 0.79, 0]}>
      {/* Lamp base */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.13, 0.17, 0.12, 32]} />
        <meshStandardMaterial color="#D8C4A5" metalness={0.25} roughness={0.35} />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.025, 0.035, 0.32, 20]} />
        <meshStandardMaterial color="#C6A66B" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Shade */}
      <mesh position={[0, 0.53, 0]}>
        <cylinderGeometry args={[0.13, 0.23, 0.3, 32, 1, true]} />
        <meshStandardMaterial color="#FFF8EA" roughness={0.8} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 0.38, 0]}>
        <cylinderGeometry args={[0.23, 0.23, 0.025, 32]} />
        <meshStandardMaterial color="#E8DCC9" roughness={0.7} />
      </mesh>
    <pointLight
      position={[0, 0.48, 0]}
      intensity={night ? 0.75 : 0.45}
      color="#FFE4BB"
      distance={night ? 3.5 : 2.4}
    />    </group>
  );
}

function TableDecor() {
  return (
    <group position={[0, 0.79, 0]}>
      {/* Decorative books */}
      <mesh position={[-0.13, 0.055, 0]}>
        <boxGeometry args={[0.28, 0.07, 0.2]} />
        <meshStandardMaterial color="#D9E7EC" roughness={0.8} />
      </mesh>
      <mesh position={[-0.12, 0.105, 0]}>
        <boxGeometry args={[0.25, 0.035, 0.19]} />
        <meshStandardMaterial color="#E8DCC9" roughness={0.8} />
      </mesh>
      {/* Small vase */}
      <mesh position={[0.16, 0.18, 0]} scale={[0.72, 1, 0.72]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#B8D3E5" roughness={0.3} metalness={0.12} />
      </mesh>
      <mesh position={[0.16, 0.32, 0]}>
        <cylinderGeometry args={[0.055, 0.07, 0.12, 20]} />
        <meshStandardMaterial color="#B8D3E5" roughness={0.3} metalness={0.12} />
      </mesh>
      {/* Delicate stems */}
      {[-1, 0, 1].map((n) => (
        <mesh
          key={n}
          position={[0.16 + n * 0.055, 0.55 + Math.abs(n) * -0.025, 0]}
          rotation={[0, 0, n * 0.18]}
        >
          <cylinderGeometry args={[0.008, 0.012, 0.35, 8]} />
          <meshStandardMaterial color="#A6A88B" />
        </mesh>
      ))}
      {[-1, 0, 1].map((n) => (
        <mesh key={n} position={[0.16 + n * 0.08, 0.69 - Math.abs(n) * 0.05, 0]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#F2E7D8" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function WallDetails() {
  const gold = "#C6A66B";
  return (
    <group>
      {/* Symmetrical architectural wall moulding */}
      {[-3.45, 3.45].map((x) => (
        <group key={x} position={[x, 1.35, -2.43]}>
          <mesh>
            <boxGeometry args={[0.045, 2.45, 0.045]} />
            <meshStandardMaterial color="#E4D4BE" roughness={0.7} />
          </mesh>
          {[-1, 1].map((y) => (
            <mesh key={y} position={[0, y * 1.22, 0]}>
              <boxGeometry args={[0.48, 0.045, 0.045]} />
              <meshStandardMaterial color="#E4D4BE" roughness={0.7} />
            </mesh>
          ))}
        </group>
      ))}
      {/* Upper ivory crown molding with a fine champagne-gold inlay */}
      <mesh position={[0, 4.12, -2.43]}>
        <boxGeometry args={[11.8, 0.11, 0.09]} />
        <meshStandardMaterial color="#E8DCC9" roughness={0.55} />
      </mesh>
      <mesh position={[0, 4.045, -2.37]}>
        <boxGeometry args={[11.8, 0.018, 0.025]} />
        <meshStandardMaterial color={gold} metalness={0.55} roughness={0.35} />
      </mesh>

      {/* Slim gold trim behind the crib */}
      <mesh position={[0, 2.72, -2.43]}>
        <boxGeometry args={[5.9, 0.025, 0.035]} />
        <meshStandardMaterial color={gold} metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.1, -2.43]}>
        <boxGeometry args={[5.9, 0.025, 0.035]} />
        <meshStandardMaterial color="#E4D4BE" roughness={0.7} />
      </mesh>
    </group>
  );
}


function NurseryChandelier({ night }: { night: boolean }) {
  const gold = "#C6A66B";
  const ivory = "#FFF8EA";

  return (
    <group position={[0, 3.18, 0.15]}>
      {/* Ornamental ceiling medallion */}
      <mesh position={[0, 0.38, 0]}>
        <torusGeometry args={[0.48, 0.025, 12, 64]} />
        <meshStandardMaterial color={gold} metalness={0.72} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.035, 48]} />
        <meshStandardMaterial color="#F5EFE4" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.42, 0]}>
        <torusGeometry args={[0.29, 0.012, 10, 48]} />
        <meshStandardMaterial color={gold} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Hanging chain and central stem */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.42, 16]} />
        <meshStandardMaterial color={gold} metalness={0.78} roughness={0.22} />
      </mesh>
      <mesh position={[0, -0.12, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#E8DCC9" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Five graceful chandelier arms */}
      {Array.from({ length: 5 }).map((_, index) => {
        const angle = (index / 5) * Math.PI * 2;
        return (
          <group key={index} rotation={[0, angle, 0]}>
            <mesh
              position={[0.34, -0.16, 0]}
              rotation={[0, 0, -Math.PI / 2.8]}
            >
              <cylinderGeometry args={[0.018, 0.026, 0.52, 14]} />
              <meshStandardMaterial color={gold} metalness={0.78} roughness={0.22} />
            </mesh>

            <mesh position={[0.58, -0.28, 0]}>
              <sphereGeometry args={[0.055, 20, 20]} />
              <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} />
            </mesh>

            {/* Frosted candle-style lamp */}
            <mesh position={[0.58, -0.18, 0]}>
              <cylinderGeometry args={[0.055, 0.075, 0.19, 20]} />
              <meshStandardMaterial
                color={ivory}
                emissive="#FFE7BD"
                emissiveIntensity={night ? 0.04 : 0.28}
                roughness={0.35}
              />
            </mesh>
            <mesh position={[0.58, -0.065, 0]}>
              <sphereGeometry args={[0.065, 20, 20]} />
              <meshStandardMaterial
                color="#FFF1D5"
                emissive="#FFD99B"
                emissiveIntensity={night ? 0.08 : 0.85}
                roughness={0.25}
              />
            </mesh>
            <pointLight
              position={[0.58, -0.08, 0]}
              intensity={night ? 0 : 0.22}
              color="#FFE5BE"
              distance={3.2}
              decay={2}
            />
          </group>
        );
      })}

      {/* Crystal drops beneath the central body */}
      {[-1, 0, 1].map((offset) => (
        <group key={offset} position={[offset * 0.16, -0.34, 0]}>
          <mesh position={[0, -0.08, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 0.16, 8]} />
            <meshStandardMaterial color={gold} metalness={0.75} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.19, 0]}>
            <octahedronGeometry args={[0.055, 0]} />
            <meshPhysicalMaterial
              color="#EAF5FA"
              roughness={0.08}
              metalness={0.05}
              transmission={0.55}
              thickness={0.4}
              transparent
              opacity={0.85}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}


function CeilingLights({ night }: { night: boolean }) {
  return (
    <group>
      {[-2.65, 0, 2.65].map((x) => (
        <group key={x} position={[x, 3.48, -0.55]}>
          <mesh>
            <torusGeometry args={[0.13, 0.018, 10, 32]} />
            <meshStandardMaterial
              color="#D8C39F"
              metalness={0.55}
              roughness={0.35}
            />
          </mesh>

          <mesh position={[0, -0.012, 0]}>
            <circleGeometry args={[0.105, 32]} />
            <meshStandardMaterial
              color="#FFF4DC"
              emissive="#FFE4B8"
              emissiveIntensity={night ? 0.03 : 0.65}
              side={DoubleSide}
            />
          </mesh>

          <pointLight
            position={[0, -0.08, 0]}
            intensity={night ? 0 : 0.28}
            color="#FFE8C7"
            distance={4.5}
            decay={2}
          />
        </group>
      ))}

      <NurseryChandelier night={night} />
    </group>
  );
}

function RoyalWallArt({ side }: { side: -1 | 1 }) {
  const gold = "#C6A66B";

  return (
    <group position={[side * 4.35, 2.05, -2.36]}>
      {/* Outer gold frame */}
      <mesh>
        <boxGeometry args={[0.88, 1.12, 0.075]} />
        <meshStandardMaterial
          color={gold}
          metalness={0.72}
          roughness={0.28}
        />
      </mesh>

      {/* Ivory inner panel */}
      <mesh position={[0, 0, 0.045]}>
        <boxGeometry args={[0.79, 1.03, 0.035]} />
        <meshStandardMaterial
          color="#F5EFE4"
          roughness={0.7}
        />
      </mesh>

      {/* Blue inner artwork */}
      <mesh position={[0, 0, 0.068]}>
        <boxGeometry args={[0.66, 0.88, 0.018]} />
        <meshStandardMaterial
          color="#D7EAF4"
          roughness={0.8}
        />
      </mesh>

      {/* Crown base */}
      <mesh position={[0, 0.25, 0.09]}>
        <boxGeometry args={[0.22, 0.025, 0.018]} />
        <meshStandardMaterial color={gold} metalness={0.7} />
      </mesh>

      {/* Crown points */}
      {[-1, 0, 1].map((n) => (
        <mesh
          key={n}
          position={[n * 0.075, 0.31 + (n === 0 ? 0.035 : 0), 0.09]}
        >
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshStandardMaterial color={gold} metalness={0.8} />
        </mesh>
      ))}

      {/* Initial */}
      <Text
        position={[0, -0.015, 0.11]}
        fontSize={0.38}
        anchorX="center"
        anchorY="middle"
        color="#718FA5"
        outlineWidth={0.004}
        outlineColor="#FFF9EF"
      >
        T
      </Text>

      {/* Decorative divider */}
      <mesh position={[0, -0.29, 0.1]}>
        <boxGeometry args={[0.32, 0.012, 0.012]} />
        <meshStandardMaterial color={gold} metalness={0.65} />
      </mesh>

      {/* Small stars */}
      {[-0.2, 0.2].map((x) => (
        <mesh key={x} position={[x, -0.37, 0.1]}>
          <sphereGeometry args={[0.018, 12, 12]} />
          <meshStandardMaterial
            color={gold}
            emissive={gold}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function RoyalWallSconces({ night }: { night: boolean }) {
  return (
    <group>
      {[-1, 1].map((side) => (
        <group
          key={side}
          position={[side * 3.72, 2.05, -2.34]}
        >
          {/* Gold wall mount */}
          <mesh>
            <boxGeometry args={[0.13, 0.28, 0.07]} />
            <meshStandardMaterial
              color="#C6A66B"
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>

          {/* Curved-looking support */}
          <mesh
            position={[0, -0.02, 0.12]}
            rotation={[Math.PI / 2.5, 0, 0]}
          >
            <cylinderGeometry args={[0.025, 0.035, 0.24, 16]} />
            <meshStandardMaterial
              color="#C6A66B"
              metalness={0.8}
              roughness={0.25}
            />
          </mesh>

          {/* Lamp body */}
          <mesh position={[0, 0.1, 0.2]}>
            <sphereGeometry args={[0.075, 20, 20]} />
            <meshStandardMaterial
              color="#FFF4DC"
              emissive="#FFE4B8"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Shade */}
          <mesh position={[0, 0.2, 0.2]}>
            <cylinderGeometry args={[0.08, 0.15, 0.16, 24, 1, true]} />
            <meshStandardMaterial
              color="#FFF8EA"
              roughness={0.8}
              side={DoubleSide}
            />
          </mesh>

          <pointLight
            position={[0, 0.12, 0.28]}
            intensity={night ? 0.75 : 0.35}
            color={night ? "#FFE5BE" : "#FFE4BB"}
            distance={night ? 3.5 : 2.5}
            decay={2}
          />
        </group>
      ))}
    </group>
  );
}

type InfoKey = "crib" | "teddy" | "window" | "lights";

const nurseryInfo: Record<
  InfoKey,
  { title: string; subtitle: string; description: string }
> = {
  crib: {
    title: "سرير الأمير الصغير",
    subtitle: "THE LITTLE PRINCE",
    description:
      "هنا أجمل الأحلام وأهدأ اللحظات، صُمّم هذا الركن الصغير بكل الحب لتميم.",
  },
  teddy: {
    title: "صديق تميم الصغير",
    subtitle: "A LITTLE FRIEND",
    description:
      "رفيق لطيف ينتظر أن يشارك أميرنا الصغير أجمل أوقاته ومغامراته.",
  },
  window: {
    title: "نافذة الأحلام",
    subtitle: "A WINDOW TO THE WORLD",
    description:
      "من هنا تبدأ حكايات النهار الهادئ وليالي الأحلام الجميلة.",
  },
  lights: {
    title: "أضواء المملكة",
    subtitle: "A MAGICAL GLOW",
    description:
      "إضاءة دافئة تحوّل عالم تميم إلى مساحة هادئة مليئة بالسكينة.",
  },
};

function Scene({
  onSelect,
  night,
}: {
  onSelect: (value: InfoKey) => void;
  night: boolean;
}) {
  return (
    <>
      <color
        attach="background"
        args={[night ? "#172334" : "#EAF2F5"]}
      />
<ambientLight intensity={night ? 0.16 : 0.85} />

<directionalLight
  position={[-4, 5, 3]}
  intensity={night ? 0.25 : 2}
  color={night ? "#A9C6E8" : "#FFF0D5"}
  castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
/>

<pointLight
  position={[-2, 2, 1]}
  intensity={night ? 0.12 : 0.8}
  color="#D7EAF4"
  distance={8}
/>

<pointLight
  position={[2, 2.5, 2]}
  intensity={night ? 0.08 : 0.65}
  color="#FFE4BB"
  distance={7}
/>
      <pointLight
        position={[2, 2.5, 2]}
        intensity={night ? 0.35 : 0.65}
        color="#FFE4BB"
        distance={7}
      />

      <Room />
      <WallDetails />

      {/* Interactive lighting */}
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect("lights");
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <CeilingLights night={night} />
        <RoyalWallSconces night={night} />
        <SideTable side={-1} night={night} />
        <SideTable side={1} night={night} />
      </group>

      {/* Interactive window */}
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect("window");
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <NurseryWindow night={night} />
      </group>

      <RoyalWallArt side={-1} />
      <RoyalWallArt side={1} />

      <NurseryRug />
      <TamimName />

      {/* Interactive crib */}
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect("crib");
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <Crib />
        <BabyBedding />
      </group>

      {/* Interactive teddy */}
      <group
        onClick={(e) => {
          e.stopPropagation();
          onSelect("teddy");
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <TeddyBear />
      </group>

      <MoonAndStars />

      <SideTable side={-1} night={night} />
      <SideTable side={1} night={night} />

      <ContactShadows
        position={[0, -0.615, 0]}
        opacity={0.75}
        scale={5}
        blur={2.2}
        far={3.5}
        resolution={2048}
        color="#4A4035"
      />

      {!night && <Environment preset="apartment" />}
    </>
  );
}


export default function NurseryScene() {
  const [selected, setSelected] = useState<InfoKey | null>(null);
  const [night, setNight] = useState(false);

  const activeInfo = selected ? nurseryInfo[selected] : null;

  return (
    <div className="relative h-[650px] w-full overflow-hidden rounded-3xl bg-[#EAF2F5]">
      <Canvas
        shadows
        camera={{ position: [4, 3, 6], fov: 40 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
        onPointerMissed={() => setSelected(null)}
      >
        <Scene onSelect={setSelected} night={night} />

        <CameraController />
      </Canvas>

      {/* Scene controls */}
      <div className="absolute left-4 top-4 z-20 flex flex-col gap-2 md:left-6 md:top-6">
        <button
          onClick={() => setNight((value) => !value)}
          className="rounded-full border border-[#C6A66B]/50 bg-[#FFFDF8]/90 px-4 py-3 text-xs text-[#79684F] shadow-lg backdrop-blur-md transition hover:bg-white"
        >
          {night ? "☀ وضع النهار" : "☾ وضع الليل"}
        </button>

        <button
          onClick={() => setSelected(null)}
          className="rounded-full border border-[#C6A66B]/40 bg-[#FFFDF8]/90 px-4 py-3 text-xs text-[#79684F] shadow-lg backdrop-blur-md transition hover:bg-white"
        >
          استكشف الغرفة
        </button>
      </div>

      {/* Exploration hint */}
      {!selected && (
        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/70 bg-white/75 px-5 py-3 text-xs text-[#71899B] shadow-lg backdrop-blur-md">
          اضغط على عناصر الغرفة لاكتشافها ✦
        </div>
      )}

      {/* Interactive information panel */}
      {activeInfo && (
        <div
          className="absolute bottom-5 right-5 z-30 w-[calc(100%-40px)] max-w-sm animate-in fade-in slide-in-from-bottom-3 duration-300 md:bottom-7 md:right-7"
          dir="rtl"
        >
          <div className="relative border border-[#C6A66B]/50 bg-[#FFFCF6]/95 p-6 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setSelected(null)}
              aria-label="إغلاق"
              className="absolute left-4 top-4 text-xl text-[#A18A69] transition hover:text-[#71899B]"
            >
              ×
            </button>

            <p
              className="text-[9px] tracking-[0.3em] text-[#B09161]"
              dir="ltr"
            >
              {activeInfo.subtitle}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#71899B]">
              {activeInfo.title}
            </h3>

            <div className="my-4 h-px w-14 bg-[#C6A66B]/70" />

            <p className="text-sm leading-8 text-[#897B69]">
              {activeInfo.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

