import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Modal from "../../../components/common/Modal/Modal";
import ControlledInput from "../../../components/common/ControlledInput/ControlledInput";
import { GroupType } from "../types/groups.types";
import { createGroupSchema } from "../validators/group.validators";
import Group from "../../../assets/icons/Group";
import Header from "../../../components/typography/Header/Header";
import { useCreateGroupMutation } from "../../../store/services/groups.services";
import { somethingWentWrongToast } from "../../../utils/toast.utils";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateGroupModal({ open, setOpen }: Props) {
  const {
    control,
    formState: { isValid },
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      description: "",
      name: "",
    },
    resolver: yupResolver(createGroupSchema),
  });
  const [createGroup] = useCreateGroupMutation();

  const onClose = () => {
    setOpen(false);
    reset();
  };

  const onConfirm = () => {
    createGroup({
      ...getValues(),
      groupType: GroupType.PRIVATE,
    })
      .unwrap()
      .then(() => {
        toast.success("You've successfully created group!");
      })
      .catch(somethingWentWrongToast)
      .finally(onClose);
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
          <Group className="w-6 h-6" />
          <span>Create Group</span>
        </Header>
        <ControlledInput
          control={control}
          name="name"
          type="text"
          label="Name"
        />
        <ControlledInput
          control={control}
          name="description"
          type="text"
          label="Description"
        />
      </div>
    </Modal>
  );
}

export default CreateGroupModal;
