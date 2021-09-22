import HeaderStyles from '../styles/Header.module.css'

function Header() {
    return (
        <header className={HeaderStyles.container}>
            <h1 className={HeaderStyles.title}>Breaking <span>News</span></h1>
            <p className={HeaderStyles.description}>Keep up to date with the latest happenings in Nigeria</p>
        </header>
    )
}

export default Header
