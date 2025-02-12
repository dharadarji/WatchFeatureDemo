import { Routes, Route } from "react-router-dom";
import Page from './Page'

export default function SitePages(){
	return(
	<Routes>
	      <Route path="/demo1" element={<Page name="demo1" />} />
          <Route path="/demo2" element={<Page name="demo2" />} />
     </Routes>
	
	);
}