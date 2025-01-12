import React from "react";

type MainHeadingProps = {
    children: React.ReactNode
}

const MainHeading = ({ children }: MainHeadingProps) => {
    return <h1 className="font-headerFont font-extrabold text-headerColor text-3xl">{children}</h1>
}

export default MainHeading;