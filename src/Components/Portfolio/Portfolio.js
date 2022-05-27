import React from "react";

const Portfolio = () => {
    return (
        <div className="flex justify-center items-center navbar-bg pb-24">
            <div className="pt-24  w-2/5 mx-auto">
                <h1 className="text-3xl pb-6">PortFolio Section!!</h1>
                <div className="bg-base-200">
                    <hr className="w-full h-2 mb-6 rounded" />
                </div>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold">Name : </span> <br />
                    Nabiul Bashar
                </h2>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold">Email: </span> <br />
                    nabiultasbed@gmail.com{" "}
                </h2>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold">Educational Qualification : </span> <br />
                    Studying at the department of Mathematics ,University of Chittagong{" "}
                </h2>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold"> Skils : </span>
                    <ul>
                        <li>HTML ,</li>
                        <li>CSS ,</li>
                        <li>JAVASCRIPT ,</li>
                        <li>REACT ,</li>
                        <li>FIREBASE ,</li>
                        <li>BOOTSTRAP ,</li>
                        <li>TAILWIND ,</li>
                        <li>GIT</li>
                        <li>MongoDB ,EXPREES JS ,</li>
                        <li>API</li>
                    </ul>
                </h2>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold">
                        Projects Link : ( Click the Button Below to get the 3 Project ){" "}
                    </span>{" "}
                    <br />
                    <div className="pt-8 pb-6">
                        <a
                            className="p-2 bg-primary rounded"
                            href="https://phone-stokes.web.app/home "
                        >
                            1.Phone Stokes
            </a>
                    </div>
                    <div className="pt-6 pb-6">
                        <a
                            className="p-2 bg-primary rounded"
                            href=" https://techno-fdaab.web.app/home "
                        >
                            2.Technical Zone
            </a>
                    </div>
                    <div className="pt-6 pb-6">
                        <a
                            className="p-2 bg-primary rounded"
                            href="https://harmonious-lolly-1fdae9.netlify.app/home"
                        >
                            3.Al Noor Car Project
            </a>
                    </div>

                </h2>
            </div>
        </div>
    );
};

export default Portfolio;