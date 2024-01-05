export interface CanvasProps {
  draw: (context: CanvasRenderingContext2D | null) => void,
  width: number,
  height: number,
}