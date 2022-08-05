import ContentHome from "../../components/ContentHome/ContentHome";
import SearchBar from "../../components/Search/SearchBar";
import SiderBar from "../../components/SideBar/SiderBar";
import style from "../../css/panelUser.module.css"

function PanelUser() {
    return (
       <div className={style.panelUser}>
            <div className={style.siderBar}>
                <SiderBar/> 
            </div>
            <div className={style.content}>
                <div className={style.searchBar}>
                    <SearchBar/>
                </div>
                <div className={style.contentHome}>
                    <ContentHome/>
                </div>
            </div>
       </div> 
    );
}

export default PanelUser;