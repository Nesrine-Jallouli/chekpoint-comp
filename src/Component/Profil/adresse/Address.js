import React from 'react'
import Photo from './adresse.JPG'

export const Address = () => {
    return (
        <div class="card mb-3" style={{maxWidth: "700px" }}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src={Photo} alt="photo" width="250px" height="250px"/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Address</h5>
                    <p class="card-text">Cité Hedi Nouira Borj louzid ariana</p>
                </div>
                </div>
            </div>
        </div>
       
    )
}
export default Address;
