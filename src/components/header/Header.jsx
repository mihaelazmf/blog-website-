import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">
                   Mihaela Zamfir
                </span>
                <span className="headerTitleLg">
                    My Stories
                </span>
                <img className="headerImg" src="https://img.freepik.com/free-vector/early-morning-scenery-seascape-lonely-wooden-boat_107791-7369.jpg?w=1380&t=st=1669711430~exp=1669712030~hmac=9e7c5278fc7f8625252f546c4978dff11f2e7e4afb9092ad9801c940f525268b" alt="headerimage"/>

            </div>
        </div>
    )
}