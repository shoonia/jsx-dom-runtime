import { getAllByTestId, getByTestId } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  document.body.innerHTML = '';
});

export class Driver {
  render(node) {
    return document.body.appendChild(node);
  }

  get(dataId) {
    return getByTestId(document.body, dataId);
  }

  getAll(dataId) {
    return getAllByTestId(document.body, dataId);
  }

  click(dataId) {
    userEvent.click(this.get(dataId));
  }

  dblClick(dataId) {
    userEvent.dblClick(this.get(dataId));
  }
}
