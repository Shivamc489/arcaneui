import React, { useEffect, useRef } from "react";
import {
  SidePanel,
  SidePanelHeader,
  SidePanelTitle,
  SidePanelDescription,
  SidePanelContent,
  SidePanelFooter,
} from "../SidePanel";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const FloatingSidePanel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const chats = [
    { type: "user", content: "Hi! How are you?" },
    { type: "ai", content: "I'm good, thank you! How can I assist you today?" },
    { type: "user", content: "Can you help me with my project?" },
    { type: "ai", content: "Sure! What do you need help with?" },
    { type: "user", content: "I need help with a chat UI." },
    { type: "ai", content: "I can definitely help with that. What features do you want to include?" },
    { type: "user", content: "I want it to be responsive and user-friendly." },
    { type: "ai", content: "Got it. Let's start by setting up the basic layout." },
    { type: "user", content: "Sounds good. What should I do next?" },
    { type: "ai", content: "First, create a container for the chat messages and input field." },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chats]);

  return (
    <div className="App">
      <SidePanel>
        <SidePanelHeader>
          <SidePanelTitle>Arcane Chat</SidePanelTitle>
          <SidePanelDescription>Chat with us</SidePanelDescription>
        </SidePanelHeader>
        <SidePanelContent className="flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col space-y-2" ref={scrollRef}>
            {chats.map((item, index) => (
              <div key={index} className={`p-2 rounded-lg max-w-xs text-xs  ${item.type === "user" ? "ml-auto bg-primary text-white text-right rounded-br-none" : "mr-auto bg-secondary text-left rounded-l-lg rounded-tl-none"}`}>
                {item.content}
              </div>
            ))}
          </div>
        </SidePanelContent>
        <SidePanelFooter className="sticky bg-white flex items-center">
          <Input
            type="text"
            placeholder="Enter prompt"
            className="flex-1 border p-2 rounded-l"
          />
          <Button className="p-2 ml-2 rounded-r text-white">
            Send
          </Button>
        </SidePanelFooter>
      </SidePanel>
    </div>
  );
};

export default FloatingSidePanel;