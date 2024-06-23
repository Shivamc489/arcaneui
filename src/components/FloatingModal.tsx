import React, { useEffect, useRef, useState } from "react";

const FloatingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={panelRef} className="side-panel">
      <div
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-4000 w-80 h-2/3 bg-white shadow-lg flex flex-col rounded-tr-lg rounded-br-lg`}
      >
      </div>
    </div>
  );
};

export default FloatingModal;
