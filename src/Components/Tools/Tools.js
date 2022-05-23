import React, { useState, useEffect } from 'react';
import ShowTool from '../ShowTool/ShowTool';
import '../Tools/Tools.css';
const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/tools")
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);
    return (
        <div className="container mx-auto  ">


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <ShowTool
                        tool={tool._id} tool={tool}
                    ></ShowTool>)
                }
            </div>
        </div>
    );
};

export default Tools;
