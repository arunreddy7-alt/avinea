export function RevealText({ text, className, tag = "div" }) {
  const Tag = tag;
  return <Tag className={className}>{text}</Tag>;
}
