import Card from '../Card/Card';
import { IBundelItem } from '../../../utils/data/bundle-interface';
import { getImageType } from 'utils/helpers';
import { useContext, useEffect, useState } from 'react';
import { NewsContext } from 'context/NewsContext';
import { StyledCardList, StyledItem } from './styles';

export interface CardListProps {
  orientation?: 'column' | 'row';
}

function CardsList(props: CardListProps): JSX.Element {
  const { orientation } = props;
  const { newsFull } = useContext(NewsContext);
  const [listFiltered, setListFiltered] = useState([] as IBundelItem[]);

  if (newsFull.bundelItems?.length === 0) {
    return <></>;
  }

  useEffect(() => {
    if (orientation === 'column') {
      const listColumn = newsFull.bundelItems?.filter((_, index) => index <= 8);
      setListFiltered(listColumn);
    } else {
      const listRow = newsFull.bundelItems?.filter((_, index) => index > 8);
      setListFiltered(listRow);
    }
  }, [newsFull]);

  return (
    <StyledCardList orientation={orientation ? orientation : 'column'}>
      {listFiltered &&
        listFiltered.map((item: IBundelItem) => {
          return (
            <StyledItem key={item.id} orientation={orientation ? orientation : 'column'}>
              <Card
                top={item.chapeau}
                title={item.titel}
                description={item.lead}
                src={getImageType(item.afbeelding.crops, 'artikel_top')}
                alt={item.titel}
                link={item.urlAlias}
                linkText='read more'
                arialabel={`Read more about ${item.titel}`}
                orientation={orientation ? orientation : 'column'}
              />
            </StyledItem>
          );
        })}
    </StyledCardList>
  );
}

export default CardsList;
