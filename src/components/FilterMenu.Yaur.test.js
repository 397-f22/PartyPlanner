import {render,screen,debug, fireEvent, within} from '@testing-library/react';
import RestaurantData from "../Restaurants.json";
import App from '../App';
import '@testing-library/jest-dom';

test('applying $ and vegetarian filters shows only $ and vegetarian restaurants', async () => {
    const {getByRole, asFragment,debug} = render(<App />)
    await fireEvent.click(screen.getByTestId('filterButton'))
    const filterModal = document.getElementById('filterModal')
    expect(filterModal).toBeInTheDocument()
    expect(screen.getByText('Price Level')).toBeInTheDocument()
    await fireEvent.click(screen.getByTestId("demo-simple-select"))
    await fireEvent.mouseDown(screen.getByTestId("demo-simple-select"))
    const priceDropdown = within(getByRole('listbox'))
    await fireEvent.click(priceDropdown.getByText("$"))
    await fireEvent.click(screen.getByTestId('filterby-Vegetarian'))
    let restaurants = document.getElementsByClassName("restaurant")
    for (let i=0; i < restaurants.length; i++){
        for (let j=0; j < RestaurantData.length; j++) {
            if (RestaurantData[j].TITLE == restaurants[i].TITLE){
                expect(RestaurantData[j].PRICE == [$])
                expect(RestaurantData[j].CATEGORY.includes("vegetarian"))
            }
        }
    }
})