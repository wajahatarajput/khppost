import React from "react";

const Main = () => {
  return (
    <>
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                              style={{ height: '200px' }}
                src="/assets/img/lion.jpg?h=9c99cd578daaa7e82e132b90a7a8a2fa"
              />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Article</p>
                <h4 className="card-title">Lorem libero donec</h4>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
                    <p className="fw-bold mb-0">John Smith</p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                              style={{ height: '200px' }}
                src="/cats.jpg"
              />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Article</p>
                <h4 className="card-title">Lorem libero donec</h4>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
                    <p className="fw-bold mb-0">John Smith</p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                              style={{ height: '200px'}}
                src="/assets/img/cats.jpg?h=57497e8f9bf268d9d36c3223d30793fd"
              />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Article</p>
                <h4 className="card-title">Lorem libero donec</h4>
                <p className="card-text">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
                <div className="d-flex">
                  <img
                    className="rounded-circle flex-shrink-0 me-3 fit-cover"
                    width="50"
                    height="50"
                    src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                  />
                  <div>
                    <p className="fw-bold mb-0">John Smith</p>
                    <p className="text-muted mb-0">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
