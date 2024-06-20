import React from 'react'

const Location = () => {
    return (
        <div className="mt-16 mx-6 px-6 py-4 w-full flex gap-5">
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.050542167874!2d77.28393214273147!3d28.56900385279789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4767689a381%3A0x83aeae3e998c214d!2sBatla%20House%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1718302374857!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Location
