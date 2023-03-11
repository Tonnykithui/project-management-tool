import React from 'react'
import Card from '../card/Card';
import './Admin.css';

const Administration = () => {
    return (
        <div className='bg-slate-300 h-screen w-full p-2'>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Administration