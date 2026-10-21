import { BENEFICIOS } from "../data";

export default function Benefits() {
  return (
    <div className="wrap benefits-wrap">
      <div className="ben">
        {BENEFICIOS.map(([titulo, desc, icone]) => (
          <div key={titulo}>
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="20" cy="20" r="15" />
              <path d={icone} />
            </svg>
            <div><b>{titulo}</b><span>{desc}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
