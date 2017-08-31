import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import FirstPage from '../FirstPage';


describe('FirstPage container component', () => {
  const component = mount(
    <FirstPage/>
  );

  it('should render 1 H1', () => {
    expect(component.find('h1')).to.have.length(1);
  });
});
