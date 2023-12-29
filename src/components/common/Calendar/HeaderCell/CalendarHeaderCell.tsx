interface Props {
  name: string;
}

function CalendarHeaderCell({ name }: Props) {
  return (
    <div className="flex justify-center items-center text-stone-400 select-none">
      {name}
    </div>
  );
}

export default CalendarHeaderCell;
