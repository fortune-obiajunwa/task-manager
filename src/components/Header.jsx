import { useState } from "react";
import profileImage from "../assets/profile.jpg";

function Header(){
    const [image, setImage] = useState(null)

    const handleImageChange = (e) =>{
        const file = e.target.files[0];

        if (file){
            setImage(URL.createObjectURL(file));
        }
    };

    const today = new
    Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return(
        <header className="header">
            <div>
                <h1>Hi, Fortune</h1>
                <p>{today}</p>
            </div>

            <div>
                <label htmlFor="profile-upload">
                    <img 
                    src={image || profileImage} 
                    alt="profile" 
                    className="avatar"
                    />
                </label>

                <input
                id="profile-upload"
                 type="file" 
                 accept="image/*"
                 hidden
                 onChange={handleImageChange}
                 />
            </div>
        </header>
    );
}

export default Header;