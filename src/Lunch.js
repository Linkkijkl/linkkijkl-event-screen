import React from 'react';

/**
 * A component to display lunch
 * @param name title for the lunch
 * @param data an array of lunch items
 * @param className a class name for styling
 * @returns {JSX.Element} lunch items in a list
 */
const Lunch = ({ name, data, className }) => {

  return (
    <div id="lunch" className={className}>
      <h2>{name} lounas</h2>
      {(!data || data?.length === 0) && <p>Ei lounasta tänään</p>}
      {data?.map((setMenu, i) => (
        <div key={i} style={{ marginBottom: '4vh' }}>
          <ul>
            <li>{setMenu.name}{setMenu.name && ' // '}{setMenu.price}</li>
            {setMenu.meals.map((meal, j) => 
              <li key={j}>{meal.name}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Lunch;
