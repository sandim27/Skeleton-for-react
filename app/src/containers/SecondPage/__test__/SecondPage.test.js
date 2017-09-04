import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import SecondPage from '../SecondPage';


describe('SecondPage container component', () => {

  let component;
  beforeEach(()=> {
    component = mount(
      <SecondPage/>
    );
  });

  it('should render 1 H1', () => {
    const H1 = component.find('h1');

    expect(H1).to.have.length(1);
    expect(H1.at(0).text()).to.equal("It is SecondPage");
  });
});
