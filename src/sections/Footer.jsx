import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              {socialImg.url ? (
                <a 
                  href={socialImg.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full flex justify-center items-center"
                >
                  <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                </a>
              ) : (
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Bara Al-Sedih. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
