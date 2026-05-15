const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const brandDir = path.join(__dirname, 'brand');
const pngPath = path.join(brandDir, 'logo.png');
const b64 = fs.readFileSync(pngPath).toString('base64');
const dataUrl = 'data:image/png;base64,' + b64;
const fileOut = execFileSync('file', ['-b', pngPath], { encoding: 'utf8' });
const m = fileOut.match(/(\d+)\s*x\s*(\d+)/);
const natW = m ? parseInt(m[1], 10) : 220;
const natH = m ? parseInt(m[2], 10) : 46;

/** Sidebar-friendly wordmark (~36px tall, max ~220px wide) */
const maxH = 36;
const maxW = 220;
const scale = Math.min(maxH / natH, maxW / natW, 1);
const w = Math.max(1, Math.round(natW * scale));
const h = Math.max(1, Math.round(natH * scale));

const labelEndX = 132;
const imgX = labelEndX;
const totalW = imgX + w + 12;
const svgH = 40;
const imgY = Math.max(0, Math.round((svgH - h) / 2));

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalW}" height="${svgH}" viewBox="0 0 ${totalW} ${svgH}" role="img" aria-label="Design System wecater">
  <text x="0" y="27" font-family="Inter, system-ui, sans-serif" font-size="15" font-weight="600" letter-spacing="-0.01em" fill="#101828">Design System</text>
  <image x="${imgX}" y="${imgY}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" xlink:href="${dataUrl}"/>
</svg>`;

fs.writeFileSync(path.join(brandDir, 'sidebar-brand.svg'), svg);
console.log('wrote sidebar-brand.svg', totalW, 'x', svgH, 'display', w, 'x', h, '(natural', natW, 'x', natH + ')');
