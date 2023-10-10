import Image from "next/image";

function Eventcard({ image, title, paragraph }) {
  return (
    <div className="eventcard">
      <div className="eventcard-image-cover">
        <Image src={image} alt="" className="eventcard-image" fill />
      </div>
      <div className="eventcard-content">
        <h1>{title}</h1>
        <article>{paragraph}</article>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

export default Eventcard;
