import { CardProduct } from '../../product/components'
import { CategoriesLayout } from '../layout/CategoriesLayout'
import smartphoneRepair from '../../assets/imgs/backgrounds/smartphoneRepair.webp'

export const RepairsPage = () => {
  return (
    <CategoriesLayout
      title='Todas Nuestras Reparaciónes'
      titlePrimary='Calidad de Nuestras Reparaciónes'
      titleSecondary='Experticia y conocimientos técnicos'
      titleThird='Uso de piezas de calidad'
      titleFourth='Garantía sólida'
      descriptionPrimary='Nuestro enfoque en la calidad comienza desde el primer contacto con nuestros clientes. Nuestro equipo de servicio al cliente está altamente capacitado para entender y evaluar los problemas que enfrentan tus dispositivos o equipos.'
      descriptionSecondary='Nuestro equipo de técnicos cuenta con una amplia experiencia y conocimientos en una variedad de dispositivos y equipos.'
      descriptionThird='Entendemos la importancia de utilizar piezas de repuesto de alta calidad en nuestras reparaciones.'
      descriptionFourth='Respaldamos nuestro trabajo con garantías sólidas. Queremos que te sientas seguro y satisfecho con nuestros servicios.'
      urlSecondary={smartphoneRepair}
    >
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </CategoriesLayout>
  )
}
