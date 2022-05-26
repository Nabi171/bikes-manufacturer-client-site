import React from 'react';

const Blogs = () => {
    return (
        <div className="navbar-bg">
            <div className='container mx-auto '>
                <div class="card w-full bg-base-100 shadow-xl bg-orange-100">
                    <div class="card-body">
                        <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                        <p>


                            Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                            According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                            In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                            In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                    <ul>
                                <li>Keeping component state local where necessary</li>
                                <li>Memoizing React components to prevent unnecessary re-renders</li>
                                <li>Code-splitting in React using dynamic import()</li>
                                <li>Windowing or list virtualization in React</li>
                                <li> Lazy loading images in React</li>

                            </ul>
                        </p>
                    </div>
                </div>
                <br />

                <div class="card w-full bg-base-100 shadow-xl bg-orange-100">
                    <div class="card-body">
                        <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                        <p>


    5 Types of Application State in React and How They Help in State Management
    The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first. ...
    The Solution. ...
    1 . ...
    Data State. ...
    Control State. ...
    Session State. ...
    Location State. ...
    Conclusion.
             
                        </p>
                    </div>
                </div>

<br/>
                <div class="card w-full  shadow-xl bg-orange-100">
                    <div class="card-body">
                        <h2 class="card-title">How does prototypical inheritance work?</h2>
                        <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
              
                        </p>
                    </div>
                </div>
                <br/>
                <div class="card w-full bg-orange-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>

                        As you may already know, a common way to tune a React component for performance is to make it “pure,” which causes it to only re-render when its props change (instead of every time its parent re-renders). This can be done automatically by extending React.PureComponent instead of React.Component, or manually by implementing the shouldComponentUpdate lifecycle method to compare nextProps with current props. If the props look the same, it skips the render, and saves some time.
             
                        </p>
                    </div>
                </div>
                <br/>
                <div class="card w-full bg-orange-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> What is a unit test? Why should write unit tests?

</h2>
                        <p>


                        Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;