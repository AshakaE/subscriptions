import { useState } from 'react'
import classes from './Subscription.module.sass'
import essentials from '../../public/icons/essentials.png'
import corporate from '../../public/icons/global_gp.png'
import mission from '../../public/icons/mission_critical.png'
import production from '../../public/icons/production.png'
import standard from '../../public/icons/standard.png'
import global from '../../public/icons/global.png'
import rollingRelease from '../../public/icons/download.png'
import Card from './extracts/Card'

const Subscription = () => {
  const [page, setPage] = useState(1)

  const handlePage = (e) => {
    setPage(e.target.value)
  }

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <section className={classes.heading}>
          <h1 className={classes.pageTitle}>Subscriptions</h1>
          <div className={classes.option}>
            <p className={classes.subTitle}>I will pay:</p>
            <ul className={classes.optionsList}>
              <li value='1' className={classes.selected}>
                Annual
              </li>
              <li>Quarterly</li>
            </ul>
          </div>
          <div className={classes.option}>
            <p className={classes.subTitle}>I need:</p>
            <ul className={classes.optionsList}>
              <li
                onClick={handlePage}
                value='1'
                className={page == 1 ? classes.selected : ''}
              >
                Software on-premises
              </li>
              <li
                className={page == 2 ? classes.selected : ''}
                onClick={handlePage}
                value='2'
              >
                Software + support
              </li>
              <li
                onClick={handlePage}
                value='3'
                className={page == 3 ? classes.selected : ''}
              >
                Software in cloud
              </li>
            </ul>
          </div>
        </section>
        <section className={classes.offerSection}>
          {page == 3 ? (
            <Card
              title='Standard'
              price='€600'
              image={standard}
              features={[
                'One HA pair (two routers in VRRP)',
                'Next business day SLA',
                'Access to updates and source code',
                'Support via Web/Email – 8×5',
                'Software for cloud and premises included',
                'OEM available',
              ]}
            />
          ) : page == 2 ? (
            <>
              <Card
                title='Standard'
                price='€600'
                image={standard}
                features={[
                  'One HA pair (two routers in VRRP)',
                  'Next business day SLA',
                  'Access to updates and source code',
                  'Support via Web/Email – 8×5',
                  'Software for cloud and premises included',
                  'OEM available',
                ]}
              />
              <Card
                title='Production'
                image={production}
                price='€1500'
                features={[
                  'One HA pair (two routers in VRRP)',
                  '4H SLA',
                  'Access to updates and source code',
                  'Access to images for virtualization platforms',
                  'Access to images for bare metal platforms',
                  'Remote support included',
                  'Support via Web/Email/Chat – 24×7',
                  'Software for cloud and premises included',
                  'OEM available',
                ]}
              />
              <Card
                title='Mission Critical'
                image={mission}
                price='€6000'
                features={[
                  'One HA pair (two routers in VRRP)',
                  '1H SLA',
                  'Access to updates and source code',
                  'Access to images for virtualization platforms',
                  'Access to images for bare metal platforms',
                  'Remote support included',
                  'Support via Web/Email/Chat/Phone – 24×7',
                ]}
              />
            </>
          ) : (
            <>
              <Card
                title='Professional'
                price='€600'
                image={essentials}
                features={[
                  'Deploy unlimited routers',
                  'Access to updates and security hotfixes',
                  'Best Effort Support (8x5) via email/web portal',
                ]}
              />
              <Card
                title='Corporate'
                price='€6000'
                image={corporate}
                features={[
                  'Deploy unlimited routers',
                  'Access to updates and security hotfixes',
                  'Images for all platforms',
                  'Protective security notifications',
                  'Best Effort Support (24x7) via email/web portal',
                ]}
              />
              <Card
                title='Global'
                price='Tailored'
                value='Subscribe'
                image={global}
                features={[
                  'Deploy unlimited routers',
                  'Access to updates and security hotfixes',
                  'Images for all platforms',
                  'Protective security notifications',
                  'Priority Support (24x7) via email/web/ Terms or Slack',
                ]}
              />
              <Card
                type='extra'
                title='Rolling Release'
                price='Free Of Charge'
                value='Subscribe'
                image={rollingRelease}
                features={[
                  'VyOS nightly builds are automatically produced from the current      branch every day. They include all the latest code from maintainers and community contributors.',
                ]}
              />
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default Subscription
