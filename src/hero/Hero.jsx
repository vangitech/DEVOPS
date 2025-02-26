function Hero() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "absolute",
          top: "40%",
          left: "40%",
          transform: "translate(-20%, -20%)"
        }}
      >
        <h1>Introduction To Get linked</h1>
        <h2>tech Hackathon 1.0</h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>

      <div
        style={{
          position: "relative",
          top: "10%",
          left: "30%",
          transform: "translate(-40%, -40%)"
        }}
      >
        <img src="./public/bigbulb.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
