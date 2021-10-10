import { fireEvent, getAllByTestId, getByTestId } from '@testing-library/dom';

export class Driver {
  render(node) {
    document.body.append(node);
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
