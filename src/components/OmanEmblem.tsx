/**
 * Official Emblem of the Sultanate of Oman (شعار سلطنة عُمان)
 * Faithful high-detail vector representation based on the official insignia (IMG_1345)
 * Featuring the traditional Omani Khanjar and crossed swords with authentic filigree.
 */

interface OmanEmblemProps {
  className?: string;
  variant?: 'gold' | 'white' | 'navy' | 'monochrome' | 'currentColor';
}

export function OmanEmblem({
  className = 'w-12 h-12',
  variant = 'gold',
}: OmanEmblemProps) {
  const strokeColor =
    variant === 'gold'
      ? '#D4AF37'
      : variant === 'white'
      ? '#FFFFFF'
      : variant === 'navy'
      ? '#1B2B3A'
      : variant === 'monochrome'
      ? '#111827'
      : 'currentColor';

  const fillColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'gold'
      ? '#F59E0B'
      : variant === 'navy'
      ? '#1B2B3A'
      : '#000000';

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="شعار سلطنة عُمان الرسمي - الخنجر والسيفان"
    >
      <g stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* ========================================================= */}
        {/* CROSSED SWORDS - UPPER HILTS & SCABBARDS                 */}
        {/* ========================================================= */}

        {/* --- Top-Right Sword Upper Handle & Scabbard --- */}
        {/* Pommel / Cap */}
        <path d="M420 22 L432 30 L418 52 L406 44 Z" fill={fillColor} fillOpacity="0.15" />
        <circle cx="423" cy="27" r="3.5" fill={fillColor} />
        {/* Grip bands */}
        <line x1="418" y1="52" x2="406" y2="44" />
        <line x1="411" y1="63" x2="399" y2="55" />
        <line x1="404" y1="74" x2="392" y2="66" />
        <line x1="397" y1="85" x2="385" y2="77" />
        <path d="M418 52 L388 98 L376 90 L406 44 Z" />
        {/* Scabbard upper body */}
        <path d="M388 98 L286 242 L266 228 L376 90 Z" fill={fillColor} fillOpacity="0.05" />
        {/* Scabbard Hatch Pattern (Right) */}
        <path d="M375 116 L298 225 M362 107 L285 216 M386 133 L320 227" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M352 148 L382 170 M332 176 L362 198 M312 204 L342 226" strokeWidth="2" />
        {/* Silver ring bands */}
        <path d="M358 139 L338 125 L346 114 L366 128 Z" fill={fillColor} fillOpacity="0.2" />
        <circle cx="349" cy="129" r="4" fill={fillColor} />

        {/* --- Top-Left Sword Upper Handle & Scabbard --- */}
        {/* Pommel / Cap */}
        <path d="M80 22 L68 30 L82 52 L94 44 Z" fill={fillColor} fillOpacity="0.15" />
        <circle cx="77" cy="27" r="3.5" fill={fillColor} />
        {/* Grip bands */}
        <line x1="82" y1="52" x2="94" y2="44" />
        <line x1="89" y1="63" x2="101" y2="55" />
        <line x1="96" y1="74" x2="108" y2="66" />
        <line x1="103" y1="85" x2="115" y2="77" />
        <path d="M82 52 L112 98 L124 90 L94 44 Z" />
        {/* Scabbard upper body */}
        <path d="M112 98 L214 242 L234 228 L124 90 Z" fill={fillColor} fillOpacity="0.05" />
        {/* Scabbard Hatch Pattern (Left) */}
        <path d="M125 116 L202 225 M138 107 L215 216 M114 133 L180 227" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M148 148 L118 170 M168 176 L138 198 M188 204 L158 226" strokeWidth="2" />
        {/* Silver ring bands */}
        <path d="M142 139 L162 125 L154 114 L134 128 Z" fill={fillColor} fillOpacity="0.2" />
        <circle cx="151" cy="129" r="4" fill={fillColor} />

        {/* ========================================================= */}
        {/* CROSSED SWORDS - LOWER BLADES WITH ARABESQUE EMBROIDERY   */}
        {/* ========================================================= */}

        {/* --- Bottom-Left Curved Scabbard --- */}
        <path
          d="M210 262 C185 305 140 375 22 470 C18 474 12 478 18 488 C24 496 36 492 48 484 C170 395 218 315 235 278 Z"
          fill={fillColor}
          fillOpacity="0.08"
        />
        {/* Bottom-left Chape (Tip) */}
        <path d="M18 488 L58 456 L72 472 L36 494 Z" fill={fillColor} fillOpacity="0.25" />
        {/* Arabesque / Vines engraving on lower-left blade */}
        <path d="M60 450 C80 432 100 410 115 390 C105 388 95 400 85 410" strokeWidth="2.5" />
        <path d="M115 390 C135 368 150 345 170 320 C160 318 145 330 135 345" strokeWidth="2.5" />
        <circle cx="95" cy="402" r="3.5" fill={fillColor} />
        <circle cx="145" cy="336" r="3.5" fill={fillColor} />
        <circle cx="40" cy="475" r="3" fill={fillColor} />

        {/* --- Bottom-Right Curved Scabbard --- */}
        <path
          d="M290 262 C315 305 360 375 478 470 C482 474 488 478 482 488 C476 496 464 492 452 484 C330 395 282 315 265 278 Z"
          fill={fillColor}
          fillOpacity="0.08"
        />
        {/* Bottom-right Chape (Tip) */}
        <path d="M482 488 L442 456 L428 472 L464 494 Z" fill={fillColor} fillOpacity="0.25" />
        {/* Arabesque / Vines engraving on lower-right blade */}
        <path d="M440 450 C420 432 400 410 385 390 C395 388 405 400 415 410" strokeWidth="2.5" />
        <path d="M385 390 C365 368 350 345 330 320 C340 318 355 330 365 345" strokeWidth="2.5" />
        <circle cx="405" cy="402" r="3.5" fill={fillColor} />
        <circle cx="355" cy="336" r="3.5" fill={fillColor} />
        <circle cx="460" cy="475" r="3" fill={fillColor} />

        {/* ========================================================= */}
        {/* HORIZONTAL BELT MOUNTS & CLASPS (LEFT & RIGHT RECTANGLES) */}
        {/* ========================================================= */}

        {/* Left Clasp */}
        <g>
          <rect x="78" y="215" width="80" height="55" rx="4" fill={fillColor} fillOpacity="0.12" />
          <rect x="83" y="220" width="70" height="45" rx="3" strokeWidth="2" strokeDasharray="3 2" />
          {/* Inner ornamental filigree rosette */}
          <ellipse cx="118" cy="242" rx="16" ry="10" strokeWidth="2" />
          <circle cx="118" cy="242" r="4" fill={fillColor} />
          <line x1="90" y1="242" x2="102" y2="242" strokeWidth="2" />
          <line x1="134" y1="242" x2="146" y2="242" strokeWidth="2" />
          {/* Left extension band */}
          <path d="M158 226 L195 234 L195 252 L158 260 Z" fill={fillColor} fillOpacity="0.15" />
          <line x1="168" y1="230" x2="168" y2="256" strokeWidth="2" />
          <line x1="178" y1="232" x2="178" y2="254" strokeWidth="2" />
          <line x1="188" y1="234" x2="188" y2="252" strokeWidth="2" />
        </g>

        {/* Right Clasp */}
        <g>
          <rect x="342" y="215" width="80" height="55" rx="4" fill={fillColor} fillOpacity="0.12" />
          <rect x="347" y="220" width="70" height="45" rx="3" strokeWidth="2" strokeDasharray="3 2" />
          {/* Inner ornamental filigree rosette */}
          <ellipse cx="382" cy="242" rx="16" ry="10" strokeWidth="2" />
          <circle cx="382" cy="242" r="4" fill={fillColor} />
          <line x1="354" y1="242" x2="366" y2="242" strokeWidth="2" />
          <line x1="398" y1="242" x2="410" y2="242" strokeWidth="2" />
          {/* Right extension band */}
          <path d="M342 226 L305 234 L305 252 L342 260 Z" fill={fillColor} fillOpacity="0.15" />
          <line x1="332" y1="230" x2="332" y2="256" strokeWidth="2" />
          <line x1="322" y1="232" x2="322" y2="254" strokeWidth="2" />
          <line x1="312" y1="234" x2="312" y2="252" strokeWidth="2" />
        </g>

        {/* ========================================================= */}
        {/* CENTRAL TRADITIONAL OMANI KHANJAR (الخنجر العُماني الأصيل)  */}
        {/* ========================================================= */}

        {/* --- Top Crown & Pommel --- */}
        {/* Pinnacle Top bead */}
        <circle cx="250" cy="24" r="5" fill={fillColor} />
        <path d="M246 29 L254 29 L257 37 L243 37 Z" fill={fillColor} fillOpacity="0.2" />
        {/* Main Pommel Bulb */}
        <path
          d="M243 37 C234 40 220 50 222 66 C224 82 238 90 242 94 L258 94 C262 90 276 82 278 66 C280 50 266 40 257 37 Z"
          fill={fillColor}
          fillOpacity="0.1"
        />
        {/* Concentric circles filigree on pommel */}
        <circle cx="250" cy="62" r="14" strokeWidth="2.5" />
        <circle cx="250" cy="62" r="8" strokeWidth="2" />
        <circle cx="250" cy="62" r="3" fill={fillColor} />
        <circle cx="236" cy="62" r="2.5" fill={fillColor} />
        <circle cx="264" cy="62" r="2.5" fill={fillColor} />
        <circle cx="250" cy="48" r="2.5" fill={fillColor} />
        <circle cx="250" cy="76" r="2.5" fill={fillColor} />

        {/* --- Khanjar Waist (Grip) --- */}
        <path d="M242 94 L240 138 L260 138 L258 94 Z" fill={fillColor} fillOpacity="0.15" />
        <circle cx="250" cy="116" r="6" strokeWidth="2" />
        <circle cx="250" cy="116" r="2.5" fill={fillColor} />
        <line x1="242" y1="105" x2="258" y2="105" strokeWidth="2" />
        <line x1="241" y1="127" x2="259" y2="127" strokeWidth="2" />

        {/* --- Khanjar Lower Hilt & Collar (الصدر) --- */}
        <path
          d="M239 138 C232 140 220 144 220 162 L220 206 C220 216 226 224 235 228 L265 228 C274 224 280 216 280 206 L280 162 C280 144 268 140 261 138 Z"
          fill={fillColor}
          fillOpacity="0.08"
        />
        {/* Collar decorative panels */}
        <circle cx="250" cy="158" r="11" strokeWidth="2.5" />
        <circle cx="250" cy="158" r="5" strokeWidth="2" />
        <circle cx="250" cy="158" r="2" fill={fillColor} />
        <path d="M225 174 L275 174" strokeWidth="2.5" />
        <path d="M224 182 L276 182" strokeWidth="2" strokeDasharray="3 2" />
        {/* Small rope filigree across chest */}
        <path d="M222 192 C230 196 240 196 250 192 C260 188 270 188 278 192" strokeWidth="2" />
        <path d="M222 202 C230 206 240 206 250 202 C260 198 270 198 278 202" strokeWidth="2" />

        {/* --- Suspension Rings / Horns (القرون / مرابط الخنجر) --- */}
        {/* Left Ring Loop */}
        <ellipse cx="218" cy="242" rx="14" ry="18" strokeWidth="3.5" fill={fillColor} fillOpacity="0.1" />
        <ellipse cx="218" cy="242" rx="8" ry="12" strokeWidth="2" />
        {/* Right Ring Loop */}
        <ellipse cx="282" cy="242" rx="14" ry="18" strokeWidth="3.5" fill={fillColor} fillOpacity="0.1" />
        <ellipse cx="282" cy="242" rx="8" ry="12" strokeWidth="2" />
        {/* Central Intersecting Knot / Rope Details */}
        <path d="M232 232 C240 238 245 248 245 258 C240 262 234 254 232 248 Z" fill={fillColor} />
        <path d="M268 232 C260 238 255 248 255 258 C260 262 266 254 268 248 Z" fill={fillColor} />
        {/* Parallel wire braids in the center */}
        <line x1="240" y1="236" x2="260" y2="236" strokeWidth="2" />
        <line x1="238" y1="244" x2="262" y2="244" strokeWidth="2" />
        <line x1="237" y1="252" x2="263" y2="252" strokeWidth="2" />

        {/* --- Curved Scabbard (غمد الخنجر العُماني) --- */}
        {/* Upper sheath trunk */}
        <path
          d="M234 228 L232 280 C230 300 220 330 198 342 L144 342 C134 340 126 332 126 322 C126 312 134 300 148 296 L202 290 C212 284 218 266 220 248 Z"
          fill={fillColor}
          fillOpacity="0.08"
        />
        {/* Scabbard Chape & Curved Tip */}
        <path
          d="M144 342 C132 342 122 334 122 322 C122 310 132 296 148 296 L148 342 Z"
          fill={fillColor}
          fillOpacity="0.25"
        />
        {/* Rosette & tassel cap on the tip */}
        <path
          d="M122 308 C116 312 114 322 118 328 C120 332 124 334 128 334"
          strokeWidth="2.5"
        />
        <circle cx="120" cy="320" r="3.5" fill={fillColor} />

        {/* Vertical and curved stitch marks on the scabbard */}
        <line x1="156" y1="304" x2="156" y2="334" strokeWidth="2" />
        <line x1="172" y1="308" x2="172" y2="338" strokeWidth="2" />
        <line x1="188" y1="312" x2="188" y2="340" strokeWidth="2" />
        <circle cx="156" cy="312" r="1.5" fill={fillColor} />
        <circle cx="156" cy="326" r="1.5" fill={fillColor} />
        <circle cx="172" cy="316" r="1.5" fill={fillColor} />
        <circle cx="172" cy="330" r="1.5" fill={fillColor} />
        <circle cx="188" cy="320" r="1.5" fill={fillColor} />
        <circle cx="188" cy="334" r="1.5" fill={fillColor} />

        {/* Diagonal scabbard division line */}
        <path d="M202 290 L198 342" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
