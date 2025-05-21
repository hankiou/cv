import "./App.css";

import {
  AtSign,
  Backpack,
  ChefHat,
  Download,
  Dumbbell,
  ExternalLink,
  Gamepad2,
  Globe2,
  GraduationCap,
  Guitar,
  HomeIcon,
  Lightbulb,
  Linkedin,
  MapPin,
  Mountain,
  Palette,
  Pen,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/ui/hover-card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TechBadge } from "./components/custom/TechBadge";
import { getYearDiff } from "./utils";

const HIPHEN_START_DATE = new Date("02-05-2022");

function App() {
  return (
    <main className="py-6 max-w-6xl px-3 sm:px-6 md:py-12 lg:px-12 mx-auto grid grid-cols-4 gap-6">
      <img src="/Enzo.png" className="rounded-xl shadow-lg" />
      <div className="p-2 col-span-3">
        <div className="flex gap-2 items-center">
          <Badge className="font-[consolas] bg-sky-800">
            Full stack engineer
          </Badge>{" "}
          <Badge className="bg-neutral-600">
            <p className="font-extrabold italic text-purple-300">XP</p>{" "}
            {getYearDiff(HIPHEN_START_DATE, new Date())} ans
          </Badge>
          <Badge className="bg-neutral-600">Français</Badge>
          <img src="/flags/fr.svg" width="20px" className="rounded-md" />
          <img src="/flags/gb.svg" width="20px" className="rounded-md" />
          <div className="flex-grow" />
          <Button size="icon" className="p-0">
            <Download />
          </Button>
        </div>
        <h1 className="text-6xl font-bold">Enzo GUENY MICALLEF</h1>
        <p className="text-lg mt-2">
          Je suis développeur full stack qualifié en React. J'ai un profil
          technique et créatif, diplômé de M2 software engineering et j'ai un
          fort intérêt pour l'art, le dessin, le jeu vidéo et la musique.
        </p>
        <div className="flex gap-1 mt-2 flex-wrap">
          <TechBadge className="bg-neutral-900" tech="react" />
          <TechBadge className="bg-neutral-900" tech="javascript" />
          <TechBadge className="bg-neutral-900" tech="docker" />
          <TechBadge className="bg-neutral-900" tech="node.js" />
          <TechBadge className="bg-neutral-900" tech="rubyonrails" />
          <TechBadge className="bg-neutral-900" tech="figma" />
          <TechBadge className="bg-neutral-900" tech="JIRA" />
          <TechBadge className="bg-neutral-900" tech="bitbucket" />
          <TechBadge className="bg-neutral-900" tech="MUI" />
          <TechBadge className="bg-neutral-900" tech="git" />
          <TechBadge className="bg-neutral-900" tech="tailwindcss" />
          <TechBadge className="bg-neutral-900" tech="awslambda" />
          <TechBadge className="bg-neutral-900" tech="sass" />
          <TechBadge className="bg-neutral-900" tech="unity" />
          <TechBadge className="bg-neutral-900" tech="postgresql" />
          <TechBadge className="bg-neutral-900" tech="prisma" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Card className="p-2 border-0 bg-neutral-900 shadow-lg gap-1">
          <div className="flex items-center gap-2">
            <Phone size="16" /> 07.70.50.85.85
          </div>
          <a href="mailto:enzogueny30@gmail.com?subject=You are Hired !">
            <div className="flex items-center gap-2">
              <AtSign size="16" /> enzogueny30@gmail.com
            </div>
          </a>
          <div className="flex items-center gap-2">
            <HomeIcon size="16" /> 84140 Avignon, France
          </div>
          <a href="https://www.linkedin.com/in/enzo-gueny-3b16b9186/">
            <div className="flex items-center gap-2">
              <Linkedin size="16" /> /enzo-gueny
            </div>
          </a>
        </Card>
        <Card className="relative p-2 border-0 bg-neutral-700 shadow-lg shadow-neutral-900 gap-1 overflow-hidden">
          <img
            src="/icon/au.png"
            alt="Icon"
            className="absolute left-[-15px] top-[30px] h-[100%] opacity-20 z-0"
          />
          <div className="flex justify-between z-1">
            <Badge className="flex gap-1 items-center bg-neutral-800">
              <GraduationCap /> Formation
            </Badge>
            <Badge className="flex gap-1 items-center font-extrabold text-red-200 bg-red-900  ">
              BAC +5
            </Badge>
          </div>
          <span className="z-1">
            <span className="font-bold">Master</span> Ingénierie logicielle et
            société du numérique
          </span>
          <div className="text-neutral-400 flex gap-1 items-center z-1">
            <img src="/icon/au.png" width="16px" />
            Avignon université CERI
          </div>
          <Badge className="self-center z-1">2016 → 2021</Badge>
        </Card>
        <Card className="p-2 gap-1 border-0 bg-neutral-900">
          <Badge className="flex gap-1 items-center bg-neutral-800 ">
            <Sparkles /> Centres d'intérêt
          </Badge>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>
              <div className="flex gap-1 items-center">
                <Backpack size="16" /> Voyage & exploration
              </div>
            </HoverCardTrigger>
            <HoverCardContent side="top">
              <p>
                Je voyage régulièrement, je suis très curieux de découvrir des
                cultures différentes. Plutôt aventurier, je n'ai pas peur de
                faire de longs trajets pour me rendre dans des lieux méconnus.
              </p>
            </HoverCardContent>
          </HoverCard>
          <div className="flex gap-1 items-center">
            <Palette size="16" /> Art & musées
          </div>
          <div className="flex gap-1 items-center">
            <Pen size="16" /> Dessin
          </div>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>
              <div className="flex gap-1 items-center">
                <Gamepad2 size="16" /> esport
              </div>
            </HoverCardTrigger>
            <HoverCardContent side="top">
              <p>
                Je suis un grand consommateur de contenu esportif,
                particulièrement Counter-Strike, je suis avec assiduité. Je me
                rends aux évènements IRL le plus souvent possible.
              </p>
              <p>Supporter KC, Vitality sur CS</p>
            </HoverCardContent>
          </HoverCard>
          <div className="flex gap-1 items-center">
            <Dumbbell size="16" /> Musculation
          </div>
          <div className="flex gap-1 items-center">
            <ChefHat size="16" /> Cuisine
          </div>
          <div className="flex gap-1 items-center">
            <Guitar size="16" /> Guitare
          </div>
          <div className="flex gap-1 items-center">
            <Mountain size="16" /> Randonnée
          </div>
          <div className="flex gap-1 items-center">
            <Globe2 size="16" /> Géographie
          </div>
        </Card>
      </div>
      <div className="col-span-3 flex flex-col gap-6">
        <Card className="p-2 gap-2 border-green-600 bg-neutral-900 shadow-lg shadow-green-900 border-2">
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
              <Lightbulb size="16" /> Expérience principale
            </Badge>
          </div>
          <p>
            J'ai travaillé en tant que membre d'une équipe IT de 6 personnes
            dans une entreprise d'environ 30 employés. Cette échelle implique
            une autonomie de travail et une proactivité dont j'ai fait part et
            qui a souvent été saluée.
          </p>
          <span>
            <span className="font-bold">Cloverfield</span>: Responsable de notre
            principale application client
            <TechBadge icon tech="rubyonrails" />
            <TechBadge icon tech="react" />
            <TechBadge icon tech="sass" />
            <TechBadge icon tech="postgresql" />
          </span>
          <ul className="list-disc list-inside ml-1">
            <li>
              Spécification technique et métier en accord avec le besoin client
            </li>
            <li>
              Réalisation de maquettes détaillées et versionnées
              <TechBadge icon tech="figma" />
            </li>
            <li>
              Gestion de projet, chiffrage temps, planification des releases,
              revue de code <TechBadge icon tech="JIRA" />
              <TechBadge icon tech="Bitbucket" />
            </li>
            <li>Encadrement de stagiaires pour le développement de tickets</li>
            <li>
              Mise à niveau des technologies, maintien, couverture de tests,
              documentation de routes
            </li>
          </ul>
          <span>
            <span className="font-bold">Phenostation</span>: 2 projets embarqués{" "}
            <TechBadge icon tech="node.js" />
            <TechBadge icon tech="express" />
            <TechBadge icon tech="react" />
            <TechBadge icon tech="MUI" />
            <TechBadge icon tech="postgresql" />
          </span>
          <ul className="list-disc list-inside ml-1">
            <li>
              Développement de service de traçabilité interfacé avec d'autres
              systèmes
            </li>
            <li>
              GUI tactile en mode Kiosk facile à utiliser en contexte industriel
            </li>
            <li>
              Gestion de projet, chiffrage temps, planification des releases
            </li>
          </ul>

          <span>
            <span className="font-bold">Phenostation Monitoring</span>:
            Application de visualisation de données
            <TechBadge icon tech="node.js" />
            <TechBadge icon tech="express" />
            <TechBadge icon tech="react" />
            <TechBadge icon tech="MUI" />
            <TechBadge icon tech="keycloak" />
            <TechBadge icon tech="postgresql" />
          </span>
          <ul className="list-disc list-inside ml-1">
            <li>
              Développement intégral front et back + maintien et nouvelles
              fonctionnalités
            </li>
          </ul>
        </Card>
        <Card className="p-2 gap-2 border-0 bg-neutral-900 shadow-lg shadow-neutral-900">
          <div className="flex justify-between items-start">
            <div>
              <a href="#">
                <div className="flex items-center gap-2">
                  <img src="/icon/colas.png" width="16px" />
                  <h3 className="text-xl font-bold ">Colas</h3>
                  <ExternalLink className="text-neutral-600" size="16" />
                </div>
              </a>
              <p className="flex items-center gap-2 text-neutral-500">
                <MapPin size="16" /> Aix-en-Provence, France
              </p>
            </div>
            <Badge>Janvier 2021 → Aout 2021</Badge>
            <Badge className="font-[consolas] bg-stone-700">
              Stage fin d'études
            </Badge>
          </div>
          <p>
            J'ai été chargé de former une grande partie du personnel, chefs de
            chantier et conducteurs de travaux, à plusieurs nouveaux outils de
            suivi déployés dans toutes les agences du sud de la France. J'ai
            collecté les retours terrain et suggéré de nombreuses améliorations
            de l'expérience utilisateur.
          </p>
          <p>
            J'ai aussi réalisé plusieurs dashboards PowerBI pour examiner
            l'utilisation des services
          </p>
        </Card>
        <Card className="p-2 gap-2 border-0 bg-neutral-900 shadow-lg shadow-neutral-900">
          <Badge className="font-[consolas] bg-neutral-800">
            Autres expériences notables
          </Badge>
          <div className="flex items-baseline gap-2">
            <h3 className="font-bold">L'arbre à hélices</h3>
            <span className="text-neutral-400 flex items-center">
              Stage développeur - Première expérience{" "}
              <TechBadge className="ml-1" tech="react" />
            </span>
            <div className="flex-grow" />
            <Badge className="self-end">Mai 2019</Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="font-bold ">Festival d'avignon - IN</h3>
            <span className="text-neutral-400">
              Agent d'accueil et accompagnant PMR
            </span>
            <div className="flex-grow" />
            <Badge>Juillet 2018 & 2019</Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="font-bold ">Gentlemen du déménagement</h3>
            <span className="text-neutral-400">Déménageur</span>
            <div className="flex-grow" />
            <Badge>Juin 2018 & 2019</Badge>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default App;
