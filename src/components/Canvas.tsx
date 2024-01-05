import { useEffect, useRef } from "react";
import type { CanvasProps } from "./Canvas.interface";

function Canvas({ draw, width, height }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if(canvasRef.current) {
      canvasContextRef.current = canvasRef.current.getContext("2d");
      draw(canvasContextRef.current);
    } 
  });

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Canvas;