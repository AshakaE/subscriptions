import Image from 'next/image'
import classes from '../Subscription.module.sass'
import arrow from '../../../public/icons/arrow-down.png'
import widthTool from '../../../tool/WindowWidthHandler'
import github from '../../../public/icons/Github.png'

const Card = ({ type, title, price, features = [], image }) => {
  const breakpoint = 767
  return (
    <div className={type == 'extra' ? classes.cardExtra : classes.card}>
      <div className={classes.img}>
        <Image src={image} alt='icon' />
      </div>
      <h2 className={classes.title}>{title}</h2>
      {widthTool() <= breakpoint ? (
        <>
          {type == 'extra' ? (
            <p className={classes.price}>
              Download
              <span> / Free</span>
            </p>
          ) : title == 'Global' ? (
            <div className={classes.price}>
              <div>
                <p>{price}</p>
                <span>&nbsp;from&nbsp;</span>
                <p>€1000</p>
                <span>/month</span>
              </div>
            </div>
          ) : (
            <p className={classes.price}>
              {price}
              <span>/annually</span>
            </p>
          )}
          {type == 'extra' ? (
            <>
              <button className={classes.buttonExtra}>
                <div className={classes.githubIcon}>
                  <Image src={github} alt='icon' />
                </div>
                <div>
                  <p>Source Code</p>
                </div>
              </button>
              <button className={classes.subButton}>Rolling Release</button>
            </>
          ) : title == 'Global' ? (
            <button className={classes.subButton}>
              <div>Contact us</div>
            </button>
          ) : (
            <button className={classes.subButton}>
              <div>Subscribe</div>
            </button>
          )}
          <div className={classes.arrow}>
            <Image src={arrow} alt='icon' />
          </div>
        </>
      ) : (
        <>
          {type == 'extra' ? (
            <p className={classes.price}>{price}</p>
          ) : title == 'Global' ? (
            <div className={classes.price}>
              <div>
                <p>{price}</p>
                <span>&nbsp;from&nbsp;€1000/month</span>
              </div>
            </div>
          ) : (
            <p className={classes.price}>
              {price}
              <span>annually</span>
            </p>
          )}
          <ul className={classes.features}>
            {features.map((item) => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
          {type == 'extra' ? (
            <>
              <button className={classes.buttonExtra}>
                <div className={classes.githubIcon}>
                  <Image src={github} alt='icon' />
                </div>
                <div>
                  <p>Source Code</p>
                </div>
              </button>
              <button className={classes.subButton}>Download Images</button>
            </>
          ) : (
            <button className={classes.subButton}>
              <div>Request a quote</div>
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Card
