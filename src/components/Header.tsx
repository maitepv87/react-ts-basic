import { type ReactNode } from "react";
interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};
