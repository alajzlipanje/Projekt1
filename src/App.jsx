import { Counter } from "./Counter";
import { Zival } from "./Zival";
import "./style/zival.css";

export default function App() {
  return (
    <>
      <div className="back">
        <h1 className="title">PROJEKT 1</h1>
        <h1 className="title">Živalsko KRALJEVSTVO</h1>
        <p className="subtitle">Tukaj bodo predstavljene različne živali.</p>
        <Counter></Counter>
        <div className="grid grid-cols-4">
          {animals.map((animal) => {
            return <Zival data={animal}></Zival>;
          })}
        </div>
      </div>
    </>
  );
}

const animals = [
  {
    name: "Žirafa",
    desc: "Žiráfa je visok afriški sesalec. Natančneje, gre za sodoprstega kopitarja. Je najvišja živa kopenska žival in največji prežvekovalec na Zemlji. Tradicionalno je veljalo, da so žirafe ena vrsta, Giraffa camelopardalis, z devetimi podvrstami.",
    url: "https://sl.wikipedia.org/wiki/%C5%BDirafa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/800px-Giraffe_standing.jpg",
  },
  {
    name: "Slon",
    desc: "Sloni so večja skupina sesalcev, ki tvorijo družina živali Elephantidae v redu trobčarjev. Danes so poznane tri živeče vrste, ki jim grozi izumrtje: afriški gozdni slon, afriški savanski slon in azijski slon. Sloni živijo v podsaharski Afriki, Južni Aziji in Jugovzhodni Aziji.",
    url: "https://sl.wikipedia.org/wiki/Slon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg",
  },
  {
    name: "Delfin",
    desc: "Delfini so vodni sesalci družine Delphinidae in so najbolj razširjena družina kitov. Poznamo 32 vrst delfinov. Najdemo jih v vseh oceanih in morjih, običajno pa živijo v plitvih vodah oziroma se zadržujejo blizu gladine. Hranijo se predvsem z ribami in lignji.",
    url: "https://sl.wikipedia.org/wiki/Slon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/1024px-Tursiops_truncatus_01.jpg",
  },
  {
    name: "Lev",
    desc: "Lêv je velika mačka, ki lahko zraste v dolžino do 2,5 m z repom do 1,1 m. Težek je lahko do 250 kg. Levi so druge največje mačke na svetu, od njih so večji le sibirski tigri. Zaradi goste samčeve grive se med vsemi mačkami samec in samica najbolj razlikujeta.",
    url: "https://sl.wikipedia.org/wiki/Lev",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/250px-Lion_waiting_in_Namibia.jpg",
  },
];
