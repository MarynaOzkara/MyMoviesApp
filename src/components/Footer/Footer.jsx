import { FooterWrap, FooterText, FooterLink } from './Footer.styled';
const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterText>
          Created by{' '}
          <FooterLink href="https://github.com/MarynaOzkara">
            Maryna Ozkara
          </FooterLink>
        </FooterText>
      </FooterWrap>
    </>
  );
};
export default Footer;
