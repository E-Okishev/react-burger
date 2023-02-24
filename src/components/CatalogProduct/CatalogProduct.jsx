import style from "./CatalogProduct.module.css";

function CatalogProduct(props) {
  return (
    <article className={style.product}>
      <img
        src="img/photo-5.jpg"
        alt={props.title}
        className="image"
      />

      <p className={style.price}>{props.price}<span className="currency">₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{props.title}</button>
      </h3>

      <p className={style.weight}>520г</p>

      <button className={style.add} type="button">
        Добавить
      </button>
    </article>
  );
}

export default CatalogProduct;
