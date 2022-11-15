import Card from '../Card/Card';
import { IBundelItem } from '../../../utils/data/bundle-interface';
import { getImageType } from 'utils/helpers';
import { useContext, useEffect, useState } from 'react';
import { NewsContext } from 'context/NewsContext';

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
    <ul className={`cardlist ${orientation ? `cardlist--${orientation}` : `cardlist--column`}`}>
      {listFiltered &&
        listFiltered.map((item: IBundelItem) => {
          return (
            <li
              key={item.id}
              className={orientation ? `cardlist__item--${orientation}` : `cardlist__item--column`}
            >
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
            </li>
          );
        })}
    </ul>
  );
}

export default CardsList;
