import { useEffect } from 'react';
import { CurrencyField } from './CurrencyField';
import axios from 'axios';

// axios.delete(URL, {
//   headers: {
//     Authorization: authorizationToken,
//   },
//   data: {
//     source: source,
//   },
// });
const instance = axios.create({
  headers: {
    Authorization: null,
  },
});

export const Currency = () => {
  // const [rates, setRates] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const { data } = await instance.get(
          'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
        );
        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    }

    fetchApi();

    // async function name(params) {
    //   const resp = await fetch(
    //     'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
    //   );
    //   const data = await resp.json();
    //   console.log(data);
    //   return data;
    // }
    // name();
  });

  return (
    <>
      <div className="currencyContainer">
        <div className="currencyTop">
          <ul className="currencyTitleList">
            <li className="currencyTitleItem">
              <p className="currencyTitle">Currency</p>
            </li>
            <li className="currencyTitleItem">
              <p className="currencyTitle">Purchase</p>
            </li>
            <li className="currencyTitleItem">
              <p className="currencyTitle">Sale</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <CurrencyField currency="USD" />
            <CurrencyField currency="EUR" />
            <CurrencyField currency="USD" />
          </ul>
        </div>

        <div className="currencyBg"></div>
      </div>
    </>
  );
};
