"use client";

import "../styles/styles.css"; //
import Image from 'next/image';


const Main = () => {

  return (
    <div>
      <div className="block">
        <h1 className="centered">Quimisagi</h1>
        <h2 className="centered">David Crespo</h2>
      </div>
      <hr />
      <div className="block">
        <p>
          Tech enthusiast from Colombia. Currently taking master's degree at Japan! I'm researching about deep learning applications in computer vision, and want to develope a model for interpolating animation inbetween frames.
        </p>
      </div>
      <hr />
      <div className="block">
        <h3>Project #1: Rivit - Brain training game</h3>
        <p>
          Rivit is a brain training game that I developed in 2020. It is a game that challenges your memory, attention, and problem-solving skills. It is available on the Google Play Store and the Apple App Store.
        </p>
        <div className="verticalImageContainer">
          <Image
            src="/images/1730807112521.gif"
            alt="Rivit game"
            layout="responsive"
            width={348}
            height={772}
          />
        </div>
      </div>
      <hr />
      <div className="block">
        <h3>Project #2: Buddys</h3>
        <p>
          Electrodomistics and furneture rental site.
        </p>
        <div className="imageContainer">
          <Image
            src="/images/buddys.png"
            alt="Quimisagi website"
            layout="responsive"
            width={1000}
            height={348}
          />
        </div>
      </div>
      <hr />
      <div className="block">
        <h3>Project #3: Walrus Budget</h3>
        <p>
          Personal project. Budget management app.
        </p>
        <div className="verticalImageContainer">
          <Image
            src="/images/walrusBudget.png"
            alt="Quimisagi website"
            layout="responsive"
            width={1000}
            height={348}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
