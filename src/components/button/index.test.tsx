import { shallow } from 'enzyme';
import * as React from 'react';
import { noop } from '../../utils/noop';
import { Button, Theme } from './index';

describe('<Button /> ', () => {

    it('should render properly with primary button theme', () => {
        const element: JSX.Element = (
            <Button theme={Theme.Primary} onClick={noop} >
                Click me
            </Button>
        );

        const wrapper = shallow(element);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render properly with secondary button theme', () => {
        const element: JSX.Element = (
            <Button theme={Theme.Secondary} onClick={noop} >
                Click me
            </Button>
        );

        const wrapper = shallow(element);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render properly with no specified theme', () => {
        const element: JSX.Element = (
            <Button onClick={noop} >
                Click me
            </Button>
        );

        const wrapper = shallow(element);

        expect(wrapper).toMatchSnapshot();
    });

});