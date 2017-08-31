import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { data } from './data';
import MyComponent from '../MyComponent';

describe('<MyComponent />', () => {
  it('should render 1 data info', () => {
    const component = mount(<MyComponent
      data={data}
    />);
    expect(component.props().data).to.be.a('array');
  });
});
