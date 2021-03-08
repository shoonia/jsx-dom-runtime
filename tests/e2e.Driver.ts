import { fireEvent, getAllByTestId, getByTestId } from '@testing-library/dom';

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
    fireEvent.click(this.get(dataId));
  }
}
