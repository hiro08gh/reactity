import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App component exist', () => {
  test('shoud render App', () => {
    const Wrapper = shallow(<App />);

    expect(Wrapper.exists()).toBe(true);
  });
});
