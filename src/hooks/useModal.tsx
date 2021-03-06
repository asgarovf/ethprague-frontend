import { useCallback, useMemo, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const modal = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return modal;
};
