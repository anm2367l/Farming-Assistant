import React from 'react';
//col-navegacion
const Sidebar = () => {
  return (
    <div className='col col-4 d-flex flex-column vh-100 w-100 flex-shrink-0 p-3 text-white bg-dark' id=''>
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <img className='rounded-circle w-25'
                            src="https://docs.google.com/uc?export=download&id=1-EC2U4SLh388Lwe6JudAfLpmeJB2Q6JG" alt="" />
                        <span class="fs-4 p-2">Farming Assistant</span>
                    </a>
                    <hr />
                    <ul class="nav nav-pills flex-column mb-auto">

                        <li class="nav-item">
                            <button className="btn btn-dark ms-4 align-items-end text-white rounded">
                                Home
                            </button>

                        </li>
                        <li>
                            <button className="btn btn-dark ms-4 align-items-center text-white rounded">
                                Home
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-dark ms-4 align-items-center text-white rounded">
                                Home
                            </button>
                        </li>
                    </ul>
                    <hr />
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://docs.google.com/uc?export=download&id=1-EC2U4SLh388Lwe6JudAfLpmeJB2Q6JG" alt="" width="32" height="32" class="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
  );
};

export default Sidebar;

