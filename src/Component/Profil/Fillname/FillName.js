import React from 'react'
const Aff=()=>{
    alert("welcome to Nesrine Jallouli")
}
export const FillName = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header"> My Profil </div>
                <div class="card-body">
                    <h5 class="card-title">First name and second name</h5>
                    <p class="card-text">Nesrine Jallouli</p>
                    <a onClick={Aff} class="btn btn-primary">know more</a>
                </div>
                <div class="card-footer text-muted">Student chez GO MY CODE</div>
            </div>
        </div>
        
    )
}
export default FillName;