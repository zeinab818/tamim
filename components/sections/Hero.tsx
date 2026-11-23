
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type Pointer = {
  x: number;
  y: number;
};

// ========================================
// TEDDY MODEL
// ========================================

function TeddyModel({
  pointer,
}: {
  pointer: React.RefObject<Pointer>;
}) {
  const { scene } = useGLTF("/models/tamim-teddy.glb");
  const group = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.rotation.set(0, 0, 0);
    cloned.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(cloned);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const maxDimension = Math.max(size.x, size.y, size.z);
    const scale = 2.65 / maxDimension;

    return {
      scene: cloned,
      scale,
      position: new THREE.Vector3(
        -center.x * scale,
        -box.min.y * scale,
        -center.z * scale
      ),
    };
  }, [scene]);

  useFrame((state, delta) => {
    const current = group.current;
    if (!current) return;

    const { x, y } = pointer.current;
    const time = state.clock.elapsedTime;

    const targetRotationY = x * 0.4;
    const targetRotationX = -y * 0.16;

    current.rotation.y = THREE.MathUtils.damp(
      current.rotation.y,
      targetRotationY + Math.sin(time * 0.8) * 0.035,
      5,
      delta
    );

    current.rotation.x = THREE.MathUtils.damp(
      current.rotation.x,
      targetRotationX,
      5,
      delta
    );

    current.rotation.z = THREE.MathUtils.damp(
      current.rotation.z,
      -x * 0.045,
      5,
      delta
    );

    current.position.y = THREE.MathUtils.damp(
      current.position.y,
      -0.8 + Math.sin(time * 1.7) * 0.45,
      4,
      delta
    );

    current.position.x = THREE.MathUtils.damp(
      current.position.x,
      x * 0.1,
      4,
      delta
    );
  });

  return (
    <group ref={group}>
      <primitive
        object={model.scene}
        scale={model.scale}
        position={model.position}
      />
    </group>
  );
}

useGLTF.preload("/models/tamim-teddy.glb");

// ========================================
// HERO 3D SCULPTURE
// ========================================

function HeroSculpture({
  pointer,
}: {
  pointer: React.RefObject<Pointer>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 34 }}
      dpr={[1, 1.7]}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[-3, 4, 5]}
        intensity={2.5}
        color="#FFF9EF"
      />

      <pointLight
        position={[3, 1, 3]}
        intensity={2}
        color="#D7EAF4"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={1.2}
        color="#D8C5A5"
      />

      <pointLight
        position={[0, 3, -3]}
        intensity={1.5}
        color="#FFFFFF"
      />

      <Suspense fallback={null}>
        <TeddyModel pointer={pointer} />
      </Suspense>
    </Canvas>
  );
}

// ========================================
// HERO SECTION
// ========================================

