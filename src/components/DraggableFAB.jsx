import { useState, useRef, useEffect, useCallback } from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { personalInfo } from '../data/mockData';

const ACTIONS = [
  { key: 'github',   Icon: SiGithub,      label: 'GitHub',   color: '#181717', getHref: l => l.github,              target: '_blank' },
  { key: 'linkedin', Icon: FaLinkedinIn,  label: 'LinkedIn', color: '#0A66C2', getHref: l => l.linkedin,            target: '_blank' },
  { key: 'email',    Icon: FaEnvelope,    label: 'Email',    color: '#0048C8', getHref: l => `mailto:${l.email}`,   target: undefined },
  { key: 'cv',         Icon: FaFilePdf,     label: 'CV',         color: '#DC2626', getHref: l => l.cv,         target: undefined, download: true },
  { key: 'transcript', Icon: FaFilePdf,     label: 'Transcript', color: '#7C3AED', getHref: l => l.transcript, target: undefined, download: true },
];

export default function DraggableFAB() {
  const { links } = personalInfo;
  const [open, setOpen]   = useState(false);
  const [pos,  setPos]    = useState({ x: window.innerWidth - 72, y: window.innerHeight - 72 });
  const dragging = useRef(false);
  const startRef = useRef({ mx: 0, my: 0, px: 0, py: 0 });
  const moved    = useRef(false);
  const btnRef   = useRef(null);

  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    moved.current    = false;
    startRef.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
    btnRef.current.setPointerCapture(e.pointerId);
  }, [pos]);

  const onPointerMove = useCallback((e) => {
    if (!dragging.current) return;
    const dx = e.clientX - startRef.current.mx;
    const dy = e.clientY - startRef.current.my;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved.current = true;
    const size = 56;
    const nx = Math.max(0, Math.min(window.innerWidth  - size, startRef.current.px + dx));
    const ny = Math.max(0, Math.min(window.innerHeight - size, startRef.current.py + dy));
    setPos({ x: nx, y: ny });
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    if (!moved.current) setOpen(o => !o);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest('.fab')) setOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);

  return (
    <div className="fab" style={{ left: pos.x, top: pos.y }}>
      {/* Action bubbles */}
      {ACTIONS.map(({ key, Icon, label, color, getHref, target, download }, i) => (
        <a
          key={key}
          href={getHref(links)}
          target={target}
          rel={target === '_blank' ? 'noreferrer' : undefined}
          download={download || undefined}
          className={`fab__action fab__action--${i + 1}${open ? ' fab__action--open' : ''}`}
          aria-label={label}
          style={{ '--fc': color }}
          onClick={() => setOpen(false)}
        >
          <Icon size={18} />
        </a>
      ))}

      {/* Main + button */}
      <button
        ref={btnRef}
        className={`fab__btn${open ? ' fab__btn--open' : ''}`}
        aria-label="Toggle quick links"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{ touchAction: 'none' }}
      >
        <span className="fab__plus">+</span>
      </button>
    </div>
  );
}
