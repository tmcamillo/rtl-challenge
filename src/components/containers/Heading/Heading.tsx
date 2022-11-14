export interface HeadingProps {
  title: string;
  label: string;
  description: string;
  src: string;
}

function Heading(props: HeadingProps): JSX.Element {
  const { title, label, description, src } = props;

  return (
    <header className='header'>
      <img className='header__image' src={src} alt={label} />
      <p className='header__label'>{label}</p>
      <h1 className='header__title'>{title}</h1>
      <p className='header__description'>{description}</p>
    </header>
  );
}

export default Heading;
