import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import App from '../App';

// test('renders the bottom tab navigator and switches tabs', () => {
//   const { getByRole, getByText } = render(<App />);

//   // Tabs are role='button' in this navigation component
//   const statusTab = getByRole('button', { name: /status/i });
//   expect(statusTab).toBeTruthy();

//   const savedTab = getByRole('button', { name: /saved/i });
//   fireEvent.press(savedTab);

//   // Confirm something from the SavedScreen renders (replace with real text)
//   expect(getByText(/Saved Images/i)).toBeTruthy();
// });

test("renders bottom tab",()=>{
  render(<App/>)
  const statusBottomTab = screen.getByRole("button",{name:/status/i})
  expect(statusBottomTab).toBeOnTheScreen()
  expect(statusBottomTab).toHaveTextContent(/status/i)

  const savedBottomTab = screen.getByRole("button",{name:/saved/i})
})