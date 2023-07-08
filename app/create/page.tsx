import React from "react";
import Modal from "@/components/Modal";
import CreateProject from "@/components/CreateProject";

const page = () => {
  const session = "";
  return (
    <Modal>
      <h1 className="text-[25px] font-bold logo2 text-center">
        Create New Project
      </h1>
      <CreateProject type="create" session={session} />
    </Modal>
  );
};

export default page;
