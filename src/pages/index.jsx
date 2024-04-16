import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Today } from '../components/Today.jsx';

const Homepage = () => {
  return (
    <>
      <h1>Dnes je: </h1>
      <Today day="14" month="4" year="2024" />
    </>
  );
};

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Homepage />
  </div>,
);
