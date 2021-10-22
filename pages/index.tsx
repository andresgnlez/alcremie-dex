import Head from 'next/head';

import ALCREMIES from 'data/alcremies.json';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Alcremie Dex</title>
    </Head>
    <div className="max-w-screen-xl m-auto">
      {ALCREMIES.data.map(({ name: familyName, members }) => (
        <div key={familyName} className="mt-10 first:m-0 last:mb-10">
          <h2 className="font-sans text-4xl text-right">{familyName}</h2>
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2.5">
            {members.map(({ id, name }) => (
              <li key={id} className="w-full mt-5 border rounded-md">
                <div
                  className="h-72 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(/images/alcremies/${id}.png)`,
                  }}
                />
                <div className="border-t p-2 mt-4">
                  <h3 className="font-serif font-semibold text-center text-lg">{name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

export default Home;
