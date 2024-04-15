import Article from './posts/article';
import Footer from './components/footer';
import Banner from './components/banner';

export default function Index() {
  console.log("Index");
  return (
    <>
      <Banner />
      <Article />
      <Footer />
    </>
  );
}
