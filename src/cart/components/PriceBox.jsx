import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Container, Grid } from '@mui/material'
import { CartLayout } from '../layout/CartLayout'
import { Prices } from './Prices'

export const PriceBox = ({ products }) => {
  let totalPrice = 0

  products.forEach((product) => {
    totalPrice += product.price
  })

  return (
    <CartLayout title='Resumen de compra' className='w-80 self-start px-7 pb-7'>
      <Grid container>
        <Prices
          title={`Productos (${products.length})`}
          value={`$ ${totalPrice}`}
          classTitle='text-sm'
          classValue='text-sm'
        />
        <Prices
          title='Envío'
          value='Gratis'
          classTitle='text-sm'
          classValue='text-[#00a650] text-base'
        />
        <Prices
          title='Total'
          value={`$ ${totalPrice}`}
          classTitle='text-base font-semibold'
          classValue='text-base font-semibold'
        />

        <Container className='flex justify-center p-0'>
          <Button
            variant='contained'
            color='success'
            className='bg-[#3483fa] w-full'
            LinkComponent={Link}
            to='/checkout'
          >
            Continuar compra
          </Button>
        </Container>
      </Grid>
    </CartLayout>
  )
}

PriceBox.propTypes = {
  products: PropTypes.array.isRequired
}
