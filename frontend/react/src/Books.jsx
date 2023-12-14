import SidebarWithHeader from "./components/shared/SideBar.jsx";
import Library from './components/Books/Library.jsx'
const Books = () => {

    return (
        <SidebarWithHeader>
            <Library />
        </SidebarWithHeader>
    )
}

export default Books;