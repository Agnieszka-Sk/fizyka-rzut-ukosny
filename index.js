const przyspieszenieZiemskie = 9.81;

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

const katInput = document.querySelector('#kat');
const zasiegRezultat = document.querySelector('#zasiegRezultat');
const predkoscPoczatkowaInput = document.querySelector('#predkoscPoczatkowa');
const obliczZasiegButton = document.querySelector('#obliczZasiegRzutu');

obliczZasiegButton.addEventListener('click', () => {
  const kat = Number(katInput.value);
  const predkoscPoczatkowa = Number(predkoscPoczatkowaInput.value);
  const zasieg = (Math.pow(kat, 2) / przyspieszenieZiemskie) * Math.sin(2 * toRadians(kat));
  zasiegRezultat.textContent = zasieg;
});

const katInput1 = document.querySelector('#kat1');
const predkoscPoczatkowaInput1 = document.querySelector('#predkoscPoczatkowa1');
const obliczMaksymalnaWysokoscButton = document.querySelector('#obliczMaksymalnaWysokosc');
const maksymalnaWysokoscRezultat = document.querySelector('#maksymalnaWysokoscRezultat');

obliczMaksymalnaWysokoscButton.addEventListener('click', () => {
  const kat = Number(katInput1.value);
  const predkoscPoczatkowa = Number(predkoscPoczatkowaInput1.value);
  const maksymalnaWysokosc = (Math.pow(predkoscPoczatkowa, 2) / (2 * przyspieszenieZiemskie)) * Math.pow(Math.sin(toRadians(kat)), 2);
  maksymalnaWysokoscRezultat.textContent = maksymalnaWysokosc;
});

const katInput2 = document.querySelector('#kat2');
const predkoscPoczatkowaInput2 = document.querySelector('#predkoscPoczatkowa2');
const obliczCzasTrwaniaLotuButton = document.querySelector('#obliczCzasTrwaniaLotu');
const czasTrwaniaLotuRezultat = document.querySelector('#czasTrwaniaLotuRezultat');

obliczCzasTrwaniaLotuButton.addEventListener('click', () => {
  const kat = Number(katInput2.value);
  const predkoscPoczatkowa = Number(predkoscPoczatkowaInput2.value);
  const czasTrwaniaLotu = (2 * predkoscPoczatkowa * Math.sin(toRadians(kat))) / przyspieszenieZiemskie;
  czasTrwaniaLotuRezultat.textContent = czasTrwaniaLotu;
});


const katInput3 = document.querySelector('#kat3');
const predkoscPoczatkowaInput3 = document.querySelector('#predkoscPoczatkowa3');
const obliczWysokoscIOdlegloscLotuButton = document.querySelector('#obliczWysokoscIOdleglosc');
const wysokoscRezultat = document.querySelector('#wysokoscRezultat');
const odlegloscRezultat = document.querySelector('#odlegloscRezultat');
const czasInput = document.querySelector('#czas');

obliczWysokoscIOdlegloscLotuButton.addEventListener('click', () => {
  const kat = Number(katInput3.value);
  const czas = Number(czasInput.value);
  const predkoscPoczatkowa = Number(predkoscPoczatkowaInput3.value);
  const wysokosc = predkoscPoczatkowa * czas * Math.sin(toRadians(kat)) - ((przyspieszenieZiemskie * Math.pow(czas, 2)) / 2);
  wysokoscRezultat.textContent = wysokosc;
  const odleglosc = predkoscPoczatkowa * czas * Math.cos(toRadians(kat));
  odlegloscRezultat.textContent = odleglosc;
});
