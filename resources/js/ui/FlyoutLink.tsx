import React, { useState } from "react";
import { Link } from "react-router-dom";

const FlyoutLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-red-500 transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
};

export default FlyoutLink;
