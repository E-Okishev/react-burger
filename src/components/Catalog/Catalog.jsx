import CatalogProduct from "../CatalogProduct/CatalogProduct";
import Container from "../Container/Container";
import Order from "../Order/Order";
import style from "./Catalog.module.css";

const goodsList = [
  { title: "Мясная бомба", price: 899 },
  { title: "Супер сырный", price: 659 },
  { title: "Сытный", price: 529 },
  { title: "Итальянкий", price: 799 },
  { title: "Вечная классика", price: 109 },
  { title: "Тяжелый удар", price: 699 },
];

function Catalog() {
  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              {goodsList.map((item) => (
                <li className={style.item}>
                  <CatalogProduct title={item.title} price={item.price} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Catalog;
