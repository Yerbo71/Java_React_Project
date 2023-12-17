import SidebarWithHeader from "./components/shared/SideBar.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
const Home = () => {

    return (
        <SidebarWithHeader>
            <Portfolio/>
        </SidebarWithHeader>
    )
}

export default Home;