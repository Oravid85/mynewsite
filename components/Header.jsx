export function Header(props) {
  return (
    <header className={`bg ${props.currentlecture.bgColor} flex space-x-4 p-4`}>
      {props.artistsData.map((artist) => (
        <button
          className="p-4 bg-amber-200 rounded-2xl mx-4"
          key={artist.name}
          onClick={() => props.setcurrentlecture(artist)}
        >
          {artist.name}
        </button>
      ))}

      <button
        className="p-4 bg-amber-200 rounded-2xl mx-4"
        key="aboutMe"
        onClick={() => props.setcurrentlecture(props.aboutMe)}
      >
        {props.aboutMe.name}
      </button>
    </header>
  );
}