export default function Hero() {
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    pointer.current = {
      x: (x - 0.5) * 2,
      y: (y - 0.5) * 2,
    };

    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${x * 100}%`
    );

    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${y * 100}%`
    );
  };

  const handlePointerLeave = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    pointer.current = { x: 0, y: 0 };

    event.currentTarget.style.setProperty(
      "--pointer-x",
      "50%"
    );

    event.currentTarget.style.setProperty(
      "--pointer-y",
      "50%"
    );
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate flex min-h-[760px] w-full flex-col justify-between overflow-hidden bg-[#F8F6F0] px-6 pb-10 pt-8 text-[#526575] md:min-h-[850px] md:px-14 md:pb-12 md:pt-10 lg:px-20"
      style={
        {
          "--pointer-x": "50%",
          "--pointer-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Ambient light */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 38% 42% at var(--pointer-x) var(--pointer-y), rgba(215,234,244,.65), transparent 75%)",
        }}
      />

      {/* Fine editorial grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Header */}
      <header className="relative  z-20 flex items-center justify-between border-b border-[#C9C4B9]/50 pb-5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium tracking-[0.38em] text-[#71899B]">
            A NEW LITTLE UNIVERSE
          </span>

          <span className="text-[9px] tracking-[0.24em] text-[#A69B8B]">
            EST. 02 — 11 — 2026
          </span>
        </div>

        <div className="text-right">
          <span className="block text-[9px] tracking-[0.32em] text-[#9D927F]">
            THE ARRIVAL OF
          </span>

          <span className="mt-1 block text-[10px] tracking-[0.28em] text-[#71899B]">
            SOMEONE PRECIOUS
          </span>
        </div>
      </header>

  


{/* Main composition */}
<div
  dir="rtl"
  className="relative z-10 lg:mr-50 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-4 py-8 md:flex-row md:px-8 md:py-0"
>
  {/* Name */}
  <div className="relative z-20 flex w-full min-w-0 flex-col items-center text-center md:w-[55%] md:items-start md:text-right">
    <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
      <span className="h-px w-9 shrink-0 bg-[#C3A77B]" />
      <p className="text-[9px] font-medium tracking-[0.3em] text-[#A28D6C] md:text-[10px]">
        A MOMENT MADE OF WONDER
      </p>
    </div>

    <div className="relative inline-block">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none whitespace-nowrap font-tamim text-[clamp(5.5rem,13vw,12rem)] font-semibold leading-[1.2] tracking-[-0.075em] text-[#A8B8C0]/30"
        style={{ transform: "translate(-3px, 7px)" }}
      >
        تَمِيم
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none whitespace-nowrap font-tamim text-[clamp(5.5rem,13vw,12rem)] font-semibold leading-[1.2] tracking-[-0.075em] text-[#D2C2A5]/45"
        style={{ transform: "translate(-1px, 3px)" }}
      >
        تَمِيم
      </span>

      <h1
        dir="rtl"
        className="relative z-10 whitespace-nowrap font-tamim text-[clamp(6.5rem,16vw,14rem)] font-semibold leading-[1.15] tracking-[-0.075em]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, #647D8D 5%, #9DB0B9 32%, #526B7B 48%, #D0B98F 66%, #71899B 88%)",
          backgroundSize: "220% 100%",
          backgroundPosition: "var(--pointer-x) 50%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          filter: "drop-shadow(0 9px 10px rgba(85,105,118,.12))",
        }}
      >
        تَمِيم
      </h1>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[9%] top-[2%] z-20 text-[clamp(1rem,2vw,1.8rem)] text-[#BDA77F]"
        style={{
          transform: "rotate(-12deg)",
          filter: "drop-shadow(0 2px 3px rgba(155,130,88,.2))",
        }}
      >
        ♛
      </span>
    </div>

    <div className="mt-5 flex flex-col items-center gap-4 md:mt-6 md:items-start">
      <p className="max-w-[300px] text-center text-[12px] leading-[2] text-[#7D8585] md:text-right md:text-[14px]">
        A little soul, a beautiful beginning,
        <br className="hidden md:block" />
        and a love beyond words.
      </p>

      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#C3A77B]" />
        <span className="text-[9px] tracking-[0.25em] text-[#9D927F]">
          OUR GREATEST GIFT
        </span>
      </div>
    </div>
  </div>

  {/* Teddy */}
  <div className="relative z-10 h-[350px] w-full max-w-[420px] shrink-0 md:h-[580px] md:w-[45%] md:max-w-none">
    <HeroSculpture pointer={pointer} />

    <div className="pointer-events-none absolute bottom-[5%] left-[12%] right-[12%] h-[12%] rounded-[50%] bg-[#A7B8C1]/30 blur-3xl" />
  </div>
</div>


      {/* Footer details */}
      <footer className="relative z-20 flex flex-col gap-5 border-t border-[#C9C4B9]/50 pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[9px] tracking-[0.3em] text-[#A28D6C]">
            WELCOME TO THE WORLD
          </p>

          <p className="mt-2 text-[11px] tracking-[0.16em] text-[#71899B]">
            NOVEMBER 02, 2026
          </p>
        </div>

        <a
          href="#nursery"
          className="group flex w-fit items-center gap-4 text-[9px] tracking-[0.24em] text-[#71899B] transition-colors hover:text-[#B69A6D]"
        >
          <span>ENTER TAMIM&apos;S WORLD</span>

          <span className="transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>

        <span className="text-[9px] tracking-[0.2em] text-[#B0A89B]">
          MADE WITH LOVE
        </span>
      </footer>
    </section>
  );
}
