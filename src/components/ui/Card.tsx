export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`border border-terra/20 bg-terra/10 p-6 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
