import { API_URI } from "../../Const";
import style from "./CatalogProduct.module.css";

function CatalogProduct({ item }) {
  return (
    <article className={style.product}>
      <img
        src={`${API_URI}/${item.image}`}
        alt={item.title}
        className="image"
      />

      <p className={style.price}>
        {item.price}
        <span className="currency">₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{item.title}</button>
      </h3>

      <p className={style.weight}>{item.weight}г</p>

      <button className={style.add} type="button">
        Добавить
      </button>
    </article>
  );
}

export default CatalogProduct;
