import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedItem, setSelectedItem] = useState('Jam');

  const handleItemClick = good => {
    if (selectedItem === good) {
      setSelectedItem(null);
    } else {
      setSelectedItem(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedItem ? `${selectedItem} is selected` : 'No goods selected'}

        {selectedItem && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedItem(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedItem === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={`${isSelected ? 'has-background-success-light' : ''}`}
              >
                <td>
                  <button
                    data-cy={`${isSelected ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${isSelected ? 'is-info' : ''}`}
                    onClick={() => handleItemClick(good)}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
