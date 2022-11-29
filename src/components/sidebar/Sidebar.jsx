import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src='https://img.freepik.com/free-vector/portrait-beautiful-woman-with-long-hair_1196-984.jpg?w=1480&t=st=1669711516~exp=1669712116~hmac=cbd0ebb903c3be4a474327f4be958428f36749bbffd1eace9d4fbcfd2a39579d' alt='myself' />
            <p>lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt ut lab lorem lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Healthcare</li>
                <li className="sidebarListItem">Travel</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-linkedin-in"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
