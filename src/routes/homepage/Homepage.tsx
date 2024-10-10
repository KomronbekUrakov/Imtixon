import {Hero} from "../../components/hero/Hero";
import Trend from "../../components/trend/Trend";
import Brand from "../../components/brand/Brand";
import TopProducts from "../../components/topProducts/TopProducts";
import {Small} from "../../components/small/Small";
import {Recommended} from "../../components/recommended/Recommended";
import { Compaign } from "../../components/compaign/Compaign";
import { Edited } from "../../components/edited/Edited";
import { Community } from "../../components/community/Community";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Trend />
      <Brand />
      <TopProducts />
      <Small />
      <Recommended />
      <Compaign/>
      <Edited/>
      <Community/>
    </div>
  );
};

export default Homepage;