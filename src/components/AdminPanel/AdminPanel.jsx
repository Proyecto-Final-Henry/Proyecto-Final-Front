import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AdminUsers from "./AdminUsers";
import AdminIncome from "./AdminIncome";
import BarChart from "../AdminGrafico/GraficoBarras";
import LineChart from "../AdminGrafico/GraficoLineal";
import style from "../../css/adminPanel.module.css";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function AdminPanel (){
    const history = useHistory();
    const [ user , setUser ] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            history.push("/login");
            return;
        };
        const autenticarAdmin = async () => {
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const { data } = await axios(`/api/back-end/users/perfil`, config);
                setUser(data);
                if(data.role !== "Admin"){
                    history.push("/user");
                    return;
                    };
            } catch (error) {
                console.log(error.response.data.msg);
            };
        };
        autenticarAdmin();
        }, []);

    return (
        // <div className={style.panelAdmin}>
        //     <div className={style.panelAdmin_left}>
        //         <AdminUsers/>
        //     </div>

        //     <div className={style.panelAdmin_right}>
        //         <div style={{display:"inline-flex"}}>
        //             <AdminIncome/>
        //         </div>
        //         <br />
        //         <div style={{display:"inline-flex", width: "45%"}}>
        //             <BarChart/>
        //             <LineChart/>
        //         </div>
        //     </div>
        // </div>
        <div className={style.panelAdmin}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={{padding:"0 !important"}}>
                    <Col sm={3}  className={style.panelAdmin_left}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first" className={style.panelAdmin_first}>Listar Usuarios</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Cantidad Usuarios</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Usuarios Registrados</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Dinero Ganado</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <AdminUsers/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <AdminIncome/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <BarChart/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <LineChart/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
};