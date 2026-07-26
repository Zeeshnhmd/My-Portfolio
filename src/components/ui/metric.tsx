export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-foreground md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
