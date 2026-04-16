import React, { useRef, useEffect } from 'react';

function Particles() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      
      ctxRef.current = canvas.getContext('2d');
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  
  const drawBlueCircle = () => {
    const ctx = ctxRef.current; 
    if (!ctx) return; 

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(200, 200, 40, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <>
       <canvas 
        ref={canvasRef} 
        className='fixed top-0 left-0 w-full h-full block bg-black -z-10'
      />
    </>
  );
}

export default Particles;