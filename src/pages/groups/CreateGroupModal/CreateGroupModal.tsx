import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../../../components/common/Modal/Modal";
import ControlledInput from "../../../components/common/ControlledInput/ControlledInput";
import { CreateGroupForm } from "../types/groups.types";
import { createGroupSchema } from "../validators/group.validators";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateGroupModal({ open, setOpen }: Props) {
  const {
    control,
    formState: { isValid },
    reset,
  } = useForm<CreateGroupForm>({
    defaultValues: {
      description: "",
      name: "",
    },
    resolver: yupResolver(createGroupSchema),
  });

  const onClose = () => {
    setOpen(false);
    reset();
  };

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
        <h3 className="">Create group</h3>
        <div>
          <ControlledInput
            control={control}
            name="name"
            type="text"
            label="Name"
          />
        </div>
        <div>
          <ControlledInput
            control={control}
            name="description"
            type="text"
            label="Description"
          />
        </div>
      </div>
    </Modal>
  );
}

export default CreateGroupModal;
