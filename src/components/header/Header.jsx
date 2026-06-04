import './Header.css'
import profileImg from '../../assets/profile-img.jpg'

function Header() {
    return(
        <header>
            <img className='profile-img' src={profileImg} />
            <div className='about-container'>
                <div className='details'>
                    <h1 className='name'>Sam Smith</h1>
                    <p className='profession'>Fullstack Developer</p>
                    <a className='portfolio'>samsmith.website</a>
                </div>
                <div className='btn-links-container'>
                    <a className='email-btn'>
                        <i class="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </a>
                    <a className='linkedin-btn'>
                        <i class="fa-brands fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </header>        
    )
}

export default Header;