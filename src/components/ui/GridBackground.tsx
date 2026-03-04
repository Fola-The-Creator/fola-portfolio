export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--grid-opacity)",
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
