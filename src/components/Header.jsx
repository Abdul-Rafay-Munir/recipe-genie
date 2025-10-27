import RecipeGenieLogo from '/recipe-genie-icon.png'

export default function Header() {
    return (
        <header className="flex justify-center items-center gap-[11px] h-[80px] bg-white shadow">
            <img src={RecipeGenieLogo} alt="" className='w-[50px]' />
            <h1 className='text-3xl font-normal'>RecipeGenie</h1>
        </header>
    )
}