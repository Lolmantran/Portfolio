export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="section-header">
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__sub">{subtitle}</p>}
    </div>
  );
}
