import React, {useState} from 'react';
import AdminMenu from "./AdminComponents/adminTopDown/adminMenu";
import AdminMovies from "./AdminComponents/MenuPages/adminMovies";
import AdminGenres from "./AdminComponents/MenuPages/adminGenres";
import AdminCinemas from "./AdminComponents/MenuPages/adminCinemas";
import AdminUsers from "./AdminComponents/MenuPages/adminUsers";
import AdminEconimics from "./AdminComponents/MenuPages/adminEconimics";

function AdminPage(props) {

    const [menuItem,setmenuItem]=useState();

    const actionMenu=(menu)=>{

        console.log("menu val = "+menu);
        setmenuItem(menu);


    };
    function renderMenuItem(menuID)
    {
        switch(menuID) {
            case 1:
                return <AdminMovies/>;
                break;
            case 2:
                return <AdminGenres/>;
                break;
            case 3:
                return <AdminCinemas/>;
                break;
            case 4:
                return <AdminUsers/>;
                break;
            case 5:
                return <AdminEconimics/>;
                break;
            default:
            // code block
        }
    }

    return (
        <div>
            <AdminMenu func={actionMenu}/>
            <div className="page movie_list">
                <div className="container">
                    {
                        menuItem ?
                            (
                                renderMenuItem(menuItem)
                            ):''
                    }

                </div>
            </div>
        </div>
    );
}

export default AdminPage;