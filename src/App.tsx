import React, { useState, useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Accounts } from "./components/Accounts/Accounts";
import styled from "styled-components";
import ResponsiveSidebar from "./components/ResponsiveSidebar";
import Toast from "./components/shared/Toast/Toast";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainSection = styled.div`
  padding: 14px 160px;
  display: flex;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 14px 50px;
  }

  @media (max-width: 768px) {
    padding: 14px 10px;
  }
`;

const HideOnSmallScreens = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const isMounted = useRef(true); // Track if the component is mounted

  // Cleanup function in case the component is unmounted
  useEffect(() => {
    return () => {
      isMounted.current = false; // Set it to false when the component is unmounted
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const showToast = (message: string, type: "success" | "error") => {
    if (isMounted.current) {
      setToast({ message, type }); // Only set the toast if the component is still mounted
    }
  };

  return (
    <AppContainer>
      <Nav toggleSidebar={toggleSidebar} />
      {/* Conditionally render ResponsiveSidebar */}
      {isSidebarOpen && <ResponsiveSidebar isOpen={isSidebarOpen} />}
      <MainSection>
        <HideOnSmallScreens><Sidebar /></HideOnSmallScreens>
        {/* Main content goes here */}
        <Accounts showToast={showToast} />
      </MainSection>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </AppContainer>
  );
}

export default App;
