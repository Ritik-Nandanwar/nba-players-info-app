import Link from "next/link"

// export const getStaticProps = async () => {
//   const data = await fetch("https://www.balldontlie.io/api/v1/players");
//   const players = await data.json();
//   // console.log(players);
//   return {
//     props: {
//       players,
//     },
//   };
// };
export default function Home({ players }) {
  return (
    // <div className="bg-blue-300 h-screen mx-auto overflow-scroll overflow-x-hidden pt-10">
    //   <div className="w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    //     {players.data.map((player) => (
    //       <Link href={"/" +player.id} key={player.id}>
    //       <a>
    //         <div>
    //         {" "}
    //         <div className="max-w-sm rounded bg-blue-200 overflow-hidden shadow-lg py-6">
    //           <div className="px-6 py-4">
    //             <div className="font-bold text-xl mb-2">
    //               {player.first_name} {player.last_name}
    //             </div>
    //           </div>
    //           <h3 className="px-6 mb-3">
    //             Team
    //             <span className="ml-2 font-bold">{player.team.full_name}</span>
    //           </h3>
    //           <h3 className="px-6 mb-3">
    //             City
    //             <span className="ml-2 font-bold">{player.team.city}</span>
    //           </h3>
    //           <h3 className="px-6 mb-3">
    //             Division
    //             <span className="ml-2 font-bold">{player.team.division}</span>
    //           </h3>
    //         </div>
    //       </div>
    //       </a>
    //       </Link>
          
    //     ))}
    //   </div>
    <div className="text-red-400 text-center py-8">HELLO</div>
    
  );
}
