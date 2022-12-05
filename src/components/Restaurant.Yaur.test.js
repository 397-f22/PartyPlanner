import { getByTestId, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { async } from '@firebase/util';

import Restaurant from './Restaurant';

test('restaurant should have name, price, and location', ()=> {
    const fakeRestaurant = {
        "CATEGORY": ["Gluten free", "Nut Free", "Vegetarian"],
        "NUMBER": "847-866-9900",
        "CUSINE": "Spanish",
        "ID": 6,
        "LOCATION": "1615 Chicago Ave, Evanston, IL 60201",
        "PRICE": [
          "$"
        ],
        "TITLE": "Tapas Barcelona",
        "AVAILABILITY": "Opens 5PM",
        "CAPACITY": [0,0,0,0,0,0,0,0,5,7,9,12,11,15,11,13,8,11,6,9,10,11,0,0],
        "URL": "https://www.allmenus.com/il/evanston/16743-tapas-barcelona/menu/"
      }
    const { getByTestId,debug } = render(<Restaurant restaurant={fakeRestaurant} />); 
    expect(getByTestId('name').textContent).toContain("Tapas Barcelona")
    expect(getByTestId('price').textContent).toContain("$")
    expect(getByTestId('location').textContent).toContain("1615 Chicago Ave, Evanston, IL 60201")
})