import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout';

function Attributes() {
  return (
    <div>
      <Layout></Layout>
        <h2 className='text-primary'>
            Attributes in JSX
        </h2>
        <p dataSampleAttribute='test' className='bg-info'>
            * attribute name must be camelCase <br/>
	        * bec some words are keyword in JS
        </p>
    </div>
  );
}

export default Attributes