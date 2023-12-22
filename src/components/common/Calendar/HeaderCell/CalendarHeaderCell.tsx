interface Props {
  name: string;
}

function CalendarHeaderCell({ name }: Props) {
  return (
    <div className="flex justify-center items-center border border-gray-300">
      {name}
    </div>
  );
}

export default CalendarHeaderCell;
