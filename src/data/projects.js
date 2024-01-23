import img1 from "../assets/portfolio1.jpeg";
import img2 from "../assets/seoulful_traveler_v2.jpeg";
import img3 from "../assets/KaleidoscopicGallery.jpeg";
import img4 from "../assets/internetTimeline.jpeg";
import img5 from "../assets/whack-a-mole2.png";
import img6 from "../assets/video.jpg";

export const projects = [
  {
    id: 1,
    name: "Past Portfolios",
    description:
      "Created after graduating, the motive for the design was to display the various skills from my toolbox while displaying my personality.",
    link: "https://epauley.github.io/PauleyPortfolio/",
    skills: ["HTML5", "CSS3", "Javascript", "jQuery"],
    img: img1,
  },
  {
    id: 2,
    name: "Seoulful Traveler",
    description:
      "This site came about as a way to build onto my skills. Parallax scrolling was popular and want to try my hand at it.",
    link: "https://epauley.github.io/Seoulful-Traveler/",
    skills: ["HTML5", "CSS3", "Javascript", "jQuery"],
    img: img2,
  },
  {
    id: 3,
    name: "Image Gallery",
    description:
      "Inspired by a project for college, wanted build a site so showcase interest that were not web related but also expand my skills. I specifically focused on Jekyll as it allowed templating and was similar to one I already knew from work.",
    link: "https://epauley.github.io/KaleidoscopicGallery/",
    skills: ["HTML5", "CSS3", "Javascript", "jQuery", "Jekyll", "RubyGems"],
    img: img3,
  },
  {
    id: 4,
    name: "History of the Internet",
    description:
      "This site initially started off as a project for one of my college classes. Rebuilding the site, I focused on improving the UI and UX as well as making site responsive. Since this is a history site would it not make more sense to make it into a timeline? This gives users a better sense of time by displaying events in the order that they happen.",
    link: "https://epauley.github.io/History-of-the-Internet/",
    skills: ["HTML5", "CSS3", "Javascript", "jQuery"],
    img: img4,
  },
  {
    id: 5,
    name: "Whack-A-Mole",
    description:
      "This is a game I built from the ground up completely in Javascript.",
    link: "https://epauley.github.io/Whack-A-Mole/",
    skills: ["HTML5", "CSS3", "Javascript", "jQuery"],
    img: img5,
  },
  {
    id: 6,
    name: "Video Art Exploration",
    description:
      "This project focused on inquiry and experimentation. Goal was not to create narrative structures or persuasive speech, but rather to try something uncertain, to provoke, to confound, or to evoke an emotion. There were three phases to create the video. In phase one, the task was to create a 45-90 second video filming thing we found interesting. In phase two, the task was to create a revised 60-120 second video based on feedback received during class discussion of videos. Lastly, phase three was to create final video keeping in mind feedback received during class discussion on video two.",
    link: "https://vimeo.com/86715602",
    skills: ["Adobe Premiere Pro"],
    img: img6,
  },
];
