import SidebarWithHeader from "./components/shared/SideBar.jsx";
import { TodoWrapper } from "./components/Notes/TodoWrapper.jsx";

const Notes = () => {
    return (
        <SidebarWithHeader>
            <TodoWrapper />
        </SidebarWithHeader>
    );
}

export default Notes;
