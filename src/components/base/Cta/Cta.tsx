export interface CTAProps {
  link: string;
  text: string;
  arialabel?: string;
  target?: '_blank' | '_self' | '_parent	' | '_top' | 'framename';
}

function Cta(props: CTAProps): JSX.Element {
  const { link, text, arialabel, target } = props;
  return (
    <a
      className='cta'
      href={link}
      aria-label={arialabel}
      target={target ? target : '_blank'}
      rel='noreferrer'
    >
      {text}
    </a>
  );
}

export default Cta;
