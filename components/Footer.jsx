import Image from "next/image";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="footer-logo-brife">
          <div className="footer-logo-cover">
            <Image
              src="/assets/images/naps-logo.png"
              className="footer-logo"
              alt=""
              fill
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolorum corrupti esse mollitia quaerat nemo natus? Adipisci,
          </p>
        </div>
        <ul className="footer-link">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="footer-socials">
          <p>Follow Us</p>
          <ul className="footer-icons">
            <li className="footer-icon">
              <a href="#">
                <Image src="/assets/icons/x-twitter.svg" alt="" fill />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#">
                <Image src="/assets/icons/facebook.svg" alt="" fill />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#">
                <Image src="/assets/icons/instagram.svg" alt="" fill />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#">
                <Image src="/assets/icons/linkedin.svg" alt="" fill />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <p className="footer-copy-right">© 2023. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
