import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPage from "../components/pages/GeneralPage";

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GeneralPage/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
