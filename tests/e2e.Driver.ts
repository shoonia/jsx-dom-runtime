import { getAllByTestId, getByTestId } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  document.body.innerHTML = '';
});

export class Driver {
  render(node: Element) {
    return document.body.appendChild(node);
  }

  get(dataId) {
    return getByTestId(document.body, dataId);
  }

  getAll(dataId: string) {
    return getAllByTestId(document.body, dataId);
  }

  click(dataId: string) {
    userEvent.click(this.get(dataId));
  }

  dblClick(dataId: string) {
    userEvent.dblClick(this.get(dataId));
  }
}
