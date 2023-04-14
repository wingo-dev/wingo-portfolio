import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "daria taylor",
          "a web designer",
          "a blogger",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
