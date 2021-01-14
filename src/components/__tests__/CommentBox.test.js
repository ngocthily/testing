import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it('has a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

describe('the textarea', () => {
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        // must update since handleChange does not re-render
        wrapper.update();
    })

    it('has a textarea that users can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
    });

    it('empties the textarea after hitting submit', () => {
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
})
