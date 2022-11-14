import Cta from '../../base/Cta/Cta';

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
    <section
      className={`card ${orientation ? `card--${orientation}` : `card--column`}`}
      data-testid='card'
    >
      <img
        className={`card__image ${
          orientation ? `card__image--${orientation}` : `card__image--column`
        }`}
        src={src}
        alt={alt}
      />
      <div className='card__text'>
        <p className='card__text__topline'>{top}</p>
        <h4 className='card__text__title'>{title}</h4>
        <p className='card__text__description'>{description}</p>
        {link && linkText && (
          <div className='card__text__link'>
            <Cta link={link} text={linkText} arialabel={arialabel} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Card;
