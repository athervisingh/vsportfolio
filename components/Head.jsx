import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Athervi Singh is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="athervi singh, athervi, singh, web developer portfolio, athervi web developer, athervi developer, mern stack, Athervi Singh portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Athervi Singh's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:url" content="https://vsportfolio-fawn.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: ' Athervi Singh ',
};
