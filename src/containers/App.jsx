
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/Page";
function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/CV/" element={<Page></Page>}></Route>
        </Routes>
        </BrowserRouter>
            {/* <Header/>
            <Body/> */}
        </>
    )
}
export default App;