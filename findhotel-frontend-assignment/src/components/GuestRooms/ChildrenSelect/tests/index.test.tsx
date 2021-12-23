import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChildrenSelect } from '..';
import { GuestRoomsProvider } from '../../../../GuestRooms/contexts/GuestRoomsContext';

function getFirstOption(name: string) {
  return screen.getAllByRole('option', {
    name,
  })[0] as HTMLOptionElement;
}

describe('ChildrenSelect', () => {
  it("does not render a child selector when there's no child", () => {
    render(
      <GuestRoomsProvider>
        <ChildrenSelect roomIndex={0} />
      </GuestRoomsProvider>
    );

    const selectLabel = screen.queryByText('Child 1 age');
    expect(selectLabel).not.toBeInTheDocument();
  });

  it('selects new option and verify selected item', () => {
    render(
      <GuestRoomsProvider guestRoomsString="1:4,6">
        <ChildrenSelect roomIndex={0} />
      </GuestRoomsProvider>
    );

    const selectLabel1 = screen.getByText('Child 1 age');
    expect(selectLabel1).toBeInTheDocument();

    const selectLabel2 = screen.getByText('Child 2 age');
    expect(selectLabel2).toBeInTheDocument();

    const selectLabel3 = screen.queryByText('Child 3 age');
    expect(selectLabel3).not.toBeInTheDocument();

    const select = screen.getAllByRole('combobox')[0];
    const selectedOption = getFirstOption('4');
    expect(selectedOption.selected).toBeTruthy();

    const newSelectedOption = getFirstOption('3');
    userEvent.selectOptions(select, newSelectedOption);
    expect(selectedOption.selected).toBeFalsy();
    expect(newSelectedOption.selected).toBeTruthy();
  });
});
