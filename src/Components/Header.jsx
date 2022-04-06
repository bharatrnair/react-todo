//{title} is destructured from props.title
//{color} is destructured from props.color
const Header =({title, color}) => {
    return (
        <div className="Header">
            <h1 style={{color}}>{title}</h1>
        </div>
    )
}
export default Header;