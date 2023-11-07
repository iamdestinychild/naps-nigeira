import Image from "next/image";
import styles from "../styles/mission.module.css";
import Video from "./Video";

function Mission() {
  return (
    <div className={styles.aboutComponent}>
      <Video
        source={`Qie-TC1bwxs?si=0fivhk54hdOg_WwY`}
        vidClass={styles.introVid}
        vidIframe={styles.vidIframe}
      />
      <div className={styles.aboutContent}>
        <h1>Our Mission</h1>
        <article className={styles.aboutText}>
          NAPS, the National Association of Physics Students, is the premier
          organization representing physics majors across academic institutions
          throughout Nigeria. Our mission extends beyond mere encouragement of
          physics students in their academic and professional endeavors, both
          domestically and internationally. We are dedicated to introducing
          physics students to the global and national scientific communities,
          fostering professional relationships, and nurturing a collaborative
          culture among young physicists in Nigeria. To fulfill these
          objectives, we organize conferences and events organized and led by
          physics students themselves. NAPS is a dynamic community of aspiring
          physicists and established researchers united by a shared passion for
          the universe deepest secrets. Founded with the vision of creating a
          conducive environment for learning, networking, and growth, NAPS is
          dedicated to nurturing talent, fostering innovation, and shaping the
          next generation of scientific leaders. As a collective force, we aim
          to cultivate a sense of camaraderie among physics enthusiasts,
          facilitating knowledge exchange and collaboration.
        </article>
      </div>
    </div>
  );
}

export default Mission;
