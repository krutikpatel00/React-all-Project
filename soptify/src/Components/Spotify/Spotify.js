// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import queryString from "query-string";
// import axios from "axios";





// const Spotify = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [accessToken, setAccessToken] = useState(null);
//   const [profileData] = useState(null);

//   useEffect(() => {
//     const { code, state } = queryString.parse(location.search.slice(1));

//     if (state === null) {
//       navigate({
//         pathname: "/",
//         search: queryString.stringify({
//           error: "state_mismatch",
//         }),
//       });
//     } else {
//       const authOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: "Basic " + btoa(Client_ID + ":" + Client_secret),
//         },
//         body: queryString.stringify({
//           code: code,
//           redirect_uri: redirect_uri,
//           grant_type: "authorization_code",
//         }),
//       };

//       fetch("https://accounts.spotify.com/api/token", authOptions)
//         .then((response) => response.json())
//         .then((data) => {
//           setAccessToken(data.access_token); // Store the access token
//           console.log(data.access_token);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     }
//   }, [location.search, navigate]);




//   console.log(profileData);
//   
//   return (
//     <div className="ms-[400px] text-white">
//       Spotify
//       <div>
//         <button
//           onClick={() => handleLoginClick()}
//           className="text-white bg-orange-600 rounded-xl py-2 px-6"
//         >
//           Login with Spotify
//         </button>
//       </div>
//       {profileData && (
//         <div>
//           <h2>User Profile:</h2>
//           <pre>{JSON.stringify(profileData, null, 2)}</pre>
//         </div>
//       )}
//       <button className="text-white" onClick={() => dataget()}>
//         click
//       </button>
//     </div>
//   );
// };

// export default Spotify;
