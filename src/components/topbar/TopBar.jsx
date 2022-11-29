import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return  (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin-in"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to ="/" className="link">HOME</Link>
                    </li>

                    <li className="topListItem">
                        <Link to ="/" className="link">ABOUT</Link>
                    </li>

                    <li className="topListItem">
                        <Link to ="/" className="link">CONTACT</Link>
                    </li>

                    <li className="topListItem">
                        <Link to ="/write" className="link">WRITE</Link>
                    </li>

                    <li className="topListitem">
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {
                     user ? (
                          <ul className="topList">
                                <li className="topRightItem">
                                    <img className="topImage" src="https://img.freepik.com/free-vector/portrait-beautiful-woman-with-pink-hair_1196-894.jpg?w=900&t=st=1669712750~exp=1669713350~hmac=da131c1bc2556a9ef812947413282e555e7a182caccebe58e90c892cdd4fcb90" alt="myself"/>
                                </li>
                                <li className="topList">
                                    <Link to ="/login" className="link">LOGIN</Link>
                                </li>
                                <li className="topList">
                                     <i className="topSettingsIcon fa-solid fa-gear"></i>
                                 </li>

                          </ul>


                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to ="/login" className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to ="/register" className="link">REGISTER</Link>
                        </li>

                     </ul>
                )
                }

                <i className ="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}