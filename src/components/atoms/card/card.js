import styles from './card.module.css'


export default function Card({props}){
    const {
        image,
        name ,
        place,
        experience ,
} = props

return(
    <div className={styles.name}>
       <img className={styles.image}
       src={image}/>
       <p>{name}</p>
       <p>{place}</p>
       <p className={styles.exp}>{experience}</p>

    </div>
)
        

    
}