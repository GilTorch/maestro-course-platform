const Copyright = () => {
    const currentYear = new Date().getFullYear();
    return (
        <p className="text-copyrightColor">
            &copy; Copyright {currentYear} Gilbert Torchon
        </p>
    )
}

export default Copyright;