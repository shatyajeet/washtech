import React from 'react'
import Section from '../components/section'

import personalised from '../images/personalised.svg'
import personalisedActive from '../images/personalised_2.svg'
import optionLeasing from '../images/option-for-leasing.svg'
import optionLeasingActive from '../images/option-for-leasing_2.svg'
import digitalDashboard from '../images/digital-dashboard.svg'
import digitalDashboardActive from '../images/digital-dashboard_2.svg'
import pickupDelivery from '../images/pick-up-delivery.svg'
import pickupDeliveryActive from '../images/pick-up-delivery_2.svg'
import iso from '../images/iso.svg'
import isoActive from '../images/iso_2.svg'
import signature from '../images/signature-fragrance.svg'
import signatureActive from '../images/signature-fragrance_2.svg'

const signatureImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018336/WashTech/signature-fragrance_3x.png'
const optionLeasingImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018328/WashTech/option-for-leasing_3x.png'
const personalisedImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018327/WashTech/personalized-service_3x.png'
const pickupDeliveryImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018327/WashTech/free-pickup-deliver_3x.png'
const isoImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018326/WashTech/iso-certified-plants_3x.png'
const digitalDashboardImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_922/v1599018324/WashTech/digital-dashboard_3x.png'

const items = [{
  label: 'Signature Fragrance',
  description: 'We add our signature fragrance to linen, towels and other items. We can also source and prepare a fragrance as per your brand requirements.',
  icon: signature,
  iconActive: signatureActive,
  image: signatureImage
}, {
  label: 'Option for Leasing',
  description: 'Do you need to invest in towels or linens? We can take care of your needs by offering a simplified lease model that you only pay for the laundry and we take care of sourcing the finest quality towels and garments.',
  icon: optionLeasing,
  iconActive: optionLeasingActive,
  image: optionLeasingImage
}, {
  label: 'Digital Dashboard',
  description: 'We are the first in the region to offer a digital service where you can understand your consumption pattern and download reports for great business insights.',
  icon: digitalDashboard,
  iconActive: digitalDashboardActive,
  image: digitalDashboardImage
}, {
  label: 'Free Pickup & Deliver',
  description: 'We pick up and deliver your items with the most convenient time as you prefer by setting you free of hazels',
  icon: pickupDelivery,
  iconActive: pickupDeliveryActive,
  image: pickupDeliveryImage
}, {
  label: 'Finest Quality Washing',
  description: 'We are ISO certified. We use the perfect mix of detergents that prolongs the garment lifespan and also make them look as good as new. We also fix minor tear wear for items that need small work as part of our service.',
  icon: iso,
  iconActive: isoActive,
  image: isoImage
}, {
  label: 'Personalized Service',
  description: 'Our experts understand your current operations and offer customized laundry service that fits your business just the way you want.',
  icon: personalised,
  iconActive: personalisedActive,
  image: personalisedImage
}]

export default function Benefits () {
  return <Section
    id='benefits'
    title='Trust Every Wash'
    heading='Key Benefits'
    description='We elevate your business by saving time, money, and managing your inventory. We wash, iron, fold, and deliver clean linen, towels, and uniforms to your doorstep daily'
    backgroundColor='#FAFCFF'
    containerStyle={{ paddingTop: 180 }}
    items={items} />
}
