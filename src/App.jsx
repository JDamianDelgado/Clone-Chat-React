import { Route, Routes } from "react-router-dom";
import "./index.css";

import { Chat } from "./Components/Chat";
import { ChatScreen } from "./Pages/ChatScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatScreen />} />
        <Route path="/chats/:id" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
