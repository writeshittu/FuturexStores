import { Fragment } from "react";
import Products from "../../Pages/Products";
import classes from "./Elliptical.module.css";

const Elliptical = () => {
  return (
    <Fragment>
      <header className={classes.Header_box}>
        <div className={classes.content}>
          <h1 className={classes.Head}>Elliptical Header</h1>
          <p className={classes.headerText}>
            Lorem25 akeem God go do am just hang in there .....Ope lo maa end
            everything!!!!
          </p>
          <a href="/" className={classes.contentLink}>
            Begin your journey
          </a>
        </div>
      </header>
      <section className={classes.content}>
        <h4 className={classes.contentHead}>Text</h4>
        <p className={classes.contentText}>
          Loreem hhfwecewb heh the boy is not going again today but the mother
          said he should come home right away orelse he is gonna see crazy !!!
        </p>
      </section>
      <Fragment>
        <Products />
      </Fragment>
    </Fragment>
  );
};

export default Elliptical;
