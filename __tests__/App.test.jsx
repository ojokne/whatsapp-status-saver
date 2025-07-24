import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import App from '../App.jsx';
import StatusScreen from '../src/screens/StatusScreen.jsx';
import SavedScreen from '../src/screens/SavedScreen.jsx';

test('renders bottom tab', () => {
  render(<App />);

  const statusBottomTab = screen.getByRole('button', { name: /status/i });
  expect(statusBottomTab).toBeOnTheScreen();
  expect(statusBottomTab).toHaveTextContent(/status/i);

  const savedBottomTab = screen.getByRole('button', { name: /saved/i });
  expect(savedBottomTab).toBeOnTheScreen();
  expect(savedBottomTab).toHaveTextContent(/saved/i);

  const settingsBottomTab = screen.getByRole('button', { name: /settings/i });
  expect(settingsBottomTab).toBeOnTheScreen();
  expect(settingsBottomTab).toHaveTextContent(/settings/i);
});

test('switches between bottom tabs', async () => {
  render(<App />);

  const savedTab = screen.getByRole('button', { name: /saved/i });
  const user = userEvent.setup();
  await user.press(savedTab);
  expect(screen.getByRole('button', { name: /saved/i })).toBeTruthy();

  const statusTab = screen.getByRole('button', { name: /status/i });
  await user.press(statusTab);
  expect(screen.getByRole('button', { name: /status/i })).toBeTruthy();

  const settingsTab = screen.getByRole('button', { name: /settings/i });
  await user.press(settingsTab);
  expect(screen.getByRole('button', { name: /settings/i })).toBeTruthy();
});

test('switches between status top tabs', async () => {
  render(<StatusScreen />);

  const user = userEvent.setup();

  const videosTab = screen.getByRole('tab', { name: /videos/i });
  await user.press(videosTab);

  expect(screen.getByRole('tab', { name: /videos/i })).toBeTruthy();

  const imagesTab = screen.getByRole('tab', { name: /images/i });
  await user.press(imagesTab);

  expect(screen.getByRole('tab', { name: /images/i })).toBeTruthy();
});

test('switches between saved top tabs', async () => {
  render(<SavedScreen />);

  const user = userEvent.setup();

  const videosTab = screen.getByRole('tab', { name: /videos/i });
  await user.press(videosTab);

  expect(screen.getByRole('tab', { name: /videos/i })).toBeTruthy();

  const imagesTab = screen.getByRole('tab', { name: /images/i });
  await user.press(imagesTab);

  expect(screen.getByRole('tab', { name: /images/i })).toBeTruthy();
});
