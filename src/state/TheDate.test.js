import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';
import { exportAllDeclaration } from '@babel/types';

describe(`TheDate component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it.skip('renders the UI as expected', () => {
        exportAllDeclaration(
            renderer.create(<TheDate />).toJSON()
        ).toMatchSnapshot()
    })
})