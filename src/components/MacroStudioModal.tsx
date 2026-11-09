import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NailColor, NailFinish, NailShape } from '../types.ts';
import { NAIL_SHADES, FINISH_OPTIONS, NAIL_SHAPES } from '../data/shades.ts';
import { luxuryAudio } from '../utils/audio.ts';
import { X, Sparkles, Sun, Check, ArrowLeft, Camera, RefreshCw } from 'lucide-react';

interface MacroStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColor: NailColor;
  onSelectColor: (color: NailColor) => void;
  activeFinish: NailFinish;
  onChangeFinish: (finish: NailFinish) => void;
}

export const MacroStudioModal: React.FC<MacroStudioModalProps> = ({
  isOpen,
  onClose,
  selectedColor,
  onSelectColor,
  activeFinish,
  onChangeFinish,
}) => {
  const [selectedShape, setSelectedShape] = useState<NailShape>('almond');
  const [glossIntensity, setGlossIntensity] = useState<number>(85);
  const [compareMode, setCompareMode] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A0E12]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#FAF4F2] border border-[#EADBD5] shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADBD5] bg-white/70 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-1.5 text-[#6E5B56] hover:text-[#2C2020] transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A8782] block font-body">
                  Studio Macro Photographique · Haute Résolution
                </span>
                <h3 className="font-editorial text-2xl text-[#2B2020] font-normal leading-tight">
                  Examen Clinique & Brillance de l'Ongle
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCompareMode(!compareMode)}
                className={`text-xs px-3 py-1.5 border transition-all cursor-pointer ${
                  compareMode
                    ? 'bg-[#30161C] text-white border-[#30161C]'
                    : 'bg-white text-[#6E5B56] border-[#DECBC4] hover:bg-[#F3E7E3]'
                }`}
              >
                {compareMode ? 'Affichage Nuance' : 'Mode Comparatif (Ongle Nu)'}
              </button>

              <button
                onClick={onClose}
                className="p-2 text-[#7E6A65] hover:text-[#2C2020] hover:bg-[#EEDFD8] transition-colors cursor-pointer"
                aria-label="Fermer la vue macro"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Grid: Macro Lens View (Left) & Haute Manucure Controls (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
            {/* Left 7 cols: Macro Studio Photograph with Dynamic Lacquer Blend */}
            <div className="lg:col-span-7 bg-[#F0E4E0] p-4 sm:p-8 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
              {/* Luxury Frame Container */}
              <div className="relative w-full max-w-md aspect-square rounded-sm overflow-hidden shadow-2xl border border-white/80 bg-white">
                {/* Ultra Macro Studio Shot of Fingertip & Cuticle */}
                <img
                  src="/src/assets/images/aurelia_macro_nail_1794215076573.jpg"
                  alt="Gros plan macro photographique d'un ongle féminin parfaitement façonné"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* SVG Overlay calibrated for the macro nail in the center */}
                {!compareMode && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      {/* Macro 3D cylinder lacquer gradient for opaque salon coat */}
                      <linearGradient id="macroCylinderLacquer" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={selectedColor.deepHex} stopOpacity="1" />
                        <stop offset="18%" stopColor={selectedColor.deepHex} stopOpacity="1" />
                        <stop offset="42%" stopColor={selectedColor.hex} stopOpacity="1" />
                        <stop offset="68%" stopColor={selectedColor.lightHex} stopOpacity="1" />
                        <stop
                          offset="76%"
                          stopColor="#FFFFFF"
                          stopOpacity={activeFinish === 'matte' ? 0.3 : 0.95}
                        />
                        <stop offset="84%" stopColor={selectedColor.lightHex} stopOpacity="1" />
                        <stop offset="100%" stopColor={selectedColor.deepHex} stopOpacity="1" />
                      </linearGradient>

                      {/* Macro softbox gloss specular highlight */}
                      <linearGradient id="macroSpecular" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity={`${(glossIntensity / 100) * 0.95}`} />
                        <stop offset="40%" stopColor="#FFFFFF" stopOpacity={`${(glossIntensity / 100) * 0.55}`} />
                        <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                      </linearGradient>

                      {/* Chrome Rainbow Specular */}
                      <linearGradient id="macroChrome" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                        <stop offset="25%" stopColor="#FDE68A" stopOpacity="0.65" />
                        <stop offset="55%" stopColor="#F472B6" stopOpacity="0.55" />
                        <stop offset="85%" stopColor="#60A5FA" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#C084FC" stopOpacity="0.35" />
                      </linearGradient>

                      {/* Golden micro-flakes */}
                      <radialGradient id="goldSpecks" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FDE047" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#CA8A04" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Macro nail mask (calibrated to center nail: center 57, 36; rx 16.5; ry 19.5; rotate 26deg) */}
                    <g transform="rotate(26, 57, 36)">
                      {/* Opaque 3D Salon Lacquer Layer */}
                      <ellipse
                        cx="57"
                        cy="36"
                        rx="16.5"
                        ry="19.5"
                        fill="url(#macroCylinderLacquer)"
                        style={{
                          opacity: 0.98,
                          transition: 'fill 300ms ease, opacity 300ms ease',
                        }}
                      />

                      {/* Cuticle base shadow */}
                      <ellipse
                        cx="56"
                        cy="44"
                        rx="14"
                        ry="9"
                        fill={selectedColor.deepHex}
                        style={{
                          mixBlendMode: 'multiply',
                          opacity: 0.45,
                        }}
                      />

                      {/* Specific Finish Highlights */}
                      {activeFinish === 'glossy' && (
                        <ellipse
                          cx="60.5"
                          cy="32.5"
                          rx="5.5"
                          ry="11.5"
                          fill="url(#macroSpecular)"
                          style={{
                            mixBlendMode: 'screen',
                            opacity: glossIntensity / 100,
                          }}
                        />
                      )}

                      {activeFinish === 'chrome' && (
                        <ellipse
                          cx="57"
                          cy="36"
                          rx="14.8"
                          ry="17.2"
                          fill="url(#macroChrome)"
                          style={{
                            mixBlendMode: 'screen',
                            opacity: 0.7,
                          }}
                        />
                      )}

                      {activeFinish === 'glitter' && (
                        <g style={{ mixBlendMode: 'screen' }}>
                          <circle cx="53" cy="30" r="1.4" fill="url(#goldSpecks)" />
                          <circle cx="61" cy="36" r="1.8" fill="url(#goldSpecks)" />
                          <circle cx="57" cy="42" r="1.2" fill="url(#goldSpecks)" />
                          <circle cx="63" cy="28" r="1.5" fill="#FFFFFF" opacity="0.85" />
                          <circle cx="51" cy="38" r="1.3" fill="url(#goldSpecks)" />
                        </g>
                      )}

                      {activeFinish === 'french' && (
                        <path
                          d="M 43 27 Q 57 21 71 27 Q 57 24 43 27"
                          fill="#FFFFFF"
                          style={{ opacity: 0.96 }}
                        />
                      )}

                      {activeFinish === 'goldleaf' && (
                        <g style={{ mixBlendMode: 'screen' }}>
                          <path
                            d="M 52 40 L 56 38 L 55 42 Z"
                            fill="#FACC15"
                            opacity="0.9"
                          />
                          <path
                            d="M 58 41 L 62 39 L 60 43 Z"
                            fill="#EAB308"
                            opacity="0.85"
                          />
                        </g>
                      )}
                    </g>
                  </svg>
                )}

                {/* Macro metadata badge */}
                <div className="absolute top-3 left-3 bg-[#1A0E12]/80 backdrop-blur-md px-2.5 py-1 text-[10px] text-white flex items-center gap-1.5 border border-white/20">
                  <Camera className="w-3 h-3 text-[#E8D4A8]" />
                  <span className="font-mono tracking-wider">MACRO 60mm · f/2.8 · 1:1</span>
                </div>

                {/* Live shade watermark */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 text-right border border-[#EADBD5]">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-[#8C7974]">
                    {selectedColor.number}
                  </span>
                  <span className="block text-xs font-serif font-medium text-[#2C2020]">
                    {selectedColor.name}
                  </span>
                </div>
              </div>

              {/* Gloss intensity slider */}
              <div className="w-full max-w-md mt-4 flex items-center justify-between gap-4 text-xs font-body text-[#6C5B56]">
                <div className="flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#B87A65]" />
                  <span>Intensité du reflet softbox :</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={glossIntensity}
                    onChange={(e) => setGlossIntensity(Number(e.target.value))}
                    className="w-28 accent-[#A8283E] cursor-pointer"
                  />
                  <span className="font-mono tabular-nums text-[11px] w-8 text-right">
                    {glossIntensity}%
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Customization Studio Controls */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between gap-6 overflow-y-auto">
              <div className="space-y-6">
                {/* 1. Color Selector directly in Macro Mode (As requested!) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#463834] font-body">
                      1. Nuance de Vernis
                    </span>
                    <span className="text-xs text-[#8C7A75] font-serif italic">
                      {selectedColor.name} ({selectedColor.number})
                    </span>
                  </div>

                  <div className="grid grid-cols-6 gap-2">
                    {NAIL_SHADES.map((shade) => {
                      const isSelected = selectedColor.id === shade.id;
                      return (
                        <button
                          key={shade.id}
                          onClick={() => {
                            luxuryAudio.playBottleSelect();
                            onSelectColor(shade);
                          }}
                          className={`relative aspect-square rounded-sm overflow-hidden border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#30161C] ring-2 ring-[#30161C]/30 scale-105'
                              : 'border-white/60 hover:scale-102'
                          }`}
                          style={{ backgroundColor: shade.hex }}
                          title={`${shade.number} · ${shade.name}`}
                        >
                          {isSelected && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Finish / Texture Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#463834] font-body">
                      2. Texture & Finition
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {FINISH_OPTIONS.map((finish) => {
                      const isSelected = activeFinish === finish.id;
                      return (
                        <button
                          key={finish.id}
                          onClick={() => {
                            luxuryAudio.playSoftClick();
                            onChangeFinish(finish.id);
                          }}
                          className={`p-2.5 text-left transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-[#30161C] text-white border-[#30161C]'
                              : 'bg-white text-[#5E4D48] border-[#E8DDD8] hover:bg-[#F5EAE6]'
                          }`}
                        >
                          <span className="block text-xs font-medium">{finish.label}</span>
                          <span className={`block text-[10px] ${isSelected ? 'text-[#D0B2AA]' : 'text-[#96827D]'}`}>
                            {finish.sublabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Nail Shape Selector (Morphologie de l'ongle) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#463834] font-body">
                      3. Forme Haute Couture
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {NAIL_SHAPES.map((shape) => {
                      const isSelected = selectedShape === shape.id;
                      return (
                        <button
                          key={shape.id}
                          onClick={() => {
                            luxuryAudio.playSoftClick();
                            setSelectedShape(shape.id);
                          }}
                          className={`p-2.5 text-left transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-white text-[#2B2020] border-[#9E3349] ring-1 ring-[#9E3349]/40'
                              : 'bg-white/60 text-[#6C5B57] border-[#E8DDD8] hover:bg-white'
                          }`}
                        >
                          <span className="block text-xs font-medium">{shape.label}</span>
                          <span className="block text-[10px] text-[#9A8782] line-clamp-1">
                            {shape.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Close & Return to full hand button */}
              <div className="pt-4 border-t border-[#EADBD5]">
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-[#30161C] hover:bg-[#4A0E17] text-white text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Revenir à la Main Complète</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
