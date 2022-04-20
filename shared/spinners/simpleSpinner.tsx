import React from 'react';

const SimpleSpinner: React.FC = ({}) => {
    return (
        <div className="flex justify-center items-center mt-4">
            <div
                className="animate-spin rounded-full h-8 w-8 border-b-2"
            />
        </div>
    )

}

export default SimpleSpinner;