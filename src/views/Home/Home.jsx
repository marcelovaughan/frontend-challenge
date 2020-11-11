import React from 'react'
import { Button } from 'plurall-ui'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <Link to="/busca"><Button>Encontre um artista</Button></Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
