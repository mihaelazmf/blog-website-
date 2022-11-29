import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img src="https://lh3.googleusercontent.com/p/AF1QipMoZ9L5Du_4lhU01WVytOX5DX6HX7VssR1ow_CH=w1080-h608-p-no-v0" alt ="" className="writeImg"/>
        <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput" >
                            <i className="writeIcon fa-solid fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}  />
                        <input type="text" placeholder="Title" className="writeInput" autoFocus ={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
        </div>
    )

}