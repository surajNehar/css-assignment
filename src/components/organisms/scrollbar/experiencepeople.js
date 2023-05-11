import styles from './experiencepeople.module.css'
import Card from '../../atoms/card/card'

export default function Experiencepeople(){
    const userOne = {
        image :"https://images.pexels.com/photos/3752128/pexels-photo-3752128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Ravidas ",
        place : "chandigarh",
        experience : "3 yrs of Exp."


    }
    const userTwo = {
        image : "https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Ganesh dere",
        place : "vellore",
        experience : "2 yrs of Exp.",
    }

    const userThree={
        image : "https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Sagar",
        place : "Jaipur",
        experience : "15 yrs of Exp."
}

    const userFour={
        image : "https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Adesh",
        place : "Indore",
        experience : "7 yrs Exp"
}

    const userFive={
        image : "https://images.pexels.com/photos/16022711/pexels-photo-16022711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Prasad",
        place : "Mumbai",
        experience : "12 yrs Exp."
}
    const userSix={
        image : "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Prabhat",
        place : "rajstan",
        experience : "8 yrs Exp."

    }

    const userSeven={
        image : "https://images.pexels.com/photos/16022711/pexels-photo-16022711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Ravindra",
        place : "Mumbai",
        experience : "7 yrs Exp."

    }
    const userEight={
        image : "https://images.pexels.com/photos/50855/pexels-photo-50855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Anirudha",
        place : "malad",
        experience : "1yrs Exp."

    }
    const userNine={
        image : "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Munish tiwari",
        place : "Mumbai",
        experience : "3 yrs Exp."

    }

    const userTen={
        image : "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name : "Ratnakar shinde",
        place : "Mumbai",
        profession : "Businessman",
        experience : "5 yrs Exp."
    }

    return(
        <div className={styles.scroll}> 

            <Card
            props={userOne}
            />

            <Card
            props={userTwo}
            />

            <Card
            props={userThree}
            />

            <Card
            props={userFour}
            />

            <Card
            props={userFive}
            />

            <Card
            props={userSix}
            />

            <Card
            props={userSeven}
            />

            <Card
            props={userEight}
            />

            <Card
            props={userNine}
            />

            <Card
            props={userTen}
            />

        </div>
    )
}