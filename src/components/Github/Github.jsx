import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-white p-10 m-4 flex justify-around">
      <div className="text-3xl flex flex-col justify-center gap-6">
        <p>Github followers : {data.followers}</p>
        <p>Github repositries : {data.public_repos}</p>
      </div>
      <div className="order-first">
        <img src={data.avatar_url} alt="github picture" width={300} />
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/muhammadasif46");
  return response.json();
};
