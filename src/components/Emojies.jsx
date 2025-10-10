import axios from "axios";
import { useEffect, useState } from "react";

const httpClient = axios.create();

export default function MyEmojies() {
  const [emojiResutlts, setEmojiResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchEmojies = () => {
    httpClient
      .get("https://emojihub.yurace.pro/api/search?q=" + searchText)
      .then((result) => {
        setEmojiResults(result.data);
      });
  };

  useEffect(() => {
    searchEmojies();
  }, []);
  return (
    <div>
      <h1 className="text-3xl">get Emojies:</h1>
      <input
        value={searchText}
        onChange={(ev) => {
          setSearchText(ev.target.value);
        }}
        className="bg-sky-100 p-3 rounded-full w-44"
      />
      <button
        className="bg-amber-400 p-5 "
        onClick={() => {
          searchEmojies();
        }}
      >
        search{" "}
      </button>

      <div>
        <h2 className="text-2xl"> EMOJIES FOUND:</h2>

        {emojiResutlts.slice(0, 30).map((emoji) => {
          return (
            <div key={Math.random()}>
              <span dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}></span>
              {emoji.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
