export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute -top-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-primary blur-[80px] opacity-40 animate-float" />
      <div className="absolute top-[40%] -right-[5%] w-[300px] h-[300px] rounded-full bg-secondary blur-[80px] opacity-40 animate-float" style={{ animationDelay: "-5s" }} />
      <div className="absolute -bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-accent blur-[80px] opacity-40 animate-float" style={{ animationDelay: "-10s" }} />
    </div>
  );
}
