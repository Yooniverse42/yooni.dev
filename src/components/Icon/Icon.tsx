export default function Icon({
  icon,
  size = 24,
  className,
}: {
  icon: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} className={className}>
      <use href={`/icons/stack.svg#${icon}`} />
    </svg>
  );
}
