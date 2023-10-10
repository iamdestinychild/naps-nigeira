import Image from "next/image";

function Newscard({image, title, paragraph}) {
  return (
    <div className="newscard">
      <div className="newscard-image-cover">
        <Image
          src={image}
          className="newscard-image"
          fill
          alt=""
        />
      </div>
      <div className="newscard-content">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Newscard;
