import Navbar from "../navbar";
import HeaderPages from "../commun/HeaderPages";
import Footer from "../footer"
import { useState } from "react";
import { Subtitles } from "@mui/icons-material";
import SubscriptionForm from "../Affiliate/SuscriptionForm";
import { UseTournementStore } from "../stores/TournementStore";
import BlogItem from "../commun/blogItem";
const TournementPage=({date})=>{
  const {tournmentlist}=UseTournementStore((state)=>state);
//call function to get tournement page by ID
const [tournement, setTournement]=useState({
date:"october 19, 2023",
eventName:"TOURNOI FIFA 23 : ÊTES-VOUS PRÊT À DEVENIR CHAMPION ?",
eventDescreption:"Prêt à montrer vos talents dans FIFA 23 sur une plus grande scène ? Bonne nouvelle, chers joueurs ! GameChampions est ravi d'annoncer ses tournois FIFA 23 et nous voulons que vous en fassiez partie. C'est plus qu'un simple jeu; c'est l'occasion de s'affronter dans des matchs de haute intensité, de gagner de l'argent, des prix et des cadeaux qui changent la donne, tout en faisant partie d'une grande communauté de joueurs partageant les mêmes idées.", 
titte1:"COMBATTEZ DANSDES MATCHS 1V1",
eventDescreption2:"Vivez l'expérience de matchs en tête-à-tête où il n'y a que vous, votre adversaire et un terrain virtuel. Dans ce format compétitif, vous ne pouvez compter que sur vos forces et vos stratégies personnelles. Montrez vos compétences, vos formations et battez vos rivaux, comme vous le feriez dans un vrai match de football.",
Subtitle:"“LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA”",
eventDescreption3:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.Lorem ispum dolore congoio summ domus probio doono colos, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus. Iuvaret deleniti vis ea, rebum movet in eos summ.",
guide:`

COMMENT ÇA MARCHE : GUIDE ÉTAPE PAR ÉTAPE
Vous êtes impatient de participer à notre tournoi FIFA 23 sur GameChampions ? Voici un guide étape par étape pour vous aider à comprendre comment naviguer à travers le processus et vous préparer pour le défi qui vous attend.  ;

S'inscrire: Pour commencer, tout ce que vous avez à faire est s'inscrire sur GameChampions.com. C'est gratuit, rapide et absolument simple. Pour vous inscrire, il vous suffit de fournir votre adresse électronique et d'accepter nos conditions générales.



- Choisissez votre tournoi: Maintenant que vous faites partie de la communauté GameChampions, sélectionnez FIFA 23 dans notre liste de jeux. Différents tournois FIFA 23 sont organisés 24 heures sur 24, vous pouvez donc choisir celui qui convient le mieux à votre emploi du temps.
Joindre un match: Il ne vous reste plus qu'à rejoindre un match. Cliquez sur le bouton "JOUER UN MATCH" et vous serez associé à un adversaire de votre niveau. Vous n'avez pas besoin d'être un Messi ou un Ronaldo pour avoir une chance de gagner. Le matchmaking est juste et équilibré, offrant des chances égales à tous.
Jouer et gagner: C'est maintenant la partie la plus amusante : le match. Assurez-vous d'avoir une bonne connexion Internet et donnez-vous à fond. Les victoires vous rapprochent des prix en espèces et des cadeaux. Chaque match gagné vous rapporte des points et vous propulse plus haut dans le classement du tournoi.
Réclamez votre prix: Si vous arrivez jusqu'à la fin et que vous gagnez le tournoi, vous pouvez réclamer les prix que vous avez durement gagnés. Les gagnants reçoivent des récompenses en espèces et des articles exclusifs de GameChampions.com. N'oubliez pas que chaque tournoi offre une nouvelle opportunité de gagner gros !
COMBATTEZ DANS DES MATCHS 1V1 `,

})




    return(
     <div className="flex flex-col justify-center items-center">
     <Navbar/>

        
<div className='flex relative w-full flex-col justify-start items-start w-10/12s pb-20 bg-bgaffiliate bg-center bg-cover bg-no-repeat  '>
<div className='absolute top-0 w-full bg-[#CA2026] z-10 h-[100%] opacity-25'>

</div>
<HeaderPages title="become affiliate"/> 

<div className=' w-full flex flex-col justify-center items-center'>
             <h1 className='w-4/12 max-sm:w-full uppercase m-4 text-[28px] text-center flex justify-center items-center text-[#CA2026] font-semibold'>become a legend with 
<br/> our tournaments</h1>

            <p className=' w-4/12 max-sm:w-full flex justify-center items-center text-center w-5/12 m-4'> Are you a passionate PC gamer with a social media account, 
            Are you a passionate PC gamer with a social media account, Twitch.TV channel, YouTube channel, or have a new website with PC gaming related content? Want an easy way to earn some cash by partnering up with the best custom PC system builder in the world? Well, Gaming ZONE Affiliate program via Commission Junction (CJ) is the perfect choice for you!
            </p>

            <h1 className="text-[29px] ">{tournement.date}</h1>
            <div className="flex justify-between">
            <div className='relative m-4 cursor-pointer '>
            




             <div className='uppercase absolute h-[100%] w-full   flex justify-center items-center z-10 '>subscribe now!</div>
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="207.29" height="45.136" viewBox="0 0 207.29 45.136">
                    <defs>
                    <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#ca2026"/>
                      <stop offset="1" stop-color="#651013"/>
                    </linearGradient>
                    </defs>
            <path id="Tracé_105" data-name="Tracé 105" d="M12.956,0h190.11L184.03,45.136H-4.223Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
             </svg>


             </div>
             <div className='relative m-4 cursor-pointer '>
            <div className='uppercase absolute h-[100%] w-full   flex justify-center items-center z-10 '>
              
            <svg 
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg" width="25" height="" viewBox="0 0 41.118 31.341">
               <path id="Discord_Logo_sans_texte" d="M34.808,12.01a33.907,33.907,0,0,0-8.369-2.6.127.127,0,0,0-.135.064,23.62,23.62,0,0,0-1.042,2.141,31.3,31.3,0,0,0-9.4,0A21.662,21.662,0,0,0,14.8,9.478a.132.132,0,0,0-.135-.064A33.813,33.813,0,0,0,6.3,12.01a.12.12,0,0,0-.055.047A34.7,34.7,0,0,0,.17,35.461a.141.141,0,0,0,.053.1,34.1,34.1,0,0,0,10.267,5.19.133.133,0,0,0,.144-.047,24.37,24.37,0,0,0,2.1-3.417.13.13,0,0,0-.071-.181,22.454,22.454,0,0,1-3.207-1.529.132.132,0,0,1-.013-.219c.216-.162.431-.33.637-.5a.127.127,0,0,1,.133-.018,24.316,24.316,0,0,0,20.664,0,.127.127,0,0,1,.135.016c.206.17.421.339.639.5a.132.132,0,0,1-.011.219A21.071,21.071,0,0,1,28.43,37.1a.131.131,0,0,0-.07.183,27.363,27.363,0,0,0,2.1,3.415.13.13,0,0,0,.144.049,33.984,33.984,0,0,0,10.283-5.19.132.132,0,0,0,.054-.095,34.475,34.475,0,0,0-6.079-23.4A.1.1,0,0,0,34.808,12.01ZM13.74,30.789a3.952,3.952,0,0,1-3.7-4.144,3.93,3.93,0,0,1,3.7-4.144,3.909,3.909,0,0,1,3.7,4.144A3.93,3.93,0,0,1,13.74,30.789Zm13.663,0a3.952,3.952,0,0,1-3.7-4.144A3.93,3.93,0,0,1,27.4,22.5a3.909,3.909,0,0,1,3.7,4.144A3.92,3.92,0,0,1,27.4,30.789Z" transform="translate(0 -9.412)" fill="#fff"/>
             </svg>           
              join discord
            </div>
           <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="207.29" height="45.136" viewBox="0 0 207.29 45.136">
                   <defs>
                   <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                     <stop offset="0" stop-color="#ca2026"/>
                     <stop offset="1" stop-color="#651013"/>
                   </linearGradient>
                   </defs>
           <path id="Tracé_105" data-name="Tracé 105" d="M12.956,0h190.11L184.03,45.136H-4.223Z" transform="translate(4.223)" fill="#5965F2"/>
            </svg>


</div>
</div>
</div>
</div>
<div className="uppercase text-[28px] w-4/12 text-center my-10">{tournement.eventName}</div>
<p className="text-[11px] w-4/12 text-center mb-10">{tournement.eventDescreption}
</p>


<div className='flex max-sm:flex-col-reverse   w-4/12 max-sm:w-full justify-between items-center pt-20'>
    <div className='flex flex-col justify-center items-center w-full max-sm:w-full max-sm:px-4 '>
        <h1 className='uppercase text-[28px] text-[#CA2026] font-semibold mb-4'>{tournement.titte1}</h1>
        <p className='mb-4 '>
         {tournement.eventDescreption2}
        </p>
        <div className="flex justify-between mb-4">
        <svg  className="mr-4" xmlns="http://www.w3.org/2000/svg" width="2" height="37.795" viewBox="0 0 2 37.795">
            <line id="Ligne_208" data-name="Ligne 208" y2="37.795" transform="translate(1)" fill="none" stroke="#ca2026" stroke-width="2"/>
          </svg>

          {tournement.Subtitle}
        </div>

       <p className="mb-4">
        {tournement.eventDescreption3}
       </p>


     <h1 className="text-[30px] text-left font-semibold mb-4">COMMENT ÇA MARCHE : GUIDE ÉTAPE PAR ÉTAPE</h1>

<p className="mb-10">{tournement.guide}</p>

        <div className='flex relative justify-center items-center '>
            <p className='uppercase absolute top-1/4'>subscribe now</p>
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="207.29" height="45.136" viewBox="0 0 207.29 45.136">
                <defs>
                  <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#ca2026"/>
                    <stop offset="1" stop-color="#651013"/>
                  </linearGradient>
                 </defs>
                <path id="Tracé_20727" data-name="Tracé 20727" d="M12.956,0h190.11L184.03,45.136H-4.223Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
        </svg>

        </div>
    </div>
   
</div>
<SubscriptionForm/>
<div className=" w-10/12 grid grid-cols-3 gape-0">
{tournmentlist.slice(0,3).map((e)=><BlogItem title={e.title}  subtitle={e.subtitle} img={e.imageURL} date={e.date}/>)}
</div>
<Footer/>
    </div>)
}
export default TournementPage;