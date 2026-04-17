import './profile.css';
import Hello from "./Hello.jsx";
function Profile(){
return <div className="container">

    <div className='container_two'><h1>Profile</h1></div>

    <div className='data_cart'>

        <div className='photo_cart'>
            <img src="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png" alt="photo" />
        </div>
        <div className='persons_main_data_container'>
            <div className='name_box'>
        <h2 className='name'>  Uday kasera</h2>
        </div>

        <Hello email="udaykaser34@gmail.com"age={23} gender="male"/>

        </div>


        </div>





    </div>
}
export default Profile