import React from "react";
import Button from "../../../components/common/Button/Button";
import Search from "../../../components/common/Search/Search";
import CreateGroupModal from "../CreateGroupModal/CreateGroupModal";

function GroupHeader() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <div className="flex justify-between">
        <Search className="max-w-lg" />
        <Button
          onClick={() => setModalOpen(true)}
          buttonType="link"
          className="text-indigo-700"
        >
          Create group
        </Button>
      </div>
      <CreateGroupModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}

export default GroupHeader;
