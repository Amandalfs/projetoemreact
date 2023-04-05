import style from '../../styles/Home.module.css'

function Menu(){
    return  (<>
                <header className={style.header}>
                    <ul className={style.menu}>
                        <li className={style.menu_linha}>Home</li>
                        <li className={style.menu_linha}>Sobre</li>
                        <li className={style.menu_linha}>Ideias</li>
                        <li className={style.menu_linha}>Curiosidades</li>
                        <li className={style.menu_linha}>Lista</li>
                    </ul>
                </header>
            </>)
}

export default Menu;