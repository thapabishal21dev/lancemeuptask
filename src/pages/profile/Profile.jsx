import { useContext } from "react";
import { ProfileContext } from "../../App";
import vincent from "../../assets/vincent.jpg";

export const ProfilePage = () => {
  const { profileData } = useContext(ProfileContext);
  console.log(profileData);

  return (
    <body className="bg-gray-200">
      <div className="max-w-lg mx-auto mt-5 bg-white rounded-lg shadow-md p-5">
        {profileData && profileData.userimage ? (
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={URL.createObjectURL(profileData.userimage)}
            alt="Profile picture"
            height="100px"
            width="100px"
          />
        ) : (
          <div>
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={vincent}
              alt="Profile picture"
              height="100px"
              width="100px"
            />
          </div>
        )}
        <h2 className="text-center text-2xl font-semibold mt-3">
          {profileData && profileData.firstname ? (
            <span>{profileData && profileData.firstname}</span>
          ) : (
            <span>vincent van gogh</span>
          )}
        </h2>
        <p className="text-center text-gray-600 mt-1">
          {profileData && profileData.userlocation ? (
            <span> {profileData && profileData.userlocation}</span>
          ) : (
            <span> Zundert, Netherlands</span>
          )}
        </p>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            {profileData && profileData.userbio ? (
              <span>{profileData && profileData.userbio}</span>
            ) : (
              <span>
                incent Willem van Gogh was a Dutch Post-Impressionist painter
                who posthumously became one of the most famous and influential
                figures in Western art history. In a period of 10 years, he
                created about 2,100 artworks, including around 860 oil
                paintings, most of which date from the last two years of his
                life.
              </span>
            )}
          </p>
        </div>
      </div>
    </body>
  );
};
