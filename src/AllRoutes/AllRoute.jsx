import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Box } from "@chakra-ui/react";
import { SideBar } from "../Components/Sidebar";

const AllRoute = () => {

  return (
    <Routes>
      {/* Dashboard  */}
      <Route path={`/`} element={
        <Box width='100%'>
          <Box className='MainContainer'>
            <SideBar />
            <Dashboard />
          </Box>
        </Box>
      } />


      {/* <Route path={`/user-details`} element={
        <Box width='100%'>
          <Box className='MainContainer'>
            <SideBar />
            <UserManagement />
          </Box>
        </Box>
      } /> */}

    </Routes>
  );
};

export { AllRoute };