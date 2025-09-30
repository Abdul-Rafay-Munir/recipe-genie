import RecipeGenieLogo from '/recipe-genie-icon.png'

export default function Header() {
    return (
        <header className="header">
            <img src={RecipeGenieLogo} alt="" />
            <h1>RecipeGenie</h1>
        </header>
    )
}