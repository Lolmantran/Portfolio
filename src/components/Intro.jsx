import { useEffect, useState } from 'react';
import { personalInfo } from '../data/mockData';

export default function Intro({ onDone, onLeaving }) {
  const [leaving, setLeaving] = useState(false);

  const initials = personalInfo.name
    .split(' ')
    .map(w => w[0])
    .join('');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setLeaving(true);
      onLeaving?.();
    }, 2800);
    const t2 = setTimeout(() => onDone?.(), 3750);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone, onLeaving]);

  return (
    <div className={`intro${leaving ? ' intro--leaving' : ''}`} aria-hidden="true">
      <div className="intro__orb intro__orb--1" />
      <div className="intro__orb intro__orb--2" />
      <div className="intro__content">
        <div className="intro__monogram">{initials}</div>
        <div className="intro__name">{personalInfo.name}</div>
        <div className="intro__bar">
          <div className="intro__bar-fill" />
        </div>
      </div>
    </div>
  );
}
