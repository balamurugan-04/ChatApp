import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { ConversationsContext } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";

function Dashboard({ id }) {
  const { selectedConversation } = useContext(ConversationsContext);

  return (
    <div className="d-flex" style={{ height: "80vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation test={selectedConversation} />}
    </div>
  );
}

export default Dashboard;
