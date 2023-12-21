import React from "react";
import Button from "../../../components/common/Button/Button";
import Search from "../../../components/common/Search/Search";
import CreateGroupModal from "../CreateGroupModal/CreateGroupModal";
import PlusFilled from "../../../assets/icons/PlusFilled";

function GroupHeader() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <div className="flex justify-between">
        <Search className="max-w-lg" />
        <Button
          onClick={() => setModalOpen(true)}
          buttonType="link"
          className="text-indigo-700 flex items-center justify-center gap-2"
        >
          <PlusFilled className="w-6 h-6 fill-blue-550" />
          <span className="text-700">Create group</span>
        </Button>
      </div>
      <CreateGroupModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}

export default GroupHeader;