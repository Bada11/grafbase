import React from "react";
import Modal from "@/components/Modal";
import CreateProject from "@/components/CreateProject";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getCurrentUser();

  //if (!session?.user) redirect("/");
  return (
    <Modal>
      <h1 className="text-[25px] font-bold logo text-center">
        Create New Project
      </h1>
      <CreateProject type="create" session={session} />
    </Modal>
  );
};

export default page;
