"use client";
import { useRive } from '@rive-app/react-canvas';
import React from 'react'

const page = () => {
  const { RiveComponent, rive } = useRive({
    src: "/animations/loading.riv",
    // stateMachines: "State Machine 1",
    autoplay: true,
  });

  if (true) {
    return (
      <div className='h-screen flex-center'>
        <RiveComponent width={200} height={200} />
      </div>
    );
  }
}

export default page