import header from './header.module.css'

function Menu(props){
    const itens = props.children
        return (<header className={header.nav}>
                    <ul className={header.menu}>
                        {
                            itens.map((elemento)=>{
                                return (<li className={header.menu_linha}>
                                    {elemento}
                                </li>)
                            })
                        }
                    </ul>
                </header>)
}

export default Menu;