import "./App.css";

import {
  AtSign,
  Backpack,
  ChefHat,
  Crosshair,
  Dumbbell,
  Gamepad2,
  Github,
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
} from "@/components/ui/hover-card";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Portfolio } from "./components/custom/Portfolio";
import { TechBadge } from "./components/custom/TechBadge";

function App() {
  return (
    <main className="py-4 px-4 sm:py-6 sm:px-3 md:py-12 md:px-6 lg:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <img
        src={`${import.meta.env.BASE_URL}/Enzo.jpeg`}
        className="rounded-xl shadow-lg w-full max-w-50 mx-auto md:mx-0 md:max-w-full md:col-span-1"
      />
      <div className="flex flex-col gap-4 md:gap-2 md:col-span-3">
        <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
          <Badge className="font-[inconsolata] bg-sky-800">
            Développeur full stack
          </Badge>
          <Badge className="bg-neutral-600 flex items-center gap-1">
            <p className="font-extrabold italic text-purple-300">XP</p>
            3+ ans
          </Badge>
          <img
            src={`${import.meta.env.BASE_URL}/flags/fr.svg`}
            width="20px"
            className="rounded-md"
          />
          <img
            src={`${import.meta.env.BASE_URL}/flags/gb.svg`}
            width="20px"
            className="rounded-md"
          />
        </div>
        <h1 className="text-3xl text-center md:text-left sm:text-4xl md:text-5xl font-bold break-words">
          Enzo GUENY MICALLEF
        </h1>
        <p className="text-base sm:text-lg text-center md:text-left text-neutral-300">
          Je suis développeur full stack qualifié en React avec un profil
          technique et créatif. J'ai les compétences pour développer une
          application entière avec une attention particulière à l'UX. Diplômé de
          Master software engineering. J'ai un fort intérêt pour l'art, le
          dessin et le jeu vidéo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-grow">
          <Card className="p-2 border-0 bg-neutral-700 flex gap-2 flex-col">
            <Badge className="bg-neutral-800">Frontend | UX</Badge>
            <div className="flex flex-row flex-wrap items-start content-start gap-1.5">
              <TechBadge className="bg-neutral-900" tech="react" />
              <TechBadge className="bg-neutral-900" tech="figma" />
              <TechBadge className="bg-neutral-900" tech="javascript" />
              <TechBadge className="bg-neutral-900" tech="tailwindcss" />
              <TechBadge className="bg-neutral-900" tech="sass" />
              <TechBadge className="bg-neutral-900" tech="css" />
            </div>
          </Card>
          <Card className="p-2 border-0 bg-neutral-700 flex gap-2 flex-col">
            <Badge className="bg-neutral-800">Backend | Infra</Badge>
            <div className="flex flex-row flex-wrap items-start content-start gap-1.5">
              <TechBadge className="bg-neutral-900" tech="node.js" />
              <TechBadge className="bg-neutral-900" tech="prisma" />
              <TechBadge className="bg-neutral-900" tech="express" />
              <TechBadge className="bg-neutral-900" tech="postgresql" />
              <TechBadge className="bg-neutral-900" tech="rubyonrails" />
              <TechBadge className="bg-neutral-900" tech="docker" />
              <TechBadge className="bg-neutral-900" tech="awslambda" />
            </div>
          </Card>
          <Card className="p-2 border-0 bg-neutral-700 flex gap-2 flex-col">
            <Badge className="bg-neutral-800">Projets | Autres</Badge>
            <div className="flex flex-row flex-wrap items-start content-start gap-1.5">
              <TechBadge className="bg-neutral-900" tech="JIRA" />
              <TechBadge className="bg-neutral-900" tech="git" />
              <TechBadge className="bg-neutral-900" tech="bitbucket" />
              <TechBadge className="bg-neutral-900" tech="unity" />
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-0">
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
          <a href="https://github.com/hankiou">
            <div className="flex items-center gap-2">
              <Github size="16" /> /hankiou
            </div>
          </a>
        </Card>
        <Card className="relative p-2 border-0 bg-neutral-700 shadow-lg shadow-neutral-900 gap-1 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}/icon/au.png`}
            alt="Icon"
            className="absolute left-[-15px] top-[30px] h-[100%] opacity-20 z-0"
          />
          <div className="flex justify-between z-1 flex-wrap gap-2">
            <Badge className="flex gap-1 items-center bg-neutral-800">
              <GraduationCap /> Formation
            </Badge>
            <Badge className="flex gap-1 items-center font-extrabold text-red-200 bg-red-900">
              BAC +5
            </Badge>
          </div>
          <span className="z-1">
            <span className="font-bold">Master</span> Ingénierie logicielle et
            société du numérique
          </span>
          <div className="text-neutral-400 flex gap-1 items-center z-1">
            <img src={`${import.meta.env.BASE_URL}/icon/au.png`} width="16px" />
            Avignon université CERI
          </div>
          <Badge className="self-center z-1">2016 → 2021</Badge>
        </Card>
        <Card className="p-2 justify-between gap-1 content-between border-0 bg-neutral-900 flex-grow">
          <Badge className="flex gap-1 items-center bg-neutral-800 ">
            <Sparkles /> Centres d'intérêt
          </Badge>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>
              <div className="flex gap-1 items-center">
                <Backpack size="16" /> Voyage & exploration
              </div>
            </HoverCardTrigger>
            <HoverCardContent side="right">
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
            <HoverCardContent side="right">
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
        <Portfolio />
      </div>
      <div className="md:col-span-3 flex flex-col gap-4 md:gap-6 mt-4 md:mt-0">
        <h2 className="md:hidden text-xl font-bold">
          Expérience professionnelle
        </h2>
        <Card className="p-2 gap-2 bg-neutral-900 shadow-lg shadow-neutral-900 border-0">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src={`${import.meta.env.BASE_URL}/icon/hiphen.webp`}
                  width="16px"
                />
                <h3 className="text-xl font-bold ">Hiphen</h3>
              </div>
              <p className="flex items-center gap-2 text-neutral-500">
                <MapPin size="16" /> Avignon, France
              </p>
            </div>{" "}
            <div className="flex flex-col sm:flex-row gap-2">
              <Badge className="font-[inconsolata] bg-stone-700">
                <Lightbulb size="16" /> Expérience principale
              </Badge>
              <Badge>Mai 2022 → Aujourd'hui</Badge>
            </div>
          </div>
          <p>
            J'ai travaillé en tant que membre d'une équipe IT de 6 personnes
            dans une entreprise d'environ 30 employés. Cette échelle implique
            une autonomie et une proactivité, souvent reconnues par mes pairs et
            ma hiérarchie.
          </p>
          <Card className="p-2 gap-1 border-green-600 shadow-md shadow-green-900 ">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <span className="text-lg">
                <span className="font-bold">Cloverfield</span>: Principale
                application destinée aux clients{" "}
                <TechBadge icon tech="rubyonrails" />
                <TechBadge icon tech="react" />
                <TechBadge icon tech="sass" />
              </span>
              <Badge className="font-[inconsolata] font-bold text-green-100 bg-green-900">
                <Crosshair size="16" /> Coeur de mes activités
              </Badge>
            </div>

            <p>
              Responsable du développement de la plateforme tout au long de mon
              expérience, j'ai conçu et intégré de puissantes fonctionnalités d'
              <span className="text-green-600">
                exploration de données
              </span>{" "}
              agronomiques, renforçant significativement son attractivité et son
              ergonomie.
            </p>
            <p>
              En comprenant les enjeux métier et en développant des outils
              d'aide à la décision, j'ai renforcé la valeur exploitable des
              données livrées.
            </p>
            <p>
              Pour la plupart des fonctionnalités, je réalisais des itérations
              de <span className="text-green-600">maquettes détaillées</span>{" "}
              pour discuter des choix avec ma direction.
              <TechBadge icon tech="figma" />
            </p>
            <p>
              En tant que responsable du projet, j'estimais les charges,
              planifiais les livraisons et assurais la{" "}
              <span className="text-green-600">relecture du code</span> produit
              par l'équipe. J'ai également{" "}
              <span className="text-green-600">encadré deux stagiaires</span>{" "}
              successifs sur une période totale de 12 mois.{" "}
              <TechBadge icon tech="JIRA" />
              <TechBadge icon tech="Bitbucket" />
            </p>
          </Card>
          <span>
            <span className="font-bold">Produit physique</span>: 2 projets
            embarqués
          </span>
          <ul className="list-disc list-inside ml-1">
            <li>
              Développement de service de traçabilité interfacé avec d'autres
              systèmes et REST API.
            </li>
            <li>
              GUI tactile en mode Kiosk facile à utiliser en contexte industriel
            </li>
          </ul>

          <span>
            <span className="font-bold">Plateforme monitoring</span>:
            Application de visualisation et validation de données
          </span>
          <ul className="list-disc list-inside ml-1">
            <li>
              Développement intégral front et back + maintien et nouvelles
              fonctionnalités
            </li>
          </ul>
        </Card>
        <Card className="p-2 gap-2 border-0 bg-neutral-900 shadow-lg shadow-neutral-900">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src={`${import.meta.env.BASE_URL}/icon/colas.png`}
                  width="16px"
                />
                <h3 className="text-xl font-bold ">Colas</h3>
              </div>
              <p className="flex items-center gap-2 text-neutral-500">
                <MapPin size="16" /> Aix-en-Provence, France
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Badge className="font-[inconsolata] bg-stone-700">
                Stage fin d'études
              </Badge>
              <Badge>Janvier 2021 → Aout 2021</Badge>
            </div>
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
          <Badge className="font-[inconsolata] bg-neutral-800">
            Autres expériences notables
          </Badge>
          <div className="flex flex-col sm:flex-row items-baseline gap-2">
            <h3 className="font-bold">L'arbre à hélices</h3>
            <span className="text-neutral-400 flex items-center">
              Stage développeur - Première expérience{" "}
              <TechBadge className="ml-1" tech="react" />
            </span>
            <div className="flex-grow" />
            <Badge className="self-end">Mai 2019</Badge>
          </div>
          <div className="flex flex-col sm:flex-row items-baseline gap-2">
            <h3 className="font-bold ">Festival d'avignon - IN</h3>
            <span className="text-neutral-400">
              Agent d'accueil et accompagnant PMR
            </span>
            <div className="flex-grow" />
            <Badge>Juillet 2018 & 2019</Badge>
          </div>
          <div className="flex flex-col sm:flex-row items-baseline gap-2">
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
