import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form  className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src ="https://img.freepik.com/free-vector/portrait-beautiful-woman-with-pink-hair_1196-894.jpg?w=1380&t=st=1669712750~exp=1669713350~hmac=da131c1bc2556a9ef812947413282e555e7a182caccebe58e90c892cdd4fcb90" alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Username" />
                    <label >Email</label>
                    <input type="email" placeholder="username@gmail.com" />
                    <label >Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit"> Update</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}