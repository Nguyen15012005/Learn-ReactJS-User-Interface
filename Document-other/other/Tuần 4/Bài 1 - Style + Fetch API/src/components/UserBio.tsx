import avatar from "../assets/avatar.png";

const UserBio = () => {
  return (
    <div className="my-8">
      <h3 className="text-3xl font-bold">Emma's Gonzalez's Recipe Book</h3>
      <div className="flex flex-row my-8">
        <div className="w-1/5">
          <img
            src={avatar}
            alt=""
            className="rounded-full w-3/4 border-pink-500 border-2"
          />
        </div>
        <div className="w-4/5 flex flex-col justify-between">
          <p className="text-xl text-gray-500">
            Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="flex flex-row justify-left items-center space-x-12 mt-4">
            <p className="text-pink-500">6.5k Subscribes</p>
            <button className="bg-pink-500 text-white px-8 py-2 rounded-2xl hover:bg-pink-600">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
