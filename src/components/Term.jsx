export default function Term({ t, desc = "", link = "#" }) {
  return (
    <span className="term" title={desc} style={{ position: 'relative' }}>
      <a href={link}>{t}</a>
    </span>
  );
}
