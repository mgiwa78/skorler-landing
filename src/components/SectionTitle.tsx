import React from "react";

const SectionTitle = ({
  title,
  class: customClass,
}: {
  title: string;
  class?: string;
}) => {
  return (
    <div
      style={{
        borderRadius: "100px",
        border: "1px solid var(--color-Border-border-light, #E2E8F0)",
        background: "linear-gradient(175deg, #FAFCFE 4.12%, #ABBED0 439.66%)",
        boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
      }}
      className={`' uppercase gap-2 w-fit px-4 py-2 text-sm text-center rounded-[100px] shadow-[0px_1px_4px_rgba(0,0,0,0.04)] '+ ${customClass}`}
    >
      {title}
    </div>
  );
};

export default SectionTitle;
