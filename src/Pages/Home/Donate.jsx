import React from 'react';

const Donate = () => {
    return (
        <div className="bg-donate-bg bg-cover bg-center w-full h-[300px] sm:h-[400px] md:h-[450px] flex flex-col justify-center items-center text-white mt-4">
            <p className="md:text-3xl lg:text-5xl text-2xl font-bold mb-4">We are here to stop poverty</p>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 text-center px-4">We are fundraising for the people who are fighting against poverty</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Donate Us
            </button>
        </div>
    );
}

export default Donate;
