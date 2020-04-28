import herolist from './herolist.json';

export default {
  'POST /apimock/freeheros.json': (req, res) => {
    const { number } = req.body;
    function getRandomArrayElements(arr, count) {
      const shuffled = arr.slice(0);
      let i = arr.length;
      let min = i - count;
      let temp, index;

      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }

      return shuffled.slice(min);
    }

    const freeheros = getRandomArrayElements(herolist, number);

    res.send(freeheros);
  },
};
