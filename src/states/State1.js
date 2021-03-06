/**
 * 开场场景
 */

import Phaser from 'phaser'
import { setSize, setFull } from '../config'
import Poke from '../utils/poke'
const w = store.get('w')
const h = store.get('h')
import Base from './base'
const poke = new Poke();
const allCards = poke.generatePoker();
export default class extends Base {

  init() {
    this.stage.backgroundColor = '#dbdbdb';
  }
  preload() {

  }
  create() {

    let group = this.add.group();
    let group2 = this.add.group();

    let five = poke.dealPoker(5);
    let five2 = poke.dealPoker(5);

    this.loadArr(five);
    this.loadArr(five2);

    let n =0.1

    for(let i = 0;i<5;i++){
        let poke1 = this.as(w*n,h*.1,'poke',20);
        let poke2 = this.as(w*n,h*.2,'poke',20);
        let poke3 = this.as(w*n,h*.2,'poke',20);
        poke1.frame = five[i].number
        poke2.frame = five2[i].number
        poke3.frame = five2[i].number
        n+=0.2

        group.add(poke1)
        group.add(poke2)
    }

    group.children.forEach(v=>{

      v.inputEnabled = true;
      v.events.onInputDown.add(()=>{
        let n = v.frame;
        console.log(allCards[n].name)
      })

    })

  }

  loadArr(arr){
      arr.forEach((v,k)=>{
          console.log(v)
      });
  }


}
