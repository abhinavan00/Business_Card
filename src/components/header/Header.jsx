import './Header.css'
import profileImg from '../../assets/profile-img.jpg'

export default function Header() {
    return(
        <header>
            <img className='profile-img' src={profileImg} />
            <div>
                <div>
                    <h1>Sam Smith</h1>
                </div>
                <div>

                </div>
            </div>
        </header>        
    )
}