import React from "react";

const Portfolio = () => {
    return (
        <div className="flex justify-center items-center bg-orange-200 pb-24">
            <div className="pt-24  w-2/5 mx-auto">
                <h1 className="text-3xl pb-6">PortFolio Section!!</h1>
                <div className="bg-base-200">
                    <hr className="w-full h-2 mb-6 rounded" />
                </div>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold">Name : </span> <br />
                    Al Nahian{" "}
                </h2>
                <h2 className="text-2xl pb-4">
                    <span className="font-bold">Email: </span> <br />
                    muhammedalnahian@gmail.com{" "}
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
                            className="p-2 bg-red-500 rounded"
                            href="https://soft-souffle-4862f9.netlify.app/ "
                        >
                            1.Batman Project
            </a>
                    </div>
                    <div className="pt-6 pb-6">
                        <a
                            className="p-2 bg-pink-500 rounded"
                            href=" https://pr-retailer-new.web.app/ "
                        >
                            2.Retailer website
            </a>
                    </div>
                    <div className="pt-6 pb-6">
                        <a
                            className="p-2 bg-blue-500 rounded"
                            href="https://mdalnahian.github.io/lorukitraversy/ "
                        >
                            3.Cloud Hosting website
            </a>
                    </div>
                    {/* <a href=" ">3. https://mdalnahian.github.io/lorukitraversy/ </a> */}
                </h2>
            </div>
        </div>
    );
};

export default Portfolio;