
import React from 'react';
import './Spinner2.css';



export const Spinner2 = ({ isActive, isWithoutText }) => {
    return (
        <>
            {isActive && <div class="cssload-loader-container cssload-abs-center app-spinner">
                <div class="cssload-olympicloader">
                    <i class="cssload-loader-circle cssload-first"></i>
                    <i class="cssload-loader-circle cssload-second"></i>
                    <i class="cssload-loader-circle cssload-third"></i>
                    <i class="cssload-loader-circle cssload-fourth"></i>
                    <i class="cssload-loader-circle cssload-fifth"></i>
                </div>
            </div>}


        </>
    )
}
