import { fireEvent, getAllByTestId, getByTestId } from '@testing-library/dom';

export class Driver {
  render(node: JSX.Element): void {
    document.body.append(node);
  }

  get(dataId: string): Element {
    return getByTestId(document.body, dataId);
  }

  getAll(dataId: string): Element[] {
    return getAllByTestId(document.body, dataId);
  }

  click(dataId: string): void {
    fireEvent.click(this.get(dataId));
  }
}
