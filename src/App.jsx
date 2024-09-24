/* eslint-disable function-paren-newline */
import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
    setSelectedItem(prevSelectedItem =>
      prevSelectedItem === good ? null : good,
    );
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
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={`${isSelected ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={classNames('button', {
                      'is-info': isSelected,
                    })}
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
