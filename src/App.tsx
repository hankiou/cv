import "./App.css";

import { AtSign, ExternalLink, HomeIcon, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

function getYearDifferenceDecimal(startDate: Date, endDate: Date) {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
  const diffInMs = endDate - startDate;
  return (diffInMs / msPerYear).toFixed(2);
}

const HIPHEN_START_DATE = new Date("02-05-2022");

function App() {
  return (
    <main className="py-6 max-w-6xl px-3 sm:px-6 md:py-12 lg:px-12 mx-auto grid grid-cols-4 gap-6">
      <img src="/z.jpg" className="rounded-xl shadow-lg" />
      <div className="p-2 col-span-3">
        <div className="flex gap-2">
          <Badge className="font-[consolas] bg-sky-800">
            Full stack engineer
          </Badge>{" "}
          <Badge className="bg-neutral-600">
            <p className="font-extrabold italic text-purple-300">XP</p>{" "}
            {getYearDifferenceDecimal(HIPHEN_START_DATE, new Date())} ans
          </Badge>
          <Badge className="bg-neutral-600">Français</Badge>
        </div>
        <h1 className="text-6xl font-bold">Enzo GUENY MICALLEF</h1>
        <p className="text-lg mt-2">
          Je suis développeur full stack qualifié en React. J'ai un profil
          technique et créatif, diplômé de M2 software engineering et j'ai un
          fort intérêt pour l'art, le dessin, le jeu vidéo et la musique.
        </p>
      </div>

      <Card className="p-2 border-0 bg-neutral-900 shadow-lg gap-1">
        <div className="flex items-center gap-2">
          <Phone size="16" /> 07.70.50.85.85
        </div>
        <a href="mailto:enzogueny30@gmail.com?subject=You are Hired !">
          <div className="flex items-center gap-2">
            <AtSign size="16" /> enzogueny30@gmail.com
          </div>
        </a>
        <div>
          <div className="flex items-center gap-2">
            <HomeIcon size="16" />
            <div>581 Route de l'aérodrome</div>
          </div>
          <div className="mx-6 text-neutral-500">84140 Avignon, France</div>
        </div>
        <hr />
      </Card>
      <Card className="p-2 col-span-3 border-green-600 border-2">
        <div className="flex justify-between items-start">
          <div>
            <a href="#">
              <div className="flex items-center gap-2">
                <img src="/icon/hiphen.webp" width="16px" />
                <h3 className="text-xl font-bold ">Hiphen</h3>
                <ExternalLink className="text-neutral-600" size="16" />
              </div>
            </a>
            <p className="flex items-center gap-2 text-neutral-500">
              <MapPin size="16" /> Avignon, France
            </p>
          </div>
          <Badge>Mai 2022 → Aujourd'hui</Badge>
          <Badge className="font-[consolas] bg-green-600">
            Expérience principale
          </Badge>
        </div>
        <p>
          J'ai travaillé en tant que membre d'une équipe IT de 6 personnes dans
          une entreprise d'environ 30 employés. Cette échelle implique une
          autonomie de travail et une proactivité dont j'ai fait part et qui a
          souvent été saluée.
          <ul>
            <li>
              Cloverfield: Développement de fonctionnalités sur notre principale
              application client
            </li>{" "}
            - Spécification technique et métier en accord avec le besoin client
            - Réalisation de maquettes détaillées et versionnées - Gestion de
            projet, chiffrage temps, planification des releases - Encadrement de
            stagiaires pour le développement de tickets - Mise à niveau des
            technologies, maintien, couverture de tests, documentation de routes
            - Phenostation: 2 projets embarqués - Développement de service de
            traçabilité interfacé avec d'autres systèmes - GUI tactile en mode
            Kiosk facile à utiliser en contexte industriel - Phenostation
            Monitoring: Application de visualisation de données - Développement
            intégral front et back + maintien et nouvelles fonctionnalités
          </ul>
        </p>
      </Card>
      {/* <Card className="p-2 border-0 bg-indigo-950">
        <h3>Hobbies</h3>
      </Card> */}
    </main>
  );
}

export default App;
