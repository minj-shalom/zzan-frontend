import { ZzanLogo } from "@/assets";
import { LogoContainer, LogoImage } from "./styles";

export function Logo() {
  return (
    <LogoContainer href="/">
      <LogoImage
        src={ZzanLogo.src}
        alt="Logo"
        width={36}
        height={36}
        placeholder="blur"
        blurDataURL={ZzanLogo.src}
      />
    </LogoContainer>
  );
}
