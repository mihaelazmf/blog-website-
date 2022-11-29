import "./singlepost.css";


export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1546195602-c15ebe7bf263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHlvZ2F8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                     <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                 </div>
            </h1>
        </div>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Autor: <b>Mihaela</b></span>
            <span className="singlePostDate"> 1 hour ago </span>
            <p className="singlePostDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
             quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
             Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
             eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
             elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
             iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
            sa odit modi eos! Lorem, ipsum dolor sit amet consectetur.
            </p>
        </div>

    </div>
  );
}
