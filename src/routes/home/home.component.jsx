import Panel from '../../components/panel/panel.component';
import Banner from '../../components/banner/banner.component';

import './home.styles.scss';

const Home = () => {
  return (
    <div className='home'>
      <Panel />
      <Banner />
    </div>
  );
}

export default Home;