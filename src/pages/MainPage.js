import React, { useState, useEffect } from "react";
import "../pagesCSS/MainPage.css";
import LeftBar from "../components/LeftBar";
import FriendActivity from "../components/FriendActivity";
import BottomBar from "../components/BottomBar";

import MainMiddle from "../components/MainMiddle";
import ProfileMiddle from "../components/ProfileMiddle";
import LyrcsMieddle from "../components/LyrcsMiddle";
import LyrcsMiddle from "../components/LyrcsMiddle";

const MainPage = () => {
  const [currentPlace, setCurrentPlace] = useState("main");
  // DUMMY DATALAR
  const userData = {
    username: "UserName",
    profilePicture:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695", // Profil resminin yolunu güncelleyin
    friendCount: 5, // Arkadaş sayısını güncelleyin
  };

  // Son calınan 4 playlıst
  const lastPlaylists = [
    {
      name: "Playlist 1",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Playlist 2",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Playlist 3",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Playlist 3",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Playlist 3",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Playlist 3",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },

    // Add more playlists as needed
  ];
  const recomendedPlaylists = [
    {
      name: "Mix 1",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 2",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 3",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 4",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 5",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 6",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 7",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
    {
      name: "Mix 8",
      thumbnail:
        "https://cdn.mos.cms.futurecdn.net/oCtbBypcUdNkomXw7Ryrtf-650-80.jpg.webp",
    },
  ];

  const song = {
    title: "Beni Böyle Hatırla",
    artist: "Çetin Dilşiz",
    duration: "2:48",
    lyrics: [
      "Sessiz bir köşede her şeyden uzak",
      "Meçhul yarınlara terk edilmişim",
      "Dostluklar yalanmış sevgiler tuzakmış",
      "Tuzak",
      "Hayret yanılmışım yalnızım şimdi",
      "Oysa mutluluğu hayal etmiştim",
      "Gidenler unutmuş aşkları yalanmış",
      "Yalan",
      "Güneşin doğuşu batışı farksız",
      "Nasıl yaşanırsa yaşadım ben aşksız",
      "Güneşin doğuşu batışı farksız",
      "Nasıl yaşanırsa yaşadım ben aşksız",
      "Demir attım yalnızlığa",
      "Bir hasret denizinde",
      "Ve şimdi hayallerim o günlerin izinde",
      "Yüreğimde duygular ümitlerim nerede",
      "Demir attım yalnızlığa",
      "Bir hasret denizinde",
      "Ve şimdi hayallerim o günlerin izinde",
      "Yüreğimde duygular ümitlerim nerede",
      "Şöyle bir düşünüp her şeyi birden",
      "Neden anıları bitirmeyişim",
      "Yalanmış sevgiler kalbimden uzakmış",
      "Uzak",
      "Boşa beklemişim yollara bakıp",
      "Kurak topraklara umutlar ekmişim",
      "Arzular avuttu gördüğüm hayalmiş",
      "Hayal",
      "Güneşin doğuşu batışı farksız",
      "Nasıl yaşanırsa yaşadım ben aşksız",
      "Güneşin doğuşu batışı farksız",
      "Nasıl yaşanırsa yaşadım ben aşksız",
      "Demir attım yalnızlığa",
      "Bir hasret denizinde",
      "Ve şimdi hayallerim o günlerin izinde",
      "Yüreğimde duygular ümitlerim nerede",
      "Demir attım yalnızlığa",
      "Bir hasret denizinde",
      "Ve şimdi hayallerim o günlerin izinde",
      "Yüreğimde duygular ümitlerim nerede",

      // ... More lyrics lines
    ],
    genre: "Pop, Dance",
    mood: "Uplifting",
    recordingType: "Studio",
    instruments: "Guitar, Piano, Drums",
    playCount: 100,
    releaseYear: 2021,
    dateAdded: "2023-04-15",
    userPrevRating: 2,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
  };

  const friendsData = [
    {
      name: "Idil Güler",
      lastListenedSong: "Song Name 1",
      profilePicture:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
    },
    {
      name: "Umit Colak",
      lastListenedSong: "Song Name 2",
      profilePicture:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
    },
    {
      name: "Halil Colak",
      lastListenedSong: "Song Name 3",
      profilePicture:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
    },
    // Add more friend objects
  ];
  // Dummy data for playlists
  const playlists = [
    {
      playlist_name: "EFKARLI IKEN",
      playlist_picture:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
      song_number: "12949129412",
    },
    {
      playlist_name: "GAZLAAAAAAA",
      playlist_picture:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
      song_number: "124124",
    },
    {
      playlist_name: "HANIMI DUSUNURKEN",
      playlist_picture:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1696331695",
      song_number: "9999999999",
    },
    // Add more playlists here...
  ];
  // DUMMY DATALAR
  return (
    <>
      <div className="main-container">
        <LeftBar playlists={playlists} setCurrentPlace={setCurrentPlace} />

        {currentPlace === "main" && (
          <MainMiddle
            lastPlaylists={lastPlaylists}
            recomendedPlaylists={recomendedPlaylists}
          ></MainMiddle>
        )}
        {currentPlace === "lyrc" && <LyrcsMiddle song={song}></LyrcsMiddle>}
        {currentPlace === "profile" && (
          <ProfileMiddle
            lastPlaylists={lastPlaylists}
            userData={userData}
          ></ProfileMiddle>
        )}

        <FriendActivity friendsData={friendsData} />
        <BottomBar
          song={song}
          setCurrentPlace={setCurrentPlace}
          currentPlace={currentPlace}
        />
      </div>
    </>
  );
};
export default MainPage;