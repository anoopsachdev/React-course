import anoopHot from '../assets/anoop_hot.jpeg';

function Card({image, username, favSong, artist = "Not known"}) {
    // console.log("props", props) // now props is an empty object
    // as something is passed to props in the app.jsx, props would have that value
  return (
    <>
    <div className="relative h-[400px] w-[300px] rounded-xl overflow-hidden shadow-lg">
        <img
            src={image}
            alt="Anoop"
            className="z-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-stone-800 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
            <h2 className="text-5xl font-semibold text-white">{username}</h2>
            <p className="mt-2 text-sm text-gray-300">
            {favSong}
            <br />
            Artist: {artist || "Not known"}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            button 
            </button>
        </div>
    </div>
    </>
  )
}

export default Card

// notes
/*
extension - react snippets
rcfe - generates the react functional component
*/

// notes:
/*
Props
-Whenever you make a component, each component has access to props

*/