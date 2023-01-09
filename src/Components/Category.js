import React, { useState } from "react";
import Categories from "./Categories";

const Category = () => {
  const [data, setData] =
    useState(Categories);
  return (
    <div>
      <h1 className="text-center text-info">
        Category
      </h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4">
              Electronics
            </button>
            <button className="btn btn-warning w-100 mb-4">
              Sport Equipment
            </button>
            <button className="btn btn-warning w-100 mb-4">
              Furniture
            </button>
            <button className="btn btn-warning w-100 mb-4">
              Software
            </button>
            <button className="btn btn-warning w-100 mb-4">
              Grossery
            </button>
            <button className="btn btn-warning w-100 mb-4">
              All
            </button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                return (
                  <div>
                    <div
                      className="col-md-4 mb-4"
                      key={values.id}
                    >
                      <div className="card">
                        <img
                          src={
                            values.image
                          }
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {
                              values.title
                            }
                          </h5>
                          <p className="card-text">
                            Price:
                            {
                              values.price
                            }
                            $
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
