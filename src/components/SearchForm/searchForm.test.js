// import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {cleanup, fireEvent, render} from '@testing-library/react';
import SearchForm from "./index";
import {expect} from "chai";
const sinon = require("sinon");

Enzyme.configure({adapter: new Adapter()});

test('searchForm', () => {

    const callback = sinon.spy();

    const SearchFormMock = shallow(<SearchForm handleSubmit={callback} />);

    const form = SearchFormMock.find('[test-id="search_issue_from_test_id"]')
    expect(form.props().onSubmit).to.have.lengthOf(1);

    form.simulate('submit',{ preventDefault : () => {} })
    expect(callback.called).to.be.true;

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});