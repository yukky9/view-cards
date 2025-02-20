import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPageAdmin from "../components/pages/GeneralPage/GeneralPageAdmin";
import GeneralPageSeller from "../components/pages/GeneralPage/GeneralPageSeller";

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/admin' element={<GeneralPageAdmin/>}/>
				<Route path='/seller' element={<GeneralPageSeller/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
