import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Calendar from "../../../../assets/icons/Calendar";
import ControlledInput from "../../../../components/common/ControlledInput/ControlledInput";
import Modal from "../../../../components/common/Modal/Modal";
import Header from "../../../../components/typography/Header/Header";
import { eventSchema } from "../validators/event.validators";
import { useCreateMatchMutation } from "../../../../store/services/groups.services";
import { Match } from "../../events/types/events.types";
import { somethingWentWrongToast } from "../../../../utils/toast.utils";

interface Props {
  group: string;
  onClose: () => void;
  open: boolean;
}

function CreateEventModal({ open, onClose, group }: Props) {
  const {
    control,
    formState: { isValid },
    getValues,
  } = useForm({
    resolver: yupResolver(eventSchema),
  });
  const [createMatch] = useCreateMatchMutation();

  const onConfirm = () => {
    createMatch({
      groupId: group,
      match: {
        ...(getValues() as Match),
      },
    })
      .unwrap()
      .then(() => {
        toast.success("You've successfully created event!");
      })
      .catch(() => {
        somethingWentWrongToast();
      })
      .finally(() => {
        onClose();
      });
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
          <span>Create Event</span>
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
