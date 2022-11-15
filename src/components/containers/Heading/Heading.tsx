import { NewsContext } from 'context/NewsContext';
import { useContext } from 'react';
import { getImageType } from 'utils/helpers';
import { StyledHeader, StyledImage } from './styles';

function Heading(): JSX.Element {
  const { newsFull } = useContext(NewsContext);

  return (
    <StyledHeader>
      <StyledImage
        src={getImageType(newsFull.image?.crops, 'liggend_breed')}
        alt={newsFull.label}
      />
      <p>{newsFull.label}</p>
      <h1>{newsFull.title}</h1>
      <p>{newsFull.description}</p>
    </StyledHeader>
  );
}

export default Heading;
