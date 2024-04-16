import Article from './posts/article';
import Footer from './components/footer';
import Banner from './Banner';

export default function Index() {
  console.log("Adding the banner");
  return (
    <>
      <Article />
      <Footer />
    </>
  );
}
