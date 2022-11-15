import Cta from '../../base/Cta/Cta';
import { StyledCard, StyledImage, StyledTextBlock } from './styles';

export interface CardProps {
  top: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  orientation?: 'column' | 'row';
  link?: string;
  linkText?: string;
  arialabel?: string;
}

function Card(props: CardProps): JSX.Element {
  const { top, title, description, src, alt, orientation, link, linkText, arialabel } = props;

  return (
    <StyledCard orientation={orientation ? orientation : 'column'} data-testid='card'>
      <StyledImage orientation={orientation ? orientation : 'column'} src={src} alt={alt} />
      <StyledTextBlock>
        <p>{top}</p>
        <h4>{title}</h4>
        <p>{description}</p>
        {link && linkText && (
          <div>
            <Cta link={link} text={linkText} arialabel={arialabel} />
          </div>
        )}
      </StyledTextBlock>
    </StyledCard>
  );
}

export default Card;
