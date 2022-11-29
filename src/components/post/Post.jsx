import './post.css'

export default function Post() {
  return (

    <div className="post">
      <img className="postImg" src="https://img.freepik.com/free-vector/happy-woman-with-flying-hair-sitting-air-fan-cooling-heat-room-vector-illustration-hot-weather-summer-conditioning-home-concept_74855-13132.jpg?w=1800&t=st=1669711867~exp=1669712467~hmac=1061e3cfbc399728201e2cd56870dd857c30f017cde0768b67689cf1d9ab5d6c" alt='yoga'/>

        <div className="postInfo">
         <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
         </div>

        <span className="postTitle">Lorem Ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">lorem ipsum dolor sit amet, consectetur adip locus lorem ipsum dolor sit amet, consectetur adip locus lorem ipsum dolor sit amet, consectetur adip locus lorem ipsum dolor sit amet , consectetur adip locus lorem  ipsum dolor sit amet, consectetur adip?</p>
        </div>
 </div>
  );
}
