import React from 'react';
import styled from 'styled-components'

const Cards = () => {
    return (
        <>
            <ContCards>
                <div className="container">
                    <div className="row py-5 px-3">

                        {/* CArd 1 */}
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div class="card shadow-hover overflow-hidden bg-transparent">
                                <div class="position-relative">
                                    <img class="card-img-top img-card-top" src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3RpY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Card image" />

                                    <div class="card-img-overlay d-flex align-items-start flex-column min-card">
                                        <div class="w-100 mt-auto d-inline-flex">
                                            <div class="d-flex align-items-center bg-white p-2 rounded-2">
                                                <div class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-1" src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90aWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="avatar" />
                                                </div>

                                                <div>
                                                    <h6 class="mb-0">
                                                        <a href="#" class="text-dark">Robotica</a></h6>
                                                    <span class="small">Arduino</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#">Conoce M&aacute;s</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        {/* CArd 2 */}
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div class="card shadow-hover overflow-hidden bg-transparent">
                                <div class="position-relative">
                                    <img class="card-img-top img-card-top" src="https://images.unsplash.com/photo-1563520239648-a24e51d4b570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW1wcmVzb3JhJTIwM2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Card image" />

                                    <div class="card-img-overlay d-flex align-items-start flex-column min-card">
                                        <div class="w-100 mt-auto d-inline-flex">
                                            <div class="d-flex align-items-center bg-white p-2 rounded-2">
                                                <div class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-1" src="https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxhZG8lMjAzZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="avatar" />
                                                </div>

                                                <div>
                                                    <h6 class="mb-0">
                                                        <a href="#" class="text-dark">Modelado 3D</a></h6>
                                                    <span class="small">Impresi&oacute;n 3D</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#">Conoce M&aacute;s</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        {/* CArd 3 */}
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div class="card shadow-hover overflow-hidden bg-transparent">
                                <div class="position-relative">
                                    <img class="card-img-top img-card-top" src="https://images.unsplash.com/photo-1637937459053-c788742455be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5mb3JtYXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Card image" />

                                    <div class="card-img-overlay d-flex align-items-start flex-column min-card">
                                        <div class="w-100 mt-auto d-inline-flex">
                                            <div class="d-flex align-items-center bg-white p-2 rounded-2">
                                                <div class="avatar avatar-sm me-2">
                                                    <img class="avatar-img rounded-1" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZm9ybWF0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="avatar" />
                                                </div>

                                                <div>
                                                    <h6 class="mb-0">
                                                        <a href="#" class="text-dark">Informatica</a></h6>
                                                    <span class="small">Desarrollo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#">Conoce M&aacute;s</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </ContCards>
        </>
    )
}

export default Cards


const ContCards = styled.div`
.img-card-top{
    max-width: 100%;
    height: 40vh;
}
.card{
    border: none;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
}

.card-title{
    text-align: center;
}

.card-title a{
    color: #06283D;
    letter-spacing: .5px;
    font-weight: 600;
    padding: 10px;    
}

.min-card{
    display:block;
    margin: auto;
}

.avatar-img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.avatar {
    height: 3rem;
    width: 3rem;
    position: relative;
    display: inline-block !important;
}


a {
    color: #24292d;
    text-decoration: none;
    font-size: 19px
}

`