import profilePic from '../assets/profile.jpg';
import style from './Card.module.css'

function Card(){
    return (
        <div className={style.card}>
            <img className={style.cardImg} src={profilePic} alt="Profile Picture"/>
            <h2 className={style.cardTitle}>Energon</h2>
            <p className={style.cardText}>I&#39;m currently learning react and I read Manhwas</p>
        </div>
    );
}

export default Card;