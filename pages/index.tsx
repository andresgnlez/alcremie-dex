import classnames from 'classnames';

import Head from 'next/head';

import ALCREMIES from 'data/alcremies.json';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Alcremie Dex</title>
    </Head>
    <div className="max-w-screen-xl m-auto">
      {ALCREMIES.data.map(({ name: familyName, members, instructions }) => (
        <div key={familyName} className="mt-10 last:mb-10">
          <h2 className="font-sans text-4xl text-right">{familyName}</h2>
          <h3 className="font-serif text-right">({instructions})</h3>
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2.5 -mt-5">
            {members.map(({ id, caught }) => (
              <li key={id} className="w-full mt-5 border rounded-md">
                <div
                  className={classnames({
                    'h-72 mb-4 bg-contain bg-center bg-no-repeat': true,
                    'after:block after:h-full after:w-full opacity-20 hover:opacity-100': caught,
                  })}
                  style={{
                    backgroundImage: `url(/images/alcremies/${id}.png)`,
                  }}
                />
                <div className="border-t p-2">
                  <div
                    className={classnames({
                      'h-8 bg-contain bg-center bg-no-repeat opacity-30': true,
                      'opacity-100': caught,
                    })}
                    style={{
                      backgroundImage: `url(/images/pokeball.png)`,
                    }}
                  />
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
