import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import { Namespace } from '../../constants';
import { RequestStatus, State } from '../../types';
import { Search } from './search';

const mockStore = configureMockStore([thunk]);
const state: State = {
  [Namespace.Data]: {
    users: [],
    details: null,
    total: 0,
    incompleteResults: false,
    status: RequestStatus.Idle,
    error: '',
  }
};

const store = mockStore(state);

describe('Page: Search page', () => {
  it('should render correctly', () => {
    render(
      <Provider
        store={store}
      >
        <MemoryRouter>
          <Search/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Search users on GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by repos:/i)).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
