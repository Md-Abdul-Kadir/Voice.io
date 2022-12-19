import React from "react";
import card5 from '../../img/cards/card5.avif'
import card6 from '../../img/cards/card6.avif'
import card7 from '../../img/cards/card7.avif'

export default function Exploremore() {
  return (
    <div className="my-5">
        <h1 className="mt-5">Explore More Resources</h1>
        
      <div  className="container my-5"> 
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={card6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fs-4 fw-bold my-3">Best Vocal Remover</h5>
                <p class="card-text my-5 px-3">
                  A full list of top 10 vocal remover online , including free and unpaid.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={card5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fs-4 fw-bold my-3">How to Extract Audiofrom Video</h5>
                <p class="card-text my-5 px-3">This guide shows you several solid ways to extract sound from video or using apps</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={card7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fs-4 fw-bold my-3">Free DJ Voice Maker Online</h5>
                <p class="card-text my-5 px-3">
                  This post tells you how to create a DJ voice with ease in 3 different ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
