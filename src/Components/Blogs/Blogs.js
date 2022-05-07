import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center  text-warning mt-5 mb-5'>Blogs</h2>

            <h4> Q.1: Difference between javascript and nodejs</h4><br />
            <h6>Javascript:</h6>
            <p>
                1.Javascript is used on the client side.
                <br />
                2.it allows us to add HTML and work with the DOM.
                <br />
                3.Javascript is mostly use in frontend. <br />
                4. It is the progamming language by which we can write scripts in rhe webpage. 
            </p>
            <br />
            <h6>Node js:</h6>
            <br />
            <p>
                1.Nodejs is a javscript runtime environment. <br />
                2.It is mosty used in server side. <br />
                3.It is used in Backend. <br />
                4.It cant add HTML tags.
            </p>

            <h4>Q.2: Differences between sql and nosql databases.</h4>
            <br />
            <h6>sql</h6>
            <p>
                1.sql is relational database management system. <br />
                2.It is not suitable for hierarchical  data storage.
                <br />
                3. It is Vertically scalable.
            </p>
            <br />
            <h6>No-sql:
            </h6>
            <br />
            <p>
                1.No-sql is distributed database system.
                <br />
                2.It is very suitable for hierarchical  data storage.
                <br />
                3.it is horizontally  scalable.
            </p>
            <br />
            <h4>Q.3: What is the purpose of jwt and how does it works?</h4>
            <p>
                JWT is a json object which is used to share security information between client and server. <br />
                It is mainly used for authentication. After a user logging in to an application, the application will create a JWT and send it back to the user. The token tells the server what routes, services, and resources the user is allowed to access.
            </p>
        </div>
    );
};

export default Blogs;