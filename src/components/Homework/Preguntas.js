import { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import HomeworkCard from './HomeworkCard/HomeworkCard'
import { ActividadesArr } from '../../Data'

export default function Lecturas () {
  const [ActividadesState, setActividadesState] = useState()

  useEffect(() => {
    setActividadesState(ActividadesArr)
  }, [])

  return (
    <Grid item container xs={12} sm={10} spacing={10}>
      {ActividadesState &&
        ActividadesState.map((data) => (
          <Grid item xs={12} lg={6}>
            <HomeworkCard data={data} />
          </Grid>
        ))}
    </Grid>
  )
}
