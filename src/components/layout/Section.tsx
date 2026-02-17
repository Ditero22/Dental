import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-16 px-6 md:px-12 bg-[#f4f4f4] ${className}`}
    >
      <div className="mx-auto">
        {children}
      </div>
    </section>
  );
}
