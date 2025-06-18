import Hamburger from 'hamburger-react';
import type { Dispatch, SetStateAction } from 'react';

export default function MenuToggle({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return <Hamburger toggled={isOpen} toggle={setOpen} size={20} />;
}
