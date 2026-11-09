export interface NailColor {
  id: 'nude' | 'rose' | 'rouge' | 'corail' | 'violet' | 'bordeaux';
  number: string;
  name: string;
  frenchTitle: string;
  hex: string;
  deepHex: string;
  lightHex: string;
  ambientBg: string;
  glowColor: string;
  description: string;
  notes: string[];
  inspiration: string;
}

export type NailFinish = 'glossy' | 'matte' | 'chrome' | 'glitter' | 'french' | 'goldleaf';

export interface NailFinishOption {
  id: NailFinish;
  label: string;
  sublabel: string;
  description: string;
}

export type NailShape = 'almond' | 'square' | 'oval' | 'stiletto';

export interface NailShapeOption {
  id: NailShape;
  label: string;
  description: string;
}

export interface FingerConfig {
  id: 'thumb' | 'index' | 'middle' | 'ring' | 'pinky';
  name: string;
  labelFr: string;
  x: number;       // Native X in 1200px coordinate system
  y: number;       // Native Y in 896px coordinate system
  rx: number;      // Radius X in px
  ry: number;      // Radius Y in px
  xPercent: number; // Center X in %
  yPercent: number; // Center Y in %
  rotate: number;   // Rotation angle in deg
  zoomScale: number;
}
