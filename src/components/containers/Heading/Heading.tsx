import { NewsContext } from 'context/NewsContext';
import { useContext } from 'react';
import { getImageType } from 'utils/helpers';

function Heading(): JSX.Element {
  const { newsFull } = useContext(NewsContext);

  return (
    <header className='header'>
      <img
        className='header__image'
        src={getImageType(newsFull.image.crops, 'liggend_breed')}
        alt={newsFull.label}
      />
      <p className='header__label'>{newsFull.label}</p>
      <h1 className='header__title'>{newsFull.title}</h1>
      <p className='header__description'>{newsFull.description}</p>
    </header>
  );
}

export default Heading;
