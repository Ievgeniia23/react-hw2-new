import { useState } from "react";

import css from './Pub.module.css'

import BarControl from "../BarControl/BarControl"
import BarStats from "../BarStats/BarStats"
import Modal from "../Modal/Modal";

const Pub = () => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0
  });

  const [isModalOpen, setIsModalOpen] = useState(false);


  const onAddBeer = () => {
   setBottles({...bottles, beer:bottles.beer + 1})
 }
  const onAddWine = () => {
   setBottles({...bottles, wine:bottles.wine + 1})
  }
  
  const onAddWhiskey = () => {
    setBottles({...bottles, whiskey: bottles.whiskey +1})
  }


  const onOpenModal = () => {
    setIsModalOpen(true);
  }
  const onCloseModal = () => {
    setIsModalOpen(false);
  }

    return (
      <div>
        <h2 className={css.pubTitle}> My first PUB 🍻</h2>
        <BarStats bottles={bottles} />
        <BarControl
          onAddBeer={onAddBeer}
          onAddWine={onAddWine}
          onAddWhiskey={onAddWhiskey}
        />
        <button onClick={onOpenModal} type="button">Open modal</button>
        {isModalOpen && <Modal
        onCloseModal={onCloseModal}
        
        />}
      </div>
    );
}

export default Pub