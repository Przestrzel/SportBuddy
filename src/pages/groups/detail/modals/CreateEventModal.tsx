import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Calendar from "../../../../assets/icons/Calendar";
import ControlledInput from "../../../../components/common/ControlledInput/ControlledInput";
import Modal from "../../../../components/common/Modal/Modal";
import Header from "../../../../components/typography/Header/Header";
import { eventSchema } from "../validators/event.validators";

interface Props {
  onClose: () => void;
  open: boolean;
}

function CreateEventModal({ open, onClose }: Props) {
  const {
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(eventSchema),
  });

  const onConfirm = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      confirmDisabled={!isValid}
    >
      <div className="flex flex-col gap-4 w-full">
        <Header
          size="lg"
          className="flex items-center justify-start gap-2 text-stone-800"
        >
          <Calendar className="w-6 h-6" />
          <span>Create Group</span>
        </Header>
        <ControlledInput
          control={control}
          name="name"
          label="Name"
          type="text"
        />
        <ControlledInput
          control={control}
          name="category"
          label="Category"
          type="text"
        />
        <div className="flex gap-4">
          <ControlledInput
            control={control}
            name="location"
            label="Location"
            type="text"
          />
          <ControlledInput
            control={control}
            name="date"
            label="Date"
            type="date"
          />
        </div>
        <div className="flex gap-4">
          <ControlledInput
            control={control}
            name="start"
            label="Start time"
            type="time"
          />
          <ControlledInput
            control={control}
            name="end"
            label="End time"
            type="time"
          />
        </div>
        <div className="flex gap-4">
          <ControlledInput
            control={control}
            name="fee"
            label="Fee*"
            type="number"
          />
          <ControlledInput
            control={control}
            name="limit"
            label="Limit*"
            type="number"
          />
        </div>
      </div>
    </Modal>
  );
}

export default CreateEventModal;
