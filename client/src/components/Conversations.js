import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { ConversationsContext } from "../contexts/ConversationsProvider";

function Conversations() {
  const { conversations, selectConversationIndex } = useContext(ConversationsContext);

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Conversations;
