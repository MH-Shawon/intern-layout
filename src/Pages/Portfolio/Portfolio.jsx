// import React from 'react';



const Portfolio = () =>
{
    return (
        <>
            <h4 className="text-xl font-extrabold">Portfolios</h4>


            <div className="flex items-center">
                <div className="flex flex-col bg-gray-950 h-1 w-10"></div>
                <div className="flex flex-col bg-slate-400 h-0.5 items-end w-28"></div>
            </div>
            <ul className=" mt-2 menu-vertical lg:menu-horizontal ">
                
                    <div className="flex font-bold">
                    <li className="">All</li>
                    <li className="pl-3">Marketing</li>
                    <li className="pl-3">Web</li>
                    <li className="pl-3">Graphics</li>
                    </div>
                

            </ul>


        </>


    );
};

export default Portfolio;