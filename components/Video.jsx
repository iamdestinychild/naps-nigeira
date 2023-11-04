function Video({ source, vidClass, vidIframe }) {
  return (
    <div className={vidClass}>
      <iframe
        // width="560"
        // height="315"
        className={vidIframe}
        src={`https://www.youtube.com/embed/${source}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
