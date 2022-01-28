import cali from './helpers/songs/wataboi.mp3';
import fifty from './helpers/songs/tobylane.mp3';
import iwonder from './helpers/songs/dreamheaven.mp3';
import imgSrc from './helpers/photo/1.jpeg';
import imgSrc2 from './helpers/photo/2.jpg';
import imgSrc3 from './helpers/photo/3.jpg';

const tracks = [
    {
        title: "Cali",
        artist: "Wataboi",
        audioSrc: cali,
        image: imgSrc,
        color: "#00aeb0"
    },
    {
        title: "50",
        artist: "tobylane",
        audioSrc: fifty,
        image: imgSrc2,
        color: "#ffb77a"
    },
    {
        title: "I Wonder",
        artist: "DreamHeaven",
        audioSrc: iwonder,
        image: imgSrc3,
        color: "#5f9fff"
    }
];
export default tracks;
