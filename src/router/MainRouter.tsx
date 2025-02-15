import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPageAdmin from "../components/pages/GeneralPage/GeneralPageAdmin";

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<GeneralPageAdmin/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
